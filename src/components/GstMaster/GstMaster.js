import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import { Link } from "react-router-dom";
import {
  fetchGstMasterRecords,
  createGstMasterRecord,
  updateGstMasterRecord,
  deleteGstMasterRecord,
} from "../Service/Api.jsx"; // Adjust path as necessary
import "./GstMaster.css";

const GstMaster = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
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
  const [editId, setEditId] = useState(null);

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
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const data = await fetchGstMasterRecords();
      setRecords(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      if (editId) {
        await updateGstMasterRecord(editId, formData);
        setEditId(null);
      } else {
        await createGstMasterRecord(formData);
      }
      setFormData({
        id: "",
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
      fetchRecords();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEdit = (record) => {
    setFormData(record);
    setEditId(record.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteGstMasterRecord(id);
      fetchRecords();
    } catch (error) {
      console.error(error.message);
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
                                  <th>Action</th>
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
                                      onChange={handleInputChange}
                                      placeholder="Tariff code"
                                    />
                                  </td>
                                  <td>
                                    <textarea
                                      className="form-control"
                                      name="HSN_SAC_Desc"
                                      value={formData.HSN_SAC_Desc}
                                      onChange={handleInputChange}
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
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="CGST"
                                            value={formData.CGST}
                                            onChange={handleInputChange}
                                            placeholder="CGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="SGST"
                                            value={formData.SGST}
                                            onChange={handleInputChange}
                                            placeholder="SGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="IGST"
                                            value={formData.IGST}
                                            onChange={handleInputChange}
                                            placeholder="IGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="UTGST"
                                            value={formData.UTGST}
                                            onChange={handleInputChange}
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
                                        <th>CESS (%)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="export_SGST"
                                            value={formData.export_SGST}
                                            onChange={handleInputChange}
                                            placeholder="SGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="export_CGST"
                                            value={formData.export_CGST}
                                            onChange={handleInputChange}
                                            placeholder="CGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="export_IGST"
                                            value={formData.export_IGST}
                                            onChange={handleInputChange}
                                            placeholder="IGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control mb-2"
                                            name="Cess"
                                            value={formData.Cess}
                                            onChange={handleInputChange}
                                            placeholder="Cess (%)"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </td>

                                  <td>
                                    <select
                                      className="form-control"
                                      name="Is_Exempt"
                                      value={formData.Is_Exempt}
                                      onChange={handleInputChange}
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
                                      onChange={handleInputChange}
                                    >
                                      <option value="type1">Type 1</option>
                                      <option value="type2">Type 2</option>
                                    </select>
                                  </td>

                                  <td>
                                    <button
                                      className="btn-gst"
                                      onClick={handleSave}
                                    >
                                      Save
                                    </button>
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
