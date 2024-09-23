import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";

import "./Newindent.css";
import { Link } from "react-router-dom";
const Newindent = () => {
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
    <div className="NewStoreNewIndent">
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
                <div className="NewIndent-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">New Indent</h5>
                    </div>

                    <div className="col-md-4 text-end">
                      <div className="row justify-content-end">
                        <div className="col-md-4 d-flex ">
                          <Link className="pobtn" to="/IndentList" >Indent List</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NewIndent-main">
                  <div className="container-fluid text-start">
                    <div className="row mt-4">
                      <div className="col-12 col-md">
                        <label htmlFor="plant">Plant</label>
                        <select className="form-control" id="plant">
                          <option>Sharp</option>
                        </select>
                      </div>

                      <div className="col-12 col-md">
                        <label htmlFor="series">Series</label>
                        <select className="form-control" id="series">
                          <option>Select</option>
                          <option>Puchase Indent</option>
                        </select>
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="IndentNo">Indent No</label>
                        <input
                          type="text"
                          className="form-control"
                          id="IndentNo"
                        />
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="toDate">Date</label>
                        <input type="date" className="fntrol" id="toDate" />
                      </div>
                      <div className="col-12 col-md">
                        <label htmlFor="Time">Time</label>
                        <input type="text" className="form-control" id="Time" />
                      </div>

                      <div className="col-12 col-md">
                        <label htmlFor="inward">Category</label>
                        <select className="form-control" id="inward">
                          <option>Select</option>
                          <option value="All">All</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div
                    className="StoreNewIndent"
                    style={{ marginTop: "50px" }}
                  >
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-Gernal-Detail-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-Gernal-Detail"
                          type="button"
                          role="tab"
                          aria-controls="pills-Gernal-Detail"
                          aria-selected="true"
                        >
                          Item Details
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-Gernal-Detail"
                        role="tabpanel"
                        aria-labelledby="pills-Gernal-Detail-tab"
                        tabindex="0"
                      >
                        <div className="StoreNewIndent text-start">
                          <div className="container-fluid">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Select Item & CPC Code:</th>
                                    <th>Description</th>
                                    <th>Available Stock</th>
                                    <th>Unit</th>
                                    <th>Machine | Department</th>
                                    <th>Qty</th>
                                    <th>Type</th>
                                    <th>Remark</th>
                                    <th>Use For</th>
                                    <th>Mo Ref</th>
                                    <th>Sch Date</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td data-label="Item Code View stock">
                                      <div className="d-flex">
                                        <input
                                          type="text"
                                          name="ItemCode"
                                          className="form-control"
                                        />
                                        <button className="pobtn">
                                          Search
                                        </button>
                                      </div>
                                    </td>
                                    <td data-label="Description">
                                      <textarea
                                        name="Description"
                                        className="form-control"
                                        rows="1"
                                      ></textarea>
                                    </td>
                                    <td>
                                      <input />
                                      <select>
                                        <option></option>
                                      </select>
                                    </td>
                                    <td data-label="Unit">
                                      <select name="Machine">
                                        <option>Select</option>
                                        <option value="L4">PCS</option>
                                        <option value="L5">KGS</option>
                                        <option value="L6">BOX</option>
                                        <option value="L7">LTR</option>
                                      </select>
                                    </td>
                                    <td data-label="Machine">
                                      <select name="Machine">
                                        <option>Select</option>
                                        <option value="L4">L4 | LATHE 4</option>
                                        <option value="L5">L5 | LATHE 5</option>
                                        <option value="L6">L6 | LATHE 6</option>
                                        <option value="L7">L7 | LATHE 7</option>
                                      </select>
                                      <select name="Department">
                                        <option>Select</option>
                                        <option value="Ayush">Ayush</option>
                                        <option value="Production">
                                          Production
                                        </option>
                                        <option value="Purchase">
                                          Purchase
                                        </option>
                                        <option value="Quality">Quality</option>
                                        <option value="Store">Store</option>
                                      </select>
                                    </td>
                                    <td data-label="Qty">
                                      <input type="text" name="Qty" />
                                    </td>

                                    <td data-label="Type">
                                      <select name="Type">
                                        <option>Select</option>
                                        <option value="Critical">
                                          Critical
                                        </option>
                                        <option value="Regular">Regular</option>
                                      </select>
                                    </td>
                                    <td data-label="Remark">
                                      <textarea name="Remark"></textarea>
                                    </td>
                                    <td data-label="Use For">
                                      <textarea name="Use For"></textarea>
                                    </td>
                                    <td data-label="MO Ref">
                                      <textarea name="MO Ref"></textarea>
                                    </td>
                                    <td data-label="Sch.date">
                                      <input
                                        type="date"
                                        className="form-control"
                                      />
                                    </td>

                                    <td data-label="Action">
                                      <button type="submit" className="pobtn">
                                        Add
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="NewIndenttable">
                          <div className="container-fluid mt-4 text-start">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Sr no.</th>
                                    <th>Item No & CPC Code</th>

                                    <th>Description</th>
                                    <th>unit</th>
                                    <th>Machine | Department</th>
                                    <th>Qty</th>
                                    <th>Type</th>
                                    <th>Remark</th>

                                    <th>Use For</th>
                                    <th>Mo Ref</th>
                                    <th>Sch Date</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr></tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="NewIndentFooter">
                          <div className="container-fluid">
                            <div className="row g-3">
                              <div className="col-md-4">
                                <div className="row align-items-center">
                                  <div className="col-4 col-md-4 text-end">
                                    <label>CPC Code:</label>
                                  </div>
                                  <div className="col-8 col-md-8">
                                    <input className="form-control mb-2" />
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="row align-items-center">
                                  <div className="col-4 col-md-4 text-end">
                                    <label>Work Order:</label>
                                  </div>
                                  <div className="col-8 col-md-8">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="row align-items-center">
                                  <div className="col-md-1 text-end">
                                    <label className="form-label">
                                      Remarks:
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <textarea
                                      cols="3"
                                      className="form-control"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2 d-flex justify-content-end align-items-center">
                                <button className="btn w-100">
                                  Save Indent
                                </button>
                              </div>
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

export default Newindent;
