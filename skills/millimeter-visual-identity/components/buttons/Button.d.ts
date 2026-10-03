/**
 * Pill button. Primary is a Paper pill with Void text, CTA is the only violet on a screen.
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** `primary` Paper pill · `cta` Ultra Violet, booking and submitting only · `secondary` ghost pill. */
  variant?: "primary" | "cta" | "secondary";
  size?: "sm" | "md" | "lg";
  /** Trailing arrow. On by default for `primary`. */
  arrow?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
