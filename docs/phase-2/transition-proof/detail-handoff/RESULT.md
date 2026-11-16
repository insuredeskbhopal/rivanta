# Sharp CBG close-up — superseded result

**Superseded:** the user supplied a new golden-hour close-up and requested smoother motion. See [the current transition result](../golden-hour/RESULT.md). This document and its measurements describe the previous source image and hard cut.

16 November 2026. Current preview: `http://localhost:3000/proof/cbg`.

The user supplied the second image specifically to provide close-up detail. The master-only experiment did not meet that need and has been replaced.

## Current behavior

- The campus master supplies the overview and approach only.
- At 34% chapter progress, the scene cuts to `Golden Dawn Over a CBG Plant.png`, with the dome's image-space position used to guide the handoff.
- The incoming detail has only a 2.5% settling movement, then remains at its normal cover scale throughout the reading hold. It is not a crop of the distant master image.
- The second image is fully opaque while the master is fully hidden. There is no extended half-opacity overlay to double buildings.
- After the reading hold, the scene cuts back to the master for the return. Reverse scrolling selects the corresponding shot consistently.
- Both images retain conceptual labels and quality-90 delivery. Reduced motion shows static imagery without camera transforms or pinning.

This is an intentional two-shot edit between supplied perspectives, not a geometrically seamless 3D flight. It solves the blurred held view using the actual close-up source. Structural differences between the supplied images have not been invented away, warped or declared engineering-accurate.

## Actual verification

- Lint, TypeScript and the production Next.js build passed.
- Browser screenshots were visually inspected immediately before/after the handoff and in the held desktop/mobile close-up. The second image resolves pipes, rails and equipment much more clearly than the enlarged master.
- Browser assertions confirmed the second image is the only visible image during the reading hold on 1440×900, 390×844, 320×568, 844×390 and 1920×1080 viewports.
- The actual response bitmap was decoded and measured at **1672×941**. HTML `naturalWidth` alone was not used to infer source resolution because responsive-image density correction can change that value.
- Held close-up scale equals normal cover scale; no unnecessary additional zoom is applied to that source.
- Sampled image bounds, conceptual labels, reverse scrolling, keyboard detail navigation and the final pin duration passed. No JavaScript runtime exception was recorded.
- Reduced-motion switching removed pinning and kept the close-up and description available.
- Original prototype and supplied-image hashes remain unchanged. No new plant images, database changes, package additions or full website implementation were made.

Evidence: `browser-measurements.json`, repeatable `validate.txt`, `desktop-0.33.png` (approach), `desktop-0.35.png` (second image), `desktop-0.64.png` (reading hold), and `mobile-detail.png`.

The originals still set the maximum available detail on very large/high-DPR screens. Physical-phone performance, field Core Web Vitals and a perfectly registered two-image asset pair are not certified. Visual approval remains with the user; remaining plant imagery stays on hold.
