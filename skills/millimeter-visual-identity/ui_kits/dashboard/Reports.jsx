const { ContentCard, Kicker, Body, Button, Tag, DataTable, GridField, Display, Icon } = window.MillimeterDarkDesignSystem_9b3f65;

function Reports() {
  const [sent, setSent] = React.useState(false);
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "stretch" }}>
        <ContentCard radius="lg" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Kicker index="04" tone="vermilion">WEEKLY DIGEST</Kicker>
          <Display level="h2">Ingest, latency, failures</Display>
          <Body size="sm">Five figures and two charts. Sent Monday at 07:00 to eleven recipients. Nothing else goes in it.</Body>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Tag active>PDF</Tag><Tag>SLIDES</Tag><Tag>EMAIL</Tag>
          </div>
          <div style={{ marginTop: "auto", display: "flex", gap: 12, alignItems: "center" }}>
            <Button variant="cta" arrow={false} onClick={() => setSent(true)}>{sent ? "Queued" : "Send now"}</Button>
            <Button variant="secondary" size="md" arrow={false}>Preview</Button>
          </div>
        </ContentCard>
        <GridField framed opacity={0.06} size={12} style={{ minHeight: 300, display: "flex", alignItems: "flex-end", padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Icon glyph="file-text" tone="var(--paper-muted)" size={18} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>artefact preview renders here</span>
          </div>
        </GridField>
      </div>
      <DataTable
        columns={[{ key: "name", label: "Report" }, { key: "cadence", label: "Cadence" }, { key: "last", label: "Last sent", numeric: true }, { key: "size", label: "Size", numeric: true }]}
        rows={[
          { name: "Weekly ingest digest", cadence: "Monday 07:00", last: "2026-09-01", size: "412 kB" },
          { name: "Latency review", cadence: "Monthly", last: "2026-09-01", size: "1.1 MB" },
          { name: "Partner drop audit", cadence: "Quarterly", last: "2026-07-01", size: "890 kB" }
        ]}
      />
    </>
  );
}
Object.assign(window, { Reports });
