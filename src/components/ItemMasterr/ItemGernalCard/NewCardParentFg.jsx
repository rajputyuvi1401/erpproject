import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  saveParentFgCode,
  getParentFgCodes,
  updateParentFgCode,
  deleteParentFgCode,
} from "../../Service/Api.jsx";

const NewCardParentFg = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    EnterUnit_Name: "",
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.EnterUnit_Name) {
      newErrors.EnterUnit_Name = "This field is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      if (isEditing) {
        await updateParentFgCode(editId, formData);
        toast.success("Data updated successfully!");
      } else {
        await saveParentFgCode(formData);
        toast.success("Data saved successfully!");
      }
      fetchItems(); // Refresh data
      setFormData({ EnterUnit_Name: "" });
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      toast.error("Failed to save data.");
      console.error("Error saving data:", error);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await getParentFgCodes();
      setData(response);
    } catch (error) {
      toast.error("Failed to fetch items.");
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteParentFgCode(id);
      toast.success("Data deleted successfully!");
      fetchItems(); // Refresh data
    } catch (error) {
      toast.error("Failed to delete data.");
      console.error("Error deleting data:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData({ EnterUnit_Name: item.EnterUnit_Name });
    setIsEditing(true);
    setEditId(item.id);
  };

  return (
    <div className="card-body">
      <h5 className="card-title text-start">Quantity Packing Master</h5>
      <form onSubmit={handleSave}>
        <div className="row mb-3" style={{ marginTop: "40px" }}>
          <div className="col-sm-4 mb-3 text-start">
            <label htmlFor="EnterUnit_Name" className="form-label">
              Enter Unit Name:
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.EnterUnit_Name ? "is-invalid" : ""
              }`}
              id="EnterUnit_Name"
              name="EnterUnit_Name"
              placeholder="Enter unit name"
              value={formData.EnterUnit_Name}
              onChange={handleInputChange}
            />
            {errors.EnterUnit_Name && (
              <div className="invalid-feedback">{errors.EnterUnit_Name}</div>
            )}
          </div>
          <div className="col-sm-4 d-flex align-items-end">
            <button
              type="submit"
              className="card-btn w-100"
              style={{ marginTop: "-50px" }}
            >
              {isEditing ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Enter Unit Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.EnterUnit_Name}</td>
                <td>
                  <FaEdit
                    className="text-primary mx-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEdit(item)}
                  />
                </td>
                <td>
                  <FaTrash
                    className="text-danger mx-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(item.id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No data found!
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default NewCardParentFg;
