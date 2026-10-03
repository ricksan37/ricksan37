# UI kit · Ingest dashboard

A four-view data dashboard built entirely from this system's components. It is the canonical
dashboard composition from `references/dataviz.md`: a KPI row above two charts, everything on
Void with the millimeter grid showing, cards kept Slate so colour lives in the data.

## Views

| View | Content | Components used |
|------|---------|-----------------|
| Overview | Range filter, four stat cards, line and donut, column plus a read-of-the-week card | StatCard, LineChart, DonutChart, ColumnChart, ContentCard, Tag, Button, Icon |
| Sources | Kind filter, source table with a selected row, detail feature card | DataTable, Tag, FeatureCard, StatCard, ContentCard, Icon |
| Pipeline | Four icon cards, stage gauges, stacked chart, run log, one accent card | IconCard, ProgressGauge, StackedBarChart, CodeBlock, AccentCard |
| Reports | Digest composer, artefact grid field, report table | ContentCard, GridField, DataTable, Tag, Button |

## Interactions

The left rail switches views. Range chips on Overview rescale the figures. On Sources, the kind
chips filter rows and clicking a source name moves the highlight and the detail card.

## Source note

The brand source is a written identity system with no product screens, so this kit is a
composition of the documented layout rules, not a recreation of an existing product view.
