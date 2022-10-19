import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import baseUrl from "../utils/baseUrl";
// import apis from "../utils/apis";
// import QueryString from "qs";

// const { categories } = apis;

// // First, create the thunk
// export const fetchCategories = createAsyncThunk(
//   "categories/find",
//   async (queries?: {}) => {
//     const query = QueryString.stringify(queries, {
//       encodeValuesOnly: true, // prettify URL
//     });
//     const response = await baseUrl.get(categories(undefined, query)["find"]);
//     return response.data;
//   }
// );

// // Define a type for the slice state
// interface statesType {
//   items: {
//     id: number;
//     name: string;
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//     transaction_type: {
//       id: number;
//       name: string;
//       createdAt: string;
//       publishedAt: string;
//       updatedAt: string;
//     };
//   }[];
//   value: string;
//   isLoading: boolean;
//   error: null;
// }

// // Define the initial state using that type
// const initialState: statesType = {
//   items: [],
//   value: "",
//   isLoading: false,
//   error: null,
// };

// export const categorySlice = createSlice({
//   name: "categories",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchCategories.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchCategories.fulfilled, (state, action) => {
//       console.log(action.payload);
//       state.isLoading = false;
//       state.items = action.payload;
//       state.value = action.payload[0];
//     });
//   },
// });

// export default categorySlice.reducer;
