Compare two sets over the same categories.

```jsx
<GroupedBarChart
  categories={["Q1","Q2","Q3"]}
  series={[{name:"2023",values:[12,18,22]},{name:"2024",values:[19,24,31]}]}
/>
```

- Blue plus Amber is the fixed two-series pairing. Do not substitute another combination.
- Two series ideally, three at most. Beyond that, split the chart.
