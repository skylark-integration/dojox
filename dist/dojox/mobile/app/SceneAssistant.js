/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.mobile.app.SceneAssistant"),dojo.experimental("dojox.mobile.app.SceneAssistant"),dojo.declare("dojox.mobile.app.SceneAssistant",null,{constructor:function(){},setup:function(){},activate:function(o){},deactivate:function(){},destroy:function(){var o=dojo.query("> [widgetId]",this.containerNode).map(dijit.byNode);dojo.forEach(o,function(o){o.destroyRecursive()}),this.disconnect()},connect:function(o,n,t){this._connects||(this._connects=[]),this._connects.push(dojo.connect(o,n,t))},disconnect:function(){dojo.forEach(this._connects,dojo.disconnect),this._connects=[]}});
//# sourceMappingURL=../../sourcemaps/mobile/app/SceneAssistant.js.map
