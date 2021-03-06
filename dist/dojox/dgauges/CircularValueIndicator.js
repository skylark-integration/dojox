/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojox/gfx","./ScaleIndicatorBase","dojo/_base/event"],function(e,i,a,t){return e("dojox.dgauges.CircularValueIndicator",a,{indicatorShapeFunc:function(e,i){return e.createLine({x1:0,y1:0,x2:40,y2:0}).setStroke({color:"black",width:1})},refreshRendering:function(){this.inherited(arguments);var e=isNaN(this._transitionValue)?this.value:this._transitionValue,a=this.scale.positionForValue(e);this._gfxGroup.setTransform([{dx:this.scale.originX,dy:this.scale.originY},i.matrix.rotateg(a)])},_onMouseDown:function(e){this.inherited(arguments);var i=this.scale._gauge._gaugeToPage(this.scale.originX,this.scale.originY),a=180*Math.atan2(e.pageY-i.y,e.pageX-i.x)/Math.PI;this.set("value",this.scale.valueForPosition(a)),t.stop(e)},_onMouseMove:function(e){this.inherited(arguments);var i=this.scale._gauge._gaugeToPage(this.scale.originX,this.scale.originY),a=180*Math.atan2(e.pageY-i.y,e.pageX-i.x)/Math.PI;this.set("value",this.scale.valueForPosition(a))}})});
//# sourceMappingURL=../sourcemaps/dgauges/CircularValueIndicator.js.map
