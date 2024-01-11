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

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ (() => {

eval("const RegisterBTN = document.querySelector(\".RegisterBTN\"); \r\n\r\nRegisterBTN.addEventListener(\"click\", () => {\r\n    const jsonData = {\r\n        Date: document.querySelector(\".reservation-day\").value,\r\n        Time: document.querySelector(\".reservation-time\").value,\r\n        Number_of_people: document.querySelector(\".number-of-guest\").value,\r\n        PhoneNumber: document.querySelector(\".phone\").value,\r\n        Email: document.querySelector(\".email\").value,\r\n        SpecialRequest: document.querySelector(\".special-requests\").value    \r\n    };\r\n    var json = JSON.stringify(jsonData);\r\n    console.log(json);\r\n    ClearInput();\r\n});\r\n\r\nfunction ClearInput()\r\n{\r\n    document.querySelectorAll(\".reservations-form input\").forEach(function(element) {\r\n        element.value = \"\";\r\n    });   \r\n}   \n\n//# sourceURL=webpack://31-dec-2023/./src/reservations.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    // Function to generate a random hex color\r\n    function getRandomColor() {\r\n        const letters = '0123456789ABCDEF';\r\n        let color = '#';\r\n        for (let i = 0; i < 6; i++) {\r\n            color += letters[Math.floor(Math.random() * 16)];\r\n        }\r\n        return color;\r\n    }\r\n\r\n    // Get all container div elements\r\n    const containerDivs = document.querySelectorAll('#container div');\r\n\r\n    // Apply random background color to each container div\r\n    containerDivs.forEach(function (div) {\r\n        div.style.backgroundColor = getRandomColor();\r\n    });\r\n});\r\n\r\n// Scroll animation\r\nconst observer = new IntersectionObserver((entries) => {\r\n    entries.forEach((entry) => {\r\n        console.log(entry);\r\n        if (entry.isIntersecting) {\r\n            entry.target.classList.add('show');\r\n        } else {\r\n            entry.target.classList.remove(\"show\");\r\n        }\r\n    });\r\n});\r\n\r\nconst hiddenElements = document.querySelectorAll('.hidden');\r\nhiddenElements.forEach((el) => observer.observe(el));\r\n\r\n\n\n//# sourceURL=webpack://31-dec-2023/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/reservations.js"]();
/******/ 	
/******/ })()
;