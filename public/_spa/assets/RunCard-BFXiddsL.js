import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{dt as n,pt as r,xt as i,yt as a}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{Es as o,Gr as s,Rr as c,Wo as l,vl as u,yl as d}from"../vendor/vendor-ai-runtime-uGyLq_TW.js";import{Aa as f,Ia as p,Ma as m,Oa as h,da as g,za as _}from"./imperative-Xfjd337A.js";import{Da as v,Es as y,Na as b,Os as x,Sr as ee,Ys as te,cs as S,ha as ne,n as C,us as re,ws as w}from"./es-2ZVhpwv7.js";import{$t as T,Cn as ie,Ct as ae,Ft as E,Gt as D,J as oe,S as se,_t as O,an as ce,ct as le,kn as ue,lt as k,n as A,r as de,xt as fe,zt as pe}from"./es-DMB7XTXN.js";import{a as me,m as he,n as ge}from"../vendor/vendor-react-D1dBs3e7.js";import{Ir as _e,Jg as ve,Jp as ye,Mi as be,Ra as xe,Sp as Se,ba as Ce,bf as we,bn as Te,dt as j,fr as Ee,ml as De,mm as Oe,mn as ke,nf as Ae,np as je,vd as Me,vg as Ne,vu as M,wa as Pe}from"../vendor/vendor-icons-BvZ3Gdzv.js";import{c as Fe,d as N,f as Ie,n as P,r as F,s as Le}from"./base-ui-CG2gzEWh.js";import{n as Re,t as ze}from"./agent-BUstbF8o.js";import{n as Be,r as Ve}from"./upload-BdP7MiWE.js";import{a as He,i as Ue,r as I,t as We}from"./eval-CYfgeMz2.js";import{i as Ge,n as Ke,r as qe,t as Je}from"./StatusBadge-CR45qUcQ.js";import{r as Ye,t as Xe}from"./utils-DcWsxsSY.js";var L,Ze,Qe,$e=t((()=>{j(),L={browsecomp:{id:`browsecomp`,category:`research`,name:`BrowseComp`,description:`Measuring the ability for agents to browse the web, comprises 1,266 questions.`,icon:M,formatDescription:`format: Topic (category/tags), Question (input), Answer (expected)`,requiredFields:[`question`,`answer`,`problem_topic`,`canary`],optionalFields:[`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`problem_topic`]},validation:{requireExpected:!0,expectedFormat:`string`}},"browsecomp-zh":{id:`browsecomp-zh`,category:`research`,name:`BrowseComp-ZH`,description:`Chinese web browsing: 289 multi-step reasoning questions`,icon:M,formatDescription:`format: Topic (category/tags), Question (input), Answer (expected)`,requiredFields:[`Question`,`Answer`],optionalFields:[`Topic`,`canary`,`case_id`],fieldInference:{input:[`Question`,`question`,`prompt`],expected:[`Answer`,`answer`],choices:[],category:[`Topic`,`topic`,`category`]},validation:{requireExpected:!0,expectedFormat:`string`}},widesearch:{id:`widesearch`,category:`research`,name:`WideSearch`,description:`Evaluating the capabilities of agents in broad information-seeking tasks, consisting of 200 questions.`,icon:M,formatDescription:`format: instance_id, query (input), evaluation (expected), language`,requiredFields:[`instance_id`,`query`,`evaluation`,`language`],optionalFields:[`case_id`],fieldInference:{input:[`query`],expected:[`evaluation`],choices:[],category:[`language`],sortOrder:[]},validation:{requireExpected:!0,expectedFormat:`string`}},"hle-text":{id:`hle-text`,category:`research`,name:`Humanity's Last Exam, HLE (Text Only)`,description:`Humanity's Last Exam (HLE) is a multi-modal benchmark at the frontier of human knowledge, consisting of 2150 questions.`,icon:M,formatDescription:`format: id, question (input), answer (expected), answer_type, rationale, raw_subject, category`,requiredFields:[`id`,`question`,`answer`,`answer_type`,`rationale`,`raw_subject`,`category`],optionalFields:[`canary`,`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`category`]}},"hle-verified":{id:`hle-verified`,category:`research`,name:`Humanity's Last Exam, HLE (Verified Answers)`,description:`A subset of Humanity's Last Exam (HLE) with verified answers, designed to evaluate the ability to produce correct answers rather than just plausible ones.`,icon:M,formatDescription:`format: id, question (input), answer (expected), answer_type, rationale, raw_subject, category, Verified_Classes`,requiredFields:[`id`,`question`,`answer`,`answer_type`,`rationale`,`raw_subject`,`category`,`Verified_Classes`],optionalFields:[`canary`,`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`category`]}},deepsearchqa:{id:`deepsearchqa`,category:`research`,name:`DeepSearchQA`,description:`A 900-prompt factuality benchmark from Google DeepMind, designed to evaluate agents on difficult multi-step information-seeking tasks across 17 different fields.`,icon:M,formatDescription:`problem, problem_category, answer, answer_type`,requiredFields:[`problem`,`answer`,`problem_category`,`answer_type`],optionalFields:[`case_id`],fieldInference:{input:[`problem`],expected:[`answer`],choices:[],category:[`problem_category`],sortOrder:[]},validation:{requireExpected:!0,expectedFormat:`string`}},sealqa:{id:`sealqa`,category:`research`,name:`SealQA`,description:`SealQA is a new challenge benchmark for evaluating SEarch- Augmented Language models on fact-seeking questions where web search yields conflicting, noisy, or unhelpful results.`,icon:M,formatDescription:`format: question (input), answer (expected), topic (category)`,requiredFields:[`question`,`answer`,`topic`,`canary`],optionalFields:[`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`topic`]},validation:{requireExpected:!0,expectedFormat:`string`}},xbench:{id:`xbench`,category:`research`,name:`xbench`,description:`Chinese search: ~200 factual query questions`,icon:M,formatDescription:`format: id (item number), prompt (input), type (metadata), answer (expected)`,requiredFields:[`prompt`,`answer`],optionalFields:[`type`,`id`],fieldInference:{input:[`prompt`,`question`,`input`],expected:[`answer`,`response`],choices:[],category:[`type`,`category`],sortOrder:[`id`]},validation:{requireExpected:!0,expectedFormat:`string`}},mmlu:{id:`mmlu`,category:`reference`,name:`MMLU (Reference)`,description:`Multiple choice format (for reference only)`,icon:M,formatDescription:`format: question, choices array (or A/B/C/D columns), answer (index/letter)`,requiredFields:[`question`,`choices`,`answer`],optionalFields:[`subject`,`difficulty`],fieldInference:{input:[`question`,`prompt`,`query`],expected:[`answer`,`correct_answer`,`label`],choices:[`choices`,`options`,`A`,`B`,`C`,`D`],category:[`context`,`subject`,`category`]},validation:{requireExpected:!0,requireChoices:!0,expectedFormat:`index`}},custom:{id:`custom`,category:`custom`,name:`Custom`,description:`Define your own field mapping`,icon:we,formatDescription:`Custom format - you define the mapping. Only requirement: must have an "input" field.`,requiredFields:[`input`],optionalFields:[`expected`,`choices`,`category`,`metadata`],fieldInference:{input:[`input`,`question`,`prompt`,`query`],expected:[`expected`,`answer`,`output`,`response`],choices:[`choices`,`options`],category:[`category`,`type`,`topic`,`subject`]}}},Ze=e=>L[e||`custom`]||L.custom,Qe=()=>{let e={research:[],"tool-use":[],memory:[],reference:[],custom:[]};return Object.values(L).forEach(t=>{e[t.category]||(e[t.category]=[]),e[t.category].push(t)}),e}})),et,R,tt,nt,rt,it=t((()=>{C(),P(),A(),m(),et=e(d()),n(),He(),$e(),R=e(u()),tt={custom:`Custom`,memory:`Memory`,reference:`Reference Formats`,research:`Deep Research / QA`,"tool-use":`Tool Use`},nt=p(({css:e})=>({presetIcon:e`
    border: 1px solid ${_.colorFillTertiary};
    border-radius: ${_.borderRadius};
    background: ${_.colorBgElevated};
  `})),rt=({dataset:e,formId:t,onLoadingChange:n,onSuccess:i})=>{let{t:a}=r(`eval`),{close:o}=N(),{message:s}=ue.useApp(),[c]=O.useForm(),[l,u]=(0,et.useState)(`custom`),d=O.useWatch(`evalMode`,c);(0,et.useEffect)(()=>{e&&(c.setFieldsValue({description:e.description||``,evalConfig:e.evalConfig,evalMode:e.evalMode||void 0,name:e.name}),u(e.metadata?.preset||`custom`))},[e,c]);let p=Qe(),m=Object.entries(p).filter(([e,t])=>t.length>0).map(([e,t])=>({label:tt[e]||e,options:t.map(e=>({label:e.name,value:e.id}))}));return(0,R.jsxs)(O,{form:c,layout:`vertical`,name:t,onFinish:async t=>{n?.(!0);try{await Ue.updateDataset({description:t.description?.trim()||void 0,evalConfig:t.evalConfig?.judgePrompt?t.evalConfig:null,evalMode:t.evalMode||null,id:e.id,metadata:{...e.metadata,preset:l},name:t.name.trim()}),s.success(a(`dataset.edit.success`)),o(),i?.()}catch{s.error(a(`dataset.edit.error`))}finally{n?.(!1)}},children:[(0,R.jsx)(O.Item,{label:a(`dataset.create.name.label`),name:`name`,rules:[{message:a(`dataset.create.nameRequired`),required:!0}],children:(0,R.jsx)(b,{autoFocus:!0,placeholder:a(`dataset.create.name.placeholder`)})}),(0,R.jsx)(O.Item,{label:a(`dataset.create.description.label`),name:`description`,children:(0,R.jsx)(v,{placeholder:a(`dataset.create.description.placeholder`),rows:3})}),(0,R.jsx)(O.Item,{extra:a(`dataset.evalMode.hint`),label:a(`evalMode.label`),name:`evalMode`,children:(0,R.jsx)(F,{allowClear:!0,placeholder:a(`evalMode.placeholder`),optionRender:e=>(0,R.jsxs)(f,{gap:2,style:{padding:`4px 0`},children:[(0,R.jsx)(`div`,{children:e.label}),(0,R.jsx)(x,{style:{fontSize:12},type:`secondary`,children:a(`evalMode.${e.value}.desc`)})]}),options:[{label:a(`evalMode.equals`),value:`equals`},{label:a(`evalMode.contains`),value:`contains`},{label:a(`evalMode.llm-rubric`),value:`llm-rubric`},{label:a(`evalMode.answer-relevance`),value:`answer-relevance`},{label:a(`evalMode.external`),value:`external`}]})}),(d===`llm-rubric`||d===`answer-relevance`)&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(O.Item,{initialValue:`aihubmix`,label:`Provider`,name:[`evalConfig`,`provider`],children:(0,R.jsx)(v,{placeholder:`LLM provider (e.g. openai, azure)`,rows:1})}),(0,R.jsx)(O.Item,{initialValue:`gpt-5-nano`,label:`Model`,name:[`evalConfig`,`model`],children:(0,R.jsx)(v,{placeholder:`LLM model to use for evaluation (e.g. gpt-4)`,rows:1})}),(0,R.jsx)(O.Item,{label:`System Prompt`,name:[`evalConfig`,`systemRole`],children:(0,R.jsx)(v,{placeholder:`Optional system prompt for the LLM judge`,rows:3})}),(0,R.jsx)(O.Item,{label:`Eval Prompt`,name:[`evalConfig`,`criteria`],children:(0,R.jsx)(v,{placeholder:`Prompt template for the LLM judge`,rows:3})}),(0,R.jsx)(O.Item,{label:a(`evalMode.prompt.label`),name:[`evalConfig`,`judgePrompt`],children:(0,R.jsx)(v,{placeholder:a(`evalMode.prompt.placeholder`),rows:3})})]}),(0,R.jsx)(O.Item,{label:a(`dataset.create.preset.label`),style:{marginBottom:0},children:(0,R.jsx)(F,{options:m,placeholder:`Select a preset`,value:l,optionRender:e=>{let t=L[e.value];return t?(0,R.jsxs)(f,{horizontal:!0,align:`flex-start`,gap:12,style:{overflow:`hidden`,width:`100%`},children:[(0,R.jsx)(h,{className:nt.presetIcon,flex:`none`,height:40,width:40,children:(0,R.jsx)(g,{icon:t.icon,size:18})}),(0,R.jsxs)(f,{flex:1,gap:2,style:{minWidth:0,overflow:`hidden`},children:[(0,R.jsx)(x,{ellipsis:!0,style:{fontSize:14,fontWeight:500},children:t.name}),(0,R.jsx)(x,{ellipsis:!0,style:{fontSize:12},type:`secondary`,children:t.description})]})]}):e.label},onChange:e=>u(e)})})]})}})),at,ot,st=t((()=>{C(),P(),n(),at=e(u()),ot=({formId:e,loading:t})=>{let{t:n}=r(`eval`),{close:i}=N();return(0,at.jsxs)(Ie,{children:[(0,at.jsx)(S,{disabled:t,onClick:i,children:n(`common.cancel`)}),(0,at.jsx)(S,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n(`common.update`)})]})}})),ct,lt,ut=t((()=>{a(),Ge(),it(),st(),ct=e(u()),lt=e=>qe({renderContent:({formId:t,setLoading:n})=>(0,ct.jsx)(rt,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,ct.jsx)(ot,{formId:e,loading:t}),title:i(`dataset.edit.title`,{ns:`eval`}),width:480})})),dt,ft=t((()=>{m(),dt={choices:_.colorWarning,expected:_.colorSuccess,input:_.colorInfo}})),z,B,pt,mt,ht,gt,_t,vt,yt,bt,xt,St=t((()=>{C(),P(),A(),m(),z=e(d()),n(),ft(),B=e(u()),pt=new Set([`input`,`question`,`prompt`,`query`,`text`,`instruction`,`problem`]),mt=new Set([`expected`,`answer`,`ideal`,`target`,`output`,`response`,`label`,`ground_truth`,`groundtruth`]),ht=new Set([`category`,`topic`,`type`,`subject`,`class`,`tag`]),gt=new Set([`choices`,`options`,`alternatives`,`candidates`]),_t=new Set([`id`,`number`,`index`,`no`,`order`,`sort_order`]),vt=(e,t)=>{let n={},r=!1,i=!1,a=!1,o=!1,s=!1,c=t?new Set(t.fieldInference.input.map(e=>e.toLowerCase())):pt,l=t?new Set(t.fieldInference.expected.map(e=>e.toLowerCase())):mt,u=t?new Set(t.fieldInference.choices.map(e=>e.toLowerCase())):gt,d=t?new Set(t.fieldInference.category.map(e=>e.toLowerCase())):ht,f=t?.fieldInference.sortOrder?new Set(t.fieldInference.sortOrder.map(e=>e.toLowerCase())):_t,p=new Set(t?t.requiredFields.map(e=>e.toLowerCase()):[]),m=new Set(t?t.optionalFields.map(e=>e.toLowerCase()):[]);for(let t of e){let e=t.toLowerCase().trim();!r&&c.has(e)?(n[t]=`input`,r=!0):!i&&l.has(e)?(n[t]=`expected`,i=!0):!o&&u.has(e)?(n[t]=`choices`,o=!0):!a&&d.has(e)?(n[t]=`category`,a=!0):!s&&f.has(e)?(n[t]=`sortOrder`,s=!0):p.has(e)||m.has(e)?n[t]=`metadata`:n[t]=`ignore`}return!r&&e.length>0&&(n[e[0]]=`input`),n},yt={category:160,choices:200,expected:300,ignore:100,input:800,metadata:160,sortOrder:120},bt=new Set([`input`,`expected`]),xt=(0,z.memo)(({headers:e,mapping:t,onMappingChange:n,preview:i,delimiter:a,onDelimiterChange:o,totalCount:s})=>{let{t:c}=r(`eval`),[l,u]=(0,z.useState)(!0),d=Object.values(t).includes(`choices`),p=Object.values(t).includes(`ignore`),m=(0,z.useMemo)(()=>l?e.filter(e=>t[e]!==`ignore`):e,[e,t,l]),h=e=>dt[e]||_.colorTextTertiary,g=[{desc:`inputDesc`,label:`input`,value:`input`},{desc:`expectedDesc`,label:`expected`,value:`expected`},{desc:`choicesDesc`,label:`choices`,value:`choices`},{desc:`categoryDesc`,label:`category`,value:`category`},{desc:`sortOrderDesc`,label:`sortOrder`,value:`sortOrder`},{desc:`metadataDesc`,label:`metadata`,value:`metadata`},{desc:`ignoreDesc`,label:`ignore`,value:`ignore`}].map(({desc:e,label:t,value:n})=>({label:(0,B.jsxs)(f,{gap:2,children:[(0,B.jsx)(`span`,{style:{fontSize:11},children:c(`dataset.import.${t}`)}),(0,B.jsx)(`span`,{style:{color:h(n),fontSize:11},children:c(`dataset.import.${e}`)})]}),value:n})),v=(e,r)=>{let i={...t};if(r!==`metadata`&&r!==`ignore`)for(let[e,t]of Object.entries(i))t===r&&(i[e]=`ignore`);i[e]=r,n(i)},y=(0,z.useMemo)(()=>m.map(e=>{let n=t[e],r=n===`ignore`,i=bt.has(n),a=dt[n];return{dataIndex:e,ellipsis:!i,onCell:r?()=>({style:{color:_.colorTextQuaternary}}):i?()=>({style:{verticalAlign:`top`,whiteSpace:`pre-wrap`,wordBreak:`break-word`}}):void 0,title:(0,B.jsxs)(f,{gap:2,children:[(0,B.jsx)(`span`,{style:{fontSize:13,opacity:r?.4:1},children:e}),(0,B.jsx)(F,{options:g,popupMatchSelectWidth:200,size:`small`,value:n,variant:`borderless`,style:{color:a||(r?_.colorTextQuaternary:_.colorTextTertiary),fontSize:11,marginInlineStart:-7},onChange:t=>v(e,t)})]}),width:yt[n]}}),[m,t]),b=(0,z.useMemo)(()=>m.reduce((e,n)=>e+yt[t[n]],0),[m,t]);return(0,B.jsxs)(f,{gap:12,children:[(0,B.jsxs)(f,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,B.jsxs)(f,{horizontal:!0,align:`center`,gap:16,children:[(0,B.jsx)(`span`,{style:{color:_.colorTextTertiary,fontSize:13},children:c(`dataset.import.fieldMapping.desc`)}),(0,B.jsx)(`span`,{style:{color:_.colorTextQuaternary,fontSize:12},children:c(`dataset.import.preview.rows`,{count:s})})]}),(0,B.jsxs)(f,{horizontal:!0,align:`center`,gap:16,children:[d&&(0,B.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,B.jsx)(`span`,{style:{color:_.colorTextSecondary,fontSize:12,whiteSpace:`nowrap`},children:c(`dataset.import.expectedDelimiter.desc`)}),(0,B.jsx)(k,{placeholder:c(`dataset.import.expectedDelimiter.placeholder`),size:`small`,style:{width:120},value:a,onChange:e=>o(e.target.value)})]}),p&&(0,B.jsx)(D,{checked:l,onChange:e=>u(e.target.checked),children:(0,B.jsx)(`span`,{style:{color:_.colorTextSecondary,fontSize:12},children:c(`dataset.import.hideSkipped`)})})]})]}),(0,B.jsx)(se,{bordered:!0,columns:y,dataSource:i.map((e,t)=>({...e,_key:t})),pagination:!1,rowKey:`_key`,scroll:{x:b,y:`calc(95vh - 280px)`},size:`small`})]})})})),Ct,V,wt,H,Tt,Et,Dt,Ot=t((()=>{C(),A(),m(),j(),Ct=e(d()),n(),ft(),V=e(u()),{Dragger:wt}=de,H=p(({css:e,cssVar:t})=>({container:e`
    overflow: hidden;
    border: 1px solid ${t.colorFillTertiary};
    border-radius: ${t.borderRadiusLG};
  `,divider:e`
    margin: 0;
  `,draggerContent:e`
    min-height: 140px;
  `,fieldsWrapper:e`
    flex-wrap: wrap;
  `,formatDescription:e`
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,hintText:e`
    margin: 0;
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,icon:e`
    color: ${t.colorPrimary};
  `,iconCenter:e`
    border: 1px solid ${t.colorFillTertiary};
    border-radius: ${t.borderRadius};
    background: ${t.colorBgElevated};
  `,presetDescription:e`
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,presetName:e`
    font-size: 14px;
    font-weight: 500;
  `,progressWrapper:e`
    width: 100%;
    max-width: 320px;
  `,roleLabel:e`
    font-size: 10px;
  `,uploadText:e`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: ${t.colorText};
  `})),Tt=[`input`,`expected`,`choices`,`category`,`sortOrder`],Et=(e,t)=>{let n=e.toLowerCase();for(let e of Tt)if(t[e]?.some(e=>e.toLowerCase()===n))return e},Dt=(0,Ct.memo)(({onFileSelect:e,loading:t,preset:n,uploadProgress:i})=>{let{t:a}=r(`eval`),o=(0,Ct.useMemo)(()=>{if(!n)return[];let e=n.requiredFields.map(e=>({name:e,required:!0,role:Et(e,n.fieldInference)})),t=n.optionalFields.map(e=>({name:e,required:!1,role:Et(e,n.fieldInference)}));return[...e,...t]},[n]);return(0,V.jsxs)(f,{gap:16,children:[n&&(0,V.jsxs)(`div`,{className:H.container,children:[(0,V.jsxs)(f,{horizontal:!0,align:`center`,gap:8,paddingBlock:12,paddingInline:16,children:[(0,V.jsx)(h,{className:H.iconCenter,flex:`none`,height:36,width:36,children:(0,V.jsx)(g,{icon:n.icon})}),(0,V.jsxs)(f,{flex:1,children:[(0,V.jsx)(`div`,{className:H.presetName,children:n.name}),(0,V.jsx)(`div`,{className:H.presetDescription,children:n.description})]})]}),(0,V.jsx)(pe,{className:H.divider}),(0,V.jsxs)(f,{gap:12,paddingBlock:12,paddingInline:16,children:[n.formatDescription&&(0,V.jsx)(`div`,{className:H.formatDescription,children:n.formatDescription}),(0,V.jsx)(f,{horizontal:!0,className:H.fieldsWrapper,gap:8,children:o.map(e=>{let t=e.role?dt[e.role]:void 0;return(0,V.jsxs)(f,{align:`center`,gap:2,children:[(0,V.jsxs)(ne,{style:t?{background:`color-mix(in srgb, ${t} 15%, transparent)`,borderColor:`transparent`,color:t}:void 0,children:[e.name,e.required&&` *`]}),e.role&&(0,V.jsx)(`div`,{className:H.roleLabel,style:{color:t||void 0},children:e.role})]},e.name)})})]})]}),(0,V.jsx)(wt,{accept:`.csv,.xlsx,.xls,.json,.jsonl`,disabled:t,maxCount:1,showUploadList:!1,beforeUpload:t=>(e(t),!1),children:t?(0,V.jsxs)(h,{className:H.draggerContent,gap:12,children:[(0,V.jsx)(g,{className:H.icon,icon:je,size:{size:40,strokeWidth:1.5}}),(0,V.jsx)(`p`,{className:H.uploadText,children:a(`dataset.import.uploading`)}),i&&(0,V.jsx)(`div`,{className:H.progressWrapper,children:(0,V.jsx)(oe,{percent:i.progress,size:`small`})})]}):(0,V.jsxs)(h,{className:H.draggerContent,gap:12,children:[(0,V.jsx)(g,{className:H.icon,icon:De,size:{size:40,strokeWidth:1.5}}),(0,V.jsx)(`p`,{className:H.uploadText,children:a(`dataset.import.upload.text`)}),(0,V.jsx)(`p`,{className:H.hintText,children:a(`dataset.import.upload.hint`)})]})})]})})})),U,kt,At,jt=t((()=>{A(),U=e(d()),n(),He(),Be(),$e(),St(),Ot(),kt=e(u()),At=({close:e,datasetId:t,onImportReady:n,onStateChange:i,onSuccess:a,presetId:o,setPrev:s})=>{let{t:c}=r(`eval`),{message:l}=ue.useApp(),[u,d]=(0,U.useState)(0),[f,p]=(0,U.useState)(!1),[m,h]=(0,U.useState)(),[g,_]=(0,U.useState)(``),[v,y]=(0,U.useState)(``),[b,x]=(0,U.useState)([]),[ee,te]=(0,U.useState)([]),[S,ne]=(0,U.useState)(0),[C,re]=(0,U.useState)(),[w,T]=(0,U.useState)({}),[ie,ae]=(0,U.useState)(``),E=(0,U.useMemo)(()=>o?Ze(o):void 0,[o]),D=Object.values(w).includes(`input`);(0,U.useEffect)(()=>{i({canImport:D,step:u})},[D,i,u]),(0,U.useEffect)(()=>{s(()=>d(0))},[s]);let oe=(0,U.useCallback)(async e=>{p(!0),h(void 0);try{let t=await Ve.uploadToServerS3(e,{directory:`eval-datasets`,onProgress:(e,t)=>{h(t)}});_(t.path),y(e.name);let n=await Ue.parseDatasetFile({filename:e.name,pathname:t.path});x(n.headers),te(n.preview),ne(n.totalCount),re(n.format),T(vt(n.headers,E)),d(1)}catch{setTimeout(()=>{l.error(c(`dataset.import.parseError`))},0)}finally{p(!1),h(void 0)}},[l,E,c]),se=(0,U.useCallback)(()=>{let e=Object.entries(w).find(([,e])=>e===`input`)?.[0];if(!e)return null;let t=Object.entries(w).find(([,e])=>e===`expected`)?.[0],n=Object.entries(w).find(([,e])=>e===`choices`)?.[0],r=Object.entries(w).find(([,e])=>e===`category`)?.[0],i=Object.entries(w).find(([,e])=>e===`sortOrder`)?.[0],a=Object.entries(w).filter(([,e])=>e===`metadata`),o=a.length>0?Object.fromEntries(a.map(([e])=>[e,e])):void 0;return{category:r,choices:n,expected:t,expectedDelimiter:ie||void 0,input:e,metadata:o,sortOrder:i}},[w,ie]),O=(0,U.useCallback)(async()=>{let n=se();if(n)try{let r=await Ue.importDataset({datasetId:t,fieldMapping:{category:n.category,choices:n.choices,expected:n.expected,expectedDelimiter:n.expectedDelimiter,input:n.input,metadata:n.metadata,sortOrder:n.sortOrder},filename:v,format:C,pathname:g});setTimeout(()=>{l.success(c(`dataset.import.success`,{count:r.count}))},0),e(),a?.(t)}catch{setTimeout(()=>{l.error(c(`dataset.import.error`))},0)}},[se,e,t,v,C,l,a,g,c]);return(0,U.useEffect)(()=>{n({canImport:()=>D,runImport:O})},[D,n,O]),(0,kt.jsxs)(kt.Fragment,{children:[u===0&&(0,kt.jsx)(Dt,{loading:f,preset:E,uploadProgress:m,onFileSelect:oe}),u===1&&(0,kt.jsx)(xt,{delimiter:ie,headers:b,mapping:w,preview:ee,totalCount:S,onDelimiterChange:ae,onMappingChange:T})]})}})),Mt,Nt,Pt=t((()=>{C(),P(),n(),Mt=e(u()),Nt=({canImport:e,importing:t,onImport:n,onPrev:i})=>{let{t:a}=r(`eval`);return(0,Mt.jsxs)(Ie,{children:[(0,Mt.jsx)(S,{disabled:t,onClick:i,children:a(`dataset.import.prev`)}),(0,Mt.jsx)(S,{disabled:!e,loading:t,type:`primary`,onClick:n,children:a(`dataset.import.confirm`)})]})}})),Ft,It,Lt=t((()=>{P(),a(),jt(),Pt(),Ft=e(u()),It=({datasetId:e,onSuccess:t,presetId:n})=>{let r={},a=0,o=!1,s=!1,c=async()=>{},l=()=>{},u=()=>a===0?null:(0,Ft.jsx)(Nt,{canImport:o,importing:s,onPrev:l,onImport:async()=>{s=!0,r.instance?.update({footer:u()});try{await c()}finally{s=!1,r.instance?.update({footer:u()})}}});return r.instance=Fe({content:(0,Ft.jsx)(At,{close:()=>r.instance?.close(),datasetId:e,presetId:n,setPrev:e=>{l=e},onSuccess:t,onImportReady:e=>{c=e.runImport},onStateChange:e=>{e.step===a&&e.canImport===o||(a=e.step,o=e.canImport,r.instance?.update({footer:u()}))}}),footer:u(),maskClosable:!1,title:i(`dataset.import.title`,{ns:`eval`}),width:720}),r.instance}})),W,Rt,zt=t((()=>{C(),P(),A(),n(),He(),W=e(u()),Rt=({datasetId:e,formId:t,onLoadingChange:n,onSuccess:i})=>{let{t:a}=r(`eval`),{close:o}=N(),{message:s}=ue.useApp(),[c]=O.useForm(),l=O.useWatch(`evalMode`,c);return(0,W.jsxs)(O,{form:c,layout:`vertical`,name:t,onFinish:async t=>{n?.(!0);try{let n=t.tags?t.tags.split(`,`).map(e=>e.trim()).filter(Boolean):void 0;await Ue.createTestCase({content:{expected:t.expected,input:t.input},datasetId:e,evalConfig:t.evalConfig?.judgePrompt?t.evalConfig:void 0,evalMode:t.evalMode||void 0,metadata:{...t.difficulty?{difficulty:t.difficulty}:{},...n?{tags:n}:{}}}),setTimeout(()=>{s.success(a(`testCase.create.success`))},0),o(),i?.(e)}catch{setTimeout(()=>{s.error(a(`testCase.create.error`))},0)}finally{n?.(!1)}},children:[(0,W.jsx)(O.Item,{label:a(`testCase.create.input.label`),name:`input`,rules:[{required:!0}],children:(0,W.jsx)(k.TextArea,{autoSize:{maxRows:6,minRows:3},placeholder:a(`testCase.create.input.placeholder`)})}),(0,W.jsx)(O.Item,{label:a(`testCase.create.expected.label`),name:`expected`,rules:[{message:a(`testCase.create.expected.required`),required:!0}],children:(0,W.jsx)(k.TextArea,{autoSize:{maxRows:6,minRows:2},placeholder:a(`testCase.create.expected.placeholder`)})}),(0,W.jsx)(O.Item,{label:a(`evalMode.label`),name:`evalMode`,children:(0,W.jsx)(F,{allowClear:!0,placeholder:a(`evalMode.placeholder`),optionRender:e=>(0,W.jsxs)(f,{gap:2,style:{padding:`4px 0`},children:[(0,W.jsx)(`div`,{children:e.label}),(0,W.jsx)(x,{style:{fontSize:12},type:`secondary`,children:a(`evalMode.${e.value}.desc`)})]}),options:[{label:a(`evalMode.equals`),value:`equals`},{label:a(`evalMode.contains`),value:`contains`},{label:a(`evalMode.llm-rubric`),value:`llm-rubric`}]})}),l===`llm-rubric`&&(0,W.jsx)(O.Item,{label:a(`evalMode.prompt.label`),name:[`evalConfig`,`judgePrompt`],children:(0,W.jsx)(k.TextArea,{autoSize:{maxRows:8,minRows:3},placeholder:a(`evalMode.prompt.placeholder`)})}),(0,W.jsx)(te,{children:(0,W.jsx)(y,{itemKey:`advanced`,paddingBlock:6,paddingInline:4,title:a(`testCase.create.advanced`),children:(0,W.jsxs)(f,{gap:16,style:{paddingTop:8},children:[(0,W.jsx)(O.Item,{label:a(`testCase.create.difficulty.label`),name:`difficulty`,style:{marginBottom:0},children:(0,W.jsx)(F,{allowClear:!0,placeholder:a(`testCase.create.difficulty.label`),options:[{label:a(`difficulty.easy`),value:`easy`},{label:a(`difficulty.medium`),value:`medium`},{label:a(`difficulty.hard`),value:`hard`}]})}),(0,W.jsx)(O.Item,{label:a(`testCase.create.tags.label`),name:`tags`,style:{marginBottom:0},children:(0,W.jsx)(k,{placeholder:a(`testCase.create.tags.placeholder`)})})]})})})]})}})),Bt,Vt,Ht=t((()=>{C(),P(),n(),Bt=e(u()),Vt=({formId:e,loading:t})=>{let{t:n}=r(`eval`),{close:i}=N();return(0,Bt.jsxs)(Ie,{children:[(0,Bt.jsx)(S,{disabled:t,onClick:i,children:n(`common.cancel`)}),(0,Bt.jsx)(S,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n(`common.create`)})]})}})),Ut,Wt,Gt=t((()=>{a(),Ge(),zt(),Ht(),Ut=e(u()),Wt=e=>qe({renderContent:({formId:t,setLoading:n})=>(0,Ut.jsx)(Rt,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,Ut.jsx)(Vt,{formId:e,loading:t}),title:i(`testCase.create.title`,{ns:`eval`}),width:520})})),Kt,G,K,qt,Jt=t((()=>{C(),A(),m(),j(),Kt=e(d()),n(),G=e(u()),K=p(({css:e,cssVar:t})=>({filterButton:e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 10px;
    border: none;

    font-size: 11px;
    font-weight: 500;
    text-transform: capitalize;

    background: transparent;

    transition: all 0.2s;

    &[data-active='true'] {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }

    &[data-active='false'] {
      color: ${t.colorTextTertiary};

      &:hover {
        color: ${t.colorText};
      }
    }

    &:not(:first-child) {
      border-inline-start: 1px solid ${t.colorBorderSecondary};
    }
  `,filterContainer:e`
    overflow: hidden;
    display: flex;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 6px;
  `,filtersRow:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,table:e`
    .ant-table {
      font-size: 14px;
    }

    .ant-table-thead > tr > th {
      font-size: 12px;
      font-weight: 500;
      color: ${t.colorTextTertiary};
      background: ${t.colorFillQuaternary};
    }

    .ant-table-tbody > tr {
      &.row-clickable {
        cursor: pointer;
      }

      &:hover {
        background: ${t.colorFillQuaternary};
      }

      &.row-selected {
        background: ${t.colorPrimaryBg};
      }
    }
  `})),qt=(0,Kt.memo)(({testCases:e,total:t,search:n,diffFilter:i,datasetEvalMode:a,pagination:o,onSearchChange:s,onDiffFilterChange:c,onPageChange:l,onPreview:u,onEdit:d,onDelete:p,onAddCase:m,onImport:h,selectedId:g,readOnly:v})=>{let{t:y}=r(`eval`),x=(0,Kt.useMemo)(()=>{let e=[{dataIndex:`id`,key:`index`,render:(e,t,n)=>(0,G.jsx)(`span`,{style:{color:`var(--ant-color-text-tertiary)`,fontFamily:`monospace`,fontSize:12},children:(o.current-1)*o.pageSize+n+1}),title:`#`,width:48},{dataIndex:[`content`,`input`],key:`input`,render:e=>(0,G.jsx)(`p`,{style:{color:`var(--ant-color-text)`,margin:0,whiteSpace:`pre-wrap`,wordBreak:`break-word`},children:e}),title:y(`table.columns.input`)},{dataIndex:[`content`,`expected`],ellipsis:!0,key:`expected`,render:e=>(0,G.jsx)(`span`,{style:{color:`var(--ant-color-text-secondary)`},children:e||`-`}),title:y(`table.columns.expected`),width:200},{dataIndex:`evalMode`,key:`evalMode`,render:e=>{let t=e??a;if(!t)return(0,G.jsx)(`span`,{style:{color:_.colorTextQuaternary},children:`-`});let n=!e&&!!a;return(0,G.jsx)(`span`,{style:{color:n?_.colorTextQuaternary:_.colorTextSecondary,fontSize:12,fontStyle:n?`italic`:`normal`},children:y(`evalMode.${t}`)})},title:y(`table.columns.evalMode`),width:120},{dataIndex:[`content`,`category`],key:`category`,render:e=>(0,G.jsx)(`span`,{style:{color:`var(--ant-color-text-tertiary)`,fontSize:12},children:e||`-`}),title:y(`table.columns.category`),width:120}];return v||e.push({key:`actions`,render:(e,t)=>(0,G.jsx)(`div`,{onClick:e=>e.stopPropagation(),children:(0,G.jsx)(fe,{trigger:[`click`],menu:{items:[{icon:(0,G.jsx)(xe,{size:14}),key:`edit`,label:y(`common.edit`),onClick:()=>d?.(t)},{type:`divider`},{danger:!0,icon:(0,G.jsx)(Te,{size:14}),key:`delete`,label:y(`common.delete`),onClick:()=>p?.(t)}]},children:(0,G.jsx)(S,{icon:Ae,size:`small`,variant:`text`,style:{color:_.colorTextTertiary,height:28,padding:0,width:28}})})}),width:48}),e},[o,v,d,p,y,a]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{className:K.filtersRow,children:[(0,G.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,G.jsxs)(`div`,{style:{position:`relative`},children:[(0,G.jsx)(be,{size:14,style:{color:`var(--ant-color-text-tertiary)`,left:10,position:`absolute`,top:`50%`,transform:`translateY(-50%)`}}),(0,G.jsx)(b,{placeholder:y(`testCase.search.placeholder`),size:`small`,value:n,style:{fontSize:12,paddingLeft:32,width:192},onChange:e=>{s(e.target.value)}})]}),(0,G.jsx)(`div`,{className:K.filterContainer,children:[`all`,`easy`,`medium`,`hard`].map(e=>(0,G.jsx)(`button`,{className:K.filterButton,"data-active":i===e,onClick:()=>{c(e)},children:e},e))})]}),!v&&(0,G.jsxs)(f,{horizontal:!0,gap:8,children:[(0,G.jsx)(S,{icon:Me,size:`small`,onClick:h,children:y(`testCase.actions.import`)}),(0,G.jsx)(S,{icon:Ce,size:`small`,type:`primary`,onClick:m,children:y(`testCase.actions.add`)})]})]}),(0,G.jsx)(`div`,{className:K.table,children:(0,G.jsx)(se,{columns:x,dataSource:e,pagination:!1,rowKey:`id`,size:`small`,rowClassName:e=>{let t=[];return v||t.push(`row-clickable`),e.id===g&&t.push(`row-selected`),t.join(` `)},onRow:v?void 0:e=>({onClick:()=>u?.(e)})})}),t>o.pageSize&&(0,G.jsx)(f,{horizontal:!0,align:`center`,justify:`end`,style:{paddingBlock:12,paddingInline:16},children:(0,G.jsx)(le,{simple:!0,current:o.current,pageSize:o.pageSize,size:`small`,total:t,onChange:l})})]})})})),q,J,Yt,Xt,Zt,Y,Qt,$t=t((()=>{c(),C(),P(),A(),m(),j(),q=e(d()),n(),ge(),Re(),We(),J=e(u()),Yt=100,Xt=30,Zt=240,Y=p(({css:e,cssVar:t})=>({agentSelect:e`
    .ant-select-content-value {
      height: 22px !important;
    }
  `,hint:e`
    display: inline-block;
    margin-block-start: 4px;
    font-size: 12px;
    color: ${t.colorTextQuaternary};
  `,timestampLink:e`
    cursor: pointer;

    display: inline-block;

    margin-block-start: 4px;

    font-size: 12px;

    transition: color 0.2s;

    &:hover {
      color: ${t.colorText};
    }
  `})),Qt=({benchmarkId:e,datasetId:t,datasetName:n,onLoadingChange:i,onSubmitReady:a})=>{let{t:c}=r(`eval`),{t:u}=r(`chat`),{close:d}=N(),p=he(),m=I(e=>e.createRun),h=I(e=>e.startRun),g=I(e=>e.datasetList),[_]=O.useForm(),v=O.useWatch(`k`,_)??1,b=!!t&&!!n,[ee,S]=(0,q.useState)([]),[ne,C]=(0,q.useState)(!1);(0,q.useEffect)(()=>{C(!0),ze.queryAgents().then(e=>S(e)).finally(()=>C(!1))},[]),(0,q.useEffect)(()=>{t&&!b&&_.setFieldsValue({datasetId:t})},[t,b,_]);let T=(0,q.useMemo)(()=>({avatar:o,id:l,title:u(`inbox.title`)}),[u]),D=(0,q.useMemo)(()=>[T,...ee],[T,ee]),oe=(0,q.useMemo)(()=>D.map(e=>({label:(0,J.jsxs)(`span`,{style:{alignItems:`center`,display:`inline-flex`,gap:8},children:[(0,J.jsx)(re,{avatar:e.avatar||void 0,background:e.backgroundColor||void 0,size:20,title:e.title||``}),(0,J.jsx)(`span`,{children:e.title})]}),searchLabel:e.title||``,value:e.id})),[D]),se=(0,q.useCallback)((e,t)=>{t.stopPropagation(),t.preventDefault(),window.open(s(e),`agent_${e}`,`noopener,noreferrer`)},[]),ce=(0,q.useCallback)(async n=>{let r;try{r=await _.validateFields()}catch{return}i?.(!0);try{let i=r.maxSteps??Yt,a=r.timeoutMinutes??Xt,o=await m({config:{k:r.k??1,maxSteps:i,timeout:a*6e4},datasetId:b?t:r.datasetId,name:r.name,targetAgentId:r.targetAgentId});o?.id&&(n&&await h(o.id),p(`/eval/bench/${e}/runs/${o.id}`)),d()}finally{i?.(!1)}},[e,d,m,t,_,b,p,i,h]);return(0,q.useEffect)(()=>{a(ce)},[a,ce]),(0,J.jsxs)(O,{form:_,layout:`vertical`,children:[(0,J.jsx)(O.Item,{label:c(`run.create.name`),name:`name`,rules:[{message:c(`run.create.name.required`),required:!0}],extra:(0,J.jsx)(x,{className:Y.timestampLink,type:`secondary`,onClick:()=>{let e=new Date,t=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)} ${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`;_.setFieldsValue({name:t})},children:c(`run.create.name.useTimestamp`)}),children:(0,J.jsx)(k,{placeholder:c(`run.create.name.placeholder`),variant:`filled`})}),(0,J.jsx)(O.Item,{label:c(`run.create.agent`),name:`targetAgentId`,rules:[{message:c(`run.create.agent.required`),required:!0}],children:(0,J.jsx)(ie,{allowClear:!0,showSearch:!0,className:Y.agentSelect,loading:ne,options:oe,placeholder:c(`run.create.agent.placeholder`),variant:`filled`,filterOption:(e,t)=>(t?.searchLabel)?.toLowerCase().includes(e.toLowerCase()),optionRender:e=>(0,J.jsxs)(`span`,{style:{alignItems:`center`,display:`flex`,gap:8,justifyContent:`space-between`},children:[e.label,(0,J.jsx)(w,{icon:_e,size:`small`,onClick:t=>se(e.value,t)})]})})}),!b&&(0,J.jsx)(O.Item,{label:c(`run.create.dataset`),name:`datasetId`,rules:[{message:c(`run.create.dataset.required`),required:!0}],children:(0,J.jsx)(ie,{placeholder:c(`run.create.dataset.placeholder`),variant:`filled`,options:g.map(e=>({label:(0,J.jsxs)(ae,{children:[(0,J.jsx)(`span`,{children:e.name}),e.testCaseCount!==void 0&&(0,J.jsx)(`span`,{style:{color:`var(--ant-color-text-quaternary)`,fontSize:12},children:c(`run.create.caseCount`,{count:e.testCaseCount})})]}),value:e.id}))})}),(0,J.jsx)(te,{defaultExpandedKeys:[],children:(0,J.jsx)(y,{itemKey:`advanced`,paddingBlock:6,paddingInline:4,title:c(`run.create.advanced`),children:(0,J.jsxs)(f,{gap:16,style:{paddingTop:8},children:[(0,J.jsx)(O.Item,{extra:(0,J.jsx)(`span`,{className:Y.hint,children:c(`run.config.k.hint`,{k:v})}),initialValue:1,label:c(`run.config.k`),name:`k`,style:{marginBottom:0},children:(0,J.jsx)(E,{max:10,min:1,step:1,style:{width:`100%`},variant:`filled`})}),(0,J.jsx)(O.Item,{extra:(0,J.jsx)(`span`,{className:Y.hint,children:c(`run.config.maxSteps.hint`)}),initialValue:Yt,label:c(`run.config.maxSteps`),name:`maxSteps`,style:{marginBottom:0},children:(0,J.jsx)(E,{max:1e3,min:1,step:10,style:{width:`100%`},variant:`filled`})}),(0,J.jsx)(O.Item,{initialValue:Xt,label:c(`run.config.timeout`),name:`timeoutMinutes`,style:{marginBottom:0},children:(0,J.jsx)(E,{max:Zt,min:1,style:{width:`100%`},suffix:c(`run.config.timeout.unit`),variant:`filled`})})]})})})]})}})),X,en,tn=t((()=>{P(),A(),j(),n(),X=e(u()),en=({loading:e,onCreateAndStart:t,onCreateOnly:n})=>{let{t:i}=r(`eval`),{close:a}=N();return(0,X.jsxs)(Ie,{children:[(0,X.jsx)(ce,{disabled:e,onClick:a,children:i(`common.cancel`)}),(0,X.jsxs)(ae.Compact,{children:[(0,X.jsx)(ce,{loading:e,type:`primary`,onClick:n,children:i(`run.create.createOnly`)}),(0,X.jsx)(fe,{menu:{items:[{key:`createAndStart`,label:i(`run.create.confirm`),onClick:t}]},children:(0,X.jsx)(ce,{icon:(0,X.jsx)(Oe,{size:14}),loading:e,type:`primary`})})]})]})}})),nn,rn,an=t((()=>{P(),a(),$t(),tn(),nn=e(u()),rn=e=>{let t={},n=async()=>{},r=!1,a=()=>(0,nn.jsx)(en,{loading:r,onCreateAndStart:()=>n(!0),onCreateOnly:()=>n(!1)}),o=e=>{r=e,t.instance?.update({footer:a()})};return t.instance=Fe({content:(0,nn.jsx)(Qt,{...e,onLoadingChange:o,onSubmitReady:e=>{n=e}}),footer:a(),title:e.datasetId&&e.datasetName?i(`run.create.titleWithDataset`,{dataset:e.datasetName,ns:`eval`}):i(`run.create.title`,{ns:`eval`}),width:520}),t.instance}})),on,Z,sn,cn,ln=t((()=>{C(),A(),m(),j(),on=e(d()),n(),Z=e(u()),sn=p(({css:e})=>({emptyCard:e`
    .ant-card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding-block: 64px;
      padding-inline: 24px;
    }
  `})),cn=(0,on.memo)(({onCreate:e})=>{let{t}=r(`eval`);return(0,Z.jsx)(T,{className:sn.emptyCard,children:(0,Z.jsx)(ee,{icon:ve,description:(0,Z.jsxs)(f,{gap:4,children:[(0,Z.jsx)(`p`,{style:{color:`var(--ant-color-text)`,fontSize:14,fontWeight:500,margin:0},children:t(`run.empty.title`)}),(0,Z.jsx)(`p`,{style:{color:`var(--ant-color-text-tertiary)`,fontSize:12,margin:0},children:t(`run.empty.descriptionBenchmark`)})]}),children:(0,Z.jsx)(S,{icon:Ce,size:`small`,style:{marginTop:16},type:`primary`,onClick:e,children:t(`run.actions.create`)})})})})})),un,Q,$,dn,fn=t((()=>{C(),P(),A(),m(),j(),un=e(d()),n(),ge(),We(),Ke(),Ye(),Q=e(u()),$=p(({css:e,cssVar:t})=>({arrowIcon:e`
    flex-shrink: 0;
    color: ${t.colorTextTertiary};
  `,card:e`
    transition: all 0.2s;

    .ant-card-body {
      padding: 20px;
    }

    &:hover {
      border-color: ${t.colorBorder};
    }
  `,cardLink:e`
    text-decoration: none;
  `,dropdownTrigger:e`
    cursor: pointer;

    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: 4px;

    color: ${t.colorTextTertiary};

    transition: all 0.2s;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }
  `,meta:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,metaHighlight:e`
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,monoText:e`
    font-family: monospace;
  `,name:e`
    overflow: hidden;

    font-size: 14px;
    font-weight: 500;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,passRate:e`
    font-family: monospace;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    color: ${t.colorText};
  `,passRateLabel:e`
    font-size: 10px;
    color: ${t.colorTextTertiary};
  `,separator:e`
    color: ${t.colorBorder};
  `,stat:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;
    font-size: 13px;
  `,statError:e`
    color: ${t.colorError};
  `,statSuccess:e`
    color: ${t.colorSuccess};
  `,statWarning:e`
    color: ${t.colorWarning};
  `})),dn=(0,un.memo)(({benchmarkId:e,run:t,onRefresh:n,onEdit:i})=>{let{t:a}=r(`eval`),{message:o}=ue.useApp(),s=I(e=>e.deleteRun),c=I(e=>e.startRun),l=I(e=>e.abortRun),u=t.metrics,d=u?.totalCases??0,p=u?.passedCases??0,m=u?.failedCases??0,h=u?.errorCases??0,_=p+m+h,v=d>0?_/d*100:0,y=u?.passRate==null?0:u.passRate*100,b=(t.status===`completed`||t.status===`running`)&&_>0,x=t.status===`idle`||t.status===`failed`||t.status===`aborted`,ee=t.status===`running`||t.status===`pending`,te=e=>e?(e instanceof Date?e:new Date(e)).toLocaleDateString(`en-US`,{day:`numeric`,month:`short`}):``,S=e=>{e.preventDefault(),e.stopPropagation(),Le({content:a(`run.actions.start.confirm`),okText:a(`run.actions.start`),onOk:async()=>{try{await c(t.id,t.status!==`idle`),await n?.()}catch(e){o.error(e?.message||`Failed to start run`)}},title:a(`run.actions.start`)})},ne=e=>{e?.preventDefault(),e?.stopPropagation(),Le({content:a(`run.actions.abort.confirm`),okText:a(`run.actions.abort`),okButtonProps:{danger:!0},onOk:async()=>{await l(t.id),await n?.()},title:a(`run.actions.abort`)})},C=e=>{e?.preventDefault(),e?.stopPropagation(),Le({content:a(`run.actions.delete.confirm`),okButtonProps:{danger:!0},okText:a(`run.actions.delete`),onOk:async()=>{await s(t.id),await n?.()},title:a(`run.actions.delete`)})},re=e=>{e?.preventDefault(),e?.stopPropagation(),i?.(t)},w=[...x?[{icon:(0,Q.jsx)(Pe,{size:14}),key:`start`,label:a(`run.actions.start`),onClick:({domEvent:e})=>S(e)},{type:`divider`}]:[],{icon:(0,Q.jsx)(xe,{size:14}),key:`edit`,label:a(`run.actions.edit`),onClick:({domEvent:e})=>re(e)},...ee?[{danger:!0,icon:(0,Q.jsx)(Ee,{size:14}),key:`abort`,label:a(`run.actions.abort`),onClick:({domEvent:e})=>ne(e)}]:[],{type:`divider`},{danger:!0,icon:(0,Q.jsx)(Te,{size:14}),key:`delete`,label:a(`run.actions.delete`),onClick:({domEvent:e})=>C(e)}];return(0,Q.jsx)(me,{className:$.cardLink,to:`/eval/bench/${e}/runs/${t.id}`,children:(0,Q.jsx)(T,{className:$.card,children:(0,Q.jsxs)(f,{horizontal:!0,align:`center`,gap:16,children:[(0,Q.jsxs)(f,{flex:1,gap:4,style:{minWidth:0},children:[(0,Q.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,Q.jsx)(`span`,{className:$.name,children:t.name}),(0,Q.jsx)(Je,{status:t.status})]}),(0,Q.jsx)(f,{horizontal:!0,align:`center`,className:$.meta,gap:4,children:[t.createdAt&&{text:te(t.createdAt)},t.datasetName&&{text:t.datasetName},t.targetAgent?.title&&{text:t.targetAgent.title},t.targetAgent?.model&&{className:$.monoText,text:t.targetAgent.model},u?.duration!=null&&{className:$.metaHighlight,text:Xe(u.duration)},u?.totalCost!=null&&{className:$.metaHighlight,text:`$${u.totalCost.toFixed(2)}`}].filter(e=>!!e).map((e,t)=>(0,Q.jsxs)(un.Fragment,{children:[t>0&&(0,Q.jsx)(`span`,{className:$.separator,children:`/`}),(0,Q.jsx)(`span`,{className:e.className,children:e.text})]},t))})]}),d>0&&t.status!==`completed`&&(0,Q.jsxs)(f,{gap:4,style:{width:160},children:[(0,Q.jsxs)(f,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,Q.jsxs)(`span`,{className:$.meta,children:[_,`/`,d]}),(0,Q.jsxs)(`span`,{className:$.meta,children:[v.toFixed(0),`%`]})]}),(0,Q.jsx)(oe,{percent:v,showInfo:!1,size:`small`})]}),b&&(0,Q.jsxs)(f,{horizontal:!0,align:`center`,gap:10,children:[(0,Q.jsxs)(`span`,{className:`${$.stat} ${$.statSuccess}`,children:[(0,Q.jsx)(g,{icon:ye,size:14}),p]}),(0,Q.jsxs)(`span`,{className:`${$.stat} ${$.statError}`,children:[(0,Q.jsx)(g,{icon:Se,size:14}),m]}),h>0&&(0,Q.jsxs)(`span`,{className:`${$.stat} ${$.statWarning}`,children:[(0,Q.jsx)(g,{icon:ke,size:14}),h]})]}),b&&(0,Q.jsxs)(f,{align:`flex-end`,gap:0,style:{minWidth:56},children:[(0,Q.jsxs)(`span`,{className:$.passRate,children:[y.toFixed(0),`%`]}),(0,Q.jsx)(`span`,{className:$.passRateLabel,children:`pass rate`})]}),(0,Q.jsx)(fe,{menu:{items:w},placement:`bottomRight`,trigger:[`click`],children:(0,Q.jsx)(`span`,{className:$.dropdownTrigger,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,Q.jsx)(Ae,{size:16})})}),(0,Q.jsx)(g,{className:$.arrowIcon,icon:Ne,size:16})]})})})})}));export{$e as _,rn as a,Jt as c,It as d,Lt as f,Qe as g,L as h,ln as i,Wt as l,ut as m,fn as n,an as o,lt as p,cn as r,qt as s,dn as t,Gt as u};