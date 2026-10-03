/** Composition over categories. Max four segments, separated by a 1px Void gap. */
export interface StackedSeries { name: string; values: number[]; tone?: "blue" | "amber" | "vermilion" | "green" }
export interface StackedBarChartProps {
  categories: string[];
  /** Order matters: pass the largest and most stable series first, it renders at the bottom. */
  series: StackedSeries[];
  height?: number;
  kicker?: string;
  title?: string;
  style?: React.CSSProperties;
}
export declare function StackedBarChart(props: StackedBarChartProps): JSX.Element;
