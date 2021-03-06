/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom-construct",".","./contrib/dijit","./render/dom","dojo/cache","dijit/_TemplatedMixin"],function(e,t,i,d,s,o){return t._DomTemplated=function(){},t._DomTemplated.prototype={_dijitTemplateCompat:!1,buildRendering:function(){if(this.domNode=this.srcNodeRef||dojo.create("div"),!this._render){var t=i.widgetsInTemplate;i.widgetsInTemplate=this.widgetsInTemplate,this.template=this.template&&!0!==this.template?this.template:this._getCachedTemplate(this.templatePath,this.templateString),this._render=new d.Render(this.domNode,this.template),i.widgetsInTemplate=t}var s=this._getContext();this._created||delete s._getter,this.render(s),this.domNode=this.template.getRootNode(),this.srcNodeRef&&this.srcNodeRef.parentNode&&(e.destroy(this.srcNodeRef),delete this.srcNodeRef)},setTemplate:function(e,t){dojox.dtl.text._isTemplate(e)?this.template=this._getCachedTemplate(null,e):this.template=this._getCachedTemplate(e),this.render(t)},render:function(e,t){t&&(this.template=t),this._render.render(this._getContext(e),this.template)},_getContext:function(e){return e instanceof dojox.dtl.Context||(e=!1),(e=e||new dojox.dtl.Context(this)).setThis(this),e},_getCachedTemplate:function(e,t){this._templates||(this._templates={}),t||(t=s(e,{sanitize:!0}));var i=t,d=this._templates;return d[i]?d[i]:d[i]=new dojox.dtl.DomTemplate(o.getCachedTemplate(t,!0))}},t._DomTemplated});
//# sourceMappingURL=../sourcemaps/dtl/_DomTemplated.js.map
