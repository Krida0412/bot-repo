import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{$i as i,Fs as a,Qt as o,Rr as s,lo as c,vl as l,yl as u}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as d,Ba as f,Ha as p,Ia as m,Ma as h,da as g,za as _}from"./imperative-Xfjd337A.js";import{An as v,Is as y,Na as b,Os as ee,cs as x,ir as te,n as S,us as C}from"./es-2ZVhpwv7.js";import{_ as ne,m as re,n as ie,o as ae}from"../vendor/vendor-react-D1dBs3e7.js";import{Sp as w,Xm as oe,dt as T,ec as se,gm as E,ii as ce,in as le}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{t as ue}from"./fast-deep-equal-MG-n9E1a.js";import{$t as de,Gt as D,en as O,in as k,on as fe}from"./agent-BV7ChU6o.js";import{Ga as A,Gr as pe,Ha as me,Wa as he,qr as j}from"./store-DTt7Ili4.js";import{a as ge,b as _e,c as ve,fa as M,h as ye,i as be,o as N,r as xe,s as Se,t as Ce,y as we}from"./onboardingMetrics-CNAzfJc5.js";import{p as Te,s as Ee,t as De}from"./serverConfig-BWsHRSvm.js";import{K as Oe,O as ke,k as Ae,q as je}from"./index-AVlnZl7f.js";import{n as Me,t as Ne}from"./installMarketplaceAgents-DV24EOad.js";import{n as Pe,t as Fe}from"./config-B8-PlxCB.js";import{n as Ie}from"./ModeSwitch-Bhg-u2vM.js";import{a as Le,i as Re,n as ze,o as Be,r as Ve,t as He}from"./LobeMessage-bZB2IuDc.js";var Ue,We,Ge=t((()=>{ve(),Ue={business:M.BusinessStrategy,coding:M.Engineering,creator:M.CreatorEconomy,design:M.DesignCreative,education:M.LearningResearch,"finance-legal":M.FinanceLegal,hr:M.PeopleHR,investing:M.FinanceLegal,marketing:M.Marketing,operations:M.Operations,personal:M.PersonalLife,product:M.ProductManagement,sales:M.SalesCustomer,writing:M.ContentCreation},We=e=>{let t=new Set,n=[];for(let r of e){let e=Ue[r];e&&!t.has(e)&&(t.add(e),n.push(e))}return n}})),Ke,P,F=t((()=>{h(),Ke=p`
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
`,P=m(({css:e,cssVar:t})=>({card:e`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: flex-start;

    padding-block: 12px;
    padding-inline: 14px;
    border: 1px solid ${t.colorFillSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorBgContainer};

    transition:
      border-color ${t.motionDurationMid},
      background ${t.motionDurationMid};

    &:hover {
      border-color: ${t.colorPrimaryHover};
    }

    &:focus-visible {
      outline: 2px solid ${t.colorPrimary};
      outline-offset: 2px;
    }
  `,cardBody:e`
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 2px;

    min-width: 0;
  `,cardCheck:e`
    flex: none;
    color: ${t.colorPrimary};
  `,cardCheckHidden:e`
    visibility: hidden;
  `,cardDescription:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    font-size: 12px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
  `,cardSelected:e`
    border-color: ${t.colorPrimary};
    background: ${t.colorPrimaryBg};

    &:hover {
      border-color: ${t.colorPrimary};
    }
  `,cardTitle:e`
    overflow: hidden;

    font-size: 14px;
    font-weight: 600;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,empty:e`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 160px;
    padding: 24px;

    font-size: 13px;
    color: ${t.colorTextTertiary};
    text-align: center;
  `,filterBar:e`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  `,footer:e`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-start: 8px;
  `,footerActions:e`
    display: flex;
    gap: 8px;
    align-items: center;
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 10px;
    align-content: start;
  `,pill:e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 999px;

    font-size: 13px;
    color: ${t.colorTextSecondary};
    white-space: nowrap;

    background: transparent;

    transition:
      border-color ${t.motionDurationMid},
      background ${t.motionDurationMid},
      color ${t.motionDurationMid};

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillTertiary};
    }

    &:focus-visible {
      outline: 2px solid ${t.colorPrimary};
      outline-offset: 2px;
    }
  `,pillActive:e`
    border-color: ${t.colorFillSecondary};
    font-weight: 500;
    color: ${t.colorText};
    background: ${t.colorFillSecondary};

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,scrollArea:e`
    overflow-y: auto;
    overscroll-behavior: contain;

    max-height: min(46vh, 360px);
    margin-inline: -4px;
    padding-inline: 4px;
  `,skeletonAvatar:e`
    flex: none;

    width: 36px;
    height: 36px;
    border-radius: ${t.borderRadius};

    background: ${t.colorFillTertiary};

    animation: ${Ke} 1.5s ease-in-out infinite;
  `,skeletonCard:e`
    display: flex;
    gap: 12px;

    padding-block: 12px;
    padding-inline: 14px;
    border: 1px solid ${t.colorFillSecondary};
    border-radius: ${t.borderRadiusLG};
  `,skeletonLine:e`
    height: 10px;
    border-radius: ${t.borderRadius};
    background: ${t.colorFillTertiary};
    animation: ${Ke} 1.5s ease-in-out infinite;
  `,skeletonPill:e`
    width: 72px;
    height: 28px;
    border-radius: 999px;

    background: ${t.colorFillTertiary};

    animation: ${Ke} 1.5s ease-in-out infinite;
  `}))})),I,L,qe,Je=t((()=>{S(),h(),T(),I=e(u()),F(),L=e(l()),qe=(0,I.memo)(({onToggle:e,selected:t,template:n})=>{let r=(0,I.useCallback)(()=>e(n.id),[e,n.id]),i=(0,I.useCallback)(t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e(n.id))},[e,n.id]);return(0,L.jsxs)(`div`,{"aria-pressed":t,className:f(P.card,t&&P.cardSelected),role:`button`,tabIndex:0,onClick:r,onKeyDown:i,children:[(0,L.jsx)(C,{avatar:n.avatar,shape:`square`,size:36}),(0,L.jsxs)(`div`,{className:P.cardBody,children:[(0,L.jsx)(`div`,{className:P.cardTitle,children:n.title}),n.description&&(0,L.jsx)(`div`,{className:P.cardDescription,children:n.description})]}),(0,L.jsx)(g,{className:f(P.cardCheck,!t&&P.cardCheckHidden),icon:E,size:16})]})}),qe.displayName=`AgentCard`})),Ye,Xe=t((()=>{ve(),Ye={[M.BusinessStrategy]:`agentMarketplace.category.businessStrategy`,[M.ContentCreation]:`agentMarketplace.category.contentCreation`,[M.CreatorEconomy]:`agentMarketplace.category.creatorEconomy`,[M.DesignCreative]:`agentMarketplace.category.designCreative`,[M.Engineering]:`agentMarketplace.category.engineering`,[M.FinanceLegal]:`agentMarketplace.category.financeLegal`,[M.LearningResearch]:`agentMarketplace.category.learningResearch`,[M.Marketing]:`agentMarketplace.category.marketing`,[M.Operations]:`agentMarketplace.category.operations`,[M.PeopleHR]:`agentMarketplace.category.peopleHR`,[M.PersonalLife]:`agentMarketplace.category.personalLife`,[M.ProductManagement]:`agentMarketplace.category.productManagement`,[M.SalesCustomer]:`agentMarketplace.category.salesCustomer`}})),Ze,Qe,$e,et=t((()=>{h(),Ze=e(u()),n(),Xe(),F(),Qe=e(l()),$e=(0,Ze.memo)(({active:e,allLabel:t,categories:n,onChange:i})=>{let{t:a}=r(`tool`),o=(t,n)=>(0,Qe.jsx)(`button`,{"aria-pressed":e===t,className:f(P.pill,e===t&&P.pillActive),type:`button`,onClick:()=>i(t),children:n},t);return(0,Qe.jsxs)(`div`,{className:P.filterBar,children:[o(`all`,t),n.map(e=>o(e,a(Ye[e])))]})}),$e.displayName=`CategoryFilter`})),tt,R,nt,rt,it,at=t((()=>{tt=e(u()),F(),R=e(l()),nt=6,rt=4,it=(0,tt.memo)(()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{className:P.filterBar,children:Array.from({length:rt}).map((e,t)=>(0,R.jsx)(`div`,{className:P.skeletonPill},t))}),(0,R.jsx)(`div`,{className:P.grid,children:Array.from({length:nt}).map((e,t)=>(0,R.jsxs)(`div`,{className:P.skeletonCard,children:[(0,R.jsx)(`div`,{className:P.skeletonAvatar}),(0,R.jsxs)(`div`,{style:{display:`flex`,flex:1,flexDirection:`column`,gap:8,paddingTop:4},children:[(0,R.jsx)(`div`,{className:P.skeletonLine,style:{width:`60%`}}),(0,R.jsx)(`div`,{className:P.skeletonLine,style:{width:`90%`}})]})]},t))})]})),it.displayName=`AgentPickerSkeleton`})),z,B,ot,st,ct=t((()=>{ve(),S(),h(),T(),z=e(u()),n(),ie(),Le(),Ne(),Ce(),O(),D(),ze(),Ge(),Je(),et(),at(),F(),B=e(l()),ot=[],st=(0,z.memo)(({onBack:e})=>{let{t}=r(`onboarding`),{t:n}=r(`tool`),i=re(),[a]=ne(),o=a.get(`entry`)===`skip`,s=!o,c=o?`agent`:`classic`,l=k(e=>e.finishOnboarding),u=k(de.interests),f=(0,z.useMemo)(()=>We(u),[u]),[p]=(0,z.useState)(()=>Math.random().toString(36).slice(2)),{data:m=ot,error:h,isLoading:g}=Be(),v=(0,z.useMemo)(()=>ye(m,f),[m,f]),y=(0,z.useMemo)(()=>{let e=new Set,t=[];for(let n of v)e.has(n.category)||(e.add(n.category),t.push(n.category));return t},[v]),[b,te]=(0,z.useState)(`all`),S=(0,z.useMemo)(()=>b===`all`?v:v.filter(e=>e.category===b),[b,v]),[C,ie]=(0,z.useState)(()=>new Set),ae=(0,z.useCallback)(e=>{ie(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),[w,oe]=(0,z.useState)(),T=(0,z.useRef)(!1),se=(0,z.useRef)(!1);(0,z.useEffect)(()=>{se.current||(se.current=!0,ge({categoryHints:f,requestId:p}))},[f,p]);let E=(0,z.useCallback)(async(e,t)=>{await l(),N({action:e,entry:o?`agent_skip`:`classic`,flow:c,selectedCount:t,step:`agentpicker`,stepIndex:4}),xe({flow:c,targetUrl:`/`}),i(`/`)},[c,l,o,i]),ce=(0,z.useCallback)(async()=>{T.current||(T.current=!0,oe(`skip`),await E(`skip`,0))},[E]),ue=(0,z.useCallback)(async()=>{if(T.current||C.size===0)return;T.current=!0,oe(`continue`);let e=[...C];be({categoryHints:f,requestId:p,selectedTemplateIds:e});try{await Me(e)}catch(e){console.error(`[AgentPickerStep] install failed`,e)}await E(`continue`,e.length)},[f,E,p,C]),D=(0,z.useCallback)(()=>{T.current||e()},[e]),O=g&&m.length===0,fe=!g&&S.length===0;return(0,B.jsxs)(d,{gap:16,children:[(0,B.jsx)(He,{sentences:[t(`agentPicker.title`),t(`agentPicker.title2`),t(`agentPicker.title3`)]}),(0,B.jsx)(ee,{fontSize:14,type:`secondary`,children:t(`agentPicker.subtitle`)}),O?(0,B.jsx)(it,{}):fe?(0,B.jsx)(`div`,{className:P.empty,children:n(h?`agentMarketplace.picker.failedToLoad`:`agentMarketplace.picker.empty`)}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)($e,{active:b,allLabel:t(`agentPicker.allCategories`),categories:y,onChange:te}),(0,B.jsx)(`div`,{className:P.scrollArea,children:(0,B.jsx)(`div`,{className:P.grid,children:S.map(e=>(0,B.jsx)(qe,{selected:C.has(e.id),template:e,onToggle:ae},e.id))})})]}),(0,B.jsxs)(`div`,{className:P.footer,children:[s?(0,B.jsx)(x,{disabled:!!w,icon:le,style:{color:_.colorTextDescription},type:`text`,onClick:D,children:t(`back`)}):(0,B.jsx)(`span`,{}),(0,B.jsxs)(`div`,{className:P.footerActions,children:[(0,B.jsx)(x,{disabled:!!w,type:`text`,onClick:()=>void ce(),children:t(`agentPicker.skip`)}),(0,B.jsx)(x,{disabled:C.size===0||w===`skip`,loading:w===`continue`,type:`primary`,onClick:()=>void ue(),children:`${t(`agentPicker.continue`)} (${C.size})`})]})]})]})}),st.displayName=`AgentPickerStep`})),V,H,lt,ut=t((()=>{we(),S(),h(),T(),V=e(u()),n(),O(),D(),ze(),H=e(l()),lt=(0,V.memo)(({onBack:e,onNext:t})=>{let{t:n}=r(`onboarding`),i=k(de.fullName),a=k(e=>e.updateFullName),[o,s]=(0,V.useState)(i||``),[c,l]=(0,V.useState)(!1),u=(0,V.useRef)(!1),f=(0,V.useCallback)(()=>{u.current||(u.current=!0,l(!0),o.trim()&&a(o.trim()),t())},[o,a,t]),p=(0,V.useCallback)(()=>{u.current||(u.current=!0,l(!0),e())},[e]);return(0,H.jsxs)(d,{gap:16,children:[(0,H.jsx)(He,{sentences:[n(`username.title`),n(`username.title2`),n(`username.title3`)]}),(0,H.jsx)(d,{horizontal:!0,align:`center`,gap:12,children:(0,H.jsx)(b,{autoFocus:!0,placeholder:n(`username.placeholder`),size:`large`,title:n(`username.hint`),value:o,prefix:(0,H.jsx)(g,{color:_.colorTextDescription,icon:ce,size:32,style:{marginInline:8}}),styles:{input:{fontSize:28,fontWeight:`bolder`}},suffix:(0,H.jsx)(_e,{disabled:!o?.trim()||c,type:`primary`,style:{zoom:1.5},onClick:f}),onChange:e=>s(e.target.value),onPressEnter:f})}),(0,H.jsx)(d,{horizontal:!0,justify:`flex-start`,style:{marginTop:32},children:(0,H.jsx)(x,{disabled:c,icon:le,type:`text`,style:{color:_.colorTextDescription},onClick:p,children:n(`back`)})})]})}),lt.displayName=`FullNameStep`})),U,W,dt,ft=t((()=>{s(),S(),h(),T(),U=e(u()),n(),O(),D(),ze(),Pe(),W=e(l()),dt=(0,U.memo)(({onBack:e,onNext:t})=>{let{t:n}=r(`onboarding`),i=k(de.interests),a=k(e=>e.updateInterests),[o,s]=(0,U.useState)(()=>c(i)),[l,u]=(0,U.useState)(``),[f,p]=(0,U.useState)(!1),[m,h]=(0,U.useState)(!1),v=(0,U.useRef)(!1),te=(0,U.useMemo)(()=>Fe.map(e=>({...e,label:n(`interests.area.${e.key}`)})),[n]),S=(0,U.useCallback)(e=>{s(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),C=(0,U.useCallback)(()=>{let e=l.trim();e&&!o.includes(e)&&(s(t=>[...t,e]),u(``))},[l,o]),ne=(0,U.useCallback)(()=>{if(v.current)return;v.current=!0,h(!0);let e=[...o],n=l.trim();f&&n&&e.push(n),a(c(e)),t()},[o,l,f,a,t]),re=(0,U.useCallback)(()=>{v.current||(v.current=!0,h(!0),e())},[e]);return(0,W.jsxs)(d,{gap:16,children:[(0,W.jsx)(He,{sentences:[n(`interests.title`),n(`interests.title2`),n(`interests.title3`)]}),(0,W.jsxs)(d,{horizontal:!0,align:`center`,gap:12,wrap:`wrap`,children:[te.map(e=>(0,W.jsxs)(y,{clickable:!0,horizontal:!0,gap:8,padding:12,variant:`outlined`,style:o.includes(e.key)?{background:_.colorFillSecondary,borderColor:_.colorFillSecondary}:{},onClick:()=>S(e.key),children:[(0,W.jsx)(g,{color:_.colorTextSecondary,icon:e.icon,size:16}),(0,W.jsx)(ee,{fontSize:15,weight:500,children:e.label})]},e.key)),(0,W.jsxs)(y,{clickable:!0,horizontal:!0,gap:8,padding:12,variant:`outlined`,style:f?{background:_.colorFillSecondary,borderColor:_.colorFillSecondary}:{},onClick:()=>p(!f),children:[(0,W.jsx)(g,{color:_.colorTextSecondary,icon:oe,size:16}),(0,W.jsx)(ee,{fontSize:15,weight:500,children:n(`interests.area.other`)})]})]}),f&&(0,W.jsx)(b,{autoFocus:!0,placeholder:n(`interests.placeholder`),size:`large`,title:n(`interests.hint`),value:l,prefix:(0,W.jsx)(g,{color:_.colorTextDescription,icon:oe,style:{marginInline:8}}),onChange:e=>u(e.target.value),onPressEnter:C}),(0,W.jsxs)(d,{horizontal:!0,justify:`space-between`,style:{marginTop:32},children:[(0,W.jsx)(x,{disabled:m,icon:le,style:{color:_.colorTextDescription},type:`text`,onClick:re,children:n(`back`)}),(0,W.jsx)(x,{disabled:m,type:`primary`,onClick:ne,children:n(`next`)})]})]})}),dt.displayName=`InterestsStep`})),G,pt,mt,ht,gt,_t=t((()=>{G=e(u()),pe(),me(),pt=1e3,mt=15e3,ht=4e3,gt=({serverStatus:e})=>{let[t,n]=(0,G.useState)(!1),r=(0,G.useRef)(null),i=(0,G.useRef)(null),a=(0,G.useRef)(null),o=(0,G.useRef)(null),s=j(e=>e.refreshKlavisServerTools),c=(0,G.useCallback)(()=>{i.current&&=(clearInterval(i.current),null),a.current&&=(clearInterval(a.current),null),o.current&&=(clearTimeout(o.current),null),r.current=null,n(!1)},[]);(0,G.useEffect)(()=>()=>{c()},[c]),(0,G.useEffect)(()=>{e===A.CONNECTED&&t&&c()},[e,t,c]);let l=(0,G.useCallback)((e,t=mt)=>{a.current||(a.current=setInterval(async()=>{try{await s(e)}catch(e){console.info(`[Klavis] Polling check (expected during auth):`,e)}},pt),o.current=setTimeout(()=>{a.current&&=(clearInterval(a.current),null),n(!1)},t))},[s]),u=(0,G.useCallback)((e,t)=>{i.current=setInterval(()=>{try{e.closed&&(i.current&&=(clearInterval(i.current),null),r.current=null,l(t,ht))}catch{i.current&&=(clearInterval(i.current),null),l(t)}},500)},[l]);return{isWaitingAuth:t,openOAuthWindow:(0,G.useCallback)((e,t)=>{c(),n(!0);let i=window.open(e,`_blank`,`width=600,height=700`);i?(r.current=i,u(i,t)):l(t)},[c,u,l])}}})),vt,yt,bt=t((()=>{vt=e(u()),pe(),O(),D(),yt=({identifier:e,serverName:t,server:n,onAuthRequired:r})=>{let[i,a]=(0,vt.useState)(!1),o=k(de.userId),s=j(e=>e.createKlavisServer),c=j(e=>e.refreshKlavisServerTools),l=k(e=>e.toggleInboxAgentDefaultPlugin);return{handleConnect:async()=>{if(!(!o||n)){a(!0);try{let n=await s({identifier:e,serverName:t,userId:o});if(n){let e=n.identifier;await l(e),n.isAuthenticated?await c(n.identifier):n.oauthUrl&&r?.(n.oauthUrl,n.identifier)}}catch(e){console.error(`[Klavis] Failed to connect server:`,e)}finally{a(!1)}}},isConnecting:i}}})),xt,St,Ct,wt=t((()=>{S(),h(),xt=e(u()),St=e(l()),Ct=(0,xt.memo)(({icon:e,label:t})=>typeof e==`string`?(0,St.jsx)(C,{alt:t,avatar:e,shape:`square`,size:24,style:{flex:`none`}}):(0,St.jsx)(g,{fill:_.colorText,icon:e,size:24})),Ct.displayName=`ServerIcon`})),Tt,Et,Dt,Ot=t((()=>{S(),h(),T(),Tt=e(u()),n(),me(),Et=e(l()),Dt=(0,Tt.memo)(({isConnecting:e,isWaitingAuth:t,server:n})=>{let{t:i}=r(`setting`);if(e||t)return(0,Et.jsx)(g,{spin:!0,color:_.colorTextDescription,icon:se});if(!n)return null;switch(n.status){case A.CONNECTED:return(0,Et.jsx)(g,{color:_.colorSuccess,icon:E});case A.PENDING_AUTH:return null;case A.ERROR:return(0,Et.jsx)(g,{color:_.colorError,icon:w,title:i(`tools.klavis.error`,{defaultValue:`Error`})});default:return null}}),Dt.displayName=`ServerStatusControl`})),kt,K,At,jt=t((()=>{S(),h(),kt=e(u()),me(),_t(),bt(),wt(),Ot(),K=e(l()),At=(0,kt.memo)(({identifier:e,label:t,server:n,serverName:r,icon:i})=>{let{isWaitingAuth:a,openOAuthWindow:o}=gt({serverStatus:n?.status}),{isConnecting:s,handleConnect:c}=yt({identifier:e,onAuthRequired:o,server:n,serverName:r}),l=n?.status===A.CONNECTED,u=n?.status===A.PENDING_AUTH,f=!l;return(0,K.jsxs)(y,{horizontal:!0,align:`center`,clickable:f,gap:8,justify:`space-between`,padding:12,variant:`outlined`,style:l?{background:_.colorSuccessBg,borderColor:_.colorSuccessBorder}:{},onClick:()=>{l||(n?u&&n.oauthUrl&&o(n.oauthUrl,n.identifier):c())},children:[(0,K.jsxs)(d,{horizontal:!0,align:`center`,flex:1,gap:12,style:{overflow:`hidden`},children:[(0,K.jsx)(Ct,{icon:i,label:t}),(0,K.jsx)(ee,{ellipsis:!0,children:t})]}),(0,K.jsx)(Dt,{isConnecting:s,isWaitingAuth:a,server:n})]})}),At.displayName=`KlavisServerItem`})),Mt,Nt,Pt,Ft,It=t((()=>{S(),Mt=e(ue()),Nt=e(u()),s(),pe(),me(),jt(),Pt=e(l()),Ft=(0,Nt.memo)(()=>{let e=j(he.getServers,Mt.default);j(e=>e.useFetchUserKlavisServers)(!0);let t=t=>e.find(e=>e.identifier===t);return(0,Pt.jsx)(v,{height:`33vh`,offset:8,size:12,children:(0,Pt.jsx)(te,{gap:8,maxItemWidth:120,rows:2,children:i.map(e=>(0,Pt.jsx)(At,{icon:e.icon,identifier:e.identifier,label:e.label,server:t(e.identifier),serverName:e.serverName},e.identifier))})})}),Ft.displayName=`KlavisServerList`})),q,J,Lt,Rt=t((()=>{S(),h(),T(),q=e(u()),n(),ze(),It(),J=e(l()),Lt=(0,q.memo)(({onBack:e,onNext:t})=>{let{t:n}=r(`onboarding`),[i,a]=(0,q.useState)(!1),o=(0,q.useRef)(!1),s=(0,q.useCallback)(()=>{o.current||(o.current=!0,a(!0),t())},[t]),c=(0,q.useCallback)(()=>{o.current||(o.current=!0,a(!0),e())},[e]);return(0,J.jsxs)(d,{gap:16,children:[(0,J.jsx)(He,{sentences:[n(`proSettings.connectors.title`)]}),(0,J.jsx)(Ft,{}),(0,J.jsxs)(d,{horizontal:!0,align:`center`,justify:`space-between`,style:{marginTop:16},children:[(0,J.jsx)(x,{disabled:i,icon:le,type:`text`,style:{color:_.colorTextDescription},onClick:c,children:n(`back`)}),(0,J.jsx)(x,{disabled:i,style:{minWidth:120},type:`primary`,onClick:s,children:n(`next`)})]})]})}),Lt.displayName=`ProSettingsStep`})),Y,X,Z,Q,$,zt,Bt,Vt=t((()=>{o(),S(),Y=e(u()),ie(),je(),Ie(),ke(),Le(),Re(),ct(),ut(),ft(),Rt(),Ce(),De(),O(),D(),a(),X=e(l()),Z=2,Q=3,$={1:{flow:`classic`,step:`fullname`,stepIndex:1},[Z]:{flow:`classic`,step:`interests`,stepIndex:2},[Q]:{flow:`classic`,step:`prosettings`,stepIndex:3},4:{flow:`classic`,step:`agentpicker`,stepIndex:4}},zt=e=>$[e],Bt=(0,Y.memo)(()=>{let e=re(),t=Ae(),[n,r,i,a,o]=k(e=>[e.isUserStateInit,fe.commonStepsCompleted(e),fe.currentStep(e),e.goToNextStep,e.goToPreviousStep]),s=Ee(Te.enableKlavis),c=Ee(e=>e.serverConfigInit),l=c&&!s,u=(0,Y.useRef)(new Set),f=(0,Y.useRef)(new Set);Be(n&&r);let p=(0,Y.useCallback)(()=>{e(`/onboarding?step=2`,{replace:!0})},[e]);(0,Y.useEffect)(()=>{if(!n||!r||i!==Q||!l)return;let e=$[Q];u.current.has(e.step)||(u.current.add(e.step),N({...e,action:`auto_skip`,skipped:!0}),a())},[r,i,a,n,l]),(0,Y.useEffect)(()=>{if(!n||!r||i===Q&&(!c||l))return;let e=zt(i);!e||f.current.has(e.step)||(f.current.add(e.step),Se(e))},[r,i,n,c,l]);let m=(0,Y.useCallback)(()=>{N($[1]),a()},[a]),h=(0,Y.useCallback)(()=>{if(N(l?{...$[Z],skippedNextStep:`prosettings`}:$[Z]),l){a(),a();return}a()},[a,l]),g=(0,Y.useCallback)(()=>{N($[Q]),a()},[a]),_=(0,Y.useCallback)(()=>{if(l){o(),o();return}o()},[o,l]);return n?r?(0,X.jsx)(Ve,{children:(0,X.jsxs)(d,{gap:24,paddingInline:t?16:0,style:{maxWidth:i===4?780:600,width:`100%`},children:[!1,(()=>{switch(i){case 1:return(0,X.jsx)(lt,{onBack:p,onNext:m});case Z:return(0,X.jsx)(dt,{onBack:o,onNext:h});case Q:return c?l?null:(0,X.jsx)(Lt,{onBack:o,onNext:g}):(0,X.jsx)(Oe,{debugId:`ClassicOnboarding/serverConfig`});case 4:return(0,X.jsx)(st,{onBack:_});default:return null}})()]})}):(0,X.jsx)(ae,{replace:!0,to:`/onboarding`}):(0,X.jsx)(Oe,{debugId:`ClassicOnboarding`})}),Bt.displayName=`ClassicOnboardingPage`})),Ht;t((()=>{Vt(),Ht=Bt}))();export{Ht as default};