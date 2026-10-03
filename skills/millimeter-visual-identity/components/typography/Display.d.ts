/** Archivo Black display heading, tracking -0.02em. */
export interface DisplayProps {
  children: React.ReactNode;
  /** Size step. `display` is 88px, `h3` is 19px. */
  level?: "display" | "displaySm" | "h1" | "h2" | "h3";
  /** Override the rendered tag. */
  as?: keyof JSX.IntrinsicElements;
  tone?: "paper" | "accent";
  style?: React.CSSProperties;
}
export declare function Display(props: DisplayProps): JSX.Element;
