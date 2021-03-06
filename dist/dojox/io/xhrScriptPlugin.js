/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/window","dojo/io/script","dojox/io/xhrPlugins","dojox/io/scriptFrame"],function(o,r,i,n,t){return o.getObject("io.xhrScriptPlugin",!0,dojox),dojox.io.xhrScriptPlugin=function(r,t,e){n.register("script",function(o,i){return!0!==i.sync&&("GET"==o||e)&&i.url.substring(0,r.length)==r},function(r,n,c){var u=function(){return n.callbackParamName=t,o.body()&&(n.frameDoc="frame"+Math.random()),i.get(n)};return(e?e(u,!0):u)(r,n,c)})},dojox.io.xhrScriptPlugin});
//# sourceMappingURL=../sourcemaps/io/xhrScriptPlugin.js.map
