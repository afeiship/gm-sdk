// gm-sdk v1.0.5 by afeiship
(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () {
	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var nextJsCore2 = createCommonjsModule(function (module, exports) {
	(function() {
	/** Detect free variable `global` from Node.js. */
	var freeGlobal =
	  typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf =
	  typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports =
	   exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule =
	  freeExports &&
	  'object' == 'object' &&
	  module &&
	  !module.nodeType &&
	  module;

	//force inject to global:
	var nx = (root.nx = root.nx || {
	  BREAKER: {},
	  VERSION: '2.6.0',
	  DEBUG: false,
	  GLOBAL: root
	});

	// Some AMD build optimizers, like r.js, check for condition patterns like:
	if (freeModule) {
	  // Export for Node.js.
	  (freeModule.exports = nx).nx = nx;
	  // Export for CommonJS support.
	  freeExports.nx = nx;
	} else {
	  // Export to the global object.
	  root.nx = nx;
	}

	(function() {
	  var DOT = '.';
	  var NUMBER = 'number';
	  var UNDEF = 'undefined';
	  var ARRAY_PROTO = Array.prototype;
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var INDEXES_PATH_RE = /\[(\w+)\]/g;

	  nx.noop = function() {};

	  nx.stubTrue = function () {
	    return true;
	  };

	  nx.stubFalse = function () {
	    return false;
	  };

	  nx.stubValue = function (inValue) {
	    return inValue;
	  };

	  nx.error = function(inMsg) {
	    throw new Error(inMsg);
	  };

	  nx.try = function(inFn) {
	    try {
	      inFn();
	    } catch (_) {}
	  };

	  nx.forEach = function(inArray, inCallback, inContext) {
	    var length = inArray.length;
	    var i;
	    var result;
	    for (i = 0; i < length; i++) {
	      result = inCallback.call(inContext, inArray[i], i, inArray);
	      if (result === nx.BREAKER) {
	        break;
	      }
	    }
	  };

	  nx.forIn = function(inObject, inCallback, inContext) {
	    var key;
	    var result;
	    for (key in inObject) {
	      if (hasOwn.call(inObject, key)) {
	        result = inCallback.call(inContext, key, inObject[key], inObject);
	        if (result === nx.BREAKER) {
	          break;
	        }
	      }
	    }
	  };

	  nx.each = function(inTarget, inCallback, inContext) {
	    var key, length;
	    var iterator = function(inKey, inValue, inIsArray) {
	      return (
	        inCallback.call(inContext, inKey, inValue, inTarget, inIsArray) ===
	        nx.BREAKER
	      );
	    };

	    if (inTarget) {
	      length = inTarget.length;
	      if (typeof length === NUMBER) {
	        for (key = 0; key < length; key++) {
	          if (iterator(key, inTarget[key], true)) {
	            break;
	          }
	        }
	      } else {
	        for (key in inTarget) {
	          if (hasOwn.call(inTarget, key)) {
	            if (iterator(key, inTarget[key], false)) {
	              break;
	            }
	          }
	        }
	      }
	    }
	  };

	  nx.map = function(inTarget, inCallback, inContext) {
	    var result = [];
	    nx.each(inTarget, function() {
	      var item = inCallback.apply(inContext, arguments);
	      if (item !== nx.BREAKER) {
	        result.push(item);
	      } else {
	        return nx.BREAKER;
	      }
	    });
	    return result;
	  };

	  nx.mix = function(inTarget) {
	    var target = inTarget || {};
	    var i, length;
	    var args = arguments;
	    for (i = 1, length = args.length; i < length; i++) {
	      nx.forIn(args[i], function(key, val) {
	        target[key] = val;
	      });
	    }
	    return target;
	  };

	  nx.slice = function(inTarget, inStart, inEnd) {
	    return ARRAY_PROTO.slice.call(inTarget, inStart, inEnd);
	  };

	  nx.set = function(inTarget, inPath, inValue) {
	    var indexesPath = inPath.replace(INDEXES_PATH_RE, '$1');
	    var paths = indexesPath.split(DOT);
	    var result = inTarget || nx.GLOBAL;
	    var len_ = paths.length - 1;
	    var last = paths[len_];

	    for (var i = 0; i < len_; i++) {
	      var path = paths[i];
	      var target = isNaN(+paths[i + 1]) ? {} : [];
	      result = result[path] = result[path] || target;
	    }
	    result[last] = inValue;
	    return inTarget;
	  };

	  nx.get = function(inTarget, inPath, inValue) {
	    if (!inPath) return inTarget;
	    var indexesPath = inPath.replace(INDEXES_PATH_RE, '.$1');
	    var paths = indexesPath.split(DOT);
	    var result = inTarget || nx.GLOBAL;

	    paths.forEach(function(path) {
	      result = result && result[path];
	    });

	    return typeof inValue !== UNDEF && result == null ? inValue : result;
	  };

	  nx.path = function(inTarget, inPath, inValue) {
	    return inValue == null
	      ? this.get(inTarget, inPath)
	      : this.set(inTarget, inPath, inValue);
	  };
	})();

	(function() {
	  var RootClass = function() {};
	  var classMeta = {
	    __class_id__: 0,
	    __type__: 'nx.RootClass',
	    __base__: Object,
	    __meta__: {},
	    __static__: false,
	    __statics__: {},
	    __properties__: {},
	    __methods__: {},
	    __method_init__: nx.noop,
	    __static_init__: nx.noop
	  };

	  var baseMethods = {
	    base: function() {
	      var caller = this.base.caller;
	      var baseMethod;
	      if (caller && (baseMethod = caller.__base__)) {
	        return baseMethod.apply(this, arguments);
	      }
	    },
	    parent: function(inName) {
	      var isStatic = typeof this.__id__ === 'undefined';
	      var args = nx.slice(arguments, 1);
	      var base = isStatic ? this.__base__ : this.__base__.prototype;
	      var type = this['@' + inName].__type__;
	      var accessor = ['get', 'set'][args.length];
	      switch (type) {
	        case 'method':
	          return base[inName].apply(this, args);
	        case 'property':
	          return base['@' + inName][accessor].apply(this, args);
	      }
	    }
	  };

	  classMeta.__methods__ = RootClass.prototype = nx.mix(
	    {
	      constructor: RootClass,
	      init: nx.noop,
	      destroy: nx.noop,
	      toString: function() {
	        return '[Class@' + this.__type__ + ']';
	      }
	    },
	    baseMethods
	  );

	  //mix && export:
	  nx.mix(classMeta.__statics__, baseMethods);
	  nx.mix(RootClass, classMeta);
	  nx.mix(RootClass, classMeta.__statics__);
	  nx.RootClass = RootClass;
	})();

	(function() {
	  var MEMBER_PREFIX = '@';
	  var VALUE = 'value';
	  var COMMA = ',';

	  nx.defineProperty = function(inTarget, inName, inMeta, inIsStatic) {
	    var key = MEMBER_PREFIX + inName;
	    var getter, setter, descriptor;
	    var value, filed;
	    var typeOfObject = typeof inMeta === 'object';
	    var meta = inMeta && typeOfObject ? inMeta : { value: inMeta };

	    if (VALUE in meta) {
	      value = meta.value;
	      filed = '_' + inName;

	      getter = function() {
	        return filed in this
	          ? this[filed]
	          : typeof value === 'function'
	          ? value.call(this)
	          : value;
	      };

	      setter = function(inValue) {
	        this[filed] = inValue;
	      };
	    } else {
	      getter = inMeta.get || (inTarget[key] && inTarget[key].get) || nx.noop;
	      setter = inMeta.set || (inTarget[key] && inTarget[key].set) || nx.noop;
	    }

	    //remain base setter/getter:
	    if (key in inTarget) {
	      getter.__base__ = inTarget[key].get;
	      setter.__base__ = inTarget[key].set;
	    }

	    descriptor = inTarget[key] = {
	      __meta__: inMeta,
	      __name__: inName,
	      __type__: 'property',
	      __static__: !!inIsStatic,
	      get: getter,
	      set: setter,
	      configurable: true
	    };

	    Object.defineProperty(inTarget, inName, descriptor);

	    return descriptor;
	  };

	  nx.defineMethod = function(inTarget, inName, inMeta, inIsStatic) {
	    var key = MEMBER_PREFIX + inName;
	    inTarget[inName] = inMeta;
	    return (inTarget[key] = {
	      __meta__: inMeta,
	      __name__: inName,
	      __type__: 'method',
	      __static__: !!inIsStatic
	    });
	  };

	  nx.defineBombMethod = function(inTarget, inName, inMeta, inIsStatic) {
	    var keys = inName.split(COMMA);
	    keys.forEach(function(key, index) {
	      nx.defineMethod(
	        inTarget,
	        key,
	        inMeta.call(inTarget, key, index),
	        inIsStatic
	      );
	    });
	  };

	  nx.defineMembers = function(inMember, inTarget, inObject, inIsStatic) {
	    nx.forIn(inObject, function(key, val) {
	      if (key.indexOf(COMMA) > -1) {
	        nx.defineBombMethod(inTarget, key, val, inIsStatic);
	      } else {
	        nx['define' + inMember](inTarget, key, val, inIsStatic);
	      }
	    });
	  };
	})();

	(function() {
	  var classId = 1,
	    instanceId = 0;
	  var NX_ANONYMOUS = 'nx.Anonymous';

	  function LifeCycle(inType, inMeta) {
	    this.type = inType;
	    this.meta = inMeta;
	    this.base = inMeta.extends || nx.RootClass;
	    this.$base = this.base.prototype;
	    this.__class_meta__ = {};
	    this.__class__ = null;
	    this.__constructor__ = null;
	  }

	  LifeCycle.prototype = {
	    constructor: LifeCycle,
	    initMetaProcessor: function() {
	      var meta = this.meta;
	      var methods = meta.methods || {};
	      var statics = meta.statics || {};
	      nx.mix(this.__class_meta__, {
	        __type__: this.type,
	        __meta__: meta,
	        __base__: this.base,
	        __class_id__: classId++,
	        __method_init__: methods.init || this.base.__method_init__,
	        __static_init__: statics.init || this.base.__static_init__,
	        __static__: !meta.methods && !!meta.statics
	      });
	    },
	    createClassProcessor: function() {
	      var self = this;
	      this.__class__ = function() {
	        this.__id__ = instanceId++;
	        self.__constructor__.apply(this, arguments);
	        self.registerDebug(this);
	      };
	    },
	    inheritProcessor: function() {
	      var classMeta = this.__class_meta__;
	      this.inheritedClass(classMeta);
	      this.defineMethods(classMeta, true);
	      this.defineMethods(classMeta, false);
	      this.defineProperties(classMeta);
	    },
	    inheritedClass: function(inClassMeta) {
	      var SuperClass = function() {};
	      var Class = this.__class__;
	      SuperClass.prototype = this.$base;
	      Class.prototype = new SuperClass();
	      Class.prototype.$base = this.$base;
	      Class.prototype.constructor = Class;
	    },
	    defineMethods: function(inClassMeta, inIsStatic) {
	      var key = inIsStatic ? 'statics' : 'methods';
	      var key_ = '__' + key + '__';
	      var target = inIsStatic ? this.__class__ : this.__class__.prototype;
	      var baseTarget = inIsStatic ? this.base : this.base.prototype;
	      var methods = baseTarget[key_] || {};
	      nx.forIn(this.meta[key], function(key, value) {
	        if (methods[key] && typeof value === 'function') {
	          value.__base__ = methods[key];
	        }
	      });
	      target[key_] = nx.mix(inClassMeta[key_], methods, this.meta[key]);
	      nx.defineMembers('Method', target, target[key_], inIsStatic);
	    },
	    defineProperties: function(inClassMeta) {
	      var isStatic = inClassMeta.__static__;
	      var target = isStatic ? this.__class__ : this.__class__.prototype;
	      target.__properties__ = nx.mix(
	        inClassMeta.__properties__,
	        this.meta.properties
	      );
	      nx.defineMembers('Property', target, target.__properties__, isStatic);
	    },
	    methodsConstructorProcessor: function() {
	      var classMeta = this.__class_meta__;
	      this.__constructor__ = function() {
	        classMeta.__method_init__.apply(this, arguments);
	      };
	    },
	    staticsConstructorProcessor: function() {
	      var classMeta = this.__class_meta__;
	      classMeta.__static_init__.call(this.__class__);
	    },
	    registerProcessor: function() {
	      var Class = this.__class__;
	      var type = this.type;
	      var classMeta = this.__class_meta__;

	      nx.mix(Class.prototype, classMeta);
	      nx.mix(Class, classMeta);
	      if (type.indexOf(NX_ANONYMOUS) === -1) {
	        nx.set(nx.GLOBAL, type, Class);
	      }
	    },
	    registerDebug: function(inInstance) {
	      if (nx.DEBUG) {
	        nx.set(nx, '__instances__.' + (instanceId - 1), inInstance);
	        nx.set(nx, '__instances__.length', instanceId);
	      }
	    }
	  };

	  nx.declare = function(inType, inMeta) {
	    var type = typeof inType === 'string' ? inType : NX_ANONYMOUS + classId;
	    var meta = inMeta || inType;
	    var lifeCycle = new LifeCycle(type, meta);
	    lifeCycle.initMetaProcessor();
	    lifeCycle.createClassProcessor();
	    lifeCycle.inheritProcessor();
	    lifeCycle.methodsConstructorProcessor();
	    lifeCycle.staticsConstructorProcessor();
	    lifeCycle.registerProcessor();
	    return lifeCycle.__class__;
	  };
	})();
	}.call(commonjsGlobal));
	});

	var nextParam = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-param
	 * url: https://github.com/afeiship/next-param
	 * version: 1.1.4
	 * date: 2020-06-10T01:38:35.118Z
	 * license: MIT
	 */

	(function () {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;

	  var CHAR_AND = '&';
	  var CHAR_EQ = '=';
	  var CHAR_Q = '?';
	  var RETURN_VALUE = function (inKey, inValue) {
	    return encodeURIComponent(inKey) + CHAR_EQ + encodeURIComponent(inValue);
	  };

	  nx.param = function (inObj, inUrl, inCallback) {
	    var callback = inCallback || RETURN_VALUE;
	    var arr = [];
	    var result;

	    nx.forIn(inObj, function (key, value) {
	      if (value != null) {
	        var encodeValue = Array.isArray(value) ? value.join() : value;
	        arr.push(callback(key, encodeValue));
	      }
	    });

	    result = arr.join(CHAR_AND);
	    if (!inUrl) return result;
	    return !result ? inUrl : (inUrl + CHAR_Q + result);
	  };

	  if ( module.exports) {
	    module.exports = nx.param;
	  }
	})();


	});

	var nextDataTransform = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-data-transform
	 * url: https://github.com/afeiship/next-data-transform
	 * version: 1.1.0
	 * date: 2020-01-05T04:36:55.499Z
	 * license: MIT
	 */

	(function() {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;
	  var nxParam = nx.param || nextParam;

	  var NxDataTransform = nx.declare('nx.DataTransform', {
	    statics: {
	      raw: function(inData) {
	        return inData;
	      },
	      json: function(inData) {
	        return JSON.stringify(inData);
	      },
	      urlencoded: function(inData) {
	        return nxParam(inData);
	      },
	      multipart: function(inData) {
	        var data = new FormData();
	        nx.forIn(inData, function(key, value) {
	          data.append(key, value);
	        });
	        return data;
	      }
	    }
	  });

	  if ( module.exports) {
	    module.exports = NxDataTransform;
	  }
	})();


	});

	var nextStubSingleton = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-stub-singleton
	 * description: Stub code for singleton.
	 * homepage: https://github.com/afeiship/next-stub-singleton
	 * version: 1.1.1
	 * date: 2020-06-14T10:04:26.493Z
	 * license: MIT
	 */

	(function () {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;

	  nx.stubSingleton = function () {
	    return {
	      instance: null,
	      getInstance: function () {
	        var args = [ null ].concat(nx.slice(arguments));
	        if (!this.instance) {
	          var Clazz = Function.prototype.bind.apply(this, args);
	          this.instance = new Clazz();
	        }
	        return this.instance;
	      }
	    };
	  };

	  if ( module.exports) {
	    module.exports = nx.stubSingleton;
	  }
	})();


	});

	var nextDelete = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-delete
	 * description: Multiple delete for object.
	 * homepage: https://github.com/afeiship/next-delete
	 * version: 1.0.3
	 * date: 2020-06-29T01:12:12.552Z
	 * license: MIT
	 */

	(function () {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;

	  nx.delete = function (inObject, inArray) {
	    var list = !inArray || inArray.length === 0 ? Object.keys(inObject) : inArray;
	    list.forEach(function (key) {
	      delete inObject[key];
	    });
	    return inObject;
	  };


	  if ( module.exports) {
	    module.exports = nx.delete;
	  }
	})();


	});

	var nextParseRequestArgs = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-parse-request-args
	 * description: Request arguments parser.
	 * homepage: https://github.com/afeiship/next-parse-request-args
	 * version: 1.0.9
	 * date: 2020-06-29T05:42:45.934Z
	 * license: MIT
	 */

	(function () {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;
	  var nxDelete = nx.delete || nextDelete;
	  var DEFAULT_OPTIONS = { method: 'get' };
	  var DEL_FIELDS = ['method', 'url', 'data'];
	  var MSG_ERROR = 'The arguments.length should between 1 ~ 4.';

	  nx.parseRequestArgs = function (inArguments, inIsArray) {
	    var args = inArguments;
	    var length = args.length;
	    var options = null;

	    // input:
	    // 1. (config)
	    // 1. (url)
	    // 2. (url, config)
	    // 3. (method, url, config)
	    // 4. (method, url, data, config)

	    switch (length) {
	      case 1:
	        options = typeof args[0] === 'string' ? { url: args[0] } : args[0];
	        break;
	      case 2:
	        options = nx.mix({ url: args[0] }, args[1]);
	        break;
	      case 3:
	        options = nx.mix({ method: args[0], url: args[1] }, args[2]);
	        break;
	      case 4:
	        options = nx.mix({ method: args[0], url: args[1], data: args[2] }, args[3]);
	        break;
	      default:
	        options = null;
	        nx.error(MSG_ERROR);
	    }

	    options = nx.mix(null, DEFAULT_OPTIONS, options);

	    return !inIsArray ? options : [
	      options.method,
	      options.url,
	      options.data,
	      nxDelete(options, DEL_FIELDS)
	    ];
	  };

	  if ( module.exports) {
	    module.exports = nx.parseRequestArgs;
	  }
	})();


	});

	var nextAbstractRequest = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-abstract-request
	 * description: Standard abstract request.
	 * homepage: https://github.com/afeiship/next-abstract-request
	 * version: 1.1.7
	 * date: 2020-06-29T05:08:05.836Z
	 * license: MIT
	 */

	(function () {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;
	  var nxStubSingleton = nx.stubSingleton || nextStubSingleton;
	  var nxParseRequestArgs = nx.parseArgs || nextParseRequestArgs;
	  var MSG_IMPL = 'Must be implement.';

	  var NxAbstractRequest = nx.declare('nx.AbstractRequest', {
	    statics: nx.mix(null, nxStubSingleton()),
	    methods: {
	      init: function (inOptions) {
	        this.options = nx.mix(null, this.defaults(), inOptions);
	      },
	      defaults: function () {
	        return null;
	      },
	      request: function (inMethod, inUrl, inData, inOptions) {
	        nx.error(MSG_IMPL);
	      },
	      'get,post,put,patch,delete,head': function (inMethod) {
	        return function () {
	          // [ method, url, data, options ]
	          var args = nxParseRequestArgs(arguments, true);
	          args[0] = inMethod;
	          return this.request.apply(this, args);
	        };
	      }
	    }
	  });

	  if ( module.exports) {
	    module.exports = NxAbstractRequest;
	  }
	})();


	});

	var nextContentType = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-content-type
	 * url: https://github.com/afeiship/next-content-type
	 * version: 1.1.4
	 * date: 2020-03-09T01:34:56.188Z
	 * license: MIT
	 */

	(function() {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;
	  var TYPES = {
	    raw: 'application/x-www-form-urlencoded',
	    urlencoded: 'application/x-www-form-urlencoded',
	    multipart: 'multipart/form-data',
	    json: 'application/json;charset=utf-8',
	    plain: 'text/plain'
	  };

	  nx.contentType = function(inKey) {
	    return TYPES[inKey] || TYPES.raw;
	  };

	  if ( module.exports) {
	    module.exports = nx.contentType;
	  }
	})();


	});

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	}

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}

	function isPlainObject(o) {
	  var ctor,prot;

	  if (isObjectObject(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	}

	var nextDeepAssign = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-deep-assign
	 * description: Deep assign for next.
	 * homepage: https://github.com/afeiship/next-deep-assign
	 * version: 1.2.0
	 * date: 2020-06-30T06:24:49.383Z
	 * license: MIT
	 */

	(function () {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;
	  var isPlainObject$1 = global.isPlainObject || isPlainObject;
	  var OBJECT_UNDEF = '[object Undefined]';
	  var toString = Object.prototype.toString;

	  function assign(inTarget, inSrc) {
	    nx.forIn(inSrc, function (key, value) {
	      var type = toString.call(value);
	      switch (true) {
	        case isPlainObject$1(value):
	          inTarget[key] = inTarget[key] || {};
	          assign(inTarget[key], value);
	          break;
	        case type === OBJECT_UNDEF:
	          break;
	        default:
	          inTarget[key] = value;
	          break;
	      }
	    });
	  }

	  nx.deepAssign = function (inTarget) {
	    var args = nx.slice(arguments, 1);
	    var target = inTarget || {};
	    args.forEach(function (arg) {
	      assign(target, arg);
	    });
	    return target;
	  };

	  if ( module.exports) {
	    module.exports = nx.deepAssign;
	  }
	})();


	});

	var nextParam$1 = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-param
	 * url: https://github.com/afeiship/next-param
	 * version: 2.0.0
	 * date: 2020-06-11T00:12:25.994Z
	 * license: MIT
	 */

	(function () {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;
	  var CHAR_AND = '&';
	  var CHAR_EQ = '=';
	  var CHAR_Q = '?';
	  var DEFAULT_OPTIONS = {
	    joinKey: ',',
	    encode: encodeURIComponent,
	    isEmpty: function (value) { return value != null; },
	    transform: function (key, value) {
	      return this.encode(key) + CHAR_EQ + this.encode(value);
	    }
	  };

	  nx.param = function (inObj, inUrl, inOptions) {
	    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
	    var arr = [];
	    var result;

	    nx.forIn(inObj, function (key, value) {
	      if (options.isEmpty(value)) {
	        var joinedValue = Array.isArray(value) ? value.join(options.joinKey) : value;
	        arr.push(options.transform(key, joinedValue));
	      }
	    });

	    result = arr.join(CHAR_AND);
	    if (!inUrl) return result;
	    return !result ? inUrl : (inUrl + CHAR_Q + result);
	  };

	  if ( module.exports) {
	    module.exports = nx.param;
	  }
	})();


	});

	var nextGmXhr = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-gm-xhr
	 * description: GM_xmlhttpRequest for next.
	 * homepage: https://github.com/afeiship/next-gm-xhr
	 * version: 1.0.1
	 * date: 2020-07-07T06:35:03.782Z
	 * license: MIT
	 */

	(function () {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;
	  var NxDataTransform = nx.DataTransform || nextDataTransform;
	  var NxAbstractRequest = nx.AbstractRequest || nextAbstractRequest;
	  var nxContentType = nx.contentType || nextContentType;
	  var nxDeepAssign = nx.deepAssign || nextDeepAssign;
	  var nxParam = nx.param || nextParam$1;

	  var DEFAULT_OPTIONS = {
	    dataType: 'json',
	    responseType: 'json'
	  };

	  var NxGmXhr = nx.declare('nx.GmXhr', {
	    extends: NxAbstractRequest,
	    methods: {
	      defaults: function () {
	        return DEFAULT_OPTIONS;
	      },
	      request: function (inMethod, inUrl, inData, inOptions) {
	        var options = nx.mix(null, this.options, inOptions);
	        var isGET = inMethod === 'get';
	        var body = isGET ? null : NxDataTransform[options.dataType](inData);
	        var url = isGET ? nxParam(inData, inUrl) : inUrl;
	        var headers = { 'Content-Type': nxContentType(options.dataType) };
	        var config = nxDeepAssign({ method: inMethod, data: body, headers: headers }, options);

	        return new Promise(function (resolve, reject) {
	          GM_xmlhttpRequest(
	            nx.mix({
	              url: url,
	              onload: function (res) {
	                resolve(res.response);
	              },
	              onerror: function (err) {
	                reject(err);
	              },
	              onabort: function (err) {
	                reject(err);
	              },
	              ontimeout: function (err) {
	                reject(err);
	              }
	            }, config)
	          );
	        })
	      }
	    }
	  });

	  if ( module.exports) {
	    module.exports = NxGmXhr;
	  }
	})();


	});

	var nextJson = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-json
	 * url: https://github.com/afeiship/next-json
	 * version: 1.0.0
	 * date: 2019-12-06T08:45:34.825Z
	 * license: MIT
	 */

	(function() {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;

	  nx.json = JSON;
	  nx.parse = function(inValue) {
	    try {
	      return JSON.parse(inValue);
	    } catch (_) {}
	    return inValue;
	  };

	  nx.stringify = function(inValue) {
	    try {
	      return JSON.stringify(inValue);
	    } catch (_) {}
	    return inValue;
	  };

	  if ( module.exports) {
	    module.exports = {
	      json: nx.json,
	      parse: nx.parse,
	      stringify: nx.stringify
	    };
	  }
	})();


	});
	var nextJson_1 = nextJson.json;
	var nextJson_2 = nextJson.parse;
	var nextJson_3 = nextJson.stringify;

	var nextSlice2str = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-slice2str
	 * description: Slice string to two part.
	 * url: https://github.com/afeiship/next-slice2str
	 * version: 1.0.0
	 * date: 2019-12-18 19:21:02
	 * license: MIT
	 */

	(function() {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;

	  nx.slice2str = function(inString, inIndex, inStep) {
	    if (!inString && inString.length <= inIndex) return;
	    var step = inStep || 0;
	    return [inString.substr(0, inIndex), inString.substr(inIndex + step)];
	  };

	  if ( module.exports) {
	    module.exports = nx.slice2str;
	  }
	})();


	});

	var nextAbstractStorage = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-abstract-storage
	 * description: An abstract storage based on next.
	 * homepage: https://github.com/afeiship/next-abstract-storage
	 * version: 2.1.0
	 * date: 2020-07-06T10:42:24.983Z
	 * license: MIT
	 */

	(function () {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;

	  var EMPTY_STR = '';
	  var SEPARATOR = '@';

	  // import packages:
	  var _ = nx.json || nextJson;
	  _ = nx.slice2str || nextSlice2str;

	  var NxAbstractStorage = nx.declare('nx.AbstractStorage', {
	    methods: {
	      init: function (inOptions) {
	        this.engine = inOptions.engine;
	        this.prefix = inOptions.prefix || EMPTY_STR;
	        this.options = inOptions;
	        this.setAccessor();
	      },
	      setAccessor: function () {
	        this.accessor = {
	          get: this.options.get || 'getItem',
	          set: this.options.set || 'setItem',
	          remove: this.options.remove || 'removeItem',
	          clear: this.options.clear || 'clear'
	        };
	      },
	      serialize: function (inTarget) {
	        return nx.stringify(inTarget);
	      },
	      deserialize: function (inString) {
	        return nx.parse(inString);
	      },
	      set: function (inKey, inValue) {
	        var index = inKey.indexOf('.');
	        if (index > -1) {
	          var paths = nx.slice2str(inKey, index, 1);
	          var context = this.get(paths[0]) || {};
	          nx.set(context, paths[1], inValue);
	          this.set(paths[0], context);
	        } else {
	          this.engine[this.accessor.set](this.__key(inKey), this.serialize(inValue));
	        }
	      },
	      sets: function (inObject) {
	        nx.each(
	          inObject,
	          function (key, value) {
	            this.set(key, value);
	          },
	          this
	        );
	      },
	      get: function (inKey) {
	        var index = inKey.indexOf('.');
	        if (index > -1) {
	          var paths = nx.slice2str(inKey, index, 1);
	          var context = this.get(paths[0]) || {};
	          return nx.get(context, paths[1]);
	        } else {
	          var value = this.engine[this.accessor.get](this.__key(inKey));
	          return this.deserialize(value);
	        }
	      },
	      gets: function (inKeys) {
	        var result = {};
	        var keys = this.__keys(inKeys);
	        nx.each(
	          keys,
	          function (_, key) {
	            result[key] = this.get(key);
	          },
	          this
	        );
	        return result;
	      },
	      del: function (inKey) {
	        this.engine[this.accessor.remove](this.__key(inKey));
	      },
	      dels: function (inKeys) {
	        var keys = this.__keys(inKeys);
	        nx.each(
	          keys,
	          function (_, key) {
	            this.del(key);
	          },
	          this
	        );
	      },
	      clear: function () {
	        this.engine[this.accessor.clear]();
	      },
	      keys: function () {
	        return Object.keys(this.engine);
	      },
	      __key: function (inKey) {
	        var prefix = this.prefix;
	        return prefix ? [prefix, SEPARATOR, inKey].join(EMPTY_STR) : inKey;
	      },
	      __keys: function (inKeys) {
	        var length_, keys;
	        var allNsKeys = [];
	        if (!Array.isArray(inKeys)) {
	          keys = this.keys();
	          length_ = this.prefix.length + 1;
	          nx.each(
	            keys,
	            function (_, item) {
	              if (this.prefix && item.indexOf(this.prefix + SEPARATOR) === 0) {
	                allNsKeys.push(item.slice(length_));
	              }
	            },
	            this
	          );
	          return allNsKeys.length ? allNsKeys : keys;
	        }
	        return inKeys;
	      }
	    }
	  });

	  if ( module.exports) {
	    module.exports = NxAbstractStorage;
	  }
	})();


	});

	var nextGmStoreEngine = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-gm-store-engine
	 * description: Store engin for tampermonkey GM_storage.
	 * homepage: https://github.com/afeiship/next-gm-store-engine
	 * version: 1.0.0
	 * date: 2020-07-06T10:49:52.850Z
	 * license: MIT
	 */

	(function () {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;

	  var NxGmStoreEngine = nx.declare('nx.GmStoreEngine', {
	    statics: {
	      setItem: function (inKey, inValue) {
	        return GM_setValue(inKey, inValue);
	      },
	      getItem: function (inKey) {
	        return GM_getValue(inKey);
	      },
	      removeItem: function (inKey) {
	        GM_deleteValue(inKey);
	      },
	      clear: function () {
	        var keys = GM_listValues();
	        keys.forEach(function (key) {
	          this.removeItem(key);
	        }, this);
	      }
	    }
	  });

	  if ( module.exports) {
	    module.exports = NxGmStoreEngine;
	  }
	})();


	});

	var nextGmStorage = createCommonjsModule(function (module) {
	/*!
	 * name: @feizheng/next-gm-storage
	 * description: Storage implement for GM tampermonkey.
	 * homepage: https://github.com/afeiship/next-gm-storage
	 * version: 1.0.0
	 * date: 2020-07-06T10:55:38.756Z
	 * license: MIT
	 */

	(function () {
	  var global = global || this || window || Function('return this')();
	  var nx = global.nx || nextJsCore2;
	  var NxAbstractStorage = nx.AbstractStorage || nextAbstractStorage;
	  var NxGmStoreEngine = nx.GmStoreEngine || nextGmStoreEngine;


	  var NxGmStorage = nx.declare('nx.GmStorage', {
	    extends: NxAbstractStorage,
	    methods: {
	      init: function (inPrefix) {
	        this.base({
	          engine: NxGmStoreEngine,
	          prefix: inPrefix || ''
	        });
	      },
	      serialize: function (inTarget) {
	        return inTarget;
	      },
	      keys: function () {
	        return GM_listValues();
	      }
	    }
	  });

	  if ( module.exports) {
	    module.exports = NxGmStorage;
	  }
	})();


	});

	var http = nx.GmXhr.getInstance();
	var apis = [
	  "GM_addStyle",
	  "GM_deleteValue",
	  "GM_listValues",
	  "GM_addValueChangeListener",
	  "GM_removeValueChangeListener",
	  "GM_setValue",
	  "GM_getValue",
	  "GM_log",
	  "GM_getResourceText",
	  "GM_getResourceURL",
	  "GM_registerMenuCommand",
	  "GM_unregisterMenuCommand",
	  "GM_openInTab",
	  "GM_xmlhttpRequest",
	  "GM_download",
	  "GM_getTab",
	  "GM_saveTab",
	  "GM_getTabs",
	  "GM_notification",
	  "GM_setClipboard",
	  "GM_info"
	];

	nx.declare({
	  statics: {
	    init: function () {
	      nx.mix(
	        unsafeWindow,
	        {
	          nx: unsafeWindow.nx || nx,
	          gmsdk: nx.mix(
	            {
	              http,
	              store: new nx.GmStorage('aric')
	            },
	            this.generate(),
	          )
	        }
	      );
	    },
	    generate: function () {
	      var results = {};
	      apis.forEach(function (api) {
	        results[api] = nx.GLOBAL[api];
	      });
	      return results;
	    }
	  }
	});

})));
