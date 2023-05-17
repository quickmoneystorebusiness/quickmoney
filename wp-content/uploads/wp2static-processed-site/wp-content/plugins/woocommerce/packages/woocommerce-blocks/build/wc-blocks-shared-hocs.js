this.wc=this.wc||{},this.wc.wcBlocksSharedHocs=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=161)}({0:function(e,t){e.exports=window.wp.element},10:function(e,t){function r(){return e.exports=r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,r.apply(this,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},161:function(e,t,r){"use strict";r.r(t),r.d(t,"withProductDataContext",(function(){return b})),r.d(t,"withFilteredAttributes",(function(){return w}));var o=r(10),n=r.n(o),c=r(0),s=r(17),u=r(2),a=r(18),i=r.n(a);function l(e){const t=Object(c.useRef)(e);return i()(e,t.current)||(t.current=e),t.current}const d=e=>{const t={namespace:"/wc/store/v1",resourceName:"products"},{results:r,isLoading:o}=(e=>{const{namespace:t,resourceName:r,resourceValues:o=[],query:n={},shouldSelect:a=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const i=Object(c.useRef)({results:[],isLoading:!0}),d=l(n),p=l(o),f=(()=>{const[,e]=Object(c.useState)();return Object(c.useCallback)(t=>{e(()=>{throw t})},[])})(),b=Object(u.useSelect)(e=>{if(!a)return null;const o=e(s.COLLECTIONS_STORE_KEY),n=[t,r,d,p],c=o.getCollectionError(...n);if(c){if(!(c instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");f(c)}return{results:o.getCollection(...n),isLoading:!o.hasFinishedResolution("getCollection",n)}},[t,r,p,d,a]);return null!==b&&(i.current=b),i.current})({...t,query:e}),{value:n}=((e,t)=>{const{namespace:r,resourceName:o,resourceValues:n=[],query:c={}}=t;if(!r||!o)throw new Error("The options object must have valid values for the namespace and the resource name properties.");const a=l(c),i=l(n),{value:d,isLoading:p=!0}=Object(u.useSelect)(e=>{const t=e(s.COLLECTIONS_STORE_KEY),n=["x-wp-total",r,o,a,i];return{value:t.getCollectionHeader(...n),isLoading:t.hasFinishedResolution("getCollectionHeader",n)}},["x-wp-total",r,o,i,a]);return{value:d,isLoading:p}})(0,{...t,query:e});return{products:r,totalProducts:parseInt(n,10),productsLoading:o}};var p=r(35);const f=e=>{const{productId:t,OriginalComponent:r,postId:o,product:n}=e,s=null!=e&&e.isDescendentOfQueryLoop?o:t,{products:u,productsLoading:a}=d({include:s}),i={product:s>0&&u.length>0?u[0]:null,isLoading:a};return n?Object(c.createElement)(p.ProductDataContextProvider,{product:n,isLoading:!1},Object(c.createElement)(r,e)):Object(c.createElement)(p.ProductDataContextProvider,{product:i.product,isLoading:i.isLoading},Object(c.createElement)(r,e))},b=e=>t=>{const r=Object(p.useProductDataContext)();return t.product||!r.hasContext?Object(c.createElement)(f,n()({},t,{OriginalComponent:e})):Object(c.createElement)(e,t)},w=e=>t=>r=>{const o=((e,t)=>{const r=[];return Object.keys(e).forEach(o=>{if(void 0!==t[o])switch(e[o].type){case"boolean":r[o]="false"!==t[o]&&!1!==t[o];break;case"number":r[o]=parseInt(t[o],10);break;case"array":case"object":r[o]=JSON.parse(t[o]);break;default:r[o]=t[o]}else r[o]=e[o].default}),r})(e,r);return Object(c.createElement)(t,n()({},r,o))}},17:function(e,t){e.exports=window.wc.wcBlocksData},18:function(e,t){e.exports=window.wp.isShallowEqual},2:function(e,t){e.exports=window.wp.data},35:function(e,t){e.exports=window.wc.wcBlocksSharedContext}});