import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { isEmpty } from "remeda";
import {
  Card,
  CreateCardInput,
  DeleteCardInput,
  GetCardsParams,
} from "src/services/cards/types";

import { Paginated } from "../../../src/services/common/types";

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    credentials: "include",
  }),
  tagTypes: ["Cards"],
  endpoints: (builder) => ({
    getCards: builder.query<Paginated<Card>, GetCardsParams>({
      query: ({ deckId, ...params }) => {
        return {
          url: `decks/${deckId}/cards`,
          params: isEmpty(params) ? undefined : params,
        }
      },
      providesTags: ['Cards'],
    }),
    createCard: builder.mutation<any, CreateCardInput>({
      query: ({ deckId, ...body }) => ({
        url: `decks/${deckId}/cards`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cards'],
    }),
    deleteCard: builder.mutation<any, DeleteCardInput>({
      query: ({ cardId }) => ({
        url: `cards/${cardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
});

export const {
  useGetCardsQuery,
  useDeleteCardMutation,
  useCreateCardMutation,
} = cardsApi;
