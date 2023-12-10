import { buildCacheLifecycleHandler } from "@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Deck, GetDecksParams } from "src/services/decks/types";

import { Paginated, PaginatedArgs } from "../../../src/services/common/types";

export const decksApi = createApi({
  reducerPath: "decksApi",
  baseQuery: fetchBaseQuery({
    baseUtl: import.meta.env.VITE_BASE_API_URL,
    credentials: "include",
  }),
  tagTypes: ["Decks"],
  endpoints: (builder) => ({
    getDecks: builder.query<
      Paginated<Deck> & { maxCardsCount: number },
      PaginatedArgs<GetDecksParams>
    >({
      query: (params) => {
        return {
          url: "decks",
          params: params ?? undefined,
        };
      },
      providesTags: ["Decks"],
    }),
    getDeckById: builder.query<Deck, string>({
      query: (deckId) => `decks/${deckId}`,
    }),
  }),
});

export const { useGetDecksQuery, useGetDecksByIdQuery } = decksApi;
