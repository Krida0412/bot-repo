import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{Os as n,Rs as r,ks as i,vl as a,yl as o}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Ia as s,Ma as c,za as l}from"./imperative-Xfjd337A.js";import{n as u,us as d}from"./es-2ZVhpwv7.js";import{Er as f,Rr as p}from"../i18n/i18n-default-Ib49YEbx.js";import{$t as m,Gt as h,Zt as g,en as _,in as v}from"./agent-BV7ChU6o.js";import{i as y,t as b}from"./electron-BTFW9gEx.js";import{n as x,t as S}from"./selectors-BBRZjO5q.js";var C,w,T,E,D=t((()=>{f(),u(),c(),C=e(o()),i(),r(),b(),S(),_(),h(),w=e(a()),T=s(({css:e})=>({clickable:e`
    position: relative;
    transition: all 200ms ease-out 0s;

    &::before {
      content: '';

      position: absolute;
      transform: skewX(-45deg) translateX(-400%);

      overflow: hidden;

      box-sizing: border-box;
      width: 25%;
      height: 100%;

      background: rgb(255 255 255 / 50%);

      transition: all 200ms ease-out 0s;
    }

    &:hover {
      box-shadow: 0 0 0 2px ${l.colorPrimary};

      &::before {
        transform: skewX(-45deg) translateX(400%);
      }
    }
  `})),E=({ref:e,size:t=40,background:r,clickable:i,className:a,style:o,...s})=>{let[c,u,f]=v(e=>[m.userAvatar(e),m.nickName(e),m.username(e)]),h=v(g.isLogin),_=y(x.remoteServerUrl),b=(0,C.useMemo)(()=>{if(!h)return n;if(c)return c},[h,c,_]);return(0,w.jsx)(d,{alt:h?u||f||`User`:p,avatar:b||u||f,background:r,className:i?T.clickable:a,ref:e,shape:`square`,size:t,style:{color:l.colorText,flex:`none`,...o},...s})}}));export{D as n,E as t};