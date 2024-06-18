import React, { useEffect, useState } from "react";
import "./AddNewItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import CachedIcon from "@mui/icons-material/Cached";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddNewItem = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "FG") {
      navigate("/item-master-gernal");
    }
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  return (
    <div className="AddNewItemPage">
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
                <div className="assd">
                  <div className="top-but2">
                    <div className="row align-items-center">
                      <div className="col-md-2 text-start">
                        <p>Item List</p>
                      </div>
                      <div className="col-md-10 text-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <label htmlFor="input" className="me-2">
                            Search Item For Copy
                          </label>
                          <input type="text" id="input" className="me-2" />
                          <button className="btn-uper me-2">Copy Item</button>
                          <button className="btn-uper me-2">
                            Section Group Master
                          </button>
                          <button className="btn-uper">Item List</button>
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
                                            onChange={handleDropdownChange}
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

                                            <option>
                                              {" "}
                                              <Link
                                                to="/item-master-gernal"
                                                className="link btn12 me-2"
                                              >
                                                FG
                                              </Link>
                                            </option>

                                            <option>RM</option>
                                            <option>Tool</option>
                                            <option>Instrument</option>
                                            <option>Machine</option>
                                            <option>Consumable</option>
                                            <option>Safety Equ</option>
                                            <option>Service</option>
                                            <option>Assest</option>
                                            <option>F4</option>
                                            <option>Scrap</option>
                                            <option>SF</option>
                                            <option>BO</option>
                                            <option>DI</option>
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

                  <div className="row" style={{ color: "blue" }}>
                    <div className="col-md-1 text-start">
                      <label class="form-check-label" for="flexCheckDefault">
                        Active:
                      </label>
                    </div>
                    <div className="col-md-1 text-start">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Save
                        </label>
                      </div>
                    </div>

                    <div className="col-md-1 text-start">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Purchase
                        </label>
                      </div>
                    </div>
                    <div className="col-md-7 text-start"></div>
                    <div className="col-md-1 text-end">
                      <button className="bjkd">Save</button>
                    </div>
                    <div className="col-md-1 text-end">
                      <button className="bjkd">Clear</button>
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
