import{a as e,n as t,r as n}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as r,pt as i}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{kc as a,ks as o,nc as s,vl as c,vn as l,xn as u,yl as d}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as f,Ba as p,Ia as m,Ma as h,cn as g,dn as _,za as v}from"./imperative-CZQgOWZc.js";import{Bn as y,N as ee,Os as b,Sr as x,cs as S,jo as te,mr as ne,n as C,os as w,us as T}from"./es-na8XYpNF.js";import{j as E,n as D}from"./es-B2d2bv-I.js";import{Bt as O,dt as k}from"../vendor/vendor-icons-BrLWQuP2.js";import{i as A,s as re}from"./index-CG_0atUX.js";import{n as j,t as M}from"./GroupAvatar-Me4qQlJG.js";import{n as ie,t as N}from"./useEnabledChatModels-B-xwCp3_.js";import{n as P,t as ae}from"./ModelSelect-BweIfaG3.js";var F,I=t((()=>{r(),F=()=>{let{t:e}=i(`welcome`);return[`brainstorm`,`analysis`,`writing`,`planning`,`product`,`game`].map(t=>({description:e(`guide.groupTemplates.${t}.description`),id:t,members:e(`guide.groupTemplates.${t}.members`,{returnObjects:!0}),title:e(`guide.groupTemplates.${t}.title`)}))}})),L,R,z,B,V,H,U=t((()=>{C(),D(),h(),s(),k(),L=e(d()),r(),o(),j(),P(),N(),A(),l(),I(),R=e(c()),z=(0,L.memo)(({template:e,isSelected:t,onToggle:n,styles:r,cx:a})=>{let{t:o}=i(`chat`);return(0,R.jsx)(`div`,{className:a(r.listItem),onClick:()=>n(e.id),children:(0,R.jsxs)(f,{horizontal:!0,align:`center`,gap:12,width:`100%`,children:[(0,R.jsx)(w,{checked:t,onChange:()=>n(e.id),onClick:g}),(0,R.jsx)(M,{size:40,avatars:e.members.filter(e=>e!=null).map(e=>({avatar:e.avatar||`/avatars/agent-default.png`,background:e.backgroundColor||void 0}))}),(0,R.jsxs)(f,{flex:1,gap:2,children:[(0,R.jsx)(b,{className:r.title,children:e.title}),(0,R.jsx)(b,{ellipsis:!0,className:r.description,children:e.description}),(0,R.jsxs)(f,{horizontal:!0,align:`center`,gap:4,children:[(0,R.jsx)(O,{size:11,style:{color:`#999`}}),(0,R.jsx)(b,{style:{fontSize:11},type:`secondary`,children:o(`groupWizard.memberCount`,{count:e.members.filter(e=>e!=null).length})})]})]})]})})}),B=(0,L.memo)(({agent:e,isSelected:t,onToggle:n,styles:r,cx:a})=>{let{t:o}=i([`chat`,`common`]),s=e.config?.id,c=e.meta?.title||o(`defaultSession`,{ns:`common`}),l=e.meta?.description||``,u=e.meta?.avatar||`/avatars/agent-default.png`,d=e.meta?.backgroundColor;return s?(0,R.jsx)(`div`,{className:a(r.listItem),onClick:()=>n(s),children:(0,R.jsxs)(f,{horizontal:!0,align:`center`,gap:12,width:`100%`,children:[(0,R.jsx)(w,{checked:t,onChange:()=>n(s),onClick:g}),(0,R.jsx)(T,{avatar:u,background:d,size:40}),(0,R.jsxs)(f,{flex:1,gap:2,style:{minWidth:0},children:[(0,R.jsx)(b,{className:r.title,children:c}),l&&(0,R.jsx)(b,{ellipsis:!0,className:r.description,children:l})]})]})}):null}),V=m(({css:e,cssVar:t})=>({container:e`
    display: flex;
    flex-direction: row;

    height: 500px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};
  `,description:e`
    font-size: 12px;
    line-height: 1.2;
    color: ${t.colorTextSecondary};
  `,hostCard:e`
    margin-block-start: ${t.paddingSM};
    margin-inline: ${t.paddingSM};
    padding: ${t.padding};
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillTertiary};
  `,leftColumn:e`
    user-select: none;

    overflow-y: auto;
    flex: 1;

    padding: 0;
    border-inline-end: 1px solid ${t.colorBorderSecondary};
  `,listHeader:e`
    padding: 0;
    color: ${t.colorTextDescription};
  `,listItem:e`
    cursor: pointer;

    position: relative;

    margin-block: 2px;
    padding: ${t.paddingSM} !important;
    border-radius: ${t.borderRadius};

    transition: all 0.2s ease;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,memberDescription:e`
    display: block;
    padding-inline-end: 48px;
  `,modelSelectDisabled:e`
    pointer-events: none;
  `,rightColumn:e`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;

    padding: 0;
  `,title:e`
    font-size: 14px;
    font-weight: 500;
  `})),H=(0,L.memo)(({onCancel:e,onCreateFromTemplate:t,onCreateCustom:n,open:r,isCreatingFromTemplate:o})=>{let{t:s}=i([`chat`,`common`]),c=F(),l=ie(),d=re(e=>(e.sessions||[]).filter(e=>e.type===u.Agent)),m=(0,L.useMemo)(()=>d.filter(e=>!e.config?.virtual),[d]),h=(0,L.useMemo)(()=>p(V.description,V.memberDescription),[p,V.description,V.memberDescription]),g=(0,L.useMemo)(()=>{if(l.length>0&&l[0].children.length>0){let e=l[0];return{model:e.children[0].id,provider:e.id}}return{model:void 0,provider:void 0}},[l]),[C,w]=(0,L.useState)(``),[D,k]=(0,L.useState)(``),[A,j]=(0,L.useState)(``),[M,N]=(0,L.useState)([]),[P,I]=(0,L.useState)({}),[H,U]=(0,L.useState)(!1),[W,G]=(0,L.useState)(g.model&&g.provider?g:{}),[oe,K]=(0,L.useState)(!1),[se,q]=(0,L.useState)(`templates`),J=(0,L.useRef)(null),ce=o??!1,le=(0,L.useCallback)(e=>{j(t=>{let n=t===e?``:e;return n!==t&&(I({}),U(!1)),n&&N([]),n})},[]),ue=(0,L.useCallback)(e=>{j(``),I({}),N(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),Y=(0,L.useCallback)(e=>{N(t=>t.filter(t=>t!==e))},[]),X=()=>{j(``),N([]),w(``),k(``),I({}),U(!1),G(g.model&&g.provider?g:{}),J.current&&clearTimeout(J.current)},de=(0,L.useCallback)(e=>{G(e)},[]),fe=(0,L.useCallback)((e,t,n)=>{I(r=>{let i=r[e]||[];if(n){let n=i.filter(e=>e!==t);return n.length===0?a(r,[e]):{...r,[e]:n}}return i.includes(t)?r:{...r,[e]:[...i,t]}})},[]),pe=(0,L.useCallback)(e=>{U(!e)},[]),me=(0,L.useCallback)(e=>{let t=e.target.value;w(t),J.current&&clearTimeout(J.current),J.current=setTimeout(()=>{k(t)},300)},[]),Z=m.length;(0,L.useEffect)(()=>()=>{J.current&&clearTimeout(J.current)},[]),(0,L.useEffect)(()=>{r&&q(Z>2?`agents`:`templates`)},[r,Z]),(0,L.useEffect)(()=>{N(e=>e.filter(e=>m.some(t=>t.config?.id===e)))},[m]);let he=(0,L.useCallback)(e=>{if(!e)return;let t=Array.isArray(e)?e[0]:e;(t===`templates`||t===`agents`)&&q(t)},[]),Q=(0,L.useMemo)(()=>{let e=D.trim().toLowerCase();return e?c.filter(t=>t.title.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)?!0:t.members.some(t=>t!=null&&t.title.toLowerCase().includes(e))):c},[c,D]),ge=(0,L.useMemo)(()=>{let e=D.trim().toLowerCase();return e?m.filter(t=>{let n=t.meta?.title||``,r=t.meta?.description||``;return n.toLowerCase().includes(e)||r.toLowerCase().includes(e)}):m},[m,D]),$=(0,L.useMemo)(()=>{if(!A)return[];let e=c.find(e=>e.id===A);if(!e)return[];let t=new Set(P[A]||[]);return e.members.filter(e=>e!=null).map(e=>({avatar:e.avatar||`/avatars/agent-default.png`,backgroundColor:e.backgroundColor,description:e.systemRole,isRemoved:t.has(e.title),key:`${A}-${e.title}`,systemRole:e.systemRole,title:e.title}))},[A,P,c]),_e=(0,L.useMemo)(()=>$.filter(e=>!e.isRemoved).length,[$]),ve=(0,L.useMemo)(()=>M.map(e=>{let t=d.find(t=>t.config?.id===e);if(!t)return null;let n=t.meta?.title||s(`defaultSession`,{ns:`common`}),r=t.meta?.avatar||`/avatars/agent-default.png`,i=t.meta?.backgroundColor,a=t.meta?.description||``;return{actions:(0,R.jsx)(E,{checked:!0,size:`small`,onChange:t=>{t||Y(e)}}),avatar:(0,R.jsx)(T,{avatar:r,background:i,size:40}),description:a?(0,R.jsx)(_,{title:a,children:(0,R.jsx)(b,{className:h,ellipsis:{rows:1},children:a})}):null,key:e,showAction:!0,title:n}}).filter(e=>!!e),[M,d,s,Y,h]),ye=(0,L.useMemo)(()=>{let e=W.model??g.model,t=W.provider??g.provider;if(!(!e||!t))return{model:e,provider:t}},[W,g]),be=(0,L.useCallback)(async()=>{if(A)try{let e=c.find(e=>e.id===A),n=new Set(P[A]||[]);await t(A,(e?.members||[]).filter(e=>e!=null&&!n.has(e.title)).map(e=>e.title)),X()}catch(e){console.error(`Failed to create group from template:`,e)}},[A,t,c,P]),xe=(0,L.useCallback)(async()=>{if(M.length!==0)try{K(!0),await n(M),X(),e()}catch(e){console.error(`Failed to create group with selected members:`,e)}finally{K(!1)}},[M,n,e]),Se=(0,L.useCallback)(async()=>{if(A){await be();return}await xe()},[A,be,xe]),Ce=()=>{X(),e()},we=A?_e===0&&H:M.length===0,Te=A?ce:oe;return(0,R.jsx)(ne,{open:r,title:s(`groupWizard.title`),width:900,footer:(0,R.jsxs)(f,{horizontal:!0,gap:8,justify:`end`,children:[(0,R.jsx)(S,{onClick:Ce,children:s(`cancel`,{ns:`common`})}),(0,R.jsx)(S,{disabled:we,loading:Te,type:`primary`,onClick:Se,children:s(`groupWizard.createGroup`)})]}),onCancel:Ce,children:(0,R.jsxs)(f,{horizontal:!0,className:V.container,children:[(0,R.jsxs)(f,{className:V.leftColumn,flex:1,gap:12,children:[(0,R.jsx)(ee,{allowClear:!0,placeholder:s(`memberSelection.searchAgents`),style:{margin:`${v.paddingSM} ${v.paddingSM} 0 ${v.paddingSM}`},value:C,variant:`filled`,onChange:me}),(0,R.jsx)(f,{flex:1,style:{overflowY:`auto`,padding:`0 ${v.paddingSM}`},children:(0,R.jsx)(te,{accordion:!0,collapsible:!0,activeKey:se,expandIconPlacement:`end`,gap:12,size:`small`,variant:`borderless`,items:[{children:Q.length===0?(0,R.jsx)(x,{descriptionProps:{fontSize:14},icon:O,style:{maxWidth:400},description:s(D?`groupWizard.noMatchingTemplates`:`groupWizard.noTemplates`)}):(0,R.jsx)(f,{gap:4,children:Q.map(e=>(0,R.jsx)(z,{cx:p,isSelected:A===e.id,styles:V,template:e,onToggle:le},e.id))}),key:`templates`,label:s(`groupWizard.useTemplate`)},{children:ge.length===0?(0,R.jsx)(x,{descriptionProps:{fontSize:14},icon:O,style:{maxWidth:400},description:s(D?`noMatchingAgents`:`noAvailableAgents`,{ns:`chat`})}):(0,R.jsx)(f,{gap:4,children:ge.map(e=>(0,R.jsx)(B,{agent:e,cx:p,isSelected:M.includes(e.config?.id||``),styles:V,onToggle:ue},e.id))}),key:`agents`,label:s(`groupWizard.existingMembers`)}],styles:{header:{color:v.colorTextDescription,fontSize:v.fontSize,padding:0}},onChange:he})})]}),(0,R.jsx)(f,{className:V.rightColumn,flex:1,children:(0,R.jsxs)(f,{flex:1,gap:16,style:{overflowY:`auto`},children:[(0,R.jsxs)(f,{horizontal:!0,align:`center`,className:V.hostCard,gap:12,children:[(0,R.jsxs)(f,{flex:1,gap:2,children:[(0,R.jsx)(b,{style:{fontSize:14,fontWeight:500},type:H?`secondary`:void 0,children:s(`groupWizard.host.title`)}),(0,R.jsx)(b,{style:{color:`#999`,fontSize:12},type:H?`secondary`:void 0,children:s(`groupWizard.host.description`)})]}),(0,R.jsxs)(f,{horizontal:!0,align:`center`,gap:12,children:[(0,R.jsx)(`div`,{className:p(H&&V.modelSelectDisabled),style:{opacity:H?.6:1},children:(0,R.jsx)(ae,{requiredAbilities:[`functionCall`],value:ye,onChange:de})}),(0,R.jsx)(_,{title:s(`groupWizard.host.tooltip`),children:(0,R.jsx)(E,{checked:!H,size:`small`,onChange:e=>pe(e)})})]})]}),(0,R.jsx)(f,{style:{padding:`0 ${v.paddingSM}`},children:A?$.length>0?(0,R.jsx)(y,{items:$.map(e=>({actions:(0,R.jsx)(E,{checked:!e.isRemoved,size:`small`,onChange:t=>fe(A,e.title,t)}),avatar:(0,R.jsx)(T,{avatar:e.avatar,background:e.backgroundColor,size:40}),description:e.systemRole?(0,R.jsx)(_,{title:e.systemRole,children:(0,R.jsx)(b,{className:h,ellipsis:{rows:1},type:e.isRemoved?`secondary`:void 0,children:e.systemRole})}):null,key:e.key,showAction:!0,title:(0,R.jsx)(b,{type:e.isRemoved?`secondary`:void 0,children:e.title})}))}):(0,R.jsx)(x,{description:s(`groupWizard.noTemplateMembers`),descriptionProps:{fontSize:14},icon:O,style:{maxWidth:400}}):ve.length>0?(0,R.jsx)(y,{items:ve}):(0,R.jsx)(x,{description:s(`memberSelection.noSelectedAgents`),descriptionProps:{fontSize:14},icon:O,style:{maxWidth:400}})})]})})]})})})})),W=n({ChatGroupWizard:()=>H}),G=t((()=>{U()}));export{I as a,U as i,G as n,F as o,H as r,W as t};