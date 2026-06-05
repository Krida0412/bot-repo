import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{vl as i,yl as a}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as o,Ia as s,Ma as c,za as l}from"./imperative-CZQgOWZc.js";import{Xn as u,ha as d,k as f,n as p}from"./es-na8XYpNF.js";import{_ as m,g as h}from"./SkillStore-BOVeJtm5.js";import{i as g,n as _,r as v,t as y}from"./ContentViewer-AN_OQiSH.js";import{A as b,d as x,f as S,k as C,l as w,u as T}from"./useFetchInstalledPlugins-Dx6f3hVE.js";import{n as E,t as D}from"./Title-CBYkWVtE.js";var O,k,A,j;t((()=>{p(),c(),O=e(a()),n(),_(),g(),b(),T(),S(),E(),h(),k=e(i()),A=s(({css:e})=>({divider:e`
    flex-shrink: 0;
    width: 1px;
    background: ${l.colorBorderSecondary};
  `,left:e`
    overflow-y: auto;
    flex-shrink: 0;
    width: 240px;
    padding: 8px;
  `,right:e`
    container-type: size;
    overflow: auto;
    flex: 1;
  `})),j=(0,O.memo)(()=>{let{t:e}=r(`discover`),{t}=r(`setting`),{tools:n,toolsLoading:i,skillContent:a}=m(),[s,c]=(0,O.useState)([]),[p,h]=(0,O.useState)(x.Docs),[g,_]=(0,O.useState)(`SKILL.md`),b=n.length,S=(0,O.useMemo)(()=>a?{content:a,name:``}:void 0,[a]);return i?(0,k.jsx)(o,{gap:16,children:(0,k.jsx)(f,{active:!0,paragraph:{rows:4}})}):(0,k.jsxs)(C,{config:{tools:n,toolsCount:b},children:[b>0&&(0,k.jsxs)(o,{gap:8,children:[(0,k.jsxs)(o,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,k.jsx)(D,{level:3,tag:(0,k.jsx)(d,{children:b}),children:e(`mcp.details.schema.tools.title`)}),(0,k.jsx)(u,{shape:`round`,value:p,variant:`outlined`,options:[{label:e(`mcp.details.schema.mode.docs`),value:x.Docs},{label:`JSON`,value:x.JSON}],onChange:e=>h(e)})]}),(0,k.jsx)(`p`,{style:{marginBottom:24},children:e(`mcp.details.schema.tools.desc`)}),(0,k.jsx)(w,{activeKey:s,mode:p,setActiveKey:c})]}),a&&(0,k.jsx)(o,{gap:8,children:(0,k.jsxs)(o,{horizontal:!0,style:{border:`1px solid ${l.colorBorderSecondary}`,borderRadius:8,height:400,overflow:`hidden`},children:[(0,k.jsx)(`div`,{className:A.left,children:(0,k.jsx)(v,{resourceTree:[],selectedFile:g,onSelectFile:_})}),(0,k.jsx)(`div`,{className:A.divider}),(0,k.jsx)(`div`,{className:A.right,children:(0,k.jsx)(y,{contentMap:{},selectedFile:g,skillDetail:S})},g)]})})]})})}))();export{j as default};