(function(e){function t(t){for(var n,o,a=t[0],c=t[1],s=t[2],l=0,f=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==i[a]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},i={app:0},u=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1b58d636":"10057ba6","chunk-ef0a916a":"cd7337e3"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-1b58d636":1,"chunk-ef0a916a":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1b58d636":"14a3c585","chunk-ef0a916a":"14a3c585"}[e]+".css",i=c.p+n,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var s=u[a],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===i))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){s=f[a],l=s.getAttribute("data-href");if(l===n||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||i,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],d.parentNode.removeChild(d),r(u)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}i[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="udesk-link-demo/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],u={name:"App"},a=u,c=(r("034f"),r("2877")),s=Object(c["a"])(a,o,i,!1,null,null,null),l=s.exports,f=(r("d3b7"),r("8c4f"));n["a"].use(f["a"]);var d=new f["a"]({mode:"history",routes:[{path:"/",component:function(){return r.e("chunk-ef0a916a").then(r.bind(null,"c3b0"))}},{path:"/profile",component:function(){return r.e("chunk-1b58d636").then(r.bind(null,"09ee"))}}]}),p=r("e688");p["a"].initApi({code:"xxxxx",link:"https://xxxxx.udesk.cn/im_client/?web_plugin_id=xxxx",im_user_key:"xxxxxxx",company_domain:"baidu"}),n["a"].config.productionTip=!1,new n["a"]({router:d,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,r){},e688:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));r("9911");var n=r("d4ec"),o=r("bee2"),i={code:"",link:"",im_user_key:"",company_domain:""},u=function(){function e(){Object(n["a"])(this,e)}return Object(o["a"])(e,null,[{key:"initApi",value:function(e){if(!e)throw new Error("js-udesk-link [UdeskApi] -> initApi() -> config=null");var t=e.code;if(!t)throw new Error("[UdeskApi] -> initApi() -> code=null");var r=e.link;if(!r)throw new Error("[UdeskApi] -> initApi() -> link=null");Object.assign(this.store,e)}},{key:"store",get:function(){return this._store||(this._store=i),this._store}},{key:"link",get:function(){return this.store.link||""}},{key:"code",get:function(){return this.store.code||""}},{key:"im_user_key",get:function(){return this.store.im_user_key||""}},{key:"companyDomain",get:function(){return this.store.company_domain||""}}]),e}();function a(e){var t=0,r="";try{for(var n in e){t>0&&(r+="&");var o=e[n]||"";r+=n,r+="=",r+=o,t+=1}}catch(i){console.log("js-udesk-link -> queryWithParams -> (let key in map) error=>",i),r=""}return r}r("a15b"),r("d81d"),r("fb6a"),r("d3b7"),r("25f0"),r("5cc6"),r("fb2c"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7");function c(e){e=e||"","string"!==typeof e&&(e=""+e);var t,r,n,o=[];for(t=0;t<e.length;t++)(r=e.charCodeAt(t))<128?o.push(r):r<2048?o.push(192+(r>>6&31),128+(63&r)):((n=55296^r)>>10==0?(r=(n<<10)+(56320^e.charCodeAt(++t))+65536,o.push(240+(r>>18&7),128+(r>>12&63))):o.push(224+(r>>12&15)),o.push(128+(r>>6&63),128+(63&r)));return o}function s(e){var t,r,n=new Uint8Array(c(e)),o=16+(n.length+8>>>6<<4);e=new Uint8Array(o<<2);for(e.set(new Uint8Array(n.buffer)),e=new Uint32Array(e.buffer),r=new DataView(e.buffer),d=0;d<o;d++)e[d]=r.getUint32(d<<2);e[n.length>>2]|=128<<24-8*(3&n.length),e[o-1]=n.length<<3;var i=[],u=[function(){return l[1]&l[2]|~l[1]&l[3]},function(){return l[1]^l[2]^l[3]},function(){return l[1]&l[2]|l[1]&l[3]|l[2]&l[3]},function(){return l[1]^l[2]^l[3]}],a=function(e,t){return e<<t|e>>>32-t},s=[1518500249,1859775393,-1894007588,-899497514],l=[1732584193,-271733879,null,null,-1009589776];for(l[2]=~l[0],l[3]=~l[1],d=0;d<e.length;d+=16){var f=l.slice(0);for(t=0;t<80;t++)i[t]=t<16?e[d+t]:a(i[t-3]^i[t-8]^i[t-14]^i[t-16],1),r=a(l[0],5)+u[t/20|0]()+l[4]+i[t]+s[t/20|0]|0,l[1]=a(l[1],30),l.pop(),l.unshift(r);for(t=0;t<5;t++)l[t]=l[t]+f[t]|0}r=new DataView(new Uint32Array(l).buffer);for(var d=0;d<5;d++)l[d]=r.getUint32(d<<2);var p=Array.prototype.map.call(new Uint8Array(new Uint32Array(l).buffer),(function(e){return(e<16?"0":"")+e.toString(16)})).join("");return p}function l(e){var t=(new Date).getTime(),r=2*t+"",n=t+"",o=e||"",i=u.im_user_key,c={nonce:r,timestamp:n,web_token:o},l=a(c);l+="&"+i;var f=s(l);return f&&"string"==typeof f?f=f.toUpperCase():(f="",console.log("ud_signature -> signature fail fail")),{nonce:r,timestamp:n,web_token:o,signature:f,im_user_key:i}}var f=r("53ca"),d=function(){function e(){Object(n["a"])(this,e)}return Object(o["a"])(e,null,[{key:"clearCustomer",value:function(){this.store.customer=null,this.store.customerUrl=""}},{key:"setCustomer",value:function(e){if(!e||"object"!=Object(f["a"])(e))return console.log("js-udesk-link [UdeskJS] -> setCustomer(map) -> map=null"),this.store.customer=null,void(this.store.customerUrl="");var t=e.c_email,r=e.c_phone,n=e.customer_token,o=e.c_id,i="";if(t?i=t:r?i=r:n?i=n:o&&(i=o),!i)throw new Error("js-udesk-link [UdeskJS] -> setCustomer(map) -> singId=null");var u=l(i),c=u.nonce,s=u.timestamp,d=u.web_token,p=u.signature,h=u.im_user_key;e.nonce=c,e.timestamp=s,e.web_token=d,e.signature=p,e.im_user_key=h;var m=a(e);this.store.customer=e,this.store.customerUrl=m}},{key:"getProductUrl",value:function(e){if(!e||"object"!=Object(f["a"])(e))return console.log("js-udesk-link [UdeskJS] -> getProductUrl(map) -> map=null"),"";var t=e.product_title;if("undefined"===typeof t)throw new Error("js-udesk-link [UdeskJS] -> getProductUrl(map) -> product_title=null");var r=a(e);return r}},{key:"getProductUrlAutoPrefix",value:function(e){if(!e||"object"!=Object(f["a"])(e))return console.log("js-udesk-link [UdeskJS] -> getProductUrlAutoPrefix(map) -> map=null"),"";var t=e.title;if("undefined"===typeof t)throw new Error("js-udesk-link [UdeskJS] -> getProductUrlAutoPrefix(map) -> title=null");var r={};for(var n in e){var o="product_"+n,i=e[n]||"";r[o]=i}return this.getProductUrl(r)}},{key:"getTicketUrl",value:function(e){if(!e||"object"!=Object(f["a"])(e))return console.log("js-udesk-link [UdeskJS] -> getTicketUrl(map) -> map=null"),"";var t=e.t_priority_id;if(!t)throw new Error("js-udesk-link [UdeskJS] -> getTicketUrl(map) -> t_priority_id=null");var r=a(e);return r}},{key:"getNoneProductUrl",value:function(){var e={title:" ",url:" ",image:" ",send:!1},t=this.getProductUrlAutoPrefix(e);return t}},{key:"toServiceIM",value:function(e){e=e||"",e&&(e="&"+e);var t=this.store.customerUrl||"";t&&(t="&"+t);var r=document.origin,n=u.link+t+e+"&c_cf_站点来源="+r;this.UdeskGotoUrl(n)}},{key:"websiteToSearch",value:function(e){var t=u.companyDomain||"";e=e||"";var r="https://www."+t+".com?udesk_wd="+e;this.UdeskGotoUrl(r)}},{key:"plugInToSearch",value:function(e){var t=u.companyDomain||"";e=e||"";var r="https://"+t+".udesk.cn/im_client/?udesk_wd="+e;this.UdeskGotoUrl(r)}},{key:"UdeskGotoUrl",value:function(e){var t=encodeURI(e);window.location=t}},{key:"store",get:function(){return this._store||(this._store={}),this._store}}]),e}(),p=d,h=u;t["b"]=p}});
//# sourceMappingURL=app.9c59d89c.js.map