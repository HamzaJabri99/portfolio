(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{259:function(r,t,e){var content=e(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,e(98).default)("3e0d98e0",content,!0,{sourceMap:!1})},266:function(r,t,e){"use strict";e(259)},267:function(r,t,e){var o=e(97),n=e(176),c=e(177),l=e(178),d=o(!1),f=n(c),h=n(l);d.push([r.i,'@font-face{font-family:"Title";src:url('+f+')}@font-face{font-family:"Text";src:url('+h+')}/*! locomotive-scroll v4.1.3 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */html.has-scroll-smooth{overflow:hidden}html.has-scroll-dragging{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.has-scroll-smooth body{overflow:hidden}.has-scroll-smooth [data-scroll-container]{min-height:100vh}[data-scroll-direction=horizontal] [data-scroll-container]{height:100vh;display:inline-block;white-space:nowrap}[data-scroll-direction=horizontal] [data-scroll-section]{display:inline-block;vertical-align:top;white-space:nowrap;height:100%}.c-scrollbar{position:absolute;right:0;top:0;width:11px;height:100%;transform-origin:center right;transition:transform .3s,opacity .3s;opacity:0}.c-scrollbar:hover{transform:scaleX(1.45)}.c-scrollbar:hover,.has-scroll-dragging .c-scrollbar,.has-scroll-scrolling .c-scrollbar{opacity:1}[data-scroll-direction=horizontal] .c-scrollbar{width:100%;height:10px;top:auto;bottom:0;transform:scaleY(1)}[data-scroll-direction=horizontal] .c-scrollbar:hover{transform:scaleY(1.3)}.c-scrollbar_thumb{position:absolute;top:0;right:0;background-color:#000;opacity:.5;width:7px;border-radius:10px;margin:2px;cursor:-webkit-grab;cursor:grab}.has-scroll-dragging .c-scrollbar_thumb{cursor:-webkit-grabbing;cursor:grabbing}[data-scroll-direction=horizontal] .c-scrollbar_thumb{right:auto;bottom:0}body,html{background-color:#f3f1f5;margin:0;padding:0;box-sizing:border-box;overflow:scroll;overflow-x:hidden}::-webkit-scrollbar{width:0;background:transparent}::-webkit-scrollbar-thumb{background:red}body{font-family:Text}::-moz-selection{background:#ff6767;content:""}::selection{background:#ff6767;content:""}h1{font-family:"Title";margin:0;font-size:42px;font-weight:100;text-transform:uppercase;letter-spacing:2px}@media screen and (min-width:768px){h1{font-size:62px}}@media screen and (min-width:1280px){h1{font-size:120px}}h1:selection{background-color:red}h2{font-family:Text;text-transform:uppercase}h2,p{margin:5px 0;font-size:18px;letter-spacing:1px}p{line-height:20px}a{text-decoration:none;color:#030303}.padding{padding:80px 20px}@media screen and (min-width:768px){.padding{padding:80px 150px}}.info--card{color:#14213d}.info--card .title{text-align:left;font-size:20px;color:#f4acb7;margin-top:40px;line-height:10px;opacity:0;transform:translateX(100px);font-family:"Text"}.info--card .wrapper--career{margin-bottom:40px}.info--card .wrapper--career .subtitle{font-size:20px;font-weight:700;line-height:20px}.info--card .wrapper--career .wrapper--career::-moz-selection{background:#41f9ff;content:""}.info--card .wrapper--career .wrapper--career::selection{background:#41f9ff;content:""}.info--card .wrapper--career .separator{height:1px;background:#14213d;margin-top:40px;opacity:0;transform:translateX(-40px)}.info--card .wrapper--career .year{font-size:15px;color:grey}.info--card .wrapper--career .content{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;line-height:25px;opacity:0;transform:translateX(-40px)}@media screen and (min-width:1280px){.info--card{color:#14213d;text-align:left}.info--card .title{font-size:20px;color:#f4acb7;margin-top:40px;line-height:10px;font-family:"Text";opacity:0;transform:translateX(-40px)}.info--card .wrapper--career{margin-bottom:40px}.info--card .wrapper--career .subtitle{font-size:30px;font-weight:700;line-height:20px}.info--card .wrapper--career .separator{height:1px;background:#14213d;margin-top:40px}.info--card .wrapper--career .year{font-size:15px}.info--card .wrapper--career .content{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;line-height:25px}}',""]),r.exports=d},276:function(r,t,e){"use strict";e.r(t);e(56),e(69);var o={name:"InfoCard",props:{career:Object},mounted:function(){},methods:{linkify:function(r){var t;return t=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,r.replace(t,'<a href="$1" target="_blank">$1</a>')}}},n=(e(266),e(26)),component=Object(n.a)(o,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"info--card"},[e("div",{staticClass:"title"},[r._v(r._s(r.career.title))]),r._v(" "),r._l(r.career.content,(function(t,i){return e("div",{key:i,staticClass:"wrapper--career"},[e("p",{staticClass:"subtitle"},[r._v(r._s(t.title))]),r._v(" "),e("p",{staticClass:"year"},[r._v(r._s(t.year))]),r._v(" "),e("p",{staticClass:"content"},[r._v("\n      "+r._s(t.content)+"\n    ")]),r._v(" "),e("div",{staticClass:"separator"})])}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);