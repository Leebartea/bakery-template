# 🖼️ Image Replacement Guide

All 59 placeholder images (from `picsum.photos`) are listed below, grouped by file.
Replace each URL with your own photo URL or a local path like `assets/images/hero.jpg`.

**Before replacing:** Read the recommended specs in the table header for each group.

---

## Quick Swap Rules

| Rule | Detail |
|------|--------|
| Format | WebP preferred, JPG acceptable. Avoid PNG for photos (larger file size). |
| Compression | Target < 120 KB per image. Use [squoosh.app](https://squoosh.app) (free, browser-based). |
| Local path | Save to `assets/images/` and use path like `assets/images/hero.jpg` |
| Remote URL | Any HTTPS image URL works (Cloudinary, Unsplash, your CDN) |
| Alt text | Already written — do NOT remove or blank out `alt=""` attributes |

---

## GROUP 1 — Product Images
**File:** `data/products.js`
**Recommended size:** 800 × 600 px (landscape) | < 120 KB | WebP

Replace the `image:` value for each product in the array.

| Product ID | Current placeholder slug | Description of ideal photo |
|-----------|--------------------------|---------------------------|
| `c001` | `seed/victoria-sponge/800/600` | Overhead shot of Victoria Sponge with icing sugar dusting |
| `c002` | `seed/choc-fudge-cake/800/600` | Dark chocolate fudge cake, ganache drizzle, moody lighting |
| `c003` | `seed/red-velvet/800/600` | Red velvet slice showing vivid red interior + cream frosting |
| `c004` | `seed/lemon-drizzle/800/600` | Lemon drizzle loaf with crackly glaze, bright natural light |
| `c005` | `seed/strawberry-gateau/800/600` | Strawberry & cream gateau with fresh berries on top |
| `c006` | `seed/caramel-cake/800/600` | Caramel drizzle cake, golden tones, warm lighting |
| `s001` | `seed/chin-chin/800/600` | Chin chin in a premium box or bowl, golden and crunchy-looking |
| `s002` | `seed/shortbread-tin/800/600` | Shortbread cookies in a gold tin, elegant gift presentation |
| `s003` | `seed/fudgy-brownies/800/600` | Stack of fudgy brownies, cross-section showing gooey centre |
| `s004` | `seed/puff-puff/800/600` | Fresh golden puff puff, dusted with icing sugar, pile view |
| `s005` | `seed/meat-pie/800/600` | Golden flaky meat pies, some whole, one cut open |
| `s006` | `seed/dessert-box/800/600` | Premium gift box open, showing assorted sweets inside |
| `w001` | `seed/wedding-cake-2tier/800/600` | Elegant 2-tier white wedding cake, floral décor |
| `w002` | `seed/wedding-cake-3tier/800/600` | Grand 3-tier wedding cake, gold accents, sugar flowers |

### How to change a product image:
```js
// data/products.js — find the product by id and update image:
{
  id: "c001",
  // ...
  image: "assets/images/victoria-sponge.webp",  // ← Change this line
  altText: "Classic Victoria Sponge cake",       // ← Keep this descriptive
},
```

---

## GROUP 2 — Gallery Images
**File:** `js/gallery-filter.js` — edit the `GALLERY_ITEMS` array
**Recommended size:** 600 × 600 px (square) | < 80 KB | WebP

| Gallery ID | Current placeholder | Category | Ideal photo |
|-----------|---------------------|----------|-------------|
| `1` | `seed/g-victoria/600/600` | cakes | Victoria sponge |
| `2` | `seed/g-chocfudge/600/600` | cakes | Chocolate fudge cake |
| `3` | `seed/g-wedding1/600/600` | wedding | White rose wedding cake |
| `4` | `seed/g-chinchin/600/600` | snacks | Chin chin gift box |
| `5` | `seed/g-redvelvet/600/600` | cakes | Red velvet layer cake |
| `6` | `seed/g-unicorn/600/600` | custom | Unicorn birthday cake |
| `7` | `seed/g-wedding2/600/600` | wedding | Gold leaf 3-tier cake |
| `8` | `seed/g-shortbread/600/600` | snacks | Shortbread cookie tin |
| `9` | `seed/g-lemon/600/600` | cakes | Lemon drizzle |
| `10` | `seed/g-football/600/600` | custom | Football theme cake |
| `11` | `seed/g-brownie/600/600` | snacks | Brownie selection box |
| `12` | `seed/g-floral/600/600` | wedding | Floral tier cake |
| `13` | `seed/g-number/600/600` | custom | Number 30 birthday cake |
| `14` | `seed/g-caramel/600/600` | cakes | Caramel salted butter cake |
| `15` | `seed/g-puffpuff/600/600` | snacks | Puff puff delight |
| `16` | `seed/g-princess/600/600` | custom | Princess tiara cake |

### How to change a gallery image:
```js
// js/gallery-filter.js — find the item by id and update image:
{
  id: 1,
  category: "cakes",
  title:    "Victoria Sponge",
  image:    "assets/images/gallery/victoria-sponge.webp",  // ← Change this
  alt:      "Victoria Sponge cake",                         // ← Keep this
},
```

### To add more gallery items:
```js
// Append to the GALLERY_ITEMS array:
{
  id:       17,         // Next sequential number
  category: "cakes",    // "cakes" | "snacks" | "wedding" | "custom"
  title:    "New Cake",
  image:    "assets/images/gallery/new-cake.webp",
  alt:      "Description of the photo",
},
```

### To remove a gallery item:
Delete the entire `{ id: X, ... },` block from `GALLERY_ITEMS`.

---

## GROUP 3 — Homepage Hero + Sections
**File:** `index.html`
**Recommended size:** as specified per image

| Section | Current placeholder | Ideal size | Description |
|---------|---------------------|-----------|-------------|
| Hero background | `seed/hero-bakery/1600/900` | 1600×900 | Stunning hero shot — bakery interior, beautiful cake display, or baker at work |
| Gallery preview 1 | `seed/preview-1/600/600` | 600×600 | Any showcase photo |
| Gallery preview 2 | `seed/preview-2/600/600` | 600×600 | Any showcase photo |
| Gallery preview 3 | `seed/preview-3/600/600` | 600×600 | Any showcase photo |
| Gallery preview 4 | `seed/preview-4/600/600` | 600×600 | Any showcase photo |
| Gallery preview 5 | `seed/preview-5/600/600` | 600×600 | Any showcase photo |
| Gallery preview 6 | `seed/preview-6/600/600` | 600×600 | Any showcase photo |
| CTA section background | `seed/cta-bg/1600/600` | 1600×600 | Overhead flat-lay of baked goods |
| Category: Cakes | `seed/cat-cakes/600/400` | 600×400 | Selection of celebration cakes |
| Category: Snacks | `seed/cat-snacks/600/400` | 600×400 | Snack assortment, gift boxes |
| Category: Wedding | `seed/cat-wedding/600/400` | 600×400 | Elegant wedding cake |

### How to find in index.html:
Search (`Cmd+F`) for `picsum.photos/seed/hero-bakery` — the `src="..."` is what you replace.

---

## GROUP 4 — About Page Images
**File:** `about.html`

| Section | Current placeholder | Ideal size | Description |
|---------|---------------------|-----------|-------------|
| Page header bg | `seed/about-hero/1400/600` | 1400×600 | Bakery exterior, team photo, or kitchen shot |
| Story photo | `seed/baker-story/800/600` | 800×600 | Founder/baker decorating a cake in the kitchen |
| Team — Person 1 | `seed/team-ada/600/500` | 600×500 | Professional headshot or action shot |
| Team — Person 2 | `seed/team-chukwu/600/500` | 600×500 | Professional headshot or action shot |
| Team — Person 3 | `seed/team-fatima/600/500` | 600×500 | Professional headshot or action shot |

---

## GROUP 5 — Custom Cakes Page Images
**File:** `custom-cakes.html`

| Section | Current placeholder | Ideal size | Description |
|---------|---------------------|-----------|-------------|
| Hero background | `seed/custom-hero/1600/800` | 1600×800 | Stunning wedding/custom cake hero |
| Portfolio 1 | `seed/custom-1/600/600` | 600×600 | Custom cake example |
| Portfolio 2 | `seed/custom-2/600/600` | 600×600 | Custom cake example |
| Portfolio 3 | `seed/custom-3/600/900` | 600×900 | Tall custom cake (portrait) |
| Portfolio 4 | `seed/custom-4/600/600` | 600×600 | Custom cake example |
| Portfolio 5 | `seed/custom-5/600/600` | 600×600 | Custom cake example |
| Portfolio 6 | `seed/custom-6/600/600` | 600×600 | Custom cake example |
| Portfolio 7 | `seed/custom-7/600/600` | 600×600 | Custom cake example |
| Wedding feature | `seed/wedding-feature/800/700` | 800×700 | Grand wedding cake, feature photo |

---

## GROUP 6 — Testimonial Avatars
**File:** `data/testimonials.js`
**Recommended size:** 80 × 80 px (square) | < 20 KB | WebP or JPG

| Person | Current placeholder | Notes |
|--------|---------------------|-------|
| Adaeze | `seed/ada-avatar/80/80` | Headshot or generated avatar |
| Emeka/Chisom | `seed/emeka-avatar/80/80` | Couple headshot or silhouette |
| Blessing | `seed/blessing-avatar/80/80` | Headshot |
| Tunde | `seed/tunde-avatar/80/80` | Headshot |
| Nkechi | `seed/nkechi-avatar/80/80` | Headshot |
| Fatimah | `seed/fatimah-avatar/80/80` | Headshot |

> **Privacy note:** Only use real photos with the customer's permission. Alternatively, use illustrated/generated avatars from [ui-avatars.com](https://ui-avatars.com) or [dicebear.com](https://dicebear.com).

---

## GROUP 7 — Fallback Images (Internal — Low Priority)

These only display if a primary image fails to load. Replace after everything else is done.

| Reference | Current URL | Where used |
|-----------|-------------|-----------|
| Product fallback | `seed/fallback/800/600` | Product cards in index.html |
| Product fallback 2 | `seed/product-fallback/800/600` | products.html grid |
| Gallery fallback | `seed/fallback-gallery/600/600` | Gallery grid |
| Story fallback | `seed/fallback-story/800/600` | about.html |
| Avatar fallback | `seed/avatar-fallback/80/80` | Testimonial avatars |

---

## Recommended Free Photo Sources

| Source | Best for | Notes |
|--------|----------|-------|
| [Unsplash](https://unsplash.com) | Hero backgrounds, lifestyle | Free commercial use |
| [Pexels](https://pexels.com) | Food photography | Free commercial use |
| Your own phone | Product photos | Best quality for authenticity |
| [Squoosh](https://squoosh.app) | Compressing images | Convert to WebP, resize |
| [Canva](https://canva.com) | Team/brand photos | Great templates |

### Recommended Unsplash search terms for food/bakery:
- `chocolate cake` / `birthday cake` / `wedding cake`
- `bakery pastry` / `baked goods` / `artisan bread`
- `dessert box` / `cookies tin` / `brownies`
- `chin chin` / `Nigerian snacks` (limited — use your own)

---

## Local Image File Structure (Recommended)

```
assets/
└── images/
    ├── logo.svg               ← Brand logo
    ├── logo-dark.svg          ← Dark mode logo (optional)
    ├── og-image.jpg           ← Social share image (1200×630)
    ├── favicon.svg            ← Browser tab icon
    ├── apple-touch-icon.png   ← iOS home screen icon (180×180)
    │
    ├── hero/
    │   ├── homepage-hero.webp
    │   ├── about-hero.webp
    │   └── custom-cakes-hero.webp
    │
    ├── products/
    │   ├── victoria-sponge.webp
    │   ├── chocolate-fudge.webp
    │   ├── red-velvet.webp
    │   └── ... (one per product)
    │
    ├── gallery/
    │   ├── cake-01.webp
    │   ├── cake-02.webp
    │   └── ... (one per gallery item)
    │
    ├── team/
    │   ├── founder.webp
    │   └── ...
    │
    └── avatars/
        ├── customer-01.webp
        └── ...
```
