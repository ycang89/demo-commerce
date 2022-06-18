import { ResponseProduct } from "@/declarations/products";
import { baseApi } from "./base";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ResponseProduct[], void>({
      query: () => "/products",
      providesTags: (result) => (result ? [{ type: "Products" }] : []),
    }),
    getProductById: builder.query<ResponseProduct, { id: number }>({
      query: (params) => `/products/${params.id}`,
    }),
  }),
});

export const { useLazyGetProductsQuery, useGetProductByIdQuery } = productApi;
