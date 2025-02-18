import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import "./BillMaterial.css";
import VisibleStandard from "./VisibleStandard.jsx";
// Purchase Card
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  saveDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartmentCard,
} from "../../../Service/Api.jsx";



import VisibleBomitem from "./VisibleBomitem.jsx";
import { Link } from "react-router-dom";
import BOMoperation from "../BOMoperation/BOMoperation.jsx";

const BillMaterial = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  //   card
  const [cardVisibleProduction, setCardVisibleProduction] = useState(false);

  const toggleCardProduction = () => {
    setCardVisibleProduction(!cardVisibleProduction);
  };

  const [cardVisibleOperation, setCardVisibleOperation] = useState(false);

  const toggleCardOperation = () => {
    setCardVisibleOperation(!cardVisibleOperation);
  };

  const [cardVisibleStandard, setCardVisibleStandard] = useState(false);

  const toggleCardStandard = () => {
    setCardVisibleStandard(!cardVisibleStandard);
  };

  const [cardVisibleBomitem, setCardVisibleBomitem] = useState(false);

  const toggleCardBomitem = () => {
    setCardVisibleBomitem(!cardVisibleBomitem);
  };

  // Purchase Card
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    Department_Name: "",
    Short_Name: "",
    Std_Otp: "",
    Operation_Name: "",
    Prefix: "",
    Mhr_Rate: "",
    BomQc: "",
    ProductionDept: "",
    MachineType: "",
    Production_Cycle_Time: "",
    Stop_Mc_Booking: "",
    Per_Day_Prod_Qty: "",
    Bom_Item_Group: "",
    Item: "",
    Qty: "",
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Department_Name) {
      newErrors.Department_Name = "This field is required.";
    }
    if (!formData.Short_Name) {
      newErrors.Short_Name = "This field is required.";
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
        await updateDepartment(editId, formData);
        toast.success("Department updated successfully!");
      } else {
        await saveDepartment(formData);
        toast.success("Department saved successfully!");
      }
      fetchDepartments(); // Refresh data
      setFormData({ Department_Name: "", Short_Name: "" });
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      toast.error("Failed to save department.");
      console.error("Error saving department:", error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      setData(response);
    } catch (error) {
      toast.error("Failed to fetch departments.");
      console.error("Error fetching departments:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDepartmentCard(id);
      toast.success("Department deleted successfully!");
      fetchDepartments(); // Refresh data
    } catch (error) {
      toast.error("Failed to delete department.");
      console.error("Error deleting department:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      Department_Name: item.Department_Name,
      Short_Name: item.Short_Name,
    });
    setIsEditing(true);
    setEditId(item.id);
  };



  return (
    <div className="BillMaterial">
      <div className="container-fluid">
        <ToastContainer />
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav
                sideNavOpen={sideNavOpen}
                toggleSideNav={toggleSideNav}
              />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="BillMaterial1">
                  <div className="BillMaterialMain mb-4 text-start mt-5">
                    <div className="row align-items-center">
                      <div className="col-md-5">
                        <h5 className="header-title">
                          Routing & Bill of Material (BOM)
                        </h5>
                      </div>
                      <div className="col-md-7 text-end">
                        <button
                          className="Billmaterialbtn"
                          onClick={toggleCardProduction}
                        >
                          1. Production Dept
                        </button>
                        <button
                          className="Billmaterialbtn"
                          onClick={toggleCardOperation}
                        >
                          2. Operation Master
                        </button>
                        <button
                          className="Billmaterialbtn"
                          onClick={toggleCardStandard}
                        >
                          3. Std Routing
                        </button>
                        <button
                          className="Billmaterialbtn"
                          onClick={toggleCardBomitem}
                        >
                          BOM Item Group
                        </button>
                        <button className="Billmaterialbtn">BOM Print</button>
                        <Link to={"/bom-routing"} className="Billmaterialbtn">
                          BOM List
                        </Link>
                      </div>
                    </div>
                  </div>

                  {cardVisibleProduction && (
                    <div className="ProductionDeptCard">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <h5 style={{ color: "blue" }}>
                            Production Department Master
                          </h5>
                          <button
                            className="Closebom"
                            onClick={toggleCardProduction}
                          >
                            X
                          </button>
                        </div>

                        <div className="card-body">
                          <form onSubmit={handleSave}>
                            <div className="row mb-3 text-start">
                              <div className="col-md-5">
                                <label
                                  htmlFor="Department_Name"
                                  className="form-label"
                                >
                                  Department Name:
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.Department_Name ? "is-invalid" : ""
                                  }`}
                                  id="Department_Name"
                                  name="Department_Name"
                                  value={formData.Department_Name}
                                  onChange={handleInputChange}
                                  placeholder="Enter department name"
                                />
                                {errors.Department_Name && (
                                  <div className="invalid-feedback">
                                    {errors.Department_Name}
                                  </div>
                                )}
                              </div>
                              <div className="col-md-5">
                                <label
                                  htmlFor="Short_Name"
                                  className="form-label"
                                >
                                  Short Name:
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.Short_Name ? "is-invalid" : ""
                                  }`}
                                  id="Short_Name"
                                  name="Short_Name"
                                  value={formData.Short_Name}
                                  onChange={handleInputChange}
                                  placeholder="Enter short name"
                                />
                                {errors.Short_Name && (
                                  <div className="invalid-feedback">
                                    {errors.Short_Name}
                                  </div>
                                )}
                              </div>
                              <div className="col-md-2">
                                <button
                                  type="submit"
                                  className="bomButton"
                                  style={{ marginTop: "31px" }}
                                >
                                  {isEditing ? "Update" : "Save"}
                                </button>
                              </div>
                            </div>
                          </form>
                          <div className="row">
                            <div className="col-12">
                              <table className="table table-bordered table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Sr. No.</th>
                                    <th scope="col">Department Name</th>
                                    <th scope="col">Short Name</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {data.length > 0 ? (
                                    data.map((item, index) => (
                                      <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.Department_Name}</td>
                                        <td>{item.Short_Name}</td>
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
                                            onClick={() =>
                                              handleDelete(item.id)
                                            }
                                          />
                                        </td>
                                      </tr>
                                    ))
                                  ) : (
                                    <tr>
                                      <td colSpan="5" className="text-center">
                                        No data found!
                                      </td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardVisibleOperation && (
                    <BOMoperation/>
                   
                  )}
                  {cardVisibleStandard && (
                    <div className="Standard">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <span>Standard Routing Master</span>
                          <button
                            className="Closebom"
                            onClick={toggleCardStandard}
                          >
                            X
                          </button>
                        </div>
                        <VisibleStandard />
                      </div>
                    </div>
                  )}
                  {cardVisibleBomitem && (
                    <div className="Bomitem">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <span>BOM Item Group Details</span>
                          <button
                            className="Closebom"
                            onClick={toggleCardBomitem}
                          >
                            X
                          </button>
                        </div>
                        <VisibleBomitem />
                      </div>
                    </div>
                  )}
                  <div className="BillMaterialsection mt-4">
                    <div className="container-fluid">
                      <div className="row mt-3 align-items-center mt-4">
                        <div className="col-md-2">
                          <select className="form-select">
                            <option>ALL</option>
                          </select>
                        </div>
                        <div className="col-md-2 mt-1">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Input Field"
                          />
                        </div>

                        <div className="col-md-2">
                          <button className="materialbtn">Search</button>
                          <button className="materialbtn">Clear</button>
                        </div>
                        <div className="col-md-2" style={{ marginTop: "10px" }}>
                          <label className="form-label">Born Authorise</label>
                        </div>
                        <div className="col-md-1">
                          <select className="form-select">
                            <option>No</option>
                            <option>Yes</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <button className="materialbtn">Copy BOM</button>
                        </div>
                        <div className="col-md-2">
                          <p style={{ color: "blue", marginTop: "10px" }}>
                            Calculate RM Wt
                          </p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-start">
                          <button className="BOMBOttombtn">BOM</button>
                          <button className="BOMBOttombtn">BOM History</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillMaterial;
