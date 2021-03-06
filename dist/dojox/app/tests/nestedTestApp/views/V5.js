/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry","dojo/sniff","dojox/mobile/TransitionEvent"],function(t,i,o,e,s,n){var r=[],a=null,l=null;return{init:function(){l=this.app;var i=o.connect(t.byId("sc5insert10x"),"click",function(){l&&(l.listStart||(l.listStart=1,l.listCount=5),setTimeout(function(){for(var t=l.listStart;t<l.listStart+5;t++){var i={label:"Item #"+t};l.stores.longlistStore.store.put(i)}return l.listStart+=l.listCount,l.listTotal=l.listStart-1,!1},500))});r.push(i)},beforeActivate:function(){t.byId("sc5back1")&&!s("phone")&&i.set(t.byId("sc5back1"),"visibility","hidden"),l.list5=e.byId("list5"),(a=l.list5).store||a.setStore(l.stores.longlistStore.store),t.byId("tab1WrapperA")&&(i.set(t.byId("tab1WrapperA"),"visibility","visible"),i.set(t.byId("tab1WrapperB"),"visibility","visible"))},afterActivate:function(){if(this.app.timedAutoFlow){this.app.loopCount++;var t=null;9===this.app.loopCount?t=e.byId("dojox_mobile_ListItem_10"):15===this.app.loopCount&&(t=e.byId("dojox_mobile_ListItem_12")),t&&setTimeout(function(){new n(t.domNode,t.params).dispatch()},50)}},beforeDeactivate:function(){},afterDeactivate:function(){},destroy:function(){for(var t=r.pop();t;)o.disconnect(t),t=r.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/nestedTestApp/views/V5.js.map
