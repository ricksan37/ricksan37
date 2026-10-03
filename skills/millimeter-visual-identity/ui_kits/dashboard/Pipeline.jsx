const { IconCard, ProgressGauge, ContentCard, CodeBlock, Kicker, Body, StackedBarChart, AccentCard, Display } = window.MillimeterDarkDesignSystem_9b3f65;

function Pipeline() {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 16 }}>
        <IconCard name="database" label="Ingestion" />
        <IconCard name="pipeline" label="Orchestration" />
        <IconCard name="server" label="Warehouse" />
        <IconCard name="chart" label="Serving" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 16, alignItems: "start" }}>
        <ContentCard radius="md" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <Kicker index="03" tone="green">STAGE HEALTH</Kicker>
          <ProgressGauge value={98} label="Ingestion" tone="green" />
          <ProgressGauge value={86} label="Orchestration" tone="blue" />
          <ProgressGauge value={62} label="Backfill coverage" tone="amber" />
        </ContentCard>
        <StackedBarChart
          kicker="composition"
          title="Runs per stage"
          height={190}
          categories={["Mon", "Tue", "Wed", "Thu", "Fri"]}
          series={[
            { name: "Batch", values: [10, 12, 14, 15, 11] },
            { name: "Stream", values: [4, 7, 9, 14, 12] },
            { name: "Backfill", values: [2, 3, 3, 5, 2] }
          ]}
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16, alignItems: "start" }}>
        <CodeBlock label="dbt run · 04:12 utc">{"12:04:11  ingest.events        OK   1 284 902 rows\n12:04:38  ingest.webhooks      OK      98 044 rows\n12:05:02  transform.sessions   OK\n12:05:44  transform.revenue    WARN  late arriving keys\n12:06:01  publish.marts        OK"}</CodeBlock>
        <AccentCard tone="amber" radius="md" padding={24}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.72 }}>ACTION NEEDED</div>
          <Display level="h2" style={{ color: "var(--void)", marginTop: 10, fontSize: 26 }}>Late keys in revenue</Display>
          <Body size="sm" style={{ color: "var(--void)", marginTop: 10, opacity: 0.82 }}>Three runs affected. Rerun after the partner drop lands.</Body>
        </AccentCard>
      </div>
    </>
  );
}
Object.assign(window, { Pipeline });
