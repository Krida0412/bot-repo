import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,mt as r,pt as i,xt as a,yt as o}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{$r as s,Ct as c,E as l,Et as u,Mn as d,Qr as f,Qt as p,S as m,St as h,_l as g,gl as ee,jn as _,pi as v,vl as y,yl as b}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as x,Ba as S,Ha as te,Ia as C,Ma as w,Oa as T,da as E,za as D}from"./imperative-Xfjd337A.js";import{Os as ne,cs as O,er as re,mr as k,n as A,vs as ie}from"./es-2ZVhpwv7.js";import{J as ae,S as oe,n as j,r as se,z as ce}from"./es-DMB7XTXN.js";import{Xp as le,cl as ue,dt as M,gi as de,ml as fe}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{Bt as N,en as pe,in as me,zt as he}from"./agent-BV7ChU6o.js";import{n as ge,o as P}from"./client-C0dgA5Xe.js";import{Ar as _e,Or as ve,Ui as ye,n as be}from"./store-DTt7Ili4.js";import{i as xe,n as Se}from"./AntdStaticMethods-BSNJ-JNy.js";import{n as Ce,r as we}from"./upload-BdP7MiWE.js";import{F as Te,P as Ee}from"./index-AVlnZl7f.js";import{n as De,t as Oe}from"./dist-DHlbMz6P.js";var F,I,L,R,z,ke=t((()=>{A(),w(),F=e(b()),Ee(),I=e(y()),L=`ant`,R=C(({css:e,cssVar:t})=>({modalTitleDark:e`
    &.${L}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          color-mix(in srgb, ${t.colorBgElevated} 0%, transparent),
          ${t.colorBgContainer} 80px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${L}-modal-title {
      font-size: 24px;
    }
  `,modalTitleLight:e`
    &.${L}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          color-mix(in srgb, ${t.colorBgElevated} 0%, transparent),
          ${t.colorBgContainer} 140px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${L}-modal-title {
      font-size: 24px;
    }
  `})),z=(0,F.memo)(({icon:e,onOpenChange:t,title:n,open:r,children:i,width:a=550,height:o})=>(0,I.jsx)(k,{centered:!0,afterOpenChange:t,closable:!1,footer:null,height:o,open:r,width:a,classNames:{header:Te()?R.modalTitleDark:R.modalTitleLight},title:(0,I.jsxs)(x,{horizontal:!0,gap:8,children:[(0,I.jsx)(E,{icon:e}),n]}),children:i}))})),B,Ae,je=t((()=>{ge(),Ce(),pe(),d(),m(),B=class{importSettings=async e=>{await me.getState().importAppSettings(e)};importData=async(e,t)=>{let n=e=>{t?.onStageChange?.(_.Error);let n=e;t?.onError?.({code:n.data.code,httpStatus:n.data.httpStatus,message:n.message,path:n.data.path})};if((e.messages?.length||0)+(e.sessionGroups?.length||0)+(e.sessions?.length||0)+(e.topics?.length||0)<500){t?.onStageChange?.(_.Importing);let r=Date.now();try{let n=await P.importer.importByPost.mutate({data:e}),i=Date.now()-r;t?.onStageChange?.(_.Success),t?.onSuccess?.(n.results,i)}catch(e){n(e)}return}await this.uploadData(e,{callbacks:t,handleError:n})};importPgData=async(e,t)=>{let{callbacks:n}=t||{},r=e=>{n?.onStageChange?.(_.Error);let t=e;n?.onError?.({code:t.data.code,httpStatus:t.data.httpStatus,message:t.message,path:t.data.path})};if(Object.values(e.data).map(e=>e.length).reduce((e,t)=>e+t,0)<500){n?.onStageChange?.(_.Importing);let t=Date.now();try{let r=await P.importer.importPgByPost.mutate(e),i=Date.now()-t;n?.onStageChange?.(_.Success),n?.onSuccess?.(r.results,i)}catch(e){r(e)}return}await this.uploadData(e,{callbacks:n,handleError:r})};uploadData=async(e,{callbacks:t,handleError:n})=>{let r=`${l()}.json`,i;try{t?.onStageChange?.(_.Uploading),i=(await we.uploadDataToS3(e,{filename:r,onProgress:(e,n)=>{t?.onFileUploading?.(n)},pathname:`import_config/${r}`})).data.path}catch{throw Error(`Upload Error`)}t?.onStageChange?.(_.Importing);let a=Date.now();try{let e=await P.importer.importByFile.mutate({pathname:i}),n=Date.now()-a;t?.onStageChange?.(_.Success),t?.onSuccess?.(e.results,n)}catch(e){n(e)}}},Ae=new B})),Me,Ne=t((()=>{o(),Se(),Me=async e=>{let t=await e.text();try{return JSON.parse(t)}catch(e){console.error(e),xe.error({description:a(`import.importConfigFile.description`,{ns:`error`,reason:e.message}),message:a(`import.importConfigFile.title`,{ns:`error`})})}}})),Pe,Fe,Ie=t((()=>{he(),ee(),v(),Pe=class{submitDBV1UpgradeError=(e,t)=>{let n=["```json",JSON.stringify(t,null,2),"```"].join(`
`),r=t?.message||``,i=N.stringifyUrl({query:{body:n,labels:`❌ Database Migration Error`,title:`[Migration Error V${e}] ${r}`},url:g(f,`/issues/new`)});window.open(i,`_blank`)};submitImportError=e=>{let t=["```json",JSON.stringify(e,null,2),"```"].join(`
`),n=e?.message||``,r=N.stringifyUrl({query:{body:t,labels:`❌ Import Config Error`,title:`[Config Import Error] ${n}`},url:g(f,`/issues/new`)});window.open(r,`_blank`)};submitPgliteInitError=e=>{let t=["```json",JSON.stringify(e,null,2),"```"].join(`
`),n=e?.message||``,r=N.stringifyUrl({query:{body:t,labels:`❌ Database Init Error`,title:`[Database Init Error] ${n}`},url:g(f,`/issues/new`)});window.open(r,`_blank`)}},Fe=new Pe})),Le,V,Re,ze=t((()=>{A(),j(),M(),Le=e(b()),n(),De(),v(),Ie(),V=e(y()),Re=(0,Le.memo)(({error:e,onClick:t})=>{let{t:n}=i(`common`);return(0,V.jsx)(ce,{icon:(0,V.jsx)(E,{icon:de}),status:`error`,style:{paddingBlock:24,width:450},title:n(`importModal.error.title`),extra:(0,V.jsxs)(x,{gap:12,style:{textAlign:`start`},children:[(0,V.jsx)(ie,{style:{flex:1},title:e?.message,type:`error`,extra:(0,V.jsx)(re,{actionIconSize:`small`,language:`json`,children:JSON.stringify(e,null,2)})}),(0,V.jsx)(O,{onClick:t,children:n(`close`)})]}),subTitle:(0,V.jsx)(Oe,{children:(0,V.jsxs)(r,{i18nKey:`importModal.error.desc`,ns:`common`,children:[`非常抱歉，数据库升级过程发生异常。请重试升级，或`,(0,V.jsx)(`a`,{"aria-label":`issue`,href:s,rel:`noreferrer`,target:`_blank`,onClick:t=>{t.preventDefault(),Fe.submitImportError(e)},children:`提交问题`}),`我们将会第一时间帮你排查问题。`]})})})})})),Be,H,U,Ve,He,W,Ue=t((()=>{A(),w(),Be=e(b()),H=e(y()),U=28,Ve=te`
  12.5% {
    box-shadow:
      ${U}px -${U}px 0 0,
      ${U*2}px -${U}px 0 0,
      ${U*3}px -${U}px 0 5px,
      ${U}px 0 0 5px,
      ${U*2}px 0 0 0,
      ${U*3}px 0 0 5px,
      ${U}px ${U}px 0 0,
      ${U*2}px ${U}px 0 0,
      ${U*3}px ${U}px 0 0;
  }

  25% {
    box-shadow:
      ${U}px -${U}px 0 5px,
      ${U*2}px -${U}px 0 0,
      ${U*3}px -${U}px 0 5px,
      ${U}px 0 0 0,
      ${U*2}px 0 0 0,
      ${U*3}px 0 0 0,
      ${U}px ${U}px 0 0,
      ${U*2}px ${U}px 0 5px,
      ${U*3}px ${U}px 0 0;
  }

  50% {
    box-shadow:
      ${U}px -${U}px 0 5px,
      ${U*2}px -${U}px 0 5px,
      ${U*3}px -${U}px 0 0,
      ${U}px 0 0 0,
      ${U*2}px 0 0 0,
      ${U*3}px 0 0 0,
      ${U}px ${U}px 0 0,
      ${U*2}px ${U}px 0 0,
      ${U*3}px ${U}px 0 5px;
  }

  62.5% {
    box-shadow:
      ${U}px -${U}px 0 0,
      ${U*2}px -${U}px 0 0,
      ${U*3}px -${U}px 0 0,
      ${U}px 0 0 5px,
      ${U*2}px 0 0 0,
      ${U*3}px 0 0 0,
      ${U}px ${U}px 0 0,
      ${U*2}px ${U}px 0 5px,
      ${U*3}px ${U}px 0 5px;
  }

  75% {
    box-shadow:
      ${U}px -${U}px 0 0,
      ${U*2}px -${U}px 0 5px,
      ${U*3}px -${U}px 0 0,
      ${U}px 0 0 0,
      ${U*2}px 0 0 0,
      ${U*3}px 0 0 5px,
      ${U}px ${U}px 0 0,
      ${U*2}px ${U}px 0 0,
      ${U*3}px ${U}px 0 5px;
  }

  87.5% {
    box-shadow:
      ${U}px -${U}px 0 0,
      ${U*2}px -${U}px 0 5px,
      ${U*3}px -${U}px 0 0,
      ${U}px 0 0 0,
      ${U*2}px 0 0 5px,
      ${U*3}px 0 0 0,
      ${U}px ${U}px 0 5px,
      ${U*2}px ${U}px 0 0,
      ${U*3}px ${U}px 0 0;
  }
`,He=C(({css:e,cssVar:t})=>({loader:e`
      transform: translateX(-${U*2}px);

      aspect-ratio: 1;
      width: 6px;
      border-radius: 50%;

      color: ${t.colorPrimary};

      box-shadow:
        ${U}px -${U}px 0 0,
        ${U*2}px -${U}px 0 0,
        ${U*3}px -${U}px 0 0,
        ${U}px 0 0 5px,
        ${U*2}px 0 0 5px,
        ${U*3}px 0 0 5px,
        ${U}px ${U}px 0 0,
        ${U*2}px ${U}px 0 0,
        ${U*3}px ${U}px 0 0;

      animation: ${Ve} 2s infinite linear;
    `})),W=(0,Be.memo)(()=>(0,H.jsx)(T,{style:{height:80},children:(0,H.jsx)(`div`,{className:He.loader})}))})),We,G,Ge,Ke=t((()=>{A(),j(),w(),We=e(b()),n(),u(),Ue(),G=e(y()),Ge=(0,We.memo)(({progress:e=0,speed:t=0,restTime:n})=>{let{t:r}=i(`common`);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(W,{}),(0,G.jsxs)(x,{align:`center`,gap:8,width:`100%`,children:[r(`importModal.uploading.desc`),(0,G.jsxs)(x,{flex:1,gap:8,width:`100%`,children:[(0,G.jsx)(ae,{showInfo:!0,percent:e,strokeColor:D.colorSuccess,trailColor:D.colorSuccessBg}),(0,G.jsxs)(x,{horizontal:!0,distribution:`space-between`,style:{color:D.colorTextDescription,fontSize:12},children:[(0,G.jsxs)(`span`,{children:[r(`importModal.uploading.restTime`),`: `,n?c(n):`-`]}),(0,G.jsxs)(`span`,{children:[r(`importModal.uploading.speed`),`: `,h(t*1024)]})]})]})]})]})})})),qe,K,q,Je,J,Ye,Xe=t((()=>{A(),j(),w(),M(),qe=e(b()),n(),K=e(y()),q=e=>{let t=[];for(let[n,r]of Object.entries(e.data))Array.isArray(r)&&r.length>0&&t.push({count:r.length,name:n});return t},Je=e=>e.reduce((e,t)=>e+t.count,0),J=C(({css:e,cssVar:t})=>({duplicateAlert:e`
      margin-block-start: ${t.marginMD};
      padding: ${t.paddingMD};
      border: 1px solid ${t.colorWarningBorder};
      border-radius: ${t.borderRadiusLG};

      background-color: ${t.colorWarningBg};
    `,duplicateDescription:e`
      margin-block-start: ${t.marginXS};
      font-size: ${t.fontSizeSM};
      color: ${t.colorTextSecondary};
    `,duplicateOptions:e`
      margin-block-start: ${t.marginSM};
    `,duplicateTag:e`
      border-color: ${t.colorWarningBorder};
      color: ${t.colorWarning};
      background-color: ${t.colorWarningBg};
    `,hash:e`
      font-family: ${t.fontFamilyCode};
      font-size: 12px;
      color: ${t.colorTextTertiary};
    `,infoIcon:e`
      color: ${t.colorTextSecondary};
    `,modalContent:e`
      padding-block: ${t.paddingMD};
      padding-inline: 0;
    `,successIcon:e`
      color: ${t.colorSuccess};
    `,tableContainer:e`
      overflow: hidden;
      border: 1px solid ${t.colorBorderSecondary};
      border-radius: ${t.borderRadiusLG};
    `,tableName:e`
      font-family: ${t.fontFamilyCode};
    `,warningIcon:e`
      color: ${t.colorWarning};
    `})),Ye=({open:e=!0,onOpenChange:t=()=>{},onConfirm:n=()=>{},onCancel:r=()=>{},importData:a})=>{let{t:o}=i(`common`),[s]=(0,qe.useState)(`skip`),c=q(a),l=Je(c),u=[{dataIndex:`name`,key:`name`,render:e=>(0,K.jsx)(`div`,{className:J.tableName,children:e}),title:o(`importPreview.tables.name`)},{dataIndex:`count`,key:`count`,title:o(`importPreview.tables.count`)}];return(0,K.jsx)(k,{open:e,title:o(`importPreview.title`),width:700,footer:[(0,K.jsx)(O,{onClick:()=>{t(!1),r()},children:o(`cancel`)},`cancel`),(0,K.jsx)(O,{type:`primary`,onClick:()=>{n(s===`overwrite`),t(!1)},children:o(`importPreview.confirmImport`)},`confirm`)],onCancel:()=>t(!1),children:(0,K.jsx)(`div`,{className:J.modalContent,children:(0,K.jsxs)(x,{gap:16,children:[(0,K.jsxs)(x,{gap:4,children:[(0,K.jsxs)(x,{horizontal:!0,align:`center`,justify:`space-between`,width:`100%`,children:[(0,K.jsxs)(x,{horizontal:!0,align:`center`,gap:8,children:[(0,K.jsx)(ue,{className:J.infoIcon,size:16}),(0,K.jsx)(ne,{strong:!0,children:o(`importPreview.totalRecords`,{count:l})})]}),(0,K.jsx)(x,{horizontal:!0,children:(0,K.jsx)(ne,{type:`secondary`,children:o(`importPreview.totalTables`,{count:c.length})})})]}),(0,K.jsxs)(x,{horizontal:!0,className:J.hash,gap:4,children:[o(`importPreview.hashLabel`),`: `,(0,K.jsx)(`span`,{children:a.schemaHash})]})]}),(0,K.jsx)(`div`,{className:J.tableContainer,children:(0,K.jsx)(oe,{columns:u,dataSource:c,pagination:!1,rowKey:`name`,scroll:{y:350},size:`small`})})]})})})}})),Ze,Y,Qe,$e,et=t((()=>{A(),j(),w(),M(),Ze=e(b()),n(),Y=e(y()),Qe=C(({css:e,cssVar:t})=>({zeroCell:e`
      color: ${t.colorTextQuaternary};
    `})),$e=(0,Ze.memo)(({duration:e,dataSource:t,onClickFinish:n})=>{let{t:r}=i(`common`),a=e=>e||(0,Y.jsx)(`span`,{className:Qe.zeroCell,children:`0`});return(0,Y.jsx)(ce,{icon:(0,Y.jsx)(E,{icon:le}),status:`success`,style:{paddingBlock:24,paddingInline:0},title:r(`importModal.finish.title`),extra:(0,Y.jsx)(O,{size:`large`,type:`primary`,onClick:n,children:r(`importModal.finish.start`)}),subTitle:t?(0,Y.jsxs)(x,{gap:16,width:500,children:[r(`importModal.finish.subTitle`,{duration:(e/1e3).toFixed(2)}),(0,Y.jsx)(oe,{bordered:!0,dataSource:t,pagination:!1,rowKey:`title`,size:`small`,columns:[{dataIndex:`title`,render:a,title:r(`importModal.result.type`)},{dataIndex:`added`,render:a,title:r(`importModal.result.added`)},{dataIndex:`skips`,render:a,title:r(`importModal.result.skips`)},{dataIndex:`error`,render:a,title:r(`importModal.result.errors`)},{dataIndex:`updated`,render:a,title:r(`importModal.result.update`)}]})]}):r(`importModal.finish.onlySettings`)})})})),X,Z,Q,$,tt=t((()=>{p(),A(),j(),w(),M(),X=e(b()),n(),ke(),je(),ye(),ve(),Ne(),ze(),Ke(),Xe(),Ue(),et(),Z=e(y()),Q=C(({css:e})=>({children:e`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: transparent;
    }
  `,wrapper:e`
    font-size: inherit;
  `})),$=(0,X.memo)(({children:e,onFinishImport:t})=>{let{t:n}=i(`common`),r=_e(e=>e.refreshAgentList),[a,o]=be(e=>[e.refreshMessages,e.refreshTopic]),[s,c]=(0,X.useState)(0),[l,u]=(0,X.useState)(_.Start),[d,f]=(0,X.useState)(),[p,m]=(0,X.useState)(),[h,g]=(0,X.useState)(),[ee,v]=(0,X.useState)(!1),[y,b]=(0,X.useState)(void 0),x=(0,X.useMemo)(()=>{if(!h)return;let{type:e,...t}=h;if(e!==`settings`)return Object.entries(t).filter(([,e])=>!!e).map(([e,t])=>({added:t.added,error:t.errors,skips:t.skips,title:e,updated:t.updated||0}))},[h]),te=l===_.Success||l===_.Error,C=()=>{u(_.Finished),g(void 0),m(void 0),f(void 0),t?.()},w=(0,X.useMemo)(()=>{switch(l){case _.Preparing:return(0,Z.jsxs)(T,{gap:24,padding:40,children:[(0,Z.jsx)(W,{}),(0,Z.jsx)(`p`,{children:n(`importModal.preparing`)})]});case _.Importing:return(0,Z.jsxs)(T,{gap:24,padding:40,children:[(0,Z.jsx)(W,{}),(0,Z.jsx)(`p`,{children:n(`importModal.loading`)})]});case _.Uploading:return(0,Z.jsx)(T,{gap:24,padding:40,children:(0,Z.jsx)(Ge,{progress:d?.progress,restTime:d?.restTime,speed:d?.speed})});case _.Success:return(0,Z.jsx)(T,{gap:24,paddingInline:16,children:(0,Z.jsx)($e,{dataSource:x,duration:s,onClickFinish:C})});case _.Error:return(0,Z.jsx)(T,{gap:24,paddingBlock:24,paddingInline:0,children:(0,Z.jsx)(Re,{error:p,onClick:C})});default:return}},[l,d]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(z,{icon:fe,open:l!==_.Start&&l!==_.Finished,title:n(`importModal.title`),width:te?600:400,children:w}),(0,Z.jsx)(se,{accept:`application/json`,className:S(Q.wrapper),maxCount:1,showUploadList:!1,beforeUpload:async e=>{let t=await Me(e);return t?(b(t),v(!0),!1):!1},children:(0,Z.jsx)(`div`,{className:S(Q.children),children:e})}),y&&(0,Z.jsx)(Ye,{importData:y,open:ee,onOpenChange:v,onConfirm:async e=>{u(_.Preparing),await Ae.importPgData(y,{callbacks:{onError:e=>{m(e)},onFileUploading:e=>{f(e)},onStageChange:e=>{u(e)},onSuccess:(e,t)=>{e&&g(e),c(t)}},overwriteExisting:e}),await r(),await a(),await o()}})]})})}));export{tt as n,$ as t};