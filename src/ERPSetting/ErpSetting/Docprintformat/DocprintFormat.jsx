import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import './DocprintFormat.css';
import { Link } from "react-router-dom";

const DocprintFormat = () => {
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
   <div className="DocPrintFormat">
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
                <div className="DocPrint">
                  <div className="DocprintFormat-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="header-title">
                          Document Series / Group
                        </h5>
                      </div>
                      <div className="col-md-6 text-end">

                        <Link  type="button" to="/DocCompanySetting" className="vndrbtn"> Setting History </Link>

                          <button  type="button" className="vndrbtn"> Print Company Info </button>

                        <Link type="button" className="vndrbtn" to="/Companysetup"> Company Info  </Link>

                      </div>
                    </div>
                  </div>

                  <div className="DocprintFormatmain filter-section mb-2 p-4">
                    <div className="row text-start">
                      <div className="col-md-2">
                        <label>Select Module</label>
                        <input type="text" className="form-control" placeholder="Module Name" />
                      </div>
                      <div className="col-md-2">
                        <label>Print Format Setting</label>
                        <select className="form-control" style={{marginTop:"-1px"}}>
                          <option value="">Select Setting</option>
                          <option>Setting 1</option>
                          <option>Setting 2</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label>Setting Name</label>
                        <input type="text" className="form-control" placeholder="Setting Name" />
                      </div>
                     
                      <div className="col-md-2 mt-4">
                      <button type="button" className="vndrbtn">Search</button>
                        <button type="button" className="vndrbtn">View All</button>
                      </div>

                    </div>
                  </div>

                  <div className="DocprintFormattable mt-2 table-section">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Sr.</th>
                            <th>Setting Name</th>
                            <th>Value</th>
                            <th>Update</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Allow to View & Print Tag from Material Return</td>
                            <td>
                              <select className="form-control">
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </td>
                            <td>
                              <button className="vndrbtn btn-primary btn-sm">Update</button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>QC Tag Print</td>
                            <td>
                              <select className="form-control">
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </td>
                            <td>
                              <button className="vndrbtn btn-primary btn-sm">Update</button>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>RM Opening Stock Tag Print</td>
                            <td>
                              <select className="form-control">
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </td>
                            <td>
                              <button className="vndrbtn btn-primary btn-sm">Update</button>
                            </td>
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
  )
}

export default DocprintFormat;
