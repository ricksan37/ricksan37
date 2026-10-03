/** One proportion as a bar. Slate Raised track inside a hairline border. */
export interface ProgressGaugeProps {
  /** 0–100. */
  value: number;
  label?: string;
  tone?: "blue" | "amber" | "vermilion" | "green";
  showValue?: boolean;
  style?: React.CSSProperties;
}
export declare function ProgressGauge(props: ProgressGaugeProps): JSX.Element;
