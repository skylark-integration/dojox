/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","./CalendarBase","./ColumnView","./ColumnViewSecondarySheet","./MobileVerticalRenderer","./MatrixView","./MobileHorizontalRenderer","./LabelRenderer","./ExpandRenderer","./Touch","dojo/text!./templates/MobileCalendar.html","dojox/mobile/Button"],function(e,i,r,n,t,a,o,l,d,s,c,h){return e("dojox.calendar.MobileCalendar",r,{templateString:h,_createDefaultViews:function(){var r=e([t,c]),h=e([n,c])(i.mixin({secondarySheetClass:r,verticalRenderer:a,horizontalRenderer:l,expandRenderer:s},this.columnViewProps)),m=e([o,c])(i.mixin({horizontalRenderer:l,labelRenderer:d,expandRenderer:s},this.matrixViewProps));this.columnView=h,this.matrixView=m;var u=[h,m];return this.installDefaultViewsActions(u),u},installDefaultViewsActions:function(e){this.matrixView.on("rowHeaderClick",i.hitch(this,this.matrixViewRowHeaderClick)),this.columnView.on("columnHeaderClick",i.hitch(this,this.columnViewColumnHeaderClick))}})});
//# sourceMappingURL=../sourcemaps/calendar/MobileCalendar.js.map
