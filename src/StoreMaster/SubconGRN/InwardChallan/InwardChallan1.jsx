import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./InwardChallan1.css";
import CachedIcon from "@mui/icons-material/Cached";
import { Link } from "react-router-dom";

const InwardChallan1 = () => {
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
    <div className="NewStoreStoreSubcon">
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
                <div className="StoreSubcon-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">
                        57-F4(InWard Challan)
                      </h5>
                    </div>
                    <div className="col-md-6 mt-4">
                      <div className="row mb-3">
                        <div className="col-md-2">
                          <select id="routingSelect" className="form-select">
                            <option selected>Routing</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </select>
                        </div>

                        {/* Sharp Select Option */}
                        <div className="col-md-2">
                          <select id="sharpSelect" className="form-select">
                            <option selected>Sharp</option>
                           
                          </select>
                        </div>

                        {/* Label: Series and Series Select Option */}
                        <div className="col-md-2">
                          <label htmlFor="seriesSelect" className="form-label">
                            Series:
                          </label>
                        </div>
                        <div className="col-md-2">
                          <select id="seriesSelect" className="form-select">
                            <option selected>Select</option>
                            <option value="57F4">57F4</option>
                            <option value="57F4 Return">57F4 Return</option>
                            <option value="Process Loss/Scrap">
                              Process Loss/Scrap
                            </option>
                          </select>
                        </div>

                        {/* Input Field */}
                        <div className="col-md-2">
                          <input
                            type="text"
                            id="inputField"
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-end">
                      <div className="row justify-content-end">
                        <div className="col-md-6 d-flex align-items-center">
                          <Link className="pobtn" to={"/Inward-challan-list"}>Inward Challan List</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="StoreSubcon-main">
                  <div className="storesubcon-background">
                  <div className="container-fluid ">
                    <div className="row mt-4">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-4">Gate Entry No:</div>
                          <div className="col-md-6">
                            <select id="routingSelect" className="form-select">
                              <option selected>Select</option>
                              <option value="">
                                GE242503626|Supplier/Vendor : SANKET ENGINEERING
                              </option>
                              <option value="">
                                GE242504231|Supplier/Vendor : SHRIPAD STEELS
                              </option>
                              <option value="">
                                GE242503626|Supplier/Vendor : SHREE CHITAMANI
                                HEAT TREATERS
                              </option>
                            </select>
                          </div>
                          <div className="col-md-2">
                            <CachedIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-4">Supplier Name:</div>
                          <div className="col-md-6">
                            <input />
                          </div>
                          <div className="col-md-2">
                            <button type="button" className="btn">Search</button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row text-start">
                          <div className="col-md-4">Outward Challan:</div>
                          <div className="col-md-4">
                            <select id="routingSelect" className="form-select">
                              <option selected>Select</option>
                              <option value="">
                                242503626| SANKET ENGINEERING
                              </option>
                              <option value="">
                                242504231| SHRIPAD STEELS
                              </option>
                              <option value="">
                                242503626| SHREE CHITAMANI HEAT TREATERS
                              </option>
                            </select>
                          </div>
                          <div className="col-md-2">
                            <button type="button" className="btn">Search</button>
                            </div>
                            <div className="col-md-1">
                            <button type="button" className="btn">Cancel</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4 ">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-4">Item Name:</div>
                          <div className="col-md-6">
                            <input />
                          </div>
                          <div className="col-md-2">
                            <button type="button" className="btn">Add</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="StoreSubconstatus">
                    <div className="container mt-4 text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr no.</th>
                              <th>Out_Date</th>
                              <th>Item Description</th>
                              <th>Out_In</th>
                              <th>Unit</th>
                              <th>Out_Qty</th>
                              <th>Balance.Qty</th>
                              <th>Challan.Qty</th>
                              <th>In Qty(nos)</th>
                              <th>In Qty(Kg)</th>
                              <th>JWT Rate</th>
                              <th>HC</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div
                    className="StoreSubconFooter"
                    style={{ marginTop: "100px" }}
                  >
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-Gernal-Detail-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-Gernal-Detail"
                          type="button"
                          role="tab"
                          aria-controls="pills-Gernal-Detail"
                          aria-selected="true"
                        >
                          Gernal Detail
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-GST-Details-tab"
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
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-Gernal-Detail"
                        role="tabpanel"
                        aria-labelledby="pills-Gernal-Detail-tab"
                        tabindex="0"
                      >
                        <div className="StoreSubconstatus text-start">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-4 text-start">
                                <div className="container mt-4">
                                  <div className="table-responsive">
                                    <table className="table table-bordered">
                                      <tbody>
                                        {/* First Column Group */}
                                        <tr>
                                          <th className="col-md-4">
                                            Inward F4 No:
                                          </th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Inward Date:</th>
                                          <td>
                                            <input
                                              type="date"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Inward Time:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Challan No:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Challan Date:</th>
                                          <td>
                                            <input
                                              type="date"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Gate Entry No:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 text-start">
                                {/* Second Column Group */}
                                <div className="container mt-4">
                                  <div className="table-responsive text-start">
                                    <table className="table table-bordered">
                                      <tbody>
                                        <tr>
                                          <th>Invoice No:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th className="col-md-4">
                                            Invoice Date:
                                          </th>
                                          <td>
                                            <input
                                              type="date"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>E Way Bill Qty:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>E Way Bill No:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>TC No:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>TC Date:</th>
                                          <td>
                                            <input
                                              type="date"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 text-start">
                                {/* Third Column Group */}
                                <div className="container mt-4">
                                  <div className="table-responsive">
                                    <table className="table table-bordered">
                                      <tbody>
                                        <tr>
                                          <th>Remark:</th>
                                          <td>
                                            <textarea
                                              className="form-control"
                                              rows="2"
                                            ></textarea>
                                          </td>
                                        </tr>
                                        <tr>
                                          <th className="col-md-4">
                                            Delivery in Time:
                                          </th>
                                          <td>
                                            <input type="checkbox" />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Total Item:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Total Qty (No):</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Total Qty (Kg):</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Store:</th>
                                          <td>
                                            <select className="form-select">
                                              <option value="Main Store">
                                                Main Store
                                              </option>
                                              {/* Add more options as needed */}
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            colspan="2"
                                            className="text-start"
                                          >
                                            <button className="btn">
                                              DocTCUpload
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-GST-Details"
                        role="tabpanel"
                        aria-labelledby="pills-GST-Details-tab"
                        tabindex="0"
                      >
                        <div className="StoreSubconstatus1">

                            <div className="row ">
                              <div className="col-md-8 mt-4">
                                <div className="table-responsive">
                                  <table className="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Sr</th>
                                        <th>Item Code</th>
                                        <th>SAC Code</th>
                                        <th>PO Rate</th>
                                        <th>Rate Type</th>
                                        <th>Qty</th>
                                        <th>Discount</th>
                                        <th>Pack Amt</th>
                                        <th>TransAmt</th>
                                        <th>Ass Value</th>
                                        <th>CGST</th>
                                        <th>SGST</th>
                                        <th>IGST</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>{/* Data rows will go here */}</tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="Purchaseordertable">
                                  <div className="row">
                                    <div className="col-md-6 text-start">
                                      {/* Second Column Group */}
                                      <div className="container mt-4">
                                        <div className="table-responsive text-start">
                                          <table className="table table-bordered">
                                            <tbody>
                                              <tr>
                                                <th>TDC Assessable Value:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th className="col-md-4">
                                                  (TDC) Pack & Fwrd Charge:
                                                </th>
                                                <td>
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>TransPort Charges:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>Insurance:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>Instailation Charges:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>Other Charges:</th>
                                                <td>
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 text-start">
                                      {/* Third Column Group */}
                                      <div className="container mt-4">
                                        <div className="table-responsive">
                                          <table className="table table-bordered">
                                            <tbody>
                                              <tr>
                                                <th>CGST:00.00%</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th className="col-md-4">
                                                  SGST:00.00%
                                                </th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>IGST:00.00%:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>TCS:00.00%:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>GR. Total:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>Store:</th>
                                                <td>
                                                  <select className="form-select">
                                                    <option value="Main Store">
                                                      Main Store
                                                    </option>
                                                    {/* Add more options as needed */}
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  colspan="2"
                                                  className="text-start"
                                                >
                                                  <button className="btn">
                                                    DocTCUpload
                                                  </button>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
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

export default InwardChallan1;
