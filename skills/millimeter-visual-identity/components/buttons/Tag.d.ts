/** Mono label pill on Slate Raised with a hairline border. */
export interface TagProps {
  children: React.ReactNode;
  /** Selected filter state: Hairline Bright border, Paper text. Never an accent fill. */
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
