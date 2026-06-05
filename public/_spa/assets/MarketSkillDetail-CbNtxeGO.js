import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{vl as i,yl as a}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as o,Ia as s,Ma as c,da as l,za as u}from"./imperative-Xfjd337A.js";import{Er as d,Fr as f,n as p,us as m,ws as h}from"./es-2ZVhpwv7.js";import{Pn as g,n as _}from"./es-DMB7XTXN.js";import{Jd as v,dt as y,uf as b}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{Gr as x,Jr as S,N as C,P as w,Za as T,qr as E}from"./store-DTt7Ili4.js";import{m as D,p as O}from"./store-Cqiz4mkc.js";import{n as k,t as A}from"./PublishedTime-z4JfztEW.js";import{i as j,n as M,r as N,t as P}from"./ContentViewer-D3ebmehP.js";import{r as F,t as I}from"./discover-duTVUZN7.js";var L,R,z,B,V,H,U;t((()=>{d(),p(),_(),c(),O(),y(),L=e(a()),n(),k(),M(),j(),C(),I(),x(),S(),R=e(i()),z=s(({css:e,cssVar:t})=>({description:e`
    overflow: hidden;

    margin: 0;

    font-size: 13px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,divider:e`
    flex-shrink: 0;
    width: 1px;
    background: ${t.colorBorderSecondary};
  `,left:e`
    overflow-y: auto;
    flex-shrink: 0;
    width: 240px;
    padding: 8px;
  `,meta:e`
    flex-shrink: 0;
    padding: 16px;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,name:e`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: ${t.colorText};
  `,right:e`
    container-type: size;
    overflow: auto;
    flex: 1;
  `})),B=e=>{let t={},n=e=>{for(let r of e)r.type===`file`&&r.content!==void 0?t[r.path]=r.content:r.children&&n(r.children)};return n(e),t},V=e=>e?Object.keys(e).sort().map(e=>({name:e.split(`/`).pop()||e,path:e,type:`file`})):[],H=async e=>{let t=await(await fetch(e)).arrayBuffer();return new Promise((e,n)=>{D(new Uint8Array(t),(t,r)=>{if(t)return n(t);let i={},a=[],o=new TextDecoder;for(let[e,t]of Object.entries(r)){if(e.endsWith(`/`)||e.includes(`__MACOSX`))continue;let n=e.indexOf(`/`),r=n>=0?e.slice(n+1):e;if(!r||r===`SKILL.md`)continue;let s=o.decode(t);i[r]=s,a.push({content:s,name:r.split(`/`).pop()||r,path:r,type:`file`})}a.sort((e,t)=>e.path.localeCompare(t.path)),e({contentMap:i,tree:a})})})},U=(0,L.memo)(({identifier:e})=>{let{t}=r(`setting`),[n,i]=(0,L.useState)(`SKILL.md`),{data:a,isLoading:s}=F(e=>e.useFetchSkillDetail)({identifier:e}),c=E(T.getAgentSkillByIdentifier(e)),{data:d}=E(e=>e.useFetchAgentSkillDetail)(c?.id),[p,_]=(0,L.useState)({}),[y,x]=(0,L.useState)([]),S=w.getSkillDownloadUrl(encodeURIComponent(e));(0,L.useEffect)(()=>{c||H(S).then(({contentMap:e,tree:t})=>{_(e),x(t)}).catch(()=>{})},[S,c]);let C=(0,L.useMemo)(()=>d?.resourceTree??[],[d?.resourceTree]),D=(0,L.useMemo)(()=>B(C),[C]),O=C.length>0?D:p,k=(0,L.useMemo)(()=>C.length>0?C:y.length>0?y:V(a?.resources),[C,y,a?.resources]);if(s||!a)return(0,R.jsx)(g,{active:!0,paragraph:{rows:8},style:{padding:16}});let{name:j,icon:M,version:I,description:U,homepage:W,github:G}=a,K={content:d?.skillDetail?.content||a.content};return(0,R.jsxs)(o,{style:{height:`100%`,overflow:`hidden`},children:[(0,R.jsx)(`div`,{className:z.meta,children:(0,R.jsxs)(o,{horizontal:!0,align:`center`,gap:12,children:[(0,R.jsx)(m,{avatar:M||j,shape:`square`,size:40,style:{flex:`none`}}),(0,R.jsxs)(o,{flex:1,gap:4,style:{overflow:`hidden`},children:[(0,R.jsxs)(o,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,R.jsxs)(o,{horizontal:!0,align:`center`,className:z.description,gap:4,children:[(0,R.jsx)(`span`,{className:z.name,children:j}),I&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(l,{icon:b}),(0,R.jsxs)(`span`,{children:[`v`,I]})]}),(0,R.jsx)(l,{icon:b}),t(`agentSkillDetail.updatedAt`),` `,(0,R.jsx)(A,{date:a.updatedAt,template:`MMM DD, YYYY`})]}),(0,R.jsxs)(o,{horizontal:!0,align:`center`,gap:2,style:{flexShrink:0},children:[G?.url&&(0,R.jsx)(`a`,{href:G.url,rel:`noreferrer`,target:`_blank`,children:(0,R.jsx)(h,{fill:u.colorTextDescription,icon:f,title:t(`agentSkillDetail.repository`)})}),W&&(0,R.jsx)(`a`,{href:W,rel:`noreferrer`,target:`_blank`,children:(0,R.jsx)(h,{icon:v,title:t(`agentSkillDetail.sourceUrl`)})})]})]}),U&&(0,R.jsx)(`p`,{className:z.description,children:U})]})]})}),(0,R.jsxs)(o,{horizontal:!0,style:{flex:1,overflow:`hidden`},children:[(0,R.jsx)(`div`,{className:z.left,children:(0,R.jsx)(N,{resourceTree:k,selectedFile:n,onSelectFile:i})}),(0,R.jsx)(`div`,{className:z.divider}),(0,R.jsx)(`div`,{className:z.right,children:(0,R.jsx)(P,{contentMap:O,selectedFile:n,skillDetail:K})},n)]})]})}),U.displayName=`MarketSkillDetail`}))();export{U as default};