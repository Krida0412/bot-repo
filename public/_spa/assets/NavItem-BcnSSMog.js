import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{Rs as n,vl as r,yl as i}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as a,Ba as o,Ia as s,L as c,Ma as l,Oa as u,da as d,za as f}from"./imperative-CZQgOWZc.js";import{Is as p,Os as m,k as h,n as g}from"./es-na8XYpNF.js";import{n as _,t as v}from"./NeuralNetworkLoading-b9TOx-uK.js";var y,b,x,S,C=t((()=>{g(),l(),y=e(i()),b=e(r()),x=(0,y.memo)(({padding:e=6,height:t=36,style:n,avatarSize:r=28,...i})=>(0,b.jsxs)(a,{horizontal:!0,align:`center`,flex:1,gap:8,height:t,padding:e,style:n,...i,children:[(0,b.jsx)(h.Button,{size:`small`,style:{borderRadius:f.borderRadius,height:r,maxHeight:r,maxWidth:r,minWidth:r}}),(0,b.jsx)(a,{flex:1,height:16,children:(0,b.jsx)(h.Button,{active:!0,block:!0,size:`small`,style:{borderRadius:f.borderRadius,height:16,margin:0,maxHeight:16,opacity:.5,padding:0}})})]})),S=(0,y.memo)(({rows:e=3,...t})=>(0,b.jsx)(a,{gap:2,...t,children:Array.from({length:e}).map((e,t)=>(0,b.jsx)(x,{},t))}))})),w,T=t((()=>{n(),w=e=>e.metaKey||e.ctrlKey})),E,D,O,k,A,j=t((()=>{g(),l(),E=e(i()),_(),T(),D=e(r()),O=`nav-item-actions`,k=s(({css:e})=>({container:e`
    user-select: none;
    overflow: hidden;
    min-width: 32px;

    .${O} {
      width: 0;
      margin-inline-end: 2px;
      opacity: 0;
      transition: opacity 0.2s ${f.motionEaseOut};

      &:has([data-popup-open]) {
        width: unset;
        opacity: 1;
      }
    }

    &:hover {
      .${O} {
        width: unset;
        opacity: 1;
      }
    }
  `})),A=(0,E.memo)(({className:e,actions:t,contextMenuItems:n,active:r,href:i,icon:s,iconSize:l=18,title:h,onClick:g,disabled:_,loading:y,extra:b,slots:x,...S})=>{let C=r?f.colorText:f.colorTextDescription,T=r?f.colorText:f.colorTextSecondary,E=r?`filled`:`borderless`,{titlePrefix:A,iconPostfix:j}=x||{},M=i?{as:`a`,href:i,style:{color:`inherit`,textDecoration:`none`}}:{},N=(0,D.jsxs)(p,{horizontal:!0,align:`center`,className:o(k.container,e),clickable:!_,gap:8,height:36,paddingInline:4,variant:E,onClick:e=>{i&&!w(e)&&e.preventDefault(),!_&&g?.(e)},...M,...S,children:[s&&(0,D.jsx)(u,{flex:`none`,height:28,width:28,children:y?(0,D.jsx)(v,{size:l}):(0,D.jsx)(d,{color:C,icon:s,size:l})}),j,(0,D.jsxs)(a,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},children:[A,(0,D.jsx)(m,{color:T,style:{flex:1},ellipsis:{tooltipWhenOverflow:!0},children:h}),(0,D.jsxs)(a,{horizontal:!0,align:`center`,gap:2,justify:`flex-end`,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:[b,t&&(0,D.jsx)(a,{horizontal:!0,align:`center`,className:O,gap:2,justify:`flex-end`,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:t})]})]})]});return n?(0,D.jsx)(c,{items:n,children:N}):N})}));export{x as a,w as i,j as n,S as o,T as r,C as s,A as t};