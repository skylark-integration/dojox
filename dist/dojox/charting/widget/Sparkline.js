/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/query","./Chart","../themes/GreySkies","../plot2d/Lines","dojo/dom-prop"],function(e,t,i,s,n,a,o){t("dojox.charting.widget.Sparkline",s,{theme:n,margins:{l:0,r:0,t:0,b:0},type:"Lines",valueFn:"Number(x)",store:"",field:"",query:"",queryOptions:"",start:"0",count:"Infinity",sort:"",data:"",name:"default",buildRendering:function(){var t=this.srcNodeRef;if(!t.childNodes.length||!i("> .axis, > .plot, > .action, > .series",t).length){var s=document.createElement("div");o.set(s,{class:"plot",name:"default",type:this.type}),t.appendChild(s);var n=document.createElement("div");o.set(n,{class:"series",plot:"default",name:this.name,start:this.start,count:this.count,valueFn:this.valueFn}),e.forEach(["store","field","query","queryOptions","sort","data"],function(e){this[e].length&&o.set(n,e,this[e])},this),t.appendChild(n)}this.inherited(arguments)}})});
//# sourceMappingURL=../../sourcemaps/charting/widget/Sparkline.js.map
