/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../_base","dojo/_base/config","dojo/ready"],function(o,d,t,a){return o.getObject("dojox.analytics.plugins",!0).dojo=new function(){this.addData=o.hitch(d,"addData","dojo"),a(o.hitch(this,function(){var o={};for(var d in dojo)("version"==d||"object"!=typeof dojo[d]&&"function"!=typeof dojo[d]&&"_"!=d[0])&&(o[d]=dojo[d]);t&&(o.djConfig=t),this.addData(o)}))}});
//# sourceMappingURL=../../sourcemaps/analytics/plugins/dojo.js.map
