/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/json","../_base"],function(e,n,r){var t=e.getObject("filter.misc",!0,r);return e.mixin(t,{filesizeformat:function(e){return(e=parseFloat(e))<1024?1==e?e+" byte":e+" bytes":e<1048576?(e/1024).toFixed(1)+" KB":e<1073741824?(e/1024/1024).toFixed(1)+" MB":(e/1024/1024/1024).toFixed(1)+" GB"},pluralize:function(e,n){-1==(n=n||"s").indexOf(",")&&(n=","+n);var r=n.split(",");if(r.length>2)return"";var t=r[0],i=r[1];return 1!=parseInt(e,10)?i:t},_phone2numeric:{a:2,b:2,c:2,d:3,e:3,f:3,g:4,h:4,i:4,j:5,k:5,l:5,m:6,n:6,o:6,p:7,r:7,s:7,t:8,u:8,v:8,w:9,x:9,y:9},phone2numeric:function(e){var n=r.filter.misc;e+="";for(var t="",i=0;i<e.length;i++){var o=e.charAt(i).toLowerCase();n._phone2numeric[o]?t+=n._phone2numeric[o]:t+=e.charAt(i)}return t},pprint:function(e){return n.toJson(e)}}),t});
//# sourceMappingURL=../../sourcemaps/dtl/filter/misc.js.map
