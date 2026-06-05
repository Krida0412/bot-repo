import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{vl as i,yl as a}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Ia as o,Ma as s,da as c}from"./imperative-CZQgOWZc.js";import{n as l}from"./es-na8XYpNF.js";import{Ja as u,Jg as d,Jp as f,Ol as p,Sp as m,dt as h,op as g}from"../vendor/vendor-icons-BrLWQuP2.js";import{c as _,n as v}from"./base-ui-kDrDQHsE.js";var y,b,x=t((()=>{v(),y=0,b=({renderContent:e,renderFooter:t,...n})=>{let r=`form-modal-${y++}`,i={},a=e=>{i.instance?.update({footer:t({formId:r,loading:e})})};return i.instance=_({...n,content:e({formId:r,setLoading:a}),footer:t({formId:r,loading:!1})}),i.instance}})),S,C,w,T,E,D=t((()=>{l(),s(),h(),S=e(a()),n(),C=e(i()),w={aborted:{cls:`default`,icon:u},completed:{cls:`success`,icon:f},external:{cls:`warning`,icon:p},failed:{cls:`error`,icon:m},idle:{cls:`default`,icon:g},pending:{cls:`warning`,icon:g},running:{cls:`primary`,icon:d}},T=o(({css:e,cssVar:t})=>({default:e`
    color: ${t.colorTextTertiary};
  `,error:e`
    color: ${t.colorError};
  `,primary:e`
    color: ${t.colorPrimary};
  `,success:e`
    color: ${t.colorSuccess};
  `,warning:e`
    color: ${t.colorWarning};
  `,wrapper:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    font-size: 11px;
    font-weight: 500;
    line-height: 1;
  `})),E=(0,S.memo)(({status:e})=>{let{t}=r(`eval`),n=w[e]||w.idle;return(0,C.jsxs)(`span`,{className:`${T.wrapper} ${T[n.cls]||T.default}`,children:[(0,C.jsx)(c,{icon:n.icon,size:12}),t(`run.status.${e}`)]})})}));export{x as i,D as n,b as r,E as t};