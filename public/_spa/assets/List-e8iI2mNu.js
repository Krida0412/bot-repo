import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{_l as i,gl as a,vl as o,yl as s}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as c,Ia as l,Ma as u,Oa as d,cn as f,za as p}from"./imperative-CZQgOWZc.js";import{Er as m,F as h,Fi as g,Fr as _,Is as v,Os as y,Sr as b,ir as x,jr as S,n as C,ws as w}from"./es-na8XYpNF.js";import{a as T,m as E,n as D}from"../vendor/vendor-react-Du2OrJ5H.js";import{dt as O,ep as k,vu as A}from"../vendor/vendor-icons-BrLWQuP2.js";var j,M,N,P=t((()=>{C(),O(),j=e(s()),n(),M=e(o()),N=(0,j.memo)(({search:e,...t})=>{let{t:n}=r(`discover`);return(0,M.jsx)(d,{height:`100%`,style:{minHeight:`50vh`},width:`100%`,children:(0,M.jsx)(b,{description:n(e?`providers.empty.search`:`providers.empty.description`),icon:k,title:e?void 0:n(`providers.empty.title`),type:e?`default`:`page`,descriptionProps:{fontSize:14},style:{maxWidth:400},...t})})}),N.displayName=`ProviderEmpty`})),F,I,L,R,z=t((()=>{m(),C(),u(),O(),F=e(s()),n(),D(),a(),I=e(o()),L=l(({css:e,cssVar:t})=>({author:e`
      color: ${t.colorTextDescription};
    `,code:e`
      font-family: ${t.fontFamilyCode};
    `,desc:e`
      flex: none;
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
    `})),R=(0,F.memo)(({url:e,name:t,description:n,identifier:a,models:o})=>{let s=E(),l=i(`/community/provider`,a),{t:u}=r([`discover`,`providers`]);return(0,I.jsxs)(v,{clickable:!0,"data-testid":`provider-item`,height:`100%`,variant:`outlined`,width:`100%`,style:{overflow:`hidden`,position:`relative`},onClick:()=>{s(l)},children:[(0,I.jsxs)(c,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:[(0,I.jsxs)(c,{title:a,style:{overflow:`hidden`},children:[(0,I.jsx)(T,{style:{color:`inherit`,overflow:`hidden`},to:l,children:(0,I.jsx)(S,{provider:a,size:28,style:{flex:`none`}})}),(0,I.jsxs)(`div`,{className:L.author,children:[`@`,t]})]}),(0,I.jsxs)(c,{horizontal:!0,align:`center`,children:[(0,I.jsx)(`a`,{href:e,rel:`noopener noreferrer`,target:`_blank`,onClick:f,children:(0,I.jsx)(w,{color:p.colorTextDescription,icon:A})}),(0,I.jsx)(`a`,{href:`https://github.com/lobehub/lobe-chat/blob/main/src/config/modelProviders/${a}.ts`,rel:`noopener noreferrer`,target:`_blank`,onClick:f,children:(0,I.jsx)(w,{fill:p.colorTextDescription,icon:_})})]})]}),(0,I.jsx)(c,{flex:1,gap:12,paddingInline:16,children:n&&(0,I.jsx)(y,{className:L.desc,ellipsis:{rows:3},children:u(`${a}.description`,{defaultValue:n,ns:`providers`})})}),(0,I.jsx)(c,{horizontal:!0,align:`center`,className:L.footer,justify:`space-between`,padding:16,children:(0,I.jsx)(h,{horizontal:!0,gap:6,position:`right`,size:10,width:`100%`,children:o.slice(0,6).filter(Boolean).map(e=>(0,I.jsx)(T,{to:i(`/model`,e),children:(0,I.jsx)(g,{model:e,style:{margin:0}})},e))})})]})})})),B,V,H,U=t((()=>{C(),B=e(s()),P(),z(),V=e(o()),H=(0,B.memo)(({data:e=[],rows:t=3})=>e.length===0?(0,V.jsx)(N,{}):(0,V.jsx)(x,{rows:t,width:`100%`,children:e.map((e,t)=>(0,V.jsx)(R,{...e},t))}))}));export{U as n,H as t};