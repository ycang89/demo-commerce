import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Product } from "@/declarations/products";
import Image from "next/image";
import { ProductImageWrapper } from "./styled";

const Index: NextPage = (props) => {
  const [product, setProduct] = useState<Product>();
  const router = useRouter();
  const { id } = router.query;

  const contentFetch = async () => {
    const { id } = router.query;
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    if (id) {
      contentFetch();
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
          <Button type="primary" variant="contained" size="large">
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
