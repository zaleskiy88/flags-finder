import axios from "axios";
import { BASE_URL } from "api/index";

/**
 * Fetches a country by name from the API.
 *
 * @param {string} name - The name of the country to fetch.
 * @return {object} The country data including name, flags, population, region, capital, subregion, top-level domain, currencies, languages, and borders.
 */
export const fetchCountryByName = async (name) => {
  try {
    const response = await axios.get(
      `${BASE_URL}name/${name}/?fields=name,flags,population,region,capital,subregion,tld,currencies,languages,borders`
    );

    return response.data[0];
  } catch (error) {
    console.error("Error fetching countries:", error);
    return []; // Return an empty array in case of an error to maintain consistency of the return type
  }
};
