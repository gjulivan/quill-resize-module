/*!
 * Quill Resize Module v2.0.2
 * https://github.com/mudoo/quill-resize-module
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("Quill")):"function"==typeof define&&define.amd?define(["Quill"],e):"object"==typeof exports?exports.QuillResize=e(require("Quill")):t.QuillResize=e(t.Quill)}(self,(t=>(()=>{"use strict";var e=[,e=>{e.exports=t}],i={};function o(t){var n=i[t];if(void 0!==n)return n.exports;var r=i[t]={exports:{}};return e[t](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};o.r(n),o.d(n,{default:()=>ut});const r={modules:["DisplaySize","Toolbar","Resize","Keyboard"],keyboardSelect:!0,selectedClass:"selected",activeClass:"active",embedTags:["VIDEO","IFRAME"],parchment:{image:{attribute:["width"],limit:{minWidth:100}},video:{attribute:["width","height"],limit:{minWidth:200,ratio:.5625}}},styles:{overlay:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444",pointerEvents:"none"},handle:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",pointerEvents:"all"},display:{position:"absolute",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default",lineHeight:"1"},toolbar:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"120px",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default",pointerEvents:"all"},toolbarButton:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},toolbarButtonSvg:{}}};function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,a(o.key),o)}}function a(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==l(e)?e:e+""}var u=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resizer=e,this.quill=e.quill,this.overlay=e.overlay,this.activeEle=e.activeEle,this.blot=e.blot,this.options=e.options,this.requestUpdate=function(){e.onUpdate(!0)}},(e=[{key:"onCreate",value:function(){}},{key:"onDestroy",value:function(){}},{key:"onUpdate",value:function(){}}])&&s(t.prototype,e),i&&s(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,i}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function h(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,f(o.key),o)}}function f(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==c(e)?e:e+""}function d(t,e,i){return e=y(e),function(t,e){if(e&&("object"==c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,p()?Reflect.construct(e,i||[],y(t).constructor):e.apply(t,i))}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}var v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(e,t),i=e,(o=[{key:"onCreate",value:function(){this.display=document.createElement("div"),Object.assign(this.display.style,this.options.styles.display),this.overlay.appendChild(this.display)}},{key:"onUpdate",value:function(){if(this.display&&this.activeEle){var t=this.getCurrentSize();if(this.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30)Object.assign(this.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"===this.activeEle.style.float){var e=this.display.getBoundingClientRect();Object.assign(this.display.style,{right:"auto",bottom:"-".concat(e.height+4,"px"),left:"-".concat(e.width+4,"px")})}else{var i=this.display.getBoundingClientRect();Object.assign(this.display.style,{right:"-".concat(i.width+4,"px"),bottom:"-".concat(i.height+4,"px"),left:"auto"})}}}},{key:"getCurrentSize",value:function(){return[this.activeEle.offsetWidth,this.activeEle.offsetHeight]}}])&&h(i.prototype,o),n&&h(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i;var i,o,n}(u);var m=o(1),g=o.n(m);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,P(o.key),o)}}function O(t,e,i){return e=j(e),function(t,e){if(e&&("object"==w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,x()?Reflect.construct(e,i||[],j(t).constructor):e.apply(t,i))}function x(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(x=function(){return!!t})()}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function P(t){var e=function(t,e){if("object"!=w(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=w(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==w(e)?e:e+""}var k,C,q,A=(window.Quill||g()).import("parchment"),L=new(A.ClassAttributor?A.ClassAttributor:A.Attributor.Class)("imagestyle","ql-resize-style"),T=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(e,t),i=e,(o=[{key:"onCreate",value:function(){this.toolbar=document.createElement("div"),Object.assign(this.toolbar.style,this.options.styles.toolbar),this.overlay.appendChild(this.toolbar),this._defineAlignments(),this._addToolbarButtons()}},{key:"_defineAlignments",value:function(){var t=this,e=this.constructor.Icons;this.alignments=[{icon:e.AlignLeft,apply:function(){L.add(t.activeEle,"left")},isApplied:function(){return"left"===L.value(t.activeEle)}},{icon:e.AlignCenter,apply:function(){L.add(t.activeEle,"center")},isApplied:function(){return"center"===L.value(t.activeEle)}},{icon:e.AlignRight,apply:function(){L.add(t.activeEle,"right")},isApplied:function(){return"right"===L.value(t.activeEle)}},{icon:e.FloatFull,apply:function(){L.add(t.activeEle,"full")},isApplied:function(){return"full"===L.value(t.activeEle)}}]}},{key:"_addToolbarButtons",value:function(){var t=this,e=this.constructor.Icons,i=[];this.alignments.forEach((function(e,o){var n=document.createElement("span");i.push(n),n.innerHTML=e.icon,n.addEventListener("click",(function(){i.forEach((function(t){return t.style.filter=""})),e.isApplied()?L.remove(t.activeEle):(t._selectButton(n),e.apply()),t.requestUpdate()})),Object.assign(n.style,t.options.styles.toolbarButton),o>0&&(n.style.borderLeftWidth="0"),Object.assign(n.children[0].style,t.options.styles.toolbarButtonSvg),e.isApplied()&&t._selectButton(n),t.toolbar.appendChild(n)}));var o=document.createElement("span");o.innerHTML=e.Edit,Object.assign(o.style,this.options.styles.toolbarButton),o.style.borderLeftWidth="0",o.addEventListener("click",(function(){t.quill.emitter.emit("resize-edit",t.activeEle,t.blot)})),this.toolbar.appendChild(o)}},{key:"_selectButton",value:function(t){t.style.filter="invert(20%)"}}])&&E(i.prototype,o),n&&E(i,n),Object.defineProperty(i,"prototype",{writable:!1}),i;var i,o,n}(u);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function M(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function z(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?M(Object(i),!0).forEach((function(e){H(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):M(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function H(t,e,i){return(e=D(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,D(o.key),o)}}function D(t){var e=function(t,e){if("object"!=B(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=B(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==B(e)?e:e+""}function R(t,e,i){return e=W(e),function(t,e){if(e&&("object"==B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,N()?Reflect.construct(e,i||[],W(t).constructor):e.apply(t,i))}function N(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(N=function(){return!!t})()}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}k=T,q={AlignLeft:'<svg viewbox="0 0 18 18">\n  <path class="ql-fill" d="M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z"/>\n  <path class="ql-fill" d="M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z"/>\n  <path class="ql-fill" d="M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z"/>\n  <path class="ql-fill" d="M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z"/>\n  <rect class="ql-fill" x="2" y="6" width="8" height="6" rx="1" ry="1"/>\n</svg>',AlignCenter:'<svg viewbox="0 0 18 18">\n  <path class="ql-fill" d="M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z"/>\n  <path class="ql-fill" d="M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z"/>\n  <rect class="ql-fill" x="3" y="6" width="12" height="6" rx="1" ry="1"/>\n</svg>',AlignRight:'<svg viewbox="0 0 18 18">\n  <path class="ql-fill" d="M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z"/>\n  <path class="ql-fill" d="M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z"/>\n  <path class="ql-fill" d="M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z"/>\n  <path class="ql-fill" d="M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z"/>\n  <rect class="ql-fill" x="8" y="6" width="8" height="6" rx="1" ry="1" transform="translate(24 18) rotate(-180)"/>\n</svg>',FloatFull:'<svg viewbox="0 0 18 18">\n  <path class="ql-fill" d="M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z"/>\n  <path class="ql-fill" d="M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z"/>\n  <rect class="ql-fill" x="2" y="6" width="14" height="6" rx="1" ry="1"/>\n</svg>',Edit:'<svg viewBox="0 0 18 18">\n  <path class="ql-fill" d="M 12.9 2 L 11.3 3.6 L 14.8 7 L 16.3 5.5 L 12.9 2 Z M 9.3 5.5 L 2 12.2 L 2 15.5 L 5.7 15.5 L 13 8.9 L 9.3 5.5 Z"></path>\n</svg>\n'},(C=P(C="Icons"))in k?Object.defineProperty(k,C,{value:q,enumerable:!0,configurable:!0,writable:!0}):k[C]=q;var U=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),R(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(e,t),function(t,e,i){return e&&_(t.prototype,e),i&&_(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(e,[{key:"onCreate",value:function(){this.blotOptions=this.options.parchment[this.blot.statics.blotName],this.boxes=[],this.addBox("nwse-resize"),this.addBox("nesw-resize"),this.addBox("nwse-resize"),this.addBox("nesw-resize"),this.positionBoxes()}},{key:"onDestroy",value:function(){this.setCursor("")}},{key:"positionBoxes",value:function(){var t=this,e="".concat(-parseFloat(this.options.styles.handle.width)/2,"px"),i="".concat(-parseFloat(this.options.styles.handle.height)/2,"px");[{left:e,top:i},{right:e,top:i},{right:e,bottom:i},{left:e,bottom:i}].forEach((function(e,i){Object.assign(t.boxes[i].style,e)}))}},{key:"addBox",value:function(t){var e=document.createElement("div");Object.assign(e.style,this.options.styles.handle),e.style.cursor=t,e.style.width="".concat(this.options.styles.handle.width,"px"),e.style.height="".concat(this.options.styles.handle.height,"px"),e.addEventListener("mousedown",this.handleMousedown.bind(this),!1),this.overlay.appendChild(e),this.boxes.push(e)}},{key:"handleMousedown",value:function(t){var e=this;this.blot.handling&&this.blot.handling(!0),this.dragBox=t.target,this.dragStartX=t.clientX,this.dragStartY=t.clientY,this.preDragSize={width:this.activeEle.offsetWidth,height:this.activeEle.offsetHeight},this.naturalSize=this.getNaturalSize(),this.setCursor(this.dragBox.style.cursor),this.handleDragProxy=function(t){return e.handleDrag(t)},this.handleMouseupProxy=function(t){return e.handleMouseup(t)},document.addEventListener("mousemove",this.handleDragProxy,!1),document.addEventListener("mouseup",this.handleMouseupProxy,!1)}},{key:"handleMouseup",value:function(t){var e=this.calcSize(t,this.blotOptions.limit);Object.assign(this.activeEle,e),Object.assign(this.activeEle.style,{width:null,height:null}),this.setCursor(""),this.blot.handling&&this.blot.handling(!1),document.removeEventListener("mousemove",this.handleDragProxy),document.removeEventListener("mouseup",this.handleMouseupProxy)}},{key:"handleDrag",value:function(t){if(this.activeEle&&this.blot){var e=z(z({},this.blotOptions.limit),{},{unit:!0});Object.assign(this.activeEle.style,this.calcSize(t,e)),this.requestUpdate()}}},{key:"calcSize",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.clientX-this.dragStartX,n=t.clientY-this.dragStartY,r={},l=1;(this.blotOptions.attribute||["width"]).forEach((function(t){r[t]=e.preDragSize[t]})),this.dragBox!==this.boxes[0]&&this.dragBox!==this.boxes[3]||(l=-1),r.width&&(r.width=Math.round(this.preDragSize.width+o*l)),r.height&&(r.height=Math.round(this.preDragSize.height+n*l));var s,a=r.width,u=r.height;i.ratio?(i.minWidth&&(a=Math.max(i.minWidth,a)),i.maxWidth&&(a=Math.min(i.maxWidth,a)),u=a*i.ratio,i.minHeight&&u<i.minHeight&&(s=!0,u=i.minHeight),i.maxHeight&&u>i.maxHeight&&(s=!0,u=i.maxHeight),s&&(a=u/i.ratio)):(r.width&&(i.minWidth&&(a=Math.max(i.minWidth,a)),i.maxWidth&&(a=Math.min(i.maxWidth,a))),r.height&&(i.minHeight&&(u=Math.max(i.minHeight,u)),i.maxHeight&&(u=Math.min(i.maxHeight,u))));i.unit&&(a&&(a+="px"),u&&(u+="px"));var c={};return a&&(c.width=a),u&&(c.height=u),c}},{key:"getNaturalSize",value:function(){var t=this.activeEle,e=[0,0];return t.getAttribute("data-size")?e=t.getAttribute("data-size").split(","):(e=[t.naturalWidth||t.offsetWidth,t.naturalHeight||t.offsetHeight],t.setAttribute("data-size",e[0]+","+e[1])),{width:parseInt(e[0]),height:parseInt(e[1])}}},{key:"setCursor",value:function(t){[document.body,this.activeEle].forEach((function(e){e.style.cursor=t}))}}])}(u);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function Z(t,e,i){return(e=X(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function K(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var o,n,r,l,s=[],a=!0,u=!1;try{if(r=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;a=!1}else for(;!(a=(o=r.call(i)).done)&&(s.push(o.value),s.length!==e);a=!0);}catch(t){u=!0,n=t}finally{try{if(!a&&null!=i.return&&(l=i.return(),Object(l)!==l))return}finally{if(u)throw n}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var i={}.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Q(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=Array(e);i<e;i++)o[i]=t[i];return o}function G(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,X(o.key),o)}}function X(t){var e=function(t,e){if("object"!=F(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=F(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==F(e)?e:e+""}function Y(t,e,i){return e=$(e),function(t,e){if(e&&("object"==F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,V()?Reflect.construct(e,i||[],$(t).constructor):e.apply(t,i))}function V(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(V=function(){return!!t})()}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},J(t,e)}var tt=window.Quill||g(),et=tt.import("parchment"),it={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},ot=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Y(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&J(t,e)}(e,t),function(t,e,i){return e&&G(t.prototype,e),i&&G(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(e,[{key:"onCreate",value:function(t){var e=this;this.keyboardProxy=function(t){return e.keyboardHandle(t)},document.addEventListener("keydown",this.keyboardProxy,!0)}},{key:"onDestroy",value:function(){document.removeEventListener("keydown",this.keyboardProxy,!0)}},{key:"keyboardHandle",value:function(t){if(!t.defaultPrevented&&!(t.shiftKey||t.ctrlKey||t.altKey)&&this.activeEle&&!t.fromResize&&!t.ctrlKey){var e,i=t.keyCode,o=this.blot.offset(this.quill.scroll),n=!1;i===it.BACKSPACE||i===it.DELETE?(this.blot.deleteAt(0),this.blot.parent.optimize(),n=!0):i>=it.LEFT&&i<=it.DOWN&&(i===it.RIGHT?o+=this.blot.length()||1:i===it.UP?(o=this.getOtherLineIndex(-1),e=this.quill.getLeaf(o)[0]):i===it.DOWN&&(o=this.getOtherLineIndex(1),e=this.quill.getLeaf(o)[0]),n=!0),n&&(t.stopPropagation(),t.preventDefault()),e&&this.resizer.judgeShow(e,e.domNode)||(this.quill.setSelection(o),this.resizer.hide())}}},{key:"getOtherLineIndex",value:function(t){var e=this.blot.offset(this.quill.scroll),i=K(this.quill.getLine(e),1)[0],o=this.blot.offset(i)+1,n=t>0?i.next:i.prev;if(n){var r=n.length();"block"===n.statics.blotName&&r--,e=n.offset(this.quill.scroll)+Math.min(r,o)}return e}},{key:"dispatchEvent",value:function(t){var e=new t.constructor(t);e.fromResize=!0,this.quill.root.dispatchEvent(e)}}],[{key:"injectInit",value:function(t){var e=t.keyboard.bindings;e[this.keys.LEFT].unshift(this.makeArrowHandler(this.keys.LEFT,!1)),e[this.keys.RIGHT].unshift(this.makeArrowHandler(this.keys.RIGHT,!1))}},{key:"makeArrowHandler",value:function(t,i){var o=t===e.keys.LEFT?"prefix":"suffix";return Z(Z({key:t,shiftKey:i,altKey:null},o,/^$/),"handler",(function(i){if(!this.quill.resizer)return!0;var o=i.index,n=t===e.keys.LEFT,r=t===e.keys.RIGHT,l=K(this.quill.getLine(o+(n?-1:0)),1)[0];if(this.quill.resizer.judgeShow(l))return!1;var s=this.quill.getIndex(l);if(r&&s+l.length()-1===o)return!0;r&&(o+=i.length+1);var a=K(this.quill.getLeaf(o),1)[0],u=a.offset(a.parent),c=a.constructor.scope===et.Scope.BLOCK_BLOT;return!(!n||!(c&&o===u||0===o||o===s))||(n&&0===u&&(o-=1,a=this.quill.getLeaf(o)[0]),!this.quill.resizer.judgeShow(a))}))}}])}(u);function nt(t){return nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(t)}function rt(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,lt(o.key),o)}}function lt(t){var e=function(t,e){if("object"!=nt(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=nt(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==nt(e)?e:e+""}/^2\./.test(tt.version)?ot.keys={BACKSPACE:"Backspace",TAB:"Tab",ENTER:"Enter",ESCAPE:"Escape",LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown",DELETE:"Delete"}:ot.keys=it;var st=(window.Quill||g()).import("parchment"),at=function(){return function(t,e,i){return e&&rt(t.prototype,e),i&&rt(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}((function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e.resizer=this,this.quill=e;var o=!1;i.modules&&(o=i.modules.slice()),this.options=Object.assign({},r,i),this.options.styles=Object.assign({},r.styles,i.styles),!1!==o&&(this.options.modules=o),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("mousedown",this.handleClick.bind(this),!1),this.quill.on("text-change",this.handleChange.bind(this)),this.quill.emitter.on("resize-edit",this.handleEdit.bind(this)),this.quill.container.style.position=this.quill.container.style.position||"relative",this.selectedBlots=[],this.options.selectedClass&&this.quill.on("selection-change",this.addBlotsSelectedClass.bind(this)),this.moduleClasses=this.options.modules,this.modules=[],this.options.keyboardSelect&&ot.injectInit(this.quill),this.options.embedTags&&this.initializeEmbed()}),[{key:"initializeModules",value:function(){var t=this;this.removeModules(),this.modules=this.moduleClasses.map((function(e){return new(t.constructor.Modules[e]||e)(t)})),this.modules.forEach((function(e){e.onCreate(t)})),this.onUpdate()}},{key:"initializeEmbed",value:function(){if(this.options.embedTags.length){this.embedClassName="ql-".concat(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return Array.from({length:t},(function(){return e[Math.floor(62*Math.random())]})).join("")}());var t=[""].concat(this.options.embedTags).join(", .".concat(this.embedClassName," ")).slice(2);t+="{pointer-events: none;}";var e=document.createElement("style");e.textContent=t,this.quill.container.appendChild(e),this.quill.root.classList.add(this.embedClassName)}}},{key:"onUpdate",value:function(t){this.updateFromModule=t,this.repositionElements(),this.modules.forEach((function(t){t.onUpdate()}))}},{key:"removeModules",value:function(){this.modules.forEach((function(t){t.onDestroy()})),this.modules=[]}},{key:"handleEdit",value:function(){if(this.blot){var t=this.blot.offset(this.quill.scroll);this.hide(),this.quill.focus(),this.quill.setSelection(t,1)}}},{key:"handleClick",value:function(t){var e,i,o=!1,n=t.target,r=null===(e=this.options.embedTags)||void 0===e?void 0:e.join();if(r){var l=this.quill.root;(n===l||n.querySelectorAll(r).length)&&(l.classList.remove(this.embedClassName),n=document.elementFromPoint(t.clientX,t.clientY),l.classList.add(this.embedClassName))}n&&n.tagName&&(i=this.quill.constructor.find(n))&&(o=this.judgeShow(i,n)),o?t.preventDefault():this.activeEle&&this.hide()}},{key:"judgeShow",value:function(t,e){var i=!1;if(!t)return i;!e&&t.domNode&&(e=t.domNode);var o=this.options.parchment[t.statics.blotName];if(!o)return i;if(this.activeEle===e)return!0;var n=o.limit||{};return(!n.minWidth||n.minWidth&&e.offsetWidth>=n.minWidth)&&(i=!0,this.activeEle&&this.hide(),this.activeEle=e,this.blot=t,this.show(e)),i}},{key:"handleChange",value:function(t,e,i){this.updateFromModule?this.updateFromModule=!1:"user"===i&&this.overlay&&this.activeEle&&this.onUpdate()}},{key:"show",value:function(){this.showOverlay(),this.initializeModules(),this.options.activeClass&&this.activeEle.classList.add(this.options.activeClass)}},{key:"showOverlay",value:function(){var t=this;this.overlay&&this.hideOverlay(),this.quill.setSelection(null),this.setUserSelect("none"),this.overlay=document.createElement("div"),Object.assign(this.overlay.style,this.options.styles.overlay),this.overlay.addEventListener("dblclick",this.handleEdit.bind(this),!1),this.quill.container.appendChild(this.overlay),this.hideProxy=function(e){t.activeEle&&t.hide()},this.quill.root.addEventListener("input",this.hideProxy,!0),this.updateOverlayPositionProxy=this.updateOverlayPosition.bind(this),this.quill.root.addEventListener("scroll",this.updateOverlayPositionProxy),this.repositionElements()}},{key:"hideOverlay",value:function(){this.overlay&&(this.quill.container.removeChild(this.overlay),this.overlay=void 0,this.quill.root.removeEventListener("input",this.hideProxy,!0),this.quill.root.removeEventListener("scroll",this.updateOverlayPositionProxy),this.setUserSelect(""))}},{key:"repositionElements",value:function(){if(this.overlay&&this.activeEle){var t=this.quill.container,e=this.activeEle.getBoundingClientRect(),i=t.getBoundingClientRect();Object.assign(this.overlay.style,{left:"".concat(e.left-i.left-1+t.scrollLeft,"px"),top:"".concat(e.top-i.top+this.quill.root.scrollTop,"px"),width:"".concat(e.width,"px"),height:"".concat(e.height,"px"),marginTop:-1*this.quill.root.scrollTop+"px"})}}},{key:"updateOverlayPosition",value:function(){this.overlay.style.marginTop=-1*this.quill.root.scrollTop+"px"}},{key:"addBlotsSelectedClass",value:function(t,e){var i=this;if(!t)return this.removeBlotsSelectedClass(),void(this.selectedBlots=[]);var o=this.quill.scroll.descendants(st.Leaf||st.LeafBlot,t.index,t.length).filter((function(t){var e=!!i.options.parchment[t.statics.blotName];return e&&t.domNode.classList.add(i.options.selectedClass),e}));this.removeBlotsSelectedClass(o),this.selectedBlots=o}},{key:"removeBlotsSelectedClass",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Array.isArray(e)||(e=[e]),this.selectedBlots.forEach((function(i){-1===e.indexOf(i)&&i.domNode.classList.remove(t.options.selectedClass)}))}},{key:"hide",value:function(){this.hideOverlay(),this.removeModules(),this.activeEle&&this.options.activeClass&&this.activeEle.classList.remove(this.options.activeClass),this.activeEle=void 0,this.blot=void 0}},{key:"setUserSelect",value:function(t){var e=this;["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach((function(i){e.quill.root.style[i]=t,document.documentElement.style[i]=t}))}}])}();!function(t,e,i){(e=lt(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i}(at,"Modules",{Base:u,DisplaySize:v,Toolbar:T,Resize:U,Keyboard:ot}),window.Quill&&window.Quill.register("modules/resize",at);const ut=at;return n})()));