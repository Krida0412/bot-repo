import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{Q as n,X as r,Y as i,Z as a,dt as o,et as s,it as c,pt as l}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{Fs as u,vl as ee,yl as d}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{_ as te,f as ne,g as re,h as ie,l as f,m as ae,p,t as m}from"./swr-CK7jF4RD.js";import{Aa as oe,Ia as h,Ma as g}from"./imperative-Xfjd337A.js";import{F as _,L as v,Ua as y,cs as se,n as ce,qa as le}from"./es-2ZVhpwv7.js";import{dt as ue,nm as de,om as fe}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{t as pe}from"./fast-deep-equal-MG-n9E1a.js";import{Cn as me,wn as he}from"./agent-BV7ChU6o.js";import{n as ge,o as b}from"./client-C0dgA5Xe.js";import{Et as x,G as S,Mn as C,W as w,pn as T,tn as E}from"./store-DTt7Ili4.js";import{a as D,i as O}from"./EditorCanvas-CSjSeu_j.js";var k,A,j,M,N=t((()=>{x(),D(),k=e=>{if(!e)return[];let{imageList:t,fileList:n}=C(e),r=new Set;for(let{url:e}of t){let t=O(e);t&&r.add(t)}for(let{url:e}of n){let t=O(e);t&&r.add(t)}return[...r]},A=e=>e?.getLexicalEditor?.()?k(e.getDocument?.(`json`)):[],j=(e,t)=>{if(!e||t.length===0)return;let n=e.getLexicalEditor?.();if(n){for(let e of t)e.type.startsWith(`image/`)?n.dispatchCommand(E,{file:e}):n.dispatchCommand(T,{file:e});e.focus?.()}},M=(e,t)=>{if(!e?.getLexicalEditor?.())return;let n=document.createElement(`input`);n.type=`file`,n.multiple=!0,t&&(n.accept=t),n.addEventListener(`change`,()=>{j(e,Array.from(n.files??[]))}),n.click()}})),P,F=t((()=>{g(),P=h(({css:e,cssVar:t})=>({titleInput:e`
    &.ant-input {
      resize: none;

      flex: 1;

      min-height: auto;
      padding: 0;

      font-size: 24px;
      font-weight: 600;
      line-height: 1.3;
    }
  `,breadcrumb:e`
    overflow: hidden;
    min-width: 0;

    ol {
      flex-wrap: nowrap;
      align-items: center;
      min-width: 0;
    }

    li {
      overflow: hidden;
      display: flex;
      flex-shrink: 1;
      align-items: center;

      min-width: 0;
    }

    li.ant-breadcrumb-separator {
      overflow: visible;
      flex-shrink: 0;
      min-width: auto;
      margin-inline: 2px;
    }

    .ant-breadcrumb-link,
    .ant-breadcrumb-link > a {
      overflow: hidden;
      display: flex;
      align-items: center;

      min-width: 0;
      padding-block: 2px;
      padding-inline: 6px;
      border-radius: ${t.borderRadius};
    }
  `,subtaskTree:e`
    .ant-tree-node-content-wrapper {
      cursor: default;

      overflow: hidden;
      display: flex;
      flex: 1;
      gap: 4px;
      align-items: center;

      min-width: 0;
      min-height: 36px;

      color: ${t.colorTextSecondary};
    }

    .ant-tree-title {
      overflow: hidden;
      flex: 1;
      min-width: 0;
    }

    .ant-tree-switcher {
      margin-inline-end: 0;
      color: ${t.colorTextDescription};
    }
  `,activityAvatar:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    border-radius: 50%;

    color: ${t.colorTextQuaternary};

    background: ${t.colorFillTertiary};
  `,commentCard:e`
    position: relative;

    .comment-actions {
      opacity: 0;
      transition: opacity 0.15s ease;
    }

    &:hover .comment-actions,
    &:focus-within .comment-actions {
      opacity: 1;
    }
  `,commentActions:e`
    position: absolute;
    inset-block-start: 8px;
    inset-inline-end: 8px;
  `,agentAuthorName:e`
    cursor: pointer;
    font-weight: 500;
    color: ${t.colorTextSecondary};
    transition: color 0.15s ease;

    &:hover {
      color: ${t.colorText};
    }
  `,commentInputCard:e`
    padding: 8px;
    border: 1px solid transparent;
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillTertiary};

    transition:
      background 0.15s ease,
      border-color 0.15s ease;

    &:hover {
      background: ${t.colorFillSecondary};
    }

    &:focus-within {
      border-color: ${t.colorBorder};
      background: ${t.colorFillTertiary};
    }
  `}))})),I,L=t((()=>{g(),I=h(({css:e,cssVar:t})=>({actionBtn:e`
    &:hover {
      border-color: ${t.colorBorder} !important;
      background: ${t.colorFillQuaternary} !important;
    }
  `,actionBtnPrimary:e`
    &.ant-btn {
      width: auto !important;
      padding-inline: 12px !important;
    }
  `,expandLink:e`
    border: 1px solid ${t.colorFillTertiary} !important;
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,resolvedTag:e`
    font-size: 13px;
    color: ${t.colorTextQuaternary};
  `,card:e`
    .brief-comment-btn,
    .brief-view-run-btn {
      opacity: 0;
    }

    &:hover {
      border-color: ${t.colorBorder} !important;

      .brief-comment-btn,
      .brief-view-run-btn {
        opacity: 1;
      }
    }
  `,clickableHeader:e`
    cursor: pointer;
  `}))})),R,z,B,_e=t((()=>{ce(),y(),ue(),R=e(d()),o(),L(),z=e(ee()),B=(0,R.memo)(({summary:e})=>{let{t}=l(`home`),[n,r]=(0,R.useState)(!1),[i,a]=(0,R.useState)(!1),o=(0,R.useRef)(null),s=le(o);(0,R.useEffect)(()=>{s&&a(s.height>180)},[s]);let c=(0,z.jsx)(v,{ref:o,style:{overflow:`unset`},variant:`chat`,children:e});return(0,z.jsxs)(oe,{gap:4,children:[i&&!n?(0,z.jsx)(_,{size:32,style:{maxHeight:n?void 0:180},children:c}):c,i&&(0,z.jsx)(se,{block:!0,className:I.expandLink,icon:n?fe:de,iconPlacement:`end`,size:`small`,type:`text`,onClick:()=>r(!n),children:t(n?`brief.collapse`:`brief.expandAll`)})]})})})),V,ve=t((()=>{V={briefs:[],isBriefsInit:!1}})),H,ye=t((()=>{ve(),H={...V}})),U,W,be=t((()=>{ge(),U=class{delete=async e=>b.brief.delete.mutate({id:e});listUnresolved=async()=>b.brief.listUnresolved.query();markRead=async e=>b.brief.markRead.mutate({id:e});resolve=async(e,t)=>b.brief.resolve.mutate({id:e,...t})},W=new U})),G,K,q,J,Y,xe=t((()=>{G=e(pe()),m(),be(),w(),me(),K=he(`briefList`),q=`fetchBriefs`,J=(e,t,n)=>new Y(e,t,n),Y=class{#e;#t;constructor(e,t,n){this.#t=e,this.#e=t}internal_updateBrief=(e,t)=>{let n=this.#e().briefs,r=n.findIndex(t=>t.id===e);if(r===-1)return;let i=[...n];i[r]={...n[r],...t},this.#t({briefs:i},!1,K(`internal_updateBrief`))};deleteBrief=async e=>{await W.delete(e);let t=this.#e().briefs.filter(t=>t.id!==e);this.#t({briefs:t},!1,K(`deleteBrief`))};markBriefRead=async e=>{await W.markRead(e),this.internal_updateBrief(e,{readAt:new Date().toISOString()})};resolveBrief=async(e,t,n)=>{await W.resolve(e,{action:t,comment:n}),this.internal_updateBrief(e,{resolvedAction:t,resolvedAt:new Date().toISOString()})};submitFeedback=async(e,t,n)=>{await this.resolveBrief(e,`feedback`,n);try{await S.run(t)}catch(e){console.warn(`[BriefStore] submitFeedback: task.run failed`,e)}};useFetchBriefs=e=>f(e===!0?[q,e]:null,async()=>(await W.listUnresolved()).data,{onData:e=>{this.#e().isBriefsInit&&(0,G.default)(this.#e().briefs,e)||this.#t({briefs:e,isBriefsInit:!0},!1,K(`useFetchBriefs/onData`))}})}})),X,Z,Q,$=t((()=>{i(),s(),n(),u(),te(),ie(),p(),ye(),xe(),X=(...e)=>({...H,...ne([J(...e)])}),Z=re(`brief`),Q=a()(r(Z(X,{name:`LobeChat_Brief`})),c),ae(`brief`,Q)})),Se=t((()=>{$()}));export{_e as a,F as c,N as d,j as f,B as i,P as l,$ as n,L as o,M as p,Q as r,I as s,Se as t,A as u};