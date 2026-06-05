import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r,xt as i,yt as a}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{vl as o,yl as s}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as c,Ia as l,Ma as u,da as d}from"./imperative-Xfjd337A.js";import{Da as f,Na as p,Sr as m,cs as h,ha as g,j as _,n as v}from"./es-2ZVhpwv7.js";import{_t as y,kn as ee,n as te}from"./es-DMB7XTXN.js";import{a as b,m as ne,n as x}from"../vendor/vendor-react-D1dBs3e7.js";import{Ei as re,Ht as ie,Iu as ae,Jg as oe,Jp as se,Om as ce,Pt as le,Qh as ue,Qs as de,Sp as fe,Xn as pe,Xt as me,ba as S,bf as he,dt as C,fn as ge,gn as _e,gt as ve,mn as w,ud as T,vg as E,wa as D}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{d as O,f as ye,n as k}from"./base-ui-CG2gzEWh.js";import{n as be,t as xe}from"./NeuralNetworkLoading-CSo5Bq4f.js";import{r as A,t as j}from"./eval-CYfgeMz2.js";import{i as Se,n as Ce,r as we,t as Te}from"./StatusBadge-CR45qUcQ.js";var M,N,P,F,Ee=t((()=>{v(),u(),C(),M=e(s()),x(),Ce(),N=e(o()),P=l(({css:e,cssVar:t})=>({meta:e`
    font-size: 11px;
    color: ${t.colorTextTertiary};
  `,name:e`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,passRate:e`
    font-family: monospace;
    font-size: 14px;
    font-weight: 700;
    color: ${t.colorText};
  `,row:e`
    cursor: pointer;

    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 8px;

    transition: all 200ms ${t.motionEaseOut};

    &:hover {
      border-color: ${t.colorPrimary};
      background: ${t.colorFillQuaternary};
    }
  `,separator:e`
    color: ${t.colorBorderSecondary};
  `,stat:e`
    display: inline-flex;
    gap: 2px;
    align-items: center;
    font-size: 12px;
  `})),F=(0,M.memo)(({id:e,name:t,status:n,benchmarkId:r,model:i,agentName:a,createdAt:o,passCount:s=0,failCount:l=0,errorCount:u=0,passRate:f,cost:p,completedCases:m=0,totalCases:h=0})=>{let g=e=>e?new Date(e).toLocaleDateString(`en-US`,{day:`numeric`,month:`short`}):``,_=h>0?Math.round(m/h*100):0,v=(n===`completed`||n===`running`)&&s+l+u>0;return(0,N.jsx)(b,{style:{color:`inherit`,textDecoration:`none`},to:`/eval/bench/${r}/runs/${e}`,children:(0,N.jsxs)(c,{horizontal:!0,align:`center`,className:P.row,gap:12,children:[(0,N.jsxs)(c,{flex:1,gap:2,style:{minWidth:0},children:[(0,N.jsxs)(c,{horizontal:!0,align:`center`,gap:8,children:[(0,N.jsx)(`span`,{className:P.name,children:t||e.slice(0,8)}),(0,N.jsx)(Te,{status:n})]}),(0,N.jsxs)(c,{horizontal:!0,align:`center`,className:P.meta,gap:4,children:[o&&(0,N.jsx)(`span`,{children:g(o)}),o&&a&&(0,N.jsx)(`span`,{className:P.separator,children:`/`}),a&&(0,N.jsx)(`span`,{children:a}),(o||a)&&i&&(0,N.jsx)(`span`,{className:P.separator,children:`/`}),i&&(0,N.jsx)(`span`,{style:{fontFamily:`monospace`},children:i}),p!=null&&p>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{className:P.separator,children:`/`}),(0,N.jsxs)(`span`,{children:[`$`,p.toFixed(2)]})]})]})]}),n===`running`?(0,N.jsxs)(c,{align:`flex-end`,gap:2,style:{width:100},children:[(0,N.jsxs)(c,{horizontal:!0,align:`center`,justify:`space-between`,style:{fontSize:10,color:`var(--ant-color-text-tertiary)`,width:`100%`},children:[(0,N.jsxs)(`span`,{children:[m,`/`,h]}),(0,N.jsxs)(`span`,{children:[_,`%`]})]}),(0,N.jsx)(`div`,{style:{background:`var(--ant-color-fill-tertiary)`,borderRadius:2,height:4,overflow:`hidden`,width:`100%`},children:(0,N.jsx)(`div`,{style:{background:`var(--ant-color-primary)`,borderRadius:2,height:`100%`,transition:`width 300ms ease`,width:`${_}%`}})})]}):v?(0,N.jsxs)(c,{horizontal:!0,align:`center`,gap:10,children:[(0,N.jsxs)(`span`,{className:P.stat,style:{color:`var(--ant-color-success)`},children:[(0,N.jsx)(d,{icon:se,size:12}),s]}),(0,N.jsxs)(`span`,{className:P.stat,style:{color:`var(--ant-color-error)`},children:[(0,N.jsx)(d,{icon:fe,size:12}),l]}),u>0&&(0,N.jsxs)(`span`,{className:P.stat,style:{color:`var(--ant-color-warning)`},children:[(0,N.jsx)(d,{icon:w,size:12}),u]}),f!=null&&(0,N.jsxs)(`span`,{className:P.passRate,children:[(f*100).toFixed(0),`%`]})]}):n===`failed`?(0,N.jsxs)(`span`,{className:P.meta,children:[m,`/`,h,` before failure`]}):(0,N.jsx)(`span`,{className:P.meta,children:`Queued`}),(0,N.jsx)(d,{icon:E,size:14,style:{color:`var(--ant-color-text-tertiary)`,flexShrink:0}})]})})})})),I,L,R,z,B,V,De=t((()=>{v(),u(),C(),I=e(s()),n(),x(),Ee(),L=e(o()),R=[de,le,re,pe,ue,ge,oe,ce,_e,ae,ve],z=e=>R[e.split(``).reduce((e,t)=>e+t.charCodeAt(0),0)%R.length],B=l(({css:e,cssVar:t})=>({card:e`
    height: 100%;
    padding: 20px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 12px;
  `,description:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    font-size: 12px;
    line-height: 1.6;
    color: ${t.colorTextTertiary};
  `,detailLink:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: 6px;

    color: ${t.colorTextTertiary};

    transition: all 200ms ${t.motionEaseOut};

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillTertiary};
    }
  `,emptyBox:e`
    padding-block: 24px;
    padding-inline: 16px;
    border: 1px dashed ${t.colorBorderSecondary};
    border-radius: 8px;

    text-align: center;

    background: ${t.colorFillQuaternary};
  `,iconBox:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: 8px;
  `,meta:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,name:e`
    font-size: 14px;
    font-weight: 500;
    color: ${t.colorText};
    text-decoration: none;

    transition: color 200ms ${t.motionEaseOut};

    &:hover {
      color: ${t.colorPrimary};
    }
  `,recentLabel:e`
    font-size: 12px;
    font-weight: 500;
    color: ${t.colorTextTertiary};
  `,viewAll:e`
    font-size: 11px;
    color: ${t.colorPrimary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `})),V=(0,I.memo)(({id:e,name:t,description:n,testCaseCount:i,recentRuns:a,runCount:o=0,bestScore:s,source:l,tags:u,datasetCount:f=0})=>{let{t:p}=r(`eval`),m=o||a?.length||0,_=a?.slice(0,3)||[],v=f>0,y=(0,I.useMemo)(()=>z(e),[e]);return(0,L.jsxs)(c,{className:B.card,gap:12,justify:`space-between`,children:[(0,L.jsxs)(c,{gap:16,children:[(0,L.jsxs)(c,{horizontal:!0,justify:`space-between`,children:[(0,L.jsxs)(c,{horizontal:!0,align:`start`,gap:12,children:[(0,L.jsx)(`div`,{className:B.iconBox,style:{background:l===`user`?`var(--ant-color-success-bg)`:`var(--ant-color-primary-bg)`},children:(0,L.jsx)(d,{icon:l===`user`?ie:y,size:24,style:{color:l===`user`?`var(--ant-color-success)`:`var(--ant-color-primary)`}})}),(0,L.jsxs)(c,{gap:4,children:[(0,L.jsx)(b,{className:B.name,to:`/eval/bench/${e}`,children:t}),(0,L.jsxs)(c,{horizontal:!0,align:`center`,className:B.meta,gap:4,children:[(0,L.jsx)(`span`,{children:p(`benchmark.card.datasetCount`,{count:f})}),(0,L.jsx)(`span`,{children:`·`}),(0,L.jsx)(`span`,{children:p(`benchmark.card.caseCount`,{count:i||0})}),(0,L.jsx)(`span`,{children:`·`}),(0,L.jsx)(`span`,{children:p(`benchmark.card.runCount`,{count:m})}),s!==void 0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{children:`·`}),(0,L.jsxs)(`span`,{children:[p(`benchmark.card.bestScore`),` `,(0,L.jsx)(`span`,{style:{color:`var(--ant-color-text)`,fontFamily:`monospace`,fontWeight:600},children:s.toFixed(1)})]})]})]})]})]}),(0,L.jsx)(b,{className:B.detailLink,to:`/eval/bench/${e}`,children:(0,L.jsx)(d,{icon:E,size:16})})]}),n&&(0,L.jsx)(`p`,{className:B.description,children:n}),u&&u.length>0&&(0,L.jsxs)(c,{horizontal:!0,gap:4,style:{flexWrap:`wrap`},children:[u.slice(0,4).map(e=>(0,L.jsx)(g,{style:{fontSize:10},children:e},e)),u.length>4&&(0,L.jsxs)(g,{style:{fontSize:10},children:[`+`,u.length-4]})]})]}),v?(0,L.jsxs)(c,{gap:8,children:[(0,L.jsxs)(c,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,L.jsx)(`span`,{className:B.recentLabel,children:p(`benchmark.card.recentRuns`)}),m>3&&(0,L.jsx)(b,{className:B.viewAll,to:`/eval/bench/${e}`,children:p(`benchmark.card.viewAll`,{count:m})})]}),m>0?(0,L.jsx)(c,{gap:6,children:_.length>0?_.map(t=>{let n=t.metrics,r=t.config?.agentSnapshot,i=n?.passedCases??0,a=n?.failedCases??0,o=n?.errorCases??0;return(0,L.jsx)(F,{agentName:r?.title,benchmarkId:e,cost:n?.totalCost,createdAt:t.createdAt,errorCount:o,failCount:a,id:t.id,model:r?.model,name:t.name,passCount:i,passRate:n?.passRate,score:n?.averageScore,status:t.status,totalCases:n?.totalCases??0,completedCases:n?.completedCases??i+a+o},t.id)}):(0,L.jsx)(`p`,{style:{color:`var(--ant-color-text-tertiary)`,fontSize:12,textAlign:`center`,padding:`12px 0`},children:p(`benchmark.card.noRecentRuns`)})}):(0,L.jsxs)(`div`,{className:B.emptyBox,children:[(0,L.jsx)(d,{icon:T,size:24,style:{color:`var(--ant-color-text-quaternary)`,marginBottom:8}}),(0,L.jsx)(`p`,{style:{color:`var(--ant-color-text-tertiary)`,fontSize:13,margin:`0 0 4px`},children:p(`benchmark.card.empty`)}),(0,L.jsx)(`p`,{style:{color:`var(--ant-color-text-quaternary)`,fontSize:12,margin:`0 0 12px`},children:p(`benchmark.card.emptyHint`)}),(0,L.jsx)(b,{style:{textDecoration:`none`},to:`/eval/bench/${e}?tab=runs`,children:(0,L.jsx)(h,{icon:D,size:`small`,variant:`filled`,children:p(`benchmark.card.startFirst`)})})]})]}):(0,L.jsxs)(`div`,{className:B.emptyBox,children:[(0,L.jsx)(d,{icon:he,size:24,style:{color:`var(--ant-color-text-quaternary)`,marginBottom:8}}),(0,L.jsx)(`p`,{style:{color:`var(--ant-color-text-tertiary)`,fontSize:13,margin:`0 0 4px`},children:p(`benchmark.card.noDataset`)}),(0,L.jsx)(`p`,{style:{color:`var(--ant-color-text-quaternary)`,fontSize:12,margin:`0 0 12px`},children:p(`benchmark.card.noDatasetHint`)}),(0,L.jsx)(b,{style:{textDecoration:`none`},to:`/eval/bench/${e}`,children:(0,L.jsx)(h,{icon:me,size:`small`,variant:`filled`,children:p(`benchmark.card.importDataset`)})})]})]})})})),H,U,W,G,Oe=t((()=>{v(),k(),te(),H=e(s()),n(),x(),j(),U=e(o()),W=e=>e.trim().toLowerCase().replaceAll(/\s+/g,`-`).replaceAll(/[^\da-z-]/g,``),G=({formId:e,onLoadingChange:t})=>{let{t:n}=r(`eval`),{close:i}=O(),{message:a}=ee.useApp(),o=ne(),[s]=y.useForm(),[c,l]=(0,H.useState)(!1),u=A(e=>e.createBenchmark),d=y.useWatch(`name`,s);return(0,H.useEffect)(()=>{!c&&d&&s.setFieldValue(`identifier`,W(d))},[d,c,s]),(0,U.jsxs)(y,{form:s,layout:`vertical`,name:e,onFinish:async e=>{t?.(!0);try{let t=await u({description:e.description?.trim()||void 0,identifier:e.identifier.trim(),name:e.name.trim(),tags:e.tags?.length>0?e.tags:void 0});a.success(n(`benchmark.create.success`)),i(),t?.id&&o(`/eval/bench/${t.id}`)}catch{a.error(n(`benchmark.create.error`))}finally{t?.(!1)}},children:[(0,U.jsx)(y.Item,{label:n(`benchmark.create.name.label`),name:`name`,rules:[{message:n(`benchmark.create.nameRequired`),required:!0}],children:(0,U.jsx)(p,{autoFocus:!0,placeholder:n(`benchmark.create.name.placeholder`)})}),(0,U.jsx)(y.Item,{label:n(`benchmark.create.identifier.label`),name:`identifier`,rules:[{message:n(`benchmark.create.identifierRequired`),required:!0}],children:(0,U.jsx)(p,{placeholder:n(`benchmark.create.identifier.placeholder`),onChange:()=>l(!0)})}),(0,U.jsx)(y.Item,{label:n(`benchmark.create.description.label`),name:`description`,children:(0,U.jsx)(f,{placeholder:n(`benchmark.create.description.placeholder`),rows:3})}),(0,U.jsx)(y.Item,{label:n(`benchmark.create.tags.label`),name:`tags`,style:{marginBottom:0},children:(0,U.jsx)(_,{mode:`tags`,open:!1,placeholder:n(`benchmark.create.tags.placeholder`),style:{width:`100%`},tokenSeparators:[`,`,`，`,` `]})})]})}})),K,q,ke=t((()=>{v(),k(),n(),K=e(o()),q=({formId:e,loading:t})=>{let{t:n}=r(`eval`),{close:i}=O();return(0,K.jsxs)(ye,{children:[(0,K.jsx)(h,{disabled:t,onClick:i,children:n(`common.cancel`)}),(0,K.jsx)(h,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n(`benchmark.create.confirm`)})]})}})),J,Y,Ae=t((()=>{a(),Se(),Oe(),ke(),J=e(o()),Y=()=>we({renderContent:({formId:e,setLoading:t})=>(0,J.jsx)(G,{formId:e,onLoadingChange:t}),renderFooter:({formId:e,loading:t})=>(0,J.jsx)(q,{formId:e,loading:t}),title:i(`benchmark.create.title`,{ns:`eval`}),width:480})})),X,Z,Q,$;t((()=>{v(),u(),C(),X=e(s()),n(),be(),j(),De(),Ae(),Z=e(o()),Q=l(({css:e,cssVar:t})=>({container:e`
    overflow-y: auto;
    padding-block: 24px;
    padding-inline: 32px;
  `,subtitle:e`
    margin: 0;
    font-size: 13px;
    color: ${t.colorTextTertiary};
  `,title:e`
    margin: 0;

    font-size: 22px;
    font-weight: 600;
    line-height: 1.3;
    color: ${t.colorText};
    letter-spacing: -0.02em;
  `})),$=(0,X.memo)(()=>{let{t:e}=r(`eval`),t=A(e=>e.benchmarkList),{isLoading:n}=A(e=>e.useFetchBenchmarks)();return(0,Z.jsxs)(c,{className:Q.container,gap:32,height:`100%`,width:`100%`,children:[(0,Z.jsxs)(c,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,Z.jsxs)(c,{gap:4,children:[(0,Z.jsx)(`h1`,{className:Q.title,children:e(`overview.title`)}),(0,Z.jsx)(`p`,{className:Q.subtitle,children:e(`overview.subtitle`)})]}),t.length>0&&(0,Z.jsx)(h,{icon:S,type:`primary`,onClick:()=>Y(),children:e(`overview.createBenchmark`)})]}),n?(0,Z.jsx)(c,{align:`center`,flex:1,justify:`center`,children:(0,Z.jsx)(xe,{size:64})}):t.length===0?(0,Z.jsx)(c,{align:`center`,flex:1,justify:`center`,children:(0,Z.jsx)(m,{description:e(`benchmark.empty`),icon:T,children:(0,Z.jsx)(h,{icon:S,style:{marginTop:16},type:`primary`,onClick:()=>Y(),children:e(`overview.createBenchmark`)})})}):(0,Z.jsx)(`div`,{style:{display:`grid`,gap:20,gridTemplateColumns:`repeat(auto-fill, minmax(480px, 1fr))`},children:t.map(e=>(0,Z.jsx)(V,{bestScore:e.bestScore,datasetCount:e.datasetCount,description:e.description,id:e.id,name:e.name,recentRuns:e.recentRuns,runCount:e.runCount,source:e.source,tags:e.tags,testCaseCount:e.testCaseCount},e.id))})]})})}))();export{$ as default};