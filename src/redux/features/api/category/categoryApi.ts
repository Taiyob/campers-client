import { baseApi } from "../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (categoryInfo) => ({
        url: `/categories`,
        method: "POST",
        body: categoryInfo,
      }),
    }),
  }),
});

export const { useCreateMutation } = categoryApi;
