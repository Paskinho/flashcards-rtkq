import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Paginated, PaginatedArgs } from '../common/types'

import { CreateDeckInput, Deck, DeleteDeckInput, GetDecksParams } from './types'

// Define a service using a base URL and expected endpoints
export const decksApi = createApi({
  reducerPath: 'decksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.flashcards.andrii.es/v1/', credentials: 'include' }),
  tagTypes: ['Decks'],
  endpoints: builder => ({
    getDecks: builder.query<
        Paginated<Deck> & { maxCardsCount: number },
        PaginatedArgs<GetDecksParams>
        >({
      query: params => {
        return {
          url: `decks`,
          params: params ?? undefined,
        }
      },
      providesTags: ['Decks'],
    }),
    getDeckById: builder.query<Deck, string>({
      query: deckId => `decks/${deckId}`,
    }),
    createDeck: builder.mutation<any, CreateDeckInput>({
      query: body => ({
        url: `decks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Decks'],
    }),
    deleteDeck: builder.mutation<any, DeleteDeckInput>({
      query: ({ deckId }) => ({
        url: `decks/${deckId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetDecksQuery,
  useGetDeckByIdQuery,
  useDeleteDeckMutation,
  useCreateDeckMutation,
} = decksApi