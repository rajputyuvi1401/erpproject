import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./ContractorMaster.css";
import { Link } from "react-router-dom";

const ContractorMaster = () => {
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
    <div className="ContractorMaster">
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
                <div className="ContractorMaster1">
                  
                  <div className="Contractor-header mb-4 text-start mt-5">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="header-title">Contractor Master</h5>
                        </div>
                        <div className="col-md-6 col-12 text-end">
                          <Link
                            to={"/Addcontractor-master"}
                            className="btn me-2 mb-2"
                          >
                            Add New Contractor
                          </Link>
                          <Link className="btn mb-2">
                            Export To Excel
                          </Link>
                        </div>
                      </div>
                    
                  </div>
                  <div className="ContractorMain mt-5">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12 text-start">
                          <div className="row mt-3">
                            <div className="col-md-3">
                              <label
                                htmlFor="plantSelect"
                                className="form-label"
                              >
                                Plant:
                              </label>
                              <select id="plantSelect" className="form-select">
                                <option value="Produlink">Produlink</option>
                                
                              </select>
                            </div>
                            <div className="col-md-3">
                              <label
                                htmlFor="contractorName"
                                className="form-label"
                              >
                                Contractor Name:
                              </label>
                              <input
                                type="text"
                                id="contractorName"
                                className="form-control"
                                placeholder="Enter Contractor Name"
                              />
                            </div>
                            <div className="col-md-1 d-flex align-items-end">
                              <button className="ContractorMainbtn ">
                                Search
                              </button>
                            </div>
                            <div className="col-md-2 d-flex align-items-end">
                              <button className="ContractorMainbtn">
                                View All
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Contractortable mt-5">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12 text-start">
                          <div className="table-striped table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Sr. No</th>
                                <th>Plant</th>
                                <th>Contractor Name</th>
                                <th>Contractor Address</th>
                                <th>Contact No</th>
                                <th>PAN No</th>
                                <th>GST No</th>
                                <th>TDS %</th>
                                <th>Nature of Service</th>
                                <th>Firm Name</th>
                                <th>Email</th>
                                <th>Refcode</th>
                                <th>Edit</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Produlink</td>
                                <td>Company</td>
                                <td>MIDC</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                  <button className="contractorbtnicon">
                                    <i className="fas fa-edit"></i>
                                  </button>
                                </td>
                                <td>
                                  <button className="contractorbtnicon">
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </td>
                              </tr>
                              {/* Add more rows as needed */}
                            </tbody>
                          </table>
                          </div>
                        </div>
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

export default ContractorMaster;
