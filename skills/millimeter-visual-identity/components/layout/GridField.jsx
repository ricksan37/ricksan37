import React from "react";

/** The millimeter grid as a surface. Texture for a media zone, or the page ground itself. */
export function GridField({ children, opacity = 0.035, size = 24, framed = false, style, ...rest }) {
  const line = "rgba(255,255,255," + opacity + ")";
  return (
    <div
      style={{
        backgroundColor: "var(--void)",
        backgroundImage:
          "linear-gradient(" + line + " 1px,transparent 1px),linear-gradient(90deg," + line + " 1px,transparent 1px)",
        backgroundSize: size + "px " + size + "px",
        border: framed ? "1px solid var(--border-hairline)" : undefined,
        borderRadius: framed ? "var(--radius-lg)" : undefined,
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
