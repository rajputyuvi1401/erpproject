import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./UnitConversion.css";

const UnitConversion = () => {
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

  return (
    <div className="UniConversion">
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
                <div className="UniConversion1">
                  <div className="Unit">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>
                            Item Stock Unit Specification
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="UnitMain">
                    <div className="container-fluid">
                      <div className="row text-start">
                        <div className="col-md-2 mb-3">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Sub Group:
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Select...</option>
                            <option value="1">FG</option>
                            <option value="2">RM</option>
                            <option value="3">TOOLS</option>
                          </select>
                        </div>
                        <div className="col-md-1 mb-3">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Item:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                          />
                        </div>
                        <div className="col-md-1 mb-3">
                          <button className="UnitMainbtn">Search</button>
                        </div>
                        <div className="col-md-3 mb-3">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Unit:
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Select...</option>
                            <option value="1">PCS</option>
                            <option value="2">KGS</option>
                            <option value="3">BOX</option>
                          </select>
                        </div>
                        <div className="col-md-2 mb-3">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Stock Qty:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                          />
                        </div>
                        <div className="col-md-2 mb-3">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Stock Unit:
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Select...</option>
                            <option value="1">PCS</option>
                            <option value="2">KGS</option>
                            <option value="3">BOX</option>
                          </select>
                        </div>
                        <div className="col-md-1 mb-3">
                          <button className="UnitMainbtn">Save</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Unittable">
                    <div className="container-fluid">
                      <div className="row text-start">
                        <table>
                          <thead>
                            <tr>
                              <th>No Found Data !!!</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
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

export default UnitConversion;
