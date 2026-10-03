/** Two or three sets side by side. Legend top, in mono. */
export interface BarSeries { name: string; values: number[]; tone?: "blue" | "amber" | "vermilion" | "green" }
export interface GroupedBarChartProps {
  categories: string[];
  /** Max three. Default hues follow the fixed order: blue, amber, vermilion. */
  series: BarSeries[];
  height?: number;
  kicker?: string;
  title?: string;
  style?: React.CSSProperties;
}
export declare function GroupedBarChart(props: GroupedBarChartProps): JSX.Element;
