/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","./_base"],function(r,a){return a.isValidIsbn=function(a){var e,n,t=0;switch(r.isString(a)||(a=String(a)),e=(a=a.replace(/[- ]/g,"")).length){case 10:n=e;for(var s=0;s<9;s++)t+=parseInt(a.charAt(s))*n,n--;var i=a.charAt(9).toUpperCase();return(t+="X"==i?10:parseInt(i))%11==0;case 13:n=-1;for(s=0;s<e;s++)t+=parseInt(a.charAt(s))*(2+n),n*=-1;return t%10==0}return!1},a.isValidIsbn});
//# sourceMappingURL=../sourcemaps/validate/isbn.js.map
