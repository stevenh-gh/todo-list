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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\n\n\n\nconst projects = document.querySelector('#projects')\n\n//add 'add project' button\nlet addNewProjectBtn = document.createElement('BUTTON')\naddNewProjectBtn.innerText = 'Add new project'\naddNewProjectBtn.setAttribute('id', 'addNewProjectBtn')\nprojects.appendChild(addNewProjectBtn)\n\naddNewProjectBtn.addEventListener('click', () => {\n  if (projectFormDiv.style.display === 'none') {\n    projectFormDiv.style.display = 'block'\n  } else {\n    projectFormDiv.style.display = 'none'\n  }\n})\n\nlet projectFormDiv = document.createElement('DIV')\nprojectFormDiv.style.display = 'none'\nprojectFormDiv.innerHTML = `\n  <form id='projectFormDiv'>\n    <input type='text' name='projectName' placeholder='project name'><br>\n    <input id='projectFormSubmit' type='submit' value='Add project'> \n  </form>\n`\nlet projectFormSubmit = projectFormDiv.querySelector('#projectFormSubmit')\nprojectFormSubmit.addEventListener('click', e => {\n  e.preventDefault()\n  console.log(e)\n\n  let form = document.forms.projectFormDiv\n  let fd = new FormData(form)\n\n  console.log(fd.get('projectName'))\n\n  let p = new _project__WEBPACK_IMPORTED_MODULE_1__.default(fd.get('projectName'))\n  let pTab = p.projectTab()\n  let pSpace = p.projectSpace()\n\n  pTab.appendChild(pSpace)\n  projects.appendChild(pTab)\n\n  form.reset()\n\n})\n\nprojects.appendChild(projectFormDiv)\n\nlet p = new _project__WEBPACK_IMPORTED_MODULE_1__.default('default')\n// make default project (the clickable tab)\n// let defaultProject = document.createElement('DIV')\n// defaultProject.setAttribute('class', 'project')\n// defaultProject.setAttribute('id', 'defaultProject')\n// defaultProject.innerHTML = `<span>Default</span>`\nlet defaultProject = p.projectTab()\n\n//make default project's space\n// let defaultProjectContent = document.createElement('DIV')\n// defaultProjectContent.setAttribute('class', 'content')\n// defaultProjectContent.setAttribute('id', 'defaultProjectContent')\n// defaultProjectContent.style.display = 'none'\nlet defaultProjectContent = p.projectSpace()\n\nlet t = new _todo__WEBPACK_IMPORTED_MODULE_0__.default('test title', 'test description', '5/5/30', 5)\n\nfunction makeTodoDiv(todo) {\n\n  let todoDiv = todo.genDiv()\n  let todoTitle = todo.genTitle()\n  let todoDescription = todo.genDescription()\n  let todoDueDate = todo.genDueDate()\n  let todoPriority = todo.genPriority()\n\n  todoDiv.appendChild(todoTitle)\n  todoDiv.appendChild(todoDescription)\n  todoDiv.appendChild(todoDueDate)\n  todoDiv.appendChild(todoPriority)\n\n  todoDiv.addEventListener('click', () => {\n    if (todoDueDate.style.display === 'none') {\n      todoDueDate.style.display = 'block'\n      todoPriority.style.display = 'block'\n    } else {\n      todoDueDate.style.display = 'none'\n      todoPriority.style.display = 'none'\n    }\n  })\n\n  return todoDiv\n}\n\nlet todoDiv = makeTodoDiv(t)\n\n\ndefaultProjectContent.appendChild(todoDiv)\n\ndefaultProject.appendChild(defaultProjectContent)\n\n//add 'add new todo' button\nlet addTodoBtn = document.createElement('BUTTON')\naddTodoBtn.innerText = 'Add todo'\ndefaultProject.appendChild(addTodoBtn)\n\n\n// add todo form\nlet formDiv = document.createElement('DIV')\nformDiv.style.display = 'none'\nformDiv.innerHTML = `\n  <form id='addTodoForm'>\n    <input name='title' type='text' placeholder='title'><br>\n    <input name='description' type='text' placeholder='description'><br>\n    <input name='priority' type='number' max=5 placeholder='priority'><br>\n    <input name='date' type='date'><br>\n    <input id='addTodoSubmit' type='submit' value='Add new todo'>\n  </form>\n`\n\ndefaultProject.appendChild(formDiv)\n\n\nprojects.appendChild(defaultProject)\n\n\ndefaultProject.addEventListener('click', () => {\n  let tabContent = document.querySelectorAll('.content')\n  tabContent.forEach(tc => {\n    tc.style.display = 'none'\n  })\n  defaultProjectContent.style.display = 'block'\n})\n\nfunction makeNewTodo(e) {\n\n  e.preventDefault()\n\n  let form = document.forms.addTodoForm\n  let fd = new FormData(form)\n\n  let t = makeTodoDiv(new _todo__WEBPACK_IMPORTED_MODULE_0__.default(fd.get('title'), fd.get('description'), fd.get('date'), fd.get('priority')))\n  defaultProjectContent.appendChild(t)\n\n  form.reset()\n}\n\ndocument.querySelector('#addTodoSubmit').addEventListener('click', makeNewTodo)\n\n//when click on todo, toggle\naddTodoBtn.addEventListener('click', () => {\n\n  if (formDiv.style.display === 'none') {\n    formDiv.style.display = 'block'\n  } else {\n    formDiv.style.display = 'none'\n  }\n})\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\n\n\nclass Project {\n  constructor(name) {\n    this.name = name\n  }\n\n  projectTab() {\n    let project = document.createElement('DIV')\n    project.setAttribute('class', 'project')\n    project.setAttribute('id', `${this.name}project`)\n    project.innerHTML = `<span>${this.name}</span>`\n    return project\n  }\n\n  projectSpace() {\n    let projectContent = document.createElement('DIV')\n    projectContent.setAttribute('class', 'content')\n    projectContent.setAttribute('id', `${this.name}ProjectContent`)\n    projectContent.style.display = 'none'\n    return projectContent\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\n\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title\n    this.description = description\n    this.dueDate = dueDate\n    this.priority = priority\n  }\n\n  genDiv() {\n    let todoDiv = document.createElement('DIV')\n    todoDiv.setAttribute('class', 'todo')\n    todoDiv.setAttribute('id', `${this.title}`)\n    return todoDiv\n  }\n\n  genTitle() {\n    let todoTitle = document.createElement('DIV')\n    todoTitle.setAttribute('class', 'todoTitle')\n    todoTitle.innerText = this.title\n    return todoTitle\n  }\n\n  genDescription() {\n    let todoDescription = document.createElement('DIV')\n    todoDescription.setAttribute('class', 'todoDescription')\n    todoDescription.innerText = this.description\n    return todoDescription\n  }\n\n  genDueDate() {\n    let todoDueDate = document.createElement('DIV')\n    todoDueDate.setAttribute('class', 'todoDueDate')\n    todoDueDate.innerText = this.dueDate\n    todoDueDate.style.display = 'none'\n    return todoDueDate\n  }\n\n  genPriority() {\n    let todoPriority = document.createElement('DIV')\n    todoPriority.setAttribute('class', 'todoPriority')\n    todoPriority.innerText = this.priority\n    todoPriority.style.display = 'none'\n    return todoPriority\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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