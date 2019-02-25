/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base"],function(r){var n,t=((n=function(){}).prototype=r,new n);function o(r,n){return r>>>n|r<<32-n}function e(r,n){return r>>>n}function u(r,n,t){return r&n^~r&t}function f(r,n,t){return r&n^r&t^n&t}function i(r){return o(r,2)^o(r,13)^o(r,22)}function c(r){return o(r,6)^o(r,11)^o(r,25)}function a(r){return o(r,7)^o(r,18)^e(r,3)}t.toWord=function(r){for(var n=Array(r.length>>2),t=0;t<n.length;t++)n[t]=0;for(t=0;t<8*r.length;t+=8)n[t>>5]|=(255&r.charCodeAt(t/8))<<24-t%32;return n},t.toHex=function(r){for(var n="0123456789abcdef",t=[],o=0,e=4*r.length;o<e;o++)t.push(n.charAt(r[o>>2]>>8*(3-o%4)+4&15),n.charAt(r[o>>2]>>8*(3-o%4)&15));return t.join("")},t.toBase64=function(r){for(var n=[],t=0,o=4*r.length;t<o;t+=3)for(var e=(r[t>>2]>>8*(3-t%4)&255)<<16|(r[t+1>>2]>>8*(3-(t+1)%4)&255)<<8|r[t+2>>2]>>8*(3-(t+2)%4)&255,u=0;u<4;u++)8*t+6*u>32*r.length?n.push("="):n.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>6*(3-u)&63));return n.join("")},t._toString=function(r){for(var n="",t=0;t<32*r.length;t+=8)n+=String.fromCharCode(r[t>>5]>>>24-t%32&255);return n};var h=r.addWords,g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];return t.digest=function(r,n,t,d){t=t.slice(0);var l,s,v,p,A,y,C,b,j,w,S,W,m,x=new Array(64);for(r[n>>5]|=128<<24-n%32,r[15+(n+64>>9<<4)]=n,j=0;j<r.length;j+=16){for(l=t[0],s=t[1],v=t[2],p=t[3],A=t[4],y=t[5],C=t[6],b=t[7],w=0;w<64;w++)x[w]=w<16?r[w+j]:h(h(h(o(m=x[w-2],17)^o(m,19)^e(m,10),x[w-7]),a(x[w-15])),x[w-16]),S=h(h(h(h(b,c(A)),u(A,y,C)),g[w]),x[w]),W=h(i(l),f(l,s,v)),b=C,C=y,y=A,A=h(p,S),p=v,v=s,s=l,l=h(S,W);t[0]=h(l,t[0]),t[1]=h(s,t[1]),t[2]=h(v,t[2]),t[3]=h(p,t[3]),t[4]=h(A,t[4]),t[5]=h(y,t[5]),t[6]=h(C,t[6]),t[7]=h(b,t[7])}return 224==d&&t.pop(),t},t});
//# sourceMappingURL=../../sourcemaps/encoding/digests/_sha-32.js.map