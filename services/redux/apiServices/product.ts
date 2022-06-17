import { Product, ResponseProduct } from "@/declarations/products";
import { toProductWithCurrency } from "@/utils/adapters/products";
import { baseApi } from "./base";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
      providesTags: (result) => (result ? [{ type: "Products" }] : []),
      transformResponse: (response: ResponseProduct[]) => {
        return response.length > 0
          ? response.map((product: ResponseProduct) => {
              const data = toProductWithCurrency(product);
              if (data) {
                return data;
              }
              return product;
            })
          : [];
      },
    }),
    getProductById: builder.query<Product | null, { id: number }>({
      query: (id) => `/products/${id}`,
      transformResponse: (response: ResponseProduct) => {
        const res = response ? toProductWithCurrency(response) : null;
        return res ? res : null;
      },
    }),
  }),
});

export const { useLazyGetProductsQuery, useLazyGetProductByIdQuery } =
  productApi;
