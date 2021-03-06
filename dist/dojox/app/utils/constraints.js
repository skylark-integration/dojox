/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array"],function(e){var r=[];return{getSelectedChild:function(e,r){var n=typeof r,t="string"==n||"number"==n?r:r.__hash;return e&&e.selectedChildren&&e.selectedChildren[t]?e.selectedChildren[t]:null},setSelectedChild:function(e,r,n){var t=typeof r,l="string"==t||"number"==t?r:r.__hash;e.selectedChildren[l]=n},getAllSelectedChildren:function(e,r){if(r=r||[],e&&e.selectedChildren)for(var n in e.selectedChildren)if(e.selectedChildren[n]){var t=e.selectedChildren[n];r.push(t),this.getAllSelectedChildren(t,r)}return r},register:function(n){var t=typeof n;if(!n.__hash&&"string"!=t&&"number"!=t){var l=null;if(e.some(r,function(e){var r=!0;for(var t in e)if("_"!==t.charAt(0)&&e[t]!=n[t]){r=!1;break}return 1==r&&(l=e),r}),l)n.__hash=l.__hash;else{var i="";for(var h in n)"_"!==h.charAt(0)&&(i+=n[h]);n.__hash=i,r.push(n)}}}}});
//# sourceMappingURL=../../sourcemaps/app/utils/constraints.js.map
