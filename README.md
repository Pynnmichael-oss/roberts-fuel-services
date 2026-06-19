# Roberts Fuel Services — Website

Static website. Pure HTML, CSS, vanilla JS. No build tools.

---

## ⚠️ IMPORTANT: How to Upload to GitHub (Read This First)

GitHub's web uploader **cannot handle folders**. The previous upload likely missed `css/style.css` because it was inside a subfolder. **This version has been fixed** — all files are in the root with no subfolders.

### File List — Everything Should Be in Root

```
roberts-fuel-services/
├── index.html
├── services.html
├── about.html
├── contact.html
├── config.js
├── shared.js
├── style.css          ← CSS is now in ROOT (no css/ folder)
└── .nojekyll
```

---

## Deployment Steps

### Step 1 — Create (or clear) the GitHub repo

If you already have a repo from the first attempt:
1. Go to your repo on GitHub
2. Delete all existing files (select all → delete) OR just upload the new ones and let them overwrite

### Step 2 — Upload ALL files

1. In your GitHub repo, click **Add file** → **Upload files**
2. Select ALL of these files from this folder:
   - `index.html`
   - `services.html`
   - `about.html`
   - `contact.html`
   - `config.js`
   - `shared.js`
   - `style.css`
   - `.nojekyll` (may be hidden — enable "show hidden files" on your OS)
3. Commit the upload

### Step 3 — Enable GitHub Pages (if not already on)

1. Repo **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**

### Step 4 — View your site

Wait 1–2 minutes, then visit:
`https://YOUR_GITHUB_USERNAME.github.io/roberts-fuel-services/`

---

## Customizing Content

**All text lives in `config.js`** — open it and edit:

| What to change | Field in config.js |
|---|---|
| Business name | `businessName` |
| Tagline | `tagline` |
| Phone number | `phone` + `phoneRaw` |
| Email address | `email` |
| Owner name/bio | `ownerName`, `ownerBio` |
| Coverage states + map | `coverageStates` array |
| Services listed | `services` array |

After editing, re-upload `config.js` to GitHub. Changes go live in ~1 minute.

---

## Formspree (Contact Form)

1. Go to [formspree.io](https://formspree.io) → create free account
2. Create a new form → copy your Form ID (e.g. `xyzabcde`)
3. Open `config.js`, replace `YOUR_FORMSPREE_ID` with your actual ID
4. Re-upload `config.js`

Free tier: 50 submissions/month.
