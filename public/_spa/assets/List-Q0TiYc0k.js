import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{qt as n}from"../i18n/i18n-zh-CN-CbR0_Rok.js";import{dt as r,pt as i}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{_l as a,gl as o,lc as s,nc as c,vl as l,yl as u}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as d,Ia as f,Ma as p,Oa as m,da as h,dn as ee,za as te}from"./imperative-Xfjd337A.js";import{Er as g,Is as _,Li as v,Os as y,Sr as b,ha as x,ir as S,kr as C,n as w,ya as T}from"./es-2ZVhpwv7.js";import{a as E,m as ne,n as re}from"../vendor/vendor-react-D1dBs3e7.js";import{Ah as ie,Ef as ae,It as oe,Pa as se,Po as ce,dt as D,eg as O,es as k,fs as A,op as j,vl as M}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{n as N,o as P}from"./ModelSelect-D7Ja-59y.js";import{n as F,t as I}from"./PublishedTime-z4JfztEW.js";var L,R,z,B=t((()=>{w(),D(),L=e(u()),r(),R=e(l()),z=(0,L.memo)(({search:e,...t})=>{let{t:n}=i(`discover`);return(0,R.jsx)(m,{height:`100%`,style:{minHeight:`50vh`},width:`100%`,children:(0,R.jsx)(b,{description:n(e?`models.empty.search`:`models.empty.description`),icon:ae,title:e?void 0:n(`models.empty.title`),type:e?`default`:`page`,descriptionProps:{fontSize:14},style:{maxWidth:400},...t})})}),z.displayName=`ModelEmpty`})),V,H,U,W,G=t((()=>{w(),p(),c(),D(),V=e(u()),H=e(l()),U={chat:A,embedding:ie,image:M,realtime:se,stt:k,text2music:ce,tts:O,video:oe},W=(0,V.memo)(({type:e,size:t=20})=>(0,H.jsx)(ee,{title:`${s(e)} Model`,children:(0,H.jsx)(h,{color:te.colorTextDescription,icon:U?.[e],size:t})}))})),K,q,J,Y,X,le=t((()=>{g(),w(),p(),K=e(n()),D(),q=e(u()),r(),re(),o(),P(),F(),G(),J=e(l()),Y=f(({css:e,cssVar:t})=>({author:e`
      color: ${t.colorTextDescription};
    `,code:e`
      font-family: ${t.fontFamilyCode};
    `,desc:e`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,secondaryDesc:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,title:e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `})),X=(0,q.memo)(({description:e,identifier:t,displayName:n,contextWindowTokens:r,releasedAt:o,type:s,abilities:c,providers:l})=>{let{t:u}=i([`models`,`discover`]),f=ne(),p=a(`/community/model`,t);return(0,J.jsxs)(_,{clickable:!0,"data-testid":`model-item`,height:`100%`,variant:`outlined`,width:`100%`,style:{overflow:`hidden`,position:`relative`},onClick:()=>{f(p)},children:[(0,J.jsxs)(d,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:[(0,J.jsxs)(d,{horizontal:!0,gap:12,title:t,style:{overflow:`hidden`},children:[(0,J.jsx)(v,{model:t,size:40,style:{flex:`none`},type:`avatar`}),(0,J.jsxs)(d,{flex:1,gap:2,style:{overflow:`hidden`},children:[(0,J.jsx)(d,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},children:(0,J.jsx)(E,{style:{color:`inherit`,overflow:`hidden`},to:p,children:(0,J.jsx)(y,{ellipsis:!0,as:`h2`,className:Y.title,children:n})})}),(0,J.jsx)(`div`,{className:Y.author,children:t})]})]}),(0,J.jsx)(d,{horizontal:!0,align:`center`,gap:4,children:(0,J.jsx)(W,{type:s})})]}),(0,J.jsxs)(d,{flex:1,gap:12,paddingInline:16,children:[(0,J.jsx)(N,{directionReverse:!0,contextWindowTokens:r,...c}),(0,J.jsx)(y,{as:`p`,className:Y.desc,ellipsis:{rows:3},children:u(`${t}.description`,{defaultValue:e})})]}),(0,J.jsx)(d,{horizontal:!0,align:`center`,className:Y.footer,justify:`space-between`,padding:16,children:(0,J.jsxs)(d,{horizontal:!0,align:`center`,className:Y.secondaryDesc,justify:`space-between`,children:[(0,J.jsxs)(d,{horizontal:!0,align:`center`,gap:4,children:[(0,J.jsx)(h,{icon:j,size:14}),(0,J.jsx)(I,{className:Y.secondaryDesc,date:o||(0,K.default)().toISOString()})]}),(0,J.jsx)(T,{content:(0,J.jsx)(d,{horizontal:!0,gap:6,wrap:`wrap`,style:{maxWidth:175},children:l.map(e=>(0,J.jsx)(C,{provider:e,size:24},e))}),children:(0,J.jsxs)(d,{horizontal:!0,align:`center`,gap:6,children:[l.slice(0,6).map(e=>(0,J.jsx)(C,{provider:e,size:14,type:`mono`},e)),l.length>6&&(0,J.jsx)(x,{size:`small`,children:l.length})]})})]})})]})})})),Z,Q,$,ue=t((()=>{w(),Z=e(u()),B(),le(),Q=e(l()),$=(0,Z.memo)(({data:e=[],rows:t=3})=>e.length===0?(0,Q.jsx)(z,{}):(0,Q.jsx)(S,{rows:t,width:`100%`,children:e.map((e,t)=>(0,Q.jsx)(X,{...e},t))}))}));export{G as i,ue as n,W as r,$ as t};