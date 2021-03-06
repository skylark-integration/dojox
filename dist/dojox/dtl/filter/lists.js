/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../_base"],function(t,n){var r=t.getObject("filter.lists",!0,n);return t.mixin(r,{_dictsort:function(t,n){return t[0]==n[0]?0:t[0]<n[0]?-1:1},dictsort:function(n,r){if(!r)return n;var e,l,i=[];if(!t.isArray(n)){var o=n;n=[];for(var u in o)n.push(o[u])}for(e=0;e<n.length;e++)i.push([new dojox.dtl._Filter("var."+r).resolve(new dojox.dtl._Context({var:n[e]})),n[e]]);i.sort(dojox.dtl.filter.lists._dictsort);var s=[];for(e=0;l=i[e];e++)s.push(l[1]);return s},dictsortreversed:function(t,n){return n?dojox.dtl.filter.lists.dictsort(t,n).reverse():t},first:function(t){return t.length?t[0]:""},join:function(t,n){return t.join(n||",")},length:function(t){return isNaN(t.length)?(t+"").length:t.length},length_is:function(t,n){return t.length==parseInt(n)},random:function(t){return t[Math.floor(Math.random()*t.length)]},slice:function(t,n){for(var r=(n=n||"").split(":"),e=[],l=0;l<r.length;l++)r[l].length?e.push(parseInt(r[l])):e.push(null);return null===e[0]&&(e[0]=0),e[0]<0&&(e[0]=t.length+e[0]),(e.length<2||null===e[1])&&(e[1]=t.length),e[1]<0&&(e[1]=t.length+e[1]),t.slice(e[0],e[1])},_unordered_list:function(t,n){var r,e=dojox.dtl.filter.lists,l="";for(r=0;r<n;r++)l+="\t";if(t[1]&&t[1].length){var i=[];for(r=0;r<t[1].length;r++)i.push(e._unordered_list(t[1][r],n+1));return l+"<li>"+t[0]+"\n"+l+"<ul>\n"+i.join("\n")+"\n"+l+"</ul>\n"+l+"</li>"}return l+"<li>"+t[0]+"</li>"},unordered_list:function(t){return r._unordered_list(t,1)}}),r});
//# sourceMappingURL=../../sourcemaps/dtl/filter/lists.js.map
