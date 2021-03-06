/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/main","dojo/io/script","dojo/io/iframe"],function(t,o,r){t.deprecated("dojox.io.scriptFrame","dojo.io.script now supports parallel requests without dojox.io.scriptFrame","2.0"),t.getObject("io.scriptFrame",!0,dojox),dojox.io.scriptFrame={_waiters:{},_loadedIds:{},_getWaiters:function(t){return this._waiters[t]||(this._waiters[t]=[])},_fixAttachUrl:function(t){},_loaded:function(a){var i=this._getWaiters(a);this._loadedIds[a]=!0,this._waiters[a]=null;for(var e=0;e<i.length;e++){var s=i[e];s.frameDoc=r.doc(t.byId(a)),o.attach(s.id,s.url,s.frameDoc)}}};var a=o._canAttach,i=dojox.io.scriptFrame;return o._canAttach=function(o){var e=o.args.frameDoc;if(e&&t.isString(e)){var s=t.byId(e),d=i._getWaiters(e);return s?i._loadedIds[e]?(o.frameDoc=r.doc(s),this.attach(o.id,o.url,o.frameDoc)):d.push(o):(d.push(o),r.create(e,dojox._scopeName+".io.scriptFrame._loaded('"+e+"');")),!1}return a.apply(this,arguments)},dojox.io.scriptFrame});
//# sourceMappingURL=../sourcemaps/io/scriptFrame.js.map
