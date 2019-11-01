/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/index.js":
/*!*************************!*\
  !*** ./assets/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_fullscreen_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/fullscreen-menu.js */ \"./assets/js/fullscreen-menu.js\");\n\n\nObject(_js_fullscreen_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"buildToggleMenu\"])();\n\n\n//# sourceURL=webpack:///./assets/index.js?");

/***/ }),

/***/ "./assets/js/fullscreen-menu.js":
/*!**************************************!*\
  !*** ./assets/js/fullscreen-menu.js ***!
  \**************************************/
/*! exports provided: buildToggleMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildToggleMenu\", function() { return buildToggleMenu; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./assets/js/utils.js\");\n\n\nconst buildToggleMenu = params => {\n  const menuBtn = document.getElementById(\"main-nav__button\");\n  const bodyEl = document.querySelector(\"body\");\n  const navEL = document.getElementById(\"navmenu\");\n\n  console.log(menuBtn);\n\n  // Evet listenere for menu button to active menu Layer\n  if (menuBtn) {\n    menuBtn.addEventListener(\"click\", e => {\n      console.log(\"test\");\n      Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleLayer\"])(\n        { elButton: menuBtn, class: \"active\" },\n        { elLayer: navEL, class: \"hidden\" }\n      );\n    });\n  }\n};\n\n\n//# sourceURL=webpack:///./assets/js/fullscreen-menu.js?");

/***/ }),

/***/ "./assets/js/utils.js":
/*!****************************!*\
  !*** ./assets/js/utils.js ***!
  \****************************/
/*! exports provided: toggleLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleLayer\", function() { return toggleLayer; });\n// function for toggle button and another element\nconst toggleLayer = (button, layer) => {\n  console.log(\"here?\");\n  button.elButton.classList.toggle(button.class);\n  layer.elLayer.classList.toggle(layer.class);\n};\n\n\n//# sourceURL=webpack:///./assets/js/utils.js?");

/***/ })

/******/ });