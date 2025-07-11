import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import './Roundofsetting.css';
import { Link } from "react-router-dom";



const Roundofsetting = () => {
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
    <div className="RoundofSetting">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="Main-NavBar">
            <NavBar toggleSideNav={toggleSideNav} />
            <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
            <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
              <div className="RoundSetting">
                <div className="RoundofSetting-header mb-2">
                  <div className="row text-start">
                    <div className="col-md-10">
                      <h5 className="header-title">Tax Invoice Round Of Setting</h5>
                    </div>
                    <div className="col-md-2 text-end">
                      <Link type="button" className="vndrbtn btn-primary" to={"/"}>
                        Company Info
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="RoundofSettingmain">
                  <div className="row text-start">
                    <div className="col-md-4">
                      <p className="header-title text-primary"> :: Tax Invoice Round Of Setting</p>
                    </div>
                    
                  </div>
                </div>

                <div className="RoundofSettingtable mt-2">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="table-light">
                        <tr>
                          <th>Sr.</th>
                          <th>Type</th>
                          <th>Basic</th>
                          <th>Disc</th>
                          <th>Ass Value</th>
                          <th>GST Taxes</th>
                          <th>TCS Taxes</th>
                          <th>Grand Total</th>
                          <th>Other Charges</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Sample Rows */}
                        <tr>
                          <td>1</td>
                          <td>Debit Note</td>
                          <td>
                            <select className="form-select">
                              <option>YES</option>
                              <option>NO</option>
                            </select>
                          </td>
                          <td>
                            <select className="form-select">
                              <option>YES</option>
                              <option>NO</option>
                            </select>
                          </td> <td>
                            <select className="form-select">
                              <option>YES</option>
                              <option>NO</option>
                            </select>
                          </td> <td>
                            <select className="form-select">
                              <option>YES</option>
                              <option>NO</option>
                            </select>
                          </td> <td>
                            <select className="form-select">
                              <option>YES</option>
                              <option>NO</option>
                            </select>
                          </td> <td>
                            <select className="form-select">
                              <option>YES</option>
                              <option>NO</option>
                            </select>
                          </td>
                           <td>
                            <select className="form-select">
                              <option>YES</option>
                              <option>NO</option>
                            </select>
                          </td>
                        </tr>
                        {/* Add more rows as needed */}
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
  )
}

export default Roundofsetting
