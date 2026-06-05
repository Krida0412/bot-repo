import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{qt as n}from"../i18n/i18n-zh-CN-CbR0_Rok.js";import{dt as r,pt as i,xt as a,yt as o}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{Js as s,Ws as c,vl as l,yl as u}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as d,Ba as f,Ia as p,J as m,L as h,Ma as g,Oa as _,Ua as v,da as y,dn as b,za as x}from"./imperative-Xfjd337A.js";import{$r as S,C as ee,Es as C,Is as w,Os as T,S as te,Sr as ne,Wr as re,Xn as ie,Ys as ae,b as oe,f as se,gr as ce,h as le,j as ue,k as E,m as de,n as D,p as fe,v as pe,w as me,ws as O,x as he,y as ge,ya as _e}from"./es-2ZVhpwv7.js";import{an as ve,j as ye,n as be,zt as xe}from"./es-DMB7XTXN.js";import{m as Se,n as Ce}from"../vendor/vendor-react-D1dBs3e7.js";import{Bc as we,Ep as Te,Kd as Ee,Og as De,Rc as Oe,Wt as ke,Xa as Ae,Xo as je,ba as Me,dt as k,eo as Ne,fg as Pe,io as Fe,mp as Ie,na as Le,nf as Re,vt as ze,wi as Be}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{c as Ve,d as He,n as Ue}from"./base-ui-CG2gzEWh.js";import{$ as We,Q as Ge,U as A,V as j,X as Ke,Z as qe}from"./store-DTt7Ili4.js";import{d as M,r as N,t as Je}from"./global-D_2Rs4fY.js";import{t as Ye}from"./selectors-BaC4ALp4.js";import{N as Xe,y as Ze}from"./onboardingMetrics-CNAzfJc5.js";import{D as Qe,E as $e,O as et,k as tt,x as P,y as nt}from"./index-AVlnZl7f.js";import{n as rt,t as it}from"./WideScreenContainer-C5Jm4VlP.js";import{i as at,n as ot,r as st,t as ct}from"./TaskStatusIcon-D7XEgY9f.js";import{n as lt,t as ut}from"./NavHeader-CNur_1ZZ.js";import{n as dt,t as ft}from"./EditorCanvas-CSjSeu_j.js";import{d as pt,p as mt,u as ht}from"./brief-98dheZ9r.js";import{n as gt,t as _t}from"./ToggleRightPanelButton-DKGbSK6x.js";import{c as vt,l as yt,n as bt,o as xt,s as St,t as Ct}from"./useDailyBriefRecommendationsUI-BRuzxufS.js";import{C as wt,I as Tt,L as Et,R as Dt,S as Ot,_ as kt,a as At,b as jt,c as Mt,d as Nt,f as Pt,g as Ft,h as It,i as Lt,l as Rt,m as zt,o as Bt,p as Vt,r as Ht,s as Ut,t as Wt,u as Gt,v as Kt,x as qt,y as Jt,z as Yt}from"./useTaskItemContextMenu-B0elhrk8.js";var F,I,Xt,Zt=t((()=>{Ze(),D(),Ue(),be(),g(),k(),F=e(u()),r(),ft(),pt(),Je(),j(),Et(),qe(),Nt(),Ge(),I=e(l()),Xt=(0,F.memo)(({agentId:e,onCreated:t,showInlineToggle:n=!0})=>{let{t:r}=i(`chat`),{close:a}=He(),o=A(e=>e.createTask),s=A(e=>e.isCreatingTask),c=N(e=>e.updateSystemStatus),[l,u]=(0,F.useState)(``),[f,p]=(0,F.useState)(0),[m,h]=(0,F.useState)(e),g=Xe(),_=(0,F.useRef)(``),v=We(m),b=(0,F.useCallback)(()=>{c({taskCreateInlineCollapsed:!1},`expandTaskCreateInline`),a()},[a,c]),S=(0,F.useCallback)(()=>{g&&(_.current=String(g.getDocument(`markdown`)??``))},[g]),ee=(0,F.useCallback)(()=>{mt(g)},[g]),C=(0,F.useCallback)(async()=>{let e=_.current.trim(),n=ht(g).length>0;if(!e&&!l.trim()&&!n)return;let r=g?.getDocument?.(`json`),i=await o({assigneeAgentId:m,editorData:r,instruction:e||l.trim(),name:l.trim()||void 0,priority:f||void 0});i&&(a(),t?.({agentId:i.assigneeAgentId??void 0,identifier:i.identifier}))},[m,a,o,g,t,f,l]),te=(0,F.useRef)(C);return(0,F.useEffect)(()=>{te.current=C},[C]),(0,I.jsxs)(d,{onKeyDown:(0,F.useCallback)(e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),e.stopPropagation(),te.current?.())},[]),children:[(0,I.jsxs)(d,{horizontal:!0,style:{padding:`16px 24px 0`},children:[(0,I.jsxs)(d,{flex:1,style:{minHeight:180},children:[(0,I.jsx)(`input`,{autoFocus:!0,placeholder:r(`createTask.titlePlaceholder`),value:l,style:{background:`transparent`,border:`none`,color:`inherit`,fontFamily:`inherit`,fontSize:20,fontWeight:600,lineHeight:1.4,outline:`none`,padding:`4px 0`,width:`100%`},onChange:e=>u(e.target.value)}),(0,I.jsx)(dt,{editor:g,floatingToolbar:!1,placeholder:r(`createTask.instructionPlaceholder`),style:{fontSize:14,paddingBottom:16},onContentChange:S})]}),(0,I.jsxs)(d,{horizontal:!0,gap:4,style:{flexShrink:0},children:[n&&(0,I.jsx)(O,{icon:je,title:r(`createTask.expandToInline`),onClick:b}),(0,I.jsx)(O,{icon:ze,onClick:a})]})]}),(0,I.jsxs)(d,{horizontal:!0,align:`center`,justify:`space-between`,style:{borderTop:`1px solid ${x.colorBorderSecondary}`,padding:`8px 16px`},children:[(0,I.jsxs)(d,{horizontal:!0,gap:2,wrap:`wrap`,children:[(0,I.jsx)(Gt,{priority:f,onChange:p,children:(0,I.jsxs)(w,{clickable:!0,horizontal:!0,align:`center`,gap:6,paddingBlock:4,paddingInline:8,variant:`borderless`,children:[(0,I.jsx)(Gt,{disableDropdown:!0,priority:f,size:14}),(0,I.jsx)(T,{fontSize:12,children:r(f===0?`taskDetail.priority.none`:`taskDetail.priority.${[``,`urgent`,`high`,`normal`,`low`][f]}`)})]})}),(0,I.jsx)(Tt,{currentAgentId:m,onChange:h,children:(0,I.jsx)(w,{clickable:!0,horizontal:!0,align:`center`,gap:6,paddingBlock:4,paddingInline:8,variant:`borderless`,children:m?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ke,{agentId:m,size:18}),(0,I.jsx)(T,{fontSize:12,children:v?.title})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(y,{color:x.colorTextDescription,icon:Te,size:14}),(0,I.jsx)(T,{color:x.colorTextDescription,fontSize:12,children:r(`createTask.assignee`)})]})})}),(0,I.jsx)(O,{icon:Ae,title:r(`upload.action.tooltip`),onClick:ee})]}),(0,I.jsx)(ve,{disabled:s,loading:s,shape:`round`,size:`small`,type:`primary`,onClick:C,children:r(`createTask.submit`)})]})]})})})),Qt,$t,en=t((()=>{Ue(),Zt(),Qt=e(l()),$t=e=>Ve({content:(0,Qt.jsx)(Xt,{...e}),footer:null,maskClosable:!0,styles:{content:{overflow:`hidden`,padding:0}},title:null,width:`min(80%, 680px)`})})),tn,L,nn,rn,an,on,sn=t((()=>{D(),g(),k(),tn=e(u()),r(),yt(),St(),Ct(),rt(),At(),L=e(l()),nn=960,rn=10,an=p(({css:e})=>({grid:e`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    ${v.md} {
      grid-template-columns: 1fr;
    }
  `})),on=(0,tn.memo)(()=>{let{t:e}=i(`chat`),{t}=i(`taskTemplate`),n=bt({count:rn});return(0,L.jsxs)(it,{gap:32,minWidth:nn,paddingBlock:48,wrapperStyle:{flex:1,overflowY:`auto`},children:[(0,L.jsxs)(d,{align:`center`,gap:8,children:[(0,L.jsx)(T,{as:`h1`,style:{fontSize:24,fontWeight:600,margin:0},children:e(`taskList.emptyHero.greeting`)}),(0,L.jsx)(T,{fontSize:14,type:`secondary`,children:e(`taskList.emptyHero.subtitle`)})]}),(0,L.jsx)(Lt,{variant:`hero`}),n.mode!==`hidden`&&(0,L.jsxs)(d,{gap:12,children:[(0,L.jsxs)(d,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,L.jsx)(T,{fontSize:13,type:`secondary`,weight:500,children:e(`taskList.emptyHero.templatesTitle`)}),n.mode===`cards`&&(0,L.jsxs)(d,{horizontal:!0,align:`center`,gap:4,style:{color:x.colorTextDescription,cursor:`pointer`},onClick:n.onRefresh,children:[(0,L.jsx)(y,{icon:Le,size:12}),(0,L.jsx)(T,{fontSize:12,children:t(`action.refresh.button`)})]})]}),(0,L.jsx)(`div`,{className:an.grid,children:n.mode===`skeleton`?Array.from({length:n.skeletonCount}).map((e,t)=>(0,L.jsx)(xt,{descriptionRows:2},`task-template-skeleton-${t}`)):n.templates.map(e=>(0,L.jsx)(vt,{template:e,onCreated:n.onCreated,onDismiss:n.onDismiss},e.id))})]})]})}),on.displayName=`AgentTasksEmptyState`})),cn,ln,un=t((()=>{cn=e(n()),$e(),ln=(e,t={})=>{if(!e)return``;let n=(0,cn.default)(e);if(!n.isValid())return``;let{formatOtherYear:r=`MMM D, YYYY`,formatThisYear:i=`MMM D`,locale:a,now:o=new Date}=t,s=(0,cn.default)(o);return(a?n.locale(Qe(a)):n).format(n.isSame(s,`year`)?i:r)}})),dn,fn,pn,mn,hn=t((()=>{D(),re(),g(),dn=e(u()),r(),fn=e(l()),pn=(e,t)=>{if(!e)return;if(e.type===`comment`)return e.content||void 0;if(e.type===`topic`){let n=e.title||t(`taskDetail.latestActivity.untitledTopic`);return e.seq?t(`taskDetail.latestActivity.topicWithSeq`,{seq:e.seq,title:n}):t(`taskDetail.latestActivity.topic`,{title:n})}let n=e.title||e.summary;return n?e.resolvedAction?t(`taskDetail.latestActivity.briefWithAction`,{action:e.resolvedAction,title:n}):e.briefType?t(`taskDetail.latestActivity.briefWithType`,{type:e.briefType,title:n}):t(`taskDetail.latestActivity.brief`,{title:n}):e.briefType?t(`taskDetail.latestActivity.briefWithTypeOnly`,{type:e.briefType}):void 0},mn=(0,dn.memo)(({activities:e})=>{let{t}=i(`chat`),n=(0,dn.useMemo)(()=>{if(!e||e.length===0)return;let n=[...e].sort((e,t)=>{let n=e.time?new Date(e.time).getTime():0;return(t.time?new Date(t.time).getTime():0)-n})[0];return pn(n,t)},[e,t]);return n?(0,fn.jsxs)(d,{horizontal:!0,align:`flex-start`,gap:4,children:[(0,fn.jsx)(y,{color:x.colorTextQuaternary,icon:S,style:{marginTop:2,marginLeft:6}}),(0,fn.jsx)(T,{ellipsis:!0,fontSize:12,style:{color:x.colorTextDescription},children:n})]}):null})})),gn,R,_n,vn,yn,bn,xn=t((()=>{D(),gn=e(u()),r(),Ce(),j(),st(),Et(),qe(),un(),hn(),Nt(),Rt(),wt(),Ut(),Wt(),R=e(l()),_n={minWidth:0},vn=new Set([`backlog`,`canceled`,`completed`,`failed`,`paused`,`running`,`scheduled`]),yn=e=>vn.has(e)?e:`backlog`,bn=(0,gn.memo)(({task:e,variant:t=`default`})=>{let{t:n,i18n:r}=i(`common`),{t:a}=i(`chat`);A(e=>e.useFetchTaskDetail)(e.identifier);let o=A(t=>t.taskDetailMap[e.identifier]),{items:s,onContextMenu:c}=Ht(e),l=Se(),u=ln(e.updatedAt||e.createdAt,{formatOtherYear:n(`time.formatOtherYear`),formatThisYear:n(`time.formatThisYear`),locale:r.language}),f=yn(e.status),p=!!e.name?.trim(),m=(0,gn.useCallback)(()=>{l(at(e.identifier,e.assigneeAgentId??void 0))},[l,e.assigneeAgentId,e.identifier]),g=(0,gn.useCallback)((e,t)=>{l(at(e,t))},[l]),_=f===`scheduled`?(0,R.jsx)(w,{horizontal:!0,align:`center`,flex:`none`,height:20,paddingInline:8,style:{borderRadius:24},variant:`outlined`,children:(0,R.jsx)(T,{fontSize:12,type:`secondary`,children:a(`taskDetail.status.scheduled`,{defaultValue:`Scheduled`})})}):null,v=(0,R.jsxs)(d,{horizontal:!0,align:`center`,gap:8,style:{minWidth:0},children:[(0,R.jsx)(Gt,{priority:e.priority,taskIdentifier:e.identifier}),(0,R.jsx)(Mt,{status:f,taskIdentifier:e.identifier}),p?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(T,{style:{flex:`none`},type:`secondary`,children:e.identifier}),(0,R.jsx)(T,{ellipsis:!0,style:{minWidth:0},weight:500,children:e.name})]}):(0,R.jsx)(T,{ellipsis:!0,style:{minWidth:0},weight:500,children:e.identifier}),_,(0,R.jsx)(Ot,{currentIdentifier:e.identifier,subtasks:o?.subtasks,onSubtaskClick:g})]}),y=(0,R.jsx)(Tt,{currentAgentId:e.assigneeAgentId,disabled:f===`running`,taskIdentifier:e.identifier,children:(0,R.jsx)(Ke,{agentId:e.assigneeAgentId})}),b=e.automationMode?(0,R.jsx)(Bt,{automationMode:e.automationMode,heartbeatInterval:o?.heartbeat?.interval,schedulePattern:e.schedulePattern,scheduleTimezone:e.scheduleTimezone}):null,x=u?(0,R.jsx)(T,{align:`right`,fontSize:12,style:{whiteSpace:`nowrap`,width:t===`compact`?void 0:48},type:`secondary`,children:u}):null;return t===`compact`?(0,R.jsx)(h,{items:s,onContextMenu:c,children:(0,R.jsxs)(w,{clickable:!0,gap:8,padding:12,variant:`borderless`,onClick:m,children:[(0,R.jsxs)(d,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,R.jsx)(T,{fontSize:12,style:{flex:`none`},type:`secondary`,children:e.identifier}),y]}),(0,R.jsxs)(d,{horizontal:!0,align:`center`,gap:8,style:{minWidth:0},children:[(0,R.jsx)(Mt,{status:f,taskIdentifier:e.identifier}),(0,R.jsx)(T,{ellipsis:!0,style:{minWidth:0},weight:500,children:p?e.name:e.identifier}),_,(0,R.jsx)(Ot,{currentIdentifier:e.identifier,subtasks:o?.subtasks,onSubtaskClick:g})]}),(0,R.jsx)(mn,{activities:o?.activities}),(0,R.jsxs)(d,{horizontal:!0,align:`center`,gap:8,style:_n,children:[(0,R.jsx)(Gt,{priority:e.priority,taskIdentifier:e.identifier}),b,x]})]})}):(0,R.jsx)(h,{items:s,onContextMenu:c,children:(0,R.jsxs)(w,{clickable:!0,gap:4,padding:12,variant:`borderless`,onClick:m,children:[(0,R.jsxs)(d,{horizontal:!0,align:`center`,gap:4,justify:`space-between`,children:[v,(0,R.jsxs)(d,{horizontal:!0,align:`center`,flex:`none`,gap:8,children:[b,y,x]})]}),(0,R.jsx)(mn,{activities:o?.activities})]})})})})),Sn,z,Cn,B,wn,Tn=t((()=>{D(),g(),k(),Sn=e(u()),r(),ot(),z=e(l()),Cn={collapsed:36,expanded:220},B=p(({css:e,cssVar:t})=>({card:e`
    cursor: pointer;

    display: flex;
    gap: 8px;
    align-items: center;

    padding-block: 8px;
    padding-inline: 10px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorBgContainer};

    transition: border-color 0.2s;

    &:hover {
      border-color: ${t.colorPrimaryBorder};
    }
  `,collapsedHeader:e`
    cursor: pointer;

    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;

    padding-block: 12px;
    padding-inline: 6px;

    color: ${t.colorTextSecondary};
  `,count:e`
    margin-inline-start: auto;
    color: ${t.colorTextTertiary};
  `,header:e`
    cursor: pointer;

    display: flex;
    gap: 6px;
    align-items: center;

    padding-block: 10px 8px;
    padding-inline: 6px;

    color: ${t.colorTextSecondary};
  `,list:e`
    display: flex;
    flex-direction: column;
    gap: 6px;

    padding-block: 4px 12px;
    padding-inline: 2px;
  `,panel:e`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    max-height: 100%;
    margin-inline-start: auto;
    padding-inline: 8px;
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillQuaternary};
  `,verticalLabel:e`
    writing-mode: vertical-rl;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.02em;
  `})),wn=(0,Sn.memo)(({collapsed:e,columns:t,onRestore:n,onToggleCollapsed:r})=>{let{t:a}=i(`chat`);if(t.length===0)return null;let o=a(`taskList.kanban.hiddenColumns`);return e?(0,z.jsx)(`div`,{className:B.panel,style:{width:Cn.collapsed},onClick:()=>r(!1),children:(0,z.jsx)(b,{title:o,children:(0,z.jsxs)(`div`,{className:B.collapsedHeader,children:[(0,z.jsx)(y,{icon:Ne,size:16}),(0,z.jsx)(T,{className:B.verticalLabel,type:`secondary`,children:o})]})})}):(0,z.jsxs)(`div`,{className:B.panel,style:{width:Cn.expanded},children:[(0,z.jsxs)(`div`,{className:B.header,onClick:()=>r(!0),children:[(0,z.jsx)(T,{fontSize:13,weight:500,children:o}),(0,z.jsx)(T,{className:B.count,fontSize:12,children:t.length}),(0,z.jsx)(y,{icon:Fe,size:16})]}),(0,z.jsx)(`div`,{className:B.list,children:t.map(e=>(0,z.jsxs)(`div`,{className:f(B.card),title:a(`taskList.kanban.showColumn`),onClick:()=>n(e.columnKey),children:[e.statusIcon&&(0,z.jsx)(ct,{size:16,status:e.statusIcon}),(0,z.jsx)(T,{fontSize:13,children:e.label}),(0,z.jsx)(T,{className:B.count,fontSize:12,children:e.total})]},e.columnKey))})]})})})),En,V,Dn,On=t((()=>{D(),En=e(u()),V=e(l()),Dn=(0,En.memo)(({variant:e=`default`})=>e===`compact`?(0,V.jsxs)(w,{gap:8,padding:12,variant:`borderless`,children:[(0,V.jsxs)(d,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,V.jsx)(E.Button,{active:!0,style:{height:14,minWidth:60,width:60}}),(0,V.jsx)(E.Avatar,{active:!0,shape:`circle`,size:`small`})]}),(0,V.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,V.jsx)(E.Avatar,{active:!0,shape:`square`,size:16,style:{borderRadius:4,flex:`none`}}),(0,V.jsx)(E.Button,{active:!0,block:!0,style:{height:16}})]}),(0,V.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,V.jsx)(E.Avatar,{active:!0,shape:`square`,size:14,style:{borderRadius:4,flex:`none`}}),(0,V.jsx)(E.Button,{active:!0,style:{height:12,minWidth:48,width:48}})]})]}):(0,V.jsxs)(w,{gap:8,padding:12,variant:`borderless`,children:[(0,V.jsxs)(d,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,V.jsxs)(d,{horizontal:!0,align:`center`,gap:8,style:{flex:1,minWidth:0},children:[(0,V.jsx)(E.Avatar,{active:!0,shape:`square`,size:16,style:{borderRadius:4,flex:`none`}}),(0,V.jsx)(E.Avatar,{active:!0,shape:`square`,size:16,style:{borderRadius:4,flex:`none`}}),(0,V.jsx)(E.Button,{active:!0,style:{height:14,minWidth:64,width:64}}),(0,V.jsx)(E.Button,{active:!0,style:{height:16,minWidth:200,width:200}})]}),(0,V.jsxs)(d,{horizontal:!0,align:`center`,flex:`none`,gap:8,children:[(0,V.jsx)(E.Avatar,{active:!0,shape:`circle`,size:`small`}),(0,V.jsx)(E.Button,{active:!0,style:{height:12,minWidth:40,width:40}})]})]}),(0,V.jsx)(E.Button,{active:!0,style:{height:14,minWidth:0,width:`60%`}})]})),Dn.displayName=`TaskItemSkeleton`})),kn,H,An,jn,U,Mn,Nn,Pn,Fn=t((()=>{pe(),D(),g(),k(),kn=e(u()),r(),xn(),ot(),On(),H=e(l()),An=p(({css:e,cssVar:t})=>({card:e`
    border-radius: ${t.borderRadiusLG};
    background: ${t.colorBgElevated};
    box-shadow:
      0 1px 2px rgb(0 0 0 / 4%),
      0 2px 6px rgb(0 0 0 / 3%);

    &,
    & * {
      cursor: default;
    }

    &:active,
    &:active * {
      cursor: grabbing;
    }

    &:hover > * {
      background: ${t.colorFillQuaternary};
    }
  `,dragging:e`
    visibility: hidden;
  `})),jn=(0,kn.memo)(({task:e})=>{let{attributes:t,isDragging:n,listeners:r,setNodeRef:i}=he({data:{task:e},id:e.identifier});return(0,H.jsx)(`div`,{className:f(An.card,n&&An.dragging),ref:i,...r,...t,children:(0,H.jsx)(bn,{task:e,variant:`compact`})})}),U=p(({css:e,cssVar:t})=>({action:e`
    opacity: 0;
    transition: opacity 0.2s;
  `,addPill:e`
    cursor: pointer;

    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;

    height: 36px;
    border: 1px solid ${t.colorBorder};
    border-radius: 999px;

    color: ${t.colorTextTertiary};

    transition:
      border-color 0.2s,
      color 0.2s,
      background 0.2s;

    &:hover {
      border-color: ${t.colorPrimaryBorder};
      color: ${t.colorPrimary};
      background: ${t.colorBgContainer};
    }
  `,body:e`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 6px;

    padding-block: 4px 12px;
    padding-inline: 8px;
  `,column:e`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    width: ${300}px;
    max-height: 100%;
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillQuaternary};

    transition:
      background 0.2s,
      box-shadow 0.2s;

    &:hover .kanban-col-action {
      opacity: 1;
    }
  `,dropActive:e`
    background: ${t.colorFillTertiary};
    box-shadow: inset 0 0 0 1px ${t.colorPrimaryBorderHover};
  `,emptyText:e`
    padding-block: 24px;
    padding-inline: 16px;

    font-size: 13px;
    color: ${t.colorTextQuaternary};
    text-align: center;
  `,header:e`
    display: flex;
    gap: 6px;
    align-items: center;

    padding-block: 10px 8px;
    padding-inline: 10px 6px;
  `,headerActions:e`
    display: flex;
    gap: 2px;
    align-items: center;
    margin-inline-start: auto;
  `,notDroppable:e`
    pointer-events: none;
    opacity: 0.4;
  `})),Mn={backlog:`taskList.kanban.backlog`,canceled:`taskList.kanban.canceled`,done:`taskList.kanban.done`,needsInput:`taskList.kanban.needsInput`,running:`taskList.kanban.running`},Nn={backlog:`backlog`,canceled:`canceled`,done:`completed`,needsInput:`paused`,running:`running`},Pn=(0,kn.memo)(({columnKey:e,droppable:t,loading:n,onCreate:r,onHide:a,tasks:o,total:s})=>{let{t:c}=i(`chat`),{active:l}=oe(),{isOver:u,setNodeRef:d}=te({disabled:!t,id:e}),p=Nn[e],h=Mn[e],g=h?c(h):e,_=!!l,v=l?.data.current?.task,b=v&&o.some(e=>e.identifier===v.identifier),x=u&&t&&!b,S=_&&!t,ee=(0,kn.useMemo)(()=>a?[{icon:(0,H.jsx)(y,{icon:Ee}),key:`hide`,label:c(`taskList.kanban.hideColumn`),onClick:a}]:[],[a,c]);return(0,H.jsxs)(`div`,{ref:d,className:f(U.column,x&&U.dropActive,S&&U.notDroppable),children:[(0,H.jsxs)(`div`,{className:U.header,children:[p&&(0,H.jsx)(ct,{size:18,status:p}),(0,H.jsx)(T,{weight:500,children:g}),!n&&(0,H.jsx)(T,{fontSize:12,type:`secondary`,children:s}),(0,H.jsxs)(`div`,{className:f(U.headerActions,`kanban-col-action`),children:[ee.length>0&&(0,H.jsx)(m,{items:ee,children:(0,H.jsx)(O,{icon:Re,size:`small`})}),r&&(0,H.jsx)(O,{icon:Me,size:`small`,title:c(`taskList.kanban.addTask`),onClick:r})]})]}),(0,H.jsx)(`div`,{className:U.body,children:n?Array.from({length:3}).map((t,n)=>(0,H.jsx)(`div`,{className:An.card,children:(0,H.jsx)(Dn,{variant:`compact`})},`kanban-skeleton-${e}-${n}`)):o.length>0?o.map(e=>(0,H.jsx)(jn,{task:e},e.identifier)):r?(0,H.jsx)(`div`,{className:U.addPill,title:c(`taskList.kanban.addTask`),onClick:r,children:(0,H.jsx)(y,{icon:Me,size:16})}):(0,H.jsx)(`div`,{className:U.emptyText,children:c(`taskList.kanban.emptyColumn`)})})]})})})),W,G,In,Ln,Rn,zn,Bn=t((()=>{pe(),D(),g(),k(),W=e(u()),r(),Ce(),Je(),Ye(),j(),nt(),en(),xn(),st(),Tn(),Fn(),G=e(l()),In=p(({css:e})=>({board:e`
    overflow-x: auto;
    display: flex;
    flex: 1;
    gap: 8px;

    padding-block: 0 16px;
    padding-inline: 12px;
  `})),Ln=[{droppable:!0,key:`backlog`,targetStatus:`backlog`},{droppable:!1,key:`running`,targetStatus:null},{droppable:!1,key:`needsInput`,targetStatus:null},{droppable:!0,key:`done`,targetStatus:`completed`},{droppable:!0,key:`canceled`,targetStatus:`canceled`}],Rn=(e,t,n)=>e.map(e=>{let r=e.tasks.filter(e=>e.identifier!==t.identifier),i=r.length<e.tasks.length;return e.key===n?{...e,tasks:[...r,t],total:r.length+1}:i?{...e,tasks:r,total:e.total-1}:e}),zn=(0,W.memo)(()=>{let{t:e}=i(`chat`),t=Se();A(e=>e.useFetchTaskGroupList)({allAgents:!0});let n=A(P.taskGroups),r=A(P.isTaskGroupListInit),a=A(e=>e.updateTaskStatus),o=N(M.taskKanbanHiddenColumns),s=N(M.taskKanbanHiddenPanelCollapsed),c=N(e=>e.updateSystemStatus),[l,u]=(0,W.useState)(null),f=me(ee(le,{activationConstraint:{distance:5}}),ee(de)),p=(0,W.useCallback)(e=>{let t=e.active.data.current?.task;u(t??null)},[]),m=(0,W.useCallback)(async e=>{u(null);let{active:t,over:n}=e;if(!n)return;let r=n.id,i=Ln.find(e=>e.key===r);if(!i?.droppable||!i.targetStatus)return;let o=t.data.current?.task;if(!o||o.status===i.targetStatus)return;let s=A.getState().taskGroups,c=Rn(s,o,r);A.setState({taskGroups:c},!1,`kanban/optimisticMove`);try{await a(o.identifier,i.targetStatus)}catch{A.setState({taskGroups:s},!1,`kanban/revertMove`)}},[a]),h=(0,W.useCallback)(()=>{u(null)},[]),g=(0,W.useCallback)(()=>{$t({onCreated:e=>{t(at(e.identifier,e.agentId))},showInlineToggle:!1})},[t]),v=(0,W.useCallback)(e=>{c({taskKanbanHiddenColumns:Array.from(new Set([...o,e]))},`hideKanbanColumn`)},[o,c]),y=(0,W.useCallback)(e=>{c({taskKanbanHiddenColumns:o.filter(t=>t!==e)},`restoreKanbanColumn`)},[o,c]),b=(0,W.useCallback)(e=>{c({taskKanbanHiddenPanelCollapsed:e},`toggleKanbanHiddenPanel`)},[c]),x=(0,W.useMemo)(()=>new Set(o),[o]),S=(0,W.useMemo)(()=>Ln.filter(e=>!x.has(e.key)),[x]),C=(0,W.useMemo)(()=>Ln.filter(e=>x.has(e.key)).map(t=>({columnKey:t.key,label:e(Mn[t.key]),statusIcon:Nn[t.key],total:n.find(e=>e.key===t.key)?.total??0})),[x,e,n]);return r?n.reduce((e,t)=>e+t.total,0)===0?(0,G.jsx)(_,{height:`80vh`,width:`100%`,children:(0,G.jsx)(ne,{description:e(`taskList.empty`),icon:Ie})}):(0,G.jsxs)(se,{collisionDetection:ge,sensors:f,onDragCancel:h,onDragEnd:m,onDragStart:p,children:[(0,G.jsxs)(d,{horizontal:!0,className:In.board,children:[S.map(e=>{let t=n.find(t=>t.key===e.key);return(0,G.jsx)(Pn,{columnKey:e.key,droppable:e.droppable,tasks:t?.tasks??[],total:t?.total??0,onCreate:e.key===`backlog`?g:void 0,onHide:()=>v(e.key)},e.key)}),(0,G.jsx)(wn,{collapsed:s,columns:C,onRestore:y,onToggleCollapsed:b})]}),(0,G.jsx)(fe,{dropAnimation:null,children:l?(0,G.jsx)(`div`,{style:{background:`var(--lobe-color-bg-container, #fff)`,border:`1px solid var(--lobe-color-border-secondary, #f0f0f0)`,borderRadius:8,boxShadow:`0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12)`,cursor:`grabbing`,width:292},children:(0,G.jsx)(bn,{task:l,variant:`compact`})}):null})]}):(0,G.jsx)(d,{horizontal:!0,className:In.board,children:S.map(e=>(0,G.jsx)(Pn,{loading:!0,columnKey:e.key,droppable:!1,tasks:[],total:0},e.key))})})})),Vn,K,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,q,$n,er,tr,nr,rr,ir,ar,or=t((()=>{o(),Vn=[`completed`,`canceled`],K={groupBy:`status`,hideCompleted:!0,orderBy:`updatedAt`,orderCompletedByRecency:!0,orderDirection:`asc`,subGroupBy:`none`},Hn=new Set([`assignee`,`none`,`priority`,`status`]),Un=new Set([`assignee`,`createdAt`,`priority`,`status`,`title`,`updatedAt`]),Wn=new Set([`asc`,`desc`]),Gn=e=>{let t=e??{},n=Hn.has(t.groupBy)?t.groupBy:K.groupBy,r=Hn.has(t.subGroupBy)?t.subGroupBy:K.subGroupBy;return{groupBy:n,hideCompleted:typeof t.hideCompleted==`boolean`?t.hideCompleted:K.hideCompleted,orderBy:Un.has(t.orderBy)?t.orderBy:K.orderBy,orderCompletedByRecency:typeof t.orderCompletedByRecency==`boolean`?t.orderCompletedByRecency:K.orderCompletedByRecency,orderDirection:Wn.has(t.orderDirection)?t.orderDirection:K.orderDirection,subGroupBy:n===`none`||r!==n?r:`none`}},Kn={0:4,1:0,2:1,3:2,4:3},qn={paused:0,failed:1,running:2,backlog:3,completed:4,canceled:5},Jn={backlog:`backlog`,canceled:`canceled`,completed:`completed`,failed:`failed`,paused:`paused`,running:`running`,scheduled:`running`},Yn=e=>e.priority??0,Xn=e=>Jn[e.status]??`backlog`,Zn=e=>{let t=e.assigneeAgentId;return t?{assigneeId:t,groupBy:`assignee`,key:`assignee:${t}`,label:t}:{groupBy:`assignee`,key:`assignee:unassigned`,label:a(`taskList.unassigned`,{ns:`chat`})}},Qn=e=>e.assigneeAgentId??``,q=e=>e?e instanceof Date?e.getTime():new Date(e).getTime():0,$n=(e,t,n)=>n===`asc`?e-t:t-e,er=(e,t,n)=>n===`asc`?e.localeCompare(t):t.localeCompare(e),tr=(e,t)=>{switch(t){case`assignee`:return Qn(e);case`createdAt`:return q(e.createdAt);case`priority`:return Kn[Yn(e)];case`status`:return qn[Xn(e)];case`title`:return e.name||e.identifier;case`updatedAt`:return q(e.updatedAt)}},nr=(e,t,n)=>{let{orderBy:r,orderCompletedByRecency:i,orderDirection:a}=n,o=r===`createdAt`||r===`updatedAt`?a===`asc`?`desc`:`asc`:a;if(i&&e.status===`completed`&&t.status===`completed`){let n=$n(q(e.completedAt)||q(e.updatedAt),q(t.completedAt)||q(t.updatedAt),`desc`);if(n!==0)return n}let s=tr(e,r),c=tr(t,r),l=typeof s==`number`&&typeof c==`number`?$n(s,c,o):er(String(s),String(c),o);return l===0?er(e.identifier,t.identifier,`asc`):l},rr=(e,t)=>{switch(t){case`assignee`:return Zn(e);case`priority`:{let t=Yn(e),n={0:`taskDetail.priority.none`,1:`taskDetail.priority.urgent`,2:`taskDetail.priority.high`,3:`taskDetail.priority.normal`,4:`taskDetail.priority.low`};return{groupBy:`priority`,key:`priority:${t}`,label:a(n[t]??n[0],{defaultValue:``,ns:`chat`}),priority:t}}case`status`:{let t=Xn(e);return{groupBy:`status`,key:`status:${t}`,label:a({backlog:`taskDetail.status.backlog`,canceled:`taskDetail.status.canceled`,completed:`taskDetail.status.completed`,failed:`taskDetail.status.failed`,paused:`taskDetail.status.paused`,running:`taskDetail.status.running`}[t],{defaultValue:``,ns:`chat`}),status:t}}case`none`:return{groupBy:`none`,key:`all`,label:a(`taskList.all`,{ns:`chat`})}}},ir=(e,t)=>{switch(t){case`priority`:return e.priority===void 0?2**53-1:Kn[e.priority]??2**53-1;case`status`:return e.status?qn[e.status]??2**53-1:2**53-1;default:return 2**53-1}},ar=(e,t,n)=>{if(t===`none`)return e;let r=n??`asc`;return[...e].sort(([e],[n])=>{let i=ir(e,t),a=ir(n,t);return i===a?r===`asc`?e.label.localeCompare(n.label):n.label.localeCompare(e.label):r===`asc`?i-a:a-i})}})),sr,cr=t((()=>{sr=e=>!e})),J,Y,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr=t((()=>{D(),be(),g(),k(),J=e(u()),r(),j(),nt(),xn(),qe(),qt(),Jt(),kt(),It(),Vt(),ot(),Ge(),or(),On(),Y=e(l()),lr=new Set(Vn),ur=(e,t)=>e.map((n,r)=>(0,Y.jsxs)(J.Fragment,{children:[(0,Y.jsx)(bn,{task:n}),!t&&r!==e.length-1&&(0,Y.jsx)(xe,{dashed:!0,style:{margin:0}})]},n.identifier)),dr=(e,t)=>(0,Y.jsx)(w,{gap:t?0:2,padding:2,variant:`borderless`,children:ur(e,t)}),fr={0:zt,1:Pt,2:jt,3:Ft,4:Kt},pr=new Set([`assignee`,`none`,`priority`,`status`]),mr=(e,t)=>e&&pr.has(e)?e:t,hr=(0,J.memo)(({agentId:e})=>(0,Y.jsx)(Y.Fragment,{children:We(e)?.title})),gr=e=>{if(e.groupBy===`assignee`)return e.assigneeId?(0,Y.jsx)(Ke,{agentId:e.assigneeId,size:18}):(0,Y.jsx)(y,{icon:ke,size:14});if(e.groupBy===`priority`){let t=e.priority??0;return(0,Y.jsx)(fr[t]||zt,{color:t===1?x.orange:x.colorTextDescription,size:16})}return e.groupBy===`status`?(0,Y.jsx)(ct,{size:16,status:e.status??`backlog`}):null},_r=(e,t,n)=>(0,Y.jsxs)(d,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,Y.jsxs)(d,{horizontal:!0,align:`center`,flex:`none`,gap:6,style:{overflow:`hidden`},children:[gr(e),(0,Y.jsx)(T,{ellipsis:!0,weight:500,children:e.assigneeId?(0,Y.jsx)(hr,{agentId:e.assigneeId}):e.label})]}),(0,Y.jsx)(T,{fontSize:12,type:`secondary`,children:t}),n?(0,Y.jsx)(xe,{style:{margin:0,borderColor:x.colorBorder}}):(0,Y.jsx)(d,{flex:1})]}),vr=(0,J.memo)(({onShowHiddenCompleted:e,options:t})=>{let{t:n}=i(`chat`),r=A(P.taskList),a=A(P.isTaskListInit),o=mr(t.groupBy,`status`),s=mr(t.subGroupBy,`none`),c=o===`none`?`none`:s,l=(0,J.useMemo)(()=>t.hideCompleted?r.filter(e=>!lr.has(e.status)):r,[r,t.hideCompleted]),u=r.length-l.length,f=(0,J.useMemo)(()=>{let e=[...l].sort((e,n)=>nr(e,n,t)),n=t.orderBy===o?t.orderDirection:void 0,r=t.orderBy===c?t.orderDirection:void 0,i=new Map;for(let t of e){let e=rr(t,o);if(!e?.key)continue;let n=i.get(e.key);n?n.items.push(t):i.set(e.key,{items:[t],meta:e})}return ar([...i.values()].map(e=>[e.meta,e.items]),o,n).map(([e,t])=>{if(c===`none`)return{items:t,meta:e,subGroups:[]};let n=new Map;for(let e of t){let t=rr(e,c);if(!t?.key)continue;let r=n.get(t.key);r?r.items.push(e):n.set(t.key,{items:[e],meta:t})}return{items:t,meta:e,subGroups:ar([...n.values()].map(e=>[e.meta,e.items]),c,r)}})},[c,o,t,l]);if(!a)return(0,Y.jsx)(w,{gap:2,padding:2,variant:`borderless`,children:Array.from({length:5}).map((e,t)=>(0,Y.jsxs)(J.Fragment,{children:[(0,Y.jsx)(Dn,{}),t!==4&&(0,Y.jsx)(xe,{dashed:!0,style:{margin:0}})]},`task-skeleton-${t}`))});if(r.length===0)return(0,Y.jsx)(_,{height:`80vh`,width:`100%`,children:(0,Y.jsx)(ne,{description:n(`taskList.empty`),icon:Ie})});let p=u>0&&(0,Y.jsxs)(d,{horizontal:!0,align:`center`,gap:16,justify:`center`,paddingBlock:16,style:{fontSize:13},children:[(0,Y.jsxs)(d,{horizontal:!0,align:`center`,gap:6,children:[(0,Y.jsx)(T,{weight:500,children:n(`taskList.hiddenCompleted.count`,{count:u})}),(0,Y.jsx)(T,{type:`secondary`,children:n(`taskList.hiddenCompleted.suffix`)})]}),e&&(0,Y.jsx)(T,{style:{cursor:`pointer`},weight:500,onClick:e,children:n(`taskList.hiddenCompleted.show`)})]});return o===`none`?(0,Y.jsxs)(Y.Fragment,{children:[dr(f[0]?.items??[]),p]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(ae,{gap:16,children:f.map(e=>(0,Y.jsx)(C,{defaultExpand:!0,indicatorPlacement:`end`,itemKey:`group-${e.meta.key}`,paddingBlock:8,paddingInline:14,title:_r(e.meta,e.items.length),variant:`filled`,styles:{header:{marginBottom:8}},children:e.subGroups.length>0?(0,Y.jsx)(ae,{gap:6,children:e.subGroups.map(([t,n])=>(0,Y.jsx)(C,{defaultExpand:!0,indicatorPlacement:`end`,itemKey:`sub-${e.meta.key}-${t.key}`,paddingBlock:6,paddingInline:14,title:_r(t,n.length,!0),children:dr(n,!0)},`${e.meta.key}-${t.key}`))}):dr(e.items)},e.meta.key))}),p]})})})),X,Z,br,xr,Sr=t((()=>{D(),be(),g(),k(),X=e(u()),r(),s(),j(),nt(),Z=e(l()),br=p(({css:e,cssVar:t})=>({form:e`
      label {
        font-size: 13px !important;
        color: ${t.colorTextSecondary} !important;
      }
    `})),xr=(0,X.memo)(({options:e,setOptions:t})=>{let[n,r]=(0,X.useState)(!1),{t:a}=i(`chat`),o=A(P.viewMode),s=A(e=>e.setViewMode),l=(0,X.useMemo)(()=>[{label:a(`taskList.groupBy.none`),value:`none`},{label:a(`taskList.groupBy.status`),value:`status`},{label:a(`taskList.groupBy.assignee`),value:`assignee`},{label:a(`taskList.groupBy.priority`),value:`priority`}],[a]),u=(0,X.useMemo)(()=>[{label:a(`taskList.orderBy.status`),value:`status`},{label:a(`taskList.orderBy.priority`),value:`priority`},{label:a(`taskList.orderBy.updatedAt`),value:`updatedAt`},{label:a(`taskList.orderBy.createdAt`),value:`createdAt`},{label:a(`taskList.orderBy.assignee`),value:`assignee`},{label:a(`taskList.orderBy.title`),value:`title`}],[a]),f=(0,X.useMemo)(()=>l.filter(t=>t.value!==e.groupBy||t.value===`none`),[l,e.groupBy]),p=e.groupBy!==`none`,m=[{children:(0,Z.jsx)(ue,{options:l,size:`small`,style:{width:150},value:e.groupBy,onChange:e=>{t(t=>({...t,groupBy:e,subGroupBy:t.subGroupBy===e?`none`:t.subGroupBy}))}}),label:a(`taskList.form.grouping`)},...p?[{children:(0,Z.jsx)(ue,{options:f,size:`small`,style:{width:150},value:e.subGroupBy,onChange:e=>{t(t=>({...t,subGroupBy:e}))}}),label:a(`taskList.form.subGrouping`)}]:[],{children:(0,Z.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,Z.jsx)(O,{icon:e.orderDirection===`asc`?De:Pe,size:`small`,onClick:()=>{t(e=>({...e,orderDirection:e.orderDirection===`asc`?`desc`:`asc`}))}}),(0,Z.jsx)(ue,{options:u,size:`small`,style:{width:112},value:e.orderBy,onChange:e=>{t(t=>({...t,orderBy:e}))}})]}),label:a(`taskList.form.ordering`)},{children:(0,Z.jsx)(ye,{checked:e.orderCompletedByRecency,size:`small`,onChange:e=>{t(t=>({...t,orderCompletedByRecency:e}))}}),minWidth:void 0,label:a(`taskList.form.orderCompletedByRecency`)},{children:(0,Z.jsx)(ye,{checked:!e.hideCompleted,size:`small`,onChange:e=>{t(t=>({...t,hideCompleted:!e}))}}),minWidth:void 0,label:a(`taskList.form.showCompleted`)}];return(0,Z.jsx)(_e,{arrow:!1,content:(0,Z.jsxs)(d,{gap:12,width:280,children:[(0,Z.jsx)(ie,{block:!0,value:o,options:[{icon:(0,Z.jsx)(y,{icon:Oe}),label:a(`taskList.view.list`),value:`list`},{icon:(0,Z.jsx)(y,{icon:we}),label:a(`taskList.view.board`),value:`kanban`}],onChange:e=>s(e)}),o===`list`&&(0,Z.jsx)(ce,{className:br.form,items:m,itemsType:`flat`,size:`small`,variant:`borderless`,styles:{item:{padding:0}}})]}),open:n,placement:`bottomRight`,trigger:[`click`],onOpenChange:r,children:(0,Z.jsx)(O,{icon:Be,size:c})})})})),Q,$,Cr,wr=t((()=>{D(),k(),Q=e(u()),Ce(),s(),lt(),gt(),rt(),et(),Je(),Ye(),j(),nt(),en(),Yt(),st(),At(),sn(),Bn(),or(),cr(),yr(),Sr(),$=e(l()),Cr=(0,Q.memo)(()=>{let e=Se(),t=tt(),n=A(P.viewMode);A(e=>e.useFetchTaskList)({allAgents:!0});let r=A(P.isListEmpty),i=N(M.taskListViewOptions),a=(0,Q.useMemo)(()=>Gn(i),[i]),o=N(M.taskCreateInlineCollapsed),[s,l]=N(e=>[M.showTaskAgentPanel(e),e.toggleTaskAgentPanel]),u=N(e=>e.updateSystemStatus),f=(0,Q.useCallback)(e=>{u({taskListViewOptions:Gn(e(a))},`updateTaskListViewOptions`)},[u,a]),p=(0,Q.useCallback)(()=>{$t({onCreated:t=>{e(at(t.identifier,t.agentId))}})},[e]),m=(0,Q.useCallback)(()=>{f(e=>({...e,hideCompleted:!1}))},[f]),h=sr(t);return(0,$.jsxs)(d,{flex:1,height:`100%`,children:[(0,$.jsx)(ut,{left:(0,$.jsx)(Dt,{}),right:(0,$.jsxs)(d,{horizontal:!0,align:`center`,gap:4,children:[(o||n===`kanban`)&&(0,$.jsx)(O,{icon:Me,size:c,onClick:p}),(0,$.jsx)(xr,{options:a,setOptions:f}),h&&(0,$.jsx)(_t,{hideWhenExpanded:!0,expand:s,onToggle:()=>l()})]}),styles:{left:{paddingLeft:4,gap:8}}}),r?(0,$.jsx)(on,{}):n===`kanban`?(0,$.jsx)(d,{flex:1,style:{overflowX:`auto`,overflowY:`hidden`},children:(0,$.jsx)(zn,{})}):(0,$.jsxs)(it,{gap:16,paddingBlock:16,wrapperStyle:{flex:1,overflowY:`auto`},children:[!o&&(0,$.jsx)(Lt,{}),(0,$.jsx)(vr,{options:a,onShowHiddenCompleted:m})]})]})})}));t((()=>{wr()}))();export{Cr as default};