/**
 *  name: @jswork/gm-sdk
 *  description: Sdk for tampermonkey based on jQuery/nx.
 *  homepage: https://github.com/afeiship/gm-sdk
 *  version: 1.0.2
 *  date: 2020-12-23T02:44:20.582Z
 *  license: MIT
 */

!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}var e=n((function(n,e){(function(){var r,i,o,s,a,u,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,l=c||f||Function("return this")(),_=e&&!e.nodeType&&e,h=_&&n&&!n.nodeType&&n,p=l.nx=l.nx||{BREAKER:{},VERSION:"1.0.2",DEBUG:!1,GLOBAL:l};h?((h.exports=p).nx=p,_.nx=p):l.nx=p,r=Array.prototype,i=Object.prototype.hasOwnProperty,o=/\[(\w+)\]/g,p.noop=function(){},p.stubTrue=function(){return!0},p.stubFalse=function(){return!1},p.stubValue=function(t){return t},p.error=function(t){throw new Error(t)},p.try=function(t){try{t()}catch(t){}},p.forEach=function(t,n,e){var r,i=t.length;for(r=0;r<i&&n.call(e,t[r],r,t)!==p.BREAKER;r++);},p.forIn=function(t,n,e){var r;for(r in t)if(i.call(t,r)&&n.call(e,r,t[r],t)===p.BREAKER)break},p.each=function(t,n,e){var r,o,s=function(r,i,o){return n.call(e,r,i,t,o)===p.BREAKER};if(t)if("number"==typeof(o=t.length))for(r=0;r<o&&!s(r,t[r],!0);r++);else for(r in t)if(i.call(t,r)&&s(r,t[r],!1))break},p.map=function(t,n,e){var r=[];return p.each(t,(function(){var t=n.apply(e,arguments);if(t===p.BREAKER)return p.BREAKER;r.push(t)})),r},p.mix=function(t){var n,e,r=t||{},i=arguments;for(n=1,e=i.length;n<e;n++)p.forIn(i[n],(function(t,n){r[t]=n}));return r},p.slice=function(t,n,e){return r.slice.call(t,n,e)},p.set=function(t,n,e){for(var r=n.replace(o,"$1").split("."),i=t||p.GLOBAL,s=r.length-1,a=r[s],u=0;u<s;u++){var c=r[u],f=isNaN(+r[u+1])?{}:[];i=i[c]=i[c]||f}return i[a]=e,t},p.get=function(t,n,e){if(!n)return t;var r=n.replace(o,".$1").split("."),i=t||p.GLOBAL;return r.forEach((function(t){i=i&&i[t]})),void 0!==e&&null==i?e:i},p.path=function(t,n,e){return null==e?this.get(t,n):this.set(t,n,e)},s=function(){},a={__class_id__:0,__type__:"nx.RootClass",__base__:Object,__meta__:{},__static__:!1,__statics__:{},__properties__:{},__methods__:{},__method_init__:p.noop,__static_init__:p.noop},u={base:function(){var t,n=this.base.caller;if(n&&(t=n.__base__))return t.apply(this,arguments)},parent:function(t){var n=void 0===this.__id__,e=p.slice(arguments,1),r=n?this.__base__:this.__base__.prototype,i=this["@"+t].__type__,o=["get","set"][e.length];switch(i){case"method":return r[t].apply(this,e);case"property":return r["@"+t][o].apply(this,e)}}},a.__methods__=s.prototype=p.mix({constructor:s,init:p.noop,destroy:p.noop,toString:function(){return"[Class@"+this.__type__+"]"}},u),p.mix(a.__statics__,u),p.mix(s,a),p.mix(s,a.__statics__),p.RootClass=s,p.defineProperty=function(t,n,e,r){var i,o,s,a,u,c="@"+n,f=e&&"object"==typeof e?e:{value:e};return"value"in f?(a=f.value,u="_"+n,i=function(){return u in this?this[u]:"function"==typeof a?a.call(this):a},o=function(t){this[u]=t}):(i=e.get||t[c]&&t[c].get||p.noop,o=e.set||t[c]&&t[c].set||p.noop),c in t&&(i.__base__=t[c].get,o.__base__=t[c].set),s=t[c]={__meta__:e,__name__:n,__type__:"property",__static__:!!r,get:i,set:o,configurable:!0},Object.defineProperty(t,n,s),s},p.defineMethod=function(t,n,e,r){var i="@"+n;return t[n]=e,t[i]={__meta__:e,__name__:n,__type__:"method",__static__:!!r}},p.defineBombMethod=function(t,n,e,r){n.split(",").forEach((function(n,i){p.defineMethod(t,n,e.call(t,n,i),r)}))},p.defineMembers=function(t,n,e,r){p.forIn(e,(function(e,i){e.indexOf(",")>-1?p.defineBombMethod(n,e,i,r):p["define"+t](n,e,i,r)}))},function(){var t=1,n=0,e="nx.Anonymous";function r(t,n){this.type=t,this.meta=n,this.base=n.extends||p.RootClass,this.$base=this.base.prototype,this.__class_meta__={},this.__class__=null,this.__constructor__=null}r.prototype={constructor:r,initMetaProcessor:function(){var n=this.meta,e=n.methods||{},r=n.statics||{};p.mix(this.__class_meta__,{__type__:this.type,__meta__:n,__base__:this.base,__class_id__:t++,__method_init__:e.init||this.base.__method_init__,__static_init__:r.init||this.base.__static_init__,__static__:!n.methods&&!!n.statics})},createClassProcessor:function(){var t=this;this.__class__=function(){this.__id__=n++,t.__constructor__.apply(this,arguments),t.registerDebug(this)}},inheritProcessor:function(){var t=this.__class_meta__;this.inheritedClass(t),this.defineMethods(t,!0),this.defineMethods(t,!1),this.defineProperties(t)},inheritedClass:function(t){var n=function(){},e=this.__class__;n.prototype=this.$base,e.prototype=new n,e.prototype.$base=this.$base,e.prototype.constructor=e},defineMethods:function(t,n){var e=n?"statics":"methods",r="__"+e+"__",i=n?this.__class__:this.__class__.prototype,o=(n?this.base:this.base.prototype)[r]||{};p.forIn(this.meta[e],(function(t,n){o[t]&&"function"==typeof n&&(n.__base__=o[t])})),i[r]=p.mix(t[r],o,this.meta[e]),p.defineMembers("Method",i,i[r],n)},defineProperties:function(t){var n=t.__static__,e=n?this.__class__:this.__class__.prototype;e.__properties__=p.mix(t.__properties__,this.meta.properties),p.defineMembers("Property",e,e.__properties__,n)},methodsConstructorProcessor:function(){var t=this.__class_meta__;this.__constructor__=function(){t.__method_init__.apply(this,arguments)}},staticsConstructorProcessor:function(){this.__class_meta__.__static_init__.call(this.__class__)},registerProcessor:function(){var t=this.__class__,n=this.type,r=this.__class_meta__;p.mix(t.prototype,r),p.mix(t,r),-1===n.indexOf(e)&&p.set(p.GLOBAL,n,t)},registerDebug:function(t){p.DEBUG&&(p.set(p,"__instances__."+(n-1),t),p.set(p,"__instances__.length",n))}},p.declare=function(n,i){var o=new r("string"==typeof n?n:e+t,i||n);return o.initMetaProcessor(),o.createClassProcessor(),o.inheritProcessor(),o.methodsConstructorProcessor(),o.staticsConstructorProcessor(),o.registerProcessor(),o.__class__}}()}).call(t)})),r=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i=["GM_addStyle","GM_deleteValue","GM_listValues","GM_addValueChangeListener","GM_removeValueChangeListener","GM_setValue","GM_getValue","GM_log","GM_getResourceText","GM_getResourceURL","GM_registerMenuCommand","GM_unregisterMenuCommand","GM_openInTab","GM_xmlhttpRequest","GM_download","GM_getTab","GM_saveTab","GM_getTabs","GM_notification","GM_setClipboard","GM_info"],o=r.declare("nx.GmApi",{statics:{version:"4.10.0",generate:function(t){var n={};return i.forEach((function(e){var r=e.split("_")[1];this[r]=n[r]=t[e]}),this),n}}});t.exports&&(t.exports=o)}()})),i=(n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e;r.json=JSON,r.parse=function(t){try{return JSON.parse(t)}catch(t){}return t},r.stringify=function(t){try{return JSON.stringify(t)}catch(t){}return t},t.exports&&(t.exports={json:r.json,parse:r.parse,stringify:r.stringify})}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e;r.slice2str=function(t,n,e){if(t||!(t.length<=n)){var r=e||0;return[t.substr(0,n),t.substr(n+r)]}},t.exports&&(t.exports=r.slice2str)}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i="@";r.json;r.slice2str;var o=r.declare("nx.AbstractStorage",{methods:{init:function(t){this.engine=t.engine,this.prefix=t.prefix||"",this.options=t,this.setAccessor()},setAccessor:function(){this.accessor={get:this.options.get||"getItem",set:this.options.set||"setItem",remove:this.options.remove||"removeItem",clear:this.options.clear||"clear"}},serialize:function(t){return r.stringify(t)},deserialize:function(t){return r.parse(t)},set:function(t,n){var e=t.indexOf(".");if(e>-1){var i=r.slice2str(t,e,1),o=this.get(i[0])||{};r.set(o,i[1],n),this.set(i[0],o)}else this.engine[this.accessor.set](this.__key(t),this.serialize(n))},sets:function(t){r.each(t,(function(t,n){this.set(t,n)}),this)},get:function(t){var n=t.indexOf(".");if(n>-1){var e=r.slice2str(t,n,1),i=this.get(e[0])||{};return r.get(i,e[1])}var o=this.engine[this.accessor.get](this.__key(t));return this.deserialize(o)},gets:function(t){var n={},e=this.__keys(t);return r.each(e,(function(t,e){n[e]=this.get(e)}),this),n},del:function(t){this.engine[this.accessor.remove](this.__key(t))},dels:function(t){var n=this.__keys(t);r.each(n,(function(t,n){this.del(n)}),this)},clear:function(){this.engine[this.accessor.clear]()},keys:function(){return Object.keys(this.engine)},__key:function(t){var n=this.prefix;return n?[n,i,t].join(""):t},__keys:function(t){var n,e,o=[];return Array.isArray(t)?t:(e=this.keys(),n=this.prefix.length+1,r.each(e,(function(t,e){this.prefix&&0===e.indexOf(this.prefix+i)&&o.push(e.slice(n))}),this),o.length?o:e)}}});t.exports&&(t.exports=o)}()}))),o=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=(n.nx||e).declare("nx.GmStoreEngine",{statics:{setItem:function(t,n){return GM_setValue(t,n)},getItem:function(t){return GM_getValue(t)},removeItem:function(t){GM_deleteValue(t)},clear:function(){GM_listValues().forEach((function(t){this.removeItem(t)}),this)}}});t.exports&&(t.exports=r)}()})),s=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,s=r.AbstractStorage||i,a=r.GmStoreEngine||o,u=r.declare("nx.GmStorage",{extends:s,methods:{init:function(t){this.base({engine:a,prefix:t||""})},serialize:function(t){return t},keys:function(){return GM_listValues()}}});t.exports&&(t.exports=u)}()})),a=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i={joinKey:",",encode:encodeURIComponent,isEmpty:function(t){return null!=t},transform:function(t,n){return this.encode(t)+"="+this.encode(n)}};r.param=function(t,n,e){var o,s=r.mix(null,i,e),a=[];return r.forIn(t,(function(t,n){if(s.isEmpty(n)){var e=Array.isArray(n)?n.join(s.joinKey):n;a.push(s.transform(t,e))}})),o=a.join("&"),n?o?n+"?"+o:n:o},t.exports&&(t.exports=r.param)}()})),u=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i=r.param||a,o=r.declare("nx.DataTransform",{statics:{raw:r.stubValue,json:function(t){return JSON.stringify(t)},urlencoded:function(t){return i(t)},multipart:function(t){var n=new FormData;return r.forIn(t,(function(t,e){n.append(t,e)})),n}}});t.exports&&(t.exports=o)}()})),c=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e;r.stubSingleton=function(){return{instance:null,getInstance:function(){var t=[null].concat(r.slice(arguments));if(!this.instance){var n=Function.prototype.bind.apply(this,t);this.instance=new n}return this.instance}}},t.exports&&(t.exports=r.stubSingleton)}()})),f=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e;r.delete=function(t,n){return(n&&0!==n.length?n:Object.keys(t)).forEach((function(n){delete t[n]})),t},t.exports&&(t.exports=r.delete)}()})),l=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i=r.delete||f,o={method:"get"},s=["method","url","data"],a=["GET","POST","DELETE","PUT","CONNECT","HEAD","OPTIONS","TRACE"];r.parseRequestArgs=function(t,n){var e,u=t,c=null;switch(u.length){case 1:c="string"==typeof u[0]?{url:u[0]}:u[0];break;case 2:e=u[0],c=a.includes(e.toUpperCase())?r.mix({method:u[0]},u[1]):r.mix({url:u[0]},u[1]);break;case 3:c=r.mix({method:u[0],url:u[1]},u[2]);break;case 4:c=r.mix({method:u[0],url:u[1],data:u[2]},u[3]);break;default:c=null,r.error("The arguments.length should between 1 ~ 4.")}return c=r.mix(null,o,c),n?[c.method,c.url,c.data,i(c,s)]:c},t.exports&&(t.exports=r.parseRequestArgs)}()})),_=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i=r.stubSingleton||c,o=r.parseArgs||l,s=r.declare("nx.AbstractRequest",{statics:r.mix(null,i()),methods:{init:function(t){this.options=r.mix(null,this.defaults(),t)},defaults:function(){return null},request:function(t,n,e,i){r.error("Must be implement.")},"get,post,put,patch,delete,head":function(t){return function(){var n=[t].concat(r.slice(arguments)),e=o(n,!0);return this.request.apply(this,e)}}}});t.exports&&(t.exports=s)}()})),h=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i={urlencoded:"application/x-www-form-urlencoded",multipart:"multipart/form-data",json:"application/json;charset=utf-8",raw:"text/plain"};r.contentType=function(t){return i[t]||i.urlencoded},t.exports&&(t.exports=r.contentType)}()})),p=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e;function i(t){return"[object Object]"===Object.prototype.toString.call(t)}r.isPlainObject=function(t){var n,e;return!1!==i(t)&&(void 0===(n=t.constructor)||!1!==i(e=n.prototype)&&!1!==e.hasOwnProperty("isPrototypeOf"))},t.exports&&(t.exports=r.isPlainObject)}()})),d=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i=r.isPlainObject||p,o=Object.prototype.toString;function s(t,n){r.forIn(n,(function(n,e){var r=o.call(e);switch(!0){case i(e):t[n]=t[n]||{},s(t[n],e);break;case"[object Undefined]"===r:break;default:t[n]=e}}))}r.deepAssign=function(t){var n=r.slice(arguments,1),e=t||{};return n.forEach((function(t){s(e,t)})),e},t.exports&&(t.exports=r.deepAssign)}()})),m=n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i=r.DataTransform||u,o=r.AbstractRequest||_,s=r.contentType||h,c=r.deepAssign||d,f=r.param||a,l={dataType:"json",responseType:"json"},p=r.declare("nx.GmXhr",{extends:o,methods:{defaults:function(){return l},request:function(t,n,e,o){var a=r.mix(null,this.options,o),u="get"===t,l=u?null:i[a.dataType](e),_=u?f(e,n):n,h={"Content-Type":s(a.dataType)},p=c({method:t,data:l,headers:h},a);return new Promise((function(t,n){GM_xmlhttpRequest(r.mix({url:_,onload:function(n){t(n.response)},onerror:n,onabort:n,ontimeout:n},p))}))}}});t.exports&&(t.exports=p)}()})),y=(n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e;r.rangeDate=function(t,n,e){for(var r=new Date(t),i=new Date(n),o=[],s=r;s<=i;s.setDate(s.getDate()+1)){var a=e?s.toJSON():new Date(s);o.push(a)}return o},t.exports&&(t.exports=r.rangeDate)}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e;r.sum=function(t,n){var e=function(t){switch(typeof t){case"string":return function(n,e){return r.get(e,t)};case"function":return t;default:return function(t,n){return n}}}(n);return t.reduce((function(t,n,r,i){return t+e(r,n,i)}),0)},t.exports&&(t.exports=r.sum)}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i=function(t){return(""+t).padStart(2,"0")};r.timeFormat=function(t){var n=parseInt(t%1e3/100),e=Math.floor(t/1e3%60),r=Math.floor(t/6e4%60),o=Math.floor(t/36e5);return{hour:o,minute:r,second:e,millisecond:n,datetime:[i(o),i(r),i(e)].join(":")}},t.exports&&(t.exports=r.timeFormat)}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e;r.waitToDisplay=function(t,n,e){var i=document.querySelector(t);if(null!=i)return e(i);setTimeout((function(){r.waitToDisplay(t,n,e)}),n)},t.exports&&(t.exports=r.waitToDisplay)}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e;r.mapMap=function(t,n,e){var i={};return r.each(t,(function(r,o){var s=n.call(e,r,o,t);i[s.key]=s.value}),e),i},t.exports&&(t.exports=r.mapMap)}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e;r.compare=function(t,n){var e=t-n;return 0===e?0:e/Math.abs(e)},t.exports&&(t.exports=r.compare)}()}))),g=n((function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(r){var i,o,s,a=(i=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,o=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(t,n,e,r){if(1!==arguments.length||"string"!==l(t)||/\d/.test(t)||(n=t,t=void 0),(t=t||new Date)instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");var _=(n=String(a.masks[n]||n||a.masks.default)).slice(0,4);"UTC:"!==_&&"GMT:"!==_||(n=n.slice(4),e=!0,"GMT:"===_&&(r=!0));var h=function(){return e?"getUTC":"get"},p=function(){return t[h()+"Date"]()},d=function(){return t[h()+"Day"]()},m=function(){return t[h()+"Month"]()},y=function(){return t[h()+"FullYear"]()},g=function(){return t[h()+"Hours"]()},x=function(){return t[h()+"Minutes"]()},v=function(){return t[h()+"Seconds"]()},b=function(){return t[h()+"Milliseconds"]()},w=function(){return e?0:t.getTimezoneOffset()},M=function(){return c(t)},T=function(){return f(t)},D={d:function(){return p()},dd:function(){return u(p())},ddd:function(){return a.i18n.dayNames[d()]},dddd:function(){return a.i18n.dayNames[d()+7]},m:function(){return m()+1},mm:function(){return u(m()+1)},mmm:function(){return a.i18n.monthNames[m()]},mmmm:function(){return a.i18n.monthNames[m()+12]},yy:function(){return String(y()).slice(2)},yyyy:function(){return y()},h:function(){return g()%12||12},hh:function(){return u(g()%12||12)},H:function(){return g()},HH:function(){return u(g())},M:function(){return x()},MM:function(){return u(x())},s:function(){return v()},ss:function(){return u(v())},l:function(){return u(b(),3)},L:function(){return u(Math.round(b()/10))},t:function(){return g()<12?a.i18n.timeNames[0]:a.i18n.timeNames[1]},tt:function(){return g()<12?a.i18n.timeNames[2]:a.i18n.timeNames[3]},T:function(){return g()<12?a.i18n.timeNames[4]:a.i18n.timeNames[5]},TT:function(){return g()<12?a.i18n.timeNames[6]:a.i18n.timeNames[7]},Z:function(){return r?"GMT":e?"UTC":(String(t).match(o)||[""]).pop().replace(s,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(w()>0?"-":"+")+u(100*Math.floor(Math.abs(w())/60)+Math.abs(w())%60,4)},S:function(){return["th","st","nd","rd"][p()%10>3?0:(p()%100-p()%10!=10)*p()%10]},W:function(){return M()},N:function(){return T()}};return n.replace(i,(function(t){return t in D?D[t]():t.slice(1,t.length-1)}))});function u(t,n){for(t=String(t),n=n||2;t.length<n;)t="0"+t;return t}function c(t){var n=new Date(t.getFullYear(),t.getMonth(),t.getDate());n.setDate(n.getDate()-(n.getDay()+6)%7+3);var e=new Date(n.getFullYear(),0,4);e.setDate(e.getDate()-(e.getDay()+6)%7+3);var r=n.getTimezoneOffset()-e.getTimezoneOffset();n.setHours(n.getHours()-r);var i=(n-e)/6048e5;return 1+Math.floor(i)}function f(t){var n=t.getDay();return 0===n&&(n=7),n}function l(t){return null===t?"null":void 0===t?"undefined":"object"!==e(t)?e(t):Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()}a.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},a.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},"object"===e(n)?t.exports=a:(void 0).dateFormat=a}()})),x=(n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i=r.compare||y,o=g,s=/-/g,a=r.declare("nx.Date",{statics:{now:function(){return Date.now()||+new Date},create:function(t){switch(!0){case t instanceof Date:return t;case"string"==typeof t:var n=new Date(t);return"Invalid Date"===n.toString()?new Date(t.replace(s,"/")):n;case null==t:return new Date;default:return new Date(t)}},compare:function(t,n){var e=+this.create(t),r=+this.create(n);return i(e,r)},format:function(t,n){var e=this.create(t);return o(e,n||"yyyy-mm-dd HH:MM:ss")},timezoneOffset:function(){return-(new Date).getTimezoneOffset()/60},isWeekend:function(t){var n=this.create(t).getDay();return 0===n||6===n}}});t.exports&&(t.exports=a)}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e;r.domain=function(t,n){var e=n||1,r=t||location.host,i=new URL(r).host.split(".");return i.slice(-i.length+e).join(".")},t.exports&&(t.exports=r.domain)}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),r=n.nx||e,i={en:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],shorty:["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],emoji:["😝","😪","😭","🤪","😎","😂"],cn:["一","二","三","四","五","六","日"]},o=r.declare("nx.Weeks",{statics:{at:function(t,n){return i[n][t]},day:function(t,n){var e=("number"==typeof t?t:t.getDay())-1;return e=e>=0?e:6,this.at(e,n)}}});t.exports&&(t.exports=o)}()})),n((function(t){!function(){var n={brightgreen:"#52c435",green:"#97c232",yellowgreen:"#a1a237",yellow:"#d7af3b",orange:"#f17f4a",red:"#d5624f",blue:"#2082bf",lightgrey:"#9e9e9e",success:"#52c434",important:"#f17f4a",critical:"#d56250",infomational:"#2183c0",inactive:"#9e9e9e",blueviolet:"#8b42d9"};function e(t){var e=t.title,r=t.content,i=n[t.color]||t.color||n.blue,o=["%c ".concat(e," %c ").concat(r," "),"padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: ".concat("#606060",";"),"padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(i,";")];console.log.apply(null,o)}t.exports?t.exports=e:window.slog=e}()})));const v=m.getInstance(),b=r.generate(e.GLOBAL),w=new s("aric");e.declare({statics:{init:function(){"function"!=typeof e.sdk&&(this.nx(),e.mix(unsafeWindow,{$:e.mix(unsafeWindow.$,{version:$.fn.jquery}),gmsdk:this.sdk()}))},nx:function(){!unsafeWindow.nx&&(unsafeWindow.nx=e)},sdk:function(){return e.mix({version:"1.0.2",http:v,store:w,slog:x},b)}}})}));
