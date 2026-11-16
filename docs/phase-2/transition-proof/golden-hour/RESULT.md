# Golden-hour CBG transition

**Interaction superseded:** the user requested single-gesture playback instead of continuous scroll scrubbing. See [the current interaction result](../single-gesture/RESULT.md). Image choice and alignment remain, but the long ScrollTrigger journey described here is historical.

16 November 2026. Review at `http://localhost:3000/proof/cbg` while the development server is running. Only the isolated proof has changed. Visual approval remains with the user.

## Changes

- Replaced the old close-up with the supplied `Golden-Hour Mountain Industrial Complex.png` (1774×887). Original files are unchanged; provenance and SHA-256 hashes are in `source-images.json`.
- Recalibrated desktop/mobile framing around the dome and its approximate apparent diameter. The full scene has not been distorted to force an alignment.
- Replaced the hard cut with a short, eased blend at 28.5–35.5% chapter progress. An opaque campus base avoids fading both images through a dark frame. Both cameras share the focal position through the handoff.
- Added a subtle 4.5% settling movement into the detail. It finishes at 50%; the reading hold uses normal cover scale through 78%, with the actual second image fully opaque and no added blur. The caption is fully visible from 52–77%.
- The detail blends back at 82–89% before the master retreats at 89–100%. Quintic curves have zero slope and acceleration at their boundaries; ScrollTrigger's 0.65-second scrub softens abrupt scroll input without replacing native scrolling.
- Concept labels, keyboard controls, resize handling and static reduced-motion/no-JavaScript alternatives remain available.

## Actual validation

- ESLint, strict TypeScript, production Next.js build and environment checks passed. All 14 original prototype files remain byte-identical. No package, database, migration or remaining plant asset was added or changed.
- Real Chrome assertions passed at 1440×900, 390×844, 320×568, 844×390 and 1920×1080: no sampled image gaps or horizontal overflow, persistent conceptual labels, correct close-up source and no unnecessary extra zoom during the hold.
- Sampled dome anchor differences were below 0.02 CSS pixels in the core desktop blend and below 0.02 at the tested responsive midpoint. This measures the chosen image-space anchor, not whole-scene or engineering registration.
- Sampled forward/reverse states matched within the stated browser tolerances. The stage remained pinned through 99%; keyboard activation reached the detail hold. No application runtime exception was recorded.
- The actual optimized response bitmap was fetched and decoded at **1774×887**. Quality-90 delivery preserves available source detail; it cannot supply additional physical pixels on high-DPR or very large displays.
- Production `/proof/cbg` returned 200. Live reduced-motion switching removed pinning; an initial reduced-motion production load showed both images without transforms. With JavaScript disabled, the conceptual description stayed visible and jump controls stayed disabled.
- `scroll-review.webm` records the actual production approach, hold, return and reverse traversal. `scroll-filmstrip.jpg` and `video-frames.json` provide timestamped frames extracted from that recording. No interpolation or simulated visual result was used.
- During that recorded scripted scroll, 993 observed requestAnimationFrame intervals had a median of 16.7 ms and 95th percentile of 16.8 ms; none exceeded 50 ms. This is a local browser scheduling observation under recording overhead, **not** a physical-device FPS result, field Core Web Vitals result or performance guarantee.

Repeatable scripts and raw outputs: `validate.txt`, `browser-measurements.json`, `record.txt`, `record-measurements.json`, `fallbacks.txt` and `fallback-result.json`. Desktop/mobile screenshots are included beside them. The dev-only favicon 404 does not indicate an application exception.

## Motion review and limits

Impeccable captures in `motion-normal/` and `motion-reduced/` use the same URL, control and viewport region. Their reports identify a detector limitation: GSAP's JavaScript animation is not scrubbed by the CSS-animation detector, so `durationMs: 0` is not a valid measurement of this journey's duration. The full recorded scroll and its timestamped frames supply the path evidence instead.

An independent motion review returned **ship for user review**, limited to this proof and the supplied evidence, with no blocking implementation fix. See `MOTION-REVIEW.md`. This is not user visual approval or a production seamlessness certification.

The close-up is visibly sharper, and the focal handoff is aligned. Surrounding buildings, dome proportions, terrain, vegetation and lighting are still different between the supplied concept renders; some dissolve ghosting remains visible at half blend. This is a refined two-image transition, not a certified seamless flight through an identical 3D scene. A perfectly matched result requires detail derived from the same source scene/projection. Physical-phone, touch-device and field performance validation remain outstanding.

No assets were generated and no original image was edited. The full website, original standalone prototype, remaining plant images and deployment remain outside this change.
