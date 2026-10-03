Momentum and trend, up to four series.

```jsx
<LineChart labels={["Jan","Feb","Mar","Apr"]} series={[{name:"Ingest",values:[12,15,14,22]}]} />
```

- No curve smoothing. Straight segments only.
- Markers are filled in the series hue with a 1.5px Void ring so overlaps stay legible.
- Gridlines belong on the value axis only, in Hairline.
