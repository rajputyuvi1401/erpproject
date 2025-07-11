import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./DeleteRecord.css";
import { Link } from "react-router-dom";

const DeleteRecord = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [enterNo, setEnterNo] = useState("");
  const [activeTab, setActiveTab] = useState("delete");

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  const handleEnterNoChange = (e) => {
    setEnterNo(e.target.value);
  };

  return (
    <div className="DeleteManagement">
      <NavBar toggleSideNav={toggleSideNav} />
      <div className="main-container">
        <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
        <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
          <div className="DeleteRecord">
            <div className="DeleteRecord-header mb-2 text-start">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <h5 className="header-title">Delete / Cancel Document</h5>
                </div>
                <div className="col-md-8 text-end">
                  <Link className="vndrbtn" to="/Item-delete">
                    Delete Item
                  </Link>
                  <Link to="/delete-report" className="vndrbtn">
                    View Delete History
                  </Link>
                </div>
              </div>
            </div>

            <div className="deleteRecordsmain">
              <div className="row">
                <div className="tabs">
                  <div className="row">
                    <div className="tab-navigation">
                      <button
                        className={`tab-button vndrbtn  ${
                          activeTab === "delete" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("delete")}
                      >
                        Delete Record
                      </button>
                      <button
                        className={`tab-button vndrbtn ${
                          activeTab === "cancel" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("cancel")}
                      >
                        Cancel Record
                      </button>
                    </div>

                    <div className="tab-content">
                      {activeTab === "delete" && (
                        <div className="delete-tab">
                          <div className="deleteRecordsmain">
                            <div className="row text-start">
                              <div className="col-md-3">
                                <h4 className="header-title">Select Group</h4>
                                <ul>
                                  <li>
                                    <option value="F4_Outward">
                                      F4_Outward
                                    </option>
                                  </li>
                                  <li>
                                    <option value="F4_Inward">F4_Inward</option>
                                  </li>
                                  <li>
                                    <option value="Tax_Invoice">
                                      Tax_Invoice
                                    </option>
                                  </li>
                                  <li>
                                    <option value="Export_Invoice">
                                      Export_Invoice
                                    </option>
                                  </li>
                                  <li>
                                    <option value="Jobwork_Invoice">
                                      Jobwork_Invoice
                                    </option>
                                  </li>
                                  <li>
                                    <option value="Customer_SalesOrder">
                                      Customer_SalesOrder
                                    </option>
                                  </li>
                                </ul>
                              </div>
                              
                              <div className="col-md-9">
                                <div className="row">
                                  <div className="col-md-2">
                                    <select className="form-select">
                                      <option value="">2024-2025</option>
                                      <option value="2023-2024">
                                        2023-2024
                                      </option>
                                    </select>
                                  </div>
                                  <div className="col-md-1">
                                    <label>Enter No:</label>
                                  </div>
                                  <div className="col-md-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={enterNo}
                                      onChange={handleEnterNoChange}
                                      placeholder="No..."
                                    />
                                  </div>
                                  <div className="col-md-2">
                                    <button className="vndrbtn">Search</button>
                                  </div>
                                </div>
                                <div className="form-group">Master</div>
                                <div className="item-details">Item Details</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "cancel" && (
                        <div className="cancel-tab">
                          <div className="deleteRecordsmain">
                            <div className="row text-start">
                              <div className="col-md-3">
                                <h4 className="header-title">Select Group</h4>
                                <ul>
                                  <li>
                                    <option value="F4_Outward">
                                      F4_Outward
                                    </option>
                                  </li>
                                  <li>
                                    <option value="F4_Inward">F4_Inward</option>
                                  </li>
                                  <li>
                                    <option value="Tax_Invoice">
                                      Tax_Invoice
                                    </option>
                                  </li>
                                  <li>
                                    <option value="Export_Invoice">
                                      Export_Invoice
                                    </option>
                                  </li>
                                  <li>
                                    <option value="Jobwork_Invoice">
                                      Jobwork_Invoice
                                    </option>
                                  </li>
                                  <li>
                                    <option value="Customer_SalesOrder">
                                      Customer_SalesOrder
                                    </option>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-9">
                                <div className="row">
                                  <div className="col-md-2">
                                    <select className="form-select">
                                      <option value="">2024-2025</option>
                                      <option value="2023-2024">
                                        2023-2024
                                      </option>
                                    </select>
                                  </div>
                                  <div className="col-md-1">
                                    <label>Enter No:</label>
                                  </div>
                                  <div className="col-md-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={enterNo}
                                      onChange={handleEnterNoChange}
                                      placeholder="No..."
                                    />
                                  </div>
                                  <div className="col-md-2">
                                    <button className="vndrbtn">Search</button>
                                  </div>
                                  <div className="col-md-1">
                                    <label>Cancel Remark:</label>
                                  </div>
                                  <div className="col-md-2">
                                    <textarea className="form-control"></textarea>
                                  </div>
                                  <div className="col-md-2">
                                    <button className="vndrbtn">Cancel</button>
                                  </div>
                                </div>
                                <div className="form-group">Master</div>
                                <div className="item-details">Item Details</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </div>

            </div>
          
        </main>
      </div>
    </div>
  );
};

export default DeleteRecord;
