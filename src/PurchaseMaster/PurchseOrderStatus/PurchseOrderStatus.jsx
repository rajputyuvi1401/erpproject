import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./PurchseOrderStatus.css";

const PurchseOrderStatus = () => {
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
    <div className="NewOrderStatusMaster">
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
                <div className="PurchaseOrderstatus-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title text-start">
                        Pending MRN Release List
                      </h5>
                    </div>
                    <div className="col-md-8 text-end">
                      <div className="row justify-content-end">
                        <div className="col-md-2 mt-2 d-flex align-items-center">
                          <input type="checkbox" id="sendEmail" />
                          <label htmlFor="sendEmail" className="ms-2">
                            Send Email
                          </label>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                          <button className="pobtn">Export To Excel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Purchaseorderstatus">
                  <div className="container mt-4">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Series</th>
                            <th>PO Type</th>
                            <th>Item Status</th>
                            <th>PO Status</th>
                            <th>PO Approve</th>
                            <th>
                              <input type="checkbox" id="supplier" />
                              <label htmlFor="supplier" className="ml-2">
                                Supplier
                              </label>
                            </th>
                            <th>
                              <input type="checkbox" id="item" />
                              <label htmlFor="item" className="ml-2">
                                Item
                              </label>
                            </th>
                            <th>
                              <input type="checkbox" id="poNo" />
                              <label htmlFor="poNo" className="ml-2">
                                PO No
                              </label>
                            </th>
                            <th>
                              <input type="checkbox" id="itemGroup" />
                              <label htmlFor="itemGroup" className="ml-2">
                                Item Group POWise
                              </label>
                            </th>
                            <th>
                              <input type="checkbox" id="supportETA" />
                              <label htmlFor="supportETA" className="ml-2">
                                Support By ETA Days
                              </label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="date" className="form-control" />
                            </td>
                            <td>
                              <input type="date" className="form-control" />
                            </td>
                            <td>
                              <select className="form-control">
                                <option>Plant 1</option>
                                <option>Plant 2</option>
                                <option>Plant 3</option>
                              </select>
                            </td>
                            <td>
                              <select className="form-control">
                                <option>Type 1</option>
                                <option>Type 2</option>
                                <option>Type 3</option>
                              </select>
                            </td>
                            <td>
                              <select className="form-control">
                                <option>Status 1</option>
                                <option>Status 2</option>
                                <option>Status 3</option>
                              </select>
                            </td>
                            <td>
                              <select className="form-control">
                                <option>Status 1</option>
                                <option>Status 2</option>
                                <option>Status 3</option>
                              </select>
                            </td>
                            <td>
                              <select className="form-control">
                                <option>Approve 1</option>
                                <option>Approve 2</option>
                                <option>Approve 3</option>
                              </select>
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
                              <input
                                type="checkbox"
                                id="snowBalQty"
                                className="text-start"
                              />
                              <label
                                htmlFor="snowBalQty"
                                className="form-control"
                              >
                                Snow Bal Qty Only
                              </label>
                            </td>
                            <td>
                              <button className="pobtn">Search</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="Purchaseordertable">
                    <div className="container mt-4">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr</th>
                              <th>Year</th>
                              <th>PO No</th>
                              <th>PO Date</th>
                              <th>PO Type</th>
                              <th>Supplier Name</th>
                              <th>Item No</th>
                              <th>Item Desc</th>
                              <th>ETA Date</th>
                              <th>ETA Days</th>
                              <th>Rate</th>
                              <th>GRN</th>
                              <th>Disc (%)</th>
                              <th>PO Qty</th>
                              <th>Challan Qty</th>
                              <th>GRN Qty</th>
                              <th>Bal Qty</th>
                              <th>Follow up</th>
                              <th>Status (%)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>{/* Data rows will go here */}</tr>
                          </tbody>
                        </table>
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

export default PurchseOrderStatus;
