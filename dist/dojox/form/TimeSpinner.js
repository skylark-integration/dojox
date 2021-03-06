/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/event","dijit/form/_Spinner","dojo/keys","dojo/date","dojo/date/locale","dojo/date/stamp","dojo/_base/declare"],function(e,t,o,n,r,a,i,d){return d("dojox.form.TimeSpinner",o,{required:!1,adjust:function(e,t){return r.add(e,"minute",t)},isValid:function(){return!0},smallDelta:5,largeDelta:30,timeoutChangeRate:.5,parse:function(e,t){return a.parse(e,{selector:"time",formatLength:"short"})},format:function(t,o){return e.isString(t)?t:a.format(t,{selector:"time",formatLength:"short"})},serialize:i.toISOString,value:"12:00 AM",_onKeyDown:function(e){if((e.keyCode==n.HOME||e.keyCode==n.END)&&!(e.ctrlKey||e.altKey||e.metaKey)&&void 0!==this.get("value")){var o=this.constraints[e.keyCode==n.HOME?"min":"max"];o&&this._setValueAttr(o,!0),t.stop(e)}}})});
//# sourceMappingURL=../sourcemaps/form/TimeSpinner.js.map
