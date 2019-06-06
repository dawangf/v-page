!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vPage",[],t):"object"==typeof exports?exports.vPage=t():e.vPage=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(1);i.d(t,"vPage",function(){return a.a});var n={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(t).length&&(t.language&&(a.a.props.language.default=t.language),t.align&&(a.a.props.align.default=t.align),"boolean"==typeof t.info&&(a.a.props.info.default=t.info),"boolean"==typeof t.border&&(a.a.props.border.default=t.border),"boolean"==typeof t.pageNumber&&(a.a.props.pageNumber.default=t.pageNumber),"boolean"==typeof t.first&&(a.a.props.first.default=t.first),"boolean"==typeof t.last&&(a.a.props.last.default=t.last),void 0!==t.pageSizeMenu&&(a.a.props.pageSizeMenu.default=t.pageSizeMenu)),e.component(a.a.name,a.a)}};t.default=n},function(e,t,i){"use strict";var a=i(2),n=(i.n(a),i(7)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e};t.a={name:"v-page",props:{value:{type:Number,default:0},totalRow:{type:Number,default:0},pageSizeMenu:{type:[Boolean,Array],default:function(){return[10,20,50,100]}},language:{type:String,default:"cn"},align:{type:String,default:"right"},disabled:{type:Boolean,default:!1},border:{type:Boolean,default:!0},info:{type:Boolean,default:!0},pageNumber:{type:Boolean,default:!0},first:{type:Boolean,default:!0},last:{type:Boolean,default:!0}},data:function(){return{pageSize:!1===this.pageSizeMenu?10:this.pageSizeMenu[0],lastPageSize:-1,currentPage:0,pageNumberSize:5,i18n:n.a[this.language]||n.a.cn}},computed:{totalPage:function(){return Math.ceil(this.totalRow/this.pageSize)},pageNumbers:function(){var e=1,t=void 0,i=Math.floor(this.pageNumberSize/2);return this.totalPage<this.pageNumberSize?t=this.totalPage:this.currentPage<=i?t=this.pageNumberSize:this.currentPage>=this.totalPage-i?(e=this.totalPage-this.pageNumberSize+1,t=this.totalPage):(e=this.currentPage-i,t=e+this.pageNumberSize-1),Array.apply(null,{length:t-e+1}).map(function(t,i){return e+i})},pageInfo:function(){return this.i18n.pageInfo.replace("#pageNumber#",this.currentPage).replace("#totalPage#",this.totalPage).replace("#totalRow#",this.totalRow)},classes:function(){return{"v-pagination--no-border":!this.border,"v-pagination--right":"right"===this.align,"v-pagination--center":"center"===this.align,"v-pagination--disabled":this.disabled}},isFirst:function(){return 1===this.currentPage},isLast:function(){return this.currentPage===this.totalPage}},watch:{value:function(e){"number"==typeof e&&e>0&&this.goPage(e,!1)}},render:function(e){var t=this,i=[];Array.isArray(this.pageSizeMenu)&&this.pageSizeMenu.length&&i.push(e("li",{class:"v-pagination__list"},[e("a",[e("span",this.i18n.pageLength),e("select",{attrs:{disabled:this.disabled},on:{change:function(e){e.srcElement&&e.srcElement.value&&(t.pageSize=Number(e.srcElement.value)),t.goPage()}}},this.pageSizeMenu.map(function(t){return e("option",{attrs:{value:t}},t)}))])])),this.info&&i.push(e("li",{class:"v-pagination__info"},[e("a",this.pageInfo)]));var a=function(i,a,n){return e("li",{class:i},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(){return t.switchPage(a)}}},n)])};return this.first&&i.push(a({disabled:this.isFirst},"first",this.i18n.first)),i.push(a({disabled:this.isFirst},"previous",this.i18n.previous)),this.pageNumber&&this.pageNumbers.forEach(function(e){i.push(a({active:e===t.currentPage},e,e))}),i.push(a({disabled:this.isLast},"next",this.i18n.next)),this.last&&i.push(a({disabled:this.isLast},"last",this.i18n.last)),e("div",{class:o({"v-pagination":!0},this.classes)},[e("ul",i)])},methods:{goPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("number"==typeof e){var i=e<1?1:e;e>this.totalPage&&this.totalPage>0&&(i=this.totalPage),i===this.currentPage&&this.pageSize===this.lastPageSize||(this.currentPage=i,t&&this.$emit("input",this.currentPage),this.lastPageSize=this.pageSize,this.change())}},reload:function(){this.change()},change:function(){this.$emit("page-change",{pageNumber:this.currentPage,pageSize:Number(this.pageSize)})},position:function(e){if("string"==typeof e)switch(e){case"first":return 1;case"previous":return this.currentPage-1;case"next":return this.currentPage+1;case"last":return this.totalPage}else if("number"==typeof e)return e},switchPage:function(e){this.disabled||this.goPage(this.position(e))}},mounted:function(){this.goPage(this.value?this.value:1)}}},function(e,t,i){var a=i(3);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(5)("2dbe92cf",a,!0,{})},function(e,t,i){t=e.exports=i(4)(!1),t.push([e.i,"div.v-pagination{margin:0;display:block}div.v-pagination.v-pagination--right{text-align:right}div.v-pagination.v-pagination--center{text-align:center}div.v-pagination.v-pagination--disabled li a{color:#999;cursor:default}div.v-pagination.v-pagination--disabled li a:hover{color:#999;background-color:#fff;box-shadow:none;z-index:auto}div.v-pagination.v-pagination--disabled li.active a{background-color:#f6f6f6}div.v-pagination>ul{display:inline-block;list-style:none;margin:0;padding:0;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:0 1px 2px rgba(0,0,0,.05);-ms-box-shadow:0 1px 2px rgba(0,0,0,.05);-o-box-shadow:0 1px 2px rgba(0,0,0,.05);box-shadow:0 1px 2px rgba(0,0,0,.05)}div.v-pagination>ul>li{text-align:center;margin:0;display:inline}div.v-pagination>ul>li>a{margin:0 0 0 -1px;position:relative;border:1px solid #dee2e6;padding:6px 12px;line-height:1.43;box-shadow:none;background-color:#fff;font-size:14px;display:inline-block;text-decoration:none;color:#333;-webkit-transition:all .5s cubic-bezier(.175,.885,.32,1);-moz-transition:all .5s cubic-bezier(.175,.885,.32,1);-ms-transition:all .5s cubic-bezier(.175,.885,.32,1);-o-transition:all .5s cubic-bezier(.175,.885,.32,1);transition:all .5s cubic-bezier(.175,.885,.32,1)}div.v-pagination>ul>li>a:hover{z-index:2;-webkit-box-shadow:0 0 8px rgba(0,0,0,.2);-moz-box-shadow:0 0 8px rgba(0,0,0,.2);-ms-box-shadow:0 0 8px rgba(0,0,0,.2);-o-box-shadow:0 0 8px rgba(0,0,0,.2);box-shadow:0 0 8px rgba(0,0,0,.2)}div.v-pagination>ul>li.disabled>a,div.v-pagination>ul>li.v-pagination__info>a,div.v-pagination>ul>li.v-pagination__list>a{color:#999;cursor:default}div.v-pagination>ul>li.disabled>a:hover,div.v-pagination>ul>li.v-pagination__info>a:hover,div.v-pagination>ul>li.v-pagination__list>a:hover{color:#999;background-color:#fff;box-shadow:none;z-index:auto}div.v-pagination>ul>li.active>a{cursor:default;color:#999;background-color:#eee}div.v-pagination>ul>li.active>a:hover{box-shadow:none;z-index:auto}div.v-pagination>ul>li:first-child>a{border-left-width:1px;-webkit-border-bottom-left-radius:2px;-moz-border-bottom-left-radius:2px;-ms-border-bottom-left-radius:2px;-o-border-bottom-left-radius:2px;border-bottom-left-radius:2px;-webkit-border-top-left-radius:2px;-moz-border-top-left-radius:2px;-ms-border-top-left-radius:2px;-o-border-top-left-radius:2px;border-top-left-radius:2px}div.v-pagination>ul>li:last-child>a{-webkit-border-top-right-radius:2px;-moz-border-top-right-radius:2px;-ms-border-top-right-radius:2px;-o-border-top-right-radius:2px;border-top-right-radius:2px;-webkit-border-bottom-right-radius:2px;-moz-border-bottom-right-radius:2px;-ms-border-bottom-right-radius:2px;-o-border-bottom-right-radius:2px;border-bottom-right-radius:2px}div.v-pagination>ul>li.v-pagination__list select{margin-left:5px;width:auto!important;font-size:12px;padding:0;border:1px solid #ccc;color:#333;outline:0}div.v-pagination>ul>li.v-pagination__list select:hover{-webkit-box-shadow:0 0 2px rgba(0,0,0,.2);-moz-box-shadow:0 0 2px rgba(0,0,0,.2);-ms-box-shadow:0 0 2px rgba(0,0,0,.2);-o-box-shadow:0 0 2px rgba(0,0,0,.2);box-shadow:0 0 2px rgba(0,0,0,.2)}div.v-pagination>ul>li.v-pagination__list select[disabled]{color:#999}div.v-pagination.v-pagination--no-border>ul{box-shadow:none}div.v-pagination.v-pagination--no-border>ul>li:not(.active):not(.disabled):not(.v-pagination__info):not(.v-pagination__list) a:hover{box-shadow:none;z-index:auto;background-color:#ddd}div.v-pagination.v-pagination--no-border>ul>li.active a{background-color:#f6f6f6;color:#aaa}div.v-pagination.v-pagination--no-border>ul>li>a{border:0}div.v-pagination.v-pagination--no-border>ul>li>a:hover{z-index:auto}",""])},function(e,t){function i(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var o=a(n);return[i].concat(n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"})).concat([o]).join("\n")}return[i].join("\n")}function a(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var a=i(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(a[o]=!0)}for(n=0;n<e.length;n++){var r=e[n];"number"==typeof r[0]&&a[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},function(e,t,i){function a(e){for(var t=0;t<e.length;t++){var i=e[t],a=p[i.id];if(a){a.refs++;for(var n=0;n<a.parts.length;n++)a.parts[n](i.parts[n]);for(;n<i.parts.length;n++)a.parts.push(o(i.parts[n]));a.parts.length>i.parts.length&&(a.parts.length=i.parts.length)}else{for(var r=[],n=0;n<i.parts.length;n++)r.push(o(i.parts[n]));p[i.id]={id:i.id,refs:1,parts:r}}}}function n(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,i,a=document.querySelector("style["+v+'~="'+e.id+'"]');if(a){if(f)return h;a.parentNode.removeChild(a)}if(x){var o=c++;a=g||(g=n()),t=r.bind(null,a,o,!1),i=r.bind(null,a,o,!0)}else a=n(),t=s.bind(null,a),i=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else i()}}function r(e,t,i,a){var n=i?"":a.css;if(e.styleSheet)e.styleSheet.cssText=m(t,n);else{var o=document.createTextNode(n),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function s(e,t){var i=t.css,a=t.media,n=t.sourceMap;if(a&&e.setAttribute("media",a),b.ssrId&&e.setAttribute(v,t.id),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=i(6),p={},d=l&&(document.head||document.getElementsByTagName("head")[0]),g=null,c=0,f=!1,h=function(){},b=null,v="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i,n){f=i,b=n||{};var o=u(e,t);return a(o),function(t){for(var i=[],n=0;n<o.length;n++){var r=o[n],s=p[r.id];s.refs--,i.push(s)}t?(o=u(e,t),a(o)):o=[];for(var n=0;n<i.length;n++){var s=i[n];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete p[s.id]}}}};var m=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var i=[],a={},n=0;n<t.length;n++){var o=t[n],r=o[0],s=o[1],l=o[2],u=o[3],p={id:e+":"+n,css:s,media:l,sourceMap:u};a[r]?a[r].parts.push(p):i.push(a[r]={id:r,parts:[p]})}return i}},function(e,t,i){"use strict";var a={cn:{pageLength:"每页记录数 ",pageInfo:"当前显示第 #pageNumber# / #totalPage# 页（共#totalRow#条记录）",first:"首页",previous:"«",next:"»",last:"尾页"},en:{pageLength:"Page length ",pageInfo:"Current #pageNumber# / #totalPage# （total #totalRow# records）",first:"First",previous:"«",next:"»",last:"Last"},jp:{pageLength:"ページごとの記録数",pageInfo:"現在の第 #pageNumber# / #totalPage# ページ（全部で #totalRow# 条の記録）",first:"トップページ",previous:"«",next:"»",last:"尾のページ"}};t.a=a}])});
//# sourceMappingURL=v-page.js.map