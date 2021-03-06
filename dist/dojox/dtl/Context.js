/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","./_base"],function(t,e){return e.Context=t.extend(function(t){this._this={},e._Context.call(this,t)},e._Context.prototype,{getKeys:function(){var t=[];for(var e in this)this.hasOwnProperty(e)&&"_this"!=e&&t.push(e);return t},extend:function(e){return t.delegate(this,e)},filter:function(t){var n,i,s=new e.Context,r=[];if(t instanceof e.Context)r=t.getKeys();else if("object"==typeof t)for(var o in t)r.push(o);else for(n=0;i=arguments[n];n++)"string"==typeof i&&r.push(i);for(n=0;o=r[n];n++)s[o]=this[o];return s},setThis:function(t){this._this=t},getThis:function(){return this._this},hasKey:function(t){if(this._getter&&void 0!==this._getter(t))return!0;return void 0!==this[t]}})});
//# sourceMappingURL=../sourcemaps/dtl/Context.js.map
