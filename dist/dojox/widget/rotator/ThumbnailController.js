/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/event","dojo/aspect","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/query"],function(o,t,e,r,n,a,d,i,s){var c="dojoxRotatorThumb",l=c+"Selected";return o("dojox.widget.rotator.ThumbnailController",null,{rotator:null,constructor:function(o,t){e.mixin(this,o),this._domNode=t;var d=this.rotator;if(d){for(;t.firstChild;)t.removeChild(t.firstChild);for(var s=0;s<d.panes.length;s++){var h=d.panes[s].node,f=a.get(h,"thumbsrc")||a.get(h,"src"),m=a.get(h,"alt")||"";/img/i.test(h.tagName)&&function(o){i.create("a",{classname:c+" "+c+o+" "+(o==d.idx?l:""),href:f,onclick:function(t){r.stop(t),d&&d.control.apply(d,["go",o])},title:m,innerHTML:'<img src="'+f+'" alt="'+m+'"/>'},t)}(s)}n.after(d,"onUpdate",e.hitch(this,"_onUpdate"),!0)}},destroy:function(){i.destroy(this._domNode)},_onUpdate:function(o){var t=this.rotator;if("onAfterTransition"==o){var e=s("."+c,this._domNode).removeClass(l);t.idx<e.length&&d.add(e[t.idx],l)}}})});
//# sourceMappingURL=../../sourcemaps/widget/rotator/ThumbnailController.js.map
