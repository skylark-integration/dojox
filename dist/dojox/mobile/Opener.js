/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-geometry","./Tooltip","./Overlay","./lazyLoadUtils"],function(e,t,o,i,n,s,r,d,h,l,c){var a=n.contains(i.doc.documentElement,"dj_phone"),u=e("dojox.mobile.Opener",a?l:h,{lazy:!1,requires:"",buildRendering:function(){this.inherited(arguments),this.cover=s.create("div",{onclick:o.hitch(this,"_onBlur"),class:"mblOpenerUnderlay",style:{position:a?"absolute":"fixed",backgroundColor:"transparent",overflow:"hidden",zIndex:"-1"}},this.domNode,"first")},onShow:function(e){},onHide:function(e,t){},show:function(e,o){if(this.lazy){this.lazy=!1;var i=this;return t.when(c.instantiateLazyWidgets(this.domNode,this.requires),function(){return i.show(e,o)})}return this.node=e,this.onShow(e),r.set(this.cover,{top:"0px",left:"0px",width:"0px",height:"0px"}),this._resizeCover(d.position(this.domNode,!1)),this.inherited(arguments)},hide:function(e){this.inherited(arguments),this.onHide(this.node,e)},_reposition:function(){var e=this.inherited(arguments);return this._resizeCover(e),e},_resizeCover:function(e){if(a){if(parseInt(r.get(this.cover,"top"))!=-e.y||parseInt(r.get(this.cover,"height"))!=e.y){var t=Math.max(e.x,0);r.set(this.cover,{top:-e.y+"px",left:-t+"px",width:e.w+t+"px",height:e.y+"px"})}}else r.set(this.cover,{width:Math.max(i.doc.documentElement.scrollWidth||i.body().scrollWidth||i.doc.documentElement.clientWidth)+"px",height:Math.max(i.doc.documentElement.scrollHeight||i.body().scrollHeight||i.doc.documentElement.clientHeight)+"px"})},_onBlur:function(e){var t=this.onBlur(e);return!1!==t&&this.hide(e),t}});return u.prototype.baseClass+=" mblOpener",u});
//# sourceMappingURL=../sourcemaps/mobile/Opener.js.map