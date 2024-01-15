import { apiSlice } from '../../app/api/apiSlice'

const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: userData => ({
        url: '/auth/login',
        method: 'POST',
        body: userData
      })
    }),
    authRegister: builder.mutation({
      query: userData => ({
        url: '/auth/register',
        method: 'POST',
        body: userData
      })
    }),
    refreshToken: builder.mutation({
      query: () => ({ url: '/auth/refresh', method: 'POST' })
    }),
    logOut: builder.mutation({
      query: () => ({ url: '/auth/logout', method: 'POST' })
    })
  })
})

export const {
  useLoginMutation,
  useAuthRegisterMutation,
  useLogOutMutation,
  useRefreshTokenMutation
} = categoryApiSlice

export default categoryApiSlice
