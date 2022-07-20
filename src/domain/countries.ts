// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon
// Country area => https://github.com/samayo/country-json/blob/master/src/country-by-surface-area.json

import { areas } from "./countries.area";
import { countriesCapitals } from "./countries.capitals.position";
// import { frenchCountryNames } from "./countries.name.fr";
// import { hungarianCountryNames } from "./countries.name.hu";
// import { dutchCountryNames } from "./countries.name.nl";
// import { polishCountryNames } from "./countries.name.pl";
import { countryCodesWithImage } from "./countries.image";

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
  capital: string;
}

export const countriesWithImage = countriesCapitals.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

export const smallCountryLimit = 4000;
export const bigEnoughCountriesWithImage = countriesWithImage.filter(
  (country) => areas[country.code] > smallCountryLimit
);

export function getCountryCapital(language: string, country: Country) {
  switch (language) {
    // case "fr":
    //   return frenchCountryNames[country.code];
    // case "hu":
    //   return hungarianCountryNames[country.code];
    // case "nl":
    //   return dutchCountryNames[country.code];
    // case "pl":
    //   return polishCountryNames[country.code];
    default:
      return country.capital;
  }
}

export function sanitizeCapital(capital: string): string {
  return capital
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
