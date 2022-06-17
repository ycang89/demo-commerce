import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [products, setProducts] = useState([]);

  const contentFetch = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    contentFetch();
  }, []);

  return (
    <Layout>
      <Grid container spacing={4} justifyContent="center">
        {products.length > 0
          ? products.map(({ title, price, image, id }) => (
              <Grid item key={id}>
                <ProductItem id={id} name={title} image={image} price={price} />
              </Grid>
            ))
          : null}
      </Grid>
    </Layout>
  );
};

export default Home;
