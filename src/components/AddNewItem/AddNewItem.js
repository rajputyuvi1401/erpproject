import React, { useEffect, useState } from "react";
import "./AddNewItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import CachedIcon from "@mui/icons-material/Cached";
// import { Link } from "react-router-dom";

const AddNewItem = () => {
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
    <div className="home">
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
                <div className="top-but2">
                  <div className="row">
                    <div className="col-md-4 text-start">
                      <p>Item List</p>
                    </div>

                    <div className="col-md-8 text-end">
                      <div className="d-flex text-end">
                        <label>Search Item For Copy</label>
                        <input type="text" id="input" />

                        <button className="btn-uper me-2">Copy Item</button>
                        <button className="btn-uper me-2">
                          Section Group Master
                        </button>
                        <button className="btn-uper ">Item List</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="AddNewMain">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <ul
                          className="nav nav-pills mb-3"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-home"
                              type="button"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              General
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              Date-2
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-contact-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-contact"
                              type="button"
                              role="tab"
                              aria-controls="pills-contact"
                              aria-selected="false"
                            >
                              Technical Specification
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-about-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-about"
                              type="button"
                              role="tab"
                              aria-controls="pills-about"
                              aria-selected="false"
                            >
                              NPD
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                            tabindex="0"
                          >
                            <p
                              className="mandatory  text-start"
                              style={{
                                marginTop: "10px",
                                color: "grey",
                                marginBottom: "50px",
                              }}
                            >
                              Mandatory Fields
                            </p>
                            <div className="container">
                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="row">
                                    <div class="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        class="col-sm-4 col-form-label"
                                      >
                                        Main Group:
                                      </label>
                                      <div class="col-sm-5">
                                        <select
                                          id="inputState"
                                          class="form-select"
                                        >
                                          <option selected>Select ..</option>
                                          <option>FA</option>
                                          <option>FA</option>
                                        </select>
                                      </div>
                                      <div class="col-sm-2">
                                        <button className="btn">New</button>
                                      </div>
                                      <div class="col-sm-1">
                                        <button
                                          className="btn"
                                          style={{ fontSize: "10px" }}
                                        >
                                          <CachedIcon />
                                        </button>
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        class="col-sm-5 col-form-label"
                                      >
                                        SE Item/Part No:
                                      </label>
                                      <div class="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        class="col-sm-4 col-form-label"
                                      >
                                        Unit Code:
                                      </label>
                                      <div class="col-sm-5">
                                        <select
                                          id="inputState"
                                          class="form-select"
                                        >
                                          <option selected>Select ..</option>
                                          <option>FA</option>
                                          <option>FA</option>
                                        </select>
                                      </div>
                                      <div class="col-sm-2">
                                        <button className="btn">New</button>
                                      </div>
                                      <div class="col-sm-1">
                                        <button
                                          className="btn"
                                          style={{ fontSize: "10px" }}
                                        >
                                          <CachedIcon />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row">
                                    <div class="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        class="col-sm-4 col-form-label"
                                      >
                                        Item Group:
                                      </label>
                                      <div class="col-sm-5">
                                        <select
                                          id="inputState"
                                          class="form-select"
                                        >
                                          <option selected>Select ..</option>
                                          <option>FA</option>
                                          <option>FA</option>
                                        </select>
                                      </div>
                                      <div class="col-sm-2">
                                        <button className="btn">New</button>
                                      </div>
                                      <div class="col-sm-1">
                                        <button
                                          className="btn"
                                          style={{ fontSize: "10px" }}
                                        >
                                          <CachedIcon />
                                        </button>
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        class="col-sm-5 col-form-label"
                                      >
                                        Name/Description:
                                      </label>
                                      <div class="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        class="col-sm-4 col-form-label"
                                      >
                                        Store Location:
                                      </label>
                                      <div class="col-sm-5">
                                        <select
                                          id="inputState"
                                          class="form-select"
                                        >
                                          <option selected>Select ..</option>
                                          <option>FA</option>
                                          <option>FA</option>
                                        </select>
                                      </div>
                                      <div class="col-sm-2">
                                        <button className="btn">New</button>
                                      </div>
                                      <div class="col-sm-1">
                                        <button
                                          className="btn"
                                          style={{ fontSize: "10px" }}
                                        >
                                          <CachedIcon />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row">
                                    <div class="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        class="col-sm-5 col-form-label"
                                      >
                                        SE Item/Part No:
                                      </label>
                                      <div class="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p
                              className="mandatory  text-start"
                              style={{ marginTop: "100px", color: "grey" }}
                            >
                              Optional Fields
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabindex="0"
                    >
                      <p>tab2</p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabindex="0"
                    >
                      <p>tab3</p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-about"
                      role="tabpanel"
                      aria-labelledby="pills-about-tab"
                      tabindex="0"
                    >
                      <p>tab4</p>
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

export default AddNewItem;
