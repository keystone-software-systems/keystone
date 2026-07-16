# Keystone Systems / StackDiligence

Two marketing sites, one monorepo: **Keystone Systems** (keystone.systems), a solo/founder-led
software engineering consultancy, in `apps/web`; and **StackDiligence** (stackdiligence.com),
technical due diligence for software acquisitions, in `apps/stackdiligence`. They're separate
brands/entities run by the same founder — see each app's own docs for its specific context.
Both are Next.js App Router sites deployed to Vercel as separate projects.

See `docs/build-plan.md`, `docs/company-context.md`, `docs/stack-diligence-init.md`, and
`branding/keystone-systems-brand-guide.md` for full project and brand context.

## Structure

```
apps/web/             Keystone Systems — Next.js 16 App Router site (Tailwind v4, TypeScript)
apps/stackdiligence/  StackDiligence — same stack, separate brand/entity
branding/             Keystone logo files and brand guide
docs/                 Planning docs
```

## Development

```
npm install
npm run dev:web              # apps/web on http://localhost:3000
npm run dev:stackdiligence   # apps/stackdiligence on http://localhost:3000
npm run typecheck            # both apps
npm run lint                 # both apps
npm run build                # both apps
```

## Environment variables

Copy each app's `.env.example` to `.env.local` (`apps/web/.env.example`,
`apps/stackdiligence/.env.example`) and fill in real values for local dev. See those files for
what each variable does.

## Deployment

`.github/workflows/ci.yml` runs typecheck, lint, and build on every push and pull request — it's
CI only, no deploy step.

Actual deploys are handled by Vercel's native GitHub integration: import this repo as two
separate Vercel projects, one with Root Directory `apps/web` and one with Root Directory
`apps/stackdiligence` — preview deployments on every PR, production deploys on push to `main`.
No repo secrets needed.

Each app needs these set as its own Vercel project's environment variables (Project Settings →
Environment Variables):

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Sends contact-form email via Resend |
| `RESEND_FROM_EMAIL` | Verified sender address once the app's domain is set up in Resend |
| `CONTACT_TO_EMAIL` | Inbox that receives contact-form submissions |
