import { baseApi } from "../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (categoryInfo) => ({
        url: `/categories`,
        method: "POST",
        body: categoryInfo,
      }),
    }),
  }),
});

export const { useCreateCategoryMutation } = categoryApi;
