import axios from "axios";
import { BASE_URL } from "api/index";

export const fetchCountryByCodes = async (codes) => {
  try {
    if (codes.length > 0) {
      const response = await axios.get(`${BASE_URL}alpha?codes=${codes}`);
      return response.data;
    }
    return;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};
