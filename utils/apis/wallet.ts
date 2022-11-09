import { createApi } from "@reduxjs/toolkit/query/react";
import { Wallet } from "../models";
import { baseApi } from "../baseUrl";

type transactionsQueries = {
  populate: string[];
};

type getTransactionTypeCategoriesQueries = {
  populate: string;
};

export const walletApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWallets: builder.query<Wallet[], void>({
      query: () => `/wallets`,
      providesTags: ["Wallets"],
    }),
  }),
});

export const { useLazyGetWalletsQuery } = walletApis;
