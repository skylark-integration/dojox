/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.CompositeWire"),dojo.require("dojox.wire._base"),dojo.require("dojox.wire.Wire"),dojo.declare("dojox.wire.CompositeWire",dojox.wire.Wire,{_wireClass:"dojox.wire.CompositeWire",constructor:function(i){this._initializeChildren(this.children)},_getValue:function(i){if(!i||!this.children)return i;var e=dojo.isArray(this.children)?[]:{};for(var r in this.children)e[r]=this.children[r].getValue(i);return e},_setValue:function(i,e){if(!i||!this.children)return i;for(var r in this.children)this.children[r].setValue(e[r],i);return i},_initializeChildren:function(i){if(i)for(var e in i){var r=i[e];r.parent=this,dojox.wire.isWire(r)||(i[e]=dojox.wire.create(r))}}});
//# sourceMappingURL=../sourcemaps/wire/CompositeWire.js.map
