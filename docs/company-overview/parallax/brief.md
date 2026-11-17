# Company overview parallax redesign — 17 November 2026

User request: replace the plain overview section with a stylish, professional layout and parallax. Scope remains the existing overview on `/`; the header, home hero, camera choreography, route behavior, standalone prototype and deployment remain outside this change.

Direction: an editorial introduction on the existing warm off-white, a large serif statement, an offset Indian paddy-field landscape, a floating rice-harvest detail, and a forest-green development panel. Retain the established Rivanta forest, gold, serif and sans vocabulary. Visitor mode: Persuade. This is an in-world section redesign, built directly in the existing Next.js stack; no identity replacement, theme roll or generated design comp.

Motion: a named CSS view timeline drives the main image crop and inset at different rates. Text stays stationary within native page scrolling. The effect is progressive enhancement: browsers without scroll-timeline support show the complete static layout. Reduced motion disables both parallax animations, including live preference changes, and removes arrow motion. No new client boundary, listener, package or animation clock.

Content: preserve the existing development-stage introduction and priorities, reframed as resource planning, integration and phased development. Refer to the source evidence in `docs/company-content/` and the previous company-overview report. No new commercial or operating claims. Both new agriculture images carry adjacent AI-illustration labels and meaningful alt text identifying them as illustrative rather than actual company property or sourcing sites. The existing proposed-facility labels in the journey are retained.

Visual provenance: the user explicitly requested new Indian farm and agriculture imagery to avoid repetition. Two new images were generated with the built-in image_gen tool, then encoded as WebP for this section: image/overview/indian-paddy-fields.webp and image/overview/indian-rice-harvest.webp. Exact prompts, dates, source outputs and status are recorded in image-provenance.json; each asset has a prompt sidecar. They are synthetic editorial illustrations, not actual farms, evidence of sourcing agreements or company-owned land. The images are distinct from every journey image. No existing source asset was modified.

Validation evidence and final review are recorded beside this file. Visual acceptance remains with the user.

