import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../utils";
import { traily } from "../utils";
export const examApi = createApi({
  reducerPath: "examApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `/${traily}/tasks`,
      providesTags: ['Task'],
      pollingInterval: 900000, 
    }),
  }),
});

export const {
  useGetTasksQuery,
} = examApi;
