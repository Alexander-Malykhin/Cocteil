import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://cocteil.local/backend/public',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json')
            return headers
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useLoginMutation } = authApi
