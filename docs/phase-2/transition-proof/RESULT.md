# Single CBG scroll-zoom proof — test result

**Current revision:** the user requested company-facing content in place of the review/comparison interface. The public review tools and development copy are removed; the hero and Silicon, CBG, SAF and Power descriptions now follow company-site messaging, with no acreage in public copy. The camera journey remains. See [the current company-content result](../../company-content/RESULT.md). All details below describe historical revisions.

16 November 2026. Preview: `http://127.0.0.1:3001/proof/cbg`.

**Decision:** the technical scroll proof passes the recorded functional checks. The supplied image pair does **not** pass seamless visual alignment. User approval is pending; do not create the remaining plant images or extend this into the full website.

## What was implemented

- One isolated Next.js route, `/proof/cbg`, with a server-rendered shell and a focused client motion boundary. There is no new website homepage or additional plant route.
- Master → approach → CBG crossfade → stable reading hold → return. Native scrolling drives one GSAP/ScrollTrigger timeline; no Lenis, Three.js or new dependency was added.
- Direct CBG jump, replay, an adjustable unshaded alignment overlay and a keyboard-accessible skip link.
- Persistent conceptual labels, mobile focal framing, responsive resize handling, reduced-motion preference switching, a readable no-JavaScript fallback and safe behavior when image loading fails.
- Exact supplied originals are imported through Next.js Image. The supplied image files remain unchanged. Responsive optimization by Next.js is a delivery derivative, not a newly invented plant image or a source-resolution improvement.
- The existing prototype remains unchanged; all 14 baseline SHA-256 checks pass. Prisma, database data and migrations were not changed.

## Why the image pair fails the seamlessness gate

The dome, process tower, conveyor, building and vessel resemble one another across the two images, but their proportions and positions differ. At half blend the actual browser screenshots show doubled structures, roads and equipment. The diagnostic intentionally leaves this visible; it uses uniform scale/translation with no perspective warping, blur or obscuring overlay.

Five manually selected approximate landmarks give 27–66 pixels of residual in the detail-source coordinate system after a best uniform fit. These picks are a screening aid, not precise photogrammetry, survey measurements or engineering coordinates. Their uncertainty does not change the visible ghosting conclusion.

The unrestricted best fit also extends beyond the master image's lower coverage at the full-screen close-up. The animated camera is bounded to keep the frame covered, which adds further mismatch during the blend. The source images therefore do not support the specified same-camera, same-geometry transition through transforms and crossfading alone.

**Required asset correction:** obtain a registered high-detail CBG region from the exact master scene/projection, or approve a new shared source scene for both shots. A different ground-level camera would need a separately scoped bridge sequence. Do not stretch buildings or claim that upscaling reconstructs verified equipment.

## Actual checks and evidence

| Check | Result |
| --- | --- |
| ESLint | Passed, zero lint warnings |
| TypeScript | Passed |
| Production Next.js build | Passed; `/proof/cbg` statically prerendered |
| Environment/version/lock parity | Passed; only the authorized application route exists |
| Prototype preservation | Passed, all 14 original files byte-identical |
| Forward/reverse camera behavior | Passed sampled positions; reverse returned to the same transform |
| Reading hold | Full detail/text opacity at the tested reading state |
| Final pin duration | Stage stayed pinned through 99% of the return; no premature release in sampled desktop/mobile checkpoints |
| Direct CBG navigation | Passed; reached the 64% reading checkpoint |
| Image bounds | No blank master edge in the tested desktop samples |
| Responsive geometry | Passed 1440×900, 390×844, 320×568, 844×390 and 1920×1080 checks; no horizontal overflow and conceptual label remained in view |
| Reduced motion | Live preference change removed the pin and camera transforms; enabling motion recreated one pin, without duplicates |
| No JavaScript | Both supplied images and meaningful description present; inert jump buttons disabled |
| Image-load failure | Static description visible; no pinned scroll trap |
| Keyboard | Skip link, visible focus, Enter-to-detail and Arrow-key blend adjustment passed |
| JavaScript runtime exceptions | None in the production functional run |
| Seamless image identity/alignment | **Failed**: ghosting in stage blend and diagnostic overlay |
| Actual phones, Safari/Firefox, field Core Web Vitals, GPU/memory profiling | Not tested; no universal frame-rate, WCAG certification or production-readiness claim |

The production page's browser requested an absent favicon and received 404; this is separate from JavaScript runtime exceptions. The development server also produced an HMR WebSocket issue in this environment, so final functional and keyboard tests used the production server. Neither was hidden or treated as an asset-alignment result.

`browser-measurements.json` contains the functional assertions and actual geometry samples; `keyboard-result.json` contains the keyboard checks. The source scripts are retained for repeatability. Cached Chrome resource entries recorded 90,252 and 264,324 response-body bytes for the optimized master/detail variants in this run. These are HTTP-body sizes, not decoded image/GPU memory, cold-network timing or proof of LCP compliance. Explicit source sizing prevents the zoom proof from selecting an undersized 640px mobile variant, but the originals still limit detail to roughly 1.7K pixels.

## Review materials

- `cbg-scroll-review.webm` — actual browser recording of the full scroll sequence; recording at 30fps is not a measured rendering benchmark.
- `desktop-0.png`, `desktop-0.42.png`, `desktop-0.64.png`, `desktop-0.99.png` — opening, half blend, detail hold and return.
- `mobile-0.png`, `mobile-0.64.png` — mobile framing and readable hold.
- `alignment-50.png` — unshaded half-blend comparison that exposes structural mismatch.
- The live page's **Check alignment** control lets the reviewer alternate directly between the enlarged master and detail image.

## Approval boundary

The movement may be reviewed independently of the imagery. Recommend withholding seamless-image approval for this pair. The user owns visual approval; no approval has been inferred or recorded. Remaining plant images, full-site implementation and deployment stay on hold.

The production preview is left running for review. To restart it: `npm.cmd run build`, then `npm.cmd run start -- --hostname 127.0.0.1 --port 3001`. Development mode is `npm.cmd run dev`; the original standalone prototype is still independently usable.
