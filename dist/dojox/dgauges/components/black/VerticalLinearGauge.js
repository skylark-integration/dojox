/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../../RectangularGauge","../../LinearScaler","../../RectangularScale","../../RectangularValueIndicator","../DefaultPropertiesMixin"],function(o,e,t,i,r,l,a,n){return e("dojox.dgauges.components.black.VerticalLinearGauge",[i,n],{borderColor:"#000000",fillColor:"#000000",indicatorColor:"#A4A4A4",constructor:function(){this.orientation="vertical",this.borderColor=new t(this.borderColor),this.fillColor=new t(this.fillColor),this.indicatorColor=new t(this.indicatorColor),this.addElement("background",o.hitch(this,this.drawBackground));var e=new r,i=new l;i.set("scaler",e),i.set("labelPosition","trailing"),i.set("paddingTop",30),i.set("paddingBottom",30),i.set("paddingLeft",15),i.set("font",{family:"Helvetica",weight:"bold",size:"7pt",color:"#CECECE"}),i.set("tickShapeFunc",function(o,e,t){return o.createCircle({r:t.isMinor?.5:3}).setFill("#CECECE")}),this.addElement("scale",i);var n=new a;n.set("interactionArea","gauge"),n.set("value",e.minimum),n.set("paddingLeft",18),n.set("indicatorShapeFunc",o.hitch(this,function(o){return o.createPolyline([0,0,-10,-20,10,-20,0,0]).setFill(this.indicatorColor).setStroke({color:[69,69,69],width:1,style:"Solid",cap:"butt",join:20})})),i.addIndicator("indicator",n)},drawBackground:function(o,e,t){o.createRect({x:0,y:0,width:50,height:t,r:15}).setFill(this.borderColor),o.createRect({x:4,y:4,width:42,height:t-8,r:12}).setFill({type:"linear",x1:5,y1:0,x2:20,y2:0,colors:[{offset:0,color:[100,100,100]},{offset:1,color:this.fillColor}]}),o.createPath().moveTo(25,4).hLineTo(36).smoothCurveTo(46,4,46,18).vLineTo(t-20).smoothCurveTo(46,t-4,36,t-4).closePath().setFill({type:"linear",x1:70,y1:0,x2:25,y2:0,colors:[{offset:0,color:[150,150,150]},{offset:1,color:this.fillColor}]}),o.createPath().moveTo(25,4).hLineTo(36).smoothCurveTo(46,4,46,18).vLineTo(t-20).smoothCurveTo(46,t-4,36,t-4).closePath().setFill([255,255,255,.05])}})});
//# sourceMappingURL=../../../sourcemaps/dgauges/components/black/VerticalLinearGauge.js.map