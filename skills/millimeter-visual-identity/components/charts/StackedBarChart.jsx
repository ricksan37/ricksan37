import React from "react";
const MM_STK_TONES={blue:"var(--signal-blue)",amber:"var(--amber)",vermilion:"var(--vermilion)",green:"var(--grid-green)"};
const MM_STK_MONO={fontFamily:"var(--font-mono)",fontSize:"var(--size-mono-sm)",color:"var(--text-muted)",letterSpacing:"0.06em"};
function MmStkFrame({kicker,title,legend,height,children,style,...rest}){
  return (
    <div style={{background:"var(--surface-card)",border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-md)",padding:20,fontFamily:"var(--font-body)",...style}} {...rest}>
      {kicker||title||legend?(
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:16,marginBottom:18}}>
          <div>
            {kicker?<div style={{fontFamily:"var(--font-mono)",fontSize:"var(--size-mono-sm)",letterSpacing:"var(--track-mono)",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:6}}>{kicker}</div>:null}
            {title?<div style={{fontFamily:"var(--font-display)",fontSize:19,letterSpacing:"var(--track-display)",color:"var(--text-body)"}}>{title}</div>:null}
          </div>
          {legend?<div style={{display:"flex",gap:14,flexWrap:"wrap"}}>{legend}</div>:null}
        </div>
      ):null}
      {children}
    </div>
  );
}
function MmStkLegend({items}){
  return items.map((s,i)=>(
    <span key={i} style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-mono)",fontSize:"var(--size-mono-sm)",color:"var(--text-muted)",letterSpacing:"0.06em",textTransform:"uppercase"}}>
      <span style={{width:8,height:8,background:s.color,borderRadius:2}}/>{s.name}
    </span>
  ));
}

/** Parts of a whole. Largest, most stable segment at the bottom. Void gaps, not white borders. */
export function StackedBarChart({ categories, series, height = 200, kicker, title, style, ...rest }) {
  const resolved = series.slice(0, 4).map((s, i) => ({ ...s, color: MM_STK_TONES[s.tone] || [MM_STK_TONES.blue, MM_STK_TONES.amber, MM_STK_TONES.vermilion, MM_STK_TONES.green][i] }));
  const totals = categories.map((_, ci) => resolved.reduce((a, s) => a + s.values[ci], 0));
  const max = Math.max(...totals);
  return (
    <MmStkFrame kicker={kicker} title={title} legend={<MmStkLegend items={resolved} />} style={style} {...rest}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height, borderBottom: "1px solid var(--border-hairline)" }}>
        {categories.map((c, ci) => (
          <div key={ci} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 1, height: (totals[ci] / max) * 100 + "%" }}>
            {resolved
              .slice()
              .reverse()
              .map((s, si) => (
                <div key={si} style={{ flex: s.values[ci], background: s.color, minHeight: 2 }} />
              ))}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
        {categories.map((c, i) => (
          <span key={i} style={{ ...MM_STK_MONO, flex: 1, textAlign: "center", textTransform: "uppercase" }}>{c}</span>
        ))}
      </div>
    </MmStkFrame>
  );
}
