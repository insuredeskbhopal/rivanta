# One-gesture CBG transition

**Extended:** the user authorized adding the supplied SAF reference. A second fresh gesture now moves from CBG across the campus into SAF; native scrolling resumes after SAF. See [the current extension result](../saf-extension/RESULT.md). This report describes the earlier CBG-only interaction.

16 November 2026. Preview: `http://localhost:3000/proof/cbg`. This replaces continuous scroll scrubbing for the isolated proof; user visual approval is pending.

## Behavior

- One downward wheel gesture, single-finger upward swipe, PageDown, ArrowDown or Space starts the complete **2.6-second** approach. No continuing scroll effort is required.
- The camera plays on GSAP's clock and stops at the sharp CBG reading view. Scroll magnitude does not control playback position, so a large flick cannot jump straight to the end.
- Additional wheel input during playback and the same gesture's trailing momentum are consumed locally while the stage is fully visible. After 180 ms without wheel input, the next downward gesture scrolls the page normally. A new touch contact or released/repressed key likewise continues navigation. No overflow lock is applied to the document.
- An upward gesture from the full CBG scene plays the reverse approach in **2.1 seconds**. The scene does not automatically retreat after the detail hold.
- A visible **Skip animation** button and Escape finish immediately. Tab, skip/compare links, Home/End, browser zoom, scrollbars and navigation outside the full stage remain available; leaving the stage cancels playback without snapping the page back. Hidden-tab/window-blur cleanup ends playback.
- Replay returns to the stage and runs the approach again. View CBG and Inspect the detail use the same timed approach when needed.
- Removed the long pin and ScrollTrigger from this proof. Only two image transforms/opacities animate; compositor hints are removed at rest. Images and dome alignment are unchanged.
- Reduced motion uses static images and native scrolling, with no gesture listeners. Changing the preference during playback removes the motion behavior. No-JavaScript users retain meaningful conceptual content and disabled jump controls.
- Added top shading to keep navigation readable while the page stays still over the moving camera. Proposed/conceptual labels remain visible, including beside both reduced-motion images.

The user explicitly requested this bounded interaction, superseding the earlier blanket prohibition on wheel interception for this proof. `AGENTS.md` records the narrow exception and the required exits.

## Real validation

- ESLint, strict TypeScript, production build and environment checks passed. The original 14 prototype files remain byte-identical; only `/proof/cbg` exists as an application route.
- Chrome checks passed: a **single** wheel event advanced without further input, held at progress .64 with full detail/caption opacity and unchanged page position, then released to a fresh downward gesture.
- A 12,000-pixel wheel event did not skip the animation. Thirty rapid 800-pixel wheel events kept the scene in view; native scrolling resumed after the gesture paused.
- Reverse playback, replay, held-key repeat suppression, subsequent keyboard continuation, visible Skip, Escape, skip-link navigation and live reduced-motion cleanup passed. No application runtime exception was recorded.
- Responsive checks passed at 1440×900, 390×844, 320×568, 844×390 and 1920×1080: no sampled image gaps, horizontal overflow or lost concept label; the held detail stayed sharp at its intended cover scale.
- Chrome touchscreen events via CDP in mobile emulation confirmed one swipe starts playback, ends at CBG without page movement, and a new swipe scrolls normally. This is not a physical-phone test.
- Production fallback checks returned HTTP 200, loaded both static images without camera transforms under reduced motion, and retained the description with JavaScript disabled.
- The mechanical design detector returned no findings for the scoped implementation. This does not establish complete accessibility or design quality.
- Both supplied image SHA-256 hashes still match the prior manifest; see `source-images.json`.

Scripts and actual outputs are beside this report: `validate.txt`, `browser-result.json`, `touch.txt`, `touch-result.json`, `fallbacks.txt`, `fallback-result.json`. `one-scroll-review.webm` shows one downward gesture, a stationary detail hold, an upward return, a large downward flick playing the full approach, and a fresh gesture leaving the scene. `scroll-filmstrip.jpg` contains actual extracted recording frames, indexed in `video-frames.json`.

## Evidence limits

The independent motion review returned **ship for the isolated review-only proof**, with no material fix or recapture required before user review. See [MOTION-REVIEW.md](MOTION-REVIEW.md). User visual approval remains pending; this is not a production or physical-device certification.

`motion-normal/` and `motion-reduced/` capture the same control, URL and viewport region. Their CSS-animation detector reports zero duration because it does not scrub GSAP's JavaScript clock. Those reports cannot certify this animation's timing or smoothness; the actual recording and browser state measurements supply path evidence. Local rAF intervals are recorded separately and are not hardware FPS or field Core Web Vitals measurements.

The supplied images still differ in surrounding structures, proportions, terrain and lighting. The short aligned dissolve can show those differences; timed playback does not fix source geometry. Physical-device, assistive-technology and slow-network validation remain outstanding. Before image decoding finishes, the static page deliberately remains freely scrollable rather than trapping a visitor behind loading assets.

No original asset or prototype was edited. No new imagery, dependency, database change, full website or deployment was created.
