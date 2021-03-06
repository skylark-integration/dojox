/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/Color"],function(t,e){return t("dojox.dgauges.components.DefaultPropertiesMixin",null,{minimum:0,maximum:100,snapInterval:1,majorTickInterval:NaN,minorTickInterval:NaN,minorTicksEnabled:!0,value:0,interactionArea:"gauge",interactionMode:"mouse",animationDuration:0,_setMinimumAttr:function(t){this.getElement("scale").scaler.set("minimum",t)},_setMaximumAttr:function(t){this.getElement("scale").scaler.set("maximum",t)},_setSnapIntervalAttr:function(t){this.getElement("scale").scaler.set("snapInterval",t)},_setMajorTickIntervalAttr:function(t){this.getElement("scale").scaler.set("majorTickInterval",t)},_setMinorTickIntervalAttr:function(t){this.getElement("scale").scaler.set("minorTickInterval",t)},_setMinorTicksEnabledAttr:function(t){this.getElement("scale").scaler.set("minorTicksEnabled",t)},_setInteractionAreaAttr:function(t){this.getElement("scale").getIndicator("indicator").set("interactionArea",t)},_setInteractionModeAttr:function(t){this.getElement("scale").getIndicator("indicator").set("interactionMode",t)},_setAnimationDurationAttr:function(t){this.getElement("scale").getIndicator("indicator").set("animationDuration",t)},_setBorderColorAttr:function(t){this.borderColor=new e(t),this.invalidateRendering()},_setFillColorAttr:function(t){this.fillColor=new e(t),this.invalidateRendering()},_setIndicatorColorAttr:function(t){this.indicatorColor=new e(t),this.invalidateRendering()}})});
//# sourceMappingURL=../../sourcemaps/dgauges/components/DefaultPropertiesMixin.js.map
