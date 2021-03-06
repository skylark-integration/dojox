/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/Color","./AnalogIndicatorBase"],function(e,t,o){return e("dojox.gauges.GlossyCircularGaugeNeedle",[o],{interactionMode:"gauge",color:"#c4c4c4",_getShapes:function(e){var o=t.blendColors(new t(this.color),new t("black"),.3);if(!this._gauge)return null;var r=[];r[0]=e.createGroup();var a=Math.min(this._gauge.width/this._gauge._designWidth,this._gauge.height/this._gauge._designHeight);return r[0].createGroup().setTransform({xx:a,xy:0,yx:0,yy:a,dx:0,dy:0}),r[0].children[0].createPath({path:"M357.1429 452.005 L333.0357 465.9233 L333.0357 438.0868 L357.1429 452.005 Z"}).setTransform({xx:0,xy:1,yx:-6.21481,yy:0,dx:-452.00505,dy:2069.75519}).setFill(this.color).setStroke({color:o,width:1,style:"Solid",cap:"butt",join:20}),r}})});
//# sourceMappingURL=../sourcemaps/gauges/GlossyCircularGaugeNeedle.js.map
