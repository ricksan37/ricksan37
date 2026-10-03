const { NavRail, Kicker, Display, Button, Divider, Tag } = window.MillimeterDarkDesignSystem_9b3f65;

const MM_DASH_SECTIONS = [
  { label: "Overview" },
  { label: "Sources" },
  { label: "Pipeline" },
  { label: "Reports" }
];

function Shell({ index, onSelect, title, kicker, children, actions }) {
  return (
    <div style={{ display: "flex", gap: 32, minHeight: 820, padding: 48, alignItems: "stretch" }}>
      <NavRail
        items={MM_DASH_SECTIONS}
        activeIndex={index}
        onSelect={onSelect}
        cta={{ kicker: "export", label: "Send weekly digest" }}
      />
      <Divider vertical />
      <main style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 24 }}>
        <header style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Kicker index={String(index + 1).padStart(2, "0")} tone="blue">{kicker}</Kicker>
            <Display level="h1">{title}</Display>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>{actions}</div>
        </header>
        {children}
      </main>
    </div>
  );
}
Object.assign(window, { Shell, MM_DASH_SECTIONS });
