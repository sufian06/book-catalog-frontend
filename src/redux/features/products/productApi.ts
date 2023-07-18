import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/books',
    }),

    singleProduct: builder.query({
      query: (id) => `/books/${id}`,
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reviews'],
    }),

    getComment: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ['reviews'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = productApi;
