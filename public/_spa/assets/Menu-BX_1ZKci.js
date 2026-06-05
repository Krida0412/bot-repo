import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{vl as n,yl as r}from"../vendor/vendor-ai-runtime-CsMkIwdb.js";import{Ba as i,Ia as a,Ma as o,za as s}from"./imperative-CZQgOWZc.js";import{Gn as c,ln as l,n as u}from"./es-B2d2bv-I.js";var d,f,p,m,h,g=t((()=>{u(),o(),d=e(r()),f=e(n()),p=`ant`,m=a(({css:e,cssVar:t})=>({compact:e`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  `,menu:e`
    flex: 1;
    border: none !important;
    background: transparent;

    .${p}-menu-item-divider {
      margin-block: 0.125rem;
      border-color: ${t.colorFillTertiary};

      &:first-child {
        margin-block-start: 0;
      }

      &:last-child {
        margin-block-end: 0;
      }
    }

    .${p}-menu-item, .${p}-menu-submenu-title {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      height: unset;
      min-height: 2rem;
      padding-block: 0.375rem;
      padding-inline: 0.75rem;

      line-height: 2;

      .anticon + .${p}-menu-title-content {
        margin-inline-start: 0;
      }
    }

    .${p}-menu-item-selected {
      .${p}-menu-item-icon svg {
        color: ${t.colorText};
      }
    }

    .${p}-menu-item-icon svg {
      color: ${t.colorTextSecondary};
    }

    .${p}-menu-title-content {
      flex: 1;
    }
  `})),h=(0,d.memo)(({className:e,selectable:t=!1,compact:n,...r})=>(0,f.jsx)(c,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemBorderRadius:8,itemColor:t?s.colorTextSecondary:s.colorText,itemHoverBg:s.colorFillTertiary,itemMarginBlock:n?0:4,itemMarginInline:n?0:4,itemSelectedBg:s.colorFillSecondary,paddingXS:-8}}},children:(0,f.jsx)(l,{className:i(m.menu,n&&m.compact,e),mode:`vertical`,selectable:t,...r})}))}));export{g as n,h as t};