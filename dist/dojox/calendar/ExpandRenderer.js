/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/event","dojo/_base/window","dojo/on","dojo/dom-class","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./templates/ExpandRenderer.html"],function(e,t,n,o,s,d,i,a,r,l){return e("dojox.calendar.ExpandRenderer",[a,r],{templateString:l,baseClass:"dojoxCalendarExpand",owner:null,focused:!1,up:!1,down:!1,date:null,items:null,rowIndex:-1,columnIndex:-1,_setExpandedAttr:function(e){i.set(this.expand,"display",e?"none":"inline-block"),i.set(this.collapse,"display",e?"inline-block":"none"),this._set("expanded",e)},_setDownAttr:function(e){this._setState("down",e,"Down")},_setUpAttr:function(e){this._setState("up",e,"Up")},_setFocusedAttr:function(e){this._setState("focused",e,"Focused")},_setState:function(e,t,n){if(this[e]!=t){var o=this.stateNode||this.domNode;d[t?"add":"remove"](o,n),this._set(e,t)}},_onClick:function(e){this.owner&&this.owner.expandRendererClickHandler&&this.owner.expandRendererClickHandler(e,this)},_onMouseDown:function(e){n.stop(e),this.set("down",!0)},_onMouseUp:function(e){this.set("down",!1)},_onMouseOver:function(e){if(!this.up){var t=1==e.button;this.set("up",!t),this.set("down",t)}},_onMouseOut:function(e){for(var t=e.relatedTarget;t!=e.currentTarget&&t!=o.doc.body&&null!=t;)t=t.parentNode;t!=e.currentTarget&&(this.set("up",!1),this.set("down",!1))}})});
//# sourceMappingURL=../sourcemaps/calendar/ExpandRenderer.js.map
