import React from "react";

const MM_DISPLAY_SIZES = {
  display: { fontSize: "var(--size-display)", lineHeight: "var(--leading-display)" },
  displaySm: { fontSize: "var(--size-display-sm)", lineHeight: "var(--leading-display)" },
  h1: { fontSize: "var(--size-h1)", lineHeight: "var(--leading-heading)" },
  h2: { fontSize: "var(--size-h2)", lineHeight: "var(--leading-heading)" },
  h3: { fontSize: "var(--size-h3)", lineHeight: "var(--leading-heading)" }
};

/** Archivo Black heading. The jump from display to body must stay dramatic. */
export function Display({ children, level = "h1", as, tone = "paper", style, ...rest }) {
  const Tag = as || (level === "display" || level === "displaySm" ? "h1" : level);
  return (
    <Tag
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        letterSpacing: "var(--track-display)",
        color: tone === "accent" ? "var(--accent-lead)" : "var(--text-body)",
        margin: 0,
        textWrap: "balance",
        ...MM_DISPLAY_SIZES[level],
        ...style
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
