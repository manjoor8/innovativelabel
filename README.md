# Innovative Label Solutions - B2B Website Redesign

A production-quality B2B corporate website for **Innovative Label Solutions Pvt. Ltd.** (Dombivli MIDC, Maharashtra, India) rebuilt using Next.js App Router, TypeScript, React, and Tailwind CSS.

## Technical Stack & Features
- **Core Framework**: Next.js (App Router)
- **Programming Language**: TypeScript
- **Styling**: Tailwind CSS v4 (design token system mapping brand colors)
- **Build Mode**: Static Site Generation (SSG) via `generateStaticParams()` pre-rendering 85 distinct B2B landing pages at build time.
- **Components**: Reusable, modular React components (mega-menus, interactive gallery lightbox, IntersectionObserver count-up stats, valid B2B quote sheets).
- **SEO & Compliance**: Dynamic sitemap (`sitemap.xml`), crawler rules (`robots.txt`), LocalBusiness schema JSON-LD, and meta tags customized per page.

---

## Scripts & Operations

To run the development server locally:
```bash
npm run dev
```

To verify type safety and build optimized static assets:
```bash
npm run build
```

To spin up the production server locally:
```bash
npm run start
```

---

## Environment Variables Configuration
Create a `.env.local` file at the root to customize third-party service tracking parameters:
```env
# Google Analytics 4 Tracking ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# WhatsApp Business API Target Link Number
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

---

## Content & Asset Inventory

### 1. Visual Assets (extracted from `profile.pdf`)
All assets are saved under `public/assets/images/`:
- **Main Brand Logo**: `logo.jpg` (1:1 square, Page 1)
- **ISO 9001 Certificate**: `quality/iso-certificate.jpg` (Page 11)
- **Workforce Photo**: `team/team-group.jpg` (Page 30)
- **Machinery Headers**: `machinery-hero.jpg` (Page 3) & `facility-hero.jpg` (Page 4)
- **Media Gallery (10 items)**: `gallery/factory-1.jpg` to `gallery/label-sample-2.jpg` (Pages 25-29)
- **Supplier Logos**: Organized under `suppliers/raw-materials/` (4 logos) and `suppliers/inks/` (4 logos) (Pages 14-15)
- **Customer Logos served**: Organized by industry folders under `customers/` (Pages 16-23)

### 2. Route Inventory (85 static pre-rendered routes)
- **Home**: `/` (LocalBusiness structured data, stats counter, categories, factory gallery snippet)
- **About**: `/about/company-profile`, `/about/vision-mission-values`, `/about/infrastructure`, `/about/company-growth`, `/about/management`, `/about/team`
- **Products**: `/products/` and 27 product detail pages under `/products/[slug]`
- **Industries**: `/industries/` and 6 sector landing pages under `/industries/[slug]`
- **Capabilities**: `/capabilities/` and 9 capability landing pages under `/capabilities/[slug]`
- **Quality**: `/quality/` and 4 quality subpages under `/quality/[slug]`
- **Resources**: `/resources/`, `/resources/blog/` (14 articles), `/resources/label-guide`, `/resources/faqs`, `/resources/case-studies`
- **Gallery**: `/gallery` and category filters
- **Contact & Quote**: `/contact`, `/request-a-quote`

---

## Content Awaiting Company Confirmation
Certain operational parameters are populated with development placeholders and require verified details before going live:
1. **Telephone & Mobile**: Replace `[OFFICIAL PHONE NUMBER REQUIRED]` on header, footer, contact page, and schema scripts with the company's official business phone number.
2. **Postal Code**: Verify Dombivli MIDC office address postal code (schema script).
3. **Minimum Order Quantities**: MOQs per label variant are set to a descriptive guide template; exact minimum quantities should be finalized.
4. **Lead Times**: Standard production lead times are set to template statements.
5. **SMTP / Email Backend**: Set up SMTP configurations in Next.js Server Actions to email specifications submitted on the quote form.
