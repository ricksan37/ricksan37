/** Tone-block composition for a media zone. Void, Slate, Slate Raised, one accent border among them. */
export interface ToneBlocksProps {
  /** Three or four blocks. */
  count?: number;
  /** Which block carries the accent border. */
  accentIndex?: number;
  tone?: "blue" | "amber" | "vermilion" | "green";
  style?: React.CSSProperties;
}
export declare function ToneBlocks(props: ToneBlocksProps): JSX.Element;
