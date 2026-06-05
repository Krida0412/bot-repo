import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{qt as n}from"../i18n/i18n-zh-CN-CbR0_Rok.js";import{dt as r,pt as i}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{Fa as a,Rr as o,na as s,ro as c,vl as l,yl as u}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as d,Ba as f,Ia as p,J as m,Ma as h,da as g,dn as _,za as v}from"./imperative-Xfjd337A.js";import{Er as ee,Na as y,Os as b,Yi as x,a as S,cs as C,ha as w,k as T,n as E,ws as D}from"./es-2ZVhpwv7.js";import{Bo as te,Wu as ne,Xu as re,bn as ie,dt as O,ed as ae,if as oe,mn as se,vt as k}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{n as ce,s as le}from"./base-ui-CG2gzEWh.js";import{n as A,s as j}from"./client-C0dgA5Xe.js";import{n as ue,t as M}from"./system-Cmws3U-F.js";import{i as N,t as de}from"./electron-BTFW9gEx.js";import{i as fe,n as P,r as pe,t as me}from"./deviceCwd-BOtNvJFQ.js";import{n as he,t as ge}from"./SettingHeader-DpvPmWpm.js";var F,I,L=t((()=>{s(),ee(),E(),O(),F=e(l()),I=(e,t=18)=>{switch(e){case`darwin`:return(0,F.jsx)(c,{color:`currentColor`,size:t});case`linux`:return(0,F.jsx)(a,{color:`currentColor`,size:t});case`win32`:return(0,F.jsx)(x,{color:`currentColor`,size:t});default:return(0,F.jsx)(g,{icon:te,size:t})}}})),R,z,B,V,H,_e=t((()=>{o(),E(),h(),R=e(n()),O(),z=e(u()),r(),me(),pe(),A(),ue(),L(),B=e(l()),V=p(({css:e})=>({container:e`
    padding-block: 16px;
    padding-inline: 20px;
  `,dot:e`
    width: 6px;
    height: 6px;
    border-radius: 50%;
  `,header:e`
    padding-block-end: 16px;
    border-block-end: 1px solid ${v.colorBorderSecondary};
  `,label:e`
    font-size: 12px;
    color: ${v.colorTextTertiary};
  `,path:e`
    overflow: hidden;
    flex: 1;

    min-width: 0;

    font-family: ${v.fontFamilyCode};
    font-size: 12px;
    color: ${v.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,recentItem:e`
    padding-block: 6px;
    padding-inline: 8px;
  `})),H=(0,z.memo)(({device:e,isCurrent:t,onClose:n})=>{let{t:r}=i(`setting`),a=j.useUtils(),[o,s]=(0,z.useState)(e.friendlyName??``),[c,l]=(0,z.useState)(e.defaultCwd??``),u=j.device.updateDevice.useMutation({onSuccess:()=>a.device.listDevices.invalidate()}),f=!!t&&!1,p=e.channels??[],m=()=>{let t=o.trim()||null;t!==(e.friendlyName??null)&&u.mutate({deviceId:e.deviceId,friendlyName:t})},h=(t,n)=>{let r=t.trim();u.mutate({defaultCwd:r||null,deviceId:e.deviceId,workingDirs:r?P({path:r,repoType:n},e.workingDirs):e.workingDirs})},_=()=>{c.trim()!==(e.defaultCwd??``)&&h(c)},ee=async()=>{let e=await M.selectFolder({defaultPath:c.trim()||void 0,title:r(`devices.edit.defaultCwd`)});e?.path&&(l(e.path),h(e.path,e.repoType))},x=async()=>{let t=await M.selectFolder({title:r(`devices.detail.addDir`)});t?.path&&u.mutate({deviceId:e.deviceId,workingDirs:P({path:t.path,repoType:t.repoType},e.workingDirs)})},T=t=>{u.mutate({deviceId:e.deviceId,workingDirs:e.workingDirs.filter(e=>e.path!==t)})};return(0,B.jsxs)(d,{className:V.container,gap:20,children:[(0,B.jsxs)(d,{horizontal:!0,align:`center`,className:V.header,gap:8,children:[I(e.platform),(0,B.jsx)(b,{ellipsis:!0,style:{flex:1,minWidth:0},weight:600,children:e.friendlyName||e.hostname||e.deviceId}),t&&(0,B.jsx)(w,{children:r(`devices.currentBadge`)}),(0,B.jsx)(D,{icon:k,size:`small`,onClick:n})]}),(0,B.jsxs)(d,{gap:8,children:[(0,B.jsx)(`span`,{className:V.label,children:r(`devices.detail.connections`)}),p.length>0?p.map((e,t)=>(0,B.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,B.jsx)(`span`,{className:V.dot,style:{background:v.colorSuccess,flex:`none`}}),e.channel&&(0,B.jsx)(w,{size:`small`,children:e.channel}),(0,B.jsx)(b,{style:{fontSize:12},type:`secondary`,children:r(`devices.channel.connected`,{time:(0,R.default)(e.connectedAt).fromNow()})})]},`${e.connectedAt}-${t}`)):(0,B.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,B.jsx)(`span`,{className:V.dot,style:{background:v.colorTextQuaternary,flex:`none`}}),(0,B.jsxs)(b,{style:{fontSize:12},type:`secondary`,children:[r(`devices.status.offline`),` ·`,` `,r(`devices.lastSeen`,{time:(0,R.default)(e.lastSeen).fromNow()})]})]})]}),(0,B.jsxs)(d,{gap:6,children:[(0,B.jsx)(`span`,{className:V.label,children:r(`devices.edit.friendlyName`)}),(0,B.jsx)(y,{placeholder:r(`devices.edit.friendlyNamePlaceholder`),value:o,onBlur:m,onChange:e=>s(e.target.value),onPressEnter:m})]}),(0,B.jsxs)(d,{gap:6,children:[(0,B.jsx)(`span`,{className:V.label,children:r(`devices.edit.defaultCwd`)}),(0,B.jsxs)(d,{horizontal:!0,gap:8,children:[(0,B.jsx)(y,{placeholder:r(`devices.edit.defaultCwdPlaceholder`),value:c,onBlur:_,onChange:e=>l(e.target.value),onPressEnter:_}),f&&(0,B.jsx)(C,{icon:(0,B.jsx)(g,{icon:ae}),onClick:ee,children:r(`devices.edit.browse`)})]})]}),(0,B.jsxs)(d,{gap:6,children:[(0,B.jsx)(`span`,{className:V.label,children:r(`devices.detail.recentDirs`)}),e.workingDirs.length===0?(0,B.jsx)(b,{style:{fontSize:12},type:`secondary`,children:r(`devices.detail.noRecent`)}):(0,B.jsx)(S,{items:e.workingDirs.map(e=>({id:e.path,repoType:e.repoType})),renderItem:e=>(0,B.jsxs)(S.Item,{className:V.recentItem,id:e.id,variant:`filled`,children:[(0,B.jsx)(S.DragHandle,{}),fe(e.repoType),(0,B.jsx)(b,{className:V.path,title:e.id,children:e.id}),(0,B.jsx)(D,{icon:k,size:`small`,onClick:()=>T(e.id)})]}),onChange:t=>{let n=new Map(e.workingDirs.map(e=>[e.path,e]));u.mutate({deviceId:e.deviceId,workingDirs:t.map(e=>n.get(e.id)??{path:e.id})})}}),f&&(0,B.jsx)(C,{block:!0,icon:(0,B.jsx)(g,{icon:re}),variant:`filled`,onClick:x,children:r(`devices.detail.addDir`)})]})]})}),H.displayName=`DeviceDetailPanel`})),U,W,G,K,q,ve=t((()=>{E(),ce(),h(),U=e(n()),O(),W=e(u()),r(),A(),L(),G=e(l()),K=p(({css:e})=>({cwd:e`
    overflow: hidden;
    font-family: ${v.fontFamilyCode};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,dotOffline:e`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${v.colorTextQuaternary};
  `,dotOnline:e`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${v.colorSuccess};
  `,icon:e`
    flex: none;
    color: ${v.colorTextSecondary};
  `,row:e`
    cursor: pointer;

    padding-block: 12px;
    padding-inline: 12px;
    border-radius: ${v.borderRadiusLG};

    transition: background 0.2s;

    &:hover {
      background: ${v.colorFillTertiary};
    }
  `,rowActive:e`
    background: ${v.colorFillSecondary};

    &:hover {
      background: ${v.colorFillSecondary};
    }
  `})),q=(0,W.memo)(({device:e,isCurrent:t,onSelect:n,selected:r})=>{let{t:a}=i(`setting`),o=j.useUtils(),s=j.device.removeDevice.useMutation({onSuccess:()=>o.device.listDevices.invalidate()}),c=e.friendlyName||e.hostname||e.deviceId,l=e.identitySource===`fallback`,u=e.channels??[],p=u.length>0,h=p?a(`devices.channel.connected`,{time:(0,U.default)(u[0]?.connectedAt??e.lastSeen).fromNow()}):a(`devices.lastSeen`,{time:(0,U.default)(e.lastSeen).fromNow()});return(0,G.jsxs)(d,{horizontal:!0,align:`flex-start`,className:f(K.row,r&&K.rowActive),gap:12,onClick:n,children:[(0,G.jsx)(`span`,{className:K.icon,style:{marginBlockStart:2},children:I(e.platform)}),(0,G.jsxs)(d,{flex:1,gap:2,style:{minWidth:0},children:[(0,G.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,G.jsx)(b,{ellipsis:!0,weight:500,children:c}),(0,G.jsx)(_,{title:h,children:(0,G.jsx)(`span`,{className:p?K.dotOnline:K.dotOffline})}),t&&(0,G.jsx)(w,{children:a(`devices.currentBadge`)}),l&&(0,G.jsx)(_,{title:a(`devices.fallbackTooltip`),children:(0,G.jsx)(w,{icon:(0,G.jsx)(g,{icon:se}),children:a(`devices.fallbackBadge`)})})]}),e.defaultCwd&&(0,G.jsxs)(d,{horizontal:!0,align:`center`,gap:6,children:[(0,G.jsx)(g,{icon:ne,size:12,style:{color:v.colorTextQuaternary}}),(0,G.jsx)(b,{className:K.cwd,style:{fontSize:12},type:`secondary`,children:e.defaultCwd})]})]}),(0,G.jsx)(`span`,{onClick:e=>e.stopPropagation(),children:(0,G.jsx)(m,{items:[{danger:!0,icon:(0,G.jsx)(g,{icon:ie}),key:`remove`,label:a(`devices.actions.remove`),onClick:()=>le({content:a(`devices.remove.confirmDesc`),okButtonProps:{danger:!0},okText:a(`devices.actions.remove`),onOk:async()=>{await s.mutateAsync({deviceId:e.deviceId})},title:a(`devices.remove.confirm`)})}],children:(0,G.jsx)(D,{icon:oe})})})]})}),q.displayName=`DeviceItem`})),J,Y,X,Z,ye=t((()=>{o(),E(),h(),J=e(u()),r(),A(),de(),_e(),ve(),Y=e(l()),X=p(({css:e})=>({detailCol:e`
    align-self: stretch;
    min-width: 0;
    border: 1px solid ${v.colorBorderSecondary};
    border-radius: ${v.borderRadiusLG};
  `,empty:e`
    padding-block: 48px;
    color: ${v.colorTextTertiary};
    text-align: center;
  `,listCol:e`
    min-width: 0;
    border: 1px solid ${v.colorBorderSecondary};
    border-radius: ${v.borderRadiusLG};
  `})),Z=(0,J.memo)(()=>{let{t:e}=i(`setting`),{data:t,isLoading:n}=j.device.listDevices.useQuery(void 0,{staleTime:3e4}),r=N(e=>e.useFetchGatewayDeviceInfo);N(e=>e.gatewayDeviceInfo),r();let[a,o]=(0,J.useState)();if(n)return(0,Y.jsx)(T,{active:!0,paragraph:{rows:4},title:!1});if(!t||t.length===0)return(0,Y.jsx)(d,{align:`center`,className:X.empty,justify:`center`,children:(0,Y.jsx)(b,{type:`secondary`,children:e(`devices.empty`)})});let s=a?t.find(e=>e.deviceId===a):void 0,c=e=>!1;return(0,Y.jsxs)(d,{horizontal:!0,align:`flex-start`,gap:16,children:[(0,Y.jsx)(d,{className:X.listCol,flex:1,padding:4,children:t.map(e=>(0,Y.jsx)(q,{device:e,isCurrent:c(e.deviceId),selected:e.deviceId===a,onSelect:()=>o(t=>t===e.deviceId?void 0:e.deviceId)},e.deviceId))}),s&&(0,Y.jsx)(d,{className:X.detailCol,flex:1,children:(0,Y.jsx)(H,{device:s,isCurrent:c(s.deviceId),onClose:()=>o(void 0)},s.deviceId)})]})}),Z.displayName=`DeviceList`})),be,Q,$;t((()=>{be=e(u()),r(),he(),ye(),Q=e(l()),$=(0,be.memo)(()=>{let{t:e}=i(`setting`);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(ge,{title:e(`devices.title`)}),(0,Q.jsx)(Z,{})]})}),$.displayName=`DevicesSettings`}))();export{$ as default};