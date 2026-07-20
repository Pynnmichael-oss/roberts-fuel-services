# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static brochure website. Pure HTML/CSS/vanilla JS — no build tools, no framework, no dependencies to install. Open any `.html` file in a browser (or serve the folder) to develop locally. Network access is needed even locally: Google Fonts, Unsplash hero images, and the coverage-map TopoJSON are all loaded from external hosts.

**Naming note:** the repo, local folder, and GitHub Pages URL are all `roberts-fuel-services`, but the site was rebranded on-page to **"G&D Dynamic Services"** (owner: Garrison Roberts). Don't "fix" the business name back to Roberts Fuel Services — that was an intentional rebrand (see `git log` — `rebrand: Roberts Fuel Services → G&D Dynamic Services`). The repo/folder name is just stale and not worth renaming (GitHub Pages URL would break).

## Commands

There is no build, lint, or test tooling — verification is manual:

- **Syntax-check `config.js`** after editing (it's the one file most edits touch):
  `node --input-type=module -e "globalThis.window={}; await import('file:///absolute/path/to/config.js').catch(e=>{console.error(e.message);process.exit(1)}); console.log('config.js parses OK')"`
- **Visual check**: serve the folder locally (e.g. `python3 -m http.server`) and load pages in a browser, or use a headless screenshot (`google-chrome --headless=new ... --screenshot=...`) against a locally-served URL to check layout/mobile breakpoints.
- **Deploy check**: after pushing, `curl -s https://pynnmichael-oss.github.io/roberts-fuel-services/` and `.../config.js` to confirm the live site picked up changes.

## Deployment

Hosted on GitHub Pages (branch: `main`, folder: root, no `.nojekyll` currently present). Pushing to `main` triggers a ~1–2 minute deploy. No CI, no build step.

## Architecture

All content is driven by a single config object:

- **`config.js`** — defines `window.SITE_CONFIG` with all business text, contact info, coverage states, services, and the Formspree ID. **This is the only file that should need editing for content changes.**
- **`shared.js`** — reads `SITE_CONFIG` and injects the availability bar (`#avail-bar`), nav (`#site-nav`), and footer (`#site-footer`) into every page. Exposes `window.initSite()`.
- **`style.css`** — all styles in one flat file; colors are CSS custom properties on `:root` (slate & safety-orange palette — `--slate-*`, `--orange-*`, `--text-*`, `--surface`, `--border`). Always reuse these vars rather than hardcoding hex values.
- **`index.html`, `services.html`, `about.html`, `contact.html`** — each page calls `initSite()` then injects its own page-specific content from `SITE_CONFIG` via inline `<script>` at the bottom of `<body>`.

Script load order within each HTML page matters: `config.js` → `shared.js` → inline script calling `initSite()`.

## Key Implementation Details

- **Contact form** (`contact.html`) submits to Formspree via `fetch`. The action URL is built dynamically from `cfg.formspreeId`. A honeypot field (`name="_gotcha"`) is included for spam filtering.
- **Coverage map** (`services.html`) is built entirely at runtime: it fetches pre-projected Albers USA TopoJSON from `https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json`, decodes the arcs in inline JS, and renders every state as an SVG `<path>`. States listed in `coverageStates` (config.js) get `data-tier="primary"`/`"secondary"` styling plus hover notes in the info bar. **Adding or changing a covered state requires only a `coverageStates` edit in `config.js`** — no SVG editing.
- **Reviews carousel** (`index.html`, "What Our Partners Say") renders from `cfg.reviews` — currently hand-written placeholder testimonials, not real ones. The array shape (`{ name, company, quote, rating }`) is intentionally kept stable because it's meant to later be swapped for a live Google Reviews feed without touching the carousel code.
- **Images are a mix of local files and hotlinked Unsplash stock.** Three real business photos live in the repo root — `hero-facility-sunset.jpg` (index.html hero), `services-hero-facility.jpg` (services.html page hero), `owner-headshot.jpg` (about.html owner photo, pre-cropped to isolate Garrison from the original group photo) — referenced directly via relative `<img src="...">`, same as the Unsplash URLs. The about.html and contact.html page-heroes and the services.html fuel-nozzle visual are still generic Unsplash stock. There is no `/images` folder and no central image registry in `config.js` — image sourcing has always been per-page, hardcoded in each HTML file's `<img src>`; don't route new images through `config.js`.
- **All files must stay in the repo root** — GitHub Pages web uploader cannot handle subfolders. No `css/`, `js/`, or `assets/` subdirectories.
- `config.js` contains some fields no longer rendered anywhere (e.g. `whyChooseUs` — its home-page section was removed). Check for actual usage before assuming a config field appears on the site.
