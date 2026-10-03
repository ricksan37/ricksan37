/**
 * The default quantity chart. Full-saturation accent bars, no borders, mono data labels.
 */
export interface ColumnDatum { label: string; value: number }
export interface ColumnChartProps {
  data: ColumnDatum[];
  tone?: "blue" | "amber" | "vermilion" | "green";
  height?: number;
  kicker?: string;
  title?: string;
  style?: React.CSSProperties;
}
export declare function ColumnChart(props: ColumnChartProps): JSX.Element;
