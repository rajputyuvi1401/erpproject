import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import './ProductionReport.css';

const ProductionReport = () => {
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
    <div className="ProductionReportMaster">
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
                <div className="ProductionReport mt-1">
                  <div className="ProductionReport-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">Daily Production Report</h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <button type="button" className="vndrbtn">
                          Production Report
                        </button>
                        <button type="button" className="vndrbtn">
                          Production - Query
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Filter Section */}
                  <div className="ProductionReport-filter">
                    <div className="row text-start">
                      <div className="col-md-2">
                        <label>Plant</label>
                        <select className="form-select">
                          <option value="Produlink">Produlink</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label>From Date</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="col-md-2">
                        <label>To Date</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="col-md-2">
                        <label>Series</label>
                        <select className="form-select">
                          <option value="ALL">ALL</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
            
                      <div className="col-md-2">
                        <label>Shift</label>
                        <select className="form-select">
                          <option value="ALL">ALL</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
                      <div className="col-md-2 mt-4">
                      
                      <button className="vndrbtn">Search</button>
                      
                   
                    </div>
                    </div>              
                  </div>

                  {/* Table Section */}
                  <div className="ProductionReport-Main mt-2">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sr.</th>
                          <th>Year</th>
                          <th>Prod No</th>
                          <th>Prod Date</th>
                          <th>Sup & Cont</th>
                          <th>Machine</th>
                          <th>Shift</th>
                          <th>Item Desc</th>
                          <th>Op</th>
                          <th>Part Code</th>
                          <th>QC</th>
                          <th>Prod Qty</th>
                          <th>Rework</th>
                          <th>Reject</th>
                          <th>Ok Qty</th>
                          <th>G.W.</th>
                          <th>Total Wt.</th>
                          <th>H/C</th>
                          <th>R. Time</th>
                          <th>User</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Example Row */}
                        <tr>
                          <td>1</td>
                          <td>24-25</td>
                          <td>DP2425253 47</td>
                          <td>20/09/2024</td>
                          <td>NEW Quality Control</td>
                          <td>Visual1</td>
                          <td>FIRST BHRS.</td>
                          <td>FG1021</td>
                          <td>CHECKING</td>
                          <td>CFG1021</td>
                          <td>6149</td>
                          <td>0</td>
                          <td>0</td>
                          <td>6149</td>
                          <td>0.13</td>
                          <td>796.91</td>
                          <td>4</td>
                          <td>08:00</td>
                          <td>Togre</td>
                          <td>
                            <button className="vndrbtn">
                              <i className="fas fa-eye"></i>
                            </button>
                          </td>
                        </tr>
                        {/* Additional rows can be added dynamically here */}
                      </tbody>
                    </table>
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

export default ProductionReport;
