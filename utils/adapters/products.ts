import { Product, ResponseProduct } from "@/declarations/products";
import { Country } from "@/declarations/store";
import { getCountryFromLocalStorage } from "@/utils/getCountry";
import _isEmpty from 'lodash/isEmpty'
export const toProductWithCurrency = (
  product: ResponseProduct
): Product | null => {
  if (_isEmpty(product)) return null;
  const country: Country = getCountryFromLocalStorage();
  let price = product.price;
  if (typeof price === "string") {
    price = parseFloat(price);
  }
  const newPrice = parseFloat((price * country.exchangeRate).toFixed(10));
  return {
    ...product,
    price: newPrice,
    currency: country.currency,
  };
};
