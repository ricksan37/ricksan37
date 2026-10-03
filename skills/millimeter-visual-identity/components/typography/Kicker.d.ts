/**
 * Mono uppercase kicker in an accent colour. Every content section opens with one.
 */
export interface KickerProps {
  children: React.ReactNode;
  /** Accent hue. Follows the screen's lead accent. */
  tone?: "blue" | "amber" | "vermilion" | "green" | "muted";
  /** Optional leading number, rendered as `01 — LABEL`. The dash is nomenclature here. */
  index?: string;
  style?: React.CSSProperties;
}
export declare function Kicker(props: KickerProps): JSX.Element;
