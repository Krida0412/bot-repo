import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{vl as n,yl as r}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Ia as i,Ma as a,ln as o}from"./imperative-CZQgOWZc.js";import{n as s}from"./es-na8XYpNF.js";import{n as c,r as l}from"./base-ui-kDrDQHsE.js";import{a as u,i as d,o as f,r as p}from"./ModelSelect-BlIMBWre.js";import{n as m,t as h}from"./useEnabledChatModels-B-xwCp3_.js";var g,_,v,y,b,x=t((()=>{s(),c(),a(),g=e(r()),f(),h(),_=e(n()),v=`ant`,y=i(({css:e})=>({popup:e`
    width: max(360px, var(--anchor-width));

    &.${v}-select-dropdown .${v}-select-item-option-grouped {
      padding-inline-start: 12px;
    }
  `,select:e`
    .${v}-select-selection-item {
      .${u} {
        display: none;
      }
    }
  `})),b=(0,g.memo)(({value:e,onChange:t,showAbility:n=!0,requiredAbilities:r,loading:i,size:a,style:s,variant:c,initialWidth:u=!1,popupWidth:f})=>{let h=m(),v=(0,g.useMemo)(()=>{let e=e=>(r&&r.length>0?e.children.filter(e=>r.every(t=>!!e.abilities?.[t])):e.children).map(t=>({...t,label:(0,_.jsx)(p,{...t,...t.abilities,showInfoTag:!1}),provider:e.id,value:`${e.id}/${t.id}`}));if(h.length===1){let t=h[0];return e(t)}return h.map(t=>{let n=e(t);if(n.length!==0)return{label:(0,_.jsx)(d,{logo:t.logo,name:t.name,provider:t.id,source:t.source}),options:n}}).filter(Boolean)},[h,r,n]);return(0,_.jsx)(o,{children:(0,_.jsx)(l,{className:y.select,defaultValue:`${e?.provider}/${e?.model}`,loading:i,options:v,popupClassName:y.popup,popupMatchSelectWidth:f===void 0?!1:f,size:a,value:`${e?.provider}/${e?.model}`,variant:c,optionRender:e=>(0,_.jsx)(p,{...e,...e.abilities,showInfoTag:!1}),style:{minWidth:200,width:u?`initial`:void 0,...s},onChange:(e,n)=>{let r=e.split(`/`).slice(1).join(`/`);t?.({model:r,provider:n.provider})}})})})}));export{x as n,b as t};