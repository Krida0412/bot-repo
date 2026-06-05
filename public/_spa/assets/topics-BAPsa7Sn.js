import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{qt as n}from"../i18n/i18n-zh-CN-CbR0_Rok.js";import{at as r,dt as i,ot as a,pt as o}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{Et as s,_l as c,gl as l,li as u,pi as d,ui as f,vl as p,vt as m,wt as h,yl as g}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as _,Ia as v,J as y,Ma as b,Ua as x,Wa as S,da as C,za as w}from"./imperative-CZQgOWZc.js";import{Is as T,Na as ee,Os as E,Xn as D,cs as O,ha as te,k as ne,n as k,os as A,ws as j}from"./es-na8XYpNF.js";import{kn as re,n as ie,sn as ae}from"./es-B2d2bv-I.js";import{a as oe,m as M,n as N}from"../vendor/vendor-react-Du2OrJ5H.js";import{Bc as se,Et as ce,Mi as le,Wg as ue,Wn as de,Wp as fe,Wu as pe,bn as me,cr as he,cs as ge,dt as P,gt as _e,mm as F,nc as ve,nf as ye,oc as be,os as xe,um as Se,vt as Ce,ws as we}from"../vendor/vendor-icons-BrLWQuP2.js";import{n as Te,s as Ee}from"./base-ui-kDrDQHsE.js";import{a as De,f as Oe,i as ke,m as Ae,t as je}from"./agent-h7g64c0D.js";import{c as Me,i as Ne,l as Pe,s as Fe,t as Ie}from"./selectors-C581QdPz.js";import{Cr as Le,Sr as Re,Ui as ze,n as I}from"./store-CDuzlPGA.js";import{K as Be,q as Ve}from"./index-CG_0atUX.js";import{b as He,x as Ue}from"./ChatInput-b5oKrNId.js";import{n as We,t as Ge}from"./useActivityTime-zuW7hM9w.js";import{n as Ke,t as qe}from"./NavHeader-Bz1hPApl.js";import{n as Je,t as Ye}from"./useDropdownMenu-J2C-Erd4.js";var Xe,L,R=t((()=>{r(),Xe={groupBy:`byTime`,groupIds:[],search:``,selectMode:!1,selectedIds:[],sortBy:`updatedAt`,status:`active`,timeRange:`all`,triggers:[`chat`],viewMode:`card`},L=a(e=>({...Xe,clearSelected:()=>e({selectedIds:[]}),exitSelectMode:()=>e({selectMode:!1,selectedIds:[]}),reset:()=>e(Xe),selectAll:t=>e({selectedIds:t}),setGroupBy:t=>e({groupBy:t}),setGroupIds:t=>e({groupIds:t}),setSearch:t=>e({search:t}),setSortBy:t=>e({sortBy:t}),setStatus:t=>e({status:t}),setTimeRange:t=>e({timeRange:t}),setTriggers:t=>e({triggers:t}),setViewMode:t=>e({viewMode:t}),toggleSelectMode:()=>e(e=>({selectMode:!e.selectMode,selectedIds:e.selectMode?[]:e.selectedIds})),toggleSelected:t=>e(e=>({selectedIds:e.selectedIds.includes(t)?e.selectedIds.filter(e=>e!==t):[...e.selectedIds,t]}))}))})),Ze,z,Qe,$e,et=t((()=>{k(),Te(),b(),P(),Ze=e(g()),i(),ze(),R(),z=e(p()),Qe=v(({css:e})=>({bar:e`
    pointer-events: auto;

    padding-block: 8px;
    padding-inline: 16px;
    border: 1px solid ${w.colorBorderSecondary};
    border-radius: 999px;

    background: ${w.colorBgElevated};
    box-shadow: ${w.boxShadowSecondary};
  `,divider:e`
    width: 1px;
    height: 16px;
    margin-inline: 2px;
    background: ${w.colorBorderSecondary};
  `,overlay:e`
    pointer-events: none;

    position: fixed;
    z-index: 1000;
    inset-block-end: 24px;
    inset-inline: 0;

    display: flex;
    justify-content: center;
  `})),$e=(0,Ze.memo)(()=>{let{t:e}=o(`topic`),t=L(e=>e.selectedIds),n=L(e=>e.exitSelectMode),r=I(e=>e.favoriteTopic),i=I(e=>e.updateTopicStatus),a=I(e=>e.removeTopic),s=(0,Ze.useCallback)(async()=>{await Promise.all(t.map(e=>r(e,!0))),n()},[t,r,n]),c=(0,Ze.useCallback)(async()=>{await Promise.all(t.map(e=>i({status:`completed`,topicId:e}))),n()},[t,i,n]),l=(0,Ze.useCallback)(()=>{Ee({content:e(`management.bulk.deleteConfirm`,{count:t.length}),okButtonProps:{danger:!0},okText:e(`management.bulk.delete`),onOk:async()=>{for(let e of t)await a(e);n()},title:e(`management.bulk.deleteTitle`)})},[t,e,a,n]);return t.length===0?null:(0,z.jsx)(`div`,{className:Qe.overlay,children:(0,z.jsxs)(_,{horizontal:!0,align:`center`,className:Qe.bar,gap:4,children:[(0,z.jsx)(E,{style:{marginInlineEnd:8},weight:500,children:e(`management.bulk.selectedCount`,{count:t.length})}),(0,z.jsx)(j,{icon:he,size:`small`,title:e(`management.bulk.favorite`),onClick:s}),(0,z.jsx)(j,{icon:ue,size:`small`,title:e(`management.bulk.archive`),onClick:c}),(0,z.jsx)(j,{icon:me,size:`small`,style:{color:w.colorError},title:e(`management.bulk.delete`),onClick:l}),(0,z.jsx)(`span`,{className:Qe.divider}),(0,z.jsx)(j,{icon:Ce,size:`small`,title:e(`management.bulk.cancel`),onClick:n})]})})}),$e.displayName=`AgentTopicManagerBulkActionBar`})),tt,B,nt,rt=t((()=>{k(),b(),P(),tt=e(g()),i(),N(),d(),B=e(p()),nt=(0,tt.memo)(({agentId:e,hasFilters:t,onClearFilters:n})=>{let{t:r}=o(`topic`),i=M();return(0,B.jsxs)(_,{align:`center`,flex:1,gap:16,justify:`center`,paddingBlock:64,children:[(0,B.jsx)(C,{icon:xe,size:48,style:{color:w.colorTextQuaternary}}),(0,B.jsxs)(_,{align:`center`,gap:4,children:[(0,B.jsx)(E,{fontSize:16,weight:600,children:r(t?`management.empty.filtered.title`:`management.empty.noTopics.title`)}),(0,B.jsx)(E,{fontSize:13,type:`secondary`,children:r(t?`management.empty.filtered.desc`:`management.empty.noTopics.desc`)})]}),t?(0,B.jsx)(O,{onClick:n,children:r(`management.empty.filtered.action`)}):(0,B.jsx)(O,{type:`primary`,onClick:()=>i(f(e)),children:r(`management.empty.noTopics.action`)})]})}),nt.displayName=`AgentTopicManagerEmptyState`})),it,V,at,ot=t((()=>{k(),ie(),P(),it=e(g()),i(),N(),l(),Ke(),je(),De(),R(),V=e(p()),at=(0,it.memo)(({agentId:e})=>{let{t}=o([`topic`,`chat`,`common`]),n=ke(Oe.currentAgentTitle),r=ke(Ae.isInboxAgent)?n||t(`inbox.title`,{ns:`chat`}):n||t(`defaultSession`,{ns:`common`}),i=L(e=>e.viewMode),a=L(e=>e.setViewMode),s=L(e=>e.search),l=L(e=>e.setSearch);return(0,V.jsx)(qe,{styles:{center:{maxWidth:560,paddingInline:16}},left:(0,V.jsx)(ae,{separator:(0,V.jsx)(C,{icon:Se,size:14}),items:[{title:(0,V.jsx)(oe,{to:c(`/agent`,e),children:(0,V.jsx)(E,{ellipsis:!0,color:`inherit`,style:{maxWidth:200},weight:500,children:r})})},{title:(0,V.jsx)(E,{color:`inherit`,weight:500,children:t(`management.title`)})}]}),right:(0,V.jsx)(_,{horizontal:!0,align:`center`,gap:6,children:(0,V.jsx)(D,{size:`small`,value:i,variant:`borderless`,options:[{icon:(0,V.jsx)(C,{icon:se}),title:t(`management.view.card`),value:`card`},{icon:(0,V.jsx)(C,{icon:ve}),title:t(`management.view.list`),value:`list`}],onChange:e=>a(e)})}),children:(0,V.jsx)(ee,{placeholder:t(`management.searchPlaceholder`),prefix:(0,V.jsx)(C,{icon:le,size:`small`}),size:`middle`,value:s,variant:`filled`,onChange:e=>l(e.target.value)})})}),at.displayName=`AgentTopicManagerHeader`})),st,ct,lt,ut,dt=t((()=>{k(),Te(),ie(),P(),st=e(g()),i(),ze(),Ie(),ct=e(p()),lt=2160*60*60*1e3,ut=(0,st.memo)(()=>{let{t:e}=o(`topic`),{message:t}=re.useApp(),n=I(Ne.agentTopicsViewTopics),r=I(e=>e.updateTopicStatus),i=(0,st.useCallback)(()=>{let i=Date.now()-lt,a=(n??[]).filter(e=>e.status===`completed`?!1:(typeof e.updatedAt==`number`?e.updatedAt:new Date(e.updatedAt).getTime())<i);if(a.length===0){t.info(e(`management.actionsMenu.archiveStale.noneFound`));return}Ee({content:e(`management.actionsMenu.archiveStale.confirm`,{count:a.length}),okText:e(`management.actionsMenu.archiveStale.confirmOk`),onOk:async()=>{for(let e of a)await r({status:`completed`,topicId:e.id});t.success(e(`management.actionsMenu.archiveStale.done`,{count:a.length}))},title:e(`management.actionsMenu.archiveStale.title`)})},[n,r,t,e]);return(0,ct.jsx)(y,{items:(0,st.useMemo)(()=>[{icon:(0,ct.jsx)(ue,{size:14}),key:`archive-stale`,label:e(`management.actionsMenu.archiveStale.label`),onClick:i}],[e,i]),children:(0,ct.jsx)(j,{icon:ye,title:e(`management.actionsMenu.title`)})})}),ut.displayName=`AgentTopicManagerToolbarActions`})),H,U,ft,pt,mt,ht,gt,_t,vt,W,yt,bt=t((()=>{k(),b(),P(),H=e(g()),i(),R(),dt(),U=e(p()),ft=v(({css:e})=>({divider:e`
    width: 1px;
    height: 16px;
    margin-inline: 4px;
    background: ${w.colorBorderSecondary};
  `})),pt=[{key:`all`,labelKey:`management.filters.status.all`},{key:`active`,labelKey:`management.filters.status.active`},{key:`running`,labelKey:`management.filters.status.running`},{key:`completed`,labelKey:`management.filters.status.completed`}],mt=[`chat`,`api`,`task`,`eval`],ht={api:ce,chat:we,eval:de,task:be},gt=[`all`,`today`,`week`,`month`],_t=[`updatedAt`,`createdAt`,`title`],vt=[`byTime`,`byProject`,`none`],W=({visible:e})=>(0,U.jsx)(`span`,{style:{display:`inline-block`,width:12},children:e?`✓`:``}),yt=(0,H.memo)(({projects:e,statusCounts:t})=>{let{t:n}=o(`topic`),r=L(e=>e.status),i=L(e=>e.setStatus),a=L(e=>e.groupIds),s=L(e=>e.setGroupIds),c=L(e=>e.triggers),l=L(e=>e.setTriggers),u=L(e=>e.timeRange),d=L(e=>e.setTimeRange),f=L(e=>e.sortBy),p=L(e=>e.setSortBy),m=L(e=>e.groupBy),h=L(e=>e.setGroupBy),g=(0,H.useMemo)(()=>e.length===0?[{disabled:!0,key:`empty`,label:n(`management.filters.project.empty`)}]:e.map(e=>({icon:(0,U.jsx)(W,{visible:a.includes(e.value)}),key:e.value,label:e.label,onClick:()=>s(a.includes(e.value)?a.filter(t=>t!==e.value):[...a,e.value])})),[e,a,n,s]),v=(0,H.useMemo)(()=>mt.map(e=>({extra:(0,U.jsx)(W,{visible:c.includes(e)}),icon:(0,U.jsx)(C,{icon:ht[e],size:14}),key:e,label:n(`management.filters.trigger.${e}`),onClick:()=>l(c.includes(e)?c.filter(t=>t!==e):[...c,e])})),[c,n,l]),b=(0,H.useMemo)(()=>gt.map(e=>({icon:(0,U.jsx)(W,{visible:u===e}),key:e,label:n(`management.filters.time.${e}`),onClick:()=>d(e)})),[u,n,d]),x=(0,H.useMemo)(()=>_t.map(e=>({icon:(0,U.jsx)(W,{visible:f===e}),key:e,label:n(`management.sort.${e}`),onClick:()=>p(e)})),[f,n,p]),S=(0,H.useMemo)(()=>vt.map(e=>({icon:(0,U.jsx)(W,{visible:m===e}),key:e,label:n(`management.group.${e}`),onClick:()=>h(e)})),[m,n,h]),T=c.length===0?n(`management.filters.trigger.label`):`${n(`management.filters.trigger.label`)} (${c.length})`,ee=a.length===0?n(`management.filters.project.label`):`${n(`management.filters.project.label`)} (${a.length})`,te=n(u===`all`?`management.filters.time.label`:`management.filters.time.${u}`),ne=`${n(`management.sort.label`)}: ${n(`management.sort.${f}`)}`,k=`${n(`management.group.label`)}: ${n(`management.group.${m}`)}`;return(0,U.jsx)(_,{gap:12,children:(0,U.jsxs)(_,{horizontal:!0,align:`center`,gap:6,wrap:`wrap`,children:[(0,U.jsx)(D,{value:r,options:pt.map(e=>{let i=t[e.key]??0;return{label:(0,U.jsxs)(_,{horizontal:!0,align:`center`,gap:6,children:[(0,U.jsx)(`span`,{children:n(e.labelKey)}),(0,U.jsx)(E,{style:{color:r===e.key?`inherit`:w.colorTextTertiary,fontSize:12,fontVariantNumeric:`tabular-nums`,opacity:r===e.key?.7:1},children:i})]}),value:e.key}}),onChange:e=>i(e)}),(0,U.jsx)(`span`,{className:ft.divider}),(0,U.jsx)(y,{items:g,children:(0,U.jsx)(O,{variant:`filled`,children:(0,U.jsxs)(_,{horizontal:!0,align:`center`,gap:4,children:[ee,(0,U.jsx)(C,{icon:F,size:11})]})})}),(0,U.jsx)(y,{items:v,children:(0,U.jsx)(O,{variant:`filled`,children:(0,U.jsxs)(_,{horizontal:!0,align:`center`,gap:4,children:[T,(0,U.jsx)(C,{icon:F,size:11})]})})}),(0,U.jsx)(y,{items:b,children:(0,U.jsx)(O,{variant:`filled`,children:(0,U.jsxs)(_,{horizontal:!0,align:`center`,gap:4,children:[te,(0,U.jsx)(C,{icon:F,size:11})]})})}),(0,U.jsx)(_,{flex:1}),(0,U.jsx)(y,{items:S,children:(0,U.jsx)(O,{variant:`filled`,children:(0,U.jsxs)(_,{horizontal:!0,align:`center`,gap:4,children:[k,(0,U.jsx)(C,{icon:F,size:11})]})})}),(0,U.jsx)(y,{items:x,children:(0,U.jsx)(O,{variant:`filled`,children:(0,U.jsxs)(_,{horizontal:!0,align:`center`,gap:4,children:[ne,(0,U.jsx)(C,{icon:F,size:11})]})})}),(0,U.jsx)(ut,{})]})})}),yt.displayName=`AgentTopicManagerToolbar`})),xt,St,Ct,wt,Tt=t((()=>{k(),b(),xt=e(g()),i(),Ue(),St=e(p()),Ct={active:w.colorSuccess,archived:w.colorWarning,completed:w.colorTextQuaternary,failed:w.colorError,paused:w.colorInfo,running:w.colorWarning,waitingForHuman:w.colorInfo},wt=(0,xt.memo)(({status:e})=>{let{t}=o(`topic`),{isDarkMode:n}=S(),r=Ct[e]??w.colorTextQuaternary,i=`management.status.${e}`,a=e===`running`,s=n?w.colorWarningBorder:`color-mix(in srgb, ${w.colorWarning} 45%, transparent)`;return(0,St.jsxs)(_,{horizontal:!0,align:`center`,gap:6,children:[a?(0,St.jsx)(He,{ringColor:s,size:10,style:{color:w.colorWarning}}):(0,St.jsx)(`span`,{style:{background:r,borderRadius:`50%`,flexShrink:0,height:6,width:6}}),(0,St.jsx)(`span`,{style:{color:w.colorTextSecondary,fontSize:11},children:t(i)})]})}),wt.displayName=`AgentTopicManagerStatusDot`})),Et,Dt,G,Ot,kt,At,jt,Mt,Nt,Pt,Ft=t((()=>{Et=e(n()),Dt=1440*60*1e3,G=(e,t)=>{switch(t){case`all`:return!0;case`archived`:return e.status===`archived`;case`completed`:return e.status===`completed`;case`running`:return e.status===`running`;case`active`:return!e.status||e.status===`active`;default:return!0}},Ot=(e,t)=>{if(t.length===0)return!0;let n=e.metadata?.workingDirectory??``;return t.includes(n)},kt=(e,t)=>{if(t.length===0)return!0;let n=e.trigger??`chat`;return t.includes(n)},At=(e,t)=>{if(t===`all`)return!0;let n=e.updatedAt?new Date(e.updatedAt).getTime():0;if(!n)return!1;let r=Date.now()-n;switch(t){case`today`:return r<Dt;case`week`:return r<7*Dt;case`month`:return r<30*Dt;default:return!0}},jt=(e,t)=>{let n=[...e];switch(t){case`updatedAt`:n.sort((e,t)=>new Date(t.updatedAt??0).getTime()-new Date(e.updatedAt??0).getTime());break;case`createdAt`:n.sort((e,t)=>new Date(t.createdAt??0).getTime()-new Date(e.createdAt??0).getTime());break;case`title`:n.sort((e,t)=>(e.title??``).localeCompare(t.title??``));break}return n},Mt=e=>{let t=e.metadata?.workingDirectory;if(t)return t.split(`/`).filter(Boolean).at(-1)??t},Nt=(e,t)=>/^\d{4}/.test(e)?e.includes(`-`)?(0,Et.default)(e).format(`MMMM`):e:t(`groupTitle.byTime.${e}`),Pt=(e,t,n)=>e===`no-project`?n(`management.group.noProject`):t??e.replace(/^project:/,``)})),It,K,q,Lt,Rt=t((()=>{s(),k(),b(),P(),It=e(g()),i(),N(),d(),Ge(),Tt(),R(),Ft(),K=e(p()),q=v(({css:e})=>({card:e`
    cursor: pointer;

    position: relative;

    display: flex;
    flex-direction: column;

    /* min-height keeps short cards consistent without forcing tall empty
       whitespace — preview + footer can still grow the card naturally. */
    min-height: 140px;
    padding: 14px;

    transition:
      transform 0.18s,
      box-shadow 0.18s,
      border-color 0.18s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
    }
  `,cardSelected:e`
    border-color: ${w.colorPrimary};
    box-shadow: 0 0 0 1px ${w.colorPrimary};
  `,checkbox:e`
    position: absolute;
    z-index: 1;
    inset-block-start: 10px;
    inset-inline-end: 10px;
  `,checkboxBox:e`
    border-color: ${w.colorBorder};
  `,description:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  `,footer:e`
    /* push to bottom so cards with short content keep the stats row anchored */
    margin-block-start: auto;
    padding-block-start: 10px;
    border-block-start: 1px solid ${w.colorSplit};
  `,title:e`
    overflow: hidden;
    display: -webkit-box;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  `})),Lt=(0,It.memo)(({topic:e,agentId:t})=>{let{t:n}=o(`topic`),r=M(),i=L(e=>e.selectMode),a=L(t=>t.selectedIds.includes(e.id)),s=L(e=>e.toggleSelected),c=L(e=>e.toggleSelectMode),l=(0,It.useCallback)(n=>{if(i||n.metaKey||n.ctrlKey){n.preventDefault(),s(e.id);return}r(u(t,e.id))},[i,e.id,t,s,r]),d=(0,It.useCallback)(()=>{i||c(),s(e.id)},[i,e.id,s,c]),f=(0,It.useCallback)(e=>{e.stopPropagation()},[]),p=Mt(e),g=e.status??`active`,v=e.description?.trim()||e.historySummary?.trim()||e.firstUserMessage?.trim(),y=We(e.updatedAt),b=Number(e.messageCount??0),x=Number(e.tokenUsage??0),S=Number(e.cost??0);return(0,K.jsxs)(T,{className:[q.card,a&&q.cardSelected].filter(Boolean).join(` `),gap:8,variant:`outlined`,onClick:l,children:[(0,K.jsx)(`div`,{className:q.checkbox,onClick:f,children:(0,K.jsx)(A,{checked:a,classNames:{checkbox:q.checkboxBox},size:18,onChange:d})}),(0,K.jsxs)(_,{horizontal:!0,align:`center`,gap:6,children:[e.favorite&&(0,K.jsx)(C,{icon:he,size:13,style:{color:w.colorWarning,flexShrink:0}}),(0,K.jsx)(E,{className:q.title,fontSize:14,weight:600,children:e.title||n(`defaultTitle`)})]}),v&&(0,K.jsx)(E,{className:q.description,fontSize:12,type:`secondary`,children:v}),p&&(0,K.jsx)(te,{bordered:!1,icon:(0,K.jsx)(C,{icon:pe,size:11}),size:`small`,children:p}),(0,K.jsxs)(_,{horizontal:!0,align:`center`,className:q.footer,justify:`space-between`,children:[(0,K.jsxs)(_,{horizontal:!0,align:`center`,gap:10,style:{color:w.colorTextQuaternary,fontSize:11},children:[b>0&&(0,K.jsxs)(_,{horizontal:!0,align:`center`,gap:3,children:[(0,K.jsx)(C,{icon:ge,size:11}),b]}),x>0&&(0,K.jsxs)(_,{horizontal:!0,align:`center`,gap:3,title:`${x} tokens`,children:[(0,K.jsx)(C,{icon:_e,size:11}),h(x)]}),S>0&&(0,K.jsxs)(_,{horizontal:!0,align:`center`,gap:3,title:`$${S.toFixed(4)}`,children:[(0,K.jsx)(C,{icon:fe,size:11}),m(S,2)]}),(0,K.jsx)(`span`,{title:y.title,children:y.text})]}),(0,K.jsx)(wt,{status:g})]})]})}),Lt.displayName=`AgentTopicCard`})),zt,J,Bt,Vt,Ht=t((()=>{k(),b(),zt=e(g()),i(),Rt(),Ft(),J=e(p()),Bt=v(({css:e})=>({grid:e`
    display: grid;

    /*
      min(280px, 100%) lets columns shrink below 280px when the available
      width itself is narrower (e.g. agent sidebar expanded), so the layout
      keeps wrapping instead of overflowing horizontally.
    */
    grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
    gap: 12px;

    width: 100%;
    min-width: 0;

    ${x.md} {
      grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
    }
  `,groupTitle:e`
    margin-block-start: 8px;
    padding-block-end: 4px;

    font-size: 13px;
    font-weight: 500;
    color: ${w.colorTextSecondary};
  `})),Vt=(0,zt.memo)(({groups:e,agentId:t,showGroupTitles:n,groupBy:r})=>{let{t:i}=o(`topic`);return(0,J.jsx)(_,{gap:12,children:e.map(e=>{if(e.children.length===0)return null;let a=r===`byProject`?Pt(e.id,e.title,i):e.title||Nt(e.id,i);return(0,J.jsxs)(zt.Fragment,{children:[n&&(0,J.jsx)(E,{as:`div`,className:Bt.groupTitle,children:a}),(0,J.jsx)(`div`,{className:Bt.grid,children:e.children.map(e=>(0,J.jsx)(Lt,{agentId:t,topic:e},e.id))})]},e.id)})})}),Vt.displayName=`AgentTopicManagerGrid`})),Y,X,Ut,Z,Wt,Gt,Kt=t((()=>{k(),b(),P(),Y=e(g()),i(),N(),d(),Ge(),Ye(),Tt(),R(),Ft(),X=e(p()),Ut=[`chat`,`api`,`task`,`eval`],Z=v(({css:e})=>({cell:e`
    overflow: hidden;
    min-width: 0;
  `,checkboxBox:e`
    border-color: ${w.colorBorder};
  `,groupBar:e`
    display: flex;
    gap: 6px;
    align-items: baseline;

    padding-block: 8px;
    padding-inline: 16px;
    border-block-end: 1px solid ${w.colorSplit};

    font-size: 12px;
    font-weight: 500;
    color: ${w.colorTextSecondary};

    background: ${w.colorFillQuaternary};
  `,groupCount:e`
    font-size: 11px;
    font-weight: 400;
    color: ${w.colorTextQuaternary};
  `,header:e`
    position: sticky;
    z-index: 2;
    inset-block-start: 0;

    display: grid;
    grid-template-columns: 24px minmax(0, 1fr) 120px 100px 80px 100px 32px;
    gap: 12px;
    align-items: center;

    padding-block: 10px;
    padding-inline: 16px;
    border-block-end: 1px solid ${w.colorSplit};

    font-size: 12px;
    font-weight: 500;
    color: ${w.colorTextSecondary};

    /* opaque so scrolled rows don't bleed through */
    background: ${w.colorBgElevated};
  `,headerCellEnd:e`
    text-align: end;
  `,list:e`
    position: relative;

    overflow: hidden;

    border: 1px solid ${w.colorBorderSecondary};
    border-radius: 12px;

    background: ${w.colorBgContainer};
  `,row:e`
    cursor: pointer;

    display: grid;
    grid-template-columns: 24px minmax(0, 1fr) 120px 100px 80px 100px 32px;
    gap: 12px;
    align-items: center;

    padding-block: 10px;
    padding-inline: 16px;
    border-block-end: 1px solid ${w.colorSplit};

    transition: background 0.12s;

    &:hover {
      background: ${w.colorFillTertiary};
    }

    &:last-child {
      border-block-end: none;
    }
  `,rowSelected:e`
    background: ${w.colorPrimaryBg};

    &:hover {
      background: ${w.colorPrimaryBgHover};
    }
  `,sub:e`
    overflow: hidden;
    margin-block-start: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,title:e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),Wt=(0,Y.memo)(({topic:e,agentId:t})=>{let{t:n}=o(`topic`),r=M(),i=L(e=>e.selectMode),a=L(t=>t.selectedIds.includes(e.id)),s=L(e=>e.toggleSelected),c=L(e=>e.toggleSelectMode),{dropdownMenu:l}=Je({fav:e.favorite,id:e.id,status:e.status,title:e.title}),d=(0,Y.useCallback)(n=>{if(i||n.metaKey||n.ctrlKey){n.preventDefault(),s(e.id);return}r(u(t,e.id))},[i,e.id,t,s,r]),f=(0,Y.useCallback)(()=>{i||c(),s(e.id)},[i,e.id,s,c]),p=e.status??`active`,m=Mt(e),h=We(e.updatedAt),g=e.trigger??`chat`,v=n(`management.filters.trigger.${Ut.includes(g)?g:`chat`}`);return(0,X.jsxs)(`div`,{className:[Z.row,a&&Z.rowSelected].filter(Boolean).join(` `),onClick:d,children:[(0,X.jsx)(`div`,{onClick:e=>e.stopPropagation(),children:(0,X.jsx)(A,{checked:a,classNames:{checkbox:Z.checkboxBox},size:18,onChange:f})}),(0,X.jsxs)(`div`,{className:Z.cell,children:[(0,X.jsxs)(_,{horizontal:!0,align:`center`,gap:6,children:[e.favorite&&(0,X.jsx)(C,{icon:he,size:12,style:{color:w.colorWarning,flexShrink:0}}),(0,X.jsx)(E,{className:Z.title,fontSize:13,weight:500,children:e.title||n(`defaultTitle`)})]}),e.historySummary&&(0,X.jsx)(E,{className:Z.sub,fontSize:11,type:`secondary`,children:e.historySummary})]}),(0,X.jsx)(`div`,{className:Z.cell,children:m?(0,X.jsx)(te,{bordered:!1,icon:(0,X.jsx)(C,{icon:pe,size:11}),size:`small`,children:m}):(0,X.jsx)(E,{fontSize:12,type:`secondary`,children:`—`})}),(0,X.jsx)(wt,{status:p}),(0,X.jsx)(E,{fontSize:12,type:`secondary`,children:v}),(0,X.jsx)(E,{fontSize:12,style:{color:w.colorTextQuaternary,textAlign:`end`},title:h.title,children:h.text}),(0,X.jsx)(y,{items:l,children:(0,X.jsx)(j,{icon:ye,size:`small`,onClick:e=>e.stopPropagation()})})]})}),Wt.displayName=`AgentTopicManagerRow`,Gt=(0,Y.memo)(({groups:e,agentId:t,showGroupTitles:n,groupBy:r})=>{let{t:i}=o(`topic`),a=L(e=>e.selectedIds),s=L(e=>e.selectMode),c=L(e=>e.selectAll),l=L(e=>e.clearSelected),u=L(e=>e.toggleSelectMode),d=e.flatMap(e=>e.children.map(e=>e.id)),f=new Set(a),p=d.reduce((e,t)=>e+ +!!f.has(t),0),m=d.length>0&&p===d.length,h=p>0&&!m;return(0,X.jsxs)(`div`,{className:Z.list,children:[(0,X.jsxs)(`div`,{className:Z.header,children:[(0,X.jsx)(A,{checked:m,classNames:{checkbox:Z.checkboxBox},indeterminate:h,size:18,onChange:()=>{m?l():(s||u(),c(d))}}),(0,X.jsx)(`span`,{children:i(`management.columns.title`)}),(0,X.jsx)(`span`,{children:i(`management.columns.project`)}),(0,X.jsx)(`span`,{children:i(`management.columns.status`)}),(0,X.jsx)(`span`,{children:i(`management.columns.trigger`)}),(0,X.jsx)(`span`,{className:Z.headerCellEnd,children:i(`management.columns.updated`)}),(0,X.jsx)(`span`,{})]}),e.map(e=>{if(e.children.length===0)return null;let a=r===`byProject`?Pt(e.id,e.title,i):e.title||Nt(e.id,i);return(0,X.jsxs)(Y.Fragment,{children:[n&&(0,X.jsxs)(`div`,{className:Z.groupBar,children:[(0,X.jsx)(`span`,{children:a}),(0,X.jsx)(`span`,{className:Z.groupCount,children:e.children.length})]}),e.children.map(e=>(0,X.jsx)(Wt,{agentId:t,topic:e},e.id))]},e.id)})]})}),Gt.displayName=`AgentTopicManagerListView`})),Q,$,qt,Jt,Yt=t((()=>{Pe(),k(),Q=e(g()),i(),Ve(),ze(),Ie(),Re(),et(),rt(),ot(),R(),bt(),Ht(),Kt(),Ft(),$=e(p()),qt=30,Jt=(0,Q.memo)(()=>{let{t:e}=o(`topic`),t=I(e=>e.activeAgentId),n=I(e=>e.useFetchAgentTopicsView),r=I(e=>e.useSearchTopics),i=I(e=>e.loadMoreAgentTopicsView),a=I(Ne.agentTopicsViewTopics),s=I(Ne.agentTopicsViewHasMore),c=I(Ne.agentTopicsViewIsLoadingMore),l=L(e=>e.reset),u=L(e=>e.search),d=L(e=>e.status),f=L(e=>e.groupIds),p=L(e=>e.triggers),m=L(e=>e.timeRange),h=L(e=>e.sortBy),g=L(e=>e.groupBy),v=L(e=>e.viewMode),y=L(e=>e.setStatus),b=L(e=>e.setGroupIds),x=L(e=>e.setTriggers),S=L(e=>e.setTimeRange),C=L(e=>e.setSearch);(0,Q.useEffect)(()=>{l()},[t,l]);let{isLoading:w}=n(!0,{agentId:t,pageSize:qt,withDetails:!0}),T=u.trim(),{data:ee}=r(T.length>0?T:void 0,{agentId:t}),E=(0,Q.useMemo)(()=>T.length>0?ee??[]:a??[],[T,ee,a]),D=(0,Q.useMemo)(()=>E.filter(e=>Ot(e,f)&&kt(e,p)&&At(e,m)),[E,f,p,m]),O=(0,Q.useMemo)(()=>jt(D.filter(e=>G(e,d)),h),[D,d,h]),te=(0,Q.useMemo)(()=>({active:D.filter(e=>G(e,`active`)).length,all:D.length,archived:D.filter(e=>G(e,`archived`)).length,completed:D.filter(e=>G(e,`completed`)).length,running:D.filter(e=>G(e,`running`)).length}),[D]),k=T.length>0,A=g!==`none`&&!k,j=(0,Q.useMemo)(()=>A?g===`byProject`?Fe(O,h===`createdAt`?`createdAt`:`updatedAt`):Me(O):[{children:O,id:`all`}],[O,A,g,h]),re=(0,Q.useMemo)(()=>{let e=new Map;for(let t of E){let n=t.metadata?.workingDirectory;n&&!e.has(n)&&e.set(n,Mt(t)??n)}return Array.from(e,([e,t])=>({label:t,value:e}))},[E]),ie=O.length,ae=d!==`active`&&d!==`all`||f.length>0||p.length>0||m!==`all`||T.length>0,oe=()=>{y(`all`),b([]),x([]),S(`all`),C(``)},M=(0,Q.useRef)(null),N=(0,Q.useRef)(null);return(0,Q.useEffect)(()=>{if(k)return;let e=M.current,t=N.current;if(!e||!t)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&s&&!c&&i()},{root:e,rootMargin:`300px`});return n.observe(t),()=>n.disconnect()},[s,c,k,i]),t?(0,$.jsxs)(_,{flex:1,height:`100%`,style:{overflow:`hidden`},children:[(0,$.jsx)(at,{agentId:t}),(0,$.jsx)(`div`,{ref:M,style:{display:`flex`,flex:1,flexDirection:`column`,minWidth:0,overflowY:`auto`,padding:`20px 24px`},children:(0,$.jsxs)(_,{gap:16,style:{marginInline:`auto`,maxWidth:1440,width:`100%`},children:[(0,$.jsx)(yt,{projects:re,statusCounts:te}),(0,$.jsx)($e,{}),w&&E.length===0?(0,$.jsx)(ne,{active:!0,paragraph:{rows:6},title:!1}):ie===0?(0,$.jsx)(nt,{agentId:t,hasFilters:ae,onClearFilters:oe}):(0,$.jsxs)($.Fragment,{children:[v===`card`?(0,$.jsx)(Vt,{agentId:t,groupBy:g,groups:j,showGroupTitles:A}):(0,$.jsx)(Gt,{agentId:t,groupBy:g,groups:j,showGroupTitles:A}),!k&&s&&(0,$.jsx)(`div`,{"aria-hidden":!0,ref:N,style:{height:1}}),!k&&c&&(0,$.jsx)(_,{align:`center`,paddingBlock:12,children:(0,$.jsx)(`span`,{className:Le.shinyText,style:{fontSize:12},children:e(`management.loadingMore`)})})]})]})})]}):(0,$.jsx)(Be,{debugId:`AgentTopicManager`})}),Jt.displayName=`AgentTopicManager`})),Xt,Zt,Qt;t((()=>{Xt=e(g()),Ve(),Yt(),Zt=e(p()),Qt=(0,Xt.memo)(()=>(0,Zt.jsx)(Xt.Suspense,{fallback:(0,Zt.jsx)(Be,{debugId:`AgentTopicManager`}),children:(0,Zt.jsx)(Jt,{})}))}))();export{Qt as default};