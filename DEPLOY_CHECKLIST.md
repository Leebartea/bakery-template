# 🚀 Deployment Checklist — Sweet Crumbs Bakery Template

Work through this top-to-bottom before pushing to GitHub and going live.
Tick each box as you complete it.

---

## PHASE 1 — Content Audit (Do Before Pushing)

### Business Info
- [ ] Business name updated in `js/config.js`
- [ ] WhatsApp number correct (international format, no + or spaces)
- [ ] Phone number updated
- [ ] Email address updated
- [ ] Physical address updated
- [ ] Google Maps link added
- [ ] Business hours correct
- [ ] Social media links added (or blanked out if not applicable)
- [ ] Currency symbol correct (`₦`, `$`, `£`, etc.)
- [ ] Announcement bar text updated (or hidden if not needed)

### Content
- [ ] About page story updated (no "Sweet Crumbs" or "Adaeze" left)
- [ ] Team names, titles, and bios updated
- [ ] Stats (years, cakes delivered, reviews) are realistic for the client
- [ ] Product names and prices correct
- [ ] Testimonials updated with real reviews
- [ ] FAQ answers reflect the client's actual policies
- [ ] Deposit percentage correct (currently 50% — change if different)
- [ ] Delivery areas mentioned are accurate
- [ ] Payment methods listed are accurate

### SEO & Page Meta
- [ ] `<title>` updated on every HTML page (6 pages)
- [ ] `<meta name="description">` updated on every page
- [ ] `<link rel="canonical">` domain updated on every page
- [ ] `og:url`, `og:image`, `twitter:site` updated in each page head
- [ ] `siteUrl` updated in `js/config.js`

### Images
- [ ] Product images updated in `data/products.js` (14 images)
- [ ] Gallery images updated in `js/gallery-filter.js` (16 images)
- [ ] Homepage hero image replaced
- [ ] About page images replaced (hero, story, 3 team photos)
- [ ] Custom cakes page images replaced (hero + 7 portfolio photos)
- [ ] Testimonial avatars updated in `data/testimonials.js`
- [ ] OG image (`assets/images/og-image.jpg`) created — 1200×630 px
- [ ] Favicon added to `assets/icons/favicon.svg`

---

## PHASE 2 — Functional Testing

Test every one of these in your browser before pushing.

### Core Navigation
- [ ] All 6 nav links work (Home, About, Products, Custom Cakes, Gallery, Contact)
- [ ] Mobile menu opens and closes correctly on a phone or narrow browser
- [ ] Active nav link highlights on current page
- [ ] Logo links back to homepage

### Dark Mode
- [ ] Theme toggle button visible in navbar on every page
- [ ] Clicking toggle switches between light and dark
- [ ] Theme preference is saved — refreshing the page keeps the last choice
- [ ] No flash of wrong theme on page load (FOUC check — hard-refresh with Cmd+Shift+R)
- [ ] Both modes look correct on mobile

### WhatsApp
- [ ] Floating WhatsApp button is visible on every page
- [ ] Clicking the floating button opens WhatsApp with correct number
- [ ] Navbar "Order on WhatsApp" button works
- [ ] Homepage hero CTA WhatsApp button works
- [ ] Contact form "Send Order via WhatsApp" redirects with order details
- [ ] Products page "Order Now" buttons open WhatsApp with that product name

### Products Page
- [ ] All 3 filter buttons work (All, Cakes, Snacks, Wedding)
- [ ] Products load correctly on first visit
- [ ] URL parameter `?filter=cakes` pre-selects the Cakes filter

### Gallery Page
- [ ] All 4 filter buttons work (All, Cakes, Snacks, Wedding, Custom)
- [ ] Clicking a gallery image opens the lightbox
- [ ] Lightbox arrows navigate between images
- [ ] Escape key closes the lightbox
- [ ] Touch swipe works on mobile

### Testimonials Slider
- [ ] Slider auto-plays
- [ ] Prev/Next buttons work
- [ ] Dot navigation works
- [ ] Touch swipe works on mobile
- [ ] Slider pauses on mouse hover

### FAQ Accordion
- [ ] Clicking a question expands its answer
- [ ] Clicking again (or another question) closes it
- [ ] Works on contact page (filtered to "ordering" category)
- [ ] Works on homepage (all categories)

### Contact Form
- [ ] Submitting without required fields shows error messages
- [ ] Invalid phone/email shows errors
- [ ] Valid submission redirects to WhatsApp with pre-filled message
- [ ] Delivery/collection toggle shows/hides address field

### Scroll & Animations
- [ ] Scroll reveal animations trigger as you scroll down
- [ ] Sticky header works (appears fixed at top while scrolling)
- [ ] Smooth scroll works for anchor links (e.g., `#how-it-works`)

---

## PHASE 3 — Browser & Device Testing

- [ ] Chrome (Mac/Windows)
- [ ] Safari (Mac/iPhone) — especially dark mode and CSS vars
- [ ] Firefox
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iPhone)
- [ ] Tablet (iPad or similar)

---

## PHASE 4 — Performance Check (Optional but Recommended)

1. Open Chrome DevTools → Lighthouse tab
2. Run audit on `index.html`
3. Target scores:
   - Performance: > 85
   - Accessibility: > 95
   - Best Practices: > 90
   - SEO: > 95

**Quick wins if score is low:**
- Compress images (squoosh.app)
- Use Tailwind CLI build instead of Play CDN (removes unused CSS)
- Add `loading="lazy"` to any images missing it (most already have it)

---

## PHASE 5 — GitHub Setup & Push

### What you need to provide to push remotely:

To let me push this repository to GitHub on your behalf, you need to provide:

1. **Your GitHub username**
   Example: `greystone`

2. **Repository name** (new repo, not yet created)
   Example: `sweet-crumbs-bakery-template`
   Or existing repo: `my-templates`

3. **A GitHub Personal Access Token (PAT)**
   - Go to: GitHub → Settings → Developer Settings → Personal Access Tokens → Fine-grained tokens (or Classic)
   - Click **Generate new token**
   - Scopes needed: `repo` (full control of private repositories)
   - Expiration: Set to 90 days or custom
   - Copy the token — it starts with `ghp_...`
   - **Note:** Treat this like a password. Share it securely (not in plain chat if possible).

4. **Repo visibility:** Public or Private?

### What I will do once you provide the above:
- `git init` the project
- Create a `.gitignore`
- Stage all files
- Create the initial commit (with **you as the only author** — no co-author attribution)
- Create the remote repo on GitHub via the API (if you provide PAT with `repo` scope)
- Push to `main` branch
- Confirm the live GitHub Pages URL

### Alternative — Push yourself (3 commands):
```bash
cd "/Users/greystone/Downloads/All Templates/bakery-template"
git init && git add . && git commit -m "Initial commit — Sweet Crumbs Bakery Template"
gh repo create sweet-crumbs-bakery-template --public --source=. --push
```
(Requires [GitHub CLI](https://cli.github.com) installed and authenticated)

---

## PHASE 6 — GitHub Pages Activation

After pushing:

1. Go to your GitHub repo → **Settings**
2. Scroll to **Pages** section
3. Source: **GitHub Actions** (the workflow in `.github/workflows/deploy.yml` handles everything)
4. Push any commit to trigger the first deploy
5. Site goes live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

**First deploy takes ~2–3 minutes.** Subsequent deploys are faster (~45 seconds).

---

## PHASE 7 — Post-Launch

- [ ] Test the live URL in an incognito window
- [ ] Check WhatsApp buttons with real phone
- [ ] Share URL for client review
- [ ] Add `sitemap.xml` (generate at [xml-sitemaps.com](https://xml-sitemaps.com))
- [ ] Submit URL to [Google Search Console](https://search.google.com/search-console)
- [ ] When ready to migrate to Vercel: import GitHub repo at vercel.com

---

## ✅ Current Template Status

| Item | Status |
|------|--------|
| index.html (Homepage) | ✅ Complete |
| about.html | ✅ Complete |
| products.html | ✅ Complete |
| custom-cakes.html | ✅ Complete |
| gallery.html | ✅ Complete |
| contact.html | ✅ Complete |
| js/theme.js (No-FOUC dark mode) | ✅ Complete |
| js/components.js (Navbar + Footer) | ✅ Complete |
| js/config.js (Rebrand config) | ✅ Complete |
| js/faq.js | ✅ Complete |
| js/gallery-filter.js + lightbox | ✅ Complete |
| js/slider.js (Touch slider) | ✅ Complete |
| js/form-validation.js | ✅ Complete |
| data/products.js (14 products) | ✅ Complete |
| data/testimonials.js | ✅ Complete |
| data/faq.js | ✅ Complete |
| assets/css/input.css | ✅ Complete |
| tailwind.config.js | ✅ Complete |
| package.json | ✅ Complete |
| vercel.json | ✅ Complete |
| .github/workflows/deploy.yml | ✅ Complete |
| LICENSE (MIT) | ✅ Complete |
| README.md | ✅ Complete |
| EDIT_PLAN.md | ✅ Complete |
| IMAGES.md | ✅ Complete |
| CONTENT.md | ✅ Complete |
| DEPLOY_CHECKLIST.md | ✅ This file |
| Placeholder images replaced | ⏳ Pending (see IMAGES.md) |
| Business info updated | ⏳ Pending (see EDIT_PLAN.md) |
| GitHub repo created | ⏳ Pending |
| GitHub Pages live | ⏳ Pending |
