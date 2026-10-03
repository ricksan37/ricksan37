/**
 * The neutral card. Slate fill, 1px Hairline border, rounded, zero shadow.
 */
export interface ContentCardProps {
  children: React.ReactNode;
  /** Radius scales with card size: sm 12px, md 16px, lg 20px. */
  radius?: "sm" | "md" | "lg";
  padding?: number | string;
  style?: React.CSSProperties;
}
export declare function ContentCard(props: ContentCardProps): JSX.Element;
