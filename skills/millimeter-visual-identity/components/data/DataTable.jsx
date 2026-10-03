import React from "react";

/** Mono-numeric table. Slate Raised header, hairline row rules, no vertical lines. */
export function DataTable({ columns, rows, highlightIndex, highlightTone = "blue", style, ...rest }) {
  const accents = {
    blue: "var(--signal-blue)",
    amber: "var(--amber)",
    vermilion: "var(--vermilion)",
    green: "var(--grid-green)"
  };
  return (
    <div
      style={{
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        fontFamily: "var(--font-body)",
        ...style
      }}
      {...rest}
    >
      <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--surface-card)" }}>
        <thead>
          <tr style={{ background: "var(--surface-raised)" }}>
            {columns.map((c, i) => (
              <th
                key={i}
                style={{
                  textAlign: c.numeric ? "right" : "left",
                  padding: "10px 14px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--size-mono-sm)",
                  fontWeight: 500,
                  letterSpacing: "var(--track-mono)",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap"
                }}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => {
            const hot = ri === highlightIndex;
            return (
              <tr
                key={ri}
                style={{
                  background: hot ? "var(--surface-raised)" : "transparent",
                  borderTop: "1px solid var(--border-hairline)",
                  borderLeft: hot ? "1px solid " + (accents[highlightTone] || accents.blue) : "1px solid transparent"
                }}
              >
                {columns.map((c, ci) => (
                  <td
                    key={ci}
                    style={{
                      padding: "11px 14px",
                      textAlign: c.numeric ? "right" : "left",
                      fontFamily: c.numeric ? "var(--font-mono)" : "var(--font-body)",
                      fontSize: c.numeric ? 13 : 14,
                      color: ci === 0 ? "var(--text-body)" : "var(--text-muted)",
                      whiteSpace: c.numeric ? "nowrap" : "normal"
                    }}
                  >
                    {r[c.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
