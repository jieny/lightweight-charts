var w=Object.defineProperty;var x=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var i=(e,t,a)=>x(e,typeof t!="symbol"?t+"":t,a);import{L as g,K as m}from"./lightweight-charts.production-DkU47gR8.js";import{g as A}from"./sample-data-x_8-FZm1.js";class f{constructor(t){i(this,"_data");this._data=t}draw(t){t.useMediaCoordinateSpace(a=>{const s=a.context;s.font=this._data.font;const n=s.measureText(this._data.text).width,h=20;let r=h;const o=a.mediaSize.width,c=a.mediaSize.height;switch(this._data.horzAlign){case"right":{r=o-h-n;break}case"middle":{r=o/2-n/2;break}}const l=10,p=this._data.lineHeight;let d=l+p;switch(this._data.vertAlign){case"middle":{d=c/2+p/2;break}case"bottom":{d=c-l;break}}s.fillStyle=this._data.color,s.fillText(this._data.text,r,d)})}}class T{constructor(t){i(this,"_source");this._source=t}update(){}renderer(){return new f(this._source._data)}}class S{constructor(t){i(this,"_paneViews");i(this,"_data");i(this,"requestUpdate");this._data=t,this._paneViews=[new T(this)]}updateAllViews(){this._paneViews.forEach(t=>t.update())}paneViews(){return this._paneViews}attached({requestUpdate:t}){this.requestUpdate=t}detached(){this.requestUpdate=void 0}applyOptions(t){this._data={...this._data,...t},this.requestUpdate&&this.requestUpdate()}}const V=window.chart=g("chart",{autoSize:!0}),u=V.addSeries(m);u.setData(A());const _=new S({vertAlign:"middle",horzAlign:"middle",text:"Anchored Text",lineHeight:54,font:"italic bold 54px Arial",color:"red"});u.attachPrimitive(_);setTimeout(()=>{_.applyOptions({text:"New Text"})},2e3);
