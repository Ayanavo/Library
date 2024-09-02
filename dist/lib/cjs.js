/* ! locusjs | v1.2.1 | npm library */
"use strict";function t(t){if("[object Array]"!==Object.prototype.toString.call(t))throw new Error("Value must be an array")}Object.defineProperty(exports,"__esModule",{value:!0}),Array.prototype.max=function(){let r=this[0];t(this);for(let t=0;t<this.length;t++)this[t]>r&&(r=this[t]);return r},Array.prototype.min=function(){let r=this[0];t(this);for(let t=0;t<this.length;t++)this[t]<r&&(r=this[t]);return r},Array.prototype.avj=function(r=t=>t){t(this);let e=0;for(let t=0;t<this.length;t++)e+=this[t];return r(e/this.length)},Array.prototype.sum=function(r=t=>t){t(this);let e=0;for(let t=0;t<this.length;t++)e+=this[t];return r(e)},Array.prototype.equal=function(r){t(this),t(r);for(let t=0;t<r.length;t++)if(this[t]!==r[t])return!1;return!0},Array.prototype.union=function(r){const e=[];t(this),t(r);for(let t=0;t<this.length;t++)e[e.length]=this[t];return e},Array.prototype.exclusive=function(r){t(this),t(r);for(let t=0;t<this.length;t++)for(let e=0;e<r.length;e++)if(this[t]===r[e])return!1;return!0},Array.prototype.inbetween=function(r,e){const n=[];if(t(this),e??=this.max(),r>=e)return n;for(let t=0;t<this.length;t++)this[t]>r&&this[t]<=e&&(n[n.length]=this[t]);return n},Array.prototype.unique=function(){const t=[];for(let r=0;r<this.length;r++){let e=!0;for(let n=0;n<t.length;n++)if(t[n]===this[r]){e=!1;break}e&&(t[t.length]=this[r])}return t},Array.prototype.empty=function(){return 0===this.length},Array.prototype.groupby=function(r){const e={};t(this);for(let t=0;t<this.length;t++){const n=r(this[t],t,this);e[n]||(e[n]=[]),e[n][e[n].length]=this[t]}return e},Array.prototype.chunk=function(r){t(this);const e=[];for(let t=0;t<this.length;t+=r){const t=[];for(let e=0;e<r;e++)t[t.length]=this[e];e[e.length]=t}return e},Array.prototype.compact=function(){t(this);const r=[];for(let t=0;t<this.length;t++)this[t]&&(r[r.length]=this[t]);return r},Array.prototype.zip=function(...r){t(this),t(r),console.log(r);const e=[],n=this.length>=r.length?this.length:r.length;for(let t=0;t<n;t++)e[e.length]=[this[t],r[t]];return e};var r=Object.freeze({__proto__:null});exports.locus=r;
//# sourceMappingURL=cjs.js.map
