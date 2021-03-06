/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./ScaleIndicatorBase","dojox/gfx","dojo/_base/event","dojo/dom-geometry"],function(i,t,e,o,a){return i("dojox.dgauges.RectangularValueIndicator",t,{paddingLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,constructor:function(){this.addInvalidatingProperties(["paddingTop","paddingLeft","paddingRight","paddingBottom"])},indicatorShapeFunc:function(i,t){return i.createPolyline([0,0,10,0,0,10,-10,0,0,0]).setStroke({color:"black",width:1})},refreshRendering:function(){this.inherited(arguments);var i=isNaN(this._transitionValue)?this.value:this._transitionValue,t=this.scale.positionForValue(i),o=0,a=0,n=0;"horizontal"==this.scale._gauge.orientation?(o=t,a=this.paddingTop):(o=this.paddingLeft,a=t,n=90),this._gfxGroup.setTransform([{dx:o,dy:a},e.matrix.rotateg(n)])},_onMouseDown:function(i){this.inherited(arguments);var t=a.position(this.scale._gauge.domNode,!0);this.set("value",this.scale.valueForPosition({x:i.pageX-t.x,y:i.pageY-t.y})),o.stop(i)},_onMouseMove:function(i){this.inherited(arguments);var t=a.position(this.scale._gauge.domNode,!0);this.set("value",this.scale.valueForPosition({x:i.pageX-t.x,y:i.pageY-t.y}))}})});
//# sourceMappingURL=../sourcemaps/dgauges/RectangularValueIndicator.js.map
