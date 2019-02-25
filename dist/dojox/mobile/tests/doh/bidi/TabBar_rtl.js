/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.addOnLoad(function(){var a=["mblTabBarButton","mblTabBarButtonRtl","mblTabBarButtonSelected"],o=["mblTabBarButton","mblTabBarButtonRtl","mblTabBarButtonHasIcon","mblTabBarButtonSelected"];doh.register("dojox.mobile.test.doh.TabBar",[{name:"TabBar and TabBarButton Verification",timeout:4e3,runTest:function(){var e=new doh.Deferred;return setTimeout(e.getTestCallback(function(){var e=dijit.byId("dojox_mobile_TabBar_0");doh.assertTrue(dojo.hasClass(e.domNode,"mblTabBar mblTabBarRtl"),"mblTabBar mblTabBarRtl  id="+e.id+" value="+e.domNode.className),doh.assertTrue(dojo.hasClass(e.domNode,"mblTabBarSegmentedControl"),"mblTabBarSegmentedControl  id="+e.id+" value="+e.domNode.className),verifyTabBarButton("dojox_mobile_TabBarButton_0","New",a,"hidden","",/tab-icon-16.png/i,/tab-icon-16h.png/),e=dijit.byId("dojox_mobile_TabBar_1"),doh.assertTrue(dojo.hasClass(e.domNode,"mblTabBar mblTabBarRtl"),"mblTabBar mblTabBarRtl  id="+e.id+" value="+e.domNode.className),doh.assertTrue(dojo.hasClass(e.domNode,"mblTabBarTabBar"),"mblTabBarTabBar  id="+e.id+" value="+e.domNode.className),verifyTabBarButton("dojox_mobile_TabBarButton_3","New",o,"hidden","",/tab-icon-16.png/i,/tab-icon-16h.png/),e=dijit.byId("dojox_mobile_TabBar_2"),doh.assertTrue(dojo.hasClass(e.domNode,"mblTabBar mblTabBarRtl"),"mblTabBar mblTabBarRtl  id="+e.id+" value="+e.domNode.className),doh.assertTrue(dojo.hasClass(e.domNode,"mblTabBarTabBar"),"mblTabBarTabBar  id="+e.id+" value="+e.domNode.className),verifyTabBarButton("dojox_mobile_TabBarButton_6","Featured",o,"hidden","",/tab-icons.png/i,/tab-icons.png/i,!0),e=dijit.byId("dojox_mobile_TabBarButton_6"),verifyRect(e.iconNode1.childNodes[0],"0px","29px","29px","0px"),verifyRect(e.iconNode2.childNodes[0],"29px","29px","58px","0px")}),500),e}},{name:"TabBar and TabBarButton set",timeout:4e3,runTest:function(){var e=new doh.Deferred;return setTimeout(e.getTestCallback(function(){var e=dijit.byId("dojox_mobile_TabBar_0");(e=dijit.byId("dojox_mobile_TabBarButton_2")).set({label:"New Value"}),e.set({selected:!0}),verifyTabBarButton("dojox_mobile_TabBarButton_2","New Value",a,"hidden","",/tab-icon-10.png/i,/tab-icon-10h.png/),(e=dijit.byId("dojox_mobile_TabBarButton_5")).set({label:"New Value",icon1:"../../images/tab-icon-11.png",icon2:"../../images/tab-icon-11h.png"}),e.set("selected",!0),verifyTabBarButton("dojox_mobile_TabBarButton_5","New Value",o,"hidden","",/tab-icon-11.png/i,/tab-icon-11h.png/),(e=dijit.byId("dojox_mobile_TabBarButton_4")).set({icon1:null,icon2:null}),doh.assertEqual(null,e.iconNode1,e.domNode.id),doh.assertEqual(null,e.iconNode2,e.domNode.id)}),500),e}}]),doh.run()});
//# sourceMappingURL=../../../../sourcemaps/mobile/tests/doh/bidi/TabBar_rtl.js.map