import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{Ct as n,bt as r,dt as i,pt as a,wt as o,yt as s}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{Qt as c,Rr as l,vl as u,yl as d}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as f,Ba as p,Ia as m,Ma as h,Oa as ee,Wa as te}from"./imperative-CZQgOWZc.js";import{Os as ne,n as g,us as _}from"./es-na8XYpNF.js";import{n as v,zt as re}from"./es-B2d2bv-I.js";import{d as y,m as b,n as x}from"../vendor/vendor-react-Du2OrJ5H.js";import{Er as S}from"../i18n/i18n-default-CQadLqkY.js";import{en as C,in as w,xn as ie,yn as ae}from"./agent-h7g64c0D.js";import{n as oe,o as se}from"./client-cV4dDi-k.js";import{_ as ce,c as T,m as E}from"./onboardingMetrics-CVLRPbGV.js";import{s as D,t as O}from"./serverConfig-CPGu7kVr.js";import{F as k,O as A,P as j,k as M}from"./index-CG_0atUX.js";import{i as N,t as P}from"./chat-CF_CTtq2.js";import{n as F,t as I}from"./awesome-B4tjIYO2.js";import{t as L}from"./ProductLogo-BcUGbmmz.js";import{t as R}from"./Branding---u9sZYy.js";import{i as z,n as B,r as le,t as V}from"./LangButton-Cq700Ufc.js";var H,U,W=t((()=>{T(),s(),oe(),ae(),H=()=>ie(r.resolvedLanguage||r.language||globalThis.navigator?.language),U=async e=>{let t=await se.market.agent.getOnboardingFull.query({locale:H()},{signal:e?.signal});if(!t||typeof t!=`object`)return[];let n=[];for(let[e,r]of Object.entries(t))if(Array.isArray(r))for(let t of r){let r=ce(t,e);r&&n.push(r)}return n}})),G,K,ue=t((()=>{T(),i(),n(),W(),G={dedupingInterval:6e4,revalidateOnFocus:!1,shouldRetryOnError:!1},K=(e=!0)=>{let{i18n:t}=a(),n=t.resolvedLanguage||t.language;return o(e?E(n):null,()=>U(),G)}})),q,de=t((()=>{h(),q=m(({css:e,cssVar:t})=>({divider:e`
    height: 24px;
  `,innerContainerDark:e`
    position: relative;

    overflow: hidden auto;

    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};

    background: ${t.colorBgContainer};
  `,innerContainerLight:e`
    position: relative;

    overflow: hidden auto;

    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadius};

    background: ${t.colorBgContainer};
  `,innerContainerMobile:e`
    position: relative;
    overflow: hidden auto;
    background: ${t.colorBgContainer};
  `,outerContainer:e`
    position: relative;
  `}))})),J,Y,X,fe=t((()=>{S(),l(),c(),g(),v(),h(),J=e(d()),i(),x(),R(),B(),z(),j(),A(),O(),C(),de(),Y=e(u()),X=({children:e})=>{let t=k(),n=M(),r=te(),{t:i}=a(`onboarding`),{pathname:o}=y(),s=b(),c=w(e=>e.setOnboardingStep);D(e=>e.featureFlags.enableAgentOnboarding),D(e=>e.serverConfigInit);let l=o.startsWith(`/onboarding/agent`);return l||o.startsWith(`/onboarding/classic`),(0,J.useCallback)(()=>{c(4),s(`/onboarding/classic?entry=skip`)},[s,c]),(0,J.useCallback)(e=>{e.stopPropagation(),e.preventDefault(),s(l?`/onboarding/classic`:`/onboarding/agent`)},[l,s]),(0,Y.jsx)(f,{className:q.outerContainer,height:`100%`,padding:n?0:8,width:`100%`,children:(0,Y.jsxs)(f,{height:`100%`,width:`100%`,className:p(n?q.innerContainerMobile:t?q.innerContainerDark:q.innerContainerLight),children:[(0,Y.jsxs)(f,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,padding:n?12:16,width:`100%`,children:[(0,Y.jsx)(L,{color:r.colorText,size:28,type:`text`}),(0,Y.jsx)(f,{horizontal:!0,align:`center`,gap:16,children:(0,Y.jsxs)(f,{horizontal:!0,align:`center`,children:[(0,Y.jsx)(V,{placement:`bottomRight`,size:18}),(0,Y.jsx)(re,{className:q.divider,orientation:`vertical`}),(0,Y.jsx)(le,{placement:`bottomRight`,size:18})]})})]}),(0,Y.jsx)(ee,{height:`100%`,width:`100%`,children:e}),!1]})})}})),Z,Q,$,pe=t((()=>{g(),I(),P(),Z=e(d()),i(),R(),Q=e(u()),$=(0,Z.memo)(({gap:e=8,align:t,avatar:n,avatarSize:r,horizontal:i,disableTypewriter:o,sentences:s,fontSize:c=24,...l})=>{let{i18n:u}=a(),d=u.language,p=t??`flex-start`,m=p===`center`;return(0,Q.jsxs)(f,{align:p,gap:e,horizontal:i,...l,children:[n?(0,Q.jsx)(_,{avatar:n,size:r||c*2,style:{flexShrink:0}}):(0,Q.jsx)(L,{size:r||c*2,style:{flexShrink:0}}),(0,Q.jsx)(ne,{as:`h1`,fontSize:c,weight:`bold`,style:{lineHeight:1.3,textAlign:m?`center`:void 0,wordBreak:`break-word`},children:o?s[0]??``:(0,Q.jsx)(F,{cursorCharacter:(0,Q.jsx)(N,{size:c,variant:`pulse`}),cursorFade:!1,deletePauseDuration:1e3,deletingSpeed:16,hideCursorWhileTyping:`afterTyping`,pauseDuration:16e3,sentences:s,typingSpeed:32},d)})]})})}));export{ue as a,W as c,fe as i,pe as n,K as o,X as r,U as s,$ as t};