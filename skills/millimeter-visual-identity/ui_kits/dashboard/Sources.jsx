const { DataTable, Tag, StatCard, FeatureCard, Kicker, Body, Button, Icon, ContentCard } = window.MillimeterDarkDesignSystem_9b3f65;

const MM_SOURCE_ROWS = [
  { src: "Events API", kind: "stream", vol: "1 284 902", p95: "0.41s", d: "+3.1%" },
  { src: "Batch loader", kind: "batch", vol: "402 118", p95: "1.20s", d: "+0.4%" },
  { src: "Webhooks", kind: "stream", vol: "98 044", p95: "0.32s", d: "-1.2%" },
  { src: "CDC replica", kind: "stream", vol: "76 210", p95: "0.58s", d: "+8.4%" },
  { src: "Nightly export", kind: "batch", vol: "31 006", p95: "3.40s", d: "0.0%" },
  { src: "Partner drop", kind: "batch", vol: "12 884", p95: "2.10s", d: "-4.6%" }
];

function Sources() {
  const [kind, setKind] = React.useState("all");
  const [sel, setSel] = React.useState(0);
  const rows = MM_SOURCE_ROWS.filter((r) => kind === "all" || r.kind === kind);
  return (
    <>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {["all", "stream", "batch"].map((k) => (
          <Tag key={k} active={k === kind} onClick={() => { setKind(k); setSel(0); }}>{k}</Tag>
        ))}
        <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          <Icon glyph="search" tone="var(--paper-muted)" size={14} />{rows.length} sources
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 16, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <DataTable
            columns={[
              { key: "src", label: "Source" },
              { key: "kind", label: "Kind" },
              { key: "vol", label: "Volume", numeric: true },
              { key: "p95", label: "P95", numeric: true },
              { key: "d", label: "Delta", numeric: true }
            ]}
            rows={rows.map((r, i) => ({ ...r, src: <span onClick={() => setSel(i)} style={{ cursor: "pointer" }}>{r.src}</span> }))}
            highlightIndex={sel}
          />
          <ContentCard radius="sm" padding={18} style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Icon name="database" size={22} />
            <Body size="sm" style={{ margin: 0 }}>Click a source name to inspect it. Highlight is an accent left border plus a tone step, never a filled row.</Body>
          </ContentCard>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <FeatureCard radius="md" padding={22}>
            <Kicker index="02" tone="amber">SELECTED</Kicker>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 26, letterSpacing: "-0.02em", margin: "12px 0 10px" }}>{rows[sel] ? rows[sel].src : "None"}</div>
            <Body size="sm">{rows[sel] ? rows[sel].kind === "stream" ? "Continuous ingest. Latency is the metric that matters." : "Scheduled ingest. Volume per run is the metric that matters." : "Pick a row."}</Body>
            <div style={{ marginTop: 18 }}><Button variant="primary" size="sm">Open source</Button></div>
          </FeatureCard>
          <StatCard value={rows[sel] ? rows[sel].vol.split(" ")[0] + "k" : "0"} label="Volume this week" tone="blue" size="sm" delta={rows[sel] ? rows[sel].d : undefined} />
        </div>
      </div>
    </>
  );
}
Object.assign(window, { Sources });
