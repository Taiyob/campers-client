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
    getAllCategories: builder.query({
      query: () => ({
        url: `/categories`,
        method: `GET`,
      }),
    }),
  }),
});

export const { useCreateCategoryMutation, useGetAllCategoriesQuery } =
  categoryApi;
