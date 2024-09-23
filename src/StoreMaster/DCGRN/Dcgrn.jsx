import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Dcgrn.css";
import Cached from "@mui/icons-material/Cached.js";
const Dcgrn = () => {
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
    <div className="NewStoreDcgrn">
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
                <div className="Dcgrn-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">New DC GRN</h5>
                    </div>
                    <div className="col-md-7">
                      <div className="row mb-3">
                        <div className="col-md-2">
                          <select id="sharpSelect" className="form-select">
                            <option selected>Sharp</option>
                          </select>
                        </div>
                        <div className="col-md-2">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-2 text-end">
                      <div className="row justify-content-end">
                        <div className="col-md-8 d-flex align-items-end">
                          <Link className="pobtn" to="/Dcgrnlist">DC-GM-LIST</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Dcgrn-main">
                <div className="container-fluid text-start">
  {/* First Row */}
  <div className="row align-items-center mb-3">
    <div className="col-md-1">
      <label>Type:</label>
    </div>
    <div className="col-md-3">
      <div className="form-check form-check-inline">
        <input type="checkbox" id="dc-grn" name="dc-grn" className="form-check-input" />
        <label htmlFor="dc-grn" className="form-check-label ms-1">DC GRN</label>
      </div>
      <div className="form-check form-check-inline">
        <input type="checkbox" id="direct-grn" name="direct-grn" className="form-check-input" />
        <label htmlFor="direct-grn" className="form-check-label ms-1">Direct GRN</label>
      </div>
    </div>
    <div className="col-md-2">
      <label>Gate Entry No:</label>
    </div>
    <div className="col-md-1">
      <select className="form-select">
        <option value="All">All</option>
      </select>
    </div>
    <div className="col-md-1">
      <button type="button" className="btn">
        <Cached />
      </button>
    </div>
    <div className="col-md-1">
      <label>Series:</label>
    </div>
    <div className="col-md-1">
      <select className="form-select">
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
    </div>
  </div>

  {/* Second Row */}
  <div className="row align-items-center mb-3">
    <div className="col-md-2">
      <label>Select Supp/Cust:</label>
    </div>
    <div className="col-md-2">
      <input type="text" className="form-control" placeholder="Enter Supp/Cust" />
    </div>
    <div className="col-md-1">
      <button type="button" className="pobtn">Search</button>
    </div>
    <div className="col-md-1">
      <label>Select DC:</label>
    </div>
    <div className="col-md-2">
      <select className="form-select">
        <option value="1">DC 1</option>
        <option value="2">DC 2</option>
      </select>
    </div>
    <div className="col-md-1">
      <button type="button" className="pobtn">Cancel</button>
    </div>
  </div>

  {/* Third Row */}
  <div className="row align-items-center">
    <div className="col-md-2">
      <label>Select Item:</label>
    </div>
    <div className="col-md-2">
      <input type="text" className="form-control" placeholder="Enter Item" />
    </div>
    <div className="col-md-1">
      <button type="button" className="btn">Add</button>
    </div>
    <div className="col-md-3">
      <button type="button" className="btn">Pending Release DC Item</button>
    </div>
  </div>
</div>


                  <div className="Dcgrnstatus">
                    <div className="container-fluid  text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr no.</th>
                              <th>PO No.</th>
                              <th>Item No | Code</th>
                              <th>Description</th>
                              <th>Rate</th>
                              <th>DC Qty</th>
                              <th>Bal Qty</th>
                              <th>Chal Qty</th>
                              <th>GRN Qty</th>
                              <th>Short/Excess Qty</th>
                              <th>Unit Code</th>
                              <th>Total</th>
                              <th>HeatCode</th>
                              <th>Remark</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Enter Item Code"
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Enter Challan Qty"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Enter GRN Qty"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Material Rate"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Heat No"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="Cust. Heat No"
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="HC"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="HC"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="HC"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="HC"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="HC"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control p-2"
                                  placeholder="HC"
                                />
                              </td>
                              <td>
                                <textarea></textarea>
                              </td>
                              <td>
                                <FaEdit />
                              </td>
                              <td>
                                <FaTrash />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div
                    className="StoreInwardJobworkFooter"
                    style={{ marginTop: "50px" }}
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
                          Gernal Details
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
                        <div className="StoreDcgrn text-start">
                          <div className="container-fluid">
                            <form>
                              <div className="row">
                                <div className="col-md-4 text-start">
                                  <div className="container-fluid">
                                    <div className="table-responsive">
                                      <table className="table table-bordered">
                                        <tbody>
                                          <tr>
                                            <th className="col-md-4">
                                              GRN No:
                                            </th>
                                            <td>
                                              <div className="d-flex">
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="InwardF4No"
                                              />
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="InwardF4No"
                                              />
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>GRN Date:</th>
                                            <td>
                                              <input
                                                type="date"
                                                className="form-control"
                                                name="InwardDate"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>GRN Time:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="InwardTime"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Challan No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="ChallanDate"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Challan Date:</th>
                                            <td>
                                              <input
                                                type="date"
                                                className="form-control"
                                                name="ChallanDate"
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
                                            <th>Vehicle No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="SubVendor"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>LR No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="DcNo"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th className="col-md-4">
                                              Transporter:
                                            </th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="DcDate"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Prepared By:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="EWayBillQty"
                                              />
                                            </td>
                                          </tr>

                                          <tr>
                                            <th>Checked By /Approved By:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="VehicleNo"
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
                                                type="text"
                                                className="form-control"
                                                name="Remark"
                                                rows="2"
                                              ></textarea>
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Delivery In Time:</th>
                                            <td>
                                            <div className="col-md-2">
                                              <input
                                                type="checkbox"
                                                name="DeliveryInTime"
                                              />
                                              Yes
                                              <input
                                                type="checkbox"
                                                name="DeliveryInTime"
                                              />
                                              No
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Total Amt:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="VehicleNo"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>QC Check:</th>
                                            <td>
                                            <div className="col-md-2">
                                              <input
                                                type="checkbox"
                                                name="DeliveryInTime"
                                              />
                                              Quantity
                                              <input
                                                type="checkbox"
                                                name="DeliveryInTime"
                                              />
                                              Quality
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              colspan="2"
                                              className="text-center"
                                            >
                                              <button
                                                type="submit"
                                                className="btn"
                                              >
                                                Save GRN
                                              </button>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
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

export default Dcgrn;
