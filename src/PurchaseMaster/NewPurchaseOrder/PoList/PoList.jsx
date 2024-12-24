import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import './PoList.css'
const PoList = () => {
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
    <div className="POListMaster">
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
              <div className="POList mt-5">
                <div className="POList-header mb-4 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title">Purchase Order List</h5>
                    </div>
                    <div className="col-md-8 text-end">
                      <Link type="button" className="btn">
                        Recently Po Approval List
                      </Link>

                      <Link
                        type="button"
                        className="btn"
                       
                      >
                        AMC Purchase Order List
                      </Link>
                      <Link
                        type="button"
                        className="btn"
                       
                      >
                        Purchase Order - Query
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="POList-Main">
                  <div className="container-fluid">
                    <div className="row g-3 text-start">

                        
                      {/* Plant */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>Plant:</label>
                        <select className="form-select" style={{marginTop:"-2px"}}>
                          <option value="select">Select All</option>
                          <option value="Produlink">Produlink</option>
                        </select>
                      </div>

                      {/* From Date */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>From:</label>
                        <input type="date" className="form-control" />
                      </div>

                      {/* To Date */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>To Date:</label>
                        <input type="date" className="form-control" />
                      </div>

                        {/* Supplier Name */}
                        <div className="col-sm-6 col-md-1 col-lg-1">
                        <label>Supplier Name:</label>
                        <input type="text" className="form-control" />
                      </div>


                      {/* Status */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>PO Type:</label>
                        <select className="form-select"  style={{marginTop:"-2px"}}>
                          <option>Select All</option>
                          <option>Select All</option>
                        </select>
                      </div>

                     

                      {/* Series */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>Series:</label>
                        <select className="form-select"  style={{marginTop:"-2px"}}>
                          <option>Select All</option>
                        </select>
                      </div>

                      {/* Auth */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>Item Group:</label>
                        <select className="form-select"  style={{marginTop:"-2px"}}>
                          <option>Select All</option>
                        </select>
                      </div>

                    
                      {/* Item Name */}
                      <div className="col-sm-6 col-md-1 col-lg-1">
                        <label>Po Status:</label>
                        <select className="form-select"  style={{marginTop:"-2px"}}>
                          <option>Select All</option>
                        </select>
                      </div>

                      {/* Wo No */}
                      <div className="col-sm-6 col-md-1 col-lg-1">
                        <label>All User:</label>
                        <select className="form-select"  style={{marginTop:"-2px"}}>
                          <option>Select All</option>
                        </select>
                      </div>

                      <div className="col-sm-1 col-md-2"  style={{marginTop:"48px"}}>
                        
                      <button
                          type="button"
                          className="btn btn-primary"
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
                        <th scope="col">Plant</th>
                        <th scope="col">Po No</th>
                        <th scope="col">Po Date</th>
                        <th scope="col">Po Type</th>
                        <th scope="col">Code No</th>
                        <th scope="col">Supplier/Vendor Name</th>
                        
                        <th scope="col">User</th>
                        <th scope="col">Info</th>
                        <th scope="col">Auth Status</th>
                        <th scope="col">Po Status</th>
                        <th scope="col">Email</th>
                        <th scope="col">Doc</th>

                        <th scope="col">Edit</th>
                        <th scope="col">View</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {/* Example data row */}
                      <tr>
                        <td>1</td>
                        <td>January</td>
                        <td>01/01/2024</td>
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
                      
                        <td>
                          <button className="btn btn-link">
                            <FaEdit />
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-link text-danger">
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

export default PoList
