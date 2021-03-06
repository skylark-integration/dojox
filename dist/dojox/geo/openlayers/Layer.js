/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/sniff","./Feature"],function(e,t,r,n,a){return e("dojox.geo.openlayers.Layer",null,{constructor:function(e,r){var n=r?r.olLayer:null;n||(n=t.delegate(new OpenLayers.Layer(e,r))),this.olLayer=n,this._features=null,this.olLayer.events.register("moveend",this,t.hitch(this,this.moveTo))},renderFeature:function(e){e.render()},getDojoMap:function(){return this.dojoMap},addFeature:function(e){t.isArray(e)?r.forEach(e,function(e){this.addFeature(e)},this):(null==this._features&&(this._features=[]),this._features.push(e),e._setLayer(this))},removeFeature:function(e){var t=this._features;if(null!=t){if(e instanceof Array)return e=e.slice(0),void r.forEach(e,function(e){this.removeFeature(e)},this);var n=r.indexOf(t,e);-1!=n&&t.splice(n,1),e._setLayer(null),e.remove()}},removeFeatureAt:function(e){var t=this._features,r=t[e];r&&(t.splice(e,1),r._setLayer(null),r.remove())},getFeatures:function(){return this._features},getFeatureAt:function(e){if(null!=this._features)return this._features[e]},getFeatureCount:function(){return null==this._features?0:this._features.length},clear:function(){var e=this.getFeatures();this.removeFeature(e)},moveTo:function(e){if(e.zoomChanged){if(null==this._features)return;r.forEach(this._features,function(e){this.renderFeature(e)},this)}},redraw:function(){n.isIE?setTimeout(t.hitch(this,function(){this.olLayer.redraw()},0)):this.olLayer.redraw()},added:function(){}})});
//# sourceMappingURL=../../sourcemaps/geo/openlayers/Layer.js.map
