import { createApi } from "@reduxjs/toolkit/query/react";
import {
  categoriesBody,
  categoriesQueries,
  categoriesResponse,
  categoriesResponse1,
} from "../models";
import QueryString from "qs";
import { baseApi } from "../baseUrl";

export const categoryApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<categoriesResponse["data"], categoriesQueries>(
      {
        query: (arg) => {
          const queries = QueryString.stringify(arg, {
            encodeValuesOnly: true,
          });
          return `/categories?${queries}`;
        },
        providesTags: ["Categories"],
      }
    ),
    addBudget: builder.mutation<categoriesResponse1, categoriesBody>({
      query: (budget) => {
        return {
          url: `/categories`,
          method: "POST",
          body: { data: budget },
        };
      },
      invalidatesTags: ["Categories"],
    }),
    updateBudget: builder.mutation<
      categoriesResponse1,
      Partial<categoriesBody>
    >({
      query: (data) => {
        const { id } = data;
        return {
          url: `/categories/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Categories"],
    }),
    deleteBudget: builder.mutation<
      Pick<categoriesResponse1, "message">,
      categoriesResponse1["data"]["id"]
    >({
      query: (id) => {
        return {
          url: `/categories/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useAddBudgetMutation,
  useUpdateBudgetMutation,
  useDeleteBudgetMutation,
} = categoryApis;
