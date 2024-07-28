import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const prepareHeaders = (headers, { getState }) => {
  const token = getState().auth?.token;
  if (token) {
    headers.set('Authorization', `${token}`);
  }
  return headers;
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders,
    credentials: 'include', // dodaj credentials
  })(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Obsługa odświeżania tokenu lub przekierowanie do logowania
  }

  return result;
};

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
