import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hr.mediusware.xyz/api/website",
  }),
  tagTypes: ["Blogs", "Categories"],
  endpoints: () => ({}),
});
