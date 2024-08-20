import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import { Link } from "react-router-dom";
import Api from "../../../Service/Api.jsx";
import "./Cutwise.css";

const Cutwise = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    HSN_Code: "",
    Cust_Name: "",
    Item: "",
    Cust_PO_NO: "",
    CGST: "",
    SGST: "",
    IGST: "",
    UTGST: "",
    EXPORT_CGST: "",
    EXPORT_SGST: "",
    EXPORT_IGST: "",
    CESS: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

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
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await Api.get();
      console.log("Data fetched:", result);
      setData(result);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      if (editMode) {
        await Api.put(currentId, formData);
        setEditMode(false);
        setCurrentId(null);
      } else {
        await Api.post(formData);
      }
      setFormData({
        HSN_Code: "",
        Cust_Name: "",
        Item: "",
        Cust_PO_NO: "",
        CGST: "",
        SGST: "",
        IGST: "",
        UTGST: "",
        EXPORT_CGST: "",
        EXPORT_SGST: "",
        EXPORT_IGST: "",
        CESS: "",
      });
      fetchData();
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditMode(true);
    setCurrentId(item.id); // Ensure you have a unique identifier for editing
  };

  const handleDelete = async (id) => {
    try {
      await Api.delete(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  return (
    <div className="Cutwise">
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
                <div className="Cutwise1">
                  <div className="cutwiseheader">
                    <div>
                      <h5 style={{ color: "blue" }}>
                        Supplier/Customer-Item Wise GST(%) Rate Master
                      </h5>
                    </div>
                    <div className="text-end">
                      <Link to="/" className="cuthebtn">
                        Export To Excel
                      </Link>
                    </div>
                  </div>
                  <div className="cutwisemain">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>HSN/SAC Code</th>
                                  <th>Customer/Supplier Name</th>
                                  <th>Item</th>
                                  <th>Cust.PO No</th>
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
                                      name="HSN_Code"
                                      value={formData.HSN_Code}
                                      onChange={handleChange}
                                      placeholder="HSN/SAC Code"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="Cust_Name"
                                      value={formData.Cust_Name}
                                      onChange={handleChange}
                                      placeholder="Customer/Supplier Name"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="Item"
                                      value={formData.Item}
                                      onChange={handleChange}
                                      placeholder="Item"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="Cust_PO_NO"
                                      value={formData.Cust_PO_NO}
                                      onChange={handleChange}
                                      placeholder="Cust.PO No"
                                    />
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
                                            className="form-control"
                                            name="CGST"
                                            value={formData.CGST}
                                            onChange={handleChange}
                                            placeholder="CGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="SGST"
                                            value={formData.SGST}
                                            onChange={handleChange}
                                            placeholder="SGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="IGST"
                                            value={formData.IGST}
                                            onChange={handleChange}
                                            placeholder="IGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control"
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
                                        <th>CESS (%)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="EXPORT_CGST"
                                            value={formData.EXPORT_CGST}
                                            onChange={handleChange}
                                            placeholder="Export CGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="EXPORT_SGST"
                                            value={formData.EXPORT_SGST}
                                            onChange={handleChange}
                                            placeholder="Export SGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="EXPORT_IGST"
                                            value={formData.EXPORT_IGST}
                                            onChange={handleChange}
                                            placeholder="Export IGST (%)"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="CESS"
                                            value={formData.CESS}
                                            onChange={handleChange}
                                            placeholder="CESS (%)"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </td>

                                  <td>
                                    <button
                                      className="btn-gst"
                                      onClick={handleSave}
                                    >
                                      {editMode ? "Update" : "Save"}
                                    </button>
                                    {editMode && (
                                      <button
                                        className="btn-gst"
                                        onClick={() => setEditMode(false)}
                                      >
                                        Cancel
                                      </button>
                                    )}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Cutwisetable">
                    <div className="container-fluid">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr.</th>
                              <th>HSN Code</th>
                              <th>Cust Name</th>
                              <th>Item (Optional)</th>
                              <th>Cust PO NO</th>
                              <th>CGST</th>
                              <th>SGST</th>
                              <th>IGST</th>
                              <th>UTGST</th>
                              <th>Export CGST</th>
                              <th>Export SGST</th>
                              <th>Export IGST</th>
                              <th>CESS</th>
                              <th>DBKSrNo</th>
                              <th>User</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((item, index) => (
                              <tr key={item.HSN_Code}>
                                <td>{index + 1}</td>
                                <td>{item.HSN_Code}</td>
                                <td>{item.Cust_Name}</td>
                                <td>{item.Item}</td>
                                <td>{item.Cust_PO_NO}</td>
                                <td>{item.CGST}</td>
                                <td>{item.SGST}</td>
                                <td>{item.IGST}</td>
                                <td>{item.UTGST}</td>
                                <td>{item.EXPORT_CGST}</td>
                                <td>{item.EXPORT_SGST}</td>
                                <td>{item.EXPORT_IGST}</td>
                                <td>{item.CESS}</td>
                                <td>{item.DBKsSrNo}</td>
                                <td>{item.User}</td>
                                <td>
                                  <button
                                    className="btnwise"
                                    onClick={() => handleEdit(item)}
                                  >
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button
                                    className="btnwise"
                                    onClick={() => handleDelete(item.id)}
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
                  <div className="row text-start" style={{ marginTop: "5px" }}>
                    <div className="col-md-12">
                      <h5 style={{ color: "blue" }}>
                        Total Record: {data.length}
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

export default Cutwise;
