/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/fx","dojox/fx","dojo/NodeList-fx"],function(i,e,n,o,t){return i.experimental("dojox.fx.ext-dojo.NodeList"),e.extend(t,{sizeTo:function(i){return this._anim(o,"sizeTo",i)},slideBy:function(i){return this._anim(o,"slideBy",i)},highlight:function(i){return this._anim(o,"highlight",i)},fadeTo:function(i){return this._anim(n,"_fade",i)},wipeTo:function(i){return this._anim(o,"wipeTo",i)}}),t});
//# sourceMappingURL=../../sourcemaps/fx/ext-dojo/NodeList.js.map
