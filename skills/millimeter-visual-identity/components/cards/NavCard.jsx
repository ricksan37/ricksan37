import React from "react";

const MM_NAV_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};

/** Numbered rail card. The accent lives in the border and the number, never the fill. */
export function NavCard({ number, label, tone = "blue", active = false, onClick, style, ...rest }) {
  const accent = MM_NAV_TONES[tone] || MM_NAV_TONES.blue;
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      style={{
        background: active ? "var(--surface-raised)" : "var(--surface-card)",
        border: "1px solid " + accent,
        borderRadius: "var(--radius-sm)",
        padding: "12px 14px",
        minHeight: 84,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: onClick ? "pointer" : "default",
        fontFamily: "var(--font-body)",
        ...style
      }}
      {...rest}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 20,
          letterSpacing: "var(--track-display)",
          color: accent,
          lineHeight: 1
        }}
      >
        {number}
      </span>
      <span style={{ fontSize: 14, fontWeight: "var(--weight-lead)", color: "var(--text-body)", lineHeight: 1.25 }}>
        {label}
      </span>
    </div>
  );
}
