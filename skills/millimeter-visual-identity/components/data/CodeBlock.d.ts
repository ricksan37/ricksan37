/** Monospace block on Slate Raised, 13px, line-height 1.6. No syntax rainbow. */
export interface CodeBlockProps {
  children: React.ReactNode;
  /** Optional mono caption bar, e.g. "CSS" or a filename. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function CodeBlock(props: CodeBlockProps): JSX.Element;
