!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),a=i(o),r=n(6),u=i(r);!function(){void 0===window.gb&&(window.gb={}),window.gb["in"]={},gb["in"].common=new a["default"],gb["in"].main=new u["default"]}()},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(2),u=i(r),s=n(4),c=i(s),l=n(5),d=i(l),f=function(){function e(){o(this,e),this.onImmediate(),this.setEvents()}return a(e,[{key:"onImmediate",value:function(){gb["in"].conf=new u["default"],gb["in"].u=new c["default"],gb["in"].f=new d["default"]}},{key:"onReady",value:function(){}},{key:"onLoad",value:function(){}},{key:"setEvents",value:function(){$(document).on("ready",this.onReady.bind(this)),$(window).on("load",this.onLoad.bind(this))}}]),e}();t["default"]=f},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(3),u=i(r),s=function(){function e(){o(this,e),this.RELEASE=!0,this.FLG={LOG:!0,PARAM:!0,STATS:!0},this.RELEASE||(this.FLG={LOG:!1,PARAM:!1,STATS:!1}),this.defW=1300,this.defH=850,this.W=1200,this.H=750,this.spW=375,this.spH=667,this.bp=768,this.mode=null,this.keys=[{key:"movie",value:["morning","afternoon","night"]},{key:"data",value:["data01","data02","data03"]},{key:"product",value:["01"]}],this.switchMode(),this.soundData=new u["default"],this.sec02ImgNum=396,this.youtubeID01="xW2oNpNrKd0",this.youtubeID02="t2WeRRdAFeI",this.webFontLoaded=!1}return a(e,[{key:"switchMode",value:function(){var e,t,n,i,o,a,r;for(o=location.search.replace("?","").split("&"),e=0,n=o.length;e<n;e++){i=o[e],a=i.split("="),t=a[0],r=a[1];for(var u=0;u<this.keys.length;u++){var s=this.keys[u];if(s.key===t)for(var c=0;c<s.value.length;c++){var l=s.value[c];l===r&&(this[s.key]=l)}}}}}]),e}();t["default"]=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function o(){n(this,o)};t["default"]=i},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(){function e(){n(this,e),this.ua=window.navigator.userAgent.toLowerCase(),this.appV=window.navigator.appVersion.toLowerCase(),this.isResSP=null,this.isResPC=null,this.isPC=null,this.isSP=null,this.isTAB=null,this.isMB=null,this.isIE=null,this.isSetSPSize=!1,this.startTime=null,this.elapsedTime=null,this.now=new Date}return o(e,[{key:"random",value:function(e,t){return Math.floor(Math.random()*(t+1-e)+e)}},{key:"random2",value:function(e,t,n,i){return this.hit(2)?this.random(e,t):this.random(n,i)}},{key:"hit",value:function(e){return 0===this.random(0,e-1)}},{key:"range",value:function(e){return this.random(-e,e)}},{key:"map",value:function(e,t,n,i,o){var a;return e<i?t:e>o?n:(a=(n-t)/(o-i),(e-i)*a+t)}},{key:"decimal",value:function(e,t){var n,i;if(e=String(e),i=e.indexOf("."),0===t)return e.split(".")[0];if(i===-1){for(e+=".",n=0;n<t;)e+="0",n++;return e}return e=e.substr(0,i)+e.substr(i,t+1)}},{key:"clamp",value:function(e,t,n){return n*(e/t)}},{key:"degree",value:function(e){return 180*e/Math.PI}},{key:"radian",value:function(e){return e*Math.PI/180}},{key:"dist",value:function(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}},{key:"ascend",value:function(e){e.sort(function(e,t){return e>t?-1:e<t?1:0})}},{key:"descend",value:function(e){e.sort(function(e,t){return e<t?-1:e>t?1:0})}},{key:"constrain",value:function(e,t,n){return Math.min(n,Math.max(e,t))}},{key:"arrRand",value:function(e){return e[this.random(0,e.length-1)]}},{key:"shuffle",value:function(e){var t=[];t=e.slice();for(var n=t.length;n;){var i=Math.floor(Math.random()*n),o=t[--n];t[n]=t[i],t[i]=o}return t}},{key:"randomArr",value:function(e){for(var t=new Array,n=0;n<e;n++)t.push(n);return t=this.shuffleAry(t)}},{key:"sliceNull",value:function(e){var t,n,i,o,a;for(o=[],t=n=0,i=e.length;n<i;t=++n)a=e[t],null!==a&&o.push(a);return o}},{key:"sort",value:function(e,t,n){return void 0===n&&(n=!1),n?e.sort(function(e,n){return n[t]-e[t]}):e.sort(function(e,n){return e[t]-n[t]})}},{key:"getKey",value:function(e,t){var n=[];for(var i in e)e[i]==t&&n.push(i);return n}},{key:"unique",value:function(){return(new Date).getTime()}},{key:"buttonMode",value:function(e){return e?$("body").css("cursor","pointer"):$("body").css("cursor","default")}},{key:"isDeviceSP",value:function(){var e=["iphone","ipod","ipad","android","dream","cupcake","blackberry9500","blackberry9530","blackberry9520","blackberry9550","blackberry9800","webos","incognito","webmate"],t=new RegExp(e.join("|"),"i"),n=t.test(this.ua);n&&$("body").addClass("isDeviceSP"),this.isSP=n}},{key:"isDeviceTAB",value:function(){var e=this.ua.indexOf("windows")!=-1&&this.ua.indexOf("touch")!=-1||this.ua.indexOf("ipad")!=-1||this.ua.indexOf("android")!=-1&&this.ua.indexOf("mobile")==-1||this.ua.indexOf("firefox")!=-1&&this.ua.indexOf("tablet")!=-1||this.ua.indexOf("kindle")!=-1||this.ua.indexOf("silk")!=-1||this.ua.indexOf("playbook")!=-1;e&&$("body").addClass("isDeviceTAB"),this.isTAB=e}},{key:"isDeviceMB",value:function(){var e=this.ua.indexOf("windows")!=-1&&this.ua.indexOf("phone")!=-1||this.ua.indexOf("iphone")!=-1||this.ua.indexOf("ipod")!=-1||this.ua.indexOf("android")!=-1&&this.ua.indexOf("mobile")!=-1||this.ua.indexOf("firefox")!=-1&&this.ua.indexOf("mobile")!=-1||this.ua.indexOf("blackberry")!=-1;e&&$("body").addClass("isDeviceMB"),this.isMB=e}},{key:"isDevicePC",value:function(){return this.isSP||this.isTAB||this.isMB?void(this.isPC=!1):($("body").addClass("isDevicePC"),void(this.isPC=!0))}},{key:"isSmt",value:function(){return navigator.userAgent.indexOf("iPad")>0||navigator.userAgent.indexOf("iPhone")>0||navigator.userAgent.indexOf("iPod")>0||navigator.userAgent.indexOf("Android")>0}},{key:"isTablet",value:function(){return this.isIpad()||this.isAndroid()&&navigator.userAgent.indexOf("Mobile")===-1}},{key:"isIpad",value:function(){return navigator.userAgent.indexOf("iPad")>0}},{key:"isAndroid",value:function(){var e;return e=navigator.userAgent,e.indexOf("BlackBerry")>0||e.indexOf("Android")>0||e.indexOf("Windows Phone")>0}},{key:"isiPhone",value:function(){var e=new RegExp("iphone","i");return e.test(this.ua)}},{key:"isIos",value:function(){return navigator.userAgent.indexOf("iPad")>0||navigator.userAgent.indexOf("iPhone")>0||navigator.userAgent.indexOf("iPod")>0}},{key:"isPs3",value:function(){var e;return e=navigator.userAgent,e.indexOf("PLAYSTATION 3")>0}},{key:"isVita",value:function(){var e;return e=navigator.userAgent,e.indexOf("PlayStation Vita")>0}},{key:"isIe",value:function(){var e;return e=window.navigator.userAgent.toLowerCase(),e.indexOf("msie")!==-1||e.indexOf("trident/7")!==-1}},{key:"isWin",value:function(){return navigator.platform.indexOf("Win")!==-1}},{key:"isChrome",value:function(){return navigator.userAgent.indexOf("Chrome")>0}},{key:"isFF",value:function(){return window.navigator.userAgent.toLowerCase().indexOf("firefox")!==-1}},{key:"isSafari",value:function(){if(this.ua.indexOf("chrome")!=-1)return!1;if(this.ua.indexOf("lunascape")!=-1)return!1;var e=new RegExp("safari","i");return e.test(this.ua)}},{key:"isOpera",value:function(){var e=new RegExp("opera","i");return e.test(this.ua)}},{key:"isIOSUiView",value:function(){var e;return e=window.navigator.userAgent.toLowerCase(),this.isIos()&&e.indexOf("safari")===-1||this.isIos()&&e.indexOf("crios")>0||this.isIos()&&e.indexOf("gsa")>0}},{key:"isIe8Under",value:function(){var e;return e=navigator.appVersion.toLowerCase(),e=e.indexOf("msie")>-1?parseInt(e.replace(/.*msie[ ]/,"").match(/^[0-9]+/)):0,e<=8&&0!==e}},{key:"isIe9Under",value:function(){var e;return e=navigator.appVersion.toLowerCase(),e=e.indexOf("msie")>-1?parseInt(e.replace(/.*msie[ ]/,"").match(/^[0-9]+/)):0,e<=9&&0!==e}},{key:"isIe10Under",value:function(){var e;return e=navigator.appVersion.toLowerCase(),e=e.indexOf("msie")>-1?parseInt(e.replace(/.*msie[ ]/,"").match(/^[0-9]+/)):0,e<=10&&0!==e}},{key:"isIe11Under",value:function(){var e=this.isIe10Under()||this.ua.indexOf("trident")!=-1;return e}},{key:"isEdge",value:function(){log(this.ua.indexOf("AppleWebkit"),this.ua.indexOf("Edge"),this.ua,this.appV);var e=this.ua.indexOf("applewebkit")>=0&&this.ua.indexOf("edge")!=-1;return e}},{key:"isIEVersion",value:function(){return $("body").addClass("ie"),this.isIE=!0,this.appV.indexOf("msie 10.")!=-1?($("body").addClass("ie10"),"ie10"):this.appV.indexOf("msie 9.")!=-1?($("body").addClass("ie9"),"ie9"):this.appV.indexOf("msie 8.")!=-1?($("body").addClass("ie8"),"ie8"):this.appV.indexOf("msie 7.")!=-1?($("body").addClass("ie7"),"ie7"):this.appV.indexOf("msie 6.")!=-1?($("body").addClass("ie6"),"ie6"):this.appV.indexOf("trident")!=-1?($("body").addClass("ie11"),this.isIE11=!0,"ie11"):this.ua.indexOf("applewebkit")>=0&&this.ua.indexOf("edge")!=-1?($("body").addClass("isEdge"),"edge"):($("body").removeClass("ie"),void(this.isIE=!1))}},{key:"isAndroidVersion",value:function(){if(this.ua.indexOf("android")>0){var e=parseFloat(this.ua.slice(this.ua.indexOf("android")+8));return e}}},{key:"isiphoneVersion",value:function(){if(this.ua.indexOf("iPhone OS")>0){var e=parseFloat(this.ua.slice(this.ua.indexOf("iPhone OS")+10));return e}}},{key:"isDirection",value:function(){var e=window.innerWidth,t=window.innerHeight;t>e?($("body").addClass("portrait"),$("body").removeClass("landscape")):($("body").addClass("landscape"),$("body").removeClass("portrait"))}},{key:"isResponsive",value:function(e){void 0==e&&(e=375);var t=window.innerWidth;window.innerHeight;t>e?(this.isResSP=!1,this.isResPC=!0,$("body").removeClass("isResponsiveSP"),$("body").addClass("isResponsivePC")):(this.isResSP=!0,this.isResPC=!1,$("body").addClass("isResponsiveSP"),$("body").removeClass("isResponsivePC"))}},{key:"getParam",value:function(){var e=location.href,t=e.split("?")[1];if(void 0!=t){for(var n=t.split("&"),i={},o=0;o<n.length;o++)paramItem=n[o].split("="),i[paramItem[0]]=paramItem[1];return i}}},{key:"hash",value:function(){return location.hash.replace("#","")}},{key:"getCookie",value:function(e){var t,n,i,o,a,r;if(void 0===document.cookie||null===document.cookie)return null;for(n=document.cookie.split("; "),i=o=0,a=n.length;o<a;i=++o)if(r=n[i],t=r.split("="),t[0]===e)return t[1];return null}},{key:"setCookie",value:function(e,t){return document.cookie=e+"="+t}},{key:"isPCSP",value:function(){var e=location.href;this.isPC||this.isTAB||e.indexOf("pc")==-1||(location.href="/op_golden"),this.isPC&&e.indexOf("pc")==-1&&(location.href="/op_golden/pc/"),this.isTAB&&e.indexOf("pc")==-1&&(location.href="/op_golden/pc/"),this.isContain(e,"roulette")&&(location.href="/op_golden"),this.isContain(e,"topics")&&(location.href="/op_golden")}},{key:"getHexColor",value:function(e,t,n){var i;return i=(e<<16|t<<8|n).toString(16),"#"+new Array(7-i.length).join("0")+i}},{key:"isContain",value:function(e,t){return e.indexOf(t)!=-1}},{key:"add0",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-2;return("000000000000"+e).substr(t)}},{key:"floatFormat",value:function(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}},{key:"price",value:function(e){return String(e).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}},{key:"strReverse",value:function(e){var t,n,i;for(i="",n=e.length,t=1;t<=n;)i+=e.substr(-t,1),t++;return i}},{key:"replaceAll",value:function(e,t,n){return e.split(t).join(n)}},{key:"strReplace",value:function(e,t,n){var i=new RegExp(t,"g");return e.replace(i,n)}},{key:"getNow",value:function(){this.now=new Date}},{key:"start",value:function(){this.startTime=this.now.getTime()}},{key:"elapsed",value:function(){this.elapsedTime=this.now.getTime()-this.startTime}},{key:"m",value:function(){return Math.floor(this.elapsedTime+100/60)}},{key:"s",value:function(){return Math.floor(this.elapsedTime/1e3)}},{key:"ms",value:function(){return this.elapsedTime}},{key:"time",value:function(){this.getNow(),this.hour=this.now.getHours(),this.minute=this.now.getMinutes(),this.second=this.now.getSeconds(),this.millSecond=this.now.getMilliseconds()}},{key:"date",value:function(){return this.now.getDate()}},{key:"months",value:function(){new Array(31,28,31,30,31,30,31,31,30,31,30,31);return this.now.getMonth()+1}},{key:"year",value:function(){return this.now.getFullYear()}},{key:"day",value:function(){var e=["日","月","火","水","木","金","土"],t=(e[this.now.getDay()],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]);t[this.now.getDay()]}},{key:"afterDay",value:function(e,t){return new Date(e.getTime()+24*Number(t)*60*60*1e3)}},{key:"isObject",value:function(e,t){return"object"===("undefined"==typeof e?"undefined":i(e))&&null!==e}},{key:"isNumber",value:function(e){return"number"==typeof e}},{key:"isString",value:function(e){return"string"==typeof e}},{key:"isFunction",value:function(e){return"function"==typeof e}},{key:"isArray",value:function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{key:"isNull",value:function(e){return null===e}},{key:"isUndefined",value:function(e){return"undefined"==typeof e}},{key:"setImgSPSize",value:function(e){if(this.isResSP){var t=e,n=t.length;t.each(function(e){var t=Math.floor($(this).width()/2),i=Math.floor($(this).height()/2);$(this).attr({width:t,height:i}),n==e+1&&$(window).trigger("setSpZieEnd")})}}},{key:"setPrevent",value:function(){$(window).on("touchmove.noControl",function(e){e.preventDefault()})}},{key:"removePrevent",value:function(){$(window).off("touchmove.noControl")}},{key:"protocol",value:function(){return location.protocol}},{key:"host",value:function(){return location.hostname}},{key:"port",value:function(){return location.port}},{key:"path",value:function(){return location.pathname}},{key:"preventDefault",value:function(e){e=e||window.event,e.preventDefault&&e.preventDefault(),e.returnValue=!1}},{key:"preventDefaultForScrollKeys",value:function(e){if(keys[e.keyCode])return preventDefault(e),!1}},{key:"disableScroll",value:function(){window.addEventListener&&window.addEventListener("DOMMouseScroll",this.preventDefault,!1),window.onwheel=this.preventDefault,window.onmousewheel=document.onmousewheel=this.preventDefault,window.ontouchmove=this.preventDefault,document.onkeydown=this.preventDefaultForScrollKeys}},{key:"enableScroll",value:function(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",this.preventDefault,!1),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}}]),e}();t["default"]=a},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){n(this,e),this.blank(),this["debugger"](),this.requestAnimationFrame(),this.expandjQuery()}return i(e,[{key:"blank",value:function(){$(function(){$(".blank").attr("target","_blank")})}},{key:"debugger",value:function(){var e=gb["in"].conf.RELEASE,t=["log","debug","info","warn","error","dir","trace","assert","dirxml","group","groupEnd","time","timeEnd","count","profile","profileEnd"];"undefined"==typeof window.console&&(window.console={});for(var n in t)!function(t){console[t]&&!e&&"function"==typeof console[t]?window[t]=console[t].bind(console):window[t]=function(){}}(t[n])}},{key:"prepend",value:function(e){$("body").prepend(e)}},{key:"requestAnimationFrame",value:function(){var e=1e3/60;window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,e)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||function(e){window.clearTimeout(e)}}},{key:"expandjQuery",value:function(){jQuery.fn.extend({w:0,h:0,adjust:function(){var e=$(this).innerWidth(),t=$(this).innerHeight();$(this).css({position:"absolute",left:"50%",top:"50%","margin-left":"-"+e/2+"px","margin-top":"-"+t/2+"px"})},adjustW:function(){var e=$(this).innerWidth();$(this).innerHeight();$(this).css({position:"absolute",left:"50%","margin-left":"-"+e/2+"px"})},adjustH:function(){var e=($(this).innerWidth(),$(this).innerHeight());$(this).css({position:"absolute",top:"50%","margin-top":"-"+e/2+"px"})}})}},{key:"checkCssBlend",value:function(){"CSS"in window&&"supports"in window.CSS&&(window.CSS.supports("mix-blend-mode","soft-light")||document.documentElement.classList.add("not-mix-blend-mode")),log(gb["in"].u.isIE),gb["in"].u.isIE&&document.documentElement.classList.add("not-mix-blend-mode")}},{key:"notSaveImg",value:function(){gb["in"].u.isPC&&$(function(){$("img").on("contextmenu",function(){return!1})});var e=gb["in"].u.isAndroidVersion();if(void 0!=e&&e<5){var t;$("img").on("touchstart",function(){return t=setTimeout(function(){},500),!1}),$("img").on("touchend",function(){return clearTimeout(t),!1})}}}]),e}();t["default"]=o},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(7),u=i(r),s=function(){function e(){o(this,e),this.onImmediate(),this.setEvents()}return a(e,[{key:"onImmediate",value:function(){}},{key:"onReady",value:function(){var e=$("body").data("id");switch(e){case"top":new u["default"]}}},{key:"onLoad",value:function(){}},{key:"onRender",value:function(){}},{key:"setEvents",value:function(){$(document).on("ready",this.onReady.bind(this)),$(window).on("load",this.onLoad.bind(this))}}]),e}();t["default"]=s},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(8),u=i(r),s=function(){function e(){o(this,e),this.onImmediate(),this.setEvents()}return a(e,[{key:"onImmediate",value:function(){}},{key:"onLoad",value:function(){gb["in"].canvas=new u["default"]({output:document.getElementById("webgl-output")}),gb["in"].canvas.init()}},{key:"setEvents",value:function(){$(window).on("load",this.onLoad.bind(this))}}],[{key:"run",value:function(){}}]),e}();t["default"]=s},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(9),c=i(s),l=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.width=window.innerWidth,n.height=window.innerHeight,n.output=e.output||document.createElement("div"),n.camera=null,n.renderer=null,n.scene=null,n.cube=null,n.createCamera=n._createCamera.bind(n),n.createRenderer=n._createRenderer.bind(n),n.createScene=n._createScene.bind(n),n.createObject=n._createObject.bind(n),n.orbitControls=n._orbitControls.bind(n),n.onResize=n._onResize.bind(n),n.Update=n._Update.bind(n),n}return r(t,e),u(t,[{key:"init",value:function(){var e=this;this.createCamera(),this.createScene(),this.createRenderer(),this.orbitControls(),this.createObject(),this.Update(),window.addEventListener("resize",function(){e.onResize()},!1)}},{key:"_createCamera",value:function(){this.camera=new THREE.PerspectiveCamera(45,this.width/this.height,.1,1e3),this.camera.position.x=-30,this.camera.position.y=40,this.camera.position.z=30,this.camera.lookAt(new THREE.Vector3(0,0,0))}},{key:"_createRenderer",value:function(){this.renderer=new THREE.WebGLRenderer({alpha:!1,antialias:!1,stencil:!1,depth:!0,premultipliedAlpha:!1}),this.renderer.setClearColor(16777215),this.renderer.setPixelRatio(window.devicePixelRatio||1),this.renderer.setSize(this.width,this.height),this.output.appendChild(this.renderer.domElement)}},{key:"_createScene",value:function(){this.scene=new THREE.Scene}},{key:"_createObject",value:function(){var e=new THREE.BoxGeometry(4,4,4),t=new THREE.MeshBasicMaterial({color:0,wireframe:!0});this.cube=new THREE.Mesh(e,t),this.cube.position.x=3,this.cube.position.y=3,this.cube.position.z=3,this.scene.add(this.cube)}},{key:"_Update",value:function(){var e=this;requestAnimationFrame(function(){e.Update()}),this.renderer.render(this.scene,this.camera)}},{key:"_onResize",value:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}},{key:"_orbitControls",value:function(){this.controls=new THREE.OrbitControls(this.camera),this.controls.autoRotate=!0;var e=new THREE.Clock,t=e.getDelta();this.controls.update(t)}},{key:"setEvents",value:function(){$(window).on("load",this.onLoad.bind(this))}}]),t}(c["default"]);t["default"]=l},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();n(10);var a=function(){function e(){i(this,e)}return o(e,[{key:"init",value:function(){}}]),e}();t["default"]=a},function(e,t){"use strict";THREE.OrbitControls=function(e,t){function n(){return 2*Math.PI/60/60*H.autoRotateSpeed}function i(){return Math.pow(.95,H.zoomSpeed)}function o(e){F.theta-=e}function a(e){F.phi-=e}function r(e){H.object instanceof THREE.PerspectiveCamera?z/=e:H.object instanceof THREE.OrthographicCamera?(H.object.zoom=Math.max(H.minZoom,Math.min(H.maxZoom,H.object.zoom*e)),H.object.updateProjectionMatrix(),B=!0):H.enableZoom=!1}function u(e){H.object instanceof THREE.PerspectiveCamera?z*=e:H.object instanceof THREE.OrthographicCamera?(H.object.zoom=Math.max(H.minZoom,Math.min(H.maxZoom,H.object.zoom/e)),H.object.updateProjectionMatrix(),B=!0):H.enableZoom=!1}function s(e){Y.set(e.clientX,e.clientY)}function c(e){K.set(e.clientX,e.clientY)}function l(e){q.set(e.clientX,e.clientY)}function d(e){W.set(e.clientX,e.clientY),Z.subVectors(W,Y);var t=H.domElement===document?H.domElement.body:H.domElement;o(2*Math.PI*Z.x/t.clientWidth*H.rotateSpeed),a(2*Math.PI*Z.y/t.clientHeight*H.rotateSpeed),Y.copy(W),H.update()}function f(e){Q.set(e.clientX,e.clientY),J.subVectors(Q,K),J.y>0?r(i()):J.y<0&&u(i()),K.copy(Q),H.update()}function h(e){X.set(e.clientX,e.clientY),G.subVectors(X,q),ne(G.x,G.y),q.copy(X),H.update()}function p(e){}function v(e){e.deltaY<0?u(i()):e.deltaY>0&&r(i()),H.update()}function m(e){switch(e.keyCode){case H.keys.UP:ne(0,H.keyPanSpeed),H.update();break;case H.keys.BOTTOM:ne(0,-H.keyPanSpeed),H.update();break;case H.keys.LEFT:ne(H.keyPanSpeed,0),H.update();break;case H.keys.RIGHT:ne(-H.keyPanSpeed,0),H.update()}}function y(e){Y.set(e.touches[0].pageX,e.touches[0].pageY)}function b(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,i=Math.sqrt(t*t+n*n);K.set(0,i)}function w(e){q.set(e.touches[0].pageX,e.touches[0].pageY)}function g(e){W.set(e.touches[0].pageX,e.touches[0].pageY),Z.subVectors(W,Y);var t=H.domElement===document?H.domElement.body:H.domElement;o(2*Math.PI*Z.x/t.clientWidth*H.rotateSpeed),a(2*Math.PI*Z.y/t.clientHeight*H.rotateSpeed),Y.copy(W),H.update()}function E(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);Q.set(0,o),J.subVectors(Q,K),J.y>0?u(i()):J.y<0&&r(i()),K.copy(Q),H.update()}function k(e){X.set(e.touches[0].pageX,e.touches[0].pageY),G.subVectors(X,q),ne(G.x,G.y),q.copy(X),H.update()}function O(e){}function x(e){if(H.enabled!==!1){if(e.preventDefault(),e.button===H.mouseButtons.ORBIT){if(H.enableRotate===!1)return;s(e),$=I.ROTATE}else if(e.button===H.mouseButtons.ZOOM){if(H.enableZoom===!1)return;c(e),$=I.DOLLY}else if(e.button===H.mouseButtons.PAN){if(H.enablePan===!1)return;l(e),$=I.PAN}$!==I.NONE&&(document.addEventListener("mousemove",T,!1),document.addEventListener("mouseup",P,!1),H.dispatchEvent(_))}}function T(e){if(H.enabled!==!1)if(e.preventDefault(),$===I.ROTATE){if(H.enableRotate===!1)return;d(e)}else if($===I.DOLLY){if(H.enableZoom===!1)return;f(e)}else if($===I.PAN){if(H.enablePan===!1)return;h(e)}}function P(e){H.enabled!==!1&&(p(e),document.removeEventListener("mousemove",T,!1),document.removeEventListener("mouseup",P,!1),H.dispatchEvent(D),$=I.NONE)}function R(e){H.enabled===!1||H.enableZoom===!1||$!==I.NONE&&$!==I.ROTATE||(e.preventDefault(),e.stopPropagation(),v(e),H.dispatchEvent(_),H.dispatchEvent(D))}function C(e){H.enabled!==!1&&H.enableKeys!==!1&&H.enablePan!==!1&&m(e)}function A(e){if(H.enabled!==!1){switch(e.touches.length){case 1:if(H.enableRotate===!1)return;y(e),$=I.TOUCH_ROTATE;break;case 2:if(H.enableZoom===!1)return;b(e),$=I.TOUCH_DOLLY;break;case 3:if(H.enablePan===!1)return;w(e),$=I.TOUCH_PAN;break;default:$=I.NONE}$!==I.NONE&&H.dispatchEvent(_)}}function S(e){if(H.enabled!==!1)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(H.enableRotate===!1)return;if($!==I.TOUCH_ROTATE)return;g(e);break;case 2:if(H.enableZoom===!1)return;if($!==I.TOUCH_DOLLY)return;E(e);break;case 3:if(H.enablePan===!1)return;if($!==I.TOUCH_PAN)return;k(e);break;default:$=I.NONE}}function M(e){H.enabled!==!1&&(O(e),H.dispatchEvent(D),$=I.NONE)}function j(e){e.preventDefault()}this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-(1/0),this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:THREE.MOUSE.LEFT,ZOOM:THREE.MOUSE.MIDDLE,PAN:THREE.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return N.phi},this.getAzimuthalAngle=function(){return N.theta},this.reset=function(){H.target.copy(H.target0),H.object.position.copy(H.position0),H.object.zoom=H.zoom0,H.object.updateProjectionMatrix(),H.dispatchEvent(L),H.update(),$=I.NONE},this.update=function(){var t=new THREE.Vector3,i=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),a=i.clone().inverse(),r=new THREE.Vector3,u=new THREE.Quaternion;return function(){var e=H.object.position;return t.copy(e).sub(H.target),t.applyQuaternion(i),N.setFromVector3(t),H.autoRotate&&$===I.NONE&&o(n()),N.theta+=F.theta,N.phi+=F.phi,N.theta=Math.max(H.minAzimuthAngle,Math.min(H.maxAzimuthAngle,N.theta)),N.phi=Math.max(H.minPolarAngle,Math.min(H.maxPolarAngle,N.phi)),N.makeSafe(),N.radius*=z,N.radius=Math.max(H.minDistance,Math.min(H.maxDistance,N.radius)),H.target.add(U),t.setFromSpherical(N),t.applyQuaternion(a),e.copy(H.target).add(t),H.object.lookAt(H.target),H.enableDamping===!0?(F.theta*=1-H.dampingFactor,F.phi*=1-H.dampingFactor):F.set(0,0,0),z=1,U.set(0,0,0),!!(B||r.distanceToSquared(H.object.position)>V||8*(1-u.dot(H.object.quaternion))>V)&&(H.dispatchEvent(L),r.copy(H.object.position),u.copy(H.object.quaternion),B=!1,!0)}}(),this.dispose=function(){H.domElement.removeEventListener("contextmenu",j,!1),H.domElement.removeEventListener("mousedown",x,!1),H.domElement.removeEventListener("wheel",R,!1),H.domElement.removeEventListener("touchstart",A,!1),H.domElement.removeEventListener("touchend",M,!1),H.domElement.removeEventListener("touchmove",S,!1),document.removeEventListener("mousemove",T,!1),document.removeEventListener("mouseup",P,!1),window.removeEventListener("keydown",C,!1)};var H=this,L={type:"change"},_={type:"start"},D={type:"end"},I={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},$=I.NONE,V=1e-6,N=new THREE.Spherical,F=new THREE.Spherical,z=1,U=new THREE.Vector3,B=!1,Y=new THREE.Vector2,W=new THREE.Vector2,Z=new THREE.Vector2,q=new THREE.Vector2,X=new THREE.Vector2,G=new THREE.Vector2,K=new THREE.Vector2,Q=new THREE.Vector2,J=new THREE.Vector2,ee=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),U.add(e)}}(),te=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,1),e.multiplyScalar(t),U.add(e)}}(),ne=function(){var e=new THREE.Vector3;return function(t,n){var i=H.domElement===document?H.domElement.body:H.domElement;if(H.object instanceof THREE.PerspectiveCamera){var o=H.object.position;e.copy(o).sub(H.target);var a=e.length();a*=Math.tan(H.object.fov/2*Math.PI/180),ee(2*t*a/i.clientHeight,H.object.matrix),te(2*n*a/i.clientHeight,H.object.matrix)}else H.object instanceof THREE.OrthographicCamera?(ee(t*(H.object.right-H.object.left)/H.object.zoom/i.clientWidth,H.object.matrix),te(n*(H.object.top-H.object.bottom)/H.object.zoom/i.clientHeight,H.object.matrix)):H.enablePan=!1;
}}();H.domElement.addEventListener("contextmenu",j,!1),H.domElement.addEventListener("mousedown",x,!1),H.domElement.addEventListener("wheel",R,!1),H.domElement.addEventListener("touchstart",A,!1),H.domElement.addEventListener("touchend",M,!1),H.domElement.addEventListener("touchmove",S,!1),window.addEventListener("keydown",C,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{center:{get:function(){return this.target}},noZoom:{get:function(){return!this.enableZoom},set:function(e){this.enableZoom=!e}},noRotate:{get:function(){return!this.enableRotate},set:function(e){this.enableRotate=!e}},noPan:{get:function(){return!this.enablePan},set:function(e){this.enablePan=!e}},noKeys:{get:function(){return!this.enableKeys},set:function(e){this.enableKeys=!e}},staticMoving:{get:function(){return!this.enableDamping},set:function(e){this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return this.dampingFactor},set:function(e){this.dampingFactor=e}}})}]);