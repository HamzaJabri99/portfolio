(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{233:function(t,r,e){var content=e(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(98).default)("19b81704",content,!0,{sourceMap:!1})},237:function(t,r,e){"use strict";e(233)},238:function(t,r,e){var o=e(97),n=e(176),l=e(177),c=e(178),d=o(!1),h=n(l),f=n(c);d.push([t.i,'@font-face{font-family:"Title";src:url('+h+')}@font-face{font-family:"Text";src:url('+f+')}/*! locomotive-scroll v4.1.3 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */html.has-scroll-smooth{overflow:hidden}html.has-scroll-dragging{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.has-scroll-smooth body{overflow:hidden}.has-scroll-smooth [data-scroll-container]{min-height:100vh}[data-scroll-direction=horizontal] [data-scroll-container]{height:100vh;display:inline-block;white-space:nowrap}[data-scroll-direction=horizontal] [data-scroll-section]{display:inline-block;vertical-align:top;white-space:nowrap;height:100%}.c-scrollbar{position:absolute;right:0;top:0;width:11px;height:100%;transform-origin:center right;transition:transform .3s,opacity .3s;opacity:0}.c-scrollbar:hover{transform:scaleX(1.45)}.c-scrollbar:hover,.has-scroll-dragging .c-scrollbar,.has-scroll-scrolling .c-scrollbar{opacity:1}[data-scroll-direction=horizontal] .c-scrollbar{width:100%;height:10px;top:auto;bottom:0;transform:scaleY(1)}[data-scroll-direction=horizontal] .c-scrollbar:hover{transform:scaleY(1.3)}.c-scrollbar_thumb{position:absolute;top:0;right:0;background-color:#000;opacity:.5;width:7px;border-radius:10px;margin:2px;cursor:-webkit-grab;cursor:grab}.has-scroll-dragging .c-scrollbar_thumb{cursor:-webkit-grabbing;cursor:grabbing}[data-scroll-direction=horizontal] .c-scrollbar_thumb{right:auto;bottom:0}body,html{background-color:#f3f1f5;margin:0;padding:0;box-sizing:border-box;overflow:scroll;overflow-x:hidden}::-webkit-scrollbar{width:0;background:transparent}::-webkit-scrollbar-thumb{background:red}body{font-family:Text}::-moz-selection{background:#ff6767;content:""}::selection{background:#ff6767;content:""}h1{font-family:"Title";margin:0;font-size:42px;font-weight:100;text-transform:uppercase;letter-spacing:2px}@media screen and (min-width:768px){h1{font-size:62px}}@media screen and (min-width:1280px){h1{font-size:120px}}h1:selection{background-color:red}h2{font-family:Text;text-transform:uppercase}h2,p{margin:5px 0;font-size:18px;letter-spacing:1px}p{line-height:20px}a{text-decoration:none;color:#030303}.padding{padding:80px 20px}@media screen and (min-width:768px){.padding{padding:80px 150px}}.title--component{overflow:hidden}.title--component span{display:inline-block}.title--component span.new_letter{transform:translateY(-100%)}',""]),t.exports=d},239:function(t,r,e){"use strict";e.r(r);e(52),e(17),e(27),e(53),e(36),e(35),e(54),e(55),e(34);function o(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){d=!0,l=t},f:function(){try{c||null==e.return||e.return()}finally{if(d)throw l}}}}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}var l={name:"Title",data:function(){return{letters:[],new_letter:!1}},mounted:function(){this.cutTitle()},methods:{cutTitle:function(){var t,r=o(document.querySelectorAll(".title--component span"));try{for(r.s();!(t=r.n()).done;){t.value.remove()}}catch(t){r.e(t)}finally{r.f()}var e,n=o(this.$props.title);try{for(n.s();!(e=n.n()).done;){var l=e.value;this.letters.push(l)}}catch(t){n.e(t)}finally{n.f()}}},props:{title:{default:""}},watch:{title:function(t,r){this.cutTitle(),this.new_letter=!0}}},c=(e(237),e(26)),component=Object(c.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("h1",{staticClass:"title--component"},t._l(t.letters,(function(r,i){return e("span",{key:i,class:t.new_letter?"letters new_letter":"letters"},[t._v(t._s(r))])})),0)}),[],!1,null,null,null);r.default=component.exports}}]);