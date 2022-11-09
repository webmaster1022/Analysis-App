import { createApi } from "@reduxjs/toolkit/query/react";
import { categoriesResponse } from "../models";
import QueryString from "qs";
import { baseApi } from "../baseUrl";

type transactionsQueries = {
  populate: string[];
};

type getTransactionTypeCategoriesQueries = {
  populate: string;
};

export const categoryApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<categoriesResponse["data"], void>({
      query: () => `/categories`,
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApis;
