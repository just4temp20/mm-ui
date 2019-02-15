(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["act-rule"] = factory();
	else
		root["cube"] = root["cube"] || {}, root["cube"]["act-rule"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(22)('wks');
var uid = __webpack_require__(19);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(26);
var defined = __webpack_require__(13);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(33);
var toPrimitive = __webpack_require__(27);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(1);
var ctx = __webpack_require__(29);
var hide = __webpack_require__(5);
var has = __webpack_require__(4);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(34);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys');
var uid = __webpack_require__(19);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(13);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(30);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(25)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(7);
var arrayIndexOf = __webpack_require__(38)(false);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(39);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(44);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(20);
var $iterCreate = __webpack_require__(51);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(53);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(43) });


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(15);
var gOPS = __webpack_require__(31);
var pIE = __webpack_require__(24);
var toObject = __webpack_require__(28);
var IObject = __webpack_require__(26);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(10);
var dPs = __webpack_require__(52);
var enumBugKeys = __webpack_require__(23);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(25)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(47).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(50)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(40)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
var global = __webpack_require__(0);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(20);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(35)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/object/assign'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.assign);
    global.utils = mod.exports;
  }
})(this, function (exports, _assign) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CalcStyle = CalcStyle;
  exports.RandomFrom = RandomFrom;
  exports.ChangeUrlArg = ChangeUrlArg;
  exports.GetParam = GetParam;
  exports.PxToRem = PxToRem;
  exports.Extend = Extend;

  var _assign2 = _interopRequireDefault(_assign);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function CalcStyle(oStyle) {
    var radio = parseFloat(document.documentElement.style.fontSize) / 100;
    var oNewStyle = (0, _assign2.default)({}, oStyle);
    for (var i in oNewStyle) {
      if (typeof oNewStyle[i] === 'string' && ~oNewStyle[i].indexOf('px')) {
        oNewStyle[i] = parseInt(oNewStyle[i].replace('px', '')) * radio + 'px';
      }
    }
    return oNewStyle;
  }

  function RandomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
  }

  function ChangeUrlArg(url, arg, argVal) {
    var pattern = arg + '=([^&]*)';
    var replaceText = arg + '=' + argVal;
    if (url.match(pattern)) {
      var tmp = '/(' + arg + '=)([^&]*)/gi';

      tmp = url.replace(eval(tmp), replaceText);

      return tmp;
    } else {
      if (url.match('[\?]')) {
        return url + '&' + replaceText;
      } else {
        return url + '?' + replaceText;
      }
    }
  }

  function GetParam(name) {
    var value = window.location.search.match(new RegExp('[?&]' + name + '=([^&]*)(&?)', 'i'));
    value = value ? decodeURIComponent(value[1]) : '';
    return value;
  }

  function PxToRem(style) {
    for (var key in style) {
      var reg = /px/ig;
      if (reg.test(style[key])) {
        style[key] = parseInt(style[key]) / 100 + 'rem';
      }
    }
    return style;
  }

  function Extend(des, src, override) {
    if (src instanceof Array) {
      for (var i = 0, len = src.length; i < len; i++) {
        Extend(des, src[i], override);
      }
    }
    for (var i1 in src) {
      if (override || !(i1 in des)) {
        des[i1] = src[i1];
      }
    }
    return des;
  }
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var defined = __webpack_require__(13);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(45);
var descriptor = __webpack_require__(17);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(10);
var getKeys = __webpack_require__(15);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(28);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(55);
var step = __webpack_require__(56);
var Iterators = __webpack_require__(20);
var toIObject = __webpack_require__(7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(40)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(16);
var wksExt = __webpack_require__(57);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(34);
var hiddenKeys = __webpack_require__(23).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {



/***/ }),
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(65);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(67);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(48);
module.exports = __webpack_require__(57).f('iterator');


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(61);
__webpack_require__(75);
__webpack_require__(76);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(2);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(44);
var META = __webpack_require__(70).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(22);
var setToStringTag = __webpack_require__(32);
var uid = __webpack_require__(19);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(57);
var wksDefine = __webpack_require__(58);
var enumKeys = __webpack_require__(71);
var isArray = __webpack_require__(72);
var anObject = __webpack_require__(10);
var isObject = __webpack_require__(6);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(27);
var createDesc = __webpack_require__(17);
var _create = __webpack_require__(45);
var gOPNExt = __webpack_require__(73);
var $GOPD = __webpack_require__(74);
var $DP = __webpack_require__(8);
var $keys = __webpack_require__(15);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(60).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f = $propertyIsEnumerable;
  __webpack_require__(31).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(16)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(19)('meta');
var isObject = __webpack_require__(6);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(15);
var gOPS = __webpack_require__(31);
var pIE = __webpack_require__(24);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(21);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7);
var gOPN = __webpack_require__(60).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(24);
var createDesc = __webpack_require__(17);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(27);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(33);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('asyncIterator');


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('observable');


/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(108)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/act-rule/act-rule.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.actRule);
    global.index = mod.exports;
  }
})(this, function (module, exports, _actRule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _actRule2 = _interopRequireDefault(_actRule);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _actRule2.default.install = function (Vue) {
    Vue.component(_actRule2.default.name, _actRule2.default);
  };

  exports.default = _actRule2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(109)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(113),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(35), __webpack_require__(49), __webpack_require__(111), __webpack_require__(112)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'), require('@/common/utils/utils'), require('@/common/utils/htmlCode'), require('./iScroll'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign, global.utils, global.htmlCode, global.iScroll);
    global.actRule = mod.exports;
  }
})(this, function (module, exports, _assign, _utils, _htmlCode, _iScroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  var _htmlCode2 = _interopRequireDefault(_htmlCode);

  var _iScroll2 = _interopRequireDefault(_iScroll);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-act-rule';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      config: Object
    },
    data: function data() {
      return {
        content: this.config.fields.content,
        attachment: this.config.fields.attachment,

        isShowDialog: false,
        rulesScroll: null,
        probabilityStatus: '',
        from: 'preview'
      };
    },

    computed: {
      styleBasic: function styleBasic() {
        if (this.from === 'preview') {
          var oStyle = (0, _assign2.default)({}, this.config.style.basic);
          return (0, _utils.CalcStyle)(oStyle);
        } else {
          return {};
        }
      }
    },
    methods: {
      openDialog: function openDialog() {
        this.isShowDialog = true;
        if (!this.rulesScroll) {
          this.$nextTick(function () {
            this.rulesScroll = new _iScroll2.default('.scroll-box', {
              mouseWheel: !0,
              scrollbars: !0,
              shrinkScrollbars: 'scale',
              click: !0,
              tap: !0
            });
          });
        } else {
          this.rulesScroll.scrollTo(0, 0, 100, _iScroll2.default.utils.ease.elastic);
        }
      },
      closeDialog: function closeDialog() {
        this.isShowDialog = false;
      },
      toggleProbabilityStatus: function toggleProbabilityStatus() {
        console.log('toggleProbabilityStatus');
        if (this.probabilityStatus === '') {
          this.probabilityStatus = 'active';
        } else {
          this.probabilityStatus = '';
        }
        this.$nextTick(function () {
          this.rulesScroll.refresh();
        });
      }
    },
    mounted: function mounted() {
      var $content = document.querySelector('.description-scroller');

      $content.innerHTML = _htmlCode2.default.decodeHtml(this.content);

      $content = document.querySelector('.probability-scroller');

      $content.innerHTML = _htmlCode2.default.decodeHtml(this.attachment.content);
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.htmlCode = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var HtmlCode = {
    decodeHtml: function decodeHtml(s) {
      s = s !== undefined ? s : this.toString();
      var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
      return s.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
        return arrEntities[t];
      });
    }
  };
  exports.default = HtmlCode;
  module.exports = exports['default'];
});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(64)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, require('babel-runtime/helpers/typeof'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global._typeof);
    global.iScroll = mod.exports;
  }
})(this, function (module, _typeof2) {
  'use strict';

  var _typeof3 = _interopRequireDefault(_typeof2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (function (window, document, Math) {
    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

    var utils = function () {
      var me = {};

      var _elementStyle = document.createElement('div').style;
      var _vendor = function () {
        var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
            transform,
            i = 0,
            l = vendors.length;

        for (; i < l; i++) {
          transform = vendors[i] + 'ransform';
          if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
        }

        return false;
      }();

      function _prefixStyle(style) {
        if (_vendor === false) return false;
        if (_vendor === '') return style;
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
      }

      me.getTime = Date.now || function getTime() {
        return new Date().getTime();
      };

      me.extend = function (target, obj) {
        for (var i in obj) {
          target[i] = obj[i];
        }
      };

      me.addEvent = function (el, type, fn, capture) {
        el.addEventListener(type, fn, !!capture);
      };

      me.removeEvent = function (el, type, fn, capture) {
        el.removeEventListener(type, fn, !!capture);
      };

      me.prefixPointerEvent = function (pointerEvent) {
        return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
      };

      me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
        var distance = current - start,
            speed = Math.abs(distance) / time,
            destination,
            duration;

        deceleration = deceleration === undefined ? 0.0006 : deceleration;

        destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
        duration = speed / deceleration;

        if (destination < lowerMargin) {
          destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
          distance = Math.abs(destination - current);
          duration = distance / speed;
        } else if (destination > 0) {
          destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
          distance = Math.abs(current) + destination;
          duration = distance / speed;
        }

        return {
          destination: Math.round(destination),
          duration: duration
        };
      };

      var _transform = _prefixStyle('transform');

      me.extend(me, {
        hasTransform: _transform !== false,
        hasPerspective: _prefixStyle('perspective') in _elementStyle,
        hasTouch: 'ontouchstart' in window,
        hasPointer: !!(window.PointerEvent || window.MSPointerEvent),
        hasTransition: _prefixStyle('transition') in _elementStyle
      });

      me.isBadAndroid = function () {
        var appVersion = window.navigator.appVersion;

        if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
          var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
          if (safariVersion && (typeof safariVersion === 'undefined' ? 'undefined' : (0, _typeof3.default)(safariVersion)) === "object" && safariVersion.length >= 2) {
            return parseFloat(safariVersion[1]) < 535.19;
          } else {
            return true;
          }
        } else {
          return false;
        }
      }();

      me.extend(me.style = {}, {
        transform: _transform,
        transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
        transitionDuration: _prefixStyle('transitionDuration'),
        transitionDelay: _prefixStyle('transitionDelay'),
        transformOrigin: _prefixStyle('transformOrigin'),
        touchAction: _prefixStyle('touchAction')
      });

      me.hasClass = function (e, c) {
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
        return re.test(e.className);
      };

      me.addClass = function (e, c) {
        if (me.hasClass(e, c)) {
          return;
        }

        var newclass = e.className.split(' ');
        newclass.push(c);
        e.className = newclass.join(' ');
      };

      me.removeClass = function (e, c) {
        if (!me.hasClass(e, c)) {
          return;
        }

        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
        e.className = e.className.replace(re, ' ');
      };

      me.offset = function (el) {
        var left = -el.offsetLeft,
            top = -el.offsetTop;

        while (el = el.offsetParent) {
          left -= el.offsetLeft;
          top -= el.offsetTop;
        }


        return {
          left: left,
          top: top
        };
      };

      me.preventDefaultException = function (el, exceptions) {
        for (var i in exceptions) {
          if (exceptions[i].test(el[i])) {
            return true;
          }
        }

        return false;
      };

      me.extend(me.eventType = {}, {
        touchstart: 1,
        touchmove: 1,
        touchend: 1,

        mousedown: 2,
        mousemove: 2,
        mouseup: 2,

        pointerdown: 3,
        pointermove: 3,
        pointerup: 3,

        MSPointerDown: 3,
        MSPointerMove: 3,
        MSPointerUp: 3
      });

      me.extend(me.ease = {}, {
        quadratic: {
          style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          fn: function fn(k) {
            return k * (2 - k);
          }
        },
        circular: {
          style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
          fn: function fn(k) {
            return Math.sqrt(1 - --k * k);
          }
        },
        back: {
          style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          fn: function fn(k) {
            var b = 4;
            return (k = k - 1) * k * ((b + 1) * k + b) + 1;
          }
        },
        bounce: {
          style: '',
          fn: function fn(k) {
            if ((k /= 1) < 1 / 2.75) {
              return 7.5625 * k * k;
            } else if (k < 2 / 2.75) {
              return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
            } else if (k < 2.5 / 2.75) {
              return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
            } else {
              return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
            }
          }
        },
        elastic: {
          style: '',
          fn: function fn(k) {
            var f = 0.22,
                e = 0.4;

            if (k === 0) {
              return 0;
            }
            if (k == 1) {
              return 1;
            }

            return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
          }
        }
      });

      me.tap = function (e, eventName) {
        var ev = document.createEvent('Event');
        ev.initEvent(eventName, true, true);
        ev.pageX = e.pageX;
        ev.pageY = e.pageY;
        e.target.dispatchEvent(ev);
      };

      me.click = function (e) {
        var target = e.target,
            ev;

        if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
          ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
          ev.initEvent('click', true, true);

          ev.view = e.view || window;
          ev.detail = 1;
          ev.screenX = target.screenX || 0;
          ev.screenY = target.screenY || 0;
          ev.clientX = target.clientX || 0;
          ev.clientY = target.clientY || 0;
          ev.ctrlKey = !!e.ctrlKey;
          ev.altKey = !!e.altKey;
          ev.shiftKey = !!e.shiftKey;
          ev.metaKey = !!e.metaKey;
          ev.button = 0;
          ev.relatedTarget = null;
          ev._constructed = true;
          target.dispatchEvent(ev);
        }
      };

      me.getTouchAction = function (eventPassthrough, addPinch) {
        var touchAction = 'none';
        if (eventPassthrough === 'vertical') {
          touchAction = 'pan-y';
        } else if (eventPassthrough === 'horizontal') {
          touchAction = 'pan-x';
        }
        if (addPinch && touchAction != 'none') {
          touchAction += ' pinch-zoom';
        }
        return touchAction;
      };

      me.getRect = function (el) {
        if (el instanceof SVGElement) {
          var rect = el.getBoundingClientRect();
          return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          };
        } else {
          return {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight
          };
        }
      };

      return me;
    }();

    function IScroll(el, options) {
      this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
      this.scroller = this.wrapper.children[0];
      this.scrollerStyle = this.scroller.style;

      this.options = {

        resizeScrollbars: true,

        mouseWheelSpeed: 20,

        snapThreshold: 0.334,

        disablePointer: !utils.hasPointer,
        disableTouch: utils.hasPointer || !utils.hasTouch,
        disableMouse: utils.hasPointer || utils.hasTouch,
        startX: 0,
        startY: 0,
        scrollY: true,
        directionLockThreshold: 5,
        momentum: true,

        bounce: true,
        bounceTime: 600,
        bounceEasing: '',

        preventDefault: true,
        preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

        HWCompositing: true,
        useTransition: true,
        useTransform: true,
        bindToWrapper: typeof window.onmousedown === "undefined"
      };

      for (var i in options) {
        this.options[i] = options[i];
      }

      this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

      this.options.useTransition = utils.hasTransition && this.options.useTransition;
      this.options.useTransform = utils.hasTransform && this.options.useTransform;

      this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
      this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

      this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
      this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

      this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
      this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

      this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

      this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

      if (this.options.tap === true) {
        this.options.tap = 'tap';
      }

      if (!this.options.useTransition && !this.options.useTransform) {
        if (!/relative|absolute/i.test(this.scrollerStyle.position)) {
          this.scrollerStyle.position = "relative";
        }
      }

      if (this.options.shrinkScrollbars == 'scale') {
        this.options.useTransition = false;
      }

      this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

      this.x = 0;
      this.y = 0;
      this.directionX = 0;
      this.directionY = 0;
      this._events = {};

      this._init();
      this.refresh();

      this.scrollTo(this.options.startX, this.options.startY);
      this.enable();
    }

    IScroll.prototype = {
      version: '5.2.0-snapshot',

      _init: function _init() {
        this._initEvents();

        if (this.options.scrollbars || this.options.indicators) {
          this._initIndicators();
        }

        if (this.options.mouseWheel) {
          this._initWheel();
        }

        if (this.options.snap) {
          this._initSnap();
        }

        if (this.options.keyBindings) {
          this._initKeys();
        }
      },

      destroy: function destroy() {
        this._initEvents(true);
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = null;
        this._execEvent('destroy');
      },

      _transitionEnd: function _transitionEnd(e) {
        if (e.target != this.scroller || !this.isInTransition) {
          return;
        }

        this._transitionTime();
        if (!this.resetPosition(this.options.bounceTime)) {
          this.isInTransition = false;
          this._execEvent('scrollEnd');
        }
      },

      _start: function _start(e) {
        if (utils.eventType[e.type] != 1) {
          var button;
          if (!e.which) {
            button = e.button < 2 ? 0 : e.button == 4 ? 1 : 2;
          } else {
            button = e.button;
          }
          if (button !== 0) {
            return;
          }
        }

        if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
          return;
        }

        if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
          e.preventDefault();
        }

        var point = e.touches ? e.touches[0] : e,
            pos;

        this.initiated = utils.eventType[e.type];
        this.moved = false;
        this.distX = 0;
        this.distY = 0;
        this.directionX = 0;
        this.directionY = 0;
        this.directionLocked = 0;

        this.startTime = utils.getTime();

        if (this.options.useTransition && this.isInTransition) {
          this._transitionTime();
          this.isInTransition = false;
          pos = this.getComputedPosition();
          this._translate(Math.round(pos.x), Math.round(pos.y));
          this._execEvent('scrollEnd');
        } else if (!this.options.useTransition && this.isAnimating) {
          this.isAnimating = false;
          this._execEvent('scrollEnd');
        }

        this.startX = this.x;
        this.startY = this.y;
        this.absStartX = this.x;
        this.absStartY = this.y;
        this.pointX = point.pageX;
        this.pointY = point.pageY;

        this._execEvent('beforeScrollStart');
      },

      _move: function _move(e) {
        if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
          return;
        }

        if (this.options.preventDefault) {
          e.preventDefault();
        }

        var point = e.touches ? e.touches[0] : e,
            deltaX = point.pageX - this.pointX,
            deltaY = point.pageY - this.pointY,
            timestamp = utils.getTime(),
            newX,
            newY,
            absDistX,
            absDistY;

        this.pointX = point.pageX;
        this.pointY = point.pageY;

        this.distX += deltaX;
        this.distY += deltaY;
        absDistX = Math.abs(this.distX);
        absDistY = Math.abs(this.distY);

        if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
          return;
        }

        if (!this.directionLocked && !this.options.freeScroll) {
          if (absDistX > absDistY + this.options.directionLockThreshold) {
            this.directionLocked = 'h';
          } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
            this.directionLocked = 'v';
          } else {
            this.directionLocked = 'n';
          }
        }

        if (this.directionLocked == 'h') {
          if (this.options.eventPassthrough == 'vertical') {
            e.preventDefault();
          } else if (this.options.eventPassthrough == 'horizontal') {
            this.initiated = false;
            return;
          }

          deltaY = 0;
        } else if (this.directionLocked == 'v') {
          if (this.options.eventPassthrough == 'horizontal') {
            e.preventDefault();
          } else if (this.options.eventPassthrough == 'vertical') {
            this.initiated = false;
            return;
          }

          deltaX = 0;
        }

        deltaX = this.hasHorizontalScroll ? deltaX : 0;
        deltaY = this.hasVerticalScroll ? deltaY : 0;

        newX = this.x + deltaX;
        newY = this.y + deltaY;

        if (newX > 0 || newX < this.maxScrollX) {
          newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
        }
        if (newY > 0 || newY < this.maxScrollY) {
          newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
        }

        this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
        this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

        if (!this.moved) {
          this._execEvent('scrollStart');
        }

        this.moved = true;

        this._translate(newX, newY);

        if (timestamp - this.startTime > 300) {
          this.startTime = timestamp;
          this.startX = this.x;
          this.startY = this.y;
        }
      },

      _end: function _end(e) {
        if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
          return;
        }

        if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
          e.preventDefault();
        }

        var point = e.changedTouches ? e.changedTouches[0] : e,
            momentumX,
            momentumY,
            duration = utils.getTime() - this.startTime,
            newX = Math.round(this.x),
            newY = Math.round(this.y),
            distanceX = Math.abs(newX - this.startX),
            distanceY = Math.abs(newY - this.startY),
            time = 0,
            easing = '';

        this.isInTransition = 0;
        this.initiated = 0;
        this.endTime = utils.getTime();

        if (this.resetPosition(this.options.bounceTime)) {
          return;
        }

        this.scrollTo(newX, newY);
        if (!this.moved) {
          if (this.options.tap) {
            utils.tap(e, this.options.tap);
          }

          if (this.options.click) {
            utils.click(e);
          }

          this._execEvent('scrollCancel');
          return;
        }

        if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
          this._execEvent('flick');
          return;
        }

        if (this.options.momentum && duration < 300) {
          momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
            destination: newX,
            duration: 0
          };
          momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
            destination: newY,
            duration: 0
          };
          newX = momentumX.destination;
          newY = momentumY.destination;
          time = Math.max(momentumX.duration, momentumY.duration);
          this.isInTransition = 1;
        }

        if (this.options.snap) {
          var snap = this._nearestSnap(newX, newY);
          this.currentPage = snap;
          time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
          newX = snap.x;
          newY = snap.y;

          this.directionX = 0;
          this.directionY = 0;
          easing = this.options.bounceEasing;
        }

        if (newX != this.x || newY != this.y) {
          if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
            easing = utils.ease.quadratic;
          }

          this.scrollTo(newX, newY, time, easing);
          return;
        }

        this._execEvent('scrollEnd');
      },

      _resize: function _resize() {
        var that = this;

        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = setTimeout(function () {
          that.refresh();
        }, this.options.resizePolling);
      },

      resetPosition: function resetPosition(time) {
        var x = this.x,
            y = this.y;

        time = time || 0;

        if (!this.hasHorizontalScroll || this.x > 0) {
          x = 0;
        } else if (this.x < this.maxScrollX) {
          x = this.maxScrollX;
        }

        if (!this.hasVerticalScroll || this.y > 0) {
          y = 0;
        } else if (this.y < this.maxScrollY) {
          y = this.maxScrollY;
        }

        if (x == this.x && y == this.y) {
          return false;
        }

        this.scrollTo(x, y, time, this.options.bounceEasing);

        return true;
      },

      disable: function disable() {
        this.enabled = false;
      },

      enable: function enable() {
        this.enabled = true;
      },

      refresh: function refresh() {
        utils.getRect(this.wrapper);

        this.wrapperWidth = this.wrapper.clientWidth;
        this.wrapperHeight = this.wrapper.clientHeight;

        var rect = utils.getRect(this.scroller);


        this.scrollerWidth = rect.width;
        this.scrollerHeight = rect.height;

        this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

        this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
        this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

        if (!this.hasHorizontalScroll) {
          this.maxScrollX = 0;
          this.scrollerWidth = this.wrapperWidth;
        }

        if (!this.hasVerticalScroll) {
          this.maxScrollY = 0;
          this.scrollerHeight = this.wrapperHeight;
        }

        this.endTime = 0;
        this.directionX = 0;
        this.directionY = 0;

        if (utils.hasPointer && !this.options.disablePointer) {
          this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, true);

          if (!this.wrapper.style[utils.style.touchAction]) {
            this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, false);
          }
        }
        this.wrapperOffset = utils.offset(this.wrapper);

        this._execEvent('refresh');

        this.resetPosition();
      },

      on: function on(type, fn) {
        if (!this._events[type]) {
          this._events[type] = [];
        }

        this._events[type].push(fn);
      },

      off: function off(type, fn) {
        if (!this._events[type]) {
          return;
        }

        var index = this._events[type].indexOf(fn);

        if (index > -1) {
          this._events[type].splice(index, 1);
        }
      },

      _execEvent: function _execEvent(type) {
        if (!this._events[type]) {
          return;
        }

        var i = 0,
            l = this._events[type].length;

        if (!l) {
          return;
        }

        for (; i < l; i++) {
          this._events[type][i].apply(this, [].slice.call(arguments, 1));
        }
      },

      scrollBy: function scrollBy(x, y, time, easing) {
        x = this.x + x;
        y = this.y + y;
        time = time || 0;

        this.scrollTo(x, y, time, easing);
      },

      scrollTo: function scrollTo(x, y, time, easing) {
        easing = easing || utils.ease.circular;

        this.isInTransition = this.options.useTransition && time > 0;
        var transitionType = this.options.useTransition && easing.style;
        if (!time || transitionType) {
          if (transitionType) {
            this._transitionTimingFunction(easing.style);
            this._transitionTime(time);
          }
          this._translate(x, y);
        } else {
          this._animate(x, y, time, easing.fn);
        }
      },

      scrollToElement: function scrollToElement(el, time, offsetX, offsetY, easing) {
        el = el.nodeType ? el : this.scroller.querySelector(el);

        if (!el) {
          return;
        }

        var pos = utils.offset(el);

        pos.left -= this.wrapperOffset.left;
        pos.top -= this.wrapperOffset.top;

        var elRect = utils.getRect(el);
        var wrapperRect = utils.getRect(this.wrapper);
        if (offsetX === true) {
          offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 2);
        }
        if (offsetY === true) {
          offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 2);
        }

        pos.left -= offsetX || 0;
        pos.top -= offsetY || 0;

        pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
        pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

        time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

        this.scrollTo(pos.left, pos.top, time, easing);
      },

      _transitionTime: function _transitionTime(time) {
        if (!this.options.useTransition) {
          return;
        }
        time = time || 0;
        var durationProp = utils.style.transitionDuration;
        if (!durationProp) {
          return;
        }

        this.scrollerStyle[durationProp] = time + 'ms';

        if (!time && utils.isBadAndroid) {
          this.scrollerStyle[durationProp] = '0.0001ms';

          var self = this;
          rAF(function () {
            if (self.scrollerStyle[durationProp] === '0.0001ms') {
              self.scrollerStyle[durationProp] = '0s';
            }
          });
        }

        if (this.indicators) {
          for (var i = this.indicators.length; i--;) {
            this.indicators[i].transitionTime(time);
          }
        }
      },

      _transitionTimingFunction: function _transitionTimingFunction(easing) {
        this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

        if (this.indicators) {
          for (var i = this.indicators.length; i--;) {
            this.indicators[i].transitionTimingFunction(easing);
          }
        }
      },

      _translate: function _translate(x, y) {
        if (this.options.useTransform) {

          this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
        } else {
          x = Math.round(x);
          y = Math.round(y);
          this.scrollerStyle.left = x + 'px';
          this.scrollerStyle.top = y + 'px';
        }

        this.x = x;
        this.y = y;

        if (this.indicators) {
          for (var i = this.indicators.length; i--;) {
            this.indicators[i].updatePosition();
          }
        }
      },

      _initEvents: function _initEvents(remove) {
        var eventType = remove ? utils.removeEvent : utils.addEvent,
            target = this.options.bindToWrapper ? this.wrapper : window;

        eventType(window, 'orientationchange', this);
        eventType(window, 'resize', this);

        if (this.options.click) {
          eventType(this.wrapper, 'click', this, true);
        }

        if (!this.options.disableMouse) {
          eventType(this.wrapper, 'mousedown', this);
          eventType(target, 'mousemove', this);
          eventType(target, 'mousecancel', this);
          eventType(target, 'mouseup', this);
        }

        if (utils.hasPointer && !this.options.disablePointer) {
          eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
          eventType(target, utils.prefixPointerEvent('pointermove'), this);
          eventType(target, utils.prefixPointerEvent('pointercancel'), this);
          eventType(target, utils.prefixPointerEvent('pointerup'), this);
        }

        if (utils.hasTouch && !this.options.disableTouch) {
          eventType(this.wrapper, 'touchstart', this);
          eventType(target, 'touchmove', this);
          eventType(target, 'touchcancel', this);
          eventType(target, 'touchend', this);
        }

        eventType(this.scroller, 'transitionend', this);
        eventType(this.scroller, 'webkitTransitionEnd', this);
        eventType(this.scroller, 'oTransitionEnd', this);
        eventType(this.scroller, 'MSTransitionEnd', this);
      },

      getComputedPosition: function getComputedPosition() {
        var matrix = window.getComputedStyle(this.scroller, null),
            x,
            y;

        if (this.options.useTransform) {
          matrix = matrix[utils.style.transform].split(')')[0].split(', ');
          x = +(matrix[12] || matrix[4]);
          y = +(matrix[13] || matrix[5]);
        } else {
          x = +matrix.left.replace(/[^-\d.]/g, '');
          y = +matrix.top.replace(/[^-\d.]/g, '');
        }

        return { x: x, y: y };
      },
      _initIndicators: function _initIndicators() {
        var interactive = this.options.interactiveScrollbars,
            customStyle = typeof this.options.scrollbars != 'string',
            indicators = [],
            indicator;

        var that = this;

        this.indicators = [];

        if (this.options.scrollbars) {
          if (this.options.scrollY) {
            indicator = {
              el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
              interactive: interactive,
              defaultScrollbars: true,
              customStyle: customStyle,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenX: false
            };

            this.wrapper.appendChild(indicator.el);
            indicators.push(indicator);
          }

          if (this.options.scrollX) {
            indicator = {
              el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
              interactive: interactive,
              defaultScrollbars: true,
              customStyle: customStyle,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenY: false
            };

            this.wrapper.appendChild(indicator.el);
            indicators.push(indicator);
          }
        }

        if (this.options.indicators) {
          indicators = indicators.concat(this.options.indicators);
        }

        for (var i = indicators.length; i--;) {
          this.indicators.push(new Indicator(this, indicators[i]));
        }

        function _indicatorsMap(fn) {
          if (that.indicators) {
            for (var i = that.indicators.length; i--;) {
              fn.call(that.indicators[i]);
            }
          }
        }

        if (this.options.fadeScrollbars) {
          this.on('scrollEnd', function () {
            _indicatorsMap(function () {
              this.fade();
            });
          });

          this.on('scrollCancel', function () {
            _indicatorsMap(function () {
              this.fade();
            });
          });

          this.on('scrollStart', function () {
            _indicatorsMap(function () {
              this.fade(1);
            });
          });

          this.on('beforeScrollStart', function () {
            _indicatorsMap(function () {
              this.fade(1, true);
            });
          });
        }

        this.on('refresh', function () {
          _indicatorsMap(function () {
            this.refresh();
          });
        });

        this.on('destroy', function () {
          _indicatorsMap(function () {
            this.destroy();
          });

          delete this.indicators;
        });
      },

      _initWheel: function _initWheel() {
        utils.addEvent(this.wrapper, 'wheel', this);
        utils.addEvent(this.wrapper, 'mousewheel', this);
        utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

        this.on('destroy', function () {
          clearTimeout(this.wheelTimeout);
          this.wheelTimeout = null;
          utils.removeEvent(this.wrapper, 'wheel', this);
          utils.removeEvent(this.wrapper, 'mousewheel', this);
          utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
        });
      },

      _wheel: function _wheel(e) {
        if (!this.enabled) {
          return;
        }

        e.preventDefault();

        var wheelDeltaX,
            wheelDeltaY,
            newX,
            newY,
            that = this;

        if (this.wheelTimeout === undefined) {
          that._execEvent('scrollStart');
        }

        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = setTimeout(function () {
          if (!that.options.snap) {
            that._execEvent('scrollEnd');
          }
          that.wheelTimeout = undefined;
        }, 400);

        if ('deltaX' in e) {
          if (e.deltaMode === 1) {
            wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
            wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
          } else {
            wheelDeltaX = -e.deltaX;
            wheelDeltaY = -e.deltaY;
          }
        } else if ('wheelDeltaX' in e) {
          wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
          wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
        } else if ('wheelDelta' in e) {
          wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
        } else if ('detail' in e) {
          wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
        } else {
          return;
        }

        wheelDeltaX *= this.options.invertWheelDirection;
        wheelDeltaY *= this.options.invertWheelDirection;

        if (!this.hasVerticalScroll) {
          wheelDeltaX = wheelDeltaY;
          wheelDeltaY = 0;
        }

        if (this.options.snap) {
          newX = this.currentPage.pageX;
          newY = this.currentPage.pageY;

          if (wheelDeltaX > 0) {
            newX--;
          } else if (wheelDeltaX < 0) {
            newX++;
          }

          if (wheelDeltaY > 0) {
            newY--;
          } else if (wheelDeltaY < 0) {
            newY++;
          }

          this.goToPage(newX, newY);

          return;
        }

        newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
        newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

        this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
        this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

        if (newX > 0) {
          newX = 0;
        } else if (newX < this.maxScrollX) {
          newX = this.maxScrollX;
        }

        if (newY > 0) {
          newY = 0;
        } else if (newY < this.maxScrollY) {
          newY = this.maxScrollY;
        }

        this.scrollTo(newX, newY, 0);
      },

      _initSnap: function _initSnap() {
        this.currentPage = {};

        if (typeof this.options.snap == 'string') {
          this.options.snap = this.scroller.querySelectorAll(this.options.snap);
        }

        this.on('refresh', function () {
          var i = 0,
              l,
              m = 0,
              n,
              cx,
              cy,
              x = 0,
              y,
              stepX = this.options.snapStepX || this.wrapperWidth,
              stepY = this.options.snapStepY || this.wrapperHeight,
              el,
              rect;

          this.pages = [];

          if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
            return;
          }

          if (this.options.snap === true) {
            cx = Math.round(stepX / 2);
            cy = Math.round(stepY / 2);

            while (x > -this.scrollerWidth) {
              this.pages[i] = [];
              l = 0;
              y = 0;

              while (y > -this.scrollerHeight) {
                this.pages[i][l] = {
                  x: Math.max(x, this.maxScrollX),
                  y: Math.max(y, this.maxScrollY),
                  width: stepX,
                  height: stepY,
                  cx: x - cx,
                  cy: y - cy
                };

                y -= stepY;
                l++;
              }

              x -= stepX;
              i++;
            }
          } else {
            el = this.options.snap;
            l = el.length;
            n = -1;

            for (; i < l; i++) {
              rect = utils.getRect(el[i]);
              if (i === 0 || rect.left <= utils.getRect(el[i - 1]).left) {
                m = 0;
                n++;
              }

              if (!this.pages[m]) {
                this.pages[m] = [];
              }

              x = Math.max(-rect.left, this.maxScrollX);
              y = Math.max(-rect.top, this.maxScrollY);
              cx = x - Math.round(rect.width / 2);
              cy = y - Math.round(rect.height / 2);

              this.pages[m][n] = {
                x: x,
                y: y,
                width: rect.width,
                height: rect.height,
                cx: cx,
                cy: cy
              };

              if (x > this.maxScrollX) {
                m++;
              }
            }
          }

          this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

          if (this.options.snapThreshold % 1 === 0) {
            this.snapThresholdX = this.options.snapThreshold;
            this.snapThresholdY = this.options.snapThreshold;
          } else {
            this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
            this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
          }
        });

        this.on('flick', function () {
          var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);

          this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
        });
      },

      _nearestSnap: function _nearestSnap(x, y) {
        if (!this.pages.length) {
          return { x: 0, y: 0, pageX: 0, pageY: 0 };
        }

        var i = 0,
            l = this.pages.length,
            m = 0;

        if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
          return this.currentPage;
        }

        if (x > 0) {
          x = 0;
        } else if (x < this.maxScrollX) {
          x = this.maxScrollX;
        }

        if (y > 0) {
          y = 0;
        } else if (y < this.maxScrollY) {
          y = this.maxScrollY;
        }

        for (; i < l; i++) {
          if (x >= this.pages[i][0].cx) {
            x = this.pages[i][0].x;
            break;
          }
        }

        l = this.pages[i].length;

        for (; m < l; m++) {
          if (y >= this.pages[0][m].cy) {
            y = this.pages[0][m].y;
            break;
          }
        }

        if (i == this.currentPage.pageX) {
          i += this.directionX;

          if (i < 0) {
            i = 0;
          } else if (i >= this.pages.length) {
            i = this.pages.length - 1;
          }

          x = this.pages[i][0].x;
        }

        if (m == this.currentPage.pageY) {
          m += this.directionY;

          if (m < 0) {
            m = 0;
          } else if (m >= this.pages[0].length) {
            m = this.pages[0].length - 1;
          }

          y = this.pages[0][m].y;
        }

        return {
          x: x,
          y: y,
          pageX: i,
          pageY: m
        };
      },

      goToPage: function goToPage(x, y, time, easing) {
        easing = easing || this.options.bounceEasing;

        if (x >= this.pages.length) {
          x = this.pages.length - 1;
        } else if (x < 0) {
          x = 0;
        }

        if (y >= this.pages[x].length) {
          y = this.pages[x].length - 1;
        } else if (y < 0) {
          y = 0;
        }

        var posX = this.pages[x][y].x,
            posY = this.pages[x][y].y;

        time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

        this.currentPage = {
          x: posX,
          y: posY,
          pageX: x,
          pageY: y
        };

        this.scrollTo(posX, posY, time, easing);
      },

      next: function next(time, easing) {
        var x = this.currentPage.pageX,
            y = this.currentPage.pageY;

        x++;

        if (x >= this.pages.length && this.hasVerticalScroll) {
          x = 0;
          y++;
        }

        this.goToPage(x, y, time, easing);
      },

      prev: function prev(time, easing) {
        var x = this.currentPage.pageX,
            y = this.currentPage.pageY;

        x--;

        if (x < 0 && this.hasVerticalScroll) {
          x = 0;
          y--;
        }

        this.goToPage(x, y, time, easing);
      },

      _initKeys: function _initKeys(e) {
        var keys = {
          pageUp: 33,
          pageDown: 34,
          end: 35,
          home: 36,
          left: 37,
          up: 38,
          right: 39,
          down: 40
        };
        var i;

        if ((0, _typeof3.default)(this.options.keyBindings) == 'object') {
          for (i in this.options.keyBindings) {
            if (typeof this.options.keyBindings[i] == 'string') {
              this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
            }
          }
        } else {
          this.options.keyBindings = {};
        }

        for (i in keys) {
          this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
        }

        utils.addEvent(window, 'keydown', this);

        this.on('destroy', function () {
          utils.removeEvent(window, 'keydown', this);
        });
      },

      _key: function _key(e) {
        if (!this.enabled) {
          return;
        }

        var snap = this.options.snap,
            newX = snap ? this.currentPage.pageX : this.x,
            newY = snap ? this.currentPage.pageY : this.y,
            now = utils.getTime(),
            prevTime = this.keyTime || 0,
            acceleration = 0.250,
            pos;

        if (this.options.useTransition && this.isInTransition) {
          pos = this.getComputedPosition();

          this._translate(Math.round(pos.x), Math.round(pos.y));
          this.isInTransition = false;
        }

        this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

        switch (e.keyCode) {
          case this.options.keyBindings.pageUp:
            if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
              newX += snap ? 1 : this.wrapperWidth;
            } else {
              newY += snap ? 1 : this.wrapperHeight;
            }
            break;
          case this.options.keyBindings.pageDown:
            if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
              newX -= snap ? 1 : this.wrapperWidth;
            } else {
              newY -= snap ? 1 : this.wrapperHeight;
            }
            break;
          case this.options.keyBindings.end:
            newX = snap ? this.pages.length - 1 : this.maxScrollX;
            newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
            break;
          case this.options.keyBindings.home:
            newX = 0;
            newY = 0;
            break;
          case this.options.keyBindings.left:
            newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
            break;
          case this.options.keyBindings.up:
            newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
            break;
          case this.options.keyBindings.right:
            newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
            break;
          case this.options.keyBindings.down:
            newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
            break;
          default:
            return;
        }

        if (snap) {
          this.goToPage(newX, newY);
          return;
        }

        if (newX > 0) {
          newX = 0;
          this.keyAcceleration = 0;
        } else if (newX < this.maxScrollX) {
          newX = this.maxScrollX;
          this.keyAcceleration = 0;
        }

        if (newY > 0) {
          newY = 0;
          this.keyAcceleration = 0;
        } else if (newY < this.maxScrollY) {
          newY = this.maxScrollY;
          this.keyAcceleration = 0;
        }

        this.scrollTo(newX, newY, 0);

        this.keyTime = now;
      },

      _animate: function _animate(destX, destY, duration, easingFn) {
        var that = this,
            startX = this.x,
            startY = this.y,
            startTime = utils.getTime(),
            destTime = startTime + duration;

        function step() {
          var now = utils.getTime(),
              newX,
              newY,
              easing;

          if (now >= destTime) {
            that.isAnimating = false;
            that._translate(destX, destY);

            if (!that.resetPosition(that.options.bounceTime)) {
              that._execEvent('scrollEnd');
            }

            return;
          }

          now = (now - startTime) / duration;
          easing = easingFn(now);
          newX = (destX - startX) * easing + startX;
          newY = (destY - startY) * easing + startY;
          that._translate(newX, newY);

          if (that.isAnimating) {
            rAF(step);
          }
        }

        this.isAnimating = true;
        step();
      },
      handleEvent: function handleEvent(e) {
        switch (e.type) {
          case 'touchstart':
          case 'pointerdown':
          case 'MSPointerDown':
          case 'mousedown':
            this._start(e);
            break;
          case 'touchmove':
          case 'pointermove':
          case 'MSPointerMove':
          case 'mousemove':
            this._move(e);
            break;
          case 'touchend':
          case 'pointerup':
          case 'MSPointerUp':
          case 'mouseup':
          case 'touchcancel':
          case 'pointercancel':
          case 'MSPointerCancel':
          case 'mousecancel':
            this._end(e);
            break;
          case 'orientationchange':
          case 'resize':
            this._resize();
            break;
          case 'transitionend':
          case 'webkitTransitionEnd':
          case 'oTransitionEnd':
          case 'MSTransitionEnd':
            this._transitionEnd(e);
            break;
          case 'wheel':
          case 'DOMMouseScroll':
          case 'mousewheel':
            this._wheel(e);
            break;
          case 'keydown':
            this._key(e);
            break;
          case 'click':
            if (this.enabled && !e._constructed) {
              e.preventDefault();
              e.stopPropagation();
            }
            break;
        }
      }
    };

    function createDefaultScrollbar(direction, interactive, type) {
      var scrollbar = document.createElement('div'),
          indicator = document.createElement('div');

      if (type === true) {
        scrollbar.style.cssText = 'position:absolute;z-index:9999';
        indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
      }

      indicator.className = 'iScrollIndicator';

      if (direction == 'h') {
        if (type === true) {
          scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
          indicator.style.height = '100%';
        }
        scrollbar.className = 'iScrollHorizontalScrollbar';
      } else {
        if (type === true) {
          scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
          indicator.style.width = '100%';
        }
        scrollbar.className = 'iScrollVerticalScrollbar';
      }

      scrollbar.style.cssText += ';overflow:hidden';

      if (!interactive) {
        scrollbar.style.pointerEvents = 'none';
      }

      scrollbar.appendChild(indicator);

      return scrollbar;
    }

    function Indicator(scroller, options) {
      this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
      this.wrapperStyle = this.wrapper.style;
      this.indicator = this.wrapper.children[0];
      this.indicatorStyle = this.indicator.style;
      this.scroller = scroller;

      this.options = {
        listenX: true,
        listenY: true,
        interactive: false,
        resize: true,
        defaultScrollbars: false,
        shrink: false,
        fade: false,
        speedRatioX: 0,
        speedRatioY: 0
      };

      for (var i in options) {
        this.options[i] = options[i];
      }

      this.sizeRatioX = 1;
      this.sizeRatioY = 1;
      this.maxPosX = 0;
      this.maxPosY = 0;

      if (this.options.interactive) {
        if (!this.options.disableTouch) {
          utils.addEvent(this.indicator, 'touchstart', this);
          utils.addEvent(window, 'touchend', this);
        }
        if (!this.options.disablePointer) {
          utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
          utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
        }
        if (!this.options.disableMouse) {
          utils.addEvent(this.indicator, 'mousedown', this);
          utils.addEvent(window, 'mouseup', this);
        }
      }

      if (this.options.fade) {
        this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
        var durationProp = utils.style.transitionDuration;
        if (!durationProp) {
          return;
        }
        this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';

        var self = this;
        if (utils.isBadAndroid) {
          rAF(function () {
            if (self.wrapperStyle[durationProp] === '0.0001ms') {
              self.wrapperStyle[durationProp] = '0s';
            }
          });
        }
        this.wrapperStyle.opacity = '0';
      }
    }

    Indicator.prototype = {
      handleEvent: function handleEvent(e) {
        switch (e.type) {
          case 'touchstart':
          case 'pointerdown':
          case 'MSPointerDown':
          case 'mousedown':
            this._start(e);
            break;
          case 'touchmove':
          case 'pointermove':
          case 'MSPointerMove':
          case 'mousemove':
            this._move(e);
            break;
          case 'touchend':
          case 'pointerup':
          case 'MSPointerUp':
          case 'mouseup':
          case 'touchcancel':
          case 'pointercancel':
          case 'MSPointerCancel':
          case 'mousecancel':
            this._end(e);
            break;
        }
      },

      destroy: function destroy() {
        if (this.options.fadeScrollbars) {
          clearTimeout(this.fadeTimeout);
          this.fadeTimeout = null;
        }
        if (this.options.interactive) {
          utils.removeEvent(this.indicator, 'touchstart', this);
          utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
          utils.removeEvent(this.indicator, 'mousedown', this);

          utils.removeEvent(window, 'touchmove', this);
          utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
          utils.removeEvent(window, 'mousemove', this);

          utils.removeEvent(window, 'touchend', this);
          utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
          utils.removeEvent(window, 'mouseup', this);
        }

        if (this.options.defaultScrollbars && this.wrapper.parentNode) {
          this.wrapper.parentNode.removeChild(this.wrapper);
        }
      },

      _start: function _start(e) {
        var point = e.touches ? e.touches[0] : e;

        e.preventDefault();
        e.stopPropagation();

        this.transitionTime();

        this.initiated = true;
        this.moved = false;
        this.lastPointX = point.pageX;
        this.lastPointY = point.pageY;

        this.startTime = utils.getTime();

        if (!this.options.disableTouch) {
          utils.addEvent(window, 'touchmove', this);
        }
        if (!this.options.disablePointer) {
          utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
        }
        if (!this.options.disableMouse) {
          utils.addEvent(window, 'mousemove', this);
        }

        this.scroller._execEvent('beforeScrollStart');
      },

      _move: function _move(e) {
        var point = e.touches ? e.touches[0] : e,
            deltaX,
            deltaY,
            newX,
            newY,
            timestamp = utils.getTime();

        if (!this.moved) {
          this.scroller._execEvent('scrollStart');
        }

        this.moved = true;

        deltaX = point.pageX - this.lastPointX;
        this.lastPointX = point.pageX;

        deltaY = point.pageY - this.lastPointY;
        this.lastPointY = point.pageY;

        newX = this.x + deltaX;
        newY = this.y + deltaY;

        this._pos(newX, newY);

        e.preventDefault();
        e.stopPropagation();
      },

      _end: function _end(e) {
        if (!this.initiated) {
          return;
        }

        this.initiated = false;

        e.preventDefault();
        e.stopPropagation();

        utils.removeEvent(window, 'touchmove', this);
        utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
        utils.removeEvent(window, 'mousemove', this);

        if (this.scroller.options.snap) {
          var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

          var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

          if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
            this.scroller.directionX = 0;
            this.scroller.directionY = 0;
            this.scroller.currentPage = snap;
            this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
          }
        }

        if (this.moved) {
          this.scroller._execEvent('scrollEnd');
        }
      },

      transitionTime: function transitionTime(time) {
        time = time || 0;
        var durationProp = utils.style.transitionDuration;
        if (!durationProp) {
          return;
        }

        this.indicatorStyle[durationProp] = time + 'ms';

        if (!time && utils.isBadAndroid) {
          this.indicatorStyle[durationProp] = '0.0001ms';

          var self = this;
          rAF(function () {
            if (self.indicatorStyle[durationProp] === '0.0001ms') {
              self.indicatorStyle[durationProp] = '0s';
            }
          });
        }
      },

      transitionTimingFunction: function transitionTimingFunction(easing) {
        this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
      },

      refresh: function refresh() {
        this.transitionTime();

        if (this.options.listenX && !this.options.listenY) {
          this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
        } else if (this.options.listenY && !this.options.listenX) {
          this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
        } else {
          this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
        }

        if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
          utils.addClass(this.wrapper, 'iScrollBothScrollbars');
          utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

          if (this.options.defaultScrollbars && this.options.customStyle) {
            if (this.options.listenX) {
              this.wrapper.style.right = '8px';
            } else {
              this.wrapper.style.bottom = '8px';
            }
          }
        } else {
          utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
          utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

          if (this.options.defaultScrollbars && this.options.customStyle) {
            if (this.options.listenX) {
              this.wrapper.style.right = '2px';
            } else {
              this.wrapper.style.bottom = '2px';
            }
          }
        }

        utils.getRect(this.wrapper);

        if (this.options.listenX) {
          this.wrapperWidth = this.wrapper.clientWidth;
          if (this.options.resize) {
            this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
            this.indicatorStyle.width = this.indicatorWidth + 'px';
          } else {
            this.indicatorWidth = this.indicator.clientWidth;
          }

          this.maxPosX = this.wrapperWidth - this.indicatorWidth;

          if (this.options.shrink == 'clip') {
            this.minBoundaryX = -this.indicatorWidth + 8;
            this.maxBoundaryX = this.wrapperWidth - 8;
          } else {
            this.minBoundaryX = 0;
            this.maxBoundaryX = this.maxPosX;
          }

          this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
        }

        if (this.options.listenY) {
          this.wrapperHeight = this.wrapper.clientHeight;
          if (this.options.resize) {
            this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
            this.indicatorStyle.height = this.indicatorHeight + 'px';
          } else {
            this.indicatorHeight = this.indicator.clientHeight;
          }

          this.maxPosY = this.wrapperHeight - this.indicatorHeight;

          if (this.options.shrink == 'clip') {
            this.minBoundaryY = -this.indicatorHeight + 8;
            this.maxBoundaryY = this.wrapperHeight - 8;
          } else {
            this.minBoundaryY = 0;
            this.maxBoundaryY = this.maxPosY;
          }

          this.maxPosY = this.wrapperHeight - this.indicatorHeight;
          this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
        }

        this.updatePosition();
      },

      updatePosition: function updatePosition() {
        var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
            y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

        if (!this.options.ignoreBoundaries) {
          if (x < this.minBoundaryX) {
            if (this.options.shrink == 'scale') {
              this.width = Math.max(this.indicatorWidth + x, 8);
              this.indicatorStyle.width = this.width + 'px';
            }
            x = this.minBoundaryX;
          } else if (x > this.maxBoundaryX) {
            if (this.options.shrink == 'scale') {
              this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
              this.indicatorStyle.width = this.width + 'px';
              x = this.maxPosX + this.indicatorWidth - this.width;
            } else {
              x = this.maxBoundaryX;
            }
          } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
            this.width = this.indicatorWidth;
            this.indicatorStyle.width = this.width + 'px';
          }

          if (y < this.minBoundaryY) {
            if (this.options.shrink == 'scale') {
              this.height = Math.max(this.indicatorHeight + y * 3, 8);
              this.indicatorStyle.height = this.height + 'px';
            }
            y = this.minBoundaryY;
          } else if (y > this.maxBoundaryY) {
            if (this.options.shrink == 'scale') {
              this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
              this.indicatorStyle.height = this.height + 'px';
              y = this.maxPosY + this.indicatorHeight - this.height;
            } else {
              y = this.maxBoundaryY;
            }
          } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
            this.height = this.indicatorHeight;
            this.indicatorStyle.height = this.height + 'px';
          }
        }

        this.x = x;
        this.y = y;

        if (this.scroller.options.useTransform) {
          this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
        } else {
          this.indicatorStyle.left = x + 'px';
          this.indicatorStyle.top = y + 'px';
        }
      },

      _pos: function _pos(x, y) {
        if (x < 0) {
          x = 0;
        } else if (x > this.maxPosX) {
          x = this.maxPosX;
        }

        if (y < 0) {
          y = 0;
        } else if (y > this.maxPosY) {
          y = this.maxPosY;
        }

        x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
        y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

        this.scroller.scrollTo(x, y);
      },

      fade: function fade(val, hold) {
        if (hold && !this.visible) {
          return;
        }

        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = null;

        var time = val ? 250 : 500,
            delay = val ? 0 : 300;

        val = val ? '1' : '0';

        this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

        this.fadeTimeout = setTimeout(function (val) {
          this.wrapperStyle.opacity = val;
          this.visible = +val;
        }.bind(this, val), delay);
      }
    };

    IScroll.utils = utils;

    if (typeof module != 'undefined' && module.exports) {
      module.exports = IScroll;
    } else if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return IScroll;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
      window.IScroll = IScroll;
    }
  })(window, document, Math);
});

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-module actRule"
  }, [_c('div', {
    staticClass: "db-content ruleButton",
    style: (_vm.styleBasic)
  }, [_c('div', {
    staticClass: "rule",
    on: {
      "click": _vm.openDialog
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowDialog),
      expression: "isShowDialog"
    }],
    staticClass: "rule-modal rule-modal-zcd"
  }, [_c('div', {
    staticClass: "bg-rule",
    staticStyle: {
      "background-image": "url(//yun.tuisnake.com/h5-mami/activity/common/bg-rule2.png)"
    }
  }, [_c('div', {
    staticClass: "rule-modal-dialog"
  }, [_vm._m(0), _vm._v(" "), _c('section', {
    staticClass: "scroll-box"
  }, [_c('div', {
    staticStyle: {
      "transform": "translate(0px, 0px) translateZ(0px)"
    }
  }, [_vm._m(1), _c('div', {
    staticClass: "probability rule-3",
    class: _vm.probabilityStatus
  }, [_c('div', {
    staticClass: "nav",
    on: {
      "click": _vm.toggleProbabilityStatus
    }
  }, [_c('span', [_vm._v("更多概率说明")]), _c('i')]), _vm._v(" "), _vm._m(2)])])])]), _vm._v(" "), _c('div', {
    staticClass: "close",
    on: {
      "click": _vm.closeDialog
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', [_c('i'), _c('span', [_vm._v("活动说明")]), _c('i')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "description rule-3"
  }, [_c('div', {
    staticClass: "description-scroller"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text"
  }, [_c('div', {
    staticClass: "probability-wrapper rule-3"
  }, [_c('div', {
    staticClass: "probability-scroller"
  })])])
}]}

/***/ })
/******/ ]);
});