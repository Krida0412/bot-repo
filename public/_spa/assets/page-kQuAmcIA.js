const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/client-cV4dDi-k.js","assets/rolldown-runtime-Cyuzqnbw.js","vendor/vendor-ai-runtime-CsMkIwdb.js"])))=>i.map(i=>d[i]);
import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{Fo as i,Gn as a,Kn as o,Rr as s,ec as c,tc as l,vl as u,yl as d}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as f,Ia as p,Ma as m,Oa as h,da as g,za as _}from"./imperative-CZQgOWZc.js";import{Er as v,Os as y,is as b,n as x,qi as S}from"./es-na8XYpNF.js";import{n as C,r as w}from"./es-B2d2bv-I.js";import{ba as T,cg as E,dt as D}from"../vendor/vendor-icons-BrLWQuP2.js";import{Br as O,Er as k}from"../i18n/i18n-default-CQadLqkY.js";import{r as A}from"./store-BQbr7IWj.js";import{n as j}from"./file-CXNe4JEU.js";import{K as ee,d as M,g as N,h as P,p as F,q as I}from"./index-CG_0atUX.js";import{n as L,t as R}from"./NavHeader-Bz1hPApl.js";import{i as z,n as B,r as V,t as H}from"./GuideVideo-CEmwhI8B.js";import{n as U,t as W}from"./useNotionImport-Dcn0xS71.js";var G,K,q,J,Y,X=t((()=>{k(),s(),v(),x(),C(),m(),D(),G=e(d()),n(),z(),B(),L(),W(),j(),M(),o(),P(),K=e(u()),l(),q=80,J=p(({css:e,cssVar:t})=>({actionTitle:e`
    margin-block-start: 12px;
    font-size: 16px;
    color: ${t.colorTextSecondary};
  `,card:e`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    width: 200px;
    height: 140px;
    border-radius: ${t.borderRadiusLG};

    font-weight: 500;
    text-align: center;

    background: ${t.colorFillTertiary};
    box-shadow: 0 0 0 1px ${t.colorFillTertiary} inset;

    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,glow:e`
    position: absolute;
    inset-block-end: -12px;
    inset-inline-end: 0;

    width: 48px;
    height: 48px;

    opacity: 0.5;
    filter: blur(24px);
  `,icon:e`
    position: absolute;
    z-index: 1;
    inset-block-end: -24px;
    inset-inline-end: 8px;

    flex: none;
  `})),Y=(0,G.memo)(({hasPages:e=!1,knowledgeBaseId:t})=>{let{t:n}=r([`file`,`common`]),[o,s]=(0,G.useState)(!1),[l,u,d,p,m]=F(e=>[e.createNewPage,e.createOptimisticPage,e.replaceTempPageWithReal,e.setSelectedPageId,e.fetchDocuments]),[v]=A(e=>[e.createDocument]),x=U({createDocument:v,currentFolderId:null,libraryId:t??null,refetchResources:m,t:n}),C=async e=>{await x.handleNotionImport(e)},D=async(e,n)=>{if(!e){await l(n);return}let r=u(n);p(r,!1);try{let o=await v({content:e,knowledgeBaseId:t,title:n});d(r,{content:o.content||``,createdAt:o.createdAt?new Date(o.createdAt):new Date,editorData:typeof o.editorData==`string`?JSON.parse(o.editorData):o.editorData||null,fileType:i,filename:o.title||n,id:o.id,metadata:o.metadata||{},source:`document`,sourceType:a.EDITOR,title:o.title||n,totalCharCount:o.content?.length||0,totalLineCount:0,updatedAt:o.updatedAt?new Date(o.updatedAt):new Date}),p(o.id)}catch(e){throw console.error(`Failed to create page:`,e),F.getState().removeTempPage(r),p(null),e}};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(R,{}),(0,K.jsxs)(h,{gap:24,height:`100%`,style:{paddingBottom:100},width:`100%`,children:[e&&(0,K.jsxs)(f,{justify:`center`,style:{textAlign:`center`},children:[(0,K.jsx)(y,{as:`h4`,children:n(`pageEditor.empty.title`)}),(0,K.jsx)(y,{type:`secondary`,children:n(`or`,{ns:`common`})})]}),(0,K.jsxs)(f,{horizontal:!0,gap:12,children:[(0,K.jsxs)(f,{className:J.card,padding:16,onClick:()=>D(``,n(`pageList.untitled`)),children:[(0,K.jsx)(`span`,{className:J.actionTitle,children:n(`pageEditor.empty.createNewDocument`)}),(0,K.jsx)(`div`,{className:J.glow,style:{background:_.purple}}),(0,K.jsx)(b,{className:J.icon,color:_.purple,icon:(0,K.jsx)(g,{color:`#fff`,icon:T}),size:q,type:`file`})]}),(0,K.jsx)(w,{accept:`.md,.markdown,.pdf,.docx`,beforeUpload:async e=>{try{s(!0);let n=e.name.split(`.`).pop()?.toLowerCase();if(n===`md`||n===`markdown`)await D(await e.text(),e.name.replace(/\.md$|\.markdown$/i,``));else if(n===`pdf`||n===`docx`){let n=e.name.replace(/\.(pdf|docx)$/i,``),r=u(n);try{let i=await A.getState().uploadWithProgress({file:e,knowledgeBaseId:t});if(!i)throw Error(`Failed to upload file`);let{lambdaClient:a}=await c(async()=>{let{lambdaClient:e}=await import(`./client-cV4dDi-k.js`).then(e=>(e.n(),e.t));return{lambdaClient:e}},__vite__mapDeps([0,1,2])),o=await a.document.parseDocument.mutate({id:i.id});d(r,{content:o.content||``,createdAt:o.createdAt?new Date(o.createdAt):new Date,editorData:typeof o.editorData==`string`?JSON.parse(o.editorData):o.editorData||null,fileType:o.fileType||`custom/document`,filename:o.filename||n,id:o.id,metadata:o.metadata||{},source:o.source||`document`,sourceType:o.sourceType||`file`,title:o.title||n,totalCharCount:o.totalCharCount||0,totalLineCount:o.totalLineCount||0,updatedAt:o.updatedAt?new Date(o.updatedAt):new Date}),p(o.id,!1);let s=N(o.id),l=s?`/page/${s}`:`/page`;window.history.replaceState({},``,l)}catch(e){throw console.error(`Failed to upload and parse file:`,e),F.getState().removeTempPage(r),e}}}catch(e){console.error(`Failed to upload file:`,e)}finally{s(!1)}return!1},disabled:o,multiple:!1,showUploadList:!1,children:(0,K.jsxs)(f,{className:J.card,padding:16,style:{opacity:o?.5:1},children:[(0,K.jsx)(`span`,{className:J.actionTitle,children:o?`Uploading...`:n(`pageEditor.empty.uploadFiles`)}),(0,K.jsx)(`div`,{className:J.glow,style:{background:_.gold}}),(0,K.jsx)(b,{className:J.icon,color:_.gold,icon:(0,K.jsx)(g,{color:`#fff`,icon:E}),size:q,type:`file`})]})}),(0,K.jsxs)(f,{className:J.card,padding:16,onClick:x.handleOpenNotionGuide,children:[(0,K.jsx)(`span`,{className:J.actionTitle,children:n(`pageEditor.empty.importNotion`)}),(0,K.jsx)(`div`,{className:J.glow,style:{background:_.geekblue}}),(0,K.jsx)(b,{className:J.icon,color:_.geekblue,icon:(0,K.jsx)(S,{color:`#fff`}),size:q,type:`file`})]})]})]}),(0,K.jsx)(V,{cancelText:n(`header.actions.notionGuide.cancel`),cover:(0,K.jsx)(H,{height:269,src:O.importFromNotionGuide,width:358}),desc:n(`header.actions.notionGuide.desc`),okText:n(`header.actions.notionGuide.ok`),open:x.notionGuideOpen,title:n(`header.actions.notionGuide.title`),onCancel:x.handleCloseNotionGuide,onOk:x.handleStartNotionImport}),(0,K.jsx)(`input`,{accept:`.zip`,ref:x.notionInputRef,style:{display:`none`},type:`file`,onChange:C})]})})})),Z,Q,$;t((()=>{Z=e(d()),I(),X(),Q=e(u()),$=(0,Z.memo)(()=>(0,Q.jsx)(Z.Suspense,{fallback:(0,Q.jsx)(ee,{debugId:`PagesPage`}),children:(0,Q.jsx)(Y,{})})),$.displayName=`PagesPage`}))();export{$ as default};