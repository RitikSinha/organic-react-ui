module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../../ssr-module-cache.js");
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    }
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/pages/shop/wishlist.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "../next-server/lib/router-context":
      /*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("next/dist/next-server/lib/router-context.js");

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        module.exports = _interopRequireDefault;

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var _typeof = __webpack_require__(
          /*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"
        );

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

          if (
            obj === null ||
            (_typeof(obj) !== "object" && typeof obj !== "function")
          ) {
            return {
              default: obj,
            };
          }

          var cache = _getRequireWildcardCache();

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;

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

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/typeof.js":
      /*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            module.exports = _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            module.exports = _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }

          return _typeof(obj);
        }

        module.exports = _typeof;

        /***/
      },

    /***/ "./node_modules/next/dist/client/link.js":
      /*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireWildcard = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"
        );

        exports.__esModule = true;
        exports.default = void 0;

        var _react = _interopRequireWildcard(
          __webpack_require__(/*! react */ "react")
        );

        var _router = __webpack_require__(
          /*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"
        );

        var _router2 = __webpack_require__(
          /*! ./router */ "./node_modules/next/dist/client/router.js"
        );

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

          return (cachedObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
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
            },
            {
              rootMargin: "200px",
            }
          ));
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

          router.prefetch(href, as, options).catch((err) => {
            if (true) {
              // rethrow to show invalid URL errors
              throw err;
            }
          }); // Join on an invalid URI character

          prefetched[href + "%" + as] = true;
        }

        function isModifiedEvent(event) {
          const { target } = event.currentTarget;
          return (
            (target && target !== "_self") ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey || // triggers resource download
            (event.nativeEvent && event.nativeEvent.which === 2)
          );
        }

        function linkClicked(e, router, href, as, replace, shallow, scroll) {
          const { nodeName } = e.currentTarget;

          if (
            nodeName === "A" &&
            (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))
          ) {
            // ignore click for browser???s default behavior
            return;
          }

          e.preventDefault(); //  avoid scroll for urls with anchor refs

          if (scroll == null) {
            scroll = as.indexOf("#") < 0;
          } // replace state instead of push if prop is present

          router[replace ? "replace" : "push"](href, as, {
            shallow,
          }).then((success) => {
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
              return new Error(
                `Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` +
                  (false ? undefined : "")
              );
            } // TypeScript trick for type-guarding:

            const requiredPropsGuard = {
              href: true,
            };
            const requiredProps = Object.keys(requiredPropsGuard);
            requiredProps.forEach((key) => {
              if (key === "href") {
                if (
                  props[key] == null ||
                  (typeof props[key] !== "string" &&
                    typeof props[key] !== "object")
                ) {
                  throw createPropError({
                    key,
                    expected: "`string` or `object`",
                    actual: props[key] === null ? "null" : typeof props[key],
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
              prefetch: true,
            };
            const optionalProps = Object.keys(optionalPropsGuard);
            optionalProps.forEach((key) => {
              if (key === "as") {
                if (
                  props[key] &&
                  typeof props[key] !== "string" &&
                  typeof props[key] !== "object"
                ) {
                  throw createPropError({
                    key,
                    expected: "`string` or `object`",
                    actual: typeof props[key],
                  });
                }
              } else if (
                key === "replace" ||
                key === "scroll" ||
                key === "shallow" ||
                key === "passHref" ||
                key === "prefetch"
              ) {
                if (props[key] != null && typeof props[key] !== "boolean") {
                  throw createPropError({
                    key,
                    expected: "`boolean`",
                    actual: typeof props[key],
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
              console.warn(
                "Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated"
              );
            }
          }

          const p = props.prefetch !== false;

          const [childElm, setChildElm] = _react.default.useState();

          const router = (0, _router2.useRouter)();
          const pathname = (router && router.pathname) || "/";

          const { href, as } = _react.default.useMemo(() => {
            const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
            return {
              href: resolvedHref,
              as: props.as
                ? (0, _router.resolveHref)(pathname, props.as)
                : resolvedHref,
            };
          }, [pathname, props.href, props.as]);

          _react.default.useEffect(() => {
            if (
              p &&
              IntersectionObserver &&
              childElm &&
              childElm.tagName &&
              (0, _router.isLocalURL)(href)
            ) {
              // Join on an invalid URI character
              const isPrefetched = prefetched[href + "%" + as];

              if (!isPrefetched) {
                return listenToIntersections(childElm, () => {
                  prefetch(router, href, as);
                });
              }
            }
          }, [p, childElm, href, as, router]);

          let { children, replace, shallow, scroll } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

          if (typeof children === "string") {
            children = /*#__PURE__*/ _react.default.createElement(
              "a",
              null,
              children
            );
          } // This will return the first child, if multiple are provided it will throw an error

          const child = _react.Children.only(children);

          const childProps = {
            ref: (el) => {
              if (el) setChildElm(el);

              if (child && typeof child === "object" && child.ref) {
                if (typeof child.ref === "function") child.ref(el);
                else if (typeof child.ref === "object") {
                  child.ref.current = el;
                }
              }
            },
            onClick: (e) => {
              if (child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
              }

              if (!e.defaultPrevented) {
                linkClicked(e, router, href, as, replace, shallow, scroll);
              }
            },
          };

          if (p) {
            childProps.onMouseEnter = (e) => {
              if (!(0, _router.isLocalURL)(href)) return;

              if (
                child.props &&
                typeof child.props.onMouseEnter === "function"
              ) {
                child.props.onMouseEnter(e);
              }

              prefetch(router, href, as, {
                priority: true,
              });
            };
          } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
          // defined, we specify the current 'href', so that repetition is not needed by the user

          if (
            props.passHref ||
            (child.type === "a" && !("href" in child.props))
          ) {
            childProps.href = (0, _router.addBasePath)(as);
          }

          return /*#__PURE__*/ _react.default.cloneElement(child, childProps);
        }

        var _default = Link;
        exports.default = _default;

        /***/
      },

    /***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.removePathTrailingSlash = removePathTrailingSlash;
        exports.normalizePathTrailingSlash = void 0;
        /**
         * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
         */

        function removePathTrailingSlash(path) {
          return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
        }
        /**
         * Normalizes the trailing slash of a path according to the `trailingSlash` option
         * in `next.config.js`.
         */

        const normalizePathTrailingSlash = false
          ? undefined
          : removePathTrailingSlash;
        exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

        /***/
      },

    /***/ "./node_modules/next/dist/client/router.js":
      /*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireWildcard = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"
        );

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js"
        );

        exports.__esModule = true;
        exports.useRouter = useRouter;
        exports.makePublicRouterInstance = makePublicRouterInstance;
        exports.createRouter = exports.withRouter = exports.default = void 0;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ "react")
        );

        var _router2 = _interopRequireWildcard(
          __webpack_require__(
            /*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"
          )
        );

        exports.Router = _router2.default;
        exports.NextRouter = _router2.NextRouter;

        var _routerContext = __webpack_require__(
          /*! ../next-server/lib/router-context */ "../next-server/lib/router-context"
        );

        var _withRouter = _interopRequireDefault(
          __webpack_require__(
            /*! ./with-router */ "./node_modules/next/dist/client/with-router.js"
          )
        );

        exports.withRouter = _withRouter.default;
        /* global window */

        const singletonRouter = {
          router: null,
          // holds the actual router instance
          readyCallbacks: [],

          ready(cb) {
            if (this.router) return cb();

            if (false) {
            }
          },
        }; // Create public properties and methods of the router in the singletonRouter

        const urlPropertyFields = [
          "pathname",
          "route",
          "query",
          "asPath",
          "components",
          "isFallback",
          "basePath",
        ];
        const routerEvents = [
          "routeChangeStart",
          "beforeHistoryChange",
          "routeChangeComplete",
          "routeChangeError",
          "hashChangeStart",
          "hashChangeComplete",
        ];
        const coreMethodFields = [
          "push",
          "replace",
          "reload",
          "back",
          "prefetch",
          "beforePopState",
        ]; // Events is a static property on the router, the router doesn't have to be initialized to use it

        Object.defineProperty(singletonRouter, "events", {
          get() {
            return _router2.default.events;
          },
        });
        urlPropertyFields.forEach((field) => {
          // Here we need to use Object.defineProperty because, we need to return
          // the property assigned to the actual router
          // The value might get changed as we change routes and this is the
          // proper way to access it
          Object.defineProperty(singletonRouter, field, {
            get() {
              const router = getRouter();
              return router[field];
            },
          });
        });
        coreMethodFields.forEach((field) => {
          // We don't really know the types here, so we add them later instead
          singletonRouter[field] = (...args) => {
            const router = getRouter();
            return router[field](...args);
          };
        });
        routerEvents.forEach((event) => {
          singletonRouter.ready(() => {
            _router2.default.events.on(event, (...args) => {
              const eventField = `on${event
                .charAt(0)
                .toUpperCase()}${event.substring(1)}`;
              const _singletonRouter = singletonRouter;

              if (_singletonRouter[eventField]) {
                try {
                  _singletonRouter[eventField](...args);
                } catch (err) {
                  console.error(
                    `Error when running the Router event: ${eventField}`
                  );
                  console.error(`${err.message}\n${err.stack}`);
                }
              }
            });
          });
        });

        function getRouter() {
          if (!singletonRouter.router) {
            const message =
              "No router instance found.\n" +
              'You should only use "next/router" inside the client side of your app.\n';
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
          singletonRouter.readyCallbacks.forEach((cb) => cb());
          singletonRouter.readyCallbacks = [];
          return singletonRouter.router;
        }; // This function is used to create the `withRouter` router instance

        exports.createRouter = createRouter;

        function makePublicRouterInstance(router) {
          const _router = router;
          const instance = {};

          for (const property of urlPropertyFields) {
            if (typeof _router[property] === "object") {
              instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

              continue;
            }

            instance[property] = _router[property];
          } // Events is a static property on the router, the router doesn't have to be initialized to use it

          instance.events = _router2.default.events;
          coreMethodFields.forEach((field) => {
            instance[field] = (...args) => {
              return _router[field](...args);
            };
          });
          return instance;
        }

        /***/
      },

    /***/ "./node_modules/next/dist/client/with-router.js":
      /*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js"
        );

        exports.__esModule = true;
        exports.default = withRouter;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ "react")
        );

        var _router = __webpack_require__(
          /*! ./router */ "./node_modules/next/dist/client/router.js"
        );

        function withRouter(ComposedComponent) {
          function WithRouterWrapper(props) {
            return /*#__PURE__*/ _react.default.createElement(
              ComposedComponent,
              Object.assign(
                {
                  router: (0, _router.useRouter)(),
                },
                props
              )
            );
          }

          WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps; // This is needed to allow checking for custom getInitialProps in _app
          WithRouterWrapper.origGetInitialProps =
            ComposedComponent.origGetInitialProps;

          if (true) {
            const name =
              ComposedComponent.displayName ||
              ComposedComponent.name ||
              "Unknown";
            WithRouterWrapper.displayName = `withRouter(${name})`;
          }

          return WithRouterWrapper;
        }

        /***/
      },

    /***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
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
              tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++],
              });
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
                  code === 95
                ) {
                  name += str[j++];
                  continue;
                }
                break;
              }
              if (!name) throw new TypeError("Missing parameter name at " + i);
              tokens.push({ type: "NAME", index: i, value: name });
              i = j;
              continue;
            }
            if (char === "(") {
              var count = 1;
              var pattern = "";
              var j = i + 1;
              if (str[j] === "?") {
                throw new TypeError('Pattern cannot start with "?" at ' + j);
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
                } else if (str[j] === "(") {
                  count++;
                  if (str[j + 1] !== "?") {
                    throw new TypeError(
                      "Capturing groups are not allowed at " + j
                    );
                  }
                }
                pattern += str[j++];
              }
              if (count) throw new TypeError("Unbalanced pattern at " + i);
              if (!pattern) throw new TypeError("Missing pattern at " + i);
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
          if (options === void 0) {
            options = {};
          }
          var tokens = lexer(str);
          var _a = options.prefixes,
            prefixes = _a === void 0 ? "./" : _a;
          var defaultPattern =
            "[^" + escapeString(options.delimiter || "/#?") + "]+?";
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
            if (value !== undefined) return value;
            var _a = tokens[i],
              nextType = _a.type,
              index = _a.index;
            throw new TypeError(
              "Unexpected " + nextType + " at " + index + ", expected " + type
            );
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
                modifier: tryConsume("MODIFIER") || "",
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
                modifier: tryConsume("MODIFIER") || "",
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
          if (options === void 0) {
            options = {};
          }
          var reFlags = flags(options);
          var _a = options.encode,
            encode =
              _a === void 0
                ? function (x) {
                    return x;
                  }
                : _a,
            _b = options.validate,
            validate = _b === void 0 ? true : _b;
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
                  throw new TypeError(
                    'Expected "' +
                      token.name +
                      '" to not repeat, but got an array'
                  );
                }
                if (value.length === 0) {
                  if (optional) continue;
                  throw new TypeError(
                    'Expected "' + token.name + '" to not be empty'
                  );
                }
                for (var j = 0; j < value.length; j++) {
                  var segment = encode(value[j], token);
                  if (validate && !matches[i].test(segment)) {
                    throw new TypeError(
                      'Expected all "' +
                        token.name +
                        '" to match "' +
                        token.pattern +
                        '", but got "' +
                        segment +
                        '"'
                    );
                  }
                  path += token.prefix + segment + token.suffix;
                }
                continue;
              }
              if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                  throw new TypeError(
                    'Expected "' +
                      token.name +
                      '" to match "' +
                      token.pattern +
                      '", but got "' +
                      segment +
                      '"'
                  );
                }
                path += token.prefix + segment + token.suffix;
                continue;
              }
              if (optional) continue;
              var typeOfMessage = repeat ? "an array" : "a string";
              throw new TypeError(
                'Expected "' + token.name + '" to be ' + typeOfMessage
              );
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
          if (options === void 0) {
            options = {};
          }
          var _a = options.decode,
            decode =
              _a === void 0
                ? function (x) {
                    return x;
                  }
                : _a;
          return function (pathname) {
            var m = re.exec(pathname);
            if (!m) return false;
            var path = m[0],
              index = m.index;
            var params = Object.create(null);
            var _loop_1 = function (i) {
              // tslint:disable-next-line
              if (m[i] === undefined) return "continue";
              var key = keys[i - 1];
              if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i]
                  .split(key.prefix + key.suffix)
                  .map(function (value) {
                    return decode(value, key);
                  });
              } else {
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
          if (!keys) return path;
          // Use a negative lookahead to match only capturing groups.
          var groups = path.source.match(/\((?!\?)/g);
          if (groups) {
            for (var i = 0; i < groups.length; i++) {
              keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: "",
              });
            }
          }
          return path;
        }
        /**
         * Transform an array into a regexp.
         */
        function arrayToRegexp(paths, keys, options) {
          var parts = paths.map(function (path) {
            return pathToRegexp(path, keys, options).source;
          });
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
          if (options === void 0) {
            options = {};
          }
          var _a = options.strict,
            strict = _a === void 0 ? false : _a,
            _b = options.start,
            start = _b === void 0 ? true : _b,
            _c = options.end,
            end = _c === void 0 ? true : _c,
            _d = options.encode,
            encode =
              _d === void 0
                ? function (x) {
                    return x;
                  }
                : _d;
          var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
          var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
          var route = start ? "^" : "";
          // Iterate over the tokens and create our regexp string.
          for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var token = tokens_1[_i];
            if (typeof token === "string") {
              route += escapeString(encode(token));
            } else {
              var prefix = escapeString(encode(token.prefix));
              var suffix = escapeString(encode(token.suffix));
              if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                  if (token.modifier === "+" || token.modifier === "*") {
                    var mod = token.modifier === "*" ? "?" : "";
                    route +=
                      "(?:" +
                      prefix +
                      "((?:" +
                      token.pattern +
                      ")(?:" +
                      suffix +
                      prefix +
                      "(?:" +
                      token.pattern +
                      "))*)" +
                      suffix +
                      ")" +
                      mod;
                  } else {
                    route +=
                      "(?:" +
                      prefix +
                      "(" +
                      token.pattern +
                      ")" +
                      suffix +
                      ")" +
                      token.modifier;
                  }
                } else {
                  route += "(" + token.pattern + ")" + token.modifier;
                }
              } else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
              }
            }
          }
          if (end) {
            if (!strict) route += delimiter + "?";
            route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
          } else {
            var endToken = tokens[tokens.length - 1];
            var isEndDelimited =
              typeof endToken === "string"
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
          if (path instanceof RegExp) return regexpToRegexp(path, keys);
          if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
          return stringToRegexp(path, keys, options);
        }
        exports.pathToRegexp = pathToRegexp;
        //# sourceMappingURL=index.js.map

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/mitt.js":
      /*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
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
              (all[type] || (all[type] = [])).push(handler);
            },

            off(type, handler) {
              if (all[type]) {
                all[type].splice(all[type].indexOf(handler) >>> 0, 1);
              }
            },

            emit(type, ...evts) {
              // eslint-disable-next-line array-callback-return
              (all[type] || []).slice().map((handler) => {
                handler(...evts);
              });
            },
          };
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/router.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.hasBasePath = hasBasePath;
        exports.addBasePath = addBasePath;
        exports.delBasePath = delBasePath;
        exports.isLocalURL = isLocalURL;
        exports.resolveHref = resolveHref;
        exports.markLoadingError = markLoadingError;
        exports.default = void 0;

        var _normalizeTrailingSlash = __webpack_require__(
          /*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js"
        );

        var _denormalizePagePath = __webpack_require__(
          /*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js"
        );

        var _mitt = _interopRequireDefault(
          __webpack_require__(
            /*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"
          )
        );

        var _utils = __webpack_require__(
          /*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js"
        );

        var _isDynamic = __webpack_require__(
          /*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js"
        );

        var _parseRelativeUrl = __webpack_require__(
          /*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js"
        );

        var _querystring = __webpack_require__(
          /*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"
        );

        var _resolveRewrites = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"
          )
        );

        var _routeMatcher = __webpack_require__(
          /*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js"
        );

        var _routeRegex = __webpack_require__(
          /*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js"
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }
        /* global __NEXT_DATA__ */
        // tslint:disable:no-console

        const basePath = false || "";

        function buildCancellationError() {
          return Object.assign(new Error("Route Cancelled"), {
            cancelled: true,
          });
        }

        function hasBasePath(path) {
          return path === basePath || path.startsWith(basePath + "/");
        }

        function addBasePath(path) {
          // we only add the basepath on relative urls
          return basePath && path.startsWith("/")
            ? path === "/"
              ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(
                  basePath
                )
              : basePath + path
            : path;
        }

        function delBasePath(path) {
          return path.slice(basePath.length) || "/";
        }
        /**
         * Detects whether a given url is routable by the Next.js router (browser only).
         */

        function isLocalURL(url) {
          if (url.startsWith("/")) return true;

          try {
            // absolute urls can be local if they are on the same origin
            const locationOrigin = (0, _utils.getLocationOrigin)();
            const resolved = new URL(url, locationOrigin);
            return (
              resolved.origin === locationOrigin &&
              hasBasePath(resolved.pathname)
            );
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
          const base = new URL(currentPath, "http://n");
          const urlAsString =
            typeof href === "string"
              ? href
              : (0, _utils.formatWithValidation)(href);

          try {
            const finalUrl = new URL(urlAsString, base);
            finalUrl.pathname = (0,
            _normalizeTrailingSlash.normalizePathTrailingSlash)(
              finalUrl.pathname
            ); // if the origin didn't change, it means we received a relative href

            return finalUrl.origin === base.origin
              ? finalUrl.href.slice(finalUrl.origin.length)
              : finalUrl.href;
          } catch (_) {
            return urlAsString;
          }
        }

        const PAGE_LOAD_ERROR = Symbol("PAGE_LOAD_ERROR");

        function markLoadingError(err) {
          return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
        }

        function prepareUrlAs(router, url, as) {
          // If url and as provided as an object representation,
          // we'll format them into the string version here.
          return {
            url: addBasePath(resolveHref(router.pathname, url)),
            as: as ? addBasePath(resolveHref(router.pathname, as)) : as,
          };
        }

        const manualScrollRestoration = false && false;

        function fetchRetry(url, attempts) {
          return fetch(url, {
            // Cookies are required to be present for Next.js' SSG "Preview Mode".
            // Cookies may also be required for `getServerSideProps`.
            //
            // > `fetch` won???t send cookies, unless you set the credentials init
            // > option.
            // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
            //
            // > For maximum browser compatibility when it comes to sending &
            // > receiving cookies, always supply the `credentials: 'same-origin'`
            // > option instead of relying on the default.
            // https://github.com/github/fetch#caveats
            credentials: "same-origin",
          }).then((res) => {
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
          return fetchRetry(dataHref, isServerRender ? 3 : 1).catch((err) => {
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
          constructor(
            _pathname,
            _query,
            _as,
            {
              initialProps,
              pageLoader,
              App,
              wrapApp,
              Component,
              initialStyleSheets,
              err,
              subscription,
              isFallback,
            }
          ) {
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

            this.onPopState = (e) => {
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
                const { pathname, query } = this;
                this.changeState(
                  "replaceState",
                  (0, _utils.formatWithValidation)({
                    pathname: addBasePath(pathname),
                    query,
                  }),
                  (0, _utils.getURL)()
                );
                return;
              }

              if (!state.__N) {
                return;
              }

              const { url, as, options } = state;
              const { pathname } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
              // can be caused by navigating back from an external site

              if (
                this.isSsr &&
                as === this.asPath &&
                pathname === this.pathname
              ) {
                return;
              } // If the downstream application returns falsy, return.
              // They will then be responsible for handling the event.

              if (this._bps && !this._bps(state)) {
                return;
              }

              this.change(
                "replaceState",
                url,
                as,
                Object.assign({}, options, {
                  shallow: options.shallow && this._shallow,
                })
              );
            }; // represents the current component key

            this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(
              _pathname
            ); // set up the component cache (by route keys)

            this.components = {}; // We should not keep the cache, if there's an error
            // Otherwise, this cause issues when when going back and
            // come again to the errored page.

            if (_pathname !== "/_error") {
              this.components[this.route] = {
                Component,
                styleSheets: initialStyleSheets,
                props: initialProps,
                err,
                __N_SSG: initialProps && initialProps.__N_SSG,
                __N_SSP: initialProps && initialProps.__N_SSP,
              };
            }

            this.components["/_app"] = {
              Component: App,
              styleSheets: [
                /* /_app does not need its stylesheets managed */
              ],
            }; // Backwards compat for Router.router.events
            // TODO: Should be remove the following major version as it was never documented

            this.events = Router.events;
            this.pageLoader = pageLoader;
            this.pathname = _pathname;
            this.query = _query; // if auto prerendered and dynamic route wait to update asPath
            // until after mount to prevent hydration mismatch

            this.asPath = // @ts-ignore this is temporarily global (attached to window)
              (0, _isDynamic.isDynamicRoute)(_pathname) &&
              __NEXT_DATA__.autoExport
                ? _pathname
                : _as;
            this.basePath = basePath;
            this.sub = subscription;
            this.clc = null;
            this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
            // back from external site

            this.isSsr = true;
            this.isFallback = isFallback;

            if (false) {
            }
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
            ({ url, as } = prepareUrlAs(this, url, as));
            return this.change("pushState", url, as, options);
          }
          /**
           * Performs a `replaceState` with arguments
           * @param url of the route
           * @param as masks `url` for the browser
           * @param options object you can define `shallow` and other options
           */

          replace(url, as = url, options = {}) {
            ({ url, as } = prepareUrlAs(this, url, as));
            return this.change("replaceState", url, as, options);
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
              performance.mark("routeChange");
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
              Router.events.emit("hashChangeStart", as); // TODO: do we need the resolved href when only a hash change?

              this.changeState(method, url, as, options);
              this.scrollToHash(cleanedAs);
              this.notify(this.components[this.route]);
              Router.events.emit("hashChangeComplete", as);
              return true;
            } // The build manifest needs to be loaded before auto-static dynamic pages
            // get their query parameters to allow ensuring they can be parsed properly
            // when rewritten to

            const pages = await this.pageLoader.getPageList();
            const { __rewrites: rewrites } = await this.pageLoader
              .promisedBuildManifest;
            let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
            let { pathname, searchParams } = parsed;
            parsed = this._resolveHref(parsed, pages);

            if (parsed.pathname !== pathname) {
              pathname = parsed.pathname;
              url = (0, _utils.formatWithValidation)(parsed);
            }

            const query = (0, _querystring.searchParamsToUrlQuery)(
              searchParams
            ); // url and as should always be prefixed with basePath by this
            // point by either next/link or router.push/replace so strip the
            // basePath from the pathname to match the pages dir 1-to-1

            pathname = pathname
              ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(
                  delBasePath(pathname)
                )
              : pathname; // If asked to change the current URL we should reload the current page
            // (not location.reload() but reload getInitialProps and other Next.js stuffs)
            // We also need to set the method = replaceState always
            // as this should not go into the history (That's how browsers work)
            // We should compare the new asPath to the current asPath, not the url

            if (!this.urlIsNew(cleanedAs)) {
              method = "replaceState";
            }

            const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(
              pathname
            );
            const { shallow = false } = options; // we need to resolve the as value using rewrites for dynamic SSG
            // pages to allow building the data URL correctly

            let resolvedAs = as;

            if (true) {
              resolvedAs = (0, _resolveRewrites.default)(
                as,
                pages,
                basePath,
                rewrites,
                query,
                (p) =>
                  this._resolveHref(
                    {
                      pathname: p,
                    },
                    pages
                  ).pathname
              );
            }

            resolvedAs = delBasePath(resolvedAs);

            if ((0, _isDynamic.isDynamicRoute)(route)) {
              const { pathname: asPathname } = (0,
              _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
              const routeRegex = (0, _routeRegex.getRouteRegex)(route);
              const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(
                asPathname
              );

              if (!routeMatch) {
                const missingParams = Object.keys(routeRegex.groups).filter(
                  (param) => !query[param]
                );

                if (missingParams.length > 0) {
                  if (true) {
                    console.warn(
                      `Mismatching \`as\` and \`href\` failed to manually provide ` +
                        `the params: ${missingParams.join(
                          ", "
                        )} in the \`href\`'s \`query\``
                    );
                  }

                  throw new Error(
                    `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` +
                      `Read more: https://err.sh/vercel/next.js/incompatible-href-as`
                  );
                }
              } else {
                // Merge params into `query`, overwriting any specified in search
                Object.assign(query, routeMatch);
              }
            }

            Router.events.emit("routeChangeStart", as);

            try {
              const routeInfo = await this.getRouteInfo(
                route,
                pathname,
                query,
                as,
                shallow
              );
              let { error } = routeInfo;
              Router.events.emit("beforeHistoryChange", as);
              this.changeState(method, url, as, options);

              if (true) {
                const appComp = this.components["/_app"].Component;
                window.next.isPrerendered =
                  appComp.getInitialProps === appComp.origGetInitialProps &&
                  !routeInfo.Component.getInitialProps;
              }

              await this.set(
                route,
                pathname,
                query,
                cleanedAs,
                routeInfo
              ).catch((e) => {
                if (e.cancelled) error = error || e;
                else throw e;
              });

              if (error) {
                Router.events.emit("routeChangeError", error, cleanedAs);
                throw error;
              }

              if (false) {
              }

              Router.events.emit("routeChangeComplete", as);
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
              if (typeof window.history === "undefined") {
                console.error(`Warning: window.history is not available.`);
                return;
              }

              if (typeof window.history[method] === "undefined") {
                console.error(
                  `Warning: window.history.${method} is not available`
                );
                return;
              }
            }

            if (method !== "pushState" || (0, _utils.getURL)() !== as) {
              this._shallow = options.shallow;
              window.history[method](
                {
                  url,
                  as,
                  options,
                  __N: true,
                }, // Most browsers currently ignores this parameter, although they may use it in the future.
                // Passing the empty string here should be safe against future changes to the method.
                // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
                "",
                as
              );
            }
          }

          async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
            if (err.cancelled) {
              // bubble up cancellation errors
              throw err;
            }

            if (PAGE_LOAD_ERROR in err || loadErrorFail) {
              Router.events.emit("routeChangeError", err, as); // If we can't load the page it could be one of following reasons
              //  1. Page doesn't exists
              //  2. Page does exist in a different zone
              //  3. Internal error while loading the page
              // So, doing a hard reload is the proper way to deal with this.

              window.location.href = as; // Changing the URL doesn't block executing the current code path.
              // So let's throw a cancellation error stop the routing logic.

              throw buildCancellationError();
            }

            try {
              const { page: Component, styleSheets } =
                await this.fetchComponent("/_error");
              const routeInfo = {
                Component,
                styleSheets,
                err,
                error: err,
              };

              try {
                routeInfo.props = await this.getInitialProps(Component, {
                  err,
                  pathname,
                  query,
                });
              } catch (gipErr) {
                console.error(
                  "Error in error page `getInitialProps`: ",
                  gipErr
                );
                routeInfo.props = {};
              }

              return routeInfo;
            } catch (routeInfoErr) {
              return this.handleRouteInfoError(
                routeInfoErr,
                pathname,
                query,
                as,
                true
              );
            }
          }

          async getRouteInfo(route, pathname, query, as, shallow = false) {
            try {
              const cachedRouteInfo = this.components[route];

              if (shallow && cachedRouteInfo && this.route === route) {
                return cachedRouteInfo;
              }

              const routeInfo = cachedRouteInfo
                ? cachedRouteInfo
                : await this.fetchComponent(route).then((res) => ({
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP,
                  }));
              const { Component, __N_SSG, __N_SSP } = routeInfo;

              if (true) {
                const { isValidElementType } = __webpack_require__(
                  /*! react-is */ "react-is"
                );

                if (!isValidElementType(Component)) {
                  throw new Error(
                    `The default export is not a React Component in page: "${pathname}"`
                  );
                }
              }

              let dataHref;

              if (__N_SSG || __N_SSP) {
                dataHref = this.pageLoader.getDataHref(
                  (0, _utils.formatWithValidation)({
                    pathname,
                    query,
                  }),
                  delBasePath(as),
                  __N_SSG
                );
              }

              const props = await this._getData(() =>
                __N_SSG
                  ? this._getStaticData(dataHref)
                  : __N_SSP
                  ? this._getServerData(dataHref)
                  : this.getInitialProps(
                      Component, // we provide AppTree later so this needs to be `any`
                      {
                        pathname,
                        query,
                        asPath: as,
                      }
                    )
              );
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
            const [oldUrlNoHash, oldHash] = this.asPath.split("#");
            const [newUrlNoHash, newHash] = as.split("#"); // Makes sure we scroll to the provided hash if the url/hash are the same

            if (
              newHash &&
              oldUrlNoHash === newUrlNoHash &&
              oldHash === newHash
            ) {
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
            const [, hash] = as.split("#"); // Scroll to top if the hash is just `#` with no value

            if (hash === "") {
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
            const { pathname } = parsedHref;
            const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(
              delBasePath(pathname)
            );

            if (cleanPathname === "/404" || cleanPathname === "/_error") {
              return parsedHref;
            } // handle resolving href for dynamic routes

            if (!pages.includes(cleanPathname)) {
              // eslint-disable-next-line array-callback-return
              pages.some((page) => {
                if (
                  (0, _isDynamic.isDynamicRoute)(page) &&
                  (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)
                ) {
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
            let { pathname } = parsed;
            const pages = await this.pageLoader.getPageList();
            parsed = this._resolveHref(parsed, pages);

            if (parsed.pathname !== pathname) {
              pathname = parsed.pathname;
              url = (0, _utils.formatWithValidation)(parsed);
            } // Prefetch is not supported in development mode because it would trigger on-demand-entries

            if (true) {
              return;
            }

            const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(
              pathname
            );
            await Promise.all([
              this.pageLoader.prefetchData(url, asPath),
              this.pageLoader[options.priority ? "loadPage" : "prefetch"](
                route
              ),
            ]);
          }

          async fetchComponent(route) {
            let cancelled = false;

            const cancel = (this.clc = () => {
              cancelled = true;
            });

            const componentResult = await this.pageLoader.loadPage(route);

            if (cancelled) {
              const error = new Error(
                `Abort fetching component for route: "${route}"`
              );
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
            return fn().then((data) => {
              if (cancel === this.clc) {
                this.clc = null;
              }

              if (cancelled) {
                const err = new Error("Loading initial props cancelled");
                err.cancelled = true;
                throw err;
              }

              return data;
            });
          }

          _getStaticData(dataHref) {
            const { href: cacheKey } = new URL(dataHref, window.location.href);

            if (false) {
            }

            return fetchNextData(dataHref, this.isSsr).then((data) => {
              this.sdc[cacheKey] = data;
              return data;
            });
          }

          _getServerData(dataHref) {
            return fetchNextData(dataHref, this.isSsr);
          }

          getInitialProps(Component, ctx) {
            const { Component: App } = this.components["/_app"];

            const AppTree = this._wrapApp(App);

            ctx.AppTree = AppTree;
            return (0, _utils.loadGetInitialProps)(App, {
              AppTree,
              Component,
              router: this,
              ctx,
            });
          }

          abortComponentLoad(as) {
            if (this.clc) {
              Router.events.emit(
                "routeChangeError",
                buildCancellationError(),
                as
              );
              this.clc();
              this.clc = null;
            }
          }

          notify(data) {
            return this.sub(data, this.components["/_app"].Component);
          }
        }

        exports.default = Router;
        Router.events = (0, _mitt.default)();

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.formatUrl = formatUrl;

        var querystring = _interopRequireWildcard(
          __webpack_require__(
            /*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"
          )
        );

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

          if (
            obj === null ||
            (typeof obj !== "object" && typeof obj !== "function")
          ) {
            return {
              default: obj,
            };
          }

          var cache = _getRequireWildcardCache();

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;

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
          let { auth, hostname } = urlObj;
          let protocol = urlObj.protocol || "";
          let pathname = urlObj.pathname || "";
          let hash = urlObj.hash || "";
          let query = urlObj.query || "";
          let host = false;
          auth = auth
            ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@"
            : "";

          if (urlObj.host) {
            host = auth + urlObj.host;
          } else if (hostname) {
            host = auth + (~hostname.indexOf(":") ? `[${hostname}]` : hostname);

            if (urlObj.port) {
              host += ":" + urlObj.port;
            }
          }

          if (query && typeof query === "object") {
            query = String(querystring.urlQueryToSearchParams(query));
          }

          let search = urlObj.search || (query && `?${query}`) || "";
          if (protocol && protocol.substr(-1) !== ":") protocol += ":";

          if (
            urlObj.slashes ||
            ((!protocol || slashedProtocols.test(protocol)) && host !== false)
          ) {
            host = "//" + (host || "");
            if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
          } else if (!host) {
            host = "";
          }

          if (hash && hash[0] !== "#") hash = "#" + hash;
          if (search && search[0] !== "?") search = "?" + search;
          pathname = pathname.replace(/[?#]/g, encodeURIComponent);
          search = search.replace("#", "%23");
          return `${protocol}${host}${pathname}${search}${hash}`;
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

        const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

        function isDynamicRoute(route) {
          return TEST_ROUTE.test(route);
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
      /*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.parseRelativeUrl = parseRelativeUrl;

        var _utils = __webpack_require__(
          /*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js"
        );

        const DUMMY_BASE = new URL(true ? "http://n" : undefined);
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
            protocol,
          } = new URL(url, resolvedBase);

          if (
            origin !== DUMMY_BASE.origin ||
            (protocol !== "http:" && protocol !== "https:")
          ) {
            throw new Error("invariant: invalid relative URL");
          }

          return {
            pathname,
            searchParams,
            search,
            hash,
            href: href.slice(DUMMY_BASE.origin.length),
          };
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        exports.__esModule = true;
        exports.pathToRegexp =
          exports.default =
          exports.customRouteMatcherOptions =
          exports.matcherOptions =
            void 0;

        var pathToRegexp = _interopRequireWildcard(
          __webpack_require__(
            /*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"
          )
        );

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

          if (
            obj === null ||
            (typeof obj !== "object" && typeof obj !== "function")
          ) {
            return {
              default: obj,
            };
          }

          var cache = _getRequireWildcardCache();

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;

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
          delimiter: "/",
          decode: decodeParam,
        };
        exports.matcherOptions = matcherOptions;

        const customRouteMatcherOptions = _objectSpread(
          _objectSpread({}, matcherOptions),
          {},
          {
            strict: true,
          }
        );

        exports.customRouteMatcherOptions = customRouteMatcherOptions;

        var _default = (customRoute = false) => {
          return (path) => {
            const keys = [];
            const matcherRegex = pathToRegexp.pathToRegexp(
              path,
              keys,
              customRoute ? customRouteMatcherOptions : matcherOptions
            );
            const matcher = pathToRegexp.regexpToFunction(
              matcherRegex,
              keys,
              matcherOptions
            );
            return (pathname, params) => {
              const res = pathname == null ? false : matcher(pathname);

              if (!res) {
                return false;
              }

              if (customRoute) {
                for (const key of keys) {
                  // unnamed params should be removed as they
                  // are not allowed to be used in the destination
                  if (typeof key.name === "number") {
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
            const err = new Error("failed to decode param");
            err.code = "DECODE_FAILED";
            throw err;
          }
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
      /*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        exports.__esModule = true;
        exports.default = prepareDestination;

        var _querystring = __webpack_require__(
          /*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"
        );

        var _parseRelativeUrl = __webpack_require__(
          /*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js"
        );

        var pathToRegexp = _interopRequireWildcard(
          __webpack_require__(
            /*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"
          )
        );

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

          if (
            obj === null ||
            (typeof obj !== "object" && typeof obj !== "function")
          ) {
            return {
              default: obj,
            };
          }

          var cache = _getRequireWildcardCache();

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;

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

        function prepareDestination(
          destination,
          params,
          query,
          appendParamsToQuery,
          basePath
        ) {
          let parsedDestination = {};

          if (destination.startsWith("/")) {
            parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(
              destination
            );
          } else {
            const {
              pathname,
              searchParams,
              hash,
              hostname,
              port,
              protocol,
              search,
              href,
            } = new URL(destination);
            parsedDestination = {
              pathname,
              searchParams,
              hash,
              protocol,
              hostname,
              port,
              search,
              href,
            };
          }

          parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(
            parsedDestination.searchParams
          );
          const destQuery = parsedDestination.query;
          const destPath = `${parsedDestination.pathname}${
            parsedDestination.hash || ""
          }`;
          const destPathParamKeys = [];
          pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
          const destPathParams = destPathParamKeys.map((key) => key.name);
          let destinationCompiler = pathToRegexp.compile(
            destPath, // we don't validate while compiling the destination since we should
            // have already validated before we got to this point and validating
            // breaks compiling destinations with named pattern params from the source
            // e.g. /something:hello(.*) -> /another/:hello is broken with validation
            // since compile validation is meant for reversing and not for inserting
            // params from a separate path-regex into another
            {
              validate: false,
            }
          );
          let newUrl; // update any params in query values

          for (const [key, strOrArray] of Object.entries(destQuery)) {
            let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

            if (value) {
              // the value needs to start with a forward-slash to be compiled
              // correctly
              value = `/${value}`;
              const queryCompiler = pathToRegexp.compile(value, {
                validate: false,
              });
              value = queryCompiler(params).substr(1);
            }

            destQuery[key] = value;
          } // add path params to query if it's not a redirect and not
          // already defined in destination query or path

          const paramKeys = Object.keys(params);

          if (
            appendParamsToQuery &&
            !paramKeys.some((key) => destPathParams.includes(key))
          ) {
            for (const key of paramKeys) {
              if (!(key in destQuery)) {
                destQuery[key] = params[key];
              }
            }
          }

          const shouldAddBasePath = destination.startsWith("/") && basePath;

          try {
            newUrl = `${shouldAddBasePath ? basePath : ""}${encodeURI(
              destinationCompiler(params)
            )}`;
            const [pathname, hash] = newUrl.split("#");
            parsedDestination.pathname = pathname;
            parsedDestination.hash = `${hash ? "#" : ""}${hash || ""}`;
            delete parsedDestination.search;
            delete parsedDestination.searchParams;
          } catch (err) {
            if (
              err.message.match(/Expected .*? to not repeat, but got an array/)
            ) {
              throw new Error(
                `To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`
              );
            }

            throw err;
          } // Query merge order lowest priority to highest
          // 1. initial URL query values
          // 2. path segment values
          // 3. destination specified query values

          parsedDestination.query = _objectSpread(
            _objectSpread({}, query),
            parsedDestination.query
          );
          return {
            newUrl,
            parsedDestination,
          };
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
        exports.urlQueryToSearchParams = urlQueryToSearchParams;
        exports.assign = assign;

        function searchParamsToUrlQuery(searchParams) {
          const query = {};
          searchParams.forEach((value, key) => {
            if (typeof query[key] === "undefined") {
              query[key] = value;
            } else if (Array.isArray(query[key])) {
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
              value.forEach((item) => result.append(key, item));
            } else {
              result.set(key, value);
            }
          });
          return result;
        }

        function assign(target, ...searchParamsList) {
          searchParamsList.forEach((searchParams) => {
            Array.from(searchParams.keys()).forEach((key) =>
              target.delete(key)
            );
            searchParams.forEach((value, key) => target.append(key, value));
          });
          return target;
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.default = resolveRewrites;

        var _pathMatch = _interopRequireDefault(
          __webpack_require__(
            /*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"
          )
        );

        var _prepareDestination = _interopRequireDefault(
          __webpack_require__(
            /*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"
          )
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        const customRouteMatcher = (0, _pathMatch.default)(true);

        function resolveRewrites(
          asPath,
          pages,
          basePath,
          rewrites,
          query,
          resolveHref
        ) {
          if (!pages.includes(asPath)) {
            for (const rewrite of rewrites) {
              const matcher = customRouteMatcher(rewrite.source);
              const params = matcher(asPath);

              if (params) {
                if (!rewrite.destination) {
                  // this is a proxied rewrite which isn't handled on the client
                  break;
                }

                const destRes = (0, _prepareDestination.default)(
                  rewrite.destination,
                  params,
                  query,
                  true,
                  rewrite.basePath === false ? "" : basePath
                );
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

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.getRouteMatcher = getRouteMatcher;

        function getRouteMatcher(routeRegex) {
          const { re, groups } = routeRegex;
          return (pathname) => {
            const routeMatch = re.exec(pathname);

            if (!routeMatch) {
              return false;
            }

            const decode = (param) => {
              try {
                return decodeURIComponent(param);
              } catch (_) {
                const err = new Error("failed to decode param");
                err.code = "DECODE_FAILED";
                throw err;
              }
            };

            const params = {};
            Object.keys(groups).forEach((slugName) => {
              const g = groups[slugName];
              const m = routeMatch[g.pos];

              if (m !== undefined) {
                params[slugName] = ~m.indexOf("/")
                  ? m.split("/").map((entry) => decode(entry))
                  : g.repeat
                  ? [decode(m)]
                  : decode(m);
              }
            });
            return params;
          };
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
        // to reduce bytes

        function escapeRegex(str) {
          return str.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&");
        }

        function parseParameter(param) {
          const optional = param.startsWith("[") && param.endsWith("]");

          if (optional) {
            param = param.slice(1, -1);
          }

          const repeat = param.startsWith("...");

          if (repeat) {
            param = param.slice(3);
          }

          return {
            key: param,
            repeat,
            optional,
          };
        }

        function getRouteRegex(normalizedRoute) {
          const segments = (normalizedRoute.replace(/\/$/, "") || "/")
            .slice(1)
            .split("/");
          const groups = {};
          let groupIndex = 1;
          const parameterizedRoute = segments
            .map((segment) => {
              if (segment.startsWith("[") && segment.endsWith("]")) {
                const { key, optional, repeat } = parseParameter(
                  segment.slice(1, -1)
                );
                groups[key] = {
                  pos: groupIndex++,
                  repeat,
                  optional,
                };
                return repeat
                  ? optional
                    ? "(?:/(.+?))?"
                    : "/(.+?)"
                  : "/([^/]+?)";
              } else {
                return `/${escapeRegex(segment)}`;
              }
            })
            .join(""); // dead code eliminate for browser since it's only needed
          // while generating routes-manifest

          if (true) {
            let routeKeyCharCode = 97;
            let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

            const getSafeRouteKey = () => {
              let routeKey = "";

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
            let namedParameterizedRoute = segments
              .map((segment) => {
                if (segment.startsWith("[") && segment.endsWith("]")) {
                  const { key, optional, repeat } = parseParameter(
                    segment.slice(1, -1)
                  ); // replace any non-word characters since they can break
                  // the named regex

                  let cleanedKey = key.replace(/\W/g, "");
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
                  return repeat
                    ? optional
                      ? `(?:/(?<${cleanedKey}>.+?))?`
                      : `/(?<${cleanedKey}>.+?)`
                    : `/(?<${cleanedKey}>[^/]+?)`;
                } else {
                  return `/${escapeRegex(segment)}`;
                }
              })
              .join("");
            return {
              re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
              groups,
              routeKeys,
              namedRegex: `^${namedParameterizedRoute}(?:/)?$`,
            };
          }

          return {
            re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
            groups,
          };
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/utils.js":
      /*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
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

        var _formatUrl = __webpack_require__(
          /*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"
        );
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
          const { protocol, hostname, port } = window.location;
          return `${protocol}//${hostname}${port ? ":" + port : ""}`;
        }

        function getURL() {
          const { href } = window.location;
          const origin = getLocationOrigin();
          return href.substring(origin.length);
        }

        function getDisplayName(Component) {
          return typeof Component === "string"
            ? Component
            : Component.displayName || Component.name || "Unknown";
        }

        function isResSent(res) {
          return res.finished || res.headersSent;
        }

        async function loadGetInitialProps(App, ctx) {
          if (true) {
            var _App$prototype;

            if (
              (_App$prototype = App.prototype) === null ||
              _App$prototype === void 0
                ? void 0
                : _App$prototype.getInitialProps
            ) {
              const message = `"${getDisplayName(
                App
              )}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
              throw new Error(message);
            }
          } // when called from _app `ctx` is nested in `ctx`

          const res = ctx.res || (ctx.ctx && ctx.ctx.res);

          if (!App.getInitialProps) {
            if (ctx.ctx && ctx.Component) {
              // @ts-ignore pageProps default
              return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx),
              };
            }

            return {};
          }

          const props = await App.getInitialProps(ctx);

          if (res && isResSent(res)) {
            return props;
          }

          if (!props) {
            const message = `"${getDisplayName(
              App
            )}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
            throw new Error(message);
          }

          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn(
                `${getDisplayName(
                  App
                )} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`
              );
            }
          }

          return props;
        }

        const urlObjectKeys = [
          "auth",
          "hash",
          "host",
          "hostname",
          "href",
          "path",
          "pathname",
          "port",
          "protocol",
          "query",
          "search",
          "slashes",
        ];
        exports.urlObjectKeys = urlObjectKeys;

        function formatWithValidation(url) {
          if (true) {
            if (url !== null && typeof url === "object") {
              Object.keys(url).forEach((key) => {
                if (urlObjectKeys.indexOf(key) === -1) {
                  console.warn(
                    `Unknown key passed via urlObject into url.format: ${key}`
                  );
                }
              });
            }
          }

          return (0, _formatUrl.formatUrl)(url);
        }

        const SP = typeof performance !== "undefined";
        exports.SP = SP;
        const ST =
          SP &&
          typeof performance.mark === "function" &&
          typeof performance.measure === "function";
        exports.ST = ST;

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.normalizePathSep = normalizePathSep;
        exports.denormalizePagePath = denormalizePagePath;
        function normalizePathSep(path) {
          return path.replace(/\\/g, "/");
        }
        function denormalizePagePath(page) {
          page = normalizePathSep(page);
          if (page.startsWith("/index/")) {
            page = page.slice(6);
          } else if (page === "/index") {
            page = "/";
          }
          return page;
        }
        //# sourceMappingURL=denormalize-page-path.js.map

        /***/
      },

    /***/ "./node_modules/next/link.js":
      /*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./dist/client/link */ "./node_modules/next/dist/client/link.js"
        );

        /***/
      },

    /***/ "./src/apis/cart.js":
      /*!**************************!*\
  !*** ./src/apis/cart.js ***!
  \**************************/
      /*! exports provided: fetchCartData, fetchProductIdCartData, addCartData, removeCartData, updateCartData */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCartData",
          function () {
            return fetchCartData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProductIdCartData",
          function () {
            return fetchProductIdCartData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addCartData",
          function () {
            return addCartData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "removeCartData",
          function () {
            return removeCartData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateCartData",
          function () {
            return updateCartData;
          }
        );
        /* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../common/axiosService */ "./src/common/axiosService.js"
          );
        /* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../common/defines */ "./src/common/defines.js"
          );
        /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");

        const url = "/cart";
        const fetchCartData = (cartId) => {
          let endpoint = cartId
            ? _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] +
              url +
              `/${cartId}`
            : _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].get(endpoint);
        };
        const fetchProductIdCartData = (pid) => {
          let endpoint =
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] +
            url +
            "?" +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "productId",
              pid
            );
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].get(endpoint);
        };
        const addCartData = (data) => {
          let endpoint =
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].post(endpoint, data);
        };
        const removeCartData = (cartId) => {
          let endpoint =
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] +
            url +
            `/${cartId}`;
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].delete(endpoint);
        };
        const updateCartData = (cartId, data) => {
          let endpoint =
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] +
            url +
            `/${cartId}`;
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].patch(endpoint, data);
        };

        /***/
      },

    /***/ "./src/apis/shop.js":
      /*!**************************!*\
  !*** ./src/apis/shop.js ***!
  \**************************/
      /*! exports provided: fetchProductsData, fetchSaleProductsData, fetchFeaturedProductsData, fetchBestSellerProductsData, fetchDaleProductsData, fetchProductDetailData, fetchSearchedProductData */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProductsData",
          function () {
            return fetchProductsData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSaleProductsData",
          function () {
            return fetchSaleProductsData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchFeaturedProductsData",
          function () {
            return fetchFeaturedProductsData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchBestSellerProductsData",
          function () {
            return fetchBestSellerProductsData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDaleProductsData",
          function () {
            return fetchDaleProductsData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProductDetailData",
          function () {
            return fetchProductDetailData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSearchedProductData",
          function () {
            return fetchSearchedProductData;
          }
        );
        /* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../common/axiosService */ "./src/common/axiosService.js"
          );
        /* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../common/defines */ "./src/common/defines.js"
          );
        /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");

        const url = "/product";

        const renderUrl = (url, limit, category) => {
          return (
            url +
            "?" +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "_limit",
              limit
            ) +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "category",
              category
            )
          );
        }; //Fetch list of products

        const fetchProductsData = (query) => {
          let endpoint =
            renderUrl(
              _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url,
              query.limit,
              query.category
            ) +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "_page",
              query.page
            ) +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "_sort",
              query.sort.sort
            ) +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "_order",
              query.sort.order
            ) +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "q",
              query.q
            ) +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "specifications.color",
              query.color
            ) +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "specifications.size",
              query.size
            ) +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "tag_like",
              query.tag
            );
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].get(endpoint);
        };
        const fetchSaleProductsData = (query) => {
          let endpoint = renderUrl(
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url,
            query.limit,
            query.category
          );
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].get(endpoint);
        };
        const fetchFeaturedProductsData = (query) => {
          let endpoint = renderUrl(
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url,
            query.limit,
            query.category
          );
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].get(endpoint);
        };
        const fetchBestSellerProductsData = (query) => {
          let endpoint = renderUrl(
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url,
            query.limit,
            query.category
          );
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].get(endpoint);
        };
        const fetchDaleProductsData = (query) => {
          let endpoint = renderUrl(
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url,
            query.limit,
            query.category
          );
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].get(endpoint);
        }; //Fetch product detail

        const fetchProductDetailData = (slug) => {
          let endpoint =
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] +
            url +
            "?" +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "slug",
              slug
            );
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].get(endpoint);
        }; //Fetch serched product by query

        const fetchSearchedProductData = (query) => {
          let endpoint =
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] +
            url +
            "?" +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "q",
              query.input
            ) +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "category",
              query.category
            ) +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "_limit",
              query.limit
            );
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].get(endpoint);
        };

        /***/
      },

    /***/ "./src/apis/wishlist.js":
      /*!******************************!*\
  !*** ./src/apis/wishlist.js ***!
  \******************************/
      /*! exports provided: fetchWishlistData, fetchProductIdWishlistData, addWishlistData, removeWishlistData */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchWishlistData",
          function () {
            return fetchWishlistData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProductIdWishlistData",
          function () {
            return fetchProductIdWishlistData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addWishlistData",
          function () {
            return addWishlistData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "removeWishlistData",
          function () {
            return removeWishlistData;
          }
        );
        /* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../common/axiosService */ "./src/common/axiosService.js"
          );
        /* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../common/defines */ "./src/common/defines.js"
          );
        /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");

        const url = "/wishlist";
        const fetchWishlistData = () => {
          let endpoint =
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].get(endpoint);
        };
        const fetchProductIdWishlistData = (pid) => {
          let endpoint =
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] +
            url +
            "?" +
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])(
              "id",
              pid
            );
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].get(endpoint);
        };
        const addWishlistData = (data) => {
          let endpoint =
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].post(endpoint, data);
        };
        const removeWishlistData = (pid) => {
          let endpoint =
            _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] +
            url +
            `/${pid}`;
          return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].delete(endpoint);
        };

        /***/
      },

    /***/ "./src/common/axiosService.js":
      /*!************************************!*\
  !*** ./src/common/axiosService.js ***!
  \************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! axios */ "axios");
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            axios__WEBPACK_IMPORTED_MODULE_0__
          );

        class AxiosService {
          constructor() {
            const instance =
              axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
            instance.interceptors.response.use(
              this.handleSuccess,
              this.handleError
            );
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

        /* harmony default export */ __webpack_exports__["default"] =
          new AxiosService();

        /***/
      },

    /***/ "./src/common/cartServices.js":
      /*!************************************!*\
  !*** ./src/common/cartServices.js ***!
  \************************************/
      /*! exports provided: onAddProductToCart, onRemoveProductFromCart, onChangeProductCartQuantity */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "onAddProductToCart",
          function () {
            return onAddProductToCart;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "onRemoveProductFromCart",
          function () {
            return onRemoveProductFromCart;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "onChangeProductCartQuantity",
          function () {
            return onChangeProductCartQuantity;
          }
        );
        /* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! uuid */ "uuid");
        /* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            uuid__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../apis/cart */ "./src/apis/cart.js");
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        const onAddProductToCart = ({
          product,
          quantity = 1,
          onSuccess,
          onError,
          getQuantityAvailable = () => true,
        }) => {
          Object(
            _apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchProductIdCartData"]
          )(product.id)
            .then((res) => {
              if (res.data.length === 0) {
                if (product.quantity === 0) {
                  onError && onError("Reached maximum number of products");
                  getQuantityAvailable && getQuantityAvailable(false);
                } else {
                  Object(
                    _apis_cart__WEBPACK_IMPORTED_MODULE_1__["addCartData"]
                  )(
                    _objectSpread(
                      _objectSpread({}, product),
                      {},
                      {
                        id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
                        productId: product.id,
                        cartQuantity: quantity,
                      }
                    )
                  )
                    .then((res) => onSuccess && onSuccess(res))
                    .catch(
                      (err) =>
                        onError &&
                        onError(
                          "Add product to cart failed, please try again",
                          err
                        )
                    );
                }
              } else {
                let pData = res.data[0];

                if (pData.cartQuantity + quantity > pData.quantity) {
                  onError && onError("Reached maximum number of products");
                  getQuantityAvailable(false);
                } else {
                  Object(
                    _apis_cart__WEBPACK_IMPORTED_MODULE_1__["updateCartData"]
                  )(pData.id, {
                    cartQuantity: pData.cartQuantity + quantity,
                  })
                    .then((res) => {
                      onSuccess && onSuccess(res);
                    })
                    .catch(
                      (err) =>
                        onError &&
                        onError(
                          "Add product to cart failed, please try again",
                          err
                        )
                    );
                }
              }
            })
            .catch(
              (err) =>
                onError &&
                onError("Add product to cart failed, please try again", err)
            );
        };
        const onRemoveProductFromCart = ({ cartId, onSuccess, onError }) => {
          if (cartId && cartId !== "" && cartId !== null) {
            Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["removeCartData"])(
              cartId
            )
              .then((res) => onSuccess && onSuccess(res))
              .catch(
                (err) =>
                  onError &&
                  onError("Remove product failm, pleaser try again", err)
              );
          }
        };
        const onChangeProductCartQuantity = ({
          product,
          quantity,
          onSuccess,
        }) => {
          if (quantity > product.quantity || quantity < 1) {
            return;
          }

          Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["updateCartData"])(
            product.id,
            {
              cartQuantity: quantity,
            }
          )
            .then((res) => onSuccess && onSuccess(res))
            .catch((err) => console.log(err));
        };

        /***/
      },

    /***/ "./src/common/defines.js":
      /*!*******************************!*\
  !*** ./src/common/defines.js ***!
  \*******************************/
      /*! exports provided: API_URL */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "API_URL",
          function () {
            return API_URL;
          }
        );
        const API_URL = "https://ogami-api.herokuapp.com";

        /***/
      },

    /***/ "./src/common/shopUtils.js":
      /*!*********************************!*\
  !*** ./src/common/shopUtils.js ***!
  \*********************************/
      /*! exports provided: getProductsBySlug, calculateTotalPrice, checkProductInCart, checkProductCartQuantity, checkProductInWishlist */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getProductsBySlug",
          function () {
            return getProductsBySlug;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "calculateTotalPrice",
          function () {
            return calculateTotalPrice;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "checkProductInCart",
          function () {
            return checkProductInCart;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "checkProductCartQuantity",
          function () {
            return checkProductCartQuantity;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "checkProductInWishlist",
          function () {
            return checkProductInWishlist;
          }
        );
        const getProductsBySlug = (arr, slug) => {
          return slug && typeof slug === "string"
            ? arr.find((p) => p.slug.toLowerCase() === slug.toLowerCase())
            : arr;
        };
        const calculateTotalPrice = (arr) => {
          let total = 0;
          arr.forEach((item) => {
            if (item.discount) {
              total += item.cartQuantity
                ? (item.price - item.discount) * item.cartQuantity
                : item.price - item.discount;
            } else {
              total += item.cartQuantity
                ? item.price * item.cartQuantity
                : item.price;
            }
          });
          return total;
        }; //Cart

        const checkProductInCart = (cartArr, pid) => {
          return pid
            ? cartArr.find((item) => item.productId === pid)
            : undefined;
        };
        const checkProductCartQuantity = (cartArr, pid) => {
          const productsInCart = cartArr.filter(
            (item) => item.productId === pid
          );

          if (productsInCart && productsInCart.length > 0) {
            const totalProductQuantityInCart = productsInCart.reduce(
              (total, item) => total + item.cartQuantity,
              0
            );
            return totalProductQuantityInCart;
          } else {
            return 0;
          }
        }; //Wishlist

        const checkProductInWishlist = (wishlistArr, pid) => {
          return pid ? wishlistArr.find((item) => item.id === pid) : undefined;
        };

        /***/
      },

    /***/ "./src/common/useDebound.js":
      /*!**********************************!*\
  !*** ./src/common/useDebound.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return useDebounce;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );

        function useDebounce(value, delay) {
          const { 0: debouncedValue, 1: setDebouncedValue } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )(value);
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

        /***/
      },

    /***/ "./src/common/utils.js":
      /*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
      /*! exports provided: formatCurrency, renderParam, formatDate, removeDash */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "formatCurrency",
          function () {
            return formatCurrency;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "renderParam",
          function () {
            return renderParam;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "formatDate",
          function () {
            return formatDate;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "removeDash",
          function () {
            return removeDash;
          }
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! moment */ "moment");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_0__
          );

        const formatCurrency = (price, locales = "us-US", currency = "USD") => {
          return new Intl.NumberFormat(locales, {
            style: "currency",
            currency: currency,
          }).format(price);
        };
        const renderParam = (paramName, paramValue) => {
          if (paramValue && paramValue !== "" && paramValue !== null) {
            return `&${paramName}=${paramValue}`;
          }

          return "";
        };
        const formatDate = (
          date,
          inputFormat = "YYYY-MM-DD",
          outputFormat = "MMM DD, YYYY"
        ) => {
          return moment__WEBPACK_IMPORTED_MODULE_0___default()(
            date,
            inputFormat
          ).format(outputFormat);
        };
        const removeDash = (str) => {
          return str.replace(/-/g, " ");
        };

        /***/
      },

    /***/ "./src/common/wishlistServices.js":
      /*!****************************************!*\
  !*** ./src/common/wishlistServices.js ***!
  \****************************************/
      /*! exports provided: onAddProductToWishlist, onRemoveProductFromWishlist */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "onAddProductToWishlist",
          function () {
            return onAddProductToWishlist;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "onRemoveProductFromWishlist",
          function () {
            return onRemoveProductFromWishlist;
          }
        );
        /* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../apis/wishlist */ "./src/apis/wishlist.js");

        const onAddProductToWishlist = ({ product, onSuccess, onError }) => {
          Object(
            _apis_wishlist__WEBPACK_IMPORTED_MODULE_0__[
              "fetchProductIdWishlistData"
            ]
          )(product.id)
            .then((res) => {
              if (res.data.length === 0) {
                Object(
                  _apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["addWishlistData"]
                )(product)
                  .then((res) => onSuccess && onSuccess(res))
                  .catch(
                    (err) =>
                      onError &&
                      onError(
                        "Add product to wislist failed, please try again",
                        err
                      )
                  );
              } else {
                onError && onError("Product already in wishlist");
              }
            })
            .catch(
              (err) =>
                onError &&
                onError("Add product to wislist failed, please try again", err)
            );
        };
        const onRemoveProductFromWishlist = ({
          productId,
          onSuccess,
          onError,
        }) => {
          if (productId && productId !== "" && productId !== null) {
            Object(
              _apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["removeWishlistData"]
            )(productId)
              .then((res) => onSuccess && onSuccess(res))
              .catch(
                (err) =>
                  onError &&
                  onError("Remove product fail, pleaser try again", err)
              );
          }
        };

        /***/
      },

    /***/ "./src/common/withHeaderScroll.js":
      /*!****************************************!*\
  !*** ./src/common/withHeaderScroll.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return withHeaderScroll;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! classnames */ "classnames");
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            classnames__WEBPACK_IMPORTED_MODULE_1__
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\common\\withHeaderScroll.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function _extends() {
          _extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
          return _extends.apply(this, arguments);
        }

        function withHeaderScroll(WrappedComponent) {
          return function (props) {
            const headerRef = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useRef"]
            )(null);
            const { 0: scroll, 1: setScroll } = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(0);
            const { 0: isHeaderFixed, 1: setIsHeaderFixed } = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(0);
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

            return __jsx(
              "div",
              {
                ref: headerRef,
                className: `header ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                  {
                    fixed: isHeaderFixed,
                  },
                  props.className
                )}`,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 7,
                },
              },
              __jsx(
                WrappedComponent,
                _extends({}, props, {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 9,
                  },
                })
              )
            );
          };
        }

        /***/
      },

    /***/ "./src/components/footer/Footer.js":
      /*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! classnames */ "classnames");
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            classnames__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../other/Container */ "./src/components/other/Container.js"
          );
        /* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../data/footer-links.json */ "./src/data/footer-links.json"
          );
        var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4___namespace =
          /*#__PURE__*/ __webpack_require__.t(
            /*! ../../data/footer-links.json */ "./src/data/footer-links.json",
            1
          );
        /* harmony import */ var _elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./elements/FooterQuickLinks */ "./src/components/footer/elements/FooterQuickLinks.js"
          );
        /* harmony import */ var _elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./elements/FooterInfomation */ "./src/components/footer/elements/FooterInfomation.js"
          );
        /* harmony import */ var _elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./elements/FooterSubcribeInput */ "./src/components/footer/elements/FooterSubcribeInput.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\footer\\Footer.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Footer({ containerFluid, className }) {
          return __jsx(
            "div",
            {
              className: `footer -style-one ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                className
              )}`,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 5,
              },
            },
            __jsx(
              "div",
              {
                className: "footer-top",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 7,
                },
              },
              __jsx(
                _other_Container__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  fluid: containerFluid,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_1__["Row"],
                  {
                    gutter: 15,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                    {
                      xs: 24,
                      md: 9,
                      lg: 8,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      _elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_6__[
                        "default"
                      ],
                      {
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 18,
                          columnNumber: 15,
                        },
                      }
                    )
                  ),
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                    {
                      xs: 24,
                      md: 15,
                      lg: 16,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      _elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ],
                      {
                        colSize: {
                          span: 8,
                        },
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 21,
                          columnNumber: 15,
                        },
                      }
                    )
                  )
                )
              )
            ),
            __jsx(
              "div",
              {
                className: "footer-subcribe",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 7,
                },
              },
              __jsx(
                _other_Container__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_1__["Row"],
                  {
                    align: "center",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                    {
                      xs: 24,
                      md: 14,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "div",
                      {
                        className: "footer-subcribe__content",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 30,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "h5",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31,
                            columnNumber: 17,
                          },
                        },
                        "Join Our Newsletter Now"
                      ),
                      __jsx(
                        "p",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32,
                            columnNumber: 17,
                          },
                        },
                        "Get E-mail updates about our latest shop and special offers."
                      )
                    )
                  ),
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                    {
                      xs: 24,
                      md: 10,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      _elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_7__[
                        "default"
                      ],
                      {
                        url: "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 15,
                        },
                      }
                    )
                  )
                )
              )
            ),
            __jsx(
              "div",
              {
                className: "footer-bottom",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 7,
                },
              },
              __jsx(
                _other_Container__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "div",
                  {
                    className: "footer-bottom__wrapper",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "p",
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 13,
                      },
                    },
                    "Copyright \xA9 2019 Ogami - All Rights Reserved."
                  ),
                  __jsx("img", {
                    src: "" + "/assets/images/footer/payment.png",
                    alt: "Payment methods",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                      columnNumber: 13,
                    },
                  })
                )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            Footer
          );

        /***/
      },

    /***/ "./src/components/footer/elements/FooterInfomation.js":
      /*!************************************************************!*\
  !*** ./src/components/footer/elements/FooterInfomation.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return FooterInfomation;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterInfomation.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function FooterInfomation() {
          return __jsx(
            "div",
            {
              className: "footer-info",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8,
                columnNumber: 5,
              },
            },
            __jsx(
              next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                href: "" + "/",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9,
                  columnNumber: 7,
                },
              },
              __jsx(
                "a",
                {
                  className: "footer-info__logo",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10,
                    columnNumber: 9,
                  },
                },
                __jsx("img", {
                  src: "" + "/assets/images/logo.png",
                  alt: "Ogami Logo",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11,
                    columnNumber: 11,
                  },
                })
              )
            ),
            __jsx(
              "ul",
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 7,
                },
              },
              __jsx(
                "li",
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 9,
                  },
                },
                "Address: 60-49 Road 11378 New York"
              ),
              __jsx(
                "li",
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 9,
                  },
                },
                "Phone: +65 11.188.888"
              ),
              __jsx(
                "li",
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 9,
                  },
                },
                "Email: ritik@konfav.com"
              )
            ),
            __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {
              type: "primary",
              shape: "circle",
              className: "-btn-light",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 7,
              },
            })
          );
        }

        /***/
      },

    /***/ "./src/components/footer/elements/FooterQuickLinks.js":
      /*!************************************************************!*\
  !*** ./src/components/footer/elements/FooterQuickLinks.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../data/footer-links.json */ "./src/data/footer-links.json"
          );
        var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3___namespace =
          /*#__PURE__*/ __webpack_require__.t(
            /*! ../../../data/footer-links.json */ "./src/data/footer-links.json",
            1
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterQuickLinks.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function _extends() {
          _extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
          return _extends.apply(this, arguments);
        }

        function FooterQuickLinks({ colSize }) {
          return __jsx(
            "div",
            {
              className: "footer-links",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 5,
              },
            },
            __jsx(
              antd__WEBPACK_IMPORTED_MODULE_2__["Row"],
              {
                gutter: 10,
                justify: "space-between",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                  columnNumber: 7,
                },
              },
              _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__.map(
                (item, index) =>
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_2__["Col"],
                    _extends(
                      {
                        key: index,
                      },
                      colSize,
                      {
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12,
                          columnNumber: 11,
                        },
                      }
                    ),
                    __jsx(
                      "div",
                      {
                        className: "footer-links__group",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 13,
                          columnNumber: 13,
                        },
                      },
                      __jsx(
                        "h5",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14,
                            columnNumber: 15,
                          },
                        },
                        item.title
                      ),
                      __jsx(
                        "ul",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15,
                            columnNumber: 15,
                          },
                        },
                        item.items.map((link, index) =>
                          __jsx(
                            "li",
                            {
                              key: index,
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 17,
                                columnNumber: 19,
                              },
                            },
                            __jsx(
                              next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                              {
                                href: "" + link.href,
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 18,
                                  columnNumber: 21,
                                },
                              },
                              __jsx(
                                "a",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 19,
                                    columnNumber: 23,
                                  },
                                },
                                " ",
                                link.title
                              )
                            ),
                            " "
                          )
                        )
                      )
                    )
                  )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            FooterQuickLinks
          );

        /***/
      },

    /***/ "./src/components/footer/elements/FooterSubcribeInput.js":
      /*!***************************************************************!*\
  !*** ./src/components/footer/elements/FooterSubcribeInput.js ***!
  \***************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return FooterSubcribeInput;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-mailchimp-subscribe */ "react-mailchimp-subscribe"
          );
        /* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_2__
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterSubcribeInput.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const CustomForm =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            ({ status, message, onValidated }) => {
              const onFinish = (value) => {
                console.log("Success:", value);
                value &&
                  onValidated({
                    EMAIL: value.email,
                  });
              };

              const onFinishFailed = (errorInfo) => {
                console.log("Failed:", errorInfo);
              };

              return __jsx(
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                null,
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_2__["Form"],
                  {
                    name: "basic",
                    onFinish: onFinish,
                    onFinishFailed: onFinishFailed,
                    className: "footer-subcribe__form",
                    __self: undefined,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20,
                      columnNumber: 7,
                    },
                  },
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item,
                    {
                      noStyle: true,
                      name: "email",
                      rules: [
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ],
                      __self: undefined,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26,
                        columnNumber: 9,
                      },
                    },
                    __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
                      placeholder: "Enter your email",
                      __self: undefined,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40,
                        columnNumber: 11,
                      },
                    })
                  ),
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item,
                    {
                      noStyle: true,
                      __self: undefined,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 9,
                      },
                    },
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_2__["Button"],
                      {
                        type: "link",
                        htmlType: "submit",
                        __self: undefined,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 43,
                          columnNumber: 11,
                        },
                      },
                      "SUBSCRIBE"
                    )
                  )
                ),
                status === "sending" &&
                  __jsx(
                    "div",
                    {
                      style: {
                        color: "blue",
                      },
                      __self: undefined,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 32,
                      },
                    },
                    "sending..."
                  ),
                status === "error" &&
                  __jsx("div", {
                    style: {
                      color: "red",
                    },
                    dangerouslySetInnerHTML: {
                      __html: message,
                    },
                    __self: undefined,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 9,
                    },
                  }),
                status === "success" &&
                  __jsx("div", {
                    style: {
                      color: "green",
                    },
                    dangerouslySetInnerHTML: {
                      __html: message,
                    },
                    __self: undefined,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 9,
                    },
                  })
              );
            }
          );
        function FooterSubcribeInput({ url }) {
          return __jsx(
            react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default.a,
            {
              url: url,
              render: ({ subscribe, status, message }) =>
                __jsx(CustomForm, {
                  status: status,
                  message: message,
                  onValidated: (formData) => subscribe(formData),
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 9,
                  },
                }),
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 5,
              },
            }
          );
        }

        /***/
      },

    /***/ "./src/components/header/HeaderOne.js":
      /*!********************************************!*\
  !*** ./src/components/header/HeaderOne.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return HeaderOne;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _top_nav_TopNavOne__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./top-nav/TopNavOne */ "./src/components/header/top-nav/TopNavOne.js"
          );
        /* harmony import */ var _menu_MenuOne__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./menu/MenuOne */ "./src/components/header/menu/MenuOne.js"
          );
        /* harmony import */ var _function_menu_FunctionMenuOne__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./function-menu/FunctionMenuOne */ "./src/components/header/function-menu/FunctionMenuOne.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\HeaderOne.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function HeaderOne({ activeHeaderCollapse }) {
          return __jsx(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            __jsx(_top_nav_TopNavOne__WEBPACK_IMPORTED_MODULE_1__["default"], {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 7,
              },
            }),
            __jsx(_menu_MenuOne__WEBPACK_IMPORTED_MODULE_2__["default"], {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10,
                columnNumber: 7,
              },
            }),
            __jsx(
              _function_menu_FunctionMenuOne__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ],
              {
                activeHeaderCollapse: activeHeaderCollapse,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11,
                  columnNumber: 7,
                },
              }
            )
          );
        }

        /***/
      },

    /***/ "./src/components/header/elements/CategoryColappse.js":
      /*!************************************************************!*\
  !*** ./src/components/header/elements/CategoryColappse.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
        /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_3__
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\CategoryColappse.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        let categories = [
          {
            name: "Fresh Meat",
            href: "/shop/shop-3-column",
          },
          {
            name: "Vegetables",
            href: "/shop/shop-3-column",
          },
          {
            name: "Fruit & Nut Gifts",
            href: "/shop/shop-3-column",
          },
          {
            name: "Fresh Berries",
            href: "/shop/shop-3-column",
          },
          {
            name: "Ocean Foods",
            href: "/shop/shop-3-column",
          },
          {
            name: "Butter & Eggs",
            href: "/shop/shop-3-column",
          },
          {
            name: "Fastfood",
            href: "/shop/shop-3-column",
          },
          {
            name: "Fresh Onion",
            href: "/shop/shop-3-column",
          },
          {
            name: "Papayaya & Crisps",
            href: "/shop/shop-3-column",
          },
          {
            name: "Oatmeal",
            href: "/shop/shop-3-column",
          },
          {
            name: "Fresh Bananas",
            href: "/shop/shop-3-column",
          },
        ];

        function CategoryColappse({ active }) {
          const { Panel } = antd__WEBPACK_IMPORTED_MODULE_1__["Collapse"];
          return __jsx(
            "div",
            {
              className: "category-collapse",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 5,
              },
            },
            __jsx(
              antd__WEBPACK_IMPORTED_MODULE_1__["Collapse"],
              {
                bordered: false,
                defaultActiveKey: active ? "1" : null,
                expandIcon: ({ isActive }) =>
                  __jsx(
                    _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[
                      "DownOutlined"
                    ],
                    {
                      rotate: isActive ? -180 : 0,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28,
                        columnNumber: 11,
                      },
                    }
                  ),
                expandIconPosition: "right",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 7,
                },
              },
              __jsx(
                Panel,
                {
                  header: "All departments",
                  key: "1",
                  extra: __jsx("i", {
                    className: "far fa-bars",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 18,
                    },
                  }),
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "ul",
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 11,
                    },
                  },
                  categories.map((item, index) =>
                    __jsx(
                      "li",
                      {
                        key: index,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 39,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                        {
                          href: "" + item.href,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "a",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 41,
                              columnNumber: 19,
                            },
                          },
                          item.name
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            CategoryColappse
          );

        /***/
      },

    /***/ "./src/components/header/elements/FunctionItems.js":
      /*!*********************************************************!*\
  !*** ./src/components/header/elements/FunctionItems.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! react-redux */ "react-redux");
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_redux__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../common/utils */ "./src/common/utils.js"
          );
        /* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../common/shopUtils */ "./src/common/shopUtils.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\FunctionItems.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

        function FunctionItems({ hideTotal, hideWishlist }) {
          const cartState = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]
          )((state) => state.cartReducer);
          return __jsx(
            "div",
            {
              className: "function-items",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 5,
              },
            },
            !hideWishlist &&
              __jsx(
                next_link__WEBPACK_IMPORTED_MODULE_0___default.a,
                {
                  href: "" + "/shop/wishlist",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "a",
                  {
                    className: "function-items-item",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14,
                      columnNumber: 11,
                    },
                  },
                  __jsx("i", {
                    className: "icon_heart_alt",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 15,
                      columnNumber: 13,
                    },
                  })
                )
              ),
            __jsx(
              next_link__WEBPACK_IMPORTED_MODULE_0___default.a,
              {
                href: "" + "/shop/cart",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 7,
                },
              },
              __jsx(
                "a",
                {
                  className: "function-items-item",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 9,
                  },
                },
                __jsx("i", {
                  className: "icon_bag_alt",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 11,
                  },
                }),
                !hideTotal &&
                  (cartState.data
                    ? __jsx(
                        "span",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26,
                            columnNumber: 15,
                          },
                        },
                        Object(
                          _common_utils__WEBPACK_IMPORTED_MODULE_3__[
                            "formatCurrency"
                          ]
                        )(
                          Object(
                            _common_shopUtils__WEBPACK_IMPORTED_MODULE_4__[
                              "calculateTotalPrice"
                            ]
                          )(cartState.data)
                        )
                      )
                    : __jsx(
                        "span",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28,
                            columnNumber: 15,
                          },
                        },
                        Object(
                          _common_utils__WEBPACK_IMPORTED_MODULE_3__[
                            "formatCurrency"
                          ]
                        )(0)
                      ))
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(
            FunctionItems
          );

        /***/
      },

    /***/ "./src/components/header/elements/MobileMenuOpener.js":
      /*!************************************************************!*\
  !*** ./src/components/header/elements/MobileMenuOpener.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _MobileNavigator__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./MobileNavigator */ "./src/components/header/elements/MobileNavigator.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\MobileMenuOpener.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function MobileMenuOpener() {
          const { 0: visible, 1: setVisible } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )(false);

          const onShowDrawer = () => {
            setVisible(true);
          };

          const onCloseDrawer = () => {
            setVisible(false);
          };

          return __jsx(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            __jsx(
              "a",
              {
                onClick: onShowDrawer,
                className: "menu-mobile-opener",
                href: "#",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 7,
                },
              },
              __jsx("i", {
                className: "fas fa-bars",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 9,
                },
              })
            ),
            __jsx(
              antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"],
              {
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
                  columnNumber: 7,
                },
              },
              __jsx(_MobileNavigator__WEBPACK_IMPORTED_MODULE_2__["default"], {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 9,
                },
              })
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            MobileMenuOpener
          );

        /***/
      },

    /***/ "./src/components/header/elements/MobileNavigator.js":
      /*!***********************************************************!*\
  !*** ./src/components/header/elements/MobileNavigator.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../data/navigator.json */ "./src/data/navigator.json"
          );
        var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace =
          /*#__PURE__*/ __webpack_require__.t(
            /*! ../../../data/navigator.json */ "./src/data/navigator.json",
            1
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\MobileNavigator.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function MobileNavigator() {
          const { SubMenu } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
          const { 0: current, 1: setCurrent } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )("mail");

          const handleClick = (e) => {
            console.log("click ", e);
            this.setState({
              current: e.key,
            });
          };

          return __jsx(
            "div",
            {
              className: "menu-mobile",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 5,
              },
            },
            __jsx(
              antd__WEBPACK_IMPORTED_MODULE_1__["Menu"],
              {
                className: "menu-mobile-navigator",
                onClick: handleClick,
                selectedKeys: [current],
                mode: "inline",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 7,
                },
              },
              __jsx(
                SubMenu,
                {
                  key: "homepage",
                  title:
                    _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME
                      .title,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 9,
                  },
                },
                _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.subMenu.map(
                  (item) =>
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item,
                      {
                        key: item.title,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 25,
                          columnNumber: 13,
                        },
                      },
                      __jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                        {
                          href: "" + item.href,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          "a",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 27,
                              columnNumber: 17,
                            },
                          },
                          " ",
                          item.title
                        )
                      )
                    )
                )
              ),
              __jsx(
                SubMenu,
                {
                  key: "shop",
                  title:
                    _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP
                      .title,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  SubMenu,
                  {
                    key: "shop layout",
                    title: "Layout shop",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 33,
                      columnNumber: 11,
                    },
                  },
                  _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.layout.map(
                    (item) =>
                      __jsx(
                        antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item,
                        {
                          key: item.title,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                          {
                            href: "" + item.href,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 36,
                              columnNumber: 17,
                            },
                          },
                          __jsx(
                            "a",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37,
                                columnNumber: 19,
                              },
                            },
                            " ",
                            item.title
                          )
                        )
                      )
                  )
                ),
                __jsx(
                  SubMenu,
                  {
                    key: "shop detail",
                    title: "Detail shop",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 11,
                    },
                  },
                  _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.detail.map(
                    (item) =>
                      __jsx(
                        antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item,
                        {
                          key: item.title,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                          {
                            href: "" + item.href,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 45,
                              columnNumber: 17,
                            },
                          },
                          __jsx(
                            "a",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46,
                                columnNumber: 19,
                              },
                            },
                            " ",
                            item.title
                          )
                        )
                      )
                  )
                ),
                __jsx(
                  SubMenu,
                  {
                    key: "shop pages",
                    title: "Pages shop",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 11,
                    },
                  },
                  _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.pages.map(
                    (item) =>
                      __jsx(
                        antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item,
                        {
                          key: item.title,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                          {
                            href: "" + item.href,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 54,
                              columnNumber: 17,
                            },
                          },
                          __jsx(
                            "a",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 55,
                                columnNumber: 19,
                              },
                            },
                            " ",
                            item.title
                          )
                        )
                      )
                  )
                )
              ),
              __jsx(
                SubMenu,
                {
                  key: "pages",
                  title:
                    _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES
                      .title,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 9,
                  },
                },
                _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.subMenu.map(
                  (item) =>
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item,
                      {
                        key: item.title,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63,
                          columnNumber: 13,
                        },
                      },
                      __jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                        {
                          href: "" + item.href,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          "a",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 65,
                              columnNumber: 17,
                            },
                          },
                          " ",
                          item.title
                        )
                      )
                    )
                )
              ),
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item,
                {
                  key: "alipay",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                  {
                    href:
                      "" +
                      _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT
                        .href,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "a",
                    {
                      href: "https://ant.design",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 13,
                      },
                    },
                    _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT
                      .title
                  )
                )
              )
            ),
            __jsx(
              "div",
              {
                className: "menu-mobile-functions",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 7,
                },
              },
              __jsx(
                next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  href: "" + "/other/login",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "a",
                  {
                    className: "menu-mobile-functions__login",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 11,
                    },
                  },
                  "Login / Register"
                )
              ),
              __jsx(
                _other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__["default"],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 9,
                  },
                }
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            MobileNavigator
          );

        /***/
      },

    /***/ "./src/components/header/elements/Navigator.js":
      /*!*****************************************************!*\
  !*** ./src/components/header/elements/Navigator.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../data/navigator.json */ "./src/data/navigator.json"
          );
        var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace =
          /*#__PURE__*/ __webpack_require__.t(
            /*! ../../../data/navigator.json */ "./src/data/navigator.json",
            1
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_3__
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\Navigator.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Navigator() {
          const { SubMenu } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
          const { 0: current, 1: setCurrent } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )("mail");

          const handleClick = (e) => {
            console.log("click ", e);
            setCurrent(e.key);
          };

          return __jsx(
            "ul",
            {
              className: "navigation",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 5,
              },
            },
            __jsx(
              "li",
              {
                className: "navigation-item -toggleable",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 7,
                },
              },
              __jsx(
                next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  href: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME
                    .href,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "a",
                  {
                    className: "navigation-item__title",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 11,
                    },
                  },
                  _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.title
                )
              ),
              __jsx(
                "ul",
                {
                  className: "navigation-item__submenu",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 9,
                  },
                },
                _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.subMenu.map(
                  (item, index) =>
                    __jsx(
                      "li",
                      {
                        key: index,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 22,
                          columnNumber: 13,
                        },
                      },
                      __jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                        {
                          href: "" + item.href,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          "a",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 24,
                              columnNumber: 17,
                            },
                          },
                          item.title
                        )
                      )
                    )
                )
              )
            ),
            __jsx(
              "li",
              {
                className: "navigation-item -toggleable",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 7,
                },
              },
              __jsx(
                next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  href:
                    "" +
                    _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.href,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "a",
                  {
                    className: "navigation-item__title",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 11,
                    },
                  },
                  _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.title
                )
              ),
              __jsx(
                "ul",
                {
                  className: "navigation-item__submenu -wide",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "div",
                  {
                    className: "navigation-item__submenu-group",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "h5",
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36,
                        columnNumber: 13,
                      },
                    },
                    "Layout shop"
                  ),
                  _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.layout.map(
                    (item, index) =>
                      __jsx(
                        "li",
                        {
                          key: index,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                          {
                            href: "" + item.href,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 39,
                              columnNumber: 17,
                            },
                          },
                          __jsx(
                            "a",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 40,
                                columnNumber: 19,
                              },
                            },
                            item.title
                          )
                        )
                      )
                  )
                ),
                __jsx(
                  "div",
                  {
                    className: "navigation-item__submenu-group",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "h5",
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 13,
                      },
                    },
                    "Detail shop"
                  ),
                  _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.detail.map(
                    (item, index) =>
                      __jsx(
                        "li",
                        {
                          key: index,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                          {
                            href: "" + item.href,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 49,
                              columnNumber: 17,
                            },
                          },
                          __jsx(
                            "a",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50,
                                columnNumber: 19,
                              },
                            },
                            item.title
                          )
                        )
                      )
                  )
                ),
                __jsx(
                  "div",
                  {
                    className: "navigation-item__submenu-group",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "h5",
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 13,
                      },
                    },
                    "Pages shop"
                  ),
                  _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.pages.map(
                    (item, index) =>
                      __jsx(
                        "li",
                        {
                          key: index,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                          {
                            href: "" + item.href,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 59,
                              columnNumber: 17,
                            },
                          },
                          __jsx(
                            "a",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60,
                                columnNumber: 19,
                              },
                            },
                            item.title
                          )
                        )
                      )
                  )
                )
              )
            ),
            __jsx(
              "li",
              {
                className: "navigation-item -toggleable",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 7,
                },
              },
              __jsx(
                next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  href:
                    "" +
                    _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.href,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "a",
                  {
                    className: "navigation-item__title",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 11,
                    },
                  },
                  _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.title
                )
              ),
              __jsx(
                "ul",
                {
                  className: "navigation-item__submenu",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 9,
                  },
                },
                _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.subMenu.map(
                  (item, index) =>
                    __jsx(
                      "li",
                      {
                        key: index,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 73,
                          columnNumber: 13,
                        },
                      },
                      __jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                        {
                          href: "" + item.href,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          "a",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 75,
                              columnNumber: 17,
                            },
                          },
                          item.title
                        )
                      )
                    )
                )
              )
            ),
            __jsx(
              "li",
              {
                className: "navigation-item -toggleable",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 7,
                },
              },
              __jsx(
                next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  href:
                    "" +
                    _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES
                      .href,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "a",
                  {
                    className: "navigation-item__title",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 11,
                    },
                  },
                  _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.title
                )
              ),
              __jsx(
                "ul",
                {
                  className: "navigation-item__submenu",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 9,
                  },
                },
                _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.subMenu.map(
                  (item, index) =>
                    __jsx(
                      "li",
                      {
                        key: index,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87,
                          columnNumber: 13,
                        },
                      },
                      __jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                        {
                          href: "" + item.href,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 88,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          "a",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 89,
                              columnNumber: 17,
                            },
                          },
                          item.title
                        )
                      )
                    )
                )
              )
            ),
            __jsx(
              "li",
              {
                className: "navigation-item",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 7,
                },
              },
              __jsx(
                next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  href:
                    "" +
                    _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT
                      .href,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "a",
                  {
                    className: "navigation-item__title",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 11,
                    },
                  },
                  _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title
                )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            Navigator
          );

        /***/
      },

    /***/ "./src/components/header/elements/SearchForm.js":
      /*!******************************************************!*\
  !*** ./src/components/header/elements/SearchForm.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! react-redux */ "react-redux");
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_redux__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! next/router */ "next/router");
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_router__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../data/categories.json */ "./src/data/categories.json"
          );
        var _data_categories_json__WEBPACK_IMPORTED_MODULE_4___namespace =
          /*#__PURE__*/ __webpack_require__.t(
            /*! ../../../data/categories.json */ "./src/data/categories.json",
            1
          );
        /* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../common/useDebound */ "./src/common/useDebound.js"
          );
        /* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js"
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_7__
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\elements\\SearchForm.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function SearchForm({ enterButton = "Search", hideSelect }) {
          const { Option } = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
          const router = Object(
            next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]
          )();
          const dispatch = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]
          )();
          const { 0: currentSearch, 1: setCurrentSearch } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )("");
          const { 0: currentCategory, 1: setCurrentCategory } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )("");
          const deboundValue = Object(
            _common_useDebound__WEBPACK_IMPORTED_MODULE_5__["default"]
          )(currentSearch, 300);
          const shopState = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]
          )((state) => state.shopReducer);
          const { searchedProducts } = shopState;

          const onChange = (val) => {
            setCurrentSearch(val);
          };

          const onSelectOption = (value, option) => {
            setCurrentSearch(value);
          };

          const onSearch = (val) => {
            if (!currentSearch || currentSearch === "") {
              return;
            } else {
              router.push({
                pathname: "" + "/shop/shop-3-column",
                query: {
                  q: currentSearch,
                },
              });
            }
          };

          const onChooseCateogry = (val) => {
            setCurrentCategory(val);
          };

          const options =
            searchedProducts.data.length > 0 &&
            searchedProducts.data.map((item) => ({
              value: item.name,
            }));
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
            dispatch(
              Object(
                _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__[
                  "fetchSearchedProductRequest"
                ]
              )({
                input: currentSearch,
                limit: 10,
                category: currentCategory,
              })
            );
          }, [deboundValue, currentCategory]);
          return __jsx(
            "div",
            {
              className: "search-form",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 5,
              },
            },
            __jsx(
              "div",
              {
                className: "search-form-wrapper",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 7,
                },
              },
              !hideSelect &&
                __jsx(
                  "div",
                  {
                    className: "search-form-select",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_1__["Select"],
                    {
                      defaultValue: currentCategory,
                      suffixIcon: __jsx("i", {
                        className: "far fa-angle-down",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 59,
                          columnNumber: 27,
                        },
                      }),
                      bordered: false,
                      onChange: onChooseCateogry,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      Option,
                      {
                        value: "",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63,
                          columnNumber: 15,
                        },
                      },
                      "All categories"
                    ),
                    _data_categories_json__WEBPACK_IMPORTED_MODULE_4__.map(
                      (item, index) =>
                        __jsx(
                          Option,
                          {
                            key: index,
                            value: item.value,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 65,
                              columnNumber: 17,
                            },
                          },
                          item.name
                        )
                    )
                  )
                ),
              __jsx(
                "div",
                {
                  className: "search-form-input",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"],
                  {
                    backfill: true,
                    value: currentSearch,
                    onSelect: onSelectOption,
                    onChange: onChange,
                    options: options,
                    filterOption: (inputValue, option) =>
                      option.value
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 11,
                    },
                  },
                  __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
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
                      columnNumber: 13,
                    },
                  })
                )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            SearchForm
          );

        /***/
      },

    /***/ "./src/components/header/function-menu/FunctionMenuOne.js":
      /*!****************************************************************!*\
  !*** ./src/components/header/function-menu/FunctionMenuOne.js ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../other/Container */ "./src/components/other/Container.js"
          );
        /* harmony import */ var _elements_CategoryColappse__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../elements/CategoryColappse */ "./src/components/header/elements/CategoryColappse.js"
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _elements_SearchForm__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../elements/SearchForm */ "./src/components/header/elements/SearchForm.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\function-menu\\FunctionMenuOne.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function FunctionMenuOne({ activeHeaderCollapse }) {
          return __jsx(
            "div",
            {
              className: "header-function-menu-one",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10,
                columnNumber: 5,
              },
            },
            __jsx(
              _other_Container__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11,
                  columnNumber: 7,
                },
              },
              __jsx(
                "div",
                {
                  className: "function-menu-wrapper",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_3__["Row"],
                  {
                    gutter: 30,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 13,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_3__["Col"],
                    {
                      xs: {
                        span: 24,
                        order: 2,
                      },
                      md: {
                        span: 8,
                        order: 1,
                      },
                      lg: 6,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      _elements_CategoryColappse__WEBPACK_IMPORTED_MODULE_2__[
                        "default"
                      ],
                      {
                        active: activeHeaderCollapse,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 15,
                          columnNumber: 15,
                        },
                      }
                    )
                  ),
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_3__["Col"],
                    {
                      xs: {
                        span: 24,
                        order: 1,
                      },
                      md: {
                        span: 16,
                        order: 2,
                      },
                      lg: 18,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      _elements_SearchForm__WEBPACK_IMPORTED_MODULE_4__[
                        "default"
                      ],
                      {
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 22,
                          columnNumber: 15,
                        },
                      }
                    )
                  )
                )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            FunctionMenuOne
          );

        /***/
      },

    /***/ "./src/components/header/menu/MenuOne.js":
      /*!***********************************************!*\
  !*** ./src/components/header/menu/MenuOne.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return MenuOne;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../other/Container */ "./src/components/other/Container.js"
          );
        /* harmony import */ var _elements_Navigator__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../elements/Navigator */ "./src/components/header/elements/Navigator.js"
          );
        /* harmony import */ var _elements_FunctionItems__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../elements/FunctionItems */ "./src/components/header/elements/FunctionItems.js"
          );
        /* harmony import */ var _elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../elements/MobileMenuOpener */ "./src/components/header/elements/MobileMenuOpener.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\menu\\MenuOne.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function MenuOne() {
          return __jsx(
            "div",
            {
              className: "menu -style-one",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 5,
              },
            },
            __jsx(
              _other_Container__WEBPACK_IMPORTED_MODULE_2__["default"],
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 7,
                },
              },
              __jsx(
                "div",
                {
                  className: "menu-wrapper",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  _elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ],
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14,
                      columnNumber: 11,
                    },
                  }
                ),
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: "" + "/",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 15,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "a",
                    {
                      className: "menu-logo",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16,
                        columnNumber: 13,
                      },
                    },
                    __jsx("img", {
                      src: "" + "/assets/images/logo.png",
                      alt: "Ogami logo",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17,
                        columnNumber: 15,
                      },
                    })
                  )
                ),
                __jsx(
                  _elements_Navigator__WEBPACK_IMPORTED_MODULE_3__["default"],
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 11,
                    },
                  }
                ),
                __jsx(
                  _elements_FunctionItems__WEBPACK_IMPORTED_MODULE_4__[
                    "default"
                  ],
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24,
                      columnNumber: 11,
                    },
                  }
                )
              )
            )
          );
        }

        /***/
      },

    /***/ "./src/components/header/top-nav/TopNavOne.js":
      /*!****************************************************!*\
  !*** ./src/components/header/top-nav/TopNavOne.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return TopNavOne;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../other/Container */ "./src/components/other/Container.js"
          );
        /* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js"
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_4__
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\top-nav\\TopNavOne.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const flagData = [
          {
            name: "english",
            image: "/assets/images/header/flag-usa.png",
          },
          {
            name: "japanese",
            image: "/assets/images/header/flag-jp.png",
          },
          {
            name: "vietnamese",
            image: "/assets/images/header/flag-vn.png",
          },
        ];
        function TopNavOne({ containerFluid }) {
          const { Option } = antd__WEBPACK_IMPORTED_MODULE_3__["Select"];
          return __jsx(
            "div",
            {
              className: "top-nav-one",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 5,
              },
            },
            __jsx(
              _other_Container__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                fluid: containerFluid,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 7,
                },
              },
              __jsx(
                "div",
                {
                  className: "top-nav-one-wrapper",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "div",
                  {
                    className: "top-nav-one-left",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "ul",
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "li",
                      {
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 21,
                          columnNumber: 15,
                        },
                      },
                      __jsx("i", {
                        className: "fas fa-envelope",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 22,
                          columnNumber: 17,
                        },
                      }),
                      "ritik@konfav.com"
                    ),
                    __jsx(
                      "li",
                      {
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 25,
                          columnNumber: 15,
                        },
                      },
                      __jsx("i", {
                        className: "fas fa-phone-alt",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 26,
                          columnNumber: 17,
                        },
                      }),
                      "+65 11.188.888"
                    )
                  )
                ),
                __jsx(
                  "div",
                  {
                    className: "top-nav-one-right",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "div",
                    {
                      className: "top-nav-one-right__item",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__[
                        "default"
                      ],
                      {
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 33,
                          columnNumber: 15,
                        },
                      }
                    )
                  ),
                  __jsx(
                    "div",
                    {
                      className: "top-nav-one-right__item",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_3__["Select"],
                      {
                        defaultValue: "english",
                        width: 125,
                        bordered: false,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36,
                          columnNumber: 15,
                        },
                      },
                      flagData.map((item, index) =>
                        __jsx(
                          Option,
                          {
                            key: index,
                            value: item.name,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 38,
                              columnNumber: 19,
                            },
                          },
                          __jsx("img", {
                            style: {
                              height: 13 / 16 + "em",
                              width: 20 / 16 + "em",
                              objectFit: "contain",
                              marginTop: -3 / 16 + "em",
                              marginRight: 5 / 16 + "em",
                            },
                            src: "" + item.image,
                            alt: "",
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 39,
                              columnNumber: 21,
                            },
                          }),
                          item.name
                        )
                      )
                    )
                  ),
                  __jsx(
                    "div",
                    {
                      className: "top-nav-one-right__item",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      next_link__WEBPACK_IMPORTED_MODULE_4___default.a,
                      {
                        href: "" + "/auth/login",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 56,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "a",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57,
                            columnNumber: 17,
                          },
                        },
                        __jsx("i", {
                          className: "fas fa-user",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58,
                            columnNumber: 19,
                          },
                        }),
                        "Login"
                      )
                    )
                  )
                )
              )
            )
          );
        }

        /***/
      },

    /***/ "./src/components/layout/LayoutOne.js":
      /*!********************************************!*\
  !*** ./src/components/layout/LayoutOne.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/head */ "next/head");
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_head__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _header_HeaderOne__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../header/HeaderOne */ "./src/components/header/HeaderOne.js"
          );
        /* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../footer/Footer */ "./src/components/footer/Footer.js"
          );
        /* harmony import */ var _common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../common/withHeaderScroll */ "./src/common/withHeaderScroll.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\layout\\LayoutOne.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const ScrolledHeader = Object(
          _common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_5__["default"]
        )(_header_HeaderOne__WEBPACK_IMPORTED_MODULE_3__["default"]);

        function LayoutOne({ title, children, headerClass, footerClass }) {
          return __jsx(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            __jsx(
              next_head__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 7,
                },
              },
              __jsx(
                "title",
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 9,
                  },
                },
                title
              )
            ),
            __jsx(ScrolledHeader, {
              className: headerClass,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 7,
              },
            }),
            children,
            __jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: footerClass,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 7,
              },
            }),
            __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 7,
              },
            })
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            LayoutOne
          );

        /***/
      },

    /***/ "./src/components/other/Container.js":
      /*!*******************************************!*\
  !*** ./src/components/other/Container.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return Container;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\other\\Container.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Container({ fluid, children }) {
          return __jsx(
            "div",
            {
              className: fluid ? "container-fluid" : "container",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 5,
                columnNumber: 5,
              },
            },
            children
          );
        }

        /***/
      },

    /***/ "./src/components/other/FetchDataHandle.js":
      /*!*************************************************!*\
  !*** ./src/components/other/FetchDataHandle.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return FetchDataHandle;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_1__
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\other\\FetchDataHandle.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function FetchDataHandle({
          data,
          errorMessage = "Get products fail, please try again",
          emptyDescription = "No product in this category",
          renderData,
        }) {
          return data.loading
            ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
                active: true,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11,
                  columnNumber: 5,
                },
              })
            : data.error
            ? __jsx(
                "h3",
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 5,
                  },
                },
                errorMessage
              )
            : data.data.length > 0
            ? renderData && renderData(data.data)
            : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
                image:
                  antd__WEBPACK_IMPORTED_MODULE_1__["Empty"]
                    .PRESENTED_IMAGE_SIMPLE,
                description: emptyDescription,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 5,
                },
              });
        }

        /***/
      },

    /***/ "./src/components/other/SocialIcons.js":
      /*!*********************************************!*\
  !*** ./src/components/other/SocialIcons.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return SocialIcons;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! classnames */ "classnames");
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            classnames__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_2__
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\other\\SocialIcons.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function SocialIcons({ className, type = "link", shape }) {
          return __jsx(
            "ul",
            {
              className: `social-icons ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                className
              )}`,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
                columnNumber: 5,
              },
            },
            __jsx(
              "li",
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_2__["Button"],
                {
                  type: type,
                  shape: shape,
                  href: "#",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9,
                    columnNumber: 9,
                  },
                },
                __jsx("i", {
                  className: "fab fa-facebook-f",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10,
                    columnNumber: 11,
                  },
                })
              )
            ),
            __jsx(
              "li",
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_2__["Button"],
                {
                  type: type,
                  shape: shape,
                  href: "#",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 9,
                  },
                },
                __jsx("i", {
                  className: "fab fa-twitter",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 11,
                  },
                })
              )
            ),
            __jsx(
              "li",
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_2__["Button"],
                {
                  type: type,
                  shape: shape,
                  href: "#",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 9,
                  },
                },
                __jsx("i", {
                  className: "fab fa-invision",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 11,
                  },
                })
              )
            ),
            __jsx(
              "li",
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_2__["Button"],
                {
                  type: type,
                  shape: shape,
                  href: "#",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 9,
                  },
                },
                __jsx("i", {
                  className: "fab fa-pinterest-p",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 11,
                  },
                })
              )
            )
          );
        }

        /***/
      },

    /***/ "./src/components/sections/partners/PartnerOne.js":
      /*!********************************************************!*\
  !*** ./src/components/sections/partners/PartnerOne.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react-slick */ "react-slick");
        /* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_slick__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../other/Container */ "./src/components/other/Container.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\sections\\partners\\PartnerOne.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function _extends() {
          _extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
          return _extends.apply(this, arguments);
        }

        function PartnerOne({ style }) {
          const settings = {
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                },
              },
            ],
          };
          return __jsx(
            "div",
            {
              className: "partner-one",
              style: style,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 5,
              },
            },
            __jsx(
              "div",
              {
                className: "partner-one-wrapper",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 7,
                },
              },
              __jsx(
                react_slick__WEBPACK_IMPORTED_MODULE_1___default.a,
                _extends({}, settings, {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 9,
                  },
                }),
                Array.from(Array(8), (e, i) =>
                  __jsx(
                    "div",
                    {
                      key: i,
                      className: "slider-item",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "a",
                      {
                        href: "#",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 33,
                          columnNumber: 15,
                        },
                      },
                      __jsx("img", {
                        src:
                          "" + `/assets/images/sections/partners/${i + 1}.png`,
                        alt: "Partner logo",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34,
                          columnNumber: 17,
                        },
                      })
                    )
                  )
                )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            PartnerOne
          );

        /***/
      },

    /***/ "./src/data/categories.json":
      /*!**********************************!*\
  !*** ./src/data/categories.json ***!
  \**********************************/
      /*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
      /***/ function (module) {
        module.exports = JSON.parse(
          '[{"name":"bread","value":"bread"},{"name":"fastfood","value":"fast-food"},{"name":"fresh meat","value":"fresh-meat"},{"name":"ocean foods","value":"ocean-foods"},{"name":"oranges","value":"oranges"},{"name":"organic drinks","value":"organic-drinks"},{"name":"vegetables","value":"vegetables"}]'
        );

        /***/
      },

    /***/ "./src/data/footer-links.json":
      /*!************************************!*\
  !*** ./src/data/footer-links.json ***!
  \************************************/
      /*! exports provided: 0, 1, 2, default */
      /***/ function (module) {
        module.exports = JSON.parse(
          '[{"title":"INFOMATION","items":[{"title":"About us","href":"/other/about-us"},{"title":"Check out","href":"/shop/checkout"},{"title":"Contact","href":"/other/contact-us"},{"title":"Service","href":"#"}]},{"title":"MY ACCOUNT","items":[{"title":"My account","href":"#"},{"title":"Contact","href":"/other/contact-us"},{"title":"Shop Cart","href":"/shop/cart"},{"title":"Tracking Order","href":"#"}]},{"title":"QUICK SHOP","items":[{"title":"About us","href":"/other/about-us"},{"title":"Check out","href":"/shop/checkout"},{"title":"Contact","href":"/other/contact-us"},{"title":"Service","href":"#"}]}]'
        );

        /***/
      },

    /***/ "./src/data/navigator.json":
      /*!*********************************!*\
  !*** ./src/data/navigator.json ***!
  \*********************************/
      /*! exports provided: HOME, SHOP, BLOG, PAGES, ABOUT, default */
      /***/ function (module) {
        module.exports = JSON.parse(
          '{"HOME":{"title":"Home","href":"#","subMenu":[{"title":"Homepage 1","href":"/"},{"title":"Homepage 2","href":"/homepages/homepage2"},{"title":"Homepage 3","href":"/homepages/homepage3"},{"title":"Homepage 4","href":"/homepages/homepage4"},{"title":"Homepage 5","href":"/homepages/homepage5"}]},"SHOP":{"title":"Shop","href":"/shop/shop-grid-3-column","subMenu":{"layout":[{"title":"Shop Fullwidth","href":"/shop/shop-fullwidth"},{"title":"Shop 3 Column","href":"/shop/shop-3-column"}],"detail":[{"title":"Shop Detail Fullwidth","href":"/shop/product-detail-fullwidth"},{"title":"Shop Detail Sidebar","href":"/shop/product-detail-sidebar"}],"pages":[{"title":"Checkout","href":"/shop/checkout"},{"title":"Order Complete","href":"/shop/order-complete"},{"title":"Wishlist","href":"/shop/wishlist"},{"title":"Compare","href":"/shop/compare"},{"title":"Cart","href":"/shop/cart"}]}},"BLOG":{"title":"Blog","href":"/blog/blog-list-sidebar","subMenu":[{"title":"Blog List Sidebar","href":"/blog/blog-list-sidebar"},{"title":"Blog Grid 2 Column","href":"/blog/blog-grid-2-column"},{"title":"Blog Grid Sidebar","href":"/blog/blog-grid-sidebar"},{"title":"Blog Masonry","href":"/blog/blog-masonry"},{"title":"Blog Grid 1 Column Sidebar","href":"/blog/blog-grid-1-column-sidebar"},{"title":"Blog Detail Sidebar","href":"/blog/blog-detail"}]},"PAGES":{"title":"Pages","href":"#","subMenu":[{"title":"Login","href":"/auth/login"},{"title":"Register","href":"/auth/register"},{"title":"FAQ","href":"/other/faq"},{"title":"Coming Soon","href":"/other/coming-soon"},{"title":"Contact Us","href":"/other/contact-us"}]},"ABOUT":{"title":"About us","href":"/other/about-us"}}'
        );

        /***/
      },

    /***/ "./src/pages/shop/wishlist.js":
      /*!************************************!*\
  !*** ./src/pages/shop/wishlist.js ***!
  \************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react-redux */ "react-redux");
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_redux__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js"
          );
        /* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js"
          );
        /* harmony import */ var _common_wishlistServices__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../common/wishlistServices */ "./src/common/wishlistServices.js"
          );
        /* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../common/cartServices */ "./src/common/cartServices.js"
          );
        /* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../common/shopUtils */ "./src/common/shopUtils.js"
          );
        /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../common/utils */ "./src/common/utils.js"
          );
        /* harmony import */ var _components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../components/layout/LayoutOne */ "./src/components/layout/LayoutOne.js"
          );
        /* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../../components/other/Container */ "./src/components/other/Container.js"
          );
        /* harmony import */ var _components_other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../../components/other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js"
          );
        /* harmony import */ var _components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../../components/sections/partners/PartnerOne */ "./src/components/sections/partners/PartnerOne.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\pages\\shop\\wishlist.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function wishlist() {
          const dispatch = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]
          )();
          const { 0: addToCartLoading, 1: setAddToCartLoading } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )(false);
          const { 0: modalState, 1: setModalState } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )({
            visible: false,
            message: "Add some message",
            cartId: null,
          });
          const cartState = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]
          )((state) => state.cartReducer);
          const wishlistState = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]
          )((state) => state.wishlistReducer);

          const showModal = (message, productId) => {
            setModalState(
              _objectSpread(
                _objectSpread({}, modalState),
                {},
                {
                  visible: true,
                  message: message,
                  productId,
                }
              )
            );
          };

          const handleOk = (e) => {
            Object(
              _common_wishlistServices__WEBPACK_IMPORTED_MODULE_6__[
                "onRemoveProductFromWishlist"
              ]
            )({
              productId: modalState.productId,
              onSuccess: () => {
                setModalState(
                  _objectSpread(
                    _objectSpread({}, modalState),
                    {},
                    {
                      visible: false,
                    }
                  )
                );
                antd__WEBPACK_IMPORTED_MODULE_2__["message"].success(
                  "Product removed from wishlist"
                );
                dispatch(
                  Object(
                    _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_4__[
                      "fetchWishListRequest"
                    ]
                  )()
                );
              },
              onError: (mes) => {
                setModalState(
                  _objectSpread(
                    _objectSpread({}, modalState),
                    {},
                    {
                      visible: false,
                    }
                  )
                );
                antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
              },
            });
          };

          const handleCancel = (e) => {
            setModalState(
              _objectSpread(
                _objectSpread({}, modalState),
                {},
                {
                  visible: false,
                }
              )
            );
          };

          const onAddToCart = (product) => {
            setAddToCartLoading(true);
            Object(
              _common_cartServices__WEBPACK_IMPORTED_MODULE_7__[
                "onAddProductToCart"
              ]
            )({
              product,
              onSuccess: (data) => {
                setAddToCartLoading(false);
                antd__WEBPACK_IMPORTED_MODULE_2__["message"].success(
                  "Product added to cart"
                );
                dispatch(
                  Object(
                    _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__[
                      "fetchCartRequest"
                    ]
                  )()
                );
              },
              onError: (mes, err) => {
                setAddToCartLoading(false);
                antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
              },
            });
          };

          return __jsx(
            _components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_10__[
              "default"
            ],
            {
              title: "Wishlist",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 5,
              },
            },
            __jsx(
              _components_other_Container__WEBPACK_IMPORTED_MODULE_11__[
                "default"
              ],
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"],
                {
                  separator: ">",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item,
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 11,
                    },
                  },
                  __jsx("i", {
                    className: "fas fa-home",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 13,
                    },
                  }),
                  "Home"
                ),
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item,
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 11,
                    },
                  },
                  "Shop"
                ),
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item,
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 11,
                    },
                  },
                  "Wishlist"
                )
              ),
              __jsx(
                _components_other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_12__[
                  "default"
                ],
                {
                  data: wishlistState,
                  renderData: (data) =>
                    __jsx(
                      "div",
                      {
                        className: "wishlist",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 86,
                          columnNumber: 13,
                        },
                      },
                      __jsx(
                        "div",
                        {
                          className: "shop-table",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          "table",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 88,
                              columnNumber: 17,
                            },
                          },
                          __jsx(
                            "colgroup",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 89,
                                columnNumber: 19,
                              },
                            },
                            __jsx("col", {
                              style: {
                                width: 150 / 16 + "em",
                              },
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90,
                                columnNumber: 21,
                              },
                            }),
                            __jsx("col", {
                              style: {
                                width: "30%",
                              },
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 91,
                                columnNumber: 21,
                              },
                            }),
                            __jsx("col", {
                              style: {
                                width: "30%",
                              },
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 92,
                                columnNumber: 21,
                              },
                            }),
                            __jsx("col", {
                              style: {
                                width: "30%",
                              },
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 93,
                                columnNumber: 21,
                              },
                            }),
                            __jsx("col", {
                              style: {
                                width: "20%",
                              },
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 94,
                                columnNumber: 21,
                              },
                            })
                          ),
                          __jsx(
                            "thead",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96,
                                columnNumber: 19,
                              },
                            },
                            __jsx(
                              "tr",
                              {
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 97,
                                  columnNumber: 21,
                                },
                              },
                              __jsx(
                                "th",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 98,
                                    columnNumber: 23,
                                  },
                                },
                                "Image"
                              ),
                              __jsx(
                                "th",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 99,
                                    columnNumber: 23,
                                  },
                                },
                                "Product Name"
                              ),
                              __jsx(
                                "th",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 100,
                                    columnNumber: 23,
                                  },
                                },
                                "Price"
                              ),
                              __jsx(
                                "th",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 101,
                                    columnNumber: 23,
                                  },
                                },
                                "Add to cart"
                              ),
                              __jsx(
                                "th",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 102,
                                    columnNumber: 23,
                                  },
                                },
                                __jsx(
                                  antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                                  {
                                    title: "Clear cart",
                                    __self: this,
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 103,
                                      columnNumber: 25,
                                    },
                                  },
                                  __jsx(
                                    antd__WEBPACK_IMPORTED_MODULE_2__["Button"],
                                    {
                                      onClick: () =>
                                        showModal(
                                          "Are you sure to remove alll product from cart"
                                        ),
                                      icon: __jsx("i", {
                                        className: "fal fa-times",
                                        __self: this,
                                        __source: {
                                          fileName: _jsxFileName,
                                          lineNumber: 110,
                                          columnNumber: 35,
                                        },
                                      }),
                                      __self: this,
                                      __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 104,
                                        columnNumber: 27,
                                      },
                                    }
                                  )
                                )
                              )
                            )
                          ),
                          __jsx(
                            "tbody",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 116,
                                columnNumber: 19,
                              },
                            },
                            data.map((item, index) =>
                              __jsx(
                                "tr",
                                {
                                  key: index,
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 118,
                                    columnNumber: 23,
                                  },
                                },
                                __jsx(
                                  "td",
                                  {
                                    className: "table-img",
                                    __self: this,
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 119,
                                      columnNumber: 25,
                                    },
                                  },
                                  __jsx(
                                    "div",
                                    {
                                      className: "table-img-wrapper",
                                      __self: this,
                                      __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 120,
                                        columnNumber: 27,
                                      },
                                    },
                                    __jsx("img", {
                                      src: "" + item.coverImage,
                                      alt: "Product image",
                                      __self: this,
                                      __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 121,
                                        columnNumber: 29,
                                      },
                                    })
                                  )
                                ),
                                __jsx(
                                  "td",
                                  {
                                    className: "table-name",
                                    __self: this,
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 127,
                                      columnNumber: 25,
                                    },
                                  },
                                  item.name
                                ),
                                __jsx(
                                  "td",
                                  {
                                    className: "table-price",
                                    __self: this,
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 128,
                                      columnNumber: 25,
                                    },
                                  },
                                  Object(
                                    _common_utils__WEBPACK_IMPORTED_MODULE_9__[
                                      "formatCurrency"
                                    ]
                                  )(item.price)
                                ),
                                __jsx(
                                  "td",
                                  {
                                    className: "table-atc",
                                    __self: this,
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 131,
                                      columnNumber: 25,
                                    },
                                  },
                                  __jsx(
                                    antd__WEBPACK_IMPORTED_MODULE_2__["Button"],
                                    {
                                      disabled: Object(
                                        _common_shopUtils__WEBPACK_IMPORTED_MODULE_8__[
                                          "checkProductInCart"
                                        ]
                                      )(cartState.data, item.id),
                                      loading: addToCartLoading,
                                      onClick: () => onAddToCart(item),
                                      type: "primary",
                                      shape: "round",
                                      __self: this,
                                      __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 132,
                                        columnNumber: 27,
                                      },
                                    },
                                    "Add to cart"
                                  )
                                ),
                                __jsx(
                                  "td",
                                  {
                                    className: "table-remove",
                                    __self: this,
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 145,
                                      columnNumber: 25,
                                    },
                                  },
                                  __jsx(
                                    antd__WEBPACK_IMPORTED_MODULE_2__[
                                      "Tooltip"
                                    ],
                                    {
                                      title: "Remove product",
                                      __self: this,
                                      __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 146,
                                        columnNumber: 27,
                                      },
                                    },
                                    __jsx(
                                      antd__WEBPACK_IMPORTED_MODULE_2__[
                                        "Button"
                                      ],
                                      {
                                        onClick: () =>
                                          showModal(
                                            "Are you sure to remove this product from cart",
                                            item.id
                                          ),
                                        icon: __jsx("i", {
                                          className: "fal fa-times",
                                          __self: this,
                                          __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 154,
                                            columnNumber: 37,
                                          },
                                        }),
                                        __self: this,
                                        __source: {
                                          fileName: _jsxFileName,
                                          lineNumber: 147,
                                          columnNumber: 29,
                                        },
                                      }
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      __jsx(
                        antd__WEBPACK_IMPORTED_MODULE_2__["Button"],
                        {
                          className: "wishlist-btn",
                          type: "primary",
                          shape: "round",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 163,
                            columnNumber: 15,
                          },
                        },
                        __jsx(
                          next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                          {
                            href: "" + "/shop/shop-3-column",
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 164,
                              columnNumber: 17,
                            },
                          },
                          __jsx(
                            "a",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 165,
                                columnNumber: 19,
                              },
                            },
                            "Continue shopping"
                          )
                        )
                      )
                    ),
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 9,
                  },
                }
              ),
              __jsx(
                _components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_13__[
                  "default"
                ],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 9,
                  },
                }
              )
            ),
            __jsx(
              antd__WEBPACK_IMPORTED_MODULE_2__["Modal"],
              {
                visible: modalState.visible,
                onOk: handleOk,
                onCancel: handleCancel,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 7,
                },
              },
              __jsx(
                "p",
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 9,
                  },
                },
                modalState.message
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            wishlist
          );

        /***/
      },

    /***/ "./src/redux/actionTypes.js":
      /*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
      /*! exports provided: SHOP, BLOG, SHOP_FILTER, CART, WISHLIST, COMPARE, BLOG_FILTER */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SHOP",
          function () {
            return SHOP;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "BLOG",
          function () {
            return BLOG;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SHOP_FILTER",
          function () {
            return SHOP_FILTER;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CART",
          function () {
            return CART;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "WISHLIST",
          function () {
            return WISHLIST;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "COMPARE",
          function () {
            return COMPARE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "BLOG_FILTER",
          function () {
            return BLOG_FILTER;
          }
        );
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
          FETCH_BEST_SELLER_PRODUCTS_SUCCESS:
            "FETCH_BEST_SELLER_PRODUCTS_SUCCESS",
          FETCH_BEST_SELLER_PRODUCTS_FAIL: "FETCH_BEST_SELLER_PRODUCTS_FAIL",
          FETCH_DALE_PRODUCTS: "FETCH_DALE_PRODUCTS",
          FETCH_DALE_PRODUCTS_SUCCESS: "FETCH_DALE_PRODUCTS_SUCCESS",
          FETCH_DALE_PRODUCTS_FAIL: "FETCH_DALE_PRODUCTS_FAIL",
          FETCH_PRODUCT_DETAIL: "FETCH_PRODUCT_DETAIL",
          FETCH_PRODUCT_DETAIL_SUCCESS: "FETCH_PRODUCT_DETAIL_SUCCESS",
          FETCH_PRODUCT_DETAIL_FAIL: "FETCH_PRODUCT_DETAIL_FAIL",
          FETCH_SEARCHED_PRODUCTS: "FETCH_SEARCHED_PRODUCTS",
          FETCH_SEARCHED_PRODUCTS_SUCCESS: "FETCH_SEARCHED_PRODUCTS_SUCCESS",
          FETCH_SEARCHED_PRODUCTS_FAIL: "FETCH_SEARCHED_PRODUCTS_FAIL",
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
          FETCH_RECENT_POSTS_FAIL: "FETCH_RECENT_POSTS_FAIL",
        };
        const SHOP_FILTER = {
          RESET_FILTERS: "RESET_FILTERS",
          SET_SORT: "SET_SORT",
          SET_SHOW: "SET_SHOW",
          SET_VIEW: "SET_VIEW",
          SET_CATEGORY: "SET_CATEGORY",
          SET_COLOR: "SET_COLOR",
          SET_SIZE: "SET_SIZE",
          SET_TAG: "SET_TAG",
        };
        const CART = {
          FETCH_CART: "FETCH_CART",
          FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
          FETCH_CART_FAIL: "FETCH_CART_FAIL",
        };
        const WISHLIST = {
          FETCH_WISHLIST: "FETCH_WISHLIST",
          FETCH_WISHLIST_SUCCESS: "FETCH_WISHLIST_SUCCESS",
          FETCH_WISHLIST_FAIL: "FETCH_WISHLIST_FAIL",
        };
        const COMPARE = {
          ADD_TO_COMPARE: "ADD_TO_COMPARE",
          REMOVE_FROM_COMPARE: "REMOVE_FROM_COMPARE",
        };
        const BLOG_FILTER = {
          RESET_FILTERS: "RESET_FILTERS",
          SET_CATEGORY: "SET_CATEGORY",
          SET_TAG: "SET_TAG",
        };

        /***/
      },

    /***/ "./src/redux/actions/cartActions.js":
      /*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
      /*! exports provided: fetchCart, fetchCartSuccess, fetchCartFail, fetchCartRequest */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCart",
          function () {
            return fetchCart;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCartSuccess",
          function () {
            return fetchCartSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCartFail",
          function () {
            return fetchCartFail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCartRequest",
          function () {
            return fetchCartRequest;
          }
        );
        /* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actionTypes */ "./src/redux/actionTypes.js"
          );
        /* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../../apis/cart */ "./src/apis/cart.js");

        //Get cart data

        const fetchCart = () => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART,
        });
        const fetchCartSuccess = (data) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"]
            .FETCH_CART_SUCCESS,
          payload: {
            data,
          },
        });
        const fetchCartFail = (err) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"]
            .FETCH_CART_FAIL,
          payload: {
            err,
          },
        });
        const fetchCartRequest = () => {
          return (dispatch) => {
            dispatch(fetchCart());
            _apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchCartData"]()
              .then((res) => {
                dispatch(fetchCartSuccess(res.data));
              })
              .catch((err) => {
                dispatch(fetchCartFail(err));
              });
          };
        };

        /***/
      },

    /***/ "./src/redux/actions/shopActions.js":
      /*!******************************************!*\
  !*** ./src/redux/actions/shopActions.js ***!
  \******************************************/
      /*! exports provided: fetchProducts, fetchProductsSuccess, fetchProductsFail, fetchProductsRequest, fetchSaleProducts, fetchSaleProductsSuccess, fetchSaleProductsFail, fetchSaleProductsRequest, fetchFeaturedProducts, fetchFeaturedProductsSuccess, fetchFeaturedProductsFail, fetchFeaturedProductsRequest, fetchBestSellerProducts, fetchBestSellerProductsSuccess, fetchBestSellerProductsFail, fetchBestSellerProductsRequest, fetchDaleProducts, fetchDaleProductsSuccess, fetchDaleProductsFail, fetchDaleProductsRequest, fetchProductDetail, fetchProductDetailSuccess, fetchProductDetailFail, fetchProductDetailRequest, fetchSearchedProduct, fetchSearchedProductSuccess, fetchSearchedProductFail, fetchSearchedProductRequest */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProducts",
          function () {
            return fetchProducts;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProductsSuccess",
          function () {
            return fetchProductsSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProductsFail",
          function () {
            return fetchProductsFail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProductsRequest",
          function () {
            return fetchProductsRequest;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSaleProducts",
          function () {
            return fetchSaleProducts;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSaleProductsSuccess",
          function () {
            return fetchSaleProductsSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSaleProductsFail",
          function () {
            return fetchSaleProductsFail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSaleProductsRequest",
          function () {
            return fetchSaleProductsRequest;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchFeaturedProducts",
          function () {
            return fetchFeaturedProducts;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchFeaturedProductsSuccess",
          function () {
            return fetchFeaturedProductsSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchFeaturedProductsFail",
          function () {
            return fetchFeaturedProductsFail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchFeaturedProductsRequest",
          function () {
            return fetchFeaturedProductsRequest;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchBestSellerProducts",
          function () {
            return fetchBestSellerProducts;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchBestSellerProductsSuccess",
          function () {
            return fetchBestSellerProductsSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchBestSellerProductsFail",
          function () {
            return fetchBestSellerProductsFail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchBestSellerProductsRequest",
          function () {
            return fetchBestSellerProductsRequest;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDaleProducts",
          function () {
            return fetchDaleProducts;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDaleProductsSuccess",
          function () {
            return fetchDaleProductsSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDaleProductsFail",
          function () {
            return fetchDaleProductsFail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDaleProductsRequest",
          function () {
            return fetchDaleProductsRequest;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProductDetail",
          function () {
            return fetchProductDetail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProductDetailSuccess",
          function () {
            return fetchProductDetailSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProductDetailFail",
          function () {
            return fetchProductDetailFail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchProductDetailRequest",
          function () {
            return fetchProductDetailRequest;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSearchedProduct",
          function () {
            return fetchSearchedProduct;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSearchedProductSuccess",
          function () {
            return fetchSearchedProductSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSearchedProductFail",
          function () {
            return fetchSearchedProductFail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSearchedProductRequest",
          function () {
            return fetchSearchedProductRequest;
          }
        );
        /* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actionTypes */ "./src/redux/actionTypes.js"
          );
        /* harmony import */ var _apis_shop__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../../apis/shop */ "./src/apis/shop.js");

        //Get all products

        const fetchProducts = () => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_PRODUCTS,
        });
        const fetchProductsSuccess = (data, productCount) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_PRODUCTS_SUCCESS,
          payload: {
            data,
            productCount,
          },
        });
        const fetchProductsFail = (err) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_PRODUCTS_FAIL,
          payload: {
            err,
          },
        });
        const fetchProductsRequest = (query) => {
          return (dispatch) => {
            dispatch(fetchProducts());
            _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductsData"](query)
              .then((res) => {
                dispatch(
                  fetchProductsSuccess(res.data, res.headers["x-total-count"])
                );
              })
              .catch((err) => {
                dispatch(fetchProductsFail(err));
              });
          };
        }; //Get sale products

        const fetchSaleProducts = () => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_SALE_PRODUCTS,
        });
        const fetchSaleProductsSuccess = (data) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_SALE_PRODUCTS_SUCCESS,
          payload: {
            data,
          },
        });
        const fetchSaleProductsFail = (err) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_SALE_PRODUCTS_FAIL,
          payload: {
            err,
          },
        });
        const fetchSaleProductsRequest = (query) => {
          return (dispatch) => {
            dispatch(fetchSaleProducts());
            _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSaleProductsData"](
              query
            )
              .then((res) => {
                dispatch(fetchSaleProductsSuccess(res.data));
              })
              .catch((err) => {
                dispatch(fetchSaleProductsFail(err));
              });
          };
        }; //Get featured products

        const fetchFeaturedProducts = () => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_FEATURED_PRODUCTS,
        });
        const fetchFeaturedProductsSuccess = (data) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_FEATURED_PRODUCTS_SUCCESS,
          payload: {
            data,
          },
        });
        const fetchFeaturedProductsFail = (err) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_FEATURED_PRODUCTS_FAIL,
          payload: {
            err,
          },
        });
        const fetchFeaturedProductsRequest = (query) => {
          return (dispatch) => {
            dispatch(fetchFeaturedProducts());
            _apis_shop__WEBPACK_IMPORTED_MODULE_1__[
              "fetchFeaturedProductsData"
            ](query)
              .then((res) => {
                dispatch(fetchFeaturedProductsSuccess(res.data));
              })
              .catch((err) => {
                dispatch(fetchFeaturedProductsFail(err));
              });
          };
        }; //Get best seller products

        const fetchBestSellerProducts = () => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_BEST_SELLER_PRODUCTS,
        });
        const fetchBestSellerProductsSuccess = (data) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_BEST_SELLER_PRODUCTS_SUCCESS,
          payload: {
            data,
          },
        });
        const fetchBestSellerProductsFail = (err) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_BEST_SELLER_PRODUCTS_FAIL,
          payload: {
            err,
          },
        });
        const fetchBestSellerProductsRequest = (query) => {
          return (dispatch) => {
            dispatch(fetchBestSellerProducts());
            _apis_shop__WEBPACK_IMPORTED_MODULE_1__[
              "fetchBestSellerProductsData"
            ](query)
              .then((res) => {
                dispatch(fetchBestSellerProductsSuccess(res.data));
              })
              .catch((err) => {
                dispatch(fetchBestSellerProductsFail(err));
              });
          };
        }; //Get best seller products

        const fetchDaleProducts = () => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_DALE_PRODUCTS,
        });
        const fetchDaleProductsSuccess = (data) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_DALE_PRODUCTS_SUCCESS,
          payload: {
            data,
          },
        });
        const fetchDaleProductsFail = (err) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_DALE_PRODUCTS_FAIL,
          payload: {
            err,
          },
        });
        const fetchDaleProductsRequest = (query) => {
          return (dispatch) => {
            dispatch(fetchDaleProducts());
            _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchDaleProductsData"](
              query
            )
              .then((res) => {
                dispatch(fetchDaleProductsSuccess(res.data));
              })
              .catch((err) => {
                dispatch(fetchDaleProductsFail(err));
              });
          };
        }; //Get product detail

        const fetchProductDetail = () => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_PRODUCT_DETAIL,
        });
        const fetchProductDetailSuccess = (data) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_PRODUCT_DETAIL_SUCCESS,
          payload: {
            data,
          },
        });
        const fetchProductDetailFail = (err) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_PRODUCT_DETAIL_FAIL,
          payload: {
            err,
          },
        });
        const fetchProductDetailRequest = (slug) => {
          return (dispatch) => {
            dispatch(fetchProductDetail());
            _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductDetailData"](
              slug
            )
              .then((res) => {
                dispatch(fetchProductDetailSuccess(res.data));
              })
              .catch((err) => {
                dispatch(fetchProductDetailFail(err));
              });
          };
        }; //Get searched product

        const fetchSearchedProduct = () => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_SEARCHED_PRODUCTS,
        });
        const fetchSearchedProductSuccess = (data) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_SEARCHED_PRODUCTS_SUCCESS,
          payload: {
            data,
          },
        });
        const fetchSearchedProductFail = (err) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"]
            .FETCH_SEARCHED_PRODUCTS_FAIL,
          payload: {
            err,
          },
        });
        const fetchSearchedProductRequest = (query) => {
          return (dispatch) => {
            dispatch(fetchSearchedProduct());
            _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSearchedProductData"](
              query
            )
              .then((res) => {
                dispatch(fetchSearchedProductSuccess(res.data));
              })
              .catch((err) => {
                dispatch(fetchSearchedProductFail(err));
              });
          };
        };

        /***/
      },

    /***/ "./src/redux/actions/wishlistActions.js":
      /*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
      /*! exports provided: fetchWishListRequest */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchWishListRequest",
          function () {
            return fetchWishListRequest;
          }
        );
        /* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actionTypes */ "./src/redux/actionTypes.js"
          );
        /* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../apis/wishlist */ "./src/apis/wishlist.js"
          );

        //Get cart data

        const fetchWishList = () => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"]
            .FETCH_WISHLIST,
        });

        const fetchWishListSuccess = (data) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"]
            .FETCH_WISHLIST_SUCCESS,
          payload: {
            data,
          },
        });

        const fetchWishListFail = (err) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"]
            .FETCH_WISHLIST_FAIL,
          payload: {
            err,
          },
        });

        const fetchWishListRequest = () => {
          return (dispatch) => {
            dispatch(fetchWishList());
            _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__["fetchWishlistData"]()
              .then((res) => {
                dispatch(fetchWishListSuccess(res.data));
              })
              .catch((err) => {
                dispatch(fetchWishListFail(err));
              });
          };
        };

        /***/
      },

    /***/ "@ant-design/icons":
      /*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("@ant-design/icons");

        /***/
      },

    /***/ antd:
      /*!***********************!*\
  !*** external "antd" ***!
  \***********************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("antd");

        /***/
      },

    /***/ axios:
      /*!************************!*\
  !*** external "axios" ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("axios");

        /***/
      },

    /***/ classnames:
      /*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("classnames");

        /***/
      },

    /***/ moment:
      /*!*************************!*\
  !*** external "moment" ***!
  \*************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("moment");

        /***/
      },

    /***/ "next/head":
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("next/head");

        /***/
      },

    /***/ "next/router":
      /*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("next/router");

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("react");

        /***/
      },

    /***/ "react-is":
      /*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("react-is");

        /***/
      },

    /***/ "react-mailchimp-subscribe":
      /*!********************************************!*\
  !*** external "react-mailchimp-subscribe" ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("react-mailchimp-subscribe");

        /***/
      },

    /***/ "react-redux":
      /*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("react-redux");

        /***/
      },

    /***/ "react-slick":
      /*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("react-slick");

        /***/
      },

    /***/ uuid:
      /*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("uuid");

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvd2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9heGlvc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jYXJ0U2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kZWZpbmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc2hvcFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXNlRGVib3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2lzaGxpc3RTZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpdGhIZWFkZXJTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZWxlbWVudHMvRm9vdGVySW5mb21hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZWxlbWVudHMvRm9vdGVyUXVpY2tMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZWxlbWVudHMvRm9vdGVyU3ViY3JpYmVJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyT25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9DYXRlZ29yeUNvbGFwcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9GdW5jdGlvbkl0ZW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9Nb2JpbGVNZW51T3BlbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9Nb2JpbGVOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL05hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvU2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZnVuY3Rpb24tbWVudS9GdW5jdGlvbk1lbnVPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21lbnUvTWVudU9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvdG9wLW5hdi9Ub3BOYXZPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dE9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvRmV0Y2hEYXRhSGFuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL1NvY2lhbEljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL3BhcnRuZXJzL1BhcnRuZXJPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Nob3Avd2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJ2YWx1ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiZmV0Y2hDYXJ0RGF0YSIsImNhcnRJZCIsImVuZHBvaW50IiwiQVBJX1VSTCIsImF4aW9zU2VydmljZSIsImZldGNoUHJvZHVjdElkQ2FydERhdGEiLCJwaWQiLCJyZW5kZXJQYXJhbSIsImFkZENhcnREYXRhIiwicG9zdCIsInJlbW92ZUNhcnREYXRhIiwiZGVsZXRlIiwidXBkYXRlQ2FydERhdGEiLCJwYXRjaCIsInJlbmRlclVybCIsImxpbWl0IiwiY2F0ZWdvcnkiLCJmZXRjaFByb2R1Y3RzRGF0YSIsInNvcnQiLCJvcmRlciIsInEiLCJjb2xvciIsInNpemUiLCJ0YWciLCJmZXRjaFNhbGVQcm9kdWN0c0RhdGEiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhIiwiZmV0Y2hEYWxlUHJvZHVjdHNEYXRhIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSIsInNsdWciLCJmZXRjaFNlYXJjaGVkUHJvZHVjdERhdGEiLCJpbnB1dCIsImZldGNoV2lzaGxpc3REYXRhIiwiZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEiLCJhZGRXaXNobGlzdERhdGEiLCJyZW1vdmVXaXNobGlzdERhdGEiLCJBeGlvc1NlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwicmVqZWN0IiwiYm9keSIsIm9uQWRkUHJvZHVjdFRvQ2FydCIsInByb2R1Y3QiLCJxdWFudGl0eSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJnZXRRdWFudGl0eUF2YWlsYWJsZSIsImlkIiwidGhlbiIsImxlbmd0aCIsInV1aWR2NCIsInByb2R1Y3RJZCIsImNhcnRRdWFudGl0eSIsImNhdGNoIiwicERhdGEiLCJvblJlbW92ZVByb2R1Y3RGcm9tQ2FydCIsIm9uQ2hhbmdlUHJvZHVjdENhcnRRdWFudGl0eSIsImxvZyIsImdldFByb2R1Y3RzQnlTbHVnIiwiYXJyIiwiZmluZCIsInRvTG93ZXJDYXNlIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsInRvdGFsIiwiZm9yRWFjaCIsImRpc2NvdW50IiwicHJpY2UiLCJjaGVja1Byb2R1Y3RJbkNhcnQiLCJjYXJ0QXJyIiwidW5kZWZpbmVkIiwiY2hlY2tQcm9kdWN0Q2FydFF1YW50aXR5IiwicHJvZHVjdHNJbkNhcnQiLCJmaWx0ZXIiLCJ0b3RhbFByb2R1Y3RRdWFudGl0eUluQ2FydCIsInJlZHVjZSIsImNoZWNrUHJvZHVjdEluV2lzaGxpc3QiLCJ3aXNobGlzdEFyciIsInVzZURlYm91bmNlIiwiZGVsYXkiLCJkZWJvdW5jZWRWYWx1ZSIsInNldERlYm91bmNlZFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZm9ybWF0Q3VycmVuY3kiLCJsb2NhbGVzIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJmb3JtYXQiLCJwYXJhbU5hbWUiLCJwYXJhbVZhbHVlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJpbnB1dEZvcm1hdCIsIm91dHB1dEZvcm1hdCIsIm1vbWVudCIsInJlbW92ZURhc2giLCJvbkFkZFByb2R1Y3RUb1dpc2hsaXN0Iiwib25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0Iiwid2l0aEhlYWRlclNjcm9sbCIsIldyYXBwZWRDb21wb25lbnQiLCJoZWFkZXJSZWYiLCJ1c2VSZWYiLCJzZXRTY3JvbGwiLCJpc0hlYWRlckZpeGVkIiwic2V0SXNIZWFkZXJGaXhlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsIm9mZnNldEhlaWdodCIsInNjcm9sbFkiLCJjbGFzc05hbWVzIiwiZml4ZWQiLCJjbGFzc05hbWUiLCJGb290ZXIiLCJjb250YWluZXJGbHVpZCIsInNwYW4iLCJtZW1vIiwiRm9vdGVySW5mb21hdGlvbiIsIkZvb3RlclF1aWNrTGlua3MiLCJjb2xTaXplIiwiZm9vdGVyTGlua3MiLCJtYXAiLCJpbmRleCIsInRpdGxlIiwiaXRlbXMiLCJsaW5rIiwiQ3VzdG9tRm9ybSIsInN0YXR1cyIsIm9uVmFsaWRhdGVkIiwib25GaW5pc2giLCJFTUFJTCIsImVtYWlsIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJ0eXBlIiwicmVxdWlyZWQiLCJfX2h0bWwiLCJGb290ZXJTdWJjcmliZUlucHV0Iiwic3Vic2NyaWJlIiwiZm9ybURhdGEiLCJIZWFkZXJPbmUiLCJhY3RpdmVIZWFkZXJDb2xsYXBzZSIsImNhdGVnb3JpZXMiLCJDYXRlZ29yeUNvbGFwcHNlIiwiYWN0aXZlIiwiUGFuZWwiLCJDb2xsYXBzZSIsImlzQWN0aXZlIiwiRnVuY3Rpb25JdGVtcyIsImhpZGVUb3RhbCIsImhpZGVXaXNobGlzdCIsImNhcnRTdGF0ZSIsInVzZVNlbGVjdG9yIiwiY2FydFJlZHVjZXIiLCJNb2JpbGVNZW51T3BlbmVyIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJvblNob3dEcmF3ZXIiLCJvbkNsb3NlRHJhd2VyIiwiTW9iaWxlTmF2aWdhdG9yIiwiU3ViTWVudSIsIk1lbnUiLCJzZXRDdXJyZW50IiwiaGFuZGxlQ2xpY2siLCJzZXRTdGF0ZSIsIm5hdmlnYXRvckRhdGEiLCJIT01FIiwic3ViTWVudSIsIlNIT1AiLCJsYXlvdXQiLCJkZXRhaWwiLCJQQUdFUyIsIkFCT1VUIiwiTmF2aWdhdG9yIiwiQkxPRyIsIlNlYXJjaEZvcm0iLCJlbnRlckJ1dHRvbiIsImhpZGVTZWxlY3QiLCJPcHRpb24iLCJTZWxlY3QiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY3VycmVudFNlYXJjaCIsInNldEN1cnJlbnRTZWFyY2giLCJjdXJyZW50Q2F0ZWdvcnkiLCJzZXRDdXJyZW50Q2F0ZWdvcnkiLCJkZWJvdW5kVmFsdWUiLCJzaG9wU3RhdGUiLCJzaG9wUmVkdWNlciIsInNlYXJjaGVkUHJvZHVjdHMiLCJvbkNoYW5nZSIsInZhbCIsIm9uU2VsZWN0T3B0aW9uIiwib3B0aW9uIiwib25TZWFyY2giLCJvbkNob29zZUNhdGVvZ3J5IiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0IiwiaW5wdXRWYWx1ZSIsInRvVXBwZXJDYXNlIiwiaW5kZXhPZiIsImxvYWRpbmciLCJGdW5jdGlvbk1lbnVPbmUiLCJNZW51T25lIiwiZmxhZ0RhdGEiLCJpbWFnZSIsIlRvcE5hdk9uZSIsImhlaWdodCIsIndpZHRoIiwib2JqZWN0Rml0IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJTY3JvbGxlZEhlYWRlciIsIkxheW91dE9uZSIsImhlYWRlckNsYXNzIiwiZm9vdGVyQ2xhc3MiLCJDb250YWluZXIiLCJmbHVpZCIsIkZldGNoRGF0YUhhbmRsZSIsImVycm9yTWVzc2FnZSIsImVtcHR5RGVzY3JpcHRpb24iLCJyZW5kZXJEYXRhIiwiRW1wdHkiLCJQUkVTRU5URURfSU1BR0VfU0lNUExFIiwiU29jaWFsSWNvbnMiLCJzaGFwZSIsIlBhcnRuZXJPbmUiLCJzZXR0aW5ncyIsImFycm93cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiZnJvbSIsIndpc2hsaXN0IiwiYWRkVG9DYXJ0TG9hZGluZyIsInNldEFkZFRvQ2FydExvYWRpbmciLCJtb2RhbFN0YXRlIiwic2V0TW9kYWxTdGF0ZSIsIndpc2hsaXN0U3RhdGUiLCJ3aXNobGlzdFJlZHVjZXIiLCJzaG93TW9kYWwiLCJoYW5kbGVPayIsImZldGNoV2lzaExpc3RSZXF1ZXN0IiwibWVzIiwiaGFuZGxlQ2FuY2VsIiwib25BZGRUb0NhcnQiLCJmZXRjaENhcnRSZXF1ZXN0IiwiY292ZXJJbWFnZSIsIkZFVENIX1BST0RVQ1RTIiwiRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9TQUxFX1BST0RVQ1RTIiwiRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFMiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9EQUxFX1BST0RVQ1RTIiwiRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUwiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTCIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9QT1NUUyIsIkZFVENIX1BPU1RTX1NVQ0NFU1MiLCJGRVRDSF9QT1NUU19GQUlMIiwiRkVUQ0hfUE9TVF9ERVRBSUwiLCJGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTIiwiRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTCIsIkZFVENIX1JFQ0VOVF9QT1NUUyIsIkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTIiwiRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUwiLCJTSE9QX0ZJTFRFUiIsIlJFU0VUX0ZJTFRFUlMiLCJTRVRfU09SVCIsIlNFVF9TSE9XIiwiU0VUX1ZJRVciLCJTRVRfQ0FURUdPUlkiLCJTRVRfQ09MT1IiLCJTRVRfU0laRSIsIlNFVF9UQUciLCJDQVJUIiwiRkVUQ0hfQ0FSVCIsIkZFVENIX0NBUlRfU1VDQ0VTUyIsIkZFVENIX0NBUlRfRkFJTCIsIldJU0hMSVNUIiwiRkVUQ0hfV0lTSExJU1QiLCJGRVRDSF9XSVNITElTVF9TVUNDRVNTIiwiRkVUQ0hfV0lTSExJU1RfRkFJTCIsIkNPTVBBUkUiLCJBRERfVE9fQ09NUEFSRSIsIlJFTU9WRV9GUk9NX0NPTVBBUkUiLCJCTE9HX0ZJTFRFUiIsImZldGNoQ2FydCIsImZldGNoQ2FydFN1Y2Nlc3MiLCJwYXlsb2FkIiwiZmV0Y2hDYXJ0RmFpbCIsImNhcnRBcGlzIiwiZmV0Y2hQcm9kdWN0cyIsImZldGNoUHJvZHVjdHNTdWNjZXNzIiwicHJvZHVjdENvdW50IiwiZmV0Y2hQcm9kdWN0c0ZhaWwiLCJmZXRjaFByb2R1Y3RzUmVxdWVzdCIsInNob3BBcGlzIiwiaGVhZGVycyIsImZldGNoU2FsZVByb2R1Y3RzIiwiZmV0Y2hTYWxlUHJvZHVjdHNTdWNjZXNzIiwiZmV0Y2hTYWxlUHJvZHVjdHNGYWlsIiwiZmV0Y2hTYWxlUHJvZHVjdHNSZXF1ZXN0IiwiZmV0Y2hGZWF0dXJlZFByb2R1Y3RzIiwiZmV0Y2hGZWF0dXJlZFByb2R1Y3RzU3VjY2VzcyIsImZldGNoRmVhdHVyZWRQcm9kdWN0c0ZhaWwiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0IiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHMiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0ZhaWwiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaERhbGVQcm9kdWN0cyIsImZldGNoRGFsZVByb2R1Y3RzU3VjY2VzcyIsImZldGNoRGFsZVByb2R1Y3RzRmFpbCIsImZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCIsImZldGNoUHJvZHVjdERldGFpbCIsImZldGNoUHJvZHVjdERldGFpbFN1Y2Nlc3MiLCJmZXRjaFByb2R1Y3REZXRhaWxGYWlsIiwiZmV0Y2hQcm9kdWN0RGV0YWlsUmVxdWVzdCIsImZldGNoU2VhcmNoZWRQcm9kdWN0IiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3RTdWNjZXNzIiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3RGYWlsIiwiZmV0Y2hXaXNoTGlzdCIsImZldGNoV2lzaExpc3RTdWNjZXNzIiwiZmV0Y2hXaXNoTGlzdEZhaWwiLCJ3aXNobGlzdEFw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QUM0SixhQUFhLEVBQWQsQ0FBUjtBQUNBRyxvRUFBQSxHQUVHelMsSUFGSCxDQUVTcE8sR0FBRCxJQUFTO0FBQ2I4VyxjQUFRLENBQUM2SixvQkFBb0IsQ0FBQzNnQixHQUFHLENBQUM4RSxJQUFMLENBQXJCLENBQVI7QUFDRCxLQUpILEVBS0cySixLQUxILENBS1VuVSxHQUFELElBQVM7QUFDZHdjLGNBQVEsQ0FBQzhKLGlCQUFpQixDQUFDdG1CLEdBQUQsQ0FBbEIsQ0FBUjtBQUNELEtBUEg7QUFRRCxHQVZEO0FBV0QsQ0FaTSxDOzs7Ozs7Ozs7OztBQ3ZCUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9zaG9wL3dpc2hsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvc2hvcC93aXNobGlzdC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XG5cbmNvbnN0IHVybCA9IFwiL2NhcnRcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydERhdGEgPSAoY2FydElkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IGNhcnRJZCA/IEFQSV9VUkwgKyB1cmwgKyBgLyR7Y2FydElkfWAgOiBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YSA9IChwaWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJwcm9kdWN0SWRcIiwgcGlkKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZENhcnREYXRhID0gKGRhdGEpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDYXJ0RGF0YSA9IChjYXJ0SWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5kZWxldGUoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhcnREYXRhID0gKGNhcnRJZCwgZGF0YSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke2NhcnRJZH1gO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBhdGNoKGVuZHBvaW50LCBkYXRhKTtcbn07XG4iLCJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcblxuY29uc3QgdXJsID0gXCIvcHJvZHVjdFwiO1xuXG5jb25zdCByZW5kZXJVcmwgPSAodXJsLCBsaW1pdCwgY2F0ZWdvcnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwiX2xpbWl0XCIsIGxpbWl0KSArIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgY2F0ZWdvcnkpXG4gICk7XG59O1xuXG4vL0ZldGNoIGxpc3Qgb2YgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPVxuICAgIHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpICtcbiAgICByZW5kZXJQYXJhbShcIl9wYWdlXCIsIHF1ZXJ5LnBhZ2UpICtcbiAgICByZW5kZXJQYXJhbShcIl9zb3J0XCIsIHF1ZXJ5LnNvcnQuc29ydCkgK1xuICAgIHJlbmRlclBhcmFtKFwiX29yZGVyXCIsIHF1ZXJ5LnNvcnQub3JkZXIpICtcbiAgICByZW5kZXJQYXJhbShcInFcIiwgcXVlcnkucSkgK1xuICAgIHJlbmRlclBhcmFtKFwic3BlY2lmaWNhdGlvbnMuY29sb3JcIiwgcXVlcnkuY29sb3IpICtcbiAgICByZW5kZXJQYXJhbShcInNwZWNpZmljYXRpb25zLnNpemVcIiwgcXVlcnkuc2l6ZSkgK1xuICAgIHJlbmRlclBhcmFtKFwidGFnX2xpa2VcIiwgcXVlcnkudGFnKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbi8vRmV0Y2ggcHJvZHVjdCBkZXRhaWxcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxEYXRhID0gKHNsdWcpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJzbHVnXCIsIHNsdWcpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG4vL0ZldGNoIHNlcmNoZWQgcHJvZHVjdCBieSBxdWVyeVxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPVxuICAgIEFQSV9VUkwgK1xuICAgIHVybCArXG4gICAgXCI/XCIgK1xuICAgIHJlbmRlclBhcmFtKFwicVwiLCBxdWVyeS5pbnB1dCkgK1xuICAgIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgcXVlcnkuY2F0ZWdvcnkpICtcbiAgICByZW5kZXJQYXJhbShcIl9saW1pdFwiLCBxdWVyeS5saW1pdCk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG4iLCJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcblxuY29uc3QgdXJsID0gXCIvd2lzaGxpc3RcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoV2lzaGxpc3REYXRhID0gKCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEgPSAocGlkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwiaWRcIiwgcGlkKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFdpc2hsaXN0RGF0YSA9IChkYXRhKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlV2lzaGxpc3REYXRhID0gKHBpZCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke3BpZH1gO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmRlbGV0ZShlbmRwb2ludCk7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jbGFzcyBBeGlvc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSgpO1xuICAgIGluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVTdWNjZXNzLCB0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIH1cblxuICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG5cbiAgZ2V0KHVybCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldCh1cmwpO1xuICB9XG5cbiAgcG9zdCh1cmwsIGJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wb3N0KHVybCwgYm9keSk7XG4gIH1cblxuICBwYXRjaCh1cmwsIGJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wYXRjaCh1cmwsIGJvZHkpO1xuICB9XG5cbiAgZGVsZXRlKHVybCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmRlbGV0ZSh1cmwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBeGlvc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQge1xuICBmZXRjaFByb2R1Y3RJZENhcnREYXRhLFxuICBhZGRDYXJ0RGF0YSxcbiAgdXBkYXRlQ2FydERhdGEsXG4gIHJlbW92ZUNhcnREYXRhLFxufSBmcm9tIFwiLi4vYXBpcy9jYXJ0XCI7XG5cbmV4cG9ydCBjb25zdCBvbkFkZFByb2R1Y3RUb0NhcnQgPSAoe1xuICBwcm9kdWN0LFxuICBxdWFudGl0eSA9IDEsXG4gIG9uU3VjY2VzcyxcbiAgb25FcnJvcixcbiAgZ2V0UXVhbnRpdHlBdmFpbGFibGUgPSAoKSA9PiB0cnVlLFxufSkgPT4ge1xuICBmZXRjaFByb2R1Y3RJZENhcnREYXRhKHByb2R1Y3QuaWQpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAocHJvZHVjdC5xdWFudGl0eSA9PT0gMCkge1xuICAgICAgICAgIG9uRXJyb3IgJiYgb25FcnJvcihcIlJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgcHJvZHVjdHNcIik7XG4gICAgICAgICAgZ2V0UXVhbnRpdHlBdmFpbGFibGUgJiYgZ2V0UXVhbnRpdHlBdmFpbGFibGUoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENhcnREYXRhKHtcbiAgICAgICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IHF1YW50aXR5LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgICAgIChlcnIpID0+XG4gICAgICAgICAgICAgICAgb25FcnJvciAmJlxuICAgICAgICAgICAgICAgIG9uRXJyb3IoXCJBZGQgcHJvZHVjdCB0byBjYXJ0IGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpblwiLCBlcnIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcERhdGEgPSByZXMuZGF0YVswXTtcbiAgICAgICAgaWYgKHBEYXRhLmNhcnRRdWFudGl0eSArIHF1YW50aXR5ID4gcERhdGEucXVhbnRpdHkpIHtcbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZWFjaGVkIG1heGltdW0gbnVtYmVyIG9mIHByb2R1Y3RzXCIpO1xuICAgICAgICAgIGdldFF1YW50aXR5QXZhaWxhYmxlKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVDYXJ0RGF0YShwRGF0YS5pZCwge1xuICAgICAgICAgICAgY2FydFF1YW50aXR5OiBwRGF0YS5jYXJ0UXVhbnRpdHkgKyBxdWFudGl0eSxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgICAoZXJyKSA9PlxuICAgICAgICAgICAgICAgIG9uRXJyb3IgJiZcbiAgICAgICAgICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gY2FydCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKFxuICAgICAgKGVycikgPT5cbiAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gY2FydCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25SZW1vdmVQcm9kdWN0RnJvbUNhcnQgPSAoeyBjYXJ0SWQsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XG4gIGlmIChjYXJ0SWQgJiYgY2FydElkICE9PSBcIlwiICYmIGNhcnRJZCAhPT0gbnVsbCkge1xuICAgIHJlbW92ZUNhcnREYXRhKGNhcnRJZClcbiAgICAgIC50aGVuKChyZXMpID0+IG9uU3VjY2VzcyAmJiBvblN1Y2Nlc3MocmVzKSlcbiAgICAgIC5jYXRjaChcbiAgICAgICAgKGVycikgPT5cbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZW1vdmUgcHJvZHVjdCBmYWlsbSwgcGxlYXNlciB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG9uQ2hhbmdlUHJvZHVjdENhcnRRdWFudGl0eSA9ICh7XG4gIHByb2R1Y3QsXG4gIHF1YW50aXR5LFxuICBvblN1Y2Nlc3MsXG59KSA9PiB7XG4gIGlmIChxdWFudGl0eSA+IHByb2R1Y3QucXVhbnRpdHkgfHwgcXVhbnRpdHkgPCAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHVwZGF0ZUNhcnREYXRhKHByb2R1Y3QuaWQsIHsgY2FydFF1YW50aXR5OiBxdWFudGl0eSB9KVxuICAgIC50aGVuKChyZXMpID0+IG9uU3VjY2VzcyAmJiBvblN1Y2Nlc3MocmVzKSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vb2dhbWktYXBpLmhlcm9rdWFwcC5jb21cIjtcbiIsImV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5U2x1ZyA9IChhcnIsIHNsdWcpID0+IHtcbiAgcmV0dXJuIHNsdWcgJiYgdHlwZW9mIHNsdWcgPT09IFwic3RyaW5nXCJcbiAgICA/IGFyci5maW5kKChwKSA9PiBwLnNsdWcudG9Mb3dlckNhc2UoKSA9PT0gc2x1Zy50b0xvd2VyQ2FzZSgpKVxuICAgIDogYXJyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoYXJyKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uZGlzY291bnQpIHtcbiAgICAgIHRvdGFsICs9IGl0ZW0uY2FydFF1YW50aXR5XG4gICAgICAgID8gKGl0ZW0ucHJpY2UgLSBpdGVtLmRpc2NvdW50KSAqIGl0ZW0uY2FydFF1YW50aXR5XG4gICAgICAgIDogaXRlbS5wcmljZSAtIGl0ZW0uZGlzY291bnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdGFsICs9IGl0ZW0uY2FydFF1YW50aXR5ID8gaXRlbS5wcmljZSAqIGl0ZW0uY2FydFF1YW50aXR5IDogaXRlbS5wcmljZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdG90YWw7XG59O1xuXG4vL0NhcnRcbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSAoY2FydEFyciwgcGlkKSA9PiB7XG4gIHJldHVybiBwaWQgPyBjYXJ0QXJyLmZpbmQoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdElkID09PSBwaWQpIDogdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrUHJvZHVjdENhcnRRdWFudGl0eSA9IChjYXJ0QXJyLCBwaWQpID0+IHtcbiAgY29uc3QgcHJvZHVjdHNJbkNhcnQgPSBjYXJ0QXJyLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wcm9kdWN0SWQgPT09IHBpZCk7XG4gIGlmIChwcm9kdWN0c0luQ2FydCAmJiBwcm9kdWN0c0luQ2FydC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgdG90YWxQcm9kdWN0UXVhbnRpdHlJbkNhcnQgPSBwcm9kdWN0c0luQ2FydC5yZWR1Y2UoXG4gICAgICAodG90YWwsIGl0ZW0pID0+IHRvdGFsICsgaXRlbS5jYXJ0UXVhbnRpdHksXG4gICAgICAwXG4gICAgKTtcbiAgICByZXR1cm4gdG90YWxQcm9kdWN0UXVhbnRpdHlJbkNhcnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbi8vV2lzaGxpc3RcbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RJbldpc2hsaXN0ID0gKHdpc2hsaXN0QXJyLCBwaWQpID0+IHtcbiAgcmV0dXJuIHBpZCA/IHdpc2hsaXN0QXJyLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBpZCkgOiB1bmRlZmluZWQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVib3VuY2UodmFsdWUsIGRlbGF5KSB7XG4gIGNvbnN0IFtkZWJvdW5jZWRWYWx1ZSwgc2V0RGVib3VuY2VkVmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldERlYm91bmNlZFZhbHVlKHZhbHVlKTtcbiAgICB9LCBkZWxheSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChoYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIGRlYm91bmNlZFZhbHVlO1xufVxuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChwcmljZSwgbG9jYWxlcyA9IFwidXMtVVNcIiwgY3VycmVuY3kgPSBcIlVTRFwiKSA9PiB7XG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlcywge1xuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgY3VycmVuY3k6IGN1cnJlbmN5LFxuICB9KS5mb3JtYXQocHJpY2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclBhcmFtID0gKHBhcmFtTmFtZSwgcGFyYW1WYWx1ZSkgPT4ge1xuICBpZiAocGFyYW1WYWx1ZSAmJiBwYXJhbVZhbHVlICE9PSBcIlwiICYmIHBhcmFtVmFsdWUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gYCYke3BhcmFtTmFtZX09JHtwYXJhbVZhbHVlfWA7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChcbiAgZGF0ZSxcbiAgaW5wdXRGb3JtYXQgPSBcIllZWVktTU0tRERcIixcbiAgb3V0cHV0Rm9ybWF0ID0gXCJNTU0gREQsIFlZWVlcIlxuKSA9PiB7XG4gIHJldHVybiBtb21lbnQoZGF0ZSwgaW5wdXRGb3JtYXQpLmZvcm1hdChvdXRwdXRGb3JtYXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZURhc2ggPSAoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvLS9nLCBcIiBcIik7XG59O1xuIiwiaW1wb3J0IHtcbiAgZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEsXG4gIGFkZFdpc2hsaXN0RGF0YSxcbiAgcmVtb3ZlV2lzaGxpc3REYXRhLFxufSBmcm9tIFwiLi4vYXBpcy93aXNobGlzdFwiO1xuXG5leHBvcnQgY29uc3Qgb25BZGRQcm9kdWN0VG9XaXNobGlzdCA9ICh7IHByb2R1Y3QsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XG4gIGZldGNoUHJvZHVjdElkV2lzaGxpc3REYXRhKHByb2R1Y3QuaWQpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhZGRXaXNobGlzdERhdGEocHJvZHVjdClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgKGVycikgPT5cbiAgICAgICAgICAgICAgb25FcnJvciAmJlxuICAgICAgICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gd2lzbGlzdCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJQcm9kdWN0IGFscmVhZHkgaW4gd2lzaGxpc3RcIik7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goXG4gICAgICAoZXJyKSA9PlxuICAgICAgICBvbkVycm9yICYmXG4gICAgICAgIG9uRXJyb3IoXCJBZGQgcHJvZHVjdCB0byB3aXNsaXN0IGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpblwiLCBlcnIpXG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3QgPSAoe1xuICBwcm9kdWN0SWQsXG4gIG9uU3VjY2VzcyxcbiAgb25FcnJvcixcbn0pID0+IHtcbiAgaWYgKHByb2R1Y3RJZCAmJiBwcm9kdWN0SWQgIT09IFwiXCIgJiYgcHJvZHVjdElkICE9PSBudWxsKSB7XG4gICAgcmVtb3ZlV2lzaGxpc3REYXRhKHByb2R1Y3RJZClcbiAgICAgIC50aGVuKChyZXMpID0+IG9uU3VjY2VzcyAmJiBvblN1Y2Nlc3MocmVzKSlcbiAgICAgIC5jYXRjaChcbiAgICAgICAgKGVycikgPT5cbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZW1vdmUgcHJvZHVjdCBmYWlsLCBwbGVhc2VyIHRyeSBhZ2FpblwiLCBlcnIpXG4gICAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhlYWRlclNjcm9sbChXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBjb25zdCBoZWFkZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc0hlYWRlckZpeGVkLCBzZXRJc0hlYWRlckZpeGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChzY3JvbGwgPj0gaGVhZGVyUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgIHNldElzSGVhZGVyRml4ZWQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc0hlYWRlckZpeGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LCBbc2Nyb2xsXSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XG4gICAgICBzZXRTY3JvbGwod2luZG93LnNjcm9sbFkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17aGVhZGVyUmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXIgJHtjbGFzc05hbWVzKFxuICAgICAgICAgIHsgZml4ZWQ6IGlzSGVhZGVyRml4ZWQgfSxcbiAgICAgICAgICBwcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1gfVxuICAgICAgPlxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgZm9vdGVyTGlua3MgZnJvbSBcIi4uLy4uL2RhdGEvZm9vdGVyLWxpbmtzLmpzb25cIjtcbmltcG9ydCBGb290ZXJRdWlja0xpbmtzIGZyb20gXCIuL2VsZW1lbnRzL0Zvb3RlclF1aWNrTGlua3NcIjtcbmltcG9ydCBGb290ZXJJbmZvbWF0aW9uIGZyb20gXCIuL2VsZW1lbnRzL0Zvb3RlckluZm9tYXRpb25cIjtcbmltcG9ydCBGb290ZXJTdWJjcmliZUlucHV0IGZyb20gXCIuL2VsZW1lbnRzL0Zvb3RlclN1YmNyaWJlSW5wdXRcIjtcblxuZnVuY3Rpb24gRm9vdGVyKHsgY29udGFpbmVyRmx1aWQsIGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bmb290ZXIgLXN0eWxlLW9uZSAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcFwiPlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXtjb250YWluZXJGbHVpZH0+XG4gICAgICAgICAgPFJvdyBndXR0ZXI9ezE1fT5cbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17OX0gbGc9ezh9PlxuICAgICAgICAgICAgICA8Rm9vdGVySW5mb21hdGlvbiAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezE1fSBsZz17MTZ9PlxuICAgICAgICAgICAgICA8Rm9vdGVyUXVpY2tMaW5rcyBjb2xTaXplPXt7IHNwYW46IDggfX0gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc3ViY3JpYmVcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8Um93IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezE0fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc3ViY3JpYmVfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDU+Sm9pbiBPdXIgTmV3c2xldHRlciBOb3c8L2g1PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgR2V0IEUtbWFpbCB1cGRhdGVzIGFib3V0IG91ciBsYXRlc3Qgc2hvcCBhbmQgc3BlY2lhbCBvZmZlcnMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMH0+XG4gICAgICAgICAgICAgIDxGb290ZXJTdWJjcmliZUlucHV0IHVybD1cImh0dHBzOi8vanN0ZXIudXM3Lmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PWVkNDBjMDA4NGEwYzViYTMxYjMzNjVkNjUmaWQ9ZWM2ZjMyYmY1ZVwiIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJvdHRvbVwiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJvdHRvbV9fd3JhcHBlclwiPlxuICAgICAgICAgICAgPHA+Q29weXJpZ2h0IMKpIDIwMTkgT2dhbWkgLSBBbGwgUmlnaHRzIFJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9mb290ZXIvcGF5bWVudC5wbmdcIn1cbiAgICAgICAgICAgICAgYWx0PVwiUGF5bWVudCBtZXRob2RzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZvb3Rlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi4vLi4vb3RoZXIvU29jaWFsSWNvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVySW5mb21hdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pbmZvXCI+XG4gICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290ZXItaW5mb19fbG9nb1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIn1cbiAgICAgICAgICAgIGFsdD1cIk9nYW1pIExvZ29cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkFkZHJlc3M6IDYwLTQ5IFJvYWQgMTEzNzggTmV3IFlvcms8L2xpPlxuICAgICAgICA8bGk+UGhvbmU6ICs2NSAxMS4xODguODg4PC9saT5cbiAgICAgICAgPGxpPkVtYWlsOiBpbmZvLmRlZXJjcmVhdGl2ZUBnbWFpbC5jb208L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxTb2NpYWxJY29ucyB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwiY2lyY2xlXCIgY2xhc3NOYW1lPVwiLWJ0bi1saWdodFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBmb290ZXJMaW5rcyBmcm9tIFwiLi4vLi4vLi4vZGF0YS9mb290ZXItbGlua3MuanNvblwiO1xuXG5mdW5jdGlvbiBGb290ZXJRdWlja0xpbmtzKHsgY29sU2l6ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3NcIj5cbiAgICAgIDxSb3cgZ3V0dGVyPXsxMH0ganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAge2Zvb3RlckxpbmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IHsuLi5jb2xTaXplfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmtzX19ncm91cFwiPlxuICAgICAgICAgICAgICA8aDU+e2l0ZW0udGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1zLm1hcCgobGluaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGxpbmsuaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGE+IHtsaW5rLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXJRdWlja0xpbmtzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYWlsY2hpbXBTdWJzY3JpYmUgZnJvbSBcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIjtcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcblxuY29uc3QgQ3VzdG9tRm9ybSA9IFJlYWN0Lm1lbW8oKHsgc3RhdHVzLCBtZXNzYWdlLCBvblZhbGlkYXRlZCB9KSA9PiB7XG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzOlwiLCB2YWx1ZSk7XG4gICAgdmFsdWUgJiZcbiAgICAgIG9uVmFsaWRhdGVkKHtcbiAgICAgICAgRU1BSUw6IHZhbHVlLmVtYWlsLFxuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJGYWlsZWQ6XCIsIGVycm9ySW5mbyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvcm1cbiAgICAgICAgbmFtZT1cImJhc2ljXCJcbiAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgICBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlci1zdWJjcmliZV9fZm9ybVwiXG4gICAgICA+XG4gICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICBub1N0eWxlPXt0cnVlfVxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsIVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGlucHV0IHlvdXIgRS1tYWlsIVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdfVxuICAgICAgICA+XG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIC8+XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8Rm9ybS5JdGVtIG5vU3R5bGU9e3RydWV9PlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImxpbmtcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgU1VCU0NSSUJFXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPC9Gb3JtPlxuICAgICAge3N0YXR1cyA9PT0gXCJzZW5kaW5nXCIgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX0+c2VuZGluZy4uLjwvZGl2Pn1cbiAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtzdGF0dXMgPT09IFwic3VjY2Vzc1wiICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX1cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1lc3NhZ2UgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyU3ViY3JpYmVJbnB1dCh7IHVybCB9KSB7XG4gIHJldHVybiAoXG4gICAgPE1haWxjaGltcFN1YnNjcmliZVxuICAgICAgdXJsPXt1cmx9XG4gICAgICByZW5kZXI9eyh7IHN1YnNjcmliZSwgc3RhdHVzLCBtZXNzYWdlIH0pID0+IChcbiAgICAgICAgPEN1c3RvbUZvcm1cbiAgICAgICAgICBzdGF0dXM9e3N0YXR1c31cbiAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxuICAgICAgICAgIG9uVmFsaWRhdGVkPXsoZm9ybURhdGEpID0+IHN1YnNjcmliZShmb3JtRGF0YSl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9wTmF2T25lIGZyb20gXCIuL3RvcC1uYXYvVG9wTmF2T25lXCI7XG5pbXBvcnQgTWVudU9uZSBmcm9tIFwiLi9tZW51L01lbnVPbmVcIjtcbmltcG9ydCBGdW5jdGlvbk1lbnVPbmUgZnJvbSBcIi4vZnVuY3Rpb24tbWVudS9GdW5jdGlvbk1lbnVPbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyT25lKHsgYWN0aXZlSGVhZGVyQ29sbGFwc2UgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VG9wTmF2T25lIC8+XG4gICAgICA8TWVudU9uZSAvPlxuICAgICAgPEZ1bmN0aW9uTWVudU9uZSBhY3RpdmVIZWFkZXJDb2xsYXBzZT17YWN0aXZlSGVhZGVyQ29sbGFwc2V9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBEb3duT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxubGV0IGNhdGVnb3JpZXMgPSBbXG4gIHsgbmFtZTogXCJGcmVzaCBNZWF0XCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXG4gIHsgbmFtZTogXCJWZWdldGFibGVzXCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXG4gIHsgbmFtZTogXCJGcnVpdCAmIE51dCBHaWZ0c1wiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxuICB7IG5hbWU6IFwiRnJlc2ggQmVycmllc1wiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxuICB7IG5hbWU6IFwiT2NlYW4gRm9vZHNcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbiAgeyBuYW1lOiBcIkJ1dHRlciAmIEVnZ3NcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbiAgeyBuYW1lOiBcIkZhc3Rmb29kXCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXG4gIHsgbmFtZTogXCJGcmVzaCBPbmlvblwiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxuICB7IG5hbWU6IFwiUGFwYXlheWEgJiBDcmlzcHNcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbiAgeyBuYW1lOiBcIk9hdG1lYWxcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbiAgeyBuYW1lOiBcIkZyZXNoIEJhbmFuYXNcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcbl07XG5cbmZ1bmN0aW9uIENhdGVnb3J5Q29sYXBwc2UoeyBhY3RpdmUgfSkge1xuICBjb25zdCB7IFBhbmVsIH0gPSBDb2xsYXBzZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWNvbGxhcHNlXCI+XG4gICAgICA8Q29sbGFwc2VcbiAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PXthY3RpdmUgPyBcIjFcIiA6IG51bGx9XG4gICAgICAgIGV4cGFuZEljb249eyh7IGlzQWN0aXZlIH0pID0+IChcbiAgICAgICAgICA8RG93bk91dGxpbmVkIHJvdGF0ZT17aXNBY3RpdmUgPyAtMTgwIDogMH0gLz5cbiAgICAgICAgKX1cbiAgICAgICAgZXhwYW5kSWNvblBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgPlxuICAgICAgICA8UGFuZWxcbiAgICAgICAgICBoZWFkZXI9XCJBbGwgZGVwYXJ0bWVudHNcIlxuICAgICAgICAgIGtleT1cIjFcIlxuICAgICAgICAgIGV4dHJhPXs8aSBjbGFzc05hbWU9XCJmYXIgZmEtYmFyc1wiIC8+fVxuICAgICAgICA+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT57aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhDYXRlZ29yeUNvbGFwcHNlKTtcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVRvdGFsUHJpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xuXG5mdW5jdGlvbiBGdW5jdGlvbkl0ZW1zKHsgaGlkZVRvdGFsLCBoaWRlV2lzaGxpc3QgfSkge1xuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zXCI+XG4gICAgICB7IWhpZGVXaXNobGlzdCAmJiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL3dpc2hsaXN0XCJ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zLWl0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25faGVhcnRfYWx0XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG5cbiAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2NhcnRcIn0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zLWl0ZW1cIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2JhZ19hbHRcIiAvPlxuXG4gICAgICAgICAgeyFoaWRlVG90YWwgJiZcbiAgICAgICAgICAgIChjYXJ0U3RhdGUuZGF0YSA/IChcbiAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdEN1cnJlbmN5KGNhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlLmRhdGEpKX08L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0Q3VycmVuY3koMCl9PC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGdW5jdGlvbkl0ZW1zKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IE1vYmlsZU5hdmlnYXRvciBmcm9tIFwiLi9Nb2JpbGVOYXZpZ2F0b3JcIjtcblxuZnVuY3Rpb24gTW9iaWxlTWVudU9wZW5lcigpIHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvblNob3dEcmF3ZXIgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgfTtcbiAgY29uc3Qgb25DbG9zZURyYXdlciA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGEgb25DbGljaz17b25TaG93RHJhd2VyfSBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1vcGVuZXJcIiBocmVmPVwiI1wiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiIC8+XG4gICAgICA8L2E+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIHRpdGxlPVwiQ2xvc2VcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlRHJhd2VyfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcbiAgICAgICAgd2lkdGg9ezMyMH1cbiAgICAgID5cbiAgICAgICAgPE1vYmlsZU5hdmlnYXRvciAvPlxuICAgICAgPC9EcmF3ZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTW9iaWxlTWVudU9wZW5lcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgbmF2aWdhdG9yRGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9uYXZpZ2F0b3IuanNvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gXCIuLi8uLi9vdGhlci9Tb2NpYWxJY29uc1wiO1xuXG5mdW5jdGlvbiBNb2JpbGVOYXZpZ2F0b3IoKSB7XG4gIGNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnQ6IGUua2V5IH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGVcIj5cbiAgICAgIDxNZW51XG4gICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlLW5hdmlnYXRvclwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX1cbiAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICA+XG4gICAgICAgIDxTdWJNZW51IGtleT1cImhvbWVwYWdlXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuSE9NRS50aXRsZX0+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuSE9NRS5zdWJNZW51Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICA8U3ViTWVudSBrZXk9XCJzaG9wXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuU0hPUC50aXRsZX0+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBsYXlvdXRcIiB0aXRsZT1cIkxheW91dCBzaG9wXCI+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUubGF5b3V0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBkZXRhaWxcIiB0aXRsZT1cIkRldGFpbCBzaG9wXCI+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUuZGV0YWlsLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBwYWdlc1wiIHRpdGxlPVwiUGFnZXMgc2hvcFwiPlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LnBhZ2VzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPFN1Yk1lbnUga2V5PVwicGFnZXNcIiB0aXRsZT17bmF2aWdhdG9yRGF0YS5QQUdFUy50aXRsZX0+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuUEFHRVMuc3ViTWVudS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJhbGlwYXlcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5BQk9VVC5ocmVmfT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FudC5kZXNpZ25cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hdmlnYXRvckRhdGEuQUJPVVQudGl0bGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDwvTWVudT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtZnVuY3Rpb25zXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9vdGhlci9sb2dpblwifT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1mdW5jdGlvbnNfX2xvZ2luXCI+TG9naW4gLyBSZWdpc3RlcjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE1vYmlsZU5hdmlnYXRvcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgbmF2aWdhdG9yRGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9uYXZpZ2F0b3IuanNvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBOYXZpZ2F0b3IoKSB7XG4gIGNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW0gLXRvZ2dsZWFibGVcIj5cbiAgICAgICAgPExpbmsgaHJlZj17bmF2aWdhdG9yRGF0YS5IT01FLmhyZWZ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5IT01FLnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51XCI+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuSE9NRS5zdWJNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW0gLXRvZ2dsZWFibGVcIj5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuU0hPUC5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuU0hPUC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudSAtd2lkZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51LWdyb3VwXCI+XG4gICAgICAgICAgICA8aDU+TGF5b3V0IHNob3A8L2g1PlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LmxheW91dC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudS1ncm91cFwiPlxuICAgICAgICAgICAgPGg1PkRldGFpbCBzaG9wPC9oNT5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5kZXRhaWwubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnUtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxoNT5QYWdlcyBzaG9wPC9oNT5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5wYWdlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtIC10b2dnbGVhYmxlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkJMT0cuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkJMT0cudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5CTE9HLnN1Yk1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbSAtdG9nZ2xlYWJsZVwiPlxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5QQUdFUy5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuUEFHRVMudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5QQUdFUy5zdWJNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuQUJPVVQuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkFCT1VULnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE5hdmlnYXRvcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlbGVjdCwgQXV0b0NvbXBsZXRlLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jYXRlZ29yaWVzLmpzb25cIjtcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3VzZURlYm91bmRcIjtcbmltcG9ydCB7IGZldGNoU2VhcmNoZWRQcm9kdWN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBlbnRlckJ1dHRvbiA9IFwiU2VhcmNoXCIsIGhpZGVTZWxlY3QgfSkge1xuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbY3VycmVudFNlYXJjaCwgc2V0Q3VycmVudFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRDYXRlZ29yeSwgc2V0Q3VycmVudENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWJvdW5kVmFsdWUgPSB1c2VEZWJvdW5jZShjdXJyZW50U2VhcmNoLCAzMDApO1xuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcbiAgY29uc3QgeyBzZWFyY2hlZFByb2R1Y3RzIH0gPSBzaG9wU3RhdGU7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIHNldEN1cnJlbnRTZWFyY2godmFsKTtcbiAgfTtcbiAgY29uc3Qgb25TZWxlY3RPcHRpb24gPSAodmFsdWUsIG9wdGlvbikgPT4ge1xuICAgIHNldEN1cnJlbnRTZWFyY2godmFsdWUpO1xuICB9O1xuICBjb25zdCBvblNlYXJjaCA9ICh2YWwpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRTZWFyY2ggfHwgY3VycmVudFNlYXJjaCA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIsXG4gICAgICAgIHF1ZXJ5OiB7IHE6IGN1cnJlbnRTZWFyY2ggfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25DaG9vc2VDYXRlb2dyeSA9ICh2YWwpID0+IHtcbiAgICBzZXRDdXJyZW50Q2F0ZWdvcnkodmFsKTtcbiAgfTtcbiAgY29uc3Qgb3B0aW9ucyA9XG4gICAgc2VhcmNoZWRQcm9kdWN0cy5kYXRhLmxlbmd0aCA+IDAgJiZcbiAgICBzZWFyY2hlZFByb2R1Y3RzLmRhdGEubWFwKChpdGVtKSA9PiAoeyB2YWx1ZTogaXRlbS5uYW1lIH0pKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0KHtcbiAgICAgICAgaW5wdXQ6IGN1cnJlbnRTZWFyY2gsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRDYXRlZ29yeSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW2RlYm91bmRWYWx1ZSwgY3VycmVudENhdGVnb3J5XSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS13cmFwcGVyXCI+XG4gICAgICAgIHshaGlkZVNlbGVjdCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS1zZWxlY3RcIj5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50Q2F0ZWdvcnl9XG4gICAgICAgICAgICAgIHN1ZmZpeEljb249ezxpIGNsYXNzTmFtZT1cImZhciBmYS1hbmdsZS1kb3duXCIgLz59XG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hvb3NlQ2F0ZW9ncnl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj5BbGwgY2F0ZWdvcmllczwvT3B0aW9uPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbS52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm0taW5wdXRcIj5cbiAgICAgICAgICA8QXV0b0NvbXBsZXRlXG4gICAgICAgICAgICBiYWNrZmlsbFxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3RPcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXRWYWx1ZSwgb3B0aW9uKSA9PlxuICAgICAgICAgICAgICBvcHRpb24udmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGlucHV0VmFsdWUudG9VcHBlckNhc2UoKSkgIT09XG4gICAgICAgICAgICAgIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0LlNlYXJjaFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG5lZWRcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBlbnRlckJ1dHRvbj17ZW50ZXJCdXR0b259XG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgbG9hZGluZz17c2VhcmNoZWRQcm9kdWN0cy5sb2FkaW5nfVxuICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlYXJjaEZvcm0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBDYXRlZ29yeUNvbGFwcHNlIGZyb20gXCIuLi9lbGVtZW50cy9DYXRlZ29yeUNvbGFwcHNlXCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi4vZWxlbWVudHMvU2VhcmNoRm9ybVwiO1xuXG5mdW5jdGlvbiBGdW5jdGlvbk1lbnVPbmUoeyBhY3RpdmVIZWFkZXJDb2xsYXBzZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZnVuY3Rpb24tbWVudS1vbmVcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY3Rpb24tbWVudS13cmFwcGVyXCI+XG4gICAgICAgICAgPFJvdyBndXR0ZXI9ezMwfT5cbiAgICAgICAgICAgIDxDb2wgeHM9e3sgc3BhbjogMjQsIG9yZGVyOiAyIH19IG1kPXt7IHNwYW46IDgsIG9yZGVyOiAxIH19IGxnPXs2fT5cbiAgICAgICAgICAgICAgPENhdGVnb3J5Q29sYXBwc2UgYWN0aXZlPXthY3RpdmVIZWFkZXJDb2xsYXBzZX0gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICB4cz17eyBzcGFuOiAyNCwgb3JkZXI6IDEgfX1cbiAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogMTYsIG9yZGVyOiAyIH19XG4gICAgICAgICAgICAgIGxnPXsxOH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGdW5jdGlvbk1lbnVPbmUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSBcIi4uL2VsZW1lbnRzL05hdmlnYXRvclwiO1xuaW1wb3J0IEZ1bmN0aW9uSXRlbXMgZnJvbSBcIi4uL2VsZW1lbnRzL0Z1bmN0aW9uSXRlbXNcIjtcbmltcG9ydCBNb2JpbGVNZW51T3BlbmVyIGZyb20gXCIuLi9lbGVtZW50cy9Nb2JpbGVNZW51T3BlbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVPbmUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51IC1zdHlsZS1vbmVcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS13cmFwcGVyXCI+XG4gICAgICAgICAgPE1vYmlsZU1lbnVPcGVuZXIgLz5cbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1sb2dvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCJ9XG4gICAgICAgICAgICAgICAgYWx0PVwiT2dhbWkgbG9nb1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxOYXZpZ2F0b3IgLz5cbiAgICAgICAgICA8RnVuY3Rpb25JdGVtcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uLy4uL290aGVyL1NvY2lhbEljb25zXCI7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBmbGFnRGF0YSA9IFtcbiAgeyBuYW1lOiBcImVuZ2xpc2hcIiwgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2ZsYWctdXNhLnBuZ1wiIH0sXG4gIHsgbmFtZTogXCJqYXBhbmVzZVwiLCBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvZmxhZy1qcC5wbmdcIiB9LFxuICB7IG5hbWU6IFwidmlldG5hbWVzZVwiLCBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvZmxhZy12bi5wbmdcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wTmF2T25lKHsgY29udGFpbmVyRmx1aWQgfSkge1xuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmVcIj5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ9e2NvbnRhaW5lckZsdWlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1sZWZ0XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGVcIiAvPlxuICAgICAgICAgICAgICAgIGluZm8uZGVlcmNyZWF0aXZlQGdtYWlsLmNvbVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lLWFsdFwiIC8+XG4gICAgICAgICAgICAgICAgKzY1IDExLjE4OC44ODhcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodF9faXRlbVwiPlxuICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodF9faXRlbVwiPlxuICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cImVuZ2xpc2hcIiB3aWR0aD17MTI1fSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIHtmbGFnRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTMgLyAxNiArIFwiZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCAvIDE2ICsgXCJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogLTMgLyAxNiArIFwiZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1IC8gMTYgKyBcImVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmUtcmlnaHRfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2F1dGgvbG9naW5cIn0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBCYWNrVG9wIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IEhlYWRlck9uZSBmcm9tIFwiLi4vaGVhZGVyL0hlYWRlck9uZVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vZm9vdGVyL0Zvb3RlclwiO1xuaW1wb3J0IHdpdGhIZWFkZXJTY3JvbGwgZnJvbSBcIi4uLy4uL2NvbW1vbi93aXRoSGVhZGVyU2Nyb2xsXCI7XG5cbmNvbnN0IFNjcm9sbGVkSGVhZGVyID0gd2l0aEhlYWRlclNjcm9sbChIZWFkZXJPbmUpO1xuXG5mdW5jdGlvbiBMYXlvdXRPbmUoeyB0aXRsZSwgY2hpbGRyZW4sIGhlYWRlckNsYXNzLCBmb290ZXJDbGFzcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U2Nyb2xsZWRIZWFkZXIgY2xhc3NOYW1lPXtoZWFkZXJDbGFzc30gLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxGb290ZXIgY2xhc3NOYW1lPXtmb290ZXJDbGFzc30gLz5cbiAgICAgIDxCYWNrVG9wIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTGF5b3V0T25lKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHsgZmx1aWQsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Zmx1aWQgPyBcImNvbnRhaW5lci1mbHVpZFwiIDogXCJjb250YWluZXJcIn0+e2NoaWxkcmVufTwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2tlbGV0b24sIEVtcHR5IH0gZnJvbSBcImFudGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmV0Y2hEYXRhSGFuZGxlKHtcbiAgZGF0YSxcbiAgZXJyb3JNZXNzYWdlID0gXCJHZXQgcHJvZHVjdHMgZmFpbCwgcGxlYXNlIHRyeSBhZ2FpblwiLFxuICBlbXB0eURlc2NyaXB0aW9uID0gXCJObyBwcm9kdWN0IGluIHRoaXMgY2F0ZWdvcnlcIixcbiAgcmVuZGVyRGF0YSxcbn0pIHtcbiAgcmV0dXJuIGRhdGEubG9hZGluZyA/IChcbiAgICA8U2tlbGV0b24gYWN0aXZlIC8+XG4gICkgOiBkYXRhLmVycm9yID8gKFxuICAgIDxoMz57ZXJyb3JNZXNzYWdlfTwvaDM+XG4gICkgOiBkYXRhLmRhdGEubGVuZ3RoID4gMCA/IChcbiAgICByZW5kZXJEYXRhICYmIHJlbmRlckRhdGEoZGF0YS5kYXRhKVxuICApIDogKFxuICAgIDxFbXB0eVxuICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XG4gICAgICBkZXNjcmlwdGlvbj17ZW1wdHlEZXNjcmlwdGlvbn1cbiAgICAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2lhbEljb25zKHsgY2xhc3NOYW1lLCB0eXBlID0gXCJsaW5rXCIsIHNoYXBlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtgc29jaWFsLWljb25zICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW52aXNpb25cIj48L2k+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXBpbnRlcmVzdC1wXCI+PC9pPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcblxuZnVuY3Rpb24gUGFydG5lck9uZSh7IHN0eWxlIH0pIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1vbmVcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLW9uZS13cmFwcGVyXCI+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheSg4KSwgKGUsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xuICAgICAgICAgICAgICAgICAgICBgL2Fzc2V0cy9pbWFnZXMvc2VjdGlvbnMvcGFydG5lcnMvJHtpICsgMX0ucG5nYFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiUGFydG5lciBsb2dvXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQYXJ0bmVyT25lKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBCdXR0b24sIFRvb2x0aXAsIG1lc3NhZ2UsIE1vZGFsLCBCcmVhZGNydW1iIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHsgZmV0Y2hXaXNoTGlzdFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy93aXNobGlzdEFjdGlvbnNcIjtcbmltcG9ydCB7IGZldGNoQ2FydFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xuaW1wb3J0IHsgb25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi93aXNobGlzdFNlcnZpY2VzXCI7XG5pbXBvcnQgeyBvbkFkZFByb2R1Y3RUb0NhcnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NhcnRTZXJ2aWNlc1wiO1xuaW1wb3J0IHsgY2hlY2tQcm9kdWN0SW5DYXJ0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IExheW91dE9uZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0T25lXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IEZldGNoRGF0YUhhbmRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vdGhlci9GZXRjaERhdGFIYW5kbGVcIjtcbmltcG9ydCBQYXJ0bmVyT25lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb25zL3BhcnRuZXJzL1BhcnRuZXJPbmVcIjtcblxuZnVuY3Rpb24gd2lzaGxpc3QoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2FkZFRvQ2FydExvYWRpbmcsIHNldEFkZFRvQ2FydExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJBZGQgc29tZSBtZXNzYWdlXCIsXG4gICAgY2FydElkOiBudWxsLFxuICB9KTtcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XG4gIGNvbnN0IHdpc2hsaXN0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLndpc2hsaXN0UmVkdWNlcik7XG5cbiAgY29uc3Qgc2hvd01vZGFsID0gKG1lc3NhZ2UsIHByb2R1Y3RJZCkgPT4ge1xuICAgIHNldE1vZGFsU3RhdGUoe1xuICAgICAgLi4ubW9kYWxTdGF0ZSxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgcHJvZHVjdElkLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU9rID0gKGUpID0+IHtcbiAgICBvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3Qoe1xuICAgICAgcHJvZHVjdElkOiBtb2RhbFN0YXRlLnByb2R1Y3RJZCxcbiAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgICBzZXRNb2RhbFN0YXRlKHsgLi4ubW9kYWxTdGF0ZSwgdmlzaWJsZTogZmFsc2UgfSk7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIHdpc2hsaXN0XCIpO1xuICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0UmVxdWVzdCgpKTtcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiAobWVzKSA9PiB7XG4gICAgICAgIHNldE1vZGFsU3RhdGUoeyAuLi5tb2RhbFN0YXRlLCB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICAgICAgbWVzc2FnZS5lcnJvcihtZXMpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoZSkgPT4ge1xuICAgIHNldE1vZGFsU3RhdGUoeyAuLi5tb2RhbFN0YXRlLCB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgfTtcblxuICBjb25zdCBvbkFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XG4gICAgc2V0QWRkVG9DYXJ0TG9hZGluZyh0cnVlKTtcbiAgICBvbkFkZFByb2R1Y3RUb0NhcnQoe1xuICAgICAgcHJvZHVjdCxcbiAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gY2FydFwiKTtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0UmVxdWVzdCgpKTtcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiAobWVzLCBlcnIpID0+IHtcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0T25lIHRpdGxlPVwiV2lzaGxpc3RcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCcmVhZGNydW1iIHNlcGFyYXRvcj1cIj5cIj5cbiAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+U2hvcDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+V2lzaGxpc3Q8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgICA8RmV0Y2hEYXRhSGFuZGxlXG4gICAgICAgICAgZGF0YT17d2lzaGxpc3RTdGF0ZX1cbiAgICAgICAgICByZW5kZXJEYXRhPXsoZGF0YSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9e3sgd2lkdGg6IDE1MCAvIDE2ICsgXCJlbVwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9e3sgd2lkdGg6IFwiMzAlXCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGNvbCBzdHlsZT17eyB3aWR0aDogXCIzMCVcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9e3sgd2lkdGg6IFwiMjAlXCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+SW1hZ2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0IE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkFkZCB0byBjYXJ0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNsZWFyIGNhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSBhbGxsIHByb2R1Y3QgZnJvbSBjYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFsIGZhLXRpbWVzXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1pbWctd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2R1Y3QgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS1uYW1lXCI+e2l0ZW0ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShpdGVtLnByaWNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUtYXRjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tQcm9kdWN0SW5DYXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydFN0YXRlLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXthZGRUb0NhcnRMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9DYXJ0KGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJSZW1vdmUgcHJvZHVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB0byByZW1vdmUgdGhpcyBwcm9kdWN0IGZyb20gY2FydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFsIGZhLXRpbWVzXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3aXNobGlzdC1idG5cIiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCJ9PlxuICAgICAgICAgICAgICAgICAgPGE+Q29udGludWUgc2hvcHBpbmc8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICAgIDxQYXJ0bmVyT25lIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxNb2RhbFxuICAgICAgICB2aXNpYmxlPXttb2RhbFN0YXRlLnZpc2libGV9XG4gICAgICAgIG9uT2s9e2hhbmRsZU9rfVxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgPlxuICAgICAgICA8cD57bW9kYWxTdGF0ZS5tZXNzYWdlfTwvcD5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9MYXlvdXRPbmU+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8od2lzaGxpc3QpO1xuIiwiZXhwb3J0IGNvbnN0IFNIT1AgPSB7XG4gIEZFVENIX1BST0RVQ1RTOiBcIkZFVENIX1BST0RVQ1RTXCIsXG4gIEZFVENIX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTXCIsXG4gIEZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUUzogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU1wiLFxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTXCIsXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfREFMRV9QUk9EVUNUUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTXCIsXG4gIEZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTDogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTFwiLFxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTDogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMXCIsXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTXCIsXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBCTE9HID0ge1xuICBGRVRDSF9QT1NUUzogXCJGRVRDSF9QT1NUU1wiLFxuICBGRVRDSF9QT1NUU19TVUNDRVNTOiBcIkZFVENIX1BPU1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUE9TVFNfRkFJTDogXCJGRVRDSF9QT1NUU19GQUlMXCIsXG4gIEZFVENIX1BPU1RfREVUQUlMOiBcIkZFVENIX1BPU1RfREVUQUlMXCIsXG4gIEZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1M6IFwiRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTU1wiLFxuICBGRVRDSF9QT1NUX0RFVEFJTF9GQUlMOiBcIkZFVENIX1BPU1RfREVUQUlMX0ZBSUxcIixcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU1wiLFxuICBGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUzogXCJGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9SRUNFTlRfUE9TVFNfRkFJTDogXCJGRVRDSF9SRUNFTlRfUE9TVFNfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFNIT1BfRklMVEVSID0ge1xuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcbiAgU0VUX1NPUlQ6IFwiU0VUX1NPUlRcIixcbiAgU0VUX1NIT1c6IFwiU0VUX1NIT1dcIixcbiAgU0VUX1ZJRVc6IFwiU0VUX1ZJRVdcIixcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxuICBTRVRfQ09MT1I6IFwiU0VUX0NPTE9SXCIsXG4gIFNFVF9TSVpFOiBcIlNFVF9TSVpFXCIsXG4gIFNFVF9UQUc6IFwiU0VUX1RBR1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IENBUlQgPSB7XG4gIEZFVENIX0NBUlQ6IFwiRkVUQ0hfQ0FSVFwiLFxuICBGRVRDSF9DQVJUX1NVQ0NFU1M6IFwiRkVUQ0hfQ0FSVF9TVUNDRVNTXCIsXG4gIEZFVENIX0NBUlRfRkFJTDogXCJGRVRDSF9DQVJUX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBXSVNITElTVCA9IHtcbiAgRkVUQ0hfV0lTSExJU1Q6IFwiRkVUQ0hfV0lTSExJU1RcIixcbiAgRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUzogXCJGRVRDSF9XSVNITElTVF9TVUNDRVNTXCIsXG4gIEZFVENIX1dJU0hMSVNUX0ZBSUw6IFwiRkVUQ0hfV0lTSExJU1RfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IENPTVBBUkUgPSB7XG4gIEFERF9UT19DT01QQVJFOiBcIkFERF9UT19DT01QQVJFXCIsXG4gIFJFTU9WRV9GUk9NX0NPTVBBUkU6IFwiUkVNT1ZFX0ZST01fQ09NUEFSRVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IEJMT0dfRklMVEVSID0ge1xuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcbiAgU0VUX0NBVEVHT1JZOiBcIlNFVF9DQVRFR09SWVwiLFxuICBTRVRfVEFHOiBcIlNFVF9UQUdcIixcbn07XG4iLCJpbXBvcnQgeyBDQVJUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmltcG9ydCAqIGFzIGNhcnRBcGlzIGZyb20gXCIuLi8uLi9hcGlzL2NhcnRcIjtcblxuLy9HZXQgY2FydCBkYXRhXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0ID0gKCkgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJULFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0RmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRSZXF1ZXN0ID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hDYXJ0KCkpO1xuICAgIGNhcnRBcGlzXG4gICAgICAuZmV0Y2hDYXJ0RGF0YSgpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFN1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaENhcnRGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgU0hPUCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuaW1wb3J0ICogYXMgc2hvcEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvc2hvcFwiO1xuXG4vL0dldCBhbGwgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgcHJvZHVjdENvdW50KSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICAgIHByb2R1Y3RDb3VudCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RTX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hQcm9kdWN0c0RhdGEocXVlcnkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhLCByZXMuaGVhZGVyc1tcIngtdG90YWwtY291bnRcIl0pKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgc2FsZSBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0cygpKTtcbiAgICBzaG9wQXBpc1xuICAgICAgLmZldGNoU2FsZVByb2R1Y3RzRGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTYWxlUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTYWxlUHJvZHVjdHNGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuXG4vL0dldCBmZWF0dXJlZCBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0cyA9ICgpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoRmVhdHVyZWRQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IGJlc3Qgc2VsbGVyIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IGJlc3Qgc2VsbGVyIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hEYWxlUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaERhbGVQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaERhbGVQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IHByb2R1Y3QgZGV0YWlsXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0RGV0YWlsU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxSZXF1ZXN0ID0gKHNsdWcpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdERldGFpbCgpKTtcbiAgICBzaG9wQXBpc1xuICAgICAgLmZldGNoUHJvZHVjdERldGFpbERhdGEoc2x1ZylcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0RGV0YWlsU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdERldGFpbEZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IHNlYXJjaGVkIHByb2R1Y3RcblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0ID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0RmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFNlYXJjaGVkUHJvZHVjdCgpKTtcbiAgICBzaG9wQXBpc1xuICAgICAgLmZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hlZFByb2R1Y3RTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hlZFByb2R1Y3RGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuaW1wb3J0ICogYXMgd2lzaGxpc3RBcGlzIGZyb20gXCIuLi8uLi9hcGlzL3dpc2hsaXN0XCI7XG5cbi8vR2V0IGNhcnQgZGF0YVxuY29uc3QgZmV0Y2hXaXNoTGlzdCA9ICgpID0+ICh7XG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNULFxufSk7XG5cbmNvbnN0IGZldGNoV2lzaExpc3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmNvbnN0IGZldGNoV2lzaExpc3RGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1RfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hXaXNoTGlzdFJlcXVlc3QgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0KCkpO1xuICAgIHdpc2hsaXN0QXBpc1xuICAgICAgLmZldGNoV2lzaGxpc3REYXRhKClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdFN1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0RmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
