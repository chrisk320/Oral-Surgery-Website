# OC Implant Oral Surgery

Marketing website for **OC Implant Oral Surgery** — the practice of Dr. Jone Kim, DDS, MS, a board-certified oral and maxillofacial surgeon in Brea, CA.

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router) + **React 19** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)** (CSS-first — no `tailwind.config.ts`)
- **[shadcn/ui](https://ui.shadcn.com/)** primitives + **[Framer Motion](https://www.framer.com/motion/)**
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** for forms
- **[Resend](https://resend.com/)** for contact-form email delivery
- **[next-sitemap](https://github.com/iamvishnusankar/next-sitemap)** for `sitemap.xml` / `robots.txt`

## Getting started

Node is managed via [nvm](https://github.com/nvm-sh/nvm). This project uses Node `v22.17.0`:

```bash
export PATH="$HOME/.nvm/versions/node/v22.17.0/bin:$PATH"
npm install
```

Create a `.env.local` with the Resend credentials used by the contact form:

```bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM="OC Implant <noreply@yourdomain.com>"
RESEND_TO=front-desk@yourdomain.com
```

Then run the dev server:

```bash
npm run dev          # start dev server at http://localhost:3000
npm run build        # production build (runs next-sitemap via postbuild)
npm run start        # serve the production build
npm run lint         # eslint
```

There are no tests configured in this project.

## Project structure

```
src/
├── app/                      # App Router pages
│   ├── page.tsx              # Homepage
│   ├── about/                # Dr. Kim bio, credentials, philosophy
│   ├── contact/              # Contact form + map + hours
│   ├── gallery/              # Before/after case gallery
│   ├── patient-resources/    # Forms, pre/post-op instructions, FAQ, insurance
│   ├── services/             # Overview + 6 service sub-pages
│   │   ├── anesthesia/
│   │   ├── dental-implants/
│   │   ├── facial-injury/
│   │   ├── oral-cancer/
│   │   ├── tmj/
│   │   └── wisdom-teeth/
│   └── api/contact/          # Resend email route handler
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── home/                 # Homepage sections
│   ├── shared/               # ServicePageTemplate, BeforeAfterSlider, FAQAccordion, SchemaMarkup
│   ├── forms/                # ContactForm
│   └── ui/                   # shadcn/ui primitives
└── lib/
    └── services.ts           # Single source of truth for all service content
```

### Content lives in one place

All service content (descriptions, candidacy, steps, FAQs, recovery info, related services) lives in
[`src/lib/services.ts`](src/lib/services.ts). Each service sub-page is a thin server component that pulls
data via `getServiceBySlug()` / `getRelatedServices()` and renders it through the shared
[`ServicePageTemplate`](src/components/shared/ServicePageTemplate.tsx). **To add or edit a service, edit
`services.ts` only.**

### Styling

Tailwind v4 is CSS-first. Theme tokens (brand palette + shadcn semantic variables) are defined in
[`src/app/globals.css`](src/app/globals.css) under `:root`:

| Token      | Hex       | Usage                     |
| ---------- | --------- | ------------------------- |
| Navy       | `#1B3A5C` | Headings, primary actions |
| Teal       | `#2A9D8F` | Accents, CTAs             |
| Background | `#F8FAFC` | Page background           |
| Text       | `#334155` | Body copy                 |

### SEO

[`SchemaMarkup`](src/components/shared/SchemaMarkup.tsx) injects a JSON-LD `@graph` (`WebSite`,
`MedicalBusiness`, `Physician`) from `layout.tsx`. `next-sitemap` generates `public/sitemap.xml` and
`public/robots.txt` on every build (see [`next-sitemap.config.js`](next-sitemap.config.js)).

## Pre-launch checklist

- [ ] Replace image placeholders with real photos, then migrate to `next/image`
- [ ] Confirm street address in `SchemaMarkup.tsx` and the Footer Google Maps embed
- [ ] Set Resend env vars (`RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO`) in the deploy environment
- [ ] Collect patient consent documentation for before/after gallery images

See [`CLAUDE.md`](CLAUDE.md) for deeper architecture notes.
