/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/sniff","dojox/gfx","dojox/gfx/shape"],function(t,e,o,a,h){var l=e.getObject("geo.openlayers",!0,dojox);return l.Patch={patchMethod:function(t,e,o,a){var h=t.prototype[e];t.prototype[e]=function(){var t=e;o&&o.call(this,t,arguments);var l=h.apply(this,arguments);return a&&(l=a.call(this,t,l,arguments)||l),l}},patchGFX:function(){var t=function(){this.rawNode.path||(this.rawNode.path={})};o.isIE<=8&&"vml"===a.renderer&&(this.patchMethod(a.Line,"setShape",t,null),this.patchMethod(a.Polyline,"setShape",t,null),this.patchMethod(a.Path,"setShape",t,null),this.patchMethod(h.Shape,"setFill",function(){this.rawNode.fill&&!this.rawNode.fill.colors&&(this.rawNode.fill.colors={})},null))}},l.Patch});
//# sourceMappingURL=../../sourcemaps/geo/openlayers/Patch.js.map
