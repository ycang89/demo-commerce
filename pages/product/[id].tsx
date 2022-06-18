import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { ProductImageWrapper } from "./styled";
import catalogModel from "@/models/catalog";
import orderModel from "@/models/order";
import { toPriceWithTwoDecimal } from "@/utils/adapters/products";
import _isEmpty from "lodash/isEmpty";

const Index: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loadProductById, product, isLoadingProduct } = catalogModel();
  const { isLoadingMakePayment, makePayment } = orderModel();

  useEffect(() => {
    if (id) {
      loadProductById(id);
    }
  }, [id]);

  const onClickCheckout = (amount: string) => {
    makePayment(amount);
  };

  return (
    <Layout>
      <Grid container flexDirection={{ xs: "column-reverse", md: "row" }}>
        {isLoadingProduct ? (
          <CircularProgress />
        ) : product && !_isEmpty(product) ? (
          <>
            <Grid item xs={12} md={7} data-cy="product-content">
              <Typography variant="h4" component="h1" fontWeight="bold">
                {product.title}
              </Typography>
              <Rating readOnly value={product.stars} />
              <br />
              <Typography variant="body2" paragraph>
                {product.currency} {toPriceWithTwoDecimal(product.price)}
              </Typography>
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>
              <br />
              <Button
                disabled={isLoadingMakePayment}
                color="primary"
                variant="contained"
                size="large"
                onClick={onClickCheckout.bind(
                  this,
                  toPriceWithTwoDecimal(product.price)
                )}
                data-cy="checkout-button"
              >
                Checkout with Ablr
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
          </>
        ) : (
          <Grid item xs={12}>
            <Typography>No product found.</Typography>
          </Grid>
        )}
      </Grid>
    </Layout>
  );
};

export default Index;
