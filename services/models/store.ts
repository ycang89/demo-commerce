import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CountryCode } from "@/declarations/store";
import { countries } from "@/constants/index";

const Index = () => {
  const [country, setCountry] = useState(countries[1]);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("country_code")) {
      const _country = countries.find(
        ({ code }) => code === localStorage.getItem("country_code")
      );
      if (_country) {
        setCountry(_country);
      }
    }
  }, []);

  const changeCountry = (code: CountryCode) => {
    localStorage.setItem("country_code", code);
    router.reload();
  };

  return {
    countries,
    country,
    changeCountry,
  };
};

export default Index;
