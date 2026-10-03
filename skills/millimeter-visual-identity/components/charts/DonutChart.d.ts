/** Share of a whole. 62% hole, 2px Void gaps between segments, legend right. */
export interface DonutDatum { label: string; value: number; tone?: "blue" | "amber" | "vermilion" | "green" }
export interface DonutChartProps {
  /** Max four segments. */
  data: DonutDatum[];
  size?: number;
  kicker?: string;
  title?: string;
  style?: React.CSSProperties;
}
export declare function DonutChart(props: DonutChartProps): JSX.Element;
