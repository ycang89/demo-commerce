import { useState } from "react";
import { Product } from "@/declarations/products";

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();

  const loadProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const loadProductById = async (id: number | string) => {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  return {
    product,
    products,
    loadProducts,
    loadProductById,
  };
};

export default Index;
