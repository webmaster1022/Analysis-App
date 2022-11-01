import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export default fetchBaseQuery({
  baseUrl: "http://localhost:1337/api/",
});

export const tagTypes = [
  "Transactions",
  "Wallets",
  "Transaction-types",
  "Categories",
  "Analytics",
];
