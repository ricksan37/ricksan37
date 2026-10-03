/** Table with a Slate Raised header, mono numeric columns and hairline row rules. */
export interface DataTableColumn {
  key: string;
  label: string;
  /** Right-aligns and sets JetBrains Mono with `white-space: nowrap`. */
  numeric?: boolean;
}
export interface DataTableProps {
  columns: DataTableColumn[];
  rows: Record<string, React.ReactNode>[];
  /** Row to emphasise: accent left border plus Slate Raised fill. Never a full accent fill. */
  highlightIndex?: number;
  highlightTone?: "blue" | "amber" | "vermilion" | "green";
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
