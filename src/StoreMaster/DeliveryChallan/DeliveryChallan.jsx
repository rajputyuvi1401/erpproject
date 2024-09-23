import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./DeliveryChallan.css";

const DeliveryChallan = () => {
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
    <div className="NewStoreDeliverychallan">
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
                <div className="Deliverychallan-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">
                        Delivery Challan
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="Deliverychallan-main">
                  <div className="container-fluid text-start">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Plant:</th>
                                  <th>DC Series:</th>
                                  <th>DC Type:</th>
                                  <th>Inventory:</th>
                                  <th>Supp/Cust/Vendor:</th>
                                  <th>Address Code:</th>

                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <select
                                      id="sharpSelect"
                                      className="form-select"
                                    >
                                      <option selected>Sharp</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select className="form-select">
                                      <option>Select</option>
                                      <option value="Series1">Series1</option>
                                      <option value="Series2">Series2</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select className="form-select">
                                      <option>Select Type</option>
                                      <option value="Non-Returnable">
                                        Non-Returnable
                                      </option>
                                      <option value="Returnable">
                                        Returnable
                                      </option>
                                    </select>
                                  </td>
                                  <td>
                                    <select className="form-select">
                                      <option value="Without Inventory">
                                        Without Inventory
                                      </option>
                                      <option value="With Inventory">
                                        With Inventory
                                      </option>
                                    </select>
                                  </td>
                                  <td>
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                    <button type="button" className="btn">
                                      Search
                                    </button>
                                  </td>
                                  <td>
                                    <select className="form-select">
                                      <option></option>
                                    </select>
                                  </td>

                                  <td>
                                    <button type="button" className="btn">
                                      Cancel
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Select Item: </th>
                                  <th>Store</th>
                                  <th>Item Code</th>
                                  <th>Description</th>
                                  <th>Purpose</th>
                                  <th>Unit</th>
                                  <th>Rate</th>
                                  <th>Qty</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex">
                                      <input
                                        type="text"
                                        name="ItemCode"
                                        className="form-control"
                                      />
                                      <button className="pobtn">Search</button>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex">
                                      <select className="form-select">
                                        <option></option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex">
                                      <input className="form-control" />
                                      <span>HSN Code</span>
                                    </div>
                                  </td>
                                  <td>
                                    <textarea className="form-control"></textarea>
                                  </td>
                                  <td>
                                    <textarea className="form-control"></textarea>
                                  </td>
                                  <td>
                                    <input />
                                  </td>
                                  <td>
                                    <input />
                                  </td>
                                  <td>
                                    <input />
                                  </td>
                                  <td>
                                    <button type="submit" className="pobtn">
                                      ADD
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

                  <div className="Deliverychallanstatus">
                    <div className="container-fluid  text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr no.</th>
                              <th>Item No.</th>
                              <th>Item Code</th>
                              <th>Description</th>
                              <th>Purpose</th>
                              <th>Unit</th>
                              <th>Rate</th>
                              <th>Qty</th>
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
                                  placeholder="Enter Operation"
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
                    className="DeliverychallanFooter"
                    style={{ marginTop: "50px" }}
                  >
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                     
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-Gernal-Detail"
                        role="tabpanel"
                        aria-labelledby="pills-Gernal-Detail-tab"
                        tabindex="0"
                      >
                        <div className="StoreDeliverychallan text-start">
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
                                              Challan No:
                                            </th>
                                            <td>
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
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Vehicle No:</th>
                                            <td>
                                              <input
                                                type="date"
                                                className="form-control"
                                                name="InwardDate"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Contractor:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="InwardTime"
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
                                          <tr>
                                            <th>Transport:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="ChallanDate"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>E Way Bill No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="ChallanNo"
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
                                            <th>PO No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="SubVendor"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Ref.PErson No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="DcNo"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th className="col-md-4">LR No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="DcDate"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>PO Date:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="EWayBillQty"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Department:</th>
                                            <td>
                                              <selct>
                                                <option>select</option>
                                              </selct>
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Assessable Value:</th>
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
                                            <th>CGST:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="LrNo"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>SGST:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="Transporter"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>IGST:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="PreparedBy"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Grand Total:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="CheckedBy"
                                              />
                                            </td>
                                          </tr>

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
                                            <td
                                              colspan="2"
                                              className="text-center"
                                            >
                                              <button
                                                type="submit"
                                                className="btn"
                                              >
                                                Save Challan
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

export default DeliveryChallan;
