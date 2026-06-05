import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r,xt as i,yt as a}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{Gr as o,Rr as s,b as c,bt as l,mt as u,vl as d,yl as f}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as p,Ba as m,Ia as h,Ma as g,Wa as _,da as v,za as y}from"./imperative-CZQgOWZc.js";import{L as ee,To as b,cs as x,er as te,ha as S,n as C,us as w,ws as T}from"./es-na8XYpNF.js";import{$t as E,Gt as ne,J as re,Pn as ie,S as ae,_n as D,an as oe,dn as O,kn as se,lt as ce,n as le,s as k,y as ue,zt as de}from"./es-B2d2bv-I.js";import{a as fe,h as pe,m as me,n as he}from"../vendor/vendor-react-Du2OrJ5H.js";import{Hu as ge,Ji as _e,Jl as ve,Jp as ye,Mm as be,Pf as xe,Qm as Se,Ra as Ce,Sg as we,bn as Te,cm as Ee,cs as De,dt as A,ec as Oe,ff as ke,fr as Ae,mm as je,op as Me,wa as Ne}from"../vendor/vendor-icons-BrLWQuP2.js";import{c as Pe,d as Fe,f as Ie,n as j,r as Le,s as Re}from"./base-ui-kDrDQHsE.js";import{a as ze,i as Be,r as M,s as Ve,t as He}from"./eval-BR2cShTb.js";import{n as Ue,t as We}from"./StatusBadge-RRZ-8Ppx.js";import{r as Ge,t as Ke}from"./utils-DcWsxsSY.js";import{n as qe,t as Je}from"./RunEditModal-DolQht0V.js";import{i as Ye,t as Xe,u as Ze}from"./es-D8LTJ3ml.js";var N,P,Qe,$e,et=t((()=>{le(),N=e(f()),n(),ze(),P=e(d()),Qe=(0,N.memo)(({status:e})=>{let{t}=r(`eval`);return e===`error`?(0,P.jsx)(O,{color:`orange`,text:t(`table.filter.error`)}):e===`timeout`?(0,P.jsx)(O,{color:`orange`,text:t(`run.status.timeout`)}):(0,P.jsx)(ue,{children:e})}),$e=({onSelectionChange:e,onSelectionReady:t,runId:n,submitter:i})=>{let{t:a}=r(`eval`),[o,s]=(0,N.useState)([]),[c,l]=(0,N.useState)(!1),[u,d]=(0,N.useState)([]),[f,p]=(0,N.useState)(10);(0,N.useEffect)(()=>{l(!0),Be.getResumableCases(n).then(e=>{s(e),d(e.filter(e=>e.canResume).map(e=>e.testCaseId))}).finally(()=>l(!1))},[n]),(0,N.useEffect)(()=>{e(u.length)},[e,u]);let m=(0,N.useMemo)(()=>o.filter(e=>e.canResume),[o]),h=u.length===m.length&&m.length>0,g=u.length>0&&u.length<m.length,_=(0,N.useCallback)(e=>{d(e?m.map(e=>e.testCaseId):[])},[m]),v=(0,N.useCallback)((e,t)=>{d(n=>t?[...n,e]:n.filter(t=>t!==e))},[]),y=(0,N.useCallback)(async()=>{u.length!==0&&await i(o.filter(e=>u.includes(e.testCaseId)).map(e=>({testCaseId:e.testCaseId,threadId:e.threadId})))},[o,u,i]);(0,N.useEffect)(()=>{t({confirm:y,selectedCount:()=>u.length})},[y,t,u]);let ee=(0,N.useMemo)(()=>[{key:`select`,render:(e,t)=>(0,P.jsx)(D,{title:t.canResume?void 0:t.reason,children:(0,P.jsx)(ne,{checked:u.includes(t.testCaseId),disabled:!t.canResume,onChange:e=>v(t.testCaseId,e.target.checked)})}),title:(0,P.jsx)(ne,{checked:h,disabled:m.length===0,indeterminate:g,onChange:e=>_(e.target.checked)}),width:48},{key:`index`,render:(e,t)=>(0,P.jsx)(`span`,{style:{color:`var(--ant-color-text-tertiary)`,fontFamily:`monospace`,fontSize:12},children:t.sortOrder??`-`}),title:`#`,width:48},{key:`input`,render:(e,t)=>(0,P.jsx)(k.Paragraph,{ellipsis:{expandable:!0,rows:2,symbol:`...`},style:{margin:0},children:t.input}),title:a(`table.columns.input`)},{key:`status`,render:(e,t)=>(0,P.jsx)(D,{title:t.canResume?void 0:t.reason,children:(0,P.jsx)(Qe,{status:t.resumeStatus})}),title:a(`table.columns.status`),width:110}],[a,u,h,g,m,v,_]);return c?(0,P.jsx)(ie,{active:!0,paragraph:{rows:4}}):(0,P.jsx)(ae,{columns:ee,dataSource:o,rowKey:`testCaseId`,scroll:{y:400},size:`small`,style:{minHeight:300},pagination:{pageSize:f,showSizeChanger:!0,size:`small`,onShowSizeChange:(e,t)=>p(t)}})}})),tt,nt,rt=t((()=>{C(),j(),n(),tt=e(d()),nt=({confirming:e,onConfirm:t,selectedCount:n})=>{let{t:i}=r(`eval`),{t:a}=r(`common`),{close:o}=Fe();return(0,tt.jsxs)(Ie,{children:[(0,tt.jsx)(x,{disabled:e,onClick:o,children:a(`cancel`)}),(0,tt.jsxs)(x,{disabled:n===0,loading:e,type:`primary`,onClick:t,children:[i(`run.actions.batchResume.modal.confirm`),` (`,n,`)`]})]})}})),it,at,ot=t((()=>{j(),a(),et(),rt(),it=e(d()),at=({onConfirm:e,runId:t})=>{let n={},r=!1,a=0,o=async()=>{},s=()=>(0,it.jsx)(nt,{confirming:r,selectedCount:a,onConfirm:async()=>{r=!0,n.instance?.update({footer:s()});try{await o(),n.instance?.close()}finally{r=!1,n.instance?.update({footer:s()})}}});return n.instance=Pe({content:(0,it.jsx)($e,{runId:t,submitter:e,onSelectionChange:e=>{e!==a&&(a=e,n.instance?.update({footer:s()}))},onSelectionReady:e=>{o=e.confirm}}),footer:s(),title:i(`run.actions.batchResume.modal.title`,{ns:`eval`}),width:700}),n.instance}})),st,ct,lt=t((()=>{st=new Set([`error`,`timeout`]),ct=(e,t)=>{if(t<=1)return st.has(e.status??``)?{resumeStatus:e.status}:void 0;let n=e.evalResult?.threads?.find(e=>st.has(e.status??``));if(n?.status)return{resumeStatus:n.status,threadId:n.threadId}}})),F,I,L,ut,R,dt,ft,pt,mt,ht,gt,_t,vt=t((()=>{c(),C(),j(),le(),g(),A(),F=e(f()),n(),he(),lt(),I=e(d()),L=h(({css:e,cssVar:t})=>({caseLink:e`
    color: inherit;
    text-decoration: none;
  `,durationSub:e`
    font-family: monospace;
    font-size: 10px;
    color: ${t.colorTextTertiary};
  `,filterBar:e`
    padding-block: 12px;
    padding-inline: 20px;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,indexCell:e`
    font-family: monospace;
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,monoCell:e`
    font-family: monospace;
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,threadDot:e`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  `})),ut=h(({css:e,cssVar:t})=>({text:e`
    color: ${t.colorTextSecondary};
  `})),R=(0,F.memo)(({children:e})=>(0,I.jsx)(`span`,{className:ut.text,children:e})),dt=(0,F.memo)(({record:e})=>{let{t}=r(`eval`),n=e.status;if(!n||n===`pending`)return(0,I.jsx)(O,{status:`default`,text:(0,I.jsx)(R,{children:t(`run.status.pending`)})});if(n===`running`)return(0,I.jsx)(O,{status:`processing`,text:(0,I.jsx)(R,{children:t(`run.status.running`)})});if(n===`passed`)return(0,I.jsx)(S,{color:`green`,children:t(`table.filter.passed`)});if(n===`failed`)return(0,I.jsx)(S,{color:`red`,children:t(`table.filter.failed`)});if(n===`error`){let n=e.evalResult?.error,r=(0,I.jsx)(O,{color:`orange`,text:(0,I.jsx)(R,{children:t(`table.filter.error`)})});return n?(0,I.jsx)(D,{title:n,children:r}):r}if(n===`timeout`)return(0,I.jsx)(O,{color:`orange`,text:(0,I.jsx)(R,{children:t(`run.status.timeout`)})});if(n===`external`){let e=(0,I.jsx)(O,{color:`purple`,text:(0,I.jsx)(R,{children:t(`run.status.external`)})});return(0,I.jsx)(D,{title:t(`run.status.external.tooltip`),children:e})}if(n===`completed`){let e=(0,I.jsx)(O,{color:`blue`,text:(0,I.jsx)(R,{children:t(`run.status.completed`)})});return(0,I.jsx)(D,{title:t(`run.status.completed.tooltip`),children:e})}return(0,I.jsx)(O,{status:`default`,text:(0,I.jsx)(R,{children:n})})}),ft=(0,F.memo)(({threads:e})=>(0,I.jsx)(p,{horizontal:!0,align:`center`,gap:4,children:e.map(e=>{let t=y.colorTextTertiary;return e.status===`running`?t=y.colorPrimary:e.status===`error`?t=y.colorError:e.passed===!0?t=y.colorSuccess:e.passed===!1&&(t=y.colorError),e.status===`external`&&(t=y.colorWarning),e.status===`completed`&&(t=y.colorPrimary),(0,I.jsx)(D,{title:e.error||e.status===`error`?`error`:e.status===`running`?`running`:e.passed===!0?`passed`:e.passed===!1&&e.status!==`completed`?`failed`:e.status===`external`?`Awaiting for external evaluation`:e.status===`completed`?`completed`:`pending`,children:(0,I.jsx)(`span`,{className:L.threadDot,style:{backgroundColor:t}})},e.threadId)})})),pt=(0,F.memo)(({ms:e})=>{let t=e/1e3;if(t<60)return(0,I.jsxs)(`span`,{className:L.monoCell,children:[t.toFixed(1),`s`]});let n=Math.floor(t/60),r=Math.floor(t%60);return(0,I.jsxs)(p,{gap:2,children:[(0,I.jsxs)(`span`,{className:L.monoCell,children:[n,`m `,r,`s`]}),(0,I.jsxs)(`span`,{className:L.durationSub,children:[t.toFixed(1),`s`]})]})}),mt=(0,F.memo)(({startTime:e})=>{let[t,n]=(0,F.useState)(()=>Date.now()-new Date(e).getTime());return(0,F.useEffect)(()=>{let t=setInterval(()=>{n(Date.now()-new Date(e).getTime())},100);return()=>clearInterval(t)},[e]),(0,I.jsx)(pt,{ms:t})}),ht=new Set([`error`,`failed`,`timeout`]),gt=new Set([`completed`,`failed`,`aborted`]),_t=(0,F.memo)(({results:e,benchmarkId:t,runId:n,k:i=1,onRetryCase:a,onResumeCase:o,runStatus:s})=>{let{t:c}=r(`eval`),[d,f]=(0,F.useState)(``),[m,h]=(0,F.useState)(`all`),[g,_]=(0,F.useState)(20),[ee,b]=(0,F.useState)(null),[x,te]=(0,F.useState)(null),C=i>1,w=!!a&&!!s&&gt.has(s),E=!!o,ne=(0,F.useMemo)(()=>{let t=e;return d&&(t=t.filter(e=>e.testCase?.content?.input?.toLowerCase().includes(d.toLowerCase()))),m!==`all`&&(t=m===`pending`?t.filter(e=>!e.status||e.status===`pending`):m===`running`?t.filter(e=>e.status===`running`):t.filter(e=>e.status===m)),t},[e,d,m]),re=(0,F.useMemo)(()=>{let e=[{key:`index`,render:(e,t,n)=>(0,I.jsx)(`span`,{className:L.indexCell,children:t.testCase?.sortOrder??n+1}),title:`#`,width:48},{dataIndex:[`testCase`,`content`,`input`],key:`input`,render:(e,r)=>(0,I.jsx)(fe,{className:L.caseLink,to:`/eval/bench/${t}/runs/${n}/cases/${r.testCaseId}`,children:e}),title:c(`table.columns.input`)}];return C?e.push({key:`threads`,render:(e,t)=>{let n=t.evalResult?.threads;return n?.length?(0,I.jsx)(ft,{threads:n}):(0,I.jsx)(dt,{record:t})},title:c(`table.columns.status`),width:60+i*12},{key:`passAtK`,render:(e,t)=>{let n=t.evalResult?.passAtK,r=t.evalResult?.passAllK,a=n!=null,o=r!=null;return!a&&!o?`-`:(0,I.jsxs)(p,{gap:2,children:[a&&(n?(0,I.jsx)(S,{color:`green`,children:c(`table.filter.passed`)}):(0,I.jsx)(S,{color:`red`,children:c(`table.filter.failed`)})),o&&(0,I.jsxs)(`span`,{className:L.durationSub,children:[`^`,i,`: `,c(r?`table.filter.passed`:`table.filter.failed`)]})]})},title:`pass@${i}`,width:110}):e.push({key:`status`,render:(e,t)=>(0,I.jsx)(dt,{record:t}),title:c(`table.columns.status`),width:100}),e.push({key:`duration`,render:(e,t)=>{let n=t.evalResult?.duration;return n==null?t.status===`running`&&t.createdAt?(0,I.jsx)(mt,{startTime:t.createdAt}):`-`:(0,I.jsx)(pt,{ms:n})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.duration??0)-(t.evalResult?.duration??0),title:c(`table.columns.duration`),width:100},{key:`steps`,render:(e,t)=>{let n=t.evalResult?.steps;if(n==null)return`-`;let r=t.evalResult?.llmCalls,i=t.evalResult?.toolCalls,a=n,o=r??void 0,s=i??void 0,c=o!==void 0||s!==void 0;return(0,I.jsxs)(p,{gap:2,children:[(0,I.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,I.jsx)(v,{icon:ge,size:12,style:{opacity:.5}}),(0,I.jsx)(`span`,{className:L.monoCell,children:a})]}),c&&(0,I.jsxs)(`span`,{className:L.durationSub,children:[o??0,` llm / `,s??0,` tool`]})]})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.steps??0)-(t.evalResult?.steps??0),title:c(`table.columns.steps`),width:120},{key:`cost`,render:(e,t)=>{let n=t.evalResult?.cost,r=t.evalResult?.tokens,i=n!=null,a=r!=null;return!i&&!a?`-`:(0,I.jsxs)(p,{gap:2,children:[i&&(0,I.jsxs)(`span`,{className:L.monoCell,children:[`$`,u(n)]}),a&&(0,I.jsxs)(`span`,{className:L.durationSub,children:[l(r),` tokens`]})]})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.cost??0)-(t.evalResult?.cost??0),title:c(`table.columns.cost`),width:120}),C&&e.push({key:`totalCost`,render:(e,t)=>{let n=t.evalResult?.totalCost,r=t.evalResult?.totalTokens,i=n!=null,a=r!=null;return!i&&!a?`-`:(0,I.jsxs)(p,{gap:2,children:[i&&(0,I.jsxs)(`span`,{className:L.monoCell,children:[`$`,u(n)]}),a&&(0,I.jsxs)(`span`,{className:L.durationSub,children:[l(r),` tokens`]})]})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.totalCost??0)-(t.evalResult?.totalCost??0),title:c(`table.columns.totalCost`),width:120}),(w||E)&&e.push({key:`actions`,render:(e,t)=>{let n=w&&ht.has(t.status),r=ct(t,i),s=E&&!!r;if(!n&&!s)return null;let l=ee===t.testCaseId,u=x===t.testCaseId;return(0,I.jsxs)(p,{horizontal:!0,gap:4,children:[n&&(0,I.jsx)(D,{title:c(`run.actions.retryCase`),children:(0,I.jsx)(T,{icon:_e,loading:l,size:`small`,onClick:async()=>{b(t.testCaseId);try{await a(t.testCaseId)}finally{b(null)}}})}),s&&(0,I.jsx)(D,{title:c(`run.actions.resumeCase`),children:(0,I.jsx)(T,{icon:Ne,loading:u,size:`small`,onClick:async()=>{te(t.testCaseId);try{await o(t.testCaseId,r?.threadId)}finally{te(null)}}})})]})},title:``,width:80}),e},[t,n,c,C,i,w,E,ee,x,a,o]);return(0,I.jsxs)(p,{gap:0,children:[(0,I.jsxs)(p,{horizontal:!0,align:`center`,className:L.filterBar,gap:8,children:[(0,I.jsx)(ce.Search,{allowClear:!0,placeholder:c(`table.search.placeholder`),style:{width:240},onChange:e=>f(e.target.value)}),(0,I.jsx)(Le,{style:{width:120},value:m,options:[{label:c(`table.filter.all`),value:`all`},{label:c(`table.filter.passed`),value:`passed`},{label:c(`table.filter.failed`),value:`failed`},{label:c(`table.filter.error`),value:`error`},{label:c(`table.filter.running`),value:`running`},{label:c(`run.status.pending`),value:`pending`},{label:c(`run.status.external`),value:`external`},{label:c(`run.status.completed`),value:`completed`}],onChange:h}),(0,I.jsx)(`span`,{style:{color:y.colorTextTertiary,fontSize:12,whiteSpace:`nowrap`},children:c(`table.total`,{count:ne.length})})]}),(0,I.jsx)(ae,{columns:re,dataSource:ne,rowKey:`testCaseId`,size:`small`,pagination:{pageSize:g,showSizeChanger:!0,size:`small`,onShowSizeChange:(e,t)=>_(t)}})]})})})),yt,z,B,bt,xt=t((()=>{c(),C(),le(),g(),yt=e(f()),n(),z=e(d()),B=h(({css:e,cssVar:t})=>({axisLabel:e`
    pointer-events: none;
    position: absolute;
    font-size: 11px;
    color: ${t.colorTextTertiary};
  `,dot:e`
    cursor: pointer;
    transition: all 0.15s ease;

    &:hover {
      transform: translate(-50%, 50%) scale(1.5);
      opacity: 1 !important;
    }
  `,scatterArea:e`
    position: relative;
    overflow: hidden;
    flex: 1;
  `,tooltipLabel:e`
    color: ${t.colorTextTertiary};
  `})),bt=(0,yt.memo)(({results:e,benchmarkId:t,runId:n})=>{let{t:i}=r(`eval`),a=_(),{maxDuration:o,maxTokens:s,scatterData:c}=(0,yt.useMemo)(()=>{if(!e||e.length===0)return{maxDuration:0,maxTokens:0,scatterData:[]};let t=0,n=0,r=e.map(e=>{let r=(e.evalResult?.duration||0)/1e3,i=e.evalResult?.tokens||0,a=e.evalResult?.cost,o=e.status,s=e.testCase?.content?.input||``,c=e.testCase?.content?.expected||``,l=e.testCase?.sortOrder,u=e.testCaseId||``;return r>t&&(t=r),i>n&&(n=i),{cost:a,duration:r,expected:c,input:s,sortOrder:l,status:o,testCaseId:u,tokens:i}});return{maxDuration:t,maxTokens:n,scatterData:r}},[e]);return!e||e.length===0?null:(0,z.jsxs)(`div`,{className:B.scatterArea,children:[(0,z.jsxs)(`svg`,{preserveAspectRatio:`none`,viewBox:`0 0 100 100`,style:{height:`100%`,insetBlockStart:0,insetInlineStart:0,position:`absolute`,width:`100%`},children:[(0,z.jsx)(`line`,{stroke:a.colorBorder,strokeWidth:`0.5`,x1:`0`,x2:`100`,y1:`100`,y2:`100`}),(0,z.jsx)(`line`,{stroke:a.colorBorder,strokeWidth:`0.5`,x1:`0`,x2:`0`,y1:`0`,y2:`100`}),[1,2,3].map(e=>(0,z.jsx)(`line`,{stroke:a.colorBorder,strokeDasharray:`2 2`,strokeOpacity:`0.5`,strokeWidth:`0.5`,x1:`0`,x2:`100`,y1:100-e*25,y2:100-e*25},e))]}),c.map((e,r)=>{let c=e.tokens/(s||1)*92+4,d=e.duration/(o||1)*88+6,f=e.status===`passed`?a.colorSuccess:e.status===`error`?a.colorWarning:a.colorError,m=e.status===`passed`?`green`:e.status===`error`?`orange`:`red`,h=e.status===`passed`?i(`run.chart.pass`):e.status===`error`?i(`run.chart.error`):i(`run.chart.fail`),g=e.input.length>60?e.input.slice(0,60)+`...`:e.input,_=e.expected.length>60?e.expected.slice(0,60)+`...`:e.expected,v=`/eval/bench/${t}/runs/${n}/cases/${e.testCaseId}`;return(0,z.jsx)(D,{title:(0,z.jsxs)(p,{gap:4,style:{fontSize:12,maxWidth:320},children:[(0,z.jsxs)(p,{horizontal:!0,align:`center`,gap:6,justify:`space-between`,children:[(0,z.jsxs)(p,{horizontal:!0,align:`center`,gap:6,children:[(0,z.jsxs)(`span`,{style:{fontWeight:600},children:[`#`,e.sortOrder??r+1]}),(0,z.jsx)(S,{color:m,size:`small`,children:h})]}),(0,z.jsxs)(`span`,{className:B.tooltipLabel,children:[e.duration.toFixed(2),`s`]})]}),g&&(0,z.jsx)(`div`,{style:{lineHeight:1.4,wordBreak:`break-all`},children:g}),_&&(0,z.jsx)(`div`,{className:B.tooltipLabel,style:{lineHeight:1.4,wordBreak:`break-all`},children:_}),(0,z.jsx)(de,{style:{margin:`2px 0`}}),(0,z.jsxs)(p,{horizontal:!0,gap:16,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`span`,{className:B.tooltipLabel,children:[i(`run.chart.tokens`),`: `]}),l(e.tokens)]}),e.cost!==void 0&&(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`span`,{className:B.tooltipLabel,children:[i(`run.metrics.cost`),`: `]}),`$`,u(e.cost)]})]})]}),children:(0,z.jsx)(`div`,{className:B.dot,style:{background:f,borderRadius:`50%`,bottom:`${d}%`,height:7,left:`${c}%`,opacity:.8,position:`absolute`,transform:`translate(-50%, 50%)`,width:7},onClick:()=>window.open(v,`_blank`)})},r)}),(0,z.jsx)(`span`,{className:B.axisLabel,style:{bottom:2,right:4},children:i(`run.chart.tokens`)}),(0,z.jsx)(`span`,{className:B.axisLabel,style:{left:4,top:0},children:i(`run.chart.duration`)})]})})})),St,Ct,wt,Tt=t((()=>{Xe(),g(),St=e(f()),n(),Ct=e(d()),wt=(0,St.memo)(({passedCases:e,failedCases:t,errorCases:n})=>{let{t:i}=r(`eval`),a=_(),o=[{name:i(`run.chart.pass`),value:e},{name:i(`run.chart.fail`),value:t},...n>0?[{name:i(`run.chart.error`),value:n}]:[]];return(0,Ct.jsx)(Ye,{category:`value`,colors:[a.colorSuccess,a.colorFill,...n>0?[a.colorWarning]:[]],data:o,index:`name`,style:{height:200},variant:`pie`})})})),Et,V,H,Dt,Ot=t((()=>{Xe(),C(),g(),Et=e(f()),n(),xt(),Tt(),V=e(d()),H=h(({css:e,cssVar:t})=>({chartCard:e`
    padding: 16px;
    border: 1px solid ${t.colorBorder};
    border-radius: 12px;
    background: ${t.colorBgContainer};
  `,chartTitle:e`
    margin-block-end: 12px;
    font-size: 14px;
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `,legendDot:e`
    width: 8px;
    height: 8px;
    border-radius: 50%;
  `,legendText:e`
    color: ${t.colorTextSecondary};
  `,totalCount:e`
    padding-block: 1px;
    padding-inline: 6px;
    border-radius: 4px;

    font-size: 11px;
    font-weight: 600;
    color: ${t.colorTextSecondary};

    background: ${t.colorFillSecondary};
  `})),Dt=(0,Et.memo)(({results:e,benchmarkId:t,runId:n})=>{let{t:i}=r(`eval`),a=_(),{errorCases:o,failedCases:s,histogramData:c,passedCases:l}=(0,Et.useMemo)(()=>{if(!e||e.length===0)return{errorCases:0,failedCases:0,histogramData:[],passedCases:0};let t=0,n=0,r=0,i=[];for(let a of e){let e=(a.evalResult?.duration||0)/1e3,o=a.status;o===`passed`?t++:o===`error`?r++:o===`failed`&&n++,i.push({duration:e,status:o})}let a=[{error:0,failed:0,max:60,passed:0,range:`<1min`},{error:0,failed:0,max:180,passed:0,range:`1~3min`},{error:0,failed:0,max:300,passed:0,range:`3~5min`},{error:0,failed:0,max:1/0,passed:0,range:`>5min`}];for(let e of i){let t=e.duration<60?0:e.duration<180?1:e.duration<300?2:3;e.status===`passed`?a[t].passed++:e.status===`error`?a[t].error++:a[t].failed++}return{errorCases:r,failedCases:n,histogramData:a,passedCases:t}},[e]),u=i(`run.chart.pass`),d=i(`run.chart.fail`),f=i(`run.chart.error`),m=(0,Et.useMemo)(()=>c.map(e=>({[f]:e.error,[d]:e.failed,[u]:e.passed,range:e.range})),[c,u,d,f]);return!e||e.length===0?null:(0,V.jsxs)(p,{horizontal:!0,gap:16,style:{height:320},children:[(0,V.jsxs)(p,{className:H.chartCard,flex:1,children:[(0,V.jsx)(`div`,{className:H.chartTitle,children:i(`run.chart.passFailError`)}),(0,V.jsx)(p,{align:`center`,flex:1,justify:`center`,children:(0,V.jsx)(wt,{errorCases:o,failedCases:s,passedCases:l})})]}),(0,V.jsxs)(p,{className:H.chartCard,flex:2,children:[(0,V.jsxs)(p,{horizontal:!0,justify:`space-between`,style:{marginBlockEnd:12},children:[(0,V.jsx)(`span`,{className:H.chartTitle,style:{marginBlockEnd:0},children:i(`run.chart.latencyTokenDistribution`)}),(0,V.jsxs)(p,{horizontal:!0,gap:12,style:{fontSize:11},children:[(0,V.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,V.jsx)(`div`,{className:H.legendDot,style:{background:a.colorSuccess}}),(0,V.jsx)(`span`,{className:H.legendText,children:i(`run.chart.pass`)})]}),(0,V.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,V.jsx)(`div`,{className:H.legendDot,style:{background:a.colorFill}}),(0,V.jsx)(`span`,{className:H.legendText,children:i(`run.chart.fail`)})]}),(0,V.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,V.jsx)(`div`,{className:H.legendDot,style:{background:a.colorWarning}}),(0,V.jsx)(`span`,{className:H.legendText,children:i(`run.chart.error`)})]})]})]}),(0,V.jsx)(bt,{benchmarkId:t,results:e,runId:n})]}),(0,V.jsxs)(p,{className:H.chartCard,flex:1,children:[(0,V.jsxs)(p,{horizontal:!0,align:`center`,className:H.chartTitle,gap:6,children:[(0,V.jsx)(`span`,{children:i(`run.chart.latencyDistribution`)}),(0,V.jsx)(`span`,{className:H.totalCount,children:e.length})]}),(0,V.jsx)(Ze,{stack:!0,categories:[u,d,f],colors:[a.colorSuccess,a.colorFill,a.colorWarning],data:m,index:`range`,showLegend:!1,showYAxis:!1})]})]})})})),kt,U,W,At,jt=t((()=>{C(),j(),le(),g(),A(),kt=e(f()),n(),He(),U=e(d()),W=h(({css:e,cssVar:t})=>({center:e`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 50%;

    color: ${t.colorTextSecondary};

    background: ${t.colorFillTertiary};
  `,container:e`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `,hint:e`
    margin-block-start: 24px;
    font-size: 13px;
    color: ${t.colorTextQuaternary};
  `,icon:e`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: 8px;
  `,icon1:e`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: ${t.geekblue};
    background: ${t.geekblue1};
  `,icon2:e`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: ${t.colorSuccess};
    background: ${t.colorSuccessBg};
  `,icon3:e`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: ${t.purple};
    background: ${t.purple1};
  `,orbit:e`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 50%;
  `,orbit1:e`
    width: 200px;
    height: 200px;
  `,orbit2:e`
    width: 140px;
    height: 140px;
  `,orbit3:e`
    width: 80px;
    height: 80px;
  `,orbitGroup:e`
    position: relative;
    width: 200px;
    height: 200px;
  `})),At=(0,kt.memo)(({run:e})=>{let{t}=r(`eval`),{message:n}=se.useApp(),i=M(e=>e.startRun),[a,o]=(0,kt.useState)(!1);return(0,U.jsxs)(`div`,{className:W.container,children:[(0,U.jsxs)(`div`,{className:W.orbitGroup,children:[(0,U.jsx)(`div`,{className:m(W.orbit,W.orbit1)}),(0,U.jsx)(`div`,{className:m(W.orbit,W.orbit2)}),(0,U.jsx)(`div`,{className:m(W.orbit,W.orbit3)}),(0,U.jsx)(`div`,{className:m(W.icon,W.icon1),children:(0,U.jsx)(v,{icon:Se,size:16})}),(0,U.jsx)(`div`,{className:m(W.icon,W.icon2),children:(0,U.jsx)(v,{icon:De,size:16})}),(0,U.jsx)(`div`,{className:m(W.icon,W.icon3),children:(0,U.jsx)(v,{icon:be,size:16})}),(0,U.jsx)(`div`,{className:W.center,children:(0,U.jsx)(v,{icon:Ne,size:18})})]}),(0,U.jsx)(`div`,{className:W.hint,children:t(`run.idle.hint`)}),(0,U.jsx)(x,{icon:(0,U.jsx)(Ne,{size:14}),loading:a,style:{marginTop:12},type:`primary`,onClick:()=>{Re({content:t(`run.actions.start.confirm`),okText:t(`run.actions.start`),onOk:async()=>{try{o(!0),await i(e.id,e.status!==`idle`)}catch(e){n.error(e?.message||`Failed to start run`)}finally{o(!1)}},title:t(`run.actions.start`)})},children:t(`run.actions.start`)})]})})})),Mt,G,K,Nt,Pt=t((()=>{C(),g(),A(),Mt=e(f()),G=e(d()),K=h(({css:e,cssVar:t})=>({center:e`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 50%;

    color: ${t.colorWarning};

    background: ${t.colorWarningBg};
  `,container:e`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `,hint:e`
    margin-block-start: 24px;
    font-size: 13px;
    color: ${t.colorTextQuaternary};
  `,icon:e`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: 8px;
  `,icon1:e`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: ${t.geekblue};
    background: ${t.geekblue1};
  `,icon2:e`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: ${t.colorSuccess};
    background: ${t.colorSuccessBg};
  `,icon3:e`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: ${t.purple};
    background: ${t.purple1};
  `,orbit:e`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px dashed ${t.colorBorderSecondary};
    border-radius: 50%;
  `,orbit1:e`
    width: 200px;
    height: 200px;
  `,orbit2:e`
    width: 140px;
    height: 140px;
  `,orbit3:e`
    width: 80px;
    height: 80px;
  `,orbitGroup:e`
    position: relative;
    width: 200px;
    height: 200px;
  `})),Nt=(0,Mt.memo)(({hint:e})=>(0,G.jsxs)(`div`,{className:K.container,children:[(0,G.jsxs)(`div`,{className:K.orbitGroup,children:[(0,G.jsx)(`div`,{className:m(K.orbit,K.orbit1)}),(0,G.jsx)(`div`,{className:m(K.orbit,K.orbit2)}),(0,G.jsx)(`div`,{className:m(K.orbit,K.orbit3)}),(0,G.jsx)(`div`,{className:m(K.icon,K.icon1),children:(0,G.jsx)(v,{icon:Se,size:16})}),(0,G.jsx)(`div`,{className:m(K.icon,K.icon2),children:(0,G.jsx)(v,{icon:De,size:16})}),(0,G.jsx)(`div`,{className:m(K.icon,K.icon3),children:(0,G.jsx)(v,{icon:be,size:16})}),(0,G.jsx)(`div`,{className:K.center,children:(0,G.jsx)(v,{icon:Me,size:18})})]}),(0,G.jsx)(`div`,{className:K.hint,children:e})]}))})),Ft,q,J,It,Lt=t((()=>{s(),C(),j(),le(),g(),A(),Ft=e(f()),n(),he(),qe(),Ue(),He(),q=e(d()),J=h(({css:e,cssVar:t})=>({backLink:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    width: fit-content;

    font-size: 14px;
    color: ${t.colorTextTertiary};
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: ${t.colorText};
    }
  `,configSection:e`
    margin-block-start: 12px;
  `,configSectionLabel:e`
    margin-block-end: 8px;
    font-size: 12px;
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `,systemRole:e`
    overflow: auto;

    max-height: 300px;
    padding: 12px;
    border-radius: 6px;

    font-size: 13px;

    background: ${t.colorFillQuaternary};
  `,configToggle:e`
    cursor: pointer;

    display: flex;
    gap: 4px;
    align-items: center;

    padding: 0;
    border: none;

    font-size: 12px;
    color: ${t.colorTextTertiary};

    background: transparent;

    transition: color 0.2s;

    &:hover {
      color: ${t.colorText};
    }
  `,datasetLink:e`
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${t.colorPrimary};
    }
  `,metaRow:e`
    flex-wrap: wrap;
    font-size: 13px;
    color: ${t.colorTextTertiary};
  `,modelText:e`
    font-family: monospace;
    font-size: 12px;
  `,separator:e`
    color: ${t.colorBorder};
  `,titleRow:e`
    margin-block-end: 16px;
  `})),It=(0,Ft.memo)(({run:e,benchmarkId:t,hideStart:n})=>{let{t:i}=r(`eval`),{message:a}=se.useApp(),s=me(),c=M(e=>e.abortRun),l=M(e=>e.deleteRun),u=M(e=>e.startRun),d=e.status===`running`||e.status===`pending`,f=e.status===`idle`||e.status===`failed`||e.status===`aborted`,[m,h]=(0,Ft.useState)(!1),[g,_]=(0,Ft.useState)(!1),v=e.config?.agentSnapshot,y=e.targetAgent?.title||i(`run.detail.agent.unnamed`),x=v?.avatar||e.targetAgent?.avatar,S=v?.model||e.targetAgent?.model,C=v?.provider||e.targetAgent?.provider;return(0,q.jsxs)(p,{gap:16,children:[(0,q.jsxs)(fe,{className:J.backLink,to:`/eval/bench/${t}`,children:[(0,q.jsx)(we,{size:16}),i(`run.detail.backToBenchmark`)]}),(0,q.jsxs)(E,{styles:{body:{padding:20}},children:[(0,q.jsxs)(p,{horizontal:!0,align:`center`,className:J.titleRow,justify:`space-between`,children:[(0,q.jsxs)(p,{gap:4,children:[(0,q.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,q.jsx)(k.Title,{level:4,style:{margin:0},children:e.name||e.id.slice(0,8)}),(0,q.jsx)(T,{icon:xe,size:`small`,title:i(`run.detail.copyRunId`),onClick:async()=>{try{await b(e.id),a.success(i(`run.detail.copyRunIdSuccess`))}catch{a.error(i(`run.detail.copyRunIdFailed`))}}}),(0,q.jsx)(We,{status:e.status})]}),(0,q.jsxs)(p,{horizontal:!0,align:`center`,className:J.metaRow,gap:8,children:[e.dataset&&(0,q.jsx)(fe,{className:J.datasetLink,target:`_blank`,to:`/eval/bench/${t}/datasets/${e.dataset.id}`,children:e.dataset.name}),e.targetAgentId&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{className:J.separator,children:`|`}),(0,q.jsxs)(p,{horizontal:!0,align:`center`,gap:4,style:{cursor:`pointer`},onClick:()=>{e.targetAgentId&&window.open(o(e.targetAgentId),`_blank`)},children:[(0,q.jsx)(w,{avatar:x,size:16}),(0,q.jsx)(`span`,{children:y})]})]}),S&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{className:J.separator,children:`|`}),(0,q.jsxs)(`span`,{className:J.modelText,children:[C?`${C} / `:``,S]})]}),e.createdAt&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{className:J.separator,children:`|`}),(0,q.jsx)(`span`,{children:(e=>e?(e instanceof Date?e:new Date(e)).toLocaleString():``)(e.createdAt)})]})]})]}),(0,q.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[f&&!n&&(0,q.jsx)(oe,{icon:(0,q.jsx)(Ne,{size:14}),loading:m,type:`primary`,onClick:()=>{Re({content:i(`run.actions.start.confirm`),okText:i(`run.actions.start`),onOk:async()=>{try{h(!0),await u(e.id,e.status!==`idle`)}catch(e){a.error(e?.message||`Failed to start run`)}finally{h(!1)}},title:i(`run.actions.start`)})},children:i(`run.actions.start`)}),(0,q.jsx)(T,{icon:Ce,size:`small`,title:i(`run.actions.edit`),onClick:()=>Je({run:e})}),d&&(0,q.jsx)(T,{icon:Ae,size:`small`,title:i(`run.actions.abort`),onClick:()=>{Re({content:i(`run.actions.abort.confirm`),okButtonProps:{danger:!0},okText:i(`run.actions.abort`),onOk:()=>c(e.id),title:i(`run.actions.abort`)})}}),(0,q.jsx)(T,{icon:Te,size:`small`,title:i(`run.actions.delete`),onClick:()=>{Re({content:i(`run.actions.delete.confirm`),okButtonProps:{danger:!0},okText:i(`run.actions.delete`),onOk:async()=>{await l(e.id),s(`/eval/bench/${t}`)},title:i(`run.actions.delete`)})}})]})]}),(0,q.jsxs)(`button`,{className:J.configToggle,onClick:()=>_(!g),children:[g?(0,q.jsx)(Ee,{size:12}):(0,q.jsx)(je,{size:12}),i(`run.detail.configSnapshot`)]}),g&&v&&(0,q.jsxs)(p,{gap:0,children:[v.systemRole&&(0,q.jsxs)(`div`,{className:J.configSection,children:[(0,q.jsx)(`div`,{className:J.configSectionLabel,children:`System Role`}),(0,q.jsx)(`div`,{className:J.systemRole,children:(0,q.jsx)(ee,{variant:`chat`,children:v.systemRole})})]}),v.plugins&&v.plugins.length>0&&(0,q.jsxs)(`div`,{className:J.configSection,children:[(0,q.jsx)(`div`,{className:J.configSectionLabel,children:`Plugins`}),(0,q.jsx)(p,{horizontal:!0,gap:4,wrap:`wrap`,children:v.plugins.map(e=>(0,q.jsx)(ue,{children:e},e))})]}),(v.chatConfig||v.params)&&(0,q.jsx)(`div`,{className:J.configSection,children:(0,q.jsxs)(p,{horizontal:!0,gap:12,children:[v.chatConfig&&(0,q.jsxs)(p,{flex:1,gap:0,style:{minWidth:0},children:[(0,q.jsx)(`div`,{className:J.configSectionLabel,children:`Chat Config`}),(0,q.jsx)(te,{language:`json`,style:{fontSize:12,maxHeight:300,overflow:`auto`},variant:`filled`,children:JSON.stringify(v.chatConfig,null,2)})]}),v.params&&(0,q.jsxs)(p,{flex:1,gap:0,style:{minWidth:0},children:[(0,q.jsx)(`div`,{className:J.configSectionLabel,children:`Params`}),(0,q.jsx)(te,{language:`json`,style:{fontSize:12,maxHeight:300,overflow:`auto`},variant:`filled`,children:JSON.stringify(v.params,null,2)})]})]})})]})]})]})})})),Rt,Y,X,zt,Bt=t((()=>{C(),g(),A(),Rt=e(f()),n(),Y=e(d()),X=h(({css:e,cssVar:t})=>({center:e`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 50%;

    color: ${t.colorTextSecondary};

    background: ${t.colorFillTertiary};
  `,container:e`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `,hint:e`
    margin-block-start: 24px;
    font-size: 13px;
    color: ${t.colorTextQuaternary};
  `,icon:e`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: 8px;
  `,icon1:e`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: ${t.geekblue};
    background: ${t.geekblue1};
  `,icon2:e`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: ${t.colorSuccess};
    background: ${t.colorSuccessBg};
  `,icon3:e`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: ${t.purple};
    background: ${t.purple1};
  `,orbit:e`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px dashed ${t.colorBorderSecondary};
    border-radius: 50%;
  `,orbit1:e`
    width: 200px;
    height: 200px;
  `,orbit2:e`
    width: 140px;
    height: 140px;
  `,orbit3:e`
    width: 80px;
    height: 80px;
  `,orbitGroup:e`
    position: relative;
    width: 200px;
    height: 200px;

    @keyframes orbit-spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    animation: orbit-spin 20s linear infinite;
  `,spinner:e`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    animation: spin 1.5s linear infinite;
  `})),zt=(0,Rt.memo)(()=>{let{t:e}=r(`eval`);return(0,Y.jsxs)(`div`,{className:X.container,children:[(0,Y.jsxs)(`div`,{className:X.orbitGroup,children:[(0,Y.jsx)(`div`,{className:m(X.orbit,X.orbit1)}),(0,Y.jsx)(`div`,{className:m(X.orbit,X.orbit2)}),(0,Y.jsx)(`div`,{className:m(X.orbit,X.orbit3)}),(0,Y.jsx)(`div`,{className:m(X.icon,X.icon1),children:(0,Y.jsx)(v,{icon:Se,size:16})}),(0,Y.jsx)(`div`,{className:m(X.icon,X.icon2),children:(0,Y.jsx)(v,{icon:De,size:16})}),(0,Y.jsx)(`div`,{className:m(X.icon,X.icon3),children:(0,Y.jsx)(v,{icon:be,size:16})}),(0,Y.jsx)(`div`,{className:X.center,children:(0,Y.jsx)(v,{className:X.spinner,icon:Oe,size:18})})]}),(0,Y.jsx)(`div`,{className:X.hint,children:e(`run.running.hint`)})]})})})),Vt,Z,Q,Ht,Ut=t((()=>{c(),C(),g(),A(),Vt=e(f()),n(),Ge(),Z=e(d()),Q=h(({css:e,cssVar:t})=>({card:e`
    padding: 16px;
    border: 1px solid ${t.colorBorder};
    border-radius: 8px;
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  `,iconBox:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: 8px;
  `,label:e`
    font-size: 13px;
    color: ${t.colorTextTertiary};
  `,subtitle:e`
    font-size: 14px;
    color: ${t.colorTextSecondary};
  `,subtitleUnit:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,value:e`
    font-size: 24px;
    font-weight: bold;
  `,valueSuffix:e`
    font-size: 16px;
    color: ${t.colorTextTertiary};
  `})),Ht=(0,Vt.memo)(({metrics:e})=>{let{t}=r(`eval`),n=e?.passedCases??0,i=e?.totalCases??0,a=[{bgColor:y.colorSuccessBg,color:y.colorSuccess,icon:ye,label:t(`run.metrics.passRate`),subtitle:i>0?(0,Z.jsxs)(Z.Fragment,{children:[n,`/`,i,` `,(0,Z.jsx)(`span`,{className:Q.subtitleUnit,children:t(`table.filter.passed`)})]}):void 0,value:e?.passRate===void 0?`-`:`${Math.round(e.passRate*100)}%`,valueSuffix:void 0},{bgColor:y.colorWarningBg,color:y.colorWarning,icon:Me,label:t(`run.metrics.duration`),subtitle:e?.totalDuration!==void 0&&i>0?(0,Z.jsxs)(Z.Fragment,{children:[`~`,Ke(e.totalDuration/i),` `,(0,Z.jsx)(`span`,{className:Q.subtitleUnit,children:t(`run.metrics.perCase`)})]}):void 0,value:e?.duration===void 0?`-`:Ke(e.duration)},{bgColor:y.colorPrimaryBg,color:y.colorPrimary,icon:ke,label:t(`run.metrics.cost`),subtitle:e?.perCaseCost===void 0?void 0:(0,Z.jsxs)(Z.Fragment,{children:[`~$`,u(e.perCaseCost),` `,(0,Z.jsx)(`span`,{className:Q.subtitleUnit,children:t(`run.metrics.perCase`)})]}),value:e?.totalCost===void 0?`-`:`$${u(e.totalCost)}`},{bgColor:y.colorInfoBg,color:y.colorInfo,icon:ve,label:t(`run.metrics.tokens`),subtitle:e?.perCaseTokens===void 0?void 0:(0,Z.jsxs)(Z.Fragment,{children:[`~`,l(Math.round(e.perCaseTokens)),` `,(0,Z.jsx)(`span`,{className:Q.subtitleUnit,children:t(`run.metrics.perCase`)})]}),value:e?.totalTokens===void 0?`-`:l(e.totalTokens)}];return(0,Z.jsx)(`div`,{className:Q.grid,children:a.map(e=>(0,Z.jsxs)(p,{horizontal:!0,align:`center`,className:Q.card,gap:12,children:[(0,Z.jsx)(`div`,{className:Q.iconBox,style:{background:e.bgColor},children:(0,Z.jsx)(v,{icon:e.icon,size:16,style:{color:e.color}})}),(0,Z.jsxs)(p,{gap:2,children:[(0,Z.jsx)(`span`,{className:Q.label,children:e.label}),(0,Z.jsxs)(`span`,{className:Q.value,children:[e.value,e.valueSuffix&&(0,Z.jsx)(`span`,{className:Q.valueSuffix,children:e.valueSuffix})]}),e.subtitle&&(0,Z.jsx)(`span`,{className:Q.subtitle,children:e.subtitle})]})]},e.label))})})})),Wt,$,Gt,Kt;t((()=>{C(),j(),le(),A(),Wt=e(f()),n(),he(),He(),ot(),vt(),Ot(),jt(),Pt(),lt(),Lt(),Bt(),Ut(),$=e(d()),Gt=3e3,Kt=(0,Wt.memo)(()=>{let{t:e}=r(`eval`),{benchmarkId:t,runId:n}=pe(),i=M(e=>e.useFetchRunDetail),a=M(e=>e.useFetchRunResults),o=M(e=>e.retryRunErrors),s=M(e=>e.retryRunCase),c=M(e=>e.resumeRunCase),l=M(e=>e.batchResumeRunCases),u=M(Ve.getRunDetailById(n)),d=M(Ve.getRunResultsById(n)),f=M(Ve.isRunActive(n)),[m,h]=(0,Wt.useState)(!1),g={refreshInterval:f?Gt:0};if(i(n,g),a(n,g),!u)return null;let _=!!d?.results?.length,v=u.status===`completed`||u.status===`failed`||u.status===`aborted`,y=u.metrics,ee=y?.completedCases??0,b=y?.totalCases??0,x=b>0?Math.round(ee/b*100):0,te=b>0&&x<100,S=(y?.errorCases??0)+(y?.timeoutCases??0),C=v&&S>0,w=u.config?.k??1,T=(d?.results??[]).some(e=>!!ct(e,w));return(0,$.jsxs)(p,{gap:24,padding:24,style:{margin:`0 auto`,maxWidth:1440,width:`100%`},children:[(0,$.jsx)(It,{benchmarkId:t,hideStart:u.status===`idle`,run:u}),v?(0,$.jsxs)(E,{styles:{body:{display:`flex`,flexDirection:`column`,gap:20,padding:20},header:{minHeight:`auto`,padding:`12px 20px`}},title:(0,$.jsx)(k.Text,{strong:!0,style:{fontSize:14},children:e(`run.detail.report`)}),children:[(0,$.jsx)(Ht,{metrics:u.metrics??void 0}),_&&(0,$.jsx)(Dt,{benchmarkId:t,results:d.results,runId:n})]}):(0,$.jsx)(E,{styles:{body:{alignItems:`center`,display:`flex`,justifyContent:`center`,minHeight:430,padding:20},header:{minHeight:`auto`,padding:`12px 20px`}},title:(0,$.jsx)(k.Text,{strong:!0,style:{fontSize:14},children:e(`run.detail.report`)}),children:u.status===`running`?(0,$.jsx)(zt,{}):u.status===`pending`?(0,$.jsx)(Nt,{hint:e(`run.pending.hint`)}):u.status===`external`?(0,$.jsx)(Nt,{hint:e(`run.external.hint`)}):(0,$.jsx)(At,{run:u})}),_&&(0,$.jsx)(E,{styles:{body:{padding:0},header:{padding:`12px 20px`}},extra:te||C||T?(0,$.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[te&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(k.Text,{style:{fontSize:12,whiteSpace:`nowrap`},type:`secondary`,children:[ee,`/`,b,` `,e(`run.detail.progressCases`)]}),(0,$.jsx)(re,{percent:x,showInfo:!1,size:`small`,status:f?`active`:void 0,style:{margin:0,width:120}}),(0,$.jsxs)(k.Text,{style:{fontSize:12},type:`secondary`,children:[x,`%`]})]}),T&&(0,$.jsx)(oe,{icon:(0,$.jsx)(Ne,{size:14}),size:`small`,onClick:()=>at({onConfirm:e=>l(n,e),runId:n}),children:e(`run.actions.batchResume`)}),C&&(0,$.jsx)(oe,{icon:(0,$.jsx)(_e,{size:14}),loading:m,size:`small`,onClick:()=>{Re({content:e(`run.actions.retryErrors.confirm`),onOk:async()=>{h(!0);try{await o(n)}finally{h(!1)}},title:e(`run.actions.retryErrors`)})},children:e(`run.actions.retryErrors`)})]}):void 0,title:(0,$.jsx)(k.Text,{strong:!0,style:{fontSize:14},children:e(`run.detail.caseResults`)}),children:(0,$.jsx)(_t,{benchmarkId:t,k:w,results:d.results,runId:n,runStatus:u.status,onResumeCase:(e,t)=>c(n,e,t),onRetryCase:e=>s(n,e)})})]})})}))();export{Kt as default};