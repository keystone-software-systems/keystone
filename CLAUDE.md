# Keystone Systems — Repo Instructions

Marketing site for **Keystone Systems**, a solo/founder-led software engineering consultancy.
This repo is unrelated to Land Catalyst/PropDog.ai — treat it as a separate client context even
though the same person operates both.

Full business context lives in `docs/company-context.md` — read it before writing any copy,
not just this summary.

## What Keystone Systems Is

One-line pitch: **senior engineering judgment, without the full-time hire.** The founder
(Senior/Staff-level engineer, background at Stripe and Microsoft) sells judgment applied at a
specific, well-scoped moment — not staff augmentation, not "AI-assisted development" as a
headline claim.

**Six service lines** (`apps/web/app/solutions/content.ts`):
1. Net New Development
2. Vibe-Code to Production
3. Business Process Automation
4. Acquisition Due Diligence
5. AI Training & Setup
6. Existing Codebase Improvement

**Engagement model:** priced to the outcome, not hourly. Handoff is the default; fractional-CTO
retainers are available but not the default framing.

## Copy Guardrails — read before editing any user-facing text

These are hard constraints from `docs/company-context.md`, not style preferences:

- **No superlatives** — no "world-class," "rockstar," "best-in-class," "cutting-edge,"
  "game-changing." Replace with a concrete noun phrase ("senior engineering judgment") or a
  named deliverable, never a softened hype word.
- **No "empower," "revolutionize," or transformation language.** State the specific problem
  solved or artifact delivered instead.
- **No em dashes, no exclamation points, no urgency language** anywhere in copy.
- **State the Stripe/Microsoft credential once, plainly, in one place** (About page). Don't
  repeat or dramatize it elsewhere. Don't lead with AI capability as the headline hook.
- **Never mention Cedar or that the founder currently holds another job**, anywhere
  public-facing. Present Microsoft/Stripe as background without "currently"/"most recently"
  framing that implies a current-vs-past ordering.
- **Don't state a post-handoff support window, guarantee, or warranty length.** Not yet decided
  internally — see `docs/todo.md`. Current About-page framing ("if something doesn't hold up,
  that's on Keystone Systems to fix") is the only sanctioned phrasing until this changes.
- **Don't state bench-depth specifics** (numbers, names) in public copy. Current framing is "a
  small network of equally experienced independent engineers" — keep it generic.
- **No social proof** (testimonials, case studies, before/after) until real client examples
  exist and are cleared to share.
- **Keystone/Scaleyard are separate brands** — don't conflate them in copy. Scaleyard
  (scaleyard.io) is the founder's other venture, a platform for independent consultants; it is
  not Keystone Systems.
- The name's personal meaning to the founder is private — never explain "what Keystone means"
  in copy, and avoid anything that reads as religious/denominational.

When in doubt about copy, check `docs/todo.md` for open decisions before locking language in —
several things (support terms, bench depth, social proof) are intentionally left vague pending a
founder decision.

## Visual/Brand Direction

Full detail in `branding/keystone-systems-brand-guide.md`. Summary: clean, minimal, geometric —
closer to Stripe/Linear/Vercel than a creative agency. Monochrome-first with a single accent
color (Blueprint Navy `#14324D`, Technical Blue `#3E7CB1`). No gradients, glow effects, mascots,
or literal stone/arch imagery.

## Stack & Structure

- **Monorepo:** npm workspaces, single app at `apps/web`
- **Framework:** Next.js 16 App Router, static generation
- **Styling:** Tailwind CSS v4, brand palette as CSS variables
- **Font:** Inter via `next/font/google`
- **Contact form:** Resend, single API route (`apps/web/app/api/contact/route.ts`)
- **Deployment:** Vercel, native GitHub integration (Root Directory = `apps/web`). No deploy
  step in CI — `.github/workflows/ci.yml` runs typecheck/lint/build only.

```
apps/web/     Next.js site — see apps/web/CLAUDE.md for Next.js-16-specific rules
branding/     Logo SVGs + brand guide
docs/         Company context, build plan, open TODOs, landing page prompt
```

`apps/web` has its own `CLAUDE.md` (Next.js 16 breaking-change warning — read the bundled docs
in `node_modules/next/dist/docs/` before writing Next.js code, don't assume training-data APIs).

## Commands

Run from repo root (workspace-aware):

```
npm install
npm run dev         # apps/web on localhost:3000
npm run typecheck
npm run lint
npm run build
```

Run `npm run typecheck && npm run lint && npm run build` before considering any change done —
this mirrors CI exactly.

## Conventions

- TypeScript, functional components, App Router conventions throughout.
- Solutions pages are template-driven off `apps/web/app/solutions/content.ts` — add/edit a
  service there, not by hand-writing a new page.
- `generateMetadata()` on every route; keep `app/sitemap.ts` and `app/robots.ts` in sync when
  adding routes.
- Minimal comments, no unnecessary abstraction — same house style as other Tanner projects.
