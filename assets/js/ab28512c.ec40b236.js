"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57439"],{16265:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"api/interfaces/LocalizationOptionsBase","title":"Interface: LocalizationOptionsBase","description":"Represents basic localization options","source":"@site/versioned_docs/version-4.1/api/interfaces/LocalizationOptionsBase.md","sourceDirName":"api/interfaces","slug":"/api/interfaces/LocalizationOptionsBase","permalink":"/lightweight-charts/docs/4.1/api/interfaces/LocalizationOptionsBase","draft":false,"unlisted":false,"tags":[],"version":"4.1","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"typedocSidebar"}'),a=t("85893"),r=t("50065");let l={pagination_next:null,pagination_prev:null},s="Interface: LocalizationOptionsBase",o={},c=[{value:"Extended by",id:"extended-by",level:2},{value:"Properties",id:"properties",level:2},{value:"locale",id:"locale",level:3},{value:"See",id:"see",level:4},{value:"Default Value",id:"default-value",level:4},{value:"priceFormatter?",id:"priceformatter",level:3},{value:"See",id:"see-1",level:4},{value:"Default Value",id:"default-value-1",level:4},{value:"percentageFormatter?",id:"percentageformatter",level:3},{value:"Default Value",id:"default-value-2",level:4}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"interface-localizationoptionsbase",children:"Interface: LocalizationOptionsBase"})}),"\n",(0,a.jsx)(n.p,{children:"Represents basic localization options"}),"\n",(0,a.jsx)(n.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/lightweight-charts/docs/4.1/api/interfaces/LocalizationOptions",children:(0,a.jsx)(n.code,{children:"LocalizationOptions"})})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(n.h3,{id:"locale",children:"locale"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"locale"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Current locale used to format dates. Uses the browser's language settings by default."}),"\n",(0,a.jsx)(n.h4,{id:"see",children:"See"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation",children:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation"})}),"\n",(0,a.jsx)(n.h4,{id:"default-value",children:"Default Value"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"navigator.language"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"priceformatter",children:"priceFormatter?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"priceFormatter"}),": ",(0,a.jsx)(n.a,{href:"/lightweight-charts/docs/4.1/api/type-aliases/PriceFormatterFn",children:(0,a.jsx)(n.code,{children:"PriceFormatterFn"})})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Override formatting of the price scale tick marks, labels and crosshair labels. Can be used for cases that can't be covered with built-in price formats."}),"\n",(0,a.jsx)(n.h4,{id:"see-1",children:"See"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/lightweight-charts/docs/4.1/api/interfaces/PriceFormatCustom",children:"PriceFormatCustom"})}),"\n",(0,a.jsx)(n.h4,{id:"default-value-1",children:"Default Value"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"undefined"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"percentageformatter",children:"percentageFormatter?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"percentageFormatter"}),": ",(0,a.jsx)(n.a,{href:"/lightweight-charts/docs/4.1/api/type-aliases/PercentageFormatterFn",children:(0,a.jsx)(n.code,{children:"PercentageFormatterFn"})})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Override formatting of the percentage scale tick marks, labels and crosshair labels. Can be used for cases that can't be covered with built-in percentage format."}),"\n",(0,a.jsx)(n.h4,{id:"default-value-2",children:"Default Value"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"undefined"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var i=t(67294);let a={},r=i.createContext(a);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);