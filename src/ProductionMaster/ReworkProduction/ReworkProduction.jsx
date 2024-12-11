import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./ReworkProduction.css";

const ReworkProduction = () => {
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
    <div className="ReworkProductionMaster">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="ReworkProduction mt-5">
                  <div className="ReworkProduction-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="header-title">Rework Production</h5>
                      </div>
                     
                    </div>
                  </div>

                  {/* Form Section */}
                  <div className="ReworkProduction-Main">
                    <form className="form-section">
                      <div className="row text-start">
                        <div className="col-md-3">
                          <label>Rework No:</label>
                          <input type="text" className="form-control" placeholder="232400526" />
                        </div>
                        <div className="col-md-3">
                          <label>Rework Date:</label>
                          <input type="datetime-local" className="form-control" />
                        </div>
                        <div className="col-md-3">
                          <label>Shift:</label>
                          <select className="form-control">
                            <option>Select</option>
                          </select>
                        </div>
                        
                      </div>

                      <div className="row mt-3 text-start">
                        <div className="col-md-3">
                          <label>Contractor:</label>
                          <select className="form-control">
                            <option>Select</option>
                          </select>
                        </div>
                        <div className="col-md-3">
                          <label>Supervisor:</label>
                          <input type="text" className="form-control" placeholder="Supervisor Name" />
                        </div>
                        <div className="col-md-3">
                          <label>Operator:</label>
                          <input type="text" className="form-control" placeholder="Supervisor Name" />
                        </div>

                      </div>

                      <div className="row mt-3 text-start">
                        <div className="col-md-3">
                          <label>Item Code:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-3">
                          <label>Part Code:</label>
                          <select className="form-control">
                            <option>Select</option>
                          </select>
                        </div>
                        <div className="col-md-3">
                          <label>Heat No:</label>
                          <select className="form-control">
                            <option>Select</option>
                          </select>
                        </div>
                        </div>

                        <div className="row mt-3 text-start">

                        <div className="col-md-3">
                          <label>Unit / Machine:</label>
                          <select className="form-control">
                            <option>Select</option>
                          </select>
                        </div>
                        <div className="col-md-3">
                          <label>Prod Time:</label>
                          <input type="time" className="form-control" />
                        </div>
                        <div className="col-md-3">
                          <label>Rework To Ok:</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </form>

                    {/* Table Section */}
                    <div className="table-section mt-4">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Idle Reason</th>
                            <th>From Time</th>
                            <th>To Time</th>
                            <th>Total Time</th>
                            <th>Supervisor/Operator</th>
                            <th>Setting Part</th>
                            <th>Remark</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="text" className="form-control" placeholder="Reason" />
                            </td>
                            <td>
                              <input type="time" className="form-control" />
                            </td>
                            <td>
                              <input type="time" className="form-control" />
                            </td>
                            <td>
                              <input type="text" className="form-control" placeholder="00:00" />
                            </td>
                            <td>
                              <input type="text" className="form-control" placeholder="Operator Name" />
                            </td>
                            <td>
                              <input type="text" className="form-control" placeholder="Setting Part" />
                            </td>
                            <td>
                              <input type="text" className="form-control" placeholder="Remark" />
                            </td>
                            <td>
                              <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    </div>


                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Shift</th>
                            <th>Break</th>
                            <th>Total</th>
                            <th>Cycle Time</th>
                            <th>Target Quantity</th>
                            <th>Reason For Rework</th>
                           
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="text" className="form-control" placeholder="Reason" />
                            </td>
                            <td>
                              <input type="time" className="form-control" />
                            </td>
                            <td>
                              <input type="time" className="form-control" />
                            </td>
                            <td>
                              <input type="text" className="form-control" placeholder="00:00" />
                            </td>
                            <td>
                              <input type="text" className="form-control" placeholder="Operator Name" />
                            </td>
                            <td>
                              <input type="text" className="form-control" placeholder="Setting Part" />
                            </td>
                            
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="form-actions text-end mt-4">
                      <button className="btn">Save</button>
                      <button className="btn">Cancel</button>
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

export default ReworkProduction;
