/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojox/color"],function(o,t,l){return t("dojox.color.SimpleColorModel",null,{_startColor:null,_endColor:null,constructor:function(o,t){if(void 0!=t)this._startColor=o,this._endColor=t;else{var e=o.toHsl();e.s=100,e.l=85,this._startColor=l.fromHsl(e.h,e.s,e.l),this._startColor.a=o.a,e.l=15,this._endColor=l.fromHsl(e.h,e.s,e.l),this._endColor.a=o.a}},_getInterpoledValue:function(o,t,l){return o+(t-o)*l},getNormalizedValue:function(o){},getColor:function(o){var t=this.getNormalizedValue(o),e=this._startColor.toHsl(),r=this._endColor.toHsl(),s=this._getInterpoledValue(e.h,r.h,t),a=this._getInterpoledValue(e.s,r.s,t),n=this._getInterpoledValue(e.l,r.l,t),i=this._getInterpoledValue(this._startColor.a,this._endColor.a,t),d=l.fromHsl(s,a,n);return d.a=i,d}})});
//# sourceMappingURL=../sourcemaps/color/SimpleColorModel.js.map
