/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire._base"),dojox.wire._defaultWireClass="dojox.wire.Wire",dojox.wire._wireClasses={attribute:"dojox.wire.DataWire",path:"dojox.wire.XmlWire",children:"dojox.wire.CompositeWire",columns:"dojox.wire.TableAdapter",nodes:"dojox.wire.TreeAdapter",segments:"dojox.wire.TextAdapter"},dojox.wire.register=function(e,o){e&&o&&(dojox.wire._wireClasses[o]||(dojox.wire._wireClasses[o]=e))},dojox.wire._getClass=function(e){return dojo.require(e),dojo.getObject(e)},dojox.wire.create=function(e){e||(e={});var o=e.wireClass;if(o)dojo.isString(o)&&(o=dojox.wire._getClass(o));else for(var r in e)if(e[r]&&(o=dojox.wire._wireClasses[r])){dojo.isString(o)&&(o=dojox.wire._getClass(o),dojox.wire._wireClasses[r]=o);break}return o||(dojo.isString(dojox.wire._defaultWireClass)&&(dojox.wire._defaultWireClass=dojox.wire._getClass(dojox.wire._defaultWireClass)),o=dojox.wire._defaultWireClass),new o(e)},dojox.wire.isWire=function(e){return e&&e._wireClass},dojox.wire.transfer=function(e,o,r,i){if(e&&o){dojox.wire.isWire(e)||(e=dojox.wire.create(e)),dojox.wire.isWire(o)||(o=dojox.wire.create(o));var d=e.getValue(r);o.setValue(d,i||r)}},dojox.wire.connect=function(e,o,r){if(e&&o&&r){var i={topic:e.topic};return e.topic?i.handle=dojo.subscribe(e.topic,function(){dojox.wire.transfer(o,r,arguments)}):e.event&&(i.handle=dojo.connect(e.scope,e.event,function(){dojox.wire.transfer(o,r,arguments)})),i}},dojox.wire.disconnect=function(e){e&&e.handle&&(e.topic?dojo.unsubscribe(e.handle):dojo.disconnect(e.handle))};
//# sourceMappingURL=../sourcemaps/wire/_base.js.map
