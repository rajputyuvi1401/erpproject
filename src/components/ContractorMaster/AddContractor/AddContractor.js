import React, { useEffect, useState } from "react";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import "./AddContractor.css";
const AddContractor = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);
  return (
    <div className="AddContractorMaster">
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
                <div className="AddContractorMaster1">
                  <div className="AddContractor">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>
                            Add New Contractor Master
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="AddContractorMain">
                    <div className="container-fluid">
                      <div className="row text-start">
                        <div className="col-md-6">
                          <div className="row mb-3">
                            <label
                              for="inputEmail3"
                              className="col-sm-4 col-form-label"
                            >
                              Plant:
                            </label>
                            <div className="col-sm-8">
                              <select id="plantSelect" className="form-select">
                                <option value="plant1">Plant 1</option>
                                <option value="plant2">Plant 2</option>
                                <option value="plant3">Plant 3</option>
                              </select>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label
                              for="inputEmail3"
                              className="col-sm-4 col-form-label"
                            >
                              Contractor Name:
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label
                              for="inputEmail3"
                              className="col-sm-4 col-form-label"
                            >
                              Contact No:
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label
                              for="inputEmail3"
                              className="col-sm-4 col-form-label"
                            >
                              GST No:
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label
                              for="inputEmail3"
                              className="col-sm-4 col-form-label"
                            >
                              Nature Of Service:
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label
                              for="inputEmail3"
                              className="col-sm-4 col-form-label"
                            >
                              Eamil:
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label
                              for="inputEmail3"
                              className="col-sm-4 col-form-label"
                            >
                              Ref Code:
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row mb-3">
                            <label
                              for="inputEmail3"
                              className="col-sm-4 col-form-label"
                            >
                              Address:
                            </label>
                            <div className="col-sm-8">
                              <textarea
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label
                              for="inputEmail3"
                              className="col-sm-4 col-form-label"
                            >
                              Pan No:
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label
                              for="inputEmail3"
                              className="col-sm-4 col-form-label"
                            >
                              TDS %:
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label
                              for="inputEmail3"
                              className="col-sm-4 col-form-label"
                            >
                              First Name:
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <button className="AddContractorMainbtn ">
                            Save
                          </button>
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

export default AddContractor;
