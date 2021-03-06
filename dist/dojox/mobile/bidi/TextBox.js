/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dijit/_BidiSupport"],function(t){return t(null,{_setTextDirAttr:function(t){this._created&&this.textDir==t||(this._set("textDir",t),this.value?this.applyTextDir(this.focusNode||this.textbox):this.applyTextDir(this.focusNode||this.textbox,this.textbox.getAttribute("placeholder")))},_setDirAttr:function(t){this.textDir&&this.textbox||(this.dir=t)},_onBlur:function(t){this.inherited(arguments),this.textbox.value||this.applyTextDir(this.textbox,this.textbox.getAttribute("placeholder"))},_onInput:function(t){this.inherited(arguments),this.textbox.value||this.applyTextDir(this.textbox,this.textbox.getAttribute("placeholder"))}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/TextBox.js.map
