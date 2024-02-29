const BASE_URL = "https://restcountries.com/v3.1/";

export const ALL_COUNTRIES = `${BASE_URL}all?fields=name,flags,population,region,capital`;

// Function searchByCountry to search for a country by name and return specific fields.
// @param {string} name - The name of the country to search for
// @return {string} The URL for searching the country by name with specific fields
export const searchByCountry = (name) =>
  `${BASE_URL}name/${name}/?fields=name,flags,population,region,capital,subregion,tld,currencies,languages,borders`;

export const filterByCode = (codes) =>
  `${BASE_URL}alpha?codes=${codes.join(",")}`;
