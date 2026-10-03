import React from "react";

const MM_STAT_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)",
  paper: "var(--paper)"
};

/** Big number card. The figure is coloured, the card stays Slate. */
export function StatCard({ value, label, unit, tone = "blue", size = "md", delta, style, ...rest }) {
  const color = MM_STAT_TONES[tone] || MM_STAT_TONES.blue;
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-md)",
        padding: "20px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        fontFamily: "var(--font-body)",
        ...style
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: size === "sm" ? "var(--size-stat-sm)" : "var(--size-stat)",
            letterSpacing: "var(--track-display)",
            lineHeight: 0.9,
            color
          }}
        >
          {value}
        </span>
        {unit ? (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text-muted)" }}>{unit}</span>
        ) : null}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--size-mono-sm)",
            letterSpacing: "var(--track-mono)",
            textTransform: "uppercase",
            color: "var(--text-muted)"
          }}
        >
          {label}
        </span>
        {delta ? (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--size-mono-sm)",
              color: delta.trim().startsWith("-") ? "var(--delta-neg)" : "var(--delta-pos)"
            }}
          >
            {delta}
          </span>
        ) : null}
      </div>
    </div>
  );
}
