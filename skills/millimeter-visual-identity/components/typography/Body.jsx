import React from "react";

/** Calm Inter body copy. Line-height 1.65 minimum on dark grounds. */
export function Body({ children, size = "md", tone = "muted", lead = false, style, ...rest }) {
  const mmBodySize =
    size === "lg" ? "var(--size-body-lg)" : size === "sm" ? "var(--size-body-sm)" : "var(--size-body)";
  return (
    <p
      style={{
        fontFamily: "var(--font-body)",
        fontSize: mmBodySize,
        fontWeight: lead ? "var(--weight-lead)" : "var(--weight-body)",
        lineHeight: "var(--leading-body)",
        color: tone === "paper" ? "var(--text-body)" : "var(--text-muted)",
        margin: 0,
        maxWidth: "62ch",
        textWrap: "pretty",
        ...style
      }}
      {...rest}
    >
      {children}
    </p>
  );
}
