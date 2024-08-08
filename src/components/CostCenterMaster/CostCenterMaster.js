import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import CachedIcon from "@mui/icons-material/Cached";
import "./CostCenterMaster.css";
import {
  saveCostCenter,
  fetchCostCenters,
  updateCostCenter,
  deleteCostCenter,
} from "../Service/Api";

import {
  saveCostCenterAdd,
  fetchCostCentersAdd,
  updateCostCenterAdd,
  deleteCostCenterAdd,
} from "../Service/Api.jsx";
import { toast, ToastContainer } from "react-toastify";

const CostCenterMaster = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAddFormsecond, setShowAddFormsecond] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const toggleAddFormsecond = () => {
    setShowAddFormsecond(!showAddFormsecond);
  };

  // card 1// States for first card
  const [costCenterData, setCostCenterData] = useState([]);
  const [formData, setFormData] = useState({
    Category_Code: "",
    Cost_Center_Code: "",
    Cost_Center_Desc: "",
  });
  const [editId, setEditId] = useState(null);

  // States for second card
  const [costCenterData1, setCostCenterData1] = useState([]);
  const [formData1, setFormData1] = useState({
    Category_Code: "",
    Cost_Center_Desc: "",
  });
  const [editId1, setEditId1] = useState(null);

  // Fetch cost centers for the first card
  useEffect(() => {
    fetchCostCenters()
      .then((data) => setCostCenterData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Fetch cost centers for the second card
  useEffect(() => {
    fetchCostCentersAdd()
      .then((data) => setCostCenterData1(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle input change for the first card
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle save for the first card
  const handleSave = async () => {
    if (
      !formData.Category_Code ||
      !formData.Cost_Center_Code ||
      !formData.Cost_Center_Desc
    ) {
      toast.error("All fields are required!");
      return;
    }

    try {
      if (editId) {
        await updateCostCenter(editId, formData);
        toast.success("Cost Center updated successfully!");
      } else {
        await saveCostCenter(formData);
        toast.success("Cost Center saved successfully!");
      }
      setFormData({
        Category_Code: "",
        Cost_Center_Code: "",
        Cost_Center_Desc: "",
      });
      setEditId(null);
      fetchCostCenters().then((data) => setCostCenterData(data));
      console.log("data saved");
    } catch (error) {
      toast.error("Failed to save data");
    }
  };

  // Handle edit for the first card
  const handleEdit = (id) => {
    const data = costCenterData.find((item) => item.id === id);
    setFormData({
      Category_Code: data.Category_Code,
      Cost_Center_Code: data.Cost_Center_Code,
      Cost_Center_Desc: data.Cost_Center_Desc,
    });
    setEditId(id);
  };

  // Handle delete for the first card
  const handleDelete = async (id) => {
    try {
      await deleteCostCenter(id);
      toast.success("Cost Center deleted successfully!");
      fetchCostCenters().then((data) => setCostCenterData(data));
    } catch (error) {
      toast.error("Failed to delete data");
    }
  };

  // Handle input change for the second card
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle save for the second card
  const handleSave1 = async () => {
    if (!formData1.Category_Code || !formData1.Cost_Center_Desc) {
      toast.error("All fields are required!");
      return;
    }

    try {
      if (editId1) {
        await updateCostCenterAdd(editId1, formData1);
        toast.success("Cost Center updated successfully!");
      } else {
        await saveCostCenterAdd(formData1);
        toast.success("Cost Center saved successfully!");
      }
      setFormData1({
        Category_Code: "",
        Cost_Center_Desc: "",
      });
      setEditId1(null);
      fetchCostCentersAdd().then((data) => setCostCenterData1(data));
      console.log("data saved");
    } catch (error) {
      toast.error("Failed to save data");
    }
  };

  // Handle edit for the second card
  const handleEdit1 = (id) => {
    const data = costCenterData1.find((item) => item.id === id);
    setFormData1({
      Category_Code: data.Category_Code,
      Cost_Center_Desc: data.Cost_Center_Desc,
    });
    setEditId1(id);
  };

  // Handle delete for the second card
  const handleDelete1 = async (id) => {
    try {
      await deleteCostCenterAdd(id);
      toast.success("Cost Center deleted successfully!");
      fetchCostCentersAdd().then((data) => setCostCenterData1(data));
    } catch (error) {
      toast.error("Failed to delete data");
    }
  };

  return (
    <div className="CostcenterMaster">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav
                sideNavOpen={sideNavOpen}
                toggleSideNav={toggleSideNav}
              />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="CostcenterMaster1">
                  <div className="Costcenter">
                    <div className="container-fluid">
                      <div className="row d-flex align-items-center">
                        <div className="col-md-6 text-start">
                          <h5>Cost Center Master</h5>
                        </div>
                        <div className="col-md-6 text-md-end text-start mt-2 mt-md-0">
                          <button
                            className="Costcenterbtn"
                            onClick={toggleAddForm}
                          >
                            Add New
                          </button>
                          <button className="Costcenterbtn">
                            Export Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="CostcenterMain">
                    <div className="container-fluid">
                      <div className="row text-start centerselect">
                        <div className="col-md-2 col-sm-3 mb-3 mb-sm-0">
                          <label
                            htmlFor="CostcenterName"
                            className="col-form-label"
                          >
                            Cost Center Category:
                          </label>
                        </div>
                        <div className="col-md-3 col-sm-9 mb-3 mb-sm-0">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-md-1 col-sm-12 text-sm-start text-md-start">
                          <button className="Costcentermainbtn">
                            <i className="bi bi-search"></i> Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="CostcenterTable">
                    <div className="container-fluid">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="table-primary">
                            <tr>
                              <th scope="col">Sr.</th>
                              <th scope="col">Cost Center Code</th>
                              <th scope="col">Description</th>
                              <th scope="col">Category</th>
                              {/* <th scope="col">Action</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {costCenterData.map((costCenter, index) => (
                              <tr key={costCenter.id}>
                                <td>{index + 1}</td>
                                <td>{costCenter.Cost_Center_Code}</td>
                                <td>{costCenter.Cost_Center_Desc}</td>
                                <td>{costCenter.Category_Code}</td>
                                {/* <td>
                                  <button
                                    className="card-btn"
                                    onClick={() => handleEdit(costCenter.id)}
                                  >
                                    <FaEdit />
                                  </button>
                                  <button
                                    className="card-btn"
                                    onClick={() => handleDelete(costCenter.id)}
                                  >
                                    <FaTrash />
                                  </button>
                                </td> */}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="record-count text-start"
                    style={{ color: "blue", padding: "10px" }}
                  >
                    Total Records: {costCenterData.length}
                  </div>
                  {showAddForm && (
                    <div className="costtype-overlay">
                      <ToastContainer />
                      <div className="new-card">
                        <div className="row">
                          <div className="col-md-10 text-start">
                            <h5 className="card-title">Add New Cost Center</h5>
                          </div>
                          <div className="col-md-2 text-end">
                            <button
                              className="card-btn"
                              onClick={toggleAddForm}
                            >
                              X
                            </button>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row text-start">
                            <div className="col-md-4">
                              <label
                                htmlFor="Category_Code"
                                className="col-sm-7 col-form-label"
                              >
                                Category Code:
                              </label>
                              <div className="row mb-3">
                                <div className="col-sm-5">
                                  <select
                                    id="Category_Code"
                                    name="Category_Code"
                                    className="form-select"
                                    value={formData.Category_Code}
                                    onChange={handleInputChange}
                                  >
                                    <option value="" disabled>
                                      Select ..
                                    </option>
                                    <option>Store</option>
                                    <option>Maintenance</option>
                                  </select>
                                </div>
                                <div className="col-sm-4 ">
                                  <button
                                    className="card-btn1"
                                    onClick={toggleAddFormsecond}
                                  >
                                    New
                                  </button>
                                </div>
                                <div className="col-sm-3">
                                  <button className="card-btn2">
                                    <CachedIcon />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <label
                                htmlFor="Cost_Center_Code"
                                className="col-sm-7 col-form-label"
                              >
                                Cost Center Code:
                              </label>
                              <div className="row mb-3">
                                <div className="col-sm-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="Cost_Center_Code"
                                    name="Cost_Center_Code"
                                    placeholder="Cost Center Code"
                                    value={formData.Cost_Center_Code}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <label
                                htmlFor="Cost_Center_Desc"
                                className="col-sm-12 col-form-label"
                              >
                                Cost Center Desc:
                              </label>
                              <div className="row mb-3">
                                <div className="col-sm-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="Cost_Center_Desc"
                                    name="Cost_Center_Desc"
                                    placeholder="Cost Center Description"
                                    value={formData.Cost_Center_Desc}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-1 col-sm-12 text-sm-start text-md-start">
                              <button
                                className="Costcentermainbtn"
                                style={{ marginTop: "30px" }}
                                onClick={handleSave}
                              >
                                Save
                              </button>
                            </div>
                          </div>
                          <div className="CostaddnewTable">
                            <div className="container-fluid">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead className="table-primary">
                                    <tr>
                                      <th>Category Code</th>
                                      <th>Cost Center Code</th>
                                      <th>Cost Center Desc</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {costCenterData.length > 0 ? (
                                      costCenterData.map((item) => (
                                        <tr key={item.id}>
                                          <td>{item.Category_Code}</td>
                                          <td>{item.Cost_Center_Code}</td>
                                          <td>{item.Cost_Center_Desc}</td>
                                          <td>
                                            <button
                                              style={{
                                                border: "none",
                                                padding: "5px",
                                                margin: "5px",
                                              }}
                                              onClick={() =>
                                                handleEdit(item.id)
                                              }
                                            >
                                              <FaEdit />
                                            </button>
                                            <button
                                              style={{
                                                border: "none",
                                                padding: "5px",
                                                margin: "5px",
                                              }}
                                              onClick={() =>
                                                handleDelete(item.id)
                                              }
                                            >
                                              <FaTrash />
                                            </button>
                                          </td>
                                        </tr>
                                      ))
                                    ) : (
                                      <tr>
                                        <td colSpan="4">No Data Found!!!</td>
                                      </tr>
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {showAddFormsecond && (
                    <div className="costtype2-overlay">
                      <div className="new-card">
                        <div className="row">
                          <div className="col-md-10 text-start">
                            <h5 className="card-title">Add New Cost Center</h5>
                          </div>
                          <div className="col-md-2 text-end">
                            <button
                              className="card-btn"
                              onClick={toggleAddFormsecond}
                            >
                              X
                            </button>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row text-start">
                            <div className="col-md-4">
                              <label
                                htmlFor="Category_Code"
                                className="col-sm-12 col-form-label"
                              >
                                Category Code:
                              </label>
                              <div className="row mb-3">
                                <div className="col-sm-12">
                                  <select
                                    id="Category_Code"
                                    name="Category_Code"
                                    className="form-select"
                                    value={formData1.Category_Code}
                                    onChange={handleInputChange1}
                                  >
                                    <option value="" disabled>
                                      Select ..
                                    </option>
                                    <option>Store</option>
                                    <option>Maintenance</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <label
                                htmlFor="Cost_Center_Desc"
                                className="col-sm-12 col-form-label"
                              >
                                Cost Center Desc:
                              </label>
                              <div className="row mb-3">
                                <div className="col-sm-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="Cost_Center_Desc"
                                    name="Cost_Center_Desc"
                                    placeholder="Description"
                                    value={formData1.Cost_Center_Desc}
                                    onChange={handleInputChange1}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-md-1 col-sm-12 text-sm-start text-md-start">
                              <button
                                className="Costcentermainbtn"
                                style={{ marginTop: "30px" }}
                                onClick={handleSave1}
                              >
                                Save
                              </button>
                            </div>
                          </div>
                          <div className="CostaddnewTable">
                            <div className="container-fluid">
                              <div className="table-responsive">
                                <table className="table table-striped">
                                  <thead>
                                    <tr>
                                      <th>Category Code</th>
                                      <th>Cost Center Desc</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {costCenterData1.map((costCenter) => (
                                      <tr key={costCenter.id}>
                                        <td>{costCenter.Category_Code}</td>
                                        <td>{costCenter.Cost_Center_Desc}</td>
                                        <td>
                                          <button
                                            style={{
                                              border: "none",
                                              padding: "5px",
                                              margin: "5px",
                                            }}
                                            onClick={() =>
                                              handleEdit1(costCenter.id)
                                            }
                                          >
                                            <FaEdit />
                                          </button>
                                          <button
                                            style={{
                                              border: "none",
                                              padding: "5px",
                                              margin: "5px",
                                            }}
                                            onClick={() =>
                                              handleDelete1(costCenter.id)
                                            }
                                          >
                                            <FaTrash />
                                          </button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCenterMaster;
