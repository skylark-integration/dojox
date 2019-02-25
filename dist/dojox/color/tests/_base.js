/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.color.tests._base"),dojo.require("dojox.color"),tests.register("dojox.color.tests._base",[function(o){o.assertEqual(dojox.color.fromCmy({c:50,m:50,y:50}),new dojo.Color({r:128,g:128,b:128})),o.assertEqual(dojox.color.fromCmy({c:0,m:100,y:100}),new dojo.Color({r:255,g:0,b:0})),o.assertEqual(dojox.color.fromCmy({c:100,m:0,y:100}),new dojo.Color({r:0,g:255,b:0})),o.assertEqual(dojox.color.fromCmy({c:100,m:100,y:0}),new dojo.Color({r:0,g:0,b:255})),o.assertEqual(dojox.color.fromCmy({c:0,m:0,y:100}),new dojo.Color({r:255,g:255,b:0})),o.assertEqual(dojox.color.fromCmyk({c:0,m:0,y:0,b:50}),new dojo.Color({r:128,g:128,b:128})),o.assertEqual(dojox.color.fromCmyk({c:0,m:100,y:100,b:0}),new dojo.Color({r:255,g:0,b:0})),o.assertEqual(dojox.color.fromCmyk({c:100,m:0,y:100,b:0}),new dojo.Color({r:0,g:255,b:0})),o.assertEqual(dojox.color.fromCmyk({c:100,m:100,y:0,b:0}),new dojo.Color({r:0,g:0,b:255})),o.assertEqual(dojox.color.fromCmyk({c:0,m:0,y:100,b:0}),new dojo.Color({r:255,g:255,b:0})),o.assertEqual(dojox.color.fromHsl({h:0,s:0,l:50}),new dojo.Color({r:128,g:128,b:128})),o.assertEqual(dojox.color.fromHsl({h:0,s:100,l:50}),new dojo.Color({r:255,g:0,b:0})),o.assertEqual(dojox.color.fromHsl({h:120,s:100,l:50}),new dojo.Color({r:0,g:255,b:0})),o.assertEqual(dojox.color.fromHsl({h:240,s:100,l:50}),new dojo.Color({r:0,g:0,b:255})),o.assertEqual(dojox.color.fromHsl({h:60,s:100,l:50}),new dojo.Color({r:255,g:255,b:0})),o.assertEqual(dojox.color.fromHsv({h:0,s:0,v:50}),new dojo.Color({r:128,g:128,b:128})),o.assertEqual(dojox.color.fromHsv({h:0,s:100,v:100}),new dojo.Color({r:255,g:0,b:0})),o.assertEqual(dojox.color.fromHsv({h:120,s:100,v:100}),new dojo.Color({r:0,g:255,b:0})),o.assertEqual(dojox.color.fromHsv({h:240,s:100,v:100}),new dojo.Color({r:0,g:0,b:255})),o.assertEqual(dojox.color.fromHsv({h:60,s:100,v:100}),new dojo.Color({r:255,g:255,b:0}))},function(o){var r=new dojox.color.Color({r:128,g:128,b:128}),s=new dojox.color.Color({r:255,g:0,b:0}),l=new dojox.color.Color({r:0,g:255,b:0}),a=new dojox.color.Color({r:0,g:0,b:255}),e=new dojox.color.Color({r:255,g:255,b:0});o.assertEqual(r.toCmy(),{c:50,m:50,y:50}),o.assertEqual(s.toCmy(),{c:0,m:100,y:100}),o.assertEqual(l.toCmy(),{c:100,m:0,y:100}),o.assertEqual(a.toCmy(),{c:100,m:100,y:0}),o.assertEqual(e.toCmy(),{c:0,m:0,y:100}),o.assertEqual(r.toCmyk(),{c:0,m:0,y:0,b:50}),o.assertEqual(s.toCmyk(),{c:0,m:100,y:100,b:0}),o.assertEqual(l.toCmyk(),{c:100,m:0,y:100,b:0}),o.assertEqual(a.toCmyk(),{c:100,m:100,y:0,b:0}),o.assertEqual(e.toCmyk(),{c:0,m:0,y:100,b:0}),o.assertEqual(r.toHsl(),{h:0,s:0,l:50}),o.assertEqual(s.toHsl(),{h:0,s:100,l:50}),o.assertEqual(l.toHsl(),{h:120,s:100,l:50}),o.assertEqual(a.toHsl(),{h:240,s:100,l:50}),o.assertEqual(e.toHsl(),{h:60,s:100,l:50}),o.assertEqual(r.toHsv(),{h:0,s:0,v:50}),o.assertEqual(s.toHsv(),{h:0,s:100,v:100}),o.assertEqual(l.toHsv(),{h:120,s:100,v:100}),o.assertEqual(a.toHsv(),{h:240,s:100,v:100}),o.assertEqual(e.toHsv(),{h:60,s:100,v:100})}]);
//# sourceMappingURL=../../sourcemaps/color/tests/_base.js.map