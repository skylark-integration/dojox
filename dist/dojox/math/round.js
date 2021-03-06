/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dojox"],function(t,o){if(t.getObject("math.round",!0,o),t.experimental("dojox.math.round"),o.math.round=function(t,o,a){var n=Math.log(Math.abs(t))/Math.log(10),r=10/(a||10),d=Math.pow(10,-15+n);return(r*(+t+(t>0?d:-d))).toFixed(o)/r},0==.9.toFixed()){var a=o.math.round;o.math.round=function(t,o,n){var r=Math.pow(10,-o||0),d=Math.abs(t);return!t||d>=r?r=0:((d/=r)<.5||d>=.95)&&(r=0),a(t,o,n)+(t>0?r:-r)}}return o.math.round});
//# sourceMappingURL=../sourcemaps/math/round.js.map
