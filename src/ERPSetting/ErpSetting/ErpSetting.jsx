import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./ErpSetting.css";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErpSetting = () => {
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
    <div className="erpsetting">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="user-management">
                  <div className="WorkOrderEntry-header mb-4">
                    <div className="row">
                      <div className="col-md-2">
                        <h5 className="header-title text-start">
                          User Management
                        </h5>
                      </div>
                      <div className="col-md-10 text-end">
                        <Link to="/UserConfiguration" className="btn ">Add New</Link>
                        <button className="btn ">Disable User List</button>
                        <button className="btn ">Export Excel</button>
                      </div>
                    </div>
                  </div>

                  <div className="header-section mb-4">
                    <div className="row align-items-start mt-2">
                      <div className="col-md-2">
                        <label className="form-check-label mt-2">
                          <input type="checkbox" className="form-check-input" />
                          Include User Name Like
                        </label>
                      </div>
                      <div className="col-md-2">
                        <input
                          type="text"
                          id="userNameInput"
                          className="form-control"
                          placeholder="User Name Like"
                        />
                      </div>
                      <div className="col-md-1">
                        <label htmlFor="seriesSelect" className="form-label mt-2">
                          Plant:
                        </label>
                      </div>
                      <div className="col-md-2">
                        <select id="seriesSelect" className="form-select">
                          <option value="">Select Plant</option>
                          <option value="sharp">Sharp</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
                      <div className="col-md-2 mt-2">
                        <button className="btn">Search</button>
                      </div>
                    </div>
                  </div>

                  <table className="table table-bordered table-hover user-list-table">
                    <thead>
                      <tr>
                        <th>Sr.</th>
                        <th>Add Locn</th>
                        <th>Plant</th>
                        <th>Department</th>
                        <th>Full Name</th>
                        <th>User Name</th>
                        <th>Designation</th>
                        <th>User Password</th>
                        <th>Email ID</th>
                        <th>Mobile No</th>
                        <th>CR</th>
                        <th>Edit</th>
                        <th>Action</th>
                        <th>Sign</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>SHARP</td>
                        <td>Admin</td>
                        <td>ADMIN</td>
                        <td>admin</td>
                        <td>admin</td>
                        <td>
                          <input type="password" value="password" className="form-control form-control-sm" />
                          <button className="btn btn-sm btn-outline-secondary"><FaEye/></button>
                        </td>
                        <td>admin@example.com</td>
                        <td>9552556659</td>
                        <td>N</td>
                        <td>
                          <button className="btn btn-sm"><FaEdit/></button>
                        </td>
                        <td>
                          <button className="btn btn-sm"><FaTrash/></button>
                        </td>
                        <td>No Sign</td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErpSetting;
