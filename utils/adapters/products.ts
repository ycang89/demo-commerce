import { Product, ResponseProduct } from "@/declarations/products";
import { Country } from "@/declarations/store";
import { getCountryFromLocalStorage } from "@/utils/getCountry";

export const toProductWithCurrency = (
  product: ResponseProduct
): Product | null => {
  if (!product) return null;
  const country: Country = getCountryFromLocalStorage();
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
