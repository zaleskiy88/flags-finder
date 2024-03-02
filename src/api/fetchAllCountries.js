import axios from "axios";
import { ALL_COUNTRIES } from "api/index";

export const fetchAllCountries = async () => {
  try {
    const response = await axios.get(ALL_COUNTRIES);
    const limitedData = response.data; //.slice(0, 20); // Get only the first 20 countries
    return limitedData;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return []; // Return an empty array in case of an error to maintain consistency of the return type
  }
};
