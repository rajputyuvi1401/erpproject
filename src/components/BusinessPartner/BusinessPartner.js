import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import CachedIcon from "@mui/icons-material/Cached";
import "./BusinessPartner.css";

const BusinessPartner = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };
  return (
    <div className="Bussiness">
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
                <div className="fullbus">
                  <div className="bussiness1">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>Business Partner</h5>
                        </div>
                        <div className="col-md-6 text-end">
                          <button className="btn-bus">
                            Customer Supplier List
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bussiness-main">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              Cust / Supp Name:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                placeholder="Please enter name"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              Add Code:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              Partner Name:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div class="row mb-5">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              Address:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                placeholder="Address Line 1"
                                class="form-control"
                                id="inputEmail3"
                              />
                              <br />
                              <input
                                type="email"
                                placeholder="Address Line 2"
                                class="form-control"
                                id="inputEmail3"
                              />
                              <br />
                              <input
                                type="email"
                                placeholder="Address Line 3"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              City:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                                placeholder="city"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              Pin Code:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              Email:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              Contact No:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              State Code:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              Country:
                            </label>
                            <div class="col-sm-6">
                              <select
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div class="col-sm-1">
                              <button className="btn-fg">New</button>
                            </div>
                            <div class="col-sm-1">
                              <button
                                className="btn-fg"
                                style={{ fontSize: "10px" }}
                              >
                                <CachedIcon />
                              </button>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              GST No:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              GST Code:
                            </label>
                            <div class="col-sm-8">
                              <select
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              PAN No:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              Distance:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              CIN No:
                            </label>
                            <div class="col-sm-8">
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-3 col-form-label"
                            >
                              Invoice Type:
                            </label>
                            <div class="col-sm-6">
                              <select
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="col-sm-1">
                              <button className="btn-ty">Save</button>
                            </div>
                            <div className="col-sm-1">
                              <button className="btn-ty">clear</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bus-bottom">
                      <div className="row mb-3">
                        <div className="col-md-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault1"
                            >
                              View All BSP
                            </label>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Add Code
                            </label>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Address
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-5">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="Enter Address"
                          />
                        </div>
                        <div className="col-sm-3">
                          <button className="bsi-btn">Search</button>
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

export default BusinessPartner;
