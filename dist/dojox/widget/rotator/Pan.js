/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/dom-style","dojo/_base/fx","dojo/fx"],function(n,t,o,e,r,a){function i(n,t){var o=t.next.node,i=t.rotatorBox,u=n%2,d=u?"left":"top",c=(u?i.w:i.h)*(n<2?-1:1),s={},f={};return e.set(o,"display",""),s[d]={start:0,end:-c},f[d]={start:c,end:0},a.combine([r.animateProperty({node:t.current.node,duration:t.duration,properties:s,easing:t.easing}),r.animateProperty({node:o,duration:t.duration,properties:f,easing:t.easing})])}function u(n,t){e.set(n,"zIndex",t)}var exports={pan:function(r){var d=r.wrap,c=r.rotator.panes,s=c.length,f=s,p=r.current.idx,x=r.next.idx,h=Math.abs(x-p),g=Math.abs(s-Math.max(p,x)+Math.min(p,x))%s,b=p<x,m=3,j=[],l=[],v=r.duration;if((!d&&!b||d&&(b&&h>g||!b&&h<g))&&(m=1),r.continuous){r.quick&&(v=Math.round(v/(d?Math.min(g,h):h))),u(c[p].node,f--);for(var y=3==m;;){var M=p;y?++p>=s&&(p=0):--p<0&&(p=s-1);var w=c[M],_=c[p];if(u(_.node,f--),j.push(i(m,o.mixin({easing:function(n){return n}},r,{current:w,next:_,duration:v}))),y&&p==x||!y&&p==x)break;l.push(_.node)}var k=a.chain(j),z=t.connect(k,"onEnd",function(){t.disconnect(z),n.forEach(l,function(n){e.set(n,{display:"none",left:0,opacity:1,top:0,zIndex:0})})});return k}return i(m,r)},panDown:function(n){return i(0,n)},panRight:function(n){return i(1,n)},panUp:function(n){return i(2,n)},panLeft:function(n){return i(3,n)}};return o.mixin(o.getObject("dojox.widget.rotator"),exports),exports});
//# sourceMappingURL=../../sourcemaps/widget/rotator/Pan.js.map
