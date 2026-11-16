# Rivanta cinematic animation: review, suggestions and implementation plan

Reviewed 16 November 2026. Reference: `rivanta-cinematic-scroll/`. This document is a planning deliverable; it does not authorize or implement website changes.

## Recommendation

Recreate the reference's eight-chapter aerial-to-facility journey in Next.js using images, GSAP and ScrollTrigger. Keep its wide view, location approach, detail crossfade, text reveal and return to the campus. First match that behavior, then refine it. Use Lenis only if a comparison with native scrolling demonstrates an improvement. Do not add Three.js for this version.

The current effect can be reproduced with the installed stack. Premium quality will depend chiefly on consistent, sufficiently detailed imagery, careful camera framing, readable pacing and correct behavior on phones. Animation code alone cannot turn inconsistent concept pictures into a realistic, geographically coherent campus.

## What the folder actually does

- Uses plain HTML/CSS/JavaScript; it does not currently use GSAP, Lenis, Three.js or React.
- Displays a full-screen aerial hero with light scroll parallax.
- Holds one sticky campus stage while eight empty chapter blocks provide scroll distance.
- Calculates a chapter and local progress from the total chapter height, then applies image translation/scale and opacity changes through a requestAnimationFrame-coalesced scroll handler.
- Runs CBG → biomass → captive power → bio-silica → silicon → SAF → solar → wind.
- Each chapter returns to the wide aerial before switching to the next focus. This is a camera-like movement over a flat image, followed by a crossfade to a separate image; there is no continuous 3D flight or perspective change.
- Provides chapter links and progress indicators. Concept images and demonstration coordinates are explicitly acknowledged in its README.

### Current choreography

These intervals overlap. They are fractions of scroll distance within a chapter, not elapsed seconds.

| Chapter progress | Existing behavior |
| --- | --- |
| 0–2.5% | Wide view |
| 2.5–36% | Approach location; zoom reaches 3.15× desktop or 2.9× mobile |
| 13–46% | Location marker fades in, then out |
| 30–52% | Crossfade into facility detail |
| 44–57% | Text appears with a 24px upward reveal |
| 57–75% | Text fully visible |
| 75–88% | Text disappears |
| 77–94% | Detail fades out |
| 78–99% | Return to wide view |

## Findings and prioritized suggestions

Evidence comes from source inspection, screenshots and actual Chrome runs at 1440×900 and 390×844. This is not a physical-phone, GPU or field-performance benchmark. Browser measurements are saved in `measurements.json`; reduced-motion verification is in `reduced-motion-evidence.json`.

| Priority | Finding | Recommendation |
| --- | --- | --- |
| P0 | Mobile Wind link landed on Solar; Biomass initially landed in the previous chapter. Actual chapter heights vary while the script divides the overall distance into eight equal portions. | Use one timeline with named chapter labels and derive every link, active state and progress indicator from that same timeline. Link to each chapter's readable detail state. |
| P0 | The last scene releases early. At Wind's 58% point, its stage top was already -309px at a 900px viewport. | Give the timeline its full usable pinned scroll distance, including the complete final hold and return. Release only after the last chapter finishes. |
| P0 | Reduced-motion emulation still changed the aerial from scale 1 to 3.15. The preference only guards hero parallax in JavaScript. | Provide a static facility overview with all content accessible. Disable spatial zoom, parallax and long pins; respond to preference changes during the session. |
| P0 | The stage's concept disclaimer is hidden by the mobile stylesheet. | Keep a readable “Proposed campus · Concept visualization” label visible throughout every scene on every screen size. Clarify that third-party photographs are representative if used. |
| P0 | Without JavaScript, facility text remains at opacity zero and only the initial CBG content exists in that panel. | Server-render semantic facility sections. Enhance their presentation with motion; keep a complete, readable fallback when JavaScript, image decoding or motion setup fails. |
| P1 | Mobile chapter links measured 33×2px; their visible text is hidden. | Give controls at least 44×44px interaction areas, explicit accessible names, keyboard focus and usable spacing. A compact chapter menu may work better than eight tiny dashes. |
| P1 | The aerial is 1672×941, facility details are 960×640, and the close approach visibly softens. | Obtain higher-detail assets with a consistent viewpoint. Use responsive crops and sharp region images as the camera approaches; do not solve this simply by sending a huge master image to every device. |
| P1 | Separate facility images change viewpoint/layout during the crossfade, revealing the transition rather than suggesting a continuous approach. | Produce the aerial and facility views from the same approved/conceptual master scene and lighting direction. Match the focal point and visual composition during the blend. |
| P1 | The pin and its label scale with the aerial; they become very large during the approach. | Render markers in screen space and project their position from the camera transform, keeping label size stable. |
| P1 | Fully visible text occupies only about 18% of a chapter. On desktop that is roughly 253px of scrolling. | Lengthen the reading plateau. Let visitors stop indefinitely, jump directly to a facility or leave the tour. Do not depend on slow scrolling to communicate essential information. |
| P1 | Every detail image is eagerly loaded and carries permanent will-change hints; the scroll loop also reads layout and writes styles repeatedly. | Decode the current/next scene before a transition, limit active layers, cache geometry and refresh it on meaningful layout changes. Keep frame updates to transforms/opacity. Measure rather than assume a frame rate. |
| P2 | Eight identical cycles can feel repetitive. | Keep the shared movement language; after the faithful baseline, consider subtle per-facility framing and a stronger opening/closing. Do not introduce eight unrelated effects. |

Other inherited issues include the missing favicon and small status labels. They are secondary to the animation, navigation and truthfulness issues above.

## How far the quality can go

| Approach | What it can achieve | Requirements / tradeoffs | Recommendation |
| --- | --- | --- | --- |
| Faithful image-based implementation | The same zoom, crossfade, chapter structure and reverse-scroll behavior as this folder, with reliable controls | Existing assets are enough for a development comparison, but their resolution and conceptual provenance remain limitations | First implementation milestone |
| Refined image-based experience | Sharper approaches, consistent views, subtle depth from separate layers, better pacing and convincing transitions | Matched high-quality master/detail assets, authored crops, deliberate visual QA and real-device measurements | Recommended production direction |
| True 3D campus | Actual perspective changes, orbit, occlusion and movement between structures | A credible optimized 3D model, engineering/provenance review, lighting work, LODs, GPU budget and a static fallback | Separate later scope only if true 3D becomes essential |

There is no defensible percentage improvement or guaranteed “Apple-level” score to assign before the asset and device work. The installed libraries support the recommended approach; the assets are the main unresolved quality dependency.

## Proposed architecture

This is a future file/component plan, not files implemented by this review.

- Keep the page shell, project-status labels and all meaningful facility content server-rendered.
- Isolate the visual stage and animation lifecycle inside one focused client boundary.
- Store facility IDs, order, normalized focus coordinates, image crops, alt text and conceptual status in one typed dataset. Separate scene state from content.
- Use a pure camera-geometry helper that accounts for object-fit cover, viewport aspect ratio and image boundaries. Define a focal point for desktop and mobile; prevent travel that exposes empty edges.
- Use one GSAP timeline with named approach/detail/hold/return labels per facility and ScrollTrigger to coordinate its scroll position. Choose either ScrollTrigger pinning or CSS sticky with measured progress; do not make both compete to own the stage.
- Use one scoped GSAP context/matchMedia lifecycle with cleanup, image-readiness handling and refresh after resize, orientation and font/image layout changes. Verify Strict Mode remounts.
- Start with native scrolling. If Lenis is adopted, use one instance and one synchronized animation clock, with cleanup. Avoid an extra smoothing layer on top of an already scrubbed timeline without testing its latency.
- Keep Prisma/PostgreSQL outside animation playback. Static facility configuration does not need a database request on scroll. Add content administration only if separately required.

This follows the capabilities described by the official [ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), [Lenis integration guidance](https://github.com/darkroomengineering/lenis) and [Next.js server/client boundary guidance](https://nextjs.org/docs/app/getting-started/server-and-client-components).

## Suggested refined choreography

Treat these as a starting point to compare with the reference after a faithful baseline is recorded.

| Progress | Proposed behavior |
| --- | --- |
| 0–10% | Establish the wide campus and selected location |
| 10–32% | Controlled zoom and pan to that location |
| 25–45% | Blend into the matching detail view |
| 38–50% | Reveal facility heading and concise description |
| 50–80% | Stable reading plateau; no additional text movement |
| 80–92% | Fade text down |
| 85–100% | Return to the wide campus before the next chapter |

The durations should remain adjustable by content length and screen size. When scroll stops, the scene stops; no automatic progression is required. Preserve immediate response when reversing direction. Default to no forced snapping; compare optional light settling only if it does not fight user input.

## Phased implementation plan

### 1. Reference and asset preparation

Keep the original folder unchanged. Capture approach, detail hold, return, reverse scroll and direct chapter navigation as reference checkpoints. Inventory all eight scenes, image dimensions, crop positions, focal coordinates and image rights/status. Establish realistic conceptual masterplan imagery or identify where engineering input is unavailable.

**Exit:** a reviewed scene sheet, baseline screenshots, explicit conceptual labeling rules and an asset gap list. No unverified site layout is treated as approved.

### 2. One complete CBG chapter

Build the server-rendered content and one client stage in Next.js. Match the original wide → approach → detail → reveal → return sequence before adjusting its style. Fix pin duration, geometry, direct navigation and cleanup at this stage. Test native scrolling first.

**Exit:** one complete chapter works forward, backward, after reload and at desktop/mobile sizes. No blank edge, premature release or lingering event listener. The nonanimated content remains readable.

### 3. Extend to eight scenes

Drive all scenes from the typed dataset and one timeline. Use the same labels for links, active state and progress. Add current/next image preparation and predictable failure handling. Ensure Wind receives its full reading plateau and exit.

**Exit:** every direct chapter link selects the requested facility, including from outside the journey, and browser back/forward and hash reloads are defined and tested.

### 4. Visual refinement

Replace development imagery with approved production assets. Match viewpoints and detail transitions, keep markers readable and refine easing/crops. Compare the proposed longer reading plateau against the exact reference. Add restrained layered depth only where asset separation is credible.

**Exit:** reviewed desktop/mobile scene checkpoints; no unapproved change to the core journey. All proposed facilities remain visibly conceptual.

### 5. Accessibility, performance and release checks

Test reduced motion on load and live preference changes, keyboard-only navigation, zoom, no JavaScript, image failures, rapid scrolling, reverse scrolling, touch, resizing and orientation changes. Measure representative iOS Safari/Android Chrome devices as well as desktop Chromium, Firefox and Safari; browser emulation alone is insufficient.

Use 60fps on agreed representative devices as a target, not a promise. Capture frame traces, image transfer/decode costs and memory behavior. Measure Core Web Vitals against the project's established LCP/INP/CLS targets. Run the real Next.js production build once routes exist and preserve the database boundary.

**Exit:** no known chapter-selection, pinning, content-access or conceptual-label defects; documented performance evidence and any remaining limits. No simulated pass results.

## Inputs still needed for production quality

1. Approved/provisional masterplan and the factual facility order, or an explicit acknowledgment that geography is illustrative.
2. Production imagery with usage rights and matching campus/detail views; portrait crops for mobile.
3. Approved facility descriptions and evidence for any capacity, engineering, environmental or investment claims.
4. Reference desktop/mobile devices and an agreed asset/performance budget.

Existing concept images can support the first comparison milestone with clear labels. Final photorealistic output cannot be promised without suitable source material. No new dependency is required to begin the recommended image-based implementation.

## Review boundary

Only documentation and review evidence were added under `docs/animation-review/`. The prototype, Next.js application scope, dependencies, database and website content were not changed. Browser and temporary static-server sessions were closed after inspection. Implementation remains a separate next step.
