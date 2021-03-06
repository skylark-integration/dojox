/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/on"],function(n,t,e){return t("dojox.app.Controller",null,{constructor:function(n,t){this.events=this.events||t,this._boundEvents=[],this.app=n},bind:function(t,s,i){if(0==arguments.length){if(this.events)for(var o in this.events)"_"!==o.charAt(0)&&this.bind(this.app,o,n.hitch(this,this.events[o]))}else{var h=e(t,s,i);this._boundEvents.push({event:s,evented:t,signal:h})}return this},unbind:function(n,t){for(var e=this._boundEvents.length,s=0;s<e;s++)if(this._boundEvents[s].event==t&&this._boundEvents[s].evented==n)return this._boundEvents[s].signal.remove(),void this._boundEvents.splice(s,1);return console.warn("event '"+t+"' not bind on ",n),this}})});
//# sourceMappingURL=../sourcemaps/app/Controller.js.map
