import React from "react";

/** Slate Raised code block. At most two accent colours if highlighting is genuinely needed. */
export function CodeBlock({ children, label, style, ...rest }) {
  return (
    <div
      style={{
        background: "var(--surface-raised)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        ...style
      }}
      {...rest}
    >
      {label ? (
        <div
          style={{
            padding: "9px 16px",
            borderBottom: "1px solid var(--border-hairline)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--size-mono-sm)",
            letterSpacing: "var(--track-mono)",
            textTransform: "uppercase",
            color: "var(--text-muted)"
          }}
        >
          {label}
        </div>
      ) : null}
      <pre
        style={{
          margin: 0,
          padding: 16,
          fontFamily: "var(--font-mono)",
          fontSize: "var(--size-code)",
          lineHeight: "var(--leading-code)",
          color: "var(--text-body)",
          overflowX: "auto"
        }}
      >
        {children}
      </pre>
    </div>
  );
}
