import { createApi } from "@reduxjs/toolkit/query/react";
import { login } from "../models";
import QueryString from "qs";
import { toast } from "react-toastify";
import { baseApi } from "../baseUrl";

type transactionsQueries = {
  populate: string[];
};

type getTransactionTypeCategoriesQueries = {
  populate: string;
};

export const authApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<any, login>({
      query: (data) => {
        console.log(data);
        return {
          url: `/auth/register`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation<any, login>({
      query: (data) => {
        console.log(data);
        return {
          url: `/auth/login`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    googleLogin: builder.mutation<any, login["email"]>({
      query: (data) => {
        console.log(data);
        return {
          url: `/auth/google`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation, useGoogleLoginMutation, useSignupMutation } =
  authApis;
