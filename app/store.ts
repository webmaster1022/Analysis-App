import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "../utils/baseUrl";
// import transactionReducer from "../slices/transactionSlice";
// import walletReducer from "../slices/walletSlice";
// import transactionTypeReducer from "../slices/transactionTypeSlice";
// import categoryReducer from "../slices/categorySlice";

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    [baseApi.reducerPath]: baseApi.reducer,
    // transaction: transactionReducer,
    // wallet: walletReducer,
    // transactionType: transactionTypeReducer,
    // category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
