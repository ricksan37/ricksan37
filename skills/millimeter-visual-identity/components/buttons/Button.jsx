import React from "react";

const MM_BTN_VARIANTS = {
  primary: { background: "var(--paper)", color: "var(--void)", border: "1px solid transparent" },
  cta: { background: "var(--ultra-violet)", color: "var(--void)", border: "1px solid transparent" },
  secondary: { background: "transparent", color: "var(--paper)", border: "1px solid var(--hairline-bright)" }
};

const MM_BTN_HOVER = {
  primary: "color-mix(in oklab, var(--paper) 86%, var(--void))",
  cta: "color-mix(in oklab, var(--ultra-violet) 86%, var(--void))",
  secondary: "var(--slate-raised)"
};

/** Pill button. Primary is light on dark. Violet is action only. */
export function Button({
  children,
  variant = "primary",
  size = "md",
  arrow,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [mmHot, setMmHot] = React.useState(false);
  const pad = size === "sm" ? "8px 16px" : size === "lg" ? "16px 30px" : "12px 24px";
  const v = MM_BTN_VARIANTS[variant] || MM_BTN_VARIANTS.primary;
  const showArrow = arrow === undefined ? variant === "primary" : arrow;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setMmHot(true)}
      onMouseLeave={() => setMmHot(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: pad,
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-body)",
        fontSize: size === "sm" ? 14 : 15,
        fontWeight: "var(--weight-lead)",
        lineHeight: 1,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "background-color 120ms linear, border-color 120ms linear",
        ...v,
        ...(mmHot && !disabled
          ? variant === "secondary"
            ? { background: MM_BTN_HOVER.secondary, borderColor: "var(--paper-muted)" }
            : { background: MM_BTN_HOVER[variant] }
          : null),
        ...style
      }}
      {...rest}
    >
      {children}
      {showArrow ? <span style={{ fontFamily: "var(--font-mono)", fontSize: 15 }}>{"\u2192"}</span> : null}
    </button>
  );
}
