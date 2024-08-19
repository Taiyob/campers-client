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
  }),
});

export const { useCreateMutation } = productApi;
