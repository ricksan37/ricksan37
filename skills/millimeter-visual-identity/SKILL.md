---
name: millimeter-visual-identity
description: >-
  Applies the Millimeter Dark visual identity (dark ground, visible millimeter grid, hairline
  cards, mono kickers, one accent per screen) to produced content. Use when the user names
  Millimeter, "ma charte", "mon identité visuelle", "my visual system" or "grid-native", or asks
  for a deck, dashboard, document, PDF, web or social visual, or chart in their own identity.
  Do not use for generic design requests that name no identity, or for another brand.
---

# Millimeter Dark

A dark-ground, grid-native identity. Dark, precise, deliberate. Surfaces are separated by tone
and hairline, never by shadow. A few high-chroma accents burn against near-black.

If the output could pass for a generic dark dashboard template, it has failed. What makes it
this system: the visible grid, hairline borders, mono kickers, one accent per screen.

## Source of truth

This folder is exported from the Claude Design project "Millimeter Dark Design System". Values
live in `tokens/`, never in prose. If a hex, size or spacing is needed, read the token file.
Never guess colours, fonts or spacing.

## Order of work

1. Read this file, then `references/foundations.md` (colour, type, grid, states, icons).
2. Link or inline `styles.css`. It imports every token and font.
3. Pick the composition in `references/layout.md`.
4. For components, read `references/components.md`, then the `<Name>.prompt.md` of each
   component you use (`components/<group>/`). For charts, read `references/dataviz.md` first.
5. Write copy against `references/content.md`.
6. Run `python3 scripts/check_conformity.py <file or folder>` on the output and fix every hit.

For a quick start, copy a template: `templates/deck/` (six slides) or `templates/dashboard/`.
Sample compositions: `slides/` (seven slide types) and `ui_kits/dashboard/`.
Anything copied out of this folder must keep the relative paths of `tokens/`, `assets/` and
`_ds_bundle.js` working, or be inlined.

## Non-negotiable rules

- **No shadow, glow or blur.** Depth is the tone stack: Void, Slate, Slate Raised. Three steps.
- **One accent leads per screen.** About 80 percent Void and Slate, 15 lead accent, 5 closing.
- **Violet is action only.** CTA buttons. Never on a stat card, a chart or a heading.
- **Accents fill sparingly.** One full accent fill per screen at most, with Void text on top.
- **No pure black, no pure white.** `#000000` and `#FFFFFF` are banned.
- **No edge stripe, no gradient fill, no emoji, no logo or wordmark.** Nothing stands in for a mark.
- **No dash as punctuation, kickers included.** Kicker form is `01 PALETTE`. The only survivor
  is the numeric range: `12–20px`.
- Light-mode values (`#2F6BE4`, `#F2B233`, `#D6493D`, `#4BA84E`, `#A855F7`, `#EDE7DC`) are
  obsolete on this ground. Port an old artefact fully or leave it alone.
- Fonts: Archivo Black (display), Inter (body), JetBrains Mono (labels, figures, code). Files in
  `assets/fonts/`. Inside a `.pptx`, keep the real font names and size titles with 10 percent slack.

## Known limits (do not paper over them)

- Icons are a substituted Lucide outline set (27 glyphs, 1.75px). The brand source shipped none.
- Hover, press, focus and disabled states are derived from the tone stack, not from the source.
- The chart components are a principled extension of the palette, not extracted from a product.
- There is no logo. Do not draw one.

## When invoked with no brief

Ask what the user wants to build (deck, dashboard, document, social visual), the audience, and
the one accent that should lead. Then act as an expert designer: output static HTML for mocks,
production code only when asked.
