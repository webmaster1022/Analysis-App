import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import baseUrl from "../utils/baseUrl";
// import apis from "../utils/apis";
// import QueryString from "qs";

// const { transactionTypes } = apis;

// // First, create the thunk
// export const fetchTransactionTypes = createAsyncThunk(
//   "transaction-types/find",
//   async (queries?: {}) => {
//     const query = QueryString.stringify(queries, {
//       encodeValuesOnly: true, // prettify URL
//     });
//     const response = await baseUrl.get(
//       transactionTypes(undefined, query)["find"]
//     );
//     return response.data.data;
//   }
// );

// // Define a type for the slice state
// interface statesType {
//   items: {
//     id: number;
//     attributes: {
//       name: string;
//       createdAt: string;
//       updatedAt: string;
//       categories: {
//         data: {
//           id: number;
//           attributes: {
//             name: string;
//             createdAt: string;
//             publishedAt: string;
//             updatedAt: string;
//           };
//         }[];
//       };
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

// export const transactionTypeSlice = createSlice({
//   name: "transaction-types",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchTransactionTypes.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchTransactionTypes.fulfilled, (state, action) => {
//       console.log(action.payload);
//       state.isLoading = false;
//       state.items = action.payload;
//     });
//   },
// });

// export default transactionTypeSlice.reducer;
