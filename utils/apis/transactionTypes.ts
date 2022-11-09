import { createApi } from "@reduxjs/toolkit/query/react";
import { TransactionType } from "../models";
import QueryString from "qs";
import { baseApi } from "../baseUrl";

type transactionsQueries = {
  populate: string[];
};

type getTransactionTypeCategoriesQueries = {
  populate: string;
};

export const transactionTypesApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactionTypes: builder.query<
      TransactionType[],
      getTransactionTypeCategoriesQueries
    >({
      query: (arg) => {
        const queries = QueryString.stringify(arg, {
          encodeValuesOnly: true,
        });
        return `/transaction-types?${queries}`;
      },
      transformResponse: (response: { data: TransactionType[] }, meta, arg) =>
        response.data,
      providesTags: ["Transaction-types"],
    }),
  }),
});

export const { useLazyGetTransactionTypesQuery } = transactionTypesApis;
