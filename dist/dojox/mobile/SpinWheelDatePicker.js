/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","./_DatePickerMixin","./SpinWheel","./SpinWheelSlot"],function(o,e,n,i,t,l){return e("dojox.mobile.SpinWheelDatePicker",[t,i],{slotClasses:[l,l,l],slotProps:[{labelFrom:1970,labelTo:2038},{},{}],buildRendering:function(){this.initSlots(),this.inherited(arguments),n.add(this.domNode,"mblSpinWheelDatePicker"),this._conn=[this.connect(this.slots[0],"onFlickAnimationEnd","_onYearSet"),this.connect(this.slots[1],"onFlickAnimationEnd","_onMonthSet"),this.connect(this.slots[2],"onFlickAnimationEnd","_onDaySet")]},disableValues:function(e){o.forEach(this.slots[2].panelNodes,function(o){for(var i=27;i<31;i++)n.toggle(o.childNodes[i],"mblSpinWheelSlotLabelGray",i>=e)})}})});
//# sourceMappingURL=../sourcemaps/mobile/SpinWheelDatePicker.js.map
