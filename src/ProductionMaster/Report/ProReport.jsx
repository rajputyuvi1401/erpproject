import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./ProReportt.css";
import { Link } from "react-router-dom";


const ProReport = () => {
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
    <div className="ProReportMaster">

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
                <div className="ProReport">
                  <div className="ProReport-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <h5 className="header-title">Material Defect - Rejection Report</h5>
                      </div>
                      <div className="col-md-9 text-end">
                        <button type="button" className="vndrbtn" to="/AddQuater">
                          Export To Excel
                        </button>
                        <button type="button" className="vndrbtn" to="#/">
                          Print Format
                        </button>
                        <button type="button" className="vndrbtn" to="#/">
                          Print Format 2
                        </button>
                        <button type="button" className="vndrbtn" to="#/">
                          Machine Wise Defect Report
                        </button>
                        <Link type="button" className="vndrbtn" to="/OperationRejectionSummary">
                          Rejection Report - OP Wise
                        </Link>
                        <Link type="button" className="vndrbtn" to="/QueryReportPro">
                          Rejection Report - Quary
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="ProReport-Main">
                    <div className="container-fluid">
                      <div className="row g-3 text-start">
                        {/* Plant */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Plant:</label>
                          <select className="form-select">
                            <option>Select All</option>
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

                        {/* Months Wise */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Months Wise :</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>

                        {/* Operator Wise */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Operator Wise:</label>
                          <input type="text" className="form-control" />
                        </div>

                        {/* Reason Wise */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Reason Wise:</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>

                        {/* Item Wise */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Item Wise:</label>
                          <input type="text" className="form-control" />
                        </div>

                        {/* Machine Wise */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Machine Wise :</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>

                        <div className="col-sm-2 col-md-2 col-lg-1 mt-4">
                          <button type="button" className="vndrbtn w-100" >
                            Search
                          </button>
                        </div>



                      </div>
                    </div>
                  </div>

                  <div className="ProReportTable table-responsive">
                    <table className="table table-striped table-bordered ">
                      <thead>
                        <tr className="clr">
                          <th>Sr</th>
                          <th>Date </th>
                          <th>Part Name</th>
                          <th>M/C No</th>
                          <th>CP No</th>
                          <th>Shift</th>
                          <th>Operator Name</th>
                          <th>Supervisor Name</th>
                          <th>Pord Qty </th>
                          <th>Rej. Qty</th>
                          <th>Rej. %</th>
                          <th>Rej. Reason</th>
                          <th>Slip No</th>
                          <th>Type</th>
                          <th>Remark</th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* Example row, you can map rows here */}
                        <tr>
                          <td>1</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
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
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProReport
