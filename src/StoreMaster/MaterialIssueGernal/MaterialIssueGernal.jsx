import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";

import { FaEdit, FaTrash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./MaterialIssueGernal.css";
const MaterialIssueGernal = () => {
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

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);



  const handleModalClose1 = () => setShowModal1(false);
  const handleModalOpen1 = () => setShowModal1(true);

  const handleModalClose2 = () => setShowModal2(false);
  const handleModalOpen2 = () => setShowModal2(true);

  return (
    <div className="NewStoreNewMaterialGernal">
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
              <div className="NewMaterialGernal-header">
  <div className="row flex-wrap align-items-center">
    <div className="col-md-3 col-sm-6">
      <h5 className="header-title text-start">
        New General Material Issue
      </h5>
    </div>
    <div className="col-md-9 col-sm-12 mt-4">
      <div className="row flex-nowrap align-items-center mb-3">
        
        {/* Plant Label and Select */}
        <div className="col-auto">
          <label htmlFor="plantSelect" className="form-label">
            Plant:
          </label>
        </div>
        <div className="col-auto">
          <select id="plantSelect" className="form-select">
            <option selected>Sharp</option>
          </select>
        </div>
        
        {/* Series Label and Select */}
        <div className="col-auto">
          <label htmlFor="seriesSelect" className="form-label">
            Series:
          </label>
        </div>
        <div className="col-auto">
          <select id="seriesSelect" className="form-select">
            <option selected>Select</option>
            <option value="Material Issue General">Material Issue General</option>
          </select>
        </div>

        {/* General Label and Select */}
        <div className="col-auto">
          <label htmlFor="generalSelect" className="form-label">
            General:
          </label>
        </div>
        <div className="col-auto">
          <select id="generalSelect" className="form-select">
            <option selected>Select</option>
            <option value="General">General</option>
            <option value="MRN">MRN</option>
          </select>
        </div>

        {/* Input Field */}
        <div className="col-2 mt-2 mt-sm-0">
          <input
            type="text"
            id="inputField"
            className="form-control"
            placeholder="Enter value"
          />
        </div>
      </div>
    </div>
  </div>
</div>


                <div className="NewMaterialGernal-main">
                 

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
                               
                                <th>Stock Status</th>
                                <th>
        Machine
        <div className="form-check d-inline-block">
          <input type="checkbox" className="form-check-input" id="machineMaster" />
          <label className="form-check-label" htmlFor="machineMaster">Master</label>
        </div>
        <div className="form-check d-inline-block ms-2">
          <input type="checkbox" className="form-check-input" id="machineOther" />
          <label className="form-check-label" htmlFor="machineOther">Other</label>
        </div>
      </th>
      <th>Qty / Unit</th>
      <th>Remark</th>
      <th>MRN No.</th>
      <th>
        Employee
        <div className="form-check d-inline-block">
          <input type="checkbox" className="form-check-input" id="employeeMaster" />
          <label className="form-check-label" htmlFor="employeeMaster">Master</label>
        </div>
        <div className="form-check d-inline-block ms-2">
          <input type="checkbox" className="form-check-input" id="employeeOther" />
          <label className="form-check-label" htmlFor="employeeOther">Other</label>
        </div>
      </th>
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
                                    name="stock"
                                    className="form-select"
                                  >
                                    <option>Select</option>
                                    <option value="Critical">Critical</option>
                                    <option value="Regular">Regular</option>
                                  </select>
                                  <input type="text" className="form-control" />
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
                                  <input type="text" className="form-control" />
                                </td>
                                <td>
                                  <input type="text" className="form-control" />
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

                  <div className="NewMaterialGernaltable">
                    <div className="container-fluid mt-4 text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr no.</th>
                              <th>Item Desc</th>
                              <th>Qty</th>
                             
                              <th>Stock Status</th>

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

                  <div className="NewMaterialGernalFooter">
                    <div className="container-fluid">
                    
                      

                      {/* Input Fields */}
                      <div className="row g-3">
                        {/* M Issue No */}
                        <div className="col-md-3">
                          <div className="row align-items-center">
                            <div className="col-4 col-md-4 text-end">
                              <label>M Issue No:</label>
                            </div>
                            <div className="col-4 col-md-4">
                              <input
                                className="form-control mb-2"
                                placeholder="No"
                              />
                            </div>
                            <div className="col-4 col-md-4">
                              <input
                                className="form-control"
                                placeholder="Details"
                              />
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
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Time"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Project */}
                        <div className="col-md-2">
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

                        

                        {/* Save & Clear Buttons */}
                        <div className="col-md-2 d-flex justify-content-end align-items-center">
                          <button className="pobtn w-100">
                            Save Challan
                          </button>
                        </div>
                        <div className="col-md-1 d-flex justify-content-end align-items-center">
                          <button className="pobtn w-100">
                            Clear
                          </button>
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

export default MaterialIssueGernal;
