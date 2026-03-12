# 🔐 Remote GitHub Push — Step-by-Step Log
**Repository:** github.com/Leebartea/bakery-template
**Performed by:** Claude Code (on behalf of Leebartea)
**No co-author attribution included in any commit**

This document records every action taken to push this project to GitHub.
Study it to understand the full Git + GitHub API workflow for future pushes.

---

## WHY PUBLIC (Recommendation)

| Factor | Public | Private |
|--------|--------|---------|
| GitHub Pages hosting | ✅ FREE | ❌ Requires GitHub Pro ($4/mo) |
| Portfolio visibility | ✅ Showcases your template work | ❌ Hidden |
| Template sales | ✅ Buyers can preview live | ❌ No preview |
| Competitor risk | ⚠️ Code visible (standard for templates) | ✅ Code hidden |
| Vercel deploy | ✅ Free | ✅ Free |

**Decision: PUBLIC ✅**
Reason: You're building a template portfolio to sell. GitHub Pages is free on public repos,
and showcasing the live site helps potential clients trust the product.
No sensitive business data is in this repo — it's all placeholder content.

**Revoke your PAT after push:**
Go to https://github.com/settings/tokens → find the token → Delete it.
Generate a fresh one only when you need another push session.

---

## STEP 1 — Verify GitHub API Access

**Command:**
```bash
curl -s -H "Authorization: token YOUR_PAT" https://api.github.com/user
```

**What it does:** Calls the GitHub REST API to confirm the token is valid
and returns your account info (username, email, id).

**Expected response:**
```json
{
  "login": "Leebartea",
  "id": 12345678,
  "name": "...",
  "email": "..."
}
```

---

## STEP 2 — Create the GitHub Repository

**Command:**
```bash
curl -s -X POST \
  -H "Authorization: token YOUR_PAT" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "bakery-template",
    "description": "Premium multi-page bakery website template. Light/dark mode, WhatsApp ordering, data-driven. Built with Tailwind CSS + Vanilla JS.",
    "homepage": "",
    "private": false,
    "auto_init": false,
    "has_issues": true,
    "has_wiki": false
  }' \
  https://api.github.com/user/repos
```

**What it does:**
- Calls the GitHub API endpoint `POST /user/repos`
- Creates a new **public** repo named `bakery-template` under account `Leebartea`
- `auto_init: false` — we provide our own initial commit (no README conflict)
- Returns the repo's clone URL, HTML URL, and settings

**Live repo URL after creation:**
`https://github.com/Leebartea/bakery-template`

---

## STEP 3 — Configure Git Identity (Local)

**Commands:**
```bash
git config user.name "Leebartea"
git config user.email "Leebartea@users.noreply.github.com"
```

**What it does:**
Sets the `author` fields in every commit to your GitHub identity.
Using the GitHub noreply email keeps your real email private.
These settings are scoped to this repo only (no `--global` flag).

---

## STEP 4 — Initialise Git in the Project

**Command:**
```bash
cd "/Users/greystone/Downloads/All Templates/bakery-template"
git init
```

**What it does:**
Creates a hidden `.git/` folder in the project directory.
This turns the folder into a Git repository.

---

## STEP 5 — Stage All Files

**Command:**
```bash
git add .
```

**What it does:**
Stages every file in the project for the first commit.
The `.gitignore` file (already created) ensures `node_modules/` and `.DS_Store` are excluded.

**Files staged (29 total):**
```
.github/workflows/deploy.yml    ← GitHub Pages CI/CD
.gitignore
CONTENT.md
DEPLOY_CHECKLIST.md
EDIT_PLAN.md
IMAGES.md
LICENSE
README.md
REMOTE_PUSH_GUIDE.md            ← This file
VERCEL_GUIDE.md
about.html
assets/css/input.css
contact.html
custom-cakes.html
data/faq.js
data/products.js
data/testimonials.js
gallery.html
index.html
js/components.js
js/config.js
js/faq.js
js/form-validation.js
js/gallery-filter.js
js/main.js
js/slider.js
js/theme.js
package.json
products.html
tailwind.config.js
vercel.json
```

---

## STEP 6 — Create the Initial Commit

**Command:**
```bash
git commit -m "feat: initial Sweet Crumbs Bakery template

- 6-page static site (Home, About, Products, Custom Cakes, Gallery, Contact)
- Seamless light/dark mode (no FOUC, localStorage persistent)
- WhatsApp-first ordering (floating CTA + form redirect)
- Data-driven products, gallery, testimonials, FAQ
- Tailwind CSS Play CDN (zero build to run) + CLI config included
- GitHub Pages deploy workflow + Vercel config
- Full documentation: EDIT_PLAN, CONTENT, IMAGES, DEPLOY_CHECKLIST guides"
```

**What it does:**
Creates a single commit snapshot of all 29 files.
Author is set to `Leebartea` from Step 3.
**No co-author lines.** Commit is solely attributed to Leebartea.

---

## STEP 7 — Set Remote Origin

**Command:**
```bash
git remote add origin https://github.com/Leebartea/bakery-template.git
```

**What it does:**
Links your local repo to the GitHub repo created in Step 2.
The name `origin` is the standard Git convention for the primary remote.

---

## STEP 8 — Rename Branch to `main` and Push

**Commands:**
```bash
git branch -M main
git push -u origin main
```

**What it does:**
- `branch -M main` — renames the default branch from `master` to `main` (GitHub standard)
- `push -u origin main` — pushes all commits to GitHub
- `-u` sets `origin/main` as the upstream tracking branch for future `git pull` / `git push`

**Authentication method:**
The PAT token is embedded in the remote URL as:
`https://Leebartea:TOKEN@github.com/Leebartea/bakery-template.git`
Git sends it as HTTP Basic Auth. GitHub validates it against the `repo` scope.

---

## STEP 9 — Enable GitHub Pages (Manual — Do After Push)

GitHub Pages cannot be enabled via the API without a GitHub Actions workflow already running.
The workflow at `.github/workflows/deploy.yml` will trigger automatically on the first push.

**To activate Pages:**
1. Go to: `https://github.com/Leebartea/bakery-template/settings/pages`
2. Under **Build and deployment → Source**: select **GitHub Actions**
3. The workflow will auto-run on next push
4. Live URL: `https://leebartea.github.io/bakery-template/`

---

## FUTURE PUSHES (After First Setup)

Once the repo is set up, future updates are 3 commands:

```bash
cd "/Users/greystone/Downloads/All Templates/bakery-template"
git add .
git commit -m "your message here"
git push
```

No token needed in the URL for future pushes — Git remembers the remote.
(If it asks for credentials again, re-enter username + PAT.)

**Or use GitHub CLI (recommended for simplicity):**
```bash
brew install gh          # Install once
gh auth login            # Authenticate once
gh repo sync             # Future syncs
```

---

## SECURITY NOTE — Token Hygiene

Your PAT token was shared to perform this push.
**After the push succeeds:**
1. Go to https://github.com/settings/tokens
2. Find the token you used
3. Click **Delete** (revoke it)
4. Generate a fresh token only when needed

A revoked token cannot be used to access your account even if seen by someone else.
