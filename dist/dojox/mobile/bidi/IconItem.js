/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./common"],function(e,t){return e(null,{_applyAttributes:function(){!this.textDir&&this.getParent()&&this.getParent().get("textDir")&&(this.textDir=this.getParent().get("textDir")),this.inherited(arguments)},_setLabelAttr:function(e){this.textDir&&(e=t.enforceTextDirWithUcc(e,this.textDir)),this.inherited(arguments)},_setTextDirAttr:function(e){e&&this.textDir!==e&&(this.textDir=e,this.labelNode.innerHTML=t.removeUCCFromText(this.labelNode.innerHTML),this.labelNode.innerHTML=t.enforceTextDirWithUcc(this.labelNode.innerHTML,this.textDir),this.paneWidget&&(this.paneWidget.labelNode.innerHTML=t.removeUCCFromText(this.paneWidget.labelNode.innerHTML),this.paneWidget.labelNode.innerHTML=t.enforceTextDirWithUcc(this.paneWidget.labelNode.innerHTML,this.textDir)))}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/IconItem.js.map
