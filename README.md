# Sangeeth Bandara — Portfolio + Auth (v2)

React + Vite + TypeScript rebuild of the portfolio, merged with the hanging
ID-card interaction and a new premium animated Login/Sign Up page.

## What's new vs. the original site
- Canvas-based glowing gold particle field with mouse parallax (`GoldParticles`)
- Draggable hanging ID badge with swing physics, ported from the zip into React (`HangingCard`)
- 3D mouse-tilt on the work cards (`TiltCard`)
- A small hand-authored Lottie animation (pulsing gold mark) used on the nav and auth page
- `/login` — dark luxury glassmorphism Login/Sign Up screen with animated mode switching, flowing gradient "liquid" background, and full keyboard/reduced-motion support

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy
- **Vercel**: import the repo, framework preset "Vite", no env vars needed.
- **GitHub Pages**: run `npm run build`, deploy the `dist/` folder (add a `base` path in `vite.config.ts` if hosting under a subpath).

## Notes
- The `/login` screen is a UI demo only — no backend/auth is wired up.
- All animations respect `prefers-reduced-motion`.
- Replace the Unsplash images in `src/pages/Portfolio.tsx` with your own work whenever you're ready.
