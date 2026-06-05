import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{vl as n,yl as r}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as i,Ia as a,Ja as o,Ma as s,Ua as c,da as l}from"./imperative-CZQgOWZc.js";import{cs as u,ha as d,n as f}from"./es-na8XYpNF.js";import{a as p,n as m}from"../vendor/vendor-react-Du2OrJ5H.js";import{dt as h,um as g}from"../vendor/vendor-icons-BrLWQuP2.js";import{n as _,r as v}from"./const-Di8uBe8m.js";var y,b,x,S,C,w=t((()=>{f(),s(),h(),y=e(r()),m(),v(),b=e(n()),x=`lobe-mobile-scroll-container`,S=a(({css:e,cssVar:t})=>({more:e`
    display: flex;
    align-items: center;
    color: ${t.colorTextSecondary};
  `,tag:e`
    flex: none;

    padding-block: 0.1em;
    padding-inline: 0.3em;
    border-radius: ${t.borderRadius};

    font-size: 18px;
    font-weight: 500;
    color: ${t.colorTextSecondary};

    background: ${t.colorFillSecondary};
    ${c.sm} {
      font-size: 14px;
    }
  `,title:e`
    margin-block-start: 0.5em;
    font-size: 20px;
    font-weight: 600;
    ${c.sm} {
      font-size: 18px;
    }
  `})),C=(0,y.memo)(({tag:e,children:t,moreLink:n,more:r})=>{let{mobile:a}=o(),s=(0,b.jsx)(`h2`,{className:S.title,children:t});return(0,b.jsxs)(i,{horizontal:!0,align:`center`,gap:16,justify:`space-between`,width:`100%`,children:[e?(0,b.jsxs)(i,{horizontal:!0,align:`center`,gap:8,children:[s,(0,b.jsx)(d,{className:S.tag,children:e})]}):s,n&&(0,b.jsx)(p,{target:n.startsWith(`http`)?`_blank`:void 0,to:n,onClick:()=>{if(!n)return;let e=a?x:_,t=document?.querySelector(`#${e}`);t&&t.scrollTo({behavior:`smooth`,top:0})},children:(0,b.jsxs)(u,{className:S.more,style:{paddingInline:6},type:`text`,children:[(0,b.jsx)(`span`,{children:r}),(0,b.jsx)(l,{icon:g})]})})]})})}));export{w as n,C as t};