/**
 *  name: @jswork/gm-sdk
 *  description: Sdk for tampermonkey based on jQuery/nx.
 *  homepage: https://github.com/afeiship/gm-sdk
 *  version: 1.0.13
 *  date: 2021-01-09T09:10:47.736Z
 *  license: MIT
 */

!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t){var n={exports:{}};return t(n,n.exports),n.exports}var e=n((function(n,e){(function(){var i,r,o,s,a,u,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,d=c||f||Function("return this")(),l=e&&!e.nodeType&&e,_=l&&n&&!n.nodeType&&n,p=d.nx=d.nx||{BREAKER:{},VERSION:"1.0.4",DEBUG:!1,GLOBAL:d};_?((_.exports=p).nx=p,l.nx=p):d.nx=p,i=Array.prototype,r=Object.prototype.hasOwnProperty,o=/\[(\w+)\]/g,p.noop=function(){},p.stubTrue=function(){return!0},p.stubFalse=function(){return!1},p.stubValue=function(t){return t},p.error=function(t){throw new Error(t)},p.try=function(t){try{t()}catch(t){}},p.forEach=function(t,n,e){var i,r=t.length;for(i=0;i<r&&n.call(e,t[i],i,t)!==p.BREAKER;i++);},p.forIn=function(t,n,e){var i;for(i in t)if(r.call(t,i)&&n.call(e,i,t[i],t)===p.BREAKER)break},p.each=function(t,n,e){var i,o,s=function(i,r,o){return n.call(e,i,r,t,o)===p.BREAKER};if(t)if("number"==typeof(o=t.length))for(i=0;i<o&&!s(i,t[i],!0);i++);else for(i in t)if(r.call(t,i)&&s(i,t[i],!1))break},p.map=function(t,n,e){var i=[];return p.each(t,(function(){var t=n.apply(e,arguments);if(t===p.BREAKER)return p.BREAKER;i.push(t)})),i},p.mix=function(t){var n,e,i=t||{},r=arguments;for(n=1,e=r.length;n<e;n++)p.forIn(r[n],(function(t,n){i[t]=n}));return i},p.slice=function(t,n,e){return i.slice.call(t,n,e)},p.set=function(t,n,e){for(var i=n.replace(o,"$1").split("."),r=t||p.GLOBAL,s=i.length-1,a=i[s],u=0;u<s;u++){var c=i[u],f=isNaN(+i[u+1])?{}:[];r=r[c]=r[c]||f}return r[a]=e,t},p.get=function(t,n,e){if(!n)return t;var i=n.replace(o,".$1").split("."),r=t||p.GLOBAL;return i.forEach((function(t){r=r&&r[t]})),void 0!==e&&null==r?e:r},p.path=function(t,n,e){return null==e?this.get(t,n):this.set(t,n,e)},s=function(){},a={__class_id__:0,__type__:"nx.RootClass",__base__:Object,__meta__:{},__static__:!1,__statics__:{},__properties__:{},__methods__:{},__method_init__:p.noop,__static_init__:p.noop},u={base:function(){var t,n=this.base.caller;if(n&&(t=n.__base__))return t.apply(this,arguments)},parent:function(t){var n=void 0===this.__id__,e=p.slice(arguments,1),i=n?this.__base__:this.__base__.prototype,r=this["@"+t].__type__,o=["get","set"][e.length];switch(r){case"method":return i[t].apply(this,e);case"property":return i["@"+t][o].apply(this,e)}}},a.__methods__=s.prototype=p.mix({constructor:s,init:p.noop,destroy:p.noop,toString:function(){return"[Class@"+this.__type__+"]"}},u),p.mix(a.__statics__,u),p.mix(s,a),p.mix(s,a.__statics__),p.RootClass=s,p.defineProperty=function(t,n,e,i){var r,o,s,a,u,c="@"+n,f=e&&"object"==typeof e?e:{value:e};return"value"in f?(a=f.value,u="_"+n,r=function(){return u in this?this[u]:"function"==typeof a?a.call(this):a},o=function(t){this[u]=t}):(r=e.get||t[c]&&t[c].get||p.noop,o=e.set||t[c]&&t[c].set||p.noop),c in t&&(r.__base__=t[c].get,o.__base__=t[c].set),s=t[c]={__meta__:e,__name__:n,__type__:"property",__static__:!!i,get:r,set:o,configurable:!0},Object.defineProperty(t,n,s),s},p.defineMethod=function(t,n,e,i){var r="@"+n;return t[n]=e,t[r]={__meta__:e,__name__:n,__type__:"method",__static__:!!i}},p.defineBombMethod=function(t,n,e,i){n.split(",").forEach((function(n,r){p.defineMethod(t,n,e.call(t,n,r),i)}))},p.defineMembers=function(t,n,e,i){p.forIn(e,(function(e,r){e.indexOf(",")>-1?p.defineBombMethod(n,e,r,i):p["define"+t](n,e,r,i)}))},function(){var t=1,n=0,e="nx.Anonymous";function i(t,n){this.type=t,this.meta=n,this.base=n.extends||p.RootClass,this.$base=this.base.prototype,this.__class_meta__={},this.__class__=null,this.__constructor__=null}i.prototype={constructor:i,initMetaProcessor:function(){var n=this.meta,e=n.methods||{},i=n.statics||{};p.mix(this.__class_meta__,{__type__:this.type,__meta__:n,__base__:this.base,__class_id__:t++,__method_init__:e.init||this.base.__method_init__,__static_init__:i.init||this.base.__static_init__,__static__:!n.methods&&!!n.statics})},createClassProcessor:function(){var t=this;this.__class__=function(){this.__id__=n++,t.__constructor__.apply(this,arguments),t.registerDebug(this)}},inheritProcessor:function(){var t=this.__class_meta__;this.inheritedClass(t),this.defineMethods(t,!0),this.defineMethods(t,!1),this.defineProperties(t)},inheritedClass:function(t){var n=function(){},e=this.__class__;n.prototype=this.$base,e.prototype=new n,e.prototype.$base=this.$base,e.prototype.constructor=e},defineMethods:function(t,n){var e=n?"statics":"methods",i="__"+e+"__",r=n?this.__class__:this.__class__.prototype,o=(n?this.base:this.base.prototype)[i]||{};p.forIn(this.meta[e],(function(t,n){o[t]&&"function"==typeof n&&(n.__base__=o[t])})),r[i]=p.mix(t[i],o,this.meta[e]),p.defineMembers("Method",r,r[i],n)},defineProperties:function(t){var n=t.__static__,e=n?this.__class__:this.__class__.prototype,i=n?this.base:this.base.prototype;e.__properties__=p.mix(null,i.__properties__,t.__properties__,this.meta.properties),p.defineMembers("Property",e,e.__properties__,n)},methodsConstructorProcessor:function(){var t=this.__class_meta__;this.__constructor__=function(){t.__method_init__.apply(this,arguments)}},staticsConstructorProcessor:function(){this.__class_meta__.__static_init__.call(this.__class__)},registerProcessor:function(){var t=this.__class__,n=this.type,i=this.__class_meta__;p.mix(t.prototype,i),p.mix(t,i),-1===n.indexOf(e)&&p.set(p.GLOBAL,n,t)},registerDebug:function(t){p.DEBUG&&(p.set(p,"__instances__."+(n-1),t),p.set(p,"__instances__.length",n))}},p.declare=function(n,r){var o=new i("string"==typeof n?n:e+t,r||n);return o.initMetaProcessor(),o.createClassProcessor(),o.inheritProcessor(),o.methodsConstructorProcessor(),o.staticsConstructorProcessor(),o.registerProcessor(),o.__class__}}()}).call(t)})),i=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=["GM_addStyle","GM_deleteValue","GM_listValues","GM_addValueChangeListener","GM_removeValueChangeListener","GM_setValue","GM_getValue","GM_log","GM_getResourceText","GM_getResourceURL","GM_registerMenuCommand","GM_unregisterMenuCommand","GM_openInTab","GM_xmlhttpRequest","GM_download","GM_getTab","GM_saveTab","GM_getTabs","GM_notification","GM_setClipboard","GM_info"],r=n.declare("nx.GmApi",{statics:{version:"4.10.0",generate:function(t){var n={};return i.forEach((function(e){var i=e.split("_")[1];this[i]=n[i]=t[e]}),this),n}}});t.exports&&(t.exports=r)}()})),r=(n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.json=JSON,n.parse=function(t){try{return JSON.parse(t)}catch(t){}return t},n.stringify=function(t){try{return JSON.stringify(t)}catch(t){}return t},t.exports&&(t.exports={json:n.json,parse:n.parse,stringify:n.stringify})}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.slice2str=function(t,n,e){if(t||!(t.length<=n)){var i=e||0;return[t.substr(0,n),t.substr(n+i)]}},t.exports&&(t.exports=n.slice2str)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i="@";n.json;n.slice2str;var r=n.declare("nx.AbstractStorage",{methods:{init:function(t){this.engine=t.engine,this.prefix=t.prefix||"",this.options=t,this.setAccessor()},setAccessor:function(){this.accessor={get:this.options.get||"getItem",set:this.options.set||"setItem",remove:this.options.remove||"removeItem",clear:this.options.clear||"clear"}},serialize:function(t){return n.stringify(t)},deserialize:function(t){return n.parse(t)},set:function(t,e){var i=t.indexOf(".");if(i>-1){var r=n.slice2str(t,i,1),o=this.get(r[0])||{};n.set(o,r[1],e),this.set(r[0],o)}else this.engine[this.accessor.set](this.__key(t),this.serialize(e))},sets:function(t){n.each(t,(function(t,n){this.set(t,n)}),this)},get:function(t){var e=t.indexOf(".");if(e>-1){var i=n.slice2str(t,e,1),r=this.get(i[0])||{};return n.get(r,i[1])}var o=this.engine[this.accessor.get](this.__key(t));return this.deserialize(o)},gets:function(t){var e={},i=this.__keys(t);return n.each(i,(function(t,n){e[n]=this.get(n)}),this),e},del:function(t){this.engine[this.accessor.remove](this.__key(t))},dels:function(t){var e=this.__keys(t);n.each(e,(function(t,n){this.del(n)}),this)},clear:function(){this.engine[this.accessor.clear]()},keys:function(){return Object.keys(this.engine)},__key:function(t){var n=this.prefix;return n?[n,i,t].join(""):t},__keys:function(t){var e,r,o=[];return Array.isArray(t)?t:(r=this.keys(),e=this.prefix.length+1,n.each(r,(function(t,n){this.prefix&&0===n.indexOf(this.prefix+i)&&o.push(n.slice(e))}),this),o.length?o:r)}}});t.exports&&(t.exports=r)}()}))),o=n((function(t){!function(){var n=(("undefined"!=typeof window?window:this||Function("return this")()).nx||e).declare("nx.GmStoreEngine",{statics:{setItem:function(t,n){return GM_setValue(t,n)},getItem:function(t){return GM_getValue(t)},removeItem:function(t){GM_deleteValue(t)},clear:function(){GM_listValues().forEach((function(t){this.removeItem(t)}),this)}}});t.exports&&(t.exports=n)}()})),s=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.AbstractStorage||r,s=n.GmStoreEngine||o,a=n.declare("nx.GmStorage",{extends:i,methods:{init:function(t){this.base({engine:s,prefix:t||""})},serialize:function(t){return t},keys:function(){return GM_listValues()}}});t.exports&&(t.exports=a)}()})),a=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i={joinKey:",",encode:encodeURIComponent,isEmpty:function(t){return null!=t},transform:function(t,n){return this.encode(t)+"="+this.encode(n)}};n.param=function(t,e,r){var o,s=n.mix(null,i,r),a=[];return n.forIn(t,(function(t,n){if(s.isEmpty(n)){var e=Array.isArray(n)?n.join(s.joinKey):n;a.push(s.transform(t,e))}})),o=a.join("&"),e?o?e+"?"+o:e:o},t.exports&&(t.exports=n.param)}()})),u=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.param||a,r=n.declare("nx.DataTransform",{statics:{raw:n.stubValue,json:function(t){return JSON.stringify(t)},urlencoded:function(t){return i(t)},multipart:function(t){var e=new FormData;return n.forIn(t,(function(t,n){e.append(t,n)})),e}}});t.exports&&(t.exports=r)}()})),c=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.stubSingleton=function(){return{instance:null,getInstance:function(){var t=[null].concat(n.slice(arguments));if(!this.instance){var e=Function.prototype.bind.apply(this,t);this.instance=new e}return this.instance}}},t.exports&&(t.exports=n.stubSingleton)}()})),f=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.delete=function(t,n){return(n&&0!==n.length?n:Object.keys(t)).forEach((function(n){delete t[n]})),t},t.exports&&(t.exports=n.delete)}()})),d=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.delete||f,r={method:"get"},o=["method","url","data"],s=["GET","POST","DELETE","PUT","CONNECT","HEAD","OPTIONS","TRACE"];n.parseRequestArgs=function(t,e){var a,u=t,c=null;switch(u.length){case 1:c="string"==typeof u[0]?{url:u[0]}:u[0];break;case 2:var f="string"==typeof u[1]?{url:u[1]}:u[1];a=u[0],c=s.includes(a.toUpperCase())?n.mix({method:u[0]},f):n.mix({url:u[0]},u[1]);break;case 3:c=n.mix({method:u[0],url:u[1]},u[2]);break;case 4:c=n.mix({method:u[0],url:u[1],data:u[2]},u[3]);break;default:c=null,n.error("The arguments.length should between 1 ~ 4.")}return c=n.mix(null,r,c),e?[c.method,c.url,c.data,i(c,o)]:c},t.exports&&(t.exports=n.parseRequestArgs)}()})),l=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.stubSingleton||c,r=n.parseArgs||d,o=n.declare("nx.AbstractRequest",{statics:n.mix(null,i()),methods:{init:function(t){this.options=n.mix(null,this.defaults(),t)},defaults:function(){return null},request:function(t,e,i,r){n.error("Must be implement.")},"get,post,put,patch,delete,head,fetch":function(t){return function(){var e=[t].concat(n.slice(arguments)),i=r(e,!0);return this.request.apply(this,i)}}}});t.exports&&(t.exports=o)}()})),_=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i={urlencoded:"application/x-www-form-urlencoded",multipart:"multipart/form-data",json:"application/json;charset=utf-8",raw:"text/plain"};n.contentType=function(t){return i[t]||i.urlencoded},t.exports&&(t.exports=n.contentType)}()})),p=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;function i(t){return"[object Object]"===Object.prototype.toString.call(t)}n.isPlainObject=function(t){var n,e;return!1!==i(t)&&(void 0===(n=t.constructor)||!1!==i(e=n.prototype)&&!1!==e.hasOwnProperty("isPrototypeOf"))},t.exports&&(t.exports=n.isPlainObject)}()})),h=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.isPlainObject||p,r=Object.prototype.toString;function o(t,e){n.forIn(e,(function(n,e){var s=r.call(e);switch(!0){case i(e):t[n]=t[n]||{},o(t[n],e);break;case"[object Undefined]"===s:break;default:t[n]=e}}))}n.deepAssign=function(t){var e=n.slice(arguments,1),i=t||{};return e.forEach((function(t){o(i,t)})),i},t.exports&&(t.exports=n.deepAssign)}()})),m=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.DataTransform||u,r=n.AbstractRequest||l,o=n.contentType||_,s=n.deepAssign||h,c=n.param||a,f={dataType:"json",responseType:"json"},d=n.declare("nx.GmXhr",{extends:r,methods:{defaults:function(){return f},request:function(t,e,r,a){var u=n.mix(null,this.options,a),f="get"===t,d=f?null:i[u.dataType](r),l=f?c(r,e):e,_={"Content-Type":o(u.dataType)},p=s({method:t,data:d,headers:_},u);return new Promise((function(t,e){GM_xmlhttpRequest(n.mix({url:l,onload:function(n){t(n.response)},onerror:e,onabort:e,ontimeout:e},p))}))}}});t.exports&&(t.exports=d)}()})),y=(n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.rangeDate=function(t,n,e){for(var i=new Date(t),r=new Date(n),o=[],s=i;s<=r;s.setDate(s.getDate()+1)){var a=e?s.toJSON():new Date(s);o.push(a)}return o},t.exports&&(t.exports=n.rangeDate)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.sum=function(t,e){var i=function(t){switch(typeof t){case"string":return function(e,i){return n.get(i,t)};case"function":return t;default:return function(t,n){return n}}}(e);return t.reduce((function(t,n,e,r){return t+i(e,n,r)}),0)},t.exports&&(t.exports=n.sum)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=function(t){return(""+t).padStart(2,"0")};n.timeFormat=function(t){var n=parseInt(t%1e3),e=Math.floor(t/1e3%60),r=Math.floor(t/6e4%60),o=Math.floor(t/36e5);return{hour:o,minute:r,second:e,millisecond:n,datetime:[i(o),i(r),i(e)].join(":")}},t.exports&&(t.exports=n.timeFormat)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.waitToDisplay=function(t,e,i){var r=document.querySelector(t);if(null!=r)return i(r);setTimeout((function(){n.waitToDisplay(t,e,i)}),e)},t.exports&&(t.exports=n.waitToDisplay)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.mapMap=function(t,e,i){var r={};return n.each(t,(function(n,o){var s=e.call(i,n,o,t);r[s.key]=s.value}),i),r},t.exports&&(t.exports=n.mapMap)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.compare=function(t,n){var e=t-n;return 0===e?0:e/Math.abs(e)},t.exports&&(t.exports=n.compare)}()}))),w=n((function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(i){var r,o,s,a=arguments,u=(r=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LlopSZWN]|"[^"]*"|'[^']*'/g,o=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(t,n,e,i){if(1!==a.length||"string"!==_(t)||/\d/.test(t)||(n=t,t=void 0),(t=t||0===t?t:new Date)instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");var p=(n=String(u.masks[n]||n||u.masks.default)).slice(0,4);"UTC:"!==p&&"GMT:"!==p||(n=n.slice(4),e=!0,"GMT:"===p&&(i=!0));var h=function(){return e?"getUTC":"get"},m=function(){return t[h()+"Date"]()},y=function(){return t[h()+"Day"]()},w=function(){return t[h()+"Month"]()},g=function(){return t[h()+"FullYear"]()},x=function(){return t[h()+"Hours"]()},v=function(){return t[h()+"Minutes"]()},b=function(){return t[h()+"Seconds"]()},M=function(){return t[h()+"Milliseconds"]()},T=function(){return e?0:t.getTimezoneOffset()},D={d:function(){return m()},dd:function(){return c(m())},ddd:function(){return u.i18n.dayNames[y()]},DDD:function(){return f({y:g(),m:w(),D:y(),_:h(),dayName:u.i18n.dayNames[y()],short:!0})},dddd:function(){return u.i18n.dayNames[y()+7]},DDDD:function(){return f({y:g(),m:w(),D:y(),_:h(),dayName:u.i18n.dayNames[y()+7]})},m:function(){return w()+1},mm:function(){return c(w()+1)},mmm:function(){return u.i18n.monthNames[w()]},mmmm:function(){return u.i18n.monthNames[w()+12]},yy:function(){return String(g()).slice(2)},yyyy:function(){return c(g(),4)},h:function(){return x()%12||12},hh:function(){return c(x()%12||12)},H:function(){return x()},HH:function(){return c(x())},M:function(){return v()},MM:function(){return c(v())},s:function(){return b()},ss:function(){return c(b())},l:function(){return c(M(),3)},L:function(){return c(Math.floor(M()/10))},t:function(){return x()<12?u.i18n.timeNames[0]:u.i18n.timeNames[1]},tt:function(){return x()<12?u.i18n.timeNames[2]:u.i18n.timeNames[3]},T:function(){return x()<12?u.i18n.timeNames[4]:u.i18n.timeNames[5]},TT:function(){return x()<12?u.i18n.timeNames[6]:u.i18n.timeNames[7]},Z:function(){return i?"GMT":e?"UTC":(String(t).match(o)||[""]).pop().replace(s,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(T()>0?"-":"+")+c(100*Math.floor(Math.abs(T())/60)+Math.abs(T())%60,4)},p:function(){return(T()>0?"-":"+")+c(Math.floor(Math.abs(T())/60),2)+":"+c(Math.floor(Math.abs(T())%60),2)},S:function(){return["th","st","nd","rd"][m()%10>3?0:(m()%100-m()%10!=10)*m()%10]},W:function(){return d(t)},N:function(){return l(t)}};return n.replace(r,(function(t){return t in D?D[t]():t.slice(1,t.length-1)}))});u.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},u.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var c=function(t,n){for(t=String(t),n=n||2;t.length<n;)t="0"+t;return t},f=function(t){var n=t.y,e=t.m,i=t.D,r=t._,o=t.dayName,s=t.short,a=void 0!==s&&s,u=new Date,c=new Date;c.setDate(c[r+"Date"]()-1);var f=new Date;f.setDate(f[r+"Date"]()+1);return u[r+"FullYear"]()===n&&u[r+"Month"]()===e&&u[r+"Day"]()===i?a?"Tdy":"Today":c[r+"FullYear"]()===n&&c[r+"Month"]()===e&&c[r+"Day"]()===i?a?"Ysd":"Yesterday":f[r+"FullYear"]()===n&&f[r+"Month"]()===e&&f[r+"Day"]()===i?a?"Tmw":"Tomorrow":o},d=function(t){var n=new Date(t.getFullYear(),t.getMonth(),t.getDate());n.setDate(n.getDate()-(n.getDay()+6)%7+3);var e=new Date(n.getFullYear(),0,4);e.setDate(e.getDate()-(e.getDay()+6)%7+3);var i=n.getTimezoneOffset()-e.getTimezoneOffset();n.setHours(n.getHours()-i);var r=(n-e)/6048e5;return 1+Math.floor(r)},l=function(t){var n=t.getDay();return 0===n&&(n=7),n},_=function(t){return null===t?"null":void 0===t?"undefined":"object"!==e(t)?e(t):Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()};"object"===e(n)?t.exports=u:i.dateFormat=u}(void 0)})),g=(n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.compare||y,r=w,o=/-/g,s=n.declare("nx.Date",{statics:{now:function(){return Date.now()||+new Date},create:function(t){switch(!0){case t instanceof Date:return t;case"string"==typeof t:var n=new Date(t);return"Invalid Date"===n.toString()?new Date(t.replace(o,"/")):n;case null==t:return new Date;default:return new Date(t)}},compare:function(t,n){var e=+this.create(t),r=+this.create(n);return i(e,r)},format:function(t,n){var e=this.create(t);return r(e,n||"yyyy-mm-dd HH:MM:ss")},timezoneOffset:function(){return-(new Date).getTimezoneOffset()/60},isWeekend:function(t){var n=this.create(t).getDay();return 0===n||6===n}}});t.exports&&(t.exports=s)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.domain=function(t,n){var e=n||1,i=t||location.href,r=new URL(i).hostname.split(".");return(2===r.length?r:r.slice(-r.length+e)).join(".")},t.exports&&(t.exports=n.domain)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i={en:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],shorty:["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],emoji:["😝","😪","😭","🤪","🤣","😎","😂"],cn:["一","二","三","四","五","六","日"]},r=n.declare("nx.Weeks",{statics:{at:function(t,n){return i[n][t]},day:function(t,n){var e=("number"==typeof t?t:t.getDay())-1;return e=e>=0?e:6,this.at(e,n)}}});t.exports&&(t.exports=r)}()})),n((function(t){!function(){var n=n||window||Function("return this")(),i=n.nx||e,r={el:n,to:"top"};i.scrollTo=function(t){var n=i.mix(null,r,t),e=n.to;"top"===e&&(e=0),"bottom"===e&&(e=n.el.scrollHeight),n.el.scrollTop=e},t.exports&&(t.exports=i.scrollTo)}()})),n((function(t){!function(){var n={brightgreen:"#52c435",green:"#97c232",yellowgreen:"#a1a237",yellow:"#d7af3b",orange:"#f17f4a",red:"#d5624f",blue:"#2082bf",lightgrey:"#9e9e9e",success:"#52c434",important:"#f17f4a",critical:"#d56250",infomational:"#2183c0",inactive:"#9e9e9e",blueviolet:"#8b42d9"};function e(t){var e=t.title,i=t.content;t=n[t.color]||t.color||n.blue,t=["%c ".concat(e," %c ").concat(i," "),"padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: ".concat("#606060",";"),"padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(t,";")];console.log.apply(null,t)}t.exports?t.exports=e:window.slog=e}()})));const x=m.getInstance(),v=i.generate(e.GLOBAL),b=new s("aric");e.declare({statics:{init:function(){"undefined"==typeof gmsdk&&(this.nx(),e.mix(unsafeWindow,{$:e.mix(unsafeWindow.$,{version:$.fn.jquery}),gmsdk:this.sdk()}))},nx:function(){!unsafeWindow.nx&&(unsafeWindow.nx=e)},sdk:function(){return e.mix({version:"1.0.13",http:x,store:b,slog:g},v)}}})}));
