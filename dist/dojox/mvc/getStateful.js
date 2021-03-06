/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/lang","dojo/Stateful","./StatefulArray"],function(t,e,r,n){var a={getType:function(t){return e.isArray(t)?"array":null!=t&&"[object Object]"=={}.toString.call(t)?"object":"value"},getStatefulArray:function(e){return new n(t.map(e,function(t){return u(t,this)},this))},getStatefulObject:function(t){var e=new r;for(var n in t)e[n]=u(t[n],this);return e},getStatefulValue:function(t){return t}},u=function(t,e){return(e||u)["getStateful"+(e||u).getType(t).replace(/^[a-z]/,function(t){return t.toUpperCase()})](t)};return e.setObject("dojox.mvc.getStateful",e.mixin(u,a))});
//# sourceMappingURL=../sourcemaps/mvc/getStateful.js.map
