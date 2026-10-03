import React from "react";

const MM_ACCENT_FILLS = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};

/** Full accent fill with Void text. One per screen maximum. Violet is never allowed here. */
export function AccentCard({ children, tone = "blue", radius = "lg", padding = 28, style, ...rest }) {
  return (
    <div
      style={{
        background: MM_ACCENT_FILLS[tone] || MM_ACCENT_FILLS.blue,
        border: "1px solid transparent",
        borderRadius: "var(--radius-" + radius + ")",
        padding,
        color: "var(--text-on-accent)",
        fontFamily: "var(--font-body)",
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
