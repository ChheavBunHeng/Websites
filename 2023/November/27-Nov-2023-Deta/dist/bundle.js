/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/fetchAndLoader.js":
/*!**********************************!*\
  !*** ./src/js/fetchAndLoader.js ***!
  \**********************************/
/***/ (() => {

eval("const fetchAndTargetClass = (url, TargetClass) =>{\r\n    fetch(url)\r\n    .then(res => res.text())\r\n    .then(data => document.querySelectorAll(`.${TargetClass}`).forEach(element => {\r\n        element.innerHTML = data;\r\n    }));\r\n};\r\nfetchAndTargetClass(\"\")\n\n//# sourceURL=webpack://27-nov-2023-deta/./src/js/fetchAndLoader.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("console.log(\"Hello world script\");\n\n//# sourceURL=webpack://27-nov-2023-deta/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/fetchAndLoader.js"]();
/******/ 	
/******/ })()
;