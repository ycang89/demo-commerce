import { Product, ResponseProduct } from "@/declarations/products";
import { Country } from "@/declarations/store";

export const toProductWithCurrency = (
  product: ResponseProduct,
  country: Country
): Product | null => {
  if (!product) return null;
  let price = product.price;
  if (typeof price === "string") {
    price = parseFloat(price);
  }
  const newPrice = parseFloat((price * country.exchangeRate).toFixed(2));
  return {
    ...product,
    price: newPrice,
    currency: country.currency,
  };
};
