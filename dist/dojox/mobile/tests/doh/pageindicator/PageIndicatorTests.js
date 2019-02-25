/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
var timeoutInterval=3e3,WIDGET_CLASSNAME1="mblPageIndicator",WIDGET_CLASSNAME2="mblFixedBottomBar",WIDGET_DOT_CLASSNAME1="mblPageIndicatorDot",WIDGET_DOT_CLASSNAME2="mblPageIndicatorDotSelected",WIDGET_PAGENUM=5;require(["dojo/_base/connect","dojo/sniff","dojo/dom-construct","dojo/dom-class","dojo/ready","dijit/registry","doh/runner","dojox/mobile/PageIndicator","dojox/mobile","dojox/mobile/SwapView","dojox/mobile/compat","dojox/mobile/parser"],function(e,o,t,n,r,a,d,c){function l(){var e=a.byId("dojox_mobile_SwapView_0");e.findAppBars(),e.resize();var o=a.byId("dojox_mobile_SwapView_1");o.findAppBars(),o.resize();var t=a.byId("dojox_mobile_SwapView_2");t.findAppBars(),t.resize();var i=a.byId("dojox_mobile_SwapView_3");i.findAppBars(),i.resize();var n=a.byId("dojox_mobile_SwapView_4");n.findAppBars(),n.resize()}function s(e,o){d.assertNotEqual(null,e,"IconContainer: Did not instantiate."),d.assertTrue(n.contains(e.domNode,WIDGET_CLASSNAME1),WIDGET_CLASSNAME1),d.assertTrue(n.contains(e.domNode,WIDGET_CLASSNAME2),WIDGET_CLASSNAME2);var t=e._tblNode.rows[0];for(d.assertEqual(WIDGET_PAGENUM,e._tblNode.rows[0].cells.length,"Number of page"),i=0;i<t.cells.length;i++)dot=t.cells[i].firstChild,d.assertTrue(n.contains(dot,WIDGET_DOT_CLASSNAME1),WIDGET_DOT_CLASSNAME1),i+1===o&&d.assertTrue(n.contains(dot,WIDGET_DOT_CLASSNAME2),WIDGET_DOT_CLASSNAME2)}r(function(){var e,i;1===WIDGET_PROGRAMMATICALLY?(e="dojox_mobile_PageIndicator_0Place",i=new c({id:"dojox_mobile_PageIndicator_0",fixed:"bottom"}),d.assertNotEqual(null,i),t.place(i.domNode,e,"replace"),i.startup(),l()):2===WIDGET_PROGRAMMATICALLY&&function(e){var o=new c({},e);o.startup(),l()}("dojox_mobile_PageIndicator_0"),d.register("dojox.mobile.test.doh.PageIndicator",[{name:"PageIndicator Verification1",timeout:4e3,runTest:function(){var e=a.byId("dojox_mobile_SwapView_0"),o=(a.byId("dojox_mobile_SwapView_1"),a.byId("dojox_mobile_PageIndicator_0")),t=new d.Deferred;return setTimeout(t.getTestCallback(function(){s(o,1),e.goTo(1)}),timeoutInterval),t}},{name:"PageIndicator Verification2",timeout:4e3,runTest:function(){var e=a.byId("dojox_mobile_SwapView_1"),o=new d.Deferred;return setTimeout(o.getTestCallback(function(){s(a.byId("dojox_mobile_PageIndicator_0"),2),e.goTo(1)}),timeoutInterval),o}},{name:"PageIndicator Verification3",timeout:4e3,runTest:function(){var e=new d.Deferred;return setTimeout(e.getTestCallback(function(){var e,t,i=a.byId("dojox_mobile_PageIndicator_0");s(i,3),e=i.domNode,o("ie")<9?((t=document.createEventObject()).layerX=0,e.fireEvent("onclick")):((t=document.createEvent("Events")).initEvent("click",!0,!0),t.layerX=0,e.dispatchEvent(t))}),timeoutInterval),e}},{name:"PageIndicator Verification4",timeout:4e3,runTest:function(){var e=new d.Deferred;return setTimeout(e.getTestCallback(function(){s(a.byId("dojox_mobile_PageIndicator_0"),2)}),timeoutInterval),e}},{name:"PageIndicator Verification5",timeout:3e3,runTest:function(){var e,o=new c,t=new d.Deferred,i=0;return window.onerror=function(o,t,n){i++,e="After destroy: "+o+"\nURL: "+t+"\nLine number: "+n,console.log(e)},o.startup(),o.destroyRecursive(!1),setTimeout(t.getTestCallback(function(){d.assertEqual(0,i,e)}),2e3),t}}]),d.run()})});
//# sourceMappingURL=../../../../sourcemaps/mobile/tests/doh/pageindicator/PageIndicatorTests.js.map