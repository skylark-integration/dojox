/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","./_base","./shape","./svg"],function(e,t,n,a,s){t.extend(s.Shape,{mask:null,setMask:function(e){var t=this.rawNode;return e?(t.setAttribute("mask","url(#"+e.shape.id+")"),this.mask=e):(t.removeAttribute("mask"),this.mask=null),this},getMask:function(){return this.mask}});var i=s.Mask=e("dojox.gfx.svg.Mask",s.Shape,{constructor:function(){a.Container._init.call(this),this.shape=i.defaultMask},setRawNode:function(e){this.rawNode=e},setShape:function(e){e.id||(e=t.mixin({id:n._base._getUniqueId()},e)),this.inherited(arguments,[e])}});i.nodeType="mask",i.defaultMask={id:null,x:0,y:0,width:1,height:1,maskUnits:"objectBoundingBox",maskContentUnits:"userSpaceOnUse"},t.extend(i,s.Container),t.extend(i,a.Creator),t.extend(i,s.Creator);var o=s.Surface,r=o.prototype.add,d=o.prototype.remove;t.extend(o,{createMask:function(e){return this.createObject(i,e)},add:function(e){return e instanceof i?(this.defNode.appendChild(e.rawNode),e.parent=this):r.apply(this,arguments),this},remove:function(e,t){return e instanceof i&&this.defNode==e.rawNode.parentNode?(this.defNode.removeChild(e.rawNode),e.parent=null):d.apply(this,arguments),this}})});
//# sourceMappingURL=../sourcemaps/gfx/svg_mask.js.map
