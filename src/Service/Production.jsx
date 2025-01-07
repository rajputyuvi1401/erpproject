import axios from "axios";

const BASE_URL = "http://13.201.136.34:8000/Production/";
// const BASE_URL = "api/Production/";

export const createWorkOrder = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}workorderentry/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating work order:", error);
      throw error;
    }
  };


  export const fetchWorkOrders = async () => {
    try {
      const response = await axios.get(`${BASE_URL}workorderentry/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Work Orders:", error);
      throw error;
    }
  };

  