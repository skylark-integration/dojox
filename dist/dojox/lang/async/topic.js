/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.async.topic"),function(){var n=dojo,r=dojox.lang.async.topic;r.from=function(r){return function(){var o,u=function(){o&&(n.unsubscribe(o),o=null)},c=new n.Deferred(u);return o=n.subscribe(r,function(){u(),c.callback(arguments)}),c}},r.failOn=function(r){return function(){var o,u=function(){o&&(n.unsubscribe(o),o=null)},c=new n.Deferred(u);return o=n.subscribe(r,function(n){u(),c.errback(new Error(arguments))}),c}}}();
//# sourceMappingURL=../../sourcemaps/lang/async/topic.js.map
