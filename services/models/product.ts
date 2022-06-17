import { productApi } from "@/services/redux/apiServices/product";
import storeModel from "./store";

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
