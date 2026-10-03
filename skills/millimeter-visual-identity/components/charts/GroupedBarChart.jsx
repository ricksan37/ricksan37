import React from "react";
const MM_GRP_TONES={blue:"var(--signal-blue)",amber:"var(--amber)",vermilion:"var(--vermilion)",green:"var(--grid-green)"};
const MM_GRP_MONO={fontFamily:"var(--font-mono)",fontSize:"var(--size-mono-sm)",color:"var(--text-muted)",letterSpacing:"0.06em"};
function MmGrpFrame({kicker,title,legend,height,children,style,...rest}){
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
function MmGrpLegend({items}){
  return items.map((s,i)=>(
    <span key={i} style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-mono)",fontSize:"var(--size-mono-sm)",color:"var(--text-muted)",letterSpacing:"0.06em",textTransform:"uppercase"}}>
      <span style={{width:8,height:8,background:s.color,borderRadius:2}}/>{s.name}
    </span>
  ));
}

/** Compare two sets. Blue vs Amber is the fixed pairing. Cap at three series. */
export function GroupedBarChart({ categories, series, height = 200, kicker, title, style, ...rest }) {
  const resolved = series.slice(0, 3).map((s, i) => ({ ...s, color: MM_GRP_TONES[s.tone] || [MM_GRP_TONES.blue, MM_GRP_TONES.amber, MM_GRP_TONES.vermilion][i] }));
  const max = Math.max(...resolved.flatMap((s) => s.values));
  return (
    <MmGrpFrame kicker={kicker} title={title} legend={<MmGrpLegend items={resolved} />} style={style} {...rest}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 18, height, borderBottom: "1px solid var(--border-hairline)" }}>
        {categories.map((c, ci) => (
          <div key={ci} style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 4, height: "100%" }}>
            {resolved.map((s, si) => (
              <div key={si} style={{ flex: 1, maxWidth: 34, height: Math.max(2, (s.values[ci] / max) * height), background: s.color }} />
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 18, marginTop: 10 }}>
        {categories.map((c, i) => (
          <span key={i} style={{ ...MM_GRP_MONO, flex: 1, textAlign: "center", textTransform: "uppercase" }}>{c}</span>
        ))}
      </div>
    </MmGrpFrame>
  );
}
