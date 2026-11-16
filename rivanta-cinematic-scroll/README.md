# Rivanta Green — Cinematic Scroll-to-Plant Website Prototype

## Run
Open `index.html` in a desktop or mobile browser; the prototype uses **no CDN, API, or build step**, and images are included locally. For development, `python -m http.server 8080` inside this folder and visit `http://localhost:8080`.

## Experience
- Full-height panoramic hero and 400-acre vision positioning
- Scroll-driven **camera zoom** from master aerial view into the CBG location
- Crossfade to a facility detail image as the camera reaches the location
- Reveal of tailored CBG content and facility information
- Automatically zoom out, pan and repeat for biomass, power, bio-silica, silicon, SAF, solar and wind
- Interactive right-side numbered chapter navigation and progress track
- Responsive layout, keyboard-accessible anchor links, and reduced-motion support

## Project structure
- `index.html` — site structure and content
- `style.css` — typography, responsive layouts, sticky stage and overlays
- `script.js` — scroll position → camera transforms and facility transitions
- `assets/` — conceptual image assets

## Important limitation
The included visuals were generated for concept exploration, **not actual drone photography of a built Rivanta facility**. The plant positions are demonstration image coordinates and **are not approved engineering positions**. Replace the master image with a real aerial render produced from Rivanta's approved 400-acre CAD/masterplan and obtain individual facility photographs or verified 3D renders to achieve the user-requested realism and plant ordering. Focus coordinates in `script.js` are defined in the `locations` list; adjust them once the source image changes.

## Next.js integration notes
1. Copy assets to `public/images/rivanta/`.
2. Convert HTML into a client component, scoping CSS in a CSS module.
3. Bind the scroll listener within `useEffect`, remove on cleanup; access images via `/images/rivanta/`.
4. Retain existing Lenis instance rather than initializing a second smooth scrolling system; use its scroll callback if desirable.
5. For elaborate multi-layer 3D camera transitions, upgrade to a WebGL scene / React Three Fiber, using the approved 3D plant model.

This is an independent prototype and does **not** modify rivantagreen.com or the existing Next.js repository.
