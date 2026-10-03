/**
 * Icon over a dense grid field, label beneath. The grid behind the glyph is the point.
 */
export interface IconCardProps {
  /** Concept name from the fixed hue map. */
  name?: string;
  /** Any other Lucide glyph name. */
  glyph?: string;
  tone?: string;
  label: string;
  size?: number;
  style?: React.CSSProperties;
}
export declare function IconCard(props: IconCardProps): JSX.Element;
