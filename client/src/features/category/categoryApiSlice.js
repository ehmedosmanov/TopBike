import { apiSlice } from '../../app/api/apiSlice'

const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => '/category'
    }),
    getParentCategories: builder.query({
      query: () => '/parentCategory'
    })
  })
})

export const { useGetCategoriesQuery, useGetParentCategoriesQuery } =
  categoryApiSlice

export default categoryApiSlice
