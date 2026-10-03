Parts of a whole across categories.

```jsx
<StackedBarChart
  categories={["Q1","Q2","Q3"]}
  series={[{name:"Batch",values:[10,12,14]},{name:"Stream",values:[4,7,9]}]}
/>
```

- Largest and most stable segment first, so it sits at the bottom.
- Four segments maximum. Group the tail into "Autres" rather than adding a fifth hue.
