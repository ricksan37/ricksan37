import React from "react";

const MM_GAUGE_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};

/** Single proportion. Track in Slate Raised, fill in one accent, value in Archivo Black. */
export function ProgressGauge({ value, label, tone = "blue", showValue = true, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{ fontFamily: "var(--font-body)", ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
        {label ? (
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
        ) : null}
        {showValue ? (
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              letterSpacing: "var(--track-display)",
              color: MM_GAUGE_TONES[tone] || MM_GAUGE_TONES.blue
            }}
          >
            {pct}%
          </span>
        ) : null}
      </div>
      <div
        style={{
          height: 10,
          borderRadius: "var(--radius-pill)",
          background: "var(--surface-raised)",
          border: "1px solid var(--border-hairline)",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: pct + "%",
            height: "100%",
            background: MM_GAUGE_TONES[tone] || MM_GAUGE_TONES.blue
          }}
        />
      </div>
    </div>
  );
}
