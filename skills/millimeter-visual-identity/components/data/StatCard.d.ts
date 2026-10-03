/**
 * One figure that beats a chart. Archivo Black in an accent on a Slate card.
 */
export interface StatCardProps {
  /** The figure. Keep it short: "38%", "1.2M", "04". */
  value: string;
  /** Mono uppercase caption beneath. */
  label: string;
  unit?: string;
  /** Violet is deliberately excluded from stat cards. */
  tone?: "blue" | "amber" | "vermilion" | "green" | "paper";
  size?: "sm" | "md";
  /** Signed delta, e.g. "+4.2 pts". Green when positive, Vermilion when negative. */
  delta?: string;
  style?: React.CSSProperties;
}
export declare function StatCard(props: StatCardProps): JSX.Element;
