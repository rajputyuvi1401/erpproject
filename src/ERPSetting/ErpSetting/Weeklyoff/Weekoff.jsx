import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
<<<<<<< HEAD
import './Weekoff.css';
import { Link } from "react-router-dom";

const Weekoff = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [ setSelectedWeeklyOffs] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [holidayDetails, setHolidayDetails] = useState({
    fromDate: "",
    toDate: "",
    type: "",
    description: "",
    days: "",
  });
=======

const Weekoff = () => {
    const [sideNavOpen, setSideNavOpen] = useState(false);
>>>>>>> 574a3e98363c5956f7e937dbce101d13f6f626a9

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

<<<<<<< HEAD
  const handleWeeklyOffChange = (event) => {
    const { value, checked } = event.target;
    setSelectedWeeklyOffs((prev) =>
      checked ? [...prev, value] : prev.filter((day) => day !== value)
    );
  };

  const handleHolidayInputChange = (e) => {
    const { name, value } = e.target;
    setHolidayDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const addHoliday = () => {
    setHolidays((prevHolidays) => [...prevHolidays, holidayDetails]);
    setHolidayDetails({
      fromDate: "",
      toDate: "",
      type: "",
      description: "",
      days: "",
    });
  };

=======
>>>>>>> 574a3e98363c5956f7e937dbce101d13f6f626a9
  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);
<<<<<<< HEAD

  return (
    <div className="WeeklyOff">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="WeeklyOff mt-4">
                  <div className="WeeklyOff-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">Weekly Off / Holiday Setting</h5>
                      </div>
                      <div className="col-md-8 text-end">
                      <Link type="button" className="btn" to="/WeekMaster">Week Master</Link>
                      </div>
                    </div>
                  </div>

                  <div className="WeeklyOff-form">
                    <div className="row g-3">
                      <div className="col-md-2 col-sm-12">
                        <h6>Weekly Off:</h6>
                        <div className="form-check">
                          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                            <div key={day}>
                              <input
                                type="checkbox"
                                value={day}
                                className="form-check-input"
                                id={day}
                                onChange={handleWeeklyOffChange}
                              />
                              <label className="form-check-label" htmlFor={day}>
                                {day}
                              </label>
                            </div>
                          ))}
                        </div>
                        <button className="btn mt-2">Update Weekly Off</button>
                      </div>

                      <div className="col-md-10 col-sm-12">
                        <h6>Holiday Setting:</h6>
                        <div className="row g-2">
                          <div className="col-md-2">
                            <label>From Date:</label>
                            <input
                              type="date"
                              className="form-control"
                              name="fromDate"
                              value={holidayDetails.fromDate}
                              onChange={handleHolidayInputChange}
                            />
                          </div>
                          <div className="col-md-2">
                            <label>To Date:</label>
                            <input
                              type="date"
                              className="form-control"
                              name="toDate"
                              value={holidayDetails.toDate}
                              onChange={handleHolidayInputChange}
                            />
                          </div>
                          <div className="col-md-2">
                            <label>Type:</label>
                            <select
                              className="form-control"
                              name="type"
                              value={holidayDetails.type}
                              onChange={handleHolidayInputChange}
                            >
                              <option>Select</option>
                              <option value="National Holiday">National Holiday</option>
                              <option value="Company Holiday">Company Holiday</option>
                            </select>
                          </div>
                          <div className="col-md-2">
                            <label>Description:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="description"
                              value={holidayDetails.description}
                              onChange={handleHolidayInputChange}
                            />
                          </div>
                          <div className="col-md-2">
                            <label>Days:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="days"
                              value={holidayDetails.days}
                              onChange={handleHolidayInputChange}
                            />
                          </div>
                          <div className="col-md-2 mt-5">
                          <label></label>
                            <button className="btn" onClick={addHoliday}>
                              Add Holiday
                            </button>
                          </div>
                        </div>
                        <div className="Holiday-table mt-4">
                 
                 <div className="table-responsive">
                   <table className="table table-bordered">
                     <thead className="table-dark">
                       <tr>
                         <th>Date</th>
                         <th>Type</th>
                         <th>Description</th>
                         <th>Days</th>
                       </tr>
                     </thead>
                     <tbody>
                       {holidays.length > 0 ? (
                         holidays.map((holiday, index) => (
                           <tr key={index}>
                             <td>{holiday.fromDate} - {holiday.toDate}</td>
                             <td>{holiday.type}</td>
                             <td>{holiday.description}</td>
                             <td>{holiday.days}</td>
                           </tr>
                         ))
                       ) : (
                         <tr>
                           <td colSpan="4" className="text-center">No Data Found</td>
                         </tr>
                       )}
                     </tbody>
                   </table>
                 </div>
               </div>
                      </div>
                    </div>
                  </div>

               
                </div>
              </main>
            </div>
=======
  return (
    <div className="Userplant">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="Main-NavBar">
            <NavBar toggleSideNav={toggleSideNav} />
            <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
            <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
              <div className="userAuth mt-5">
                <div className="prod-header mb-4 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title">User Plant</h5>
                    </div>
                  </div>
                </div>

                <div className="plant-table mt-3">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead className="table-dark">
                        <tr>
                          <th>Sr.</th>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
>>>>>>> 574a3e98363c5956f7e937dbce101d13f6f626a9
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default Weekoff;
=======
  </div>
  )
}

export default Weekoff
>>>>>>> 574a3e98363c5956f7e937dbce101d13f6f626a9
