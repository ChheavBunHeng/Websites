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

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("console.log(\"Hello world from script\");\n\n//# sourceURL=webpack://28-nov-2023/./script.js?");

/***/ }),

/***/ "./src/js/fetchAndLoader.js":
/*!**********************************!*\
  !*** ./src/js/fetchAndLoader.js ***!
  \**********************************/
/***/ (() => {

eval("const fetchAndTargetClass = (url, TargetClass) => {\r\n    // Initiating a fetch request to the specified URL\r\n    fetch(url)\r\n        .then(res => res.text()) // Extracting the text content from the response\r\n        .then(data => {\r\n            // Updating the inner HTML of all elements with the specified class\r\n            document.querySelectorAll(`.${TargetClass}`).forEach(element => {\r\n                element.innerHTML = data;\r\n            });\r\n        });\r\n};\r\n\r\n// Invoking the fetchAndTargetClass function with a specific URL and class\r\nfetchAndTargetClass(\"/Websites/November/28-Nov-2023/Pages/Navbar.html\", \"Navbar\");\r\n\r\n// Logging a message to the console\r\nconsole.log(\"Hello world from loader\");\r\n\n\n//# sourceURL=webpack://28-nov-2023/./src/js/fetchAndLoader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/fetchAndLoader.js"]();
/******/ 	
/******/ })()
;