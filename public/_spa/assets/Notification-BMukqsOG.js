import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{$i as i,Ps as a,Rr as o,cs as s,fs as c,vl as l,yl as u}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as d,Ba as f,Ia as p,Ma as m,Xi as h,da as ee,za as g}from"./imperative-Xfjd337A.js";import{Os as te,cs as ne,n as _,us as re,vs as v,ws as y}from"./es-2ZVhpwv7.js";import{n as b,zt as x}from"./es-DMB7XTXN.js";import{ba as ie,dt as S,vt as C}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{t as ae}from"./fast-deep-equal-MG-n9E1a.js";import{$t as oe,Gt as se,a as ce,en as w,f as le,hn as ue,i as de,in as fe,t as pe}from"./agent-BV7ChU6o.js";import{Ga as T,Gr as me,Ha as he,Wa as ge,bi as E,qr as D,vi as O}from"./store-DTt7Ili4.js";import{d as _e,r as ve,t as ye}from"./global-D_2Rs4fY.js";import{t as be}from"./selectors-BaC4ALp4.js";import{n as xe,t as Se}from"./markdownToTxt-CRAhY_be.js";import{r as Ce}from"./ErrorContent-BMpyJjoj.js";import{F as we,P as Te}from"./index-AVlnZl7f.js";import{i as k,t as Ee}from"./MarketAuth-DqgKrG7q.js";var A,j,M,De,Oe,ke,N,P,F,Ae=t((()=>{o(),_(),b(),m(),A=e(ae()),S(),j=e(u()),n(),Ee(),pe(),ce(),me(),he(),w(),se(),M=e(l()),De=[{avatar:`💻`,identifier:`lobe-cloud-sandbox`,label:`Cloud Sandbox`}],Oe=1e3,ke=15e3,N=(0,j.memo)(({tool:e,onAuthComplete:t})=>{let{t:n}=r(`chat`),[i,a]=(0,j.useState)(!1),[o,s]=(0,j.useState)(!1),c=(0,j.useRef)(null),l=(0,j.useRef)(null),u=(0,j.useRef)(null),f=(0,j.useRef)(null),p=fe(oe.userId),m=D(e=>e.createKlavisServer),h=D(e=>e.refreshKlavisServerTools),_=(0,j.useCallback)(()=>{l.current&&=(clearInterval(l.current),null),u.current&&=(clearInterval(u.current),null),f.current&&=(clearTimeout(f.current),null),c.current=null,s(!1)},[]);(0,j.useEffect)(()=>()=>{_()},[_]),(0,j.useEffect)(()=>{e.server?.status===T.CONNECTED&&o&&(_(),t())},[e.server?.status,o,_,t]);let v=(0,j.useCallback)(e=>{u.current||(u.current=setInterval(async()=>{try{await h(e)}catch(e){console.info(`[Klavis] Polling check (expected during auth):`,e)}},Oe),f.current=setTimeout(()=>{u.current&&=(clearInterval(u.current),null),s(!1)},ke))},[h]),y=(0,j.useCallback)((e,t)=>{l.current=setInterval(()=>{try{e.closed&&(l.current&&=(clearInterval(l.current),null),c.current=null,v(t))}catch{l.current&&=(clearInterval(l.current),null),v(t)}},500)},[h,v]),b=(0,j.useCallback)((e,t)=>{_(),s(!0);let n=window.open(e,`_blank`,`width=600,height=700`);n?(c.current=n,y(n,t)):v(t)},[_,y,v]),x=async()=>{if(p){if(e.server?.status===T.PENDING_AUTH&&e.server.oauthUrl){b(e.server.oauthUrl,e.server.identifier);return}a(!0);try{let n=await m({identifier:e.identifier,serverName:e.serverName,userId:p});n&&(n.isAuthenticated?(await h(n.identifier),t()):n.oauthUrl&&b(n.oauthUrl,n.identifier))}catch(e){console.error(`[ToolAuthAlert] Failed to create server:`,e)}finally{a(!1)}}},S=()=>typeof e.icon==`string`?(0,M.jsx)(re,{alt:e.label,avatar:e.icon,size:20,style:{flex:`none`}}):(0,M.jsx)(ee,{fill:g.colorText,icon:e.icon,size:20}),C=i||o;return(0,M.jsxs)(d,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,style:{cursor:`pointer`},onClick:x,children:[(0,M.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[S(),(0,M.jsx)(te,{children:e.label})]}),(0,M.jsx)(ne,{disabled:C,icon:ie,loading:C,size:`small`,type:`text`,onClick:x,children:n(C?`toolAuth.authorizing`:`toolAuth.authorize`)})]})}),N.displayName=`KlavisToolAuthItem`,P=(0,j.memo)(({tool:e})=>{let{t}=r(`chat`),{signIn:n,isLoading:i}=k(),a=async()=>{try{await n()}catch(e){console.error(`[ToolAuthAlert] Market sign in failed:`,e)}};return(0,M.jsxs)(d,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,style:{cursor:`pointer`},onClick:a,children:[(0,M.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,M.jsx)(re,{alt:e.label,avatar:e.avatar,size:20,style:{flex:`none`}}),(0,M.jsx)(te,{children:e.label})]}),(0,M.jsx)(ne,{disabled:i,icon:ie,loading:i,size:`small`,type:`text`,onClick:a,children:t(i?`toolAuth.authorizing`:`toolAuth.signIn`)})]})}),P.displayName=`MarketToolAuthItem`,F=(0,j.memo)(()=>{let{t:e}=r(`chat`),t=de(le.currentAgentPlugins,A.default),n=D(ge.getServers,A.default),{isAuthenticated:a}=k(),o=(0,j.useMemo)(()=>{let e=[];for(let r of t){let t=i.find(e=>e.identifier===r);if(t){let i=n.find(e=>e.identifier===r);(!i||i.status===T.PENDING_AUTH)&&e.push({...t,authType:`klavis`,server:i});continue}let o=De.find(e=>e.identifier===r);o&&!a&&e.push({...o,authType:`market`})}return e},[t,n,a]);return o.length===0?null:(0,M.jsx)(v,{showIcon:!1,style:{background:`transparent`,width:`100%`},type:`secondary`,description:(0,M.jsxs)(M.Fragment,{children:[e(`toolAuth.hint`),(0,M.jsx)(x,{dashed:!0,style:{marginBlock:12}}),(0,M.jsx)(d,{gap:12,style:{marginTop:8},children:o.map(e=>e.authType===`klavis`?(0,M.jsx)(N,{tool:e,onAuthComplete:()=>{}},e.identifier):(0,M.jsx)(P,{tool:e},e.identifier))})]}),title:(0,M.jsx)(d,{horizontal:!0,align:`center`,gap:6,children:e(`toolAuth.title`)})})}),F.displayName=`ToolAuthAlert`})),I,je,Me,L=t((()=>{m(),I=p(({css:e,cssVar:t})=>({container:e`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset-block: 16px 120px;
    inset-inline-end: 8px;

    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
  `,hoverArea:e`
    pointer-events: auto;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: end;
  `,previewPanel:e`
    pointer-events: none;

    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: 0;
    transform-origin: 100% 50%;
    transform: translateY(-50%) scale(0.96);

    overflow: hidden;
    display: flex;

    min-width: 240px;
    max-width: 360px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 8px;

    opacity: 0;
    background: ${t.colorBgElevated};
    box-shadow:
      0 6px 16px 0 rgb(0 0 0 / 8%),
      0 3px 6px -4px rgb(0 0 0 / 12%),
      0 9px 28px 8px rgb(0 0 0 / 5%);

    transition:
      opacity ${t.motionDurationMid} ease,
      transform ${t.motionDurationMid} ease;
  `,previewPanelVisible:e`
    pointer-events: auto;
    transform: translateY(-50%) scale(1);
    opacity: 1;
  `,rail:e`
    scrollbar-width: none;

    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: end;

    max-height: 50vh;

    transition: opacity ${t.motionDurationMid} ease;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  `,railFaded:e`
    pointer-events: none;
    opacity: 0;
  `})),je=p(({css:e,cssVar:t})=>({indicator:e`
    cursor: pointer;

    flex-shrink: 0;

    min-width: 5px;
    height: 12px;
    padding-block: 5px;
  `,indicatorContent:e`
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background: ${t.colorFillSecondary};
  `,indicatorContentActive:e`
    background: ${t.colorPrimary};
  `})),Me=p(({css:e,cssVar:t})=>({dash:e`
    flex-shrink: 0;
    height: 2px;
    border-radius: 2px;
    background: ${t.colorFillSecondary};
  `,dashActive:e`
    background: ${t.colorPrimary};
  `,item:e`
    cursor: pointer;

    padding-block: 6px;
    padding-inline: 12px;
    border-radius: 6px;

    color: ${t.colorTextSecondary};

    transition: background-color ${t.motionDurationFast} ease;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillTertiary};
    }
  `,itemActive:e`
    color: ${t.colorPrimary};
  `,label:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-size: 13px;
    line-height: 1.4;
    text-align: end;
    text-overflow: ellipsis;
    word-break: break-word;
  `,labelActive:e`
    font-weight: 500;
    color: ${t.colorPrimary};
  `,list:e`
    scrollbar-width: thin;

    overflow-y: auto;

    max-height: 60vh;
    padding-block: 4px;
    padding-inline: 4px;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: ${t.colorFillSecondary};
    }
  `}))})),Ne,R,z,Pe=t((()=>{m(),Ne=e(u()),n(),L(),R=e(l()),z=(0,Ne.memo)(({id:e,width:t,virtuosoIndex:n,position:i,activePosition:a,onJump:o})=>{let{t:s}=r(`chat`),c=je,l=a===i;return(0,R.jsx)(`div`,{"aria-current":l?`true`:void 0,"aria-label":s(`minimap.jumpToMessage`,{index:i+1}),className:c.indicator,id:e,style:{width:t},onClick:()=>o(n),children:(0,R.jsx)(`div`,{className:f(c.indicatorContent,l&&c.indicatorContentActive)})})}),z.displayName=`MinimapIndicator`})),Fe,B,V,Ie=t((()=>{_(),m(),Fe=e(u()),n(),L(),B=e(l()),V=(0,Fe.memo)(({indicators:e,activePosition:t,onJump:n})=>{let{t:i}=r(`chat`),a=Me;return(0,B.jsx)(d,{className:a.list,gap:2,children:e.map(({id:e,preview:r,virtuosoIndex:o,width:s},c)=>{let l=t===c,u=r||i(`minimap.emptyPreview`);return(0,B.jsxs)(d,{horizontal:!0,align:`center`,"aria-current":l?`true`:void 0,className:f(a.item,l&&a.itemActive),gap:10,justify:`flex-end`,onClick:()=>n(o),children:[(0,B.jsx)(`span`,{className:f(a.label,l&&a.labelActive),children:u}),(0,B.jsx)(`div`,{className:f(a.dash,l&&a.dashActive),style:{width:s}})]},e)})})}),V.displayName=`MinimapPreview`})),H,Le,Re,ze,Be,Ve=t((()=>{Se(),H=5,Le=16,Re=80,ze=e=>{let t=e?.length??0,n=Math.min(Math.sqrt(t/Re),1);return H+(Le-H)*n},Be=e=>{if(!e)return``;let t=xe(e).replaceAll(/\s+/g,` `).trim();return t?t.slice(0,100)+(t.length>100?`…`:``):``}})),He,Ue,U,W,We,Ge=t((()=>{He=e(a()),Ue=e(ae()),U=e(u()),Ce(),Ve(),W=(0,He.default)(`lobe-react:chat-minimap`),We=()=>{let e=O(E.virtuaScrollMethods),t=O(E.activeIndex),n=O(E.displayMessages,Ue.default),r=(0,U.useMemo)(()=>n.reduce((e,t,n)=>(t.role===`user`&&e.push({id:t.id,preview:Be(t.content),virtuosoIndex:n,width:ze(t.content)}),e),[]),[n]),i=(0,U.useMemo)(()=>{let e=new Map;return r.forEach(({virtuosoIndex:t},n)=>{e.set(t,n)}),e},[r]);return{activeIndicatorPosition:(0,U.useMemo)(()=>{if(t===null)return null;W(`> activeIndex`,t),W(`> indicatorIndexMap`,i);let e=i.get(t);if(e!==void 0)return e;let n=null;for(let[e,i]of r.entries())if(i.virtuosoIndex<=t)n=e;else break;return n},[t,i,r]),handleJump:(0,U.useCallback)(t=>{e?.scrollToIndex(t,{align:`start`,smooth:!0})},[e]),indicators:r}}})),G,K,Ke,q,qe=t((()=>{_(),m(),G=e(u()),Pe(),Ie(),L(),Ge(),Ve(),K=e(l()),Ke=120,q=(0,G.memo)(()=>{let e=I,[t,n]=(0,G.useState)(!1),r=(0,G.useRef)(null),{indicators:i,activeIndicatorPosition:a,handleJump:o}=We();return i.length<=3?null:(0,K.jsx)(d,{className:e.container,children:(0,K.jsxs)(d,{className:e.hoverArea,onMouseEnter:()=>{r.current&&=(clearTimeout(r.current),null),n(!0)},onMouseLeave:()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{n(!1),r.current=null},Ke)},children:[(0,K.jsx)(d,{className:f(e.rail,t&&e.railFaded),role:`group`,children:i.map(({id:e,width:t,virtuosoIndex:n},r)=>(0,K.jsx)(z,{activePosition:a,id:e,position:r,virtuosoIndex:n,width:t,onJump:o},e))}),(0,K.jsx)(`div`,{"aria-hidden":!t,className:f(e.previewPanel,t&&e.previewPanelVisible),children:(0,K.jsx)(V,{activePosition:a,indicators:i,onJump:e=>{o(e),r.current&&clearTimeout(r.current),n(!1)}})})]})})}),q.displayName=`ChatMinimap`})),J,Y,X,Je,Ye=t((()=>{c(),_(),m(),J=e(u()),n(),w(),se(),Y=e(l()),X=p(({css:e,cssVar:t})=>({closeButton:e`
    color: ${t.colorTextSecondary};
    transition: color 0.2s;

    &:hover {
      color: ${t.colorTextQuaternary};
    }
  `,container:e`
    position: fixed;
    z-index: 50;
    inset-block-start: 16px;
    inset-inline-start: 50%;
    transform: translateX(-50%);

    animation: fade-in-slide-down 300ms ease;

    @keyframes fade-in-slide-down {
      from {
        transform: translate(-50%, -16px);
        opacity: 0;
      }

      to {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
  `,text:e`
    font-size: 16px;
    font-weight: 500;
    color: ${t.colorBgBase};
  `,toast:e`
    display: flex;
    align-items: center;

    padding-block: 8px;
    padding-inline: 24px;
    border-radius: 9999px;

    background: ${t.colorText};
    box-shadow: ${t.boxShadowSecondary};
  `})),Je=()=>{let{t:e}=r(`chat`),[t,n]=(0,J.useState)(!0),i=fe(ue.getHotkeyById(s.ToggleZenMode));return(0,J.useEffect)(()=>{let e=setTimeout(()=>{n(!1)},2e3);return()=>clearTimeout(e)},[]),t?(0,Y.jsx)(`div`,{className:X.container,children:(0,Y.jsx)(`div`,{className:X.toast,children:(0,Y.jsxs)(d,{horizontal:!0,align:`center`,className:X.text,gap:8,children:[e(`zenMode`),` `,(0,Y.jsx)(h,{inverseTheme:!0,keys:i})]})})}):null}})),Xe,Ze,Qe,$e=t((()=>{Xe=e(u()),ye(),be(),Ye(),Ze=e(l()),Qe=(0,Xe.memo)(()=>ve(_e.inZenMode)&&(0,Ze.jsx)(Je,{}))})),et,Z,Q,$,tt=t((()=>{_(),m(),S(),et=e(u()),Te(),Z=e(l()),Q=p(({css:e})=>({cancelIcon:e`
    position: absolute;
    z-index: 100;
    inset-block-start: 8px;
    inset-inline-end: 8px;
  `,container:e`
    position: absolute;
    z-index: 1100;
    inset-block-end: 16px;
    inset-inline-end: 20px;

    overflow: hidden;

    border: 1px solid ${g.colorSplit};
    border-radius: 8px;

    background: ${g.colorBgContainer};
    box-shadow: ${g.boxShadowSecondary};
  `,mobileContainer:e`
    inset-block-end: 8px;
    inset-inline-start: 8px;
  `,wrapper:e`
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, ${g.colorBgContainer} 0%, transparent),
        ${g.colorBgContainer} var(--gradient-stop, 140px)
      ),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cg fill='${g.colorFillTertiary}' %3E %3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  `,wrapperDark:e`
    --gradient-stop: 80px;
  `,wrapperLight:e`
    --gradient-stop: 140px;
  `})),$=(0,et.memo)(({mobile:e,children:t,show:n,onCancel:r,showCloseIcon:i=!0,width:a=422,height:o=`auto`,wrapper:s={},className:c,...l})=>{let u=we(),{className:p,...m}=s;return n&&(0,Z.jsxs)(d,{className:f(Q.container,e&&Q.mobileContainer,c),height:o,width:e?`calc(100% - 16px)`:a,...l,children:[i&&(0,Z.jsx)(y,{className:Q.cancelIcon,icon:C,onClick:()=>r?.()}),(0,Z.jsx)(d,{horizontal:!0,gap:16,padding:`20px 20px 16px`,className:f(Q.wrapper,u?Q.wrapperDark:Q.wrapperLight,p),...m,children:t})]})})}));export{q as a,Ae as c,$e as i,tt as n,qe as o,Qe as r,F as s,$ as t};