/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array"],function(e,t,s,n){return e("dojox.grid._SelectionPreserver",null,{constructor:function(e){this.selection=e;var n=this.grid=e.grid;this.reset(),this._connects=[t.connect(n,"_setStore",this,"reset"),t.connect(n,"_addItem",this,"_reSelectById"),t.connect(e,"onSelected",s.hitch(this,"_selectById",!0)),t.connect(e,"onDeselected",s.hitch(this,"_selectById",!1)),t.connect(e,"deselectAll",this,"reset")]},destroy:function(){this.reset(),n.forEach(this._connects,t.disconnect),delete this._connects},reset:function(){this._selectedById={}},_reSelectById:function(e,t){e&&this.grid._hasIdentity&&(this.selection.selected[t]=this._selectedById[this.grid.store.getIdentity(e)])},_selectById:function(e,t){if("none"!=this.selection.mode&&this.grid._hasIdentity){var s=t,n=this.grid;if("number"==typeof t||"string"==typeof t){var i=n._by_idx[t];s=i&&i.item}return s&&(this._selectedById[n.store.getIdentity(s)]=!!e),s}}})});
//# sourceMappingURL=../sourcemaps/grid/_SelectionPreserver.js.map
