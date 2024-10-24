import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./Companysetup.css";

const Companysetup = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [activeTab1, setActiveTab1] = useState("data");
  const [activeTab2, setActiveTab2] = useState("logo");
  const [activeTab3, setActiveTab3] = useState("einvoice");




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
    <div className="CompanySetup">
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
                <div className="Company mt-5">
                  <div className="company-header mb-4 text-start">
                    <div className="row align-items-start">
                      <div className="col-md-2">
                        <h1 className="header-title">Company Setup</h1>
                      </div>
                      <div className="col-md-4">
                        <p className="text-sm text-gray-500 mb-4">
                          Last Updated By Admin On 21-07-2022 2:47 PM
                        </p>
                      </div>
                      <div className="col-md-6 text-end">
                        <button type="button" className="companybtn">
                          General Setting
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Tabs Section */}

                  <div className="tabs-container">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab === "general" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("general")}
                        >
                          General
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab1 === "data2" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab1("data2")}
                        >
                          Data-2
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab2 === "logo" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab2("logo")}
                        >
                          Logo / Images
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab3 === "einvoice" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab3("einvoice")}
                        >
                          E-Invoice
                        </button>
                      </li>
                    </ul>

                    {/* Tab Content */}
                    <div className="tab-content">
                      {activeTab === "general" && (
                        <div className="tab-pane active">
                          <div className="container-fluid">
                            <div className="row text-start">
                              <div className="col-md-4 col-12">
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="companyName">
                                      Company Name
                                    </label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <input
                                      id="companyName"
                                      className="form-control"
                                      defaultValue="SHARP ENGINEERS"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="shortName">
                                      Short Name
                                    </label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <input
                                      id="shortName"
                                      className="form-control"
                                      defaultValue="SE"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="msmeNo">MSME No</label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <input
                                      id="msmeNo"
                                      className="form-control"
                                      defaultValue="MH04P0022406"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="address">Address</label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <textarea
                                      id="address"
                                      className="form-control"
                                      defaultValue="A-31 MIDC WALUJ 431136"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="website">Website</label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <input
                                      id="website"
                                      className="form-control"
                                      defaultValue="sharp-engineers.com"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-12">
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="pinCode">Pin Code</label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <input
                                      id="pinCode"
                                      className="form-control"
                                      defaultValue="431136"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="email">Email Id</label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <input
                                      id="email"
                                      className="form-control"
                                      defaultValue="contact@sharp-engineers.com"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="city">City</label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <input
                                      id="city"
                                      className="form-control"
                                      defaultValue="AURANGABAD"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="contactNo">
                                      Contact No
                                    </label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <input
                                      id="contactNo"
                                      className="form-control"
                                      defaultValue="8888826579"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="state">State</label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <input
                                      id="state"
                                      className="form-control"
                                      defaultValue="MAHARASHTRA"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-12">
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="footerMessage">
                                      Footer Message
                                    </label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <textarea
                                      id="footerMessage"
                                      className="form-control"
                                      defaultValue="Property of Sharp Engineers"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="State No Numeric">
                                    State No Numeric
                                    </label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                  <input
                                      id="directorName"
                                      className="form-control"
                                      defaultValue="Umesh Khandelwal"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="State Code Alpha">
                                    State Code Alpha
                                    </label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                  <input
                                      id="directorName"
                                      className="form-control"
                                      defaultValue="Umesh Khandelwal"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="directorName">
                                      Director Name
                                    </label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <input
                                      id="directorName"
                                      className="form-control"
                                      defaultValue="Umesh Khandelwal"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-4 col-12">
                                    <label htmlFor="directorSign">
                                      Director Sign
                                    </label>
                                  </div>
                                  <div className="col-md-8 col-12">
                                    <input
                                      id="directorSign"
                                      className="form-control"
                                      type="file"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-8 offset-md-4 col-12">
                                    <button
                                      type="button"
                                      className="companybtn btn btn-primary w-100"
                                    >
                                      Update Setup
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "data2" && (
                        <div className="tab-pane">
                           <h3>Data-2 Information</h3>
            <form className="form-grid">
              <label>
                VAT TIN: <input type="text" />
              </label>
              <label>
                VAT TIN Date: <input type="date" />
              </label>
              <label>
                CST TIN: <input type="text" />
              </label>
              <label>
                CST TIN Date: <input type="date" />
              </label>
              <label>
                C. Excise Range: <input type="text" />
              </label>
              <label>
                Commissionerate: <input type="text" />
              </label>
              <label>
                C. Excise Reg No: <input type="text" />
              </label>
              <label>
                ECC No: <input type="text" />
              </label>
              <label>
                P.L.A. No: <input type="text" />
              </label>
              <label>
                GST No: <input type="text" />
              </label>
              <label>
                PAN No: <input type="text" />
              </label>
              <label>
                CIN No: <input type="text" />
              </label>
              <label>
                Import/Export Code: <input type="text" />
              </label>
              <label>
                ARN Date: <input type="date" />
              </label>
              <label>
                Export House No: <input type="text" />
              </label>
              <label>
                ARN No: <input type="text" />
              </label>
              <label>
                LUT No: <input type="text" />
              </label>
              <label>
                LUT Date: <input type="date" />
              </label>
            </form>
                        </div>
                      )}
                      {activeTab === "logo" && (
                        <div className="tab-pane">
                          <h3>Upload Logo / Images</h3>
                          <p>
                            This section will allow uploading logos and images.
                          </p>
                        </div>
                      )}
                      {activeTab === "einvoice" && (
                        <div className="tab-pane">
                          <h3>E-Invoice Settings</h3>
                          <p>
                            This section will contain E-Invoice related
                            settings.
                          </p>
                        </div>
                      )}
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

export default Companysetup;
