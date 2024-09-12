import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { Link } from "react-router-dom";
import CachedIcon from "@mui/icons-material/Cached.js";
import "./NewGateInward.css";
const NewGateInward = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

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
  return (
    <div className="NewStoreNewGateInward">
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
                <div className="NewGateInward-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-3">
                      <h5 className="header-title text-start">
                        New Gate Entry Inward
                      </h5>
                    </div>

                    <div className="col-md-9 text-end">
                      <div className="row justify-content-end">
                        <div className="col-md-4 d-flex align-items-center">
                          <Link className="pobtn">PO Status Report</Link>
                          <Link className="pobtn">Inward Challan List</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NewGateInward-main">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-Gernal-Detail-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Gernal-Detail"
                        type="button"
                        role="tab"
                        aria-controls="pills-Gernal-Detail"
                        aria-selected="true"
                      >
                        Gernal Details
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-GST-Details-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-GST-Details"
                        type="button"
                        role="tab"
                        aria-controls="pills-GST-Details"
                        aria-selected="false"
                      >
                        Item Details
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-Gernal-Detail"
                      role="tabpanel"
                      aria-labelledby="pills-Gernal-Detail-tab"
                      tabindex="0"
                    >
                      <div className="NewGateInward1">
                        <div className="container-fluid">
                          <div className="row mt-4 text-start">
                            <div className="col-md-4 ">
                              <div className="row mb-3">
                                <div className="col-md-4">
                                  <label htmlFor="plant">Plant:</label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    id="plant"
                                    name="plant"
                                    className="form-select"
                                  >
                                    <option value="">Select Plant</option>
                                    {/* Add other options here */}
                                  </select>
                                </div>
                              </div>

                              <div className="row mb-3">
                                <div className="col-md-4">
                                  <label htmlFor="series">Series:</label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    id="series"
                                    name="series"
                                    className="form-select"
                                  >
                                    <option value="">Select Series</option>
                                    {/* Add other options here */}
                                  </select>
                                </div>
                              </div>

                              <div className="row mb-3">
                                <div className="col-md-4">
                                  <label htmlFor="type">Type:</label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    id="type"
                                    name="type"
                                    className="form-select"
                                  >
                                    <option value="">Select Type</option>
                                    {/* Add other options here */}
                                  </select>
                                </div>
                              </div>
                            </div>

                
                          </div>

                          <div className="row text-start mt-4">
                          <div className="col-md-4">
                              <div className="container-fluid mt-4">
                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="suppCust">
                                      Supp./Cust:
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <input
                                      type="text"
                                      id="suppCust"
                                      name="suppCust"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-md-2">
                                    <button
                                      type="button"
                                      className="pobtn"
                                    >
                                      Search
                                    </button>
                                  </div>
                                  <div className="col-md-2">
                                    <button
                                      type="button"
                                      className="pobtn"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="geNo">GE No:</label>
                                  </div>
                                  <div className="col-md-7">
                                    <input
                                      type="text"
                                      id="geNo"
                                      name="geNo"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-md-1 d-flex align-items-center">
                                    <CachedIcon />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="geDate">GE Date:</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="date"
                                      id="geDate"
                                      name="geDate"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="geTime">GE Time:</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="geTime"
                                      name="geTime"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="challanNo">
                                      Challan No:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="challanNo"
                                      name="challanNo"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="challanDate">
                                      Challan Date:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="date"
                                      id="challanDate"
                                      name="challanDate"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="container-fluid mt-4">
                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="selectSeries">
                                      Select Series:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <select
                                      id="selectSeries"
                                      name="selectSeries"
                                      className="form-select"
                                    >
                                      <option value="">Select Series</option>
                                      {/* Add other options here */}
                                    </select>
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="invoiceNo">
                                      Invoice No:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="invoiceNo"
                                      name="invoiceNo"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="invoiceDate">
                                      Invoice Date:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="date"
                                      id="invoiceDate"
                                      name="invoiceDate"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="ewayBillNo">
                                      E-Way Bill No:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="ewayBillNo"
                                      name="ewayBillNo"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="ewayBillDate">
                                      E-Way Bill Date:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="date"
                                      id="ewayBillDate"
                                      name="ewayBillDate"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="contactPerson">
                                      Contact Person:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="contactPerson"
                                      name="contactPerson"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 text-start">
                              <div className="container-fluid mt-4">
                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="serviceNo">
                                      Service No:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="serviceNo"
                                      name="serviceNo"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="lrNo">LR No:</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="lrNo"
                                      name="lrNo"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="transporter">
                                      Transporter:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="transporter"
                                      name="transporter"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="remark">Remark:</label>
                                  </div>
                                  <div className="col-md-8">
                                    <textarea
                                      id="remark"
                                      name="remark"
                                      className="form-control"
                                    ></textarea>
                                  </div>
                                </div>

                              </div>
                              
                              <div className="row mb-3 text-end">
                                  <div className="col-md-12">
                                    <button className="pobtn" type="button">
                                      Save Gate Entry
                                    </button>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="pills-GST-Details"
                      role="tabpanel"
                      aria-labelledby="pills-GST-Details-tab"
                      tabindex="0"
                    >
                      <div className="NewGateInward1">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-12 text-start">
                              <div className="container-fluid mt-4">
                                <div className="row">
                                  <div className="col-md-8">
                                    <form className="row g-3 text-start">
                                      <div className="col-md-2 col-sm-6">
                                        <label className="form-label">
                                          Select Item
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter Supplier Name"
                                        />
                                      </div>

                                      <div className="col-md-2 col-sm-6">
                                        <label className="form-label">
                                          Qty (Nos)
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter Item Name"
                                        />
                                      </div>

                                      <div className="col-md-2 col-sm-6">
                                        <label className="form-label">
                                          Qty (Kg){" "}
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter Gate Entry No."
                                        />
                                      </div>
                                      <div className="col-md-2 col-sm-6">
                                        <label className="form-label">
                                          Remark
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter Gate Entry No."
                                        />
                                      </div>

                                      <div className="col-md-1 col-sm-6 mt-1 align-self-end">
                                        <button
                                          type="submit"
                                          className="pobtn w-100"
                                        >
                                          Add
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <div className="table-responsive">
                                  <table className="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Sr.</th>
                                        <th>Item No | Code</th>
                                        <th>Description</th>
                                        <th>Qty (Desc)</th>
                                        <th>Qty (Kg)</th>
                                        <th>Unit Code</th>
                                        <th>Remark</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
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

export default NewGateInward;
