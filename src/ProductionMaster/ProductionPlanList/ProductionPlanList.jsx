import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import { FaEdit, FaTrash } from "react-icons/fa";
import './ProductionPlanList.css';
import { Link } from "react-router-dom";


const ProductionPlanList = () => {
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

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  return (
    <div className="ProductionPlanListMaster">
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
                <div className="ProductionPlanList">
                  <div className="ProductionPlanList-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">Work Order List</h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <div style={{ position: 'relative', display: 'inline-block', marginLeft: '3px' }}>
                          <button
                            style={{ padding: '5px' }}
                            className="BOMRouting vndrbtn"
                            onClick={toggleDropdown}
                          >
                            Work Order Report  ▼
                          </button>

                          {dropdownOpen && (
                            <ul
                              className="dropdown-menu show"
                              style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                zIndex: 1000,
                                display: 'block',
                                minWidth: '10rem',
                                padding: '0.5rem 0',
                                margin: '0.125rem 0 0',
                                fontSize: '12px',
                                color: '#212529',
                                textAlign: 'left',
                                listStyle: 'none',
                                backgroundColor: '#fff',
                                backgroundClip: 'padding-box',
                              }}
                            >
                              <li>
                                <Link className="vndrbtn dropdown-item" to={"/"}>
                                  Export - Excel
                                </Link>
                              </li>
                              <li>
                                <Link className="vndrbtn dropdown-item" to={"/PlanListWOStatus"}>
                                  Work Order - Status
                                </Link>
                              </li>

                            </ul>
                          )}
                        </div>

                        <Link
                          type="button"
                          className="vndrbtn"
                          to="/QueryPlanList"
                        >
                          Work Order - Query
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="ProductionPlanList-Main mt-2">
                    <div className="container-fluid">
                      <div className="row g-3 text-start">
                        {/* From Date */}
                        <div className="col-sm-6 col-md-2 col-lg-3">
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>

                        {/* To Date */}
                        <div className="col-sm-6 col-md-2 col-lg-3">
                          <label>To Date:</label>
                          <input type="date" className="form-control" />
                        </div>


                        {/* Customer Name */}
                        <div className="col-sm-6 col-md-1 col-lg-3">
                          <label>Customer Name:</label>
                          <input type="text" className="form-control" />
                        </div>

                        {/* Item Name */}
                        <div className="col-sm-6 col-md-1 col-lg-3">
                          <label>Item Name:</label>
                          <input type="text" className="form-control" />
                        </div>
                        {/* Status */}
                        <div className="col-sm-6 col-md-2 col-lg-3">
                          <label>Status:</label>
                          <select className="form-select">
                            <option>Select All</option>
                          </select>
                        </div>



                        {/* Series */}
                        <div className="col-sm-6 col-md-2 col-lg-3">
                          <label>Series:</label>
                          <select className="form-select">
                            <option>Select All</option>
                          </select>
                        </div>





                        {/* Wo No */}
                        <div className="col-sm-6 col-md-1 col-lg-3">
                          <label>All:</label>
                          <select className="form-select">
                            <option>Select All</option>
                          </select>
                        </div>

                        <div className="col-sm-2 col-md-2 col-lg-3 mt-4">
                          <label></label>
                          <button
                            type="button"
                            className="vndrbtn w-100"
                          >
                            Search
                          </button>

                        </div>



                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Sr.</th>
                          <th scope="col">Year</th>

                          <th scope="col">W. O. No</th>
                          <th scope="col">Wo Date</th>
                          <th scope="col">Time</th>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Item / Qty</th>
                          <th scope="col">Inward No</th>
                          <th scope="col">Challan No</th>
                          <th scope="col">Wo Status</th>

                          <th scope="col">User</th>
                          <th scope="col">Doc / Del / Edit</th>
                          <th scope="col">View</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Example data row */}
                        <tr>

                          <td>31/01/2024</td>
                          <td>1</td>
                          <td>2024</td>
                          <td>1</td>
                          <td>January</td>
                          <td>01/01/2024</td>
                          <td>31/01/2024</td>
                          <td>1</td>
                          <td>2024</td>
                          <td>2024</td>
                          <td>2024</td>
                          <td>2024</td>
                          <td>
                            <button className="vndrbtn ">
                              <FaEdit />
                            </button>
                          </td>
                          <td>
                            <button className="vndrbtn  text-danger">
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                        {/* More rows can be added here */}
                      </tbody>
                    </table>
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

export default ProductionPlanList
