/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../../util/oo","../_Plugin","../../manager/_registry"],function(o,n,t,i){var s,e=Math.pow(2,.25),u=1;return o.getObject("dojox.drawing.plugins.tools")||o.setObject("dojox.drawing.plugins.tools",{}),(s=dojox.drawing.plugins.tools).ZoomIn=n.declare(t,function(o){},{type:"dojox.drawing.plugins.tools.ZoomIn",onZoomIn:function(){u*=e,u=Math.min(u,10),this.canvas.setZoom(u),this.mouse.setZoom(u)},onClick:function(){this.onZoomIn()}}),s.Zoom100=n.declare(t,function(o){},{type:"dojox.drawing.plugins.tools.Zoom100",onZoom100:function(){u=1,this.canvas.setZoom(u),this.mouse.setZoom(u)},onClick:function(){this.onZoom100()}}),s.ZoomOut=n.declare(t,function(o){},{type:"dojox.drawing.plugins.tools.ZoomOut",onZoomOut:function(){u/=e,u=Math.max(u,.1),this.canvas.setZoom(u),this.mouse.setZoom(u)},onClick:function(){this.onZoomOut()}}),s.ZoomIn.setup={name:"dojox.drawing.plugins.tools.ZoomIn",tooltip:"Zoom In"},i.register(s.ZoomIn.setup,"plugin"),s.Zoom100.setup={name:"dojox.drawing.plugins.tools.Zoom100",tooltip:"Zoom to 100%"},i.register(s.Zoom100.setup,"plugin"),s.ZoomOut.setup={name:"dojox.drawing.plugins.tools.ZoomOut",tooltip:"Zoom In"},i.register(s.ZoomOut.setup,"plugin"),s});
//# sourceMappingURL=../../../sourcemaps/drawing/plugins/tools/Zoom.js.map
