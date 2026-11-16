# Motion review — golden-hour CBG proof

**Disposition: ship for user review.** The supplied evidence supports a coherent, reviewable `/proof/cbg` transition with the replacement image. This is approval to present the isolated proof to its user, not a claim of a perfectly seamless 3D camera move or production/device performance certification. Visual approval remains with the user.

## continuity

The actual-recording filmstrip and extracted frames show a clear campus approach, a brief handoff around the dome, a settled close-up, a return to the campus, and a subsequent reverse traversal. The dome remains a useful visual anchor across the image change. The captured entrance (3.4–4.4 seconds) and return (10.3–11.6 seconds) preserve the intended direction; no exposed stage edge or blank transition appears in the reviewed frames. The browser result reports matching forward/reverse transforms and opacity at the same sampled progress values.

The exact half-blend in `desktop-0.32.png` still reveals slight doubling in the dome contour, conveyor, trees, and distant terrain. These two conceptual images differ in structure, lighting, and texture. Anchoring the dome cannot make every feature register. This reads as a controlled dissolve between related views, with a visible material change, rather than a single verified physical camera move. The remaining mismatch is an asset limitation and should be described that way.

## craft

One focal sequence carries the experience. Copy clears before the image handoff and returns after the detail has settled. The detail hold is materially sharper than the enlarged master image and is not obscured with a blur effect. The desktop close-up keeps the conveyor and dome legible; the mobile capture makes the dome the focus while retaining the proposed/conceptual status and readable copy. The image, typography, and restrained progress indicator support the same hierarchy.

The normal motion-capture report detects zero CSS animation duration and no animations. Its empty findings are not evidence of a smooth GSAP path. Its frames demonstrate the button's settled destination only. The full-path review here instead relies on the timestamped frames extracted from `scroll-review.webm`, the separate half-blend capture, and the browser assertions. A frame sequence cannot expose every possible inter-frame hitch.

## reduced_motion

The reduced-motion filmstrip and frame show an intentional static reading/navigation alternative with the proposed-facility explanation retained. The same `View CBG` interaction reaches relevant content without the long pinned approach. `browser-result.json` reports zero pins, visible detail, and the description present. This supports the reduced-motion result at the recorded desktop viewport; the evidence does not independently certify every preference-change, device, or assistive-technology combination.

## material_fixes

No blocking implementation fix is indicated before user review at this proof's scope. Keep the structural mismatch explicit. If the user requires an imperceptible continuous camera move, the next material requirement is a spatially consistent image pair or an approved scene/asset approach; lengthening this dissolve or adding blur will not correct geometry.

Physical-device and slow-connection validation remain unmeasured here. `record-result.json` records 993 browser rAF observations with approximately 16.7 ms median, 16.8 ms p95, and zero intervals over 50 ms in the scripted recording. This supports that particular run only and does not certify physical FPS, compositor presentation, field Core Web Vitals, or mobile hardware behavior. Do not turn it into a general smoothness guarantee.

## keep

- Dome-based continuity and the brief image handoff.
- The sharp replacement image during the hold.
- Matched return/reverse behavior in the sampled browser results.
- Native scroll, one focal sequence, and the reduced-motion static path.
- Adjacent proposed/conceptual labels on desktop and mobile.
- The isolated proof and the user's final visual approval gate.

## Evidence reviewed

Read both motion-capture reports and inspected their filmstrips and representative frame PNGs. Inspected `scroll-filmstrip.jpg`, `video-frames.json`, actual-recording entrance/hold/return/reverse frames, `desktop-0.32.png`, and `mobile-detail.png`. Read `browser-result.json` and `record-result.json`. No browser session, source edits, new render, hardware test, or deployment was performed by this reviewer. The only authored file is this review.
