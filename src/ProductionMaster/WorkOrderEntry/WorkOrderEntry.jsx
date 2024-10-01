import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./WorkOrderEntry.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const WorkOrderEntry = () => {
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
    <div className="ProductionWorkOrderEntry">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                {/* Header Section */}
                <div className="WorkOrderEntry-header mb-4">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">New Work Order</h5>
                    </div>
                    <div className="col-md-8">
                      <div className="row align-items-center">
                        <label htmlFor="seriesSelect" className="col-md-3 form-label">Plant:</label>
                        <div className="col-md-2">
                          <select id="seriesSelect" className="form-select">
                            <option>Sharp</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 text-end">
                      <button className="produtionbtn">WorkOrder List</button>
                    </div>
                  </div>
                </div>

                {/* Form Section */}
                <div className="WorkOrderEntry-main">
                  <div className="row text-start">
                    <div className="col-md-4">
                      <div className="card p-3">
                        <h6 className="mb-3">Work Order Details</h6>
                        <div className="mb-2">
                          <label className="form-label">WO Series:</label>
                          <select className="form-select">
                            <option>Select</option>
                          </select>
                        </div>
                        <div className="mb-2">
                          <label className="form-label">WO Type:</label>
                          <select className="form-select">
                            <option>Select</option>
                          </select>
                        </div>
                        <div className="mb-2">
                          <label className="form-label">Schedule Month:</label>
                          <input type="month" className="form-control" />
                        </div>
                        <div className="mb-2">
                          <label className="form-label">WO No:</label>
                          <div className="d-flex">
                            <input type="text" className="form-control" />
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card p-3">
                        <h6 className="mb-3">Dates & Customer</h6>
                        <div className="mb-2">
                          <label className="form-label">WO Date:</label>
                          <input type="date" className="form-control" />
                        </div>
                        <div className="mb-2">
                          <label className="form-label">Target Date:</label>
                          <input type="date" className="form-control" />
                        </div>
                        <div className="mb-2">
                          <label className="form-label">Select Customer:</label>
                          <div className="d-flex">
                            <input type="text" className="form-control" />
                            <button className="ProWorkbtn">Search</button>
                          </div>
                        </div>
                        <div className="mb-2">
                          <label className="form-label">Select PO:</label>
                          <div className="d-flex">
                            <input type="text" className="form-control" />
                            <button className="ProWorkbtn">Add All Item</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card p-3">
                        <h6 className="mb-3">Item Details</h6>
                        <div className="mb-1">
                          <label className="form-label">Select Item:</label>
                          <div className="d-flex">
                            <input type="text" className="form-control" />
                            <button className="ProWorkbtn">Add</button>
                          </div>
                        </div>
                        <div className="text-center">
                          <button className="ProWorkbtn btn-info w-100">Pending CustPO For WorkOrder</button>
                        </div>
                        <div className="text-center">
                          <button className="ProWorkbtn btn-info w-100">Production From Existing Stock</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Table Section */}
                  <div className="WorkOrderEntry-table mt-4">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead className="table-light">
                          <tr>
                            <th>Sr No.</th>
                            <th>PO Details</th>
                            <th>Item No</th>
                            <th>Description</th>
                            <th>SO.Qty/Sch. Qty</th>
                            <th>Bal. Qty</th>
                            <th>Work Order Qty</th>
                            <th>Remark</th>
                            <th>Machine</th>
                            <th>Shift</th>
                            <th>Process</th>
                            <th>Raw Material</th>
                            <th>BOM</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Example Row */}
                          <tr>
                            <td>1</td>
                            <td><input type="text" className="form-control" placeholder="PO Details" /></td>
                            <td><input type="text" className="form-control" placeholder="Item No" /></td>
                            <td><input type="text" className="form-control" placeholder="Description" /></td>
                            <td><input type="text" className="form-control" placeholder="SO Qty" /></td>
                            <td><input type="text" className="form-control" placeholder="Bal Qty" /></td>
                            <td><input type="text" className="form-control" placeholder="WO Qty" /></td>
                            <td><textarea className="form-control" rows="1" placeholder="Remark"></textarea></td>
                            <td><input type="text" className="form-control" placeholder="Machine" /></td>
                            <td><input type="text" className="form-control" placeholder="Shift" /></td>
                            <td><input type="text" className="form-control" placeholder="Process" /></td>
                            <td><input type="text" className="form-control" placeholder="Raw Material" /></td>
                            <td><input type="text" className="form-control" placeholder="BOM" /></td>
                            <td><FaEdit className="text-primary" /></td>
                            <td><FaTrash className="text-danger" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="text-end mt-4">
                    <button className="productionsavebtn">Save Work Order</button>
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

export default WorkOrderEntry;
