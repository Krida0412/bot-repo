import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{Et as i,_l as a,gl as o,gt as s,vl as c,yl as l}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as u,Ia as d,Ma as f,da as p,dn as m,za as h}from"./imperative-CZQgOWZc.js";import{Dr as g,Er as _,Is as v,Os as y,ha as b,ir as x,n as S,us as C}from"./es-na8XYpNF.js";import{a as w,m as T,n as E}from"../vendor/vendor-react-Du2OrJ5H.js";import{Su as D,Wf as O,bh as k,dt as A,op as j}from"../vendor/vendor-icons-BrLWQuP2.js";import{Bt as M,zt as N}from"./agent-h7g64c0D.js";import{n as P,t as F}from"./discover-Dr1r6_pi.js";import{n as I,t as L}from"./PublishedTime-D14cADW4.js";import{n as R,t as z}from"./useQuery-DQztLvl4.js";import{n as B,t as V}from"./AssistantEmpty-DwHFM8Md.js";var H,U,W,G,K=t((()=>{_(),S(),f(),A(),H=e(l()),n(),i(),U=e(c()),W=d(({css:e,cssVar:t})=>({token:e`
      border-radius: 4px;

      font-family: ${t.fontFamilyCode};
      font-size: 11px;
      color: ${t.colorTextSecondary};

      background: ${t.colorFillTertiary};
    `})),G=(0,H.memo)(({tokenUsage:e,pluginCount:t,knowledgeCount:n,forkCount:i,placement:a=`right`})=>{let{t:o}=r(`discover`);return(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:4,children:[(0,U.jsx)(m,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`assistants.tokenUsage`),children:(0,U.jsx)(b,{className:W.token,icon:(0,U.jsx)(p,{icon:O}),children:s(e)})}),!!(i&&i>0)&&(0,U.jsx)(m,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`fork.forksCount`,{count:i}),children:(0,U.jsx)(b,{className:W.token,icon:(0,U.jsx)(p,{icon:D}),children:s(i)})}),!!(t&&t>0)&&(0,U.jsx)(m,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`assistants.withPlugin`),children:(0,U.jsx)(b,{icon:(0,U.jsx)(p,{fill:h.colorTextSecondary,icon:g}),children:t})}),!!(n&&n>0)&&(0,U.jsx)(m,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`assistants.withKnowledge`),children:(0,U.jsx)(b,{icon:(0,U.jsx)(p,{icon:k}),children:n})})]})})})),q,J,Y,X,ee=t((()=>{S(),f(),A(),N(),q=e(l()),n(),E(),o(),I(),z(),P(),K(),J=e(c()),Y=d(({css:e,cssVar:t})=>({author:e`
      cursor: pointer;
      color: ${t.colorTextDescription};

      &:hover {
        color: ${t.colorPrimary};
      }
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
    `})),X=(0,q.memo)(({createdAt:e,updatedAt:t,author:n,avatar:i,title:o,description:s,category:c,identifier:l,tokenUsage:d,pluginCount:f,knowledgeCount:m,forkCount:h,backgroundColor:g,userName:_,type:x})=>{let S=T(),{source:E}=R(),D=x===`agent-group`,O=D?`/community/group_agent`:`/community/agent`,k=M.stringifyUrl({query:{source:E},url:a(O,l)},{skipNull:!0}),{t:A}=r(`discover`),N=(0,q.useCallback)(e=>{e.stopPropagation(),_&&S(`/community/user/${_}`)},[_,S]),P=(0,q.useCallback)(()=>{F.reportAgentEvent({event:`click`,identifier:l,source:location.pathname}).catch(()=>{}),S(k)},[l,k,S]);return(0,J.jsxs)(v,{clickable:!0,"data-agent-type":x??`agent`,"data-testid":`assistant-item`,height:`100%`,variant:`outlined`,width:`100%`,style:{overflow:`hidden`,position:`relative`},onClick:P,children:[D&&(0,J.jsx)(b,{color:`info`,style:{position:`absolute`,right:12,top:12,zIndex:1},children:A(`groupAgents.tag`,{defaultValue:`群组`})}),(0,J.jsx)(u,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,style:{paddingRight:D?80:16},width:`100%`,children:(0,J.jsxs)(u,{horizontal:!0,gap:12,title:l,style:{overflow:`hidden`},children:[(0,J.jsx)(C,{avatar:i,background:g||`transparent`,shape:`square`,size:40,style:{flex:`none`}}),(0,J.jsxs)(u,{flex:1,gap:2,style:{overflow:`hidden`},children:[(0,J.jsx)(u,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},children:(0,J.jsx)(w,{style:{color:`inherit`,overflow:`hidden`},to:k,children:(0,J.jsx)(y,{ellipsis:!0,as:`h2`,className:Y.title,children:o})})}),n&&(0,J.jsx)(`div`,{className:_?Y.author:void 0,style:_?void 0:{color:`inherit`},onClick:_?N:void 0,children:n})]})]})}),(0,J.jsxs)(u,{flex:1,gap:12,paddingInline:16,children:[(0,J.jsx)(y,{as:`p`,className:Y.desc,ellipsis:{rows:3},children:s}),(0,J.jsx)(G,{forkCount:h,knowledgeCount:m,pluginCount:f,tokenUsage:d})]}),(0,J.jsx)(u,{horizontal:!0,align:`center`,className:Y.footer,justify:`space-between`,padding:16,children:(0,J.jsxs)(u,{horizontal:!0,align:`center`,className:Y.secondaryDesc,justify:`space-between`,children:[(0,J.jsxs)(u,{horizontal:!0,align:`center`,gap:4,children:[(0,J.jsx)(p,{icon:j,size:14}),(0,J.jsx)(L,{className:Y.secondaryDesc,date:t||e,template:`MMM DD, YYYY`})]}),A(`category.assistant.${c}`)]})})]})})})),Z,Q,$,te=t((()=>{S(),Z=e(l()),B(),ee(),Q=e(c()),$=(0,Z.memo)(({data:e=[],rows:t=3})=>e.length===0?(0,Q.jsx)(V,{}):(0,Q.jsx)(x,{rows:t,width:`100%`,children:e.map((e,t)=>(0,Q.jsx)(X,{...e},t))}))}));export{K as i,te as n,G as r,$ as t};