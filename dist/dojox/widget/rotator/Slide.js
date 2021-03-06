/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/fx","dojo/dom-style"],function(e,t,n){function o(e,o){var r=o.node=o.next.node,i=o.rotatorBox,d=e%2,s=(d?i.w:i.h)*(e<2?-1:1);return n.set(r,{display:"",zIndex:(n.get(o.current.node,"zIndex")||1)+1}),o.properties||(o.properties={}),o.properties[d?"left":"top"]={start:s,end:0},t.animateProperty(o)}var exports={slideDown:function(e){return o(0,e)},slideRight:function(e){return o(1,e)},slideUp:function(e){return o(2,e)},slideLeft:function(e){return o(3,e)}};return e.mixin(e.getObject("dojox.widget.rotator"),exports),exports});
//# sourceMappingURL=../../sourcemaps/widget/rotator/Slide.js.map
