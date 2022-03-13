"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/wallet/connectors.js":
/*!*****************************************!*\
  !*** ./components/wallet/connectors.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injected\": () => (/* binding */ injected)\n/* harmony export */ });\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/injected-connector */ \"@web3-react/injected-connector\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);\n\nconst injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector({\n    supportedNetworks: [\n        1,\n        3,\n        4,\n        5,\n        42\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dhbGxldC9jb25uZWN0b3JzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRTtBQUUzRCxLQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHLENBQUNELDZFQUFpQixDQUFDLENBQUM7SUFDN0NFLGlCQUFpQixFQUFFLENBQUM7QUFBQSxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0FBQUUsVUFBRTtJQUFBLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsaXAvLi9jb21wb25lbnRzL3dhbGxldC9jb25uZWN0b3JzLmpzP2M2YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCI7XG5cbmV4cG9ydCBjb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7XG4gIHN1cHBvcnRlZE5ldHdvcmtzOiBbMSwgMywgNCwgNSwgNDJdLFxufSk7XG4iXSwibmFtZXMiOlsiSW5qZWN0ZWRDb25uZWN0b3IiLCJpbmplY3RlZCIsInN1cHBvcnRlZE5ldHdvcmtzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/wallet/connectors.js\n");

/***/ }),

/***/ "./components/wallet/metaMaskProvider.js":
/*!***********************************************!*\
  !*** ./components/wallet/metaMaskProvider.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectors */ \"./components/wallet/connectors.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"@web3-react/core\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MetamaskProvider({ children  }) {\n    const { active: networkActive , error: networkError , activate: activateNetwork ,  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)();\n    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _connectors__WEBPACK_IMPORTED_MODULE_2__.injected.isAuthorized().then((isAuthorized)=>{\n            setLoaded(true);\n            if (isAuthorized && !networkActive && !networkError) {\n                activateNetwork(_connectors__WEBPACK_IMPORTED_MODULE_2__.injected);\n            }\n        }).catch(()=>{\n            setLoaded(true);\n        });\n    }, [\n        activateNetwork,\n        networkActive,\n        networkError\n    ]);\n    if (loaded) {\n        return children;\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: \"Loading\"\n    }, void 0, false));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetamaskProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dhbGxldC9tZXRhTWFza1Byb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNYO0FBQ1E7U0FFdENLLGdCQUFnQixDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLEtBQUssQ0FBQyxDQUFDLENBQ0xDLE1BQU0sRUFBRUMsYUFBYSxHQUNyQkMsS0FBSyxFQUFFQyxZQUFZLEdBQ25CQyxRQUFRLEVBQUVDLGVBQWUsSUFDM0IsQ0FBQyxHQUFHUiw4REFBWTtJQUNoQixLQUFLLE1BQUVTLE1BQU0sTUFBRUMsU0FBUyxNQUFJWiwrQ0FBUSxDQUFDLEtBQUs7SUFDMUNELGdEQUFTLEtBQU8sQ0FBQztRQUNmRSw4REFDZSxHQUNaYSxJQUFJLEVBQUVELFlBQVksR0FBSyxDQUFDO1lBQ3ZCRCxTQUFTLENBQUMsSUFBSTtZQUNkLEVBQUUsRUFBRUMsWUFBWSxLQUFLUCxhQUFhLEtBQUtFLFlBQVksRUFBRSxDQUFDO2dCQUNwREUsZUFBZSxDQUFDVCxpREFBUTtZQUMxQixDQUFDO1FBQ0gsQ0FBQyxFQUNBYyxLQUFLLEtBQU8sQ0FBQztZQUNaSCxTQUFTLENBQUMsSUFBSTtRQUNoQixDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUNGO1FBQUFBLGVBQWU7UUFBRUosYUFBYTtRQUFFRSxZQUFZO0lBQUEsQ0FBQztJQUNqRCxFQUFFLEVBQUVHLE1BQU0sRUFBRSxDQUFDO1FBQ1gsTUFBTSxDQUFDUCxRQUFRO0lBQ2pCLENBQUM7SUFDRCxNQUFNO2tCQUFHLENBQU87O0FBQ2xCLENBQUM7QUFFRCxpRUFBZUQsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGlwLy4vY29tcG9uZW50cy93YWxsZXQvbWV0YU1hc2tQcm92aWRlci5qcz9hY2Q5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbmplY3RlZCB9IGZyb20gXCIuL2Nvbm5lY3RvcnNcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5cbmZ1bmN0aW9uIE1ldGFtYXNrUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmU6IG5ldHdvcmtBY3RpdmUsXG4gICAgZXJyb3I6IG5ldHdvcmtFcnJvcixcbiAgICBhY3RpdmF0ZTogYWN0aXZhdGVOZXR3b3JrLFxuICB9ID0gdXNlV2ViM1JlYWN0KCk7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5qZWN0ZWRcbiAgICAgIC5pc0F1dGhvcml6ZWQoKVxuICAgICAgLnRoZW4oKGlzQXV0aG9yaXplZCkgPT4ge1xuICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgIGlmIChpc0F1dGhvcml6ZWQgJiYgIW5ldHdvcmtBY3RpdmUgJiYgIW5ldHdvcmtFcnJvcikge1xuICAgICAgICAgIGFjdGl2YXRlTmV0d29yayhpbmplY3RlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICB9KTtcbiAgfSwgW2FjdGl2YXRlTmV0d29yaywgbmV0d29ya0FjdGl2ZSwgbmV0d29ya0Vycm9yXSk7XG4gIGlmIChsb2FkZWQpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgcmV0dXJuIDw+TG9hZGluZzwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWV0YW1hc2tQcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5qZWN0ZWQiLCJ1c2VXZWIzUmVhY3QiLCJNZXRhbWFza1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJuZXR3b3JrQWN0aXZlIiwiZXJyb3IiLCJuZXR3b3JrRXJyb3IiLCJhY3RpdmF0ZSIsImFjdGl2YXRlTmV0d29yayIsImxvYWRlZCIsInNldExvYWRlZCIsImlzQXV0aG9yaXplZCIsInRoZW4iLCJjYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/wallet/metaMaskProvider.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"@web3-react/core\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_wallet_metaMaskProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/wallet/metaMaskProvider */ \"./components/wallet/metaMaskProvider.js\");\n\n\n\n\nfunction getLibrary(provider) {\n    return new (web3__WEBPACK_IMPORTED_MODULE_2___default())(provider);\n}\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.Web3ReactProvider, {\n        getLibrary: getLibrary,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wallet_metaMaskProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/_app.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanramsey/AppDev/REACT/Flip/pages/_app.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDtBQUM3QjtBQUM2QztTQUUzREcsVUFBVSxDQUFDQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDSCw2Q0FBSSxDQUFDRyxRQUFRO0FBQzFCLENBQUM7U0FFUUMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSw2RUFDSFAsK0RBQWlCO1FBQUNHLFVBQVUsRUFBRUEsVUFBVTs4RkFDdENELDJFQUFnQjtrR0FDZEksU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsaXAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcbmltcG9ydCBNZXRhbWFza1Byb3ZpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL3dhbGxldC9tZXRhTWFza1Byb3ZpZGVyXCI7XG5cbmZ1bmN0aW9uIGdldExpYnJhcnkocHJvdmlkZXIpIHtcbiAgcmV0dXJuIG5ldyBXZWIzKHByb3ZpZGVyKTtcbn1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxuICAgICAgPE1ldGFtYXNrUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTWV0YW1hc2tQcm92aWRlcj5cbiAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJXZWIzUmVhY3RQcm92aWRlciIsIldlYjMiLCJNZXRhbWFza1Byb3ZpZGVyIiwiZ2V0TGlicmFyeSIsInByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ "@web3-react/injected-connector":
/*!*************************************************!*\
  !*** external "@web3-react/injected-connector" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();