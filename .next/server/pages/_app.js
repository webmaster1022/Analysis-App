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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store */ \"./app/store.ts\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _app_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/awesomity/Videos/expense app/pages/_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                position: \"bottom-right\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true,\n                theme: \"light\"\n            }, void 0, false, {\n                fileName: \"/home/awesomity/Videos/expense app/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/awesomity/Videos/expense app/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWdDO0FBRU87QUFDRjtBQUNrQjtBQUNSO0FBRS9DLFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDTCxpREFBUTtRQUFDQyxLQUFLLEVBQUVBLDZDQUFLOzswQkFDcEIsOERBQUNHLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7MEJBQzVCLDhEQUFDSCwwREFBYztnQkFDYkksUUFBUSxFQUFDLGNBQWM7Z0JBQ3ZCQyxTQUFTLEVBQUUsSUFBSTtnQkFDZkMsZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCQyxXQUFXLEVBQUUsS0FBSztnQkFDbEJDLFlBQVk7Z0JBQ1pDLEdBQUcsRUFBRSxLQUFLO2dCQUNWQyxnQkFBZ0I7Z0JBQ2hCQyxTQUFTO2dCQUNUQyxZQUFZO2dCQUNaQyxLQUFLLEVBQUMsT0FBTzs7Ozs7b0JBQ2I7Ozs7OztZQUNPLENBQ1g7Q0FDSDtBQUVELGlFQUFlWixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXNoaW9uLXN0b3JlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vYXBwL3N0b3JlXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgIHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCJcbiAgICAgICAgYXV0b0Nsb3NlPXszMDAwfVxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XG4gICAgICAgIGNsb3NlT25DbGlja1xuICAgICAgICBydGw9e2ZhbHNlfVxuICAgICAgICBwYXVzZU9uRm9jdXNMb3NzXG4gICAgICAgIGRyYWdnYWJsZVxuICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJUb2FzdENvbnRhaW5lciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJuZXdlc3RPblRvcCIsImNsb3NlT25DbGljayIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiLCJkcmFnZ2FibGUiLCJwYXVzZU9uSG92ZXIiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/apis.ts":
/*!***********************!*\
  !*** ./utils/apis.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apis\": () => (/* binding */ apis),\n/* harmony export */   \"useAddTransactionMutation\": () => (/* binding */ useAddTransactionMutation),\n/* harmony export */   \"useDeleteTransactionMutation\": () => (/* binding */ useDeleteTransactionMutation),\n/* harmony export */   \"useGetTransactionsQuery\": () => (/* binding */ useGetTransactionsQuery),\n/* harmony export */   \"useLazyGetTransactionTypesQuery\": () => (/* binding */ useLazyGetTransactionTypesQuery),\n/* harmony export */   \"useLazyGetWalletsQuery\": () => (/* binding */ useLazyGetWalletsQuery),\n/* harmony export */   \"useUpdateTransactionMutation\": () => (/* binding */ useUpdateTransactionMutation)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ \"./utils/baseUrl.ts\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst apis = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"budgetApi\",\n    baseQuery: _baseUrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    tagTypes: _baseUrl__WEBPACK_IMPORTED_MODULE_1__.tagTypes,\n    endpoints: (builder)=>({\n            getTransactions: builder.query({\n                query: ()=>{\n                    return `/transactions`;\n                },\n                providesTags: [\n                    \"Transactions\"\n                ]\n            }),\n            getWallets: builder.query({\n                query: ()=>`/wallets`\n                ,\n                providesTags: [\n                    \"Wallets\"\n                ]\n            }),\n            getTransactionTypes: builder.query({\n                query: (arg)=>{\n                    const queries = qs__WEBPACK_IMPORTED_MODULE_2___default().stringify(arg, {\n                        encodeValuesOnly: true\n                    });\n                    return `/transaction-types?${queries}`;\n                },\n                transformResponse: (response, meta, arg)=>response.data\n                ,\n                providesTags: [\n                    \"Transaction-types\"\n                ]\n            }),\n            addTransaction: builder.mutation({\n                query: (transaction)=>{\n                    return {\n                        url: `/transactions`,\n                        method: \"POST\",\n                        body: {\n                            data: transaction\n                        }\n                    };\n                },\n                invalidatesTags: [\n                    \"Transactions\"\n                ]\n            }),\n            updateTransaction: builder.mutation({\n                query: (transaction)=>{\n                    const { id , ...body } = transaction;\n                    return {\n                        url: `/transactions/${id}`,\n                        method: \"PUT\",\n                        body\n                    };\n                },\n                invalidatesTags: [\n                    \"Transactions\"\n                ]\n            }),\n            deleteTransaction: builder.mutation({\n                query: (transaction)=>{\n                    const { id , ...body } = transaction;\n                    return {\n                        url: `/transactions/${id}`,\n                        method: \"DELETE\",\n                        body\n                    };\n                },\n                invalidatesTags: [\n                    \"Transactions\"\n                ]\n            })\n        })\n});\nconst { useGetTransactionsQuery , useLazyGetWalletsQuery , useLazyGetTransactionTypesQuery , useAddTransactionMutation , useUpdateTransactionMutation , useDeleteTransactionMutation ,  } = apis;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXNoaW9uLXN0b3JlLy4vdXRpbHMvYXBpcy50cz80NjZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XG5pbXBvcnQgYmFzZVVybCwgeyB0YWdUeXBlcyB9IGZyb20gXCIuL2Jhc2VVcmxcIjtcbmltcG9ydCB7XG4gIHRyYW5zYWN0aW9uUmVzcG9uc2UsXG4gIHRyYW5zYWN0aW9uUmVzcG9uc2UxLFxuICBUcmFuc2FjdGlvblR5cGUsXG4gIFdhbGxldCxcbn0gZnJvbSBcIi4vbW9kZWxzXCI7XG5pbXBvcnQgUXVlcnlTdHJpbmcgZnJvbSBcInFzXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG50eXBlIHRyYW5zYWN0aW9uc1F1ZXJpZXMgPSB7XG4gIHBvcHVsYXRlOiBzdHJpbmdbXTtcbn07XG5cbnR5cGUgZ2V0VHJhbnNhY3Rpb25UeXBlQ2F0ZWdvcmllc1F1ZXJpZXMgPSB7XG4gIHBvcHVsYXRlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgYXBpcyA9IGNyZWF0ZUFwaSh7XG4gIHJlZHVjZXJQYXRoOiBcImJ1ZGdldEFwaVwiLFxuICBiYXNlUXVlcnk6IGJhc2VVcmwsXG4gIHRhZ1R5cGVzOiB0YWdUeXBlcyxcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICBnZXRUcmFuc2FjdGlvbnM6IGJ1aWxkZXIucXVlcnk8dHJhbnNhY3Rpb25SZXNwb25zZSwgdm9pZD4oe1xuICAgICAgcXVlcnk6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAvdHJhbnNhY3Rpb25zYDtcbiAgICAgIH0sXG4gICAgICBwcm92aWRlc1RhZ3M6IFtcIlRyYW5zYWN0aW9uc1wiXSxcbiAgICB9KSxcblxuICAgIGdldFdhbGxldHM6IGJ1aWxkZXIucXVlcnk8V2FsbGV0W10sIHZvaWQ+KHtcbiAgICAgIHF1ZXJ5OiAoKSA9PiBgL3dhbGxldHNgLFxuICAgICAgcHJvdmlkZXNUYWdzOiBbXCJXYWxsZXRzXCJdLFxuICAgIH0pLFxuXG4gICAgZ2V0VHJhbnNhY3Rpb25UeXBlczogYnVpbGRlci5xdWVyeTxcbiAgICAgIFRyYW5zYWN0aW9uVHlwZVtdLFxuICAgICAgZ2V0VHJhbnNhY3Rpb25UeXBlQ2F0ZWdvcmllc1F1ZXJpZXNcbiAgICA+KHtcbiAgICAgIHF1ZXJ5OiAoYXJnKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJpZXMgPSBRdWVyeVN0cmluZy5zdHJpbmdpZnkoYXJnLCB7XG4gICAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBgL3RyYW5zYWN0aW9uLXR5cGVzPyR7cXVlcmllc31gO1xuICAgICAgfSxcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2U6IHsgZGF0YTogVHJhbnNhY3Rpb25UeXBlW10gfSwgbWV0YSwgYXJnKSA9PlxuICAgICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcHJvdmlkZXNUYWdzOiBbXCJUcmFuc2FjdGlvbi10eXBlc1wiXSxcbiAgICB9KSxcblxuICAgIGFkZFRyYW5zYWN0aW9uOiBidWlsZGVyLm11dGF0aW9uPFxuICAgICAgdHJhbnNhY3Rpb25SZXNwb25zZTEsXG4gICAgICB0cmFuc2FjdGlvblJlc3BvbnNlMVxuICAgID4oe1xuICAgICAgcXVlcnk6ICh0cmFuc2FjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVybDogYC90cmFuc2FjdGlvbnNgLFxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogeyBkYXRhOiB0cmFuc2FjdGlvbiB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGludmFsaWRhdGVzVGFnczogW1wiVHJhbnNhY3Rpb25zXCJdLFxuICAgIH0pLFxuICAgIHVwZGF0ZVRyYW5zYWN0aW9uOiBidWlsZGVyLm11dGF0aW9uPFxuICAgICAgdHJhbnNhY3Rpb25SZXNwb25zZTEsXG4gICAgICBQYXJ0aWFsPHRyYW5zYWN0aW9uUmVzcG9uc2UxW1wiZGF0YVwiXT5cbiAgICA+KHtcbiAgICAgIHF1ZXJ5OiAodHJhbnNhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCwgLi4uYm9keSB9ID0gdHJhbnNhY3Rpb247XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXJsOiBgL3RyYW5zYWN0aW9ucy8ke2lkfWAsXG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgIGJvZHksXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgaW52YWxpZGF0ZXNUYWdzOiBbXCJUcmFuc2FjdGlvbnNcIl0sXG4gICAgfSksXG4gICAgZGVsZXRlVHJhbnNhY3Rpb246IGJ1aWxkZXIubXV0YXRpb248XG4gICAgICBQaWNrPHRyYW5zYWN0aW9uUmVzcG9uc2UxLCBcIm1lc3NhZ2VcIj4sXG4gICAgICBQaWNrPHRyYW5zYWN0aW9uUmVzcG9uc2UxW1wiZGF0YVwiXSwgXCJpZFwiPlxuICAgID4oe1xuICAgICAgcXVlcnk6ICh0cmFuc2FjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCB7IGlkLCAuLi5ib2R5IH0gPSB0cmFuc2FjdGlvbjtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmw6IGAvdHJhbnNhY3Rpb25zLyR7aWR9YCxcbiAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IFtcIlRyYW5zYWN0aW9uc1wiXSxcbiAgICB9KSxcbiAgfSksXG5cbiAgLy8gOiAoaWQ/OiBzdHJpbmcsIHF1ZXJpZXM/OiBzdHJpbmcpID0+IHtcbiAgLy8gICBjb25zdCBuYW1lID0gXCJ0cmFuc2FjdGlvbnNcIjtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgZmluZDogYC8ke25hbWV9PyR7cXVlcmllc31gLFxuICAvLyAgICAgY3JlYXRlOiBgLyR7bmFtZX1gLFxuICAvLyAgICAgdXBkYXRlOiBgLyR7bmFtZX0vJHtpZH1gLFxuICAvLyAgICAgZGVsZXRlOiBgLyR7bmFtZX0vJHtpZH1gLFxuICAvLyAgIH07XG4gIC8vIH0sXG4gIC8vIHdhbGxldHM6IChpZD86IHN0cmluZykgPT4ge1xuICAvLyAgIGNvbnN0IG5hbWUgPSBcIndhbGxldHNcIjtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgZmluZDogYC8ke25hbWV9YCxcbiAgLy8gICAgIGNyZWF0ZTogYC8ke25hbWV9YCxcbiAgLy8gICAgIHVwZGF0ZTogYC8ke25hbWV9LyR7aWR9YCxcbiAgLy8gICAgIGRlbGV0ZTogYC8ke25hbWV9LyR7aWR9YCxcbiAgLy8gICB9O1xuICAvLyB9LFxuICAvLyB0cmFuc2FjdGlvblR5cGVzOiAoaWQ/OiBzdHJpbmcsIHF1ZXJpZXM/OiBzdHJpbmcpID0+IHtcbiAgLy8gICBjb25zdCBuYW1lID0gXCJ0cmFuc2FjdGlvbi10eXBlc1wiO1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBmaW5kOiBgLyR7bmFtZX0/JHtxdWVyaWVzfWAsXG4gIC8vICAgICBjcmVhdGU6IGAvJHtuYW1lfWAsXG4gIC8vICAgICB1cGRhdGU6IGAvJHtuYW1lfS8ke2lkfWAsXG4gIC8vICAgICBkZWxldGU6IGAvJHtuYW1lfS8ke2lkfWAsXG4gIC8vICAgfTtcbiAgLy8gfSxcbiAgLy8gY2F0ZWdvcmllczogKGlkPzogc3RyaW5nLCBxdWVyaWVzPzogc3RyaW5nKSA9PiB7XG4gIC8vICAgY29uc3QgbmFtZSA9IFwiY2F0ZWdvcmllc1wiO1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBmaW5kOiBgLyR7bmFtZX0/JHtxdWVyaWVzfWAsXG4gIC8vICAgICBjcmVhdGU6IGAvJHtuYW1lfWAsXG4gIC8vICAgICB1cGRhdGU6IGAvJHtuYW1lfS8ke2lkfWAsXG4gIC8vICAgICBkZWxldGU6IGAvJHtuYW1lfS8ke2lkfWAsXG4gIC8vICAgfTtcbiAgLy8gfSxcbn0pO1xuXG5leHBvcnQgY29uc3Qge1xuICB1c2VHZXRUcmFuc2FjdGlvbnNRdWVyeSxcbiAgdXNlTGF6eUdldFdhbGxldHNRdWVyeSxcbiAgdXNlTGF6eUdldFRyYW5zYWN0aW9uVHlwZXNRdWVyeSxcbiAgdXNlQWRkVHJhbnNhY3Rpb25NdXRhdGlvbixcbiAgdXNlVXBkYXRlVHJhbnNhY3Rpb25NdXRhdGlvbixcbiAgdXNlRGVsZXRlVHJhbnNhY3Rpb25NdXRhdGlvbixcbn0gPSBhcGlzO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImJhc2VVcmwiLCJ0YWdUeXBlcyIsIlF1ZXJ5U3RyaW5nIiwiYXBpcyIsInJlZHVjZXJQYXRoIiwiYmFzZVF1ZXJ5IiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsImdldFRyYW5zYWN0aW9ucyIsInF1ZXJ5IiwicHJvdmlkZXNUYWdzIiwiZ2V0V2FsbGV0cyIsImdldFRyYW5zYWN0aW9uVHlwZXMiLCJhcmciLCJxdWVyaWVzIiwic3RyaW5naWZ5IiwiZW5jb2RlVmFsdWVzT25seSIsInRyYW5zZm9ybVJlc3BvbnNlIiwicmVzcG9uc2UiLCJtZXRhIiwiZGF0YSIsImFkZFRyYW5zYWN0aW9uIiwibXV0YXRpb24iLCJ0cmFuc2FjdGlvbiIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJpbnZhbGlkYXRlc1RhZ3MiLCJ1cGRhdGVUcmFuc2FjdGlvbiIsImlkIiwiZGVsZXRlVHJhbnNhY3Rpb24iLCJ1c2VHZXRUcmFuc2FjdGlvbnNRdWVyeSIsInVzZUxhenlHZXRXYWxsZXRzUXVlcnkiLCJ1c2VMYXp5R2V0VHJhbnNhY3Rpb25UeXBlc1F1ZXJ5IiwidXNlQWRkVHJhbnNhY3Rpb25NdXRhdGlvbiIsInVzZVVwZGF0ZVRyYW5zYWN0aW9uTXV0YXRpb24iLCJ1c2VEZWxldGVUcmFuc2FjdGlvbk11dGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/apis.ts\n");

/***/ }),

/***/ "./utils/baseUrl.ts":
/*!**************************!*\
  !*** ./utils/baseUrl.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"tagTypes\": () => (/* binding */ tagTypes)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n    baseUrl: \"http://localhost:1337/api/\"\n}));\nconst tagTypes = [\n    \"Transactions\",\n    \"Wallets\",\n    \"Transaction-types\",\n    \"Categories\",\n    \"Analytics\", \n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9iYXNlVXJsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEQ7QUFFOUQsaUVBQWVBLDRFQUFjLENBQUM7SUFDNUJDLE9BQU8sRUFBRSw0QkFBNEI7Q0FDdEMsQ0FBQyxFQUFDO0FBRUksTUFBTUMsUUFBUSxHQUFHO0lBQ3RCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0NBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc2hpb24tc3RvcmUvLi91dGlscy9iYXNlVXJsLnRzPzkzMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEJhc2VRdWVyeSh7XG4gIGJhc2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9cIixcbn0pO1xuXG5leHBvcnQgY29uc3QgdGFnVHlwZXMgPSBbXG4gIFwiVHJhbnNhY3Rpb25zXCIsXG4gIFwiV2FsbGV0c1wiLFxuICBcIlRyYW5zYWN0aW9uLXR5cGVzXCIsXG4gIFwiQ2F0ZWdvcmllc1wiLFxuICBcIkFuYWx5dGljc1wiLFxuXTtcbiJdLCJuYW1lcyI6WyJmZXRjaEJhc2VRdWVyeSIsImJhc2VVcmwiLCJ0YWdUeXBlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/baseUrl.ts\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



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

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

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