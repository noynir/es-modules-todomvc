/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
/******/
/******/
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lazy/bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lazy/app.js":
/*!*************************!*\
  !*** ./src/lazy/app.js ***!
  \*************************/
/*! exports provided: onLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoad\", function() { return onLoad; });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/lazy/todo.js\");\n\n\nfunction onLoad() { // eslint-disable-line import/prefer-default-export\n  Object(_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"updateTodo\"])()\n}\n\n//# sourceURL=webpack:///./src/lazy/app.js?");

/***/ }),

/***/ "./src/lazy/bootstrap.js":
/*!*******************************!*\
  !*** ./src/lazy/bootstrap.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/lazy/app.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./src/lazy/helpers.js\");\n/* eslint no-console:0 */\n// import {install as offlineInstall} from 'offline-plugin/runtime'\n\n\n\n\nObject(_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"$on\"])(window, 'load', _app_js__WEBPACK_IMPORTED_MODULE_0__[\"onLoad\"])\nObject(_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"$on\"])(window, 'hashchange', _app_js__WEBPACK_IMPORTED_MODULE_0__[\"onLoad\"])\n// if (process.env.NODE_ENV === 'production') {\n//   offlineInstall()\n// }\n\n\n//# sourceURL=webpack:///./src/lazy/bootstrap.js?");

/***/ }),

/***/ "./src/lazy/controller.js":
/*!********************************!*\
  !*** ./src/lazy/controller.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n/**\n* Takes a model and view and acts as the controller between them\n*\n* @constructor\n* @param {object} model The model instance\n* @param {object} view The view instance\n*/\nfunction Controller(model, view) {\n  var that = this\n  that.model = model\n  that.view = view\n\n  that.view.bind('newTodo', function(title) {\n    that.addItem(title)\n  })\n\n  that.view.bind('itemEdit', function(item) {\n    that.editItem(item.id)\n  })\n\n  that.view.bind('itemEditDone', function(item) {\n    that.editItemSave(item.id, item.title)\n  })\n\n  that.view.bind('itemEditCancel', function(item) {\n    that.editItemCancel(item.id)\n  })\n\n  that.view.bind('itemRemove', function(item) {\n    that.removeItem(item.id)\n  })\n\n  that.view.bind('itemToggle', function(item) {\n    that.toggleComplete(item.id, item.completed)\n  })\n\n  that.view.bind('removeCompleted', function() {\n    that.removeCompletedItems()\n  })\n\n  that.view.bind('toggleAll', function(status) {\n    that.toggleAll(status.completed)\n  })\n}\n\n/**\n* Loads and initialises the view\n*\n* @param {string} '' | 'active' | 'completed'\n*/\nController.prototype.setView = function(locationHash) {\n  var route = locationHash.split('/')[1]\n  var page = route || ''\n  this._updateFilterState(page)\n}\n\n/**\n* An event to fire on load. Will get all items and display them in the\n* todo-list\n*/\nController.prototype.showAll = function() {\n  var that = this\n  that.model.read(function(data) {\n    that.view.render('showEntries', data)\n  })\n}\n\n/**\n* Renders all active tasks\n*/\nController.prototype.showActive = function() {\n  var that = this\n  that.model.read({completed: false}, function(data) {\n    that.view.render('showEntries', data)\n  })\n}\n\n/**\n* Renders all completed tasks\n*/\nController.prototype.showCompleted = function() {\n  var that = this\n  that.model.read({completed: true}, function(data) {\n    that.view.render('showEntries', data)\n  })\n}\n\n/**\n* An event to fire whenever you want to add an item. Simply pass in the event\n* object and it'll handle the DOM insertion and saving of the new item.\n*/\nController.prototype.addItem = function(title) {\n  var that = this\n\n  if (title.trim() === '') {\n    return\n  }\n\n  that.model.create(title, function() {\n    that.view.render('clearNewTodo')\n    that._filter(true)\n  })\n}\n\n/*\n* Triggers the item editing mode.\n*/\nController.prototype.editItem = function(id) {\n  var that = this\n  that.model.read(id, function(data) {\n    that.view.render('editItem', {id, title: data[0].title})\n  })\n}\n\n/*\n* Finishes the item editing mode successfully.\n*/\nController.prototype.editItemSave = function(id, title) {\n  var that = this\n  if (title.trim()) {\n    that.model.update(id, {title}, function() {\n      that.view.render('editItemDone', {id, title})\n    })\n  } else {\n    that.removeItem(id)\n  }\n}\n\n/*\n* Cancels the item editing mode.\n*/\nController.prototype.editItemCancel = function(id) {\n  var that = this\n  that.model.read(id, function(data) {\n    that.view.render('editItemDone', {id, title: data[0].title})\n  })\n}\n\n/**\n* By giving it an ID it'll find the DOM element matching that ID,\n* remove it from the DOM and also remove it from storage.\n*\n* @param {number} id The ID of the item to remove from the DOM and\n* storage\n*/\nController.prototype.removeItem = function(id) {\n  var that = this\n  that.model.remove(id, function() {\n    that.view.render('removeItem', id)\n  })\n\n  that._filter()\n}\n\n/**\n* Will remove all completed items from the DOM and storage.\n*/\nController.prototype.removeCompletedItems = function() {\n  var that = this\n  that.model.read({completed: true}, function(data) {\n    data.forEach(function(item) {\n      that.removeItem(item.id)\n    })\n  })\n\n  that._filter()\n}\n\n/**\n* Give it an ID of a model and a checkbox and it will update the item\n* in storage based on the checkbox's state.\n*\n* @param {number} id The ID of the element to complete or uncomplete\n* @param {object} checkbox The checkbox to check the state of complete\n*                          or not\n* @param {boolean|undefined} silent Prevent re-filtering the todo items\n*/\nController.prototype.toggleComplete = function(id, completed, silent) {\n  var that = this\n  that.model.update(id, {completed}, function() {\n    that.view.render('elementComplete', {\n      id,\n      completed,\n    })\n  })\n\n  if (!silent) {\n    that._filter()\n  }\n}\n\n/**\n* Will toggle ALL checkboxes' on/off state and completeness of models.\n* Just pass in the event object.\n*/\nController.prototype.toggleAll = function(completed) {\n  var that = this\n  that.model.read({completed: !completed}, function(data) {\n    data.forEach(function(item) {\n      that.toggleComplete(item.id, completed, true)\n    })\n  })\n\n  that._filter()\n}\n\n/**\n* Updates the pieces of the page which change depending on the remaining\n* number of todos.\n*/\nController.prototype._updateCount = function() {\n  var that = this\n  that.model.getCount(function(todos) {\n    that.view.render('updateElementCount', todos.active)\n    that.view.render('clearCompletedButton', {\n      completed: todos.completed,\n      visible: todos.completed > 0\n    })\n\n    that.view.render('toggleAll', {checked: todos.completed === todos.total})\n    that.view.render('contentBlockVisibility', {visible: todos.total > 0})\n  })\n}\n\n/**\n* Re-filters the todo items, based on the active route.\n* @param {boolean|undefined} force  forces a re-painting of todo items.\n*/\nController.prototype._filter = function(force) {\n  var activeRoute = this._activeRoute.charAt(0).toUpperCase() + this._activeRoute.substr(1)\n\n  // Update the elements on the page, which change with each completed todo\n  this._updateCount()\n\n  // If the last active route isn't \"All\", or we're switching routes, we\n  // re-create the todo item elements, calling:\n  //   this.show[All|Active|Completed]();\n  if (force || this._lastActiveRoute !== 'All' || this._lastActiveRoute !== activeRoute) {\n    this['show' + activeRoute]()\n  }\n\n  this._lastActiveRoute = activeRoute\n}\n\n/**\n* Simply updates the filter nav's selected states\n*/\nController.prototype._updateFilterState = function(currentPage) {\n  // Store a reference to the active route, allowing us to re-filter todo\n  // items as they are marked complete or incomplete.\n  currentPage = currentPage.split('?')[0]\n  this._activeRoute = currentPage\n\n  if (currentPage === '') {\n    this._activeRoute = 'All'\n  }\n\n  this._filter()\n\n  this.view.render('setFilter', currentPage)\n}\n\n\n//# sourceURL=webpack:///./src/lazy/controller.js?");

/***/ }),

/***/ "./src/lazy/helpers.js":
/*!*****************************!*\
  !*** ./src/lazy/helpers.js ***!
  \*****************************/
/*! exports provided: qs, qsa, $on, $delegate, $parent, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"qs\", function() { return qs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"qsa\", function() { return qsa; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$on\", function() { return $on; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$delegate\", function() { return $delegate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$parent\", function() { return $parent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\n\n\n// Get element(s) by CSS selector:\nfunction qs(selector, scope) {\n  return (scope || document).querySelector(selector)\n}\n\nfunction qsa(selector, scope) {\n  return (scope || document).querySelectorAll(selector)\n}\n\n// addEventListener wrapper:\nfunction $on(target, type, callback, useCapture) {\n  target.addEventListener(type, callback, !!useCapture)\n}\n\n// Attach a handler to event for all elements that match the selector,\n// now or in the future, based on a root element\nfunction $delegate(target, selector, type, handler) {\n  // https://developer.mozilla.org/en-US/docs/Web/Events/blur\n  var useCapture = type === 'blur' || type === 'focus'\n  $on(target, type, dispatchEvent, useCapture)\n\n  function dispatchEvent(event) {\n    var targetElement = event.target\n    var potentialElements = qsa(selector, target)\n    var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0\n\n    if (hasMatch) {\n      handler.call(targetElement, event)\n    }\n  }\n}\n\n// Find the element's parent with the given tag name:\n// $parent(qs('a'), 'div');\nfunction $parent(element, tagName) {\n  if (!element.parentNode) {\n    return undefined\n  }\n  if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {\n    return element.parentNode\n  }\n  return $parent(element.parentNode, tagName)\n}\n\n// removes an element from an array\n// const x = [1,2,3]\n// remove(x, 2)\n// x ~== [1,3]\nfunction remove(array, thing) {\n  const index = array.indexOf(thing)\n  if (index === -1) {\n    return array\n  }\n  array.splice(index, 1)\n}\n\n// Allow for looping on nodes by chaining:\n// qsa('.foo').forEach(function () {})\nNodeList.prototype.forEach = Array.prototype.forEach\n\n\n//# sourceURL=webpack:///./src/lazy/helpers.js?");

/***/ }),

/***/ "./src/lazy/model.js":
/*!***************************!*\
  !*** ./src/lazy/model.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n\n/**\n* Creates a new Model instance and hooks up the storage.\n*\n* @constructor\n* @param {object} storage A reference to the client side storage class\n*/\nfunction Model(storage) {\n  this.storage = storage\n}\n\n/**\n* Creates a new todo model\n*\n* @param {string} [title] The title of the task\n* @param {function} [callback] The callback to fire after the model is created\n*/\nModel.prototype.create = function(title, callback) {\n  title = title || ''\n  callback = callback || function() {\n  }\n\n  var newItem = {\n    title: title.trim(),\n    completed: false\n  }\n\n  this.storage.save(newItem, callback)\n}\n\n/**\n * Finds and returns a model in storage. If no query is given it'll simply\n * return everything. If you pass in a string or number it'll look that up as\n * the ID of the model to find. Lastly, you can pass it an object to match against.\n *\n * @param {string|number|object} [query] A query to match models against\n * @param {function} [callback] The callback to fire after the model is found\n *\n * @example\n * model.read(1, func); // Will find the model with an ID of 1\n * model.read('1'); // Same as above\n * //Below will find a model with foo equalling bar and hello equalling world.\n * model.read({ foo: 'bar', hello: 'world' });\n */\nModel.prototype.read = function(query, callback) {\n  var queryType = typeof query\n  callback = callback || function() {\n  }\n\n  if (queryType === 'function') {\n    callback = query\n    return this.storage.findAll(callback)\n  } else if (queryType === 'string' || queryType === 'number') {\n    query = parseInt(query, 10)\n    this.storage.find({id: query}, callback)\n  } else {\n    this.storage.find(query, callback)\n  }\n  return undefined\n}\n\n/**\n* Updates a model by giving it an ID, data to update, and a callback to fire when\n* the update is complete.\n*\n* @param {number} id The id of the model to update\n* @param {object} data The properties to update and their new value\n* @param {function} callback The callback to fire when the update is complete.\n*/\nModel.prototype.update = function(id, data, callback) {\n  this.storage.save(data, callback, id)\n}\n\n/**\n* Removes a model from storage\n*\n* @param {number} id The ID of the model to remove\n* @param {function} callback The callback to fire when the removal is complete.\n*/\nModel.prototype.remove = function(id, callback) {\n  this.storage.remove(id, callback)\n}\n\n/**\n* WARNING: Will remove ALL data from storage.\n*\n* @param {function} callback The callback to fire when the storage is wiped.\n*/\nModel.prototype.removeAll = function(callback) {\n  this.storage.drop(callback)\n}\n\n/**\n* Returns a count of all todos\n*/\nModel.prototype.getCount = function(callback) {\n  var todos = {\n    active: 0,\n    completed: 0,\n    total: 0\n  }\n\n  this.storage.findAll(function(data) {\n    data.forEach(function(todo) {\n      if (todo.completed) {\n        todos.completed++\n      } else {\n        todos.active++\n      }\n\n      todos.total++\n    })\n    callback(todos)\n  })\n}\n\n\n//# sourceURL=webpack:///./src/lazy/model.js?");

/***/ }),

/***/ "./src/lazy/store.js":
/*!***************************!*\
  !*** ./src/lazy/store.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/lazy/helpers.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\n\n/**\n * Creates a new client side storage object and will create an empty\n * collection if no collection already exists.\n *\n * @param {string} name The name of our DB we want to use\n * @param {function} callback Our fake DB uses callbacks because in\n * real life you probably would be making AJAX calls\n */\nfunction Store(name, callback) {\n  callback = callback || function() {\n  }\n\n  this._dbName = name\n\n  if (!localStorage[name]) {\n    var data = {\n      todos: []\n    }\n\n    localStorage[name] = JSON.stringify(data)\n  }\n\n  callback.call(this, JSON.parse(localStorage[name]))\n  this.subscribers = []\n}\n\nStore.prototype.subscribe = function(subscriber) {\n  this.subscribers.push(subscriber)\n  return () => Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"remove\"])(this.subscribers, subscriber)\n}\n\nStore.prototype._notify = function() {\n  this.subscribers.forEach(s => s())\n}\n\n/**\n* Finds items based on a query given as a JS object\n*\n* @param {object} query The query to match against (i.e. {foo: 'bar'})\n* @param {function} callback   The callback to fire when the query has\n* completed running\n*\n* @example\n* db.find({foo: 'bar', hello: 'world'}, function (data) {\n*   // data will return any items that have foo: bar and\n*   // hello: world in their properties\n* });\n*/\nStore.prototype.find = function(query, callback) {\n  if (!callback) {\n    return\n  }\n\n  var todos = JSON.parse(localStorage[this._dbName]).todos\n\n  callback.call(this, todos.filter(function(todo) {\n    for (var q in query) {\n      if (query[q] !== todo[q]) {\n        return false\n      }\n    }\n    return true\n  }))\n}\n\n/**\n* Will retrieve all data from the collection\n*\n* @param {function} callback The callback to fire upon retrieving data\n*/\nStore.prototype.findAll = function(callback) {\n  callback = callback || function() {\n  }\n  callback.call(this, JSON.parse(localStorage[this._dbName]).todos)\n}\n\n/**\n* Will save the given data to the DB. If no item exists it will create a new\n* item, otherwise it'll simply update an existing item's properties\n*\n* @param {object} updateData The data to save back into the DB\n* @param {function} callback The callback to fire after saving\n* @param {number} id An optional param to enter an ID of an item to update\n*/\nStore.prototype.save = function(updateData, callback, id) {\n  var data = JSON.parse(localStorage[this._dbName])\n  var todos = data.todos\n\n  callback = callback || function() {\n  }\n\n  // If an ID was actually given, find the item and update each property\n  if (id) {\n    for (var i = 0; i < todos.length; i++) {\n      if (todos[i].id === id) {\n        for (var key in updateData) { // eslint-disable-line guard-for-in\n          todos[i][key] = updateData[key]\n        }\n        break\n      }\n    }\n\n    localStorage[this._dbName] = JSON.stringify(data)\n    callback.call(this, JSON.parse(localStorage[this._dbName]).todos)\n  } else {\n    // Generate an ID\n    updateData.id = new Date().getTime()\n\n    todos.push(updateData)\n    localStorage[this._dbName] = JSON.stringify(data)\n    callback.call(this, [updateData])\n  }\n  this._notify()\n}\n\n/**\n* Will remove an item from the Store based on its ID\n*\n* @param {number} id The ID of the item you want to remove\n* @param {function} callback The callback to fire after saving\n*/\nStore.prototype.remove = function(id, callback) {\n  var data = JSON.parse(localStorage[this._dbName])\n  var todos = data.todos\n\n  for (var i = 0; i < todos.length; i++) {\n    if (todos[i].id === id) {\n      todos.splice(i, 1)\n      break\n    }\n  }\n\n  localStorage[this._dbName] = JSON.stringify(data)\n  callback.call(this, JSON.parse(localStorage[this._dbName]).todos)\n  this._notify()\n}\n\n/**\n* Will drop all storage and start fresh\n*\n* @param {function} callback The callback to fire after dropping the data\n*/\nStore.prototype.drop = function(callback) {\n  localStorage[this._dbName] = JSON.stringify({todos: []})\n  callback.call(this, JSON.parse(localStorage[this._dbName]).todos)\n  this._notify()\n}\n\n\n//# sourceURL=webpack:///./src/lazy/store.js?");

/***/ }),

/***/ "./src/lazy/todo.js":
/*!**************************!*\
  !*** ./src/lazy/todo.js ***!
  \**************************/
/*! exports provided: updateTodo, getTodo, subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTodo\", function() { return updateTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodo\", function() { return getTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subscribe\", function() { return subscribe; });\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./src/lazy/view.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ \"./src/lazy/controller.js\");\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ \"./src/lazy/model.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.js */ \"./src/lazy/store.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ \"./src/lazy/helpers.js\");\n\n\n\n\n\n\n\n\nlet todo;\nconst subscribers = [];\nlet Template;\n/**\n * Sets up a brand new Todo list.\n *\n * @param {string} name The name of your new to do list.\n */\nfunction Todo(name) {\n  this.storage = new _store_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](name)\n  this.model = new _model_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.storage)\n  this.template = new Template()\n  this.view = new _view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.template)\n  this.controller = new _controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.model, this.view)\n}\n\nasync function updateTodo() {\n\n    console.time('lazy load module');\n        const templateModule = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./template.js */ \"./src/lazy/template.js\"));\n    console.timeEnd('lazy load module');\n    Template = templateModule.default;\n    todo = new Todo('todos-vanillajs')\n    todo.controller.setView(document.location.hash)\n    subscribers.forEach(s => s())\n}\n\nfunction getTodo() {\n  return todo\n}\n\nfunction subscribe(cb) {\n  subscribers.push(cb)\n  return function unsubscribe() {\n    Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__[\"remove\"])(subscribers, cb)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/lazy/todo.js?");

/***/ }),

/***/ "./src/lazy/view.js":
/*!**************************!*\
  !*** ./src/lazy/view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/lazy/helpers.js\");\n/* eslint no-invalid-this: 0, complexity:[2, 9] */\n\n\n/**\n * View that abstracts away the browser's DOM completely.\n * It has two simple entry points:\n *\n *   - bind(eventName, handler)\n *     Takes a todo application event and registers the handler\n *   - render(command, parameterObject)\n *     Renders the given command with the options\n */\nclass View {\n  constructor(template) {\n    this.template = template\n\n    this.ENTER_KEY = 13\n    this.ESCAPE_KEY = 27\n\n    this.$todoList = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.todo-list')\n    this.$todoItemCounter = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.todo-count')\n    this.$clearCompleted = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.clear-completed')\n    this.$main = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.main')\n    this.$footer = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.footer')\n    this.$toggleAll = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.toggle-all')\n    this.$newTodo = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.new-todo')\n  }\n\n  _removeItem(id) {\n    var elem = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('[data-id=\"' + id + '\"]')\n\n    if (elem) {\n      this.$todoList.removeChild(elem)\n    }\n  }\n\n  _clearCompletedButton(completedCount, visible) {\n    this.$clearCompleted.innerHTML = this.template.clearCompletedButton(completedCount)\n    this.$clearCompleted.style.display = visible ? 'block' : 'none'\n  }\n\n  _editItemDone(id, title) {\n    var listItem = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('[data-id=\"' + id + '\"]')\n\n    if (!listItem) {\n      return\n    }\n\n    var input = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('input.edit', listItem)\n    listItem.removeChild(input)\n\n    listItem.className = listItem.className.replace('editing', '')\n\n    Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qsa\"])('label', listItem).forEach(function(label) {\n      label.textContent = title\n    })\n  }\n\n  render(viewCmd, parameter) {\n    var that = this\n    var viewCommands = {\n      showEntries: function() {\n        that.$todoList.innerHTML = that.template.show(parameter)\n      },\n      removeItem: function() {\n        that._removeItem(parameter)\n      },\n      updateElementCount: function() {\n        that.$todoItemCounter.innerHTML = that.template.itemCounter(parameter)\n      },\n      clearCompletedButton: function() {\n        that._clearCompletedButton(parameter.completed, parameter.visible)\n      },\n      contentBlockVisibility: function() {\n        that.$main.style.display = that.$footer.style.display = parameter.visible ? 'block' : 'none'\n      },\n      toggleAll: function() {\n        that.$toggleAll.checked = parameter.checked\n      },\n      setFilter: function() {\n        _setFilter(parameter)\n      },\n      clearNewTodo: function() {\n        that.$newTodo.value = ''\n      },\n      elementComplete: function() {\n        _elementComplete(parameter.id, parameter.completed)\n      },\n      editItem: function() {\n        _editItem(parameter.id, parameter.title)\n      },\n      editItemDone: function() {\n        that._editItemDone(parameter.id, parameter.title)\n      }\n    }\n\n    viewCommands[viewCmd]()\n  }\n\n  _bindItemEditDone(handler) {\n    var that = this\n    Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$delegate\"])(that.$todoList, 'li .edit', 'blur', function() {\n      if (!this.dataset.iscanceled) {\n        handler({\n          id: _itemId(this),\n          title: this.value\n        })\n      }\n    })\n\n    Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$delegate\"])(that.$todoList, 'li .edit', 'keypress', function(event) {\n      if (event.keyCode === that.ENTER_KEY) {\n        // Remove the cursor from the input when you hit enter just like if it\n        // were a real form\n        this.blur()\n      }\n    })\n  }\n\n  _bindItemEditCancel(handler) {\n    var that = this\n    Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$delegate\"])(that.$todoList, 'li .edit', 'keyup', function(event) {\n      if (event.keyCode === that.ESCAPE_KEY) {\n        this.dataset.iscanceled = true\n        this.blur()\n\n        handler({id: _itemId(this)})\n      }\n    })\n  }\n\n  bind(event, handler) {\n    var that = this\n    if (event === 'newTodo') {\n      Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$newTodo, 'change', function() {\n        handler(that.$newTodo.value)\n      })\n\n    } else if (event === 'removeCompleted') {\n      Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$clearCompleted, 'click', function() {\n        handler()\n      })\n\n    } else if (event === 'toggleAll') {\n      Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$toggleAll, 'click', function() {\n        handler({completed: this.checked})\n      })\n\n    } else if (event === 'itemEdit') {\n      Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$delegate\"])(that.$todoList, 'li label', 'dblclick', function() {\n        handler({id: _itemId(this)})\n      })\n\n    } else if (event === 'itemRemove') {\n      Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$delegate\"])(that.$todoList, '.destroy', 'click', function() {\n        handler({id: _itemId(this)})\n      })\n\n    } else if (event === 'itemToggle') {\n      Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$delegate\"])(that.$todoList, '.toggle', 'click', function() {\n        handler({\n          id: _itemId(this),\n          completed: this.checked\n        })\n      })\n\n    } else if (event === 'itemEditDone') {\n      that._bindItemEditDone(handler)\n\n    } else if (event === 'itemEditCancel') {\n      that._bindItemEditCancel(handler)\n    }\n  }\n}\n\nfunction _setFilter(currentPage) {\n  Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.filters .selected').className = ''\n  Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.filters [href=\"#/' + currentPage + '\"]').className = 'selected'\n}\n\nfunction _elementComplete(id, completed) {\n  var listItem = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('[data-id=\"' + id + '\"]')\n\n  if (!listItem) {\n    return\n  }\n\n  listItem.className = completed ? 'completed' : ''\n\n  // In case it was toggled from an event and not by clicking the checkbox\n  Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('input', listItem).checked = completed\n}\n\nfunction _editItem(id, title) {\n  var listItem = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('[data-id=\"' + id + '\"]')\n\n  if (!listItem) {\n    return\n  }\n\n  listItem.className = listItem.className + ' editing'\n\n  var input = document.createElement('input')\n  input.className = 'edit'\n\n  listItem.appendChild(input)\n  input.focus()\n  input.value = title\n}\n\nfunction _itemId(element) {\n  var li = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$parent\"])(element, 'li')\n  return parseInt(li.dataset.id, 10)\n}\n\n\n//# sourceURL=webpack:///./src/lazy/view.js?");

/***/ })

/******/ });