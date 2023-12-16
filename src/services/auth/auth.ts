import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

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
  }),
});
