import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  saveMainGroup,
  getMainGroups,
  deleteMainGroup,
} from "../../Service/Api";

const NewCardMainGroup = () => {
  const [formData, setFormData] = useState({
    Prefix: "",
    Sub_Group_Code: "",
    Sub_Group_Name: "",
    Inventory: "",
  });

  const [errors, setErrors] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMainGroups();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      await saveMainGroup(formData);
      toast.success("Data saved successfully!");
      fetchMainGroups(); // Refresh data
      setFormData({
        Prefix: "",
        Sub_Group_Code: "",
        Sub_Group_Name: "",
        Inventory: "",
      });
    } catch (error) {
      toast.error("Failed to save data.");
      console.error("Error saving data:", error);
    }
  };

  const fetchMainGroups = async () => {
    try {
      const response = await getMainGroups();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMainGroup(id);
      toast.success("Data deleted successfully!");
      fetchMainGroups(); // Refresh data
    } catch (error) {
      toast.error("Failed to delete data.");
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSave}>
        <div className="row">
          <div className="col-md-2 mt-4">
            <label htmlFor="Prefix">Prefix</label>
            <input
              type="text"
              id="Prefix"
              name="Prefix"
              value={formData.Prefix}
              onChange={handleInputChange}
              className={`form-control ${errors.Prefix ? "is-invalid" : ""}`}
            />
            {errors.Prefix && (
              <div className="invalid-feedback">{errors.Prefix}</div>
            )}
          </div>
          <div className="col-md-3">
            <label htmlFor="Sub_Group_Code">Sub Group Code</label>
            <input
              type="text"
              id="Sub_Group_Code"
              name="Sub_Group_Code"
              value={formData.Sub_Group_Code}
              onChange={handleInputChange}
              className={`form-control ${
                errors.Sub_Group_Code ? "is-invalid" : ""
              }`}
            />
            {errors.Sub_Group_Code && (
              <div className="invalid-feedback">{errors.Sub_Group_Code}</div>
            )}
          </div>
          <div className="col-md-3">
            <label htmlFor="Sub_Group_Name">Sub Group Name</label>
            <input
              type="text"
              id="Sub_Group_Name"
              name="Sub_Group_Name"
              value={formData.Sub_Group_Name}
              onChange={handleInputChange}
              className={`form-control ${
                errors.Sub_Group_Name ? "is-invalid" : ""
              }`}
            />
            {errors.Sub_Group_Name && (
              <div className="invalid-feedback">{errors.Sub_Group_Name}</div>
            )}
          </div>
          <div className="col-md-2 mt-4">
            <label htmlFor="Inventory">Inventory</label>
            <input
              type="text"
              id="Inventory"
              name="Inventory"
              value={formData.Inventory}
              onChange={handleInputChange}
              className={`form-control ${errors.Inventory ? "is-invalid" : ""}`}
            />
            {errors.Inventory && (
              <div className="invalid-feedback">{errors.Inventory}</div>
            )}
          </div>
          <div className="col-md-2 mt-4">
            <button type="submit" className="btn mt-4">
              Save
            </button>
          </div>
        </div>
      </form>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Prefix</th>
            <th>Sub Group Code</th>
            <th>Sub Group Name</th>
            <th>Inventory</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.Prefix}</td>
              <td>{item.Sub_Group_Code}</td>
              <td>{item.Sub_Group_Name}</td>
              <td>{item.Inventory}</td>
              <td>
                <FaEdit
                  className="text-primary mx-2"
                  style={{ cursor: "pointer" }}
                />
                <FaTrash
                  className="text-danger mx-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ToastContainer />
    </div>
  );
};

export default NewCardMainGroup;
