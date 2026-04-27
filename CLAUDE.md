# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Node is managed via nvm. Always prefix npm commands with the PATH export:

```bash
export PATH="$HOME/.nvm/versions/node/v22.17.0/bin:$PATH"
```

```bash
# Development server
npm run dev

# Production build (also runs next-sitemap via postbuild)
npm run build

# Lint
npm run lint
```

There are no tests configured in this project.

## Architecture

**Stack**: Next.js 16.1.6 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, React Hook Form + Zod.

### Data layer

All service content lives in a single file: [src/lib/services.ts](src/lib/services.ts). It exports a `SERVICES` array and two helpers:

- `getServiceBySlug(slug)` — returns a single `Service`
- `getRelatedServices(service)` — resolves `relatedSlugs` to full `Service` objects

Adding or editing service content means editing this file only.

### Service pages pattern

Each of the 6 service sub-pages ([src/app/services/](src/app/services/)) is a thin server component that pulls data from `services.ts` and passes it to [`ServicePageTemplate`](src/components/shared/ServicePageTemplate.tsx). The template handles the full page layout: hero, two-column body (main content + sticky sidebar CTA on desktop), FAQ accordion, related services, and CTA banner. To add a new service page, add a `Service` entry to `services.ts` and create a new sub-page directory following the same thin-file pattern.

### Styling

Tailwind v4 is CSS-first — there is no `tailwind.config.ts`. All theme tokens (brand colors, shadcn semantic variables) are defined in [`src/app/globals.css`](src/app/globals.css) under `:root`. The brand palette:

- Navy `#1B3A5C` → `oklch(0.28 0.075 248)` — headings, primary actions
- Teal `#2A9D8F` → `oklch(0.60 0.10 181)` — accents, CTAs
- Background `#F8FAFC` — page background
- Text `#334155` — body copy

Brand colors are applied via hardcoded hex values in Tailwind classes (e.g. `text-[#1B3A5C]`) and via shadcn semantic tokens (`text-primary`, `bg-accent`). Both approaches are used throughout — stay consistent with whichever is already used in a given component.

### Component organization

- `src/components/layout/` — `Navbar` (client, sticky, Services dropdown + mobile hamburger) and `Footer`
- `src/components/home/` — homepage sections, each independently importable
- `src/components/shared/` — reusable across pages: `ServicePageTemplate`, `ServiceSidebarCTA`, `BeforeAfterSlider` (Framer Motion drag slider using `useMotionValue` + `clipPath`), `FAQAccordion`, `SchemaMarkup` (JSON-LD `@graph`)
- `src/components/forms/` — `ContactForm` (React Hook Form + Zod; currently simulates submission with `console.log`)
- `src/components/ui/` — shadcn/ui primitives; add new ones via `npx shadcn add <component>`

### SEO / structured data

[`SchemaMarkup`](src/components/shared/SchemaMarkup.tsx) is a server component rendered in `layout.tsx` that injects a JSON-LD `@graph` with `WebSite`, `MedicalBusiness` (Dentist), and `Physician` entities. `next-sitemap` auto-generates `public/sitemap.xml` and `public/robots.txt` via the `postbuild` script using [`next-sitemap.config.js`](next-sitemap.config.js) (must be `.js`, not `.ts`).

## Pre-launch TODOs

- **Contact form**: wire `ContactForm.tsx` `onSubmit` to Resend or Formspree (currently `console.log` only)
- **Street address**: update in `SchemaMarkup.tsx` and the Google Maps embed in `Footer.tsx`
- **Images**: all image placeholders need replacing with real photos; then migrate to `next/image` for optimization
- **Gallery consent**: before/after images require patient consent documentation
