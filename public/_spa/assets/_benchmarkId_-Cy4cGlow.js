import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r,xt as i,yt as a}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{b as o,mt as s,vl as c,yl as l}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as u,Ia as d,Ma as f,Oa as p,da as m,za as h}from"./imperative-Xfjd337A.js";import{Da as g,Na as _,Os as v,Sr as y,cs as b,ha as x,j as S,n as C}from"./es-2ZVhpwv7.js";import{$t as w,Pn as T,_t as E,dn as ee,kn as D,lt as O,n as k,xt as te}from"./es-DMB7XTXN.js";import{a as ne,h as re,m as ie,n as ae}from"../vendor/vendor-react-D1dBs3e7.js";import{Ei as oe,Ht as se,Iu as ce,Jg as le,Om as ue,Pt as de,Qh as fe,Qs as pe,Ra as me,Wc as he,Wp as ge,Xn as _e,ba as ve,bf as ye,bn as be,br as xe,dt as A,fn as Se,gn as Ce,gt as we,if as Te,nf as Ee,op as De,um as Oe,vd as ke,vg as Ae,wa as je}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{d as Me,f as Ne,n as j,r as Pe,s as M}from"./base-ui-CG2gzEWh.js";import{n as Fe,t as Ie}from"./NeuralNetworkLoading-CSo5Bq4f.js";import{a as Le,i as Re,r as N,s as ze,t as P}from"./eval-CYfgeMz2.js";import{i as Be,r as Ve}from"./StatusBadge-CR45qUcQ.js";import{_ as He,a as Ue,c as We,d as Ge,f as Ke,g as qe,h as F,i as Je,l as Ye,m as Xe,n as Ze,o as Qe,p as $e,r as et,s as tt,t as nt,u as rt}from"./RunCard-BFXiddsL.js";import{n as it,r as at,t as ot}from"./utils-DcWsxsSY.js";import{n as st,t as ct}from"./RunEditModal-B3FGO3qg.js";var I,L,lt,ut,dt=t((()=>{C(),j(),k(),I=e(l()),n(),P(),L=e(c()),lt=e=>e.trim().toLowerCase().replaceAll(/\s+/g,`-`).replaceAll(/[^\da-z-]/g,``),ut=({benchmark:e,formId:t,onLoadingChange:n,onSuccess:i})=>{let{t:a}=r(`eval`),{close:o}=Me(),{message:s}=D.useApp(),[c]=E.useForm(),[l,u]=(0,I.useState)(!1),d=N(e=>e.updateBenchmark),f=E.useWatch(`name`,c);return(0,I.useEffect)(()=>{e&&c.setFieldsValue({description:e.description||``,identifier:e.identifier,name:e.name,tags:e.tags||[]})},[e,c]),(0,I.useEffect)(()=>{!l&&f&&c.setFieldValue(`identifier`,lt(f))},[f,l,c]),(0,L.jsxs)(E,{form:c,layout:`vertical`,name:t,onFinish:async t=>{n?.(!0);try{await d({description:t.description?.trim()||void 0,id:e.id,identifier:t.identifier.trim(),name:t.name.trim(),tags:t.tags?.length>0?t.tags:void 0}),s.success(a(`benchmark.edit.success`)),o(),i?.()}catch{s.error(a(`benchmark.edit.error`))}finally{n?.(!1)}},children:[(0,L.jsx)(E.Item,{label:a(`benchmark.create.name.label`),name:`name`,rules:[{message:a(`benchmark.create.nameRequired`),required:!0}],children:(0,L.jsx)(_,{autoFocus:!0,placeholder:a(`benchmark.create.name.placeholder`)})}),(0,L.jsx)(E.Item,{label:a(`benchmark.create.identifier.label`),name:`identifier`,rules:[{message:a(`benchmark.create.identifierRequired`),required:!0}],children:(0,L.jsx)(_,{placeholder:a(`benchmark.create.identifier.placeholder`),onChange:()=>u(!0)})}),(0,L.jsx)(E.Item,{label:a(`benchmark.create.description.label`),name:`description`,children:(0,L.jsx)(g,{placeholder:a(`benchmark.create.description.placeholder`),rows:3})}),(0,L.jsx)(E.Item,{label:a(`benchmark.create.tags.label`),name:`tags`,style:{marginBottom:0},children:(0,L.jsx)(S,{mode:`tags`,open:!1,placeholder:a(`benchmark.create.tags.placeholder`),style:{width:`100%`},tokenSeparators:[`,`,`，`,` `]})})]})}})),R,ft,pt=t((()=>{C(),j(),n(),R=e(c()),ft=({formId:e,loading:t})=>{let{t:n}=r(`eval`),{close:i}=Me();return(0,R.jsxs)(Ne,{children:[(0,R.jsx)(b,{disabled:t,onClick:i,children:n(`common.cancel`)}),(0,R.jsx)(b,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n(`benchmark.edit.confirm`)})]})}})),mt,ht,gt=t((()=>{a(),Be(),dt(),pt(),mt=e(c()),ht=e=>Ve({renderContent:({formId:t,setLoading:n})=>(0,mt.jsx)(ut,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,mt.jsx)(ft,{formId:e,loading:t}),title:i(`benchmark.edit.title`,{ns:`eval`}),width:480})})),z,B,_t,V,vt,yt=t((()=>{o(),C(),j(),k(),f(),A(),z=e(l()),n(),ae(),P(),gt(),at(),B=e(c()),_t=[h.colorPrimary,h.colorSuccess,h.colorTextQuaternary],V=d(({css:e,cssVar:t})=>({bestPerformance:e`
    margin: 0;
    margin-block-start: 4px;
    font-size: 13px;
    color: ${t.colorTextSecondary};
  `,description:e`
    margin: 0;
    margin-block-start: 2px;
    font-size: 14px;
    color: ${t.colorTextTertiary};
  `,iconBox:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: 10px;
  `,statCard:e`
    flex: 1;

    min-width: 0;
    padding: 16px;
    border: 1px solid ${t.colorBorder};
    border-radius: 8px;
  `,statIcon:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: 8px;
  `,title:e`
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: ${t.colorText};
  `})),vt=(0,z.memo)(({benchmark:e,completedRuns:t,datasets:n,onBenchmarkUpdate:i,runCount:a,systemIcon:o=oe,totalCases:c})=>{let{t:l}=r(`eval`),d=ie(),f=N(e=>e.deleteBenchmark),p=N(e=>e.refreshBenchmarkDetail),g=async()=>{await p(e.id),i?.(e)},_=()=>ht({benchmark:e,onSuccess:g}),v=[{danger:!0,icon:(0,B.jsx)(be,{size:16}),key:`delete`,label:l(`common.delete`),onClick:()=>{M({content:l(`benchmark.actions.delete.confirm`),okButtonProps:{danger:!0},okText:l(`benchmark.actions.delete`),onOk:async()=>{await f(e.id),d(`/eval`)},title:l(`benchmark.actions.delete`)})}}],y=n.length>0,x=t.length>0,S=(0,z.useMemo)(()=>{if(!x)return[];let e=new Map;for(let n of t){let t=n.targetAgent?.title||n.targetAgent?.id||`Unknown`,r=n.targetAgentId||n.targetAgent?.id||t;e.has(r)||e.set(r,{name:t,passRates:[]}),e.get(r).passRates.push(n.passRate??n.metrics?.passRate??0)}return[...e.entries()].map(([,e])=>({avgPassRate:e.passRates.reduce((e,t)=>e+t,0)/e.passRates.length,name:e.name})).sort((e,t)=>t.avgPassRate-e.avgPassRate).slice(0,3)},[t,x]),C=S.length>0?S[0]:null,w=(0,z.useMemo)(()=>{if(!x)return null;let e=t.map(e=>e.metrics?.duration??e.totalDuration).filter(e=>e!=null&&e>0);return e.length===0?null:e.reduce((e,t)=>e+t,0)/e.length},[t,x]),T=(0,z.useMemo)(()=>{if(!x)return null;let e=t.map(e=>e.metrics?.duration??e.totalDuration).filter(e=>e!=null&&e>0).sort((e,t)=>e-t);return e.length===0?null:e[Math.ceil(e.length*.99)-1]},[t,x]),E=(0,z.useMemo)(()=>{if(!x)return null;let e=t.map(e=>e.metrics?.totalCost??e.totalCost).filter(e=>e!=null&&e>0);return e.length===0?null:e.reduce((e,t)=>e+t,0)/e.length},[t,x]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(u,{gap:16,children:(0,B.jsxs)(u,{horizontal:!0,align:`start`,justify:`space-between`,children:[(0,B.jsxs)(u,{horizontal:!0,align:`start`,gap:12,children:[(0,B.jsx)(`div`,{className:V.iconBox,style:{background:e.source===`user`?h.colorSuccessBg:h.colorPrimaryBg},children:(0,B.jsx)(m,{icon:e.source===`user`?se:o,size:20,style:{color:e.source===`user`?h.colorSuccess:h.colorPrimary}})}),(0,B.jsxs)(u,{gap:4,children:[(0,B.jsx)(`h1`,{className:V.title,children:e.name}),e.description&&(0,B.jsx)(`p`,{className:V.description,children:e.description})]})]}),(0,B.jsxs)(u,{horizontal:!0,gap:8,children:[(0,B.jsx)(b,{icon:xe,size:`small`,variant:`outlined`,onClick:_,children:l(`common.edit`)}),(0,B.jsx)(te,{menu:{items:v},placement:`bottomRight`,trigger:[`click`],children:(0,B.jsx)(b,{icon:Te,size:`small`,variant:`outlined`})})]})]})}),C&&(0,B.jsx)(`p`,{className:V.bestPerformance,children:l(`benchmark.detail.stats.bestPerformance`,{agent:C.name,passRate:(C.avgPassRate*100).toFixed(1)})}),(0,B.jsxs)(u,{horizontal:!0,gap:12,children:[(0,B.jsx)(`div`,{className:V.statCard,children:(0,B.jsxs)(u,{gap:12,children:[(0,B.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,B.jsx)(`div`,{className:V.statIcon,style:{background:h.colorWarningBg},children:(0,B.jsx)(Se,{size:16,style:{color:h.colorWarning}})}),(0,B.jsx)(`span`,{style:{color:h.colorTextSecondary,fontSize:13,fontWeight:600,textTransform:`uppercase`},children:l(`benchmark.detail.stats.topAgents`)})]}),!y&&!x&&(0,B.jsx)(`span`,{style:{color:h.colorTextQuaternary,fontSize:20,fontWeight:`bold`},children:`--`}),y&&!x&&(0,B.jsxs)(u,{gap:2,children:[(0,B.jsx)(`span`,{style:{color:h.colorTextQuaternary,fontSize:20,fontWeight:`bold`},children:l(`benchmark.detail.stats.waiting`)}),(0,B.jsx)(`span`,{style:{color:h.colorTextQuaternary,fontSize:12},children:l(`benchmark.detail.stats.noEvalRecord`)})]}),x&&S.length>0&&(0,B.jsx)(u,{gap:6,children:S.map((e,t)=>(0,B.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,B.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,B.jsx)(`span`,{style:{color:_t[t]||_t[2],fontSize:12,fontWeight:600,minWidth:14,textAlign:`center`},children:t+1}),(0,B.jsx)(`span`,{style:{color:h.colorText,fontSize:13,fontWeight:500},children:e.name})]}),(0,B.jsxs)(`span`,{style:{color:h.colorTextSecondary,fontSize:13},children:[(e.avgPassRate*100).toFixed(1),`%`]})]},e.name))})]})}),(0,B.jsx)(`div`,{className:V.statCard,children:(0,B.jsxs)(u,{gap:12,children:[(0,B.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,B.jsx)(`div`,{className:V.statIcon,style:{background:h.colorPrimaryBg},children:(0,B.jsx)(he,{size:16,style:{color:h.colorPrimary}})}),(0,B.jsx)(`span`,{style:{color:h.colorTextSecondary,fontSize:13,fontWeight:600},children:l(`benchmark.detail.stats.dataScale`)}),c===0&&(0,B.jsx)(ee,{count:l(`benchmark.detail.stats.needSetup`),style:{backgroundColor:h.colorWarningBg,color:h.colorWarning,fontSize:11}})]}),(0,B.jsxs)(u,{gap:2,children:[(0,B.jsxs)(u,{horizontal:!0,align:`baseline`,gap:4,children:[(0,B.jsx)(`span`,{style:{color:h.colorText,fontSize:24,fontWeight:`bold`},children:c}),c>0&&(0,B.jsx)(`span`,{style:{color:h.colorTextTertiary,fontSize:13},children:`Cases`})]}),c===0?(0,B.jsx)(`span`,{style:{color:h.colorPrimary,fontSize:12},children:l(`benchmark.detail.stats.addFirstDataset`)}):(0,B.jsxs)(`span`,{style:{color:h.colorTextQuaternary,fontSize:12},children:[n.length,` Datasets`]})]})]})}),(0,B.jsx)(`div`,{className:V.statCard,children:(0,B.jsxs)(u,{gap:12,children:[(0,B.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,B.jsx)(`div`,{className:V.statIcon,style:{background:h.colorInfoBg},children:(0,B.jsx)(De,{size:16,style:{color:h.colorInfo}})}),(0,B.jsx)(`span`,{style:{color:h.colorTextSecondary,fontSize:13,fontWeight:600},children:l(`benchmark.detail.stats.avgDuration`)})]}),w==null?(0,B.jsx)(`span`,{style:{color:h.colorTextQuaternary,fontSize:20,fontWeight:`bold`},children:`--`}):(0,B.jsxs)(u,{gap:2,children:[(0,B.jsxs)(u,{horizontal:!0,align:`baseline`,gap:4,children:[(0,B.jsx)(`span`,{style:{color:h.colorText,fontSize:24,fontWeight:`bold`},children:it(w)}),(0,B.jsx)(`span`,{style:{color:h.colorTextTertiary,fontSize:13},children:`min`})]}),T!=null&&(0,B.jsxs)(`span`,{style:{color:h.colorTextQuaternary,fontSize:12},children:[`P99: `,ot(T)]})]})]})}),(0,B.jsx)(`div`,{className:V.statCard,children:(0,B.jsxs)(u,{gap:12,children:[(0,B.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,B.jsx)(`div`,{className:V.statIcon,style:{background:h.colorSuccessBg},children:(0,B.jsx)(ge,{size:16,style:{color:h.colorSuccess}})}),(0,B.jsx)(`span`,{style:{color:h.colorTextSecondary,fontSize:13,fontWeight:600},children:l(`benchmark.detail.stats.avgCost`)})]}),E==null?(0,B.jsx)(`span`,{style:{color:h.colorTextQuaternary,fontSize:20,fontWeight:`bold`},children:`--`}):(0,B.jsxs)(u,{gap:2,children:[(0,B.jsxs)(u,{horizontal:!0,align:`baseline`,gap:4,children:[(0,B.jsxs)(`span`,{style:{color:h.colorText,fontSize:24,fontWeight:`bold`},children:[`$`,s(E)]}),(0,B.jsx)(`span`,{style:{color:h.colorTextTertiary,fontSize:13},children:l(`benchmark.detail.stats.perRun`)})]}),(0,B.jsx)(`span`,{style:{color:h.colorTextQuaternary,fontSize:12},children:l(`benchmark.detail.stats.basedOnLastNRuns`,{count:t.length})})]})]})})]})]})})})),bt,H,xt,St,Ct,wt,Tt=t((()=>{C(),j(),k(),f(),bt=e(l()),n(),Le(),He(),H=e(c()),xt=e=>e.trim().toLowerCase().replaceAll(/\s+/g,`-`).replaceAll(/[^\da-z-]/g,``),St={custom:`Custom`,memory:`Memory`,reference:`Reference Formats`,research:`Deep Research / QA`,"tool-use":`Tool Use`},Ct=d(({css:e})=>({presetIcon:e`
    border: 1px solid ${h.colorFillTertiary};
    border-radius: ${h.borderRadius};
    background: ${h.colorBgElevated};
  `})),wt=({benchmarkId:e,formId:t,onLoadingChange:n,onSuccess:i})=>{let{t:a}=r(`eval`),{close:o}=Me(),{message:s}=D.useApp(),[c]=E.useForm(),[l,d]=(0,bt.useState)(`custom`),[f,g]=(0,bt.useState)(!1),_=E.useWatch(`name`,c),y=E.useWatch(`evalMode`,c);(0,bt.useEffect)(()=>{!f&&_&&c.setFieldValue(`identifier`,xt(_))},[_,f,c]);let b=async t=>{n?.(!0);try{let n=await Re.createDataset({benchmarkId:e,description:t.description,evalConfig:t.evalConfig?.judgePrompt?t.evalConfig:void 0,evalMode:t.evalMode||void 0,identifier:t.identifier.trim(),metadata:{preset:l},name:t.name});o(),i?.({id:n.id,name:n.name,preset:l})}catch(e){s.error(e?.message||a(`dataset.create.error`))}finally{n?.(!1)}},x=qe(),S=F[l],C=Object.entries(x).filter(([e,t])=>t.length>0).map(([e,t])=>({label:St[e]||e,options:t.map(e=>({label:e.name,value:e.id}))}));return(0,H.jsxs)(E,{form:c,layout:`vertical`,name:t,onFinish:b,children:[(0,H.jsx)(E.Item,{label:a(`dataset.create.name.label`),name:`name`,rules:[{message:a(`dataset.create.nameRequired`),required:!0}],children:(0,H.jsx)(O,{placeholder:a(`dataset.create.name.placeholder`)})}),(0,H.jsx)(E.Item,{label:a(`dataset.create.identifier.label`),name:`identifier`,rules:[{message:a(`dataset.create.identifierRequired`),required:!0}],children:(0,H.jsx)(O,{placeholder:a(`dataset.create.identifier.placeholder`),onChange:()=>g(!0)})}),(0,H.jsx)(E.Item,{label:a(`dataset.create.description.label`),name:`description`,children:(0,H.jsx)(O.TextArea,{placeholder:a(`dataset.create.description.placeholder`),rows:3})}),(0,H.jsx)(E.Item,{extra:a(`dataset.evalMode.hint`),label:a(`evalMode.label`),name:`evalMode`,children:(0,H.jsx)(Pe,{allowClear:!0,placeholder:a(`evalMode.placeholder`),optionRender:e=>(0,H.jsxs)(u,{gap:2,style:{padding:`4px 0`},children:[(0,H.jsx)(`div`,{children:e.label}),(0,H.jsx)(v,{style:{fontSize:12},type:`secondary`,children:a(`evalMode.${e.value}.desc`)})]}),options:[{label:a(`evalMode.equals`),value:`equals`},{label:a(`evalMode.contains`),value:`contains`},{label:a(`evalMode.llm-rubric`),value:`llm-rubric`},{label:a(`evalMode.external`),value:`external`}]})}),y===`llm-rubric`&&(0,H.jsx)(E.Item,{label:a(`evalMode.prompt.label`),name:[`evalConfig`,`judgePrompt`],children:(0,H.jsx)(O.TextArea,{placeholder:a(`evalMode.prompt.placeholder`),rows:3})}),(0,H.jsx)(E.Item,{label:a(`dataset.create.preset.label`),extra:S?(0,H.jsxs)(u,{gap:4,style:{marginTop:8},children:[(0,H.jsx)(`p`,{style:{color:h.colorTextSecondary,fontSize:12,margin:0},children:S.formatDescription}),(0,H.jsxs)(`div`,{style:{color:h.colorTextTertiary,fontSize:12},children:[(0,H.jsx)(`strong`,{children:`Required:`}),` `,S.requiredFields.join(`, `),S.optionalFields.length>0&&(0,H.jsxs)(H.Fragment,{children:[` · `,(0,H.jsx)(`strong`,{children:`Optional:`}),` `,S.optionalFields.join(`, `)]})]})]}):null,children:(0,H.jsx)(Pe,{options:C,placeholder:`Select a preset`,value:l,optionRender:e=>{let t=F[e.value];return t?(0,H.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:12,style:{overflow:`hidden`,width:`100%`},children:[(0,H.jsx)(p,{className:Ct.presetIcon,flex:`none`,height:40,width:40,children:(0,H.jsx)(m,{icon:t.icon,size:18})}),(0,H.jsxs)(u,{flex:1,gap:2,style:{minWidth:0,overflow:`hidden`},children:[(0,H.jsx)(v,{ellipsis:!0,style:{fontSize:14,fontWeight:500},children:t.name}),(0,H.jsx)(v,{ellipsis:!0,style:{fontSize:12},type:`secondary`,children:t.description})]})]}):e.label},onChange:e=>d(e)})})]})}})),Et,Dt,Ot=t((()=>{C(),j(),n(),Et=e(c()),Dt=({formId:e,loading:t})=>{let{t:n}=r(`eval`),{close:i}=Me();return(0,Et.jsxs)(Ne,{children:[(0,Et.jsx)(b,{disabled:t,onClick:i,children:n(`common.cancel`)}),(0,Et.jsx)(b,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n(`common.create`)})]})}})),kt,At,jt=t((()=>{a(),Be(),Tt(),Ot(),kt=e(c()),At=e=>Ve({renderContent:({formId:t,setLoading:n})=>(0,kt.jsx)(wt,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,kt.jsx)(Dt,{formId:e,loading:t}),title:i(`dataset.create.title`,{ns:`eval`}),width:600})})),Mt,U,Nt,Pt,Ft=t((()=>{C(),f(),A(),Mt=e(l()),n(),U=e(c()),Nt=d(({css:e,cssVar:t})=>({emptyIcon:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    margin-block-end: 12px;
    border-radius: 50%;

    background: ${t.colorFillSecondary};
  `})),Pt=(0,Mt.memo)(({onAddCase:e,onImport:t})=>{let{t:n}=r(`eval`);return(0,U.jsxs)(u,{align:`center`,gap:8,justify:`center`,style:{padding:`48px 24px`},children:[(0,U.jsx)(`div`,{className:Nt.emptyIcon,children:(0,U.jsx)(ye,{size:20,style:{color:`var(--ant-color-text-tertiary)`}})}),(0,U.jsx)(`p`,{style:{color:`var(--ant-color-text)`,fontSize:14,fontWeight:500,margin:0},children:n(`testCase.empty.title`)}),(0,U.jsx)(`p`,{style:{color:`var(--ant-color-text-tertiary)`,fontSize:12,margin:0},children:n(`testCase.empty.description`)}),(0,U.jsxs)(u,{horizontal:!0,gap:8,style:{marginTop:8},children:[(0,U.jsx)(b,{icon:ve,size:`small`,onClick:e,children:n(`testCase.actions.add`)}),(0,U.jsx)(b,{icon:ke,size:`small`,type:`primary`,onClick:t,children:n(`testCase.actions.import`)})]})]})})})),It,W,G,Lt,Rt=t((()=>{C(),j(),k(),f(),A(),It=e(l()),n(),ae(),Fe(),Le(),He(),Ft(),We(),W=e(c()),G=d(({css:e,cssVar:t})=>({card:e`
    .ant-card-body {
      padding: 0;
    }
  `,caseCount:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,datasetDescription:e`
    overflow: hidden;

    margin: 0;

    font-size: 12px;
    color: ${t.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,datasetHeader:e`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;

    width: 100%;
    padding: 16px;
    border: none;

    text-align: start;

    background: transparent;

    transition: background 0.2s;

    &:hover {
      background: ${t.colorFillQuaternary};
    }
  `,datasetIcon:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    border-radius: 8px;

    background: ${t.colorPrimaryBg};
  `,datasetName:e`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: ${t.colorText};
  `,dropdownButton:e`
    width: 28px;
    height: 28px;
    padding: 0;
    color: ${t.colorTextTertiary};
  `,expandedSection:e`
    border-block-start: 1px solid ${t.colorBorderSecondary};
  `,footer:e`
    padding: 12px;
    border-block-start: 1px solid ${t.colorBorderSecondary};
  `,footerLink:e`
    text-decoration: none;
  `})),Lt=(0,It.memo)(({benchmarkId:e,dataset:t,isExpanded:n,loading:i,total:a,filteredCases:o,search:s,diffFilter:c,pagination:l,onExpand:d,onEdit:f,onDeleteCase:p,onRefresh:m,onSearchChange:h,onDiffFilterChange:g,onPageChange:_,onAddCase:v,onImport:y,onRun:S})=>{let{t:C}=r(`eval`),{message:T}=D.useApp(),E=(0,It.useCallback)(()=>{M({content:C(`dataset.delete.confirm`),okButtonProps:{danger:!0},okText:C(`common.delete`),onOk:async()=>{try{await Re.deleteDataset(t.id),T.success(C(`dataset.delete.success`)),m()}catch{T.error(C(`dataset.delete.error`))}},title:C(`common.delete`)})},[t.id,T,m,C]);return(0,W.jsxs)(w,{className:G.card,children:[(0,W.jsxs)(`div`,{className:G.datasetHeader,onClick:d,children:[(0,W.jsx)(`div`,{className:G.datasetIcon,children:(0,W.jsx)(ye,{size:16,style:{color:`var(--ant-color-primary)`}})}),(0,W.jsxs)(u,{flex:1,gap:2,style:{minWidth:0},children:[(0,W.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,W.jsx)(`p`,{className:G.datasetName,children:t.name}),t.metadata?.preset&&F[t.metadata.preset]&&(0,W.jsx)(x,{style:{fontSize:10},children:F[t.metadata.preset].name})]}),t.description&&(0,W.jsx)(`p`,{className:G.datasetDescription,children:t.description})]}),(0,W.jsxs)(`span`,{className:G.caseCount,children:[t.testCaseCount||0,` `,C(`benchmark.detail.stats.cases`).toLowerCase()]}),(0,W.jsx)(b,{icon:je,size:`small`,style:{height:28},onClick:e=>{e.stopPropagation(),S()},children:C(`run.actions.run`)}),(0,W.jsx)(te,{trigger:[`click`],menu:{items:[{icon:(0,W.jsx)(me,{size:14}),key:`edit`,label:C(`common.edit`),onClick:()=>f(t)},{type:`divider`},{danger:!0,icon:(0,W.jsx)(be,{size:14}),key:`delete`,label:C(`common.delete`),onClick:E}]},children:(0,W.jsx)(b,{className:G.dropdownButton,icon:Ee,size:`small`,variant:`text`,onClick:e=>e.stopPropagation()})}),(0,W.jsx)(Oe,{size:16,style:{color:`var(--ant-color-text-tertiary)`,transform:n?`rotate(90deg)`:`rotate(0deg)`,transition:`transform 0.2s`}})]}),n&&(0,W.jsxs)(`div`,{className:G.expandedSection,children:[i?(0,W.jsx)(u,{align:`center`,justify:`center`,style:{padding:`48px 24px`},children:(0,W.jsx)(Ie,{size:48})}):a===0?(0,W.jsx)(Pt,{onAddCase:v,onImport:y}):(0,W.jsx)(tt,{readOnly:!0,datasetEvalMode:t.evalMode,diffFilter:c,pagination:l,search:s,testCases:o,total:a,onDiffFilterChange:g,onPageChange:_,onSearchChange:h}),(0,W.jsx)(u,{horizontal:!0,align:`center`,className:G.footer,justify:`center`,children:(0,W.jsx)(ne,{className:G.footerLink,to:`/eval/bench/${e}/datasets/${t.id}`,children:(0,W.jsx)(b,{icon:Ae,iconPosition:`end`,size:`small`,variant:`text`,children:C(`dataset.detail.viewDetail`)})})})]})]})})})),zt,K,Bt,Vt,Ht=t((()=>{C(),k(),f(),A(),zt=e(l()),n(),K=e(c()),Bt=d(({css:e,cssVar:t})=>({emptyCard:e`
    .ant-card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding-block: 64px;
      padding-inline: 24px;
    }
  `})),Vt=(0,zt.memo)(({onAddDataset:e})=>{let{t}=r(`eval`);return(0,K.jsx)(w,{className:Bt.emptyCard,children:(0,K.jsx)(y,{icon:ye,description:(0,K.jsxs)(u,{gap:4,children:[(0,K.jsx)(`p`,{style:{color:`var(--ant-color-text)`,fontSize:14,fontWeight:500,margin:0},children:t(`dataset.empty.title`)}),(0,K.jsx)(`p`,{style:{color:`var(--ant-color-text-tertiary)`,fontSize:12,margin:0},children:t(`dataset.empty.description`)})]}),children:(0,K.jsx)(b,{icon:ve,size:`small`,style:{marginTop:16},type:`primary`,onClick:e,children:t(`dataset.actions.addDataset`)})})})})})),q,J,Ut,Wt,Gt=t((()=>{C(),j(),k(),f(),A(),q=e(l()),n(),Le(),P(),jt(),Xe(),Ke(),rt(),Qe(),Rt(),Ht(),J=e(c()),Ut=d(({css:e,cssVar:t})=>({card:e`
    .ant-card-body {
      padding: 0;
    }
  `,header:e`
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 16px;
  `,icon:e`
    flex-shrink: 0;

    width: 32px;
    height: 32px;
    border-radius: 8px;

    background: ${t.colorFillQuaternary};
  `})),Wt=(0,q.memo)(({benchmarkId:e,datasets:t,loading:n,onImport:i,onRefresh:a})=>{let{t:o}=r(`eval`),{message:s}=D.useApp(),[c,l]=(0,q.useState)(null),[d,f]=(0,q.useState)({current:1,pageSize:5}),[p,m]=(0,q.useState)(``),[h,g]=(0,q.useState)(`all`),_=N(e=>e.useFetchTestCases),v=N(e=>e.refreshTestCases),{data:y,isLoading:x}=_(c?{datasetId:c,limit:d.pageSize,offset:(d.current-1)*d.pageSize}:{datasetId:``,limit:0,offset:0}),S=y?.data||[],C=y?.total||0,E=(0,q.useCallback)(async e=>{await v(e),a()},[v,a]),ee=S.filter(e=>!(h!==`all`&&e.metadata?.difficulty!==h||p&&!e.content?.input?.toLowerCase().includes(p.toLowerCase()))),O=(0,q.useCallback)(e=>{l(t=>t===e?null:e),f({current:1,pageSize:5}),m(``),g(`all`)},[]),k=(0,q.useCallback)(e=>{m(e),f(e=>({...e,current:1}))},[]),te=(0,q.useCallback)(e=>{g(e),f(e=>({...e,current:1}))},[]),ne=(0,q.useCallback)(()=>{At({benchmarkId:e,onSuccess:e=>{a(),M({cancelText:o(`common.later`),content:o(`dataset.create.importNow`),okText:o(`dataset.actions.import`),onOk:()=>{Ge({datasetId:e.id,onSuccess:E,presetId:e.preset})},title:o(`dataset.create.successTitle`)})}})},[e,E,a,o]),re=(0,q.useCallback)(e=>{Ge({datasetId:e.id,onSuccess:E,presetId:e.metadata?.preset})},[E]),ie=(0,q.useCallback)(t=>{Ue({benchmarkId:e,datasetId:t.id,datasetName:t.name})},[e]),ae=(0,q.useCallback)(e=>{M({content:o(`testCase.delete.confirm`),okButtonProps:{danger:!0},okText:o(`common.delete`),onOk:async()=>{try{await Re.deleteTestCase(e.id),s.success(o(`testCase.delete.success`)),c&&await v(c),a()}catch{s.error(o(`testCase.delete.error`))}},title:o(`common.delete`)})},[c,s,a,v,o]);return(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(u,{gap:16,children:[t.length>0&&(0,J.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,J.jsx)(`p`,{style:{color:`var(--ant-color-text-tertiary)`,fontSize:14,margin:0},children:o(`benchmark.detail.datasetCount`,{count:t.length})}),(0,J.jsx)(b,{icon:ve,size:`small`,type:`primary`,onClick:ne,children:o(`dataset.actions.addDataset`)})]}),n&&t.length===0?(0,J.jsx)(u,{gap:12,children:[1,2,3].map(e=>(0,J.jsx)(w,{className:Ut.card,children:(0,J.jsxs)(`div`,{className:Ut.header,children:[(0,J.jsx)(`div`,{className:Ut.icon}),(0,J.jsxs)(u,{flex:1,gap:6,children:[(0,J.jsx)(T.Input,{active:!0,size:`small`,style:{height:16,width:120}}),(0,J.jsx)(T.Input,{active:!0,size:`small`,style:{height:12,width:200}})]}),(0,J.jsx)(T.Input,{active:!0,size:`small`,style:{height:14,width:50}}),(0,J.jsx)(T.Button,{active:!0,size:`small`,style:{height:28,width:64}})]})},e))}):t.length===0?(0,J.jsx)(Vt,{onAddDataset:ne}):(0,J.jsx)(u,{gap:12,children:t.map(t=>{let n=c===t.id;return(0,J.jsx)(Lt,{benchmarkId:e,dataset:t,diffFilter:h,filteredCases:n?ee:[],isExpanded:n,loading:n?x:!1,pagination:d,search:p,total:n?C:0,onDeleteCase:ae,onDiffFilterChange:te,onExpand:()=>O(t.id),onImport:()=>re(t),onPageChange:(e,t)=>f({current:e,pageSize:t}),onRefresh:a,onRun:()=>ie(t),onSearchChange:k,onAddCase:()=>Ye({datasetId:t.id,onSuccess:E}),onEdit:e=>$e({dataset:e,onSuccess:a})},t.id)})})]})})})})),Y,X,Kt,qt=t((()=>{C(),j(),A(),Y=e(l()),n(),P(),Qe(),st(),Je(),Ze(),X=e(c()),Kt=(0,Y.memo)(({benchmarkId:e})=>{let{t}=r(`eval`),[n,i]=(0,Y.useState)(`all`),a=N(e=>e.useFetchRuns),o=N(ze.runList),s=N(e=>e.refreshRuns);a(e);let c=(0,Y.useMemo)(()=>[...o].sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()),[o]),l=(0,Y.useMemo)(()=>n===`all`?c:n===`active`?c.filter(e=>e.status===`running`||e.status===`pending`):c.filter(e=>e.status===n),[c,n]),d=[{label:t(`table.filter.all`),value:`all`},{label:t(`run.status.completed`),value:`completed`},{label:t(`run.filter.active`),value:`active`},{label:t(`run.status.idle`),value:`idle`},{label:t(`run.status.failed`),value:`failed`},{label:t(`run.status.aborted`),value:`aborted`}];return(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(u,{gap:16,children:[c.length>0&&(0,X.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,X.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(`p`,{style:{color:`var(--ant-color-text-tertiary)`,fontSize:14,margin:0},children:t(`benchmark.detail.runCount`,{count:l.length})}),(0,X.jsx)(Pe,{options:d,size:`small`,style:{width:128},value:n,onChange:i})]}),(0,X.jsx)(b,{icon:ve,size:`small`,type:`primary`,onClick:()=>Ue({benchmarkId:e}),children:t(`run.actions.create`)})]}),c.length===0?(0,X.jsx)(et,{onCreate:()=>Ue({benchmarkId:e})}):l.length===0?(0,X.jsx)(`p`,{style:{color:`var(--ant-color-text-tertiary)`,fontSize:14,textAlign:`center`},children:t(`run.filter.empty`)}):(0,X.jsx)(u,{gap:12,children:l.map(t=>(0,X.jsx)(nt,{benchmarkId:e,run:t,onEdit:e=>ct({run:e}),onRefresh:s},t.id))})]})})})})),Z,Q,Jt,Yt,$,Xt;t((()=>{C(),k(),f(),A(),Z=e(l()),n(),ae(),P(),yt(),Gt(),qt(),Q=e(c()),Jt=[pe,de,oe,_e,fe,Se,le,ue,Ce,ce,we],Yt=e=>Jt[e.split(``).reduce((e,t)=>e+t.charCodeAt(0),0)%Jt.length],$=d(({css:e})=>({container:e`
    overflow-y: auto;
    padding-block: 24px;
    padding-inline: 32px;
  `,sectionTitle:e`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  `})),Xt=(0,Z.memo)(()=>{let{t:e}=r(`eval`),{benchmarkId:t}=re(),n=(0,Z.useMemo)(()=>t?Yt(t):oe,[t]),i=N(e=>e.useFetchBenchmarkDetail),a=N(e=>t?e.benchmarkDetailMap[t]:void 0),o=N(e=>e.useFetchDatasets),s=N(e=>e.datasetList),c=N(e=>e.isLoadingDatasets),l=N(e=>e.refreshDatasets),d=N(e=>e.useFetchRuns),f=N(ze.runList);i(t),o(t);let p=(0,Z.useCallback)(async()=>{t&&await l(t)},[t,l]),m=(0,Z.useCallback)(async()=>{t&&await l(t)},[t,l]);d(t);let g=f.filter(e=>e.status===`completed`),_=s.reduce((e,t)=>e+(t.testCaseCount||0),0);return a?(0,Q.jsxs)(u,{className:$.container,gap:24,height:`100%`,width:`100%`,children:[(0,Q.jsx)(vt,{benchmark:a,completedRuns:g,datasets:s,runCount:f.length,systemIcon:n,totalCases:_,onBenchmarkUpdate:m}),a.tags&&a.tags.length>0&&(0,Q.jsx)(u,{horizontal:!0,gap:6,style:{flexWrap:`wrap`},children:a.tags.map(e=>(0,Q.jsx)(ee,{style:{backgroundColor:`transparent`,borderColor:`var(--ant-color-border)`,color:`var(--ant-color-text-tertiary)`,fontSize:12},children:e},e))}),(0,Q.jsx)(`h3`,{className:$.sectionTitle,children:e(`benchmark.detail.tabs.datasets`)}),(0,Q.jsx)(Wt,{benchmarkId:t,datasets:s,loading:c,onImport:()=>{},onRefresh:p}),(0,Q.jsx)(`h3`,{className:$.sectionTitle,children:e(`benchmark.detail.tabs.runs`)}),(0,Q.jsx)(Kt,{benchmarkId:t})]}):(0,Q.jsxs)(u,{className:$.container,gap:24,height:`100%`,width:`100%`,children:[(0,Q.jsx)(u,{gap:16,children:(0,Q.jsxs)(u,{horizontal:!0,align:`start`,gap:12,children:[(0,Q.jsx)(T.Avatar,{active:!0,shape:`square`,size:40,style:{borderRadius:10}}),(0,Q.jsxs)(u,{flex:1,gap:8,children:[(0,Q.jsx)(T.Input,{active:!0,style:{height:24,width:200}}),(0,Q.jsx)(T.Input,{active:!0,size:`small`,style:{height:14,width:320}})]})]})}),(0,Q.jsx)(u,{horizontal:!0,gap:12,children:[1,2,3,4].map(e=>(0,Q.jsx)(w,{styles:{body:{padding:16}},style:{border:`1px solid ${h.colorBorder}`,borderRadius:8,flex:1,minWidth:0},children:(0,Q.jsxs)(u,{gap:12,children:[(0,Q.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,Q.jsx)(T.Avatar,{active:!0,shape:`square`,size:36,style:{borderRadius:8}}),(0,Q.jsx)(T.Input,{active:!0,size:`small`,style:{height:13,width:80}})]}),(0,Q.jsxs)(u,{gap:4,children:[(0,Q.jsx)(T.Input,{active:!0,style:{height:24,width:60}}),(0,Q.jsx)(T.Input,{active:!0,size:`small`,style:{height:12,width:100}})]})]})},e))}),(0,Q.jsx)(T.Input,{active:!0,style:{height:16,width:80}}),(0,Q.jsx)(T.Input,{active:!0,style:{height:64,width:`100%`}}),(0,Q.jsx)(T.Input,{active:!0,style:{height:16,width:80}}),(0,Q.jsx)(T.Input,{active:!0,style:{height:64,width:`100%`}})]})})}))();export{Xt as default};