import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{Ct as n,at as r,dt as i,ot as a,pt as o,wt as s}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{ks as c,vl as l,yl as u}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as d,Ia as f,Ma as p}from"./imperative-Xfjd337A.js";import{N as m,Os as h,Ua as g,cs as _,k as v,mr as y,n as b,os as x,to as S,us as C}from"./es-2ZVhpwv7.js";import{n as w,zt as T}from"./es-DMB7XTXN.js";import{dt as E,vt as D}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{n as O,t as k}from"./agent-BUstbF8o.js";import{r as A,t as ee}from"./dist-DmoxVyn9.js";import{n as j,t as M}from"./AgentSelectionEmpty-TBw7pHQb.js";var N,P=t((()=>{r(),N=a((e,t)=>({clearSelection:()=>{e({selectedAgentIds:[]})},isSelected:e=>t().selectedAgentIds.includes(e),removeAgent:t=>{e(e=>({selectedAgentIds:e.selectedAgentIds.filter(e=>e!==t)}))},selectedAgentIds:[],setSelectedAgents:t=>{e({selectedAgentIds:t})},toggleAgent:t=>{e(e=>e.selectedAgentIds.includes(t)?{selectedAgentIds:e.selectedAgentIds.filter(e=>e!==t)}:{selectedAgentIds:[...e.selectedAgentIds,t]})}}))})),F,I,L,R,z=t((()=>{b(),g(),p(),E(),F=e(u()),c(),P(),I=e(l()),L=f(({css:e,cssVar:t})=>({item:e`
    cursor: pointer;

    margin-block: 1px;
    padding-block: 6px;
    padding-inline: 8px;
    border-radius: ${t.borderRadius};

    transition: background 0.2s ease;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,removeButton:e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 4px;

    color: ${t.colorTextTertiary};

    transition: all 0.2s ease;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }
  `,title:e`
    overflow: hidden;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),R=(0,F.memo)(({agent:e,defaultTitle:t,showCheckbox:n,showRemove:r})=>{let i=(0,F.useRef)(null),a=S(i),o=N(t=>t.selectedAgentIds.includes(e.id)),s=N(e=>e.toggleAgent),c=N(e=>e.removeAgent),l=e.title||t,u=e.avatar||`/avatars/agent-default.png`,f=e.backgroundColor??void 0,p=()=>{s(e.id)};return(0,I.jsx)(`div`,{className:L.item,ref:i,style:{cursor:n?`pointer`:`default`},onClick:n?p:void 0,children:(0,I.jsxs)(d,{horizontal:!0,align:`center`,gap:8,width:`100%`,children:[n&&(0,I.jsx)(x,{checked:o,onChange:p,onClick:e=>{e.stopPropagation(),p()}}),(0,I.jsx)(C,{animation:a,avatar:u,background:f,shape:`circle`,size:28}),(0,I.jsx)(h,{ellipsis:!0,className:L.title,children:l}),r&&(0,I.jsx)(`div`,{className:L.removeButton,onClick:t=>{t.stopPropagation(),c(e.id)},children:(0,I.jsx)(D,{size:14})})]})})})})),B,V,H,U,W=t((()=>{b(),p(),B=e(u()),i(),ee(),j(),z(),V=e(l()),H=f(({css:e,cssVar:t})=>({container:e`
    user-select: none;

    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    padding-block: ${t.paddingSM}px 0;
    padding-inline: ${t.paddingSM}px;
  `})),U=(0,B.memo)(({agents:e,isLoading:t})=>{let{t:n}=o([`chat`,`common`]),[r,i]=(0,B.useState)(``),a=(0,B.useMemo)(()=>n(`defaultSession`,{ns:`common`}),[n]),s=(0,B.useCallback)(e=>{i(e.target.value)},[]),c=(0,B.useMemo)(()=>{if(!r.trim())return e;let t=r.toLowerCase();return e.filter(e=>{let n=e.title||``,r=e.description||``;return n.toLowerCase().includes(t)||r.toLowerCase().includes(t)})},[e,r]);return(0,V.jsxs)(d,{className:H.container,gap:12,children:[(0,V.jsx)(m,{allowClear:!0,placeholder:n(`memberSelection.searchAgents`),value:r,variant:`filled`,onChange:s}),(0,V.jsx)(d,{flex:1,style:{minHeight:0},children:t?(0,V.jsxs)(d,{gap:8,padding:8,children:[(0,V.jsx)(v,{active:!0,paragraph:{rows:1},title:!1}),(0,V.jsx)(v,{active:!0,paragraph:{rows:1},title:!1}),(0,V.jsx)(v,{active:!0,paragraph:{rows:1},title:!1})]}):c.length===0?(0,V.jsx)(M,{search:!!r,variant:r?`empty`:`noAvailable`}):(0,V.jsx)(A,{style:{flex:1},totalCount:c.length,itemContent:e=>{let t=c[e];return(0,V.jsx)(R,{showCheckbox:!0,agent:t,defaultTitle:a},t.id)}})})]})})})),G,K,q,J,Y=t((()=>{b(),p(),G=e(u()),i(),j(),z(),P(),K=e(l()),q=f(({css:e,cssVar:t})=>({container:e`
    overflow-y: auto;
    flex: 1;
    padding: ${t.paddingSM}px;
  `,title:e`
    font-size: 12px;
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `})),J=(0,G.memo)(({agents:e})=>{let{t}=o([`chat`,`common`]),n=N(e=>e.selectedAgentIds),r=(0,G.useMemo)(()=>t(`defaultSession`,{ns:`common`}),[t]),i=(0,G.useMemo)(()=>n.map(t=>e.find(e=>e.id===t)).filter(e=>e!==void 0),[e,n]);return i.length===0?(0,K.jsx)(d,{className:q.container,flex:1,children:(0,K.jsx)(M,{variant:`noSelected`})}):(0,K.jsxs)(d,{className:q.container,gap:4,children:[(0,K.jsx)(`div`,{className:q.title,children:t(`memberSelection.selectedAgents`,{count:i.length})}),(0,K.jsx)(d,{children:i.map(e=>(0,K.jsx)(R,{showRemove:!0,agent:e,defaultTitle:r},e.id))})]})})})),X,Z,Q,$,te=t((()=>{b(),w(),p(),X=e(u()),i(),n(),O(),W(),Y(),P(),Z=e(l()),Q=f(({css:e,cssVar:t})=>({container:e`
    display: flex;
    flex-direction: row;

    height: 500px;
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius}px;
  `,rightColumn:e`
    display: flex;
    flex: 1;
    flex-direction: column;
  `})),$=(0,X.memo)(({existingMembers:e=[],onCancel:t,onConfirm:n,open:r})=>{let{t:i}=o([`chat`,`common`]),a=N(e=>e.selectedAgentIds),c=N(e=>e.clearSelection),{data:l=[],isLoading:u}=s(r?`queryAgents`:null,()=>k.queryAgents()),f=(0,X.useMemo)(()=>l.filter(t=>!e.includes(t.id)),[l,e]);(0,X.useEffect)(()=>{r||c()},[r,c]);let[p,m]=(0,X.useState)(!1),h=async()=>{try{m(!0),await n(a),c()}catch(e){console.error(`Failed to add members:`,e)}finally{m(!1)}},g=()=>{c(),t()},v=a.length===0||p;return(0,Z.jsx)(y,{allowFullscreen:!0,open:r,title:i(`memberSelection.addMember`),width:800,footer:(0,Z.jsxs)(d,{horizontal:!0,gap:8,justify:`end`,children:[(0,Z.jsx)(_,{onClick:g,children:i(`cancel`,{ns:`common`})}),(0,Z.jsxs)(_,{disabled:v,loading:p,type:`primary`,onClick:h,children:[i(`memberSelection.addMember`),` (`,a.length,`)`]})]}),onCancel:g,children:(0,Z.jsxs)(d,{horizontal:!0,className:Q.container,gap:8,children:[(0,Z.jsx)(U,{agents:f,isLoading:u}),(0,Z.jsx)(T,{orientation:`vertical`,style:{height:`100%`}}),(0,Z.jsx)(J,{agents:l})]})})})}));export{te as n,$ as t};