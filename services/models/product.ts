import { productApi } from "@/services/redux/apiServices/product";

const Index = () => {
  const [
    loadProducts,
    {
      data: products = [],
      isLoading: isLoadingProducts,
      isFetching: isFetchingProducts,
    },
  ] = productApi.useLazyGetProductsQuery();
  const [loadProductById, { data: product }] =
    productApi.useLazyGetProductByIdQuery();

  return {
    isLoadingProducts: isLoadingProducts || isFetchingProducts,
    product,
    products,
    loadProducts,
    loadProductById,
  };
};

export default Index;
