# India challenges — final implementation

17 November 2026. The section after the company overview is now an open editorial grid. All eight challenge descriptions remain visible without any click, disclosure, tab or carousel. The page uses an agricultural feature, contrasting national-data panel and two supporting image/content panels. The final design replaces the FAQ treatment rejected by the user and the earlier long dark split layout.

## Content and assets

The eight topics cover burning, air pollution, lost residue value, rural supply chains, materials import exposure, energy diversity, industrial resource loss and water management. Company actions remain aims, development or evaluation. The two numbers are historical national context, not company outputs: estimated 228 million metric tonnes/year of Indian surplus biomass and 42GW assessed power potential from the 2021 ASCI study commissioned by MNRE, cited in PIB's 15 August 2025 factsheet. Study year and source link are visible. No China-specific import, acreage, achieved environmental savings or operating-facility claim was added.

Three distinct generated images are reused from this section's asset production: Indian crop residues, agricultural materials research and water circulation. They do not repeat homepage images. Built-in image_gen was used; exact prompts, source output paths and final saved paths are in image-provenance.json. Final WebP assets total about 837KB before Next Image response optimization. Provenance scan: three rasters, zero missing prompt records. Alt descriptions identify the images accurately. The user's clean-image preference is retained.

## Implementation

Server Component plus scoped CSS grid; no new dependency, client state, listener, timer, sticky panel or scroll interception. All content is server-rendered. Static imported Next Images reserve dimensions and load lazily. Source and CTA are real anchors; company Projects destination returned HTTP 200 through direct public HTTPS. The surrounding overview, header, camera and gesture modules were not changed for this replacement.

The existing forest/cream/gold, serif/sans and shared page-edge system is inherited. The pale sage surface is local. Mobile stacks the content; tablet stacks the paired explanations to retain readable text measures. The only motion in the section is restrained CTA hover, disabled for reduced motion. No image badges or operating claims.

## Actual validation

- Final lint, TypeScript and production build passed. Environment check passed, including byte identity of all 14 standalone prototype files, route scope and the old proof redirect.
- Real Chromium via Microsoft Playwright CLI: 1920×1080, 1440×900, 1024×768, 768×1024, 390×844 and 320×568. All eight descriptions visible, zero disclosure controls, all three lazy images loaded, no horizontal overflow, text/images inside the section, heading below the fixed header. All final section captures were opened and inspected. Isolated full-section capture CSS temporarily hides the fixed header/skip link to avoid capture artifacts; live viewport focus evidence keeps them.
- Keyboard reaches the source and CTA in order, with visible focus. Reduced-motion hover remains stationary. Scrolling in the section is native. All eight descriptions work with JavaScript disabled.
- Actual Silicon → CBG → SAF → Renewable Energy playback still stops at each chapter and then releases native scrolling. Zero application page errors in the final run. The existing favicon request remains outside this change.
- Minimum sampled text contrast: 4.943:1. A 200% CSS zoom stress check found no horizontal overflow or text outside the section. CSS zoom is not a native browser-toolbar zoom test.
- Built production HTML contains the section, all eight challenge blocks, source and study year, and no former accordion name.
- Impeccable detector returned an empty list on this open-layout revision. The subsequent tablet-column and source-SVG refinements were browser/build checked; the detector was not rerun. Fresh upstream Web Interface Guidelines were read for targeted review.
- Independent finish reviewer: ship at this section's implementation scope; no material fixes or recaptures. See FINISH-REVIEW.md. This does not substitute for user aesthetic approval.

Evidence: validate-final.txt, browser-result.txt, final-*.png, focus.png, contrast-zoom-result.txt, production-html.json, interface-review.json, content-sources.json.

## Limits

Local only, no deployment. No physical-device, screen-reader, cross-engine or field Core Web Vitals claim. National statistics are historical estimates with the study year shown. Company processes, sourcing relationships, performance and regulatory status are not verified by an illustrative website section. Earlier captures remain historical layout evidence and are not final approval.
