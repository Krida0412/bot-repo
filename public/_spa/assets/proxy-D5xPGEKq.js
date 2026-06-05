import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{Gs as i,Js as a,vl as o,yl as s}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Ia as c,Ma as l,r as u}from"./imperative-Xfjd337A.js";import{gr as d,k as f,n as p}from"./es-2ZVhpwv7.js";import{Ct as m,_t as h,an as g,j as _,lt as v,n as y,rn as b}from"./es-DMB7XTXN.js";import{C as x,c as S,v as C}from"../vendor/vendor-ui-runtime-ttj-NPqy.js";import{a as w,i as T,o as E,t as D}from"./electron-BTFW9gEx.js";import{n as O,t as k}from"./SettingHeader-DpvPmWpm.js";var A,j,M,N,P=t((()=>{y(),l(),S(),A=e(s()),n(),j=e(o()),M=c(({css:e,cssVar:t})=>({container:e`
    pointer-events: none;

    position: fixed;
    z-index: 1000;
    inset-block-end: 24px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
  `,pill:e`
    pointer-events: auto;

    display: inline-flex;
    gap: 8px;
    align-items: center;

    padding-block: 6px;
    padding-inline: 16px 6px;
    border: 1px solid color-mix(in srgb, ${t.colorBorderSecondary} 60%, transparent);
    border-radius: 999px;

    font-size: 13px;
    color: ${t.colorText};

    background: color-mix(in srgb, ${t.colorBgElevated} 85%, transparent);
    backdrop-filter: blur(16px) saturate(1.2);
    box-shadow: ${t.boxShadowSecondary};
  `,dot:e`
    flex-shrink: 0;

    width: 6px;
    height: 6px;
    border-radius: 50%;

    background: ${t.colorWarning};
  `,message:e`
    color: ${t.colorTextSecondary};
  `,resetButton:e`
    height: 28px;
    padding-block: 0;
    padding-inline: 12px;
    border-radius: 999px;

    color: ${t.colorTextSecondary} !important;

    background: transparent;

    &:hover {
      color: ${t.colorText} !important;
      background: ${t.colorFillSecondary} !important;
    }
  `,saveButton:e`
    height: 28px;
    padding-block: 0;
    padding-inline: 14px;
    border-radius: 999px;

    font-weight: 500;
  `})),N=(0,A.memo)(({isDirty:e,isSaving:t,onReset:n,onSave:i})=>{let{t:a}=r(`electron`);return(0,j.jsx)(x,{children:e&&(0,j.jsx)(C.div,{animate:{opacity:1,y:0},"aria-live":`polite`,className:M.container,exit:{opacity:0,y:16},initial:{opacity:0,y:16},role:`status`,transition:{duration:.18,ease:`easeOut`},children:(0,j.jsxs)(`div`,{className:M.pill,children:[(0,j.jsx)(`span`,{className:M.dot}),(0,j.jsx)(`span`,{className:M.message,children:a(`proxy.unsavedChanges`)}),(0,j.jsx)(g,{className:M.resetButton,disabled:t,size:`small`,type:`text`,onClick:n,children:a(`proxy.resetButton`)}),(0,j.jsx)(g,{className:M.saveButton,loading:t,size:`small`,type:`primary`,onClick:i,children:a(`proxy.saveButton`)})]})})})}),N.displayName=`SaveBar`})),F,I,L,R,z=t((()=>{y(),F=e(s()),I=[`enableProxy`,`proxyType`,`proxyServer`,`proxyPort`,`proxyRequireAuth`,`proxyUsername`,`proxyPassword`],L=e=>e??``,R=(e,t)=>{let n=h.useWatch([],e);return{isDirty:(0,F.useMemo)(()=>!t||!n?!1:I.some(e=>L(n[e])!==L(t[e])),[n,t])}}})),B,V,H,U,W,G,K,q,J,Y,X=t((()=>{p(),y(),B=e(s()),n(),a(),E(),D(),P(),z(),V=e(o()),H=[`http`,`https`,`socks5`],U=/^(?:\d{1,3}\.){3}\d{1,3}$/,W=/^[\dA-Z](?:[\dA-Z-]*[\dA-Z])?(?:\.[\dA-Z](?:[\dA-Z-]*[\dA-Z])?)*$/i,G=e=>typeof e==`object`&&!!e&&`errorFields`in e,K=e=>H.includes(e),q=e=>U.test(e)||W.test(e),J=e=>{if(!e.enableProxy)return!0;if(!K(e.proxyType))return!1;let t=e.proxyServer?.trim();if(!t||!q(t))return!1;let n=e.proxyPort?.trim();if(!n)return!1;let r=Number.parseInt(n,10);return Number.isNaN(r)||r<1||r>65535?!1:e.proxyRequireAuth?!!(e.proxyUsername?.trim()&&e.proxyPassword?.trim()):!0},Y=()=>{let{t:e}=r(`electron`),[t]=d.useForm(),[n,a]=(0,B.useState)(`https://www.google.com`),[o,s]=(0,B.useState)(!1),[c,l]=(0,B.useState)(!1),p=h.useWatch(`enableProxy`,t),y=h.useWatch(`proxyRequireAuth`,t),[x,S]=T(e=>[e.setProxySettings,e.useGetProxySettings]),{data:C,isLoading:E}=S(),{isDirty:D}=R(t,C),O=(0,B.useRef)(!1);(0,B.useEffect)(()=>{C&&!O.current&&(t.setFieldsValue(C),O.current=!0)},[t,C]);let k=(0,B.useCallback)(async(t,n)=>{if(!(!p||K(n)))throw Error(e(`proxy.validation.typeRequired`))},[p,e]),A=(0,B.useCallback)(async(t,n)=>{if(!p)return;let r=n?.trim();if(!r)throw Error(e(`proxy.validation.serverRequired`));if(!q(r))throw Error(e(`proxy.validation.serverInvalid`))},[p,e]),j=(0,B.useCallback)(async(t,n)=>{if(!p)return;let r=n?.trim();if(!r)throw Error(e(`proxy.validation.portRequired`));let i=Number.parseInt(r,10);if(Number.isNaN(i)||i<1||i>65535)throw Error(e(`proxy.validation.portInvalid`))},[p,e]),M=(0,B.useCallback)(async(t,n)=>{if(!(!p||!y||n?.trim()))throw Error(e(`proxy.validation.usernameRequired`))},[p,y,e]),P=(0,B.useCallback)(async(t,n)=>{if(!(!p||!y||n?.trim()))throw Error(e(`proxy.validation.passwordRequired`))},[p,y,e]),F=(0,B.useCallback)((n,r)=>{if(`enableProxy`in n){let i=n.enableProxy;if(i&&!J(r))return;x(i?r:{enableProxy:!1}).catch(n=>{t.setFieldsValue({enableProxy:!i});let r=n instanceof Error?n.message:String(n);u.error(e(`proxy.saveFailed`,{error:r}))})}},[t,x,e]),I=(0,B.useCallback)(async()=>{try{l(!0),await x(await t.validateFields())}catch{}finally{l(!1)}},[t,x]),L=(0,B.useCallback)(()=>{C&&t.setFieldsValue(C)},[t,C]),z=(0,B.useCallback)(async()=>{try{s(!0);let r=await t.validateFields(),i={...C,...r},a=await w.testProxyConfig(i,n);a.success?u.success(e(`proxy.testSuccessWithTime`,{time:a.responseTime})):u.error(`${e(`proxy.testFailed`)}: ${a.message??``}`)}catch(t){if(G(t))return;let n=t instanceof Error?t.message:`Unknown error`;u.error(`${e(`proxy.testFailed`)}: ${n}`)}finally{s(!1)}},[C,n,t,e]);return E?(0,V.jsx)(f,{active:!0,paragraph:{rows:5},title:!1}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(d,{collapsible:!1,form:t,initialValues:C,items:[{children:[{children:(0,V.jsx)(_,{}),desc:e(`proxy.enableDesc`),label:e(`proxy.enable`),layout:`horizontal`,minWidth:void 0,name:`enableProxy`,valuePropName:`checked`}],title:e(`proxy.enable`)},{children:[{children:(0,V.jsxs)(b.Group,{disabled:!p,children:[(0,V.jsx)(b,{value:`http`,children:`HTTP`}),(0,V.jsx)(b,{value:`https`,children:`HTTPS`}),(0,V.jsx)(b,{value:`socks5`,children:`SOCKS5`})]}),label:e(`proxy.type`),minWidth:void 0,name:`proxyType`,rules:[{validator:k}]},{children:(0,V.jsx)(v,{disabled:!p,placeholder:`127.0.0.1`}),desc:e(`proxy.validation.serverRequired`),label:e(`proxy.server`),name:`proxyServer`,rules:[{validator:A}]},{children:(0,V.jsx)(v,{disabled:!p,placeholder:`7890`,style:{width:120}}),desc:e(`proxy.validation.portRequired`),label:e(`proxy.port`),name:`proxyPort`,rules:[{validator:j}]}],title:e(`proxy.basicSettings`)},{children:[{children:(0,V.jsx)(_,{disabled:!p}),desc:e(`proxy.authDesc`),label:e(`proxy.auth`),layout:`horizontal`,minWidth:void 0,name:`proxyRequireAuth`,valuePropName:`checked`},...y&&p?[{children:(0,V.jsx)(v,{placeholder:e(`proxy.username_placeholder`)}),label:e(`proxy.username`),name:`proxyUsername`,rules:[{validator:M}]},{children:(0,V.jsx)(v.Password,{placeholder:e(`proxy.password_placeholder`)}),label:e(`proxy.password`),name:`proxyPassword`,rules:[{validator:P}]}]:[]],title:e(`proxy.authSettings`)},{children:[{children:(0,V.jsxs)(m.Compact,{style:{width:`100%`},children:[(0,V.jsx)(v,{placeholder:e(`proxy.testUrlPlaceholder`),style:{flex:1},value:n,onChange:e=>a(e.target.value)}),(0,V.jsx)(g,{loading:o,type:`default`,onClick:z,children:e(`proxy.testButton`)})]}),desc:e(`proxy.testDescription`),label:e(`proxy.testUrl`),minWidth:void 0}],title:e(`proxy.connectionTest`)}],itemsType:`group`,variant:`filled`,onValuesChange:F,...i}),(0,V.jsx)(N,{isDirty:D,isSaving:c,onReset:L,onSave:I})]})}})),Z,Q;t((()=>{n(),O(),X(),Z=e(o()),Q=()=>{let{t:e}=r(`setting`);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(k,{title:e(`tab.proxy`)}),(0,Z.jsx)(Y,{})]})}}))();export{Q as default};