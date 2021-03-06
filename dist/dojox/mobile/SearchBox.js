/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dijit/form/_SearchMixin","dojox/mobile/TextBox","dojo/dom-class","dojo/keys","dojo/touch","dojo/on","./sniff"],function(e,t,o,n,i,s,a,r,h,c){return e("dojox.mobile.SearchBox",[i,n],{baseClass:"mblTextBox mblSearchBox",type:"search",placeHolder:"",incremental:!0,_setIncrementalAttr:function(e){this.incremental=e},_onInput:function(e){e.charOrCode==a.ENTER?e.charOrCode=229:this.incremental||(e.charOrCode=0),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.textbox.removeAttribute("incremental"),this.textbox.hasAttribute("results")||this.textbox.setAttribute("results","0"),c("ios")<5&&(s.add(this.domNode,"iphone4"),this.connect(this.textbox,"onfocus",function(){""!==this.textbox.value&&this.defer(function(){""===this.textbox.value&&this._onInput({charOrCode:a.ENTER})})})),this.connect(this.textbox,"onsearch",function(){this._onInput({charOrCode:a.ENTER})});var e,t,n,i=this;c("ios")&&this.on(r.press,function(s){e=s.touches?s.touches[0].pageX:s.pageX,t=s.touches?s.touches[0].pageY:s.pageY,n=h(o.doc,r.release,function(o){var s,r;""!=i.get("value")&&(s=o.pageX-e,r=o.pageY-t,Math.abs(s)<=4&&Math.abs(r)<=4&&(o.preventDefault(),i.set("value",""),i._onInput({charOrCode:a.ENTER}))),n&&(n.remove(),n=null)}),i.domNode.getBoundingClientRect().right-(s.touches?s.touches[0].pageX:s.pageX)>=20&&n&&(n.remove(),n=null)})}})});
//# sourceMappingURL=../sourcemaps/mobile/SearchBox.js.map
