/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/dom-geometry","dojox/mdnd/AreaManager"],function(o,r,e,t){var i=r("dojox.mdnd.dropMode.VerticalDropMode",null,{_oldXPoint:null,_oldYPoint:null,_oldBehaviour:"up",addArea:function(o,r){var e=o.length,i=t.position(r.node,!0);if(r.coords={x:i.x,y:i.y},0==e)o.push(r);else{for(var n=r.coords.x,d=0;d<e;d++)if(n<o[d].coords.x){for(var a=e-1;a>=d;a--)o[a+1]=o[a];o[d]=r;break}d==e&&o.push(r)}return o},updateAreas:function(o){var r=o.length;if(r>1)for(var e,t,i=0;i<r;i++){var n,d=o[i];d.coords.x1=-1,d.coords.x2=-1,0==i?(n=o[i+1],this._updateArea(d),this._updateArea(n),e=d.coords.x+d.node.offsetWidth,t=n.coords.x,d.coords.x2=e+(t-e)/2):i==r-1?d.coords.x1=o[i-1].coords.x2:(n=o[i+1],this._updateArea(n),e=d.coords.x+d.node.offsetWidth,t=n.coords.x,d.coords.x1=o[i-1].coords.x2,d.coords.x2=e+(t-e)/2)}},_updateArea:function(o){var r=t.position(o.node,!0);o.coords.x=r.x,o.coords.y=r.y},initItems:function(o){e.forEach(o.items,function(o){var r=o.item.node,e=t.position(r,!0),i=e.y+e.h/2;o.y=i}),o.initItems=!0},refreshItems:function(o,r,e,t){if(-1!=r&&o&&e&&e.h){var i=e.h;o.margin&&(i+=o.margin.t);for(var n=o.items.length,d=r;d<n;d++){var a=o.items[d];t?a.y+=i:a.y-=i}}},getDragPoint:function(o,r,e){var t=o.y;return this._oldYPoint&&(t>this._oldYPoint?(this._oldBehaviour="down",t+=r.h):t<=this._oldYPoint&&(this._oldBehaviour="up")),this._oldYPoint=t,{x:o.x+r.w/2,y:t}},getTargetArea:function(o,r,e){var t=0,i=r.x,n=o.length;if(n>1){var d=0,a="right",s=!1;if(-1==e||arguments.length<3?s=!0:this._checkInterval(o,e,i)?t=e:(this._oldXPoint<i?d=e+1:(d=e-1,n=0,a="left"),s=!0),s)if("right"===a){for(var f=d;f<n;f++)if(this._checkInterval(o,f,i)){t=f;break}}else for(f=d;f>=n;f--)if(this._checkInterval(o,f,i)){t=f;break}}return this._oldXPoint=i,t},_checkInterval:function(o,r,e){var t=o[r].coords;if(-1==t.x1){if(e<=t.x2)return!0}else if(-1==t.x2){if(e>t.x1)return!0}else if(t.x1<e&&e<=t.x2)return!0;return!1},getDropIndex:function(o,r){var e=o.items.length,t=(o.coords,r.y);if(e>0)for(var i=0;i<e;i++){if(t<o.items[i].y)return i;if(i==e-1)return-1}return-1},destroy:function(){}});return dojox.mdnd.areaManager()._dropMode=new dojox.mdnd.dropMode.VerticalDropMode,i});
//# sourceMappingURL=../../sourcemaps/mdnd/dropMode/VerticalDropMode.js.map