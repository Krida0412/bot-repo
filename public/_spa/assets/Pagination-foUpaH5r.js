import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{vl as n,yl as r}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Ia as i,Ja as a,Ma as o}from"./imperative-CZQgOWZc.js";import{ct as s,n as c}from"./es-B2d2bv-I.js";import{d as l,m as u,n as d}from"../vendor/vendor-react-Du2OrJ5H.js";import{n as f,r as p}from"./const-Di8uBe8m.js";import{n as m,t as h}from"./useQuery-DQztLvl4.js";var g,_,v,y,b,x,S=t((()=>{c(),o(),g=e(r()),d(),h(),p(),_=e(n()),v=`lobe-mobile-scroll-container`,y=`ant`,b=i(({css:e,cssVar:t})=>({page:e`
      .${y}-pagination-item-active {
        border-color: ${t.colorFillSecondary};
        background: ${t.colorFillSecondary};

        &:hover {
          border-color: ${t.colorFill};
          background: ${t.colorFill};
        }
      }
    `})),x=(0,g.memo)(({tab:e,currentPage:t,total:n,pageSize:r})=>{let{page:i}=m(),o=u(),c=l(),{mobile:d}=a();return(0,_.jsx)(s,{className:b.page,current:i?Number(i):t,"data-testid":`pagination`,pageSize:r,showSizeChanger:!1,total:n,style:{alignSelf:`flex-end`},onChange:t=>{let n=new URLSearchParams(c.search);n.set(`page`,String(t)),o(`/community/${e}?${n.toString()}`);let r=d?v:f,i=document?.querySelector(`#${r}`);i&&i.scrollTo({behavior:`smooth`,top:0})}})})}));export{S as n,x as t};