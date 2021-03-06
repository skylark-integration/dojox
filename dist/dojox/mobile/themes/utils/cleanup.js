/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
var fs=require("fs");function clean(n){var e=[];getFiles(n,/.*.css$/,e);var l={};getFiles("../common/",/.*.less$/,l),getFiles(n,/.*.less$/,l);for(var c=0;c<e.length;c++)l[e[c].replace(".css",".less")]&&(console.log("deleting",n+"/"+e[c]),fs.unlink(n+"/"+e[c],function(n){n&&console.log(n)}))}function getFiles(n,e,l){fs.readdirSync(n).map(function(n){e.test(n)&&(l instanceof Array?l.push(n):l[n]=!0)})}clean("../android"),clean("../android/dijit"),clean("../iphone"),clean("../iphone/dijit"),clean("../blackberry"),clean("../blackberry/dijit"),clean("../holodark"),clean("../holodark/dijit"),clean("../windows"),clean("../windows/dijit"),clean("../custom"),clean("../custom/dijit"),clean("../common/transitions"),clean("../common/domButtons");
//# sourceMappingURL=../../../sourcemaps/mobile/themes/utils/cleanup.js.map
