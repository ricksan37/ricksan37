/**
 * Millimeter grid ground, built in CSS. Opacity stays between 0.03 and 0.05, or 0.06 when framed as texture.
 */
export interface GridFieldProps {
  children?: React.ReactNode;
  /** 0.03–0.05 for page grounds, 0.06 for a dense framed field. Above 0.06 it competes with content. */
  opacity?: number;
  /** Cell size in px. 24 for pages, 12 for dense fields. */
  size?: number;
  /** Wrap in a hairline border with a 20px radius. */
  framed?: boolean;
  style?: React.CSSProperties;
}
export declare function GridField(props: GridFieldProps): JSX.Element;
