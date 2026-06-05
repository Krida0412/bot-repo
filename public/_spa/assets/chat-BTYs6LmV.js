import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{qt as n}from"../i18n/i18n-zh-CN-CbR0_Rok.js";import{Dt as r,vl as i,yl as a}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as o,Ba as s,Ga as c,Ia as l,Ja as u,K as d,Ka as f,Ma as p,Ua as m,ca as h,da as g,dn as _,fa as v,fn as y,ga as b,ha as x,ja as S,la as C,q as w,za as T}from"./imperative-Xfjd337A.js";import{Da as E,Ea as D,Eo as O,L as k,No as ee,Oa as A,Po as j,R as M,To as te,Ts as N,bs as ne,cs as P,ds as re,ga as F,ha as ie,hr as ae,ls as I,mr as L,us as oe,vs as se,wa as ce,ws as le,xs as ue,ys as de}from"./es-2ZVhpwv7.js";import{J as fe,kn as pe,n as me,zt as he}from"./es-DMB7XTXN.js";import{Ki as ge,On as _e,Pf as ve,br as ye,dt as be,ec as xe,vn as Se}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{i as Ce,n as we,r as Te,t as Ee}from"./messageModal-GHBRW05j.js";var R,De=t((()=>{p(),R=l(({css:e,cssVar:t})=>e`
    position: relative;

    height: 100%;

    font-family: ${t.fontFamilyCode};
    font-size: 13px;
    line-height: 1.8;
  `)})),Oe,z,ke,Ae=t((()=>{S(),b(),C(),y(),I(),j(),A(),De(),Oe=e(a(),1),z=e(i(),1),p(),ce(),ke=(0,Oe.memo)(({text:e,variant:t=`borderless`,onCancel:n,defaultValue:r,onConfirm:i,renderButtons:a,placeholder:c,styles:l,style:d,editButtonSize:f=`middle`,classNames:p,shortcut:m,language:g=`markdown`,...v})=>{let{mobile:y}=u(),[b,S]=(0,Oe.useState)(r||``),C=h([x.Mod,x.Enter]),w=e?.confirm||`Confirm`,T=h([x.Esc]),O=e?.cancel||`Cancel`,k=()=>i?.(b),A=()=>n?.();D(C,k,{enableOnFormTags:!0,enabled:m,preventDefault:!0});let j=(0,z.jsx)(P,{size:f,type:`primary`,onClick:k,children:w}),M=(0,z.jsx)(P,{size:f,variant:`filled`,onClick:A,children:e?.cancel||`Cancel`});return(0,z.jsxs)(o,{gap:16,style:{flex:1,width:`100%`,...d},...v,children:[y?(0,z.jsx)(E,{autoSize:!0,className:s(R,p?.editor),placeholder:c,style:l?.editor,value:b,variant:t,onBlur:e=>S(e.target.value),onChange:e=>S(e.target.value)}):(0,z.jsx)(ee,{className:s(R,p?.editor),classNames:p,language:g,placeholder:c,style:l?.editor,styles:l,value:b,variant:t,onBlur:e=>S(e.target.value),onValueChange:e=>S(e)}),(0,z.jsx)(o,{direction:`horizontal-reverse`,gap:8,children:a?a(b).map((e,t)=>(0,z.jsx)(P,{size:f,...e},t)):(0,z.jsxs)(z.Fragment,{children:[m?(0,z.jsx)(_,{hotkey:C,title:w,children:j}):j,m?(0,z.jsx)(_,{hotkey:T,title:O,children:M}):M]})})]})})})),je,B,Me,Ne=t((()=>{S(),I(),j(),d(),A(),ae(),M(),De(),Ee(),je=e(a(),1),B=e(i(),1),p(),c(),Me=(0,je.memo)(({panelRef:e,editing:t,open:n,height:r=`75vh`,onOpenChange:i,onEditingChange:a,placeholder:s,value:c,language:l=`markdown`,onChange:d,text:p,footer:m,extra:h})=>{let{mobile:g}=u(),{t:_}=w(we),[v,y]=f(!1,{onChange:a,value:t}),[b,x]=f(!1,{onChange:i,value:n}),[S,C]=(0,je.useState)(c),T=p?.confirm??_(`messageModal.confirm`),D=p?.cancel??_(`messageModal.cancel`),O=p?.edit??_(`messageModal.edit`);return(0,B.jsx)(L,{allowFullscreen:!0,destroyOnHidden:!0,cancelText:D,footer:v?(0,B.jsxs)(o,{direction:`horizontal-reverse`,gap:8,children:[(0,B.jsx)(P,{type:`primary`,onClick:()=>{y(!1),d?.(S),C(c)},children:T}),(0,B.jsx)(P,{onClick:()=>{y(!1),C(c)},children:D})]}):m,height:r,okText:O,open:b,panelRef:e,title:p?.title,onOk:()=>y(!0),onCancel:()=>{x(!1),y(!1),C(c)},children:v?g?(0,B.jsx)(E,{autoSize:!0,className:R,defaultValue:S,placeholder:s,value:S,variant:`borderless`,onBlur:e=>C(e.target.value),onChange:e=>C(e.target.value)}):(0,B.jsx)(ee,{className:R,defaultValue:S,language:l,placeholder:s,value:S,variant:`borderless`,onBlur:e=>C(e.target.value),onValueChange:e=>C(e)}):(0,B.jsxs)(B.Fragment,{children:[h,(0,B.jsx)(k,{variant:`chat`,children:String(c||s)})]})})}),Me.displayName=`MessageModal`})),Pe,V,H,Fe=t((()=>{M(),Ae(),Ne(),Pe=e(a(),1),V=e(i(),1),p(),c(),H=(0,Pe.memo)(({value:e,onChange:t,classNames:n={},onEditingChange:r,editing:i,openModal:a,onOpenChange:o,placeholder:c,showEditWhenEmpty:l=!1,styles:u,className:d,style:p,height:m,variant:h,editButtonSize:g,text:_,fullFeaturedCodeBlock:v,model:y,fontSize:b,language:x=`markdown`,markdownProps:S})=>{let[C,w]=f(!1,{onChange:r,value:i}),[T,E]=f(!1,{onChange:o,value:a}),D=m===`auto`,O=(0,V.jsx)(ke,{shortcut:!0,className:s(d,n?.input),classNames:n,defaultValue:e,editButtonSize:g,height:m,language:x,placeholder:c,styles:u,text:_,variant:h,style:{...p,...u?.input},onCancel:()=>w(!1),onConfirm:e=>{t?.(e),w(!1)}});return!e&&l?O:(0,V.jsxs)(V.Fragment,{children:[!T&&C?O:(0,V.jsx)(k,{className:s(d,n?.markdown),fontSize:b,fullFeaturedCodeBlock:v,variant:`chat`,style:{height:D?`unset`:m,...p,...u?.markdown},...S,children:e||c||``}),T&&(0,V.jsx)(Me,{editing:C,extra:y?.extra,footer:y?.footer,height:m,language:x,open:T,placeholder:c,text:_,value:e,onChange:t,onEditingChange:w,onOpenChange:e=>{E(e),w(!1)}})]})}),H.displayName=`EditableMessage`})),U,W=t((()=>{p(),U=l(({css:e,cssVar:t})=>{let n=e`
    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid color-mix(in srgb, ${t.colorBorderSecondary} 66%, transparent);
    border-radius: ${t.borderRadiusLG};

    background-color: ${t.colorBgContainer};
  `,r=e`
    padding-block-start: 0;
  `,i=e`
    padding-block-start: 6px;
  `,a=e`
    margin-block-end: -16px;
    transition: background-color 100ms ${t.motionEaseOut};
  `,o=e`
    width: 100%;
  `;return{actionsBubbleLeft:e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-end;
    `,actionsBubbleRight:e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-start;
    `,actionsDocsLeft:e`
      flex: none;
      align-self: flex-start;
      justify-content: flex-end;
    `,actionsDocsRight:e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-start;
    `,actionsEditing:e`
      pointer-events: none !important;
      opacity: 0 !important;
    `,avatarContainer:e`
      position: relative;
      flex: none;
      width: var(--chat-item-avatar-size, 40px);
      height: var(--chat-item-avatar-size, 40px);
    `,avatarGroupContainer:e`
      width: var(--chat-item-avatar-size, 40px);
    `,container:e`
      position: relative;

      width: 100%;
      max-width: 100vw;
      padding-block: 24px 12px;
      padding-inline: 12px;

      time {
        display: inline-block;
        white-space: nowrap;
      }

      div[role='menubar'] {
        display: flex;
      }

      time,
      div[role='menubar'] {
        pointer-events: none;
        opacity: 0;
        transition: opacity 200ms ${t.motionEaseOut};
      }

      &:hover {
        time,
        div[role='menubar'] {
          pointer-events: unset;
          opacity: 1;
        }
      }

      div[role='menubar']:has([data-popup-open]),
      div[role='menubar'][data-popup-open] {
        pointer-events: unset !important;
        opacity: 1 !important;

        [data-popup-open] {
          background: ${t.colorFillTertiary};
        }
      }

      ${m.sm} {
        padding-block-start: 12px;
        padding-inline: 8px;
      }
    `,containerDocs:e`
      ${a}
      position: relative;

      width: 100%;
      max-width: 100vw;
      padding-block: 24px 12px;
      padding-inline: 12px;

      time {
        display: inline-block;
        white-space: nowrap;
      }

      div[role='menubar'] {
        display: flex;
      }

      time,
      div[role='menubar'] {
        pointer-events: none;
        opacity: 0;
        transition: opacity 200ms ${t.motionEaseOut};
      }

      &:hover {
        time,
        div[role='menubar'] {
          pointer-events: unset;
          opacity: 1;
        }
      }

      div[role='menubar']:has(.lobe-dropdown-menu-trigger[data-popup-open]) {
        pointer-events: unset;
        opacity: 1;
      }

      ${m.sm} {
        padding-block-start: 16px;
        padding-inline: 8px;
      }
    `,editingContainer:e`
      ${o}
      padding-block: 8px 12px;
      padding-inline: 12px;
      border: 1px solid ${t.colorBorderSecondary};

      &:active,
      &:hover {
        border-color: ${t.colorBorder};
      }
    `,editingContainerDocs:e`
      ${o}
      padding-block: 8px 12px;
      padding-inline: 12px;
      border: 1px solid ${t.colorBorderSecondary};
      border-radius: ${t.borderRadius};

      background: ${t.colorFillQuaternary};

      &:active,
      &:hover {
        border-color: ${t.colorBorder};
      }
    `,editingInput:e`
      width: 100%;
    `,errorContainer:e`
      position: relative;
      overflow: hidden;
      width: 100%;
    `,loadingLeft:e`
      position: absolute;
      inset-block-end: 0;
      inset-inline-start: -4px;

      width: 16px;
      height: 16px;
      border-radius: 50%;

      color: ${t.colorBgLayout};

      background: ${t.colorPrimary};
    `,loadingRight:e`
      position: absolute;
      inset-block-end: 0;
      inset-inline-end: -4px;

      width: 16px;
      height: 16px;
      border-radius: 50%;

      color: ${t.colorBgLayout};

      background: ${t.colorPrimary};
    `,messageBubble:e`
      ${n}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${m.sm} {
        width: 100%;
      }
    `,messageContainer:e`
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${m.sm} {
        overflow-x: auto;
      }
    `,messageContainerEditing:e`
      ${o}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${m.sm} {
        overflow-x: auto;
      }
    `,messageContainerEditingWithTime:e`
      ${o}
      position: relative;
      overflow: hidden;
      max-width: 100%;
      margin-block-start: -16px;

      ${m.sm} {
        overflow-x: auto;
      }
    `,messageContainerWithTime:e`
      position: relative;
      overflow: hidden;
      max-width: 100%;
      margin-block-start: -16px;

      ${m.sm} {
        overflow-x: auto;
      }
    `,messageContent:e`
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${m.sm} {
        flex-direction: column !important;
      }
    `,messageContentEditing:e`
      ${o}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${m.sm} {
        flex-direction: column !important;
      }
    `,messageDocsWithTitle:e`
      ${r}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${m.sm} {
        width: 100%;
      }
    `,messageDocsWithoutTitle:e`
      ${i}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${m.sm} {
        width: 100%;
      }
    `,messageExtra:e`
      /* message-extra class */
    `,nameLeft:e`
      pointer-events: none;

      margin-block-end: 6px;

      font-size: 12px;
      line-height: 1;
      color: ${t.colorTextDescription};
      text-align: start;
    `,nameRight:e`
      pointer-events: none;

      margin-block-end: 6px;

      font-size: 12px;
      line-height: 1;
      color: ${t.colorTextDescription};
      text-align: end;
    `}})})),Ie,Le,Re,ze=t((()=>{S(),W(),Ie=e(a(),1),Le=e(i(),1),p(),Re=({actions:e,placement:t=`left`,variant:n=`bubble`,editing:r,ref:i})=>(0,Le.jsx)(o,{align:`flex-start`,className:s((0,Ie.useMemo)(()=>n===`bubble`?t===`left`?U.actionsBubbleLeft:U.actionsBubbleRight:t===`left`?U.actionsDocsLeft:U.actionsDocsRight,[t,n]),r&&U.actionsEditing),ref:i,role:`menubar`,children:e})})),Be,Ve,He=t((()=>{S(),v(),W(),Be=e(i(),1),be(),Ve=({loading:e,placement:t=`left`})=>e?(0,Be.jsx)(o,{align:`center`,className:t===`left`?U.loadingLeft:U.loadingRight,justify:`center`,children:(0,Be.jsx)(g,{spin:!0,icon:xe,size:{size:12,strokeWidth:3}})}):null})),Ue,G,We,Ge=t((()=>{S(),re(),W(),He(),Ue=e(a(),1),G=e(i(),1),We=({loading:e,avatar:t,placement:n,unoptimized:r,addon:i,onClick:a,size:s=40,style:c,alt:l})=>{let u=(0,Ue.useMemo)(()=>({"--chat-item-avatar-size":`${s}px`}),[s]),d=(0,G.jsxs)(`div`,{className:U.avatarContainer,style:{...u,...c},children:[(0,G.jsx)(oe,{alt:l||t.title,animation:e,avatar:t.avatar,background:t.backgroundColor,size:s,title:t.title,unoptimized:r,onClick:a}),(0,G.jsx)(Ve,{loading:e,placement:n})]});return i?(0,G.jsxs)(o,{align:`center`,className:U.avatarGroupContainer,gap:8,children:[d,i]}):d}})),Ke,qe,Je=t((()=>{Ke=e(i(),1),qe=({borderSpacing:e})=>e?(0,Ke.jsx)(`div`,{style:{flex:`none`,width:e}}):null})),Ye,Xe,Ze=t((()=>{S(),de(),W(),Ye=e(i(),1),Xe=({message:e,error:t})=>(0,Ye.jsx)(o,{className:U.errorContainer,children:(0,Ye.jsx)(se,{showIcon:!0,closable:!1,extra:e,type:`error`,...t})})})),Qe,$e,et,tt=t((()=>{S(),W(),Fe(),Qe=e(a(),1),$e=e(i(),1),p(),et=(0,Qe.memo)(({editing:e,onChange:t,onEditingChange:n,text:r,message:i,placement:a,messageExtra:c,renderMessage:l,variant:d,primary:f,onDoubleClick:p,fontSize:m,markdownProps:h})=>{let{mobile:g}=u(),_=(0,Qe.useMemo)(()=>d===`bubble`?U.messageBubble:U.messageDocsWithoutTitle,[d]),v=(0,Qe.useMemo)(()=>d===`docs`?U.editingContainerDocs:U.editingContainer,[d]),y=(0,$e.jsx)(H,{fullFeaturedCodeBlock:!0,classNames:{input:U.editingInput},editButtonSize:`small`,editing:e,fontSize:m,markdownProps:h,openModal:g?e:void 0,text:r,value:i?String(i):``,onChange:t,onEditingChange:n}),b=l?l(y):y;return(0,$e.jsxs)(o,{className:s(_,e&&v),onDoubleClick:p,children:[b,c&&!e?(0,$e.jsx)(`div`,{className:U.messageExtra,children:c}):null]})})})),nt,rt,it=t((()=>{nt=e(n(),1),rt=e=>{let t=(0,nt.default)(),n=(0,nt.default)(e);return n.isSame(t,`day`)?n.format(`HH:mm:ss`):n.isSame(t,`year`)?n.format(`MM-DD HH:mm:ss`):n.format(`YYYY-MM-DD HH:mm:ss`)}})),at,ot,st=t((()=>{S(),W(),it(),at=e(i(),1),ot=({showTitle:e,placement:t=`left`,time:n,avatar:r,titleAddon:i})=>(0,at.jsxs)(o,{align:`center`,className:t===`left`?U.nameLeft:U.nameRight,direction:t===`left`?`horizontal`:`horizontal-reverse`,gap:4,children:[e?r.title||`untitled`:void 0,e?i:void 0,n&&(0,at.jsx)(`time`,{children:rt(n)})]})})),K,q,ct,lt,ut=t((()=>{S(),d(),Ce(),W(),ze(),Ge(),Je(),Ze(),tt(),st(),K=e(a(),1),q=e(i(),1),p(),ct=32,lt=(0,K.memo)(({avatarAddon:e,onAvatarClick:t,avatarProps:n,actions:r,className:i,primary:a,loading:c,message:l,placeholderMessage:d,placement:f=`left`,variant:p=`bubble`,avatar:m,error:h,showTitle:g,time:_,editing:v,onChange:y,onEditingChange:b,messageExtra:x,renderMessage:S,text:C,errorMessage:T,onDoubleClick:E,fontSize:D,aboveMessage:O,belowMessage:k,markdownProps:ee,actionsWrapWidth:A=54,showAvatar:j=!0,titleAddon:M,...te})=>{let{mobile:N}=u(),{t:ne}=w(Te),P=N?ct:n?.size||40,re=(0,K.useMemo)(()=>({"--chat-item-avatar-size":`${P}px`}),[P]),F=!!_,ie=d??ne(`chat.placeholder`),ae=n?.alt||m.title||ne(`chat.avatar`),I=(0,K.useRef)(null),L=(0,K.useRef)(null),[oe,se]=(0,K.useState)(p===`bubble`?`horizontal`:`vertical`);(0,K.useEffect)(()=>{if(p===`docs`){se(`vertical`);return}if(!I.current||!L.current)return;let e=new ResizeObserver(()=>{if(!I.current||!L.current)return;let e=L.current.clientWidth,t=I.current.scrollWidth;se(t+A>e?`vertical`:`horizontal`)});return e.observe(I.current),e.observe(L.current),()=>e.disconnect()},[p,A]);let ce=s(p===`docs`?U.containerDocs:U.container,i),le=(0,K.useMemo)(()=>v?F?U.messageContainerEditingWithTime:U.messageContainerEditing:F?U.messageContainerWithTime:U.messageContainer,[v,F]),ue=(0,K.useMemo)(()=>v?U.messageContentEditing:U.messageContent,[v]);return(0,q.jsxs)(o,{className:ce,direction:f===`left`?`horizontal`:`horizontal-reverse`,gap:N?6:12,style:re,...te,children:[j&&(0,q.jsx)(We,{...n,addon:e,alt:ae,avatar:m,loading:c,placement:f,size:P,style:{marginTop:g?-12:6,...n?.style},onClick:t}),(0,q.jsxs)(o,{align:f===`left`?`flex-start`:`flex-end`,className:le,ref:L,children:[(0,q.jsx)(ot,{avatar:m,placement:f,showTitle:g,time:_,titleAddon:M}),O,(0,q.jsxs)(o,{align:f===`left`?`flex-start`:`flex-end`,className:ue,"data-layout":oe,gap:8,direction:oe===`horizontal`?f===`left`?`horizontal`:`horizontal-reverse`:`vertical`,children:[(0,q.jsx)(o,{ref:I,width:`100%`,children:h&&(l===ie||!l)?(0,q.jsx)(Xe,{error:h,message:T,placement:f}):(0,q.jsx)(et,{editing:v,fontSize:D,markdownProps:ee,message:l,placement:f,primary:a,renderMessage:S,text:C,variant:p,messageExtra:(0,q.jsxs)(q.Fragment,{children:[h&&(0,q.jsx)(Xe,{error:h,message:T,placement:f}),x]}),onChange:y,onDoubleClick:E,onEditingChange:b})}),r&&(0,q.jsx)(Re,{actions:r,editing:v,placement:f,variant:p})]}),k]}),N&&p===`bubble`&&j&&(0,q.jsx)(qe,{borderSpacing:ct})]})})})),dt,ft,pt=t((()=>{dt=e(a(),1),be(),ft=e=>(0,dt.useMemo)(()=>({copy:{icon:ve,key:`copy`,label:e?.copy||`Copy`},del:{icon:Se,key:`del`,label:e?.delete||`Delete`},divider:{type:`divider`},edit:{icon:ye,key:`edit`,label:e?.edit||`Edit`},regenerate:{icon:ge,key:`regenerate`,label:e?.regenerate||`Regenerate`}}),[e])})),mt,ht,gt=t((()=>{ue(),pt(),mt=e(i(),1),ht=({text:e,ref:t,...n})=>{let{regenerate:r,edit:i,copy:a,divider:o,del:s}=ft(e);return(0,mt.jsx)(ne,{items:[r,i],menu:[i,a,r,o,s],ref:t,...n})}})),J,Y,_t,vt=t((()=>{O(),ut(),gt(),J=e(a(),1),Y=e(i(),1),me(),_t=(0,J.memo)(e=>{let{renderMessagesExtra:t,showTitle:n,onActionsClick:r,onAvatarsClick:i,onMessageChange:a,variant:o,text:s,renderMessages:c,renderErrorMessages:l,renderActions:u,loading:d,groupNav:f,renderItems:p,showAvatar:m,...h}=e,[g,_]=(0,J.useState)(!1),{message:v}=pe.useApp(),y=(0,J.useMemo)(()=>{if(!p||!h?.role)return;let e;if(p?.[h.role]&&(e=p[h.role]),!e&&p?.default&&(e=p.default),e)return e},[p?.[h.role]]),b=(0,J.useCallback)(({editableContent:e,data:t})=>{if(!c||!h?.role)return;let n;if(c?.[h.role]&&(n=c[h.role]),!n&&c?.default&&(n=c.default),n)return(0,Y.jsx)(n,{...t,editableContent:e})},[c?.[h.role]]),x=(0,J.useCallback)(({data:e})=>{if(!t||!h?.role)return;let n;if(t?.[h.role]&&(n=t[h.role]),t?.default&&(n=t.default),n)return(0,Y.jsx)(n,{...e})},[t?.[h.role]]),S=(0,J.useCallback)(({data:e})=>{if(!l||!h?.error?.type)return;let t;if(l?.[h.error.type]&&(t=l[h.error.type].Render),!t&&l?.default&&(t=l.default.Render),t)return(0,Y.jsx)(t,{...e})},[l]),C=(0,J.useCallback)(({data:e})=>{if(!u||!h?.role)return;let t;u?.[h.role]&&(t=u[h.role]),u?.default&&(t=u.default),t||=ht;let n=async(e,t)=>{switch(e.key){case`copy`:await te(t.content),v.success(s?.copySuccess||`Copy Success`);break;case`edit`:_(!0)}r?.(e,t)};return(0,Y.jsx)(t,{...e,text:s,onActionClick:t=>n?.(t,e)})},[u?.[h.role],s,r]),w=(0,J.useMemo)(()=>{if(!h.error)return;let e=h.error?.message,t={};return h.error.type&&l?.[h.error.type]&&(t=l[h.error.type]?.config),{message:e,...t}},[l,h.error]);return y?(0,Y.jsx)(y,{...e},h.id):(0,Y.jsx)(lt,{actions:(0,Y.jsx)(C,{data:h}),avatar:h.meta,avatarAddon:f,editing:g,error:w,errorMessage:(0,Y.jsx)(S,{data:h}),loading:d,message:h.content,messageExtra:(0,Y.jsx)(x,{data:h}),placement:o===`bubble`&&h.role===`user`?`right`:`left`,primary:h.role===`user`,showAvatar:m,showTitle:n,text:s,time:h.updateAt||h.createAt,variant:o,renderMessage:e=>(0,Y.jsx)(b,{data:h,editableContent:e}),onAvatarClick:i?.(h.role),onChange:e=>a?.(h.id,e),onEditingChange:_,onDoubleClick:e=>{h.id===`default`||h.error||h.role&&[`assistant`,`user`].includes(h.role)&&e.altKey&&_(!0)}})}),_t.displayName=`ChatListItem`})),X,yt,bt=t((()=>{v(),F(),X=e(i(),1),me(),be(),yt=({enable:e,text:t})=>e?(0,X.jsx)(`div`,{style:{padding:`0 20px`},children:(0,X.jsx)(he,{children:(0,X.jsx)(ie,{icon:(0,X.jsx)(g,{icon:_e}),children:t||`History Message`})})}):null})),xt,St=t((()=>{p(),xt=l(({css:e})=>({container:e`
      position: relative;
    `}))})),Ct,Z,wt,Tt=t((()=>{vt(),bt(),St(),Ct=e(a(),1),Z=e(i(),1),p(),wt=(0,Ct.memo)(({onActionsClick:e,onAvatarsClick:t,renderMessagesExtra:n,className:r,data:i,variant:a=`bubble`,text:o,showTitle:c,onMessageChange:l,renderMessages:u,renderErrorMessages:d,loadingId:f,renderItems:p,enableHistoryCount:m,renderActions:h,historyCount:g=0,showAvatar:_,...v})=>(0,Z.jsx)(`div`,{className:s(xt.container,r),...v,children:i.map((r,s)=>{let v={loading:f===r.id,onActionsClick:e,onAvatarsClick:t,onMessageChange:l,renderActions:h,renderErrorMessages:d,renderItems:p,renderMessages:u,renderMessagesExtra:n,showAvatar:_,showTitle:c,text:o,variant:a},y=i.length;return(0,Z.jsxs)(Ct.Fragment,{children:[(0,Z.jsx)(yt,{enable:m&&y>g&&g===y-s+1,text:o?.history}),(0,Z.jsx)(_t,{...v,...r})]},r.id)})}))})),Q,Et=t((()=>{p(),Q=l(({css:e,cssVar:t})=>{let n=`var(--loading-dots-size, 8px)`,r=`var(--loading-dots-color, var(--ant-color-primary))`;return{container:e`
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
      justify-content: center;

      padding: ${t.paddingXS};
    `,defaultDot:e`
      width: ${n};
      height: ${n};
      border-radius: 50%;

      background-color: ${r};

      animation: fade-animation 1.2s ease-in-out infinite;

      @keyframes fade-animation {
        0%,
        100% {
          opacity: 0.3;
        }

        50% {
          opacity: 1;
        }
      }
    `,orbitContainer:e`
      position: relative;
      width: calc(${n} * 4);
      height: calc(${n} * 4);
    `,orbitDot:e`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: 50%;
      transform-origin: calc(${n} * 2) 0;

      width: ${n};
      height: ${n};
      margin-block-start: calc(${n} / -2);
      margin-inline-start: calc(${n} / -2);
      border-radius: 50%;

      background-color: ${r};

      animation: orbit-animation 1.2s linear infinite;

      @keyframes orbit-animation {
        0% {
          transform: rotate(0deg) translateX(calc(${n} * 2));
        }

        100% {
          transform: rotate(360deg) translateX(calc(${n} * 2));
        }
      }
    `,orbitWrapper:e`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      width: calc(${n} * 5);
      height: calc(${n} * 5);
      padding: ${t.paddingXS};
    `,pulseDot:e`
      width: ${n};
      height: ${n};
      border-radius: 50%;

      background-color: ${r};

      animation: pulse-animation 1.2s ease-in-out infinite;

      @keyframes pulse-animation {
        0%,
        100% {
          transform: scale(0.8);
          opacity: 0.3;
        }

        50% {
          transform: scale(1.3);
          opacity: 1;
        }
      }
    `,typingDot:e`
      width: ${n};
      height: ${n};
      border-radius: 50%;

      background-color: ${r};

      animation: typing-animation 1.2s ease-in-out infinite;

      @keyframes typing-animation {
        0%,
        100% {
          transform: scale(0.6);
          opacity: 0.2;
        }

        25% {
          transform: scale(1);
          opacity: 1;
        }

        50%,
        75% {
          transform: scale(0.6);
          opacity: 0.2;
        }
      }
    `,waveDot:e`
      width: ${n};
      height: ${n};
      border-radius: 50%;

      background-color: ${r};

      animation: wave-animation 1.24s ease-in-out infinite;

      @keyframes wave-animation {
        0%,
        100% {
          transform: translateY(0);
        }

        25% {
          transform: translateY(calc(${n} * -1.5));
        }

        50% {
          transform: translateY(0);
        }
      }
    `}})})),Dt,$,Ot,kt=t((()=>{Et(),Dt=e(a(),1),$=e(i(),1),p(),Ot=({size:e=8,color:t,variant:n=`dots`,className:r,style:i})=>{let a=(0,Dt.useMemo)(()=>{let n={"--loading-dots-size":`${e}px`};return t&&(n[`--loading-dots-color`]=t),n},[t,e]),o=()=>{switch(n){case`pulse`:return(0,$.jsx)(`div`,{className:Q.pulseDot,style:{animationDelay:`0s`}});case`wave`:return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:Q.waveDot,style:{animationDelay:`0s`}}),(0,$.jsx)(`div`,{className:Q.waveDot,style:{animationDelay:`0.12s`}}),(0,$.jsx)(`div`,{className:Q.waveDot,style:{animationDelay:`0.24s`}})]});case`orbit`:return(0,$.jsxs)(`div`,{className:Q.orbitContainer,children:[(0,$.jsx)(`div`,{className:Q.orbitDot,style:{animationDelay:`0s`}}),(0,$.jsx)(`div`,{className:Q.orbitDot,style:{animationDelay:`-0.4s`}}),(0,$.jsx)(`div`,{className:Q.orbitDot,style:{animationDelay:`-0.8s`}})]});case`typing`:return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:Q.typingDot,style:{animationDelay:`0s`}}),(0,$.jsx)(`div`,{className:Q.typingDot,style:{animationDelay:`0.15s`}}),(0,$.jsx)(`div`,{className:Q.typingDot,style:{animationDelay:`0.3s`}})]});default:return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:Q.defaultDot,style:{animationDelay:`0s`}}),(0,$.jsx)(`div`,{className:Q.defaultDot,style:{animationDelay:`0.15s`}}),(0,$.jsx)(`div`,{className:Q.defaultDot,style:{animationDelay:`0.3s`}})]})}};return(0,$.jsx)(`div`,{className:s(n===`orbit`?Q.orbitWrapper:Q.container,r),style:{...a,...i},children:o()})},Ot.displayName=`LoadingDots`})),At,jt,Mt,Nt,Pt,Ft=t((()=>{N(),d(),Ce(),At=e(a(),1),jt=e(i(),1),me(),p(),Mt=e(r(),1),Nt=e=>(0,Mt.default)(e).format(`0,0`),Pt=({mode:e=`remained`,maxValue:t,value:n,text:r,showInfo:i,size:a=20,...o})=>{let{t:s}=w(Te),c=t-n,l=n/t,u=r?.remained??s(`tokenTag.remained`),d=r?.used??s(`tokenTag.used`),f=r?.overload??s(`tokenTag.overload`),p=(0,At.useMemo)(()=>{let e,t;return l<.7?(e=`normal`,t=T.colorText):l<.9?(e=`low`,t=T.colorWarning):(e=`overload`,t=T.colorError),{color:t,type:e}},[l]),m=c>0?[e===`remained`?u:d,Nt(e===`remained`?c:n)].join(` `):f;return(0,jt.jsx)(le,{size:a,title:i?m:void 0,icon:(0,jt.jsx)(fe,{percent:l*100,showInfo:!1,size:Number(typeof a==`object`?a?.size||20:a)||20,strokeColor:p.color,type:`circle`}),...o})},Pt.displayName=`TokenTag`})),It=t((()=>{Fe(),Tt(),kt(),Ft()}));export{kt as a,H as c,Ot as i,Fe as l,Pt as n,wt as o,Ft as r,Tt as s,It as t};