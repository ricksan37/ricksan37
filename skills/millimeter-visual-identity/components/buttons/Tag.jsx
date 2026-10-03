import React from "react";

/** Slate Raised pill for labels, categories and filters. */
export function Tag({ children, active = false, onClick, style, ...rest }) {
  const clickable = typeof onClick === "function";
  return (
    <span
      onClick={onClick}
      role={clickable ? "button" : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 12px",
        borderRadius: "var(--radius-pill)",
        background: "var(--slate-raised)",
        border: "1px solid " + (active ? "var(--hairline-bright)" : "var(--hairline)"),
        color: active ? "var(--paper)" : "var(--text-muted)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--size-mono)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        lineHeight: 1.2,
        cursor: clickable ? "pointer" : "default",
        ...style
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
