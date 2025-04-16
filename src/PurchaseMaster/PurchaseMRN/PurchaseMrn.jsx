import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import './PurchaseMrn.css'; // Import the CSS file

const PurchaseMrn = () => {
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
    <div className="NewPurchsemrnMaster">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
              <div className="Purchasemrn-header  text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">
                        Pending MRN Release List
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="Purchasemrn mt-3">
                  <div className="container-fluid mt-1">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Plant</th>
                            <th>
                              <input type="checkbox" id="supplierNameCheck" />
                              <label htmlFor="supplierNameCheck" className="ml-2">
                                From Date
                              </label>
                            </th>
                            <th>To Date</th>
                            <th>
                              <input type="checkbox" id="supplierNameCheck" />
                              <label htmlFor="supplierNameCheck" className="ml-2">
                                MRN
                              </label>
                            </th>
                            <th>
                              <input type="checkbox" id="supplierNameCheck" />
                              <label htmlFor="supplierNameCheck" className="ml-2">
                                Item
                              </label>
                            </th>
                            <th>
                              <input type="checkbox" id="supplierNameCheck" />
                              <label htmlFor="supplierNameCheck" className="ml-2">
                                Type
                              </label>
                            </th>
                            <th>User</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <select className="form-control">
                                <option>Plant 1</option>
                                <option>Plant 2</option>
                                <option>Plant 3</option>
                              </select>
                            </td>
                            <td>
                              <input type="date" className="form-control" />
                            </td>
                            <td>
                              <input type="date" className="form-control" />
                            </td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td>
                              <select className="form-control">
                                <option>CR Name 1</option>
                                <option>CR Name 2</option>
                                <option>CR Name 3</option>
                              </select>
                            </td>
                            <td>
                              <select className="form-control">
                                <option>CR Name 1</option>
                                <option>CR Name 2</option>
                                <option>CR Name 3</option>
                              </select>
                            </td>
                            <td>
                              <button className="vndrbtn">Search</button>
                            </td>
                          </tr>
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
  );
};

export default PurchaseMrn;
