# ✏️ Edit Plan — Sweet Crumbs Bakery Template

This document is your **step-by-step rebrand guide**. Follow it top to bottom when setting up the template for a new bakery client. Every change listed here has a single source of truth — you should rarely need to touch more than 3–4 files.

---

## 🔢 Edit Priority Order

| Priority | Task | Time | File(s) |
|----------|------|------|---------|
| 1 | Business name + WhatsApp number | 2 min | `js/config.js` |
| 2 | Phone, email, address, hours | 2 min | `js/config.js` |
| 3 | Social media links | 1 min | `js/config.js` |
| 4 | Brand colors (light + dark) | 2 min | CSS vars in each HTML `<style>` block |
| 5 | Logo | 1 min | `js/components.js` |
| 6 | Product menu + prices | 5 min | `data/products.js` |
| 7 | Product images | 10 min | `data/products.js` |
| 8 | Gallery images | 10 min | `js/gallery-filter.js` |
| 9 | Hero + page background images | 5 min | HTML files directly |
| 10 | Team + About images | 3 min | `about.html` |
| 11 | Testimonials | 3 min | `data/testimonials.js` |
| 12 | FAQ answers | 3 min | `data/faq.js` |
| 13 | Page titles + SEO meta | 3 min | Each HTML file `<head>` |
| 14 | Currency | 30 sec | `js/config.js` |

**Total estimated time: ~50 minutes for a complete rebrand**

---

## CHANGE 1 — Business Name

**Where it appears:** Navbar logo, browser tab titles, footer copyright, WhatsApp messages, SEO meta.

**File to edit:** `js/config.js`

```js
// Line 7 — EDIT HERE
businessName: "Your Bakery Name Here",
tagline:      "Your custom tagline here",
```

> The name auto-propagates to the navbar (via `js/components.js`) and the footer.
> Also update `<title>` tags in each HTML file's `<head>` — see CONTENT.md.

---

## CHANGE 2 — WhatsApp Number

**Where it appears:** Every "Order on WhatsApp" button, floating button, form submit action.

**File to edit:** `js/config.js`

```js
// IMPORTANT: International format, NO + sign, NO spaces
whatsappNumber:  "2348012345678",   // Nigeria example
// whatsappNumber: "447911123456",  // UK example
// whatsappNumber: "12125551234",   // USA example

whatsappMessage: "Hello! I'd like to place an order 🎂",  // Default message
```

**How to find your number:**
Open WhatsApp → Settings → Account — your number shows in international format.
Remove the `+` and any spaces: e.g. `+234 801 234 5678` → `2348012345678`

---

## CHANGE 3 — Phone, Email, Address, Map Link, Hours

**File to edit:** `js/config.js`

```js
phone:   "+234 801 234 5678",            // Display format (with spaces/hyphens)
email:   "hello@yourbakery.com",
address: "Your full street address here",
mapUrl:  "https://maps.google.com/?q=...", // Paste your Google Maps share link

hours: {
  weekdays: "Monday – Friday: 8:00 AM – 7:00 PM",
  saturday: "Saturday: 8:00 AM – 8:00 PM",
  sunday:   "Sunday: Closed",
},
```

---

## CHANGE 4 — Social Media Links

**File to edit:** `js/config.js`

```js
social: {
  instagram: "https://instagram.com/yourbakery",
  facebook:  "https://facebook.com/yourbakery",
  twitter:   "",          // Leave empty string "" to hide the icon
  tiktok:    "https://tiktok.com/@yourbakery",
},
```

---

## CHANGE 5 — Announcement Bar

The yellow/gold bar at the very top of every page.

**File to edit:** `js/config.js`

```js
announcement: {
  show:     true,        // Set to false to hide the bar completely
  text:     "🎉 Free delivery on orders above ₦25,000 within Lagos!",
  link:     "contact.html",
  linkText: "Order Now",
},
```

---

## CHANGE 6 — Brand Colors

The template uses CSS custom properties so you change ONE variable and the whole site updates.

**Where to edit:** The `<style>` block at the top of **each HTML file** (search for `:root {`).
For production build: edit `assets/css/input.css` instead.

```css
/* LIGHT MODE — paste into :root { } */
--color-bg:      #FFF8F0;   /* Page background */
--color-primary: #C9A84C;   /* Buttons, headings, gold accents */
--color-accent:  #E8A0B4;   /* Badges, highlights */
--color-text:    #2C1810;   /* Body text */

/* DARK MODE — paste into .dark { } */
--color-bg:      #0F0602;
--color-primary: #D4AF37;
--color-accent:  #C2688E;
--color-text:    #F5E6D3;
```

**Color suggestion tool:** Use [coolors.co](https://coolors.co) or [realtimecolors.com](https://realtimecolors.com) to find a palette that matches the client's brand.

---

## CHANGE 7 — Logo

**File to edit:** `js/components.js` — search for `EDIT HERE: Replace text logo`

**Current (text logo):**
```html
<span>🎂 Sweet Crumbs Bakery</span>
```

**Replace with image logo:**
```html
<img src="assets/images/logo.svg"
     alt="Your Bakery Name"
     class="h-10 w-auto">
```

**Logo file:** Save as `assets/images/logo.svg` (SVG preferred) or `logo.png`.
Recommended: provide both a light-mode and dark-mode version if the logo color changes:
```html
<img src="assets/images/logo-light.svg" class="h-10 block dark:hidden" alt="Logo">
<img src="assets/images/logo-dark.svg"  class="h-10 hidden dark:block" alt="Logo">
```

---

## CHANGE 8 — Currency

**File to edit:** `js/config.js`

```js
currency:       "₦",      // Change to "$", "£", "€", "GHS", "KES", etc.
currencyLocale: "en-NG",  // Change to "en-US", "en-GB", "en-GH", etc.
```

This auto-updates all price displays on the products page.

---

## CHANGE 9 — Product Menu + Prices

**File to edit:** `data/products.js`

Each product entry:
```js
{
  id:       "c001",        // Unique ID — never duplicate
  category: "cakes",       // "cakes" | "snacks" | "wedding"
  name:     "Cake Name",
  tagline:  "Short description",
  price:    15000,          // Number only — currency symbol from config.js
  badge:    "Best Seller",  // "" to hide badge
  description: "Full paragraph description.",
  serves:   "10–12",        // "" if not applicable
  allergens: ["Gluten", "Dairy", "Eggs"],  // [] for none
  available: true,
  image:    "YOUR_IMAGE_URL_HERE",  // See IMAGES.md
  altText:  "Descriptive alt text for accessibility",
  featured: true,           // true = appears on homepage bestsellers
},
```

**To add a product:** Copy any existing entry, give it a unique `id`, and paste it into the array.
**To remove a product:** Delete the entire `{ ... },` block.
**To hide a product temporarily:** Set `available: false`.

---

## CHANGE 10 — Navigation Links

**File to edit:** `js/config.js`

```js
navLinks: [
  { label: "Home",    href: "index.html" },
  { label: "About",   href: "about.html" },
  // Add or remove items here — max 6 recommended for mobile
],
```

---

## CHANGE 11 — Page Titles and SEO Meta

Each HTML file has its own `<title>` and `<meta name="description">`. Update them for each page:

| File | What to change |
|------|----------------|
| `index.html` | Business name, city, country in title |
| `about.html` | Story summary in description |
| `products.html` | Menu/products description |
| `custom-cakes.html` | Custom cake description |
| `gallery.html` | Gallery description |
| `contact.html` | Contact/order description |

Search for `<!-- EDIT HERE: Update title` in each file to find the spot.

Also update these in `js/config.js`:
```js
siteUrl:       "https://yourdomain.com",
ogImage:       "assets/images/og-image.jpg",  // 1200×630 px social share image
twitterHandle: "@yourhandle",
```

---

## CHANGE 12 — About Page Content

**File to edit:** `about.html` — search for `EDIT HERE: Replace with actual bakery story`

Update:
- The founder's name
- The founding year
- The story paragraphs
- The stat numbers (years baking, cakes delivered, reviews)
- Team member names, roles, bios
- Team photos (see IMAGES.md)

---

## CHANGE 13 — Testimonials

**File to edit:** `data/testimonials.js`

```js
{
  id:       1,
  name:     "Customer Full Name",
  role:     "Birthday Celebrant",
  stars:    5,                    // 1–5
  review:   "Their review text.",
  avatar:   "YOUR_AVATAR_URL",    // 80×80 px headshot
  location: "Lagos, Nigeria",
  product:  "Red Velvet Dream",   // Product they ordered (shown as badge)
},
```

---

## CHANGE 14 — FAQ

**File to edit:** `data/faq.js`

```js
{
  id:       1,
  category: "ordering",  // "ordering" | "delivery" | "custom" | "payment" | "general"
  question: "Your question here?",
  answer:   "Your detailed answer here.",
},
```

The `category` field controls filtering — on the contact page, only `"ordering"` category FAQs are shown. On the homepage, all categories appear.

---

## CHANGE 15 — Images (Summary)

Full details in **IMAGES.md**. Quick reference:

| Image type | Where to edit | Count |
|-----------|---------------|-------|
| Product photos | `data/products.js` | 14 |
| Gallery photos | `js/gallery-filter.js` | 16 |
| Hero backgrounds | HTML files | 6 |
| Homepage previews | `index.html` | 6 |
| Custom cake gallery | `custom-cakes.html` | 7 |
| About/team photos | `about.html` | 4 |
| Testimonial avatars | `data/testimonials.js` | 6 |

**Total placeholder images to replace: 59**
(7 are internal fallbacks that don't need replacing)

---

---

## CHANGE 16 — About Page Story & Team Text

**File to edit:** `about.html` — search `EDIT HERE: Replace with actual bakery story`

**What to update:**

```html
<!-- 1. Founder name (line ~85) -->
<strong>Adaeze Okafor</strong>  →  <strong>Your Founder Name</strong>

<!-- 2. Story paragraphs (2–3 paragraphs) — replace the entire <div class="space-y-4..."> block -->
<p>Founded in 20XX from a passion for...</p>
<p>By 20XX we had grown to...</p>

<!-- 3. Stats (search for "years baking") -->
<span>6+</span>  Years Baking        → your actual years
<span>2,400+</span> Cakes Delivered  → your actual number
<span>4.9★</span> Average Review     → your actual rating

<!-- 4. Team cards (search "EDIT HERE: Replace with actual team") -->
<!-- Update name, role, bio, and photo (see IMAGES.md GROUP 4) for each team member -->
<h3>Adaeze Okafor</h3>         → Your Name
<p>Founder & Head Baker</p>    → Your Role
<p>Bio text here...</p>        → Your bio

<!-- 5. Page <title> and <meta description> in <head> -->
<title>About Us — Sweet Crumbs Bakery...</title>
<meta name="description" content="Learn the story behind Sweet Crumbs Bakery...">
```

---

## CHANGE 17 — Custom Cakes Page Content

**File to edit:** `custom-cakes.html`

**What to update:**

```html
<!-- 1. Occasion cards (search "EDIT HERE: Add/remove occasion cards") -->
<!-- Each card shows: Birthday, Wedding, Baby Shower, Corporate -->
<!-- Add/remove occasion types to match what you actually offer -->

<!-- 2. Cake flavours & sizes (search "EDIT HERE: Update flavours, sizes") -->
<!-- Update the checkbox options for sponge flavours, tier sizes, finishes -->

<!-- 3. Starting prices (search "EDIT HERE: Update starting prices") -->
<!-- Update the price guide table — e.g.: 6" single tier from ₦12,000 -->

<!-- 4. Process steps — update timeframes if different -->
<!-- e.g.: "Order at least 7 days in advance" — change to your actual lead time -->

<!-- 5. Page <title> in <head> -->
<title>Custom Cakes — Sweet Crumbs Bakery...</title>
```

---

## CHANGE 18 — Contact Page Content

**File to edit:** `contact.html`

**What to update:**

```html
<!-- 1. Page <title> and <meta description> in <head> -->
<title>Contact & Order — Sweet Crumbs Bakery...</title>

<!-- 2. Google Maps embed (search for <iframe src="https://maps.google.com") -->
<!-- Replace the iframe src with your real Google Maps embed URL -->
<!-- Get it from: Google Maps → Share → Embed a map → Copy HTML -->

<!-- 3. Contact details are pulled automatically from js/config.js -->
<!-- No HTML edits needed for address, phone, email, hours -->
```

---

## CHANGE 19 — Page Hero Headlines (H1 Text on Interior Pages)

Each interior page has a large hero banner with a headline and subtitle. These are hardcoded in the HTML.

| Page | File | Search for | What to change |
|------|------|-----------|----------------|
| About | `about.html` | `Our Story` | Change H1 to match your bakery voice |
| Products | `products.html` | `Our Cakes & Snacks` | Update if you renamed categories |
| Custom Cakes | `custom-cakes.html` | `Custom Cakes, Made With Love` | Your tagline |
| Gallery | `gallery.html` | `Our Gallery` | Keep or personalise |
| Contact | `contact.html` | `Get In Touch` | Update if needed |

**How to find:** Open the HTML file, search (`Cmd+F`) for `<h1` — the hero H1 is near the top of `<main>`.

---

## CHANGE 20 — Homepage Sections (How It Works + Features)

**File to edit:** `index.html`

```html
<!-- 1. "How It Works" steps (search "How It Works" in index.html) -->
<!-- Each step has: Step number, title, description -->
<!-- Update to match your actual ordering process -->

<!-- 2. Feature/USP section (search for "Why Choose Us" or feature icons) -->
<!-- Update each feature title and description to match your real strengths -->
<!-- e.g.: "Same-day delivery", "Halal certified", "Nut-free kitchen available" -->

<!-- 3. Announcement bar text -->
<!-- Controlled from js/config.js → announcement.text -->
<!-- Already covered in CHANGE 5 -->
```

---

## CHANGE 21 — Footer "Made by" Credit Line

The footer currently shows:
```
Made with ❤️ — Template by Sweet Crumbs Theme
```

**File to edit:** `js/components.js` — search for `Template by`

```js
// Around line 286 — change or remove the credit line:
<p>Made with ❤️ — Template by <a href="#">Sweet Crumbs Theme</a></p>

// Options:
// Option A: Remove it entirely (delete the <p> line)
// Option B: Replace with your studio name:
<p>Built by <a href="https://yourstudio.com">Your Studio</a></p>
// Option C: Keep as-is (fine for client sites)
```

> Note: The footer copyright line `© 2026 [Business Name]. All rights reserved.`
> **auto-updates every year** — it uses `new Date().getFullYear()` in JS, so you never need to manually update it.

---

## CHANGE 22 — Deposit & Payment Policy Text

**File to edit:** `data/faq.js` — find the FAQ about deposits/payment

Also appears in `custom-cakes.html` — search for `50%` or `deposit`.

```js
// data/faq.js — find the payment/deposit question and update the answer:
{
  category: "payment",
  question: "Do you require a deposit?",
  answer: "Yes, we require a 50% deposit to confirm your order...",  // ← update %
},
```

---

## CHANGE 23 — Delivery Areas & Conditions

**File to edit:** `data/faq.js` — find the delivery FAQ

Also check `js/config.js → announcement.text` if it mentions delivery areas.

```js
// Update to your actual delivery radius and fees:
answer: "We deliver within Lagos Island and Victoria Island. Delivery fee from ₦2,000...",
```

---

## ✅ Quick Sanity Check After Editing

Run through this before going live:

- [ ] WhatsApp number works — click a button and confirm the right number opens
- [ ] All product prices are correct
- [ ] Dark mode toggle works on every page
- [ ] Mobile menu opens and closes
- [ ] Gallery filter switches work
- [ ] Contact form redirects to WhatsApp with correct details
- [ ] No "Sweet Crumbs" or "Adaeze" text remains (if fully rebranding)
- [ ] No picsum.photos images remain (if replacing all placeholders)
- [ ] Site title in browser tab matches business name

See **DEPLOY_CHECKLIST.md** for the full pre-launch audit.
