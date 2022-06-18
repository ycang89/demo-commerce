import { ablrApi } from "./ablr";

export const orderApi = ablrApi.injectEndpoints({
  endpoints: (builder) => ({
    checkout: builder.mutation<void, { store_id: string; amount: string }>({
      query: (params) => {
        return {
          url: "/checkout/",
          method: "POST",
          body: params,
        };
      },
    }),
  }),
});

export const { useCheckoutMutation } = orderApi;
