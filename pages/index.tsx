import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import { useEffect } from "react";
import productModel from "@/services/models/product";

const Home: NextPage = () => {
  const { loadProducts, products } = productModel();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout>
      <Grid container spacing={4} justifyContent="center">
        {products.length > 0
          ? products.map(({ title, price, image, id, currency }) => (
              <Grid item key={id}>
                <ProductItem
                  currency={currency}
                  id={id}
                  name={title}
                  image={image}
                  price={price}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </Layout>
  );
};

export default Home;
