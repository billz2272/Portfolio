import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getAllBlogsApi = createApi({
  reducerPath: "getAllBlogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getAllBlogsApi: builder.query({
      query: () => "blog",
    }),
  }),
});

export const { useGetAllBlogsApiQuery } = getAllBlogsApi;