import { baseApi } from '../../api/baseApi'

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams()

        if (args) {
          Object.keys(args).forEach((key) => {
            if (Array.isArray(args[key])) {
              args[key].forEach((item) => {
                params.append(key, item)
              })
            } else {
              params.append(key, args[key])
            }
          })
        }

        return {
          url: '/products',
          method: 'GET',
          params: params,
        }
      },
      providesTags: ['products'],
      transformResponse: (response) => {
        return {
          data: response.data,
          meta: response.meta,
        }
      },
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
      invalidatesTags: ['products'],
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
