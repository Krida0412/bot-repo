import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r,xt as i,yt as a}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{vl as o,yl as s}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as c,Ba as l,Ia as u,J as d,Ma as f,cn as ee,da as p}from"./imperative-Xfjd337A.js";import{Co as te,cs as m,n as h,us as ne}from"./es-2ZVhpwv7.js";import{$t as re,Cn as ie,Dn as g,Dt as _,N as ae,Pn as oe,_t as v,at as y,lt as b,n as x,nt as S,pn as se,qn as C,r as ce,s as le,y as ue}from"./es-DMB7XTXN.js";import{Hs as de,Jo as fe,Kd as pe,Ra as me,Wd as he,ba as w,bn as ge,dt as T,gd as _e,gr as ve,nf as ye,nl as be,vu as xe}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{c as E,d as Se,n as D,s as Ce}from"./base-ui-CG2gzEWh.js";import{d as O,l as k,n as A,o as j,p as we,s as Te}from"./client-C0dgA5Xe.js";import{i as Ee,t as De}from"./es-DJm_qhBI.js";import{i as Oe,t as ke}from"./MarketAuth-DqgKrG7q.js";import{n as Ae,t as je}from"./SettingHeader-DpvPmWpm.js";var M,N,Me,Ne,Pe=t((()=>{h(),x(),f(),T(),n(),M=e(o()),N=u(({css:e,cssVar:t})=>({card:e`
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: ${t.colorPrimary};
      box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    }
  `,description:e`
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  `,icon:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    margin-block-end: 12px;
    border-radius: 12px;

    background: ${t.colorFillSecondary};
  `,title:e`
    margin-block-end: 4px;
    font-weight: 500;
  `})),Me=[{description:`creds.typeDesc.kv-env`,icon:(0,M.jsx)(ve,{size:24}),type:`kv-env`},{description:`creds.typeDesc.kv-header`,icon:(0,M.jsx)(xe,{size:24}),type:`kv-header`},{description:`creds.typeDesc.oauth`,icon:(0,M.jsx)(be,{size:24}),type:`oauth`},{description:`creds.typeDesc.file`,icon:(0,M.jsx)(_e,{size:24}),type:`file`}],Ne=({onSelect:e})=>{let{t}=r(`setting`);return(0,M.jsx)(`div`,{className:N.grid,children:Me.map(({type:n,icon:r,description:i})=>(0,M.jsx)(re,{className:N.card,size:`small`,onClick:()=>e(n),children:(0,M.jsxs)(c,{align:`center`,children:[(0,M.jsx)(`div`,{className:N.icon,children:r}),(0,M.jsx)(`div`,{className:N.title,children:t(`creds.types.${n}`)}),(0,M.jsx)(`div`,{className:N.description,children:t(i)})]})},n))})}})),P,F,Fe,Ie,Le=t((()=>{De(),h(),k(),x(),f(),P=e(s()),n(),A(),F=e(o()),Fe=u(({css:e})=>({footer:e`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `})),Ie=({onBack:e,onSuccess:t})=>{let{t:n}=r(`setting`),[i]=v.useForm(),[a,o]=(0,P.useState)(null),[s,c]=(0,P.useState)(``),[l,u]=(0,P.useState)(!1),d=O({mutationFn:e=>{if(!a||!s)throw Error(`File is required`);return j.market.creds.createFile.mutate({description:e.description,fileHashId:a,fileName:s,key:e.key,name:e.name})},onSuccess:()=>{t()}});return(0,F.jsxs)(v,{form:i,layout:`vertical`,onFinish:e=>{if(!a){S.error(n(`creds.form.fileRequired`));return}d.mutate(e)},children:[(0,F.jsxs)(v.Item,{required:!0,label:n(`creds.form.file`),children:[(0,F.jsxs)(ce.Dragger,{beforeUpload:async e=>{u(!0);try{let t=await e.arrayBuffer(),r=new Uint8Array(t),i=``;for(let e=0;e<r.byteLength;e++)i+=String.fromCharCode(r[e]);let a=btoa(i),s=await j.market.creds.uploadFile.mutate({file:a,fileName:e.name,fileType:e.type||`application/octet-stream`});c(s.fileName),o(s.fileHashId),S.success(n(`creds.file.uploadSuccess`))}catch(e){console.error(`[FileCredForm] Upload failed:`,e),S.error(e instanceof Error?e.message:n(`creds.file.uploadFailed`))}finally{u(!1)}return!1},disabled:l,maxCount:1,showUploadList:s?{showRemoveIcon:!0}:!1,onRemove:()=>{o(null),c(``)},children:[(0,F.jsx)(`p`,{className:`ant-upload-drag-icon`,children:(0,F.jsx)(Ee,{})}),(0,F.jsx)(`p`,{className:`ant-upload-text`,children:n(l?`creds.file.uploading`:`creds.form.uploadHint`)}),(0,F.jsx)(`p`,{className:`ant-upload-hint`,children:n(`creds.form.uploadDesc`)})]}),s&&(0,F.jsxs)(`div`,{style:{marginTop:8},children:[n(`creds.form.selectedFile`),`: `,s]})]}),(0,F.jsx)(v.Item,{label:n(`creds.form.key`),name:`key`,rules:[{required:!0,message:n(`creds.form.keyRequired`)},{pattern:/^[\w-]+$/,message:n(`creds.form.keyPattern`)}],children:(0,F.jsx)(b,{placeholder:`e.g., gcp-service-account`})}),(0,F.jsx)(v.Item,{label:n(`creds.form.name`),name:`name`,rules:[{required:!0,message:n(`creds.form.nameRequired`)}],children:(0,F.jsx)(b,{placeholder:`e.g., GCP Service Account`})}),(0,F.jsx)(v.Item,{label:n(`creds.form.description`),name:`description`,children:(0,F.jsx)(b.TextArea,{placeholder:n(`creds.form.descriptionPlaceholder`),rows:2})}),(0,F.jsxs)(`div`,{className:Fe.footer,children:[(0,F.jsx)(m,{onClick:e,children:n(`creds.form.back`)}),(0,F.jsx)(m,{disabled:!a,htmlType:`submit`,loading:d.isPending,type:`primary`,children:n(`creds.form.submit`)})]})]})}})),I,Re,ze,Be=t((()=>{h(),k(),x(),f(),T(),n(),A(),I=e(o()),Re=u(({css:e})=>({footer:e`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `,kvPair:e`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `})),ze=({type:e,onBack:t,onSuccess:n})=>{let{t:i}=r(`setting`),[a]=v.useForm(),o=O({mutationFn:t=>{let n=(t.kvPairs||[]).reduce((e,t)=>(t.key&&t.value&&(e[t.key]=t.value),e),{});return j.market.creds.createKV.mutate({description:t.description,key:t.key,name:t.name,type:e,values:n})},onSuccess:()=>{n()}});return(0,I.jsxs)(v,{form:a,initialValues:{kvPairs:[{key:``,value:``}]},layout:`vertical`,onFinish:e=>{o.mutate(e)},children:[(0,I.jsx)(v.Item,{label:i(`creds.form.key`),name:`key`,rules:[{required:!0,message:i(`creds.form.keyRequired`)},{pattern:/^[\w-]+$/,message:i(`creds.form.keyPattern`)}],children:(0,I.jsx)(b,{placeholder:`e.g., openai`})}),(0,I.jsx)(v.Item,{label:i(`creds.form.name`),name:`name`,rules:[{required:!0,message:i(`creds.form.nameRequired`)}],children:(0,I.jsx)(b,{placeholder:`e.g., OpenAI API Key`})}),(0,I.jsx)(v.Item,{label:i(`creds.form.values`),children:(0,I.jsx)(v.List,{name:`kvPairs`,children:(t,{add:n,remove:r})=>(0,I.jsxs)(c,{gap:8,children:[t.map(({key:n,name:a,...o})=>(0,I.jsxs)(`div`,{className:Re.kvPair,children:[(0,I.jsx)(v.Item,{...o,name:[a,`key`],style:{flex:1,marginBottom:0},children:(0,I.jsx)(b,{placeholder:e===`kv-env`?`ENV_VAR_NAME`:`Header-Name`})}),(0,I.jsx)(v.Item,{...o,name:[a,`value`],style:{flex:2,marginBottom:0},children:(0,I.jsx)(b.Password,{placeholder:i(`creds.form.valuePlaceholder`)})}),t.length>1&&(0,I.jsx)(m,{icon:fe,size:`small`,type:`text`,onClick:()=>r(a)})]},n)),(0,I.jsx)(m,{block:!0,icon:w,type:`dashed`,onClick:()=>n({key:``,value:``}),children:i(`creds.form.addPair`)})]})})}),(0,I.jsx)(v.Item,{label:i(`creds.form.description`),name:`description`,children:(0,I.jsx)(b.TextArea,{placeholder:i(`creds.form.descriptionPlaceholder`),rows:2})}),(0,I.jsxs)(`div`,{className:Re.footer,children:[(0,I.jsx)(m,{onClick:t,children:i(`creds.form.back`)}),(0,I.jsx)(m,{htmlType:`submit`,loading:o.isPending,type:`primary`,children:i(`creds.form.submit`)})]})]})}})),L,R,Ve,He=t((()=>{h(),k(),x(),f(),n(),A(),L=e(o()),R=u(({css:e,cssVar:t})=>({connectionOption:e`
    display: flex;
    gap: 8px;
    align-items: center;
  `,footer:e`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `,provider:e`
    font-weight: 500;
  `,username:e`
    color: ${t.colorTextSecondary};
  `})),Ve=({onBack:e,onSuccess:t})=>{let{t:n}=r(`setting`),[i]=v.useForm(),{data:a,isLoading:o}=Te.market.creds.listOAuthConnections.useQuery(),s=a?.connections??[],l=O({mutationFn:e=>j.market.creds.createOAuth.mutate({description:e.description,key:e.key,name:e.name,oauthConnectionId:e.oauthConnectionId}),onSuccess:()=>{t()}});return o?(0,L.jsx)(c,{align:`center`,justify:`center`,style:{padding:48},children:(0,L.jsx)(y,{})}):s.length===0?(0,L.jsxs)(c,{gap:16,children:[(0,L.jsx)(g,{description:n(`creds.oauth.noConnections`)}),(0,L.jsx)(`div`,{className:R.footer,children:(0,L.jsx)(m,{onClick:e,children:n(`creds.form.back`)})})]}):(0,L.jsxs)(v,{form:i,layout:`vertical`,onFinish:e=>{l.mutate(e)},children:[(0,L.jsx)(v.Item,{label:n(`creds.form.selectConnection`),name:`oauthConnectionId`,rules:[{required:!0,message:n(`creds.form.connectionRequired`)}],children:(0,L.jsx)(ie,{placeholder:n(`creds.form.selectConnectionPlaceholder`),children:s.map(e=>{let t=e.providerId||`OAuth`,n=e.providerName||e.providerUserName||e.email||e.name;return(0,L.jsx)(ie.Option,{value:e.id,children:(0,L.jsxs)(`span`,{className:R.connectionOption,children:[e.avatar&&(0,L.jsx)(se,{size:`small`,src:e.avatar}),(0,L.jsxs)(`span`,{children:[(0,L.jsx)(`span`,{className:R.provider,children:t}),n&&(0,L.jsxs)(`span`,{className:R.username,children:[` - `,n]})]})]})},e.id)})})}),(0,L.jsx)(v.Item,{label:n(`creds.form.key`),name:`key`,rules:[{required:!0,message:n(`creds.form.keyRequired`)},{pattern:/^[\w-]+$/,message:n(`creds.form.keyPattern`)}],children:(0,L.jsx)(b,{placeholder:`e.g., github-oauth`})}),(0,L.jsx)(v.Item,{label:n(`creds.form.name`),name:`name`,rules:[{required:!0,message:n(`creds.form.nameRequired`)}],children:(0,L.jsx)(b,{placeholder:`e.g., GitHub Connection`})}),(0,L.jsx)(v.Item,{label:n(`creds.form.description`),name:`description`,children:(0,L.jsx)(b.TextArea,{placeholder:n(`creds.form.descriptionPlaceholder`),rows:2})}),(0,L.jsxs)(`div`,{className:R.footer,children:[(0,L.jsx)(m,{onClick:e,children:n(`creds.form.back`)}),(0,L.jsx)(m,{htmlType:`submit`,loading:l.isPending,type:`primary`,children:n(`creds.form.submit`)})]})]})}})),z,B,Ue,We,Ge=t((()=>{D(),x(),f(),z=e(s()),n(),Pe(),Le(),Be(),He(),B=e(o()),Ue=u(({css:e})=>({steps:e`
    margin-block-end: 24px;
  `})),We=({onSuccess:e})=>{let{t}=r(`setting`),{close:n}=Se(),[i,a]=(0,z.useState)(0),[o,s]=(0,z.useState)(null),c=e=>{s(e),a(1)},l=()=>{a(0),s(null)},u=()=>{e?.(),n()};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(ae,{className:Ue.steps,current:i,size:`small`,items:[{title:t(`creds.createModal.selectType`)},{title:t(`creds.createModal.fillForm`)}]}),i===0?(0,B.jsx)(Ne,{onSelect:c}):(()=>{switch(o){case`kv-env`:case`kv-header`:return(0,B.jsx)(ze,{type:o,onBack:l,onSuccess:u});case`oauth`:return(0,B.jsx)(Ve,{onBack:l,onSuccess:u});case`file`:return(0,B.jsx)(Ie,{onBack:l,onSuccess:u});default:return null}})()]})}})),Ke,qe,Je=t((()=>{D(),a(),Ge(),Ke=e(o()),qe=e=>E({content:(0,Ke.jsx)(We,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:i(`creds.createModal.title`,{ns:`setting`}),width:`min(90vw, 640px)`})})),V,Ye=t((()=>{f(),V=u(({css:e,cssVar:t})=>({container:e`
    padding-block: 12px;
    padding-inline: 0;
  `,description:e`
    overflow: hidden;

    font-size: 12px;
    color: ${t.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,icon:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    border-radius: 12px;

    background: ${t.colorFillTertiary};
  `,key:e`
    font-family: monospace;
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,title:e`
    font-size: 15px;
    font-weight: 500;
    color: ${t.colorText};
  `}))})),Xe,H,Ze,Qe,U,$e=t((()=>{h(),D(),x(),T(),Xe=e(s()),n(),Ye(),H=e(o()),Ze={file:(0,H.jsx)(_e,{size:20}),"kv-env":(0,H.jsx)(ve,{size:20}),"kv-header":(0,H.jsx)(xe,{size:20}),oauth:(0,H.jsx)(be,{size:20})},Qe={file:`purple`,"kv-env":`blue`,"kv-header":`cyan`,oauth:`green`},U=(0,Xe.memo)(({cred:e,onEdit:t,onDelete:n,onView:i})=>{let{t:a}=r(`setting`),o=()=>{Ce({content:a(`creds.actions.deleteConfirm.content`),okButtonProps:{danger:!0},okText:a(`creds.actions.deleteConfirm.ok`),onOk:()=>n(e.id),title:a(`creds.actions.deleteConfirm.title`)})},s=[...e.type===`kv-env`||e.type===`kv-header`?[{icon:(0,H.jsx)(p,{icon:he}),key:`view`,label:a(`creds.actions.view`),onClick:()=>i(e)}]:[],{icon:(0,H.jsx)(p,{icon:me}),key:`edit`,label:a(`creds.actions.edit`),onClick:()=>t(e)},{danger:!0,icon:(0,H.jsx)(p,{icon:ge}),key:`delete`,label:a(`creds.actions.delete`),onClick:o}];return(0,H.jsxs)(c,{horizontal:!0,align:`center`,className:V.container,gap:16,justify:`space-between`,children:[(0,H.jsxs)(c,{horizontal:!0,align:`center`,gap:16,style:{flex:1,overflow:`hidden`},children:[(0,H.jsx)(`div`,{className:V.icon,children:e.type===`oauth`&&e.oauthAvatar?(0,H.jsx)(ne,{avatar:e.oauthAvatar,size:32}):(0,H.jsx)(`span`,{style:{color:`var(--lobe-color-text-secondary)`},children:Ze[e.type]})}),(0,H.jsxs)(c,{gap:4,style:{overflow:`hidden`},children:[(0,H.jsxs)(c,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(`span`,{className:V.title,children:e.name}),(0,H.jsx)(ue,{color:Qe[e.type],children:a(`creds.types.${e.type}`)})]}),(0,H.jsxs)(c,{horizontal:!0,align:`center`,gap:8,children:[(0,H.jsx)(`code`,{className:V.key,children:e.key}),e.description&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{style:{color:`var(--lobe-color-text-quaternary)`},children:`·`}),(0,H.jsx)(`span`,{className:V.description,children:e.description})]})]})]})]}),(0,H.jsx)(c,{horizontal:!0,align:`center`,gap:8,onClick:ee,children:(0,H.jsx)(d,{items:s,placement:`bottomRight`,children:(0,H.jsx)(m,{icon:ye})})})]})}),U.displayName=`CredItem`})),W,G,K,et,tt=t((()=>{h(),k(),x(),f(),T(),W=e(s()),n(),A(),G=e(o()),K=u(({css:e})=>({footer:e`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `,kvPair:e`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `})),et=({cred:e,onCancel:t,onSuccess:n})=>{let{t:i}=r(`setting`),[a]=v.useForm(),[o,s]=(0,W.useState)(!0);(0,W.useEffect)(()=>{(async()=>{try{let t=(await j.market.creds.get.query({decrypt:!0,id:e.id})).plaintext||{},n=Object.entries(t).map(([e,t])=>({key:e,value:t}));a.setFieldsValue({description:e.description,kvPairs:n.length>0?n:[{key:``,value:``}],name:e.name})}catch{a.setFieldsValue({description:e.description,kvPairs:[{key:``,value:``}],name:e.name})}finally{s(!1)}})()},[e.id,e.name,e.description,a]);let l=O({mutationFn:t=>{let n=(t.kvPairs||[]).reduce((e,t)=>(t.key&&t.value&&(e[t.key]=t.value),e),{});return j.market.creds.update.mutate({description:t.description,id:e.id,name:t.name,values:n})},onSuccess:()=>{n()}});return o?(0,G.jsx)(c,{align:`center`,justify:`center`,style:{padding:48},children:(0,G.jsx)(y,{})}):(0,G.jsxs)(v,{form:a,layout:`vertical`,onFinish:e=>{l.mutate(e)},children:[(0,G.jsx)(v.Item,{label:i(`creds.form.name`),name:`name`,rules:[{required:!0,message:i(`creds.form.nameRequired`)}],children:(0,G.jsx)(b,{})}),(0,G.jsx)(v.Item,{label:i(`creds.form.values`),children:(0,G.jsx)(v.List,{name:`kvPairs`,children:(t,{add:n,remove:r})=>(0,G.jsxs)(c,{gap:8,children:[t.map(({key:n,name:a,...o})=>(0,G.jsxs)(`div`,{className:K.kvPair,children:[(0,G.jsx)(v.Item,{...o,name:[a,`key`],style:{flex:1,marginBottom:0},children:(0,G.jsx)(b,{placeholder:e.type===`kv-env`?`ENV_VAR_NAME`:`Header-Name`})}),(0,G.jsx)(v.Item,{...o,name:[a,`value`],style:{flex:2,marginBottom:0},children:(0,G.jsx)(b.Password,{placeholder:i(`creds.form.valuePlaceholder`)})}),t.length>1&&(0,G.jsx)(m,{icon:fe,size:`small`,type:`text`,onClick:()=>r(a)})]},n)),(0,G.jsx)(m,{block:!0,icon:w,type:`dashed`,onClick:()=>n({key:``,value:``}),children:i(`creds.form.addPair`)})]})})}),(0,G.jsx)(v.Item,{label:i(`creds.form.description`),name:`description`,children:(0,G.jsx)(b.TextArea,{placeholder:i(`creds.form.descriptionPlaceholder`),rows:2})}),(0,G.jsxs)(`div`,{className:K.footer,children:[(0,G.jsx)(m,{onClick:t,children:i(`creds.form.cancel`)}),(0,G.jsx)(m,{htmlType:`submit`,loading:l.isPending,type:`primary`,children:i(`creds.form.save`)})]})]})}})),q,nt,rt,it=t((()=>{h(),k(),x(),f(),n(),A(),q=e(o()),nt=u(({css:e})=>({footer:e`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `})),rt=({cred:e,onCancel:t,onSuccess:n})=>{let{t:i}=r(`setting`),[a]=v.useForm(),o=O({mutationFn:t=>j.market.creds.update.mutate({description:t.description,id:e.id,name:t.name}),onSuccess:()=>{n()}});return(0,q.jsxs)(v,{form:a,layout:`vertical`,initialValues:{description:e.description,name:e.name},onFinish:e=>{o.mutate(e)},children:[(0,q.jsx)(v.Item,{label:i(`creds.form.name`),name:`name`,rules:[{required:!0,message:i(`creds.form.nameRequired`)}],children:(0,q.jsx)(b,{})}),(0,q.jsx)(v.Item,{label:i(`creds.form.description`),name:`description`,children:(0,q.jsx)(b.TextArea,{placeholder:i(`creds.form.descriptionPlaceholder`),rows:2})}),(0,q.jsxs)(`div`,{className:nt.footer,children:[(0,q.jsx)(m,{onClick:t,children:i(`creds.form.cancel`)}),(0,q.jsx)(m,{htmlType:`submit`,loading:o.isPending,type:`primary`,children:i(`creds.form.save`)})]})]})}})),J,at,ot=t((()=>{D(),tt(),it(),J=e(o()),at=({cred:e,onSuccess:t})=>{let{close:n}=Se(),r=e.type===`kv-env`||e.type===`kv-header`,i=()=>{t?.(),n()};return r?(0,J.jsx)(et,{cred:e,onCancel:n,onSuccess:i}):(0,J.jsx)(rt,{cred:e,onCancel:n,onSuccess:i})}})),st,ct,lt=t((()=>{D(),a(),ot(),st=e(o()),ct=e=>E({content:(0,st.jsx)(at,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:i(`creds.edit.title`,{ns:`setting`}),width:`min(90vw, 560px)`})})),ut,Y,dt,X,ft,pt,mt,ht=t((()=>{h(),k(),x(),f(),T(),ut=e(s()),n(),A(),Y=e(o()),{Text:dt}=le,X=u(({css:e,cssVar:t})=>({kvKey:e`
    min-width: 140px;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: ${t.borderRadius} 0 0 ${t.borderRadius};

    font-family: ${t.fontFamilyCode};
    font-size: 13px;
    color: ${t.colorTextSecondary};

    background: ${t.colorFillQuaternary};
  `,kvRow:e`
    display: flex;
    align-items: stretch;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};

    &:not(:last-child) {
      margin-block-end: 8px;
    }
  `,kvValue:e`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    padding-block: 8px;
    padding-inline: 12px;
    border-radius: 0 ${t.borderRadius} ${t.borderRadius} 0;

    font-family: ${t.fontFamilyCode};
    font-size: 13px;

    background: ${t.colorBgContainer};
  `,maskedValue:e`
    color: ${t.colorTextQuaternary};
    letter-spacing: 2px;
  `,toggleBtn:e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px;
    border-radius: ${t.borderRadiusSM};

    color: ${t.colorTextTertiary};

    transition: all 0.2s;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }
  `,valuesSection:e`
    margin-block-start: 16px;
  `,valuesTitle:e`
    margin-block-end: 12px;
    font-weight: 500;
  `})),ft=e=>e.length<=4?`••••••••`:`••••••••`+e.slice(-4),pt=({keyName:e,value:t})=>{let[n,r]=(0,ut.useState)(!1);return(0,Y.jsxs)(`div`,{className:X.kvRow,children:[(0,Y.jsx)(`div`,{className:X.kvKey,children:e}),(0,Y.jsxs)(`div`,{className:X.kvValue,children:[(0,Y.jsx)(dt,{className:l(!n&&X.maskedValue),style:{flex:1,fontFamily:`var(--lobe-font-family-code)`,fontSize:13,wordBreak:`break-all`},children:n?t:ft(t)}),(0,Y.jsxs)(c,{horizontal:!0,align:`center`,gap:4,children:[(0,Y.jsx)(`div`,{className:X.toggleBtn,onClick:()=>r(!n),children:n?(0,Y.jsx)(pe,{size:16}):(0,Y.jsx)(he,{size:16})}),(0,Y.jsx)(te,{content:t,size:`small`})]})]})]})},mt=({cred:e})=>{let{t}=r(`setting`),{data:n,isLoading:i,error:a}=we({queryFn:()=>j.market.creds.get.query({decrypt:!0,id:e.id}),queryKey:[`cred-plaintext`,e.id]}),o=n?.plaintext||{},s=Object.entries(o);return i?(0,Y.jsx)(oe,{active:!0,paragraph:{rows:3}}):a?(0,Y.jsx)(C,{showIcon:!0,description:a.message,message:t(`creds.view.error`),type:`error`}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(C,{showIcon:!0,message:t(`creds.view.warning`),style:{marginBottom:16},type:`warning`}),(0,Y.jsxs)(_,{bordered:!0,column:1,size:`small`,children:[(0,Y.jsx)(_.Item,{label:t(`creds.table.name`),children:e.name}),(0,Y.jsx)(_.Item,{label:t(`creds.table.key`),children:(0,Y.jsx)(`code`,{children:e.key})}),(0,Y.jsx)(_.Item,{label:t(`creds.table.type`),children:e.type?t(`creds.types.${e.type}`):`-`})]}),s.length>0&&(0,Y.jsxs)(`div`,{className:X.valuesSection,children:[(0,Y.jsx)(`div`,{className:X.valuesTitle,children:t(`creds.view.values`)}),s.map(([e,t])=>(0,Y.jsx)(pt,{keyName:e,value:String(t)},e))]}),s.length===0&&e.type===`oauth`&&(0,Y.jsx)(C,{showIcon:!0,description:t(`creds.view.oauthNote`),message:t(`creds.view.noValues`),style:{marginTop:16},type:`info`})]})}})),gt,_t,vt=t((()=>{D(),a(),ht(),gt=e(o()),_t=e=>E({content:(0,gt.jsx)(mt,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:i(`creds.view.title`,{name:e.cred.name,ns:`setting`}),width:`min(90vw, 600px)`})})),Z,Q,yt,bt=t((()=>{h(),k(),x(),f(),T(),n(),ke(),A(),$e(),lt(),vt(),Z=e(o()),Q=u(({css:e})=>({container:e`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,empty:e`
    padding-block: 48px;
    padding-inline: 0;
  `,signInPrompt:e`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    padding: 48px;
  `})),yt=()=>{let{t:e}=r(`setting`),{isAuthenticated:t,isLoading:n,signIn:i}=Oe(),{data:a,isLoading:o,refetch:s}=Te.market.creds.list.useQuery(void 0,{enabled:t}),l=O({mutationFn:e=>j.market.creds.delete.mutate({id:e}),onSuccess:()=>{s()}}),u=a?.data??[],d=e=>{ct({cred:e,onSuccess:()=>s()})},f=e=>{_t({cred:e})};return n?(0,Z.jsx)(c,{align:`center`,justify:`center`,style:{padding:48},children:(0,Z.jsx)(y,{})}):t?(0,Z.jsx)(`div`,{className:Q.container,children:o?(0,Z.jsx)(c,{align:`center`,justify:`center`,style:{padding:48},children:(0,Z.jsx)(y,{})}):u.length===0?(0,Z.jsx)(g,{className:Q.empty,description:e(`creds.empty`)}):(0,Z.jsx)(c,{gap:0,children:u.map(e=>(0,Z.jsx)(U,{cred:e,onDelete:e=>l.mutate(e),onEdit:d,onView:f},e.id))})}):(0,Z.jsxs)(`div`,{className:Q.signInPrompt,children:[(0,Z.jsx)(g,{description:e(`creds.signInRequired`)}),(0,Z.jsx)(m,{icon:de,type:`primary`,onClick:()=>i(),children:e(`creds.signIn`)})]})}})),xt,$,St;t((()=>{h(),T(),xt=e(s()),n(),Ae(),Je(),bt(),$=e(o()),St=()=>{let{t:e}=r(`setting`),[t,n]=(0,xt.useState)(0);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(je,{title:e(`tab.creds`),extra:(0,$.jsx)(m,{icon:(0,$.jsx)(p,{icon:w}),size:`large`,onClick:()=>{qe({onSuccess:()=>n(e=>e+1)})},children:e(`creds.create`)})}),(0,$.jsx)(yt,{},t)]})},St.displayName=`CredsSetting`}))();export{St as default};