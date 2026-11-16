# Brand logo replacement

Replaced the header text lockup with the user-supplied `logo/logo-brand-lockup-light.svg`, imported directly through Next.js Image as an unoptimized SVG. No extra visible brand text is rendered beside it. The accessible image name and home-link label remain.

Original vector artwork, colors and aspect ratio are preserved. Desktop uses the horizontal lockup; narrow mobile places venture navigation beneath it. Hero spacing and the reduced-motion layout accommodate the taller mobile header.

Lint, TypeScript and production build passed. Real browser checks passed five viewport sizes, reduced motion, keyboard navigation and direct Power navigation with Escape. The delivered SVG returned HTTP 200 with a SHA-256 matching the original file. Desktop, mobile and narrow screenshots were visually inspected. No new dependency or deployment was added.
