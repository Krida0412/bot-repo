import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{qt as n}from"../i18n/i18n-zh-CN-CbR0_Rok.js";import{dt as r,pt as i,xt as a,yt as o}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{vl as s,yl as c}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{r as l,t as u}from"./swr-CpnM5dDc.js";import{Aa as d,Ba as f,Ia as p,Ma as m,za as h}from"./imperative-CZQgOWZc.js";import{Os as g,Sr as _,cs as v,ha as y,n as b}from"./es-na8XYpNF.js";import{Eu as x,Ji as S,dt as C}from"../vendor/vendor-icons-BrLWQuP2.js";import{c as w,n as T}from"./base-ui-kDrDQHsE.js";import{n as E,t as ee}from"./document-C4QMkoeJ.js";import{h as te,m as ne}from"./ErrorContent-DJwle6p3.js";import{a as re,i as ie,r as ae,t as oe}from"./document-IxeWkbl8.js";import{n as se,t as ce}from"./CircleLoading-BbX1A5QV.js";var D=t((()=>{})),O,k,A,j,M,N,P,F,I=t((()=>{ne(),b(),m(),C(),O=e(c()),r(),se(),u(),E(),oe(),ie(),k=e(s()),A=p(({css:e})=>({container:e`
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    min-height: 0;

    background: ${h.colorBgContainer};
  `,content:e`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `,empty:e`
    padding: 24px;
  `})),j=e=>typeof e==`object`&&!!e,M=e=>j(e)&&j(e.root)&&Array.isArray(e.root.children),N=e=>j(e)&&e.type===`root`&&Array.isArray(e.children),P=e=>M(e)?e:N(e)?{root:e}:null,F=(0,O.memo)(({documentId:e,historyId:t})=>{let{t:n}=i(`file`),{data:r,error:a,isLoading:o}=l([`page-editor-document-history-compare`,e,t,ae(t=>re.lastUpdatedTime(e)(t)??null)],async()=>ee.compareDocumentHistoryItems({documentId:e,fromHistoryId:`head`,toHistoryId:t})),s=(0,O.useMemo)(()=>({new:n(`pageEditor.history.compareOldLabel`),old:n(`pageEditor.history.compareCurrentLabel`)}),[n]),c=(0,O.useMemo)(()=>{let e=P(r?.from.editorData);return{newValue:P(r?.to.editorData),oldValue:e}},[r?.from.editorData,r?.to.editorData]);return(0,k.jsx)(d,{className:A.container,flex:1,gap:0,children:o&&!r?(0,k.jsx)(d,{align:`center`,className:A.empty,justify:`center`,children:(0,k.jsx)(ce,{})}):a||!r||!c.oldValue||!c.newValue?(0,k.jsx)(d,{align:`center`,className:A.empty,justify:`center`,children:(0,k.jsx)(_,{description:n(`pageEditor.history.compareError`),icon:x})}):(0,k.jsx)(`div`,{className:A.content,children:(0,k.jsx)(te,{appearance:`borderless`,labels:s,newValue:c.newValue,oldValue:c.oldValue,variant:`chat`})})})}),F.displayName=`DocumentHistoryDiff`})),L,R,z,B=t((()=>{L=e(n()),R=e=>(0,L.default)(e).format(`MMMM D, YYYY h:mm A`),z=e=>(0,L.default)(e).format(`h:mm A`)})),V,H,U,W,G,K,le=t((()=>{b(),m(),V=e(n()),H=e(c()),r(),B(),U=e(s()),W=p(({css:e})=>({container:e`
    overflow-y: auto;
    flex-shrink: 0;

    width: 232px;
    padding-block: 4px 12px;
    padding-inline: 8px;
    border-inline-start: 1px solid ${h.colorBorderSecondary};

    background: ${h.colorBgContainer};
  `,dot:e`
    position: absolute;
    inset-block-start: 9px;
    inset-inline-start: 5px;

    width: 8px;
    height: 8px;
    border: 1px solid ${h.colorBorder};
    border-radius: 999px;

    background: ${h.colorBgContainer};
    box-shadow: 0 0 0 2px ${h.colorBgContainer};
  `,dotCurrent:e`
    border-color: ${h.colorSuccess};
    background: ${h.colorSuccess};
  `,dotSelected:e`
    border-color: ${h.colorPrimary};
    background: ${h.colorPrimary};
  `,group:e`
    position: relative;
  `,groupHeader:e`
    position: sticky;
    z-index: 1;
    inset-block-start: 0;

    padding-block: 10px 6px;
    padding-inline-start: 24px;

    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;

    background: ${h.colorBgContainer};
  `,item:e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 8px;
    border-radius: 6px;

    transition: background ${h.motionDurationMid} ${h.motionEaseInOut};

    &:hover {
      background: ${h.colorFillQuaternary};
    }
  `,itemCurrent:e`
    cursor: default;
  `,itemSelected:e`
    background: ${h.colorFillSecondary};

    &:hover {
      background: ${h.colorFillSecondary};
    }
  `,meta:e`
    overflow: hidden;

    font-size: 11px;
    line-height: 1.3;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,rail:e`
    position: absolute;
    inset-block: 2px;
    inset-inline-start: 8px;

    width: 1px;

    background: ${h.colorFillTertiary};
  `,row:e`
    position: relative;
    padding-inline-start: 24px;
  `,tag:e`
    height: 16px;
    padding-inline: 4px;
    font-size: 10px;
  `,time:e`
    font-size: 12px;
    font-weight: 600;
    line-height: 1.3;
  `})),G=(e,t)=>{let n=new Map;for(let r of e){let e=(0,V.default)(r.savedAt).format(`YYYY-MM-DD`),i=n.get(e);if(i){i.items.push(r);continue}n.set(e,{items:[r],key:e,label:t(r.savedAt)})}return[...n.values()]},K=(0,H.memo)(({items:e,onSelect:t,saveSourceLabels:n,selectedHistoryId:r})=>{let{t:a}=i(`file`),o=(0,H.useCallback)(e=>{let t=(0,V.default)(e);return t.isToday()?a(`pageEditor.history.dayLabel.today`):t.isYesterday()?a(`pageEditor.history.dayLabel.yesterday`):t.format(`MM-DD`)},[a]),s=(0,H.useMemo)(()=>G(e,o),[o,e]);return(0,U.jsx)(`div`,{className:W.container,children:s.map(e=>(0,U.jsxs)(d,{gap:0,children:[(0,U.jsx)(`div`,{className:W.groupHeader,children:(0,U.jsx)(g,{type:`secondary`,children:e.label})}),(0,U.jsxs)(`div`,{className:W.group,children:[(0,U.jsx)(`div`,{className:W.rail}),e.items.map(e=>{let i=r===e.id,o=e.isCurrent;return(0,U.jsxs)(`div`,{className:W.row,children:[(0,U.jsx)(`div`,{className:f(W.dot,e.isCurrent&&W.dotCurrent,!e.isCurrent&&i&&W.dotSelected)}),(0,U.jsx)(`div`,{className:f(W.item,e.isCurrent&&W.itemCurrent,!e.isCurrent&&i&&W.itemSelected),onClick:()=>{o||t(e.id)},children:(0,U.jsxs)(d,{gap:2,children:[(0,U.jsxs)(d,{horizontal:!0,align:`center`,gap:4,children:[(0,U.jsx)(g,{className:W.time,children:z(e.savedAt)}),e.isCurrent&&(0,U.jsx)(y,{className:W.tag,variant:`borderless`,children:a(`pageEditor.history.current`)})]}),(0,U.jsxs)(g,{className:W.meta,type:`secondary`,children:[(0,V.default)(e.savedAt).fromNow(),` · `,n[e.saveSource]]})]})})]},e.id)})]})]},e.key))})}),K.displayName=`HistorySidebar`})),q,J,Y,X,Z,ue=t((()=>{b(),m(),q=e(n()),C(),J=e(c()),r(),I(),B(),le(),Y=e(s()),X=p(({css:e})=>({arrow:e`
    font-size: 12px;
    color: ${h.colorTextTertiary};
  `,badgeNew:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    padding-block: 2px;
    padding-inline: 8px;
    border-radius: 4px;

    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    color: ${h.colorSuccess};

    background: ${h.colorSuccessBg};
  `,badgeOld:e`
    display: inline-flex;
    align-items: center;

    padding-block: 2px;
    padding-inline: 8px;
    border-radius: 4px;

    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    color: ${h.colorError};

    background: ${h.colorErrorBg};
  `,cmpbar:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 10px;
    padding-inline: 16px;
    border-block-end: 1px solid ${h.colorBorderSecondary};

    background: ${h.colorBgLayout};
  `,diffArea:e`
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    min-width: 0;
    min-height: 0;
  `,diffBody:e`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `,meta:e`
    margin-inline-start: 8px;
    font-size: 11px;
    line-height: 1.2;
  `,root:e`
    overflow: hidden;
    display: flex;

    width: 100%;
    height: 100%;

    background: ${h.colorBgContainer};
  `})),Z=(0,J.memo)(({documentId:e,initialHistoryId:t,items:n,onRestore:r,saveSourceLabels:a})=>{let{t:o}=i(`file`),[s,c]=(0,J.useState)(t),l=(0,J.useMemo)(()=>n.find(e=>e.id===s)??null,[n,s]);if(!l)return null;let u=!l.isCurrent;return(0,Y.jsxs)(`div`,{className:X.root,children:[(0,Y.jsxs)(`div`,{className:X.diffArea,children:[(0,Y.jsxs)(`div`,{className:X.cmpbar,children:[(0,Y.jsxs)(d,{horizontal:!0,align:`center`,gap:4,children:[(0,Y.jsx)(`span`,{className:X.badgeNew,children:o(`pageEditor.history.compareCurrentLabel`)}),(0,Y.jsx)(g,{className:X.arrow,children:`→`}),(0,Y.jsx)(`span`,{className:X.badgeOld,children:R(l.savedAt)}),(0,Y.jsxs)(g,{className:X.meta,type:`secondary`,children:[(0,q.default)(l.savedAt).fromNow(),` ·`,` `,a[l.saveSource]]})]}),u&&(0,Y.jsxs)(v,{icon:S,size:`small`,onClick:()=>r(l),children:[o(`pageEditor.history.restore`),` `,R(l.savedAt)]})]}),(0,Y.jsx)(`div`,{className:X.diffBody,children:(0,Y.jsx)(F,{documentId:e,historyId:l.id})})]}),(0,Y.jsx)(K,{items:n,saveSourceLabels:a,selectedHistoryId:s,onSelect:c})]})}),Z.displayName=`CompareContent`})),Q,$,de=t((()=>{T(),o(),ue(),Q=e(s()),$=e=>w({content:(0,Q.jsx)(Z,{...e}),footer:null,styles:{content:{display:`flex`,height:`min(72vh, 800px)`,overflow:`hidden`,padding:0}},title:a(`pageEditor.history.compareTitle`,{ns:`file`}),width:`min(92vw, 1200px)`})}));export{B as a,z as i,$ as n,D as o,R as r,de as t};