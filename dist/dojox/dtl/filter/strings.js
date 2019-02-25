/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/array","dojox/string/tokenize","dojox/string/sprintf","../filter/htmlstrings","../_base"],function(t,r,e,n,u,a){var i=t.getObject("filter.strings",!0,a);return t.mixin(i,{_urlquote:function(t,r){return r||(r="/"),e(t,/([^\w-_.])/g,function(t){if(-1==r.indexOf(t)){if(" "==t)return"+";for(var e=t.charCodeAt(0).toString(16).toUpperCase();e.length<2;)e="0"+e;return"%"+e}return t}).join("")},addslashes:function(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/'/g,"\\'")},capfirst:function(t){return(t=""+t).charAt(0).toUpperCase()+t.substring(1)},center:function(t,r){var e=(r=r||t.length)-(t+="").length;e%2&&(t+=" ",e-=1);for(var n=0;n<e;n+=2)t=" "+t+" ";return t},cut:function(t,r){return r=r+""||"",(t+="").replace(new RegExp(r,"g"),"")},_fix_ampersands:/&(?!(\w+|#\d+);)/g,fix_ampersands:function(t){return t.replace(i._fix_ampersands,"&amp;")},floatformat:function(t,r){return r=parseInt(r||-1,10),!((t=parseFloat(t))-t.toFixed(0))&&r<0?t.toFixed():(t=t.toFixed(Math.abs(r)),r<0?parseFloat(t)+"":t)},iriencode:function(t){return i._urlquote(t,"/#%[]=:;$&()+,!")},linenumbers:function(t){for(var r,e=dojox.dtl.filter,n=t.split("\n"),u=[],a=(n.length+"").length,i=0;i<n.length;i++)r=n[i],u.push(e.strings.ljust(i+1,a)+". "+dojox.dtl._base.escape(r));return u.join("\n")},ljust:function(t,r){for(t+="",r=parseInt(r,10);t.length<r;)t+=" ";return t},lower:function(t){return(t+"").toLowerCase()},make_list:function(t){var r=[];if("number"==typeof t&&(t+=""),t.charAt){for(var e=0;e<t.length;e++)r.push(t.charAt(e));return r}if("object"==typeof t){for(var n in t)r.push(t[n]);return r}return[]},rjust:function(t,r){for(t+="",r=parseInt(r,10);t.length<r;)t=" "+t;return t},slugify:function(t){return(t=t.replace(/[^\w\s-]/g,"").toLowerCase()).replace(/[\-\s]+/g,"-")},_strings:{},stringformat:function(t,r){r=""+r;var e=i._strings;return e[r]||(e[r]=new n.Formatter("%"+r)),e[r].format(t)},title:function(t){for(var r,e,n="",u=0;u<t.length;u++)e=t.charAt(u),n+=" "!=r&&"\n"!=r&&"\t"!=r&&r?e.toLowerCase():e.toUpperCase(),r=e;return n},_truncatewords:/[ \n\r\t]/,truncatewords:function(t,r){if(!(r=parseInt(r,10)))return t;for(var e,n,u=0,a=t.length,o=0;u<t.length;u++){if(e=t.charAt(u),i._truncatewords.test(n)){if(!i._truncatewords.test(e)&&++o==r)return t.substring(0,a+1)+" ..."}else i._truncatewords.test(e)||(a=u);n=e}return t},_truncate_words:/(&.*?;|<.*?>|(\w[\w\-]*))/g,_truncate_tag:/<(\/)?([^ ]+?)(?: (\/)| .*?)?>/,_truncate_singlets:{br:!0,col:!0,link:!0,base:!0,img:!0,param:!0,area:!0,hr:!0,input:!0},truncatewords_html:function(t,n){if((n=parseInt(n,10))<=0)return"";var u=0,a=[],o=e(t,i._truncate_words,function(t,e){if(e){if(++u<n)return e;if(u==n)return e+" ..."}var o=t.match(i._truncate_tag);if(o&&!(u>=n)){var s=o[1],f=o[2].toLowerCase();o[3];if(s||i._truncate_singlets[f]);else if(s){var l=r.indexOf(a,f);-1!=l&&(a=a.slice(l+1))}else a.unshift(f);return t}}).join("");o=o.replace(/\s+$/g,"");for(var s,f=0;s=a[f];f++)o+="</"+s+">";return o},upper:function(t){return t.toUpperCase()},urlencode:function(t){return i._urlquote(t)},_urlize:/^((?:[(>]|&lt;)*)(.*?)((?:[.,)>\n]|&gt;)*)$/,_urlize2:/^\S+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/,urlize:function(t){return i.urlizetrunc(t)},urlizetrunc:function(t,r){return r=parseInt(r),e(t,/(\S+)/g,function(t){var e=i._urlize.exec(t);if(!e)return t;e[1];var n=e[2],u=(e[3],0==n.indexOf("www.")),a=-1!=n.indexOf("@"),o=-1!=n.indexOf(":"),s=0==n.indexOf("http://"),f=0==n.indexOf("https://"),l=/[a-zA-Z0-9]/.test(n.charAt(0)),c=n.substring(n.length-4),g=n;return r>3&&(g=g.substring(0,r-3)+"..."),u||!a&&!s&&n.length&&l&&(".org"==c||".net"==c||".com"==c)?'<a href="http://'+n+'" rel="nofollow">'+g+"</a>":s||f?'<a href="'+n+'" rel="nofollow">'+g+"</a>":a&&!u&&!o&&i._urlize2.test(n)?'<a href="mailto:'+n+'">'+n+"</a>":t}).join("")},wordcount:function(r){return(r=t.trim(r))?r.split(/\s+/g).length:0},wordwrap:function(t,r){r=parseInt(r);var e=[],n=t.split(/\s+/g);if(n.length){var u=n.shift();e.push(u);for(var a=u.length-u.lastIndexOf("\n")-1,i=0;i<n.length;i++){if(-1!=(u=n[i]).indexOf("\n"))var o=u.split(/\n/g);else o=[u];a+=o[0].length+1,r&&a>r?(e.push("\n"),a=o[o.length-1].length):(e.push(" "),o.length>1&&(a=o[o.length-1].length)),e.push(u)}}return e.join("")}}),i});
//# sourceMappingURL=../../sourcemaps/dtl/filter/strings.js.map