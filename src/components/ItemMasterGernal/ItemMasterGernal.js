import React, { useState, useEffect } from "react";
import "./ItemMasterGernal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import CachedIcon from "@mui/icons-material/Cached";
const ItemMasterGernal = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [showNewCard, setShowNewCard] = useState(false);

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

  const handleNewButtonClick = () => {
    setShowNewCard(!showNewCard);
  };

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
                <div className="top-but3">
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
                <div className="itemmastergernal">
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

                            <div className="gerneral">
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="row text-start">
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
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

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
                                            <option>PCS</option>
                                            <option>KGS</option>
                                            <option>Box</option>
                                            <option>LTR</option>
                                            <option>NOS</option>
                                            <option>SQFT</option>
                                            <option>MTR</option>
                                            <option>FOOT</option>
                                            <option>SQMTR</option>
                                            <option>PAIR</option>
                                            <option>BAG</option>
                                            <option>PACKET</option>
                                            <option>RIM</option>
                                            <option>SET</option>
                                            <option>MT</option>
                                            <option>PER DAY</option>
                                            <option>DOZEN</option>
                                            <option>JOB</option>
                                            <option>SQINCh</option>
                                          </select>
                                        </div>
                                        <div class="col-sm-2">
                                          <button
                                            className="btn"
                                            onClick={handleNewButtonClick}
                                          >
                                            New
                                          </button>
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
                                          class="col-sm-4 col-form-label"
                                        >
                                          TDC:
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
                                          Item/Part Code:
                                        </label>
                                        <div class="col-sm-7">
                                          <input
                                            type="input"
                                            className="
                                        form-control"
                                            style={{ width: "115%" }}
                                          />
                                        </div>
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="flexCheckDefault"
                                          >
                                            Same As Part No
                                          </label>
                                        </div>
                                      </div>
                                      <div class="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          class="col-sm-5 col-form-label"
                                        >
                                          Cut Weight kg:
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
                                          class="col-sm-5 col-form-label"
                                        >
                                          Rate:
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
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="row text-start">
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
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

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
                                          Name Description:
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
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

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
                                          class="col-sm-4 col-form-label"
                                        >
                                          Route:
                                        </label>
                                        <div class="col-sm-5">
                                          <select
                                            id="inputState"
                                            class="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

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
                                          class="col-sm-4 col-form-label"
                                        >
                                          Parent FG Code:
                                        </label>
                                        <div class="col-sm-7">
                                          <select
                                            id="inputState"
                                            class="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

                                            <option>SF</option>
                                            <option>BO</option>
                                            <option>DI</option>
                                          </select>
                                        </div>
                                        <div class="col-sm-1">
                                          <button className="btn">New</button>
                                        </div>
                                      </div>
                                      <div class="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          class="col-sm-5 col-form-label"
                                        >
                                          Finish Weight (KG):
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
                                          Sector:
                                        </label>
                                        <div class="col-sm-5">
                                          <select
                                            id="inputState"
                                            class="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

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
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="row text-start">
                                      <div class="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          class="col-sm-4 col-form-label"
                                        >
                                          Type/Grade:
                                        </label>
                                        <div class="col-sm-2">
                                          <select
                                            id="inputState"
                                            class="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

                                            <option>SF</option>
                                            <option>BO</option>
                                            <option>DI</option>
                                          </select>
                                        </div>
                                        <div class="col-sm-3">
                                          <select
                                            id="inputState"
                                            class="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

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
                                          class="col-sm-4 col-form-label"
                                        >
                                          Subgroup:
                                        </label>
                                        <div class="col-sm-5">
                                          <select
                                            id="inputState"
                                            class="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

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
                                      <div class="row mb-5">
                                        <label
                                          for="inputEmail3"
                                          class="col-sm-5 col-form-label"
                                        >
                                          HSN/SAC Code:
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
                                          class="col-sm-5 col-form-label"
                                        >
                                          Gross Weight(kg):
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
                                          class="col-sm-5 col-form-label"
                                        >
                                          Tool/Die Life:
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
                                          class="col-sm-5 col-form-label"
                                        >
                                          No of Resharpening/Reconditionning:
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {showNewCard && (
                              <div className="new-card-overlay">
                                <div className="new-card">
                                  <div className="card">
                                    <div className="card-body">
                                      <h5
                                        className="card-title text-start"
                                        style={{ color: "blue" }}
                                      >
                                        Item Unit Master
                                      </h5>
                                      <div className="row mb-3">
                                        <label
                                          htmlFor="unitName"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Unit Name:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="unitName"
                                          />
                                        </div>
                                        <div className="col-sm-2">
                                          <button className="card-btn">
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                      <table className="table">
                                        <thead>
                                          <tr>
                                            <th scope="col">Sr No.</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Delete</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {/* Add table rows dynamically */}
                                          <tr>
                                            <td>1</td>
                                            <td>PCS</td>
                                            <td>
                                              <button className="card-btn1 btn-primary">
                                                Edit
                                              </button>
                                            </td>
                                            <td>
                                              <button className="card-btn2 btn-danger">
                                                Delete
                                              </button>
                                            </td>
                                          </tr>
                                          {/* Add more rows as needed */}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <button
                                    className="btn-cl"
                                    style={{
                                      margin: "5px",
                                      color: "gray",
                                      border: "none",
                                      padding:'10px'
                                    }}
                                    onClick={handleNewButtonClick}
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            )}
                            <p
                              className="mandatory  text-start"
                              style={{ marginTop: "30px", color: "grey" }}
                            >
                              Optional Fields
                            </p>
                            <div className="gerneral1">
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="row text-start">
                                      <div class="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          class="col-sm-5 col-form-label"
                                        >
                                          Revision No:
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
                                          class="col-sm-5 col-form-label"
                                        >
                                          Item Size:
                                        </label>

                                        <div class="col-sm-4">
                                          <input
                                            type="input"
                                            className="
                                        form-control"
                                            style={{ width: "115%" }}
                                          />
                                        </div>
                                        <div class="col-sm-3">
                                          <select
                                            id="inputState"
                                            class="form-select"
                                          >
                                            <option selected>Select ..</option>
                                            <option>FA</option>
                                            <option>FA</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          class="col-sm-5 col-form-label"
                                        >
                                          Heat Treatment:
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
                                          class="col-sm-5 col-form-label"
                                        >
                                          Color Code:
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
                                          class="col-sm-5 col-form-label"
                                        >
                                          Min Rate:
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
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="row text-start">
                                      <div class="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          class="col-sm-5 col-form-label"
                                        >
                                          SAC Code:
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
                                          Item Sector:
                                        </label>
                                        <div class="col-sm-5">
                                          <select
                                            id="inputState"
                                            class="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

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
                                          Hardness (BHN):
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
                                          class="col-sm-5 col-form-label"
                                        >
                                          Male:
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
                                          class="col-sm-5 col-form-label"
                                        >
                                          Max Rate:
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
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="row text-start">
                                      <div class="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          class="col-sm-4 col-form-label"
                                        >
                                          Item Class:
                                        </label>
                                        <div class="col-sm-8">
                                          <select
                                            id="inputState"
                                            class="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

                                            <option>SF</option>
                                            <option>BO</option>
                                            <option>DI</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          class="col-sm-4 col-form-label"
                                        >
                                          QC Application:
                                        </label>
                                        <div class="col-sm-8">
                                          <select
                                            id="inputState"
                                            class="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>

                                            <option>SF</option>
                                            <option>BO</option>
                                            <option>DI</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          class="col-sm-5 col-form-label"
                                        >
                                          Jominy (for Rm):
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
                                          class="col-sm-5 col-form-label"
                                        >
                                          Microstructure:
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
                                          class="col-sm-5 col-form-label"
                                        >
                                          Drawing No:
                                        </label>
                                        <div class="col-sm-7">
                                          <input
                                            type="input"
                                            className="
                                        form-control"
                                            style={{ width: "115%" }}
                                          />
                                        </div>
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="flexCheckDefault"
                                          >
                                            Same As Part No
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
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

export default ItemMasterGernal;
