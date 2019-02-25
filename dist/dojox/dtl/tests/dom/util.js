/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.dtl.tests.dom.util"),dojo.require("dojox.dtl.dom"),dojo.require("dojox.dtl.render.dom"),dojo.require("dojox.string.Builder"),dojox.dtl.DomBuffer.prototype.onClone=function(e,o){for(var d,t=this._clones=this._clones||[],r=0;d=t[r];r++)for(var n,i=0;n=d[i];i++){if(n===e)return void d.push(o);if(n===o)return void d.push(e)}t.push([e,o])},dojox.dtl.DomBuffer.prototype.onAddEvent=function(e,o,d){for(var t,r=this._events=this._events||[],n=!1,i=0;t=r[i];i++)t[0]===e&&(n=!0,t[1]=o,t[2]=d);n||r.push([e,o,d])},dojox.dtl.tests.dom.util.render=function(e,o){try{var d=document.createElement("div");dojo.style(d,"visibility","hidden");var t=document.createElement("div");d.appendChild(t),dojo.body().appendChild(d);var r=e.getBuffer(),n=new dojox.dtl.render.dom.Render(t,e);n.render(o,e,r);var i=r._clones,a=r._events,p=dojox.dtl.tests.dom.util.serialize(n.domNode,e.tokens,i,a).toString();(r=e.getBuffer())._clones=i,r._events=a,n.render(o,e,r);var l=dojox.dtl.tests.dom.util.serialize(n.domNode,e.tokens,i,a).toString();return doh.is("Compare re-render: "+p,"Compare re-render: "+l),p}catch(e){throw e}finally{d.parentNode.removeChild(d)}},dojox.dtl.tests.dom.util.serialize=function(e,o,d,t,r){dojox.dtl.dom.types;if(d=d||[],t=t||[],3!=e.nodeType){var n=e.nodeName.toLowerCase();if(!n)return;r||(r=new dojox.string.Builder),r.append("<").append(n);var i={},a=dojo.filter(o,function(e){return e[0]==dojox.dtl.TOKEN_ATTR&&dojo.isString(e[3])&&dojo.trim(e[3])});a=dojo.map(a,"return item[2];"),a=dojo.filter(a,function(e){if(!i[e])return i[e]=!0});for(var p,l=0;p=a[l];l++){var s="";if("class"==p)s=e.className||s;else if("for"==p)s=e.htmlFor||s;else{if(s={checked:1,disabled:1,readonly:1}[p]&&"boolean"==typeof e[p]?dojo.attr(e,p)?"true":"false":e.getAttribute(p,2)||s,"TEXTAREA"==e.tagName&&("type"==p||"value"==p))continue;if("INPUT"==e.tagName&&"type"==p&&"text"==s)continue;if(dojo.isIE&&("href"==p||"src"==p)){var f=location.href.lastIndexOf(location.hash),u=location.href.substring(0,f).split("/");u.pop(),u=u.join("/")+"/",0==s.indexOf(u)&&(s=s.replace(u,"")),s=decodeURIComponent(s)}}""!==s&&r.append(" ").append(p).append('="').append(s.replace(/"/g,'\\"')).append('"')}if(t){var c;for(l=0;c=t[l];l++)c[0]===e&&r.append(" ").append(c[1]).append('="').append(c[2]).append('"')}return e.childNodes.length?(r.append(">"),dojo.forEach(e.childNodes,function(e){dojox.dtl.tests.dom.util.serialize(e,o,d,t,r)}),r.append("</").append(n).append(">")):r.append("/>"),r}r.append(e.nodeValue)};
//# sourceMappingURL=../../../sourcemaps/dtl/tests/dom/util.js.map