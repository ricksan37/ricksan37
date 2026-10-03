import React from "react";
import { NavCard } from "../cards/NavCard.jsx";

const MM_RAIL_ORDER = ["blue", "amber", "vermilion", "green"];

/** The signature left rail: four numbered cards, one violet CTA below. */
export function NavRail({ items = [], activeIndex = 0, cta, onSelect, onCta, style, ...rest }) {
  return (
    <nav
      style={{
        width: 196,
        flex: "0 0 196px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        fontFamily: "var(--font-body)",
        ...style
      }}
      {...rest}
    >
      {items.map((it, i) => (
        <NavCard
          key={i}
          number={it.number || String(i + 1).padStart(2, "0")}
          label={it.label}
          tone={it.tone || MM_RAIL_ORDER[i % 4]}
          active={i === activeIndex}
          onClick={onSelect ? () => onSelect(i) : undefined}
        />
      ))}
      {cta ? (
        <div
          onClick={onCta}
          role={onCta ? "button" : undefined}
          style={{
            marginTop: "auto",
            background: "var(--ultra-violet)",
            borderRadius: "var(--radius-sm)",
            padding: "14px 14px 16px",
            color: "var(--void)",
            cursor: onCta ? "pointer" : "default",
            display: "flex",
            flexDirection: "column",
            gap: 6
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--size-mono-sm)",
              letterSpacing: "var(--track-mono)",
              textTransform: "uppercase",
              opacity: 0.7
            }}
          >
            {cta.kicker || "action"}
          </span>
          <span style={{ fontSize: 15, fontWeight: "var(--weight-lead)", lineHeight: 1.25 }}>{cta.label}</span>
        </div>
      ) : null}
    </nav>
  );
}
