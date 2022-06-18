import { getCountryFromLocalStorage } from '@/utils/getCountry';
import { countries } from "@/constants/index";

describe('getCountryFromLocalStorage', () => {
  it.only('should return SG country details when "country_code" doesnt exist in browser local storage', () => {
      expect(getCountryFromLocalStorage()).to.deep.equal(countries[1]);
  });
  it.only('should based on "country_code" in browser local storage return related country details', () => {
      localStorage.setItem('country_code', "MY");
      expect(getCountryFromLocalStorage()).to.deep.equal(countries[0]);
      localStorage.setItem('country_code', "SG");
      expect(getCountryFromLocalStorage()).to.deep.equal(countries[1]);
  });
});
