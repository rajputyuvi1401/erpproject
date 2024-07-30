import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import { Link } from "react-router-dom";
import "./TaskMaster.css";
import {
  getTaxCodes,
  createTaxCode,
  updateTaxCode,
  deleteTaxCode,
} from "../../Service/Api.jsx"; // Adjust the import path as needed

const TaskMaster = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [taxCodes, setTaxCodes] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    Tax_Code: "",
    Tax_Desc: "",
    Module: "",
    GST_Tax_Code: "",
    CGST: "",
    SGST: "",
    IGST: "",
    Cess: "",
  });
  const [editMode, setEditMode] = useState(false);

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

  useEffect(() => {
    fetchTaxCodes();
  }, []);

  const fetchTaxCodes = async () => {
    try {
      const data = await getTaxCodes();
      console.log("Fetched tax codes data:", data); // Debugging
      setTaxCodes(data);
    } catch (error) {
      console.error("Error fetching tax codes:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      console.log("Saving form data:", formData);
      if (editMode) {
        console.log("Updating tax code with ID:", formData.id);
        await updateTaxCode(formData.id, formData);
      } else {
        console.log("Creating new tax code");
        await createTaxCode(formData);
      }
      fetchTaxCodes();
      resetForm();
    } catch (error) {
      console.error("Error saving tax code:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTaxCode(id);
      fetchTaxCodes();
    } catch (error) {
      console.error("Error deleting tax code:", error);
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      id: "",
      Tax_Code: "",
      Tax_Desc: "",
      Module: "",
      GST_Tax_Code: "",
      CGST: "",
      SGST: "",
      IGST: "",
      Cess: "",
    });
    setEditMode(false);
  };

  return (
    <div className="taskmaster">
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
                <div className="taskmaster1">
                  <div className="taskheader">
                    <div>
                      <h5 style={{ color: "blue" }}>Tax Code Master</h5>
                    </div>
                    <div className="text-end">
                      <Link to="/gst-rate-master" className="taskbtn">
                        GST Rate Master
                      </Link>
                      <Link to="/" className="taskbtn">
                        Export To Excel
                      </Link>
                    </div>
                  </div>
                  <div className="taskmain">
                    <div className="container-fluid">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Tax Code</th>
                              <th>Tax Desc</th>
                              <th>Module</th>
                              <th>GST Tax Code</th>
                              <th>CGST (%)</th>
                              <th>SGST (%)</th>
                              <th>IGST (%)</th>
                              <th>Cess (%)</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input
                                  type="text"
                                  name="Tax_Code"
                                  value={formData.Tax_Code}
                                  onChange={handleInputChange}
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <textarea
                                  name="Tax_Desc"
                                  value={formData.Tax_Desc}
                                  onChange={handleInputChange}
                                  className="form-control"
                                ></textarea>
                              </td>
                              <td>
                                <select
                                  name="Module"
                                  value={formData.Module}
                                  onChange={handleInputChange}
                                  className="form-control"
                                >
                                  <option value="">Select Module</option>
                                  <option value="purchase">Purchase</option>
                                  <option value="sales">Sales</option>
                                </select>
                              </td>
                              <td>
                                <select
                                  name="GST_Tax_Code"
                                  value={formData.GST_Tax_Code}
                                  onChange={handleInputChange}
                                  className="form-control"
                                >
                                  <option value="">Select GST Tax Code</option>
                                  <option value="CGST+SGST">CGST+SGST</option>
                                  <option value="IGST">IGST</option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="CGST"
                                  value={formData.CGST}
                                  onChange={handleInputChange}
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="SGST"
                                  value={formData.SGST}
                                  onChange={handleInputChange}
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="IGST"
                                  value={formData.IGST}
                                  onChange={handleInputChange}
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="Cess"
                                  value={formData.Cess}
                                  onChange={handleInputChange}
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <button
                                  onClick={handleSave}
                                  className="maintaskbtn"
                                >
                                  {editMode ? "Update" : "Save"}
                                </button>
                                <button
                                  onClick={handleCancel}
                                  className="maintaskbtn"
                                >
                                  Cancel
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="taskmiddle">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th className="blue-th">Sr</th>
                                    <th className="blue-th">Tax Code</th>
                                    <th className="blue-th">Tax Desc</th>
                                    <th className="blue-th">Module</th>
                                    <th className="blue-th">GST Tax Code</th>
                                    <th className="blue-th">CGST (%)</th>
                                    <th className="blue-th">SGST (%)</th>
                                    <th className="blue-th">IGST (%)</th>
                                    <th className="blue-th">Cess (%)</th>
                                    <th className="blue-th">Edit</th>
                                    <th className="blue-th">Delete</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {taxCodes.map((item, index) => (
                                    <tr key={item.id}>
                                      <td>{index + 1}</td>
                                      <td>{item.Tax_Code}</td>
                                      <td>{item.Tax_Desc}</td>
                                      <td>{item.Module}</td>
                                      <td>{item.GST_Tax_Code}</td>
                                      <td>{item.CGST}</td>
                                      <td>{item.SGST}</td>
                                      <td>{item.IGST}</td>
                                      <td>{item.Cess}</td>
                                      <td>
                                        <button
                                          onClick={() => handleEdit(item)}
                                          className="sgstbtn"
                                        >
                                          <i className="fas fa-edit"></i>
                                        </button>
                                      </td>
                                      <td>
                                        <button
                                          onClick={() => handleDelete(item.id)}
                                          className="sgstbtn"
                                        >
                                          <i className="fas fa-trash"></i>
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
                  <div className="row text-start" style={{ marginTop: "5px" }}>
                    <div className="col-md-12">
                      <h5 style={{ color: "blue" }}>
                        Total Record: {taxCodes.length}
                      </h5>
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

export default TaskMaster;
