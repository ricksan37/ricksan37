/**
 * Line glyph in a fixed accent colour, rendered as inline SVG with a 1.75px stroke.
 * Substitution note: the brand source ships no icon files, so the Lucide outline set
 * (ISC licence) was copied into `assets/icons/` and inlined here as the closest match.
 */
export interface IconProps {
  /** Concept name with a locked hue: database, chart, server, code, pipeline, cloud, filter, network. */
  name?: string;
  /** Any glyph key from `MM_GLYPHS`, e.g. "arrow-up-right", "search", "grid-3x3". */
  glyph?: string;
  /** Colour override. Only for glyphs outside the fixed concept map. */
  tone?: string;
  size?: number;
  /** Fine strokes by default. Do not go above 2. */
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
export declare const MM_GLYPHS: Record<string, string>;
export declare const MM_ICON_CONCEPTS: Record<string, { glyph: string; tone: string }>;
