import React from "react";

/** Slate Raised fill, Hairline Bright border. One per screen maximum. */
export function FeatureCard({ children, radius = "lg", padding = 28, style, ...rest }) {
  return (
    <div
      style={{
        background: "var(--surface-raised)",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius-" + radius + ")",
        padding,
        color: "var(--text-body)",
        fontFamily: "var(--font-body)",
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
