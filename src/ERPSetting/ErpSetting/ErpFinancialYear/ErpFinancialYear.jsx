import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./ErpFinancialYear.css";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErpFinancialYear = () => {
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
    <div className="ErpFinancialyear">
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
                <div className="financial mt-5">
                  <div className="financial-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">Financial Year</h5>
                      </div>
                    </div>
                  </div>

                  <div className="financial-table mt-3">
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                          <tr>
                            <th>FyId</th>
                            <th>Fy Name</th>
                            <th>From_Date</th>
                            <th>To_Date</th>
                            <th>Short_Name</th>
                            <th>Doc Start No.</th>
                            <th>Fy Month</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Sample data rows */}
                          <tr>
                            <td>1</td>
                            <td>18-19</td>
                            <td>01/04/2018</td>
                            <td>31/03/2019</td>
                            <td>2018-2019</td>
                            <td><Link to="/Document-start"><FaFile/></Link></td>
                            <td><FaFile/></td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19-20</td>
                            <td>01/04/2019</td>
                            <td>31/03/2020</td>
                            <td>2019-2020</td>
                            <td><Link to="/Document-start"><FaFile/></Link></td>
                            <td><FaFile/></td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row text-start mt-5">
                    <div className="col-md-2">
                      <button type="button" className="yearbtn">
                        Create New Year
                      </button>
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

export default ErpFinancialYear;
