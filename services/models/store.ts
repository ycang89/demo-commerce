import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CountryCode, Country } from "@/declarations/store";
import { countries } from "@/constants/index";

const Index = () => {
  const [country, setCountry] = useState<Country>(countries[1]);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("country_code")) {
      const _country = countries.find(
        ({ code }) => code === localStorage.getItem("country_code")
      );
      if (_country) {
        setCountry(countries[1]);
      }
    } else {
      localStorage.setItem("country_code", countries[1].code);
      setCountry(countries[1]);
    }
  }, [])

  const changeCountry = (code: CountryCode) => {
    localStorage.setItem("country_code", code);
    setTimeout(() => router.reload(), 0);
  };

  return {
    countries,
    country,
    changeCountry,
  };
};

export default Index;
