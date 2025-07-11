import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./MachineDefaultIdle.css";
import { Link } from "react-router-dom";


const MachineDefaultIdle = () => { const [sideNavOpen, setSideNavOpen] = useState(false);

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
      <div className="PRoWorkorderListMaster">
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
                <div className="PRoWorkorderList">
                  <div className="PRoWorkorderList-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">Machine Default Idle</h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <Link type="button" className="vndrbtn" to="/MachineDefaultBook">
                           Book To Idle
                        </Link>
                        
                      </div>
                    </div>
                  </div>
  
                  <div className="PRoWorkorderList-Main">
                    <div className="container-fluid">
                      <div className="row g-3 text-start">
                        
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
  
                        {/* Shift */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Shift :</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
  
                        {/* Group */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Group:</label> 
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
  
                        {/* Unit Machine */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Unit Machine :</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
  
                        {/* Type */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Type :</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
  
                        <div className="col-sm-6 col-md-3 col-lg-2">
                            <label htmlFor="">Show Prod Idle</label>
                            <input className="form-control" checked />
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-1">
                        <button type="button" className="vndrbtn w-100" style={{marginTop:"22px"}} >
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

export default MachineDefaultIdle