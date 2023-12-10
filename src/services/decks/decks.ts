import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Paginated, PaginatedArgs } from "src/services/common/types";
import { Deck, GetDecksParams } from "src/services/decks/types";

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
    >,
  }),
});
