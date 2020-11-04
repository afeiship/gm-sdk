/**
 *  name: @feizheng/gm-sdk
 *  description: Sdk for tampermonkey based on jQuery/nx.
 *  homepage: https://github.com/afeiship/gm-sdk
 *  version: 1.1.10
 *  date: 2020-11-04T03:06:53.142Z
 *  license: MIT
 */

!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}var e=n((function(n,e){(function(){
/** Detect free variable `global` from Node.js. */
var i,r,o,s,a,c,u="object"==typeof t&&t&&t.Object===Object&&t,_="object"==typeof self&&self&&self.Object===Object&&self,f=u||_||Function("return this")(),h=e&&!e.nodeType&&e,p=h&&n&&!n.nodeType&&n,l=f.nx=f.nx||{BREAKER:{},VERSION:"2.6.0",DEBUG:!1,GLOBAL:f};
/** Detect free variable `self`. */
// Some AMD build optimizers, like r.js, check for condition patterns like:
p?(
// Export for Node.js.
(p.exports=l).nx=l,
// Export for CommonJS support.
h.nx=l):
// Export to the global object.
f.nx=l,i=Array.prototype,r=Object.prototype.hasOwnProperty,o=/\[(\w+)\]/g,l.noop=function(){},l.stubTrue=function(){return!0},l.stubFalse=function(){return!1},l.stubValue=function(t){return t},l.error=function(t){throw new Error(t)},l.try=function(t){try{t()}catch(t){}},l.forEach=function(t,n,e){var i,r=t.length;for(i=0;i<r&&n.call(e,t[i],i,t)!==l.BREAKER;i++);},l.forIn=function(t,n,e){var i;for(i in t)if(r.call(t,i)&&n.call(e,i,t[i],t)===l.BREAKER)break},l.each=function(t,n,e){var i,o,s=function(i,r,o){return n.call(e,i,r,t,o)===l.BREAKER};if(t)if("number"==typeof(o=t.length))for(i=0;i<o&&!s(i,t[i],!0);i++);else for(i in t)if(r.call(t,i)&&s(i,t[i],!1))break},l.map=function(t,n,e){var i=[];return l.each(t,(function(){var t=n.apply(e,arguments);if(t===l.BREAKER)return l.BREAKER;i.push(t)})),i},l.mix=function(t){var n,e,i=t||{},r=arguments;for(n=1,e=r.length;n<e;n++)l.forIn(r[n],(function(t,n){i[t]=n}));return i},l.slice=function(t,n,e){return i.slice.call(t,n,e)},l.set=function(t,n,e){for(var i=n.replace(o,"$1").split("."),r=t||l.GLOBAL,s=i.length-1,a=i[s],c=0;c<s;c++){var u=i[c],_=isNaN(+i[c+1])?{}:[];r=r[u]=r[u]||_}return r[a]=e,t},l.get=function(t,n,e){if(!n)return t;var i=n.replace(o,".$1").split("."),r=t||l.GLOBAL;return i.forEach((function(t){r=r&&r[t]})),void 0!==e&&null==r?e:r},l.path=function(t,n,e){return null==e?this.get(t,n):this.set(t,n,e)},s=function(){},a={__class_id__:0,__type__:"nx.RootClass",__base__:Object,__meta__:{},__static__:!1,__statics__:{},__properties__:{},__methods__:{},__method_init__:l.noop,__static_init__:l.noop},c={base:function(){var t,n=this.base.caller;if(n&&(t=n.__base__))return t.apply(this,arguments)},parent:function(t){var n=void 0===this.__id__,e=l.slice(arguments,1),i=n?this.__base__:this.__base__.prototype,r=this["@"+t].__type__,o=["get","set"][e.length];switch(r){case"method":return i[t].apply(this,e);case"property":return i["@"+t][o].apply(this,e)}}},a.__methods__=s.prototype=l.mix({constructor:s,init:l.noop,destroy:l.noop,toString:function(){return"[Class@"+this.__type__+"]"}},c),
//mix && export:
l.mix(a.__statics__,c),l.mix(s,a),l.mix(s,a.__statics__),l.RootClass=s,l.defineProperty=function(t,n,e,i){var r,o,s,a,c,u="@"+n,_=e&&"object"==typeof e?e:{value:e};return"value"in _?(a=_.value,c="_"+n,r=function(){return c in this?this[c]:"function"==typeof a?a.call(this):a},o=function(t){this[c]=t}):(r=e.get||t[u]&&t[u].get||l.noop,o=e.set||t[u]&&t[u].set||l.noop),
//remain base setter/getter:
u in t&&(r.__base__=t[u].get,o.__base__=t[u].set),s=t[u]={__meta__:e,__name__:n,__type__:"property",__static__:!!i,get:r,set:o,configurable:!0},Object.defineProperty(t,n,s),s},l.defineMethod=function(t,n,e,i){var r="@"+n;return t[n]=e,t[r]={__meta__:e,__name__:n,__type__:"method",__static__:!!i}},l.defineBombMethod=function(t,n,e,i){n.split(",").forEach((function(n,r){l.defineMethod(t,n,e.call(t,n,r),i)}))},l.defineMembers=function(t,n,e,i){l.forIn(e,(function(e,r){e.indexOf(",")>-1?l.defineBombMethod(n,e,r,i):l["define"+t](n,e,r,i)}))},function(){var t=1,n=0,e="nx.Anonymous";function i(t,n){this.type=t,this.meta=n,this.base=n.extends||l.RootClass,this.$base=this.base.prototype,this.__class_meta__={},this.__class__=null,this.__constructor__=null}i.prototype={constructor:i,initMetaProcessor:function(){var n=this.meta,e=n.methods||{},i=n.statics||{};l.mix(this.__class_meta__,{__type__:this.type,__meta__:n,__base__:this.base,__class_id__:t++,__method_init__:e.init||this.base.__method_init__,__static_init__:i.init||this.base.__static_init__,__static__:!n.methods&&!!n.statics})},createClassProcessor:function(){var t=this;this.__class__=function(){this.__id__=n++,t.__constructor__.apply(this,arguments),t.registerDebug(this)}},inheritProcessor:function(){var t=this.__class_meta__;this.inheritedClass(t),this.defineMethods(t,!0),this.defineMethods(t,!1),this.defineProperties(t)},inheritedClass:function(t){var n=function(){},e=this.__class__;n.prototype=this.$base,e.prototype=new n,e.prototype.$base=this.$base,e.prototype.constructor=e},defineMethods:function(t,n){var e=n?"statics":"methods",i="__"+e+"__",r=n?this.__class__:this.__class__.prototype,o=(n?this.base:this.base.prototype)[i]||{};l.forIn(this.meta[e],(function(t,n){o[t]&&"function"==typeof n&&(n.__base__=o[t])})),r[i]=l.mix(t[i],o,this.meta[e]),l.defineMembers("Method",r,r[i],n)},defineProperties:function(t){var n=t.__static__,e=n?this.__class__:this.__class__.prototype;e.__properties__=l.mix(t.__properties__,this.meta.properties),l.defineMembers("Property",e,e.__properties__,n)},methodsConstructorProcessor:function(){var t=this.__class_meta__;this.__constructor__=function(){t.__method_init__.apply(this,arguments)}},staticsConstructorProcessor:function(){this.__class_meta__.__static_init__.call(this.__class__)},registerProcessor:function(){var t=this.__class__,n=this.type,i=this.__class_meta__;l.mix(t.prototype,i),l.mix(t,i),-1===n.indexOf(e)&&l.set(l.GLOBAL,n,t)},registerDebug:function(t){l.DEBUG&&(l.set(l,"__instances__."+(n-1),t),l.set(l,"__instances__.length",n))}},l.declare=function(n,r){var o=new i("string"==typeof n?n:e+t,r||n);return o.initMetaProcessor(),o.createClassProcessor(),o.inheritProcessor(),o.methodsConstructorProcessor(),o.staticsConstructorProcessor(),o.registerProcessor(),o.__class__}}()}).call(t)})),i=n((function(t){
/*!
	 * name: @feizheng/next-gm-api
	 * description: APIs for tampermonkey.
	 * homepage: https://github.com/afeiship/next-gm-api
	 * version: 1.0.7
	 * date: 2020-07-08T00:51:29.970Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r=["GM_addStyle","GM_deleteValue","GM_listValues","GM_addValueChangeListener","GM_removeValueChangeListener","GM_setValue","GM_getValue","GM_log","GM_getResourceText","GM_getResourceURL","GM_registerMenuCommand","GM_unregisterMenuCommand","GM_openInTab","GM_xmlhttpRequest","GM_download","GM_getTab","GM_saveTab","GM_getTabs","GM_notification","GM_setClipboard","GM_info"],o=i.declare("nx.GmApi",{statics:{version:"4.10.0",generate:function(t){var n={};return r.forEach((function(e){var i=e.split("_")[1];this[i]=n[i]=t[e]}),this),n}}});t.exports&&(t.exports=o)}()})),r=(n((function(t){
/*!
	 * name: @feizheng/next-json
	 * url: https://github.com/afeiship/next-json
	 * version: 1.0.0
	 * date: 2019-12-06T08:45:34.825Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;i.json=JSON,i.parse=function(t){try{return JSON.parse(t)}catch(t){}return t},i.stringify=function(t){try{return JSON.stringify(t)}catch(t){}return t},t.exports&&(t.exports={json:i.json,parse:i.parse,stringify:i.stringify})}()})),n((function(t){
/*!
	 * name: @feizheng/next-slice2str
	 * description: Slice string to two part.
	 * url: https://github.com/afeiship/next-slice2str
	 * version: 1.0.0
	 * date: 2019-12-18 19:21:02
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;i.slice2str=function(t,n,e){if(t||!(t.length<=n)){var i=e||0;return[t.substr(0,n),t.substr(n+i)]}},t.exports&&(t.exports=i.slice2str)}()})),n((function(t){
/*!
	 * name: @feizheng/next-abstract-storage
	 * description: An abstract storage based on next.
	 * homepage: https://github.com/afeiship/next-abstract-storage
	 * version: 2.1.0
	 * date: 2020-07-06T10:42:24.983Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r="@";i.json;i.slice2str;var o=i.declare("nx.AbstractStorage",{methods:{init:function(t){this.engine=t.engine,this.prefix=t.prefix||"",this.options=t,this.setAccessor()},setAccessor:function(){this.accessor={get:this.options.get||"getItem",set:this.options.set||"setItem",remove:this.options.remove||"removeItem",clear:this.options.clear||"clear"}},serialize:function(t){return i.stringify(t)},deserialize:function(t){return i.parse(t)},set:function(t,n){var e=t.indexOf(".");if(e>-1){var r=i.slice2str(t,e,1),o=this.get(r[0])||{};i.set(o,r[1],n),this.set(r[0],o)}else this.engine[this.accessor.set](this.__key(t),this.serialize(n))},sets:function(t){i.each(t,(function(t,n){this.set(t,n)}),this)},get:function(t){var n=t.indexOf(".");if(n>-1){var e=i.slice2str(t,n,1),r=this.get(e[0])||{};return i.get(r,e[1])}var o=this.engine[this.accessor.get](this.__key(t));return this.deserialize(o)},gets:function(t){var n={},e=this.__keys(t);return i.each(e,(function(t,e){n[e]=this.get(e)}),this),n},del:function(t){this.engine[this.accessor.remove](this.__key(t))},dels:function(t){var n=this.__keys(t);i.each(n,(function(t,n){this.del(n)}),this)},clear:function(){this.engine[this.accessor.clear]()},keys:function(){return Object.keys(this.engine)},__key:function(t){var n=this.prefix;return n?[n,r,t].join(""):t},__keys:function(t){var n,e,o=[];return Array.isArray(t)?t:(e=this.keys(),n=this.prefix.length+1,i.each(e,(function(t,e){this.prefix&&0===e.indexOf(this.prefix+r)&&o.push(e.slice(n))}),this),o.length?o:e)}}});t.exports&&(t.exports=o)}()}))),o=n((function(t){
/*!
	 * name: @feizheng/next-gm-store-engine
	 * description: Store engin for tampermonkey GM_storage.
	 * homepage: https://github.com/afeiship/next-gm-store-engine
	 * version: 1.0.0
	 * date: 2020-07-06T10:49:52.850Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=(n.nx||e).declare("nx.GmStoreEngine",{statics:{setItem:function(t,n){return GM_setValue(t,n)},getItem:function(t){return GM_getValue(t)},removeItem:function(t){GM_deleteValue(t)},clear:function(){GM_listValues().forEach((function(t){this.removeItem(t)}),this)}}});t.exports&&(t.exports=i)}()})),s=n((function(t){
/*!
	 * name: @feizheng/next-gm-storage
	 * description: Storage implement for GM tampermonkey.
	 * homepage: https://github.com/afeiship/next-gm-storage
	 * version: 1.0.0
	 * date: 2020-07-06T10:55:38.756Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,s=i.AbstractStorage||r,a=i.GmStoreEngine||o,c=i.declare("nx.GmStorage",{extends:s,methods:{init:function(t){this.base({engine:a,prefix:t||""})},serialize:function(t){return t},keys:function(){return GM_listValues()}}});t.exports&&(t.exports=c)}()})),a=n((function(t){
/*!
	 * name: @feizheng/next-param
	 * url: https://github.com/afeiship/next-param
	 * version: 1.1.4
	 * date: 2020-06-10T01:38:35.118Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r=function(t,n){return encodeURIComponent(t)+"="+encodeURIComponent(n)};i.param=function(t,n,e){var o,s=e||r,a=[];return i.forIn(t,(function(t,n){if(null!=n){var e=Array.isArray(n)?n.join():n;a.push(s(t,e))}})),o=a.join("&"),n?o?n+"?"+o:n:o},t.exports&&(t.exports=i.param)}()})),c=n((function(t){
/*!
	 * name: @feizheng/next-data-transform
	 * url: https://github.com/afeiship/next-data-transform
	 * version: 1.1.0
	 * date: 2020-01-05T04:36:55.499Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r=i.param||a,o=i.declare("nx.DataTransform",{statics:{raw:function(t){return t},json:function(t){return JSON.stringify(t)},urlencoded:function(t){return r(t)},multipart:function(t){var n=new FormData;return i.forIn(t,(function(t,e){n.append(t,e)})),n}}});t.exports&&(t.exports=o)}()})),u=n((function(t){
/*!
	 * name: @feizheng/next-stub-singleton
	 * description: Stub code for singleton.
	 * homepage: https://github.com/afeiship/next-stub-singleton
	 * version: 1.1.1
	 * date: 2020-06-14T10:04:26.493Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;i.stubSingleton=function(){return{instance:null,getInstance:function(){var t=[null].concat(i.slice(arguments));if(!this.instance){var n=Function.prototype.bind.apply(this,t);this.instance=new n}return this.instance}}},t.exports&&(t.exports=i.stubSingleton)}()})),_=n((function(t){
/*!
	 * name: @feizheng/next-delete
	 * description: Multiple delete for object.
	 * homepage: https://github.com/afeiship/next-delete
	 * version: 1.0.3
	 * date: 2020-06-29T01:12:12.552Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;i.delete=function(t,n){return(n&&0!==n.length?n:Object.keys(t)).forEach((function(n){delete t[n]})),t},t.exports&&(t.exports=i.delete)}()})),f=n((function(t){
/*!
	 * name: @feizheng/next-parse-request-args
	 * description: Request arguments parser.
	 * homepage: https://github.com/afeiship/next-parse-request-args
	 * version: 1.0.10
	 * date: 2020-11-04T02:47:26.547Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r=i.delete||_,o={method:"get"},s=["method","url","data"],a=["GET","POST","DELETE","PUT","CONNECT","HEAD","OPTIONS","TRACE"];i.parseRequestArgs=function(t,n){var e,c=t,u=null;
// input:
// 1. (config)
// 1. (url)
// 2. (url, config)
// 2. (method, config)
// 3. (method, url, config)
// 4. (method, url, data, config)
switch(c.length){case 1:u="string"==typeof c[0]?{url:c[0]}:c[0];break;case 2:e=c[0],u=a.includes(e.toUpperCase())?i.mix({method:c[0]},c[1]):i.mix({url:c[0]},c[1]);break;case 3:u=i.mix({method:c[0],url:c[1]},c[2]);break;case 4:u=i.mix({method:c[0],url:c[1],data:c[2]},c[3]);break;default:u=null,i.error("The arguments.length should between 1 ~ 4.")}return u=i.mix(null,o,u),n?[u.method,u.url,u.data,r(u,s)]:u},t.exports&&(t.exports=i.parseRequestArgs)}()})),h=n((function(t){
/*!
	 * name: @feizheng/next-abstract-request
	 * description: Standard abstract request.
	 * homepage: https://github.com/afeiship/next-abstract-request
	 * version: 1.1.9
	 * date: 2020-11-04T02:53:18.051Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r=i.stubSingleton||u,o=i.parseArgs||f,s=i.declare("nx.AbstractRequest",{statics:i.mix(null,r()),methods:{init:function(t){this.options=i.mix(null,this.defaults(),t)},defaults:function(){return null},request:function(t,n,e,r){i.error("Must be implement.")},"get,post,put,patch,delete,head":function(t){return function(){
// [ method, url, data, options ]
var n=[t].concat(i.slice(arguments)),e=o(n,!0);return this.request.apply(this,e)}}}});t.exports&&(t.exports=s)}()})),p=n((function(t){
/*!
	 * name: @feizheng/next-content-type
	 * url: https://github.com/afeiship/next-content-type
	 * version: 1.1.4
	 * date: 2020-03-09T01:34:56.188Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r={raw:"application/x-www-form-urlencoded",urlencoded:"application/x-www-form-urlencoded",multipart:"multipart/form-data",json:"application/json;charset=utf-8",plain:"text/plain"};i.contentType=function(t){return r[t]||r.raw},t.exports&&(t.exports=i.contentType)}()})),l=n((function(t){
/*!
	 * name: @feizheng/next-is-plain-object
	 * description: A isPlainObject implement.
	 * homepage: https://github.com/afeiship/next-is-plain-object
	 * version: 1.0.3
	 * date: 2020-11-04T01:46:04.364Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;
// https://github.com/reduxjs/react-redux/blob/master/src/utils/isPlainObject.js
// https://github.com/jonschlinkert/is-plain-object
function r(t){return"[object Object]"===Object.prototype.toString.call(t)}i.isPlainObject=function(t){var n,e;return!1!==r(t)&&(void 0===(
// If has modified constructor
n=t.constructor)||!1!==r(
// If has modified prototype
e=n.prototype)&&!1!==e.hasOwnProperty("isPrototypeOf"))},t.exports&&(t.exports=i.isPlainObject)}()})),d=n((function(t){
/*!
	 * name: @feizheng/next-deep-assign
	 * description: Deep assign for next.
	 * homepage: https://github.com/afeiship/next-deep-assign
	 * version: 1.2.2
	 * date: 2020-11-04T01:47:06.837Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r=i.isPlainObject||l,o=Object.prototype.toString;function s(t,n){i.forIn(n,(function(n,e){var i=o.call(e);switch(!0){case r(e):t[n]=t[n]||{},s(t[n],e);break;case"[object Undefined]"===i:break;default:t[n]=e}}))}i.deepAssign=function(t){var n=i.slice(arguments,1),e=t||{};return n.forEach((function(t){s(e,t)})),e},t.exports&&(t.exports=i.deepAssign)}()})),m=n((function(t){
/*!
	 * name: @feizheng/next-param
	 * url: https://github.com/afeiship/next-param
	 * version: 2.0.0
	 * date: 2020-06-11T00:12:25.994Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r={joinKey:",",encode:encodeURIComponent,isEmpty:function(t){return null!=t},transform:function(t,n){return this.encode(t)+"="+this.encode(n)}};i.param=function(t,n,e){var o,s=i.mix(null,r,e),a=[];return i.forIn(t,(function(t,n){if(s.isEmpty(n)){var e=Array.isArray(n)?n.join(s.joinKey):n;a.push(s.transform(t,e))}})),o=a.join("&"),n?o?n+"?"+o:n:o},t.exports&&(t.exports=i.param)}()})),x=n((function(t){
/*!
	 * name: @feizheng/next-gm-xhr
	 * description: GM_xmlhttpRequest for next.
	 * homepage: https://github.com/afeiship/next-gm-xhr
	 * version: 1.0.6
	 * date: 2020-11-04T02:54:33.856Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r=i.DataTransform||c,o=i.AbstractRequest||h,s=i.contentType||p,a=i.deepAssign||d,u=i.param||m,_={dataType:"json",responseType:"json"},f=i.declare("nx.GmXhr",{extends:o,methods:{defaults:function(){return _},request:function(t,n,e,o){var c=i.mix(null,this.options,o),_="get"===t,f=_?null:r[c.dataType](e),h=_?u(e,n):n,p={"Content-Type":s(c.dataType)},l=a({method:t,data:f,headers:p},c);return new Promise((function(t,n){GM_xmlhttpRequest(i.mix({url:h,onload:function(n){t(n.response)},onerror:function(t){n(t)},onabort:function(t){n(t)},ontimeout:function(t){n(t)}},l))}))}}});t.exports&&(t.exports=f)}()})),y=(n((function(t){
/*!
	 * name: @feizheng/next-range-date
	 * description: Get a date range.
	 * homepage: https://github.com/afeiship/next-range-date
	 * version: 1.0.1
	 * date: 2020-09-18T07:22:43.253Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;i.rangeDate=function(t,n,e){for(var i=new Date(t),r=new Date(n),o=[],s=i;s<=r;s.setDate(s.getDate()+1)){var a=e?s.toJSON():new Date(s);o.push(a)}return o},t.exports&&(t.exports=i.rangeDate)}()})),n((function(t){
/*!
	 * name: @feizheng/next-sum
	 * description: Gets the sum of the values in collection.
	 * homepage: https://github.com/afeiship/next-sum
	 * version: 1.0.0
	 * date: 2020-08-06T09:34:11.233Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;i.sum=function(t,n){var e=function(t){switch(typeof t){case"string":return function(n,e){return i.get(e,t)};case"function":return t;default:return function(t,n){return n}}}(n);return t.reduce((function(t,n,i,r){return t+e(i,n,r)}),0)},t.exports&&(t.exports=i.sum)}()})),n((function(t){
/*!
	 * name: @feizheng/next-time-format
	 * description: Time format for next.
	 * homepage: https://github.com/afeiship/next-time-format
	 * version: 1.0.4
	 * date: 2020-10-14T01:30:21.453Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e,r=function(t){return(""+t).padStart(2,"0")};i.timeFormat=function(t){var n=parseInt(t%1e3/100),e=Math.floor(t/1e3%60),i=Math.floor(t/6e4%60),o=Math.floor(t/36e5%24);return{hour:o,minute:i,second:e,millisecond:n,datetime:[r(o),r(i),r(e)].join(":")}},t.exports&&(t.exports=i.timeFormat)}()})),n((function(t){
/*!
	 * name: @feizheng/next-wait-to-display
	 * description: Wait element display in document.
	 * homepage: https://github.com/afeiship/next-wait-to-display
	 * version: 1.0.2
	 * date: 2020-10-13T23:36:39.418Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;i.waitToDisplay=function(t,n,e){var r=document.querySelector(t);if(null!=r)return e(r);setTimeout((function(){i.waitToDisplay(t,n,e)}),n)},t.exports&&(t.exports=i.waitToDisplay)}()})),n((function(t){
/*!
	 * name: @feizheng/next-map-map
	 * description: Map map method for next.
	 * homepage: https://github.com/afeiship/next-map-map
	 * version: 1.0.0
	 * date: 2020-06-02T01:55:38.743Z
	 * license: MIT
	 */
!function(){var n=n||this||window||Function("return this")(),i=n.nx||e;i.mapMap=function(t,n,e){var r={};return i.each(t,(function(i,o){var s=n.call(e,i,o,t);r[s.key]=s.value}),e),r},t.exports&&(t.exports=i.mapMap)}()})),x.getInstance()),g=i.generate(e.GLOBAL),v=new s("aric");e.declare({statics:{init:function(){this.nx(),e.mix(unsafeWindow,{$:e.mix(unsafeWindow.$,{version:$.fn.jquery}),gmsdk:this.sdk()})},nx:function(){!unsafeWindow.nx&&(unsafeWindow.nx=e)},sdk:function(){return e.mix({version:"1.1.10",http:y,store:v},g)}}})}));
