import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/mocks/products";
import { Product } from "@/declarations/products";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | {}>
) {
  const { id }  = req.query;
  const product = data.find((product) => product.id === parseInt(id));
  res.status(200).json(product ? product : {});
}
