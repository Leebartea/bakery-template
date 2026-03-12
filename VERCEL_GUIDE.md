# ▲ Vercel Deployment Guide — Bakery Template

A complete guide to deploying this template on Vercel — from first deploy to custom domain,
environment setup, and migrating from GitHub Pages.

---

## Why Vercel Over GitHub Pages?

| Feature | GitHub Pages | Vercel (Free) |
|---------|-------------|---------------|
| Deploy speed | ~3–5 min | ~30–60 sec |
| Custom domain | ✅ Free | ✅ Free |
| HTTPS | ✅ Auto | ✅ Auto |
| Deploy previews | ❌ | ✅ Every PR gets a preview URL |
| Bandwidth | 100 GB/month | 100 GB/month |
| Serverless functions | ❌ | ✅ (if needed later) |
| Analytics | ❌ | ✅ Basic (free) |
| Rollback to any deploy | ❌ | ✅ One click |
| Build logs | Basic | ✅ Detailed |
| Environment variables | ❌ | ✅ |
| Password protection | ❌ | ✅ Pro only |

**Recommendation:** Use GitHub Pages to start (it's already configured). Migrate to Vercel when:
- You need deploy previews to show clients before going live
- You want faster deploys
- You add a custom domain

---

## PART 1 — First Deploy on Vercel

### Method A: Deploy via Vercel Dashboard (Recommended)

**Step 1 — Create a Vercel account**
Go to [vercel.com](https://vercel.com) → **Sign Up** → Choose **Continue with GitHub**
This links your Vercel and GitHub accounts (no separate password needed).

**Step 2 — Import the GitHub repository**
- After logging in, click **Add New... → Project**
- You'll see a list of your GitHub repos
- Find `bakery-template` → click **Import**

**Step 3 — Configure the project**
Vercel auto-detects static sites. Use these settings:

| Setting | Value |
|---------|-------|
| Framework Preset | **Other** |
| Root Directory | `./` (leave default) |
| Build Command | `npm run build` |
| Output Directory | `.` (a single dot — project root) |
| Install Command | `npm install` |

> The `vercel.json` file in this project pre-configures routing and caching headers.
> Vercel reads it automatically — no extra setup needed.

**Step 4 — Click Deploy**
Vercel runs `npm install` → `npm run build` → serves the root directory.
Your site is live in ~45 seconds at a URL like:
`https://bakery-template-leebartea.vercel.app`

---

### Method B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd "/Users/greystone/Downloads/All Templates/bakery-template"

# Login (opens browser)
vercel login

# Deploy (follow the prompts)
vercel

# For production deploy
vercel --prod
```

CLI prompts you through:
1. Link to existing project or create new?  → **Create new**
2. Project name? → `bakery-template`
3. Which directory? → `./`
4. Override settings? → **No** (vercel.json handles it)

---

## PART 2 — Auto-Deploy on Git Push

Once connected, every `git push` to your `main` branch automatically triggers a new deploy.

**Workflow:**
```
You push code → GitHub receives it → Vercel webhook fires
→ Vercel pulls the code → Builds → Deploys → Live in ~30 sec
```

**Pull Request Preview Deploys:**
Every PR (or branch push) gets its own temporary URL:
`https://bakery-template-git-feature-branch-leebartea.vercel.app`

This lets you preview changes before merging to main. Perfect for showing clients "here's what it'll look like" without touching the live site.

---

## PART 3 — Custom Domain Setup

### Step 1 — Add domain in Vercel
- Go to your project dashboard → **Settings → Domains**
- Click **Add Domain**
- Type your domain: `yourbakery.com` or `www.yourbakery.com`
- Click **Add**

Vercel gives you DNS records to configure.

### Step 2 — Configure DNS at your registrar

**Option A — Use Vercel's nameservers (easiest)**
In your domain registrar (Namecheap, GoDaddy, etc.), change nameservers to:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```
Vercel manages everything automatically. Takes 24–48 hours to propagate.

**Option B — Add DNS records manually**
Add these records in your registrar's DNS settings:

For root domain (`yourbakery.com`):
```
Type:  A
Name:  @
Value: 76.76.21.21
TTL:   Auto
```

For www subdomain (`www.yourbakery.com`):
```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   Auto
```

### Step 3 — Enable HTTPS
Vercel automatically provisions a free SSL certificate (via Let's Encrypt) once DNS propagates.
No action needed — it just works.

### Step 4 — Redirect www → root (or vice versa)
In Vercel → Settings → Domains, set one as the primary.
Vercel auto-redirects the other. Choose one:
- `yourbakery.com` (root — professional, shorter)
- `www.yourbakery.com` (some older links expect www)

---

## PART 4 — Environment Variables (If Needed Later)

This template is fully static and needs no environment variables right now.
If you later add a backend feature (e.g., form submission to email via an API), here's how:

**Add in Vercel dashboard:**
- Project → Settings → Environment Variables
- Add key + value
- Choose environment: Production / Preview / Development

**Example (future use):**
```
CONTACT_FORM_API_KEY = your_api_key_here
```

**In code, access via:**
```js
// In a Vercel serverless function (api/ folder)
const apiKey = process.env.CONTACT_FORM_API_KEY;
```

---

## PART 5 — Understanding vercel.json

The `vercel.json` in this project configures:

```json
{
  "routes": [
    { "src": "/about", "dest": "/about.html" },
    { "src": "/products", "dest": "/products.html" }
    // ... etc
  ]
}
```

**What this does:** Lets visitors use clean URLs without `.html`:
- `/about` instead of `/about.html`
- `/gallery` instead of `/gallery.html`

**Cache headers for assets:**
```json
{
  "source": "/assets/(.*)",
  "headers": [
    { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
  ]
}
```
This tells browsers to cache CSS and images for 1 year — faster repeat visits.

---

## PART 6 — Migrating from GitHub Pages to Vercel

When you're ready to switch:

1. **Import the GitHub repo into Vercel** (see Part 1)
2. **Deploy** — get your `vercel.app` URL
3. **Test** the Vercel URL thoroughly before touching DNS
4. **Add custom domain** in Vercel (see Part 3)
5. **Update DNS** at your registrar to point to Vercel
6. **Wait 24–48 hours** for DNS propagation
7. **Disable GitHub Pages** — Repo → Settings → Pages → Source → None

The old GitHub Pages URL (`username.github.io/repo`) keeps working even after you switch — it just won't be your primary URL.

---

## PART 7 — Vercel Analytics (Free Tier)

Vercel offers basic web analytics with no JavaScript library needed.

**Enable:**
- Project dashboard → **Analytics** tab → **Enable**
- Add one line to each HTML `<head>`:
```html
<script defer src="/_vercel/insights/script.js"></script>
```

**What you get (free):**
- Page views
- Unique visitors
- Top pages
- Countries
- Referrers
- Device types

No cookies, GDPR-friendly.

---

## PART 8 — Rollbacks

If a deploy breaks the site:

- Vercel dashboard → **Deployments** tab
- Find the last working deploy
- Click the three-dot menu → **Promote to Production**
- Site reverts instantly — no git revert needed

---

## PART 9 — Vercel CLI Quick Reference

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# List all deployments
vercel ls

# View logs for latest deploy
vercel logs

# Remove a deployment
vercel rm [deployment-url]

# Set environment variable via CLI
vercel env add VARIABLE_NAME

# Link existing project to Vercel
vercel link

# Pull env vars locally for development
vercel env pull .env.local
```

---

## PART 10 — Recommended Workflow (GitHub Pages → Vercel)

```
Phase 1: GitHub Pages (Now)
  └── Push to GitHub → deploy.yml auto-deploys to github.io ✅

Phase 2: Vercel Preview (When client review needed)
  └── Import to Vercel → share vercel.app preview URL with client ✅

Phase 3: Vercel Production (When going live with real domain)
  └── Buy domain → point DNS to Vercel → HTTPS auto-enabled ✅

Phase 4: Disable GitHub Pages
  └── Keep GitHub as source control, Vercel as host ✅
```

---

## Summary: Key URLs After Full Setup

| Resource | URL |
|---------|-----|
| GitHub repo | https://github.com/Leebartea/bakery-template |
| GitHub Pages (initial) | https://leebartea.github.io/bakery-template/ |
| Vercel preview | https://bakery-template-leebartea.vercel.app |
| Custom domain (future) | https://yourbakery.com |
| Vercel dashboard | https://vercel.com/leebartea/bakery-template |
| Domain DNS settings | Your registrar's control panel |
