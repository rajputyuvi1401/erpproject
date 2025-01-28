import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./InwardChallanList.css";
const InwardChallanList = () => {
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
    <div className="NewStoreInwardList">
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
                <div className="InwardList-header mb-4 text-start mt-5">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">
                        Inward Challan List
                      </h5>
                    </div>
                    <div className="col-md-6 text-end">
                      <div className="row justify-content-end">
                        <label>QC PEnding:4 , Partial : 1</label>
                      </div>
                    </div>
                    <div className="col-md-4 text-end">
                      
                          <button className="btn">GRN : Report</button>
                        
                          <button className="btn">57F4-Inward - Query</button>
                       
                    </div>
                  </div>
                </div>
                <div className="InwardList-main">
                  <div className="container-fluid text-start">
                    <div className="row mt-4">
                      <div className="col-12 col-md">
                        <label htmlFor="fromDate">From Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="fromDate"
                        />
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="toDate">To Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="toDate"
                        />
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="plant">Plant</label>
                        <select className="form-control" id="plant">
                          <option>Produlink</option>
                         
                        </select>
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="type">Type</label>
                        <select className="form-control" id="type">
                          <option>ALL</option>
                          {/* Add options here */}
                        </select>
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="series">Series</label>
                        <select className="form-control" id="series">
                            <option>Select</option>
                          <option>57F4 Inward</option>
                          <option>57F4 Return</option>
                          <option>Jobwork 57F4 Inward</option>
                          <option>Non Returnable Inward</option>
                          <option>Vendor Scrap Inward</option>
                          <option>Inward Tool</option>
                          <option>Cust Rework</option>
                         
                        </select>
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="f4Status">F4 Status</label>
                        <select className="form-control" id="f4Status">
                          <option>ALL</option>
                          {/* Add options here */}
                        </select>
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="vendorCustomerName">
                          V Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="vendorCustomerName"
                        />
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="itemCodeNo">ItemCodeNo:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="itemCodeNo"
                        />
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="partCode">Part Code:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="partCode"
                        />
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="inward">Inward</label>
                        <select className="form-control" id="inward">
                          <option>Select Inward</option>
                          {/* Add options here */}
                        </select>
                      </div>
                      <div className="col-12 col-md text-start">
                        <label htmlFor="critical">Is Critical</label>
                        <button type="button" className="pobtn">
                          Search
                        </button>
                      </div>
                     
                    </div>
                  </div>

                  <div className="InwardList-table">
                    <div className="container-fluid mt-4 text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr no.</th>
                              <th>Year</th>
                              <th>Plant</th>
                              <th>Inward No.</th>
                              <th>Inward Date</th>
                              <th>Type</th>
                              <th>Challan No.</th>
                              <th>Challan Date</th>
                              <th>Code</th>
                              <th>Name</th>
                              <th>F4 Out No</th>
                              <th>Item Qty | Desc</th>
                              <th>User</th>
                              <th>Qc</th>
                              <th>Nill</th>
                              <th>Email</th>
                              <th>Edit</th>
                              <th>View</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="InwardList-bottom">
                    <div className="row text-end">
                        <div className="col-md-12">
                            <p>Total Records : 71</p>
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

export default InwardChallanList;
