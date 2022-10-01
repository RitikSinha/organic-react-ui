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
    (__webpack_require__.s = "./src/pages/homepages/homepage2.js")
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
            // ignore click for browser’s default behavior
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
            // > `fetch` won’t send cookies, unless you set the credentials init
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

    /***/ "./src/components/detail/product/ProductDetailLayout.js":
      /*!**************************************************************!*\
  !*** ./src/components/detail/product/ProductDetailLayout.js ***!
  \**************************************************************/
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
        /* harmony import */ var _elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./elements/ProductDetailImages */ "./src/components/detail/product/elements/ProductDetailImages.js"
          );
        /* harmony import */ var _elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./elements/ProductDetailContent */ "./src/components/detail/product/elements/ProductDetailContent.js"
          );
        /* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js"
          );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./elements/ProductDetailTab */ "./src/components/detail/product/elements/ProductDetailTab.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\detail\\product\\ProductDetailLayout.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function ProductDetailLayout({ data, type, hideTab, style }) {
          if (type === "fluid") {
            return __jsx(
              "div",
              {
                className: "product-detail",
                style: style,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_5__["Row"],
                {
                  gutter: 30,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_5__["Col"],
                  {
                    md: 10,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 15,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    _elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__[
                      "default"
                    ],
                    {
                      type: "column",
                      images: data.images,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16,
                        columnNumber: 13,
                      },
                    }
                  )
                ),
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_5__["Col"],
                  {
                    md: 14,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    _elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__[
                      "default"
                    ],
                    {
                      type: "fluid",
                      data: data,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19,
                        columnNumber: 13,
                      },
                    }
                  )
                ),
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_5__["Col"],
                  {
                    md: 24,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21,
                      columnNumber: 11,
                    },
                  },
                  !hideTab &&
                    __jsx(
                      _elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__[
                        "default"
                      ],
                      {
                        fullDescription: data.fullDescription,
                        specifications: data.specifications,
                        reviews: data.reviews,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 23,
                          columnNumber: 15,
                        },
                      }
                    )
                )
              )
            );
          }

          return __jsx(
            "div",
            {
              className: "product-detail",
              style: style,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 5,
              },
            },
            __jsx(
              antd__WEBPACK_IMPORTED_MODULE_5__["Row"],
              {
                gutter: 30,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_5__["Col"],
                {
                  md: 12,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  _elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                  ],
                  {
                    images: data.images,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 11,
                    },
                  }
                )
              ),
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_5__["Col"],
                {
                  md: 12,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  _elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__[
                    "default"
                  ],
                  {
                    data: data,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 11,
                    },
                  }
                )
              ),
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_5__["Col"],
                {
                  xs: 24,
                  md: 24,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 9,
                  },
                },
                !hideTab &&
                  __jsx(
                    _elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__[
                      "default"
                    ],
                    {
                      fullDescription: data.fullDescription,
                      specifications: data.specifications,
                      reviews: data.reviews,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45,
                        columnNumber: 13,
                      },
                    }
                  )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            ProductDetailLayout
          );

        /***/
      },

    /***/ "./src/components/detail/product/elements/ProductDetailContent.js":
      /*!************************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailContent.js ***!
  \************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return ProductDetailContent;
          }
        );
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_0__
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
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! classnames */ "classnames");
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            classnames__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../../common/utils */ "./src/common/utils.js"
          );
        /* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../../common/shopUtils */ "./src/common/shopUtils.js"
          );
        /* harmony import */ var _other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../other/QuantitySelector */ "./src/components/other/QuantitySelector.js"
          );
        /* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../other/SocialIcons */ "./src/components/other/SocialIcons.js"
          );
        /* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../../common/cartServices */ "./src/common/cartServices.js"
          );
        /* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js"
          );
        /* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailContent.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

        function ProductDetailContent({ data, type }) {
          const dispatch = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]
          )();
          const { 0: currentQuantity, 1: setCurrentQuantity } = Object(
            react__WEBPACK_IMPORTED_MODULE_1__["useState"]
          )(1);
          const { 0: addToCartLoading, 1: setAddToCartLoading } = Object(
            react__WEBPACK_IMPORTED_MODULE_1__["useState"]
          )(false);
          const cartState = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]
          )((state) => state.cartReducer);
          const compareState = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]
          )((state) => state.compareReducer);
          const productInCompare = Object(
            _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__[
              "checkProductInWishlist"
            ]
          )(compareState, data.id);
          const avaiableQuantity =
            data.quantity -
            Object(
              _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__[
                "checkProductCartQuantity"
              ]
            )(cartState.data, data.id);
          console.log(avaiableQuantity);

          const onAddToCart = (product, quantity) => {
            if (addToCartLoading) {
              return;
            }

            setAddToCartLoading(true);
            Object(
              _common_cartServices__WEBPACK_IMPORTED_MODULE_8__[
                "onAddProductToCart"
              ]
            )({
              product,
              quantity,
              onSuccess: (data) => {
                setAddToCartLoading(false);
                antd__WEBPACK_IMPORTED_MODULE_0__["message"].success(
                  "Product added to cart"
                );
                dispatch(
                  Object(
                    _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__[
                      "fetchCartRequest"
                    ]
                  )()
                );
              },
              onError: (mes, err) => {
                setAddToCartLoading(false);
                antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(mes);
                console.log(err);
              },
            });
          };

          const onAddToCompare = (product) => {
            if (productInCompare) {
              dispatch(
                Object(
                  _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__[
                    "removeFromCompare"
                  ]
                )(product.id)
              );
              antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(
                "Product removed from compare"
              );
            } else {
              dispatch(
                Object(
                  _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__[
                    "addToCompare"
                  ]
                )(product)
              );
              antd__WEBPACK_IMPORTED_MODULE_0__["message"].success(
                "Product added to compare"
              );
            }
          };

          if (type === "fluid") {
            return __jsx(
              "div",
              {
                className: "product-detail-content -wide",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_0__["Row"],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_0__["Col"],
                  {
                    xs: 24,
                    sm: 24,
                    xl: 16,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "div",
                    {
                      className: "product-detail-content__left",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "h5",
                      {
                        className: "product-type",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 65,
                          columnNumber: 15,
                        },
                      },
                      data.category
                    ),
                    __jsx(
                      "h2",
                      {
                        className: "product-detail-content__name",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 66,
                          columnNumber: 15,
                        },
                      },
                      data.name
                    ),
                    __jsx(
                      "div",
                      {
                        className: "product-detail-content__description",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 67,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "p",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                            columnNumber: 17,
                          },
                        },
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      ),
                      __jsx(
                        "p",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72,
                            columnNumber: 17,
                          },
                        },
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      ),
                      __jsx(
                        "p",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76,
                            columnNumber: 17,
                          },
                        },
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      ),
                      __jsx(
                        "p",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80,
                            columnNumber: 17,
                          },
                        },
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum."
                      ),
                      __jsx(
                        "p",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84,
                            columnNumber: 17,
                          },
                        },
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor."
                      ),
                      __jsx(
                        "p",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 89,
                            columnNumber: 17,
                          },
                        },
                        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem"
                      )
                    ),
                    __jsx(
                      "ul",
                      {
                        className: "product-detail-content__meta",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 95,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "li",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 96,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "span",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 97,
                              columnNumber: 19,
                            },
                          },
                          "SKU:"
                        ),
                        " A1359"
                      ),
                      __jsx(
                        "li",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 99,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "span",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 100,
                              columnNumber: 19,
                            },
                          },
                          "Categories:"
                        ),
                        " Fastfood"
                      ),
                      __jsx(
                        "li",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 102,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "span",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 103,
                              columnNumber: 19,
                            },
                          },
                          "Tag:"
                        ),
                        " Food, Organic"
                      )
                    ),
                    __jsx(
                      "div",
                      {
                        className: "product-detail-content__share",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 106,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "h5",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 107,
                            columnNumber: 17,
                          },
                        },
                        "Share link:"
                      ),
                      __jsx(
                        _other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__[
                          "default"
                        ],
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 108,
                            columnNumber: 17,
                          },
                        }
                      )
                    )
                  )
                ),
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_0__["Col"],
                  {
                    xs: 24,
                    sm: 24,
                    xl: 8,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "div",
                    {
                      className: "product-detail-content__right",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "div",
                      {
                        className: "product-detail-content__delivery",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 114,
                          columnNumber: 15,
                        },
                      },
                      "Free delivery"
                    ),
                    __jsx(
                      "h3",
                      {
                        className: "product-detail-content__price",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 117,
                          columnNumber: 15,
                        },
                      },
                      data.discount &&
                        __jsx(
                          "del",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 118,
                              columnNumber: 35,
                            },
                          },
                          Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_4__[
                              "formatCurrency"
                            ]
                          )(data.price)
                        ),
                      __jsx(
                        "div",
                        {
                          className: "product-detail-content__price-discount",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 119,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "h5",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 120,
                              columnNumber: 19,
                            },
                          },
                          data.discount
                            ? Object(
                                _common_utils__WEBPACK_IMPORTED_MODULE_4__[
                                  "formatCurrency"
                                ]
                              )(data.price - data.discount)
                            : Object(
                                _common_utils__WEBPACK_IMPORTED_MODULE_4__[
                                  "formatCurrency"
                                ]
                              )(data.price)
                        ),
                        __jsx(
                          "span",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 125,
                              columnNumber: 19,
                            },
                          },
                          __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
                            defaultValue: data.rate,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 126,
                              columnNumber: 21,
                            },
                          })
                        )
                      )
                    ),
                    __jsx(
                      _other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__[
                        "default"
                      ],
                      {
                        onChange: (val) => setCurrentQuantity(val),
                        max: avaiableQuantity,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 130,
                          columnNumber: 15,
                        },
                      }
                    ),
                    __jsx(
                      "div",
                      {
                        className: "product-detail-content__actions",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 134,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        antd__WEBPACK_IMPORTED_MODULE_0__["Button"],
                        {
                          loading: addToCartLoading,
                          onClick: () => onAddToCart(data, currentQuantity),
                          shape: "round",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 135,
                            columnNumber: 17,
                          },
                        },
                        "Add to cart"
                      ),
                      __jsx(
                        antd__WEBPACK_IMPORTED_MODULE_0__["Button"],
                        {
                          onClick: () => onAddToCompare(data),
                          className:
                            classnames__WEBPACK_IMPORTED_MODULE_3___default()({
                              active: productInCompare,
                            }),
                          shape: "round",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 142,
                            columnNumber: 17,
                          },
                        },
                        "Add to compare"
                      )
                    ),
                    __jsx(
                      "ul",
                      {
                        className: "product-detail-content__benefits",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 152,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "li",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 153,
                            columnNumber: 17,
                          },
                        },
                        "Satisfaction 100% Guaranteed"
                      ),
                      __jsx(
                        "li",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 154,
                            columnNumber: 17,
                          },
                        },
                        "Free shipping on orders over $99"
                      ),
                      __jsx(
                        "li",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 155,
                            columnNumber: 17,
                          },
                        },
                        "14 day easy Return"
                      )
                    )
                  )
                )
              )
            );
          }

          return __jsx(
            "div",
            {
              className: "product-detail-content",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 5,
              },
            },
            __jsx(
              "h5",
              {
                className: "product-type",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 7,
                },
              },
              data.category
            ),
            __jsx(
              "h2",
              {
                className: "product-detail-content__name",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 7,
                },
              },
              data.name
            ),
            __jsx(
              "p",
              {
                className: "product-detail-content__description",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 7,
                },
              },
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
            ),
            __jsx(
              "div",
              {
                className: "product-detail-content__delivery",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 7,
                },
              },
              "Free delivery"
            ),
            __jsx(
              "h3",
              {
                className: "product-detail-content__price",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 7,
                },
              },
              data.discount &&
                __jsx(
                  "del",
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 27,
                    },
                  },
                  Object(
                    _common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"]
                  )(data.price)
                ),
              __jsx(
                "div",
                {
                  className: "product-detail-content__price-discount",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "h5",
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 11,
                    },
                  },
                  data.discount
                    ? Object(
                        _common_utils__WEBPACK_IMPORTED_MODULE_4__[
                          "formatCurrency"
                        ]
                      )(data.price - data.discount)
                    : Object(
                        _common_utils__WEBPACK_IMPORTED_MODULE_4__[
                          "formatCurrency"
                        ]
                      )(data.price)
                ),
                __jsx(
                  "span",
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 181,
                      columnNumber: 11,
                    },
                  },
                  __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
                    defaultValue: data.rate,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 13,
                    },
                  })
                )
              )
            ),
            __jsx(
              _other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__["default"],
              {
                onChange: (val) => setCurrentQuantity(val),
                max: avaiableQuantity,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 7,
                },
              }
            ),
            __jsx(
              "div",
              {
                className: "product-detail-content__actions",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_0__["Button"],
                {
                  loading: addToCartLoading,
                  onClick: () => onAddToCart(data, currentQuantity),
                  shape: "round",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 9,
                  },
                },
                "Add to cart"
              ),
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_0__["Button"],
                {
                  onClick: () => onAddToCompare(data),
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
                    active: productInCompare,
                  }),
                  shape: "round",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 9,
                  },
                },
                "Add to compare"
              )
            ),
            __jsx(
              "div",
              {
                className: "product-detail-content__share",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 7,
                },
              },
              __jsx(
                "h5",
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 9,
                  },
                },
                "Share link:"
              ),
              __jsx(
                _other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__["default"],
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 9,
                  },
                }
              )
            )
          );
        }

        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductDetailContent);

        /***/
      },

    /***/ "./src/components/detail/product/elements/ProductDetailImages.js":
      /*!***********************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailImages.js ***!
  \***********************************************************************/
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
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! classnames */ "classnames");
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            classnames__WEBPACK_IMPORTED_MODULE_2__
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailImages.js";
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

        function ProductDetailImages({ type, images }) {
          const slider1Settings = {
            arrows: false,
          };
          const slider2Settings = {
            arrows: false,
            slidesToShow: 3,
            focusOnSelect: true,
            vertical: type === "column" ? true : false,
            // prevArrow: <PrevArrow />,
            // nextArrow: <NextArrow />,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  vertical: type === "column" && false,
                },
              },
            ],
          };
          const { 0: nav1, 1: setNav1 } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )();
          const { 0: nav2, 1: setNav2 } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )(); // if (type === "column") {
          //   return <h1>Column</h1>;
          // }

          return __jsx(
            "div",
            {
              className: `product-detail-images ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                {
                  "-column": type === "column",
                }
              )}`,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 5,
              },
            },
            __jsx(
              "div",
              {
                className: "product-detail-images-big",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 7,
                },
              },
              __jsx(
                react_slick__WEBPACK_IMPORTED_MODULE_1___default.a,
                _extends(
                  {
                    asNavFor: nav2,
                    ref: (c) => setNav1(c),
                  },
                  slider1Settings,
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 9,
                    },
                  }
                ),
                images &&
                  images.map((img, index) =>
                    __jsx(
                      "div",
                      {
                        key: index,
                        className: "slide-item",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 40,
                          columnNumber: 15,
                        },
                      },
                      __jsx("img", {
                        src: "" + img,
                        alt: "Product image",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 41,
                          columnNumber: 17,
                        },
                      })
                    )
                  )
              )
            ),
            __jsx(
              "div",
              {
                className: "product-detail-images-small",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 7,
                },
              },
              __jsx(
                react_slick__WEBPACK_IMPORTED_MODULE_1___default.a,
                _extends(
                  {
                    asNavFor: nav1,
                    ref: (c) => setNav2(c),
                  },
                  slider2Settings,
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                      columnNumber: 9,
                    },
                  }
                ),
                images &&
                  images.map((img, index) =>
                    __jsx(
                      "div",
                      {
                        key: index,
                        className: "slide-item",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 50,
                          columnNumber: 15,
                        },
                      },
                      __jsx("img", {
                        src: "" + img,
                        alt: "Product image",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 51,
                          columnNumber: 17,
                        },
                      })
                    )
                  )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            ProductDetailImages
          );

        /***/
      },

    /***/ "./src/components/detail/product/elements/ProductDetailTab.js":
      /*!********************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailTab.js ***!
  \********************************************************************/
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
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailTab.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const { TabPane } = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

        const ReviewItem = ({ data }) => {
          console.log(data);
          return __jsx(
            "div",
            {
              className: "product-detail-tab__reviews-item",
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 5,
              },
            },
            __jsx(
              "div",
              {
                className: "product-detail-tab__reviews-item__avatar",
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                  columnNumber: 7,
                },
              },
              __jsx("img", {
                src: "" + data.user.avatar,
                alt: "Customer avatar",
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11,
                  columnNumber: 9,
                },
              }),
              __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
                defaultValue: 5,
                disabled: true,
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 9,
                },
              })
            ),
            __jsx(
              "div",
              {
                className: "product-detail-tab__reviews-item__content",
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 7,
                },
              },
              __jsx(
                "h5",
                {
                  __self: undefined,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 9,
                  },
                },
                data.commentDate
              ),
              __jsx(
                "h3",
                {
                  __self: undefined,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 9,
                  },
                },
                data.user.name
              ),
              __jsx(
                "p",
                {
                  __self: undefined,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 9,
                  },
                },
                data.review
              )
            )
          );
        };

        function ProductDetailTab({
          fullDescription,
          specifications,
          reviews,
        }) {
          const onFinish = (values) => {
            console.log("Success:", values);
          };

          const onFinishFailed = (errorInfo) => {
            console.log("Failed:", errorInfo);
          };

          return __jsx(
            "div",
            {
              className: "product-detail-tab",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 5,
              },
            },
            __jsx(
              antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"],
              {
                defaultActiveKey: "1",
                type: "card",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 7,
                },
              },
              __jsx(
                TabPane,
                {
                  tab: "Description",
                  key: "1",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "div",
                  {
                    className: "product-detail-tab__description",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 11,
                    },
                  },
                  fullDescription
                )
              ),
              __jsx(
                TabPane,
                {
                  tab: "Specifications",
                  key: "2",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "div",
                  {
                    className: "product-detail-tab__specifications",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "table",
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "tbody",
                      {
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 45,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "tr",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "td",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 47,
                              columnNumber: 19,
                            },
                          },
                          "Weight"
                        ),
                        __jsx(
                          "td",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 48,
                              columnNumber: 19,
                            },
                          },
                          specifications.weight
                        )
                      ),
                      __jsx(
                        "tr",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "td",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 51,
                              columnNumber: 19,
                            },
                          },
                          "Dimensions"
                        ),
                        __jsx(
                          "td",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 52,
                              columnNumber: 19,
                            },
                          },
                          specifications.dimensions.long,
                          " x",
                          " ",
                          specifications.dimensions.width,
                          " x",
                          " ",
                          specifications.dimensions.height
                        )
                      ),
                      __jsx(
                        "tr",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "td",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 59,
                              columnNumber: 19,
                            },
                          },
                          "Color"
                        ),
                        __jsx(
                          "td",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 60,
                              columnNumber: 19,
                            },
                          },
                          specifications.color
                        )
                      ),
                      __jsx(
                        "tr",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "td",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 63,
                              columnNumber: 19,
                            },
                          },
                          "Size"
                        ),
                        __jsx(
                          "td",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 64,
                              columnNumber: 19,
                            },
                          },
                          specifications.size
                        )
                      )
                    )
                  )
                )
              ),
              __jsx(
                TabPane,
                {
                  tab: "Reviews",
                  key: "3",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "div",
                  {
                    className: "product-detail-tab__reviews",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 11,
                    },
                  },
                  reviews.map((item, index) =>
                    __jsx(ReviewItem, {
                      key: index,
                      data: item,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 15,
                      },
                    })
                  ),
                  __jsx(
                    "div",
                    {
                      className: "product-detail-tab__reviews-form",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "h5",
                      {
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76,
                          columnNumber: 15,
                        },
                      },
                      "Add Review"
                    ),
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_1__["Form"],
                      {
                        name: "review",
                        onFinish: onFinish,
                        onFinishFailed: onFinishFailed,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        antd__WEBPACK_IMPORTED_MODULE_1__["Row"],
                        {
                          gutter: 15,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                          {
                            xs: 24,
                            md: 12,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 83,
                              columnNumber: 19,
                            },
                          },
                          __jsx(
                            antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            {
                              name: "name",
                              rules: [
                                {
                                  required: true,
                                  message: "Please input your name!",
                                },
                              ],
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84,
                                columnNumber: 21,
                              },
                            },
                            __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                              placeholder: "Name",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90,
                                columnNumber: 23,
                              },
                            })
                          )
                        ),
                        __jsx(
                          antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                          {
                            xs: 24,
                            md: 12,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 93,
                              columnNumber: 19,
                            },
                          },
                          __jsx(
                            antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            {
                              name: "email",
                              rules: [
                                {
                                  required: true,
                                  message: "Please input your email!",
                                },
                              ],
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 94,
                                columnNumber: 21,
                              },
                            },
                            __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                              placeholder: "Email",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 100,
                                columnNumber: 23,
                              },
                            })
                          )
                        ),
                        __jsx(
                          antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                          {
                            span: 24,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 103,
                              columnNumber: 19,
                            },
                          },
                          __jsx(
                            antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            {
                              name: "rate",
                              label: "Your rating",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 104,
                                columnNumber: 21,
                              },
                            },
                            __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 105,
                                columnNumber: 23,
                              },
                            })
                          )
                        ),
                        __jsx(
                          antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                          {
                            span: 24,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 108,
                              columnNumber: 19,
                            },
                          },
                          __jsx(
                            antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            {
                              name: "message",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 109,
                                columnNumber: 21,
                              },
                            },
                            __jsx(
                              antd__WEBPACK_IMPORTED_MODULE_1__["Input"]
                                .TextArea,
                              {
                                placeholder: "Message",
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 110,
                                  columnNumber: 23,
                                },
                              }
                            )
                          )
                        ),
                        __jsx(
                          antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 113,
                              columnNumber: 19,
                            },
                          },
                          __jsx(
                            antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 114,
                                columnNumber: 21,
                              },
                            },
                            __jsx(
                              antd__WEBPACK_IMPORTED_MODULE_1__["Button"],
                              {
                                type: "primary",
                                htmlType: "submit",
                                shape: "round",
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 115,
                                  columnNumber: 23,
                                },
                              },
                              "Submit Review"
                            )
                          )
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
            ProductDetailTab
          );

        /***/
      },

    /***/ "./src/components/footer/FooterFluid.js":
      /*!**********************************************!*\
  !*** ./src/components/footer/FooterFluid.js ***!
  \**********************************************/
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
        /* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../other/Container */ "./src/components/other/Container.js"
          );
        /* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../data/footer-links.json */ "./src/data/footer-links.json"
          );
        var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3___namespace =
          /*#__PURE__*/ __webpack_require__.t(
            /*! ../../data/footer-links.json */ "./src/data/footer-links.json",
            1
          );
        /* harmony import */ var _elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./elements/FooterQuickLinks */ "./src/components/footer/elements/FooterQuickLinks.js"
          );
        /* harmony import */ var _elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./elements/FooterInfomation */ "./src/components/footer/elements/FooterInfomation.js"
          );
        /* harmony import */ var _elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./elements/FooterSubcribeInput */ "./src/components/footer/elements/FooterSubcribeInput.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\footer\\FooterFluid.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function FooterFluid() {
          return __jsx(
            "div",
            {
              className: "footer -fluid -style-one",
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
                _other_Container__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                  fluid: true,
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
                      lg: 6,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      _elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_5__[
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
                      lg: 13,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      _elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_4__[
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
                  ),
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                    {
                      lg: 5,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "div",
                      {
                        className: "footer-subcribe",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 24,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "div",
                        {
                          className: "footer-subcribe__content",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "h5",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 26,
                              columnNumber: 19,
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
                              lineNumber: 27,
                              columnNumber: 19,
                            },
                          },
                          "Get E-mail updates about our latest shop and special offers."
                        )
                      ),
                      __jsx(
                        _elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_6__[
                          "default"
                        ],
                        {
                          url: "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31,
                            columnNumber: 17,
                          },
                        }
                      )
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
                  lineNumber: 37,
                  columnNumber: 7,
                },
              },
              __jsx(
                _other_Container__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                  fluid: true,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38,
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
                      lineNumber: 39,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "p",
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40,
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
                      lineNumber: 41,
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
            FooterFluid
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

    /***/ "./src/components/header/HeaderTwo.js":
      /*!********************************************!*\
  !*** ./src/components/header/HeaderTwo.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return HeaderTwo;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _menu_MenuTwo__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./menu/MenuTwo */ "./src/components/header/menu/MenuTwo.js"
          );
        /* harmony import */ var _top_nav_TopNavOne__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./top-nav/TopNavOne */ "./src/components/header/top-nav/TopNavOne.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\HeaderTwo.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function HeaderTwo() {
          return __jsx(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            __jsx(_top_nav_TopNavOne__WEBPACK_IMPORTED_MODULE_2__["default"], {
              containerFluid: true,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 7,
              },
            }),
            __jsx(_menu_MenuTwo__WEBPACK_IMPORTED_MODULE_1__["default"], {
              containerFluid: true,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10,
                columnNumber: 7,
              },
            })
          );
        }

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

    /***/ "./src/components/header/menu/MenuTwo.js":
      /*!***********************************************!*\
  !*** ./src/components/header/menu/MenuTwo.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return MenuTwo;
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
        /* harmony import */ var _elements_SearchForm__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../elements/SearchForm */ "./src/components/header/elements/SearchForm.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\header\\menu\\MenuTwo.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function MenuTwo({ containerFluid }) {
          return __jsx(
            "div",
            {
              className: "menu -style-two",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 5,
              },
            },
            __jsx(
              _other_Container__WEBPACK_IMPORTED_MODULE_2__["default"],
              {
                fluid: containerFluid,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13,
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
                    lineNumber: 14,
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
                      lineNumber: 15,
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
                      lineNumber: 16,
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
                        lineNumber: 17,
                        columnNumber: 13,
                      },
                    },
                    __jsx("img", {
                      src: "" + "/assets/images/logo.png",
                      alt: "Ogami logo",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18,
                        columnNumber: 15,
                      },
                    })
                  )
                ),
                __jsx(
                  _elements_SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"],
                  {
                    enterButton: __jsx("i", {
                      className: "icon_search",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24,
                        columnNumber: 36,
                      },
                    }),
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24,
                      columnNumber: 11,
                    },
                  }
                ),
                __jsx(
                  _elements_Navigator__WEBPACK_IMPORTED_MODULE_3__["default"],
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25,
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
                      lineNumber: 26,
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

    /***/ "./src/components/layout/LayoutTwo.js":
      /*!********************************************!*\
  !*** ./src/components/layout/LayoutTwo.js ***!
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
        /* harmony import */ var _header_HeaderTwo__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../header/HeaderTwo */ "./src/components/header/HeaderTwo.js"
          );
        /* harmony import */ var _common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../common/withHeaderScroll */ "./src/common/withHeaderScroll.js"
          );
        /* harmony import */ var _footer_FooterFluid__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../footer/FooterFluid */ "./src/components/footer/FooterFluid.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\layout\\LayoutTwo.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const ScrolledHeader = Object(
          _common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_4__["default"]
        )(_header_HeaderTwo__WEBPACK_IMPORTED_MODULE_3__["default"]);

        function LayoutOne({ title, children }) {
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
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 7,
              },
            }),
            children,
            __jsx(_footer_FooterFluid__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

    /***/ "./src/components/other/Benefits.js":
      /*!******************************************!*\
  !*** ./src/components/other/Benefits.js ***!
  \******************************************/
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
        /* harmony import */ var _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../data/benefits.json */ "./src/data/benefits.json"
          );
        var _data_benefits_json__WEBPACK_IMPORTED_MODULE_3___namespace =
          /*#__PURE__*/ __webpack_require__.t(
            /*! ../../data/benefits.json */ "./src/data/benefits.json",
            1
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\other\\Benefits.js";
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

        function Benefits({
          containerFluid,
          column,
          threeCol,
          style,
          className,
        }) {
          const renderCol = () => {
            return threeCol
              ? {
                  xs: 24,
                  md: 8,
                }
              : column
              ? {
                  xs: 24,
                  sm: 12,
                  md: 6,
                  lg: 24,
                }
              : {
                  xs: 24,
                  md: 6,
                };
          };

          const col = renderCol();
          return __jsx(
            "div",
            {
              className: `benefits ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                className,
                {
                  "-column": column,
                }
              )}`,
              style: style,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 5,
              },
            },
            __jsx(
              "div",
              {
                className: "benefits-wrapper",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_1__["Row"],
                {
                  gutter: 10,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 9,
                  },
                },
                _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__
                  .slice(
                    0,
                    threeCol
                      ? 3
                      : _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__.length
                  )
                  .map((item, index) =>
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                      _extends(
                        {
                          key: index,
                        },
                        renderCol(),
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26,
                            columnNumber: 15,
                          },
                        }
                      ),
                      __jsx(
                        "div",
                        {
                          className: "benefits-item",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27,
                            columnNumber: 17,
                          },
                        },
                        __jsx("img", {
                          className: "benefits-item__image",
                          src: "" + item.iconSrc,
                          alt: "Benefit icon",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28,
                            columnNumber: 19,
                          },
                        }),
                        __jsx(
                          "h5",
                          {
                            className: "benefits-item__title",
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 33,
                              columnNumber: 19,
                            },
                          },
                          item.name
                        ),
                        __jsx(
                          "p",
                          {
                            className: "benefits-item__description",
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 34,
                              columnNumber: 19,
                            },
                          },
                          item.description
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
            Benefits
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

    /***/ "./src/components/other/QuantitySelector.js":
      /*!**************************************************!*\
  !*** ./src/components/other/QuantitySelector.js ***!
  \**************************************************/
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
        /* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../common/useDebound */ "./src/common/useDebound.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\other\\QuantitySelector.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function QuantitySelector({
          min,
          max,
          defaultValue = 1,
          className,
          onChange,
          onDecrease,
          onIncrease,
        }) {
          const firstUpdate = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useRef"]
          )(true);
          const { 0: value, 1: setValue } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )(defaultValue);
          const deboundValue = Object(
            _common_useDebound__WEBPACK_IMPORTED_MODULE_3__["default"]
          )(value, 300);
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
          const decreaseValue = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]
          )(() => {
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
          const increaseValue = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]
          )(() => {
            if (value >= max) {
              return;
            }

            onIncrease && onIncrease();
            setValue(value + 1);
          }, [value]);
          return __jsx(
            "div",
            {
              className: `quantity-selector ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                className
              )}`,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 5,
              },
            },
            __jsx(
              "div",
              {
                className: "quantity-selector-number",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 7,
                },
              },
              value
            ),
            __jsx(
              "div",
              {
                className: "quantity-selector-controller",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_1__["Button"],
                {
                  type: "link",
                  disabled: value <= min || value <= 1,
                  onClick: decreaseValue,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 9,
                  },
                },
                "-"
              ),
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_1__["Button"],
                {
                  type: "link",
                  disabled: value >= max,
                  onClick: increaseValue,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 9,
                  },
                },
                "+"
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            QuantitySelector
          );

        /***/
      },

    /***/ "./src/components/other/SectionTitle.js":
      /*!**********************************************!*\
  !*** ./src/components/other/SectionTitle.js ***!
  \**********************************************/
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
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! classnames */ "classnames");
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            classnames__WEBPACK_IMPORTED_MODULE_1__
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\other\\SectionTitle.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function SectionTitle({ title, hideDecoration, className, style }) {
          return __jsx(
            "div",
            {
              className: `section-title ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                className
              )}`,
              style: style,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 6,
                columnNumber: 5,
              },
            },
            __jsx(
              "h2",
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7,
                  columnNumber: 7,
                },
              },
              title
            ),
            !hideDecoration &&
              __jsx("div", {
                className: "section-title-decoration",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                  columnNumber: 27,
                },
              })
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            SectionTitle
          );

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

    /***/ "./src/components/product/Product.js":
      /*!*******************************************!*\
  !*** ./src/components/product/Product.js ***!
  \*******************************************/
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
        /* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! react-countdown */ "react-countdown");
        /* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_countdown__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! classnames */ "classnames");
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            classnames__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
        /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(
            _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__
          );
        /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../common/utils */ "./src/common/utils.js"
          );
        /* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../common/shopUtils */ "./src/common/shopUtils.js"
          );
        /* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js"
          );
        /* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js"
          );
        /* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js"
          );
        /* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../../common/cartServices */ "./src/common/cartServices.js"
          );
        /* harmony import */ var _common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../../common/wishlistServices */ "./src/common/wishlistServices.js"
          );
        /* harmony import */ var _detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ../detail/product/ProductDetailLayout */ "./src/components/detail/product/ProductDetailLayout.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\product\\Product.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Product({ data, className, type, countdownLast = 100000000 }) {
          const dispatch = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]
          )();
          const { 0: modalVisible, 1: setModalVisible } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )(false);
          const { 0: addToCartLoading, 1: setAddToCartLoading } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__["useState"]
          )(false);
          const { 0: addToWishlistLoading, 1: setAddToWishlistLoading } =
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
          const cartState = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]
          )((state) => state.cartReducer);
          const wishlistState = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]
          )((state) => state.wishlistReducer);
          const compareState = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]
          )((state) => state.compareReducer);
          const productInWishlist = Object(
            _common_shopUtils__WEBPACK_IMPORTED_MODULE_8__[
              "checkProductInWishlist"
            ]
          )(wishlistState.data, data.id);
          const productInCompare = Object(
            _common_shopUtils__WEBPACK_IMPORTED_MODULE_8__[
              "checkProductInWishlist"
            ]
          )(compareState, data.id);

          const showModal = () => {
            setModalVisible(true);
          };

          const onModalClose = (e) => {
            setModalVisible(false);
          };

          const onAddToCart = (product) => {
            if (addToCartLoading) {
              return;
            }

            setAddToCartLoading(true);
            Object(
              _common_cartServices__WEBPACK_IMPORTED_MODULE_12__[
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
                    _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__[
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

          const onAddWishlist = (product) => {
            if (addToWishlistLoading) {
              return;
            }

            setAddToWishlistLoading(true);

            if (!productInWishlist) {
              Object(
                _common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__[
                  "onAddProductToWishlist"
                ]
              )({
                product,
                onSuccess: (data) => {
                  setAddToWishlistLoading(false);
                  antd__WEBPACK_IMPORTED_MODULE_2__["message"].success(
                    "Product added to wishlist"
                  );
                  dispatch(
                    Object(
                      _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__[
                        "fetchWishListRequest"
                      ]
                    )()
                  );
                },
                onError: (mes, err) => {
                  setAddToWishlistLoading(false);
                  antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
                  console.log(err);
                },
              });
            } else {
              Object(
                _common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__[
                  "onRemoveProductFromWishlist"
                ]
              )({
                productId: product.id,
                onSuccess: (data) => {
                  setAddToWishlistLoading(false);
                  antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(
                    "Product removed from wishlist"
                  );
                  dispatch(
                    Object(
                      _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__[
                        "fetchWishListRequest"
                      ]
                    )()
                  );
                },
                onError: (mes, err) => {
                  setAddToWishlistLoading(false);
                  antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
                  console.log(err);
                },
              });
            }
          };

          const onAddToCompare = (product) => {
            if (productInCompare) {
              dispatch(
                Object(
                  _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__[
                    "removeFromCompare"
                  ]
                )(product.id)
              );
              antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(
                "Product removed from compare"
              );
            } else {
              dispatch(
                Object(
                  _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__[
                    "addToCompare"
                  ]
                )(product)
              );
              antd__WEBPACK_IMPORTED_MODULE_2__["message"].success(
                "Product added to compare"
              );
            }
          };

          const getRandomArbitrary = (min, max) => {
            return Math.random() * (max - min) + min;
          };

          const rederProductType = (type) => {
            switch (type) {
              case "tiny":
                return __jsx(
                  "div",
                  {
                    className: `product-tiny ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(
                      className
                    )}`,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "div",
                    {
                      className: "product-tiny-img",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                      {
                        href: "" + `/product/[slug]`,
                        as: "" + `/product/${data.slug}`,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 111,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "a",
                        {
                          title: data.name,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 115,
                            columnNumber: 17,
                          },
                        },
                        __jsx("img", {
                          src: data.coverImage,
                          alt: "Product image",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 116,
                            columnNumber: 19,
                          },
                        })
                      )
                    )
                  ),
                  __jsx(
                    "div",
                    {
                      className: "product-tiny-content",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                      {
                        href: "" + `/product/[slug]`,
                        as: "" + `/product/${data.slug}`,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 121,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "a",
                        {
                          className: "product-tiny-name",
                          title: "Pure Pineapple",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 125,
                            columnNumber: 17,
                          },
                        },
                        data.name
                      )
                    ),
                    __jsx(
                      "h3",
                      {
                        className: "product-tiny-price",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 129,
                          columnNumber: 15,
                        },
                      },
                      data.discount
                        ? Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                              "formatCurrency"
                            ]
                          )(data.price - data.discount)
                        : Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                              "formatCurrency"
                            ]
                          )(data.price),
                      data.discount &&
                        __jsx(
                          "del",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 133,
                              columnNumber: 35,
                            },
                          },
                          Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                              "formatCurrency"
                            ]
                          )(data.price)
                        )
                    )
                  )
                );

              case "dale":
                return __jsx(
                  "div",
                  {
                    className: `product-dale ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(
                      className
                    )}`,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "div",
                    {
                      className: "product-dale-img",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 141,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                      {
                        href: "" + `/product/[slug]`,
                        as: "" + `/product/${data.slug}`,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 142,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "a",
                        {
                          title: data.name,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 146,
                            columnNumber: 17,
                          },
                        },
                        __jsx("img", {
                          src: data.coverImage,
                          alt: "Product image",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 147,
                            columnNumber: 19,
                          },
                        })
                      )
                    )
                  ),
                  __jsx(
                    react_countdown__WEBPACK_IMPORTED_MODULE_4___default.a,
                    {
                      date:
                        Date.now() + getRandomArbitrary(100000000, 150000000),
                      renderer: ({ days, hours, minutes, seconds }) => {
                        return __jsx(
                          "div",
                          {
                            className: "product-dale-countdown",
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 156,
                              columnNumber: 19,
                            },
                          },
                          __jsx(
                            "div",
                            {
                              className: "product-dale-countdown-item",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 157,
                                columnNumber: 21,
                              },
                            },
                            __jsx(
                              "h6",
                              {
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 158,
                                  columnNumber: 23,
                                },
                              },
                              Object(
                                react_countdown__WEBPACK_IMPORTED_MODULE_4__[
                                  "zeroPad"
                                ]
                              )(days)
                            ),
                            " ",
                            __jsx(
                              "span",
                              {
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 158,
                                  columnNumber: 48,
                                },
                              },
                              "days"
                            )
                          ),
                          __jsx(
                            "div",
                            {
                              className: "product-dale-countdown-item",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 160,
                                columnNumber: 21,
                              },
                            },
                            __jsx(
                              "h6",
                              {
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 161,
                                  columnNumber: 23,
                                },
                              },
                              Object(
                                react_countdown__WEBPACK_IMPORTED_MODULE_4__[
                                  "zeroPad"
                                ]
                              )(hours)
                            ),
                            " ",
                            __jsx(
                              "span",
                              {
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 161,
                                  columnNumber: 49,
                                },
                              },
                              "hr"
                            )
                          ),
                          __jsx(
                            "div",
                            {
                              className: "product-dale-countdown-item",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 163,
                                columnNumber: 21,
                              },
                            },
                            __jsx(
                              "h6",
                              {
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 164,
                                  columnNumber: 23,
                                },
                              },
                              Object(
                                react_countdown__WEBPACK_IMPORTED_MODULE_4__[
                                  "zeroPad"
                                ]
                              )(minutes),
                              " "
                            ),
                            __jsx(
                              "span",
                              {
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 165,
                                  columnNumber: 23,
                                },
                              },
                              "min"
                            )
                          ),
                          __jsx(
                            "div",
                            {
                              className: "product-dale-countdown-item",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 167,
                                columnNumber: 21,
                              },
                            },
                            __jsx(
                              "h6",
                              {
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 168,
                                  columnNumber: 23,
                                },
                              },
                              Object(
                                react_countdown__WEBPACK_IMPORTED_MODULE_4__[
                                  "zeroPad"
                                ]
                              )(seconds)
                            ),
                            " ",
                            __jsx(
                              "span",
                              {
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 168,
                                  columnNumber: 51,
                                },
                              },
                              "sec"
                            )
                          )
                        );
                      },
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 13,
                      },
                    }
                  ),
                  __jsx(
                    "div",
                    {
                      className: "product-dale-content",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 174,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "h5",
                      {
                        className: "product-dale-type",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 175,
                          columnNumber: 15,
                        },
                      },
                      data.category
                    ),
                    __jsx(
                      next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                      {
                        href: "" + `/product/[slug]`,
                        as: "" + `/product/${data.slug}`,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 176,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "a",
                        {
                          className: "product-dale-name",
                          title: "Pure Pineapple",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 180,
                            columnNumber: 17,
                          },
                        },
                        data.name
                      )
                    ),
                    __jsx(
                      "h3",
                      {
                        className: "product-dale-price",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 15,
                        },
                      },
                      data.discount
                        ? Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                              "formatCurrency"
                            ]
                          )(data.price - data.discount)
                        : Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                              "formatCurrency"
                            ]
                          )(data.price),
                      data.discount &&
                        __jsx(
                          "del",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 188,
                              columnNumber: 35,
                            },
                          },
                          Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                              "formatCurrency"
                            ]
                          )(data.price)
                        )
                    )
                  ),
                  __jsx(
                    "div",
                    {
                      className: "product-dale-select",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 191,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                      {
                        title: "Add to wishlist",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 192,
                          columnNumber: 15,
                        },
                      },
                      __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                        onClick: () => onAddWishlist(data),
                        className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(
                          {
                            active: productInWishlist,
                          }
                        )}`,
                        type: "primary",
                        shape: "round",
                        icon: addToWishlistLoading
                          ? __jsx(
                              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__[
                                "LoadingOutlined"
                              ],
                              {
                                spin: true,
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 202,
                                  columnNumber: 23,
                                },
                              }
                            )
                          : __jsx("i", {
                              className: "far fa-heart",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 204,
                                columnNumber: 23,
                              },
                            }),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 193,
                          columnNumber: 17,
                        },
                      })
                    ),
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                      {
                        title: "Add to cart",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 209,
                          columnNumber: 15,
                        },
                      },
                      __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                        onClick: () => onAddToCart(data),
                        className: "product-btn",
                        type: "primary",
                        shape: "round",
                        icon: addToCartLoading
                          ? __jsx(
                              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__[
                                "LoadingOutlined"
                              ],
                              {
                                spin: true,
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 217,
                                  columnNumber: 23,
                                },
                              }
                            )
                          : __jsx("i", {
                              className: "far fa-shopping-bag",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 219,
                                columnNumber: 23,
                              },
                            }),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 210,
                          columnNumber: 17,
                        },
                      })
                    ),
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                      {
                        title: "Add to compare",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 224,
                          columnNumber: 15,
                        },
                      },
                      __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                        onClick: () => onAddToCompare(data),
                        className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(
                          {
                            active: productInCompare,
                          }
                        )}`,
                        type: "primary",
                        shape: "round",
                        icon: __jsx("i", {
                          className: "far fa-random",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 232,
                            columnNumber: 25,
                          },
                        }),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 225,
                          columnNumber: 17,
                        },
                      })
                    ),
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                      {
                        title: "Quick view",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 235,
                          columnNumber: 15,
                        },
                      },
                      __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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
                            columnNumber: 25,
                          },
                        }),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 236,
                          columnNumber: 17,
                        },
                      })
                    )
                  )
                );

              case "list":
                return __jsx(
                  "div",
                  {
                    className: "product-list",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "div",
                    {
                      className: "product-img",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 250,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                      {
                        href: "" + `/product/[slug]`,
                        as: "" + `/product/${data.slug}`,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 251,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "a",
                        {
                          title: data.name,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 255,
                            columnNumber: 17,
                          },
                        },
                        __jsx("img", {
                          src: data.coverImage,
                          alt: "Product image",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 256,
                            columnNumber: 19,
                          },
                        })
                      )
                    ),
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_2__["Button"],
                      {
                        type: "primary",
                        onClick: showModal,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 259,
                          columnNumber: 15,
                        },
                      },
                      "Quick view"
                    )
                  ),
                  __jsx(
                    "div",
                    {
                      className: "product-list-content",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 263,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "h5",
                      {
                        className: "product-type",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 264,
                          columnNumber: 15,
                        },
                      },
                      data.category
                    ),
                    __jsx(
                      next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                      {
                        href: "" + `/product/[slug]`,
                        as: "" + `/product/${data.slug}`,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 265,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "a",
                        {
                          className: "product-name",
                          title: "Pure Pineapple",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 269,
                            columnNumber: 17,
                          },
                        },
                        data.name
                      )
                    ),
                    __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
                      className: "product-rate",
                      disabled: true,
                      defaultValue: data.rate,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 273,
                        columnNumber: 15,
                      },
                    }),
                    __jsx(
                      "p",
                      {
                        className: "product-description",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 278,
                          columnNumber: 15,
                        },
                      },
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor niam"
                    ),
                    data.quantity > 0
                      ? __jsx(
                          "h5",
                          {
                            className: "product-availability -instock",
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 283,
                              columnNumber: 17,
                            },
                          },
                          "Availability: ",
                          __jsx(
                            "span",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 284,
                                columnNumber: 33,
                              },
                            },
                            " ",
                            data.quantity,
                            " in stock"
                          )
                        )
                      : __jsx(
                          "h5",
                          {
                            className: "product-availability -outstock",
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 287,
                              columnNumber: 17,
                            },
                          },
                          "Availability: ",
                          __jsx(
                            "span",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 288,
                                columnNumber: 33,
                              },
                            },
                            " Out stock"
                          )
                        )
                  ),
                  __jsx(
                    "div",
                    {
                      className: "product-list-actions",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 292,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "div",
                      {
                        className: "product-detail-content__delivery",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 293,
                          columnNumber: 15,
                        },
                      },
                      "Free delivery"
                    ),
                    __jsx(
                      "h3",
                      {
                        className: "product-detail-content__price",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 296,
                          columnNumber: 15,
                        },
                      },
                      data.discount &&
                        __jsx(
                          "del",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 297,
                              columnNumber: 35,
                            },
                          },
                          Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                              "formatCurrency"
                            ]
                          )(data.price)
                        ),
                      __jsx(
                        "div",
                        {
                          className: "product-detail-content__price-discount",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 298,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "h5",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 299,
                              columnNumber: 19,
                            },
                          },
                          data.discount
                            ? Object(
                                _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                                  "formatCurrency"
                                ]
                              )(data.price - data.discount)
                            : Object(
                                _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                                  "formatCurrency"
                                ]
                              )(data.price)
                        )
                      )
                    ),
                    __jsx(
                      "div",
                      {
                        className: "product-detail-content__actions",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 306,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        antd__WEBPACK_IMPORTED_MODULE_2__["Button"],
                        {
                          onClick: () => onAddToCart(data),
                          loading: addToCartLoading,
                          shape: "round",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 307,
                            columnNumber: 17,
                          },
                        },
                        "Add to cart"
                      ),
                      __jsx(
                        antd__WEBPACK_IMPORTED_MODULE_2__["Button"],
                        {
                          onClick: () => onAddToCompare(data),
                          shape: "round",
                          className:
                            classnames__WEBPACK_IMPORTED_MODULE_5___default()({
                              active: productInCompare,
                            }),
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 314,
                            columnNumber: 17,
                          },
                        },
                        "Add to compare"
                      )
                    )
                  )
                );

              default:
                return __jsx(
                  "div",
                  {
                    className: `product ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(
                      className
                    )}`,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 329,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "div",
                    {
                      className: "product-img",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 330,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                      {
                        href: "" + `/product/[slug]`,
                        as: "" + `/product/${data.slug}`,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 331,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "a",
                        {
                          title: data.name,
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 335,
                            columnNumber: 17,
                          },
                        },
                        __jsx("img", {
                          src: data.coverImage,
                          alt: "Product image",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 336,
                            columnNumber: 19,
                          },
                        })
                      )
                    )
                  ),
                  __jsx(
                    "div",
                    {
                      className: "product-content",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 340,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "h5",
                      {
                        className: "product-type",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 341,
                          columnNumber: 15,
                        },
                      },
                      data.category
                    ),
                    __jsx(
                      next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                      {
                        href: "" + `/product/[slug]`,
                        as: "" + `/product/${data.slug}`,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 342,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "a",
                        {
                          className: "product-name",
                          title: "Pure Pineapple",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 346,
                            columnNumber: 17,
                          },
                        },
                        data.name
                      )
                    ),
                    __jsx(
                      "h3",
                      {
                        className: "product-price",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 350,
                          columnNumber: 15,
                        },
                      },
                      data.discount
                        ? Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                              "formatCurrency"
                            ]
                          )(data.price - data.discount)
                        : Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                              "formatCurrency"
                            ]
                          )(data.price),
                      data.discount &&
                        __jsx(
                          "del",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 354,
                              columnNumber: 35,
                            },
                          },
                          Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_7__[
                              "formatCurrency"
                            ]
                          )(data.price)
                        )
                    )
                  ),
                  __jsx(
                    "div",
                    {
                      className: "product-select",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 357,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                      {
                        title: "Add to wishlist",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 358,
                          columnNumber: 15,
                        },
                      },
                      __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                        onClick: () => onAddWishlist(data),
                        className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(
                          {
                            active: productInWishlist,
                          }
                        )}`,
                        type: "primary",
                        shape: "round",
                        icon: addToWishlistLoading
                          ? __jsx(
                              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__[
                                "LoadingOutlined"
                              ],
                              {
                                spin: true,
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 368,
                                  columnNumber: 23,
                                },
                              }
                            )
                          : __jsx("i", {
                              className: "far fa-heart",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 370,
                                columnNumber: 23,
                              },
                            }),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 359,
                          columnNumber: 17,
                        },
                      })
                    ),
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                      {
                        title: "Add to cart",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 375,
                          columnNumber: 15,
                        },
                      },
                      __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                        onClick: () => onAddToCart(data),
                        className: "product-btn",
                        type: "primary",
                        shape: "round",
                        icon: addToCartLoading
                          ? __jsx(
                              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__[
                                "LoadingOutlined"
                              ],
                              {
                                spin: true,
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 383,
                                  columnNumber: 23,
                                },
                              }
                            )
                          : __jsx("i", {
                              className: "far fa-shopping-bag",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 385,
                                columnNumber: 23,
                              },
                            }),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 376,
                          columnNumber: 17,
                        },
                      })
                    ),
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                      {
                        title: "Add to compare",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 390,
                          columnNumber: 15,
                        },
                      },
                      __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                        onClick: () => onAddToCompare(data),
                        className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(
                          {
                            active: productInCompare,
                          }
                        )}`,
                        type: "primary",
                        shape: "round",
                        icon: __jsx("i", {
                          className: "far fa-random",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 398,
                            columnNumber: 25,
                          },
                        }),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 391,
                          columnNumber: 17,
                        },
                      })
                    ),
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                      {
                        title: "Quick view",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 401,
                          columnNumber: 15,
                        },
                      },
                      __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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
                            columnNumber: 25,
                          },
                        }),
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 402,
                          columnNumber: 17,
                        },
                      })
                    )
                  )
                );
            }
          };

          return __jsx(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            rederProductType(type),
            __jsx(
              antd__WEBPACK_IMPORTED_MODULE_2__["Modal"],
              {
                visible: modalVisible,
                onCancel: onModalClose,
                footer: null,
                header: null,
                width: 860,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 418,
                  columnNumber: 7,
                },
              },
              __jsx(
                _detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__[
                  "default"
                ],
                {
                  style: {
                    marginBottom: 0,
                  },
                  hideTab: true,
                  data: data,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 425,
                    columnNumber: 9,
                  },
                }
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            Product
          );

        /***/
      },

    /***/ "./src/components/sections/banner/BannerOne.js":
      /*!*****************************************************!*\
  !*** ./src/components/sections/banner/BannerOne.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../other/Container */ "./src/components/other/Container.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\sections\\banner\\BannerOne.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

        function BannerOne({ data }) {
          return __jsx(
            "div",
            {
              className: "banner-one",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8,
                columnNumber: 5,
              },
            },
            __jsx(
              _other_Container__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                fluid: true,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_0__["Row"],
                {
                  gutter: [30, 30],
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10,
                    columnNumber: 9,
                  },
                },
                data.map((item, index) =>
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_0__["Col"],
                    {
                      key: index,
                      sm: 24,
                      lg: 12,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      "div",
                      {
                        className: "banner-one-item up-down-anim-hover",
                        style: {
                          backgroundImage: `url('${"" + item.background}')`,
                        },
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 13,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        antd__WEBPACK_IMPORTED_MODULE_0__["Row"],
                        {
                          align: "middle",
                          justify: "space-around",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          antd__WEBPACK_IMPORTED_MODULE_0__["Col"],
                          {
                            sm: 24,
                            md: 10,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 22,
                              columnNumber: 19,
                            },
                          },
                          __jsx(
                            "div",
                            {
                              className: "banner-one-item__img",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23,
                                columnNumber: 21,
                              },
                            },
                            __jsx("img", {
                              src: "" + item.image,
                              alt: "Introduction image",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24,
                                columnNumber: 23,
                              },
                            })
                          )
                        ),
                        __jsx(
                          antd__WEBPACK_IMPORTED_MODULE_0__["Col"],
                          {
                            sm: 24,
                            md: 8,
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 30,
                              columnNumber: 19,
                            },
                          },
                          __jsx(
                            "div",
                            {
                              className: "banner-one-item__content",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31,
                                columnNumber: 21,
                              },
                            },
                            __jsx(
                              "p",
                              {
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 32,
                                  columnNumber: 23,
                                },
                              },
                              item.content.main,
                              __jsx(
                                "span",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 34,
                                    columnNumber: 25,
                                  },
                                },
                                " ",
                                item.content.span
                              )
                            ),
                            __jsx(
                              antd__WEBPACK_IMPORTED_MODULE_0__["Button"],
                              {
                                type: "primary",
                                shape: "round",
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 36,
                                  columnNumber: 23,
                                },
                              },
                              __jsx(
                                next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                                {
                                  href: "" + "/shop/shop-3-column",
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 37,
                                    columnNumber: 25,
                                  },
                                },
                                __jsx(
                                  "a",
                                  {
                                    href: "" + "/shop/shop-3-column",
                                    __self: this,
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 40,
                                      columnNumber: 27,
                                    },
                                  },
                                  "Shop now"
                                )
                              )
                            )
                          )
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
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(
            BannerOne
          );

        /***/
      },

    /***/ "./src/components/sections/dale-of-week/DowTwo.js":
      /*!********************************************************!*\
  !*** ./src/components/sections/dale-of-week/DowTwo.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! react-countdown */ "react-countdown");
        /* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_countdown__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../other/Container */ "./src/components/other/Container.js"
          );
        /* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\sections\\dale-of-week\\DowTwo.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

        function DowTwo({ countdownLast }) {
          return __jsx(
            "div",
            {
              className: "dow-two",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 5,
              },
            },
            __jsx(
              _other_Container__WEBPACK_IMPORTED_MODULE_4__["default"],
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 7,
                },
              },
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_0__["Row"],
                {
                  align: "middle",
                  justify: "space-between",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_0__["Col"],
                  {
                    sm: 24,
                    lg: 12,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    "div",
                    {
                      className: "dow-two-content",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      _other_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ],
                      {
                        title: "Deal Of The Week",
                        hideDecoration: true,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 16,
                          columnNumber: 15,
                        },
                      }
                    ),
                    __jsx(
                      "p",
                      {
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 17,
                          columnNumber: 15,
                        },
                      },
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elitt incididunt ut labore"
                    ),
                    __jsx(
                      react_countdown__WEBPACK_IMPORTED_MODULE_3___default.a,
                      {
                        date: Date.now() + countdownLast,
                        renderer: ({ days, hours, minutes, seconds }) => {
                          return __jsx(
                            "div",
                            {
                              className: "dow-two-countdown",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25,
                                columnNumber: 21,
                              },
                            },
                            __jsx(
                              "div",
                              {
                                className: "dow-two-countdown-item",
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 26,
                                  columnNumber: 23,
                                },
                              },
                              __jsx(
                                "h6",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27,
                                    columnNumber: 25,
                                  },
                                },
                                Object(
                                  react_countdown__WEBPACK_IMPORTED_MODULE_3__[
                                    "zeroPad"
                                  ]
                                )(days)
                              ),
                              " ",
                              __jsx(
                                "span",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27,
                                    columnNumber: 50,
                                  },
                                },
                                "days"
                              )
                            ),
                            __jsx(
                              "div",
                              {
                                className: "dow-two-countdown-item",
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 29,
                                  columnNumber: 23,
                                },
                              },
                              __jsx(
                                "h6",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 30,
                                    columnNumber: 25,
                                  },
                                },
                                Object(
                                  react_countdown__WEBPACK_IMPORTED_MODULE_3__[
                                    "zeroPad"
                                  ]
                                )(hours)
                              ),
                              " ",
                              __jsx(
                                "span",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 30,
                                    columnNumber: 51,
                                  },
                                },
                                "hr"
                              )
                            ),
                            __jsx(
                              "div",
                              {
                                className: "dow-two-countdown-item",
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 32,
                                  columnNumber: 23,
                                },
                              },
                              __jsx(
                                "h6",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 33,
                                    columnNumber: 25,
                                  },
                                },
                                Object(
                                  react_countdown__WEBPACK_IMPORTED_MODULE_3__[
                                    "zeroPad"
                                  ]
                                )(minutes),
                                " "
                              ),
                              __jsx(
                                "span",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 34,
                                    columnNumber: 25,
                                  },
                                },
                                "min"
                              )
                            ),
                            __jsx(
                              "div",
                              {
                                className: "dow-two-countdown-item",
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 36,
                                  columnNumber: 23,
                                },
                              },
                              __jsx(
                                "h6",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 37,
                                    columnNumber: 25,
                                  },
                                },
                                Object(
                                  react_countdown__WEBPACK_IMPORTED_MODULE_3__[
                                    "zeroPad"
                                  ]
                                )(seconds)
                              ),
                              " ",
                              __jsx(
                                "span",
                                {
                                  __self: this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 37,
                                    columnNumber: 53,
                                  },
                                },
                                "sec"
                              )
                            )
                          );
                        },
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 21,
                          columnNumber: 15,
                        },
                      }
                    ),
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_0__["Button"],
                      {
                        type: "primary",
                        shape: "round",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 43,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                        {
                          href: "" + "/shop/shop-3-column",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "a",
                          {
                            href: "" + "/shop/shop-3-column",
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 45,
                              columnNumber: 19,
                            },
                          },
                          "Shop now"
                        )
                      )
                    )
                  )
                ),
                __jsx(
                  antd__WEBPACK_IMPORTED_MODULE_0__["Col"],
                  {
                    lg: 10,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 11,
                    },
                  },
                  " ",
                  __jsx(
                    "div",
                    {
                      className: "dow-two-img up-down-anim",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 13,
                      },
                    },
                    __jsx("img", {
                      src:
                        "" + "/assets/images/sections/dale-of-week/two/1.png",
                      alt: "Dale of the week image",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 15,
                      },
                    })
                  )
                )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(
            DowTwo
          );

        /***/
      },

    /***/ "./src/components/sections/hero-slider/HeroSliderTwo.js":
      /*!**************************************************************!*\
  !*** ./src/components/sections/hero-slider/HeroSliderTwo.js ***!
  \**************************************************************/
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
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../other/Container */ "./src/components/other/Container.js"
          );
        /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../common/utils */ "./src/common/utils.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\sections\\hero-slider\\HeroSliderTwo.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function HeroSliderTwo({ containerFluid, data }) {
          return __jsx(
            "div",
            {
              className: "hero-slider -single -style-two",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10,
                columnNumber: 5,
              },
            },
            __jsx(
              _other_Container__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                fluid: containerFluid,
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
                  className: "hero-slider-wrapper",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  "div",
                  {
                    className: "hero-slider-background",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 13,
                      columnNumber: 11,
                    },
                  },
                  __jsx("img", {
                    src: "" + data.background,
                    alt: "Hero slider background image",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14,
                      columnNumber: 13,
                    },
                  })
                ),
                __jsx(
                  "div",
                  {
                    className: "hero-slider-content-wrapper",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_1__["Row"],
                    {
                      justify: "center",
                      align: "middle",
                      gutter: 30,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                      {
                        sm: 8,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 21,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "div",
                        {
                          className: "hero-slider-content",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          "h5",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 23,
                              columnNumber: 19,
                            },
                          },
                          data.subTitle
                        ),
                        __jsx(
                          "h1",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 24,
                              columnNumber: 19,
                            },
                          },
                          data.title
                        ),
                        __jsx(
                          "h3",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 25,
                              columnNumber: 19,
                            },
                          },
                          Object(
                            _common_utils__WEBPACK_IMPORTED_MODULE_4__[
                              "formatCurrency"
                            ]
                          )(data.price.main),
                          __jsx(
                            "span",
                            {
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27,
                                columnNumber: 21,
                              },
                            },
                            "/",
                            data.price.unit
                          )
                        ),
                        __jsx(
                          antd__WEBPACK_IMPORTED_MODULE_1__["Button"],
                          {
                            type: "primary",
                            shape: "round",
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 29,
                              columnNumber: 19,
                            },
                          },
                          __jsx(
                            next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                            {
                              href: "" + "/shop/shop-3-column",
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30,
                                columnNumber: 21,
                              },
                            },
                            __jsx(
                              "a",
                              {
                                href: "" + "/shop/shop-3-column",
                                __self: this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 31,
                                  columnNumber: 23,
                                },
                              },
                              "Shop now"
                            )
                          )
                        )
                      )
                    ),
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                      {
                        sm: 8,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        "div",
                        {
                          className: "hero-slider-image",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39,
                            columnNumber: 17,
                          },
                        },
                        __jsx("img", {
                          src: "" + "/assets/images/hero-slider/one/1.png",
                          alt: "Hero slider image",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40,
                            columnNumber: 19,
                          },
                        })
                      )
                    )
                  )
                )
              ),
              __jsx(
                "div",
                {
                  className: "hero-slider-subitems",
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52,
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
                      lineNumber: 53,
                      columnNumber: 11,
                    },
                  },
                  Array.from(Array(3), (e, i) => {
                    return __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                      {
                        key: i,
                        sm: 8,
                        md: 12,
                        lg: 8,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 56,
                          columnNumber: 17,
                        },
                      },
                      __jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                        {
                          href: "" + "/shop/shop-3-column",
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57,
                            columnNumber: 19,
                          },
                        },
                        __jsx(
                          "a",
                          {
                            href: "" + "/shop/shop-3-column",
                            className: "zoom-in",
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 58,
                              columnNumber: 21,
                            },
                          },
                          __jsx("img", {
                            src:
                              "" +
                              `/assets/images/hero-slider/two/${i + 1}.png`,
                            alt: "Hero slider sub item",
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 62,
                              columnNumber: 23,
                            },
                          })
                        )
                      )
                    );
                  })
                )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            HeroSliderTwo
          );

        /***/
      },

    /***/ "./src/components/sections/product-thumb/ProductGrid.js":
      /*!**************************************************************!*\
  !*** ./src/components/sections/product-thumb/ProductGrid.js ***!
  \**************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! antd */ "antd");
        /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            antd__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! classnames */ "classnames");
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            classnames__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../product/Product */ "./src/components/product/Product.js"
          );
        /* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js"
          );
        /* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\sections\\product-thumb\\ProductGrid.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

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
          gutter = [
            {
              xs: 0,
              md: 15,
            },
            {
              xs: 0,
              md: 15,
            },
          ],
        }) {
          return __jsx(
            "div",
            {
              className: `product-grid ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                className
              )}`,
              style: style,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 5,
              },
            },
            !hideHeader &&
              __jsx(
                "div",
                {
                  className: `product-grid-header ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                    headerClass
                  )}`,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  _other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
                  {
                    title: headerTitle,
                    hideDecoration: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 11,
                    },
                  }
                )
              ),
            __jsx(
              "div",
              {
                className: "product-grid-content",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 7,
                },
              },
              __jsx(
                _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__["default"],
                {
                  data: data,
                  renderData: (data) =>
                    __jsx(
                      antd__WEBPACK_IMPORTED_MODULE_0__["Row"],
                      {
                        gutter: gutter,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36,
                          columnNumber: 13,
                        },
                      },
                      data.map((item, index) =>
                        __jsx(
                          antd__WEBPACK_IMPORTED_MODULE_0__["Col"],
                          _extends(
                            {
                              key: index,
                            },
                            productCol,
                            {
                              className:
                                classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                                  {
                                    "five-col": fiveCol,
                                  }
                                ),
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38,
                                columnNumber: 17,
                              },
                            }
                          ),
                          __jsx(
                            _product_Product__WEBPACK_IMPORTED_MODULE_3__[
                              "default"
                            ],
                            {
                              type: productType,
                              className: productClassName,
                              data: item,
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43,
                                columnNumber: 19,
                              },
                            }
                          )
                        )
                      )
                    ),
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 9,
                  },
                }
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(
            ProductGrid
          );

        /***/
      },

    /***/ "./src/components/sections/product-thumb/ProductTab.js":
      /*!*************************************************************!*\
  !*** ./src/components/sections/product-thumb/ProductTab.js ***!
  \*************************************************************/
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
        /* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js"
          );
        /* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../product/Product */ "./src/components/product/Product.js"
          );
        /* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js"
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\components\\sections\\product-thumb\\ProductTab.js";
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

        function ProductTab({
          style,
          data,
          className,
          onTabChange,
          productClassName,
          headerCategories,
          headerTitle,
          headerClass,
          showTitleDecoration = false,
          headerType = "grid",
          productCol,
        }) {
          const { TabPane } = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

          const onChooseCategory = (key) => {
            onTabChange(key);
          };

          const renderTabContent = () =>
            __jsx(
              _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__["default"],
              {
                data: data,
                renderData: (data) =>
                  __jsx(
                    antd__WEBPACK_IMPORTED_MODULE_1__["Row"],
                    {
                      gutter: [
                        {
                          xs: 0,
                          md: 15,
                        },
                        {
                          xs: 0,
                          md: 15,
                        },
                      ],
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30,
                        columnNumber: 9,
                      },
                    },
                    data.map((item, index) =>
                      __jsx(
                        antd__WEBPACK_IMPORTED_MODULE_1__["Col"],
                        _extends(
                          {
                            key: index,
                          },
                          productCol,
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 37,
                              columnNumber: 13,
                            },
                          }
                        ),
                        __jsx(
                          _product_Product__WEBPACK_IMPORTED_MODULE_4__[
                            "default"
                          ],
                          {
                            className: productClassName,
                            data: item,
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
                  ),
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 5,
                },
              }
            );

          return __jsx(
            "div",
            {
              className: `product-tab ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                className
              )}`,
              style: style,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 5,
              },
            },
            __jsx(
              "div",
              {
                className: `product-tab-header ${
                  headerType === "row" ? "-style-two" : "style-one"
                }  ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                  headerClass
                )}`,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 7,
                },
              },
              headerType === "grid" &&
                __jsx(
                  _other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"],
                  {
                    title: headerTitle,
                    className: "-center",
                    hideDecoration: showTitleDecoration,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 11,
                    },
                  }
                ),
              __jsx(
                antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"],
                {
                  tabBarExtraContent:
                    headerType === "row"
                      ? {
                          left: __jsx(
                            _other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[
                              "default"
                            ],
                            {
                              title: headerTitle,
                              className: "-center",
                              hideDecoration: true,
                              __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64,
                                columnNumber: 21,
                              },
                            }
                          ),
                        }
                      : null,
                  defaultActiveKey: "1",
                  centered: headerType === "row" ? false : true,
                  onChange: onChooseCategory,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  TabPane,
                  {
                    tab: "All",
                    key: "",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 11,
                    },
                  },
                  renderTabContent()
                ),
                headerCategories.map((item, index) =>
                  __jsx(
                    TabPane,
                    {
                      tab: item,
                      key: item,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 13,
                      },
                    },
                    renderTabContent()
                  )
                )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(
            ProductTab
          );

        /***/
      },

    /***/ "./src/data/benefits.json":
      /*!********************************!*\
  !*** ./src/data/benefits.json ***!
  \********************************/
      /*! exports provided: 0, 1, 2, 3, default */
      /***/ function (module) {
        module.exports = JSON.parse(
          '[{"iconSrc":"/assets/images/other/benefits/1.png","name":"FREE SHIPPING","description":"For all order over 99$"},{"iconSrc":"/assets/images/other/benefits/2.png","name":"DELIVERY ON TIME","description":"If good have prolems"},{"iconSrc":"/assets/images/other/benefits/3.png","name":"SECURE PAYMENT","description":"100% secure payment"},{"iconSrc":"/assets/images/other/benefits/4.png","name":"24/7 SUPPORT","description":"Dedicated support"}]'
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

    /***/ "./src/data/sections/banner.json":
      /*!***************************************!*\
  !*** ./src/data/sections/banner.json ***!
  \***************************************/
      /*! exports provided: one, three, four, default */
      /***/ function (module) {
        module.exports = JSON.parse(
          '{"one":[{"content":{"main":"Strawberry Jam 100% Natural Fruit Juice","span":"Sale Off 65%"},"background":"/assets/images/sections/banner/one/bg-1.png","image":"/assets/images/sections/banner/one/1.png"},{"content":{"main":"Cake 100% Natural Fruit Juice","span":"Sale Off 65%"},"background":"/assets/images/sections/banner/one/bg-2.png","image":"/assets/images/sections/banner/one/2.png"}],"three":[{"background":"/assets/images/sections/banner/three/bg-1.png","image":"/assets/images/sections/banner/three/1.png","title":{"main":"Black friday","bold":"Sale off","discount":"60%"}},{"background":"/assets/images/sections/banner/three/bg-2.png","image":"/assets/images/sections/banner/three/2.png","title":{"main":"Summer","bold":"Sale off","discount":"50%"}}],"four":[{"type":"small","image":"/assets/images/sections/banner/four/small-1.png","background":"/assets/images/sections/banner/four/small-bg-1.png"},{"type":"big","image":"/assets/images/sections/banner/four/big-1.png","background":"/assets/images/sections/banner/four/big-bg-1.png","content":"Offer 50% Off The Week"},{"type":"big","image":"/assets/images/sections/banner/four/big-2.png","background":"/assets/images/sections/banner/four/big-bg-2.png","content":"Offer 60% Off The Week"},{"type":"small","image":"/assets/images/sections/banner/four/small-2.png","background":"/assets/images/sections/banner/four/small-bg-2.png"}]}'
        );

        /***/
      },

    /***/ "./src/data/sections/hero-slider.json":
      /*!********************************************!*\
  !*** ./src/data/sections/hero-slider.json ***!
  \********************************************/
      /*! exports provided: one, four, default */
      /***/ function (module) {
        module.exports = JSON.parse(
          '{"one":[{"background":"/assets/images/hero-slider/one/bg-1.png","subTitle":"Fruit Fresh","title":"Orange Lemon","price":{"main":"14","unit":"pakage"}},{"background":"/assets/images/hero-slider/one/bg-2.png","subTitle":"Butter & Eggs","title":"Spice 100% Oganic","price":{"main":"16","unit":"pakage"}}],"four":[{"image":"/assets/images/hero-slider/four/1.png","background":"/assets/images/hero-slider/four/bg-1.png"},{"image":"/assets/images/hero-slider/four/1.png","background":"/assets/images/hero-slider/four/bg-2.png"}]}'
        );

        /***/
      },

    /***/ "./src/pages/homepages/homepage2.js":
      /*!******************************************!*\
  !*** ./src/pages/homepages/homepage2.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return homepage2;
          }
        );
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
        /* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js"
          );
        /* harmony import */ var _components_layout_LayoutTwo__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../components/layout/LayoutTwo */ "./src/components/layout/LayoutTwo.js"
          );
        /* harmony import */ var _components_sections_hero_slider_HeroSliderTwo__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../components/sections/hero-slider/HeroSliderTwo */ "./src/components/sections/hero-slider/HeroSliderTwo.js"
          );
        /* harmony import */ var _components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../components/sections/product-thumb/ProductTab */ "./src/components/sections/product-thumb/ProductTab.js"
          );
        /* harmony import */ var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json"
          );
        var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6___namespace =
          /*#__PURE__*/ __webpack_require__.t(
            /*! ../../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json",
            1
          );
        /* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../data/categories.json */ "./src/data/categories.json"
          );
        var _data_categories_json__WEBPACK_IMPORTED_MODULE_7___namespace =
          /*#__PURE__*/ __webpack_require__.t(
            /*! ../../data/categories.json */ "./src/data/categories.json",
            1
          );
        /* harmony import */ var _components_other_Benefits__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../components/other/Benefits */ "./src/components/other/Benefits.js"
          );
        /* harmony import */ var _components_sections_product_thumb_ProductGrid__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../components/sections/product-thumb/ProductGrid */ "./src/components/sections/product-thumb/ProductGrid.js"
          );
        /* harmony import */ var _components_sections_dale_of_week_DowTwo__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../components/sections/dale-of-week/DowTwo */ "./src/components/sections/dale-of-week/DowTwo.js"
          );
        /* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../../components/other/Container */ "./src/components/other/Container.js"
          );
        /* harmony import */ var _components_sections_banner_BannerOne__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../../components/sections/banner/BannerOne */ "./src/components/sections/banner/BannerOne.js"
          );
        /* harmony import */ var _data_sections_banner_json__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../../data/sections/banner.json */ "./src/data/sections/banner.json"
          );
        var _data_sections_banner_json__WEBPACK_IMPORTED_MODULE_13___namespace =
          /*#__PURE__*/ __webpack_require__.t(
            /*! ../../data/sections/banner.json */ "./src/data/sections/banner.json",
            1
          );
        var _jsxFileName =
          "C:\\Users\\ritik\\OneDrive\\Desktop\\freelance-2022\\ogami-main\\ogami\\src\\pages\\homepages\\homepage2.js";
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

        function homepage2() {
          const dispatch = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]
          )();
          const {
            0: currentProductTabsCategory,
            1: setCurrentProductTabsCategory,
          } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
            featuredProducts: "",
            saleProducts: "",
            bestSellerProducts: "",
          });
          const shopState = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]
          )((state) => state.shopReducer);
          const {
            products,
            saleProducts,
            featuredProducts,
            bestSellerProducts,
          } = shopState;
          const {
            fetchSaleProductsRequest,
            fetchFeaturedProductsRequest,
            fetchBestSellerProductsRequest,
            fetchProductsRequest,
          } = _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__;
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
            dispatch(
              fetchProductsRequest({
                limit: 10,
                sort: {},
              })
            );
            dispatch(
              fetchFeaturedProductsRequest({
                limit: 12,
              })
            );
            dispatch(
              fetchSaleProductsRequest({
                limit: 6,
              })
            );
            dispatch(
              fetchBestSellerProductsRequest({
                limit: 6,
              })
            );
          }, []);
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
            dispatch(
              fetchFeaturedProductsRequest({
                limit: 12,
                category: currentProductTabsCategory.featuredProducts,
              })
            );
          }, [currentProductTabsCategory.featuredProducts]);
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
            dispatch(
              fetchSaleProductsRequest({
                limit: 6,
                category: currentProductTabsCategory.saleProducts,
              })
            );
          }, [currentProductTabsCategory.saleProducts]);
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
            dispatch(
              fetchBestSellerProductsRequest({
                limit: 6,
                category: currentProductTabsCategory.bestSellerProducts,
              })
            );
          }, [currentProductTabsCategory.bestSellerProducts]);
          return __jsx(
            _components_layout_LayoutTwo__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ],
            {
              title: "Homepage 2",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 5,
              },
            },
            __jsx(
              _components_sections_hero_slider_HeroSliderTwo__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ],
              {
                containerFluid: true,
                data: _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6__
                  .one[0],
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 7,
                },
              }
            ),
            __jsx(
              _components_other_Container__WEBPACK_IMPORTED_MODULE_11__[
                "default"
              ],
              {
                fluid: true,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 7,
                },
              },
              __jsx(
                _components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ],
                {
                  data: featuredProducts,
                  onTabChange: (val) =>
                    setCurrentProductTabsCategory(
                      _objectSpread(
                        _objectSpread({}, currentProductTabsCategory),
                        {},
                        {
                          featuredProducts: val,
                        }
                      )
                    ),
                  headerCategories:
                    _data_categories_json__WEBPACK_IMPORTED_MODULE_7__
                      .slice(0, 5)
                      .map((item) => item.name),
                  headerTitle: "Featured Product",
                  productClassName: "-borderless",
                  productCol: {
                    xs: 12,
                    sm: 8,
                    lg: 6,
                    xl: 4,
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 9,
                  },
                }
              )
            ),
            __jsx(
              _components_other_Container__WEBPACK_IMPORTED_MODULE_11__[
                "default"
              ],
              {
                fluid: true,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 7,
                },
              },
              __jsx(
                _components_other_Benefits__WEBPACK_IMPORTED_MODULE_8__[
                  "default"
                ],
                {
                  className: "-bordered",
                  containerFluid: true,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 9,
                  },
                }
              )
            ),
            __jsx(
              _components_sections_dale_of_week_DowTwo__WEBPACK_IMPORTED_MODULE_10__[
                "default"
              ],
              {
                countdownLast: 100000000,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 7,
                },
              }
            ),
            __jsx(
              _components_other_Container__WEBPACK_IMPORTED_MODULE_11__[
                "default"
              ],
              {
                fluid: true,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 7,
                },
              },
              __jsx(
                _components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ],
                {
                  data: bestSellerProducts,
                  onTabChange: (val) =>
                    setCurrentProductTabsCategory(
                      _objectSpread(
                        _objectSpread({}, currentProductTabsCategory),
                        {},
                        {
                          bestSellerProducts: val,
                        }
                      )
                    ),
                  headerCategories:
                    _data_categories_json__WEBPACK_IMPORTED_MODULE_7__
                      .slice(0, 5)
                      .map((item) => item.name),
                  headerType: "row",
                  headerTitle: "Best seller",
                  productClassName: "-borderless",
                  productCol: {
                    xs: 12,
                    sm: 8,
                    lg: 6,
                    xl: 4,
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 9,
                  },
                }
              ),
              __jsx(
                _components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ],
                {
                  data: saleProducts,
                  onTabChange: (val) =>
                    setCurrentProductTabsCategory(
                      _objectSpread(
                        _objectSpread({}, currentProductTabsCategory),
                        {},
                        {
                          saleProducts: val,
                        }
                      )
                    ),
                  headerCategories:
                    _data_categories_json__WEBPACK_IMPORTED_MODULE_7__
                      .slice(0, 5)
                      .map((item) => item.name),
                  headerType: "row",
                  headerTitle: "Featured Products",
                  productClassName: "-borderless",
                  productCol: {
                    xs: 12,
                    sm: 8,
                    lg: 6,
                    xl: 4,
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 9,
                  },
                }
              ),
              __jsx(
                _components_sections_product_thumb_ProductGrid__WEBPACK_IMPORTED_MODULE_9__[
                  "default"
                ],
                {
                  data: products,
                  headerTitle: "New Products",
                  productCol: {
                    xs: 24,
                    sm: 12,
                    md: 8,
                    lg: 6,
                  },
                  productType: "tiny",
                  fiveCol: true,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 9,
                  },
                }
              )
            ),
            __jsx(
              _components_sections_banner_BannerOne__WEBPACK_IMPORTED_MODULE_12__[
                "default"
              ],
              {
                data: _data_sections_banner_json__WEBPACK_IMPORTED_MODULE_13__.one,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 7,
                },
              }
            )
          );
        }

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

    /***/ "./src/redux/actions/compareActions.js":
      /*!*********************************************!*\
  !*** ./src/redux/actions/compareActions.js ***!
  \*********************************************/
      /*! exports provided: addToCompare, removeFromCompare */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "addToCompare",
          function () {
            return addToCompare;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "removeFromCompare",
          function () {
            return removeFromCompare;
          }
        );
        /* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actionTypes */ "./src/redux/actionTypes.js"
          );

        const addToCompare = (data) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"]
            .ADD_TO_COMPARE,
          payload: {
            data,
          },
        });
        const removeFromCompare = (productId) => ({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"]
            .REMOVE_FROM_COMPARE,
          payload: {
            productId,
          },
        });

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

    /***/ "react-countdown":
      /*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("react-countdown");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvd2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9heGlvc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jYXJ0U2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kZWZpbmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc2hvcFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXNlRGVib3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2lzaGxpc3RTZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpdGhIZWFkZXJTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsL3Byb2R1Y3QvUHJvZHVjdERldGFpbExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvcHJvZHVjdC9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvcHJvZHVjdC9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsSW1hZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldGFpbC9wcm9kdWN0L2VsZW1lbnRzL1Byb2R1Y3REZXRhaWxUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3RlckZsdWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJJbmZvbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJRdWlja0xpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJTdWJjcmliZUlucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJUd28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL0Z1bmN0aW9uSXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL01vYmlsZU1lbnVPcGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL01vYmlsZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9TZWFyY2hGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tZW51L01lbnVUd28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3RvcC1uYXYvVG9wTmF2T25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9MYXlvdXRUd28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvQmVuZWZpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0ZldGNoRGF0YUhhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9RdWFudGl0eVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL1NlY3Rpb25UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9Tb2NpYWxJY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvYmFubmVyL0Jhbm5lck9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9kYWxlLW9mLXdlZWsvRG93VHdvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL2hlcm8tc2xpZGVyL0hlcm9TbGlkZXJUd28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJvZHVjdC10aHVtYi9Qcm9kdWN0R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9wcm9kdWN0LXRodW1iL1Byb2R1Y3RUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWVwYWdlcy9ob21lcGFnZTIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NvbXBhcmVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY291bnRkb3duXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJ2YWx1ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiZmV0Y2hDYXJ0RGF0YSIsImNhcnRJZCIsImVuZHBvaW50IiwiQVBJX1VSTCIsImF4aW9zU2VydmljZSIsImZldGNoUHJvZHVjdElkQ2FydERhdGEiLCJwaWQiLCJyZW5kZXJQYXJhbSIsImFkZENhcnREYXRhIiwicG9zdCIsInJlbW92ZUNhcnREYXRhIiwiZGVsZXRlIiwidXBkYXRlQ2FydERhdGEiLCJwYXRjaCIsInJlbmRlclVybCIsImxpbWl0IiwiY2F0ZWdvcnkiLCJmZXRjaFByb2R1Y3RzRGF0YSIsInNvcnQiLCJvcmRlciIsInEiLCJjb2xvciIsInNpemUiLCJ0YWciLCJmZXRjaFNhbGVQcm9kdWN0c0RhdGEiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhIiwiZmV0Y2hEYWxlUHJvZHVjdHNEYXRhIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSIsInNsdWciLCJmZXRjaFNlYXJjaGVkUHJvZHVjdERhdGEiLCJpbnB1dCIsImZldGNoV2lzaGxpc3REYXRhIiwiZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEiLCJhZGRXaXNobGlzdERhdGEiLCJyZW1vdmVXaXNobGlzdERhdGEiLCJBeGlvc1NlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwicmVqZWN0IiwiYm9keSIsIm9uQWRkUHJvZHVjdFRvQ2FydCIsInByb2R1Y3QiLCJxdWFudGl0eSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJnZXRRdWFudGl0eUF2YWlsYWJsZSIsImlkIiwidGhlbiIsImxlbmd0aCIsInV1aWR2NCIsInByb2R1Y3RJZCIsImNhcnRRdWFudGl0eSIsImNhdGNoIiwicERhdGEiLCJvblJlbW92ZVByb2R1Y3RGcm9tQ2FydCIsIm9uQ2hhbmdlUHJvZHVjdENhcnRRdWFudGl0eSIsImxvZyIsImdldFByb2R1Y3RzQnlTbHVnIiwiYXJyIiwiZmluZCIsInRvTG93ZXJDYXNlIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsInRvdGFsIiwiZm9yRWFjaCIsImRpc2NvdW50IiwicHJpY2UiLCJjaGVja1Byb2R1Y3RJbkNhcnQiLCJjYXJ0QXJyIiwidW5kZWZpbmVkIiwiY2hlY2tQcm9kdWN0Q2FydFF1YW50aXR5IiwicHJvZHVjdHNJbkNhcnQiLCJmaWx0ZXIiLCJ0b3RhbFByb2R1Y3RRdWFudGl0eUluQ2FydCIsInJlZHVjZSIsImNoZWNrUHJvZHVjdEluV2lzaGxpc3QiLCJ3aXNobGlzdEFyciIsInVzZURlYm91bmNlIiwiZGVsYXkiLCJkZWJvdW5jZWRWYWx1ZSIsInNldERlYm91bmNlZFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZm9ybWF0Q3VycmVuY3kiLCJsb2NhbGVzIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJmb3JtYXQiLCJwYXJhbU5hbWUiLCJwYXJhbVZhbHVlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJpbnB1dEZvcm1hdCIsIm91dHB1dEZvcm1hdCIsIm1vbWVudCIsInJlbW92ZURhc2giLCJvbkFkZFByb2R1Y3RUb1dpc2hsaXN0Iiwib25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0Iiwid2l0aEhlYWRlclNjcm9sbCIsIldyYXBwZWRDb21wb25lbnQiLCJoZWFkZXJSZWYiLCJ1c2VSZWYiLCJzZXRTY3JvbGwiLCJpc0hlYWRlckZpeGVkIiwic2V0SXNIZWFkZXJGaXhlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsIm9mZnNldEhlaWdodCIsInNjcm9sbFkiLCJjbGFzc05hbWVzIiwiZml4ZWQiLCJjbGFzc05hbWUiLCJQcm9kdWN0RGV0YWlsTGF5b3V0IiwidHlwZSIsImhpZGVUYWIiLCJpbWFnZXMiLCJmdWxsRGVzY3JpcHRpb24iLCJzcGVjaWZpY2F0aW9ucyIsInJldmlld3MiLCJtZW1vIiwiUHJvZHVjdERldGFpbENvbnRlbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY3VycmVudFF1YW50aXR5Iiwic2V0Q3VycmVudFF1YW50aXR5IiwiYWRkVG9DYXJ0TG9hZGluZyIsInNldEFkZFRvQ2FydExvYWRpbmciLCJjYXJ0U3RhdGUiLCJ1c2VTZWxlY3RvciIsImNhcnRSZWR1Y2VyIiwiY29tcGFyZVN0YXRlIiwiY29tcGFyZVJlZHVjZXIiLCJwcm9kdWN0SW5Db21wYXJlIiwiYXZhaWFibGVRdWFudGl0eSIsIm9uQWRkVG9DYXJ0IiwiZmV0Y2hDYXJ0UmVxdWVzdCIsIm1lcyIsIm9uQWRkVG9Db21wYXJlIiwicmVtb3ZlRnJvbUNvbXBhcmUiLCJhZGRUb0NvbXBhcmUiLCJyYXRlIiwidmFsIiwiYWN0aXZlIiwiUHJvZHVjdERldGFpbEltYWdlcyIsInNsaWRlcjFTZXR0aW5ncyIsImFycm93cyIsInNsaWRlcjJTZXR0aW5ncyIsInNsaWRlc1RvU2hvdyIsImZvY3VzT25TZWxlY3QiLCJ2ZXJ0aWNhbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJuYXYxIiwic2V0TmF2MSIsIm5hdjIiLCJzZXROYXYyIiwiYyIsIm1hcCIsImltZyIsImluZGV4IiwiVGFiUGFuZSIsIlRhYnMiLCJSZXZpZXdJdGVtIiwidXNlciIsImF2YXRhciIsImNvbW1lbnREYXRlIiwicmV2aWV3IiwiUHJvZHVjdERldGFpbFRhYiIsIm9uRmluaXNoIiwidmFsdWVzIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJ3ZWlnaHQiLCJkaW1lbnNpb25zIiwibG9uZyIsIndpZHRoIiwiaGVpZ2h0IiwicmVxdWlyZWQiLCJGb290ZXJGbHVpZCIsInNwYW4iLCJGb290ZXJJbmZvbWF0aW9uIiwiRm9vdGVyUXVpY2tMaW5rcyIsImNvbFNpemUiLCJmb290ZXJMaW5rcyIsInRpdGxlIiwiaXRlbXMiLCJsaW5rIiwiQ3VzdG9tRm9ybSIsInN0YXR1cyIsIm9uVmFsaWRhdGVkIiwiRU1BSUwiLCJlbWFpbCIsIl9faHRtbCIsIkZvb3RlclN1YmNyaWJlSW5wdXQiLCJzdWJzY3JpYmUiLCJmb3JtRGF0YSIsIkhlYWRlclR3byIsIkZ1bmN0aW9uSXRlbXMiLCJoaWRlVG90YWwiLCJoaWRlV2lzaGxpc3QiLCJNb2JpbGVNZW51T3BlbmVyIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJvblNob3dEcmF3ZXIiLCJvbkNsb3NlRHJhd2VyIiwiTW9iaWxlTmF2aWdhdG9yIiwiU3ViTWVudSIsIk1lbnUiLCJzZXRDdXJyZW50IiwiaGFuZGxlQ2xpY2siLCJzZXRTdGF0ZSIsIm5hdmlnYXRvckRhdGEiLCJIT01FIiwic3ViTWVudSIsIlNIT1AiLCJsYXlvdXQiLCJkZXRhaWwiLCJQQUdFUyIsIkFCT1VUIiwiTmF2aWdhdG9yIiwiQkxPRyIsIlNlYXJjaEZvcm0iLCJlbnRlckJ1dHRvbiIsImhpZGVTZWxlY3QiLCJPcHRpb24iLCJTZWxlY3QiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50U2VhcmNoIiwic2V0Q3VycmVudFNlYXJjaCIsImN1cnJlbnRDYXRlZ29yeSIsInNldEN1cnJlbnRDYXRlZ29yeSIsImRlYm91bmRWYWx1ZSIsInNob3BTdGF0ZSIsInNob3BSZWR1Y2VyIiwic2VhcmNoZWRQcm9kdWN0cyIsIm9uQ2hhbmdlIiwib25TZWxlY3RPcHRpb24iLCJvcHRpb24iLCJvblNlYXJjaCIsIm9uQ2hvb3NlQ2F0ZW9ncnkiLCJmZXRjaFNlYXJjaGVkUHJvZHVjdFJlcXVlc3QiLCJjYXRlZ29yaWVzIiwiaW5wdXRWYWx1ZSIsInRvVXBwZXJDYXNlIiwiaW5kZXhPZiIsImxvYWRpbmciLCJNZW51VHdvIiwiY29udGFpbmVyRmx1aWQiLCJmbGFnRGF0YSIsImltYWdlIiwiVG9wTmF2T25lIiwib2JqZWN0Rml0IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJTY3JvbGxlZEhlYWRlciIsIkxheW91dE9uZSIsIkJlbmVmaXRzIiwiY29sdW1uIiwidGhyZWVDb2wiLCJyZW5kZXJDb2wiLCJ4cyIsIm1kIiwic20iLCJsZyIsImNvbCIsImJlbmVmaXRzRGF0YSIsInNsaWNlIiwiaWNvblNyYyIsImRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwiZmx1aWQiLCJGZXRjaERhdGFIYW5kbGUiLCJlcnJvck1lc3NhZ2UiLCJlbXB0eURlc2NyaXB0aW9uIiwicmVuZGVyRGF0YSIsIkVtcHR5IiwiUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSIsIlF1YW50aXR5U2VsZWN0b3IiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJvbkRlY3JlYXNlIiwib25JbmNyZWFzZSIsImZpcnN0VXBkYXRlIiwic2V0VmFsdWUiLCJkZWNyZWFzZVZhbHVlIiwidXNlQ2FsbGJhY2siLCJpbmNyZWFzZVZhbHVlIiwiU2VjdGlvblRpdGxlIiwiaGlkZURlY29yYXRpb24iLCJTb2NpYWxJY29ucyIsInNoYXBlIiwiUHJvZHVjdCIsImNvdW50ZG93bkxhc3QiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJhZGRUb1dpc2hsaXN0TG9hZGluZyIsInNldEFkZFRvV2lzaGxpc3RMb2FkaW5nIiwid2lzaGxpc3RTdGF0ZSIsIndpc2hsaXN0UmVkdWNlciIsInByb2R1Y3RJbldpc2hsaXN0Iiwic2hvd01vZGFsIiwib25Nb2RhbENsb3NlIiwib25BZGRXaXNobGlzdCIsImZldGNoV2lzaExpc3RSZXF1ZXN0IiwiZ2V0UmFuZG9tQXJiaXRyYXJ5IiwiTWF0aCIsInJhbmRvbSIsInJlZGVyUHJvZHVjdFR5cGUiLCJjb3ZlckltYWdlIiwiRGF0ZSIsIm5vdyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiemVyb1BhZCIsIm1hcmdpbkJvdHRvbSIsIkJhbm5lck9uZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJjb250ZW50IiwibWFpbiIsIkRvd1R3byIsIkhlcm9TbGlkZXJUd28iLCJzdWJUaXRsZSIsInVuaXQiLCJmcm9tIiwiUHJvZHVjdEdyaWQiLCJwcm9kdWN0Q2xhc3NOYW1lIiwicHJvZHVjdENvbCIsInByb2R1Y3RUeXBlIiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJDbGFzcyIsImhpZGVIZWFkZXIiLCJmaXZlQ29sIiwiZ3V0dGVyIiwiUHJvZHVjdFRhYiIsIm9uVGFiQ2hhbmdlIiwiaGVhZGVyQ2F0ZWdvcmllcyIsInNob3dUaXRsZURlY29yYXRpb24iLCJoZWFkZXJUeXBlIiwib25DaG9vc2VDYXRlZ29yeSIsInJlbmRlclRhYkNvbnRlbnQiLCJsZWZ0IiwiaG9tZXBhZ2UyIiwiY3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnkiLCJzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSIsImZlYXR1cmVkUHJvZHVjdHMiLCJzYWxlUHJvZHVjdHMiLCJiZXN0U2VsbGVyUHJvZHVjdHMiLCJwcm9kdWN0cyIsImZldGNoU2FsZVByb2R1Y3RzUmVxdWVzdCIsImZldGNoRmVhdHVyZWRQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaFByb2R1Y3RzUmVxdWVzdCIsInNob3BBY3Rpb25zIiwiaGVyb3NsaWRlclR3b0RhdGEiLCJvbmUiLCJ4bCIsImJhbm5lckRhdGEiLCJGRVRDSF9QUk9EVUNUUyIsIkZFVENIX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfU0FMRV9QUk9EVUNUUyIsIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUyIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfREFMRV9QUk9EVUNUUyIsIkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTCIsIkZFVENIX1BST0RVQ1RfREVUQUlMIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUyIsIkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUwiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUyIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfUE9TVFMiLCJGRVRDSF9QT1NUU19TVUNDRVNTIiwiRkVUQ0hfUE9TVFNfRkFJTCIsIkZFVENIX1BPU1RfREVUQUlMIiwiRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUyIsIkZFVENIX1BPU1RfREVUQUlMX0ZBSUwiLCJGRVRDSF9SRUNFTlRfUE9TVFMiLCJGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyIsIkZFVENIX1JFQ0VOVF9QT1NUU19GQUlMIiwiU0hPUF9GSUxURVIiLCJSRVNFVF9GSUxURVJTIiwiU0VUX1NPUlQiLCJTRVRfU0hPVyIsIlNFVF9WSUVXIiwiU0VUX0NBVEVHT1JZIiwiU0VUX0NPTE9SIiwiU0VUX1NJWkUiLCJTRVRfVEFHIiwiQ0FSVCIsIkZFVENIX0NBUlQiLCJGRVRDSF9DQVJUX1NVQ0NFU1MiLCJGRVRDSF9DQVJUX0ZBSUwiLCJXSVNITElTVCIsIkZFVENIX1dJU0hMSVNUIiwiRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUyIsIkZFVENIX1dJU0hMSVNUX0ZBSUwiLCJDT01QQVJFIiwiQUREX1RPX0NPTVBBUkUiLCJSRU1PVkVfRlJPTV9DT01QQVJFIiwiQkxPR19GSUxURVIiLCJmZXRjaENhcnQiLCJmZXRjaENhcnRTdWNjZXNzIiwicGF5bG9hZCIsImZldGNoQ2FydEZhaWwiLCJjYXJ0QXBpcyIsImZldGNoUHJvZHVjdHMiLCJmZXRjaFByb2R1Y3RzU3VjY2VzcyIsInByb2R1Y3RDb3VudCIsImZldGNoUHJvZHVjdHNGYWlsIiwic2hvcEFwaXMiLCJoZWFkZXJzIiwiZmV0Y2hTYWxlUHJvZHVjdHMiLCJmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaFNhbGVQcm9kdWN0c0ZhaWwiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHMiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNTdWNjZXNzIiwiZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbCIsImZldGNoQmVzdFNlbGxlclByb2R1Y3RzIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNTdWNjZXNzIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNGYWlsIiwiZmV0Y2hEYWxlUHJvZHVjdHMiLCJmZXRjaERhbGVQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaERhbGVQcm9kdWN0c0ZhaWwiLCJmZXRjaERhbGVQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaFByb2R1Y3REZXRhaWwiLCJmZXRjaFByb2R1Y3REZXRhaWxTdWNjZXNzIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRmFpbCIsImZldGNoUHJvZHVjdERldGFpbFJlcXVlc3QiLCJmZXRjaFNlYXJjaGVkUHJvZHVjdCIsImZldGNoU2VhcmNoZWRQcm9kdWN0U3VjY2VzcyIsImZldGNoU2VhcmNoZWRQcm9kdWN0RmFpbCIsImZldGNoV2lzaExpc3QiLCJmZXRjaFdpc2hMaXN0U3VjY2VzcyIsImZldGNoV2lzaExpc3RGYWlsIiwid2lzaGxpc3RBcGlzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsMEVBQW1COztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOztBQUVBOztBQU9BOztBQXNCQTtBQUNBLE1BQU1BLFNBQVMsR0FBRyxJQUFsQixHQUFrQixFQUFsQjtBQUNBLE1BQU1DLG9CQUFvQixHQUN4QixRQUFnQ0MsU0FBaEMsR0FERjtBQUVBLE1BQU1DLFVBQTJDLEdBQWpEOztBQUVBLHVCQUF5RDtBQUN2RDtBQUNBLHNCQUFvQjtBQUNsQjtBQUdGLEdBTnVELENBTXZEOzs7QUFDQSxNQUFJLENBQUosc0JBQTJCO0FBQ3pCO0FBR0Y7O0FBQUEsU0FBUUMsY0FBYyxHQUFHLHlCQUN0QkMsT0FBRCxJQUFhO0FBQ1hBLFdBQU8sQ0FBUEEsUUFBaUJDLEtBQUQsSUFBVztBQUN6QixVQUFJLENBQUNOLFNBQVMsQ0FBVEEsSUFBY00sS0FBSyxDQUF4QixNQUFLTixDQUFMLEVBQWtDO0FBQ2hDO0FBR0Y7O0FBQUEsWUFBTU8sRUFBRSxHQUFHUCxTQUFTLENBQVRBLElBQWNNLEtBQUssQ0FBOUIsTUFBV04sQ0FBWDs7QUFDQSxVQUFJTSxLQUFLLENBQUxBLGtCQUF3QkEsS0FBSyxDQUFMQSxvQkFBNUIsR0FBeUQ7QUFDdkRGLHNCQUFjLENBQWRBLFVBQXlCRSxLQUFLLENBQTlCRjtBQUNBSixpQkFBUyxDQUFUQSxPQUFpQk0sS0FBSyxDQUF0Qk47QUFDQU8sVUFBRTtBQUVMO0FBWERGO0FBRnFCLEtBZXZCO0FBQUVHLGNBQVUsRUFmZDtBQWVFLEdBZnVCLENBQXpCO0FBbUJGOztBQUFBLE1BQU1DLHFCQUFxQixHQUFHLFlBQWlDO0FBQzdELFFBQU1DLFFBQVEsR0FBR0MsV0FBakI7O0FBQ0EsTUFBSSxDQUFKLFVBQWU7QUFDYixXQUFPLE1BQU0sQ0FBYjtBQUdGRDs7QUFBQUEsVUFBUSxDQUFSQTtBQUNBVixXQUFTLENBQVRBO0FBQ0EsU0FBTyxNQUFNO0FBQ1gsUUFBSTtBQUNGVSxjQUFRLENBQVJBO0FBQ0EsS0FGRixDQUVFLFlBQVk7QUFDWkUsYUFBTyxDQUFQQTtBQUVGWjs7QUFBQUEsYUFBUyxDQUFUQTtBQU5GO0FBUkY7O0FBa0JBLDZDQUtRO0FBQ04sWUFBbUM7QUFDbkMsTUFBSSxDQUFDLHdCQUFMLElBQUssQ0FBTCxFQUF1QixPQUZqQixDQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUNBYSxRQUFNLENBQU5BLGtDQUEwQ0MsR0FBRCxJQUFTO0FBQ2hELGNBQTJDO0FBQ3pDO0FBQ0E7QUFFSDtBQUxERCxLQVBNLENBYU47O0FBQ0FWLFlBQVUsQ0FBQ1ksSUFBSSxHQUFKQSxNQUFYWixFQUFVLENBQVZBO0FBR0Y7O0FBQUEsZ0NBQWtEO0FBQ2hELFFBQU07QUFBQTtBQUFBLE1BQWFhLEtBQUssQ0FBeEI7QUFDQSxTQUNHQyxNQUFNLElBQUlBLE1BQU0sS0FBakIsT0FBQ0EsSUFDREQsS0FBSyxDQURMLE9BQUNDLElBRURELEtBQUssQ0FGTCxPQUFDQyxJQUdERCxLQUFLLENBSEwsUUFBQ0MsSUFJREQsS0FBSyxDQUpMLE1BQUNDLElBSWU7QUFDZkQsT0FBSyxDQUFMQSxlQUFxQkEsS0FBSyxDQUFMQSxzQkFOeEI7QUFVRjs7QUFBQSxvRUFRUTtBQUNOLFFBQU07QUFBQTtBQUFBLE1BQWVFLENBQUMsQ0FBdEI7O0FBRUEsTUFBSUMsUUFBUSxLQUFSQSxRQUFxQkMsZUFBZSxDQUFmQSxDQUFlLENBQWZBLElBQXNCLENBQUMsd0JBQWhELElBQWdELENBQTVDRCxDQUFKLEVBQW1FO0FBQ2pFO0FBQ0E7QUFHRkQ7O0FBQUFBLEdBQUMsQ0FBREEsaUJBUk0sQ0FVTjs7QUFDQSxNQUFJRyxNQUFNLElBQVYsTUFBb0I7QUFDbEJBLFVBQU0sR0FBR0MsRUFBRSxDQUFGQSxlQUFURDtBQUdGLEdBZk0sQ0FlTjs7O0FBQ0FSLFFBQU0sQ0FBQ1UsT0FBTyxlQUFkVixNQUFNLENBQU5BLFdBQStDO0FBQS9DQTtBQUErQyxHQUEvQ0EsT0FDR1csT0FBRCxJQUFzQjtBQUNwQixRQUFJLENBQUosU0FBYzs7QUFDZCxnQkFBWTtBQUNWdEIsWUFBTSxDQUFOQTtBQUNBdUIsY0FBUSxDQUFSQTtBQUVIO0FBUEhaO0FBV0Y7O0FBQUEscUJBQXlEO0FBQ3ZELFlBQTJDO0FBQ3pDLG1DQUlHO0FBQ0QsYUFBTyxVQUNKLGdDQUErQmEsSUFBSSxDQUFDQyxHQUFJLGdCQUFlRCxJQUFJLENBQUNFLFFBQVMsNkJBQTRCRixJQUFJLENBQUNHLE1BQXZHLGFBQUMsSUFDRSxvQkFGTCxFQUNHLENBREksQ0FBUDtBQVFGLEtBZHlDLENBY3pDOzs7QUFDQSxVQUFNQyxrQkFBbUQsR0FBRztBQUMxRGYsVUFBSSxFQUROO0FBQTRELEtBQTVEO0FBR0EsVUFBTWdCLGFBQWtDLEdBQUdDLE1BQU0sQ0FBTkEsS0FBM0Msa0JBQTJDQSxDQUEzQztBQUdBLGlCQUFhLENBQWIsUUFBdUJMLEdBQUQsSUFBNEI7QUFDaEQsVUFBSUEsR0FBRyxLQUFQLFFBQW9CO0FBQ2xCLFlBQ0VNLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxZQUNDLE9BQU9BLEtBQUssQ0FBWixHQUFZLENBQVosaUJBQWtDLE9BQU9BLEtBQUssQ0FBWixHQUFZLENBQVosS0FGckMsVUFHRTtBQUNBLGdCQUFNQyxlQUFlLENBQUM7QUFBQTtBQUVwQk4sb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFBRUksS0FBSyxDQUFMQSxHQUFLLENBQUxBLHFCQUErQixPQUFPQSxLQUFLLENBSHJELEdBR3FEO0FBSC9CLFdBQUQsQ0FBckI7QUFNSDtBQVhELGFBV087QUFDTDtBQUNBO0FBQ0EsY0FBTUUsQ0FBUSxHQUFkO0FBRUg7QUFqQkQsT0FyQnlDLENBd0N6Qzs7QUFDQSxVQUFNQyxrQkFBbUQsR0FBRztBQUMxRGQsUUFBRSxFQUR3RDtBQUUxREMsYUFBTyxFQUZtRDtBQUcxREYsWUFBTSxFQUhvRDtBQUkxRGdCLGFBQU8sRUFKbUQ7QUFLMURDLGNBQVEsRUFMa0Q7QUFNMURDLGNBQVEsRUFOVjtBQUE0RCxLQUE1RDtBQVFBLFVBQU1DLGFBQWtDLEdBQUdSLE1BQU0sQ0FBTkEsS0FBM0Msa0JBQTJDQSxDQUEzQztBQUdBLGlCQUFhLENBQWIsUUFBdUJMLEdBQUQsSUFBNEI7QUFDaEQsVUFBSUEsR0FBRyxLQUFQLE1BQWtCO0FBQ2hCLFlBQ0VNLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxJQUNBLE9BQU9BLEtBQUssQ0FBWixHQUFZLENBQVosS0FEQUEsWUFFQSxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLEtBSEYsVUFJRTtBQUNBLGdCQUFNQyxlQUFlLENBQUM7QUFBQTtBQUVwQk4sb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFBRSxPQUFPSSxLQUFLLENBSHRCLEdBR3NCO0FBSEEsV0FBRCxDQUFyQjtBQU1IO0FBWkQsYUFZTyxJQUNMTixHQUFHLEtBQUhBLGFBQ0FBLEdBQUcsS0FESEEsWUFFQUEsR0FBRyxLQUZIQSxhQUdBQSxHQUFHLEtBSEhBLGNBSUFBLEdBQUcsS0FMRSxZQU1MO0FBQ0EsWUFBSU0sS0FBSyxDQUFMQSxHQUFLLENBQUxBLFlBQXNCLE9BQU9BLEtBQUssQ0FBWixHQUFZLENBQVosS0FBMUIsV0FBMkQ7QUFDekQsZ0JBQU1DLGVBQWUsQ0FBQztBQUFBO0FBRXBCTixvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUFFLE9BQU9JLEtBQUssQ0FIdEIsR0FHc0I7QUFIQSxXQUFELENBQXJCO0FBTUg7QUFkTSxhQWNBO0FBQ0w7QUFDQTtBQUNBLGNBQU1FLENBQVEsR0FBZDtBQUVIO0FBaENELE9BcER5QyxDQXNGekM7QUFDQTs7QUFDQSxVQUFNTSxTQUFTLEdBQUdDLHNCQUFsQixLQUFrQkEsQ0FBbEI7O0FBQ0EsUUFBSVQsS0FBSyxDQUFMQSxZQUFrQixDQUFDUSxTQUFTLENBQWhDLFNBQTBDO0FBQ3hDQSxlQUFTLENBQVRBO0FBQ0E3QixhQUFPLENBQVBBO0FBSUg7QUFDRDs7QUFBQSxRQUFNK0IsQ0FBQyxHQUFHVixLQUFLLENBQUxBLGFBQVY7O0FBRUEsUUFBTSwwQkFBMEJTLGVBQWhDLFFBQWdDQSxFQUFoQzs7QUFFQSxRQUFNN0IsTUFBTSxHQUFHLGFBQWYsU0FBZSxHQUFmO0FBQ0EsUUFBTStCLFFBQVEsR0FBSS9CLE1BQU0sSUFBSUEsTUFBTSxDQUFqQixRQUFDQSxJQUFsQjs7QUFFQSxRQUFNO0FBQUE7QUFBQTtBQUFBLE1BQWU2Qix1QkFBYyxNQUFNO0FBQ3ZDLFVBQU1HLFlBQVksR0FBRyxtQ0FBc0JaLEtBQUssQ0FBaEQsSUFBcUIsQ0FBckI7QUFDQSxXQUFPO0FBQ0xsQixVQUFJLEVBREM7QUFFTE8sUUFBRSxFQUFFVyxLQUFLLENBQUxBLEtBQVcsbUNBQXNCQSxLQUFLLENBQXRDQSxFQUFXLENBQVhBLEdBRk47QUFBTyxLQUFQO0FBRm1CUyxLQU1sQixXQUFXVCxLQUFLLENBQWhCLE1BQXVCQSxLQUFLLENBTi9CLEVBTUcsQ0FOa0JTLENBQXJCOztBQVFBLDJCQUFnQixNQUFNO0FBQ3BCLFFBQ0VDLENBQUMsSUFBREEsb0NBR0FHLFFBQVEsQ0FIUkgsV0FJQSx3QkFMRixJQUtFLENBTEYsRUFNRTtBQUNBO0FBQ0EsWUFBTUksWUFBWSxHQUFHNUMsVUFBVSxDQUFDWSxJQUFJLEdBQUpBLE1BQWhDLEVBQStCLENBQS9COztBQUNBLFVBQUksQ0FBSixjQUFtQjtBQUNqQixlQUFPTixxQkFBcUIsV0FBVyxNQUFNO0FBQzNDOEIsa0JBQVEsZUFBUkEsRUFBUSxDQUFSQTtBQURGLFNBQTRCLENBQTVCO0FBSUg7QUFDRjtBQWhCRCxLQWdCRyx3QkFoQkgsTUFnQkcsQ0FoQkg7O0FBa0JBLE1BQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUosTUFsSXVELENBbUl2RDs7QUFDQSxNQUFJLG9CQUFKLFVBQWtDO0FBQ2hDUyxZQUFRLGdCQUFHLHdDQUFYQSxRQUFXLENBQVhBO0FBR0YsR0F4SXVELENBd0l2RDs7O0FBQ0EsUUFBTUMsS0FBVSxHQUFHQyxxQkFBbkIsUUFBbUJBLENBQW5COztBQUNBLFFBQU1DLFVBS0wsR0FBRztBQUNGQyxPQUFHLEVBQUdDLEVBQUQsSUFBYTtBQUNoQixjQUFRQyxXQUFXLENBQVhBLEVBQVcsQ0FBWEE7O0FBRVIsVUFBSUwsS0FBSyxJQUFJLGlCQUFUQSxZQUFzQ0EsS0FBSyxDQUEvQyxLQUFxRDtBQUNuRCxZQUFJLE9BQU9BLEtBQUssQ0FBWixRQUFKLFlBQXFDQSxLQUFLLENBQUxBLElBQXJDLEVBQXFDQSxFQUFyQyxLQUNLLElBQUksT0FBT0EsS0FBSyxDQUFaLFFBQUosVUFBbUM7QUFDdENBLGVBQUssQ0FBTEE7QUFFSDtBQUNGO0FBVkM7QUFXRk0sV0FBTyxFQUFHckMsQ0FBRCxJQUF5QjtBQUNoQyxVQUFJK0IsS0FBSyxDQUFMQSxTQUFlLE9BQU9BLEtBQUssQ0FBTEEsTUFBUCxZQUFuQixZQUE4RDtBQUM1REEsYUFBSyxDQUFMQTtBQUVGOztBQUFBLFVBQUksQ0FBQy9CLENBQUMsQ0FBTixrQkFBeUI7QUFDdkJzQyxtQkFBVyx3Q0FBWEEsTUFBVyxDQUFYQTtBQUVIO0FBdkJIO0FBS0ksR0FMSjs7QUEwQkEsU0FBTztBQUNMTCxjQUFVLENBQVZBLGVBQTJCakMsQ0FBRCxJQUF5QjtBQUNqRCxVQUFJLENBQUMsd0JBQUwsSUFBSyxDQUFMLEVBQXVCOztBQUN2QixVQUFJK0IsS0FBSyxDQUFMQSxTQUFlLE9BQU9BLEtBQUssQ0FBTEEsTUFBUCxpQkFBbkIsWUFBbUU7QUFDakVBLGFBQUssQ0FBTEE7QUFFRlY7O0FBQUFBLGNBQVEsbUJBQW1CO0FBQUVrQixnQkFBUSxFQUFyQ2xCO0FBQTJCLE9BQW5CLENBQVJBO0FBTEZZO0FBU0YsR0E5S3VELENBOEt2RDtBQUNBOzs7QUFDQSxNQUFJbEIsS0FBSyxDQUFMQSxZQUFtQmdCLEtBQUssQ0FBTEEsZ0JBQXNCLEVBQUUsVUFBVUEsS0FBSyxDQUE5RCxLQUE2QyxDQUE3QyxFQUF3RTtBQUN0RUUsY0FBVSxDQUFWQSxPQUFrQix5QkFBbEJBLEVBQWtCLENBQWxCQTtBQUdGOztBQUFBLHNCQUFPVCxtQ0FBUCxVQUFPQSxDQUFQOzs7ZUFHYWdCLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pWZjs7OztBQUdPLHVDQUF1RDtBQUM1RCxTQUFPQyxJQUFJLENBQUpBLGlCQUFzQkEsSUFBSSxLQUExQkEsTUFBcUNBLElBQUksQ0FBSkEsU0FBYyxDQUFuREEsQ0FBcUNBLENBQXJDQSxHQUFQO0FBR0Y7QUFBQTs7Ozs7O0FBSU8sTUFBTUMsMEJBQTBCLEdBQUdDLFNBQ3JDRixTQURxQ0UsR0FBbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQOztBQUNBOzs7OztBQUNBOztBQW1IQTs7O0FBdEhBOztBQW1CQSxNQUFNQyxlQUFvQyxHQUFHO0FBQzNDakQsUUFBTSxFQURxQztBQUM3QjtBQUNka0QsZ0JBQWMsRUFGNkI7O0FBRzNDQyxPQUFLLEtBQWlCO0FBQ3BCLFFBQUksS0FBSixRQUFpQixPQUFPekQsRUFBUDs7QUFDakIsZUFBbUMsRUFHcEM7QUFSSDs7QUFBNkMsQ0FBN0MsQyxDQVdBOztBQUNBLE1BQU0wRCxpQkFBaUIsR0FBRyxxRUFBMUIsVUFBMEIsQ0FBMUI7QUFTQSxNQUFNQyxZQUFZLEdBQUcsMEdBQXJCLG9CQUFxQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLGtEQUF6QixnQkFBeUIsQ0FBekIsQyxDQVNBOztBQUNBbkMsTUFBTSxDQUFOQSwwQ0FBaUQ7QUFDL0NvQyxLQUFHLEdBQUc7QUFDSixXQUFPQyxpQkFBUDtBQUZKckM7O0FBQWlELENBQWpEQTtBQU1BaUMsaUJBQWlCLENBQWpCQSxRQUEyQkssS0FBRCxJQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0F0QyxRQUFNLENBQU5BLHVDQUE4QztBQUM1Q29DLE9BQUcsR0FBRztBQUNKLFlBQU12RCxNQUFNLEdBQUcwRCxTQUFmO0FBQ0EsYUFBTzFELE1BQU0sQ0FBYixLQUFhLENBQWI7QUFISm1COztBQUE4QyxHQUE5Q0E7QUFMRmlDO0FBYUEsZ0JBQWdCLENBQWhCLFFBQTBCSyxLQUFELElBQVc7QUFDbEM7QUFDQTs7QUFBRVIsaUJBQUQsT0FBQ0EsR0FBaUMsQ0FBQyxHQUFELFNBQW9CO0FBQ3JELFVBQU1qRCxNQUFNLEdBQUcwRCxTQUFmO0FBQ0EsV0FBTzFELE1BQU0sQ0FBTkEsS0FBTSxDQUFOQSxDQUFjLEdBQXJCLElBQU9BLENBQVA7QUFGRCxHQUFDaUQ7QUFGSjtBQVFBSSxZQUFZLENBQVpBLFFBQXNCbEQsS0FBRCxJQUFXO0FBQzlCOEMsaUJBQWUsQ0FBZkEsTUFBc0IsTUFBTTtBQUMxQk8sc0NBQXdCLENBQUMsR0FBRCxTQUFhO0FBQ25DLFlBQU1HLFVBQVUsR0FBSSxLQUFJeEQsS0FBSyxDQUFMQSx1QkFBOEIsR0FBRUEsS0FBSyxDQUFMQSxZQUF4RDtBQUdBLFlBQU15RCxnQkFBZ0IsR0FBdEI7O0FBQ0EsVUFBSUEsZ0JBQWdCLENBQXBCLFVBQW9CLENBQXBCLEVBQWtDO0FBQ2hDLFlBQUk7QUFDRkEsMEJBQWdCLENBQWhCQSxVQUFnQixDQUFoQkEsQ0FBNkIsR0FBN0JBO0FBQ0EsU0FGRixDQUVFLFlBQVk7QUFDWjdELGlCQUFPLENBQVBBLE1BQWUsd0NBQXVDNEQsVUFBdEQ1RDtBQUNBQSxpQkFBTyxDQUFQQSxNQUFlLEdBQUVFLEdBQUcsQ0FBQzRELE9BQVEsS0FBSTVELEdBQUcsQ0FBQzZELEtBQXJDL0Q7QUFFSDtBQUNGO0FBYkR5RDtBQURGUDtBQURGSTs7QUFtQkEscUJBQTZCO0FBQzNCLE1BQUksQ0FBQ0osZUFBZSxDQUFwQixRQUE2QjtBQUMzQixVQUFNWSxPQUFPLEdBQ1gsZ0NBREY7QUFHQSxVQUFNLFVBQU4sT0FBTSxDQUFOO0FBRUY7O0FBQUEsU0FBT1osZUFBZSxDQUF0QjtBQUdGLEMsQ0FBQTs7O2VBQ2VBLGUsRUFFZjs7OztBQUdPLHFCQUFpQztBQUN0QyxTQUFPcEIsMEJBQWlCa0MsZUFBeEIsYUFBT2xDLENBQVA7QUFHRixDLENBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDTyxNQUFNbUMsWUFBWSxHQUFHLENBQUMsR0FBRCxTQUFpQztBQUMzRGYsaUJBQWUsQ0FBZkEsU0FBeUIsSUFBSU8sU0FBSixRQUFXLEdBQXBDUCxJQUF5QixDQUF6QkE7QUFDQUEsaUJBQWUsQ0FBZkEsdUJBQXdDdkQsRUFBRCxJQUFRQSxFQUEvQ3VEO0FBQ0FBLGlCQUFlLENBQWZBO0FBRUEsU0FBT0EsZUFBZSxDQUF0QjtBQUxLLEUsQ0FRUDs7Ozs7QUFDTywwQ0FBOEQ7QUFDbkUsUUFBTWdCLE9BQU8sR0FBYjtBQUNBLFFBQU1DLFFBQVEsR0FBZDs7QUFFQSxPQUFLLE1BQUwsK0JBQTBDO0FBQ3hDLFFBQUksT0FBT0QsT0FBTyxDQUFkLFFBQWMsQ0FBZCxLQUFKLFVBQTJDO0FBQ3pDQyxjQUFRLENBQVJBLFFBQVEsQ0FBUkEsR0FBcUIvQyxNQUFNLENBQU5BLFdBQWtCOEMsT0FBTyxDQUE5Q0MsUUFBOEMsQ0FBekIvQyxDQUFyQitDLENBRHlDLENBQ2lCOztBQUMxRDtBQUdGQTs7QUFBQUEsWUFBUSxDQUFSQSxRQUFRLENBQVJBLEdBQXFCRCxPQUFPLENBQTVCQyxRQUE0QixDQUE1QkE7QUFHRixHQWJtRSxDQWFuRTs7O0FBQ0FBLFVBQVEsQ0FBUkEsU0FBa0JWLGlCQUFsQlU7QUFFQVosa0JBQWdCLENBQWhCQSxRQUEwQkcsS0FBRCxJQUFXO0FBQ2xDUyxZQUFRLENBQVJBLEtBQVEsQ0FBUkEsR0FBa0IsQ0FBQyxHQUFELFNBQW9CO0FBQ3BDLGFBQU9ELE9BQU8sQ0FBUEEsS0FBTyxDQUFQQSxDQUFlLEdBQXRCLElBQU9BLENBQVA7QUFERkM7QUFERlo7QUFNQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS0Q7O0FBRUE7O0FBV2UsdUNBSytCO0FBQzVDLG9DQUF1QztBQUNyQyx3QkFBTztBQUFtQixZQUFNLEVBQUUsWUFBM0IsU0FBMkI7QUFBM0IsT0FBUCxLQUFPLEVBQVA7QUFHRjs7QUFBQSxtQkFBaUIsQ0FBakIsa0JBQW9DYSxpQkFBaUIsQ0FBQ0MsZUFBdEQsQ0FDQTtBQURBO0FBRUVDLG1CQUFELG9CQUFDQSxHQUFpREYsaUJBQUQsQ0FBakQsbUJBQUNFOztBQUNGLFlBQTJDO0FBQ3pDLFVBQU1DLElBQUksR0FDUkgsaUJBQWlCLENBQWpCQSxlQUFpQ0EsaUJBQWlCLENBQWxEQSxRQURGO0FBRUFFLHFCQUFpQixDQUFqQkEsY0FBaUMsY0FBYUMsSUFBOUNEO0FBR0Y7O0FBQUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNqQ1k7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQThDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBb0Q7QUFDN0U7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5QkFBeUIsMENBQTBDO0FBQ25FO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCLDJDQUEyQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBNEM7QUFDckU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGlCQUFpQixtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQSxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLG9FQUFvRSxVQUFVLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaURBQWlELEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msd09BQXdPLFVBQVUsRUFBRTtBQUNwUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2REFBNkQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyWkE7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7O0FBVWUsZ0JBQTZCO0FBQzFDLFFBQU1FLEdBQStCLEdBQUdwRCxNQUFNLENBQU5BLE9BQXhDLElBQXdDQSxDQUF4QztBQUVBLFNBQU87QUFDTHFELE1BQUUsZ0JBQWlDO0FBQ2pDO0FBQUMsT0FBQ0QsR0FBRyxDQUFIQSxJQUFHLENBQUhBLEtBQWNBLEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxHQUFmLEVBQUNBLENBQUQ7QUFGRTs7QUFLTEUsT0FBRyxnQkFBaUM7QUFDbEMsVUFBSUYsR0FBRyxDQUFQLElBQU8sQ0FBUCxFQUFlO0FBQ2JBLFdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxRQUFpQkEsR0FBRyxDQUFIQSxJQUFHLENBQUhBLHNCQUFqQkE7QUFFSDtBQVRJOztBQVdMRyxRQUFJLE9BQWUsR0FBZixNQUErQjtBQUNqQztBQUNBO0FBQUMsT0FBQ0gsR0FBRyxDQUFIQSxJQUFHLENBQUhBLElBQUQsZ0JBQStCSSxPQUFELElBQXNCO0FBQ25EQSxlQUFPLENBQUMsR0FBUkEsSUFBTyxDQUFQQTtBQUREO0FBYkw7O0FBQU8sR0FBUDtBQWtCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRDs7QUFLQTs7QUFDQTs7QUFDQTs7QUFTQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBMUJBO0FBQUE7QUFDQTs7O0FBdUNBLE1BQU1DLFFBQVEsR0FBSTVCLFVBQWxCOztBQUVBLGtDQUFrQztBQUNoQyxTQUFPN0IsTUFBTSxDQUFOQSxPQUFjLFVBQWRBLGlCQUFjLENBQWRBLEVBQTRDO0FBQ2pEMEQsYUFBUyxFQURYO0FBQW1ELEdBQTVDMUQsQ0FBUDtBQUtLOztBQUFBLDJCQUE0QztBQUNqRCxTQUFPMkIsSUFBSSxLQUFKQSxZQUFxQkEsSUFBSSxDQUFKQSxXQUFnQjhCLFFBQVEsR0FBcEQsR0FBNEI5QixDQUE1QjtBQUdLOztBQUFBLDJCQUEyQztBQUNoRDtBQUNBLFNBQU84QixRQUFRLElBQUk5QixJQUFJLENBQUpBLFdBQVo4QixHQUFZOUIsQ0FBWjhCLEdBQ0g5QixJQUFJLEtBQUpBLE1BQ0Usd0RBREZBLFFBQ0UsQ0FERkEsR0FFRThCLFFBQVEsR0FIUEEsT0FBUDtBQU9LOztBQUFBLDJCQUEyQztBQUNoRCxTQUFPOUIsSUFBSSxDQUFKQSxNQUFXOEIsUUFBUSxDQUFuQjlCLFdBQVA7QUFHRjtBQUFBOzs7OztBQUdPLHlCQUEwQztBQUMvQyxNQUFJZ0MsR0FBRyxDQUFIQSxXQUFKLEdBQUlBLENBQUosRUFBeUI7O0FBQ3pCLE1BQUk7QUFDRjtBQUNBLFVBQU1DLGNBQWMsR0FBRyxXQUF2QixpQkFBdUIsR0FBdkI7QUFDQSxVQUFNQyxRQUFRLEdBQUcsYUFBakIsY0FBaUIsQ0FBakI7QUFDQSxXQUFPQSxRQUFRLENBQVJBLDZCQUFzQ0MsV0FBVyxDQUFDRCxRQUFRLENBQWpFLFFBQXdELENBQXhEO0FBQ0EsR0FMRixDQUtFLFVBQVU7QUFDVjtBQUVIO0FBSUQ7QUFBQTs7Ozs7O0FBSU8sd0NBQTZEO0FBQ2xFO0FBQ0EsUUFBTUUsSUFBSSxHQUFHLHFCQUFiLFVBQWEsQ0FBYjtBQUNBLFFBQU1DLFdBQVcsR0FDZixrQ0FBa0MsaUNBRHBDLElBQ29DLENBRHBDOztBQUVBLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUcscUJBQWpCLElBQWlCLENBQWpCO0FBQ0FBLFlBQVEsQ0FBUkEsV0FBb0Isd0RBQTJCQSxRQUFRLENBQXZEQSxRQUFvQixDQUFwQkEsQ0FGRSxDQUdGOztBQUNBLFdBQU9BLFFBQVEsQ0FBUkEsV0FBb0JGLElBQUksQ0FBeEJFLFNBQ0hBLFFBQVEsQ0FBUkEsV0FBb0JBLFFBQVEsQ0FBUkEsT0FEakJBLE1BQ0hBLENBREdBLEdBRUhBLFFBQVEsQ0FGWjtBQUdBLEdBUEYsQ0FPRSxVQUFVO0FBQ1Y7QUFFSDtBQUVEOztBQUFBLE1BQU1DLGVBQWUsR0FBR0MsTUFBTSxDQUE5QixpQkFBOEIsQ0FBOUI7O0FBQ08sK0JBQTZDO0FBQ2xELFNBQU9uRSxNQUFNLENBQU5BLHFDQUFQLEVBQU9BLENBQVA7QUFHRjs7QUFBQSx1Q0FBNkQ7QUFDM0Q7QUFDQTtBQUNBLFNBQU87QUFDTDJELE9BQUcsRUFBRVMsV0FBVyxDQUFDQyxXQUFXLENBQUN4RixNQUFNLENBQVAsVUFEdkIsR0FDdUIsQ0FBWixDQURYO0FBRUxTLE1BQUUsRUFBRUEsRUFBRSxHQUFHOEUsV0FBVyxDQUFDQyxXQUFXLENBQUN4RixNQUFNLENBQVAsVUFBMUIsRUFBMEIsQ0FBWixDQUFkLEdBRlI7QUFBTyxHQUFQO0FBc0RGOztBQUFBLE1BQU15Rix1QkFBdUIsR0FDM0J6QyxVQUVBLEtBSEY7O0FBS0EsbUNBQWlFO0FBQy9ELFNBQU8sS0FBSyxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTBDLGVBQVcsRUFaTjtBQUFXLEdBQU4sQ0FBTCxNQWFFQyxHQUFELElBQVM7QUFDZixRQUFJLENBQUNBLEdBQUcsQ0FBUixJQUFhO0FBQ1gsVUFBSUMsUUFBUSxHQUFSQSxLQUFnQkQsR0FBRyxDQUFIQSxVQUFwQixLQUF1QztBQUNyQyxlQUFPRSxVQUFVLE1BQU1ELFFBQVEsR0FBL0IsQ0FBaUIsQ0FBakI7QUFFRjs7QUFBQSxZQUFNLFVBQU4sNkJBQU0sQ0FBTjtBQUdGOztBQUFBLFdBQU9ELEdBQUcsQ0FBVixJQUFPQSxFQUFQO0FBckJGLEdBQU8sQ0FBUDtBQXlCRjs7QUFBQSxpREFBa0U7QUFDaEUsU0FBTyxVQUFVLFdBQVdHLGNBQWMsT0FBbkMsQ0FBVSxDQUFWLE9BQW9EN0YsR0FBRCxJQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxRQUFJLENBQUosZ0JBQXFCO0FBQ25COEYsc0JBQWdCLENBQWhCQSxHQUFnQixDQUFoQkE7QUFFRjs7QUFBQTtBQVBGLEdBQU8sQ0FBUDtBQVdhOztBQUFBLE1BQU12QyxNQUFOLENBQW1DO0FBT2hEOzs7QUFJQTtBQWVBd0MsYUFBVyx5QkFJVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUztBQUlULEdBSlMsRUF5QlQ7QUFBQSxTQWxERkMsS0FrREU7QUFBQSxTQWpERmxFLFFBaURFO0FBQUEsU0FoREZtRSxLQWdERTtBQUFBLFNBL0NGQyxNQStDRTtBQUFBLFNBOUNGdkIsUUE4Q0U7QUFBQSxTQXpDRndCLFVBeUNFO0FBQUEsU0F2Q0ZDLEdBdUNFLEdBdkNrQyxFQXVDbEM7QUFBQSxTQXRDRkMsR0FzQ0U7QUFBQSxTQXJDRkMsR0FxQ0U7QUFBQSxTQXBDRkMsVUFvQ0U7QUFBQSxTQW5DRkMsSUFtQ0U7QUFBQSxTQWxDRkMsTUFrQ0U7QUFBQSxTQWpDRkMsUUFpQ0U7QUFBQSxTQWhDRkMsS0FnQ0U7QUFBQSxTQS9CRkMsVUErQkU7QUFBQSxTQTlCRkMsY0E4QkU7QUFBQSxTQTdCRkMsUUE2QkU7O0FBQUEsc0JBK0ZZMUcsQ0FBRCxJQUE0QjtBQUN2QyxZQUFNMkcsS0FBSyxHQUFHM0csQ0FBQyxDQUFmOztBQUVBLFVBQUksQ0FBSixPQUFZO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUFBO0FBQUE7QUFBQSxZQUFOO0FBQ0EseUNBRUUsaUNBQXFCO0FBQUUwQixrQkFBUSxFQUFFd0QsV0FBVyxDQUF2QixRQUF1QixDQUF2QjtBQUZ2QjtBQUV1QixTQUFyQixDQUZGLEVBR0UsV0FIRixNQUdFLEdBSEY7QUFLQTtBQUdGOztBQUFBLFVBQUksQ0FBQ3lCLEtBQUssQ0FBVixLQUFnQjtBQUNkO0FBR0Y7O0FBQUEsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU47QUFFQSxZQUFNO0FBQUE7QUFBQSxVQUFlLHdDQUFyQixHQUFxQixDQUFyQixDQTVCdUMsQ0E4QnZDO0FBQ0E7O0FBQ0EsVUFBSSxjQUFjdkcsRUFBRSxLQUFLLEtBQXJCLFVBQW9Dc0IsUUFBUSxLQUFLLEtBQXJELFVBQW9FO0FBQ2xFO0FBR0YsT0FwQ3VDLENBb0N2QztBQUNBOzs7QUFDQSxVQUFJLGFBQWEsQ0FBQyxVQUFsQixLQUFrQixDQUFsQixFQUFvQztBQUNsQztBQUdGOztBQUFBLDJDQUlFWixNQUFNLENBQU5BLG9CQUEyQjtBQUN6QkssZUFBTyxFQUFFeUYsT0FBTyxDQUFQQSxXQUFtQixLQUxoQztBQUk2QixPQUEzQjlGLENBSkY7QUF6SUEsT0FDQTs7O0FBQ0EsaUJBQWEscURBQWIsU0FBYSxDQUFiLENBRkEsQ0FJQTs7QUFDQSx5QkFMQSxDQU1BO0FBQ0E7QUFDQTs7QUFDQSxRQUFJWSxTQUFRLEtBQVosV0FBNEI7QUFDMUIsc0JBQWdCLEtBQWhCLFNBQThCO0FBQUE7QUFFNUJtRixtQkFBVyxFQUZpQjtBQUc1QjlGLGFBQUssRUFIdUI7QUFBQTtBQUs1QitGLGVBQU8sRUFBRUMsWUFBWSxJQUFJQSxZQUFZLENBTFQ7QUFNNUJDLGVBQU8sRUFBRUQsWUFBWSxJQUFJQSxZQUFZLENBTnZDO0FBQThCLE9BQTlCO0FBVUY7O0FBQUEsK0JBQTJCO0FBQ3pCRSxlQUFTLEVBRGdCO0FBRXpCSixpQkFBVyxFQUFFO0FBRmY7QUFFZTtBQUZZLEtBQTNCLENBcEJBLENBMkJBO0FBQ0E7O0FBQ0Esa0JBQWMxRCxNQUFNLENBQXBCO0FBRUE7QUFDQTtBQUNBLHdCQWpDQSxDQWtDQTtBQUNBOztBQUNBLGtCQUNFO0FBQ0EsaURBQTRCK0QsYUFBYSxDQUF6Qyx5QkFGRjtBQUdBO0FBQ0E7QUFDQTtBQUNBLDRCQTFDQSxDQTJDQTtBQUNBOztBQUNBO0FBRUE7O0FBRUEsZUFBbUMsRUE0Q3BDO0FBc0REQzs7QUFBQUEsUUFBTSxHQUFTO0FBQ2JuSSxVQUFNLENBQU5BO0FBR0Y7QUFBQTs7Ozs7QUFHQW9JLE1BQUksR0FBRztBQUNMcEksVUFBTSxDQUFOQTtBQUdGO0FBQUE7Ozs7Ozs7O0FBTUFxSSxNQUFJLE1BQVdqSCxFQUFPLEdBQWxCLEtBQTBCd0csT0FBMEIsR0FBcEQsSUFBMkQ7QUFDN0Q7QUFBQyxLQUFDO0FBQUE7QUFBQTtBQUFBLFFBQWNVLFlBQVksWUFBM0IsRUFBMkIsQ0FBM0I7QUFDRCxXQUFPLGtDQUFQLE9BQU8sQ0FBUDtBQUdGO0FBQUE7Ozs7Ozs7O0FBTUFqSCxTQUFPLE1BQVdELEVBQU8sR0FBbEIsS0FBMEJ3RyxPQUEwQixHQUFwRCxJQUEyRDtBQUNoRTtBQUFDLEtBQUM7QUFBQTtBQUFBO0FBQUEsUUFBY1UsWUFBWSxZQUEzQixFQUEyQixDQUEzQjtBQUNELFdBQU8scUNBQVAsT0FBTyxDQUFQO0FBR0Y7O0FBQUEseUNBS29CO0FBQ2xCLFFBQUksQ0FBQ0MsVUFBVSxDQUFmLEdBQWUsQ0FBZixFQUFzQjtBQUNwQnZJLFlBQU0sQ0FBTkE7QUFDQTtBQUdGOztBQUFBLFFBQUksQ0FBRTRILE9BQUQsQ0FBTCxJQUEwQjtBQUN4QjtBQUVGLEtBVGtCLENBU2xCOzs7QUFDQSxRQUFJWSxPQUFKLElBQVE7QUFDTkMsaUJBQVcsQ0FBWEE7QUFHRjs7QUFBQSxRQUFJLEtBQUosZ0JBQXlCO0FBQ3ZCLDhCQUF3QixLQUF4QjtBQUdGOztBQUFBLFVBQU1DLFNBQVMsR0FBRzlDLFdBQVcsQ0FBWEEsRUFBVyxDQUFYQSxHQUFrQitDLFdBQVcsQ0FBN0IvQyxFQUE2QixDQUE3QkEsR0FBbEI7QUFDQSw2QkFuQmtCLENBcUJsQjtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLFFBQUksQ0FBRWdDLE9BQUQsQ0FBRCxNQUF3QixxQkFBNUIsU0FBNEIsQ0FBNUIsRUFBNkQ7QUFDM0Q7QUFDQXpELFlBQU0sQ0FBTkEsbUNBRjJELENBRzNEOztBQUNBO0FBQ0E7QUFDQSxrQkFBWSxnQkFBZ0IsS0FBNUIsS0FBWSxDQUFaO0FBQ0FBLFlBQU0sQ0FBTkE7QUFDQTtBQUdGLEtBdENrQixDQXNDbEI7QUFDQTtBQUNBOzs7QUFDQSxVQUFNeUUsS0FBSyxHQUFHLE1BQU0sZ0JBQXBCLFdBQW9CLEVBQXBCO0FBQ0EsVUFBTTtBQUFFQyxnQkFBVSxFQUFaO0FBQUEsUUFBMkIsTUFBTSxnQkFBdkM7QUFFQSxRQUFJQyxNQUFNLEdBQUcsd0NBQWIsR0FBYSxDQUFiO0FBRUEsUUFBSTtBQUFBO0FBQUE7QUFBQSxRQUFKO0FBRUFBLFVBQU0sR0FBRywwQkFBVEEsS0FBUyxDQUFUQTs7QUFFQSxRQUFJQSxNQUFNLENBQU5BLGFBQUosVUFBa0M7QUFDaENwRyxjQUFRLEdBQUdvRyxNQUFNLENBQWpCcEc7QUFDQStDLFNBQUcsR0FBRyxpQ0FBTkEsTUFBTSxDQUFOQTtBQUdGOztBQUFBLFVBQU1vQixLQUFLLEdBQUcseUNBQWQsWUFBYyxDQUFkLENBdkRrQixDQXlEbEI7QUFDQTtBQUNBOztBQUNBbkUsWUFBUSxHQUFHQSxRQUFRLEdBQ2YscURBQXdCaUcsV0FBVyxDQURwQixRQUNvQixDQUFuQyxDQURlLEdBQW5CakcsU0E1RGtCLENBZ0VsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQUksQ0FBQyxjQUFMLFNBQUssQ0FBTCxFQUErQjtBQUM3QnFHLFlBQU0sR0FBTkE7QUFHRjs7QUFBQSxVQUFNbkMsS0FBSyxHQUFHLHFEQUFkLFFBQWMsQ0FBZDtBQUNBLFVBQU07QUFBRXpFLGFBQU8sR0FBVDtBQUFBLFFBQU4sUUExRWtCLENBNEVsQjtBQUNBOztBQUNBLFFBQUk2RyxVQUFVLEdBQWQ7O0FBRUEsUUFBSXJGLElBQUosRUFBcUM7QUFDbkNxRixnQkFBVSxHQUFHLG9FQU1WdkcsQ0FBRCxJQUFlLGtCQUFrQjtBQUFFQyxnQkFBUSxFQUE1QjtBQUFrQixPQUFsQixTQU5qQnNHLFFBQWEsQ0FBYkE7QUFTRkE7O0FBQUFBLGNBQVUsR0FBR0wsV0FBVyxDQUF4QkssVUFBd0IsQ0FBeEJBOztBQUVBLFFBQUksK0JBQUosS0FBSSxDQUFKLEVBQTJCO0FBQ3pCLFlBQU07QUFBRXRHLGdCQUFRLEVBQVY7QUFBQSxVQUEyQix3Q0FBakMsVUFBaUMsQ0FBakM7QUFDQSxZQUFNdUcsVUFBVSxHQUFHLCtCQUFuQixLQUFtQixDQUFuQjtBQUNBLFlBQU1DLFVBQVUsR0FBRywrQ0FBbkIsVUFBbUIsQ0FBbkI7O0FBQ0EsVUFBSSxDQUFKLFlBQWlCO0FBQ2YsY0FBTUMsYUFBYSxHQUFHckgsTUFBTSxDQUFOQSxLQUFZbUgsVUFBVSxDQUF0Qm5ILGVBQ25Cc0gsS0FBRCxJQUFXLENBQUN2QyxLQUFLLENBRG5CLEtBQ21CLENBREcvRSxDQUF0Qjs7QUFJQSxZQUFJcUgsYUFBYSxDQUFiQSxTQUFKLEdBQThCO0FBQzVCLG9CQUEyQztBQUN6Q3pJLG1CQUFPLENBQVBBLEtBQ0UsNkRBQUMsR0FDRSxlQUFjeUksYUFBYSxDQUFiQSxVQUZuQnpJO0FBUUY7O0FBQUEsZ0JBQU0sVUFDSCw4QkFBNkIySSxVQUFXLDhDQUE2Q3pDLEtBQXRGLEtBQUMsR0FESCwrREFBTSxDQUFOO0FBS0g7QUFwQkQsYUFvQk87QUFDTDtBQUNBOUUsY0FBTSxDQUFOQTtBQUVIO0FBRURxQzs7QUFBQUEsVUFBTSxDQUFOQTs7QUFFQSxRQUFJO0FBQ0YsWUFBTW1GLFNBQVMsR0FBRyxNQUFNLDhDQUF4QixPQUF3QixDQUF4QjtBQU9BLFVBQUk7QUFBQTtBQUFBLFVBQUo7QUFFQW5GLFlBQU0sQ0FBTkE7QUFDQTs7QUFFQSxnQkFBMkM7QUFDekMsY0FBTW9GLE9BQVksR0FBRyx5QkFBckI7QUFDRXZKLGNBQUQsS0FBQ0EsQ0FBRCxhQUFDQSxHQUNBdUosT0FBTyxDQUFQQSxvQkFBNEJBLE9BQU8sQ0FBbkNBLHVCQUNBLENBQUVELFNBQVMsQ0FBVixTQUFDQSxDQUZILGVBQUN0SjtBQUtKOztBQUFBLFlBQU0sNkRBQ0hnQixDQUFELElBQU87QUFDTCxZQUFJQSxDQUFDLENBQUwsV0FBaUJ3SSxLQUFLLEdBQUdBLEtBQUssSUFBOUIsQ0FBaUJBLENBQWpCLEtBQ0s7QUFIVCxPQUFNLENBQU47O0FBT0EsaUJBQVc7QUFDVHJGLGNBQU0sQ0FBTkE7QUFDQTtBQUdGOztBQUFBLFVBQUlSLEtBQUosRUFBMkMsRUFLM0NROztBQUFBQSxZQUFNLENBQU5BO0FBRUE7QUFDQSxLQXhDRixDQXdDRSxZQUFZO0FBQ1osVUFBSXZELEdBQUcsQ0FBUCxXQUFtQjtBQUNqQjtBQUVGOztBQUFBO0FBRUg7QUFFRDZJOztBQUFBQSxhQUFXLGtCQUlUN0IsT0FBMEIsR0FKakIsSUFLSDtBQUNOLGNBQTJDO0FBQ3pDLFVBQUksT0FBTzVILE1BQU0sQ0FBYixZQUFKLGFBQTJDO0FBQ3pDVSxlQUFPLENBQVBBO0FBQ0E7QUFHRjs7QUFBQSxVQUFJLE9BQU9WLE1BQU0sQ0FBTkEsUUFBUCxNQUFPQSxDQUFQLEtBQUosYUFBbUQ7QUFDakRVLGVBQU8sQ0FBUEEsTUFBZSwyQkFBMEJxSSxNQUF6Q3JJO0FBQ0E7QUFFSDtBQUVEOztBQUFBLFFBQUlxSSxNQUFNLEtBQU5BLGVBQTBCLHlCQUE5QixJQUErQztBQUM3QyxzQkFBZ0JuQixPQUFPLENBQXZCO0FBQ0EsWUFBTSxDQUFOLGdCQUNFO0FBQUE7QUFBQTtBQUFBO0FBSUU4QixXQUFHLEVBTFA7QUFDRSxPQURGLEVBT0U7QUFDQTtBQUNBO0FBVEY7QUFjSDtBQUVEOztBQUFBLHNFQU02QjtBQUMzQixRQUFJOUksR0FBRyxDQUFQLFdBQW1CO0FBQ2pCO0FBQ0E7QUFHRjs7QUFBQSxRQUFJb0YsZUFBZSxJQUFmQSxPQUFKLGVBQTZDO0FBQzNDN0IsWUFBTSxDQUFOQSx5Q0FEMkMsQ0FHM0M7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQW5FLFlBQU0sQ0FBTkEsbUJBVDJDLENBVzNDO0FBQ0E7O0FBQ0EsWUFBTTJKLHNCQUFOO0FBR0Y7O0FBQUEsUUFBSTtBQUNGLFlBQU07QUFBRUMsWUFBSSxFQUFOO0FBQUE7QUFBQSxVQUFtQyxNQUFNLG9CQUEvQyxTQUErQyxDQUEvQztBQUdBLFlBQU1OLFNBQTJCLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFJbENFLGFBQUssRUFKUDtBQUFvQyxPQUFwQzs7QUFPQSxVQUFJO0FBQ0ZGLGlCQUFTLENBQVRBLFFBQWtCLE1BQU0sZ0NBQWdDO0FBQUE7QUFBQTtBQUF4REE7QUFBd0QsU0FBaEMsQ0FBeEJBO0FBS0EsT0FORixDQU1FLGVBQWU7QUFDZjVJLGVBQU8sQ0FBUEE7QUFDQTRJLGlCQUFTLENBQVRBO0FBR0Y7O0FBQUE7QUFDQSxLQXZCRixDQXVCRSxxQkFBcUI7QUFDckIsYUFBTyw2REFBUCxJQUFPLENBQVA7QUFFSDtBQUVEOztBQUFBLGlEQUtFbkgsT0FBZ0IsR0FMbEIsT0FNNkI7QUFDM0IsUUFBSTtBQUNGLFlBQU0wSCxlQUFlLEdBQUcsZ0JBQXhCLEtBQXdCLENBQXhCOztBQUVBLFVBQUkxSCxPQUFPLElBQVBBLG1CQUE4QixlQUFsQyxPQUF3RDtBQUN0RDtBQUdGOztBQUFBLFlBQU1tSCxTQUEyQixHQUFHTyxlQUFlLHFCQUUvQyxNQUFNLGdDQUFpQ3ZELEdBQUQsS0FBVTtBQUM5QzJCLGlCQUFTLEVBQUUzQixHQUFHLENBRGdDO0FBRTlDdUIsbUJBQVcsRUFBRXZCLEdBQUcsQ0FGOEI7QUFHOUN3QixlQUFPLEVBQUV4QixHQUFHLENBQUhBLElBSHFDO0FBSTlDMEIsZUFBTyxFQUFFMUIsR0FBRyxDQUFIQSxJQU5mO0FBRW9ELE9BQVYsQ0FBaEMsQ0FGVjtBQVNBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFOOztBQUVBLGdCQUEyQztBQUN6QyxjQUFNO0FBQUE7QUFBQSxZQUF5QndELG1CQUFPLENBQXRDLDBCQUFzQyxDQUF0Qzs7QUFDQSxZQUFJLENBQUNDLGtCQUFrQixDQUF2QixTQUF1QixDQUF2QixFQUFvQztBQUNsQyxnQkFBTSxVQUNILHlEQUF3RHJILFFBRDNELEdBQU0sQ0FBTjtBQUlIO0FBRUQ7O0FBQUE7O0FBRUEsVUFBSW9GLE9BQU8sSUFBWCxTQUF3QjtBQUN0QmtDLGdCQUFRLEdBQUcsNEJBQ1QsaUNBQXFCO0FBQUE7QUFEWjtBQUNZLFNBQXJCLENBRFMsRUFFVHJCLFdBQVcsQ0FGRixFQUVFLENBRkYsRUFBWHFCLE9BQVcsQ0FBWEE7QUFPRjs7QUFBQSxZQUFNakksS0FBSyxHQUFHLE1BQU0sY0FBZ0MsTUFDbEQrRixPQUFPLEdBQ0gsb0JBREcsUUFDSCxDQURHLEdBRUhFLE9BQU8sR0FDUCxvQkFETyxRQUNQLENBRE8sR0FFUCxnQ0FFRTtBQUNBO0FBQUE7QUFBQTtBQUdFbEIsY0FBTSxFQVhoQjtBQVFRLE9BSEYsQ0FMYyxDQUFwQjtBQWVBd0MsZUFBUyxDQUFUQTtBQUNBO0FBQ0E7QUFDQSxLQXZERixDQXVERSxZQUFZO0FBQ1osYUFBTyxnREFBUCxFQUFPLENBQVA7QUFFSDtBQUVEVzs7QUFBQUEsS0FBRyxtQ0FNYztBQUNmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFPLFlBQVAsSUFBTyxDQUFQO0FBR0Y7QUFBQTs7Ozs7O0FBSUFDLGdCQUFjLEtBQTZCO0FBQ3pDO0FBR0ZDOztBQUFBQSxpQkFBZSxLQUFzQjtBQUNuQyxRQUFJLENBQUMsS0FBTCxRQUFrQjtBQUNsQixVQUFNLDBCQUEwQixrQkFBaEMsR0FBZ0MsQ0FBaEM7QUFDQSxVQUFNLDBCQUEwQi9JLEVBQUUsQ0FBRkEsTUFBaEMsR0FBZ0NBLENBQWhDLENBSG1DLENBS25DOztBQUNBLFFBQUlnSixPQUFPLElBQUlDLFlBQVksS0FBdkJELGdCQUE0Q0UsT0FBTyxLQUF2RCxTQUFxRTtBQUNuRTtBQUdGLEtBVm1DLENBVW5DOzs7QUFDQSxRQUFJRCxZQUFZLEtBQWhCLGNBQW1DO0FBQ2pDO0FBR0YsS0FmbUMsQ0FlbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9DLE9BQU8sS0FBZDtBQUdGQzs7QUFBQUEsY0FBWSxLQUFtQjtBQUM3QixVQUFNLFdBQVduSixFQUFFLENBQUZBLE1BQWpCLEdBQWlCQSxDQUFqQixDQUQ2QixDQUU3Qjs7QUFDQSxRQUFJb0osSUFBSSxLQUFSLElBQWlCO0FBQ2Z4SyxZQUFNLENBQU5BO0FBQ0E7QUFHRixLQVI2QixDQVE3Qjs7O0FBQ0EsVUFBTXlLLElBQUksR0FBR2xKLFFBQVEsQ0FBUkEsZUFBYixJQUFhQSxDQUFiOztBQUNBLGNBQVU7QUFDUmtKLFVBQUksQ0FBSkE7QUFDQTtBQUVGLEtBZDZCLENBYzdCO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR25KLFFBQVEsQ0FBUkEsd0JBQWYsQ0FBZUEsQ0FBZjs7QUFDQSxnQkFBWTtBQUNWbUosWUFBTSxDQUFOQTtBQUVIO0FBRURDOztBQUFBQSxVQUFRLFNBQTBCO0FBQ2hDLFdBQU8sZ0JBQVA7QUFHRkM7O0FBQUFBLGNBQVksb0JBQXlDO0FBQ25ELFVBQU07QUFBQTtBQUFBLFFBQU47QUFDQSxVQUFNQyxhQUFhLEdBQUcsOENBQW9CbEMsV0FBVyxDQUFyRCxRQUFxRCxDQUEvQixDQUF0Qjs7QUFFQSxRQUFJa0MsYUFBYSxLQUFiQSxVQUE0QkEsYUFBYSxLQUE3QyxXQUE2RDtBQUMzRDtBQUdGLEtBUm1ELENBUW5EOzs7QUFDQSxRQUFJLENBQUNqQyxLQUFLLENBQUxBLFNBQUwsYUFBS0EsQ0FBTCxFQUFxQztBQUNuQztBQUNBQSxXQUFLLENBQUxBLEtBQVlnQixJQUFELElBQVU7QUFDbkIsWUFDRSx3Q0FDQSw2Q0FGRixhQUVFLENBRkYsRUFHRTtBQUNBa0Isb0JBQVUsQ0FBVkEsV0FBc0I1RSxXQUFXLENBQWpDNEUsSUFBaUMsQ0FBakNBO0FBQ0E7QUFFSDtBQVJEbEM7QUFVRjs7QUFBQTtBQUdGO0FBQUE7Ozs7Ozs7O0FBTUEsc0JBRUU5QixNQUFjLEdBRmhCLEtBR0VjLE9BQXdCLEdBSDFCLElBSWlCO0FBQ2YsUUFBSWtCLE1BQU0sR0FBRyx3Q0FBYixHQUFhLENBQWI7QUFFQSxRQUFJO0FBQUE7QUFBQSxRQUFKO0FBRUEsVUFBTUYsS0FBSyxHQUFHLE1BQU0sZ0JBQXBCLFdBQW9CLEVBQXBCO0FBRUFFLFVBQU0sR0FBRywwQkFBVEEsS0FBUyxDQUFUQTs7QUFFQSxRQUFJQSxNQUFNLENBQU5BLGFBQUosVUFBa0M7QUFDaENwRyxjQUFRLEdBQUdvRyxNQUFNLENBQWpCcEc7QUFDQStDLFNBQUcsR0FBRyxpQ0FBTkEsTUFBTSxDQUFOQTtBQUdGLEtBZGUsQ0FjZjs7O0FBQ0EsY0FBMkM7QUFDekM7QUFHRjs7QUFBQSxVQUFNbUIsS0FBSyxHQUFHLHFEQUFkLFFBQWMsQ0FBZDtBQUNBLFVBQU1tRSxPQUFPLENBQVBBLElBQVksQ0FDaEIsa0NBRGdCLE1BQ2hCLENBRGdCLEVBRWhCLGdCQUFnQm5ELE9BQU8sQ0FBUEEsd0JBQWhCLFlBRkYsS0FFRSxDQUZnQixDQUFabUQsQ0FBTjtBQU1GOztBQUFBLDhCQUE0RDtBQUMxRCxRQUFJdkYsU0FBUyxHQUFiOztBQUNBLFVBQU13RixNQUFNLEdBQUksV0FBVyxNQUFNO0FBQy9CeEYsZUFBUyxHQUFUQTtBQURGOztBQUlBLFVBQU15RixlQUFlLEdBQUcsTUFBTSx5QkFBOUIsS0FBOEIsQ0FBOUI7O0FBRUEsbUJBQWU7QUFDYixZQUFNekIsS0FBVSxHQUFHLFVBQ2hCLHdDQUF1QzVDLEtBRDFDLEdBQW1CLENBQW5CO0FBR0E0QyxXQUFLLENBQUxBO0FBQ0E7QUFHRjs7QUFBQSxRQUFJd0IsTUFBTSxLQUFLLEtBQWYsS0FBeUI7QUFDdkI7QUFHRjs7QUFBQTtBQUdGRTs7QUFBQUEsVUFBUSxLQUFzQztBQUM1QyxRQUFJMUYsU0FBUyxHQUFiOztBQUNBLFVBQU13RixNQUFNLEdBQUcsTUFBTTtBQUNuQnhGLGVBQVMsR0FBVEE7QUFERjs7QUFHQTtBQUNBLFdBQU8yRixFQUFFLEdBQUZBLEtBQVdDLElBQUQsSUFBVTtBQUN6QixVQUFJSixNQUFNLEtBQUssS0FBZixLQUF5QjtBQUN2QjtBQUdGOztBQUFBLHFCQUFlO0FBQ2IsY0FBTXBLLEdBQVEsR0FBRyxVQUFqQixpQ0FBaUIsQ0FBakI7QUFDQUEsV0FBRyxDQUFIQTtBQUNBO0FBR0Y7O0FBQUE7QUFYRixLQUFPdUssQ0FBUDtBQWVGRTs7QUFBQUEsZ0JBQWMsV0FBb0M7QUFDaEQsVUFBTTtBQUFFeEssVUFBSSxFQUFOO0FBQUEsUUFBcUIsa0JBQWtCYixNQUFNLENBQU5BLFNBQTdDLElBQTJCLENBQTNCOztBQUNBLFFBQUkyRCxLQUFKLEVBQWlFLEVBR2pFOztBQUFBLFdBQU8ySCxhQUFhLFdBQVcsS0FBeEJBLEtBQWEsQ0FBYkEsTUFBMENGLElBQUQsSUFBVTtBQUN4RDtBQUNBO0FBRkYsS0FBT0UsQ0FBUDtBQU1GQzs7QUFBQUEsZ0JBQWMsV0FBb0M7QUFDaEQsV0FBT0QsYUFBYSxXQUFXLEtBQS9CLEtBQW9CLENBQXBCO0FBR0Z2Rzs7QUFBQUEsaUJBQWUsaUJBR0M7QUFDZCxVQUFNO0FBQUVrRCxlQUFTLEVBQVg7QUFBQSxRQUFxQixnQkFBM0IsT0FBMkIsQ0FBM0I7O0FBQ0EsVUFBTXVELE9BQU8sR0FBRyxjQUFoQixHQUFnQixDQUFoQjs7QUFDQUMsT0FBRyxDQUFIQTtBQUNBLFdBQU8scUNBQWlEO0FBQUE7QUFBQTtBQUd0RDlLLFlBQU0sRUFIZ0Q7QUFBeEQ7QUFBd0QsS0FBakQsQ0FBUDtBQVFGK0s7O0FBQUFBLG9CQUFrQixLQUFtQjtBQUNuQyxRQUFJLEtBQUosS0FBYztBQUNadkgsWUFBTSxDQUFOQSxnQ0FBdUN3RixzQkFBdkN4RjtBQUNBO0FBQ0E7QUFFSDtBQUVEd0g7O0FBQUFBLFFBQU0sT0FBd0M7QUFDNUMsV0FBTyxlQUFlLHlCQUF0QixTQUFPLENBQVA7QUE5d0I4Qzs7QUFBQTs7O0FBQTdCeEgsTSxDQXdCWmtELE1BeEJZbEQsR0F3QlUsb0JBeEJWQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hMckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF4QkEsQyxDQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUEsTUFBTXlILGdCQUFnQixHQUF0Qjs7QUFFTywyQkFBc0M7QUFDM0MsTUFBSTtBQUFBO0FBQUE7QUFBQSxNQUFKO0FBQ0EsTUFBSUMsUUFBUSxHQUFHQyxNQUFNLENBQU5BLFlBQWY7QUFDQSxNQUFJcEosUUFBUSxHQUFHb0osTUFBTSxDQUFOQSxZQUFmO0FBQ0EsTUFBSXRCLElBQUksR0FBR3NCLE1BQU0sQ0FBTkEsUUFBWDtBQUNBLE1BQUlqRixLQUFLLEdBQUdpRixNQUFNLENBQU5BLFNBQVo7QUFDQSxNQUFJQyxJQUFvQixHQUF4QjtBQUVBQyxNQUFJLEdBQUdBLElBQUksR0FBR0Msa0JBQWtCLENBQWxCQSxJQUFrQixDQUFsQkEsd0JBQUgsTUFBWEQ7O0FBRUEsTUFBSUYsTUFBTSxDQUFWLE1BQWlCO0FBQ2ZDLFFBQUksR0FBR0MsSUFBSSxHQUFHRixNQUFNLENBQXBCQztBQURGLFNBRU8sY0FBYztBQUNuQkEsUUFBSSxHQUFHQyxJQUFJLElBQUksQ0FBQ0UsUUFBUSxDQUFSQSxRQUFELEdBQUNBLENBQUQsR0FBMEIsSUFBR0EsUUFBN0IsTUFBZkgsUUFBVyxDQUFYQTs7QUFDQSxRQUFJRCxNQUFNLENBQVYsTUFBaUI7QUFDZkMsVUFBSSxJQUFJLE1BQU1ELE1BQU0sQ0FBcEJDO0FBRUg7QUFFRDs7QUFBQSxNQUFJbEYsS0FBSyxJQUFJLGlCQUFiLFVBQXdDO0FBQ3RDQSxTQUFLLEdBQUdzRixNQUFNLENBQUNDLFdBQVcsQ0FBWEEsdUJBQWZ2RixLQUFldUYsQ0FBRCxDQUFkdkY7QUFHRjs7QUFBQSxNQUFJd0YsTUFBTSxHQUFHUCxNQUFNLENBQU5BLFVBQWtCakYsS0FBSyxJQUFLLElBQUdBLEtBQS9CaUYsTUFBYjtBQUVBLE1BQUlELFFBQVEsSUFBSUEsUUFBUSxDQUFSQSxPQUFnQixDQUFoQkEsT0FBaEIsS0FBNkNBLFFBQVEsSUFBUkE7O0FBRTdDLE1BQ0VDLE1BQU0sQ0FBTkEsV0FDQyxDQUFDLGFBQWFGLGdCQUFnQixDQUFoQkEsS0FBZCxRQUFjQSxDQUFkLEtBQWtERyxJQUFJLEtBRnpELE9BR0U7QUFDQUEsUUFBSSxHQUFHLFFBQVFBLElBQUksSUFBbkJBLEVBQU8sQ0FBUEE7QUFDQSxRQUFJckosUUFBUSxJQUFJQSxRQUFRLENBQVJBLENBQVEsQ0FBUkEsS0FBaEIsS0FBcUNBLFFBQVEsR0FBRyxNQUFYQTtBQUx2QyxTQU1PLElBQUksQ0FBSixNQUFXO0FBQ2hCcUosUUFBSSxHQUFKQTtBQUdGOztBQUFBLE1BQUl2QixJQUFJLElBQUlBLElBQUksQ0FBSkEsQ0FBSSxDQUFKQSxLQUFaLEtBQTZCQSxJQUFJLEdBQUcsTUFBUEE7QUFDN0IsTUFBSTZCLE1BQU0sSUFBSUEsTUFBTSxDQUFOQSxDQUFNLENBQU5BLEtBQWQsS0FBaUNBLE1BQU0sR0FBRyxNQUFUQTtBQUVqQzNKLFVBQVEsR0FBR0EsUUFBUSxDQUFSQSxpQkFBWEEsa0JBQVdBLENBQVhBO0FBQ0EySixRQUFNLEdBQUdBLE1BQU0sQ0FBTkEsYUFBVEEsS0FBU0EsQ0FBVEE7QUFFQSxTQUFRLEdBQUVSLFFBQVMsR0FBRUUsSUFBSyxHQUFFckosUUFBUyxHQUFFMkosTUFBTyxHQUFFN0IsSUFBaEQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7eUNDeEVEOztBQUNBLE1BQU04QixVQUFVLEdBQWhCOztBQUVPLCtCQUFnRDtBQUNyRCxTQUFPQSxVQUFVLENBQVZBLEtBQVAsS0FBT0EsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFFBQ2pCLG9CQUE2QyxTQUQ1QixDQUFuQjtBQUlBOzs7Ozs7O0FBTU8scUNBQXNEO0FBQzNELFFBQU1DLFlBQVksR0FBRzNHLElBQUksR0FBRyxjQUFILFVBQUcsQ0FBSCxHQUF6QjtBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUYsYUFSSixZQVFJLENBUko7O0FBU0EsTUFDRTRHLE1BQU0sS0FBS0YsVUFBVSxDQUFyQkUsVUFDQ1osUUFBUSxLQUFSQSxXQUF3QkEsUUFBUSxLQUZuQyxVQUdFO0FBQ0EsVUFBTSxVQUFOLGlDQUFNLENBQU47QUFFRjs7QUFBQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLTGhMLFFBQUksRUFBRUEsSUFBSSxDQUFKQSxNQUFXMEwsVUFBVSxDQUFWQSxPQUxuQixNQUtRMUw7QUFMRCxHQUFQO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlPOztBQUFBLE1BQU02TCxjQUFjLEdBQUc7QUFDNUJDLFdBQVMsRUFEbUI7QUFFNUJDLFdBQVMsRUFGbUI7QUFHNUJDLFFBQU0sRUFIRDtBQUF1QixDQUF2Qjs7O0FBTUEsTUFBTUMseUJBQXlCLG1DQUFHLGNBQUg7QUFFcENDLFFBQU0sRUFGRDtBQUErQixFQUEvQjs7OztlQUtRLENBQUNDLFdBQVcsR0FBWixVQUF5QjtBQUN0QyxTQUFRdkosSUFBRCxJQUFrQjtBQUN2QixVQUFNd0osSUFBd0IsR0FBOUI7QUFDQSxVQUFNQyxZQUFZLEdBQUdDLFlBQVksQ0FBWkEseUJBR25CSCxXQUFXLCtCQUhiLGNBQXFCRyxDQUFyQjtBQUtBLFVBQU1DLE9BQU8sR0FBR0QsWUFBWSxDQUFaQSxxQ0FBaEIsY0FBZ0JBLENBQWhCO0FBTUEsV0FBTyxzQkFBdUQ7QUFDNUQsWUFBTTdHLEdBQUcsR0FBRzVELFFBQVEsSUFBUkEsZUFBMkIwSyxPQUFPLENBQTlDLFFBQThDLENBQTlDOztBQUNBLFVBQUksQ0FBSixLQUFVO0FBQ1I7QUFHRjs7QUFBQSx1QkFBaUI7QUFDZixhQUFLLE1BQUwsYUFBd0I7QUFDdEI7QUFDQTtBQUNBLGNBQUksT0FBTzNMLEdBQUcsQ0FBVixTQUFKLFVBQWtDO0FBQ2hDLG1CQUFRNkUsR0FBRyxDQUFKLE1BQUNBLENBQW1CN0UsR0FBRyxDQUE5QixJQUFRNkUsQ0FBUjtBQUVIO0FBQ0Y7QUFFRDs7QUFBQSw2Q0FBTyxNQUFQLEdBQXVCQSxHQUFHLENBQTFCO0FBaEJGO0FBYkY7Ozs7O0FBa0NGLDRCQUFvQztBQUNsQyxNQUFJO0FBQ0YsV0FBTytHLGtCQUFrQixDQUF6QixLQUF5QixDQUF6QjtBQUNBLEdBRkYsQ0FFRSxVQUFVO0FBQ1YsVUFBTXpNLEdBQThCLEdBQUcsVUFBdkMsd0JBQXVDLENBQXZDO0FBQ0FBLE9BQUcsQ0FBSEE7QUFDQTtBQUVIO0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REQ7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZTs7QUFBQSx1RkFNYjtBQUNBLE1BQUkwTSxpQkFLbUMsR0FMdkM7O0FBT0EsTUFBSUMsV0FBVyxDQUFYQSxXQUFKLEdBQUlBLENBQUosRUFBaUM7QUFDL0JELHFCQUFpQixHQUFHLHdDQUFwQkEsV0FBb0IsQ0FBcEJBO0FBREYsU0FFTztBQUNMLFVBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFTRixRQVRKLFdBU0ksQ0FUSjtBQVdBQSxxQkFBaUIsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCQTtBQUFvQixLQUFwQkE7QUFZRkE7O0FBQUFBLG1CQUFpQixDQUFqQkEsUUFBMEIseUNBQ3hCQSxpQkFBaUIsQ0FEbkJBLFlBQTBCLENBQTFCQTtBQUdBLFFBQU1FLFNBQVMsR0FBR0YsaUJBQWlCLENBQW5DO0FBQ0EsUUFBTUcsUUFBUSxHQUFJLEdBQUVILGlCQUFpQixDQUFDNUssUUFBVSxHQUM5QzRLLGlCQUFpQixDQUFqQkEsUUFBMEIsRUFENUI7QUFHQSxRQUFNSSxpQkFBcUMsR0FBM0M7QUFDQVAsY0FBWSxDQUFaQTtBQUVBLFFBQU1RLGNBQWMsR0FBR0QsaUJBQWlCLENBQWpCQSxJQUF1QmpNLEdBQUQsSUFBU0EsR0FBRyxDQUF6RCxJQUF1QmlNLENBQXZCO0FBRUEsTUFBSUUsbUJBQW1CLEdBQUcsWUFBWSxDQUFaLGtCQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFFQyxZQUFRLEVBUlo7QUFRRSxHQVJ3QixDQUExQjtBQVVBLGFBeERBLENBMERBOztBQUNBLE9BQUssTUFBTSxNQUFYLFVBQVcsQ0FBWCxJQUFnQy9MLE1BQU0sQ0FBTkEsUUFBaEMsU0FBZ0NBLENBQWhDLEVBQTJEO0FBQ3pELFFBQUlnTSxLQUFLLEdBQUdDLEtBQUssQ0FBTEEsc0JBQTRCQyxVQUFVLENBQXRDRCxDQUFzQyxDQUF0Q0EsR0FBWjs7QUFDQSxlQUFXO0FBQ1Q7QUFDQTtBQUNBRCxXQUFLLEdBQUksSUFBR0EsS0FBWkE7QUFDQSxZQUFNRyxhQUFhLEdBQUdkLFlBQVksQ0FBWkEsZUFBNEI7QUFBRVUsZ0JBQVEsRUFBNUQ7QUFBa0QsT0FBNUJWLENBQXRCO0FBQ0FXLFdBQUssR0FBR0csYUFBYSxDQUFiQSxNQUFhLENBQWJBLFFBQVJILENBQVFHLENBQVJIO0FBRUZOOztBQUFBQSxhQUFTLENBQVRBLEdBQVMsQ0FBVEE7QUFHRixHQXZFQSxDQXVFQTtBQUNBOzs7QUFDQSxRQUFNVSxTQUFTLEdBQUdwTSxNQUFNLENBQU5BLEtBQWxCLE1BQWtCQSxDQUFsQjs7QUFFQSxNQUNFcU0sbUJBQW1CLElBQ25CLENBQUNELFNBQVMsQ0FBVEEsS0FBZ0J6TSxHQUFELElBQVNrTSxjQUFjLENBQWRBLFNBRjNCLEdBRTJCQSxDQUF4Qk8sQ0FGSCxFQUdFO0FBQ0EsU0FBSyxNQUFMLGtCQUE2QjtBQUMzQixVQUFJLEVBQUV6TSxHQUFHLElBQVQsU0FBSSxDQUFKLEVBQXlCO0FBQ3ZCK0wsaUJBQVMsQ0FBVEEsR0FBUyxDQUFUQSxHQUFpQlksTUFBTSxDQUF2QlosR0FBdUIsQ0FBdkJBO0FBRUg7QUFDRjtBQUVEOztBQUFBLFFBQU1hLGlCQUFpQixHQUFHZCxXQUFXLENBQVhBLG1CQUExQjs7QUFFQSxNQUFJO0FBQ0ZlLFVBQU0sR0FBSSxHQUFFRCxpQkFBaUIsY0FBYyxFQUFHLEdBQUVFLFNBQVMsQ0FDdkRYLG1CQUFtQixDQURvQyxNQUNwQyxDQURvQyxDQUF6RFU7QUFJQSxVQUFNLG1CQUFtQkEsTUFBTSxDQUFOQSxNQUF6QixHQUF5QkEsQ0FBekI7QUFDQWhCLHFCQUFpQixDQUFqQkE7QUFDQUEscUJBQWlCLENBQWpCQSxPQUEwQixHQUFFOUMsSUFBSSxTQUFTLEVBQUcsR0FBRUEsSUFBSSxJQUFJLEVBQXREOEM7QUFDQSxXQUFPQSxpQkFBaUIsQ0FBeEI7QUFDQSxXQUFPQSxpQkFBaUIsQ0FBeEI7QUFDQSxHQVZGLENBVUUsWUFBWTtBQUNaLFFBQUkxTSxHQUFHLENBQUhBLGNBQUosOENBQUlBLENBQUosRUFBdUU7QUFDckUsWUFBTSxVQUFOLHdLQUFNLENBQU47QUFJRjs7QUFBQTtBQUdGLEdBM0dBLENBMkdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTBNLG1CQUFpQixDQUFqQkEsd0NBQTBCLEtBQTFCQSxHQUVLQSxpQkFBaUIsQ0FGdEJBO0FBS0EsU0FBTztBQUFBO0FBQVA7QUFBTyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JTSw4Q0FFVztBQUNoQixRQUFNekcsS0FBcUIsR0FBM0I7QUFDQTJILGNBQVksQ0FBWkEsUUFBcUIsZ0JBQWdCO0FBQ25DLFFBQUksT0FBTzNILEtBQUssQ0FBWixHQUFZLENBQVosS0FBSixhQUF1QztBQUNyQ0EsV0FBSyxDQUFMQSxHQUFLLENBQUxBO0FBREYsV0FFTyxJQUFJa0gsS0FBSyxDQUFMQSxRQUFjbEgsS0FBSyxDQUF2QixHQUF1QixDQUFuQmtILENBQUosRUFBK0I7QUFDcEM7QUFBRWxILFdBQUssQ0FBTixHQUFNLENBQUxBLENBQUQsSUFBQ0EsQ0FBRCxLQUFDQTtBQURHLFdBRUE7QUFDTEEsV0FBSyxDQUFMQSxHQUFLLENBQUxBLEdBQWEsQ0FBQ0EsS0FBSyxDQUFOLEdBQU0sQ0FBTixFQUFiQSxLQUFhLENBQWJBO0FBRUg7QUFSRDJIO0FBU0E7QUFHSzs7QUFBQSwwQ0FFWTtBQUNqQixRQUFNQyxNQUFNLEdBQUcsSUFBZixlQUFlLEVBQWY7QUFDQTNNLFFBQU0sQ0FBTkEsMEJBQWlDLENBQUMsTUFBRCxLQUFDLENBQUQsS0FBa0I7QUFDakQsUUFBSWlNLEtBQUssQ0FBTEEsUUFBSixLQUFJQSxDQUFKLEVBQTBCO0FBQ3hCRCxXQUFLLENBQUxBLFFBQWVZLElBQUQsSUFBVUQsTUFBTSxDQUFOQSxZQUF4QlgsSUFBd0JXLENBQXhCWDtBQURGLFdBRU87QUFDTFcsWUFBTSxDQUFOQTtBQUVIO0FBTkQzTTtBQU9BO0FBR0s7O0FBQUEsd0JBRUwsR0FGSyxrQkFHWTtBQUNqQjZNLGtCQUFnQixDQUFoQkEsUUFBMEJILFlBQUQsSUFBa0I7QUFDekNULFNBQUssQ0FBTEEsS0FBV1MsWUFBWSxDQUF2QlQsSUFBV1MsRUFBWFQsVUFBeUN0TSxHQUFELElBQVNWLE1BQU0sQ0FBTkEsT0FBakRnTixHQUFpRGhOLENBQWpEZ047QUFDQVMsZ0JBQVksQ0FBWkEsUUFBcUIsZ0JBQWdCek4sTUFBTSxDQUFOQSxZQUFyQ3lOLEtBQXFDek4sQ0FBckN5TjtBQUZGRztBQUlBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7O0FBQ0E7Ozs7OztBQUdBOztBQUFBLE1BQU1DLGtCQUFrQixHQUFHLHdCQUEzQixJQUEyQixDQUEzQjs7QUFFZSxnRkFPYjtBQUNBLE1BQUksQ0FBQ2hHLEtBQUssQ0FBTEEsU0FBTCxNQUFLQSxDQUFMLEVBQTZCO0FBQzNCLFNBQUssTUFBTCxxQkFBZ0M7QUFDOUIsWUFBTXdFLE9BQU8sR0FBR3dCLGtCQUFrQixDQUFDQyxPQUFPLENBQTFDLE1BQWtDLENBQWxDO0FBQ0EsWUFBTVQsTUFBTSxHQUFHaEIsT0FBTyxDQUF0QixNQUFzQixDQUF0Qjs7QUFFQSxrQkFBWTtBQUNWLFlBQUksQ0FBQ3lCLE9BQU8sQ0FBWixhQUEwQjtBQUN4QjtBQUNBO0FBRUY7O0FBQUEsY0FBTUMsT0FBTyxHQUFHLGlDQUNkRCxPQUFPLENBRE8sa0NBS2RBLE9BQU8sQ0FBUEEsMEJBTEYsUUFBZ0IsQ0FBaEI7QUFPQS9ILGNBQU0sR0FBR2dJLE9BQU8sQ0FBUEEsa0JBQVRoSTtBQUNBaEYsY0FBTSxDQUFOQSxjQUFxQmdOLE9BQU8sQ0FBUEEsa0JBQXJCaE47O0FBRUEsWUFBSThHLEtBQUssQ0FBTEEsU0FBSixNQUFJQSxDQUFKLEVBQTRCO0FBQzFCO0FBQ0E7QUFDQTtBQUdGLFNBckJVLENBcUJWOzs7QUFDQSxjQUFNakcsWUFBWSxHQUFHd0QsV0FBVyxDQUFoQyxNQUFnQyxDQUFoQzs7QUFFQSxZQUFJeEQsWUFBWSxLQUFaQSxVQUEyQmlHLEtBQUssQ0FBTEEsU0FBL0IsWUFBK0JBLENBQS9CLEVBQTZEO0FBQzNEO0FBRUg7QUFDRjtBQUNGO0FBQ0Q7O0FBQUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pETSxxQ0FBdUU7QUFDNUUsUUFBTTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBUWxHLFFBQUQsSUFBeUM7QUFDOUMsVUFBTXdHLFVBQVUsR0FBRzZGLEVBQUUsQ0FBRkEsS0FBbkIsUUFBbUJBLENBQW5COztBQUNBLFFBQUksQ0FBSixZQUFpQjtBQUNmO0FBR0Y7O0FBQUEsVUFBTWxDLE1BQU0sR0FBSXpELEtBQUQsSUFBbUI7QUFDaEMsVUFBSTtBQUNGLGVBQU9pRSxrQkFBa0IsQ0FBekIsS0FBeUIsQ0FBekI7QUFDQSxPQUZGLENBRUUsVUFBVTtBQUNWLGNBQU16TSxHQUE4QixHQUFHLFVBQXZDLHdCQUF1QyxDQUF2QztBQUdBQSxXQUFHLENBQUhBO0FBQ0E7QUFFSDtBQVZEOztBQVdBLFVBQU13TixNQUFrRCxHQUF4RDtBQUVBdE0sVUFBTSxDQUFOQSxxQkFBNkJrTixRQUFELElBQXNCO0FBQ2hELFlBQU1DLENBQUMsR0FBR0MsTUFBTSxDQUFoQixRQUFnQixDQUFoQjtBQUNBLFlBQU1DLENBQUMsR0FBR2pHLFVBQVUsQ0FBQytGLENBQUMsQ0FBdEIsR0FBb0IsQ0FBcEI7O0FBQ0EsVUFBSUUsQ0FBQyxLQUFMLFdBQXFCO0FBQ25CZixjQUFNLENBQU5BLFFBQU0sQ0FBTkEsR0FBbUIsQ0FBQ2UsQ0FBQyxDQUFEQSxRQUFELEdBQUNBLENBQUQsR0FDZkEsQ0FBQyxDQUFEQSxlQUFrQi9PLEtBQUQsSUFBV3lNLE1BQU0sQ0FEbkIsS0FDbUIsQ0FBbENzQyxDQURlLEdBRWZGLENBQUMsQ0FBREEsU0FDQSxDQUFDcEMsTUFBTSxDQURQb0MsQ0FDTyxDQUFQLENBREFBLEdBRUFwQyxNQUFNLENBSlZ1QixDQUlVLENBSlZBO0FBTUg7QUFWRHRNO0FBV0E7QUE5QkY7QUFnQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3VDQzlCRDtBQUNBOztBQUNBLDBCQUFrQztBQUNoQyxTQUFPc04sR0FBRyxDQUFIQSxnQ0FBUCxNQUFPQSxDQUFQO0FBR0Y7O0FBQUEsK0JBQXVDO0FBQ3JDLFFBQU1DLFFBQVEsR0FBR2pHLEtBQUssQ0FBTEEsbUJBQXlCQSxLQUFLLENBQUxBLFNBQTFDLEdBQTBDQSxDQUExQzs7QUFDQSxnQkFBYztBQUNaQSxTQUFLLEdBQUdBLEtBQUssQ0FBTEEsU0FBZSxDQUF2QkEsQ0FBUUEsQ0FBUkE7QUFFRjs7QUFBQSxRQUFNa0csTUFBTSxHQUFHbEcsS0FBSyxDQUFMQSxXQUFmLEtBQWVBLENBQWY7O0FBQ0EsY0FBWTtBQUNWQSxTQUFLLEdBQUdBLEtBQUssQ0FBTEEsTUFBUkEsQ0FBUUEsQ0FBUkE7QUFFRjs7QUFBQSxTQUFPO0FBQUUzSCxPQUFHLEVBQUw7QUFBQTtBQUFQO0FBQU8sR0FBUDtBQUdLOztBQUFBLHdDQU9MO0FBQ0EsUUFBTThOLFFBQVEsR0FBRyxDQUFDQyxlQUFlLENBQWZBLHNCQUFELG9CQUFqQixHQUFpQixDQUFqQjtBQUlBLFFBQU1OLE1BQXNDLEdBQTVDO0FBQ0EsTUFBSU8sVUFBVSxHQUFkO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdILFFBQVEsQ0FBUkEsSUFDbkJJLE9BQUQsSUFBYTtBQUNoQixRQUFJQSxPQUFPLENBQVBBLG1CQUEyQkEsT0FBTyxDQUFQQSxTQUEvQixHQUErQkEsQ0FBL0IsRUFBc0Q7QUFDcEQsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTRCQyxjQUFjLENBQUNELE9BQU8sQ0FBUEEsU0FBaUIsQ0FBbEUsQ0FBaURBLENBQUQsQ0FBaEQ7QUFDQVQsWUFBTSxDQUFOQSxHQUFNLENBQU5BLEdBQWM7QUFBRVcsV0FBRyxFQUFFSixVQUFQO0FBQUE7QUFBZFA7QUFBYyxPQUFkQTtBQUNBLGFBQU9JLE1BQU0sR0FBSUQsUUFBUSxtQkFBWixXQUFiO0FBSEYsV0FJTztBQUNMLGFBQVEsSUFBR1MsV0FBVyxTQUF0QjtBQUVIO0FBVHdCUCxVQUEzQixFQUEyQkEsQ0FBM0IsQ0FQQSxDQW1CQTtBQUNBOztBQUNBLFlBQW1DO0FBQ2pDLFFBQUlRLGdCQUFnQixHQUFwQjtBQUNBLFFBQUlDLGtCQUFrQixHQUF0QixFQUZpQyxDQUlqQzs7QUFDQSxVQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUM1QixVQUFJQyxRQUFRLEdBQVo7O0FBRUEsV0FBSyxJQUFJQyxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBakIsb0JBQXdDQSxDQUF4QyxJQUE2QztBQUMzQ0QsZ0JBQVEsSUFBSS9ELE1BQU0sQ0FBTkEsYUFBWitELGdCQUFZL0QsQ0FBWitEO0FBQ0FILHdCQUFnQjs7QUFFaEIsWUFBSUEsZ0JBQWdCLEdBQXBCLEtBQTRCO0FBQzFCQyw0QkFBa0I7QUFDbEJELDBCQUFnQixHQUFoQkE7QUFFSDtBQUNEOztBQUFBO0FBWkY7O0FBZUEsVUFBTUssU0FBc0MsR0FBNUM7QUFFQSxRQUFJQyx1QkFBdUIsR0FBR2QsUUFBUSxDQUFSQSxJQUN0QkksT0FBRCxJQUFhO0FBQ2hCLFVBQUlBLE9BQU8sQ0FBUEEsbUJBQTJCQSxPQUFPLENBQVBBLFNBQS9CLEdBQStCQSxDQUEvQixFQUFzRDtBQUNwRCxjQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBNEJDLGNBQWMsQ0FBQ0QsT0FBTyxDQUFQQSxTQUFpQixDQUFsRSxDQUFpREEsQ0FBRCxDQUFoRCxDQURvRCxDQUVwRDtBQUNBOztBQUNBLFlBQUlXLFVBQVUsR0FBRzdPLEdBQUcsQ0FBSEEsZUFBakIsRUFBaUJBLENBQWpCO0FBQ0EsWUFBSThPLFVBQVUsR0FBZCxNQUxvRCxDQU9wRDtBQUNBOztBQUNBLFlBQUlELFVBQVUsQ0FBVkEsZ0JBQTJCQSxVQUFVLENBQVZBLFNBQS9CLElBQXVEO0FBQ3JEQyxvQkFBVSxHQUFWQTtBQUVGOztBQUFBLFlBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLENBQUNILFVBQVUsQ0FBVkEsVUFBcEIsQ0FBb0JBLENBQUQsQ0FBVCxDQUFWLEVBQStDO0FBQzdDQyxvQkFBVSxHQUFWQTtBQUdGOztBQUFBLHdCQUFnQjtBQUNkRCxvQkFBVSxHQUFHTCxlQUFiSztBQUdGRjs7QUFBQUEsaUJBQVMsQ0FBVEEsVUFBUyxDQUFUQTtBQUNBLGVBQU9kLE1BQU0sR0FDVEQsUUFBUSxHQUNMLFVBQVNpQixVQURKLFlBRUwsT0FBTUEsVUFIQSxVQUlSLE9BQU1BLFVBSlg7QUFyQkYsYUEwQk87QUFDTCxlQUFRLElBQUdSLFdBQVcsU0FBdEI7QUFFSDtBQS9CMkJQLFlBQTlCLEVBQThCQSxDQUE5QjtBQWtDQSxXQUFPO0FBQ0xSLFFBQUUsRUFBRSxXQUFZLElBQUdXLGtCQURkLFNBQ0QsQ0FEQztBQUFBO0FBQUE7QUFJTGdCLGdCQUFVLEVBQUcsSUFBR0wsdUJBSmxCO0FBQU8sS0FBUDtBQVFGOztBQUFBLFNBQU87QUFDTHRCLE1BQUUsRUFBRSxXQUFZLElBQUdXLGtCQURkLFNBQ0QsQ0FEQztBQUFQO0FBQU8sR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIRDtBQWtRQTs7Ozs7QUFHTyxzQkFFRjtBQUNILE1BQUlpQixJQUFJLEdBQVI7QUFDQTtBQUVBLFNBQVEsQ0FBQyxHQUFELFNBQW9CO0FBQzFCLFFBQUksQ0FBSixNQUFXO0FBQ1RBLFVBQUksR0FBSkE7QUFDQWxDLFlBQU0sR0FBR3RELEVBQUUsQ0FBQyxHQUFac0QsSUFBVyxDQUFYQTtBQUVGOztBQUFBO0FBTEY7QUFTSzs7QUFBQSw2QkFBNkI7QUFDbEMsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQStCek8sTUFBTSxDQUEzQztBQUNBLFNBQVEsR0FBRTZMLFFBQVMsS0FBSUssUUFBUyxHQUFFMEUsSUFBSSxHQUFHLE1BQUgsT0FBZ0IsRUFBdEQ7QUFHSzs7QUFBQSxrQkFBa0I7QUFDdkIsUUFBTTtBQUFBO0FBQUEsTUFBVzVRLE1BQU0sQ0FBdkI7QUFDQSxRQUFNeU0sTUFBTSxHQUFHb0UsaUJBQWY7QUFDQSxTQUFPaFEsSUFBSSxDQUFKQSxVQUFlNEwsTUFBTSxDQUE1QixNQUFPNUwsQ0FBUDtBQUdLOztBQUFBLG1DQUF3RDtBQUM3RCxTQUFPLDRDQUVIb0gsU0FBUyxDQUFUQSxlQUF5QkEsU0FBUyxDQUFsQ0EsUUFGSjtBQUtLOztBQUFBLHdCQUF3QztBQUM3QyxTQUFPM0IsR0FBRyxDQUFIQSxZQUFnQkEsR0FBRyxDQUExQjtBQUdLOztBQUFBLDZDQUlrRDtBQUN2RCxZQUEyQztBQUFBOztBQUN6QywwQkFBSXdLLEdBQUcsQ0FBUCw0REFBSUEsZUFBSixpQkFBb0M7QUFDbEMsWUFBTXRNLE9BQU8sR0FBSSxJQUFHdU0sY0FBYyxLQUFsQztBQUdBLFlBQU0sVUFBTixPQUFNLENBQU47QUFFSDtBQUNELEdBVHVELENBU3ZEOzs7QUFDQSxRQUFNekssR0FBRyxHQUFHbUYsR0FBRyxDQUFIQSxPQUFZQSxHQUFHLENBQUhBLE9BQVdBLEdBQUcsQ0FBSEEsSUFBbkM7O0FBRUEsTUFBSSxDQUFDcUYsR0FBRyxDQUFSLGlCQUEwQjtBQUN4QixRQUFJckYsR0FBRyxDQUFIQSxPQUFXQSxHQUFHLENBQWxCLFdBQThCO0FBQzVCO0FBQ0EsYUFBTztBQUNMdUYsaUJBQVMsRUFBRSxNQUFNQyxtQkFBbUIsQ0FBQ3hGLEdBQUcsQ0FBSixXQUFnQkEsR0FBRyxDQUR6RCxHQUNzQztBQUQvQixPQUFQO0FBSUY7O0FBQUE7QUFHRjs7QUFBQSxRQUFNMUosS0FBSyxHQUFHLE1BQU0rTyxHQUFHLENBQUhBLGdCQUFwQixHQUFvQkEsQ0FBcEI7O0FBRUEsTUFBSXhLLEdBQUcsSUFBSTRLLFNBQVMsQ0FBcEIsR0FBb0IsQ0FBcEIsRUFBMkI7QUFDekI7QUFHRjs7QUFBQSxNQUFJLENBQUosT0FBWTtBQUNWLFVBQU0xTSxPQUFPLEdBQUksSUFBR3VNLGNBQWMsS0FFaEMsK0RBQThEaFAsS0FGaEU7QUFHQSxVQUFNLFVBQU4sT0FBTSxDQUFOO0FBR0Y7O0FBQUEsWUFBMkM7QUFDekMsUUFBSUQsTUFBTSxDQUFOQSw0QkFBbUMsQ0FBQzJKLEdBQUcsQ0FBM0MsS0FBaUQ7QUFDL0MvSyxhQUFPLENBQVBBLEtBQ0csR0FBRXFRLGNBQWMsS0FEbkJyUTtBQU1IO0FBRUQ7O0FBQUE7QUFHSzs7QUFBQSxNQUFNeVEsYUFBYSxHQUFHLHdHQUF0QixTQUFzQixDQUF0Qjs7O0FBZUEsbUNBQXNEO0FBQzNELFlBQTRDO0FBQzFDLFFBQUkxTCxHQUFHLEtBQUhBLFFBQWdCLGVBQXBCLFVBQTZDO0FBQzNDM0QsWUFBTSxDQUFOQSxrQkFBMEJMLEdBQUQsSUFBUztBQUNoQyxZQUFJMFAsYUFBYSxDQUFiQSxpQkFBK0IsQ0FBbkMsR0FBdUM7QUFDckN6USxpQkFBTyxDQUFQQSxLQUNHLHFEQUFvRGUsR0FEdkRmO0FBSUg7QUFORG9CO0FBUUg7QUFFRDs7QUFBQSxTQUFPLDBCQUFQLEdBQU8sQ0FBUDtBQUdLOztBQUFBLE1BQU1zUCxFQUFFLEdBQUcsdUJBQVg7O0FBQ0EsTUFBTTVJLEVBQUUsR0FDYjRJLEVBQUUsSUFDRixPQUFPM0ksV0FBVyxDQUFsQixTQURBMkksY0FFQSxPQUFPM0ksV0FBVyxDQUFsQixZQUhLOzs7Ozs7Ozs7Ozs7O0FDallNLHdCQUF3QiwwQ0FBMEMsZ0RBQWdELGdDQUFnQyxnQ0FBZ0MsbUNBQW1DLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHlCQUF5QixVQUFVO0FBQ3BWLGlEOzs7Ozs7Ozs7OztBQ0RBLGlCQUFpQixtQkFBTyxDQUFDLG1FQUFvQjs7Ozs7Ozs7Ozs7OztBQ0E3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNaEQsR0FBRyxHQUFHLE9BQVo7QUFFTyxNQUFNNEwsYUFBYSxHQUFJQyxNQUFELElBQVk7QUFDdkMsTUFBSUMsUUFBUSxHQUFHRCxNQUFNLEdBQUdFLHVEQUFPLEdBQUcvTCxHQUFWLEdBQWlCLElBQUc2TCxNQUFPLEVBQTlCLEdBQWtDRSx1REFBTyxHQUFHL0wsR0FBakU7QUFDQSxTQUFPZ00sNERBQVksQ0FBQ3ZOLEdBQWIsQ0FBaUJxTixRQUFqQixDQUFQO0FBQ0QsQ0FITTtBQUtBLE1BQU1HLHNCQUFzQixHQUFJQyxHQUFELElBQVM7QUFDN0MsTUFBSUosUUFBUSxHQUFHQyx1REFBTyxHQUFHL0wsR0FBVixHQUFnQixHQUFoQixHQUFzQm1NLGlFQUFXLENBQUMsV0FBRCxFQUFjRCxHQUFkLENBQWhEO0FBQ0EsU0FBT0YsNERBQVksQ0FBQ3ZOLEdBQWIsQ0FBaUJxTixRQUFqQixDQUFQO0FBQ0QsQ0FITTtBQUtBLE1BQU1NLFdBQVcsR0FBSXpHLElBQUQsSUFBVTtBQUNuQyxNQUFJbUcsUUFBUSxHQUFHQyx1REFBTyxHQUFHL0wsR0FBekI7QUFDQSxTQUFPZ00sNERBQVksQ0FBQ0ssSUFBYixDQUFrQlAsUUFBbEIsRUFBNEJuRyxJQUE1QixDQUFQO0FBQ0QsQ0FITTtBQUtBLE1BQU0yRyxjQUFjLEdBQUlULE1BQUQsSUFBWTtBQUN4QyxNQUFJQyxRQUFRLEdBQUdDLHVEQUFPLEdBQUcvTCxHQUFWLEdBQWlCLElBQUc2TCxNQUFPLEVBQTFDO0FBQ0EsU0FBT0csNERBQVksQ0FBQ08sTUFBYixDQUFvQlQsUUFBcEIsQ0FBUDtBQUNELENBSE07QUFLQSxNQUFNVSxjQUFjLEdBQUcsQ0FBQ1gsTUFBRCxFQUFTbEcsSUFBVCxLQUFrQjtBQUM5QyxNQUFJbUcsUUFBUSxHQUFHQyx1REFBTyxHQUFHL0wsR0FBVixHQUFpQixJQUFHNkwsTUFBTyxFQUExQztBQUNBLFNBQU9HLDREQUFZLENBQUNTLEtBQWIsQ0FBbUJYLFFBQW5CLEVBQTZCbkcsSUFBN0IsQ0FBUDtBQUNELENBSE0sQzs7Ozs7Ozs7Ozs7O0FDMUJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNM0YsR0FBRyxHQUFHLFVBQVo7O0FBRUEsTUFBTTBNLFNBQVMsR0FBRyxDQUFDMU0sR0FBRCxFQUFNMk0sS0FBTixFQUFhQyxRQUFiLEtBQTBCO0FBQzFDLFNBQ0U1TSxHQUFHLEdBQUcsR0FBTixHQUFZbU0saUVBQVcsQ0FBQyxRQUFELEVBQVdRLEtBQVgsQ0FBdkIsR0FBMkNSLGlFQUFXLENBQUMsVUFBRCxFQUFhUyxRQUFiLENBRHhEO0FBR0QsQ0FKRCxDLENBTUE7OztBQUNPLE1BQU1DLGlCQUFpQixHQUFJekwsS0FBRCxJQUFXO0FBQzFDLE1BQUkwSyxRQUFRLEdBQ1ZZLFNBQVMsQ0FBQ1gsdURBQU8sR0FBRy9MLEdBQVgsRUFBZ0JvQixLQUFLLENBQUN1TCxLQUF0QixFQUE2QnZMLEtBQUssQ0FBQ3dMLFFBQW5DLENBQVQsR0FDQVQsaUVBQVcsQ0FBQyxPQUFELEVBQVUvSyxLQUFLLENBQUMrQyxJQUFoQixDQURYLEdBRUFnSSxpRUFBVyxDQUFDLE9BQUQsRUFBVS9LLEtBQUssQ0FBQzBMLElBQU4sQ0FBV0EsSUFBckIsQ0FGWCxHQUdBWCxpRUFBVyxDQUFDLFFBQUQsRUFBVy9LLEtBQUssQ0FBQzBMLElBQU4sQ0FBV0MsS0FBdEIsQ0FIWCxHQUlBWixpRUFBVyxDQUFDLEdBQUQsRUFBTS9LLEtBQUssQ0FBQzRMLENBQVosQ0FKWCxHQUtBYixpRUFBVyxDQUFDLHNCQUFELEVBQXlCL0ssS0FBSyxDQUFDNkwsS0FBL0IsQ0FMWCxHQU1BZCxpRUFBVyxDQUFDLHFCQUFELEVBQXdCL0ssS0FBSyxDQUFDOEwsSUFBOUIsQ0FOWCxHQU9BZixpRUFBVyxDQUFDLFVBQUQsRUFBYS9LLEtBQUssQ0FBQytMLEdBQW5CLENBUmI7QUFTQSxTQUFPbkIsNERBQVksQ0FBQ3ZOLEdBQWIsQ0FBaUJxTixRQUFqQixDQUFQO0FBQ0QsQ0FYTTtBQWFBLE1BQU1zQixxQkFBcUIsR0FBSWhNLEtBQUQsSUFBVztBQUM5QyxNQUFJMEssUUFBUSxHQUFHWSxTQUFTLENBQUNYLHVEQUFPLEdBQUcvTCxHQUFYLEVBQWdCb0IsS0FBSyxDQUFDdUwsS0FBdEIsRUFBNkJ2TCxLQUFLLENBQUN3TCxRQUFuQyxDQUF4QjtBQUNBLFNBQU9aLDREQUFZLENBQUN2TixHQUFiLENBQWlCcU4sUUFBakIsQ0FBUDtBQUNELENBSE07QUFLQSxNQUFNdUIseUJBQXlCLEdBQUlqTSxLQUFELElBQVc7QUFDbEQsTUFBSTBLLFFBQVEsR0FBR1ksU0FBUyxDQUFDWCx1REFBTyxHQUFHL0wsR0FBWCxFQUFnQm9CLEtBQUssQ0FBQ3VMLEtBQXRCLEVBQTZCdkwsS0FBSyxDQUFDd0wsUUFBbkMsQ0FBeEI7QUFDQSxTQUFPWiw0REFBWSxDQUFDdk4sR0FBYixDQUFpQnFOLFFBQWpCLENBQVA7QUFDRCxDQUhNO0FBS0EsTUFBTXdCLDJCQUEyQixHQUFJbE0sS0FBRCxJQUFXO0FBQ3BELE1BQUkwSyxRQUFRLEdBQUdZLFNBQVMsQ0FBQ1gsdURBQU8sR0FBRy9MLEdBQVgsRUFBZ0JvQixLQUFLLENBQUN1TCxLQUF0QixFQUE2QnZMLEtBQUssQ0FBQ3dMLFFBQW5DLENBQXhCO0FBQ0EsU0FBT1osNERBQVksQ0FBQ3ZOLEdBQWIsQ0FBaUJxTixRQUFqQixDQUFQO0FBQ0QsQ0FITTtBQUtBLE1BQU15QixxQkFBcUIsR0FBSW5NLEtBQUQsSUFBVztBQUM5QyxNQUFJMEssUUFBUSxHQUFHWSxTQUFTLENBQUNYLHVEQUFPLEdBQUcvTCxHQUFYLEVBQWdCb0IsS0FBSyxDQUFDdUwsS0FBdEIsRUFBNkJ2TCxLQUFLLENBQUN3TCxRQUFuQyxDQUF4QjtBQUNBLFNBQU9aLDREQUFZLENBQUN2TixHQUFiLENBQWlCcU4sUUFBakIsQ0FBUDtBQUNELENBSE0sQyxDQUtQOztBQUNPLE1BQU0wQixzQkFBc0IsR0FBSUMsSUFBRCxJQUFVO0FBQzlDLE1BQUkzQixRQUFRLEdBQUdDLHVEQUFPLEdBQUcvTCxHQUFWLEdBQWdCLEdBQWhCLEdBQXNCbU0saUVBQVcsQ0FBQyxNQUFELEVBQVNzQixJQUFULENBQWhEO0FBQ0EsU0FBT3pCLDREQUFZLENBQUN2TixHQUFiLENBQWlCcU4sUUFBakIsQ0FBUDtBQUNELENBSE0sQyxDQUtQOztBQUNPLE1BQU00Qix3QkFBd0IsR0FBSXRNLEtBQUQsSUFBVztBQUNqRCxNQUFJMEssUUFBUSxHQUNWQyx1REFBTyxHQUNQL0wsR0FEQSxHQUVBLEdBRkEsR0FHQW1NLGlFQUFXLENBQUMsR0FBRCxFQUFNL0ssS0FBSyxDQUFDdU0sS0FBWixDQUhYLEdBSUF4QixpRUFBVyxDQUFDLFVBQUQsRUFBYS9LLEtBQUssQ0FBQ3dMLFFBQW5CLENBSlgsR0FLQVQsaUVBQVcsQ0FBQyxRQUFELEVBQVcvSyxLQUFLLENBQUN1TCxLQUFqQixDQU5iO0FBT0EsU0FBT1gsNERBQVksQ0FBQ3ZOLEdBQWIsQ0FBaUJxTixRQUFqQixDQUFQO0FBQ0QsQ0FUTSxDOzs7Ozs7Ozs7Ozs7QUNyRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU05TCxHQUFHLEdBQUcsV0FBWjtBQUVPLE1BQU00TixpQkFBaUIsR0FBRyxNQUFNO0FBQ3JDLE1BQUk5QixRQUFRLEdBQUdDLHVEQUFPLEdBQUcvTCxHQUF6QjtBQUNBLFNBQU9nTSw0REFBWSxDQUFDdk4sR0FBYixDQUFpQnFOLFFBQWpCLENBQVA7QUFDRCxDQUhNO0FBS0EsTUFBTStCLDBCQUEwQixHQUFJM0IsR0FBRCxJQUFTO0FBQ2pELE1BQUlKLFFBQVEsR0FBR0MsdURBQU8sR0FBRy9MLEdBQVYsR0FBZ0IsR0FBaEIsR0FBc0JtTSxpRUFBVyxDQUFDLElBQUQsRUFBT0QsR0FBUCxDQUFoRDtBQUNBLFNBQU9GLDREQUFZLENBQUN2TixHQUFiLENBQWlCcU4sUUFBakIsQ0FBUDtBQUNELENBSE07QUFLQSxNQUFNZ0MsZUFBZSxHQUFJbkksSUFBRCxJQUFVO0FBQ3ZDLE1BQUltRyxRQUFRLEdBQUdDLHVEQUFPLEdBQUcvTCxHQUF6QjtBQUNBLFNBQU9nTSw0REFBWSxDQUFDSyxJQUFiLENBQWtCUCxRQUFsQixFQUE0Qm5HLElBQTVCLENBQVA7QUFDRCxDQUhNO0FBS0EsTUFBTW9JLGtCQUFrQixHQUFJN0IsR0FBRCxJQUFTO0FBQ3pDLE1BQUlKLFFBQVEsR0FBR0MsdURBQU8sR0FBRy9MLEdBQVYsR0FBaUIsSUFBR2tNLEdBQUksRUFBdkM7QUFDQSxTQUFPRiw0REFBWSxDQUFDTyxNQUFiLENBQW9CVCxRQUFwQixDQUFQO0FBQ0QsQ0FITSxDOzs7Ozs7Ozs7Ozs7QUNyQlA7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTWtDLFlBQU4sQ0FBbUI7QUFDakI5TSxhQUFXLEdBQUc7QUFDWixVQUFNOUIsUUFBUSxHQUFHNk8sNENBQUssQ0FBQ0MsTUFBTixFQUFqQjtBQUNBOU8sWUFBUSxDQUFDK08sWUFBVCxDQUFzQkMsUUFBdEIsQ0FBK0JDLEdBQS9CLENBQW1DLEtBQUtDLGFBQXhDLEVBQXVELEtBQUtDLFdBQTVEO0FBQ0EsU0FBS25QLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7O0FBRURrUCxlQUFhLENBQUNGLFFBQUQsRUFBVztBQUN0QixXQUFPQSxRQUFQO0FBQ0Q7O0FBRURHLGFBQVcsQ0FBQ3hLLEtBQUQsRUFBUTtBQUNqQixXQUFPdUIsT0FBTyxDQUFDa0osTUFBUixDQUFlekssS0FBZixDQUFQO0FBQ0Q7O0FBRUR0RixLQUFHLENBQUN1QixHQUFELEVBQU07QUFDUCxXQUFPLEtBQUtaLFFBQUwsQ0FBY1gsR0FBZCxDQUFrQnVCLEdBQWxCLENBQVA7QUFDRDs7QUFFRHFNLE1BQUksQ0FBQ3JNLEdBQUQsRUFBTXlPLElBQU4sRUFBWTtBQUNkLFdBQU8sS0FBS3JQLFFBQUwsQ0FBY2lOLElBQWQsQ0FBbUJyTSxHQUFuQixFQUF3QnlPLElBQXhCLENBQVA7QUFDRDs7QUFFRGhDLE9BQUssQ0FBQ3pNLEdBQUQsRUFBTXlPLElBQU4sRUFBWTtBQUNmLFdBQU8sS0FBS3JQLFFBQUwsQ0FBY3FOLEtBQWQsQ0FBb0J6TSxHQUFwQixFQUF5QnlPLElBQXpCLENBQVA7QUFDRDs7QUFFRGxDLFFBQU0sQ0FBQ3ZNLEdBQUQsRUFBTTtBQUNWLFdBQU8sS0FBS1osUUFBTCxDQUFjbU4sTUFBZCxDQUFxQnZNLEdBQXJCLENBQVA7QUFDRDs7QUE3QmdCOztBQWdDSixtRUFBSWdPLFlBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFPTyxNQUFNVSxrQkFBa0IsR0FBRyxDQUFDO0FBQ2pDQyxTQURpQztBQUVqQ0MsVUFBUSxHQUFHLENBRnNCO0FBR2pDQyxXQUhpQztBQUlqQ0MsU0FKaUM7QUFLakNDLHNCQUFvQixHQUFHLE1BQU07QUFMSSxDQUFELEtBTTVCO0FBQ0o5QywyRUFBc0IsQ0FBQzBDLE9BQU8sQ0FBQ0ssRUFBVCxDQUF0QixDQUNHQyxJQURILENBQ1NwTyxHQUFELElBQVM7QUFDYixRQUFJQSxHQUFHLENBQUM4RSxJQUFKLENBQVN1SixNQUFULEtBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLFVBQUlQLE9BQU8sQ0FBQ0MsUUFBUixLQUFxQixDQUF6QixFQUE0QjtBQUMxQkUsZUFBTyxJQUFJQSxPQUFPLENBQUMsb0NBQUQsQ0FBbEI7QUFDQUMsNEJBQW9CLElBQUlBLG9CQUFvQixDQUFDLEtBQUQsQ0FBNUM7QUFDRCxPQUhELE1BR087QUFDTDNDLHNFQUFXLGlDQUNOdUMsT0FETTtBQUVUSyxZQUFFLEVBQUVHLCtDQUFNLEVBRkQ7QUFHVEMsbUJBQVMsRUFBRVQsT0FBTyxDQUFDSyxFQUhWO0FBSVRLLHNCQUFZLEVBQUVUO0FBSkwsV0FBWCxDQU1HSyxJQU5ILENBTVNwTyxHQUFELElBQVNnTyxTQUFTLElBQUlBLFNBQVMsQ0FBQ2hPLEdBQUQsQ0FOdkMsRUFPR3lPLEtBUEgsQ0FRS25VLEdBQUQsSUFDRTJULE9BQU8sSUFDUEEsT0FBTyxDQUFDLDhDQUFELEVBQWlEM1QsR0FBakQsQ0FWYjtBQVlEO0FBQ0YsS0FsQkQsTUFrQk87QUFDTCxVQUFJb1UsS0FBSyxHQUFHMU8sR0FBRyxDQUFDOEUsSUFBSixDQUFTLENBQVQsQ0FBWjs7QUFDQSxVQUFJNEosS0FBSyxDQUFDRixZQUFOLEdBQXFCVCxRQUFyQixHQUFnQ1csS0FBSyxDQUFDWCxRQUExQyxFQUFvRDtBQUNsREUsZUFBTyxJQUFJQSxPQUFPLENBQUMsb0NBQUQsQ0FBbEI7QUFDQUMsNEJBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNELE9BSEQsTUFHTztBQUNMdkMseUVBQWMsQ0FBQytDLEtBQUssQ0FBQ1AsRUFBUCxFQUFXO0FBQ3ZCSyxzQkFBWSxFQUFFRSxLQUFLLENBQUNGLFlBQU4sR0FBcUJUO0FBRFosU0FBWCxDQUFkLENBR0dLLElBSEgsQ0FHU3BPLEdBQUQsSUFBUztBQUNiZ08sbUJBQVMsSUFBSUEsU0FBUyxDQUFDaE8sR0FBRCxDQUF0QjtBQUNELFNBTEgsRUFNR3lPLEtBTkgsQ0FPS25VLEdBQUQsSUFDRTJULE9BQU8sSUFDUEEsT0FBTyxDQUFDLDhDQUFELEVBQWlEM1QsR0FBakQsQ0FUYjtBQVdEO0FBQ0Y7QUFDRixHQXZDSCxFQXdDR21VLEtBeENILENBeUNLblUsR0FBRCxJQUNFMlQsT0FBTyxJQUFJQSxPQUFPLENBQUMsOENBQUQsRUFBaUQzVCxHQUFqRCxDQTFDeEI7QUE0Q0QsQ0FuRE07QUFxREEsTUFBTXFVLHVCQUF1QixHQUFHLENBQUM7QUFBRTNELFFBQUY7QUFBVWdELFdBQVY7QUFBcUJDO0FBQXJCLENBQUQsS0FBb0M7QUFDekUsTUFBSWpELE1BQU0sSUFBSUEsTUFBTSxLQUFLLEVBQXJCLElBQTJCQSxNQUFNLEtBQUssSUFBMUMsRUFBZ0Q7QUFDOUNTLHFFQUFjLENBQUNULE1BQUQsQ0FBZCxDQUNHb0QsSUFESCxDQUNTcE8sR0FBRCxJQUFTZ08sU0FBUyxJQUFJQSxTQUFTLENBQUNoTyxHQUFELENBRHZDLEVBRUd5TyxLQUZILENBR0tuVSxHQUFELElBQ0UyVCxPQUFPLElBQUlBLE9BQU8sQ0FBQyx5Q0FBRCxFQUE0QzNULEdBQTVDLENBSnhCO0FBTUQ7QUFDRixDQVRNO0FBV0EsTUFBTXNVLDJCQUEyQixHQUFHLENBQUM7QUFDMUNkLFNBRDBDO0FBRTFDQyxVQUYwQztBQUcxQ0M7QUFIMEMsQ0FBRCxLQUlyQztBQUNKLE1BQUlELFFBQVEsR0FBR0QsT0FBTyxDQUFDQyxRQUFuQixJQUErQkEsUUFBUSxHQUFHLENBQTlDLEVBQWlEO0FBQy9DO0FBQ0Q7O0FBQ0RwQyxtRUFBYyxDQUFDbUMsT0FBTyxDQUFDSyxFQUFULEVBQWE7QUFBRUssZ0JBQVksRUFBRVQ7QUFBaEIsR0FBYixDQUFkLENBQ0dLLElBREgsQ0FDU3BPLEdBQUQsSUFBU2dPLFNBQVMsSUFBSUEsU0FBUyxDQUFDaE8sR0FBRCxDQUR2QyxFQUVHeU8sS0FGSCxDQUVVblUsR0FBRCxJQUFTRixPQUFPLENBQUN5VSxHQUFSLENBQVl2VSxHQUFaLENBRmxCO0FBR0QsQ0FYTSxDOzs7Ozs7Ozs7Ozs7QUN4RVA7QUFBQTtBQUFPLE1BQU00USxPQUFPLEdBQUcsaUNBQWhCLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU00RCxpQkFBaUIsR0FBRyxDQUFDQyxHQUFELEVBQU1uQyxJQUFOLEtBQWU7QUFDOUMsU0FBT0EsSUFBSSxJQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBeEIsR0FDSG1DLEdBQUcsQ0FBQ0MsSUFBSixDQUFVN1MsQ0FBRCxJQUFPQSxDQUFDLENBQUN5USxJQUFGLENBQU9xQyxXQUFQLE9BQXlCckMsSUFBSSxDQUFDcUMsV0FBTCxFQUF6QyxDQURHLEdBRUhGLEdBRko7QUFHRCxDQUpNO0FBTUEsTUFBTUcsbUJBQW1CLEdBQUlILEdBQUQsSUFBUztBQUMxQyxNQUFJSSxLQUFLLEdBQUcsQ0FBWjtBQUNBSixLQUFHLENBQUNLLE9BQUosQ0FBYWhILElBQUQsSUFBVTtBQUNwQixRQUFJQSxJQUFJLENBQUNpSCxRQUFULEVBQW1CO0FBQ2pCRixXQUFLLElBQUkvRyxJQUFJLENBQUNvRyxZQUFMLEdBQ0wsQ0FBQ3BHLElBQUksQ0FBQ2tILEtBQUwsR0FBYWxILElBQUksQ0FBQ2lILFFBQW5CLElBQStCakgsSUFBSSxDQUFDb0csWUFEL0IsR0FFTHBHLElBQUksQ0FBQ2tILEtBQUwsR0FBYWxILElBQUksQ0FBQ2lILFFBRnRCO0FBR0QsS0FKRCxNQUlPO0FBQ0xGLFdBQUssSUFBSS9HLElBQUksQ0FBQ29HLFlBQUwsR0FBb0JwRyxJQUFJLENBQUNrSCxLQUFMLEdBQWFsSCxJQUFJLENBQUNvRyxZQUF0QyxHQUFxRHBHLElBQUksQ0FBQ2tILEtBQW5FO0FBQ0Q7QUFDRixHQVJEO0FBU0EsU0FBT0gsS0FBUDtBQUNELENBWk0sQyxDQWNQOztBQUNPLE1BQU1JLGtCQUFrQixHQUFHLENBQUNDLE9BQUQsRUFBVW5FLEdBQVYsS0FBa0I7QUFDbEQsU0FBT0EsR0FBRyxHQUFHbUUsT0FBTyxDQUFDUixJQUFSLENBQWM1RyxJQUFELElBQVVBLElBQUksQ0FBQ21HLFNBQUwsS0FBbUJsRCxHQUExQyxDQUFILEdBQW9Eb0UsU0FBOUQ7QUFDRCxDQUZNO0FBSUEsTUFBTUMsd0JBQXdCLEdBQUcsQ0FBQ0YsT0FBRCxFQUFVbkUsR0FBVixLQUFrQjtBQUN4RCxRQUFNc0UsY0FBYyxHQUFHSCxPQUFPLENBQUNJLE1BQVIsQ0FBZ0J4SCxJQUFELElBQVVBLElBQUksQ0FBQ21HLFNBQUwsS0FBbUJsRCxHQUE1QyxDQUF2Qjs7QUFDQSxNQUFJc0UsY0FBYyxJQUFJQSxjQUFjLENBQUN0QixNQUFmLEdBQXdCLENBQTlDLEVBQWlEO0FBQy9DLFVBQU13QiwwQkFBMEIsR0FBR0YsY0FBYyxDQUFDRyxNQUFmLENBQ2pDLENBQUNYLEtBQUQsRUFBUS9HLElBQVIsS0FBaUIrRyxLQUFLLEdBQUcvRyxJQUFJLENBQUNvRyxZQURHLEVBRWpDLENBRmlDLENBQW5DO0FBSUEsV0FBT3FCLDBCQUFQO0FBQ0QsR0FORCxNQU1PO0FBQ0wsV0FBTyxDQUFQO0FBQ0Q7QUFDRixDQVhNLEMsQ0FhUDs7QUFDTyxNQUFNRSxzQkFBc0IsR0FBRyxDQUFDQyxXQUFELEVBQWMzRSxHQUFkLEtBQXNCO0FBQzFELFNBQU9BLEdBQUcsR0FBRzJFLFdBQVcsQ0FBQ2hCLElBQVosQ0FBa0I1RyxJQUFELElBQVVBLElBQUksQ0FBQytGLEVBQUwsS0FBWTlDLEdBQXZDLENBQUgsR0FBaURvRSxTQUEzRDtBQUNELENBRk0sQzs7Ozs7Ozs7Ozs7O0FDdkNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTUSxXQUFULENBQXFCekksS0FBckIsRUFBNEIwSSxLQUE1QixFQUFtQztBQUNoRCxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Msc0RBQVEsQ0FBQzdJLEtBQUQsQ0FBcEQ7QUFDQThJLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU10UixPQUFPLEdBQUd1UixVQUFVLENBQUMsTUFBTTtBQUMvQkgsdUJBQWlCLENBQUM1SSxLQUFELENBQWpCO0FBQ0QsS0FGeUIsRUFFdkIwSSxLQUZ1QixDQUExQjtBQUdBLFdBQU8sTUFBTTtBQUNYTSxrQkFBWSxDQUFDeFIsT0FBRCxDQUFaO0FBQ0QsS0FGRDtBQUdELEdBUFEsRUFPTixDQUFDd0ksS0FBRCxDQVBNLENBQVQ7QUFRQSxTQUFPMkksY0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ2JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNTSxjQUFjLEdBQUcsQ0FBQ25CLEtBQUQsRUFBUW9CLE9BQU8sR0FBRyxPQUFsQixFQUEyQkMsUUFBUSxHQUFHLEtBQXRDLEtBQWdEO0FBQzVFLFNBQU8sSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCSCxPQUF0QixFQUErQjtBQUNwQ0ksU0FBSyxFQUFFLFVBRDZCO0FBRXBDSCxZQUFRLEVBQUVBO0FBRjBCLEdBQS9CLEVBR0pJLE1BSEksQ0FHR3pCLEtBSEgsQ0FBUDtBQUlELENBTE07QUFPQSxNQUFNaEUsV0FBVyxHQUFHLENBQUMwRixTQUFELEVBQVlDLFVBQVosS0FBMkI7QUFDcEQsTUFBSUEsVUFBVSxJQUFJQSxVQUFVLEtBQUssRUFBN0IsSUFBbUNBLFVBQVUsS0FBSyxJQUF0RCxFQUE0RDtBQUMxRCxXQUFRLElBQUdELFNBQVUsSUFBR0MsVUFBVyxFQUFuQztBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNELENBTE07QUFPQSxNQUFNQyxVQUFVLEdBQUcsQ0FDeEJDLElBRHdCLEVBRXhCQyxXQUFXLEdBQUcsWUFGVSxFQUd4QkMsWUFBWSxHQUFHLGNBSFMsS0FJckI7QUFDSCxTQUFPQyw2Q0FBTSxDQUFDSCxJQUFELEVBQU9DLFdBQVAsQ0FBTixDQUEwQkwsTUFBMUIsQ0FBaUNNLFlBQWpDLENBQVA7QUFDRCxDQU5NO0FBUUEsTUFBTUUsVUFBVSxHQUFJekksR0FBRCxJQUFTO0FBQ2pDLFNBQU9BLEdBQUcsQ0FBQy9OLE9BQUosQ0FBWSxJQUFaLEVBQWtCLEdBQWxCLENBQVA7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7OztBQ3hCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTU8sTUFBTXlXLHNCQUFzQixHQUFHLENBQUM7QUFBRTFELFNBQUY7QUFBV0UsV0FBWDtBQUFzQkM7QUFBdEIsQ0FBRCxLQUFxQztBQUN6RWpCLG1GQUEwQixDQUFDYyxPQUFPLENBQUNLLEVBQVQsQ0FBMUIsQ0FDR0MsSUFESCxDQUNTcE8sR0FBRCxJQUFTO0FBQ2IsUUFBSUEsR0FBRyxDQUFDOEUsSUFBSixDQUFTdUosTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN6QnBCLDRFQUFlLENBQUNhLE9BQUQsQ0FBZixDQUNHTSxJQURILENBQ1NwTyxHQUFELElBQVNnTyxTQUFTLElBQUlBLFNBQVMsQ0FBQ2hPLEdBQUQsQ0FEdkMsRUFFR3lPLEtBRkgsQ0FHS25VLEdBQUQsSUFDRTJULE9BQU8sSUFDUEEsT0FBTyxDQUFDLGlEQUFELEVBQW9EM1QsR0FBcEQsQ0FMYjtBQU9ELEtBUkQsTUFRTztBQUNMMlQsYUFBTyxJQUFJQSxPQUFPLENBQUMsNkJBQUQsQ0FBbEI7QUFDRDtBQUNGLEdBYkgsRUFjR1EsS0FkSCxDQWVLblUsR0FBRCxJQUNFMlQsT0FBTyxJQUNQQSxPQUFPLENBQUMsaURBQUQsRUFBb0QzVCxHQUFwRCxDQWpCYjtBQW1CRCxDQXBCTTtBQXNCQSxNQUFNbVgsMkJBQTJCLEdBQUcsQ0FBQztBQUMxQ2xELFdBRDBDO0FBRTFDUCxXQUYwQztBQUcxQ0M7QUFIMEMsQ0FBRCxLQUlyQztBQUNKLE1BQUlNLFNBQVMsSUFBSUEsU0FBUyxLQUFLLEVBQTNCLElBQWlDQSxTQUFTLEtBQUssSUFBbkQsRUFBeUQ7QUFDdkRyQiw2RUFBa0IsQ0FBQ3FCLFNBQUQsQ0FBbEIsQ0FDR0gsSUFESCxDQUNTcE8sR0FBRCxJQUFTZ08sU0FBUyxJQUFJQSxTQUFTLENBQUNoTyxHQUFELENBRHZDLEVBRUd5TyxLQUZILENBR0tuVSxHQUFELElBQ0UyVCxPQUFPLElBQUlBLE9BQU8sQ0FBQyx3Q0FBRCxFQUEyQzNULEdBQTNDLENBSnhCO0FBTUQ7QUFDRixDQWJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJQO0FBQ0E7QUFFZSxTQUFTb1gsZ0JBQVQsQ0FBMEJDLGdCQUExQixFQUE0QztBQUN6RCxTQUFPLFVBQVVsVyxLQUFWLEVBQWlCO0FBQ3RCLFVBQU1tVyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLFVBQU07QUFBQSxTQUFDaFgsTUFBRDtBQUFBLFNBQVNpWDtBQUFULFFBQXNCekIsc0RBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsVUFBTTtBQUFBLFNBQUMwQixhQUFEO0FBQUEsU0FBZ0JDO0FBQWhCLFFBQW9DM0Isc0RBQVEsQ0FBQyxDQUFELENBQWxEO0FBQ0FDLDJEQUFTLENBQUMsTUFBTTtBQUNkNVcsWUFBTSxDQUFDdVksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLFlBQWxDO0FBQ0EsYUFBTyxNQUFNO0FBQ1h4WSxjQUFNLENBQUN5WSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsWUFBckM7QUFDRCxPQUZEO0FBR0QsS0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BNUIsMkRBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBSXpWLE1BQU0sSUFBSStXLFNBQVMsQ0FBQ1EsT0FBVixDQUFrQkMsWUFBaEMsRUFBOEM7QUFDNUNMLHdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDRCxPQUZELE1BRU87QUFDTEEsd0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNEO0FBQ0YsS0FOUSxFQU1OLENBQUNuWCxNQUFELENBTk0sQ0FBVDs7QUFRQSxhQUFTcVgsWUFBVCxHQUF3QjtBQUN0QkosZUFBUyxDQUFDcFksTUFBTSxDQUFDNFksT0FBUixDQUFUO0FBQ0Q7O0FBRUQsV0FDRTtBQUNFLFNBQUcsRUFBRVYsU0FEUDtBQUVFLGVBQVMsRUFBRyxVQUFTVyxpREFBVSxDQUM3QjtBQUFFQyxhQUFLLEVBQUVUO0FBQVQsT0FENkIsRUFFN0J0VyxLQUFLLENBQUNnWCxTQUZ1QixDQUc3QixFQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRSxNQUFDLGdCQUFELGVBQXNCaFgsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVBGLENBREY7QUFXRCxHQWxDRDtBQW1DRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2lYLG1CQUFULENBQTZCO0FBQUU1TixNQUFGO0FBQVE2TixNQUFSO0FBQWNDLFNBQWQ7QUFBdUI5QjtBQUF2QixDQUE3QixFQUE2RDtBQUMzRCxNQUFJNkIsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDcEIsV0FDRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFnQyxXQUFLLEVBQUU3QixLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx3Q0FBRDtBQUFLLFlBQU0sRUFBRSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdDQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMscUVBQUQ7QUFBcUIsVUFBSSxFQUFDLFFBQTFCO0FBQW1DLFlBQU0sRUFBRWhNLElBQUksQ0FBQytOLE1BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUUsTUFBQyx3Q0FBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHNFQUFEO0FBQXNCLFVBQUksRUFBQyxPQUEzQjtBQUFtQyxVQUFJLEVBQUUvTixJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FKRixFQU9FLE1BQUMsd0NBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csQ0FBQzhOLE9BQUQsSUFDQyxNQUFDLGtFQUFEO0FBQ0UscUJBQWUsRUFBRTlOLElBQUksQ0FBQ2dPLGVBRHhCO0FBRUUsb0JBQWMsRUFBRWhPLElBQUksQ0FBQ2lPLGNBRnZCO0FBR0UsYUFBTyxFQUFFak8sSUFBSSxDQUFDa08sT0FIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBUEYsQ0FERixDQURGO0FBcUJEOztBQUNELFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsU0FBSyxFQUFFbEMsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUUsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQXFCLFVBQU0sRUFBRWhNLElBQUksQ0FBQytOLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNFQUFEO0FBQXNCLFFBQUksRUFBRS9OLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLEVBT0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDOE4sT0FBRCxJQUNDLE1BQUMsa0VBQUQ7QUFDRSxtQkFBZSxFQUFFOU4sSUFBSSxDQUFDZ08sZUFEeEI7QUFFRSxrQkFBYyxFQUFFaE8sSUFBSSxDQUFDaU8sY0FGdkI7QUFHRSxXQUFPLEVBQUVqTyxJQUFJLENBQUNrTyxPQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FQRixDQURGLENBREY7QUFxQkQ7O0FBRWM5Vyx3SEFBSyxDQUFDK1csSUFBTixDQUFXUCxtQkFBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtlLFNBQVNRLG9CQUFULENBQThCO0FBQUVwTyxNQUFGO0FBQVE2TjtBQUFSLENBQTlCLEVBQThDO0FBQzNELFFBQU1RLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q2pELHNEQUFRLENBQUMsQ0FBRCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFDa0QsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBMENuRCxzREFBUSxDQUFDLEtBQUQsQ0FBeEQ7QUFDQSxRQUFNb0QsU0FBUyxHQUFHQywrREFBVyxDQUFFclMsS0FBRCxJQUFXQSxLQUFLLENBQUNzUyxXQUFsQixDQUE3QjtBQUNBLFFBQU1DLFlBQVksR0FBR0YsK0RBQVcsQ0FBRXJTLEtBQUQsSUFBV0EsS0FBSyxDQUFDd1MsY0FBbEIsQ0FBaEM7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBRy9ELGdGQUFzQixDQUFDNkQsWUFBRCxFQUFlOU8sSUFBSSxDQUFDcUosRUFBcEIsQ0FBL0M7QUFDQSxRQUFNNEYsZ0JBQWdCLEdBQ3BCalAsSUFBSSxDQUFDaUosUUFBTCxHQUFnQjJCLGtGQUF3QixDQUFDK0QsU0FBUyxDQUFDM08sSUFBWCxFQUFpQkEsSUFBSSxDQUFDcUosRUFBdEIsQ0FEMUM7QUFFQS9ULFNBQU8sQ0FBQ3lVLEdBQVIsQ0FBWWtGLGdCQUFaOztBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDbEcsT0FBRCxFQUFVQyxRQUFWLEtBQXVCO0FBQ3pDLFFBQUl3RixnQkFBSixFQUFzQjtBQUNwQjtBQUNEOztBQUNEQyx1QkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQ0EzRixtRkFBa0IsQ0FBQztBQUNqQkMsYUFEaUI7QUFFakJDLGNBRmlCO0FBR2pCQyxlQUFTLEVBQUdsSixJQUFELElBQVU7QUFDbkIwTywyQkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0F0VixvREFBTyxDQUFDbEQsT0FBUixDQUFnQix1QkFBaEI7QUFDQW1ZLGdCQUFRLENBQUNjLG1GQUFnQixFQUFqQixDQUFSO0FBQ0QsT0FQZ0I7QUFRakJoRyxhQUFPLEVBQUUsQ0FBQ2lHLEdBQUQsRUFBTTVaLEdBQU4sS0FBYztBQUNyQmtaLDJCQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFDQXRWLG9EQUFPLENBQUNnRixLQUFSLENBQWNnUixHQUFkO0FBQ0E5WixlQUFPLENBQUN5VSxHQUFSLENBQVl2VSxHQUFaO0FBQ0Q7QUFaZ0IsS0FBRCxDQUFsQjtBQWNELEdBbkJEOztBQW9CQSxRQUFNNlosY0FBYyxHQUFJckcsT0FBRCxJQUFhO0FBQ2xDLFFBQUlnRyxnQkFBSixFQUFzQjtBQUNwQlgsY0FBUSxDQUFDaUIsd0ZBQWlCLENBQUN0RyxPQUFPLENBQUNLLEVBQVQsQ0FBbEIsQ0FBUjtBQUNBalEsa0RBQU8sQ0FBQ2dGLEtBQVIsQ0FBYyw4QkFBZDtBQUNELEtBSEQsTUFHTztBQUNMaVEsY0FBUSxDQUFDa0IsbUZBQVksQ0FBQ3ZHLE9BQUQsQ0FBYixDQUFSO0FBQ0E1UCxrREFBTyxDQUFDbEQsT0FBUixDQUFnQiwwQkFBaEI7QUFDRDtBQUNGLEdBUkQ7O0FBU0EsTUFBSTJYLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCLFdBQ0U7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0NBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFhLFFBQUUsRUFBRSxFQUFqQjtBQUFxQixRQUFFLEVBQUUsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBOEI3TixJQUFJLENBQUNpSCxRQUFuQyxDQURGLEVBRUU7QUFBSSxlQUFTLEVBQUMsOEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE4Q2pILElBQUksQ0FBQ25HLElBQW5ELENBRkYsRUFHRTtBQUFLLGVBQVMsRUFBQyxxQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSUFERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUhBTEYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNJQVRGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrR0FiRixFQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdLQWpCRixFQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9KQXRCRixDQUhGLEVBK0JFO0FBQUksZUFBUyxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLFdBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixjQUpGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixtQkFQRixDQS9CRixFQTBDRTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBMUNGLENBREYsQ0FERixFQWtERSxNQUFDLHdDQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsRUFBakI7QUFBcUIsUUFBRSxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUlFO0FBQUksZUFBUyxFQUFDLCtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR21HLElBQUksQ0FBQ3VLLFFBQUwsSUFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNb0Isb0VBQWMsQ0FBQzNMLElBQUksQ0FBQ3dLLEtBQU4sQ0FBcEIsQ0FEcEIsRUFFRTtBQUFLLGVBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHeEssSUFBSSxDQUFDdUssUUFBTCxHQUNHb0Isb0VBQWMsQ0FBQzNMLElBQUksQ0FBQ3dLLEtBQUwsR0FBYXhLLElBQUksQ0FBQ3VLLFFBQW5CLENBRGpCLEdBRUdvQixvRUFBYyxDQUFDM0wsSUFBSSxDQUFDd0ssS0FBTixDQUhwQixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseUNBQUQ7QUFBTSxrQkFBWSxFQUFFeEssSUFBSSxDQUFDd1AsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBTkYsQ0FGRixDQUpGLEVBaUJFLE1BQUMsK0RBQUQ7QUFDRSxjQUFRLEVBQUdDLEdBQUQsSUFBU2pCLGtCQUFrQixDQUFDaUIsR0FBRCxDQUR2QztBQUVFLFNBQUcsRUFBRVIsZ0JBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWpCRixFQXFCRTtBQUFLLGVBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyQ0FBRDtBQUNFLGFBQU8sRUFBRVIsZ0JBRFg7QUFFRSxhQUFPLEVBQUUsTUFBTVMsV0FBVyxDQUFDbFAsSUFBRCxFQUFPdU8sZUFBUCxDQUY1QjtBQUdFLFdBQUssRUFBQyxPQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFRRSxNQUFDLDJDQUFEO0FBQ0UsYUFBTyxFQUFFLE1BQU1jLGNBQWMsQ0FBQ3JQLElBQUQsQ0FEL0I7QUFFRSxlQUFTLEVBQUV5TixpREFBVSxDQUFDO0FBQ3BCaUMsY0FBTSxFQUFFVjtBQURZLE9BQUQsQ0FGdkI7QUFLRSxXQUFLLEVBQUMsT0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVJGLENBckJGLEVBdUNFO0FBQUksZUFBUyxFQUFDLGtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSEYsQ0F2Q0YsQ0FERixDQWxERixDQURGLENBREY7QUFzR0Q7O0FBQ0QsU0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCaFAsSUFBSSxDQUFDaUgsUUFBbkMsQ0FERixFQUVFO0FBQUksYUFBUyxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOENqSCxJQUFJLENBQUNuRyxJQUFuRCxDQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUMscUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFIRixFQVFFO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsRUFTRTtBQUFJLGFBQVMsRUFBQywrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dtRyxJQUFJLENBQUN1SyxRQUFMLElBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTW9CLG9FQUFjLENBQUMzTCxJQUFJLENBQUN3SyxLQUFOLENBQXBCLENBRHBCLEVBRUU7QUFBSyxhQUFTLEVBQUMsd0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3hLLElBQUksQ0FBQ3VLLFFBQUwsR0FDR29CLG9FQUFjLENBQUMzTCxJQUFJLENBQUN3SyxLQUFMLEdBQWF4SyxJQUFJLENBQUN1SyxRQUFuQixDQURqQixHQUVHb0Isb0VBQWMsQ0FBQzNMLElBQUksQ0FBQ3dLLEtBQU4sQ0FIcEIsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFEO0FBQU0sZ0JBQVksRUFBRXhLLElBQUksQ0FBQ3dQLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLENBRkYsQ0FURixFQXNCRSxNQUFDLCtEQUFEO0FBQ0UsWUFBUSxFQUFHQyxHQUFELElBQVNqQixrQkFBa0IsQ0FBQ2lCLEdBQUQsQ0FEdkM7QUFFRSxPQUFHLEVBQUVSLGdCQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsRUEwQkU7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFDRSxXQUFPLEVBQUVSLGdCQURYO0FBRUUsV0FBTyxFQUFFLE1BQU1TLFdBQVcsQ0FBQ2xQLElBQUQsRUFBT3VPLGVBQVAsQ0FGNUI7QUFHRSxTQUFLLEVBQUMsT0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBUUUsTUFBQywyQ0FBRDtBQUNFLFdBQU8sRUFBRSxNQUFNYyxjQUFjLENBQUNyUCxJQUFELENBRC9CO0FBRUUsYUFBUyxFQUFFeU4saURBQVUsQ0FBQztBQUNwQmlDLFlBQU0sRUFBRVY7QUFEWSxLQUFELENBRnZCO0FBS0UsU0FBSyxFQUFDLE9BTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFSRixDQTFCRixFQTRDRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBNUNGLENBREY7QUFtREQ7O0FBRUQ7QUFBQTVYLDRDQUFLLENBQUMrVyxJQUFOLENBQVdDLG9CQUFYLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZOQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU3VCLG1CQUFULENBQTZCO0FBQUU5QixNQUFGO0FBQVFFO0FBQVIsQ0FBN0IsRUFBK0M7QUFDN0MsUUFBTTZCLGVBQWUsR0FBRztBQUN0QkMsVUFBTSxFQUFFO0FBRGMsR0FBeEI7QUFHQSxRQUFNQyxlQUFlLEdBQUc7QUFDdEJELFVBQU0sRUFBRSxLQURjO0FBRXRCRSxnQkFBWSxFQUFFLENBRlE7QUFHdEJDLGlCQUFhLEVBQUUsSUFITztBQUl0QkMsWUFBUSxFQUFFcEMsSUFBSSxLQUFLLFFBQVQsR0FBb0IsSUFBcEIsR0FBMkIsS0FKZjtBQUt0QjtBQUNBO0FBQ0FxQyxjQUFVLEVBQUUsQ0FDVjtBQUNFQyxnQkFBVSxFQUFFLEdBRGQ7QUFFRUMsY0FBUSxFQUFFO0FBQ1JILGdCQUFRLEVBQUVwQyxJQUFJLEtBQUssUUFBVCxJQUFxQjtBQUR2QjtBQUZaLEtBRFU7QUFQVSxHQUF4QjtBQWdCQSxRQUFNO0FBQUEsT0FBQ3dDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCL0Usc0RBQVEsRUFBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2dGLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCakYsc0RBQVEsRUFBaEMsQ0FyQjZDLENBc0I3QztBQUNBO0FBQ0E7O0FBQ0EsU0FDRTtBQUNFLGFBQVMsRUFBRyx5QkFBd0JrQyxpREFBVSxDQUFDO0FBQzdDLGlCQUFXSSxJQUFJLEtBQUs7QUFEeUIsS0FBRCxDQUUzQyxFQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFRLFlBQVEsRUFBRTBDLElBQWxCO0FBQXdCLE9BQUcsRUFBR0UsQ0FBRCxJQUFPSCxPQUFPLENBQUNHLENBQUQ7QUFBM0MsS0FBb0RiLGVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRzdCLE1BQU0sSUFDTEEsTUFBTSxDQUFDMkMsR0FBUCxDQUFXLENBQUNDLEdBQUQsRUFBTUMsS0FBTixLQUNUO0FBQUssT0FBRyxFQUFFQSxLQUFWO0FBQWlCLGFBQVMsRUFBQyxZQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVyWSxFQUFBLEdBQXlCb1ksR0FBbkM7QUFBd0MsT0FBRyxFQUFDLGVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBRkosQ0FERixDQUxGLEVBZUU7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBUSxZQUFRLEVBQUVOLElBQWxCO0FBQXdCLE9BQUcsRUFBR0ksQ0FBRCxJQUFPRCxPQUFPLENBQUNDLENBQUQ7QUFBM0MsS0FBb0RYLGVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRy9CLE1BQU0sSUFDTEEsTUFBTSxDQUFDMkMsR0FBUCxDQUFXLENBQUNDLEdBQUQsRUFBTUMsS0FBTixLQUNUO0FBQUssT0FBRyxFQUFFQSxLQUFWO0FBQWlCLGFBQVMsRUFBQyxZQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVyWSxFQUFBLEdBQXlCb1ksR0FBbkM7QUFBd0MsT0FBRyxFQUFDLGVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBRkosQ0FERixDQWZGLENBREY7QUE0QkQ7O0FBRWN2Wix3SEFBSyxDQUFDK1csSUFBTixDQUFXd0IsbUJBQVgsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFFQSxNQUFNO0FBQUVrQjtBQUFGLElBQWNDLHlDQUFwQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUFFL1E7QUFBRixDQUFELEtBQWM7QUFDL0IxSyxTQUFPLENBQUN5VSxHQUFSLENBQVkvSixJQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFFekgsRUFBQSxHQUF5QnlILElBQUksQ0FBQ2dSLElBQUwsQ0FBVUMsTUFEMUM7QUFFRSxPQUFHLEVBQUMsaUJBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0UsTUFBQyx5Q0FBRDtBQUFNLGdCQUFZLEVBQUUsQ0FBcEI7QUFBdUIsWUFBUSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtqUixJQUFJLENBQUNrUixXQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtsUixJQUFJLENBQUNnUixJQUFMLENBQVVuWCxJQUFmLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUltRyxJQUFJLENBQUNtUixNQUFULENBSEYsQ0FSRixDQURGO0FBZ0JELENBbEJEOztBQW9CQSxTQUFTQyxnQkFBVCxDQUEwQjtBQUFFcEQsaUJBQUY7QUFBbUJDLGdCQUFuQjtBQUFtQ0M7QUFBbkMsQ0FBMUIsRUFBd0U7QUFDdEUsUUFBTW1ELFFBQVEsR0FBSUMsTUFBRCxJQUFZO0FBQzNCaGMsV0FBTyxDQUFDeVUsR0FBUixDQUFZLFVBQVosRUFBd0J1SCxNQUF4QjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsY0FBYyxHQUFJQyxTQUFELElBQWU7QUFDcENsYyxXQUFPLENBQUN5VSxHQUFSLENBQVksU0FBWixFQUF1QnlILFNBQXZCO0FBQ0QsR0FGRDs7QUFHQSxTQUNFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFEO0FBQU0sb0JBQWdCLEVBQUMsR0FBdkI7QUFBMkIsUUFBSSxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxPQUFHLEVBQUMsYUFBYjtBQUEyQixPQUFHLEVBQUMsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3hELGVBREgsQ0FERixDQURGLEVBTUUsTUFBQyxPQUFEO0FBQVMsT0FBRyxFQUFDLGdCQUFiO0FBQThCLE9BQUcsRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0MsY0FBYyxDQUFDd0QsTUFBcEIsQ0FGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d4RCxjQUFjLENBQUN5RCxVQUFmLENBQTBCQyxJQUQ3QixRQUNxQyxHQURyQyxFQUVHMUQsY0FBYyxDQUFDeUQsVUFBZixDQUEwQkUsS0FGN0IsUUFFc0MsR0FGdEMsRUFHRzNELGNBQWMsQ0FBQ3lELFVBQWYsQ0FBMEJHLE1BSDdCLENBRkYsQ0FMRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs1RCxjQUFjLENBQUMzRyxLQUFwQixDQUZGLENBYkYsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSzJHLGNBQWMsQ0FBQzFHLElBQXBCLENBRkYsQ0FqQkYsQ0FERixDQURGLENBREYsQ0FORixFQWtDRSxNQUFDLE9BQUQ7QUFBUyxPQUFHLEVBQUMsU0FBYjtBQUF1QixPQUFHLEVBQUMsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzJHLE9BQU8sQ0FBQ3dDLEdBQVIsQ0FBWSxDQUFDcE4sSUFBRCxFQUFPc04sS0FBUCxLQUNYLE1BQUMsVUFBRDtBQUFZLE9BQUcsRUFBRUEsS0FBakI7QUFBd0IsUUFBSSxFQUFFdE4sSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREgsRUFJRTtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFLE1BQUMseUNBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFlBQVEsRUFBRStOLFFBRlo7QUFHRSxrQkFBYyxFQUFFRSxjQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxTQUFLLEVBQUUsQ0FDTDtBQUFFTyxjQUFRLEVBQUUsSUFBWjtBQUFrQjFZLGFBQU8sRUFBRTtBQUEzQixLQURLLENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUMsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0FERixFQVdFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFNBQUssRUFBRSxDQUNMO0FBQUUwWSxjQUFRLEVBQUUsSUFBWjtBQUFrQjFZLGFBQU8sRUFBRTtBQUEzQixLQURLLENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0FYRixFQXFCRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsUUFBSSxFQUFDLE1BQWhCO0FBQXVCLFNBQUssRUFBQyxhQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQXJCRixFQTBCRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsUUFBSSxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBDQUFELENBQU8sUUFBUDtBQUFnQixlQUFXLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0ExQkYsRUErQkUsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixZQUFRLEVBQUMsUUFBaEM7QUFBeUMsU0FBSyxFQUFDLE9BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FERixDQS9CRixDQUxGLENBRkYsQ0FKRixDQURGLENBbENGLENBREYsQ0FERjtBQThGRDs7QUFFY2hDLHdIQUFLLENBQUMrVyxJQUFOLENBQVdpRCxnQkFBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU1csV0FBVCxHQUF1QjtBQUNyQixTQUNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsQ0FBakI7QUFBb0IsTUFBRSxFQUFFLENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFrQixXQUFPLEVBQUU7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0VBRkYsQ0FERixFQU9FLE1BQUMscUVBQUQ7QUFBcUIsT0FBRyxFQUFDLDRGQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixDQVBGLENBREYsQ0FERixDQURGLEVBd0JFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBVyxTQUFLLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFERixFQUVFO0FBQ0UsT0FBRyxFQUFFelosRUFBQSxHQUF5QixtQ0FEaEM7QUFFRSxPQUFHLEVBQUMsaUJBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FERixDQXhCRixDQURGO0FBc0NEOztBQUNjbkIsd0hBQUssQ0FBQytXLElBQU4sQ0FBVzRELFdBQVgsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUVBO0FBRWUsU0FBU0UsZ0JBQVQsR0FBNEI7QUFDekMsU0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFMVosRUFBQSxHQUF5QixHQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFFQSxFQUFBLEdBQXlCLHlCQURoQztBQUVFLE9BQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUhGLENBVEYsRUFjRSxNQUFDLDBEQUFEO0FBQWEsUUFBSSxFQUFDLFNBQWxCO0FBQTRCLFNBQUssRUFBQyxRQUFsQztBQUEyQyxhQUFTLEVBQUMsWUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREY7QUFrQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBUzJaLGdCQUFULENBQTBCO0FBQUVDO0FBQUYsQ0FBMUIsRUFBdUM7QUFDckMsU0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLEVBQWI7QUFBaUIsV0FBTyxFQUFDLGVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Msb0RBQVcsQ0FBQzFCLEdBQVosQ0FBZ0IsQ0FBQ3BOLElBQUQsRUFBT3NOLEtBQVAsS0FDZixNQUFDLHdDQUFEO0FBQUssT0FBRyxFQUFFQTtBQUFWLEtBQXFCdUIsT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs3TyxJQUFJLENBQUMrTyxLQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cvTyxJQUFJLENBQUNnUCxLQUFMLENBQVc1QixHQUFYLENBQWUsQ0FBQzZCLElBQUQsRUFBTzNCLEtBQVAsS0FDZDtBQUFJLE9BQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRXJZLEVBQUEsR0FBeUJnYSxJQUFJLENBQUM5YyxJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFLOGMsSUFBSSxDQUFDRixLQUFWLENBREYsQ0FERixFQUdVLEdBSFYsQ0FERCxDQURILENBRkYsQ0FERixDQURELENBREgsQ0FERixDQURGO0FBc0JEOztBQUVjamIsd0hBQUssQ0FBQytXLElBQU4sQ0FBVytELGdCQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTSxVQUFVLGdCQUFHcGIsNENBQUssQ0FBQytXLElBQU4sQ0FBVyxDQUFDO0FBQUVzRSxRQUFGO0FBQVVyWixTQUFWO0FBQW1Cc1o7QUFBbkIsQ0FBRCxLQUFzQztBQUNsRSxRQUFNckIsUUFBUSxHQUFJM08sS0FBRCxJQUFXO0FBQzFCcE4sV0FBTyxDQUFDeVUsR0FBUixDQUFZLFVBQVosRUFBd0JySCxLQUF4QjtBQUNBQSxTQUFLLElBQ0hnUSxXQUFXLENBQUM7QUFDVkMsV0FBSyxFQUFFalEsS0FBSyxDQUFDa1E7QUFESCxLQUFELENBRGI7QUFJRCxHQU5EOztBQVFBLFFBQU1yQixjQUFjLEdBQUlDLFNBQUQsSUFBZTtBQUNwQ2xjLFdBQU8sQ0FBQ3lVLEdBQVIsQ0FBWSxTQUFaLEVBQXVCeUgsU0FBdkI7QUFDRCxHQUZEOztBQUlBLFNBQ0UsbUVBQ0UsTUFBQyx5Q0FBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsWUFBUSxFQUFFSCxRQUZaO0FBR0Usa0JBQWMsRUFBRUUsY0FIbEI7QUFJRSxhQUFTLEVBQUMsdUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsV0FBTyxFQUFFLElBRFg7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLFNBQUssRUFBRSxDQUNMO0FBQ0UxRCxVQUFJLEVBQUUsT0FEUjtBQUVFelUsYUFBTyxFQUFFO0FBRlgsS0FESyxFQUtMO0FBQ0UwWSxjQUFRLEVBQUUsSUFEWjtBQUVFMVksYUFBTyxFQUFFO0FBRlgsS0FMSyxDQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FjRSxNQUFDLDBDQUFEO0FBQU8sZUFBVyxFQUFDLGtCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FORixFQXNCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQU8sRUFBRSxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxNQUFiO0FBQW9CLFlBQVEsRUFBQyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBdEJGLENBREYsRUE2QkdxWixNQUFNLEtBQUssU0FBWCxJQUF3QjtBQUFLLFNBQUssRUFBRTtBQUFFbkwsV0FBSyxFQUFFO0FBQVQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTdCM0IsRUE4QkdtTCxNQUFNLEtBQUssT0FBWCxJQUNDO0FBQ0UsU0FBSyxFQUFFO0FBQUVuTCxXQUFLLEVBQUU7QUFBVCxLQURUO0FBRUUsMkJBQXVCLEVBQUU7QUFBRXVMLFlBQU0sRUFBRXpaO0FBQVYsS0FGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CSixFQW9DR3FaLE1BQU0sS0FBSyxTQUFYLElBQ0M7QUFDRSxTQUFLLEVBQUU7QUFBRW5MLFdBQUssRUFBRTtBQUFULEtBRFQ7QUFFRSwyQkFBdUIsRUFBRTtBQUFFdUwsWUFBTSxFQUFFelo7QUFBVixLQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNKLENBREY7QUE2Q0QsQ0ExRGtCLENBQW5CO0FBNERlLFNBQVMwWixtQkFBVCxDQUE2QjtBQUFFelk7QUFBRixDQUE3QixFQUFzQztBQUNuRCxTQUNFLE1BQUMsZ0VBQUQ7QUFDRSxPQUFHLEVBQUVBLEdBRFA7QUFFRSxVQUFNLEVBQUUsQ0FBQztBQUFFMFksZUFBRjtBQUFhTixZQUFiO0FBQXFCclo7QUFBckIsS0FBRCxLQUNOLE1BQUMsVUFBRDtBQUNFLFlBQU0sRUFBRXFaLE1BRFY7QUFFRSxhQUFPLEVBQUVyWixPQUZYO0FBR0UsaUJBQVcsRUFBRzRaLFFBQUQsSUFBY0QsU0FBUyxDQUFDQyxRQUFELENBSHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFZRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFRDtBQUNBO0FBRUE7QUFFZSxTQUFTQyxTQUFULEdBQXFCO0FBQ2xDLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFXLGtCQUFjLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMscURBQUQ7QUFBUyxrQkFBYyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQyxhQUFULENBQXVCO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUF2QixFQUFvRDtBQUNsRCxRQUFNekUsU0FBUyxHQUFHQywrREFBVyxDQUFFclMsS0FBRCxJQUFXQSxLQUFLLENBQUNzUyxXQUFsQixDQUE3QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUN1RSxZQUFELElBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTdhLEVBQUEsR0FBeUIsZ0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FGSixFQVNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVBLEVBQUEsR0FBeUIsWUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdHLENBQUM0YSxTQUFELEtBQ0V4RSxTQUFTLENBQUMzTyxJQUFWLEdBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPMkwsb0VBQWMsQ0FBQ3ZCLDZFQUFtQixDQUFDdUUsU0FBUyxDQUFDM08sSUFBWCxDQUFwQixDQUFyQixDQURELEdBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPMkwsb0VBQWMsQ0FBQyxDQUFELENBQXJCLENBSkgsQ0FISCxDQURGLENBVEYsQ0FERjtBQXdCRDs7QUFFY3ZVLHdIQUFLLENBQUMrVyxJQUFOLENBQVcrRSxhQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNHLGdCQUFULEdBQTRCO0FBQzFCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmhJLHNEQUFRLENBQUMsS0FBRCxDQUF0Qzs7QUFDQSxRQUFNaUksWUFBWSxHQUFHLE1BQU07QUFDekJELGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxHQUZEOztBQUdBLFFBQU1FLGFBQWEsR0FBRyxNQUFNO0FBQzFCRixjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsR0FGRDs7QUFHQSxTQUNFLG1FQUNFO0FBQUcsV0FBTyxFQUFFQyxZQUFaO0FBQTBCLGFBQVMsRUFBQyxvQkFBcEM7QUFBeUQsUUFBSSxFQUFDLEdBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQywyQ0FBRDtBQUNFLFNBQUssRUFBQyxPQURSO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxZQUFRLEVBQUUsSUFIWjtBQUlFLFdBQU8sRUFBRUMsYUFKWDtBQUtFLFdBQU8sRUFBRUgsT0FMWDtBQU1FLGFBQVMsRUFBQyxNQU5aO0FBT0UsU0FBSyxFQUFFLEdBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBSkYsQ0FERjtBQWtCRDs7QUFFY2xjLHdIQUFLLENBQUMrVyxJQUFOLENBQVdrRixnQkFBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNLLGVBQVQsR0FBMkI7QUFDekIsUUFBTTtBQUFFQztBQUFGLE1BQWNDLHlDQUFwQjtBQUNBLFFBQU07QUFBQSxPQUFDdEcsT0FBRDtBQUFBLE9BQVV1RztBQUFWLE1BQXdCdEksc0RBQVEsQ0FBQyxNQUFELENBQXRDOztBQUNBLFFBQU11SSxXQUFXLEdBQUlsZSxDQUFELElBQU87QUFDekJOLFdBQU8sQ0FBQ3lVLEdBQVIsQ0FBWSxRQUFaLEVBQXNCblUsQ0FBdEI7QUFDQSxTQUFLbWUsUUFBTCxDQUFjO0FBQUV6RyxhQUFPLEVBQUUxWCxDQUFDLENBQUNTO0FBQWIsS0FBZDtBQUNELEdBSEQ7O0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFEO0FBQ0UsYUFBUyxFQUFDLHVCQURaO0FBRUUsV0FBTyxFQUFFeWQsV0FGWDtBQUdFLGdCQUFZLEVBQUUsQ0FBQ3hHLE9BQUQsQ0FIaEI7QUFJRSxRQUFJLEVBQUMsUUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxPQUFEO0FBQVMsT0FBRyxFQUFDLFVBQWI7QUFBd0IsU0FBSyxFQUFFMEcsaURBQWEsQ0FBQ0MsSUFBZCxDQUFtQjVCLEtBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzJCLGlEQUFhLENBQUNDLElBQWQsQ0FBbUJDLE9BQW5CLENBQTJCeEQsR0FBM0IsQ0FBZ0NwTixJQUFELElBQzlCLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFFQSxJQUFJLENBQUMrTyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTlaLEVBQUEsR0FBeUIrSyxJQUFJLENBQUM3TixJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFLNk4sSUFBSSxDQUFDK08sS0FBVixDQURGLENBREYsQ0FERCxDQURILENBTkYsRUFlRSxNQUFDLE9BQUQ7QUFBUyxPQUFHLEVBQUMsTUFBYjtBQUFvQixTQUFLLEVBQUUyQixpREFBYSxDQUFDRyxJQUFkLENBQW1COUIsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFTLE9BQUcsRUFBQyxhQUFiO0FBQTJCLFNBQUssRUFBQyxhQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cyQixpREFBYSxDQUFDRyxJQUFkLENBQW1CRCxPQUFuQixDQUEyQkUsTUFBM0IsQ0FBa0MxRCxHQUFsQyxDQUF1Q3BOLElBQUQsSUFDckMsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUVBLElBQUksQ0FBQytPLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFOVosRUFBQSxHQUF5QitLLElBQUksQ0FBQzdOLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUs2TixJQUFJLENBQUMrTyxLQUFWLENBREYsQ0FERixDQURELENBREgsQ0FERixFQVVFLE1BQUMsT0FBRDtBQUFTLE9BQUcsRUFBQyxhQUFiO0FBQTJCLFNBQUssRUFBQyxhQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cyQixpREFBYSxDQUFDRyxJQUFkLENBQW1CRCxPQUFuQixDQUEyQkcsTUFBM0IsQ0FBa0MzRCxHQUFsQyxDQUF1Q3BOLElBQUQsSUFDckMsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUVBLElBQUksQ0FBQytPLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFOVosRUFBQSxHQUF5QitLLElBQUksQ0FBQzdOLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUs2TixJQUFJLENBQUMrTyxLQUFWLENBREYsQ0FERixDQURELENBREgsQ0FWRixFQW1CRSxNQUFDLE9BQUQ7QUFBUyxPQUFHLEVBQUMsWUFBYjtBQUEwQixTQUFLLEVBQUMsWUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHMkIsaURBQWEsQ0FBQ0csSUFBZCxDQUFtQkQsT0FBbkIsQ0FBMkIxVyxLQUEzQixDQUFpQ2tULEdBQWpDLENBQXNDcE4sSUFBRCxJQUNwQyxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBRUEsSUFBSSxDQUFDK08sS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU5WixFQUFBLEdBQXlCK0ssSUFBSSxDQUFDN04sSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBSzZOLElBQUksQ0FBQytPLEtBQVYsQ0FERixDQURGLENBREQsQ0FESCxDQW5CRixDQWZGLEVBNENFLE1BQUMsT0FBRDtBQUFTLE9BQUcsRUFBQyxPQUFiO0FBQXFCLFNBQUssRUFBRTJCLGlEQUFhLENBQUNNLEtBQWQsQ0FBb0JqQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cyQixpREFBYSxDQUFDTSxLQUFkLENBQW9CSixPQUFwQixDQUE0QnhELEdBQTVCLENBQWlDcE4sSUFBRCxJQUMvQixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBRUEsSUFBSSxDQUFDK08sS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU5WixFQUFBLEdBQXlCK0ssSUFBSSxDQUFDN04sSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBSzZOLElBQUksQ0FBQytPLEtBQVYsQ0FERixDQURGLENBREQsQ0FESCxDQTVDRixFQXFERSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFOVosRUFBQSxHQUF5QnliLGlEQUFhLENBQUNPLEtBQWQsQ0FBb0I5ZSxJQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsb0JBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0d1ZSxpREFBYSxDQUFDTyxLQUFkLENBQW9CbEMsS0FMdkIsQ0FERixDQURGLENBckRGLENBREYsRUFrRUU7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU5WixFQUFBLEdBQXlCLGNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLENBREYsRUFJRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQWxFRixDQURGO0FBMkVEOztBQUVjbkIsd0hBQUssQ0FBQytXLElBQU4sQ0FBV3VGLGVBQVgsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTYyxTQUFULEdBQXFCO0FBQ25CLFFBQU07QUFBRWI7QUFBRixNQUFjQyx5Q0FBcEI7QUFDQSxRQUFNO0FBQUEsT0FBQ3RHLE9BQUQ7QUFBQSxPQUFVdUc7QUFBVixNQUF3QnRJLHNEQUFRLENBQUMsTUFBRCxDQUF0Qzs7QUFDQSxRQUFNdUksV0FBVyxHQUFJbGUsQ0FBRCxJQUFPO0FBQ3pCTixXQUFPLENBQUN5VSxHQUFSLENBQVksUUFBWixFQUFzQm5VLENBQXRCO0FBQ0FpZSxjQUFVLENBQUNqZSxDQUFDLENBQUNTLEdBQUgsQ0FBVjtBQUNELEdBSEQ7O0FBSUEsU0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTJkLGlEQUFhLENBQUNDLElBQWQsQ0FBbUJ4ZSxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsd0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q3VlLGlEQUFhLENBQUNDLElBQWQsQ0FBbUI1QixLQUExRCxDQURGLENBREYsRUFJRTtBQUFJLGFBQVMsRUFBQywwQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cyQixpREFBYSxDQUFDQyxJQUFkLENBQW1CQyxPQUFuQixDQUEyQnhELEdBQTNCLENBQStCLENBQUNwTixJQUFELEVBQU9zTixLQUFQLEtBQzlCO0FBQUksT0FBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFclksRUFBQSxHQUF5QitLLElBQUksQ0FBQzdOLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk2TixJQUFJLENBQUMrTyxLQUFULENBREYsQ0FERixDQURELENBREgsQ0FKRixDQURGLEVBZUU7QUFBSSxhQUFTLEVBQUMsNkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU5WixFQUFBLEdBQXlCeWIsaURBQWEsQ0FBQ0csSUFBZCxDQUFtQjFlLElBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyx3QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDdWUsaURBQWEsQ0FBQ0csSUFBZCxDQUFtQjlCLEtBQTFELENBREYsQ0FERixFQUlFO0FBQUksYUFBUyxFQUFDLGdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHMkIsaURBQWEsQ0FBQ0csSUFBZCxDQUFtQkQsT0FBbkIsQ0FBMkJFLE1BQTNCLENBQWtDMUQsR0FBbEMsQ0FBc0MsQ0FBQ3BOLElBQUQsRUFBT3NOLEtBQVAsS0FDckM7QUFBSSxPQUFHLEVBQUVBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVyWSxFQUFBLEdBQXlCK0ssSUFBSSxDQUFDN04sSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTZOLElBQUksQ0FBQytPLEtBQVQsQ0FERixDQURGLENBREQsQ0FGSCxDQURGLEVBV0U7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRzJCLGlEQUFhLENBQUNHLElBQWQsQ0FBbUJELE9BQW5CLENBQTJCRyxNQUEzQixDQUFrQzNELEdBQWxDLENBQXNDLENBQUNwTixJQUFELEVBQU9zTixLQUFQLEtBQ3JDO0FBQUksT0FBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFclksRUFBQSxHQUF5QitLLElBQUksQ0FBQzdOLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk2TixJQUFJLENBQUMrTyxLQUFULENBREYsQ0FERixDQURELENBRkgsQ0FYRixFQXFCRTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVHMkIsaURBQWEsQ0FBQ0csSUFBZCxDQUFtQkQsT0FBbkIsQ0FBMkIxVyxLQUEzQixDQUFpQ2tULEdBQWpDLENBQXFDLENBQUNwTixJQUFELEVBQU9zTixLQUFQLEtBQ3BDO0FBQUksT0FBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFclksRUFBQSxHQUF5QitLLElBQUksQ0FBQzdOLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk2TixJQUFJLENBQUMrTyxLQUFULENBREYsQ0FERixDQURELENBRkgsQ0FyQkYsQ0FKRixDQWZGLEVBb0RFO0FBQUksYUFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFOVosRUFBQSxHQUF5QnliLGlEQUFhLENBQUNTLElBQWQsQ0FBbUJoZixJQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsd0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q3VlLGlEQUFhLENBQUNTLElBQWQsQ0FBbUJwQyxLQUExRCxDQURGLENBREYsRUFJRTtBQUFJLGFBQVMsRUFBQywwQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cyQixpREFBYSxDQUFDUyxJQUFkLENBQW1CUCxPQUFuQixDQUEyQnhELEdBQTNCLENBQStCLENBQUNwTixJQUFELEVBQU9zTixLQUFQLEtBQzlCO0FBQUksT0FBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFclksRUFBQSxHQUF5QitLLElBQUksQ0FBQzdOLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk2TixJQUFJLENBQUMrTyxLQUFULENBREYsQ0FERixDQURELENBREgsQ0FKRixDQXBERixFQWtFRTtBQUFJLGFBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTlaLEVBQUEsR0FBeUJ5YixpREFBYSxDQUFDTSxLQUFkLENBQW9CN2UsSUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUN1ZSxpREFBYSxDQUFDTSxLQUFkLENBQW9CakMsS0FBM0QsQ0FERixDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUMsMEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHMkIsaURBQWEsQ0FBQ00sS0FBZCxDQUFvQkosT0FBcEIsQ0FBNEJ4RCxHQUE1QixDQUFnQyxDQUFDcE4sSUFBRCxFQUFPc04sS0FBUCxLQUMvQjtBQUFJLE9BQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRXJZLEVBQUEsR0FBeUIrSyxJQUFJLENBQUM3TixJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJNk4sSUFBSSxDQUFDK08sS0FBVCxDQURGLENBREYsQ0FERCxDQURILENBSkYsQ0FsRUYsRUFnRkU7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU5WixFQUFBLEdBQXlCeWIsaURBQWEsQ0FBQ08sS0FBZCxDQUFvQjllLElBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyx3QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDdWUsaURBQWEsQ0FBQ08sS0FBZCxDQUFvQmxDLEtBQTNELENBREYsQ0FERixDQWhGRixDQURGO0FBd0ZEOztBQUVjamIsd0hBQUssQ0FBQytXLElBQU4sQ0FBV3FHLFNBQVgsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNFLFVBQVQsQ0FBb0I7QUFBRUMsYUFBVyxHQUFHLFFBQWhCO0FBQTBCQztBQUExQixDQUFwQixFQUE0RDtBQUMxRCxRQUFNO0FBQUVDO0FBQUYsTUFBYUMsMkNBQW5CO0FBQ0EsUUFBTXZmLE1BQU0sR0FBR3dmLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTFHLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQzBHLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0MxSixzREFBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQzJKLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0M1SixzREFBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFDQSxRQUFNNkosWUFBWSxHQUFHakssa0VBQVcsQ0FBQzZKLGFBQUQsRUFBZ0IsR0FBaEIsQ0FBaEM7QUFDQSxRQUFNSyxTQUFTLEdBQUd6RywrREFBVyxDQUFFclMsS0FBRCxJQUFXQSxLQUFLLENBQUMrWSxXQUFsQixDQUE3QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUF1QkYsU0FBN0I7O0FBQ0EsUUFBTUcsUUFBUSxHQUFJL0YsR0FBRCxJQUFTO0FBQ3hCd0Ysb0JBQWdCLENBQUN4RixHQUFELENBQWhCO0FBQ0QsR0FGRDs7QUFHQSxRQUFNZ0csY0FBYyxHQUFHLENBQUMvUyxLQUFELEVBQVFnVCxNQUFSLEtBQW1CO0FBQ3hDVCxvQkFBZ0IsQ0FBQ3ZTLEtBQUQsQ0FBaEI7QUFDRCxHQUZEOztBQUdBLFFBQU1pVCxRQUFRLEdBQUlsRyxHQUFELElBQVM7QUFDeEIsUUFBSSxDQUFDdUYsYUFBRCxJQUFrQkEsYUFBYSxLQUFLLEVBQXhDLEVBQTRDO0FBQzFDO0FBQ0QsS0FGRCxNQUVPO0FBQ0x6ZixZQUFNLENBQUMwSCxJQUFQLENBQVk7QUFDVjNGLGdCQUFRLEVBQUVpQixFQUFBLEdBQXlCLHFCQUR6QjtBQUVWa0QsYUFBSyxFQUFFO0FBQUU0TCxXQUFDLEVBQUUyTjtBQUFMO0FBRkcsT0FBWjtBQUlEO0FBQ0YsR0FURDs7QUFVQSxRQUFNWSxnQkFBZ0IsR0FBSW5HLEdBQUQsSUFBUztBQUNoQzBGLHNCQUFrQixDQUFDMUYsR0FBRCxDQUFsQjtBQUNELEdBRkQ7O0FBR0EsUUFBTWpULE9BQU8sR0FDWCtZLGdCQUFnQixDQUFDdlYsSUFBakIsQ0FBc0J1SixNQUF0QixHQUErQixDQUEvQixJQUNBZ00sZ0JBQWdCLENBQUN2VixJQUFqQixDQUFzQjBRLEdBQXRCLENBQTJCcE4sSUFBRCxLQUFXO0FBQUVaLFNBQUssRUFBRVksSUFBSSxDQUFDeko7QUFBZCxHQUFYLENBQTFCLENBRkY7QUFJQTJSLHlEQUFTLENBQUMsTUFBTTtBQUNkNkMsWUFBUSxDQUNOd0gsOEZBQTJCLENBQUM7QUFDMUI3TixXQUFLLEVBQUVnTixhQURtQjtBQUUxQmhPLFdBQUssRUFBRSxFQUZtQjtBQUcxQkMsY0FBUSxFQUFFaU87QUFIZ0IsS0FBRCxDQURyQixDQUFSO0FBT0QsR0FSUSxFQVFOLENBQUNFLFlBQUQsRUFBZUYsZUFBZixDQVJNLENBQVQ7QUFTQSxTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDTixVQUFELElBQ0M7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFDRSxnQkFBWSxFQUFFTSxlQURoQjtBQUVFLGNBQVUsRUFBRTtBQUFHLGVBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRmQ7QUFHRSxZQUFRLEVBQUUsS0FIWjtBQUlFLFlBQVEsRUFBRVUsZ0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsRUFPR0Usa0RBQVUsQ0FBQ3BGLEdBQVgsQ0FBZSxDQUFDcE4sSUFBRCxFQUFPc04sS0FBUCxLQUNkLE1BQUMsTUFBRDtBQUFRLE9BQUcsRUFBRUEsS0FBYjtBQUFvQixTQUFLLEVBQUV0TixJQUFJLENBQUNaLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1ksSUFBSSxDQUFDekosSUFEUixDQURELENBUEgsQ0FERixDQUZKLEVBbUJFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQ0UsWUFBUSxNQURWO0FBRUUsU0FBSyxFQUFFbWIsYUFGVDtBQUdFLFlBQVEsRUFBRVMsY0FIWjtBQUlFLFlBQVEsRUFBRUQsUUFKWjtBQUtFLFdBQU8sRUFBRWhaLE9BTFg7QUFNRSxnQkFBWSxFQUFFLENBQUN1WixVQUFELEVBQWFMLE1BQWIsS0FDWkEsTUFBTSxDQUFDaFQsS0FBUCxDQUFhc1QsV0FBYixHQUEyQkMsT0FBM0IsQ0FBbUNGLFVBQVUsQ0FBQ0MsV0FBWCxFQUFuQyxNQUNBLENBQUMsQ0FSTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQywwQ0FBRCxDQUFPLE1BQVA7QUFDRSxlQUFXLEVBQUMsa0JBRGQ7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLGVBQVcsRUFBRXJCLFdBSGY7QUFJRSxZQUFRLEVBQUUsS0FKWjtBQUtFLFdBQU8sRUFBRVksZ0JBQWdCLENBQUNXLE9BTDVCO0FBTUUsWUFBUSxFQUFFUCxRQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGLENBbkJGLENBREYsQ0FERjtBQThDRDs7QUFFY3ZlLHdIQUFLLENBQUMrVyxJQUFOLENBQVd1RyxVQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVN5QixPQUFULENBQWlCO0FBQUVDO0FBQUYsQ0FBakIsRUFBcUM7QUFDbEQsU0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFXLFNBQUssRUFBRUEsY0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTdkLEVBQUEsR0FBeUIsR0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFFQSxFQUFBLEdBQXlCLHlCQURoQztBQUVFLE9BQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBRkYsRUFVRSxNQUFDLDREQUFEO0FBQVksZUFBVyxFQUFFO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREYsQ0FERixDQURGO0FBb0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTThkLFFBQVEsR0FBRyxDQUNmO0FBQUV4YyxNQUFJLEVBQUUsU0FBUjtBQUFtQnljLE9BQUssRUFBRTtBQUExQixDQURlLEVBRWY7QUFBRXpjLE1BQUksRUFBRSxVQUFSO0FBQW9CeWMsT0FBSyxFQUFFO0FBQTNCLENBRmUsRUFHZjtBQUFFemMsTUFBSSxFQUFFLFlBQVI7QUFBc0J5YyxPQUFLLEVBQUU7QUFBN0IsQ0FIZSxDQUFqQjtBQU1lLFNBQVNDLFNBQVQsQ0FBbUI7QUFBRUg7QUFBRixDQUFuQixFQUF1QztBQUNwRCxRQUFNO0FBQUV2QjtBQUFGLE1BQWFDLDJDQUFuQjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFXLFNBQUssRUFBRXNCLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLGdDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixtQkFMRixDQURGLENBREYsRUFhRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFRLGdCQUFZLEVBQUMsU0FBckI7QUFBK0IsU0FBSyxFQUFFLEdBQXRDO0FBQTJDLFlBQVEsRUFBRSxLQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFFBQVEsQ0FBQzNGLEdBQVQsQ0FBYSxDQUFDcE4sSUFBRCxFQUFPc04sS0FBUCxLQUNaLE1BQUMsTUFBRDtBQUFRLE9BQUcsRUFBRUEsS0FBYjtBQUFvQixTQUFLLEVBQUV0TixJQUFJLENBQUN6SixJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTGdZLFlBQU0sRUFBRSxLQUFLLEVBQUwsR0FBVSxJQURiO0FBRUxELFdBQUssRUFBRSxLQUFLLEVBQUwsR0FBVSxJQUZaO0FBR0w0RSxlQUFTLEVBQUUsU0FITjtBQUlMQyxlQUFTLEVBQUUsQ0FBQyxDQUFELEdBQUssRUFBTCxHQUFVLElBSmhCO0FBS0xDLGlCQUFXLEVBQUUsSUFBSSxFQUFKLEdBQVM7QUFMakIsS0FEVDtBQVFFLE9BQUcsRUFBRW5lLEVBQUEsR0FBeUIrSyxJQUFJLENBQUNnVCxLQVJyQztBQVNFLE9BQUcsRUFBQyxFQVROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVlHaFQsSUFBSSxDQUFDekosSUFaUixDQURELENBREgsQ0FERixDQUpGLEVBd0JFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFdEIsRUFBQSxHQUF5QixhQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFVBREYsQ0FERixDQXhCRixDQWJGLENBREYsQ0FERixDQURGO0FBcURELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNb2UsY0FBYyxHQUFHL0osd0VBQWdCLENBQUNxRyx5REFBRCxDQUF2Qzs7QUFFQSxTQUFTMkQsU0FBVCxDQUFtQjtBQUFFdkUsT0FBRjtBQUFTM2E7QUFBVCxDQUFuQixFQUF3QztBQUN0QyxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUTJhLEtBQVIsQ0FERixDQURGLEVBSUUsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtHM2EsUUFMSCxFQU1FLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0UsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERjtBQVdEOztBQUVjTix3SEFBSyxDQUFDK1csSUFBTixDQUFXeUksU0FBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0I7QUFBRVQsZ0JBQUY7QUFBa0JVLFFBQWxCO0FBQTBCQyxVQUExQjtBQUFvQy9LLE9BQXBDO0FBQTJDMkI7QUFBM0MsQ0FBbEIsRUFBMEU7QUFDeEUsUUFBTXFKLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFdBQU9ELFFBQVEsR0FDWDtBQUFFRSxRQUFFLEVBQUUsRUFBTjtBQUFVQyxRQUFFLEVBQUU7QUFBZCxLQURXLEdBRVhKLE1BQU0sR0FDTjtBQUFFRyxRQUFFLEVBQUUsRUFBTjtBQUFVRSxRQUFFLEVBQUUsRUFBZDtBQUFrQkQsUUFBRSxFQUFFLENBQXRCO0FBQXlCRSxRQUFFLEVBQUU7QUFBN0IsS0FETSxHQUVOO0FBQUVILFFBQUUsRUFBRSxFQUFOO0FBQVVDLFFBQUUsRUFBRTtBQUFkLEtBSko7QUFLRCxHQU5EOztBQU9BLFFBQU1HLEdBQUcsR0FBR0wsU0FBUyxFQUFyQjtBQUNBLFNBQ0U7QUFDRSxhQUFTLEVBQUcsWUFBV3ZKLGlEQUFVLENBQUNFLFNBQUQsRUFBWTtBQUFFLGlCQUFXbUo7QUFBYixLQUFaLENBQW1DLEVBRHRFO0FBRUUsU0FBSyxFQUFFOUssS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUUsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dzTCxnREFBWSxDQUNWQyxLQURGLENBQ1EsQ0FEUixFQUNXUixRQUFRLEdBQUcsQ0FBSCxHQUFPTyxnREFBWSxDQUFDL04sTUFEdkMsRUFFRW1ILEdBRkYsQ0FFTSxDQUFDcE4sSUFBRCxFQUFPc04sS0FBUCxLQUNILE1BQUMsd0NBQUQ7QUFBSyxPQUFHLEVBQUVBO0FBQVYsS0FBcUJvRyxTQUFTLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxzQkFEWjtBQUVFLE9BQUcsRUFBRXplLEVBQUEsR0FBeUIrSyxJQUFJLENBQUNrVSxPQUZyQztBQUdFLE9BQUcsRUFBQyxjQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQUksYUFBUyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0NsVSxJQUFJLENBQUN6SixJQUEzQyxDQU5GLEVBT0U7QUFBRyxhQUFTLEVBQUMsNEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHeUosSUFBSSxDQUFDbVUsV0FEUixDQVBGLENBREYsQ0FISCxDQURILENBREYsQ0FKRixDQURGO0FBNEJEOztBQUVjcmdCLHdIQUFLLENBQUMrVyxJQUFOLENBQVcwSSxRQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBRWUsU0FBU2EsU0FBVCxDQUFtQjtBQUFFQyxPQUFGO0FBQVNqZ0I7QUFBVCxDQUFuQixFQUF3QztBQUNyRCxTQUNFO0FBQUssYUFBUyxFQUFFaWdCLEtBQUssR0FBRyxpQkFBSCxHQUF1QixXQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBEamdCLFFBQTFELENBREY7QUFHRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05EO0FBQ0E7QUFFZSxTQUFTa2dCLGVBQVQsQ0FBeUI7QUFDdEM1WCxNQURzQztBQUV0QzZYLGNBQVksR0FBRyxxQ0FGdUI7QUFHdENDLGtCQUFnQixHQUFHLDZCQUhtQjtBQUl0Q0M7QUFKc0MsQ0FBekIsRUFLWjtBQUNELFNBQU8vWCxJQUFJLENBQUNrVyxPQUFMLEdBQ0wsTUFBQyw2Q0FBRDtBQUFVLFVBQU0sTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURLLEdBRUhsVyxJQUFJLENBQUM1QixLQUFMLEdBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLeVosWUFBTCxDQURFLEdBRUE3WCxJQUFJLENBQUNBLElBQUwsQ0FBVXVKLE1BQVYsR0FBbUIsQ0FBbkIsR0FDRndPLFVBQVUsSUFBSUEsVUFBVSxDQUFDL1gsSUFBSSxDQUFDQSxJQUFOLENBRHRCLEdBR0YsTUFBQywwQ0FBRDtBQUNFLFNBQUssRUFBRWdZLDBDQUFLLENBQUNDLHNCQURmO0FBRUUsZUFBVyxFQUFFSCxnQkFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEY7QUFZRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJEO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNJLGdCQUFULENBQTBCO0FBQ3hCQyxLQUR3QjtBQUV4QkMsS0FGd0I7QUFHeEJDLGNBQVksR0FBRyxDQUhTO0FBSXhCMUssV0FKd0I7QUFLeEI2SCxVQUx3QjtBQU14QjhDLFlBTndCO0FBT3hCQztBQVB3QixDQUExQixFQVFHO0FBQ0QsUUFBTUMsV0FBVyxHQUFHekwsb0RBQU0sQ0FBQyxJQUFELENBQTFCO0FBQ0EsUUFBTTtBQUFBLE9BQUNySyxLQUFEO0FBQUEsT0FBUStWO0FBQVIsTUFBb0JsTixzREFBUSxDQUFDOE0sWUFBRCxDQUFsQztBQUNBLFFBQU1qRCxZQUFZLEdBQUdqSyxrRUFBVyxDQUFDekksS0FBRCxFQUFRLEdBQVIsQ0FBaEM7QUFDQThJLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlnTixXQUFXLENBQUNsTCxPQUFoQixFQUF5QjtBQUN2QmtMLGlCQUFXLENBQUNsTCxPQUFaLEdBQXNCLEtBQXRCO0FBQ0E7QUFDRDs7QUFDRGtJLFlBQVEsSUFBSUEsUUFBUSxDQUFDOVMsS0FBRCxDQUFwQjtBQUNELEdBTlEsRUFNTixDQUFDMFMsWUFBRCxDQU5NLENBQVQ7QUFPQTVKLHlEQUFTLENBQUMsTUFBTTtBQUNkaU4sWUFBUSxDQUFDSixZQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsWUFBRCxDQUZNLENBQVQ7QUFHQSxRQUFNSyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsTUFBTTtBQUN0QyxRQUFJUixHQUFHLElBQUl6VixLQUFLLElBQUl5VixHQUFwQixFQUF5QjtBQUN2QjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUl6VixLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNkO0FBQ0Q7O0FBQ0Q0VixnQkFBVSxJQUFJQSxVQUFVLEVBQXhCO0FBQ0FHLGNBQVEsQ0FBQy9WLEtBQUssR0FBRyxDQUFULENBQVI7QUFDRDtBQUNGLEdBVmdDLEVBVTlCLENBQUNBLEtBQUQsQ0FWOEIsQ0FBakM7QUFXQSxRQUFNa1csYUFBYSxHQUFHRCx5REFBVyxDQUFDLE1BQU07QUFDdEMsUUFBSWpXLEtBQUssSUFBSTBWLEdBQWIsRUFBa0I7QUFDaEI7QUFDRDs7QUFDREcsY0FBVSxJQUFJQSxVQUFVLEVBQXhCO0FBQ0FFLFlBQVEsQ0FBQy9WLEtBQUssR0FBRyxDQUFULENBQVI7QUFDRCxHQU5nQyxFQU05QixDQUFDQSxLQUFELENBTjhCLENBQWpDO0FBT0EsU0FDRTtBQUFLLGFBQVMsRUFBRyxxQkFBb0IrSyxpREFBVSxDQUFDRSxTQUFELENBQVksRUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkNqTCxLQUEzQyxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFlBQVEsRUFBRUEsS0FBSyxJQUFJeVYsR0FBVCxJQUFnQnpWLEtBQUssSUFBSSxDQUZyQztBQUdFLFdBQU8sRUFBRWdXLGFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLEVBUUUsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxNQUFiO0FBQW9CLFlBQVEsRUFBRWhXLEtBQUssSUFBSTBWLEdBQXZDO0FBQTRDLFdBQU8sRUFBRVEsYUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVJGLENBRkYsQ0FERjtBQWlCRDs7QUFFY3hoQix3SEFBSyxDQUFDK1csSUFBTixDQUFXK0osZ0JBQVgsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7O0FBRUEsU0FBU1csWUFBVCxDQUFzQjtBQUFFeEcsT0FBRjtBQUFTeUcsZ0JBQVQ7QUFBeUJuTCxXQUF6QjtBQUFvQzNCO0FBQXBDLENBQXRCLEVBQW1FO0FBQ2pFLFNBQ0U7QUFBSyxhQUFTLEVBQUcsaUJBQWdCeUIsaURBQVUsQ0FBQ0UsU0FBRCxDQUFZLEVBQXZEO0FBQTBELFNBQUssRUFBRTNCLEtBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtxRyxLQUFMLENBREYsRUFFRyxDQUFDeUcsY0FBRCxJQUFtQjtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRnRCLENBREY7QUFNRDs7QUFFYzFoQix3SEFBSyxDQUFDK1csSUFBTixDQUFXMEssWUFBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFFZSxTQUFTRSxXQUFULENBQXFCO0FBQUVwTCxXQUFGO0FBQWFFLE1BQUksR0FBRyxNQUFwQjtBQUE0Qm1MO0FBQTVCLENBQXJCLEVBQTBEO0FBQ3ZFLFNBQ0U7QUFBSSxhQUFTLEVBQUcsZ0JBQWV2TCxpREFBVSxDQUFDRSxTQUFELENBQVksRUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFFRSxJQUFkO0FBQW9CLFNBQUssRUFBRW1MLEtBQTNCO0FBQWtDLFFBQUksRUFBQyxHQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFFbkwsSUFBZDtBQUFvQixTQUFLLEVBQUVtTCxLQUEzQjtBQUFrQyxRQUFJLEVBQUMsR0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBTkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBRW5MLElBQWQ7QUFBb0IsU0FBSyxFQUFFbUwsS0FBM0I7QUFBa0MsUUFBSSxFQUFDLEdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVhGLEVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFFbkwsSUFBZDtBQUFvQixTQUFLLEVBQUVtTCxLQUEzQjtBQUFrQyxRQUFJLEVBQUMsR0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG9CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBaEJGLENBREY7QUF3QkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQjtBQUFFalosTUFBRjtBQUFRMk4sV0FBUjtBQUFtQkUsTUFBbkI7QUFBeUJxTCxlQUFhLEdBQUc7QUFBekMsQ0FBakIsRUFBdUU7QUFDckUsUUFBTTdLLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQzZLLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDN04sc0RBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNrRCxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ25ELHNEQUFRLENBQUMsS0FBRCxDQUF4RDtBQUNBLFFBQU07QUFBQSxPQUFDOE4sb0JBQUQ7QUFBQSxPQUF1QkM7QUFBdkIsTUFBa0QvTixzREFBUSxDQUFDLEtBQUQsQ0FBaEU7QUFDQSxRQUFNb0QsU0FBUyxHQUFHQywrREFBVyxDQUFFclMsS0FBRCxJQUFXQSxLQUFLLENBQUNzUyxXQUFsQixDQUE3QjtBQUNBLFFBQU0wSyxhQUFhLEdBQUczSywrREFBVyxDQUFFclMsS0FBRCxJQUFXQSxLQUFLLENBQUNpZCxlQUFsQixDQUFqQztBQUNBLFFBQU0xSyxZQUFZLEdBQUdGLCtEQUFXLENBQUVyUyxLQUFELElBQVdBLEtBQUssQ0FBQ3dTLGNBQWxCLENBQWhDO0FBQ0EsUUFBTTBLLGlCQUFpQixHQUFHeE8sZ0ZBQXNCLENBQUNzTyxhQUFhLENBQUN2WixJQUFmLEVBQXFCQSxJQUFJLENBQUNxSixFQUExQixDQUFoRDtBQUNBLFFBQU0yRixnQkFBZ0IsR0FBRy9ELGdGQUFzQixDQUFDNkQsWUFBRCxFQUFlOU8sSUFBSSxDQUFDcUosRUFBcEIsQ0FBL0M7O0FBQ0EsUUFBTXFRLFNBQVMsR0FBRyxNQUFNO0FBQ3RCTixtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNELEdBRkQ7O0FBR0EsUUFBTU8sWUFBWSxHQUFJL2pCLENBQUQsSUFBTztBQUMxQndqQixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNELEdBRkQ7O0FBR0EsUUFBTWxLLFdBQVcsR0FBSWxHLE9BQUQsSUFBYTtBQUMvQixRQUFJeUYsZ0JBQUosRUFBc0I7QUFDcEI7QUFDRDs7QUFDREMsdUJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUNBM0Ysb0ZBQWtCLENBQUM7QUFDakJDLGFBRGlCO0FBRWpCRSxlQUFTLEVBQUdsSixJQUFELElBQVU7QUFDbkIwTywyQkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0F0VixvREFBTyxDQUFDbEQsT0FBUixDQUFnQix1QkFBaEI7QUFDQW1ZLGdCQUFRLENBQUNjLG1GQUFnQixFQUFqQixDQUFSO0FBQ0QsT0FOZ0I7QUFPakJoRyxhQUFPLEVBQUUsQ0FBQ2lHLEdBQUQsRUFBTTVaLEdBQU4sS0FBYztBQUNyQmtaLDJCQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFDQXRWLG9EQUFPLENBQUNnRixLQUFSLENBQWNnUixHQUFkO0FBQ0Q7QUFWZ0IsS0FBRCxDQUFsQjtBQVlELEdBakJEOztBQWtCQSxRQUFNd0ssYUFBYSxHQUFJNVEsT0FBRCxJQUFhO0FBQ2pDLFFBQUlxUSxvQkFBSixFQUEwQjtBQUN4QjtBQUNEOztBQUNEQywyQkFBdUIsQ0FBQyxJQUFELENBQXZCOztBQUNBLFFBQUksQ0FBQ0csaUJBQUwsRUFBd0I7QUFDdEIvTSw4RkFBc0IsQ0FBQztBQUNyQjFELGVBRHFCO0FBRXJCRSxpQkFBUyxFQUFHbEosSUFBRCxJQUFVO0FBQ25Cc1osaUNBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBbGdCLHNEQUFPLENBQUNsRCxPQUFSLENBQWdCLDJCQUFoQjtBQUNBbVksa0JBQVEsQ0FBQ3dMLDRGQUFvQixFQUFyQixDQUFSO0FBQ0QsU0FOb0I7QUFPckIxUSxlQUFPLEVBQUUsQ0FBQ2lHLEdBQUQsRUFBTTVaLEdBQU4sS0FBYztBQUNyQjhqQixpQ0FBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0FsZ0Isc0RBQU8sQ0FBQ2dGLEtBQVIsQ0FBY2dSLEdBQWQ7QUFDQTlaLGlCQUFPLENBQUN5VSxHQUFSLENBQVl2VSxHQUFaO0FBQ0Q7QUFYb0IsT0FBRCxDQUF0QjtBQWFELEtBZEQsTUFjTztBQUNMbVgsbUdBQTJCLENBQUM7QUFDMUJsRCxpQkFBUyxFQUFFVCxPQUFPLENBQUNLLEVBRE87QUFFMUJILGlCQUFTLEVBQUdsSixJQUFELElBQVU7QUFDbkJzWixpQ0FBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0FsZ0Isc0RBQU8sQ0FBQ2dGLEtBQVIsQ0FBYywrQkFBZDtBQUNBaVEsa0JBQVEsQ0FBQ3dMLDRGQUFvQixFQUFyQixDQUFSO0FBQ0QsU0FOeUI7QUFPMUIxUSxlQUFPLEVBQUUsQ0FBQ2lHLEdBQUQsRUFBTTVaLEdBQU4sS0FBYztBQUNyQjhqQixpQ0FBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0FsZ0Isc0RBQU8sQ0FBQ2dGLEtBQVIsQ0FBY2dSLEdBQWQ7QUFDQTlaLGlCQUFPLENBQUN5VSxHQUFSLENBQVl2VSxHQUFaO0FBQ0Q7QUFYeUIsT0FBRCxDQUEzQjtBQWFEO0FBQ0YsR0FsQ0Q7O0FBbUNBLFFBQU02WixjQUFjLEdBQUlyRyxPQUFELElBQWE7QUFDbEMsUUFBSWdHLGdCQUFKLEVBQXNCO0FBQ3BCWCxjQUFRLENBQUNpQix3RkFBaUIsQ0FBQ3RHLE9BQU8sQ0FBQ0ssRUFBVCxDQUFsQixDQUFSO0FBQ0FqUSxrREFBTyxDQUFDZ0YsS0FBUixDQUFjLDhCQUFkO0FBQ0QsS0FIRCxNQUdPO0FBQ0xpUSxjQUFRLENBQUNrQixtRkFBWSxDQUFDdkcsT0FBRCxDQUFiLENBQVI7QUFDQTVQLGtEQUFPLENBQUNsRCxPQUFSLENBQWdCLDBCQUFoQjtBQUNEO0FBQ0YsR0FSRDs7QUFTQSxRQUFNNGpCLGtCQUFrQixHQUFHLENBQUMzQixHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN2QyxXQUFPMkIsSUFBSSxDQUFDQyxNQUFMLE1BQWlCNUIsR0FBRyxHQUFHRCxHQUF2QixJQUE4QkEsR0FBckM7QUFDRCxHQUZEOztBQUdBLFFBQU04QixnQkFBZ0IsR0FBSXBNLElBQUQsSUFBVTtBQUNqQyxZQUFRQSxJQUFSO0FBQ0UsV0FBSyxNQUFMO0FBQ0UsZUFDRTtBQUFLLG1CQUFTLEVBQUcsZ0JBQWVKLGlEQUFVLENBQUNFLFNBQUQsQ0FBWSxFQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLGdEQUFEO0FBQ0UsY0FBSSxFQUFFcFYsRUFBQSxHQUEwQixpQkFEbEM7QUFFRSxZQUFFLEVBQUVBLEVBQUEsR0FBMEIsWUFBV3lILElBQUksQ0FBQzhILElBQUssRUFGckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlFO0FBQUcsZUFBSyxFQUFFOUgsSUFBSSxDQUFDbkcsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxhQUFHLEVBQUVtRyxJQUFJLENBQUNrYSxVQUFmO0FBQTJCLGFBQUcsRUFBQyxlQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FKRixDQURGLENBREYsRUFXRTtBQUFLLG1CQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUUzaEIsRUFBQSxHQUEwQixpQkFEbEM7QUFFRSxZQUFFLEVBQUVBLEVBQUEsR0FBMEIsWUFBV3lILElBQUksQ0FBQzhILElBQUssRUFGckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlFO0FBQUcsbUJBQVMsRUFBQyxtQkFBYjtBQUFpQyxlQUFLLEVBQUMsZ0JBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRzlILElBQUksQ0FBQ25HLElBRFIsQ0FKRixDQURGLEVBU0U7QUFBSSxtQkFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDR21HLElBQUksQ0FBQ3VLLFFBQUwsR0FDR29CLG9FQUFjLENBQUMzTCxJQUFJLENBQUN3SyxLQUFMLEdBQWF4SyxJQUFJLENBQUN1SyxRQUFuQixDQURqQixHQUVHb0Isb0VBQWMsQ0FBQzNMLElBQUksQ0FBQ3dLLEtBQU4sQ0FIcEIsRUFJR3hLLElBQUksQ0FBQ3VLLFFBQUwsSUFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFNb0Isb0VBQWMsQ0FBQzNMLElBQUksQ0FBQ3dLLEtBQU4sQ0FBcEIsQ0FKcEIsQ0FURixDQVhGLENBREY7O0FBOEJGLFdBQUssTUFBTDtBQUNFLGVBQ0U7QUFBSyxtQkFBUyxFQUFHLGdCQUFlaUQsaURBQVUsQ0FBQ0UsU0FBRCxDQUFZLEVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUVwVixFQUFBLEdBQTBCLGlCQURsQztBQUVFLFlBQUUsRUFBRUEsRUFBQSxHQUEwQixZQUFXeUgsSUFBSSxDQUFDOEgsSUFBSyxFQUZyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUU7QUFBRyxlQUFLLEVBQUU5SCxJQUFJLENBQUNuRyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLGFBQUcsRUFBRW1HLElBQUksQ0FBQ2thLFVBQWY7QUFBMkIsYUFBRyxFQUFDLGVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQUpGLENBREYsQ0FERixFQVlFLE1BQUMsc0RBQUQ7QUFDRSxjQUFJLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxLQUFhTixrQkFBa0IsQ0FBQyxTQUFELEVBQVksU0FBWixDQUR2QztBQUVFLGtCQUFRLEVBQUUsQ0FBQztBQUFFTyxnQkFBRjtBQUFRQyxpQkFBUjtBQUFlQyxtQkFBZjtBQUF3QkM7QUFBeEIsV0FBRCxLQUF1QztBQUMvQyxtQkFDRTtBQUFLLHVCQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNFO0FBQUssdUJBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFLQywrREFBTyxDQUFDSixJQUFELENBQVosQ0FERixPQUMyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUQzQixDQURGLEVBSUU7QUFBSyx1QkFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUtJLCtEQUFPLENBQUNILEtBQUQsQ0FBWixDQURGLE9BQzRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRDVCLENBSkYsRUFPRTtBQUFLLHVCQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBS0csK0RBQU8sQ0FBQ0YsT0FBRCxDQUFaLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLENBUEYsRUFXRTtBQUFLLHVCQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBS0UsK0RBQU8sQ0FBQ0QsT0FBRCxDQUFaLENBREYsT0FDOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEOUIsQ0FYRixDQURGO0FBaUJELFdBcEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFaRixFQWtDRTtBQUFLLG1CQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUksbUJBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW1DeGEsSUFBSSxDQUFDaUgsUUFBeEMsQ0FERixFQUVFLE1BQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUUxTyxFQUFBLEdBQTBCLGlCQURsQztBQUVFLFlBQUUsRUFBRUEsRUFBQSxHQUEwQixZQUFXeUgsSUFBSSxDQUFDOEgsSUFBSyxFQUZyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUU7QUFBRyxtQkFBUyxFQUFDLG1CQUFiO0FBQWlDLGVBQUssRUFBQyxnQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHOUgsSUFBSSxDQUFDbkcsSUFEUixDQUpGLENBRkYsRUFVRTtBQUFJLG1CQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHbUcsSUFBSSxDQUFDdUssUUFBTCxHQUNHb0Isb0VBQWMsQ0FBQzNMLElBQUksQ0FBQ3dLLEtBQUwsR0FBYXhLLElBQUksQ0FBQ3VLLFFBQW5CLENBRGpCLEdBRUdvQixvRUFBYyxDQUFDM0wsSUFBSSxDQUFDd0ssS0FBTixDQUhwQixFQUlHeEssSUFBSSxDQUFDdUssUUFBTCxJQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU1vQixvRUFBYyxDQUFDM0wsSUFBSSxDQUFDd0ssS0FBTixDQUFwQixDQUpwQixDQVZGLENBbENGLEVBbURFO0FBQUssbUJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyw0Q0FBRDtBQUFTLGVBQUssRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQywyQ0FBRDtBQUNFLGlCQUFPLEVBQUUsTUFBTW9QLGFBQWEsQ0FBQzVaLElBQUQsQ0FEOUI7QUFFRSxtQkFBUyxFQUFHLGVBQWN5TixpREFBVSxDQUFDO0FBQ25DaUMsa0JBQU0sRUFBRStKO0FBRDJCLFdBQUQsQ0FFakMsRUFKTDtBQUtFLGNBQUksRUFBQyxTQUxQO0FBTUUsZUFBSyxFQUFDLE9BTlI7QUFPRSxjQUFJLEVBQ0ZKLG9CQUFvQixHQUNsQixNQUFDLGlFQUFEO0FBQWlCLGdCQUFJLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEa0IsR0FHbEI7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQURGLEVBa0JFLE1BQUMsNENBQUQ7QUFBUyxlQUFLLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQywyQ0FBRDtBQUNFLGlCQUFPLEVBQUUsTUFBTW5LLFdBQVcsQ0FBQ2xQLElBQUQsQ0FENUI7QUFFRSxtQkFBUyxFQUFDLGFBRlo7QUFHRSxjQUFJLEVBQUMsU0FIUDtBQUlFLGVBQUssRUFBQyxPQUpSO0FBS0UsY0FBSSxFQUNGeU8sZ0JBQWdCLEdBQ2QsTUFBQyxpRUFBRDtBQUFpQixnQkFBSSxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRGMsR0FHZDtBQUFHLHFCQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQWxCRixFQWlDRSxNQUFDLDRDQUFEO0FBQVMsZUFBSyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLDJDQUFEO0FBQ0UsaUJBQU8sRUFBRSxNQUFNWSxjQUFjLENBQUNyUCxJQUFELENBRC9CO0FBRUUsbUJBQVMsRUFBRyxlQUFjeU4saURBQVUsQ0FBQztBQUNuQ2lDLGtCQUFNLEVBQUVWO0FBRDJCLFdBQUQsQ0FFakMsRUFKTDtBQUtFLGNBQUksRUFBQyxTQUxQO0FBTUUsZUFBSyxFQUFDLE9BTlI7QUFPRSxjQUFJLEVBQUU7QUFBRyxxQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQWpDRixFQTRDRSxNQUFDLDRDQUFEO0FBQVMsZUFBSyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsMkNBQUQ7QUFDRSxpQkFBTyxFQUFFMEssU0FEWDtBQUVFLG1CQUFTLEVBQUMsYUFGWjtBQUdFLGNBQUksRUFBQyxTQUhQO0FBSUUsZUFBSyxFQUFDLE9BSlI7QUFLRSxjQUFJLEVBQUU7QUFBRyxxQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQTVDRixDQW5ERixDQURGOztBQTRHRixXQUFLLE1BQUw7QUFDRSxlQUNFO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxnREFBRDtBQUNFLGNBQUksRUFBRW5oQixFQUFBLEdBQTBCLGlCQURsQztBQUVFLFlBQUUsRUFBRUEsRUFBQSxHQUEwQixZQUFXeUgsSUFBSSxDQUFDOEgsSUFBSyxFQUZyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUU7QUFBRyxlQUFLLEVBQUU5SCxJQUFJLENBQUNuRyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLGFBQUcsRUFBRW1HLElBQUksQ0FBQ2thLFVBQWY7QUFBMkIsYUFBRyxFQUFDLGVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQUpGLENBREYsRUFTRSxNQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsaUJBQU8sRUFBRVIsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFURixDQURGLEVBY0U7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFJLG1CQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQThCMVosSUFBSSxDQUFDaUgsUUFBbkMsQ0FERixFQUVFLE1BQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUUxTyxFQUFBLEdBQTBCLGlCQURsQztBQUVFLFlBQUUsRUFBRUEsRUFBQSxHQUEwQixZQUFXeUgsSUFBSSxDQUFDOEgsSUFBSyxFQUZyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUU7QUFBRyxtQkFBUyxFQUFDLGNBQWI7QUFBNEIsZUFBSyxFQUFDLGdCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0c5SCxJQUFJLENBQUNuRyxJQURSLENBSkYsQ0FGRixFQVVFLE1BQUMseUNBQUQ7QUFDRSxtQkFBUyxFQUFDLGNBRFo7QUFFRSxrQkFBUSxNQUZWO0FBR0Usc0JBQVksRUFBRW1HLElBQUksQ0FBQ3dQLElBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFWRixFQWVFO0FBQUcsbUJBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQWZGLEVBbUJHeFAsSUFBSSxDQUFDaUosUUFBTCxHQUFnQixDQUFoQixHQUNDO0FBQUksbUJBQVMsRUFBQywrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUNnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFRakosSUFBSSxDQUFDaUosUUFBYixjQURoQixDQURELEdBS0M7QUFBSSxtQkFBUyxFQUFDLGdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQ2dCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRGhCLENBeEJKLENBZEYsRUEyQ0U7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUlFO0FBQUksbUJBQVMsRUFBQywrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0dqSixJQUFJLENBQUN1SyxRQUFMLElBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTW9CLG9FQUFjLENBQUMzTCxJQUFJLENBQUN3SyxLQUFOLENBQXBCLENBRHBCLEVBRUU7QUFBSyxtQkFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0d4SyxJQUFJLENBQUN1SyxRQUFMLEdBQ0dvQixvRUFBYyxDQUFDM0wsSUFBSSxDQUFDd0ssS0FBTCxHQUFheEssSUFBSSxDQUFDdUssUUFBbkIsQ0FEakIsR0FFR29CLG9FQUFjLENBQUMzTCxJQUFJLENBQUN3SyxLQUFOLENBSHBCLENBREYsQ0FGRixDQUpGLEVBY0U7QUFBSyxtQkFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLDJDQUFEO0FBQ0UsaUJBQU8sRUFBRSxNQUFNMEUsV0FBVyxDQUFDbFAsSUFBRCxDQUQ1QjtBQUVFLGlCQUFPLEVBQUV5TyxnQkFGWDtBQUdFLGVBQUssRUFBQyxPQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFRRSxNQUFDLDJDQUFEO0FBQ0UsaUJBQU8sRUFBRSxNQUFNWSxjQUFjLENBQUNyUCxJQUFELENBRC9CO0FBRUUsZUFBSyxFQUFDLE9BRlI7QUFHRSxtQkFBUyxFQUFFeU4saURBQVUsQ0FBQztBQUNwQmlDLGtCQUFNLEVBQUVWO0FBRFksV0FBRCxDQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVJGLENBZEYsQ0EzQ0YsQ0FERjs7QUErRUY7QUFDRSxlQUNFO0FBQUssbUJBQVMsRUFBRyxXQUFVdkIsaURBQVUsQ0FBQ0UsU0FBRCxDQUFZLEVBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxnREFBRDtBQUNFLGNBQUksRUFBRXBWLEVBQUEsR0FBMEIsaUJBRGxDO0FBRUUsWUFBRSxFQUFFQSxFQUFBLEdBQTBCLFlBQVd5SCxJQUFJLENBQUM4SCxJQUFLLEVBRnJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJRTtBQUFHLGVBQUssRUFBRTlILElBQUksQ0FBQ25HLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUssYUFBRyxFQUFFbUcsSUFBSSxDQUFDa2EsVUFBZjtBQUEyQixhQUFHLEVBQUMsZUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBSkYsQ0FERixDQURGLEVBV0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFJLG1CQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQThCbGEsSUFBSSxDQUFDaUgsUUFBbkMsQ0FERixFQUVFLE1BQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUUxTyxFQUFBLEdBQTBCLGlCQURsQztBQUVFLFlBQUUsRUFBRUEsRUFBQSxHQUEwQixZQUFXeUgsSUFBSSxDQUFDOEgsSUFBSyxFQUZyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUU7QUFBRyxtQkFBUyxFQUFDLGNBQWI7QUFBNEIsZUFBSyxFQUFDLGdCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0c5SCxJQUFJLENBQUNuRyxJQURSLENBSkYsQ0FGRixFQVVFO0FBQUksbUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDR21HLElBQUksQ0FBQ3VLLFFBQUwsR0FDR29CLG9FQUFjLENBQUMzTCxJQUFJLENBQUN3SyxLQUFMLEdBQWF4SyxJQUFJLENBQUN1SyxRQUFuQixDQURqQixHQUVHb0Isb0VBQWMsQ0FBQzNMLElBQUksQ0FBQ3dLLEtBQU4sQ0FIcEIsRUFJR3hLLElBQUksQ0FBQ3VLLFFBQUwsSUFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFNb0Isb0VBQWMsQ0FBQzNMLElBQUksQ0FBQ3dLLEtBQU4sQ0FBcEIsQ0FKcEIsQ0FWRixDQVhGLEVBNEJFO0FBQUssbUJBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyw0Q0FBRDtBQUFTLGVBQUssRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQywyQ0FBRDtBQUNFLGlCQUFPLEVBQUUsTUFBTW9QLGFBQWEsQ0FBQzVaLElBQUQsQ0FEOUI7QUFFRSxtQkFBUyxFQUFHLGVBQWN5TixpREFBVSxDQUFDO0FBQ25DaUMsa0JBQU0sRUFBRStKO0FBRDJCLFdBQUQsQ0FFakMsRUFKTDtBQUtFLGNBQUksRUFBQyxTQUxQO0FBTUUsZUFBSyxFQUFDLE9BTlI7QUFPRSxjQUFJLEVBQ0ZKLG9CQUFvQixHQUNsQixNQUFDLGlFQUFEO0FBQWlCLGdCQUFJLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEa0IsR0FHbEI7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQURGLEVBa0JFLE1BQUMsNENBQUQ7QUFBUyxlQUFLLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQywyQ0FBRDtBQUNFLGlCQUFPLEVBQUUsTUFBTW5LLFdBQVcsQ0FBQ2xQLElBQUQsQ0FENUI7QUFFRSxtQkFBUyxFQUFDLGFBRlo7QUFHRSxjQUFJLEVBQUMsU0FIUDtBQUlFLGVBQUssRUFBQyxPQUpSO0FBS0UsY0FBSSxFQUNGeU8sZ0JBQWdCLEdBQ2QsTUFBQyxpRUFBRDtBQUFpQixnQkFBSSxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRGMsR0FHZDtBQUFHLHFCQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQWxCRixFQWlDRSxNQUFDLDRDQUFEO0FBQVMsZUFBSyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLDJDQUFEO0FBQ0UsaUJBQU8sRUFBRSxNQUFNWSxjQUFjLENBQUNyUCxJQUFELENBRC9CO0FBRUUsbUJBQVMsRUFBRyxlQUFjeU4saURBQVUsQ0FBQztBQUNuQ2lDLGtCQUFNLEVBQUVWO0FBRDJCLFdBQUQsQ0FFakMsRUFKTDtBQUtFLGNBQUksRUFBQyxTQUxQO0FBTUUsZUFBSyxFQUFDLE9BTlI7QUFPRSxjQUFJLEVBQUU7QUFBRyxxQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQWpDRixFQTRDRSxNQUFDLDRDQUFEO0FBQVMsZUFBSyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsMkNBQUQ7QUFDRSxpQkFBTyxFQUFFMEssU0FEWDtBQUVFLG1CQUFTLEVBQUMsYUFGWjtBQUdFLGNBQUksRUFBQyxTQUhQO0FBSUUsZUFBSyxFQUFDLE9BSlI7QUFLRSxjQUFJLEVBQUU7QUFBRyxxQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQTVDRixDQTVCRixDQURGO0FBOU5KO0FBb1RELEdBclREOztBQXNUQSxTQUNFLG1FQUNHTyxnQkFBZ0IsQ0FBQ3BNLElBQUQsQ0FEbkIsRUFFRSxNQUFDLDBDQUFEO0FBQ0UsV0FBTyxFQUFFc0wsWUFEWDtBQUVFLFlBQVEsRUFBRVEsWUFGWjtBQUdFLFVBQU0sRUFBRSxJQUhWO0FBSUUsVUFBTSxFQUFFLElBSlY7QUFLRSxTQUFLLEVBQUUsR0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyw0RUFBRDtBQUFxQixTQUFLLEVBQUU7QUFBRWUsa0JBQVksRUFBRTtBQUFoQixLQUE1QjtBQUFpRCxXQUFPLE1BQXhEO0FBQXlELFFBQUksRUFBRTFhLElBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQUZGLENBREY7QUFjRDs7QUFFYzVJLHdIQUFLLENBQUMrVyxJQUFOLENBQVc4SyxPQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlhQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTMEIsU0FBVCxDQUFtQjtBQUFFM2E7QUFBRixDQUFuQixFQUE2QjtBQUMzQixTQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBVyxTQUFLLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBQUksQ0FBQzBRLEdBQUwsQ0FBUyxDQUFDcE4sSUFBRCxFQUFPc04sS0FBUCxLQUNSLE1BQUMsd0NBQUQ7QUFBSyxPQUFHLEVBQUVBLEtBQVY7QUFBaUIsTUFBRSxFQUFFLEVBQXJCO0FBQXlCLE1BQUUsRUFBRSxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsb0NBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTGdLLHFCQUFlLEVBQUcsUUFDaEJyaUIsRUFBQSxHQUF5QitLLElBQUksQ0FBQ3VYLFVBQy9CO0FBSEksS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyx3Q0FBRDtBQUFLLFNBQUssRUFBQyxRQUFYO0FBQW9CLFdBQU8sRUFBQyxjQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUV0aUIsRUFBQSxHQUF5QitLLElBQUksQ0FBQ2dULEtBRHJDO0FBRUUsT0FBRyxFQUFDLG9CQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFTRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0doVCxJQUFJLENBQUN3WCxPQUFMLENBQWFDLElBRGhCLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFRelgsSUFBSSxDQUFDd1gsT0FBTCxDQUFhOUksSUFBckIsQ0FGRixDQURGLEVBS0UsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFNBQUssRUFBQyxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUNFLFFBQUksRUFBRXpaLEVBQUEsR0FBeUIscUJBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUNFLFFBQUksRUFDRkEsRUFBQSxHQUF5QixxQkFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixDQURGLENBTEYsQ0FERixDQVRGLENBUkYsQ0FERixDQURELENBREgsQ0FERixDQURGLENBREY7QUFvREQ7O0FBRWNuQix3SEFBSyxDQUFDK1csSUFBTixDQUFXd00sU0FBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNLLE1BQVQsQ0FBZ0I7QUFBRTlCO0FBQUYsQ0FBaEIsRUFBbUM7QUFDakMsU0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssU0FBSyxFQUFDLFFBQVg7QUFBb0IsV0FBTyxFQUFDLGVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQWMsU0FBSyxFQUFDLGtCQUFwQjtBQUF1QyxrQkFBYyxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNGQUZGLEVBTUUsTUFBQyxzREFBRDtBQUNFLFFBQUksRUFBRWlCLElBQUksQ0FBQ0MsR0FBTCxLQUFhbEIsYUFEckI7QUFFRSxZQUFRLEVBQUUsQ0FBQztBQUFFbUIsVUFBRjtBQUFRQyxXQUFSO0FBQWVDLGFBQWY7QUFBd0JDO0FBQXhCLEtBQUQsS0FBdUM7QUFDL0MsYUFDRTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLQywrREFBTyxDQUFDSixJQUFELENBQVosQ0FERixPQUMyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQzQixDQURGLEVBSUU7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtJLCtEQUFPLENBQUNILEtBQUQsQ0FBWixDQURGLE9BQzRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FENUIsQ0FKRixFQU9FO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLRywrREFBTyxDQUFDRixPQUFELENBQVosTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixDQVBGLEVBV0U7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtFLCtEQUFPLENBQUNELE9BQUQsQ0FBWixDQURGLE9BQzhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEOUIsQ0FYRixDQURGO0FBaUJELEtBcEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQTRCRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsU0FBSyxFQUFDLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFamlCLEVBQUEsR0FBeUIscUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBRUEsRUFBQSxHQUF5QixxQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBNUJGLENBREYsQ0FERixFQXVDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLEdBREgsRUFFRTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQ0RBLEVBQUEsR0FDQSxnREFISjtBQUtFLE9BQUcsRUFBQyx3QkFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQXZDRixDQURGLENBREYsQ0FERjtBQTBERDs7QUFFY25CLHdIQUFLLENBQUMrVyxJQUFOLENBQVc2TSxNQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQyxhQUFULENBQXVCO0FBQUU3RSxnQkFBRjtBQUFrQnBXO0FBQWxCLENBQXZCLEVBQWlEO0FBQy9DLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBVyxTQUFLLEVBQUVvVyxjQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRTdkLEVBQUEsR0FBeUJ5SCxJQUFJLENBQUM2YSxVQURyQztBQUVFLE9BQUcsRUFBQyw4QkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssV0FBTyxFQUFDLFFBQWI7QUFBc0IsU0FBSyxFQUFDLFFBQTVCO0FBQXFDLFVBQU0sRUFBRSxFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLN2EsSUFBSSxDQUFDa2IsUUFBVixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLbGIsSUFBSSxDQUFDcVMsS0FBVixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHMUcsb0VBQWMsQ0FBQzNMLElBQUksQ0FBQ3dLLEtBQUwsQ0FBV3VRLElBQVosQ0FEakIsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVEvYSxJQUFJLENBQUN3SyxLQUFMLENBQVcyUSxJQUFuQixDQUZGLENBSEYsRUFPRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsU0FBSyxFQUFDLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFNWlCLEVBQUEsR0FBeUIscUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBRUEsRUFBQSxHQUF5QixxQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBUEYsQ0FERixDQURGLEVBa0JFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUNEQSxFQUFBLEdBQ0Esc0NBSEo7QUFLRSxPQUFHLEVBQUMsbUJBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FsQkYsQ0FERixDQVBGLENBREYsRUF5Q0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUUsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dvSyxLQUFLLENBQUN5WSxJQUFOLENBQVd6WSxLQUFLLENBQUMsQ0FBRCxDQUFoQixFQUFxQixDQUFDL00sQ0FBRCxFQUFJbVAsQ0FBSixLQUFVO0FBQzlCLFdBQ0UsTUFBQyx3Q0FBRDtBQUFLLFNBQUcsRUFBRUEsQ0FBVjtBQUFhLFFBQUUsRUFBRSxDQUFqQjtBQUFvQixRQUFFLEVBQUUsRUFBeEI7QUFBNEIsUUFBRSxFQUFFLENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFeE0sRUFBQSxHQUF5QixxQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFFQSxFQUFBLEdBQXlCLHFCQURqQztBQUVFLGVBQVMsRUFBQyxTQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUNFLFNBQUcsRUFDREEsRUFBQSxHQUNDLGtDQUFpQ3dNLENBQUMsR0FBRyxDQUFFLE1BSDVDO0FBS0UsU0FBRyxFQUFDLHNCQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixDQURGLENBREYsQ0FERjtBQWtCRCxHQW5CQSxDQURILENBREYsQ0F6Q0YsQ0FERixDQURGO0FBc0VEOztBQUVjM04sd0hBQUssQ0FBQytXLElBQU4sQ0FBVzhNLGFBQVgsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNJLFdBQVQsQ0FBcUI7QUFDbkJyUCxPQURtQjtBQUVuQnNQLGtCQUZtQjtBQUduQkMsWUFIbUI7QUFJbkJDLGFBSm1CO0FBS25CeGIsTUFMbUI7QUFNbkJ5YixhQU5tQjtBQU9uQkMsYUFQbUI7QUFRbkJDLFlBUm1CO0FBU25CQyxTQVRtQjtBQVVuQmpPLFdBVm1CO0FBV25Ca08sUUFBTSxHQUFHLENBQ1A7QUFBRTVFLE1BQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUUsRUFBRTtBQUFiLEdBRE8sRUFFUDtBQUFFRCxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFFLEVBQUU7QUFBYixHQUZPO0FBWFUsQ0FBckIsRUFlRztBQUNELFNBQ0U7QUFBSyxhQUFTLEVBQUcsZ0JBQWV6SixpREFBVSxDQUFDRSxTQUFELENBQVksRUFBdEQ7QUFBeUQsU0FBSyxFQUFFM0IsS0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUMyUCxVQUFELElBQ0M7QUFBSyxhQUFTLEVBQUcsdUJBQXNCbE8saURBQVUsQ0FBQ2lPLFdBQUQsQ0FBYyxFQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFjLFNBQUssRUFBRUQsV0FBckI7QUFBa0Msa0JBQWMsTUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkosRUFNRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUNFLFFBQUksRUFBRXpiLElBRFI7QUFFRSxjQUFVLEVBQUdBLElBQUQsSUFDVixNQUFDLHdDQUFEO0FBQUssWUFBTSxFQUFFNmIsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0c3YixJQUFJLENBQUMwUSxHQUFMLENBQVMsQ0FBQ3BOLElBQUQsRUFBT3NOLEtBQVAsS0FDUixNQUFDLHdDQUFEO0FBQ0UsU0FBRyxFQUFFQTtBQURQLE9BRU0ySyxVQUZOO0FBR0UsZUFBUyxFQUFFOU4saURBQVUsQ0FBQztBQUFFLG9CQUFZbU87QUFBZCxPQUFELENBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFLRSxNQUFDLHdEQUFEO0FBQ0UsVUFBSSxFQUFFSixXQURSO0FBRUUsZUFBUyxFQUFFRixnQkFGYjtBQUdFLFVBQUksRUFBRWhZLElBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLENBREQsQ0FESCxDQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLENBREY7QUErQkQ7O0FBRWNsTSx3SEFBSyxDQUFDK1csSUFBTixDQUFXa04sV0FBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU1MsVUFBVCxDQUFvQjtBQUNsQjlQLE9BRGtCO0FBRWxCaE0sTUFGa0I7QUFHbEIyTixXQUhrQjtBQUlsQm9PLGFBSmtCO0FBS2xCVCxrQkFMa0I7QUFNbEJVLGtCQU5rQjtBQU9sQlAsYUFQa0I7QUFRbEJDLGFBUmtCO0FBU2xCTyxxQkFBbUIsR0FBRyxLQVRKO0FBVWxCQyxZQUFVLEdBQUcsTUFWSztBQVdsQlg7QUFYa0IsQ0FBcEIsRUFZRztBQUNELFFBQU07QUFBRTFLO0FBQUYsTUFBY0MseUNBQXBCOztBQUNBLFFBQU1xTCxnQkFBZ0IsR0FBSTlsQixHQUFELElBQVM7QUFDaEMwbEIsZUFBVyxDQUFDMWxCLEdBQUQsQ0FBWDtBQUNELEdBRkQ7O0FBR0EsUUFBTStsQixnQkFBZ0IsR0FBRyxNQUN2QixNQUFDLDhEQUFEO0FBQ0UsUUFBSSxFQUFFcGMsSUFEUjtBQUVFLGNBQVUsRUFBR0EsSUFBRCxJQUNWLE1BQUMsd0NBQUQ7QUFDRSxZQUFNLEVBQUUsQ0FDTjtBQUFFaVgsVUFBRSxFQUFFLENBQU47QUFBU0MsVUFBRSxFQUFFO0FBQWIsT0FETSxFQUVOO0FBQUVELFVBQUUsRUFBRSxDQUFOO0FBQVNDLFVBQUUsRUFBRTtBQUFiLE9BRk0sQ0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUdsWCxJQUFJLENBQUMwUSxHQUFMLENBQVMsQ0FBQ3BOLElBQUQsRUFBT3NOLEtBQVAsS0FDUixNQUFDLHdDQUFEO0FBQUssU0FBRyxFQUFFQTtBQUFWLE9BQXFCMkssVUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNFLE1BQUMsd0RBQUQ7QUFBUyxlQUFTLEVBQUVELGdCQUFwQjtBQUFzQyxVQUFJLEVBQUVoWSxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERCxDQU5ILENBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGOztBQW1CQSxTQUNFO0FBQUssYUFBUyxFQUFHLGVBQWNtSyxpREFBVSxDQUFDRSxTQUFELENBQVksRUFBckQ7QUFBd0QsU0FBSyxFQUFFM0IsS0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFHLHNCQUNWa1EsVUFBVSxLQUFLLEtBQWYsR0FBdUIsWUFBdkIsR0FBc0MsV0FDdkMsS0FBSXpPLGlEQUFVLENBQUNpTyxXQUFELENBQWMsRUFIL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHUSxVQUFVLEtBQUssTUFBZixJQUNDLE1BQUMsMkRBQUQ7QUFDRSxTQUFLLEVBQUVULFdBRFQ7QUFFRSxhQUFTLEVBQUMsU0FGWjtBQUdFLGtCQUFjLEVBQUVRLG1CQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFZRSxNQUFDLHlDQUFEO0FBQ0Usc0JBQWtCLEVBQ2hCQyxVQUFVLEtBQUssS0FBZixHQUNJO0FBQ0VHLFVBQUksRUFDRixNQUFDLDJEQUFEO0FBQ0UsYUFBSyxFQUFFWixXQURUO0FBRUUsaUJBQVMsRUFBQyxTQUZaO0FBR0Usc0JBQWMsTUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLEtBREosR0FVSSxJQVpSO0FBY0Usb0JBQWdCLEVBQUMsR0FkbkI7QUFlRSxZQUFRLEVBQUVTLFVBQVUsS0FBSyxLQUFmLEdBQXVCLEtBQXZCLEdBQStCLElBZjNDO0FBZ0JFLFlBQVEsRUFBRUMsZ0JBaEJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FrQkUsTUFBQyxPQUFEO0FBQVMsT0FBRyxFQUFDLEtBQWI7QUFBbUIsT0FBRyxFQUFDLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsZ0JBQWdCLEVBRG5CLENBbEJGLEVBcUJHSixnQkFBZ0IsQ0FBQ3RMLEdBQWpCLENBQXFCLENBQUNwTixJQUFELEVBQU9zTixLQUFQLEtBQ3BCLE1BQUMsT0FBRDtBQUFTLE9BQUcsRUFBRXROLElBQWQ7QUFBb0IsT0FBRyxFQUFFQSxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c4WSxnQkFBZ0IsRUFEbkIsQ0FERCxDQXJCSCxDQVpGLENBREYsQ0FERjtBQTRDRDs7QUFFY2hsQix3SEFBSyxDQUFDK1csSUFBTixDQUFXMk4sVUFBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU1EsU0FBVCxHQUFxQjtBQUNsQyxRQUFNak8sUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDaU8sMEJBQUQ7QUFBQSxPQUE2QkM7QUFBN0IsTUFBOERqUixzREFBUSxDQUFDO0FBQzNFa1Isb0JBQWdCLEVBQUUsRUFEeUQ7QUFFM0VDLGdCQUFZLEVBQUUsRUFGNkQ7QUFHM0VDLHNCQUFrQixFQUFFO0FBSHVELEdBQUQsQ0FBNUU7QUFLQSxRQUFNdEgsU0FBUyxHQUFHekcsK0RBQVcsQ0FBRXJTLEtBQUQsSUFBV0EsS0FBSyxDQUFDK1ksV0FBbEIsQ0FBN0I7QUFDQSxRQUFNO0FBQ0pzSCxZQURJO0FBRUpGLGdCQUZJO0FBR0pELG9CQUhJO0FBSUpFO0FBSkksTUFLRnRILFNBTEo7QUFNQSxRQUFNO0FBQ0p3SCw0QkFESTtBQUVKQyxnQ0FGSTtBQUdKQyxrQ0FISTtBQUlKQztBQUpJLE1BS0ZDLHVEQUxKO0FBTUF6Uix5REFBUyxDQUFDLE1BQU07QUFDZDZDLFlBQVEsQ0FBQzJPLG9CQUFvQixDQUFDO0FBQUVoVyxXQUFLLEVBQUUsRUFBVDtBQUFhRyxVQUFJLEVBQUU7QUFBbkIsS0FBRCxDQUFyQixDQUFSO0FBQ0FrSCxZQUFRLENBQUN5Tyw0QkFBNEIsQ0FBQztBQUFFOVYsV0FBSyxFQUFFO0FBQVQsS0FBRCxDQUE3QixDQUFSO0FBQ0FxSCxZQUFRLENBQUN3Tyx3QkFBd0IsQ0FBQztBQUFFN1YsV0FBSyxFQUFFO0FBQVQsS0FBRCxDQUF6QixDQUFSO0FBQ0FxSCxZQUFRLENBQUMwTyw4QkFBOEIsQ0FBQztBQUFFL1YsV0FBSyxFQUFFO0FBQVQsS0FBRCxDQUEvQixDQUFSO0FBQ0QsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU1Bd0UseURBQVMsQ0FBQyxNQUFNO0FBQ2Q2QyxZQUFRLENBQ055Tyw0QkFBNEIsQ0FBQztBQUMzQjlWLFdBQUssRUFBRSxFQURvQjtBQUUzQkMsY0FBUSxFQUFFc1YsMEJBQTBCLENBQUNFO0FBRlYsS0FBRCxDQUR0QixDQUFSO0FBTUQsR0FQUSxFQU9OLENBQUNGLDBCQUEwQixDQUFDRSxnQkFBNUIsQ0FQTSxDQUFUO0FBUUFqUix5REFBUyxDQUFDLE1BQU07QUFDZDZDLFlBQVEsQ0FDTndPLHdCQUF3QixDQUFDO0FBQ3ZCN1YsV0FBSyxFQUFFLENBRGdCO0FBRXZCQyxjQUFRLEVBQUVzViwwQkFBMEIsQ0FBQ0c7QUFGZCxLQUFELENBRGxCLENBQVI7QUFNRCxHQVBRLEVBT04sQ0FBQ0gsMEJBQTBCLENBQUNHLFlBQTVCLENBUE0sQ0FBVDtBQVFBbFIseURBQVMsQ0FBQyxNQUFNO0FBQ2Q2QyxZQUFRLENBQ04wTyw4QkFBOEIsQ0FBQztBQUM3Qi9WLFdBQUssRUFBRSxDQURzQjtBQUU3QkMsY0FBUSxFQUFFc1YsMEJBQTBCLENBQUNJO0FBRlIsS0FBRCxDQUR4QixDQUFSO0FBTUQsR0FQUSxFQU9OLENBQUNKLDBCQUEwQixDQUFDSSxrQkFBNUIsQ0FQTSxDQUFUO0FBU0EsU0FDRSxNQUFDLG9FQUFEO0FBQVcsU0FBSyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNGQUFEO0FBQWUsa0JBQWMsTUFBN0I7QUFBOEIsUUFBSSxFQUFFTyw0REFBaUIsQ0FBQ0MsR0FBbEIsQ0FBc0IsQ0FBdEIsQ0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvRUFBRDtBQUFXLFNBQUssTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUZBQUQ7QUFDRSxRQUFJLEVBQUVWLGdCQURSO0FBRUUsZUFBVyxFQUFHaE4sR0FBRCxJQUNYK00sNkJBQTZCLGlDQUN4QkQsMEJBRHdCO0FBRTNCRSxzQkFBZ0IsRUFBRWhOO0FBRlMsT0FIakM7QUFRRSxvQkFBZ0IsRUFBRXFHLGtEQUFVLENBQUN5QixLQUFYLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCN0csR0FBdkIsQ0FBNEJwTixJQUFELElBQVVBLElBQUksQ0FBQ3pKLElBQTFDLENBUnBCO0FBU0UsZUFBVyxFQUFDLGtCQVRkO0FBVUUsb0JBQWdCLEVBQUMsYUFWbkI7QUFXRSxjQUFVLEVBQUU7QUFBRW9kLFFBQUUsRUFBRSxFQUFOO0FBQVVFLFFBQUUsRUFBRSxDQUFkO0FBQWlCQyxRQUFFLEVBQUUsQ0FBckI7QUFBd0JnRyxRQUFFLEVBQUU7QUFBNUIsS0FYZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixFQWlCRSxNQUFDLG9FQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFVLGFBQVMsRUFBQyxXQUFwQjtBQUFnQyxrQkFBYyxNQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FqQkYsRUFvQkUsTUFBQyxpRkFBRDtBQUFRLGlCQUFhLEVBQUUsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCRixFQXFCRSxNQUFDLG9FQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRkFBRDtBQUNFLFFBQUksRUFBRVQsa0JBRFI7QUFFRSxlQUFXLEVBQUdsTixHQUFELElBQ1grTSw2QkFBNkIsaUNBQ3hCRCwwQkFEd0I7QUFFM0JJLHdCQUFrQixFQUFFbE47QUFGTyxPQUhqQztBQVFFLG9CQUFnQixFQUFFcUcsa0RBQVUsQ0FBQ3lCLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUI3RyxHQUF2QixDQUE0QnBOLElBQUQsSUFBVUEsSUFBSSxDQUFDekosSUFBMUMsQ0FScEI7QUFTRSxjQUFVLEVBQUMsS0FUYjtBQVVFLGVBQVcsRUFBQyxhQVZkO0FBV0Usb0JBQWdCLEVBQUMsYUFYbkI7QUFZRSxjQUFVLEVBQUU7QUFBRW9kLFFBQUUsRUFBRSxFQUFOO0FBQVVFLFFBQUUsRUFBRSxDQUFkO0FBQWlCQyxRQUFFLEVBQUUsQ0FBckI7QUFBd0JnRyxRQUFFLEVBQUU7QUFBNUIsS0FaZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFlRSxNQUFDLHFGQUFEO0FBQ0UsUUFBSSxFQUFFVixZQURSO0FBRUUsZUFBVyxFQUFHak4sR0FBRCxJQUNYK00sNkJBQTZCLGlDQUN4QkQsMEJBRHdCO0FBRTNCRyxrQkFBWSxFQUFFak47QUFGYSxPQUhqQztBQVFFLG9CQUFnQixFQUFFcUcsa0RBQVUsQ0FBQ3lCLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUI3RyxHQUF2QixDQUE0QnBOLElBQUQsSUFBVUEsSUFBSSxDQUFDekosSUFBMUMsQ0FScEI7QUFTRSxjQUFVLEVBQUMsS0FUYjtBQVVFLGVBQVcsRUFBQyxtQkFWZDtBQVdFLG9CQUFnQixFQUFDLGFBWG5CO0FBWUUsY0FBVSxFQUFFO0FBQUVvZCxRQUFFLEVBQUUsRUFBTjtBQUFVRSxRQUFFLEVBQUUsQ0FBZDtBQUFpQkMsUUFBRSxFQUFFLENBQXJCO0FBQXdCZ0csUUFBRSxFQUFFO0FBQTVCLEtBWmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLEVBOEJFLE1BQUMsc0ZBQUQ7QUFDRSxRQUFJLEVBQUVSLFFBRFI7QUFFRSxlQUFXLEVBQUMsY0FGZDtBQUdFLGNBQVUsRUFBRTtBQUFFM0YsUUFBRSxFQUFFLEVBQU47QUFBVUUsUUFBRSxFQUFFLEVBQWQ7QUFBa0JELFFBQUUsRUFBRSxDQUF0QjtBQUF5QkUsUUFBRSxFQUFFO0FBQTdCLEtBSGQ7QUFJRSxlQUFXLEVBQUMsTUFKZDtBQUtFLFdBQU8sTUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUJGLENBckJGLEVBMkRFLE1BQUMsOEVBQUQ7QUFBVyxRQUFJLEVBQUVpRyx3REFBVSxDQUFDRixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0RGLENBREY7QUErREQsQzs7Ozs7Ozs7Ozs7O0FDbElEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNaEosSUFBSSxHQUFHO0FBQ2xCbUosZ0JBQWMsRUFBRSxnQkFERTtBQUVsQkMsd0JBQXNCLEVBQUUsd0JBRk47QUFHbEJDLHFCQUFtQixFQUFFLHFCQUhIO0FBSWxCQyxxQkFBbUIsRUFBRSxxQkFKSDtBQUtsQkMsNkJBQTJCLEVBQUUsNkJBTFg7QUFNbEJDLDBCQUF3QixFQUFFLDBCQU5SO0FBT2xCQyx5QkFBdUIsRUFBRSx5QkFQUDtBQVFsQkMsaUNBQStCLEVBQUUsaUNBUmY7QUFTbEJDLDhCQUE0QixFQUFFLDhCQVRaO0FBVWxCQyw0QkFBMEIsRUFBRSw0QkFWVjtBQVdsQkMsb0NBQWtDLEVBQUUsb0NBWGxCO0FBWWxCQyxpQ0FBK0IsRUFBRSxpQ0FaZjtBQWFsQkMscUJBQW1CLEVBQUUscUJBYkg7QUFjbEJDLDZCQUEyQixFQUFFLDZCQWRYO0FBZWxCQywwQkFBd0IsRUFBRSwwQkFmUjtBQWdCbEJDLHNCQUFvQixFQUFFLHNCQWhCSjtBQWlCbEJDLDhCQUE0QixFQUFFLDhCQWpCWjtBQWtCbEJDLDJCQUF5QixFQUFFLDJCQWxCVDtBQW1CbEJDLHlCQUF1QixFQUFFLHlCQW5CUDtBQW9CbEJDLGlDQUErQixFQUFFLGlDQXBCZjtBQXFCbEJDLDhCQUE0QixFQUFFO0FBckJaLENBQWI7QUF3QkEsTUFBTWpLLElBQUksR0FBRztBQUNsQmtLLGFBQVcsRUFBRSxhQURLO0FBRWxCQyxxQkFBbUIsRUFBRSxxQkFGSDtBQUdsQkMsa0JBQWdCLEVBQUUsa0JBSEE7QUFJbEJDLG1CQUFpQixFQUFFLG1CQUpEO0FBS2xCQywyQkFBeUIsRUFBRSwyQkFMVDtBQU1sQkMsd0JBQXNCLEVBQUUsd0JBTk47QUFPbEJDLG9CQUFrQixFQUFFLG9CQVBGO0FBUWxCQyw0QkFBMEIsRUFBRSw0QkFSVjtBQVNsQkMseUJBQXVCLEVBQUU7QUFUUCxDQUFiO0FBWUEsTUFBTUMsV0FBVyxHQUFHO0FBQ3pCQyxlQUFhLEVBQUUsZUFEVTtBQUV6QkMsVUFBUSxFQUFFLFVBRmU7QUFHekJDLFVBQVEsRUFBRSxVQUhlO0FBSXpCQyxVQUFRLEVBQUUsVUFKZTtBQUt6QkMsY0FBWSxFQUFFLGNBTFc7QUFNekJDLFdBQVMsRUFBRSxXQU5jO0FBT3pCQyxVQUFRLEVBQUUsVUFQZTtBQVF6QkMsU0FBTyxFQUFFO0FBUmdCLENBQXBCO0FBV0EsTUFBTUMsSUFBSSxHQUFHO0FBQ2xCQyxZQUFVLEVBQUUsWUFETTtBQUVsQkMsb0JBQWtCLEVBQUUsb0JBRkY7QUFHbEJDLGlCQUFlLEVBQUU7QUFIQyxDQUFiO0FBTUEsTUFBTUMsUUFBUSxHQUFHO0FBQ3RCQyxnQkFBYyxFQUFFLGdCQURNO0FBRXRCQyx3QkFBc0IsRUFBRSx3QkFGRjtBQUd0QkMscUJBQW1CLEVBQUU7QUFIQyxDQUFqQjtBQU1BLE1BQU1DLE9BQU8sR0FBRztBQUNyQkMsZ0JBQWMsRUFBRSxnQkFESztBQUVyQkMscUJBQW1CLEVBQUU7QUFGQSxDQUFoQjtBQUtBLE1BQU1DLFdBQVcsR0FBRztBQUN6Qm5CLGVBQWEsRUFBRSxlQURVO0FBRXpCSSxjQUFZLEVBQUUsY0FGVztBQUd6QkcsU0FBTyxFQUFFO0FBSGdCLENBQXBCLEM7Ozs7Ozs7Ozs7OztBQ2hFUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBSUE7O0FBQ08sTUFBTWEsU0FBUyxHQUFHLE9BQU87QUFDOUI1UyxNQUFJLEVBQUVnUyxpREFBSSxDQUFDQztBQURtQixDQUFQLENBQWxCO0FBSUEsTUFBTVksZ0JBQWdCLEdBQUkxZ0IsSUFBRCxLQUFXO0FBQ3pDNk4sTUFBSSxFQUFFZ1MsaURBQUksQ0FBQ0Usa0JBRDhCO0FBRXpDWSxTQUFPLEVBQUU7QUFDUDNnQjtBQURPO0FBRmdDLENBQVgsQ0FBekI7QUFPQSxNQUFNNGdCLGFBQWEsR0FBSXByQixHQUFELEtBQVU7QUFDckNxWSxNQUFJLEVBQUVnUyxpREFBSSxDQUFDRyxlQUQwQjtBQUVyQ1csU0FBTyxFQUFFO0FBQ1BuckI7QUFETztBQUY0QixDQUFWLENBQXRCO0FBT0EsTUFBTTJaLGdCQUFnQixHQUFHLE1BQU07QUFDcEMsU0FBUWQsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUNvUyxTQUFTLEVBQVYsQ0FBUjtBQUNBSSw0REFBQSxHQUVHdlgsSUFGSCxDQUVTcE8sR0FBRCxJQUFTO0FBQ2JtVCxjQUFRLENBQUNxUyxnQkFBZ0IsQ0FBQ3hsQixHQUFHLENBQUM4RSxJQUFMLENBQWpCLENBQVI7QUFDRCxLQUpILEVBS0cySixLQUxILENBS1VuVSxHQUFELElBQVM7QUFDZDZZLGNBQVEsQ0FBQ3VTLGFBQWEsQ0FBQ3ByQixHQUFELENBQWQsQ0FBUjtBQUNELEtBUEg7QUFRRCxHQVZEO0FBV0QsQ0FaTSxDOzs7Ozs7Ozs7Ozs7QUN2QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU0rWixZQUFZLEdBQUl2UCxJQUFELEtBQVc7QUFDckM2TixNQUFJLEVBQUV3UyxvREFBTyxDQUFDQyxjQUR1QjtBQUVyQ0ssU0FBTyxFQUFFO0FBQ1AzZ0I7QUFETztBQUY0QixDQUFYLENBQXJCO0FBT0EsTUFBTXNQLGlCQUFpQixHQUFJN0YsU0FBRCxLQUFnQjtBQUMvQ29FLE1BQUksRUFBRXdTLG9EQUFPLENBQUNFLG1CQURpQztBQUUvQ0ksU0FBTyxFQUFFO0FBQ1BsWDtBQURPO0FBRnNDLENBQWhCLENBQTFCLEM7Ozs7Ozs7Ozs7OztBQ1RQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDTyxNQUFNcVgsYUFBYSxHQUFHLE9BQU87QUFDbENqVCxNQUFJLEVBQUVzRyxpREFBSSxDQUFDbUo7QUFEdUIsQ0FBUCxDQUF0QjtBQUlBLE1BQU15RCxvQkFBb0IsR0FBRyxDQUFDL2dCLElBQUQsRUFBT2doQixZQUFQLE1BQXlCO0FBQzNEblQsTUFBSSxFQUFFc0csaURBQUksQ0FBQ29KLHNCQURnRDtBQUUzRG9ELFNBQU8sRUFBRTtBQUNQM2dCLFFBRE87QUFFUGdoQjtBQUZPO0FBRmtELENBQXpCLENBQTdCO0FBUUEsTUFBTUMsaUJBQWlCLEdBQUl6ckIsR0FBRCxLQUFVO0FBQ3pDcVksTUFBSSxFQUFFc0csaURBQUksQ0FBQ3FKLG1CQUQ4QjtBQUV6Q21ELFNBQU8sRUFBRTtBQUNQbnJCO0FBRE87QUFGZ0MsQ0FBVixDQUExQjtBQU9BLE1BQU13bkIsb0JBQW9CLEdBQUl2aEIsS0FBRCxJQUFXO0FBQzdDLFNBQVE0UyxRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQ3lTLGFBQWEsRUFBZCxDQUFSO0FBQ0FJLGdFQUFBLENBQ3FCemxCLEtBRHJCLEVBRUc2TixJQUZILENBRVNwTyxHQUFELElBQVM7QUFDYm1ULGNBQVEsQ0FBQzBTLG9CQUFvQixDQUFDN2xCLEdBQUcsQ0FBQzhFLElBQUwsRUFBVzlFLEdBQUcsQ0FBQ2ltQixPQUFKLENBQVksZUFBWixDQUFYLENBQXJCLENBQVI7QUFDRCxLQUpILEVBS0d4WCxLQUxILENBS1VuVSxHQUFELElBQVM7QUFDZDZZLGNBQVEsQ0FBQzRTLGlCQUFpQixDQUFDenJCLEdBQUQsQ0FBbEIsQ0FBUjtBQUNELEtBUEg7QUFRRCxHQVZEO0FBV0QsQ0FaTSxDLENBY1A7O0FBQ08sTUFBTTRyQixpQkFBaUIsR0FBRyxPQUFPO0FBQ3RDdlQsTUFBSSxFQUFFc0csaURBQUksQ0FBQ3NKO0FBRDJCLENBQVAsQ0FBMUI7QUFJQSxNQUFNNEQsd0JBQXdCLEdBQUlyaEIsSUFBRCxLQUFXO0FBQ2pENk4sTUFBSSxFQUFFc0csaURBQUksQ0FBQ3VKLDJCQURzQztBQUVqRGlELFNBQU8sRUFBRTtBQUNQM2dCO0FBRE87QUFGd0MsQ0FBWCxDQUFqQztBQU9BLE1BQU1zaEIscUJBQXFCLEdBQUk5ckIsR0FBRCxLQUFVO0FBQzdDcVksTUFBSSxFQUFFc0csaURBQUksQ0FBQ3dKLHdCQURrQztBQUU3Q2dELFNBQU8sRUFBRTtBQUNQbnJCO0FBRE87QUFGb0MsQ0FBVixDQUE5QjtBQU9BLE1BQU1xbkIsd0JBQXdCLEdBQUlwaEIsS0FBRCxJQUFXO0FBQ2pELFNBQVE0UyxRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQytTLGlCQUFpQixFQUFsQixDQUFSO0FBQ0FGLG9FQUFBLENBQ3lCemxCLEtBRHpCLEVBRUc2TixJQUZILENBRVNwTyxHQUFELElBQVM7QUFDYm1ULGNBQVEsQ0FBQ2dULHdCQUF3QixDQUFDbm1CLEdBQUcsQ0FBQzhFLElBQUwsQ0FBekIsQ0FBUjtBQUNELEtBSkgsRUFLRzJKLEtBTEgsQ0FLVW5VLEdBQUQsSUFBUztBQUNkNlksY0FBUSxDQUFDaVQscUJBQXFCLENBQUM5ckIsR0FBRCxDQUF0QixDQUFSO0FBQ0QsS0FQSDtBQVFELEdBVkQ7QUFXRCxDQVpNLEMsQ0FjUDs7QUFDTyxNQUFNK3JCLHFCQUFxQixHQUFHLE9BQU87QUFDMUMxVCxNQUFJLEVBQUVzRyxpREFBSSxDQUFDeUo7QUFEK0IsQ0FBUCxDQUE5QjtBQUlBLE1BQU00RCw0QkFBNEIsR0FBSXhoQixJQUFELEtBQVc7QUFDckQ2TixNQUFJLEVBQUVzRyxpREFBSSxDQUFDMEosK0JBRDBDO0FBRXJEOEMsU0FBTyxFQUFFO0FBQ1AzZ0I7QUFETztBQUY0QyxDQUFYLENBQXJDO0FBT0EsTUFBTXloQix5QkFBeUIsR0FBSWpzQixHQUFELEtBQVU7QUFDakRxWSxNQUFJLEVBQUVzRyxpREFBSSxDQUFDMkosNEJBRHNDO0FBRWpENkMsU0FBTyxFQUFFO0FBQ1BuckI7QUFETztBQUZ3QyxDQUFWLENBQWxDO0FBT0EsTUFBTXNuQiw0QkFBNEIsR0FBSXJoQixLQUFELElBQVc7QUFDckQsU0FBUTRTLFFBQUQsSUFBYztBQUNuQkEsWUFBUSxDQUFDa1QscUJBQXFCLEVBQXRCLENBQVI7QUFDQUwsd0VBQUEsQ0FDNkJ6bEIsS0FEN0IsRUFFRzZOLElBRkgsQ0FFU3BPLEdBQUQsSUFBUztBQUNibVQsY0FBUSxDQUFDbVQsNEJBQTRCLENBQUN0bUIsR0FBRyxDQUFDOEUsSUFBTCxDQUE3QixDQUFSO0FBQ0QsS0FKSCxFQUtHMkosS0FMSCxDQUtVblUsR0FBRCxJQUFTO0FBQ2Q2WSxjQUFRLENBQUNvVCx5QkFBeUIsQ0FBQ2pzQixHQUFELENBQTFCLENBQVI7QUFDRCxLQVBIO0FBUUQsR0FWRDtBQVdELENBWk0sQyxDQWNQOztBQUNPLE1BQU1rc0IsdUJBQXVCLEdBQUcsT0FBTztBQUM1QzdULE1BQUksRUFBRXNHLGlEQUFJLENBQUM0SjtBQURpQyxDQUFQLENBQWhDO0FBSUEsTUFBTTRELDhCQUE4QixHQUFJM2hCLElBQUQsS0FBVztBQUN2RDZOLE1BQUksRUFBRXNHLGlEQUFJLENBQUM2SixrQ0FENEM7QUFFdkQyQyxTQUFPLEVBQUU7QUFDUDNnQjtBQURPO0FBRjhDLENBQVgsQ0FBdkM7QUFPQSxNQUFNNGhCLDJCQUEyQixHQUFJcHNCLEdBQUQsS0FBVTtBQUNuRHFZLE1BQUksRUFBRXNHLGlEQUFJLENBQUM4SiwrQkFEd0M7QUFFbkQwQyxTQUFPLEVBQUU7QUFDUG5yQjtBQURPO0FBRjBDLENBQVYsQ0FBcEM7QUFPQSxNQUFNdW5CLDhCQUE4QixHQUFJdGhCLEtBQUQsSUFBVztBQUN2RCxTQUFRNFMsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUNxVCx1QkFBdUIsRUFBeEIsQ0FBUjtBQUNBUiwwRUFBQSxDQUMrQnpsQixLQUQvQixFQUVHNk4sSUFGSCxDQUVTcE8sR0FBRCxJQUFTO0FBQ2JtVCxjQUFRLENBQUNzVCw4QkFBOEIsQ0FBQ3ptQixHQUFHLENBQUM4RSxJQUFMLENBQS9CLENBQVI7QUFDRCxLQUpILEVBS0cySixLQUxILENBS1VuVSxHQUFELElBQVM7QUFDZDZZLGNBQVEsQ0FBQ3VULDJCQUEyQixDQUFDcHNCLEdBQUQsQ0FBNUIsQ0FBUjtBQUNELEtBUEg7QUFRRCxHQVZEO0FBV0QsQ0FaTSxDLENBY1A7O0FBQ08sTUFBTXFzQixpQkFBaUIsR0FBRyxPQUFPO0FBQ3RDaFUsTUFBSSxFQUFFc0csaURBQUksQ0FBQytKO0FBRDJCLENBQVAsQ0FBMUI7QUFJQSxNQUFNNEQsd0JBQXdCLEdBQUk5aEIsSUFBRCxLQUFXO0FBQ2pENk4sTUFBSSxFQUFFc0csaURBQUksQ0FBQ2dLLDJCQURzQztBQUVqRHdDLFNBQU8sRUFBRTtBQUNQM2dCO0FBRE87QUFGd0MsQ0FBWCxDQUFqQztBQU9BLE1BQU0raEIscUJBQXFCLEdBQUl2c0IsR0FBRCxLQUFVO0FBQzdDcVksTUFBSSxFQUFFc0csaURBQUksQ0FBQ2lLLHdCQURrQztBQUU3Q3VDLFNBQU8sRUFBRTtBQUNQbnJCO0FBRE87QUFGb0MsQ0FBVixDQUE5QjtBQU9BLE1BQU13c0Isd0JBQXdCLEdBQUl2bUIsS0FBRCxJQUFXO0FBQ2pELFNBQVE0UyxRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQ3dULGlCQUFpQixFQUFsQixDQUFSO0FBQ0FYLG9FQUFBLENBQ3lCemxCLEtBRHpCLEVBRUc2TixJQUZILENBRVNwTyxHQUFELElBQVM7QUFDYm1ULGNBQVEsQ0FBQ3lULHdCQUF3QixDQUFDNW1CLEdBQUcsQ0FBQzhFLElBQUwsQ0FBekIsQ0FBUjtBQUNELEtBSkgsRUFLRzJKLEtBTEgsQ0FLVW5VLEdBQUQsSUFBUztBQUNkNlksY0FBUSxDQUFDMFQscUJBQXFCLENBQUN2c0IsR0FBRCxDQUF0QixDQUFSO0FBQ0QsS0FQSDtBQVFELEdBVkQ7QUFXRCxDQVpNLEMsQ0FjUDs7QUFDTyxNQUFNeXNCLGtCQUFrQixHQUFHLE9BQU87QUFDdkNwVSxNQUFJLEVBQUVzRyxpREFBSSxDQUFDa0s7QUFENEIsQ0FBUCxDQUEzQjtBQUlBLE1BQU02RCx5QkFBeUIsR0FBSWxpQixJQUFELEtBQVc7QUFDbEQ2TixNQUFJLEVBQUVzRyxpREFBSSxDQUFDbUssNEJBRHVDO0FBRWxEcUMsU0FBTyxFQUFFO0FBQ1AzZ0I7QUFETztBQUZ5QyxDQUFYLENBQWxDO0FBT0EsTUFBTW1pQixzQkFBc0IsR0FBSTNzQixHQUFELEtBQVU7QUFDOUNxWSxNQUFJLEVBQUVzRyxpREFBSSxDQUFDb0sseUJBRG1DO0FBRTlDb0MsU0FBTyxFQUFFO0FBQ1BuckI7QUFETztBQUZxQyxDQUFWLENBQS9CO0FBT0EsTUFBTTRzQix5QkFBeUIsR0FBSXRhLElBQUQsSUFBVTtBQUNqRCxTQUFRdUcsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUM0VCxrQkFBa0IsRUFBbkIsQ0FBUjtBQUNBZixxRUFBQSxDQUMwQnBaLElBRDFCLEVBRUd3QixJQUZILENBRVNwTyxHQUFELElBQVM7QUFDYm1ULGNBQVEsQ0FBQzZULHlCQUF5QixDQUFDaG5CLEdBQUcsQ0FBQzhFLElBQUwsQ0FBMUIsQ0FBUjtBQUNELEtBSkgsRUFLRzJKLEtBTEgsQ0FLVW5VLEdBQUQsSUFBUztBQUNkNlksY0FBUSxDQUFDOFQsc0JBQXNCLENBQUMzc0IsR0FBRCxDQUF2QixDQUFSO0FBQ0QsS0FQSDtBQVFELEdBVkQ7QUFXRCxDQVpNLEMsQ0FjUDs7QUFFTyxNQUFNNnNCLG9CQUFvQixHQUFHLE9BQU87QUFDekN4VSxNQUFJLEVBQUVzRyxpREFBSSxDQUFDcUs7QUFEOEIsQ0FBUCxDQUE3QjtBQUlBLE1BQU04RCwyQkFBMkIsR0FBSXRpQixJQUFELEtBQVc7QUFDcEQ2TixNQUFJLEVBQUVzRyxpREFBSSxDQUFDc0ssK0JBRHlDO0FBRXBEa0MsU0FBTyxFQUFFO0FBQ1AzZ0I7QUFETztBQUYyQyxDQUFYLENBQXBDO0FBT0EsTUFBTXVpQix3QkFBd0IsR0FBSS9zQixHQUFELEtBQVU7QUFDaERxWSxNQUFJLEVBQUVzRyxpREFBSSxDQUFDdUssNEJBRHFDO0FBRWhEaUMsU0FBTyxFQUFFO0FBQ1BuckI7QUFETztBQUZ1QyxDQUFWLENBQWpDO0FBT0EsTUFBTXFnQiwyQkFBMkIsR0FBSXBhLEtBQUQsSUFBVztBQUNwRCxTQUFRNFMsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUNnVSxvQkFBb0IsRUFBckIsQ0FBUjtBQUNBbkIsdUVBQUEsQ0FDNEJ6bEIsS0FENUIsRUFFRzZOLElBRkgsQ0FFU3BPLEdBQUQsSUFBUztBQUNibVQsY0FBUSxDQUFDaVUsMkJBQTJCLENBQUNwbkIsR0FBRyxDQUFDOEUsSUFBTCxDQUE1QixDQUFSO0FBQ0QsS0FKSCxFQUtHMkosS0FMSCxDQUtVblUsR0FBRCxJQUFTO0FBQ2Q2WSxjQUFRLENBQUNrVSx3QkFBd0IsQ0FBQy9zQixHQUFELENBQXpCLENBQVI7QUFDRCxLQVBIO0FBUUQsR0FWRDtBQVdELENBWk0sQzs7Ozs7Ozs7Ozs7O0FDOU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FJQTs7QUFDQSxNQUFNZ3RCLGFBQWEsR0FBRyxPQUFPO0FBQzNCM1UsTUFBSSxFQUFFb1MscURBQVEsQ0FBQ0M7QUFEWSxDQUFQLENBQXRCOztBQUlBLE1BQU11QyxvQkFBb0IsR0FBSXppQixJQUFELEtBQVc7QUFDdEM2TixNQUFJLEVBQUVvUyxxREFBUSxDQUFDRSxzQkFEdUI7QUFFdENRLFNBQU8sRUFBRTtBQUNQM2dCO0FBRE87QUFGNkIsQ0FBWCxDQUE3Qjs7QUFPQSxNQUFNMGlCLGlCQUFpQixHQUFJbHRCLEdBQUQsS0FBVTtBQUNsQ3FZLE1BQUksRUFBRW9TLHFEQUFRLENBQUNHLG1CQURtQjtBQUVsQ08sU0FBTyxFQUFFO0FBQ1BuckI7QUFETztBQUZ5QixDQUFWLENBQTFCOztBQU9PLE1BQU1xa0Isb0JBQW9CLEdBQUcsTUFBTTtBQUN4QyxTQUFReEwsUUFBRCxJQUFjO0FBQ25CQSxZQUFRLENBQUNtVSxhQUFhLEVBQWQsQ0FBUjtBQUNBRyxvRUFBQSxHQUVHclosSUFGSCxDQUVTcE8sR0FBRCxJQUFTO0FBQ2JtVCxjQUFRLENBQUNvVSxvQkFBb0IsQ0FBQ3ZuQixHQUFHLENBQUM4RSxJQUFMLENBQXJCLENBQVI7QUFDRCxLQUpILEVBS0cySixLQUxILENBS1VuVSxHQUFELElBQVM7QUFDZDZZLGNBQVEsQ0FBQ3FVLGlCQUFpQixDQUFDbHRCLEdBQUQsQ0FBbEIsQ0FBUjtBQUNELEtBUEg7QUFRRCxHQVZEO0FBV0QsQ0FaTSxDOzs7Ozs7Ozs7OztBQ3ZCUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9ob21lcGFnZXMvaG9tZXBhZ2UyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaG9tZXBhZ2VzL2hvbWVwYWdlMi5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XG5cbmNvbnN0IHVybCA9IFwiL2NhcnRcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydERhdGEgPSAoY2FydElkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IGNhcnRJZCA/IEFQSV9VUkwgKyB1cmwgKyBgLyR7Y2FydElkfWAgOiBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YSA9IChwaWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJwcm9kdWN0SWRcIiwgcGlkKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZENhcnREYXRhID0gKGRhdGEpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDYXJ0RGF0YSA9IChjYXJ0SWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5kZWxldGUoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhcnREYXRhID0gKGNhcnRJZCwgZGF0YSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke2NhcnRJZH1gO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBhdGNoKGVuZHBvaW50LCBkYXRhKTtcbn07XG4iLCJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcblxuY29uc3QgdXJsID0gXCIvcHJvZHVjdFwiO1xuXG5jb25zdCByZW5kZXJVcmwgPSAodXJsLCBsaW1pdCwgY2F0ZWdvcnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwiX2xpbWl0XCIsIGxpbWl0KSArIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgY2F0ZWdvcnkpXG4gICk7XG59O1xuXG4vL0ZldGNoIGxpc3Qgb2YgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPVxuICAgIHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpICtcbiAgICByZW5kZXJQYXJhbShcIl9wYWdlXCIsIHF1ZXJ5LnBhZ2UpICtcbiAgICByZW5kZXJQYXJhbShcIl9zb3J0XCIsIHF1ZXJ5LnNvcnQuc29ydCkgK1xuICAgIHJlbmRlclBhcmFtKFwiX29yZGVyXCIsIHF1ZXJ5LnNvcnQub3JkZXIpICtcbiAgICByZW5kZXJQYXJhbShcInFcIiwgcXVlcnkucSkgK1xuICAgIHJlbmRlclBhcmFtKFwic3BlY2lmaWNhdGlvbnMuY29sb3JcIiwgcXVlcnkuY29sb3IpICtcbiAgICByZW5kZXJQYXJhbShcInNwZWNpZmljYXRpb25zLnNpemVcIiwgcXVlcnkuc2l6ZSkgK1xuICAgIHJlbmRlclBhcmFtKFwidGFnX2xpa2VcIiwgcXVlcnkudGFnKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbi8vRmV0Y2ggcHJvZHVjdCBkZXRhaWxcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxEYXRhID0gKHNsdWcpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJzbHVnXCIsIHNsdWcpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG4vL0ZldGNoIHNlcmNoZWQgcHJvZHVjdCBieSBxdWVyeVxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPVxuICAgIEFQSV9VUkwgK1xuICAgIHVybCArXG4gICAgXCI/XCIgK1xuICAgIHJlbmRlclBhcmFtKFwicVwiLCBxdWVyeS5pbnB1dCkgK1xuICAgIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgcXVlcnkuY2F0ZWdvcnkpICtcbiAgICByZW5kZXJQYXJhbShcIl9saW1pdFwiLCBxdWVyeS5saW1pdCk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG4iLCJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcblxuY29uc3QgdXJsID0gXCIvd2lzaGxpc3RcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoV2lzaGxpc3REYXRhID0gKCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEgPSAocGlkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwiaWRcIiwgcGlkKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFdpc2hsaXN0RGF0YSA9IChkYXRhKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlV2lzaGxpc3REYXRhID0gKHBpZCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke3BpZH1gO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmRlbGV0ZShlbmRwb2ludCk7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jbGFzcyBBeGlvc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSgpO1xuICAgIGluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVTdWNjZXNzLCB0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIH1cblxuICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG5cbiAgZ2V0KHVybCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldCh1cmwpO1xuICB9XG5cbiAgcG9zdCh1cmwsIGJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wb3N0KHVybCwgYm9keSk7XG4gIH1cblxuICBwYXRjaCh1cmwsIGJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wYXRjaCh1cmwsIGJvZHkpO1xuICB9XG5cbiAgZGVsZXRlKHVybCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmRlbGV0ZSh1cmwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBeGlvc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQge1xuICBmZXRjaFByb2R1Y3RJZENhcnREYXRhLFxuICBhZGRDYXJ0RGF0YSxcbiAgdXBkYXRlQ2FydERhdGEsXG4gIHJlbW92ZUNhcnREYXRhLFxufSBmcm9tIFwiLi4vYXBpcy9jYXJ0XCI7XG5cbmV4cG9ydCBjb25zdCBvbkFkZFByb2R1Y3RUb0NhcnQgPSAoe1xuICBwcm9kdWN0LFxuICBxdWFudGl0eSA9IDEsXG4gIG9uU3VjY2VzcyxcbiAgb25FcnJvcixcbiAgZ2V0UXVhbnRpdHlBdmFpbGFibGUgPSAoKSA9PiB0cnVlLFxufSkgPT4ge1xuICBmZXRjaFByb2R1Y3RJZENhcnREYXRhKHByb2R1Y3QuaWQpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAocHJvZHVjdC5xdWFudGl0eSA9PT0gMCkge1xuICAgICAgICAgIG9uRXJyb3IgJiYgb25FcnJvcihcIlJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgcHJvZHVjdHNcIik7XG4gICAgICAgICAgZ2V0UXVhbnRpdHlBdmFpbGFibGUgJiYgZ2V0UXVhbnRpdHlBdmFpbGFibGUoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENhcnREYXRhKHtcbiAgICAgICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IHF1YW50aXR5LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgICAgIChlcnIpID0+XG4gICAgICAgICAgICAgICAgb25FcnJvciAmJlxuICAgICAgICAgICAgICAgIG9uRXJyb3IoXCJBZGQgcHJvZHVjdCB0byBjYXJ0IGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpblwiLCBlcnIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcERhdGEgPSByZXMuZGF0YVswXTtcbiAgICAgICAgaWYgKHBEYXRhLmNhcnRRdWFudGl0eSArIHF1YW50aXR5ID4gcERhdGEucXVhbnRpdHkpIHtcbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZWFjaGVkIG1heGltdW0gbnVtYmVyIG9mIHByb2R1Y3RzXCIpO1xuICAgICAgICAgIGdldFF1YW50aXR5QXZhaWxhYmxlKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVDYXJ0RGF0YShwRGF0YS5pZCwge1xuICAgICAgICAgICAgY2FydFF1YW50aXR5OiBwRGF0YS5jYXJ0UXVhbnRpdHkgKyBxdWFudGl0eSxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgICAoZXJyKSA9PlxuICAgICAgICAgICAgICAgIG9uRXJyb3IgJiZcbiAgICAgICAgICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gY2FydCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKFxuICAgICAgKGVycikgPT5cbiAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gY2FydCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25SZW1vdmVQcm9kdWN0RnJvbUNhcnQgPSAoeyBjYXJ0SWQsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XG4gIGlmIChjYXJ0SWQgJiYgY2FydElkICE9PSBcIlwiICYmIGNhcnRJZCAhPT0gbnVsbCkge1xuICAgIHJlbW92ZUNhcnREYXRhKGNhcnRJZClcbiAgICAgIC50aGVuKChyZXMpID0+IG9uU3VjY2VzcyAmJiBvblN1Y2Nlc3MocmVzKSlcbiAgICAgIC5jYXRjaChcbiAgICAgICAgKGVycikgPT5cbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZW1vdmUgcHJvZHVjdCBmYWlsbSwgcGxlYXNlciB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG9uQ2hhbmdlUHJvZHVjdENhcnRRdWFudGl0eSA9ICh7XG4gIHByb2R1Y3QsXG4gIHF1YW50aXR5LFxuICBvblN1Y2Nlc3MsXG59KSA9PiB7XG4gIGlmIChxdWFudGl0eSA+IHByb2R1Y3QucXVhbnRpdHkgfHwgcXVhbnRpdHkgPCAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHVwZGF0ZUNhcnREYXRhKHByb2R1Y3QuaWQsIHsgY2FydFF1YW50aXR5OiBxdWFudGl0eSB9KVxuICAgIC50aGVuKChyZXMpID0+IG9uU3VjY2VzcyAmJiBvblN1Y2Nlc3MocmVzKSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vb2dhbWktYXBpLmhlcm9rdWFwcC5jb21cIjtcbiIsImV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5U2x1ZyA9IChhcnIsIHNsdWcpID0+IHtcbiAgcmV0dXJuIHNsdWcgJiYgdHlwZW9mIHNsdWcgPT09IFwic3RyaW5nXCJcbiAgICA/IGFyci5maW5kKChwKSA9PiBwLnNsdWcudG9Mb3dlckNhc2UoKSA9PT0gc2x1Zy50b0xvd2VyQ2FzZSgpKVxuICAgIDogYXJyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoYXJyKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uZGlzY291bnQpIHtcbiAgICAgIHRvdGFsICs9IGl0ZW0uY2FydFF1YW50aXR5XG4gICAgICAgID8gKGl0ZW0ucHJpY2UgLSBpdGVtLmRpc2NvdW50KSAqIGl0ZW0uY2FydFF1YW50aXR5XG4gICAgICAgIDogaXRlbS5wcmljZSAtIGl0ZW0uZGlzY291bnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdGFsICs9IGl0ZW0uY2FydFF1YW50aXR5ID8gaXRlbS5wcmljZSAqIGl0ZW0uY2FydFF1YW50aXR5IDogaXRlbS5wcmljZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdG90YWw7XG59O1xuXG4vL0NhcnRcbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSAoY2FydEFyciwgcGlkKSA9PiB7XG4gIHJldHVybiBwaWQgPyBjYXJ0QXJyLmZpbmQoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdElkID09PSBwaWQpIDogdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrUHJvZHVjdENhcnRRdWFudGl0eSA9IChjYXJ0QXJyLCBwaWQpID0+IHtcbiAgY29uc3QgcHJvZHVjdHNJbkNhcnQgPSBjYXJ0QXJyLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wcm9kdWN0SWQgPT09IHBpZCk7XG4gIGlmIChwcm9kdWN0c0luQ2FydCAmJiBwcm9kdWN0c0luQ2FydC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgdG90YWxQcm9kdWN0UXVhbnRpdHlJbkNhcnQgPSBwcm9kdWN0c0luQ2FydC5yZWR1Y2UoXG4gICAgICAodG90YWwsIGl0ZW0pID0+IHRvdGFsICsgaXRlbS5jYXJ0UXVhbnRpdHksXG4gICAgICAwXG4gICAgKTtcbiAgICByZXR1cm4gdG90YWxQcm9kdWN0UXVhbnRpdHlJbkNhcnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbi8vV2lzaGxpc3RcbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RJbldpc2hsaXN0ID0gKHdpc2hsaXN0QXJyLCBwaWQpID0+IHtcbiAgcmV0dXJuIHBpZCA/IHdpc2hsaXN0QXJyLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBpZCkgOiB1bmRlZmluZWQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVib3VuY2UodmFsdWUsIGRlbGF5KSB7XG4gIGNvbnN0IFtkZWJvdW5jZWRWYWx1ZSwgc2V0RGVib3VuY2VkVmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldERlYm91bmNlZFZhbHVlKHZhbHVlKTtcbiAgICB9LCBkZWxheSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChoYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIGRlYm91bmNlZFZhbHVlO1xufVxuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChwcmljZSwgbG9jYWxlcyA9IFwidXMtVVNcIiwgY3VycmVuY3kgPSBcIlVTRFwiKSA9PiB7XG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlcywge1xuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgY3VycmVuY3k6IGN1cnJlbmN5LFxuICB9KS5mb3JtYXQocHJpY2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclBhcmFtID0gKHBhcmFtTmFtZSwgcGFyYW1WYWx1ZSkgPT4ge1xuICBpZiAocGFyYW1WYWx1ZSAmJiBwYXJhbVZhbHVlICE9PSBcIlwiICYmIHBhcmFtVmFsdWUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gYCYke3BhcmFtTmFtZX09JHtwYXJhbVZhbHVlfWA7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChcbiAgZGF0ZSxcbiAgaW5wdXRGb3JtYXQgPSBcIllZWVktTU0tRERcIixcbiAgb3V0cHV0Rm9ybWF0ID0gXCJNTU0gREQsIFlZWVlcIlxuKSA9PiB7XG4gIHJldHVybiBtb21lbnQoZGF0ZSwgaW5wdXRGb3JtYXQpLmZvcm1hdChvdXRwdXRGb3JtYXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZURhc2ggPSAoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvLS9nLCBcIiBcIik7XG59O1xuIiwiaW1wb3J0IHtcbiAgZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEsXG4gIGFkZFdpc2hsaXN0RGF0YSxcbiAgcmVtb3ZlV2lzaGxpc3REYXRhLFxufSBmcm9tIFwiLi4vYXBpcy93aXNobGlzdFwiO1xuXG5leHBvcnQgY29uc3Qgb25BZGRQcm9kdWN0VG9XaXNobGlzdCA9ICh7IHByb2R1Y3QsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XG4gIGZldGNoUHJvZHVjdElkV2lzaGxpc3REYXRhKHByb2R1Y3QuaWQpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhZGRXaXNobGlzdERhdGEocHJvZHVjdClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgKGVycikgPT5cbiAgICAgICAgICAgICAgb25FcnJvciAmJlxuICAgICAgICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gd2lzbGlzdCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJQcm9kdWN0IGFscmVhZHkgaW4gd2lzaGxpc3RcIik7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goXG4gICAgICAoZXJyKSA9PlxuICAgICAgICBvbkVycm9yICYmXG4gICAgICAgIG9uRXJyb3IoXCJBZGQgcHJvZHVjdCB0byB3aXNsaXN0IGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpblwiLCBlcnIpXG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3QgPSAoe1xuICBwcm9kdWN0SWQsXG4gIG9uU3VjY2VzcyxcbiAgb25FcnJvcixcbn0pID0+IHtcbiAgaWYgKHByb2R1Y3RJZCAmJiBwcm9kdWN0SWQgIT09IFwiXCIgJiYgcHJvZHVjdElkICE9PSBudWxsKSB7XG4gICAgcmVtb3ZlV2lzaGxpc3REYXRhKHByb2R1Y3RJZClcbiAgICAgIC50aGVuKChyZXMpID0+IG9uU3VjY2VzcyAmJiBvblN1Y2Nlc3MocmVzKSlcbiAgICAgIC5jYXRjaChcbiAgICAgICAgKGVycikgPT5cbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZW1vdmUgcHJvZHVjdCBmYWlsLCBwbGVhc2VyIHRyeSBhZ2FpblwiLCBlcnIpXG4gICAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhlYWRlclNjcm9sbChXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBjb25zdCBoZWFkZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc0hlYWRlckZpeGVkLCBzZXRJc0hlYWRlckZpeGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChzY3JvbGwgPj0gaGVhZGVyUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgIHNldElzSGVhZGVyRml4ZWQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc0hlYWRlckZpeGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LCBbc2Nyb2xsXSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XG4gICAgICBzZXRTY3JvbGwod2luZG93LnNjcm9sbFkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17aGVhZGVyUmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXIgJHtjbGFzc05hbWVzKFxuICAgICAgICAgIHsgZml4ZWQ6IGlzSGVhZGVyRml4ZWQgfSxcbiAgICAgICAgICBwcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1gfVxuICAgICAgPlxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBQcm9kdWN0RGV0YWlsSW1hZ2VzIGZyb20gXCIuL2VsZW1lbnRzL1Byb2R1Y3REZXRhaWxJbWFnZXNcIjtcbmltcG9ydCBQcm9kdWN0RGV0YWlsQ29udGVudCBmcm9tIFwiLi9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsQ29udGVudFwiO1xuaW1wb3J0IEZldGNoRGF0YUhhbmRsZSBmcm9tIFwiLi4vLi4vb3RoZXIvRmV0Y2hEYXRhSGFuZGxlXCI7XG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUHJvZHVjdERldGFpbFRhYiBmcm9tIFwiLi9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsVGFiXCI7XG5cbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxMYXlvdXQoeyBkYXRhLCB0eXBlLCBoaWRlVGFiLCBzdHlsZSB9KSB7XG4gIGlmICh0eXBlID09PSBcImZsdWlkXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbFwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxSb3cgZ3V0dGVyPXszMH0+XG4gICAgICAgICAgPENvbCBtZD17MTB9PlxuICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxJbWFnZXMgdHlwZT1cImNvbHVtblwiIGltYWdlcz17ZGF0YS5pbWFnZXN9IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBtZD17MTR9PlxuICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxDb250ZW50IHR5cGU9XCJmbHVpZFwiIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBtZD17MjR9PlxuICAgICAgICAgICAgeyFoaWRlVGFiICYmIChcbiAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxUYWJcbiAgICAgICAgICAgICAgICBmdWxsRGVzY3JpcHRpb249e2RhdGEuZnVsbERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIHNwZWNpZmljYXRpb25zPXtkYXRhLnNwZWNpZmljYXRpb25zfVxuICAgICAgICAgICAgICAgIHJldmlld3M9e2RhdGEucmV2aWV3c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgPFJvdyBndXR0ZXI9ezMwfT5cbiAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgIDxQcm9kdWN0RGV0YWlsSW1hZ2VzIGltYWdlcz17ZGF0YS5pbWFnZXN9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXsxMn0+XG4gICAgICAgICAgPFByb2R1Y3REZXRhaWxDb250ZW50IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezI0fT5cbiAgICAgICAgICB7IWhpZGVUYWIgJiYgKFxuICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxUYWJcbiAgICAgICAgICAgICAgZnVsbERlc2NyaXB0aW9uPXtkYXRhLmZ1bGxEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgc3BlY2lmaWNhdGlvbnM9e2RhdGEuc3BlY2lmaWNhdGlvbnN9XG4gICAgICAgICAgICAgIHJldmlld3M9e2RhdGEucmV2aWV3c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0RGV0YWlsTGF5b3V0KTtcbiIsImltcG9ydCB7IEJ1dHRvbiwgQ29sLCBSYXRlLCBSb3csIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtcbiAgY2hlY2tQcm9kdWN0Q2FydFF1YW50aXR5LFxuICBjaGVja1Byb2R1Y3RJbldpc2hsaXN0LFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xuaW1wb3J0IFF1YW50aXR5U2VsZWN0b3IgZnJvbSBcIi4uLy4uLy4uL290aGVyL1F1YW50aXR5U2VsZWN0b3JcIjtcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi4vLi4vLi4vb3RoZXIvU29jaWFsSWNvbnNcIjtcbmltcG9ydCB7IG9uQWRkUHJvZHVjdFRvQ2FydCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vY2FydFNlcnZpY2VzXCI7XG5pbXBvcnQgeyBmZXRjaENhcnRSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcbmltcG9ydCB7XG4gIGFkZFRvQ29tcGFyZSxcbiAgcmVtb3ZlRnJvbUNvbXBhcmUsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NvbXBhcmVBY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWxDb250ZW50KHsgZGF0YSwgdHlwZSB9KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2N1cnJlbnRRdWFudGl0eSwgc2V0Q3VycmVudFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbYWRkVG9DYXJ0TG9hZGluZywgc2V0QWRkVG9DYXJ0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xuICBjb25zdCBjb21wYXJlU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbXBhcmVSZWR1Y2VyKTtcbiAgY29uc3QgcHJvZHVjdEluQ29tcGFyZSA9IGNoZWNrUHJvZHVjdEluV2lzaGxpc3QoY29tcGFyZVN0YXRlLCBkYXRhLmlkKTtcbiAgY29uc3QgYXZhaWFibGVRdWFudGl0eSA9XG4gICAgZGF0YS5xdWFudGl0eSAtIGNoZWNrUHJvZHVjdENhcnRRdWFudGl0eShjYXJ0U3RhdGUuZGF0YSwgZGF0YS5pZCk7XG4gIGNvbnNvbGUubG9nKGF2YWlhYmxlUXVhbnRpdHkpO1xuICBjb25zdCBvbkFkZFRvQ2FydCA9IChwcm9kdWN0LCBxdWFudGl0eSkgPT4ge1xuICAgIGlmIChhZGRUb0NhcnRMb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEFkZFRvQ2FydExvYWRpbmcodHJ1ZSk7XG4gICAgb25BZGRQcm9kdWN0VG9DYXJ0KHtcbiAgICAgIHByb2R1Y3QsXG4gICAgICBxdWFudGl0eSxcbiAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gY2FydFwiKTtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0UmVxdWVzdCgpKTtcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiAobWVzLCBlcnIpID0+IHtcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG9uQWRkVG9Db21wYXJlID0gKHByb2R1Y3QpID0+IHtcbiAgICBpZiAocHJvZHVjdEluQ29tcGFyZSkge1xuICAgICAgZGlzcGF0Y2gocmVtb3ZlRnJvbUNvbXBhcmUocHJvZHVjdC5pZCkpO1xuICAgICAgbWVzc2FnZS5lcnJvcihcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIGNvbXBhcmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKGFkZFRvQ29tcGFyZShwcm9kdWN0KSk7XG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIGNvbXBhcmVcIik7XG4gICAgfVxuICB9O1xuICBpZiAodHlwZSA9PT0gXCJmbHVpZFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudCAtd2lkZVwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IHhsPXsxNn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2xlZnRcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtdHlwZVwiPntkYXRhLmNhdGVnb3J5fTwvaDU+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19uYW1lXCI+e2RhdGEubmFtZX08L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkXG4gICAgICAgICAgICAgICAgICBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY29cbiAgICAgICAgICAgICAgICAgIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWRcbiAgICAgICAgICAgICAgICAgIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYVxuICAgICAgICAgICAgICAgICAgcXVpIG9mZmljaWEgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW1cbiAgICAgICAgICAgICAgICAgIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSwgdG90YW0gcmVtIGFwZXJpYW0sIGVhcXVlXG4gICAgICAgICAgICAgICAgICBpcHNhIHF1YWUgYWIgaWxsbyBpbnZlbnRvci5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBOZW1vIGVuaW0gaXBzYW0gdm9sdXB0YXRlbSBxdWlhIHZvbHVwdGFzIHNpdCBhc3Blcm5hdHVyIGF1dFxuICAgICAgICAgICAgICAgICAgb2RpdCBhdXQgZnVnaXQsIHNlZCBxdWlhIGNvbnNlcXV1bnR1ciBtYWduaSBkb2xvcmVzIGVvcyBxdWlcbiAgICAgICAgICAgICAgICAgIHJhdGlvbmUgdm9sdXB0YXRlbVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19tZXRhXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U0tVOjwvc3Bhbj4gQTEzNTlcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNhdGVnb3JpZXM6PC9zcGFuPiBGYXN0Zm9vZFxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+VGFnOjwvc3Bhbj4gRm9vZCwgT3JnYW5pY1xuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fc2hhcmVcIj5cbiAgICAgICAgICAgICAgICA8aDU+U2hhcmUgbGluazo8L2g1PlxuICAgICAgICAgICAgICAgIDxTb2NpYWxJY29ucyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IHhsPXs4fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZWxpdmVyeVwiPlxuICAgICAgICAgICAgICAgIEZyZWUgZGVsaXZlcnlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19wcmljZVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlLWRpc2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8UmF0ZSBkZWZhdWx0VmFsdWU9e2RhdGEucmF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPFF1YW50aXR5U2VsZWN0b3JcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudFF1YW50aXR5KHZhbCl9XG4gICAgICAgICAgICAgICAgbWF4PXthdmFpYWJsZVF1YW50aXR5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPXthZGRUb0NhcnRMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSwgY3VycmVudFF1YW50aXR5KX1cbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbkNvbXBhcmUsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byBjb21wYXJlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fYmVuZWZpdHNcIj5cbiAgICAgICAgICAgICAgICA8bGk+U2F0aXNmYWN0aW9uIDEwMCUgR3VhcmFudGVlZDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkZyZWUgc2hpcHBpbmcgb24gb3JkZXJzIG92ZXIgJDk5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MTQgZGF5IGVhc3kgUmV0dXJuPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRcIj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX25hbWVcIj57ZGF0YS5uYW1lfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZXNjcmlwdGlvblwiPlxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICAgICAgdGVtcG9yXG4gICAgICAgIHsvKiBDaGFuZ2UgdG8ge2RhdGEuZGVzY3JpcHRpb259ICovfVxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZWxpdmVyeVwiPkZyZWUgZGVsaXZlcnk8L2Rpdj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19wcmljZVwiPlxuICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2UtZGlzY291bnRcIj5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxuICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KVxuICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8UmF0ZSBkZWZhdWx0VmFsdWU9e2RhdGEucmF0ZX0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oMz5cbiAgICAgIDxRdWFudGl0eVNlbGVjdG9yXG4gICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRDdXJyZW50UXVhbnRpdHkodmFsKX1cbiAgICAgICAgbWF4PXthdmFpYWJsZVF1YW50aXR5fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fYWN0aW9uc1wiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgbG9hZGluZz17YWRkVG9DYXJ0TG9hZGluZ31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydChkYXRhLCBjdXJyZW50UXVhbnRpdHkpfVxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ29tcGFyZShkYXRhKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvIGNvbXBhcmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fc2hhcmVcIj5cbiAgICAgICAgPGg1PlNoYXJlIGxpbms6PC9oNT5cbiAgICAgICAgPFNvY2lhbEljb25zIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUmVhY3QubWVtbyhQcm9kdWN0RGV0YWlsQ29udGVudCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsSW1hZ2VzKHsgdHlwZSwgaW1hZ2VzIH0pIHtcbiAgY29uc3Qgc2xpZGVyMVNldHRpbmdzID0ge1xuICAgIGFycm93czogZmFsc2UsXG4gIH07XG4gIGNvbnN0IHNsaWRlcjJTZXR0aW5ncyA9IHtcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgIHZlcnRpY2FsOiB0eXBlID09PSBcImNvbHVtblwiID8gdHJ1ZSA6IGZhbHNlLFxuICAgIC8vIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPixcbiAgICAvLyBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgdmVydGljYWw6IHR5cGUgPT09IFwiY29sdW1uXCIgJiYgZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGNvbnN0IFtuYXYxLCBzZXROYXYxXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtuYXYyLCBzZXROYXYyXSA9IHVzZVN0YXRlKCk7XG4gIC8vIGlmICh0eXBlID09PSBcImNvbHVtblwiKSB7XG4gIC8vICAgcmV0dXJuIDxoMT5Db2x1bW48L2gxPjtcbiAgLy8gfVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtZGV0YWlsLWltYWdlcyAke2NsYXNzTmFtZXMoe1xuICAgICAgICBcIi1jb2x1bW5cIjogdHlwZSA9PT0gXCJjb2x1bW5cIixcbiAgICAgIH0pfWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1pbWFnZXMtYmlnXCI+XG4gICAgICAgIDxTbGlkZXIgYXNOYXZGb3I9e25hdjJ9IHJlZj17KGMpID0+IHNldE5hdjEoYyl9IHsuLi5zbGlkZXIxU2V0dGluZ3N9PlxuICAgICAgICAgIHtpbWFnZXMgJiZcbiAgICAgICAgICAgIGltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzbGlkZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpbWd9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1pbWFnZXMtc21hbGxcIj5cbiAgICAgICAgPFNsaWRlciBhc05hdkZvcj17bmF2MX0gcmVmPXsoYykgPT4gc2V0TmF2MihjKX0gey4uLnNsaWRlcjJTZXR0aW5nc30+XG4gICAgICAgICAge2ltYWdlcyAmJlxuICAgICAgICAgICAgaW1hZ2VzLm1hcCgoaW1nLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNsaWRlLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGltZ30gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdERldGFpbEltYWdlcyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSYXRlLCBUYWJzLCBGb3JtLCBJbnB1dCwgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcblxuY29uc3QgUmV2aWV3SXRlbSA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3cy1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3cy1pdGVtX19hdmF0YXJcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGRhdGEudXNlci5hdmF0YXJ9XG4gICAgICAgICAgYWx0PVwiQ3VzdG9tZXIgYXZhdGFyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFJhdGUgZGVmYXVsdFZhbHVlPXs1fSBkaXNhYmxlZCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3cy1pdGVtX19jb250ZW50XCI+XG4gICAgICAgIDxoNT57ZGF0YS5jb21tZW50RGF0ZX08L2g1PlxuICAgICAgICA8aDM+e2RhdGEudXNlci5uYW1lfTwvaDM+XG4gICAgICAgIDxwPntkYXRhLnJldmlld308L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxUYWIoeyBmdWxsRGVzY3JpcHRpb24sIHNwZWNpZmljYXRpb25zLCByZXZpZXdzIH0pIHtcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzOlwiLCB2YWx1ZXMpO1xuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkOlwiLCBlcnJvckluZm8pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtdGFiXCI+XG4gICAgICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiIHR5cGU9XCJjYXJkXCI+XG4gICAgICAgIDxUYWJQYW5lIHRhYj1cIkRlc2NyaXB0aW9uXCIga2V5PVwiMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtdGFiX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAge2Z1bGxEZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICA8VGFiUGFuZSB0YWI9XCJTcGVjaWZpY2F0aW9uc1wiIGtleT1cIjJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fc3BlY2lmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5XZWlnaHQ8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntzcGVjaWZpY2F0aW9ucy53ZWlnaHR9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5EaW1lbnNpb25zPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAge3NwZWNpZmljYXRpb25zLmRpbWVuc2lvbnMubG9uZ30geHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3NwZWNpZmljYXRpb25zLmRpbWVuc2lvbnMud2lkdGh9IHh7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtzcGVjaWZpY2F0aW9ucy5kaW1lbnNpb25zLmhlaWdodH1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+Q29sb3I8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntzcGVjaWZpY2F0aW9ucy5jb2xvcn08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlNpemU8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntzcGVjaWZpY2F0aW9ucy5zaXplfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgPFRhYlBhbmUgdGFiPVwiUmV2aWV3c1wiIGtleT1cIjNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3c1wiPlxuICAgICAgICAgICAge3Jldmlld3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8UmV2aWV3SXRlbSBrZXk9e2luZGV4fSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3cy1mb3JtXCI+XG4gICAgICAgICAgICAgIDxoNT5BZGQgUmV2aWV3PC9oNT5cbiAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICBuYW1lPVwicmV2aWV3XCJcbiAgICAgICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICAgICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezE1fT5cbiAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIG5hbWUhXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiUGxlYXNlIGlucHV0IHlvdXIgZW1haWwhXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInJhdGVcIiBsYWJlbD1cIllvdXIgcmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFJhdGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIHNoYXBlPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdCBSZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGFiUGFuZT5cbiAgICAgIDwvVGFicz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0RGV0YWlsVGFiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5cbmltcG9ydCBmb290ZXJMaW5rcyBmcm9tIFwiLi4vLi4vZGF0YS9mb290ZXItbGlua3MuanNvblwiO1xuaW1wb3J0IEZvb3RlclF1aWNrTGlua3MgZnJvbSBcIi4vZWxlbWVudHMvRm9vdGVyUXVpY2tMaW5rc1wiO1xuaW1wb3J0IEZvb3RlckluZm9tYXRpb24gZnJvbSBcIi4vZWxlbWVudHMvRm9vdGVySW5mb21hdGlvblwiO1xuaW1wb3J0IEZvb3RlclN1YmNyaWJlSW5wdXQgZnJvbSBcIi4vZWxlbWVudHMvRm9vdGVyU3ViY3JpYmVJbnB1dFwiO1xuXG5mdW5jdGlvbiBGb290ZXJGbHVpZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlciAtZmx1aWQgLXN0eWxlLW9uZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdG9wXCI+XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgPFJvdyBndXR0ZXI9ezE1fT5cbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17OX0gbGc9ezZ9PlxuICAgICAgICAgICAgICA8Rm9vdGVySW5mb21hdGlvbiAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezE1fSBsZz17MTN9PlxuICAgICAgICAgICAgICA8Rm9vdGVyUXVpY2tMaW5rcyBjb2xTaXplPXt7IHNwYW46IDggfX0gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBsZz17NX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc3ViY3JpYmVfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNT5Kb2luIE91ciBOZXdzbGV0dGVyIE5vdzwvaDU+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgR2V0IEUtbWFpbCB1cGRhdGVzIGFib3V0IG91ciBsYXRlc3Qgc2hvcCBhbmQgc3BlY2lhbCBvZmZlcnMuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEZvb3RlclN1YmNyaWJlSW5wdXQgdXJsPVwiaHR0cHM6Ly9qc3Rlci51czcubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9ZWQ0MGMwMDg0YTBjNWJhMzFiMzM2NWQ2NSZpZD1lYzZmMzJiZjVlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJvdHRvbVwiPlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJvdHRvbV9fd3JhcHBlclwiPlxuICAgICAgICAgICAgPHA+Q29weXJpZ2h0IMKpIDIwMTkgT2dhbWkgLSBBbGwgUmlnaHRzIFJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9mb290ZXIvcGF5bWVudC5wbmdcIn1cbiAgICAgICAgICAgICAgYWx0PVwiUGF5bWVudCBtZXRob2RzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZvb3RlckZsdWlkKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gXCIuLi8uLi9vdGhlci9Tb2NpYWxJY29uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJJbmZvbWF0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWluZm9cIj5cbiAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImZvb3Rlci1pbmZvX19sb2dvXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wifVxuICAgICAgICAgICAgYWx0PVwiT2dhbWkgTG9nb1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+QWRkcmVzczogNjAtNDkgUm9hZCAxMTM3OCBOZXcgWW9yazwvbGk+XG4gICAgICAgIDxsaT5QaG9uZTogKzY1IDExLjE4OC44ODg8L2xpPlxuICAgICAgICA8bGk+RW1haWw6IGluZm8uZGVlcmNyZWF0aXZlQGdtYWlsLmNvbTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPFNvY2lhbEljb25zIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJjaXJjbGVcIiBjbGFzc05hbWU9XCItYnRuLWxpZ2h0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IGZvb3RlckxpbmtzIGZyb20gXCIuLi8uLi8uLi9kYXRhL2Zvb3Rlci1saW5rcy5qc29uXCI7XG5cbmZ1bmN0aW9uIEZvb3RlclF1aWNrTGlua3MoeyBjb2xTaXplIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rc1wiPlxuICAgICAgPFJvdyBndXR0ZXI9ezEwfSBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICB7Zm9vdGVyTGlua3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDb2wga2V5PXtpbmRleH0gey4uLmNvbFNpemV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3NfX2dyb3VwXCI+XG4gICAgICAgICAgICAgIDxoNT57aXRlbS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2l0ZW0uaXRlbXMubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbGluay5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YT4ge2xpbmsudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICApKX1cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZvb3RlclF1aWNrTGlua3MpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1haWxjaGltcFN1YnNjcmliZSBmcm9tIFwicmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZVwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCBDdXN0b21Gb3JtID0gUmVhY3QubWVtbygoeyBzdGF0dXMsIG1lc3NhZ2UsIG9uVmFsaWRhdGVkIH0pID0+IHtcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3M6XCIsIHZhbHVlKTtcbiAgICB2YWx1ZSAmJlxuICAgICAgb25WYWxpZGF0ZWQoe1xuICAgICAgICBFTUFJTDogdmFsdWUuZW1haWwsXG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybVxuICAgICAgICBuYW1lPVwiYmFzaWNcIlxuICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlX19mb3JtXCJcbiAgICAgID5cbiAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgIG5vU3R5bGU9e3RydWV9XG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIGlucHV0IGlzIG5vdCB2YWxpZCBFLW1haWwhXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBFLW1haWwhXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCIgLz5cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDxGb3JtLkl0ZW0gbm9TdHlsZT17dHJ1ZX0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTVUJTQ1JJQkVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8L0Zvcm0+XG4gICAgICB7c3RhdHVzID09PSBcInNlbmRpbmdcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fT5zZW5kaW5nLi4uPC9kaXY+fVxuICAgICAge3N0YXR1cyA9PT0gXCJlcnJvclwiICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtZXNzYWdlIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3N0YXR1cyA9PT0gXCJzdWNjZXNzXCIgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJTdWJjcmliZUlucHV0KHsgdXJsIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWFpbGNoaW1wU3Vic2NyaWJlXG4gICAgICB1cmw9e3VybH1cbiAgICAgIHJlbmRlcj17KHsgc3Vic2NyaWJlLCBzdGF0dXMsIG1lc3NhZ2UgfSkgPT4gKFxuICAgICAgICA8Q3VzdG9tRm9ybVxuICAgICAgICAgIHN0YXR1cz17c3RhdHVzfVxuICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAgICAgb25WYWxpZGF0ZWQ9eyhmb3JtRGF0YSkgPT4gc3Vic2NyaWJlKGZvcm1EYXRhKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZW51VHdvIGZyb20gXCIuL21lbnUvTWVudVR3b1wiO1xuXG5pbXBvcnQgVG9wTmF2T25lIGZyb20gXCIuL3RvcC1uYXYvVG9wTmF2T25lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlclR3bygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRvcE5hdk9uZSBjb250YWluZXJGbHVpZCAvPlxuICAgICAgPE1lbnVUd28gY29udGFpbmVyRmx1aWQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVRvdGFsUHJpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xuXG5mdW5jdGlvbiBGdW5jdGlvbkl0ZW1zKHsgaGlkZVRvdGFsLCBoaWRlV2lzaGxpc3QgfSkge1xuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zXCI+XG4gICAgICB7IWhpZGVXaXNobGlzdCAmJiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL3dpc2hsaXN0XCJ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zLWl0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25faGVhcnRfYWx0XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG5cbiAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2NhcnRcIn0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImZ1bmN0aW9uLWl0ZW1zLWl0ZW1cIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2JhZ19hbHRcIiAvPlxuXG4gICAgICAgICAgeyFoaWRlVG90YWwgJiZcbiAgICAgICAgICAgIChjYXJ0U3RhdGUuZGF0YSA/IChcbiAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdEN1cnJlbmN5KGNhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydFN0YXRlLmRhdGEpKX08L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0Q3VycmVuY3koMCl9PC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGdW5jdGlvbkl0ZW1zKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IE1vYmlsZU5hdmlnYXRvciBmcm9tIFwiLi9Nb2JpbGVOYXZpZ2F0b3JcIjtcblxuZnVuY3Rpb24gTW9iaWxlTWVudU9wZW5lcigpIHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvblNob3dEcmF3ZXIgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgfTtcbiAgY29uc3Qgb25DbG9zZURyYXdlciA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGEgb25DbGljaz17b25TaG93RHJhd2VyfSBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1vcGVuZXJcIiBocmVmPVwiI1wiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiIC8+XG4gICAgICA8L2E+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIHRpdGxlPVwiQ2xvc2VcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlRHJhd2VyfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcbiAgICAgICAgd2lkdGg9ezMyMH1cbiAgICAgID5cbiAgICAgICAgPE1vYmlsZU5hdmlnYXRvciAvPlxuICAgICAgPC9EcmF3ZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTW9iaWxlTWVudU9wZW5lcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgbmF2aWdhdG9yRGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9uYXZpZ2F0b3IuanNvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gXCIuLi8uLi9vdGhlci9Tb2NpYWxJY29uc1wiO1xuXG5mdW5jdGlvbiBNb2JpbGVOYXZpZ2F0b3IoKSB7XG4gIGNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnQ6IGUua2V5IH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGVcIj5cbiAgICAgIDxNZW51XG4gICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlLW5hdmlnYXRvclwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX1cbiAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICA+XG4gICAgICAgIDxTdWJNZW51IGtleT1cImhvbWVwYWdlXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuSE9NRS50aXRsZX0+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuSE9NRS5zdWJNZW51Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICA8U3ViTWVudSBrZXk9XCJzaG9wXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuU0hPUC50aXRsZX0+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBsYXlvdXRcIiB0aXRsZT1cIkxheW91dCBzaG9wXCI+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUubGF5b3V0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBkZXRhaWxcIiB0aXRsZT1cIkRldGFpbCBzaG9wXCI+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUuZGV0YWlsLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcCBwYWdlc1wiIHRpdGxlPVwiUGFnZXMgc2hvcFwiPlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LnBhZ2VzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT4ge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPFN1Yk1lbnUga2V5PVwicGFnZXNcIiB0aXRsZT17bmF2aWdhdG9yRGF0YS5QQUdFUy50aXRsZX0+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuUEFHRVMuc3ViTWVudS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJhbGlwYXlcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5BQk9VVC5ocmVmfT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FudC5kZXNpZ25cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hdmlnYXRvckRhdGEuQUJPVVQudGl0bGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDwvTWVudT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtZnVuY3Rpb25zXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9vdGhlci9sb2dpblwifT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1mdW5jdGlvbnNfX2xvZ2luXCI+TG9naW4gLyBSZWdpc3RlcjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE1vYmlsZU5hdmlnYXRvcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgbmF2aWdhdG9yRGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9uYXZpZ2F0b3IuanNvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBOYXZpZ2F0b3IoKSB7XG4gIGNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW0gLXRvZ2dsZWFibGVcIj5cbiAgICAgICAgPExpbmsgaHJlZj17bmF2aWdhdG9yRGF0YS5IT01FLmhyZWZ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5IT01FLnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51XCI+XG4gICAgICAgICAge25hdmlnYXRvckRhdGEuSE9NRS5zdWJNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW0gLXRvZ2dsZWFibGVcIj5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuU0hPUC5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuU0hPUC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudSAtd2lkZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51LWdyb3VwXCI+XG4gICAgICAgICAgICA8aDU+TGF5b3V0IHNob3A8L2g1PlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LmxheW91dC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudS1ncm91cFwiPlxuICAgICAgICAgICAgPGg1PkRldGFpbCBzaG9wPC9oNT5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5kZXRhaWwubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnUtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxoNT5QYWdlcyBzaG9wPC9oNT5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5wYWdlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtIC10b2dnbGVhYmxlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkJMT0cuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkJMT0cudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5CTE9HLnN1Yk1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbSAtdG9nZ2xlYWJsZVwiPlxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5QQUdFUy5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuUEFHRVMudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5QQUdFUy5zdWJNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuQUJPVVQuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkFCT1VULnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE5hdmlnYXRvcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlbGVjdCwgQXV0b0NvbXBsZXRlLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jYXRlZ29yaWVzLmpzb25cIjtcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3VzZURlYm91bmRcIjtcbmltcG9ydCB7IGZldGNoU2VhcmNoZWRQcm9kdWN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBlbnRlckJ1dHRvbiA9IFwiU2VhcmNoXCIsIGhpZGVTZWxlY3QgfSkge1xuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbY3VycmVudFNlYXJjaCwgc2V0Q3VycmVudFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRDYXRlZ29yeSwgc2V0Q3VycmVudENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWJvdW5kVmFsdWUgPSB1c2VEZWJvdW5jZShjdXJyZW50U2VhcmNoLCAzMDApO1xuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcbiAgY29uc3QgeyBzZWFyY2hlZFByb2R1Y3RzIH0gPSBzaG9wU3RhdGU7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIHNldEN1cnJlbnRTZWFyY2godmFsKTtcbiAgfTtcbiAgY29uc3Qgb25TZWxlY3RPcHRpb24gPSAodmFsdWUsIG9wdGlvbikgPT4ge1xuICAgIHNldEN1cnJlbnRTZWFyY2godmFsdWUpO1xuICB9O1xuICBjb25zdCBvblNlYXJjaCA9ICh2YWwpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRTZWFyY2ggfHwgY3VycmVudFNlYXJjaCA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIsXG4gICAgICAgIHF1ZXJ5OiB7IHE6IGN1cnJlbnRTZWFyY2ggfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25DaG9vc2VDYXRlb2dyeSA9ICh2YWwpID0+IHtcbiAgICBzZXRDdXJyZW50Q2F0ZWdvcnkodmFsKTtcbiAgfTtcbiAgY29uc3Qgb3B0aW9ucyA9XG4gICAgc2VhcmNoZWRQcm9kdWN0cy5kYXRhLmxlbmd0aCA+IDAgJiZcbiAgICBzZWFyY2hlZFByb2R1Y3RzLmRhdGEubWFwKChpdGVtKSA9PiAoeyB2YWx1ZTogaXRlbS5uYW1lIH0pKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0KHtcbiAgICAgICAgaW5wdXQ6IGN1cnJlbnRTZWFyY2gsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRDYXRlZ29yeSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW2RlYm91bmRWYWx1ZSwgY3VycmVudENhdGVnb3J5XSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS13cmFwcGVyXCI+XG4gICAgICAgIHshaGlkZVNlbGVjdCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS1zZWxlY3RcIj5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50Q2F0ZWdvcnl9XG4gICAgICAgICAgICAgIHN1ZmZpeEljb249ezxpIGNsYXNzTmFtZT1cImZhciBmYS1hbmdsZS1kb3duXCIgLz59XG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hvb3NlQ2F0ZW9ncnl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj5BbGwgY2F0ZWdvcmllczwvT3B0aW9uPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbS52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm0taW5wdXRcIj5cbiAgICAgICAgICA8QXV0b0NvbXBsZXRlXG4gICAgICAgICAgICBiYWNrZmlsbFxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3RPcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXRWYWx1ZSwgb3B0aW9uKSA9PlxuICAgICAgICAgICAgICBvcHRpb24udmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGlucHV0VmFsdWUudG9VcHBlckNhc2UoKSkgIT09XG4gICAgICAgICAgICAgIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0LlNlYXJjaFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG5lZWRcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBlbnRlckJ1dHRvbj17ZW50ZXJCdXR0b259XG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgbG9hZGluZz17c2VhcmNoZWRQcm9kdWN0cy5sb2FkaW5nfVxuICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlYXJjaEZvcm0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSBcIi4uL2VsZW1lbnRzL05hdmlnYXRvclwiO1xuaW1wb3J0IEZ1bmN0aW9uSXRlbXMgZnJvbSBcIi4uL2VsZW1lbnRzL0Z1bmN0aW9uSXRlbXNcIjtcbmltcG9ydCBNb2JpbGVNZW51T3BlbmVyIGZyb20gXCIuLi9lbGVtZW50cy9Nb2JpbGVNZW51T3BlbmVyXCI7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi4vZWxlbWVudHMvU2VhcmNoRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51VHdvKHsgY29udGFpbmVyRmx1aWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSAtc3R5bGUtdHdvXCI+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPXtjb250YWluZXJGbHVpZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS13cmFwcGVyXCI+XG4gICAgICAgICAgPE1vYmlsZU1lbnVPcGVuZXIgLz5cbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1sb2dvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCJ9XG4gICAgICAgICAgICAgICAgYWx0PVwiT2dhbWkgbG9nb1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxTZWFyY2hGb3JtIGVudGVyQnV0dG9uPXs8aSBjbGFzc05hbWU9XCJpY29uX3NlYXJjaFwiIC8+fSAvPlxuICAgICAgICAgIDxOYXZpZ2F0b3IgLz5cbiAgICAgICAgICA8RnVuY3Rpb25JdGVtcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uLy4uL290aGVyL1NvY2lhbEljb25zXCI7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBmbGFnRGF0YSA9IFtcbiAgeyBuYW1lOiBcImVuZ2xpc2hcIiwgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2ZsYWctdXNhLnBuZ1wiIH0sXG4gIHsgbmFtZTogXCJqYXBhbmVzZVwiLCBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvZmxhZy1qcC5wbmdcIiB9LFxuICB7IG5hbWU6IFwidmlldG5hbWVzZVwiLCBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvZmxhZy12bi5wbmdcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wTmF2T25lKHsgY29udGFpbmVyRmx1aWQgfSkge1xuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmVcIj5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ9e2NvbnRhaW5lckZsdWlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1sZWZ0XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGVcIiAvPlxuICAgICAgICAgICAgICAgIGluZm8uZGVlcmNyZWF0aXZlQGdtYWlsLmNvbVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lLWFsdFwiIC8+XG4gICAgICAgICAgICAgICAgKzY1IDExLjE4OC44ODhcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodF9faXRlbVwiPlxuICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodF9faXRlbVwiPlxuICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cImVuZ2xpc2hcIiB3aWR0aD17MTI1fSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIHtmbGFnRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTMgLyAxNiArIFwiZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCAvIDE2ICsgXCJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogLTMgLyAxNiArIFwiZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1IC8gMTYgKyBcImVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmUtcmlnaHRfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2F1dGgvbG9naW5cIn0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBCYWNrVG9wIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IEhlYWRlclR3byBmcm9tIFwiLi4vaGVhZGVyL0hlYWRlclR3b1wiO1xuaW1wb3J0IHdpdGhIZWFkZXJTY3JvbGwgZnJvbSBcIi4uLy4uL2NvbW1vbi93aXRoSGVhZGVyU2Nyb2xsXCI7XG5pbXBvcnQgRm9vdGVyRmx1aWQgZnJvbSBcIi4uL2Zvb3Rlci9Gb290ZXJGbHVpZFwiO1xuXG5jb25zdCBTY3JvbGxlZEhlYWRlciA9IHdpdGhIZWFkZXJTY3JvbGwoSGVhZGVyVHdvKTtcblxuZnVuY3Rpb24gTGF5b3V0T25lKHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTY3JvbGxlZEhlYWRlciAvPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPEZvb3RlckZsdWlkIC8+XG4gICAgICA8QmFja1RvcCAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKExheW91dE9uZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgYmVuZWZpdHNEYXRhIGZyb20gXCIuLi8uLi9kYXRhL2JlbmVmaXRzLmpzb25cIjtcblxuZnVuY3Rpb24gQmVuZWZpdHMoeyBjb250YWluZXJGbHVpZCwgY29sdW1uLCB0aHJlZUNvbCwgc3R5bGUsIGNsYXNzTmFtZSB9KSB7XG4gIGNvbnN0IHJlbmRlckNvbCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhyZWVDb2xcbiAgICAgID8geyB4czogMjQsIG1kOiA4IH1cbiAgICAgIDogY29sdW1uXG4gICAgICA/IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA2LCBsZzogMjQgfVxuICAgICAgOiB7IHhzOiAyNCwgbWQ6IDYgfTtcbiAgfTtcbiAgY29uc3QgY29sID0gcmVuZGVyQ29sKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgYmVuZWZpdHMgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSwgeyBcIi1jb2x1bW5cIjogY29sdW1uIH0pfWB9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZW5lZml0cy13cmFwcGVyXCI+XG4gICAgICAgIDxSb3cgZ3V0dGVyPXsxMH0+XG4gICAgICAgICAge2JlbmVmaXRzRGF0YVxuICAgICAgICAgICAgLnNsaWNlKDAsIHRocmVlQ29sID8gMyA6IGJlbmVmaXRzRGF0YS5sZW5ndGgpXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IHsuLi5yZW5kZXJDb2woKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZW5lZml0cy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJlbmVmaXRzLWl0ZW1fX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5pY29uU3JjfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJCZW5lZml0IGljb25cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJiZW5lZml0cy1pdGVtX190aXRsZVwiPntpdGVtLm5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJlbmVmaXRzLWl0ZW1fX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJlbmVmaXRzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHsgZmx1aWQsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Zmx1aWQgPyBcImNvbnRhaW5lci1mbHVpZFwiIDogXCJjb250YWluZXJcIn0+e2NoaWxkcmVufTwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2tlbGV0b24sIEVtcHR5IH0gZnJvbSBcImFudGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmV0Y2hEYXRhSGFuZGxlKHtcbiAgZGF0YSxcbiAgZXJyb3JNZXNzYWdlID0gXCJHZXQgcHJvZHVjdHMgZmFpbCwgcGxlYXNlIHRyeSBhZ2FpblwiLFxuICBlbXB0eURlc2NyaXB0aW9uID0gXCJObyBwcm9kdWN0IGluIHRoaXMgY2F0ZWdvcnlcIixcbiAgcmVuZGVyRGF0YSxcbn0pIHtcbiAgcmV0dXJuIGRhdGEubG9hZGluZyA/IChcbiAgICA8U2tlbGV0b24gYWN0aXZlIC8+XG4gICkgOiBkYXRhLmVycm9yID8gKFxuICAgIDxoMz57ZXJyb3JNZXNzYWdlfTwvaDM+XG4gICkgOiBkYXRhLmRhdGEubGVuZ3RoID4gMCA/IChcbiAgICByZW5kZXJEYXRhICYmIHJlbmRlckRhdGEoZGF0YS5kYXRhKVxuICApIDogKFxuICAgIDxFbXB0eVxuICAgICAgaW1hZ2U9e0VtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEV9XG4gICAgICBkZXNjcmlwdGlvbj17ZW1wdHlEZXNjcmlwdGlvbn1cbiAgICAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSBcIi4uLy4uL2NvbW1vbi91c2VEZWJvdW5kXCI7XG5cbmZ1bmN0aW9uIFF1YW50aXR5U2VsZWN0b3Ioe1xuICBtaW4sXG4gIG1heCxcbiAgZGVmYXVsdFZhbHVlID0gMSxcbiAgY2xhc3NOYW1lLFxuICBvbkNoYW5nZSxcbiAgb25EZWNyZWFzZSxcbiAgb25JbmNyZWFzZSxcbn0pIHtcbiAgY29uc3QgZmlyc3RVcGRhdGUgPSB1c2VSZWYodHJ1ZSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKTtcbiAgY29uc3QgZGVib3VuZFZhbHVlID0gdXNlRGVib3VuY2UodmFsdWUsIDMwMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZpcnN0VXBkYXRlLmN1cnJlbnQpIHtcbiAgICAgIGZpcnN0VXBkYXRlLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UodmFsdWUpO1xuICB9LCBbZGVib3VuZFZhbHVlXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VmFsdWUoZGVmYXVsdFZhbHVlKTtcbiAgfSwgW2RlZmF1bHRWYWx1ZV0pO1xuICBjb25zdCBkZWNyZWFzZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChtaW4gJiYgdmFsdWUgPD0gbWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSA8PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9uRGVjcmVhc2UgJiYgb25EZWNyZWFzZSgpO1xuICAgICAgc2V0VmFsdWUodmFsdWUgLSAxKTtcbiAgICB9XG4gIH0sIFt2YWx1ZV0pO1xuICBjb25zdCBpbmNyZWFzZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh2YWx1ZSA+PSBtYXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb25JbmNyZWFzZSAmJiBvbkluY3JlYXNlKCk7XG4gICAgc2V0VmFsdWUodmFsdWUgKyAxKTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BxdWFudGl0eS1zZWxlY3RvciAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHktc2VsZWN0b3ItbnVtYmVyXCI+e3ZhbHVlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eS1zZWxlY3Rvci1jb250cm9sbGVyXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwibGlua1wiXG4gICAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlIDw9IG1pbiB8fCB2YWx1ZSA8PSAxfVxuICAgICAgICAgIG9uQ2xpY2s9e2RlY3JlYXNlVmFsdWV9XG4gICAgICAgID5cbiAgICAgICAgICAtXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgZGlzYWJsZWQ9e3ZhbHVlID49IG1heH0gb25DbGljaz17aW5jcmVhc2VWYWx1ZX0+XG4gICAgICAgICAgK1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFF1YW50aXR5U2VsZWN0b3IpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZnVuY3Rpb24gU2VjdGlvblRpdGxlKHsgdGl0bGUsIGhpZGVEZWNvcmF0aW9uLCBjbGFzc05hbWUsIHN0eWxlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHNlY3Rpb24tdGl0bGUgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIHshaGlkZURlY29yYXRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlLWRlY29yYXRpb25cIiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTZWN0aW9uVGl0bGUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2lhbEljb25zKHsgY2xhc3NOYW1lLCB0eXBlID0gXCJsaW5rXCIsIHNoYXBlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtgc29jaWFsLWljb25zICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW52aXNpb25cIj48L2k+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXBpbnRlcmVzdC1wXCI+PC9pPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBCdXR0b24sIG1lc3NhZ2UsIFJhdGUsIFRvb2x0aXAsIE1vZGFsIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDb3VudGRvd24sIHsgemVyb1BhZCB9IGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcblxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgeyBjaGVja1Byb2R1Y3RJbldpc2hsaXN0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcbmltcG9ydCB7IGZldGNoQ2FydFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xuaW1wb3J0IHsgZmV0Y2hXaXNoTGlzdFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy93aXNobGlzdEFjdGlvbnNcIjtcbmltcG9ydCB7XG4gIGFkZFRvQ29tcGFyZSxcbiAgcmVtb3ZlRnJvbUNvbXBhcmUsXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NvbXBhcmVBY3Rpb25zXCI7XG5pbXBvcnQgeyBvbkFkZFByb2R1Y3RUb0NhcnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NhcnRTZXJ2aWNlc1wiO1xuaW1wb3J0IHtcbiAgb25BZGRQcm9kdWN0VG9XaXNobGlzdCxcbiAgb25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0LFxufSBmcm9tIFwiLi4vLi4vY29tbW9uL3dpc2hsaXN0U2VydmljZXNcIjtcbmltcG9ydCBQcm9kdWN0RGV0YWlsTGF5b3V0IGZyb20gXCIuLi9kZXRhaWwvcHJvZHVjdC9Qcm9kdWN0RGV0YWlsTGF5b3V0XCI7XG5cbmZ1bmN0aW9uIFByb2R1Y3QoeyBkYXRhLCBjbGFzc05hbWUsIHR5cGUsIGNvdW50ZG93bkxhc3QgPSAxMDAwMDAwMDAgfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthZGRUb0NhcnRMb2FkaW5nLCBzZXRBZGRUb0NhcnRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FkZFRvV2lzaGxpc3RMb2FkaW5nLCBzZXRBZGRUb1dpc2hsaXN0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xuICBjb25zdCB3aXNobGlzdFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53aXNobGlzdFJlZHVjZXIpO1xuICBjb25zdCBjb21wYXJlU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbXBhcmVSZWR1Y2VyKTtcbiAgY29uc3QgcHJvZHVjdEluV2lzaGxpc3QgPSBjaGVja1Byb2R1Y3RJbldpc2hsaXN0KHdpc2hsaXN0U3RhdGUuZGF0YSwgZGF0YS5pZCk7XG4gIGNvbnN0IHByb2R1Y3RJbkNvbXBhcmUgPSBjaGVja1Byb2R1Y3RJbldpc2hsaXN0KGNvbXBhcmVTdGF0ZSwgZGF0YS5pZCk7XG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbFZpc2libGUodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IG9uTW9kYWxDbG9zZSA9IChlKSA9PiB7XG4gICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgfTtcbiAgY29uc3Qgb25BZGRUb0NhcnQgPSAocHJvZHVjdCkgPT4ge1xuICAgIGlmIChhZGRUb0NhcnRMb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEFkZFRvQ2FydExvYWRpbmcodHJ1ZSk7XG4gICAgb25BZGRQcm9kdWN0VG9DYXJ0KHtcbiAgICAgIHByb2R1Y3QsXG4gICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnRcIik7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFJlcXVlc3QoKSk7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogKG1lcywgZXJyKSA9PiB7XG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBtZXNzYWdlLmVycm9yKG1lcyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBjb25zdCBvbkFkZFdpc2hsaXN0ID0gKHByb2R1Y3QpID0+IHtcbiAgICBpZiAoYWRkVG9XaXNobGlzdExvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcodHJ1ZSk7XG4gICAgaWYgKCFwcm9kdWN0SW5XaXNobGlzdCkge1xuICAgICAgb25BZGRQcm9kdWN0VG9XaXNobGlzdCh7XG4gICAgICAgIHByb2R1Y3QsXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRBZGRUb1dpc2hsaXN0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byB3aXNobGlzdFwiKTtcbiAgICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0UmVxdWVzdCgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogKG1lcywgZXJyKSA9PiB7XG4gICAgICAgICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUmVtb3ZlUHJvZHVjdEZyb21XaXNobGlzdCh7XG4gICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcbiAgICAgICAgb25TdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldEFkZFRvV2lzaGxpc3RMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiUHJvZHVjdCByZW1vdmVkIGZyb20gd2lzaGxpc3RcIik7XG4gICAgICAgICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdFJlcXVlc3QoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IChtZXMsIGVycikgPT4ge1xuICAgICAgICAgIHNldEFkZFRvV2lzaGxpc3RMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKG1lcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25BZGRUb0NvbXBhcmUgPSAocHJvZHVjdCkgPT4ge1xuICAgIGlmIChwcm9kdWN0SW5Db21wYXJlKSB7XG4gICAgICBkaXNwYXRjaChyZW1vdmVGcm9tQ29tcGFyZShwcm9kdWN0LmlkKSk7XG4gICAgICBtZXNzYWdlLmVycm9yKFwiUHJvZHVjdCByZW1vdmVkIGZyb20gY29tcGFyZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goYWRkVG9Db21wYXJlKHByb2R1Y3QpKTtcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gY29tcGFyZVwiKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldFJhbmRvbUFyYml0cmFyeSA9IChtaW4sIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gIH07XG4gIGNvbnN0IHJlZGVyUHJvZHVjdFR5cGUgPSAodHlwZSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInRpbnlcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QtdGlueSAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC10aW55LWltZ1wiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9e2RhdGEubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5jb3ZlckltYWdlfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXRpbnktY29udGVudFwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC10aW55LW5hbWVcIiB0aXRsZT1cIlB1cmUgUGluZWFwcGxlXCI+XG4gICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC10aW55LXByaWNlXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXG4gICAgICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgY2FzZSBcImRhbGVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QtZGFsZSAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWltZ1wiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9e2RhdGEubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5jb3ZlckltYWdlfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Q291bnRkb3duXG4gICAgICAgICAgICAgIGRhdGU9e0RhdGUubm93KCkgKyBnZXRSYW5kb21BcmJpdHJhcnkoMTAwMDAwMDAwLCAxNTAwMDAwMDApfVxuICAgICAgICAgICAgICByZW5kZXJlcj17KHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1jb3VudGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQoZGF5cyl9PC9oNj4gPHNwYW4+ZGF5czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKGhvdXJzKX08L2g2PiA8c3Bhbj5ocjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKG1pbnV0ZXMpfSA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm1pbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKHNlY29uZHMpfTwvaDY+IDxzcGFuPnNlYzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS10eXBlXCI+e2RhdGEuY2F0ZWdvcnl9PC9oNT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1uYW1lXCIgdGl0bGU9XCJQdXJlIFBpbmVhcHBsZVwiPlxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1wcmljZVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XG4gICAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KVxuICAgICAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLXNlbGVjdFwiPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFkZCB0byB3aXNobGlzdFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkV2lzaGxpc3QoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWJ0biAke2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbldpc2hsaXN0LFxuICAgICAgICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvV2lzaGxpc3RMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1oZWFydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIGNhcnRcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydChkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydExvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXNob3BwaW5nLWJhZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIGNvbXBhcmVcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ29tcGFyZShkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtYnRuICR7Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluQ29tcGFyZSxcbiAgICAgICAgICAgICAgICAgIH0pfWB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cImZhciBmYS1yYW5kb21cIiAvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiUXVpY2sgdmlld1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWV5ZVwiIC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgY2FzZSBcImxpc3RcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbGlzdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltZ1wiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9e2RhdGEubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5jb3ZlckltYWdlfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3Nob3dNb2RhbH0+XG4gICAgICAgICAgICAgICAgUXVpY2sgdmlld1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC10eXBlXCI+e2RhdGEuY2F0ZWdvcnl9PC9oNT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiIHRpdGxlPVwiUHVyZSBQaW5lYXBwbGVcIj5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxSYXRlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1yYXRlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5yYXRlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIG5pYW1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICB7ZGF0YS5xdWFudGl0eSA+IDAgPyAoXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtYXZhaWxhYmlsaXR5IC1pbnN0b2NrXCI+XG4gICAgICAgICAgICAgICAgICBBdmFpbGFiaWxpdHk6IDxzcGFuPiB7ZGF0YS5xdWFudGl0eX0gaW4gc3RvY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC1hdmFpbGFiaWxpdHkgLW91dHN0b2NrXCI+XG4gICAgICAgICAgICAgICAgICBBdmFpbGFiaWxpdHk6IDxzcGFuPiBPdXQgc3RvY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2RlbGl2ZXJ5XCI+XG4gICAgICAgICAgICAgICAgRnJlZSBkZWxpdmVyeVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPGRlbD57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9PC9kZWw+fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2UtZGlzY291bnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KVxuICAgICAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XG4gICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydChkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2FkZFRvQ2FydExvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9Db21wYXJlKGRhdGEpfVxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbkNvbXBhcmUsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGQgdG8gY29tcGFyZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1nXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSB0aXRsZT17ZGF0YS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmNvdmVySW1hZ2V9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC10eXBlXCI+e2RhdGEuY2F0ZWdvcnl9PC9oNT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiIHRpdGxlPVwiUHVyZSBQaW5lYXBwbGVcIj5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXG4gICAgICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXNlbGVjdFwiPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFkZCB0byB3aXNobGlzdFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkV2lzaGxpc3QoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWJ0biAke2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbldpc2hsaXN0LFxuICAgICAgICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvV2lzaGxpc3RMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1oZWFydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIGNhcnRcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydChkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydExvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXNob3BwaW5nLWJhZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIGNvbXBhcmVcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ29tcGFyZShkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtYnRuICR7Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluQ29tcGFyZSxcbiAgICAgICAgICAgICAgICAgIH0pfWB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cImZhciBmYS1yYW5kb21cIiAvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiUXVpY2sgdmlld1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWV5ZVwiIC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JlZGVyUHJvZHVjdFR5cGUodHlwZSl9XG4gICAgICA8TW9kYWxcbiAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxuICAgICAgICBvbkNhbmNlbD17b25Nb2RhbENsb3NlfVxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgIGhlYWRlcj17bnVsbH1cbiAgICAgICAgd2lkdGg9ezg2MH1cbiAgICAgID5cbiAgICAgICAgPFByb2R1Y3REZXRhaWxMYXlvdXQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19IGhpZGVUYWIgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdCk7XG4iLCJpbXBvcnQgeyBCdXR0b24sIENvbCwgUm93IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xuXG5mdW5jdGlvbiBCYW5uZXJPbmUoeyBkYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1vbmVcIj5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbMzAsIDMwXX0+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4fSBzbT17MjR9IGxnPXsxMn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXItb25lLWl0ZW0gdXAtZG93bi1hbmltLWhvdmVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5iYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgICB9JylgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Um93IGFsaWduPVwibWlkZGxlXCIganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgPENvbCBzbT17MjR9IG1kPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLW9uZS1pdGVtX19pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSW50cm9kdWN0aW9uIGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCBzbT17MjR9IG1kPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItb25lLWl0ZW1fX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnQubWFpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7aXRlbS5jb250ZW50LnNwYW59PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvcCBub3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJhbm5lck9uZSk7XG4iLCJpbXBvcnQgeyBCdXR0b24sIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb3VudGRvd24sIHsgemVyb1BhZCB9IGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuLi8uLi9vdGhlci9TZWN0aW9uVGl0bGVcIjtcblxuZnVuY3Rpb24gRG93VHdvKHsgY291bnRkb3duTGFzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctdHdvXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93IGFsaWduPVwibWlkZGxlXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICA8Q29sIHNtPXsyNH0gbGc9ezEyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LXR3by1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJEZWFsIE9mIFRoZSBXZWVrXCIgaGlkZURlY29yYXRpb24gLz5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXR0XG4gICAgICAgICAgICAgICAgaW5jaWRpZHVudCB1dCBsYWJvcmVcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8Q291bnRkb3duXG4gICAgICAgICAgICAgICAgZGF0ZT17RGF0ZS5ub3coKSArIGNvdW50ZG93bkxhc3R9XG4gICAgICAgICAgICAgICAgcmVuZGVyZXI9eyh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LXR3by1jb3VudGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy10d28tY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChkYXlzKX08L2g2PiA8c3Bhbj5kYXlzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LXR3by1jb3VudGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKGhvdXJzKX08L2g2PiA8c3Bhbj5ocjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy10d28tY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChtaW51dGVzKX0gPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm1pbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy10d28tY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChzZWNvbmRzKX08L2g2PiA8c3Bhbj5zZWM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIn0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCJ9PlxuICAgICAgICAgICAgICAgICAgICBTaG9wIG5vd1xuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIGxnPXsxMH0+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy10d28taW1nIHVwLWRvd24tYW5pbVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xuICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL2ltYWdlcy9zZWN0aW9ucy9kYWxlLW9mLXdlZWsvdHdvLzEucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWx0PVwiRGFsZSBvZiB0aGUgd2VlayBpbWFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhEb3dUd28pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIEhlcm9TbGlkZXJUd28oeyBjb250YWluZXJGbHVpZCwgZGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlciAtc2luZ2xlIC1zdHlsZS10d29cIj5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ9e2NvbnRhaW5lckZsdWlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGRhdGEuYmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgYWx0PVwiSGVybyBzbGlkZXIgYmFja2dyb3VuZCBpbWFnZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXItY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cIm1pZGRsZVwiIGd1dHRlcj17MzB9PlxuICAgICAgICAgICAgICA8Q29sIHNtPXs4fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2xpZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNT57ZGF0YS5zdWJUaXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlLm1haW4pfVxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ve2RhdGEucHJpY2UudW5pdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgU2hvcCBub3dcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBzbT17OH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiL2Fzc2V0cy9pbWFnZXMvaGVyby1zbGlkZXIvb25lLzEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJIZXJvIHNsaWRlciBpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1zdWJpdGVtc1wiPlxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNX0+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheSgzKSwgKGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29sIGtleT17aX0gc209ezh9IG1kPXsxMn0gbGc9ezh9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwifT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1pblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYC9hc3NldHMvaW1hZ2VzL2hlcm8tc2xpZGVyL3R3by8ke2kgKyAxfS5wbmdgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJIZXJvIHNsaWRlciBzdWIgaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSGVyb1NsaWRlclR3byk7XG4iLCJpbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vcHJvZHVjdC9Qcm9kdWN0XCI7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuLi8uLi9vdGhlci9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCBGZXRjaERhdGFIYW5kbGUgZnJvbSBcIi4uLy4uL290aGVyL0ZldGNoRGF0YUhhbmRsZVwiO1xuXG5mdW5jdGlvbiBQcm9kdWN0R3JpZCh7XG4gIHN0eWxlLFxuICBwcm9kdWN0Q2xhc3NOYW1lLFxuICBwcm9kdWN0Q29sLFxuICBwcm9kdWN0VHlwZSxcbiAgZGF0YSxcbiAgaGVhZGVyVGl0bGUsXG4gIGhlYWRlckNsYXNzLFxuICBoaWRlSGVhZGVyLFxuICBmaXZlQ29sLFxuICBjbGFzc05hbWUsXG4gIGd1dHRlciA9IFtcbiAgICB7IHhzOiAwLCBtZDogMTUgfSxcbiAgICB7IHhzOiAwLCBtZDogMTUgfSxcbiAgXSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QtZ3JpZCAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfSBzdHlsZT17c3R5bGV9PlxuICAgICAgeyFoaWRlSGVhZGVyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0LWdyaWQtaGVhZGVyICR7Y2xhc3NOYW1lcyhoZWFkZXJDbGFzcyl9YH0+XG4gICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT17aGVhZGVyVGl0bGV9IGhpZGVEZWNvcmF0aW9uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1ncmlkLWNvbnRlbnRcIj5cbiAgICAgICAgPEZldGNoRGF0YUhhbmRsZVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgcmVuZGVyRGF0YT17KGRhdGEpID0+IChcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtndXR0ZXJ9PlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0Q29sfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgXCJmaXZlLWNvbFwiOiBmaXZlQ29sIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3Byb2R1Y3RUeXBlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb2R1Y3RDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0R3JpZCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFicywgUm93LCBDb2wsIEVtcHR5LCBTa2VsZXRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuLi8uLi9vdGhlci9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi8uLi9wcm9kdWN0L1Byb2R1Y3RcIjtcbmltcG9ydCBGZXRjaERhdGFIYW5kbGUgZnJvbSBcIi4uLy4uL290aGVyL0ZldGNoRGF0YUhhbmRsZVwiO1xuXG5mdW5jdGlvbiBQcm9kdWN0VGFiKHtcbiAgc3R5bGUsXG4gIGRhdGEsXG4gIGNsYXNzTmFtZSxcbiAgb25UYWJDaGFuZ2UsXG4gIHByb2R1Y3RDbGFzc05hbWUsXG4gIGhlYWRlckNhdGVnb3JpZXMsXG4gIGhlYWRlclRpdGxlLFxuICBoZWFkZXJDbGFzcyxcbiAgc2hvd1RpdGxlRGVjb3JhdGlvbiA9IGZhbHNlLFxuICBoZWFkZXJUeXBlID0gXCJncmlkXCIsXG4gIHByb2R1Y3RDb2wsXG59KSB7XG4gIGNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcbiAgY29uc3Qgb25DaG9vc2VDYXRlZ29yeSA9IChrZXkpID0+IHtcbiAgICBvblRhYkNoYW5nZShrZXkpO1xuICB9O1xuICBjb25zdCByZW5kZXJUYWJDb250ZW50ID0gKCkgPT4gKFxuICAgIDxGZXRjaERhdGFIYW5kbGVcbiAgICAgIGRhdGE9e2RhdGF9XG4gICAgICByZW5kZXJEYXRhPXsoZGF0YSkgPT4gKFxuICAgICAgICA8Um93XG4gICAgICAgICAgZ3V0dGVyPXtbXG4gICAgICAgICAgICB7IHhzOiAwLCBtZDogMTUgfSxcbiAgICAgICAgICAgIHsgeHM6IDAsIG1kOiAxNSB9LFxuICAgICAgICAgIF19XG4gICAgICAgID5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IHsuLi5wcm9kdWN0Q29sfT5cbiAgICAgICAgICAgICAgPFByb2R1Y3QgY2xhc3NOYW1lPXtwcm9kdWN0Q2xhc3NOYW1lfSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUm93PlxuICAgICAgKX1cbiAgICAvPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdC10YWIgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdC10YWItaGVhZGVyICR7XG4gICAgICAgICAgaGVhZGVyVHlwZSA9PT0gXCJyb3dcIiA/IFwiLXN0eWxlLXR3b1wiIDogXCJzdHlsZS1vbmVcIlxuICAgICAgICB9ICAke2NsYXNzTmFtZXMoaGVhZGVyQ2xhc3MpfWB9XG4gICAgICA+XG4gICAgICAgIHtoZWFkZXJUeXBlID09PSBcImdyaWRcIiAmJiAoXG4gICAgICAgICAgPFNlY3Rpb25UaXRsZVxuICAgICAgICAgICAgdGl0bGU9e2hlYWRlclRpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiLWNlbnRlclwiXG4gICAgICAgICAgICBoaWRlRGVjb3JhdGlvbj17c2hvd1RpdGxlRGVjb3JhdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8VGFic1xuICAgICAgICAgIHRhYkJhckV4dHJhQ29udGVudD17XG4gICAgICAgICAgICBoZWFkZXJUeXBlID09PSBcInJvd1wiXG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgbGVmdDogKFxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2hlYWRlclRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIi1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGhpZGVEZWNvcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCJcbiAgICAgICAgICBjZW50ZXJlZD17aGVhZGVyVHlwZSA9PT0gXCJyb3dcIiA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaG9vc2VDYXRlZ29yeX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIkFsbFwiIGtleT1cIlwiPlxuICAgICAgICAgICAge3JlbmRlclRhYkNvbnRlbnQoKX1cbiAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAge2hlYWRlckNhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPXtpdGVtfSBrZXk9e2l0ZW19PlxuICAgICAgICAgICAgICB7cmVuZGVyVGFiQ29udGVudCgpfVxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1RhYnM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0VGFiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0ICogYXMgc2hvcEFjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvc2hvcEFjdGlvbnNcIjtcbmltcG9ydCBMYXlvdXRUd28gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFR3b1wiO1xuaW1wb3J0IEhlcm9TbGlkZXJUd28gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyby1zbGlkZXIvSGVyb1NsaWRlclR3b1wiO1xuaW1wb3J0IFByb2R1Y3RUYWIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJvZHVjdC10aHVtYi9Qcm9kdWN0VGFiXCI7XG5pbXBvcnQgaGVyb3NsaWRlclR3b0RhdGEgZnJvbSBcIi4uLy4uL2RhdGEvc2VjdGlvbnMvaGVyby1zbGlkZXIuanNvblwiO1xuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSBcIi4uLy4uL2RhdGEvY2F0ZWdvcmllcy5qc29uXCI7XG5pbXBvcnQgQmVuZWZpdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3RoZXIvQmVuZWZpdHNcIjtcbmltcG9ydCBQcm9kdWN0R3JpZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wcm9kdWN0LXRodW1iL1Byb2R1Y3RHcmlkXCI7XG5pbXBvcnQgRG93VHdvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb25zL2RhbGUtb2Ytd2Vlay9Eb3dUd29cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgQmFubmVyT25lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb25zL2Jhbm5lci9CYW5uZXJPbmVcIjtcbmltcG9ydCBiYW5uZXJEYXRhIGZyb20gXCIuLi8uLi9kYXRhL3NlY3Rpb25zL2Jhbm5lci5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVwYWdlMigpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbY3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnksIHNldEN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5XSA9IHVzZVN0YXRlKHtcbiAgICBmZWF0dXJlZFByb2R1Y3RzOiBcIlwiLFxuICAgIHNhbGVQcm9kdWN0czogXCJcIixcbiAgICBiZXN0U2VsbGVyUHJvZHVjdHM6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcbiAgY29uc3Qge1xuICAgIHByb2R1Y3RzLFxuICAgIHNhbGVQcm9kdWN0cyxcbiAgICBmZWF0dXJlZFByb2R1Y3RzLFxuICAgIGJlc3RTZWxsZXJQcm9kdWN0cyxcbiAgfSA9IHNob3BTdGF0ZTtcbiAgY29uc3Qge1xuICAgIGZldGNoU2FsZVByb2R1Y3RzUmVxdWVzdCxcbiAgICBmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0LFxuICAgIGZldGNoQmVzdFNlbGxlclByb2R1Y3RzUmVxdWVzdCxcbiAgICBmZXRjaFByb2R1Y3RzUmVxdWVzdCxcbiAgfSA9IHNob3BBY3Rpb25zO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNSZXF1ZXN0KHsgbGltaXQ6IDEwLCBzb3J0OiB7fSB9KSk7XG4gICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzUmVxdWVzdCh7IGxpbWl0OiAxMiB9KSk7XG4gICAgZGlzcGF0Y2goZmV0Y2hTYWxlUHJvZHVjdHNSZXF1ZXN0KHsgbGltaXQ6IDYgfSkpO1xuICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzUmVxdWVzdCh7IGxpbWl0OiA2IH0pKTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzUmVxdWVzdCh7XG4gICAgICAgIGxpbWl0OiAxMixcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LmZlYXR1cmVkUHJvZHVjdHMsXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeS5mZWF0dXJlZFByb2R1Y3RzXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBmZXRjaFNhbGVQcm9kdWN0c1JlcXVlc3Qoe1xuICAgICAgICBsaW1pdDogNixcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LnNhbGVQcm9kdWN0cyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW2N1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LnNhbGVQcm9kdWN0c10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNSZXF1ZXN0KHtcbiAgICAgICAgbGltaXQ6IDYsXG4gICAgICAgIGNhdGVnb3J5OiBjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeS5iZXN0U2VsbGVyUHJvZHVjdHMsXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeS5iZXN0U2VsbGVyUHJvZHVjdHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRUd28gdGl0bGU9XCJIb21lcGFnZSAyXCI+XG4gICAgICA8SGVyb1NsaWRlclR3byBjb250YWluZXJGbHVpZCBkYXRhPXtoZXJvc2xpZGVyVHdvRGF0YS5vbmVbMF19IC8+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICA8UHJvZHVjdFRhYlxuICAgICAgICAgIGRhdGE9e2ZlYXR1cmVkUHJvZHVjdHN9XG4gICAgICAgICAgb25UYWJDaGFuZ2U9eyh2YWwpID0+XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSh7XG4gICAgICAgICAgICAgIC4uLmN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LFxuICAgICAgICAgICAgICBmZWF0dXJlZFByb2R1Y3RzOiB2YWwsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXJDYXRlZ29yaWVzPXtjYXRlZ29yaWVzLnNsaWNlKDAsIDUpLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKX1cbiAgICAgICAgICBoZWFkZXJUaXRsZT1cIkZlYXR1cmVkIFByb2R1Y3RcIlxuICAgICAgICAgIHByb2R1Y3RDbGFzc05hbWU9XCItYm9yZGVybGVzc1wiXG4gICAgICAgICAgcHJvZHVjdENvbD17eyB4czogMTIsIHNtOiA4LCBsZzogNiwgeGw6IDQgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPEJlbmVmaXRzIGNsYXNzTmFtZT1cIi1ib3JkZXJlZFwiIGNvbnRhaW5lckZsdWlkIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxEb3dUd28gY291bnRkb3duTGFzdD17MTAwMDAwMDAwfSAvPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPFByb2R1Y3RUYWJcbiAgICAgICAgICBkYXRhPXtiZXN0U2VsbGVyUHJvZHVjdHN9XG4gICAgICAgICAgb25UYWJDaGFuZ2U9eyh2YWwpID0+XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSh7XG4gICAgICAgICAgICAgIC4uLmN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LFxuICAgICAgICAgICAgICBiZXN0U2VsbGVyUHJvZHVjdHM6IHZhbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlckNhdGVnb3JpZXM9e2NhdGVnb3JpZXMuc2xpY2UoMCwgNSkubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpfVxuICAgICAgICAgIGhlYWRlclR5cGU9XCJyb3dcIlxuICAgICAgICAgIGhlYWRlclRpdGxlPVwiQmVzdCBzZWxsZXJcIlxuICAgICAgICAgIHByb2R1Y3RDbGFzc05hbWU9XCItYm9yZGVybGVzc1wiXG4gICAgICAgICAgcHJvZHVjdENvbD17eyB4czogMTIsIHNtOiA4LCBsZzogNiwgeGw6IDQgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2R1Y3RUYWJcbiAgICAgICAgICBkYXRhPXtzYWxlUHJvZHVjdHN9XG4gICAgICAgICAgb25UYWJDaGFuZ2U9eyh2YWwpID0+XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSh7XG4gICAgICAgICAgICAgIC4uLmN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LFxuICAgICAgICAgICAgICBzYWxlUHJvZHVjdHM6IHZhbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlckNhdGVnb3JpZXM9e2NhdGVnb3JpZXMuc2xpY2UoMCwgNSkubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpfVxuICAgICAgICAgIGhlYWRlclR5cGU9XCJyb3dcIlxuICAgICAgICAgIGhlYWRlclRpdGxlPVwiRmVhdHVyZWQgUHJvZHVjdHNcIlxuICAgICAgICAgIHByb2R1Y3RDbGFzc05hbWU9XCItYm9yZGVybGVzc1wiXG4gICAgICAgICAgcHJvZHVjdENvbD17eyB4czogMTIsIHNtOiA4LCBsZzogNiwgeGw6IDQgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8UHJvZHVjdEdyaWRcbiAgICAgICAgICBkYXRhPXtwcm9kdWN0c31cbiAgICAgICAgICBoZWFkZXJUaXRsZT1cIk5ldyBQcm9kdWN0c1wiXG4gICAgICAgICAgcHJvZHVjdENvbD17eyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2IH19XG4gICAgICAgICAgcHJvZHVjdFR5cGU9XCJ0aW55XCJcbiAgICAgICAgICBmaXZlQ29sXG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxCYW5uZXJPbmUgZGF0YT17YmFubmVyRGF0YS5vbmV9IC8+XG4gICAgPC9MYXlvdXRUd28+XG4gICk7XG59XG4iLCJleHBvcnQgY29uc3QgU0hPUCA9IHtcbiAgRkVUQ0hfUFJPRFVDVFM6IFwiRkVUQ0hfUFJPRFVDVFNcIixcbiAgRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9TQUxFX1BST0RVQ1RTOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNcIixcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTXCIsXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMOiBcIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFM6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNcIixcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9EQUxFX1BST0RVQ1RTOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNcIixcbiAgRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMXCIsXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1M6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTU1wiLFxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMOiBcIkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUxcIixcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFM6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNcIixcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IEJMT0cgPSB7XG4gIEZFVENIX1BPU1RTOiBcIkZFVENIX1BPU1RTXCIsXG4gIEZFVENIX1BPU1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUE9TVFNfU1VDQ0VTU1wiLFxuICBGRVRDSF9QT1NUU19GQUlMOiBcIkZFVENIX1BPU1RTX0ZBSUxcIixcbiAgRkVUQ0hfUE9TVF9ERVRBSUw6IFwiRkVUQ0hfUE9TVF9ERVRBSUxcIixcbiAgRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUzogXCJGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTXCIsXG4gIEZFVENIX1BPU1RfREVUQUlMX0ZBSUw6IFwiRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTFwiLFxuICBGRVRDSF9SRUNFTlRfUE9TVFM6IFwiRkVUQ0hfUkVDRU5UX1BPU1RTXCIsXG4gIEZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTXCIsXG4gIEZFVENIX1JFQ0VOVF9QT1NUU19GQUlMOiBcIkZFVENIX1JFQ0VOVF9QT1NUU19GQUlMXCIsXG59O1xuXG5leHBvcnQgY29uc3QgU0hPUF9GSUxURVIgPSB7XG4gIFJFU0VUX0ZJTFRFUlM6IFwiUkVTRVRfRklMVEVSU1wiLFxuICBTRVRfU09SVDogXCJTRVRfU09SVFwiLFxuICBTRVRfU0hPVzogXCJTRVRfU0hPV1wiLFxuICBTRVRfVklFVzogXCJTRVRfVklFV1wiLFxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXG4gIFNFVF9DT0xPUjogXCJTRVRfQ09MT1JcIixcbiAgU0VUX1NJWkU6IFwiU0VUX1NJWkVcIixcbiAgU0VUX1RBRzogXCJTRVRfVEFHXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQ0FSVCA9IHtcbiAgRkVUQ0hfQ0FSVDogXCJGRVRDSF9DQVJUXCIsXG4gIEZFVENIX0NBUlRfU1VDQ0VTUzogXCJGRVRDSF9DQVJUX1NVQ0NFU1NcIixcbiAgRkVUQ0hfQ0FSVF9GQUlMOiBcIkZFVENIX0NBUlRfRkFJTFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFdJU0hMSVNUID0ge1xuICBGRVRDSF9XSVNITElTVDogXCJGRVRDSF9XSVNITElTVFwiLFxuICBGRVRDSF9XSVNITElTVF9TVUNDRVNTOiBcIkZFVENIX1dJU0hMSVNUX1NVQ0NFU1NcIixcbiAgRkVUQ0hfV0lTSExJU1RfRkFJTDogXCJGRVRDSF9XSVNITElTVF9GQUlMXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQ09NUEFSRSA9IHtcbiAgQUREX1RPX0NPTVBBUkU6IFwiQUREX1RPX0NPTVBBUkVcIixcbiAgUkVNT1ZFX0ZST01fQ09NUEFSRTogXCJSRU1PVkVfRlJPTV9DT01QQVJFXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQkxPR19GSUxURVIgPSB7XG4gIFJFU0VUX0ZJTFRFUlM6IFwiUkVTRVRfRklMVEVSU1wiLFxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXG4gIFNFVF9UQUc6IFwiU0VUX1RBR1wiLFxufTtcbiIsImltcG9ydCB7IENBUlQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuaW1wb3J0ICogYXMgY2FydEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvY2FydFwiO1xuXG4vL0dldCBjYXJ0IGRhdGFcbmV4cG9ydCBjb25zdCBmZXRjaENhcnQgPSAoKSA9PiAoe1xuICB0eXBlOiBDQVJULkZFVENIX0NBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJUX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJUX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFJlcXVlc3QgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaENhcnQoKSk7XG4gICAgY2FydEFwaXNcbiAgICAgIC5mZXRjaENhcnREYXRhKClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0U3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydEZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBDT01QQVJFIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUb0NvbXBhcmUgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQ09NUEFSRS5BRERfVE9fQ09NUEFSRSxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21Db21wYXJlID0gKHByb2R1Y3RJZCkgPT4gKHtcbiAgdHlwZTogQ09NUEFSRS5SRU1PVkVfRlJPTV9DT01QQVJFLFxuICBwYXlsb2FkOiB7XG4gICAgcHJvZHVjdElkLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBTSE9QIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5pbXBvcnQgKiBhcyBzaG9wQXBpcyBmcm9tIFwiLi4vLi4vYXBpcy9zaG9wXCI7XG5cbi8vR2V0IGFsbCBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzU3VjY2VzcyA9IChkYXRhLCBwcm9kdWN0Q291bnQpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gICAgcHJvZHVjdENvdW50LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaFByb2R1Y3RzRGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEsIHJlcy5oZWFkZXJzW1wieC10b3RhbC1jb3VudFwiXSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuXG4vL0dldCBzYWxlIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoU2FsZVByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hTYWxlUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IGZlYXR1cmVkIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEZlYXR1cmVkUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEZlYXR1cmVkUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgYmVzdCBzZWxsZXIgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0cyA9ICgpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEocXVlcnkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgYmVzdCBzZWxsZXIgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0cyA9ICgpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hEYWxlUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaERhbGVQcm9kdWN0c0RhdGEocXVlcnkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgcHJvZHVjdCBkZXRhaWxcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWwgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbEZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbFJlcXVlc3QgPSAoc2x1ZykgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0RGV0YWlsKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YShzbHVnKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3REZXRhaWxTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0RGV0YWlsRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgc2VhcmNoZWQgcHJvZHVjdFxuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3QgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdFJlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoU2VhcmNoZWRQcm9kdWN0KCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hTZWFyY2hlZFByb2R1Y3REYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNlYXJjaGVkUHJvZHVjdFN1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNlYXJjaGVkUHJvZHVjdEZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBXSVNITElTVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5pbXBvcnQgKiBhcyB3aXNobGlzdEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvd2lzaGxpc3RcIjtcblxuLy9HZXQgY2FydCBkYXRhXG5jb25zdCBmZXRjaFdpc2hMaXN0ID0gKCkgPT4gKHtcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1QsXG59KTtcblxuY29uc3QgZmV0Y2hXaXNoTGlzdFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuY29uc3QgZmV0Y2hXaXNoTGlzdEZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBXSVNITElTVC5GRVRDSF9XSVNITElTVF9GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdpc2hMaXN0UmVxdWVzdCA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3QoKSk7XG4gICAgd2lzaGxpc3RBcGlzXG4gICAgICAuZmV0Y2hXaXNobGlzdERhdGEoKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0U3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnRkb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
