import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{vl as n,yl as r}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Ba as i,Ia as a,Ma as o,no as s,to as c}from"./imperative-Xfjd337A.js";import{Fn as l}from"./es-2ZVhpwv7.js";var u,d=t((()=>{o(),u=a(({css:e,cssVar:t})=>({container:e`
    display: inline-block;
    white-space: pre-wrap;
  `,cursor:e`
    transform: translateY(10%);

    display: inline-block;
    align-items: center;

    width: 3px;
    height: 1em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${t.colorPrimary};
  `,cursorBlock:e`
    transform: translateY(10%);

    display: inline-block;
    align-items: center;

    width: 0.5em;
    height: 1em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${t.colorPrimary};
  `,cursorCustom:e`
    display: inline-block;
    align-items: center;
    margin-inline-start: 0.25rem;
    opacity: 1;
  `,cursorDot:e`
    display: inline-block;
    align-items: center;

    width: 0.75em;
    height: 0.75em;
    margin-inline-start: 0.25rem;
    border-radius: 50%;

    opacity: 1;
    background-color: ${t.colorPrimary};
  `,cursorHidden:e`
    display: none;
  `,cursorUnderscore:e`
    transform: translateY(0.3em);

    display: inline-block;
    align-items: center;

    width: 0.6em;
    height: 0.15em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${t.colorPrimary};
  `,text:e`
    color: ${t.colorText};
  `}))})),f,p,m,h=t((()=>{c(),d(),f=e(r(),1),p=e(n(),1),o(),m=(0,f.memo)(({sentences:e,as:t=`div`,typingSpeed:n=100,initialDelay:r=0,pauseDuration:a=2e3,deletingSpeed:o=50,deletePauseDuration:c=0,loop:l=!0,className:d=``,color:m,showCursor:h=!0,hideCursorWhileTyping:g=!1,cursorCharacter:_,cursorClassName:v=``,cursorColor:y,cursorBlinkDuration:b=.8,cursorFade:x=!0,cursorStyle:S=`pipe`,textColors:C=[],variableSpeed:w,onSentenceComplete:T,startOnVisible:E=!1,reverseMode:D=!1,segmentMode:O=`grapheme`,...k})=>{let A=s(),j=i,[M,N]=(0,f.useState)(``),[P,F]=(0,f.useState)(0),[I,L]=(0,f.useState)(!1),[R,ee]=(0,f.useState)(0),[z,B]=(0,f.useState)(!E),[V,H]=(0,f.useState)(!1),U=(0,f.useRef)(null),W=(0,f.useMemo)(()=>Array.isArray(e)?e:[e],[e]),G=(0,f.useCallback)(e=>{if(typeof Intl<`u`&&`Segmenter`in Intl){let t=new Intl.Segmenter(void 0,{granularity:O});return Array.from(t.segment(e),e=>e.segment)}return O===`word`?e.split(/(\s+)/).filter(Boolean):Array.from(e)},[O]),K=(0,f.useCallback)(()=>{if(!w)return n;let{min:e,max:t}=w;return Math.random()*(t-e)+e},[w,n]),q=()=>C.length>0?C[R%C.length]:m,J=()=>y||m;(0,f.useEffect)(()=>{if(!E||!U.current)return;let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&B(!0)})},{threshold:.1});return e.observe(U.current),()=>e.disconnect()},[E]),(0,f.useEffect)(()=>{if(!z)return;let e,t=W[R],i=G(t),s=D?i.reverse().join(``):t;if(V)return e=setTimeout(()=>{H(!1)},c),()=>clearTimeout(e);let u=()=>{if(I)if(M===``){if(L(!1),R===W.length-1&&!l)return;if(T&&T(W[R],R),ee(e=>(e+1)%W.length),F(0),c>0){H(!0);return}}else e=setTimeout(()=>{N(e=>G(e).slice(0,-1).join(``))},o);else{let t=G(s);if(P<t.length)e=setTimeout(()=>{N(e=>e+t[P]),F(e=>e+1)},w?K():n);else if(W.length>=1){if(!l&&R===W.length-1)return;e=setTimeout(()=>{L(!0)},a)}}};return P===0&&!I&&M===``?e=setTimeout(u,r):u(),()=>clearTimeout(e)},[P,M,I,V,n,o,c,a,W,R,l,r,z,D,w,T,K,G]);let Y=()=>{if(_)return u.cursorCustom;switch(S){case`block`:return u.cursorBlock;case`dot`:return u.cursorDot;case`underscore`:return u.cursorUnderscore;case`pipe`:return u.cursor}},X=G(W[R]).length,Z=g===!0?!0:g===`typing`?P<X&&!I||I:g===`afterTyping`?P===X&&!I:!1,Q=q(),$=J(),te=G(M);return(0,f.createElement)(t,{className:j(u.container,d),ref:U,...k},(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:u.text,style:Q?{color:Q}:void 0,children:te.map((e,t)=>(0,p.jsx)(A.span,{animate:{opacity:1},initial:{opacity:0},style:{display:`inline-block`},transition:{duration:n/500,ease:`easeInOut`},children:e===` `?`\xA0`:e},`${R}-${t}`))}),h&&(x?(0,p.jsx)(A.span,{animate:{opacity:+!Z},className:j(Y(),v),initial:{opacity:0},style:$?{backgroundColor:$}:void 0,transition:{duration:Z?.2:b,ease:`easeInOut`,repeat:Z?0:1/0,repeatType:`reverse`},children:_}):(0,p.jsx)(`span`,{className:j(Y(),v),style:{backgroundColor:$,opacity:+!Z},children:_}))]}))}),m.displayName=`TypewriterEffect`})),g=t((()=>{l(),h()}));export{m as n,h as r,g as t};