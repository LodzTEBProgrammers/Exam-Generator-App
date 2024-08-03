import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../utils";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `/user`,
      providesTags: ['User'],
      pollingInterval: 900000, // 15 minutes
    }),
  }),
});

export const {
  useGetUserQuery,
} = userApi;
