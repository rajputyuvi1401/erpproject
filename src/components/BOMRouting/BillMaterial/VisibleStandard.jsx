import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  saveStdRouting,
  getStdRoutings,
  updateStdRouting,
  deleteStdRouting,
} from "../../Service/Api.jsx";

const VisibleStandard = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    Std_Routing_No: "",
    Op_No: "",
    Op_Name: "",
    Part_Type: "",
    Wip_Wt: "",
    Op_Type: "",
    QC: "",
    Ass_Prod: "",
    Part_Code: "",
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchStdRoutings();
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
        await updateStdRouting(editId, formData);
        toast.success("Std Routing updated successfully!");
      } else {
        await saveStdRouting(formData);
        toast.success("Std Routing saved successfully!");
      }
      fetchStdRoutings(); // Refresh data
      setFormData({
        Std_Routing_No: "",
        Op_No: "",
        Op_Name: "",
        Part_Type: "",
        Wip_Wt: "",
        Op_Type: "",
        QC: "",
        Ass_Prod: "",
        Part_Code: "",
      });
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      toast.error("Failed to save std routing.");
      console.error("Error saving std routing:", error);
    }
  };

  const fetchStdRoutings = async () => {
    try {
      const response = await getStdRoutings();
      setData(response);
    } catch (error) {
      toast.error("Failed to fetch std routings.");
      console.error("Error fetching std routings:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteStdRouting(id);
      toast.success("Std Routing deleted successfully!");
      fetchStdRoutings(); // Refresh data
    } catch (error) {
      toast.error("Failed to delete std routing.");
      console.error("Error deleting std routing:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      Std_Routing_No: item.Std_Routing_No,
      Op_No: item.Op_No,
      Op_Name: item.Op_Name,
      Part_Type: item.Part_Type,
      Wip_Wt: item.Wip_Wt,
      Op_Type: item.Op_Type,
      QC: item.QC,
      Ass_Prod: item.Ass_Prod,
      Part_Code: item.Part_Code,
    });
    setIsEditing(true);
    setEditId(item.id);
  };

  return (
    <div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-2 text-start">
            <label className="form-label">Std Routing No:</label>
          </div>
          <div className="col-md-4 text-start">
            <select className="form-select">
              <option>Select Option</option>
              <option>A</option>
            </select>
          </div>
          <div className="col-md-6 text-end">
            <button className="Standardbtn">Copy Routing Sheet</button>
            <button className="Standardbtn">Export To Excel</button>
          </div>
        </div>
        <form onSubmit={handleSave}>
          <div className="row mb-3">
            {Object.keys(formData).map((key) => (
              <div className="col-md-2 mb-3" key={key}>
                <label className="form-label">{key.replace(/_/g, " ")}</label>
                <select
                  className={`form-select ${errors[key] ? "is-invalid" : ""}`}
                  name={key}
                  value={formData[key]}
                  onChange={handleInputChange}
                >
                  <option>Select Option</option>
                  <option>item</option>
                  <option>All</option>
                  <option>single</option>
                </select>
                {errors[key] && (
                  <div className="invalid-feedback">{errors[key]}</div>
                )}
              </div>
            ))}
            <div className="col-md-2 text-end">
              <button
                type="submit"
                className="StandardButton"
                style={{ marginTop: "24px" }}
              >
                {isEditing ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Std Routing No</th>
                    <th>Op No</th>
                    <th>Op Name</th>
                    <th>Part Type</th>
                    <th>WIP WT</th>
                    <th>Op Type</th>
                    <th>QC</th>
                    <th>Ass Prod</th>
                    <th>Part Code</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.Std_Routing_No}</td>
                        <td>{item.Op_No}</td>
                        <td>{item.Op_Name}</td>
                        <td>{item.Part_Type}</td>
                        <td>{item.Wip_Wt}</td>
                        <td>{item.Op_Type}</td>
                        <td>{item.QC}</td>
                        <td>{item.Ass_Prod}</td>
                        <td>{item.Part_Code}</td>
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
                      <td colSpan="11" className="text-center">
                        No Records Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default VisibleStandard;
