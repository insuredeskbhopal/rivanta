# Motion review — camera restoration

**Disposition: ship — the isolated `/proof/cbg` motion proof is ready for the user's visual review.** This is an evidence-only verdict on restoration of the requested choreography, not visual approval, a deployment recommendation, or a claim of seamless geometry or measured device performance.

Reviewed 2026-11-16. No browser was opened and no implementation was modified. The motion thesis is the strong campus approach into Silicon, followed by a distinct pullback, lateral campus travel and approach into CBG, repeated toward SAF, with readable plant holds and a static reduced-motion alternative.

## Evidence

- Final synchronized production extraction: `scroll-filmstrip.jpg`, `video-00.png` through `video-29.png`, and `video-frames.json` from the 31.35-second `silicon-cbg-saf-review.webm`. The extracted sequence includes forward and reverse travel. The earlier development filmstrip observed during replacement is excluded; the final filmstrip was reopened after synchronization and contains no developer badge.
- `production-normal/` and `production-reverse/` filmstrips and reports establish normal-motion endpoints. `production-reduced/` and `production-reverse-reduced/` filmstrips and reports establish static navigation endpoints. Their `durationMs: 0` and empty CSS animation lists do **not** measure the imperative GSAP sequence; the actual recording extraction supplies the intermediate evidence.
- `record-measurements.json`, `browser-measurements.json`, and `responsive-measurements.json` supply camera, interaction and viewport observations. `camera.ts` was read only to interpret the camera's supported behavior. No `DESIGN.md` was supplied; incumbent visual evidence and `craft-floor.md` govern this narrow review.

## continuity

The requested travel is restored. Frames at 0.80–2.70 seconds show the campus approach into Silicon; 3.50–3.85 seconds hold the Silicon plate. Frames at 4.10–6.40 seconds visibly pull back, cross the original campus and approach CBG, followed by the CBG hold at 7.50–8.40 seconds. Frames at 8.80–11.50 seconds repeat the pullback/travel/approach toward SAF, with a readable SAF hold at 12.50 seconds. Later frames show reverse travel and return to the plant compositions.

The campus imagery remains the original source during travel. The rendered source list contains the campus and three plant plates; the removed extra intermediate image does not appear in this sequence. Camera samples corroborate distinct bridges: master scale falls to 1.69355 from 5.06908 and 3.0947 respectively, then approaches the next stop; lateral travel is approximately 196 px toward CBG and 667 px toward SAF in the recorded viewport.

Plant/campus handoffs remain perceptible. The Silicon blend around 1.30 seconds and the outgoing plant blends show different building geometry, dome proportions and lighting. These are supplied-source mismatches, not evidence that the requested camera travel is absent. The proof should be presented as composed conceptual views. It does not establish one physically continuous modeled campus.

## craft

The camera is one authored focal sequence. The pullback creates enough visual distance for lateral travel to read, and each arrival resolves to a stable, normally covered plant plate rather than holding an extreme campus enlargement. The forward samples contain no blank canvas or exposed image edge. Titles appear at the destination and clear for travel; visible concept labels and the skip action remain present. The scene itself carries the motion without unrelated decorative effects.

The reviewed extraction supports the movement's shape, order and stable holds. Thirty still samples cannot establish every displayed video frame, precise easing quality, physical-device smoothness or field performance. Local rAF intervals in the measurements are observations only, not a device-performance certificate.

## reduced_motion

The production reduced captures show normal page navigation to static content rather than the spatial camera sequence. Responsive measurements report zero pins, campus/Silicon/CBG/SAF images visible with `transform: none`, preserved plant order, and cleanup after a live preference change. This is an intentional alternative with the conceptual content retained. The supplied production capture method samples endpoints; it does not prove every preference-change frame or physical mobile behavior. Development screenshots with a Next.js badge are excluded from clean-production visual certification.

## material_fixes

None required to make this scoped restoration reviewable. Do not remove the pullback or lateral travel to conceal asset differences. A future requirement for invisible, geometrically continuous handoffs would need coordinated source imagery or a shared scene; it is outside this motion restoration and is not achieved here.

## keep

- The Silicon → CBG → SAF order and bounded chapter holds.
- The distinct approach, pullback and lateral travel on the original campus.
- Normal cover scale and readable copy at plant stops.
- The static reduced-motion path, conceptual status labels and visible skip control.

The user's visual approval remains outstanding. This review does not authorize broader site work or deployment.
