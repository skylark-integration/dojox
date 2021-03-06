/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","./matrix","./vector"],function(t,o,a){var r=t.getObject("dojox.gfx3d",!0),n=function(t,o){return Math.sqrt(Math.pow(o.x-t.x,2)+Math.pow(o.y-t.y,2))};return r.gradient=function(t,r,i,l,s,c,e){for(var u=o.normalize(e),y=o.multiplyPoint(u,l*Math.cos(s)+i.x,l*Math.sin(s)+i.y,i.z),f=o.multiplyPoint(u,l*Math.cos(c)+i.x,l*Math.sin(c)+i.y,i.z),h=o.multiplyPoint(u,i.x,i.y,i.z),x=(c-s)/32,p=n(y,f)/2,M=t[r.type],d=r.finish,m=r.color,b=[{offset:0,color:M.call(t,a.substract(y,h),d,m)}],g=s+x;g<c;g+=x){var z=o.multiplyPoint(u,l*Math.cos(g)+i.x,l*Math.sin(g)+i.y,i.z),v=n(y,z),P=n(f,z);b.push({offset:v/(v+P),color:M.call(t,a.substract(z,h),d,m)})}return b.push({offset:1,color:M.call(t,a.substract(f,h),d,m)}),{type:"linear",x1:0,y1:-p,x2:0,y2:p,colors:b}},r.gradient});
//# sourceMappingURL=../sourcemaps/gfx3d/gradient.js.map
