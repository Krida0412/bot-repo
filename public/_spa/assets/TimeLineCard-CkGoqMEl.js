import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{qt as n}from"../i18n/i18n-zh-CN-CbR0_Rok.js";import{dt as r,pt as i}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{Js as a,Ws as o,cn as s,in as c,vl as l,yl as u}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as d,Ba as f,Ia as p,Ma as m,Oa as ee,Wa as te,da as ne,za as h}from"./imperative-Xfjd337A.js";import{Bs as re,Hs as ie,Is as g,L as ae,N as oe,Os as _,Rs as se,Vs as ce,Ws as le,ha as v,ir as ue,j as de,k as y,n as b,ws as fe,zs as pe}from"./es-2ZVhpwv7.js";import{Bm as me,Hc as he,Ig as ge,Jl as _e,Mi as ve,dt as x}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{i as S,t as ye}from"./userMemory-Lfaxk2Nv.js";import{i as be,n as xe,t as Se}from"./dist-DmoxVyn9.js";import{F as Ce,P as we}from"./index-AVlnZl7f.js";import{n as Te,t as Ee}from"./useActivityTime-DwaVDXbp.js";import{r as De,t as Oe}from"./EditorModal-DaAxFT5D.js";import{n as ke,t as Ae}from"./NavHeader-CNur_1ZZ.js";import{n as je,t as Me}from"./RightPanel--aNiO5Wt.js";import{n as Ne,t as Pe}from"./ToggleRightPanelButton-DKGbSK6x.js";import{n as Fe,r as Ie}from"./useScrollParent-IVVoJcWP.js";var Le,Re,ze,Be=t((()=>{Le=e(u()),De(),ye(),c(),Re=e(l()),ze=(0,Le.memo)(()=>{let e=S(e=>e.editingMemoryId),t=S(e=>e.editingMemoryContent),n=S(e=>e.editingMemoryLayer),r=S(e=>e.clearEditingMemory),i=S(e=>e.updateMemory),a={activity:s.Activity,context:s.Context,experience:s.Experience,identity:s.Identity,preference:s.Preference};return(0,Re.jsx)(Oe,{open:!!e,value:t,onCancel:r,onConfirm:async t=>{!e||!n||await i(e,t,a[n])}})})})),Ve,C,He,Ue=t((()=>{b(),x(),Ve=e(u()),r(),C=e(l()),He=(0,Ve.memo)(({searchValue:e,onSearch:t,sortValue:n,onSortChange:r,sortOptions:a})=>{let{t:o}=i(`memory`);return(0,C.jsxs)(d,{horizontal:!0,align:`center`,gap:12,children:[(0,C.jsx)(oe,{allowClear:!0,defaultValue:e,placeholder:o(`filter.search`),prefix:(0,C.jsx)(ve,{size:16}),style:{flex:1},onSearch:e=>t(e),onInputChange:e=>{e||t(e)}}),a&&a.length>0&&r&&(0,C.jsx)(de,{options:a,prefix:(0,C.jsx)(ne,{icon:ge,style:{marginRight:4}}),style:{minWidth:150},value:n,onChange:e=>r(e)})]})})})),We,w,Ge,T,E=t((()=>{b(),m(),We=e(u()),w=e(l()),Ge=p(({css:e,cssVar:t})=>({card:e`
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 16px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorBgContainer};
  `})),T=(0,We.memo)(({viewMode:e,rows:t=3})=>e===`timeline`?(0,w.jsx)(d,{gap:24,paddingBlock:24,style:{paddingLeft:32},children:Array.from({length:3}).map((e,t)=>(0,w.jsxs)(d,{gap:8,children:[(0,w.jsx)(y.Title,{active:!0,fontSize:18,lineHeight:1.4,width:`30%`}),(0,w.jsx)(y.Paragraph,{active:!0,rows:4,style:{marginBottom:0}})]},t))}):(0,w.jsx)(ue,{gap:12,maxItemWidth:240,paddingBlock:8,rows:t,children:Array.from({length:6}).map((e,t)=>(0,w.jsxs)(d,{className:Ge.card,children:[(0,w.jsx)(y.Title,{active:!0,fontSize:16,lineHeight:1.4,width:`80%`}),(0,w.jsx)(y.Paragraph,{active:!0,rows:5,style:{marginBottom:0}}),(0,w.jsxs)(d,{horizontal:!0,gap:8,children:[(0,w.jsx)(y.Button,{active:!0,size:`small`,style:{height:20,width:60}}),(0,w.jsx)(y.Button,{active:!0,size:`small`,style:{height:20,width:50}})]})]},t))}))})),Ke,D,qe,Je=t((()=>{b(),x(),Ke=e(u()),r(),a(),D=e(l()),qe=(0,Ke.memo)(({value:e,onChange:t})=>{let{t:n}=i(`memory`);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(fe,{active:e===`timeline`,icon:me,size:o,title:n(`viewMode.timeline`),onClick:()=>t(`timeline`)}),(0,D.jsx)(fe,{active:e===`grid`,icon:he,size:o,title:n(`viewMode.masonry`),onClick:()=>t(`grid`)})]})})}));function Ye(e,t=0,n=100){if(t>n)return 0;let r=0;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);r=(r<<5)-r+n,r&=r}r=Math.abs(r);let i=n-t+1;return t+r%i}var Xe,O,Ze=t((()=>{m(),ce(),Xe=e(u()),O=e=>{let t=te(),n=[t.volcano,t.orange,t.gold,t.green,t.cyan,t.blue,t.geekblue,t.purple,t.magenta,t.pink];return(0,Xe.useMemo)(()=>{if(!e)return;let r=Ye(e,0,n.length-1),i=re(t.isDarkMode?.25:.5,ie(t.isDarkMode?.06:.05,n[r],t.isDarkMode?t.colorBgContainer:t.colorBgLayout));return{backgroundColor:i,backgroundTextColor:t.isDarkMode?pe(.5,i):se(.5,i),color:t.isDarkMode?pe(.4,i):se(.6,i),shadowColor:le(se(.6,i),t.isDarkMode?.5:.2)}},[e,n,t])}})),Qe,$e,k,et=t((()=>{b(),Qe=e(u()),Ze(),$e=e(l()),k=(0,Qe.memo)(({cate:e})=>{let t=O(e);return(0,$e.jsx)(v,{size:`large`,style:{background:t?.backgroundColor,borderRadius:16,color:t?.color,flex:`none`,fontWeight:500},children:e?.toUpperCase()||`CHORE`})})})),tt,A,nt,rt=t((()=>{b(),tt=e(u()),A=e(l()),nt=(0,tt.memo)(()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(y.Button,{active:!0,shape:`round`,size:`small`,width:64}),(0,A.jsx)(y.Title,{active:!0,fontSize:20,lineHeight:1.4}),(0,A.jsx)(y.Tags,{active:!0,count:2}),(0,A.jsxs)(d,{horizontal:!0,align:`center`,gap:16,justify:`space-between`,children:[(0,A.jsx)(y.Tags,{active:!0}),(0,A.jsx)(y.Tags,{active:!0})]}),(0,A.jsx)(y.Paragraph,{active:!0,fontSize:16,rows:6})]}))})),it,j,at,ot=t((()=>{b(),it=e(u()),ke(),je(),Ne(),j=e(l()),at=(0,it.memo)(({children:e,style:t,header:n,...r})=>(0,j.jsxs)(Me,{defaultWidth:480,maxWidth:640,minWidth:300,children:[(0,j.jsx)(Ae,{...n,left:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Pe,{}),n?.left]})}),(0,j.jsx)(d,{flex:1,gap:16,height:`100%`,paddingInline:16,style:{minWidth:300,overflowY:`auto`,paddingBottom:64,paddingTop:16,...t},...r,children:e})]}))})),st,M,N,P=t((()=>{b(),m(),x(),st=e(u()),M=e(l()),N=(0,st.memo)(({hashTags:e})=>{if(!(!e||e.length===0))return e&&e.length>0&&(0,M.jsx)(d,{horizontal:!0,wrap:`wrap`,children:e.map((e,t)=>(0,M.jsx)(v,{icon:(0,M.jsx)(ne,{icon:_e}),variant:`borderless`,style:{color:h.colorTextDescription,gap:2,marginRight:12,paddingInline:0},children:e},t))})})})),ct,F,lt,ut=t((()=>{b(),m(),ct=e(u()),F=e(l()),lt=(0,ct.memo)(({title:e,children:t})=>{if(!t)return;let n=(0,F.jsx)(ae,{fontSize:14,variant:`chat`,style:{color:h.colorText,overflow:`visible`},children:t||``});return e?(0,F.jsxs)(d,{gap:8,children:[(0,F.jsx)(_,{weight:500,children:e}),n]}):n})})),dt,ft,I,L=t((()=>{b(),dt=e(u()),Ee(),ft=e(l()),I=(0,dt.memo)(({capturedAt:e})=>{let{text:t,title:n}=Te(e);return t?(0,ft.jsx)(_,{as:`time`,fontSize:12,style:{display:`block`,flex:`none`},title:n,type:`secondary`,children:t}):null})}));function pt({items:e,defaultColumnCount:t=3,maxItemWidth:n=240,hasMore:r,isLoading:i,onLoadMore:a,renderItem:o}){let s=Ie();return!e||e.length===0?null:(0,R.jsx)(xe,{customScrollParent:s,data:e,endReached:r&&a?a:void 0,increaseViewportBy:typeof window<`u`?window.innerHeight:0,overscan:48,style:{minHeight:`100%`},components:{Footer:i?()=>(0,R.jsx)(T,{rows:t,viewMode:`grid`}):void 0,List:(({ref:e,...r})=>(0,R.jsx)(ue,{gap:8,maxItemWidth:n,ref:e,rows:t,...r}))},itemContent:(e,t)=>!t||!t.id?null:o(t,{onClick:void 0,onDelete:void 0,onEdit:void 0})})}var mt,R,ht,gt=t((()=>{b(),mt=e(u()),Se(),E(),Fe(),R=e(l()),ht=(0,mt.memo)(pt)})),_t,z,B,V,vt,yt=t((()=>{b(),m(),_t=e(u()),P(),L(),Ze(),z=e(l()),B=`memory-masonry-actions`,V=p(({css:e,cssVar:t})=>({actions:e`
    transition: opacity 0.15s ease;
  `,masonryCard:e`
    cursor: pointer;
    position: relative;
    background: ${t.colorFillQuaternary};
    box-shadow: 0 0 0 1px ${t.colorFillTertiary} inset;
    .${B} {
      opacity: 0;
    }

    &:hover {
      .${B} {
        opacity: 1;
      }
    }
  `})),vt=(0,_t.memo)(({title:e,titleAddon:t,cate:n,children:r,actions:i,onClick:a,hashTags:o,badges:s,footer:c,capturedAt:l})=>{let u=O(n);return(0,z.jsxs)(g,{className:V.masonryCard,gap:4,height:`100%`,padding:4,variant:`filled`,style:{background:u?.backgroundColor},onClick:a,children:[(0,z.jsxs)(g,{flex:1,gap:12,paddingBlock:16,paddingInline:12,variant:`outlined`,style:{boxShadow:`0 4px 16px -4px ${u?.shadowColor||`rgba(0, 0, 0, 0.2)`}`,overflow:`hidden`,position:`relative`},children:[(e||t)&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:e&&typeof e==`string`?(0,z.jsx)(_,{as:`h2`,ellipsis:{rows:2},fontSize:16,style:{lineHeight:1.5,margin:0},weight:500,children:e}):e}),typeof t==`string`?(0,z.jsx)(v,{variant:`borderless`,children:t}):t]}),typeof r==`string`?(0,z.jsx)(_,{as:`p`,color:h.colorTextSecondary,ellipsis:{rows:4},children:r}):r,(0,z.jsx)(N,{hashTags:o}),(0,z.jsxs)(d,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,style:{overflow:`hidden`,position:`relative`},children:[c,(0,z.jsx)(I,{capturedAt:l})]})]}),(0,z.jsxs)(d,{horizontal:!0,align:`center`,justify:`space-between`,paddingBlock:8,paddingInline:8,style:{overflow:`hidden`,position:`relative`},width:`100%`,children:[(0,z.jsx)(d,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},onClick:e=>{e.stopPropagation(),e.preventDefault()},children:s}),(0,z.jsx)(ee,{flex:`none`,children:(0,z.jsx)(_,{align:`center`,color:u?.backgroundTextColor||h.colorTextSecondary,weight:`bold`,style:{opacity:.5},children:n?.toUpperCase()||`CHORE`})}),(0,z.jsx)(d,{horizontal:!0,align:`center`,className:f(B,V.actions),flex:1,gap:4,justify:`flex-end`,style:{overflow:`hidden`},onClick:e=>{e.stopPropagation(),e.preventDefault()},children:i})]})]})})}));function bt({data:e,groupBy:t=`day`,getDateForGrouping:n,hasMore:r,isLoading:i,onLoadMore:a,renderHeader:o,renderItem:s}){let c=Ce(),l=Ie(),{groupCounts:u,sortedPeriods:d,groupedItems:p}=(0,U.useMemo)(()=>{let r=t===`month`?`YYYY-MM`:`YYYY-MM-DD`,i=e.reduce((e,t)=>{let i=(0,H.default)(K(t,n)).format(r);return e[i]||(e[i]=[]),e[i].push(t),e},{}),a=Object.keys(i).sort((e,t)=>t.localeCompare(e)),o=[],s=[];for(let e of a){let t=[...i[e]].sort((e,t)=>{let r=K(e,n);return(0,H.default)(K(t,n)).valueOf()-(0,H.default)(r).valueOf()});o.push(t.length),s.push(...t)}return{groupCounts:o,groupedItems:s,sortedPeriods:a}},[e,t,n]);return!e||e.length===0?null:(0,W.jsxs)(`div`,{className:G.timelineContainer,children:[(0,W.jsx)(`div`,{className:f(G.timelineLine,c&&G.timelineLine_dark)}),(0,W.jsx)(be,{customScrollParent:l,endReached:r&&a?a:void 0,groupCounts:u,increaseViewportBy:typeof window<`u`?window.innerHeight:0,overscan:24,style:{minHeight:`100%`},components:{Footer:i?()=>(0,W.jsx)(T,{viewMode:`timeline`}):void 0},groupContent:e=>{let t=d[e],n=u[e];return o(t,n)},itemContent:e=>{let t=p[e];return s(t)}})]})}var H,U,W,G,K,xt,St=t((()=>{m(),H=e(n()),U=e(u()),Se(),we(),E(),Fe(),W=e(l()),G=p(({css:e,cssVar:t})=>({timelineContainer:e`
    position: relative;
    height: 100%;
  `,timelineLine:e`
    position: absolute;
    inset-block: 0;
    inset-inline-start: 8px;

    width: 1px;
    height: 100%;

    background: ${t.colorFillSecondary};
  `,timelineLine_dark:e`
    background: ${t.colorFillQuaternary};
  `})),K=(e,t)=>t?t(e):e.capturedAt??e.createdAt??new Date,xt=(0,U.memo)(bt)})),q,J,Y,X,Ct,wt,Tt=t((()=>{b(),m(),q=e(n()),J=e(u()),Y=e(l()),X=p(({css:e,cssVar:t})=>({itemWrapper:e`
    position: relative;
    padding-inline-start: 24px;
  `,periodHeader:e`
    position: sticky;
    z-index: 10;
    inset-block-start: 0;

    color: ${t.colorTextSecondary};

    background: ${t.colorBgContainer};
  `,timelineDot:e`
    position: absolute;
    inset-block-start: 20px;
    inset-inline-start: 0;

    width: 16px;
    height: 16px;
    border: 1px solid ${t.colorBorder};
    border-radius: 50%;

    background: ${t.colorBgElevated};
    box-shadow: 0 2px 4px -2px rgb(0 0 0 / 40%);
  `})),Ct=(0,J.memo)(({periodKey:e,groupBy:t=`day`})=>{let n=t===`month`?(0,q.default)(`${e}-01`).format(`MMMM YYYY`):(0,q.default)(e).format(`MMMM D, YYYY`);return(0,Y.jsx)(d,{horizontal:!0,align:`center`,className:X.periodHeader,gap:12,paddingBlock:8,children:(0,Y.jsx)(_,{weight:500,children:n})})}),wt=(0,J.memo)(({children:e})=>(0,Y.jsxs)(`div`,{className:X.itemWrapper,children:[(0,Y.jsx)(`div`,{className:X.timelineDot}),e]}))})),Et,Z,Q,$,Dt,Ot=t((()=>{b(),m(),Et=e(u()),et(),P(),L(),Z=e(l()),Q=`memory-actions`,$=p(({css:e})=>({actions:e`
    transition: opacity 0.15s ease;
  `,timelineCard:e`
    position: relative;
    .${Q} {
      opacity: 0;
    }

    &:hover {
      .${Q} {
        opacity: 1;
      }
    }
  `})),Dt=(0,Et.memo)(({title:e,titleAddon:t,cate:n,children:r,actions:i,onClick:a,capturedAt:o,hashTags:s})=>(0,Z.jsxs)(g,{clickable:!0,className:$.timelineCard,gap:12,padding:16,variant:`borderless`,onClick:a,children:[(e||t)&&(0,Z.jsxs)(d,{horizontal:!0,align:`center`,gap:4,width:`100%`,wrap:`wrap`,style:{overflow:`hidden`},children:[e&&typeof e==`string`?(0,Z.jsx)(_,{as:`h2`,fontSize:16,style:{lineHeight:1.5,margin:0},weight:500,children:e}):e,t&&(0,Z.jsx)(v,{children:t})]}),typeof r==`string`?(0,Z.jsx)(_,{as:`p`,color:h.colorTextSecondary,ellipsis:{rows:3},children:r}):r,(0,Z.jsx)(N,{hashTags:s}),(0,Z.jsxs)(d,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,Z.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,Z.jsx)(k,{cate:n}),(0,Z.jsx)(I,{capturedAt:o})]}),(0,Z.jsx)(d,{horizontal:!0,align:`center`,className:f(Q,$.actions),gap:4,onClick:e=>{e.stopPropagation(),e.preventDefault()},children:i})]})]}))}));export{ze as A,et as C,E as D,T as E,He as O,k as S,Je as T,P as _,Tt as a,nt as b,vt as c,gt as d,I as f,N as g,ut as h,wt as i,Be as j,Ue as k,yt as l,lt as m,Ot as n,xt as o,L as p,Ct as r,St as s,Dt as t,ht as u,at as v,qe as w,rt as x,ot as y};