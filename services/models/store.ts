import { useEffect } from "react";
import { useRouter } from "next/router";
import { CountryCode } from "@/declarations/store";
import { countries } from "@/constants/index";
import { useDispatch, useSelector } from "react-redux";
import { setCountry, uiAppSelectors } from "@/services/redux/slices/uiApp";
import { getCountryFromLocalStorage } from "@/utils/getCountry";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCountry(getCountryFromLocalStorage()));
  });

  const changeCountry = (code: CountryCode) => {
    localStorage.setItem("country_code", code);
    setTimeout(() => router.reload(), 0);
  };

  return {
    countries,
    country: useSelector(uiAppSelectors.country),
    changeCountry,
  };
};

export default Index;
