/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","./_FilterExpr"],function(t,e,n,r){var a=function(t){return n.partial(function(t,e){return new r[t](e)},t)},o=function(t){return n.partial(function(t,e){return new r.LogicNOT(new r[t](e))},t)};return t("dojox.grid.enhanced.plugins.filter.FilterBuilder",null,{buildExpression:function(t){if("op"in t)return this.supportedOps[t.op.toLowerCase()](e.map(t.data,this.buildExpression,this));var r=n.mixin(this.defaultArgs[t.datatype],t.args||{});return new this.supportedTypes[t.datatype](t.data,t.isColumn,r)},supportedOps:{equalto:a("EqualTo"),lessthan:a("LessThan"),lessthanorequalto:a("LessThanOrEqualTo"),largerthan:a("LargerThan"),largerthanorequalto:a("LargerThanOrEqualTo"),contains:a("Contains"),startswith:a("StartsWith"),endswith:a("EndsWith"),notequalto:o("EqualTo"),notcontains:o("Contains"),notstartswith:o("StartsWith"),notendswith:o("EndsWith"),isempty:a("IsEmpty"),range:function(t){return new r.LogicALL(new r.LargerThanOrEqualTo(t.slice(0,2)),new r.LessThanOrEqualTo(t[0],t[2]))},logicany:a("LogicANY"),logicall:a("LogicALL")},supportedTypes:{number:r.NumberExpr,string:r.StringExpr,boolean:r.BooleanExpr,date:r.DateExpr,time:r.TimeExpr},defaultArgs:{boolean:{falseValue:"false",convert:function(t,e){var r=e.falseValue,a=e.trueValue;if(n.isString(t)){if(a&&t.toLowerCase()==a)return!0;if(r&&t.toLowerCase()==r)return!1}return!!t}}}})});
//# sourceMappingURL=../../../../sourcemaps/grid/enhanced/plugins/filter/FilterBuilder.js.map
