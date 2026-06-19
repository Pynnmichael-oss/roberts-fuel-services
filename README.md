# Roberts Fuel Services — Website

Static website for Roberts Fuel Services. Built with pure HTML, CSS, and vanilla JS. No build tools or frameworks required.

## Live Site

Once deployed to GitHub Pages, the site will be available at:
`https://YOUR_GITHUB_USERNAME.github.io/roberts-fuel-services/`

---

## Setup & Deployment

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in (create an account if needed)
2. Click the **+** button → **New repository**
3. Name it: `roberts-fuel-services`
4. Set to **Public**
5. Click **Create repository**

### 2. Upload the Site Files

**Option A — GitHub web interface (easiest):**
1. In your new repo, click **uploading an existing file**
2. Drag all files and folders from this project into the uploader
3. Make sure to include: `index.html`, `services.html`, `about.html`, `contact.html`, `config.js`, `shared.js`, `.nojekyll`, and the `css/` folder
4. Click **Commit changes**

**Option B — Git command line:**
```bash
git init
git add .
git commit -m "Initial site upload"
git remote add origin https://github.com/YOUR_USERNAME/roberts-fuel-services.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. In your repo, go to **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Set branch to **main**, folder to **/ (root)**
4. Click **Save**
5. Wait 1–2 minutes, then visit your site at the URL shown

---

## Customizing Content

**All editable text lives in `config.js`** — open it and update:

| Field | What it controls |
|-------|-----------------|
| `businessName` | Business name (nav, footer, title) |
| `tagline` | Hero headline |
| `phone` / `phoneRaw` | Phone in nav bar, footer, CTA bands |
| `email` | Email in footer and contact page |
| `ownerName` / `ownerBio` | About page content |
| `coverageStates` | Coverage map states and hover notes |
| `services` | Service cards on home and services pages |

After editing `config.js`, commit and push — GitHub Pages updates automatically within a minute.

---

## Formspree (Contact Form)

The contact form is pre-wired for [Formspree](https://formspree.io):

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — you'll get an ID like `xyzabcde`
3. Open `config.js` and replace `YOUR_FORMSPREE_ID` with your actual ID
4. Push the update — the form will now deliver submissions to your email

Free Formspree tier: 50 submissions/month.

---

## File Structure

```
/
├── index.html          ← Home page
├── services.html       ← Services + coverage map
├── about.html          ← About / owner bio
├── contact.html        ← Lead capture form
├── config.js           ← ALL editable content lives here
├── shared.js           ← Nav, footer, availability bar (don't edit)
├── .nojekyll           ← Required for GitHub Pages
├── css/
│   └── style.css       ← All styles
└── images/             ← Add photos here when ready
```

---

## Adding Photos Later

When you have real photos:
1. Add image files to the `/images/` folder
2. Replace placeholder divs in the HTML with `<img>` tags
3. The hero background can be set in `css/style.css` under `.hero`

## Adding New Coverage States

Open `config.js` and add one object to the `coverageStates` array:

```js
{
  id:    "CO",         // Two-letter state abbreviation
  label: "Colorado",
  tier:  "secondary",  // "primary" or "secondary"
  note:  "Southern Colorado coverage available — contact us for scheduling"
}
```

That's it — the map and About page update automatically.
