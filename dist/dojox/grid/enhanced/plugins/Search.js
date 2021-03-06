/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/data/util/filter","../../EnhancedGrid","../_Plugin"],function(e,r,t,i,n,o,c){var s=t("dojox.grid.enhanced.plugins.Search",c,{name:"search",constructor:function(e,t){this.grid=e,t=t&&r.isObject(t)?t:{},this._cacheSize=t.cacheSize||-1,e.searchRow=r.hitch(this,"searchRow")},searchRow:function(e,t){if(r.isFunction(t)){r.isString(e)&&(e=n.patternToRegExp(e));var i=!1;if(e instanceof RegExp)i=!0;else{if(!r.isObject(e))return;var o=!0;for(var c in e)r.isString(e[c])&&(e[c]=n.patternToRegExp(e[c])),o=!1;if(o)return}this._search(e,0,t,i)}},_search:function(e,r,t,n){var o=this,c=this._cacheSize,s={start:r,query:this.grid.query,sort:this.grid.getSortProps(),queryOptions:this.grid.queryOptions,onBegin:function(e){o._storeSize=e},onComplete:function(s){i.some(s,function(i,c){return!!o._checkRow(i,e,n)&&(t(r+c,i),!0)})||(c>0&&r+c<o._storeSize?o._search(e,r+c,t,n):t(-1,null))}};c>0&&(s.count=c),this.grid._storeLayerFetch(s)},_checkRow:function(e,r,t){var n,o,c=this.grid,s=c.store,a=i.filter(c.layout.cells,function(e){return!e.hidden});if(t)return i.some(a,function(t){try{if(t.field)return String(s.getValue(e,t.field)).search(r)>=0}catch(e){console.log("Search._checkRow() error: ",e)}return!1});for(o in r)if(r[o]instanceof RegExp){for(n=a.length-1;n>=0;--n)if(a[n].field==o)try{if(String(s.getValue(e,o)).search(r[o])<0)return!1;break}catch(e){return!1}if(n<0)return!1}return!0}});return o.registerPlugin(s),s});
//# sourceMappingURL=../../../sourcemaps/grid/enhanced/plugins/Search.js.map
