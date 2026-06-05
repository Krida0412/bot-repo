import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,mt as r,pt as i}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{Fs as a,Rr as o,vl as s,yl as c}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{r as l,t as u}from"./swr-CpnM5dDc.js";import{Aa as d,Ba as f,Ia as p,Ma as m,Wa as h,da as g}from"./imperative-CZQgOWZc.js";import{Os as _,Ti as v,Wr as y,Yr as ee,br as b,gr as x,ha as S,n as C,qr as w,vr as te,vs as T,ws as E}from"./es-na8XYpNF.js";import{$ as D,Cn as O,Ft as k,U as ne,Y as re,_t as A,an as j,at as ie,j as ae,kn as oe,n as M,qn as se,s as N,xt as P}from"./es-B2d2bv-I.js";import{h as ce,m as le,n as ue}from"../vendor/vendor-react-Du2OrJ5H.js";import{Bi as de,Jd as fe,Ji as pe,Xt as me,ba as he,bn as ge,cf as _e,dt as F,gh as ve,ma as ye,na as be,nf as xe,vt as Se}from"../vendor/vendor-icons-BrLWQuP2.js";import{n as Ce,s as we}from"./base-ui-kDrDQHsE.js";import{Gt as Te,Ut as Ee,Wt as De,Xt as Oe,en as ke,i as I,in as Ae,t as je}from"./agent-h7g64c0D.js";import{l as Me,t as Ne}from"./client-Dm8gDnNy.js";import{n as Pe,t as Fe}from"./ipc-CRlB_H5u.js";import{d as Ie,r as Le,t as Re}from"./global-Cd7A4jdZ.js";import{d as ze,u as Be}from"./electron-CHkm9grf.js";import{t as Ve}from"./selectors-CamLeLda.js";import{K as He,q as Ue}from"./index-CG_0atUX.js";import{n as We,t as Ge}from"./es-7zikZXTf.js";import{n as Ke,t as qe}from"./InfoTooltip-ZXU0Fc-J.js";import{i as Je,o as Ye,t as Xe}from"./FormInput-BXILr-DX.js";import{n as Ze,t as Qe}from"./useAppOrigin-BoAbcg2y.js";import{n as $e,r as et,t as tt}from"./const-Da9j5uct.js";import{n as nt,t as rt}from"./NavHeader-Bz1hPApl.js";var L,it=t((()=>{L={connected:`connected`,disconnected:`disconnected`,dormant:`dormant`,failed:`failed`,queued:`queued`,starting:`starting`}})),at,ot,st=t((()=>{Pe(),at=class{getStatus=async()=>Fe().imessageBridge.getStatus();removeConfig=async e=>Fe().imessageBridge.removeConfig({applicationId:e});start=async()=>Fe().imessageBridge.start();stop=async()=>Fe().imessageBridge.stop();testConfig=async e=>Fe().imessageBridge.testConfig(e);upsertConfig=async e=>Fe().imessageBridge.upsertConfig(e)},ot=new at})),ct,lt,ut=t((()=>{ct=e(c()),lt=(0,ct.createContext)(null)})),R,dt,ft=t((()=>{o(),C(),M(),m(),F(),R=e(c()),n(),Xe(),u(),ze(),st(),ut(),s(),p(({css:e,cssVar:t})=>({card:e`
    margin-block: 8px;
    padding: 20px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorBgContainer};
  `,headerIcon:e`
    overflow: hidden;
    flex: none;

    width: 44px;
    height: 44px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `,infoBox:e`
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: ${t.borderRadius};

    line-height: 1.6;
    color: ${t.colorTextSecondary};

    background: ${t.colorFillQuaternary};
  `,statusCard:e`
    padding: 12px;
    border-radius: ${t.borderRadiusLG};
    background: ${t.colorFillQuaternary};
  `,title:e`
    font-size: 15px;
    font-weight: 600;
  `})),dt=(0,R.memo)(()=>{let{t:e}=i(`agent`),t=e,{message:n}=oe.useApp(),r=A.useFormInstance(),a=A.useWatch(`applicationId`,r),o=a?.trim(),s=(0,R.use)(lt),{data:c,mutate:u}=l(null,()=>ot.getStatus()),d=c?.configs.find(e=>e.applicationId===o),f=d?.enabled??!1,p=d?.blueBubblesPasswordSet??!1;c?.running,c?.serverUrl;let[m,h]=(0,R.useState)(``),[g,_]=(0,R.useState)(!1),[v,y]=(0,R.useState)(``),[ee,b]=(0,R.useState)(`idle`),[x,S]=(0,R.useState)(!1),[C,w]=(0,R.useState)(!1),[te,T]=(0,R.useState)(null),E=d?.blueBubblesServerUrl;(0,R.useEffect)(()=>{!g&&E&&h(E)},[E,g]);let D=(0,R.useCallback)(async()=>{let e=await Be.getDeviceInfo();r.setFieldValue([`credentials`,`desktopDeviceId`],e.deviceId),r.validateFields([[`credentials`,`desktopDeviceId`]]).catch(()=>void 0)},[r]),O=(0,R.useCallback)(()=>{let e=r.getFieldValue([`credentials`,`webhookSecret`])?.trim();if(e)return e;let t=globalThis.crypto.randomUUID();return r.setFieldValue([`credentials`,`webhookSecret`],t),t},[r]),k=(0,R.useCallback)(e=>{let n=m.trim(),r=v.trim();if(!o)throw Error(t(`channel.imessage.bridgeMissingApplicationId`));if(!n)throw Error(t(`channel.imessage.bridgeMissingServerUrl`));if(!r&&!p)throw Error(t(`channel.imessage.bridgeMissingPassword`));return{applicationId:o,blueBubblesPassword:r||void 0,blueBubblesServerUrl:n,enabled:e,webhookSecret:O()}},[o,m,v,p,O,t]),ne=(0,R.useCallback)(async e=>{let t=k(e);await D(),await ot.upsertConfig(t),y(``),b(`idle`),await u()},[k,D,u]),re=(0,R.useCallback)(async()=>{!m.trim()&&!d||await ne(f)},[ne,m,d,f]);return(0,R.useEffect)(()=>{},[a,D,O]),(0,R.useEffect)(()=>{},[s,re]),null})})),pt,mt,ht,gt=t((()=>{M(),F(),pt=e(c()),n(),je(),mt=e(s()),ht=(0,pt.memo)(()=>{let{t:e}=i(`agent`),t=e,{message:n}=oe.useApp(),r=A.useFormInstance(),a=A.useWatch([`credentials`,`channelAccessToken`],r),[o,s]=(0,pt.useState)(!1),c=I(e=>e.lineFetchBotInfo);return(0,mt.jsx)(j,{disabled:!a?.trim(),icon:(0,mt.jsx)(_e,{size:14}),loading:o,size:`small`,style:{alignSelf:`flex-start`,marginBlockStart:4},type:`default`,onClick:async()=>{let e=a?.trim();if(!e){n.warning(t(`channel.line.fetchBotInfoMissingToken`));return}s(!0);try{let i=await c(e);r.setFieldValue(`applicationId`,i.userId),r.validateFields([`applicationId`]).catch(()=>void 0),n.success(i.displayName?`${t(`channel.line.fetchBotInfoSuccess`)} (${i.displayName})`:t(`channel.line.fetchBotInfoSuccess`))}catch(e){let r=e instanceof Error?e.message:String(e);n.error(`${t(`channel.line.fetchBotInfoFailed`)}: ${r}`)}finally{s(!1)}},children:t(`channel.line.fetchBotInfo`)})})})),z,B,_t,vt,yt=t((()=>{Ge(),M(),F(),z=e(c()),n(),De(),B=e(s()),_t=2e3,vt=(0,z.memo)(({buttonLabel:e,buttonType:t=`primary`,onAuthenticated:n,showTips:r=!0})=>{let{t:a}=i(`agent`),[o,s]=(0,z.useState)(!1),[c,l]=(0,z.useState)(),[u,d]=(0,z.useState)(``),[f,p]=(0,z.useState)(),[m,h]=(0,z.useState)(!1),g=(0,z.useRef)(!1),_=(0,z.useRef)(null),v=(0,z.useCallback)(()=>{g.current=!1,_.current&&=(clearTimeout(_.current),null)},[]),y=(0,z.useCallback)(async()=>{h(!0),p(void 0),d(``),l(void 0),v();try{let e=await Ee.wechatGetQrCode();l(e.qrcode_img_content),d(`wait`),h(!1),g.current=!0;let t=async()=>{if(g.current)try{let r=await Ee.wechatPollQrStatus(e.qrcode);if(!g.current)return;if(d(r.status),r.status===`confirmed`&&r.bot_token){v(),n({botId:r.ilink_bot_id||``,botToken:r.bot_token,userId:r.ilink_user_id||``}),s(!1);return}if(r.status===`expired`){v(),p(a(`channel.wechatQrExpired`));return}_.current=setTimeout(t,_t)}catch{g.current&&(_.current=setTimeout(t,_t))}};_.current=setTimeout(t,_t)}catch(e){p(e?.message||`Failed to get QR code`),h(!1)}},[n,v,a]),ee=(0,z.useCallback)(()=>{s(!0),y()},[y]),b=(0,z.useCallback)(()=>{v(),s(!1)},[v]),x=u===`wait`?a(`channel.wechatQrWait`):u===`scaned`?a(`channel.wechatQrScaned`):``;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{style:{alignItems:`center`,display:`flex`,flexDirection:`column`,gap:12},children:[(0,B.jsx)(j,{icon:(0,B.jsx)(ye,{size:16}),type:t,onClick:ee,children:e||a(`channel.wechatScanToConnect`)}),r&&(0,B.jsxs)(N.Text,{style:{maxWidth:480,textAlign:`center`},type:`secondary`,children:[(0,B.jsx)(We,{style:{marginInlineEnd:4}}),a(`channel.wechatTips`)]})]}),(0,B.jsx)(D,{centered:!0,footer:null,open:o,title:a(`channel.wechatScanTitle`),width:460,onCancel:b,children:(0,B.jsxs)(`div`,{style:{alignItems:`center`,display:`flex`,flexDirection:`column`,gap:16,padding:`16px 0`},children:[m&&(0,B.jsx)(ie,{size:`large`}),c&&!f&&(0,B.jsx)(ne,{size:240,value:c}),x&&!f&&(0,B.jsx)(N.Text,{type:`secondary`,children:x}),f&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(se,{showIcon:!0,message:f,type:`warning`}),(0,B.jsx)(j,{icon:(0,B.jsx)(be,{size:14}),onClick:y,children:a(`channel.wechatQrRefresh`)})]})]})})]})})})),bt,V,xt,St,Ct,wt=t((()=>{C(),m(),bt=e(c()),n(),Xe(),yt(),V=e(s()),xt=p(({css:e})=>({header:e`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-end: 16px;
  `})),St=(0,bt.memo)(({description:e,divider:t,label:n,password:r,tag:i,value:a})=>(0,V.jsx)(te,{desc:e,divider:t,label:n,minWidth:`max(50%, 400px)`,tag:i,variant:`borderless`,children:(0,V.jsx)(r?Je:Ye,{readOnly:!0,value:a||``})})),Ct=(0,bt.memo)(({currentConfig:e,onQrAuthenticated:t})=>{let{t:n}=i(`agent`),r=n,a=!!e.applicationId&&e.applicationId!==e.credentials.botId;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:xt.header,children:[(0,V.jsxs)(d,{gap:4,children:[(0,V.jsx)(`div`,{style:{fontSize:16,fontWeight:600},children:r(`channel.wechatConnectedInfo`)}),(0,V.jsx)(`div`,{style:{color:`var(--ant-color-text-secondary)`,fontSize:13},children:r(`channel.wechatManagedCredentials`)})]}),t&&(0,V.jsx)(vt,{buttonLabel:r(`channel.wechatRebind`),buttonType:`default`,showTips:!1,onAuthenticated:t})]}),(0,V.jsx)(T,{showIcon:!0,message:r(`channel.wechatIdleNotice`),style:{marginBlockEnd:16},type:`info`}),a&&(0,V.jsx)(St,{description:r(`channel.applicationIdHint`),label:r(`channel.applicationId`),tag:`applicationId`,value:e.applicationId}),!1]})})})),Tt,Et,Dt,Ot=t((()=>{Tt=e(c()),wt(),yt(),Et=e(s()),Dt=(0,Tt.memo)(({currentConfig:e,hasConfig:t,onAuthenticated:n})=>{let r=(0,Tt.useCallback)(e=>{let t=e.botToken?.trim();if(!e.botId&&!t)return;let r=e.botId||t?.slice(0,16)||``;n?.({applicationId:r,credentials:{botId:e.botId,botToken:e.botToken,userId:e.userId}})},[n]);return t&&e?(0,Et.jsx)(Ct,{currentConfig:e,onQrAuthenticated:r}):n?(0,Et.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:`16px 0`},children:(0,Et.jsx)(vt,{onAuthenticated:r})}):null})})),kt,At,jt=t((()=>{ft(),gt(),Ot(),kt={wechat:Dt},At={imessage:dt,line:ht}})),Mt,Nt,Pt,Ft,It,Lt,Rt=t((()=>{Mt=new Set([`allowFrom`,`groupAllowFrom`]),Nt=e=>typeof e==`string`?e.split(/[\s,]+/).map(e=>e.trim()).filter(Boolean).map(e=>({id:e})):Array.isArray(e)?e.map(e=>{if(typeof e==`string`)return{id:e.trim()};if(e&&typeof e==`object`&&`id`in e){let t=String(e.id??``).trim(),n=e.name,r=typeof n==`string`?n:void 0;return r?{id:t,name:r}:{id:t}}return{id:``}}).filter(e=>e.id):[],Pt=e=>Object.fromEntries(Object.entries(e||{}).map(([e,t])=>[e,Mt.has(e)?Nt(t):t??void 0])),Ft=e=>({applicationId:e.applicationId||``,credentials:e.credentials||{},settings:Pt(e.settings)}),It=e=>{let t=e?.find(e=>e.key===`settings`);if(!t?.properties)return{};let n={};for(let e of t.properties){if(e.type===`object`&&e.properties){for(let t of e.properties)t.default!==void 0&&(n[t.key]=t.default);continue}e.default!==void 0&&(n[e.key]=e.default)}return n},Lt=(e,t)=>({...It(e),...t})}));function zt(e,t){let n=[];return e.required&&n.push({message:t(e.label),required:!0}),(e.type===`number`||e.type===`integer`)&&(typeof e.minimum==`number`&&n.push({message:`${t(e.label)} ≥ ${e.minimum}`,min:e.minimum,type:`number`}),typeof e.maximum==`number`&&n.push({message:`${t(e.label)} ≤ ${e.maximum}`,max:e.maximum,type:`number`})),n.length>0?n:void 0}function Bt(e,t){let n=e.find(e=>e.key===t);return n?.properties?n.properties.filter(e=>!e.devOnly||!1).flatMap(e=>e.type===`object`&&e.properties?e.properties.filter(e=>!e.devOnly||!1):e):[]}var H,U,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt=t((()=>{C(),M(),m(),F(),H=e(c()),n(),Xe(),Ke(),a(),jt(),Rt(),U=e(s()),Vt=`ant`,Ht=p(({css:e})=>({form:e`
    .${Vt}-form-item-control {
      flex: 0 0 50% !important;
      width: 50%;
    }
  `})),Ut=(0,H.memo)(({field:e,parentKey:t,divider:n})=>{let{t:r}=i(`agent`),a=r,o=A.useWatch(e.visibleWhen?[t,e.visibleWhen.field]:[]);if(e.visibleWhen&&o!==e.visibleWhen.value)return null;let s=e.tooltip?(0,U.jsx)(qe,{size:`small`,title:a(e.tooltip)}):null,c=s||e.devOnly?(0,U.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[a(e.label),s,e.devOnly&&(0,U.jsx)(S,{color:`gold`,children:`Dev Only`})]}):a(e.label);if(e.type===`array`&&e.items?.type===`object`)return(0,U.jsx)(Wt,{divider:n,field:e,label:c,parentKey:t});let l;switch(e.type){case`password`:l=(0,U.jsx)(Je,{autoComplete:`new-password`,placeholder:e.placeholder?a(e.placeholder):void 0});break;case`boolean`:l=(0,U.jsx)(ae,{});break;case`number`:case`integer`:l=(0,U.jsx)(k,{max:e.maximum,min:e.minimum,placeholder:e.placeholder?a(e.placeholder):void 0,style:{width:`100%`}});break;case`string`:if(e.enum){let t=e.enumDescriptions?.some(Boolean);l=(0,U.jsx)(O,{placeholder:e.placeholder?a(e.placeholder):void 0,optionRender:t?e=>(0,U.jsxs)(d,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,U.jsx)(`span`,{children:e.label}),e.data.description?(0,U.jsx)(_,{fontSize:12,type:`secondary`,children:e.data.description}):null]}):void 0,options:e.enum.map((t,n)=>({description:e.enumDescriptions?.[n]?a(e.enumDescriptions[n]):void 0,label:e.enumLabels?.[n]?a(e.enumLabels[n]):t,value:t}))})}else l=(0,U.jsx)(Ye,{placeholder:e.placeholder?a(e.placeholder):a(e.label)});break;default:l=(0,U.jsx)(Ye,{placeholder:e.placeholder?a(e.placeholder):a(e.label)})}return(0,U.jsx)(te,{desc:e.description?a(e.description):void 0,divider:n,initialValue:e.default,label:c,minWidth:`max(50%, 400px)`,name:[t,e.key],rules:zt(e,a),tag:void 0,valuePropName:e.type===`boolean`?`checked`:void 0,variant:`borderless`,children:l})}),Wt=(0,H.memo)(({field:e,parentKey:t,divider:n,label:r})=>{let{t:a}=i(`agent`),o=a,s=e.items?.type===`object`?e.items.properties??[]:[],c=o(`${e.label}Add`),l=o(`${e.label}Empty`),u=o(`channel.allowListRemove`);return(0,U.jsx)(te,{desc:e.description?o(e.description):void 0,divider:n,label:r,minWidth:`max(50%, 400px)`,tag:void 0,variant:`borderless`,children:(0,U.jsx)(A.List,{initialValue:e.default,name:[t,e.key],children:(e,{add:t,remove:n})=>(0,U.jsxs)(d,{gap:8,style:{width:`100%`},children:[e.length===0&&(0,U.jsx)(d,{style:{fontSize:12,opacity:.6,paddingBlock:4},children:l}),e.map(({key:e,name:t})=>(0,U.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[s.map(e=>(0,U.jsx)(`div`,{style:{flex:1,minWidth:0},children:(0,U.jsx)(A.Item,{noStyle:!0,name:[t,e.key],rules:e.required?[{message:o(e.label),required:!0,whitespace:!0}]:void 0,children:(0,U.jsx)(Ye,{placeholder:e.placeholder?o(e.placeholder):o(e.label)})})},e.key)),(0,U.jsx)(j,{"aria-label":u,icon:(0,U.jsx)(ge,{size:14}),type:`text`,onClick:()=>n(t)})]},e)),(0,U.jsx)(j,{block:!0,icon:(0,U.jsx)(he,{size:14}),type:`dashed`,onClick:()=>t({id:``,name:``}),children:c})]})})})}),Gt=(0,H.memo)(({field:e,divider:t})=>{let{t:n}=i(`agent`),r=n;return(0,U.jsx)(te,{desc:e.description?r(e.description):void 0,divider:t,initialValue:e.default,label:r(e.label),minWidth:`max(50%, 400px)`,name:`applicationId`,rules:e.required?[{message:r(e.label),required:!0}]:void 0,tag:void 0,variant:`borderless`,children:(0,U.jsx)(Ye,{placeholder:e.placeholder?r(e.placeholder):r(e.label)})})}),Kt=(0,H.memo)(({schema:e})=>{let{t}=i(`agent`),n=t,r=e.find(e=>e.key===`settings`);return(0,U.jsx)(U.Fragment,{children:r?n(r.label):null})}),qt=(0,H.memo)(({platformDef:e,form:t,hasConfig:n,currentConfig:r,onAuthenticated:a})=>{let{t:o}=i(`agent`),s=o,c=kt[e.id],l=At[e.id],u=(0,H.useMemo)(()=>Bt(e.schema,`credentials`),[e.schema]),d=(0,H.useMemo)(()=>Bt(e.schema,`settings`),[e.schema]),f=(0,H.useMemo)(()=>{if(!n||!d.some(e=>e.key===`userId`))return!1;let e=r?.settings?.userId;return!(typeof e==`string`&&e.trim())},[n,d,r?.settings]),[p,m]=(0,H.useState)(f),h=(0,H.useCallback)(()=>{t.setFieldsValue({settings:It(e.schema)})},[t,e.schema]);return(0,U.jsxs)(x,{className:Ht.form,form:t,gap:0,itemMinWidth:`max(50%, 400px)`,requiredMark:!1,style:{maxWidth:1024,padding:`16px 0`,width:`100%`},variant:`borderless`,children:[c?(0,U.jsx)(c,{currentConfig:r,hasConfig:n,onAuthenticated:a}):(0,U.jsxs)(U.Fragment,{children:[e.schema.filter(e=>e.key===`applicationId`||e.key===`credentials`).map((e,t)=>{let n=t>0;return e.key===`applicationId`?(0,U.jsx)(Gt,{divider:n,field:e},`applicationId`):(0,U.jsx)(H.Fragment,{children:u.map((e,t)=>(0,U.jsx)(Ut,{divider:n||t!==0,field:e,parentKey:`credentials`},e.key))},`credentials`)}),l&&(0,U.jsx)(l,{})]}),d.length>0&&(0,U.jsx)(b,{collapsible:!0,defaultActive:f,keyValue:`settings-${e.id}`,style:{marginBlockStart:16},title:(0,U.jsx)(Kt,{schema:e.schema}),variant:`borderless`,extra:p?(0,U.jsx)(re,{title:s(`channel.settingsResetConfirm`),onConfirm:h,children:(0,U.jsx)(j,{icon:(0,U.jsx)(pe,{size:14}),size:`small`,type:`default`,children:s(`channel.settingsResetDefault`)})}):void 0,onCollapse:m,children:d.map((e,t)=>(0,U.jsx)(Ut,{divider:t!==0,field:e,parentKey:`settings`},e.key))})]})})})),Yt,W,Xt,Zt,Qt=t((()=>{C(),M(),m(),F(),Yt=e(c()),n(),Qe(),W=e(s()),Xt=p(({css:e,cssVar:t})=>({actionBar:e`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block-start: 16px;
  `,bottom:e`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    max-width: 1024px;
  `,webhookBox:e`
    overflow: hidden;
    flex: 1;

    height: ${t.controlHeight};
    padding-inline: 12px;
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadius};

    font-family: monospace;
    font-size: 13px;
    line-height: ${t.controlHeight};
    color: ${t.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;

    background: ${t.colorFillQuaternary};
  `})),Zt=(0,Yt.memo)(({platformDef:e,currentConfig:t,form:n,hasConfig:a,connectResult:o,connecting:s,saveResult:c,saving:l,testing:u,testResult:f,onSave:p,onDelete:m,onTestConnection:h,onCopied:g})=>{let{t:_}=i(`agent`),v=Ze(),y=e.id,ee=A.useWatch(`applicationId`,n),b=A.useWatch([`settings`,`connectionMode`],n),x=e.showWebhookUrl||b===`webhook`,C=(0,Yt.useMemo)(()=>e.schema.find(e=>e.key===`settings`)?.properties?.some(e=>e.key===`userId`)??!1,[e.schema]),w=A.useWatch([`settings`,`userId`],n),te=t?.settings?.userId,[E,D]=(0,Yt.useState)(!1);(0,Yt.useEffect)(()=>{w!==void 0&&D(!0)},[w]);let O=E?w:te,k=a&&C&&!(typeof O==`string`&&O.trim()),ne=ee?`${v}/api/agent/webhooks/${y}/${ee}`:`${v}/api/agent/webhooks/${y}`;return(0,W.jsxs)(`div`,{className:Xt.bottom,children:[(0,W.jsxs)(`div`,{className:Xt.actionBar,children:[a?(0,W.jsx)(j,{danger:!0,disabled:l||s,icon:(0,W.jsx)(ge,{size:16}),type:`primary`,onClick:m,children:_(`channel.removeChannel`)}):(0,W.jsx)(`div`,{}),(0,W.jsxs)(d,{horizontal:!0,gap:12,children:[a&&(0,W.jsx)(j,{disabled:l||s,icon:(0,W.jsx)(be,{size:16}),loading:u,onClick:h,children:_(`channel.testConnection`)}),(0,W.jsx)(j,{icon:(0,W.jsx)(de,{size:16}),loading:l||s,type:`primary`,onClick:p,children:_(s?`channel.connecting`:`channel.save`)})]})]}),c&&(0,W.jsx)(T,{closable:!0,showIcon:!0,description:c.type===`error`?c.errorDetail:void 0,title:c.type===`success`?_(`channel.saved`):_(`channel.saveFailed`),type:c.type}),o&&(0,W.jsx)(T,{closable:!0,showIcon:!0,description:o.type===`error`?o.errorDetail:void 0,type:o.type,title:o.title||(o.type===`success`?_(`channel.connectSuccess`):_(`channel.connectFailed`))}),f&&(0,W.jsx)(T,{closable:!0,showIcon:!0,description:f.type===`error`?f.errorDetail:void 0,type:f.type,title:f.type===`success`?_(`channel.testSuccess`):_(`channel.testFailed`)}),k&&(0,W.jsx)(T,{closable:!0,showIcon:!0,description:_(`channel.userIdMissingDesc`),message:_(`channel.userIdMissingTitle`),type:`info`}),a&&x&&y===`qq`&&(0,W.jsx)(T,{closable:!0,showIcon:!0,description:_(`channel.qq.webhookMigrationDesc`),message:_(`channel.qq.webhookMigrationTitle`),type:`info`}),a&&x&&y===`slack`&&(0,W.jsx)(T,{closable:!0,showIcon:!0,description:_(`channel.slack.webhookMigrationDesc`),message:_(`channel.slack.webhookMigrationTitle`),type:`info`}),a&&x&&(y===`feishu`||y===`lark`)&&(0,W.jsx)(T,{closable:!0,showIcon:!0,description:_(`channel.feishu.webhookMigrationDesc`),message:_(`channel.feishu.webhookMigrationTitle`),type:`info`}),a&&x&&(0,W.jsxs)(d,{gap:8,children:[(0,W.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,W.jsx)(`span`,{style:{fontWeight:600},children:_(`channel.endpointUrl`)}),(0,W.jsx)(S,{children:`Event Subscription URL`})]}),(0,W.jsxs)(d,{horizontal:!0,gap:8,children:[(0,W.jsx)(`div`,{className:Xt.webhookBox,children:ne}),(0,W.jsx)(j,{onClick:()=>{navigator.clipboard.writeText(ne),g()},children:_(`channel.copy`)})]}),(0,W.jsx)(T,{showIcon:!0,type:`info`,message:(0,W.jsx)(r,{components:{bold:(0,W.jsx)(`strong`,{})},i18nKey:`channel.endpointUrlHint`,ns:`agent`,values:{fieldName:`Event Subscription URL`,name:e.name}})})]})]})})})),$t,G,en,tn,nn=t((()=>{C(),M(),F(),$t=e(c()),n(),Ke(),it(),et(),G=e(s()),en={[L.connected]:`success`,[L.dormant]:`warning`,[L.failed]:`error`,[L.queued]:`processing`,[L.starting]:`processing`},tn=(0,$t.memo)(({platformDef:e,currentConfig:t,enabledValue:n,onRefreshStatus:r,onToggleEnable:a,refreshingStatus:o,runtimeStatus:s,toggleLoading:c})=>{let{t:l}=i(`agent`),u=$e(e.name),f=u&&`Color`in u?u.Color:u,p=n??t?.enabled,m=(()=>{switch(s){case L.connected:return l(`channel.statusConnected`);case L.failed:return l(`channel.statusFailed`);case L.queued:return l(`channel.statusQueued`);case L.starting:return l(`channel.statusStarting`);case L.dormant:return l(`channel.statusDormant`);case L.disconnected:return l(`channel.statusDisconnected`);default:return}})(),h=s?en[s]:void 0;return(0,G.jsxs)(d,{horizontal:!0,align:`center`,justify:`space-between`,style:{borderBottom:`1px solid var(--ant-color-border)`,maxWidth:1024,padding:`16px 0`,width:`100%`},children:[(0,G.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[f&&(0,G.jsx)(f,{size:32}),e.name,m&&(0,G.jsx)(S,{color:h,size:`small`,children:m}),r&&t?.enabled&&(0,G.jsx)(E,{icon:be,loading:o,size:`small`,title:l(`channel.refreshStatus`),onClick:r}),e.documentation?.setupGuideUrl&&(0,G.jsx)(`a`,{href:e.documentation.setupGuideUrl,rel:`noopener noreferrer`,target:`_blank`,children:(0,G.jsx)(qe,{title:l(`channel.setupGuide`)})}),e.documentation?.portalUrl&&(0,G.jsx)(`a`,{href:e.documentation.portalUrl,rel:`noopener noreferrer`,target:`_blank`,children:(0,G.jsx)(j,{icon:(0,G.jsx)(fe,{size:14}),size:`small`,type:`link`,children:l(`channel.openPlatform`)})})]}),(0,G.jsx)(d,{horizontal:!0,align:`center`,gap:8,children:t&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`span`,{style:{color:`var(--ant-color-text-secondary)`,fontSize:14},children:l(p?`channel.enabled`:`channel.disabled`)}),(0,G.jsx)(ae,{checked:p,loading:c,onChange:a})]})})]})})})),K,rn,an,on,sn,cn=t((()=>{Ce(),M(),m(),K=e(c()),n(),De(),je(),it(),Jt(),Qt(),Rt(),nn(),ut(),rn=e(s()),an=p(({css:e,cssVar:t})=>({main:e`
    position: relative;

    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;

    padding: 24px;

    background: ${t.colorBgContainer};
  `})),on=e=>Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0)),sn=(0,K.memo)(({platformDef:e,agentId:t,currentConfig:n,runtimeStatus:r})=>{let{t:a}=i(`agent`),{message:o}=oe.useApp(),[s]=A.useForm(),[c,l,u,d,f,p]=I(e=>[e.createBotProvider,e.deleteBotProvider,e.updateBotProvider,e.connectBot,e.testConnection,e.refreshBotRuntimeStatus]),[m,h]=(0,K.useState)(!1),[g,_]=(0,K.useState)(!1),[v,y]=(0,K.useState)(),[ee,b]=(0,K.useState)(),[x,S]=(0,K.useState)(),[C,w]=(0,K.useState)(!1),[te,T]=(0,K.useState)(!1),[E,D]=(0,K.useState)(),[O,k]=(0,K.useState)(r),[ne,re]=(0,K.useState)(!1),j=(0,K.useRef)(null),ie=(0,K.useRef)(null),ae=(0,K.useMemo)(()=>({register:e=>{ie.current=e}}),[]),M=(0,K.useCallback)(()=>{j.current&&=(clearTimeout(j.current),null)},[]),se=(0,K.useCallback)((e,t)=>{switch(e.status){case L.connected:return t?.showConnected?{title:a(`channel.connectSuccess`),type:`success`}:void 0;case L.failed:return{errorDetail:e.errorMessage,title:a(`channel.connectFailed`),type:`error`};case L.queued:return{title:a(`channel.connectQueued`),type:`info`};case L.starting:return{title:a(`channel.connectStarting`),type:`info`};default:return}},[a]),N=(0,K.useCallback)(async(e,t)=>{M();let n=await Ee.getRuntimeStatus(e);k(n.status);let r=se(n,{showConnected:t?.showConnected});r?S(r):n.status===L.disconnected&&S(void 0),t?.poll&&(n.status===L.queued||n.status===L.starting)&&(j.current=setTimeout(()=>{N(e,t)},2e3))},[se,M]),P=(0,K.useCallback)(async n=>{_(!0);try{let{status:r}=await d({agentId:t,applicationId:n,platform:e.id});S({title:a(r===`queued`?`channel.connectQueued`:`channel.connectStarting`),type:`info`}),await N({applicationId:n,platform:e.id},{poll:!0,showConnected:!0})}catch(e){S({errorDetail:e?.message||String(e),type:`error`})}finally{_(!1)}},[t,d,e.id,N,a]),ce=(0,K.useCallback)(async()=>{if(n?.enabled){re(!0);try{let e=await p({agentId:t,applicationId:n.applicationId,platform:n.platform});k(e.status);let r=se(e,{showConnected:!0});r?S(r):e.status===L.disconnected&&S(void 0)}catch(e){o.error(e?.message||String(e))}finally{re(!1)}}},[t,n,se,o,p]);(0,K.useEffect)(()=>{s.resetFields(),b(void 0),S(void 0),D(void 0),M()},[e.id,s,M]),(0,K.useEffect)(()=>{k(r)},[r]),(0,K.useEffect)(()=>{n&&s.setFieldsValue(Ft(n))},[n,s]),(0,K.useEffect)(()=>{if(!n){y(void 0),w(!1);return}v===n.enabled&&y(void 0)},[n,v]),(0,K.useEffect)(()=>{if(!n?.enabled){M(),S(void 0),k(void 0);return}return N({applicationId:n.applicationId,platform:n.platform},{poll:!0,showConnected:!1}),()=>{M()}},[n,M,N]);let le=(0,K.useCallback)(async()=>{try{await s.validateFields();let r=s.getFieldsValue(!0);h(!0),b(void 0),S(void 0);let{applicationId:i,credentials:a={},settings:o={}}=r,l=Object.fromEntries(Object.entries(a).filter(([,e])=>e!==void 0&&e!==``)),d=Lt(e.schema,on(o)),f=i||``;if(!f&&l.botToken){let e=l.botToken.indexOf(`:`);e!==-1&&(f=l.botToken.slice(0,e))}n?await u(n.id,t,{applicationId:f,credentials:l,settings:d}):await c({agentId:t,applicationId:f,credentials:l,platform:e.id,settings:d}),await ie.current?.({applicationId:f}),b({type:`success`}),setTimeout(()=>b(void 0),3e3),h(!1),await P(f)}catch(e){if(e?.errorFields)return;console.error(e),b({errorDetail:e?.message||String(e),type:`error`}),h(!1)}},[t,e,s,n,c,u,P]),ue=(0,K.useCallback)(async r=>{h(!0),b(void 0),S(void 0);try{let{applicationId:i,credentials:l}=r,d=Lt(e.schema,on(s.getFieldValue(`settings`)||{}));n?await u(n.id,t,{applicationId:i,credentials:l,settings:d}):await c({agentId:t,applicationId:i,credentials:l,platform:e.id,settings:d}),b({type:`success`}),o.success(a(`channel.saved`)),await P(i)}catch(e){b({errorDetail:e?.message||String(e),type:`error`})}finally{h(!1)}},[t,e,s,n,c,u,P,o,a]),de=(0,K.useCallback)(async()=>{n&&we({content:a(`channel.deleteConfirmDesc`),okButtonProps:{danger:!0},onOk:async()=>{try{await l(n.id,t),o.success(a(`channel.removed`)),s.resetFields()}catch{o.error(a(`channel.removeFailed`))}},title:a(`channel.deleteConfirm`)})},[n,t,l,o,a,s]),fe=(0,K.useCallback)(async e=>{if(n)try{y(e),w(!0),await u(n.id,t,{enabled:e}),w(!1),e&&await P(n.applicationId)}catch{y(void 0),w(!1),o.error(a(`channel.updateFailed`))}},[n,t,u,P,o,a]),pe=(0,K.useCallback)(async()=>{if(!n){o.warning(a(`channel.saveFirstWarning`));return}T(!0),D(void 0);try{await f({applicationId:n.applicationId,platform:e.id}),D({type:`success`})}catch(e){D({errorDetail:e?.message||String(e),type:`error`})}finally{T(!1)}},[n,e.id,f,o,a]);return(0,rn.jsx)(lt,{value:ae,children:(0,rn.jsxs)(`main`,{className:an.main,children:[(0,rn.jsx)(tn,{currentConfig:n,enabledValue:v,platformDef:e,refreshingStatus:ne,runtimeStatus:O,toggleLoading:C,onRefreshStatus:ce,onToggleEnable:fe}),(0,rn.jsx)(qt,{currentConfig:n,form:s,hasConfig:!!n,platformDef:e,onAuthenticated:ue}),(0,rn.jsx)(Zt,{connectResult:x,connecting:g,currentConfig:n,form:s,hasConfig:!!n,platformDef:e,saveResult:ee,saving:m,testResult:E,testing:te,onCopied:()=>o.success(a(`channel.copied`)),onDelete:de,onSave:le,onTestConnection:pe})]})})})})),ln,q,un,dn,fn=t((()=>{C(),m(),ln=e(c()),n(),et(),q=e(s()),un=p(({css:e,cssVar:t})=>({desc:e`
    max-width: 360px;

    font-size: 14px;
    line-height: 1.6;
    color: ${t.colorTextSecondary};
    text-align: center;
  `,header:e`
    width: 100%;
    max-width: 1024px;
    padding-block: 16px;
    border-block-end: 1px solid ${t.colorBorder};
  `,main:e`
    position: relative;

    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;

    padding: 24px;

    background: ${t.colorBgContainer};
  `,placeholder:e`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 1024px;
    padding-block: 48px;
  `,title:e`
    font-size: 18px;
    font-weight: 500;
    color: ${t.colorText};
  `})),dn=(0,ln.memo)(({platformDef:e})=>{let{t}=i(`agent`),n=$e(e.name),r=n&&`Color`in n?n.Color:n;return(0,q.jsxs)(`main`,{className:un.main,children:[(0,q.jsxs)(d,{horizontal:!0,align:`center`,className:un.header,gap:8,children:[r&&(0,q.jsx)(r,{size:32}),e.name,(0,q.jsx)(S,{size:`small`,children:t(`channel.comingSoon`)})]}),(0,q.jsxs)(`div`,{className:un.placeholder,children:[r&&(0,q.jsx)(r,{size:64}),(0,q.jsx)(`div`,{className:un.title,children:t(`channel.comingSoonTitle`,{name:e.name})}),(0,q.jsx)(`div`,{className:un.desc,children:t(`channel.comingSoonDesc`)})]})]})})})),pn,J,mn,Y,hn,gn,_n=t((()=>{C(),y(),m(),F(),pn=e(c()),n(),ue(),Re(),Ve(),J=e(s()),mn=`messenger-promo-v1`,Y=p(({css:e,cssVar:t})=>({card:e`
    cursor: pointer;

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-block: 0 8px;
    margin-inline: 12px;
    padding: 12px;
    border: 1px solid ${t.colorFillSecondary};
    border-radius: 12px;

    background: color-mix(in srgb, ${t.colorFillQuaternary} 50%, ${t.colorBgContainer});

    transition: background 0.2s;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,closeButton:e`
    position: absolute;
    z-index: 1;
    inset-block-start: 4px;
    inset-inline-end: 4px;
  `,desc:e`
    font-size: 11px;
    line-height: 1.5;
    color: ${t.colorTextTertiary};
  `,iconRow:e`
    display: flex;
    gap: 6px;
    align-items: center;
  `,title:e`
    font-size: 13px;
    font-weight: 500;
    color: ${t.colorText};
  `})),hn=16,gn=(0,pn.memo)(()=>{let{t:e}=i(`agent`),t=le(),n=Le(Ie.isBannerDismissed(mn)),r=Le(e=>e.updateSystemStatus),a=(0,pn.useCallback)(()=>{t(`/settings/messenger`)},[t]),o=(0,pn.useCallback)(e=>{e.stopPropagation();let t=Le.getState().status.dismissedBannerIds||[];t.includes(mn)||r({dismissedBannerIds:[...t,mn]})},[r]);return n?null:(0,J.jsxs)(`div`,{className:Y.card,onClick:a,children:[(0,J.jsx)(`div`,{className:Y.closeButton,children:(0,J.jsx)(E,{icon:Se,size:`small`,title:e(`channel.messengerPromo.dismiss`),onClick:o})}),(0,J.jsxs)(`div`,{className:Y.iconRow,children:[(0,J.jsx)(ee.Color,{size:hn}),(0,J.jsx)(v.Color,{size:hn}),(0,J.jsx)(w.Color,{size:hn})]}),(0,J.jsx)(`div`,{className:Y.title,children:e(`channel.messengerPromo.title`)}),(0,J.jsx)(`div`,{className:Y.desc,children:e(`channel.messengerPromo.desc`)})]})}),gn.displayName=`MessengerPromo`})),X,Z,vn,yn,bn=t((()=>{Ne(),C(),Ce(),M(),m(),F(),X=e(c()),n(),je(),it(),et(),_n(),Z=e(s()),vn=p(({css:e,cssVar:t})=>({item:e`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;

    width: 100%;
    padding-block: 10px;
    padding-inline: 12px;
    border: none;
    border-radius: ${t.borderRadius};

    color: ${t.colorTextSecondary};
    text-align: start;

    background: transparent;

    transition: all 0.2s;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillTertiary};
    }

    &.active {
      font-weight: 500;
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }
  `,list:e`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 4px;

    padding: 12px;
    padding-block-start: 16px;
  `,root:e`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    width: 260px;
    border-inline-end: 1px solid ${t.colorBorder};
  `,statusDot:e`
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background: ${t.colorSuccess};
    box-shadow: 0 0 0 1px ${t.colorBgContainer};
  `})),yn=(0,X.memo)(({platforms:e,activeId:t,agentId:n,onSelect:r,providers:a,runtimeStatuses:o})=>{let{t:s}=i(`agent`),c=h(),{message:l}=oe.useApp(),u=(0,X.useRef)(null),d=I(e=>e.deleteAllBotProviders),p=I(e=>e.createBotProvider),m=I(e=>e.connectBot),_=(0,X.useCallback)(()=>{a?.length&&Me(a.map(({id:e,...t})=>t),`lobehub-channels-${n}.json`)},[a,n]),v=(0,X.useCallback)(()=>{u.current?.click()},[]),y=(0,X.useCallback)(async e=>{let t=e.target.files?.[0];if(t)try{let e=await t.text(),r=JSON.parse(e);if(!Array.isArray(r)){l.error(s(`channel.importInvalidFormat`));return}for(let e of r)if(!e.platform||!e.applicationId||!e.credentials){l.error(s(`channel.importInvalidFormat`));return}for(let e of r)await p({agentId:n,applicationId:e.applicationId,credentials:e.credentials,platform:e.platform,settings:e.settings??void 0}),e.enabled&&await m({agentId:n,applicationId:e.applicationId,platform:e.platform});l.success(s(`channel.importSuccess`))}catch{l.error(s(`channel.importFailed`))}finally{e.target.value=``}},[n,m,p,l,s]),ee=(0,X.useCallback)(()=>{a?.length&&we({content:s(`channel.deleteAllConfirmDesc`),okButtonProps:{danger:!0},okText:s(`channel.deleteAllChannels`),onOk:async()=>{try{await d(n),l.success(s(`channel.deleteAllSuccess`))}catch{l.error(s(`channel.deleteAllFailed`))}},title:s(`channel.deleteAllConfirm`)})},[n,d,l,a,s]),b=!!a?.length,x=[{icon:(0,Z.jsx)(g,{icon:_e,size:`small`}),key:`export`,disabled:!b,label:s(`channel.exportConfig`),onClick:_},{icon:(0,Z.jsx)(g,{icon:me,size:`small`}),key:`import`,label:s(`channel.importConfig`),onClick:v},{type:`divider`},{danger:!0,disabled:!b,icon:(0,Z.jsx)(g,{icon:ge,size:`small`}),key:`deleteAll`,label:s(`channel.deleteAllChannels`),onClick:ee}],C=e=>{switch(e){case L.connected:return c.colorSuccess;case L.failed:return c.colorError;case L.queued:case L.starting:return c.colorInfo;case L.dormant:return c.colorWarning;case L.disconnected:return c.colorTextQuaternary;default:return}},w=e=>{switch(e){case L.connected:return s(`channel.connectSuccess`);case L.failed:return s(`channel.connectFailed`);case L.queued:return s(`channel.connectQueued`);case L.starting:return s(`channel.connectStarting`);case L.dormant:return s(`channel.statusDormant`);case L.disconnected:return s(`channel.runtimeDisconnected`);default:return}};return(0,Z.jsxs)(`aside`,{className:vn.root,children:[(0,Z.jsxs)(`div`,{className:vn.list,children:[(0,Z.jsx)(`input`,{accept:`.json`,ref:u,style:{display:`none`},type:`file`,onChange:y}),e.map(e=>{let n=$e(e.name),i=n&&`Color`in n?n.Color:n,a=e.comingSoon?void 0:o.get(e.id),c=C(a),l=w(a);return(0,Z.jsxs)(`button`,{className:f(vn.item,t===e.id&&`active`),onClick:()=>r(e.id),children:[i&&(0,Z.jsx)(i,{size:20}),(0,Z.jsx)(`span`,{style:{flex:1},children:e.name}),e.comingSoon&&(0,Z.jsx)(S,{size:`small`,style:{marginInlineEnd:0},children:s(`channel.comingSoon`)}),a&&(0,Z.jsx)(`div`,{className:vn.statusDot,style:{background:c},title:l})]},e.id)})]}),(0,Z.jsx)(gn,{}),(0,Z.jsxs)(`div`,{style:{alignItems:`center`,borderTop:`1px solid ${c.colorBorder}`,display:`flex`,justifyContent:`space-between`,padding:12},children:[(0,Z.jsxs)(`a`,{href:`https://lobehub.com/docs/usage/channels/overview`,rel:`noopener noreferrer`,target:`_blank`,style:{alignItems:`center`,color:c.colorTextSecondary,display:`flex`,fontSize:12,gap:4},children:[(0,Z.jsx)(g,{icon:ve,size:`small`}),` `,s(`channel.documentation`)]}),(0,Z.jsx)(P,{menu:{items:x},trigger:[`click`],children:(0,Z.jsx)(`button`,{style:{background:`transparent`,border:`none`,borderRadius:4,color:c.colorTextQuaternary,cursor:`pointer`,display:`flex`,padding:4},children:(0,Z.jsx)(g,{icon:xe,size:`small`})})})]})]})})})),Q,$,xn,Sn;t((()=>{C(),m(),Q=e(c()),ue(),Ue(),nt(),je(),ke(),Te(),it(),et(),cn(),fn(),bn(),$=e(s()),xn=p(({css:e})=>({container:e`
    overflow: hidden;
    display: flex;
    flex: 1;

    width: 100%;
    height: 100%;
  `})),Sn=(0,Q.memo)(()=>{let{aid:e}=ce(),[t,n]=(0,Q.useState)(``),{data:r,isLoading:i}=I(e=>e.useFetchPlatformDefinitions()),{data:a,isLoading:o}=I(t=>t.useFetchBotProviders(e)),s=I(e=>e.triggerRefreshAllBotStatuses),c=Ae(Oe.enableImessage);(0,Q.useEffect)(()=>{e&&s(e)},[e,s]);let l=i||o,u=(0,Q.useMemo)(()=>{let e=c?tt.filter(e=>e.id!==`imessage`):tt,t=new Set(e.map(e=>e.id));return[...(r??[]).filter(e=>!t.has(e.id)),...e]},[r,c]),f=t||u[0]?.id||``,p=(0,Q.useMemo)(()=>new Map((a??[]).filter(e=>e.enabled).map(e=>[e.platform,e.runtimeStatus??L.disconnected])),[a]),m=(0,Q.useMemo)(()=>u.find(e=>e.id===f)||u[0],[u,f]),h=(0,Q.useMemo)(()=>a?.find(e=>e.platform===f),[a,f]);return e?(0,$.jsxs)(d,{flex:1,height:`100%`,children:[(0,$.jsx)(rt,{}),(0,$.jsxs)(d,{flex:1,style:{overflowY:`auto`},children:[l&&(0,$.jsx)(He,{debugId:`ChannelPage`}),!l&&u.length>0&&m&&(0,$.jsxs)(`div`,{className:xn.container,children:[(0,$.jsx)(yn,{activeId:f,agentId:e,platforms:u,providers:a,runtimeStatuses:p,onSelect:n}),m.comingSoon?(0,$.jsx)(dn,{platformDef:m}):(0,$.jsx)(sn,{agentId:e,currentConfig:h,platformDef:m,runtimeStatus:p.get(m.id)})]})]})]}):null})}))();export{Sn as default};