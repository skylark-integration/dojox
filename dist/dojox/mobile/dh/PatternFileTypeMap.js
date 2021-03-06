/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang"],function(t){var n={};return t.setObject("dojox.mobile.dh.PatternFileTypeMap",n),n.map={".*.html":"html",".*.json":"json"},n.add=function(t,n){this.map[t]=n},n.getContentType=function(t){for(var n in this.map)if(new RegExp(n).test(t))return this.map[n];return null},n});
//# sourceMappingURL=../../sourcemaps/mobile/dh/PatternFileTypeMap.js.map
