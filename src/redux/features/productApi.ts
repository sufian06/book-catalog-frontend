import { api } from "../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id as string}`,
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery } = productApi;
