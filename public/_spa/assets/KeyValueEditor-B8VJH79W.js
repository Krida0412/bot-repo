import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{E as i,vl as a,w as o,yl as s}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as c,Ia as l,Ma as u,da as d}from"./imperative-CZQgOWZc.js";import{cs as f,n as p,ws as m}from"./es-na8XYpNF.js";import{ba as h,dt as g,vn as _}from"../vendor/vendor-icons-BrLWQuP2.js";import{t as v}from"./fast-deep-equal-MG-n9E1a.js";import{o as y,t as b}from"./FormInput-BXILr-DX.js";var x,S,C=t((()=>{o(),x=(e={})=>Object.entries(e||{}).map(([e,t])=>({id:i(),key:e,value:typeof t==`string`?t:``})),S=(e=[])=>{let t={},n=new Set;return(e||[]).slice().reverse().forEach(e=>{let r=e.key.trim();r&&!n.has(r)&&(t[r]=typeof e.value==`string`?e.value:``,n.add(r))}),Object.keys(t).reverse().reduce((e,n)=>(e[n]=t[n],e),{})}})),w,T,E,D,O,k=t((()=>{p(),u(),w=e(v()),g(),T=e(s()),n(),o(),b(),C(),E=e(a()),D=l(({css:e,cssVar:t})=>({container:e`
    position: relative;

    width: 100%;
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};
  `,input:e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
  `,row:e`
    margin-block-end: 8px;

    &:last-child {
      margin-block-end: 0;
    }
  `,title:e`
    margin-block-end: 8px;
    color: ${t.colorTextTertiary};
  `})),O=(0,T.memo)(({value:e,onChange:t,keyPlaceholder:n,valuePlaceholder:a,addButtonText:o,duplicateKeyErrorText:s,deleteTooltip:l,style:u})=>{let{t:p}=r(`components`),[g,v]=(0,T.useState)(()=>x(e)),b=(0,T.useRef)(void 0);(0,T.useEffect)(()=>{let t=e||{};(0,w.default)(t,b.current)||(v(x(t)),b.current=t)},[e]);let C=e=>{let n={};e.forEach(e=>{let t=e.key.trim();t&&(n[t]=(n[t]||0)+1)}),v(e.map(e=>({...e}))),t?.(S(e))},O=()=>{C([...g,{id:i(),key:``,value:``}])},k=e=>{C(g.filter(t=>t.id!==e))},A=(e,t)=>{C(g.map(n=>n.id===e?{...n,key:t}:n))},j=(e,t)=>{C(g.map(n=>n.id===e?{...n,value:t}:n))},M=(e=>{let t=new Set,n=new Set;return e.forEach(e=>{let r=e.key.trim();r&&(t.has(r)?n.add(r):t.add(r))}),n})(g);return(0,E.jsxs)(`div`,{className:D.container,style:u,children:[(0,E.jsxs)(c,{horizontal:!0,className:D.title,gap:8,children:[(0,E.jsx)(c,{flex:1,children:n||p(`KeyValueEditor.keyPlaceholder`)}),(0,E.jsx)(c,{flex:2,children:a||p(`KeyValueEditor.valuePlaceholder`)}),(0,E.jsx)(c,{style:{width:30}})]}),(0,E.jsxs)(c,{width:`100%`,children:[g.map(e=>{let t=e.key.trim()&&M.has(e.key.trim());return(0,E.jsxs)(c,{horizontal:!0,align:`flex-start`,className:D.row,gap:8,width:`100%`,children:[(0,E.jsxs)(c,{flex:1,style:{position:`relative`},children:[(0,E.jsx)(y,{className:D.input,placeholder:n||p(`KeyValueEditor.keyPlaceholder`),status:t?`error`:void 0,value:e.key,variant:`filled`,onChange:t=>A(e.id,t)}),t&&(0,E.jsx)(`div`,{style:{bottom:`-16px`,color:`red`,fontSize:`12px`,position:`absolute`},children:s||p(`KeyValueEditor.duplicateKeyError`)})]}),(0,E.jsx)(c,{flex:2,children:(0,E.jsx)(y,{className:D.input,placeholder:a||p(`KeyValueEditor.valuePlaceholder`),value:e.value,variant:`filled`,onChange:t=>j(e.id,t)})}),(0,E.jsx)(m,{icon:_,size:`small`,style:{marginTop:4},title:l||p(`KeyValueEditor.deleteTooltip`),onClick:()=>k(e.id)})]},e.id)}),(0,E.jsx)(f,{block:!0,icon:(0,E.jsx)(d,{icon:h}),size:`small`,style:{marginTop:g.length>0?16:8},type:`dashed`,onClick:O,children:o||p(`KeyValueEditor.addButton`)})]})]})})}));export{k as n,O as t};