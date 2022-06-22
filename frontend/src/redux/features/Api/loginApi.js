import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "../../../axios/axios";

export const loginApi = createApi({
    reducerPath: "loginProviderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: axios + "/api",
        prepareHeaders: (headers, { getState }) => {
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWI2ZDI1NTI3YjA5OTgzNzU4MTdjZCIsImlhdCI6MTY1NTg2NTUyOCwiZXhwIjoxNjU4NDU3NTI4fQ.kW-u4flywH_94H2Vp0dZ4SvlhjlY2s4lRjtzZP9PfJ0`;
    //   const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set(
          "authorization",
          `Bearer ${token}`,
          `ContentType: application/json`,
        );
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.query({
      query: () => "Login",
    }),
  }),
});
export const { useLoginQuery } = loginApi;