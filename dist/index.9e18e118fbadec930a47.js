"use strict";
(self["webpackChunkc"] = self["webpackChunkc"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/print.js");


async function getComponent() {

	const element = document.createElement('div');

	const {default: _} = await __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23));

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.onclick = _print__WEBPACK_IMPORTED_MODULE_0__["default"].bind(null, 'Hello webpack!');
	return element;
}

getComponent().then((component) => {
	document.body.appendChild(component);
});

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ print)
/* harmony export */ });
function print(text) {
    console.log(text);
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOWUxOGUxMThmYmFkZWM5MzBhNDcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsWUFBWSxRQUFRLDJKQUFnQjtBQUM1QztBQUNBO0FBQ0EsbUJBQW1CLG1EQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2ZjO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYy8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJpbnQgZnJvbSAnLi9wcmludCc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XHJcblxyXG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0Y29uc3Qge2RlZmF1bHQ6IF99ID0gYXdhaXQgaW1wb3J0KCdsb2Rhc2gnKTtcclxuXHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XHJcblx0ZWxlbWVudC5vbmNsaWNrID0gUHJpbnQuYmluZChudWxsLCAnSGVsbG8gd2VicGFjayEnKTtcclxuXHRyZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZ2V0Q29tcG9uZW50KCkudGhlbigoY29tcG9uZW50KSA9PiB7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xyXG59KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludCh0ZXh0KSB7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=