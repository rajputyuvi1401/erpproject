import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import "./PriceEntry.css";
const PriceEntry = () => {
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
    <div className="PriceentryMaster">
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
                <div className="PriceentryMaster1">
                  <div className="Priceentry">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>Price Entry Master</h5>
                        </div>
                        <div className="col-md-6 text-end">
                          <button className="Priceentrybtn">
                            Export To Excel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="PriceentryMain">
                    <div className="container-fluid">
                      <div className="row text-start">
                        <div className="col-md-5">
                          <div className="mb-3">
                            <div className="row text-start">
                              <label
                                htmlFor="customerName"
                                className="form-label col-sm-4"
                              >
                                Select Customer:
                              </label>
                              <div className="col-sm-4">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="customerName"
                                />
                              </div>
                              <div className="col-sm-3">
                                <button
                                  className="PriceListcardbtn"
                                  type="button"
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="mb-3">
                            <div className="row text-start">
                              <label
                                htmlFor="customerName"
                                className="form-label col-sm-4"
                              >
                                Price List Code:
                              </label>
                              <div className="col-sm-4">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="customerName"
                                />
                              </div>
                              <div className="col-sm-3">
                                <button
                                  className="PriceListcardbtn"
                                  type="button"
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="mb-3">
                            <div className="row text-start">
                              <label
                                htmlFor="customerName"
                                className="form-label col-sm-4"
                              >
                                Item No/Code:
                              </label>
                              <div className="col-sm-4">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="customerName"
                                />
                              </div>
                              <div className="col-sm-3">
                                <button
                                  className="PriceListcardbtn"
                                  type="button"
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-6">
                              <button className="PriceentryMainbtn">
                                Cancel
                              </button>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="activeItemCheckbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="activeItemCheckbox"
                                    >
                                      Active Item
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="companyHeaderCheckbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="companyHeaderCheckbox"
                                    >
                                      Company Header
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                  <button className="PriceentryMainbtn">
                                    Export to Excel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row text-start">
                            <div className="col-md-4">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault"
                                >
                                  Pay Term:
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                id="customerName"
                              />
                            </div>
                          </div>
                          <div className="row text-start">
                            <div className="col-md-4">
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                Disc:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="customerName"
                              />
                            </div>
                            <div className="col-sm-8">
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                %
                              </label>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>select...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                          <button className="PriceentryMainbtn">
                            Upload Photo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Priceentrytable">
                    <table className="table table-bordered table-responsive">
                      <thead>
                        <tr>
                          <th>Sr No</th>
                          <th>Code</th>
                          <th>Customer Name</th>
                          <th>PL Code</th>
                          <th>Item No</th>
                          <th>Item Code</th>
                          <th>Item Desc</th>
                          <th>Eff. From</th>
                          <th>Eff. To</th>
                          <th>Rate</th>
                          <th>Disc</th>
                          <th>Qty</th>
                          <th>PO No</th>
                          <th>PO Date</th>
                          <th>AMD No</th>
                          <th>AMD Date</th>
                          <th>Line No</th>
                          <th>Type</th>
                          <th>Block</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="date" className="form-control" />
                          </td>
                          <td>
                            <input type="date" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="date" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="date" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                  <div className="Priceentrybottom">
                    <div className="row text-start">
                      <div className="col-6">
                        <button className="PriceentryMainbtn">Save</button>
                        <button className="PriceentryMainbtn">
                          Price History
                        </button>
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

export default PriceEntry;
