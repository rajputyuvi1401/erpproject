import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  saveItemGroup,
  getItemGroups,
  deleteItemGroup,
  updateItemGroup,
} from "../../../Service/Api.jsx";

const NewCardItemGroup = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [itemGroups, setItemGroups] = useState([]);
  const [newGroup, setNewGroup] = useState({ name: "" });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchItemGroups();
  }, []);

  const validateForm = () => {
    let isValid = true;
    const errors = {};
    
    if (!newGroup.name || newGroup.name.trim() === "") {
      errors.name = "Name is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGroup({ ...newGroup, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      if (isEditing) {
        await updateItemGroup(editId, newGroup);
        toast.success("Item group updated successfully!");
      } else {
        await saveItemGroup(newGroup);
        toast.success("Item group saved successfully!");
      }

      fetchItemGroups();
      setNewGroup({ name: "" });
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      toast.error("Failed to save item group.");
      console.error("Error saving item group:", error);
    }
  };

  const fetchItemGroups = async () => {
    try {
      const response = await getItemGroups();
      setItemGroups(response);
    } catch (error) {
      console.error("Error fetching item groups:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) { // Optional confirmation dialog
      try {
        await deleteItemGroup(id); // Call API to delete item group
        toast.success("Item group deleted successfully!"); // Success message
        fetchItemGroups(); // Refresh item groups after deletion
      } catch (error) {
        toast.error("Failed to delete item group."); // Error message
        console.error("Error deleting item group:", error); // Log the error
      }
    }
  };
  

  const handleEdit = (group) => {
    setIsEditing(true);
    setNewGroup({ name: group.name });
    setEditId(group.id);
  };

 

  return (
    <div>
      <div className="text-start mt-4">
        <button onClick={() => setActiveTab("general")}>General</button>
        <button onClick={() => setActiveTab("itemGroup")}>
          Item Group Linking Main Group
        </button>
      </div>
      <div className="text-start mt-4">
        {activeTab === "general" && (
          <div>
            {/* Form for creating/updating item groups */}
            <form onSubmit={handleSave}>
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-3">
                  <label>Name: </label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    name="name"
                    value={newGroup.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="col-md-3 col-lg-2 mb-3" style={{ marginTop: "30px" }}>
                  <button type="submit" className="pobtn w-100">
                    {isEditing ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </form>

            {/* Table to display item groups */}
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sc. No</th>
                      <th>Name</th>
                      <th>Edit</th>
                      <th>Delete</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {itemGroups.length > 0 ? (
                      itemGroups.map((group, index) => (
                        <tr key={group.id}>
                          <td>{index + 1}</td>
                          <td>{group.name}</td>
                          <td>
                            <FaEdit
                              className="text-primary mx-2"
                              style={{ cursor: "pointer" }}
                              onClick={() => handleEdit(group)}
                            />
                          </td>
                          <td>
                            <FaTrash
                              className="text-danger mx-2"
                              style={{ cursor: "pointer" }}
                              onClick={() => handleDelete(group.id)}
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
              </div>
            </div>
          </div>
        )}

        {/* Placeholder for "Item Group Linking Main Group" */}
        {activeTab === "itemGroup" && (
          <div>
              <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sr</th>
                      <th>Group Name</th>
                      <th>FG</th>
                      <th>RM</th>
                      <th>Tool</th>
                      <th>Inst</th>
                      <th>Machine</th>
                      <th>CON</th>
                      <th>SAFTY</th>
                      <th>SER</th>
                      <th>ASSET</th>
                      <th>F4</th>
                      <th>Scrap</th>
                      <th>SF</th>
                      <th>BO</th>
                      <th>DIES</th>
                      <th>Msint</th>
                      <th>HK</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                      <td> <input type="checkbox" /> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewCardItemGroup;
