(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(n,e,t){"use strict";t.r(e);var r=t(2);function o(n){const e=getComputedStyle(document.documentElement).getPropertyValue("--scale-ratio");return{mouseDownHandler:t=>n.handle_mouse_down(t.offsetX/e,t.offsetY/e),mouseUpHandler:t=>n.handle_mouse_up(t.offsetX/e,t.offsetY/e),mouseMoveHandler:t=>n.handle_mouse_move(t.offsetX/e,t.offsetY/e),keyDownHandler:e=>n.handle_keydown(e.key,performance.now()),keyUpHandler:e=>n.handle_keyup(e.key)}}(function(){const n=Array.from(document.querySelectorAll(".audio")).map(n=>(n.volume=n.id.startsWith("bgm")?.4:1,new Promise(e=>{if(n.readyState>3)e();else{const t=()=>{n.removeEventListener("canplaythrough",t),e()};n.addEventListener("canplaythrough",t),n.load()}}))),e=Array.from(document.querySelectorAll(".sprite")).map(n=>new Promise(e=>{if(n.complete)e();else{const t=()=>{n.removeEventListener("load",t),e()};n.addEventListener("load",t)}})),t=[].concat(n).concat(e);return Promise.all(t)})().then(()=>{const n=r.a.new("canvas",{sprite:["ruzzle_object","ruzzle_ui","ruzzle_environment","ruzzle_characters","ruzzle_background"],bgm:["bgm_0","bgm_level_selection"],sfx:["sfx_rock_fall","sfx_rock_move","sfx_dead","sfx_fanfare","sfx_projecting"]}),e=function(){const n=document.getElementById("canvas");let e=null;return t=>{e&&(n.removeEventListener("mousedown",e.mouseDownHandler),n.removeEventListener("mouseup",e.mouseUpHandler),n.removeEventListener("mousemove",e.mouseMoveHandler),window.removeEventListener("keydown",e.keyDownHandler),window.removeEventListener("keyup",e.keyUpHandler)),n.addEventListener("mousedown",t.mouseDownHandler),n.addEventListener("mouseup",t.mouseUpHandler),n.addEventListener("mousemove",t.mouseMoveHandler),window.addEventListener("keydown",t.keyDownHandler),window.addEventListener("keyup",t.keyUpHandler),e=t}}();e(o(n)),window.addEventListener("resize",()=>{e(o(n))}),n.render(),function e(){n.update(),n.render(),requestAnimationFrame(e)}()})},function(n,e,t){"use strict";t.d(e,"c",function(){return p}),t.d(e,"d",function(){return w}),t.d(e,"g",function(){return _}),t.d(e,"F",function(){return g}),t.d(e,"s",function(){return k}),t.d(e,"n",function(){return E}),t.d(e,"E",function(){return H}),t.d(e,"D",function(){return L}),t.d(e,"p",function(){return x}),t.d(e,"B",function(){return z}),t.d(e,"o",function(){return A}),t.d(e,"u",function(){return j}),t.d(e,"w",function(){return D}),t.d(e,"G",function(){return U}),t.d(e,"H",function(){return M}),t.d(e,"v",function(){return O}),t.d(e,"I",function(){return T}),t.d(e,"y",function(){return $}),t.d(e,"A",function(){return C}),t.d(e,"q",function(){return P}),t.d(e,"C",function(){return F}),t.d(e,"t",function(){return I}),t.d(e,"x",function(){return J}),t.d(e,"J",function(){return q}),t.d(e,"r",function(){return B}),t.d(e,"z",function(){return R}),t.d(e,"e",function(){return X}),t.d(e,"b",function(){return Y}),t.d(e,"f",function(){return N}),t.d(e,"j",function(){return W}),t.d(e,"k",function(){return G}),t.d(e,"l",function(){return V}),t.d(e,"h",function(){return K}),t.d(e,"i",function(){return Q}),t.d(e,"a",function(){return Z}),t.d(e,"m",function(){return nn});var r=t(3);let o=new TextEncoder("utf-8"),u=null;function c(){return null!==u&&u.buffer===r.d.buffer||(u=new Uint8Array(r.d.buffer)),u}let i=0;function f(n){const e=o.encode(n),t=r.c(e.length);return c().set(e,t),i=e.length,t}const s=new Array(32);s.fill(void 0),s.push(void 0,null,!0,!1);let d=s.length;function a(n){d===s.length&&s.push(s.length+1);const e=d;return d=s[e],s[e]=n,e}let l=new TextDecoder("utf-8");function m(n,e){return l.decode(c().subarray(n,n+e))}function p(n,e){let t=m(n,e);t=t.slice(),r.b(n,1*e),console.error(t)}function w(){return a(new Error)}function y(n){return s[n]}let h=null;function v(){return null!==h&&h.buffer===r.d.buffer||(h=new Uint32Array(r.d.buffer)),h}function _(n,e){const t=f(y(e).stack),r=i,o=v();o[n/4]=t,o[n/4+1]=r}function g(n){return y(n)instanceof CanvasRenderingContext2D?1:0}function b(n,e){const t=v();t[n/4]=1,t[n/4+1]=a(e)}function k(n,e,t,r,o,u,c,i,f,s,d){try{y(n).drawImage(y(e),t,r,o,u,c,i,f,s)}catch(n){b(d,n)}}function E(n){y(n).beginPath()}function H(n){y(n).stroke()}function L(n,e){y(n).fillStyle=y(e)}function x(n){y(n).closePath()}function z(n,e,t,r,o){y(n).rect(e,t,r,o)}function A(n,e,t,r,o){y(n).clearRect(e,t,r,o)}function j(n,e,t,r,o){y(n).fillRect(e,t,r,o)}function S(n){return null==n}function D(n,e,t){let r=m(e,t);const o=y(n).getElementById(r);return S(o)?0:a(o)}function U(n){return y(n)instanceof HTMLAudioElement?1:0}function M(n){return y(n)instanceof HTMLCanvasElement?1:0}function O(n,e,t,r){let o=m(e,t);try{const e=y(n).getContext(o);return S(e)?0:a(e)}catch(n){b(r,n)}}function T(n){return y(n)instanceof HTMLImageElement?1:0}function $(n,e){try{y(n).pause()}catch(n){b(e,n)}}function C(n,e){try{return a(y(n).play())}catch(n){b(e,n)}}function P(n){return y(n).currentTime}function F(n,e){y(n).currentTime=e}function I(n){return y(n).ended}function J(n){return y(n).now()}function q(n){return y(n)instanceof Window?1:0}function B(n){const e=y(n).document;return S(e)?0:a(e)}function R(n){const e=y(n).performance;return S(e)?0:a(e)}function X(n,e){let t=m(n,e);return a(new Function(t))}function Y(n,e,t){try{return a(y(n).call(y(e)))}catch(n){b(t,n)}}function N(){return Math.random()}function W(n){return a(y(n))}function G(n){var e;(e=n)<36||(s[e]=d,d=e)}function V(n,e){return a(m(n,e))}function K(n,e){const t=Object.prototype.toString,r=n=>{const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=r(n[0]));for(let o=1;o<e;o++)t+=", "+r(n[o]);return t+="]"}const o=/\[object ([^\]]+)\]/.exec(t.call(n));let u;if(!(o.length>1))return t.call(n);if("Object"==(u=o[1]))try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n        ${n.stack}`:u},o=y(n),u=f(r(o));return v()[e/4]=i,u}function Q(n,e){const t=f(JSON.stringify(y(n)));return v()[e/4]=t,i}class Z{static __wrap(n){const e=Object.create(Z.prototype);return e.ptr=n,e}free(){const n=this.ptr;this.ptr=0,function(n){r.a(n)}(n)}static new(n,e){const t=f(n),o=i;return Z.__wrap(r.j(t,o,a(e)))}update(){return r.l(this.ptr)}render(){return r.k(this.ptr)}handle_mouse_down(n,e){return r.g(this.ptr,n,e)}handle_mouse_up(n,e){return r.i(this.ptr,n,e)}handle_mouse_move(n,e){return r.h(this.ptr,n,e)}handle_keydown(n,e){const t=f(n),o=i;return r.e(this.ptr,t,o,e)}handle_keyup(n){const e=f(n),t=i;return r.f(this.ptr,e,t)}}function nn(n,e){throw new Error(m(n,e))}},function(n,e,t){"use strict";var r=t.w[n.i];n.exports=r;t(2);r.m()}]]);