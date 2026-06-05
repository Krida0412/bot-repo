import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{vl as i,yl as a}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as o,Ba as s,Ia as c,Ma as l,za as u}from"./imperative-Xfjd337A.js";import{Er as d,Os as f,ha as p,ir as m,jr as h,k as g,kr as _,n as v,us as y}from"./es-2ZVhpwv7.js";import{n as b,zt as x}from"./es-DMB7XTXN.js";import{t as S}from"./fast-deep-equal-MG-n9E1a.js";import{Er as C}from"../i18n/i18n-default-Ib49YEbx.js";import{i as w,t as T,u as E}from"./aiInfra-Tib_oFBZ.js";import{F as D,P as O}from"./index-AVlnZl7f.js";import{n as k,t as A}from"./InstantSwitch-4RBue6Pc.js";function j(){return null}var M=t((()=>{})),N,P,F=t((()=>{k(),T(),N=e(i()),P=({id:e,Component:t,enabled:n})=>{let[r]=w(e=>[e.toggleProviderEnabled]);return t?(0,N.jsx)(t,{enabled:n,id:e}):(0,N.jsx)(A,{enabled:n,size:`small`,onChange:async t=>{await r(e,t)}})}})),I,L=t((()=>{l(),I=c(({css:e,cssVar:t})=>({bannerDark:e`
    opacity: 0.9;
  `,bannerLight:e`
    opacity: 0.4;
  `,containerDark:e`
    position: relative;

    overflow: hidden;

    height: 100%;
    border-radius: 12px;

    background: ${t.colorBgContainer};
    box-shadow: 0 0 1px 1px ${t.colorFillQuaternary} inset;

    transition: box-shadow 0.2s ${t.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${t.colorFillSecondary} inset;
    }
  `,containerLight:e`
    position: relative;

    overflow: hidden;

    height: 100%;
    border-radius: 12px;

    background: ${t.colorBgContainer};
    box-shadow: 0 0 1px 1px ${t.colorFillSecondary} inset;

    transition: box-shadow 0.2s ${t.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${t.colorFill} inset;
    }
  `,desc:e`
    min-height: 44px;
    margin-block-end: 0 !important;
    color: ${t.colorTextDescription};
  `,tagBlue:e`
    color: ${t.geekblue};
    background: ${t.geekblue1};
  `,tagGreen:e`
    color: ${t.green};
    background: ${t.green1};
  `,time:e`
    color: ${t.colorTextDescription};
  `,title:e`
    zoom: 1.2;
    margin-block-end: 0 !important;
    font-size: 18px !important;
    font-weight: bold;
  `,token:e`
    font-family: ${t.fontFamilyCode};
  `}))})),R,z,B,V,H=t((()=>{C(),d(),v(),b(),l(),R=e(a()),n(),M(),O(),F(),L(),z=e(i()),B=e=>e.endsWith(`codingplan`),V=(0,R.memo)(({id:e,description:t,name:n,enabled:i,source:a,logo:c,loading:l,onProviderSelect:d})=>{let{t:m}=r(`providers`),v=D();return l?(0,z.jsx)(o,{className:s(v?I.containerDark:I.containerLight),gap:24,padding:16,children:(0,z.jsx)(g,{active:!0})}):e===`lobehub`?(0,z.jsx)(j,{}):(0,z.jsx)(o,{className:s(v?I.containerDark:I.containerLight),gap:24,children:(0,z.jsxs)(o,{gap:12,padding:16,width:`100%`,children:[(0,z.jsx)(`div`,{style:{cursor:`pointer`},onClick:()=>{d(e)},children:(0,z.jsxs)(o,{gap:12,width:`100%`,children:[(0,z.jsx)(o,{horizontal:!0,align:`center`,justify:`space-between`,children:a===`builtin`?(0,z.jsxs)(o,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(h,{provider:e,size:24,style:{color:u.colorText},title:n}),B(e)&&(0,z.jsx)(p,{color:`geekblue`,children:`Coding Plan`})]}):(0,z.jsxs)(o,{horizontal:!0,align:`center`,gap:12,children:[c?(0,z.jsx)(y,{alt:n||e,avatar:c,size:28}):(0,z.jsx)(_,{provider:e,size:24,style:{borderRadius:6},type:`avatar`}),(0,z.jsx)(f,{style:{fontSize:16,fontWeight:`bold`},children:n||e})]})}),(0,z.jsx)(f,{className:I.desc,ellipsis:{rows:2},children:a===`custom`?t:m(`${e}.description`,{defaultValue:t})})]})}),(0,z.jsx)(x,{style:{margin:`4px 0`}}),(0,z.jsxs)(o,{horizontal:!0,justify:`space-between`,children:[(0,z.jsx)(`div`,{}),(0,z.jsx)(P,{enabled:i,id:e})]})]})})})})),U,W,G,K,q,J;t((()=>{v(),U=e(S()),W=e(a()),n(),T(),H(),G=e(i()),K=e(a()),q=Array.from({length:12}).fill(`-`).map((e,t)=>`${t}x${e}`),J=(0,W.memo)(e=>{let{onProviderSelect:t}=e,{t:n}=r(`modelProvider`),i=w(E.enabledAiProviderList,U.default),a=w(E.disabledAiProviderList,U.default),s=w(E.disabledCustomAiProviderList,U.default),[c]=w(e=>[e.initAiProviderList]);return c?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(o,{gap:24,children:[(0,G.jsxs)(o,{horizontal:!0,align:`center`,gap:8,children:[(0,G.jsx)(f,{strong:!0,style:{fontSize:18},children:n(`list.title.enabled`)}),(0,G.jsx)(p,{children:i.length})]}),(0,G.jsx)(m,{gap:16,rows:3,children:i.map(e=>(0,K.createElement)(V,{...e,key:e.id,onProviderSelect:t}))})]}),s.length>0&&(0,G.jsxs)(o,{gap:24,children:[(0,G.jsxs)(o,{horizontal:!0,align:`center`,gap:8,children:[(0,G.jsx)(f,{strong:!0,style:{fontSize:18},children:n(`list.title.custom`)}),(0,G.jsx)(p,{children:s.length})]}),(0,G.jsx)(m,{gap:16,rows:3,children:s.map(e=>(0,K.createElement)(V,{...e,key:e.id,onProviderSelect:t}))})]}),(0,G.jsxs)(o,{gap:24,children:[(0,G.jsxs)(o,{horizontal:!0,align:`center`,gap:8,children:[(0,G.jsx)(f,{strong:!0,style:{fontSize:18},children:n(`list.title.disabled`)}),(0,G.jsx)(p,{children:a.length})]}),(0,G.jsx)(m,{gap:16,rows:3,children:a.map(e=>(0,K.createElement)(V,{...e,key:e.id,onProviderSelect:t}))})]})]}):(0,G.jsxs)(o,{gap:24,paddingBlock:`0 16px`,children:[(0,G.jsx)(o,{horizontal:!0,align:`center`,gap:4,children:(0,G.jsx)(f,{strong:!0,style:{fontSize:16},children:n(`list.title.enabled`)})}),(0,G.jsx)(m,{gap:16,rows:3,children:q.map(e=>(0,G.jsx)(V,{loading:!0,enabled:!1,id:e,source:`builtin`,onProviderSelect:t},e))})]})})}))();export{J as default};