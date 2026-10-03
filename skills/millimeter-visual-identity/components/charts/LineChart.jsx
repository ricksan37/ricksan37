import React from "react";
const MM_LINE_TONES={blue:"var(--signal-blue)",amber:"var(--amber)",vermilion:"var(--vermilion)",green:"var(--grid-green)"};
const MM_LINE_MONO={fontFamily:"var(--font-mono)",fontSize:"var(--size-mono-sm)",color:"var(--text-muted)",letterSpacing:"0.06em"};
function MmLineFrame({kicker,title,legend,height,children,style,...rest}){
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
function MmLineLegend({items}){
  return items.map((s,i)=>(
    <span key={i} style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-mono)",fontSize:"var(--size-mono-sm)",color:"var(--text-muted)",letterSpacing:"0.06em",textTransform:"uppercase"}}>
      <span style={{width:8,height:8,background:s.color,borderRadius:2}}/>{s.name}
    </span>
  ));
}

/** Momentum and trend. Straight segments, no smoothing. 2px stroke, ringed markers. */
export function LineChart({ labels, series, height = 200, kicker, title, style, ...rest }) {
  const resolved = series.slice(0, 4).map((s, i) => ({ ...s, color: MM_LINE_TONES[s.tone] || [MM_LINE_TONES.blue, MM_LINE_TONES.amber, MM_LINE_TONES.vermilion, MM_LINE_TONES.green][i] }));
  const all = resolved.flatMap((s) => s.values);
  const max = Math.max(...all), min = Math.min(0, Math.min(...all));
  const w = 600, h = height, padL = 8, padR = 8;
  const x = (i) => padL + (i * (w - padL - padR)) / Math.max(1, labels.length - 1);
  const y = (v) => h - 10 - ((v - min) / (max - min || 1)) * (h - 24);
  return (
    <MmLineFrame kicker={kicker} title={title} legend={<MmLineLegend items={resolved} />} style={style} {...rest}>
      <svg viewBox={"0 0 " + w + " " + h} preserveAspectRatio="none" style={{ width: "100%", height, display: "block" }}>
        {[0.25, 0.5, 0.75, 1].map((t, i) => (
          <line key={i} x1="0" x2={w} y1={y(min + (max - min) * t)} y2={y(min + (max - min) * t)} stroke="var(--border-hairline)" strokeWidth="1" />
        ))}
        {resolved.map((s, si) => (
          <polyline key={si} fill="none" stroke={s.color} strokeWidth="2" points={s.values.map((v, i) => x(i) + "," + y(v)).join(" ")} />
        ))}
        {resolved.map((s, si) =>
          s.values.map((v, i) => (
            <circle key={si + "-" + i} cx={x(i)} cy={y(v)} r="4" fill={s.color} stroke="var(--void)" strokeWidth="1.5" />
          ))
        )}
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        {labels.map((l, i) => (
          <span key={i} style={{ ...MM_LINE_MONO, textTransform: "uppercase" }}>{l}</span>
        ))}
      </div>
    </MmLineFrame>
  );
}
