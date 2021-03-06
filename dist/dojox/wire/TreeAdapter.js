/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.TreeAdapter"),dojo.require("dojox.wire.CompositeWire"),dojo.declare("dojox.wire.TreeAdapter",dojox.wire.CompositeWire,{_wireClass:"dojox.wire.TreeAdapter",constructor:function(e){this._initializeChildren(this.nodes)},_getValue:function(e){if(!e||!this.nodes)return e;var i=e;dojo.isArray(i)||(i=[i]);var r=[];for(var t in i)for(var o in this.nodes)r=r.concat(this._getNodes(i[t],this.nodes[o]));return r},_setValue:function(e,i){throw new Error("Unsupported API: "+this._wireClass+"._setValue")},_initializeChildren:function(e){if(e)for(var i in e){var r=e[i];r.node&&(r.node.parent=this,dojox.wire.isWire(r.node)||(r.node=dojox.wire.create(r.node))),r.title&&(r.title.parent=this,dojox.wire.isWire(r.title)||(r.title=dojox.wire.create(r.title))),r.children&&this._initializeChildren(r.children)}},_getNodes:function(e,i){var r=null;if(i.node){if(!(r=i.node.getValue(e)))return[];dojo.isArray(r)||(r=[r])}else r=[e];var t=[];for(var o in r){e=r[o];var n={};if(i.title?n.title=i.title.getValue(e):n.title=e,i.children){var d=[];for(var a in i.children)d=d.concat(this._getNodes(e,i.children[a]));d.length>0&&(n.children=d)}t.push(n)}return t}});
//# sourceMappingURL=../sourcemaps/wire/TreeAdapter.js.map
