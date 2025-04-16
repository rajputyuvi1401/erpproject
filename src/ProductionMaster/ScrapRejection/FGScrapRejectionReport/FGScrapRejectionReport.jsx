import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./FGScrapRejectionReport.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const FGScrapRejectionReport = () => {
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
    <div className="FGScrapRejectionMaster">
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
                <div className="FGScrapRejection">
                  <div className="FGScrapRejection-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">
                          Scrap / Rejection Report{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="FGScrapRejection-content">
                    <div className="tabs">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#prod-details"
                            data-bs-toggle="tab"
                          >
                            Scrap Note
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#consumption-details"
                            data-bs-toggle="tab"
                          >
                            Rejection Note
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content" style={{ border: "none" }}>
                      <div
                        className="tab-pane fade show active"
                        id="prod-details"
                      >
                        <div className="FGScrapRejection-first">
                         
                            <div className="container-fluid">
                              <div className="row g-3 text-start">
                                {/* Plant */}
                                <div className="col-sm-6 col-md-3 col-lg-2">
                                  <label>Plant:</label>
                                  <select className="form-select">
                                    <option>All</option>
                                  </select>
                                </div>

                                {/* From Date */}
                                <div className="col-sm-6 col-md-3 col-lg-2">
                                  <label>From:</label>
                                  <input type="date" className="form-control" />
                                </div>

                                {/* To Date */}
                                <div className="col-sm-6 col-md-3 col-lg-2">
                                  <label>To Date:</label>
                                  <input type="date" className="form-control" />
                                </div>

                               

                                {/* Item Name */}
                                <div className="col-sm-6 col-md-3 col-lg-2">
                                  <label>Item Name:</label>
                                  <input type="text" className="form-control" />
                                </div>

                                {/* Customer Name */}
                                <div className="col-sm-6 col-md-3 col-lg-2">
                                  <label>Customer Name:</label>
                                  <input type="text" className="form-control" />
                                </div>

                             

                                <div className="col-sm-2 col-md-2 col-lg-2 mt-3">
                                  <label></label>
                                  <button
                                    type="button"
                                    className="vndrbtn w-100"
                                  >
                                    Search
                                  </button>
                                </div>
                                <div className="col-sm-2 col-md-2 col-lg-2 mt-2">
                                  <label></label>
                                  <button
                                    type="button"
                                    className="vndrbtn w-100"
                                  >
                                    Export Excel
                                  </button>
                                </div>
                                <div className="col-sm-2 col-md-2 col-lg-3 mt-2">
                                  <label></label>
                                  <button
                                    type="button"
                                    className="vndrbtn w-100"
                                  >
                                    Scrap Value(Rework to Scrap)
                                  </button>
                                </div>
                              </div>
                            </div>
                        

                          <div className="table-responsive mt-3">
                            <table className="table table-bordered table-striped">
                              <thead>
                                <tr>
                                  <th scope="col">Sr.</th>
                                  <th scope="col">Year</th>
                                  
                                  <th scope="col">Scrap No</th>
                                  <th scope="col">Scrap Date</th>
                                  <th scope="col">Customer Name</th>
                                  <th scope="col">Item No</th>
                                  <th scope="col">Item Code</th>
                                  <th scope="col">Item Desc</th>
                                  <th scope="col">Part Code</th>
                                  <th scope="col">Rework Qty</th>
                                  <th scope="col">Reject Qty</th>
                                  <th scope="col">Scrap Code</th>
                                  <th scope="col">Scrap Wt</th>
                                  <th scope="col">User</th>
                                  
                                  <th scope="col">Doc / Del / Edit</th>
                                  <th scope="col">View</th>
                                  
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
                                  
                                  
                                  <td>
                                    <button className="vndrbtn">
                                      <FaEdit />
                                    </button>
                                  </td>
                                  <td>
                                    <button className="vndrbtn text-danger">
                                      <FaTrash />
                                    </button>
                                  </td>
                                </tr>
                                {/* More rows can be added here */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div className="tab-pane fade" id="consumption-details">
                        <div className="FGScrapRejection-second">
                           <div className="container-fluid">
                              <div className="row g-3 text-start">
                                {/* Plant */}
                                <div className="col-sm-6 col-md-3 col-lg-2">
                                  <label>Plant:</label>
                                  <select className="form-select">
                                    <option>All</option>
                                  </select>
                                </div>

                                {/* From Date */}
                                <div className="col-sm-6 col-md-3 col-lg-2">
                                  <label>From:</label>
                                  <input type="date" className="form-control" />
                                </div>

                                {/* To Date */}
                                <div className="col-sm-6 col-md-3 col-lg-2">
                                  <label>To Date:</label>
                                  <input type="date" className="form-control" />
                                </div>

                               

                                {/* Item Name */}
                                <div className="col-sm-6 col-md-3 col-lg-2">
                                  <label>Item Code:</label>
                                  <input type="text" className="form-control" />
                                </div>

                                {/* Customer Name */}
                                <div className="col-sm-6 col-md-3 col-lg-2">
                                  <label>Customer:</label>
                                  <input type="text" className="form-control" />
                                </div>

                             

                                <div className="col-sm-2 col-md-2 col-lg-2 mt-3">
                                  <label></label>
                                  <button
                                    type="button"
                                    className="vndrbtn  w-100"
                                  >
                                    Search
                                  </button>
                                </div>
                                
                                <div className="col-sm-2 col-md-2 col-lg-2 mt-2">
                                  <label></label>
                                  <button
                                    type="button"
                                    className="vndrbtn w-100"
                                  >
                                    Rejection Report
                                  </button>
                                </div>
                                <div className="col-sm-2 col-md-2 col-lg-3 mt-2">
                                  <label></label>
                                  <button
                                    type="button"
                                    className="vndrbtn w-100"
                                  >
                                    Print Rejection Report
                                  </button>
                                </div>
                              </div>
                            </div>
                        

                          <div className="table-responsive mt-3">
                            <table className="table table-bordered table-striped">
                              <thead>
                                <tr>
                                  <th scope="col">Sr.</th>
                                  <th scope="col">Year</th>
                                  
                                  <th scope="col">Rej. No</th>
                                  <th scope="col">Rej. Date</th>
                                  <th scope="col">Customer Name</th>
                                  <th scope="col">Item No</th>
                                  <th scope="col">Item Code</th>
                                  <th scope="col">Item Desc</th>
                                  <th scope="col">Part Code</th>
                                  <th scope="col">Rework Qty</th>
                                  <th scope="col">Reject Qty</th>
                                  <th scope="col">Scrap Code</th>
                                  <th scope="col">Scrap Wt</th>
                                  <th scope="col">User</th>
                                  
                                  <th scope="col">Doc / Del / Edit</th>
                                  <th scope="col">View</th>
                                  
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
                                  
                                  
                                  <td>
                                    <button className="vndrbtn">
                                      <FaEdit />
                                    </button>
                                  </td>
                                  <td>
                                    <button className="vndrbtn text-danger">
                                      <FaTrash />
                                    </button>
                                  </td>
                                </tr>
                                {/* More rows can be added here */}
                              </tbody>
                            </table>
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

export default FGScrapRejectionReport;
