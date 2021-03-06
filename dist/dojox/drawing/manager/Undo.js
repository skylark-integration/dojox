/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","../util/oo"],function(o,t){return t.declare(function(t){this.keys=t.keys,this.undostack=[],this.redostack=[],o.connect(this.keys,"onKeyDown",this,"onKeyDown")},{onKeyDown:function(o){(o.cmmd||o.ctrl)&&(90!=o.keyCode||o.shift?(90==o.keyCode&&o.shift||89==o.keyCode)&&this.redo():this.undo())},add:function(t){t.args=o.mixin({},t.args),this.undostack.push(t)},apply:function(t,n,e){o.hitch(t,n)(e)},undo:function(){var o=this.undostack.pop();console.log("undo!",o),o&&(o.before(),this.redostack.push(o))},redo:function(){console.log("redo!");var o=this.redostack.pop();o&&(o.after?o.after():o.before(),this.undostack.push(o))}})});
//# sourceMappingURL=../../sourcemaps/drawing/manager/Undo.js.map
