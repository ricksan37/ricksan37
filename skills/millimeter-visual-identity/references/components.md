# Components

Each component has `<Name>.jsx`, `<Name>.d.ts` (props) and `<Name>.prompt.md` (what, when, usage).
Read the prompt file before using one. React only, styled through the CSS custom properties.
The same anatomy applies to anything hand-written in HTML, PPTX or DOCX.

| Group | Components | Folder |
|---|---|---|
| buttons | Button, Tag | `components/buttons/` |
| cards | AccentCard, ContentCard, FeatureCard, IconCard, NavCard | `components/cards/` |
| charts | ColumnChart, DonutChart, GroupedBarChart, LineChart, StackedBarChart | `components/charts/` |
| data | CodeBlock, DataTable, ProgressGauge, StatCard | `components/data/` |
| icons | Icon | `components/icons/` |
| layout | Divider, GridField, NavRail, ToneBlocks | `components/layout/` |
| typography | Body, Display, Kicker | `components/typography/` |

The rules below are the anatomy every component follows.

Every component is a rounded rectangle with a 1px hairline border, flat fill, no shadow,
no edge stripe. Corner radius 12–20px, scaling with size.

## The tone stack

Depth is built by tone, never by shadow. Three steps only:

| Step | Fill | Use |
|------|------|-----|
| 0 | Void `#0B0C0F` | Page ground |
| 1 | Slate `#15171C` | Default card |
| 2 | Slate Raised `#1E2128` | Nested card, table header, code block |

Never stack more than three steps. If you need a fourth level of hierarchy, use an accent
border or a mono kicker instead of another tone.

## Cards

**Nav card**, Slate fill with a 1px accent border and a matching accent number top-left
(Archivo Black). Label bottom-left in Inter Semibold. Used in the left rail and index grids.
The accent lives in the border and the number, not in the fill.

**Content card**, Slate fill, Hairline border. The default container for copy, stats, or a
chart. Neutral, lets its content lead.

**Feature card**, Slate Raised fill, Hairline Bright border. One per screen maximum. Use for
the single moment that must outrank everything else.

**Accent card**, full accent fill with Void `#0B0C0F` text on top. **One per screen maximum.**
On dark, a saturated block is very loud. Reach for it only when a single idea must dominate.

**Icon card**, Slate fill, a grid icon centred in the upper area, label centred below in
Inter Semibold. Icon stroked in its fixed accent colour.

## Buttons

| Type | Fill | Border | Text | Use |
|------|------|--------|------|-----|
| Primary | Paper `#F2F3F5` pill | none | Void `#0B0C0F` + arrow | Main action on a screen |
| CTA | Violet `#B57BFF` pill | none | Void `#0B0C0F` | Booking, submitting. The only violet |
| Secondary | transparent pill | 1px Hairline Bright | Paper | Lower-priority action |
| Tag | Slate Raised pill | 1px Hairline | Paper Muted | Labels, categories, filters |

Pills are fully rounded (radius ≈ half the height). Note the inversion from light mode: the
primary button is now **light on dark**, not ink on cream.

## Stat callouts

When a single number beats a chart, use a big-number card: the figure in Archivo Black at
44–64pt in an accent colour, a short mono label beneath in Paper Muted. The card itself stays
Slate. **Do not fill stat cards with an accent**, colour the number instead. Violet stays out
of stat cards entirely.

## Tables

- Header row: Slate Raised fill, mono uppercase labels in Paper Muted, 10px, letter-spaced.
- Body rows: Void or Slate fill, 1px Hairline top border between rows.
- Numeric columns: JetBrains Mono, right-aligned, `white-space: nowrap`.
- Highlighted row: 1px accent left border plus Slate Raised fill. Never a full accent fill.

## Code blocks

Slate Raised fill, 1px Hairline border, radius 12px, JetBrains Mono at 13px, Paper text,
line-height 1.6. Comments in Paper Muted. No syntax rainbow: at most two accent colours if
highlighting is genuinely needed.

## Dividers

1px Hairline. Never a coloured rule, never a gradient, never double lines.

## Anatomy checklist (apply to every component)

- [ ] Flat single-tone fill from the three-step stack
- [ ] 1px Hairline border (Hairline Bright only for emphasis)
- [ ] Rounded corners, radius scaled to size
- [ ] Paper text, or Void text on an accent fill
- [ ] No drop shadow, no glow, no blur
- [ ] No thin coloured strip on any edge
- [ ] At most one accent-filled element on the screen
