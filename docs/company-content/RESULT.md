# Company content and interface cleanup

16 November 2026. Local preview: http://localhost:3000/proof/cbg.

## Changes

Removed the entire review section, approval notice, replay/inspection buttons, comparison navigation, image-blend controls, diagnostic render and related observer/math. Replaced the review-only footer with the company name and working About/Contact links. Internal research and QA records stay in docs and are not rendered on the website.

The hero now reads **Building industrial value. From India’s resources.** Its supporting copy introduces advanced materials, renewable fuels and circular manufacturing. No acreage appears in the rendered page or metadata. The company-focused title replaces the study title, and the action is “Explore our ventures”.

Added business descriptions at all four camera stops and in accessible fallback content:

- Bio-silica and silicon: rice-husk-derived silica applications and evaluation of future silicon pathways.
- Compressed biogas: agricultural residue use, renewable gas applications and planned digestate recovery.
- Sustainable aviation fuel: non-food biomass, feasibility work and potential technology collaboration.
- Renewable power: solar/wind planning, process efficiency and energy recovery.

Power replaces Energy in the public navigation. Concise proposed/conceptual labels remain next to the imagery; development intent is not presented as completed facilities, secured partnerships, certified output or achieved environmental results.

Adjusted headline sizing for narrow and short screens and strengthened the existing image shade for text legibility. The local Next.js development indicator is hidden through the documented `devIndicators: false` option; compile/runtime errors still surface normally. No dependency, new image, database change, publication or unrequested full-site build was added.

## Sources

The supplied domain spelling did not resolve. The working company website is [www.rivantagreen.com](https://www.rivantagreen.com/), which returned HTTP 200 and identified Rivanta Green Innovative Venture Private Limited. It was inspected through the local browser because the web-fetch service could not retrieve it.

Content references: [Bio-Silica & Silicon](https://www.rivantagreen.com/bio-silica), [CBG](https://www.rivantagreen.com/cbg), [SAF](https://www.rivantagreen.com/saf), and [Sustainability](https://www.rivantagreen.com/sustainability). Each returned HTTP 200. Copy is adapted to development/planning language; unsupported operating claims and quantitative achievements are omitted. Solar and wind context also comes from the user-supplied concept visual, not approved engineering.

[Company source record](source-2026-11-16.json), [venture copy and sources](venture-copy-2026-11-16.json).

## Validation

- ESLint, TypeScript, production Next.js build and environment checks passed. All 14 original standalone prototype files remain byte-identical.
- `camera.ts` and `gesture-journey.ts` match their pre-cleanup SHA-256 values. The Silicon → CBG → SAF → Power camera choreography and gesture timing are preserved.
- Actual browser checks passed the four large-wheel chapter holds, reverse navigation, Skip, Escape, keyboard skip-to-footer, native scrolling after Power, live reduced-motion cleanup and the no-JavaScript descriptions/links. No application page errors were recorded.
- Seven hero layouts passed: 1440×900, 1920×1080, 390×844, 320×568, 844×390, 768×1024 and 720×450. No headline/header collision, CTA/concept-label collision or horizontal overflow was found in these checks.
- Sixteen sector endpoints passed at desktop, mobile, narrow mobile and landscape sizes. The longer descriptions remain visible, clear the header and labels, and retain covered imagery. These layout checks use direct navigation and Escape; the separate four-chapter run checks timed playback.
- A real production-server request through `/` returned HTTP 200 after redirecting to the existing route. The company title, hero, five stage images and removal of diagnostic UI were verified in production rendering.
- The mechanical design detector reports no findings. Desktop and mobile screenshots were visually inspected. Sampled screenshot background points improved headline legibility; this is not a claim of a complete accessibility certification.

[Browser measurements](browser-measurements.json), [hero layouts](hero-layout-measurements.json), [sector layouts](ventures-layout-measurements.json), [production check](production-measurements.json), [production hero](production-hero.png).

## Remaining boundaries

The supplied renders still differ in geometry and lighting. Content cleanup does not make the blends physically seamless. Field performance, physical-device frame rates, production asset rights and engineering positions remain unverified. The pre-existing favicon request returns 404. No deployment or complete multi-page company website has been performed.
