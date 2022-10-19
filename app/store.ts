import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apis } from "../utils/apis";
// import transactionReducer from "../slices/transactionSlice";
// import walletReducer from "../slices/walletSlice";
// import transactionTypeReducer from "../slices/transactionTypeSlice";
// import categoryReducer from "../slices/categorySlice";

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    [apis.reducerPath]: apis.reducer,
    // transaction: transactionReducer,
    // wallet: walletReducer,
    // transactionType: transactionTypeReducer,
    // category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apis.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
