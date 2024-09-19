import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./MaterialIssueChallan.css";
const MaterialIssueChallan = () => {
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

  // Model
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);

  const handleModalClose1 = () => setShowModal1(false);
  const handleModalOpen1 = () => setShowModal1(true);

  const handleModalClose2 = () => setShowModal2(false);
  const handleModalOpen2 = () => setShowModal2(true);

  return (
    <div className="NewStoreNewMaterialIssue">
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
                <div className="NewMaterialIssue-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-2 col-sm-6">
                      <h5 className="header-title text-start">
                        New Material Issue
                      </h5>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-4">
                      <div className="row mb-3">
                        <div className="col-4 col-sm-2">
                          <label htmlFor="seriesSelect" className="form-label">
                            Plant:
                          </label>
                        </div>
                        <div className="col-8 col-sm-3">
                          <select id="sharpSelect" className="form-select">
                            <option selected>Sharp</option>
                          </select>
                        </div>
                        <div className="col-12 col-sm-7 mt-2 mt-sm-0">
                          <input
                            type="text"
                            id="inputField"
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 text-end">
                      <div className="row justify-content-end">
                        <div className="col-12 d-flex flex-wrap justify-content-end">
                          <Link className="pobtn" to="/Work-Order-Material">
                            WorkOrder Material Issue Report
                          </Link>
                         
                          <Link className="pobtn" to="/Material-Issue">
                            Material Issue WorkOrder Only
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="NewMaterialIssue-main">
                  <div className="NewMaterialIssue">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-1 col-sm-2">
                          <label htmlFor="seriesSelect" className="form-label">
                            Series:
                          </label>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <select id="seriesSelect" className="form-select">
                            <option selected>Select</option>
                            <option value="Purchase GRN">Material Issue</option>
                          </select>
                        </div>
                        <div className="col-md-1 col-sm-2">
                          <label htmlFor="typeSelect" className="form-label">
                            Type:
                          </label>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <select id="typeSelect" className="form-select">
                            <option selected>Select</option>
                            <option value="Purchase GRN">Purchase GRN</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container-fluid text-start">
                    <div className="row mt-4">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Item :</th>
                                <th>Item Description</th>
                                <th>Available Stock</th>
                                <th>Machine</th>
                                <th>Store Name</th>
                                <th>Qty / Unit</th>
                                <th>Remark</th>
                                <th>MRN No.</th>
                                <th>Employee</th>
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
                                    <button className="pobtn ms-2">
                                      Search
                                    </button>
                                  </div>
                                </td>
                                <td>
                                  <textarea
                                    name="Description"
                                    rows="1"
                                    className="form-control"
                                  ></textarea>
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    name="Available Stock"
                                    className="form-control"
                                  />
                                </td>
                                <td>
                                  <select
                                    name="Machine"
                                    className="form-select"
                                  >
                                    <option>Select</option>
                                    <option value="Critical">Critical</option>
                                    <option value="Regular">Regular</option>
                                  </select>
                                </td>
                                <td>
                                  <input type="text" className="form-control" />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    name="Qty/Unit"
                                    className="form-control"
                                  />
                                  <select className="form-select mt-2">
                                    <option>Select</option>
                                    <option value="Critical">Critical</option>
                                  </select>
                                </td>
                                <td>
                                  <textarea
                                    name="Remark"
                                    className="form-control"
                                  ></textarea>
                                </td>
                                <td>
                                  <input type="text" className="form-control" />
                                </td>
                                <td>
                                  <input type="text" className="form-control" />
                                  <select className="form-select mt-2">
                                    <option>Select</option>
                                    <option value="Critical">Critical</option>
                                  </select>
                                </td>
                                <td>
                                  <button type="submit" className="pobtn">
                                    Add
                                  </button>
                                </td>
                              </tr>
                              {/* Add more rows as needed */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="NewMaterialIssuetable">
                    <div className="container-fluid mt-4 text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr no.</th>
                              <th>Item Desc</th>
                              <th>BOM | WO | Req. Qty</th>
                              <th>Issued | Bal Qty</th>
                              <th>Stock</th>

                              <th>
                                Qty{" "}
                                <button
                                  className="newbtn"
                                  onClick={handleModalOpen}
                                >
                                  Add
                                </button>
                              </th>
                              <th>
                                Machine{" "}
                                <button
                                  className="newbtn"
                                  onClick={handleModalOpen1}
                                >
                                  Add
                                </button>
                              </th>
                              <th>Nature of Work</th>
                              <th>
                                MRN No:{" "}
                                <button
                                  className="newbtn"
                                  onClick={handleModalOpen1}
                                >
                                  Add
                                </button>
                                Cail No:
                              </th>
                              <th>
                                Employee:{" "}
                                <button
                                  className="newbtn"
                                  onClick={handleModalOpen2}
                                >
                                  See All
                                </button>
                              </th>

                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>

                              <td>
                                <FaEdit className="text-primary" />
                              </td>
                              <td>
                                <FaTrash className="text-danger" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* Models */}
                    </div>
                    <div
                      className={`modal fade ${
                        showModal ? "show d-block" : ""
                      }`}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Search</h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={handleModalClose}
                            >
                              X
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="container-fluid">
                              <div className="row mb-3">
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Select Employee:
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button type="button" className="newbtn1">
                              See ALL
                            </button>
                            <button
                              type="button"
                              className="newbtn1"
                              onClick={handleModalClose}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`modal fade ${
                        showModal1 ? "show d-block" : ""
                      }`}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Add Type</h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={handleModalClose1}
                            >
                              X
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="container-fluid">
                              <div className="row mb-3">
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Select Employee:
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="newbtn1"
                              onClick={handleModalClose1}
                            >
                              Close
                            </button>
                            <button type="button" className="newbtn1">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`modal fade ${
                        showModal2 ? "show d-block" : ""
                      }`}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Add Type</h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={handleModalClose2}
                            >
                              X
                            </button>
                          </div>
                          <div className="modal-body">
                            {/* Content of the modal */}
                            <p>Type form fields here.</p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="newbtn1"
                              onClick={handleModalClose2}
                            >
                              Close
                            </button>
                            <button type="button" className="newbtn1">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="NewgrnFooter">
  <div className="container-fluid">
    {/* Remarks Section */}
    <div className="row justify-content-end align-items-center mb-3">
      <div className="col-md-1 text-end">
        <label className="form-label">Remarks:</label>
      </div>
      <div className="col-md-3">
        <textarea
          cols="3"
          className="form-control"
          placeholder="Enter remarks here..."
        ></textarea>
      </div>
    </div>

    {/* Input Fields */}
    <div className="row g-3">
      {/* M Issue No */}
      <div className="col-md-2">
        <div className="row align-items-center">
          <div className="col-4 col-md-4 text-end">
            <label>M Issue No:</label>
          </div>
          <div className="col-4 col-md-4">
            <input className="form-control mb-2" placeholder="No" />
          </div>
          <div className="col-4 col-md-4">
            <input className="form-control" placeholder="Details" />
          </div>
        </div>
      </div>

      {/* M Issue Date */}
      <div className="col-md-2">
        <div className="row align-items-center">
          <div className="col-4 text-end">
            <label>M Issue Date:</label>
          </div>
          <div className="col-8">
            <input type="date" className="form-control" />
          </div>
        </div>
      </div>

      {/* M Issue Time */}
      <div className="col-md-2">
        <div className="row align-items-center">
          <div className="col-4 text-end">
            <label>M Issue Time:</label>
          </div>
          <div className="col-8">
            <input type="text" className="form-control" placeholder="Time" />
          </div>
        </div>
      </div>

      {/* Project */}
      <div className="col-md-1">
        <div className="row align-items-center">
          <div className="col-4 text-end">
            <label>Project:</label>
          </div>
          <div className="col-8">
            <select className="form-select">
              <option>Select</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contractor */}
      <div className="col-md-2">
        <div className="row align-items-center">
          <div className="col-4 text-end">
            <label>Contractor:</label>
          </div>
          <div className="col-8">
            <select className="form-select">
              <option>Select</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save & Clear Buttons */}
      <div className="col-md-2 d-flex justify-content-end align-items-center">
        <button className="btn w-100">Save Challan</button>
      </div>
      <div className="col-md-1 d-flex justify-content-end align-items-center">
        <button className="btn w-100">Clear</button>
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

export default MaterialIssueChallan;
