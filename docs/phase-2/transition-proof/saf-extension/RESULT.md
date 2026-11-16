# Campus → CBG → SAF proof

**Image superseded:** the user replaced the SAF panorama with `Golden-Hour Sustainable Fuels Plant.png`. See [the current SAF result](../saf-replacement/RESULT.md). This report and its recording describe the previous image; visual approval was not inferred from the interrupted work.

16 November 2026. Review at `http://localhost:3000/proof/cbg`. The user explicitly authorized extending the isolated proof with `Golden-Hour Industrial Plant Panorama.png` as the proposed SAF reference. No full website or additional plant imagery was created. Visual approval remains pending.

## Interaction and camera

- First downward gesture: the existing 2.6-second campus-to-CBG approach, then a stationary reading hold.
- Second fresh gesture: a **3.6-second** CBG → campus bridge → SAF sequence, then a second reading hold. The opening headline stays hidden throughout this connection.
- The CBG detail dissolves out around the dome; the master camera pulls back enough to reveal surrounding context, pans right and approaches the tall tower used as SAF's visual anchor. A short tower-aligned dissolve introduces the detailed SAF image, followed by a small settling movement.
- The bridge uses bounded, uniformly scaled image transforms. It does not reset to the opening composition, warp machinery or imply an engineering-accurate 3D flight.
- SAF holds at normal cover scale with the actual **1672×941** source, quality-90 delivery, readable proposed-facility copy and the visible label **Proposed SAF · Concept visualization**. No additional zoom is applied during the reading hold.
- The next fresh downward gesture after SAF returns to native page scrolling. Upward gestures reverse SAF → CBG in 3 seconds and CBG → campus in 2.1 seconds, stopping at each chapter.
- The existing bounded wheel/touch/key guard continues to absorb repeated input and momentum during a chapter; a 180 ms wheel pause separates gestures. Skip, Escape, links, Tab, Home/End, browser zoom and scrolling outside the full stage remain available.
- Added View SAF and Inspect SAF controls. Direct navigation can traverse both chapters when starting at the overview. Replay still starts with the original CBG approach.
- Reduced motion shows all three static images, proposed labels and both facility descriptions. Live preference changes remove motion listeners/transforms. No-JavaScript users retain both descriptions and a direct link to the supplied SAF image.

## Real verification

- ESLint, strict TypeScript, production build and environment checks passed. Only the authorized `/proof/cbg` application route exists; all 14 standalone prototype files are byte-identical.
- Desktop Chrome assertions confirmed both separate gesture destinations, an actual pullback to a wider master view, no reappearance of the introductory headline, no sampled blank image edges, and stationary reading holds.
- A 12,000-pixel wheel input still played the SAF chapter over time rather than skipping directly to the end. Reverse returned to the same CBG matrix as the first reading hold.
- The chosen tower anchor stayed within the browser test's 2 CSS-pixel tolerance during the core SAF blend. This is a single approximate image-space anchor; it does not establish whole-image registration or a verified plant location.
- The actual optimized SAF bitmap was fetched and decoded at **1672×941**. Responsive holds were verified at 1440×900, 390×844, 320×568, 844×390 and 1920×1080, with no horizontal overflow or lost proposed label.
- Keyboard advance/repeat suppression, next-key native departure, Escape, visible Skip, replay and the skip link passed. No application runtime exception was recorded.
- Real Chrome CDP touch events in mobile emulation confirmed first swipe → CBG, second swipe → SAF, third swipe → native page movement. This is not a physical handset test.
- Initial and live reduced-motion checks confirmed three static images, no pin, cleared transforms/listeners and available descriptions. Production fallback returned HTTP 200; JavaScript-disabled controls remained disabled, with the SAF description/image link available.
- The scoped mechanical design scan returned no findings. It does not certify complete accessibility or aesthetic quality.
- All three original-image hashes match the recorded sources. `source-images.json` records dimensions, hashes and concept status. No source image was edited, generated or upscaled to invent detail.

Actual scripts and outputs are stored beside this report: `validate.txt`, `responsive.txt`, `touch.txt`, `fallbacks.txt` and their `*-measurements.json` files. `cbg-to-saf-review.webm` records the actual production route through CBG and SAF, the reverse, a large-flick SAF approach and native departure. `scroll-filmstrip.jpg` and `video-frames.json` index frames extracted from that recording.

## Limits and review evidence

Normal/reduced and forward/reverse control captures are in `motion-normal/`, `motion-reduced/`, `reverse-normal/` and `reverse-reduced/`. The detector's zero CSS-animation duration does not measure GSAP's JavaScript clock. The full recorded tour and actual browser state samples supply the movement evidence; local rAF observations are not a hardware FPS or field Core Web Vitals certification.

The three supplied renders have differences in equipment proportions, terrain, vegetation, lighting and relative positions. The user-designated SAF view overlaps the CBG area. Dome/tower anchoring improves the edits but cannot remove those differences. An imperceptible same-scene transition still requires consistently authored source assets. The SAF designation is a conceptual user assignment, not technical validation of the depicted process.

Physical-device, assistive-technology and slow-network testing remain outstanding. During initial image loading or image failure, meaningful static content remains freely accessible instead of locking the visitor behind an animation.

No new dependency, database change, original prototype modification, remaining plant asset, full-site page or deployment was made.
