# SEO Execution Plan — D&D Design Center

**Date:** February 20, 2026
**Based on:** SEO.md strategy, SEO-FIXES-2025-09-26.md, full codebase audit

---

## Executive Summary

D&D Design Center's website has **13 indexable routes** and **6 blog posts**. The site has strong conversion-oriented landing pages on 2 routes (`/italian-kitchen-cabinets`, `/boca-raton-interior-designer`) and decent SEO on `/productscollection` — but **7 pages lack OG tags, Twitter cards, and structured data**. Product verticals are bundled into a single `/productscollection` page instead of dedicated conversion landing pages, and geo-targeting is limited to one Boca Raton page.

**This plan has three workstreams:**
1. **Technical SEO fixes** — implemented by us (dev team) in code
2. **Conversion landing pages** — designed and built by us as new routes, modeled on the proven Boca Raton / Italian Kitchen Cabinets patterns
3. **Blog content** — handled by an automated content tool that will auto-publish SEO blog posts (no manual content production needed)

**Scale: LARGE** — structural expansion with ~11 new landing pages + technical fixes across existing pages.

---

## Current State Audit

### Site Architecture (Routes)

| Route | Purpose | SEO State | Converts? |
|---|---|---|---|
| `/` | Homepage | Partial — missing OG/Twitter, has JSON-LD | Soft (nav-based) |
| `/productscollection` | All products bundled | Good — meta, JSON-LD, FAQ, OG | Soft (browse) |
| `/italian-kitchen-cabinets` | Kitchen cabinets landing | **Excellent** — full SEO + conversion funnel | **Yes** — CTA, FAQ, testimonials, gallery, form |
| `/boca-raton-interior-designer` | Geo landing (FL) | **Excellent** — full SEO + conversion funnel | **Yes** — phone, form, modal, testimonial |
| `/how-we-work` | Process page | Weak — title & desc only | No |
| `/sustainability` | Sustainability | Weak — title & desc only | No |
| `/collaboration` | Brand partnerships | Weak — VideoObject only | No |
| `/designers` | Team page | Weak — title & desc only | No |
| `/blog` | Blog index | Weak — title & desc only | No |
| `/blog/:slug` | Blog posts (6) | Good — dynamic meta, BlogPosting, OG | Soft (CTA in posts) |
| `/crafted-calm` | Campaign page | Noindexed, no Helmet | Noindexed |
| `/lighting` | Lighting | Very weak — generic desc | No |
| `/privacy` | Legal | Minimal (appropriate) | N/A |
| `/terms` | Legal | Minimal (appropriate) | N/A |

### What's Working (Conversion Landing Page Pattern)

The two high-performing pages follow a proven conversion funnel structure:

**Boca Raton page flow:**
`Hero (phone CTA + email capture)` → `Image Grid` → `Mid-page Urgency CTA (modal form)` → `Brand Section` → `Long-form Copy` → `Video Testimonial` → `FAQ (with schema)` → `Bottom Lead Capture Form`

**Italian Kitchen Cabinets page flow:**
`Hero (consultation CTA + value props)` → `Video + Process Steps` → `Style Gallery (3-col)` → `Feature Checklist` → `Interactive Gallery` → `Trust Logos` → `CTA Banner` → `SEO Copy` → `FAQ Accordion` → `Testimonials` → `Showroom/Map` → `Final CTA`

**Shared conversion mechanics:**
- `openContactForm` custom event → global modal form
- Inline lead capture forms → Make.com webhook
- Phone `tel:` links with Google Ads conversion tracking
- Google Ads conversion values: form submit ($100), phone click ($25)
- GA4 event tracking on all conversion points

### What's Missing

- **6 product category landing pages** — all products lumped into one page
- **4+ geo landing pages** — only Boca Raton exists; NYC/Brooklyn/NJ/Miami unserved
- **OG/Twitter/JSON-LD** on 7 existing pages
- **Stale sitemap** — last updated Aug 2025, missing pages
- **No automated content pipeline** — only 6 manual blog posts vs 250+ needed

---

## Phase 1 — Technical SEO Fixes (Week 1-2)

**Owner:** Dev team (us)
**Priority: HIGH | Effort: SMALL | Impact: MEDIUM-HIGH**
No new pages — fixes to existing code only.

### 1.1 Complete Missing Metadata

| Page | What to Add |
|---|---|
| Home (`/`) | OG tags (title, desc, image, url, type), Twitter card |
| Sustainability | OG tags, Twitter card, JSON-LD (`WebPage`) |
| HowWeWork | OG tags, Twitter card, JSON-LD (`WebPage` + `HowTo`) |
| Designers | OG tags, Twitter card, JSON-LD (`WebPage` + `Person` per designer) |
| Collaboration | OG tags, Twitter card |
| Blog index | OG tags, Twitter card, JSON-LD (`CollectionPage`) |
| Lighting | Unique meta description, canonical URL, OG tags, Twitter card |

### 1.2 Sitemap Overhaul

- Update all `lastmod` values to current dates
- Add missing pages: `/boca-raton-interior-designer`, `/lighting`
- Remove `/crafted-calm` (noindexed)
- Set `/blog` `changefreq` to `daily`
- Consider auto-generating sitemap at build time (`vite-plugin-sitemap`)

### 1.3 Header Hardening

Add to `public/_headers`:
```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

### 1.4 Verify SEO-FIXES-2025-09-26.md Completion

| Item | Status |
|---|---|
| Homepage meta rewrite | Verify implemented |
| Italian Kitchen FAQ JSON-LD | ✅ Confirmed |
| Products Collection meta refresh | Verify updated |
| Internal linking block on Homepage | Verify added |
| `/admin` noindex in `_headers` | ✅ Confirmed |
| Geo-targeting sections on money pages | Verify added |

### 1.5 Add Breadcrumbs

Add `BreadcrumbList` JSON-LD structured data to all pages for rich snippet eligibility.

### Phase 1 Checklist

- [ ] Add OG + Twitter card tags to 7 pages (Home, Sustainability, HowWeWork, Designers, Collaboration, Blog index, Lighting)
- [ ] Add JSON-LD to 4 pages (Blog index, Sustainability, HowWeWork, Designers)
- [ ] Fix Lighting page: unique meta desc, add canonical
- [ ] Update all `lastmod` dates in sitemap.xml
- [ ] Add missing pages to sitemap
- [ ] Add security + cache headers to `_headers`
- [ ] Cross-check SEO-FIXES-2025-09-26.md completion
- [ ] Add `BreadcrumbList` JSON-LD to all pages

---

## Phase 2 — Conversion Landing Pages (Week 2-6)

**Owner:** Dev team (us)
**Priority: HIGH | Effort: LARGE | Impact: HIGH**
The core growth lever — each new page is a dedicated conversion funnel.

### Landing Page Blueprint

Every new landing page follows the proven pattern from `/italian-kitchen-cabinets` and `/boca-raton-interior-designer`. Each page is **conversion-first** — not an informational page, but a funnel.

#### Section Architecture (per page)

```
┌─────────────────────────────────────────────────────┐
│  1. HELMET / SEO BLOCK                              │
│     - <title>, meta description, canonical          │
│     - OG + Twitter card tags                        │
│     - JSON-LD: LocalBusiness + Service + Product    │
│     - JSON-LD: FAQPage                              │
│     - robots: index,follow                          │
├─────────────────────────────────────────────────────┤
│  2. HERO (above the fold)                           │
│     - H1 with primary keyword + location            │
│     - Subheadline (value proposition)               │
│     - Body copy (2-3 sentences, benefit-driven)     │
│     - PRIMARY CTA: "Schedule Free Consultation"     │
│       → dispatches openContactForm event            │
│     - Desktop sidebar: trust signals / checklist    │
│     - Background: full-bleed product image          │
├─────────────────────────────────────────────────────┤
│  3. SOCIAL PROOF BAR                                │
│     - Brand partner logos (Aster, Visionnaire, etc.) │
│     - Star rating + review count                    │
│     - "Serving NYC Since 2006"                      │
├─────────────────────────────────────────────────────┤
│  4. PRODUCT/SERVICE SHOWCASE                        │
│     - 3-column grid: style variants with images     │
│     - OR: FullWidthImageGrid (masonry)              │
│     - OR: Interactive gallery component             │
│     - Descriptive alt text on all images            │
├─────────────────────────────────────────────────────┤
│  5. MID-PAGE URGENCY CTA                            │
│     - Dark background + overlay                     │
│     - Urgency headline ("Planning in next 6 mo?")   │
│     - CTA button → opens BocaRatonFormModal         │
│       (reuse existing modal component)              │
├─────────────────────────────────────────────────────┤
│  6. VALUE PROPOSITION / PROCESS                     │
│     - 3-4 numbered steps (Consult → Design →        │
│       Craft → Install)                              │
│     - Key features checklist (2-col grid)           │
│     - Differentiation copy                          │
├─────────────────────────────────────────────────────┤
│  7. VIDEO / TESTIMONIAL                             │
│     - Cloudinary video embed with poster            │
│     - Pull-quote + attribution                      │
│     - Gold accent styling                           │
├─────────────────────────────────────────────────────┤
│  8. SEO CONTENT BLOCK                               │
│     - 600-800 words of unique keyword-rich copy     │
│     - H2/H3 subsections                             │
│     - Internal links to related pages + blog posts  │
│     - Geo-targeting paragraph (NYC, NJ, FL)         │
├─────────────────────────────────────────────────────┤
│  9. FAQ ACCORDION                                   │
│     - 5-8 questions specific to the product/service │
│     - FAQPage JSON-LD (in Helmet above)             │
│     - sr-only duplication for crawler access        │
├─────────────────────────────────────────────────────┤
│ 10. TESTIMONIALS                                    │
│     - 3-column cards (quote, name, location, stars) │
│     - CTA button interspersed                       │
├─────────────────────────────────────────────────────┤
│ 11. SHOWROOM / LOCATION                             │
│     - Address + hours                               │
│     - Google Maps embed                             │
│     - "Get Directions" + phone link                 │
├─────────────────────────────────────────────────────┤
│ 12. BOTTOM LEAD CAPTURE FORM                        │
│     - "Tell us about your project. No obligation."  │
│     - Fields: Name, Email, Message, Project Type    │
│     - Posts to Make.com webhook                     │
│     - Google Ads conversion tracking ($100)          │
│     - Success state with confirmation               │
├─────────────────────────────────────────────────────┤
│ 13. FINAL CTA BANNER                                │
│     - Dark background                               │
│     - "Ready to Transform Your [Space]?"            │
│     - CTA → openContactForm                        │
└─────────────────────────────────────────────────────┘
```

### Reusable Components

These components already exist and can be reused or adapted:

| Component | Location | Reuse Strategy |
|---|---|---|
| FAQ Accordion | `BocaRatonFAQ` / inline in `ItalianKitchenCabinets` | Extract generic `LandingFAQ` accepting data prop |
| Form Modal | `BocaRatonFormModal` | Already global — reuse as-is via `openContactForm` event |
| Inline Lead Form | `BocaRatonHeroBottom` | Extract to `LandingLeadForm` with configurable project types |
| Mid-page CTA | `BocaRatonMidCTA` | Extract to `LandingMidCTA` with configurable headline/body |
| Video Testimonial | `BocaRatonTestimonialWithImage` | Extract to `LandingTestimonial` with props |
| Image Grid | `FullWidthImageGrid` | Already generic — accepts image array |
| Kitchen Gallery | `KitchenGallery` | Generalize to `ProductGallery` |
| Trust Logos | inline in `ItalianKitchenCabinets` | Extract to `TrustBar` component |
| Showroom Section | inline in `ItalianKitchenCabinets` | Extract to `ShowroomSection` component |
| Brand Section | `VisionnaireSection` | Reuse or create brand-specific variants |

**Step 1:** Extract shared components into `src/components/landing/` before building pages.

### 2.1 Product Category Landing Pages

Each page targets a product vertical with conversion-oriented design.

| # | Route | Primary Keyword | H1 | Priority |
|---|---|---|---|---|
| 1 | `/kitchens` | italian kitchens nyc | Custom Italian Kitchens in NYC | P0 |
| 2 | `/closets` | custom closets nyc | Custom Italian Closets in New York | P0 |
| 3 | `/bathroom` | italian bathroom nyc | Luxury Italian Bathrooms in NYC | P1 |
| 4 | `/furniture` | italian furniture nyc | Italian Furniture for New York Homes | P1 |
| 5 | `/lighting-design` | italian lighting nyc | Italian Lighting Design in NYC | P1 |
| 6 | `/outdoor` | outdoor furniture nyc | Italian Outdoor Living in New York | P2 |
| 7 | `/office` | home office furniture nyc | Custom Home Office Design in NYC | P2 |

**Per-page requirements:**

| Element | Requirement |
|---|---|
| Helmet SEO | title, meta desc, canonical, robots, OG, Twitter |
| JSON-LD | `LocalBusiness` + `Service` + `Product` (with `AggregateOffer`) + `FAQPage` |
| Hero | Full-bleed image, H1 with keyword, CTA button |
| Images | 6-10 product images, Cloudinary `.avif`, descriptive alt text |
| FAQ | 5-8 category-specific questions |
| Testimonials | 2-3 relevant customer quotes |
| SEO copy | 600-800 words, geo-targeting paragraph |
| CTA count | Minimum 3 per page (hero, mid-page, bottom) |
| Conversion tracking | Google Ads + GA4 on all CTAs |
| Internal links | To related blog posts, other category pages, `/productscollection` |

**Page-specific data needed per landing page:**

| Data | Source |
|---|---|
| Product images (6-10) | Cloudinary — need URLs from D&D's existing product photography |
| Testimonial quotes (2-3) | Client — request category-specific reviews |
| FAQ questions (5-8) | Write based on competitor research + common client questions |
| Brand logos | Existing assets (Aster, Visionnaire, Longhi, Prestige) |
| Video (optional) | Cloudinary — existing showroom/product videos or request new |
| Pricing ranges | Client — for `PriceSpecification` schema |
| Copy (H1, body, SEO) | Write per page based on keyword research |

### 2.2 Geo-Targeted Landing Pages

Replicate the Boca Raton model for remaining high-value markets.

| # | Route | Target Market | H1 | Priority |
|---|---|---|---|---|
| 1 | `/nyc-interior-designer` | Manhattan + general NYC | Luxury Interior Designer in NYC | P0 |
| 2 | `/brooklyn-interior-designer` | Brooklyn (showroom local) | Italian Interior Design in Brooklyn | P0 |
| 3 | `/new-jersey-interior-designer` | NJ metro | Italian Kitchen & Interior Design in New Jersey | P1 |
| 4 | `/miami-interior-designer` | Miami / South FL | Luxury Italian Interiors in Miami | P1 |

**Per-page requirements:**

Same as product category pages, plus:
- `LocalBusiness` JSON-LD with `areaServed` set to the specific city/region
- Local references in copy (neighborhoods, landmarks, lifestyle)
- Google Maps embed centered on the service area (or showroom for Brooklyn)
- City-specific testimonials if available
- Local phone number if applicable

### 2.3 What We Need Before Building

**Assets already available in codebase:**
- Kitchen images: `src/data/kitchenImages.ts` — 18 Art Deco, 22 Modern, 14 Traditional
- Product gallery JSON: `src/data/product-galleries/` — Bath (50), Closet (21), Dining (27), Light (85), Living (38), Modern (51), Office (26), Outdoor (23)
- Brand logos: `src/data/brands/` — Aster, Visionnaire, Longhi, Prestige, Cattelan Italia, Gamma, Vittoria Frigerio, Arketipo
- Existing testimonials: `src/data/testimonials/` — 12 customer reviews
- Video assets: Cloudinary videos already used on Italian Kitchen Cabinets and Boca Raton pages

**Per-page requirements (handled by us in code):**

| Element | Approach |
|---|---|
| Images (6-10) | Pull from existing `product-galleries/` JSON files per category |
| Testimonials (3) | Created per page — conversion-focused, location-specific |
| Pricing schema | Not included — omit `PriceSpecification` from JSON-LD |
| FAQ (5-6) | Written per page based on competitor patterns |
| SEO copy | Condensed, mobile-first — 150-200 words (not 600-800) |

**No external asset collection needed.** All images and brand data exist in the codebase.

### 2.4 Routing & Infrastructure

For each new page:
- Add route to `src/App.tsx` (direct import, not lazy-loaded)
- Add URL to `public/sitemap.xml`
- Add trailing-slash redirect to `public/_redirects`
- Update navigation components (Navbar, Footer)

### 2.5 Build Order & Layout Approach

**Design principles (all pages):**
- **Mobile-first** — all sizing starts at mobile (`text-sm`, `py-12`, `px-5`), scales up with `sm:` / `lg:` breakpoints
- **Condensed content in the middle** — SEO copy block is 150-200 words, not long-form; process steps and features are compact grid layouts
- **Layout first** — each page is a visual layout for review before copy refinement
- **3 CTAs minimum** — hero, mid-page urgency banner, final dark CTA
- **Conversion-oriented** — every section drives toward `openContactForm` or phone call

**First page built: `/kitchens`** → [src/pages/Kitchens.tsx](src/pages/Kitchens.tsx)

Layout structure (10 sections):
1. Hero — full-bleed image, gradient overlay, H1, single CTA (mobile: bottom-aligned, full-width button)
2. Trust Bar — brand logos + 4.9 rating (compact horizontal strip)
3. Style Gallery — tab-driven (Modern / Traditional / Art Deco), 3-image grid
4. Mid-page CTA — dark urgency banner with background image
5. Process + Features — 4-step grid + 6-item checklist + condensed SEO copy
6. Testimonials — 3 cards with quotes, names, NYC locations
7. FAQ — 6 accordion items with FAQPage schema
8. Showroom — address, hours, map embed, directions + phone CTAs
9. Geo-targeting block — NYC/NJ/FL keyword paragraph
10. Final CTA — dark full-width banner

```
Week 2:  Review /kitchens layout → refine → extract reusable patterns
Week 3:  /closets + /bathroom (reuse layout pattern with category data)
Week 4:  /furniture + /lighting-design
Week 5:  /nyc-interior-designer + /brooklyn-interior-designer (geo pages)
Week 6:  /new-jersey-interior-designer + /miami-interior-designer
Week 7:  /outdoor + /office + navigation updates + sitemap
```

### Phase 2 Checklist

- [ ] Extract reusable landing page components to `src/components/landing/`
- [ ] Collect image assets for all landing pages
- [ ] Collect testimonials for all landing pages
- [ ] Get pricing ranges for schema markup
- [ ] Build `/kitchens` landing page
- [ ] Build `/closets` landing page
- [ ] Build `/bathroom` landing page
- [ ] Build `/furniture` landing page
- [ ] Build `/lighting-design` landing page (replace current `/lighting`)
- [ ] Build `/outdoor` landing page
- [ ] Build `/office` landing page
- [ ] Build `/nyc-interior-designer` geo page
- [ ] Build `/brooklyn-interior-designer` geo page
- [ ] Build `/new-jersey-interior-designer` geo page
- [ ] Build `/miami-interior-designer` geo page
- [ ] Add all new routes to `App.tsx`
- [ ] Add all new URLs to `sitemap.xml`
- [ ] Add trailing-slash redirects to `_redirects`
- [ ] Update Navbar with product category navigation
- [ ] Update Footer with service area links
- [ ] Verify Google Ads conversion tracking on all new pages
- [ ] QA: Lighthouse audit on all new pages (target 90+)

---

## Phase 3 — Automated Content Pipeline

**Owner:** Content automation tool (external)
**Priority: HIGH | Effort: MINIMAL (dev side) | Impact: HIGH (over time)**

Blog content will be auto-published via an automated content tool. Our dev responsibilities are limited to ensuring the pipeline works.

### 3.1 Dev Tasks (Our Side)

- [ ] Verify the Netlify CMS + `scripts/add-blog-post.js` pipeline accepts automated submissions
- [ ] Ensure `scripts/generate-posts-json.cjs` runs on build to update the blog index
- [ ] Confirm `BlogPostPage` component handles new posts without code changes
- [ ] Add dynamic sitemap generation for blog posts at build time (new posts auto-added)
- [ ] Ensure internal linking structure exists: new blog posts should link to landing pages, and landing pages should have a "Related Articles" section pulling from blog data

### 3.2 Content Tool Responsibilities (Not Us)

- Keyword research per cluster
- Writing and optimizing 20-30 posts/month
- Auto-publishing via CMS or direct markdown commit
- Content refresh cycles every 2-3 months
- Internal linking within blog posts to landing pages

### 3.3 Blog-to-Landing-Page Connection

Each landing page should dynamically display 2-3 related blog posts in a "Related Articles" card section. This creates a content flywheel:

```
Blog post (auto-published)
  └─ links to → /kitchens (landing page)
                  └─ shows → related blog posts
                              └─ links to → /kitchens (landing page)
```

Implementation: Add a `relatedPosts` section to each landing page that filters `posts.json` by category tag.

---

## Effort Summary

| Phase | Duration | Dev Hours | External | Priority |
|---|---|---|---|---|
| Phase 1 — Technical fixes | Week 1-2 | 8-12h | — | Do first |
| Phase 2 — Landing pages | Week 2-7 | 50-70h | Asset collection from client | Core work |
| Phase 3 — Content pipeline | Week 2-3 | 4-6h (dev setup) | Automated tool | Parallel |
| **Total dev effort** | **~7 weeks** | **62-88h** | | |

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| SPA rendering — crawlers miss meta tags | Medium | High | Evaluate `react-snap` or Netlify prerendering for landing pages |
| Missing assets delay landing page builds | High | Medium | Start asset collection NOW, build pages as assets arrive |
| Automated content quality too low | Medium | Medium | Set quality guidelines, review sample batch before full rollout |
| Keyword cannibalization (blog vs landing) | Medium | Medium | Landing pages target transactional keywords; blog targets informational |
| Landing pages don't convert | Low | High | Follow proven Boca Raton / Italian Kitchen pattern exactly |

---

## SPA Considerations for Landing Pages

The site is a **client-side rendered React SPA**. For conversion landing pages this matters:

1. **Google Ads Quality Score:** Landing pages need fast LCP. Pre-render critical landing pages or ensure Cloudinary images use responsive `srcset` with proper sizing.
2. **Social sharing:** `react-helmet` meta tags won't render for Facebook/Twitter/LinkedIn crawlers. Consider `netlify-plugin-prerender` or `react-snap` to generate static HTML for landing page routes specifically.
3. **Conversion tracking:** Ensure Google Ads conversion events fire correctly on SPA route transitions, not just initial page loads. The existing `openContactForm` event + Make.com webhook pattern handles this well.
4. **Page speed:** Each landing page will have 6-10 images. Use Cloudinary transformations (`f_auto,q_auto,w_800`) and lazy loading for below-fold images.

---

## Immediate Next Steps

**This week:**
1. **Review `/kitchens` layout** — run `npm run dev` and visit `localhost:5173/kitchens`
2. Approve layout structure → then replicate pattern to remaining 10 pages
3. Start Phase 1 technical fixes (metadata, sitemap, headers) in parallel
4. Set up content automation tool for blog post pipeline

**Not blocked — all assets are in the codebase:**
- Cloudinary images for all categories exist in `src/data/product-galleries/`
- Brand logos in `src/data/brands/`
- Testimonials created per page (3 each, location-specific)
- No pricing schema needed

---

*This document should be updated as phases complete and new data becomes available.*
