# Company overview extension — 16 November 2026

One company overview now follows the existing cinematic home hero. It introduces Rivanta’s industrial development direction, feedstock planning, industrial integration and phased development, with a real link to the company profile. No acreage or operational achievements are asserted.

## Implementation and design comparison

`src/components/company-overview.tsx` is a Server Component passed as children through the existing client hero boundary. It adds no client animation, image or dependency. The existing forest/off-white/gold tokens, serif heading, sans body, 7vw desktop edges and native link/focus conventions are retained. The off-white reading interval contrasts with the preceding image-led journey. Three unboxed definition-list entries share one rule. Mobile stacks the same content and allows natural height. No DESIGN.md existed; this ordinary extension does not replace the design system.

The server page composes the section after the hero and before the existing footer. The skip link now targets the section. The original camera, registration and gesture files were not edited for this task. All 14 standalone prototype files remain byte-identical according to the environment check.

## Content evidence

Reference: https://www.rivantagreen.com/about, retrieved with HTTP 200 on 16 November 2026. Its development-focused company introduction, feedstock networks, engineering preparation and strategic manufacturing direction support the paraphrased overview. These are the company’s stated intentions, not independent verification of facilities or approvals. No operating outcomes, capacities or land claims were added. Existing concept imagery retains its proposed/conceptual labels.

## Actual validation

- `npm run lint`, `npm run typecheck`, `npm run build`, `npm run check:environment`: passed after the final CSS adjustment.
- Real Chromium via Microsoft Playwright CLI: 1440×900, 1920×1080, 1024×768, 768×1024, 390×844 and 320×568. No horizontal overflow or content outside the section. Mobile spacing corrected after an initial header-clearance failure, then the complete matrix passed.
- Measured new section contrast: secondary copy 7.38:1; heading 16.09:1. Profile link target height 48px. This is targeted verification, not a full WCAG certification.
- Keyboard skip and visible profile-link focus passed. Reduced-motion hover stays stationary. The section and real profile link are present without JavaScript.
- Actual four-chapter journey holds at Silicon, CBG, SAF and Power, then resumes native scrolling into the overview. Scrolling within the new section is native.
- No application page errors in this run. Existing favicon request remains outside this change.
- Production server on temporary port 3002: HTTP 200; overview and real link included in server HTML; development direction contract absent. Temporary server stopped after checking; user development server left running.
- Impeccable detector on the changed overview/page targets: empty finding list (`design-detect.json`).

Evidence: `browser-measurements.json`, `browser-result.json`, `keyboard-result.json`, `production-result.json`, viewport and full-section PNGs, `validate.txt`. Final visual review is recorded separately in `FINISH-REVIEW.md`.

## Limits

Local implementation only; no deployment, production image generation, database work or dependencies changed. Existing supplied-image structural alignment limitations remain. No field Core Web Vitals or physical-device performance is claimed. Visual acceptance remains with the user.

## Finish review

Initial fresh review found no material UI defects in the supplied evidence and requested one documentation correction. Both briefs now accurately record the inherited-system extension authority. The reviewer’s verdict is ship for that scored correction; see FINISH-REVIEW.md and FINISH-VERDICT.md. User visual approval remains pending. The direct /#company-overview URL was checked: it lands the section below the fixed header.

