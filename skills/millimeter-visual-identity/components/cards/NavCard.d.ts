/** Numbered nav card: Slate fill, accent border, accent number top-left, label bottom-left. */
export interface NavCardProps {
  /** Two-digit index, e.g. "01". Archivo Black, in the accent. */
  number: string;
  label: string;
  /** Rail order is fixed: 01 blue, 02 amber, 03 vermilion, 04 green. */
  tone?: "blue" | "amber" | "vermilion" | "green";
  /** Current section: steps the fill to Slate Raised. */
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function NavCard(props: NavCardProps): JSX.Element;
