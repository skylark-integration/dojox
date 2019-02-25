/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./_CalendarView","dijit/_TemplatedMixin","dojo/query","dojo/dom-class","dojo/_base/event","dojo/date","dojo/date/locale","dojo/text!./Calendar/CalendarDay.html","dojo/cldr/supplemental","dojo/NodeList-dom"],function(e,t,a,d,i,n,s,o,l,r){return e("dojox.widget._CalendarDayView",[t,a],{templateString:l,datePart:"month",dayWidth:"narrow",postCreate:function(){this.cloneClass(".dijitCalendarDayLabelTemplate",6),this.cloneClass(".dijitCalendarDateTemplate",6),this.cloneClass(".dijitCalendarWeekTemplate",5);var e=o.getNames("days",this.dayWidth,"standAlone",this.getLang()),t=r.getFirstDayOfWeek(this.getLang());d(".dijitCalendarDayLabel",this.domNode).forEach(function(a,d){this._setText(a,e[(d+t)%7])},this)},onDisplay:function(){this._addedFx||(this._addedFx=!0,this.addFx(".dijitCalendarDateTemplate div",this.domNode))},_onDayClick:function(e){if(void 0!==e.target._date){var t=new Date(this.get("displayMonth")),a=e.target.parentNode,d="dijitCalendar",o=i.contains(a,d+"PreviousMonth")?-1:i.contains(a,d+"NextMonth")?1:0;o&&(t=s.add(t,"month",o)),t.setDate(e.target._date),this.isDisabledDate(t)?n.stop(e):this.parent._onDateSelected(t)}},_setValueAttr:function(e){this._populateDays()},_populateDays:function(){var e=new Date(this.get("displayMonth"));e.setDate(1);var t=e.getDay(),a=s.getDaysInMonth(e),i=s.getDaysInMonth(s.add(e,"month",-1)),n=new Date,l=this.get("value"),h=r.getFirstDayOfWeek(this.getLang());h>t&&(h-=7);var D=s.compare,g="dijitCalendarSelectedDate",m=this._lastDate,C=null==m||m.getMonth()!=e.getMonth()||m.getFullYear()!=e.getFullYear();if(this._lastDate=e,C){d(".dijitCalendarDateTemplate",this.domNode).forEach(function(o,r){r+=h;var m,C=new Date(e),u="dijitCalendar",j=0;r<t?(m=i-t+r+1,j=-1,u+="Previous"):r>=t+a?(m=r-t-a+1,j=1,u+="Next"):(m=r-t+1,u+="Current"),j&&(C=s.add(C,"month",j)),C.setDate(m),D(C,n,"date")||(u="dijitCalendarCurrentDate "+u),D(C,l,"date")||D(C,l,"month")||D(C,l,"year")||(u=g+" "+u),this.isDisabledDate(C,this.getLang())&&(u=" dijitCalendarDisabledDate "+u);var c=this.getClassForDate(C,this.getLang());c&&(u=c+" "+u),o.className=u+"Month dijitCalendarDateTemplate",o.dijitDateValue=C.valueOf();var p=d(".dijitCalendarDateLabel",o)[0];this._setText(p,C.getDate()),p._date=p.parentNode._date=C.getDate()},this);var u=o.getNames("months","wide","standAlone",this.getLang());this._setText(this.monthLabelNode,u[e.getMonth()]),this._setText(this.yearLabelNode,e.getFullYear())}else d(".dijitCalendarDateTemplate",this.domNode).removeClass(g).filter(function(e){return e.className.indexOf("dijitCalendarCurrent")>-1&&e._date==l.getDate()}).addClass(g)}})});
//# sourceMappingURL=../sourcemaps/widget/_CalendarDayView.js.map