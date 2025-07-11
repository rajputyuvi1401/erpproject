import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./Qcisoformat.css";

const Qcisoformat = () => {
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
    <div className="QcisoFormat">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="Qciso">
                  <div className="QcisoFormat-header mb-2">
                    <div className="row text-start">
                      <div className="col-md-10">
                        <h5 className="header-title">QC ISO Format Setting Master</h5>
                      </div>
                      <div className="col-md-2 text-end">
                        <button type="button" className="vndrbtn ">
                          Company Info
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="QcisoFormatmain">
                    <div className="row text-start">
                      <div className="col-md-2">
                        <p className="header-title text-primary">#QC ISO Format</p>
                      </div>
                      <div className="col-md-2 d-flex align-items-center">
                        <input type="checkbox" className="me-2" />
                        <label>Search Module</label>
                      </div>
    
                      <div className="col-md-2">
                        <input type="text" className="form-control" placeholder="Search..." />
                      </div>
                      <div className="col-md-6">
                        <button className="vndrbtn">Search</button>
                      </div>
                    </div>
                  </div>

                  <div className="QcisoFormattable mt-2">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Sr.</th>
                            <th>Module Name</th>
                            <th>Format No</th>
                            <th>Rev No</th>
                            <th>Rev Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>GRN QC</td>
                            <td><input type="text" className="form-control" /></td>
                            <td><input type="text" className="form-control" /></td>
                            <td><input type="date" className="form-control" /></td>
                            <td>+</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>INWARD QC</td>
                            <td><input type="text" className="form-control" /></td>
                            <td><input type="text" className="form-control" /></td>
                            <td><input type="date" className="form-control" /></td>
                            <td>+</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>INPROCESS QC</td>
                            <td><input type="text" className="form-control" /></td>
                            <td><input type="text" className="form-control" /></td>
                            <td><input type="date" className="form-control" /></td>
                            <td>+</td>
                          </tr>
                          {/* Add more rows as needed */}
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

export default Qcisoformat;
