import { productApi } from "@/services/redux/apiServices/product";

const Index = () => {
  const [loadProducts, { data: products = [] }] = productApi.useLazyGetProductsQuery();
  const [loadProductById, { data: product }] = productApi.useLazyGetProductByIdQuery();

  return {
    product,
    products,
    loadProducts,
    loadProductById,
  };
};

export default Index;
