import { productApi } from "@/services/redux/apis/product";
import { useDispatch, useSelector } from "react-redux";
import {
  setProduct,
  setProducts,
  catalogSelector,
} from "@/services/redux/slices/catalog";

const Index = () => {
  const dispatch = useDispatch();
  const [fetchProducts, { isFetching: isLoadingProducts }] =
    productApi.useLazyGetProductsQuery();
  const [fetchProductById, { isFetching: isLoadingProduct }] = productApi.useLazyGetProductByIdQuery();

  const loadProducts = () => {
    fetchProducts()
      .unwrap()
      .then((res) => {
        dispatch(setProducts(res));
        return res;
      });
  };

  const loadProductById = (id: number) => {
    fetchProductById({ id })
      .unwrap()
      .then((res) => {
        dispatch(setProduct(res));
        return res;
      });
  };

  return {
    isLoadingProduct,
    isLoadingProducts,
    product: useSelector(catalogSelector.product),
    products: useSelector(catalogSelector.products),
    loadProducts,
    loadProductById,
  };
};

export default Index;
