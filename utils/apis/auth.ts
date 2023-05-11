import { createApi } from "@reduxjs/toolkit/query/react";
import { login } from "../models";
import QueryString from "qs";
import { toast } from "react-toastify";
import { baseApi } from "../baseUrl";
import omit from "lodash.omit";

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
        return {
          url: `/auth/login`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    googleLogin: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `/auth/login/google?${data.query}`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    forgotPassword: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `/auth/forgot-password`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    resetPassword: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `/auth/reset-password/${data.id}`,
          method: "PUT",
          body: omit(data, ["id"]),
        };
      },
      invalidatesTags: ["Auth"],
    }),
    findUser: builder.query<any, any>({
      query: (data) => {
        return {
          url: `/user/${data.id}`,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),
    logout: builder.query<any, void>({
      query: () => {
        return {
          url: `/auth/logout`,
          method: "GET",
        };
      },
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGoogleLoginMutation,
  useSignupMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useFindUserQuery,
  useLazyLogoutQuery,
} = authApis;
