import { countries } from "@/constants";

export const getCountryFromLocalStorage = () => {
  if (localStorage.getItem("country_code")) {
    const countryCode = localStorage.getItem("country_code");
    const _country = countries.find(({ code }) => code === countryCode);
    if (_country) {
      return _country;
    }
  }
  return countries[1];
};
