import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-Cn4-_Xzu.js";import{Et as i,Ua as a,_l as o,gl as s,gt as c,na as l,sa as u,vl as d,yl as f}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Aa as p,Ba as m,Ia as h,J as g,Ma as _,Oa as v,Ua as y,cn as ee,da as b,dn as x,ln as te,za as S}from"./imperative-CZQgOWZc.js";import{Er as ne,Fr as re,Is as ie,N as ae,Os as C,cs as oe,ha as w,ir as T,k as se,mr as ce,n as E,us as le,ws as ue}from"./es-na8XYpNF.js";import{_t as de,an as fe,ct as pe,kn as me,lt as he,n as D}from"./es-B2d2bv-I.js";import{a as ge,h as _e,m as ve,n as ye}from"../vendor/vendor-react-Du2OrJ5H.js";import{Bt as be,Jd as xe,Kd as Se,Ra as Ce,Su as we,Wd as Te,Wf as Ee,ba as De,bd as Oe,cf as ke,cr as Ae,dt as je,if as Me,mn as Ne,op as Pe,vu as Fe}from"../vendor/vendor-icons-BrLWQuP2.js";import{n as Ie,r as Le,s as Re}from"./base-ui-kDrDQHsE.js";import{Bt as ze,i as Be,t as Ve,zt as He}from"./agent-h7g64c0D.js";import{n as Ue,o as We}from"./client-cV4dDi-k.js";import{n as Ge,t as Ke}from"./agent-C2VhKPJI.js";import{Ar as qe,N as Je,Or as Ye,P as O}from"./store-CDuzlPGA.js";import{n as Xe,t as Ze}from"./discover-Dr1r6_pi.js";import{p as Qe,s as $e,t as et}from"./serverConfig-CPGu7kVr.js";import{n as tt,t as nt}from"./PublishedTime-D14cADW4.js";import{i as rt,o as it,t as at}from"./MarketAuth-IlPBhejh.js";import{a as ot,i as st,r as ct,t as lt}from"./discover-Ddb0BUfu.js";import{n as ut,t as dt}from"./NotFound-De5FV0wU.js";import{n as ft,t as pt}from"./AssistantEmpty-DwHFM8Md.js";import{n as mt,r as ht}from"./ListLoading-iL494SZg.js";var gt,_t,vt,yt,k,A=t((()=>{gt=e(f()),_t=e(d()),vt=(0,gt.createContext)(null),yt=(0,gt.memo)(({children:e,config:t})=>(0,_t.jsx)(vt,{value:t,children:e})),k=()=>{let e=(0,gt.use)(vt);if(!e)throw Error(`useUserDetailContext must be used within UserDetailProvider`);return e}})),bt,xt,St,Ct=t((()=>{E(),bt=e(f()),n(),at(),st(),lt(),xt=e(d()),St=(0,bt.memo)(({userId:e})=>{let{t}=r(`discover`),{isAuthenticated:n,signIn:i,session:a}=rt(),[o,s]=(0,bt.useState)(!1),c=ct(e=>e.useFollowStatus),l=ct(e=>e.follow),u=ct(e=>e.unfollow);a?.accessToken&&ot.setAccessToken(a.accessToken);let{data:d,mutate:f}=c(e),p=d?.isFollowing??!1;return(0,xt.jsx)(oe,{loading:o,shape:`round`,size:`large`,type:p?`default`:`primary`,style:{fontWeight:500,minWidth:120},onClick:async()=>{if(!n){await i();return}s(!0);try{p?await u(e):await l(e),await f()}catch(e){console.error(`Follow action failed:`,e)}finally{s(!1)}},children:t(p?`user.unfollow`:`user.follow`)})})})),wt,j,Tt,Et=t((()=>{E(),wt=e(f()),n(),A(),j=e(d()),Tt=(0,wt.memo)(()=>{let{t:e}=r(`discover`),{user:t}=k(),n=t.followingCount??0,i=t.followersCount??0;return(0,j.jsxs)(p,{horizontal:!0,align:`center`,gap:16,children:[(0,j.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,j.jsx)(C,{style:{fontWeight:600},children:n}),(0,j.jsx)(C,{type:`secondary`,children:e(`user.following`)})]}),(0,j.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,j.jsx)(C,{style:{fontWeight:600},children:i}),(0,j.jsx)(C,{type:`secondary`,children:e(`user.followers`)})]})]})})})),Dt,M,Ot,kt,At=t((()=>{E(),_(),Dt=e(f()),M=e(d()),Ot=h(({css:e,cssVar:t})=>({banner:e`
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;

    width: 100%;
    height: 160px;
    padding: 16px;

    ${y.sm} {
      position: relative;

      width: calc(100% + 32px);
      height: 120px;
      margin-block: -16px 0;
      margin-inline: -16px;
    }

    @media (width <= 1720px) {
      height: 144px;
      padding: 0;
    }
  `,bannerAvatar:e`
    filter: blur(100px);
  `,bannerInner:e`
    position: relative;

    overflow: hidden;

    width: 100%;
    height: 100%;
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillTertiary};

    @media (width <= 1720px) {
      border-radius: 0;
    }
  `,button:e`
    position: absolute;
    inset-block-end: -16px;
    inset-inline-end: 16px;
  `,placeholder:e`
    position: relative;
    width: 100%;
    height: 64px;
    min-height: 64px;

    ${y.sm} {
      display: none;
    }
  `})),kt=(0,Dt.memo)(({avatar:e,bannerUrl:t})=>{let n=t||e,r=!t&&!!e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`div`,{className:Ot.banner,children:(0,M.jsx)(v,{className:Ot.bannerInner,children:n&&(0,M.jsx)(`div`,{className:r?Ot.bannerAvatar:void 0,style:{backgroundImage:`url(${n})`,backgroundPosition:`center`,backgroundSize:`cover`,height:`100%`,width:`100%`}})})}),(0,M.jsx)(`div`,{className:Ot.placeholder})]})})})),jt,N,Mt,Nt=t((()=>{l(),E(),_(),je(),jt=e(f()),n(),A(),Ct(),Et(),At(),N=e(d()),Mt=(0,jt.memo)(()=>{let{t:e}=r(`discover`),{user:t,isOwner:n,onEditProfile:i}=k(),o=t.displayName||t.userName||t.namespace,s=t.userName||t.namespace,c=(0,jt.useMemo)(()=>{if(t.avatarUrl)return t.avatarUrl.startsWith(`/`)?`${window.location.origin}${t.avatarUrl}`:t.avatarUrl},[t.avatarUrl]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(kt,{avatar:c,bannerUrl:(0,jt.useMemo)(()=>t.bannerUrl?t.bannerUrl.startsWith(`/`)?`${window.location.origin}${t.bannerUrl}`:t.bannerUrl:null,[t.bannerUrl])}),(0,N.jsxs)(p,{gap:16,children:[(0,N.jsx)(le,{avatar:c,shape:`square`,size:64,style:{boxShadow:`0 0 0 4px ${S.colorBgContainer}`,flexShrink:0}}),(0,N.jsxs)(p,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,children:[(0,N.jsxs)(p,{gap:4,style:{overflow:`hidden`},children:[(0,N.jsx)(C,{ellipsis:!0,as:`h1`,fontSize:24,style:{margin:0},weight:`bold`,children:o}),(0,N.jsxs)(C,{ellipsis:!0,fontSize:12,type:`secondary`,children:[`@`,s]})]}),n?i&&(0,N.jsx)(oe,{shape:`round`,onClick:()=>i(),children:e(`user.editProfile`)}):(0,N.jsx)(St,{userId:t.id})]}),(0,N.jsx)(Tt,{}),t.description&&(0,N.jsx)(C,{as:`p`,children:t.description}),(0,N.jsx)(te,{children:(0,N.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[t.socialLinks?.github&&(0,N.jsx)(x,{title:`@${t.socialLinks?.github}`,children:(0,N.jsx)(`a`,{href:`https://github.com/${t?.socialLinks?.github}`,rel:`noopener noreferrer`,target:`_blank`,children:(0,N.jsx)(ue,{icon:(0,N.jsx)(a,{size:16}),size:20,variant:`outlined`})})}),t.socialLinks?.twitter&&(0,N.jsx)(x,{title:`@${t.socialLinks?.twitter}`,children:(0,N.jsx)(`a`,{href:`https://twitter.com/${t?.socialLinks?.twitter}`,rel:`noopener noreferrer`,target:`_blank`,children:(0,N.jsx)(ue,{icon:(0,N.jsx)(u,{size:16}),size:20,variant:`outlined`})})}),t.socialLinks?.website&&(0,N.jsx)(x,{title:t.socialLinks?.website,children:(0,N.jsx)(`a`,{href:t?.socialLinks?.website,rel:`noopener noreferrer`,target:`_blank`,children:(0,N.jsx)(ue,{icon:Fe,size:20,variant:`outlined`})})})]})})]})]})})})),Pt,Ft,It,Lt=t((()=>{Ie(),Pt=e(f()),n(),Ft=e(d()),It=(0,Pt.memo)(({value:e,onChange:t})=>{let{t:n}=r(`discover`);return(0,Ft.jsx)(Le,{options:[{label:n(`user.statusFilter.published`),value:`published`},{label:n(`user.statusFilter.unpublished`),value:`unpublished`},{label:n(`user.statusFilter.deprecated`),value:`deprecated`},{label:n(`user.statusFilter.archived`),value:`archived`},{label:n(`user.statusFilter.forked`),value:`forked`},{label:n(`user.statusFilter.favorite`),value:`favorite`}],style:{minWidth:120},value:e,onChange:t})})})),P,F,Rt,I,zt,Bt=t((()=>{E(),D(),_(),je(),He(),P=e(f()),n(),ye(),s(),tt(),Ge(),Xe(),Ve(),Ye(),i(),A(),F=e(d()),Rt=e=>{switch(e){case`published`:return`green`;case`unpublished`:return`orange`;case`deprecated`:return`red`;case`archived`:return`default`;default:return`default`}},I=h(({css:e,cssVar:t})=>({author:e`
      color: ${t.colorTextDescription};
    `,desc:e`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,moreButton:e`
      position: absolute;
      z-index: 10;
      inset-block-start: 12px;
      inset-inline-end: 12px;

      opacity: 0;

      transition: opacity 0.2s;
    `,secondaryDesc:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,statTag:e`
      border-radius: 4px;

      font-family: ${t.fontFamilyCode};
      font-size: 11px;
      color: ${t.colorTextSecondary};

      background: ${t.colorFillTertiary};
    `,title:e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `,wrapper:e`
      &:hover .more-button {
        opacity: 1;
      }
    `})),zt=(0,P.memo)(({avatar:e,backgroundColor:t,title:n,description:i,createdAt:a,category:s,tokenUsage:l,forkCount:u,status:d,identifier:f,isValidated:h})=>{let{t:_}=r([`discover`,`setting`]),v=ve(),{message:y}=me.useApp(),{isOwner:S,onStatusChange:ne}=k(),[,re]=(0,P.useState)(!1),ae=Be(e=>e.createAgent),oe=qe(e=>e.refreshAgentList),T=ze.stringifyUrl({query:{source:`new`},url:o(`/community/agent`,f)},{skipNull:!0}),se=d===`published`,ce=(0,P.useCallback)(()=>{window.open(o(`/community/agent`,f),`_blank`)},[f]),E=(0,P.useCallback)(async()=>{re(!0);try{let e=await Ke.getAgentByMarketIdentifier(f);if(e)v(o(`/agent`,e,`profile`));else{let e=await Ze.getAssistantDetail({identifier:f,source:`new`});if(!e){y.error(_(`setting:myAgents.errors.fetchFailed`));return}let t=await ae({config:{...e.config,avatar:e.avatar,backgroundColor:e.backgroundColor,description:e.description,editorData:e.editorData,marketIdentifier:f,tags:e.tags,title:e.title}});await oe(),t.agentId&&v(o(`/agent`,t.agentId,`profile`))}}catch(e){console.error(`[UserAgentCard] handleEdit error:`,e),y.error(_(`setting:myAgents.errors.editFailed`))}finally{re(!1)}},[f,v,ae,oe,y,_]),ue=(0,P.useCallback)(e=>{ne?.(f,e)},[f,ne]),de=S?[{icon:(0,F.jsx)(b,{icon:xe}),key:`viewDetail`,label:_(`setting:myAgents.actions.viewDetail`),onClick:ce},{icon:(0,F.jsx)(b,{icon:Ce}),key:`edit`,label:_(`setting:myAgents.actions.edit`),onClick:E},{type:`divider`},{icon:(0,F.jsx)(b,{icon:se?Se:Te}),key:`togglePublish`,label:_(se?`setting:myAgents.actions.unpublish`:`setting:myAgents.actions.publish`),onClick:()=>ue(se?`unpublish`:`publish`)},{danger:!0,icon:(0,F.jsx)(b,{icon:Ne}),key:`deprecate`,label:_(`setting:myAgents.actions.deprecate`),onClick:()=>ue(`deprecate`)}]:[];return(0,F.jsxs)(ie,{clickable:!0,className:I.wrapper,height:`100%`,variant:`outlined`,width:`100%`,style:{cursor:`pointer`,overflow:`hidden`,position:`relative`},onClick:()=>v(T),children:[S&&(0,F.jsx)(`div`,{onClick:ee,children:(0,F.jsx)(g,{items:de,children:(0,F.jsx)(`div`,{className:m(`more-button`,I.moreButton),children:(0,F.jsx)(b,{icon:Me,size:16,style:{cursor:`pointer`}})})})}),(0,F.jsx)(p,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:(0,F.jsxs)(p,{horizontal:!0,gap:12,style:{overflow:`hidden`},children:[(0,F.jsx)(le,{avatar:e,background:t||`transparent`,shape:`square`,size:40,style:{flex:`none`}}),(0,F.jsx)(p,{flex:1,gap:2,style:{overflow:`hidden`},children:(0,F.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,F.jsx)(ge,{style:{color:`inherit`,flex:1,overflow:`hidden`},to:T,onClick:e=>e.stopPropagation(),children:(0,F.jsx)(C,{ellipsis:!0,as:`h3`,className:I.title,style:{flex:1},children:n})}),h===!1?(0,F.jsx)(w,{color:`orange`,style:{flexShrink:0,margin:0},children:_(`assistant.underReview`,{defaultValue:`Under Review`})}):S&&d&&(0,F.jsx)(w,{color:Rt(d),style:{flexShrink:0,margin:0},children:_(`setting:myAgents.status.${d}`)})]})})]})}),(0,F.jsxs)(p,{flex:1,gap:12,paddingInline:16,children:[(0,F.jsx)(C,{as:`p`,className:I.desc,ellipsis:{rows:3},children:i}),(0,F.jsx)(te,{children:(0,F.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,F.jsx)(x,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:_(`assistants.tokenUsage`),children:(0,F.jsx)(w,{className:I.statTag,icon:(0,F.jsx)(b,{icon:Ee}),children:c(l)})}),!!(u&&u>0)&&(0,F.jsx)(x,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:_(`fork.forksCount`,{count:u}),children:(0,F.jsx)(w,{className:I.statTag,icon:(0,F.jsx)(b,{icon:we}),children:c(u)})})]})})]}),(0,F.jsx)(p,{horizontal:!0,align:`center`,className:I.footer,justify:`space-between`,padding:16,children:(0,F.jsxs)(p,{horizontal:!0,align:`center`,className:I.secondaryDesc,justify:`space-between`,children:[(0,F.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,F.jsx)(b,{icon:Pe,size:14}),(0,F.jsx)(nt,{className:I.secondaryDesc,date:a})]}),s&&_(`category.assistant.${s}`)]})})]})})})),L,R,Vt,Ht=t((()=>{E(),D(),L=e(f()),n(),ft(),A(),Lt(),Bt(),R=e(d()),Vt=(0,L.memo)(({rows:e=4,pageSize:t=8})=>{let{t:n}=r(`discover`),{agents:i,agentCount:a,forkedAgents:o=[],favoriteAgents:s=[],isOwner:c}=k(),[l,u]=(0,L.useState)(1),[d,f]=(0,L.useState)(`published`),[m,h]=(0,L.useState)(``),g=(0,L.useMemo)(()=>{let e=[...i];if(e=d===`forked`?o:d===`favorite`?s:e.filter(e=>e.status===d),m.trim()){let t=m.toLowerCase();e=e.filter(e=>{let n=e?.title?.toLowerCase()||``,r=e?.description?.toLowerCase()||``;return n.includes(t)||r.includes(t)})}return e},[i,o,d,m]),_=(0,L.useMemo)(()=>{let e=(l-1)*t;return g.slice(e,e+t)},[g,l,t]);if((0,L.useMemo)(()=>{u(1)},[d,m]),i.length===0&&o.length===0)return(0,R.jsx)(pt,{description:n(c?`user.noAgents.ownerDescription`:`user.noAgents`),title:n(`user.noAgents.title`)});let v=g.length>t;return(0,R.jsxs)(p,{gap:16,children:[(0,R.jsxs)(p,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,R.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,R.jsx)(C,{fontSize:16,weight:500,children:n(`user.publishedAgents`)}),a>0&&(0,R.jsx)(w,{children:g.length})]}),c&&(0,R.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,R.jsx)(ae,{allowClear:!0,placeholder:n(`user.searchPlaceholder`),styles:{input:{height:31,width:320}},value:m,onChange:e=>h(e.target.value)}),(0,R.jsx)(It,{value:d,onChange:e=>f(e)})]})]}),(0,R.jsx)(T,{rows:e,width:`100%`,children:_.map((e,t)=>(0,R.jsx)(zt,{...e},e.identifier||t))}),v&&(0,R.jsx)(p,{align:`center`,justify:`center`,children:(0,R.jsx)(pe,{current:l,pageSize:t,showSizeChanger:!1,total:g.length,onChange:e=>u(e)})})]})})})),Ut,z,Wt,B,Gt,Kt=t((()=>{E(),_(),je(),He(),Ut=e(f()),n(),ye(),s(),tt(),i(),A(),z=e(d()),Wt=e=>{switch(e){case`published`:return`green`;case`unpublished`:return`orange`;case`deprecated`:return`red`;case`archived`:return`default`;default:return`default`}},B=h(({css:e,cssVar:t})=>({desc:e`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,moreButton:e`
      position: absolute;
      z-index: 10;
      inset-block-start: 12px;
      inset-inline-end: 12px;

      opacity: 0;

      transition: opacity 0.2s;
    `,secondaryDesc:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,statTag:e`
      border-radius: 4px;

      font-family: ${t.fontFamilyCode};
      font-size: 11px;
      color: ${t.colorTextSecondary};

      background: ${t.colorFillTertiary};
    `,title:e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `,wrapper:e`
      &:hover .more-button {
        opacity: 1;
      }
    `})),Gt=(0,Ut.memo)(({avatar:e,title:t,description:n,createdAt:i,category:a,forkCount:s,installCount:l,identifier:u,memberCount:d,status:f,isValidated:h})=>{let{t:_}=r([`discover`,`setting`]),v=ve(),{isOwner:y,onStatusChange:S}=k(),ne=ze.stringifyUrl({query:{source:`new`},url:o(`/community/group_agent`,u)},{skipNull:!0}),re=f===`published`,ae=(0,Ut.useCallback)(()=>{v(ne)},[ne,v]),oe=(0,Ut.useCallback)(()=>{v(o(`/group`,u,`profile`))},[u,v]),T=(0,Ut.useCallback)(e=>{S?.(u,e,`group`)},[u,S]),se=y?[{icon:(0,z.jsx)(b,{icon:Ce}),key:`edit`,label:_(`setting:myAgents.actions.edit`),onClick:oe},{type:`divider`},{icon:(0,z.jsx)(b,{icon:re?Se:Te}),key:`togglePublish`,label:_(re?`setting:myAgents.actions.unpublish`:`setting:myAgents.actions.publish`),onClick:()=>T(re?`unpublish`:`publish`)},{danger:!0,icon:(0,z.jsx)(b,{icon:Ne}),key:`deprecate`,label:_(`setting:myAgents.actions.deprecate`),onClick:()=>T(`deprecate`)}]:[];return(0,z.jsxs)(ie,{clickable:!0,className:B.wrapper,height:`100%`,variant:`outlined`,width:`100%`,style:{cursor:`pointer`,overflow:`hidden`,position:`relative`},onClick:ae,children:[y&&(0,z.jsx)(`div`,{onClick:ee,children:(0,z.jsx)(g,{items:se,children:(0,z.jsx)(`div`,{className:m(`more-button`,B.moreButton),children:(0,z.jsx)(b,{icon:Me,size:16,style:{cursor:`pointer`}})})})}),(0,z.jsx)(p,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:(0,z.jsxs)(p,{horizontal:!0,gap:12,style:{overflow:`hidden`},children:[(0,z.jsx)(le,{avatar:e,shape:`square`,size:40,style:{flex:`none`}}),(0,z.jsx)(p,{flex:1,gap:2,style:{overflow:`hidden`},children:(0,z.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(ge,{style:{color:`inherit`,flex:1,overflow:`hidden`},to:ne,onClick:ee,children:(0,z.jsx)(C,{ellipsis:!0,as:`h3`,className:B.title,style:{flex:1},children:t})}),h===!1?(0,z.jsx)(w,{color:`orange`,style:{flexShrink:0,margin:0},children:_(`groupAgents.underReview`,{defaultValue:`Under Review`})}):y&&f&&(0,z.jsx)(w,{color:Wt(f),style:{flexShrink:0,margin:0},children:_(`setting:myAgents.status.${f}`)})]})})]})}),(0,z.jsxs)(p,{flex:1,gap:12,paddingInline:16,children:[(0,z.jsx)(C,{as:`p`,className:B.desc,ellipsis:{rows:3},children:n}),(0,z.jsx)(te,{children:(0,z.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[d!==void 0&&d>0&&(0,z.jsx)(x,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:_(`groupAgents.memberCount`,{defaultValue:`Members`}),children:(0,z.jsx)(w,{className:B.statTag,icon:(0,z.jsx)(b,{icon:be}),children:c(d)})}),!!(s&&s>0)&&(0,z.jsx)(x,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:_(`fork.forksCount`,{count:s}),children:(0,z.jsx)(w,{className:B.statTag,icon:(0,z.jsx)(b,{icon:we}),children:c(s)})}),l!==void 0&&l>0&&(0,z.jsx)(x,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:_(`groupAgents.downloads`,{defaultValue:`Downloads`}),children:(0,z.jsx)(w,{className:B.statTag,icon:(0,z.jsx)(b,{icon:ke}),children:c(l)})})]})})]}),(0,z.jsx)(p,{horizontal:!0,align:`center`,className:B.footer,justify:`space-between`,padding:16,children:(0,z.jsxs)(p,{horizontal:!0,align:`center`,className:B.secondaryDesc,justify:`space-between`,children:[(0,z.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,z.jsx)(b,{icon:Pe,size:14}),(0,z.jsx)(nt,{className:B.secondaryDesc,date:i})]}),a&&_(`category.groupAgent.${a}`,{defaultValue:a})]})})]})})})),V,H,qt,Jt=t((()=>{E(),D(),V=e(f()),n(),A(),Lt(),Kt(),H=e(d()),qt=(0,V.memo)(({rows:e=4,pageSize:t=8})=>{let{t:n}=r(`discover`),{agentGroups:i=[],groupCount:a,forkedAgentGroups:o=[],favoriteAgentGroups:s=[],isOwner:c}=k(),[l,u]=(0,V.useState)(1),[d,f]=(0,V.useState)(`published`),[m,h]=(0,V.useState)(``),g=(0,V.useMemo)(()=>{let e=[...i];if(e=d===`forked`?o:d===`favorite`?s:e.filter(e=>e.status===d),m.trim()){let t=m.toLowerCase();e=e.filter(e=>{let n=e?.title?.toLowerCase()||``,r=e?.description?.toLowerCase()||``;return n.includes(t)||r.includes(t)})}return e},[i,o,d,m]),_=(0,V.useMemo)(()=>{let e=(l-1)*t;return g.slice(e,e+t)},[g,l,t]);if((0,V.useMemo)(()=>{u(1)},[d,m]),i.length===0&&o.length===0)return null;let v=g.length>t;return(0,H.jsxs)(p,{gap:16,children:[(0,H.jsxs)(p,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,H.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(C,{fontSize:16,weight:500,children:n(`user.publishedGroups`,{defaultValue:`创作的群组`})}),a>0&&(0,H.jsx)(w,{children:g.length})]}),c&&(0,H.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(ae,{allowClear:!0,placeholder:n(`user.searchPlaceholder`),styles:{input:{height:31,width:320}},value:m,onChange:e=>h(e.target.value)}),(0,H.jsx)(It,{value:d,onChange:e=>f(e)})]})]}),(0,H.jsx)(T,{rows:e,width:`100%`,children:_.map((e,t)=>(0,H.jsx)(Gt,{...e},e.identifier||t))}),v&&(0,H.jsx)(p,{align:`center`,justify:`center`,children:(0,H.jsx)(pe,{current:l,pageSize:t,showSizeChanger:!1,total:g.length,onChange:e=>u(e)})})]})})})),Yt,U,Xt,Zt,Qt=t((()=>{E(),_(),Yt=e(f()),n(),ye(),s(),U=e(d()),Xt=h(({css:e,cssVar:t})=>({author:e`
      color: ${t.colorTextDescription};
    `,desc:e`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,secondaryDesc:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,title:e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `})),Zt=(0,Yt.memo)(({title:e,avatar:t,author:n,description:i,identifier:a,category:s})=>{let{t:c}=r(`discover`),l=ve(),u=o(`/community/plugin`,a);return(0,U.jsxs)(ie,{clickable:!0,"data-testid":`user-plugin-item`,height:`100%`,variant:`outlined`,width:`100%`,style:{overflow:`hidden`,position:`relative`},onClick:(0,Yt.useCallback)(()=>{l(u)},[u,l]),children:[(0,U.jsx)(p,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:(0,U.jsxs)(p,{horizontal:!0,gap:12,title:a,style:{overflow:`hidden`},children:[(0,U.jsx)(le,{avatar:t||e,size:40,style:{flex:`none`}}),(0,U.jsxs)(p,{flex:1,gap:6,style:{overflow:`hidden`},children:[(0,U.jsx)(p,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},children:(0,U.jsx)(ge,{style:{color:`inherit`,overflow:`hidden`},to:u,children:(0,U.jsx)(C,{ellipsis:!0,as:`h2`,className:Xt.title,children:e})})}),(0,U.jsx)(p,{horizontal:!0,align:`center`,className:Xt.author,gap:8,children:n&&(0,U.jsx)(`div`,{children:n})})]})]})}),(0,U.jsx)(p,{flex:1,gap:12,paddingInline:16,children:(0,U.jsx)(C,{as:`p`,className:Xt.desc,ellipsis:{rows:3},children:i})}),(0,U.jsx)(p,{horizontal:!0,align:`center`,className:Xt.footer,justify:`space-between`,padding:16,children:(0,U.jsx)(p,{horizontal:!0,align:`center`,className:Xt.secondaryDesc,gap:8,children:s&&c(`plugins.categories.${s}.name`)})})]})})})),W,G,$t,en=t((()=>{E(),D(),W=e(f()),n(),A(),Qt(),G=e(d()),$t=(0,W.memo)(({rows:e=4,pageSize:t=8})=>{let{t:n}=r(`discover`),{plugins:i=[],isOwner:a}=k(),[o,s]=(0,W.useState)(1),[c,l]=(0,W.useState)(``),u=(0,W.useMemo)(()=>{let e=[...i];if(c.trim()){let t=c.toLowerCase();e=e.filter(e=>{let n=e?.title?.toLowerCase()||``,r=e?.description?.toLowerCase()||``;return n.includes(t)||r.includes(t)})}return e},[i,c]),d=(0,W.useMemo)(()=>{let e=(o-1)*t;return u.slice(e,e+t)},[u,o,t]);if((0,W.useEffect)(()=>{s(1)},[c]),i.length===0)return null;let f=u.length>t;return(0,G.jsxs)(p,{gap:16,children:[(0,G.jsxs)(p,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,G.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,G.jsx)(C,{fontSize:16,weight:500,children:n(`user.plugins`)}),i.length>0&&(0,G.jsx)(w,{children:u.length})]}),a&&i.length>0&&(0,G.jsx)(he.Search,{allowClear:!0,placeholder:n(`user.searchPlaceholder`),style:{width:200},value:c,onChange:e=>l(e.target.value)})]}),(0,G.jsx)(T,{rows:e,width:`100%`,children:d.map((e,t)=>(0,G.jsx)(Zt,{...e},e.identifier||t))}),f&&(0,G.jsx)(p,{align:`center`,justify:`center`,children:(0,G.jsx)(pe,{current:o,pageSize:t,showSizeChanger:!1,total:u.length,onChange:e=>s(e)})})]})})})),tn,K,nn,rn,an=t((()=>{E(),D(),tn=e(f()),n(),Ue(),K=e(d()),nn=/^https?:\/\/github\.com\/[\w-]+\/[\w.-]+\/?$/,rn=(0,tn.memo)(({open:e,onClose:t,onSuccess:n})=>{let{t:i}=r(`discover`),{message:a}=me.useApp(),[o]=de.useForm(),[s,c]=(0,tn.useState)(!1),l=(0,tn.useCallback)(async()=>{try{let e=(await o.validateFields()).gitUrl?.trim();if(!e)return;c(!0),await We.market.socialProfile.submitRepo.mutate({gitUrl:e,type:`skill`}),a.success(i(`user.submitRepoSuccess`)),n?.(),t(),o.resetFields()}catch(e){console.error(`[SubmitRepoModal] Failed to submit:`,e),a.error(e instanceof Error?e.message:i(`user.submitRepoError`))}finally{c(!1)}},[o,a,i,n,t]),u=(0,tn.useCallback)(()=>{o.resetFields(),t()},[o,t]);return(0,K.jsxs)(ce,{centered:!0,cancelText:i(`user.cancel`),confirmLoading:s,okText:i(`user.submit`),open:e,title:!1,width:480,onCancel:u,onOk:l,children:[(0,K.jsx)(C,{strong:!0,fontSize:20,style:{display:`block`,marginBottom:8,marginTop:16},children:i(`user.submitRepoTitle`)}),(0,K.jsx)(C,{style:{display:`block`,marginBottom:16},type:`secondary`,children:i(`user.submitRepoDescription`)}),(0,K.jsx)(de,{form:o,layout:`vertical`,children:(0,K.jsx)(de.Item,{label:i(`user.githubUrl`),name:`gitUrl`,rules:[{required:!0,message:i(`user.githubUrlRequired`)},{pattern:nn,message:i(`user.githubUrlInvalid`)}],children:(0,K.jsx)(he,{placeholder:`https://github.com/username/repo`})})}),(0,K.jsx)(p,{style:{marginTop:8},children:(0,K.jsx)(C,{style:{fontSize:12},type:`secondary`,children:i(`user.submitRepoHint`)})})]})}),rn.displayName=`SubmitRepoModal`})),on,q,J,sn,cn=t((()=>{ne(),E(),_(),je(),on=e(f()),n(),ye(),s(),tt(),Xe(),q=e(d()),J=h(({css:e,cssVar:t})=>({author:e`
      color: ${t.colorTextDescription};
    `,desc:e`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,secondaryDesc:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,title:e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `})),sn=(0,on.memo)(({name:e,icon:t,author:n,description:i,identifier:a,category:s,updatedAt:c,installCount:l,github:u,ratingAvg:d,commentCount:f,resourcesCount:m=0})=>{let{t:h}=r(`discover`),g=ve(),_=o(`/community/skill`,a);return(0,q.jsxs)(ie,{clickable:!0,"data-testid":`user-skill-item`,height:`100%`,variant:`outlined`,width:`100%`,style:{overflow:`hidden`,position:`relative`},onClick:(0,on.useCallback)(()=>{Ze.reportSkillEvent({event:`click`,identifier:a,source:location.pathname}).catch(()=>{}),g(_)},[a,_,g]),children:[(0,q.jsxs)(p,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:[(0,q.jsxs)(p,{horizontal:!0,gap:12,title:a,style:{overflow:`hidden`},children:[(0,q.jsx)(le,{avatar:t||e,size:40,style:{flex:`none`}}),(0,q.jsxs)(p,{flex:1,gap:6,style:{overflow:`hidden`},children:[(0,q.jsx)(p,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},children:(0,q.jsx)(ge,{style:{color:`inherit`,overflow:`hidden`},to:_,children:(0,q.jsx)(C,{ellipsis:!0,as:`h2`,className:J.title,children:e})})}),(0,q.jsxs)(p,{horizontal:!0,align:`center`,className:J.author,gap:8,children:[!!d&&(0,q.jsxs)(p,{horizontal:!0,align:`center`,gap:4,style:{fontSize:13},children:[(0,q.jsx)(b,{fill:S.colorTextDescription,icon:Ae,size:12}),d?.toFixed(1)]}),n&&(0,q.jsx)(`div`,{children:n})]})]})]}),(0,q.jsx)(p,{horizontal:!0,align:`center`,gap:4,children:u?.url&&(0,q.jsx)(`a`,{href:u.url,rel:`noopener noreferrer`,target:`_blank`,onClick:ee,children:(0,q.jsx)(ue,{fill:S.colorTextDescription,icon:re})})})]}),(0,q.jsxs)(p,{flex:1,gap:12,paddingInline:16,children:[(0,q.jsx)(C,{as:`p`,className:J.desc,ellipsis:{rows:3},children:i}),(0,q.jsxs)(p,{horizontal:!0,align:`center`,className:J.secondaryDesc,justify:`space-between`,children:[(0,q.jsx)(w,{icon:(0,q.jsx)(b,{icon:Oe}),size:`small`,variant:`filled`,style:{color:`inherit`,fontSize:`inherit`},children:(m||0)+1}),(0,q.jsx)(p,{horizontal:!0,align:`center`,className:J.secondaryDesc,gap:8,children:s&&h(`skills.categories.${s}.name`)})]})]}),(0,q.jsx)(p,{horizontal:!0,align:`center`,className:J.footer,justify:`space-between`,padding:16,children:(0,q.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,q.jsx)(b,{className:J.secondaryDesc,icon:Pe,size:14}),(0,q.jsx)(nt,{className:J.secondaryDesc,date:c})]})})]})})})),Y,X,ln,un=t((()=>{E(),D(),je(),Y=e(f()),n(),A(),an(),cn(),X=e(d()),ln=(0,Y.memo)(({rows:e=4,pageSize:t=8})=>{let{t:n}=r(`discover`),{skills:i=[],isOwner:a}=k(),[o,s]=(0,Y.useState)(1),[c,l]=(0,Y.useState)(``),[u,d]=(0,Y.useState)(!1),f=(0,Y.useMemo)(()=>{let e=[...i];if(c.trim()){let t=c.toLowerCase();e=e.filter(e=>{let n=e?.name?.toLowerCase()||``,r=e?.description?.toLowerCase()||``;return n.includes(t)||r.includes(t)})}return e},[i,c]),m=(0,Y.useMemo)(()=>{let e=(o-1)*t;return f.slice(e,e+t)},[f,o,t]);if((0,Y.useEffect)(()=>{s(1)},[c]),i.length===0&&!a)return null;let h=f.length>t;return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(p,{gap:16,children:[(0,X.jsxs)(p,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,X.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(C,{fontSize:16,weight:500,children:n(`user.skills`)}),i.length>0&&(0,X.jsx)(w,{children:f.length})]}),(0,X.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[a&&i.length>0&&(0,X.jsx)(he.Search,{allowClear:!0,placeholder:n(`user.searchPlaceholder`),style:{width:200},value:c,onChange:e=>l(e.target.value)}),a&&(0,X.jsx)(fe,{icon:(0,X.jsx)(De,{size:14}),onClick:()=>d(!0),children:n(`user.submitRepo`)})]})]}),i.length>0?(0,X.jsx)(T,{rows:e,width:`100%`,children:m.map((e,t)=>(0,X.jsx)(sn,{...e},e.identifier||t))}):(0,X.jsx)(p,{align:`center`,justify:`center`,style:{minHeight:120,opacity:.5},children:(0,X.jsx)(C,{type:`secondary`,children:n(`user.noSkills`)})}),h&&(0,X.jsx)(p,{align:`center`,justify:`center`,children:(0,X.jsx)(pe,{current:o,pageSize:t,showSizeChanger:!1,total:f.length,onChange:e=>s(e)})})]}),(0,X.jsx)(rn,{open:u,onClose:()=>d(!1)})]})})})),dn,fn,pn,mn=t((()=>{E(),dn=e(f()),Ht(),Jt(),en(),un(),fn=e(d()),pn=(0,dn.memo)(()=>(0,fn.jsxs)(p,{gap:32,children:[(0,fn.jsx)(Vt,{}),(0,fn.jsx)(qt,{}),(0,fn.jsx)(ln,{}),(0,fn.jsx)($t,{})]}))})),hn,gn,_n=t((()=>{Ie(),D(),hn=e(f()),n(),at(),Je(),et(),gn=({onMutate:e}={})=>{let{t}=r(`setting`),{message:n}=me.useApp(),{session:i}=rt(),a=$e(Qe.enableMarketTrustedClient);return{handleStatusChange:(0,hn.useCallback)(async(r,o,s=`agent`)=>{if(!a&&!i?.accessToken){n.error(t(`myAgents.errors.notAuthenticated`));return}let c=`${s}-status-${o}`,l=t(`myAgents.actions.${o}Loading`),u=t(`myAgents.actions.${o}Success`),d=t(`myAgents.actions.${o}Error`);async function f(t,r,a){try{if(n.loading({content:l,key:c}),O.setAccessToken(i.accessToken),a===`group`)switch(r){case`publish`:await O.publishAgentGroup(t);break;case`unpublish`:await O.unpublishAgentGroup(t);break;case`deprecate`:await O.deprecateAgentGroup(t);break}else switch(r){case`publish`:await O.publishAgent(t);break;case`unpublish`:await O.unpublishAgent(t);break;case`deprecate`:await O.deprecateAgent(t);break}n.success({content:u,key:c}),e?.()}catch(e){console.error(`[useUserDetail] ${r} ${a} error:`,e),n.error({content:`${d}: ${e instanceof Error?e.message:`Unknown error`}`,key:c})}}if(o===`deprecate`){Re({cancelText:t(`myAgents.actions.cancel`),content:t(`myAgents.actions.deprecateConfirmContent`),okButtonProps:{danger:!0},okText:t(`myAgents.actions.confirmDeprecate`),onOk:async()=>{await f(r,o,s)},title:t(`myAgents.actions.deprecateConfirmTitle`)});return}await f(r,o,s)},[a,i?.accessToken,n,t,e])}}})),vn,Z,yn,bn=t((()=>{E(),_(),vn=e(f()),ht(),At(),Z=e(d()),yn=(0,vn.memo)(()=>(0,Z.jsxs)(p,{gap:24,width:`100%`,children:[(0,Z.jsx)(kt,{}),(0,Z.jsxs)(p,{gap:16,children:[(0,Z.jsx)(se.Avatar,{shape:`square`,size:64,style:{boxShadow:`0 0 0 4px ${S.colorBgContainer}`,flexShrink:0}}),(0,Z.jsx)(se,{paragraph:{rows:1}})]}),(0,Z.jsx)(mt,{length:4,rows:4})]}))})),Q,$,xn,Sn;t((()=>{Q=e(f()),ye(),at(),lt(),ut(),A(),Nt(),mn(),_n(),bn(),$=e(d()),xn=(0,Q.memo)(({mobile:e})=>{let t=_e(),n=decodeURIComponent(t.slug??``),r=ve(),{checkAndShowClaimableResources:i,getCurrentUserInfo:a,isAuthenticated:o,openProfileSetup:s}=rt(),{data:c,isLoading:l,mutate:u}=ct(e=>e.useUserProfile)({username:n}),d=a(),{data:f}=it(d?.sub),p=o&&!!d&&c?.user?.namespace===f?.namespace,m=(0,Q.useRef)(!1);(0,Q.useEffect)(()=>{p&&!m.current&&(m.current=!0,i(()=>{u()}))},[p,i,u]);let{handleStatusChange:h}=gn({onMutate:u}),g=(0,Q.useCallback)(e=>{let t=c?.user?.userName||c?.user?.namespace;s(n=>{e?.(n),u();let i=n.userName||n.namespace;i&&i!==t&&r(`/community/user/${i}`,{replace:!0})})},[c?.user?.userName,c?.user?.namespace,s,r,u]),_=(0,Q.useMemo)(()=>{if(!c||!c.user)return null;let{user:t,agents:n,agentGroups:r,forkedAgents:i,forkedAgentGroups:a,favoriteAgents:o,favoriteAgentGroups:s,skills:l,plugins:u}=c,d=n.reduce((e,t)=>e+(t.installCount||0),0);return{agentCount:n.length,agentGroups:r||[],agents:n,favoriteAgentGroups:s||[],favoriteAgents:o||[],forkedAgentGroups:a||[],forkedAgents:i||[],groupCount:r?.length||0,isOwner:p,mobile:e,onEditProfile:g,onStatusChange:p?h:void 0,plugins:u||[],skills:l||[],totalInstalls:d,user:t}},[c,p,e,g,h]);return l?(0,$.jsx)(yn,{}):_?(0,$.jsxs)(yt,{config:_,children:[(0,$.jsx)(Mt,{}),(0,$.jsx)(pn,{})]}):(0,$.jsx)(dt,{})}),Sn=(0,Q.memo)(()=>(0,$.jsx)(xn,{mobile:!0}))}))();export{Sn as MobileUserDetailPage,xn as default};