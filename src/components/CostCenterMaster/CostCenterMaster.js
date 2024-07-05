import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import CachedIcon from "@mui/icons-material/Cached";
import "./CostCenterMaster.css";

const CostCenterMaster = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAddFormsecond, setShowAddFormsecond] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const toggleAddFormsecond = () => {
    setShowAddFormsecond(!showAddFormsecond);
  };

  return (
    <div className="CostcenterMaster">
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
                <div className="CostcenterMaster1">
                  <div className="Costcenter">
                    <div className="container-fluid">
                      <div className="row d-flex align-items-center">
                        <div className="col-md-6 text-start">
                          <h5>Cost Center Master</h5>
                        </div>
                        <div className="col-md-6 text-md-end text-start mt-2 mt-md-0">
                          <button
                            className="Costcenterbtn"
                            onClick={toggleAddForm}
                          >
                            Add New
                          </button>
                          <button className="Costcenterbtn">
                            Export Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="CostcenterMain">
                    <div className="container-fluid">
                      <div className="row text-start centerselect">
                        <div className="col-md-2 col-sm-3 mb-3 mb-sm-0">
                          <label
                            htmlFor="CostcenterName"
                            className="col-form-label"
                          >
                            Cost Center Category:
                          </label>
                        </div>
                        <div className="col-md-3 col-sm-9 mb-3 mb-sm-0">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-md-1 col-sm-12 text-sm-start text-md-start">
                          <button className="Costcentermainbtn">
                            <i className="bi bi-search"></i> Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="CostcenterTable">
                    <div className="container-fluid">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="table-primary">
                            <tr>
                              <th scope="col">Sr.</th>
                              <th scope="col">Cost Center Code</th>
                              <th scope="col">Description</th>
                              <th scope="col">Category</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="record-count text-start"
                    style={{ color: "blue", padding: "10px" }}
                  >
                    Total Records: 00
                  </div>
                  {showAddForm && (
                    <div className="costtype-overlay">
                      <div className="new-card">
                        <div className="row">
                          <div className="col-md-10 text-start">
                            <h5 className="card-title">Add New Cost Center</h5>
                          </div>
                          <div className="col-md-2 text-end">
                            <button
                              className="card-btn"
                              onClick={toggleAddForm}
                            >
                              X
                            </button>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row text-start">
                            <div className="col-md-4">
                              <label
                                htmlFor="inputEmail3"
                                className="col-sm-4 col-form-label"
                              >
                                Company Code:
                              </label>
                              <div className="row mb-3">
                                <div className="col-sm-3">
                                  <select
                                    id="inputState"
                                    className="form-select"
                                  >
                                    <option selected style={{ color: "black" }}>
                                      Select ..
                                    </option>
                                    <option>Store</option>
                                    <option>Maintenance</option>
                                  </select>
                                </div>
                                <div className="col-sm-6">
                                  <button
                                    className="card-btn1"
                                    onClick={toggleAddFormsecond}
                                  >
                                    New
                                  </button>
                                </div>
                                <div className="col-sm-3">
                                  <button className="card-btn2">
                                    <CachedIcon />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <label
                                htmlFor="inputEmail3"
                                className="col-sm-4 col-form-label"
                              >
                                Cost Center Code:
                              </label>
                              <div className="row mb-3">
                                <div className="col-sm-5">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <label
                                htmlFor="inputEmail3"
                                className="col-sm-6 col-form-label"
                              >
                                Cost Center Desc:
                              </label>
                              <div className="row mb-3">
                                <div className="col-sm-12">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-1 col-sm-12 text-sm-start text-md-start">
                              <button
                                className="Costcentermainbtn"
                                style={{ marginTop: "30px" }}
                              >
                                Save
                              </button>
                            </div>
                          </div>
                          <div className="CostaddnewTable">
                            <div className="container-fluid">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead className="table-primary">
                                    <tr>
                                      <th scope="col">No Data Found!!!</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {showAddFormsecond && (
                    <div className="costtype2-overlay">
                      <div className="new-card">
                        <div className="row">
                          <div className="col-md-10 text-start">
                            <h5 className="card-title">Add New Cost Center</h5>
                          </div>
                          <div className="col-md-2 text-end">
                            <button
                              className="card-btn"
                              onClick={toggleAddForm}
                            >
                              X
                            </button>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row text-start">
                            <div className="col-md-4">
                              <label
                                htmlFor="inputEmail3"
                                className="col-sm-4 col-form-label"
                              >
                                Company Code:
                              </label>
                              <div className="row mb-3">
                                <div className="col-sm-3">
                                  <select
                                    id="inputState"
                                    className="form-select"
                                  >
                                    <option selected style={{ color: "black" }}>
                                      Select ..
                                    </option>
                                    <option>Store</option>
                                    <option>Maintenance</option>
                                  </select>
                                </div>
                                <div className="col-sm-2">
                                  <button
                                    className="card-btn1"
                                    onClick={toggleAddFormsecond}
                                  >
                                    New
                                  </button>
                                </div>
                                <div className="col-sm-1">
                                  <button className="card-btn2">
                                    <CachedIcon />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <label
                                htmlFor="inputEmail3"
                                className="col-sm-4 col-form-label"
                              >
                                Cost Center Code:
                              </label>
                              <div className="row mb-3">
                                <div className="col-sm-5">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <label
                                htmlFor="inputEmail3"
                                className="col-sm-6 col-form-label"
                              >
                                Cost Center Desc:
                              </label>
                              <div className="row mb-3">
                                <div className="col-sm-12">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-1 col-sm-12 text-sm-start text-md-start">
                              <button
                                className="Costcentermainbtn"
                                style={{ marginTop: "30px" }}
                              >
                                Save
                              </button>
                            </div>
                          </div>
                          <div className="CostaddnewTable">
                            <div className="container-fluid">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead className="table-primary">
                                    <tr>
                                      <th scope="col">No Data Found!!!</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCenterMaster;
