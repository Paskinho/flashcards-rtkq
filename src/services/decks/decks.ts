import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const decksApi = createApi({
    reducerPath: "decksApi",
    baseQuery: fetchBaseQuery({baseUtl: import.meta.env.VITE_BASE_API_URL, credentials: 'include' })
    tagTypes: ['Decks'],
    endpoints: builer => ({

    })

});
