import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{qt as n}from"../i18n/i18n-zh-CN-CbR0_Rok.js";import{dt as r,i,pt as a,r as o}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{vl as s,yl as c}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as l,Ia as u,Ma as d,da as f,za as p}from"./imperative-Xfjd337A.js";import{Is as m,Os as h,n as g,ws as _}from"./es-2ZVhpwv7.js";import{m as v,n as y}from"../vendor/vendor-react-D1dBs3e7.js";import{Bh as b,It as x,Rh as S,Wg as C,dt as w,vl as T}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{c as E,l as D,s as O,u as k}from"./NavPanel-C8e38VDz.js";import{n as A,t as j}from"./lib-Q4m2rhs5.js";import{o as M,s as N}from"./NavItem-CU97XmZp.js";var P,F,I,L,R,z,B,V=t((()=>{g(),d(),P=e(n()),w(),F=e(c()),y(),I=e(s()),L=`notification-item-actions`,R=u(({css:e})=>({container:e`
    cursor: pointer;
    user-select: none;

    .${L} {
      opacity: 0;
      transition: opacity 0.2s ${p.motionEaseOut};
    }

    &:hover {
      .${L} {
        opacity: 1;
      }
    }
  `,unreadDot:e`
    flex-shrink: 0;

    width: 8px;
    height: 8px;
    border-radius: 50%;

    background: ${p.colorPrimary};
  `})),z={image_generation_completed:T,video_generation_completed:x},B=(0,F.memo)(({id:e,type:t,title:n,content:r,createdAt:i,isRead:a,actionUrl:o,onMarkAsRead:s,onArchive:c})=>{let u=v(),d=z[t]||S,g=(0,F.useCallback)(()=>{a||s(e),o&&u(o)},[e,a,o,s,u]),y=(0,F.useCallback)(t=>{t.stopPropagation(),c(e)},[e,c]);return(0,I.jsx)(m,{clickable:!0,className:R.container,gap:4,paddingBlock:8,paddingInline:12,variant:`borderless`,onClick:g,children:(0,I.jsxs)(l,{horizontal:!0,align:`flex-start`,gap:8,children:[(0,I.jsx)(f,{color:p.colorTextDescription,icon:d,size:18,style:{flexShrink:0,marginTop:2}}),(0,I.jsxs)(l,{flex:1,gap:4,style:{overflow:`hidden`},children:[(0,I.jsxs)(l,{horizontal:!0,align:`center`,gap:4,justify:`space-between`,children:[(0,I.jsxs)(l,{horizontal:!0,align:`center`,flex:1,gap:6,style:{overflow:`hidden`},children:[!a&&(0,I.jsx)(`span`,{className:R.unreadDot}),(0,I.jsx)(h,{ellipsis:!0,style:{fontWeight:a?400:600},children:n})]}),(0,I.jsxs)(l,{horizontal:!0,align:`center`,gap:2,style:{flexShrink:0},children:[(0,I.jsx)(`span`,{className:L,children:(0,I.jsx)(_,{icon:C,size:{blockSize:24,size:14},onClick:y})}),(0,I.jsx)(h,{fontSize:12,style:{flexShrink:0},type:`secondary`,children:(0,P.default)(i).fromNow()})]})]}),(0,I.jsx)(h,{ellipsis:{rows:3},fontSize:12,type:`secondary`,children:r})]})]})})})})),H,U,W,G;t((()=>{g(),d(),w(),H=e(c()),r(),o(),j(),N(),D(),E(),V(),U=e(s()),W=20,G=(0,H.memo)(({open:e,unreadOnly:t,onMarkAsRead:n,onArchive:r})=>{let{t:o}=a(`notification`),s=(0,H.useRef)(null),{data:c,isLoading:u,isValidating:d,setSize:m}=i((0,H.useCallback)((n,r)=>!e||r&&r.length<W?null:n===0?[O,void 0,t]:[O,r?.at(-1)?.id,t],[e,t]),async([,e,t])=>k.list({cursor:e,limit:W,unreadOnly:t}));(0,H.useEffect)(()=>{m(1),s.current?.scrollTo(0)},[t,m]);let g=c?.flat()??[],_=c?c.at(-1)?.length===W:!1,v=(0,H.useCallback)(()=>{let e=s.current;!e||!_||d||e.findItemIndex(e.scrollOffset+e.viewportSize)+5>g.length&&m(e=>e+1)},[_,d,g.length,m]);return u?(0,U.jsx)(l,{gap:1,paddingBlock:1,paddingInline:4,children:(0,U.jsx)(M,{rows:5})}):g.length===0?(0,U.jsxs)(l,{align:`center`,gap:12,justify:`center`,paddingBlock:48,children:[(0,U.jsx)(f,{color:p.colorTextQuaternary,icon:b,size:40}),(0,U.jsx)(h,{type:`secondary`,children:o(t?`inbox.emptyUnread`:`inbox.empty`)})]}):(0,U.jsxs)(A,{ref:s,style:{height:`100%`},onScroll:v,children:[g.map(e=>(0,U.jsx)(l,{padding:`4px 8px`,children:(0,U.jsx)(B,{actionUrl:e.actionUrl,content:e.content,createdAt:e.createdAt,id:e.id,isRead:e.isRead,title:e.title,type:e.type,onArchive:r,onMarkAsRead:n})},e.id)),d&&(0,U.jsx)(l,{padding:`4px 8px`,children:(0,U.jsx)(M,{rows:2})})]})}),G.displayName=`InboxDrawerContent`}))();export{G as default};