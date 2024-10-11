import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contacts-management-backend-kohl.vercel.app/api",
    credentials: "omit",
  }),

  endpoints: () => ({}),
});
