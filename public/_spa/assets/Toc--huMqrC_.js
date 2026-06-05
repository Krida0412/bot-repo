import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{Fs as n,Is as r,vl as i,yl as a}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Ba as o,Ia as s,Ma as c,Ua as l}from"./imperative-CZQgOWZc.js";import{Un as u,n as d}from"./es-B2d2bv-I.js";import{n as f,r as p}from"./useToc-BjQ0nV_c.js";import{n as m,r as h}from"./const-Di8uBe8m.js";var g,_,v,y,b,x=t((()=>{d(),c(),g=e(a()),h(),n(),p(),_=e(i()),v=`ant`,y=s(({css:e,cssVar:t})=>({toc:e`
      a {
        line-height: 1.4 !important;
        white-space: normal !important;
      }

      .${v}-anchor {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &::before {
          display: none;
        }

        .${v}-anchor-ink {
          display: none !important;
        }

        .${v}-anchor-link-title {
          overflow: hidden;
          display: box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;

          word-break: break-word;
        }

        .${v}-anchor-link-title,.${v}-anchor-link {
          margin: 0 !important;
          padding-block: 0 !important;
        }

        > .${v}-anchor-link {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-inline-start: 0 !important;
        }

        .${v}-anchor-link-title-active {
          color: ${t.colorText} !important;
        }

        .${v}-anchor-link-title:not(.${v}-anchor-link-title-active) {
          color: ${t.colorTextSecondary};

          &:hover {
            color: ${t.colorText};
          }
        }
      }

      ${l.lg} {
        display: none;
      }
    `})),b=(0,g.memo)(({items:e,className:t,...n})=>{let i=(0,g.useMemo)(()=>f(e),[e]);return(0,_.jsx)(u,{affix:!1,className:o(t,y.toc),items:i,getContainer:r?void 0:()=>document.querySelector(`#${m}`),...n})})}));export{x as n,b as t};