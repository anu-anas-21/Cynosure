# Cynosure Recycling — Corporate Website

Marketing and information website for **Cynosure Recycling Private Limited**, an
Indian waste-management company founded in 2021 in Meerut, Uttar Pradesh.
The site covers the company's five recycling streams (e-waste, plastic,
battery, tyre, and end-of-life vehicles), data destruction / ITAD services,
EPR compliance support, facility network, certifications, and gallery.

Live deployment: <https://cynosure-recycle.vercel.app>

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, static generation) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config in `globals.css`) |
| Icons | [lucide-react](https://lucide.dev) |
| Font | Roboto via `next/font/google` (self-hosted at build time) |
| Hosting | Vercel (auto-deploys from `main`) |

Every route is statically prerendered at build time — there is no server-side
data fetching and no database. All content lives in one TypeScript file.

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (also runs TypeScript checks)
npm run lint     # ESLint
```

Requires Node.js 20+.

## Project structure

```
cynosure-web/
├── public/
│   └── images/
│       ├── logo-horizontal.jpg       # Header/footer logo
│       ├── hero-panel.png            # Homepage hero visual
│       ├── insight-*.png             # Insights section card images (3)
│       ├── gallery/gal1..30.jpg      # Real Meerut facility photos
│       └── certificates/             # ISO certificate scans (3)
├── src/
│   ├── app/
│   │   ├── page.tsx                  # Homepage
│   │   ├── layout.tsx                # Root layout (Header/Footer, fonts, metadata)
│   │   ├── globals.css               # Theme tokens, buttons, container
│   │   ├── icon.png / apple-icon.png # Favicon (from brand mark)
│   │   ├── services/
│   │   │   ├── page.tsx              # All-services overview
│   │   │   └── [slug]/page.tsx       # Per-service detail (7 pages, SSG)
│   │   ├── facilities/[slug]/page.tsx# Per-facility detail (5 pages, SSG)
│   │   ├── gallery/page.tsx          # Filterable photo gallery + lightbox
│   │   ├── certificates/page.tsx     # ISO 9001 / 14001 / 45001
│   │   ├── sustainability/page.tsx   # Vision, closed-loop process, impact
│   │   ├── about/page.tsx            # Story, differentiators, partnerships
│   │   ├── compliance/page.tsx       # CPCB/SPCB, EPR, data standards
│   │   └── contact/page.tsx          # Contact info, facilities, enquiry form
│   ├── components/                   # Header, Footer, HeroCarousel, etc.
│   └── lib/
│       └── content.ts                # ← ALL site content and data
└── next.config.ts                    # Pins Turbopack root to this directory
```

## Editing content

**`src/lib/content.ts` is the single source of truth.** Text, navigation,
statistics, facility data, service capacities, FAQs, and contact details are
all exported from this file — most copy changes never touch a component.

Key exports:

- `company`, `contact` — names, phone (1800 889 5020), address, hours
- `heroSlides` — the four rotating homepage hero slides
- `wasteStreams` — the five recycling streams, each with `capacity` (display
  string), `capacityValue` (number), process steps, and outputs
- `dataServices`, `eprServices` — the two non-tonnage service lines
- `facilities` — five sites keyed by state (`uttar-pradesh`, `telangana`,
  `tamil-nadu`, `maharashtra`, `karnataka`), each with a `hubCity`, a
  `status` (`operational` / `upcoming`), and a `capacityShare`
- `galleryItems` / `galleryCategories` — the 30 facility photos and filters
- `certifications`, `certificateDocs`, `faqs`, `insights`, `clientJourney`,
  `navigation`

### Facility ↔ service cross-linking

Facility pages (`/facilities/[slug]`) list every service offered at that site;
service pages (`/services/[slug]`) list every facility offering that service.
Per-facility capacity is computed as
`stream.capacityValue × facility.capacityShare`, so the site-level numbers
always sum to the published national totals.

> **Note:** the current split (40% Uttar Pradesh / 30% Telangana /
> 30% Tamil Nadu) is an estimate derived from the national totals, not
> measured per-site data. To correct it, edit `capacityShare` in
> `facilities` — every dependent number updates automatically.

Adding a facility or service = adding one entry to the relevant array;
`generateStaticParams` in each `[slug]/page.tsx` picks it up at build time.

## Design system

Defined in `src/app/globals.css` using Tailwind v4 `@theme` tokens:

- **Brand palette** — `brand-50 … brand-900`, an orange ramp drawn from the
  Cynosure logo (primary `brand-500: #ef5f1a`)
- **Neutrals** — `ink-50 … ink-900`
- **Buttons** — `.btn-primary`, `.btn-outline`, `.btn-outline-light`,
  `.btn-white`: rectangular, uppercase, letter-spaced
- **Layout** — `.container-page` caps content at 84rem with responsive gutters
- **Typography** — Roboto; headings default to `font-light`

## Known placeholders / TODO

- **Contact form** (`ContactForm.tsx`) and **newsletter** (`Newsletter.tsx`)
  are client-side only — no backend or email service is wired up yet.
- **LinkedIn** link in the footer points to `linkedin.com` generically.
- **Facility photos** exist only for the Meerut site; other facility pages
  use icon-based visuals until photography is available.
- Per-facility capacity shares are estimates (see note above).

## Deployment

Pushing to `main` on GitHub triggers an automatic Vercel deployment.
The Vercel project's **Root Directory** must be set to `cynosure-web`
(the Next.js app lives in a subfolder of the repository).
