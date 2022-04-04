"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ injected)
});

;// CONCATENATED MODULE: external "@web3-react/injected-connector"
const injected_connector_namespaceObject = require("@web3-react/injected-connector");
;// CONCATENATED MODULE: ./components/wallet/connectors.js

/************************
 * INJECTED CONNECTOR INTERFACE
 *
 * Connects to wallets like MetaMask
 */ const injected = new injected_connector_namespaceObject.InjectedConnector({
    supportedNetworks: [
        1,
        3,
        4,
        5,
        42
    ]
});


/***/ }),

/***/ 235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(54);
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(519);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/wallet/connectors.js + 1 modules
var connectors = __webpack_require__(649);
;// CONCATENATED MODULE: ./components/wallet/metaMaskProvider.js

/****************************************************
 * Creates all the required hooks to use with
 * MetaMask
 */ 


function MetamaskProvider({ children  }) {
    const { active: networkActive , error: networkError , activate: activateNetwork ,  } = (0,core_.useWeb3React)();
    const { 0: loaded , 1: setLoaded  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        connectors/* injected.isAuthorized */.L.isAuthorized().then((isAuthorized)=>{
            setLoaded(true);
            if (isAuthorized && !networkActive && !networkError) {
                activateNetwork(connectors/* injected */.L);
            }
        }).catch(()=>{
            setLoaded(true);
        });
    }, [
        activateNetwork,
        networkActive,
        networkError
    ]);
    if (loaded) {
        return children;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "Loading"
    }));
}
/* harmony default export */ const metaMaskProvider = (MetamaskProvider);

;// CONCATENATED MODULE: ./pages/_app.js




function getLibrary(provider) {
    return new (external_web3_default())(provider);
}
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(core_.Web3ReactProvider, {
        getLibrary: getLibrary,
        children: /*#__PURE__*/ jsx_runtime_.jsx(metaMaskProvider, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 54:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(235));
module.exports = __webpack_exports__;

})();