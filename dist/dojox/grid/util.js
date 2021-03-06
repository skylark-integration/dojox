/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["../main","dojo/_base/lang","dojo/dom"],function(e,n,t){var r=n.getObject("grid.util",!0,e);return r.na="...",r.rowIndexTag="gridRowIndex",r.gridViewTag="gridView",r.fire=function(e,n,t){var r=e&&n&&e[n];return r&&(t?r.apply(e,t):e[n]())},r.setStyleHeightPx=function(e,n){if(n>=0){var t=e.style,r=n+"px";e&&t.height!=r&&(t.height=r)}},r.mouseEvents=["mouseover","mouseout","mousedown","mouseup","click","dblclick","contextmenu"],r.keyEvents=["keyup","keydown","keypress"],r.funnelEvents=function(e,n,t,o){for(var i=o||r.mouseEvents.concat(r.keyEvents),a=0,u=i.length;a<u;a++)n.connect(e,"on"+i[a],t)},r.removeNode=function(e){return(e=t.byId(e))&&e.parentNode&&e.parentNode.removeChild(e),e},r.arrayCompare=function(e,n){for(var t=0,r=e.length;t<r;t++)if(e[t]!=n[t])return!1;return e.length==n.length},r.arrayInsert=function(e,n,t){e.length<=n?e[n]=t:e.splice(n,0,t)},r.arrayRemove=function(e,n){e.splice(n,1)},r.arraySwap=function(e,n,t){var r=e[n];e[n]=e[t],e[t]=r},r});
//# sourceMappingURL=../sourcemaps/grid/util.js.map
