# Updated SAF image and transition

**Extended and reordered:** the user supplied Silicon and requested **Silicon → CBG → SAF**. See [the current ordered-tour result](../silicon-order/RESULT.md). This report describes the earlier CBG → SAF order; the latest SAF source itself is retained.

16 November 2026. Preview: `http://localhost:3000/proof/cbg`. Current SAF source: **Golden-Hour Sustainable Fuels Plant.png**. The older industrial panorama is preserved but no longer imported. User visual approval is pending.

## Changes

- Inspected the new image and compared the tower with the master. The dome is mostly out of the new frame; SAF's tower, conveyor and adjacent vessels define the new composition.
- Replaced the SAF source while preserving the campus and CBG images and the single-gesture interaction.
- Recalibrated the approximate tower roof anchor from the old (1152,352) source position to **(1099,400)**; corresponding master roof position is **(872,684)**. Adjusted the uniform source-size ratio from 3 to **2.8**. These are manual image-space picks, not engineering coordinates or verified process positions.
- Desktop and mobile framing now follow the new roof anchor. The incoming image settles into normal cover scale, with the actual 1672×941 source fully opaque during the SAF reading hold. No added blur, image warping or invented-resolution enhancement is used.
- The sequence remains: one scroll → CBG hold; next fresh scroll → 3.6-second pullback/rightward campus bridge/SAF approach → SAF hold; next fresh scroll → native page movement. The opening headline stays hidden between plants. Upward gestures reverse one chapter at a time.
- Proposed labels, Skip, Escape, keyboard controls and static reduced-motion/no-JavaScript content remain available. Both source PNGs from the earlier steps and the new PNG are byte-unchanged.

## Actual verification

- ESLint, TypeScript, production build and environment checks passed. All 14 original prototype files remain byte-identical; no route beyond `/proof/cbg` was added.
- Real Chrome checks passed: separate CBG/SAF holds, large-flick protection, visible pullback, no returning headline or sampled blank master edges, matching CBG transforms after reverse, keyboard repeat suppression, replay, Skip, Escape and skip-link navigation. No application runtime exception was recorded.
- The optimized SAF response was fetched and decoded at **1672×941**, and its URL identifies the new Sustainable Fuels source. The old panorama was not used to pass the image check.
- Responsive checks passed at 1440×900, 390×844, 320×568, 844×390 and 1920×1080: correct SAF source, cover framing, readable proposed label, full caption opacity and no horizontal overflow.
- The selected roof anchor remained within the 2 CSS-pixel test tolerance during the core blend. This checks the chosen anchor only; it does not establish whole-scene alignment.
- Chrome CDP touchscreen events passed: first swipe reaches CBG, second reaches SAF, third resumes native scrolling. This is mobile emulation, not physical-phone certification.
- Live reduced-motion switching removed camera transforms and gesture behavior. Initial reduced-motion production loading showed all three static images. Production returned HTTP 200; JavaScript-disabled users retained the SAF description and source-image link, with jump controls disabled.
- The scoped mechanical design scan returned no findings. Source hashes were checked against the originals and are recorded in `source-images.json`.

Scripts and real results: `validate.txt`, `responsive.txt`, `touch.txt`, `fallbacks.txt` and their corresponding `*-measurements.json` files. `cbg-to-saf-review.webm` records the actual production journey, reverse, large-flick approach and native departure. `scroll-filmstrip.jpg` and `video-frames.json` index extracted video frames; the separate inspection crops were used only to select landmarks.

## Evidence limits

The independent motion review returned **ship for the isolated, review-only proof**. See [MOTION-REVIEW.md](MOTION-REVIEW.md). The review supports presenting this revision to the user; it is not user visual approval or a certification of perfect scene continuity.

The normal/reduced and forward/reverse control captures use the same route, viewport and controls. Keyboard Tab in setup returns the relevant header controls into view after static reduced-motion navigation. The capture tool's zero CSS-animation duration does not measure GSAP's JavaScript clock, so the actual tour recording supplies the movement evidence. Local rAF observations are not physical-device FPS or field Core Web Vitals results.

The source images still differ in terrain, equipment details, proportions and lighting. The new reference improves the composition, but anchor alignment cannot make independent renders a perfectly identical scene. All plant assignments, layout and equipment remain conceptual and unverified. Physical-device, assistive-technology and slow-network testing remain outstanding.

No original image was modified or generated. No new package, database change, additional plant image, full website or deployment was created.
