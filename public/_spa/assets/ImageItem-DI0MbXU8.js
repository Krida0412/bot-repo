import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{vl as n,yl as r}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Ba as i,Ia as a,Ma as o,za as s}from"./imperative-CZQgOWZc.js";import{Wn as c,n as l,ws as u}from"./es-na8XYpNF.js";import{dt as d,vn as f}from"../vendor/vendor-icons-BrLWQuP2.js";import{n as p,t as m}from"./usePlatform-3YaQ8_ID.js";var h=t((()=>{})),g,_,v,y,b=t((()=>{l(),o(),d(),g=e(r()),m(),h(),_=e(n()),v=a(({css:e})=>({deleteButton:e`
    color: #fff;
    background: ${s.colorBgMask};

    &:hover {
      background: ${s.colorError};
    }
  `,editableImage:e`
    background: ${s.colorBgContainer};
    box-shadow: 0 0 0 1px ${s.colorFill} inset;
  `,image:e`
    margin-block: 0 !important;

    .ant-image {
      height: 100% !important;

      img {
        height: 100% !important;
      }
    }
  `})),y=(0,g.memo)(({className:e,style:t,editable:n,alt:r,onRemove:a,url:o,loading:s,alwaysShowClose:l,preview:d})=>{let m=n?64:`100%`,{isSafari:h}=p();return(0,_.jsx)(c,{alt:r||``,alwaysShowActions:l,classNames:{wrapper:i(v.image,n&&v.editableImage,e)},height:h?`auto`:`100%`,isLoading:s,preview:d,size:m,src:o,style:{height:h?`auto`:`100%`,width:`100%`,...t},actions:n&&(0,_.jsx)(u,{glass:!0,className:v.deleteButton,icon:f,size:`small`,onClick:e=>{e.stopPropagation(),a?.()}})})})}));export{b as n,y as t};