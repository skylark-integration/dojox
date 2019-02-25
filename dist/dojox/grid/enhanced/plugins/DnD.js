/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/array","dojo/_base/lang","dojo/_base/html","dojo/_base/json","dojo/_base/window","dojo/query","dojo/keys","dojo/dnd/Source","dojo/dnd/Avatar","../_Plugin","../../EnhancedGrid","dojo/dnd/Manager","./Selector","./Rearrange"],function(e,t,n,i,o,r,s,d,l,c,a,h,u,g,_){var f=function(e){for(var t=e[0],n=1;n<e.length;++n)t=t.concat(e[n]);return t},y=t("dojox.grid.enhanced.plugins.GridDnDElement",null,{constructor:function(e){this.plugin=e,this.node=r.create("div"),this._items={}},destroy:function(){this.plugin=null,r.destroy(this.node),this.node=null,this._items=null},createDnDNodes:function(e){this.destroyDnDNodes();var t=["grid/"+e.type+"s"],n=this.plugin.grid.id+"_dndItem";i.forEach(e.selected,function(e,i){var o=n+i;this._items[o]={type:t,data:e,dndPlugin:this.plugin},this.node.appendChild(r.create("div",{id:o}))},this)},getDnDNodes:function(){return i.map(this.node.childNodes,function(e){return e})},destroyDnDNodes:function(){r.empty(this.node),this._items={}},getItem:function(e){return this._items[e]}}),m=t("dojox.grid.enhanced.plugins.GridDnDSource",a,{accept:["grid/cells","grid/rows","grid/cols"],constructor:function(e,t){this.grid=t.grid,this.dndElem=t.dndElem,this.dndPlugin=t.dnd,this.sourcePlugin=null},destroy:function(){this.inherited(arguments),this.grid=null,this.dndElem=null,this.dndPlugin=null,this.sourcePlugin=null},getItem:function(e){return this.dndElem.getItem(e)},checkAcceptance:function(e,t){if(this!=e&&t[0]){var n=e.getItem(t[0].id);if(n.dndPlugin){for(var o=n.type,r=0;r<o.length;++r)if(o[r]in this.accept){if(!this.dndPlugin._canAccept(n.dndPlugin))return!1;this.sourcePlugin=n.dndPlugin;break}}else if("grid/rows"in this.accept){var d=[];if(i.forEach(t,function(t){var n=e.getItem(t.id);if(n.data&&i.indexOf(n.type,"grid/rows")>=0){var o=n.data;"string"==typeof n.data&&(o=s.fromJson(n.data)),o&&d.push(o)}}),!d.length)return!1;this.sourcePlugin={_dndRegion:{type:"row",selected:[d]}}}}return this.inherited(arguments)},onDraggingOver:function(){this.dndPlugin.onDraggingOver(this.sourcePlugin)},onDraggingOut:function(){this.dndPlugin.onDraggingOut(this.sourcePlugin)},onDndDrop:function(e,t,n,i){this.onDndCancel(),this!=e&&this==i&&this.dndPlugin.onDragIn(this.sourcePlugin,n)}}),w=t("dojox.grid.enhanced.plugins.GridDnDAvatar",h,{construct:function(){this._itemType=this.manager._dndPlugin._dndRegion.type,this._itemCount=this._getItemCount(),this.isA11y=r.hasClass(d.body(),"dijit_a11y");var e=r.create("table",{border:"0",cellspacing:"0",class:"dojoxGridDndAvatar",style:{position:"absolute",zIndex:"1999",margin:"0px"}}),t=this.manager.source,n=r.create("tbody",null,e),i=r.create("tr",null,n),o=r.create("td",{class:"dojoxGridDnDIcon"},i);this.isA11y&&r.create("span",{id:"a11yIcon",innerHTML:this.manager.copy?"+":"<"},o),o=r.create("td",{class:"dojoxGridDnDItemIcon "+this._getGridDnDIconClass()},i),o=r.create("td",null,i),r.create("span",{class:"dojoxGridDnDItemCount",innerHTML:t.generateText?this._generateText():""},o),r.style(i,{opacity:.9}),this.node=e},_getItemCount:function(){var e=this.manager._dndPlugin._dndRegion.selected,t=0;switch(this._itemType){case"cell":e=e[0];var n=this.manager._dndPlugin.grid.layout.cells,i=e.max.col-e.min.col+1,o=e.max.row-e.min.row+1;if(i>1)for(var r=e.min.col;r<=e.max.col;++r)n[r].hidden&&--i;t=i*o;break;case"row":case"col":t=f(e).length}return t},_getGridDnDIconClass:function(){return{row:["dojoxGridDnDIconRowSingle","dojoxGridDnDIconRowMulti"],col:["dojoxGridDnDIconColSingle","dojoxGridDnDIconColMulti"],cell:["dojoxGridDnDIconCellSingle","dojoxGridDnDIconCellMulti"]}[this._itemType][1==this._itemCount?0:1]},_generateText:function(){return"("+this._itemCount+")"}}),D=t("dojox.grid.enhanced.plugins.DnD",u,{name:"dnd",_targetAnchorBorderWidth:2,_copyOnly:!1,_config:{row:{within:!0,in:!0,out:!0},col:{within:!0,in:!0,out:!0},cell:{within:!0,in:!0,out:!0}},constructor:function(e,t){this.grid=e,this._config=o.clone(this._config),t=o.isObject(t)?t:{},this.setupConfig(t.dndConfig),this._copyOnly=!!t.copyOnly,this._mixinGrid(),this.selector=e.pluginMgr.getPlugin("selector"),this.rearranger=e.pluginMgr.getPlugin("rearrange"),this.rearranger.setArgs(t),this._clear(),this._elem=new y(this),this._source=new m(this._elem.node,{grid:e,dndElem:this._elem,dnd:this}),this._container=l(".dojoxGridMasterView",this.grid.domNode)[0],this._initEvents()},destroy:function(){this.inherited(arguments),this._clear(),this._source.destroy(),this._elem.destroy(),this._container=null,this.grid=null,this.selector=null,this.rearranger=null,this._config=null},_mixinGrid:function(){this.grid.setupDnDConfig=o.hitch(this,"setupConfig"),this.grid.dndCopyOnly=o.hitch(this,"copyOnly")},setupConfig:function(e){if(e&&o.isObject(e)){var t=["row","col","cell"],n=["within","in","out"],r=this._config;i.forEach(t,function(t){if(t in e){var s=e[t];s&&o.isObject(s)?i.forEach(n,function(e){e in s&&(r[t][e]=!!s[e])}):i.forEach(n,function(e){r[t][e]=!!s})}}),i.forEach(n,function(n){if(n in e){var s=e[n];s&&o.isObject(s)?i.forEach(t,function(e){e in s&&(r[e][n]=!!s[e])}):i.forEach(t,function(e){r[e][n]=!!s})}})}},copyOnly:function(e){return void 0!==e&&(this._copyOnly=!!e),this._copyOnly},_isOutOfGrid:function(e){var t=r.position(this.grid.domNode),n=e.clientX,i=e.clientY;return i<t.y||i>t.y+t.h||n<t.x||n>t.x+t.w},_onMouseMove:function(e){if(!this._dndRegion||this._dnding||this._externalDnd){this._isMouseDown&&!this._dndRegion&&(delete this._isMouseDown,this._oldCursor=r.style(d.body(),"cursor"),r.style(d.body(),"cursor","not-allowed"));var t=this._isOutOfGrid(e);!this._alreadyOut&&t?(this._alreadyOut=!0,this._dnding&&this._destroyDnDUI(!0,!1),this._moveEvent=e,this._source.onOutEvent()):this._alreadyOut&&!t&&(this._alreadyOut=!1,this._dnding&&this._createDnDUI(e,!0),this._moveEvent=e,this._source.onOverEvent())}else this._dnding=!0,this._startDnd(e)},_onMouseUp:function(){if(!this._extDnding&&!this._isSource){var e=this._dnding&&!this._alreadyOut;e&&this._config[this._dndRegion.type].within&&this._rearrange(),this._endDnd(e)}r.style(d.body(),"cursor",this._oldCursor||""),delete this._isMouseDown},_initEvents:function(){var e=this.grid,t=this.selector;this.connect(d.doc,"onmousemove","_onMouseMove"),this.connect(d.doc,"onmouseup","_onMouseUp"),this.connect(e,"onCellMouseOver",function(e){this._dnding||t.isSelecting()||e.ctrlKey||(this._dndReady=t.isSelected("cell",e.rowIndex,e.cell.index),t.selectEnabled(!this._dndReady))}),this.connect(e,"onHeaderCellMouseOver",function(e){this._dndReady&&t.selectEnabled(!0)}),this.connect(e,"onRowMouseOver",function(e){this._dndReady&&!e.cell&&t.selectEnabled(!0)}),this.connect(e,"onCellMouseDown",function(e){!e.ctrlKey&&this._dndReady&&(this._dndRegion=this._getDnDRegion(e.rowIndex,e.cell.index),this._isMouseDown=!0)}),this.connect(e,"onCellMouseUp",function(e){this._dndReady||t.isSelecting()||!e.cell||(this._dndReady=t.isSelected("cell",e.rowIndex,e.cell.index),t.selectEnabled(!this._dndReady))}),this.connect(e,"onCellClick",function(e){!this._dndReady||e.ctrlKey||e.shiftKey||t.select("cell",e.rowIndex,e.cell.index)}),this.connect(e,"onEndAutoScroll",function(e,t,n,i,o){this._dnding&&this._markTargetAnchor(o)}),this.connect(d.doc,"onkeydown",function(e){e.keyCode==c.ESCAPE?this._endDnd(!1):e.keyCode==c.CTRL&&(t.selectEnabled(!0),this._isCopy=!0)}),this.connect(d.doc,"onkeyup",function(e){e.keyCode==c.CTRL&&(t.selectEnabled(!this._dndReady),this._isCopy=!1)})},_clear:function(){this._dndRegion=null,this._target=null,this._moveEvent=null,this._targetAnchor={},this._dnding=!1,this._externalDnd=!1,this._isSource=!1,this._alreadyOut=!1,this._extDnding=!1},_getDnDRegion:function(e,t){var n,o=this.selector,r=o._selected,s=!!r.cell.length|!!r.row.length<<1|!!r.col.length<<2;switch(s){case 1:if(n="cell",!this._config[n].within&&!this._config[n].out)return null;var d=this.grid.layout.cells,l={max:{row:-1,col:-1},min:{row:1/0,col:1/0}};return i.forEach(r[n],function(e){e.row<l.min.row&&(l.min.row=e.row),e.row>l.max.row&&(l.max.row=e.row),e.col<l.min.col&&(l.min.col=e.col),e.col>l.max.col&&(l.max.col=e.col)}),i.some(r[n],function(n){return n.row==e&&n.col==t})&&function(e){for(var t=0,n=e.min.col;n<=e.max.col;++n)d[n].hidden&&++t;return(e.max.row-e.min.row+1)*(e.max.col-e.min.col+1-t)}(l)==r[n].length&&i.every(r[n],function(e){return function(e,t){return e.row>=t.min.row&&e.row<=t.max.row&&e.col>=t.min.col&&e.col<=t.max.col}(e,l)})?{type:n,selected:[l],handle:{row:e,col:t}}:null;case 2:case 4:if(n=2==s?"row":"col",!this._config[n].within&&!this._config[n].out)return null;var c=o.getSelected(n);return c.length?{type:n,selected:function(e){e.sort(function(e,t){return e-t});for(var t=[[e[0]]],n=1,i=0;n<e.length;++n)e[n]==e[n-1]+1?t[i].push(e[n]):t[++i]=[e[n]];return t}(c),handle:2==s?e:t}:null}return null},_startDnd:function(e){this._createDnDUI(e)},_endDnd:function(e){this._destroyDnDUI(!1,e),this._clear()},_createDnDUI:function(e,t){var n=r.position(this.grid.views.views[0].domNode);r.style(this._container,"height",n.h+"px");try{t||this._createSource(e),this._createMoveable(e),this._oldCursor=r.style(d.body(),"cursor"),r.style(d.body(),"cursor","default")}catch(e){console.warn("DnD._createDnDUI() error:",e)}},_destroyDnDUI:function(e,t){try{t&&this._destroySource(),this._unmarkTargetAnchor(),e||this._destroyMoveable(),r.style(d.body(),"cursor",this._oldCursor)}catch(e){console.warn("DnD._destroyDnDUI() error:",this.grid.id,e)}},_createSource:function(e){this._elem.createDnDNodes(this._dndRegion);var t=_.manager(),n=t.makeAvatar;t._dndPlugin=this,t.makeAvatar=function(){var e=new w(t);return delete t._dndPlugin,e},t.startDrag(this._source,this._elem.getDnDNodes(),e.ctrlKey),t.makeAvatar=n,t.onMouseMove(e)},_destroySource:function(){n.publish("/dnd/cancel")},_createMoveable:function(e){this._markTagetAnchorHandler||(this._markTagetAnchorHandler=this.connect(d.doc,"onmousemove","_markTargetAnchor"))},_destroyMoveable:function(){this.disconnect(this._markTagetAnchorHandler),delete this._markTagetAnchorHandler},_calcColTargetAnchorPos:function(e,t){var n,o,s,d,l=e.clientX,c=this.grid.layout.cells,a=r._isBodyLtr(),h=this._getVisibleHeaders();for(n=0;n<h.length;++n){if(o=r.position(h[n].node),a?(0===n||l>=o.x)&&l<o.x+o.w:(0===n||l<o.x+o.w)&&l>=o.x){s=o.x+(a?0:o.w);break}if(a?n===h.length-1&&l>=o.x+o.w:n===h.length-1&&l<o.x){++n,s=o.x+(a?o.w:0);break}}if(n<h.length){if(d=h[n].cell.index,this.selector.isSelected("col",d)&&this.selector.isSelected("col",d-1)){var u=this._dndRegion.selected;for(n=0;n<u.length;++n)if(i.indexOf(u[n],d)>=0){d=u[n][0],s=(o=r.position(c[d].getHeaderNode())).x+(a?0:o.w);break}}}else d=c.length;return this._target=d,s-t.x},_calcRowTargetAnchorPos:function(e,t){for(var n,o=this.grid,s=0,d=o.layout.cells;d[s].hidden;)++s;var l=o.layout.cells[s],c=o.scroller.firstVisibleRow,a=l.getNode(c);if(!a)return this._target=-1,0;for(var h=r.position(a);h.y+h.h<e.clientY&&!(++c>=o.rowCount);)h=r.position(l.getNode(c));if(c<o.rowCount){if(this.selector.isSelected("row",c)&&this.selector.isSelected("row",c-1)){var u=this._dndRegion.selected;for(s=0;s<u.length;++s)if(i.indexOf(u[s],c)>=0){c=u[s][0],h=r.position(l.getNode(c));break}}n=h.y}else n=h.y+h.h;return this._target=c,n-t.y},_calcCellTargetAnchorPos:function(e,t,n){var i,o,s,d,c,a,h,u,g,_,f,y,m,w=this._dndRegion.selected[0],D=this._dndRegion.handle,p=this.grid,x=r._isBodyLtr(),v=p.layout.cells,C=D.col-w.min.col,R=w.max.col-D.col;for(n.childNodes.length?(y=l(".dojoxGridCellBorderLeftTopDIV",n)[0],m=l(".dojoxGridCellBorderRightBottomDIV",n)[0]):(y=r.create("div",{class:"dojoxGridCellBorderLeftTopDIV"},n),m=r.create("div",{class:"dojoxGridCellBorderRightBottomDIV"},n)),f=w.min.col+1;f<D.col;++f)v[f].hidden&&--C;for(f=D.col+1;f<w.max.col;++f)v[f].hidden&&--R;for(d=this._getVisibleHeaders(),f=C;f<d.length-R;++f)if(i=r.position(d[f].node),e.clientX>=i.x&&e.clientX<i.x+i.w||f==C&&(x?e.clientX<i.x:e.clientX>=i.x+i.w)||f==d.length-R-1&&(x?e.clientX>=i.x+i.w:e<i.x)){g=d[f-C],_=d[f+R],o=r.position(g.node),s=r.position(_.node),g=g.cell.index,_=_.cell.index,h=x?o.x:s.x,a=x?s.x+s.w-o.x:o.x+o.w-s.x;break}for(f=0;v[f].hidden;)++f;for(var b=v[f],I=p.scroller.firstVisibleRow,O=r.position(b.getNode(I));O.y+O.h<e.clientY&&++I<p.rowCount;)O=r.position(b.getNode(I));var j=I>=D.row-w.min.row?I-D.row+w.min.row:0,A=j+w.max.row-w.min.row;A>=p.rowCount&&(j=(A=p.rowCount-1)-w.max.row+w.min.row),o=r.position(b.getNode(j)),s=r.position(b.getNode(A)),u=o.y,c=s.y+s.h-o.y,this._target={min:{row:j,col:g},max:{row:A,col:_}};var k=(r.marginBox(y).w-r.contentBox(y).w)/2,P=r.position(v[g].getNode(j));r.style(y,{width:P.w-k+"px",height:P.h-k+"px"});var E=r.position(v[_].getNode(A));return r.style(m,{width:E.w-k+"px",height:E.h-k+"px"}),{h:c,w:a,l:h-t.x,t:u-t.y}},_markTargetAnchor:function(e){try{var t=this._dndRegion.type;if(this._alreadyOut||this._dnding&&!this._config[t].within||this._extDnding&&!this._config[t].in)return;var n,i,o,s,d=this._targetAnchor[t],l=r.position(this._container);switch(d||(d=this._targetAnchor[t]=r.create("div",{class:"cell"==t?"dojoxGridCellBorderDIV":"dojoxGridBorderDIV"}),r.style(d,"display","none"),this._container.appendChild(d)),t){case"col":n=l.h,i=this._targetAnchorBorderWidth,o=this._calcColTargetAnchorPos(e,l),s=0;break;case"row":n=this._targetAnchorBorderWidth,i=l.w,o=0,s=this._calcRowTargetAnchorPos(e,l);break;case"cell":var c=this._calcCellTargetAnchorPos(e,l,d);n=c.h,i=c.w,o=c.l,s=c.t}"number"==typeof n&&"number"==typeof i&&"number"==typeof o&&"number"==typeof s?(r.style(d,{height:n+"px",width:i+"px",left:o+"px",top:s+"px"}),r.style(d,"display","")):this._target=null}catch(e){console.warn("DnD._markTargetAnchor() error:",e)}},_unmarkTargetAnchor:function(){this._dndRegion&&(this._targetAnchor[this._dndRegion.type]&&r.style(this._targetAnchor[this._dndRegion.type],"display","none"))},_getVisibleHeaders:function(){return i.map(i.filter(this.grid.layout.cells,function(e){return!e.hidden}),function(e){return{node:e.getHeaderNode(),cell:e}})},_rearrange:function(){if(null!==this._target){var e=this._dndRegion.type,t=this._dndRegion.selected;"cell"===e?this.rearranger[this._isCopy||this._copyOnly?"copyCells":"moveCells"](t[0],-1===this._target?null:this._target):this.rearranger["col"==e?"moveColumns":"moveRows"](f(t),-1===this._target?null:this._target),this._target=null}},onDraggingOver:function(e){!this._dnding&&e&&(e._isSource=!0,this._extDnding=!0,this._externalDnd||(this._externalDnd=!0,this._dndRegion=this._mapRegion(e.grid,e._dndRegion)),this._createDnDUI(this._moveEvent,!0),this.grid.pluginMgr.getPlugin("autoScroll").readyForAutoScroll=!0)},_mapRegion:function(e,t){if("cell"===t.type){var n,i=t.selected[0],r=this.grid.layout.cells,s=e.layout.cells,d=0;for(n=i.min.col;n<=i.max.col;++n)s[n].hidden||++d;for(n=0;d>0;++n)r[n].hidden||--d;var l=o.clone(t);for(l.selected[0].min.col=0,l.selected[0].max.col=n-1,n=i.min.col;n<=t.handle.col;++n)s[n].hidden||++d;for(n=0;d>0;++n)r[n].hidden||--d;l.handle.col=n}return t},onDraggingOut:function(e){this._externalDnd&&(this._extDnding=!1,this._destroyDnDUI(!0,!1),e&&(e._isSource=!1))},onDragIn:function(e,t){var n=!1;if(null!==this._target){var i=e._dndRegion.type,o=e._dndRegion.selected;switch(i){case"cell":this.rearranger.changeCells(e.grid,o[0],this._target);break;case"row":var r=f(o);this.rearranger.insertRows(e.grid,r,this._target)}n=!0}this._endDnd(!0),e.onDragOut&&e.onDragOut(n&&!t)},onDragOut:function(e){if(e&&!this._copyOnly){var t=this._dndRegion.type,n=this._dndRegion.selected;switch(t){case"cell":this.rearranger.clearCells(n[0]);break;case"row":this.rearranger.removeRows(f(n))}}this._endDnd(!0)},_canAccept:function(e){if(!e)return!1;var t=e._dndRegion,n=t.type;if(!this._config[n].in||!e._config[n].out)return!1;var o=this.grid,r=t.selected,s=i.filter(o.layout.cells,function(e){return!e.hidden}).length,d=o.rowCount,l=!0;switch(n){case"cell":r=r[0],l=o.store.getFeatures()["dojo.data.api.Write"]&&r.max.row-r.min.row<=d&&i.filter(e.grid.layout.cells,function(e){return e.index>=r.min.col&&e.index<=r.max.col&&!e.hidden}).length<=s;case"row":if(e._allDnDItemsLoaded())return l}return!1},_allDnDItemsLoaded:function(){if(this._dndRegion){var e=this._dndRegion.type,t=this._dndRegion.selected,n=[];switch(e){case"cell":for(var o=t[0].min.row,r=t[0].max.row;o<=r;++o)n.push(o);break;case"row":n=f(t);break;default:return!1}var s=this.grid._by_idx;return i.every(n,function(e){return!!s[e]})}return!1}});return g.registerPlugin(D,{dependency:["selector","rearrange"]}),D});
//# sourceMappingURL=../../../sourcemaps/grid/enhanced/plugins/DnD.js.map