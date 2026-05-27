# We The Farm

Website for **We The Farm**, a community rooftop farm on Level 5 of Beauty World Centre, Singapore. The hawker stalls downstairs save their food scraps, we compost them, and we grow food with it.

**Live site:** Deployed on [Vercel](https://vercel.com)

## What the site does

- **Public pages** — Landing page, events listing with RSVP booking, a shop for workshops and compost products, shopping cart, and an editorial "About" page telling our story.
- **Admin dashboard** — Auth-protected section for managing events, products, and viewing bookings. Accessible at `/admin`.

## Tech stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Database & Auth | Supabase |
| Hosting | Vercel |
| Icons | Lucide React |

## Getting started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project with three tables: `events`, `bookings`, `products`

### Setup

```bash
# Install dependencies
npm install

# Configure environment
cp .env.local.example .env.local
# Fill in your Supabase keys (see .env.local.example for details)

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The app builds and renders without Supabase credentials — data-dependent pages will just show empty states.

### Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) |

Get these from your Supabase dashboard under **Settings → API**.

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── events/               # Events listing + detail/booking
│   ├── shop/                 # Product listing + detail
│   ├── cart/                 # Shopping cart
│   ├── about/                # Our Story editorial page
│   └── admin/                # Auth-gated admin dashboard
│       ├── events/           # CRUD for events
│       ├── products/         # CRUD for products
│       ├── bookings/         # View RSVPs
│       └── login/            # Admin login
├── components/               # Shared UI (Header, Footer, cards, forms)
├── contexts/
│   └── CartContext.tsx        # Cart state with localStorage persistence
└── lib/
    ├── supabase.ts           # Client-side Supabase instance + type definitions
    ├── supabase-server.ts    # Server-side Supabase client (service role)
    └── past-events.ts        # Hardcoded past event data
```

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # Run ESLint
```

## Design

The visual identity draws from farm-poster aesthetics — bold serif typography (Young Serif), an earthy palette (olive greens, terracotta, warm creams), and hand-drawn decorative SVG shapes scattered throughout. Full design context lives in `.impeccable.md`.

## About We The Farm

We're a volunteer-run rooftop farm started in 2022 by Jin Xiang, Nicholas, and Darren. We collect food scraps from the hawker stalls at Beauty World Centre and compost them using four different systems: vermiculture, black soldier fly larvae, isopods, and hot composting. The compost feeds the soil, the soil grows the food, and whatever we don't eat goes back into the pile.

Sessions run on Saturdays. Everyone's welcome — no experience needed.

- **Location:** Level 5, Beauty World Centre, 144 Upper Bukit Timah Rd, Singapore 588177
- **Instagram:** [@wethefarm](https://www.instagram.com/wethefarm)
