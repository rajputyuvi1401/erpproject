import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../../NavBar/NavBar.js";
import SideNav from "../../../../SideNav/SideNav.js";
import { Link } from "react-router-dom";
import "./AddNewFGMovement.css";
import Cached from "@mui/icons-material/Cached.js";

const AddNewFGMovent = () => {
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
    <div className="NewStoreFgMoventAdd">
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
                <div className="FgMoventAdd-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">FG Movement</h5>
                    </div>
                    <div className="col-md-2 text-end">
                      <div className="row justify-content-end">
                        <div className="col-md-2 d-flex flex-wrap justify-content-end">
                          <select>
                            <option>Sharp</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 text-end">
                      <div className="row justify-content-end">
                        <div className="col-md-12 d-flex flex-wrap justify-content-end">
                          <Link className="FGBtn" to="/FGToFGStock">
                            New FG TO FG Movement (ShopFloor)
                          </Link>
                          <Link className="FGBtn" to="/FG-Movement">
                            FG Movement Report
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="FgMoventAdd-main">
                  <div className="container-fluid text-start">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Trn No:</label>
                          </div>
                          <div className="col-md-4">
                            <input />
                          </div>
                          <div className="col-md-4">
                            <Cached />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>FG Item:</label>
                          </div>
                          <div className="col-md-4">
                            <input />
                          </div>
                          <div className="col-md-4">
                            <button type="button" className="pobtn">
                              Select
                            </button>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Operation:</label>
                          </div>
                          <div className="col-md-8">
                            <input />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Ok Qty:</label>
                          </div>
                          <div className="col-md-8">
                            <input />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Rework Qty:</label>
                          </div>
                          <div className="col-md-8">
                            <input />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Reject Qty:</label>
                          </div>
                          <div className="col-md-8">
                            <input />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Remark:</label>
                          </div>
                          <div className="col-md-8">
                            <textarea></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Date:</label>
                          </div>
                          <div className="col-md-8">
                            <input type="date" />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>...</label>
                          </div>
                          <div className="col-md-8">
                            <select>
                              <option></option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                      <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Stock View:</label>
                          </div>
                          <div className="col-md-8">
                            <select>
                              <option>All</option>
                            </select>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Heat Code:</label>
                          </div>
                          <div className="col-md-8">
                            <select>
                              <option>All</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row text-end mt-4">
                      <div className="col-md-12">
                        <button type="submit" className="pobtn">
                          Save
                        </button>
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

export default AddNewFGMovent;
