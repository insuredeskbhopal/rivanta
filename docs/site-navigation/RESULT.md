# Company navigation and home route

16 November 2026. Local home: http://localhost:3000/.

The existing company experience now renders at `/`. The previous `/proof/cbg` address forwards to `/` with a temporary 307 redirect. The SVG logo links home and restores the opening hero, scroll position and chapter state, including when clicked after Power. Modifier-key/new-tab link behavior remains native.

Replaced the four individual-plant links with About Us, Our Businesses, Sustainability, Projects and Contact Us. Our Businesses opens the existing local venture journey. The other four links open the real company pages on www.rivantagreen.com; all returned HTTP 200 during verification. No local placeholder pages or dummy forms were created.

A reusable SiteHeader provides a fixed desktop bar and an accessible mobile disclosure with expanded state, keyboard activation, Escape/focus return, outside dismissal and desktop-resize cleanup. The camera input guard yields while the menu is open. A static mobile navigation fallback is available without JavaScript. The supplied logo is unchanged.

Validation passed: lint, TypeScript, production build and environment checks, including all 14 original prototype hashes. Six viewport layouts, actual Our Businesses playback through all four chapters, native scroll release, logo-to-home reset, keyboard menu operation, menu wheel protection, resizing, reduced motion and no-JavaScript navigation were checked in a real browser. No application page errors were recorded. Production HTTP requests returned 200 for home and 307 for the old route. The mechanical design detector reports no findings.

The existing company pages remain external destinations; this change does not claim that additional local pages have been implemented. No deployment, database change, new dependency or image generation was performed. Conceptual project labels remain, and source-image geometry differences are unchanged.

[Browser measurements](browser-measurements.json), [production checks](production-result.json).
