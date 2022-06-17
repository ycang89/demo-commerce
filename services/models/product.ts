import { useState } from "react";
import { Product, ResponseProduct } from "@/declarations/products";
import { toProductWithCurrency } from "@/utils/adapters/products";
import storeModel from "./store";

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();
  const { country } = storeModel();

  const loadProducts = async () => {
    const res = await fetch("/api/products");
    const data: ResponseProduct[] = await res.json();
    console.log('country', country)
    const resT = data.map((_product) => toProductWithCurrency(_product, country))
    console.log('resT', resT)
    setProducts(
      data.map((_product) => toProductWithCurrency(_product, country))
    );
  };

  const loadProductById = async (id: number | string) => {
    const res = await fetch(`/api/products/${id}`);
    const data: ResponseProduct = await res.json();
    if (data) {
      const _product = toProductWithCurrency(data, country);
      if (_product) {
        setProduct(_product);
      }
    }
  };

  return {
    product,
    products,
    loadProducts,
    loadProductById,
  };
};

export default Index;
