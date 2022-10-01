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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/shop/shop-3-column.js");
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

/***/ "./src/apis/wishlist.js":
/*!******************************!*\
  !*** ./src/apis/wishlist.js ***!
  \******************************/
/*! exports provided: fetchWishlistData, fetchProductIdWishlistData, addWishlistData, removeWishlistData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishlistData", function() { return fetchWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdWishlistData", function() { return fetchProductIdWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWishlistData", function() { return addWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWishlistData", function() { return removeWishlistData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/wishlist";
const fetchWishlistData = () => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("id", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addWishlistData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${pid}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
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

/***/ "./src/common/wishlistServices.js":
/*!****************************************!*\
  !*** ./src/common/wishlistServices.js ***!
  \****************************************/
/*! exports provided: onAddProductToWishlist, onRemoveProductFromWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddProductToWishlist", function() { return onAddProductToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRemoveProductFromWishlist", function() { return onRemoveProductFromWishlist; });
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/wishlist */ "./src/apis/wishlist.js");

const onAddProductToWishlist = ({
  product,
  onSuccess,
  onError
}) => {
  Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["fetchProductIdWishlistData"])(product.id).then(res => {
    if (res.data.length === 0) {
      Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["addWishlistData"])(product).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Add product to wislist failed, please try again", err));
    } else {
      onError && onError("Product already in wishlist");
    }
  }).catch(err => onError && onError("Add product to wislist failed, please try again", err));
};
const onRemoveProductFromWishlist = ({
  productId,
  onSuccess,
  onError
}) => {
  if (productId && productId !== "" && productId !== null) {
    Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["removeWishlistData"])(productId).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Remove product fail, pleaser try again", err));
  }
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

/***/ "./src/components/detail/product/ProductDetailLayout.js":
/*!**************************************************************!*\
  !*** ./src/components/detail/product/ProductDetailLayout.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/ProductDetailImages */ "./src/components/detail/product/elements/ProductDetailImages.js");
/* harmony import */ var _elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/ProductDetailContent */ "./src/components/detail/product/elements/ProductDetailContent.js");
/* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/ProductDetailTab */ "./src/components/detail/product/elements/ProductDetailTab.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\detail\\product\\ProductDetailLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function ProductDetailLayout({
  data,
  type,
  hideTab,
  style
}) {
  if (type === "fluid") {
    return __jsx("div", {
      className: "product-detail",
      style: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      gutter: 30,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx(_elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "column",
      images: data.images,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 14,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx(_elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "fluid",
      data: data,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 24,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, !hideTab && __jsx(_elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fullDescription: data.fullDescription,
      specifications: data.specifications,
      reviews: data.reviews,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }))));
  }

  return __jsx("div", {
    className: "product-detail",
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    images: data.images,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 24,
    md: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, !hideTab && __jsx(_elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fullDescription: data.fullDescription,
    specifications: data.specifications,
    reviews: data.reviews,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailLayout));

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailContent.js":
/*!************************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailContent.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetailContent; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../other/QuantitySelector */ "./src/components/other/QuantitySelector.js");
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/cartServices */ "./src/common/cartServices.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











function ProductDetailContent({
  data,
  type
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: currentQuantity,
    1: setCurrentQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: addToCartLoading,
    1: setAddToCartLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cartReducer);
  const compareState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.compareReducer);
  const productInCompare = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkProductInWishlist"])(compareState, data.id);
  const avaiableQuantity = data.quantity - Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkProductCartQuantity"])(cartState.data, data.id);
  console.log(avaiableQuantity);

  const onAddToCart = (product, quantity) => {
    if (addToCartLoading) {
      return;
    }

    setAddToCartLoading(true);
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_8__["onAddProductToCart"])({
      product,
      quantity,
      onSuccess: data => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Product added to cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["fetchCartRequest"])());
      },
      onError: (mes, err) => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(mes);
        console.log(err);
      }
    });
  };

  const onAddToCompare = product => {
    if (productInCompare) {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__["removeFromCompare"])(product.id));
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error("Product removed from compare");
    } else {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__["addToCompare"])(product));
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Product added to compare");
    }
  };

  if (type === "fluid") {
    return __jsx("div", {
      className: "product-detail-content -wide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      xs: 24,
      sm: 24,
      xl: 16,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "product-detail-content__left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx("h5", {
      className: "product-type",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, data.category), __jsx("h2", {
      className: "product-detail-content__name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, data.name), __jsx("div", {
      className: "product-detail-content__description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem")), __jsx("ul", {
      className: "product-detail-content__meta",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, "SKU:"), " A1359"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, "Categories:"), " Fastfood"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 19
      }
    }, "Tag:"), " Food, Organic")), __jsx("div", {
      className: "product-detail-content__share",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, "Share link:"), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      xs: 24,
      sm: 24,
      xl: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "product-detail-content__right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "product-detail-content__delivery",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, "Free delivery"), __jsx("h3", {
      className: "product-detail-content__price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }, data.discount && __jsx("del", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 35
      }
    }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("div", {
      className: "product-detail-content__price-discount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }
    }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
      defaultValue: data.rate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    })))), __jsx(_other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onChange: val => setCurrentQuantity(val),
      max: avaiableQuantity,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "product-detail-content__actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      loading: addToCartLoading,
      onClick: () => onAddToCart(data, currentQuantity),
      shape: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      onClick: () => onAddToCompare(data),
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: productInCompare
      }),
      shape: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, "Add to compare")), __jsx("ul", {
      className: "product-detail-content__benefits",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, "Satisfaction 100% Guaranteed"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, "Free shipping on orders over $99"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, "14 day easy Return"))))));
  }

  return __jsx("div", {
    className: "product-detail-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }, __jsx("h5", {
    className: "product-type",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, data.category), __jsx("h2", {
    className: "product-detail-content__name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, data.name), __jsx("p", {
    className: "product-detail-content__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"), __jsx("div", {
    className: "product-detail-content__delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, "Free delivery"), __jsx("h3", {
    className: "product-detail-content__price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, data.discount && __jsx("del", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 27
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("div", {
    className: "product-detail-content__price-discount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
    defaultValue: data.rate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  })))), __jsx(_other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: val => setCurrentQuantity(val),
    max: avaiableQuantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "product-detail-content__actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    loading: addToCartLoading,
    onClick: () => onAddToCart(data, currentQuantity),
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: () => onAddToCompare(data),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: productInCompare
    }),
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, "Add to compare")), __jsx("div", {
    className: "product-detail-content__share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, "Share link:"), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  })));
}

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductDetailContent);

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailImages.js":
/*!***********************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailImages.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function ProductDetailImages({
  type,
  images
}) {
  const slider1Settings = {
    arrows: false
  };
  const slider2Settings = {
    arrows: false,
    slidesToShow: 3,
    focusOnSelect: true,
    vertical: type === "column" ? true : false,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [{
      breakpoint: 992,
      settings: {
        vertical: type === "column" && false
      }
    }]
  };
  const {
    0: nav1,
    1: setNav1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: nav2,
    1: setNav2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(); // if (type === "column") {
  //   return <h1>Column</h1>;
  // }

  return __jsx("div", {
    className: `product-detail-images ${classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "-column": type === "column"
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail-images-big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav2,
    ref: c => setNav1(c)
  }, slider1Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), images && images.map((img, index) => __jsx("div", {
    key: index,
    className: "slide-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "product-detail-images-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav1,
    ref: c => setNav2(c)
  }, slider2Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), images && images.map((img, index) => __jsx("div", {
    key: index,
    className: "slide-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailImages));

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailTab.js":
/*!********************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailTab.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailTab.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

const ReviewItem = ({
  data
}) => {
  console.log(data);
  return __jsx("div", {
    className: "product-detail-tab__reviews-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail-tab__reviews-item__avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "" + data.user.avatar,
    alt: "Customer avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    defaultValue: 5,
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "product-detail-tab__reviews-item__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, data.commentDate), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, data.user.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, data.review)));
};

function ProductDetailTab({
  fullDescription,
  specifications,
  reviews
}) {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx("div", {
    className: "product-detail-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "1",
    type: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(TabPane, {
    tab: "Description",
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, fullDescription)), __jsx(TabPane, {
    tab: "Specifications",
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__specifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "Weight"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, specifications.weight)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, "Dimensions"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, specifications.dimensions.long, " x", " ", specifications.dimensions.width, " x", " ", specifications.dimensions.height)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, "Color"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, specifications.color)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, "Size"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, specifications.size)))))), __jsx(TabPane, {
    tab: "Reviews",
    key: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, reviews.map((item, index) => __jsx(ReviewItem, {
    key: index,
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "product-detail-tab__reviews-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "Add Review"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "review",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "name",
    rules: [{
      required: true,
      message: "Please input your name!"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "email",
    rules: [{
      required: true,
      message: "Please input your email!"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "rate",
    label: "Your rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    placeholder: "Message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, "Submit Review"))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailTab));

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

/***/ "./src/components/other/SectionTitle.js":
/*!**********************************************!*\
  !*** ./src/components/other/SectionTitle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\other\\SectionTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SectionTitle({
  title,
  hideDecoration,
  className,
  style
}) {
  return __jsx("div", {
    className: `section-title ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, title), !hideDecoration && __jsx("div", {
    className: "section-title-decoration",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 27
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SectionTitle));

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

/***/ "./src/components/product/Product.js":
/*!*******************************************!*\
  !*** ./src/components/product/Product.js ***!
  \*******************************************/
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
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-countdown */ "react-countdown");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/cartServices */ "./src/common/cartServices.js");
/* harmony import */ var _common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/wishlistServices */ "./src/common/wishlistServices.js");
/* harmony import */ var _detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../detail/product/ProductDetailLayout */ "./src/components/detail/product/ProductDetailLayout.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\product\\Product.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function Product({
  data,
  className,
  type,
  countdownLast = 100000000
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: addToCartLoading,
    1: setAddToCartLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: addToWishlistLoading,
    1: setAddToWishlistLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.cartReducer);
  const wishlistState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.wishlistReducer);
  const compareState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.compareReducer);
  const productInWishlist = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__["checkProductInWishlist"])(wishlistState.data, data.id);
  const productInCompare = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__["checkProductInWishlist"])(compareState, data.id);

  const showModal = () => {
    setModalVisible(true);
  };

  const onModalClose = e => {
    setModalVisible(false);
  };

  const onAddToCart = product => {
    if (addToCartLoading) {
      return;
    }

    setAddToCartLoading(true);
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_12__["onAddProductToCart"])({
      product,
      onSuccess: data => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["fetchCartRequest"])());
      },
      onError: (mes, err) => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
      }
    });
  };

  const onAddWishlist = product => {
    if (addToWishlistLoading) {
      return;
    }

    setAddToWishlistLoading(true);

    if (!productInWishlist) {
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__["onAddProductToWishlist"])({
        product,
        onSuccess: data => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__["fetchWishListRequest"])());
        },
        onError: (mes, err) => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
          console.log(err);
        }
      });
    } else {
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__["onRemoveProductFromWishlist"])({
        productId: product.id,
        onSuccess: data => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__["fetchWishListRequest"])());
        },
        onError: (mes, err) => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
          console.log(err);
        }
      });
    }
  };

  const onAddToCompare = product => {
    if (productInCompare) {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__["removeFromCompare"])(product.id));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from compare");
    } else {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__["addToCompare"])(product));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to compare");
    }
  };

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const rederProductType = type => {
    switch (type) {
      case "tiny":
        return __jsx("div", {
          className: `product-tiny ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-tiny-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 19
          }
        })))), __jsx("div", {
          className: "product-tiny-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-tiny-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-tiny-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))));

      case "dale":
        return __jsx("div", {
          className: `product-dale ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-dale-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 19
          }
        })))), __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
          date: Date.now() + getRandomArbitrary(100000000, 150000000),
          renderer: ({
            days,
            hours,
            minutes,
            seconds
          }) => {
            return __jsx("div", {
              className: "product-dale-countdown",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 19
              }
            }, __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(days)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 48
              }
            }, "days")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(hours)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 49
              }
            }, "hr")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(minutes), " "), __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 23
              }
            }, "min")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(seconds)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 51
              }
            }, "sec")));
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }
        }), __jsx("div", {
          className: "product-dale-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-dale-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-dale-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-dale-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-dale-select",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to wishlist",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddWishlist(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })}`,
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-heart",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to cart",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-shopping-bag",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to compare",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })}`,
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Quick view",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: showModal,
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 17
          }
        }))));

      case "list":
        return __jsx("div", {
          className: "product-list",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 19
          }
        }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          onClick: showModal,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 15
          }
        }, "Quick view")), __jsx("div", {
          className: "product-list-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 17
          }
        }, data.name)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
          className: "product-rate",
          disabled: true,
          defaultValue: data.rate,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 15
          }
        }), __jsx("p", {
          className: "product-description",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 15
          }
        }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor niam"), data.quantity > 0 ? __jsx("h5", {
          className: "product-availability -instock",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 17
          }
        }, "Availability: ", __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 33
          }
        }, " ", data.quantity, " in stock")) : __jsx("h5", {
          className: "product-availability -outstock",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 17
          }
        }, "Availability: ", __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 33
          }
        }, " Out stock"))), __jsx("div", {
          className: "product-list-actions",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "product-detail-content__delivery",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 15
          }
        }, "Free delivery"), __jsx("h3", {
          className: "product-detail-content__price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 15
          }
        }, data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)), __jsx("div", {
          className: "product-detail-content__price-discount",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 17
          }
        }, __jsx("h5", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 19
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-detail-content__actions",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          loading: addToCartLoading,
          shape: "round",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 17
          }
        }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          shape: "round",
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 17
          }
        }, "Add to compare"))));

      default:
        return __jsx("div", {
          className: `product ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 19
          }
        })))), __jsx("div", {
          className: "product-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-select",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 13
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to wishlist",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddWishlist(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })}`,
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-heart",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to cart",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-shopping-bag",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 385,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to compare",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })}`,
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Quick view",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: showModal,
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 17
          }
        }))));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, rederProductType(type), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    visible: modalVisible,
    onCancel: onModalClose,
    footer: null,
    header: null,
    width: 860,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 7
    }
  }, __jsx(_detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      marginBottom: 0
    },
    hideTab: true,
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Product));

/***/ }),

/***/ "./src/components/sections/product-thumb/ProductGrid.js":
/*!**************************************************************!*\
  !*** ./src/components/sections/product-thumb/ProductGrid.js ***!
  \**************************************************************/
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
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../product/Product */ "./src/components/product/Product.js");
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
/* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\sections\\product-thumb\\ProductGrid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function ProductGrid({
  style,
  productClassName,
  productCol,
  productType,
  data,
  headerTitle,
  headerClass,
  hideHeader,
  fiveCol,
  className,
  gutter = [{
    xs: 0,
    md: 15
  }, {
    xs: 0,
    md: 15
  }]
}) {
  return __jsx("div", {
    className: `product-grid ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, !hideHeader && __jsx("div", {
    className: `product-grid-header ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(headerClass)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: headerTitle,
    hideDecoration: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "product-grid-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    renderData: data => __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      gutter: gutter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, data.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], _extends({
      key: index
    }, productCol, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "five-col": fiveCol
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }), __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: productType,
      className: productClassName,
      data: item,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 19
      }
    })))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductGrid));

/***/ }),

/***/ "./src/components/shop/ShopHeader.js":
/*!*******************************************!*\
  !*** ./src/components/shop/ShopHeader.js ***!
  \*******************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/shopFilterActions */ "./src/redux/actions/shopFilterActions.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\shop\\ShopHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ShopHeader = ({
  title,
  getViewPerPage,
  getCurrentSort,
  hideView
}) => {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_2__["Select"];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const shopFilterState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.shopFilterReducer);
  const {
    view
  } = shopFilterState;

  const onSortSelectChange = value => {
    switch (value) {
      case "az":
        return dispatch(Object(_redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_4__["setCurrentSort"])({
          sort: "name",
          order: "asc"
        }));

      case "za":
        return dispatch(Object(_redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_4__["setCurrentSort"])({
          sort: "name",
          order: "desc"
        }));

      case "lowHight":
        return dispatch(Object(_redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_4__["setCurrentSort"])({
          sort: "price",
          order: "asc"
        }));

      case "highLow":
        return dispatch(Object(_redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_4__["setCurrentSort"])({
          sort: "price",
          order: "desc"
        }));

      default:
        return dispatch(Object(_redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_4__["setCurrentSort"])({}));
    }
  };

  const onShowSelectChange = value => {
    dispatch(Object(_redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_4__["setCurrentShow"])(value));
  };

  const onViewChage = (e, view) => {
    e.preventDefault();
    dispatch(Object(_redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_4__["setCurrentView"])(view));
  };

  return __jsx("div", {
    className: "shop-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: "shop-header-selectors",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    defaultValue: "",
    style: {
      width: 175
    },
    onChange: onSortSelectChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Default"), __jsx(Option, {
    value: "az",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "A to Z"), __jsx(Option, {
    value: "za",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Z to A"), __jsx(Option, {
    value: "highLow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "High to low price"), __jsx(Option, {
    value: "lowHight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Low to high price")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    defaultValue: "10",
    style: {
      width: 115
    },
    onChange: onShowSelectChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Show 10"), __jsx(Option, {
    value: "15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Show 15"), __jsx(Option, {
    value: "20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Show 20"))), !hideView && __jsx("div", {
    className: "shop-header-view",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: e => onViewChage(e, "grid"),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: view === "grid"
    }),
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-th-large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  })), __jsx("a", {
    onClick: e => onViewChage(e, "list"),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: view === "list"
    }),
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-th-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopHeader));

/***/ }),

/***/ "./src/components/shop/ShopSidebar.js":
/*!********************************************!*\
  !*** ./src/components/shop/ShopSidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/shopFilterActions */ "./src/redux/actions/shopFilterActions.js");
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/categories.json */ "./src/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/categories.json */ "./src/data/categories.json", 1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\shop\\ShopSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const data = {
  color: [{
    name: "All colors",
    colorCode: "#FFF",
    value: ""
  }, {
    name: "Black",
    colorCode: "#000",
    value: "black"
  }, {
    name: "Blue",
    colorCode: "#1e73be",
    value: "blue"
  }, {
    name: "Gray",
    colorCode: "#848484",
    value: "gray"
  }, {
    name: "Green",
    colorCode: "#81D742",
    value: "green"
  }, {
    name: "Red",
    colorCode: "#DD3333",
    value: "red"
  }, {
    name: "Yellow",
    colorCode: "#eeee22",
    value: "yellow"
  }],
  size: [{
    name: "All size",
    value: ""
  }, {
    name: "XL",
    value: "xl"
  }, {
    name: "L",
    value: "l"
  }, {
    name: "M",
    value: "m"
  }, {
    name: "S",
    value: "s"
  }],
  tags: [{
    name: "All tag",
    value: ""
  }, {
    name: "fresh",
    value: "fresh"
  }, {
    name: "vegetable",
    value: "vegetable"
  }, {
    name: "meat",
    value: "meat"
  }]
};

const ShopSidebarSection = ({
  children,
  title,
  className
}) => {
  return __jsx("div", {
    className: `shop-sidebar-section ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "shop-sidebar-section__header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, title)), __jsx("div", {
    className: "shop-sidebar-section__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, children));
};

function ShopSidebar({
  showShortcut,
  style
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const shopFilterState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.shopFilterReducer);
  const {
    category,
    color,
    size,
    tag
  } = shopFilterState;

  const onChooseCategory = (e, val) => {
    e.preventDefault();
    dispatch(Object(_redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_3__["setCurrentCategory"])(val));
  };

  const onChooseColor = (e, val) => {
    e.preventDefault();
    dispatch(Object(_redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_3__["setCurrentColor"])(val));
  };

  const onChooseSize = (e, val) => {
    e.preventDefault();
    dispatch(Object(_redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_3__["setCurrentSize"])(val));
  };

  const onChooseTag = val => {
    dispatch(Object(_redux_actions_shopFilterActions__WEBPACK_IMPORTED_MODULE_3__["setCurrentTag"])(val));
  };

  return __jsx("div", {
    style: style,
    className: "shop-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(ShopSidebarSection, {
    className: "-departments",
    title: "Departments",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: category === ""
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("a", {
    onClick: e => onChooseCategory(e, ""),
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "All departments")), _data_categories_json__WEBPACK_IMPORTED_MODULE_4__.map((item, index) => __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: category === item.value
    }),
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: e => onChooseCategory(e, item.value),
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, item.name))))), !showShortcut && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ShopSidebarSection, {
    className: "-colors",
    title: "Popular colors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, data.color.map((item, index) => __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: color === item.value
    }),
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("a", {
    onClick: e => onChooseColor(e, item.value),
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, __jsx("span", {
    style: {
      backgroundColor: item.colorCode
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }), item.name))))), __jsx(ShopSidebarSection, {
    className: "-size",
    title: "Popular size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, data.size.map((item, index) => __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: size === item.value
    }),
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("a", {
    onClick: e => onChooseSize(e, item.value),
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }, item.name)))))), __jsx(ShopSidebarSection, {
    className: "-tags",
    title: "Popular tags",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, data.tags.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: tag === item.value
    }),
    onClick: () => onChooseTag(item.value),
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, item.name))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopSidebar));

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

/***/ "./src/pages/shop/shop-3-column.js":
/*!*****************************************!*\
  !*** ./src/pages/shop/shop-3-column.js ***!
  \*****************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var _components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/LayoutOne */ "./src/components/layout/LayoutOne.js");
/* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _components_shop_ShopSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shop/ShopSidebar */ "./src/components/shop/ShopSidebar.js");
/* harmony import */ var _components_sections_product_thumb_ProductGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/sections/product-thumb/ProductGrid */ "./src/components/sections/product-thumb/ProductGrid.js");
/* harmony import */ var _components_shop_ShopHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/shop/ShopHeader */ "./src/components/shop/ShopHeader.js");
var _jsxFileName = "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\pages\\shop\\shop-3-column.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function shopGrid3Column() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    q
  } = router.query;
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.shopReducer);
  const {
    products
  } = shopState;
  const shopFilterState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.shopFilterReducer);
  const {
    sort,
    show,
    view,
    category,
    color,
    size,
    tag
  } = shopFilterState;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_4__["fetchFeaturedProductsRequest"])({
      limit: 4
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_4__["fetchProductsRequest"])({
      limit: show,
      category: null,
      page: currentPage,
      q,
      sort,
      view,
      category,
      color,
      size,
      tag
    }));
  }, [shopFilterState, currentPage, q]);

  const onPaginationChange = current => {
    setCurrentPage(current);
  };

  return __jsx(_components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Shop grid fullwidth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
    separator: ">",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Shop")), __jsx("div", {
    className: "shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "shop-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    lg: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx(_components_shop_ShopSidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      marginTop: 10 / 16 + "em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    lg: 18,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx(_components_shop_ShopHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Shop grid fullwidth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx(_components_sections_product_thumb_ProductGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: products,
    hideHeader: true,
    productCol: view === "list" ? {
      xs: 24,
      sm: 12,
      md: 24
    } : {
      xs: 12,
      sm: 12,
      md: 8,
      lg: 8
    },
    productType: view,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), products.count > 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    onChange: onPaginationChange,
    defaultCurrent: currentPage,
    pageSize: show,
    total: products.count,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(shopGrid3Column));

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

/***/ "./src/redux/actions/compareActions.js":
/*!*********************************************!*\
  !*** ./src/redux/actions/compareActions.js ***!
  \*********************************************/
/*! exports provided: addToCompare, removeFromCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCompare", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCompare", function() { return removeFromCompare; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");

const addToCompare = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].ADD_TO_COMPARE,
  payload: {
    data
  }
});
const removeFromCompare = productId => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].REMOVE_FROM_COMPARE,
  payload: {
    productId
  }
});

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

/***/ "./src/redux/actions/shopFilterActions.js":
/*!************************************************!*\
  !*** ./src/redux/actions/shopFilterActions.js ***!
  \************************************************/
/*! exports provided: setCurrentSort, setCurrentShow, setCurrentView, setCurrentCategory, setCurrentColor, setCurrentSize, setCurrentTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentSort", function() { return setCurrentSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentShow", function() { return setCurrentShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentView", function() { return setCurrentView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentCategory", function() { return setCurrentCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentColor", function() { return setCurrentColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentSize", function() { return setCurrentSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentTag", function() { return setCurrentTag; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");


const resetShopFilter = () => {
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].RESET_FILTERS;
};

const setCurrentSort = sort => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SORT,
    sort: sort
  };
};
const setCurrentShow = show => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SHOW,
    show: show
  };
};
const setCurrentView = view => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_VIEW,
    view: view
  };
};
const setCurrentCategory = category => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_CATEGORY,
    category: category
  };
};
const setCurrentColor = color => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_COLOR,
    color: color
  };
};
const setCurrentSize = size => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SIZE,
    size: size
  };
};
const setCurrentTag = tag => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_TAG,
    tag: tag
  };
};

/***/ }),

/***/ "./src/redux/actions/wishlistActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
/*! exports provided: fetchWishListRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishListRequest", function() { return fetchWishListRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/wishlist */ "./src/apis/wishlist.js");

 //Get cart data

const fetchWishList = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST
});

const fetchWishListSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS,
  payload: {
    data
  }
});

const fetchWishListFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL,
  payload: {
    err
  }
});

const fetchWishListRequest = () => {
  return dispatch => {
    dispatch(fetchWishList());
    _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__["fetchWishlistData"]().then(res => {
      dispatch(fetchWishListSuccess(res.data));
    }).catch(err => {
      dispatch(fetchWishListFail(err));
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

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countdown");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvd2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9heGlvc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jYXJ0U2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kZWZpbmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc2hvcFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXNlRGVib3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2lzaGxpc3RTZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpdGhIZWFkZXJTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsL3Byb2R1Y3QvUHJvZHVjdERldGFpbExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvcHJvZHVjdC9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvcHJvZHVjdC9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsSW1hZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldGFpbC9wcm9kdWN0L2VsZW1lbnRzL1Byb2R1Y3REZXRhaWxUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZWxlbWVudHMvRm9vdGVySW5mb21hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZWxlbWVudHMvRm9vdGVyUXVpY2tMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZWxlbWVudHMvRm9vdGVyU3ViY3JpYmVJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyT25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9DYXRlZ29yeUNvbGFwcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9GdW5jdGlvbkl0ZW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9Nb2JpbGVNZW51T3BlbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9Nb2JpbGVOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL05hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvU2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZnVuY3Rpb24tbWVudS9GdW5jdGlvbk1lbnVPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21lbnUvTWVudU9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvdG9wLW5hdi9Ub3BOYXZPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dE9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvRmV0Y2hEYXRhSGFuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL1F1YW50aXR5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvU2VjdGlvblRpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL1NvY2lhbEljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9wcm9kdWN0LXRodW1iL1Byb2R1Y3RHcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nob3AvU2hvcEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaG9wL1Nob3BTaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zaG9wL3Nob3AtMy1jb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NvbXBhcmVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3Nob3BGaWx0ZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY291bnRkb3duXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJ2YWx1ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiZmV0Y2hDYXJ0RGF0YSIsImNhcnRJZCIsImVuZHBvaW50IiwiQVBJX1VSTCIsImF4aW9zU2VydmljZSIsImZldGNoUHJvZHVjdElkQ2FydERhdGEiLCJwaWQiLCJyZW5kZXJQYXJhbSIsImFkZENhcnREYXRhIiwicG9zdCIsInJlbW92ZUNhcnREYXRhIiwiZGVsZXRlIiwidXBkYXRlQ2FydERhdGEiLCJwYXRjaCIsInJlbmRlclVybCIsImxpbWl0IiwiY2F0ZWdvcnkiLCJmZXRjaFByb2R1Y3RzRGF0YSIsInNvcnQiLCJvcmRlciIsInEiLCJjb2xvciIsInNpemUiLCJ0YWciLCJmZXRjaFNhbGVQcm9kdWN0c0RhdGEiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhIiwiZmV0Y2hEYWxlUHJvZHVjdHNEYXRhIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSIsInNsdWciLCJmZXRjaFNlYXJjaGVkUHJvZHVjdERhdGEiLCJpbnB1dCIsImZldGNoV2lzaGxpc3REYXRhIiwiZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEiLCJhZGRXaXNobGlzdERhdGEiLCJyZW1vdmVXaXNobGlzdERhdGEiLCJBeGlvc1NlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwicmVqZWN0IiwiYm9keSIsIm9uQWRkUHJvZHVjdFRvQ2FydCIsInByb2R1Y3QiLCJxdWFudGl0eSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJnZXRRdWFudGl0eUF2YWlsYWJsZSIsImlkIiwidGhlbiIsImxlbmd0aCIsInV1aWR2NCIsInByb2R1Y3RJZCIsImNhcnRRdWFudGl0eSIsImNhdGNoIiwicERhdGEiLCJvblJlbW92ZVByb2R1Y3RGcm9tQ2FydCIsIm9uQ2hhbmdlUHJvZHVjdENhcnRRdWFudGl0eSIsImxvZyIsImdldFByb2R1Y3RzQnlTbHVnIiwiYXJyIiwiZmluZCIsInRvTG93ZXJDYXNlIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsInRvdGFsIiwiZm9yRWFjaCIsImRpc2NvdW50IiwicHJpY2UiLCJjaGVja1Byb2R1Y3RJbkNhcnQiLCJjYXJ0QXJyIiwidW5kZWZpbmVkIiwiY2hlY2tQcm9kdWN0Q2FydFF1YW50aXR5IiwicHJvZHVjdHNJbkNhcnQiLCJmaWx0ZXIiLCJ0b3RhbFByb2R1Y3RRdWFudGl0eUluQ2FydCIsInJlZHVjZSIsImNoZWNrUHJvZHVjdEluV2lzaGxpc3QiLCJ3aXNobGlzdEFyciIsInVzZURlYm91bmNlIiwiZGVsYXkiLCJkZWJvdW5jZWRWYWx1ZSIsInNldERlYm91bmNlZFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZm9ybWF0Q3VycmVuY3kiLCJsb2NhbGVzIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJmb3JtYXQiLCJwYXJhbU5hbWUiLCJwYXJhbVZhbHVlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJpbnB1dEZvcm1hdCIsIm91dHB1dEZvcm1hdCIsIm1vbWVudCIsInJlbW92ZURhc2giLCJvbkFkZFByb2R1Y3RUb1dpc2hsaXN0Iiwib25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0Iiwid2l0aEhlYWRlclNjcm9sbCIsIldyYXBwZWRDb21wb25lbnQiLCJoZWFkZXJSZWYiLCJ1c2VSZWYiLCJzZXRTY3JvbGwiLCJpc0hlYWRlckZpeGVkIiwic2V0SXNIZWFkZXJGaXhlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsIm9mZnNldEhlaWdodCIsInNjcm9sbFkiLCJjbGFzc05hbWVzIiwiZml4ZWQiLCJjbGFzc05hbWUiLCJQcm9kdWN0RGV0YWlsTGF5b3V0IiwidHlwZSIsImhpZGVUYWIiLCJpbWFnZXMiLCJmdWxsRGVzY3JpcHRpb24iLCJzcGVjaWZpY2F0aW9ucyIsInJldmlld3MiLCJtZW1vIiwiUHJvZHVjdERldGFpbENvbnRlbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY3VycmVudFF1YW50aXR5Iiwic2V0Q3VycmVudFF1YW50aXR5IiwiYWRkVG9DYXJ0TG9hZGluZyIsInNldEFkZFRvQ2FydExvYWRpbmciLCJjYXJ0U3RhdGUiLCJ1c2VTZWxlY3RvciIsImNhcnRSZWR1Y2VyIiwiY29tcGFyZVN0YXRlIiwiY29tcGFyZVJlZHVjZXIiLCJwcm9kdWN0SW5Db21wYXJlIiwiYXZhaWFibGVRdWFudGl0eSIsIm9uQWRkVG9DYXJ0IiwiZmV0Y2hDYXJ0UmVxdWVzdCIsIm1lcyIsIm9uQWRkVG9Db21wYXJlIiwicmVtb3ZlRnJvbUNvbXBhcmUiLCJhZGRUb0NvbXBhcmUiLCJyYXRlIiwidmFsIiwiYWN0aXZlIiwiUHJvZHVjdERldGFpbEltYWdlcyIsInNsaWRlcjFTZXR0aW5ncyIsImFycm93cyIsInNsaWRlcjJTZXR0aW5ncyIsInNsaWRlc1RvU2hvdyIsImZvY3VzT25TZWxlY3QiLCJ2ZXJ0aWNhbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJuYXYxIiwic2V0TmF2MSIsIm5hdjIiLCJzZXROYXYyIiwiYyIsIm1hcCIsImltZyIsImluZGV4IiwiVGFiUGFuZSIsIlRhYnMiLCJSZXZpZXdJdGVtIiwidXNlciIsImF2YXRhciIsImNvbW1lbnREYXRlIiwicmV2aWV3IiwiUHJvZHVjdERldGFpbFRhYiIsIm9uRmluaXNoIiwidmFsdWVzIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJ3ZWlnaHQiLCJkaW1lbnNpb25zIiwibG9uZyIsIndpZHRoIiwiaGVpZ2h0IiwicmVxdWlyZWQiLCJGb290ZXIiLCJjb250YWluZXJGbHVpZCIsInNwYW4iLCJGb290ZXJJbmZvbWF0aW9uIiwiRm9vdGVyUXVpY2tMaW5rcyIsImNvbFNpemUiLCJmb290ZXJMaW5rcyIsInRpdGxlIiwiaXRlbXMiLCJsaW5rIiwiQ3VzdG9tRm9ybSIsInN0YXR1cyIsIm9uVmFsaWRhdGVkIiwiRU1BSUwiLCJlbWFpbCIsIl9faHRtbCIsIkZvb3RlclN1YmNyaWJlSW5wdXQiLCJzdWJzY3JpYmUiLCJmb3JtRGF0YSIsIkhlYWRlck9uZSIsImFjdGl2ZUhlYWRlckNvbGxhcHNlIiwiY2F0ZWdvcmllcyIsIkNhdGVnb3J5Q29sYXBwc2UiLCJQYW5lbCIsIkNvbGxhcHNlIiwiaXNBY3RpdmUiLCJGdW5jdGlvbkl0ZW1zIiwiaGlkZVRvdGFsIiwiaGlkZVdpc2hsaXN0IiwiTW9iaWxlTWVudU9wZW5lciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwib25TaG93RHJhd2VyIiwib25DbG9zZURyYXdlciIsIk1vYmlsZU5hdmlnYXRvciIsIlN1Yk1lbnUiLCJNZW51Iiwic2V0Q3VycmVudCIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJuYXZpZ2F0b3JEYXRhIiwiSE9NRSIsInN1Yk1lbnUiLCJTSE9QIiwibGF5b3V0IiwiZGV0YWlsIiwiUEFHRVMiLCJBQk9VVCIsIk5hdmlnYXRvciIsIkJMT0ciLCJTZWFyY2hGb3JtIiwiZW50ZXJCdXR0b24iLCJoaWRlU2VsZWN0IiwiT3B0aW9uIiwiU2VsZWN0IiwidXNlUm91dGVyIiwiY3VycmVudFNlYXJjaCIsInNldEN1cnJlbnRTZWFyY2giLCJjdXJyZW50Q2F0ZWdvcnkiLCJzZXRDdXJyZW50Q2F0ZWdvcnkiLCJkZWJvdW5kVmFsdWUiLCJzaG9wU3RhdGUiLCJzaG9wUmVkdWNlciIsInNlYXJjaGVkUHJvZHVjdHMiLCJvbkNoYW5nZSIsIm9uU2VsZWN0T3B0aW9uIiwib3B0aW9uIiwib25TZWFyY2giLCJvbkNob29zZUNhdGVvZ3J5IiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0IiwiaW5wdXRWYWx1ZSIsInRvVXBwZXJDYXNlIiwiaW5kZXhPZiIsImxvYWRpbmciLCJGdW5jdGlvbk1lbnVPbmUiLCJNZW51T25lIiwiZmxhZ0RhdGEiLCJpbWFnZSIsIlRvcE5hdk9uZSIsIm9iamVjdEZpdCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwiU2Nyb2xsZWRIZWFkZXIiLCJMYXlvdXRPbmUiLCJoZWFkZXJDbGFzcyIsImZvb3RlckNsYXNzIiwiQ29udGFpbmVyIiwiZmx1aWQiLCJGZXRjaERhdGFIYW5kbGUiLCJlcnJvck1lc3NhZ2UiLCJlbXB0eURlc2NyaXB0aW9uIiwicmVuZGVyRGF0YSIsIkVtcHR5IiwiUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSIsIlF1YW50aXR5U2VsZWN0b3IiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJvbkRlY3JlYXNlIiwib25JbmNyZWFzZSIsImZpcnN0VXBkYXRlIiwic2V0VmFsdWUiLCJkZWNyZWFzZVZhbHVlIiwidXNlQ2FsbGJhY2siLCJpbmNyZWFzZVZhbHVlIiwiU2VjdGlvblRpdGxlIiwiaGlkZURlY29yYXRpb24iLCJTb2NpYWxJY29ucyIsInNoYXBlIiwiUHJvZHVjdCIsImNvdW50ZG93bkxhc3QiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJhZGRUb1dpc2hsaXN0TG9hZGluZyIsInNldEFkZFRvV2lzaGxpc3RMb2FkaW5nIiwid2lzaGxpc3RTdGF0ZSIsIndpc2hsaXN0UmVkdWNlciIsInByb2R1Y3RJbldpc2hsaXN0Iiwic2hvd01vZGFsIiwib25Nb2RhbENsb3NlIiwib25BZGRXaXNobGlzdCIsImZldGNoV2lzaExpc3RSZXF1ZXN0IiwiZ2V0UmFuZG9tQXJiaXRyYXJ5IiwiTWF0aCIsInJhbmRvbSIsInJlZGVyUHJvZHVjdFR5cGUiLCJjb3ZlckltYWdlIiwiRGF0ZSIsIm5vdyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiemVyb1BhZCIsIm1hcmdpbkJvdHRvbSIsIlByb2R1Y3RHcmlkIiwicHJvZHVjdENsYXNzTmFtZSIsInByb2R1Y3RDb2wiLCJwcm9kdWN0VHlwZSIsImhlYWRlclRpdGxlIiwiaGlkZUhlYWRlciIsImZpdmVDb2wiLCJndXR0ZXIiLCJ4cyIsIm1kIiwiU2hvcEhlYWRlciIsImdldFZpZXdQZXJQYWdlIiwiZ2V0Q3VycmVudFNvcnQiLCJoaWRlVmlldyIsInNob3BGaWx0ZXJTdGF0ZSIsInNob3BGaWx0ZXJSZWR1Y2VyIiwidmlldyIsIm9uU29ydFNlbGVjdENoYW5nZSIsInNldEN1cnJlbnRTb3J0Iiwib25TaG93U2VsZWN0Q2hhbmdlIiwic2V0Q3VycmVudFNob3ciLCJvblZpZXdDaGFnZSIsInByZXZlbnREZWZhdWx0Iiwic2V0Q3VycmVudFZpZXciLCJjb2xvckNvZGUiLCJ0YWdzIiwiU2hvcFNpZGViYXJTZWN0aW9uIiwiU2hvcFNpZGViYXIiLCJzaG93U2hvcnRjdXQiLCJvbkNob29zZUNhdGVnb3J5Iiwib25DaG9vc2VDb2xvciIsInNldEN1cnJlbnRDb2xvciIsIm9uQ2hvb3NlU2l6ZSIsInNldEN1cnJlbnRTaXplIiwib25DaG9vc2VUYWciLCJzZXRDdXJyZW50VGFnIiwiYmFja2dyb3VuZENvbG9yIiwic2hvcEdyaWQzQ29sdW1uIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInByb2R1Y3RzIiwic2hvdyIsImZldGNoRmVhdHVyZWRQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaFByb2R1Y3RzUmVxdWVzdCIsIm9uUGFnaW5hdGlvbkNoYW5nZSIsInNtIiwibGciLCJjb3VudCIsIkZFVENIX1BST0RVQ1RTIiwiRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9TQUxFX1BST0RVQ1RTIiwiRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFMiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9EQUxFX1BST0RVQ1RTIiwiRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUwiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTCIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9QT1NUUyIsIkZFVENIX1BPU1RTX1NVQ0NFU1MiLCJGRVRDSF9QT1NUU19GQUlMIiwiRkVUQ0hfUE9TVF9ERVRBSUwiLCJGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTIiwiRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTCIsIkZFVENIX1JFQ0VOVF9QT1NUUyIsIkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTIiwiRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUwiLCJTSE9QX0ZJTFRFUiIsIlJFU0VUX0ZJTFRFUlMiLCJTRVRfU09SVCIsIlNFVF9TSE9XIiwiU0VUX1ZJRVciLCJTRVRfQ0FURUdPUlkiLCJTRVRfQ09MT1IiLCJTRVRfU0laRSIsIlNFVF9UQUciLCJDQVJUIiwiRkVUQ0hfQ0FSVCIsIkZFVENIX0NBUlRfU1VDQ0VTUyIsIkZFVENIX0NBUlRfRkFJTCIsIldJU0hMSVNUIiwiRkVUQ0hfV0lTSExJU1QiLCJGRVRDSF9XSVNITElTVF9TVUNDRVNTIiwiRkVUQ0hfV0lTSExJU1RfRkFJTCIsIkNPTVBBUkUiLCJBRERfVE9fQ09NUEFSRSIsIlJFTU9WRV9GUk9NX0NPTVBBUkUiLCJCTE9HX0ZJTFRFUiIsImZldGNoQ2FydCIsImZldGNoQ2FydFN1Y2Nlc3MiLCJwYXlsb2FkIiwiZmV0Y2hDYXJ0RmFpbCIsImNhcnRBcGlzIiwiZmV0Y2hQcm9kdWN0cyIsImZldGNoUHJvZHVjdHNTdWNjZXNzIiwicHJvZHVjdENvdW50IiwiZmV0Y2hQcm9kdWN0c0ZhaWwiLCJzaG9wQXBpcyIsImhlYWRlcnMiLCJmZXRjaFNhbGVQcm9kdWN0cyIsImZldGNoU2FsZVByb2R1Y3RzU3VjY2VzcyIsImZldGNoU2FsZVByb2R1Y3RzRmFpbCIsImZldGNoU2FsZVByb2R1Y3RzUmVxdWVzdCIsImZldGNoRmVhdHVyZWRQcm9kdWN0cyIsImZldGNoRmVhdHVyZWRQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNGYWlsIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHMiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0ZhaWwiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaERhbGVQcm9kdWN0cyIsImZldGNoRGFsZVByb2R1Y3RzU3VjY2VzcyIsImZldGNoRGFsZVByb2R1Y3RzRmFpbCIsImZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCIsImZldGNoUHJvZHVjdERldGFpbCIsImZldGNoUHJvZHVjdERldGFpbFN1Y2Nlc3MiLCJmZXRjaFByb2R1Y3REZXRhaWxGYWlsIiwiZmV0Y2hQcm9kdWN0RGV0YWlsUmVxdWVzdCIsImZldGNoU2VhcmNoZWRQcm9kdWN0IiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3RTdWNjZXNzIiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3RGYWlsIiwicmVzZXRTaG9wRmlsdGVyIiwiZmV0Y2hXaXNoTGlzdCIsImZldGNoV2lzaExpc3RTdWNjZXNzIiwiZmV0Y2hXaXNoTGlzdEZhaWwiLCJ3aXNobGlzdEFwaXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFF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QUFpQixHQUFJcnRCLEdBQUQsS0FBVTtBQUNsQ3FZLE1BQUksRUFBRW9TLHFEQUFRLENBQUNHLG1CQURtQjtBQUVsQ08sU0FBTyxFQUFFO0FBQ1BuckI7QUFETztBQUZ5QixDQUFWLENBQTFCOztBQU9PLE1BQU1na0Isb0JBQW9CLEdBQUcsTUFBTTtBQUN4QyxTQUFRbkwsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUNzVSxhQUFhLEVBQWQsQ0FBUjtBQUNBRyxvRUFBQSxHQUVHeFosSUFGSCxDQUVTcE8sR0FBRCxJQUFTO0FBQ2JtVCxjQUFRLENBQUN1VSxvQkFBb0IsQ0FBQzFuQixHQUFHLENBQUM4RSxJQUFMLENBQXJCLENBQVI7QUFDRCxLQUpILEVBS0cySixLQUxILENBS1VuVSxHQUFELElBQVM7QUFDZDZZLGNBQVEsQ0FBQ3dVLGlCQUFpQixDQUFDcnRCLEdBQUQsQ0FBbEIsQ0FBUjtBQUNELEtBUEg7QUFRRCxHQVZEO0FBV0QsQ0FaTSxDOzs7Ozs7Ozs7OztBQ3ZCUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9zaG9wL3Nob3AtMy1jb2x1bW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9zaG9wL3Nob3AtMy1jb2x1bW4uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2RlZmluZXNcIjtcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xuXG5jb25zdCB1cmwgPSBcIi9jYXJ0XCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnREYXRhID0gKGNhcnRJZCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBjYXJ0SWQgPyBBUElfVVJMICsgdXJsICsgYC8ke2NhcnRJZH1gIDogQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdElkQ2FydERhdGEgPSAocGlkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwicHJvZHVjdElkXCIsIHBpZCk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRDYXJ0RGF0YSA9IChkYXRhKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FydERhdGEgPSAoY2FydElkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBgLyR7Y2FydElkfWA7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZGVsZXRlKGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJ0RGF0YSA9IChjYXJ0SWQsIGRhdGEpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wYXRjaChlbmRwb2ludCwgZGF0YSk7XG59O1xuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XG5cbmNvbnN0IHVybCA9IFwiL3Byb2R1Y3RcIjtcblxuY29uc3QgcmVuZGVyVXJsID0gKHVybCwgbGltaXQsIGNhdGVnb3J5KSA9PiB7XG4gIHJldHVybiAoXG4gICAgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcIl9saW1pdFwiLCBsaW1pdCkgKyByZW5kZXJQYXJhbShcImNhdGVnb3J5XCIsIGNhdGVnb3J5KVxuICApO1xufTtcblxuLy9GZXRjaCBsaXN0IG9mIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID1cbiAgICByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KSArXG4gICAgcmVuZGVyUGFyYW0oXCJfcGFnZVwiLCBxdWVyeS5wYWdlKSArXG4gICAgcmVuZGVyUGFyYW0oXCJfc29ydFwiLCBxdWVyeS5zb3J0LnNvcnQpICtcbiAgICByZW5kZXJQYXJhbShcIl9vcmRlclwiLCBxdWVyeS5zb3J0Lm9yZGVyKSArXG4gICAgcmVuZGVyUGFyYW0oXCJxXCIsIHF1ZXJ5LnEpICtcbiAgICByZW5kZXJQYXJhbShcInNwZWNpZmljYXRpb25zLmNvbG9yXCIsIHF1ZXJ5LmNvbG9yKSArXG4gICAgcmVuZGVyUGFyYW0oXCJzcGVjaWZpY2F0aW9ucy5zaXplXCIsIHF1ZXJ5LnNpemUpICtcbiAgICByZW5kZXJQYXJhbShcInRhZ19saWtlXCIsIHF1ZXJ5LnRhZyk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG4vL0ZldGNoIHByb2R1Y3QgZGV0YWlsXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSA9IChzbHVnKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwic2x1Z1wiLCBzbHVnKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuLy9GZXRjaCBzZXJjaGVkIHByb2R1Y3QgYnkgcXVlcnlcbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdERhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID1cbiAgICBBUElfVVJMICtcbiAgICB1cmwgK1xuICAgIFwiP1wiICtcbiAgICByZW5kZXJQYXJhbShcInFcIiwgcXVlcnkuaW5wdXQpICtcbiAgICByZW5kZXJQYXJhbShcImNhdGVnb3J5XCIsIHF1ZXJ5LmNhdGVnb3J5KSArXG4gICAgcmVuZGVyUGFyYW0oXCJfbGltaXRcIiwgcXVlcnkubGltaXQpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XG5cbmNvbnN0IHVybCA9IFwiL3dpc2hsaXN0XCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdpc2hsaXN0RGF0YSA9ICgpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdElkV2lzaGxpc3REYXRhID0gKHBpZCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcImlkXCIsIHBpZCk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRXaXNobGlzdERhdGEgPSAoZGF0YSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVdpc2hsaXN0RGF0YSA9IChwaWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtwaWR9YDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5kZWxldGUoZW5kcG9pbnQpO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY2xhc3MgQXhpb3NTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoKTtcbiAgICBpbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHRoaXMuaGFuZGxlU3VjY2VzcywgdGhpcy5oYW5kbGVFcnJvcik7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICB9XG5cbiAgaGFuZGxlU3VjY2VzcyhyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuXG4gIGdldCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXQodXJsKTtcbiAgfVxuXG4gIHBvc3QodXJsLCBib2R5KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucG9zdCh1cmwsIGJvZHkpO1xuICB9XG5cbiAgcGF0Y2godXJsLCBib2R5KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucGF0Y2godXJsLCBib2R5KTtcbiAgfVxuXG4gIGRlbGV0ZSh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5kZWxldGUodXJsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXhpb3NTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YSxcbiAgYWRkQ2FydERhdGEsXG4gIHVwZGF0ZUNhcnREYXRhLFxuICByZW1vdmVDYXJ0RGF0YSxcbn0gZnJvbSBcIi4uL2FwaXMvY2FydFwiO1xuXG5leHBvcnQgY29uc3Qgb25BZGRQcm9kdWN0VG9DYXJ0ID0gKHtcbiAgcHJvZHVjdCxcbiAgcXVhbnRpdHkgPSAxLFxuICBvblN1Y2Nlc3MsXG4gIG9uRXJyb3IsXG4gIGdldFF1YW50aXR5QXZhaWxhYmxlID0gKCkgPT4gdHJ1ZSxcbn0pID0+IHtcbiAgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YShwcm9kdWN0LmlkKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHByb2R1Y3QucXVhbnRpdHkgPT09IDApIHtcbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZWFjaGVkIG1heGltdW0gbnVtYmVyIG9mIHByb2R1Y3RzXCIpO1xuICAgICAgICAgIGdldFF1YW50aXR5QXZhaWxhYmxlICYmIGdldFF1YW50aXR5QXZhaWxhYmxlKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDYXJ0RGF0YSh7XG4gICAgICAgICAgICAuLi5wcm9kdWN0LFxuICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmlkLFxuICAgICAgICAgICAgY2FydFF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gb25TdWNjZXNzICYmIG9uU3VjY2VzcyhyZXMpKVxuICAgICAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgICAoZXJyKSA9PlxuICAgICAgICAgICAgICAgIG9uRXJyb3IgJiZcbiAgICAgICAgICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gY2FydCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBEYXRhID0gcmVzLmRhdGFbMF07XG4gICAgICAgIGlmIChwRGF0YS5jYXJ0UXVhbnRpdHkgKyBxdWFudGl0eSA+IHBEYXRhLnF1YW50aXR5KSB7XG4gICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiUmVhY2hlZCBtYXhpbXVtIG51bWJlciBvZiBwcm9kdWN0c1wiKTtcbiAgICAgICAgICBnZXRRdWFudGl0eUF2YWlsYWJsZShmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlQ2FydERhdGEocERhdGEuaWQsIHtcbiAgICAgICAgICAgIGNhcnRRdWFudGl0eTogcERhdGEuY2FydFF1YW50aXR5ICsgcXVhbnRpdHksXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgb25TdWNjZXNzICYmIG9uU3VjY2VzcyhyZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgICAgKGVycikgPT5cbiAgICAgICAgICAgICAgICBvbkVycm9yICYmXG4gICAgICAgICAgICAgICAgb25FcnJvcihcIkFkZCBwcm9kdWN0IHRvIGNhcnQgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluXCIsIGVycilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChcbiAgICAgIChlcnIpID0+XG4gICAgICAgIG9uRXJyb3IgJiYgb25FcnJvcihcIkFkZCBwcm9kdWN0IHRvIGNhcnQgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluXCIsIGVycilcbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0ID0gKHsgY2FydElkLCBvblN1Y2Nlc3MsIG9uRXJyb3IgfSkgPT4ge1xuICBpZiAoY2FydElkICYmIGNhcnRJZCAhPT0gXCJcIiAmJiBjYXJ0SWQgIT09IG51bGwpIHtcbiAgICByZW1vdmVDYXJ0RGF0YShjYXJ0SWQpXG4gICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgICAuY2F0Y2goXG4gICAgICAgIChlcnIpID0+XG4gICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiUmVtb3ZlIHByb2R1Y3QgZmFpbG0sIHBsZWFzZXIgdHJ5IGFnYWluXCIsIGVycilcbiAgICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBvbkNoYW5nZVByb2R1Y3RDYXJ0UXVhbnRpdHkgPSAoe1xuICBwcm9kdWN0LFxuICBxdWFudGl0eSxcbiAgb25TdWNjZXNzLFxufSkgPT4ge1xuICBpZiAocXVhbnRpdHkgPiBwcm9kdWN0LnF1YW50aXR5IHx8IHF1YW50aXR5IDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuICB1cGRhdGVDYXJ0RGF0YShwcm9kdWN0LmlkLCB7IGNhcnRRdWFudGl0eTogcXVhbnRpdHkgfSlcbiAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufTtcbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwczovL29nYW1pLWFwaS5oZXJva3VhcHAuY29tXCI7XG4iLCJleHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeVNsdWcgPSAoYXJyLCBzbHVnKSA9PiB7XG4gIHJldHVybiBzbHVnICYmIHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiXG4gICAgPyBhcnIuZmluZCgocCkgPT4gcC5zbHVnLnRvTG93ZXJDYXNlKCkgPT09IHNsdWcudG9Mb3dlckNhc2UoKSlcbiAgICA6IGFycjtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVUb3RhbFByaWNlID0gKGFycikgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmRpc2NvdW50KSB7XG4gICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eVxuICAgICAgICA/IChpdGVtLnByaWNlIC0gaXRlbS5kaXNjb3VudCkgKiBpdGVtLmNhcnRRdWFudGl0eVxuICAgICAgICA6IGl0ZW0ucHJpY2UgLSBpdGVtLmRpc2NvdW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eSA/IGl0ZW0ucHJpY2UgKiBpdGVtLmNhcnRRdWFudGl0eSA6IGl0ZW0ucHJpY2U7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRvdGFsO1xufTtcblxuLy9DYXJ0XG5leHBvcnQgY29uc3QgY2hlY2tQcm9kdWN0SW5DYXJ0ID0gKGNhcnRBcnIsIHBpZCkgPT4ge1xuICByZXR1cm4gcGlkID8gY2FydEFyci5maW5kKChpdGVtKSA9PiBpdGVtLnByb2R1Y3RJZCA9PT0gcGlkKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RDYXJ0UXVhbnRpdHkgPSAoY2FydEFyciwgcGlkKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzSW5DYXJ0ID0gY2FydEFyci5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdElkID09PSBwaWQpO1xuICBpZiAocHJvZHVjdHNJbkNhcnQgJiYgcHJvZHVjdHNJbkNhcnQubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0ID0gcHJvZHVjdHNJbkNhcnQucmVkdWNlKFxuICAgICAgKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0uY2FydFF1YW50aXR5LFxuICAgICAgMFxuICAgICk7XG4gICAgcmV0dXJuIHRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG4vL1dpc2hsaXN0XG5leHBvcnQgY29uc3QgY2hlY2tQcm9kdWN0SW5XaXNobGlzdCA9ICh3aXNobGlzdEFyciwgcGlkKSA9PiB7XG4gIHJldHVybiBwaWQgPyB3aXNobGlzdEFyci5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwaWQpIDogdW5kZWZpbmVkO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURlYm91bmNlKHZhbHVlLCBkZWxheSkge1xuICBjb25zdCBbZGVib3VuY2VkVmFsdWUsIHNldERlYm91bmNlZFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSk7XG4gICAgfSwgZGVsYXkpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiBkZWJvdW5jZWRWYWx1ZTtcbn1cbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAocHJpY2UsIGxvY2FsZXMgPSBcInVzLVVTXCIsIGN1cnJlbmN5ID0gXCJVU0RcIikgPT4ge1xuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIHtcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgIGN1cnJlbmN5OiBjdXJyZW5jeSxcbiAgfSkuZm9ybWF0KHByaWNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQYXJhbSA9IChwYXJhbU5hbWUsIHBhcmFtVmFsdWUpID0+IHtcbiAgaWYgKHBhcmFtVmFsdWUgJiYgcGFyYW1WYWx1ZSAhPT0gXCJcIiAmJiBwYXJhbVZhbHVlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGAmJHtwYXJhbU5hbWV9PSR7cGFyYW1WYWx1ZX1gO1xuICB9XG4gIHJldHVybiBcIlwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoXG4gIGRhdGUsXG4gIGlucHV0Rm9ybWF0ID0gXCJZWVlZLU1NLUREXCIsXG4gIG91dHB1dEZvcm1hdCA9IFwiTU1NIERELCBZWVlZXCJcbikgPT4ge1xuICByZXR1cm4gbW9tZW50KGRhdGUsIGlucHV0Rm9ybWF0KS5mb3JtYXQob3V0cHV0Rm9ybWF0KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVEYXNoID0gKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLy0vZywgXCIgXCIpO1xufTtcbiIsImltcG9ydCB7XG4gIGZldGNoUHJvZHVjdElkV2lzaGxpc3REYXRhLFxuICBhZGRXaXNobGlzdERhdGEsXG4gIHJlbW92ZVdpc2hsaXN0RGF0YSxcbn0gZnJvbSBcIi4uL2FwaXMvd2lzaGxpc3RcIjtcblxuZXhwb3J0IGNvbnN0IG9uQWRkUHJvZHVjdFRvV2lzaGxpc3QgPSAoeyBwcm9kdWN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IgfSkgPT4ge1xuICBmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YShwcm9kdWN0LmlkKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWRkV2lzaGxpc3REYXRhKHByb2R1Y3QpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gb25TdWNjZXNzICYmIG9uU3VjY2VzcyhyZXMpKVxuICAgICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgIChlcnIpID0+XG4gICAgICAgICAgICAgIG9uRXJyb3IgJiZcbiAgICAgICAgICAgICAgb25FcnJvcihcIkFkZCBwcm9kdWN0IHRvIHdpc2xpc3QgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluXCIsIGVycilcbiAgICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiUHJvZHVjdCBhbHJlYWR5IGluIHdpc2hsaXN0XCIpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKFxuICAgICAgKGVycikgPT5cbiAgICAgICAgb25FcnJvciAmJlxuICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gd2lzbGlzdCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0ID0gKHtcbiAgcHJvZHVjdElkLFxuICBvblN1Y2Nlc3MsXG4gIG9uRXJyb3IsXG59KSA9PiB7XG4gIGlmIChwcm9kdWN0SWQgJiYgcHJvZHVjdElkICE9PSBcIlwiICYmIHByb2R1Y3RJZCAhPT0gbnVsbCkge1xuICAgIHJlbW92ZVdpc2hsaXN0RGF0YShwcm9kdWN0SWQpXG4gICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgICAuY2F0Y2goXG4gICAgICAgIChlcnIpID0+XG4gICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiUmVtb3ZlIHByb2R1Y3QgZmFpbCwgcGxlYXNlciB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhIZWFkZXJTY3JvbGwoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgY29uc3QgaGVhZGVyUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbaXNIZWFkZXJGaXhlZCwgc2V0SXNIZWFkZXJGaXhlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsID49IGhlYWRlclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCkge1xuICAgICAgICBzZXRJc0hlYWRlckZpeGVkKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNIZWFkZXJGaXhlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgW3Njcm9sbF0pO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgc2V0U2Nyb2xsKHdpbmRvdy5zY3JvbGxZKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2hlYWRlclJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyICR7Y2xhc3NOYW1lcyhcbiAgICAgICAgICB7IGZpeGVkOiBpc0hlYWRlckZpeGVkIH0sXG4gICAgICAgICAgcHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICl9YH1cbiAgICAgID5cbiAgICAgICAgPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgUHJvZHVjdERldGFpbEltYWdlcyBmcm9tIFwiLi9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsSW1hZ2VzXCI7XG5pbXBvcnQgUHJvZHVjdERldGFpbENvbnRlbnQgZnJvbSBcIi4vZWxlbWVudHMvUHJvZHVjdERldGFpbENvbnRlbnRcIjtcbmltcG9ydCBGZXRjaERhdGFIYW5kbGUgZnJvbSBcIi4uLy4uL290aGVyL0ZldGNoRGF0YUhhbmRsZVwiO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxUYWIgZnJvbSBcIi4vZWxlbWVudHMvUHJvZHVjdERldGFpbFRhYlwiO1xuXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsTGF5b3V0KHsgZGF0YSwgdHlwZSwgaGlkZVRhYiwgc3R5bGUgfSkge1xuICBpZiAodHlwZSA9PT0gXCJmbHVpZFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8Um93IGd1dHRlcj17MzB9PlxuICAgICAgICAgIDxDb2wgbWQ9ezEwfT5cbiAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsSW1hZ2VzIHR5cGU9XCJjb2x1bW5cIiBpbWFnZXM9e2RhdGEuaW1hZ2VzfSAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbWQ9ezE0fT5cbiAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsQ29udGVudCB0eXBlPVwiZmx1aWRcIiBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbWQ9ezI0fT5cbiAgICAgICAgICAgIHshaGlkZVRhYiAmJiAoXG4gICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsVGFiXG4gICAgICAgICAgICAgICAgZnVsbERlc2NyaXB0aW9uPXtkYXRhLmZ1bGxEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBzcGVjaWZpY2F0aW9ucz17ZGF0YS5zcGVjaWZpY2F0aW9uc31cbiAgICAgICAgICAgICAgICByZXZpZXdzPXtkYXRhLnJldmlld3N9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxSb3cgZ3V0dGVyPXszMH0+XG4gICAgICAgIDxDb2wgbWQ9ezEyfT5cbiAgICAgICAgICA8UHJvZHVjdERldGFpbEltYWdlcyBpbWFnZXM9e2RhdGEuaW1hZ2VzfSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgIDxQcm9kdWN0RGV0YWlsQ29udGVudCBkYXRhPXtkYXRhfSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsyNH0+XG4gICAgICAgICAgeyFoaWRlVGFiICYmIChcbiAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsVGFiXG4gICAgICAgICAgICAgIGZ1bGxEZXNjcmlwdGlvbj17ZGF0YS5mdWxsRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIHNwZWNpZmljYXRpb25zPXtkYXRhLnNwZWNpZmljYXRpb25zfVxuICAgICAgICAgICAgICByZXZpZXdzPXtkYXRhLnJldmlld3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdERldGFpbExheW91dCk7XG4iLCJpbXBvcnQgeyBCdXR0b24sIENvbCwgUmF0ZSwgUm93LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7XG4gIGNoZWNrUHJvZHVjdENhcnRRdWFudGl0eSxcbiAgY2hlY2tQcm9kdWN0SW5XaXNobGlzdCxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gXCIuLi8uLi8uLi9vdGhlci9RdWFudGl0eVNlbGVjdG9yXCI7XG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uLy4uLy4uL290aGVyL1NvY2lhbEljb25zXCI7XG5pbXBvcnQgeyBvbkFkZFByb2R1Y3RUb0NhcnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2NhcnRTZXJ2aWNlc1wiO1xuaW1wb3J0IHsgZmV0Y2hDYXJ0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XG5pbXBvcnQge1xuICBhZGRUb0NvbXBhcmUsXG4gIHJlbW92ZUZyb21Db21wYXJlLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21wYXJlQWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlsQ29udGVudCh7IGRhdGEsIHR5cGUgfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtjdXJyZW50UXVhbnRpdHksIHNldEN1cnJlbnRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2FkZFRvQ2FydExvYWRpbmcsIHNldEFkZFRvQ2FydExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcbiAgY29uc3QgY29tcGFyZVN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21wYXJlUmVkdWNlcik7XG4gIGNvbnN0IHByb2R1Y3RJbkNvbXBhcmUgPSBjaGVja1Byb2R1Y3RJbldpc2hsaXN0KGNvbXBhcmVTdGF0ZSwgZGF0YS5pZCk7XG4gIGNvbnN0IGF2YWlhYmxlUXVhbnRpdHkgPVxuICAgIGRhdGEucXVhbnRpdHkgLSBjaGVja1Byb2R1Y3RDYXJ0UXVhbnRpdHkoY2FydFN0YXRlLmRhdGEsIGRhdGEuaWQpO1xuICBjb25zb2xlLmxvZyhhdmFpYWJsZVF1YW50aXR5KTtcbiAgY29uc3Qgb25BZGRUb0NhcnQgPSAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcbiAgICBpZiAoYWRkVG9DYXJ0TG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRBZGRUb0NhcnRMb2FkaW5nKHRydWUpO1xuICAgIG9uQWRkUHJvZHVjdFRvQ2FydCh7XG4gICAgICBwcm9kdWN0LFxuICAgICAgcXVhbnRpdHksXG4gICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnRcIik7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFJlcXVlc3QoKSk7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogKG1lcywgZXJyKSA9PiB7XG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBtZXNzYWdlLmVycm9yKG1lcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBjb25zdCBvbkFkZFRvQ29tcGFyZSA9IChwcm9kdWN0KSA9PiB7XG4gICAgaWYgKHByb2R1Y3RJbkNvbXBhcmUpIHtcbiAgICAgIGRpc3BhdGNoKHJlbW92ZUZyb21Db21wYXJlKHByb2R1Y3QuaWQpKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBjb21wYXJlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChhZGRUb0NvbXBhcmUocHJvZHVjdCkpO1xuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjb21wYXJlXCIpO1xuICAgIH1cbiAgfTtcbiAgaWYgKHR5cGUgPT09IFwiZmx1aWRcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQgLXdpZGVcIj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsyNH0gc209ezI0fSB4bD17MTZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19sZWZ0XCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fbmFtZVwiPntkYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZFxuICAgICAgICAgICAgICAgICAgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvXG4gICAgICAgICAgICAgICAgICBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkXG4gICAgICAgICAgICAgICAgICBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGFcbiAgICAgICAgICAgICAgICAgIHF1aSBvZmZpY2lhIG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtXG4gICAgICAgICAgICAgICAgICBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZVxuICAgICAgICAgICAgICAgICAgaXBzYSBxdWFlIGFiIGlsbG8gaW52ZW50b3IuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTmVtbyBlbmltIGlwc2FtIHZvbHVwdGF0ZW0gcXVpYSB2b2x1cHRhcyBzaXQgYXNwZXJuYXR1ciBhdXRcbiAgICAgICAgICAgICAgICAgIG9kaXQgYXV0IGZ1Z2l0LCBzZWQgcXVpYSBjb25zZXF1dW50dXIgbWFnbmkgZG9sb3JlcyBlb3MgcXVpXG4gICAgICAgICAgICAgICAgICByYXRpb25lIHZvbHVwdGF0ZW1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fbWV0YVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNLVTo8L3NwYW4+IEExMzU5XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5DYXRlZ29yaWVzOjwvc3Bhbj4gRmFzdGZvb2RcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlRhZzo8L3NwYW4+IEZvb2QsIE9yZ2FuaWNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3NoYXJlXCI+XG4gICAgICAgICAgICAgICAgPGg1PlNoYXJlIGxpbms6PC9oNT5cbiAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsyNH0gc209ezI0fSB4bD17OH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3JpZ2h0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fZGVsaXZlcnlcIj5cbiAgICAgICAgICAgICAgICBGcmVlIGRlbGl2ZXJ5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2VcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19wcmljZS1kaXNjb3VudFwiPlxuICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cbiAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFJhdGUgZGVmYXVsdFZhbHVlPXtkYXRhLnJhdGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxRdWFudGl0eVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHNldEN1cnJlbnRRdWFudGl0eSh2YWwpfVxuICAgICAgICAgICAgICAgIG1heD17YXZhaWFibGVRdWFudGl0eX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgbG9hZGluZz17YWRkVG9DYXJ0TG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9DYXJ0KGRhdGEsIGN1cnJlbnRRdWFudGl0eSl9XG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9Db21wYXJlKGRhdGEpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGQgdG8gY29tcGFyZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2JlbmVmaXRzXCI+XG4gICAgICAgICAgICAgICAgPGxpPlNhdGlzZmFjdGlvbiAxMDAlIEd1YXJhbnRlZWQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5GcmVlIHNoaXBwaW5nIG9uIG9yZGVycyBvdmVyICQ5OTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjE0IGRheSBlYXN5IFJldHVybjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50XCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC10eXBlXCI+e2RhdGEuY2F0ZWdvcnl9PC9oNT5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19uYW1lXCI+e2RhdGEubmFtZX08L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgICAgIHRlbXBvclxuICAgICAgICB7LyogQ2hhbmdlIHRvIHtkYXRhLmRlc2NyaXB0aW9ufSAqL31cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fZGVsaXZlcnlcIj5GcmVlIGRlbGl2ZXJ5PC9kaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2VcIj5cbiAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPGRlbD57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9PC9kZWw+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlLWRpc2NvdW50XCI+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPFJhdGUgZGVmYXVsdFZhbHVlPXtkYXRhLnJhdGV9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaDM+XG4gICAgICA8UXVhbnRpdHlTZWxlY3RvclxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudFF1YW50aXR5KHZhbCl9XG4gICAgICAgIG1heD17YXZhaWFibGVRdWFudGl0eX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2FjdGlvbnNcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGxvYWRpbmc9e2FkZFRvQ2FydExvYWRpbmd9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSwgY3VycmVudFF1YW50aXR5KX1cbiAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluQ29tcGFyZSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0byBjb21wYXJlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3NoYXJlXCI+XG4gICAgICAgIDxoNT5TaGFyZSBsaW5rOjwvaDU+XG4gICAgICAgIDxTb2NpYWxJY29ucyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlYWN0Lm1lbW8oUHJvZHVjdERldGFpbENvbnRlbnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZnVuY3Rpb24gUHJvZHVjdERldGFpbEltYWdlcyh7IHR5cGUsIGltYWdlcyB9KSB7XG4gIGNvbnN0IHNsaWRlcjFTZXR0aW5ncyA9IHtcbiAgICBhcnJvd3M6IGZhbHNlLFxuICB9O1xuICBjb25zdCBzbGlkZXIyU2V0dGluZ3MgPSB7XG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICB2ZXJ0aWNhbDogdHlwZSA9PT0gXCJjb2x1bW5cIiA/IHRydWUgOiBmYWxzZSxcbiAgICAvLyBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgLz4sXG4gICAgLy8gbmV4dEFycm93OiA8TmV4dEFycm93IC8+LFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHZlcnRpY2FsOiB0eXBlID09PSBcImNvbHVtblwiICYmIGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBjb25zdCBbbmF2MSwgc2V0TmF2MV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbmF2Miwgc2V0TmF2Ml0gPSB1c2VTdGF0ZSgpO1xuICAvLyBpZiAodHlwZSA9PT0gXCJjb2x1bW5cIikge1xuICAvLyAgIHJldHVybiA8aDE+Q29sdW1uPC9oMT47XG4gIC8vIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWRldGFpbC1pbWFnZXMgJHtjbGFzc05hbWVzKHtcbiAgICAgICAgXCItY29sdW1uXCI6IHR5cGUgPT09IFwiY29sdW1uXCIsXG4gICAgICB9KX1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtaW1hZ2VzLWJpZ1wiPlxuICAgICAgICA8U2xpZGVyIGFzTmF2Rm9yPXtuYXYyfSByZWY9eyhjKSA9PiBzZXROYXYxKGMpfSB7Li4uc2xpZGVyMVNldHRpbmdzfT5cbiAgICAgICAgICB7aW1hZ2VzICYmXG4gICAgICAgICAgICBpbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic2xpZGUtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaW1nfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtaW1hZ2VzLXNtYWxsXCI+XG4gICAgICAgIDxTbGlkZXIgYXNOYXZGb3I9e25hdjF9IHJlZj17KGMpID0+IHNldE5hdjIoYyl9IHsuLi5zbGlkZXIyU2V0dGluZ3N9PlxuICAgICAgICAgIHtpbWFnZXMgJiZcbiAgICAgICAgICAgIGltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzbGlkZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpbWd9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFByb2R1Y3REZXRhaWxJbWFnZXMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmF0ZSwgVGFicywgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XG5cbmNvbnN0IFJldmlld0l0ZW0gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3Jldmlld3MtaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3Jldmlld3MtaXRlbV9fYXZhdGFyXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBkYXRhLnVzZXIuYXZhdGFyfVxuICAgICAgICAgIGFsdD1cIkN1c3RvbWVyIGF2YXRhclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxSYXRlIGRlZmF1bHRWYWx1ZT17NX0gZGlzYWJsZWQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3Jldmlld3MtaXRlbV9fY29udGVudFwiPlxuICAgICAgICA8aDU+e2RhdGEuY29tbWVudERhdGV9PC9oNT5cbiAgICAgICAgPGgzPntkYXRhLnVzZXIubmFtZX08L2gzPlxuICAgICAgICA8cD57ZGF0YS5yZXZpZXd9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsVGFiKHsgZnVsbERlc2NyaXB0aW9uLCBzcGVjaWZpY2F0aW9ucywgcmV2aWV3cyB9KSB7XG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzczpcIiwgdmFsdWVzKTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYlwiPlxuICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIiB0eXBlPVwiY2FyZFwiPlxuICAgICAgICA8VGFiUGFuZSB0YWI9XCJEZXNjcmlwdGlvblwiIGtleT1cIjFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIHtmdWxsRGVzY3JpcHRpb259XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgPFRhYlBhbmUgdGFiPVwiU3BlY2lmaWNhdGlvbnNcIiBrZXk9XCIyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3NwZWNpZmljYXRpb25zXCI+XG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+V2VpZ2h0PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57c3BlY2lmaWNhdGlvbnMud2VpZ2h0fTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+RGltZW5zaW9uczwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIHtzcGVjaWZpY2F0aW9ucy5kaW1lbnNpb25zLmxvbmd9IHh7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtzcGVjaWZpY2F0aW9ucy5kaW1lbnNpb25zLndpZHRofSB4e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7c3BlY2lmaWNhdGlvbnMuZGltZW5zaW9ucy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPkNvbG9yPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57c3BlY2lmaWNhdGlvbnMuY29sb3J9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5TaXplPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57c3BlY2lmaWNhdGlvbnMuc2l6ZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgIDxUYWJQYW5lIHRhYj1cIlJldmlld3NcIiBrZXk9XCIzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3Jldmlld3NcIj5cbiAgICAgICAgICAgIHtyZXZpZXdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFJldmlld0l0ZW0ga2V5PXtpbmRleH0gZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3Jldmlld3MtZm9ybVwiPlxuICAgICAgICAgICAgICA8aDU+QWRkIFJldmlldzwvaDU+XG4gICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgbmFtZT1cInJldmlld1wiXG4gICAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNX0+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBuYW1lIVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIGVtYWlsIVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJyYXRlXCIgbGFiZWw9XCJZb3VyIHJhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxSYXRlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBzaGFwZT1cInJvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXQgUmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RhYlBhbmU+XG4gICAgICA8L1RhYnM+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdERldGFpbFRhYik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBmb290ZXJMaW5rcyBmcm9tIFwiLi4vLi4vZGF0YS9mb290ZXItbGlua3MuanNvblwiO1xuaW1wb3J0IEZvb3RlclF1aWNrTGlua3MgZnJvbSBcIi4vZWxlbWVudHMvRm9vdGVyUXVpY2tMaW5rc1wiO1xuaW1wb3J0IEZvb3RlckluZm9tYXRpb24gZnJvbSBcIi4vZWxlbWVudHMvRm9vdGVySW5mb21hdGlvblwiO1xuaW1wb3J0IEZvb3RlclN1YmNyaWJlSW5wdXQgZnJvbSBcIi4vZWxlbWVudHMvRm9vdGVyU3ViY3JpYmVJbnB1dFwiO1xuXG5mdW5jdGlvbiBGb290ZXIoeyBjb250YWluZXJGbHVpZCwgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZvb3RlciAtc3R5bGUtb25lICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdG9wXCI+XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ9e2NvbnRhaW5lckZsdWlkfT5cbiAgICAgICAgICA8Um93IGd1dHRlcj17MTV9PlxuICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs5fSBsZz17OH0+XG4gICAgICAgICAgICAgIDxGb290ZXJJbmZvbWF0aW9uIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTV9IGxnPXsxNn0+XG4gICAgICAgICAgICAgIDxGb290ZXJRdWlja0xpbmtzIGNvbFNpemU9e3sgc3BhbjogOCB9fSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zdWJjcmliZVwiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxSb3cgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zdWJjcmliZV9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoNT5Kb2luIE91ciBOZXdzbGV0dGVyIE5vdzwvaDU+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBHZXQgRS1tYWlsIHVwZGF0ZXMgYWJvdXQgb3VyIGxhdGVzdCBzaG9wIGFuZCBzcGVjaWFsIG9mZmVycy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEwfT5cbiAgICAgICAgICAgICAgPEZvb3RlclN1YmNyaWJlSW5wdXQgdXJsPVwiaHR0cHM6Ly9qc3Rlci51czcubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9ZWQ0MGMwMDg0YTBjNWJhMzFiMzM2NWQ2NSZpZD1lYzZmMzJiZjVlXCIgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYm90dG9tXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYm90dG9tX193cmFwcGVyXCI+XG4gICAgICAgICAgICA8cD5Db3B5cmlnaHQgwqkgMjAyMiBPZ2FtaSAtIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2Zvb3Rlci9wYXltZW50LnBuZ1wifVxuICAgICAgICAgICAgICBhbHQ9XCJQYXltZW50IG1ldGhvZHNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRm9vdGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gXCIuLi8uLi9vdGhlci9Tb2NpYWxJY29uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJJbmZvbWF0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWluZm9cIj5cbiAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImZvb3Rlci1pbmZvX19sb2dvXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wifVxuICAgICAgICAgICAgYWx0PVwiT2dhbWkgTG9nb1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+QWRkcmVzczogNjAtNDkgUm9hZCAxMTM3OCBOZXcgWW9yazwvbGk+XG4gICAgICAgIDxsaT5QaG9uZTogKzY1IDExLjE4OC44ODg8L2xpPlxuICAgICAgICA8bGk+RW1haWw6IHJpdGlrQGtvbmZhdi5jb208L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxTb2NpYWxJY29ucyB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwiY2lyY2xlXCIgY2xhc3NOYW1lPVwiLWJ0bi1saWdodFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBmb290ZXJMaW5rcyBmcm9tIFwiLi4vLi4vLi4vZGF0YS9mb290ZXItbGlua3MuanNvblwiO1xuXG5mdW5jdGlvbiBGb290ZXJRdWlja0xpbmtzKHsgY29sU2l6ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3NcIj5cbiAgICAgIDxSb3cgZ3V0dGVyPXsxMH0ganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAge2Zvb3RlckxpbmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IHsuLi5jb2xTaXplfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmtzX19ncm91cFwiPlxuICAgICAgICAgICAgICA8aDU+e2l0ZW0udGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1zLm1hcCgobGluaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGxpbmsuaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGE+IHtsaW5rLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXJRdWlja0xpbmtzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYWlsY2hpbXBTdWJzY3JpYmUgZnJvbSBcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIjtcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcblxuY29uc3QgQ3VzdG9tRm9ybSA9IFJlYWN0Lm1lbW8oKHsgc3RhdHVzLCBtZXNzYWdlLCBvblZhbGlkYXRlZCB9KSA9PiB7XG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzOlwiLCB2YWx1ZSk7XG4gICAgdmFsdWUgJiZcbiAgICAgIG9uVmFsaWRhdGVkKHtcbiAgICAgICAgRU1BSUw6IHZhbHVlLmVtYWlsLFxuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJGYWlsZWQ6XCIsIGVycm9ySW5mbyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvcm1cbiAgICAgICAgbmFtZT1cImJhc2ljXCJcbiAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgICBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlci1zdWJjcmliZV9fZm9ybVwiXG4gICAgICA+XG4gICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICBub1N0eWxlPXt0cnVlfVxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsIVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGlucHV0IHlvdXIgRS1tYWlsIVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdfVxuICAgICAgICA+XG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIC8+XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8Rm9ybS5JdGVtIG5vU3R5bGU9e3RydWV9PlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImxpbmtcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU1VCU0NSSUJFXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPC9Gb3JtPlxuICAgICAge3N0YXR1cyA9PT0gXCJzZW5kaW5nXCIgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX0+c2VuZGluZy4uLjwvZGl2Pn1cbiAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtzdGF0dXMgPT09IFwic3VjY2Vzc1wiICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX1cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1lc3NhZ2UgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyU3ViY3JpYmVJbnB1dCh7IHVybCB9KSB7XG4gIHJldHVybiAoXG4gICAgPE1haWxjaGltcFN1YnNjcmliZVxuICAgICAgdXJsPXt1cmx9XG4gICAgICByZW5kZXI9eyh7IHN1YnNjcmliZSwgc3RhdHVzLCBtZXNzYWdlIH0pID0+IChcbiAgICAgICAgPEN1c3RvbUZvcm1cbiAgICAgICAgICBzdGF0dXM9e3N0YXR1c31cbiAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxuICAgICAgICAgIG9uVmFsaWRhdGVkPXsoZm9ybURhdGEpID0+IHN1YnNjcmliZShmb3JtRGF0YSl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9wTmF2T25lIGZyb20gXCIuL3RvcC1uYXYvVG9wTmF2T25lXCI7XG5pbXBvcnQgTWVudU9uZSBmcm9tIFwiLi9tZW51L01lbnVPbmVcIjtcbmltcG9ydCBGdW5jdGlvbk1lbnVPbmUgZnJvbSBcIi4vZnVuY3Rpb24tbWVudS9GdW5jdGlvbk1lbnVPbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyT25lKHsgYWN0aXZlSGVhZGVyQ29sbGFwc2UgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VG9wTmF2T25lIC8+XG4gICAgICA8TWVudU9uZSAvPlxuICAgICAgPEZ1bmN0aW9uTWVudU9uZSBhY3RpdmVIZWFkZXJDb2xsYXBzZT17YWN0aXZlSGVhZGVyQ29sbGFwc2V9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBEb3duT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxubGV0IGNhdGVnb3JpZXMgPSBbXG4gIHsgbmFtZTogXCJGcmVzaCBNZWF0XCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXG4gIHsgbmFtZTogXCJWZWdldGFibGVzXCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXG4gIHsgbmFtZTogXCJGcnVpdCAmIE51dCBHaWZ0c1wiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxuICB7IG5hbWU6IFwiRnJlc2ggQmVycmllc1wiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxuICB7IG5hbWU6IFwiT2NlYW4gRm9vZHNcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbiAgeyBuYW1lOiBcIkJ1dHRlciAmIEVnZ3NcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbiAgeyBuYW1lOiBcIkZhc3Rmb29kXCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXG4gIHsgbmFtZTogXCJGcmVzaCBPbmlvblwiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxuICB7IG5hbWU6IFwiUGFwYXlheWEgJiBDcmlzcHNcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbiAgeyBuYW1lOiBcIk9hdG1lYWxcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbiAgeyBuYW1lOiBcIkZyZXNoIEJhbmFuYXNcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbl07XG5cbmZ1bmN0aW9uIENhdGVnb3J5Q29sYXBwc2UoeyBhY3RpdmUgfSkge1xuICBjb25zdCB7IFBhbmVsIH0gPSBDb2xsYXBzZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWNvbGxhcHNlXCI+XG4gICAgICA8Q29sbGFwc2VcbiAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PXthY3RpdmUgPyBcIjFcIiA6IG51bGx9XG4gICAgICAgIGV4cGFuZEljb249eyh7IGlzQWN0aXZlIH0pID0+IChcbiAgICAgICAgICA8RG93bk91dGxpbmVkIHJvdGF0ZT17aXNBY3RpdmUgPyAtMTgwIDogMH0gLz5cbiAgICAgICAgKX1cbiAgICAgICAgZXhwYW5kSWNvblBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgPlxuICAgICAgICA8UGFuZWxcbiAgICAgICAgICBoZWFkZXI9XCJBbGwgZGVwYXJ0bWVudHNcIlxuICAgICAgICAgIGtleT1cIjFcIlxuICAgICAgICAgIGV4dHJhPXs8aSBjbGFzc05hbWU9XCJmYXIgZmEtYmFyc1wiIC8+fVxuICAgICAgICA+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT57aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhDYXRlZ29yeUNvbGFwcHNlKTtcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVRvdGFsUHJpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xuXG5mdW5jdGlvbiBGdW5jdGlvbkl0ZW1zKHsgaGlkZVRvdGFsLCBoaWRlV2lzaGxpc3QgfSkge1xuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zXCI+XG4gICAgICB7IWhpZGVXaXNobGlzdCAmJiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL3dpc2hsaXN0XCJ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zLWl0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25faGVhcnRfYWx0XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG5cbiAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2NhcnRcIn0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zLWl0ZW1cIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2JhZ19hbHRcIiAvPlxuXG4gICAgICAgICAgeyFoaWRlVG90YWwgJiZcbiAgICAgICAgICAgIChjYXJ0U3RhdGUuZGF0YSA/IChcbiAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdEN1cnJlbmN5KGNhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlLmRhdGEpKX08L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0Q3VycmVuY3koMCl9PC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGdW5jdGlvbkl0ZW1zKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IE1vYmlsZU5hdmlnYXRvciBmcm9tIFwiLi9Nb2JpbGVOYXZpZ2F0b3JcIjtcblxuZnVuY3Rpb24gTW9iaWxlTWVudU9wZW5lcigpIHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvblNob3dEcmF3ZXIgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgfTtcbiAgY29uc3Qgb25DbG9zZURyYXdlciA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGEgb25DbGljaz17b25TaG93RHJhd2VyfSBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1vcGVuZXJcIiBocmVmPVwiI1wiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiIC8+XG4gICAgICA8L2E+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIHRpdGxlPVwiQ2xvc2VcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlRHJhd2VyfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcbiAgICAgICAgd2lkdGg9ezMyMH1cbiAgICAgID5cbiAgICAgICAgPE1vYmlsZU5hdmlnYXRvciAvPlxuICAgICAgPC9EcmF3ZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTW9iaWxlTWVudU9wZW5lcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgbmF2aWdhdG9yRGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9uYXZpZ2F0b3IuanNvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gXCIuLi8uLi9vdGhlci9Tb2NpYWxJY29uc1wiO1xuXG5mdW5jdGlvbiBNb2JpbGVOYXZpZ2F0b3IoKSB7XG4gIGNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnQ6IGUua2V5IH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGVcIj5cbiAgICAgIDxNZW51XG4gICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlLW5hdmlnYXRvclwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX1cbiAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICA+XG4gICAgICAgIDxTdWJNZW51IGtleT1cImhvbWVwYWdlXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuSE9NRS50aXRsZX0+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuSE9NRS5zdWJNZW51Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICA8U3ViTWVudSBrZXk9XCJzaG9wXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuU0hPUC50aXRsZX0+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBsYXlvdXRcIiB0aXRsZT1cIkxheW91dCBzaG9wXCI+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUubGF5b3V0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBkZXRhaWxcIiB0aXRsZT1cIkRldGFpbCBzaG9wXCI+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUuZGV0YWlsLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBwYWdlc1wiIHRpdGxlPVwiUGFnZXMgc2hvcFwiPlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LnBhZ2VzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPFN1Yk1lbnUga2V5PVwicGFnZXNcIiB0aXRsZT17bmF2aWdhdG9yRGF0YS5QQUdFUy50aXRsZX0+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuUEFHRVMuc3ViTWVudS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJhbGlwYXlcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5BQk9VVC5ocmVmfT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FudC5kZXNpZ25cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hdmlnYXRvckRhdGEuQUJPVVQudGl0bGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDwvTWVudT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtZnVuY3Rpb25zXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9vdGhlci9sb2dpblwifT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1mdW5jdGlvbnNfX2xvZ2luXCI+TG9naW4gLyBSZWdpc3RlcjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE1vYmlsZU5hdmlnYXRvcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgbmF2aWdhdG9yRGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9uYXZpZ2F0b3IuanNvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBOYXZpZ2F0b3IoKSB7XG4gIGNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW0gLXRvZ2dsZWFibGVcIj5cbiAgICAgICAgPExpbmsgaHJlZj17bmF2aWdhdG9yRGF0YS5IT01FLmhyZWZ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5IT01FLnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51XCI+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuSE9NRS5zdWJNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW0gLXRvZ2dsZWFibGVcIj5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuU0hPUC5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuU0hPUC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudSAtd2lkZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51LWdyb3VwXCI+XG4gICAgICAgICAgICA8aDU+TGF5b3V0IHNob3A8L2g1PlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LmxheW91dC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudS1ncm91cFwiPlxuICAgICAgICAgICAgPGg1PkRldGFpbCBzaG9wPC9oNT5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5kZXRhaWwubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnUtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxoNT5QYWdlcyBzaG9wPC9oNT5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5wYWdlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtIC10b2dnbGVhYmxlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkJMT0cuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkJMT0cudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5CTE9HLnN1Yk1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbSAtdG9nZ2xlYWJsZVwiPlxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5QQUdFUy5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuUEFHRVMudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5QQUdFUy5zdWJNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuQUJPVVQuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkFCT1VULnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE5hdmlnYXRvcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlbGVjdCwgQXV0b0NvbXBsZXRlLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jYXRlZ29yaWVzLmpzb25cIjtcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3VzZURlYm91bmRcIjtcbmltcG9ydCB7IGZldGNoU2VhcmNoZWRQcm9kdWN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBlbnRlckJ1dHRvbiA9IFwiU2VhcmNoXCIsIGhpZGVTZWxlY3QgfSkge1xuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbY3VycmVudFNlYXJjaCwgc2V0Q3VycmVudFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRDYXRlZ29yeSwgc2V0Q3VycmVudENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWJvdW5kVmFsdWUgPSB1c2VEZWJvdW5jZShjdXJyZW50U2VhcmNoLCAzMDApO1xuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcbiAgY29uc3QgeyBzZWFyY2hlZFByb2R1Y3RzIH0gPSBzaG9wU3RhdGU7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIHNldEN1cnJlbnRTZWFyY2godmFsKTtcbiAgfTtcbiAgY29uc3Qgb25TZWxlY3RPcHRpb24gPSAodmFsdWUsIG9wdGlvbikgPT4ge1xuICAgIHNldEN1cnJlbnRTZWFyY2godmFsdWUpO1xuICB9O1xuICBjb25zdCBvblNlYXJjaCA9ICh2YWwpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRTZWFyY2ggfHwgY3VycmVudFNlYXJjaCA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIsXG4gICAgICAgIHF1ZXJ5OiB7IHE6IGN1cnJlbnRTZWFyY2ggfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25DaG9vc2VDYXRlb2dyeSA9ICh2YWwpID0+IHtcbiAgICBzZXRDdXJyZW50Q2F0ZWdvcnkodmFsKTtcbiAgfTtcbiAgY29uc3Qgb3B0aW9ucyA9XG4gICAgc2VhcmNoZWRQcm9kdWN0cy5kYXRhLmxlbmd0aCA+IDAgJiZcbiAgICBzZWFyY2hlZFByb2R1Y3RzLmRhdGEubWFwKChpdGVtKSA9PiAoeyB2YWx1ZTogaXRlbS5uYW1lIH0pKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0KHtcbiAgICAgICAgaW5wdXQ6IGN1cnJlbnRTZWFyY2gsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRDYXRlZ29yeSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW2RlYm91bmRWYWx1ZSwgY3VycmVudENhdGVnb3J5XSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS13cmFwcGVyXCI+XG4gICAgICAgIHshaGlkZVNlbGVjdCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS1zZWxlY3RcIj5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50Q2F0ZWdvcnl9XG4gICAgICAgICAgICAgIHN1ZmZpeEljb249ezxpIGNsYXNzTmFtZT1cImZhciBmYS1hbmdsZS1kb3duXCIgLz59XG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hvb3NlQ2F0ZW9ncnl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj5BbGwgY2F0ZWdvcmllczwvT3B0aW9uPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbS52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm0taW5wdXRcIj5cbiAgICAgICAgICA8QXV0b0NvbXBsZXRlXG4gICAgICAgICAgICBiYWNrZmlsbFxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3RPcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXRWYWx1ZSwgb3B0aW9uKSA9PlxuICAgICAgICAgICAgICBvcHRpb24udmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGlucHV0VmFsdWUudG9VcHBlckNhc2UoKSkgIT09XG4gICAgICAgICAgICAgIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0LlNlYXJjaFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG5lZWRcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBlbnRlckJ1dHRvbj17ZW50ZXJCdXR0b259XG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgbG9hZGluZz17c2VhcmNoZWRQcm9kdWN0cy5sb2FkaW5nfVxuICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlYXJjaEZvcm0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBDYXRlZ29yeUNvbGFwcHNlIGZyb20gXCIuLi9lbGVtZW50cy9DYXRlZ29yeUNvbGFwcHNlXCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi4vZWxlbWVudHMvU2VhcmNoRm9ybVwiO1xuXG5mdW5jdGlvbiBGdW5jdGlvbk1lbnVPbmUoeyBhY3RpdmVIZWFkZXJDb2xsYXBzZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZnVuY3Rpb24tbWVudS1vbmVcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY3Rpb24tbWVudS13cmFwcGVyXCI+XG4gICAgICAgICAgPFJvdyBndXR0ZXI9ezMwfT5cbiAgICAgICAgICAgIDxDb2wgeHM9e3sgc3BhbjogMjQsIG9yZGVyOiAyIH19IG1kPXt7IHNwYW46IDgsIG9yZGVyOiAxIH19IGxnPXs2fT5cbiAgICAgICAgICAgICAgPENhdGVnb3J5Q29sYXBwc2UgYWN0aXZlPXthY3RpdmVIZWFkZXJDb2xsYXBzZX0gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICB4cz17eyBzcGFuOiAyNCwgb3JkZXI6IDEgfX1cbiAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogMTYsIG9yZGVyOiAyIH19XG4gICAgICAgICAgICAgIGxnPXsxOH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGdW5jdGlvbk1lbnVPbmUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSBcIi4uL2VsZW1lbnRzL05hdmlnYXRvclwiO1xuaW1wb3J0IEZ1bmN0aW9uSXRlbXMgZnJvbSBcIi4uL2VsZW1lbnRzL0Z1bmN0aW9uSXRlbXNcIjtcbmltcG9ydCBNb2JpbGVNZW51T3BlbmVyIGZyb20gXCIuLi9lbGVtZW50cy9Nb2JpbGVNZW51T3BlbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVPbmUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51IC1zdHlsZS1vbmVcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS13cmFwcGVyXCI+XG4gICAgICAgICAgPE1vYmlsZU1lbnVPcGVuZXIgLz5cbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1sb2dvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCJ9XG4gICAgICAgICAgICAgICAgYWx0PVwiT2dhbWkgbG9nb1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxOYXZpZ2F0b3IgLz5cbiAgICAgICAgICA8RnVuY3Rpb25JdGVtcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uLy4uL290aGVyL1NvY2lhbEljb25zXCI7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBmbGFnRGF0YSA9IFtcbiAgeyBuYW1lOiBcImVuZ2xpc2hcIiwgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2ZsYWctdXNhLnBuZ1wiIH0sXG4gIHsgbmFtZTogXCJqYXBhbmVzZVwiLCBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvZmxhZy1qcC5wbmdcIiB9LFxuICB7IG5hbWU6IFwidmlldG5hbWVzZVwiLCBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvZmxhZy12bi5wbmdcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wTmF2T25lKHsgY29udGFpbmVyRmx1aWQgfSkge1xuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmVcIj5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ9e2NvbnRhaW5lckZsdWlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1sZWZ0XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGVcIiAvPlxuICAgICAgICAgICAgICAgIHJpdGlrQGtvbmZhdi5jb21cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1waG9uZS1hbHRcIiAvPlxuICAgICAgICAgICAgICAgICs2NSAxMS4xODguODg4XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmUtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmUtcmlnaHRfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPFNvY2lhbEljb25zIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmUtcmlnaHRfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPFNlbGVjdCBkZWZhdWx0VmFsdWU9XCJlbmdsaXNoXCIgd2lkdGg9ezEyNX0gYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICB7ZmxhZ0RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzIC8gMTYgKyBcImVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAgLyAxNiArIFwiZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC0zIC8gMTYgKyBcImVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSAvIDE2ICsgXCJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtb25lLXJpZ2h0X19pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hdXRoL2xvZ2luXCJ9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQmFja1RvcCB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBIZWFkZXJPbmUgZnJvbSBcIi4uL2hlYWRlci9IZWFkZXJPbmVcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Zvb3Rlci9Gb290ZXJcIjtcbmltcG9ydCB3aXRoSGVhZGVyU2Nyb2xsIGZyb20gXCIuLi8uLi9jb21tb24vd2l0aEhlYWRlclNjcm9sbFwiO1xuXG5jb25zdCBTY3JvbGxlZEhlYWRlciA9IHdpdGhIZWFkZXJTY3JvbGwoSGVhZGVyT25lKTtcblxuZnVuY3Rpb24gTGF5b3V0T25lKHsgdGl0bGUsIGNoaWxkcmVuLCBoZWFkZXJDbGFzcywgZm9vdGVyQ2xhc3MgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFNjcm9sbGVkSGVhZGVyIGNsYXNzTmFtZT17aGVhZGVyQ2xhc3N9IC8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8Rm9vdGVyIGNsYXNzTmFtZT17Zm9vdGVyQ2xhc3N9IC8+XG4gICAgICA8QmFja1RvcCAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKExheW91dE9uZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGZsdWlkLCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2ZsdWlkID8gXCJjb250YWluZXItZmx1aWRcIiA6IFwiY29udGFpbmVyXCJ9PntjaGlsZHJlbn08L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNrZWxldG9uLCBFbXB0eSB9IGZyb20gXCJhbnRkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZldGNoRGF0YUhhbmRsZSh7XG4gIGRhdGEsXG4gIGVycm9yTWVzc2FnZSA9IFwiR2V0IHByb2R1Y3RzIGZhaWwsIHBsZWFzZSB0cnkgYWdhaW5cIixcbiAgZW1wdHlEZXNjcmlwdGlvbiA9IFwiTm8gcHJvZHVjdCBpbiB0aGlzIGNhdGVnb3J5XCIsXG4gIHJlbmRlckRhdGEsXG59KSB7XG4gIHJldHVybiBkYXRhLmxvYWRpbmcgPyAoXG4gICAgPFNrZWxldG9uIGFjdGl2ZSAvPlxuICApIDogZGF0YS5lcnJvciA/IChcbiAgICA8aDM+e2Vycm9yTWVzc2FnZX08L2gzPlxuICApIDogZGF0YS5kYXRhLmxlbmd0aCA+IDAgPyAoXG4gICAgcmVuZGVyRGF0YSAmJiByZW5kZXJEYXRhKGRhdGEuZGF0YSlcbiAgKSA6IChcbiAgICA8RW1wdHlcbiAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxuICAgICAgZGVzY3JpcHRpb249e2VtcHR5RGVzY3JpcHRpb259XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gXCIuLi8uLi9jb21tb24vdXNlRGVib3VuZFwiO1xuXG5mdW5jdGlvbiBRdWFudGl0eVNlbGVjdG9yKHtcbiAgbWluLFxuICBtYXgsXG4gIGRlZmF1bHRWYWx1ZSA9IDEsXG4gIGNsYXNzTmFtZSxcbiAgb25DaGFuZ2UsXG4gIG9uRGVjcmVhc2UsXG4gIG9uSW5jcmVhc2UsXG59KSB7XG4gIGNvbnN0IGZpcnN0VXBkYXRlID0gdXNlUmVmKHRydWUpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XG4gIGNvbnN0IGRlYm91bmRWYWx1ZSA9IHVzZURlYm91bmNlKHZhbHVlLCAzMDApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmaXJzdFVwZGF0ZS5jdXJyZW50KSB7XG4gICAgICBmaXJzdFVwZGF0ZS5jdXJyZW50ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHZhbHVlKTtcbiAgfSwgW2RlYm91bmRWYWx1ZV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFZhbHVlKGRlZmF1bHRWYWx1ZSk7XG4gIH0sIFtkZWZhdWx0VmFsdWVdKTtcbiAgY29uc3QgZGVjcmVhc2VWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAobWluICYmIHZhbHVlIDw9IG1pbikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgPD0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvbkRlY3JlYXNlICYmIG9uRGVjcmVhc2UoKTtcbiAgICAgIHNldFZhbHVlKHZhbHVlIC0gMSk7XG4gICAgfVxuICB9LCBbdmFsdWVdKTtcbiAgY29uc3QgaW5jcmVhc2VWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAodmFsdWUgPj0gbWF4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9uSW5jcmVhc2UgJiYgb25JbmNyZWFzZSgpO1xuICAgIHNldFZhbHVlKHZhbHVlICsgMSk7XG4gIH0sIFt2YWx1ZV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcXVhbnRpdHktc2VsZWN0b3IgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5LXNlbGVjdG9yLW51bWJlclwiPnt2YWx1ZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHktc2VsZWN0b3ItY29udHJvbGxlclwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cImxpbmtcIlxuICAgICAgICAgIGRpc2FibGVkPXt2YWx1ZSA8PSBtaW4gfHwgdmFsdWUgPD0gMX1cbiAgICAgICAgICBvbkNsaWNrPXtkZWNyZWFzZVZhbHVlfVxuICAgICAgICA+XG4gICAgICAgICAgLVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIGRpc2FibGVkPXt2YWx1ZSA+PSBtYXh9IG9uQ2xpY2s9e2luY3JlYXNlVmFsdWV9PlxuICAgICAgICAgICtcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhRdWFudGl0eVNlbGVjdG9yKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmZ1bmN0aW9uIFNlY3Rpb25UaXRsZSh7IHRpdGxlLCBoaWRlRGVjb3JhdGlvbiwgY2xhc3NOYW1lLCBzdHlsZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9uLXRpdGxlICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9IHN0eWxlPXtzdHlsZX0+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICB7IWhpZGVEZWNvcmF0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZS1kZWNvcmF0aW9uXCIgLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2VjdGlvblRpdGxlKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2NpYWxJY29ucyh7IGNsYXNzTmFtZSwgdHlwZSA9IFwibGlua1wiLCBzaGFwZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17YHNvY2lhbC1pY29ucyAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgIDxsaT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWludmlzaW9uXCI+PC9pPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxCdXR0b24gdHlwZT17dHlwZX0gc2hhcGU9e3NoYXBlfSBocmVmPVwiI1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1waW50ZXJlc3QtcFwiPjwvaT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBtZXNzYWdlLCBSYXRlLCBUb29sdGlwLCBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ291bnRkb3duLCB7IHplcm9QYWQgfSBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHsgY2hlY2tQcm9kdWN0SW5XaXNobGlzdCB9IGZyb20gXCIuLi8uLi9jb21tb24vc2hvcFV0aWxzXCI7XG5pbXBvcnQgeyBmZXRjaENhcnRSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcbmltcG9ydCB7IGZldGNoV2lzaExpc3RSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvd2lzaGxpc3RBY3Rpb25zXCI7XG5pbXBvcnQge1xuICBhZGRUb0NvbXBhcmUsXG4gIHJlbW92ZUZyb21Db21wYXJlLFxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21wYXJlQWN0aW9uc1wiO1xuaW1wb3J0IHsgb25BZGRQcm9kdWN0VG9DYXJ0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jYXJ0U2VydmljZXNcIjtcbmltcG9ydCB7XG4gIG9uQWRkUHJvZHVjdFRvV2lzaGxpc3QsXG4gIG9uUmVtb3ZlUHJvZHVjdEZyb21XaXNobGlzdCxcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi93aXNobGlzdFNlcnZpY2VzXCI7XG5pbXBvcnQgUHJvZHVjdERldGFpbExheW91dCBmcm9tIFwiLi4vZGV0YWlsL3Byb2R1Y3QvUHJvZHVjdERldGFpbExheW91dFwiO1xuXG5mdW5jdGlvbiBQcm9kdWN0KHsgZGF0YSwgY2xhc3NOYW1lLCB0eXBlLCBjb3VudGRvd25MYXN0ID0gMTAwMDAwMDAwIH0pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWRkVG9DYXJ0TG9hZGluZywgc2V0QWRkVG9DYXJ0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthZGRUb1dpc2hsaXN0TG9hZGluZywgc2V0QWRkVG9XaXNobGlzdExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcbiAgY29uc3Qgd2lzaGxpc3RTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUud2lzaGxpc3RSZWR1Y2VyKTtcbiAgY29uc3QgY29tcGFyZVN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21wYXJlUmVkdWNlcik7XG4gIGNvbnN0IHByb2R1Y3RJbldpc2hsaXN0ID0gY2hlY2tQcm9kdWN0SW5XaXNobGlzdCh3aXNobGlzdFN0YXRlLmRhdGEsIGRhdGEuaWQpO1xuICBjb25zdCBwcm9kdWN0SW5Db21wYXJlID0gY2hlY2tQcm9kdWN0SW5XaXNobGlzdChjb21wYXJlU3RhdGUsIGRhdGEuaWQpO1xuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxWaXNpYmxlKHRydWUpO1xuICB9O1xuICBjb25zdCBvbk1vZGFsQ2xvc2UgPSAoZSkgPT4ge1xuICAgIHNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gIH07XG4gIGNvbnN0IG9uQWRkVG9DYXJ0ID0gKHByb2R1Y3QpID0+IHtcbiAgICBpZiAoYWRkVG9DYXJ0TG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRBZGRUb0NhcnRMb2FkaW5nKHRydWUpO1xuICAgIG9uQWRkUHJvZHVjdFRvQ2FydCh7XG4gICAgICBwcm9kdWN0LFxuICAgICAgb25TdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBzZXRBZGRUb0NhcnRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjYXJ0XCIpO1xuICAgICAgICBkaXNwYXRjaChmZXRjaENhcnRSZXF1ZXN0KCkpO1xuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IChtZXMsIGVycikgPT4ge1xuICAgICAgICBzZXRBZGRUb0NhcnRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgbWVzc2FnZS5lcnJvcihtZXMpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgb25BZGRXaXNobGlzdCA9IChwcm9kdWN0KSA9PiB7XG4gICAgaWYgKGFkZFRvV2lzaGxpc3RMb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEFkZFRvV2lzaGxpc3RMb2FkaW5nKHRydWUpO1xuICAgIGlmICghcHJvZHVjdEluV2lzaGxpc3QpIHtcbiAgICAgIG9uQWRkUHJvZHVjdFRvV2lzaGxpc3Qoe1xuICAgICAgICBwcm9kdWN0LFxuICAgICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gd2lzaGxpc3RcIik7XG4gICAgICAgICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdFJlcXVlc3QoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IChtZXMsIGVycikgPT4ge1xuICAgICAgICAgIHNldEFkZFRvV2lzaGxpc3RMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKG1lcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3Qoe1xuICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRBZGRUb1dpc2hsaXN0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIHdpc2hsaXN0XCIpO1xuICAgICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RSZXF1ZXN0KCkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiAobWVzLCBlcnIpID0+IHtcbiAgICAgICAgICBzZXRBZGRUb1dpc2hsaXN0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihtZXMpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uQWRkVG9Db21wYXJlID0gKHByb2R1Y3QpID0+IHtcbiAgICBpZiAocHJvZHVjdEluQ29tcGFyZSkge1xuICAgICAgZGlzcGF0Y2gocmVtb3ZlRnJvbUNvbXBhcmUocHJvZHVjdC5pZCkpO1xuICAgICAgbWVzc2FnZS5lcnJvcihcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIGNvbXBhcmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKGFkZFRvQ29tcGFyZShwcm9kdWN0KSk7XG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIGNvbXBhcmVcIik7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRSYW5kb21BcmJpdHJhcnkgPSAobWluLCBtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICB9O1xuICBjb25zdCByZWRlclByb2R1Y3RUeXBlID0gKHR5cGUpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJ0aW55XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0LXRpbnkgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtdGlueS1pbWdcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtkYXRhLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuY292ZXJJbWFnZX0gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC10aW55LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtdGlueS1uYW1lXCIgdGl0bGU9XCJQdXJlIFBpbmVhcHBsZVwiPlxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGlueS1wcmljZVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XG4gICAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KVxuICAgICAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJkYWxlXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0LWRhbGUgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1pbWdcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtkYXRhLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuY292ZXJJbWFnZX0gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPENvdW50ZG93blxuICAgICAgICAgICAgICBkYXRlPXtEYXRlLm5vdygpICsgZ2V0UmFuZG9tQXJiaXRyYXJ5KDEwMDAwMDAwMCwgMTUwMDAwMDAwKX1cbiAgICAgICAgICAgICAgcmVuZGVyZXI9eyh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY291bnRkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKGRheXMpfTwvaDY+IDxzcGFuPmRheXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1jb3VudGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChob3Vycyl9PC9oNj4gPHNwYW4+aHI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1jb3VudGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChtaW51dGVzKX0gPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5taW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1jb3VudGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChzZWNvbmRzKX08L2g2PiA8c3Bhbj5zZWM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtdHlwZVwiPntkYXRhLmNhdGVnb3J5fTwvaDU+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtbmFtZVwiIHRpdGxlPVwiUHVyZSBQaW5lYXBwbGVcIj5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxuICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPGRlbD57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9PC9kZWw+fVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJBZGQgdG8gd2lzaGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFdpc2hsaXN0KGRhdGEpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdC1idG4gJHtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5XaXNobGlzdCxcbiAgICAgICAgICAgICAgICAgIH0pfWB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgICBhZGRUb1dpc2hsaXN0TG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ091dGxpbmVkIHNwaW4gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtaGVhcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFkZCB0byBjYXJ0XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWJ0blwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnRMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1zaG9wcGluZy1iYWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFkZCB0byBjb21wYXJlXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWJ0biAke2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbkNvbXBhcmUsXG4gICAgICAgICAgICAgICAgICB9KX1gfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXs8aSBjbGFzc05hbWU9XCJmYXIgZmEtcmFuZG9tXCIgLz59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlF1aWNrIHZpZXdcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWJ0blwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cImZhciBmYS1leWVcIiAvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJsaXN0XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWdcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtkYXRhLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuY292ZXJJbWFnZX0gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtzaG93TW9kYWx9PlxuICAgICAgICAgICAgICAgIFF1aWNrIHZpZXdcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1saXN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtdHlwZVwiPntkYXRhLmNhdGVnb3J5fTwvaDU+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIiB0aXRsZT1cIlB1cmUgUGluZWFwcGxlXCI+XG4gICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8UmF0ZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtcmF0ZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucmF0ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBuaWFtXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAge2RhdGEucXVhbnRpdHkgPiAwID8gKFxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LWF2YWlsYWJpbGl0eSAtaW5zdG9ja1wiPlxuICAgICAgICAgICAgICAgICAgQXZhaWxhYmlsaXR5OiA8c3Bhbj4ge2RhdGEucXVhbnRpdHl9IGluIHN0b2NrPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtYXZhaWxhYmlsaXR5IC1vdXRzdG9ja1wiPlxuICAgICAgICAgICAgICAgICAgQXZhaWxhYmlsaXR5OiA8c3Bhbj4gT3V0IHN0b2NrPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1saXN0LWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZWxpdmVyeVwiPlxuICAgICAgICAgICAgICAgIEZyZWUgZGVsaXZlcnlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19wcmljZVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlLWRpc2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPXthZGRUb0NhcnRMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ29tcGFyZShkYXRhKX1cbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWRkIHRvIGNvbXBhcmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0ICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltZ1wiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9e2RhdGEubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5jb3ZlckltYWdlfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtdHlwZVwiPntkYXRhLmNhdGVnb3J5fTwvaDU+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIiB0aXRsZT1cIlB1cmUgUGluZWFwcGxlXCI+XG4gICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XG4gICAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KVxuICAgICAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJBZGQgdG8gd2lzaGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFdpc2hsaXN0KGRhdGEpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdC1idG4gJHtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5XaXNobGlzdCxcbiAgICAgICAgICAgICAgICAgIH0pfWB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgICBhZGRUb1dpc2hsaXN0TG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ091dGxpbmVkIHNwaW4gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtaGVhcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFkZCB0byBjYXJ0XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWJ0blwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnRMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1zaG9wcGluZy1iYWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFkZCB0byBjb21wYXJlXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWJ0biAke2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbkNvbXBhcmUsXG4gICAgICAgICAgICAgICAgICB9KX1gfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXs8aSBjbGFzc05hbWU9XCJmYXIgZmEtcmFuZG9tXCIgLz59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlF1aWNrIHZpZXdcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWJ0blwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cImZhciBmYS1leWVcIiAvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZWRlclByb2R1Y3RUeXBlKHR5cGUpfVxuICAgICAgPE1vZGFsXG4gICAgICAgIHZpc2libGU9e21vZGFsVmlzaWJsZX1cbiAgICAgICAgb25DYW5jZWw9e29uTW9kYWxDbG9zZX1cbiAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICBoZWFkZXI9e251bGx9XG4gICAgICAgIHdpZHRoPXs4NjB9XG4gICAgICA+XG4gICAgICAgIDxQcm9kdWN0RGV0YWlsTGF5b3V0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fSBoaWRlVGFiIGRhdGE9e2RhdGF9IC8+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFByb2R1Y3QpO1xuIiwiaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uL3Byb2R1Y3QvUHJvZHVjdFwiO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vLi4vb3RoZXIvU2VjdGlvblRpdGxlXCI7XG5pbXBvcnQgRmV0Y2hEYXRhSGFuZGxlIGZyb20gXCIuLi8uLi9vdGhlci9GZXRjaERhdGFIYW5kbGVcIjtcblxuZnVuY3Rpb24gUHJvZHVjdEdyaWQoe1xuICBzdHlsZSxcbiAgcHJvZHVjdENsYXNzTmFtZSxcbiAgcHJvZHVjdENvbCxcbiAgcHJvZHVjdFR5cGUsXG4gIGRhdGEsXG4gIGhlYWRlclRpdGxlLFxuICBoZWFkZXJDbGFzcyxcbiAgaGlkZUhlYWRlcixcbiAgZml2ZUNvbCxcbiAgY2xhc3NOYW1lLFxuICBndXR0ZXIgPSBbXG4gICAgeyB4czogMCwgbWQ6IDE1IH0sXG4gICAgeyB4czogMCwgbWQ6IDE1IH0sXG4gIF0sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0LWdyaWQgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHshaGlkZUhlYWRlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdC1ncmlkLWhlYWRlciAke2NsYXNzTmFtZXMoaGVhZGVyQ2xhc3MpfWB9PlxuICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9e2hlYWRlclRpdGxlfSBoaWRlRGVjb3JhdGlvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZ3JpZC1jb250ZW50XCI+XG4gICAgICAgIDxGZXRjaERhdGFIYW5kbGVcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIHJlbmRlckRhdGE9eyhkYXRhKSA9PiAoXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17Z3V0dGVyfT5cbiAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDb2xcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdENvbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IFwiZml2ZS1jb2xcIjogZml2ZUNvbCB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtwcm9kdWN0VHlwZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9kdWN0Q2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdEdyaWQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IHtcbiAgc2V0Q3VycmVudFNvcnQsXG4gIHNldEN1cnJlbnRTaG93LFxuICBzZXRDdXJyZW50Vmlldyxcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvc2hvcEZpbHRlckFjdGlvbnNcIjtcblxuY29uc3QgU2hvcEhlYWRlciA9ICh7IHRpdGxlLCBnZXRWaWV3UGVyUGFnZSwgZ2V0Q3VycmVudFNvcnQsIGhpZGVWaWV3IH0pID0+IHtcbiAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBzaG9wRmlsdGVyU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BGaWx0ZXJSZWR1Y2VyKTtcbiAgY29uc3QgeyB2aWV3IH0gPSBzaG9wRmlsdGVyU3RhdGU7XG4gIGNvbnN0IG9uU29ydFNlbGVjdENoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgXCJhelwiOlxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goc2V0Q3VycmVudFNvcnQoeyBzb3J0OiBcIm5hbWVcIiwgb3JkZXI6IFwiYXNjXCIgfSkpO1xuICAgICAgY2FzZSBcInphXCI6XG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzZXRDdXJyZW50U29ydCh7IHNvcnQ6IFwibmFtZVwiLCBvcmRlcjogXCJkZXNjXCIgfSkpO1xuICAgICAgY2FzZSBcImxvd0hpZ2h0XCI6XG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzZXRDdXJyZW50U29ydCh7IHNvcnQ6IFwicHJpY2VcIiwgb3JkZXI6IFwiYXNjXCIgfSkpO1xuICAgICAgY2FzZSBcImhpZ2hMb3dcIjpcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNldEN1cnJlbnRTb3J0KHsgc29ydDogXCJwcmljZVwiLCBvcmRlcjogXCJkZXNjXCIgfSkpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNldEN1cnJlbnRTb3J0KHt9KSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvblNob3dTZWxlY3RDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBkaXNwYXRjaChzZXRDdXJyZW50U2hvdyh2YWx1ZSkpO1xuICB9O1xuICBjb25zdCBvblZpZXdDaGFnZSA9IChlLCB2aWV3KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BhdGNoKHNldEN1cnJlbnRWaWV3KHZpZXcpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtaGVhZGVyXCI+XG4gICAgICA8aDU+e3RpdGxlfTwvaDU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtaGVhZGVyLXNlbGVjdG9yc1wiPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTc1IH19XG4gICAgICAgICAgb25DaGFuZ2U9e29uU29ydFNlbGVjdENoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj5EZWZhdWx0PC9PcHRpb24+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImF6XCI+QSB0byBaPC9PcHRpb24+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInphXCI+WiB0byBBPC9PcHRpb24+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImhpZ2hMb3dcIj5IaWdoIHRvIGxvdyBwcmljZTwvT3B0aW9uPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsb3dIaWdodFwiPkxvdyB0byBoaWdoIHByaWNlPC9PcHRpb24+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMTBcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMTUgfX1cbiAgICAgICAgICBvbkNoYW5nZT17b25TaG93U2VsZWN0Q2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjEwXCI+U2hvdyAxMDwvT3B0aW9uPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIxNVwiPlNob3cgMTU8L09wdGlvbj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMjBcIj5TaG93IDIwPC9PcHRpb24+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICB7IWhpZGVWaWV3ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWhlYWRlci12aWV3XCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvblZpZXdDaGFnZShlLCBcImdyaWRcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IHZpZXcgPT09IFwiZ3JpZFwiIH0pfVxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aC1sYXJnZVwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25WaWV3Q2hhZ2UoZSwgXCJsaXN0XCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiB2aWV3ID09PSBcImxpc3RcIiB9KX1cbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGgtbGlzdFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNob3BIZWFkZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQge1xuICBzZXRDdXJyZW50Q29sb3IsXG4gIHNldEN1cnJlbnRDYXRlZ29yeSxcbiAgc2V0Q3VycmVudFNpemUsXG4gIHNldEN1cnJlbnRUYWcsXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3Nob3BGaWx0ZXJBY3Rpb25zXCI7XG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vZGF0YS9jYXRlZ29yaWVzLmpzb25cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIGNvbG9yOiBbXG4gICAgeyBuYW1lOiBcIkFsbCBjb2xvcnNcIiwgY29sb3JDb2RlOiBcIiNGRkZcIiwgdmFsdWU6IFwiXCIgfSxcbiAgICB7IG5hbWU6IFwiQmxhY2tcIiwgY29sb3JDb2RlOiBcIiMwMDBcIiwgdmFsdWU6IFwiYmxhY2tcIiB9LFxuICAgIHsgbmFtZTogXCJCbHVlXCIsIGNvbG9yQ29kZTogXCIjMWU3M2JlXCIsIHZhbHVlOiBcImJsdWVcIiB9LFxuICAgIHsgbmFtZTogXCJHcmF5XCIsIGNvbG9yQ29kZTogXCIjODQ4NDg0XCIsIHZhbHVlOiBcImdyYXlcIiB9LFxuICAgIHsgbmFtZTogXCJHcmVlblwiLCBjb2xvckNvZGU6IFwiIzgxRDc0MlwiLCB2YWx1ZTogXCJncmVlblwiIH0sXG4gICAgeyBuYW1lOiBcIlJlZFwiLCBjb2xvckNvZGU6IFwiI0REMzMzM1wiLCB2YWx1ZTogXCJyZWRcIiB9LFxuICAgIHsgbmFtZTogXCJZZWxsb3dcIiwgY29sb3JDb2RlOiBcIiNlZWVlMjJcIiwgdmFsdWU6IFwieWVsbG93XCIgfSxcbiAgXSxcbiAgc2l6ZTogW1xuICAgIHsgbmFtZTogXCJBbGwgc2l6ZVwiLCB2YWx1ZTogXCJcIiB9LFxuICAgIHsgbmFtZTogXCJYTFwiLCB2YWx1ZTogXCJ4bFwiIH0sXG4gICAgeyBuYW1lOiBcIkxcIiwgdmFsdWU6IFwibFwiIH0sXG4gICAgeyBuYW1lOiBcIk1cIiwgdmFsdWU6IFwibVwiIH0sXG4gICAgeyBuYW1lOiBcIlNcIiwgdmFsdWU6IFwic1wiIH0sXG4gIF0sXG4gIHRhZ3M6IFtcbiAgICB7IG5hbWU6IFwiQWxsIHRhZ1wiLCB2YWx1ZTogXCJcIiB9LFxuICAgIHsgbmFtZTogXCJmcmVzaFwiLCB2YWx1ZTogXCJmcmVzaFwiIH0sXG4gICAgeyBuYW1lOiBcInZlZ2V0YWJsZVwiLCB2YWx1ZTogXCJ2ZWdldGFibGVcIiB9LFxuICAgIHsgbmFtZTogXCJtZWF0XCIsIHZhbHVlOiBcIm1lYXRcIiB9LFxuICBdLFxufTtcblxuY29uc3QgU2hvcFNpZGViYXJTZWN0aW9uID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBjbGFzc05hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgc2hvcC1zaWRlYmFyLXNlY3Rpb24gJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atc2lkZWJhci1zZWN0aW9uX19oZWFkZXJcIj5cbiAgICAgICAgPGg1Pnt0aXRsZX08L2g1PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atc2lkZWJhci1zZWN0aW9uX19jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gU2hvcFNpZGViYXIoeyBzaG93U2hvcnRjdXQsIHN0eWxlIH0pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBzaG9wRmlsdGVyU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BGaWx0ZXJSZWR1Y2VyKTtcbiAgY29uc3QgeyBjYXRlZ29yeSwgY29sb3IsIHNpemUsIHRhZyB9ID0gc2hvcEZpbHRlclN0YXRlO1xuICBjb25zdCBvbkNob29zZUNhdGVnb3J5ID0gKGUsIHZhbCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwYXRjaChzZXRDdXJyZW50Q2F0ZWdvcnkodmFsKSk7XG4gIH07XG4gIGNvbnN0IG9uQ2hvb3NlQ29sb3IgPSAoZSwgdmFsKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BhdGNoKHNldEN1cnJlbnRDb2xvcih2YWwpKTtcbiAgfTtcbiAgY29uc3Qgb25DaG9vc2VTaXplID0gKGUsIHZhbCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwYXRjaChzZXRDdXJyZW50U2l6ZSh2YWwpKTtcbiAgfTtcbiAgY29uc3Qgb25DaG9vc2VUYWcgPSAodmFsKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0Q3VycmVudFRhZyh2YWwpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwic2hvcC1zaWRlYmFyXCI+XG4gICAgICA8U2hvcFNpZGViYXJTZWN0aW9uIGNsYXNzTmFtZT1cIi1kZXBhcnRtZW50c1wiIHRpdGxlPVwiRGVwYXJ0bWVudHNcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGNhdGVnb3J5ID09PSBcIlwiIH0pfT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9eyhlKSA9PiBvbkNob29zZUNhdGVnb3J5KGUsIFwiXCIpfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICBBbGwgZGVwYXJ0bWVudHNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGNhdGVnb3J5ID09PSBpdGVtLnZhbHVlIH0pfVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoZSkgPT4gb25DaG9vc2VDYXRlZ29yeShlLCBpdGVtLnZhbHVlKX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9TaG9wU2lkZWJhclNlY3Rpb24+XG4gICAgICB7IXNob3dTaG9ydGN1dCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFNob3BTaWRlYmFyU2VjdGlvbiBjbGFzc05hbWU9XCItY29sb3JzXCIgdGl0bGU9XCJQb3B1bGFyIGNvbG9yc1wiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7ZGF0YS5jb2xvci5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGNvbG9yID09PSBpdGVtLnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoZSkgPT4gb25DaG9vc2VDb2xvcihlLCBpdGVtLnZhbHVlKX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG9yQ29kZSB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvU2hvcFNpZGViYXJTZWN0aW9uPlxuICAgICAgICAgIDxTaG9wU2lkZWJhclNlY3Rpb24gY2xhc3NOYW1lPVwiLXNpemVcIiB0aXRsZT1cIlBvcHVsYXIgc2l6ZVwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7ZGF0YS5zaXplLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogc2l6ZSA9PT0gaXRlbS52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KGUpID0+IG9uQ2hvb3NlU2l6ZShlLCBpdGVtLnZhbHVlKX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9TaG9wU2lkZWJhclNlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgPFNob3BTaWRlYmFyU2VjdGlvbiBjbGFzc05hbWU9XCItdGFnc1wiIHRpdGxlPVwiUG9wdWxhciB0YWdzXCI+XG4gICAgICAgIHtkYXRhLnRhZ3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogdGFnID09PSBpdGVtLnZhbHVlIH0pfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaG9vc2VUYWcoaXRlbS52YWx1ZSl9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9TaG9wU2lkZWJhclNlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2hvcFNpZGViYXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ29sLCBSb3csIFBhZ2luYXRpb24sIEJyZWFkY3J1bWIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7XG4gIGZldGNoUHJvZHVjdHNSZXF1ZXN0LFxuICBmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0LFxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9uc1wiO1xuaW1wb3J0IExheW91dE9uZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0T25lXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IFNob3BTaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3AvU2hvcFNpZGViYXJcIjtcbmltcG9ydCBQcm9kdWN0R3JpZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wcm9kdWN0LXRodW1iL1Byb2R1Y3RHcmlkXCI7XG5pbXBvcnQgU2hvcEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wL1Nob3BIZWFkZXJcIjtcblxuZnVuY3Rpb24gc2hvcEdyaWQzQ29sdW1uKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHEgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3Qgc2hvcFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHNob3BTdGF0ZTtcbiAgY29uc3Qgc2hvcEZpbHRlclN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wRmlsdGVyUmVkdWNlcik7XG4gIGNvbnN0IHsgc29ydCwgc2hvdywgdmlldywgY2F0ZWdvcnksIGNvbG9yLCBzaXplLCB0YWcgfSA9IHNob3BGaWx0ZXJTdGF0ZTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0KHsgbGltaXQ6IDQgfSkpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBmZXRjaFByb2R1Y3RzUmVxdWVzdCh7XG4gICAgICAgIGxpbWl0OiBzaG93LFxuICAgICAgICBjYXRlZ29yeTogbnVsbCxcbiAgICAgICAgcGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAgIHEsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIHZpZXcsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBjb2xvcixcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgdGFnLFxuICAgICAgfSlcbiAgICApO1xuICB9LCBbc2hvcEZpbHRlclN0YXRlLCBjdXJyZW50UGFnZSwgcV0pO1xuICBjb25zdCBvblBhZ2luYXRpb25DaGFuZ2UgPSAoY3VycmVudCkgPT4ge1xuICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnQpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXRPbmUgdGl0bGU9XCJTaG9wIGdyaWQgZnVsbHdpZHRoXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8QnJlYWRjcnVtYiBzZXBhcmF0b3I9XCI+XCI+XG4gICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlNob3A8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY29udGVudFwiPlxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezMwfT5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXs2fT5cbiAgICAgICAgICAgICAgICA8U2hvcFNpZGViYXIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCAvIDE2ICsgXCJlbVwiIH19IC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezE4fT5cbiAgICAgICAgICAgICAgICA8U2hvcEhlYWRlciB0aXRsZT1cIlNob3AgZ3JpZCBmdWxsd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0R3JpZFxuICAgICAgICAgICAgICAgICAgZGF0YT17cHJvZHVjdHN9XG4gICAgICAgICAgICAgICAgICBoaWRlSGVhZGVyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0Q29sPXtcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9PT0gXCJsaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IHsgeHM6IDI0LCBzbTogMTIsIG1kOiAyNCB9XG4gICAgICAgICAgICAgICAgICAgICAgOiB7IHhzOiAxMiwgc206IDEyLCBtZDogOCwgbGc6IDggfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGU9e3ZpZXd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMuY291bnQgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblBhZ2luYXRpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXJyZW50PXtjdXJyZW50UGFnZX1cbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3Nob3d9XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsPXtwcm9kdWN0cy5jb3VudH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dE9uZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhzaG9wR3JpZDNDb2x1bW4pO1xuIiwiZXhwb3J0IGNvbnN0IFNIT1AgPSB7XG4gIEZFVENIX1BST0RVQ1RTOiBcIkZFVENIX1BST0RVQ1RTXCIsXG4gIEZFVENIX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTXCIsXG4gIEZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUUzogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU1wiLFxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTXCIsXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfREFMRV9QUk9EVUNUUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTXCIsXG4gIEZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTDogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTFwiLFxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTDogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMXCIsXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTXCIsXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBCTE9HID0ge1xuICBGRVRDSF9QT1NUUzogXCJGRVRDSF9QT1NUU1wiLFxuICBGRVRDSF9QT1NUU19TVUNDRVNTOiBcIkZFVENIX1BPU1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUE9TVFNfRkFJTDogXCJGRVRDSF9QT1NUU19GQUlMXCIsXG4gIEZFVENIX1BPU1RfREVUQUlMOiBcIkZFVENIX1BPU1RfREVUQUlMXCIsXG4gIEZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1M6IFwiRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTU1wiLFxuICBGRVRDSF9QT1NUX0RFVEFJTF9GQUlMOiBcIkZFVENIX1BPU1RfREVUQUlMX0ZBSUxcIixcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU1wiLFxuICBGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUzogXCJGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9SRUNFTlRfUE9TVFNfRkFJTDogXCJGRVRDSF9SRUNFTlRfUE9TVFNfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFNIT1BfRklMVEVSID0ge1xuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcbiAgU0VUX1NPUlQ6IFwiU0VUX1NPUlRcIixcbiAgU0VUX1NIT1c6IFwiU0VUX1NIT1dcIixcbiAgU0VUX1ZJRVc6IFwiU0VUX1ZJRVdcIixcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxuICBTRVRfQ09MT1I6IFwiU0VUX0NPTE9SXCIsXG4gIFNFVF9TSVpFOiBcIlNFVF9TSVpFXCIsXG4gIFNFVF9UQUc6IFwiU0VUX1RBR1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IENBUlQgPSB7XG4gIEZFVENIX0NBUlQ6IFwiRkVUQ0hfQ0FSVFwiLFxuICBGRVRDSF9DQVJUX1NVQ0NFU1M6IFwiRkVUQ0hfQ0FSVF9TVUNDRVNTXCIsXG4gIEZFVENIX0NBUlRfRkFJTDogXCJGRVRDSF9DQVJUX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBXSVNITElTVCA9IHtcbiAgRkVUQ0hfV0lTSExJU1Q6IFwiRkVUQ0hfV0lTSExJU1RcIixcbiAgRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUzogXCJGRVRDSF9XSVNITElTVF9TVUNDRVNTXCIsXG4gIEZFVENIX1dJU0hMSVNUX0ZBSUw6IFwiRkVUQ0hfV0lTSExJU1RfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IENPTVBBUkUgPSB7XG4gIEFERF9UT19DT01QQVJFOiBcIkFERF9UT19DT01QQVJFXCIsXG4gIFJFTU9WRV9GUk9NX0NPTVBBUkU6IFwiUkVNT1ZFX0ZST01fQ09NUEFSRVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IEJMT0dfRklMVEVSID0ge1xuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxuICBTRVRfVEFHOiBcIlNFVF9UQUdcIixcbn07XG4iLCJpbXBvcnQgeyBDQVJUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmltcG9ydCAqIGFzIGNhcnRBcGlzIGZyb20gXCIuLi8uLi9hcGlzL2NhcnRcIjtcblxuLy9HZXQgY2FydCBkYXRhXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0ID0gKCkgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJULFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0RmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRSZXF1ZXN0ID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hDYXJ0KCkpO1xuICAgIGNhcnRBcGlzXG4gICAgICAuZmV0Y2hDYXJ0RGF0YSgpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFN1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaENhcnRGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgQ09NUEFSRSB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5leHBvcnQgY29uc3QgYWRkVG9Db21wYXJlID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IENPTVBBUkUuQUREX1RPX0NPTVBBUkUsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQ29tcGFyZSA9IChwcm9kdWN0SWQpID0+ICh7XG4gIHR5cGU6IENPTVBBUkUuUkVNT1ZFX0ZST01fQ09NUEFSRSxcbiAgcGF5bG9hZDoge1xuICAgIHByb2R1Y3RJZCxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgU0hPUCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuaW1wb3J0ICogYXMgc2hvcEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvc2hvcFwiO1xuXG4vL0dldCBhbGwgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgcHJvZHVjdENvdW50KSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICAgIHByb2R1Y3RDb3VudCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RTX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hQcm9kdWN0c0RhdGEocXVlcnkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhLCByZXMuaGVhZGVyc1tcIngtdG90YWwtY291bnRcIl0pKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgc2FsZSBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0cygpKTtcbiAgICBzaG9wQXBpc1xuICAgICAgLmZldGNoU2FsZVByb2R1Y3RzRGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTYWxlUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTYWxlUHJvZHVjdHNGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuXG4vL0dldCBmZWF0dXJlZCBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0cyA9ICgpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoRmVhdHVyZWRQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IGJlc3Qgc2VsbGVyIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IGJlc3Qgc2VsbGVyIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hEYWxlUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaERhbGVQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaERhbGVQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IHByb2R1Y3QgZGV0YWlsXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxSZXF1ZXN0ID0gKHNsdWcpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdERldGFpbCgpKTtcbiAgICBzaG9wQXBpc1xuICAgICAgLmZldGNoUHJvZHVjdERldGFpbERhdGEoc2x1ZylcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0RGV0YWlsU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdERldGFpbEZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IHNlYXJjaGVkIHByb2R1Y3RcblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0ID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0RmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFNlYXJjaGVkUHJvZHVjdCgpKTtcbiAgICBzaG9wQXBpc1xuICAgICAgLmZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hlZFByb2R1Y3RTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hlZFByb2R1Y3RGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgU0hPUF9GSUxURVIgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuY29uc3QgcmVzZXRTaG9wRmlsdGVyID0gKCkgPT4ge1xuICB0eXBlOiBTSE9QX0ZJTFRFUi5SRVNFVF9GSUxURVJTO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRTb3J0ID0gKHNvcnQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9QX0ZJTFRFUi5TRVRfU09SVCxcbiAgICBzb3J0OiBzb3J0LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRTaG93ID0gKHNob3cpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9QX0ZJTFRFUi5TRVRfU0hPVyxcbiAgICBzaG93OiBzaG93LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRWaWV3ID0gKHZpZXcpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9QX0ZJTFRFUi5TRVRfVklFVyxcbiAgICB2aWV3OiB2aWV3LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNIT1BfRklMVEVSLlNFVF9DQVRFR09SWSxcbiAgICBjYXRlZ29yeTogY2F0ZWdvcnksXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudENvbG9yID0gKGNvbG9yKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0hPUF9GSUxURVIuU0VUX0NPTE9SLFxuICAgIGNvbG9yOiBjb2xvcixcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50U2l6ZSA9IChzaXplKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0hPUF9GSUxURVIuU0VUX1NJWkUsXG4gICAgc2l6ZTogc2l6ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VGFnID0gKHRhZykgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNIT1BfRklMVEVSLlNFVF9UQUcsXG4gICAgdGFnOiB0YWcsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuaW1wb3J0ICogYXMgd2lzaGxpc3RBcGlzIGZyb20gXCIuLi8uLi9hcGlzL3dpc2hsaXN0XCI7XG5cbi8vR2V0IGNhcnQgZGF0YVxuY29uc3QgZmV0Y2hXaXNoTGlzdCA9ICgpID0+ICh7XG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNULFxufSk7XG5cbmNvbnN0IGZldGNoV2lzaExpc3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmNvbnN0IGZldGNoV2lzaExpc3RGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1RfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hXaXNoTGlzdFJlcXVlc3QgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0KCkpO1xuICAgIHdpc2hsaXN0QXBpc1xuICAgICAgLmZldGNoV2lzaGxpc3REYXRhKClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdFN1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0RmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50ZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==