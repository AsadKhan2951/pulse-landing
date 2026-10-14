# Pulse landing page (React + Vite)

Single-page marketing site for Pulse, the smart business brain.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build locally
```

Node 18 or newer. No other dependencies: just React and Vite.

## Structure

```
src/
  App.jsx               page order
  content.js            ALL copy, plans, FAQ, sources: edit text here
  index.css             design tokens (:root) and every style, incl. responsive breakpoints
  hooks/motion.js       useInView, useCycle (auto-cycling lists), reduced-motion check
  components/
    motion.jsx          Rise (scroll-in), RevealHeading (scroll-linked letters),
                        WordsIn (hero headline), RollButton (hover label roll), CountUp
    Nav, Hero, Marquee, Brains, HowItWorks, Cases, Stats,
    Security, Integrations, Pricing, Faq, Cta, Footer, Logo, Art
  assets/art/*.svg      isometric drawings + logo, imported as raw strings (?raw)
public/favicon.svg      Pulse mark
```

## Motion notes

- Timings match the reference site: hero buttons rise at 2.0s / 2.1s (20px), hero artwork at 2.8s (60px),
  nav drops in from -32px, button label roll is 0.4s linear.
- Section headings darken letter by letter as you scroll (start at 85% of the viewport, finish by 45%).
- The hero drawing assembles piece by piece (`.pop` groups inside `hero.svg`); the moving dots are SVG `<animateMotion>`.
- The five-brains list and the security list auto-cycle while on screen and pause on hover. The brains drawing
  highlights the active node (`[data-k]` in `brains.svg`); the security drawing swaps per item.
- Everything respects `prefers-reduced-motion`.

## Responsive

Breakpoints at 1020px and 760px (see the bottom of `index.css`). Below 760px the nav collapses into a menu button.

## Wiring up

- "Book a demo" buttons point to `#cta`; the final CTA uses a `mailto:` link. Swap in your booking URL or form.
- Brand colour is `--accent: #FD4B1E` in `index.css`. Fonts: Space Grotesk (display) and Inter (body) from Google Fonts in `index.html`.

## Deploy to DigitalOcean (App Platform, static site)

1. Push this folder to a GitHub repo (branch `main`).
2. DigitalOcean → Apps → Create App → GitHub → pick the repo.
3. It detects a static site. Build command `npm ci && npm run build`, output directory `dist`.
4. Deploy. Every push to `main` redeploys automatically.

Or from the terminal with `doctl`: edit the repo name in `.do/app.yaml`, then `doctl apps create --spec .do/app.yaml`.
