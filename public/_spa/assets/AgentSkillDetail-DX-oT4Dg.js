import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{vl as i,yl as a}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as o,Ia as s,Ma as c,da as l,za as u}from"./imperative-Xfjd337A.js";import{Er as d,Fr as f,n as p,ws as m}from"./es-2ZVhpwv7.js";import{Pn as h,n as g}from"./es-DMB7XTXN.js";import{Jd as _,dt as v,uf as y}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{Gr as b,qr as x}from"./store-DTt7Ili4.js";import{n as S,t as C}from"./PublishedTime-z4JfztEW.js";import{N as w,P as T}from"./SkillStore-BPju27qu.js";import{a as E,i as D,n as O,r as k,t as A}from"./ContentViewer-D3ebmehP.js";var j,M,N,P,F;t((()=>{d(),p(),g(),c(),v(),j=e(a()),n(),S(),T(),D(),b(),O(),M=e(i()),N=s(({css:e,cssVar:t})=>({description:e`
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
  `})),P=(e=[])=>{let t={},n=e=>{for(let r of e)r.type===`file`&&r.content!==void 0?t[r.path]=r.content:r.children&&n(r.children)};return n(e),t},F=(0,j.memo)(({skillId:e})=>{let{t}=r(`setting`),[n,i]=(0,j.useState)(`SKILL.md`),{data:a,isLoading:s}=x(e=>e.useFetchAgentSkillDetail)(e),c=a?.skillDetail,d=a?.resourceTree,p=(0,j.useMemo)(()=>P(d),[d]);if(s)return(0,M.jsxs)(o,{style:{height:`100%`,overflow:`hidden`},children:[(0,M.jsx)(`div`,{className:N.meta,children:(0,M.jsx)(h,{active:!0,paragraph:{rows:1},style:{margin:0},title:{width:220}})}),(0,M.jsxs)(o,{horizontal:!0,style:{flex:1,overflow:`hidden`},children:[(0,M.jsx)(`div`,{className:N.left,children:(0,M.jsx)(E,{rows:9})}),(0,M.jsx)(`div`,{className:N.divider}),(0,M.jsx)(`div`,{className:N.right,children:(0,M.jsx)(h,{active:!0,paragraph:{rows:8},style:{padding:16}})})]})]});let g=c?.manifest?.version,v=c?.description||c?.manifest?.description,b=c?.manifest?.repository,S=c?.manifest?.sourceUrl;return(0,M.jsxs)(o,{style:{height:`100%`,overflow:`hidden`},children:[c&&(0,M.jsx)(`div`,{className:N.meta,children:(0,M.jsxs)(o,{horizontal:!0,align:`center`,gap:12,children:[(0,M.jsx)(w,{size:40}),(0,M.jsxs)(o,{flex:1,gap:4,style:{overflow:`hidden`},children:[(0,M.jsxs)(o,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,M.jsxs)(o,{horizontal:!0,align:`center`,className:N.description,gap:4,children:[(0,M.jsx)(`span`,{className:N.name,children:c.name}),g&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l,{icon:y}),(0,M.jsxs)(`span`,{children:[`v`,g]})]}),(0,M.jsx)(l,{icon:y}),t(`agentSkillDetail.updatedAt`),` `,(0,M.jsx)(C,{date:new Date(c.updatedAt).toISOString(),template:`MMM DD, YYYY`})]}),(b||S)&&(0,M.jsxs)(o,{horizontal:!0,align:`center`,gap:2,style:{flexShrink:0},children:[b&&(0,M.jsx)(`a`,{href:b,rel:`noreferrer`,target:`_blank`,children:(0,M.jsx)(m,{fill:u.colorTextDescription,icon:f,title:t(`agentSkillDetail.repository`)})}),S&&(0,M.jsx)(`a`,{href:S,rel:`noreferrer`,target:`_blank`,children:(0,M.jsx)(m,{icon:_,title:t(`agentSkillDetail.sourceUrl`)})})]})]}),v&&(0,M.jsx)(`p`,{className:N.description,children:v})]})]})}),(0,M.jsxs)(o,{horizontal:!0,style:{flex:1,overflow:`hidden`},children:[(0,M.jsx)(`div`,{className:N.left,children:(0,M.jsx)(k,{resourceTree:d||[],selectedFile:n,onSelectFile:i})}),(0,M.jsx)(`div`,{className:N.divider}),(0,M.jsx)(`div`,{className:N.right,children:(0,M.jsx)(A,{contentMap:p,selectedFile:n,skillDetail:c})},n)]})]})}),F.displayName=`AgentSkillDetail`}))();export{F as default};