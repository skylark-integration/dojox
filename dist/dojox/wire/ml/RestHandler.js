/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.ml.RestHandler"),dojo.require("dojox.wire._base"),dojo.require("dojox.wire.ml.util"),dojo.declare("dojox.wire.ml.RestHandler",null,{contentType:"text/plain",handleAs:"text",bind:function(e,t,n,o){e=e.toUpperCase();var r=this,a={url:this._getUrl(e,t,o),contentType:this.contentType,handleAs:this.handleAs,headers:this.headers,preventCache:this.preventCache},i=null;"POST"==e?(a.postData=this._getContent(e,t),i=dojo.rawXhrPost(a)):"PUT"==e?(a.putData=this._getContent(e,t),i=dojo.rawXhrPut(a)):i="DELETE"==e?dojo.xhrDelete(a):dojo.xhrGet(a),i.addCallbacks(function(e){n.callback(r._getResult(e))},function(e){n.errback(e)})},_getUrl:function(e,t,n){var o;if("GET"==e||"DELETE"==e?t.length>0&&(o=t[0]):t.length>1&&(o=t[1]),o){var r="";for(var a in o){var i=o[a];if(i){i=encodeURIComponent(i);var l="{"+a+"}",d=n.indexOf(l);d>=0?n=n.substring(0,d)+i+n.substring(d+l.length):(r&&(r+="&"),r+=a+"="+i)}}r&&(n+="?"+r)}return n},_getContent:function(e,t){return("POST"==e||"PUT"==e)&&t?t[0]:null},_getResult:function(e){return e}});
//# sourceMappingURL=../../sourcemaps/wire/ml/RestHandler.js.map
