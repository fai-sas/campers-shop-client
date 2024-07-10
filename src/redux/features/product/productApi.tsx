import { baseApi } from '../../api/baseApi'

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['products'],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
      invalidatesTags: ['products'],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products/create-product',
        method: 'POST',
        body: data,
      }),
      // invalidatesTags: ['products'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['products'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['products'],
    }),
  }),
})

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi
