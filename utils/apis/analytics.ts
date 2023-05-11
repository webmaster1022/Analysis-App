import { createApi } from "@reduxjs/toolkit/query/react";
import { analyticsQueries, AnalyticsResponse } from "../models";
import QueryString from "qs";
import { toast } from "react-toastify";
import { baseApi } from "../baseUrl";

type transactionsQueries = {
  populate: string[];
};

type getTransactionTypeCategoriesQueries = {
  populate: string;
};

export const AnalyticsApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnalytics: builder.query<AnalyticsResponse, analyticsQueries>({
      query: (arg) => {
        const queries = QueryString.stringify(arg, {
          encodeValuesOnly: true,
        });
        return `/analytics?${queries}`;
      },
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetAnalyticsQuery } = AnalyticsApis;
