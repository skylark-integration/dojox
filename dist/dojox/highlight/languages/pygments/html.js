/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["../../_base","./_html"],function(e){var n=e.languages,a=[],s=n.pygments._html.tags;for(var t in s)a.push(t);return a="\\b("+a.join("|")+")\\b",n.html={case_insensitive:!0,defaultMode:{contains:["name entity","comment","comment preproc","_script","_style","_tag"]},modes:[{className:"comment",begin:"\x3c!--",end:"--\x3e"},{className:"comment preproc",begin:"\\<\\!\\[CDATA\\[",end:"\\]\\]\\>"},{className:"comment preproc",begin:"\\<\\!",end:"\\>"},{className:"string",begin:"'",end:"'",illegal:"\\n",relevance:0},{className:"string",begin:'"',end:'"',illegal:"\\n",relevance:0},{className:"name entity",begin:"\\&[a-z]+;",end:"^"},{className:"name tag",begin:a,end:"^",relevance:5},{className:"name attribute",begin:"\\b[a-z0-9_\\:\\-]+\\s*=",end:"^",relevance:0},{className:"_script",begin:"\\<script\\b",end:"\\</script\\>",relevance:5},{className:"_style",begin:"\\<style\\b",end:"\\</style\\>",relevance:5},{className:"_tag",begin:"\\<(?!/)",end:"\\>",contains:["name tag","name attribute","string","_value"]},{className:"_tag",begin:"\\</",end:"\\>",contains:["name tag"]},{className:"_value",begin:"[^\\s\\>]+",end:"^"}]},n.html});
//# sourceMappingURL=../../../sourcemaps/highlight/languages/pygments/html.js.map
