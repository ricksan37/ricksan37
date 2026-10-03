Line glyph stroked in its fixed accent colour. Use inside IconCard, buttons, table cells and list rows.

```jsx
<Icon name="database" size={28} />
<Icon glyph="arrow-up-right" tone="var(--grid-green)" size={16} />
```

- The eight concept names are colour-locked: database blue, chart vermilion, server green, code violet, pipeline amber, cloud blue, filter vermilion, network green. Do not recolour them per screen.
- Glyph keys available: database, chart-column, server, code, workflow, cloud, filter, network, arrow-up-right, arrow-right, arrow-down-right, chevron-right, check, x, search, layers, table-2, activity, gauge, terminal, settings, circle-dot, trending-up, trending-down, grid-3x3, download, file-text.
- Icons belong on a grid ground. Pair with `IconCard` for the canonical treatment.
- Substituted set: Lucide outline, copied into `assets/icons/`. Flagged in readme.md.
