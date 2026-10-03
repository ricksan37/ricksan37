/* @ds-bundle: {"format":4,"namespace":"MillimeterDarkDesignSystem_9b3f65","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Tag","sourcePath":"components/buttons/Tag.jsx"},{"name":"AccentCard","sourcePath":"components/cards/AccentCard.jsx"},{"name":"ContentCard","sourcePath":"components/cards/ContentCard.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"IconCard","sourcePath":"components/cards/IconCard.jsx"},{"name":"NavCard","sourcePath":"components/cards/NavCard.jsx"},{"name":"ColumnChart","sourcePath":"components/charts/ColumnChart.jsx"},{"name":"DonutChart","sourcePath":"components/charts/DonutChart.jsx"},{"name":"GroupedBarChart","sourcePath":"components/charts/GroupedBarChart.jsx"},{"name":"LineChart","sourcePath":"components/charts/LineChart.jsx"},{"name":"StackedBarChart","sourcePath":"components/charts/StackedBarChart.jsx"},{"name":"CodeBlock","sourcePath":"components/data/CodeBlock.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"ProgressGauge","sourcePath":"components/data/ProgressGauge.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"MM_GLYPHS","sourcePath":"components/icons/Icon.jsx"},{"name":"MM_ICON_CONCEPTS","sourcePath":"components/icons/Icon.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"GridField","sourcePath":"components/layout/GridField.jsx"},{"name":"NavRail","sourcePath":"components/layout/NavRail.jsx"},{"name":"ToneBlocks","sourcePath":"components/layout/ToneBlocks.jsx"},{"name":"Body","sourcePath":"components/typography/Body.jsx"},{"name":"Display","sourcePath":"components/typography/Display.jsx"},{"name":"Kicker","sourcePath":"components/typography/Kicker.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"dea63ea4d480","components/buttons/Tag.jsx":"ff5c39d3db7c","components/cards/AccentCard.jsx":"4ad180bcf8aa","components/cards/ContentCard.jsx":"30e547ac82b3","components/cards/FeatureCard.jsx":"8a1c03c5c4e8","components/cards/IconCard.jsx":"1d86c1ca65ec","components/cards/NavCard.jsx":"afc3942a3977","components/charts/ColumnChart.jsx":"c163766fc3ec","components/charts/DonutChart.jsx":"5701ca1f3082","components/charts/GroupedBarChart.jsx":"16accb1961bd","components/charts/LineChart.jsx":"0f75c2a7e715","components/charts/StackedBarChart.jsx":"0e8f61c532a5","components/data/CodeBlock.jsx":"2524e8a272f1","components/data/DataTable.jsx":"9958fd757303","components/data/ProgressGauge.jsx":"8b251b33c2cf","components/data/StatCard.jsx":"de20843410e1","components/icons/Icon.jsx":"2baa29661e29","components/layout/Divider.jsx":"c61ed132e93e","components/layout/GridField.jsx":"9a8724e48caf","components/layout/NavRail.jsx":"4229a09fb13f","components/layout/ToneBlocks.jsx":"c9875b12b23d","components/typography/Body.jsx":"47d56feca12b","components/typography/Display.jsx":"ae7f22aac9f1","components/typography/Kicker.jsx":"8eabc0c39b6f","ui_kits/dashboard/Overview.jsx":"67d9f4183547","ui_kits/dashboard/Pipeline.jsx":"1b60ae092afc","ui_kits/dashboard/Reports.jsx":"d4451eaadb8e","ui_kits/dashboard/Shell.jsx":"5c7e81b4df15","ui_kits/dashboard/Sources.jsx":"1da6cf59d9de"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MillimeterDarkDesignSystem_9b3f65 = window.MillimeterDarkDesignSystem_9b3f65 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_BTN_VARIANTS = {
  primary: {
    background: "var(--paper)",
    color: "var(--void)",
    border: "1px solid transparent"
  },
  cta: {
    background: "var(--ultra-violet)",
    color: "var(--void)",
    border: "1px solid transparent"
  },
  secondary: {
    background: "transparent",
    color: "var(--paper)",
    border: "1px solid var(--hairline-bright)"
  }
};
const MM_BTN_HOVER = {
  primary: "color-mix(in oklab, var(--paper) 86%, var(--void))",
  cta: "color-mix(in oklab, var(--ultra-violet) 86%, var(--void))",
  secondary: "var(--slate-raised)"
};

/** Pill button. Primary is light on dark. Violet is action only. */
function Button({
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
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setMmHot(true),
    onMouseLeave: () => setMmHot(false),
    style: {
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
      ...(mmHot && !disabled ? variant === "secondary" ? {
        background: MM_BTN_HOVER.secondary,
        borderColor: "var(--paper-muted)"
      } : {
        background: MM_BTN_HOVER[variant]
      } : null),
      ...style
    }
  }, rest), children, showArrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 15
    }
  }, "\u2192") : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Slate Raised pill for labels, categories and filters. */
function Tag({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const clickable = typeof onClick === "function";
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    role: clickable ? "button" : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      background: "var(--slate-raised)",
      border: "1px solid " + (active ? "var(--hairline-bright)" : "var(--hairline)"),
      color: active ? "var(--paper)" : "var(--text-muted)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      lineHeight: 1.2,
      cursor: clickable ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Tag.jsx", error: String((e && e.message) || e) }); }

// components/cards/AccentCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_ACCENT_FILLS = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};

/** Full accent fill with Void text. One per screen maximum. Violet is never allowed here. */
function AccentCard({
  children,
  tone = "blue",
  radius = "lg",
  padding = 28,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: MM_ACCENT_FILLS[tone] || MM_ACCENT_FILLS.blue,
      border: "1px solid transparent",
      borderRadius: "var(--radius-" + radius + ")",
      padding,
      color: "var(--text-on-accent)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { AccentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/AccentCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ContentCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Default container. Slate fill, hairline border, no shadow. */
function ContentCard({
  children,
  radius = "md",
  padding = 24,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-" + radius + ")",
      padding,
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ContentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ContentCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Slate Raised fill, Hairline Bright border. One per screen maximum. */
function FeatureCard({
  children,
  radius = "lg",
  padding = 28,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-raised)",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-" + radius + ")",
      padding,
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/NavCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_NAV_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};

/** Numbered rail card. The accent lives in the border and the number, never the fill. */
function NavCard({
  number,
  label,
  tone = "blue",
  active = false,
  onClick,
  style,
  ...rest
}) {
  const accent = MM_NAV_TONES[tone] || MM_NAV_TONES.blue;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    role: onClick ? "button" : undefined,
    style: {
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
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      letterSpacing: "var(--track-display)",
      color: accent,
      lineHeight: 1
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: "var(--weight-lead)",
      color: "var(--text-body)",
      lineHeight: 1.25
    }
  }, label));
}
Object.assign(__ds_scope, { NavCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/NavCard.jsx", error: String((e && e.message) || e) }); }

// components/charts/ColumnChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_COL_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};
const MM_COL_MONO = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--size-mono-sm)",
  color: "var(--text-muted)",
  letterSpacing: "0.06em"
};
function MmColFrame({
  kicker,
  title,
  legend,
  height,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      padding: 20,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), kicker || title || legend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 6
    }
  }, kicker) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      letterSpacing: "var(--track-display)",
      color: "var(--text-body)"
    }
  }, title) : null), legend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, legend) : null) : null, children);
}
function MmColLegend({
  items
}) {
  return items.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      color: "var(--text-muted)",
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: s.color,
      borderRadius: 2
    }
  }), s.name));
}

/** Quantities over discrete periods. One series, one hue, mono labels above the bars. */
function ColumnChart({
  data,
  tone = "blue",
  height = 200,
  kicker,
  title,
  style,
  ...rest
}) {
  const color = MM_COL_TONES[tone] || MM_COL_TONES.blue;
  const max = Math.max(...data.map(d => d.value));
  return /*#__PURE__*/React.createElement(MmColFrame, _extends({
    kicker: kicker,
    title: title,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 10,
      height,
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 8,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...MM_COL_MONO,
      color: "var(--text-body)"
    }
  }, d.value), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: Math.max(2, d.value / max * (height - 30)),
      background: color
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 10
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...MM_COL_MONO,
      flex: 1,
      textAlign: "center",
      textTransform: "uppercase"
    }
  }, d.label))));
}
Object.assign(__ds_scope, { ColumnChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/ColumnChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/DonutChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_DNT_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};
const MM_DNT_MONO = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--size-mono-sm)",
  color: "var(--text-muted)",
  letterSpacing: "0.06em"
};

/** Share. A 62% hole keeps it light, 2px Void gaps, legend right in mono. */
function DonutChart({
  data,
  size = 180,
  kicker,
  title,
  style,
  ...rest
}) {
  const resolved = data.slice(0, 4).map((d, i) => ({
    ...d,
    color: MM_DNT_TONES[d.tone] || [MM_DNT_TONES.blue, MM_DNT_TONES.amber, MM_DNT_TONES.vermilion, MM_DNT_TONES.green][i]
  }));
  const total = resolved.reduce((a, d) => a + d.value, 0) || 1;
  const r = 60,
    c = 2 * Math.PI * r,
    gap = 2;
  let offset = 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      padding: 20,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 6
    }
  }, kicker) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      letterSpacing: "var(--track-display)",
      color: "var(--text-body)",
      marginBottom: 18
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 160 160",
    style: {
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: "rotate(-90 80 80)"
  }, resolved.map((d, i) => {
    const len = d.value / total * c;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: "80",
      cy: "80",
      r: r,
      fill: "none",
      stroke: d.color,
      strokeWidth: "22",
      strokeDasharray: Math.max(0, len - gap) + " " + (c - Math.max(0, len - gap)),
      strokeDashoffset: -offset
    });
    offset += len;
    return el;
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      minWidth: 140
    }
  }, resolved.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: d.color,
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      flex: 1
    }
  }, d.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-body)"
    }
  }, Math.round(d.value / total * 100), "%"))))));
}
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/GroupedBarChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_GRP_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};
const MM_GRP_MONO = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--size-mono-sm)",
  color: "var(--text-muted)",
  letterSpacing: "0.06em"
};
function MmGrpFrame({
  kicker,
  title,
  legend,
  height,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      padding: 20,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), kicker || title || legend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 6
    }
  }, kicker) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      letterSpacing: "var(--track-display)",
      color: "var(--text-body)"
    }
  }, title) : null), legend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, legend) : null) : null, children);
}
function MmGrpLegend({
  items
}) {
  return items.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      color: "var(--text-muted)",
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: s.color,
      borderRadius: 2
    }
  }), s.name));
}

/** Compare two sets. Blue vs Amber is the fixed pairing. Cap at three series. */
function GroupedBarChart({
  categories,
  series,
  height = 200,
  kicker,
  title,
  style,
  ...rest
}) {
  const resolved = series.slice(0, 3).map((s, i) => ({
    ...s,
    color: MM_GRP_TONES[s.tone] || [MM_GRP_TONES.blue, MM_GRP_TONES.amber, MM_GRP_TONES.vermilion][i]
  }));
  const max = Math.max(...resolved.flatMap(s => s.values));
  return /*#__PURE__*/React.createElement(MmGrpFrame, _extends({
    kicker: kicker,
    title: title,
    legend: /*#__PURE__*/React.createElement(MmGrpLegend, {
      items: resolved
    }),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 18,
      height,
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, categories.map((c, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      flex: 1,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: 4,
      height: "100%"
    }
  }, resolved.map((s, si) => /*#__PURE__*/React.createElement("div", {
    key: si,
    style: {
      flex: 1,
      maxWidth: 34,
      height: Math.max(2, s.values[ci] / max * height),
      background: s.color
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 10
    }
  }, categories.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...MM_GRP_MONO,
      flex: 1,
      textAlign: "center",
      textTransform: "uppercase"
    }
  }, c))));
}
Object.assign(__ds_scope, { GroupedBarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/GroupedBarChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/LineChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_LINE_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};
const MM_LINE_MONO = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--size-mono-sm)",
  color: "var(--text-muted)",
  letterSpacing: "0.06em"
};
function MmLineFrame({
  kicker,
  title,
  legend,
  height,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      padding: 20,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), kicker || title || legend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 6
    }
  }, kicker) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      letterSpacing: "var(--track-display)",
      color: "var(--text-body)"
    }
  }, title) : null), legend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, legend) : null) : null, children);
}
function MmLineLegend({
  items
}) {
  return items.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      color: "var(--text-muted)",
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: s.color,
      borderRadius: 2
    }
  }), s.name));
}

/** Momentum and trend. Straight segments, no smoothing. 2px stroke, ringed markers. */
function LineChart({
  labels,
  series,
  height = 200,
  kicker,
  title,
  style,
  ...rest
}) {
  const resolved = series.slice(0, 4).map((s, i) => ({
    ...s,
    color: MM_LINE_TONES[s.tone] || [MM_LINE_TONES.blue, MM_LINE_TONES.amber, MM_LINE_TONES.vermilion, MM_LINE_TONES.green][i]
  }));
  const all = resolved.flatMap(s => s.values);
  const max = Math.max(...all),
    min = Math.min(0, Math.min(...all));
  const w = 600,
    h = height,
    padL = 8,
    padR = 8;
  const x = i => padL + i * (w - padL - padR) / Math.max(1, labels.length - 1);
  const y = v => h - 10 - (v - min) / (max - min || 1) * (h - 24);
  return /*#__PURE__*/React.createElement(MmLineFrame, _extends({
    kicker: kicker,
    title: title,
    legend: /*#__PURE__*/React.createElement(MmLineLegend, {
      items: resolved
    }),
    style: style
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 " + w + " " + h,
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height,
      display: "block"
    }
  }, [0.25, 0.5, 0.75, 1].map((t, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: "0",
    x2: w,
    y1: y(min + (max - min) * t),
    y2: y(min + (max - min) * t),
    stroke: "var(--border-hairline)",
    strokeWidth: "1"
  })), resolved.map((s, si) => /*#__PURE__*/React.createElement("polyline", {
    key: si,
    fill: "none",
    stroke: s.color,
    strokeWidth: "2",
    points: s.values.map((v, i) => x(i) + "," + y(v)).join(" ")
  })), resolved.map((s, si) => s.values.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: si + "-" + i,
    cx: x(i),
    cy: y(v),
    r: "4",
    fill: s.color,
    stroke: "var(--void)",
    strokeWidth: "1.5"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 10
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...MM_LINE_MONO,
      textTransform: "uppercase"
    }
  }, l))));
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/StackedBarChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_STK_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};
const MM_STK_MONO = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--size-mono-sm)",
  color: "var(--text-muted)",
  letterSpacing: "0.06em"
};
function MmStkFrame({
  kicker,
  title,
  legend,
  height,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      padding: 20,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), kicker || title || legend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 6
    }
  }, kicker) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      letterSpacing: "var(--track-display)",
      color: "var(--text-body)"
    }
  }, title) : null), legend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, legend) : null) : null, children);
}
function MmStkLegend({
  items
}) {
  return items.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      color: "var(--text-muted)",
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: s.color,
      borderRadius: 2
    }
  }), s.name));
}

/** Parts of a whole. Largest, most stable segment at the bottom. Void gaps, not white borders. */
function StackedBarChart({
  categories,
  series,
  height = 200,
  kicker,
  title,
  style,
  ...rest
}) {
  const resolved = series.slice(0, 4).map((s, i) => ({
    ...s,
    color: MM_STK_TONES[s.tone] || [MM_STK_TONES.blue, MM_STK_TONES.amber, MM_STK_TONES.vermilion, MM_STK_TONES.green][i]
  }));
  const totals = categories.map((_, ci) => resolved.reduce((a, s) => a + s.values[ci], 0));
  const max = Math.max(...totals);
  return /*#__PURE__*/React.createElement(MmStkFrame, _extends({
    kicker: kicker,
    title: title,
    legend: /*#__PURE__*/React.createElement(MmStkLegend, {
      items: resolved
    }),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 14,
      height,
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, categories.map((c, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      gap: 1,
      height: totals[ci] / max * 100 + "%"
    }
  }, resolved.slice().reverse().map((s, si) => /*#__PURE__*/React.createElement("div", {
    key: si,
    style: {
      flex: s.values[ci],
      background: s.color,
      minHeight: 2
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 10
    }
  }, categories.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...MM_STK_MONO,
      flex: 1,
      textAlign: "center",
      textTransform: "uppercase"
    }
  }, c))));
}
Object.assign(__ds_scope, { StackedBarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/StackedBarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Slate Raised code block. At most two accent colours if highlighting is genuinely needed. */
function CodeBlock({
  children,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-raised)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "9px 16px",
      borderBottom: "1px solid var(--border-hairline)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 16,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-code)",
      lineHeight: "var(--leading-code)",
      color: "var(--text-body)",
      overflowX: "auto"
    }
  }, children));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono-numeric table. Slate Raised header, hairline row rules, no vertical lines. */
function DataTable({
  columns,
  rows,
  highlightIndex,
  highlightTone = "blue",
  style,
  ...rest
}) {
  const accents = {
    blue: "var(--signal-blue)",
    amber: "var(--amber)",
    vermilion: "var(--vermilion)",
    green: "var(--grid-green)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-raised)"
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: c.numeric ? "right" : "left",
      padding: "10px 14px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      fontWeight: 500,
      letterSpacing: "var(--track-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => {
    const hot = ri === highlightIndex;
    return /*#__PURE__*/React.createElement("tr", {
      key: ri,
      style: {
        background: hot ? "var(--surface-raised)" : "transparent",
        borderTop: "1px solid var(--border-hairline)",
        borderLeft: hot ? "1px solid " + (accents[highlightTone] || accents.blue) : "1px solid transparent"
      }
    }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
      key: ci,
      style: {
        padding: "11px 14px",
        textAlign: c.numeric ? "right" : "left",
        fontFamily: c.numeric ? "var(--font-mono)" : "var(--font-body)",
        fontSize: c.numeric ? 13 : 14,
        color: ci === 0 ? "var(--text-body)" : "var(--text-muted)",
        whiteSpace: c.numeric ? "nowrap" : "normal"
      }
    }, r[c.key])));
  }))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressGauge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_GAUGE_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};

/** Single proportion. Track in Slate Raised, fill in one accent, value in Archivo Black. */
function ProgressGauge({
  value,
  label,
  tone = "blue",
  showValue = true,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label) : null, showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      letterSpacing: "var(--track-display)",
      color: MM_GAUGE_TONES[tone] || MM_GAUGE_TONES.blue
    }
  }, pct, "%") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-raised)",
      border: "1px solid var(--border-hairline)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: MM_GAUGE_TONES[tone] || MM_GAUGE_TONES.blue
    }
  })));
}
Object.assign(__ds_scope, { ProgressGauge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressGauge.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_STAT_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)",
  paper: "var(--paper)"
};

/** Big number card. The figure is coloured, the card stays Slate. */
function StatCard({
  value,
  label,
  unit,
  tone = "blue",
  size = "md",
  delta,
  style,
  ...rest
}) {
  const color = MM_STAT_TONES[tone] || MM_STAT_TONES.blue;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      padding: "20px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: size === "sm" ? "var(--size-stat-sm)" : "var(--size-stat)",
      letterSpacing: "var(--track-display)",
      lineHeight: 0.9,
      color
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, unit) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      color: delta.trim().startsWith("-") ? "var(--delta-neg)" : "var(--delta-pos)"
    }
  }, delta) : null));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lucide outline glyphs, inlined so they take token colours through `stroke`. */
const MM_GLYPHS = {
  "database": '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  "chart-column": '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  "server": '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  "code": '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  "workflow": '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>',
  "cloud": '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  "filter": '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  "network": '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-down-right": '<path d="m7 7 10 10"/><path d="M17 7v10H7"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "search": '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  "layers": '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  "table-2": '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>',
  "activity": '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  "gauge": '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  "terminal": '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
  "settings": '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  "circle-dot": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/>',
  "trending-up": '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  "trending-down": '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>',
  "grid-3x3": '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>',
  "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'
};

/** Fixed concept to hue mapping. A concept keeps its colour across a whole deck. */
const MM_ICON_CONCEPTS = {
  database: {
    glyph: "database",
    tone: "var(--icon-database)"
  },
  chart: {
    glyph: "chart-column",
    tone: "var(--icon-chart)"
  },
  server: {
    glyph: "server",
    tone: "var(--icon-server)"
  },
  code: {
    glyph: "code",
    tone: "var(--icon-code)"
  },
  pipeline: {
    glyph: "workflow",
    tone: "var(--icon-pipeline)"
  },
  cloud: {
    glyph: "cloud",
    tone: "var(--icon-cloud)"
  },
  filter: {
    glyph: "filter",
    tone: "var(--icon-filter)"
  },
  network: {
    glyph: "network",
    tone: "var(--icon-network)"
  }
};

/** Line glyph stroked in its fixed accent colour. */
function Icon({
  name,
  glyph,
  tone,
  size = 24,
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const concept = MM_ICON_CONCEPTS[name];
  const key = glyph || (concept ? concept.glyph : name);
  const inner = MM_GLYPHS[key] || "";
  const color = tone || (concept ? concept.tone : "currentColor");
  return /*#__PURE__*/React.createElement("svg", _extends({
    "aria-hidden": "true",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flex: "0 0 auto",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }, rest));
}
Object.assign(__ds_scope, { MM_GLYPHS, MM_ICON_CONCEPTS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/IconCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Grid icon centred over a faint millimeter field, label centred below. */
function IconCard({
  name,
  glyph,
  tone,
  label,
  size = 32,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
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
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      backgroundColor: "var(--void)",
      backgroundImage: "linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)",
      backgroundSize: "12px 12px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    glyph: glyph,
    tone: tone,
    size: size
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: "var(--weight-lead)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { IconCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/IconCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** 1px Hairline rule. Never coloured, never doubled, never a gradient. */
function Divider({
  vertical = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: vertical ? {
      width: 1,
      alignSelf: "stretch",
      background: "var(--border-hairline)",
      ...style
    } : {
      height: 1,
      width: "100%",
      background: "var(--border-hairline)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/GridField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The millimeter grid as a surface. Texture for a media zone, or the page ground itself. */
function GridField({
  children,
  opacity = 0.035,
  size = 24,
  framed = false,
  style,
  ...rest
}) {
  const line = "rgba(255,255,255," + opacity + ")";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      backgroundColor: "var(--void)",
      backgroundImage: "linear-gradient(" + line + " 1px,transparent 1px),linear-gradient(90deg," + line + " 1px,transparent 1px)",
      backgroundSize: size + "px " + size + "px",
      border: framed ? "1px solid var(--border-hairline)" : undefined,
      borderRadius: framed ? "var(--radius-lg)" : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GridField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/GridField.jsx", error: String((e && e.message) || e) }); }

// components/layout/NavRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_RAIL_ORDER = ["blue", "amber", "vermilion", "green"];

/** The signature left rail: four numbered cards, one violet CTA below. */
function NavRail({
  items = [],
  activeIndex = 0,
  cta,
  onSelect,
  onCta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      width: 196,
      flex: "0 0 196px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(__ds_scope.NavCard, {
    key: i,
    number: it.number || String(i + 1).padStart(2, "0"),
    label: it.label,
    tone: it.tone || MM_RAIL_ORDER[i % 4],
    active: i === activeIndex,
    onClick: onSelect ? () => onSelect(i) : undefined
  })), cta ? /*#__PURE__*/React.createElement("div", {
    onClick: onCta,
    role: onCta ? "button" : undefined,
    style: {
      marginTop: "auto",
      background: "var(--ultra-violet)",
      borderRadius: "var(--radius-sm)",
      padding: "14px 14px 16px",
      color: "var(--void)",
      cursor: onCta ? "pointer" : "default",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      textTransform: "uppercase",
      opacity: 0.7
    }
  }, cta.kicker || "action"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: "var(--weight-lead)",
      lineHeight: 1.25
    }
  }, cta.label)) : null);
}
Object.assign(__ds_scope, { NavRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NavRail.jsx", error: String((e && e.message) || e) }); }

// components/layout/ToneBlocks.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_TONE_STEPS = ["var(--void)", "var(--slate)", "var(--slate-raised)"];
const MM_TONE_ACCENTS = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)"
};

/** Media-zone composition: rectangles stepping through the tone stack, one accent-bordered. */
function ToneBlocks({
  count = 4,
  accentIndex = 2,
  tone = "blue",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0,1fr))",
      gap: 12,
      ...style
    }
  }, rest), Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: MM_TONE_STEPS[i % 3],
      border: i === accentIndex ? "1px solid " + (MM_TONE_ACCENTS[tone] || MM_TONE_ACCENTS.blue) : "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-sm)",
      minHeight: 96
    }
  })));
}
Object.assign(__ds_scope, { ToneBlocks });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ToneBlocks.jsx", error: String((e && e.message) || e) }); }

// components/typography/Body.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Calm Inter body copy. Line-height 1.65 minimum on dark grounds. */
function Body({
  children,
  size = "md",
  tone = "muted",
  lead = false,
  style,
  ...rest
}) {
  const mmBodySize = size === "lg" ? "var(--size-body-lg)" : size === "sm" ? "var(--size-body-sm)" : "var(--size-body)";
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: "var(--font-body)",
      fontSize: mmBodySize,
      fontWeight: lead ? "var(--weight-lead)" : "var(--weight-body)",
      lineHeight: "var(--leading-body)",
      color: tone === "paper" ? "var(--text-body)" : "var(--text-muted)",
      margin: 0,
      maxWidth: "62ch",
      textWrap: "pretty",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Body });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Body.jsx", error: String((e && e.message) || e) }); }

// components/typography/Display.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_DISPLAY_SIZES = {
  display: {
    fontSize: "var(--size-display)",
    lineHeight: "var(--leading-display)"
  },
  displaySm: {
    fontSize: "var(--size-display-sm)",
    lineHeight: "var(--leading-display)"
  },
  h1: {
    fontSize: "var(--size-h1)",
    lineHeight: "var(--leading-heading)"
  },
  h2: {
    fontSize: "var(--size-h2)",
    lineHeight: "var(--leading-heading)"
  },
  h3: {
    fontSize: "var(--size-h3)",
    lineHeight: "var(--leading-heading)"
  }
};

/** Archivo Black heading. The jump from display to body must stay dramatic. */
function Display({
  children,
  level = "h1",
  as,
  tone = "paper",
  style,
  ...rest
}) {
  const Tag = as || (level === "display" || level === "displaySm" ? "h1" : level);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--track-display)",
      color: tone === "accent" ? "var(--accent-lead)" : "var(--text-body)",
      margin: 0,
      textWrap: "balance",
      ...MM_DISPLAY_SIZES[level],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Display });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Display.jsx", error: String((e && e.message) || e) }); }

// components/typography/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MM_KICKER_TONES = {
  blue: "var(--signal-blue)",
  amber: "var(--amber)",
  vermilion: "var(--vermilion)",
  green: "var(--grid-green)",
  muted: "var(--paper-muted)"
};

/** Mono kicker. Opens every content slide or section. Nomenclature, not prose. */
function Kicker({
  children,
  tone = "blue",
  index,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono)",
      fontWeight: 500,
      letterSpacing: "var(--track-mono)",
      lineHeight: "var(--leading-mono)",
      textTransform: "uppercase",
      color: MM_KICKER_TONES[tone] || MM_KICKER_TONES.blue,
      ...style
    }
  }, rest), index ? /*#__PURE__*/React.createElement("span", null, index, " ") : null, children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Kicker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Overview.jsx
try { (() => {
const {
  StatCard,
  LineChart,
  DonutChart,
  ColumnChart,
  Button,
  Tag,
  ContentCard,
  Body,
  Icon
} = window.MillimeterDarkDesignSystem_9b3f65;
const MM_OV_RANGES = ["7D", "30D", "90D", "12M"];
function Overview() {
  const [range, setRange] = React.useState("30D");
  const scale = {
    "7D": 0.4,
    "30D": 1,
    "90D": 2.6,
    "12M": 9.4
  }[range];
  const fmt = n => n * scale >= 1000 ? (n * scale / 1000).toFixed(1) + "M" : Math.round(n * scale) + "k";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, MM_OV_RANGES.map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    active: r === range,
    onClick: () => setRange(r)
  }, r))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0,1fr))",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: fmt(1284),
    label: "Events ingested",
    tone: "blue",
    size: "sm",
    delta: "+4.2%"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "0.41s",
    label: "P95 latency",
    tone: "green",
    size: "sm",
    delta: "-0.06s"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "38%",
    label: "Stream share",
    tone: "amber",
    size: "sm",
    delta: "+1.8 pts"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "11",
    label: "Failed batches",
    tone: "vermilion",
    size: "sm",
    delta: "+3"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.45fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(LineChart, {
    kicker: "momentum",
    title: "Ingest volume",
    height: 210,
    labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
    series: [{
      name: "2026",
      values: [12, 15, 14, 22, 27, 31]
    }, {
      name: "2025",
      values: [9, 11, 13, 12, 16, 18]
    }]
  }), /*#__PURE__*/React.createElement(DonutChart, {
    kicker: "share",
    title: "Ingest mix",
    size: 190,
    data: [{
      label: "Stream",
      value: 52
    }, {
      label: "Batch",
      value: 31
    }, {
      label: "Autres",
      value: 17
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ColumnChart, {
    kicker: "volume",
    title: "Events per quarter",
    height: 170,
    data: [{
      label: "Q1",
      value: 24
    }, {
      label: "Q2",
      value: 38
    }, {
      label: "Q3",
      value: 31
    }, {
      label: "Q4",
      value: 46
    }]
  }), /*#__PURE__*/React.createElement(ContentCard, {
    radius: "md",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chart",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "read of the week")), /*#__PURE__*/React.createElement(Body, {
    tone: "paper",
    lead: true
  }, "Stream ingest passed batch for the first time."), /*#__PURE__*/React.createElement(Body, {
    size: "sm"
  }, "Batch volume is flat. The whole gain came from the events API, which added 4.2 percent week over week. Latency held under half a second through the shift."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Open report"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    arrow: false
  }, "Dismiss")))));
}
Object.assign(window, {
  Overview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Pipeline.jsx
try { (() => {
const {
  IconCard,
  ProgressGauge,
  ContentCard,
  CodeBlock,
  Kicker,
  Body,
  StackedBarChart,
  AccentCard,
  Display
} = window.MillimeterDarkDesignSystem_9b3f65;
function Pipeline() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0,1fr))",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(IconCard, {
    name: "database",
    label: "Ingestion"
  }), /*#__PURE__*/React.createElement(IconCard, {
    name: "pipeline",
    label: "Orchestration"
  }), /*#__PURE__*/React.createElement(IconCard, {
    name: "server",
    label: "Warehouse"
  }), /*#__PURE__*/React.createElement(IconCard, {
    name: "chart",
    label: "Serving"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.3fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(ContentCard, {
    radius: "md",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    index: "03",
    tone: "green"
  }, "STAGE HEALTH"), /*#__PURE__*/React.createElement(ProgressGauge, {
    value: 98,
    label: "Ingestion",
    tone: "green"
  }), /*#__PURE__*/React.createElement(ProgressGauge, {
    value: 86,
    label: "Orchestration",
    tone: "blue"
  }), /*#__PURE__*/React.createElement(ProgressGauge, {
    value: 62,
    label: "Backfill coverage",
    tone: "amber"
  })), /*#__PURE__*/React.createElement(StackedBarChart, {
    kicker: "composition",
    title: "Runs per stage",
    height: 190,
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [{
      name: "Batch",
      values: [10, 12, 14, 15, 11]
    }, {
      name: "Stream",
      values: [4, 7, 9, 14, 12]
    }, {
      name: "Backfill",
      values: [2, 3, 3, 5, 2]
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(CodeBlock, {
    label: "dbt run \xB7 04:12 utc"
  }, "12:04:11  ingest.events        OK   1 284 902 rows\n12:04:38  ingest.webhooks      OK      98 044 rows\n12:05:02  transform.sessions   OK\n12:05:44  transform.revenue    WARN  late arriving keys\n12:06:01  publish.marts        OK"), /*#__PURE__*/React.createElement(AccentCard, {
    tone: "amber",
    radius: "md",
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      opacity: 0.72
    }
  }, "ACTION NEEDED"), /*#__PURE__*/React.createElement(Display, {
    level: "h2",
    style: {
      color: "var(--void)",
      marginTop: 10,
      fontSize: 26
    }
  }, "Late keys in revenue"), /*#__PURE__*/React.createElement(Body, {
    size: "sm",
    style: {
      color: "var(--void)",
      marginTop: 10,
      opacity: 0.82
    }
  }, "Three runs affected. Rerun after the partner drop lands."))));
}
Object.assign(window, {
  Pipeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Pipeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Reports.jsx
try { (() => {
const {
  ContentCard,
  Kicker,
  Body,
  Button,
  Tag,
  DataTable,
  GridField,
  Display,
  Icon
} = window.MillimeterDarkDesignSystem_9b3f65;
function Reports() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ContentCard, {
    radius: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    index: "04",
    tone: "vermilion"
  }, "WEEKLY DIGEST"), /*#__PURE__*/React.createElement(Display, {
    level: "h2"
  }, "Ingest, latency, failures"), /*#__PURE__*/React.createElement(Body, {
    size: "sm"
  }, "Five figures and two charts. Sent Monday at 07:00 to eleven recipients. Nothing else goes in it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    active: true
  }, "PDF"), /*#__PURE__*/React.createElement(Tag, null, "SLIDES"), /*#__PURE__*/React.createElement(Tag, null, "EMAIL")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    arrow: false,
    onClick: () => setSent(true)
  }, sent ? "Queued" : "Send now"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    arrow: false
  }, "Preview"))), /*#__PURE__*/React.createElement(GridField, {
    framed: true,
    opacity: 0.06,
    size: 12,
    style: {
      minHeight: 300,
      display: "flex",
      alignItems: "flex-end",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    glyph: "file-text",
    tone: "var(--paper-muted)",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "artefact preview renders here")))), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "name",
      label: "Report"
    }, {
      key: "cadence",
      label: "Cadence"
    }, {
      key: "last",
      label: "Last sent",
      numeric: true
    }, {
      key: "size",
      label: "Size",
      numeric: true
    }],
    rows: [{
      name: "Weekly ingest digest",
      cadence: "Monday 07:00",
      last: "2026-09-01",
      size: "412 kB"
    }, {
      name: "Latency review",
      cadence: "Monthly",
      last: "2026-09-01",
      size: "1.1 MB"
    }, {
      name: "Partner drop audit",
      cadence: "Quarterly",
      last: "2026-07-01",
      size: "890 kB"
    }]
  }));
}
Object.assign(window, {
  Reports
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Reports.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Shell.jsx
try { (() => {
const {
  NavRail,
  Kicker,
  Display,
  Button,
  Divider,
  Tag
} = window.MillimeterDarkDesignSystem_9b3f65;
const MM_DASH_SECTIONS = [{
  label: "Overview"
}, {
  label: "Sources"
}, {
  label: "Pipeline"
}, {
  label: "Reports"
}];
function Shell({
  index,
  onSelect,
  title,
  kicker,
  children,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      minHeight: 820,
      padding: 48,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavRail, {
    items: MM_DASH_SECTIONS,
    activeIndex: index,
    onSelect: onSelect,
    cta: {
      kicker: "export",
      label: "Send weekly digest"
    }
  }), /*#__PURE__*/React.createElement(Divider, {
    vertical: true
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    index: String(index + 1).padStart(2, "0"),
    tone: "blue"
  }, kicker), /*#__PURE__*/React.createElement(Display, {
    level: "h1"
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, actions)), children));
}
Object.assign(window, {
  Shell,
  MM_DASH_SECTIONS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Sources.jsx
try { (() => {
const {
  DataTable,
  Tag,
  StatCard,
  FeatureCard,
  Kicker,
  Body,
  Button,
  Icon,
  ContentCard
} = window.MillimeterDarkDesignSystem_9b3f65;
const MM_SOURCE_ROWS = [{
  src: "Events API",
  kind: "stream",
  vol: "1 284 902",
  p95: "0.41s",
  d: "+3.1%"
}, {
  src: "Batch loader",
  kind: "batch",
  vol: "402 118",
  p95: "1.20s",
  d: "+0.4%"
}, {
  src: "Webhooks",
  kind: "stream",
  vol: "98 044",
  p95: "0.32s",
  d: "-1.2%"
}, {
  src: "CDC replica",
  kind: "stream",
  vol: "76 210",
  p95: "0.58s",
  d: "+8.4%"
}, {
  src: "Nightly export",
  kind: "batch",
  vol: "31 006",
  p95: "3.40s",
  d: "0.0%"
}, {
  src: "Partner drop",
  kind: "batch",
  vol: "12 884",
  p95: "2.10s",
  d: "-4.6%"
}];
function Sources() {
  const [kind, setKind] = React.useState("all");
  const [sel, setSel] = React.useState(0);
  const rows = MM_SOURCE_ROWS.filter(r => kind === "all" || r.kind === kind);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, ["all", "stream", "batch"].map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    active: k === kind,
    onClick: () => {
      setKind(k);
      setSel(0);
    }
  }, k)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    glyph: "search",
    tone: "var(--paper-muted)",
    size: 14
  }), rows.length, " sources")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "src",
      label: "Source"
    }, {
      key: "kind",
      label: "Kind"
    }, {
      key: "vol",
      label: "Volume",
      numeric: true
    }, {
      key: "p95",
      label: "P95",
      numeric: true
    }, {
      key: "d",
      label: "Delta",
      numeric: true
    }],
    rows: rows.map((r, i) => ({
      ...r,
      src: /*#__PURE__*/React.createElement("span", {
        onClick: () => setSel(i),
        style: {
          cursor: "pointer"
        }
      }, r.src)
    })),
    highlightIndex: sel
  }), /*#__PURE__*/React.createElement(ContentCard, {
    radius: "sm",
    padding: 18,
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "database",
    size: 22
  }), /*#__PURE__*/React.createElement(Body, {
    size: "sm",
    style: {
      margin: 0
    }
  }, "Click a source name to inspect it. Highlight is an accent left border plus a tone step, never a filled row."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    radius: "md",
    padding: 22
  }, /*#__PURE__*/React.createElement(Kicker, {
    index: "02",
    tone: "amber"
  }, "SELECTED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      letterSpacing: "-0.02em",
      margin: "12px 0 10px"
    }
  }, rows[sel] ? rows[sel].src : "None"), /*#__PURE__*/React.createElement(Body, {
    size: "sm"
  }, rows[sel] ? rows[sel].kind === "stream" ? "Continuous ingest. Latency is the metric that matters." : "Scheduled ingest. Volume per run is the metric that matters." : "Pick a row."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Open source"))), /*#__PURE__*/React.createElement(StatCard, {
    value: rows[sel] ? rows[sel].vol.split(" ")[0] + "k" : "0",
    label: "Volume this week",
    tone: "blue",
    size: "sm",
    delta: rows[sel] ? rows[sel].d : undefined
  }))));
}
Object.assign(window, {
  Sources
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Sources.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.AccentCard = __ds_scope.AccentCard;

__ds_ns.ContentCard = __ds_scope.ContentCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.IconCard = __ds_scope.IconCard;

__ds_ns.NavCard = __ds_scope.NavCard;

__ds_ns.ColumnChart = __ds_scope.ColumnChart;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.GroupedBarChart = __ds_scope.GroupedBarChart;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.StackedBarChart = __ds_scope.StackedBarChart;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.ProgressGauge = __ds_scope.ProgressGauge;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.MM_GLYPHS = __ds_scope.MM_GLYPHS;

__ds_ns.MM_ICON_CONCEPTS = __ds_scope.MM_ICON_CONCEPTS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.GridField = __ds_scope.GridField;

__ds_ns.NavRail = __ds_scope.NavRail;

__ds_ns.ToneBlocks = __ds_scope.ToneBlocks;

__ds_ns.Body = __ds_scope.Body;

__ds_ns.Display = __ds_scope.Display;

__ds_ns.Kicker = __ds_scope.Kicker;

})();
