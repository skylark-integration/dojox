/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","../../util/oo","../_Plugin","../../manager/_registry"],function(n,i,t,o){var s=i.declare(t,function(n){},{onClick:function(){var n;for(var i in this.stencils.stencils)if(console.log(" stanceil item:",this.stencils.stencils[i].id,this.stencils.stencils[i]),"path"==this.stencils.stencils[i].shortType){n=this.stencils.stencils[i];break}n&&(console.log("click Iconize plugin",n.points),this.makeIcon(n.points))},makeIcon:function(i){var t=function(n){return Number(n.toFixed(1))},o=1e4,s=1e4;i.forEach(function(n){void 0===n.x||isNaN(n.x)||(o=Math.min(o,n.x),s=Math.min(s,n.y))});var e=0,c=0;i.forEach(function(n){void 0===n.x||isNaN(n.x)||(n.x=t(n.x-o),n.y=t(n.y-s),e=Math.max(e,n.x),c=Math.max(c,n.y))}),console.log("xmax:",e,"ymax:",c);i.forEach(function(n){n.x=60*t(n.x/e)+20,n.y=60*t(n.y/c)+20});var a="[\n";n.forEach(i,function(n,t){a+="{\t",n.t&&(a+="t:'"+n.t+"'"),void 0===n.x||isNaN(n.x)||(n.t&&(a+=", "),a+="x:"+n.x+",\t\ty:"+n.y),a+="\t}",t!=i.length-1&&(a+=","),a+="\n"}),a+="]",console.log(a);var l=n.byId("data");l&&(l.value=a)}});return s.setup={name:"dojox.drawing.plugins.tools.Iconize",tooltip:"Iconize Tool",iconClass:"iconPan"},n.setObject("dojox.drawing.plugins.tools.Iconize",s),o.register(s.setup,"plugin"),s});
//# sourceMappingURL=../../../sourcemaps/drawing/plugins/tools/Iconize.js.map
