// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/mocks/products";
import { Products } from "@/declarations/products";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products>
) {
  res.status(200).json(data);
}
