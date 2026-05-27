# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

No test runner is configured.

## Environment

Copy `.env.local.example` to `.env.local` and fill in the three Supabase keys:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

The client Supabase instance (`src/lib/supabase.ts`) returns a no-op proxy when env vars are missing, so the app builds and renders without Supabase — data-dependent pages will just be empty. The server client (`src/lib/supabase-server.ts`) uses the service role key and should only be called in server contexts.

## Architecture

Next.js 16 App Router project. Deployed on Vercel. Tailwind CSS v4 (uses `@theme inline` in `globals.css`, not a `tailwind.config` file). TypeScript with strict mode. Path alias `@/*` maps to `./src/*`.

### Public site

- `/` — Landing page with hero, process section, editorial split, CTA
- `/events` — Lists upcoming events from Supabase `events` table + past events from hardcoded data in `src/lib/past-events.ts`
- `/events/[id]` — Event detail + booking form (writes to `bookings` table)
- `/shop` — Product listing from Supabase `products` table, filterable by category (`workshop` | `compost`)
- `/shop/[id]` — Product detail
- `/cart` — Shopping cart
- `/about` — Long editorial "Our Story" page

### Admin dashboard (`/admin/*`)

Auth-gated via Supabase Auth (email/password). The guard lives in `src/app/admin/layout.tsx` — it checks the session and redirects to `/admin/login` if unauthenticated. All admin pages are client components.

- `/admin` — Dashboard with stats (events count, bookings count)
- `/admin/events` — CRUD for events
- `/admin/products` — CRUD for products
- `/admin/bookings` — View bookings

### Supabase tables

Three tables: `events`, `bookings`, `products`. Types are defined in `src/lib/supabase.ts`. The `bookings` table has an `event_id` foreign key to `events`.

### Shared layout

`CartProvider` wraps the entire app at the root layout level. Cart state persists to `localStorage` under key `wtf-cart`.

Header and Footer are imported per-page (not in root layout) so the admin section can use its own sidebar layout.

### Design system

The brand palette and typography are defined in `globals.css` via `@theme inline`. Key tokens: `forest`, `terracotta`, `earth`, `cream`, `soil`, `amber`, `honey`, `sage`. Headings use Young Serif (`--font-heading`), body uses Figtree (`--font-sans`). See `.impeccable.md` for full design context and principles.

Decorative SVG shapes (worms, blobs, curly lines, dot clusters) are defined inline as components within each page — they are not shared components.
