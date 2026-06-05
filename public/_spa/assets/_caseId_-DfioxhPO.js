import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{b as i,bt as a,mt as o,vl as s,yl as c}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as l,Ia as u,Ma as d}from"./imperative-CZQgOWZc.js";import{Os as f,_a as p,ha as m,n as h,ws as g}from"./es-na8XYpNF.js";import{J as _,n as v,s as y,zn as b,zt as x}from"./es-B2d2bv-I.js";import{h as ee,m as te,n as S}from"../vendor/vendor-react-Du2OrJ5H.js";import{Hu as C,Jl as w,Sg as T,dt as E,ff as D,fm as O,op as k,um as A}from"../vendor/vendor-icons-BrLWQuP2.js";import{f as ne,i as re,p as ie,r as ae,yt as oe}from"./ErrorContent-DJwle6p3.js";import{n as j,t as M}from"./useInitAgentConfig-Ck0qo56e.js";import{r as N,s as P,t as F}from"./eval-BR2cShTb.js";var I,L,R,z,se=t((()=>{i(),h(),v(),d(),E(),I=e(c()),n(),L=e(s()),R=u(({css:e,cssVar:t})=>({backLink:e`
    cursor: pointer;
    color: ${t.colorTextTertiary};

    &:hover {
      color: ${t.colorText};
    }
  `,header:e`
    padding-inline: 16px;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,metricCard:e`
    gap: 8px;

    padding-block: 6px;
    padding-inline: 8px 16px;
    border-radius: ${t.borderRadiusSM};

    font-size: 12px;

    background: ${t.colorFillQuaternary};
  `,metricIcon:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: ${t.borderRadiusSM};

    color: ${t.colorTextTertiary};

    background: ${t.colorFillTertiary};
  `,metricLabel:e`
    font-size: 11px;
    line-height: 1;
    color: ${t.colorTextTertiary};
  `,metricValue:e`
    font-family: monospace;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    color: ${t.colorText};
  `})),z=(0,I.memo)(({passed:e,caseNumber:t,runName:n,evalResult:i,onBack:s,onPrev:c,onNext:u})=>{let{t:d}=r(`eval`),f=[{icon:k,label:d(`caseDetail.duration`),value:i?.duration==null?null:`${(i.duration/1e3).toFixed(1)}s`},{icon:C,label:d(`caseDetail.steps`),value:i?.steps==null?null:String(i.steps)},{icon:D,label:d(`caseDetail.cost`),value:i?.cost==null?null:`$${o(i.cost)}`},{icon:w,label:d(`caseDetail.tokens`),value:i?.tokens==null?null:a(i.tokens)}].filter(e=>e.value!==null);return(0,L.jsxs)(l,{horizontal:!0,align:`center`,className:R.header,gap:16,justify:`space-between`,padding:12,children:[(0,L.jsxs)(l,{gap:2,children:[(0,L.jsxs)(l,{horizontal:!0,align:`center`,className:R.backLink,gap:4,onClick:s,children:[(0,L.jsx)(T,{size:12}),(0,L.jsx)(`span`,{style:{fontSize:12},children:n})]}),(0,L.jsxs)(l,{horizontal:!0,align:`center`,gap:8,children:[(0,L.jsx)(g,{disabled:!c,icon:O,size:`small`,onClick:c}),(0,L.jsxs)(y.Title,{level:5,style:{fontSize:20,margin:0},children:[`#`,t]}),(0,L.jsx)(g,{disabled:!u,icon:A,size:`small`,onClick:u}),e!=null&&(0,L.jsx)(m,{color:e?`success`:`error`,children:d(e?`table.filter.passed`:`table.filter.failed`)})]})]}),(0,L.jsx)(l,{horizontal:!0,align:`center`,gap:8,children:f.map(e=>(0,L.jsxs)(l,{horizontal:!0,align:`center`,className:R.metricCard,children:[(0,L.jsx)(`div`,{className:R.metricIcon,children:(0,L.jsx)(e.icon,{size:14})}),(0,L.jsxs)(l,{gap:0,children:[(0,L.jsx)(`span`,{className:R.metricLabel,children:e.label}),(0,L.jsx)(`span`,{className:R.metricValue,children:e.value})]})]},e.label))})]})})})),B,V,H,ce=t((()=>{h(),B=e(c()),ae(),ie(),M(),V=e(s()),H=(0,B.memo)(({agentId:e,topicId:t,threadId:n})=>{j(e);let r=(0,B.useCallback)((e,t)=>(0,V.jsx)(ne,{disableEditing:!0,id:t,index:e}),[]),i=n?`${t}-${n}`:t;return(0,V.jsx)(oe,{context:{agentId:e,threadId:n,topicId:t},children:(0,V.jsx)(l,{flex:1,style:{overflowX:`hidden`,overflowY:`auto`,position:`relative`},onContextMenu:e=>e.preventDefault(),children:(0,V.jsx)(re,{disableActionsBar:!0,itemContent:r})})},i)})})),U,W,G,K,q,J,Y,le=t((()=>{i(),h(),v(),d(),U=e(c()),n(),W=e(s()),G=u(({css:e,cssVar:t})=>({container:e`
    border-inline-start: 1px solid ${t.colorBorderSecondary};
    background: ${t.colorBgContainer};
  `,infoItem:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 4px;
    padding-inline: 0;
  `,infoLabel:e`
    font-size: 13px;
    color: ${t.colorTextSecondary};
  `,infoValue:e`
    font-family: monospace;
    font-size: 13px;
    color: ${t.colorText};
  `,rubricItem:e`
    padding-block: 8px;
    padding-inline: 0;
  `,rubricName:e`
    font-size: 13px;
    font-weight: 500;
  `,rubricReason:e`
    font-size: 12px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
  `,rubricScore:e`
    font-family: monospace;
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,sectionTitle:e`
    margin: 0;

    font-size: 12px;
    font-weight: 600;
    color: ${t.colorTextSecondary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `})),K=new Set([`equals`,`contains`,`regex`,`starts-with`,`ends-with`,`any-of`,`numeric`,`extract-match`,`json-schema`,`javascript`,`python`]),q=e=>e.replace(/^eval-mode-/,``),J=e=>K.has(q(e)),Y=(0,U.memo)(({testCase:e,evalResult:t,passed:n,score:i})=>{let{t:s}=r(`eval`),c=t?.rubricScores,u=c&&c.length>0,d=u&&c.every(e=>J(e.rubricId)),p=u?c.filter(e=>!J(e.rubricId)):[];return(0,W.jsxs)(l,{className:G.container,gap:16,padding:16,style:{height:`100%`,overflowY:`auto`,width:320},children:[(0,W.jsxs)(l,{gap:8,children:[(0,W.jsx)(y.Text,{className:G.sectionTitle,children:s(`caseDetail.section.testCase`)}),e?.content?.input&&(0,W.jsxs)(l,{gap:4,children:[(0,W.jsx)(f,{style:{fontSize:12},type:`secondary`,children:s(`caseDetail.input`)}),(0,W.jsx)(f,{style:{fontSize:14},children:e.content.input})]}),e?.content?.expected&&(0,W.jsxs)(l,{gap:4,children:[(0,W.jsx)(f,{style:{fontSize:12},type:`secondary`,children:s(`caseDetail.expected`)}),(0,W.jsx)(f,{style:{fontSize:14},children:e.content.expected})]}),e?.metadata?.difficulty&&(0,W.jsxs)(l,{gap:4,children:[(0,W.jsx)(y.Text,{strong:!0,style:{fontSize:13},children:s(`caseDetail.difficulty`)}),(0,W.jsx)(m,{children:s(`difficulty.${e.metadata.difficulty}`)})]}),(0,W.jsx)(x,{style:{margin:0}})]}),(u||i!==void 0)&&(0,W.jsxs)(l,{gap:8,children:[(0,W.jsx)(y.Text,{className:G.sectionTitle,children:s(`caseDetail.section.scoring`)}),d&&u&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoValue,children:s(`evalMode.${q(c[0].rubricId)}`)}),(0,W.jsx)(m,{color:n?`success`:`error`,children:s(n?`table.filter.passed`:`table.filter.failed`)})]}),!d&&(0,W.jsxs)(W.Fragment,{children:[i!=null&&(0,W.jsxs)(l,{gap:4,children:[(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoLabel,children:s(`caseDetail.score`)}),(0,W.jsx)(`span`,{className:G.infoValue,children:i.toFixed(2)})]}),(0,W.jsx)(_,{percent:Math.round(i*100),size:`small`,status:n?`success`:`exception`,strokeLinecap:`round`})]}),p.length>0&&(0,W.jsx)(b,{ghost:!0,size:`small`,items:p.map(e=>({children:e.reason?(0,W.jsx)(y.Text,{className:G.rubricReason,children:e.reason}):null,key:e.rubricId,label:(0,W.jsxs)(l,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,W.jsx)(`span`,{className:G.rubricName,children:s(`evalMode.${q(e.rubricId)}`)}),(0,W.jsxs)(`span`,{className:G.rubricScore,children:[(e.score*100).toFixed(0),`%`]})]})}))})]}),(0,W.jsx)(x,{style:{margin:0}})]}),(0,W.jsxs)(l,{gap:8,children:[(0,W.jsx)(y.Text,{className:G.sectionTitle,children:s(`caseDetail.section.runtime`)}),t?.duration!==void 0&&t.duration!==null&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoLabel,children:s(`caseDetail.duration`)}),(0,W.jsxs)(`span`,{className:G.infoValue,children:[(t.duration/1e3).toFixed(1),`s`]})]}),t?.steps!==void 0&&t.steps!==null&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoLabel,children:s(`caseDetail.steps`)}),(0,W.jsx)(`span`,{className:G.infoValue,children:t.steps})]}),t?.cost!==void 0&&t.cost!==null&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoLabel,children:s(`caseDetail.cost`)}),(0,W.jsxs)(`span`,{className:G.infoValue,children:[`$`,o(t.cost)]})]}),t?.tokens!==void 0&&t.tokens!==null&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoLabel,children:s(`caseDetail.tokens`)}),(0,W.jsx)(`span`,{className:G.infoValue,children:a(t.tokens)})]}),t?.completionReason&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoLabel,children:s(`caseDetail.completionReason`)}),(0,W.jsx)(m,{children:t.completionReason})]}),t?.error&&(0,W.jsxs)(l,{gap:4,children:[(0,W.jsx)(y.Text,{strong:!0,style:{fontSize:13},children:s(`caseDetail.failureReason`)}),(0,W.jsx)(y.Text,{type:`danger`,children:t.error})]})]})]})})})),X,Z,Q,$;t((()=>{h(),X=e(c()),n(),S(),F(),se(),ce(),le(),Z=e(s()),Q=3e3,$=(0,X.memo)(()=>{let{benchmarkId:e,runId:t,caseId:n}=ee(),{t:i}=r(`eval`),a=te(),o=N(e=>e.useFetchRunDetail),s=N(e=>e.useFetchRunResults),c={refreshInterval:N(P.isRunActive(t))?Q:0};o(t,c),s(t,c);let u=N(P.getRunDetailById(t)),d=N(P.getRunResultsById(t)),[f,m]=(0,X.useState)(null);(0,X.useEffect)(()=>{d?.results&&m(d.results.find(e=>e.testCaseId===n))},[d,n]);let{prevCaseId:h,nextCaseId:g}=(0,X.useMemo)(()=>{if(!d?.results||!n)return{};let e=d.results,t=e.findIndex(e=>e.testCaseId===n);return t<0?{}:{nextCaseId:t<e.length-1?e[t+1].testCaseId:void 0,prevCaseId:t>0?e[t-1].testCaseId:void 0}},[d,n]),_=f?.evalResult?.threads,v=_&&_.length>1,[y,b]=(0,X.useState)(null);(0,X.useEffect)(()=>{b(v?_[0].threadId:null)},[f?.testCaseId]);let x=(0,X.useMemo)(()=>y?_?.find(e=>e.threadId===y):void 0,[y,_]);if(!f)return null;let S=f.topicId,C=f.topic?.agentId,w=`/eval/bench/${e}/runs/${t}/cases`,T=x||f.evalResult,E=x?x.passed:f.passed,D=x?x.score:f.score;return(0,Z.jsxs)(l,{height:`100%`,style:{overflow:`hidden`},children:[(0,Z.jsx)(z,{caseNumber:(f.testCase?.sortOrder??0)+1,evalResult:f.evalResult,passed:f.passed,runName:u?.name||t.slice(0,8),onBack:()=>a(`/eval/bench/${e}/runs/${t}`),onNext:g?()=>a(`${w}/${g}`):void 0,onPrev:h?()=>a(`${w}/${h}`):void 0}),v&&(0,Z.jsx)(p,{compact:!0,activeKey:y,items:_.map((e,t)=>({key:e.threadId,label:i(`caseDetail.threads.attempt`,{number:t+1})})),onChange:e=>b(e)}),(0,Z.jsxs)(l,{horizontal:!0,flex:1,style:{overflow:`hidden`},children:[S&&C?(0,Z.jsx)(H,{agentId:C,threadId:y??void 0,topicId:S}):(0,Z.jsx)(l,{flex:1}),(0,Z.jsx)(Y,{evalResult:T,passed:E,score:D,testCase:f.testCase})]})]})})}))();export{$ as default};