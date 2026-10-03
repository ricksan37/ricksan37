The connective texture of the system. Use as the page ground, or framed as a media-zone field.

```jsx
<GridField style={{ minHeight: "100vh", padding: 48 }}>…</GridField>
<GridField framed opacity={0.06} size={12} style={{ height: 320 }} />
```

- Always CSS, never a raster asset.
- 0.03 to 0.05 on pages. Above 0.06 the grid competes with the content, below 0.02 the system loses its texture.
