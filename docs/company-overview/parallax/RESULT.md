# Company overview redesign — 17 November 2026

The existing overview section now uses an editorial statement, an offset agriculture landscape, a floating harvest detail and a forest-green development panel. The established Rivanta typography, colors and page edges remain. Two new Indian agriculture illustrations replace the repeated hero/campus images, following the user's correction. Both are clearly labeled as AI illustrations and described as illustrative in alt text. Their exact prompts and provenance are in image-provenance.json and the asset sidecars.

The overview is still a Server Component. CSS view timelines give the main image and inset different scroll speeds; text follows normal native page scrolling. No dependencies, client boundary, animation loop or wheel guard were added. Browsers without view-timeline support retain the static composition. Reduced-motion preference changes disable and restore parallax without reload.

## Verified

- Final npm lint, TypeScript and production build passed. Environment checks passed, including byte identity for all 14 original standalone prototype files and the existing proof-route redirect.
- Microsoft Playwright CLI with real Chromium: 1440×900, 1920×1080, 1024×768, 768×1024, 390×844, 320×568. No horizontal overflow; new images loaded, captions and text stayed within the section, link target height 48px, heading below the header. Full-section and viewport screenshots recorded and visually inspected.
- Actual wheel scrolling advanced the page from 812 to 1052px and changed both image transforms. Reduced motion set both transforms to none; live preference restoration worked. Profile arrow stays static in reduced motion.
- Keyboard skip, section focus and profile-link focus passed. Mobile disclosure and Escape passed.
- Four actual one-gesture journey chapters still stop at Silicon, CBG, SAF and Renewable Energy, then release native scroll. The original journey implementation was not edited.
- Server-rendered content and real profile link worked with JavaScript disabled; both images decoded with a 200ms-latency, 750KB/s download throttle. No field performance claim is made.
- Both new image URLs are distinct from each other and the existing journey images. No acreage or operating achievement claims were introduced.
- No application pageerrors in the final run. Existing favicon request returns 404 and remains outside this section change.
- Measured text contrast is at least 5.35:1 across sampled headings, copy, links and captions; secondary body copy is at least 6.20:1. Built production HTML contains the overview, both agriculture labels, AI illustration disclosure and the real profile link.
- The Impeccable detector reported [] for the redesigned component/CSS before the user's subsequent agriculture-image substitution. The image substitution retained that structure; the final visual review is recorded separately.

The browser script initially needed corrections for test assumptions (menu toggle state scheduling, reused fragment navigation, and screenshot-induced scroll position). The final script uses fresh navigations and an explicit parallax start position; the recorded final run passed. Failed intermediate runs are not evidence of passed checks.

## Artifacts and limits

Browser result and executable validation steps: browser-result.txt and validate.txt. Image generation used the built-in image_gen tool. Source outputs remain at the paths in image-provenance.json; optimized final assets live in image/overview/ (approximately 618KB and 228KB before Next Image response optimization). Prompt scan: two assets, zero missing provenance records.

Local implementation only. No deployment, database work, new pages or full-site expansion. No physical-device, older-browser or field Core Web Vitals validation. Final visual approval remains with the user.

