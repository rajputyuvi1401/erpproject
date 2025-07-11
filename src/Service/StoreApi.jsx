import axios from 'axios';


const Base_Url = "http://3.7.91.234:8000/Store/";
// const Base_Url = "api/Store/"; 
  
// Purchase gernal grn
export const postGrnDetails = async (data) => {
    try {
      const response = await fetch(`${Base_Url}GrnGenralDetail/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };


//   Subcon inwardchallan
export const saveInwardChallan = async (data) => {
    try {
      const response = await fetch(`${Base_Url}InwardChallan/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };


  //   Subcon Job_Workchallan
export const saveJob_WorkChallan = async (data) => {
    try {
      const response = await fetch(`${Base_Url}Job_Work/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };


  // Subcron Vendor

  export const saveVendorScrap = async (data) => {
    try {
      const response = await axios.post(`${Base_Url}VendorScrap/`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // Check for errors (axios throws an error for non-2xx status codes)
      return response.data; // axios automatically parses JSON
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      throw error; // Rethrow the error to be caught by the calling function
    }
  };


  // Material Challan
  export const getMaterials = async () => {
    const response = await fetch(`${Base_Url}MaterialIssue/`);
    return await response.json();
  };
  
  export const addMaterial = async (material) => {
    const response = await fetch(`${Base_Url}MaterialIssue/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(material),
    });
    return await response.json();
  };
  
  export const updateMaterial = async (id, material) => {
    const response = await fetch(`${Base_Url}MaterialIssue/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(material),
    });
    return await response.json();
  };
  
  export const deleteMaterial = async (id) => {
    await fetch(`${Base_Url}MaterialIssue/${id}/`, {
      method: "DELETE",
    });
  };


  // Material Gernal
  export const getMaterialGernal = async () => {
    const response = await fetch(`${Base_Url}Material_Issue_General/`);
    return await response.json();
  };
  
  export const addMaterialGernal = async (material) => {
    const response = await fetch(`${Base_Url}Material_Issue_General/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(material),
    });
    return await response.json();
  };
  
  export const updateMaterialGernal = async (id, material) => {
    const response = await fetch(`${Base_Url}Material_Issue_General/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(material),
    });
    return await response.json();
  };
  
  export const deleteMaterialGernal = async (id) => {
    await fetch(`${Base_Url}Material_Issue_General/${id}/`, {
      method: "DELETE",
    });
  };

// Delivery Challan
export const addDeliveryChallan = async (data) => {
  return await axios.post(`${Base_Url}DeliveryChallan/`, data);
};

export const getDeliveryChallans = async () => {
  return await axios.get(`${Base_Url}DeliveryChallan/`);
};

export const updateDeliveryChallan = async (id, data) => {
  return await axios.put(`${Base_Url}DeliveryChallan/${id}/`, data);
};

export const deleteDeliveryChallan = async (id) => {
  return await axios.delete(`${Base_Url}DeliveryChallan/${id}/`);
};


export const saveChallanData = async (data) => {
  try {
    const response = await axios.post(`${Base_Url}SecondDeliveryChallann/`, data);
    return response.data;
  } catch (error) {
    console.error('Error saving challan data:', error);
    throw error;
  }
};



// Function to save GRN Data
export const saveGRNData = async (data) => {
  try {
    const response = await axios.post(`${Base_Url}DC_GRN/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    // Throw the error to be caught in the form component
    throw error.response ? error.response.data : new Error("An error occurred");
  }
};

// New Indent

export const saveIndent = async (data, id) => {
  if (id) {
    return await axios.put(`${Base_Url}NewIndent/${id}/`, data);
  } else {
    return await axios.post(`${Base_Url}NewIndent/`, data);
  }
};

export const getIndentData = async () => {
  return await axios.get(`${Base_Url}NewIndent/`);
};

export const deleteIndent = async (id) => {
  return await axios.delete(`${Base_Url}NewIndent/${id}/`);
};

// NewIndent
export const indentsaveData = async (data) => {
  const response = await fetch(`${Base_Url}SecondNew/`, {
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


export const getNewMRN = async (year) => {
  try {
    const response = await axios.get(`${Base_Url}api/get-next-mrn-no/?year=${year}`);
    return response.data.next_mrn_no;
  } catch (error) {
    console.error("Error fetching next note number:", error);
    return null;
  }
};

export const submitNewMRN = async (data) => {
  try {
    const response = await axios.post(`${Base_Url}api/New-MRN-Entry/`, data);
    return response.data;
  } catch (error) {
    console.error("Error submitting MRN entry:", error);
    return null;
  }
};

export const searchMRNItem = async (query) => {
  try {
    const response = await axios.get(`${Base_Url}NewMRN_Item_Search/`, {
      params: { search: query },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching MRN items:", error);
    return [];
  }
};


export const searchEmployeeDept = async (query) => {
  try {
    const response = await axios.get(`${Base_Url}NewMRN_EmployeeDept_Search/`, {
      params: { search: query },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
};



export const getNewGateInward = async (year) => {
  try {
    const response = await axios.get(`${Base_Url}api/get-next-ge-no/?year=${year}`);
    return response.data.next_GE_No
    ;
  } catch (error) {
    console.error("Error fetching next note number:", error);
    return null;
  }
};

export const SaveNewGateInward = async (data) => {
  try {
    const response = await axios.post(`${Base_Url}api/general-details/`, data);
    return response.data;
  } catch (error) {
    console.error("Error submitting MRN entry:", error);
    return null;
  }
};