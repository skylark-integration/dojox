/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.xmpp.widget.ChatSession"),dojo.require("dijit.layout.LayoutContainer"),dojo.require("dijit._Templated"),dojo.declare("dojox.xmpp.widget.ChatSession",[dijit.layout.LayoutContainer,dijit._Templated],{templateString:dojo.cache("dojox.xmpp.widget","templates/ChatSession.html"),enableSubWidgets:!0,widgetsInTemplate:!0,widgetType:"ChatSession",chatWith:null,instance:null,postCreate:function(){},displayMessage:function(e,t){if(e){var o=e.from?this.chatWith:"me";this.messages.domNode.innerHTML+="<b>"+o+":</b> "+e.body+"<br/>",this.goToLastMessage()}},goToLastMessage:function(){this.messages.domNode.scrollTop=this.messages.domNode.scrollHeight},onKeyPress:function(e){(e.keyCode||e.charCode)==dojo.keys.ENTER&&""!=this.chatInput.value&&(this.instance.sendMessage({body:this.chatInput.value}),this.displayMessage({body:this.chatInput.value},"out"),this.chatInput.value="")}});
//# sourceMappingURL=../../sourcemaps/xmpp/widget/ChatSession.js.map
