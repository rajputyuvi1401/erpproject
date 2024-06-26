import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import "./Supervisor.css";

const Supervisor = () => {
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

  const [showAddDepartment, setShowAddDepartment] = useState(false);
  const toggleAddDepartment = () => {
    setShowAddDepartment(!showAddDepartment);
  };

  const [showAddDepartmentCategory, setShowAddDepartmentCategory] =
    useState(false);
  const toggleAddDepartmentCategory = () => {
    setShowAddDepartmentCategory(!showAddDepartmentCategory);
  };
  return (
    <div className="Supervisor">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav
                sideNavOpen={sideNavOpen}
                toggleSideNav={toggleSideNav}
              />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="Supervisor1">
                  <div className="Supervisorupper">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-3 col-sm-6 text-start">
                          <h5 style={{ color: "blue" }}>
                            Operator / Supervisor / Staff Master
                          </h5>
                        </div>
                        <div className="col-md-2 col-sm-6 text-start">
                          <select id="contractor" className="form-select">
                            <option value="">SHARP</option>
                            {/* Add options here */}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="SupervisorMain">
                    <div className="container-fluid">
                      <form>
                        <div className="row text-start">
                          <div className="col-md-4 col-sm-12">
                            <div className="row mb-3">
                              <label
                                htmlFor="department"
                                className="col-sm-4 col-form-label"
                              >
                                Department:
                              </label>
                              <div className="col-sm-8">
                                <div className="input-group">
                                  <select
                                    id="department"
                                    className="form-select"
                                  >
                                    <option>Select Department</option>
                                    <option>Production</option>
                                    <option>Maintenance</option>
                                    <option>Quality</option>
                                    <option>Logistics</option>
                                  </select>
                                  <button
                                    type="button"
                                    className="Supbtn"
                                    onClick={toggleAddDepartment} // Toggle modal on click
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button type="button" className="Supbtn">
                                    <i className="fas fa-sync"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="name"
                                className="col-sm-4 col-form-label"
                              >
                                Name:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="address"
                                className="col-sm-4 col-form-label"
                              >
                                Address:
                              </label>
                              <div className="col-sm-8">
                                <textarea
                                  id="address"
                                  className="form-control"
                                  rows="3"
                                ></textarea>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="contact"
                                className="col-sm-4 col-form-label"
                              >
                                Contact No:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="tel"
                                  className="form-control"
                                  id="contact"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="birthdate"
                                className="col-sm-4 col-form-label"
                              >
                                Birth Date:
                              </label>
                              <div className="col-sm-8">
                                <div className="input-group">
                                  <input
                                    type="date"
                                    id="birthdate"
                                    className="form-control"
                                  />
                                  <span className="input-group-text">
                                    <i className="fas fa-calendar-alt"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="salary"
                                className="col-sm-4 col-form-label"
                              >
                                Salary:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="salary"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="dateOfLeaving"
                                className="col-sm-4 col-form-label"
                              >
                                Date of Leaving:
                              </label>
                              <div className="col-sm-8">
                                <div className="input-group">
                                  <input
                                    type="date"
                                    id="dateOfLeaving"
                                    className="form-control"
                                  />
                                  <span className="input-group-text">
                                    <i className="fas fa-calendar-alt"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="aadhaar"
                                className="col-sm-4 col-form-label"
                              >
                                Aadhaar No:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="aadhaar"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <div className="row mb-3">
                              <label
                                htmlFor="code"
                                className="col-sm-4 col-form-label"
                              >
                                Code:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="code"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="designation"
                                className="col-sm-4 col-form-label"
                              >
                                Designation:
                              </label>
                              <div className="col-sm-8">
                                <div className="input-group">
                                  <select
                                    id="designation"
                                    className="form-select"
                                  >
                                    <option>Select..</option>
                                    <option>Supervisor</option>
                                    <option>Manager</option>
                                    <option>Staff</option>
                                  </select>
                                  <span className="input-group-text">
                                    <i className="fas fa-plus"></i>
                                  </span>
                                  <span className="input-group-text">
                                    <i className="fas fa-sync"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="correspondingAddress"
                                className="col-sm-4 col-form-label"
                              >
                                Corresponding Address:
                              </label>
                              <div className="col-sm-8">
                                <textarea
                                  id="correspondingAddress"
                                  className="form-control"
                                  rows="3"
                                ></textarea>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="type"
                                className="col-sm-4 col-form-label"
                              >
                                Type:
                              </label>
                              <div className="col-sm-8">
                                <select id="type" className="form-select">
                                  <option>Select..</option>
                                  <option>Permanent</option>
                                  <option>Contract</option>
                                </select>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="joiningDate"
                                className="col-sm-4 col-form-label"
                              >
                                Joining Date:
                              </label>
                              <div className="col-sm-8">
                                <div className="input-group">
                                  <input
                                    type="date"
                                    id="joiningDate"
                                    className="form-control"
                                  />
                                  <span className="input-group-text">
                                    <i className="fas fa-calendar-alt"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="contractor"
                                className="col-sm-4 col-form-label"
                              >
                                Contractor:
                              </label>
                              <div className="col-sm-8">
                                <div className="input-group">
                                  <select
                                    id="contractor"
                                    className="form-select"
                                  >
                                    <option>Select..</option>
                                    <option>Contractor 1</option>
                                    <option>Contractor 2</option>
                                  </select>
                                  <span className="input-group-text">
                                    <i className="fas fa-plus"></i>
                                  </span>
                                  <span className="input-group-text">
                                    <i className="fas fa-sync"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="workingHours"
                                className="col-sm-4 col-form-label"
                              >
                                Daily Working Hours:
                              </label>
                              <div className="col-sm-8">
                                <div className="input-group">
                                  <input
                                    type="number"
                                    id="workingHours"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="panNo"
                                className="col-sm-4 col-form-label"
                              >
                                PAN No:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="panNo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <div className="row mb-3">
                              <label
                                htmlFor="bankName"
                                className="col-sm-4 col-form-label"
                              >
                                Bank Name:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="bankName"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="bankAccountNo"
                                className="col-sm-4 col-form-label"
                              >
                                Bank Account No:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="bankAccountNo"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="bankIFSC"
                                className="col-sm-4 col-form-label"
                              >
                                Bank IFSC Code:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="bankIFSC"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Add Department Modal/Card */}
                        {showAddDepartment && (
                          <div className="modal-container">
                            <div className="card">
                              <div className="card-header">
                                <h5 className="card-title">
                                  Department Master
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  aria-label="Close"
                                  onClick={toggleAddDepartment}
                                >
                                  X
                                </button>
                              </div>
                              <div className="card-body">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <p>Department Name</p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="row mb-3">
                                      <label
                                        htmlFor="department"
                                        className="col-sm-2 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-4">
                                        <div className="input-group">
                                          <select
                                            id="department"
                                            className="form-select"
                                          >
                                            <option>Select Category</option>
                                            <option>Production</option>
                                            <option>Maintenance</option>
                                            <option>Quality</option>
                                            <option>Logistics</option>
                                          </select>
                                          <button
                                            type="button"
                                            className="Supbtn"
                                            onClick={
                                              toggleAddDepartmentCategory
                                            }
                                          >
                                            New
                                          </button>
                                          <button
                                            type="button"
                                            className="Supbtn"
                                          >
                                            <i className="fas fa-sync"></i>
                                          </button>
                                        </div>
                                      </div>
                                      <label
                                        htmlFor="department"
                                        className="col-sm-3 col-form-label"
                                      >
                                        Enter Dept Name:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        <button className="adddepbtn">
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-responsive">
                                    <table className="table table-striped">
                                      <thead>
                                        <tr>
                                          <th>Sr. No.</th>
                                          <th>Category</th>
                                          <th>Department</th>
                                          <th>Edit</th>
                                          <th>Delete</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>Production</td>
                                          <td>Production Dept</td>
                                          <td>
                                            <i className="fas fa-edit"></i>
                                          </td>
                                          <td>
                                            <i className="fas fa-trash-alt"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>Production</td>
                                          <td>Production Dept</td>
                                          <td>
                                            <i className="fas fa-edit"></i>
                                          </td>
                                          <td>
                                            <i className="fas fa-trash-alt"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td>Production</td>
                                          <td>Production Dept</td>
                                          <td>
                                            <i className="fas fa-edit"></i>
                                          </td>
                                          <td>
                                            <i className="fas fa-trash-alt"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>4</td>
                                          <td>Production</td>
                                          <td>Production Dept</td>
                                          <td>
                                            <i className="fas fa-edit"></i>
                                          </td>
                                          <td>
                                            <i className="fas fa-trash-alt"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>5</td>
                                          <td>Production</td>
                                          <td>Production Dept</td>
                                          <td>
                                            <i className="fas fa-edit"></i>
                                          </td>
                                          <td>
                                            <i className="fas fa-trash-alt"></i>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Add Department Modal/Card */}
                        {showAddDepartmentCategory && (
                          <div className="Category-container">
                            <div className="card">
                              <div className="card-header">
                                <h5 className="card-title">Add New Category</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  aria-label="Close"
                                  onClick={toggleAddDepartmentCategory}
                                >
                                  X
                                </button>
                              </div>
                              <div className="card-body">
                                <div className="container">
                                  <div className="row text-start">
                                    <div className="col-md-12">
                                      <p>Department Category Master</p>
                                    </div>
                                  </div>
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        htmlFor="department"
                                        className="col-md-3 col-form-label"
                                      >
                                        Company Name:
                                      </label>

                                      <div className="col-md-4">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        <button className="adddepbtn">
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-responsive">
                                    <table className="table table-striped">
                                      <thead>
                                        <tr>
                                          <th>Sr. No.</th>
                                          <th>Company Name</th>
                                          <th>Edit</th>
                                          <th>Delete</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>Production</td>

                                          <td>
                                            <i className="fas fa-edit"></i>
                                          </td>
                                          <td>
                                            <i className="fas fa-trash-alt"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>Production</td>

                                          <td>
                                            <i className="fas fa-edit"></i>
                                          </td>
                                          <td>
                                            <i className="fas fa-trash-alt"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td>Production</td>

                                          <td>
                                            <i className="fas fa-edit"></i>
                                          </td>
                                          <td>
                                            <i className="fas fa-trash-alt"></i>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="row">
                          <div className="col-12 text-end">
                            <button type="submit" className="Supervisorbottom">
                              SAVE
                            </button>
                            <button type="reset" className="Supervisorbottom">
                              CLEAR
                            </button>
                          </div>
                        </div>
                      </form>
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

export default Supervisor;
