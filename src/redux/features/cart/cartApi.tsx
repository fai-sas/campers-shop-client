import { baseApi } from '../../api/baseApi'

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCarts: builder.query({
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
          url: '/cart',
          method: 'GET',
          params: params,
        }
      },
      providesTags: ['cart'],
      transformResponse: (response) => {
        return {
          data: response.data,
          meta: response.meta,
        }
      },
    }),

    getSingleCart: builder.query({
      query: (id) => ({
        url: `/cart/${id}`,
        method: 'GET',
      }),
      invalidatesTags: ['cart'],
    }),
    addCart: builder.mutation({
      query: (data) => ({
        url: '/cart/create-cart',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['cart'],
    }),
    updateCart: builder.mutation({
      query: ({ id, data }) => ({
        url: `/cart/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['cart'],
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
  }),
})

export const {
  useGetAllCartsQuery,
  useGetSingleCartQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi
