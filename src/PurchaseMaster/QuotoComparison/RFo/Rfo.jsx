import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./Rfo.css";
const Rfo = () => {
    
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
    <div className="RFOMaster">
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
              <div className="RFO-header">
                <div className="row flex-nowrap align-items-center">
                  <div className="col-md-4">
                    <h5 className="header-title text-start">
                    Request For Quotation (RFO)
                    </h5>
                  </div>
                  <div className="col-md-8 text-end">
                    <div className="row justify-content-end">
                     
                      <div className="col-md-4 d-flex align-items-center">
                        <button className="pobtn">RFO New</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="RFO-main">
                <div className="container mt-4">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>From Date</th>
                          <th>To Date</th>
                          <th>Status</th>
                          <th>Item</th>
                          <th>User</th>
                          
                        
                        
                          <th>
                           
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="date" className="form-control" />
                          </td>
                          <td>
                            <input type="date" className="form-control" />
                          </td>
                          <td>
                            <select className="form-control">
                              <option>Plant 1</option>
                              <option>Plant 2</option>
                              <option>Plant 3</option>
                            </select>
                          </td>
                          <td>
                          <input type="text" className="form-control" />
                          </td>
                          <td>
                            <select className="form-control">
                              <option>JobWork</option>
                              <option>Status 2</option>
                              <option>Status 3</option>
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
                <div className="RFOtable">
                  <div className="container mt-4">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                          <th>From Date</th>
                          <th>To Date</th>
                          <th>Status</th>
                          <th>Item</th>
                          <th>User</th>
                            
                            <th>Edit</th>
                            <th>View</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>{/* Data rows will go here */}</tr>
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
  )
}

export default Rfo
