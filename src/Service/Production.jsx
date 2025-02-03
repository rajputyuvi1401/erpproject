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



  const ProductionApi = {
    // Fetch contractor names
    getContractors: async () => {
      try {
        const response = await axios.get(`${BASE_URL}Production_contractor/`);
        return response.data;
      } catch (error) {
        console.error("Error fetching contractors:", error);
        throw error;
      }
    },
  
    // Save contractor production entry
    saveProductionEntry: async (data) => {
      try {
        const response = await axios.post(`${BASE_URL}Contractor_Production_Entry/`, data);
        return response.data;
      } catch (error) {
        console.error("Error saving production entry:", error);
        throw error;
      }
    },


  // Fetch unit machines
  fetchUnitMachines: async (searchTerm = "") => {
    try {
      const response = await axios.get(`${BASE_URL}Production_unitmachine/?search=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching unit machines:", error);
      throw error;
    }
  },
  };
  
  export default ProductionApi;
  

  // Function to get the next scrap rejection number based on the series
export const getNextScrapRejectionNo = async (shortYear = "2324") => {
  try {
    const response = await axios.get(
      `${BASE_URL}scrap_rejection_no/?Shortyear=${shortYear}`
    );
    return response.data.next_scrap_rejection_no;
  } catch (error) {
    console.error("Error fetching scrap rejection number:", error);
    throw error; // Rethrow error for handling in the calling component
  }
};

// Function to submit the scrap rejection form data
export const submitScrapRejection = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}scrap_rejection/`, payload);
    return response.data;
  } catch (error) {
    console.error("Error submitting data:", error);
    throw error; // Rethrow error for handling in the calling component
  }
};

// GET all scrap rejections
export const getScrapRejections = async () => {
  try {
    const response = await axios.get(`${BASE_URL}scrap_rejection/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};

// POST a new scrap rejection
export const addScrapRejection = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}scrap_rejection/`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding data", error);
    throw error;
  }
};

// DELETE a scrap rejection by id
export const deleteScrapRejection = async (id) => {
  try {
    await axios.delete(`${BASE_URL}scrap_rejection/${id}/`);
    return id;
  } catch (error) {
    console.error("Error deleting data", error);
    throw error;
  }
};