import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import './RewokReport.css';
const ReworkReport = () => { const [sideNavOpen, setSideNavOpen] = useState(false);

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
      <div className="ReworkReportMaster">
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
                <div className="ReworkReport">
                  <div className="ReworkReport-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">Process Defect - Rewok Report</h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <button type="button" className="vndrbtn" to="/AddQuater">
                          Process Defect Rework
                        </button>
                        <button type="button" className="vndrbtn" to="#/">
                          Print Format
                        </button>
                        <button type="button" className="vndrbtn" to="#/">
                          Print Format 2
                        </button>
                      </div>
                    </div>
                  </div>
  
                  <div className="ReworkReport-Main">
                    <div className="container-fluid">
                      <div className="row g-3 text-start">
                        
                        {/* From Date */}
                        <div className="col-sm-6 col-md-3 col-lg-3">
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>
  
                        {/* To Date */}
                        <div className="col-sm-6 col-md-3 col-lg-3">
                          <label>To Date:</label>
                          <input type="date" className="form-control" />
                        </div>
  
                        {/* Months Wise */}
                        <div className="col-sm-6 col-md-3 col-lg-3">
                          <label>Months Wise :</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
  
                        {/* Operator Wise */}
                        <div className="col-sm-6 col-md-3 col-lg-3">
                          <label>Operator Wise:</label>
                          <input type="text" className="form-control"/>
                        </div>
  
                        {/* Reason Wise */}
                        <div className="col-sm-6 col-md-3 col-lg-3">
                          <label>Reason Wise:</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
  
                        {/* Item Wise */}
                        <div className="col-sm-6 col-md-2 col-lg-3">
                          <label>Item Wise:</label>
                          <input type="text" className="form-control" />
                        </div>
  
                        <div className="col-sm-2">
                        <button type="button" className="vndrbtn" style={{marginTop:"22px"}} >
                            Search
                        </button>   
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
    )
  }

export default ReworkReport