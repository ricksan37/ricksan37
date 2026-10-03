import React from "react";

/** 1px Hairline rule. Never coloured, never doubled, never a gradient. */
export function Divider({ vertical = false, style, ...rest }) {
  return (
    <div
      role="separator"
      style={
        vertical
          ? { width: 1, alignSelf: "stretch", background: "var(--border-hairline)", ...style }
          : { height: 1, width: "100%", background: "var(--border-hairline)", ...style }
      }
      {...rest}
    />
  );
}
