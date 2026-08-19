# $DINKY — Next.js site

Converted from the original single-file HTML page into a component-based Next.js 14 (App Router + TypeScript) project.

## Structure

```
app/
  layout.tsx        # root layout, metadata, imports globals.css
  page.tsx           # composes all sections in order
  globals.css         # CSS variables, resets, shared base styles
components/
  Navbar.tsx / .module.css
  Ticker.tsx / .module.css       # scrolling marquee
  Hero.tsx / .module.css
  Stats.tsx / .module.css
  Story.tsx / .module.css
  Gallery.tsx / .module.css
  Community.tsx / .module.css
  Footer.tsx / .module.css
  CTA.tsx / .module.css          # shared primary/outline button, used in Hero
  CopyBox.tsx / .module.css      # click-to-copy contract address, used in Hero + Footer
public/
  Dinky.png, dinky1.png, dinky2.png, dinky3.png   # add your own images here
```

Each section is its own component with a CSS Module scoped to it, so styles never leak between
sections. Shared design tokens (colors) live in `app/globals.css` as CSS custom properties and are
referenced with `var(--gold)`, `var(--sol-a)`, etc. across every module file.

## Getting started

1. Add your image files to `public/` (see `public/README.md` for exact filenames).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Performance, responsiveness & premium polish

- **Fonts**: `next/font/google` (Space Grotesk for display, Inter for body) self-hosts and
  preloads font files at build time — no external request at runtime, no flash-of-fallback layout
  shift, and it works with strict CSPs.
- **Mobile nav**: the navbar is now a client component with a real hamburger menu below 820px
  (animated icon, slide-down panel) instead of just hiding the links with no alternative.
- **Responsive images**: `next/image` is used everywhere. The gallery uses `fill` + `sizes` so the
  browser only downloads the resolution it actually needs at each breakpoint, with a subtle zoom
  on hover for a more premium feel.
- **Scroll reveals**: a small `Reveal` client component (`IntersectionObserver`-based) fades +
  lifts each section into view once, then disconnects — no ongoing scroll-listener cost.
- **Fluid type & spacing**: headings and section padding use `clamp()` so text and rhythm scale
  smoothly between mobile and desktop instead of jumping at breakpoints.
- **Accessibility / quality floor**: visible `:focus-visible` states site-wide, and
  `prefers-reduced-motion` is respected globally (kills the float/ticker/reveal animations for
  anyone who's asked their OS to reduce motion).
- **Texture**: a tiny inline SVG noise layer is blended into the background for depth — no image
  request, negligible cost.

## Notes on the conversion

- The contract address, social links, and copy are unchanged from the original page.
- The "copy CA to clipboard" behavior is now a small client component (`CopyBox`) reused in both
  the hero and the footer, instead of duplicated inline `<script>` logic with two hardcoded IDs.
- The ticker phrases are duplicated once in JSX (matching the original's JS duplication) to get a
  seamless CSS `@keyframes` loop.
- Images use `next/image` for automatic optimization — update the `width`/`height` props if your
  actual image dimensions differ.
- Nav links, stats, nicknames, gallery images, and social links are all pulled from small arrays at
  the top of their components, so editing content doesn't require touching JSX/markup.
