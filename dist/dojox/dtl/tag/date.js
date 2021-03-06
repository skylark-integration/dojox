/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../_base","../utils/date"],function(t,e,n){var o=t.getObject("tag.date",!0,e);return o.NowNode=function(t,e){this._format=t,this.format=new n.DateFormat(t),this.contents=e},t.extend(o.NowNode,{render:function(t,e){return this.contents.set(this.format.format(new Date)),this.contents.render(t,e)},unrender:function(t,e){return this.contents.unrender(t,e)},clone:function(t){return new this.constructor(this._format,this.contents.clone(t))}}),o.now=function(t,e){var n=e.split_contents();if(2!=n.length)throw new Error("'now' statement takes one argument");return new o.NowNode(n[1].slice(1,-1),t.create_text_node())},o});
//# sourceMappingURL=../../sourcemaps/dtl/tag/date.js.map
