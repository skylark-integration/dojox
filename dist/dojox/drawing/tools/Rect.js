/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../util/oo","../manager/_registry","../stencil/Rect"],function(t,i,s,e){var n=i.declare(e,function(){},{draws:!0,onDrag:function(t){var i=t.start,s=t,e=i.x<s.x?i.x:s.x,n=i.y<s.y?i.y:s.y,a=i.x<s.x?s.x-i.x:i.x-s.x,o=i.y<s.y?s.y-i.y:i.y-s.y;this.keys.shift&&(a=o=Math.max(a,o)),this.keys.alt&&(e-=a,n-=o,a*=2,o*=2,e=Math.max(e,0),n=Math.max(n,0)),this.setPoints([{x:e,y:n},{x:e+a,y:n},{x:e+a,y:n+o},{x:e,y:n+o}]),this.render()},onUp:function(t){if(!this.created&&this._downOnCanvas){if(this._downOnCanvas=!1,this.shape){var i=this.data;if(i.width<this.minimumSize&&i.height<this.minimumSize)return void this.remove(this.shape,this.hit)}else{var s=t.start,e=4*this.minimumSize;this.setPoints([{x:s.x,y:s.y},{x:s.x+e,y:s.y},{x:s.x+e,y:s.y+e},{x:s.x,y:s.y+e}]),this.render()}this.onRender(this)}}});return t.setObject("dojox.drawing.tools.Rect",n),n.setup={name:"dojox.drawing.tools.Rect",tooltip:'<span class="drawingTipTitle">Rectangle Tool</span><br/><span class="drawingTipDesc">SHIFT - constrain to square</span>',iconClass:"iconRect"},s.register(n.setup,"tool"),n});
//# sourceMappingURL=../../sourcemaps/drawing/tools/Rect.js.map
