import React from "react";

/** Default container. Slate fill, hairline border, no shadow. */
export function ContentCard({ children, radius = "md", padding = 24, style, ...rest }) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-hairline)",
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
