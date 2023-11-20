/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contactBox = document.createElement(\"div\");\n    contactBox.classList.add(\"contactbox\");\n    const title = document.createElement(\"h3\");\n    title.textContent = \"Contact Us\";\n    const email = document.createElement(\"h4\");\n    email.textContent = \"Email\";\n    const emailP = document.createElement(\"p\");\n    emailP.textContent = \"vegangrill@gmail.com\";\n    const phone = document.createElement(\"h4\");\n    phone.textContent = \"Phone number\";\n    const phoneP = document.createElement(\"p\");\n    phoneP.textContent = \"+34-656-656-567\";\n    const information = document.createElement(\"h4\");\n    information.textContent = \"INFORMATION\";\n    const informationP = document.createElement(\"p\");\n    informationP.textContent = \"We are located in Squirrel street, number 66. We are open from Mondays to Sundays from 11pm to 7am. If you want to make a reservation send us an email or call us at the number provided. We can't wait to see you!\"\n \n    contactBox.appendChild(title);\n    contactBox.appendChild(email);\n    contactBox.appendChild(emailP);\n    contactBox.appendChild(phone);\n    contactBox.appendChild(phoneP);\n    contactBox.appendChild(information);\n    contactBox.appendChild(informationP);\n    content.appendChild(contactBox);\n\n    return contactBox\n\n}\n\nfunction loadContact() {\n    const content = document.getElementById(\"content\");\n    content.appendChild(createContact())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\nfunction createHome() {\n   const content = document.getElementById(\"content\");\n   const header = document.createElement(\"div\");\n   const link1 = document.createElement(\"span\");\n   const link2 = document.createElement(\"span\");\n   const home = document.createElement(\"div\");\n   const title = document.createElement(\"p\");\n   const description = document.createElement(\"p\");\n   const button = document.createElement(\"button\");\n   header.classList.add(\"header\");\n   link1.classList.add(\"link\");\n   link1.textContent = \"MENU\"\n   link2.textContent = \"CONTACT US\"\n   link2.classList.add(\"link\");\n   home.classList.add(\"home\");\n   title.classList.add(\"title\");\n   description.classList.add(\"description\");\n   button.classList.add(\"button\")\n   title.textContent = \"Vegan Grill\";\n   description.textContent = \"Too good to no be plant based\"\n   button.textContent = \"See the menu\"\n   home.appendChild(title);\n   home.appendChild(description);\n   home.appendChild(button);\n   header.appendChild(link1);\n   header.appendChild(link2);\n   content.appendChild(header);\n   content.appendChild(home);\n\n   button.addEventListener(\"click\", ()=>{\n    while (content.firstChild) {\n    content.removeChild(content.lastChild);\n    }\n    content.appendChild(header);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n   })\n\n   link1.addEventListener(\"click\", ()=> {\n    while (content.firstChild) {\n    content.removeChild(content.lastChild);\n    }\n    content.appendChild(header);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n   })\n\n   link2.addEventListener(\"click\", ()=> {\n    while (content.firstChild) {\n    content.removeChild(content.lastChild);\n    }\n    content.appendChild(header);\n    (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n   })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction createMenu() {\n    const content = document.getElementById(\"content\")\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"menu\")\n    const mainTitle = document.createElement(\"h1\");\n    mainTitle.classList.add(\"maintitle\");\n    mainTitle.textContent = \"Our Menu\"\n\n    content.appendChild(mainTitle);\n    content.appendChild(menu);\n    \n    menu.appendChild(createDish(\"Shiitake burger\", \"Shiitake and soy protein burger with maple syrup, chilli and lime dressing, fried caramelised onions and seasonal veggies\"));\n    menu.appendChild(createDish(\"Mac n' Cheese\", \"Macaroni with creamy cashew and lemon cheese sauce, with vegan ham and topped with oregano and pepper\"));\n    menu.appendChild(createDish(\"Bolognese Lasagna\", \"Lasagna filled with lentil and texturized soy bolognese, with homemade tomato sauce and vegan parmesan\"));\n    menu.appendChild(createDish(\"White pizza\", \"Creamy pizza made with vegan mozzarella, vegan parmesan and vegan blue cheese, topped with sauteéd onions, garlic oil and black kalamata olives\"));\n    menu.appendChild(createDish(\"No-chicken croquettes\", \"Croquettes filled with garlic cheesy beshamel, shiitake mushrooms, onion and vegan no-chicken\"));\n    menu.appendChild(createDish(\"Teriyaki Bowl\", \"Rice bowl with no-beef, avocado, satay tempeh, edamame, corn, spring onion and with a dressing of sesame teriyaki sauce\"));\n\n    \n    return menu;\n}\n\nfunction createDish(name, description) {\n    const dishBox = document.createElement(\"div\")\n    dishBox.classList.add(\"dishbox\")\n\n    const dishTitle = document.createElement(\"h3\");\n    dishTitle.textContent = name;\n    const dishDescription = document.createElement(\"p\");\n    dishDescription.textContent = description;\n\n    dishBox.appendChild(dishTitle);\n    dishBox.appendChild(dishDescription);\n\n    return dishBox; \n}\n\nfunction loadMenu() {\n    const content = document.getElementById(\"content\");\n    content.style.justifyContent = \"space-between\"\n    content.appendChild(createMenu())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;