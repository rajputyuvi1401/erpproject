import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import "./AddCycleTime.css";
import { useNavigate } from "react-router-dom";

const AddCycleTime = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };
  const navigate = useNavigate();
  const handleAddNewCycleTime = () => {
    navigate("/cycle-time-master");
  };

  return (
    <div className="AddCycletimecenter">
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
                <div className="AddCycletimermaster">
                  <div className="AddCycletime">
                    <div className="container-fluid">
                      <div className="row d-flex align-items-center">
                        <div className="col-md-5 text-start">
                          <h5>Cycle Time Master</h5>
                        </div>
                        <div className="col-md-4 text-md-end text-start mt-2 mt-md-0">
                          <p style={{ color: "green" }}>
                            **Note: Please Enter Time in Seconds
                          </p>
                        </div>
                        <div className="col-md-3 text-md-end text-start mt-2 mt-md-0">
                          <button
                            className="AddCycletimebtn me-2"
                            onClick={handleAddNewCycleTime}
                          >
                            Cycle Time Master List
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="AddCycletimeMain">
                    <div className="container-fluid">
                      <div className="row text-start centerselect">
                        <div className="col-md-1 col-sm-3 mb-3 mb-sm-0">
                          <label
                            htmlFor="selectPlant"
                            className="col-form-label"
                          >
                            Item Search
                          </label>
                        </div>
                        <div className="col-md-3 col-sm-9 mb-3 mb-sm-0">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                          />
                        </div>
                        <div className="col-md-1 col-sm-12 text-sm-start text-md-start">
                          <button className="AddCycletimemainbtn">
                            <i className="bi bi-search"></i> Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="AddCycleaside">
                    <div className="container-fluid">
                      <div className="row text-start">
                        <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                          <div className="mb-3">
                            <label htmlFor="plant" className="form-label">
                              Plant
                            </label>
                            <select
                              className="form-select"
                              id="plant"
                              name="plant"
                            >
                              <option value="">Select Plant</option>
                              <option value="Plant1">Plant 1</option>
                              <option value="Plant2">Plant 2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                          <div className="mb-3">
                            <label htmlFor="partCode" className="form-label">
                              Part Code
                            </label>
                            <select
                              className="form-select"
                              id="partCode"
                              name="partCode"
                            >
                              <option value="">Select Part Code</option>
                              <option value="P001">P001</option>
                              <option value="P002">P002</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-6 mb-3 mb-sm-0">
                          <div className="mb-3">
                            <label htmlFor="machineType" className="form-label">
                              Machine Type
                            </label>
                            <select
                              className="form-select"
                              id="machineType"
                              name="machineType"
                            >
                              <option value="">Select Machine Type</option>
                              <option value="Type1">Type 1</option>
                              <option value="Type2">Type 2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                          <div className="mb-3">
                            <label htmlFor="machine" className="form-label">
                              Machine
                            </label>
                            <select
                              className="form-select"
                              id="machine"
                              name="machine"
                            >
                              <option value="">Select Machine</option>
                              <option value="Machine1">Machine 1</option>
                              <option value="Machine2">Machine 2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                          <div className="mb-3">
                            <label htmlFor="opTime" className="form-label">
                              Op Time
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="opTime"
                              name="opTime"
                            />
                          </div>
                        </div>
                        <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                          <div className="mb-3">
                            <label
                              htmlFor="loadUnloadTime"
                              className="form-label"
                            >
                              Load/Unload Time
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="loadUnloadTime"
                              name="loadUnloadTime"
                            />
                          </div>
                        </div>
                        <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                          <div className="mb-3">
                            <label htmlFor="moTime" className="form-label">
                              MO Time
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="moTime"
                              name="moTime"
                            />
                          </div>
                        </div>
                        <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                          <div className="mb-3">
                            <label htmlFor="totalTime" className="form-label">
                              Total Time
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="totalTime"
                              name="totalTime"
                            />
                          </div>
                        </div>
                        <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                          <div className="mb-3 form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="timeInMinutes"
                              name="timeInMinutes"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="timeInMinutes"
                            >
                              Time in Minutes
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="opTime"
                              name="opTime"
                            />
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                          <button type="button" className="addbtn me-2">
                            Add
                          </button>
                          <button type="button" className="addbtn">
                            Clear
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="AddCycletable">
                    <div className="container-fluid">
                      <div className="row text-start">
                        <div className="col-md-12">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>No Found Data !!</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 text-end">
                    <button className="record-bootom">Save</button>
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

export default AddCycleTime;
