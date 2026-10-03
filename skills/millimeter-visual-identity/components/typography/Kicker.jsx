import React from "react";

const MM_KICKER_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)",
  muted: "var(--paper-muted)"
};

/** Mono kicker. Opens every content slide or section. Nomenclature, not prose. */
export function Kicker({ children, tone = "blue", index, style, ...rest }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "var(--size-mono)",
        fontWeight: 500,
        letterSpacing: "var(--track-mono)",
        lineHeight: "var(--leading-mono)",
        textTransform: "uppercase",
        color: MM_KICKER_TONES[tone] || MM_KICKER_TONES.blue,
        ...style
      }}
      {...rest}
    >
      {index ? <span>{index}{" "}</span> : null}
      {children}
    </div>
  );
}
