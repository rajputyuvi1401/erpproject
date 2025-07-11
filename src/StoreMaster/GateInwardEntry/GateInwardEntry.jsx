import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import { Link } from "react-router-dom";
import "./GateInwardEntry.css";

const GateInwardEntry = () => {
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
    <div className="NewStoreGateInward">
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
               
                <div className="GateInward1-header  mb-4 text-start">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                          <h5 className="header-title">
                            Gate Entry Inward Register
                          </h5>
                        </div>

                        <div className="col-md-9 text-end">
                          
                            <Link className="vndrbtn" to={"/New-Gate-Entry"} > New Gate Entry </Link>
                            <Link className="vndrbtn" to={"/ "} >Gate Inward Material Reg</Link>
                            <Link className="vndrbtn" to={"/ "} >Export Excel</Link>
                            <Link className="vndrbtn" to={"/GEIQuery"} >Gate Entry Inward - Query</Link>

                        </div>
                     </div>
                </div>

                <div className="GateInward-main1 mt-3">

                    <div className="container-fluid">
                      <div className="row mt-4">
                        <div className="col-md-12">
                          <form className="row g-3 text-start">
                            {/* From Date */}
                            <div className="col-md-2 col-sm-6">
                              <label className="form-label">From Date</label>
                              <input type="date" className="form-control mt-1" />
                            </div>

                            {/* To Date */}
                            <div className="col-md-2 col-sm-6">
                              <label className="form-label">To Date</label>
                              <input type="date" className="form-control mt-1" />
                            </div>

                            {/* Plant */}
                            <div className="col-md-2 col-sm-6">
                              <label className="form-label">Plant</label>
                              <select className="form-select">
                                <option value="Produlink">Produlink</option>
                                {/* Add more options here */}
                              </select>
                            </div>

                            {/* Type */}
                            <div className="col-md-2 col-sm-6">
                              <label className="form-label">Type</label>
                              <select className="form-select">
                                <option value="">Select Type</option>
                                <option value="PurchaseGRN">Purchase GRN</option>
                                <option value="ScheduleGRN">Schedule GRN</option>
                                <option value="ImportGRN">Import GRN</option>
                                <option value="57F4GRN">57F4 GRN</option>
                                <option value="jobworkGRN">jobwork GRN</option>
                                <option value="DC GRN">DC GRN</option>
                                <option value="InterStoreInvoice">
                                  Inter Store Invoice
                                </option>
                                <option value="InterStoreChallan">
                                  Inter Store Challan
                                </option>
                                <option value="Sales Return">Sales Return</option>
                                <option value="DirectGRN">Direct GRN</option>
                                <option value="General/Document/Courier">
                                  General/Document/Courier
                                </option>
                              </select>
                            </div>

                            {/* Status */}
                            <div className="col-md-2 col-sm-6">
                              <label className="form-label">Status</label>
                              <select className="form-select">
                                <option value="">Select Status</option>
                                <option value="Pending">Pending</option>
                              </select>
                            </div>

                            {/* Supplier Name */}
                            <div className="col-md-2 col-sm-6">
                              <label className="form-label">Supplier Name</label>
                              <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Supplier Name"
                              />
                            </div>

                            {/* Item Name */}
                            <div className="col-md-2 col-sm-6">
                              <label className="form-label">Item Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Item Name"
                              />
                            </div>

                            {/* Gate Entry No. */}
                            <div className="col-md-2 col-sm-6">
                              <label className="form-label">Gate Entry No.</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Gate Entry No."
                              />
                            </div>

                            {/* Search Button */}
                            <div className="col-md-2 col-sm-6 mt-5 align-self-end">
                              <button type="submit" className="vndrbtn">
                                Search
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="StoreGateInward1">
                      <div className="container-fluid mt-4 text-start">
                        <div className="table-responsive">
                          <table className="table table-bordered table-striped">
                            <thead>
                              <tr>
                                <th>Sr no.</th>
                                <th>Year</th>
                                <th>Plant</th>
                                <th>Entry No</th>
                                <th>Entry Date</th>
                                <th>Entry Time</th>
                                <th>Type</th>
                                <th>Custo/Supplier Name</th>
                                <th>Challan No</th>
                                <th>Challan Date</th>
                                <th>Invoice No</th>
                                <th>Invoice Date</th>
                                <th>Ref Doc Date</th>
                                <th>Cancel</th>
                                <th>User</th>
                                <th>Delete</th>
                                <th>Edit</th>
                                <th>View</th>
                              </tr>
                            </thead>
                            <tbody>{/* Table rows will go here */}</tbody>
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

export default GateInwardEntry;
