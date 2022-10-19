/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store.ts":
/*!**********************!*\
  !*** ./app/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query */ \"@reduxjs/toolkit/query\");\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/apis */ \"./utils/apis.ts\");\n\n\n\n// import transactionReducer from \"../slices/transactionSlice\";\n// import walletReducer from \"../slices/walletSlice\";\n// import transactionTypeReducer from \"../slices/transactionTypeSlice\";\n// import categoryReducer from \"../slices/categorySlice\";\n//Global store\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        //reducers are defined here\n        [_utils_apis__WEBPACK_IMPORTED_MODULE_2__.apis.reducerPath]: _utils_apis__WEBPACK_IMPORTED_MODULE_2__.apis.reducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_utils_apis__WEBPACK_IMPORTED_MODULE_2__.apis.middleware)\n});\n(0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.setupListeners)(store.dispatch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ007QUFDbkI7QUFDckMsK0RBQStEO0FBQy9ELHFEQUFxRDtBQUNyRCx1RUFBdUU7QUFDdkUseURBQXlEO0FBRXpELGNBQWM7QUFDUCxNQUFNRyxLQUFLLEdBQUdILGdFQUFjLENBQUM7SUFDbENJLE9BQU8sRUFBRTtRQUNQLDJCQUEyQjtRQUMzQixDQUFDRix5REFBZ0IsQ0FBQyxFQUFFQSxxREFBWTtLQUtqQztJQUNESSxVQUFVLEVBQUUsQ0FBQ0Msb0JBQW9CLEdBQy9CQSxvQkFBb0IsRUFBRSxDQUFDQyxNQUFNLENBQUNOLHdEQUFlLENBQUM7Q0FDakQsQ0FBQyxDQUFDO0FBTUhELHNFQUFjLENBQUNFLEtBQUssQ0FBQ00sUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXNoaW9uLXN0b3JlLy4vYXBwL3N0b3JlLnRzPzc4MWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgc2V0dXBMaXN0ZW5lcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeVwiO1xuaW1wb3J0IHsgYXBpcyB9IGZyb20gXCIuLi91dGlscy9hcGlzXCI7XG4vLyBpbXBvcnQgdHJhbnNhY3Rpb25SZWR1Y2VyIGZyb20gXCIuLi9zbGljZXMvdHJhbnNhY3Rpb25TbGljZVwiO1xuLy8gaW1wb3J0IHdhbGxldFJlZHVjZXIgZnJvbSBcIi4uL3NsaWNlcy93YWxsZXRTbGljZVwiO1xuLy8gaW1wb3J0IHRyYW5zYWN0aW9uVHlwZVJlZHVjZXIgZnJvbSBcIi4uL3NsaWNlcy90cmFuc2FjdGlvblR5cGVTbGljZVwiO1xuLy8gaW1wb3J0IGNhdGVnb3J5UmVkdWNlciBmcm9tIFwiLi4vc2xpY2VzL2NhdGVnb3J5U2xpY2VcIjtcblxuLy9HbG9iYWwgc3RvcmVcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIC8vcmVkdWNlcnMgYXJlIGRlZmluZWQgaGVyZVxuICAgIFthcGlzLnJlZHVjZXJQYXRoXTogYXBpcy5yZWR1Y2VyLFxuICAgIC8vIHRyYW5zYWN0aW9uOiB0cmFuc2FjdGlvblJlZHVjZXIsXG4gICAgLy8gd2FsbGV0OiB3YWxsZXRSZWR1Y2VyLFxuICAgIC8vIHRyYW5zYWN0aW9uVHlwZTogdHJhbnNhY3Rpb25UeXBlUmVkdWNlcixcbiAgICAvLyBjYXRlZ29yeTogY2F0ZWdvcnlSZWR1Y2VyLFxuICB9LFxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XG4gICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQoYXBpcy5taWRkbGV3YXJlKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XG5cbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xuXG5zZXR1cExpc3RlbmVycyhzdG9yZS5kaXNwYXRjaCk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJzZXR1cExpc3RlbmVycyIsImFwaXMiLCJzdG9yZSIsInJlZHVjZXIiLCJyZWR1Y2VyUGF0aCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImNvbmNhdCIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store */ \"./app/store.ts\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _app_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/awesomity/Videos/expense app/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/awesomity/Videos/expense app/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQWdDO0FBRU87QUFDRjtBQUVyQyxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0osaURBQVE7UUFBQ0MsS0FBSyxFQUFFQSw2Q0FBSztrQkFDcEIsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDbkIsQ0FDWDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc2hpb24tc3RvcmUvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHAvc3RvcmVcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/apis.ts":
/*!***********************!*\
  !*** ./utils/apis.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apis\": () => (/* binding */ apis),\n/* harmony export */   \"useAddTransactionMutation\": () => (/* binding */ useAddTransactionMutation),\n/* harmony export */   \"useGetTransactionsQuery\": () => (/* binding */ useGetTransactionsQuery),\n/* harmony export */   \"useLazyGetTransactionTypesQuery\": () => (/* binding */ useLazyGetTransactionTypesQuery),\n/* harmony export */   \"useLazyGetWalletsQuery\": () => (/* binding */ useLazyGetWalletsQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ \"./utils/baseUrl.ts\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst apis = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"budgetApi\",\n    baseQuery: _baseUrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    tagTypes: _baseUrl__WEBPACK_IMPORTED_MODULE_1__.tagTypes,\n    endpoints: (builder)=>({\n            getTransactions: builder.query({\n                query: ()=>{\n                    return `/transactions`;\n                },\n                providesTags: [\n                    \"Transactions\"\n                ]\n            }),\n            getWallets: builder.query({\n                query: ()=>`/wallets`\n                ,\n                providesTags: [\n                    \"Wallets\"\n                ]\n            }),\n            getTransactionTypes: builder.query({\n                query: (arg)=>{\n                    const queries = qs__WEBPACK_IMPORTED_MODULE_2___default().stringify(arg, {\n                        encodeValuesOnly: true\n                    });\n                    return `/transaction-types?${queries}`;\n                },\n                transformResponse: (response, meta, arg)=>response.data\n                ,\n                providesTags: [\n                    \"Transaction-types\"\n                ]\n            }),\n            addTransaction: builder.mutation({\n                query: (transaction)=>{\n                    return {\n                        url: `/transactions`,\n                        method: \"POST\",\n                        body: {\n                            data: transaction\n                        }\n                    };\n                },\n                invalidatesTags: [\n                    \"Transactions\"\n                ]\n            })\n        })\n});\nconst { useGetTransactionsQuery , useLazyGetWalletsQuery , useLazyGetTransactionTypesQuery , useAddTransactionMutation ,  } = apis;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hcGlzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDWDtBQU9qQjtBQVV0QixNQUFNSSxJQUFJLEdBQUdKLHVFQUFTLENBQUM7SUFDNUJLLFdBQVcsRUFBRSxXQUFXO0lBQ3hCQyxTQUFTLEVBQUVMLGdEQUFPO0lBQ2xCQyxRQUFRLEVBQUVBLDhDQUFRO0lBQ2xCSyxTQUFTLEVBQUUsQ0FBQ0MsT0FBTyxHQUFLLENBQUM7WUFDdkJDLGVBQWUsRUFBRUQsT0FBTyxDQUFDRSxLQUFLLENBQTRCO2dCQUN4REEsS0FBSyxFQUFFLElBQU07b0JBQ1gsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUN4QjtnQkFDREMsWUFBWSxFQUFFO29CQUFDLGNBQWM7aUJBQUM7YUFDL0IsQ0FBQztZQUVGQyxVQUFVLEVBQUVKLE9BQU8sQ0FBQ0UsS0FBSyxDQUFpQjtnQkFDeENBLEtBQUssRUFBRSxJQUFNLENBQUMsUUFBUSxDQUFDO2dCQUFBO2dCQUN2QkMsWUFBWSxFQUFFO29CQUFDLFNBQVM7aUJBQUM7YUFDMUIsQ0FBQztZQUVGRSxtQkFBbUIsRUFBRUwsT0FBTyxDQUFDRSxLQUFLLENBR2hDO2dCQUNBQSxLQUFLLEVBQUUsQ0FBQ0ksR0FBRyxHQUFLO29CQUNkLE1BQU1DLE9BQU8sR0FBR1osbURBQXFCLENBQUNXLEdBQUcsRUFBRTt3QkFDekNHLGdCQUFnQixFQUFFLElBQUk7cUJBQ3ZCLENBQUM7b0JBQ0YsT0FBTyxDQUFDLG1CQUFtQixFQUFFRixPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUN4QztnQkFDREcsaUJBQWlCLEVBQUUsQ0FBQ0MsUUFBcUMsRUFBRUMsSUFBSSxFQUFFTixHQUFHLEdBQ2xFSyxRQUFRLENBQUNFLElBQUk7Z0JBQUE7Z0JBQ2ZWLFlBQVksRUFBRTtvQkFBQyxtQkFBbUI7aUJBQUM7YUFDcEMsQ0FBQztZQUVGVyxjQUFjLEVBQUVkLE9BQU8sQ0FBQ2UsUUFBUSxDQUc5QjtnQkFDQWIsS0FBSyxFQUFFLENBQUNjLFdBQVcsR0FBSztvQkFDdEIsT0FBTzt3QkFDTEMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO3dCQUNwQkMsTUFBTSxFQUFFLE1BQU07d0JBQ2RDLElBQUksRUFBRTs0QkFBRU4sSUFBSSxFQUFFRyxXQUFXO3lCQUFFO3FCQUM1QixDQUFDO2lCQUNIO2dCQUNESSxlQUFlLEVBQUU7b0JBQUMsY0FBYztpQkFBQzthQUNsQyxDQUFDO1NBQ0gsQ0FBQztDQXNDSCxDQUFDLENBQUM7QUFFSSxNQUFNLEVBQ1hDLHVCQUF1QixHQUN2QkMsc0JBQXNCLEdBQ3RCQywrQkFBK0IsR0FDL0JDLHlCQUF5QixLQUMxQixHQUFHNUIsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzaGlvbi1zdG9yZS8uL3V0aWxzL2FwaXMudHM/NDY2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xuaW1wb3J0IGJhc2VVcmwsIHsgdGFnVHlwZXMgfSBmcm9tIFwiLi9iYXNlVXJsXCI7XG5pbXBvcnQge1xuICB0cmFuc2FjdGlvblJlc3BvbnNlLFxuICB0cmFuc2FjdGlvblJlc3BvbnNlMSxcbiAgVHJhbnNhY3Rpb25UeXBlLFxuICBXYWxsZXQsXG59IGZyb20gXCIuL21vZGVsc1wiO1xuaW1wb3J0IFF1ZXJ5U3RyaW5nIGZyb20gXCJxc1wiO1xuXG50eXBlIHRyYW5zYWN0aW9uc1F1ZXJpZXMgPSB7XG4gIHBvcHVsYXRlOiBzdHJpbmdbXTtcbn07XG5cbnR5cGUgZ2V0VHJhbnNhY3Rpb25UeXBlQ2F0ZWdvcmllc1F1ZXJpZXMgPSB7XG4gIHBvcHVsYXRlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgYXBpcyA9IGNyZWF0ZUFwaSh7XG4gIHJlZHVjZXJQYXRoOiBcImJ1ZGdldEFwaVwiLFxuICBiYXNlUXVlcnk6IGJhc2VVcmwsXG4gIHRhZ1R5cGVzOiB0YWdUeXBlcyxcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICBnZXRUcmFuc2FjdGlvbnM6IGJ1aWxkZXIucXVlcnk8dHJhbnNhY3Rpb25SZXNwb25zZSwgdm9pZD4oe1xuICAgICAgcXVlcnk6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAvdHJhbnNhY3Rpb25zYDtcbiAgICAgIH0sXG4gICAgICBwcm92aWRlc1RhZ3M6IFtcIlRyYW5zYWN0aW9uc1wiXSxcbiAgICB9KSxcblxuICAgIGdldFdhbGxldHM6IGJ1aWxkZXIucXVlcnk8V2FsbGV0W10sIHZvaWQ+KHtcbiAgICAgIHF1ZXJ5OiAoKSA9PiBgL3dhbGxldHNgLFxuICAgICAgcHJvdmlkZXNUYWdzOiBbXCJXYWxsZXRzXCJdLFxuICAgIH0pLFxuXG4gICAgZ2V0VHJhbnNhY3Rpb25UeXBlczogYnVpbGRlci5xdWVyeTxcbiAgICAgIFRyYW5zYWN0aW9uVHlwZVtdLFxuICAgICAgZ2V0VHJhbnNhY3Rpb25UeXBlQ2F0ZWdvcmllc1F1ZXJpZXNcbiAgICA+KHtcbiAgICAgIHF1ZXJ5OiAoYXJnKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJpZXMgPSBRdWVyeVN0cmluZy5zdHJpbmdpZnkoYXJnLCB7XG4gICAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBgL3RyYW5zYWN0aW9uLXR5cGVzPyR7cXVlcmllc31gO1xuICAgICAgfSxcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2U6IHsgZGF0YTogVHJhbnNhY3Rpb25UeXBlW10gfSwgbWV0YSwgYXJnKSA9PlxuICAgICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcHJvdmlkZXNUYWdzOiBbXCJUcmFuc2FjdGlvbi10eXBlc1wiXSxcbiAgICB9KSxcblxuICAgIGFkZFRyYW5zYWN0aW9uOiBidWlsZGVyLm11dGF0aW9uPFxuICAgICAgdHJhbnNhY3Rpb25SZXNwb25zZTEsXG4gICAgICB0cmFuc2FjdGlvblJlc3BvbnNlMVxuICAgID4oe1xuICAgICAgcXVlcnk6ICh0cmFuc2FjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVybDogYC90cmFuc2FjdGlvbnNgLFxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogeyBkYXRhOiB0cmFuc2FjdGlvbiB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGludmFsaWRhdGVzVGFnczogW1wiVHJhbnNhY3Rpb25zXCJdLFxuICAgIH0pLFxuICB9KSxcblxuICAvLyA6IChpZD86IHN0cmluZywgcXVlcmllcz86IHN0cmluZykgPT4ge1xuICAvLyAgIGNvbnN0IG5hbWUgPSBcInRyYW5zYWN0aW9uc1wiO1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBmaW5kOiBgLyR7bmFtZX0/JHtxdWVyaWVzfWAsXG4gIC8vICAgICBjcmVhdGU6IGAvJHtuYW1lfWAsXG4gIC8vICAgICB1cGRhdGU6IGAvJHtuYW1lfS8ke2lkfWAsXG4gIC8vICAgICBkZWxldGU6IGAvJHtuYW1lfS8ke2lkfWAsXG4gIC8vICAgfTtcbiAgLy8gfSxcbiAgLy8gd2FsbGV0czogKGlkPzogc3RyaW5nKSA9PiB7XG4gIC8vICAgY29uc3QgbmFtZSA9IFwid2FsbGV0c1wiO1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBmaW5kOiBgLyR7bmFtZX1gLFxuICAvLyAgICAgY3JlYXRlOiBgLyR7bmFtZX1gLFxuICAvLyAgICAgdXBkYXRlOiBgLyR7bmFtZX0vJHtpZH1gLFxuICAvLyAgICAgZGVsZXRlOiBgLyR7bmFtZX0vJHtpZH1gLFxuICAvLyAgIH07XG4gIC8vIH0sXG4gIC8vIHRyYW5zYWN0aW9uVHlwZXM6IChpZD86IHN0cmluZywgcXVlcmllcz86IHN0cmluZykgPT4ge1xuICAvLyAgIGNvbnN0IG5hbWUgPSBcInRyYW5zYWN0aW9uLXR5cGVzXCI7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIGZpbmQ6IGAvJHtuYW1lfT8ke3F1ZXJpZXN9YCxcbiAgLy8gICAgIGNyZWF0ZTogYC8ke25hbWV9YCxcbiAgLy8gICAgIHVwZGF0ZTogYC8ke25hbWV9LyR7aWR9YCxcbiAgLy8gICAgIGRlbGV0ZTogYC8ke25hbWV9LyR7aWR9YCxcbiAgLy8gICB9O1xuICAvLyB9LFxuICAvLyBjYXRlZ29yaWVzOiAoaWQ/OiBzdHJpbmcsIHF1ZXJpZXM/OiBzdHJpbmcpID0+IHtcbiAgLy8gICBjb25zdCBuYW1lID0gXCJjYXRlZ29yaWVzXCI7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIGZpbmQ6IGAvJHtuYW1lfT8ke3F1ZXJpZXN9YCxcbiAgLy8gICAgIGNyZWF0ZTogYC8ke25hbWV9YCxcbiAgLy8gICAgIHVwZGF0ZTogYC8ke25hbWV9LyR7aWR9YCxcbiAgLy8gICAgIGRlbGV0ZTogYC8ke25hbWV9LyR7aWR9YCxcbiAgLy8gICB9O1xuICAvLyB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHVzZUdldFRyYW5zYWN0aW9uc1F1ZXJ5LFxuICB1c2VMYXp5R2V0V2FsbGV0c1F1ZXJ5LFxuICB1c2VMYXp5R2V0VHJhbnNhY3Rpb25UeXBlc1F1ZXJ5LFxuICB1c2VBZGRUcmFuc2FjdGlvbk11dGF0aW9uLFxufSA9IGFwaXM7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiYmFzZVVybCIsInRhZ1R5cGVzIiwiUXVlcnlTdHJpbmciLCJhcGlzIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJlbmRwb2ludHMiLCJidWlsZGVyIiwiZ2V0VHJhbnNhY3Rpb25zIiwicXVlcnkiLCJwcm92aWRlc1RhZ3MiLCJnZXRXYWxsZXRzIiwiZ2V0VHJhbnNhY3Rpb25UeXBlcyIsImFyZyIsInF1ZXJpZXMiLCJzdHJpbmdpZnkiLCJlbmNvZGVWYWx1ZXNPbmx5IiwidHJhbnNmb3JtUmVzcG9uc2UiLCJyZXNwb25zZSIsIm1ldGEiLCJkYXRhIiwiYWRkVHJhbnNhY3Rpb24iLCJtdXRhdGlvbiIsInRyYW5zYWN0aW9uIiwidXJsIiwibWV0aG9kIiwiYm9keSIsImludmFsaWRhdGVzVGFncyIsInVzZUdldFRyYW5zYWN0aW9uc1F1ZXJ5IiwidXNlTGF6eUdldFdhbGxldHNRdWVyeSIsInVzZUxhenlHZXRUcmFuc2FjdGlvblR5cGVzUXVlcnkiLCJ1c2VBZGRUcmFuc2FjdGlvbk11dGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/apis.ts\n");

/***/ }),

/***/ "./utils/baseUrl.ts":
/*!**************************!*\
  !*** ./utils/baseUrl.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"tagTypes\": () => (/* binding */ tagTypes)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n    baseUrl: \"http://localhost:1337/api/\"\n}));\nconst tagTypes = [\n    \"Transactions\",\n    \"Wallets\",\n    \"Transaction-types\",\n    \"Categories\", \n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9iYXNlVXJsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEQ7QUFFOUQsaUVBQWVBLDRFQUFjLENBQUM7SUFDNUJDLE9BQU8sRUFBRSw0QkFBNEI7Q0FDdEMsQ0FBQyxFQUFDO0FBRUksTUFBTUMsUUFBUSxHQUFHO0lBQ3RCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7Q0FDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzaGlvbi1zdG9yZS8uL3V0aWxzL2Jhc2VVcmwudHM/OTMzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaEJhc2VRdWVyeSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQmFzZVF1ZXJ5KHtcbiAgYmFzZVVybDogXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL1wiLFxufSk7XG5cbmV4cG9ydCBjb25zdCB0YWdUeXBlcyA9IFtcbiAgXCJUcmFuc2FjdGlvbnNcIixcbiAgXCJXYWxsZXRzXCIsXG4gIFwiVHJhbnNhY3Rpb24tdHlwZXNcIixcbiAgXCJDYXRlZ29yaWVzXCIsXG5dO1xuIl0sIm5hbWVzIjpbImZldGNoQmFzZVF1ZXJ5IiwiYmFzZVVybCIsInRhZ1R5cGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/baseUrl.ts\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query":
/*!*****************************************!*\
  !*** external "@reduxjs/toolkit/query" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();