import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { refreshResponse } from "./models";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: "include",
});
const baseQueryWithRefresh: typeof baseQuery = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log(result);
  if (result.error && result.error.status === 401) {
    console.log("**********");
    console.log(result);
    console.log("*************");
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh-token",
        method: "GET",
      },
      api,
      extraOptions
    );
    console.log("-------------");
    console.log(refreshResult);
    console.log("-------------");
    if (typeof (refreshResult.data as refreshResponse).payload === "string") {
      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch(removeCredentials())
      baseApi.util.resetApiState();
    }
  }
  return result;
};

export const tagTypes = [
  "Transactions",
  "Wallets",
  "Transaction-types",
  "Categories",
  "Analytics",
  "Auth",
];
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefresh,
  tagTypes: [
    "Transactions",
    "Wallets",
    "Transaction-types",
    "Categories",
    "Analytics",
    "Auth",
  ],
  endpoints: () => ({}),
});
