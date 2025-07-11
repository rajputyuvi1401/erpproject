// src/Service/SalesApi.jsx
import axios from "axios";

const API_BASE_URL = "http://3.7.91.234:8000/Sales";

export const testApiConnection = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error("API Connection Test Failed:", error);
    throw error;
  }
};

export const createOutwardChallan = async (challanData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/outward-challans/`,
      challanData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating outward challan:", error);
    throw error;
  }
};