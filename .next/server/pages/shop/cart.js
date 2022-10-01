module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/shop/cart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/apis/cart.js":
/*!**************************!*\
  !*** ./src/apis/cart.js ***!
  \**************************/
/*! exports provided: fetchCartData, fetchProductIdCartData, addCartData, removeCartData, updateCartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartData", function() { return fetchCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdCartData", function() { return fetchProductIdCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartData", function() { return addCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartData", function() { return removeCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartData", function() { return updateCartData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/cart";
const fetchCartData = cartId => {
  let endpoint = cartId ? _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}` : _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdCartData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("productId", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addCartData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeCartData = cartId => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};
const updateCartData = (cartId, data) => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].patch(endpoint, data);
};

/***/ }),

/***/ "./src/apis/shop.js":
/*!**************************!*\
  !*** ./src/apis/shop.js ***!
  \**************************/
/*! exports provided: fetchProductsData, fetchSaleProductsData, fetchFeaturedProductsData, fetchBestSellerProductsData, fetchDaleProductsData, fetchProductDetailData, fetchSearchedProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsData", function() { return fetchProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsData", function() { return fetchSaleProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsData", function() { return fetchFeaturedProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsData", function() { return fetchBestSellerProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsData", function() { return fetchDaleProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailData", function() { return fetchProductDetailData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductData", function() { return fetchSearchedProductData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/product";

const renderUrl = (url, limit, category) => {
  return url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", limit) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", category);
}; //Fetch list of products


const fetchProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_page", query.page) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_sort", query.sort.sort) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_order", query.sort.order) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("q", query.q) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.color", query.color) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.size", query.size) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("tag_like", query.tag);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchSaleProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchFeaturedProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchBestSellerProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchDaleProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
}; //Fetch product detail

const fetchProductDetailData = slug => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("slug", slug);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
}; //Fetch serched product by query

const fetchSearchedProductData = query => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("q", query.input) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", query.category) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", query.limit);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};

/***/ }),

/***/ "./src/common/axiosService.js":
/*!************************************!*\
  !*** ./src/common/axiosService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class AxiosService {
  constructor() {
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  patch(url, body) {
    return this.instance.patch(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AxiosService());

/***/ }),

/***/ "./src/common/cartServices.js":
/*!************************************!*\
  !*** ./src/common/cartServices.js ***!
  \************************************/
/*! exports provided: onAddProductToCart, onRemoveProductFromCart, onChangeProductCartQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddProductToCart", function() { return onAddProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRemoveProductFromCart", function() { return onRemoveProductFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeProductCartQuantity", function() { return onChangeProductCartQuantity; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/cart */ "./src/apis/cart.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const onAddProductToCart = ({
  product,
  quantity = 1,
  onSuccess,
  onError,
  getQuantityAvailable = () => true
}) => {
  Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchProductIdCartData"])(product.id).then(res => {
    if (res.data.length === 0) {
      if (product.quantity === 0) {
        onError && onError("Reached maximum number of products");
        getQuantityAvailable && getQuantityAvailable(false);
      } else {
        Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["addCartData"])(_objectSpread(_objectSpread({}, product), {}, {
          id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
          productId: product.id,
          cartQuantity: quantity
        })).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Add product to cart failed, please try again", err));
      }
    } else {
      let pData = res.data[0];

      if (pData.cartQuantity + quantity > pData.quantity) {
        onError && onError("Reached maximum number of products");
        getQuantityAvailable(false);
      } else {
        Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["updateCartData"])(pData.id, {
          cartQuantity: pData.cartQuantity + quantity
        }).then(res => {
          onSuccess && onSuccess(res);
        }).catch(err => onError && onError("Add product to cart failed, please try again", err));
      }
    }
  }).catch(err => onError && onError("Add product to cart failed, please try again", err));
};
const onRemoveProductFromCart = ({
  cartId,
  onSuccess,
  onError
}) => {
  if (cartId && cartId !== "" && cartId !== null) {
    Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["removeCartData"])(cartId).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Remove product failm, pleaser try again", err));
  }
};
const onChangeProductCartQuantity = ({
  product,
  quantity,
  onSuccess
}) => {
  if (quantity > product.quantity || quantity < 1) {
    return;
  }

  Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["updateCartData"])(product.id, {
    cartQuantity: quantity
  }).then(res => onSuccess && onSuccess(res)).catch(err => console.log(err));
};

/***/ }),

/***/ "./src/common/defines.js":
/*!*******************************!*\
  !*** ./src/common/defines.js ***!
  \*******************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = "https://ogami-api.herokuapp.com";

/***/ }),

/***/ "./src/common/shopUtils.js":
/*!*********************************!*\
  !*** ./src/common/shopUtils.js ***!
  \*********************************/
/*! exports provided: getProductsBySlug, calculateTotalPrice, checkProductInCart, checkProductCartQuantity, checkProductInWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySlug", function() { return getProductsBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTotalPrice", function() { return calculateTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInCart", function() { return checkProductInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductCartQuantity", function() { return checkProductCartQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInWishlist", function() { return checkProductInWishlist; });
const getProductsBySlug = (arr, slug) => {
  return slug && typeof slug === "string" ? arr.find(p => p.slug.toLowerCase() === slug.toLowerCase()) : arr;
};
const calculateTotalPrice = arr => {
  let total = 0;
  arr.forEach(item => {
    if (item.discount) {
      total += item.cartQuantity ? (item.price - item.discount) * item.cartQuantity : item.price - item.discount;
    } else {
      total += item.cartQuantity ? item.price * item.cartQuantity : item.price;
    }
  });
  return total;
}; //Cart

const checkProductInCart = (cartArr, pid) => {
  return pid ? cartArr.find(item => item.productId === pid) : undefined;
};
const checkProductCartQuantity = (cartArr, pid) => {
  const productsInCart = cartArr.filter(item => item.productId === pid);

  if (productsInCart && productsInCart.length > 0) {
    const totalProductQuantityInCart = productsInCart.reduce((total, item) => total + item.cartQuantity, 0);
    return totalProductQuantityInCart;
  } else {
    return 0;
  }
}; //Wishlist

const checkProductInWishlist = (wishlistArr, pid) => {
  return pid ? wishlistArr.find(item => item.id === pid) : undefined;
};

/***/ }),

/***/ "./src/common/useDebound.js":
/*!**********************************!*\
  !*** ./src/common/useDebound.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
}

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: formatCurrency, renderParam, formatDate, removeDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderParam", function() { return renderParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDash", function() { return removeDash; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatCurrency = (price, locales = "us-US", currency = "USD") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency
  }).format(price);
};
const renderParam = (paramName, paramValue) => {
  if (paramValue && paramValue !== "" && paramValue !== null) {
    return `&${paramName}=${paramValue}`;
  }

  return "";
};
const formatDate = (date, inputFormat = "YYYY-MM-DD", outputFormat = "MMM DD, YYYY") => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, inputFormat).format(outputFormat);
};
const removeDash = str => {
  return str.replace(/-/g, " ");
};

/***/ }),

/***/ "./src/common/withHeaderScroll.js":
/*!****************************************!*\
  !*** ./src/common/withHeaderScroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withHeaderScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\common\\withHeaderScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function withHeaderScroll(WrappedComponent) {
  return function (props) {
    const headerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    const {
      0: scroll,
      1: setScroll
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    const {
      0: isHeaderFixed,
      1: setIsHeaderFixed
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (scroll >= headerRef.current.offsetHeight) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    }, [scroll]);

    function handleScroll() {
      setScroll(window.scrollY);
    }

    return __jsx("div", {
      ref: headerRef,
      className: `header ${classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        fixed: isHeaderFixed
      }, props.className)}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, __jsx(WrappedComponent, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    })));
  };
}

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/footer-links.json */ "./src/data/footer-links.json");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/footer-links.json */ "./src/data/footer-links.json", 1);
/* harmony import */ var _elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/FooterQuickLinks */ "./src/components/footer/elements/FooterQuickLinks.js");
/* harmony import */ var _elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/FooterInfomation */ "./src/components/footer/elements/FooterInfomation.js");
/* harmony import */ var _elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/FooterSubcribeInput */ "./src/components/footer/elements/FooterSubcribeInput.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Footer({
  containerFluid,
  className
}) {
  return __jsx("div", {
    className: `footer -style-one ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "footer-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: containerFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 9,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 15,
    lg: 16,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
    colSize: {
      span: 8
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "footer-subcribe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer-subcribe__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Join Our Newsletter Now"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Get E-mail updates about our latest shop and special offers."))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
    url: "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "footer-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-bottom__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Copyright \xA9 2022 Ogami - All Rights Reserved."), __jsx("img", {
    src: "" + "/assets/images/footer/payment.png",
    alt: "Payment methods",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));

/***/ }),

/***/ "./src/components/footer/elements/FooterInfomation.js":
/*!************************************************************!*\
  !*** ./src/components/footer/elements/FooterInfomation.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterInfomation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterInfomation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function FooterInfomation() {
  return __jsx("div", {
    className: "footer-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "footer-info__logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    alt: "Ogami Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }))), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Address: 60-49 Road 11378 New York"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Phone: +65 11.188.888"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Email: ritik@konfav.com")), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "primary",
    shape: "circle",
    className: "-btn-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/footer/elements/FooterQuickLinks.js":
/*!************************************************************!*\
  !*** ./src/components/footer/elements/FooterQuickLinks.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/footer-links.json */ "./src/data/footer-links.json");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/footer-links.json */ "./src/data/footer-links.json", 1);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterQuickLinks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function FooterQuickLinks({
  colSize
}) {
  return __jsx("div", {
    className: "footer-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 10,
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], _extends({
    key: index
  }, colSize, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "footer-links__group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, item.title), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, item.items.map((link, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + link.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 23
    }
  }, " ", link.title)), " "))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FooterQuickLinks));

/***/ }),

/***/ "./src/components/footer/elements/FooterSubcribeInput.js":
/*!***************************************************************!*\
  !*** ./src/components/footer/elements/FooterSubcribeInput.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterSubcribeInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mailchimp-subscribe */ "react-mailchimp-subscribe");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterSubcribeInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  status,
  message,
  onValidated
}) => {
  const onFinish = value => {
    console.log("Success:", value);
    value && onValidated({
      EMAIL: value.email
    });
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    name: "basic",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    className: "footer-subcribe__form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    name: "email",
    rules: [{
      type: "email",
      message: "The input is not valid E-mail!"
    }, {
      required: true,
      message: "Please input your E-mail!"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Enter your email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "link",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "SUBSCRIBE"))), status === "sending" && __jsx("div", {
    style: {
      color: "blue"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 32
    }
  }, "sending..."), status === "error" && __jsx("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), status === "success" && __jsx("div", {
    style: {
      color: "green"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }));
});
function FooterSubcribeInput({
  url
}) {
  return __jsx(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default.a, {
    url: url,
    render: ({
      subscribe,
      status,
      message
    }) => __jsx(CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./src/components/header/HeaderOne.js":
/*!********************************************!*\
  !*** ./src/components/header/HeaderOne.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _top_nav_TopNavOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-nav/TopNavOne */ "./src/components/header/top-nav/TopNavOne.js");
/* harmony import */ var _menu_MenuOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/MenuOne */ "./src/components/header/menu/MenuOne.js");
/* harmony import */ var _function_menu_FunctionMenuOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function-menu/FunctionMenuOne */ "./src/components/header/function-menu/FunctionMenuOne.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\HeaderOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function HeaderOne({
  activeHeaderCollapse
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_top_nav_TopNavOne__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_menu_MenuOne__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_function_menu_FunctionMenuOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeHeaderCollapse: activeHeaderCollapse,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/header/elements/CategoryColappse.js":
/*!************************************************************!*\
  !*** ./src/components/header/elements/CategoryColappse.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\CategoryColappse.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




let categories = [{
  name: "Fresh Meat",
  href: "/shop/shop-3-column"
}, {
  name: "Vegetables",
  href: "/shop/shop-3-column"
}, {
  name: "Fruit & Nut Gifts",
  href: "/shop/shop-3-column"
}, {
  name: "Fresh Berries",
  href: "/shop/shop-3-column"
}, {
  name: "Ocean Foods",
  href: "/shop/shop-3-column"
}, {
  name: "Butter & Eggs",
  href: "/shop/shop-3-column"
}, {
  name: "Fastfood",
  href: "/shop/shop-3-column"
}, {
  name: "Fresh Onion",
  href: "/shop/shop-3-column"
}, {
  name: "Papayaya & Crisps",
  href: "/shop/shop-3-column"
}, {
  name: "Oatmeal",
  href: "/shop/shop-3-column"
}, {
  name: "Fresh Bananas",
  href: "/shop/shop-3-column"
}];

function CategoryColappse({
  active
}) {
  const {
    Panel
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Collapse"];
  return __jsx("div", {
    className: "category-collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    bordered: false,
    defaultActiveKey: active ? "1" : null,
    expandIcon: ({
      isActive
    }) => __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DownOutlined"], {
      rotate: isActive ? -180 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }),
    expandIconPosition: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(Panel, {
    header: "All departments",
    key: "1",
    extra: __jsx("i", {
      className: "far fa-bars",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 18
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, categories.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }, item.name))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(CategoryColappse));

/***/ }),

/***/ "./src/components/header/elements/FunctionItems.js":
/*!*********************************************************!*\
  !*** ./src/components/header/elements/FunctionItems.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/shopUtils */ "./src/common/shopUtils.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\FunctionItems.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function FunctionItems({
  hideTotal,
  hideWishlist
}) {
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cartReducer);
  return __jsx("div", {
    className: "function-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, !hideWishlist && __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/shop/wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "function-items-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "icon_heart_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/shop/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "function-items-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "icon_bag_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), !hideTotal && (cartState.data ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_4__["calculateTotalPrice"])(cartState.data))) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(0))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(FunctionItems));

/***/ }),

/***/ "./src/components/header/elements/MobileMenuOpener.js":
/*!************************************************************!*\
  !*** ./src/components/header/elements/MobileMenuOpener.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MobileNavigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileNavigator */ "./src/components/header/elements/MobileNavigator.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\MobileMenuOpener.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function MobileMenuOpener() {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onShowDrawer = () => {
    setVisible(true);
  };

  const onCloseDrawer = () => {
    setVisible(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    onClick: onShowDrawer,
    className: "menu-mobile-opener",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "fas fa-bars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    title: "Close",
    placement: "right",
    closable: true,
    onClose: onCloseDrawer,
    visible: visible,
    placement: "left",
    width: 320,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_MobileNavigator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MobileMenuOpener));

/***/ }),

/***/ "./src/components/header/elements/MobileNavigator.js":
/*!***********************************************************!*\
  !*** ./src/components/header/elements/MobileNavigator.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/navigator.json */ "./src/data/navigator.json");
var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/navigator.json */ "./src/data/navigator.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\MobileNavigator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function MobileNavigator() {
  const {
    SubMenu
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("mail");

  const handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  return __jsx("div", {
    className: "menu-mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    className: "menu-mobile-navigator",
    onClick: handleClick,
    selectedKeys: [current],
    mode: "inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(SubMenu, {
    key: "homepage",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.subMenu.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(SubMenu, {
    key: "shop layout",
    title: "Layout shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.layout.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop detail",
    title: "Detail shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.detail.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop pages",
    title: "Pages shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.pages.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, " ", item.title)))))), __jsx(SubMenu, {
    key: "pages",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.subMenu.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, " ", item.title))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "alipay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://ant.design",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title)))), __jsx("div", {
    className: "menu-mobile-functions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/other/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "menu-mobile-functions__login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Login / Register")), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MobileNavigator));

/***/ }),

/***/ "./src/components/header/elements/Navigator.js":
/*!*****************************************************!*\
  !*** ./src/components/header/elements/Navigator.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/navigator.json */ "./src/data/navigator.json");
var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/navigator.json */ "./src/data/navigator.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\Navigator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Navigator() {
  const {
    SubMenu
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("mail");

  const handleClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return __jsx("ul", {
    className: "navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.title)), __jsx("ul", {
    className: "navigation-item__submenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.subMenu.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, item.title)))))), __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.title)), __jsx("ul", {
    className: "navigation-item__submenu -wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "navigation-item__submenu-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Layout shop"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.layout.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, item.title))))), __jsx("div", {
    className: "navigation-item__submenu-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Detail shop"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.detail.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, item.title))))), __jsx("div", {
    className: "navigation-item__submenu-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Pages shop"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.pages.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, item.title))))))), __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.title)), __jsx("ul", {
    className: "navigation-item__submenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.subMenu.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, item.title)))))), __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.title)), __jsx("ul", {
    className: "navigation-item__submenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.subMenu.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, item.title)))))), __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Navigator));

/***/ }),

/***/ "./src/components/header/elements/SearchForm.js":
/*!******************************************************!*\
  !*** ./src/components/header/elements/SearchForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/categories.json */ "./src/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/categories.json */ "./src/data/categories.json", 1);
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/useDebound */ "./src/common/useDebound.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\SearchForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function SearchForm({
  enterButton = "Search",
  hideSelect
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: currentSearch,
    1: setCurrentSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: currentCategory,
    1: setCurrentCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_5__["default"])(currentSearch, 300);
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shopReducer);
  const {
    searchedProducts
  } = shopState;

  const onChange = val => {
    setCurrentSearch(val);
  };

  const onSelectOption = (value, option) => {
    setCurrentSearch(value);
  };

  const onSearch = val => {
    if (!currentSearch || currentSearch === "") {
      return;
    } else {
      router.push({
        pathname: "" + "/shop/shop-3-column",
        query: {
          q: currentSearch
        }
      });
    }
  };

  const onChooseCateogry = val => {
    setCurrentCategory(val);
  };

  const options = searchedProducts.data.length > 0 && searchedProducts.data.map(item => ({
    value: item.name
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__["fetchSearchedProductRequest"])({
      input: currentSearch,
      limit: 10,
      category: currentCategory
    }));
  }, [deboundValue, currentCategory]);
  return __jsx("div", {
    className: "search-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "search-form-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, !hideSelect && __jsx("div", {
    className: "search-form-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: currentCategory,
    suffixIcon: __jsx("i", {
      className: "far fa-angle-down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 27
      }
    }),
    bordered: false,
    onChange: onChooseCateogry,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "All categories"), _data_categories_json__WEBPACK_IMPORTED_MODULE_4__.map((item, index) => __jsx(Option, {
    key: index,
    value: item.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, item.name)))), __jsx("div", {
    className: "search-form-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    backfill: true,
    value: currentSearch,
    onSelect: onSelectOption,
    onChange: onChange,
    options: options,
    filterOption: (inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
    placeholder: "What do you need",
    size: "large",
    enterButton: enterButton,
    bordered: false,
    loading: searchedProducts.loading,
    onSearch: onSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SearchForm));

/***/ }),

/***/ "./src/components/header/function-menu/FunctionMenuOne.js":
/*!****************************************************************!*\
  !*** ./src/components/header/function-menu/FunctionMenuOne.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _elements_CategoryColappse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/CategoryColappse */ "./src/components/header/elements/CategoryColappse.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/SearchForm */ "./src/components/header/elements/SearchForm.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\function-menu\\FunctionMenuOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function FunctionMenuOne({
  activeHeaderCollapse
}) {
  return __jsx("div", {
    className: "header-function-menu-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "function-menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: {
      span: 24,
      order: 2
    },
    md: {
      span: 8,
      order: 1
    },
    lg: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_elements_CategoryColappse__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: activeHeaderCollapse,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: {
      span: 24,
      order: 1
    },
    md: {
      span: 16,
      order: 2
    },
    lg: 18,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_elements_SearchForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FunctionMenuOne));

/***/ }),

/***/ "./src/components/header/menu/MenuOne.js":
/*!***********************************************!*\
  !*** ./src/components/header/menu/MenuOne.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _elements_Navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/Navigator */ "./src/components/header/elements/Navigator.js");
/* harmony import */ var _elements_FunctionItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/FunctionItems */ "./src/components/header/elements/FunctionItems.js");
/* harmony import */ var _elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/MobileMenuOpener */ "./src/components/header/elements/MobileMenuOpener.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\menu\\MenuOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function MenuOne() {
  return __jsx("div", {
    className: "menu -style-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "menu-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    alt: "Ogami logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }))), __jsx(_elements_Navigator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(_elements_FunctionItems__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/header/top-nav/TopNavOne.js":
/*!****************************************************!*\
  !*** ./src/components/header/top-nav/TopNavOne.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopNavOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\top-nav\\TopNavOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const flagData = [{
  name: "english",
  image: "/assets/images/header/flag-usa.png"
}, {
  name: "japanese",
  image: "/assets/images/header/flag-jp.png"
}, {
  name: "vietnamese",
  image: "/assets/images/header/flag-vn.png"
}];
function TopNavOne({
  containerFluid
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_3__["Select"];
  return __jsx("div", {
    className: "top-nav-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fluid: containerFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "top-nav-one-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "top-nav-one-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fas fa-envelope",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), "ritik@konfav.com"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fas fa-phone-alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), "+65 11.188.888"))), __jsx("div", {
    className: "top-nav-one-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "top-nav-one-right__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "top-nav-one-right__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: "english",
    width: 125,
    bordered: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, flagData.map((item, index) => __jsx(Option, {
    key: index,
    value: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, __jsx("img", {
    style: {
      height: 13 / 16 + "em",
      width: 20 / 16 + "em",
      objectFit: "contain",
      marginTop: -3 / 16 + "em",
      marginRight: 5 / 16 + "em"
    },
    src: "" + item.image,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), item.name)))), __jsx("div", {
    className: "top-nav-one-right__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "" + "/auth/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }), "Login")))))));
}

/***/ }),

/***/ "./src/components/layout/LayoutOne.js":
/*!********************************************!*\
  !*** ./src/components/layout/LayoutOne.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_HeaderOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/HeaderOne */ "./src/components/header/HeaderOne.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/withHeaderScroll */ "./src/common/withHeaderScroll.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\layout\\LayoutOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ScrolledHeader = Object(_common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_5__["default"])(_header_HeaderOne__WEBPACK_IMPORTED_MODULE_3__["default"]);

function LayoutOne({
  title,
  children,
  headerClass,
  footerClass
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, title)), __jsx(ScrolledHeader, {
    className: headerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), children, __jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: footerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LayoutOne));

/***/ }),

/***/ "./src/components/other/Container.js":
/*!*******************************************!*\
  !*** ./src/components/other/Container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\other\\Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Container({
  fluid,
  children
}) {
  return __jsx("div", {
    className: fluid ? "container-fluid" : "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./src/components/other/FetchDataHandle.js":
/*!*************************************************!*\
  !*** ./src/components/other/FetchDataHandle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchDataHandle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\other\\FetchDataHandle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FetchDataHandle({
  data,
  errorMessage = "Get products fail, please try again",
  emptyDescription = "No product in this category",
  renderData
}) {
  return data.loading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }) : data.error ? __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, errorMessage) : data.data.length > 0 ? renderData && renderData(data.data) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: emptyDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./src/components/other/QuantitySelector.js":
/*!**************************************************!*\
  !*** ./src/components/other/QuantitySelector.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/useDebound */ "./src/common/useDebound.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\other\\QuantitySelector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function QuantitySelector({
  min,
  max,
  defaultValue = 1,
  className,
  onChange,
  onDecrease,
  onIncrease
}) {
  const firstUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue);
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_3__["default"])(value, 300);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    onChange && onChange(value);
  }, [deboundValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const decreaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (min && value <= min) {
      return;
    } else {
      if (value <= 1) {
        return;
      }

      onDecrease && onDecrease();
      setValue(value - 1);
    }
  }, [value]);
  const increaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (value >= max) {
      return;
    }

    onIncrease && onIncrease();
    setValue(value + 1);
  }, [value]);
  return __jsx("div", {
    className: `quantity-selector ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "quantity-selector-number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, value), __jsx("div", {
    className: "quantity-selector-controller",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    disabled: value <= min || value <= 1,
    onClick: decreaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "-"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    disabled: value >= max,
    onClick: increaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "+")));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(QuantitySelector));

/***/ }),

/***/ "./src/components/other/SocialIcons.js":
/*!*********************************************!*\
  !*** ./src/components/other/SocialIcons.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialIcons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\other\\SocialIcons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SocialIcons({
  className,
  type = "link",
  shape
}) {
  return __jsx("ul", {
    className: `social-icons ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-invision",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-pinterest-p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/sections/partners/PartnerOne.js":
/*!********************************************************!*\
  !*** ./src/components/sections/partners/PartnerOne.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\sections\\partners\\PartnerOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function PartnerOne({
  style
}) {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }]
  };
  return __jsx("div", {
    className: "partner-one",
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "partner-one-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), Array.from(Array(8), (e, i) => __jsx("div", {
    key: i,
    className: "slider-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + `/assets/images/sections/partners/${i + 1}.png`,
    alt: "Partner logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PartnerOne));

/***/ }),

/***/ "./src/components/shop/ShopOrderStep.js":
/*!**********************************************!*\
  !*** ./src/components/shop/ShopOrderStep.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\shop\\ShopOrderStep.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function ShopOrderStep({
  current
}) {
  return __jsx("div", {
    className: "shop-order-step",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 24,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `step-block ${classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: current === 1
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "step",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, "Shopping Cart"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, "01")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 24,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `step-block ${classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: current === 2
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "step",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "Checkout"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "02")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 24,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `step-block ${classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: current === 3
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "step",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "Order complete"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "03"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ShopOrderStep));

/***/ }),

/***/ "./src/data/categories.json":
/*!**********************************!*\
  !*** ./src/data/categories.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"bread\",\"value\":\"bread\"},{\"name\":\"fastfood\",\"value\":\"fast-food\"},{\"name\":\"fresh meat\",\"value\":\"fresh-meat\"},{\"name\":\"ocean foods\",\"value\":\"ocean-foods\"},{\"name\":\"oranges\",\"value\":\"oranges\"},{\"name\":\"organic drinks\",\"value\":\"organic-drinks\"},{\"name\":\"vegetables\",\"value\":\"vegetables\"}]");

/***/ }),

/***/ "./src/data/footer-links.json":
/*!************************************!*\
  !*** ./src/data/footer-links.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"INFOMATION\",\"items\":[{\"title\":\"About us\",\"href\":\"/other/about-us\"},{\"title\":\"Check out\",\"href\":\"/shop/checkout\"},{\"title\":\"Contact\",\"href\":\"/other/contact-us\"},{\"title\":\"Service\",\"href\":\"#\"}]},{\"title\":\"MY ACCOUNT\",\"items\":[{\"title\":\"My account\",\"href\":\"#\"},{\"title\":\"Contact\",\"href\":\"/other/contact-us\"},{\"title\":\"Shop Cart\",\"href\":\"/shop/cart\"},{\"title\":\"Tracking Order\",\"href\":\"#\"}]},{\"title\":\"QUICK SHOP\",\"items\":[{\"title\":\"About us\",\"href\":\"/other/about-us\"},{\"title\":\"Check out\",\"href\":\"/shop/checkout\"},{\"title\":\"Contact\",\"href\":\"/other/contact-us\"},{\"title\":\"Service\",\"href\":\"#\"}]}]");

/***/ }),

/***/ "./src/data/navigator.json":
/*!*********************************!*\
  !*** ./src/data/navigator.json ***!
  \*********************************/
/*! exports provided: HOME, SHOP, BLOG, PAGES, ABOUT, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"HOME\":{\"title\":\"Home\",\"href\":\"#\",\"subMenu\":[{\"title\":\"Homepage 1\",\"href\":\"/\"},{\"title\":\"Homepage 2\",\"href\":\"/homepages/homepage2\"},{\"title\":\"Homepage 3\",\"href\":\"/homepages/homepage3\"},{\"title\":\"Homepage 4\",\"href\":\"/homepages/homepage4\"},{\"title\":\"Homepage 5\",\"href\":\"/homepages/homepage5\"}]},\"SHOP\":{\"title\":\"Shop\",\"href\":\"/shop/shop-grid-3-column\",\"subMenu\":{\"layout\":[{\"title\":\"Shop Fullwidth\",\"href\":\"/shop/shop-fullwidth\"},{\"title\":\"Shop 3 Column\",\"href\":\"/shop/shop-3-column\"}],\"detail\":[{\"title\":\"Shop Detail Fullwidth\",\"href\":\"/shop/product-detail-fullwidth\"},{\"title\":\"Shop Detail Sidebar\",\"href\":\"/shop/product-detail-sidebar\"}],\"pages\":[{\"title\":\"Checkout\",\"href\":\"/shop/checkout\"},{\"title\":\"Order Complete\",\"href\":\"/shop/order-complete\"},{\"title\":\"Wishlist\",\"href\":\"/shop/wishlist\"},{\"title\":\"Compare\",\"href\":\"/shop/compare\"},{\"title\":\"Cart\",\"href\":\"/shop/cart\"}]}},\"BLOG\":{\"title\":\"Blog\",\"href\":\"/blog/blog-list-sidebar\",\"subMenu\":[{\"title\":\"Blog List Sidebar\",\"href\":\"/blog/blog-list-sidebar\"},{\"title\":\"Blog Grid 2 Column\",\"href\":\"/blog/blog-grid-2-column\"},{\"title\":\"Blog Grid Sidebar\",\"href\":\"/blog/blog-grid-sidebar\"},{\"title\":\"Blog Masonry\",\"href\":\"/blog/blog-masonry\"},{\"title\":\"Blog Grid 1 Column Sidebar\",\"href\":\"/blog/blog-grid-1-column-sidebar\"},{\"title\":\"Blog Detail Sidebar\",\"href\":\"/blog/blog-detail\"}]},\"PAGES\":{\"title\":\"Pages\",\"href\":\"#\",\"subMenu\":[{\"title\":\"Login\",\"href\":\"/auth/login\"},{\"title\":\"Register\",\"href\":\"/auth/register\"},{\"title\":\"FAQ\",\"href\":\"/other/faq\"},{\"title\":\"Coming Soon\",\"href\":\"/other/coming-soon\"},{\"title\":\"Contact Us\",\"href\":\"/other/contact-us\"}]},\"ABOUT\":{\"title\":\"About us\",\"href\":\"/other/about-us\"}}");

/***/ }),

/***/ "./src/pages/shop/cart.js":
/*!********************************!*\
  !*** ./src/pages/shop/cart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/cartServices */ "./src/common/cartServices.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout/LayoutOne */ "./src/components/layout/LayoutOne.js");
/* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _components_other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js");
/* harmony import */ var _components_other_QuantitySelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/other/QuantitySelector */ "./src/components/other/QuantitySelector.js");
/* harmony import */ var _components_shop_ShopOrderStep__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/shop/ShopOrderStep */ "./src/components/shop/ShopOrderStep.js");
/* harmony import */ var _components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/sections/partners/PartnerOne */ "./src/components/sections/partners/PartnerOne.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\pages\\shop\\cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function cart() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: modalState,
    1: setModalState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    visible: false,
    message: "Add some message",
    cartId: null
  });
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.cartReducer);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__["fetchCartRequest"])());
  }, []);

  const showModal = (message, cartId) => {
    setModalState(_objectSpread(_objectSpread({}, modalState), {}, {
      visible: true,
      message: message,
      cartId
    }));
  };

  const onChangeQuantity = (product, quantity) => {
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_4__["onChangeProductCartQuantity"])({
      product,
      quantity: quantity,
      onSuccess: () => dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__["fetchCartRequest"])())
    });
  };

  const handleOk = e => {
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_4__["onRemoveProductFromCart"])({
      cartId: modalState.cartId,
      onSuccess: () => {
        setModalState(_objectSpread(_objectSpread({}, modalState), {}, {
          visible: false
        }));
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product removed from cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__["fetchCartRequest"])());
      },
      onError: mes => {
        setModalState(_objectSpread(_objectSpread({}, modalState), {}, {
          visible: false
        }));
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
      }
    });
  };

  const handleCancel = e => {
    setModalState(_objectSpread(_objectSpread({}, modalState), {}, {
      visible: false
    }));
  };

  const onSubmitCoupon = values => {
    console.log("Success:", values);
  };

  const onSubmitCouponFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx(_components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Shopping Cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
    separator: ">",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "Shop"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, "Cart")), __jsx(_components_shop_ShopOrderStep__WEBPACK_IMPORTED_MODULE_12__["default"], {
    current: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx(_components_other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    emptyDescription: "No product in cart",
    data: cartState,
    renderData: data => __jsx("div", {
      className: "cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "shop-table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    }, __jsx("table", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("colgroup", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, __jsx("col", {
      style: {
        width: 150 / 16 + "em"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }), __jsx("col", {
      style: {
        width: "25%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }), __jsx("col", {
      style: {
        width: "20%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }), __jsx("col", {
      style: {
        width: "20%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }), __jsx("col", {
      style: {
        width: "20%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }), __jsx("col", {
      style: {
        width: "15%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    })), __jsx("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 19
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 23
      }
    }, "Image"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 23
      }
    }, "Product Name"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 23
      }
    }, "Price"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 23
      }
    }, "Quantity"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 23
      }
    }, "Total"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 23
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: "Clear cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: () => showModal("Are you sure to remove alll product from cart"),
      icon: __jsx("i", {
        className: "fal fa-times",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 35
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 27
      }
    }))))), __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 19
      }
    }, data.map((item, index) => __jsx("tr", {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 23
      }
    }, __jsx("td", {
      className: "table-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "table-img-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: "" + item.coverImage,
      alt: "Product image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 29
      }
    }))), __jsx("td", {
      className: "table-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, item.name), __jsx("td", {
      className: "table-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["formatCurrency"])(item.price)), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 25
      }
    }, __jsx(_components_other_QuantitySelector__WEBPACK_IMPORTED_MODULE_11__["default"], {
      max: item.quantity,
      onChange: val => onChangeQuantity(item, val),
      defaultValue: item.cartQuantity,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 27
      }
    })), __jsx("td", {
      className: "table-total",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 25
      }
    }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["formatCurrency"])(item.price * item.cartQuantity)), __jsx("td", {
      className: "table-remove",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: "Remove product",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 27
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: () => showModal("Are you sure to remove this product from cart", item.id),
      icon: __jsx("i", {
        className: "fal fa-times",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 37
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 29
      }
    })))))))), __jsx("div", {
      className: "cart-footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "cart-footer__promo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      name: "basic",
      onFinish: onSubmitCoupon,
      onFinishFailed: onSubmitCouponFailed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 19
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
      name: "promo",
      rules: [{
        required: true,
        message: "Please provide a coupon code"
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      placeholder: "Coupon code",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 23
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "primary",
      htmlType: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 23
      }
    }, "Apply coupon")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "cart-footer__update",
      type: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "" + "/shop/shop-3-column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 21
      }
    }, "Update cart")))), __jsx("div", {
      className: "cart-total",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 15
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }
    }, "Cart total"), __jsx("table", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }
    }, __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 19
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 21
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 23
      }
    }, "SUBTOTAL"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 23
      }
    }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["formatCurrency"])(Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_7__["calculateTotalPrice"])(cartState.data)))), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 21
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 23
      }
    }, "SHIPPING"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }, "Free shipping"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 25
      }
    }, "Calculate shipping"))), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 21
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 23
      }
    }, "Total"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 23
      }
    }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["formatCurrency"])(Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_7__["calculateTotalPrice"])(cartState.data)))))), __jsx("div", {
      className: "cart-total__checkout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "primary",
      shape: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "" + "/shop/checkout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 23
      }
    }, "Proceed to Checkout"))), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 19
      }
    }, "-"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "" + "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 23
      }
    }, "Check out with PayPal")))))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx(_components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    visible: modalState.visible,
    onOk: handleOk,
    onCancel: handleCancel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }, modalState.message)));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(cart));

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/*! exports provided: SHOP, BLOG, SHOP_FILTER, CART, WISHLIST, COMPARE, BLOG_FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_FILTER", function() { return SHOP_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE", function() { return COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_FILTER", function() { return BLOG_FILTER; });
const SHOP = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAIL: "FETCH_PRODUCTS_FAIL",
  FETCH_SALE_PRODUCTS: "FETCH_SALE_PRODUCTS",
  FETCH_SALE_PRODUCTS_SUCCESS: "FETCH_SALE_PRODUCTS_SUCCESS",
  FETCH_SALE_PRODUCTS_FAIL: "FETCH_SALE_PRODUCTS_FAIL",
  FETCH_FEATURED_PRODUCTS: "FETCH_FEATURED_PRODUCTS",
  FETCH_FEATURED_PRODUCTS_SUCCESS: "FETCH_FEATURED_PRODUCTS_SUCCESS",
  FETCH_FEATURED_PRODUCTS_FAIL: "FETCH_FEATURED_PRODUCTS_FAIL",
  FETCH_BEST_SELLER_PRODUCTS: "FETCH_BEST_SELLER_PRODUCTS",
  FETCH_BEST_SELLER_PRODUCTS_SUCCESS: "FETCH_BEST_SELLER_PRODUCTS_SUCCESS",
  FETCH_BEST_SELLER_PRODUCTS_FAIL: "FETCH_BEST_SELLER_PRODUCTS_FAIL",
  FETCH_DALE_PRODUCTS: "FETCH_DALE_PRODUCTS",
  FETCH_DALE_PRODUCTS_SUCCESS: "FETCH_DALE_PRODUCTS_SUCCESS",
  FETCH_DALE_PRODUCTS_FAIL: "FETCH_DALE_PRODUCTS_FAIL",
  FETCH_PRODUCT_DETAIL: "FETCH_PRODUCT_DETAIL",
  FETCH_PRODUCT_DETAIL_SUCCESS: "FETCH_PRODUCT_DETAIL_SUCCESS",
  FETCH_PRODUCT_DETAIL_FAIL: "FETCH_PRODUCT_DETAIL_FAIL",
  FETCH_SEARCHED_PRODUCTS: "FETCH_SEARCHED_PRODUCTS",
  FETCH_SEARCHED_PRODUCTS_SUCCESS: "FETCH_SEARCHED_PRODUCTS_SUCCESS",
  FETCH_SEARCHED_PRODUCTS_FAIL: "FETCH_SEARCHED_PRODUCTS_FAIL"
};
const BLOG = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAIL: "FETCH_POSTS_FAIL",
  FETCH_POST_DETAIL: "FETCH_POST_DETAIL",
  FETCH_POST_DETAIL_SUCCESS: "FETCH_POST_DETAIL_SUCCESS",
  FETCH_POST_DETAIL_FAIL: "FETCH_POST_DETAIL_FAIL",
  FETCH_RECENT_POSTS: "FETCH_RECENT_POSTS",
  FETCH_RECENT_POSTS_SUCCESS: "FETCH_RECENT_POSTS_SUCCESS",
  FETCH_RECENT_POSTS_FAIL: "FETCH_RECENT_POSTS_FAIL"
};
const SHOP_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_SORT: "SET_SORT",
  SET_SHOW: "SET_SHOW",
  SET_VIEW: "SET_VIEW",
  SET_CATEGORY: "SET_CATEGORY",
  SET_COLOR: "SET_COLOR",
  SET_SIZE: "SET_SIZE",
  SET_TAG: "SET_TAG"
};
const CART = {
  FETCH_CART: "FETCH_CART",
  FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
  FETCH_CART_FAIL: "FETCH_CART_FAIL"
};
const WISHLIST = {
  FETCH_WISHLIST: "FETCH_WISHLIST",
  FETCH_WISHLIST_SUCCESS: "FETCH_WISHLIST_SUCCESS",
  FETCH_WISHLIST_FAIL: "FETCH_WISHLIST_FAIL"
};
const COMPARE = {
  ADD_TO_COMPARE: "ADD_TO_COMPARE",
  REMOVE_FROM_COMPARE: "REMOVE_FROM_COMPARE"
};
const BLOG_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_CATEGORY: "SET_CATEGORY",
  SET_TAG: "SET_TAG"
};

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: fetchCart, fetchCartSuccess, fetchCartFail, fetchCartRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCart", function() { return fetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartSuccess", function() { return fetchCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartFail", function() { return fetchCartFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartRequest", function() { return fetchCartRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/cart */ "./src/apis/cart.js");

 //Get cart data

const fetchCart = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART
});
const fetchCartSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS,
  payload: {
    data
  }
});
const fetchCartFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL,
  payload: {
    err
  }
});
const fetchCartRequest = () => {
  return dispatch => {
    dispatch(fetchCart());
    _apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchCartData"]().then(res => {
      dispatch(fetchCartSuccess(res.data));
    }).catch(err => {
      dispatch(fetchCartFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/shopActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/shopActions.js ***!
  \******************************************/
/*! exports provided: fetchProducts, fetchProductsSuccess, fetchProductsFail, fetchProductsRequest, fetchSaleProducts, fetchSaleProductsSuccess, fetchSaleProductsFail, fetchSaleProductsRequest, fetchFeaturedProducts, fetchFeaturedProductsSuccess, fetchFeaturedProductsFail, fetchFeaturedProductsRequest, fetchBestSellerProducts, fetchBestSellerProductsSuccess, fetchBestSellerProductsFail, fetchBestSellerProductsRequest, fetchDaleProducts, fetchDaleProductsSuccess, fetchDaleProductsFail, fetchDaleProductsRequest, fetchProductDetail, fetchProductDetailSuccess, fetchProductDetailFail, fetchProductDetailRequest, fetchSearchedProduct, fetchSearchedProductSuccess, fetchSearchedProductFail, fetchSearchedProductRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsSuccess", function() { return fetchProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsFail", function() { return fetchProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsRequest", function() { return fetchProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProducts", function() { return fetchSaleProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsSuccess", function() { return fetchSaleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsFail", function() { return fetchSaleProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsRequest", function() { return fetchSaleProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProducts", function() { return fetchFeaturedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsSuccess", function() { return fetchFeaturedProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsFail", function() { return fetchFeaturedProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsRequest", function() { return fetchFeaturedProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProducts", function() { return fetchBestSellerProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsSuccess", function() { return fetchBestSellerProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsFail", function() { return fetchBestSellerProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsRequest", function() { return fetchBestSellerProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProducts", function() { return fetchDaleProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsSuccess", function() { return fetchDaleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsFail", function() { return fetchDaleProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsRequest", function() { return fetchDaleProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetail", function() { return fetchProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailSuccess", function() { return fetchProductDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailFail", function() { return fetchProductDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailRequest", function() { return fetchProductDetailRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProduct", function() { return fetchSearchedProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductSuccess", function() { return fetchSearchedProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductFail", function() { return fetchSearchedProductFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductRequest", function() { return fetchSearchedProductRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/shop */ "./src/apis/shop.js");

 //Get all products

const fetchProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS
});
const fetchProductsSuccess = (data, productCount) => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_SUCCESS,
  payload: {
    data,
    productCount
  }
});
const fetchProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchProductsRequest = query => {
  return dispatch => {
    dispatch(fetchProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductsData"](query).then(res => {
      dispatch(fetchProductsSuccess(res.data, res.headers["x-total-count"]));
    }).catch(err => {
      dispatch(fetchProductsFail(err));
    });
  };
}; //Get sale products

const fetchSaleProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS
});
const fetchSaleProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchSaleProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchSaleProductsRequest = query => {
  return dispatch => {
    dispatch(fetchSaleProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSaleProductsData"](query).then(res => {
      dispatch(fetchSaleProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchSaleProductsFail(err));
    });
  };
}; //Get featured products

const fetchFeaturedProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS
});
const fetchFeaturedProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchFeaturedProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchFeaturedProductsRequest = query => {
  return dispatch => {
    dispatch(fetchFeaturedProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchFeaturedProductsData"](query).then(res => {
      dispatch(fetchFeaturedProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchFeaturedProductsFail(err));
    });
  };
}; //Get best seller products

const fetchBestSellerProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS
});
const fetchBestSellerProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchBestSellerProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchBestSellerProductsRequest = query => {
  return dispatch => {
    dispatch(fetchBestSellerProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchBestSellerProductsData"](query).then(res => {
      dispatch(fetchBestSellerProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchBestSellerProductsFail(err));
    });
  };
}; //Get best seller products

const fetchDaleProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS
});
const fetchDaleProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchDaleProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchDaleProductsRequest = query => {
  return dispatch => {
    dispatch(fetchDaleProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchDaleProductsData"](query).then(res => {
      dispatch(fetchDaleProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchDaleProductsFail(err));
    });
  };
}; //Get product detail

const fetchProductDetail = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL
});
const fetchProductDetailSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_SUCCESS,
  payload: {
    data
  }
});
const fetchProductDetailFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_FAIL,
  payload: {
    err
  }
});
const fetchProductDetailRequest = slug => {
  return dispatch => {
    dispatch(fetchProductDetail());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductDetailData"](slug).then(res => {
      dispatch(fetchProductDetailSuccess(res.data));
    }).catch(err => {
      dispatch(fetchProductDetailFail(err));
    });
  };
}; //Get searched product

const fetchSearchedProduct = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS
});
const fetchSearchedProductSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchSearchedProductFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchSearchedProductRequest = query => {
  return dispatch => {
    dispatch(fetchSearchedProduct());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSearchedProductData"](query).then(res => {
      dispatch(fetchSearchedProductSuccess(res.data));
    }).catch(err => {
      dispatch(fetchSearchedProductFail(err));
    });
  };
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-mailchimp-subscribe":
/*!********************************************!*\
  !*** external "react-mailchimp-subscribe" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9heGlvc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jYXJ0U2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kZWZpbmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc2hvcFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXNlRGVib3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2l0aEhlYWRlclNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJJbmZvbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJRdWlja0xpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJTdWJjcmliZUlucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL0NhdGVnb3J5Q29sYXBwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL0Z1bmN0aW9uSXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL01vYmlsZU1lbnVPcGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL01vYmlsZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9TZWFyY2hGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9mdW5jdGlvbi1tZW51L0Z1bmN0aW9uTWVudU9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbWVudS9NZW51T25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci90b3AtbmF2L1RvcE5hdk9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0T25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9GZXRjaERhdGFIYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvUXVhbnRpdHlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9Tb2NpYWxJY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9wYXJ0bmVycy9QYXJ0bmVyT25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nob3AvU2hvcE9yZGVyU3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2hvcC9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJ2YWx1ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiZmV0Y2hDYXJ0RGF0YSIsImNhcnRJZCIsImVuZHBvaW50IiwiQVBJX1VSTCIsImF4aW9zU2VydmljZSIsImZldGNoUHJvZHVjdElkQ2FydERhdGEiLCJwaWQiLCJyZW5kZXJQYXJhbSIsImFkZENhcnREYXRhIiwicG9zdCIsInJlbW92ZUNhcnREYXRhIiwiZGVsZXRlIiwidXBkYXRlQ2FydERhdGEiLCJwYXRjaCIsInJlbmRlclVybCIsImxpbWl0IiwiY2F0ZWdvcnkiLCJmZXRjaFByb2R1Y3RzRGF0YSIsInNvcnQiLCJvcmRlciIsInEiLCJjb2xvciIsInNpemUiLCJ0YWciLCJmZXRjaFNhbGVQcm9kdWN0c0RhdGEiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhIiwiZmV0Y2hEYWxlUHJvZHVjdHNEYXRhIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSIsInNsdWciLCJmZXRjaFNlYXJjaGVkUHJvZHVjdERhdGEiLCJpbnB1dCIsIkF4aW9zU2VydmljZSIsImF4aW9zIiwiY3JlYXRlIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJoYW5kbGVTdWNjZXNzIiwiaGFuZGxlRXJyb3IiLCJyZWplY3QiLCJib2R5Iiwib25BZGRQcm9kdWN0VG9DYXJ0IiwicHJvZHVjdCIsInF1YW50aXR5Iiwib25TdWNjZXNzIiwib25FcnJvciIsImdldFF1YW50aXR5QXZhaWxhYmxlIiwiaWQiLCJ0aGVuIiwibGVuZ3RoIiwidXVpZHY0IiwicHJvZHVjdElkIiwiY2FydFF1YW50aXR5IiwiY2F0Y2giLCJwRGF0YSIsIm9uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0Iiwib25DaGFuZ2VQcm9kdWN0Q2FydFF1YW50aXR5IiwibG9nIiwiZ2V0UHJvZHVjdHNCeVNsdWciLCJhcnIiLCJmaW5kIiwidG9Mb3dlckNhc2UiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwidG90YWwiLCJmb3JFYWNoIiwiZGlzY291bnQiLCJwcmljZSIsImNoZWNrUHJvZHVjdEluQ2FydCIsImNhcnRBcnIiLCJ1bmRlZmluZWQiLCJjaGVja1Byb2R1Y3RDYXJ0UXVhbnRpdHkiLCJwcm9kdWN0c0luQ2FydCIsImZpbHRlciIsInRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0IiwicmVkdWNlIiwiY2hlY2tQcm9kdWN0SW5XaXNobGlzdCIsIndpc2hsaXN0QXJyIiwidXNlRGVib3VuY2UiLCJkZWxheSIsImRlYm91bmNlZFZhbHVlIiwic2V0RGVib3VuY2VkVmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJmb3JtYXRDdXJyZW5jeSIsImxvY2FsZXMiLCJjdXJyZW5jeSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImZvcm1hdCIsInBhcmFtTmFtZSIsInBhcmFtVmFsdWUiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImlucHV0Rm9ybWF0Iiwib3V0cHV0Rm9ybWF0IiwibW9tZW50IiwicmVtb3ZlRGFzaCIsIndpdGhIZWFkZXJTY3JvbGwiLCJXcmFwcGVkQ29tcG9uZW50IiwiaGVhZGVyUmVmIiwidXNlUmVmIiwic2V0U2Nyb2xsIiwiaXNIZWFkZXJGaXhlZCIsInNldElzSGVhZGVyRml4ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxZIiwiY2xhc3NOYW1lcyIsImZpeGVkIiwiY2xhc3NOYW1lIiwiRm9vdGVyIiwiY29udGFpbmVyRmx1aWQiLCJzcGFuIiwibWVtbyIsIkZvb3RlckluZm9tYXRpb24iLCJGb290ZXJRdWlja0xpbmtzIiwiY29sU2l6ZSIsImZvb3RlckxpbmtzIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsIml0ZW1zIiwibGluayIsIkN1c3RvbUZvcm0iLCJzdGF0dXMiLCJvblZhbGlkYXRlZCIsIm9uRmluaXNoIiwiRU1BSUwiLCJlbWFpbCIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwidHlwZSIsInJlcXVpcmVkIiwiX19odG1sIiwiRm9vdGVyU3ViY3JpYmVJbnB1dCIsInN1YnNjcmliZSIsImZvcm1EYXRhIiwiSGVhZGVyT25lIiwiYWN0aXZlSGVhZGVyQ29sbGFwc2UiLCJjYXRlZ29yaWVzIiwiQ2F0ZWdvcnlDb2xhcHBzZSIsImFjdGl2ZSIsIlBhbmVsIiwiQ29sbGFwc2UiLCJpc0FjdGl2ZSIsIkZ1bmN0aW9uSXRlbXMiLCJoaWRlVG90YWwiLCJoaWRlV2lzaGxpc3QiLCJjYXJ0U3RhdGUiLCJ1c2VTZWxlY3RvciIsImNhcnRSZWR1Y2VyIiwiTW9iaWxlTWVudU9wZW5lciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwib25TaG93RHJhd2VyIiwib25DbG9zZURyYXdlciIsIk1vYmlsZU5hdmlnYXRvciIsIlN1Yk1lbnUiLCJNZW51Iiwic2V0Q3VycmVudCIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJuYXZpZ2F0b3JEYXRhIiwiSE9NRSIsInN1Yk1lbnUiLCJTSE9QIiwibGF5b3V0IiwiZGV0YWlsIiwiUEFHRVMiLCJBQk9VVCIsIk5hdmlnYXRvciIsIkJMT0ciLCJTZWFyY2hGb3JtIiwiZW50ZXJCdXR0b24iLCJoaWRlU2VsZWN0IiwiT3B0aW9uIiwiU2VsZWN0IiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImN1cnJlbnRTZWFyY2giLCJzZXRDdXJyZW50U2VhcmNoIiwiY3VycmVudENhdGVnb3J5Iiwic2V0Q3VycmVudENhdGVnb3J5IiwiZGVib3VuZFZhbHVlIiwic2hvcFN0YXRlIiwic2hvcFJlZHVjZXIiLCJzZWFyY2hlZFByb2R1Y3RzIiwib25DaGFuZ2UiLCJ2YWwiLCJvblNlbGVjdE9wdGlvbiIsIm9wdGlvbiIsIm9uU2VhcmNoIiwib25DaG9vc2VDYXRlb2dyeSIsImZldGNoU2VhcmNoZWRQcm9kdWN0UmVxdWVzdCIsImlucHV0VmFsdWUiLCJ0b1VwcGVyQ2FzZSIsImluZGV4T2YiLCJsb2FkaW5nIiwiRnVuY3Rpb25NZW51T25lIiwiTWVudU9uZSIsImZsYWdEYXRhIiwiaW1hZ2UiLCJUb3BOYXZPbmUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwiU2Nyb2xsZWRIZWFkZXIiLCJMYXlvdXRPbmUiLCJoZWFkZXJDbGFzcyIsImZvb3RlckNsYXNzIiwiQ29udGFpbmVyIiwiZmx1aWQiLCJGZXRjaERhdGFIYW5kbGUiLCJlcnJvck1lc3NhZ2UiLCJlbXB0eURlc2NyaXB0aW9uIiwicmVuZGVyRGF0YSIsIkVtcHR5IiwiUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSIsIlF1YW50aXR5U2VsZWN0b3IiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJvbkRlY3JlYXNlIiwib25JbmNyZWFzZSIsImZpcnN0VXBkYXRlIiwic2V0VmFsdWUiLCJkZWNyZWFzZVZhbHVlIiwidXNlQ2FsbGJhY2siLCJpbmNyZWFzZVZhbHVlIiwiU29jaWFsSWNvbnMiLCJzaGFwZSIsIlBhcnRuZXJPbmUiLCJzZXR0aW5ncyIsImFycm93cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiZnJvbSIsIlNob3BPcmRlclN0ZXAiLCJjYXJ0IiwibW9kYWxTdGF0ZSIsInNldE1vZGFsU3RhdGUiLCJmZXRjaENhcnRSZXF1ZXN0Iiwic2hvd01vZGFsIiwib25DaGFuZ2VRdWFudGl0eSIsImhhbmRsZU9rIiwibWVzIiwiaGFuZGxlQ2FuY2VsIiwib25TdWJtaXRDb3Vwb24iLCJ2YWx1ZXMiLCJvblN1Ym1pdENvdXBvbkZhaWxlZCIsImNvdmVySW1hZ2UiLCJGRVRDSF9QUk9EVUNUUyIsIkZFVENIX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfU0FMRV9QUk9EVUNUUyIsIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUyIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfREFMRV9QUk9EVUNUUyIsIkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTCIsIkZFVENIX1BST0RVQ1RfREVUQUlMIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUyIsIkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUwiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUyIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfUE9TVFMiLCJGRVRDSF9QT1NUU19TVUNDRVNTIiwiRkVUQ0hfUE9TVFNfRkFJTCIsIkZFVENIX1BPU1RfREVUQUlMIiwiRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUyIsIkZFVENIX1BPU1RfREVUQUlMX0ZBSUwiLCJGRVRDSF9SRUNFTlRfUE9TVFMiLCJGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyIsIkZFVENIX1JFQ0VOVF9QT1NUU19GQUlMIiwiU0hPUF9GSUxURVIiLCJSRVNFVF9GSUxURVJTIiwiU0VUX1NPUlQiLCJTRVRfU0hPVyIsIlNFVF9WSUVXIiwiU0VUX0NBVEVHT1JZIiwiU0VUX0NPTE9SIiwiU0VUX1NJWkUiLCJTRVRfVEFHIiwiQ0FSVCIsIkZFVENIX0NBUlQiLCJGRVRDSF9DQVJUX1NVQ0NFU1MiLCJGRVRDSF9DQVJUX0ZBSUwiLCJXSVNITElTVCIsIkZFVENIX1dJU0hMSVNUIiwiRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUyIsIkZFVENIX1dJU0hMSVNUX0ZBSUwiLCJDT01QQVJFIiwiQUREX1RPX0NPTVBBUkUiLCJSRU1PVkVfRlJPTV9DT01QQVJFIiwiQkxPR19GSUxURVIiLCJmZXRjaENhcnQiLCJmZXRjaENhcnRTdWNjZXNzIiwicGF5bG9hZCIsImZldGNoQ2FydEZhaWwiLCJjYXJ0QXBpcyIsImZldGNoUHJvZHVjdHMiLCJmZXRjaFByb2R1Y3RzU3VjY2VzcyIsInByb2R1Y3RDb3VudCIsImZldGNoUHJvZHVjdHNGYWlsIiwiZmV0Y2hQcm9kdWN0c1JlcXVlc3QiLCJzaG9wQXBpcyIsImhlYWRlcnMiLCJmZXRjaFNhbGVQcm9kdWN0cyIsImZldGNoU2FsZVByb2R1Y3RzU3VjY2VzcyIsImZldGNoU2FsZVByb2R1Y3RzRmFpbCIsImZldGNoU2FsZVByb2R1Y3RzUmVxdWVzdCIsImZldGNoRmVhdHVyZWRQcm9kdWN0cyIsImZldGNoRmVhdHVyZWRQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNGYWlsIiwiZmV0Y2hGZWF0dXJlZFByb2R1Y3RzUmVxdWVzdCIsImZldGNoQmVzdFNlbGxlclByb2R1Y3RzIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNTdWNjZXNzIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNGYWlsIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNSZXF1ZXN0IiwiZmV0Y2hEYWxlUHJvZHVjdHMiLCJmZXRjaERhbGVQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaERhbGVQcm9kdWN0c0ZhaWwiLCJmZXRjaERhbGVQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaFByb2R1Y3REZXRhaWwiLCJmZXRjaFByb2R1Y3REZXRhaWxTdWNjZXNzIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRmFpbCIsImZldGNoUHJvZHVjdERldGFpbFJlcXVlc3QiLCJmZXRjaFNlYXJjaGVkUHJvZHVjdCIsImZldGNoU2VhcmNoZWRQcm9kdWN0U3VjY2VzcyIsImZldGNoU2VhcmNoZWRQcm9kdWN0RmFpbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTs7QUFFQTs7QUFPQTs7QUFzQkE7QUFDQSxNQUFNQSxTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7QUFDQSxNQUFNQyxvQkFBb0IsR0FDeEIsUUFBZ0NDLFNBQWhDLEdBREY7QUFFQSxNQUFNQyxVQUEyQyxHQUFqRDs7QUFFQSx1QkFBeUQ7QUFDdkQ7QUFDQSxzQkFBb0I7QUFDbEI7QUFHRixHQU51RCxDQU12RDs7O0FBQ0EsTUFBSSxDQUFKLHNCQUEyQjtBQUN6QjtBQUdGOztBQUFBLFNBQVFDLGNBQWMsR0FBRyx5QkFDdEJDLE9BQUQsSUFBYTtBQUNYQSxXQUFPLENBQVBBLFFBQWlCQyxLQUFELElBQVc7QUFDekIsVUFBSSxDQUFDTixTQUFTLENBQVRBLElBQWNNLEtBQUssQ0FBeEIsTUFBS04sQ0FBTCxFQUFrQztBQUNoQztBQUdGOztBQUFBLFlBQU1PLEVBQUUsR0FBR1AsU0FBUyxDQUFUQSxJQUFjTSxLQUFLLENBQTlCLE1BQVdOLENBQVg7O0FBQ0EsVUFBSU0sS0FBSyxDQUFMQSxrQkFBd0JBLEtBQUssQ0FBTEEsb0JBQTVCLEdBQXlEO0FBQ3ZERixzQkFBYyxDQUFkQSxVQUF5QkUsS0FBSyxDQUE5QkY7QUFDQUosaUJBQVMsQ0FBVEEsT0FBaUJNLEtBQUssQ0FBdEJOO0FBQ0FPLFVBQUU7QUFFTDtBQVhERjtBQUZxQixLQWV2QjtBQUFFRyxjQUFVLEVBZmQ7QUFlRSxHQWZ1QixDQUF6QjtBQW1CRjs7QUFBQSxNQUFNQyxxQkFBcUIsR0FBRyxZQUFpQztBQUM3RCxRQUFNQyxRQUFRLEdBQUdDLFdBQWpCOztBQUNBLE1BQUksQ0FBSixVQUFlO0FBQ2IsV0FBTyxNQUFNLENBQWI7QUFHRkQ7O0FBQUFBLFVBQVEsQ0FBUkE7QUFDQVYsV0FBUyxDQUFUQTtBQUNBLFNBQU8sTUFBTTtBQUNYLFFBQUk7QUFDRlUsY0FBUSxDQUFSQTtBQUNBLEtBRkYsQ0FFRSxZQUFZO0FBQ1pFLGFBQU8sQ0FBUEE7QUFFRlo7O0FBQUFBLGFBQVMsQ0FBVEE7QUFORjtBQVJGOztBQWtCQSw2Q0FLUTtBQUNOLFlBQW1DO0FBQ25DLE1BQUksQ0FBQyx3QkFBTCxJQUFLLENBQUwsRUFBdUIsT0FGakIsQ0FHTjtBQUNBO0FBQ0E7QUFDQTs7QUFDQWEsUUFBTSxDQUFOQSxrQ0FBMENDLEdBQUQsSUFBUztBQUNoRCxjQUEyQztBQUN6QztBQUNBO0FBRUg7QUFMREQsS0FQTSxDQWFOOztBQUNBVixZQUFVLENBQUNZLElBQUksR0FBSkEsTUFBWFosRUFBVSxDQUFWQTtBQUdGOztBQUFBLGdDQUFrRDtBQUNoRCxRQUFNO0FBQUE7QUFBQSxNQUFhYSxLQUFLLENBQXhCO0FBQ0EsU0FDR0MsTUFBTSxJQUFJQSxNQUFNLEtBQWpCLE9BQUNBLElBQ0RELEtBQUssQ0FETCxPQUFDQyxJQUVERCxLQUFLLENBRkwsT0FBQ0MsSUFHREQsS0FBSyxDQUhMLFFBQUNDLElBSURELEtBQUssQ0FKTCxNQUFDQyxJQUllO0FBQ2ZELE9BQUssQ0FBTEEsZUFBcUJBLEtBQUssQ0FBTEEsc0JBTnhCO0FBVUY7O0FBQUEsb0VBUVE7QUFDTixRQUFNO0FBQUE7QUFBQSxNQUFlRSxDQUFDLENBQXRCOztBQUVBLE1BQUlDLFFBQVEsS0FBUkEsUUFBcUJDLGVBQWUsQ0FBZkEsQ0FBZSxDQUFmQSxJQUFzQixDQUFDLHdCQUFoRCxJQUFnRCxDQUE1Q0QsQ0FBSixFQUFtRTtBQUNqRTtBQUNBO0FBR0ZEOztBQUFBQSxHQUFDLENBQURBLGlCQVJNLENBVU47O0FBQ0EsTUFBSUcsTUFBTSxJQUFWLE1BQW9CO0FBQ2xCQSxVQUFNLEdBQUdDLEVBQUUsQ0FBRkEsZUFBVEQ7QUFHRixHQWZNLENBZU47OztBQUNBUixRQUFNLENBQUNVLE9BQU8sZUFBZFYsTUFBTSxDQUFOQSxXQUErQztBQUEvQ0E7QUFBK0MsR0FBL0NBLE9BQ0dXLE9BQUQsSUFBc0I7QUFDcEIsUUFBSSxDQUFKLFNBQWM7O0FBQ2QsZ0JBQVk7QUFDVnRCLFlBQU0sQ0FBTkE7QUFDQXVCLGNBQVEsQ0FBUkE7QUFFSDtBQVBIWjtBQVdGOztBQUFBLHFCQUF5RDtBQUN2RCxZQUEyQztBQUN6QyxtQ0FJRztBQUNELGFBQU8sVUFDSixnQ0FBK0JhLElBQUksQ0FBQ0MsR0FBSSxnQkFBZUQsSUFBSSxDQUFDRSxRQUFTLDZCQUE0QkYsSUFBSSxDQUFDRyxNQUF2RyxhQUFDLElBQ0Usb0JBRkwsRUFDRyxDQURJLENBQVA7QUFRRixLQWR5QyxDQWN6Qzs7O0FBQ0EsVUFBTUMsa0JBQW1ELEdBQUc7QUFDMURmLFVBQUksRUFETjtBQUE0RCxLQUE1RDtBQUdBLFVBQU1nQixhQUFrQyxHQUFHQyxNQUFNLENBQU5BLEtBQTNDLGtCQUEyQ0EsQ0FBM0M7QUFHQSxpQkFBYSxDQUFiLFFBQXVCTCxHQUFELElBQTRCO0FBQ2hELFVBQUlBLEdBQUcsS0FBUCxRQUFvQjtBQUNsQixZQUNFTSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFDQyxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLGlCQUFrQyxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLEtBRnJDLFVBR0U7QUFDQSxnQkFBTUMsZUFBZSxDQUFDO0FBQUE7QUFFcEJOLG9CQUFRLEVBRlk7QUFHcEJDLGtCQUFNLEVBQUVJLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxxQkFBK0IsT0FBT0EsS0FBSyxDQUhyRCxHQUdxRDtBQUgvQixXQUFELENBQXJCO0FBTUg7QUFYRCxhQVdPO0FBQ0w7QUFDQTtBQUNBLGNBQU1FLENBQVEsR0FBZDtBQUVIO0FBakJELE9BckJ5QyxDQXdDekM7O0FBQ0EsVUFBTUMsa0JBQW1ELEdBQUc7QUFDMURkLFFBQUUsRUFEd0Q7QUFFMURDLGFBQU8sRUFGbUQ7QUFHMURGLFlBQU0sRUFIb0Q7QUFJMURnQixhQUFPLEVBSm1EO0FBSzFEQyxjQUFRLEVBTGtEO0FBTTFEQyxjQUFRLEVBTlY7QUFBNEQsS0FBNUQ7QUFRQSxVQUFNQyxhQUFrQyxHQUFHUixNQUFNLENBQU5BLEtBQTNDLGtCQUEyQ0EsQ0FBM0M7QUFHQSxpQkFBYSxDQUFiLFFBQXVCTCxHQUFELElBQTRCO0FBQ2hELFVBQUlBLEdBQUcsS0FBUCxNQUFrQjtBQUNoQixZQUNFTSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsSUFDQSxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLEtBREFBLFlBRUEsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUhGLFVBSUU7QUFDQSxnQkFBTUMsZUFBZSxDQUFDO0FBQUE7QUFFcEJOLG9CQUFRLEVBRlk7QUFHcEJDLGtCQUFNLEVBQUUsT0FBT0ksS0FBSyxDQUh0QixHQUdzQjtBQUhBLFdBQUQsQ0FBckI7QUFNSDtBQVpELGFBWU8sSUFDTE4sR0FBRyxLQUFIQSxhQUNBQSxHQUFHLEtBREhBLFlBRUFBLEdBQUcsS0FGSEEsYUFHQUEsR0FBRyxLQUhIQSxjQUlBQSxHQUFHLEtBTEUsWUFNTDtBQUNBLFlBQUlNLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxZQUFzQixPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLEtBQTFCLFdBQTJEO0FBQ3pELGdCQUFNQyxlQUFlLENBQUM7QUFBQTtBQUVwQk4sb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFBRSxPQUFPSSxLQUFLLENBSHRCLEdBR3NCO0FBSEEsV0FBRCxDQUFyQjtBQU1IO0FBZE0sYUFjQTtBQUNMO0FBQ0E7QUFDQSxjQUFNRSxDQUFRLEdBQWQ7QUFFSDtBQWhDRCxPQXBEeUMsQ0FzRnpDO0FBQ0E7O0FBQ0EsVUFBTU0sU0FBUyxHQUFHQyxzQkFBbEIsS0FBa0JBLENBQWxCOztBQUNBLFFBQUlULEtBQUssQ0FBTEEsWUFBa0IsQ0FBQ1EsU0FBUyxDQUFoQyxTQUEwQztBQUN4Q0EsZUFBUyxDQUFUQTtBQUNBN0IsYUFBTyxDQUFQQTtBQUlIO0FBQ0Q7O0FBQUEsUUFBTStCLENBQUMsR0FBR1YsS0FBSyxDQUFMQSxhQUFWOztBQUVBLFFBQU0sMEJBQTBCUyxlQUFoQyxRQUFnQ0EsRUFBaEM7O0FBRUEsUUFBTTdCLE1BQU0sR0FBRyxhQUFmLFNBQWUsR0FBZjtBQUNBLFFBQU0rQixRQUFRLEdBQUkvQixNQUFNLElBQUlBLE1BQU0sQ0FBakIsUUFBQ0EsSUFBbEI7O0FBRUEsUUFBTTtBQUFBO0FBQUE7QUFBQSxNQUFlNkIsdUJBQWMsTUFBTTtBQUN2QyxVQUFNRyxZQUFZLEdBQUcsbUNBQXNCWixLQUFLLENBQWhELElBQXFCLENBQXJCO0FBQ0EsV0FBTztBQUNMbEIsVUFBSSxFQURDO0FBRUxPLFFBQUUsRUFBRVcsS0FBSyxDQUFMQSxLQUFXLG1DQUFzQkEsS0FBSyxDQUF0Q0EsRUFBVyxDQUFYQSxHQUZOO0FBQU8sS0FBUDtBQUZtQlMsS0FNbEIsV0FBV1QsS0FBSyxDQUFoQixNQUF1QkEsS0FBSyxDQU4vQixFQU1HLENBTmtCUyxDQUFyQjs7QUFRQSwyQkFBZ0IsTUFBTTtBQUNwQixRQUNFQyxDQUFDLElBQURBLG9DQUdBRyxRQUFRLENBSFJILFdBSUEsd0JBTEYsSUFLRSxDQUxGLEVBTUU7QUFDQTtBQUNBLFlBQU1JLFlBQVksR0FBRzVDLFVBQVUsQ0FBQ1ksSUFBSSxHQUFKQSxNQUFoQyxFQUErQixDQUEvQjs7QUFDQSxVQUFJLENBQUosY0FBbUI7QUFDakIsZUFBT04scUJBQXFCLFdBQVcsTUFBTTtBQUMzQzhCLGtCQUFRLGVBQVJBLEVBQVEsQ0FBUkE7QUFERixTQUE0QixDQUE1QjtBQUlIO0FBQ0Y7QUFoQkQsS0FnQkcsd0JBaEJILE1BZ0JHLENBaEJIOztBQWtCQSxNQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFKLE1BbEl1RCxDQW1JdkQ7O0FBQ0EsTUFBSSxvQkFBSixVQUFrQztBQUNoQ1MsWUFBUSxnQkFBRyx3Q0FBWEEsUUFBVyxDQUFYQTtBQUdGLEdBeEl1RCxDQXdJdkQ7OztBQUNBLFFBQU1DLEtBQVUsR0FBR0MscUJBQW5CLFFBQW1CQSxDQUFuQjs7QUFDQSxRQUFNQyxVQUtMLEdBQUc7QUFDRkMsT0FBRyxFQUFHQyxFQUFELElBQWE7QUFDaEIsY0FBUUMsV0FBVyxDQUFYQSxFQUFXLENBQVhBOztBQUVSLFVBQUlMLEtBQUssSUFBSSxpQkFBVEEsWUFBc0NBLEtBQUssQ0FBL0MsS0FBcUQ7QUFDbkQsWUFBSSxPQUFPQSxLQUFLLENBQVosUUFBSixZQUFxQ0EsS0FBSyxDQUFMQSxJQUFyQyxFQUFxQ0EsRUFBckMsS0FDSyxJQUFJLE9BQU9BLEtBQUssQ0FBWixRQUFKLFVBQW1DO0FBQ3RDQSxlQUFLLENBQUxBO0FBRUg7QUFDRjtBQVZDO0FBV0ZNLFdBQU8sRUFBR3JDLENBQUQsSUFBeUI7QUFDaEMsVUFBSStCLEtBQUssQ0FBTEEsU0FBZSxPQUFPQSxLQUFLLENBQUxBLE1BQVAsWUFBbkIsWUFBOEQ7QUFDNURBLGFBQUssQ0FBTEE7QUFFRjs7QUFBQSxVQUFJLENBQUMvQixDQUFDLENBQU4sa0JBQXlCO0FBQ3ZCc0MsbUJBQVcsd0NBQVhBLE1BQVcsQ0FBWEE7QUFFSDtBQXZCSDtBQUtJLEdBTEo7O0FBMEJBLFNBQU87QUFDTEwsY0FBVSxDQUFWQSxlQUEyQmpDLENBQUQsSUFBeUI7QUFDakQsVUFBSSxDQUFDLHdCQUFMLElBQUssQ0FBTCxFQUF1Qjs7QUFDdkIsVUFBSStCLEtBQUssQ0FBTEEsU0FBZSxPQUFPQSxLQUFLLENBQUxBLE1BQVAsaUJBQW5CLFlBQW1FO0FBQ2pFQSxhQUFLLENBQUxBO0FBRUZWOztBQUFBQSxjQUFRLG1CQUFtQjtBQUFFa0IsZ0JBQVEsRUFBckNsQjtBQUEyQixPQUFuQixDQUFSQTtBQUxGWTtBQVNGLEdBOUt1RCxDQThLdkQ7QUFDQTs7O0FBQ0EsTUFBSWxCLEtBQUssQ0FBTEEsWUFBbUJnQixLQUFLLENBQUxBLGdCQUFzQixFQUFFLFVBQVVBLEtBQUssQ0FBOUQsS0FBNkMsQ0FBN0MsRUFBd0U7QUFDdEVFLGNBQVUsQ0FBVkEsT0FBa0IseUJBQWxCQSxFQUFrQixDQUFsQkE7QUFHRjs7QUFBQSxzQkFBT1QsbUNBQVAsVUFBT0EsQ0FBUDs7O2VBR2FnQixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqVmY7Ozs7QUFHTyx1Q0FBdUQ7QUFDNUQsU0FBT0MsSUFBSSxDQUFKQSxpQkFBc0JBLElBQUksS0FBMUJBLE1BQXFDQSxJQUFJLENBQUpBLFNBQWMsQ0FBbkRBLENBQXFDQSxDQUFyQ0EsR0FBUDtBQUdGO0FBQUE7Ozs7OztBQUlPLE1BQU1DLDBCQUEwQixHQUFHQyxTQUNyQ0YsU0FEcUNFLEdBQW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUDs7QUFDQTs7Ozs7QUFDQTs7QUFtSEE7OztBQXRIQTs7QUFtQkEsTUFBTUMsZUFBb0MsR0FBRztBQUMzQ2pELFFBQU0sRUFEcUM7QUFDN0I7QUFDZGtELGdCQUFjLEVBRjZCOztBQUczQ0MsT0FBSyxLQUFpQjtBQUNwQixRQUFJLEtBQUosUUFBaUIsT0FBT3pELEVBQVA7O0FBQ2pCLGVBQW1DLEVBR3BDO0FBUkg7O0FBQTZDLENBQTdDLEMsQ0FXQTs7QUFDQSxNQUFNMEQsaUJBQWlCLEdBQUcscUVBQTFCLFVBQTBCLENBQTFCO0FBU0EsTUFBTUMsWUFBWSxHQUFHLDBHQUFyQixvQkFBcUIsQ0FBckI7QUFRQSxNQUFNQyxnQkFBZ0IsR0FBRyxrREFBekIsZ0JBQXlCLENBQXpCLEMsQ0FTQTs7QUFDQW5DLE1BQU0sQ0FBTkEsMENBQWlEO0FBQy9Db0MsS0FBRyxHQUFHO0FBQ0osV0FBT0MsaUJBQVA7QUFGSnJDOztBQUFpRCxDQUFqREE7QUFNQWlDLGlCQUFpQixDQUFqQkEsUUFBMkJLLEtBQUQsSUFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBdEMsUUFBTSxDQUFOQSx1Q0FBOEM7QUFDNUNvQyxPQUFHLEdBQUc7QUFDSixZQUFNdkQsTUFBTSxHQUFHMEQsU0FBZjtBQUNBLGFBQU8xRCxNQUFNLENBQWIsS0FBYSxDQUFiO0FBSEptQjs7QUFBOEMsR0FBOUNBO0FBTEZpQztBQWFBLGdCQUFnQixDQUFoQixRQUEwQkssS0FBRCxJQUFXO0FBQ2xDO0FBQ0E7O0FBQUVSLGlCQUFELE9BQUNBLEdBQWlDLENBQUMsR0FBRCxTQUFvQjtBQUNyRCxVQUFNakQsTUFBTSxHQUFHMEQsU0FBZjtBQUNBLFdBQU8xRCxNQUFNLENBQU5BLEtBQU0sQ0FBTkEsQ0FBYyxHQUFyQixJQUFPQSxDQUFQO0FBRkQsR0FBQ2lEO0FBRko7QUFRQUksWUFBWSxDQUFaQSxRQUFzQmxELEtBQUQsSUFBVztBQUM5QjhDLGlCQUFlLENBQWZBLE1BQXNCLE1BQU07QUFDMUJPLHNDQUF3QixDQUFDLEdBQUQsU0FBYTtBQUNuQyxZQUFNRyxVQUFVLEdBQUksS0FBSXhELEtBQUssQ0FBTEEsdUJBQThCLEdBQUVBLEtBQUssQ0FBTEEsWUFBeEQ7QUFHQSxZQUFNeUQsZ0JBQWdCLEdBQXRCOztBQUNBLFVBQUlBLGdCQUFnQixDQUFwQixVQUFvQixDQUFwQixFQUFrQztBQUNoQyxZQUFJO0FBQ0ZBLDBCQUFnQixDQUFoQkEsVUFBZ0IsQ0FBaEJBLENBQTZCLEdBQTdCQTtBQUNBLFNBRkYsQ0FFRSxZQUFZO0FBQ1o3RCxpQkFBTyxDQUFQQSxNQUFlLHdDQUF1QzRELFVBQXRENUQ7QUFDQUEsaUJBQU8sQ0FBUEEsTUFBZSxHQUFFRSxHQUFHLENBQUM0RCxPQUFRLEtBQUk1RCxHQUFHLENBQUM2RCxLQUFyQy9EO0FBRUg7QUFDRjtBQWJEeUQ7QUFERlA7QUFERkk7O0FBbUJBLHFCQUE2QjtBQUMzQixNQUFJLENBQUNKLGVBQWUsQ0FBcEIsUUFBNkI7QUFDM0IsVUFBTVksT0FBTyxHQUNYLGdDQURGO0FBR0EsVUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUVGOztBQUFBLFNBQU9aLGVBQWUsQ0FBdEI7QUFHRixDLENBQUE7OztlQUNlQSxlLEVBRWY7Ozs7QUFHTyxxQkFBaUM7QUFDdEMsU0FBT3BCLDBCQUFpQmtDLGVBQXhCLGFBQU9sQyxDQUFQO0FBR0YsQyxDQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTW1DLFlBQVksR0FBRyxDQUFDLEdBQUQsU0FBaUM7QUFDM0RmLGlCQUFlLENBQWZBLFNBQXlCLElBQUlPLFNBQUosUUFBVyxHQUFwQ1AsSUFBeUIsQ0FBekJBO0FBQ0FBLGlCQUFlLENBQWZBLHVCQUF3Q3ZELEVBQUQsSUFBUUEsRUFBL0N1RDtBQUNBQSxpQkFBZSxDQUFmQTtBQUVBLFNBQU9BLGVBQWUsQ0FBdEI7QUFMSyxFLENBUVA7Ozs7O0FBQ08sMENBQThEO0FBQ25FLFFBQU1nQixPQUFPLEdBQWI7QUFDQSxRQUFNQyxRQUFRLEdBQWQ7O0FBRUEsT0FBSyxNQUFMLCtCQUEwQztBQUN4QyxRQUFJLE9BQU9ELE9BQU8sQ0FBZCxRQUFjLENBQWQsS0FBSixVQUEyQztBQUN6Q0MsY0FBUSxDQUFSQSxRQUFRLENBQVJBLEdBQXFCL0MsTUFBTSxDQUFOQSxXQUFrQjhDLE9BQU8sQ0FBOUNDLFFBQThDLENBQXpCL0MsQ0FBckIrQyxDQUR5QyxDQUNpQjs7QUFDMUQ7QUFHRkE7O0FBQUFBLFlBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQkQsT0FBTyxDQUE1QkMsUUFBNEIsQ0FBNUJBO0FBR0YsR0FibUUsQ0FhbkU7OztBQUNBQSxVQUFRLENBQVJBLFNBQWtCVixpQkFBbEJVO0FBRUFaLGtCQUFnQixDQUFoQkEsUUFBMEJHLEtBQUQsSUFBVztBQUNsQ1MsWUFBUSxDQUFSQSxLQUFRLENBQVJBLEdBQWtCLENBQUMsR0FBRCxTQUFvQjtBQUNwQyxhQUFPRCxPQUFPLENBQVBBLEtBQU8sQ0FBUEEsQ0FBZSxHQUF0QixJQUFPQSxDQUFQO0FBREZDO0FBREZaO0FBTUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbktEOztBQUVBOztBQVdlLHVDQUsrQjtBQUM1QyxvQ0FBdUM7QUFDckMsd0JBQU87QUFBbUIsWUFBTSxFQUFFLFlBQTNCLFNBQTJCO0FBQTNCLE9BQVAsS0FBTyxFQUFQO0FBR0Y7O0FBQUEsbUJBQWlCLENBQWpCLGtCQUFvQ2EsaUJBQWlCLENBQUNDLGVBQXRELENBQ0E7QUFEQTtBQUVFQyxtQkFBRCxvQkFBQ0EsR0FBaURGLGlCQUFELENBQWpELG1CQUFDRTs7QUFDRixZQUEyQztBQUN6QyxVQUFNQyxJQUFJLEdBQ1JILGlCQUFpQixDQUFqQkEsZUFBaUNBLGlCQUFpQixDQUFsREEsUUFERjtBQUVBRSxxQkFBaUIsQ0FBakJBLGNBQWlDLGNBQWFDLElBQTlDRDtBQUdGOztBQUFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDakNZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhDQUE4QztBQUN2RTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQW9EO0FBQzdFO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCLDBDQUEwQztBQUNuRTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHlCQUF5QiwyQ0FBMkM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQ0FBc0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQTRDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0Esb0VBQW9FLFVBQVUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQyxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlEQUFpRCxFQUFFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLHdPQUF3TyxVQUFVLEVBQUU7QUFDcFA7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkRBQTZEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDclpBOzs7Ozs7O0FBWUE7QUFDQTtBQUNBOztBQVVlLGdCQUE2QjtBQUMxQyxRQUFNRSxHQUErQixHQUFHcEQsTUFBTSxDQUFOQSxPQUF4QyxJQUF3Q0EsQ0FBeEM7QUFFQSxTQUFPO0FBQ0xxRCxNQUFFLGdCQUFpQztBQUNqQztBQUFDLE9BQUNELEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxLQUFjQSxHQUFHLENBQUhBLElBQUcsQ0FBSEEsR0FBZixFQUFDQSxDQUFEO0FBRkU7O0FBS0xFLE9BQUcsZ0JBQWlDO0FBQ2xDLFVBQUlGLEdBQUcsQ0FBUCxJQUFPLENBQVAsRUFBZTtBQUNiQSxXQUFHLENBQUhBLElBQUcsQ0FBSEEsUUFBaUJBLEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxzQkFBakJBO0FBRUg7QUFUSTs7QUFXTEcsUUFBSSxPQUFlLEdBQWYsTUFBK0I7QUFDakM7QUFDQTtBQUFDLE9BQUNILEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxJQUFELGdCQUErQkksT0FBRCxJQUFzQjtBQUNuREEsZUFBTyxDQUFDLEdBQVJBLElBQU8sQ0FBUEE7QUFERDtBQWJMOztBQUFPLEdBQVA7QUFrQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBU0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQTFCQTtBQUFBO0FBQ0E7OztBQXVDQSxNQUFNQyxRQUFRLEdBQUk1QixVQUFsQjs7QUFFQSxrQ0FBa0M7QUFDaEMsU0FBTzdCLE1BQU0sQ0FBTkEsT0FBYyxVQUFkQSxpQkFBYyxDQUFkQSxFQUE0QztBQUNqRDBELGFBQVMsRUFEWDtBQUFtRCxHQUE1QzFELENBQVA7QUFLSzs7QUFBQSwyQkFBNEM7QUFDakQsU0FBTzJCLElBQUksS0FBSkEsWUFBcUJBLElBQUksQ0FBSkEsV0FBZ0I4QixRQUFRLEdBQXBELEdBQTRCOUIsQ0FBNUI7QUFHSzs7QUFBQSwyQkFBMkM7QUFDaEQ7QUFDQSxTQUFPOEIsUUFBUSxJQUFJOUIsSUFBSSxDQUFKQSxXQUFaOEIsR0FBWTlCLENBQVo4QixHQUNIOUIsSUFBSSxLQUFKQSxNQUNFLHdEQURGQSxRQUNFLENBREZBLEdBRUU4QixRQUFRLEdBSFBBLE9BQVA7QUFPSzs7QUFBQSwyQkFBMkM7QUFDaEQsU0FBTzlCLElBQUksQ0FBSkEsTUFBVzhCLFFBQVEsQ0FBbkI5QixXQUFQO0FBR0Y7QUFBQTs7Ozs7QUFHTyx5QkFBMEM7QUFDL0MsTUFBSWdDLEdBQUcsQ0FBSEEsV0FBSixHQUFJQSxDQUFKLEVBQXlCOztBQUN6QixNQUFJO0FBQ0Y7QUFDQSxVQUFNQyxjQUFjLEdBQUcsV0FBdkIsaUJBQXVCLEdBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLGFBQWpCLGNBQWlCLENBQWpCO0FBQ0EsV0FBT0EsUUFBUSxDQUFSQSw2QkFBc0NDLFdBQVcsQ0FBQ0QsUUFBUSxDQUFqRSxRQUF3RCxDQUF4RDtBQUNBLEdBTEYsQ0FLRSxVQUFVO0FBQ1Y7QUFFSDtBQUlEO0FBQUE7Ozs7OztBQUlPLHdDQUE2RDtBQUNsRTtBQUNBLFFBQU1FLElBQUksR0FBRyxxQkFBYixVQUFhLENBQWI7QUFDQSxRQUFNQyxXQUFXLEdBQ2Ysa0NBQWtDLGlDQURwQyxJQUNvQyxDQURwQzs7QUFFQSxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLHFCQUFqQixJQUFpQixDQUFqQjtBQUNBQSxZQUFRLENBQVJBLFdBQW9CLHdEQUEyQkEsUUFBUSxDQUF2REEsUUFBb0IsQ0FBcEJBLENBRkUsQ0FHRjs7QUFDQSxXQUFPQSxRQUFRLENBQVJBLFdBQW9CRixJQUFJLENBQXhCRSxTQUNIQSxRQUFRLENBQVJBLFdBQW9CQSxRQUFRLENBQVJBLE9BRGpCQSxNQUNIQSxDQURHQSxHQUVIQSxRQUFRLENBRlo7QUFHQSxHQVBGLENBT0UsVUFBVTtBQUNWO0FBRUg7QUFFRDs7QUFBQSxNQUFNQyxlQUFlLEdBQUdDLE1BQU0sQ0FBOUIsaUJBQThCLENBQTlCOztBQUNPLCtCQUE2QztBQUNsRCxTQUFPbkUsTUFBTSxDQUFOQSxxQ0FBUCxFQUFPQSxDQUFQO0FBR0Y7O0FBQUEsdUNBQTZEO0FBQzNEO0FBQ0E7QUFDQSxTQUFPO0FBQ0wyRCxPQUFHLEVBQUVTLFdBQVcsQ0FBQ0MsV0FBVyxDQUFDeEYsTUFBTSxDQUFQLFVBRHZCLEdBQ3VCLENBQVosQ0FEWDtBQUVMUyxNQUFFLEVBQUVBLEVBQUUsR0FBRzhFLFdBQVcsQ0FBQ0MsV0FBVyxDQUFDeEYsTUFBTSxDQUFQLFVBQTFCLEVBQTBCLENBQVosQ0FBZCxHQUZSO0FBQU8sR0FBUDtBQXNERjs7QUFBQSxNQUFNeUYsdUJBQXVCLEdBQzNCekMsVUFFQSxLQUhGOztBQUtBLG1DQUFpRTtBQUMvRCxTQUFPLEtBQUssTUFBTTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EwQyxlQUFXLEVBWk47QUFBVyxHQUFOLENBQUwsTUFhRUMsR0FBRCxJQUFTO0FBQ2YsUUFBSSxDQUFDQSxHQUFHLENBQVIsSUFBYTtBQUNYLFVBQUlDLFFBQVEsR0FBUkEsS0FBZ0JELEdBQUcsQ0FBSEEsVUFBcEIsS0FBdUM7QUFDckMsZUFBT0UsVUFBVSxNQUFNRCxRQUFRLEdBQS9CLENBQWlCLENBQWpCO0FBRUY7O0FBQUEsWUFBTSxVQUFOLDZCQUFNLENBQU47QUFHRjs7QUFBQSxXQUFPRCxHQUFHLENBQVYsSUFBT0EsRUFBUDtBQXJCRixHQUFPLENBQVA7QUF5QkY7O0FBQUEsaURBQWtFO0FBQ2hFLFNBQU8sVUFBVSxXQUFXRyxjQUFjLE9BQW5DLENBQVUsQ0FBVixPQUFvRDdGLEdBQUQsSUFBZ0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsUUFBSSxDQUFKLGdCQUFxQjtBQUNuQjhGLHNCQUFnQixDQUFoQkEsR0FBZ0IsQ0FBaEJBO0FBRUY7O0FBQUE7QUFQRixHQUFPLENBQVA7QUFXYTs7QUFBQSxNQUFNdkMsTUFBTixDQUFtQztBQU9oRDs7O0FBSUE7QUFlQXdDLGFBQVcseUJBSVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlM7QUFJVCxHQUpTLEVBeUJUO0FBQUEsU0FsREZDLEtBa0RFO0FBQUEsU0FqREZsRSxRQWlERTtBQUFBLFNBaERGbUUsS0FnREU7QUFBQSxTQS9DRkMsTUErQ0U7QUFBQSxTQTlDRnZCLFFBOENFO0FBQUEsU0F6Q0Z3QixVQXlDRTtBQUFBLFNBdkNGQyxHQXVDRSxHQXZDa0MsRUF1Q2xDO0FBQUEsU0F0Q0ZDLEdBc0NFO0FBQUEsU0FyQ0ZDLEdBcUNFO0FBQUEsU0FwQ0ZDLFVBb0NFO0FBQUEsU0FuQ0ZDLElBbUNFO0FBQUEsU0FsQ0ZDLE1Ba0NFO0FBQUEsU0FqQ0ZDLFFBaUNFO0FBQUEsU0FoQ0ZDLEtBZ0NFO0FBQUEsU0EvQkZDLFVBK0JFO0FBQUEsU0E5QkZDLGNBOEJFO0FBQUEsU0E3QkZDLFFBNkJFOztBQUFBLHNCQStGWTFHLENBQUQsSUFBNEI7QUFDdkMsWUFBTTJHLEtBQUssR0FBRzNHLENBQUMsQ0FBZjs7QUFFQSxVQUFJLENBQUosT0FBWTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBQTtBQUFBO0FBQUEsWUFBTjtBQUNBLHlDQUVFLGlDQUFxQjtBQUFFMEIsa0JBQVEsRUFBRXdELFdBQVcsQ0FBdkIsUUFBdUIsQ0FBdkI7QUFGdkI7QUFFdUIsU0FBckIsQ0FGRixFQUdFLFdBSEYsTUFHRSxHQUhGO0FBS0E7QUFHRjs7QUFBQSxVQUFJLENBQUN5QixLQUFLLENBQVYsS0FBZ0I7QUFDZDtBQUdGOztBQUFBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFOO0FBRUEsWUFBTTtBQUFBO0FBQUEsVUFBZSx3Q0FBckIsR0FBcUIsQ0FBckIsQ0E1QnVDLENBOEJ2QztBQUNBOztBQUNBLFVBQUksY0FBY3ZHLEVBQUUsS0FBSyxLQUFyQixVQUFvQ3NCLFFBQVEsS0FBSyxLQUFyRCxVQUFvRTtBQUNsRTtBQUdGLE9BcEN1QyxDQW9DdkM7QUFDQTs7O0FBQ0EsVUFBSSxhQUFhLENBQUMsVUFBbEIsS0FBa0IsQ0FBbEIsRUFBb0M7QUFDbEM7QUFHRjs7QUFBQSwyQ0FJRVosTUFBTSxDQUFOQSxvQkFBMkI7QUFDekJLLGVBQU8sRUFBRXlGLE9BQU8sQ0FBUEEsV0FBbUIsS0FMaEM7QUFJNkIsT0FBM0I5RixDQUpGO0FBeklBLE9BQ0E7OztBQUNBLGlCQUFhLHFEQUFiLFNBQWEsQ0FBYixDQUZBLENBSUE7O0FBQ0EseUJBTEEsQ0FNQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSVksU0FBUSxLQUFaLFdBQTRCO0FBQzFCLHNCQUFnQixLQUFoQixTQUE4QjtBQUFBO0FBRTVCbUYsbUJBQVcsRUFGaUI7QUFHNUI5RixhQUFLLEVBSHVCO0FBQUE7QUFLNUIrRixlQUFPLEVBQUVDLFlBQVksSUFBSUEsWUFBWSxDQUxUO0FBTTVCQyxlQUFPLEVBQUVELFlBQVksSUFBSUEsWUFBWSxDQU52QztBQUE4QixPQUE5QjtBQVVGOztBQUFBLCtCQUEyQjtBQUN6QkUsZUFBUyxFQURnQjtBQUV6QkosaUJBQVcsRUFBRTtBQUZmO0FBRWU7QUFGWSxLQUEzQixDQXBCQSxDQTJCQTtBQUNBOztBQUNBLGtCQUFjMUQsTUFBTSxDQUFwQjtBQUVBO0FBQ0E7QUFDQSx3QkFqQ0EsQ0FrQ0E7QUFDQTs7QUFDQSxrQkFDRTtBQUNBLGlEQUE0QitELGFBQWEsQ0FBekMseUJBRkY7QUFHQTtBQUNBO0FBQ0E7QUFDQSw0QkExQ0EsQ0EyQ0E7QUFDQTs7QUFDQTtBQUVBOztBQUVBLGVBQW1DLEVBNENwQztBQXNEREM7O0FBQUFBLFFBQU0sR0FBUztBQUNibkksVUFBTSxDQUFOQTtBQUdGO0FBQUE7Ozs7O0FBR0FvSSxNQUFJLEdBQUc7QUFDTHBJLFVBQU0sQ0FBTkE7QUFHRjtBQUFBOzs7Ozs7OztBQU1BcUksTUFBSSxNQUFXakgsRUFBTyxHQUFsQixLQUEwQndHLE9BQTBCLEdBQXBELElBQTJEO0FBQzdEO0FBQUMsS0FBQztBQUFBO0FBQUE7QUFBQSxRQUFjVSxZQUFZLFlBQTNCLEVBQTJCLENBQTNCO0FBQ0QsV0FBTyxrQ0FBUCxPQUFPLENBQVA7QUFHRjtBQUFBOzs7Ozs7OztBQU1BakgsU0FBTyxNQUFXRCxFQUFPLEdBQWxCLEtBQTBCd0csT0FBMEIsR0FBcEQsSUFBMkQ7QUFDaEU7QUFBQyxLQUFDO0FBQUE7QUFBQTtBQUFBLFFBQWNVLFlBQVksWUFBM0IsRUFBMkIsQ0FBM0I7QUFDRCxXQUFPLHFDQUFQLE9BQU8sQ0FBUDtBQUdGOztBQUFBLHlDQUtvQjtBQUNsQixRQUFJLENBQUNDLFVBQVUsQ0FBZixHQUFlLENBQWYsRUFBc0I7QUFDcEJ2SSxZQUFNLENBQU5BO0FBQ0E7QUFHRjs7QUFBQSxRQUFJLENBQUU0SCxPQUFELENBQUwsSUFBMEI7QUFDeEI7QUFFRixLQVRrQixDQVNsQjs7O0FBQ0EsUUFBSVksT0FBSixJQUFRO0FBQ05DLGlCQUFXLENBQVhBO0FBR0Y7O0FBQUEsUUFBSSxLQUFKLGdCQUF5QjtBQUN2Qiw4QkFBd0IsS0FBeEI7QUFHRjs7QUFBQSxVQUFNQyxTQUFTLEdBQUc5QyxXQUFXLENBQVhBLEVBQVcsQ0FBWEEsR0FBa0IrQyxXQUFXLENBQTdCL0MsRUFBNkIsQ0FBN0JBLEdBQWxCO0FBQ0EsNkJBbkJrQixDQXFCbEI7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUVnQyxPQUFELENBQUQsTUFBd0IscUJBQTVCLFNBQTRCLENBQTVCLEVBQTZEO0FBQzNEO0FBQ0F6RCxZQUFNLENBQU5BLG1DQUYyRCxDQUczRDs7QUFDQTtBQUNBO0FBQ0Esa0JBQVksZ0JBQWdCLEtBQTVCLEtBQVksQ0FBWjtBQUNBQSxZQUFNLENBQU5BO0FBQ0E7QUFHRixLQXRDa0IsQ0FzQ2xCO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBTXlFLEtBQUssR0FBRyxNQUFNLGdCQUFwQixXQUFvQixFQUFwQjtBQUNBLFVBQU07QUFBRUMsZ0JBQVUsRUFBWjtBQUFBLFFBQTJCLE1BQU0sZ0JBQXZDO0FBRUEsUUFBSUMsTUFBTSxHQUFHLHdDQUFiLEdBQWEsQ0FBYjtBQUVBLFFBQUk7QUFBQTtBQUFBO0FBQUEsUUFBSjtBQUVBQSxVQUFNLEdBQUcsMEJBQVRBLEtBQVMsQ0FBVEE7O0FBRUEsUUFBSUEsTUFBTSxDQUFOQSxhQUFKLFVBQWtDO0FBQ2hDcEcsY0FBUSxHQUFHb0csTUFBTSxDQUFqQnBHO0FBQ0ErQyxTQUFHLEdBQUcsaUNBQU5BLE1BQU0sQ0FBTkE7QUFHRjs7QUFBQSxVQUFNb0IsS0FBSyxHQUFHLHlDQUFkLFlBQWMsQ0FBZCxDQXZEa0IsQ0F5RGxCO0FBQ0E7QUFDQTs7QUFDQW5FLFlBQVEsR0FBR0EsUUFBUSxHQUNmLHFEQUF3QmlHLFdBQVcsQ0FEcEIsUUFDb0IsQ0FBbkMsQ0FEZSxHQUFuQmpHLFNBNURrQixDQWdFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUMsY0FBTCxTQUFLLENBQUwsRUFBK0I7QUFDN0JxRyxZQUFNLEdBQU5BO0FBR0Y7O0FBQUEsVUFBTW5DLEtBQUssR0FBRyxxREFBZCxRQUFjLENBQWQ7QUFDQSxVQUFNO0FBQUV6RSxhQUFPLEdBQVQ7QUFBQSxRQUFOLFFBMUVrQixDQTRFbEI7QUFDQTs7QUFDQSxRQUFJNkcsVUFBVSxHQUFkOztBQUVBLFFBQUlyRixJQUFKLEVBQXFDO0FBQ25DcUYsZ0JBQVUsR0FBRyxvRUFNVnZHLENBQUQsSUFBZSxrQkFBa0I7QUFBRUMsZ0JBQVEsRUFBNUI7QUFBa0IsT0FBbEIsU0FOakJzRyxRQUFhLENBQWJBO0FBU0ZBOztBQUFBQSxjQUFVLEdBQUdMLFdBQVcsQ0FBeEJLLFVBQXdCLENBQXhCQTs7QUFFQSxRQUFJLCtCQUFKLEtBQUksQ0FBSixFQUEyQjtBQUN6QixZQUFNO0FBQUV0RyxnQkFBUSxFQUFWO0FBQUEsVUFBMkIsd0NBQWpDLFVBQWlDLENBQWpDO0FBQ0EsWUFBTXVHLFVBQVUsR0FBRywrQkFBbkIsS0FBbUIsQ0FBbkI7QUFDQSxZQUFNQyxVQUFVLEdBQUcsK0NBQW5CLFVBQW1CLENBQW5COztBQUNBLFVBQUksQ0FBSixZQUFpQjtBQUNmLGNBQU1DLGFBQWEsR0FBR3JILE1BQU0sQ0FBTkEsS0FBWW1ILFVBQVUsQ0FBdEJuSCxlQUNuQnNILEtBQUQsSUFBVyxDQUFDdkMsS0FBSyxDQURuQixLQUNtQixDQURHL0UsQ0FBdEI7O0FBSUEsWUFBSXFILGFBQWEsQ0FBYkEsU0FBSixHQUE4QjtBQUM1QixvQkFBMkM7QUFDekN6SSxtQkFBTyxDQUFQQSxLQUNFLDZEQUFDLEdBQ0UsZUFBY3lJLGFBQWEsQ0FBYkEsVUFGbkJ6STtBQVFGOztBQUFBLGdCQUFNLFVBQ0gsOEJBQTZCMkksVUFBVyw4Q0FBNkN6QyxLQUF0RixLQUFDLEdBREgsK0RBQU0sQ0FBTjtBQUtIO0FBcEJELGFBb0JPO0FBQ0w7QUFDQTlFLGNBQU0sQ0FBTkE7QUFFSDtBQUVEcUM7O0FBQUFBLFVBQU0sQ0FBTkE7O0FBRUEsUUFBSTtBQUNGLFlBQU1tRixTQUFTLEdBQUcsTUFBTSw4Q0FBeEIsT0FBd0IsQ0FBeEI7QUFPQSxVQUFJO0FBQUE7QUFBQSxVQUFKO0FBRUFuRixZQUFNLENBQU5BO0FBQ0E7O0FBRUEsZ0JBQTJDO0FBQ3pDLGNBQU1vRixPQUFZLEdBQUcseUJBQXJCO0FBQ0V2SixjQUFELEtBQUNBLENBQUQsYUFBQ0EsR0FDQXVKLE9BQU8sQ0FBUEEsb0JBQTRCQSxPQUFPLENBQW5DQSx1QkFDQSxDQUFFRCxTQUFTLENBQVYsU0FBQ0EsQ0FGSCxlQUFDdEo7QUFLSjs7QUFBQSxZQUFNLDZEQUNIZ0IsQ0FBRCxJQUFPO0FBQ0wsWUFBSUEsQ0FBQyxDQUFMLFdBQWlCd0ksS0FBSyxHQUFHQSxLQUFLLElBQTlCLENBQWlCQSxDQUFqQixLQUNLO0FBSFQsT0FBTSxDQUFOOztBQU9BLGlCQUFXO0FBQ1RyRixjQUFNLENBQU5BO0FBQ0E7QUFHRjs7QUFBQSxVQUFJUixLQUFKLEVBQTJDLEVBSzNDUTs7QUFBQUEsWUFBTSxDQUFOQTtBQUVBO0FBQ0EsS0F4Q0YsQ0F3Q0UsWUFBWTtBQUNaLFVBQUl2RCxHQUFHLENBQVAsV0FBbUI7QUFDakI7QUFFRjs7QUFBQTtBQUVIO0FBRUQ2STs7QUFBQUEsYUFBVyxrQkFJVDdCLE9BQTBCLEdBSmpCLElBS0g7QUFDTixjQUEyQztBQUN6QyxVQUFJLE9BQU81SCxNQUFNLENBQWIsWUFBSixhQUEyQztBQUN6Q1UsZUFBTyxDQUFQQTtBQUNBO0FBR0Y7O0FBQUEsVUFBSSxPQUFPVixNQUFNLENBQU5BLFFBQVAsTUFBT0EsQ0FBUCxLQUFKLGFBQW1EO0FBQ2pEVSxlQUFPLENBQVBBLE1BQWUsMkJBQTBCcUksTUFBekNySTtBQUNBO0FBRUg7QUFFRDs7QUFBQSxRQUFJcUksTUFBTSxLQUFOQSxlQUEwQix5QkFBOUIsSUFBK0M7QUFDN0Msc0JBQWdCbkIsT0FBTyxDQUF2QjtBQUNBLFlBQU0sQ0FBTixnQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUlFOEIsV0FBRyxFQUxQO0FBQ0UsT0FERixFQU9FO0FBQ0E7QUFDQTtBQVRGO0FBY0g7QUFFRDs7QUFBQSxzRUFNNkI7QUFDM0IsUUFBSTlJLEdBQUcsQ0FBUCxXQUFtQjtBQUNqQjtBQUNBO0FBR0Y7O0FBQUEsUUFBSW9GLGVBQWUsSUFBZkEsT0FBSixlQUE2QztBQUMzQzdCLFlBQU0sQ0FBTkEseUNBRDJDLENBRzNDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0FuRSxZQUFNLENBQU5BLG1CQVQyQyxDQVczQztBQUNBOztBQUNBLFlBQU0ySixzQkFBTjtBQUdGOztBQUFBLFFBQUk7QUFDRixZQUFNO0FBQUVDLFlBQUksRUFBTjtBQUFBO0FBQUEsVUFBbUMsTUFBTSxvQkFBL0MsU0FBK0MsQ0FBL0M7QUFHQSxZQUFNTixTQUEyQixHQUFHO0FBQUE7QUFBQTtBQUFBO0FBSWxDRSxhQUFLLEVBSlA7QUFBb0MsT0FBcEM7O0FBT0EsVUFBSTtBQUNGRixpQkFBUyxDQUFUQSxRQUFrQixNQUFNLGdDQUFnQztBQUFBO0FBQUE7QUFBeERBO0FBQXdELFNBQWhDLENBQXhCQTtBQUtBLE9BTkYsQ0FNRSxlQUFlO0FBQ2Y1SSxlQUFPLENBQVBBO0FBQ0E0SSxpQkFBUyxDQUFUQTtBQUdGOztBQUFBO0FBQ0EsS0F2QkYsQ0F1QkUscUJBQXFCO0FBQ3JCLGFBQU8sNkRBQVAsSUFBTyxDQUFQO0FBRUg7QUFFRDs7QUFBQSxpREFLRW5ILE9BQWdCLEdBTGxCLE9BTTZCO0FBQzNCLFFBQUk7QUFDRixZQUFNMEgsZUFBZSxHQUFHLGdCQUF4QixLQUF3QixDQUF4Qjs7QUFFQSxVQUFJMUgsT0FBTyxJQUFQQSxtQkFBOEIsZUFBbEMsT0FBd0Q7QUFDdEQ7QUFHRjs7QUFBQSxZQUFNbUgsU0FBMkIsR0FBR08sZUFBZSxxQkFFL0MsTUFBTSxnQ0FBaUN2RCxHQUFELEtBQVU7QUFDOUMyQixpQkFBUyxFQUFFM0IsR0FBRyxDQURnQztBQUU5Q3VCLG1CQUFXLEVBQUV2QixHQUFHLENBRjhCO0FBRzlDd0IsZUFBTyxFQUFFeEIsR0FBRyxDQUFIQSxJQUhxQztBQUk5QzBCLGVBQU8sRUFBRTFCLEdBQUcsQ0FBSEEsSUFOZjtBQUVvRCxPQUFWLENBQWhDLENBRlY7QUFTQSxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTjs7QUFFQSxnQkFBMkM7QUFDekMsY0FBTTtBQUFBO0FBQUEsWUFBeUJ3RCxtQkFBTyxDQUF0QywwQkFBc0MsQ0FBdEM7O0FBQ0EsWUFBSSxDQUFDQyxrQkFBa0IsQ0FBdkIsU0FBdUIsQ0FBdkIsRUFBb0M7QUFDbEMsZ0JBQU0sVUFDSCx5REFBd0RySCxRQUQzRCxHQUFNLENBQU47QUFJSDtBQUVEOztBQUFBOztBQUVBLFVBQUlvRixPQUFPLElBQVgsU0FBd0I7QUFDdEJrQyxnQkFBUSxHQUFHLDRCQUNULGlDQUFxQjtBQUFBO0FBRFo7QUFDWSxTQUFyQixDQURTLEVBRVRyQixXQUFXLENBRkYsRUFFRSxDQUZGLEVBQVhxQixPQUFXLENBQVhBO0FBT0Y7O0FBQUEsWUFBTWpJLEtBQUssR0FBRyxNQUFNLGNBQWdDLE1BQ2xEK0YsT0FBTyxHQUNILG9CQURHLFFBQ0gsQ0FERyxHQUVIRSxPQUFPLEdBQ1Asb0JBRE8sUUFDUCxDQURPLEdBRVAsZ0NBRUU7QUFDQTtBQUFBO0FBQUE7QUFHRWxCLGNBQU0sRUFYaEI7QUFRUSxPQUhGLENBTGMsQ0FBcEI7QUFlQXdDLGVBQVMsQ0FBVEE7QUFDQTtBQUNBO0FBQ0EsS0F2REYsQ0F1REUsWUFBWTtBQUNaLGFBQU8sZ0RBQVAsRUFBTyxDQUFQO0FBRUg7QUFFRFc7O0FBQUFBLEtBQUcsbUNBTWM7QUFDZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBTyxZQUFQLElBQU8sQ0FBUDtBQUdGO0FBQUE7Ozs7OztBQUlBQyxnQkFBYyxLQUE2QjtBQUN6QztBQUdGQzs7QUFBQUEsaUJBQWUsS0FBc0I7QUFDbkMsUUFBSSxDQUFDLEtBQUwsUUFBa0I7QUFDbEIsVUFBTSwwQkFBMEIsa0JBQWhDLEdBQWdDLENBQWhDO0FBQ0EsVUFBTSwwQkFBMEIvSSxFQUFFLENBQUZBLE1BQWhDLEdBQWdDQSxDQUFoQyxDQUhtQyxDQUtuQzs7QUFDQSxRQUFJZ0osT0FBTyxJQUFJQyxZQUFZLEtBQXZCRCxnQkFBNENFLE9BQU8sS0FBdkQsU0FBcUU7QUFDbkU7QUFHRixLQVZtQyxDQVVuQzs7O0FBQ0EsUUFBSUQsWUFBWSxLQUFoQixjQUFtQztBQUNqQztBQUdGLEtBZm1DLENBZW5DO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFPQyxPQUFPLEtBQWQ7QUFHRkM7O0FBQUFBLGNBQVksS0FBbUI7QUFDN0IsVUFBTSxXQUFXbkosRUFBRSxDQUFGQSxNQUFqQixHQUFpQkEsQ0FBakIsQ0FENkIsQ0FFN0I7O0FBQ0EsUUFBSW9KLElBQUksS0FBUixJQUFpQjtBQUNmeEssWUFBTSxDQUFOQTtBQUNBO0FBR0YsS0FSNkIsQ0FRN0I7OztBQUNBLFVBQU15SyxJQUFJLEdBQUdsSixRQUFRLENBQVJBLGVBQWIsSUFBYUEsQ0FBYjs7QUFDQSxjQUFVO0FBQ1JrSixVQUFJLENBQUpBO0FBQ0E7QUFFRixLQWQ2QixDQWM3QjtBQUNBOzs7QUFDQSxVQUFNQyxNQUFNLEdBQUduSixRQUFRLENBQVJBLHdCQUFmLENBQWVBLENBQWY7O0FBQ0EsZ0JBQVk7QUFDVm1KLFlBQU0sQ0FBTkE7QUFFSDtBQUVEQzs7QUFBQUEsVUFBUSxTQUEwQjtBQUNoQyxXQUFPLGdCQUFQO0FBR0ZDOztBQUFBQSxjQUFZLG9CQUF5QztBQUNuRCxVQUFNO0FBQUE7QUFBQSxRQUFOO0FBQ0EsVUFBTUMsYUFBYSxHQUFHLDhDQUFvQmxDLFdBQVcsQ0FBckQsUUFBcUQsQ0FBL0IsQ0FBdEI7O0FBRUEsUUFBSWtDLGFBQWEsS0FBYkEsVUFBNEJBLGFBQWEsS0FBN0MsV0FBNkQ7QUFDM0Q7QUFHRixLQVJtRCxDQVFuRDs7O0FBQ0EsUUFBSSxDQUFDakMsS0FBSyxDQUFMQSxTQUFMLGFBQUtBLENBQUwsRUFBcUM7QUFDbkM7QUFDQUEsV0FBSyxDQUFMQSxLQUFZZ0IsSUFBRCxJQUFVO0FBQ25CLFlBQ0Usd0NBQ0EsNkNBRkYsYUFFRSxDQUZGLEVBR0U7QUFDQWtCLG9CQUFVLENBQVZBLFdBQXNCNUUsV0FBVyxDQUFqQzRFLElBQWlDLENBQWpDQTtBQUNBO0FBRUg7QUFSRGxDO0FBVUY7O0FBQUE7QUFHRjtBQUFBOzs7Ozs7OztBQU1BLHNCQUVFOUIsTUFBYyxHQUZoQixLQUdFYyxPQUF3QixHQUgxQixJQUlpQjtBQUNmLFFBQUlrQixNQUFNLEdBQUcsd0NBQWIsR0FBYSxDQUFiO0FBRUEsUUFBSTtBQUFBO0FBQUEsUUFBSjtBQUVBLFVBQU1GLEtBQUssR0FBRyxNQUFNLGdCQUFwQixXQUFvQixFQUFwQjtBQUVBRSxVQUFNLEdBQUcsMEJBQVRBLEtBQVMsQ0FBVEE7O0FBRUEsUUFBSUEsTUFBTSxDQUFOQSxhQUFKLFVBQWtDO0FBQ2hDcEcsY0FBUSxHQUFHb0csTUFBTSxDQUFqQnBHO0FBQ0ErQyxTQUFHLEdBQUcsaUNBQU5BLE1BQU0sQ0FBTkE7QUFHRixLQWRlLENBY2Y7OztBQUNBLGNBQTJDO0FBQ3pDO0FBR0Y7O0FBQUEsVUFBTW1CLEtBQUssR0FBRyxxREFBZCxRQUFjLENBQWQ7QUFDQSxVQUFNbUUsT0FBTyxDQUFQQSxJQUFZLENBQ2hCLGtDQURnQixNQUNoQixDQURnQixFQUVoQixnQkFBZ0JuRCxPQUFPLENBQVBBLHdCQUFoQixZQUZGLEtBRUUsQ0FGZ0IsQ0FBWm1ELENBQU47QUFNRjs7QUFBQSw4QkFBNEQ7QUFDMUQsUUFBSXZGLFNBQVMsR0FBYjs7QUFDQSxVQUFNd0YsTUFBTSxHQUFJLFdBQVcsTUFBTTtBQUMvQnhGLGVBQVMsR0FBVEE7QUFERjs7QUFJQSxVQUFNeUYsZUFBZSxHQUFHLE1BQU0seUJBQTlCLEtBQThCLENBQTlCOztBQUVBLG1CQUFlO0FBQ2IsWUFBTXpCLEtBQVUsR0FBRyxVQUNoQix3Q0FBdUM1QyxLQUQxQyxHQUFtQixDQUFuQjtBQUdBNEMsV0FBSyxDQUFMQTtBQUNBO0FBR0Y7O0FBQUEsUUFBSXdCLE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUE7QUFHRkU7O0FBQUFBLFVBQVEsS0FBc0M7QUFDNUMsUUFBSTFGLFNBQVMsR0FBYjs7QUFDQSxVQUFNd0YsTUFBTSxHQUFHLE1BQU07QUFDbkJ4RixlQUFTLEdBQVRBO0FBREY7O0FBR0E7QUFDQSxXQUFPMkYsRUFBRSxHQUFGQSxLQUFXQyxJQUFELElBQVU7QUFDekIsVUFBSUosTUFBTSxLQUFLLEtBQWYsS0FBeUI7QUFDdkI7QUFHRjs7QUFBQSxxQkFBZTtBQUNiLGNBQU1wSyxHQUFRLEdBQUcsVUFBakIsaUNBQWlCLENBQWpCO0FBQ0FBLFdBQUcsQ0FBSEE7QUFDQTtBQUdGOztBQUFBO0FBWEYsS0FBT3VLLENBQVA7QUFlRkU7O0FBQUFBLGdCQUFjLFdBQW9DO0FBQ2hELFVBQU07QUFBRXhLLFVBQUksRUFBTjtBQUFBLFFBQXFCLGtCQUFrQmIsTUFBTSxDQUFOQSxTQUE3QyxJQUEyQixDQUEzQjs7QUFDQSxRQUFJMkQsS0FBSixFQUFpRSxFQUdqRTs7QUFBQSxXQUFPMkgsYUFBYSxXQUFXLEtBQXhCQSxLQUFhLENBQWJBLE1BQTBDRixJQUFELElBQVU7QUFDeEQ7QUFDQTtBQUZGLEtBQU9FLENBQVA7QUFNRkM7O0FBQUFBLGdCQUFjLFdBQW9DO0FBQ2hELFdBQU9ELGFBQWEsV0FBVyxLQUEvQixLQUFvQixDQUFwQjtBQUdGdkc7O0FBQUFBLGlCQUFlLGlCQUdDO0FBQ2QsVUFBTTtBQUFFa0QsZUFBUyxFQUFYO0FBQUEsUUFBcUIsZ0JBQTNCLE9BQTJCLENBQTNCOztBQUNBLFVBQU11RCxPQUFPLEdBQUcsY0FBaEIsR0FBZ0IsQ0FBaEI7O0FBQ0FDLE9BQUcsQ0FBSEE7QUFDQSxXQUFPLHFDQUFpRDtBQUFBO0FBQUE7QUFHdEQ5SyxZQUFNLEVBSGdEO0FBQXhEO0FBQXdELEtBQWpELENBQVA7QUFRRitLOztBQUFBQSxvQkFBa0IsS0FBbUI7QUFDbkMsUUFBSSxLQUFKLEtBQWM7QUFDWnZILFlBQU0sQ0FBTkEsZ0NBQXVDd0Ysc0JBQXZDeEY7QUFDQTtBQUNBO0FBRUg7QUFFRHdIOztBQUFBQSxRQUFNLE9BQXdDO0FBQzVDLFdBQU8sZUFBZSx5QkFBdEIsU0FBTyxDQUFQO0FBOXdCOEM7O0FBQUE7OztBQUE3QnhILE0sQ0F3QlprRCxNQXhCWWxELEdBd0JVLG9CQXhCVkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4THJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeEJBLEMsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BLE1BQU15SCxnQkFBZ0IsR0FBdEI7O0FBRU8sMkJBQXNDO0FBQzNDLE1BQUk7QUFBQTtBQUFBO0FBQUEsTUFBSjtBQUNBLE1BQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFOQSxZQUFmO0FBQ0EsTUFBSXBKLFFBQVEsR0FBR29KLE1BQU0sQ0FBTkEsWUFBZjtBQUNBLE1BQUl0QixJQUFJLEdBQUdzQixNQUFNLENBQU5BLFFBQVg7QUFDQSxNQUFJakYsS0FBSyxHQUFHaUYsTUFBTSxDQUFOQSxTQUFaO0FBQ0EsTUFBSUMsSUFBb0IsR0FBeEI7QUFFQUMsTUFBSSxHQUFHQSxJQUFJLEdBQUdDLGtCQUFrQixDQUFsQkEsSUFBa0IsQ0FBbEJBLHdCQUFILE1BQVhEOztBQUVBLE1BQUlGLE1BQU0sQ0FBVixNQUFpQjtBQUNmQyxRQUFJLEdBQUdDLElBQUksR0FBR0YsTUFBTSxDQUFwQkM7QUFERixTQUVPLGNBQWM7QUFDbkJBLFFBQUksR0FBR0MsSUFBSSxJQUFJLENBQUNFLFFBQVEsQ0FBUkEsUUFBRCxHQUFDQSxDQUFELEdBQTBCLElBQUdBLFFBQTdCLE1BQWZILFFBQVcsQ0FBWEE7O0FBQ0EsUUFBSUQsTUFBTSxDQUFWLE1BQWlCO0FBQ2ZDLFVBQUksSUFBSSxNQUFNRCxNQUFNLENBQXBCQztBQUVIO0FBRUQ7O0FBQUEsTUFBSWxGLEtBQUssSUFBSSxpQkFBYixVQUF3QztBQUN0Q0EsU0FBSyxHQUFHc0YsTUFBTSxDQUFDQyxXQUFXLENBQVhBLHVCQUFmdkYsS0FBZXVGLENBQUQsQ0FBZHZGO0FBR0Y7O0FBQUEsTUFBSXdGLE1BQU0sR0FBR1AsTUFBTSxDQUFOQSxVQUFrQmpGLEtBQUssSUFBSyxJQUFHQSxLQUEvQmlGLE1BQWI7QUFFQSxNQUFJRCxRQUFRLElBQUlBLFFBQVEsQ0FBUkEsT0FBZ0IsQ0FBaEJBLE9BQWhCLEtBQTZDQSxRQUFRLElBQVJBOztBQUU3QyxNQUNFQyxNQUFNLENBQU5BLFdBQ0MsQ0FBQyxhQUFhRixnQkFBZ0IsQ0FBaEJBLEtBQWQsUUFBY0EsQ0FBZCxLQUFrREcsSUFBSSxLQUZ6RCxPQUdFO0FBQ0FBLFFBQUksR0FBRyxRQUFRQSxJQUFJLElBQW5CQSxFQUFPLENBQVBBO0FBQ0EsUUFBSXJKLFFBQVEsSUFBSUEsUUFBUSxDQUFSQSxDQUFRLENBQVJBLEtBQWhCLEtBQXFDQSxRQUFRLEdBQUcsTUFBWEE7QUFMdkMsU0FNTyxJQUFJLENBQUosTUFBVztBQUNoQnFKLFFBQUksR0FBSkE7QUFHRjs7QUFBQSxNQUFJdkIsSUFBSSxJQUFJQSxJQUFJLENBQUpBLENBQUksQ0FBSkEsS0FBWixLQUE2QkEsSUFBSSxHQUFHLE1BQVBBO0FBQzdCLE1BQUk2QixNQUFNLElBQUlBLE1BQU0sQ0FBTkEsQ0FBTSxDQUFOQSxLQUFkLEtBQWlDQSxNQUFNLEdBQUcsTUFBVEE7QUFFakMzSixVQUFRLEdBQUdBLFFBQVEsQ0FBUkEsaUJBQVhBLGtCQUFXQSxDQUFYQTtBQUNBMkosUUFBTSxHQUFHQSxNQUFNLENBQU5BLGFBQVRBLEtBQVNBLENBQVRBO0FBRUEsU0FBUSxHQUFFUixRQUFTLEdBQUVFLElBQUssR0FBRXJKLFFBQVMsR0FBRTJKLE1BQU8sR0FBRTdCLElBQWhEO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3lDQ3hFRDs7QUFDQSxNQUFNOEIsVUFBVSxHQUFoQjs7QUFFTywrQkFBZ0Q7QUFDckQsU0FBT0EsVUFBVSxDQUFWQSxLQUFQLEtBQU9BLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxRQUNqQixvQkFBNkMsU0FENUIsQ0FBbkI7QUFJQTs7Ozs7OztBQU1PLHFDQUFzRDtBQUMzRCxRQUFNQyxZQUFZLEdBQUczRyxJQUFJLEdBQUcsY0FBSCxVQUFHLENBQUgsR0FBekI7QUFDQSxRQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFGLGFBUkosWUFRSSxDQVJKOztBQVNBLE1BQ0U0RyxNQUFNLEtBQUtGLFVBQVUsQ0FBckJFLFVBQ0NaLFFBQVEsS0FBUkEsV0FBd0JBLFFBQVEsS0FGbkMsVUFHRTtBQUNBLFVBQU0sVUFBTixpQ0FBTSxDQUFOO0FBRUY7O0FBQUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0xoTCxRQUFJLEVBQUVBLElBQUksQ0FBSkEsTUFBVzBMLFVBQVUsQ0FBVkEsT0FMbkIsTUFLUTFMO0FBTEQsR0FBUDtBQU9ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTzs7QUFBQSxNQUFNNkwsY0FBYyxHQUFHO0FBQzVCQyxXQUFTLEVBRG1CO0FBRTVCQyxXQUFTLEVBRm1CO0FBRzVCQyxRQUFNLEVBSEQ7QUFBdUIsQ0FBdkI7OztBQU1BLE1BQU1DLHlCQUF5QixtQ0FBRyxjQUFIO0FBRXBDQyxRQUFNLEVBRkQ7QUFBK0IsRUFBL0I7Ozs7ZUFLUSxDQUFDQyxXQUFXLEdBQVosVUFBeUI7QUFDdEMsU0FBUXZKLElBQUQsSUFBa0I7QUFDdkIsVUFBTXdKLElBQXdCLEdBQTlCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHQyxZQUFZLENBQVpBLHlCQUduQkgsV0FBVywrQkFIYixjQUFxQkcsQ0FBckI7QUFLQSxVQUFNQyxPQUFPLEdBQUdELFlBQVksQ0FBWkEscUNBQWhCLGNBQWdCQSxDQUFoQjtBQU1BLFdBQU8sc0JBQXVEO0FBQzVELFlBQU03RyxHQUFHLEdBQUc1RCxRQUFRLElBQVJBLGVBQTJCMEssT0FBTyxDQUE5QyxRQUE4QyxDQUE5Qzs7QUFDQSxVQUFJLENBQUosS0FBVTtBQUNSO0FBR0Y7O0FBQUEsdUJBQWlCO0FBQ2YsYUFBSyxNQUFMLGFBQXdCO0FBQ3RCO0FBQ0E7QUFDQSxjQUFJLE9BQU8zTCxHQUFHLENBQVYsU0FBSixVQUFrQztBQUNoQyxtQkFBUTZFLEdBQUcsQ0FBSixNQUFDQSxDQUFtQjdFLEdBQUcsQ0FBOUIsSUFBUTZFLENBQVI7QUFFSDtBQUNGO0FBRUQ7O0FBQUEsNkNBQU8sTUFBUCxHQUF1QkEsR0FBRyxDQUExQjtBQWhCRjtBQWJGOzs7OztBQWtDRiw0QkFBb0M7QUFDbEMsTUFBSTtBQUNGLFdBQU8rRyxrQkFBa0IsQ0FBekIsS0FBeUIsQ0FBekI7QUFDQSxHQUZGLENBRUUsVUFBVTtBQUNWLFVBQU16TSxHQUE4QixHQUFHLFVBQXZDLHdCQUF1QyxDQUF2QztBQUNBQSxPQUFHLENBQUhBO0FBQ0E7QUFFSDtBQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekREOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWU7O0FBQUEsdUZBTWI7QUFDQSxNQUFJME0saUJBS21DLEdBTHZDOztBQU9BLE1BQUlDLFdBQVcsQ0FBWEEsV0FBSixHQUFJQSxDQUFKLEVBQWlDO0FBQy9CRCxxQkFBaUIsR0FBRyx3Q0FBcEJBLFdBQW9CLENBQXBCQTtBQURGLFNBRU87QUFDTCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBU0YsUUFUSixXQVNJLENBVEo7QUFXQUEscUJBQWlCLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwQkE7QUFBb0IsS0FBcEJBO0FBWUZBOztBQUFBQSxtQkFBaUIsQ0FBakJBLFFBQTBCLHlDQUN4QkEsaUJBQWlCLENBRG5CQSxZQUEwQixDQUExQkE7QUFHQSxRQUFNRSxTQUFTLEdBQUdGLGlCQUFpQixDQUFuQztBQUNBLFFBQU1HLFFBQVEsR0FBSSxHQUFFSCxpQkFBaUIsQ0FBQzVLLFFBQVUsR0FDOUM0SyxpQkFBaUIsQ0FBakJBLFFBQTBCLEVBRDVCO0FBR0EsUUFBTUksaUJBQXFDLEdBQTNDO0FBQ0FQLGNBQVksQ0FBWkE7QUFFQSxRQUFNUSxjQUFjLEdBQUdELGlCQUFpQixDQUFqQkEsSUFBdUJqTSxHQUFELElBQVNBLEdBQUcsQ0FBekQsSUFBdUJpTSxDQUF2QjtBQUVBLE1BQUlFLG1CQUFtQixHQUFHLFlBQVksQ0FBWixrQkFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBRUMsWUFBUSxFQVJaO0FBUUUsR0FSd0IsQ0FBMUI7QUFVQSxhQXhEQSxDQTBEQTs7QUFDQSxPQUFLLE1BQU0sTUFBWCxVQUFXLENBQVgsSUFBZ0MvTCxNQUFNLENBQU5BLFFBQWhDLFNBQWdDQSxDQUFoQyxFQUEyRDtBQUN6RCxRQUFJZ00sS0FBSyxHQUFHQyxLQUFLLENBQUxBLHNCQUE0QkMsVUFBVSxDQUF0Q0QsQ0FBc0MsQ0FBdENBLEdBQVo7O0FBQ0EsZUFBVztBQUNUO0FBQ0E7QUFDQUQsV0FBSyxHQUFJLElBQUdBLEtBQVpBO0FBQ0EsWUFBTUcsYUFBYSxHQUFHZCxZQUFZLENBQVpBLGVBQTRCO0FBQUVVLGdCQUFRLEVBQTVEO0FBQWtELE9BQTVCVixDQUF0QjtBQUNBVyxXQUFLLEdBQUdHLGFBQWEsQ0FBYkEsTUFBYSxDQUFiQSxRQUFSSCxDQUFRRyxDQUFSSDtBQUVGTjs7QUFBQUEsYUFBUyxDQUFUQSxHQUFTLENBQVRBO0FBR0YsR0F2RUEsQ0F1RUE7QUFDQTs7O0FBQ0EsUUFBTVUsU0FBUyxHQUFHcE0sTUFBTSxDQUFOQSxLQUFsQixNQUFrQkEsQ0FBbEI7O0FBRUEsTUFDRXFNLG1CQUFtQixJQUNuQixDQUFDRCxTQUFTLENBQVRBLEtBQWdCek0sR0FBRCxJQUFTa00sY0FBYyxDQUFkQSxTQUYzQixHQUUyQkEsQ0FBeEJPLENBRkgsRUFHRTtBQUNBLFNBQUssTUFBTCxrQkFBNkI7QUFDM0IsVUFBSSxFQUFFek0sR0FBRyxJQUFULFNBQUksQ0FBSixFQUF5QjtBQUN2QitMLGlCQUFTLENBQVRBLEdBQVMsQ0FBVEEsR0FBaUJZLE1BQU0sQ0FBdkJaLEdBQXVCLENBQXZCQTtBQUVIO0FBQ0Y7QUFFRDs7QUFBQSxRQUFNYSxpQkFBaUIsR0FBR2QsV0FBVyxDQUFYQSxtQkFBMUI7O0FBRUEsTUFBSTtBQUNGZSxVQUFNLEdBQUksR0FBRUQsaUJBQWlCLGNBQWMsRUFBRyxHQUFFRSxTQUFTLENBQ3ZEWCxtQkFBbUIsQ0FEb0MsTUFDcEMsQ0FEb0MsQ0FBekRVO0FBSUEsVUFBTSxtQkFBbUJBLE1BQU0sQ0FBTkEsTUFBekIsR0FBeUJBLENBQXpCO0FBQ0FoQixxQkFBaUIsQ0FBakJBO0FBQ0FBLHFCQUFpQixDQUFqQkEsT0FBMEIsR0FBRTlDLElBQUksU0FBUyxFQUFHLEdBQUVBLElBQUksSUFBSSxFQUF0RDhDO0FBQ0EsV0FBT0EsaUJBQWlCLENBQXhCO0FBQ0EsV0FBT0EsaUJBQWlCLENBQXhCO0FBQ0EsR0FWRixDQVVFLFlBQVk7QUFDWixRQUFJMU0sR0FBRyxDQUFIQSxjQUFKLDhDQUFJQSxDQUFKLEVBQXVFO0FBQ3JFLFlBQU0sVUFBTix3S0FBTSxDQUFOO0FBSUY7O0FBQUE7QUFHRixHQTNHQSxDQTJHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EwTSxtQkFBaUIsQ0FBakJBLHdDQUEwQixLQUExQkEsR0FFS0EsaUJBQWlCLENBRnRCQTtBQUtBLFNBQU87QUFBQTtBQUFQO0FBQU8sR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSU0sOENBRVc7QUFDaEIsUUFBTXpHLEtBQXFCLEdBQTNCO0FBQ0EySCxjQUFZLENBQVpBLFFBQXFCLGdCQUFnQjtBQUNuQyxRQUFJLE9BQU8zSCxLQUFLLENBQVosR0FBWSxDQUFaLEtBQUosYUFBdUM7QUFDckNBLFdBQUssQ0FBTEEsR0FBSyxDQUFMQTtBQURGLFdBRU8sSUFBSWtILEtBQUssQ0FBTEEsUUFBY2xILEtBQUssQ0FBdkIsR0FBdUIsQ0FBbkJrSCxDQUFKLEVBQStCO0FBQ3BDO0FBQUVsSCxXQUFLLENBQU4sR0FBTSxDQUFMQSxDQUFELElBQUNBLENBQUQsS0FBQ0E7QUFERyxXQUVBO0FBQ0xBLFdBQUssQ0FBTEEsR0FBSyxDQUFMQSxHQUFhLENBQUNBLEtBQUssQ0FBTixHQUFNLENBQU4sRUFBYkEsS0FBYSxDQUFiQTtBQUVIO0FBUkQySDtBQVNBO0FBR0s7O0FBQUEsMENBRVk7QUFDakIsUUFBTUMsTUFBTSxHQUFHLElBQWYsZUFBZSxFQUFmO0FBQ0EzTSxRQUFNLENBQU5BLDBCQUFpQyxDQUFDLE1BQUQsS0FBQyxDQUFELEtBQWtCO0FBQ2pELFFBQUlpTSxLQUFLLENBQUxBLFFBQUosS0FBSUEsQ0FBSixFQUEwQjtBQUN4QkQsV0FBSyxDQUFMQSxRQUFlWSxJQUFELElBQVVELE1BQU0sQ0FBTkEsWUFBeEJYLElBQXdCVyxDQUF4Qlg7QUFERixXQUVPO0FBQ0xXLFlBQU0sQ0FBTkE7QUFFSDtBQU5EM007QUFPQTtBQUdLOztBQUFBLHdCQUVMLEdBRkssa0JBR1k7QUFDakI2TSxrQkFBZ0IsQ0FBaEJBLFFBQTBCSCxZQUFELElBQWtCO0FBQ3pDVCxTQUFLLENBQUxBLEtBQVdTLFlBQVksQ0FBdkJULElBQVdTLEVBQVhULFVBQXlDdE0sR0FBRCxJQUFTVixNQUFNLENBQU5BLE9BQWpEZ04sR0FBaURoTixDQUFqRGdOO0FBQ0FTLGdCQUFZLENBQVpBLFFBQXFCLGdCQUFnQnpOLE1BQU0sQ0FBTkEsWUFBckN5TixLQUFxQ3pOLENBQXJDeU47QUFGRkc7QUFJQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEOztBQUNBOzs7Ozs7QUFHQTs7QUFBQSxNQUFNQyxrQkFBa0IsR0FBRyx3QkFBM0IsSUFBMkIsQ0FBM0I7O0FBRWUsZ0ZBT2I7QUFDQSxNQUFJLENBQUNoRyxLQUFLLENBQUxBLFNBQUwsTUFBS0EsQ0FBTCxFQUE2QjtBQUMzQixTQUFLLE1BQUwscUJBQWdDO0FBQzlCLFlBQU13RSxPQUFPLEdBQUd3QixrQkFBa0IsQ0FBQ0MsT0FBTyxDQUExQyxNQUFrQyxDQUFsQztBQUNBLFlBQU1ULE1BQU0sR0FBR2hCLE9BQU8sQ0FBdEIsTUFBc0IsQ0FBdEI7O0FBRUEsa0JBQVk7QUFDVixZQUFJLENBQUN5QixPQUFPLENBQVosYUFBMEI7QUFDeEI7QUFDQTtBQUVGOztBQUFBLGNBQU1DLE9BQU8sR0FBRyxpQ0FDZEQsT0FBTyxDQURPLGtDQUtkQSxPQUFPLENBQVBBLDBCQUxGLFFBQWdCLENBQWhCO0FBT0EvSCxjQUFNLEdBQUdnSSxPQUFPLENBQVBBLGtCQUFUaEk7QUFDQWhGLGNBQU0sQ0FBTkEsY0FBcUJnTixPQUFPLENBQVBBLGtCQUFyQmhOOztBQUVBLFlBQUk4RyxLQUFLLENBQUxBLFNBQUosTUFBSUEsQ0FBSixFQUE0QjtBQUMxQjtBQUNBO0FBQ0E7QUFHRixTQXJCVSxDQXFCVjs7O0FBQ0EsY0FBTWpHLFlBQVksR0FBR3dELFdBQVcsQ0FBaEMsTUFBZ0MsQ0FBaEM7O0FBRUEsWUFBSXhELFlBQVksS0FBWkEsVUFBMkJpRyxLQUFLLENBQUxBLFNBQS9CLFlBQStCQSxDQUEvQixFQUE2RDtBQUMzRDtBQUVIO0FBQ0Y7QUFDRjtBQUNEOztBQUFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRE0scUNBQXVFO0FBQzVFLFFBQU07QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUNBLFNBQVFsRyxRQUFELElBQXlDO0FBQzlDLFVBQU13RyxVQUFVLEdBQUc2RixFQUFFLENBQUZBLEtBQW5CLFFBQW1CQSxDQUFuQjs7QUFDQSxRQUFJLENBQUosWUFBaUI7QUFDZjtBQUdGOztBQUFBLFVBQU1sQyxNQUFNLEdBQUl6RCxLQUFELElBQW1CO0FBQ2hDLFVBQUk7QUFDRixlQUFPaUUsa0JBQWtCLENBQXpCLEtBQXlCLENBQXpCO0FBQ0EsT0FGRixDQUVFLFVBQVU7QUFDVixjQUFNek0sR0FBOEIsR0FBRyxVQUF2Qyx3QkFBdUMsQ0FBdkM7QUFHQUEsV0FBRyxDQUFIQTtBQUNBO0FBRUg7QUFWRDs7QUFXQSxVQUFNd04sTUFBa0QsR0FBeEQ7QUFFQXRNLFVBQU0sQ0FBTkEscUJBQTZCa04sUUFBRCxJQUFzQjtBQUNoRCxZQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBaEIsUUFBZ0IsQ0FBaEI7QUFDQSxZQUFNQyxDQUFDLEdBQUdqRyxVQUFVLENBQUMrRixDQUFDLENBQXRCLEdBQW9CLENBQXBCOztBQUNBLFVBQUlFLENBQUMsS0FBTCxXQUFxQjtBQUNuQmYsY0FBTSxDQUFOQSxRQUFNLENBQU5BLEdBQW1CLENBQUNlLENBQUMsQ0FBREEsUUFBRCxHQUFDQSxDQUFELEdBQ2ZBLENBQUMsQ0FBREEsZUFBa0IvTyxLQUFELElBQVd5TSxNQUFNLENBRG5CLEtBQ21CLENBQWxDc0MsQ0FEZSxHQUVmRixDQUFDLENBQURBLFNBQ0EsQ0FBQ3BDLE1BQU0sQ0FEUG9DLENBQ08sQ0FBUCxDQURBQSxHQUVBcEMsTUFBTSxDQUpWdUIsQ0FJVSxDQUpWQTtBQU1IO0FBVkR0TTtBQVdBO0FBOUJGO0FBZ0NELEM7Ozs7Ozs7Ozs7Ozs7Ozt1Q0M5QkQ7QUFDQTs7QUFDQSwwQkFBa0M7QUFDaEMsU0FBT3NOLEdBQUcsQ0FBSEEsZ0NBQVAsTUFBT0EsQ0FBUDtBQUdGOztBQUFBLCtCQUF1QztBQUNyQyxRQUFNQyxRQUFRLEdBQUdqRyxLQUFLLENBQUxBLG1CQUF5QkEsS0FBSyxDQUFMQSxTQUExQyxHQUEwQ0EsQ0FBMUM7O0FBQ0EsZ0JBQWM7QUFDWkEsU0FBSyxHQUFHQSxLQUFLLENBQUxBLFNBQWUsQ0FBdkJBLENBQVFBLENBQVJBO0FBRUY7O0FBQUEsUUFBTWtHLE1BQU0sR0FBR2xHLEtBQUssQ0FBTEEsV0FBZixLQUFlQSxDQUFmOztBQUNBLGNBQVk7QUFDVkEsU0FBSyxHQUFHQSxLQUFLLENBQUxBLE1BQVJBLENBQVFBLENBQVJBO0FBRUY7O0FBQUEsU0FBTztBQUFFM0gsT0FBRyxFQUFMO0FBQUE7QUFBUDtBQUFPLEdBQVA7QUFHSzs7QUFBQSx3Q0FPTDtBQUNBLFFBQU04TixRQUFRLEdBQUcsQ0FBQ0MsZUFBZSxDQUFmQSxzQkFBRCxvQkFBakIsR0FBaUIsQ0FBakI7QUFJQSxRQUFNTixNQUFzQyxHQUE1QztBQUNBLE1BQUlPLFVBQVUsR0FBZDtBQUNBLFFBQU1DLGtCQUFrQixHQUFHSCxRQUFRLENBQVJBLElBQ25CSSxPQUFELElBQWE7QUFDaEIsUUFBSUEsT0FBTyxDQUFQQSxtQkFBMkJBLE9BQU8sQ0FBUEEsU0FBL0IsR0FBK0JBLENBQS9CLEVBQXNEO0FBQ3BELFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUE0QkMsY0FBYyxDQUFDRCxPQUFPLENBQVBBLFNBQWlCLENBQWxFLENBQWlEQSxDQUFELENBQWhEO0FBQ0FULFlBQU0sQ0FBTkEsR0FBTSxDQUFOQSxHQUFjO0FBQUVXLFdBQUcsRUFBRUosVUFBUDtBQUFBO0FBQWRQO0FBQWMsT0FBZEE7QUFDQSxhQUFPSSxNQUFNLEdBQUlELFFBQVEsbUJBQVosV0FBYjtBQUhGLFdBSU87QUFDTCxhQUFRLElBQUdTLFdBQVcsU0FBdEI7QUFFSDtBQVR3QlAsVUFBM0IsRUFBMkJBLENBQTNCLENBUEEsQ0FtQkE7QUFDQTs7QUFDQSxZQUFtQztBQUNqQyxRQUFJUSxnQkFBZ0IsR0FBcEI7QUFDQSxRQUFJQyxrQkFBa0IsR0FBdEIsRUFGaUMsQ0FJakM7O0FBQ0EsVUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDNUIsVUFBSUMsUUFBUSxHQUFaOztBQUVBLFdBQUssSUFBSUMsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQWpCLG9CQUF3Q0EsQ0FBeEMsSUFBNkM7QUFDM0NELGdCQUFRLElBQUkvRCxNQUFNLENBQU5BLGFBQVorRCxnQkFBWS9ELENBQVorRDtBQUNBSCx3QkFBZ0I7O0FBRWhCLFlBQUlBLGdCQUFnQixHQUFwQixLQUE0QjtBQUMxQkMsNEJBQWtCO0FBQ2xCRCwwQkFBZ0IsR0FBaEJBO0FBRUg7QUFDRDs7QUFBQTtBQVpGOztBQWVBLFVBQU1LLFNBQXNDLEdBQTVDO0FBRUEsUUFBSUMsdUJBQXVCLEdBQUdkLFFBQVEsQ0FBUkEsSUFDdEJJLE9BQUQsSUFBYTtBQUNoQixVQUFJQSxPQUFPLENBQVBBLG1CQUEyQkEsT0FBTyxDQUFQQSxTQUEvQixHQUErQkEsQ0FBL0IsRUFBc0Q7QUFDcEQsY0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTRCQyxjQUFjLENBQUNELE9BQU8sQ0FBUEEsU0FBaUIsQ0FBbEUsQ0FBaURBLENBQUQsQ0FBaEQsQ0FEb0QsQ0FFcEQ7QUFDQTs7QUFDQSxZQUFJVyxVQUFVLEdBQUc3TyxHQUFHLENBQUhBLGVBQWpCLEVBQWlCQSxDQUFqQjtBQUNBLFlBQUk4TyxVQUFVLEdBQWQsTUFMb0QsQ0FPcEQ7QUFDQTs7QUFDQSxZQUFJRCxVQUFVLENBQVZBLGdCQUEyQkEsVUFBVSxDQUFWQSxTQUEvQixJQUF1RDtBQUNyREMsb0JBQVUsR0FBVkE7QUFFRjs7QUFBQSxZQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDSCxVQUFVLENBQVZBLFVBQXBCLENBQW9CQSxDQUFELENBQVQsQ0FBVixFQUErQztBQUM3Q0Msb0JBQVUsR0FBVkE7QUFHRjs7QUFBQSx3QkFBZ0I7QUFDZEQsb0JBQVUsR0FBR0wsZUFBYks7QUFHRkY7O0FBQUFBLGlCQUFTLENBQVRBLFVBQVMsQ0FBVEE7QUFDQSxlQUFPZCxNQUFNLEdBQ1RELFFBQVEsR0FDTCxVQUFTaUIsVUFESixZQUVMLE9BQU1BLFVBSEEsVUFJUixPQUFNQSxVQUpYO0FBckJGLGFBMEJPO0FBQ0wsZUFBUSxJQUFHUixXQUFXLFNBQXRCO0FBRUg7QUEvQjJCUCxZQUE5QixFQUE4QkEsQ0FBOUI7QUFrQ0EsV0FBTztBQUNMUixRQUFFLEVBQUUsV0FBWSxJQUFHVyxrQkFEZCxTQUNELENBREM7QUFBQTtBQUFBO0FBSUxnQixnQkFBVSxFQUFHLElBQUdMLHVCQUpsQjtBQUFPLEtBQVA7QUFRRjs7QUFBQSxTQUFPO0FBQ0x0QixNQUFFLEVBQUUsV0FBWSxJQUFHVyxrQkFEZCxTQUNELENBREM7QUFBUDtBQUFPLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEQ7QUFrUUE7Ozs7O0FBR08sc0JBRUY7QUFDSCxNQUFJaUIsSUFBSSxHQUFSO0FBQ0E7QUFFQSxTQUFRLENBQUMsR0FBRCxTQUFvQjtBQUMxQixRQUFJLENBQUosTUFBVztBQUNUQSxVQUFJLEdBQUpBO0FBQ0FsQyxZQUFNLEdBQUd0RCxFQUFFLENBQUMsR0FBWnNELElBQVcsQ0FBWEE7QUFFRjs7QUFBQTtBQUxGO0FBU0s7O0FBQUEsNkJBQTZCO0FBQ2xDLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUErQnpPLE1BQU0sQ0FBM0M7QUFDQSxTQUFRLEdBQUU2TCxRQUFTLEtBQUlLLFFBQVMsR0FBRTBFLElBQUksR0FBRyxNQUFILE9BQWdCLEVBQXREO0FBR0s7O0FBQUEsa0JBQWtCO0FBQ3ZCLFFBQU07QUFBQTtBQUFBLE1BQVc1USxNQUFNLENBQXZCO0FBQ0EsUUFBTXlNLE1BQU0sR0FBR29FLGlCQUFmO0FBQ0EsU0FBT2hRLElBQUksQ0FBSkEsVUFBZTRMLE1BQU0sQ0FBNUIsTUFBTzVMLENBQVA7QUFHSzs7QUFBQSxtQ0FBd0Q7QUFDN0QsU0FBTyw0Q0FFSG9ILFNBQVMsQ0FBVEEsZUFBeUJBLFNBQVMsQ0FBbENBLFFBRko7QUFLSzs7QUFBQSx3QkFBd0M7QUFDN0MsU0FBTzNCLEdBQUcsQ0FBSEEsWUFBZ0JBLEdBQUcsQ0FBMUI7QUFHSzs7QUFBQSw2Q0FJa0Q7QUFDdkQsWUFBMkM7QUFBQTs7QUFDekMsMEJBQUl3SyxHQUFHLENBQVAsNERBQUlBLGVBQUosaUJBQW9DO0FBQ2xDLFlBQU10TSxPQUFPLEdBQUksSUFBR3VNLGNBQWMsS0FBbEM7QUFHQSxZQUFNLFVBQU4sT0FBTSxDQUFOO0FBRUg7QUFDRCxHQVR1RCxDQVN2RDs7O0FBQ0EsUUFBTXpLLEdBQUcsR0FBR21GLEdBQUcsQ0FBSEEsT0FBWUEsR0FBRyxDQUFIQSxPQUFXQSxHQUFHLENBQUhBLElBQW5DOztBQUVBLE1BQUksQ0FBQ3FGLEdBQUcsQ0FBUixpQkFBMEI7QUFDeEIsUUFBSXJGLEdBQUcsQ0FBSEEsT0FBV0EsR0FBRyxDQUFsQixXQUE4QjtBQUM1QjtBQUNBLGFBQU87QUFDTHVGLGlCQUFTLEVBQUUsTUFBTUMsbUJBQW1CLENBQUN4RixHQUFHLENBQUosV0FBZ0JBLEdBQUcsQ0FEekQsR0FDc0M7QUFEL0IsT0FBUDtBQUlGOztBQUFBO0FBR0Y7O0FBQUEsUUFBTTFKLEtBQUssR0FBRyxNQUFNK08sR0FBRyxDQUFIQSxnQkFBcEIsR0FBb0JBLENBQXBCOztBQUVBLE1BQUl4SyxHQUFHLElBQUk0SyxTQUFTLENBQXBCLEdBQW9CLENBQXBCLEVBQTJCO0FBQ3pCO0FBR0Y7O0FBQUEsTUFBSSxDQUFKLE9BQVk7QUFDVixVQUFNMU0sT0FBTyxHQUFJLElBQUd1TSxjQUFjLEtBRWhDLCtEQUE4RGhQLEtBRmhFO0FBR0EsVUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUdGOztBQUFBLFlBQTJDO0FBQ3pDLFFBQUlELE1BQU0sQ0FBTkEsNEJBQW1DLENBQUMySixHQUFHLENBQTNDLEtBQWlEO0FBQy9DL0ssYUFBTyxDQUFQQSxLQUNHLEdBQUVxUSxjQUFjLEtBRG5CclE7QUFNSDtBQUVEOztBQUFBO0FBR0s7O0FBQUEsTUFBTXlRLGFBQWEsR0FBRyx3R0FBdEIsU0FBc0IsQ0FBdEI7OztBQWVBLG1DQUFzRDtBQUMzRCxZQUE0QztBQUMxQyxRQUFJMUwsR0FBRyxLQUFIQSxRQUFnQixlQUFwQixVQUE2QztBQUMzQzNELFlBQU0sQ0FBTkEsa0JBQTBCTCxHQUFELElBQVM7QUFDaEMsWUFBSTBQLGFBQWEsQ0FBYkEsaUJBQStCLENBQW5DLEdBQXVDO0FBQ3JDelEsaUJBQU8sQ0FBUEEsS0FDRyxxREFBb0RlLEdBRHZEZjtBQUlIO0FBTkRvQjtBQVFIO0FBRUQ7O0FBQUEsU0FBTywwQkFBUCxHQUFPLENBQVA7QUFHSzs7QUFBQSxNQUFNc1AsRUFBRSxHQUFHLHVCQUFYOztBQUNBLE1BQU01SSxFQUFFLEdBQ2I0SSxFQUFFLElBQ0YsT0FBTzNJLFdBQVcsQ0FBbEIsU0FEQTJJLGNBRUEsT0FBTzNJLFdBQVcsQ0FBbEIsWUFISzs7Ozs7Ozs7Ozs7OztBQ2pZTSx3QkFBd0IsMENBQTBDLGdEQUFnRCxnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7Ozs7QUNEQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7Ozs7QUNBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTWhELEdBQUcsR0FBRyxPQUFaO0FBRU8sTUFBTTRMLGFBQWEsR0FBSUMsTUFBRCxJQUFZO0FBQ3ZDLE1BQUlDLFFBQVEsR0FBR0QsTUFBTSxHQUFHRSx1REFBTyxHQUFHL0wsR0FBVixHQUFpQixJQUFHNkwsTUFBTyxFQUE5QixHQUFrQ0UsdURBQU8sR0FBRy9MLEdBQWpFO0FBQ0EsU0FBT2dNLDREQUFZLENBQUN2TixHQUFiLENBQWlCcU4sUUFBakIsQ0FBUDtBQUNELENBSE07QUFLQSxNQUFNRyxzQkFBc0IsR0FBSUMsR0FBRCxJQUFTO0FBQzdDLE1BQUlKLFFBQVEsR0FBR0MsdURBQU8sR0FBRy9MLEdBQVYsR0FBZ0IsR0FBaEIsR0FBc0JtTSxpRUFBVyxDQUFDLFdBQUQsRUFBY0QsR0FBZCxDQUFoRDtBQUNBLFNBQU9GLDREQUFZLENBQUN2TixHQUFiLENBQWlCcU4sUUFBakIsQ0FBUDtBQUNELENBSE07QUFLQSxNQUFNTSxXQUFXLEdBQUl6RyxJQUFELElBQVU7QUFDbkMsTUFBSW1HLFFBQVEsR0FBR0MsdURBQU8sR0FBRy9MLEdBQXpCO0FBQ0EsU0FBT2dNLDREQUFZLENBQUNLLElBQWIsQ0FBa0JQLFFBQWxCLEVBQTRCbkcsSUFBNUIsQ0FBUDtBQUNELENBSE07QUFLQSxNQUFNMkcsY0FBYyxHQUFJVCxNQUFELElBQVk7QUFDeEMsTUFBSUMsUUFBUSxHQUFHQyx1REFBTyxHQUFHL0wsR0FBVixHQUFpQixJQUFHNkwsTUFBTyxFQUExQztBQUNBLFNBQU9HLDREQUFZLENBQUNPLE1BQWIsQ0FBb0JULFFBQXBCLENBQVA7QUFDRCxDQUhNO0FBS0EsTUFBTVUsY0FBYyxHQUFHLENBQUNYLE1BQUQsRUFBU2xHLElBQVQsS0FBa0I7QUFDOUMsTUFBSW1HLFFBQVEsR0FBR0MsdURBQU8sR0FBRy9MLEdBQVYsR0FBaUIsSUFBRzZMLE1BQU8sRUFBMUM7QUFDQSxTQUFPRyw0REFBWSxDQUFDUyxLQUFiLENBQW1CWCxRQUFuQixFQUE2Qm5HLElBQTdCLENBQVA7QUFDRCxDQUhNLEM7Ozs7Ozs7Ozs7OztBQzFCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTTNGLEdBQUcsR0FBRyxVQUFaOztBQUVBLE1BQU0wTSxTQUFTLEdBQUcsQ0FBQzFNLEdBQUQsRUFBTTJNLEtBQU4sRUFBYUMsUUFBYixLQUEwQjtBQUMxQyxTQUNFNU0sR0FBRyxHQUFHLEdBQU4sR0FBWW1NLGlFQUFXLENBQUMsUUFBRCxFQUFXUSxLQUFYLENBQXZCLEdBQTJDUixpRUFBVyxDQUFDLFVBQUQsRUFBYVMsUUFBYixDQUR4RDtBQUdELENBSkQsQyxDQU1BOzs7QUFDTyxNQUFNQyxpQkFBaUIsR0FBSXpMLEtBQUQsSUFBVztBQUMxQyxNQUFJMEssUUFBUSxHQUNWWSxTQUFTLENBQUNYLHVEQUFPLEdBQUcvTCxHQUFYLEVBQWdCb0IsS0FBSyxDQUFDdUwsS0FBdEIsRUFBNkJ2TCxLQUFLLENBQUN3TCxRQUFuQyxDQUFULEdBQ0FULGlFQUFXLENBQUMsT0FBRCxFQUFVL0ssS0FBSyxDQUFDK0MsSUFBaEIsQ0FEWCxHQUVBZ0ksaUVBQVcsQ0FBQyxPQUFELEVBQVUvSyxLQUFLLENBQUMwTCxJQUFOLENBQVdBLElBQXJCLENBRlgsR0FHQVgsaUVBQVcsQ0FBQyxRQUFELEVBQVcvSyxLQUFLLENBQUMwTCxJQUFOLENBQVdDLEtBQXRCLENBSFgsR0FJQVosaUVBQVcsQ0FBQyxHQUFELEVBQU0vSyxLQUFLLENBQUM0TCxDQUFaLENBSlgsR0FLQWIsaUVBQVcsQ0FBQyxzQkFBRCxFQUF5Qi9LLEtBQUssQ0FBQzZMLEtBQS9CLENBTFgsR0FNQWQsaUVBQVcsQ0FBQyxxQkFBRCxFQUF3Qi9LLEtBQUssQ0FBQzhMLElBQTlCLENBTlgsR0FPQWYsaUVBQVcsQ0FBQyxVQUFELEVBQWEvSyxLQUFLLENBQUMrTCxHQUFuQixDQVJiO0FBU0EsU0FBT25CLDREQUFZLENBQUN2TixHQUFiLENBQWlCcU4sUUFBakIsQ0FBUDtBQUNELENBWE07QUFhQSxNQUFNc0IscUJBQXFCLEdBQUloTSxLQUFELElBQVc7QUFDOUMsTUFBSTBLLFFBQVEsR0FBR1ksU0FBUyxDQUFDWCx1REFBTyxHQUFHL0wsR0FBWCxFQUFnQm9CLEtBQUssQ0FBQ3VMLEtBQXRCLEVBQTZCdkwsS0FBSyxDQUFDd0wsUUFBbkMsQ0FBeEI7QUFDQSxTQUFPWiw0REFBWSxDQUFDdk4sR0FBYixDQUFpQnFOLFFBQWpCLENBQVA7QUFDRCxDQUhNO0FBS0EsTUFBTXVCLHlCQUF5QixHQUFJak0sS0FBRCxJQUFXO0FBQ2xELE1BQUkwSyxRQUFRLEdBQUdZLFNBQVMsQ0FBQ1gsdURBQU8sR0FBRy9MLEdBQVgsRUFBZ0JvQixLQUFLLENBQUN1TCxLQUF0QixFQUE2QnZMLEtBQUssQ0FBQ3dMLFFBQW5DLENBQXhCO0FBQ0EsU0FBT1osNERBQVksQ0FBQ3ZOLEdBQWIsQ0FBaUJxTixRQUFqQixDQUFQO0FBQ0QsQ0FITTtBQUtBLE1BQU13QiwyQkFBMkIsR0FBSWxNLEtBQUQsSUFBVztBQUNwRCxNQUFJMEssUUFBUSxHQUFHWSxTQUFTLENBQUNYLHVEQUFPLEdBQUcvTCxHQUFYLEVBQWdCb0IsS0FBSyxDQUFDdUwsS0FBdEIsRUFBNkJ2TCxLQUFLLENBQUN3TCxRQUFuQyxDQUF4QjtBQUNBLFNBQU9aLDREQUFZLENBQUN2TixHQUFiLENBQWlCcU4sUUFBakIsQ0FBUDtBQUNELENBSE07QUFLQSxNQUFNeUIscUJBQXFCLEdBQUluTSxLQUFELElBQVc7QUFDOUMsTUFBSTBLLFFBQVEsR0FBR1ksU0FBUyxDQUFDWCx1REFBTyxHQUFHL0wsR0FBWCxFQUFnQm9CLEtBQUssQ0FBQ3VMLEtBQXRCLEVBQTZCdkwsS0FBSyxDQUFDd0wsUUFBbkMsQ0FBeEI7QUFDQSxTQUFPWiw0REFBWSxDQUFDdk4sR0FBYixDQUFpQnFOLFFBQWpCLENBQVA7QUFDRCxDQUhNLEMsQ0FLUDs7QUFDTyxNQUFNMEIsc0JBQXNCLEdBQUlDLElBQUQsSUFBVTtBQUM5QyxNQUFJM0IsUUFBUSxHQUFHQyx1REFBTyxHQUFHL0wsR0FBVixHQUFnQixHQUFoQixHQUFzQm1NLGlFQUFXLENBQUMsTUFBRCxFQUFTc0IsSUFBVCxDQUFoRDtBQUNBLFNBQU96Qiw0REFBWSxDQUFDdk4sR0FBYixDQUFpQnFOLFFBQWpCLENBQVA7QUFDRCxDQUhNLEMsQ0FLUDs7QUFDTyxNQUFNNEIsd0JBQXdCLEdBQUl0TSxLQUFELElBQVc7QUFDakQsTUFBSTBLLFFBQVEsR0FDVkMsdURBQU8sR0FDUC9MLEdBREEsR0FFQSxHQUZBLEdBR0FtTSxpRUFBVyxDQUFDLEdBQUQsRUFBTS9LLEtBQUssQ0FBQ3VNLEtBQVosQ0FIWCxHQUlBeEIsaUVBQVcsQ0FBQyxVQUFELEVBQWEvSyxLQUFLLENBQUN3TCxRQUFuQixDQUpYLEdBS0FULGlFQUFXLENBQUMsUUFBRCxFQUFXL0ssS0FBSyxDQUFDdUwsS0FBakIsQ0FOYjtBQU9BLFNBQU9YLDREQUFZLENBQUN2TixHQUFiLENBQWlCcU4sUUFBakIsQ0FBUDtBQUNELENBVE0sQzs7Ozs7Ozs7Ozs7O0FDckRQO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU04QixZQUFOLENBQW1CO0FBQ2pCMU0sYUFBVyxHQUFHO0FBQ1osVUFBTTlCLFFBQVEsR0FBR3lPLDRDQUFLLENBQUNDLE1BQU4sRUFBakI7QUFDQTFPLFlBQVEsQ0FBQzJPLFlBQVQsQ0FBc0JDLFFBQXRCLENBQStCQyxHQUEvQixDQUFtQyxLQUFLQyxhQUF4QyxFQUF1RCxLQUFLQyxXQUE1RDtBQUNBLFNBQUsvTyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOztBQUVEOE8sZUFBYSxDQUFDRixRQUFELEVBQVc7QUFDdEIsV0FBT0EsUUFBUDtBQUNEOztBQUVERyxhQUFXLENBQUNwSyxLQUFELEVBQVE7QUFDakIsV0FBT3VCLE9BQU8sQ0FBQzhJLE1BQVIsQ0FBZXJLLEtBQWYsQ0FBUDtBQUNEOztBQUVEdEYsS0FBRyxDQUFDdUIsR0FBRCxFQUFNO0FBQ1AsV0FBTyxLQUFLWixRQUFMLENBQWNYLEdBQWQsQ0FBa0J1QixHQUFsQixDQUFQO0FBQ0Q7O0FBRURxTSxNQUFJLENBQUNyTSxHQUFELEVBQU1xTyxJQUFOLEVBQVk7QUFDZCxXQUFPLEtBQUtqUCxRQUFMLENBQWNpTixJQUFkLENBQW1Cck0sR0FBbkIsRUFBd0JxTyxJQUF4QixDQUFQO0FBQ0Q7O0FBRUQ1QixPQUFLLENBQUN6TSxHQUFELEVBQU1xTyxJQUFOLEVBQVk7QUFDZixXQUFPLEtBQUtqUCxRQUFMLENBQWNxTixLQUFkLENBQW9Cek0sR0FBcEIsRUFBeUJxTyxJQUF6QixDQUFQO0FBQ0Q7O0FBRUQ5QixRQUFNLENBQUN2TSxHQUFELEVBQU07QUFDVixXQUFPLEtBQUtaLFFBQUwsQ0FBY21OLE1BQWQsQ0FBcUJ2TSxHQUFyQixDQUFQO0FBQ0Q7O0FBN0JnQjs7QUFnQ0osbUVBQUk0TixZQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBT08sTUFBTVUsa0JBQWtCLEdBQUcsQ0FBQztBQUNqQ0MsU0FEaUM7QUFFakNDLFVBQVEsR0FBRyxDQUZzQjtBQUdqQ0MsV0FIaUM7QUFJakNDLFNBSmlDO0FBS2pDQyxzQkFBb0IsR0FBRyxNQUFNO0FBTEksQ0FBRCxLQU01QjtBQUNKMUMsMkVBQXNCLENBQUNzQyxPQUFPLENBQUNLLEVBQVQsQ0FBdEIsQ0FDR0MsSUFESCxDQUNTaE8sR0FBRCxJQUFTO0FBQ2IsUUFBSUEsR0FBRyxDQUFDOEUsSUFBSixDQUFTbUosTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN6QixVQUFJUCxPQUFPLENBQUNDLFFBQVIsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUJFLGVBQU8sSUFBSUEsT0FBTyxDQUFDLG9DQUFELENBQWxCO0FBQ0FDLDRCQUFvQixJQUFJQSxvQkFBb0IsQ0FBQyxLQUFELENBQTVDO0FBQ0QsT0FIRCxNQUdPO0FBQ0x2QyxzRUFBVyxpQ0FDTm1DLE9BRE07QUFFVEssWUFBRSxFQUFFRywrQ0FBTSxFQUZEO0FBR1RDLG1CQUFTLEVBQUVULE9BQU8sQ0FBQ0ssRUFIVjtBQUlUSyxzQkFBWSxFQUFFVDtBQUpMLFdBQVgsQ0FNR0ssSUFOSCxDQU1TaE8sR0FBRCxJQUFTNE4sU0FBUyxJQUFJQSxTQUFTLENBQUM1TixHQUFELENBTnZDLEVBT0dxTyxLQVBILENBUUsvVCxHQUFELElBQ0V1VCxPQUFPLElBQ1BBLE9BQU8sQ0FBQyw4Q0FBRCxFQUFpRHZULEdBQWpELENBVmI7QUFZRDtBQUNGLEtBbEJELE1Ba0JPO0FBQ0wsVUFBSWdVLEtBQUssR0FBR3RPLEdBQUcsQ0FBQzhFLElBQUosQ0FBUyxDQUFULENBQVo7O0FBQ0EsVUFBSXdKLEtBQUssQ0FBQ0YsWUFBTixHQUFxQlQsUUFBckIsR0FBZ0NXLEtBQUssQ0FBQ1gsUUFBMUMsRUFBb0Q7QUFDbERFLGVBQU8sSUFBSUEsT0FBTyxDQUFDLG9DQUFELENBQWxCO0FBQ0FDLDRCQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDRCxPQUhELE1BR087QUFDTG5DLHlFQUFjLENBQUMyQyxLQUFLLENBQUNQLEVBQVAsRUFBVztBQUN2Qkssc0JBQVksRUFBRUUsS0FBSyxDQUFDRixZQUFOLEdBQXFCVDtBQURaLFNBQVgsQ0FBZCxDQUdHSyxJQUhILENBR1NoTyxHQUFELElBQVM7QUFDYjROLG1CQUFTLElBQUlBLFNBQVMsQ0FBQzVOLEdBQUQsQ0FBdEI7QUFDRCxTQUxILEVBTUdxTyxLQU5ILENBT0svVCxHQUFELElBQ0V1VCxPQUFPLElBQ1BBLE9BQU8sQ0FBQyw4Q0FBRCxFQUFpRHZULEdBQWpELENBVGI7QUFXRDtBQUNGO0FBQ0YsR0F2Q0gsRUF3Q0crVCxLQXhDSCxDQXlDSy9ULEdBQUQsSUFDRXVULE9BQU8sSUFBSUEsT0FBTyxDQUFDLDhDQUFELEVBQWlEdlQsR0FBakQsQ0ExQ3hCO0FBNENELENBbkRNO0FBcURBLE1BQU1pVSx1QkFBdUIsR0FBRyxDQUFDO0FBQUV2RCxRQUFGO0FBQVU0QyxXQUFWO0FBQXFCQztBQUFyQixDQUFELEtBQW9DO0FBQ3pFLE1BQUk3QyxNQUFNLElBQUlBLE1BQU0sS0FBSyxFQUFyQixJQUEyQkEsTUFBTSxLQUFLLElBQTFDLEVBQWdEO0FBQzlDUyxxRUFBYyxDQUFDVCxNQUFELENBQWQsQ0FDR2dELElBREgsQ0FDU2hPLEdBQUQsSUFBUzROLFNBQVMsSUFBSUEsU0FBUyxDQUFDNU4sR0FBRCxDQUR2QyxFQUVHcU8sS0FGSCxDQUdLL1QsR0FBRCxJQUNFdVQsT0FBTyxJQUFJQSxPQUFPLENBQUMseUNBQUQsRUFBNEN2VCxHQUE1QyxDQUp4QjtBQU1EO0FBQ0YsQ0FUTTtBQVdBLE1BQU1rVSwyQkFBMkIsR0FBRyxDQUFDO0FBQzFDZCxTQUQwQztBQUUxQ0MsVUFGMEM7QUFHMUNDO0FBSDBDLENBQUQsS0FJckM7QUFDSixNQUFJRCxRQUFRLEdBQUdELE9BQU8sQ0FBQ0MsUUFBbkIsSUFBK0JBLFFBQVEsR0FBRyxDQUE5QyxFQUFpRDtBQUMvQztBQUNEOztBQUNEaEMsbUVBQWMsQ0FBQytCLE9BQU8sQ0FBQ0ssRUFBVCxFQUFhO0FBQUVLLGdCQUFZLEVBQUVUO0FBQWhCLEdBQWIsQ0FBZCxDQUNHSyxJQURILENBQ1NoTyxHQUFELElBQVM0TixTQUFTLElBQUlBLFNBQVMsQ0FBQzVOLEdBQUQsQ0FEdkMsRUFFR3FPLEtBRkgsQ0FFVS9ULEdBQUQsSUFBU0YsT0FBTyxDQUFDcVUsR0FBUixDQUFZblUsR0FBWixDQUZsQjtBQUdELENBWE0sQzs7Ozs7Ozs7Ozs7O0FDeEVQO0FBQUE7QUFBTyxNQUFNNFEsT0FBTyxHQUFHLGlDQUFoQixDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNd0QsaUJBQWlCLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNL0IsSUFBTixLQUFlO0FBQzlDLFNBQU9BLElBQUksSUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXhCLEdBQ0grQixHQUFHLENBQUNDLElBQUosQ0FBVXpTLENBQUQsSUFBT0EsQ0FBQyxDQUFDeVEsSUFBRixDQUFPaUMsV0FBUCxPQUF5QmpDLElBQUksQ0FBQ2lDLFdBQUwsRUFBekMsQ0FERyxHQUVIRixHQUZKO0FBR0QsQ0FKTTtBQU1BLE1BQU1HLG1CQUFtQixHQUFJSCxHQUFELElBQVM7QUFDMUMsTUFBSUksS0FBSyxHQUFHLENBQVo7QUFDQUosS0FBRyxDQUFDSyxPQUFKLENBQWE1RyxJQUFELElBQVU7QUFDcEIsUUFBSUEsSUFBSSxDQUFDNkcsUUFBVCxFQUFtQjtBQUNqQkYsV0FBSyxJQUFJM0csSUFBSSxDQUFDZ0csWUFBTCxHQUNMLENBQUNoRyxJQUFJLENBQUM4RyxLQUFMLEdBQWE5RyxJQUFJLENBQUM2RyxRQUFuQixJQUErQjdHLElBQUksQ0FBQ2dHLFlBRC9CLEdBRUxoRyxJQUFJLENBQUM4RyxLQUFMLEdBQWE5RyxJQUFJLENBQUM2RyxRQUZ0QjtBQUdELEtBSkQsTUFJTztBQUNMRixXQUFLLElBQUkzRyxJQUFJLENBQUNnRyxZQUFMLEdBQW9CaEcsSUFBSSxDQUFDOEcsS0FBTCxHQUFhOUcsSUFBSSxDQUFDZ0csWUFBdEMsR0FBcURoRyxJQUFJLENBQUM4RyxLQUFuRTtBQUNEO0FBQ0YsR0FSRDtBQVNBLFNBQU9ILEtBQVA7QUFDRCxDQVpNLEMsQ0FjUDs7QUFDTyxNQUFNSSxrQkFBa0IsR0FBRyxDQUFDQyxPQUFELEVBQVUvRCxHQUFWLEtBQWtCO0FBQ2xELFNBQU9BLEdBQUcsR0FBRytELE9BQU8sQ0FBQ1IsSUFBUixDQUFjeEcsSUFBRCxJQUFVQSxJQUFJLENBQUMrRixTQUFMLEtBQW1COUMsR0FBMUMsQ0FBSCxHQUFvRGdFLFNBQTlEO0FBQ0QsQ0FGTTtBQUlBLE1BQU1DLHdCQUF3QixHQUFHLENBQUNGLE9BQUQsRUFBVS9ELEdBQVYsS0FBa0I7QUFDeEQsUUFBTWtFLGNBQWMsR0FBR0gsT0FBTyxDQUFDSSxNQUFSLENBQWdCcEgsSUFBRCxJQUFVQSxJQUFJLENBQUMrRixTQUFMLEtBQW1COUMsR0FBNUMsQ0FBdkI7O0FBQ0EsTUFBSWtFLGNBQWMsSUFBSUEsY0FBYyxDQUFDdEIsTUFBZixHQUF3QixDQUE5QyxFQUFpRDtBQUMvQyxVQUFNd0IsMEJBQTBCLEdBQUdGLGNBQWMsQ0FBQ0csTUFBZixDQUNqQyxDQUFDWCxLQUFELEVBQVEzRyxJQUFSLEtBQWlCMkcsS0FBSyxHQUFHM0csSUFBSSxDQUFDZ0csWUFERyxFQUVqQyxDQUZpQyxDQUFuQztBQUlBLFdBQU9xQiwwQkFBUDtBQUNELEdBTkQsTUFNTztBQUNMLFdBQU8sQ0FBUDtBQUNEO0FBQ0YsQ0FYTSxDLENBYVA7O0FBQ08sTUFBTUUsc0JBQXNCLEdBQUcsQ0FBQ0MsV0FBRCxFQUFjdkUsR0FBZCxLQUFzQjtBQUMxRCxTQUFPQSxHQUFHLEdBQUd1RSxXQUFXLENBQUNoQixJQUFaLENBQWtCeEcsSUFBRCxJQUFVQSxJQUFJLENBQUMyRixFQUFMLEtBQVkxQyxHQUF2QyxDQUFILEdBQWlEZ0UsU0FBM0Q7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7OztBQ3ZDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU1EsV0FBVCxDQUFxQnJJLEtBQXJCLEVBQTRCc0ksS0FBNUIsRUFBbUM7QUFDaEQsUUFBTTtBQUFBLE9BQUNDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NDLHNEQUFRLENBQUN6SSxLQUFELENBQXBEO0FBQ0EwSSx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNbFIsT0FBTyxHQUFHbVIsVUFBVSxDQUFDLE1BQU07QUFDL0JILHVCQUFpQixDQUFDeEksS0FBRCxDQUFqQjtBQUNELEtBRnlCLEVBRXZCc0ksS0FGdUIsQ0FBMUI7QUFHQSxXQUFPLE1BQU07QUFDWE0sa0JBQVksQ0FBQ3BSLE9BQUQsQ0FBWjtBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT04sQ0FBQ3dJLEtBQUQsQ0FQTSxDQUFUO0FBUUEsU0FBT3VJLGNBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTU0sY0FBYyxHQUFHLENBQUNuQixLQUFELEVBQVFvQixPQUFPLEdBQUcsT0FBbEIsRUFBMkJDLFFBQVEsR0FBRyxLQUF0QyxLQUFnRDtBQUM1RSxTQUFPLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQkgsT0FBdEIsRUFBK0I7QUFDcENJLFNBQUssRUFBRSxVQUQ2QjtBQUVwQ0gsWUFBUSxFQUFFQTtBQUYwQixHQUEvQixFQUdKSSxNQUhJLENBR0d6QixLQUhILENBQVA7QUFJRCxDQUxNO0FBT0EsTUFBTTVELFdBQVcsR0FBRyxDQUFDc0YsU0FBRCxFQUFZQyxVQUFaLEtBQTJCO0FBQ3BELE1BQUlBLFVBQVUsSUFBSUEsVUFBVSxLQUFLLEVBQTdCLElBQW1DQSxVQUFVLEtBQUssSUFBdEQsRUFBNEQ7QUFDMUQsV0FBUSxJQUFHRCxTQUFVLElBQUdDLFVBQVcsRUFBbkM7QUFDRDs7QUFDRCxTQUFPLEVBQVA7QUFDRCxDQUxNO0FBT0EsTUFBTUMsVUFBVSxHQUFHLENBQ3hCQyxJQUR3QixFQUV4QkMsV0FBVyxHQUFHLFlBRlUsRUFHeEJDLFlBQVksR0FBRyxjQUhTLEtBSXJCO0FBQ0gsU0FBT0MsNkNBQU0sQ0FBQ0gsSUFBRCxFQUFPQyxXQUFQLENBQU4sQ0FBMEJMLE1BQTFCLENBQWlDTSxZQUFqQyxDQUFQO0FBQ0QsQ0FOTTtBQVFBLE1BQU1FLFVBQVUsR0FBSXJJLEdBQUQsSUFBUztBQUNqQyxTQUFPQSxHQUFHLENBQUMvTixPQUFKLENBQVksSUFBWixFQUFrQixHQUFsQixDQUFQO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCUDtBQUNBO0FBRWUsU0FBU3FXLGdCQUFULENBQTBCQyxnQkFBMUIsRUFBNEM7QUFDekQsU0FBTyxVQUFVNVYsS0FBVixFQUFpQjtBQUN0QixVQUFNNlYsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxVQUFNO0FBQUEsU0FBQzFXLE1BQUQ7QUFBQSxTQUFTMlc7QUFBVCxRQUFzQnZCLHNEQUFRLENBQUMsQ0FBRCxDQUFwQztBQUNBLFVBQU07QUFBQSxTQUFDd0IsYUFBRDtBQUFBLFNBQWdCQztBQUFoQixRQUFvQ3pCLHNEQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUNBQywyREFBUyxDQUFDLE1BQU07QUFDZHhXLFlBQU0sQ0FBQ2lZLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxZQUFsQztBQUNBLGFBQU8sTUFBTTtBQUNYbFksY0FBTSxDQUFDbVksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELFlBQXJDO0FBQ0QsT0FGRDtBQUdELEtBTFEsRUFLTixFQUxNLENBQVQ7QUFPQTFCLDJEQUFTLENBQUMsTUFBTTtBQUNkLFVBQUlyVixNQUFNLElBQUl5VyxTQUFTLENBQUNRLE9BQVYsQ0FBa0JDLFlBQWhDLEVBQThDO0FBQzVDTCx3QkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLHdCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDRDtBQUNGLEtBTlEsRUFNTixDQUFDN1csTUFBRCxDQU5NLENBQVQ7O0FBUUEsYUFBUytXLFlBQVQsR0FBd0I7QUFDdEJKLGVBQVMsQ0FBQzlYLE1BQU0sQ0FBQ3NZLE9BQVIsQ0FBVDtBQUNEOztBQUVELFdBQ0U7QUFDRSxTQUFHLEVBQUVWLFNBRFA7QUFFRSxlQUFTLEVBQUcsVUFBU1csaURBQVUsQ0FDN0I7QUFBRUMsYUFBSyxFQUFFVDtBQUFULE9BRDZCLEVBRTdCaFcsS0FBSyxDQUFDMFcsU0FGdUIsQ0FHN0IsRUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0UsTUFBQyxnQkFBRCxlQUFzQjFXLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FQRixDQURGO0FBV0QsR0FsQ0Q7QUFtQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzJXLE1BQVQsQ0FBZ0I7QUFBRUMsZ0JBQUY7QUFBa0JGO0FBQWxCLENBQWhCLEVBQStDO0FBQzdDLFNBQ0U7QUFBSyxhQUFTLEVBQUcscUJBQW9CRixpREFBVSxDQUFDRSxTQUFELENBQVksRUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBVyxTQUFLLEVBQUVFLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFvQixNQUFFLEVBQUUsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQWtCLFdBQU8sRUFBRTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGLENBREYsQ0FERixFQWFFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssU0FBSyxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9FQUZGLENBREYsQ0FERixFQVNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFxQixPQUFHLEVBQUMsNEZBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVRGLENBREYsQ0FERixDQWJGLEVBOEJFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQURGLEVBRUU7QUFDRSxPQUFHLEVBQUVqVixFQUFBLEdBQXlCLG1DQURoQztBQUVFLE9BQUcsRUFBQyxpQkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLENBOUJGLENBREY7QUE0Q0Q7O0FBQ2NuQix3SEFBSyxDQUFDcVcsSUFBTixDQUFXSCxNQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFFQTtBQUVlLFNBQVNJLGdCQUFULEdBQTRCO0FBQ3pDLFNBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRW5WLEVBQUEsR0FBeUIsR0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRUEsRUFBQSxHQUF5Qix5QkFEaEM7QUFFRSxPQUFHLEVBQUMsWUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFIRixDQVRGLEVBY0UsTUFBQywwREFBRDtBQUFhLFFBQUksRUFBQyxTQUFsQjtBQUE0QixTQUFLLEVBQUMsUUFBbEM7QUFBMkMsYUFBUyxFQUFDLFlBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGO0FBa0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNvVixnQkFBVCxDQUEwQjtBQUFFQztBQUFGLENBQTFCLEVBQXVDO0FBQ3JDLFNBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxFQUFiO0FBQWlCLFdBQU8sRUFBQyxlQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLG9EQUFXLENBQUNDLEdBQVosQ0FBZ0IsQ0FBQ3hLLElBQUQsRUFBT3lLLEtBQVAsS0FDZixNQUFDLHdDQUFEO0FBQUssT0FBRyxFQUFFQTtBQUFWLEtBQXFCSCxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS3RLLElBQUksQ0FBQzBLLEtBQVYsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzFLLElBQUksQ0FBQzJLLEtBQUwsQ0FBV0gsR0FBWCxDQUFlLENBQUNJLElBQUQsRUFBT0gsS0FBUCxLQUNkO0FBQUksT0FBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFeFYsRUFBQSxHQUF5QjJWLElBQUksQ0FBQ3pZLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUt5WSxJQUFJLENBQUNGLEtBQVYsQ0FERixDQURGLEVBR1UsR0FIVixDQURELENBREgsQ0FGRixDQURGLENBREQsQ0FESCxDQURGLENBREY7QUFzQkQ7O0FBRWM1Vyx3SEFBSyxDQUFDcVcsSUFBTixDQUFXRSxnQkFBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBRUEsTUFBTVEsVUFBVSxnQkFBRy9XLDRDQUFLLENBQUNxVyxJQUFOLENBQVcsQ0FBQztBQUFFVyxRQUFGO0FBQVVoVixTQUFWO0FBQW1CaVY7QUFBbkIsQ0FBRCxLQUFzQztBQUNsRSxRQUFNQyxRQUFRLEdBQUk1TCxLQUFELElBQVc7QUFDMUJwTixXQUFPLENBQUNxVSxHQUFSLENBQVksVUFBWixFQUF3QmpILEtBQXhCO0FBQ0FBLFNBQUssSUFDSDJMLFdBQVcsQ0FBQztBQUNWRSxXQUFLLEVBQUU3TCxLQUFLLENBQUM4TDtBQURILEtBQUQsQ0FEYjtBQUlELEdBTkQ7O0FBUUEsUUFBTUMsY0FBYyxHQUFJQyxTQUFELElBQWU7QUFDcENwWixXQUFPLENBQUNxVSxHQUFSLENBQVksU0FBWixFQUF1QitFLFNBQXZCO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLG1FQUNFLE1BQUMseUNBQUQ7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFlBQVEsRUFBRUosUUFGWjtBQUdFLGtCQUFjLEVBQUVHLGNBSGxCO0FBSUUsYUFBUyxFQUFDLHVCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFdBQU8sRUFBRSxJQURYO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxTQUFLLEVBQUUsQ0FDTDtBQUNFRSxVQUFJLEVBQUUsT0FEUjtBQUVFdlYsYUFBTyxFQUFFO0FBRlgsS0FESyxFQUtMO0FBQ0V3VixjQUFRLEVBQUUsSUFEWjtBQUVFeFYsYUFBTyxFQUFFO0FBRlgsS0FMSyxDQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FjRSxNQUFDLDBDQUFEO0FBQU8sZUFBVyxFQUFDLGtCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FORixFQXNCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQU8sRUFBRSxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxNQUFiO0FBQW9CLFlBQVEsRUFBQyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBdEJGLENBREYsRUE2QkdnVixNQUFNLEtBQUssU0FBWCxJQUF3QjtBQUFLLFNBQUssRUFBRTtBQUFFOUcsV0FBSyxFQUFFO0FBQVQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTdCM0IsRUE4Qkc4RyxNQUFNLEtBQUssT0FBWCxJQUNDO0FBQ0UsU0FBSyxFQUFFO0FBQUU5RyxXQUFLLEVBQUU7QUFBVCxLQURUO0FBRUUsMkJBQXVCLEVBQUU7QUFBRXVILFlBQU0sRUFBRXpWO0FBQVYsS0FGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CSixFQW9DR2dWLE1BQU0sS0FBSyxTQUFYLElBQ0M7QUFDRSxTQUFLLEVBQUU7QUFBRTlHLFdBQUssRUFBRTtBQUFULEtBRFQ7QUFFRSwyQkFBdUIsRUFBRTtBQUFFdUgsWUFBTSxFQUFFelY7QUFBVixLQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNKLENBREY7QUE2Q0QsQ0ExRGtCLENBQW5CO0FBNERlLFNBQVMwVixtQkFBVCxDQUE2QjtBQUFFelU7QUFBRixDQUE3QixFQUFzQztBQUNuRCxTQUNFLE1BQUMsZ0VBQUQ7QUFDRSxPQUFHLEVBQUVBLEdBRFA7QUFFRSxVQUFNLEVBQUUsQ0FBQztBQUFFMFUsZUFBRjtBQUFhWCxZQUFiO0FBQXFCaFY7QUFBckIsS0FBRCxLQUNOLE1BQUMsVUFBRDtBQUNFLFlBQU0sRUFBRWdWLE1BRFY7QUFFRSxhQUFPLEVBQUVoVixPQUZYO0FBR0UsaUJBQVcsRUFBRzRWLFFBQUQsSUFBY0QsU0FBUyxDQUFDQyxRQUFELENBSHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFZRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUQ7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxTQUFULENBQW1CO0FBQUVDO0FBQUYsQ0FBbkIsRUFBNkM7QUFDMUQsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxzRUFBRDtBQUFpQix3QkFBb0IsRUFBRUEsb0JBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlDLFVBQVUsR0FBRyxDQUNmO0FBQUV0VixNQUFJLEVBQUUsWUFBUjtBQUFzQnBFLE1BQUksRUFBRTtBQUE1QixDQURlLEVBRWY7QUFBRW9FLE1BQUksRUFBRSxZQUFSO0FBQXNCcEUsTUFBSSxFQUFFO0FBQTVCLENBRmUsRUFHZjtBQUFFb0UsTUFBSSxFQUFFLG1CQUFSO0FBQTZCcEUsTUFBSSxFQUFFO0FBQW5DLENBSGUsRUFJZjtBQUFFb0UsTUFBSSxFQUFFLGVBQVI7QUFBeUJwRSxNQUFJLEVBQUU7QUFBL0IsQ0FKZSxFQUtmO0FBQUVvRSxNQUFJLEVBQUUsYUFBUjtBQUF1QnBFLE1BQUksRUFBRTtBQUE3QixDQUxlLEVBTWY7QUFBRW9FLE1BQUksRUFBRSxlQUFSO0FBQXlCcEUsTUFBSSxFQUFFO0FBQS9CLENBTmUsRUFPZjtBQUFFb0UsTUFBSSxFQUFFLFVBQVI7QUFBb0JwRSxNQUFJLEVBQUU7QUFBMUIsQ0FQZSxFQVFmO0FBQUVvRSxNQUFJLEVBQUUsYUFBUjtBQUF1QnBFLE1BQUksRUFBRTtBQUE3QixDQVJlLEVBU2Y7QUFBRW9FLE1BQUksRUFBRSxtQkFBUjtBQUE2QnBFLE1BQUksRUFBRTtBQUFuQyxDQVRlLEVBVWY7QUFBRW9FLE1BQUksRUFBRSxTQUFSO0FBQW1CcEUsTUFBSSxFQUFFO0FBQXpCLENBVmUsRUFXZjtBQUFFb0UsTUFBSSxFQUFFLGVBQVI7QUFBeUJwRSxNQUFJLEVBQUU7QUFBL0IsQ0FYZSxDQUFqQjs7QUFjQSxTQUFTMlosZ0JBQVQsQ0FBMEI7QUFBRUM7QUFBRixDQUExQixFQUFzQztBQUNwQyxRQUFNO0FBQUVDO0FBQUYsTUFBWUMsNkNBQWxCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUNFLFlBQVEsRUFBRSxLQURaO0FBRUUsb0JBQWdCLEVBQUVGLE1BQU0sR0FBRyxHQUFILEdBQVMsSUFGbkM7QUFHRSxjQUFVLEVBQUUsQ0FBQztBQUFFRztBQUFGLEtBQUQsS0FDVixNQUFDLDhEQUFEO0FBQWMsWUFBTSxFQUFFQSxRQUFRLEdBQUcsQ0FBQyxHQUFKLEdBQVUsQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKO0FBTUUsc0JBQWtCLEVBQUMsT0FOckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsS0FBRDtBQUNFLFVBQU0sRUFBQyxpQkFEVDtBQUVFLE9BQUcsRUFBQyxHQUZOO0FBR0UsU0FBSyxFQUFFO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLFVBQVUsQ0FBQ3JCLEdBQVgsQ0FBZSxDQUFDeEssSUFBRCxFQUFPeUssS0FBUCxLQUNkO0FBQUksT0FBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFeFYsRUFBQSxHQUF5QitLLElBQUksQ0FBQzdOLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk2TixJQUFJLENBQUN6SixJQUFULENBREYsQ0FERixDQURELENBREgsQ0FMRixDQVJGLENBREYsQ0FERjtBQTRCRDs7QUFFY3pDLHdIQUFLLENBQUNxVyxJQUFOLENBQVcyQixnQkFBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0ssYUFBVCxDQUF1QjtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBdkIsRUFBb0Q7QUFDbEQsUUFBTUMsU0FBUyxHQUFHQywrREFBVyxDQUFFdFQsS0FBRCxJQUFXQSxLQUFLLENBQUN1VCxXQUFsQixDQUE3QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNILFlBQUQsSUFDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFcFgsRUFBQSxHQUF5QixnQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQUZKLEVBU0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUEsRUFBQSxHQUF5QixZQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0csQ0FBQ21YLFNBQUQsS0FDRUUsU0FBUyxDQUFDNVAsSUFBVixHQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT3VMLG9FQUFjLENBQUN2Qiw2RUFBbUIsQ0FBQzRGLFNBQVMsQ0FBQzVQLElBQVgsQ0FBcEIsQ0FBckIsQ0FERCxHQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT3VMLG9FQUFjLENBQUMsQ0FBRCxDQUFyQixDQUpILENBSEgsQ0FERixDQVRGLENBREY7QUF3QkQ7O0FBRWNuVSx3SEFBSyxDQUFDcVcsSUFBTixDQUFXZ0MsYUFBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTTSxnQkFBVCxHQUE0QjtBQUMxQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0I5RSxzREFBUSxDQUFDLEtBQUQsQ0FBdEM7O0FBQ0EsUUFBTStFLFlBQVksR0FBRyxNQUFNO0FBQ3pCRCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FGRDs7QUFHQSxRQUFNRSxhQUFhLEdBQUcsTUFBTTtBQUMxQkYsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBRkQ7O0FBR0EsU0FDRSxtRUFDRTtBQUFHLFdBQU8sRUFBRUMsWUFBWjtBQUEwQixhQUFTLEVBQUMsb0JBQXBDO0FBQXlELFFBQUksRUFBQyxHQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsMkNBQUQ7QUFDRSxTQUFLLEVBQUMsT0FEUjtBQUVFLGFBQVMsRUFBQyxPQUZaO0FBR0UsWUFBUSxFQUFFLElBSFo7QUFJRSxXQUFPLEVBQUVDLGFBSlg7QUFLRSxXQUFPLEVBQUVILE9BTFg7QUFNRSxhQUFTLEVBQUMsTUFOWjtBQU9FLFNBQUssRUFBRSxHQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQUpGLENBREY7QUFrQkQ7O0FBRWM1WSx3SEFBSyxDQUFDcVcsSUFBTixDQUFXc0MsZ0JBQVgsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTSyxlQUFULEdBQTJCO0FBQ3pCLFFBQU07QUFBRUM7QUFBRixNQUFjQyx5Q0FBcEI7QUFDQSxRQUFNO0FBQUEsT0FBQ3RELE9BQUQ7QUFBQSxPQUFVdUQ7QUFBVixNQUF3QnBGLHNEQUFRLENBQUMsTUFBRCxDQUF0Qzs7QUFDQSxRQUFNcUYsV0FBVyxHQUFJNWEsQ0FBRCxJQUFPO0FBQ3pCTixXQUFPLENBQUNxVSxHQUFSLENBQVksUUFBWixFQUFzQi9ULENBQXRCO0FBQ0EsU0FBSzZhLFFBQUwsQ0FBYztBQUFFekQsYUFBTyxFQUFFcFgsQ0FBQyxDQUFDUztBQUFiLEtBQWQ7QUFDRCxHQUhEOztBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRDtBQUNFLGFBQVMsRUFBQyx1QkFEWjtBQUVFLFdBQU8sRUFBRW1hLFdBRlg7QUFHRSxnQkFBWSxFQUFFLENBQUN4RCxPQUFELENBSGhCO0FBSUUsUUFBSSxFQUFDLFFBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsT0FBRDtBQUFTLE9BQUcsRUFBQyxVQUFiO0FBQXdCLFNBQUssRUFBRTBELGlEQUFhLENBQUNDLElBQWQsQ0FBbUIzQyxLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cwQyxpREFBYSxDQUFDQyxJQUFkLENBQW1CQyxPQUFuQixDQUEyQjlDLEdBQTNCLENBQWdDeEssSUFBRCxJQUM5QixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBRUEsSUFBSSxDQUFDMEssS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUV6VixFQUFBLEdBQXlCK0ssSUFBSSxDQUFDN04sSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBSzZOLElBQUksQ0FBQzBLLEtBQVYsQ0FERixDQURGLENBREQsQ0FESCxDQU5GLEVBZUUsTUFBQyxPQUFEO0FBQVMsT0FBRyxFQUFDLE1BQWI7QUFBb0IsU0FBSyxFQUFFMEMsaURBQWEsQ0FBQ0csSUFBZCxDQUFtQjdDLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxPQUFHLEVBQUMsYUFBYjtBQUEyQixTQUFLLEVBQUMsYUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHMEMsaURBQWEsQ0FBQ0csSUFBZCxDQUFtQkQsT0FBbkIsQ0FBMkJFLE1BQTNCLENBQWtDaEQsR0FBbEMsQ0FBdUN4SyxJQUFELElBQ3JDLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFFQSxJQUFJLENBQUMwSyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRXpWLEVBQUEsR0FBeUIrSyxJQUFJLENBQUM3TixJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFLNk4sSUFBSSxDQUFDMEssS0FBVixDQURGLENBREYsQ0FERCxDQURILENBREYsRUFVRSxNQUFDLE9BQUQ7QUFBUyxPQUFHLEVBQUMsYUFBYjtBQUEyQixTQUFLLEVBQUMsYUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHMEMsaURBQWEsQ0FBQ0csSUFBZCxDQUFtQkQsT0FBbkIsQ0FBMkJHLE1BQTNCLENBQWtDakQsR0FBbEMsQ0FBdUN4SyxJQUFELElBQ3JDLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFFQSxJQUFJLENBQUMwSyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRXpWLEVBQUEsR0FBeUIrSyxJQUFJLENBQUM3TixJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFLNk4sSUFBSSxDQUFDMEssS0FBVixDQURGLENBREYsQ0FERCxDQURILENBVkYsRUFtQkUsTUFBQyxPQUFEO0FBQVMsT0FBRyxFQUFDLFlBQWI7QUFBMEIsU0FBSyxFQUFDLFlBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzBDLGlEQUFhLENBQUNHLElBQWQsQ0FBbUJELE9BQW5CLENBQTJCcFQsS0FBM0IsQ0FBaUNzUSxHQUFqQyxDQUFzQ3hLLElBQUQsSUFDcEMsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUVBLElBQUksQ0FBQzBLLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFelYsRUFBQSxHQUF5QitLLElBQUksQ0FBQzdOLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUs2TixJQUFJLENBQUMwSyxLQUFWLENBREYsQ0FERixDQURELENBREgsQ0FuQkYsQ0FmRixFQTRDRSxNQUFDLE9BQUQ7QUFBUyxPQUFHLEVBQUMsT0FBYjtBQUFxQixTQUFLLEVBQUUwQyxpREFBYSxDQUFDTSxLQUFkLENBQW9CaEQsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHMEMsaURBQWEsQ0FBQ00sS0FBZCxDQUFvQkosT0FBcEIsQ0FBNEI5QyxHQUE1QixDQUFpQ3hLLElBQUQsSUFDL0IsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUVBLElBQUksQ0FBQzBLLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFelYsRUFBQSxHQUF5QitLLElBQUksQ0FBQzdOLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUs2TixJQUFJLENBQUMwSyxLQUFWLENBREYsQ0FERixDQURELENBREgsQ0E1Q0YsRUFxREUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRXpWLEVBQUEsR0FBeUJtWSxpREFBYSxDQUFDTyxLQUFkLENBQW9CeGIsSUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLG9CQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHaWIsaURBQWEsQ0FBQ08sS0FBZCxDQUFvQmpELEtBTHZCLENBREYsQ0FERixDQXJERixDQURGLEVBa0VFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFelYsRUFBQSxHQUF5QixjQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGLEVBSUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FsRUYsQ0FERjtBQTJFRDs7QUFFY25CLHdIQUFLLENBQUNxVyxJQUFOLENBQVcyQyxlQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU2MsU0FBVCxHQUFxQjtBQUNuQixRQUFNO0FBQUViO0FBQUYsTUFBY0MseUNBQXBCO0FBQ0EsUUFBTTtBQUFBLE9BQUN0RCxPQUFEO0FBQUEsT0FBVXVEO0FBQVYsTUFBd0JwRixzREFBUSxDQUFDLE1BQUQsQ0FBdEM7O0FBQ0EsUUFBTXFGLFdBQVcsR0FBSTVhLENBQUQsSUFBTztBQUN6Qk4sV0FBTyxDQUFDcVUsR0FBUixDQUFZLFFBQVosRUFBc0IvVCxDQUF0QjtBQUNBMmEsY0FBVSxDQUFDM2EsQ0FBQyxDQUFDUyxHQUFILENBQVY7QUFDRCxHQUhEOztBQUlBLFNBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsNkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVxYSxpREFBYSxDQUFDQyxJQUFkLENBQW1CbGIsSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNpYixpREFBYSxDQUFDQyxJQUFkLENBQW1CM0MsS0FBMUQsQ0FERixDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUMsMEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHMEMsaURBQWEsQ0FBQ0MsSUFBZCxDQUFtQkMsT0FBbkIsQ0FBMkI5QyxHQUEzQixDQUErQixDQUFDeEssSUFBRCxFQUFPeUssS0FBUCxLQUM5QjtBQUFJLE9BQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRXhWLEVBQUEsR0FBeUIrSyxJQUFJLENBQUM3TixJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJNk4sSUFBSSxDQUFDMEssS0FBVCxDQURGLENBREYsQ0FERCxDQURILENBSkYsQ0FERixFQWVFO0FBQUksYUFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFelYsRUFBQSxHQUF5Qm1ZLGlEQUFhLENBQUNHLElBQWQsQ0FBbUJwYixJQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsd0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q2liLGlEQUFhLENBQUNHLElBQWQsQ0FBbUI3QyxLQUExRCxDQURGLENBREYsRUFJRTtBQUFJLGFBQVMsRUFBQyxnQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRzBDLGlEQUFhLENBQUNHLElBQWQsQ0FBbUJELE9BQW5CLENBQTJCRSxNQUEzQixDQUFrQ2hELEdBQWxDLENBQXNDLENBQUN4SyxJQUFELEVBQU95SyxLQUFQLEtBQ3JDO0FBQUksT0FBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFeFYsRUFBQSxHQUF5QitLLElBQUksQ0FBQzdOLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk2TixJQUFJLENBQUMwSyxLQUFULENBREYsQ0FERixDQURELENBRkgsQ0FERixFQVdFO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUcwQyxpREFBYSxDQUFDRyxJQUFkLENBQW1CRCxPQUFuQixDQUEyQkcsTUFBM0IsQ0FBa0NqRCxHQUFsQyxDQUFzQyxDQUFDeEssSUFBRCxFQUFPeUssS0FBUCxLQUNyQztBQUFJLE9BQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRXhWLEVBQUEsR0FBeUIrSyxJQUFJLENBQUM3TixJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJNk4sSUFBSSxDQUFDMEssS0FBVCxDQURGLENBREYsQ0FERCxDQUZILENBWEYsRUFxQkU7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRzBDLGlEQUFhLENBQUNHLElBQWQsQ0FBbUJELE9BQW5CLENBQTJCcFQsS0FBM0IsQ0FBaUNzUSxHQUFqQyxDQUFxQyxDQUFDeEssSUFBRCxFQUFPeUssS0FBUCxLQUNwQztBQUFJLE9BQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRXhWLEVBQUEsR0FBeUIrSyxJQUFJLENBQUM3TixJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJNk4sSUFBSSxDQUFDMEssS0FBVCxDQURGLENBREYsQ0FERCxDQUZILENBckJGLENBSkYsQ0FmRixFQW9ERTtBQUFJLGFBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRXpWLEVBQUEsR0FBeUJtWSxpREFBYSxDQUFDUyxJQUFkLENBQW1CMWIsSUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNpYixpREFBYSxDQUFDUyxJQUFkLENBQW1CbkQsS0FBMUQsQ0FERixDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUMsMEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHMEMsaURBQWEsQ0FBQ1MsSUFBZCxDQUFtQlAsT0FBbkIsQ0FBMkI5QyxHQUEzQixDQUErQixDQUFDeEssSUFBRCxFQUFPeUssS0FBUCxLQUM5QjtBQUFJLE9BQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRXhWLEVBQUEsR0FBeUIrSyxJQUFJLENBQUM3TixJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJNk4sSUFBSSxDQUFDMEssS0FBVCxDQURGLENBREYsQ0FERCxDQURILENBSkYsQ0FwREYsRUFrRUU7QUFBSSxhQUFTLEVBQUMsNkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUV6VixFQUFBLEdBQXlCbVksaURBQWEsQ0FBQ00sS0FBZCxDQUFvQnZiLElBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyx3QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDaWIsaURBQWEsQ0FBQ00sS0FBZCxDQUFvQmhELEtBQTNELENBREYsQ0FERixFQUlFO0FBQUksYUFBUyxFQUFDLDBCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzBDLGlEQUFhLENBQUNNLEtBQWQsQ0FBb0JKLE9BQXBCLENBQTRCOUMsR0FBNUIsQ0FBZ0MsQ0FBQ3hLLElBQUQsRUFBT3lLLEtBQVAsS0FDL0I7QUFBSSxPQUFHLEVBQUVBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUV4VixFQUFBLEdBQXlCK0ssSUFBSSxDQUFDN04sSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTZOLElBQUksQ0FBQzBLLEtBQVQsQ0FERixDQURGLENBREQsQ0FESCxDQUpGLENBbEVGLEVBZ0ZFO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFelYsRUFBQSxHQUF5Qm1ZLGlEQUFhLENBQUNPLEtBQWQsQ0FBb0J4YixJQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsd0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q2liLGlEQUFhLENBQUNPLEtBQWQsQ0FBb0JqRCxLQUEzRCxDQURGLENBREYsQ0FoRkYsQ0FERjtBQXdGRDs7QUFFYzVXLHdIQUFLLENBQUNxVyxJQUFOLENBQVd5RCxTQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRSxVQUFULENBQW9CO0FBQUVDLGFBQVcsR0FBRyxRQUFoQjtBQUEwQkM7QUFBMUIsQ0FBcEIsRUFBNEQ7QUFDMUQsUUFBTTtBQUFFQztBQUFGLE1BQWFDLDJDQUFuQjtBQUNBLFFBQU1qYyxNQUFNLEdBQUdrYyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQzFHLHNEQUFRLENBQUMsRUFBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDMkcsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3QzVHLHNEQUFRLENBQUMsRUFBRCxDQUF0RDtBQUNBLFFBQU02RyxZQUFZLEdBQUdqSCxrRUFBVyxDQUFDNkcsYUFBRCxFQUFnQixHQUFoQixDQUFoQztBQUNBLFFBQU1LLFNBQVMsR0FBR3BDLCtEQUFXLENBQUV0VCxLQUFELElBQVdBLEtBQUssQ0FBQzJWLFdBQWxCLENBQTdCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQXVCRixTQUE3Qjs7QUFDQSxRQUFNRyxRQUFRLEdBQUlDLEdBQUQsSUFBUztBQUN4QlIsb0JBQWdCLENBQUNRLEdBQUQsQ0FBaEI7QUFDRCxHQUZEOztBQUdBLFFBQU1DLGNBQWMsR0FBRyxDQUFDNVAsS0FBRCxFQUFRNlAsTUFBUixLQUFtQjtBQUN4Q1Ysb0JBQWdCLENBQUNuUCxLQUFELENBQWhCO0FBQ0QsR0FGRDs7QUFHQSxRQUFNOFAsUUFBUSxHQUFJSCxHQUFELElBQVM7QUFDeEIsUUFBSSxDQUFDVCxhQUFELElBQWtCQSxhQUFhLEtBQUssRUFBeEMsRUFBNEM7QUFDMUM7QUFDRCxLQUZELE1BRU87QUFDTHJjLFlBQU0sQ0FBQzBILElBQVAsQ0FBWTtBQUNWM0YsZ0JBQVEsRUFBRWlCLEVBQUEsR0FBeUIscUJBRHpCO0FBRVZrRCxhQUFLLEVBQUU7QUFBRTRMLFdBQUMsRUFBRXVLO0FBQUw7QUFGRyxPQUFaO0FBSUQ7QUFDRixHQVREOztBQVVBLFFBQU1hLGdCQUFnQixHQUFJSixHQUFELElBQVM7QUFDaENOLHNCQUFrQixDQUFDTSxHQUFELENBQWxCO0FBQ0QsR0FGRDs7QUFHQSxRQUFNN1YsT0FBTyxHQUNYMlYsZ0JBQWdCLENBQUNuUyxJQUFqQixDQUFzQm1KLE1BQXRCLEdBQStCLENBQS9CLElBQ0FnSixnQkFBZ0IsQ0FBQ25TLElBQWpCLENBQXNCOE4sR0FBdEIsQ0FBMkJ4SyxJQUFELEtBQVc7QUFBRVosU0FBSyxFQUFFWSxJQUFJLENBQUN6SjtBQUFkLEdBQVgsQ0FBMUIsQ0FGRjtBQUlBdVIseURBQVMsQ0FBQyxNQUFNO0FBQ2RzRyxZQUFRLENBQ05nQiw4RkFBMkIsQ0FBQztBQUMxQjFLLFdBQUssRUFBRTRKLGFBRG1CO0FBRTFCNUssV0FBSyxFQUFFLEVBRm1CO0FBRzFCQyxjQUFRLEVBQUU2SztBQUhnQixLQUFELENBRHJCLENBQVI7QUFPRCxHQVJRLEVBUU4sQ0FBQ0UsWUFBRCxFQUFlRixlQUFmLENBUk0sQ0FBVDtBQVNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNSLFVBQUQsSUFDQztBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUNFLGdCQUFZLEVBQUVRLGVBRGhCO0FBRUUsY0FBVSxFQUFFO0FBQUcsZUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGZDtBQUdFLFlBQVEsRUFBRSxLQUhaO0FBSUUsWUFBUSxFQUFFVyxnQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxNQUFEO0FBQVEsU0FBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixFQU9HdEQsa0RBQVUsQ0FBQ3JCLEdBQVgsQ0FBZSxDQUFDeEssSUFBRCxFQUFPeUssS0FBUCxLQUNkLE1BQUMsTUFBRDtBQUFRLE9BQUcsRUFBRUEsS0FBYjtBQUFvQixTQUFLLEVBQUV6SyxJQUFJLENBQUNaLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1ksSUFBSSxDQUFDekosSUFEUixDQURELENBUEgsQ0FERixDQUZKLEVBbUJFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQ0UsWUFBUSxNQURWO0FBRUUsU0FBSyxFQUFFK1gsYUFGVDtBQUdFLFlBQVEsRUFBRVUsY0FIWjtBQUlFLFlBQVEsRUFBRUYsUUFKWjtBQUtFLFdBQU8sRUFBRTVWLE9BTFg7QUFNRSxnQkFBWSxFQUFFLENBQUNtVyxVQUFELEVBQWFKLE1BQWIsS0FDWkEsTUFBTSxDQUFDN1AsS0FBUCxDQUFha1EsV0FBYixHQUEyQkMsT0FBM0IsQ0FBbUNGLFVBQVUsQ0FBQ0MsV0FBWCxFQUFuQyxNQUNBLENBQUMsQ0FSTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQywwQ0FBRCxDQUFPLE1BQVA7QUFDRSxlQUFXLEVBQUMsa0JBRGQ7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLGVBQVcsRUFBRXZCLFdBSGY7QUFJRSxZQUFRLEVBQUUsS0FKWjtBQUtFLFdBQU8sRUFBRWMsZ0JBQWdCLENBQUNXLE9BTDVCO0FBTUUsWUFBUSxFQUFFTixRQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGLENBbkJGLENBREYsQ0FERjtBQThDRDs7QUFFY3BiLHdIQUFLLENBQUNxVyxJQUFOLENBQVcyRCxVQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMyQixlQUFULENBQXlCO0FBQUU3RDtBQUFGLENBQXpCLEVBQW1EO0FBQ2pELFNBQ0U7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBRTFCLFVBQUksRUFBRSxFQUFSO0FBQVlwRyxXQUFLLEVBQUU7QUFBbkIsS0FBVDtBQUFpQyxNQUFFLEVBQUU7QUFBRW9HLFVBQUksRUFBRSxDQUFSO0FBQVdwRyxXQUFLLEVBQUU7QUFBbEIsS0FBckM7QUFBNEQsTUFBRSxFQUFFLENBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQWtCLFVBQU0sRUFBRThILG9CQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsd0NBQUQ7QUFDRSxNQUFFLEVBQUU7QUFBRTFCLFVBQUksRUFBRSxFQUFSO0FBQVlwRyxXQUFLLEVBQUU7QUFBbkIsS0FETjtBQUVFLE1BQUUsRUFBRTtBQUFFb0csVUFBSSxFQUFFLEVBQVI7QUFBWXBHLFdBQUssRUFBRTtBQUFuQixLQUZOO0FBR0UsTUFBRSxFQUFFLEVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBSkYsQ0FERixDQURGLENBREYsQ0FERjtBQW9CRDs7QUFDY2hRLHdIQUFLLENBQUNxVyxJQUFOLENBQVdzRixlQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLE9BQVQsR0FBbUI7QUFDaEMsU0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFemEsRUFBQSxHQUF5QixHQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUVBLEVBQUEsR0FBeUIseUJBRGhDO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FGRixFQVVFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERixDQURGLENBREY7QUFtQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNMGEsUUFBUSxHQUFHLENBQ2Y7QUFBRXBaLE1BQUksRUFBRSxTQUFSO0FBQW1CcVosT0FBSyxFQUFFO0FBQTFCLENBRGUsRUFFZjtBQUFFclosTUFBSSxFQUFFLFVBQVI7QUFBb0JxWixPQUFLLEVBQUU7QUFBM0IsQ0FGZSxFQUdmO0FBQUVyWixNQUFJLEVBQUUsWUFBUjtBQUFzQnFaLE9BQUssRUFBRTtBQUE3QixDQUhlLENBQWpCO0FBTWUsU0FBU0MsU0FBVCxDQUFtQjtBQUFFNUY7QUFBRixDQUFuQixFQUF1QztBQUNwRCxRQUFNO0FBQUVnRTtBQUFGLE1BQWFDLDJDQUFuQjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFXLFNBQUssRUFBRWpFLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLHFCQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixtQkFMRixDQURGLENBREYsRUFhRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFRLGdCQUFZLEVBQUMsU0FBckI7QUFBK0IsU0FBSyxFQUFFLEdBQXRDO0FBQTJDLFlBQVEsRUFBRSxLQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cwRixRQUFRLENBQUNuRixHQUFULENBQWEsQ0FBQ3hLLElBQUQsRUFBT3lLLEtBQVAsS0FDWixNQUFDLE1BQUQ7QUFBUSxPQUFHLEVBQUVBLEtBQWI7QUFBb0IsU0FBSyxFQUFFekssSUFBSSxDQUFDekosSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0x1WixZQUFNLEVBQUUsS0FBSyxFQUFMLEdBQVUsSUFEYjtBQUVMQyxXQUFLLEVBQUUsS0FBSyxFQUFMLEdBQVUsSUFGWjtBQUdMQyxlQUFTLEVBQUUsU0FITjtBQUlMQyxlQUFTLEVBQUUsQ0FBQyxDQUFELEdBQUssRUFBTCxHQUFVLElBSmhCO0FBS0xDLGlCQUFXLEVBQUUsSUFBSSxFQUFKLEdBQVM7QUFMakIsS0FEVDtBQVFFLE9BQUcsRUFBRWpiLEVBQUEsR0FBeUIrSyxJQUFJLENBQUM0UCxLQVJyQztBQVNFLE9BQUcsRUFBQyxFQVROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVlHNVAsSUFBSSxDQUFDekosSUFaUixDQURELENBREgsQ0FERixDQUpGLEVBd0JFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFdEIsRUFBQSxHQUF5QixhQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFVBREYsQ0FERixDQXhCRixDQWJGLENBREYsQ0FERixDQURGO0FBcURELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNa2IsY0FBYyxHQUFHbkgsd0VBQWdCLENBQUMyQyx5REFBRCxDQUF2Qzs7QUFFQSxTQUFTeUUsU0FBVCxDQUFtQjtBQUFFMUYsT0FBRjtBQUFTdFcsVUFBVDtBQUFtQmljLGFBQW5CO0FBQWdDQztBQUFoQyxDQUFuQixFQUFrRTtBQUNoRSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUTVGLEtBQVIsQ0FERixDQURGLEVBSUUsTUFBQyxjQUFEO0FBQWdCLGFBQVMsRUFBRTJGLFdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtHamMsUUFMSCxFQU1FLE1BQUMsc0RBQUQ7QUFBUSxhQUFTLEVBQUVrYyxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGO0FBV0Q7O0FBRWN4Yyx3SEFBSyxDQUFDcVcsSUFBTixDQUFXaUcsU0FBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVlLFNBQVNHLFNBQVQsQ0FBbUI7QUFBRUMsT0FBRjtBQUFTcGM7QUFBVCxDQUFuQixFQUF3QztBQUNyRCxTQUNFO0FBQUssYUFBUyxFQUFFb2MsS0FBSyxHQUFHLGlCQUFILEdBQXVCLFdBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMERwYyxRQUExRCxDQURGO0FBR0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUNBO0FBRWUsU0FBU3FjLGVBQVQsQ0FBeUI7QUFDdEMvVCxNQURzQztBQUV0Q2dVLGNBQVksR0FBRyxxQ0FGdUI7QUFHdENDLGtCQUFnQixHQUFHLDZCQUhtQjtBQUl0Q0M7QUFKc0MsQ0FBekIsRUFLWjtBQUNELFNBQU9sVSxJQUFJLENBQUM4UyxPQUFMLEdBQ0wsTUFBQyw2Q0FBRDtBQUFVLFVBQU0sTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURLLEdBRUg5UyxJQUFJLENBQUM1QixLQUFMLEdBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLNFYsWUFBTCxDQURFLEdBRUFoVSxJQUFJLENBQUNBLElBQUwsQ0FBVW1KLE1BQVYsR0FBbUIsQ0FBbkIsR0FDRitLLFVBQVUsSUFBSUEsVUFBVSxDQUFDbFUsSUFBSSxDQUFDQSxJQUFOLENBRHRCLEdBR0YsTUFBQywwQ0FBRDtBQUNFLFNBQUssRUFBRW1VLDBDQUFLLENBQUNDLHNCQURmO0FBRUUsZUFBVyxFQUFFSCxnQkFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEY7QUFZRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJEO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNJLGdCQUFULENBQTBCO0FBQ3hCQyxLQUR3QjtBQUV4QkMsS0FGd0I7QUFHeEJDLGNBQVksR0FBRyxDQUhTO0FBSXhCbkgsV0FKd0I7QUFLeEIrRSxVQUx3QjtBQU14QnFDLFlBTndCO0FBT3hCQztBQVB3QixDQUExQixFQVFHO0FBQ0QsUUFBTUMsV0FBVyxHQUFHbEksb0RBQU0sQ0FBQyxJQUFELENBQTFCO0FBQ0EsUUFBTTtBQUFBLE9BQUMvSixLQUFEO0FBQUEsT0FBUWtTO0FBQVIsTUFBb0J6SixzREFBUSxDQUFDcUosWUFBRCxDQUFsQztBQUNBLFFBQU14QyxZQUFZLEdBQUdqSCxrRUFBVyxDQUFDckksS0FBRCxFQUFRLEdBQVIsQ0FBaEM7QUFDQTBJLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUl1SixXQUFXLENBQUMzSCxPQUFoQixFQUF5QjtBQUN2QjJILGlCQUFXLENBQUMzSCxPQUFaLEdBQXNCLEtBQXRCO0FBQ0E7QUFDRDs7QUFDRG9GLFlBQVEsSUFBSUEsUUFBUSxDQUFDMVAsS0FBRCxDQUFwQjtBQUNELEdBTlEsRUFNTixDQUFDc1AsWUFBRCxDQU5NLENBQVQ7QUFPQTVHLHlEQUFTLENBQUMsTUFBTTtBQUNkd0osWUFBUSxDQUFDSixZQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsWUFBRCxDQUZNLENBQVQ7QUFHQSxRQUFNSyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsTUFBTTtBQUN0QyxRQUFJUixHQUFHLElBQUk1UixLQUFLLElBQUk0UixHQUFwQixFQUF5QjtBQUN2QjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUk1UixLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNkO0FBQ0Q7O0FBQ0QrUixnQkFBVSxJQUFJQSxVQUFVLEVBQXhCO0FBQ0FHLGNBQVEsQ0FBQ2xTLEtBQUssR0FBRyxDQUFULENBQVI7QUFDRDtBQUNGLEdBVmdDLEVBVTlCLENBQUNBLEtBQUQsQ0FWOEIsQ0FBakM7QUFXQSxRQUFNcVMsYUFBYSxHQUFHRCx5REFBVyxDQUFDLE1BQU07QUFDdEMsUUFBSXBTLEtBQUssSUFBSTZSLEdBQWIsRUFBa0I7QUFDaEI7QUFDRDs7QUFDREcsY0FBVSxJQUFJQSxVQUFVLEVBQXhCO0FBQ0FFLFlBQVEsQ0FBQ2xTLEtBQUssR0FBRyxDQUFULENBQVI7QUFDRCxHQU5nQyxFQU05QixDQUFDQSxLQUFELENBTjhCLENBQWpDO0FBT0EsU0FDRTtBQUFLLGFBQVMsRUFBRyxxQkFBb0J5SyxpREFBVSxDQUFDRSxTQUFELENBQVksRUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkMzSyxLQUEzQyxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFlBQVEsRUFBRUEsS0FBSyxJQUFJNFIsR0FBVCxJQUFnQjVSLEtBQUssSUFBSSxDQUZyQztBQUdFLFdBQU8sRUFBRW1TLGFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLEVBUUUsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxNQUFiO0FBQW9CLFlBQVEsRUFBRW5TLEtBQUssSUFBSTZSLEdBQXZDO0FBQTRDLFdBQU8sRUFBRVEsYUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVJGLENBRkYsQ0FERjtBQWlCRDs7QUFFYzNkLHdIQUFLLENBQUNxVyxJQUFOLENBQVc0RyxnQkFBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBRWUsU0FBU1csV0FBVCxDQUFxQjtBQUFFM0gsV0FBRjtBQUFhc0IsTUFBSSxHQUFHLE1BQXBCO0FBQTRCc0c7QUFBNUIsQ0FBckIsRUFBMEQ7QUFDdkUsU0FDRTtBQUFJLGFBQVMsRUFBRyxnQkFBZTlILGlEQUFVLENBQUNFLFNBQUQsQ0FBWSxFQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUVzQixJQUFkO0FBQW9CLFNBQUssRUFBRXNHLEtBQTNCO0FBQWtDLFFBQUksRUFBQyxHQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFFdEcsSUFBZDtBQUFvQixTQUFLLEVBQUVzRyxLQUEzQjtBQUFrQyxRQUFJLEVBQUMsR0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBTkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBRXRHLElBQWQ7QUFBb0IsU0FBSyxFQUFFc0csS0FBM0I7QUFBa0MsUUFBSSxFQUFDLEdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVhGLEVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFFdEcsSUFBZDtBQUFvQixTQUFLLEVBQUVzRyxLQUEzQjtBQUFrQyxRQUFJLEVBQUMsR0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG9CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBaEJGLENBREY7QUF3QkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0I7QUFBRXRKO0FBQUYsQ0FBcEIsRUFBK0I7QUFDN0IsUUFBTXVKLFFBQVEsR0FBRztBQUNmQyxVQUFNLEVBQUUsS0FETztBQUVmQyxZQUFRLEVBQUUsSUFGSztBQUdmQyxTQUFLLEVBQUUsR0FIUTtBQUlmQyxnQkFBWSxFQUFFLENBSkM7QUFLZkMsa0JBQWMsRUFBRSxDQUxEO0FBTWZDLGNBQVUsRUFBRSxDQUNWO0FBQ0VDLGdCQUFVLEVBQUUsR0FEZDtBQUVFUCxjQUFRLEVBQUU7QUFDUkksb0JBQVksRUFBRTtBQUROO0FBRlosS0FEVSxFQU9WO0FBQ0VHLGdCQUFVLEVBQUUsR0FEZDtBQUVFUCxjQUFRLEVBQUU7QUFDUkksb0JBQVksRUFBRTtBQUROO0FBRlosS0FQVTtBQU5HLEdBQWpCO0FBcUJBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUE2QixTQUFLLEVBQUUzSixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQsZUFBWXVKLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNHeFMsS0FBSyxDQUFDZ1QsSUFBTixDQUFXaFQsS0FBSyxDQUFDLENBQUQsQ0FBaEIsRUFBcUIsQ0FBQy9NLENBQUQsRUFBSW1QLENBQUosS0FDcEI7QUFBSyxPQUFHLEVBQUVBLENBQVY7QUFBYSxhQUFTLEVBQUMsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUNEeE0sRUFBQSxHQUNDLG9DQUFtQ3dNLENBQUMsR0FBRyxDQUFFLE1BSDlDO0FBS0UsT0FBRyxFQUFDLGNBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERCxDQURILENBREYsQ0FERixDQURGO0FBcUJEOztBQUVjM04sd0hBQUssQ0FBQ3FXLElBQU4sQ0FBV3lILFVBQVgsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBOztBQUVBLFNBQVNVLGFBQVQsQ0FBdUI7QUFBRTVJO0FBQUYsQ0FBdkIsRUFBb0M7QUFDbEMsU0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBRyxjQUFhRyxpREFBVSxDQUFDO0FBQUVrQyxZQUFNLEVBQUVyQyxPQUFPLEtBQUs7QUFBdEIsS0FBRCxDQUE0QixFQURqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixDQUhGLENBREYsQ0FERixFQVdFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUcsY0FBYUcsaURBQVUsQ0FBQztBQUFFa0MsWUFBTSxFQUFFckMsT0FBTyxLQUFLO0FBQXRCLEtBQUQsQ0FBNEIsRUFEakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsQ0FIRixDQURGLENBWEYsRUFxQkUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBRyxjQUFhRyxpREFBVSxDQUFDO0FBQUVrQyxZQUFNLEVBQUVyQyxPQUFPLEtBQUs7QUFBdEIsS0FBRCxDQUE0QixFQURqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixDQUhGLENBREYsQ0FyQkYsQ0FERixDQURGO0FBb0NEOztBQUVjNVYsd0hBQUssQ0FBQ3FXLElBQU4sQ0FBV21JLGFBQVgsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLFFBQU1uRSxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNtRSxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QjVLLHNEQUFRLENBQUM7QUFDM0M2RSxXQUFPLEVBQUUsS0FEa0M7QUFFM0M1VyxXQUFPLEVBQUUsa0JBRmtDO0FBRzNDOE0sVUFBTSxFQUFFO0FBSG1DLEdBQUQsQ0FBNUM7QUFLQSxRQUFNMEosU0FBUyxHQUFHQywrREFBVyxDQUFFdFQsS0FBRCxJQUFXQSxLQUFLLENBQUN1VCxXQUFsQixDQUE3QjtBQUVBMUUseURBQVMsQ0FBQyxNQUFNO0FBQ2RzRyxZQUFRLENBQUNzRSxtRkFBZ0IsRUFBakIsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBR0EsUUFBTUMsU0FBUyxHQUFHLENBQUM3YyxPQUFELEVBQVU4TSxNQUFWLEtBQXFCO0FBQ3JDNlAsaUJBQWEsaUNBQU1ELFVBQU47QUFBa0I5RixhQUFPLEVBQUUsSUFBM0I7QUFBaUM1VyxhQUFPLEVBQUVBLE9BQTFDO0FBQW1EOE07QUFBbkQsT0FBYjtBQUNELEdBRkQ7O0FBR0EsUUFBTWdRLGdCQUFnQixHQUFHLENBQUN0TixPQUFELEVBQVVDLFFBQVYsS0FBdUI7QUFDOUNhLDRGQUEyQixDQUFDO0FBQzFCZCxhQUQwQjtBQUUxQkMsY0FBUSxFQUFFQSxRQUZnQjtBQUcxQkMsZUFBUyxFQUFFLE1BQU00SSxRQUFRLENBQUNzRSxtRkFBZ0IsRUFBakI7QUFIQyxLQUFELENBQTNCO0FBS0QsR0FORDs7QUFPQSxRQUFNRyxRQUFRLEdBQUl2Z0IsQ0FBRCxJQUFPO0FBQ3RCNlQsd0ZBQXVCLENBQUM7QUFDdEJ2RCxZQUFNLEVBQUU0UCxVQUFVLENBQUM1UCxNQURHO0FBRXRCNEMsZUFBUyxFQUFFLE1BQU07QUFDZmlOLHFCQUFhLGlDQUFNRCxVQUFOO0FBQWtCOUYsaUJBQU8sRUFBRTtBQUEzQixXQUFiO0FBQ0E1VyxvREFBTyxDQUFDbEQsT0FBUixDQUFnQiwyQkFBaEI7QUFDQXdiLGdCQUFRLENBQUNzRSxtRkFBZ0IsRUFBakIsQ0FBUjtBQUNELE9BTnFCO0FBT3RCak4sYUFBTyxFQUFHcU4sR0FBRCxJQUFTO0FBQ2hCTCxxQkFBYSxpQ0FBTUQsVUFBTjtBQUFrQjlGLGlCQUFPLEVBQUU7QUFBM0IsV0FBYjtBQUNBNVcsb0RBQU8sQ0FBQ2dGLEtBQVIsQ0FBY2dZLEdBQWQ7QUFDRDtBQVZxQixLQUFELENBQXZCO0FBWUQsR0FiRDs7QUFjQSxRQUFNQyxZQUFZLEdBQUl6Z0IsQ0FBRCxJQUFPO0FBQzFCbWdCLGlCQUFhLGlDQUFNRCxVQUFOO0FBQWtCOUYsYUFBTyxFQUFFO0FBQTNCLE9BQWI7QUFDRCxHQUZEOztBQUdBLFFBQU1zRyxjQUFjLEdBQUlDLE1BQUQsSUFBWTtBQUNqQ2poQixXQUFPLENBQUNxVSxHQUFSLENBQVksVUFBWixFQUF3QjRNLE1BQXhCO0FBQ0QsR0FGRDs7QUFHQSxRQUFNQyxvQkFBb0IsR0FBSTlILFNBQUQsSUFBZTtBQUMxQ3BaLFdBQU8sQ0FBQ3FVLEdBQVIsQ0FBWSxTQUFaLEVBQXVCK0UsU0FBdkI7QUFDRCxHQUZEOztBQUdBLFNBQ0UsTUFBQyxvRUFBRDtBQUFXLFNBQUssRUFBQyxlQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFZLGFBQVMsRUFBQyxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRCxDQUFZLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFNBREYsRUFLRSxNQUFDLCtDQUFELENBQVksSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsRUFNRSxNQUFDLCtDQUFELENBQVksSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsQ0FERixFQVNFLE1BQUMsdUVBQUQ7QUFBZSxXQUFPLEVBQUUsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUUsTUFBQywwRUFBRDtBQUNFLG9CQUFnQixFQUFDLG9CQURuQjtBQUVFLFFBQUksRUFBRWtCLFNBRlI7QUFHRSxjQUFVLEVBQUc1UCxJQUFELElBQ1Y7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFdBQUssRUFBRTtBQUFFcVQsYUFBSyxFQUFFLE1BQU0sRUFBTixHQUFXO0FBQXBCLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBSyxXQUFLLEVBQUU7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFHRTtBQUFLLFdBQUssRUFBRTtBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixFQUlFO0FBQUssV0FBSyxFQUFFO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLEVBS0U7QUFBSyxXQUFLLEVBQUU7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsRUFNRTtBQUFLLFdBQUssRUFBRTtBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORixDQURGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDRDQUFEO0FBQVMsV0FBSyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMkNBQUQ7QUFDRSxhQUFPLEVBQUUsTUFDUDRDLFNBQVMsQ0FDUCwrQ0FETyxDQUZiO0FBTUUsVUFBSSxFQUFFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixDQU5GLENBREYsQ0FURixFQThCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dqVyxJQUFJLENBQUM4TixHQUFMLENBQVMsQ0FBQ3hLLElBQUQsRUFBT3lLLEtBQVAsS0FDUjtBQUFJLFNBQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFFeFYsRUFBQSxHQUF5QitLLElBQUksQ0FBQ21ULFVBRHJDO0FBRUUsU0FBRyxFQUFDLGVBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsQ0FERixFQVNFO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE0Qm5ULElBQUksQ0FBQ3pKLElBQWpDLENBVEYsRUFVRTtBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzBSLG9FQUFjLENBQUNqSSxJQUFJLENBQUM4RyxLQUFOLENBRGpCLENBVkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyRUFBRDtBQUNFLFNBQUcsRUFBRTlHLElBQUksQ0FBQ3VGLFFBRFo7QUFFRSxjQUFRLEVBQUd3SixHQUFELElBQVM2RCxnQkFBZ0IsQ0FBQzVTLElBQUQsRUFBTytPLEdBQVAsQ0FGckM7QUFHRSxrQkFBWSxFQUFFL08sSUFBSSxDQUFDZ0csWUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBYkYsRUFvQkU7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dpQyxvRUFBYyxDQUFDakksSUFBSSxDQUFDOEcsS0FBTCxHQUFhOUcsSUFBSSxDQUFDZ0csWUFBbkIsQ0FEakIsQ0FwQkYsRUF1QkU7QUFBSSxlQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0Q0FBRDtBQUFTLFdBQUssRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyQ0FBRDtBQUNFLGFBQU8sRUFBRSxNQUNQMk0sU0FBUyxDQUNQLCtDQURPLEVBRVAzUyxJQUFJLENBQUMyRixFQUZFLENBRmI7QUFPRSxVQUFJLEVBQUU7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBdkJGLENBREQsQ0FESCxDQTlCRixDQURGLENBREYsRUEyRUU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseUNBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLGNBQVEsRUFBRXFOLGNBRlo7QUFHRSxvQkFBYyxFQUFFRSxvQkFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxXQUFLLEVBQUUsQ0FDTDtBQUNFNUgsZ0JBQVEsRUFBRSxJQURaO0FBRUV4VixlQUFPLEVBQUU7QUFGWCxPQURLLENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVNFLE1BQUMsMENBQUQ7QUFBTyxpQkFBVyxFQUFDLGFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFURixDQUxGLEVBZ0JFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJDQUFEO0FBQVEsVUFBSSxFQUFDLFNBQWI7QUFBdUIsY0FBUSxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FoQkYsQ0FERixDQURGLEVBeUJFLE1BQUMsMkNBQUQ7QUFBUSxlQUFTLEVBQUMscUJBQWxCO0FBQXdDLFVBQUksRUFBQyxTQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRWIsRUFBQSxHQUF5QixxQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FERixDQXpCRixDQTNFRixFQTBHRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2dULG9FQUFjLENBQUN2Qiw2RUFBbUIsQ0FBQzRGLFNBQVMsQ0FBQzVQLElBQVgsQ0FBcEIsQ0FEakIsQ0FGRixDQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkYsQ0FGRixDQVBGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR3VMLG9FQUFjLENBQUN2Qiw2RUFBbUIsQ0FBQzRGLFNBQVMsQ0FBQzVQLElBQVgsQ0FBcEIsQ0FEakIsQ0FGRixDQWRGLENBREYsQ0FGRixFQXlCRTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyQ0FBRDtBQUFRLFVBQUksRUFBQyxTQUFiO0FBQXVCLFdBQUssRUFBQyxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRXpILEVBQUEsR0FBeUIsZ0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLENBREYsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FORixFQU9FLE1BQUMsMkNBQUQ7QUFBUSxVQUFJLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUEsRUFBQSxHQUF5QixHQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixDQURGLENBUEYsQ0F6QkYsQ0ExR0YsQ0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFrS0UsTUFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEtGLENBREYsRUFzS0UsTUFBQywwQ0FBRDtBQUNFLFdBQU8sRUFBRXVkLFVBQVUsQ0FBQzlGLE9BRHRCO0FBRUUsUUFBSSxFQUFFbUcsUUFGUjtBQUdFLFlBQVEsRUFBRUUsWUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJUCxVQUFVLENBQUMxYyxPQUFmLENBTEYsQ0F0S0YsQ0FERjtBQWdMRDs7QUFFY2hDLHdIQUFLLENBQUNxVyxJQUFOLENBQVdvSSxJQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDclBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNaEYsSUFBSSxHQUFHO0FBQ2xCNkYsZ0JBQWMsRUFBRSxnQkFERTtBQUVsQkMsd0JBQXNCLEVBQUUsd0JBRk47QUFHbEJDLHFCQUFtQixFQUFFLHFCQUhIO0FBSWxCQyxxQkFBbUIsRUFBRSxxQkFKSDtBQUtsQkMsNkJBQTJCLEVBQUUsNkJBTFg7QUFNbEJDLDBCQUF3QixFQUFFLDBCQU5SO0FBT2xCQyx5QkFBdUIsRUFBRSx5QkFQUDtBQVFsQkMsaUNBQStCLEVBQUUsaUNBUmY7QUFTbEJDLDhCQUE0QixFQUFFLDhCQVRaO0FBVWxCQyw0QkFBMEIsRUFBRSw0QkFWVjtBQVdsQkMsb0NBQWtDLEVBQUUsb0NBWGxCO0FBWWxCQyxpQ0FBK0IsRUFBRSxpQ0FaZjtBQWFsQkMscUJBQW1CLEVBQUUscUJBYkg7QUFjbEJDLDZCQUEyQixFQUFFLDZCQWRYO0FBZWxCQywwQkFBd0IsRUFBRSwwQkFmUjtBQWdCbEJDLHNCQUFvQixFQUFFLHNCQWhCSjtBQWlCbEJDLDhCQUE0QixFQUFFLDhCQWpCWjtBQWtCbEJDLDJCQUF5QixFQUFFLDJCQWxCVDtBQW1CbEJDLHlCQUF1QixFQUFFLHlCQW5CUDtBQW9CbEJDLGlDQUErQixFQUFFLGlDQXBCZjtBQXFCbEJDLDhCQUE0QixFQUFFO0FBckJaLENBQWI7QUF3QkEsTUFBTTNHLElBQUksR0FBRztBQUNsQjRHLGFBQVcsRUFBRSxhQURLO0FBRWxCQyxxQkFBbUIsRUFBRSxxQkFGSDtBQUdsQkMsa0JBQWdCLEVBQUUsa0JBSEE7QUFJbEJDLG1CQUFpQixFQUFFLG1CQUpEO0FBS2xCQywyQkFBeUIsRUFBRSwyQkFMVDtBQU1sQkMsd0JBQXNCLEVBQUUsd0JBTk47QUFPbEJDLG9CQUFrQixFQUFFLG9CQVBGO0FBUWxCQyw0QkFBMEIsRUFBRSw0QkFSVjtBQVNsQkMseUJBQXVCLEVBQUU7QUFUUCxDQUFiO0FBWUEsTUFBTUMsV0FBVyxHQUFHO0FBQ3pCQyxlQUFhLEVBQUUsZUFEVTtBQUV6QkMsVUFBUSxFQUFFLFVBRmU7QUFHekJDLFVBQVEsRUFBRSxVQUhlO0FBSXpCQyxVQUFRLEVBQUUsVUFKZTtBQUt6QkMsY0FBWSxFQUFFLGNBTFc7QUFNekJDLFdBQVMsRUFBRSxXQU5jO0FBT3pCQyxVQUFRLEVBQUUsVUFQZTtBQVF6QkMsU0FBTyxFQUFFO0FBUmdCLENBQXBCO0FBV0EsTUFBTUMsSUFBSSxHQUFHO0FBQ2xCQyxZQUFVLEVBQUUsWUFETTtBQUVsQkMsb0JBQWtCLEVBQUUsb0JBRkY7QUFHbEJDLGlCQUFlLEVBQUU7QUFIQyxDQUFiO0FBTUEsTUFBTUMsUUFBUSxHQUFHO0FBQ3RCQyxnQkFBYyxFQUFFLGdCQURNO0FBRXRCQyx3QkFBc0IsRUFBRSx3QkFGRjtBQUd0QkMscUJBQW1CLEVBQUU7QUFIQyxDQUFqQjtBQU1BLE1BQU1DLE9BQU8sR0FBRztBQUNyQkMsZ0JBQWMsRUFBRSxnQkFESztBQUVyQkMscUJBQW1CLEVBQUU7QUFGQSxDQUFoQjtBQUtBLE1BQU1DLFdBQVcsR0FBRztBQUN6Qm5CLGVBQWEsRUFBRSxlQURVO0FBRXpCSSxjQUFZLEVBQUUsY0FGVztBQUd6QkcsU0FBTyxFQUFFO0FBSGdCLENBQXBCLEM7Ozs7Ozs7Ozs7OztBQ2hFUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBSUE7O0FBQ08sTUFBTWEsU0FBUyxHQUFHLE9BQU87QUFDOUJsTCxNQUFJLEVBQUVzSyxpREFBSSxDQUFDQztBQURtQixDQUFQLENBQWxCO0FBSUEsTUFBTVksZ0JBQWdCLEdBQUk5WixJQUFELEtBQVc7QUFDekMyTyxNQUFJLEVBQUVzSyxpREFBSSxDQUFDRSxrQkFEOEI7QUFFekNZLFNBQU8sRUFBRTtBQUNQL1o7QUFETztBQUZnQyxDQUFYLENBQXpCO0FBT0EsTUFBTWdhLGFBQWEsR0FBSXhrQixHQUFELEtBQVU7QUFDckNtWixNQUFJLEVBQUVzSyxpREFBSSxDQUFDRyxlQUQwQjtBQUVyQ1csU0FBTyxFQUFFO0FBQ1B2a0I7QUFETztBQUY0QixDQUFWLENBQXRCO0FBT0EsTUFBTXdnQixnQkFBZ0IsR0FBRyxNQUFNO0FBQ3BDLFNBQVF0RSxRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQ21JLFNBQVMsRUFBVixDQUFSO0FBQ0FJLDREQUFBLEdBRUcvUSxJQUZILENBRVNoTyxHQUFELElBQVM7QUFDYndXLGNBQVEsQ0FBQ29JLGdCQUFnQixDQUFDNWUsR0FBRyxDQUFDOEUsSUFBTCxDQUFqQixDQUFSO0FBQ0QsS0FKSCxFQUtHdUosS0FMSCxDQUtVL1QsR0FBRCxJQUFTO0FBQ2RrYyxjQUFRLENBQUNzSSxhQUFhLENBQUN4a0IsR0FBRCxDQUFkLENBQVI7QUFDRCxLQVBIO0FBUUQsR0FWRDtBQVdELENBWk0sQzs7Ozs7Ozs7Ozs7O0FDdkJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDTyxNQUFNMGtCLGFBQWEsR0FBRyxPQUFPO0FBQ2xDdkwsTUFBSSxFQUFFa0MsaURBQUksQ0FBQzZGO0FBRHVCLENBQVAsQ0FBdEI7QUFJQSxNQUFNeUQsb0JBQW9CLEdBQUcsQ0FBQ25hLElBQUQsRUFBT29hLFlBQVAsTUFBeUI7QUFDM0R6TCxNQUFJLEVBQUVrQyxpREFBSSxDQUFDOEYsc0JBRGdEO0FBRTNEb0QsU0FBTyxFQUFFO0FBQ1AvWixRQURPO0FBRVBvYTtBQUZPO0FBRmtELENBQXpCLENBQTdCO0FBUUEsTUFBTUMsaUJBQWlCLEdBQUk3a0IsR0FBRCxLQUFVO0FBQ3pDbVosTUFBSSxFQUFFa0MsaURBQUksQ0FBQytGLG1CQUQ4QjtBQUV6Q21ELFNBQU8sRUFBRTtBQUNQdmtCO0FBRE87QUFGZ0MsQ0FBVixDQUExQjtBQU9BLE1BQU04a0Isb0JBQW9CLEdBQUk3ZSxLQUFELElBQVc7QUFDN0MsU0FBUWlXLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDd0ksYUFBYSxFQUFkLENBQVI7QUFDQUssZ0VBQUEsQ0FDcUI5ZSxLQURyQixFQUVHeU4sSUFGSCxDQUVTaE8sR0FBRCxJQUFTO0FBQ2J3VyxjQUFRLENBQUN5SSxvQkFBb0IsQ0FBQ2pmLEdBQUcsQ0FBQzhFLElBQUwsRUFBVzlFLEdBQUcsQ0FBQ3NmLE9BQUosQ0FBWSxlQUFaLENBQVgsQ0FBckIsQ0FBUjtBQUNELEtBSkgsRUFLR2pSLEtBTEgsQ0FLVS9ULEdBQUQsSUFBUztBQUNka2MsY0FBUSxDQUFDMkksaUJBQWlCLENBQUM3a0IsR0FBRCxDQUFsQixDQUFSO0FBQ0QsS0FQSDtBQVFELEdBVkQ7QUFXRCxDQVpNLEMsQ0FjUDs7QUFDTyxNQUFNaWxCLGlCQUFpQixHQUFHLE9BQU87QUFDdEM5TCxNQUFJLEVBQUVrQyxpREFBSSxDQUFDZ0c7QUFEMkIsQ0FBUCxDQUExQjtBQUlBLE1BQU02RCx3QkFBd0IsR0FBSTFhLElBQUQsS0FBVztBQUNqRDJPLE1BQUksRUFBRWtDLGlEQUFJLENBQUNpRywyQkFEc0M7QUFFakRpRCxTQUFPLEVBQUU7QUFDUC9aO0FBRE87QUFGd0MsQ0FBWCxDQUFqQztBQU9BLE1BQU0yYSxxQkFBcUIsR0FBSW5sQixHQUFELEtBQVU7QUFDN0NtWixNQUFJLEVBQUVrQyxpREFBSSxDQUFDa0csd0JBRGtDO0FBRTdDZ0QsU0FBTyxFQUFFO0FBQ1B2a0I7QUFETztBQUZvQyxDQUFWLENBQTlCO0FBT0EsTUFBTW9sQix3QkFBd0IsR0FBSW5mLEtBQUQsSUFBVztBQUNqRCxTQUFRaVcsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUMrSSxpQkFBaUIsRUFBbEIsQ0FBUjtBQUNBRixvRUFBQSxDQUN5QjllLEtBRHpCLEVBRUd5TixJQUZILENBRVNoTyxHQUFELElBQVM7QUFDYndXLGNBQVEsQ0FBQ2dKLHdCQUF3QixDQUFDeGYsR0FBRyxDQUFDOEUsSUFBTCxDQUF6QixDQUFSO0FBQ0QsS0FKSCxFQUtHdUosS0FMSCxDQUtVL1QsR0FBRCxJQUFTO0FBQ2RrYyxjQUFRLENBQUNpSixxQkFBcUIsQ0FBQ25sQixHQUFELENBQXRCLENBQVI7QUFDRCxLQVBIO0FBUUQsR0FWRDtBQVdELENBWk0sQyxDQWNQOztBQUNPLE1BQU1xbEIscUJBQXFCLEdBQUcsT0FBTztBQUMxQ2xNLE1BQUksRUFBRWtDLGlEQUFJLENBQUNtRztBQUQrQixDQUFQLENBQTlCO0FBSUEsTUFBTThELDRCQUE0QixHQUFJOWEsSUFBRCxLQUFXO0FBQ3JEMk8sTUFBSSxFQUFFa0MsaURBQUksQ0FBQ29HLCtCQUQwQztBQUVyRDhDLFNBQU8sRUFBRTtBQUNQL1o7QUFETztBQUY0QyxDQUFYLENBQXJDO0FBT0EsTUFBTSthLHlCQUF5QixHQUFJdmxCLEdBQUQsS0FBVTtBQUNqRG1aLE1BQUksRUFBRWtDLGlEQUFJLENBQUNxRyw0QkFEc0M7QUFFakQ2QyxTQUFPLEVBQUU7QUFDUHZrQjtBQURPO0FBRndDLENBQVYsQ0FBbEM7QUFPQSxNQUFNd2xCLDRCQUE0QixHQUFJdmYsS0FBRCxJQUFXO0FBQ3JELFNBQVFpVyxRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQ21KLHFCQUFxQixFQUF0QixDQUFSO0FBQ0FOLHdFQUFBLENBQzZCOWUsS0FEN0IsRUFFR3lOLElBRkgsQ0FFU2hPLEdBQUQsSUFBUztBQUNid1csY0FBUSxDQUFDb0osNEJBQTRCLENBQUM1ZixHQUFHLENBQUM4RSxJQUFMLENBQTdCLENBQVI7QUFDRCxLQUpILEVBS0d1SixLQUxILENBS1UvVCxHQUFELElBQVM7QUFDZGtjLGNBQVEsQ0FBQ3FKLHlCQUF5QixDQUFDdmxCLEdBQUQsQ0FBMUIsQ0FBUjtBQUNELEtBUEg7QUFRRCxHQVZEO0FBV0QsQ0FaTSxDLENBY1A7O0FBQ08sTUFBTXlsQix1QkFBdUIsR0FBRyxPQUFPO0FBQzVDdE0sTUFBSSxFQUFFa0MsaURBQUksQ0FBQ3NHO0FBRGlDLENBQVAsQ0FBaEM7QUFJQSxNQUFNK0QsOEJBQThCLEdBQUlsYixJQUFELEtBQVc7QUFDdkQyTyxNQUFJLEVBQUVrQyxpREFBSSxDQUFDdUcsa0NBRDRDO0FBRXZEMkMsU0FBTyxFQUFFO0FBQ1AvWjtBQURPO0FBRjhDLENBQVgsQ0FBdkM7QUFPQSxNQUFNbWIsMkJBQTJCLEdBQUkzbEIsR0FBRCxLQUFVO0FBQ25EbVosTUFBSSxFQUFFa0MsaURBQUksQ0FBQ3dHLCtCQUR3QztBQUVuRDBDLFNBQU8sRUFBRTtBQUNQdmtCO0FBRE87QUFGMEMsQ0FBVixDQUFwQztBQU9BLE1BQU00bEIsOEJBQThCLEdBQUkzZixLQUFELElBQVc7QUFDdkQsU0FBUWlXLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDdUosdUJBQXVCLEVBQXhCLENBQVI7QUFDQVYsMEVBQUEsQ0FDK0I5ZSxLQUQvQixFQUVHeU4sSUFGSCxDQUVTaE8sR0FBRCxJQUFTO0FBQ2J3VyxjQUFRLENBQUN3Siw4QkFBOEIsQ0FBQ2hnQixHQUFHLENBQUM4RSxJQUFMLENBQS9CLENBQVI7QUFDRCxLQUpILEVBS0d1SixLQUxILENBS1UvVCxHQUFELElBQVM7QUFDZGtjLGNBQVEsQ0FBQ3lKLDJCQUEyQixDQUFDM2xCLEdBQUQsQ0FBNUIsQ0FBUjtBQUNELEtBUEg7QUFRRCxHQVZEO0FBV0QsQ0FaTSxDLENBY1A7O0FBQ08sTUFBTTZsQixpQkFBaUIsR0FBRyxPQUFPO0FBQ3RDMU0sTUFBSSxFQUFFa0MsaURBQUksQ0FBQ3lHO0FBRDJCLENBQVAsQ0FBMUI7QUFJQSxNQUFNZ0Usd0JBQXdCLEdBQUl0YixJQUFELEtBQVc7QUFDakQyTyxNQUFJLEVBQUVrQyxpREFBSSxDQUFDMEcsMkJBRHNDO0FBRWpEd0MsU0FBTyxFQUFFO0FBQ1AvWjtBQURPO0FBRndDLENBQVgsQ0FBakM7QUFPQSxNQUFNdWIscUJBQXFCLEdBQUkvbEIsR0FBRCxLQUFVO0FBQzdDbVosTUFBSSxFQUFFa0MsaURBQUksQ0FBQzJHLHdCQURrQztBQUU3Q3VDLFNBQU8sRUFBRTtBQUNQdmtCO0FBRE87QUFGb0MsQ0FBVixDQUE5QjtBQU9BLE1BQU1nbUIsd0JBQXdCLEdBQUkvZixLQUFELElBQVc7QUFDakQsU0FBUWlXLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDMkosaUJBQWlCLEVBQWxCLENBQVI7QUFDQWQsb0VBQUEsQ0FDeUI5ZSxLQUR6QixFQUVHeU4sSUFGSCxDQUVTaE8sR0FBRCxJQUFTO0FBQ2J3VyxjQUFRLENBQUM0Six3QkFBd0IsQ0FBQ3BnQixHQUFHLENBQUM4RSxJQUFMLENBQXpCLENBQVI7QUFDRCxLQUpILEVBS0d1SixLQUxILENBS1UvVCxHQUFELElBQVM7QUFDZGtjLGNBQVEsQ0FBQzZKLHFCQUFxQixDQUFDL2xCLEdBQUQsQ0FBdEIsQ0FBUjtBQUNELEtBUEg7QUFRRCxHQVZEO0FBV0QsQ0FaTSxDLENBY1A7O0FBQ08sTUFBTWltQixrQkFBa0IsR0FBRyxPQUFPO0FBQ3ZDOU0sTUFBSSxFQUFFa0MsaURBQUksQ0FBQzRHO0FBRDRCLENBQVAsQ0FBM0I7QUFJQSxNQUFNaUUseUJBQXlCLEdBQUkxYixJQUFELEtBQVc7QUFDbEQyTyxNQUFJLEVBQUVrQyxpREFBSSxDQUFDNkcsNEJBRHVDO0FBRWxEcUMsU0FBTyxFQUFFO0FBQ1AvWjtBQURPO0FBRnlDLENBQVgsQ0FBbEM7QUFPQSxNQUFNMmIsc0JBQXNCLEdBQUlubUIsR0FBRCxLQUFVO0FBQzlDbVosTUFBSSxFQUFFa0MsaURBQUksQ0FBQzhHLHlCQURtQztBQUU5Q29DLFNBQU8sRUFBRTtBQUNQdmtCO0FBRE87QUFGcUMsQ0FBVixDQUEvQjtBQU9BLE1BQU1vbUIseUJBQXlCLEdBQUk5VCxJQUFELElBQVU7QUFDakQsU0FBUTRKLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDK0osa0JBQWtCLEVBQW5CLENBQVI7QUFDQWxCLHFFQUFBLENBQzBCelMsSUFEMUIsRUFFR29CLElBRkgsQ0FFU2hPLEdBQUQsSUFBUztBQUNid1csY0FBUSxDQUFDZ0sseUJBQXlCLENBQUN4Z0IsR0FBRyxDQUFDOEUsSUFBTCxDQUExQixDQUFSO0FBQ0QsS0FKSCxFQUtHdUosS0FMSCxDQUtVL1QsR0FBRCxJQUFTO0FBQ2RrYyxjQUFRLENBQUNpSyxzQkFBc0IsQ0FBQ25tQixHQUFELENBQXZCLENBQVI7QUFDRCxLQVBIO0FBUUQsR0FWRDtBQVdELENBWk0sQyxDQWNQOztBQUVPLE1BQU1xbUIsb0JBQW9CLEdBQUcsT0FBTztBQUN6Q2xOLE1BQUksRUFBRWtDLGlEQUFJLENBQUMrRztBQUQ4QixDQUFQLENBQTdCO0FBSUEsTUFBTWtFLDJCQUEyQixHQUFJOWIsSUFBRCxLQUFXO0FBQ3BEMk8sTUFBSSxFQUFFa0MsaURBQUksQ0FBQ2dILCtCQUR5QztBQUVwRGtDLFNBQU8sRUFBRTtBQUNQL1o7QUFETztBQUYyQyxDQUFYLENBQXBDO0FBT0EsTUFBTStiLHdCQUF3QixHQUFJdm1CLEdBQUQsS0FBVTtBQUNoRG1aLE1BQUksRUFBRWtDLGlEQUFJLENBQUNpSCw0QkFEcUM7QUFFaERpQyxTQUFPLEVBQUU7QUFDUHZrQjtBQURPO0FBRnVDLENBQVYsQ0FBakM7QUFPQSxNQUFNa2QsMkJBQTJCLEdBQUlqWCxLQUFELElBQVc7QUFDcEQsU0FBUWlXLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDbUssb0JBQW9CLEVBQXJCLENBQVI7QUFDQXRCLHVFQUFBLENBQzRCOWUsS0FENUIsRUFFR3lOLElBRkgsQ0FFU2hPLEdBQUQsSUFBUztBQUNid1csY0FBUSxDQUFDb0ssMkJBQTJCLENBQUM1Z0IsR0FBRyxDQUFDOEUsSUFBTCxDQUE1QixDQUFSO0FBQ0QsS0FKSCxFQUtHdUosS0FMSCxDQUtVL1QsR0FBRCxJQUFTO0FBQ2RrYyxjQUFRLENBQUNxSyx3QkFBd0IsQ0FBQ3ZtQixHQUFELENBQXpCLENBQVI7QUFDRCxLQVBIO0FBUUQsR0FWRDtBQVdELENBWk0sQzs7Ozs7Ozs7Ozs7QUM5TlAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvc2hvcC9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvc2hvcC9jYXJ0LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhcyxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcylcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IGRlbm9ybWFsaXplUGFnZVBhdGgoZGVsQmFzZVBhdGgocGF0aG5hbWUhKSlcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYWdlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG4gIGRlY29kZTogZGVjb2RlUGFyYW0sXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKFxuICAgICAgbWF0Y2hlclJlZ2V4LFxuICAgICAga2V5cyxcbiAgICAgIG1hdGNoZXJPcHRpb25zXG4gICAgKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlUGFyYW0ocGFyYW06IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKVxuICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgKVxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2VuY29kZVVSSShcbiAgICAgIGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcblxuY29uc3QgdXJsID0gXCIvY2FydFwiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0RGF0YSA9IChjYXJ0SWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gY2FydElkID8gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YCA6IEFQSV9VUkwgKyB1cmw7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RJZENhcnREYXRhID0gKHBpZCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcInByb2R1Y3RJZFwiLCBwaWQpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ2FydERhdGEgPSAoZGF0YSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhcnREYXRhID0gKGNhcnRJZCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke2NhcnRJZH1gO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmRlbGV0ZShlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FydERhdGEgPSAoY2FydElkLCBkYXRhKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBgLyR7Y2FydElkfWA7XG4gIHJldHVybiBheGlvc1NlcnZpY2UucGF0Y2goZW5kcG9pbnQsIGRhdGEpO1xufTtcbiIsImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2RlZmluZXNcIjtcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xuXG5jb25zdCB1cmwgPSBcIi9wcm9kdWN0XCI7XG5cbmNvbnN0IHJlbmRlclVybCA9ICh1cmwsIGxpbWl0LCBjYXRlZ29yeSkgPT4ge1xuICByZXR1cm4gKFxuICAgIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJfbGltaXRcIiwgbGltaXQpICsgcmVuZGVyUGFyYW0oXCJjYXRlZ29yeVwiLCBjYXRlZ29yeSlcbiAgKTtcbn07XG5cbi8vRmV0Y2ggbGlzdCBvZiBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCBlbmRwb2ludCA9XG4gICAgcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSkgK1xuICAgIHJlbmRlclBhcmFtKFwiX3BhZ2VcIiwgcXVlcnkucGFnZSkgK1xuICAgIHJlbmRlclBhcmFtKFwiX3NvcnRcIiwgcXVlcnkuc29ydC5zb3J0KSArXG4gICAgcmVuZGVyUGFyYW0oXCJfb3JkZXJcIiwgcXVlcnkuc29ydC5vcmRlcikgK1xuICAgIHJlbmRlclBhcmFtKFwicVwiLCBxdWVyeS5xKSArXG4gICAgcmVuZGVyUGFyYW0oXCJzcGVjaWZpY2F0aW9ucy5jb2xvclwiLCBxdWVyeS5jb2xvcikgK1xuICAgIHJlbmRlclBhcmFtKFwic3BlY2lmaWNhdGlvbnMuc2l6ZVwiLCBxdWVyeS5zaXplKSArXG4gICAgcmVuZGVyUGFyYW0oXCJ0YWdfbGlrZVwiLCBxdWVyeS50YWcpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuLy9GZXRjaCBwcm9kdWN0IGRldGFpbFxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbERhdGEgPSAoc2x1ZykgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcInNsdWdcIiwgc2x1Zyk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbi8vRmV0Y2ggc2VyY2hlZCBwcm9kdWN0IGJ5IHF1ZXJ5XG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3REYXRhID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCBlbmRwb2ludCA9XG4gICAgQVBJX1VSTCArXG4gICAgdXJsICtcbiAgICBcIj9cIiArXG4gICAgcmVuZGVyUGFyYW0oXCJxXCIsIHF1ZXJ5LmlucHV0KSArXG4gICAgcmVuZGVyUGFyYW0oXCJjYXRlZ29yeVwiLCBxdWVyeS5jYXRlZ29yeSkgK1xuICAgIHJlbmRlclBhcmFtKFwiX2xpbWl0XCIsIHF1ZXJ5LmxpbWl0KTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY2xhc3MgQXhpb3NTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoKTtcbiAgICBpbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHRoaXMuaGFuZGxlU3VjY2VzcywgdGhpcy5oYW5kbGVFcnJvcik7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICB9XG5cbiAgaGFuZGxlU3VjY2VzcyhyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuXG4gIGdldCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXQodXJsKTtcbiAgfVxuXG4gIHBvc3QodXJsLCBib2R5KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucG9zdCh1cmwsIGJvZHkpO1xuICB9XG5cbiAgcGF0Y2godXJsLCBib2R5KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucGF0Y2godXJsLCBib2R5KTtcbiAgfVxuXG4gIGRlbGV0ZSh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5kZWxldGUodXJsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXhpb3NTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YSxcbiAgYWRkQ2FydERhdGEsXG4gIHVwZGF0ZUNhcnREYXRhLFxuICByZW1vdmVDYXJ0RGF0YSxcbn0gZnJvbSBcIi4uL2FwaXMvY2FydFwiO1xuXG5leHBvcnQgY29uc3Qgb25BZGRQcm9kdWN0VG9DYXJ0ID0gKHtcbiAgcHJvZHVjdCxcbiAgcXVhbnRpdHkgPSAxLFxuICBvblN1Y2Nlc3MsXG4gIG9uRXJyb3IsXG4gIGdldFF1YW50aXR5QXZhaWxhYmxlID0gKCkgPT4gdHJ1ZSxcbn0pID0+IHtcbiAgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YShwcm9kdWN0LmlkKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHByb2R1Y3QucXVhbnRpdHkgPT09IDApIHtcbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZWFjaGVkIG1heGltdW0gbnVtYmVyIG9mIHByb2R1Y3RzXCIpO1xuICAgICAgICAgIGdldFF1YW50aXR5QXZhaWxhYmxlICYmIGdldFF1YW50aXR5QXZhaWxhYmxlKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDYXJ0RGF0YSh7XG4gICAgICAgICAgICAuLi5wcm9kdWN0LFxuICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmlkLFxuICAgICAgICAgICAgY2FydFF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gb25TdWNjZXNzICYmIG9uU3VjY2VzcyhyZXMpKVxuICAgICAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgICAoZXJyKSA9PlxuICAgICAgICAgICAgICAgIG9uRXJyb3IgJiZcbiAgICAgICAgICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gY2FydCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBEYXRhID0gcmVzLmRhdGFbMF07XG4gICAgICAgIGlmIChwRGF0YS5jYXJ0UXVhbnRpdHkgKyBxdWFudGl0eSA+IHBEYXRhLnF1YW50aXR5KSB7XG4gICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiUmVhY2hlZCBtYXhpbXVtIG51bWJlciBvZiBwcm9kdWN0c1wiKTtcbiAgICAgICAgICBnZXRRdWFudGl0eUF2YWlsYWJsZShmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlQ2FydERhdGEocERhdGEuaWQsIHtcbiAgICAgICAgICAgIGNhcnRRdWFudGl0eTogcERhdGEuY2FydFF1YW50aXR5ICsgcXVhbnRpdHksXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgb25TdWNjZXNzICYmIG9uU3VjY2VzcyhyZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgICAgKGVycikgPT5cbiAgICAgICAgICAgICAgICBvbkVycm9yICYmXG4gICAgICAgICAgICAgICAgb25FcnJvcihcIkFkZCBwcm9kdWN0IHRvIGNhcnQgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluXCIsIGVycilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChcbiAgICAgIChlcnIpID0+XG4gICAgICAgIG9uRXJyb3IgJiYgb25FcnJvcihcIkFkZCBwcm9kdWN0IHRvIGNhcnQgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluXCIsIGVycilcbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0ID0gKHsgY2FydElkLCBvblN1Y2Nlc3MsIG9uRXJyb3IgfSkgPT4ge1xuICBpZiAoY2FydElkICYmIGNhcnRJZCAhPT0gXCJcIiAmJiBjYXJ0SWQgIT09IG51bGwpIHtcbiAgICByZW1vdmVDYXJ0RGF0YShjYXJ0SWQpXG4gICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgICAuY2F0Y2goXG4gICAgICAgIChlcnIpID0+XG4gICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiUmVtb3ZlIHByb2R1Y3QgZmFpbG0sIHBsZWFzZXIgdHJ5IGFnYWluXCIsIGVycilcbiAgICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBvbkNoYW5nZVByb2R1Y3RDYXJ0UXVhbnRpdHkgPSAoe1xuICBwcm9kdWN0LFxuICBxdWFudGl0eSxcbiAgb25TdWNjZXNzLFxufSkgPT4ge1xuICBpZiAocXVhbnRpdHkgPiBwcm9kdWN0LnF1YW50aXR5IHx8IHF1YW50aXR5IDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuICB1cGRhdGVDYXJ0RGF0YShwcm9kdWN0LmlkLCB7IGNhcnRRdWFudGl0eTogcXVhbnRpdHkgfSlcbiAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufTtcbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwczovL29nYW1pLWFwaS5oZXJva3VhcHAuY29tXCI7XG4iLCJleHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeVNsdWcgPSAoYXJyLCBzbHVnKSA9PiB7XG4gIHJldHVybiBzbHVnICYmIHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiXG4gICAgPyBhcnIuZmluZCgocCkgPT4gcC5zbHVnLnRvTG93ZXJDYXNlKCkgPT09IHNsdWcudG9Mb3dlckNhc2UoKSlcbiAgICA6IGFycjtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVUb3RhbFByaWNlID0gKGFycikgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmRpc2NvdW50KSB7XG4gICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eVxuICAgICAgICA/IChpdGVtLnByaWNlIC0gaXRlbS5kaXNjb3VudCkgKiBpdGVtLmNhcnRRdWFudGl0eVxuICAgICAgICA6IGl0ZW0ucHJpY2UgLSBpdGVtLmRpc2NvdW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eSA/IGl0ZW0ucHJpY2UgKiBpdGVtLmNhcnRRdWFudGl0eSA6IGl0ZW0ucHJpY2U7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRvdGFsO1xufTtcblxuLy9DYXJ0XG5leHBvcnQgY29uc3QgY2hlY2tQcm9kdWN0SW5DYXJ0ID0gKGNhcnRBcnIsIHBpZCkgPT4ge1xuICByZXR1cm4gcGlkID8gY2FydEFyci5maW5kKChpdGVtKSA9PiBpdGVtLnByb2R1Y3RJZCA9PT0gcGlkKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RDYXJ0UXVhbnRpdHkgPSAoY2FydEFyciwgcGlkKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzSW5DYXJ0ID0gY2FydEFyci5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdElkID09PSBwaWQpO1xuICBpZiAocHJvZHVjdHNJbkNhcnQgJiYgcHJvZHVjdHNJbkNhcnQubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0ID0gcHJvZHVjdHNJbkNhcnQucmVkdWNlKFxuICAgICAgKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0uY2FydFF1YW50aXR5LFxuICAgICAgMFxuICAgICk7XG4gICAgcmV0dXJuIHRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG4vL1dpc2hsaXN0XG5leHBvcnQgY29uc3QgY2hlY2tQcm9kdWN0SW5XaXNobGlzdCA9ICh3aXNobGlzdEFyciwgcGlkKSA9PiB7XG4gIHJldHVybiBwaWQgPyB3aXNobGlzdEFyci5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwaWQpIDogdW5kZWZpbmVkO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURlYm91bmNlKHZhbHVlLCBkZWxheSkge1xuICBjb25zdCBbZGVib3VuY2VkVmFsdWUsIHNldERlYm91bmNlZFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSk7XG4gICAgfSwgZGVsYXkpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiBkZWJvdW5jZWRWYWx1ZTtcbn1cbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAocHJpY2UsIGxvY2FsZXMgPSBcInVzLVVTXCIsIGN1cnJlbmN5ID0gXCJVU0RcIikgPT4ge1xuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIHtcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgIGN1cnJlbmN5OiBjdXJyZW5jeSxcbiAgfSkuZm9ybWF0KHByaWNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQYXJhbSA9IChwYXJhbU5hbWUsIHBhcmFtVmFsdWUpID0+IHtcbiAgaWYgKHBhcmFtVmFsdWUgJiYgcGFyYW1WYWx1ZSAhPT0gXCJcIiAmJiBwYXJhbVZhbHVlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGAmJHtwYXJhbU5hbWV9PSR7cGFyYW1WYWx1ZX1gO1xuICB9XG4gIHJldHVybiBcIlwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoXG4gIGRhdGUsXG4gIGlucHV0Rm9ybWF0ID0gXCJZWVlZLU1NLUREXCIsXG4gIG91dHB1dEZvcm1hdCA9IFwiTU1NIERELCBZWVlZXCJcbikgPT4ge1xuICByZXR1cm4gbW9tZW50KGRhdGUsIGlucHV0Rm9ybWF0KS5mb3JtYXQob3V0cHV0Rm9ybWF0KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVEYXNoID0gKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLy0vZywgXCIgXCIpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhIZWFkZXJTY3JvbGwoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgY29uc3QgaGVhZGVyUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbaXNIZWFkZXJGaXhlZCwgc2V0SXNIZWFkZXJGaXhlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsID49IGhlYWRlclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCkge1xuICAgICAgICBzZXRJc0hlYWRlckZpeGVkKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNIZWFkZXJGaXhlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgW3Njcm9sbF0pO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgc2V0U2Nyb2xsKHdpbmRvdy5zY3JvbGxZKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2hlYWRlclJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyICR7Y2xhc3NOYW1lcyhcbiAgICAgICAgICB7IGZpeGVkOiBpc0hlYWRlckZpeGVkIH0sXG4gICAgICAgICAgcHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICl9YH1cbiAgICAgID5cbiAgICAgICAgPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IGZvb3RlckxpbmtzIGZyb20gXCIuLi8uLi9kYXRhL2Zvb3Rlci1saW5rcy5qc29uXCI7XG5pbXBvcnQgRm9vdGVyUXVpY2tMaW5rcyBmcm9tIFwiLi9lbGVtZW50cy9Gb290ZXJRdWlja0xpbmtzXCI7XG5pbXBvcnQgRm9vdGVySW5mb21hdGlvbiBmcm9tIFwiLi9lbGVtZW50cy9Gb290ZXJJbmZvbWF0aW9uXCI7XG5pbXBvcnQgRm9vdGVyU3ViY3JpYmVJbnB1dCBmcm9tIFwiLi9lbGVtZW50cy9Gb290ZXJTdWJjcmliZUlucHV0XCI7XG5cbmZ1bmN0aW9uIEZvb3Rlcih7IGNvbnRhaW5lckZsdWlkLCBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9vdGVyIC1zdHlsZS1vbmUgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci10b3BcIj5cbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD17Y29udGFpbmVyRmx1aWR9PlxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNX0+XG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezl9IGxnPXs4fT5cbiAgICAgICAgICAgICAgPEZvb3RlckluZm9tYXRpb24gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxNX0gbGc9ezE2fT5cbiAgICAgICAgICAgICAgPEZvb3RlclF1aWNrTGlua3MgY29sU2l6ZT17eyBzcGFuOiA4IH19IC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFJvdyBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxNH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGg1PkpvaW4gT3VyIE5ld3NsZXR0ZXIgTm93PC9oNT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEdldCBFLW1haWwgdXBkYXRlcyBhYm91dCBvdXIgbGF0ZXN0IHNob3AgYW5kIHNwZWNpYWwgb2ZmZXJzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTB9PlxuICAgICAgICAgICAgICA8Rm9vdGVyU3ViY3JpYmVJbnB1dCB1cmw9XCJodHRwczovL2pzdGVyLnVzNy5saXN0LW1hbmFnZS5jb20vc3Vic2NyaWJlL3Bvc3Q/dT1lZDQwYzAwODRhMGM1YmEzMWIzMzY1ZDY1JmlkPWVjNmYzMmJmNWVcIiAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b21cIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b21fX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxwPkNvcHlyaWdodCDCqSAyMDIyIE9nYW1pIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvZm9vdGVyL3BheW1lbnQucG5nXCJ9XG4gICAgICAgICAgICAgIGFsdD1cIlBheW1lbnQgbWV0aG9kc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uLy4uL290aGVyL1NvY2lhbEljb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlckluZm9tYXRpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItaW5mb1wiPlxuICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL1wifT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9vdGVyLWluZm9fX2xvZ29cIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCJ9XG4gICAgICAgICAgICBhbHQ9XCJPZ2FtaSBMb2dvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5BZGRyZXNzOiA2MC00OSBSb2FkIDExMzc4IE5ldyBZb3JrPC9saT5cbiAgICAgICAgPGxpPlBob25lOiArNjUgMTEuMTg4Ljg4ODwvbGk+XG4gICAgICAgIDxsaT5FbWFpbDogcml0aWtAa29uZmF2LmNvbTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPFNvY2lhbEljb25zIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJjaXJjbGVcIiBjbGFzc05hbWU9XCItYnRuLWxpZ2h0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IGZvb3RlckxpbmtzIGZyb20gXCIuLi8uLi8uLi9kYXRhL2Zvb3Rlci1saW5rcy5qc29uXCI7XG5cbmZ1bmN0aW9uIEZvb3RlclF1aWNrTGlua3MoeyBjb2xTaXplIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rc1wiPlxuICAgICAgPFJvdyBndXR0ZXI9ezEwfSBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICB7Zm9vdGVyTGlua3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDb2wga2V5PXtpbmRleH0gey4uLmNvbFNpemV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3NfX2dyb3VwXCI+XG4gICAgICAgICAgICAgIDxoNT57aXRlbS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2l0ZW0uaXRlbXMubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbGluay5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YT4ge2xpbmsudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICApKX1cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZvb3RlclF1aWNrTGlua3MpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1haWxjaGltcFN1YnNjcmliZSBmcm9tIFwicmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZVwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCBDdXN0b21Gb3JtID0gUmVhY3QubWVtbygoeyBzdGF0dXMsIG1lc3NhZ2UsIG9uVmFsaWRhdGVkIH0pID0+IHtcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3M6XCIsIHZhbHVlKTtcbiAgICB2YWx1ZSAmJlxuICAgICAgb25WYWxpZGF0ZWQoe1xuICAgICAgICBFTUFJTDogdmFsdWUuZW1haWwsXG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybVxuICAgICAgICBuYW1lPVwiYmFzaWNcIlxuICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlX19mb3JtXCJcbiAgICAgID5cbiAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgIG5vU3R5bGU9e3RydWV9XG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIGlucHV0IGlzIG5vdCB2YWxpZCBFLW1haWwhXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBFLW1haWwhXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCIgLz5cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDxGb3JtLkl0ZW0gbm9TdHlsZT17dHJ1ZX0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTVUJTQ1JJQkVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8L0Zvcm0+XG4gICAgICB7c3RhdHVzID09PSBcInNlbmRpbmdcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fT5zZW5kaW5nLi4uPC9kaXY+fVxuICAgICAge3N0YXR1cyA9PT0gXCJlcnJvclwiICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtZXNzYWdlIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3N0YXR1cyA9PT0gXCJzdWNjZXNzXCIgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJTdWJjcmliZUlucHV0KHsgdXJsIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWFpbGNoaW1wU3Vic2NyaWJlXG4gICAgICB1cmw9e3VybH1cbiAgICAgIHJlbmRlcj17KHsgc3Vic2NyaWJlLCBzdGF0dXMsIG1lc3NhZ2UgfSkgPT4gKFxuICAgICAgICA8Q3VzdG9tRm9ybVxuICAgICAgICAgIHN0YXR1cz17c3RhdHVzfVxuICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAgICAgb25WYWxpZGF0ZWQ9eyhmb3JtRGF0YSkgPT4gc3Vic2NyaWJlKGZvcm1EYXRhKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUb3BOYXZPbmUgZnJvbSBcIi4vdG9wLW5hdi9Ub3BOYXZPbmVcIjtcbmltcG9ydCBNZW51T25lIGZyb20gXCIuL21lbnUvTWVudU9uZVwiO1xuaW1wb3J0IEZ1bmN0aW9uTWVudU9uZSBmcm9tIFwiLi9mdW5jdGlvbi1tZW51L0Z1bmN0aW9uTWVudU9uZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJPbmUoeyBhY3RpdmVIZWFkZXJDb2xsYXBzZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUb3BOYXZPbmUgLz5cbiAgICAgIDxNZW51T25lIC8+XG4gICAgICA8RnVuY3Rpb25NZW51T25lIGFjdGl2ZUhlYWRlckNvbGxhcHNlPXthY3RpdmVIZWFkZXJDb2xsYXBzZX0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IERvd25PdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5sZXQgY2F0ZWdvcmllcyA9IFtcbiAgeyBuYW1lOiBcIkZyZXNoIE1lYXRcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbiAgeyBuYW1lOiBcIlZlZ2V0YWJsZXNcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbiAgeyBuYW1lOiBcIkZydWl0ICYgTnV0IEdpZnRzXCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXG4gIHsgbmFtZTogXCJGcmVzaCBCZXJyaWVzXCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXG4gIHsgbmFtZTogXCJPY2VhbiBGb29kc1wiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxuICB7IG5hbWU6IFwiQnV0dGVyICYgRWdnc1wiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxuICB7IG5hbWU6IFwiRmFzdGZvb2RcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbiAgeyBuYW1lOiBcIkZyZXNoIE9uaW9uXCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXG4gIHsgbmFtZTogXCJQYXBheWF5YSAmIENyaXNwc1wiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxuICB7IG5hbWU6IFwiT2F0bWVhbFwiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxuICB7IG5hbWU6IFwiRnJlc2ggQmFuYW5hc1wiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxuXTtcblxuZnVuY3Rpb24gQ2F0ZWdvcnlDb2xhcHBzZSh7IGFjdGl2ZSB9KSB7XG4gIGNvbnN0IHsgUGFuZWwgfSA9IENvbGxhcHNlO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktY29sbGFwc2VcIj5cbiAgICAgIDxDb2xsYXBzZVxuICAgICAgICBib3JkZXJlZD17ZmFsc2V9XG4gICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9e2FjdGl2ZSA/IFwiMVwiIDogbnVsbH1cbiAgICAgICAgZXhwYW5kSWNvbj17KHsgaXNBY3RpdmUgfSkgPT4gKFxuICAgICAgICAgIDxEb3duT3V0bGluZWQgcm90YXRlPXtpc0FjdGl2ZSA/IC0xODAgOiAwfSAvPlxuICAgICAgICApfVxuICAgICAgICBleHBhbmRJY29uUG9zaXRpb249XCJyaWdodFwiXG4gICAgICA+XG4gICAgICAgIDxQYW5lbFxuICAgICAgICAgIGhlYWRlcj1cIkFsbCBkZXBhcnRtZW50c1wiXG4gICAgICAgICAga2V5PVwiMVwiXG4gICAgICAgICAgZXh0cmE9ezxpIGNsYXNzTmFtZT1cImZhciBmYS1iYXJzXCIgLz59XG4gICAgICAgID5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvUGFuZWw+XG4gICAgICA8L0NvbGxhcHNlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENhdGVnb3J5Q29sYXBwc2UpO1xuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlVG90YWxQcmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc2hvcFV0aWxzXCI7XG5cbmZ1bmN0aW9uIEZ1bmN0aW9uSXRlbXMoeyBoaWRlVG90YWwsIGhpZGVXaXNobGlzdCB9KSB7XG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY3Rpb24taXRlbXNcIj5cbiAgICAgIHshaGlkZVdpc2hsaXN0ICYmIChcbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avd2lzaGxpc3RcIn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZnVuY3Rpb24taXRlbXMtaXRlbVwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9oZWFydF9hbHRcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKX1cblxuICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3AvY2FydFwifT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZnVuY3Rpb24taXRlbXMtaXRlbVwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25fYmFnX2FsdFwiIC8+XG5cbiAgICAgICAgICB7IWhpZGVUb3RhbCAmJlxuICAgICAgICAgICAgKGNhcnRTdGF0ZS5kYXRhID8gKFxuICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0Q3VycmVuY3koY2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUuZGF0YSkpfTwvc3Bhbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzcGFuPntmb3JtYXRDdXJyZW5jeSgwKX08L3NwYW4+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZ1bmN0aW9uSXRlbXMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgTW9iaWxlTmF2aWdhdG9yIGZyb20gXCIuL01vYmlsZU5hdmlnYXRvclwiO1xuXG5mdW5jdGlvbiBNb2JpbGVNZW51T3BlbmVyKCkge1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uU2hvd0RyYXdlciA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xuICB9O1xuICBjb25zdCBvbkNsb3NlRHJhd2VyID0gKCkgPT4ge1xuICAgIHNldFZpc2libGUoZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YSBvbkNsaWNrPXtvblNob3dEcmF3ZXJ9IGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlLW9wZW5lclwiIGhyZWY9XCIjXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCIgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgdGl0bGU9XCJDbG9zZVwiXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgY2xvc2FibGU9e3RydWV9XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2VEcmF3ZXJ9XG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxuICAgICAgICB3aWR0aD17MzIwfVxuICAgICAgPlxuICAgICAgICA8TW9iaWxlTmF2aWdhdG9yIC8+XG4gICAgICA8L0RyYXdlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhNb2JpbGVNZW51T3BlbmVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBuYXZpZ2F0b3JEYXRhIGZyb20gXCIuLi8uLi8uLi9kYXRhL25hdmlnYXRvci5qc29uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uLy4uL290aGVyL1NvY2lhbEljb25zXCI7XG5cbmZ1bmN0aW9uIE1vYmlsZU5hdmlnYXRvcigpIHtcbiAgY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIm1haWxcIik7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIFwiLCBlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudDogZS5rZXkgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LW1vYmlsZVwiPlxuICAgICAgPE1lbnVcbiAgICAgICAgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtbmF2aWdhdG9yXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfVxuICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgID5cbiAgICAgICAgPFN1Yk1lbnUga2V5PVwiaG9tZXBhZ2VcIiB0aXRsZT17bmF2aWdhdG9yRGF0YS5IT01FLnRpdGxlfT5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5IT01FLnN1Yk1lbnUubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgIDxhPiB7aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgIDxTdWJNZW51IGtleT1cInNob3BcIiB0aXRsZT17bmF2aWdhdG9yRGF0YS5TSE9QLnRpdGxlfT5cbiAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzaG9wIGxheW91dFwiIHRpdGxlPVwiTGF5b3V0IHNob3BcIj5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5sYXlvdXQubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPiB7aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzaG9wIGRldGFpbFwiIHRpdGxlPVwiRGV0YWlsIHNob3BcIj5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5kZXRhaWwubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPiB7aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzaG9wIHBhZ2VzXCIgdGl0bGU9XCJQYWdlcyBzaG9wXCI+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUucGFnZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPiB7aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICA8U3ViTWVudSBrZXk9XCJwYWdlc1wiIHRpdGxlPXtuYXZpZ2F0b3JEYXRhLlBBR0VTLnRpdGxlfT5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5QQUdFUy5zdWJNZW51Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICA8TWVudS5JdGVtIGtleT1cImFsaXBheVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkFCT1VULmhyZWZ9PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYW50LmRlc2lnblwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5BQk9VVC50aXRsZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPC9NZW51PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1mdW5jdGlvbnNcIj5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL290aGVyL2xvZ2luXCJ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlLWZ1bmN0aW9uc19fbG9naW5cIj5Mb2dpbiAvIFJlZ2lzdGVyPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxTb2NpYWxJY29ucyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTW9iaWxlTmF2aWdhdG9yKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBuYXZpZ2F0b3JEYXRhIGZyb20gXCIuLi8uLi8uLi9kYXRhL25hdmlnYXRvci5qc29uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIE5hdmlnYXRvcigpIHtcbiAgY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIm1haWxcIik7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIFwiLCBlKTtcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbSAtdG9nZ2xlYWJsZVwiPlxuICAgICAgICA8TGluayBocmVmPXtuYXZpZ2F0b3JEYXRhLkhPTUUuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkhPTUUudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5IT01FLnN1Yk1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbSAtdG9nZ2xlYWJsZVwiPlxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5TSE9QLmhyZWZ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5TSE9QLnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51IC13aWRlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnUtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxoNT5MYXlvdXQgc2hvcDwvaDU+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUubGF5b3V0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51LWdyb3VwXCI+XG4gICAgICAgICAgICA8aDU+RGV0YWlsIHNob3A8L2g1PlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LmRldGFpbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudS1ncm91cFwiPlxuICAgICAgICAgICAgPGg1PlBhZ2VzIHNob3A8L2g1PlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LnBhZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW0gLXRvZ2dsZWFibGVcIj5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuQkxPRy5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuQkxPRy50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudVwiPlxuICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLkJMT0cuc3ViTWVudS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtIC10b2dnbGVhYmxlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLlBBR0VTLmhyZWZ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5QQUdFUy50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudVwiPlxuICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlBBR0VTLnN1Yk1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiPlxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5BQk9VVC5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuQUJPVVQudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTmF2aWdhdG9yKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VsZWN0LCBBdXRvQ29tcGxldGUsIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gXCIuLi8uLi8uLi9kYXRhL2NhdGVnb3JpZXMuanNvblwiO1xuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXNlRGVib3VuZFwiO1xuaW1wb3J0IHsgZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc2hvcEFjdGlvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gU2VhcmNoRm9ybSh7IGVudGVyQnV0dG9uID0gXCJTZWFyY2hcIiwgaGlkZVNlbGVjdCB9KSB7XG4gIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtjdXJyZW50U2VhcmNoLCBzZXRDdXJyZW50U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY3VycmVudENhdGVnb3J5LCBzZXRDdXJyZW50Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGRlYm91bmRWYWx1ZSA9IHVzZURlYm91bmNlKGN1cnJlbnRTZWFyY2gsIDMwMCk7XG4gIGNvbnN0IHNob3BTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xuICBjb25zdCB7IHNlYXJjaGVkUHJvZHVjdHMgfSA9IHNob3BTdGF0ZTtcbiAgY29uc3Qgb25DaGFuZ2UgPSAodmFsKSA9PiB7XG4gICAgc2V0Q3VycmVudFNlYXJjaCh2YWwpO1xuICB9O1xuICBjb25zdCBvblNlbGVjdE9wdGlvbiA9ICh2YWx1ZSwgb3B0aW9uKSA9PiB7XG4gICAgc2V0Q3VycmVudFNlYXJjaCh2YWx1ZSk7XG4gIH07XG4gIGNvbnN0IG9uU2VhcmNoID0gKHZhbCkgPT4ge1xuICAgIGlmICghY3VycmVudFNlYXJjaCB8fCBjdXJyZW50U2VhcmNoID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6IHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIixcbiAgICAgICAgcXVlcnk6IHsgcTogY3VycmVudFNlYXJjaCB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkNob29zZUNhdGVvZ3J5ID0gKHZhbCkgPT4ge1xuICAgIHNldEN1cnJlbnRDYXRlZ29yeSh2YWwpO1xuICB9O1xuICBjb25zdCBvcHRpb25zID1cbiAgICBzZWFyY2hlZFByb2R1Y3RzLmRhdGEubGVuZ3RoID4gMCAmJlxuICAgIHNlYXJjaGVkUHJvZHVjdHMuZGF0YS5tYXAoKGl0ZW0pID0+ICh7IHZhbHVlOiBpdGVtLm5hbWUgfSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBmZXRjaFNlYXJjaGVkUHJvZHVjdFJlcXVlc3Qoe1xuICAgICAgICBpbnB1dDogY3VycmVudFNlYXJjaCxcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICBjYXRlZ29yeTogY3VycmVudENhdGVnb3J5LFxuICAgICAgfSlcbiAgICApO1xuICB9LCBbZGVib3VuZFZhbHVlLCBjdXJyZW50Q2F0ZWdvcnldKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgeyFoaWRlU2VsZWN0ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtLXNlbGVjdFwiPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2N1cnJlbnRDYXRlZ29yeX1cbiAgICAgICAgICAgICAgc3VmZml4SWNvbj17PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWFuZ2xlLWRvd25cIiAvPn1cbiAgICAgICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaG9vc2VDYXRlb2dyeX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPkFsbCBjYXRlZ29yaWVzPC9PcHRpb24+XG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS1pbnB1dFwiPlxuICAgICAgICAgIDxBdXRvQ29tcGxldGVcbiAgICAgICAgICAgIGJhY2tmaWxsXG4gICAgICAgICAgICB2YWx1ZT17Y3VycmVudFNlYXJjaH1cbiAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdE9wdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dFZhbHVlLCBvcHRpb24pID0+XG4gICAgICAgICAgICAgIG9wdGlvbi52YWx1ZS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoaW5wdXRWYWx1ZS50b1VwcGVyQ2FzZSgpKSAhPT1cbiAgICAgICAgICAgICAgLTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQuU2VhcmNoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgbmVlZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGVudGVyQnV0dG9uPXtlbnRlckJ1dHRvbn1cbiAgICAgICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICBsb2FkaW5nPXtzZWFyY2hlZFByb2R1Y3RzLmxvYWRpbmd9XG4gICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9BdXRvQ29tcGxldGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2VhcmNoRm9ybSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IENhdGVnb3J5Q29sYXBwc2UgZnJvbSBcIi4uL2VsZW1lbnRzL0NhdGVnb3J5Q29sYXBwc2VcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gXCIuLi9lbGVtZW50cy9TZWFyY2hGb3JtXCI7XG5cbmZ1bmN0aW9uIEZ1bmN0aW9uTWVudU9uZSh7IGFjdGl2ZUhlYWRlckNvbGxhcHNlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1mdW5jdGlvbi1tZW51LW9uZVwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jdGlvbi1tZW51LXdyYXBwZXJcIj5cbiAgICAgICAgICA8Um93IGd1dHRlcj17MzB9PlxuICAgICAgICAgICAgPENvbCB4cz17eyBzcGFuOiAyNCwgb3JkZXI6IDIgfX0gbWQ9e3sgc3BhbjogOCwgb3JkZXI6IDEgfX0gbGc9ezZ9PlxuICAgICAgICAgICAgICA8Q2F0ZWdvcnlDb2xhcHBzZSBhY3RpdmU9e2FjdGl2ZUhlYWRlckNvbGxhcHNlfSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgIHhzPXt7IHNwYW46IDI0LCBvcmRlcjogMSB9fVxuICAgICAgICAgICAgICBtZD17eyBzcGFuOiAxNiwgb3JkZXI6IDIgfX1cbiAgICAgICAgICAgICAgbGc9ezE4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZ1bmN0aW9uTWVudU9uZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi4vZWxlbWVudHMvTmF2aWdhdG9yXCI7XG5pbXBvcnQgRnVuY3Rpb25JdGVtcyBmcm9tIFwiLi4vZWxlbWVudHMvRnVuY3Rpb25JdGVtc1wiO1xuaW1wb3J0IE1vYmlsZU1lbnVPcGVuZXIgZnJvbSBcIi4uL2VsZW1lbnRzL01vYmlsZU1lbnVPcGVuZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudU9uZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgLXN0eWxlLW9uZVwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXdyYXBwZXJcIj5cbiAgICAgICAgICA8TW9iaWxlTWVudU9wZW5lciAvPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LWxvZ29cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIn1cbiAgICAgICAgICAgICAgICBhbHQ9XCJPZ2FtaSBsb2dvXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPE5hdmlnYXRvciAvPlxuICAgICAgICAgIDxGdW5jdGlvbkl0ZW1zIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi4vLi4vb3RoZXIvU29jaWFsSWNvbnNcIjtcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IGZsYWdEYXRhID0gW1xuICB7IG5hbWU6IFwiZW5nbGlzaFwiLCBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvZmxhZy11c2EucG5nXCIgfSxcbiAgeyBuYW1lOiBcImphcGFuZXNlXCIsIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2hlYWRlci9mbGFnLWpwLnBuZ1wiIH0sXG4gIHsgbmFtZTogXCJ2aWV0bmFtZXNlXCIsIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2hlYWRlci9mbGFnLXZuLnBuZ1wiIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BOYXZPbmUoeyBjb250YWluZXJGbHVpZCB9KSB7XG4gIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZVwiPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD17Y29udGFpbmVyRmx1aWR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtb25lLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtb25lLWxlZnRcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZVwiIC8+XG4gICAgICAgICAgICAgICAgcml0aWtAa29uZmF2LmNvbVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lLWFsdFwiIC8+XG4gICAgICAgICAgICAgICAgKzY1IDExLjE4OC44ODhcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodF9faXRlbVwiPlxuICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodF9faXRlbVwiPlxuICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cImVuZ2xpc2hcIiB3aWR0aD17MTI1fSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIHtmbGFnRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTMgLyAxNiArIFwiZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCAvIDE2ICsgXCJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogLTMgLyAxNiArIFwiZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1IC8gMTYgKyBcImVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmUtcmlnaHRfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2F1dGgvbG9naW5cIn0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBCYWNrVG9wIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IEhlYWRlck9uZSBmcm9tIFwiLi4vaGVhZGVyL0hlYWRlck9uZVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vZm9vdGVyL0Zvb3RlclwiO1xuaW1wb3J0IHdpdGhIZWFkZXJTY3JvbGwgZnJvbSBcIi4uLy4uL2NvbW1vbi93aXRoSGVhZGVyU2Nyb2xsXCI7XG5cbmNvbnN0IFNjcm9sbGVkSGVhZGVyID0gd2l0aEhlYWRlclNjcm9sbChIZWFkZXJPbmUpO1xuXG5mdW5jdGlvbiBMYXlvdXRPbmUoeyB0aXRsZSwgY2hpbGRyZW4sIGhlYWRlckNsYXNzLCBmb290ZXJDbGFzcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U2Nyb2xsZWRIZWFkZXIgY2xhc3NOYW1lPXtoZWFkZXJDbGFzc30gLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxGb290ZXIgY2xhc3NOYW1lPXtmb290ZXJDbGFzc30gLz5cbiAgICAgIDxCYWNrVG9wIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTGF5b3V0T25lKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHsgZmx1aWQsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Zmx1aWQgPyBcImNvbnRhaW5lci1mbHVpZFwiIDogXCJjb250YWluZXJcIn0+e2NoaWxkcmVufTwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2tlbGV0b24sIEVtcHR5IH0gZnJvbSBcImFudGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmV0Y2hEYXRhSGFuZGxlKHtcbiAgZGF0YSxcbiAgZXJyb3JNZXNzYWdlID0gXCJHZXQgcHJvZHVjdHMgZmFpbCwgcGxlYXNlIHRyeSBhZ2FpblwiLFxuICBlbXB0eURlc2NyaXB0aW9uID0gXCJObyBwcm9kdWN0IGluIHRoaXMgY2F0ZWdvcnlcIixcbiAgcmVuZGVyRGF0YSxcbn0pIHtcbiAgcmV0dXJuIGRhdGEubG9hZGluZyA/IChcbiAgICA8U2tlbGV0b24gYWN0aXZlIC8+XG4gICkgOiBkYXRhLmVycm9yID8gKFxuICAgIDxoMz57ZXJyb3JNZXNzYWdlfTwvaDM+XG4gICkgOiBkYXRhLmRhdGEubGVuZ3RoID4gMCA/IChcbiAgICByZW5kZXJEYXRhICYmIHJlbmRlckRhdGEoZGF0YS5kYXRhKVxuICApIDogKFxuICAgIDxFbXB0eVxuICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XG4gICAgICBkZXNjcmlwdGlvbj17ZW1wdHlEZXNjcmlwdGlvbn1cbiAgICAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSBcIi4uLy4uL2NvbW1vbi91c2VEZWJvdW5kXCI7XG5cbmZ1bmN0aW9uIFF1YW50aXR5U2VsZWN0b3Ioe1xuICBtaW4sXG4gIG1heCxcbiAgZGVmYXVsdFZhbHVlID0gMSxcbiAgY2xhc3NOYW1lLFxuICBvbkNoYW5nZSxcbiAgb25EZWNyZWFzZSxcbiAgb25JbmNyZWFzZSxcbn0pIHtcbiAgY29uc3QgZmlyc3RVcGRhdGUgPSB1c2VSZWYodHJ1ZSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKTtcbiAgY29uc3QgZGVib3VuZFZhbHVlID0gdXNlRGVib3VuY2UodmFsdWUsIDMwMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZpcnN0VXBkYXRlLmN1cnJlbnQpIHtcbiAgICAgIGZpcnN0VXBkYXRlLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UodmFsdWUpO1xuICB9LCBbZGVib3VuZFZhbHVlXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VmFsdWUoZGVmYXVsdFZhbHVlKTtcbiAgfSwgW2RlZmF1bHRWYWx1ZV0pO1xuICBjb25zdCBkZWNyZWFzZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChtaW4gJiYgdmFsdWUgPD0gbWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSA8PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9uRGVjcmVhc2UgJiYgb25EZWNyZWFzZSgpO1xuICAgICAgc2V0VmFsdWUodmFsdWUgLSAxKTtcbiAgICB9XG4gIH0sIFt2YWx1ZV0pO1xuICBjb25zdCBpbmNyZWFzZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh2YWx1ZSA+PSBtYXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb25JbmNyZWFzZSAmJiBvbkluY3JlYXNlKCk7XG4gICAgc2V0VmFsdWUodmFsdWUgKyAxKTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BxdWFudGl0eS1zZWxlY3RvciAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHktc2VsZWN0b3ItbnVtYmVyXCI+e3ZhbHVlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eS1zZWxlY3Rvci1jb250cm9sbGVyXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwibGlua1wiXG4gICAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlIDw9IG1pbiB8fCB2YWx1ZSA8PSAxfVxuICAgICAgICAgIG9uQ2xpY2s9e2RlY3JlYXNlVmFsdWV9XG4gICAgICAgID5cbiAgICAgICAgICAtXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgZGlzYWJsZWQ9e3ZhbHVlID49IG1heH0gb25DbGljaz17aW5jcmVhc2VWYWx1ZX0+XG4gICAgICAgICAgK1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFF1YW50aXR5U2VsZWN0b3IpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2lhbEljb25zKHsgY2xhc3NOYW1lLCB0eXBlID0gXCJsaW5rXCIsIHNoYXBlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtgc29jaWFsLWljb25zICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW52aXNpb25cIj48L2k+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXBpbnRlcmVzdC1wXCI+PC9pPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcblxuZnVuY3Rpb24gUGFydG5lck9uZSh7IHN0eWxlIH0pIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1vbmVcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLW9uZS13cmFwcGVyXCI+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheSg4KSwgKGUsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xuICAgICAgICAgICAgICAgICAgICBgL2Fzc2V0cy9pbWFnZXMvc2VjdGlvbnMvcGFydG5lcnMvJHtpICsgMX0ucG5nYFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiUGFydG5lciBsb2dvXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQYXJ0bmVyT25lKTtcbiIsImltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmZ1bmN0aW9uIFNob3BPcmRlclN0ZXAoeyBjdXJyZW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atb3JkZXItc3RlcFwiPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs4fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BzdGVwLWJsb2NrICR7Y2xhc3NOYW1lcyh7IGFjdGl2ZTogY3VycmVudCA9PT0gMSB9KX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcFwiPlxuICAgICAgICAgICAgICA8aDI+U2hvcHBpbmcgQ2FydDwvaDI+XG4gICAgICAgICAgICAgIDxzcGFuPjAxPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezh9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHN0ZXAtYmxvY2sgJHtjbGFzc05hbWVzKHsgYWN0aXZlOiBjdXJyZW50ID09PSAyIH0pfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwXCI+XG4gICAgICAgICAgICAgIDxoMj5DaGVja291dDwvaDI+XG4gICAgICAgICAgICAgIDxzcGFuPjAyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezh9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHN0ZXAtYmxvY2sgJHtjbGFzc05hbWVzKHsgYWN0aXZlOiBjdXJyZW50ID09PSAzIH0pfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwXCI+XG4gICAgICAgICAgICAgIDxoMj5PcmRlciBjb21wbGV0ZTwvaDI+XG4gICAgICAgICAgICAgIDxzcGFuPjAzPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2hvcE9yZGVyU3RlcCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBCdXR0b24sIFRvb2x0aXAsIE1vZGFsLCBGb3JtLCBJbnB1dCwgbWVzc2FnZSwgQnJlYWRjcnVtYiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7XG4gIG9uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0LFxuICBvbkNoYW5nZVByb2R1Y3RDYXJ0UXVhbnRpdHksXG59IGZyb20gXCIuLi8uLi9jb21tb24vY2FydFNlcnZpY2VzXCI7XG5pbXBvcnQgeyBmZXRjaENhcnRSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtcbiAgY2FsY3VsYXRlVG90YWxQcmljZSxcbiAgY2hlY2tQcm9kdWN0Q2FydFF1YW50aXR5LFxufSBmcm9tIFwiLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xuaW1wb3J0IExheW91dE9uZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0T25lXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IEZldGNoRGF0YUhhbmRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vdGhlci9GZXRjaERhdGFIYW5kbGVcIjtcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL290aGVyL1F1YW50aXR5U2VsZWN0b3JcIjtcbmltcG9ydCBTaG9wT3JkZXJTdGVwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3AvU2hvcE9yZGVyU3RlcFwiO1xuaW1wb3J0IFBhcnRuZXJPbmUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvcGFydG5lcnMvUGFydG5lck9uZVwiO1xuXG5mdW5jdGlvbiBjYXJ0KCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFttb2RhbFN0YXRlLCBzZXRNb2RhbFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBcIkFkZCBzb21lIG1lc3NhZ2VcIixcbiAgICBjYXJ0SWQ6IG51bGwsXG4gIH0pO1xuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoQ2FydFJlcXVlc3QoKSk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgc2hvd01vZGFsID0gKG1lc3NhZ2UsIGNhcnRJZCkgPT4ge1xuICAgIHNldE1vZGFsU3RhdGUoeyAuLi5tb2RhbFN0YXRlLCB2aXNpYmxlOiB0cnVlLCBtZXNzYWdlOiBtZXNzYWdlLCBjYXJ0SWQgfSk7XG4gIH07XG4gIGNvbnN0IG9uQ2hhbmdlUXVhbnRpdHkgPSAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcbiAgICBvbkNoYW5nZVByb2R1Y3RDYXJ0UXVhbnRpdHkoe1xuICAgICAgcHJvZHVjdCxcbiAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgIG9uU3VjY2VzczogKCkgPT4gZGlzcGF0Y2goZmV0Y2hDYXJ0UmVxdWVzdCgpKSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlT2sgPSAoZSkgPT4ge1xuICAgIG9uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0KHtcbiAgICAgIGNhcnRJZDogbW9kYWxTdGF0ZS5jYXJ0SWQsXG4gICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgc2V0TW9kYWxTdGF0ZSh7IC4uLm1vZGFsU3RhdGUsIHZpc2libGU6IGZhbHNlIH0pO1xuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBjYXJ0XCIpO1xuICAgICAgICBkaXNwYXRjaChmZXRjaENhcnRSZXF1ZXN0KCkpO1xuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IChtZXMpID0+IHtcbiAgICAgICAgc2V0TW9kYWxTdGF0ZSh7IC4uLm1vZGFsU3RhdGUsIHZpc2libGU6IGZhbHNlIH0pO1xuICAgICAgICBtZXNzYWdlLmVycm9yKG1lcyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoZSkgPT4ge1xuICAgIHNldE1vZGFsU3RhdGUoeyAuLi5tb2RhbFN0YXRlLCB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgfTtcbiAgY29uc3Qgb25TdWJtaXRDb3Vwb24gPSAodmFsdWVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzOlwiLCB2YWx1ZXMpO1xuICB9O1xuICBjb25zdCBvblN1Ym1pdENvdXBvbkZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0T25lIHRpdGxlPVwiU2hvcHBpbmcgQ2FydFwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJyZWFkY3J1bWIgc2VwYXJhdG9yPVwiPlwiPlxuICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5TaG9wPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5DYXJ0PC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgICAgPFNob3BPcmRlclN0ZXAgY3VycmVudD17MX0gLz5cbiAgICAgICAgPEZldGNoRGF0YUhhbmRsZVxuICAgICAgICAgIGVtcHR5RGVzY3JpcHRpb249XCJObyBwcm9kdWN0IGluIGNhcnRcIlxuICAgICAgICAgIGRhdGE9e2NhcnRTdGF0ZX1cbiAgICAgICAgICByZW5kZXJEYXRhPXsoZGF0YSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgIDxjb2xncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGNvbCBzdHlsZT17eyB3aWR0aDogMTUwIC8gMTYgKyBcImVtXCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGNvbCBzdHlsZT17eyB3aWR0aDogXCIyNSVcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPXt7IHdpZHRoOiBcIjIwJVwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9e3sgd2lkdGg6IFwiMjAlXCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGNvbCBzdHlsZT17eyB3aWR0aDogXCIyMCVcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPXt7IHdpZHRoOiBcIjE1JVwiIH19IC8+XG4gICAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkltYWdlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJvZHVjdCBOYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNsZWFyIGNhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSBhbGxsIHByb2R1Y3QgZnJvbSBjYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFsIGZhLXRpbWVzXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1pbWctd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2R1Y3QgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS1uYW1lXCI+e2l0ZW0ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShpdGVtLnByaWNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWFudGl0eVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBvbkNoYW5nZVF1YW50aXR5KGl0ZW0sIHZhbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLmNhcnRRdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUtdG90YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KGl0ZW0ucHJpY2UgKiBpdGVtLmNhcnRRdWFudGl0eSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXJlbW92ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlJlbW92ZSBwcm9kdWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSB0aGlzIHByb2R1Y3QgZnJvbSBjYXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8aSBjbGFzc05hbWU9XCJmYWwgZmEtdGltZXNcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWZvb3Rlcl9fcHJvbW9cIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdENvdXBvbn1cbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uU3VibWl0Q291cG9uRmFpbGVkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb21vXCJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgcHJvdmlkZSBhIGNvdXBvbiBjb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJDb3Vwb24gY29kZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwbHkgY291cG9uXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY2FydC1mb290ZXJfX3VwZGF0ZVwiIHR5cGU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8YT5VcGRhdGUgY2FydDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC10b3RhbFwiPlxuICAgICAgICAgICAgICAgIDxoNT5DYXJ0IHRvdGFsPC9oNT5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+U1VCVE9UQUw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZS5kYXRhKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5TSElQUElORzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnJlZSBzaGlwcGluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNhbGN1bGF0ZSBzaGlwcGluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3koY2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUuZGF0YSkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXRvdGFsX19jaGVja291dFwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3AvY2hlY2tvdXRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGE+UHJvY2VlZCB0byBDaGVja291dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj4tPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIjXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhPkNoZWNrIG91dCB3aXRoIFBheVBhbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFBhcnRuZXJPbmUgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgdmlzaWJsZT17bW9kYWxTdGF0ZS52aXNpYmxlfVxuICAgICAgICBvbk9rPXtoYW5kbGVPa31cbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cbiAgICAgID5cbiAgICAgICAgPHA+e21vZGFsU3RhdGUubWVzc2FnZX08L3A+XG4gICAgICA8L01vZGFsPlxuICAgIDwvTGF5b3V0T25lPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKGNhcnQpO1xuIiwiZXhwb3J0IGNvbnN0IFNIT1AgPSB7XG4gIEZFVENIX1BST0RVQ1RTOiBcIkZFVENIX1BST0RVQ1RTXCIsXG4gIEZFVENIX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTXCIsXG4gIEZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUUzogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU1wiLFxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTXCIsXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfREFMRV9QUk9EVUNUUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTXCIsXG4gIEZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTDogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTFwiLFxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTDogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMXCIsXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTXCIsXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBCTE9HID0ge1xuICBGRVRDSF9QT1NUUzogXCJGRVRDSF9QT1NUU1wiLFxuICBGRVRDSF9QT1NUU19TVUNDRVNTOiBcIkZFVENIX1BPU1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUE9TVFNfRkFJTDogXCJGRVRDSF9QT1NUU19GQUlMXCIsXG4gIEZFVENIX1BPU1RfREVUQUlMOiBcIkZFVENIX1BPU1RfREVUQUlMXCIsXG4gIEZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1M6IFwiRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTU1wiLFxuICBGRVRDSF9QT1NUX0RFVEFJTF9GQUlMOiBcIkZFVENIX1BPU1RfREVUQUlMX0ZBSUxcIixcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU1wiLFxuICBGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUzogXCJGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9SRUNFTlRfUE9TVFNfRkFJTDogXCJGRVRDSF9SRUNFTlRfUE9TVFNfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFNIT1BfRklMVEVSID0ge1xuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcbiAgU0VUX1NPUlQ6IFwiU0VUX1NPUlRcIixcbiAgU0VUX1NIT1c6IFwiU0VUX1NIT1dcIixcbiAgU0VUX1ZJRVc6IFwiU0VUX1ZJRVdcIixcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxuICBTRVRfQ09MT1I6IFwiU0VUX0NPTE9SXCIsXG4gIFNFVF9TSVpFOiBcIlNFVF9TSVpFXCIsXG4gIFNFVF9UQUc6IFwiU0VUX1RBR1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IENBUlQgPSB7XG4gIEZFVENIX0NBUlQ6IFwiRkVUQ0hfQ0FSVFwiLFxuICBGRVRDSF9DQVJUX1NVQ0NFU1M6IFwiRkVUQ0hfQ0FSVF9TVUNDRVNTXCIsXG4gIEZFVENIX0NBUlRfRkFJTDogXCJGRVRDSF9DQVJUX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBXSVNITElTVCA9IHtcbiAgRkVUQ0hfV0lTSExJU1Q6IFwiRkVUQ0hfV0lTSExJU1RcIixcbiAgRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUzogXCJGRVRDSF9XSVNITElTVF9TVUNDRVNTXCIsXG4gIEZFVENIX1dJU0hMSVNUX0ZBSUw6IFwiRkVUQ0hfV0lTSExJU1RfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IENPTVBBUkUgPSB7XG4gIEFERF9UT19DT01QQVJFOiBcIkFERF9UT19DT01QQVJFXCIsXG4gIFJFTU9WRV9GUk9NX0NPTVBBUkU6IFwiUkVNT1ZFX0ZST01fQ09NUEFSRVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IEJMT0dfRklMVEVSID0ge1xuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxuICBTRVRfVEFHOiBcIlNFVF9UQUdcIixcbn07XG4iLCJpbXBvcnQgeyBDQVJUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmltcG9ydCAqIGFzIGNhcnRBcGlzIGZyb20gXCIuLi8uLi9hcGlzL2NhcnRcIjtcblxuLy9HZXQgY2FydCBkYXRhXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0ID0gKCkgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJULFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0RmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRSZXF1ZXN0ID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hDYXJ0KCkpO1xuICAgIGNhcnRBcGlzXG4gICAgICAuZmV0Y2hDYXJ0RGF0YSgpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFN1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaENhcnRGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgU0hPUCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuaW1wb3J0ICogYXMgc2hvcEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvc2hvcFwiO1xuXG4vL0dldCBhbGwgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgcHJvZHVjdENvdW50KSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICAgIHByb2R1Y3RDb3VudCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RTX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hQcm9kdWN0c0RhdGEocXVlcnkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhLCByZXMuaGVhZGVyc1tcIngtdG90YWwtY291bnRcIl0pKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgc2FsZSBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0cygpKTtcbiAgICBzaG9wQXBpc1xuICAgICAgLmZldGNoU2FsZVByb2R1Y3RzRGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTYWxlUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTYWxlUHJvZHVjdHNGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuXG4vL0dldCBmZWF0dXJlZCBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0cyA9ICgpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoRmVhdHVyZWRQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IGJlc3Qgc2VsbGVyIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IGJlc3Qgc2VsbGVyIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hEYWxlUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaERhbGVQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaERhbGVQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IHByb2R1Y3QgZGV0YWlsXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxSZXF1ZXN0ID0gKHNsdWcpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdERldGFpbCgpKTtcbiAgICBzaG9wQXBpc1xuICAgICAgLmZldGNoUHJvZHVjdERldGFpbERhdGEoc2x1ZylcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0RGV0YWlsU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdERldGFpbEZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IHNlYXJjaGVkIHByb2R1Y3RcblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0ID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0RmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFNlYXJjaGVkUHJvZHVjdCgpKTtcbiAgICBzaG9wQXBpc1xuICAgICAgLmZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hlZFByb2R1Y3RTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hlZFByb2R1Y3RGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=