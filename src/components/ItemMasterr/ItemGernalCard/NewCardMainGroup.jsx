import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  saveMainGroup,
  getMainGroups,
  deleteMainGroup,
} from "../../../Service/Api";

const NewCardMainGroup = () => {
  const [formData, setFormData] = useState({
    name: "", // Initialize formData with "name" field
  });
  const [errors, setErrors] = useState({});
  const [MainGroup, setMainGroup] = useState([]);

  useEffect(() => {
    fetchMainGroups(); // Fetch main groups on component load
  }, []);

  // Validate form before submitting
  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name || formData.name.trim() === "") {
      errors.name = "Name is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically set formData values
    });
  };

  // Handle save (create/update) main group
  const handleSave = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    try {
      await saveMainGroup(formData); // Call the API to save main group
      toast.success("Main Group saved successfully!");

      setFormData({ name: "" }); // Clear form after saving
      fetchMainGroups(); // Refresh the list
    } catch (error) {
      console.error("Error saving main group:", error);
      toast.error("Failed to save Main Group.");
    }
  };

  // Fetch main groups from API
  const fetchMainGroups = async () => {
    try {
      const response = await getMainGroups(); // Get data from API
      setMainGroup(response); // Set main group data in state
    } catch (error) {
      console.error("Error fetching main groups:", error);
    }
  };

  // Handle delete main group
  const handleDelete = async (id) => {
    try {
      await deleteMainGroup(id); // Delete main group by ID
      toast.success("Main Group deleted successfully!");

      fetchMainGroups(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting main group:", error);
      toast.error("Failed to delete Main Group.");
    }
  };

  return (
    <div className="container">
      {/* Main Group Form */}
      <form onSubmit={handleSave}>
        <div className="row">
          <div className="col-md-2 mt-4">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          <div className="col-md-2 mt-4">
            <button type="submit" className="btn mt-4">
              Save
            </button>
          </div>
        </div>
      </form>

      {/* Main Group Table */}
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {MainGroup.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <FaEdit
                  className="text-primary mx-2"
                  style={{ cursor: "pointer" }}
                  // Implement edit functionality if needed
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
