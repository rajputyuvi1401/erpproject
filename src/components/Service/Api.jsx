// src/services/api.jsx

import axios from "axios";

// Define base URLs
// const BASE_URL = "http://13.201.136.34:8000/All_Masters/";
const BASE_URL = "api/All_Masters/";
const TAX_CODE_URL = `${BASE_URL}Tax_Code/`;
const GST_MASTER_URL = `${BASE_URL}GST_Master/`;
const CUT_WISE_URL = `${BASE_URL}Cut_Wise/`;
const UPLOAD_URL = `${BASE_URL}upload/`;

// Home
const LOGIN_URL = "http://13.201.136.34:8000/api/Erp_admin/api/auth/login/";

export const login = async (data) => {
  try {
    const response = await axios.post(LOGIN_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error logging in:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Error logging in");
  }
};

// GST Master
export const fetchGstMasterRecords = async () => {
  try {
    const response = await axios.get(GST_MASTER_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching GST Master records:", error.message);
    throw new Error("Error fetching GST Master records");
  }
};

export const createGstMasterRecord = async (data) => {
  try {
    const response = await axios.post(GST_MASTER_URL, data);
    return response.data;
  } catch (error) {
    throw new Error("Error creating GST Master record");
  }
};

export const updateGstMasterRecord = async (id, data) => {
  try {
    const response = await axios.put(`${GST_MASTER_URL}${id}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating GST Master record:", error.message);
    throw new Error("Error updating GST Master record");
  }
};

export const deleteGstMasterRecord = async (id) => {
  try {
    await axios.delete(`${GST_MASTER_URL}${id}/`);
  } catch (error) {
    console.error("Error deleting GST Master record:", error.message);
    throw new Error("Error deleting GST Master record");
  }
};

// Tax Code Master
export const getTaxCodes = async () => {
  try {
    const response = await axios.get(TAX_CODE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tax codes:", error);
    throw error;
  }
};

export const getTaxCodeById = async (id) => {
  try {
    const response = await axios.get(`${TAX_CODE_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tax code by ID:", error);
    throw error;
  }
};

export const createTaxCode = async (taxCodeData) => {
  try {
    const response = await axios.post(TAX_CODE_URL, taxCodeData);
    return response.data;
  } catch (error) {
    console.error("Error creating tax code:", error);
    throw error;
  }
};

export const updateTaxCode = async (id, taxCodeData) => {
  try {
    const response = await axios.put(`${TAX_CODE_URL}${id}/`, taxCodeData);
    return response.data;
  } catch (error) {
    console.error("Error updating tax code:", error);
    throw error;
  }
};

export const deleteTaxCode = async (id) => {
  try {
    await axios.delete(`${TAX_CODE_URL}${id}/`);
  } catch (error) {
    console.error("Error deleting tax code:", error);
    throw error;
  }
};

// Cutwise
const CutwiseApi = {
  get: async () => {
    try {
      const response = await axios.get(CUT_WISE_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  post: async (data) => {
    try {
      const response = await axios.post(CUT_WISE_URL, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  put: async (id, data) => {
    try {
      const response = await axios.put(`${CUT_WISE_URL}${id}/`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      await axios.delete(`${CUT_WISE_URL}${id}/`);
    } catch (error) {
      throw error;
    }
  },
};

export default CutwiseApi;

// upload master

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(UPLOAD_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Upload error details:", error.response || error.message);
    throw new Error("Error uploading file");
  }
};

// Supplier Customer Master

// Bant detail
export const fetchBankDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Bank_Details/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching bank details:", error);
    throw error;
  }
};

export const addBankDetail = async (formData) => {
  try {
    await axios.post(`${BASE_URL}Bank_Details/`, formData);
  } catch (error) {
    console.error("Error adding bank detail:", error);
    throw error;
  }
};

export const deleteBankDetail = async (id) => {
  try {
    await axios.delete(`${BASE_URL}Bank_Details/${id}`);
  } catch (error) {
    console.error("Error deleting bank detail:", error);
    throw error;
  }
};

// Buyer Contact Details

export const fetchBuyerContactDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Buyer_Contact/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching buyer contact details:", error);
    throw error;
  }
};

export const addBuyerContactDetail = async (formData) => {
  try {
    await axios.post(`${BASE_URL}Buyer_Contact/`, formData);
  } catch (error) {
    console.error("Error adding buyer contact detail:", error);
    throw error;
  }
};

export const deleteBuyerContactDetail = async (id) => {
  try {
    await axios.delete(`${BASE_URL}Buyer_Contact/${id}`);
  } catch (error) {
    console.error("Error deleting buyer contact detail:", error);
    throw error;
  }
};

// Supplier Customer
export const saveSupplierCustomerData = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}Supplier_Customer/`, data);
    return response;
  } catch (error) {
    console.error("API call error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      config: error.config,
    });
    throw error;
  }
};

// Supplier Vendor List
export const getSupplierCustomerData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Supplier_Customer/`);
    return response.data;
  } catch (error) {
    console.error("API call error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      config: error.config,
    });
    throw error;
  }
};

// Item Cross Reference

export const postItemCrossReference = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}Item_Cross/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Failed to post data: ${error.message}`);
  }
};

// Cross reference supplier item

export const postSupplierItem = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}Supplier_Item/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};

// Cross reference customer -item -wise

export const saveItemRate = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}Item_VA_Rate/`, data);

    return response.data;
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    if (error.response && error.response.data) {
      console.log(error.response.data.message || "Failed to save data");
    } else {
      console.log("An unexpected error occurred");
    }
    throw error; // Rethrow error to handle it in the component if needed
  }
};

// Cycle time master add new button

export const saveCycleTimeData = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}Cycle_Time_Master/`, data);
    console.log("Cycle time master saved successfully");
    return response.data;
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );

    console.error(
      error.response?.data?.message || "Failed to save Work Center"
    );
    throw error; // Rethrow error to handle it in the component if needed
  }
};

// Work Center add new
export const saveWorkCenter = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}Work_Center/`, data);

    console.log("Work Center saved successfully");
    return response.data;
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );

    console.error(
      error.response?.data?.message || "Failed to save Work Center"
    );
    throw error; // Rethrow error to handle it in the component if needed
  }
};

// work center ke andar card card ke card

export const saveMachineGroupData = async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}Machine_Group_Work_Center/`,
      data
    );
    console.log("Machine Group saved successfully");
    return response.data; // Adjust based on API response structure
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );

    console.error(
      error.response?.data?.message || "Failed to save Work Center"
    );
    throw new Error("Error saving machine group data");
  }
};

//Work center master card

export const saveWorkCenterTypeGroupData = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}WorkCenterTypeGroup/`, data);
    console.log("data save");
    return response.data;
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );

    console.error(
      error.response?.data?.message || "Failed to save Work Center"
    );
    throw error;
  }
};

// shift master
export const saveShiftMaster = async (data) => {
  const response = await fetch(`${BASE_URL}Shift_Master/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to save data");
  }

  return response.json();
};

export const fetchShiftMasters = async () => {
  const response = await fetch(`${BASE_URL}Shift_Master/`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
