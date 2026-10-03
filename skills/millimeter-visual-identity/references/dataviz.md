# Data visualisation notes

The data-viz layer is a principled extension of the palette rather than something extracted from a
product. Be transparent about that if asked.

## Six rules for every chart

1. **Flat only.** No 3-D, no gradients, no glow, no drop shadow. Solid fills.
2. **One idea per chart.** Each chart answers a single question. Split, do not cram.
3. **Accent coding.** Colour carries meaning. Fix a hue per series and keep it across the deck.
4. **Muted chrome.** Axis text is Paper Muted in JetBrains Mono. Gridlines are Hairline, on the
   value axis only. The chrome must never outweigh the data.
5. **Slate ground.** Charts sit on Slate cards, never on Void directly and never on an accent.
6. **Direct labels.** Label the data, not a legend, whenever space allows. Labels in Paper, mono, 10–11px.

## Fixed colour usage

- Single series → Signal Blue.
- Two-series comparison → Blue plus Amber. This pairing is fixed.
- Three-part composition → Blue (base, most stable), Amber, Vermilion.
- Four categories → Blue, Amber, Vermilion, Green.
- Positive delta → Green. Negative delta → Vermilion. Never inverted.
- Violet stays out of charts and stat cards. It is an action colour.
- Never more than four series. Group the tail into "Autres".

## Per-chart guidance

**Column** (`ColumnChart`) quantities over discrete periods. One series, one hue, mono labels above
the bars, bar fill at full accent saturation with no border. The default quantity chart.

**Grouped bar** (`GroupedBarChart`) compare two sets. Blue vs Amber, legend top in mono, cap at 2–3 series.

**Line** (`LineChart`) momentum and trend. Straight segments, no smoothing, 2px stroke, circle
markers filled in the series hue with a 1.5px Void ring so overlapping points stay legible.

**Stacked** (`StackedBarChart`) parts of a whole. Largest and most stable segment at the bottom,
max 3–4 segments, 1px Void gap between segments rather than a white border.

**Donut** (`DonutChart`) share. A 62 percent hole keeps it light, 2px Void gaps, legend right in
mono with Paper Muted labels and Paper values.

**Progress / gauge** (`ProgressGauge`) a single proportion. Track in Slate Raised, fill in one
accent, both inside a Hairline border, value in Archivo Black trailing.

**Big stat** (`StatCard`) when one figure beats any chart. Archivo Black 44–64px in an accent on a
Slate card. The card is never accent-filled.

## Dashboard composition

A KPI row of three or four big-number cards above two charts on one grid. Consistent gaps,
everything on Void with the grid showing. Stay calm even when dense: no chart junk, no competing
accents, one lead hue across the whole board. See `../ui_kits/dashboard/`.

**Dark-specific trap:** a dashboard full of saturated cards is the single most common way this
system gets diluted. Keep cards Slate and let colour live in the data.

## Native vs image

Keep charts native and editable where the format allows, styled hard. Only render to an image for
chart types the native engine cannot represent (Sankey, network graph, chord).
