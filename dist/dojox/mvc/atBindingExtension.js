/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/aspect","dojo/_base/array","dojo/_base/lang","dijit/_WidgetBase","./_atBindingMixin","dijit/registry"],function(t,i,n,e,a){return function(e){return i.forEach(arguments,function(i){i.dataBindAttr?console.warn("Detected a widget or a widget class that has already been applied data binding extension. Skipping..."):(n._mixin(i,a.mixin),t.before(i,"postscript",function(t,i){this._dbpostscript(t,i)}),t.before(i,"startup",function(){this._started||this._startAtWatchHandles()}),t.before(i,"destroy",function(){this._stopAtWatchHandles()}),t.around(i,"set",function(t){return function(i,e){return i==a.prototype.dataBindAttr?this._setBind(e):"dojox.mvc.at"==(e||{}).atsignature?this._setAtWatchHandle(i,e):t.apply(this,n._toArray(arguments))}}))}),arguments}});
//# sourceMappingURL=../sourcemaps/mvc/atBindingExtension.js.map
