import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import baseUrl from "../utils/baseUrl";
// import apis from "../utils/apis";

// const { wallets } = apis;

// // First, create the thunk
// export const fetchWallets = createAsyncThunk(
//   "wallets/find",
//   async (queries?: string) => {
//     const response = await baseUrl.get(wallets()["find"]);
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
//     transactions?: {}[];
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

// export const walletSlice = createSlice({
//   name: "wallets",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchWallets.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchWallets.fulfilled, (state, action) => {
//       console.log(action.payload);
//       state.isLoading = false;
//       state.items = action.payload;
//     });
//   },
// });

// export default walletSlice.reducer;
