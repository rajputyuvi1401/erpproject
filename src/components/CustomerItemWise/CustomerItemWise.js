import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./CustomerItemWise.css";

const CustomerItemWise = () => {
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
    <div className="Itemwise">
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
                <div className="Itemwisseee">
                  <div className="Itemwise1">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>
                            Customer Item Wise Value Addition Rate
                          </h5>
                        </div>
                        <div className="col-md-6 text-end">
                          <button className="wie-btn">Export to Excel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rateewise">
                    <div className="container-fluid">
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
                                Search Option
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
                                Add Item
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="pills-home"
                              role="tabpanel"
                              aria-labelledby="pills-home-tab"
                              tabIndex="0"
                            >
                              <div className="rate-wise">
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="row mb-3 text-start">
                                        <label
                                          htmlFor="inputEmail3"
                                          className="col-sm-3 col-form-label"
                                        >
                                          Cust / Supp Name:
                                        </label>
                                        <div className="col-sm-7">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="Please Enter Item Name"
                                          />
                                        </div>
                                        <div className="col-sm-2">
                                          <button className="vai-btn">
                                            Search
                                          </button>
                                        </div>
                                      </div>
                                      <div className="row mb-3 text-start">
                                        <div className="form-check col-sm-3">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault1"
                                          >
                                            Item Name:
                                          </label>
                                        </div>
                                        <div className="col-sm-6">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="Please Enter Item Name"
                                          />
                                        </div>
                                        <div className="col-sm-3">
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              name="flexRadioDefault"
                                              id="flexRadioDefault1"
                                            />
                                            <p>Single item link</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row mb-3 text-start">
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="inputEmail3"
                                            className="col-sm-3 col-form-label"
                                          >
                                            VA Rate1:
                                          </label>
                                          <div className="col-sm-2">
                                            <input
                                              type="email"
                                              className="form-control"
                                              id="inputEmail3"
                                            />
                                          </div>
                                          <label
                                            htmlFor="inputEmail3"
                                            className="col-sm-2 col-form-label"
                                          >
                                            VA Rate2:
                                          </label>
                                          <div className="col-sm-3">
                                            <input
                                              type="email"
                                              className="form-control"
                                              id="inputEmail3"
                                            />
                                          </div>
                                          <div className="col-sm-1">
                                            <button className="rate1-btn">
                                              Save
                                            </button>
                                          </div>
                                          <div className="col-sm-1">
                                            <button className="rate1-btn">
                                              Clear
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="table-container">
                                <table className="rate-table">
                                  <thead>
                                    <tr>
                                      <th>SR</th>
                                      <th>Cust Code</th>
                                      <th>Cust Name</th>
                                      <th>Item Code</th>
                                      <th>Item Desc</th>
                                      <th>VA1</th>
                                      <th>VA2</th>
                                      <th>Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td data-label="SR">1</td>
                                      <td data-label="Cust Code">001</td>
                                      <td data-label="Cust Name">John Doe</td>
                                      <td data-label="Item Code">1234</td>
                                      <td data-label="Item Desc">
                                        Sample Item
                                      </td>
                                      <td data-label="VA1">Value 1</td>
                                      <td data-label="VA2">Value 2</td>
                                      <td data-label="Delete">
                                        <button style={{ border: "none" }}>
                                          Delete
                                        </button>
                                      </td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-profile"
                              role="tabpanel"
                              aria-labelledby="pills-profile-tab"
                              tabIndex="0"
                            >
                              Add item
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ratebottom">
                    <div className="row">
                      <div className="col-md-12 text-start">
                        <div className="row mb-3">
                          <label
                            htmlFor="inputEmail3"
                            className="col-sm-2 col-form-label"
                          >
                            Total Records: 00
                          </label>
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

export default CustomerItemWise;
