import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./ReworkPRoductionEntry.css";

const ReworkProductionEntry = () => {
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
    <div className="ReworkProductionEntryMaster">
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
                <div className="ReworkProductionEntry mt-5">
                  <div className="ReworkProductionEntry-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">Rework Production</h5>
                      </div>
                      <div className="col-md-1">
                        <select><option>SHARP</option></select>
                      </div>
                      <div className="col-md-1">
                       <label>Series</label>
                      </div>
                      <div className="col-md-1">
                        <select><option>Select</option></select>
                      </div>
                      <div className="col-md-6 text-end">
                       
                      </div>

                    </div>
                  </div>
                  <div className="ReworkProductionEntry-content">
                    <div className="tabs">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#prod-details"
                            data-bs-toggle="tab"
                          >
                            Prod Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#consumption-details"
                            data-bs-toggle="tab"
                          >
                            Consumption Details
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content" style={{border:"none"}}>
                      <div
                        className="tab-pane fade show active"
                        id="prod-details"
                      >
                        <div className="ReworkProductionEntry-first">
                          <form>
                            <div className="row mb-3  text-start">
                              <div className="col-md-4">
                                <label>Rework No:</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label>Rework Date:</label>
                                <input type="date" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label>Rework Time:</label>
                                <input type="time" className="form-control" />
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <div className="col-md-4">
                                <label>Machine:</label>
                                <select className="form-select">
                                  <option>Select Machine</option>
                                  <option>Machine 1</option>
                                  <option>Machine 2</option>
                                </select>
                              </div>
                              <div className="col-md-4">
                                <label>Work Order:</label>
                                <input type="text" className="form-control"/>
                              </div>
                              <div className="col-md-4">
                                <label>Item Code:</label>
                                <input type="text" className="form-control"/>
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <div className="col-md-4">
                                <label>Part Code:</label>
                                <select className="form-select">
                                  <option>Select</option>
                                  <option>Machine 1</option>
                                  <option>Machine 2</option>
                                </select>
                              </div>
                              <div className="col-md-4">
                                <label>Heat Code:</label>
                                <input type="text" className="form-control"/>
                              </div>
                              <div className="col-md-4">
                                <label>Rework to Ok:</label>
                                <input type="text" className="form-control"/>
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <div className="col-md-4">
                                <label>Reject to Ok:</label>
                                <select className="form-select">
                                  <option>Select</option>
                                  <option>Machine 1</option>
                                  <option>Machine 2</option>
                                </select>
                              </div>
                              <div className="col-md-4">
                                <label>Change FG:</label>
                                <input type="text" className="form-control"/>
                              </div>
                              <div className="col-md-2 mt-4">
                               <button type="button" className="btn btn-primary">Add</button>
                              </div>
                            </div>
                          </form>
                          <div className="ReworkProductionEntry-table-section">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Sr.</th>
                                  <th>Item Desc</th>
                                  <th>Heat Code</th>
                                  <th>Rework to OK Qty</th>
                                  <th>Reject to OK Qty</th>
                                  <th>Rework to OK Qty</th>
                                  <th>Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Item 1</td>
                                  <td>H001</td>
                                  <td>50</td>
                                  <td>50</td>

                                  <td>5</td>
                                  <td>
                                    <button className="btn btn-danger btn-sm">
                                      X
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="ReworkProductionEntry-table-second">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Reason For Rework:</th>
                                  <th>Quality Remark:</th>
                                  <th>Operator:</th>
                                  <th>Add</th>
                                  <th>Delete</th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Item 1</td>
                                  <td>H001</td>
                                  

                                  <td>
                                    <button className="btn btn-sm">
                                      +
                                    </button>
                                  </td>
                                  <td>
                                    <button className="btn btn-sm">
                                      X
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="row">
                          <div className="col-md-2 text-end">
                          <button className="btn btn-primary">
                                      Save
                                    </button>
                          </div>
                                   
                                 
                          </div>

                        </div>
                      </div>

                      <div className="tab-pane fade" id="consumption-details">
                      <div className="ReworkProductionEntry-second">
                          <form>
                            <div className="row mb-3  text-start">
                              <div className="col-md-2">
                                <label>Item:</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-2">
                                <label>Stock:</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-2">
                                <label>Qty:</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-2 mt-4">
                               <button type="button" className="btn btn-primary">Add</button>
                              </div>
                            </div>

                            

                          </form>
                          <div className="ReworkProductionEntry-second">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Sr.</th>
                                  <th>Item Desc</th>
                                  <th>Heat Code</th>
                                  <th>Qty</th>
                                
                                  <th>Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Item 1</td>
                                  <td>H001</td>
                                

                                  <td>5</td>
                                  <td>
                                    <button className="btn btn-danger btn-sm">
                                      X
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        
                          <div className="row">
                          <div className="col-md-2 text-end">
                          <button className="btn btn-primary">
                                      Save
                                    </button>
                          </div>
                                   
                                 
                          </div>

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
  );
};

export default ReworkProductionEntry;
