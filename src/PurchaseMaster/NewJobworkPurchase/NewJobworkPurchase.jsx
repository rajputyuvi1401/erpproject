import "./NewJobworkPurchase.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import JobWorkPoinfo from "./JobWorkPoinfo/JobWorkPoinfo.jsx";
import JobWorkitemdetail from "./JobWorkitemdetail/JobWorkitemdetail.jsx";
import JobWorkgstdetail from "./JobWorkgstdetail/JobWorkgstdetail.jsx";
import JobWorkschedule from "./JobWorkschedule/JobWorkschedule.jsx";
import JobWorkShiptoadd from "./JobWorkShiptoadd/JobWorkShiptoadd.jsx";

const NewJobworkPurchase = () => {
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
    <div className="NewJobworkMaster">
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
                <div className="NewJobwork">
                  <div className="container-fluid">
                    <div className="newjobwork-header">
                    <div className="newindent-header mb-4 text-start">
                          <div className="row align-items-center">
                            <div className="col-md-4">
                              <h5 className="header-title">New JW-PO</h5>
                        </div>
                        <div className="col-md-1">
                          <label>PO Type:</label>
                          <select className="form-control">
                            <option value="">CLOSE</option>
                            <option value="option1">OPEN</option>
                            
                          </select>
                        </div>
                        
                        <div className="col-md-1">
                          <label>Series:</label>
                          <select className="form-control">
                            <option value="">JOBWORK</option>
                           
                          </select>
                        </div>
                        <div className="col-md-1">
                          <label>Indent No:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-1">
                          <label>Supplier:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-1">
                          <button className="btn newpurchase-btn mt-4">
                            Select
                          </button>
                        </div>
                        <div className="col-md-1">
                          <label></label>
                          <select className="form-control">
                            <option value="">S0053</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </select>
                        </div>
                        <div className="col-md-1 text-start mt-4">
                          <i
                            style={{ padding: "5px" }}
                            className="fas fa-eye"
                          ></i>

                          <i
                            style={{ padding: "5px" }}
                            className="fas fa-bars"
                          ></i>
                        </div>
                        <div className="col-md-1 mt-4">
                          <button className="btn newpurchase-btn">Clear</button>
                        </div>
                        <div className="col-md-1 mt-4">
                          <button className="btn newpurchase-btn">
                            PO List
                          </button>
                        </div>
                      </div>
                      </div>

                    </div>
                    <div className="newjobwork-main">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-PO-Info-tab-job"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-PO-Info"
                            type="button"
                            role="tab"
                            aria-controls="pills-PO-Info"
                            aria-selected="false"
                          >
                            PO Info
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-Item-Details-tab-job"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Item-Details"
                            type="button"
                            role="tab"
                            aria-controls="pills-Item-Details"
                            aria-selected="true"
                          >
                            Item Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-GST-Details-tab-job"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-GST-Details"
                            type="button"
                            role="tab"
                            aria-controls="pills-GST-Details"
                            aria-selected="false"
                          >
                            GST Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-Schedule-tab-job"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Schedule"
                            type="button"
                            role="tab"
                            aria-controls="pills-Schedule"
                            aria-selected="false"
                          >
                            Schedule Line
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-Ship-tab-job"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Ship"
                            type="button"
                            role="tab"
                            aria-controls="pills-Ship"
                            aria-selected="false"
                          >
                            Ship To Add
                          </button>
                        </li>
                      </ul>

                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade"
                          id="pills-PO-Info"
                          role="tabpanel"
                          aria-labelledby="pills-PO-Info-tab-job"
                          tabindex="0"
                        >
                          <JobWorkPoinfo />
                        </div>
                        <div
                          className="tab-pane fade show active"
                          id="pills-Item-Details"
                          role="tabpanel"
                          aria-labelledby="pills-Item-Details-tab-job"
                          tabindex="0"
                        >
                          <JobWorkitemdetail />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-GST-Details"
                          role="tabpanel"
                          aria-labelledby="pills-GST-Details-tab-job"
                          tabindex="0"
                        >
                          <JobWorkgstdetail />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-Schedule"
                          role="tabpanel"
                          aria-labelledby="pills-Schedule-tab-job"
                          tabindex="0"
                        >
                          <JobWorkschedule />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-Ship"
                          role="tabpanel"
                          aria-labelledby="pills-Ship-tab-job"
                          tabindex="0"
                        >
                          <JobWorkShiptoadd />
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

export default NewJobworkPurchase;
