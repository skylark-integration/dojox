/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/array","./_base"],function(t,n,i){return i.ArrayList=function(n){var e=[];n&&(e=e.concat(n)),this.count=e.length,this.add=function(t){e.push(t),this.count=e.length},this.addRange=function(t){if(t.getIterator){for(var n=t.getIterator();!n.atEnd();)this.add(n.get());this.count=e.length}else{for(var i=0;i<t.length;i++)e.push(t[i]);this.count=e.length}},this.clear=function(){e.splice(0,e.length),this.count=0},this.clone=function(){return new i.ArrayList(e)},this.contains=function(t){for(var n=0;n<e.length;n++)if(e[n]==t)return!0;return!1},this.forEach=function(n,i){t.forEach(e,n,i)},this.getIterator=function(){return new i.Iterator(e)},this.indexOf=function(t){for(var n=0;n<e.length;n++)if(e[n]==t)return n;return-1},this.insert=function(t,n){e.splice(t,0,n),this.count=e.length},this.item=function(t){return e[t]},this.remove=function(t){var n=this.indexOf(t);n>=0&&e.splice(n,1),this.count=e.length},this.removeAt=function(t){e.splice(t,1),this.count=e.length},this.reverse=function(){e.reverse()},this.sort=function(t){t?e.sort(t):e.sort()},this.setByIndex=function(t,n){e[t]=n,this.count=e.length},this.toArray=function(){return[].concat(e)},this.toString=function(t){return e.join(t||",")}},i.ArrayList});
//# sourceMappingURL=../sourcemaps/collections/ArrayList.js.map
