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
  })(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Obsługa odświeżania tokenu lub przekierowanie do logowania
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/user:${id}`,
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.query({
      query: () => "/logout",
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useLazyLogoutQuery,
} = apiSlice;
