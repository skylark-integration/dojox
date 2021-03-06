/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.TextAdapter"),dojo.require("dojox.wire.CompositeWire"),dojo.declare("dojox.wire.TextAdapter",dojox.wire.CompositeWire,{_wireClass:"dojox.wire.TextAdapter",constructor:function(e){this._initializeChildren(this.segments),this.delimiter||(this.delimiter="")},_getValue:function(e){if(!e||!this.segments)return e;var t="";for(var i in this.segments){var r=this.segments[i].getValue(e);t=this._addSegment(t,r)}return t},_setValue:function(e,t){throw new Error("Unsupported API: "+this._wireClass+"._setValue")},_addSegment:function(e,t){return t?e?e+this.delimiter+t:t:e}});
//# sourceMappingURL=../sourcemaps/wire/TextAdapter.js.map
