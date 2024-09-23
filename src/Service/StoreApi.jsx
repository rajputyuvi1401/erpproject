import axios from 'axios';
const Base_Url = "http://13.201.136.34:8000/Store/";
// const Base_Url = "api/Store/";
export const saveGateEntry = async (data) => {
    try {
        const response = await fetch(`${Base_Url}GeneralDetails/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Data saved successfully:', result);
        return result;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};

export const saveItemDetails = async (data) => {
    try {
        const response = await fetch(`${Base_Url}ItemDetails/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Item details saved successfully:', result);
        return result;
    } catch (error) {
        console.error('Error saving item details:', error);
        throw error;
    }
};


export const saveNewMrn = async (data) => {
    try {
      const response = await axios.post(`${Base_Url}NewMrn/`, data);
      return response.data;
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
  };
  
  export const fetchMrnData = async () => {
    try {
      const response = await axios.get(`${Base_Url}NewMrn/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export const editMrnData = async (id, data) => {
    try {
      const response = await axios.put(`${Base_Url}NewMrn/${id}/`, data);
      return response.data;
    } catch (error) {
      console.error('Error editing data:', error);
      throw error;
    }
  };
  
  export const deleteMrnData = async (id) => {
    try {
      const response = await axios.delete(`${Base_Url}NewMrn/${id}/`);
      return response.data;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  };
  
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