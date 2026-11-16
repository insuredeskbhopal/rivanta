# Continuous CBG zoom — refinement result

**Superseded:** the user correctly identified that the master-only reading view remained blurred. The current proof restores the supplied second image for the close-up. See [the current result](../detail-handoff/RESULT.md). This document and its recording describe the previous experiment.

16 November 2026. Current preview: `http://localhost:3000/proof/cbg` on the user's development server. The isolated production verification server used `http://127.0.0.1:3002/proof/cbg`.

## Change made

The previous proof crossfaded images with different building geometry, producing ghosting. The main journey now uses only `hero-facility.png` throughout the approach, hold and return. `Golden Dawn Over a CBG Plant.png` remains in an optional comparison; it is not overlaid during the main motion.

- The camera targets the dome and adjacent CBG structures using image-space framing, not presumed site coordinates.
- One bounded uniform transform preserves the same structures. Zoom is capped at 2.4× relative to the initial desktop cover scale and 2.2× on narrow screens.
- The longer approach uses a continuous smoothstep curve. A 0.45-second ScrollTrigger catch-up softens abrupt wheel input without installing another scrolling engine. Native input remains intact.
- The caption is smaller and no longer moves vertically over the plant. The reading hold is fully visible around 52–79% of the chapter, before the return.
- The initial CSS composition has a stable viewport-height stage before enhancement, rather than stacking the images and then collapsing them when JavaScript loads.
- Reduced motion removes spatial transforms and pinning, leaving readable static content. The no-JavaScript description remains available.
- Image delivery uses the explicitly allowed quality 90 master variant to reduce additional compression loss. This does not reconstruct details absent from the original source.

## Actual verification

Lint, TypeScript, environment checks and the production build passed. The build contains the isolated proof and default not-found response; the root URL redirects to the proof.

Production-browser assertions passed for:

- Forward and reverse camera paths; sampled reverse transforms agree within numeric tolerance.
- Exactly one image in the animated stage at every sampled progress point.
- No uncovered master edges in the sampled approach, hold and return.
- No early pin release through the sampled 99% checkpoint.
- Direct CBG navigation reaching the readable hold.
- Width/height checks at 1440×900, 390×844, 320×568, 844×390 and 1920×1080, without horizontal overflow or a missing conceptual label.
- Keyboard adjustment of the optional comparison control.
- Live reduced-motion switching removing all camera transforms and pins; re-enabling motion creates one pin.
- Meaningful content remaining accessible without JavaScript.
- No JavaScript runtime exceptions in the production functional run.

All 14 original prototype files and both supplied dawn images remain byte-identical to their recorded hashes. No database, migration, remaining plant image or full website was created or changed.

## Visual review and limits

An independent motion review returned **ship for user review**, with no material fixes identified within this refinement. It found continuity preserved, no crossfade ghosting in the sampled sequence, readable caption placement and an intentional static reduced-motion path. This is not user visual approval.

The skill capture produced nine normal-motion and nine reduced-motion frames with no detector findings. Its CSS timing detector reported `durationMs: 0`; it does not measure the entire JavaScript-driven scroll sequence or establish frame pacing. Full-path browser checkpoints and an actual scroll recording supplement that limited capture. An initial reduced-motion capture attempt could not fit the flowing static stage into the fixed viewport, so the final reduced capture used the same physical viewport rectangle as the normal capture. A development-mode capture also encountered readiness interference; final skill captures and functional assertions used production mode.

**Remaining asset limitation:** the master is only 1692×930. Enlarging it still reveals softness. The separate close-up remains structurally incompatible with a seamless crossfade and is not approved for that use. A genuinely sharper matching detail needs a higher-resolution source or a render from the same scene/projection. This refinement removes the visual mismatch by retaining one image; it does not validate a new matched asset pair.

No physical-device/Safari/Firefox performance, field Core Web Vitals, image rights, engineering layout or operational status was certified. The missing favicon may still produce an unrelated 404. The automated scanner's clean result is not a full accessibility or visual-quality certification.

## Review evidence

- `continuous-zoom.webm` — actual browser scroll through the revised journey.
- `desktop-0.png`, `desktop-0.3.png`, `desktop-0.48.png`, `desktop-0.64.png`, `mobile-detail.png` — actual visual checkpoints.
- `browser-measurements.json` and `validate.txt` — recorded functional evidence and repeatable assertions.
- `production-normal/` and `production-reduced/` — skill capture reports, frames and filmstrips, with the limitations above.
- `design-scan.json` — scoped mechanical design scan, with no findings.

The user must review the revised movement before approving it. Remaining plant images and full-site development remain on hold.
