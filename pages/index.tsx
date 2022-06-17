import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import { useEffect } from "react";
import productModel from "@/services/models/product";
import { Product } from "@/declarations/products";
const Home: NextPage = () => {
  const { loadProducts, products } = productModel();

  useEffect(() => {
    loadProducts();
  });

  return (
    <Layout>
      <Grid container spacing={4} justifyContent="center">
        {products.length > 0
          ? products.map((product: Product) => (
              <Grid item key={product.id}>
                <ProductItem
                  currency={product.currency}
                  id={product.id}
                  name={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </Layout>
  );
};

export default Home;
