(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c17c310"],{"09ee":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"}},[n("div",{staticStyle:{margin:"60px 0 49px 0"}},[n("service-btn")],1),n("tabbar")],1)},i=[],c=n("4ade"),a=n("26fc"),s={components:{ServiceBtn:c["a"],tabbar:a["a"]}},o=s,l=n("9ca4"),u=Object(l["a"])(o,r,i,!1,null,null,null);t["default"]=u.exports},"0f90":function(e,t,n){},"22ef":function(e,t,n){"use strict";var r=n("efe2");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},"26fc":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"tab_bar"}},[n("div",{staticClass:"tab_bar_item",class:{active:0==e.selectIndex},on:{click:function(t){return e.itemClick(0)}}},[e._v("首页")]),n("div",{staticClass:"tab_bar_item",class:{active:0!=e.selectIndex},on:{click:function(t){return e.itemClick(1)}}},[e._v("我的")])])},i=[],c=(n("e35a"),n("5e9f"),{data:function(){return{selectIndex:0}},created:function(){var e=this.$route.path;this.selectIndex="/"==e?0:1},methods:{itemClick:function(e){this.selectIndex!=e&&(this.selectIndex=e,0==e?this.$router.replace({path:"/"}):this.$router.replace({path:"/profile"}))}}}),a=c,s=(n("d7ef"),n("9ca4")),o=Object(s["a"])(a,r,i,!1,null,"9f8ca7a8",null);t["a"]=o.exports},"2f3b":function(e,t,n){},"38eb":function(e,t,n){"use strict";var r=n("f62c").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"4ade":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"service"},[n("h2",[e._v("udesk-js-link demo")]),e._m(0),n("div",{staticClass:"s_b_switch",on:{click:e.swithUserInfo}},[e._v(e._s(e.userInfoEnable?"启用[用户信息]":"关闭[用户信息]"))]),n("div",{staticClass:"s_b_switch",on:{click:e.swithProduct}},[e._v(e._s(e.productEnable?"启用[咨询对象]":"关闭[咨询对象]"))]),n("div",{staticClass:"s_b_switch",on:{click:e.swithTicket}},[e._v(e._s(e.ticketEnable?"启用[工单信息]":"关闭[工单信息]"))]),n("div",{staticClass:"s_b_switch",on:{click:e.openWebsiteToSearch}},[e._v(e._s("自定义搜索关键词 - 第三方网站链接示例（如：公司官网）"))]),n("div",{staticClass:"s_b_switch",on:{click:e.openPlugInToSearch}},[e._v(e._s("自定义搜索关键词 - 网页插件链接示例"))]),n("div",{staticClass:"s_b_switch service_btn",on:{click:e.toService}},[e._v(" 联系客服 ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.userInfoEnable,expression:"userInfoEnable"}],staticClass:"des"},[n("div",[e._v("用户信息")]),n("div",[e._v(e._s(e.userInfo))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.productEnable,expression:"productEnable"}],staticClass:"des"},[n("div",[e._v("咨询对象")]),n("div",[e._v(e._s(e.product))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ticketEnable,expression:"ticketEnable"}],staticClass:"des"},[n("div",[e._v("工单信息")]),n("div",[e._v(e._s(e.ticket))])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("项目默认 "),n("b",[e._v("./src/main.js")]),e._v(" 对 "),n("b",[e._v("RXUdeskJSApi")]),e._v(" 初始化数据是不对的，记得修改")])}],c=n("e688"),a={mounted:function(){var e=this._getUDLocalCache();this._setUDLocalCache("1"),e&&setTimeout((function(){window.location.reload()}),100)},methods:{ud_toSeriveMinin:function(){this._setUDLocalCache("0")},_setUDLocalCache:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1";localStorage.udeskRefresh=e,window.udeskRefresh=e},_getUDLocalCache:function(){var e=!0;return"1"!=localStorage.udeskRefresh&&"1"!=window.udeskRefresh||(e=!1),e}}},s=a,o={mixins:[s],props:{userInfo:{type:Object,default:function(){return null}},product:{type:Object,default:function(){return null}},ticket:{type:Object,default:function(){return null}}},data:function(){return{userInfoEnable:!1,productEnable:!1,ticketEnable:!1}},methods:{swithUserInfo:function(){var e=!this.userInfoEnable;e&&(this.userInfoEnable=e)},swithProduct:function(){var e=!this.productEnable;this.productEnable=e},swithTicket:function(){var e=!this.ticketEnable;this.ticketEnable=e},openWebsiteToSearch:function(){c["b"].websiteToSearch("srxboys_website")},openPlugInToSearch:function(){c["b"].plugInToSearch("srxboys_plug")},toService:function(){var e="";if((this.userInfoEnable||this.userInfo)&&c["b"].setCustomer(this.userInfo),e=this.productEnable||this.product?c["b"].getProductUrlAutoPrefix(this.product):c["b"].getNoneProductUrl(),this.ticketEnable||this.ticket){var t=c["b"].getTicketUrl(this.ticket);e?e+="&"+t:e=t}console.log("url=>",e),this.ud_toSeriveMinin(),c["b"].toServiceIM(e)}}},l=o,u=(n("8496"),n("9ca4")),f=Object(u["a"])(l,r,i,!1,null,"b19b5ef0",null);t["a"]=f.exports},5139:function(e,t,n){"use strict";var r=n("99ad"),i=n("22ef"),c=RegExp.prototype.exec,a=String.prototype.replace,s=c,o=function(){var e=/a/,t=/b*/g;return c.call(e,"a"),c.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||l;f&&(s=function(e){var t,n,i,s,f=this,v=l&&f.sticky,d=r.call(f),h=f.source,p=0,b=e;return v&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),b=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(h="(?: "+h+")",b=" "+b,p++),n=new RegExp("^(?:"+h+")",d)),u&&(n=new RegExp("^"+h+"$(?!\\s)",d)),o&&(t=f.lastIndex),i=c.call(v?n:f,b),v?i?(i.input=i.input.slice(p),i[0]=i[0].slice(p),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:o&&i&&(f.lastIndex=f.global?i.index+i[0].length:t),u&&i&&i.length>1&&a.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),e.exports=s},"59da":function(e,t,n){var r=n("2118"),i=n("5139");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"5e9f":function(e,t,n){"use strict";var r=n("b2a2"),i=n("857c"),c=n("3553"),a=n("d88d"),s=n("3da3"),o=n("2732"),l=n("38eb"),u=n("59da"),f=Math.max,v=Math.min,d=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,b=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var _=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=r.REPLACE_KEEPS_$0,E=_?"$":"$0";return[function(n,r){var i=o(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,i,r):t.call(String(i),n,r)},function(e,r){if(!_&&x||"string"===typeof r&&-1===r.indexOf(E)){var c=n(t,e,this,r);if(c.done)return c.value}var o=i(e),d=String(this),h="function"===typeof r;h||(r=String(r));var p=o.global;if(p){var I=o.unicode;o.lastIndex=0}var w=[];while(1){var k=u(o,d);if(null===k)break;if(w.push(k),!p)break;var S=String(k[0]);""===S&&(o.lastIndex=l(d,a(o.lastIndex),I))}for(var m="",C=0,R=0;R<w.length;R++){k=w[R];for(var y=String(k[0]),T=f(v(s(k.index),d.length),0),U=[],$=1;$<k.length;$++)U.push(b(k[$]));var P=k.groups;if(h){var A=[y].concat(U,T,d);void 0!==P&&A.push(P);var O=String(r.apply(void 0,A))}else O=g(y,d,T,U,P,r);T>=C&&(m+=d.slice(C,T)+O,C=T+y.length)}return m+d.slice(C)}];function g(e,n,r,i,a,s){var o=r+e.length,l=i.length,u=p;return void 0!==a&&(a=c(a),u=h),t.call(s,u,(function(t,c){var s;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(o);case"<":s=a[c.slice(1,-1)];break;default:var u=+c;if(0===u)return t;if(u>l){var f=d(u/10);return 0===f?t:f<=l?void 0===i[f-1]?c.charAt(1):i[f-1]+c.charAt(1):t}s=i[u-1]}return void 0===s?"":s}))}}))},8496:function(e,t,n){"use strict";var r=n("0f90"),i=n.n(r);i.a},b2a2:function(e,t,n){"use strict";n("e35a");var r=n("1944"),i=n("efe2"),c=n("90fb"),a=n("5139"),s=n("0fc1"),o=c("species"),l=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=c("replace"),v=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var h=c(e),p=!i((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),b=p&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!p||!b||"replace"===e&&(!l||!u||v)||"split"===e&&!d){var _=/./[h],x=n(h,""[e],(function(e,t,n,r,i){return t.exec===a?p&&!i?{done:!0,value:_.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),E=x[0],g=x[1];r(String.prototype,e,E),r(RegExp.prototype,h,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}f&&s(RegExp.prototype[h],"sham",!0)}},d7ef:function(e,t,n){"use strict";var r=n("2f3b"),i=n.n(r);i.a},e35a:function(e,t,n){"use strict";var r=n("1c8b"),i=n("5139");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})}}]);