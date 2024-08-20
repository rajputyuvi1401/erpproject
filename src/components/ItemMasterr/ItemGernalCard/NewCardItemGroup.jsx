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
  const [newGroup, setNewGroup] = useState({
    MainGroupName: "",
    Prefix: "",
    GroupName: "",
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchItemGroups();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!newGroup.MainGroupName) {
      newErrors.MainGroupName = "This field is required.";
    }
    if (!newGroup.Prefix) {
      newErrors.Prefix = "This field is required.";
    }
    if (!newGroup.GroupName) {
      newErrors.GroupName = "This field is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
        toast.success("Data updated successfully!");
      } else {
        await saveItemGroup(newGroup);
        toast.success("Data saved successfully!");
      }
      fetchItemGroups(); // Refresh data
      setNewGroup({ MainGroupName: "", Prefix: "", GroupName: "" });
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      toast.error("Failed to save data.");
      console.error("Error saving data:", error);
    }
  };

  const fetchItemGroups = async () => {
    try {
      const response = await getItemGroups();
      setItemGroups(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItemGroup(id);
      toast.success("Data deleted successfully!");
      fetchItemGroups(); // Refresh data
    } catch (error) {
      toast.error("Failed to delete data.");
      console.error("Error deleting data:", error);
    }
  };

  const handleEdit = (group) => {
    setNewGroup({
      MainGroupName: group.MainGroupName,
      Prefix: group.Prefix,
      GroupName: group.GroupName,
    });
    setIsEditing(true);
    setEditId(group.id);
    setActiveTab("general");
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
            <form onSubmit={handleSave}>
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-3">
                  <label>Main Group Name: </label>
                  <select
                    className={`form-select ${
                      errors.MainGroupName ? "is-invalid" : ""
                    }`}
                    name="MainGroupName"
                    value={newGroup.MainGroupName}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Main Group</option>
                    <option value="Group1">Group 1</option>
                    <option value="Group2">Group 2</option>
                  </select>
                  {errors.MainGroupName && (
                    <div className="invalid-feedback">
                      {errors.MainGroupName}
                    </div>
                  )}
                </div>
                <div className="col-md-3 col-lg-2 mb-3">
                  <label>Prefix: </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.Prefix ? "is-invalid" : ""
                    }`}
                    name="Prefix"
                    value={newGroup.Prefix}
                    onChange={handleInputChange}
                  />
                  {errors.Prefix && (
                    <div className="invalid-feedback">{errors.Prefix}</div>
                  )}
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <label>Group Name: </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.GroupName ? "is-invalid" : ""
                    }`}
                    name="GroupName"
                    value={newGroup.GroupName}
                    onChange={handleInputChange}
                  />
                  {errors.GroupName && (
                    <div className="invalid-feedback">{errors.GroupName}</div>
                  )}
                </div>
                <div
                  className="col-md-3 col-lg-2 mb-3"
                  style={{ marginTop: "30px" }}
                >
                  <button type="submit" className="btn w-100">
                    {isEditing ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sc. No</th>
                     <th>Main Group Name</th>
                     <th>Prefix</th>
                      <th>Item Group Name</th>
                     
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemGroups.length > 0 ? (
                      itemGroups.map((group, index) => (
                        <tr key={group.id}>
                          <td>{index + 1}</td>
<td>{group.MainGroupName}</td>
<td>{group.Prefix}</td>                         
                          <td>{group.GroupName}</td>
                         
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
                        <td colSpan="6" className="text-center">
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
        {activeTab === "itemGroup" && <p>item group</p>}
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewCardItemGroup;
