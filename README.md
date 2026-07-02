# Binay Kumar Gupta — Portfolio

A 3D, single-page portfolio for a backend engineer. Dark, immersive, scroll-driven.

**Live:** https://binaygupta.in

## Tech stack

- **Vite + React 18** — fast dev server and build
- **React Three Fiber + drei** (Three.js) — the animated 3D "data core" in the hero
- **Framer Motion** — entrance + scroll-reveal animations, rotating role text
- **Lenis** — smooth scrolling
- Custom CSS design system (no UI framework)

## Structure

```
src/
  main.jsx            App entry
  App.jsx             Layout, Lenis smooth scroll, scroll progress, preloader
  index.css           Design tokens, resets, cursor, buttons, cards
  data/content.js     All résumé content (edit this to update the site)
  components/
    Scene3D.jsx       WebGL scene (React Three Fiber)
    Hero.jsx          Hero section
    About.jsx         About + education + tech marquee
    Experience.jsx    Work-history timeline
    Projects.jsx      Project cards (tilt on hover)
    Skills.jsx        Skills grid + achievements
    Contact.jsx       Contact CTA
    Navbar.jsx        Fixed nav + mobile menu
    Preloader.jsx     Intro loader
    Cursor.jsx        Custom cursor
    Footer.jsx
    Reveal.jsx        Scroll-reveal wrapper
    components.css    Component styles
```

## Editing content

Almost everything (experience, projects, skills, achievements, links, résumé) lives in
[`src/data/content.js`](src/data/content.js). Update it there — no component changes needed.

The downloadable résumé is [`public/Binay_Kumar_Gupta_Resume.pdf`](public/Binay_Kumar_Gupta_Resume.pdf);
the profile photo is [`src/img/profile.jpeg`](src/img/profile.jpeg).

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & deploy

```bash
npm run build      # outputs to build/
npm run preview    # serve the production build locally
npm run deploy     # publish build/ to GitHub Pages (gh-pages)
```

The Vite `base` is relative (`./`), so the build works both from a custom domain
and from a GitHub Pages project subpath.

> Tip: append `?snap` to any URL to disable the preloader, smooth scroll, and
> reveal animations — handy for full-page screenshots.
