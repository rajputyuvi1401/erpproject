import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./VendorScrapInward.css";
const VendorScrapInward = () => {
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
    <div className="NewStoreVendorScrap">
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
              <div className="VendorScrap-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-3 col-6">
                      <h5 className="header-title text-start">
                        Inward Vendor Scrap Challan
                      </h5>
                    </div>
                    <div className="col-md-2 col-6">
                      <input className="form-control"/>
                    </div>
                  </div>
                </div>
                <div className="VendorScrap-main">
                <div className="container-fluid text-start">
                    <div className="row mt-4">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-3 col-5">Supplier Name:</div>
                          <div className="col-md-6 col-7">
                            <input className="form-control" />
                          </div>
                          <div className="col-md-2 col-12 mt-2 mt-md-0">
                            <button type="button" className="btn">Search</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                 

                  <div
                    className="StoreSubconFooter"
                    style={{ marginTop: "100px" }}
                  >
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-Gernal-Detail-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-Gernal-Detail"
                          type="button"
                          role="tab"
                          aria-controls="pills-Gernal-Detail"
                          aria-selected="true"
                        >
                          Gernal Detail
                        </button>
                      </li>
                    
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-Gernal-Detail"
                        role="tabpanel"
                        aria-labelledby="pills-Gernal-Detail-tab"
                        tabindex="0"
                      >
                        <div className="StoreSubconstatus text-start">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-4 text-start">
                                <div className="container mt-4">
                                  <div className="table-responsive">
                                    <table className="table table-bordered">
                                      <tbody>
                                        {/* First Column Group */}
                                        <tr>
                                          <th className="col-md-4">
                                            Inward F4 No:
                                          </th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Inward Date:</th>
                                          <td>
                                            <input
                                              type="date"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Inward Time:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Challan No:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Challan Date:</th>
                                          <td>
                                            <input
                                              type="date"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 text-start">
                                {/* Second Column Group */}
                                <div className="container mt-4">
                                  <div className="table-responsive text-start">
                                    <table className="table table-bordered">
                                      <tbody>
                                      <tr>
                                          <th>GIN No:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Invoice No:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th className="col-md-4">
                                            Invoice Date:
                                          </th>
                                          <td>
                                            <input
                                              type="date"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Prepared By:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Checked By:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 text-start">
                                {/* Third Column Group */}
                                <div className="container mt-4">
                                  <div className="table-responsive">
                                    <table className="table table-bordered">
                                      <tbody>
                                        <tr>
                                          <th>Vehical No:</th>
                                          <td>
                                            <textarea
                                              className="form-control"
                                              rows="2"
                                            ></textarea>
                                          </td>
                                        </tr>
                                        
                                        <tr>
                                          <th>Lr No:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                     
                                        <tr>
                                          <th>Remark:</th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </td>
                                        </tr>
                                        
                                        <tr>
  <th className="col-md-4">Delivery in Time:</th>
  <td>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id="deliveryYes"
        name="deliveryInTime"
        value="yes"
      />
      <label className="form-check-label" htmlFor="deliveryYes">
        Yes
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id="deliveryNo"
        name="deliveryInTime"
        value="no"
      />
      <label className="form-check-label" htmlFor="deliveryNo">
        No
      </label>
    </div>
  </td>
</tr>

                                        <tr>
                                          <td
                                            colspan="2"
                                            className="text-center"
                                          >
                                            <button className="btn">
                                              Save Challan
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
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
  )
}

export default VendorScrapInward
