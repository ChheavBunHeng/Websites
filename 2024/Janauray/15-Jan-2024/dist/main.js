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

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    const form = document.getElementById('myForm');\r\n\r\n    form.addEventListener('submit', function (event) {\r\n        event.preventDefault();\r\n\r\n        const username = document.querySelector('.username').value;\r\n        const password = document.querySelector('.password').value;\r\n\r\n        const jsonDATA = {\r\n            username: username,\r\n            password: password\r\n        };\r\n\r\n        fetch('http://localhost:3000/insert', {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify(jsonDATA),\r\n        })\r\n        .then(response => response.text())\r\n        .then(data => {\r\n            console.log(data);\r\n            // Handle the response from the server as needed\r\n        })\r\n        .catch(error => {\r\n            console.error('Error:', error);\r\n            // Handle errors\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://15-jan-2024/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;