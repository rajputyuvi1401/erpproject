import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import { FaEye, FaPlus } from "react-icons/fa";
import Cached from "@mui/icons-material/Cached.js";
import "./ProductionEntryAss.css";

const ProductionEntryAss = () => {
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
    <div className="AssemblyEntryMaster">
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
                <div className="AssemblyEntry mt-5">
                  <div className="AssemblyEntry-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">Assembly Prod Entry</h5>
                      </div>
                      <div className="col-md-1">Plant</div>
                      <div className="col-md-1">
                        <select>
                          <option>Select</option>
                        </select>
                      </div>
                      <div className="col-md-1">Series</div>
                      <div className="col-md-1">
                        <select>
                          <option>Select</option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <label className="checkbox-label">
                          <input type="checkbox" id="general" />
                          General
                        </label>
                      </div>

                      <div className="col-md-5 text-end">
                        <button type="button" className="btn">
                          Production List
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="AssemblyEntry-main mt-5">
                    <div className="AssemblyEntry-tabs">
                      <ul
                        className="nav nav-tabs"
                        id="AssembleEntryTabs"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="production-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#production"
                            type="button"
                            role="tab"
                          >
                            A. Production Data
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="itemstock-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#itemstock"
                            type="button"
                            role="tab"
                          >
                            B. Item Stock Details
                          </button>
                        </li>
                      </ul>
                      <div
                        className="tab-content mt-4"
                        id="productionEntryTabsContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="production"
                          role="tabpanel"
                        >
                          <div className="row text-start">
                            {/* First Column */}
                            <div className="col-md-4">
                              {/* Prod. No */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="prod-no">Prod. No :</label>
                                </div>
                                <div className="col-3">
                                  <input
                                    id="prod-no"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-3">
                                  <input
                                    id="prod-no"
                                    placeholder="232400001"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-2">
                                  <button type="button" className="btn">
                                    <Cached />
                                  </button>
                                </div>
                              </div>

                              {/* Contractor */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="contractor">
                                    Contractor :
                                  </label>
                                </div>
                                <div className="col-8">
                                  <select className="form-control">
                                    <option>Select</option>
                                  </select>
                                </div>
                              </div>

                              {/* UNIT/Machine */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="unit-machine">
                                    UNIT/Machine :
                                  </label>
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                  <select className="form-control flex-grow-1">
                                    <option>Select</option>
                                  </select>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary ml-2"
                                  >
                                    📋
                                  </button>
                                </div>
                              </div>

                              {/* Item */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="item">FG Item :</label>
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                  <select className="form-control flex-grow-1">
                                    <option>ALL</option>
                                  </select>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary ml-2"
                                  >
                                    Select
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary ml-2"
                                  >
                                    <FaEye />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary ml-2"
                                  >
                                    📋
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary ml-2"
                                  >
                                    📝
                                  </button>
                                </div>
                              </div>

                              {/* Operation */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="operation">Operation :</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    id="operation"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Prod. Qty */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="prod-qty">Prod. Qty :</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    id="prod-qty"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Prod. Qty */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="prod-qty">
                                    Change Produced Qty:
                                  </label>
                                </div>
                                <div className="col-8">
                                  <input
                                    id="prod-qty"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Second Column */}
                            <div className="col-md-4">
                              {/* Date & Time */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="date">Date & Time :</label>
                                </div>
                                <div className="col-4">
                                  <input
                                    id="date"
                                    type="datetime-local"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-4">
                                  <input
                                    id="time"
                                    type="datetime-local"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Supervisor */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="supervisor">
                                    Supervisor :
                                  </label>
                                </div>
                                <div className="col-8">
                                  <input
                                    id="supervisor"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Machine Speed */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="machine-speed">Helper:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    id="supervisor"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Prod Time */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="prod-text">Prod Time :</label>
                                </div>
                                <div className="col-8 d-flex">
                                  <input type="text" className="form-control" />
                                  <input
                                    type="text"
                                    className="form-control ml-2"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Third Column */}
                            <div className="col-md-4">
                              {/* Shift */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="shift">Shift :</label>
                                </div>
                                <div className="col-8">
                                  <select className="form-control">
                                    <option>Select</option>
                                  </select>
                                </div>
                              </div>

                              {/* Operator */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="operator">Operator :</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    id="operator"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="shift">Heat/ Lot No:</label>
                                </div>
                                <div className="col-8">
                                  <select className="form-control">
                                    <option>Select</option>
                                  </select>
                                </div>
                              </div>

                              {/* Rework and Reject Qty */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="rework-qty">
                                    Rework Qty :
                                  </label>
                                </div>
                                <div className="col-8 d-flex">
                                  <input
                                    id="rework-qty"
                                    type="text"
                                    className="form-control"
                                  />
                                  <label htmlFor="reject-qty" className="ml-2">
                                    Reject Qty :
                                  </label>
                                  <input
                                    id="reject-qty"
                                    type="text"
                                    className="form-control ml-2"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="itemstock"
                          role="tabpanel"
                        >
                          <div className="table table-bordered table-responsive">
                            <table>
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 p-2">
                                    Sr.
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Item Group
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Alt. Item
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Item No
                                  </th>

                                  <th className="border border-gray-300 p-2">
                                    Item Code
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Desc
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Bom_Qty
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Req Qty
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Stock
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="AssemblyEntry-bottom mt-5">
                    <div className="AssemblyEntry-tabs">
                      <ul
                        className="nav nav-tabs"
                        id="productionEntryTabs1"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="shift-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#shift"
                            type="button"
                            role="tab"
                          >
                            Shift / Cycle Time
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="machine-idle-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#machineIdle"
                            type="button"
                            role="tab"
                          >
                            Machine Idle Time
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="rework-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#rework"
                            type="button"
                            role="tab"
                          >
                            Rework / Reject Reason
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="tool-die-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#toolDie"
                            type="button"
                            role="tab"
                          >
                            Tool and Die Details
                          </button>
                        </li>
                      </ul>
                      <div
                        className="tab-content mt-4"
                        id="productionEntryTabsContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="shift"
                          role="tabpanel"
                        >
                          <div className="table table-bordered table-responsive">
                            <table>
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 p-2">
                                    Shift From..To
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Break From..To
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Break Total
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Shift Time
                                  </th>

                                  <th className="border border-gray-300 p-2">
                                    Cycle Time
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    OP Time
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    L/U Time
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    M/O Time
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Total Time
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="row">
                            <div className="table table-responsive">
                              <table>
                                <thead>
                                  <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-2">
                                      Scrap / End Piece Code :
                                    </th>
                                    <th className="border border-gray-300 p-2">
                                      Scrap / End Piece Qty:
                                    </th>
                                    <th className="border border-gray-300 p-2">
                                      Scrap / End Piece Remark:
                                    </th>
                                    <th className="border border-gray-300 p-2">
                                      BOM Scrap Code:
                                    </th>
                                    <th className="border border-gray-300 p-2">
                                      BOM Scrap Wt:
                                    </th>
                                    <th className="border border-gray-300 p-2">
                                      Scrap /End Qty :
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="border border-gray-300 p-2">
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                    </td>
                                    <td className="border border-gray-300 p-2">
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

                        <div
                          className="tab-pane fade"
                          id="machineIdle"
                          role="tabpanel"
                        >
                          <div className="table table-bordered table-responsive">
                            <table>
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 p-2">
                                    Idle Reason:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    From:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    To:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Total Time:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Supervisor /Operators:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Setting Part:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Remark:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Add:
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 p-2">
                                    <div className="flex">
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                    </div>
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <div className="flex">
                                      <input
                                        type="time"
                                        className="form-control"
                                      />
                                    </div>
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="time" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="time" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <button type="button" className="btn">
                                      Add
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="table table-bordered table-responsive">
                            <table>
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 p-2">
                                    S no.:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Reason:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    From Time:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    To Time:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Idle Time:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Operator Name:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Setting Part:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Remark:
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Delete:
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 p-2">
                                    <div className="flex">
                                      <input type="text" className="w-1/2" />
                                    </div>
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <div className="flex">
                                      <input type="time" className="w-1/2" />
                                    </div>
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="time"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="time"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <button type="button" className="btn">
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="rework"
                          role="tabpanel"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-1">
                                  <label>Rework</label>
                                </div>
                                <div className="col-md-2">
                                  <select>
                                    <option>Select</option>
                                  </select>
                                </div>
                                <div className="col-md-1">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    Add
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    <FaPlus />
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    <Cached />
                                  </button>
                                </div>
                              </div>
                              <div className="row">
                                <div className="table table-bordered table-responsive">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Sr no.</th>
                                        <th>Description</th>
                                        <th>Qty</th>
                                        <th>Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Sr no.</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-1">
                                  <label>Reject</label>
                                </div>
                                <div className="col-md-2">
                                  <select>
                                    <option>Select</option>
                                  </select>
                                </div>
                                <div className="col-md-1">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    Add
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    <FaPlus />
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    <Cached />
                                  </button>
                                </div>
                              </div>
                              <div className="row">
                                <div className="table table-bordered table-responsive">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Sr no.</th>
                                        <th>Description</th>
                                        <th>Qty</th>
                                        <th>Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Sr no.</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="toolDie"
                          role="tabpanel"
                        >
                          <div className="row">
                            <div className="col-md-1">
                              <label>Die Name</label>
                            </div>
                            <div className="col-md-2">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-1">
                              <button type="button" className="btn">
                                Add
                              </button>
                            </div>
                          </div>

                          <div className="row">
                            <div className="table table-bordered table-responsive">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Sr no.</th>
                                    <th>Item Code</th>
                                    <th>Item Description</th>
                                    <th>Delete</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Sr no.</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row text-start">
                      <div className="col-md-1">
                        <label>Remark:</label>
                      </div>
                      <div className="col-md-1">
                        <textarea className="form-control"></textarea>
                      </div>
                      <div className="col-md-1">
                        <label>Target Qty:</label>
                      </div>
                      <div className="col-md-1 d-flex">
                        
                          <Cached/>
                        00
                        </div>
                       
                      <div className="col-md-1">
                        <label>Prod:</label>
                      </div>
                      <div className="col-md-1">
                        <select>
                          <option>Regular</option>
                        </select>
                      </div>
                      <div className="col-md-3 d-flex">
                        <div className="text-end s-4 d-flex">
                          <button type="button" className="btn">
                            Cancel
                          </button>
                          <button type="button" className="btn">
                            Save Entry
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row text-start">
                      <div className="col-md-2">
                        <label>Production Hours:</label>
                      </div>
                      <div className="col-md-1">
                        <input type="time" className="form-control"></input>
                      </div>
                      <div className="col-md-2">
                        <label>Idle Hours:</label>
                      </div>
                      <div className="col-md-1">
                        <input type="time" className="form-control"></input>
                      </div>
                      <div className="col-md-2">
                        <label>Actual Hours:</label>
                      </div>
                      <div className="col-md-1">
                        <input type="time" className="form-control"></input>
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

export default ProductionEntryAss;
