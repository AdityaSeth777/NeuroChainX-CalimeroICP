"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-callback-ref";
exports.ids = ["vendor-chunks/use-callback-ref"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/assignRef.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.assignRef = void 0;\n/**\n * Assigns a value for a given ref, no matter of the ref format\n * @param {RefObject} ref - a callback function or ref object\n * @param value - a new value\n *\n * @see https://github.com/theKashey/use-callback-ref#assignref\n * @example\n * const refObject = useRef();\n * const refFn = (ref) => {....}\n *\n * assignRef(refObject, \"refValue\");\n * assignRef(refFn, \"refValue\");\n */\nfunction assignRef(ref, value) {\n    if (typeof ref === 'function') {\n        ref(value);\n    }\n    else if (ref) {\n        ref.current = value;\n    }\n    return ref;\n}\nexports.assignRef = assignRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9hc3NpZ25SZWYuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXM1L2Fzc2lnblJlZi5qcz9mNzZiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hc3NpZ25SZWYgPSB2b2lkIDA7XG4vKipcbiAqIEFzc2lnbnMgYSB2YWx1ZSBmb3IgYSBnaXZlbiByZWYsIG5vIG1hdHRlciBvZiB0aGUgcmVmIGZvcm1hdFxuICogQHBhcmFtIHtSZWZPYmplY3R9IHJlZiAtIGEgY2FsbGJhY2sgZnVuY3Rpb24gb3IgcmVmIG9iamVjdFxuICogQHBhcmFtIHZhbHVlIC0gYSBuZXcgdmFsdWVcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvdXNlLWNhbGxiYWNrLXJlZiNhc3NpZ25yZWZcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByZWZPYmplY3QgPSB1c2VSZWYoKTtcbiAqIGNvbnN0IHJlZkZuID0gKHJlZikgPT4gey4uLi59XG4gKlxuICogYXNzaWduUmVmKHJlZk9iamVjdCwgXCJyZWZWYWx1ZVwiKTtcbiAqIGFzc2lnblJlZihyZWZGbiwgXCJyZWZWYWx1ZVwiKTtcbiAqL1xuZnVuY3Rpb24gYXNzaWduUmVmKHJlZiwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZWYodmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWYpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZjtcbn1cbmV4cG9ydHMuYXNzaWduUmVmID0gYXNzaWduUmVmO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/createRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/createRef.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createCallbackRef = void 0;\n/**\n * creates a Ref object with on change callback\n * @param callback\n * @returns {RefObject}\n *\n * @see {@link useCallbackRef}\n * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs\n */\nfunction createCallbackRef(callback) {\n    var current = null;\n    return {\n        get current() {\n            return current;\n        },\n        set current(value) {\n            var last = current;\n            if (last !== value) {\n                current = value;\n                callback(value, last);\n            }\n        },\n    };\n}\nexports.createCallbackRef = createCallbackRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9jcmVhdGVSZWYuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXM1L2NyZWF0ZVJlZi5qcz9jN2MwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVDYWxsYmFja1JlZiA9IHZvaWQgMDtcbi8qKlxuICogY3JlYXRlcyBhIFJlZiBvYmplY3Qgd2l0aCBvbiBjaGFuZ2UgY2FsbGJhY2tcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHJldHVybnMge1JlZk9iamVjdH1cbiAqXG4gKiBAc2VlIHtAbGluayB1c2VDYWxsYmFja1JlZn1cbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlZnMtYW5kLXRoZS1kb20uaHRtbCNjcmVhdGluZy1yZWZzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrUmVmKGNhbGxiYWNrKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBjdXJyZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBjdXJyZW50KHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbGFzdCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAobGFzdCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodmFsdWUsIGxhc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmNyZWF0ZUNhbGxiYWNrUmVmID0gY3JlYXRlQ2FsbGJhY2tSZWY7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/createRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useRefToCallback = exports.refToCallback = exports.transformRef = exports.useTransformRef = exports.useMergeRefs = exports.mergeRefs = exports.createCallbackRef = exports.useCallbackRef = exports.assignRef = void 0;\nvar assignRef_1 = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\");\nObject.defineProperty(exports, \"assignRef\", ({ enumerable: true, get: function () { return assignRef_1.assignRef; } }));\n// callback ref\nvar useRef_1 = __webpack_require__(/*! ./useRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/useRef.js\");\nObject.defineProperty(exports, \"useCallbackRef\", ({ enumerable: true, get: function () { return useRef_1.useCallbackRef; } }));\nvar createRef_1 = __webpack_require__(/*! ./createRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/createRef.js\");\nObject.defineProperty(exports, \"createCallbackRef\", ({ enumerable: true, get: function () { return createRef_1.createCallbackRef; } }));\n// merge ref\nvar mergeRef_1 = __webpack_require__(/*! ./mergeRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/mergeRef.js\");\nObject.defineProperty(exports, \"mergeRefs\", ({ enumerable: true, get: function () { return mergeRef_1.mergeRefs; } }));\nvar useMergeRef_1 = __webpack_require__(/*! ./useMergeRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/useMergeRef.js\");\nObject.defineProperty(exports, \"useMergeRefs\", ({ enumerable: true, get: function () { return useMergeRef_1.useMergeRefs; } }));\n// transform ref\nvar useTransformRef_1 = __webpack_require__(/*! ./useTransformRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/useTransformRef.js\");\nObject.defineProperty(exports, \"useTransformRef\", ({ enumerable: true, get: function () { return useTransformRef_1.useTransformRef; } }));\nvar transformRef_1 = __webpack_require__(/*! ./transformRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/transformRef.js\");\nObject.defineProperty(exports, \"transformRef\", ({ enumerable: true, get: function () { return transformRef_1.transformRef; } }));\n// refToCallback\nvar refToCallback_1 = __webpack_require__(/*! ./refToCallback */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/refToCallback.js\");\nObject.defineProperty(exports, \"refToCallback\", ({ enumerable: true, get: function () { return refToCallback_1.refToCallback; } }));\nObject.defineProperty(exports, \"useRefToCallback\", ({ enumerable: true, get: function () { return refToCallback_1.useRefToCallback; } }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx3QkFBd0IsR0FBRyxxQkFBcUIsR0FBRyxvQkFBb0IsR0FBRyx1QkFBdUIsR0FBRyxvQkFBb0IsR0FBRyxpQkFBaUIsR0FBRyx5QkFBeUIsR0FBRyxzQkFBc0IsR0FBRyxpQkFBaUI7QUFDck4sa0JBQWtCLG1CQUFPLENBQUMsZ0ZBQWE7QUFDdkMsNkNBQTRDLEVBQUUscUNBQXFDLGlDQUFpQyxFQUFDO0FBQ3JIO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBFQUFVO0FBQ2pDLGtEQUFpRCxFQUFFLHFDQUFxQyxtQ0FBbUMsRUFBQztBQUM1SCxrQkFBa0IsbUJBQU8sQ0FBQyxnRkFBYTtBQUN2QyxxREFBb0QsRUFBRSxxQ0FBcUMseUNBQXlDLEVBQUM7QUFDckk7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyw4RUFBWTtBQUNyQyw2Q0FBNEMsRUFBRSxxQ0FBcUMsZ0NBQWdDLEVBQUM7QUFDcEgsb0JBQW9CLG1CQUFPLENBQUMsb0ZBQWU7QUFDM0MsZ0RBQStDLEVBQUUscUNBQXFDLHNDQUFzQyxFQUFDO0FBQzdIO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsNEZBQW1CO0FBQ25ELG1EQUFrRCxFQUFFLHFDQUFxQyw2Q0FBNkMsRUFBQztBQUN2SSxxQkFBcUIsbUJBQU8sQ0FBQyxzRkFBZ0I7QUFDN0MsZ0RBQStDLEVBQUUscUNBQXFDLHVDQUF1QyxFQUFDO0FBQzlIO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0ZBQWlCO0FBQy9DLGlEQUFnRCxFQUFFLHFDQUFxQyx5Q0FBeUMsRUFBQztBQUNqSSxvREFBbUQsRUFBRSxxQ0FBcUMsNENBQTRDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9pbmRleC5qcz85YzMwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VSZWZUb0NhbGxiYWNrID0gZXhwb3J0cy5yZWZUb0NhbGxiYWNrID0gZXhwb3J0cy50cmFuc2Zvcm1SZWYgPSBleHBvcnRzLnVzZVRyYW5zZm9ybVJlZiA9IGV4cG9ydHMudXNlTWVyZ2VSZWZzID0gZXhwb3J0cy5tZXJnZVJlZnMgPSBleHBvcnRzLmNyZWF0ZUNhbGxiYWNrUmVmID0gZXhwb3J0cy51c2VDYWxsYmFja1JlZiA9IGV4cG9ydHMuYXNzaWduUmVmID0gdm9pZCAwO1xudmFyIGFzc2lnblJlZl8xID0gcmVxdWlyZShcIi4vYXNzaWduUmVmXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYXNzaWduUmVmXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhc3NpZ25SZWZfMS5hc3NpZ25SZWY7IH0gfSk7XG4vLyBjYWxsYmFjayByZWZcbnZhciB1c2VSZWZfMSA9IHJlcXVpcmUoXCIuL3VzZVJlZlwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVzZUNhbGxiYWNrUmVmXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VSZWZfMS51c2VDYWxsYmFja1JlZjsgfSB9KTtcbnZhciBjcmVhdGVSZWZfMSA9IHJlcXVpcmUoXCIuL2NyZWF0ZVJlZlwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNyZWF0ZUNhbGxiYWNrUmVmXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjcmVhdGVSZWZfMS5jcmVhdGVDYWxsYmFja1JlZjsgfSB9KTtcbi8vIG1lcmdlIHJlZlxudmFyIG1lcmdlUmVmXzEgPSByZXF1aXJlKFwiLi9tZXJnZVJlZlwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1lcmdlUmVmc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWVyZ2VSZWZfMS5tZXJnZVJlZnM7IH0gfSk7XG52YXIgdXNlTWVyZ2VSZWZfMSA9IHJlcXVpcmUoXCIuL3VzZU1lcmdlUmVmXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlTWVyZ2VSZWZzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VNZXJnZVJlZl8xLnVzZU1lcmdlUmVmczsgfSB9KTtcbi8vIHRyYW5zZm9ybSByZWZcbnZhciB1c2VUcmFuc2Zvcm1SZWZfMSA9IHJlcXVpcmUoXCIuL3VzZVRyYW5zZm9ybVJlZlwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVzZVRyYW5zZm9ybVJlZlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXNlVHJhbnNmb3JtUmVmXzEudXNlVHJhbnNmb3JtUmVmOyB9IH0pO1xudmFyIHRyYW5zZm9ybVJlZl8xID0gcmVxdWlyZShcIi4vdHJhbnNmb3JtUmVmXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidHJhbnNmb3JtUmVmXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cmFuc2Zvcm1SZWZfMS50cmFuc2Zvcm1SZWY7IH0gfSk7XG4vLyByZWZUb0NhbGxiYWNrXG52YXIgcmVmVG9DYWxsYmFja18xID0gcmVxdWlyZShcIi4vcmVmVG9DYWxsYmFja1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlZlRvQ2FsbGJhY2tcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlZlRvQ2FsbGJhY2tfMS5yZWZUb0NhbGxiYWNrOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlUmVmVG9DYWxsYmFja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVmVG9DYWxsYmFja18xLnVzZVJlZlRvQ2FsbGJhY2s7IH0gfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/mergeRef.js":
/*!************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/mergeRef.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mergeRefs = void 0;\nvar assignRef_1 = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\");\nvar createRef_1 = __webpack_require__(/*! ./createRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/createRef.js\");\n/**\n * Merges two or more refs together providing a single interface to set their value\n * @param {RefObject|Ref} refs\n * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}\n *\n * @see {@link useMergeRefs} to be used in ReactComponents\n * @example\n * const Component = React.forwardRef((props, ref) => {\n *   const ownRef = useRef();\n *   const domRef = mergeRefs([ref, ownRef]); // 👈 merge together\n *   return <div ref={domRef}>...</div>\n * }\n */\nfunction mergeRefs(refs) {\n    return (0, createRef_1.createCallbackRef)(function (newValue) { return refs.forEach(function (ref) { return (0, assignRef_1.assignRef)(ref, newValue); }); });\n}\nexports.mergeRefs = mergeRefs;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9tZXJnZVJlZi5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIsa0JBQWtCLG1CQUFPLENBQUMsZ0ZBQWE7QUFDdkMsa0JBQWtCLG1CQUFPLENBQUMsZ0ZBQWE7QUFDdkM7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhLGtCQUFrQiw4Q0FBOEM7QUFDN0U7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLHFDQUFxQyxtREFBbUQsSUFBSTtBQUNoSztBQUNBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXM1L21lcmdlUmVmLmpzPzg2NzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm1lcmdlUmVmcyA9IHZvaWQgMDtcbnZhciBhc3NpZ25SZWZfMSA9IHJlcXVpcmUoXCIuL2Fzc2lnblJlZlwiKTtcbnZhciBjcmVhdGVSZWZfMSA9IHJlcXVpcmUoXCIuL2NyZWF0ZVJlZlwiKTtcbi8qKlxuICogTWVyZ2VzIHR3byBvciBtb3JlIHJlZnMgdG9nZXRoZXIgcHJvdmlkaW5nIGEgc2luZ2xlIGludGVyZmFjZSB0byBzZXQgdGhlaXIgdmFsdWVcbiAqIEBwYXJhbSB7UmVmT2JqZWN0fFJlZn0gcmVmc1xuICogQHJldHVybnMge011dGFibGVSZWZPYmplY3R9IC0gYSBuZXcgcmVmLCB3aGljaCB0cmFuc2xhdGVzIGFsbCBjaGFuZ2VzIHRvIHtyZWZzfVxuICpcbiAqIEBzZWUge0BsaW5rIHVzZU1lcmdlUmVmc30gdG8gYmUgdXNlZCBpbiBSZWFjdENvbXBvbmVudHNcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBDb21wb25lbnQgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gKiAgIGNvbnN0IG93blJlZiA9IHVzZVJlZigpO1xuICogICBjb25zdCBkb21SZWYgPSBtZXJnZVJlZnMoW3JlZiwgb3duUmVmXSk7IC8vIPCfkYggbWVyZ2UgdG9nZXRoZXJcbiAqICAgcmV0dXJuIDxkaXYgcmVmPXtkb21SZWZ9Pi4uLjwvZGl2PlxuICogfVxuICovXG5mdW5jdGlvbiBtZXJnZVJlZnMocmVmcykge1xuICAgIHJldHVybiAoMCwgY3JlYXRlUmVmXzEuY3JlYXRlQ2FsbGJhY2tSZWYpKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyByZXR1cm4gcmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHsgcmV0dXJuICgwLCBhc3NpZ25SZWZfMS5hc3NpZ25SZWYpKHJlZiwgbmV3VmFsdWUpOyB9KTsgfSk7XG59XG5leHBvcnRzLm1lcmdlUmVmcyA9IG1lcmdlUmVmcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/mergeRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/refToCallback.js":
/*!*****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/refToCallback.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useRefToCallback = exports.refToCallback = void 0;\n/**\n * Unmemoized version of {@link useRefToCallback}\n * @see {@link useRefToCallback}\n * @param ref\n */\nfunction refToCallback(ref) {\n    return function (newValue) {\n        if (typeof ref === 'function') {\n            ref(newValue);\n        }\n        else if (ref) {\n            ref.current = newValue;\n        }\n    };\n}\nexports.refToCallback = refToCallback;\nvar nullCallback = function () { return null; };\n// lets maintain a weak ref to, well, ref :)\n// not using `kashe` to keep this package small\nvar weakMem = new WeakMap();\nvar weakMemoize = function (ref) {\n    var usedRef = ref || nullCallback;\n    var storedRef = weakMem.get(usedRef);\n    if (storedRef) {\n        return storedRef;\n    }\n    var cb = refToCallback(usedRef);\n    weakMem.set(usedRef, cb);\n    return cb;\n};\n/**\n * Transforms a given `ref` into `callback`.\n *\n * To transform `callback` into ref use {@link useCallbackRef|useCallbackRef(undefined, callback)}\n *\n * @param {ReactRef} ref\n * @returns {Function}\n *\n * @see https://github.com/theKashey/use-callback-ref#reftocallback\n *\n * @example\n * const ref = useRef(0);\n * const setRef = useRefToCallback(ref);\n * 👉 setRef(10);\n * ✅ ref.current === 10\n */\nfunction useRefToCallback(ref) {\n    return weakMemoize(ref);\n}\nexports.useRefToCallback = useRefToCallback;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9yZWZUb0NhbGxiYWNrLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHdCQUF3QixHQUFHLHFCQUFxQjtBQUNoRDtBQUNBLDBCQUEwQjtBQUMxQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLFdBQVcsVUFBVTtBQUNyQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczUvcmVmVG9DYWxsYmFjay5qcz9mYzZlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VSZWZUb0NhbGxiYWNrID0gZXhwb3J0cy5yZWZUb0NhbGxiYWNrID0gdm9pZCAwO1xuLyoqXG4gKiBVbm1lbW9pemVkIHZlcnNpb24gb2Yge0BsaW5rIHVzZVJlZlRvQ2FsbGJhY2t9XG4gKiBAc2VlIHtAbGluayB1c2VSZWZUb0NhbGxiYWNrfVxuICogQHBhcmFtIHJlZlxuICovXG5mdW5jdGlvbiByZWZUb0NhbGxiYWNrKHJlZikge1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlZihuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVmKSB7XG4gICAgICAgICAgICByZWYuY3VycmVudCA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMucmVmVG9DYWxsYmFjayA9IHJlZlRvQ2FsbGJhY2s7XG52YXIgbnVsbENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfTtcbi8vIGxldHMgbWFpbnRhaW4gYSB3ZWFrIHJlZiB0bywgd2VsbCwgcmVmIDopXG4vLyBub3QgdXNpbmcgYGthc2hlYCB0byBrZWVwIHRoaXMgcGFja2FnZSBzbWFsbFxudmFyIHdlYWtNZW0gPSBuZXcgV2Vha01hcCgpO1xudmFyIHdlYWtNZW1vaXplID0gZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciB1c2VkUmVmID0gcmVmIHx8IG51bGxDYWxsYmFjaztcbiAgICB2YXIgc3RvcmVkUmVmID0gd2Vha01lbS5nZXQodXNlZFJlZik7XG4gICAgaWYgKHN0b3JlZFJlZikge1xuICAgICAgICByZXR1cm4gc3RvcmVkUmVmO1xuICAgIH1cbiAgICB2YXIgY2IgPSByZWZUb0NhbGxiYWNrKHVzZWRSZWYpO1xuICAgIHdlYWtNZW0uc2V0KHVzZWRSZWYsIGNiKTtcbiAgICByZXR1cm4gY2I7XG59O1xuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgZ2l2ZW4gYHJlZmAgaW50byBgY2FsbGJhY2tgLlxuICpcbiAqIFRvIHRyYW5zZm9ybSBgY2FsbGJhY2tgIGludG8gcmVmIHVzZSB7QGxpbmsgdXNlQ2FsbGJhY2tSZWZ8dXNlQ2FsbGJhY2tSZWYodW5kZWZpbmVkLCBjYWxsYmFjayl9XG4gKlxuICogQHBhcmFtIHtSZWFjdFJlZn0gcmVmXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhlS2FzaGV5L3VzZS1jYWxsYmFjay1yZWYjcmVmdG9jYWxsYmFja1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByZWYgPSB1c2VSZWYoMCk7XG4gKiBjb25zdCBzZXRSZWYgPSB1c2VSZWZUb0NhbGxiYWNrKHJlZik7XG4gKiDwn5GJIHNldFJlZigxMCk7XG4gKiDinIUgcmVmLmN1cnJlbnQgPT09IDEwXG4gKi9cbmZ1bmN0aW9uIHVzZVJlZlRvQ2FsbGJhY2socmVmKSB7XG4gICAgcmV0dXJuIHdlYWtNZW1vaXplKHJlZik7XG59XG5leHBvcnRzLnVzZVJlZlRvQ2FsbGJhY2sgPSB1c2VSZWZUb0NhbGxiYWNrO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/refToCallback.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/transformRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/transformRef.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.transformRef = void 0;\nvar assignRef_1 = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\");\nvar createRef_1 = __webpack_require__(/*! ./createRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/createRef.js\");\n/**\n * Transforms one ref to another\n * @example\n * ```tsx\n * const ResizableWithRef = forwardRef((props, ref) =>\n *   <Resizable {...props} ref={transformRef(ref, i => i ? i.resizable : null)}/>\n * );\n * ```\n */\nfunction transformRef(ref, transformer) {\n    return (0, createRef_1.createCallbackRef)(function (value) { return (0, assignRef_1.assignRef)(ref, transformer(value)); });\n}\nexports.transformRef = transformRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS90cmFuc2Zvcm1SZWYuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCLGtCQUFrQixtQkFBTyxDQUFDLGdGQUFhO0FBQ3ZDLGtCQUFrQixtQkFBTyxDQUFDLGdGQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVSxLQUFLLCtDQUErQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSw2REFBNkQ7QUFDOUg7QUFDQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS90cmFuc2Zvcm1SZWYuanM/YWE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudHJhbnNmb3JtUmVmID0gdm9pZCAwO1xudmFyIGFzc2lnblJlZl8xID0gcmVxdWlyZShcIi4vYXNzaWduUmVmXCIpO1xudmFyIGNyZWF0ZVJlZl8xID0gcmVxdWlyZShcIi4vY3JlYXRlUmVmXCIpO1xuLyoqXG4gKiBUcmFuc2Zvcm1zIG9uZSByZWYgdG8gYW5vdGhlclxuICogQGV4YW1wbGVcbiAqIGBgYHRzeFxuICogY29uc3QgUmVzaXphYmxlV2l0aFJlZiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+XG4gKiAgIDxSZXNpemFibGUgey4uLnByb3BzfSByZWY9e3RyYW5zZm9ybVJlZihyZWYsIGkgPT4gaSA/IGkucmVzaXphYmxlIDogbnVsbCl9Lz5cbiAqICk7XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtUmVmKHJlZiwgdHJhbnNmb3JtZXIpIHtcbiAgICByZXR1cm4gKDAsIGNyZWF0ZVJlZl8xLmNyZWF0ZUNhbGxiYWNrUmVmKShmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICgwLCBhc3NpZ25SZWZfMS5hc3NpZ25SZWYpKHJlZiwgdHJhbnNmb3JtZXIodmFsdWUpKTsgfSk7XG59XG5leHBvcnRzLnRyYW5zZm9ybVJlZiA9IHRyYW5zZm9ybVJlZjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/transformRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/useMergeRef.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/useMergeRef.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useMergeRefs = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar React = tslib_1.__importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar assignRef_1 = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\");\nvar useRef_1 = __webpack_require__(/*! ./useRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/useRef.js\");\nvar useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;\nvar currentValues = new WeakMap();\n/**\n * Merges two or more refs together providing a single interface to set their value\n * @param {RefObject|Ref} refs\n * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}\n *\n * @see {@link mergeRefs} a version without buit-in memoization\n * @see https://github.com/theKashey/use-callback-ref#usemergerefs\n * @example\n * const Component = React.forwardRef((props, ref) => {\n *   const ownRef = useRef();\n *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together\n *   return <div ref={domRef}>...</div>\n * }\n */\nfunction useMergeRefs(refs, defaultValue) {\n    var callbackRef = (0, useRef_1.useCallbackRef)(defaultValue || null, function (newValue) {\n        return refs.forEach(function (ref) { return (0, assignRef_1.assignRef)(ref, newValue); });\n    });\n    // handle refs changes - added or removed\n    useIsomorphicLayoutEffect(function () {\n        var oldValue = currentValues.get(callbackRef);\n        if (oldValue) {\n            var prevRefs_1 = new Set(oldValue);\n            var nextRefs_1 = new Set(refs);\n            var current_1 = callbackRef.current;\n            prevRefs_1.forEach(function (ref) {\n                if (!nextRefs_1.has(ref)) {\n                    (0, assignRef_1.assignRef)(ref, null);\n                }\n            });\n            nextRefs_1.forEach(function (ref) {\n                if (!prevRefs_1.has(ref)) {\n                    (0, assignRef_1.assignRef)(ref, current_1);\n                }\n            });\n        }\n        currentValues.set(callbackRef, refs);\n    }, [refs]);\n    return callbackRef;\n}\nexports.useMergeRefs = useMergeRefs;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS91c2VNZXJnZVJlZi5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEIsY0FBYyxtQkFBTyxDQUFDLHVEQUFPO0FBQzdCLGlDQUFpQyxtQkFBTyxDQUFDLHdHQUFPO0FBQ2hELGtCQUFrQixtQkFBTyxDQUFDLGdGQUFhO0FBQ3ZDLGVBQWUsbUJBQU8sQ0FBQywwRUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhLGtCQUFrQiw4Q0FBOEM7QUFDN0U7QUFDQSxTQUFTLGlCQUFpQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxtREFBbUQ7QUFDaEcsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczUvdXNlTWVyZ2VSZWYuanM/NDIzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXNlTWVyZ2VSZWZzID0gdm9pZCAwO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgUmVhY3QgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGFzc2lnblJlZl8xID0gcmVxdWlyZShcIi4vYXNzaWduUmVmXCIpO1xudmFyIHVzZVJlZl8xID0gcmVxdWlyZShcIi4vdXNlUmVmXCIpO1xudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbnZhciBjdXJyZW50VmFsdWVzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogTWVyZ2VzIHR3byBvciBtb3JlIHJlZnMgdG9nZXRoZXIgcHJvdmlkaW5nIGEgc2luZ2xlIGludGVyZmFjZSB0byBzZXQgdGhlaXIgdmFsdWVcbiAqIEBwYXJhbSB7UmVmT2JqZWN0fFJlZn0gcmVmc1xuICogQHJldHVybnMge011dGFibGVSZWZPYmplY3R9IC0gYSBuZXcgcmVmLCB3aGljaCB0cmFuc2xhdGVzIGFsbCBjaGFuZ2VzIHRvIHtyZWZzfVxuICpcbiAqIEBzZWUge0BsaW5rIG1lcmdlUmVmc30gYSB2ZXJzaW9uIHdpdGhvdXQgYnVpdC1pbiBtZW1vaXphdGlvblxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhlS2FzaGV5L3VzZS1jYWxsYmFjay1yZWYjdXNlbWVyZ2VyZWZzXG4gKiBAZXhhbXBsZVxuICogY29uc3QgQ29tcG9uZW50ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICogICBjb25zdCBvd25SZWYgPSB1c2VSZWYoKTtcbiAqICAgY29uc3QgZG9tUmVmID0gdXNlTWVyZ2VSZWZzKFtyZWYsIG93blJlZl0pOyAvLyDwn5GIIG1lcmdlIHRvZ2V0aGVyXG4gKiAgIHJldHVybiA8ZGl2IHJlZj17ZG9tUmVmfT4uLi48L2Rpdj5cbiAqIH1cbiAqL1xuZnVuY3Rpb24gdXNlTWVyZ2VSZWZzKHJlZnMsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciBjYWxsYmFja1JlZiA9ICgwLCB1c2VSZWZfMS51c2VDYWxsYmFja1JlZikoZGVmYXVsdFZhbHVlIHx8IG51bGwsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gcmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHsgcmV0dXJuICgwLCBhc3NpZ25SZWZfMS5hc3NpZ25SZWYpKHJlZiwgbmV3VmFsdWUpOyB9KTtcbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgcmVmcyBjaGFuZ2VzIC0gYWRkZWQgb3IgcmVtb3ZlZFxuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSBjdXJyZW50VmFsdWVzLmdldChjYWxsYmFja1JlZik7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIHByZXZSZWZzXzEgPSBuZXcgU2V0KG9sZFZhbHVlKTtcbiAgICAgICAgICAgIHZhciBuZXh0UmVmc18xID0gbmV3IFNldChyZWZzKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50XzEgPSBjYWxsYmFja1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgcHJldlJlZnNfMS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5leHRSZWZzXzEuaGFzKHJlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIGFzc2lnblJlZl8xLmFzc2lnblJlZikocmVmLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5leHRSZWZzXzEuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2UmVmc18xLmhhcyhyZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgICgwLCBhc3NpZ25SZWZfMS5hc3NpZ25SZWYpKHJlZiwgY3VycmVudF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VmFsdWVzLnNldChjYWxsYmFja1JlZiwgcmVmcyk7XG4gICAgfSwgW3JlZnNdKTtcbiAgICByZXR1cm4gY2FsbGJhY2tSZWY7XG59XG5leHBvcnRzLnVzZU1lcmdlUmVmcyA9IHVzZU1lcmdlUmVmcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/useMergeRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/useRef.js":
/*!**********************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/useRef.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useCallbackRef = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/**\n * creates a MutableRef with ref change callback\n * @param initialValue - initial ref value\n * @param {Function} callback - a callback to run when value changes\n *\n * @example\n * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);\n * ref.current = 1;\n * // prints 0 -> 1\n *\n * @see https://reactjs.org/docs/hooks-reference.html#useref\n * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref\n * @returns {MutableRefObject}\n */\nfunction useCallbackRef(initialValue, callback) {\n    var ref = (0, react_1.useState)(function () { return ({\n        // value\n        value: initialValue,\n        // last callback\n        callback: callback,\n        // \"memoized\" public interface\n        facade: {\n            get current() {\n                return ref.value;\n            },\n            set current(value) {\n                var last = ref.value;\n                if (last !== value) {\n                    ref.value = value;\n                    ref.callback(value, last);\n                }\n            },\n        },\n    }); })[0];\n    // update callback\n    ref.callback = callback;\n    return ref.facade;\n}\nexports.useCallbackRef = useCallbackRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS91c2VSZWYuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCO0FBQ3RCLGNBQWMsbUJBQU8sQ0FBQyx3R0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXM1L3VzZVJlZi5qcz83MDE4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VDYWxsYmFja1JlZiA9IHZvaWQgMDtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuLyoqXG4gKiBjcmVhdGVzIGEgTXV0YWJsZVJlZiB3aXRoIHJlZiBjaGFuZ2UgY2FsbGJhY2tcbiAqIEBwYXJhbSBpbml0aWFsVmFsdWUgLSBpbml0aWFsIHJlZiB2YWx1ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBhIGNhbGxiYWNrIHRvIHJ1biB3aGVuIHZhbHVlIGNoYW5nZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcmVmID0gdXNlQ2FsbGJhY2tSZWYoMCwgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4gY29uc29sZS5sb2cob2xkVmFsdWUsICctPicsIG5ld1ZhbHVlKTtcbiAqIHJlZi5jdXJyZW50ID0gMTtcbiAqIC8vIHByaW50cyAwIC0+IDFcbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1yZWZlcmVuY2UuaHRtbCN1c2VyZWZcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZUthc2hleS91c2UtY2FsbGJhY2stcmVmI3VzZWNhbGxiYWNrcmVmLS0tdG8tcmVwbGFjZS1yZWFjdHVzZXJlZlxuICogQHJldHVybnMge011dGFibGVSZWZPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrUmVmKGluaXRpYWxWYWx1ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVmID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgIC8vIHZhbHVlXG4gICAgICAgIHZhbHVlOiBpbml0aWFsVmFsdWUsXG4gICAgICAgIC8vIGxhc3QgY2FsbGJhY2tcbiAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAvLyBcIm1lbW9pemVkXCIgcHVibGljIGludGVyZmFjZVxuICAgICAgICBmYWNhZGU6IHtcbiAgICAgICAgICAgIGdldCBjdXJyZW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWYudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0IGN1cnJlbnQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdCA9IHJlZi52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5jYWxsYmFjayh2YWx1ZSwgbGFzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTsgfSlbMF07XG4gICAgLy8gdXBkYXRlIGNhbGxiYWNrXG4gICAgcmVmLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHJlZi5mYWNhZGU7XG59XG5leHBvcnRzLnVzZUNhbGxiYWNrUmVmID0gdXNlQ2FsbGJhY2tSZWY7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/useRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/useTransformRef.js":
/*!*******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/useTransformRef.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useTransformRef = void 0;\nvar assignRef_1 = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\");\nvar useRef_1 = __webpack_require__(/*! ./useRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/useRef.js\");\n/**\n * Create a _lense_ on Ref, making it possible to transform ref value\n * @param {ReactRef} ref\n * @param {Function} transformer. 👉 Ref would be __NOT updated__ on `transformer` update.\n * @returns {RefObject}\n *\n * @see https://github.com/theKashey/use-callback-ref#usetransformref-to-replace-reactuseimperativehandle\n * @example\n *\n * const ResizableWithRef = forwardRef((props, ref) =>\n *  <Resizable {...props} ref={useTransformRef(ref, i => i ? i.resizable : null)}/>\n * );\n */\nfunction useTransformRef(ref, transformer) {\n    return (0, useRef_1.useCallbackRef)(null, function (value) { return (0, assignRef_1.assignRef)(ref, transformer(value)); });\n}\nexports.useTransformRef = useTransformRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS91c2VUcmFuc2Zvcm1SZWYuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsdUJBQXVCO0FBQ3ZCLGtCQUFrQixtQkFBTyxDQUFDLGdGQUFhO0FBQ3ZDLGVBQWUsbUJBQU8sQ0FBQywwRUFBVTtBQUNqQztBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsVUFBVTtBQUNyQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixVQUFVLEtBQUssa0RBQWtEO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSw2REFBNkQ7QUFDOUg7QUFDQSx1QkFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS91c2VUcmFuc2Zvcm1SZWYuanM/MWYzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXNlVHJhbnNmb3JtUmVmID0gdm9pZCAwO1xudmFyIGFzc2lnblJlZl8xID0gcmVxdWlyZShcIi4vYXNzaWduUmVmXCIpO1xudmFyIHVzZVJlZl8xID0gcmVxdWlyZShcIi4vdXNlUmVmXCIpO1xuLyoqXG4gKiBDcmVhdGUgYSBfbGVuc2VfIG9uIFJlZiwgbWFraW5nIGl0IHBvc3NpYmxlIHRvIHRyYW5zZm9ybSByZWYgdmFsdWVcbiAqIEBwYXJhbSB7UmVhY3RSZWZ9IHJlZlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtZXIuIPCfkYkgUmVmIHdvdWxkIGJlIF9fTk9UIHVwZGF0ZWRfXyBvbiBgdHJhbnNmb3JtZXJgIHVwZGF0ZS5cbiAqIEByZXR1cm5zIHtSZWZPYmplY3R9XG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhlS2FzaGV5L3VzZS1jYWxsYmFjay1yZWYjdXNldHJhbnNmb3JtcmVmLXRvLXJlcGxhY2UtcmVhY3R1c2VpbXBlcmF0aXZlaGFuZGxlXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IFJlc2l6YWJsZVdpdGhSZWYgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PlxuICogIDxSZXNpemFibGUgey4uLnByb3BzfSByZWY9e3VzZVRyYW5zZm9ybVJlZihyZWYsIGkgPT4gaSA/IGkucmVzaXphYmxlIDogbnVsbCl9Lz5cbiAqICk7XG4gKi9cbmZ1bmN0aW9uIHVzZVRyYW5zZm9ybVJlZihyZWYsIHRyYW5zZm9ybWVyKSB7XG4gICAgcmV0dXJuICgwLCB1c2VSZWZfMS51c2VDYWxsYmFja1JlZikobnVsbCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAoMCwgYXNzaWduUmVmXzEuYXNzaWduUmVmKShyZWYsIHRyYW5zZm9ybWVyKHZhbHVlKSk7IH0pO1xufVxuZXhwb3J0cy51c2VUcmFuc2Zvcm1SZWYgPSB1c2VUcmFuc2Zvcm1SZWY7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/useTransformRef.js\n");

/***/ })

};
;