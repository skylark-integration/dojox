/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dijit/_WidgetBase","dojo/dom-construct","dojo/query","dojo/date","dojo/_base/window"],function(e,o,n,d,t,a){return e("dojox.widget._CalendarView",o,{headerClass:"",useHeader:!0,cloneClass:function(e,o,n){var t,a=d(e,this.domNode)[0];if(n){var i=d(e,this.domNode)[0];for(t=0;t<o;t++)a.parentNode.insertBefore(a.cloneNode(!0),i)}else for(t=0;t<o;t++)a.parentNode.appendChild(a.cloneNode(!0))},_setText:function(e,o){e.innerHTML!=o&&(n.empty(e),e.appendChild(a.doc.createTextNode(o)))},getHeader:function(){return this.header||(this.header=n.create("span",{class:this.headerClass}))},onValueSelected:function(e){},adjustDate:function(e,o){return t.add(e,this.datePart,o)},onDisplay:function(){},onBeforeDisplay:function(){},onBeforeUnDisplay:function(){}})});
//# sourceMappingURL=../sourcemaps/widget/_CalendarView.js.map
