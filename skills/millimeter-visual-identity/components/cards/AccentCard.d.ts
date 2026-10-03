/** Saturated accent block with Void text. At most one per screen. */
export interface AccentCardProps {
  children: React.ReactNode;
  /** Violet is deliberately not an option: it is an action colour, not a surface. */
  tone?: "blue" | "amber" | "vermilion" | "green";
  radius?: "sm" | "md" | "lg";
  padding?: number | string;
  style?: React.CSSProperties;
}
export declare function AccentCard(props: AccentCardProps): JSX.Element;
