import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api',
  credentials: 'include'
})

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)
//   if (result?.error && result?.error?.status === 401) {
//     const refreshResult = await baseQuery('/refreshToken', api, extraOptions)
//     if (refreshResult?.data) {
//       //Store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data, user }))
//       // retry the original query with new access token
//       result = await baseQuery(args, api, extraOptions)
//     } else {
//       api.dispatch(logOut())
//     }
//   }
//   return result
// }

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: builder => ({})
})
