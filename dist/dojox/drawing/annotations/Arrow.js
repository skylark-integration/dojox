/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["../util/oo","../stencil/Path"],function(t,i){return t.declare(i,function(t){this.stencil.connectMult([[this.stencil,"select",this,"select"],[this.stencil,"deselect",this,"deselect"],[this.stencil,"render",this,"render"],[this.stencil,"onDelete",this,"destroy"]]),this.connect("onBeforeRender",this,function(){var t=this.stencil.points[this.idx1],i=this.stencil.points[this.idx2];this.stencil.getRadius()>=this.minimumSize?this.points=this.arrowHead(i.x,i.y,t.x,t.y,this.style):this.points=[]})},{idx1:0,idx2:1,subShape:!0,minimumSize:30,arrowHead:function(t,i,e,s,n){var h={start:{x:t,y:i},x:e,y:s},l=this.util.angle(h),r=this.util.length(h),c=n.arrows.length,o=n.arrows.width/2;return r<c&&(c=r/2),[{x:e,y:s},this.util.pointOnCircle(e,s,-c,l-o),this.util.pointOnCircle(e,s,-c,l+o)]}})});
//# sourceMappingURL=../../sourcemaps/drawing/annotations/Arrow.js.map
