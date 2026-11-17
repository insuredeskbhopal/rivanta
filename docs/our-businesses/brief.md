# Our Businesses — native-scroll showcase

Scope: the existing Our Businesses section only. The user has rejected four equal brochure columns, oversized photo tiles with overlapping copy, and compact two-by-two split cards, asking for a very creative presentation. Their accepted constraints remain: cream background, existing type families, four distinct images, white silica powder and CBG inside industrial premises. This direction removes the card-grid topology entirely.

## Direction contract

THESIS: Give each business a full-scale photographic chapter and a distinct moment in the scroll. The signature is stacked chapters, not boxes packed into a grid or an accordion hiding descriptions.

OWN-WORLD: Existing cream, deep ink and muted green; wide photo beside large serif title and readable sans copy. Thin architectural frames and a restrained outlined link. No new font, palette, decorative data or global system.

STORY: Read materials, CBG, aviation fuel and energy sequentially. Native scrolling brings the next business panel over the preceding one. All four descriptions and real company links are present in server-rendered document order.

FIRST VIEWPORT: Existing section heading/statement introduce one large materials panel. On desktop, the contained photo occupies half the frame, with a large title, 18px intent copy and link alongside. Subsequent panels stack with 18px offsets beneath the header. Tablet and mobile display the same four chapters as normal static flow with large images and strong type.

FORM: Code-led local redesign, seed: none (local scope). CSS sticky only above 1100px wide and 780px tall with normal motion. No timed animation, scroll guard, wheel listener or client boundary. Reduced motion, shorter viewports and narrower screens get unpinned content. Hover photo zoom and link-arrow response disable under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Boundary: no surrounding section, journey, image, factual-copy, package or deployment changes. Record real desktop chapter views and the static/reduced-motion full-content fallback separately. Earlier screenshots/reviews apply to their superseded layouts. Fresh evidence and full review live in docs/our-businesses/scroll-showcase/. User aesthetic acceptance remains pending.

Keyboard-visible focus temporarily unpins its business panel so a focused link cannot remain hidden beneath another chapter. Pointer clicks do not unpin the panel.
