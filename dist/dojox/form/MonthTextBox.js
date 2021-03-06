/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojox/widget/MonthlyCalendar","dijit/form/TextBox","./DateTextBox","dojo/_base/declare"],function(t,e,o,n,r,i){return t.experimental("dojox/form/DateTextBox"),i("dojox.form.MonthTextBox",r,{popupClass:o,selector:"date",postMixInProperties:function(){this.inherited(arguments),this.constraints.datePattern="MM"},format:function(t){return t||0===t?t.getMonth?t.getMonth()+1:Number(t)+1:1},parse:function(t,e){return Number(t)-1},serialize:function(t,e){return String(t)},validator:function(t){var e=Number(t),o=/(^-?\d\d*$)/.test(String(t));return""==t||null==t||o&&e>=1&&e<=12},_setValueAttr:function(t,e,o){t&&t.getMonth&&(t=t.getMonth()),n.prototype._setValueAttr.call(this,t,e,o)},openDropDown:function(){this.inherited(arguments),this.dropDown.onValueSelected=e.hitch(this,function(t){this.focus(),setTimeout(e.hitch(this,"closeDropDown"),1),n.prototype._setValueAttr.call(this,t,!0,t)})}})});
//# sourceMappingURL=../sourcemaps/form/MonthTextBox.js.map
