# Silicon → CBG → SAF ordered proof

16 November 2026. Preview: `http://localhost:3000/proof/cbg`. Scope remains the isolated review-only proof; user visual approval is pending.

## Changes

- Added the supplied **Golden-Hour Silicon Plant Panorama.png** (1672×941) as the first facility. The existing CBG image and latest Sustainable Fuels SAF image remain in use. No source image was edited or generated.
- The order is **campus → Silicon → CBG → SAF**. First gesture: 2.6-second approach to Silicon and a reading hold. Next fresh gestures: 3.6-second campus bridges to CBG and SAF, with a reading hold after each. The next downward gesture after SAF resumes native page scrolling.
- Upward gestures reverse one chapter at a time: SAF → CBG → Silicon → overview. The plant-to-plant reverse takes 3 seconds; the final return to the overview takes 2.1 seconds. The opening headline stays hidden during plant-to-plant travel.
- Generalized the camera into shared plant framing/bridge calculations and the gesture controller into ordered stops. Explicit navigation follows the same ordered path; Replay starts at Silicon. Updated navigation, image/caption order, static descriptions, metadata and reduced-motion content consistently.
- Silicon uses the left-hand process columns as its approximate visual anchor: source (240,148), master (320,684), ratio 5.3. CBG uses the dome and SAF uses its calibrated roof anchor. These are concept-image pixels, not approved plant positions or engineering measurements.
- Subject framing also applies below a 1.6 viewport aspect ratio, keeping Silicon's columns visible on portrait tablets and narrower desktop windows.
- Each reading hold shows its actual close-up at normal cover scale. Concept labels remain adjacent to the imagery. Added a meaningful Silicon description and source-image link for no-JavaScript users.
- Fixed an observed caption/status overlap during playback on short screens. The sampled 320×568 gap changed from −26 px to **15 px**; 844×390 changed from −4 px to **56 px**. Skip remains visible and captions remain readable while the motion finishes.
- Skip, Escape, keyboard control, fresh-gesture/momentum handling and free scrolling outside the stage remain. Reduced motion removes camera transforms and gesture listeners, and presents all four images in the requested order.

## Actual validation

- ESLint, TypeScript, production build and environment checks passed. The earlier temporary UTF-8 source-encoding error was corrected before final validation. The development route returns HTTP 200.
- Real Chrome assertions confirmed separate **Silicon, CBG, SAF** stops from three wheel gestures, each tested with a 12,000-pixel delta. Each chapter advanced over time instead of skipping; sampled master bounds stayed covered and the intro remained hidden between plants.
- Reverse order and reading-hold matrices matched. Replay, direct navigation, keyboard repeat suppression, fresh-key native departure, visible Skip, Escape and skip-link navigation passed. No application runtime exception was recorded in the successful tour test.
- Actual optimized response bitmaps were decoded: Silicon **1672×941**, CBG **1774×887**, SAF **1672×941**, with the correct filenames. No resolution improvement was inferred from HTML naturalWidth or from enlarging the master.
- All three holds passed at **1440×900, 390×844, 320×568, 844×390 and 1920×1080**: correct labels, full copy/image opacity, no horizontal overflow, cover framing and no unnecessary extra zoom. Short-screen playback spacing was checked separately while Skip was visible.
- Additional **768×1024 and 1000×760** checks passed for all three destinations: cover bounds, concept labels, no horizontal overflow and no page movement. Both Silicon column anchors stayed inside the frame; `tablet-measurements.json` and the tablet screenshots record the result.
- Chrome CDP touchscreen events in mobile emulation confirmed swipe 1 → Silicon, swipe 2 → CBG, swipe 3 → SAF and swipe 4 → native scrolling. This is not a physical-device result.
- Initial and live reduced-motion checks confirmed Silicon/CBG/SAF order, all four static images, no pin and cleared transforms/listeners. JavaScript-disabled users retained Silicon's description and image link; jump controls were disabled. A deliberately aborted Silicon image request showed the error and descriptions without activating motion or trapping scrolling.
- The scoped design detector returned no findings. All original-image hashes match `source-images.json`; all 14 original prototype files remain byte-identical.

Scripts and actual measurements are beside this report: `validate.txt`, `responsive.txt`, `tablet.txt`, `spacing.txt`, `touch.txt`, `fallbacks.txt` and their corresponding `*-measurements.json` outputs. `silicon-cbg-saf-review.webm` records the real production journey, plant-to-plant reverse, large-flick advances and final native departure. Its 1440×900 framing is unchanged by the tablet-specific adjustment. `scroll-filmstrip.jpg` and `video-frames.json` index actual extracted video frames.

## Limits

The independent motion review returned **ship for the isolated review-only proof**, with tablet framing and short-screen spacing resolved. See [MOTION-REVIEW.md](MOTION-REVIEW.md). User visual approval remains pending; this is not certification of a production-perfect scene or physical-device performance.

The supplied plant images overlap in depicted structures and differ in proportions, terrain and lighting. Facility names are user-designated **proposed concepts**; the imagery does not verify any process or operating facility. The shared anchors and blends do not establish a perfectly identical 3D scene.

Normal/reduced and forward/reverse control captures use the same route, viewport and controls. The tool's zero CSS-animation duration does not measure GSAP's JavaScript clock; actual recording frames supply movement evidence. Local rAF observations are not hardware FPS or field Core Web Vitals results. Physical-device, assistive-technology and slow-network checks remain outstanding. All four images are decoded before enabling the gesture experience; static content stays available while loading.

No new dependency, database change, original prototype modification, remaining plant image, full website or deployment was created.
