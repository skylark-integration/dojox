/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/i18n","dijit/_WidgetBase"],function(e,n,t){var i={};return e.setObject("dojox.mobile.i18n",i),i.load=function(e,t,o){return i.registerBundle(n.getLocalization(e,t,o))},i.registerBundle=function(n){return i.bundle||(i.bundle=[]),e.mixin(i.bundle,n)},i.I18NProperties={mblNoConv:!1},e.extend(t,i.I18NProperties),e.extend(t,{_cv:function(n){return this.mblNoConv||!i.bundle?n:i.bundle[e.trim(n)]||n}}),i});
//# sourceMappingURL=../sourcemaps/mobile/i18n.js.map
