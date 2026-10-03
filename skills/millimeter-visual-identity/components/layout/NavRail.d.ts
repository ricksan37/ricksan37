/**
 * The signature composition's left rail. Four accent-bordered numbered cards, one violet CTA card.
 */
export interface NavRailItem {
  label: string;
  number?: string;
  tone?: "blue" | "amber" | "vermilion" | "green";
}
export interface NavRailProps {
  /** Four items is the canonical count. Hues follow position when `tone` is omitted. */
  items: NavRailItem[];
  activeIndex?: number;
  /** The one violet element on the screen. */
  cta?: { label: string; kicker?: string };
  onSelect?: (index: number) => void;
  onCta?: () => void;
  style?: React.CSSProperties;
}
export declare function NavRail(props: NavRailProps): JSX.Element;
