"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/budget",{

/***/ "./pages/budget/ExpenseTable/index.tsx":
/*!*********************************************!*\
  !*** ./pages/budget/ExpenseTable/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ExpenseRow\": function() { return /* binding */ ExpenseRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/sortable */ \"./node_modules/@dnd-kit/sortable/dist/sortable.esm.js\");\n/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/utilities */ \"./node_modules/@dnd-kit/utilities/dist/utilities.esm.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ExpenseRow = function(param) {\n    var classes = param.classes, children = param.children, data = param.data;\n    _s();\n    var ref = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.useSortable)({\n        id: data.id\n    }), setNodeRef = ref.setNodeRef, attributes = ref.attributes, listeners = ref.listeners, transition = ref.transition, transform = ref.transform, isDragging = ref.isDragging;\n    var style = {\n        transition: transition,\n        transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__.CSS.Transform.toString(transform),\n        opacity: isDragging ? 0.5 : 1\n    };\n    // const updateWithprops = React.Children.map(children, (child?: JSX.Element, i) => {\n    //   // props\n    //   return React.cloneElement(child, { rowData: \"data\" });\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", _objectSpread({\n        className: \"bg-primary-50 border-spacing-2\",\n        ref: setNodeRef\n    }, attributes, listeners, {\n        style: style,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                children: data.id\n            }, void 0, false, {\n                fileName: \"/home/awesomity/Videos/expense app/pages/budget/ExpenseTable/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"py-4 px-6\",\n                children: data.name\n            }, void 0, false, {\n                fileName: \"/home/awesomity/Videos/expense app/pages/budget/ExpenseTable/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }), void 0, true, {\n        fileName: \"/home/awesomity/Videos/expense app/pages/budget/ExpenseTable/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(ExpenseRow, \"UZlkPOWsYiqp8/rUZ7gB+cMn0Ds=\", false, function() {\n    return [\n        _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.useSortable\n    ];\n});\n_c = ExpenseRow;\nvar _c;\n$RefreshReg$(_c, \"ExpenseRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9idWRnZXQvRXhwZW5zZVRhYmxlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUdzQjtBQUNQOztBQVNsQyxJQUFNRyxVQUFVLEdBQW9CLGdCQUFpQztRQUE5QkMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxJQUFJLFNBQUpBLElBQUk7O0lBQ25FLElBT0lMLEdBQTRCLEdBQTVCQSw4REFBVyxDQUFDO1FBQUVNLEVBQUUsRUFBRUQsSUFBSSxDQUFDQyxFQUFFO0tBQUUsQ0FBQyxFQU45QkMsVUFBVSxHQU1SUCxHQUE0QixDQU45Qk8sVUFBVSxFQUNWQyxVQUFVLEdBS1JSLEdBQTRCLENBTDlCUSxVQUFVLEVBQ1ZDLFNBQVMsR0FJUFQsR0FBNEIsQ0FKOUJTLFNBQVMsRUFDVEMsVUFBVSxHQUdSVixHQUE0QixDQUg5QlUsVUFBVSxFQUNWQyxTQUFTLEdBRVBYLEdBQTRCLENBRjlCVyxTQUFTLEVBQ1RDLFVBQVUsR0FDUlosR0FBNEIsQ0FEOUJZLFVBQVU7SUFHWixJQUFNQyxLQUFLLEdBQUc7UUFDWkgsVUFBVSxFQUFWQSxVQUFVO1FBQ1ZDLFNBQVMsRUFBRVYsc0VBQXNCLENBQUNVLFNBQVMsQ0FBQztRQUM1Q0ssT0FBTyxFQUFFSixVQUFVLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDOUI7SUFDRCxxRkFBcUY7SUFDckYsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxNQUFNO0lBQ04scUJBQ0UsOERBQUNLLElBQUU7UUFDREMsU0FBUyxFQUFDLGdDQUFnQztRQUMxQ0MsR0FBRyxFQUFFWixVQUFVO09BQ1hDLFVBQVUsRUFDVkMsU0FBUztRQUNiSSxLQUFLLEVBQUVBLEtBQUs7OzBCQUVaLDhEQUFDTyxJQUFFO2dCQUFDRixTQUFTLEVBQUMsdUVBQXVFOzBCQUNsRmIsSUFBSSxDQUFDQyxFQUFFOzs7OztxQkFDTDswQkFDTCw4REFBQ2MsSUFBRTtnQkFBQ0YsU0FBUyxFQUFDLFdBQVc7MEJBQUViLElBQUksQ0FBQ2dCLElBQUk7Ozs7O3FCQUFNOzs7Ozs7YUFDdkMsQ0FDTDtDQUNILENBQUM7R0FqQ1duQixVQUFVOztRQVFqQkYsMERBQVc7OztBQVJKRSxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2J1ZGdldC9FeHBlbnNlVGFibGUvaW5kZXgudHN4PzAxNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTb3J0YWJsZSB9IGZyb20gXCJAZG5kLWtpdC9zb3J0YWJsZVwiO1xuaW1wb3J0IHsgQ1NTIH0gZnJvbSBcIkBkbmQta2l0L3V0aWxpdGllc1wiO1xuXG5pbnRlcmZhY2UgcHJvcHMge1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IEpTWC5FbGVtZW50O1xuICBkYXRhPzogYW55O1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEV4cGVuc2VSb3c6IFJlYWN0LkZDPHByb3BzPiA9ICh7IGNsYXNzZXMsIGNoaWxkcmVuLCBkYXRhIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHNldE5vZGVSZWYsXG4gICAgYXR0cmlidXRlcyxcbiAgICBsaXN0ZW5lcnMsXG4gICAgdHJhbnNpdGlvbixcbiAgICB0cmFuc2Zvcm0sXG4gICAgaXNEcmFnZ2luZyxcbiAgfSA9IHVzZVNvcnRhYmxlKHsgaWQ6IGRhdGEuaWQgfSk7XG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgdHJhbnNpdGlvbixcbiAgICB0cmFuc2Zvcm06IENTUy5UcmFuc2Zvcm0udG9TdHJpbmcodHJhbnNmb3JtKSxcbiAgICBvcGFjaXR5OiBpc0RyYWdnaW5nID8gMC41IDogMSxcbiAgfTtcbiAgLy8gY29uc3QgdXBkYXRlV2l0aHByb3BzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ/OiBKU1guRWxlbWVudCwgaSkgPT4ge1xuICAvLyAgIC8vIHByb3BzXG4gIC8vICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyByb3dEYXRhOiBcImRhdGFcIiB9KTtcbiAgLy8gfSk7XG4gIHJldHVybiAoXG4gICAgPHRyXG4gICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LTUwIGJvcmRlci1zcGFjaW5nLTJcIlxuICAgICAgcmVmPXtzZXROb2RlUmVmfVxuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICB7Li4ubGlzdGVuZXJzfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgID5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS00IHB4LTYgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAge2RhdGEuaWR9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTQgcHgtNlwiPntkYXRhLm5hbWV9PC90ZD5cbiAgICA8L3RyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNvcnRhYmxlIiwiQ1NTIiwiRXhwZW5zZVJvdyIsImNsYXNzZXMiLCJjaGlsZHJlbiIsImRhdGEiLCJpZCIsInNldE5vZGVSZWYiLCJhdHRyaWJ1dGVzIiwibGlzdGVuZXJzIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsImlzRHJhZ2dpbmciLCJzdHlsZSIsIlRyYW5zZm9ybSIsInRvU3RyaW5nIiwib3BhY2l0eSIsInRyIiwiY2xhc3NOYW1lIiwicmVmIiwidGQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/budget/ExpenseTable/index.tsx\n");

/***/ })

});