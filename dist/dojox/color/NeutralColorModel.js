/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","./SimpleColorModel"],function(t,i,o){return i("dojox.color.NeutralColorModel",o,{_min:0,_max:0,_e:0,constructor:function(t,i){},initialize:function(i,o){var n=[],e=0,a=1e8,h=-a;t.forEach(i,function(t){var i=o(t);a=Math.min(a,i),h=Math.max(h,i),e+=i,n.push(i)}),n.sort(function(t,i){return t-i});var r=this.computeNeutral(a,h,e,n);this._min=a,this._max=h,this._min==this._max||r==this._min?this._e=-1:this._e=Math.log(.5)/Math.log((r-this._min)/(this._max-this._min))},computeNeutral:function(t,i,o,n){},getNormalizedValue:function(t){return this._e<0?0:(t=(t-this._min)/(this._max-this._min),Math.pow(t,this._e))}})});
//# sourceMappingURL=../sourcemaps/color/NeutralColorModel.js.map
