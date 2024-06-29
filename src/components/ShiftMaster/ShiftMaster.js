import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./ShiftMaster.css";
const ShiftMaster = () => {
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

  const [showTable, setShowTable] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === "1") {
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  };

  return (
    <div className="ShiftMaster">
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
                <div className="ShiftMaster1">
                  <div className="Shift">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>Shift Master</h5>
                        </div>
                        <div className="col-md-6 text-end">
                          <p style={{ color: "violet" }}>
                            **Note : Use 24 Houre clock to enter shift time
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ShiftMain">
                    <div className="container-fluid">
                      <div className="row text-start">
                        <div className="col-md-1">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Plant:
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={handleChange}
                              value={selectedOption}
                            >
                              <option selected>Select...</option>
                              <option value="1">SHARP</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-1">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Shift Name:
                          </label>
                          <input
                            type="type"
                            className="form-control"
                            id="exampleFormControlInput1"
                          />
                        </div>
                        <div className="col-md-1">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Shift Prefix:
                            </label>
                            <input
                              type="type"
                              className="form-control"
                              id="exampleFormControlInput1"
                            />
                          </div>
                        </div>
                        <div className="col-md-1">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Shift From:
                            </label>
                            <input
                              type="type"
                              className="form-control"
                              id="exampleFormControlInput1"
                            />
                          </div>
                        </div>
                        <div className="col-md-1">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Shift Till:
                            </label>
                            <input
                              type="type"
                              className="form-control"
                              id="exampleFormControlInput1"
                            />
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Break Name:
                            </label>
                            <input
                              type="type"
                              className="form-control"
                              id="exampleFormControlInput1"
                            />
                          </div>
                        </div>
                        <div className="col-md-1">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Break Till:
                            </label>
                            <input
                              type="type"
                              className="form-control"
                              id="exampleFormControlInput1"
                            />
                          </div>
                        </div>
                        <div className="col-md-1">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Break Time:
                            </label>
                            <input
                              type="type"
                              className="form-control"
                              id="exampleFormControlInput1"
                            />
                          </div>
                        </div>
                        <div className="col-md-1">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Total Hours:
                            </label>
                            <input
                              type="type"
                              className="form-control"
                              id="exampleFormControlInput1"
                            />
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="mb-3">
                            <button className="ShiftMainbtn">Save</button>
                            <button className="ShiftMainbtn">Cancel</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {!showTable && (
                    <div className="Shifttable1">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-12 text-start">
                            <table className="table table-striped table-responsive">
                              <thead>
                                <tr>
                                  <th>No Found Data</th>
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
                  )}

                  {showTable && (
                    <div className="Shifttable">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-12 text-start">
                            <table className="table table-striped table-responsive">
                              <thead>
                                <tr>
                                  <th>Sr.</th>
                                  <th>Plant</th>
                                  <th>Shift</th>
                                  <th>Prefix</th>
                                  <th>Shift Time</th>
                                  <th>Break time</th>
                                  <th>Break Hours</th>
                                  <th>Total Hours</th>
                                  <th>Edit</th>
                                  <th>Delete</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[1, 2, 3, 4, 5].map((item) => (
                                  <tr key={item}>
                                    <td>{item}</td>
                                    <td>Sharp</td>
                                    <td>First 8HRS</td>
                                    <td></td>
                                    <td>07:00-15:30</td>
                                    <td>12:30-13:00</td>
                                    <td>00:30</td>
                                    <td>08:00</td>
                                    <td>
                                      <button className="Shiftbtnicon">
                                        <i className="fas fa-edit"></i>
                                      </button>
                                    </td>
                                    <td>
                                      <button className="Shiftbtnicon">
                                        <i className="fas fa-trash"></i>
                                      </button>
                                    </td>
                                    <td>
                                      <button className="Shiftbtnicon">
                                        Active
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiftMaster;
