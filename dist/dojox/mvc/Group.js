/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dijit/_WidgetBase","dojo/_base/lang"],function(t,e,i){return t("dojox.mvc.Group",e,{target:null,startup:function(){i.isFunction(this.getParent)&&this.getParent()&&this.getParent().removeRepeatNode&&(this.select=this.getParent().select,this.onCheckStateChanged=this.getParent().onCheckStateChanged),this.inherited(arguments)},_setTargetAttr:function(t){this._set("target",t),this.binding!=t&&this.set("ref",t)}})});
//# sourceMappingURL=../sourcemaps/mvc/Group.js.map
