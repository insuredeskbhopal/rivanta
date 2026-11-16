# Phase 2 — Rivanta visual asset validation strategy

**Current implementation note:** this initial planning document predates the user-authorized campus → Silicon → CBG → SAF → Renewable Energy proof. See [the current fourth-view result](transition-proof/renewable-energy/RESULT.md). The extra intermediate campus image is excluded from playback; zoom-in, pullback and lateral travel are retained. All supplied plant images are user-designated concept references; process identity, equipment and site positions remain unverified. The shared-source asset requirements below still apply to any claim of a geometrically seamless production result.

Prepared 16 November 2026. Scope: review, asset specifications and acceptance criteria only. No assets were generated, edited, resized or integrated; no website code was modified. This document incorporates the newly supplied `image/` folder before finalizing the strategy.

## 1. Current decision

The supplied images are useful visual references, but no master/CBG pair is yet approved for a seamless transition. Plan two matching shots from a single locked source scene: one campus master and one higher-detail CBG region using the same projection. Their relationship must be established before full development. GSAP/ScrollTrigger remains the intended browser approach; an offline scene used to render images does not require Three.js in the website.

“Apple-level” is treated as a craft goal: restrained movement, crisp assets, consistent geometry, readable holds and predictable interaction. It is not a certification or a measurable claim of equivalence.

## 2. New image folder: inspection findings

All seven PNGs were visually inspected and their pixel dimensions and byte sizes read directly. Six are 1672×941; `Sunlit Industrial Piping Complex-5.png` is 1672×940. Individual sizes are approximately 2.36–2.67 MB; the set totals 17,883,876 bytes (17.9 MB decimal). No original scene file, approved masterplan or higher-resolution original was found in the inspected workspace. Embedded provenance metadata was not authenticated; image ownership, source and actual/conceptual status still need confirmation.

| Supplied image | Candidate use | Current limitation |
| --- | --- | --- |
| Industrial Energy Complex at Sunrise.png | Primary campus composition reference | Sunrise lighting and low oblique aerial view; does not establish acreage, complete facility identities or approved geography |
| Modern Industrial Processing Plant-6.png | Strongest CBG visual reference because of its two prominent green domed vessels | Daylight and a lower camera position; exact structural correspondence with the aerial is unverified; appearance does not verify technology |
| Industrial Facility with Tanks and Piping.png | Piping, tank and material reference | Do not assign to a particular proposed process from appearance alone |
| Modern Industrial Processing Facility-1.png | Industrial envelope and equipment reference | Buildings/stack identity and master-image correspondence unverified |
| Industrial Facility with Black-Yellow Curbs-3.png | Ground treatment and architecture reference | Different composition; process identity unverified |
| Industrial Complex with Distillation Towers-4.png | Tower, access-platform and material reference | Filename is not evidence of its process or suitability for SAF or other facilities |
| Sunlit Industrial Piping Complex-5.png | Pipe-rack, landscape and service-building reference | Ground-level viewpoint cannot be registered to the aerial by simple scale/translation |

The images share a broad visual vocabulary: light corrugated metal, green accents, metallic process equipment, yellow rails, paved roads and agricultural surroundings. That style relationship is useful. It does not prove they depict identical buildings in one site. Sunrise versus daylight is an immediately visible mismatch. The new aerial also differs from the old prototype master, so its old focus coordinates cannot be transferred automatically.

**Disposition:** keep every original untouched. Use the sunrise master and Plant-6 as direction references only until identity, lighting and projection checks pass. Do not silently name the remaining photographs as silica, silicon, SAF or power plants. Do not convert or replace anything during this phase.

## 3. Campus layout and positioning review

The project brief describes a proposed 400-acre campus. There is no supplied cadastral boundary, scale, north orientation, survey, CAD layout, process plan or equipment schedule to verify that area or its feasibility. A photograph-like image cannot establish acreage. Current placements remain conceptual.

For reference only, the old prototype uses these normalized **image coordinates**, measured from the top-left. They are not map coordinates, distances, northings or approved locations:

| Facility chapter | Old x / y | Existing visual relationship | Phase 2 status |
| --- | --- | --- | --- |
| CBG | 0.342 / 0.585 | Left of center, near domed structures | Proposed focus; remap after source selection |
| Biomass reception | 0.147 / 0.665 | Left foreground, covered storage imagery | Conceptual; process/logistics review needed |
| Captive power | 0.525 / 0.535 | Central equipment zone | Function and placement unverified |
| Bio-silica | 0.620 / 0.490 | Central/right equipment zone | Function and placement unverified |
| Silicon | 0.746 / 0.535 | Right-side industrial sheds | Function and placement unverified |
| SAF | 0.862 / 0.535 | Right edge process imagery | Technology and placement unverified |
| Solar | 0.165 / 0.462 | Rear-left panels | Capacity and suitability unverified |
| Wind | 0.350 / 0.330 | Background turbines | Site/resource suitability unverified |

Chapter order is storytelling order, not evidence of physical adjacency or a validated process sequence. Do not claim that all buildings or renewable facilities fit inside the proposed landholding without a scaled plan.

Before approving geometry, obtain a boundary and a provisional layout showing facility zones, access, logistics, utilities, water/wastewater areas and reserve land. Appropriate engineering specialists must validate process interfaces, clearances, fire access, emissions, hazardous areas and technology suitability. Visual planning must not invent those dimensions or imply regulatory approval. If no plan is available, the owner may approve an expressly illustrative composition, which remains unverified even after aesthetic approval.

## 4. Proposed visual direction

These are art-direction assumptions for approval, not facts about a real Rivanta site:

- **Architecture:** practical industrial sheds, believable structural bays, restrained administrative buildings, covered biomass reception and clear service access. Avoid a futuristic showroom campus or decorative buildings unrelated to the proposed processes.
- **Materials:** light grey coated metal roofing/cladding, concrete plinths and paved yards, galvanized or painted steel, credible insulated/metal process equipment. Use green as a restrained site accent and yellow rails/black-yellow curbs where appropriate; decorative color choices do not certify safety compliance.
- **Condition:** a clean proposed completed-state visualization with plausible roughness, drainage and construction detail. Avoid excessive mirrored metal, plastic-looking foliage, repetitive generated machinery or impossibly perfect surfaces. Do not add smoke, active loading or staged workers to imply current operation.
- **Indian context:** derive terrain, soil, crops, vegetation, road treatment and surrounding development from the actual region once supplied. Do not invent a state, mountain backdrop, monsoon conditions or lush irrigated landscape from the word “India.” The supplied farmland context is a reference, not verified site geography.
- **Lighting:** proposed default is soft morning daylight with modest warmth and sufficient fill to read equipment. Lock one sun direction, elevation, cloud state, exposure and white balance for both images. If the supplied sunrise mood is selected, the CBG view must share it; color grading alone cannot fix incompatible shadows.
- **Composition:** emphasize the campus and the CBG approach; reduce nonessential sky if it consumes useful source detail. Reserve text-safe areas through framing, not by obscuring major structures with a heavy gradient. Keep labels as accessible interface text rather than baked into pixels.

## 5. Master and CBG shot specification

### One source of structural truth

Preferred method after approval: an editable, versioned campus scene/model based on the provisional plan. Render both assets from that scene. Lock equipment counts, roofs, buildings, roads, pipe routes, terrain, vegetation, material assignments and lighting. Save the source revision and object inventory. The artist must not reconstruct the second shot independently from a text description.

Alternative: a sufficiently high-resolution single approved image with a genuine crop for CBG. This guarantees shared visible geometry but only supplies the detail already present in the source. Upscaling or AI enhancement cannot be claimed to recover verified engineering detail. The present 1672px originals do not provide enough CBG-region pixels for a sharp full-screen close approach at all target sizes.

### Shot A — campus master

- Show the proposed ecosystem and a clear route of visual attention toward CBG, without claiming a verified land extent.
- Proposed camera starting point: restrained oblique aerial, approximately 25–35 degrees downward from horizontal and a 45–65mm full-frame-equivalent lens. These are authoring ranges to test, not measured parameters of the supplied image. Camera height/position must be derived from the source scale; do not invent a drone altitude.
- Keep CBG visible and unobstructed with enough surrounding context to understand its location. Leave overscan for portrait cropping and avoid strong perspective distortion.
- Record camera transform, lens/sensor or projection matrix, full render resolution, render window, lighting revision and color transform.

### Shot B — matching CBG detail

- Produce a higher-resolution **region render/crop of Shot A's exact image plane**. Lock camera center, orientation and perspective; change the render region/sampling rather than lower or orbit the camera.
- Include the same domed vessels, nearby shed edges, tanks, road and pipe landmarks that are visible in A. Use an approved object inventory before locking their counts or asserting their engineering purpose.
- Store B's rectangle `(x, y, width, height)` in A's full source coordinates, plus corresponding landmark points. Do not independently crop both images to different aspect ratios and then stretch them to match.
- Maintain identical shadows, highlights, vegetation placement and grading. Use deterministic render settings so denoising, foliage randomness or exposure do not change scene identity.

**Tradeoff:** this produces a crisp image zoom, not a true aerial-to-ground flight. A lower camera changes perspective and occlusion; with only these two assets, do not promise a seamless flight into a ground-level view. Such a shot requires a separately approved bridge sequence or a true camera animation from the shared scene. The current ground-level Plant-6 image is therefore a useful reference, not an automatically compatible final B.

## 6. Transition plan

Use the existing wide → approach → detail → information → return sequence. Percentages below describe the local chapter scroll distance, not seconds. They are proposals to validate after assets are approved.

| Progress | Planned action |
| --- | --- |
| 0–10% | Establish campus and indicate CBG with a marker of constant screen size |
| 10–35% | Pan and zoom toward the registered CBG region with continuous, restrained easing |
| 25–45% | When B has loaded and decoded, blend the spatially registered higher-detail region into A; keep both under the same camera transform |
| 38–50% | Reveal the heading and description after the visual subject is clear |
| 50–80% | Stable detail/reading plateau; stopped scroll leaves the scene still |
| 80–92% | Fade information before camera retreat |
| 85–100% | Reverse the registered blend and return to campus; complete the final chapter before releasing the pinned stage |

At the swap, corresponding structures must occupy the same screen coordinates; crossfade changes detail, not building position. Use one uniform transform into the source-image plane, followed by viewport cropping. Do not depend on blur, black frames, distortion or a dark overlay to conceal mismatch. If registration fails, reject the pair rather than mask the issue.

Reverse scrolling must retrace the same geometry. Direct chapter navigation must land on a named reading state. Late/failed detail loading keeps the coherent master visible and readable content available; it must not trap scrolling or show an unready image. Reduced-motion and no-JavaScript presentations expose static imagery and full content without zoom or prolonged pinning. The motion preference has to be respected on load and after changes, consistent with [MDN's reduced-motion guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

Keep “Proposed campus · Concept visualization” visible through the entire sequence on desktop and mobile. Representative third-party photography requires a distinct accurate label. No factual plant status may be inferred from photographic realism.

## 7. Desktop/mobile source and delivery requirements

Two canonical shots may have multiple responsive exports. These are derivative crops/resolutions of the same source, not new independently composed images.

| Deliverable | Proposed source / export requirements |
| --- | --- |
| Editable source | Scene/model or full-resolution approved original; lossless master, color settings, camera data, source/rights record and revision |
| Desktop master A | Start by evaluating a 6K–8K-wide offline source; export approximately 1920/2560/3840-wide overview candidates as needed. Final source size follows crop/zoom calculations, not an arbitrary “8K” badge |
| Desktop CBG B | High-sample region render, with approximately 1920/2560/3840-wide delivery candidates. Must have genuine new samples/detail from the same scene; a resized 1672px PNG is not a new high-detail source |
| Mobile overview | Preserve a full-campus fitted overview when that is the intended claim. A portrait crop may show the CBG context but must not be described as showing every campus zone |
| Mobile CBG | Provisional portrait compositions around 9:16 or 4:5, derived from B with corresponding registered master crops. Evaluate 780/1170px-wide candidates and additional sizes only if justified by devices/crops |
| Web encoding | Compare WebP and AVIF for roof seams, pipework, rails, foliage, banding and decode time; keep a supported fallback. Originals remain lossless and untouched |

Check 360/390/430px portrait widths, short landscape phones, tablet, 1440×900 desktop and 1920×1080 desktop. Select the actual physical phones and DPR policy before final export. Never move, remove, mirror or stretch buildings merely to improve a portrait crop. Keep the CBG subject and conceptual label visible around browser chrome and safe areas.

### Resolution calculation

For a source aspect ratio `a`, viewport `Vw × Vh`, cover rendering, scale `z` and delivery DPR `d`, the unzoomed full-image displayed width is `max(Vw, Vh × a)`. A fully sampled full master would need roughly that width multiplied by `z × d`. Calculate height too. A narrow phone can therefore demand a surprisingly large panorama if it uses cover and then zooms.

Example: a 16:9 master covering 1440×900 has a displayed full-image width of 1600px; at 3.15× and DPR 2, approximately 10,080 source pixels would be needed across that full master to avoid enlargement. **This is why the strategy uses a sharp registered region B rather than sending a 10K panorama to every device.** Treat source sampling, mobile crop and zoom strength as one decision.

## 8. Performance plan and provisional budgets

These are proposed ceilings for the two-shot proof, not measurements or promises. Adjust only with documented quality/device evidence.

- Mobile selected overview target: at most 450 KB; mobile CBG target: at most 450 KB. Desktop selected overview target: at most 900 KB; CBG target: at most 900 KB. Count the actual selected response, not the whole export collection. If a target cannot preserve useful detail, reduce crop/zoom scope or revise the budget explicitly rather than destroying clarity.
- Load the initial visual with appropriate priority; do not fetch both desktop and mobile alternatives or all eight plant details on first paint. Request/decode B early enough for the approach. Do not lazy-load the LCP image. This follows [web.dev's LCP guidance](https://web.dev/articles/optimize-lcp).
- Use correct responsive source selection and dimensions. Next.js `sizes` helps the browser select from `srcset`; normal viewport-based selection must also account for this animation's zoom/region strategy. Raising compression quality cannot restore missing source detail. See the [official Next.js Image reference](https://nextjs.org/docs/app/api-reference/components/image).
- Keep A and B as the principal active image layers, plus the interface; avoid permanent compositor hints for all future chapters. Do not use large blur filters as a transition mechanism.
- Measure decoded memory as well as transfer size. One 3840×2160 RGBA image alone is approximately 31.6 MiB before browser/GPU overhead; small compressed files do not guarantee low memory use. Set the final stage-memory ceiling after the target devices are chosen.
- During a later authorized proof, record decode/first-display times, selected URLs/bytes, frame traces and memory behavior on representative devices. Aim for responsive 60fps playback on agreed hardware, with no claim of achieved results now. The project's Core Web Vitals targets remain LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 at the 75th percentile; field results require actual traffic.

## 9. Acceptance criteria and evidence required

All new-asset tests below are **pending**. Inspecting references is not an asset or transition pass.

| Gate | Acceptance requirement | Evidence / reviewer |
| --- | --- | --- |
| Status and rights | Every asset has source, usage rights, revision and actual/conceptual status. Concept label persists at every viewport | Owner-supplied provenance plus reviewed labels; metadata alone is insufficient |
| Layout integrity | Boundary/scale and positions trace to supplied plan, or the entire composition is explicitly approved as illustrative. No acreage or engineering certification inferred from pixels | Owner + competent engineering reviewer where factual layout is claimed |
| Structural identity | Zero additions, removals or swaps between overlapping A/B structures; dome/tank/roof counts, road edges and pipe routing agree | Object inventory and source-scene revision; side-by-side crops |
| Registration | At least five fixed landmarks spread across the overlap align after the recorded uniform scale/translation; proposed maximum error 2 CSS px at the agreed test viewports | Landmark table and overlays at actual display sizes; no nonlinear warp used to hide perspective changes |
| Lighting | Same sun/shadow direction, exposure, white balance, material grade and weather; no visible lighting jump at the blend | Ungraded/graded pair, source settings and reviewer inspection |
| Realism | No visibly malformed structures, fused rails, floating pipes, inconsistent scale or repeated synthetic foliage; machinery and context reviewed for plausibility | Full-resolution close inspection, owner/artist review and relevant technical review; photorealism does not prove feasibility |
| Resolution | Important roof/piping edges remain legible at maximum approved zoom on selected desktop/mobile DPRs | 100% source crops and full-scale display checkpoints; no reliance on upscaling as factual detail |
| Blend quality | No doubled edges, ghost buildings, horizon pop, color flash or blank border at 0/25/50/75/100% blend, forward and reverse | Diagnostic overlay sequence with shading removed, then final presentation review |
| Framing and content | CBG remains in frame; text and persistent conceptual label do not hide essential landmarks; portrait crops preserve identity | Desktop/mobile/landscape review sheets |
| Interaction | Correct chapter target, complete final hold/return, predictable reverse scrolling, failure fallback, readable static/reduced-motion version and usable controls | Later authorized browser proof; not claimed tested for new assets |
| Delivery | Selected formats/sizes meet approved budgets without material loss; no unnecessary alternative downloads or decode stall at blend | Network logs, timings and representative-device traces |

“Identical” means the same underlying objects and arrangement, not merely similar green domes and grey sheds. Image A's region must match B's projection; aesthetic resemblance alone does not pass.

## 10. Missing requirements and approval sequence

| Missing input | Why it matters | Current handling |
| --- | --- | --- |
| Site location, boundary, orientation and scaled plan | Acreage, real landscape, camera scale and geography | Unverified; all layouts conceptual |
| Provisional facility/equipment schedule and CBG technology | Correct plant identities, silhouettes and source geometry | No process labels assigned to unknown images |
| Source/provenance and rights for the seven PNGs | Legitimate production use and truthful presentation | Supplied references only; status unverified |
| Editable scene or genuinely higher-resolution original | Same structures and sharp registered region | Not present in inspected workspace |
| Lighting choice: supplied sunrise or soft daylight | One consistent visual world | Soft morning daylight proposed; not approved |
| Target physical devices and bandwidth/memory budget | Sensible exports, DPR and transition performance | Proposed limits above; measurements pending |
| Owner/technical approvers | Separate visual approval from engineering validation | Must be named before factual sign-off |

**Next gates:** approve the source/layout status and visual brief → separately authorize creation/editing of master A and registered CBG B → review their identity, lighting and alignment → separately authorize a limited transition proof → approve the remaining facility assets and full implementation only after that proof passes. Authorization to create assets does not authorize website implementation.

Phase 2 planning is complete. Production asset acceptance is pending. No new image, render, conversion, prompt-generated asset, preview UI, migration or application-code change was made.
