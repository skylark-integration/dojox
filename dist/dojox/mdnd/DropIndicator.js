/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","./AreaManager"],function(e,o,d,n){var t=o("dojox.mdnd.DropIndicator",null,{node:null,constructor:function(){var e=document.createElement("div"),o=document.createElement("div");e.appendChild(o),d.add(e,"dropIndicator"),this.node=e},place:function(e,o,d){d&&(this.node.style.height=d.h+"px");try{return o?e.insertBefore(this.node,o):e.appendChild(this.node),this.node}catch(e){return null}},remove:function(){this.node&&(this.node.style.height="",this.node.parentNode&&this.node.parentNode.removeChild(this.node))},destroy:function(){this.node&&(this.node.parentNode&&this.node.parentNode.removeChild(this.node),n.destroy(this.node),delete this.node)}});return dojox.mdnd.areaManager()._dropIndicator=new dojox.mdnd.DropIndicator,t});
//# sourceMappingURL=../sourcemaps/mdnd/DropIndicator.js.map
