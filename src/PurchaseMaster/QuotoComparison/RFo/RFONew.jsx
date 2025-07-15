import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./Rfo.css";
import { Link } from "react-router-dom";
const RFONew = () => {

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
    <div className="RFOMaster">
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
                <div className="RFO-header  text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title">
                        Request For Quotation (RFO)
                      </h5>
                    </div>
                    <div className="col-md-8 text-end">
                      <Link to={"/Rfo"} className="vndrbtn">RFO List</Link>
                    </div>
                  </div>
                </div>

                <div className="RFO-main mt-3">
                  <div className="container-fluid">
                    <div className="mb-3 text-start">
                      {/* Customer Type */}
                      <div className="row mt-3">
                        {/* First Option */}
                        <div className="col-md-2">
                          <div className="d-flex align-items-center">
                            <input type="radio" id="userQuery" name="queryType" className="me-2" />
                            <label htmlFor="userQuery" className="form-label mb-0">For Single:</label>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="d-flex align-items-center">
                            <input type="radio" id="erpQuery" name="queryType" className="me-2" />
                            <label htmlFor="erpQuery" className="form-label mb-0">Against Enquery:</label>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-md-2">
                          <label htmlFor="custName" className="form-label"> RFQ No:</label>
                        </div>
                        <div className="col-md-2">
                          <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-2">
                          <label htmlFor="custName" className="form-label"> To :</label>
                        </div>
                        <div className="col-md-2">
                          <input type="date" className="form-control" />
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-md-2 d-flex align-items-center gap-2">
                          <label htmlFor="cityName" className="form-label">Item:</label>

                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="queryType" id="itemNew" />
                            <label className="form-check-label" htmlFor="itemNew">New</label>
                          </div>

                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="queryType" id="itemExisting" />
                            <label className="form-check-label" htmlFor="itemExisting">Existing</label>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <input type="text" placeholder="Item No" className="form-control" />
                        </div>

                        <div className="col-md-2">
                          <label htmlFor="cityName" className="form-label">Indent No :</label>
                        </div>
                        <div className="col-md-2">
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-md-2">
                          <label htmlFor="cityName" className="form-label">Qty :</label>
                        </div>
                        <div className="col-md-2">
                          <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-2">
                          <label htmlFor="cityName" className="form-label">Unit :</label>
                        </div>
                        <div className="col-md-2">
                          <select className="form-select">
                            <option>Select</option>
                            <option>Select</option>
                          </select>
                        </div>

                        <div className="col-md-2">
                          <label htmlFor="cityName" className="form-label">Expected Date :</label>
                        </div>
                        <div className="col-md-2">
                          <input type="date" className="form-control" />
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-md-2">
                          <label htmlFor="cityName" className="form-label">Delivery Location :</label>
                        </div>
                        <div className="col-md-2">
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-md-2">
                          <label htmlFor="status" className="form-label">Our Payment Term:</label>
                        </div>
                        <div className="col-md-2">
                          <textarea name="" className="form-control" id=""></textarea>
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="status" className="form-label">Quality Guarantee/ Warranty Terms:</label>
                        </div>
                        <div className="col-md-2">
                          <textarea name="" className="form-control" id=""></textarea>
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-md-2">
                          <label htmlFor="status" className="form-label">Delivary Schedule:</label>
                        </div>
                        <div className="col-md-2">
                          <textarea name="" className="form-control" id=""></textarea>
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="status" className="form-label">Remark Details:</label>
                        </div>
                        <div className="col-md-2">
                          <textarea name="" className="form-control" id=""></textarea>
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-md-2">
                          <label htmlFor="status" className="form-label"> Project Name:</label>
                        </div>
                        <div className="col-md-2">
                          <select className="form-select" id="status">
                            <option value="">Select</option>
                            <option value="active">Active</option>
                          </select>
                        </div>
                      </div>

                      {/* Query Type with Radio + Select */}



                      {/* Execute Button */}
                      <div className="row mt-3">
                        <div className="col-md-5" style={{ width: "200px" }}>
                          <button className="vndrbtn" style={{ width: "150px" }}>Save</button>
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
  )
}

export default RFONew;