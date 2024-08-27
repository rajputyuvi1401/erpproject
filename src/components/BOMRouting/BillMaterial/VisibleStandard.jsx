import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  saveStdRouting,
  getStdRoutings,
  updateStdRouting,
  deleteStdRouting,
} from "../../../Service/Api";

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
        <ToastContainer/>
        <div className="row mb-3">
          <div className="col-md-2 text-start">
            <label className="form-label">Std Routing No:</label>
          </div>
          <div className="col-md-4 text-start">
            <select className="form-select">
              <option>ALL</option>
              <option></option>
            </select>
          </div>
          <div className="col-md-6 text-end">
            <button className="Standardbtn">Copy Routing Sheet</button>
            <button className="Standardbtn">Export To Excel</button>
          </div>
        </div>
        <form onSubmit={handleSave}>
        <div className="row mb-3 text-start">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="">STD Routing No<span className="text-danger">*</span></label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="Std_Routing_No"
                  value={formData.Std_Routing_No}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.Std_Routing_No && <span className="text-danger">{errors.Std_Routing_No}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="">Op No</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="Op_No"
                  value={formData.Op_No}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.Op_No && <span className="text-danger">{errors.Op_No}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="">Op Name</label>
              </div>
              <div className="col-md-8">
              <select className="form-select">
              <option>Select</option>
              <option value="ASSEMLY">ASSEMLY</option>
              <option value={"BENDING"}>BENDING</option>
              <option value="BLACK PLATING">BLACK PLATING</option>
              <option value={"BLOCKDISING"}>BLOCKDISING</option>
              <option value="CED COATING">CED COATING</option>
              <option value={"CHAKING"}>CHAKING</option>
              <option value="CHAMPFER 1X45">CHAMPFER 1X45</option>
              <option value={"CNC1"}>CNC1</option>
              <option value="COLD FORGING">COLD FORGING</option>
              <option value={"CROSS HOLE"}>CROSS HOLE</option>
            </select>
                {errors.Op_Name && <span className="text-danger">{errors.Op_Name}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="">Ass Prod</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="Ass_Prod"
                  value={formData.Ass_Prod}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.Ass_Prod && <span className="text-danger">{errors.Ass_Prod}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="">Part Code</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="Part_Code"
                  value={formData.Part_Code}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.Part_Code && <span className="text-danger">{errors.Part_Code}</span>}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="">Part Type</label>
              </div>
              <div className="col-md-8">
              <select className="form-select">
              <option>Select</option>
              <option value="RM">RM</option>
              <option value={"COM"}>COM</option>
              <option value={"BOM"}>BOM</option>
              </select>
                {errors.Part_Type && <span className="text-danger">{errors.Part_Type}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="">WIP WT</label>
              </div>
              <div className="col-md-8">
              <select className="form-select">
              <option>Select</option>
              <option value="CUT_WT">CUT_WT</option>
              <option value={"FINISH_WT"}>FINISH_WT</option>
              <option value={"GROSS_WT"}>GROSS_WT</option>
              </select>
                {errors.Wip_Wt && <span className="text-danger">{errors.Wip_Wt}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="">Op Type</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="Op_Type"
                  value={formData.Op_Type}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.Op_Type && <span className="text-danger">{errors.Op_Type}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="">QC</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="QC"
                  value={formData.QC}
                  onChange={handleInputChange}
                  className="form-control"
                />
                {errors.QC && <span className="text-danger">{errors.QC}</span>}
              </div>
            </div>
          </div>
          <div className="col-md-12 text-end">
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
          <div className="col-md-12 text-start">
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
