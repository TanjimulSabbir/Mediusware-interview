import { apiSlice } from "../../services/apiSlice";
export const blogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs/",
      providesTags: ["Blogs"],
    }),
    getBlogCategories: builder.query({
      query: () => "/blogs/categories/",
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogCategoriesQuery } = blogsApi;
