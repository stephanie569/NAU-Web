# Archived marketing site

Moved so the live app is **Map-only** (`/map`). Home redirects to `/map`.

## What is here

| Path | Contents |
|------|----------|
| `app/` | Former routes: `studio`, `clients`, `essays`, `projects`, `products`, `store`, `packages`, `stickers-campaign`, `contact`, `legal`, plus `api/checkout` and `api/contact` |
| `components/` | Homepage sections and page UIs (Hero, Services, Clients, Blog, Pricing, FAQ, Team, Footer, etc.) |
| `lib/` | `sections.ts`, `clients.ts`, `hero.ts`, `blog*`, `blog-posts/`, `qr-stickers.ts`, and related helpers |

## How to restore

1. Move the needed folders back under `src/` (e.g. `archive/marketing-site/app/studio` → `src/app/studio`).
2. Restore matching components and lib files.
3. Put nav links back in `src/lib/data.ts`.
4. Replace `src/app/page.tsx` redirect with the archived homepage composition.
5. Update `next.config.ts` redirects as needed.

Demo / production content for the Map stays in `src/lib/map/`.
