import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl, { tagTypes } from "./baseUrl";
import {
  transactionResponse,
  transactionResponse1,
  TransactionType,
  Wallet,
} from "./models";
import QueryString from "qs";
import { toast } from "react-toastify";

type transactionsQueries = {
  populate: string[];
};

type getTransactionTypeCategoriesQueries = {
  populate: string;
};

export const apis = createApi({
  reducerPath: "budgetApi",
  baseQuery: baseUrl,
  tagTypes: tagTypes,
  endpoints: (builder) => ({
    getTransactions: builder.query<transactionResponse, void>({
      query: () => {
        return `/transactions`;
      },
      providesTags: ["Transactions"],
    }),

    getWallets: builder.query<Wallet[], void>({
      query: () => `/wallets`,
      providesTags: ["Wallets"],
    }),

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

    addTransaction: builder.mutation<
      transactionResponse1,
      transactionResponse1
    >({
      query: (transaction) => {
        return {
          url: `/transactions`,
          method: "POST",
          body: { data: transaction },
        };
      },
      invalidatesTags: ["Transactions"],
    }),
    updateTransaction: builder.mutation<
      transactionResponse1,
      Partial<transactionResponse1["data"]>
    >({
      query: (transaction) => {
        const { id, ...body } = transaction;
        return {
          url: `/transactions/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Transactions"],
    }),
    deleteTransaction: builder.mutation<
      Pick<transactionResponse1, "message">,
      Pick<transactionResponse1["data"], "id">
    >({
      query: (transaction) => {
        const { id, ...body } = transaction;
        return {
          url: `/transactions/${id}`,
          method: "DELETE",
          body,
        };
      },
      invalidatesTags: ["Transactions"],
    }),
  }),

  // : (id?: string, queries?: string) => {
  //   const name = "transactions";
  //   return {
  //     find: `/${name}?${queries}`,
  //     create: `/${name}`,
  //     update: `/${name}/${id}`,
  //     delete: `/${name}/${id}`,
  //   };
  // },
  // wallets: (id?: string) => {
  //   const name = "wallets";
  //   return {
  //     find: `/${name}`,
  //     create: `/${name}`,
  //     update: `/${name}/${id}`,
  //     delete: `/${name}/${id}`,
  //   };
  // },
  // transactionTypes: (id?: string, queries?: string) => {
  //   const name = "transaction-types";
  //   return {
  //     find: `/${name}?${queries}`,
  //     create: `/${name}`,
  //     update: `/${name}/${id}`,
  //     delete: `/${name}/${id}`,
  //   };
  // },
  // categories: (id?: string, queries?: string) => {
  //   const name = "categories";
  //   return {
  //     find: `/${name}?${queries}`,
  //     create: `/${name}`,
  //     update: `/${name}/${id}`,
  //     delete: `/${name}/${id}`,
  //   };
  // },
});

export const {
  useGetTransactionsQuery,
  useLazyGetWalletsQuery,
  useLazyGetTransactionTypesQuery,
  useAddTransactionMutation,
  useUpdateTransactionMutation,
  useDeleteTransactionMutation,
} = apis;
