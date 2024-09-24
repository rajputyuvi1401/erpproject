import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./WorkOrderEntry.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const WorkOrderEntry = () => {
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
    <div className="ProductionWorkOrderEntry">
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
                <div className="WorkOrderEntry-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">
                        New Work Order
                      </h5>
                    </div>
                    <div className="col-md-4 mt-4">
                      <div className="row mb-3">
                        <div className="col-md-2">
                          <label htmlFor="seriesSelect" className="form-label">
                            Plant:
                          </label>
                        </div>
                        <div className="col-md-3">
                          <select id="sharpSelect" className="form-select">
                            <option selected>Sharp</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 text-end">
                      <div className="row justify-content-end">
                        <div className="col-md-3 d-flex align-items-center">
                          <button className="pobtn">WorkOrder List</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="WorkOrderEntry-main">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4 text-start">
                        <div className="container-fluid">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <tbody>
                                <tr>
                                  <th className="col-md-4">WO Series:</th>
                                  <td>
                                    <select>
                                      <option>Select</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <th>WO Type:</th>
                                  <td>
                                    <select>
                                      <option>Select</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <th>Schedule Month:</th>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="InwardTime"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th>WO No:</th>
                                  <td>
                                    <div className="d-flex">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="ChallanNo"
                                    />
                                    
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="ChallanNo"
                                      />
                                    </div>
                                  
                                    
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-start">
                        {/* Second Column Group */}
                        <div className="container">
                          <div className="table-responsive text-start">
                            <table className="table table-bordered">
                              <tbody>
                                <tr>
                                  <th className="col-md-4">WO Date:</th>
                                  <td>
                                    <input
                                      type="date"
                                      className="form-control"
                                      name="DcDate"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th>Schedule/Target Date:</th>
                                  <td>
                                    <input
                                      type="date"
                                      className="form-control"
                                      name="DcDate"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th>Select Cust:</th>
                                  <td>
                                  <div className="d-flex">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="EWayBillNo"
                                    />
                                   
                                      <button type="button" className="pobtn">
                                        Search
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th>Select PO:</th>
                                  <td>
                                  <div className="d-flex">
                                    <select>
                                      <option>Select</option>
                                    </select>
                                   
                                      <button type="button" className="pobtn">
                                        Add All Item
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-start">
                        {/* Third Column Group */}
                        <div className="container">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <tbody>
                                <tr>
                                  <th>Select Item:</th>
                                  <td>
                                  <div className="d-flex">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="LrNo"
                                    />
                                    
                                      <button type="button" className="pobtn">
                                        Add
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <button type="button" className="pobtn">
                                    Pending CustPO For WorkOrder
                                  </button>
                                </tr>
                                <tr>
                                  <button type="button" className="pobtn">
                                    Production From Existing Stock
                                  </button>
                                </tr>
                                <tr></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="WorkOrderEntry-table">
                    <div className="container-fluid  text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr no.</th>
                              <th>PO Details</th>
                              <th>Item No</th>
                              <th>Description</th>
                              <th>SO.Qty/Sch. Qty</th>
                              <th>Bal. Qty</th>
                              <th>Work Order Qty</th>
                              <th>Remark</th>
                              <th>Machine</th>
                              <th>Shift</th>
                              <th>Process</th>
                              <th>Raw Material</th>
                              <th>BOM</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Enter Item Code"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Enter Operation"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Enter Challan Qty"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Enter GRN Qty"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Material Rate"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Heat No"
                                />
                              </td>
                              
                              <td>
                                <textarea
                                  className="form-control p-2"
                                  rows="2"
                                  placeholder="Nature Of Process"
                                ></textarea>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="HC"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="HC"
                                />
                              </td>
                              
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="HC"
                                />
                              </td>
                              
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="HC"
                                />
                              </td>
                              <td>
                              <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="HC"
                                />
                              </td>
                              <td>
                                <FaEdit />
                              </td>
                              <td>
                                <FaTrash />
                              </td>
                            </tr>
                            {/* Add more rows dynamically as needed */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row text-end">
                        <div className="col-md-12 text-end">
                            <button className="pobtn" type="submit">Save Work Order</button>
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

export default WorkOrderEntry;
