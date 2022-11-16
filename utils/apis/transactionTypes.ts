import { createApi } from "@reduxjs/toolkit/query/react";
import { TransactionType } from "../models";
import QueryString from "qs";
import { baseApi } from "../baseUrl";

type transactionsQueries = {
  populate: string[];
};

export interface transactionTypeCategoriesQueries {
  user?: number;
}
[];

export const transactionTypesApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactionTypes: builder.query<
      TransactionType[],
      transactionTypeCategoriesQueries
    >({
      query: (arg) => {
        const queries = QueryString.stringify(arg, {
          encodeValuesOnly: true,
        });
        return `/transaction-types?${queries}`;
      },
      transformResponse: (response: TransactionType[], meta, arg) => response,
      providesTags: ["Transaction-types"],
    }),
  }),
});

export const { useLazyGetTransactionTypesQuery } = transactionTypesApis;
