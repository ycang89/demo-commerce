import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { ProductImageWrapper } from "./styled";
import productModel from "@/services/models/product";

const Index: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loadProductById, product } = productModel();

  useEffect(() => {
    if (id) {
      loadProductById(id);
    }
  }, [id]);

  if (!product) return null;

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            {product.title}
          </Typography>
          <Rating readOnly value={product.stars} />
          <br />
          <Typography variant="body2" paragraph>
            {product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <br />
          <Button color="primary" variant="contained" size="large">
            Add to cart
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <ProductImageWrapper>
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              objectPosition="contain"
            />
          </ProductImageWrapper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Index;
