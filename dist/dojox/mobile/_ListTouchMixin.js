/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/touch","./sniff","dijit/form/_ListBase"],function(e,t,i,n){return e("dojox.mobile._ListTouchMixin",n,{postCreate:function(){if(this.inherited(arguments),(10===i("ie")||!i("ie")&&i("trident")>6)&&"undefined"!=typeof MSGesture){this._listConnect(t.press,"_onPress");var e,n=this,o=new MSGesture;this._onPress=function(t){o.target=n.domNode,o.addPointer(t.pointerId),e=t.target},this.on("MSGestureTap",function(t){n._onClick(t,e)})}else this._listConnect("click","_onClick")},_onClick:function(e,t){this._setSelectedAttr(t),this.onClick(t)}})});
//# sourceMappingURL=../sourcemaps/mobile/_ListTouchMixin.js.map
