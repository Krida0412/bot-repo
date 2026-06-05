import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{Rr as i,vl as a,yl as o}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as s,Ba as c,Ia as l,Ma as u}from"./imperative-Xfjd337A.js";import{Os as d,Xn as f,n as p,ws as m}from"./es-2ZVhpwv7.js";import{d as h,m as g,n as _}from"../vendor/vendor-react-D1dBs3e7.js";import{dt as v,fm as y,um as b}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{Er as x}from"../i18n/i18n-default-Ib49YEbx.js";import{s as S,t as C}from"./serverConfig-BWsHRSvm.js";var w,T,E,D,O,k=t((()=>{x(),i(),p(),u(),v(),w=e(o()),n(),_(),C(),T=e(a()),E=`LOBE_ONBOARDING_MODE_SWITCH_COLLAPSED`,D=l(({css:e,cssVar:t,responsive:n})=>({anchor:e`
    position: fixed;
    z-index: 10;
    inset-block-end: 24px;
    inset-inline-end: 24px;

    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;

    ${n.mobile} {
      inset-block-end: calc(env(safe-area-inset-bottom, 0px) + 96px);
      inset-inline-end: 12px;
    }
  `,anchorWithLabel:e`
    align-items: stretch;
  `,pill:e`
    display: flex;
    flex-flow: row wrap;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;

    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid color-mix(in srgb, ${t.colorBorderSecondary} 60%, transparent);
    border-radius: 999px;

    background: color-mix(in srgb, ${t.colorBgElevated} 75%, transparent);
    backdrop-filter: blur(16px) saturate(1.2);
    box-shadow: ${t.boxShadowSecondary};
  `,pillCollapsed:e`
    padding-block: 4px;
    padding-inline: 4px;
  `})),O=(0,w.memo)(({actions:e,className:t,showLabel:n=!1,style:i})=>{let{t:a}=r(`onboarding`),o=h(),l=g(),u=S(e=>e.featureFlags.enableAgentOnboarding),p=S(e=>e.serverConfigInit),[_,v]=(0,w.useState)(()=>typeof window>`u`?!1:window.localStorage.getItem(E)===`1`);(0,w.useEffect)(()=>{typeof window>`u`||window.localStorage.setItem(E,_?`1`:`0`)},[_]);let x=(0,w.useMemo)(()=>o.pathname.startsWith(`/onboarding/agent`)?`agent`:`classic`,[o.pathname]),C=(0,w.useMemo)(()=>[],[u,p,a]),O=C.length>0?(0,T.jsx)(f,{options:C,size:`small`,value:x,onChange:e=>{l(e===`agent`?`/onboarding/agent`:`/onboarding/classic`)}}):null;if(!O&&!e)return null;let k=(0,T.jsx)(m,{icon:_?y:b,size:`small`,title:a(_?`agent.modeSwitch.expand`:`agent.modeSwitch.collapse`),onClick:()=>v(e=>!e)});return(0,T.jsxs)(s,{className:c(D.anchor,n&&!_&&D.anchorWithLabel,t),style:i,children:[n&&O&&!_&&(0,T.jsx)(d,{style:{paddingInline:4},type:`secondary`,children:a(`agent.modeSwitch.label`)}),e?(0,T.jsxs)(`div`,{className:c(D.pill,_&&D.pillCollapsed),children:[k,!_&&(0,T.jsxs)(T.Fragment,{children:[e,O]})]}):O]})}),O.displayName=`OnboardingModeSwitch`}));export{k as n,O as t};