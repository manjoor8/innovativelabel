# Master AI Agent Prompt --- Innovative Label Solutions Website

## ROLE

You are an expert **UI/UX designer, senior frontend engineer, SEO
architect, content strategist, and B2B manufacturing website
specialist**.

Your task is to modify redesign and build existing website - **production-quality corporate
website** for:

**Innovative Label Solutions Pvt. Ltd.**

The company is a B2B packaging and label manufacturing company based in
Dombivli MIDC, Maharashtra, India.

You have access to:

1.  An attached company profile PDF named `profile.pdf`.
2.  The reference website:
    `https://rujal-x-innovative-label-solutions.vercel.app`

The PDF is the **primary source of truth for company content, products,
machinery, capabilities, customers, suppliers, certificates, photographs
and company statistics**.

The PDF identifies the company as a complete packaging solution provider
and describes manufacturing of shrink sleeves, cartons,
pressure-sensitive/self-adhesive labels, specialty labels and related
products.

Do not invent company facts that are not supported by the source
material.

------------------------------------------------------------------------

# PRIMARY OBJECTIVE

Create a modern, premium, highly credible **B2B manufacturing website**
that positions Innovative Label Solutions as a professional:

-   Label manufacturer
-   Packaging solution provider
-   Specialty label manufacturer
-   Security label manufacturer
-   Flexographic printing company
-   Industrial packaging partner

The website must be:

-   Modern
-   Professional
-   Fast
-   Mobile responsive
-   SEO optimized
-   Conversion oriented
-   Accessible
-   Visually strong
-   Easy to maintain
-   Structured for future expansion

The website should look like a **real established manufacturing
company**, not a generic AI-generated template.

Do **not** make the website look like the PDF. The PDF is the content
source; the website should be a much better digital representation of
the company.

------------------------------------------------------------------------

# IMPORTANT SOURCE RULE

Before writing code:

1.  Carefully inspect all 31 pages of `profile.pdf`.
2.  Extract:
    -   Text
    -   Images
    -   Logos
    -   Product photographs
    -   Factory photographs
    -   Machinery photographs
    -   Team photograph
    -   ISO certificate
    -   Customer logos
    -   Supplier logos
    -   Charts/graphics where useful
3.  Organize extracted assets into meaningful website directories.
4.  Identify which pages/assets belong to:
    -   Company
    -   Products
    -   Industries
    -   Manufacturing
    -   Quality
    -   Customers
    -   Suppliers
    -   Gallery
5.  Do not simply screenshot entire PDF pages and use them as website
    sections.
6.  Prefer extracting/cropping individual original images and rebuilding
    the information as HTML/CSS.
7.  Preserve factual accuracy.

Where the PDF contains marketing claims, use them as source content but
do not manufacture additional claims.

The profile states, among other figures:

-   20+ years of printing-industry experience
-   25,000 sq. ft. manufacturing facility
-   75+ employees
-   150+ customers
-   15+ specialty products
-   10 million labels/day production capacity
-   95% on-time completion
-   15+ trusted vendors

Treat these as source-provided claims and do not independently embellish
them.

------------------------------------------------------------------------

# DESIGN DIRECTION

Create a visual identity inspired by the company's existing branding.

The supplied profile uses:

-   Red
-   Blue
-   White
-   Light pastel supporting colors
-   Strong typography
-   Industrial/packaging imagery

However, improve the design significantly.

Use a refined palette based around:

-   Primary red
-   Primary blue
-   White
-   Charcoal/dark text
-   Light neutral backgrounds
-   Very limited accent colors

Avoid:

-   Excessive gradients
-   Excessive glassmorphism
-   Excessive rounded cards
-   Generic SaaS styling

This is a **manufacturing company website**, not a startup landing page.

The visual language should communicate:

**Precision + Manufacturing + Quality + Trust + Technology + Packaging**

------------------------------------------------------------------------

# TECHNICAL STACK

Unless there is a compelling reason otherwise, use:

-   Next.js
-   TypeScript
-   React
-   Tailwind CSS
-   Modern component architecture
-   Static generation / server rendering where appropriate
-   Optimized images
-   Semantic HTML
-   Accessible components

Use a clean folder structure.

Suggested:

``` text
src/
├── app/
├── components/
├── sections/
├── data/
├── lib/
├── styles/
└── types/

public/
└── assets/
```

Use reusable components rather than duplicating page code.

------------------------------------------------------------------------

# WEBSITE INFORMATION ARCHITECTURE

Build the website around the following structure.

## MAIN NAVIGATION

``` text
Home
About
Products
Industries
Capabilities
Quality
Gallery
Resources
Contact
Request a Quote
```

Use dropdown/mega-menu navigation for Products, Industries and
Capabilities.

Do not expose every page in the main navigation.

------------------------------------------------------------------------

# ROUTES

Implement the following routes.

## HOME

``` text
/
```

## ABOUT

``` text
/about/
/about/company-profile/
/about/vision-mission-values/
/about/infrastructure/
/about/company-growth/
/about/management/
/about/team/
```

## PRODUCTS

``` text
/products/
/products/pressure-sensitive-labels/
/products/self-adhesive-labels/
/products/shrink-sleeves/
/products/cartons/
/products/security-labels/
/products/specialty-labels/
/products/barcode-labels/
/products/thermal-labels/
/products/metallized-labels/
/products/clear-labels/
/products/opaque-labels/
/products/pp-labels/
/products/pet-film-labels/
/products/braille-labels/
/products/dome-labels/
/products/embossed-labels/
/products/foil-stamping-labels/
/products/multi-layer-labels/
/products/hanger-labels/
/products/tamper-proof-labels/
/products/temperature-sensitive-labels/
/products/coin-reactive-labels/
/products/glow-in-the-dark-labels/
/products/transfer-labels/
/products/textured-labels/
/products/laminated-labels/
/products/innovative-cartons/
```

Do not create thin pages with only a title and a paragraph.

Every product page must contain useful, unique content.

If there is insufficient source information for a particular product,
use a structured template and clearly mark missing information for
future content enrichment rather than inventing specifications.

The source profile lists many specialty products including Braille,
Dome, Emboss, Foil Stamping, multi-layer labels, barcode labels, thermal
labels, metallized/clear/opaque/PP/PET film labels, security labels,
tamper-proof labels, temperature-sensitive labels, transfer labels,
specialty finishes, shrink sleeves, IMLs and cartons.

## INDUSTRIES

Create:

``` text
/industries/
/industries/pharmaceuticals/
/industries/cosmetics/
/industries/food-beverages/
/industries/perfumery/
/industries/chemicals/
/industries/petrochemicals/
/industries/agrochemicals/
/industries/wine-liquor/
/industries/consumer-products/
```

The source profile identifies pharmaceuticals, cosmetics, perfumery,
food & beverages, petro/agrochemicals and other markets.

Each industry page should explain:

-   Industry requirements
-   Relevant label types
-   Recommended products from the company's portfolio
-   Quality considerations
-   Packaging challenges
-   Manufacturing capabilities
-   CTA

Do not invent certifications, regulatory approvals, or technical claims
for an industry unless supported by source material.

## CAPABILITIES

Create:

``` text
/capabilities/
/capabilities/flexographic-printing/
/capabilities/label-printing/
/capabilities/roll-label-printing/
/capabilities/sheet-label-printing/
/capabilities/security-printing/
/capabilities/specialty-printing/
/capabilities/quality-inspection/
/capabilities/clean-room-manufacturing/
/capabilities/artwork-plate-die-management/
```

The source profile states that the company operates three flexographic
printing machines:

-   Taiyo STF 340 --- 10 colour
-   Alliance A3 --- 8 colour
-   Mark Andy 2200 --- 8 colour

It also describes a Re Italy defect-detection system and Class 100,000
clean-room manufacturing standards.

Use this information prominently on the capabilities pages.

## QUALITY

Create:

``` text
/quality/
/quality/quality-policy/
/quality/iso-9001-certification/
/quality/quality-inspection/
/quality/quality-control-process/
```

The company profile states that Innovative Label Solutions is ISO
9001:2015 certified.

Use the actual certificate image from the PDF where appropriate,
particularly on the certification page.

Do not modify the certificate or imply certifications that are not
present in the source.

## CUSTOMERS

Create:

``` text
/customers/
/customers/pharmaceuticals/
/customers/cosmetics/
/customers/food-beverages/
/customers/chemicals/
/customers/perfumery/
/customers/wine-liquor/
```

The PDF contains industry-specific customer logo collections.

Present these as:

**Selected Customers / Customers Served / Industry Experience**

rather than implying endorsement unless explicitly supported.

Be careful with third-party trademarks and logos. Use them only if the
business has permission to display them.

## SUPPLIERS

Create:

``` text
/suppliers/
/suppliers/raw-material-suppliers/
/suppliers/inks-varnishes-suppliers/
```

The profile identifies suppliers for printing raw materials and
inks/varnishes.

Create clean supplier logo sections.

Do not create fake supplier descriptions.

## GALLERY

Create:

``` text
/gallery/
/gallery/factory/
/gallery/machinery/
/gallery/production/
/gallery/products/
/gallery/labels/
/gallery/team/
```

Use the actual images extracted from the PDF.

The PDF contains factory/production photographs, machinery images,
finished product visuals, product samples and a team photograph.

Implement:

-   Lightbox
-   Category filtering
-   Responsive image grid
-   Image lazy loading
-   Proper alt text
-   Captions where useful

## RESOURCES

Create:

``` text
/resources/
/resources/blog/
/resources/label-guide/
/resources/industry-insights/
/resources/faqs/
/resources/case-studies/
```

Initially create a strong resources structure even if only a few
articles are available.

Prepare the architecture for future SEO content.

Suggested initial articles:

``` text
What Are Pressure Sensitive Labels?

Pressure Sensitive vs Self Adhesive Labels

What Are Shrink Sleeve Labels?

How to Choose the Right Label Material

Pharmaceutical Label Printing: Key Considerations

Cosmetic Packaging Labels: Materials and Finishes

Security Labels and Anti-Counterfeit Packaging

Tamper Evident Labels: Applications and Benefits

PET vs PP Labels: Which Material Should You Choose?

Clear Labels vs Opaque Labels

What Are Metallized Labels?

Roll Labels vs Sheet Labels

How to Choose Labels for Automatic Labeling Machines

How Premium Label Finishes Improve Shelf Appeal
```

Do not make unsupported technical claims.

## CONTACT

Create:

``` text
/contact/
/request-a-quote/
```

Include:

-   Contact information
-   Factory location
-   Map
-   Sales enquiry
-   Quote form
-   Email
-   Phone
-   WhatsApp CTA if official number is supplied
-   Business enquiry form

Do not invent telephone numbers or email addresses.

If information is missing, create a development placeholder such as:

``` text
[OFFICIAL PHONE NUMBER REQUIRED]
```

rather than hallucinating it.

------------------------------------------------------------------------

# HOMEPAGE STRUCTURE

Create an extremely polished homepage.

## 1. Hero

Use a strong manufacturing/product image.

H1:

**Complete Packaging & Label Solutions**

Supporting message:

**Pressure-sensitive labels, self-adhesive labels, shrink sleeves,
cartons and specialty packaging solutions for diverse industries.**

Primary CTA:

**Request a Quote**

Secondary CTA:

**Explore Products**

Optional tertiary CTA:

**View Capabilities**

Do not overload the hero.

## 2. Trust / Statistics

Display:

``` text
20+ Years
Industry Experience

25,000 sq. ft.
Manufacturing Facility

75+
Employees

150+
Customers

10M
Labels/Day

15+
Specialty Products
```

Use animated count-up only when it does not negatively affect
accessibility or performance.

## 3. Product Categories

Create attractive product cards:

``` text
Pressure Sensitive Labels
Self Adhesive Labels
Shrink Sleeves
Security Labels
Specialty Labels
Cartons
```

Each card links to its main product page.

## 4. Why Innovative Label Solutions

Use 4--6 benefits:

-   Experienced printing professionals
-   Advanced flexographic printing
-   Specialty label capabilities
-   Quality-focused manufacturing
-   High production capacity
-   Customer-focused delivery

Only use claims supported by the company profile.

## 5. Manufacturing Capabilities

Create a visual manufacturing section showing:

-   Flexographic machines
-   Production
-   Quality inspection
-   Clean-room environment

Highlight the company's machinery and production infrastructure.

CTA:

**Explore Our Manufacturing Capabilities**

## 6. Industries

Use visual cards for:

``` text
Pharmaceuticals
Cosmetics
Food & Beverages
Perfumery
Chemicals
Petrochemicals
Agrochemicals
Wine & Liquor
```

CTA:

**Explore Industries**

## 7. Specialty Labels

Create a visually impressive horizontal product showcase.

Products:

``` text
Braille
Dome
Embossed
Foil Stamping
Security
Tamper Proof
Temperature Sensitive
Glow in the Dark
Multi Layer
Metallized
Textured
```

## 8. Quality

Create a trust-focused section:

**Quality Built Into Every Label**

Show:

-   ISO 9001:2015
-   Quality inspection
-   Defect detection
-   Controlled manufacturing
-   Clean-room standards

Use the actual certificate image.

## 9. Customer Industries

Instead of dumping many logos onto the homepage, show:

``` text
Pharmaceuticals
Cosmetics
Food & Beverage
Chemicals
Perfumery
Wine & Liquor
```

Then optionally display a small rotating selection of logos.

CTA:

**View Our Industry Experience**

## 10. Factory Gallery

Show 6--8 of the best images.

CTA:

**View Factory Gallery**

## 11. Final CTA

Use a large conversion section:

**Looking for a Reliable Label & Packaging Partner?**

Supporting text:

**Tell us about your label or packaging requirement and our team can
help you identify the right solution.**

Button:

**Request a Quote**

## 12. Footer

Create a professional multi-column footer.

### Company

``` text
About Us
Infrastructure
Vision & Mission
Quality
Team
```

### Products

``` text
Pressure Sensitive Labels
Self Adhesive Labels
Shrink Sleeves
Security Labels
Specialty Labels
Cartons
```

### Industries

``` text
Pharmaceuticals
Cosmetics
Food & Beverages
Chemicals
Perfumery
Wine & Liquor
```

### Resources

``` text
Blog
Label Guide
FAQs
Case Studies
Gallery
```

### Contact

Use only official company contact information.

Also include:

-   ISO certification reference
-   Copyright
-   Privacy Policy
-   Terms
-   Sitemap

------------------------------------------------------------------------

# PRODUCT PAGE TEMPLATE

Every product page should use a standardized but flexible structure.

Example:

``` text
Breadcrumb

H1: [Product Name]

Hero image

Short product introduction

Applications

Product advantages

Material / substrate information
ONLY IF SUPPORTED

Available finishes
ONLY IF SUPPORTED

Printing capability

Suitable industries

Quality considerations

Related products

Frequently Asked Questions

Request a Quote CTA
```

Example URL:

``` text
/products/security-labels/
```

Potential metadata:

``` text
Title:
Security Label Manufacturer in India | Innovative Label Solutions

Description:
Explore security label solutions from Innovative Label Solutions for applications requiring specialized printing and anti-counterfeit features.
```

Do not automatically copy the same meta description across every page.

------------------------------------------------------------------------

# INDUSTRY PAGE TEMPLATE

Structure:

``` text
Breadcrumb

H1: [Industry] Label Solutions

Hero image

Industry introduction

Packaging/label requirements

Relevant products

Relevant capabilities

Quality considerations

Applications

Selected customer/industry experience

FAQ

Request a Quote
```

------------------------------------------------------------------------

# SEO REQUIREMENTS

SEO is a major objective.

## Technical SEO

Implement:

-   Semantic HTML
-   One primary H1 per page
-   Correct H2/H3 hierarchy
-   Canonical URLs
-   XML sitemap
-   robots.txt
-   Breadcrumbs
-   OpenGraph metadata
-   Twitter/X metadata
-   Structured data
-   Clean URLs
-   301 redirect support
-   Custom 404 page
-   Image optimization
-   Lazy loading
-   Responsive images
-   WebP/AVIF
-   Proper caching
-   Good Core Web Vitals

## STRUCTURED DATA

Implement appropriate Schema.org JSON-LD.

Potential schemas:

``` text
Organization
LocalBusiness
BreadcrumbList
Product
FAQPage
Article
ImageObject
```

Do not add schema types that are not applicable.

Populate Organization/LocalBusiness data only with verified company
information.

------------------------------------------------------------------------

# SEO CONTENT STRATEGY

Build content around three keyword layers.

## Layer 1 --- Products

``` text
label manufacturer
pressure sensitive label manufacturer
self adhesive label manufacturer
shrink sleeve manufacturer
security label manufacturer
specialty label manufacturer
printed carton manufacturer
barcode label manufacturer
thermal label manufacturer
```

## Layer 2 --- Industries

``` text
pharmaceutical label manufacturer
cosmetic label manufacturer
food beverage label manufacturer
chemical label manufacturer
perfumery label manufacturer
wine label manufacturer
```

## Layer 3 --- Geography

Potential terms:

``` text
label manufacturer in Mumbai
label manufacturer in Dombivli
label manufacturer in Thane
label manufacturer in Maharashtra
label printing company Mumbai
```

Do not keyword-stuff.

------------------------------------------------------------------------

# INTERNAL LINKING

Implement deliberate internal linking.

Example:

``` text
Homepage
   ↓
Products
   ↓
Pressure Sensitive Labels
   ↓
Pharmaceutical Industry
   ↓
Pharmaceutical Label Solutions
   ↓
Request Quote
```

Product pages should link to relevant industries.

Industry pages should link to relevant products.

Blog articles should link to product and industry pages.

Every important page should be reachable within 2--4 clicks from the
homepage.

------------------------------------------------------------------------

# BREADCRUMBS

Implement breadcrumbs automatically.

Example:

``` text
Home
>
Products
>
Security Labels
```

and:

``` text
Home
>
Industries
>
Pharmaceuticals
```

------------------------------------------------------------------------

# IMAGE SEO

Every meaningful image must have:

-   Descriptive filename
-   Meaningful alt text
-   Optional caption
-   Width/height
-   Responsive sizing

Examples:

``` text
innovative-label-solutions-flexographic-printing-machine.jpg

innovative-label-solutions-pharmaceutical-labels.jpg

innovative-label-solutions-dombivli-manufacturing-facility.jpg
```

Avoid generic names such as:

``` text
IMG001.jpg
image1.jpg
page25.jpg
```

------------------------------------------------------------------------

# PERFORMANCE

Target:

-   Excellent Lighthouse performance
-   Minimal JavaScript
-   Server-render content where appropriate
-   Proper image sizing
-   No unnecessarily large hero images
-   Lazy loading below the fold
-   Avoid huge animation libraries
-   Avoid autoplay video unless essential

Animations should be subtle:

-   Fade
-   Slide
-   Scale
-   Count-up

Respect:

``` text
prefers-reduced-motion
```

------------------------------------------------------------------------

# ACCESSIBILITY

Implement WCAG-conscious design.

Requirements:

-   Keyboard navigation
-   Visible focus indicators
-   Appropriate contrast
-   Alt text
-   ARIA labels where necessary
-   Semantic buttons
-   Accessible forms
-   Accessible dropdowns
-   Accessible gallery/lightbox
-   Reduced motion support

------------------------------------------------------------------------

# RESPONSIVE DESIGN

Design and test for:

``` text
Mobile
Small tablet
Tablet
Laptop
Desktop
Large desktop
```

The mobile version should not simply be a collapsed desktop layout.

Create a purpose-built mobile navigation.

Use a sticky mobile CTA such as:

``` text
Request Quote
```

but do not allow it to obstruct content.

------------------------------------------------------------------------

# UI COMPONENTS

Build reusable components such as:

``` text
Header
MegaMenu
MobileMenu
Hero
SectionHeading
StatsCounter
ProductCard
IndustryCard
CapabilityCard
CustomerLogoGrid
SupplierLogoGrid
CertificateCard
GalleryGrid
Lightbox
Breadcrumb
CTASection
QuoteForm
ContactForm
FAQAccordion
BlogCard
Footer
```

------------------------------------------------------------------------

# DATA-DRIVEN ARCHITECTURE

Do not hard-code repeated product and industry pages.

Create data structures such as:

``` text
products.ts
industries.ts
capabilities.ts
customers.ts
suppliers.ts
gallery.ts
blog.ts
```

Example:

``` ts
{
  slug: "pressure-sensitive-labels",
  name: "Pressure Sensitive Labels",
  category: "Labels",
  description: "...",
  heroImage: "...",
  industries: [...],
  relatedProducts: [...]
}
```

Then generate routes from the data.

This makes the website easy to expand.

------------------------------------------------------------------------

# CONTENT WRITING RULES

Rewrite PDF content into polished web copy.

Do not blindly copy awkward PDF wording.

However:

**Do not change the factual meaning.**

Correct grammar and improve readability.

Do not invent:

-   Certifications
-   Production technology
-   Customer relationships
-   Export countries
-   Regulatory approvals
-   Product specifications
-   Machine capabilities
-   Awards
-   Revenue
-   Employee numbers

unless explicitly supported by the source.

When information is missing, use:

``` text
Content to be confirmed by company
```

during development.

------------------------------------------------------------------------

# CUSTOMER LOGOS

The profile contains numerous customer logos.

Organize them according to the source categories.

Examples include:

-   Food & beverages
-   Chemicals
-   Perfumery
-   Cosmetics
-   Pharmaceuticals
-   Wine & liquor

Do not infer that a company is a current customer merely because its
logo appears in the profile.

Use wording such as:

**Selected Customers**

or

**Companies Served**

depending on the company's confirmation.

------------------------------------------------------------------------

# SUPPLIER LOGOS

The source profile contains supplier logos for printing raw materials
and inks/varnishes.

Create clean supplier logo sections.

Do not create fake supplier descriptions.

------------------------------------------------------------------------

# COMPANY INFORMATION

Use the following source information where appropriate:

**Company**

Innovative Label Solutions Pvt. Ltd.

**Positioning**

Complete Packaging Solution Providers

**Certification**

ISO 9001:2015

**Location**

Dombivli MIDC, Mumbai Metropolitan Region / Maharashtra

**Facility**

25,000 sq. ft.

**Experience**

20+ years of printing-industry experience

**Employees**

75+

**Customers**

150+

**Daily production**

10 million labels

**Specialty products**

15+

The source profile also states that the company was founded in 2015 and
reports annual growth rates of 18--20%.

It also states a domestic/international revenue split of 82% / 18%.

Use these statistics only where they make commercial sense and do not
overwhelm the design.

------------------------------------------------------------------------

# VISION / MISSION / VALUES

Use the source material from the company profile.

The stated vision is to become a world-class company with a dominant
presence in the Indian subcontinent and global reach.

Mission themes include:

-   Quality
-   Competitive pricing
-   Efficiency
-   Short lead times
-   Fast product development
-   Customer satisfaction

Values include:

-   Customer satisfaction
-   First-time-right production
-   Employee development
-   Honest/open/two-way communication

The wording should be refined for web presentation while preserving
meaning.

------------------------------------------------------------------------

# QUALITY POLICY

Create a dedicated quality policy page based on the source.

The profile emphasizes:

-   Customer requirements
-   High-quality labels
-   Short lead time
-   Cost effectiveness
-   Continuous improvement
-   Customer value
-   Effective response

Do not add unrelated quality frameworks.

------------------------------------------------------------------------

# GALLERY IMPLEMENTATION

Create an attractive professional gallery.

Categories:

``` text
All
Factory
Machinery
Production
Products
Labels
Team
```

Features:

-   Masonry or responsive grid
-   Lightbox
-   Keyboard support
-   Next/previous
-   Lazy loading
-   Captions
-   SEO-friendly image URLs

Use the strongest images as featured images.

------------------------------------------------------------------------

# CONTACT / QUOTE UX

The quote form should feel like a B2B enquiry system, not a generic
contact form.

Fields:

``` text
Full Name
Company Name
Business Email
Phone
Industry
Product Required
Label Type
Approximate Quantity
Roll / Sheet
Label Dimensions
Material
Finishing
Artwork Available
Additional Requirements
Upload Artwork
```

Validate everything client-side and server-side.

Do not expose sensitive uploaded files publicly.

Display useful success/error states.

------------------------------------------------------------------------

# BLOG CMS ARCHITECTURE

The initial implementation can use static MDX/JSON content if a CMS is
unnecessary.

Design the architecture so that a CMS such as:

-   Sanity
-   Strapi
-   Contentful
-   WordPress

could be introduced later without restructuring the website.

------------------------------------------------------------------------

# LOCATION / LOCAL SEO

The company is located in Dombivli MIDC.

Add location context naturally throughout:

-   Contact
-   About
-   Footer
-   LocalBusiness schema
-   Factory page
-   Relevant metadata

Potential SEO targeting:

``` text
Label Manufacturer Dombivli
Label Manufacturer Mumbai
Label Manufacturer Thane
Label Printing Company Maharashtra
```

Do not keyword-stuff.

------------------------------------------------------------------------

# SECURITY

Implement:

-   Secure contact forms
-   Server-side validation
-   Upload restrictions
-   File type validation
-   File size limits
-   CSRF protection where applicable
-   No secrets in frontend code
-   Environment variables
-   Secure headers

------------------------------------------------------------------------

# ANALYTICS

Prepare the application for:

-   Google Analytics 4
-   Google Search Console
-   Conversion tracking
-   Quote form tracking
-   Phone click tracking
-   WhatsApp click tracking

Do not hard-code real analytics IDs.

Use environment variables.

------------------------------------------------------------------------

# SITEMAP

Generate the sitemap automatically from all public routes.

Prioritize:

``` text
/
 /products/
 /industries/
 /capabilities/
 /quality/
 /about/
```

and their important child pages.

Do not include:

-   Admin
-   API endpoints
-   Temporary pages
-   Preview pages

------------------------------------------------------------------------

# ROBOTS

Create appropriate `robots.txt`.

Allow search engines to crawl public content.

Block:

``` text
/api/
/admin
/preview
/internal routes
```

where appropriate.

------------------------------------------------------------------------

# 404 PAGE

Create a branded 404 page.

Example:

**Looks like this label got misplaced.**

Then provide:

``` text
Back to Home
Explore Products
Request a Quote
```

Use a subtle label/packaging visual.

------------------------------------------------------------------------

# DESIGN QUALITY BAR

The website must NOT look like:

-   Generic Bootstrap template
-   Generic AI-generated site
-   Generic SaaS dashboard
-   Ecommerce website
-   WordPress default theme
-   PDF converted to HTML

It should feel like a serious **industrial B2B brand**.

Use:

-   Large typography
-   Strong imagery
-   Structured whitespace
-   High-quality cards
-   Subtle shadows
-   Clear CTAs
-   Strong visual hierarchy
-   Professional iconography
-   Consistent spacing
-   Premium micro-interactions

------------------------------------------------------------------------

# REFERENCE WEBSITE

Inspect:

`https://rujal-x-innovative-label-solutions.vercel.app`

Use it as a reference for:

-   Existing branding
-   Existing visual ideas
-   Possible content structure
-   Existing navigation
-   Product presentation
-   Existing company information

But do not blindly duplicate the reference site.

Improve it.

The new site should be substantially more polished and SEO-friendly.

------------------------------------------------------------------------

# DEVELOPMENT PROCESS

Follow this order.

## PHASE 1 --- SOURCE ANALYSIS

Before implementation:

1.  Inspect the complete PDF.
2.  Identify all content.
3.  Identify all images.
4.  Categorize images.
5.  Create a content inventory.
6.  Create an asset inventory.
7.  Identify missing information.
8.  Produce the proposed sitemap internally.

## PHASE 2 --- DESIGN SYSTEM

Create:

-   Color palette
-   Typography
-   Spacing
-   Buttons
-   Cards
-   Navigation
-   Icons
-   Form styles
-   Responsive rules
-   Animation guidelines

## PHASE 3 --- CORE COMPONENTS

Build:

-   Header
-   Footer
-   Breadcrumbs
-   Cards
-   Product cards
-   Industry cards
-   Gallery
-   CTA
-   Forms

## PHASE 4 --- HOMEPAGE

Build the complete homepage.

## PHASE 5 --- CORE PAGES

Build:

-   About
-   Products
-   Industries
-   Capabilities
-   Quality
-   Gallery
-   Contact

## PHASE 6 --- SEO LANDING PAGES

Build individual product and industry pages.

## PHASE 7 --- RESOURCES

Build:

-   Blog
-   FAQs
-   Guides
-   Case-study structure

## PHASE 8 --- FINAL OPTIMIZATION

Test:

-   Mobile
-   Desktop
-   Accessibility
-   SEO
-   Lighthouse
-   Broken links
-   Image performance
-   Forms
-   Metadata
-   Sitemap
-   robots.txt
-   Structured data

------------------------------------------------------------------------

# FINAL DELIVERABLE

When finished, provide:

1.  Complete source code.
2.  All extracted/optimized images.
3.  All routes/pages.
4.  Reusable components.
5.  SEO metadata.
6.  Sitemap.
7.  robots.txt.
8.  Structured data.
9.  Responsive design.
10. Contact/quote forms.
11. README.
12. Environment-variable documentation.
13. Asset inventory.
14. Content inventory.
15. List of information requiring company confirmation.

------------------------------------------------------------------------

# IMPORTANT FINAL REQUIREMENT

Do not stop after creating the homepage.

The objective is a **complete corporate website** with a deep SEO-ready
architecture.

Prioritize actual useful content over artificially increasing page
count.

Where there is enough source material, create dedicated product and
industry pages.

Where source information is insufficient, create the page structure but
clearly flag content that needs company confirmation instead of
hallucinating it.

Use the attached `profile.pdf` extensively for:

-   Company story
-   Product portfolio
-   Machinery
-   Capabilities
-   Certifications
-   Customers
-   Suppliers
-   Team
-   Factory
-   Images
-   Statistics
-   Vision
-   Mission
-   Values
-   Quality policy

The final result should look like a **premium Indian B2B label and
packaging manufacturer's website capable of competing for organic search
visibility and generating genuine B2B enquiries**.

Before declaring the project complete, perform a full route-by-route
audit and ensure every public page has:

-   Unique title
-   Unique meta description
-   H1
-   Meaningful content
-   Internal links
-   Relevant images
-   CTA
-   Responsive layout
-   Proper canonical URL
-   Appropriate structured data where relevant
-   No placeholder content unless explicitly flagged as requiring
    company confirmation
