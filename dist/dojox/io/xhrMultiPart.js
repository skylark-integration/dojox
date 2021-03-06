/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/xhr","dojo/query","dojox/uuid/generateRandomUuid"],function(n,o,t,e,r){function a(n,o){if(!n.name&&!n.content)throw new Error("Each part of a multi-part request requires 'name' and 'content'.");var t=[];if(t.push("--"+o,'Content-Disposition: form-data; name="'+n.name+'"'+(n.filename?'; filename="'+n.filename+'"':"")),n.contentType){var e="Content-Type: "+n.contentType;n.charset&&(e+="; Charset="+n.charset),t.push(e)}return n.contentTransferEncoding&&t.push("Content-Transfer-Encoding: "+n.contentTransferEncoding),t.push("",n.content),t}return n.getObject("io.xhrMultiPart",!0,dojox),dojox.io.xhrMultiPart=function(o){if(!o.file&&!o.content&&!o.form)throw new Error("content, file or form must be provided to dojox.io.xhrMultiPart's arguments");var t=r(),i=[],f="";if(o.file||o.content){var c=o.file||o.content;n.forEach(n.isArray(c)?c:[c],function(n){i=i.concat(a(n,t))})}else if(o.form){if(e("input[type=file]",o.form).length)throw new Error("dojox.io.xhrMultiPart cannot post files that are values of an INPUT TYPE=FILE.  Use dojo.io.iframe.send() instead.");i=function(o,t){var e=n.formToObject(o),r=[];for(var i in e)n.isArray(e[i])?n.forEach(e[i],function(n){r=r.concat(a({name:i,content:n},t))}):r=r.concat(a({name:i,content:e[i]},t));return r}(o.form,t)}return i.length&&(i.push("--"+t+"--",""),f=i.join("\r\n")),console.log(f),n.rawXhrPost(n.mixin(o,{contentType:"multipart/form-data; boundary="+t,postData:f}))},dojox.io.xhrMultiPart});
//# sourceMappingURL=../sourcemaps/io/xhrMultiPart.js.map
