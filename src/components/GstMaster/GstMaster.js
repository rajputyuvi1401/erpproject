import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GstMaster.css";

const GstMaster = () => {
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

  const [formData, setFormData] = useState({
    HSN_SAC_Code: "",
    HSN_SAC_Desc: "",
    CGST: "",
    SGST: "",
    IGST: "",
    UTGST: "",
    export_SGST: "",
    export_CGST: "",
    export_IGST: "",
    Cess: "",
    Is_Exempt: "no",
    Type: "type1",
  });

  const [records, setRecords] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get(
        "http://13.201.136.34:8000/All_Masters/GST_Master/"
      );
      setRecords(response.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        formErrors[key] = "This field is required.";
      }
    });

    return Object.keys(formErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      if (isEdit) {
        await axios.put(
          `http://13.201.136.34:8000/All_Masters/GST_Master/${editId}/`,
          formData
        );
        setIsEdit(false);
        setEditId(null);
      } else {
        await axios.post(
          "http://13.201.136.34:8000/All_Masters/GST_Master/",
          formData
        );
      }
      fetchRecords();
      setFormData({
        HSN_SAC_Code: "",
        HSN_SAC_Desc: "",
        CGST: "",
        SGST: "",
        IGST: "",
        UTGST: "",
        export_SGST: "",
        export_CGST: "",
        export_IGST: "",
        Cess: "",
        Is_Exempt: "no",
        Type: "type1",
      });
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("An error occurred while saving the data.");
    }
  };

  const handleEdit = (record) => {
    setFormData(record);
    setIsEdit(true);
    setEditId(record.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://13.201.136.34:8000/All_Masters/GST_Master/${id}/`
      );
      fetchRecords();
      alert("Record deleted successfully!");
    } catch (error) {
      console.error("Error deleting record:", error);
      alert("An error occurred while deleting the record.");
    }
  };
  return (
    <div className="GstMaster">
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
                <div className="GstMaster1">
                  <div className="GstMasterupper">
                    <div className="Container-fluid">
                      <div className="row">
                        <div className="col-md-4 text-start">
                          <h5 style={{ color: "blue" }}>GST Rate Master</h5>
                        </div>
                        <div className="col-md-8 text-end">
                          <Link to="/task-master" className="gstbtn">
                            Tax Code Master
                          </Link>
                          <Link to="/Cut-wise" className="gstbtn">
                            Cust-Wise GST Master
                          </Link>
                          <Link to="/Customer-Item-Wise-Gst" className="gstbtn">
                            Cut-Wise GST Rate - Excel Upload
                          </Link>
                          <Link to="/" className="gstbtn">
                            Export To Excel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="GstMasterMain">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>HSN/SAC Code</th>
                                  <th>HSN/SAC Desc.</th>
                                  <th>Domestic</th>
                                  <th>Export</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="HSN_SAC_Code"
                                      value={formData.HSN_SAC_Code}
                                      onChange={handleChange}
                                      placeholder="Tariff code"
                                    />
                                  </td>
                                  <td>
                                    <textarea
                                      className="form-control"
                                      name="HSN_SAC_Desc"
                                      value={formData.HSN_SAC_Desc}
                                      onChange={handleChange}
                                    ></textarea>
                                  </td>
                                  <td>
                                    <thead>
                                      <tr>
                                        <th>CGST (%)</th>
                                        <th>SGST (%)</th>
                                        <th>IGST (%)</th>
                                        <th>UTGST (%)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="CGST"
                                            value={formData.CGST}
                                            onChange={handleChange}
                                            placeholder="CGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="SGST"
                                            value={formData.SGST}
                                            onChange={handleChange}
                                            placeholder="SGST (%)"
                                          />
                                        </td>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="IGST"
                                            value={formData.IGST}
                                            onChange={handleChange}
                                            placeholder="IGST (%)"
                                          />
                                        </td>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="UTGST"
                                            value={formData.UTGST}
                                            onChange={handleChange}
                                            placeholder="UTGST (%)"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </td>
                                  <td>
                                    <thead>
                                      <tr>
                                        <th>SGST (%)</th>
                                        <th>CGST (%)</th>
                                        <th>IGST (%)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="export_SGST"
                                            value={formData.export_SGST}
                                            onChange={handleChange}
                                            placeholder="Export SGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="export_CGST"
                                            value={formData.export_CGST}
                                            onChange={handleChange}
                                            placeholder="Export CGST (%)"
                                          />
                                        </td>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="export_IGST"
                                            value={formData.export_IGST}
                                            onChange={handleChange}
                                            placeholder="Export IGST (%)"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </td>
                                  <td>
                                    <thead>
                                      <tr>
                                        <th>Cess (%)</th>
                                        <th>Is Exempt</th>
                                        <th>Type</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="Cess"
                                            value={formData.Cess}
                                            onChange={handleChange}
                                            placeholder="Cess (%)"
                                          />
                                        </td>
                                        <td>
                                          <select
                                            className="form-control mb-2"
                                            name="Is_Exempt"
                                            value={formData.Is_Exempt}
                                            onChange={handleChange}
                                          >
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </select>
                                        </td>
                                        <td>
                                          <select
                                            className="form-control"
                                            style={{ width: "75px" }}
                                            name="Type"
                                            value={formData.Type}
                                            onChange={handleChange}
                                          >
                                            <option value="type1">
                                              Type 1
                                            </option>
                                            <option value="type2">
                                              Type 2
                                            </option>
                                          </select>
                                        </td>
                                        <td>
                                          <button
                                            className="btn-gst"
                                            onClick={handleSave}
                                          >
                                            save
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="GstMastertable">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Sr</th>
                                    <th>HSN Code</th>
                                    <th>HSN Code Desc.</th>
                                    <th>CGST</th>
                                    <th>SGST</th>
                                    <th>IGST</th>
                                    <th>UTGST</th>
                                    <th>Export CGST</th>
                                    <th>Export SGST</th>
                                    <th>Export IGST</th>
                                    <th>Cess</th>
                                    <th>DBK SrNo</th>
                                    <th>Is Exempt</th>
                                    <th>Type</th>
                                    <th>User</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {records.map((record, index) => (
                                    <tr key={record.id}>
                                      <td>{index + 1}</td>
                                      <td>{record.HSN_SAC_Code}</td>
                                      <td>{record.HSN_SAC_Desc}</td>
                                      <td>{record.CGST}</td>
                                      <td>{record.SGST}</td>
                                      <td>{record.IGST}</td>
                                      <td>{record.UTGST}</td>
                                      <td>{record.export_CGST}</td>
                                      <td>{record.export_SGST}</td>
                                      <td>{record.export_IGST}</td>
                                      <td>{record.Cess}</td>
                                      <td>{record.DBK_SrNo}</td>
                                      <td>{record.Is_Exempt}</td>
                                      <td>{record.Type}</td>
                                      <td>{record.User}</td>
                                      <td>
                                        <button
                                          className="sgstbtn"
                                          onClick={() => handleEdit(record)}
                                        >
                                          <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                          className="sgstbtn"
                                          onClick={() =>
                                            handleDelete(record.id)
                                          }
                                        >
                                          <i className="fas fa-trash"></i>
                                        </button>
                                        <button className="sgstbtn">
                                          <i className="fas fa-info-circle"></i>
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
                  <div
                    className="row"
                    style={{ color: "blue", padding: "10px" }}
                  >
                    <div className="col-md-12 text-start">
                      <p>Total Records: {records.length}</p>
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

export default GstMaster;
