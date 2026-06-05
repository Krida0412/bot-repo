import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{Jn as i,lr as a,pr as o,vl as s,yl as c}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as l,Ba as u,Ia as d,Ma as f,Ua as p}from"./imperative-Xfjd337A.js";import{cs as m,n as h}from"./es-2ZVhpwv7.js";import{F as g,P as _}from"./index-AVlnZl7f.js";import{n as v,t as y}from"./List-c7NGF7mX.js";import{r as b,t as x}from"./discover-duTVUZN7.js";import{n as S,t as C}from"./List-CCAkzDJv.js";import{n as w,r as T}from"./ListLoading-BF9xt25D.js";import{n as E,t as D}from"./Title-BZ3tlKP4.js";var O,k,A,j,M=t((()=>{h(),f(),O=e(c()),n(),_(),k=e(s()),A=d(({css:e})=>({banner:e`
    position: relative;

    width: 100%;
    padding-block: 24px;
    padding-inline: 32px;
    border-radius: 12px;

    ${p.sm} {
      padding-block: 16px;
      padding-inline: 20px;
    }
  `,banner_dark:e`
    background: linear-gradient(135deg, #5c3d0e 0%, #7a4f10 50%, #6b3a08 100%);
  `,banner_light:e`
    background: linear-gradient(135deg, #fceabb 0%, #f8b500 50%, #e88a20 100%);
  `,subtitle:e`
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;

    ${p.sm} {
      font-size: 12px;
    }
  `,subtitle_dark:e`
    color: rgb(255 255 255 / 65%);
  `,subtitle_light:e`
    color: rgb(0 0 0 / 65%);
  `,symbols:e`
    pointer-events: none;

    position: absolute;
    inset-block: 0;
    inset-inline-end: 0;

    overflow: hidden;

    width: 50%;
    border-radius: 0 12px 12px 0;

    background: url('/images/banner_creator.png') right center / auto 100% no-repeat;

    ${p.sm} {
      display: none;
    }
  `,title:e`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;

    ${p.sm} {
      font-size: 18px;
    }
  `,title_dark:e`
    color: rgb(255 255 255 / 88%);
  `,title_light:e`
    color: rgb(0 0 0 / 88%);
  `})),j=(0,O.memo)(()=>{let{t:e}=r(`discover`),t=g();return(0,k.jsxs)(l,{className:u(A.banner,t?A.banner_dark:A.banner_light),width:`100%`,children:[(0,k.jsxs)(l,{gap:8,style:{position:`relative`,zIndex:1},children:[(0,k.jsx)(`h2`,{className:u(A.title,t?A.title_dark:A.title_light),children:e(`home.creatorReward.title`)}),(0,k.jsx)(`p`,{className:u(A.subtitle,t?A.subtitle_dark:A.subtitle_light),children:e(`home.creatorReward.subtitle`)}),(0,k.jsx)(`div`,{style:{marginBlockStart:4},children:(0,k.jsx)(`a`,{href:`https://lobehub.com/creator?utm_source=lobehub`,rel:`noopener noreferrer`,target:`_blank`,children:(0,k.jsx)(m,{type:`primary`,children:e(`home.creatorReward.action`)})})})]}),(0,k.jsx)(`div`,{className:A.symbols})]})})})),N,P,F,I=t((()=>{N=e(c()),n(),T(),E(),M(),P=e(s()),F=(0,N.memo)(()=>{let{t:e}=r(`discover`);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(j,{}),(0,P.jsx)(D,{more:e(`home.more`),moreLink:`/community/agent`,children:e(`home.featuredAssistants`)}),(0,P.jsx)(w,{length:8,rows:4}),(0,P.jsx)(`div`,{}),(0,P.jsx)(D,{more:e(`home.more`),moreLink:`/community/mcp`,children:e(`home.featuredTools`)}),(0,P.jsx)(w,{length:8,rows:4})]})})})),L,R,z;t((()=>{L=e(c()),n(),x(),i(),E(),S(),v(),M(),I(),R=e(s()),z=(0,L.memo)(()=>{let{t:e}=r(`discover`),t=b(e=>e.useAssistantList),n=b(e=>e.useFetchMcpList),{data:i,isLoading:s}=t({page:1,pageSize:12,sort:o.Recommended}),{data:c,isLoading:l}=n({page:1,pageSize:12,sort:a.Recommended});return s||l||!i||!c?(0,R.jsx)(F,{}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(j,{}),(0,R.jsx)(D,{more:e(`home.more`),moreLink:`/community/agent`,children:e(`home.featuredAssistants`)}),(0,R.jsx)(C,{data:i.items,rows:4}),(0,R.jsx)(`div`,{}),(0,R.jsx)(D,{more:e(`home.more`),moreLink:`/community/mcp`,children:e(`home.featuredTools`)}),(0,R.jsx)(y,{data:c.items,rows:4})]})})}))();export{z as default};