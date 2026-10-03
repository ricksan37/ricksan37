/** Trend over time. Straight segments to stay honest and match the flat aesthetic. */
export interface LineSeries { name: string; values: number[]; tone?: "blue" | "amber" | "vermilion" | "green" }
export interface LineChartProps {
  labels: string[];
  /** Max four. Hairline gridlines on the value axis only. */
  series: LineSeries[];
  height?: number;
  kicker?: string;
  title?: string;
  style?: React.CSSProperties;
}
export declare function LineChart(props: LineChartProps): JSX.Element;
