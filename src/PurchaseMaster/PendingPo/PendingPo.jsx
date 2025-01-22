import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./PendingPo.css";
const PendingPo = () => {
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
    <div className="NewPendingpoMaster">
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
              <div className="NewPendingpoMaster-header  text-start mt-5">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">
                        Pending Purchase Order Release List
                      </h5>
                    </div>

                    {/* Buttons */}
                    <div className="col-md-8  d-flex flex-wrap justify-content-end">
                    
                        <label className="mt-2">Ageing Days</label>
                    
                      <button className="btn">
                        [Under 0-7]:
                      </button>
                      <button className="btn">
                        [Under 8-15]:
                      </button>
                      <button className="btn">
                        [Under 16-30]:
                      </button>
                      <button className="btn">
                        [Under 31-60]:
                      </button>
                      <button className="btn">
                        [Above 60]:
                      </button>
                    </div>
                  </div>
                </div>
                <div className="Pendingpurchase mt-5">
                  <div className="container-fluid mt-4">

                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>View All</th>
                              <th>Plant</th>
                              <th>From Date</th>
                              <th>To Date</th>
                              <th>Type</th>
                              <th>Category</th>
                              <th>
                                <input type="checkbox" id="supplierNameCheck" />
                                <label
                                  htmlFor="supplierNameCheck"
                                  className="ml-2"
                                >
                                  Supplier Name
                                </label>
                              </th>
                              <th>
                                <input type="checkbox" id="poNoCheck" />
                                <label htmlFor="poNoCheck" className="ml-2">
                                  PO No
                                </label>
                              </th>
                              <th>CR Name</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <button className="pobtn ">
                                  View All Purchase
                                </button>
                              </td>
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
                                <select className="form-control">
                                  <option>Type 1</option>
                                  <option>Type 2</option>
                                  <option>Type 3</option>
                                </select>
                              </td>
                              <td>
                                <select className="form-control">
                                  <option>Category 1</option>
                                  <option>Category 2</option>
                                  <option>Category 3</option>
                                </select>
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
                                <button className="pobtn">Search</button>
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

export default PendingPo;
