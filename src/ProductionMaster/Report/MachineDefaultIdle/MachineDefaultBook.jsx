import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./MachineDefaultIdle.css";


const MachineDefaultBook = () =>  { const [sideNavOpen, setSideNavOpen] = useState(false);

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
                        <h5 className="header-title">Machine Idle Time Booking</h5>
                      </div>
                      
                    </div>
                  </div>
  
                  <div className="PRoWorkorderList-Main">
                    <div className="container-fluid">
                      <div className="row text-start">
                        
                        {/* From Date */}
                        <div className="col-sm-6 col-md-2 col-lg-2">
                          <label>Date:</label>
                          <input type="date" className="form-control" />
                        </div>
  
                        {/* Shift */}
                        <div className="col-sm-6 col-md-2 col-lg-2">
                          <label>Shift :</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
  
                        {/* Group */}
                        <div className="col-sm-6 col-md-2 col-lg-2">
                          <label>Group:</label> 
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
  
                        {/* Unit Machine */}
                        <div className="col-sm-6 col-md-2 col-lg-2">
                          <label>Unit Machine :</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
  
                        {/* Type */}
                        <div className="col-sm-6 col-md-2 col-lg-2">
                          <label>Type :</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-1" style={{marginTop:"22px"}} >
                        <button type="button" className="vndrbtn btn-primary w-100" >
                            Search
                        </button>   
                        </div>
                     </div>
                    </div>
                  </div>

                  
                  <div className="PRoWorkorderList-Main mt-10">
                      <div className="row text-start">
                        {/* Type */}
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <label>Default BreackDown Reason :</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-1" style={{marginTop:"22px"}} >
                        <button type="button" className="vndrbtn btn-primary w-100" >
                            Set Reason
                        </button>   
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


export default MachineDefaultBook