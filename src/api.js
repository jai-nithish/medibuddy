import axios from "axios";

const API_URL = "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";

export const fetchPageConfig = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.page_config;
  } catch (error) {
    console.error("Error fetching page config:", error);
    return [];
  }
};
