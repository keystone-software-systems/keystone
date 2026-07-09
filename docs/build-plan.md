# Keystone Systems — Landing Page Build Plan

## Stack Decisions

- **Framework:** Next.js 15 App Router (static generation, SSG)
- **Styling:** Tailwind CSS v4 with brand palette as CSS variables
- **Font:** Inter via `next/font/google`
- **Contact form:** Resend (single API route, no external form service)
- **Monorepo:** npm workspaces — `apps/web` for the Next.js app
- **Deployment:** Vercel (`vercel.json` at repo root pointing to `apps/web`)

---

## Directory Structure

```
keystone/
├── apps/
│   └── web/
│       ├── app/
│       │   ├── layout.tsx                        # Root layout, nav, footer, font
│       │   ├── page.tsx                          # Homepage
│       │   ├── about/page.tsx
│       │   ├── contact/page.tsx
│       │   ├── solutions/
│       │   │   ├── [slug]/page.tsx               # Template-driven solutions pages
│       │   │   └── content.ts                    # All 6 services defined here
│       │   ├── api/contact/route.ts              # Resend handler
│       │   ├── sitemap.ts                        # Auto-generated sitemap.xml
│       │   └── robots.ts                         # robots.txt
│       ├── components/
│       │   ├── nav.tsx                           # Nav with Solutions dropdown
│       │   ├── footer.tsx
│       │   ├── solution-card.tsx
│       │   └── contact-form.tsx
│       └── lib/solutions.ts                      # Shared solution data types
├── branding/
├── docs/
├── package.json                                  # Workspace root
└── vercel.json
```

---

## Color Palette (Tailwind)

| Token | Hex | Usage |
|---|---|---|
| `blueprint-navy` | `#14324D` | Primary — nav, headings, icon |
| `technical-blue` | `#3E7CB1` | Accent — links, highlights, "SYSTEMS" wordmark |
| `slate` | `#8C97A6` | Body text, secondary UI |
| `off-white` | `#F5F7FA` | Page background |

---

## Pages

| Route | Content |
|---|---|
| `/` | Hero, How We Work (3 steps), Solutions grid, Founder credibility, CTA |
| `/solutions/[slug]` | Headline, description, "Who this is for", "What you get", CTA |
| `/about` | Founder background, firm story, approach |
| `/contact` | Form: name, email, company, service interest, message |

---

## Solutions (6 pages, one slug each)

| Slug | Title |
|---|---|
| `net-new-development` | Net New Development |
| `vibe-code-to-production` | Vibe-Code to Production |
| `business-process-automation` | Business Process Automation |
| `acquisition-due-diligence` | Acquisition Due Diligence |
| `ai-training-setup` | AI Training & Setup |
| `codebase-improvement` | Existing Codebase Improvement |

---

## SEO Checklist

- [ ] `generateMetadata()` on every page (title, description, canonical)
- [ ] OG + Twitter card tags via `generateMetadata()`
- [ ] `app/sitemap.ts` — auto-generates `/sitemap.xml` from all routes
- [ ] `app/robots.ts` — allow all, point to sitemap
- [ ] Semantic HTML throughout — proper `<h1>/<h2>`, `<main>`, `<section>`
- [ ] `next/font` for Inter (eliminates font layout shift)
- [ ] JSON-LD `ProfessionalService` structured data on homepage

---

## Build Checklist

### Phase 1 — Monorepo & Project Setup
- [ ] `git init` at `keystone/` root
- [ ] Root `package.json` with npm workspaces pointing to `apps/*`
- [ ] Scaffold `apps/web` with `create-next-app` (TypeScript, Tailwind, App Router)
- [ ] Configure Tailwind with brand palette tokens
- [ ] Add Inter via `next/font/google` in root layout
- [ ] `vercel.json` at root with `rootDirectory: "apps/web"`
- [ ] `.gitignore` at root

### Phase 2 — Shared Layout
- [ ] Root `layout.tsx` — font, background color, nav, footer
- [ ] `nav.tsx` — logo, links, Solutions dropdown (all 6 items)
- [ ] `footer.tsx` — nav links, copyright, domain

### Phase 3 — Homepage
- [ ] Hero section — headline, subheadline, primary CTA, secondary CTA
- [ ] "How We Work" — 3-step model (Scope → Build/Advise → Handoff)
- [ ] Solutions grid — 6 cards linking to solution pages
- [ ] Founder credibility section — background stated plainly, no superlatives
- [ ] Closing CTA section

### Phase 4 — Solutions Pages
- [ ] `solutions/content.ts` — all 6 services with slug, title, headline, description, who-for, deliverables
- [ ] `solutions/[slug]/page.tsx` — shared template rendering content
- [ ] `generateStaticParams()` for static generation of all 6 slugs
- [ ] `generateMetadata()` per slug

### Phase 5 — About & Contact Pages
- [ ] `about/page.tsx` — founder background, firm story, approach
- [ ] `contact/page.tsx` — form UI
- [ ] `components/contact-form.tsx` — controlled form, loading/success/error states
- [ ] `api/contact/route.ts` — Resend handler

### Phase 6 — SEO & Polish
- [ ] `app/sitemap.ts`
- [ ] `app/robots.ts`
- [ ] JSON-LD structured data on homepage
- [ ] `generateMetadata()` on all pages
- [ ] Favicon from `branding/keystone-icon-navy.svg`
- [ ] OG image (static or generated)
- [ ] Mobile nav (hamburger menu for Solutions dropdown)
- [ ] Accessibility pass — focus states, alt text, ARIA where needed

### Phase 7 — Deployment
- [ ] Confirm `RESEND_API_KEY` env var added to Vercel project
- [ ] Confirm contact form destination email
- [ ] Deploy preview to Vercel
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Smoke test all routes and contact form

---

## Open Questions

- [ ] **Contact form destination email** — `tanner@propdog.ai` as placeholder until `@keystone.systems` is set up?
- [ ] **Hero copy** — pick one:
  - *"Senior engineering judgment, without the full-time hire"*
  - *"The technical decisions that are hard to undo — made right the first time"*
