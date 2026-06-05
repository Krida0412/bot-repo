import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{Dc as i,Na as a,da as o,la as s,lc as c,mc as l,na as u,nc as d,nl as f,pa as p,sa as m,vl as h,ya as g,yl as _}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as v,Ba as y,Ia as b,Ma as x,Oa as S,za as C}from"./imperative-CZQgOWZc.js";import{Co as w,Na as T,Os as E,cs as D,ha as O,k,n as A,us as j,ws as M}from"./es-na8XYpNF.js";import{bc as N,dt as P,vi as F}from"../vendor/vendor-icons-BrLWQuP2.js";import{a as I,n as L}from"./base-ui-kDrDQHsE.js";import{Bt as R,zt as z}from"./agent-h7g64c0D.js";var B,V,H=t((()=>{u(),d(),z(),B=(e,t=`,`,n)=>(n&&(e=e.map(e=>n+l(e))),e.filter(Boolean).join(t)),V=({url:e,title:t,desc:n,hashtags:r=[]})=>({linkedin:{link:(()=>{let t=i({url:e},f);return R.stringifyUrl({query:t,url:`https://www.linkedin.com/sharing/share-offsite/`})})(),title:`Linkedin`},mastodon:{icon:a,link:(()=>{let a=i({text:[[t,n].filter(Boolean).join(` - `),r&&B(r,` `,`#`)].filter(Boolean).join(` `),url:e},f);return R.stringifyUrl({query:a,url:`https://mastodon.social/share`})})(),title:`Mastodon`},reddit:{icon:g,link:(()=>{let a=i({title:[[t,n].filter(Boolean).join(` - `),r&&B(r,` `,`#`)].filter(Boolean).join(` `),url:e},f);return R.stringifyUrl({query:a,url:`https://www.reddit.com/submit`})})(),title:`Reddit`},telegram:{icon:o,link:(()=>{let a=i({text:[[t,n].filter(Boolean).join(` - `),r&&B(r,` `,`#`)].filter(Boolean).join(` `),url:e},f);return R.stringifyUrl({query:a,url:`https://t.me/share/url"`})})(),title:`Telegram`},weibo:{icon:p,link:(()=>{let a=i({sharesource:`weibo`,title:[[t,n].filter(Boolean).join(` - `),r&&B(r,` `,`#`)].filter(Boolean).join(` `),url:e},f);return R.stringifyUrl({query:a,url:`http://service.weibo.com/share/share.php`})})(),title:`Weibo`},whatsapp:{icon:s,link:(()=>{let a=i({text:[[t,n].filter(Boolean).join(` - `),e,r&&B(r,` `,`#`)].filter(Boolean).join(` `)},f);return R.stringifyUrl({query:a,url:`https://api.whatsapp.com/send`})})(),title:`WhatsApp`},x:{icon:m,link:(()=>{let a=i({hashtags:r&&B(r),text:[t,n].filter(Boolean).join(` - `),url:e},f);return R.stringifyUrl({query:a,url:`https://x.com/intent/tweet`})})(),title:`X`}})})),U,W,G,K,q=t((()=>{A(),x(),U=e(_()),W=e(h()),G=b(({css:e,cssVar:t})=>({banner:e`
    position: relative;

    overflow: hidden;

    height: 64px;
    margin-block-end: -56px;

    background: ${t.colorFillSecondary};
  `,bannerImg:e`
    position: absolute;
    filter: blur(40px) saturate(1.5);
  `})),K=(0,U.memo)(({avatar:e,className:t,size:n=600,children:r,...i})=>(0,W.jsxs)(v,{align:`center`,className:y(G.banner,t),justify:`center`,style:e?{}:{backgroundColor:C.colorFillTertiary},width:`100%`,...i,children:[e&&(0,W.jsx)(j,{alt:`banner`,avatar:e,className:G.bannerImg,shape:`square`,size:n}),r]}))})),J,Y,X,Z,Q=t((()=>{A(),L(),x(),d(),P(),J=e(_()),n(),H(),q(),Y=e(h()),X=b(({css:e,cssVar:t})=>({banner:e`
      overflow: hidden;

      border: 1px solid ${t.colorBorderSecondary};
      border-radius: ${t.borderRadiusLG};

      background: ${t.colorBgContainer};
      box-shadow: ${t.boxShadowTertiary};
    `,copy:e`
      background: ${t.colorPrimary};

      &:hover {
        background: ${t.colorPrimaryHover};
      }
    `,icon:e`
      border: 1px solid ${t.colorFillSecondary};

      svg {
        fill: ${t.colorTextSecondary};
      }

      &:hover {
        border: 1px solid ${t.colorBorderSecondary};

        svg {
          fill: ${t.colorText};
        }
      }
    `})),Z=(0,J.memo)(({meta:e,...t})=>{let{x:n,reddit:i,telegram:a,whatsapp:o,mastodon:s,weibo:l}=V({avatar:``,desc:``,hashtags:[],title:``,url:``,...e}),{t:u}=r(`common`),[d,f]=(0,J.useState)(!1),p;return p=e?(0,Y.jsxs)(S,{gap:16,style:{position:`relative`},width:`100%`,children:[(0,Y.jsxs)(v,{align:`center`,className:X.banner,width:`100%`,children:[(0,Y.jsx)(K,{avatar:e.avatar,size:640,style:{height:72,marginBottom:-36}}),(0,Y.jsx)(S,{flex:`none`,height:72,width:72,style:{backgroundColor:C.colorBgContainer,borderRadius:`50%`,overflow:`hidden`,zIndex:2},children:(0,Y.jsx)(j,{animation:!0,avatar:e.avatar,shape:`square`,size:64})}),(0,Y.jsxs)(S,{padding:12,width:`100%`,children:[(0,Y.jsx)(`h3`,{style:{fontWeight:`bold`,textAlign:`center`},children:e.title}),(0,Y.jsx)(E,{as:`p`,style:{color:C.colorTextSecondary,textAlign:`center`},children:e.desc}),e.hashtags&&(0,Y.jsx)(v,{horizontal:!0,align:`center`,gap:4,justify:`center`,wrap:`wrap`,children:e.hashtags.map((e,t)=>(0,Y.jsx)(O,{children:c(e).trim()},t))}),e.tags]})]}),(0,Y.jsx)(v,{horizontal:!0,align:`center`,gap:8,justify:`center`,wrap:`wrap`,children:[n,i,a,o,s,l].map(e=>e.icon&&(0,Y.jsx)(`a`,{href:e.link,rel:`noreferrer`,target:`_blank`,children:(0,Y.jsx)(M,{className:X.icon,icon:e.icon,size:{blockSize:36,borderRadius:18,size:16},title:e.title})},e.title))}),(0,Y.jsxs)(v,{horizontal:!0,align:`center`,gap:8,width:`100%`,children:[(0,Y.jsx)(T,{value:e.url,variant:`filled`}),(0,Y.jsx)(w,{className:X.copy,color:C.colorBgLayout,content:e.url,icon:N,size:{blockSize:36,size:16}})]})]}):(0,Y.jsx)(k,{active:!0,paragraph:{rows:4},title:!1}),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(D,{icon:F,size:`large`,onClick:()=>f(!0),...t}),(0,Y.jsx)(I,{footer:null,open:d,title:u(`share`),width:360,onCancel:()=>f(!1),children:p})]})})}));export{Q as n,Z as t};