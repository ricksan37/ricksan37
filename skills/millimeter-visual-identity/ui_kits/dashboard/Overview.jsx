const { StatCard, LineChart, DonutChart, ColumnChart, Button, Tag, ContentCard, Body, Icon } = window.MillimeterDarkDesignSystem_9b3f65;

const MM_OV_RANGES = ["7D", "30D", "90D", "12M"];

function Overview() {
  const [range, setRange] = React.useState("30D");
  const scale = { "7D": 0.4, "30D": 1, "90D": 2.6, "12M": 9.4 }[range];
  const fmt = (n) => (n * scale >= 1000 ? ((n * scale) / 1000).toFixed(1) + "M" : Math.round(n * scale) + "k");
  return (
    <>
      <div style={{ display: "flex", gap: 8 }}>
        {MM_OV_RANGES.map((r) => (
          <Tag key={r} active={r === range} onClick={() => setRange(r)}>{r}</Tag>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 16 }}>
        <StatCard value={fmt(1284)} label="Events ingested" tone="blue" size="sm" delta="+4.2%" />
        <StatCard value="0.41s" label="P95 latency" tone="green" size="sm" delta="-0.06s" />
        <StatCard value="38%" label="Stream share" tone="amber" size="sm" delta="+1.8 pts" />
        <StatCard value="11" label="Failed batches" tone="vermilion" size="sm" delta="+3" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.45fr 1fr", gap: 16 }}>
        <LineChart
          kicker="momentum"
          title="Ingest volume"
          height={210}
          labels={["W1", "W2", "W3", "W4", "W5", "W6"]}
          series={[
            { name: "2026", values: [12, 15, 14, 22, 27, 31] },
            { name: "2025", values: [9, 11, 13, 12, 16, 18] }
          ]}
        />
        <DonutChart kicker="share" title="Ingest mix" size={190} data={[{ label: "Stream", value: 52 }, { label: "Batch", value: 31 }, { label: "Autres", value: 17 }]} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <ColumnChart kicker="volume" title="Events per quarter" height={170} data={[{ label: "Q1", value: 24 }, { label: "Q2", value: 38 }, { label: "Q3", value: 31 }, { label: "Q4", value: 46 }]} />
        <ContentCard radius="md" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Icon name="chart" size={20} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>read of the week</span>
          </div>
          <Body tone="paper" lead>Stream ingest passed batch for the first time.</Body>
          <Body size="sm">Batch volume is flat. The whole gain came from the events API, which added 4.2 percent week over week. Latency held under half a second through the shift.</Body>
          <div style={{ marginTop: "auto", display: "flex", gap: 12 }}>
            <Button variant="primary" size="sm">Open report</Button>
            <Button variant="secondary" size="sm" arrow={false}>Dismiss</Button>
          </div>
        </ContentCard>
      </div>
    </>
  );
}
Object.assign(window, { Overview });
