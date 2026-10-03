# Layout and grid

## The signature composition

A left nav rail plus a 50/50 content and media split, on Void with the millimeter grid showing.

```
┌──────┬──────────────────┬──────────────────┐
│ rail │   content zone   │   media zone     │
│ 01▢  │   kicker         │   motif / chart  │
│ 02▢  │   display title  │   (grid field,   │
│ 03▢  │   body copy      │    tone blocks)  │
│ 04▢  │   [primary btn]  │                  │
│ CTA▣ │                  │                  │
└──────┴──────────────────┴──────────────────┘
```

Built in `components/layout/NavRail.jsx`. Sample: `slides/rail-split.html`.

### Rail (13.33 × 7.5in layout)

- No wordmark. The rail starts with the first nav card.
- Four numbered nav cards, Slate fill, 1px accent border, stacked: 01 Signal Blue,
  02 Amber, 03 Vermilion, 04 Grid Green. About 1.55in wide, 1.0in tall, radius 0.12in.
  Number top-left in Archivo Black in the accent, label bottom-left in Inter Semibold in Paper.
- The accent is the border and the number, never the fill.
- One violet CTA card below the four, fully filled with Void text. The only violet on screen.

## The grid

Built in CSS or vector, never raster. Tokens: `--grid-size` (24px), `--grid-opacity` (.035),
classes `.mm-grid` and `.mm-grid-dense` in `tokens/grid.css`.

Opacity range `.03` to `.05` on pages, `.06` for a dense framed field. Above `.06` it competes
with content, below `.02` the system loses its texture.

## Spacing constants

| Spec | Value |
|------|-------|
| Outer margin | 48px (0.5in) minimum. Nothing touches the edge |
| Block gap | 32px default (0.30–0.50in). One gap per layout, chosen and kept |
| Radius | 12px chips, 16px cards, 20px panels, pill for buttons and tags |
| Border | 1px. Hairline by default, Hairline Bright for emphasis |
| Body line-height | 1.65 minimum |

## Content zone

1. Mono kicker in an accent colour (`01 PALETTE`).
2. Archivo Black headline in Paper, tracking `-0.02em`.
3. Calm Inter body: lead paragraph in Paper, the rest in Paper Muted.
4. Primary action is a Paper pill with Void text. Secondary is a ghost pill. Violet pill only
   for booking or submitting.

## Media zone

Fill the half with one of: a chart on a Slate card, a grid of icon cards, a tone-block
composition (three or four rectangles stepping Void, Slate, Slate Raised with one accent-bordered
block), or a dense grid field framed in a rounded card.

## Backgrounds

- Content slides: Void with the grid.
- Cover and section dividers: Void with the grid at `.05`, plus one Slate panel floated on top.
- Never a full-bleed accent background. No gradients, photos, textures, noise.

## Do not

- Centre body text. Centre only large display titles.
- Add accent underlines under titles or decorative bars. Whitespace and tone steps do that.
- Repeat the same layout on consecutive slides. Vary rail, split, grid, full-bleed.
- Use shadows, glows or blurred backdrops.
- Put Paper text on an accent fill. Accent fills take Void text.
