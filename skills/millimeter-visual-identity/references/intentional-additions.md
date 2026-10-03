## Intentional additions

The written source defines colour, type, layout, components and data-viz rules, but not a code API.
These were added to make it buildable, each one a direct translation of a documented rule:

- **`Icon`** wraps the substituted glyph set and enforces the fixed concept hues.
- **`Kicker`, `Display`, `Body`** turn the type rules into components so tracking,
  line-height and the muted-body rule cannot drift.
- **Chart components** (`ColumnChart`, `GroupedBarChart`, `LineChart`, `StackedBarChart`,
  `DonutChart`, `ProgressGauge`) implement the per-chart guidance in `dataviz.md`. The source is
  explicit that the data-viz layer is a principled extension of the palette, not extracted from a product.
- **`NavRail`, `GridField`, `ToneBlocks`, `Divider`** implement the signature composition, the grid
  CSS and the media-zone options from `layout.md`.
- **Hover, press, focus and disabled states** are defined above. The sources are silent on them, so
  they were derived from the tone stack, deliberately dull.

