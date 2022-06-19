import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import { useEffect } from "react";
import catalogModel from "@/models/catalog";
import { Product } from "@/declarations/products";
import { CircularProgress } from "@mui/material";

const Home: NextPage = () => {
  const { loadProducts, products, isLoadingProducts } = catalogModel();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout>
      <Grid container spacing={4} justifyContent="center">
        <span onClick={() => window.onerror("TestError: Hello world", window.location.href)}>Error</span>
        {isLoadingProducts ? (
          <CircularProgress />
        ) : products.length > 0 ? (
          products.map((product: Product) => (
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
        ) : (
          <Grid item xs={12}>
            <Typography>No data.</Typography>
          </Grid>
        )}
      </Grid>
    </Layout>
  );
};

export default Home;
