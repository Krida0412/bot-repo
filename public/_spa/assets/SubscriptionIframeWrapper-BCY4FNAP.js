import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{Rs as i,oi as a,pi as o,vl as s,yl as c}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as l,Oa as u}from"./imperative-Xfjd337A.js";import{n as d}from"./es-2ZVhpwv7.js";import{at as f,n as p}from"./es-DMB7XTXN.js";import{n as m,t as h}from"./system-Cmws3U-F.js";import{t as g}from"./electron-BTFW9gEx.js";import{n as _,t as v}from"./remoteServer-2j8NPHg6.js";import{t as y}from"./selectors-BBRZjO5q.js";import{f as b,p as x,s as S,t as C}from"./serverConfig-BWsHRSvm.js";var w,T=t((()=>{i(),g(),y(),w=()=>!1})),E,D,O,k,A=t((()=>{d(),p(),E=e(c()),n(),o(),T(),v(),m(),C(),b(),D=e(s()),O=`persist:subscription`,k=(0,E.memo)(({page:e})=>{let[t,n]=(0,E.useState)(!1),[i,o]=(0,E.useState)(null),s=(0,E.useRef)(null),{i18n:c}=r(),d=w(),p=S(x.enableBusinessFeatures),m=(0,E.useMemo)(()=>{if(!d)return null;let t=e===`notification`?`/embed/settings/notification`:`/embed/subscription/${e}`,n=new URL(t,a);return c.language&&n.searchParams.set(`hl`,c.language),n.toString()},[e,c.language,d]);(0,E.useEffect)(()=>{(async()=>{try{await _.setupSubscriptionWebviewSession(O),n(!0)}catch(e){console.error(`Failed to initialize subscription webview session:`,e),o(`Failed to initialize subscription session`)}})()},[]),(0,E.useEffect)(()=>{let e=s.current;if(!e||!t)return;let n=`__EXTERNAL_LINK__:`,r=()=>{e.executeJavaScript(`
        (function() {
          const PREFIX = '${n}';

          // Intercept link clicks
          document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.href) {
              e.preventDefault();
              e.stopPropagation();
              // Use console.log with prefix to communicate with parent
              console.log(PREFIX + link.href);
            }
          }, true);

          // Intercept window.open calls
          const originalOpen = window.open;
          window.open = function(url, target, features) {
            if (url) {
              // Resolve relative URLs to absolute
              const absoluteUrl = new URL(url, window.location.href).href;
              console.log(PREFIX + absoluteUrl);
            }
            // Return null to indicate popup was blocked (expected behavior)
            return null;
          };
        })();
      `)},i=e=>{let t=e.message;if(t?.startsWith(n)){let e=t.slice(18);h.openExternalLink(e)}};return e.addEventListener(`dom-ready`,r),e.addEventListener(`console-message`,i),()=>{e.removeEventListener(`dom-ready`,r),e.removeEventListener(`console-message`,i)}},[t]);let g=(0,E.useCallback)(()=>{o(null),n(!1),_.setupSubscriptionWebviewSession(O).then(()=>n(!0)).catch(()=>o(`Failed to initialize subscription session`))},[]);return!p||!m?null:i?(0,D.jsxs)(`div`,{style:{padding:24,textAlign:`center`},children:[(0,D.jsx)(`p`,{children:i}),(0,D.jsx)(`button`,{type:`button`,onClick:g,children:`Retry`})]}):t?(0,D.jsx)(`webview`,{partition:O,ref:s,src:m,style:{border:0,inset:0,position:`absolute`}}):(0,D.jsx)(l,{height:`100%`,width:`100%`,children:(0,D.jsx)(u,{flex:1,children:(0,D.jsx)(f,{})})})}),k.displayName=`SubscriptionIframeWrapper`}));export{A as n,k as t};