# Image Guide — Bakery Template

All placeholder images now use `loremflickr.com` (food/bakery-specific) instead of random stock photos.
When you're ready to go live, replace every placeholder URL with your own photo.

---

## Quick Rules

| Rule | Detail |
|------|--------|
| Format | WebP preferred, JPG acceptable. Avoid PNG for photos (larger file size). |
| Compression | Target < 120 KB per image. Use [squoosh.app](https://squoosh.app) (free, browser-based). |
| Local path | Save to `assets/images/` and use path like `assets/images/hero.jpg` |
| Remote URL | Any HTTPS image URL works (Cloudinary, Unsplash, your CDN) |
| Alt text | Already written — do NOT blank out `alt=""` attributes |

---

## WHERE TO PLACE YOUR CUSTOM IMAGES — File Map

This table shows exactly where each image lives and how to replace it.

### GROUP 1 — Product Card Images
**File:** `data/products.js`
**Find:** the `image:` line for each product ID
**Recommended size:** 800 × 600 px | < 120 KB | WebP

| ID | Product | File → Variable | Current placeholder | Ideal photo |
|----|---------|-----------------|---------------------|-------------|
| `c001` | Victoria Sponge | `data/products.js` → `image:` in id `"c001"` | `loremflickr.com/.../cake,vanilla?lock=10` | Overhead shot, icing sugar dusted |
| `c002` | Dark Chocolate Fudge | `data/products.js` → `image:` in id `"c002"` | `loremflickr.com/.../chocolate,cake?lock=20` | Dark ganache drizzle, moody lighting |
| `c003` | Red Velvet Dream | `data/products.js` → `image:` in id `"c003"` | `loremflickr.com/.../cake,red?lock=30` | Slice showing red interior + cream frosting |
| `c004` | Lemon Sunshine Drizzle | `data/products.js` → `image:` in id `"c004"` | `loremflickr.com/.../lemon,cake?lock=40` | Bright natural light, crackly glaze |
| `c005` | Strawberry & Cream Gateau | `data/products.js` → `image:` in id `"c005"` | `loremflickr.com/.../strawberry,cake?lock=50` | Fresh berries on top, elegant |
| `c006` | Caramel Salted Butter | `data/products.js` → `image:` in id `"c006"` | `loremflickr.com/.../caramel,cake?lock=60` | Caramel drizzle, golden warm tones |
| `s001` | Assorted Chin Chin | `data/products.js` → `image:` in id `"s001"` | `loremflickr.com/.../snack,pastry?lock=70` | Golden chin chin in premium box/bowl |
| `s002` | Butter Shortbread Tin | `data/products.js` → `image:` in id `"s002"` | `loremflickr.com/.../cookies,biscuit?lock=80` | Cookies in gold tin, gift presentation |
| `s003` | Fudgy Brownies | `data/products.js` → `image:` in id `"s003"` | `loremflickr.com/.../brownie,chocolate?lock=90` | Stack, gooey cross-section visible |
| `s004` | Puff Puff (12 pcs) | `data/products.js` → `image:` in id `"s004"` | `loremflickr.com/.../donut,pastry?lock=100` | Golden pile, icing sugar dusted |
| `s005` | Savoury Meat Pies | `data/products.js` → `image:` in id `"s005"` | `loremflickr.com/.../pie,pastry?lock=110` | Golden flaky pies, one cut open |
| `s006` | Premium Dessert Box | `data/products.js` → `image:` in id `"s006"` | `loremflickr.com/.../dessert,box?lock=120` | Gift box open, assorted sweets |
| `w001` | 2-Tier Wedding Cake | `data/products.js` → `image:` in id `"w001"` | `loremflickr.com/.../wedding,cake?lock=130` | Elegant white fondant, floral décor |
| `w002` | 3-Tier Wedding Cake | `data/products.js` → `image:` in id `"w002"` | `loremflickr.com/.../wedding,cake?lock=140` | Grand 3-tier, gold accents, sugar flowers |

**How to change a product image:**
```js
// data/products.js — find the product by id, update the image: line
{
  id: "c001",
  // ...
  image: "assets/images/products/victoria-sponge.webp",  // ← Change this
  altText: "Classic Victoria Sponge cake",                // ← Keep descriptive
},
```

---

### GROUP 2 — Gallery Grid Images
**File:** `js/gallery-filter.js` → `GALLERY_ITEMS` array (top of file, lines 9–24)
**Recommended size:** 600 × 600 px (square) | < 80 KB | WebP

| ID | Title | Category | File → Variable | Current placeholder | Ideal photo |
|----|-------|----------|-----------------|---------------------|-------------|
| `1` | Victoria Sponge | cakes | `js/gallery-filter.js` → id `1` image | `loremflickr.com/.../cake,vanilla?lock=1` | Victoria sponge cake photo |
| `2` | Chocolate Fudge | cakes | `js/gallery-filter.js` → id `2` image | `loremflickr.com/.../chocolate,cake?lock=2` | Chocolate fudge cake |
| `3` | White Rose Wedding | wedding | `js/gallery-filter.js` → id `3` image | `loremflickr.com/.../wedding,cake?lock=3` | White rose wedding cake |
| `4` | Chin Chin Box | snacks | `js/gallery-filter.js` → id `4` image | `loremflickr.com/.../snack,pastry?lock=4` | Chin chin gift box |
| `5` | Red Velvet Layer | cakes | `js/gallery-filter.js` → id `5` image | `loremflickr.com/.../cake,red?lock=5` | Red velvet cake |
| `6` | Unicorn Cake | custom | `js/gallery-filter.js` → id `6` image | `loremflickr.com/.../birthday,cake?lock=6` | Custom unicorn birthday cake |
| `7` | Gold Leaf 3-Tier | wedding | `js/gallery-filter.js` → id `7` image | `loremflickr.com/.../wedding,cake?lock=7` | 3-tier gold leaf wedding cake |
| `8` | Shortbread Tin | snacks | `js/gallery-filter.js` → id `8` image | `loremflickr.com/.../cookies,biscuit?lock=8` | Shortbread cookie tin |
| `9` | Lemon Drizzle | cakes | `js/gallery-filter.js` → id `9` image | `loremflickr.com/.../lemon,cake?lock=9` | Lemon drizzle cake |
| `10` | Football Theme | custom | `js/gallery-filter.js` → id `10` image | `loremflickr.com/.../birthday,cake?lock=10` | Football themed custom cake |
| `11` | Brownie Selection | snacks | `js/gallery-filter.js` → id `11` image | `loremflickr.com/.../brownie,chocolate?lock=11` | Brownie selection box |
| `12` | Floral Tier Cake | wedding | `js/gallery-filter.js` → id `12` image | `loremflickr.com/.../wedding,cake?lock=12` | Floral decorated wedding cake |
| `13` | Number 30 Cake | custom | `js/gallery-filter.js` → id `13` image | `loremflickr.com/.../birthday,cake?lock=13` | Custom number birthday cake |
| `14` | Caramel Salted Butter | cakes | `js/gallery-filter.js` → id `14` image | `loremflickr.com/.../caramel,cake?lock=14` | Caramel cake |
| `15` | Puff Puff Delight | snacks | `js/gallery-filter.js` → id `15` image | `loremflickr.com/.../donut,pastry?lock=15` | Puff puff |
| `16` | Princess Tiara Cake | custom | `js/gallery-filter.js` → id `16` image | `loremflickr.com/.../birthday,cake?lock=16` | Princess birthday cake |

**How to change a gallery image:**
```js
// js/gallery-filter.js — find the item by id and update image:
{ id: 1, category: "cakes", title: "Victoria Sponge",
  image: "assets/images/gallery/cake-01.webp",  // ← Change this
  alt:   "Victoria Sponge cake" },               // ← Keep this
```

**To add a new gallery item:**
```js
// Append inside GALLERY_ITEMS array:
{ id: 17, category: "cakes", title: "My New Cake",
  image: "assets/images/gallery/cake-17.webp",
  alt:   "Description of the photo" },
```

**To remove a gallery item:** Delete the entire `{ id: X, ... },` line.

---

### GROUP 3 — Homepage Images
**File:** `index.html`
**Find with:** Cmd+F (Mac) / Ctrl+F (Windows) → search the "seed" name below

| Section | Search for | Ideal size | Description |
|---------|-----------|-----------|-------------|
| Hero background | `seed/hero-bakery` | 1600×900 | Stunning hero — bakery interior, beautiful cake display, or baker at work |
| Gallery preview 1 | `seed/preview-1` | 600×600 | Showcase photo |
| Gallery preview 2 | `seed/preview-2` | 600×600 | Showcase photo |
| Gallery preview 3 | `seed/preview-3` | 600×600 | Showcase photo |
| Gallery preview 4 | `seed/preview-4` | 600×600 | Showcase photo |
| Gallery preview 5 | `seed/preview-5` | 600×600 | Showcase photo |
| Gallery preview 6 | `seed/preview-6` | 600×600 | Showcase photo |
| CTA section bg | `seed/cta-bg` | 1600×600 | Overhead flat-lay of baked goods |
| Category: Cakes | `seed/cat-cakes` | 600×400 | Selection of celebration cakes |
| Category: Snacks | `seed/cat-snacks` | 600×400 | Snack assortment, gift boxes |
| Category: Wedding | `seed/cat-wedding` | 600×400 | Elegant wedding cake |

**How to replace in index.html:**
```html
<!-- Find this: -->
<img src="https://picsum.photos/seed/hero-bakery/1600/900" ...>

<!-- Replace src with: -->
<img src="assets/images/hero/homepage-hero.webp" ...>
```

---

### GROUP 4 — About Page Images
**File:** `about.html`

| Section | Search for | Ideal size | Description | Where to place file |
|---------|-----------|-----------|-------------|---------------------|
| Page header bg | `seed/about-hero` | 1400×600 | Bakery exterior, kitchen shot | `assets/images/hero/about-hero.webp` |
| Founder/story photo | `seed/baker-story` | 800×600 | Founder decorating a cake | `assets/images/team/founder.webp` |
| Team person 1 (Adaeze) | `seed/team-ada` | 600×500 | Professional headshot | `assets/images/team/team-01.webp` |
| Team person 2 | `seed/team-chukwu` | 600×500 | Professional headshot | `assets/images/team/team-02.webp` |
| Team person 3 | `seed/team-fatima` | 600×500 | Professional headshot | `assets/images/team/team-03.webp` |

---

### GROUP 5 — Custom Cakes Page Images
**File:** `custom-cakes.html`

| Section | Search for | Ideal size | Description | Where to place file |
|---------|-----------|-----------|-------------|---------------------|
| Hero background | `seed/custom-hero` | 1600×800 | Stunning wedding/custom cake | `assets/images/hero/custom-cakes-hero.webp` |
| Portfolio 1 | `seed/custom-1` | 600×600 | Custom cake example | `assets/images/custom/custom-01.webp` |
| Portfolio 2 | `seed/custom-2` | 600×600 | Custom cake example | `assets/images/custom/custom-02.webp` |
| Portfolio 3 | `seed/custom-3` | 600×900 | Tall custom cake (portrait) | `assets/images/custom/custom-03.webp` |
| Portfolio 4 | `seed/custom-4` | 600×600 | Custom cake example | `assets/images/custom/custom-04.webp` |
| Portfolio 5 | `seed/custom-5` | 600×600 | Custom cake example | `assets/images/custom/custom-05.webp` |
| Portfolio 6 | `seed/custom-6` | 600×600 | Custom cake example | `assets/images/custom/custom-06.webp` |
| Portfolio 7 | `seed/custom-7` | 600×600 | Custom cake example | `assets/images/custom/custom-07.webp` |
| Wedding feature | `seed/wedding-feature` | 800×700 | Grand wedding cake | `assets/images/custom/wedding-feature.webp` |

---

### GROUP 6 — Testimonial Avatars
**File:** `data/testimonials.js` → `avatar:` field for each person
**Recommended size:** 80 × 80 px (square) | < 20 KB | WebP or JPG

| Person | Search for | Where to place file |
|--------|-----------|---------------------|
| Adaeze | `seed/ada-avatar` | `assets/images/avatars/customer-01.webp` |
| Emeka/Chisom | `seed/emeka-avatar` | `assets/images/avatars/customer-02.webp` |
| Blessing | `seed/blessing-avatar` | `assets/images/avatars/customer-03.webp` |
| Tunde | `seed/tunde-avatar` | `assets/images/avatars/customer-04.webp` |
| Nkechi | `seed/nkechi-avatar` | `assets/images/avatars/customer-05.webp` |
| Fatimah | `seed/fatimah-avatar` | `assets/images/avatars/customer-06.webp` |

> Don't have real customer photos? Use [ui-avatars.com](https://ui-avatars.com) (initials) or [dicebear.com](https://dicebear.com) (illustrated avatars). No copyright issues.

---

### GROUP 7 — Brand Assets (Create These)
**Not yet in the project — you need to create them**

| Asset | Where to save | Size | Notes |
|-------|--------------|------|-------|
| Logo | `assets/images/logo.svg` | Any | SVG preferred for crisp scaling |
| Logo (dark mode) | `assets/images/logo-dark.svg` | Any | Only if logo color changes on dark bg |
| OG / Social share | `assets/images/og-image.jpg` | 1200×630 | Shown when you share the site on WhatsApp/social |
| Favicon | `assets/icons/favicon.svg` | 32×32 | Browser tab icon |
| Apple touch icon | `assets/icons/apple-touch-icon.png` | 180×180 | iPhone home screen icon |

---

### GROUP 8 — Fallback Images (Low Priority)
Only show if a primary image fails to load. Replace after everything else.

| Reference | Search for | File |
|-----------|-----------|------|
| Product fallback | `seed/fallback/800/600` | `index.html` |
| Product fallback 2 | `seed/product-fallback/800/600` | `products.html` |
| Gallery fallback | `seed/fallback-gallery/600/600` | `js/gallery-filter.js` |
| Story fallback | `seed/fallback-story/800/600` | `about.html` |
| Avatar fallback | `seed/avatar-fallback/80/80` | `data/testimonials.js` |

---

## Recommended File Folder Structure

Save all your custom images into this structure inside `assets/images/`:

```
assets/
└── images/
    ├── logo.svg                    ← Brand logo
    ├── logo-dark.svg               ← Dark mode logo (optional)
    ├── og-image.jpg                ← Social share image (1200×630)
    │
    ├── icons/
    │   ├── favicon.svg             ← Browser tab icon
    │   └── apple-touch-icon.png    ← iOS icon (180×180)
    │
    ├── hero/
    │   ├── homepage-hero.webp      ← index.html hero background
    │   ├── about-hero.webp         ← about.html page header
    │   └── custom-cakes-hero.webp  ← custom-cakes.html header
    │
    ├── products/
    │   ├── victoria-sponge.webp    ← c001
    │   ├── chocolate-fudge.webp    ← c002
    │   ├── red-velvet.webp         ← c003
    │   ├── lemon-drizzle.webp      ← c004
    │   ├── strawberry-gateau.webp  ← c005
    │   ├── caramel-cake.webp       ← c006
    │   ├── chin-chin.webp          ← s001
    │   ├── shortbread-tin.webp     ← s002
    │   ├── brownies.webp           ← s003
    │   ├── puff-puff.webp          ← s004
    │   ├── meat-pies.webp          ← s005
    │   ├── dessert-box.webp        ← s006
    │   ├── wedding-cake-2tier.webp ← w001
    │   └── wedding-cake-3tier.webp ← w002
    │
    ├── gallery/
    │   ├── cake-01.webp            ← gallery id 1
    │   ├── cake-02.webp            ← gallery id 2
    │   └── ... (id 1 – 16)
    │
    ├── custom/
    │   ├── custom-01.webp          ← custom-cakes portfolio 1
    │   ├── custom-02.webp
    │   └── ... (up to custom-07 + wedding-feature)
    │
    ├── team/
    │   ├── founder.webp            ← about.html story photo
    │   ├── team-01.webp            ← team member 1
    │   ├── team-02.webp            ← team member 2
    │   └── team-03.webp            ← team member 3
    │
    └── avatars/
        ├── customer-01.webp        ← testimonial 1
        ├── customer-02.webp
        └── ... (up to customer-06)
```

---

## Free Photo Sources (Cake & Food Specific)

| Source | Best for | License |
|--------|----------|---------|
| [Unsplash](https://unsplash.com/s/photos/cake) | Hero backgrounds, lifestyle shots | Free commercial |
| [Pexels](https://pexels.com/search/cake/) | Food photography, clean product shots | Free commercial |
| [Foodish API](https://foodish-api.com) | Random food photos | Free |
| Your own phone | Product shots — most authentic | Yours |
| [Squoosh](https://squoosh.app) | Compress + convert to WebP | Free tool |

**Best Unsplash search terms:**
- `chocolate cake` / `birthday cake` / `wedding cake`
- `bakery pastry` / `baked goods` / `artisan bread`
- `dessert box` / `cookies tin` / `fudgy brownies`
- `chin chin` / `puff puff` / `Nigerian snacks` (limited — use your own)
