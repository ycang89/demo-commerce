import * as React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ProductItemBox, ProductItemName, ProductImageWrapper } from "./styled";

export default function Index({
  name,
  price,
  image,
  id,
}: {
  name: string;
  price: number;
  image: string;
  id: number;
}) {
  return (
    <Link href={`/product/${id}`}>
      <ProductItemBox>
        {image ? (
          <ProductImageWrapper>
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="contain"
              objectPosition="contain"
            />
          </ProductImageWrapper>
        ) : null}
        <ProductItemName align="center">{name}</ProductItemName>
        <Typography variant="body2" align="center">
          {price}
        </Typography>
      </ProductItemBox>
    </Link>
  );
}
