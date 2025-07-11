import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import './TestCertificateList.css';

const TestCertificateList = () => {
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
    <div className="TestCertificateListMaster">
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
                <div className="TestCertificateList">
                  <div className="TestCertificateList-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title"> (TC) Test CertificateList List </h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <button type="button" className="vndrbtn">
                          New TC
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Filter Section */}
                  <div className="TestCertificateList-filter">
                    <div className="row text-start">
                      
                      <div className="col-md-1">
                        <label>From Date</label>
                        <input type="date" className="form-control mt-2" />
                      </div>
                      <div className="col-md-1">
                        <label>To Date</label>
                        <input type="date" className="form-control mt-2" />
                      </div>

                      <div className="col-md-2">
                      <div className="">
                            {/* <input type="checkbox" className="form-check-input" id="Checkbox" /> */}
                            <label htmlFor="Checkbox" className="form-check-label"> Cust Name: </label>
                        </div>
                        <input type="text"  placeholder="Cust Name" className="form-control mt-2"/>
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-2">
                      <div className="">
                            {/* <input type="checkbox" className="form-check-input" id="Checkbox" /> */}
                            <label htmlFor="Checkbox" className="form-check-label">Item Code: </label>
                        </div>
                        <input type="text" placeholder="Item Code " className="form-control mt-2" />
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-2">
                      <div className="">
                            {/* <input type="checkbox" className="form-check-input" id="Checkbox" /> */}
                            <label htmlFor="Checkbox" className="form-check-label">TC No: </label>
                        </div>
                        <input type="text" placeholder="No " className="form-control mt-2" />
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-2">
                      <div className="">
                            {/* <input type="checkbox" className="form-check-input" id="Checkbox" /> */}
                            <label htmlFor="Checkbox" className="form-check-label">PO No: </label>
                        </div>
                        <input type="text" placeholder=" " className="form-control mt-2" />
                      </div>   

                      <div className="col-md-1">               
                         <button className="vndrbtn" style={{marginTop:"28px"}}>Search</button>          
                      </div>

                    </div>
                   
                  </div>

                  {/* Table Section */}
                  <div className="TestCertificateList-Main">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sr.</th>
                          <th>Year</th>
                          <th>TC No</th>
                          <th>TC Date</th>
                          <th>PO No</th>
                          <th>Cust Code</th>
                          <th>Cust Name</th>
                          <th>Item No</th>
                          <th>Item Code</th>
                          <th>Item Desc</th>
                          <th>Qty</th>
                          <th>User</th>
                          <th>Doc</th>
                          <th>Edit</th>
                          <th>Del</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Example Row */}
                        <tr>
                          <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                        
                          <td>
                              <i className="fas fa-eye"></i>
                          </td>
                        </tr>
                        {/* Additional rows can be added dynamically here */}
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

export default TestCertificateList