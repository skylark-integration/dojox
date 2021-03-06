/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang"],function(t){return t.experimental("dojox.timing"),t.getObject("timing",!0,dojox),dojox.timing.Timer=function(t){this.timer=null,this.isRunning=!1,this.interval=t,this.onStart=null,this.onStop=null},t.extend(dojox.timing.Timer,{onTick:function(){},setInterval:function(i){this.isRunning&&window.clearInterval(this.timer),this.interval=i,this.isRunning&&(this.timer=window.setInterval(t.hitch(this,"onTick"),this.interval))},start:function(){"function"==typeof this.onStart&&this.onStart(),this.isRunning=!0,this.timer=window.setInterval(t.hitch(this,"onTick"),this.interval)},stop:function(){"function"==typeof this.onStop&&this.onStop(),this.isRunning=!1,window.clearInterval(this.timer)}}),dojox.timing});
//# sourceMappingURL=../sourcemaps/timing/_base.js.map
