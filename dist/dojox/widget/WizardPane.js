/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dijit/layout/ContentPane"],function(n,i,t){return i("dojox.widget.WizardPane",t,{canGoBack:!0,passFunction:null,doneFunction:null,startup:function(){this.inherited(arguments),this.isFirstChild&&(this.canGoBack=!1),n.isString(this.passFunction)&&(this.passFunction=n.getObject(this.passFunction)),n.isString(this.doneFunction)&&this.doneFunction&&(this.doneFunction=n.getObject(this.doneFunction))},_onShow:function(){this.isFirstChild&&(this.canGoBack=!1),this.inherited(arguments)},_checkPass:function(){var i=!0;if(this.passFunction&&n.isFunction(this.passFunction)){var t=this.passFunction();switch(typeof t){case"boolean":i=t;break;case"string":alert(t),i=!1}}return i},done:function(){this.doneFunction&&n.isFunction(this.doneFunction)&&this.doneFunction()}})});
//# sourceMappingURL=../sourcemaps/widget/WizardPane.js.map
