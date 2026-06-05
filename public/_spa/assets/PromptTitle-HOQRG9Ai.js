import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{Ao as i,Dt as a,X as o,Y as s,_l as c,gl as l,ko as u,vl as d,yl as f}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as p,Ba as m,Ga as h,Ha as g,Ia as _,Ka as v,Ma as y,Oa as b,da as ee,dn as te,za as x}from"./imperative-Xfjd337A.js";import{D as ne,Da as re,Er as ie,Is as ae,Li as oe,Os as se,Xn as ce,bs as le,cs as ue,ir as de,j as fe,ja as pe,kr as me,n as S,ws as he,ya as ge}from"./es-2ZVhpwv7.js";import{at as _e,n as ve,zt as ye}from"./es-DMB7XTXN.js";import{C as be,c as xe,v as Se}from"../vendor/vendor-ui-runtime-ttj-NPqy.js";import{f as Ce,m as we,n as Te}from"../vendor/vendor-react-D1dBs3e7.js";import{It as Ee,Ks as De,Ws as Oe,ba as ke,bn as Ae,cf as je,dt as C,ei as Me,gf as Ne,gm as Pe,vl as Fe,vt as Ie,wg as Le}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{n as Re,r as ze}from"./base-ui-CG2gzEWh.js";import{Cn as Be,Er as Ve,Jn as He,Xn as Ue,Yn as We,kn as Ge}from"../i18n/i18n-default-Ib49YEbx.js";import{r as Ke}from"./store-Cqiz4mkc.js";import{I as qe,R as Je,b as Ye,y as Xe}from"./onboardingMetrics-CNAzfJc5.js";import{f as Ze,p as Qe,s as $e,t as et}from"./serverConfig-BWsHRSvm.js";import{n as tt}from"./file-Bo7canZZ.js";import{F as nt,M as rt,N as it,P as at}from"./index-AVlnZl7f.js";import{c as ot,s as st}from"./ModelSelect-D7Ja-59y.js";import{a as ct,o as lt}from"./PromptTransformAction-Cu4zLuOq.js";import{c as ut,i as w,n as dt,o as ft,r as pt}from"./image-azTUVURv.js";import{n as mt,t as T}from"./selectors-B8UutMSk.js";import{n as ht,t as gt}from"./BaseErrorForm-CpIHwhIF.js";import{n as _t,t as vt}from"./WideScreenContainer-C5Jm4VlP.js";import{i as yt,r as bt}from"./runtimeErrorMessage-BO1EOcdN.js";import{o as xt,t as St}from"./useQueryParam-Bkw9NKJt.js";import{n as Ct,t as wt}from"./NavHeader-CNur_1ZZ.js";import{n as Tt,t as Et}from"./WideScreenButton-CmI6t6FQ.js";var Dt,E,Ot,kt=t((()=>{S(),xe(),Dt=e(f()),Te(),Ct(),_t(),Tt(),St(),E=e(d()),Ot=(0,Dt.memo)(({path:e,Workspace:t,PromptInput:n})=>{let r=Ce({path:e,end:!0}),[i]=xt(`topic`),a=!i;return r?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(wt,{right:(0,E.jsx)(Et,{}),styles:{center:{alignItems:`center`,display:`flex`,justifyContent:`center`,minWidth:0},left:{flex:1,minWidth:0},right:{flex:1,minWidth:0}}}),(0,E.jsxs)(p,{height:`100%`,style:{flexDirection:`column`,overflow:`hidden`,position:`relative`},width:`100%`,children:[(0,E.jsx)(p,{flex:1,style:{minHeight:0,overflowY:`auto`},width:`100%`,children:(0,E.jsx)(vt,{wrapperStyle:{minHeight:`100%`},children:(0,E.jsx)(be,{initial:!1,mode:`wait`,children:a?(0,E.jsx)(Se.div,{animate:{opacity:1,y:0},exit:{opacity:0,y:-8},initial:{opacity:0,y:8},transition:{duration:.24,ease:`easeOut`},children:(0,E.jsx)(p,{align:`center`,justify:`center`,style:{minHeight:`calc(100vh - 180px)`},width:`100%`,children:(0,E.jsx)(n,{disableAnimation:!0,showTitle:!0})})},`home-input`):(0,E.jsx)(Se.div,{animate:{opacity:1,y:0},exit:{opacity:0,y:8},initial:{opacity:0,y:10},transition:{duration:.28,ease:`easeOut`},children:(0,E.jsx)(t,{embedInput:!1})},`topic-workspace`)})})}),(0,E.jsx)(be,{initial:!1,children:!a&&(0,E.jsx)(Se.div,{animate:{opacity:1,y:0},exit:{opacity:0,y:8},initial:{opacity:0,y:8},transition:{delay:.04,duration:.2,ease:`easeOut`},children:(0,E.jsx)(vt,{style:{marginTop:-8,paddingBlockEnd:12},children:(0,E.jsx)(n,{disableAnimation:!0,showTitle:!1})})},`bottom-input`)})]})]}):null}),Ot.displayName=`CreateGenerationPage`})),D,At,jt=t((()=>{D=e(d()),At=({embedInput:e=!0,useStore:t,selectors:n,PromptInput:r,GenerationFeed:i,SkeletonList:a,EmptyStateComponent:o})=>{let s=t(n.activeGenerationTopicId),c=t(e=>e.useFetchGenerationBatches),l=t(n.isCurrentGenerationTopicLoaded);c(s);let u=t(n.currentGenerationBatches),d=u&&u.length>0;return l?d?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(i,{},s),e&&(0,D.jsx)(r,{disableAnimation:!0,showTitle:!1})]}):(0,D.jsx)(o,{PromptInput:r,embedInput:e}):(0,D.jsx)(a,{embedInput:e})}})),Mt,Nt,Pt,Ft=t((()=>{S(),Mt=e(f()),Nt=e(d()),Pt=(0,Mt.memo)(({embedInput:e=!0,PromptInput:t})=>e?(0,Nt.jsx)(b,{height:`calc(100vh - 180px)`,children:(0,Nt.jsx)(t,{showTitle:!0})}):(0,Nt.jsx)(b,{flex:1})),Pt.displayName=`GenerationWorkspaceEmptyState`})),It,Lt,Rt=t((()=>{St(),jt(),Ft(),It=e(d()),Lt=({embedInput:e=!0,useStore:t,selectors:n,PromptInput:r,GenerationFeed:i,SkeletonList:a})=>{let[o]=xt(`topic`),s=t(e=>e.isCreatingWithNewTopic);return!o||s?(0,It.jsx)(Pt,{PromptInput:r,embedInput:e}):(0,It.jsx)(At,{EmptyStateComponent:Pt,GenerationFeed:i,PromptInput:r,SkeletonList:a,embedInput:e,selectors:n,useStore:t})}})),zt,Bt,Vt,Ht=t((()=>{zt=e=>e.isCreating,Bt=e=>e.isCreatingWithNewTopic,Vt={isCreating:zt,isCreatingWithNewTopic:Bt}})),Ut=t((()=>{Ht(),ft(),mt(),ut()}));function Wt(e){let t=e.getBoundingClientRect(),n=I?.clientWidth||0,r=I?.clientHeight||0;return t.bottom<0||t.top>r||t.right<0||t.left>n}function Gt(e){gn.get(e)?.disconnect();let t=A.get(e),n=0;t||(t=$t(e),A.set(e,t));let{offsetWidth:r,offsetHeight:i}=I,a=[t.top-5,r-(t.left+5+t.width),i-(t.top+5+t.height),t.left-5].map(e=>`${-1*Math.floor(e)}px`).join(` `),o=new IntersectionObserver(()=>{++n>1&&O(e)},{root:I,threshold:1,rootMargin:a});o.observe(e),gn.set(e,o)}function O(e,t=!0){clearTimeout(P.get(e));let n=tn(e),r=t?sn(n)?500:n.duration:0;P.set(e,setTimeout(async()=>{let t=M.get(e);try{await t?.finished,A.set(e,$t(e)),Gt(e)}catch{}},r))}function Kt(){clearTimeout(P.get(I)),P.set(I,setTimeout(()=>{hn.forEach(e=>an(e,e=>Jt(()=>O(e))))},100))}function qt(e){setTimeout(()=>{vn.set(e,setInterval(()=>Jt(O.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function Jt(e){typeof requestIdleCallback==`function`?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function Yt(e){return e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]).every(e=>e.nodeName===`#comment`)?!1:e.reduce((e,t)=>{if(e===!1)return!1;if(t.target instanceof Element){if(Xt(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let r=t.target.children.item(n);if(r){if(xn in r)return!1;Xt(t.target,r),e.add(r)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let r=t.removedNodes[n];if(xn in r)return!1;r instanceof Element&&(e.add(r),Xt(t.target,r),j.set(r,[t.previousSibling,t.nextSibling]))}}return e},new Set)}function Xt(e,t){!t&&!(L in e)?Object.defineProperty(e,L,{value:e}):t&&!(L in t)&&Object.defineProperty(t,L,{value:e})}function Zt(e){var t;let n=e.isConnected,r=A.has(e);n&&j.has(e)&&j.delete(e),M.get(e)?.playState!==`finished`&&((t=M.get(e))==null||t.cancel()),Sn in e?ln(e):r&&n?cn(e):r&&!n?dn(e):ln(e)}function k(e){return Number(e.replace(/[^0-9.\-]/g,``))}function Qt(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function $t(e){let t=e.getBoundingClientRect(),{x:n,y:r}=Qt(e);return{top:t.top+r,left:t.left+n,width:t.width,height:t.height}}function en(e,t,n){let r=t.width,i=t.height,a=n.width,o=n.height,s=getComputedStyle(e);if(s.getPropertyValue(`box-sizing`)===`content-box`){let e=k(s.paddingTop)+k(s.paddingBottom)+k(s.borderTopWidth)+k(s.borderBottomWidth),t=k(s.paddingLeft)+k(s.paddingRight)+k(s.borderRightWidth)+k(s.borderLeftWidth);r-=t,a-=t,i-=e,o-=e}return[r,a,i,o].map(Math.round)}function tn(e){return L in e&&N.has(e[L])?N.get(e[L]):{duration:250,easing:`ease-in-out`}}function nn(e){if(L in e)return e[L]}function rn(e){let t=nn(e);return t?F.has(t):!1}function an(e,...t){t.forEach(t=>t(e,N.has(e)));for(let n=0;n<e.children.length;n++){let r=e.children.item(n);r&&t.forEach(e=>e(r,N.has(r)))}}function on(e){return Array.isArray(e)?e:[e]}function sn(e){return typeof e==`function`}function cn(e){let t=A.get(e),n=$t(e);if(!rn(e))return A.set(e,n);if(Wt(e)){A.set(e,n),Gt(e);return}let r;if(!t)return;let i=tn(e);if(typeof i!=`function`){let a=t.left-n.left,o=t.top-n.top,s=t.left+t.width-(n.left+n.width);t.top+t.height-(n.top+n.height)==0&&(o=0),s==0&&(a=0);let[c,l,u,d]=en(e,t,n),f={transform:`translate(${a}px, ${o}px)`},p={transform:`translate(0, 0)`};c!==l&&(f.width=`${c}px`,p.width=`${l}px`),u!==d&&(f.height=`${u}px`,p.height=`${d}px`),r=e.animate([f,p],{duration:i.duration,easing:i.easing})}else{let[a]=on(i(e,`remain`,t,n));r=new Animation(a),r.play()}M.set(e,r),A.set(e,n),r.addEventListener(`finish`,O.bind(null,e,!1),{once:!0})}function ln(e){Sn in e&&delete e[Sn];let t=$t(e);A.set(e,t);let n=tn(e);if(!rn(e))return;if(Wt(e)){Gt(e);return}let r;if(typeof n!=`function`)r=e.animate([{transform:`scale(.98)`,opacity:0},{transform:`scale(0.98)`,opacity:0,offset:.5},{transform:`scale(1)`,opacity:1}],{duration:n.duration*1.5,easing:`ease-in`});else{let[i]=on(n(e,`add`,t));r=new Animation(i),r.play()}M.set(e,r),r.addEventListener(`finish`,O.bind(null,e,!1),{once:!0})}function un(e,t){var n;e.remove(),A.delete(e),j.delete(e),M.delete(e),(n=gn.get(e))==null||n.disconnect(),setTimeout(()=>{if(xn in e&&delete e[xn],Object.defineProperty(e,Sn,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(let n in t)e.style[n]=``},0)}function dn(e){var t;if(!j.has(e)||!A.has(e))return;let[n,r]=j.get(e);Object.defineProperty(e,xn,{value:!0,configurable:!0});let i=window.scrollX,a=window.scrollY;if(r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):n&&n.parentNode?n.parentNode.appendChild(e):(t=nn(e))==null||t.appendChild(e),!rn(e))return un(e);let[o,s,c,l]=pn(e),u=tn(e),d=A.get(e);(i!==yn||a!==bn)&&fn(e,i,a,u);let f,p={position:`absolute`,top:`${o}px`,left:`${s}px`,width:`${c}px`,height:`${l}px`,margin:`0`,pointerEvents:`none`,transformOrigin:`center`,zIndex:`100`};if(!sn(u))Object.assign(e.style,p),f=e.animate([{transform:`scale(1)`,opacity:1},{transform:`scale(.98)`,opacity:0}],{duration:u.duration,easing:`ease-out`});else{let[t,n]=on(u(e,`remove`,d));n?.styleReset!==!1&&(p=n?.styleReset||p,Object.assign(e.style,p)),f=new Animation(t),f.play()}M.set(e,f),f.addEventListener(`finish`,()=>un(e,p),{once:!0})}function fn(e,t,n,r){let i=yn-t,a=bn-n,o=document.documentElement.style.scrollBehavior;if(getComputedStyle(I).scrollBehavior===`smooth`&&(document.documentElement.style.scrollBehavior=`auto`),window.scrollTo(window.scrollX+i,window.scrollY+a),!e.parentElement)return;let s=e.parentElement,c=s.clientHeight,l=s.clientWidth,u=performance.now();function d(){requestAnimationFrame(()=>{if(!sn(r)){let e=c-s.clientHeight,t=l-s.clientWidth;u+r.duration>performance.now()?(window.scrollTo({left:window.scrollX-t,top:window.scrollY-e}),c=s.clientHeight,l=s.clientWidth,d()):document.documentElement.style.scrollBehavior=o}})}d()}function pn(e){let t=A.get(e),[n,,r]=en(e,t,$t(e)),i=e.parentElement;for(;i&&(getComputedStyle(i).position===`static`||i instanceof HTMLBodyElement);)i=i.parentElement;i||=document.body;let a=getComputedStyle(i),o=!M.has(e)||M.get(e)?.playState===`finished`?$t(i):A.get(i);return[Math.round(t.top-o.top)-k(a.borderTopWidth),Math.round(t.left-o.left)-k(a.borderLeftWidth),n,r]}function mn(e,t={}){if(En&&Tn&&!(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches&&!sn(t)&&!t.disrespectUserMotionPreference)){F.add(e),getComputedStyle(e).position===`static`&&Object.assign(e.style,{position:`relative`}),an(e,O,qt,e=>Tn?.observe(e)),sn(t)?N.set(e,t):N.set(e,{duration:250,easing:`ease-in-out`,...t});let n=new MutationObserver(Cn);n.observe(e,{childList:!0}),_n.set(e,n),hn.add(e)}return Object.freeze({parent:e,enable:()=>{F.add(e)},disable:()=>{F.delete(e),an(e,e=>{let t=M.get(e);try{t?.cancel()}catch{}M.delete(e);let n=P.get(e);n&&clearTimeout(n),P.delete(e);let r=vn.get(e);r&&clearInterval(r),vn.delete(e)})},isEnabled:()=>F.has(e),destroy:()=>{F.delete(e),hn.delete(e),N.delete(e),_n.get(e)?.disconnect(),_n.delete(e),an(e,e=>{Tn?.unobserve(e);let t=M.get(e);try{t?.cancel()}catch{}M.delete(e),gn.get(e)?.disconnect(),gn.delete(e);let n=vn.get(e);n&&clearInterval(n),vn.delete(e);let r=P.get(e);r&&clearTimeout(r),P.delete(e),A.delete(e),j.delete(e)})}})}var hn,A,j,M,gn,_n,vn,N,P,F,I,yn,bn,L,xn,Sn,Cn,wn,Tn,En,Dn=t((()=>{hn=new Set,A=new WeakMap,j=new WeakMap,M=new WeakMap,gn=new WeakMap,_n=new WeakMap,vn=new WeakMap,N=new WeakMap,P=new WeakMap,F=new WeakSet,yn=0,bn=0,L=`__aa_tgt`,xn=`__aa_del`,Sn=`__aa_new`,Cn=e=>{let t=Yt(e);t&&t.forEach(e=>Zt(e))},wn=e=>{e.forEach(e=>{e.target===I&&Kt(),A.has(e.target)&&O(e.target)})},En=typeof window<`u`&&`ResizeObserver`in window,En&&(I=document.documentElement,new MutationObserver(Cn),Tn=new ResizeObserver(wn),window.addEventListener(`scroll`,()=>{bn=window.scrollY,yn=window.scrollX}),Tn.observe(I))}));function On(e){let[t,n]=(0,kn.useState)(),r=(0,kn.useMemo)(()=>e,[]),i=(0,kn.useCallback)(e=>{e instanceof HTMLElement?n(mn(e,r)):n(void 0)},[r]),a=(0,kn.useCallback)(e=>{t&&(e?t.enable():t.disable())},[t]);return(0,kn.useEffect)(()=>()=>{var e;(e=t?.destroy)==null||e.call(t)},[t]),[i,a]}var kn,An=t((()=>{kn=e(f(),1),Dn()})),R,jn,Mn,Nn=t((()=>{An(),S(),ve(),R=e(f()),jn=e(d()),Mn=(0,R.memo)(({batches:e,renderBatchItem:t})=>{let[n,r]=On(),i=(0,R.useRef)(null),a=(0,R.useRef)(!0),o=(0,R.useRef)(0),s=(e=`smooth`)=>{if(!i.current)return;let t=i.current.closest(`[style*="overflow"]`)||document.documentElement,n=i.current.getBoundingClientRect(),r=t.getBoundingClientRect(),a=t.scrollTop+n.bottom-r.bottom+999;t.scrollTo({behavior:e,top:a})};return(0,R.useEffect)(()=>{let t=e.length,n=o.current;if(t===0){o.current=0;return}if(a.current)s(`auto`),a.current=!1;else if(t>n){r(!1);let e=setTimeout(()=>{s(`smooth`),r(!0)},50);return()=>clearTimeout(e)}o.current=t},[e,r]),!e||e.length===0?null:(0,jn.jsxs)(p,{flex:1,children:[(0,jn.jsx)(p,{gap:16,ref:n,style:{paddingBottom:48},width:`100%`,children:e.map((e,n)=>(0,jn.jsxs)(R.Fragment,{children:[n!==0&&(0,jn.jsx)(ye,{dashed:!0,style:{margin:0}}),t(e)]},e.id))}),(0,jn.jsx)(`div`,{ref:i,style:{height:1}})]})}),Mn.displayName=`GenerationFeed`})),Pn,Fn,In,Ln=t((()=>{C(),Pn=e(f()),lt(),Fn=e(d()),In=(0,Pn.memo)(({title:e,content:t})=>(0,Fn.jsx)(ct,{icon:Me,popover:{content:t,minWidth:300,title:e},title:typeof e==`string`?e:void 0,trigger:`click`})),In.displayName=`ConfigAction`})),Rn,zn,Bn,Vn=t((()=>{ie(),S(),Be(),Rn=e(f()),n(),Te(),l(),ht(),bt(),zn=e(d()),Bn=(0,Rn.memo)(({provider:e,onNavigate:t})=>{let{t:n}=r([`modelProvider`,`error`]),i=we(),a=yt(e);return(0,zn.jsx)(gt,{avatar:(0,zn.jsx)(me,{provider:e,shape:`square`,size:40}),title:n(`unlock.apiKey.title`,{name:a,ns:`error`}),action:(0,zn.jsx)(ue,{type:`primary`,onClick:()=>{i(c(`/settings/provider`,e||`all`)),t?.()},children:n(`unlock.goToSettings`,{ns:`error`})}),desc:e===Ge.Bedrock?n(`bedrock.unlock.description`):n(`unlock.apiKey.description`,{name:a,ns:`error`})})}),Bn.displayName=`GenerationInvalidAPIKey`})),Hn,z,Un,Wn,Gn=t((()=>{S(),Re(),y(),C(),Hn=e(f()),n(),Te(),z=e(d()),Un=_(({css:e,cssVar:t})=>({lite:e`
    height: 36px;
  `,heroSelect:e`
    width: auto;
    font-size: inherit;
    line-height: 1.2;
  `,heroText:e`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
  `})),Wn=(0,Hn.memo)(({mode:e,layout:t=`toolbar`})=>{let{t:n}=r(`common`),i=we(),a=t===`hero`,o=(0,Hn.useMemo)(()=>[{label:(0,z.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[!a&&(0,z.jsx)(ee,{icon:Fe}),(0,z.jsx)(`span`,{className:a?Un.heroText:void 0,children:n(`tab.image`)})]}),value:`image`},{label:(0,z.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[!a&&(0,z.jsx)(ee,{icon:Ee}),(0,z.jsx)(`span`,{className:a?Un.heroText:void 0,children:n(`tab.video`)})]}),value:`video`}],[n,a]),s=(0,Hn.useCallback)(e=>{let t=String(e.value??``)===`video`,r=n(t?`tab.video`:`tab.image`);return a?(0,z.jsx)(`span`,{style:{fontSize:`inherit`,fontWeight:600,whiteSpace:`nowrap`},children:r}):(0,z.jsxs)(p,{horizontal:!0,align:`center`,gap:6,children:[(0,z.jsx)(ee,{icon:t?Ee:Fe,size:16}),(0,z.jsx)(`span`,{style:{whiteSpace:`nowrap`},children:r})]})},[a,n]),c=(0,Hn.useCallback)(t=>{t!==e&&i(t===`video`?`/video`:`/image`)},[e,i]);return(0,z.jsx)(ze,{className:a?Un.heroSelect:Un.lite,labelRender:s,options:o,popupMatchSelectWidth:!1,size:a?`large`:`middle`,value:e,variant:a?`borderless`:`filled`,onChange:c})}),Wn.displayName=`GenerationMediaModeSegment`})),Kn,B,qn,Jn,Yn=t((()=>{Xe(),S(),y(),Kn=e(f()),B=e(d()),qn=_(({css:e,cssVar:t})=>({textarea:e`
    padding: 0;
    border-radius: 0;
  `})),Jn=(0,Kn.memo)(({centerActions:e,className:t,header:n,inlineContent:r,leftActions:i,rightActions:a,isDarkMode:o,isCreating:s,value:c,onValueChange:l,onGenerate:u,placeholder:d,generateLabel:f,generatingLabel:m,disableGenerate:h,minRows:g=3,maxRows:_=6})=>{let v=(0,B.jsx)(re,{autoSize:{maxRows:_,minRows:g},className:qn.textarea,placeholder:d,value:c,variant:`borderless`,onChange:e=>l(e.target.value),onKeyDown:async e=>{e.key!==`Enter`||e.shiftKey||e.nativeEvent.isComposing||(e.preventDefault(),!(h||s||!c?.trim())&&await u())}});return(0,B.jsx)(Je,{className:t,header:n,styles:{body:{padding:8}},footer:e?(0,B.jsxs)(p,{horizontal:!0,align:`center`,gap:4,padding:4,width:`100%`,children:[(0,B.jsx)(p,{horizontal:!0,align:`center`,flex:1,gap:4,style:{justifyContent:`flex-start`,minWidth:0},children:i}),(0,B.jsx)(p,{align:`center`,flex:1,justify:`center`,style:{minWidth:0},children:e}),(0,B.jsxs)(p,{horizontal:!0,align:`center`,flex:1,gap:8,style:{justifyContent:`flex-end`,minWidth:0},children:[a,(0,B.jsx)(Ye,{disabled:h||!c,loading:s,title:s?m:f,onClick:u})]})]}):(0,B.jsx)(qe,{left:i,right:(0,B.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[a,(0,B.jsx)(Ye,{disabled:h||!c,loading:s,title:s?m:f,onClick:u})]})}),children:r?(0,B.jsxs)(p,{horizontal:!0,align:`start`,gap:8,children:[r,(0,B.jsx)(p,{flex:1,children:v})]}):v})}),Jn.displayName=`GenerationPromptInput`})),V,H,Xn,U,W,Zn=t((()=>{S(),ve(),y(),C(),V=e(f()),it(),tt(),H=e(d()),Xn=28,U=_(({css:e})=>({addCircle:e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: ${Xn}px;
    height: ${Xn}px;
    border-radius: 50%;

    color: ${x.colorTextSecondary};

    background: ${x.colorBgElevated};
    box-shadow:
      0 2px 8px rgb(0 0 0 / 15%),
      0 0 0 1px ${x.colorBorderSecondary};

    transition: all ${x.motionDurationMid} ease;

    &:hover {
      color: ${x.colorPrimary};
      background: ${x.colorPrimaryBg};
      box-shadow:
        0 2px 8px rgb(0 0 0 / 15%),
        0 0 0 1px ${x.colorPrimary};
    }
  `,closeButton:e`
    position: absolute;
    z-index: 10;
    inset-block-start: -6px;
    inset-inline-end: -6px;

    border-radius: 50% !important;
  `,filledCard:e`
    cursor: pointer;

    position: relative;

    flex-shrink: 0;

    width: ${64}px;
    height: ${64}px;
    padding: 2px;
    border-radius: 6px;

    transition: all ${x.motionDurationMid} ease;

    .upload-card-close {
      opacity: 0 !important;
    }

    &:hover {
      z-index: 99 !important;

      .upload-card-close {
        opacity: 1 !important;
      }
    }
  `,filledCardInner:e`
    position: relative;

    overflow: hidden;

    width: 100%;
    height: 100%;
    border-radius: 3px;
  `,label:e`
    padding-inline: 4px;

    font-size: 10px;
    line-height: 1;
    color: ${x.colorTextQuaternary};
    text-align: center;
  `,placeholderCard:e`
    cursor: pointer;

    flex-shrink: 0;

    width: ${64}px;
    height: ${64}px;
    border-radius: 6px;

    color: ${x.colorTextQuaternary};
  `,uploadOverlay:e`
    position: absolute;
    z-index: 5;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 3px;

    background: ${x.colorBgMask};
  `})),W=(0,V.memo)(({imageUrl:e,label:t,onUpload:n,onRemove:r,maxFileSize:i,className:a,closeClassName:o,style:s,variant:c=`card`})=>{let l=(0,V.useRef)(null),u=Ke(e=>e.uploadWithProgress),[d,f]=(0,V.useState)(!1),[p,h]=(0,V.useState)(null),g=(0,V.useCallback)(()=>{l.current?.click()},[]),_=(0,V.useCallback)(async e=>{let t=e.target.files?.[0];if(!t||i&&t.size>i)return;let r=URL.createObjectURL(t);h(r),f(!0);try{let e=await u({file:t,onStatusUpdate:()=>{},skipCheckFileType:!0});e?.url&&n(e.dimensions?{dimensions:e.dimensions,url:e.url}:e.url)}finally{URL.revokeObjectURL(r),h(null),f(!1)}},[i,u,n]),v=p||e,y=(0,H.jsx)(`input`,{accept:`image/*`,ref:l,style:{display:`none`},type:`file`,onChange:_,onClick:e=>{e.currentTarget.value=``}});return c===`circle`&&!v?(0,H.jsxs)(H.Fragment,{children:[y,(0,H.jsx)(`div`,{className:`${U.addCircle} ${a||``}`,style:s,onClick:g,children:(0,H.jsx)(ke,{size:14})})]}):v?(0,H.jsxs)(H.Fragment,{children:[y,(0,H.jsxs)(ae,{clickable:!0,className:m(U.filledCard,a),style:s,variant:`outlined`,onClick:g,children:[(0,H.jsxs)(`div`,{className:U.filledCardInner,children:[(0,H.jsx)(rt,{fill:!0,unoptimized:!0,alt:``,src:p||e,style:{objectFit:`cover`}}),d&&(0,H.jsx)(`div`,{className:U.uploadOverlay,children:(0,H.jsx)(_e,{percent:`auto`,size:`small`})})]}),!d&&(0,H.jsx)(he,{glass:!0,className:m(U.closeButton,o,`upload-card-close`),icon:Ie,size:12,variant:`outlined`,onClick:e=>{e.stopPropagation(),r()}})]})]}):(0,H.jsxs)(H.Fragment,{children:[y,(0,H.jsxs)(ae,{clickable:!0,align:`center`,className:m(U.placeholderCard,a),gap:4,justify:`center`,style:s,variant:`filled`,onClick:g,children:[(0,H.jsx)(ke,{size:20}),t&&(0,H.jsx)(`span`,{className:U.label,children:t})]})]})}),W.displayName=`UploadCard`})),Qn,$n,er,tr,nr,rr,ir=t((()=>{S(),y(),Qn=e(f()),Zn(),$n=e(d()),er=-56,tr=4,nr=_(({css:e})=>({addCirclePos:e`
    position: absolute;
    z-index: 100;
    inset-block-end: -2px;
    inset-inline-end: -2px;
  `,stack:e`
    position: relative;
    padding-block: 4px;
    padding-inline: 0;

    &:hover {
      .inline-ref-close {
        opacity: 1;
      }
    }
  `})),rr=(0,Qn.memo)(({images:e,onAdd:t,onRemove:n,maxFileSize:r,maxCount:i=5})=>{let[a,o]=(0,Qn.useState)(!1),s=e.length<i,c=e.length>0,l=c&&!a;return(0,$n.jsxs)(p,{horizontal:!0,align:`end`,className:nr.stack,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[e.map((e,i)=>(0,$n.jsx)(W,{closeClassName:`inline-ref-close`,imageUrl:e,maxFileSize:r,style:{marginInlineStart:i>0?l?er:tr:0,zIndex:i+1},onRemove:()=>n(e),onUpload:t},e)),s&&(l?(0,$n.jsx)(W,{className:nr.addCirclePos,maxFileSize:r,variant:`circle`,onRemove:()=>{},onUpload:t}):(0,$n.jsx)(W,{maxFileSize:r,style:{marginInlineStart:c?tr:0,zIndex:e.length+1},onRemove:()=>{},onUpload:t}))]})}),rr.displayName=`InlineImageReference`})),ar,G,or,sr,cr,lr,ur=t((()=>{S(),y(),C(),ar=e(f()),n(),Zn(),G=e(d()),or=-56,sr=4,cr=_(({css:e})=>({addCirclePos:e`
    position: absolute;
    z-index: 100;
    inset-block-end: -2px;
    inset-inline-end: -2px;
  `,refGroup:e`
    position: relative;
  `,stack:e`
    position: relative;
    padding-block: 4px;
    padding-inline: 0;

    &:hover {
      .inline-ref-close {
        opacity: 1;
      }
    }
  `,swapIcon:e`
    flex-shrink: 0;
    color: ${x.colorTextQuaternary};
  `})),lr=(0,ar.memo)(({imageUrl:e,imageUrls:t,endImageUrl:n,onImageChange:i,onEndImageChange:a,onImageUrlsChange:o,onRemoveImageUrl:s,isSupportEndImage:c=!0,maxCount:l=5,maxFileSize:u})=>{let{t:d}=r(`video`),[f,m]=(0,ar.useState)(!1),h=(0,ar.useMemo)(()=>{let n=[];return e&&n.push(e),Array.isArray(t)&&n.push(...t),n},[e,t]),g=h.length>0,_=h.length<l,v=g&&!f,y=c&&g;return(0,G.jsxs)(p,{horizontal:!0,align:`end`,className:cr.stack,gap:6,children:[(0,G.jsxs)(p,{horizontal:!0,align:`end`,className:cr.refGroup,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[h.map((t,n)=>{let r=t===e;return(0,G.jsx)(W,{closeClassName:`inline-ref-close`,imageUrl:t,label:d(n===0&&r?`config.imageUrl.label`:`config.referenceImage.label`),maxFileSize:u,style:{marginInlineStart:n>0?v?or:sr:0,zIndex:n+1},onRemove:()=>{r&&e===t?i(null):s&&s(t)},onUpload:r?e=>i(e):e=>o?.(e)},t)}),_&&(v?(0,G.jsx)(W,{className:cr.addCirclePos,maxFileSize:u,variant:`circle`,onRemove:()=>{},onUpload:e=>{o?o(e):i(e)}}):(0,G.jsx)(W,{imageUrl:null,label:d(`config.referenceImage.label`),maxFileSize:u,style:{marginInlineStart:g?sr:0,zIndex:h.length+1},onRemove:()=>{},onUpload:e=>{g&&o?o(e):i(e)}}))]}),y&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(p,{align:`center`,className:cr.swapIcon,justify:`center`,style:{height:64},children:(0,G.jsx)(Le,{size:14})}),(0,G.jsx)(W,{imageUrl:n,label:d(`config.endImageUrl.label`),onRemove:()=>a(null),onUpload:e=>a(e)})]})]})}),lr.displayName=`InlineVideoFrames`})),dr=t((()=>{Ln(),Vn(),Gn(),Yn(),ir(),ur()})),fr,pr,mr=t((()=>{y(),fr=g`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,pr=_(({css:e,cssVar:t})=>({generationActionButton:m(`generation-actions`,e`
      position: absolute;
      z-index: 10;
      inset-block-start: 8px;
      inset-inline-end: 8px;

      opacity: 0;

      transition: opacity 0.1s ${t.motionEaseInOut};
    `),imageContainer:e`
    position: relative;
    overflow: hidden;
    width: 100%;

    &:hover .generation-actions {
      opacity: 1;
    }
  `,placeholderContainer:e`
    position: relative;
    overflow: hidden;
    width: 100%;

    &:hover .generation-actions {
      opacity: 1;
    }
  `,placeholderContainerLoading:e`
    &::before {
      content: '';

      position: absolute;
      z-index: 1;
      inset: 0;

      background: ${t.colorFillSecondary};

      animation: ${fr} 2s linear infinite;
    }
  `,spinIcon:e`
    color: ${t.colorPrimary};
  `}))})),hr,gr,_r,vr,yr=t((()=>{S(),C(),hr=e(f()),n(),mr(),gr=e(d()),_r={tooltipProps:{placement:`left`}},vr=(0,hr.memo)(({onDelete:e,onDownload:t,onCopySeed:n,showDownload:i=!1,showCopySeed:a=!1,seedTooltip:o})=>{let{t:s}=r(`image`);return(0,gr.jsx)(le,{actionIconProps:_r,className:pr.generationActionButton,horizontal:!1,variant:`outlined`,items:(0,hr.useMemo)(()=>[!!(i&&t)&&{icon:je,key:`download`,label:s(`generation.actions.download`),onClick:t},!!(a&&n)&&{icon:Ne,key:`copySeed`,label:o,onClick:n},{danger:!0,icon:Ae,key:`delete`,label:s(`generation.actions.delete`),onClick:e}].filter(Boolean),[i,t,a,n,o,e])})}),vr.displayName=`ActionButtons`}));function br({generationId:e,isActive:t}){let[n,r]=(0,xr.useState)(null),i=(0,xr.useRef)(null),a=(0,xr.useRef)(0);return(0,xr.useEffect)(()=>{if(!t){i.current&&=(cancelAnimationFrame(i.current),null);let t=Cr(e);sessionStorage.removeItem(t),r(null);return}let n=Cr(e),o=(()=>{let e=sessionStorage.getItem(n);if(e)return Number(e);let t=Date.now();return sessionStorage.setItem(n,t.toString()),t})(),s=e=>{if(e-a.current>=100){let t=(Date.now()-o)/100;r(Math.max(0,t)),a.current=e}i.current=requestAnimationFrame(s)};return i.current=requestAnimationFrame(s),()=>{i.current&&cancelAnimationFrame(i.current)}},[e,t]),(0,Sr.jsx)(se,{code:!0,fontSize:10,type:`secondary`,children:(()=>{if(n===null)return``;let e=n/10;return e<60?`${e.toFixed(1)}s`:`${(e/60).toFixed(1)}min`})()})}var xr,Sr,Cr,wr=t((()=>{S(),xr=e(f()),Sr=e(d()),Cr=e=>`generation_start_time_${e}`})),Tr,K,Er,Dr,Or=t((()=>{S(),y(),Tr=e(f()),h(),at(),K=e(d()),Er=e=>{let t=e.split(`:`);if(t.length!==2)return!1;let[n,r]=t.map(Number);return!isNaN(n)&&!isNaN(r)&&n>0&&r>0},Dr=(0,Tr.memo)(({options:e,onChange:t,value:n,defaultValue:r,...i})=>{let a=nt(),[o,s]=v(`1:1`,{defaultValue:r||`1:1`,onChange:t,value:n});return(0,K.jsx)(ae,{padding:4,variant:`filled`,...i,children:(0,K.jsx)(de,{gap:4,maxItemWidth:48,rows:16,children:e?.map(e=>{let n=o===e.value,r;if(Er(e.value)){let[t,i]=e.value.split(`:`).map(Number),a=t>i;r=(0,K.jsx)(`div`,{style:{aspectRatio:`${t} / ${i}`,border:`2px solid ${n?x.colorText:x.colorTextDescription}`,borderRadius:3,height:a?void 0:16,width:a?16:void 0}})}else r=(0,K.jsx)(`div`,{style:{border:`2px dashed ${n?x.colorText:x.colorTextDescription}`,borderRadius:3,height:16,width:16}});return(0,K.jsxs)(ae,{clickable:!0,align:`center`,gap:4,justify:`center`,padding:8,shadow:n&&!a,variant:`filled`,style:{backgroundColor:n?x.colorBgElevated:`transparent`},onClick:()=>{s(e.value),t?.(e.value)},children:[(0,K.jsx)(b,{height:16,style:{marginTop:4},width:16,children:r}),(0,K.jsx)(se,{fontSize:12,type:n?void 0:`secondary`,children:e.label||e.value})]},e.value)})})})})}));function q(e){let t=w(T.parameters),n=w(T.parametersSchema),r=t?.[e],i=w(e=>e.setParamOnInput),a=(0,Ar.useCallback)(t=>{i(e,t)},[e,i]),o=n?.[e];return{value:r,setValue:a,...(0,Ar.useMemo)(()=>{let e=o&&typeof o==`object`&&`min`in o?o.min:void 0,t=o&&typeof o==`object`&&`max`in o?o.max:void 0,n=o&&typeof o==`object`&&`step`in o?o.step:void 0;return{description:o&&typeof o==`object`&&`description`in o?o.description:void 0,max:t,min:e,step:n,enumValues:o&&typeof o==`object`&&`enum`in o?o.enum:void 0,maxFileSize:o&&typeof o==`object`&&`maxFileSize`in o?o.maxFileSize:void 0,maxCount:o&&typeof o==`object`&&`maxCount`in o?o.maxCount:void 0}},[o])}}function kr(){let e=w(),t=w(T.parametersSchema),n=w(e=>e.parameters?.aspectRatio),r=e.activeAspectRatio??n??`1:1`,i=w(T.isSupportedParam(`width`)),a=w(T.isSupportedParam(`height`)),o=w(T.isSupportedParam(`aspectRatio`)),s=(0,Ar.useMemo)(()=>{let e=t?.aspectRatio?.enum||[];return e.length>0?e:Ue},[t]),c=o||i||a;return{isLocked:e.isAspectRatioLocked,toggleLock:e.toggleAspectRatioLock,width:e.parameters?.width,height:e.parameters?.height,aspectRatio:r,setWidth:e.setWidth,setHeight:e.setHeight,setAspectRatio:e.setAspectRatio,widthSchema:t?.width,heightSchema:t?.height,options:s,showDimensionControl:c}}var Ar,J=t((()=>{Be(),Ar=e(f()),pt(),mt()})),jr,Mr,Nr,Pr=t((()=>{S(),jr=e(f()),J(),Mr=e(d()),Nr=(0,jr.memo)(()=>{let{value:e,setValue:t,min:n,max:r}=q(`cfg`);return(0,Mr.jsx)(ne,{max:r,min:n,value:e,onChange:t})})})),Fr,Y,Ir,Lr,Rr=t((()=>{S(),C(),Fr=e(f()),n(),J(),Or(),Y=e(d()),Ir={aspectRatioSelect:{width:`100%`},label:{fontWeight:500}},Lr=(0,Fr.memo)(()=>{let{t:e}=r(`image`),{isLocked:t,toggleLock:n,width:i,height:a,aspectRatio:o,setWidth:s,setHeight:c,setAspectRatio:l,widthSchema:u,heightSchema:d,options:f}=kr(),m=(0,Fr.useMemo)(()=>f.map(e=>({label:e,value:e})),[f]),h=e(t?`config.aspectRatio.unlock`:`config.aspectRatio.lock`),g=t?Oe:De;return(0,Y.jsxs)(p,{gap:16,children:[(0,Y.jsxs)(p,{gap:8,children:[(0,Y.jsxs)(p,{horizontal:!0,align:`center`,distribution:`space-between`,children:[(0,Y.jsx)(`span`,{style:Ir.label,children:e(`config.aspectRatio.label`)}),(0,Y.jsx)(he,{"aria-label":h,icon:g,size:`small`,title:h,onClick:n})]}),(0,Y.jsx)(Dr,{options:m,style:Ir.aspectRatioSelect,value:o,onChange:l})]}),u&&(0,Y.jsxs)(p,{gap:8,children:[(0,Y.jsx)(`span`,{style:Ir.label,children:e(`config.width.label`)}),(0,Y.jsx)(ne,{max:u.max,min:u.min,value:i??u.min,onChange:s})]}),d&&(0,Y.jsxs)(p,{gap:8,children:[(0,Y.jsx)(`span`,{style:Ir.label,children:e(`config.height.label`)}),(0,Y.jsx)(ne,{max:d.max,min:d.min,value:a??d.min,onChange:c})]})]})}),Lr.displayName=`DimensionControlGroup`})),X,zr,Br,Vr,Hr=t((()=>{S(),C(),X=e(f()),dt(),Ut(),et(),zr=e(d()),Br=`__custom__`,Vr=(0,X.memo)(({presetCounts:e=[1,2,4,8],min:t=1,max:n,disabled:r=!1})=>{let i=w(T.imageNum),a=w(e=>e.setImageNum),o=$e(Qe.enableBusinessFeatures),s=n??(o?8:50),[c,l]=(0,X.useState)(!1),[u,d]=(0,X.useState)(null),f=(0,X.useRef)(null),m=(0,X.useRef)(null),h=!e.includes(i),g=(0,X.useMemo)(()=>{let t=e.map(e=>({label:String(e),value:e}));return h?t.push({label:String(i),value:i}):t.push({label:(0,zr.jsx)(ke,{size:16,style:{verticalAlign:`middle`}}),value:Br}),t},[e,h,i]),_=(0,X.useCallback)(e=>{r||(e===Br||h&&e===i?(d(i),f.current=i,l(!0)):a(e))},[r,h,i,a]),v=(0,X.useCallback)(()=>{let e=f.current;if(e===null){l(!1);return}e>s?e=s:e<t&&(e=t),a(e),l(!1),d(null)},[t,s,a]),y=(0,X.useCallback)(()=>{l(!1),d(null)},[]),b=(0,X.useCallback)(e=>{if(e===null){d(null),f.current=null;return}let t=parseInt(String(e),10);isNaN(t)||(d(t),f.current=t)},[]);(0,X.useEffect)(()=>{c&&setTimeout(()=>{m.current&&(m.current.focus(),m.current.select())},100)},[c]);let ee=u!==null;return c?(0,zr.jsxs)(p,{horizontal:!0,gap:8,style:{width:`100%`},children:[(0,zr.jsx)(pe,{max:s,min:t,placeholder:`${t}-${s}`,ref:m,size:`small`,style:{flex:1},value:u,onChange:b,onPressEnter:v,onKeyDown:e=>{e.key===`Escape`&&(e.preventDefault(),y())}}),(0,zr.jsx)(he,{disabled:!ee,icon:Pe,size:`small`,variant:`filled`,onClick:v}),(0,zr.jsx)(he,{icon:Ie,size:`small`,variant:`filled`,onClick:y})]}):(0,zr.jsx)(ce,{block:!0,disabled:r,options:g,style:{width:`100%`},value:i,variant:`filled`,onChange:_})}),Vr.displayName=`ImageCountSelector`})),Ur,Wr,Z,Gr,Q,Kr,qr=t((()=>{Ve(),i(),ie(),S(),y(),Ur=e(a()),Wr=e(f()),n(),ot(),at(),et(),Ze(),Z=e(d()),Gr=320,Q=_(({css:e,cssVar:t})=>({descriptionText:e`
    color: ${t.colorTextSecondary};
  `,descriptionText_dark:e`
    color: ${t.colorText};
  `,popover:e`
    .ant-popover-inner {
      background: ${t.colorBgElevated};
    }
  `,popover_dark:e`
    .ant-popover-inner {
      background: ${t.colorBgSpotlight};
    }
  `,priceText:e`
    font-weight: 500;
    color: ${t.colorTextTertiary};
    word-break: keep-all;
    white-space: nowrap;
  `,priceText_dark:e`
    font-weight: 500;
    color: ${t.colorTextLightSolid};
  `})),Kr=(0,Wr.memo)(({approximatePricePerImage:e,approximatePricePerVideo:t,description:n,pricePerImage:i,pricePerVideo:a,providerId:o,showPopover:s=!0,showBadge:c=!0,showPrice:l=!1,priceKind:d=`image`,...f})=>{let h=nt(),{t:g}=r(`components`),_=$e(Qe.enableBusinessFeatures),v=(0,Wr.useMemo)(()=>{if(!l)return;let n=d===`video`,r=n?a:i,s=n?t:e;if(_&&o===`lobehub`){if(typeof r==`number`){let e=r*u;return g(n?`GenerationModelItem.creditsPerVideoExact`:`GenerationModelItem.creditsPerImageExact`,{amount:(0,Ur.default)(e).format(`0,0`)})}if(typeof s==`number`){let e=s*u;return g(n?`GenerationModelItem.creditsPerVideoApproximate`:`GenerationModelItem.creditsPerImageApproximate`,{amount:(0,Ur.default)(e).format(`0,0`)})}}else{if(typeof r==`number`)return`${(0,Ur.default)(r).format(`$0,0.00[000]`)} / ${n?`video`:`image`}`;if(typeof s==`number`)return`~ ${(0,Ur.default)(s).format(`$0,0.00[000]`)} / ${n?`video`:`image`}`}},[l,e,t,_,i,a,d,o,g]),y=(0,Wr.useMemo)(()=>!n&&!v?null:(0,Z.jsxs)(p,{gap:8,style:{maxWidth:Gr},children:[n&&(0,Z.jsx)(se,{className:m(Q.descriptionText,h&&Q.descriptionText_dark),children:n}),v&&(0,Z.jsx)(se,{className:m(Q.priceText,h&&Q.priceText_dark),children:v})]}),[n,v,h]),b=(0,Z.jsxs)(p,{horizontal:!0,align:`center`,gap:8,style:{overflow:`hidden`},children:[(0,Z.jsx)(oe,{model:f.id,size:20}),(0,Z.jsx)(se,{ellipsis:!0,title:f.displayName||f.id,children:f.displayName||f.id}),c&&(0,Z.jsx)(st,{releasedAt:f.releasedAt})]});return!s||!y?b:(0,Z.jsx)(ge,{classNames:{root:m(Q.popover,h&&Q.popover_dark)},content:y,placement:`rightTop`,children:b})}),Kr.displayName=`GenerationModelItem`})),Jr,Yr,Xr=t((()=>{qr(),Jr=e(d()),Yr=e=>(0,Jr.jsx)(Kr,{...e,showPrice:!0})})),Zr,Qr,$r,ei=t((()=>{S(),Zr=e(f()),n(),J(),Qr=e(d()),$r=(0,Zr.memo)(()=>{let{t:e}=r(`image`),{value:t,setValue:n,enumValues:i}=q(`quality`);return(0,Qr.jsx)(fe,{options:i?.map(t=>({label:e(t===`standard`?`config.quality.options.standard`:`config.quality.options.hd`),value:t}))??[],style:{width:`100%`},value:t,onChange:n})})})),ti,ni,ri,ii=t((()=>{S(),ti=e(f()),n(),J(),ni=e(d()),ri=(0,ti.memo)(()=>{let{t:e}=r(`image`),{value:t,setValue:n,enumValues:i}=q(`resolution`),a=(0,ti.useCallback)(e=>{n(String(e))},[n]),o=(0,ti.useMemo)(()=>!i||i.length===0?[]:i.map(t=>({label:e(`config.resolution.options.${t}`,{defaultValue:t}),value:t})),[i,e]);return o.length===0?null:(0,ni.jsx)(ce,{block:!0,options:o,style:{width:`100%`},value:t,variant:`filled`,onChange:a})})})),ai,oi,si,ci=t((()=>{S(),C(),Be(),ai=e(f()),n(),o(),oi=e(d()),si=(0,ai.memo)(({value:e,onChange:t,style:n,className:i,...a})=>{let{t:o}=r(`image`),c=(0,ai.useCallback)(()=>{let e=s(1)[0];t?.(e)},[t]);return(0,oi.jsxs)(p,{horizontal:!0,className:i,gap:4,style:n,children:[(0,oi.jsx)(pe,{max:We,min:0,placeholder:o(`config.seed.random`),step:1,style:{width:`100%`},value:e,onChange:t,...a}),(0,oi.jsx)(te,{title:o(`config.seed.random`),children:(0,oi.jsx)(ue,{icon:Ne,style:{flex:`none`,width:48},variant:`outlined`,onClick:c})})]})})})),li,ui,di,fi=t((()=>{li=e(f()),n(),J(),ci(),ui=e(d()),di=(0,li.memo)(()=>{let{t:e}=r(`image`),{value:t,setValue:n}=q(`seed`);return(0,ui.jsx)(si,{placeholder:e(`config.seed.random`),value:t,onChange:n})})})),pi,$,mi,hi,gi=t((()=>{S(),y(),pi=e(f()),h(),at(),$=e(d()),mi=e=>{if(e===`auto`)return!0;let t=e.split(`x`);if(t.length!==2)return!1;let[n,r]=t.map(Number);return!isNaN(n)&&!isNaN(r)&&n>0&&r>0},hi=(0,pi.memo)(({options:e,onChange:t,value:n,defaultValue:r,...i})=>{let a=nt(),[o,s]=v(`auto`,{defaultValue:r,onChange:t,value:n});return e?.some(e=>!mi(e.value))?(0,$.jsx)(fe,{options:e,style:{width:`100%`},value:o,onChange:t}):(0,$.jsx)(ae,{padding:4,variant:`filled`,...i,children:(0,$.jsx)(de,{gap:4,maxItemWidth:72,rows:16,children:e?.map(e=>{let n=o===e.value,r;if(e.value===`auto`)r=(0,$.jsx)(`div`,{style:{border:`2px dashed ${n?x.colorText:x.colorTextDescription}`,borderRadius:3,height:16,width:16}});else{let[t,i]=e.value.split(`x`).map(Number),a=t>i;r=(0,$.jsx)(`div`,{style:{aspectRatio:`${t} / ${i}`,border:`2px solid ${n?x.colorText:x.colorTextDescription}`,borderRadius:3,height:a?void 0:16,width:a?16:void 0}})}return(0,$.jsxs)(ae,{clickable:!0,align:`center`,gap:4,justify:`center`,padding:8,shadow:n&&!a,variant:`filled`,style:{backgroundColor:n?x.colorBgElevated:`transparent`},onClick:()=>{s(e.value),t?.(e.value)},children:[(0,$.jsx)(b,{height:16,style:{marginTop:4},width:16,children:r}),(0,$.jsx)(se,{fontSize:12,type:n?void 0:`secondary`,children:e.label||e.value})]},e.value)})})})})})),_i,vi,yi,bi=t((()=>{_i=e(f()),J(),gi(),vi=e(d()),yi=(0,_i.memo)(()=>{let{value:e,setValue:t,enumValues:n}=q(`size`);return(0,vi.jsx)(hi,{options:n.map(e=>({label:e,value:e})),value:e,onChange:t})})})),xi,Si,Ci,wi=t((()=>{S(),xi=e(f()),J(),Si=e(d()),Ci=(0,xi.memo)(()=>{let{value:e,setValue:t,min:n,max:r}=q(`steps`);return(0,Si.jsx)(ne,{max:r,min:n,value:e,onChange:t})})})),Ti,Ei=t((()=>{Ti=(e,t,n)=>{let r=e,i=t;if(r>n.width.max||i>n.height.max){let e=n.width.max/r,t=n.height.max/i,a=Math.min(e,t);r=Math.round(r*a),i=Math.round(i*a)}if(r<n.width.min||i<n.height.min){let e=n.width.min/r,t=n.height.min/i,a=Math.max(e,t);r=Math.round(r*a),i=Math.round(i*a)}return r=Math.max(n.width.min,Math.min(n.width.max,r)),i=Math.max(n.height.min,Math.min(n.height.max,i)),r=Math.round(r/8)*8,i=Math.round(i/8)*8,r=Math.max(n.width.min,Math.min(n.width.max,r)),i=Math.max(n.height.min,Math.min(n.height.max,i)),{height:i,width:r}}})),Di,Oi,ki=t((()=>{Be(),dt(),Ut(),Ei(),Di=e=>{let t=typeof e==`string`?e:e?.url;return{dimensions:typeof e==`object`?e?.dimensions:void 0,url:t}},Oi=()=>{let e=w(T.parametersSchema),t=w(T.isSupportedParam(`width`)),n=w(T.isSupportedParam(`height`)),r=w(e=>e.setWidth),i=w(e=>e.setHeight);return{autoSetDimensions:a=>{if(!t||!n)return;let o={height:{max:e.height?.max||He.MAX_SIZE,min:e.height?.min||He.MIN_SIZE},width:{max:e.width?.max||He.MAX_SIZE,min:e.width?.min||He.MIN_SIZE}},s=Ti(a.width,a.height,o);r(s.width),i(s.height)},canAutoSet:t&&n,extractUrlAndDimensions:Di}}})),Ai=t((()=>{Or(),Pr(),Rr(),Hr(),Xr(),ei(),ii(),fi(),bi(),wi(),ki()})),ji,Mi,Ni,Pi=t((()=>{S(),ji=e(f()),n(),Gn(),Mi=e(d()),Ni=(0,ji.memo)(({mode:e})=>{let{t}=r(`common`);return(0,Mi.jsxs)(p,{horizontal:!0,align:`center`,justify:`center`,style:{fontSize:28,fontWeight:`bold`,marginBottom:24},width:`100%`,children:[t(`generation.hero.taglinePrefix`),(0,Mi.jsx)(Wn,{layout:`hero`,mode:e})]})}),Ni.displayName=`PromptTitle`}));export{Nn as $,q as A,lr as B,Hr as C,Pr as D,Nr as E,vr as F,Yn as G,rr as H,yr as I,Bn as J,Wn as K,mr as L,Or as M,br as N,J as O,wr as P,Mn as Q,pr as R,Vr as S,Rr as T,ir as U,ur as V,Jn as W,In as X,Vn as Y,Ln as Z,ei as _,Oi as a,Lt as at,Kr as b,yi as c,kt as ct,gi as d,An as et,di as f,$r as g,ii as h,ki as i,Ht as it,Dr as j,kr as k,bi as l,ri as m,Pi as n,Ut as nt,Ci as o,Rt as ot,fi as p,Gn as q,Ai as r,Vt as rt,wi as s,Ot as st,Ni as t,On as tt,hi as u,Yr as v,Lr as w,qr as x,Xr as y,dr as z};