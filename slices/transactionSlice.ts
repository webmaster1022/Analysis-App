import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import baseUrl from "../utils/baseUrl";
// import apis from "../utils/apis";
// import QueryString from "qs";

// const { transactions } = apis;

// // First, create the thunk
// export const fetchTransactions = createAsyncThunk(
//   "transactions/find",
//   async (queries?: {}) => {
//     const query = QueryString.stringify(queries, {
//       encodeValuesOnly: true, // prettify URL
//     });
//     const response = await baseUrl.get(transactions(undefined, query)["find"]);
//     return response.data.data;
//   }
// );

// // Define a type for the slice state
// interface statesType {
//   items: {
//     id: number;
//     attributes: {
//       currency: string;
//       amount: number;
//       category: string;
//       createdAt: string;
//       date: string;
//       note: string;
//       publishedAt: string;
//       updatedAt: string;
//       wallet: string;
//       transaction_type: string;
//     };
//   }[];
//   isLoading: boolean;
//   error: null;
// }

// // Define the initial state using that type
// const initialState: statesType = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// export const transactionSlice = createSlice({
//   name: "transactions",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchTransactions.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchTransactions.fulfilled, (state, action) => {
//       console.log(action.payload);
//       state.isLoading = false;
//       state.items = action.payload;
//     });
//   },
// });

// export default transactionSlice.reducer;
