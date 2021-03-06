/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../util/oo","../manager/_registry","../stencil/Ellipse"],function(t,i,s,e){var o=i.declare(e,function(){},{draws:!0,onDrag:function(t){var i=t.start,s=t,e=i.x<s.x?i.x:s.x,o=i.y<s.y?i.y:s.y,a=i.x<s.x?s.x-i.x:i.x-s.x,n=i.y<s.y?s.y-i.y:i.y-s.y;this.keys.shift&&(a=n=Math.max(a,n)),this.keys.alt?(o-n<0&&(n=o),e-a<0&&(a=e)):(e+=a/2,o+=n/2,a/=2,n/=2),this.points=[{x:e-a,y:o-n},{x:e+a,y:o-n},{x:e+a,y:o+n},{x:e-a,y:o+n}],this.render()},onUp:function(t){if(!this.created&&this._downOnCanvas){if(this._downOnCanvas=!1,this.shape){var i=this.pointsToData();if(console.log("Create a default shape here, pt to data: ",i),2*i.rx<this.minimumSize&&2*i.ry<this.minimumSize)return void this.remove(this.shape,this.hit)}else{var s=t.start,e=2*this.minimumSize;this.data={cx:s.x+e,cy:s.y+e,rx:e,ry:e},this.dataToPoints(),this.render()}this.onRender(this)}}});return t.setObject("dojox.drawing.tools.Ellipse",o),o.setup={name:"dojox.drawing.tools.Ellipse",tooltip:"Ellipse Tool",iconClass:"iconEllipse"},s.register(o.setup,"tool"),o});
//# sourceMappingURL=../../sourcemaps/drawing/tools/Ellipse.js.map
