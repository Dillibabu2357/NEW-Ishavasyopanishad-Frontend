import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL,
})

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: [
    "Adhyayas",
    "Padas",
    "Adhikarnas",
    "Sutras",
    "Transliteration",
    "Meanings",
    "Audio",
    "Video",
  ],
})
