/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/window","dojo/_base/xhr","./_ExecScriptMixin","./ProgressIndicator","./lazyLoadUtils"],function(t,e,n,o,i,r,s,a){return t("dojox.mobile._ContentPaneMixin",r,{href:"",lazy:!1,content:"",parseOnLoad:!0,prog:!0,executeScripts:!0,constructor:function(){this.prog&&(this._p=s.getInstance())},loadHandler:function(t){this.set("content",t)},errorHandler:function(t){this._p&&this._p.stop()},load:function(){this.lazy=!1,this.set("href",this.href)},onLoad:function(){return!0},_setHrefAttr:function(t){if(this.lazy||!t||t===this._loaded)return this.lazy=!1,null;var e=this._p;return e&&(o.body().appendChild(e.domNode),e.start()),this._set("href",t),this._loaded=t,i.get({url:t,handleAs:"text",load:n.hitch(this,"loadHandler"),error:n.hitch(this,"errorHandler")})},_setContentAttr:function(t){if(this.destroyDescendants(),"object"==typeof t?this.containerNode.appendChild(t):(this.executeScripts&&(t=this.execScript(t)),this.containerNode.innerHTML=t),this.parseOnLoad){var n=this;return e.when(a.instantiateLazyWidgets(n.containerNode),function(){return n._p&&n._p.stop(),n.onLoad()})}return this._p&&this._p.stop(),this.onLoad()}})});
//# sourceMappingURL=../sourcemaps/mobile/_ContentPaneMixin.js.map
