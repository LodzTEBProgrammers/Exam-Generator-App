import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Funkcja pomocnicza do przygotowania nagłówków
const prepareHeaders = (headers, { getState }) => {
  // Pobieranie tokenu JWT z reduxa lub lokalnego stanu
  const token = getState().auth.token;
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};

// Obsługa błędów
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await fetchBaseQuery({
    baseUrl: "https://localhost:5000",
    prepareHeaders,
  })(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Obsługa odświeżania tokenu lub przekierowanie do logowania
    // Tu możesz zaimplementować mechanizm odświeżania tokenu
    // lub przekierowanie użytkownika do strony logowania
    
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
