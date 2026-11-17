# Our Businesses — implementation result

Added `OurBusinesses` after `IndiaChallenges` on the local homepage, before the existing footer. The section presents Silicon & Advanced Materials, Compressed Biogas, Sustainable Aviation Fuel and Renewable Energy. Four desktop columns become two on tablet and one on narrow mobile. All copy is server-rendered and visible without opening controls.

The final appearance follows the user's latest correction: existing cream background, dark type and muted green statement, with the established serif/sans families. The first dark-background draft was rejected and replaced. No global palette/font changes or extra packages were introduced. Images have a small hover/focus zoom and link arrows respond to hover; reduced motion stops both transforms.

## Images and truth

Built-in image_gen produced four distinct sector illustrations, saved and optimized in the workspace:

- `image/businesses/biogenic-silica.webp`: white powder with rice husks, not stones/crystals. The copy accurately describes biogenic silica and evaluates silicon pathways.
- `image/businesses/industrial-cbg.webp`: digesters and upgrading equipment inside industrial premises with an internal road, building and boundary.
- `image/businesses/aviation-fuel.webp`: an unbranded aircraft context, with no airline/fuel-use claim.
- `image/businesses/renewable-energy.webp`: solar and wind in an Indian landscape. A second composition keeps the turbine blades and panels visible in both portrait and landscape crops.

Final WebP assets total 636,998 bytes before responsive Next.js delivery. They are lazy-loaded with intrinsic dimensions, blur placeholders and responsive sizes. Exact selected prompts, source paths and dimensions are recorded in `image-provenance.json` and each asset's `.webp.json`. The original prompt set and the selected renewable revision are saved here. Prompt provenance scan: 4 rasters, 0 missing. No repeated site image is used. Non-selected generated originals remain outside the website.

Descriptions use developing/evaluating/exploring intent. The section includes the feasibility/engineering/regulatory qualification and truthful non-operational alt text, while honoring the user's request for no visible AI/proposed badges. No capacities, approvals, partners, environmental results or product specifications are invented.

## Validation

- ESLint, TypeScript and production Next.js build passed on final code. The targeted Impeccable detector returned `[]`.
- Microsoft Playwright CLI checked 1920, 1863, 1440, 1024, 768, 390 and 320px. Four images loaded uniquely, four business headings and all supporting copy remained visible, shared bounds held and no horizontal overflow occurred. The section follows the challenges in DOM/reading order.
- Four links passed keyboard-order and visible-focus checks. Normal hover, reduced motion, 200% CSS zoom, native scrolling and no-JavaScript content passed. Minimum sampled text contrast 5.35:1. No page errors recorded.
- Actual CBG link activation navigated to the company CBG page with its matching title. Direct HTTPS GET checks returned 200 for all four existing destination pages; detailed copy basis is recorded in `content-sources.json`.
- Regression playback visited Silicon, CBG, SAF and Energy in order, held at each chapter, then released native scrolling with the new section still present. Original journey source and standalone prototype were untouched.
- All seven final section captures plus the focus capture were opened and checked. The section-only shots hide the fixed header/skip link for isolated evidence; focus retains real page context. A separate fresh scoped review is saved in `FINISH-REVIEW.md`.

## Limits

Local implementation only; no deployment. The imagery is illustrative, not evidence of operating assets, proven chemistry or approved engineering. Links open the existing public company pages; no new local business detail pages were created. No real-device field performance, full accessibility audit or measured web-vitals result is claimed. The initial browser load had the existing favicon 404; intermediate quality 85 warnings were corrected by using configured quality 90. The final browser run had no page errors. Final aesthetic approval remains with the user.
