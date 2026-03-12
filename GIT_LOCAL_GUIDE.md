# Local Editing & Git Commit Guide

**Always edit locally, not on GitHub's website.**
This guide explains why, how to set up, and the exact commands for every commit.

---

## Why Local Editing is Better Than GitHub Web

| Factor | Local editing | GitHub web editor |
|--------|--------------|-------------------|
| Edit multiple files at once | ✅ | ❌ One file at a time |
| See your changes in the browser | ✅ Open index.html live | ❌ Can't preview |
| Undo mistakes | ✅ Git history + Cmd+Z | ⚠️ Limited |
| Risk of breaking the site | Low — test first | High — changes go live immediately |
| Commit multiple files together | ✅ One logical commit | ❌ One file per commit |
| Work offline | ✅ | ❌ |

**Why your number change didn't stick:** GitHub web edits create a new commit but you may have edited the wrong file. The WhatsApp number only lives in ONE place — `js/config.js`. If you edited an HTML file instead, `components.js` still pulls the old number from `config.js`. Always edit `js/config.js` for contact details.

---

## One-Time Setup (Do This Once)

### Step 1 — Make sure you have Git installed
```bash
git --version
# Should print: git version 2.x.x
# If not found: https://git-scm.com/download/mac
```

### Step 2 — Make sure GitHub CLI is installed and logged in
```bash
gh --version
# Should print: gh version 2.x.x

# If not logged in:
gh auth login
# Choose: GitHub.com → HTTPS → Login with a web browser
# Follow the browser prompt — done once, works forever
```

### Step 3 — Open the project folder in your code editor
**VS Code (recommended — free):**
```bash
code "/Users/greystone/Downloads/All Templates/bakery-template"
```
Or: open VS Code → File → Open Folder → navigate to `bakery-template`

### Step 4 — Confirm the repo is linked to GitHub
```bash
cd "/Users/greystone/Downloads/All Templates/bakery-template"
git remote -v
# Should show: origin  https://github.com/Leebartea/bakery-template.git
```

---

## Daily Editing Workflow

### The cycle: Edit → Preview → Commit → Push

```
1. Open VS Code → edit files
2. Open index.html in browser → check it looks right
3. git add [files]
4. git commit -m "your message"
5. git push
→ GitHub Actions auto-deploys the live site in ~45 seconds
```

---

## Step-by-Step: Making an Edit and Committing

### 1. Navigate to the project
```bash
cd "/Users/greystone/Downloads/All Templates/bakery-template"
```

### 2. Check what has changed
```bash
git status
```
This lists files you've modified. Modified files show in red (unstaged) or green (staged).

### 3. See the exact changes before committing (optional)
```bash
git diff
# Shows line-by-line what changed
# Press Q to exit
```

### 4. Stage the files you want to commit

**Stage specific files (recommended):**
```bash
git add js/config.js
git add data/products.js
# Stage as many files as you need
```

**Stage all changed files at once:**
```bash
git add .
# Stages everything — be careful not to include files you didn't mean to change
```

### 5. Write the commit message and commit
```bash
git commit -m "update: change WhatsApp number and address"
```

**Good commit message examples:**
```bash
git commit -m "update: rebrand to Sunshine Cakes — name, number, address"
git commit -m "update: replace product images with real photos"
git commit -m "fix: correct deposit percentage in FAQ"
git commit -m "add: 3 new products — coconut cake, meat pies, chin chin"
git commit -m "update: change brand colors to purple palette"
```

### 6. Push to GitHub (triggers live deploy)
```bash
git push
```
That's it. In ~45 seconds, the live site at `https://leebartea.github.io/bakery-template/` updates.

---

## Common Scenarios

### Scenario A — Change the WhatsApp number
```bash
# 1. Open js/config.js in VS Code
# 2. Find line: whatsappNumber: "2348012345678"
# 3. Change to your number: whatsappNumber: "2348099999999"
# 4. Save the file (Cmd+S)
# 5. In terminal:
git add js/config.js
git commit -m "update: change WhatsApp number to real number"
git push
```

### Scenario B — Update multiple config settings at once
```bash
# Edit js/config.js — change name, number, address, hours, social links
git add js/config.js
git commit -m "update: full rebrand — business info for [Client Name]"
git push
```

### Scenario C — Replace product images
```bash
# Edit data/products.js — update image: URLs
git add data/products.js
git commit -m "update: replace product placeholder images with real photos"
git push
```

### Scenario D — Edit multiple files
```bash
# After editing config.js, products.js, and about.html:
git add js/config.js data/products.js about.html
git commit -m "update: rebrand content — name, products, about story"
git push
```

### Scenario E — Add your own images to the project
```bash
# 1. Copy your images into the right folder (see IMAGES.md)
#    e.g.: assets/images/products/victoria-sponge.webp
# 2. Update the image URL in the relevant JS/HTML file
# 3. Stage and commit:
git add assets/images/ data/products.js
git commit -m "update: add real product photos"
git push
```

---

## Fixing a Mistake After Pushing

### If you pushed wrong content and need to fix it fast:
```bash
# 1. Fix the file(s) in VS Code
# 2. Save
# 3. Commit the fix:
git add [file]
git commit -m "fix: correct [what was wrong]"
git push
# Live site updates in ~45 seconds
```

### If you want to go back to how it was before your last commit:
```bash
# Undo the last commit but KEEP your file changes (safe):
git reset --soft HEAD~1
# Now your changes are unstaged — you can fix and recommit

# OR: Undo the last commit AND discard file changes (destructive — use with care):
git reset --hard HEAD~1
```

---

## Checking Deploy Status After Push

After `git push`, the GitHub Actions workflow runs automatically.

**Check it in the terminal:**
```bash
gh run list --limit 3
# Shows recent workflow runs and their status (queued / in_progress / success / failure)

gh run watch
# Live view of the running workflow — press Q to exit
```

**Or check it on GitHub:**
Go to: `https://github.com/Leebartea/bakery-template/actions`
A green tick = deployed. Red X = something failed (check the logs).

---

## Git Cheat Sheet

```bash
# See what's changed
git status

# See exact line changes
git diff

# Stage a specific file
git add js/config.js

# Stage all changed files
git add .

# Commit with a message
git commit -m "your message here"

# Push to GitHub (triggers deploy)
git push

# Pull latest from GitHub (if you edited on the web)
git pull

# View recent commit history
git log --oneline -10

# See what changed in last commit
git show --stat

# Undo last commit (keep file changes)
git reset --soft HEAD~1
```

---

## Branch Workflow (Optional — For When You Have Clients)

If you want to test changes before they go live:

```bash
# Create a new branch for your changes
git checkout -b feature/update-products

# Make edits, then commit as normal
git add .
git commit -m "update: new product range"

# Push the branch — Vercel will create a preview URL automatically
git push -u origin feature/update-products
# Preview URL: https://bakery-template-git-feature-update-products-leebartea.vercel.app

# When ready to go live, merge into main
git checkout main
git merge feature/update-products
git push
```

This is useful when:
- You want to show a client a preview before making it live
- You're doing a large rebrand and don't want half-finished work on the live site

---

## Summary — The 3 Commands You'll Use Every Time

```bash
git add .                          # 1. Stage all changes
git commit -m "describe what you changed"   # 2. Save a snapshot
git push                           # 3. Send to GitHub → auto-deploys live
```
