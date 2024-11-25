import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '~/shared/lib/redux/redux.query'

const tagName = 'User'

export const userApiSlice = createApi({
    reducerPath: 'userApi', 
    // 권한 필요 없으면
    // baseQuery: fetchBaseQuery({ baseUrl: "/usreApi"}),
    // 권한이 필요하면
    baseQuery: baseQueryWithReauth,
    tagTypes: [tagName],
    endpoints: builder => ({
        get: builder.query({
            query: ({page, pageSize}) => ({
                url: '/users',
                params: { page, pageSize }
            }),
            providesTags: [tagName]
        }),
        add: builder.mutation({
            query: user => ({
                method: 'POST',
                url: '/users',
                body: user
            }),
            invalidatesTags: [tagName]
        })
    })
})

export const { useGetQuery, useAddMutation, reducer } = userApiSlice