import React from "react";
import { Icon } from "../icons/Icon.jsx";

/** Grid icon centred over a faint millimeter field, label centred below. */
export function IconCard({ name, glyph, tone, label, size = 32, style, ...rest }) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-sm)",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        fontFamily: "var(--font-body)",
        ...style
      }}
      {...rest}
    >
      <div
        style={{
          width: "100%",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          backgroundColor: "var(--void)",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)",
          backgroundSize: "12px 12px"
        }}
      >
        <Icon name={name} glyph={glyph} tone={tone} size={size} />
      </div>
      <span style={{ fontSize: 13, fontWeight: "var(--weight-lead)", color: "var(--text-body)" }}>{label}</span>
    </div>
  );
}
