"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16870"],{90692:function(e,l,n){n.r(l),n.d(l,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>t,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"api/interfaces/PriceScaleOptions","title":"Interface: PriceScaleOptions","description":"Structure that describes price scale options","source":"@site/versioned_docs/version-3.8/api/interfaces/PriceScaleOptions.md","sourceDirName":"api/interfaces","slug":"/api/interfaces/PriceScaleOptions","permalink":"/lightweight-charts/docs/3.8/api/interfaces/PriceScaleOptions","draft":false,"unlisted":false,"tags":[],"version":"3.8","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"typedocSidebar"}'),r=n("85893"),a=n("50065");let s={pagination_next:null,pagination_prev:null},c="Interface: PriceScaleOptions",t={},d=[{value:"Properties",id:"properties",level:2},{value:"autoScale",id:"autoscale",level:3},{value:"Default Value",id:"default-value",level:4},{value:"mode",id:"mode",level:3},{value:"Default Value",id:"default-value-1",level:4},{value:"invertScale",id:"invertscale",level:3},{value:"Default Value",id:"default-value-2",level:4},{value:"alignLabels",id:"alignlabels",level:3},{value:"Default Value",id:"default-value-3",level:4},{value:"scaleMargins",id:"scalemargins",level:3},{value:"Default Value",id:"default-value-4",level:4},{value:"Example",id:"example",level:4},{value:"borderVisible",id:"bordervisible",level:3},{value:"Default Value",id:"default-value-5",level:4},{value:"borderColor",id:"bordercolor",level:3},{value:"Default Value",id:"default-value-6",level:4},{value:"entireTextOnly",id:"entiretextonly",level:3},{value:"Default Value",id:"default-value-7",level:4},{value:"visible",id:"visible",level:3},{value:"Default Value",id:"default-value-8",level:4},{value:"drawTicks",id:"drawticks",level:3},{value:"Default Value",id:"default-value-9",level:4}];function o(e){let l={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.header,{children:(0,r.jsx)(l.h1,{id:"interface-pricescaleoptions",children:"Interface: PriceScaleOptions"})}),"\n",(0,r.jsx)(l.p,{children:"Structure that describes price scale options"}),"\n",(0,r.jsx)(l.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(l.h3,{id:"autoscale",children:"autoScale"}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.strong,{children:"autoScale"}),": ",(0,r.jsx)(l.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"Autoscaling is a feature that automatically adjusts a price scale to fit the visible range of data.\nNote that overlay price scales are always auto-scaled."}),"\n",(0,r.jsx)(l.h4,{id:"default-value",children:"Default Value"}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.code,{children:"true"})}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"mode",children:"mode"}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.strong,{children:"mode"}),": ",(0,r.jsx)(l.a,{href:"/lightweight-charts/docs/3.8/api/enumerations/PriceScaleMode",children:(0,r.jsx)(l.code,{children:"PriceScaleMode"})})]}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"Price scale mode."}),"\n",(0,r.jsx)(l.h4,{id:"default-value-1",children:"Default Value"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-ts",children:"{@link PriceScaleMode.Normal}\n"})}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"invertscale",children:"invertScale"}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.strong,{children:"invertScale"}),": ",(0,r.jsx)(l.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"Invert the price scale, so that a upwards trend is shown as a downwards trend and vice versa.\nAffects both the price scale and the data on the chart."}),"\n",(0,r.jsx)(l.h4,{id:"default-value-2",children:"Default Value"}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.code,{children:"false"})}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"alignlabels",children:"alignLabels"}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.strong,{children:"alignLabels"}),": ",(0,r.jsx)(l.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"Align price scale labels to prevent them from overlapping."}),"\n",(0,r.jsx)(l.h4,{id:"default-value-3",children:"Default Value"}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.code,{children:"true"})}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"scalemargins",children:"scaleMargins"}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.strong,{children:"scaleMargins"}),": ",(0,r.jsx)(l.a,{href:"/lightweight-charts/docs/3.8/api/interfaces/PriceScaleMargins",children:(0,r.jsx)(l.code,{children:"PriceScaleMargins"})})]}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"Price scale margins."}),"\n",(0,r.jsx)(l.h4,{id:"default-value-4",children:"Default Value"}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.code,{children:"{ bottom: 0.1, top: 0.2 }"})}),"\n",(0,r.jsx)(l.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-js",children:"chart.priceScale('right').applyOptions({\n    scaleMargins: {\n        top: 0.8,\n        bottom: 0,\n    },\n});\n"})}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"bordervisible",children:"borderVisible"}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.strong,{children:"borderVisible"}),": ",(0,r.jsx)(l.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"Set true to draw a border between the price scale and the chart area."}),"\n",(0,r.jsx)(l.h4,{id:"default-value-5",children:"Default Value"}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.code,{children:"true"})}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"bordercolor",children:"borderColor"}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.strong,{children:"borderColor"}),": ",(0,r.jsx)(l.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"Price scale border color."}),"\n",(0,r.jsx)(l.h4,{id:"default-value-6",children:"Default Value"}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.code,{children:"'#2B2B43'"})}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"entiretextonly",children:"entireTextOnly"}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.strong,{children:"entireTextOnly"}),": ",(0,r.jsx)(l.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"Show top and bottom corner labels only if entire text is visible."}),"\n",(0,r.jsx)(l.h4,{id:"default-value-7",children:"Default Value"}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.code,{children:"false"})}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"visible",children:"visible"}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.strong,{children:"visible"}),": ",(0,r.jsx)(l.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"Indicates if this price scale visible. Ignored by overlay price scales."}),"\n",(0,r.jsx)(l.h4,{id:"default-value-8",children:"Default Value"}),"\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.code,{children:"true"})," for the right price scale and ",(0,r.jsx)(l.code,{children:"false"})," for the left"]}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h3,{id:"drawticks",children:"drawTicks"}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.strong,{children:"drawTicks"}),": ",(0,r.jsx)(l.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"Draw small horizontal line on price axis labels."}),"\n",(0,r.jsx)(l.h4,{id:"default-value-9",children:"Default Value"}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.code,{children:"true"})})]})}function h(e={}){let{wrapper:l}={...(0,a.a)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,l,n){n.d(l,{Z:function(){return c},a:function(){return s}});var i=n(67294);let r={},a=i.createContext(r);function s(e){let l=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:l},e.children)}}}]);