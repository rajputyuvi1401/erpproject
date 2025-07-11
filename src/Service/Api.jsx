// src/services/api.jsx

import axios from "axios";

// Define base URLs
const BASE_URL = "http://3.7.91.234:8000/All_Masters/";
// const BASE_URL = "api/All_Masters/";

const TAX_CODE_URL = `${BASE_URL}Tax_Code/`;
const GST_MASTER_URL = `${BASE_URL}GST_Master/`;
const CUT_WISE_URL = `${BASE_URL}Cut_Wise/`;
const UPLOAD_URL = `${BASE_URL}upload/`;

// Home
const BASE_URL1 = "http://3.7.91.234:8000";
// const BASE_URL1 = "api";

export async function postRequest(endpoint, data) {
  try {
    const response = await fetch(`${BASE_URL1}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData };
    }

    const responseData = await response.json();
    return { data: responseData };
  } catch (error) {
    return { error: error.message };
  }
}


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

export const updateBankDetail = async (id, formData) => {
  try {
    await axios.put(`${BASE_URL}Bank_Details/${id}/`, formData);
  } catch (error) {
    console.error("Error updating bank detail:", error);
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

export const updateBuyerContactDetail = async (id, formData) => {
  try {
    await axios.put(`${BASE_URL}Buyer_Contact/${id}/`, formData);  // Note the trailing slash
  } catch (error) {
    console.error("Error updating buyer contact detail:", error);
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
export const getNextNumber = async (type) => {
  try{
  const response = await fetch(`${BASE_URL}items/?type=${type}`);
  const data = await response.json();
    
  if (data && data.next_number) {
    return data.next_number;  // Return next_number if found
  } else {
    return "";  // Return empty string if no next_number found
  }
} catch (error) {
  console.error("Error fetching next number:", error);
  return "";  // Return empty string in case of error
}
};

// Function to save form data
export const SuplliersaveData = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}items/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;  // Return false in case of error
  }
};

// Supplier Vendor List
export const getSupplierCustomerData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}items/details/`);
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

// Supplier card 1

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}Type/`);
  if (!response.ok) throw new Error("Failed to fetch categories");
  return response.json();
};

export const addCategory = async (categoryName) => {
  const response = await fetch(`${BASE_URL}Type/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Category_Name: categoryName }),
  });
  if (!response.ok) throw new Error("Failed to add category");
  return response.json();
};

export const updateCategory = async (id, categoryName) => {
  const response = await fetch(`${BASE_URL}Type/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Category_Name: categoryName }),
  });
  if (!response.ok) throw new Error("Failed to update category");
  return response.json();
};

export const deleteCategory = async (id) => {
  const response = await fetch(`${BASE_URL}Type/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete category");
};

// Fetch all cities
export const fetchCities = async () => {
  const response = await fetch(`${BASE_URL}City/`);
  if (!response.ok) throw new Error("Failed to fetch cities");
  return response.json();
};

export const addCity = async (cityName) => {
  const response = await fetch(`${BASE_URL}City/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ CityName: cityName }),
  });
  if (!response.ok) throw new Error("Failed to add city");
  return response.json();
};

export const updateCity = async (id, cityData) => {
  const response = await fetch(`${BASE_URL}City/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cityData),
  });
  if (!response.ok) throw new Error("Failed to update city");
  return response.json();
};

export const deleteCity = async (id) => {
  const response = await fetch(`${BASE_URL}City/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete city");
  return response;
};

//card country


export const addCountry = async (code, country) => {
  const response = await axios.post(`${BASE_URL}Country/`, {
    Code: code,
    Country: country,
  });
  return response.data;
};

export const updateCountry = async (id, code, country) => {
  const response = await axios.put(`${BASE_URL}Country/${id}/`, {
    Code: code,
    Country: country,
  });
  return response.data;
};

export const deleteCountry = async (id) => {
  const response = await axios.delete(`${BASE_URL}Country/${id}/`);
  return response.data;
};

// card currency
export const fetchCurrencies = async () => {
  const response = await axios.get(`${BASE_URL}Currency/`);
  return response.data;
};

export const addCurrency = async (code, symbol, description) => {
  const response = await axios.post(`${BASE_URL}Currency/`, {
    Code: code,
    Symbol: symbol,
    Description: description,
  });
  return response.data;
};

export const updateCurrency = async (id, code, symbol, description) => {
  const response = await axios.put(`${BASE_URL}Currency/${id}/`, {
    Code: code,
    Symbol: symbol,
    Description: description,
  });
  return response.data;
};

export const deleteCurrency = async (id) => {
  const response = await axios.delete(`${BASE_URL}Currency/${id}/`);
  return response.data;
};

// card group
export const fetchGroups = async () => {
  const response = await axios.get(`${BASE_URL}Group/`);
  return response.data;
};

export const addGroup = async (prefix, group) => {
  const response = await axios.post(`${BASE_URL}Group/`, {
    Prefix: prefix,
    Group: group,
  });
  return response.data;
};

export const updateGroup = async (id, prefix, group) => {
  const response = await axios.put(`${BASE_URL}Group/${id}/`, {
    Prefix: prefix,
    Group: group,
  });
  return response.data;
};

export const deleteGroup = async (id) => {
  const response = await axios.delete(`${BASE_URL}Group/${id}/`);
  return response.data;
};

// card payment
export const fetchPaymentTerms = async () => {
  const response = await axios.get(`${BASE_URL}Payment_Term/`);
  return response.data;
};
export const addPaymentTerm = async (days) => {
  try {
    // Log the data to be sent
    console.log("Sending data:", { Days: days });

    const response = await axios.post(`${BASE_URL}Payment_Term/`, {
      Days: days,
    });

    // Log the response from the server
    console.log("Response data:", response.data);
    return response.data;

  } catch (error) {
    // Log the error response from the server
    console.error("Error response:", error.response);
    throw error;
  }
};


export const updatePaymentTerm = async (id, days) => {
  try {
    const response = await axios.put(`${BASE_URL}Payment_Term/${id}/`, {
      Days: days,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating payment term:", error.response);
    throw error;
  }
};


export const deletePaymentTerm = async (id) => {
  const response = await axios.delete(`${BASE_URL}Payment_Term/${id}/`);
  return response.data;
};

// card region

export const fetchRegions = async () => {
  const response = await axios.get(`${BASE_URL}Region/`);
  return response.data;
};

export const addRegion = async (regionCode, regionName) => {
  const response = await axios.post(`${BASE_URL}Region/`, {
    RegionCode: regionCode,
    RegionName: regionName,
  });
  return response.data;
};

export const updateRegion = async (id, regionCode, regionName) => {
  const response = await axios.put(`${BASE_URL}Region/${id}/`, {
    RegionCode: regionCode,
    RegionName: regionName,
  });
  return response.data;
};

export const deleteRegion = async (id) => {
  const response = await axios.delete(`${BASE_URL}Region/${id}/`);
  return response.data;
};

// card sector
export const fetchSectors = async () => {
  const response = await axios.get(`${BASE_URL}Sector/`);
  return response.data;
};

export const addSector = async (sectorPrefix, sectorName) => {
  const response = await axios.post(`${BASE_URL}Sector/`, {
    Sector_Prefix: sectorPrefix,
    SectorName: sectorName,
  });
  return response.data;
};

export const updateSector = async (id, sectorPrefix, sectorName) => {
  const response = await axios.put(`${BASE_URL}Sector/${id}/`, {
    Sector_Prefix: sectorPrefix,
    SectorName: sectorName,
  });
  return response.data;
};

export const deleteSector = async (id) => {
  const response = await axios.delete(`${BASE_URL}Sector/${id}/`);
  return response.data;
};

// ccard statecode1
export const fetchStates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}StateCode/`);
    return response.data; // Ensure this returns an array of state objects
  } catch (error) {
    throw new Error("Failed to fetch states");
  }
};

export const addState = async (stateName, stateNoNumeric, stateCodeAlpha) => {
  try {
    const response = await axios.post(`${BASE_URL}StateCode/`, {
      StateName: stateName,
      State_No_Numeric: stateNoNumeric,
      State_Code_Alpha: stateCodeAlpha,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add state");
  }
};

export const updateState = async (
  id,
  stateName,
  stateNoNumeric,
  stateCodeAlpha
) => {
  try {
    const response = await axios.put(`${BASE_URL}StateCode/${id}/`, {
      StateName: stateName,
      State_No_Numeric: stateNoNumeric,
      State_Code_Alpha: stateCodeAlpha,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update state");
  }
};

export const deleteState = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}StateCode/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete state");
  }
};

// QUMC Code
export const fetchQMSCodes = async () => {
  const response = await axios.get(`${BASE_URL}QMSC_Code/`);
  return response.data;
};

export const addQMSCode = async (code, desc) => {
  const response = await axios.post(`${BASE_URL}QMSC_Code/`, {
    QMSC_Code: code,
    QMSC_Code_Desc: desc,
  });
  return response.data;
};

export const updateQMSCode = async (id, code, desc) => {
  const response = await axios.put(`${BASE_URL}QMSC_Code/${id}/`, {
    QMSC_Code: code,
    QMSC_Code_Desc: desc,
  });
  return response.data;
};

export const deleteQMSCode = async (id) => {
  const response = await axios.delete(`${BASE_URL}QMSC_Code/${id}/`);
  return response.data;
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
    if (error.response && error.response.data) {
      console.log(error.response.data.message || "Failed to save data");
    } else {
      console.log("An unexpected error occurred");
    }
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
    if (error.response && error.response.data) {
      console.log(error.response.data.message || "Failed to save data");
    } else {
      console.log("An unexpected error occurred");
    }
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
    if (error.response && error.response.data) {
      console.log(error.response.data.message || "Failed to save data");
    } else {
      console.log("An unexpected error occurred");
    }
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
    if (error.response && error.response.data) {
      console.log(error.response.data.message || "Failed to save data");
    } else {
      console.log("An unexpected error occurred");
    }
    throw error;
  }
};

export const getMachineTypes = async () => {
  try {
    const response = await fetch(`${BASE_URL}Machine_Group_Work_Center/`);
    if (!response.ok) throw new Error("Failed to fetch machine types");
    const data = await response.json();
    return data.filter((item) => item.EnterType !== null); // Filter out null values
  } catch (error) {
    console.error("Error fetching machine types:", error);
    return [];
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

// Operator Supplier Master add button

export const addOperator = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}Add_New_Operator/`, data);
    return response;
  } catch (error) {
    console.error("Error occurred while saving data:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });

    // Display detailed error message from response if available
    if (error.response && error.response.data) {
      console.log("Error Details:", error.response.data);
    } else {
      console.log("An unexpected error occurred:", error.message);
    }

    // Return a default message or rethrow the error
    throw new Error(error.response?.data?.message || "Failed to save data");
  }
};

// Operator  supplier master ke andar card
export const fetchDepartments = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Department_Maste/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw error;
  }
};

export const addDepartment = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}Department_Maste/`, data);
    return response;
  } catch (error) {
    console.error("Error adding department:", error);
    throw error;
  }
};

export const editDepartment = async (id, data) => {
  try {
    const response = await axios.put(
      `${BASE_URL}Department_Maste/${id}/`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error editing department:", error);
    throw error;
  }
};

export const deleteDepartment = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}Department_Maste/${id}/`);
    return response;
  } catch (error) {
    console.error("Error deleting department:", error);
    throw error;
  }
};

// card 2

export const fetchCompanyNames = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Department_Category_Master/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching company names:", error);
    throw error;
  }
};

export const addCompanyName = async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}Department_Category_Master/`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error adding company name:", error);
    throw error;
  }
};

export const editCompanyName = async (id, data) => {
  try {
    const response = await axios.put(
      `${BASE_URL}Department_Category_Master/${id}/`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error editing company name:", error);
    throw error;
  }
};

export const deleteCompanyName = async (id) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}Department_Category_Master/${id}/`
    );
    return response;
  } catch (error) {
    console.error("Error deleting company name:", error);
    throw error;
  }
};

// card 3
export const fetchTypes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Designation_Api/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching types:", error);
    throw error;
  }
};

export const addType = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}Designation_Api/`, data);
    return response;
  } catch (error) {
    console.error("Error adding type:", error);
    throw error;
  }
};

export const editType = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}Designation_Api/${id}/`, data);
    return response;
  } catch (error) {
    console.error("Error editing type:", error);
    throw error;
  }
};

export const deleteType = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}Designation_Api/${id}/`);
    return response;
  } catch (error) {
    console.error("Error deleting type:", error);
    throw error;
  }
};

// Contractor api
export const fetchContractors = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Contractor_Api/`);
    return response.data;
  } catch (error) {
    console.error("Error occurred while saving data:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });

    // Display detailed error message from response if available
    if (error.response && error.response.data) {
      console.log("Error Details:", error.response.data);
    } else {
      console.log("An unexpected error occurred:", error.message);
    }

    throw error;
  }
};

export const addContractor = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}Contractor_Api/`, data);
    return response;
  } catch (error) {
    console.error("Error occurred while saving data:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });

    // Display detailed error message from response if available
    if (error.response && error.response.data) {
      console.log("Error Details:", error.response.data);
    } else {
      console.log("An unexpected error occurred:", error.message);
    }

    throw error;
  }
};

// Unit Conversion

export const saveUnitConversion = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}Unit_Conversion/`, data);
    return response.data;
  } catch (error) {
    console.error("Error occurred while saving data:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });

    // Display detailed error message from response if available
    if (error.response && error.response.data) {
      console.log("Error Details:", error.response.data);
    } else {
      console.log("An unexpected error occurred:", error.message);
    }
    throw error;
  }
};

export const fetchUnitConversionData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Unit_Conversion/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Item Master NPD

export const addNPD = async (npd, customerName, npdQty, npdDueDate) => {
  const response = await axios.post(`${BASE_URL}NPD/`, {
    NPD: npd,
    CustomerName: customerName,
    NPD_Qty: npdQty,
    NPD_Due_Date: npdDueDate,
  });
  return response.data;
};

// Item Master technical
export const fetchSpecifications = async () => {
  const response = await axios.get(`${BASE_URL}Technical_Specification/`);
  return response.data;
};

export const addSpecification = async (specification, parameter) => {
  const response = await axios.post(`${BASE_URL}Technical_Specification/`, {
    Specification: specification,
    Parameter: parameter,
  });
  return response.data;
};

export const updateSpecification = async (id, specification, parameter) => {
  const response = await axios.put(
    `${BASE_URL}Technical_Specification/${id}/`,
    {
      Specification: specification,
      Parameter: parameter,
    }
  );
  return response.data;
};

export const deleteSpecification = async (id) => {
  const response = await axios.delete(
    `${BASE_URL}Technical_Specification/${id}/`
  );
  return response.data;
};

// Item master data 2
export const saveItemMasterData = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}Item_Master_Data2/`, data);
    return response.data;
  } catch (error) {
    console.error("Error occurred while saving data:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers,
    });

    // Display detailed error message from response if available
    if (error.response && error.response.data) {
      console.log("Error Details:", error.response.data);
    } else {
      console.log("An unexpected error occurred:", error.message);
    }
    throw error;
  }
};

// Item Master Gernal

export const saveItemMaster = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}AddItems/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();

      console.error("Error occurred while saving data:", {
        status: response.status,
        statusText: response.statusText,
        data: errorData,
      });

      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error occurred while saving data:", {
      message: error.message,
    });

    if (error.response && error.response.data) {
      console.log("Error Details:", error.response.data);
    } else {
      console.log("An unexpected error occurred:", error.message);
    }

    throw error;
  }
};

// Cost Center Master
export const saveCostCenter = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}Cost_Center/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to save data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCostCenters = async () => {
  try {
    const response = await fetch(`${BASE_URL}Cost_Center/`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateCostCenter = async (id, data) => {
  try {
    const response = await fetch(`${BASE_URL}Cost_Center/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to update data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteCostCenter = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}Cost_Center/${id}/`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete data");
    }

    // Check if response has content before parsing
    const text = await response.text();
    return text ? JSON.parse(text) : {};  // Avoids JSON parsing error

  } catch (error) {
    console.error("Delete Error:", error);
    throw error;
  }
};


// card1
export const saveCostCenterAdd = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}Cost_Center_Master_Add_New/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to save data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCostCentersAdd = async () => {
  try {
    const response = await fetch(`${BASE_URL}Cost_Center_Master_Add_New/`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateCostCenterAdd = async (id, data) => {
  try {
    const response = await fetch(
      `${BASE_URL}Cost_Center_Master_Add_New/${id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteCostCenterAdd = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}Cost_Center_Master_Add_New/${id}/`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete data");
    }

    // Check if response has content before parsing
    const text = await response.text();
    return text ? JSON.parse(text) : {};  // Avoids JSON parsing error

  } catch (error) {
    console.error("Delete Error:", error);
    throw error;
  }
};


// Price Entry Component

export const fetchPriceListEntries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Price_List_Entry/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching price list entries:", error);
    throw error;
  }
};

export const savePriceListEntry = async (entry) => {
  try {
    await axios.post(`${BASE_URL}Price_List_Entry/`, entry);
  } catch (error) {
    console.error("Error saving price list entry:", error);
    throw error;
  }
};

export const updatePriceListEntry = async (id, entry) => {
  try {
    await axios.put(`${BASE_URL}Price_List_Entry/${id}/`, entry);
  } catch (error) {
    console.error("Error updating price list entry:", error);
    throw error;
  }
};

export const deletePriceListEntry = async (id) => {
  try {
    await axios.delete(`${BASE_URL}Price_List_Entry/${id}/`);
  } catch (error) {
    console.error("Error deleting price list entry:", error);
    throw error;
  }
};

// Price List Master
export const savePriceList = async (data) => {
  const response = await fetch(`${BASE_URL}Add_Price_List/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to save price list");
  }

  return response.json();
};

// Item card Main Group
export const saveMainGroup = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}AddMainGroup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to save data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    throw error;
  }
};

export const getMainGroups = async () => {
  try {
    const response = await fetch(`${BASE_URL}AddMainGroup/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
};

export const deleteMainGroup = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}AddMainGroup/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete: ${response.statusText}`);
    }

    return true; // Return true to indicate success
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export const updateMainGroup = async (id, data) => {
  try {
    const response = await fetch(`${BASE_URL}AddMainGroup/${id}/`, {
      method: "PUT", // Use PUT for updating
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};


// item group
export const saveItemGroup = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}AddItemGroup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to save data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    throw error;
  }
};

export const updateItemGroup = async (id, data) => {
  try {
    const response = await fetch(`${BASE_URL}AddItemGroup/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while updating data:", error);
    throw error;
  }
};

export const getItemGroups = async () => {
  try {
    const response = await fetch(`${BASE_URL}AddItemGroup/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
};

export const deleteItemGroup = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}AddItemGroup/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 204) {
      return { message: "Deleted successfully" }; // Some APIs return no content on delete
    }

    if (!response.ok) {
      throw new Error(`Failed to delete: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error occurred while deleting data:", error);
    throw error;
  }
};



// Part No
export const fetchNextPartNo =  async (main_group, item_group) => {
  try {
    const response = await fetch(
      `${BASE_URL}AddItems/next-part-no/?main_group=${main_group}&item_group=${item_group}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch next part number");
    }
    const data = await response.json();
    return data.next_part_no;
  } catch (error) {
    console.error("Error fetching next part number:", error);
    throw error;
  }
};




// Unit Code
export const saveUnitCode = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}UnitCode/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to save data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    throw error;
  }
};

export const getUnitCodes = async () => {
  try {
    const response = await fetch(`${BASE_URL}UnitCode/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
};

export const deleteUnitCode = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}UnitCode/${id}/`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while deleting data:", error);
    throw error;
  }
};

// Tdc
export const saveTdc = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}TDC/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to save data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    throw error;
  }
};

export const getTdcs = async () => {
  try {
    const response = await fetch(`${BASE_URL}TDC/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
};

export const deleteTdc = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}TDC/${id}/`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while deleting data:", error);
    throw error;
  }
};

// Store Location
export const saveStoreLocation = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}Store_Location/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to save data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    throw error;
  }
};

export const updateStoreLocation = async (id, data) => {
  try {
    const response = await fetch(`${BASE_URL}Store_Location/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while updating data:", error);
    throw error;
  }
};

export const getStoreLocations = async () => {
  try {
    const response = await fetch(`${BASE_URL}Store_Location/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
};

export const deleteStoreLocation = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}Store_Location/${id}/`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while deleting data:", error);
    throw error;
  }
};

// Item master Sector

export const saveSector = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}Sector_Item/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to save data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    throw error;
  }
};

export const updateSectorcard = async (id, data) => {
  try {
    const response = await fetch(`${BASE_URL}Sector_Item/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while updating data:", error);
    throw error;
  }
};

export const getSectors = async () => {
  try {
    const response = await fetch(`${BASE_URL}Sector_Item/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
};

export const deleteSectorcard = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}Sector_Item/${id}/`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while deleting data:", error);
    throw error;
  }
};

// Route
export const saveRoute = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}Route/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to save data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    throw error;
  }
};

export const updateRoute = async (id, data) => {
  try {
    const response = await fetch(`${BASE_URL}Route/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while updating data:", error);
    throw error;
  }
};

export const getRoutes = async () => {
  try {
    const response = await fetch(`${BASE_URL}Route/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
};

export const deleteRoute = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}Route/${id}/`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while deleting data:", error);
    throw error;
  }
};

// Qty packing
export const saveQtyPack = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}Qty_Packing/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to save data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    throw error;
  }
};

export const updateQtyPack = async (id, data) => {
  try {
    const response = await fetch(`${BASE_URL}Qty_Packing/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while updating data:", error);
    throw error;
  }
};

export const getQtyPacks = async () => {
  try {
    const response = await fetch(`${BASE_URL}Qty_Packing/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
};

export const deleteQtyPack = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}Qty_Packing/${id}/`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while deleting data:", error);
    throw error;
  }
};

//Item sector
export const saveItemSection = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}Item_Section/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to save data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    throw error;
  }
};

export const updateItemSection = async (id, data) => {
  try {
    const response = await fetch(`${BASE_URL}Item_Section/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while updating data:", error);
    throw error;
  }
};

export const getItemSections = async () => {
  try {
    const response = await fetch(`${BASE_URL}Item_Section/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
};

export const deleteItemSection = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}Item_Section/${id}/`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while deleting data:", error);
    throw error;
  }
};


// Grade
export const saveGrade = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}Type_Grade_New/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to save data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    throw error;
  }
};

export const updateGrade = async (id, data) => {
  try {
    const response = await fetch(`${BASE_URL}Type_Grade_New/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while updating data:", error);
    throw error;
  }
};

export const getGrades = async () => {
  try {
    const response = await fetch(`${BASE_URL}Type_Grade_New/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
};

export const deleteGrade = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}Type_Grade_New/${id}/`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete data");
    return await response.json();
  } catch (error) {
    console.error("Error occurred while deleting data:", error);
    throw error;
  }
};

export const saveItem = async (item) => {
  const response = await fetch(`${BASE_URL}Sub_Group/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to save item");
  }
  return response.json();
};

// Get all items
export const getItems = async () => {
  const response = await fetch(`${BASE_URL}Sub_Group/`);
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  return response.json();
};

// Update existing item
export const updateItem = async (id, item) => {
  const response = await fetch(`${BASE_URL}Sub_Group/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to update item");
  }
  return response.json();
};

// Delete an item
export const deleteItem = async (id) => {
  const response = await fetch(`${BASE_URL}Sub_Group/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete item");
  }
};

export const saveParentFgCode = async (item) => {
  const response = await fetch(`${BASE_URL}Parent_FG_Code/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to save item");
  }
  return response.json();
};

// Get all items
export const getParentFgCodes = async () => {
  const response = await fetch(`${BASE_URL}Parent_FG_Code/`);
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  return response.json();
};

// Update existing item
export const updateParentFgCode = async (id, item) => {
  const response = await fetch(`${BASE_URL}Parent_FG_Code/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to update item");
  }
  return response.json();
};

// Delete an item
export const deleteParentFgCode = async (id) => {
  const response = await fetch(`${BASE_URL}Parent_FG_Code/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete item");
  }
};

export const saveMetalType = async (item) => {
  const response = await fetch(`${BASE_URL}MetalType/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to save item");
  }
  return response.json();
};

// Get all items
export const getMetalTypes = async () => {
  const response = await fetch(`${BASE_URL}MetalType/`);
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  return response.json();
};

// Update existing item
export const updateMetalType = async (id, item) => {
  const response = await fetch(`${BASE_URL}MetalType/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to update item");
  }
  return response.json();
};

// Delete an item
export const deleteMetalType = async (id) => {
  const response = await fetch(`${BASE_URL}MetalType/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete item");
  }
};

//Bom Routing Master
export const saveDepartment = async (item) => {
  const response = await fetch(`${BASE_URL}Production_Department/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to save department");
  }
  return response.json();
};

// Get all departments
export const getDepartments = async () => {
  const response = await fetch(`${BASE_URL}Production_Department/`);
  if (!response.ok) {
    throw new Error("Failed to fetch departments");
  }
  return response.json();
};

// Update existing department
export const updateDepartment = async (id, item) => {
  const response = await fetch(`${BASE_URL}Production_Department/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to update department");
  }
  return response.json();
};

// Delete a department
export const deleteDepartmentCard = async (id) => {
  const response = await fetch(`${BASE_URL}Production_Department/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete department");
  }
};

// Bom
export const saveOperation = async (item) => {
  const response = await fetch(`${BASE_URL}Operation_Master/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to save operation");
  }
  return response.json();
};

// Get all operations
export const getOperations = async () => {
  const response = await fetch(`${BASE_URL}Operation_Master/`);
  if (!response.ok) {
    throw new Error("Failed to fetch operations");
  }
  return response.json();
};

// Update existing operation
export const updateOperation = async (id, item) => {
  const response = await fetch(`${BASE_URL}Operation_Master/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to update operation");
  }
  return response.json();
};

// Delete an operation
export const deleteOperation = async (id) => {
  const response = await fetch(`${BASE_URL}Operation_Master/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete operation");
  }
};

// Bom Routing Std
export const saveStdRouting = async (item) => {
  const response = await fetch(`${BASE_URL}Std_Routing/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to save std routing");
  }
  return response.json();
};

// Get all std routings
export const getStdRoutings = async () => {
  const response = await fetch(`${BASE_URL}Std_Routing/`);
  if (!response.ok) {
    throw new Error("Failed to fetch std routings");
  }
  return response.json();
};

// Update existing std routing
export const updateStdRouting = async (id, item) => {
  const response = await fetch(`${BASE_URL}Std_Routing/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to update std routing");
  }
  return response.json();
};

// Delete a std routing
export const deleteStdRouting = async (id) => {
  const response = await fetch(`${BASE_URL}Std_Routing/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete std routing");
  }
};

export const saveBomItemGroup = async (item) => {
  const response = await fetch(`${BASE_URL}Bom_Item_Group/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to save BOM item group");
  }
  return response.json();
};

// Get all BOM item groups
export const getBomItemGroups = async () => {
  const response = await fetch(`${BASE_URL}Bom_Item_Group/`);
  if (!response.ok) {
    throw new Error("Failed to fetch BOM item groups");
  }
  return response.json();
};

// Update existing BOM item group
export const updateBomItemGroup = async (id, item) => {
  const response = await fetch(`${BASE_URL}Bom_Item_Group/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Failed to update BOM item group");
  }
  return response.json();
};

// Delete a BOM item group
export const deleteBomItemGroup = async (id) => {
  const response = await fetch(`${BASE_URL}Bom_Item_Group/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete BOM item group");
  }
};


// region search
export const searchRegionByCode = async (code) => {
  try {
    const response = await axios.get(`${BASE_URL}?search=${code}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for region:', error);
    throw error;
  }
};


// Vendor List
export const getSupplierList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}items/details/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching supplier list:', error);
    throw error;
  }
};


// Supplier Fetch country
export const fetchCountries = async (searchTerm = '') => {
  try {
    const response = await fetch(`${BASE_URL}SupplierCountry/?search=${searchTerm}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch countries:', error);
    throw error;
  }
};

// Supplier Currency
export const fetchCurrencyCodes = async () => {
  try {
    const response = await fetch(`${BASE_URL}currency-codes/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return [];
  }
};




// item master main group
export const fetchMainGroupData = async () => {
  try {
    const response = await fetch(`${BASE_URL}MainGroupCode/tools/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Main Group data:", error);
    return null;
  }
};


// services
export const searchCrossRefSupplier = async (query) => {
  return await axios.get(`${BASE_URL}Cross_Ref_Supplier/?search=${query}`);
};

export const searchItemCrossItem = async (query) => {
  return await axios.get(`${BASE_URL}Item_Cross_Item/?search=${query}`);
};


// APi Item
const fetchData = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}ItemMasterList/?search=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchData };

export const fetchItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}AddItems/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};


// State 
export const fetchStateData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}get-state-data/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching state data:", error);
    throw error;
  }
};

// Services/Api.jsx
export const fetchStateDetails = async (stateName) => {
  try {
    const response = await axios.get(`${BASE_URL}get-state-data/`, {
      params: { state: stateName },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for state ${stateName}:`, error);
    throw error;
  }
};


// unit code
export const getUnitCode = async () => {
  try {
    const response = await axios.get(`${BASE_URL}UnitCodeHardCoded/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching unit codes:', error);
    throw error;
  }
};



export const getNextCode = async (type) => {
  try {
    const response = await axios.get(`${BASE_URL}SupplierType/entity/${type}/`);
    return response.data.next_code;
  } catch (error) {
    throw new Error('Error fetching next code');
  }
};

export const saveData = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}SupplierType/entity/`, data);
    return response.data;
  } catch (error) {
    throw new Error('Error saving data');
  }
};



// Vendor Login 
// Services/Api.jsx

// const BASE_URL = "http://3.7.91.234:8000/";
// const BASE_URL = "api/";

export const loginVendor = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}vendor/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Dashboard
export const fetchVendorProfile = async () => {
  try {
    const token = localStorage.getItem("authToken");

    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${BASE_URL}vendor/profile/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Include token for authorization
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching profile data:", errorData); // Log detailed error
      throw new Error(errorData.detail || "Failed to fetch profile data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchVendorProfile:", error); // Log error message
    throw new Error(error.message);
  }
};


// BOM
export const fetchScrapData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}FetchScrap/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching scrap data:", error);
    return [];
  }
};

export const saveItemData = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}api/items/`, formData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error saving item data:", error);
    throw error;
  }
};

export const fetchScrapDataItem = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/items/`);
    console.log("API Response:", response.data); // ✅ Check if correct data is returned
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};


export const updateScrapData = async (id, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}api/items/${id}/`, updatedData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
};

export const deleteScrapData = async (id) => {
  try {
    await axios.delete(`${BASE_URL}api/items/${id}/`);
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};


export const getWorkCenters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Work_Center/`);
    console.log("API Response:", response.data); // ✅ Check if correct data is returned
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};


// Update work center
export const updateWorkCenter = async (id, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}Work_Center/${id}/`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating work center:", error);
    throw error;
  }
};

// Delete work center
export const deleteWorkCenter = async (id) => {
  try {
    await axios.delete(`${BASE_URL}Work_Center/${id}/`);
  } catch (error) {
    console.error("Error deleting work center:", error);
    throw error;
  }
};