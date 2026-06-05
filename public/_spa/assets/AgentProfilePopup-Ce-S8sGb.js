import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{Ct as n,dt as r,pt as i,wt as a}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{ks as o,vl as s,yl as c}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as l,Ia as u,Ma as d,Oa as f,da as p,dn as m,za as h}from"./imperative-CZQgOWZc.js";import{Er as g,Li as _,Os as v,Wr as y,k as b,n as x,ti as S,us as C,ws as w,ya as T}from"./es-na8XYpNF.js";import{m as E,n as D}from"../vendor/vendor-react-Du2OrJ5H.js";import{Si as O,bd as k,dt as A,wh as j}from"../vendor/vendor-icons-BrLWQuP2.js";import{n as M,t as N}from"./agent-C2VhKPJI.js";import{Dr as P,wr as F}from"./store-CDuzlPGA.js";import{n as I,t as L}from"./ModelSelect-BweIfaG3.js";var R,z,B,V,H=t((()=>{x(),d(),R=e(c()),o(),z=e(s()),B=u(({css:e,cssVar:t})=>({banner:e`
    position: relative;
    overflow: hidden;
    height: 60px;
  `,bannerInner:e`
    filter: blur(44px);
  `,clickableAvatar:e`
    cursor: pointer;
  `,clickableTitle:e`
    cursor: pointer;

    &:hover {
      color: ${t.colorPrimary};
    }
  `,container:e`
    overflow: hidden;
    width: 280px;
    background: ${t.colorBgElevated};
  `,description:e`
    overflow: hidden;

    max-height: 80px;

    font-size: 12px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
    text-overflow: ellipsis;
  `,descriptionSkeleton:e`
    .ant-skeleton-paragraph {
      margin-block-start: 4px !important;
    }

    .ant-skeleton-paragraph > li {
      height: 12px !important;
    }

    .ant-skeleton-paragraph > li + li {
      margin-block-start: 6px !important;
    }
  `,header:e`
    position: relative;
    margin-block-start: -24px;
    padding-inline: 16px;
  `,name:e`
    font-size: 16px;
    font-weight: 600;
    color: ${t.colorText};
  `})),V=(0,R.memo)(({avatar:e,backgroundColor:t,description:n,headerAction:r,loading:i,onHeaderClick:a,title:o,children:s})=>(0,z.jsxs)(l,{className:B.container,children:[(0,z.jsx)(f,{className:B.banner,style:{background:h.colorFillTertiary},children:(0,z.jsx)(C,{emojiScaleWithBackground:!0,avatar:e||`/avatars/agent-default.png`,background:t??void 0,className:B.bannerInner,shape:`square`,size:400})}),(0,z.jsxs)(l,{className:B.header,gap:8,children:[(0,z.jsx)(C,{emojiScaleWithBackground:!0,avatar:e||`/avatars/agent-default.png`,background:t??void 0,className:a?B.clickableAvatar:void 0,shape:`square`,size:48,style:{border:`2px solid ${h.colorBgElevated}`},onClick:a}),(0,z.jsxs)(l,{gap:2,children:[(0,z.jsxs)(l,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,z.jsx)(v,{ellipsis:!0,className:`${B.name} ${a?B.clickableTitle:``}`,onClick:a,children:o}),r]}),n?(0,z.jsx)(m,{title:n,children:(0,z.jsx)(v,{className:B.description,ellipsis:{rows:2},children:n})}):i?(0,z.jsx)(b,{active:!0,className:B.descriptionSkeleton,paragraph:{rows:2,width:[`100%`,`60%`]},title:!1}):null]})]}),s]}))})),U,W,G,K,q=t((()=>{g(),x(),y(),d(),A(),U=e(c()),r(),D(),n(),I(),M(),F(),H(),W=e(s()),G=u(({css:e,cssVar:t})=>({footer:e`
    padding-block: 12px;
    padding-inline: 16px;
    border-block-start: 1px solid ${t.colorBorderSecondary};
  `,section:e`
    padding-block: 12px;
    padding-inline: 16px;
  `,sectionTitle:e`
    margin-block-end: 8px;

    font-size: 11px;
    font-weight: 600;
    color: ${t.colorTextTertiary};
    text-transform: uppercase;
  `,statItem:e`
    color: ${t.colorTextSecondary};
  `,trigger:e`
    border-radius: ${t.borderRadius};

    &[data-popup-open] {
      background: ${t.colorFillTertiary};
    }
  `})),K=(0,U.memo)(({agent:e,agentId:t,groupId:n,children:r,trigger:o=`click`})=>{let{t:s}=i(`chat`),c=E(),[u,d]=(0,U.useState)(!1),[f,m]=(0,U.useState)(!1),h=P(e=>e.updateMemberAgentConfig),{data:g,isLoading:y}=a(u?[`agentProfile`,t]:null,()=>N.getAgentConfigById(t),{revalidateOnFocus:!1}),x={avatar:g?.avatar??e?.avatar,backgroundColor:g?.backgroundColor??e?.backgroundColor,description:g?.description??e?.description,model:g?.model??e?.model,provider:g?.provider??e?.provider,title:g?.title??e?.title},C=async e=>{if(n){m(!0);try{await h(n,t,{model:e.model,provider:e.provider})}finally{m(!1)}}},D=()=>{n&&(d(!1),c(`/group/${n}/profile?tab=${t}`))},A=()=>{d(!1),c(`/agent/${t}/profile`)},M=!(x.title||x.avatar||x.description)&&y,F=g?.plugins?.length??0,I=g?.knowledgeBases?.length??0,R=g?.files?.length??0,z=F>0||I>0||R>0,B=n?x.model&&(0,W.jsxs)(l,{className:G.section,gap:4,children:[(0,W.jsx)(`div`,{className:G.sectionTitle,children:s(`groupSidebar.agentProfile.model`)}),(0,W.jsx)(L,{loading:f,value:{model:x.model,provider:x.provider??void 0},onChange:C})]}):!n&&y&&!g?(0,W.jsxs)(l,{horizontal:!0,align:`center`,className:G.footer,gap:14,children:[(0,W.jsx)(b.Button,{active:!0,size:`small`,style:{height:16,width:90}}),(0,W.jsx)(b.Button,{active:!0,size:`small`,style:{height:16,width:60}})]}):x.model||z?(0,W.jsxs)(l,{horizontal:!0,align:`center`,className:G.footer,gap:14,wrap:`wrap`,children:[x.model&&(0,W.jsxs)(l,{horizontal:!0,align:`center`,className:G.statItem,gap:6,children:[(0,W.jsx)(_,{model:x.model,size:14}),(0,W.jsx)(v,{fontSize:12,type:`secondary`,children:x.model})]}),F>0&&(0,W.jsxs)(l,{horizontal:!0,align:`center`,className:G.statItem,gap:4,children:[(0,W.jsx)(p,{icon:S,size:13}),(0,W.jsx)(v,{fontSize:12,type:`secondary`,children:s(`agentProfile.skills`,{count:F})})]}),I>0&&(0,W.jsxs)(l,{horizontal:!0,align:`center`,className:G.statItem,gap:4,children:[(0,W.jsx)(p,{icon:j,size:13}),(0,W.jsx)(v,{fontSize:12,type:`secondary`,children:s(`agentProfile.knowledgeBases`,{count:I})})]}),R>0&&(0,W.jsxs)(l,{horizontal:!0,align:`center`,className:G.statItem,gap:4,children:[(0,W.jsx)(p,{icon:k,size:13}),(0,W.jsx)(v,{fontSize:12,type:`secondary`,children:s(`agentProfile.files`,{count:R})})]})]}):null,H=M?(0,W.jsx)(`div`,{style:{padding:16,width:280},children:(0,W.jsx)(b,{active:!0,avatar:!0,paragraph:{rows:2}})}):(0,W.jsx)(V,{avatar:x.avatar,backgroundColor:x.backgroundColor,description:x.description,loading:y&&!x.description,title:x.title||s(`defaultSession`,{ns:`common`}),headerAction:n?(0,W.jsx)(l,{horizontal:!0,align:`center`,justify:`flex-end`,style:{paddingBlockStart:0},children:(0,W.jsx)(w,{icon:O,size:`small`,title:s(`groupSidebar.agentProfile.settings`),onClick:D})}):void 0,onHeaderClick:A,children:B});return(0,W.jsx)(T,{classNames:o===`click`?{trigger:G.trigger}:void 0,content:H,nativeButton:!1,open:u,placement:o===`hover`?`top`:`right`,trigger:o,styles:{content:{borderRadius:12,overflow:`hidden`,padding:0}},onOpenChange:d,children:r})})}));export{q as n,K as t};