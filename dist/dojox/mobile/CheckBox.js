/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-construct","dijit/form/_CheckBoxMixin","./ToggleButton","./sniff"],function(e,t,i,o,s){return e("dojox.mobile.CheckBox",[o,i],{baseClass:"mblCheckBox",_setTypeAttr:function(){},buildRendering:function(){if(this.templateString||this.srcNodeRef||(this.srcNodeRef=t.create("input",{type:this.type})),this.inherited(arguments),this.templateString||(this.focusNode=this.domNode),s("windows-theme")){var e=t.create("span",{className:"mblCheckableInputContainer"});e.appendChild(this.domNode.cloneNode()),this.labelNode=t.create("span",{className:"mblCheckableInputDecorator"},e),this.domNode=e,this.focusNode=e.firstChild}},_getValueAttr:function(){return!!this.checked&&this.value}})});
//# sourceMappingURL=../sourcemaps/mobile/CheckBox.js.map
