"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_dylanramsey_AppDev_REACT_Flip_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanramsey_AppDev_REACT_Flip_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanramsey_AppDev_REACT_Flip_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _components_wallet_connectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/wallet/connectors */ \"./components/wallet/connectors.js\");\n/* harmony import */ var _components_dashBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/dashBoard */ \"./components/dashBoard.js\");\n/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/intro */ \"./components/intro.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home(props) {\n    var renderApp = function renderApp() {\n        if (active) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_dashBoard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 14\n            }, this));\n        } else return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_intro__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                textAlign: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Row, {\n                    columns: 2,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: connect,\n                            style: {\n                                padding: \"20px\"\n                            },\n                            children: [\n                                \"Connect To\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    src: \"./images/Metamask-logo.svg\",\n                                    alt: \"my image\",\n                                    width: \"260px\",\n                                    height: \"50px\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/index.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this));\n    };\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)(), active = ref.active, account = ref.account, library = ref.library, connector = ref.connector, activate = ref.activate, deactivate = ref.deactivate;\n    function connect() {\n        return _connect.apply(this, arguments);\n    }\n    function _connect() {\n        _connect = _asyncToGenerator(_Users_dylanramsey_AppDev_REACT_Flip_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_dylanramsey_AppDev_REACT_Flip_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return activate(_components_wallet_connectors__WEBPACK_IMPORTED_MODULE_3__.injected);\n                    case 3:\n                        _ctx.next = 8;\n                        break;\n                    case 5:\n                        _ctx.prev = 5;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    5\n                ]\n            ]);\n        }));\n        return _connect.apply(this, arguments);\n    }\n    function disconnect() {\n        return _disconnect.apply(this, arguments);\n    }\n    function _disconnect() {\n        _disconnect = _asyncToGenerator(_Users_dylanramsey_AppDev_REACT_Flip_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_dylanramsey_AppDev_REACT_Flip_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        try {\n                            deactivate();\n                        } catch (ex) {\n                            console.log(ex);\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _disconnect.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: renderApp()\n    }, void 0, false, {\n        fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/index.js\",\n        lineNumber: 53,\n        columnNumber: 10\n    }, this));\n};\n_s(Home, \"3xXgvxT7IjmJicz07oB2rdzZCWg=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDVztBQUNYO0FBQ1I7QUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxRQUFRLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxFQUFFLENBQUM7UUFvQjFCQyxTQUFTLEdBQWxCLFFBQVEsQ0FBQ0EsU0FBUyxHQUFHLENBQUM7UUFDcEIsRUFBRSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztZQUNYLE1BQU0sNkVBQUVQLDZEQUFTOzBCQUFFSyxLQUFLLENBQUNHLFFBQVE7Ozs7OztRQUNuQyxDQUFDLE1BQ0MsTUFBTSw2RUFDSFAseURBQUs7a0dBQ0hFLG1EQUFJO2dCQUFDTSxTQUFTLEVBQUMsQ0FBUTtzR0FDckJOLHVEQUFRO29CQUFDUSxPQUFPLEVBQUUsQ0FBQzswR0FDakJSLDBEQUFXOzhHQUNUVSxDQUFNOzRCQUFDQyxPQUFPLEVBQUVDLE9BQU87NEJBQUVDLEtBQUssRUFBRSxDQUFDO2dDQUFDQyxPQUFPLEVBQUUsQ0FBTTs0QkFBQyxDQUFDOztnQ0FBRSxDQUVwRDs0R0FBQ0MsQ0FBRTs7Ozs7NEdBQ0ZDLENBQUc7b0NBQ0ZDLEdBQUcsRUFBQyxDQUE0QjtvQ0FDaENDLEdBQUcsRUFBQyxDQUFVO29DQUNkQyxLQUFLLEVBQUMsQ0FBTztvQ0FDYkMsTUFBTSxFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUS9CLENBQUM7O0lBM0NELEdBQUssQ0FDSHpCLEdBQWMsR0FBZEEsOERBQVksSUFETlMsTUFBTSxHQUNaVCxHQUFjLENBRFJTLE1BQU0sRUFBRWlCLE9BQU8sR0FDckIxQixHQUFjLENBREEwQixPQUFPLEVBQUVDLE9BQU8sR0FDOUIzQixHQUFjLENBRFMyQixPQUFPLEVBQUVDLFNBQVMsR0FDekM1QixHQUFjLENBRGtCNEIsU0FBUyxFQUFFQyxRQUFRLEdBQ25EN0IsR0FBYyxDQUQ2QjZCLFFBQVEsRUFBRUMsVUFBVSxHQUMvRDlCLEdBQWMsQ0FEdUM4QixVQUFVO2FBR2xEYixPQUFPO2VBQVBBLFFBQU87O2FBQVBBLFFBQU87UUFBUEEsUUFBTyxxS0FBdEIsUUFBUSxXQUFpQixDQUFDOzs7Ozs7K0JBRWhCWSxRQUFRLENBQUM1QixtRUFBUTs7Ozs7Ozt3QkFFdkI4QixPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O1FBRWYsQ0FBQztlQU5jZixRQUFPOzthQVFQZ0IsVUFBVTtlQUFWQSxXQUFVOzthQUFWQSxXQUFVO1FBQVZBLFdBQVUscUtBQXpCLFFBQVEsV0FBb0IsQ0FBQzs7Ozt3QkFDM0IsR0FBRyxDQUFDLENBQUM7NEJBQ0hILFVBQVU7d0JBQ1osQ0FBQyxDQUFDLEtBQUssRUFBRUksRUFBRSxFQUFFLENBQUM7NEJBQ1pILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxFQUFFO3dCQUNoQixDQUFDOzs7Ozs7UUFDSCxDQUFDO2VBTmNELFdBQVU7O0lBa0N6QixNQUFNLDZFQUFFRSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFFO2tCQUFFNUIsU0FBUzs7Ozs7O0FBQ3JDLENBQUM7R0EvQ3VCRixJQUFJOztRQUV4Qk4sMERBQVk7OztLQUZRTSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IGluamVjdGVkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvd2FsbGV0L2Nvbm5lY3RvcnNcIjtcbmltcG9ydCBEYXNoQm9hcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaEJvYXJkXCI7XG5pbXBvcnQgSW50cm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvaW50cm9cIjtcbmltcG9ydCB7IEJ1dHRvbiwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IHsgYWN0aXZlLCBhY2NvdW50LCBsaWJyYXJ5LCBjb25uZWN0b3IsIGFjdGl2YXRlLCBkZWFjdGl2YXRlIH0gPVxuICAgIHVzZVdlYjNSZWFjdCgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFjdGl2YXRlKGluamVjdGVkKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgY29uc29sZS5sb2coZXgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGRlYWN0aXZhdGUoKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgY29uc29sZS5sb2coZXgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckFwcCgpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gPERhc2hCb2FyZD57cHJvcHMuY2hpbGRyZW59PC9EYXNoQm9hcmQ+O1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEludHJvPlxuICAgICAgICAgIDxHcmlkIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezJ9PlxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0fSBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIENvbm5lY3QgVG9cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy9NZXRhbWFzay1sb2dvLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIm15IGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNjBweFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0ludHJvPlxuICAgICAgKTtcbiAgfVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIlwiPntyZW5kZXJBcHAoKX08L2Rpdj47XG59XG4iXSwibmFtZXMiOlsidXNlV2ViM1JlYWN0IiwiaW5qZWN0ZWQiLCJEYXNoQm9hcmQiLCJJbnRybyIsIkJ1dHRvbiIsIkdyaWQiLCJIb21lIiwicHJvcHMiLCJyZW5kZXJBcHAiLCJhY3RpdmUiLCJjaGlsZHJlbiIsInRleHRBbGlnbiIsIlJvdyIsImNvbHVtbnMiLCJDb2x1bW4iLCJidXR0b24iLCJvbkNsaWNrIiwiY29ubmVjdCIsInN0eWxlIiwicGFkZGluZyIsImJyIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJhY2NvdW50IiwibGlicmFyeSIsImNvbm5lY3RvciIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNjb25uZWN0IiwiZXgiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});