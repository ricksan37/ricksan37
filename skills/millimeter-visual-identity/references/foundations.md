## Visual foundations

### Colour

Four-step dark ground, one light ink, four accents, one action colour. Every colour owns a role and
none competes. Full token list in `tokens/colors.css`.

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Ground | Void | `#0B0C0F` | Page background, and text on accent fills |
| Surface | Slate | `#15171C` | Default card fill, one step up from Void |
| Surface 2 | Slate Raised | `#1E2128` | Nested cards, table headers, code blocks |
| Line | Hairline | `#2A2E37` | Default 1px borders and dividers |
| Line strong | Hairline Bright | `#3A404C` | Emphasised borders, active states |
| Ink | Paper | `#F2F3F5` | Body text, headlines |
| Ink muted | Paper Muted | `#9BA1AC` | Captions, secondary text, axis labels |
| Primary | Signal Blue | `#4C8DFF` | Structure, lead accent, primary data series |
| Accent | Amber | `#FFC24B` | Warmth, second series, warnings |
| Accent | Vermilion | `#FF6B5A` | Emphasis, alerts, negative deltas |
| Accent | Grid Green | `#4ADE80` | Positive, growth, success |
| Action | Ultra Violet | `#B57BFF` | CTA only, never decorative |

Rules that decide every screen:

- **Depth comes from tone, never from shadow.** No `box-shadow`, no glow, no blur, anywhere.
- **One accent leads per screen.** Void plus Slate hold about 80 percent, the lead accent about 15,
  a closing accent about 5. Four accents at equal weight is the failure mode.
- **Violet is rationed** to calls to action. Violet on a stat card, a chart or a heading is a bug.
- **Accents fill sparingly.** Prefer an accent border, an accent number or accent text. One full
  accent fill per screen at most, and it takes Void text on top.
- **Two accents never sit side by side**, except inside a chart where colour carries meaning.
- **No pure black, no pure white.** `#000000` and `#FFFFFF` are banned. Void and Paper are the extremes.
- Light-mode ancestors (`#2F6BE4`, `#F2B233`, `#D6493D`, `#4BA84E`, `#A855F7`) go muddy on dark. Never reuse them.

### Type

Loud display, quiet body, mono for labels. Three families, all shipped in `assets/fonts/`.

| Element | Font | Size and weight |
|---------|------|-----------------|
| Display, H1, H2 | Archivo Black (single black weight) | Display 64–92px, H1 40px, H2 24px, H3 19px |
| Body and UI | Inter, Regular for paragraphs, Semibold for lead-ins | 15–18px |
| Labels, figures, kickers, code | JetBrains Mono | 10–11px uppercase letter-spaced, code 13px |

- Display tracking is pulled to `-0.02em`. Heavy type reads wider on dark.
- Body line-height 1.65 minimum. Dark grounds need air.
- Long body copy never sits at full Paper brightness. Lead paragraph in Paper, the rest in Paper Muted.
- The jump from display to body must be dramatic. A timid size contrast is the most common dilution.
- Display titles may be centred. Body copy never is.

### Grid, layout, spacing

- The millimeter grid is the connective texture, drawn in CSS and never as a raster asset:
  Void ground, two hairline gradients at `.035` opacity, `24px` cells. Range `.03` to `.05` on
  pages, `.06` for a dense framed field. Above `.06` it competes, below `.02` the system loses texture.
- **Signature composition:** left nav rail (four numbered accent-bordered cards plus a violet CTA)
  and a 50/50 content and media split on Void.
- Outer margin 48px minimum (0.5in). Nothing touches the edge, ever.
- One block gap per layout, 32px by default, chosen and kept.
- Corner radius 12px for chips, 16px for cards, 20px for panels, pill for buttons and tags. Radius
  scales with size.
- Borders are 1px. Hairline by default, Hairline Bright for emphasis, an accent for nav cards and
  highlighted table rows.
- Do not repeat the same layout on consecutive slides. Vary rail, split, grid, full-bleed.
- Do not add accent underlines beneath titles or decorative bars across a slide. Whitespace and
  tone steps do that job.

### Backgrounds and imagery

Backgrounds are structural, never pictorial. Content surfaces are Void with the grid. Section
dividers and covers are Void with the grid plus one Slate panel floated on top for the text. A media
zone is filled with a chart on a Slate card, a grid of icon cards, a tone-block composition (three
or four rectangles stepping Void, Slate, Slate Raised with one accent-bordered block among them), or
a dense grid field framed in a rounded card.

**Never a full-bleed accent background.** No gradients, no photographic hero images, no textures, no
noise or grain overlays, no illustration. There are no brand photographs and no brand illustrations
in the sources. If a photograph is genuinely required, treat it as content inside a hairline-bordered
Slate card, cool-toned and desaturated, never full-bleed and never behind text.

### Cards and surfaces

A card is a flat single-tone fill from the three-step stack, a 1px border, rounded corners scaled to
size, Paper text, and nothing else. No shadow, no glow, no blur, no coloured strip on any edge, no
gradient fill. Five card roles, defined in `references/components.md` and built in `components/cards/`:

- **Nav card** Slate fill, accent border, accent number top-left, label bottom-left.
- **Content card** Slate fill, Hairline border. The default container.
- **Feature card** Slate Raised fill, Hairline Bright border. One per screen.
- **Accent card** full accent fill with Void text. One per screen, never violet.
- **Icon card** Slate fill, grid icon centred, label centred beneath.

### Motion, hover and press

The sources define no animation, and the system does not want any as decoration. Keep it minimal
and functional:

- Transitions are 120ms linear on `background-color` and `border-color` only. No easing curves worth
  naming, no bounce, no scale, no parallax, no reveal-on-scroll.
- **Hover** steps the tone: a light pill mixes 14 percent toward Void, a ghost pill takes a Slate
  Raised fill and a Paper Muted border, a nav card steps its fill to Slate Raised. Never brighten
  past Paper, never add a glow.
- **Press** does not shrink or lift. It deepens the tone one further step and nothing else.
- **Focus** is a 1px Hairline Bright border, or the accent border if the element already has one.
- **Disabled** is 40 percent opacity, no colour change.
- No shadow appears in any state. There is no elevation system, only the three-step tone stack.

### Transparency and blur

Used almost nowhere. The grid gradients are the only intentional alpha in the system (`rgba(255,255,255,.035)`).
No frosted panels, no backdrop blur, no scrim gradients over imagery, no protection gradients: text
sits on a solid Slate panel instead. Opacity is otherwise reserved for the disabled state and for
Void text on an accent fill (down to 0.72 for a kicker inside an accent card).

## Iconography

- **Set.** Fine single-weight line glyphs on a 24px box, stroke 1.75px, round caps and joins.
- **Treatment.** A glyph is stroked in its concept colour at full brightness, on a Slate fill, with a
  dense millimeter grid behind it. The grid behind the glyph is the point, so prefer `IconCard` over a
  bare glyph when the icon is the subject.
- **Fixed hue per concept**, held across a whole deck: database blue, chart vermilion, server green,
  code violet, pipeline amber, cloud blue, filter vermilion, network green. Do not retint a row to
  one accent.
- **No icon font and no sprite.** Glyphs are inline SVG so they take token colours through `stroke`.
  The `Icon` component inlines them; the same files are in `assets/icons/` for hand-written HTML.
  Note that `assets/icons/*.svg` use `stroke="currentColor"`, so they must be inlined (or given an
  explicit stroke) rather than referenced from an `<img>` tag, which would render them black.
- **Emoji are never used.** Unicode is used as a mark in two places only: the trailing arrow `→` on a
  primary button, and `·` as a mono separator.
- **Substitution flagged.** The brand source describes the icon style but ships no icon files, and no
  logo file exists either. The 27 glyphs in `assets/icons/` are the **Lucide** outline set (ISC
  licence, v0.454.0), copied in as the closest match to the described style and restroked to 1.75px.
  If you have the real Millimeter glyph set, drop the SVGs into `assets/icons/` and extend
  `MM_GLYPHS` in `components/icons/Icon.jsx`.

