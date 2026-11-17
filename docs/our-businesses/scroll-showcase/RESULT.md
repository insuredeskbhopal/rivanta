# Our Businesses — native-scroll showcase

The latest request asks for a much more creative section after screenshots rejected equal brochure columns, oversized overlapping photo tiles and compact split cards. Those versions are superseded. The current implementation replaces the multi-card grid with four large photographic chapters in document order: Silicon & Advanced Materials, CBG, SAF and Renewable Energy.

On wide, tall desktop viewports with normal motion, CSS sticky positions stack the chapters beneath the existing header, with 18px offsets. Large serif titles and 18px supporting copy sit beside contained half-width photographs. Native scrolling advances the presentation. The accepted cream background, website font families, all descriptions/links, selected white-powder/industrial-CBG imagery and company-status qualification remain intact.

No client boundary, scroll listener, timed playback or new dependency was introduced. Reduced motion, viewports at/below 1100px wide, and heights below 780px use normal static flow. Mobile stacks each image above its content. Keyboard-visible focus unpins its panel, allowing focused links to be reached without leaving a previously focused panel on top; pointer clicks retain the normal visual position.

## Verification on final source

- ESLint, TypeScript and production Next.js build passed. The targeted design detector returned `[]`. Prompt provenance scan: 4 assets, 0 missing; no image file was replaced.
- Playwright CLI checked reduced-motion/static layouts at 1920, 1863, 1440, 1024, 768, 390 and 320px, with four unique loaded images, all headings/copy/actions visible, correct source links and no horizontal overflow. These whole-section captures explicitly show the fallback, not the normal desktop sticky appearance.
- Normal 1440×900 desktop chapter checks found sticky tops 104/122/140/158px, 680px panels, headings clear of the header, and each active paragraph and action inside the viewport and unoccluded. Actual normal 1920×1080 and a native-wheel transition were captured separately.
- Four links passed keyboard order, visible focus, viewport and hit-target visibility assertions. Runtime reduced-motion changes remove sticky and hover movement. Short 650px viewport height falls back to static flow. 200% CSS zoom and JavaScript-disabled content passed. Minimum sampled text contrast: 5.35:1. No page errors recorded.
- A real wheel gesture moved the page 300px; End reached the footer. Actual CBG link activation reached the public company CBG page with its matching title. The existing integration script was also rerun on the final layout to check Silicon→CBG→SAF→Energy playback and native-scroll release.
- All fourteen final captures were opened: seven static fallback widths, four normal desktop chapter states, normal 1920, the transition and keyboard focus. Static-only screenshots hide the fixed header/skip link for isolated section evidence; normal chapter, transition and focus images retain the page header.

Files: `browser-result.txt`, `native-result.txt`, `integration-result.txt`, the corresponding run-code scripts, `static-*.png`, `chapter-*.png`, `user-1920.png`, `stack-transition.png`, `focus.png`. The fresh full review is stored in `FINISH-REVIEW.md`. Older reports cover older layouts and are not treated as approval of this direction.

## Limits

This is local implementation only. User aesthetic acceptance remains theirs. No deployment, real-device performance, full accessibility audit or field web-vitals result is claimed. Generated images remain illustrative rather than actual Rivanta assets, proven chemistry or approved engineering. The existing global system, hero source, original standalone prototype and surrounding sections were not changed. This pass adds no new commercial claims.
