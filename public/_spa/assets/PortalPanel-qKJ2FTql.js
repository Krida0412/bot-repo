import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{Hs as i,Js as a,vl as o,yl as s}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as c,Ba as l,Ia as u,Ja as d,Ma as f,Ra as p}from"./imperative-CZQgOWZc.js";import{mr as m,n as h,za as g}from"./es-na8XYpNF.js";import{t as _}from"./fast-deep-equal-MG-n9E1a.js";import{_ as v,m as y,t as b}from"./selectors-C581QdPz.js";import{Ui as x,n as S}from"./store-CDuzlPGA.js";import{d as C,r as w,t as T}from"./global-Cd7A4jdZ.js";import{t as E}from"./selectors-CamLeLda.js";import{K as D,q as O}from"./index-CG_0atUX.js";import{n as k,t as A}from"./router-BOcwyvHH.js";var j,M,N,P,F,I=t((()=>{h(),f(),j=e(_()),M=e(s()),a(),x(),b(),T(),E(),N=e(o()),P=u(({css:e,cssVar:t})=>({content:e`
    position: relative;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: 100%;
    max-height: 100%;

    background: ${t.colorBgContainer};
  `,drawer:e`
    z-index: 10;
    height: 100%;
    background: ${t.colorBgContainer};
  `})),F=(0,M.memo)(({children:e})=>{let[t,n,r,a]=S(e=>[y.showPortal(e),y.showPluginUI(e),y.showArtifactUI(e),v.showThread(e)]),[o,s]=w(e=>[C.portalWidth(e),e.updateSystemStatus]),[c,l]=(0,M.useState)(o);c!==o&&l(o);let{lg:u}=d();return(0,N.jsx)(g,{className:P.drawer,defaultSize:{width:c},expand:t,expandable:!1,maxWidth:i,mode:u?`fixed`:`float`,placement:`right`,showHandleWhenCollapsed:!1,showHandleWideArea:!1,size:{height:`100%`,width:o},classNames:{content:P.content},minWidth:r||n||a?600:400,onSizeChange:(e,t)=>{if(!t)return;let n=typeof t.width==`string`?Number.parseInt(t.width):t.width;n&&((0,j.default)(n,o)||(l(n),s({portalWidth:n})))},children:(0,N.jsx)(M.Activity,{mode:t?`visible`:`hidden`,name:`AgentPortal`,children:e})})})})),L,R,z,B=t((()=>{h(),f(),L=e(o()),R=p`
  :has(.portal-artifact) {
    overflow: hidden;
    padding-block-end: 12px;
  }
`,z=({children:e})=>(0,L.jsx)(c,{className:l(R,`portal-body`),height:`100%`,style:{flex:1,height:0,position:`relative`},width:`100%`,children:e})})),V,H,U=t((()=>{k(),B(),V=e(o()),H=()=>(0,V.jsx)(A,{renderBody:e=>(0,V.jsx)(z,{children:e})})})),W,G,K,q=t((()=>{h(),f(),n(),k(),x(),b(),W=e(o()),G=u(({css:e,cssVar:t})=>({container:e`
    background: linear-gradient(${t.colorBgElevated}, ${t.colorBgContainer}) !important;
  `})),K=()=>{let[e,t,n]=S(e=>[e.showPortal,v.showThread(e),e.clearPortalStack]),{t:i}=r(`portal`);return(0,W.jsx)(m,{allowFullscreen:!0,destroyOnHidden:!0,className:l(t&&G.container),footer:null,height:`95%`,open:e,title:i(`title`),styles:{body:{padding:0},header:{display:`none`}},onCancel:()=>n(),children:(0,W.jsx)(A,{renderBody:e=>(0,W.jsx)(c,{gap:8,height:`calc(100% - 52px)`,padding:`0 8px`,style:{overflow:`hidden`},children:(0,W.jsx)(c,{height:`100%`,style:{marginInline:-8,overflow:`hidden`,position:`relative`},width:`calc(100% + 16px)`,children:e})})})})}})),J,Y,X,Z=t((()=>{J=e(s()),O(),U(),q(),Y=e(o()),X=(0,J.memo)(({mobile:e})=>(0,Y.jsx)(J.Suspense,{fallback:(0,Y.jsx)(D,{debugId:`PortalPanel`}),children:(0,Y.jsx)(e?K:H,{})})),X.displayName=`PortalPanel`}));export{I as i,Z as n,F as r,X as t};