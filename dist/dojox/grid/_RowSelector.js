/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./_View"],function(t,e){return t("dojox.grid._RowSelector",e,{defaultWidth:"2em",noscroll:!0,padBorderWidth:2,buildRendering:function(){this.inherited("buildRendering",arguments),this.scrollboxNode.style.overflow="hidden",this.headerNode.style.visibility="hidden"},getWidth:function(){return this.viewWidth||this.defaultWidth},buildRowContent:function(t,e){var i=this.contentWidth||0;e.innerHTML='<table class="dojoxGridRowbarTable" style="width:'+i+'px;height:1px;" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td class="dojoxGridRowbarInner">&nbsp;</td></tr></table>'},renderHeader:function(){},updateRow:function(){},resize:function(){this.adaptHeight()},adaptWidth:function(){!("contentWidth"in this)&&this.contentNode&&this.contentNode.offsetWidth>0&&(this.contentWidth=this.contentNode.offsetWidth-this.padBorderWidth)},doStyleRowNode:function(t,e){var i=["dojoxGridRowbar dojoxGridNonNormalizedCell"];this.grid.rows.isOver(t)&&i.push("dojoxGridRowbarOver"),this.grid.selection.isSelected(t)&&i.push("dojoxGridRowbarSelected"),e.className=i.join(" ")},domouseover:function(t){this.grid.onMouseOverRow(t)},domouseout:function(t){this.isIntraRowEvent(t)||this.grid.onMouseOutRow(t)}})});
//# sourceMappingURL=../sourcemaps/grid/_RowSelector.js.map
