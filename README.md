# 🎂 Sweet Crumbs Bakery Template

A premium, production-ready multi-page bakery website template with seamless Light/Dark mode.
Built with **Tailwind CSS + Vanilla JS** — no framework, no build step required to run.

---

## 📁 Folder Structure

```
bakery-template/
├── index.html              ← Homepage
├── about.html              ← About / Our Story
├── products.html           ← Full Menu (data-driven, filterable)
├── custom-cakes.html       ← Custom Cakes & Wedding
├── gallery.html            ← Filterable Photo Gallery
├── contact.html            ← Order Form + Contact Info
│
├── assets/
│   ├── css/
│   │   └── input.css       ← Tailwind source + CSS custom properties
│   └── images/             ← Replace placeholders with real photos
│
├── js/
│   ├── config.js           ← ⭐ ALL site settings (name, WhatsApp, social)
│   ├── theme.js            ← Dark/light mode (loads in <head>, no FOUC)
│   ├── components.js       ← Navbar, footer, WhatsApp float (auto-injected)
│   ├── main.js             ← Scroll reveal, sticky header, utilities
│   ├── faq.js              ← FAQ accordion
│   ├── gallery-filter.js   ← Gallery filter + lightbox
│   ├── slider.js           ← Testimonial slider (touch/swipe/keyboard)
│   └── form-validation.js  ← Order/contact form → WhatsApp
│
├── data/
│   ├── products.js         ← ⭐ All products, prices, allergens
│   ├── testimonials.js     ← Customer reviews
│   └── faq.js              ← FAQ content
│
├── .github/workflows/
│   └── deploy.yml          ← GitHub Pages auto-deploy
├── tailwind.config.js      ← Tailwind config (darkMode: 'class')
├── package.json            ← npm scripts (dev/build)
└── vercel.json             ← Vercel deployment config
```

---

## 🚀 Quick Start (Zero Build — Works Immediately)

All HTML pages use the **Tailwind Play CDN** by default, so they open straight from the filesystem or any static host with no build step.

```bash
# 1. Open any HTML file directly in your browser
open index.html

# OR serve locally
npx serve . -p 3000
```

---

## 🔨 Production Build (Tailwind CLI)

For production use, compile a minimal CSS file instead of the Play CDN:

```bash
npm install
npm run dev     # Watch mode — rebuilds on file changes
npm run build   # One-off minified build → assets/css/style.css
```

Then in each HTML file, **replace** the Tailwind Play CDN script with:
```html
<link rel="stylesheet" href="assets/css/style.css">
```

---

## 🌐 Deployment

### Option A: GitHub Pages (Free, Recommended for Start)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial bakery template"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repo → **Settings → Pages**
   - Source: **GitHub Actions** ← Select this
   - The workflow in `.github/workflows/deploy.yml` handles everything

3. **Your site goes live at:**
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

4. **Custom domain (optional):**
   - Add a `CNAME` file with your domain (e.g., `sweetcrumbs.ng`)
   - Set the DNS A records to GitHub Pages IPs
   - Enable "Enforce HTTPS" in Settings → Pages

### Option B: Vercel (Recommended for Production)

1. Push to GitHub (same steps as above)
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Settings:
   - Framework: **Other** (Static Site)
   - Build Command: `npm run build`
   - Output Directory: `.` (root)
5. Click Deploy — live in ~30 seconds!
6. Vercel auto-deploys on every `git push`

### Option C: Netlify

1. Drag-and-drop the entire `bakery-template/` folder to [netlify.com/drop](https://netlify.com/drop)
2. Done — live instantly. Connect GitHub for auto-deploy.

---

## ✏️ How to Customize for a New Baker in 10 Minutes

### Step 1: Update Business Info (2 min)

Open `js/config.js` and edit the top section:

```js
const SITE_CONFIG = {
  businessName:    "YOUR BAKERY NAME",
  whatsappNumber:  "234XXXXXXXXXX",   // International format, no +
  phone:           "+234 XXX XXX XXXX",
  email:           "hello@yourbakery.com",
  address:         "Your address here",
  // ... social links
};
```

This single file updates the navbar logo, footer, WhatsApp links, and all CTAs site-wide.

### Step 2: Change Colors (2 min)

Open `assets/css/input.css` (or the `<style>` block in any HTML file) and edit the 6 CSS variables:

```css
:root {
  --color-bg:       #FFF8F0;  /* Light page background */
  --color-primary:  #C9A84C;  /* Brand color (buttons, headings, borders) */
  --color-accent:   #E8A0B4;  /* Accent (badges, highlights) */
}
.dark {
  --color-bg:       #0F0602;  /* Dark page background */
  --color-primary:  #D4AF37;  /* Dark mode brand color */
  --color-accent:   #C2688E;  /* Dark mode accent */
}
```

### Step 3: Replace Images (3 min)

All product and gallery images are from `picsum.photos` as placeholders.
Replace them in:

- **Products:** `data/products.js` → update `image:` URL for each product
- **Gallery:** `js/gallery-filter.js` → update `GALLERY_ITEMS` array
- **Hero/About:** Edit the `<img src="...">` tags in the HTML files directly

**Recommended image sizes:**
| Section | Size | Format |
|---------|------|--------|
| Product cards | 800×600 px | WebP |
| Gallery | 600×600 px | WebP |
| Hero | 1600×900 px | WebP |
| About / team | 800×600 px | WebP |
| og:image | 1200×630 px | JPG |

### Step 4: Update Products (2 min)

Open `data/products.js` and edit the `PRODUCTS` array:

```js
{
  id: "c001",
  category: "cakes",          // "cakes" | "snacks" | "wedding"
  name: "Your Cake Name",
  price: 15000,               // In naira (or your currency)
  image: "assets/images/your-photo.jpg",
  // ... other fields
},
```

### Step 5: Change Currency (30 sec)

In `js/config.js`:
```js
currency: "$",          // Change to $, £, €, ₦, GHS, etc.
currencyLocale: "en-US" // Affects number formatting
```

### Step 6: Update Logo (1 min)

In `js/components.js`, find the logo section (search for "EDIT HERE: Replace text logo"):

```html
<!-- Replace the emoji + text with your logo image: -->
<img src="assets/images/logo.svg" alt="Your Bakery Logo" class="h-10">
```

---

## 🌙 Dark Mode System

The dark mode system is built around three layers:

1. **`js/theme.js`** — Loaded in `<head>` (blocking script) to apply the saved theme before DOM renders. Prevents any flash of unstyled content (FOUC).

2. **`tailwind.config.js`** — `darkMode: 'class'` means dark mode activates when `<html class="dark">`.

3. **CSS custom properties** in `:root` and `.dark` — All colors are CSS variables, so the theme switch is a single class toggle on `<html>`.

**To change the default theme:**
```js
// js/config.js
defaultTheme: "dark",  // Users without a saved preference will see dark mode
```

---

## ♿ Accessibility

- All interactive elements have `aria-label` attributes
- FAQ accordion uses proper `aria-expanded` / `aria-controls` / `role="region"`
- Testimonial slider supports keyboard navigation (Arrow keys)
- Gallery lightbox supports Escape to close, Arrow keys to navigate
- Focus rings are visible in both light and dark mode
- Color contrast passes WCAG AA in both themes
- Images have meaningful `alt` text

---

## 📱 WhatsApp Integration

The WhatsApp button system works through `getWhatsAppLink()` in `js/config.js`:

```js
// Simple order link
getWhatsAppLink()

// With pre-filled message
getWhatsAppLink("Hello! I'd like to order a custom birthday cake 🎂")
```

The order form in `contact.html` builds a full order summary message and opens WhatsApp with it pre-filled — no backend or payment gateway required.

---

## 🛠️ Adding a New Page

1. Copy `about.html` as your starting template
2. Update the `<title>` and `<meta name="description">`
3. Add your content inside `<main>`
4. Add the page to `SITE_CONFIG.navLinks` in `js/config.js` — it auto-appears in nav and footer

---

## 📊 SEO Checklist

- [x] Unique `<title>` and `<meta name="description">` on every page
- [x] Open Graph / Twitter Card meta tags
- [x] Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`)
- [x] Image `alt` attributes
- [x] `<link rel="canonical">` on every page
- [x] Mobile-first responsive design
- [x] Fast loading (no heavy frameworks, lazy-loaded images)
- [ ] Add your `sitemap.xml` (generate at xml-sitemaps.com)
- [ ] Submit to Google Search Console after deployment

---

## 🔐 Performance Tips

- Convert all images to **WebP** format (use squoosh.app)
- Compress images to under **100KB** each
- Use the **Tailwind CLI build** (not Play CDN) for production — reduces CSS from ~300KB to ~5–15KB
- Enable **Brotli/Gzip** on your host (automatic on Vercel/Netlify)

---

## 📞 Template Support

This template was built following the **Global Standard Bakery Template 14-Phase Roadmap**.

**To rebrand for a new client in under 30 minutes:**
1. Update `js/config.js` ✓
2. Update `assets/css/input.css` color vars ✓
3. Replace images in `data/products.js` and `js/gallery-filter.js` ✓
4. Update `data/products.js` with real menu ✓
5. Update `data/testimonials.js` with real reviews ✓
6. Deploy to Vercel or GitHub Pages ✓

---

*Template by Sweet Crumbs Theme | Tailwind CSS + Vanilla JS | Light/Dark Mode*
