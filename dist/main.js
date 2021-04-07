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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\n\n\nconst projects = document.querySelector('#projects')\n\n// make default project\nlet defaultProject = document.createElement('DIV')\ndefaultProject.setAttribute('class', 'project')\ndefaultProject.setAttribute('id', 'defaultProject')\ndefaultProject.innerText = 'Default'\n\n//make default project's space\nlet defaultProjectContent = document.createElement('DIV')\ndefaultProjectContent.setAttribute('class', 'content')\ndefaultProjectContent.setAttribute('id', 'defaultProject')\ndefaultProjectContent.style.display = 'none'\n\n// todo list\n\nlet t = new _todo__WEBPACK_IMPORTED_MODULE_0__.default('test title', 'test description', '5/5/30', 5)\nlet todo = t\nlet todoDiv = document.createElement('DIV')\ntodoDiv.setAttribute('class', 'todo')\ntodoDiv.setAttribute('id', `${todo.title}`)\n\n\n// divs for title and description\n\n// unexpanded ver.\n//========================================\nlet todoTitle = document.createElement('DIV')\ntodoTitle.setAttribute('class', 'todoTitle')\ntodoTitle.innerText = todo.title\ntodoDiv.appendChild(todoTitle)\n\nlet todoDescription = document.createElement('DIV')\ntodoDescription.setAttribute('class', 'todoDescription')\ntodoDescription.innerText = todo.description\ntodoDiv.appendChild(todoDescription)\n//===========================================\n\n\n//expanded ver.\nlet todoDueDate = document.createElement('DIV')\ntodoDueDate.setAttribute('class', 'todoDueDate')\ntodoDueDate.innerText = todo.dueDate\ntodoDueDate.style.display = 'none'\ntodoDiv.appendChild(todoDueDate)\n\nlet todoPriority = document.createElement('DIV')\ntodoPriority.setAttribute('class', 'todoPriority')\ntodoPriority.innerText = todo.priority\ntodoPriority.style.display = 'none'\ntodoDiv.appendChild(todoPriority)\n\ndefaultProjectContent.appendChild(todoDiv)\n\ndefaultProject.appendChild(defaultProjectContent)\n\nprojects.appendChild(defaultProject)\n\n\ndefaultProject.addEventListener('click', () => {\n  let tabContent = document.querySelectorAll('.content')\n  tabContent.forEach(tc => {\n    tc.style.display = 'none'\n  })\n  defaultProjectContent.style.display = 'block'\n})\n\n//when click on todo, toggle\ntodoDiv.addEventListener('click', () => {\n  if (todoDueDate.style.display === 'none') {\n    todoDueDate.style.display = 'block'\n    todoPriority.style.display = 'block'\n  } else {\n    todoDueDate.style.display = 'none'\n    todoPriority.style.display = 'none'\n  }\n})\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\n\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title\n    this.description = description\n    this.dueDate = dueDate\n    this.priority = priority\n  }\n\n  get title() {\n    return this._title\n  }\n\n  set title(value) {\n    this._title = value\n  }\n\n  get description() {\n    return this._description\n  }\n  set description(value) {\n    this._description = value\n  }\n\n  get dueDate() {\n    return this._dueDate\n  }\n  set dueDate(value) {\n    this._dueDate = value\n  }\n\n  get priority() {\n    return this._priority\n  }\n  set priority(value) {\n    this._priority = value\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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