import { createApi } from "@reduxjs/toolkit/query/react";
import { transactionResponse, transactionResponse1 } from "../models";
import QueryString from "qs";
import { toast } from "react-toastify";
import { baseApi } from "../baseUrl";

type transactionsQueries = {
  populate: string[];
};

type getTransactionTypeCategoriesQueries = {
  populate: string;
};

export const transactionApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<transactionResponse, void>({
      query: () => {
        return `/transactions`;
      },
      providesTags: ["Transactions"],
    }),
    addTransaction: builder.mutation<
      transactionResponse1,
      transactionResponse1["data"]
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
      query: (data) => {
        console.log(data);
        const { id } = data;
        return {
          url: `/transactions/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Transactions"],
    }),
    deleteTransaction: builder.mutation<
      Pick<transactionResponse1, "message">,
      transactionResponse1["data"]["id"]
    >({
      query: (id) => {
        return {
          url: `/transactions/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Transactions"],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useAddTransactionMutation,
  useUpdateTransactionMutation,
  useDeleteTransactionMutation,
} = transactionApis;
