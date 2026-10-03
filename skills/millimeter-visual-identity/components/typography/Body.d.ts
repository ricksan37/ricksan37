/** Inter body paragraph. Secondary copy sits in Paper Muted, not Paper. */
export interface BodyProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  /** `muted` (#9BA1AC) for secondary copy, `paper` (#F2F3F5) for lead paragraphs. */
  tone?: "muted" | "paper";
  /** Semibold lead-in. */
  lead?: boolean;
  style?: React.CSSProperties;
}
export declare function Body(props: BodyProps): JSX.Element;
