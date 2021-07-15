/**
 *  name: @jswork/gm-sdk
 *  description: Sdk for tampermonkey based on jQuery/nx.
 *  homepage: https://github.com/afeiship/gm-sdk
 *  version: 1.0.15
 *  date: 2021-07-15T09:28:48.755Z
 *  license: MIT
 */

!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t){var n={exports:{}};return t(n,n.exports),n.exports}var e=n((function(n,e){(function(){var i,r,o,s,u,a,c,f="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=f||d||Function("return this")(),l=e&&!e.nodeType&&e,h=l&&n&&!n.nodeType&&n,_=p.nx=p.nx||{BREAKER:{},VERSION:"1.0.7",DEBUG:!1,GLOBAL:p};h?((h.exports=_).nx=_,l.nx=_):p.nx=_,i="undefined",r=Array.prototype,o=Object.prototype.hasOwnProperty,s=/\[(\w+)\]/g,_.noop=function(){},_.stubTrue=function(){return!0},_.stubFalse=function(){return!1},_.stubValue=function(t){return t},_.error=function(t){throw new Error(t)},_.try=function(t){try{t()}catch(t){}},_.forEach=function(t,n,e){var i,r=t.length;for(i=0;i<r&&n.call(e,t[i],i,t)!==_.BREAKER;i++);},_.forIn=function(t,n,e){var i;for(i in t)if(o.call(t,i)&&n.call(e,i,t[i],t)===_.BREAKER)break},_.each=function(t,n,e){var i,r,s=function(i,r,o){return n.call(e,i,r,t,o)===_.BREAKER};if(t)if("number"==typeof(r=t.length))for(i=0;i<r&&!s(i,t[i],!0);i++);else for(i in t)if(o.call(t,i)&&s(i,t[i],!1))break},_.map=function(t,n,e){var i=[];return _.each(t,(function(){var t=n.apply(e,arguments);if(t===_.BREAKER)return _.BREAKER;i.push(t)})),i},_.mix=function(t){var n,e,i=t||{},r=arguments;for(n=1,e=r.length;n<e;n++)_.forIn(r[n],(function(t,n){i[t]=n}));return i},_.slice=function(t,n,e){return r.slice.call(t,n,e)},_.set=function(t,n,e){for(var i=n.replace(s,"$1").split("."),r=t||_.GLOBAL,o=i.length-1,u=i[o],a=0;a<o;a++){var c=i[a],f=isNaN(+i[a+1])?{}:[];r=r[c]=r[c]||f}return r[u]=e,t},_.get=function(t,n,e){if(!n)return t;var r=n.replace(s,".$1").split("."),o=t||_.GLOBAL;return r.forEach((function(t){o=o&&o[t]})),typeof e!==i&&typeof o===i?e:o},_.del=function(t,n){for(var e=n.replace(s,".$1").split("."),i=0;i<e.length;i++){var r=e[i];if(i===e.length-1)return delete t[r],!0;t=t[r]}return!1},_.path=function(t,n,e){return null==e?this.get(t,n):this.set(t,n,e)},u=function(){},a={__class_id__:0,__type__:"nx.RootClass",__base__:Object,__meta__:{},__static__:!1,__statics__:{},__properties__:{},__methods__:{},__method_init__:_.noop,__static_init__:_.noop},c={base:function(){var t,n=this.base.caller;if(n&&(t=n.__base__))return t.apply(this,arguments)},parent:function(t){var n=void 0===this.__id__,e=_.slice(arguments,1),i=n?this.__base__:this.__base__.prototype,r=this["@"+t].__type__,o=["get","set"][e.length];switch(r){case"method":return i[t].apply(this,e);case"property":return i["@"+t][o].apply(this,e)}}},a.__methods__=u.prototype=_.mix({constructor:u,init:_.noop,destroy:_.noop,toString:function(){return"[Class@"+this.__type__+"]"}},c),_.mix(a.__statics__,c),_.mix(u,a),_.mix(u,a.__statics__),_.RootClass=u,_.defineProperty=function(t,n,e,i){var r,o,s,u,a,c="@"+n,f=e&&"object"==typeof e?e:{value:e};return"value"in f?(u=f.value,a="_"+n,r=function(){return a in this?this[a]:"function"==typeof u?u.call(this):u},o=function(t){this[a]=t}):(r=e.get||t[c]&&t[c].get||_.noop,o=e.set||t[c]&&t[c].set||_.noop),c in t&&(r.__base__=t[c].get,o.__base__=t[c].set),s=t[c]={__meta__:e,__name__:n,__type__:"property",__static__:!!i,get:r,set:o,configurable:!0},Object.defineProperty(t,n,s),s},_.defineMethod=function(t,n,e,i){var r="@"+n;return t[n]=e,t[r]={__meta__:e,__name__:n,__type__:"method",__static__:!!i}},_.defineBombMethod=function(t,n,e,i){n.split(",").forEach((function(n,r){_.defineMethod(t,n,e.call(t,n,r),i)}))},_.defineMembers=function(t,n,e,i){_.forIn(e,(function(e,r){e.indexOf(",")>-1?_.defineBombMethod(n,e,r,i):_["define"+t](n,e,r,i)}))},function(){var t=1,n=0,e="nx.Anonymous";function i(t,n){this.type=t,this.meta=n,this.base=n.extends||_.RootClass,this.$base=this.base.prototype,this.__class_meta__={},this.__class__=null,this.__constructor__=null}i.prototype={constructor:i,initMetaProcessor:function(){var n=this.meta,e=n.methods||{},i=n.statics||{};_.mix(this.__class_meta__,{__type__:this.type,__meta__:n,__base__:this.base,__class_id__:t++,__method_init__:e.init||this.base.__method_init__,__static_init__:i.init||this.base.__static_init__,__static__:!n.methods&&!!n.statics})},createClassProcessor:function(){var t=this;this.__class__=function(){this.__id__=n++,t.__constructor__.apply(this,arguments),t.registerDebug(this)}},inheritProcessor:function(){var t=this.__class_meta__;this.inheritedClass(t),this.defineMethods(t,!0),this.defineMethods(t,!1),this.defineProperties(t)},inheritedClass:function(t){var n=function(){},e=this.__class__;n.prototype=this.$base,e.prototype=new n,e.prototype.$base=this.$base,e.prototype.constructor=e},defineMethods:function(t,n){var e=n?"statics":"methods",i="__"+e+"__",r=n?this.__class__:this.__class__.prototype,o=(n?this.base:this.base.prototype)[i]||{};_.forIn(this.meta[e],(function(t,n){o[t]&&"function"==typeof n&&(n.__base__=o[t])})),r[i]=_.mix(t[i],o,this.meta[e]),_.defineMembers("Method",r,r[i],n)},defineProperties:function(t){var n=t.__static__,e=n?this.__class__:this.__class__.prototype,i=n?this.base:this.base.prototype;e.__properties__=_.mix(null,i.__properties__,t.__properties__,this.meta.properties),_.defineMembers("Property",e,e.__properties__,n)},methodsConstructorProcessor:function(){var t=this.__class_meta__;this.__constructor__=function(){t.__method_init__.apply(this,arguments)}},staticsConstructorProcessor:function(){this.__class_meta__.__static_init__.call(this.__class__)},registerProcessor:function(){var t=this.__class__,n=this.type,i=this.__class_meta__;_.mix(t.prototype,i),_.mix(t,i),-1===n.indexOf(e)&&_.set(_.GLOBAL,n,t)},registerDebug:function(t){_.DEBUG&&(_.set(_,"__instances__."+(n-1),t),_.set(_,"__instances__.length",n))}},_.declare=function(n,r){var o=new i("string"==typeof n?n:e+t,r||n);return o.initMetaProcessor(),o.createClassProcessor(),o.inheritProcessor(),o.methodsConstructorProcessor(),o.staticsConstructorProcessor(),o.registerProcessor(),o.__class__}}()}).call(t)})),i=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=["GM_addStyle","GM_deleteValue","GM_listValues","GM_addValueChangeListener","GM_removeValueChangeListener","GM_setValue","GM_getValue","GM_log","GM_getResourceText","GM_getResourceURL","GM_registerMenuCommand","GM_unregisterMenuCommand","GM_openInTab","GM_xmlhttpRequest","GM_download","GM_getTab","GM_saveTab","GM_getTabs","GM_notification","GM_setClipboard","GM_info"],r=n.declare("nx.GmApi",{statics:{version:"4.10.0",generate:function(t){var n={};return i.forEach((function(e){var i=e.split("_")[1];this[i]=n[i]=t[e]}),this),n}}});t.exports&&(t.exports=r)}()})),r=(n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.json=JSON,n.parse=function(t){try{return JSON.parse(t)}catch(t){}return t},n.stringify=function(t){try{return JSON.stringify(t)}catch(t){}return t},t.exports&&(t.exports={json:n.json,parse:n.parse,stringify:n.stringify})}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.slice2str=function(t,n,e){if(t||!(t.length<=n)){var i=e||0;return[t.substr(0,n),t.substr(n+i)]}},t.exports&&(t.exports=n.slice2str)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i="@";n.json,n.slice2str;var r=n.declare("nx.AbstractStorage",{methods:{init:function(t){this.engine=t.engine,this.prefix=t.prefix||"",this.options=t,this.setAccessor()},setAccessor:function(){this.accessor={get:this.options.get||"getItem",set:this.options.set||"setItem",remove:this.options.remove||"removeItem",clear:this.options.clear||"clear"}},serialize:function(t){return n.stringify(t)},deserialize:function(t){return n.parse(t)},set:function(t,e){var i=t.indexOf(".");if(i>-1){var r=n.slice2str(t,i,1),o=this.get(r[0])||{};n.set(o,r[1],e),this.set(r[0],o)}else this.engine[this.accessor.set](this.__key(t),this.serialize(e))},sets:function(t){n.each(t,(function(t,n){this.set(t,n)}),this)},get:function(t){var e=t.indexOf(".");if(e>-1){var i=n.slice2str(t,e,1),r=this.get(i[0])||{};return n.get(r,i[1])}var o=this.engine[this.accessor.get](this.__key(t));return this.deserialize(o)},gets:function(t){var e={},i=this.__keys(t);return n.each(i,(function(t,n){e[n]=this.get(n)}),this),e},del:function(t){this.engine[this.accessor.remove](this.__key(t))},dels:function(t){var e=this.__keys(t);n.each(e,(function(t,n){this.del(n)}),this)},clear:function(){this.engine[this.accessor.clear]()},keys:function(){return Object.keys(this.engine)},__key:function(t){var n=this.prefix;return n?[n,i,t].join(""):t},__keys:function(t){var e,r,o=[];return Array.isArray(t)?t:(r=this.keys(),e=this.prefix.length+1,n.each(r,(function(t,n){this.prefix&&0===n.indexOf(this.prefix+i)&&o.push(n.slice(e))}),this),o.length?o:r)}}});t.exports&&(t.exports=r)}()}))),o=n((function(t){!function(){var n=(("undefined"!=typeof window?window:this||Function("return this")()).nx||e).declare("nx.GmStoreEngine",{statics:{setItem:function(t,n){return GM_setValue(t,n)},getItem:function(t){return GM_getValue(t)},removeItem:function(t){GM_deleteValue(t)},clear:function(){GM_listValues().forEach((function(t){this.removeItem(t)}),this)}}});t.exports&&(t.exports=n)}()})),s=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.AbstractStorage||r,s=n.GmStoreEngine||o,u=n.declare("nx.GmStorage",{extends:i,methods:{init:function(t){this.base({engine:s,prefix:t||""})},serialize:function(t){return t},keys:function(){return GM_listValues()}}});t.exports&&(t.exports=u)}()})),u=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i={joinKey:",",encode:encodeURIComponent,isEmpty:function(t){return null!=t},transform:function(t,n){return this.encode(t)+"="+this.encode(n)}};n.param=function(t,e,r){var o,s=n.mix(null,i,r),u=[];return n.forIn(t,(function(t,n){if(s.isEmpty(n)){var e=Array.isArray(n)?n.join(s.joinKey):n;u.push(s.transform(t,e))}})),o=u.join("&"),e?o?e+"?"+o:e:o},t.exports&&(t.exports=n.param)}()})),a=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.param||u,r=n.declare("nx.DataTransform",{statics:{raw:n.stubValue,__json__:function(t){return JSON.stringify(t)},__urlencoded__:function(t){return i(t)},__multipart__:function(t){var e=new FormData;return n.forIn(t,(function(t,n){e.append(t,n)})),e},"json,urlencoded,multipart":function(t){return function(n){return n&&"object"==typeof n?this["__"+t+"__"].call(this,n):n}}}});t.exports&&(t.exports=r)}()})),c=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.stubSingleton=function(){return{instance:null,getInstance:function(){var t=[null].concat(n.slice(arguments)),e=Function.prototype.bind.apply(this,t);return new e},getSingleton:function(){var t=[null].concat(n.slice(arguments));if(!this.instance){var e=Function.prototype.bind.apply(this,t);this.instance=new e}return this.instance}}},t.exports&&(t.exports=n.stubSingleton)}()})),f=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.delete=function(t,n){return(n&&0!==n.length?n:Object.keys(t)).forEach((function(n){delete t[n]})),t},t.exports&&(t.exports=n.delete)}()})),d=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.delete||f,r={method:"get"},o=["method","url","data"],s=["GET","POST","DELETE","PUT","CONNECT","HEAD","OPTIONS","TRACE"];n.parseRequestArgs=function(t,e){var u,a=t,c=null;switch(a.length){case 1:c="string"==typeof a[0]?{url:a[0]}:a[0];break;case 2:var f="string"==typeof a[1]?{url:a[1]}:a[1];u=a[0],c=s.includes(u.toUpperCase())?n.mix({method:a[0]},f):n.mix({url:a[0]},a[1]);break;case 3:c=n.mix({method:a[0],url:a[1]},a[2]);break;case 4:c=n.mix({method:a[0],url:a[1],data:a[2]},a[3]);break;default:c=null,n.error("The arguments.length should between 1 ~ 4.")}return c=n.mix(null,r,c),e?[c.method,c.url,c.data,i(c,o)]:c},t.exports&&(t.exports=n.parseRequestArgs)}()})),p=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=0;n.id=function(){return++i},t.exports&&(t.exports=n.id)}()})),l=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.stubSingleton||c,r=n.id||p,o={disabled:!1},s=n.declare("nx.PluginManager",{statics:n.mix(null,i()),methods:{init:function(t,n){this.entities=[],this.id=n||"id",(t||[]).forEach(this.register,this)},register:function(t){var e=t[this.id]=t[this.id]||r();if(!this.has(e)){var i=n.mix(null,o,t);i[this.id]=e,this.entities.push(i)}},unregister:function(t){var n=this.entities.findIndex((function(n){return n[this.id]===t}),this);-1!==n&&this.entities.splice(n,1)},enabled:function(){return this.entities.filter((function(t){return!t.disabled}))},disabled:function(){return this.entities.filter((function(t){return t.disabled}))},enable:function(t){this.get(t).disabled=!1},disable:function(t){this.get(t).disabled=!0},toggle:function(t){var n=this.get(t);n.disabled=!n.disabled},update:function(t,e){var i=this.get(t);n.mix(i,e)},updates:function(t){var e=this;n.forIn(t,(function(t,n){e.update(t,n)}))},has:function(t){return!!this.get(t)},set:function(t,e){var i=this.entities.find((function(n){return n[this.id]===t}),this);i&&n.mix(i,e)},get:function(t){return this.entities.find((function(n){return n[this.id]===t}),this)},sets:function(t){var e=this;n.forIn(t,(function(t,n){e.set(t,n)}))},gets:function(){return this.entities},empty:function(){this.entities.length=0}}});t.exports&&(t.exports=s)}()})),h=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.promiseCompose=function(){var t=n.slice(arguments);return function(n){var e=Promise.resolve(n);try{return t.reduce((function(t,n){return t.then(n)}),e)}catch(t){return Promise.reject(t)}}},t.exports&&(t.exports=n.promiseCompose)}()})),_=n((function(t){!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;i.compose=function(){var t=i.slice(arguments);return 0===t.length?i.stubValue:1===t.length?t[0]:t.reduceRight((function(t,n){return function(){return t(n.apply(null,arguments))}}))},t.exports&&(t.exports=i.compose)}()})),m=n((function(t){!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;i.filterMap=function(t,n,e){return t.reduce((function(t){var r=i.slice(arguments,1);return n.apply(null,r)&&t.push(e.apply(null,r)),t}),[])},t.exports&&(t.exports=i.filterMap)}()})),y=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.PluginManager||l,r=n.promiseComponse||h,o=n.compose||_,s=n.filterMap||m,u={async:!1,types:["request","response"],items:[]},a=n.declare("nx.Interceptor",{methods:{init:function(t){this.options=n.mix(null,u,t),this.manager=i.getInstance(this.options.items,"name")},compose:function(t,n){var e=this.options.async?r:o,i=this.manager.enabled(),u=t=>t.fn,a=n?s(i,(t=>t.type===n),u):i.map(u);return e.apply(null,a||[])(t)},"register,unregister,enable,disable":function(t){return function(){var n=this.manager;return n[t].apply(n,arguments)}}}});t.exports&&(t.exports=a)}()})),g=n((function(t){!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;i.toAction=function(t){return function(n){return n[t]?n[t]():n}},t.exports&&(t.exports=i.toAction)}()})),x=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.toAction||g,r={responseType:"json"};n.fetchWithResponseType=function(t){return function(e,o){var s=n.mix(null,r,o),u=s.responseType?i(s.responseType):n.stubValue;return t(e,s).then(u)}},t.exports&&(t.exports=n.fetchWithResponseType)}()})),w=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.stubSingleton||c,r=n.parseArgs||d,o=n.Interceptor||y,s=n.fetchWithResponseType||x,u=["request","response","error"],a={pipeStyle:"fetch",dataType:"json",responseType:"json",interceptors:[],transformRequest:n.stubValue,transformResponse:n.stubValue,transformError:n.stubValue},f=n.declare("nx.AbstractRequest",{statics:n.mix(null,i()),methods:{init:function(t){this.options=n.mix(null,a,this.defaults(),t),this.interceptor=new o({items:this.options.interceptors,types:u}),this.httpRequest="fetch"===this.options.pipeStyle?s(this.options.fetch):this.options.fetch},defaults:function(){return null},request:function(t,e,i,r){n.error("Must be implement.")},"get,post,put,patch,delete,head,fetch":function(t){return function(){var e=[t].concat(n.slice(arguments)),i=r(e,!0);return this.request.apply(this,i)}}}});t.exports&&(t.exports=f)}()})),v=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i={urlencoded:"application/x-www-form-urlencoded",multipart:"multipart/form-data",json:"application/json;charset=utf-8",raw:"text/plain"};n.contentType=function(t){return i[t]||i.urlencoded},t.exports&&(t.exports=n.contentType)}()})),b=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;function i(t){return"[object Object]"===Object.prototype.toString.call(t)}n.isPlainObject=function(t){var n,e;return!1!==i(t)&&(void 0===(n=t.constructor)||!1!==i(e=n.prototype)&&!1!==e.hasOwnProperty("isPrototypeOf"))},t.exports&&(t.exports=n.isPlainObject)}()})),M=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.isPlainObject||b,r=Object.prototype.toString;function o(t,e){n.forIn(e,(function(n,e){var s=r.call(e);switch(!0){case i(e):t[n]=t[n]||{},o(t[n],e);break;case"[object Undefined]"===s:break;default:t[n]=e}}))}n.deepAssign=function(t){var e=n.slice(arguments,1),i=t||{};return e.forEach((function(t){o(i,t)})),i},t.exports&&(t.exports=n.deepAssign)}()})),T=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=n.DataTransform||a,r=n.AbstractRequest||w,o=n.contentType||v,s=n.deepAssign||M,c=n.param||u,f={dataType:"json",responseType:"json"},d=n.declare("nx.GmXhr",{extends:r,methods:{defaults:function(){return f},request:function(t,e,r,u){var a=n.mix(null,this.options,u),f="get"===t,d=f?null:i[a.dataType](r),p=f?c(r,e):e,l={"Content-Type":o(a.dataType)},h=s({method:t,data:d,headers:l},a);return new Promise((function(t,e){GM_xmlhttpRequest(n.mix({url:p,onload:function(n){t(n.response)},onerror:e,onabort:e,ontimeout:e},h))}))}}});t.exports&&(t.exports=d)}()}));n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.rangeDate=function(t,n,e){for(var i=new Date(t),r=new Date(n),o=[],s=i;s<=r;s.setDate(s.getDate()+1)){var u=e?s.toJSON():new Date(s);o.push(u)}return o},t.exports&&(t.exports=n.rangeDate)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.sum=function(t,e){var i=function(t){switch(typeof t){case"string":return function(e,i){return n.get(i,t)};case"function":return t;default:return function(t,n){return n}}}(e);return t.reduce((function(t,n,e,r){return t+i(e,n,r)}),0)},t.exports&&(t.exports=n.sum)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=function(t){return(""+t).padStart(2,"0")};n.timeFormat=function(t){var n=parseInt(t%1e3),e=Math.floor(t/1e3%60),r=Math.floor(t/6e4%60),o=Math.floor(t/36e5);return{hour:o,minute:r,second:e,millisecond:n,datetime:[i(o),i(r),i(e)].join(":")}},t.exports&&(t.exports=n.timeFormat)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.waitToDisplay=function(t,e,i){var r=document.querySelector(t);if(null!=r)return i(r);setTimeout((function(){n.waitToDisplay(t,e,i)}),e)},t.exports&&(t.exports=n.waitToDisplay)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.mapMap=function(t,e,i){var r={};return n.each(t,(function(n,o){var s=e.call(i,n,o,t);r[s.key]=s.value}),i),r},t.exports&&(t.exports=n.mapMap)}()}));var D=n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.compare=function(t,n){var e=t-n;return 0===e?0:e/Math.abs(e)},t.exports&&(t.exports=n.compare)}()})),F=n((function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(i){var r,o,s,u=arguments,a=(r=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,o=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(t,n,e,i){if(1!==u.length||"string"!==l(t)||/\d/.test(t)||(n=t,t=void 0),(t=t||0===t?t:new Date)instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");var h=(n=String(a.masks[n]||n||a.masks.default)).slice(0,4);"UTC:"!==h&&"GMT:"!==h||(n=n.slice(4),e=!0,"GMT:"===h&&(i=!0));var _=function(){return e?"getUTC":"get"},m=function(){return t[_()+"Date"]()},y=function(){return t[_()+"Day"]()},g=function(){return t[_()+"Month"]()},x=function(){return t[_()+"FullYear"]()},w=function(){return t[_()+"Hours"]()},v=function(){return t[_()+"Minutes"]()},b=function(){return t[_()+"Seconds"]()},M=function(){return t[_()+"Milliseconds"]()},T=function(){return e?0:t.getTimezoneOffset()},D=function(){return d(t)},F={d:function(){return m()},dd:function(){return c(m())},ddd:function(){return a.i18n.dayNames[y()]},DDD:function(){return f({y:x(),m:g(),d:m(),_:_(),dayName:a.i18n.dayNames[y()],short:!0})},dddd:function(){return a.i18n.dayNames[y()+7]},DDDD:function(){return f({y:x(),m:g(),d:m(),_:_(),dayName:a.i18n.dayNames[y()+7]})},m:function(){return g()+1},mm:function(){return c(g()+1)},mmm:function(){return a.i18n.monthNames[g()]},mmmm:function(){return a.i18n.monthNames[g()+12]},yy:function(){return String(x()).slice(2)},yyyy:function(){return c(x(),4)},h:function(){return w()%12||12},hh:function(){return c(w()%12||12)},H:function(){return w()},HH:function(){return c(w())},M:function(){return v()},MM:function(){return c(v())},s:function(){return b()},ss:function(){return c(b())},l:function(){return c(M(),3)},L:function(){return c(Math.floor(M()/10))},t:function(){return w()<12?a.i18n.timeNames[0]:a.i18n.timeNames[1]},tt:function(){return w()<12?a.i18n.timeNames[2]:a.i18n.timeNames[3]},T:function(){return w()<12?a.i18n.timeNames[4]:a.i18n.timeNames[5]},TT:function(){return w()<12?a.i18n.timeNames[6]:a.i18n.timeNames[7]},Z:function(){return i?"GMT":e?"UTC":(String(t).match(o)||[""]).pop().replace(s,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(T()>0?"-":"+")+c(100*Math.floor(Math.abs(T())/60)+Math.abs(T())%60,4)},p:function(){return(T()>0?"-":"+")+c(Math.floor(Math.abs(T())/60),2)+":"+c(Math.floor(Math.abs(T())%60),2)},S:function(){return["th","st","nd","rd"][m()%10>3?0:(m()%100-m()%10!=10)*m()%10]},W:function(){return D()},WW:function(){return c(D())},N:function(){return p(t)}};return n.replace(r,(function(t){return t in F?F[t]():t.slice(1,t.length-1)}))});a.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},a.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var c=function(t,n){for(t=String(t),n=n||2;t.length<n;)t="0"+t;return t},f=function(t){var n=t.y,e=t.m,i=t.d,r=t._,o=t.dayName,s=t.short,u=void 0!==s&&s,a=new Date,c=new Date;c.setDate(c[r+"Date"]()-1);var f=new Date;f.setDate(f[r+"Date"]()+1);return a[r+"FullYear"]()===n&&a[r+"Month"]()===e&&a[r+"Date"]()===i?u?"Tdy":"Today":c[r+"FullYear"]()===n&&c[r+"Month"]()===e&&c[r+"Date"]()===i?u?"Ysd":"Yesterday":f[r+"FullYear"]()===n&&f[r+"Month"]()===e&&f[r+"Date"]()===i?u?"Tmw":"Tomorrow":o},d=function(t){var n=new Date(t.getFullYear(),t.getMonth(),t.getDate());n.setDate(n.getDate()-(n.getDay()+6)%7+3);var e=new Date(n.getFullYear(),0,4);e.setDate(e.getDate()-(e.getDay()+6)%7+3);var i=n.getTimezoneOffset()-e.getTimezoneOffset();n.setHours(n.getHours()-i);var r=(n-e)/6048e5;return 1+Math.floor(r)},p=function(t){var n=t.getDay();return 0===n&&(n=7),n},l=function(t){return null===t?"null":void 0===t?"undefined":"object"!==e(t)?e(t):Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()};"object"===e(n)?t.exports=a:i.dateFormat=a}(void 0)}));n((function(t){!function(){var n="undefined"!=typeof window?window:this||Function("return this")(),i=n.nx||e,r=i.compare||D,o=n.dateFormat||F,s=/-/g,u="yyyy-mm-dd HH:MM:ss",a={format:u,target:null};i.mix(o.masks,{datetime:u,date:"yyyy-mm-dd",time:"HH:MM:ss",month:"yyyy-mm",dbdt:"yyyymmdd_HHMMss"});var c=i.declare("nx.Date",{statics:{WEEK:6048e5,DAY:864e5,HOUR:36e5,MINUTE:6e4,SECOND:1e3,get:function(t,n,e){var r=i.mix(null,a,e),o=this[n.toUpperCase()]*t,s=this.create(r.target).getTime()+o;return r.format?this.format(s,r.format):s},create:function(t){switch(!0){case t instanceof Date:return t;case"string"==typeof t:case"number"==typeof t:var n=new Date(t);return"Invalid Date"===n.toString()?new Date(t.replace(s,"/")):n;case null==t:return new Date;default:return new Date(t)}},compare:function(t,n){var e=+this.create(t),i=+this.create(n);return r(e,i)},format:function(t,n){var e=this.create(t);return o(e,n||u)},timezoneOffset:function(){return-(new Date).getTimezoneOffset()/60},isWeekend:function(t){var n=this.create(t).getDay();return 0===n||6===n}}});t.exports&&(t.exports=c)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e;n.domain=function(t,n){var e=n||1,i=t||location.href,r=new URL(i).hostname.split(".");return(2===r.length?r:r.slice(-r.length+e)).join(".")},t.exports&&(t.exports=n.domain)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i={en:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],shorty:["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],emoji:["😝","😪","😭","🤪","🤣","😎","😂"],cn:["一","二","三","四","五","六","日"]},r=n.declare("nx.Weeks",{statics:{at:function(t,n){return i[n][t]},day:function(t,n){var e=("number"==typeof t?t:t.getDay())-1;return e=e>=0?e:6,this.at(e,n)}}});t.exports&&(t.exports=r)}()})),n((function(t){!function(){var n=n||window||Function("return this")(),i=n.nx||e,r={el:n,to:"top"};i.scrollTo=function(t){var n=i.mix(null,r,t),e=n.to;"top"===e&&(e=0),"bottom"===e&&(e=n.el.scrollHeight),n.el.scrollTop=e},t.exports&&(t.exports=i.scrollTo)}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r=/[-_.]+(.)?/g;i.camelize=function(t){var n=(t||"").replace(r,(function(t,n){return n?n.toUpperCase():""}));return n[0].toLowerCase()+n.slice(1)},t.exports&&(t.exports=i.camelize)}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r=/[-_.]+(.)?/g;i.classify=function(t){return("_"+t||"").replace(r,(function(t,n){return n?n.toUpperCase():""}))},t.exports&&(t.exports=i.classify)}()})),n((function(t){!function(){var n=("undefined"!=typeof window?window:this||Function("return this")()).nx||e,i=/([a-z])([A-Z])/g,r=/[-\s_+]+/g;n.kebabCase=function(t){if(t)return(t+"").replace(i,"$1-$2").replace(r,"-").toLowerCase()},t.exports&&(t.exports=n.kebabCase)}()})),n((function(t){!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r=/::/g,o=/([A-Z]+)([A-Z][a-z])/g,s=/([a-z\d])([A-Z])/g,u=/-/g,a=/\//g,c="$1-$2";i.underscored=function(t){return t.replace(r,"/").replace(a,"_").replace(o,c).replace(s,c).replace(u,"_").toLowerCase()},t.exports&&(t.exports=i.underscored)}()}));var S=n((function(t){!function(){var n={brightgreen:"#52c435",green:"#97c232",yellowgreen:"#a1a237",yellow:"#d7af3b",orange:"#f17f4a",red:"#d5624f",blue:"#2082bf",lightgrey:"#9e9e9e",success:"#52c434",important:"#f17f4a",critical:"#d56250",infomational:"#2183c0",inactive:"#9e9e9e",blueviolet:"#8b42d9"};function e(t){var e=t.title,i=t.content;t=n[t.color]||t.color||n.blue,t=["%c ".concat(e," %c ").concat(i," "),"padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: ".concat("#606060",";"),"padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(t,";")];console.log.apply(null,t)}t.exports?t.exports=e:window.slog=e}()}));const A=T.getInstance(),O=i.generate(e.GLOBAL),j=new s("aric");e.declare({statics:{init:function(){"undefined"==typeof gmsdk&&(this.nx(),e.mix(unsafeWindow,{$:e.mix($,{version:$.fn.jquery}),gmsdk:this.sdk()}))},nx:function(){!unsafeWindow.nx&&(unsafeWindow.nx=e)},sdk:function(){return e.mix({version:"1.0.15",http:A,store:j,slog:S},O)}}})}));
