import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "../../../axios/axios";

export const getBlogsApi = createApi({
  reducerPath: "getBlogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: axios }),
  endpoints: (builder) => ({
    getAllProviders: builder.query({
      query: () => "blog",
    }),
  }),
});

export const { useGetBlogsApiQuery } = getBlogsApi;