import React from "react";
const MM_COL_TONES={blue:"var(--signal-blue)",amber:"var(--amber)",vermilion:"var(--vermilion)",green:"var(--grid-green)"};
const MM_COL_MONO={fontFamily:"var(--font-mono)",fontSize:"var(--size-mono-sm)",color:"var(--text-muted)",letterSpacing:"0.06em"};
function MmColFrame({kicker,title,legend,height,children,style,...rest}){
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
function MmColLegend({items}){
  return items.map((s,i)=>(
    <span key={i} style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-mono)",fontSize:"var(--size-mono-sm)",color:"var(--text-muted)",letterSpacing:"0.06em",textTransform:"uppercase"}}>
      <span style={{width:8,height:8,background:s.color,borderRadius:2}}/>{s.name}
    </span>
  ));
}

/** Quantities over discrete periods. One series, one hue, mono labels above the bars. */
export function ColumnChart({ data, tone = "blue", height = 200, kicker, title, style, ...rest }) {
  const color = MM_COL_TONES[tone] || MM_COL_TONES.blue;
  const max = Math.max(...data.map((d) => d.value));
  return (
    <MmColFrame kicker={kicker} title={title} style={style} {...rest}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height, borderBottom: "1px solid var(--border-hairline)" }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: 8, height: "100%" }}>
            <span style={{ ...MM_COL_MONO, color: "var(--text-body)" }}>{d.value}</span>
            <div style={{ width: "100%", height: Math.max(2, (d.value / max) * (height - 30)), background: color }} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        {data.map((d, i) => (
          <span key={i} style={{ ...MM_COL_MONO, flex: 1, textAlign: "center", textTransform: "uppercase" }}>{d.label}</span>
        ))}
      </div>
    </MmColFrame>
  );
}
