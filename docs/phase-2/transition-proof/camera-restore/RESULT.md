# Camera zoom and lateral-travel restoration

**Historical revision:** the user has since supplied a fourth Renewable Energy view. See [the current result](../renewable-energy/RESULT.md).

16 November 2026. Review at http://localhost:3000/proof/cbg. Visual approval remains with the user.

## Current behavior

The original campus approaches Silicon. A fresh gesture pulls back from Silicon, travels laterally across the campus and approaches CBG. The next gesture repeats that sequence toward SAF. Each plant holds until another fresh gesture. The initial approach takes 2.6 seconds; each forward bridge takes 3.6 seconds. Upward gestures reverse the route. The opening headline does not return between plants, and native page scrolling resumes after SAF.

The extra `Golden Hour Industrial Energy Complex.png` layer, registration code and preloading were removed from playback at the user's request. Its source file is preserved unchanged. The stage now uses exactly four images: the original campus plus Silicon, CBG and SAF. No image was generated or edited; no new dependency was installed.

Restored plant-specific camera magnification and separated pullback, lateral travel and approach phases. Movement uses smooth quintic easing, and the plant close-up blends in before the deepest overview zoom. The campus stays opaque behind the close-ups to prevent a black flash. Plant reading holds retain normal cover framing. Escape, Skip, navigation, replay and reduced motion remain available.

## Recorded checks

- Lint, TypeScript, production build and prototype syntax check passed.
- Real Playwright browser checks passed ordered large-wheel gestures, stable holds, reversed framing, direct navigation, keyboard, native departure after SAF, replay, Skip, Escape and skip-link navigation. No application page errors were recorded.
- Twelve responsive plant holds passed across 390×844, 320×568, 844×390 and 1920×1080. The primary 1440×900 browser run passed all three holds. No stage edges, horizontal overflow, missing conceptual labels or enlarged reading holds were observed in these checks.
- Live reduced-motion preference switching stopped spatial motion, cleared transforms and gesture handling, and exposed all four images in the requested order.
- The actual approximately 32-second production recording covers forward and reverse motion, large-wheel input and native departure. Camera samples confirm zoom-out → lateral travel → zoom-in in both bridges. At 1440×900, sampled lateral travel during the middle portion was approximately 196 CSS pixels toward CBG and 667 CSS pixels toward SAF. These are image-space observations, never engineering coordinates.
- Real Chrome CDP touchscreen events in mobile emulation passed one swipe per Silicon, CBG and SAF hold, then native scrolling after SAF. This is emulation, not a physical-phone check.
- A real production browser with JavaScript disabled returned HTTP 200 and kept the three facility descriptions visible; no motion initialized.
- Five original source-image SHA-256 hashes matched the prior manifest, including the image removed from playback.

[Browser measurements](browser-measurements.json), [responsive measurements](responsive-measurements.json), [camera recording measurements](record-measurements.json), [actual recording](silicon-cbg-saf-review.webm), [recording filmstrip](scroll-filmstrip.jpg), [source preservation](source-images.json), [touch measurements](touch-measurements.json).

## Visual limits

Zoom and lateral choreography are restored. The supplied campus and plant renders differ in structure, terrain, lighting and perspective. Crossfades can still reveal doubled structures and a change in framing; these assets cannot support a completely invisible physical camera transition. The small campus source may soften briefly during pullback/approach. No blur filter, geometry warping, artificial sharpening or image-resolution improvement is claimed. Exact continuity requires matching images from one shared scene.

This remains an isolated conceptual proof, not the full website. Production rights and plant positions remain unverified. Field performance, physical phones, slow-network performance and Core Web Vitals have not been established by these local browser checks. The development server also reports the existing missing favicon request; no unrelated icon work was added.

Production normal/reduced forward and reverse capture sets are in `production-normal/`, `production-reduced/`, `production-reverse/`, and `production-reverse-reduced/`. All four have eleven frames and zero CSS-detector findings, but the detector reports zero duration because it cannot scrub GSAP. These endpoint captures do not establish smoothness; the actual recording and extracted frames document the moving path. Earlier `motion-*`/`reverse-normal` dev captures were polluted by the development overlay or aborted and are excluded.

## Independent motion review

[Fresh motion review](MOTION-REVIEW.md): **ship for user visual review of the isolated proof**. It confirms the requested camera route is visible and names no required implementation fix. Perceptible differences between the supplied images remain; this is not production approval or certification of invisible transitions. The final recording was inspected after the clean production frames were synchronized.
