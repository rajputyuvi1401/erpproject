import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import './ScheduleMonth.css';
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 574a3e98363c5956f7e937dbce101d13f6f626a9

const ScheduleMonth = () => {
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
<<<<<<< HEAD

  return (
    <div className="ScheduleMonthMaster">
=======
  return (
    <div className="Userplant">
>>>>>>> 574a3e98363c5956f7e937dbce101d13f6f626a9
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
<<<<<<< HEAD
                <div className="ScheduleMonth mt-2">
                  <div className="Schedule-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">Schedule Month Master</h5>
                      </div>
                      <div className="col-md-8 text-end">
                      <Link type="button" className="btn" to="/WeekMaster">Week Master</Link>
                      </div>
                    </div>
                  </div>
                  <div className="Schedule-Main">
                    <div className="container-fluid">
                      <div className="row text-start">
                        <div className="col-md-2">
                          <label>Month Name</label>
                          <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-2">
                          <label>From Date</label>
                          <input type="date" className="form-control"/>
                        </div>
                        <div className="col-md-2">
                          <label>To Date</label>
                          <input type="date" className="form-control"/>
                        </div>
                        <div className="col-md-2">
                          <label>Month No</label>
                          <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-2">
                          <label>Year No</label>
                          <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-2">
                         <button type="button" className="btn btn-primary mt-4">Add</button>
                        </div>
=======
                <div className="userAuth mt-5">
                  <div className="prod-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">User Plant</h5>
>>>>>>> 574a3e98363c5956f7e937dbce101d13f6f626a9
                      </div>
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className="Schedule-table mt-4">
=======
                  <div className="plant-table mt-3">
>>>>>>> 574a3e98363c5956f7e937dbce101d13f6f626a9
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                          <tr>
                            <th>Sr.</th>
<<<<<<< HEAD
                            <th>Month Name</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Month No</th>
                            <th>Year No</th>
                            <th>W Days</th>
                            <th>User</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Dynamic rows will go here */}
=======
                            <th>Module Name</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Example row, replace with dynamic data */}
                          <tr>
                            <td>1</td>
                            <td>Plant 1</td>
                            <td>
                              <select className="form-select">
                                <option>User_Plant</option>
                                <option>All</option>
                              </select>
                            </td>
                          </tr>
                          {/* Add more rows dynamically */}
>>>>>>> 574a3e98363c5956f7e937dbce101d13f6f626a9
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default ScheduleMonth;
=======
  )
}

export default ScheduleMonth
>>>>>>> 574a3e98363c5956f7e937dbce101d13f6f626a9
