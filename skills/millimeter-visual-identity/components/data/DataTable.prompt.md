Dense table for figures. Header mono and muted, numbers mono and right-aligned.

```jsx
<DataTable
  columns={[{ key: "src", label: "Source" }, { key: "vol", label: "Volume", numeric: true }]}
  rows={[{ src: "Events API", vol: "1 284 902" }]}
  highlightIndex={0}
/>
```

- Highlight is an accent left border plus a tone step, never a filled row.
- No vertical rules, no zebra striping, no coloured header.
