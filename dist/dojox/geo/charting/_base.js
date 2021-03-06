/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/array","../../main","dojo/_base/html","dojo/dom-geometry","dojox/gfx/matrix","dijit/Tooltip","dojo/_base/NodeList","dojo/NodeList-traverse"],function(e,o,t,n,i,r,a,d,x){var h=e.getObject("geo.charting",!0,t);return h.showTooltip=function(e,o,t){var n=h._normalizeArround(o);return a.show(e,n,t)},h.hideTooltip=function(e){return a.hide(e)},h._normalizeArround=function(e){var o=h._getRealBBox(e),t=e._getRealMatrix()||{xx:1,xy:0,yx:0,yy:1,dx:0,dy:0},n=r.multiplyPoint(t,o.x,o.y),a=h._getGfxContainer(e);return e.x=i.position(a,!0).x+n.x,e.y=i.position(a,!0).y+n.y,e.w=o.width*t.xx,e.h=o.height*t.yy,e},h._getGfxContainer=function(e){return e.surface?new d(e.surface.rawNode).parents("div")[0]:new d(e.rawNode).parents("div")[0]},h._getRealBBox=function(t){var n=t.getBoundingBox();if(!n){var i=t.children;n=e.clone(h._getRealBBox(i[0])),o.forEach(i,function(e){var o=h._getRealBBox(e);n.x=Math.min(n.x,o.x),n.y=Math.min(n.y,o.y),n.endX=Math.max(n.x+n.width,o.x+o.width),n.endY=Math.max(n.y+n.height,o.y+o.height)}),n.width=n.endX-n.x,n.height=n.endY-n.y}return n},h});
//# sourceMappingURL=../../sourcemaps/geo/charting/_base.js.map
