import React from "react";
const MM_DNT_TONES={blue:"var(--signal-blue)",amber:"var(--amber)",vermilion:"var(--vermilion)",green:"var(--grid-green)"};
const MM_DNT_MONO={fontFamily:"var(--font-mono)",fontSize:"var(--size-mono-sm)",color:"var(--text-muted)",letterSpacing:"0.06em"};

/** Share. A 62% hole keeps it light, 2px Void gaps, legend right in mono. */
export function DonutChart({ data, size = 180, kicker, title, style, ...rest }) {
  const resolved = data.slice(0, 4).map((d, i) => ({ ...d, color: MM_DNT_TONES[d.tone] || [MM_DNT_TONES.blue, MM_DNT_TONES.amber, MM_DNT_TONES.vermilion, MM_DNT_TONES.green][i] }));
  const total = resolved.reduce((a, d) => a + d.value, 0) || 1;
  const r = 60, c = 2 * Math.PI * r, gap = 2;
  let offset = 0;
  return (
    <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-md)", padding: 20, fontFamily: "var(--font-body)", ...style }} {...rest}>
      {kicker ? (
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-mono-sm)", letterSpacing: "var(--track-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>{kicker}</div>
      ) : null}
      {title ? (
        <div style={{ fontFamily: "var(--font-display)", fontSize: 19, letterSpacing: "var(--track-display)", color: "var(--text-body)", marginBottom: 18 }}>{title}</div>
      ) : null}
      <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
        <svg width={size} height={size} viewBox="0 0 160 160" style={{ flex: "0 0 auto" }}>
          <g transform="rotate(-90 80 80)">
            {resolved.map((d, i) => {
              const len = (d.value / total) * c;
              const el = (
                <circle key={i} cx="80" cy="80" r={r} fill="none" stroke={d.color} strokeWidth="22"
                  strokeDasharray={Math.max(0, len - gap) + " " + (c - Math.max(0, len - gap))}
                  strokeDashoffset={-offset} />
              );
              offset += len;
              return el;
            })}
          </g>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 140 }}>
          {resolved.map((d, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: d.color, flex: "0 0 auto" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--size-mono-sm)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", flex: 1 }}>{d.label}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-body)" }}>{Math.round((d.value / total) * 100)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
