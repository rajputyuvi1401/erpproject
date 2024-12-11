import "./ScrapRejectionReport.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { FaEdit, FaTrash } from "react-icons/fa";

const ScrapRejectionReport = () => {
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
    <div className="ScrapRejectionMaster">
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
                <div className="ScrapRejection mt-5">
                  <div className="ScrapRejection-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">
                          Scrap / Rejection Report
                        </h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <button type="button" className="btn" to="/AddQuater">
                          Rejection Report
                        </button>

                        <button
                          type="button"
                          className="btn"
                          to="/Companysetup"
                        >
                          Export To Excel
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="ScrapRejection-Main">
                    <div className="container-fluid">
                      <div className="row g-3 text-start">
                        {/* Plant */}
                        <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>Plant:</label>
                          <select className="form-select">
                            <option>Select All</option>
                          </select>
                        </div>

                        {/* From Date */}
                        <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>

                        {/* To Date */}
                        <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>To Date:</label>
                          <input type="date" className="form-control" />
                        </div>

                        {/* Type */}
                        <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>Tm Type:</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option value="Scrap">Scrap</option>
                            <option value="Rejection">Rejection</option>
                            <option value="Debit Note">Debit Note</option>
                            <option value="Vendor Return">Vendor Return</option>
                            <option value="Line Rejection">
                              Line Rejection
                            </option>
                            <option value="Prod Loss">Prod Loss</option>
                          </select>
                        </div>

                        {/* Series */}
                        <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>Series:</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option value="Scrap/ Line/ Rejection Note">
                              Scrap/ Line/ Rejection Note
                            </option>
                          </select>
                        </div>

                        {/* Item Name */}
                        <div className="col-sm-6 col-md-1 col-lg-1">
                          <label>Item Name:</label>
                          <input type="text" className="form-control" />
                        </div>

                        {/* Customer Name */}
                        <div className="col-sm-6 col-md-1 col-lg-2">
                          <label>Customer Name:</label>
                          <input type="text" className="form-control" />
                        </div>

                        {/* Wo No */}
                        <div className="col-sm-6 col-md-1 col-lg-1">
                          <label>Doc No:</label>
                          <input type="text" className="form-control" />
                        </div>

                        {/* User */}
                        <div className="col-sm-6 col-md-1 col-lg-1">
                          <label>User:</label>
                          <input type="text" className="form-control" />
                        </div>

                        <div className="col-sm-2 col-md-2 col-lg-1 mt-4">
                          <label></label>
                          <button
                            type="button"
                            className="btn btn-primary w-100"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Sr.</th>
                          <th scope="col">Year</th>
                          <th scope="col">Plant</th>
                          <th scope="col">Scrap No</th>
                          <th scope="col">Date</th>
                          <th scope="col">Type</th>
                          <th scope="col">Item Desc</th>
                          <th scope="col">Rej Qty</th>
                          <th scope="col">Reason</th>
                          <th scope="col">Note</th>
                          <th scope="col">Scrap Code</th>
                          <th scope="col">Scrap Wt</th>
                          <th scope="col">Customer /Supplier Name</th>
                          <th scope="col">WO No</th>
                          <th scope="col">User</th>
                          <th scope="col">Auth</th>
                          <th scope="col">Mll</th>
                          <th scope="col">Doc / Del / Edit</th>
                          <th scope="col">View</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>1</td>
                          <td>January</td>
                          <td>01/01/2024</td>
                          <td>31/01/2024</td>
                          <td>1</td>
                          <td>2024</td>
                          <td>1</td>
                          <td>January</td>
                          <td>01/01/2024</td>
                          <td>31/01/2024</td>
                          <td>1</td>
                          <td>2024</td>
                          <td>2024</td>
                          <td>2024</td>
                          <td>2024</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button className="btn btn-link">
                              <FaEdit />
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-link text-danger">
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                        {/* More rows can be added here */}
                      </tbody>
                    </table>
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

export default ScrapRejectionReport;
