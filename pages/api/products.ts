// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/mocks/products";
import { ResponseProduct } from "@/declarations/products";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProduct[]>
) {
  res.status(200).json(data);
}
