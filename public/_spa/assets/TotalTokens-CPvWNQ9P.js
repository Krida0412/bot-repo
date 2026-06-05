import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{qt as n}from"../i18n/i18n-zh-CN-CbR0_Rok.js";import{dt as r,pt as i}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{Et as a,bt as o,gt as s,vl as c,yl as l}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{r as u,t as d}from"./swr-CpnM5dDc.js";import{Aa as f,Ba as ee,Ia as te,Ja as ne,Ma as p,Ua as m,da as h,za as g}from"./imperative-CZQgOWZc.js";import{Is as _,Os as v,Xn as re,ha as y,k as ie,n as b}from"./es-na8XYpNF.js";import{at as ae,n as x,zt as oe}from"./es-B2d2bv-I.js";import{Wf as se,cs as ce,dt as le,fd as ue}from"../vendor/vendor-icons-BrLWQuP2.js";import{i as de,t as fe}from"./es-DSEY38td.js";import{n as S,t as C}from"./message-DIWBSDpS.js";import{n as pe,t as me}from"./topic-BmHKw0mm.js";import{F as he,P as ge}from"./index-CG_0atUX.js";import{i as _e,n as ve}from"./time-ZGINesXK.js";import{n as ye,t as be}from"./es-D8LTJ3ml.js";var xe,w,T=t((()=>{xe=function(e){return e.Model=`model`,e.Provider=`provider`,e}({}),w=function(e){return e.Messages=`messages`,e.Tokens=`tokens`,e}({})})),Se,E,D,O=t((()=>{b(),Se=e(l()),E=e(c()),D=(0,Se.memo)(({fontSize:e=18,afterTitle:t,children:n,extra:r,title:i,...a})=>(0,E.jsxs)(_,{gap:16,variant:`borderless`,...a,children:[(0,E.jsxs)(f,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,E.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,E.jsx)(v,{fontSize:e,weight:500,children:i}),t]}),(0,E.jsx)(f,{horizontal:!0,align:`center`,gap:8,children:r})]}),n]}))})),k,A,j,M,Ce=t((()=>{b(),x(),p(),k=e(l()),r(),d(),C(),me(),a(),T(),A=e(c()),j=e=>{if(!e||e<1)return`--`;let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%60);return t>0?`${t}h ${n}m`:n>0?`${n}m ${r}s`:`${r}s`},M=(0,k.memo)(()=>{let{t:e}=i(`auth`),{data:t,isLoading:n}=u([`stats-heatmaps`,w.Tokens].join(`-`),()=>S.getTokenHeatmaps()),r=n||!t,{data:a}=u(`stats-max-task-duration`,()=>pe.getMaxTaskDuration()),s=(0,k.useMemo)(()=>{if(!t?.length)return{current:0,longest:0,peak:0};let e=0,n=0,r=0;for(let i of t)i.count>e&&(e=i.count),i.count>0?(r+=1,r>n&&(n=r)):r=0;let i=0;for(let e=t.length-1;e>=0;--e)if(t[e].count>0)i+=1;else if(e===t.length-1)continue;else break;return{current:i,longest:n,peak:e}},[t]),c=t=>[t,e(`stats.days`)].join(` `);return(0,A.jsx)(_,{paddingBlock:16,paddingInline:8,variant:`outlined`,children:(0,A.jsx)(f,{horizontal:!0,align:`center`,width:`100%`,children:[{label:e(`stats.heatmapStats.peakTokens`),value:o(s.peak)},{label:e(`stats.heatmapStats.longestTask`),loading:a===void 0,value:j(a)},{label:e(`stats.heatmapStats.currentStreak`),value:c(s.current)},{label:e(`stats.heatmapStats.longestStreak`),value:c(s.longest)}].map((e,t)=>(0,A.jsxs)(k.Fragment,{children:[t>0&&(0,A.jsx)(oe,{style:{height:32,margin:0},type:`vertical`}),(0,A.jsxs)(f,{align:`center`,flex:1,gap:4,children:[(0,A.jsx)(`div`,{style:{fontSize:20,fontWeight:`bold`},children:r||e.loading?(0,A.jsx)(ie.Button,{active:!0,size:`small`,style:{width:56}}):e.value}),(0,A.jsx)(`div`,{style:{color:g.colorTextDescription,fontSize:12},children:e.label})]})]},e.label))})})})})),N,P,we,Te=t((()=>{be(),b(),p(),le(),N=e(l()),r(),d(),C(),a(),T(),O(),Ce(),P=e(c()),we=(0,N.memo)(({inShare:e,mobile:t,...n})=>{let{t:r}=i(`auth`),[a,c]=(0,N.useState)(e?w.Messages:w.Tokens),l=a===w.Tokens,{data:d,isLoading:ee}=u([`stats-heatmaps`,a].join(`-`),async()=>l?S.getTokenHeatmaps():S.getHeatmaps()),te=d?.filter(e=>e.level>0).length||`--`,ne=d?.filter(e=>e.level>=3).length||`--`,p=(0,P.jsx)(ye,{blockMargin:t?3:void 0,blockRadius:t?2:void 0,blockSize:t?6:14,data:d||[],hideTotalCount:l,loading:ee||!d,maxLevel:4,customTooltip:e=>r(l?`heatmaps.tooltipTokens`:`heatmaps.tooltip`,{count:l?o(e.count):s(e.count),date:e.date}),labels:{legend:{less:r(`heatmaps.legend.less`),more:r(`heatmaps.legend.more`)},months:[r(`heatmaps.months.jan`),r(`heatmaps.months.feb`),r(`heatmaps.months.mar`),r(`heatmaps.months.apr`),r(`heatmaps.months.may`),r(`heatmaps.months.jun`),r(`heatmaps.months.jul`),r(`heatmaps.months.aug`),r(`heatmaps.months.sep`),r(`heatmaps.months.oct`),r(`heatmaps.months.nov`),r(`heatmaps.months.dec`)],tooltip:r(l?`heatmaps.tooltipTokens`:`heatmaps.tooltip`),totalCount:r(l?`heatmaps.totalCountTokens`:`heatmaps.totalCount`)},style:{alignSelf:`center`},...n}),m=(0,P.jsx)(re,{size:`small`,value:a,variant:`outlined`,options:[{icon:(0,P.jsx)(h,{icon:se}),label:r(`stats.tokens`),value:w.Tokens},{icon:(0,P.jsx)(h,{icon:ce}),label:r(`stats.messages`),value:w.Messages}],onChange:e=>c(e)}),_=(0,P.jsxs)(f,{horizontal:!0,gap:8,children:[(0,P.jsx)(y,{variant:`filled`,children:[te,r(`stats.days`)].join(` `)}),(0,P.jsx)(y,{color:`success`,icon:(0,P.jsx)(h,{icon:ue}),variant:`filled`,children:[ne,r(`stats.days`)].join(` `)})]});return e?(0,P.jsxs)(f,{gap:4,children:[(0,P.jsxs)(f,{horizontal:!0,align:`baseline`,gap:4,justify:`space-between`,children:[(0,P.jsx)(`div`,{style:{color:g.colorTextDescription,fontSize:12},children:r(`stats.lastYearActivity`)}),_]}),p]}):(0,P.jsxs)(D,{afterTitle:m,extra:_,fontSize:16,title:r(`stats.lastYearActivity`),children:[(0,P.jsx)(M,{}),p]})})})),Ee,F,I,L=t((()=>{b(),p(),Ee=e(l()),F=e(c()),I=(0,Ee.memo)(({value:e,title:t})=>(0,F.jsxs)(f,{horizontal:!0,gap:4,style:{color:g.colorTextDescription,fontSize:12},children:[(0,F.jsx)(`span`,{style:{fontWeight:`bold`},children:e}),(0,F.jsx)(`span`,{style:{fontWeight:`normal`},children:t})]}))})),De,R,z,B,V,H=t((()=>{fe(),b(),x(),p(),De=e(l()),R=e(c()),z=`ant`,B=te(({css:e,cssVar:t})=>({card:e`
    border-radius: ${t.borderRadiusLG};

    ${m.sm} {
      border: none;
      border-radius: 0;
      background: ${t.colorBgContainer};
    }
  `,cardDark:e`
    border: 1px solid ${t.colorFillTertiary};
  `,cardLight:e`
    border: 1px solid ${t.colorFillSecondary};
  `,container:e`
    ${m.sm} {
      border: none;
      border-radius: 0;
      background: ${t.colorBgContainer};
    }

    .${z}-pro-card-title {
      overflow: hidden;

      ${m.sm} {
        margin: 0;
        font-size: 14px;
        line-height: 16px !important;
      }
    }

    .${z}-pro-card-body {
      padding: 0;
      .${z}-pro-statistic-card-content {
        position: relative;
        width: 100%;
        padding-block-end: 16px;
        padding-inline: 16px;
        .${z}-pro-statistic-card-chart {
          position: relative;
          width: 100%;
        }
      }

      .${z}-pro-statistic-card-footer {
        overflow: hidden;

        margin: 0;
        padding: 0;
        border-end-start-radius: ${t.borderRadiusLG};
        border-end-end-radius: ${t.borderRadiusLG};
      }
    }

    .${z}-pro-card-loading-content {
      padding-block: 16px;
      padding-inline: 16px;
    }

    .${z}-pro-card-header {
      padding-block-start: 0;
      padding-inline: 0;

      .${z}-pro-card-title {
        line-height: 32px;
      }

      + .${z}-pro-card-body {
        padding-block-start: 0;
      }

      ${m.sm} {
        flex-wrap: wrap;
        gap: 8px;

        margin-block-end: 8px;
        padding-block-start: 0;
        padding-inline: 0;
      }
    }

    .${z}-statistic-content-value-int, .${z}-statistic-content-value-decimal {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.2;
    }

    .${z}-pro-statistic-card-chart {
      margin: 0;
    }

    .${z}-pro-statistic-card-content {
      display: flex;
      flex-direction: column;
      gap: 16px;

      padding-block-end: 0 !important;
      padding-inline: 0 !important;
    }

    .${z}-pro-statistic-card-content-horizontal {
      flex-direction: row;
      align-items: center;

      .${z}-pro-statistic-card-chart {
        align-self: center;
      }
    }
  `,icon:e`
    border-radius: ${t.borderRadius};
    background: ${t.colorFillSecondary};
  `,raw:e`
    border: none !important;
    background: transparent !important;
  `})),V=(0,De.memo)(({title:e,className:t,variant:n=`borderless`,loading:r,extra:i,style:a,padding:o,paddingBlock:s,paddingInline:c,...l})=>{let{mobile:u}=ne();return(0,R.jsx)(_,{className:t,flex:1,padding:o,paddingBlock:s,paddingInline:c,style:a,variant:n,children:(0,R.jsx)(de,{bordered:!u,className:ee(B.container,B.raw),extra:r?(0,R.jsx)(ae,{percent:`auto`,size:`small`}):i,title:typeof e==`string`?(0,R.jsx)(v,{as:`h2`,ellipsis:{rows:1,tooltip:!0},style:{fontSize:`inherit`,fontWeight:`inherit`,lineHeight:`inherit`,margin:0,overflow:`hidden`},children:e}):e,...l})})})})),Oe,ke=t((()=>{Oe=(e,t)=>typeof e==`number`?t===0?e>0?100:0:(e-t)/t*100:0})),Ae,U,W,G=t((()=>{b(),p(),Ae=e(l()),ke(),U=e(c()),W=(0,Ae.memo)(({inverseColor:e,title:t,prvCount:n,count:r})=>{let i=Oe(r||0,n||0),a={color:g.colorSuccess},o={color:g.colorWarning};return(0,U.jsxs)(f,{horizontal:!0,align:`center`,gap:4,justify:`flex-start`,style:{overflow:`hidden`,position:`inherit`},children:[(0,U.jsx)(v,{as:`h2`,ellipsis:{rows:1,tooltip:t},style:{fontSize:`inherit`,fontWeight:`inherit`,lineHeight:`inherit`,margin:0,overflow:`hidden`},children:t}),r&&n&&i&&i!==0?(0,U.jsxs)(y,{variant:`borderless`,style:{...e?i>0?o:a:i>0?a:o},children:[i>0?`+`:``,i.toFixed(1),`%`]}):null]})})})),K,q,J,Y=t((()=>{b(),p(),K=e(l()),ge(),q=e(c()),J=(0,K.memo)(({title:e,count:t})=>(0,q.jsxs)(f,{padding:12,style:{background:he()?g.colorFillTertiary:g.colorFillQuaternary,borderRadius:g.borderRadiusLG},children:[(0,q.jsx)(`div`,{style:{fontSize:13},children:e}),(0,q.jsx)(`div`,{style:{fontSize:20,fontWeight:`bold`},children:t})]}))})),je,X,Me,Ne=t((()=>{je=e(l()),r(),L(),H(),G(),d(),C(),a(),ve(),Y(),X=e(c()),Me=(0,je.memo)(({inShare:e})=>{let{t}=i(`auth`),{data:n,isLoading:r}=u(`stats-messages`,async()=>({count:await S.countMessages(),prevCount:await S.countMessages({endDate:_e().format(`YYYY-MM-DD`)})}));return e?(0,X.jsx)(J,{count:s(n?.prevCount)||`--`,title:t(`stats.messages`)}):(0,X.jsx)(V,{loading:r||!n,statistic:{description:(0,X.jsx)(I,{title:t(`date.prevMonth`),value:s(n?.prevCount)||`--`}),precision:0,value:n?.count||`--`},title:(0,X.jsx)(W,{count:n?.count,prvCount:n?.prevCount,title:t(`stats.messages`)})})})})),Pe,Z,Q,$,Fe=t((()=>{Pe=e(n()),Z=e(l()),r(),L(),H(),G(),d(),C(),a(),ve(),T(),Y(),Q=e(c()),$=(0,Z.memo)(({inShare:e})=>{let{t}=i(`auth`),{data:n,isLoading:r}=u([`stats-heatmaps`,w.Tokens].join(`-`),()=>S.getTokenHeatmaps()),{count:a,prevCount:s}=(0,Z.useMemo)(()=>{if(!n?.length)return{count:0,prevCount:0};let e=_e(),t=0,r=0;for(let i of n)t+=i.count,(0,Pe.default)(i.date).isAfter(e)||(r+=i.count);return{count:t,prevCount:r}},[n]);return e?(0,Q.jsx)(J,{count:o(s)||`--`,title:t(`stats.heatmapStats.totalTokens`)}):(0,Q.jsx)(V,{loading:r||!n,statistic:{description:(0,Q.jsx)(I,{title:t(`date.prevMonth`),value:o(s)||`--`}),precision:0,style:{fontWeight:`bold`},value:o(a)||`--`},title:(0,Q.jsx)(W,{count:a,prvCount:s,title:t(`stats.heatmapStats.totalTokens`)})})})}));export{xe as _,J as a,G as c,I as d,L as f,O as g,D as h,Ne as i,V as l,Te as m,Fe as n,Y as o,we as p,Me as r,W as s,$ as t,H as u,T as v};