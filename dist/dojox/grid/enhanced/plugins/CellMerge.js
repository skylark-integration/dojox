/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/html","../_Plugin","../../EnhancedGrid"],function(e,r,t,i,o,n){var s=e("dojox.grid.enhanced.plugins.CellMerge",o,{name:"cellMerge",constructor:function(e,r){this.grid=e,this._records=[],this._merged={},r&&t.isObject(r)&&this._setupConfig(r.mergedCells),this._initEvents(),this._mixinGrid()},mergeCells:function(e,r,t,i){var o=this._createRecord({row:e,start:r,end:t,major:i});return o&&this._updateRows(o),o},unmergeCells:function(e){var t;e&&(t=r.indexOf(this._records,e))>=0&&(this._records.splice(t,1),this._updateRows(e))},getMergedCells:function(){var e=[];for(var r in this._merged)e=e.concat(this._merged[r]);return e},getMergedCellsByRow:function(e){return this._merged[e]||[]},_setupConfig:function(e){r.forEach(e,this._createRecord,this)},_initEvents:function(){r.forEach(this.grid.views.views,function(e){this.connect(e,"onAfterRow",t.hitch(this,"_onAfterRow",e.index))},this)},_mixinGrid:function(){var e=this.grid;e.mergeCells=t.hitch(this,"mergeCells"),e.unmergeCells=t.hitch(this,"unmergeCells"),e.getMergedCells=t.hitch(this,"getMergedCells"),e.getMergedCellsByRow=t.hitch(this,"getMergedCellsByRow")},_getWidth:function(e){var r=this.grid.layout.cells[e].getHeaderNode();return i.position(r).w},_onAfterRow:function(e,t,o){try{if(t<0)return;var n,s,d=[],a=this._records.length,l=this.grid.layout.cells;for(n=0;n<a;++n){var h=this._records[n],c=this.grid._by_idx[t];if(h.view==e&&h.row(t,c&&c.item,this.grid.store)){var g={record:h,hiddenCells:[],totalWidth:0,majorNode:l[h.major].getNode(t),majorHeaderNode:l[h.major].getHeaderNode()};for(s=h.start;s<=h.end;++s){var u=this._getWidth(s,t);g.totalWidth+=u,s!=h.major&&g.hiddenCells.push(l[s].getNode(t))}if(1!=o.length||g.totalWidth>0){for(s=d.length-1;s>=0;--s){var f=d[s].record;(f.start>=h.start&&f.start<=h.end||f.end>=h.start&&f.end<=h.end)&&d.splice(s,1)}d.push(g)}}}this._merged[t]=[],r.forEach(d,function(e){r.forEach(e.hiddenCells,function(e){i.style(e,"display","none")});var o=i.marginBox(e.majorHeaderNode).w-i.contentBox(e.majorHeaderNode).w,n=e.totalWidth;i.isWebKit||(n-=o),i.style(e.majorNode,"width",n+"px"),e.majorNode.setAttribute("colspan",e.hiddenCells.length+1),this._merged[t].push({row:t,start:e.record.start,end:e.record.end,major:e.record.major,handle:e.record})},this)}catch(e){console.warn("CellMerge._onAfterRow() error: ",t,e)}},_createRecord:function(e){if(this._isValid(e)){e={row:e.row,start:e.start,end:e.end,major:e.major};var r=this.grid.layout.cells;if(e.view=r[e.start].view.index,e.major="number"!=typeof e.major||isNaN(e.major)?e.start:e.major,"number"==typeof e.row){var i=e.row;e.row=function(e){return e===i}}else if("string"==typeof e.row){var o=e.row;e.row=function(e,r,t){try{if(t&&r&&t.getFeatures()["dojo.data.api.Identity"])return t.getIdentity(r)==o}catch(e){console.error(e)}return!1}}if(t.isFunction(e.row))return this._records.push(e),e}return null},_isValid:function(e){var r=this.grid.layout.cells,i=r.length;return t.isObject(e)&&"row"in e&&"start"in e&&"end"in e&&e.start>=0&&e.start<i&&e.end>e.start&&e.end<i&&r[e.start].view.index==r[e.end].view.index&&r[e.start].subrow==r[e.end].subrow&&!("number"==typeof e.major&&(e.major<e.start||e.major>e.end))},_updateRows:function(e){for(var r=null,t=0,i=this.grid.rowCount;t<i;++t){var o=this.grid._by_idx[t];o&&e.row(t,o&&o.item,this.grid.store)&&(this.grid.views.updateRow(t),null===r&&(r=t))}r>=0&&this.grid.scroller.rowHeightChanged(r)}});return n.registerPlugin(s),s});
//# sourceMappingURL=../../../sourcemaps/grid/enhanced/plugins/CellMerge.js.map