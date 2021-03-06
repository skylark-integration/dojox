/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../_base","dojo/_base/config","dojo/_base/window","dojo/on"],function(t,e,a,s,n){return e.plugins.mouseClick=new function(){this.addData=t.hitch(e,"addData","mouseClick"),this.targetProps=a.targetProps||["id","className","nodeName","localName","href","spellcheck","lang"],this.textContentMaxChars=a.textContentMaxChars||50,this.onClick=function(t){this.addData(this.trimEvent(t))},n(s.doc,"click",t.hitch(this,"onClick")),this.trimEvent=function(t){var e={};for(var a in t)switch(a){case"target":case"originalTarget":case"explicitOriginalTarget":var s=this.targetProps;e[a]={};for(var n=0;n<s.length;n++)t[a][s[n]]&&("text"==s[n]||"textContent"==s[n]?"HTML"!=t[a].localName&&"BODY"!=t[a].localName&&(e[a][s[n]]=t[a][s[n]].substr(0,this.textContentMaxChars)):e[a][s[n]]=t[a][s[n]]);break;case"clientX":case"clientY":case"pageX":case"pageY":case"screenX":case"screenY":e[a]=t[a]}return e}}});
//# sourceMappingURL=../../sourcemaps/analytics/plugins/mouseClick.js.map
