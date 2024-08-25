//import { image_hosting_key } from "@/pages/dashboard/CreateProduct";
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
    // uploadImage: builder.mutation({
    //   query: () => ({
    //     url: `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
    //     method: "POST",
    //   }),
    // }),
  }),
});

export const {
  useCreateMutation,
  useGetAllProductQuery,
  useGetAllFeaturedProductQuery,
} = productApi;
