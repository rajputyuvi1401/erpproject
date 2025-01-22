import axios from "axios";

// const BASE_URL = "http://13.201.136.34:8000/Production/";
const BASE_URL = "api/Production/";

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

  // Production Entry
  export const fetchOperators = async (searchTerm = "") => {
    try {
      const response = await axios.get(`${BASE_URL}Production_operators/?search=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching operators:", error);
      throw error;
    }
  };

  export const fetchSupervisors = async (searchTerm = "") => {
    try {
      const response = await axios.get(`${BASE_URL}Production_supervisors/?search=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching supervisors:", error);
      throw error;
    }
  };

  export const fetchContractors = async (searchTerm = "") => {
    try {
      const response = await axios.get(`${BASE_URL}Production_contractor/?search=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching contractors:", error);
      throw error;
    }
  };

  export const fetchUnitMachines = async (searchTerm = "") => {
    try {
      const response = await axios.get(`${BASE_URL}Production_unitmachine/?search=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching unit machines:", error);
      throw error;
    }
  };