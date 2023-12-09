import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    credentials: "include",
  }),
  tagtypes: ["Cards"],
  endpoints: (builder) => ({
    getCards: builder.query<Paginated>({
      query: ({ deckId, ...params }) => {},
    }),
  }),
});
