import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{at as n,dt as r,ot as i,pt as a}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{Jn as o,cr as s,vl as c,yl as l}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as u,Ba as d,Ia as f,Ma as p,za as m}from"./imperative-Xfjd337A.js";import{Is as h,Os as g,mr as ee,n as _,vs as v}from"./es-2ZVhpwv7.js";import{kn as te,n as y}from"./es-DMB7XTXN.js";import{bc as b,dt as x,wi as ne}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{Gt as S,Jt as C,a as w,en as T,f as re,i as E,in as ie,m as ae,t as D}from"./agent-BV7ChU6o.js";import{Gr as oe,Ja as se,Jr as ce,Na as le,Ui as ue,n as de,qa as fe,qr as O}from"./store-DTt7Ili4.js";import{i as pe,n as me,o as he,t as ge}from"./ipc-VJ9eOZba.js";import{d as _e,r as ve,t as ye}from"./global-D_2Rs4fY.js";import{t as be}from"./selectors-BaC4ALp4.js";import{D as xe,O as Se,a as Ce,o as we}from"./SkillStore-BPju27qu.js";import{n as Te,t as Ee}from"./KeyValueEditor-CPPDfW0N.js";import{A as De,_ as Oe,a as ke,b as Ae,c as je,g as Me,h as Ne,i as Pe,k as Fe,m as Ie,o as Le,p as Re,r as ze,s as Be,v as Ve,y as He}from"./useFetchInstalledPlugins-qgH9lmh6.js";import{n as Ue,t as We}from"./PluginAvatar-By76CIY2.js";import{r as Ge,t as Ke}from"./discover-duTVUZN7.js";var qe,k,A,Je,Ye=t((()=>{p(),qe=e(l()),k=e(c()),A=f(({css:e})=>({container:e`
    display: inline-flex;
    flex-direction: row;
    gap: var(--dots-loading-gap);
    align-items: center;
  `,dot:e`
    width: var(--dots-loading-size);
    height: var(--dots-loading-size);
    border-radius: 50%;

    background-color: var(--dots-loading-color);

    animation: dots-loading-fade 1.2s ease-in-out infinite;

    @keyframes dots-loading-fade {
      0%,
      100% {
        opacity: 0.3;
      }

      50% {
        opacity: 1;
      }
    }
  `})),Je=(0,qe.memo)(({size:e=4,gap:t=3,color:n,className:r,style:i})=>{let a={"--dots-loading-color":n||m.colorTextSecondary,"--dots-loading-gap":`${t}px`,"--dots-loading-size":`${e}px`};return(0,k.jsxs)(`div`,{className:d(A.container,r),style:{...a,...i},children:[(0,k.jsx)(`div`,{className:A.dot,style:{animationDelay:`0s`}}),(0,k.jsx)(`div`,{className:A.dot,style:{animationDelay:`0.15s`}}),(0,k.jsx)(`div`,{className:A.dot,style:{animationDelay:`0.3s`}})]})})})),j,M,N,Xe,Ze,Qe,$e=t((()=>{j=e(l()),n(),me(),M=i(e=>({initialized:!1,popups:[],setPopups:t=>e({initialized:!0,popups:t})})),N=!1,Xe=()=>{if(N)return;N=!0;let e=typeof window<`u`&&window.electron?.ipcRenderer||null;if(!e)return;let t=M.getState().setPopups;e.on(`topicPopupsChanged`,(e,n)=>{t(n?.popups??[])}),ge().windows.listTopicPopups().then(e=>{t(e??[])}).catch(()=>{})},Ze=(e,t)=>e.find(e=>e.topicId===t.topicId?t.groupId?e.scope===`group`&&e.groupId===t.groupId:t.agentId?e.scope===`agent`&&e.agentId===t.agentId:!1:!1),Qe=e=>{(0,j.useEffect)(()=>{Xe()},[]);let t=M(e=>e.popups);return(0,j.useCallback)(async n=>{if(!n)return!1;let r=Ze(t,{...e,topicId:n});if(!r)return!1;try{return await ge().windows.focusTopicPopup({identifier:r.identifier}),!0}catch(e){return console.error(`[useFocusTopicPopup] Failed to focus popup window:`,e),!1}},[t,e.agentId,e.groupId])}})),P,F,I,L,et=t((()=>{_(),p(),x(),P=e(l()),r(),Te(),F=e(c()),I=f(({css:e,cssVar:t})=>({configEditor:e`
    margin-block-start: ${t.marginSM};
  `,configSection:e`
    margin-block-end: ${t.marginLG};
    padding: ${t.paddingSM};
    border-radius: ${t.borderRadius};
  `,configTitle:e`
    display: flex;
    gap: ${t.marginXS};
    align-items: center;

    height: 24px;

    font-weight: 600;
    color: ${t.colorTextHeading};
  `,previewContainer:e`
    padding-inline: ${t.paddingXS};
  `,previewItem:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: ${t.paddingXS};
    padding-inline: 0;

    &:not(:last-child) {
      border-block-end: 1px solid ${t.colorBorderSecondary};
    }
  `,previewLabel:e`
    display: flex;
    gap: ${t.marginXS};
    align-items: center;

    font-size: ${t.fontSizeSM};
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `,previewValue:e`
    padding-block: ${t.paddingXXS};
    padding-inline: ${t.paddingXS};
    border-radius: ${t.borderRadiusSM};

    font-family: ${t.fontFamilyCode};
    font-size: ${t.fontSizeSM};
    font-weight: 600;
    color: ${t.colorText};

    background: ${t.colorFillQuaternary};
  `,typeValue:e`
    display: flex;
    gap: ${t.marginXS};
    align-items: center;
  `,urlValue:e`
    max-width: 300px;
    padding-block: ${t.paddingXS};
    padding-inline: ${t.paddingSM};
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadius};

    font-family: ${t.fontFamilyCode};
    font-size: ${t.fontSizeSM};
    font-weight: 500;
    word-break: auto-phrase;

    background: ${t.colorBgElevated};
  `})),L=(0,P.memo)(({schema:e,onConfigUpdate:t})=>{let{t:n}=a(`plugin`),[r,i]=(0,P.useState)(e.config.env||{}),[o,s]=(0,P.useState)(e.config.headers||{});return(0,F.jsxs)(u,{gap:16,children:[(0,F.jsxs)(h,{className:I.configSection,variant:`outlined`,children:[(0,F.jsxs)(`div`,{className:I.configTitle,children:[(0,F.jsx)(b,{size:14}),n(`protocolInstall.install.title`)]}),(0,F.jsxs)(`div`,{className:I.previewContainer,children:[(0,F.jsxs)(`div`,{className:I.previewItem,children:[(0,F.jsx)(`span`,{className:I.previewLabel,children:n(`protocolInstall.config.type.label`)}),(0,F.jsx)(`div`,{className:I.typeValue,children:(0,F.jsx)(g,{className:I.previewValue,children:e.config.type===`stdio`?`STDIO`:`HTTP`})})]}),e.config.type===`http`&&e.config.url&&(0,F.jsxs)(`div`,{className:I.previewItem,children:[(0,F.jsx)(`span`,{className:I.previewLabel,children:n(`protocolInstall.config.url`)}),(0,F.jsx)(`div`,{className:I.urlValue,children:e.config.url})]}),e.config.type===`stdio`&&(0,F.jsxs)(F.Fragment,{children:[e.config.command&&(0,F.jsxs)(`div`,{className:I.previewItem,children:[(0,F.jsx)(`span`,{className:I.previewLabel,children:n(`protocolInstall.config.command`)}),(0,F.jsx)(`span`,{className:I.previewValue,children:e.config.command})]}),e.config.args&&e.config.args.length>0&&(0,F.jsxs)(`div`,{className:I.previewItem,children:[(0,F.jsx)(`span`,{className:I.previewLabel,children:n(`protocolInstall.config.args`)}),(0,F.jsx)(`span`,{className:I.previewValue,children:e.config.args.join(` `)})]})]})]})]}),(0,F.jsxs)(h,{className:I.configSection,variant:`outlined`,children:[(0,F.jsxs)(`div`,{className:I.configTitle,children:[(0,F.jsx)(ne,{size:14}),e.config.type===`stdio`?n(`protocolInstall.config.env`):n(`protocolInstall.config.headers`)]}),(0,F.jsxs)(`div`,{className:I.configEditor,children:[e.config.type===`http`&&(0,F.jsx)(Ee,{addButtonText:n(`protocolInstall.config.addHeaders`),style:{border:`none`},value:o,onChange:e=>{s(e),t?.({env:r,headers:e})}}),e.config.type===`stdio`&&(0,F.jsx)(Ee,{addButtonText:n(`protocolInstall.config.addEnv`),style:{border:`none`},value:r,onChange:e=>{i(e),t?.({env:e,headers:o})}})]})]})]})}),L.displayName=`ConfigDisplay`})),R,tt,nt=t((()=>{R=function(e){return e.CUSTOM=`custom`,e.MARKETPLACE=`marketplace`,e.OFFICIAL=`official`,e}({}),tt={higress:{description:`Enterprise-grade MCP plugins for cloud-native applications`,name:`Higress Marketplace`,website:`https://higress.ai`},mcprouter:{description:`Community-driven MCP plugin marketplace`,name:`MCPRouter`,website:`https://mcprouter.com`},smithery:{description:`Professional MCP plugins and tools`,name:`Smithery`,website:`https://smithery.ai`}}})),z,B,V,rt=t((()=>{_(),y(),z=e(l()),r(),Ue(),Se(),D(),oe(),ce(),et(),nt(),B=e(c()),V=(0,z.memo)(({installRequest:e,isMarketplace:t=!1,onComplete:n})=>{let{message:r}=te.useApp(),{t:i}=a(`plugin`),[o,s]=(0,z.useState)(!1),[c,l]=(0,z.useState)({}),[d]=O(e=>[e.installCustomPlugin]),f=O(e=>e.testMcpConnection),p=E(e=>e.togglePlugin),m=e?.schema?.identifier||``,_=O(le.getMCPConnectionTestState(m)),y=e?.schema,b=e?.marketId,x=t&&b?tt[b]:null;(0,z.useEffect)(()=>{e||(s(!1),l({}))},[e]);let ne=(0,z.useCallback)(async()=>{if(!(!e||!y)){s(!0);try{let e={...y.config,env:c.env||y.config.env,headers:c.headers||y.config.headers},t=await f({connection:e,identifier:m,metadata:{avatar:y.icon,description:y.description}});if(!t.success)throw Error(t.error||i(`protocolInstall.messages.connectionTestFailed`));if(!t.manifest)throw Error(i(`protocolInstall.messages.manifestNotFound`));await d({customParams:{avatar:y.icon,description:y.description,mcp:{...e,headers:e.type===`http`?e.headers:void 0}},identifier:y.identifier,manifest:t.manifest,type:`customPlugin`}),await p(y.identifier),r.success(i(`protocolInstall.messages.installSuccess`,{name:y.name})),n?.()}catch(e){console.error(`Plugin installation error:`,e),r.error(i(`protocolInstall.messages.installError`)),s(!1)}}},[e,y,c,n,d,f,p,r,i,m]),S=(0,z.useCallback)(()=>{n?.()},[n]);if(!e||!y)return null;let C=()=>t?x?(0,B.jsx)(v,{showIcon:!0,title:i(`protocolInstall.marketplace.trustedBy`,{name:x.name}),type:`success`,variant:`borderless`}):(0,B.jsx)(v,{showIcon:!0,title:i(`protocolInstall.marketplace.unverified.warning`),type:`warning`,variant:`borderless`}):(0,B.jsx)(v,{showIcon:!0,title:i(`protocolInstall.custom.security.description`),type:`warning`,variant:`borderless`}),w=i(t?`protocolInstall.marketplace.title`:`protocolInstall.custom.title`),T=i(t?`protocolInstall.actions.install`:`protocolInstall.actions.installAnyway`);return(0,B.jsx)(ee,{open:!0,confirmLoading:o||_.loading,okText:T,title:w,width:680,onCancel:S,onOk:ne,children:(0,B.jsxs)(u,{gap:24,children:[C(),(0,B.jsx)(h,{horizontal:!0,gap:16,justify:`space-between`,padding:16,variant:`outlined`,children:(0,B.jsxs)(u,{horizontal:!0,gap:16,children:[(0,B.jsx)(We,{avatar:y.icon,size:40}),(0,B.jsxs)(u,{gap:2,children:[(0,B.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[y.name,(0,B.jsx)(xe,{type:`customPlugin`})]}),(0,B.jsx)(g,{style:{fontSize:12},type:`secondary`,children:y.description})]})]})}),(0,B.jsxs)(u,{children:[(0,B.jsx)(L,{schema:y,onConfigUpdate:l}),_.error&&(0,B.jsx)(v,{closable:!0,showIcon:!0,description:_.error,title:i(`protocolInstall.messages.connectionTestFailed`),type:`error`,variant:`filled`})]})]})})}),V.displayName=`CustomPluginInstallModal`})),H,U,W,it=t((()=>{_(),H=e(l()),Pe(),Ae(),De(),Ve(),Me(),Ie(),je(),Le(),o(),U=e(c()),W=(0,H.memo)(({data:e,identifier:t})=>{let[n,r]=(0,H.useState)(s.Overview);return(0,U.jsx)(Fe,{config:e,children:(0,U.jsxs)(u,{gap:16,children:[(0,U.jsx)(Oe,{inModal:!0}),(0,U.jsx)(ze,{identifier:t}),(0,U.jsx)(Ne,{inModal:!0,noSettings:!0,activeTab:n,setActiveTab:r}),(0,U.jsxs)(u,{gap:24,children:[n===s.Overview&&(0,U.jsx)(Re,{inModal:!0}),n===s.Deployment&&(0,U.jsx)(He,{}),n===s.Schema&&(0,U.jsx)(Be,{}),n===s.Score&&(0,U.jsx)(ke,{})]})]})})}),W.displayName=`OfficialDetail`})),G,K,q,at=t((()=>{_(),y(),G=e(l()),r(),we(),D(),Ke(),oe(),fe(),it(),K=e(c()),q=(0,G.memo)(({installRequest:e,onComplete:t})=>{let{message:n}=te.useApp(),{t:r}=a([`plugin`,`common`]),[i,o]=(0,G.useState)(!1),s=Ge(e=>e.useFetchMcpDetail),c=e?.pluginId||``,[l,u]=O(e=>[se.isPluginInstalled(c)(e),e.installMCPPlugin]),d=E(e=>e.togglePlugin),{data:f,isLoading:p}=s({identifier:c}),m=(0,G.useCallback)(async()=>{if(!(!e||!f)){o(!0);try{o(!0),await u(c),await d(c),o(!1),n.success(r(`protocolInstall.messages.installSuccess`,{name:f.name})),t()}catch(e){console.error(`Official plugin installation error:`,e),n.error(r(`protocolInstall.messages.installError`)),o(!1)}}},[e,f]);return e?(0,K.jsx)(ee,{open:!0,confirmLoading:i,title:r(`protocolInstall.official.title`),width:800,okButtonProps:{disabled:l||p,type:l?`default`:`primary`},okText:r(l?`protocolInstall.actions.installed`:`protocolInstall.actions.install`),onCancel:t,onOk:m,children:p||!c?(0,K.jsx)(Ce,{}):f?(0,K.jsx)(W,{data:f,identifier:c}):(0,K.jsx)(h,{children:(0,K.jsx)(g,{type:`danger`,children:r(`protocolInstall.messages.manifestError`)})})}):null}),q.displayName=`OfficialPluginInstallModal`})),ot,J,st,Y,ct=t((()=>{ot=e(l()),rt(),at(),nt(),J=e(c()),st=e=>{let{marketId:t}=e;return t===`lobehub`?R.OFFICIAL:t&&t!==`lobehub`?R.MARKETPLACE:R.CUSTOM},Y=(0,ot.memo)(({installRequest:e,onComplete:t})=>{if(!e)return null;let n=st(e);return n===R.OFFICIAL?(0,J.jsx)(q,{installRequest:e,onComplete:t}):(0,J.jsx)(V,{installRequest:e,isMarketplace:n===R.MARKETPLACE,onComplete:t})}),Y.displayName=`PluginInstallConfirmModal`})),X,lt,ut,dt=t((()=>{pe(),X=e(l()),ct(),lt=e(c()),ut=()=>{let[e,t]=(0,X.useState)(null),n=(0,X.useCallback)(e=>{t(e)},[]),r=(0,X.useCallback)(()=>{t(null)},[]);return he(`mcpInstallRequest`,n),(0,lt.jsx)(Y,{installRequest:e,onComplete:r})}})),Z,ft,pt=t((()=>{Z={Cron:`cron`,Eval:`eval`,RunTask:`task`},ft=[Z.Cron,Z.Eval,Z.RunTask]})),mt,ht=t((()=>{D(),w(),ue(),ye(),be(),mt=e=>{let t=E(ae.isInboxAgent),[n,r,i]=de(e=>[e.activeAgentId,e.activeGroupId,e.useFetchTopics]),a=ve(_e.topicPageSize),{isValidating:o,data:s}=i(!0,{agentId:n,...e?.excludeStatuses&&e.excludeStatuses.length>0?{excludeStatuses:e.excludeStatuses}:{},...e?.excludeTriggers&&e.excludeTriggers.length>0?{excludeTriggers:e.excludeTriggers}:{},groupId:r,isInbox:r?!1:t,pageSize:a,...e?.sortBy?{sortBy:e.sortBy}:{}});return{isRevalidating:o&&!!s}}})),gt,_t,vt,yt=t((()=>{gt=new Set([`claude-code`,`codex`]),_t=(e,t)=>t&&gt.has(t)?`byProject`:e,vt=({agentTopicGroupMode:e,agentType:t,globalMode:n})=>e||_t(n,t)})),Q,$,bt=t((()=>{Q=e(l()),D(),w(),T(),S(),yt(),$=()=>{let e=E(re.currentAgentHeterogeneousProviderType),t=E(e=>re.currentAgentConfig(e)?.chatConfig?.topicGroupMode),n=E(e=>e.updateAgentChatConfig),r=vt({agentTopicGroupMode:t,agentType:e,globalMode:ie(C.topicGroupMode)}),i=(0,Q.useCallback)(async e=>{await n({topicGroupMode:e})},[n]);return(0,Q.useMemo)(()=>({topicGroupMode:r,updateTopicGroupMode:i}),[r,i])}})),xt,St,Ct=t((()=>{pt(),ht(),bt(),ue(),T(),S(),xt=[`completed`],St=()=>{let e=ie(C.topicIncludeCompleted),t=de(e=>e.activeGroupId),{topicGroupMode:n}=$();return mt({excludeStatuses:e?void 0:xt,excludeTriggers:ft,sortBy:!t&&n===`byStatus`?`status`:void 0})}}));export{ut as a,Qe as c,$ as i,Je as l,St as n,dt as o,bt as r,$e as s,Ct as t,Ye as u};