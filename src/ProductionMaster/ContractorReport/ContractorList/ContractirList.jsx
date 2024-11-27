import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import './ContractirList.css';
import { Link } from "react-router-dom";


const ContractirList = () => {
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
    <div className="ContractorListMaster">
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
                <div className="ContractorList mt-5">
                  <div className="ContractorList-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4 col-12 mb-2 mb-md-0">
                        <h5 className="header-title">Contractor Production Entry</h5>
                      </div>
                      <div className="col-md-8 col-12 text-end">
                        <div className="d-flex justify-content-end gap-2 flex-wrap">
                         
                        
                          <button type="button" className="btn">
                            Itemwise Rate
                          </button>
                          <button type="button" className="btn">
                            Machinewise Rate
                          </button>
                          <Link type="button" className="btn" to="/ContractorReport">
                            Contractor List
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ContractorList-Main">
                  
              <form className="form-section">
                <div className="row mb-3 text-start">
                  <div className="col-md-2">
                    <label>Date:</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-2">
                    <label>Machine:</label>
                    <select className="form-control">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label>Job No:</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="col-md-2">
                    <label>Shift:</label>
                    <select className="form-control">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label>Item Name:</label>
                    <input type="text" className="form-control" />
                  </div>
                 
                </div>

                <div className="row mb-3 text-start">
                 
                  <div className="col-md-2">
                    <label>Total Production Qty:</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="col-md-2">
                    <label>Item Rate:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-2">
                    <label>Production Hours (HH:MM):</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-2">
                    <label>Shift Target Qty:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-2">
                    <label>Total Breakdown Hours:</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="row mb-3 text-start">
                <div className="col-md-2">
                    <label>MAchine Rate (Per Hr):</label>
                    <input type="text" className="form-control" />
                  </div> 
                  <div className="col-md-2">
                    <label>Contractor Name:</label>
                    <select className="form-control">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label>Downtime Reason:</label>
                    <select className="form-control">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label>Note:</label>
                    <textarea className="form-control"></textarea>
                  </div>
                  <div className="col-md-2 mt-2">
                  <div className="button-section mt-4 text-end">
                  <button className="btn ">Save</button>
                  <button className="btn ">Clear</button>
                </div>
                  </div>
                </div>

               
              </form>
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

export default ContractirList
