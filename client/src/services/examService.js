import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../utils";
export const examApi = createApi({
  reducerPath: "examApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `/dashboard/exams/online/v1/tasks`,
      providesTags: ['Task'],
    }),
    getExams: builder.query({
      query: () => `/dashboard/exams/online/`,
      providesTags: ['Exam'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useLazyGetExamsQuery,
  useGetExamsQuery
} = examApi;
