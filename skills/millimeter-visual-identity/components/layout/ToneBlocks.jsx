import React from "react";

const MM_TONE_STEPS = ["var(--void)", "var(--slate)", "var(--slate-raised)"];
const MM_TONE_ACCENTS = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};

/** Media-zone composition: rectangles stepping through the tone stack, one accent-bordered. */
export function ToneBlocks({ count = 4, accentIndex = 2, tone = "blue", style, ...rest }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0,1fr))",
        gap: 12,
        ...style
      }}
      {...rest}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            background: MM_TONE_STEPS[i % 3],
            border:
              i === accentIndex
                ? "1px solid " + (MM_TONE_ACCENTS[tone] || MM_TONE_ACCENTS.blue)
                : "1px solid var(--border-hairline)",
            borderRadius: "var(--radius-sm)",
            minHeight: 96
          }}
        />
      ))}
    </div>
  );
}
