import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{vl as n,yl as r}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as i,Ba as a,Ga as o,Ia as s,Ka as c,Ma as l}from"./imperative-CZQgOWZc.js";import{n as u}from"./es-na8XYpNF.js";import{Nt as d,n as f}from"./es-B2d2bv-I.js";function p({levels:e,value:t,defaultValue:n,onChange:r,marks:o,style:s}){let[l,u]=c(n??e[Math.floor(e.length/2)],{defaultValue:n,onChange:r,value:t}),f=(0,m.useMemo)(()=>e.map((e,t)=>({...v(o?.[t],e),value:e})),[o,e]),p=e.indexOf(l),y=p===-1?Math.floor(e.length/2):p,{minWidth:b,...x}=s??{},S=t=>{let n=e[t];n!==void 0&&u(n)};return(0,h.jsxs)(i,{className:g.root,gap:8,style:{...x,minWidth:_(e.length,b),width:`100%`},children:[(0,h.jsx)(`div`,{className:g.slider,children:(0,h.jsx)(d,{dots:!0,max:e.length-1,min:0,step:1,tooltip:{open:!1},value:y,onChange:S})}),(0,h.jsx)(`div`,{className:g.labels,style:{gridTemplateColumns:`repeat(${e.length}, minmax(0, 1fr))`},children:f.map((e,t)=>{let n=t===y;return(0,h.jsx)(`button`,{"aria-current":n?`true`:void 0,className:a(g.label,n&&g.selectedLabel),style:e.style,type:`button`,onClick:()=>{u(e.value)},children:e.label},e.value)})})]})}var m,h,g,_,v,y,b=t((()=>{u(),f(),l(),m=e(r()),o(),h=e(n()),g=s(({css:e,cssVar:t})=>({label:e`
    cursor: pointer;

    padding: 0;
    border: none;

    font: inherit;
    font-size: 12px;
    line-height: 16px;
    color: ${t.colorTextTertiary};
    text-align: center;
    overflow-wrap: anywhere;

    background: transparent;

    transition: color 0.2s ease;

    &:hover {
      color: ${t.colorTextSecondary};
    }

    &:focus-visible {
      border-radius: 6px;
      outline: 1px solid ${t.colorBorder};
      outline-offset: 2px;
    }
  `,labels:e`
    display: grid;
    gap: 8px;
    width: 100%;
  `,root:e`
    width: 100%;
  `,selectedLabel:e`
    color: ${t.colorText};
  `,slider:e`
    width: 100%;
    padding-inline: 6px;

    .ant-slider {
      margin-block: 2px 0;
      margin-inline: 0;
    }

    .ant-slider-rail {
      background: ${t.colorFillQuaternary};
    }

    .ant-slider-track {
      background: ${t.colorTextSecondary};
    }

    .ant-slider-dot {
      border-color: ${t.colorTextTertiary};
      background: ${t.colorBgElevated};
    }

    .ant-slider-dot-active {
      border-color: ${t.colorTextSecondary};
    }

    .ant-slider-handle::after {
      background: ${t.colorBgElevated};
      box-shadow: 0 0 0 2px ${t.colorTextSecondary};
    }

    .ant-slider-handle:hover::after,
    .ant-slider-handle:focus::after,
    .ant-slider-handle:active::after {
      box-shadow: 0 0 0 3px ${t.colorTextSecondary};
    }
  `})),_=(e,t)=>{let n=e>=5?260:e===4?220:180;return t===void 0?n:typeof t==`number`?Math.max(t,n):t},v=(e,t)=>e?typeof e==`object`&&`label`in e?{label:e.label??t,style:e.style}:{label:e}:{label:t},y=(0,m.memo)(p)}));export{b as n,y as t};