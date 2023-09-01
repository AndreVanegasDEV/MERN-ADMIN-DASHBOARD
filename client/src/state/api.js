import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
    "Lideres",
    "Votantes",
    "Reuniones"
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getLideres: build.query({
      query: () => "lideres/all",
      providesTags: ["Lideres"],
    }),
    createLider: build.mutation({
      query: ({ nombre, ciudad, cedula, celular, correo }) => ({
        url: 'lideres/add',
        method: 'POST',
        body: { nombre, ciudad, cedula, celular, correo },
      })
    }),
    getVotantes: build.query({
      query: () => "votantes/all",
      providesTags: ["Votantes"],
    }),
    createVotante: build.mutation({
      query: (data) => ({
        url: 'votantes/add',
        method: 'POST',
        body: data,
      })
    }),
    getReuniones: build.query({
      query: () => "reuniones/all",
      providesTags: ["Reuniones"],
    }),
    createReunion: build.mutation({
      query: (data) => ({
        url: 'reuniones/add',
        method: 'POST',
        body: data,
      })
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetLideresQuery,
  useGetVotantesQuery,
  useGetReunionesQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
  useCreateLiderMutation,
  useCreateVotanteMutation,
  useCreateReunionMutation,
} = api;
