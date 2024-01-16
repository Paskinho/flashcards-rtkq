import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { LoginArgs, User } from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    credentials: "include",
  }),
  tagTypes: ["Me"],
  endpoints: (builder) => ({
    getMe: builder.query<User | null, void>({
      query: () => "auth/me",
      extraOptions: { maxRetries: false },
      providesTags: ["Me"],
    }),
    login: builder.mutation<LoginArgs, any>({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: email,
        password,
      }),
      invalidatesTags: ["Me"],
    }),
    signUp: builder.mutation({
      query: (body) => ({
        url: "auth/sign-up",
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation<
      unknown,
      { token: string; password: string }
    >({
      query: (token, password) => ({
        url: `auth/reset-password/${token}`,
        method: "POST",
        body: { password },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authApi.util.updateQueryData("getMe", undefined, () => {
            return null;
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetMeQuery,
  useLogoutMutation,
  useLoginMutation,
  useSignUpMutation,
} = authApi;
