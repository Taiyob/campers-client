import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (productInfo) => ({
        url: `/products`,
        method: "POST",
        body: productInfo,
      }),
    }),
    getAllProduct: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
    getAllFeaturedProduct: builder.query({
      query: () => ({
        url: `/products/featured-product`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateMutation,
  useGetAllProductQuery,
  useGetAllFeaturedProductQuery,
} = productApi;
