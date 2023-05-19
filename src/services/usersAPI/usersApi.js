import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getUsers: builder.mutation({
      query: ({ per_page, since }) => ({
        url: `/users?per_page=${per_page}&since=${since}`,
      }),
    }),
    getUser: builder.query({
      query: (login) => ({
        url: `/users/${login}`,
      }),
    }),
  }),
})

export const { useGetUsersMutation, useGetUserQuery } = usersApi
