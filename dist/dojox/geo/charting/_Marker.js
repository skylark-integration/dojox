/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/sniff","./_base"],function(t,e,r,o){return r("dojox.geo.charting._Marker",null,{_needTooltipRefresh:null,_map:null,constructor:function(t,e){this._map=e;var r=e.mapObj;this.features=r.features,this.markerData=t,_needTooltipRefresh=!1},show:function(t,e){this.currentFeature=this.features[t],this._map.showTooltips&&this.currentFeature&&(this.markerText=this.currentFeature.markerText||this.markerData[t]||t,dojox.geo.charting.showTooltip(this.markerText,this.currentFeature.shape,["before"])),this._needTooltipRefresh=!1},hide:function(){this._map.showTooltips&&this.currentFeature&&dojox.geo.charting.hideTooltip(this.currentFeature.shape),this._needTooltipRefresh=!1},_getGroupBoundingBox:function(r){var o=r.children,i=o[0].getBoundingBox();this._arround=t.clone(i),e.forEach(o,function(t){var e=t.getBoundingBox();this._arround.x=Math.min(this._arround.x,e.x),this._arround.y=Math.min(this._arround.y,e.y)},this)},_toWindowCoords:function(t,e,r){var i=(t.x-this.topLeft[0])*this.scale,s=(t.y-this.topLeft[1])*this.scale;3.5==o("ff")?(t.x=e.x,t.y=e.y):o("chrome")?(t.x=r.x+i,t.y=r.y+s):(t.x=e.x+i,t.y=e.y+s),t.width=this.currentFeature._bbox[2]*this.scale,t.height=this.currentFeature._bbox[3]*this.scale,t.x+=t.width/6,t.y+=t.height/4}})});
//# sourceMappingURL=../../sourcemaps/geo/charting/_Marker.js.map
