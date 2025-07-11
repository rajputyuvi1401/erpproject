import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./UserPermission.css";
import { Link } from "react-router-dom";


const UserPermission = () => {
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
    <div className="UserPermission">
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
                <div className="Permission">
                  <div className="UserPermission-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title text-start">
                          Parameter Setting
                        </h5>
                      </div>
                      <div className="col-md-10 text-end">
                        <Link className="vndrbtn btn-outline-secondary" to="/SettingHistory">
                          Setting History
                        </Link>
                        <Link className="vndrbtn btn-outline-secondary" to="/">
                          Company Info PDF
                        </Link>
                        <Link className="vndrbtn btn-outline-secondary">
                          Export Excel
                        </Link>
                        <Link className="vndrbtn btn-outline-secondary" to="/Companysetup">
                          Company Info
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="row text-start">
                    <div className="col-md-2 mt-2">

                      <div className="UserPermissionmain">

                        <h6 className="header-title text-start">Select Module</h6>

                        <div className="form-check mt-2">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">Master</label>
                        </div>
                        <div className="form-check mb-2">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">CRM</label>
                        </div>
                        <div className="form-check mb-2">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">Store</label>
                        </div>
                        <div className="form-check mb-2">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">Purchase</label>
                        </div>
                        <div className="form-check mb-2">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">Production</label>
                        </div>
                        <div className="form-check mb-2">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">Subcron</label>
                        </div>
                        <div className="form-check mb-2">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">Planning</label>
                        </div>

                      </div>

                    </div>

                    <div className="col-md-10 mt-2">

                      <div className="UserPermissionmain">
                        <div className="header-section">
                          <div className="row align-items-start">
                            <div className="col-md-2" style={{ marginTop: "6px" }}>
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />{" "}
                                Purchase
                              </label>
                            </div>
                            <div className="col-md-2">
                              <label className="form-check-label" style={{ marginTop: "6px" }}>
                                Setting Name:
                              </label>
                            </div>
                            <div className="col-md-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="User Name Like"
                              />
                            </div>
                            <div className="col-md-2">
                              <button className="vndrbtn btn-primary" style={{ marginTop: "4px" }}>Search</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="UserPermissiontable mt-2">
                        <div className="row text-start">
                          <div className="col-md-6 mt-2">
                            <table className="parameter-table table table-striped">
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
                                  <td>Allow Generate PO From Indent Only</td>
                                  <td>
                                    <select className="form-select">
                                      <option>NO</option>
                                      <option>YES</option>
                                    </select>
                                  </td>
                                  <td>
                                    <button className="vndrbtn btn-success">
                                      Update
                                    </button>
                                  </td>
                                </tr>

                                <tr>
                                  <td>2</td>
                                  <td>Allow PO Edit After Approval</td>
                                  <td>
                                    <select className="form-select">
                                      <option>NO</option>
                                      <option>YES</option>
                                    </select>
                                  </td>
                                  <td>
                                    <button className="vndrbtn btn-success">
                                      Update
                                    </button>
                                  </td>
                                </tr>

                                <tr>
                                  <td>3</td>
                                  <td>Allow View PO Without Authorization</td>
                                  <td>
                                    <select className="form-select">
                                      <option>NO</option>
                                      <option>YES</option>
                                    </select>
                                  </td>
                                  <td>
                                    <button className="vndrbtn btn-success">
                                      Update
                                    </button>
                                  </td>
                                </tr>
                                {/* Add more rows as needed */}
                              </tbody>
                            </table>
                          </div>

                          <div className="col-md-6 mt-2">
                            <table className="parameter-table table table-striped">
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
                                  <td>Allow Generate PO From Indent Only</td>
                                  <td>
                                    <textarea name="" className="form-control" id=""></textarea>

                                  </td>
                                  <td>
                                    <button className="vndrbtn btn-success">
                                      Update
                                    </button>
                                  </td>
                                </tr>

                                <tr>
                                  <td>2</td>
                                  <td>Allow PO Edit After Approval</td>
                                  <td>
                                    <textarea name="" className="form-control" id=""></textarea>

                                  </td>
                                  <td>
                                    <button className="vndrbtn btn-success">
                                      Update
                                    </button>
                                  </td>
                                </tr>

                                <tr>
                                  <td>3</td>
                                  <td>Allow View PO Without Authorization</td>
                                  <td>
                                    <textarea name="" className="form-control" id=""></textarea>
                                  </td>
                                  <td>
                                    <button className="vndrbtn btn-success">
                                      Update
                                    </button>
                                  </td>
                                </tr>
                                {/* Add more rows as needed */}
                              </tbody>
                            </table>
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

export default UserPermission;
