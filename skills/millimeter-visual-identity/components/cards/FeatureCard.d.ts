/** The one card that outranks everything else on a screen. Slate Raised, Hairline Bright. */
export interface FeatureCardProps {
  children: React.ReactNode;
  radius?: "sm" | "md" | "lg";
  padding?: number | string;
  style?: React.CSSProperties;
}
export declare function FeatureCard(props: FeatureCardProps): JSX.Element;
