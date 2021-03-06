/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang"],function(t){var i=t.getObject("dojox.encoding.bits",!0);return i.OutputStream=function(){this.reset()},t.extend(i.OutputStream,{reset:function(){this.buffer=[],this.accumulator=0,this.available=8},putBits:function(t,i){for(;i;){var a=Math.min(i,this.available),e=(a<=i?t>>>i-a:t)<<this.available-a;this.accumulator|=e&255>>>8-this.available,this.available-=a,this.available||(this.buffer.push(this.accumulator),this.accumulator=0,this.available=8),i-=a}},getWidth:function(){return 8*this.buffer.length+(8-this.available)},getBuffer:function(){var t=this.buffer;return this.available<8&&t.push(this.accumulator&255<<this.available),this.reset(),t}}),i.InputStream=function(t,i){this.buffer=t,this.width=i,this.bbyte=this.bit=0},t.extend(i.InputStream,{getBits:function(t){for(var i=0;t;){var a=Math.min(t,8-this.bit);i<<=a,i|=this.buffer[this.bbyte]>>>8-this.bit-a&~(-1<<a),this.bit+=a,8==this.bit&&(++this.bbyte,this.bit=0),t-=a}return i},getWidth:function(){return this.width-8*this.bbyte-this.bit}}),i});
//# sourceMappingURL=../sourcemaps/encoding/bits.js.map
