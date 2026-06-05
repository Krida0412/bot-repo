import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{vl as i,yl as a}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as o,Ia as s,J as c,Ma as l,Oa as u,da as d}from"./imperative-Xfjd337A.js";import{n as f,ws as p}from"./es-2ZVhpwv7.js";import{bn as m,dt as h,mm as ee,nf as te,wi as g}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{n as _,s as v}from"./base-ui-CG2gzEWh.js";import{a as y,i as b,t as x,u as S}from"./agent-BV7ChU6o.js";import{Ui as C,bi as w,n as ne,vi as re}from"./store-DTt7Ili4.js";import{f as T,i as E,t as ie}from"./aiInfra-Tib_oFBZ.js";import{r as ae}from"./ErrorContent-BMpyJjoj.js";import{h as oe,m as D}from"./AgentGroupAvatar-BQuYFpY5.js";import{f as O,i as k,p as A,r as j}from"./PromptTransformAction-Cu4zLuOq.js";import{n as M,t as N}from"./NavItem-CU97XmZp.js";var P,F,I,L,R=t((()=>{P={blockSize:28,size:16},F={actionSize:P},I={paddingLeft:4,paddingRight:4},L={size:28}})),z,B,V,H,U=t((()=>{f(),l(),h(),z=e(a()),A(),ae(),k(),D(),x(),y(),ie(),B=e(i()),V=s(({css:e,cssVar:t})=>({chevron:e`
    color: ${t.colorTextQuaternary};
  `,name:e`
    overflow: hidden;

    max-width: 120px;

    font-size: 12px;
    line-height: 1;
    color: ${t.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,trigger:e`
    cursor: pointer;
    border-radius: 6px;

    :hover {
      background: ${t.colorFillTertiary};
    }
  `})),H=(0,z.memo)(()=>{let[e,t]=(0,z.useState)(!1),n=re(w.agentId),[r,i,a]=b(e=>[S.getAgentModelById(n)(e),S.getAgentModelProviderById(n)(e),e.updateAgentConfigById]),s=E(T.getEnabledModelById(r,i)),c=E(T.isModelHasExtendParams(r,i)),l=s?.displayName||r;return(0,B.jsxs)(o,{horizontal:!0,align:`center`,children:[(0,B.jsx)(j,{model:r,openOnHover:!1,provider:i,onModelChange:(0,z.useCallback)(async e=>{await a(n,e)},[n,a]),children:(0,B.jsx)(u,{horizontal:!0,className:V.trigger,height:28,paddingInline:6,children:(0,B.jsxs)(o,{horizontal:!0,align:`center`,gap:2,children:[(0,B.jsx)(`span`,{className:V.name,children:l}),(0,B.jsx)(ee,{className:V.chevron,size:12})]})})}),c&&(0,B.jsx)(O,{content:(0,B.jsx)(oe,{}),minWidth:350,open:e,placement:`topRight`,trigger:`click`,onOpenChange:t,children:(0,B.jsx)(p,{icon:g,size:{blockSize:28,size:16},onClick:()=>t(!0)})})]})}),H.displayName=`CopilotModelSelect`})),W,G,K,q=t((()=>{f(),h(),W=e(a()),G=e(i()),K=(0,W.memo)(({dropdownMenu:e})=>!e||typeof e!=`function`&&e.length===0?null:(0,G.jsx)(c,{items:e,children:(0,G.jsx)(p,{icon:te,size:`small`})}))})),J,Y,X,se=t((()=>{f(),_(),h(),J=e(a()),n(),C(),Y=e(i()),X=({onClose:e,onDelete:t,topicId:n})=>{let{t:i}=r([`common`,`topic`]),a=ne(e=>e.removeTopic);return(0,J.useCallback)(()=>[{danger:!0,icon:(0,Y.jsx)(d,{icon:m}),key:`delete`,label:i(`delete`),onClick:()=>{v({cancelText:i(`cancel`),content:i(`actions.confirmRemoveTopic`,{ns:`topic`}),okButtonProps:{danger:!0},okText:i(`delete`),onOk:async()=>{await a(n),t?.(n),e()},title:i(`delete`)})}}].filter(Boolean),[i,a,n,t,e])}})),Z,Q,$,ce=t((()=>{Z=e(a()),n(),M(),q(),se(),Q=e(i()),$=(0,Z.memo)(({active:e,onClose:t,onDelete:n,onTopicChange:i,topicId:a,topicTitle:o})=>{let{t:s}=r(`topic`),c=X({onClose:t,onDelete:n,topicId:a,topicTitle:o});return(0,Q.jsx)(N,{actions:(0,Q.jsx)(K,{dropdownMenu:c}),active:e,contextMenuItems:c,style:{flexShrink:0},title:o||s(`untitled`,{defaultValue:`Untitled`}),onClick:()=>{i(a),t()}})})}));export{F as a,R as c,U as i,ce as n,I as o,H as r,L as s,$ as t};