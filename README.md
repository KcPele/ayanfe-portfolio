# Ayanfeoluwa Olajide: Portfolio

Personal site for Web3 legal counsel Ayanfeoluwa Olajide. Built with Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS v4 and TypeScript.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build (all pages are statically prerendered)
```

Set `NEXT_PUBLIC_SITE_URL` (for example `https://ayanfeolajide.com`) in your hosting environment. Canonical URLs, the sitemap, Open Graph tags and JSON-LD all use it.

## Docker

The app builds to a standalone Node server (`output: "standalone"` in `next.config.ts`) and runs as a non-root user on port 3000.

```bash
# Build (set your real domain; it is baked into canonical URLs, sitemap and OG tags)
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://yourdomain.com -t ayanfe-portfolio .

# Run
docker run -d -p 3000:3000 --name ayanfe-portfolio ayanfe-portfolio
```

Or with Compose (reads `NEXT_PUBLIC_SITE_URL` and `PORT` from your shell or a `.env` file):

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com docker compose up -d --build
```

Content and theme changes need a rebuild of the image. The build downloads Google Fonts, so it needs internet access.

## Project structure

```
src/
  app/                 Routes: / , /speaking, /speaking/[slug], /blog, sitemap, robots, manifest
  components/
    layout/            SiteHeader (mobile menu), SiteFooter
    sections/          Home-page sections (Hero, About, Practice, FeaturedTalks, Gallery, …)
    blog/              PostCard
    speaking/          EventCard
    ui/                Container, Button, Reveal, SectionHeading, PageHeader, PhotoGrid (lightbox)
    seo/               JsonLd
  data/                All editable content (see below)
  lib/                 seo.ts (metadata helper), schema.ts (structured data), utils.ts
  types/               Shared TypeScript types
public/images/events/<event-slug>/   Photos, grouped by engagement
```

## Updating content

Everything editable lives in `src/data/`. The pages rebuild from it, so you never need to touch components.

| File | What it controls |
| --- | --- |
| `posts.ts` | **Blog / teaching decks.** Each entry has `title`, `description`, `image`, `gammaUrl` and `date`. "Read more" opens `gammaUrl` in a new tab. Add an object to add a card. Newest date shows first. |
| `events.ts` | Speaking engagements, their photos, and the "On the record" exhibits (any event with an `exhibit` letter). Also `galleryPhotos` for the home gallery. |
| `site.ts` | Name, bio, email, socials, stats, nav links, SEO keywords. |
| `practice.ts` | "What I do" practice areas. |
| `articles.ts` | Substack articles. |

**Blog images:** use a path under `public/` (for example `/images/blog/privacy-stack.jpg`) or a full `https://` URL. Leave `image: ""` and a branded cover is generated from the title. The current images and `gammaUrl` values are placeholders.

**New event photos:** put them in `public/images/events/<slug>/` and add them with the `photo()` helper in `events.ts`, including the width and height.

## Theme

All colours are CSS variables in `src/app/globals.css`, mapped to Tailwind utilities (`bg-background`, `text-primary`, `border-border`, …). Tailwind's default palette is turned off, so components can only use these tokens.

- **To change a colour**, edit its variable in the `:root, [data-theme="ink"]` block.
- **To switch to the light theme**, change `data-theme="ink"` to `data-theme="paper"` in `src/app/layout.tsx`.
- **To change fonts**, edit the `next/font` imports in `layout.tsx` (heading, body and code fonts).
