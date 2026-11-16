# Fourth view — Proposed Renewable Energy

16 November 2026. Preview: http://localhost:3000/proof/cbg. Review-only proof; visual approval remains pending.

## Implemented

The supplied `Golden-Hour Renewable Energy Campus.png` is now the fourth plant view: **Silicon → CBG → SAF → Renewable Energy**. Its solar panels and wind turbines are described as conceptual. Equipment, scale, layout, operations and usage rights remain unverified. The source is 1672×941 pixels; no higher-resolution or operational claim is made.

The same camera sequence is retained: zoom into a plant, pull back, travel laterally across the original campus and approach the next plant. The new SAF → Energy bridge takes 3.6 seconds and holds at Energy until a fresh gesture; native page scrolling then resumes. Reverse travel, direct navigation, replay, Skip, Escape and keyboard controls include the fourth stop. Reverse playback uses neutral return wording rather than naming the forward destination. Stage progress now completes at Energy. The rejected intermediate campus image remains absent.

Added the Energy image, conceptual caption, navigation, review control, metadata and no-JavaScript description/link. Mobile controls accommodate the longer label. Approximate turbine-hub pixels guide the new camera destination; they are neither site coordinates nor engineering registration. The original source and standalone prototype remain unchanged. No dependency, generated image, database change, other route, deployment or full website was added.

## Real validation

- ESLint, strict TypeScript and a production Next.js build passed. Environment checks passed pinned dependency/lockfile parity, configuration loading, Tailwind compilation and byte-identical checks of all 14 original prototype files.
- Playwright passed four ordered large-wheel chapter holds and reverse travel through Energy → SAF → CBG → Silicon → overview. Reading plates are fully covered, and no page movement occurs during the bounded chapters. Direct Energy navigation, keyboard progression beyond SAF into Energy, replay, Skip, Escape, skip-link navigation and native departure after Energy passed. No application page errors were recorded.
- Sixteen responsive reading holds passed at 390×844, 320×568, 844×390 and 1920×1080, plus the primary 1440×900 browser run. Headers stay inside the viewport, copy clears concept labels, image bounds cover the stage and no horizontal overflow is present in these checks. The Energy plate stays at normal cover scale.
- Targeted Energy endpoints passed at 768×1024 and 1024×768 using direct navigation plus Escape; these are framing checks rather than full timed tablet tours. A 320×568 static reduced-motion page retained five images with no horizontal overflow.
- Live reduced-motion switching removes spatial transforms and gesture handling, retaining all five stage images and the four-plant order.
- Actual Chrome CDP touchscreen events in mobile emulation passed one swipe per chapter, followed by native scrolling on the fifth swipe. These are browser-emulated inputs, not physical-device results.
- The production no-JavaScript browser returned HTTP 200 and exposed all four facility descriptions; no motion initialized.
- The clean production recording lasts 44.17 seconds and covers forward and reverse travel. Samples verify pullback, lateral movement and approach on all three bridges. At 1440×900, the new SAF → Energy bridge moves the campus roughly 301 CSS pixels laterally during the central travel segment; this is a screen-space observation, not a physical distance.
- Previous source hashes match; the new image's SHA-256 is recorded in the manifest. The mechanical design detector reports no findings.

[Browser checks](browser-measurements.json), [responsive checks](responsive-measurements.json), [touch checks](touch-measurements.json), [no-JavaScript checks](fallback-measurements.json), [camera samples](record-measurements.json), [recording](silicon-cbg-saf-review.webm), [extracted frames](scroll-filmstrip.jpg), [source manifest](source-images.json), [additional viewport checks](extra-viewports-measurements.json).

## Limits

The supplied concept renders differ in geometry, lighting and camera projection. The moving blends can still show doubled structures or a change of framing; this is not an invisible transition between registered views of a single model. The small campus source may soften briefly during camera travel. No warping, artificial blur, sharpening or recovered source detail is claimed.

All five stage images must decode before animated playback is enabled. Local browser checks and recording do not establish field Core Web Vitals, slow-network performance, physical-device frame rates or production asset rights. The pre-existing development favicon request still returns 404; no unrelated icon work was added.

## Motion evidence limits

The four `production-normal/`, `production-reduced/`, `production-reverse/` and `production-reverse-reduced/` capture sets each contain eleven frames with zero CSS-detector findings. The tool reports zero duration because it cannot scrub imperative GSAP animation. These endpoint captures are not a smoothness measurement. The production recording and 36 extracted frames provide the intermediate motion evidence.

## Independent motion review

[Fresh motion review](MOTION-REVIEW.md): **ship, scoped to the isolated proof being ready for user visual review**. The reviewer found the new bridge, reverse travel, covered holds and static reduced-motion alternative supported by the evidence. No material implementation fix was required. Visible blend doubling, changes in geometry/light and campus softness remain asset limitations. Visual approval and physical-device performance remain unverified.
