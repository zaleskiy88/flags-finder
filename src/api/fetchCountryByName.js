import axios from "axios";
import { searchByCountry } from "api/index";

export const fetchCountryByName = async (name) => {
  try {
    const response = await axios.get(searchByCountry(name));
    return response.data[0];
  } catch (error) {
    console.error("Error fetching countries:", error);
    return []; // Return an empty array in case of an error to maintain consistency of the return type
  }
};
