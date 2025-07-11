import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import './Emailtemplate.css'

const Emailtemplate = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("POGRNDC");

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
    <div className="Emailtemplate">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="userAuth ">

                  <div className="Emailtemplate-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title"> Email Template</h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <button className="vndrbtn">Company Info ! </button>
                      </div>
                    </div>
                  </div>

                  <div className="Emailtemplatetable ">
                    <div>

                      <div className="row mt-3">
                        <div className="col text-start">
                          <div className="tabs text-start">
                            <ul className="nav nav-tabs">
                              <li className="nav-item">
                                <button className={`nav-link ${activeTab === "POGRNDC" ? "active" : ""
                                  }`} onClick={() => setActiveTab("POGRNDC")} >
                                  PO | GRN QC | Invoice | 57F4 | Jobwork DC
                                </button>
                              </li>
                              <li className="nav-item">
                                <button className={`nav-link ${activeTab === "OtherModule" ? "active" : ""
                                  }`} onClick={() => setActiveTab("OtherModule")} >
                                  Other Module
                                </button>
                              </li>
                            </ul>
                            <div className="tab-content" style={{ border: "none" }} >

                              {activeTab === "POGRNDC" && (
                                <div className="tab-pane fade show active ">

                                  <div className="row">
                                    <div className="col-md-6">
                                      <h5 className="header-title">PURCHASE Email </h5>

                                      <div className="table-responsive">
                                        <table className="table table-bordered">
                                          <tbody>
                                            <tr>
                                              <td>Email Subject:</td>
                                              <td>
                                                <input type="email" className="form-control" name="Email" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Email Text:</td>
                                              <td>
                                                <textarea name="" className="form-control" id=""></textarea>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 2:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>

                                          </tbody>
                                        </table>
                                      </div>

                                    </div>

                                    <div className="col-md-6">
                                      <h5 className="header-title">GRN QC Email </h5>

                                      <div className="table-responsive">
                                        <table className="table table-bordered">
                                          <tbody>
                                            <tr>
                                              <td>Email Subject:</td>
                                              <td>
                                                <input type="email" className="form-control" name="Email" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Email Text:</td>
                                              <td>
                                                <textarea name="" className="form-control" id=""></textarea>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 2:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>

                                          </tbody>
                                        </table>
                                      </div>

                                    </div>
                                  </div>

                                  <div className="row mt-2">
                                    <div className="col-md-6">
                                      <h5 className="header-title">Invoice Email </h5>

                                      <div className="table-responsive">
                                        <table className="table table-bordered">
                                          <tbody>
                                            <tr>
                                              <td>Email Subject:</td>
                                              <td>
                                                <input type="email" className="form-control" name="Email" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Email Text:</td>
                                              <td>
                                                <textarea name="" className="form-control" id=""></textarea>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 2:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>

                                          </tbody>
                                        </table>
                                      </div>

                                    </div>

                                    <div className="col-md-6">
                                      <h5 className="header-title">57F4 Outward Email </h5>

                                      <div className="table-responsive">
                                        <table className="table table-bordered">
                                          <tbody>
                                            <tr>
                                              <td>Email Subject:</td>
                                              <td>
                                                <input type="email" className="form-control" name="Email" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Email Text:</td>
                                              <td>
                                                <textarea name="" className="form-control" id=""></textarea>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 2:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>

                                          </tbody>
                                        </table>
                                      </div>

                                    </div>
                                  </div>

                                  <div className="row mt-2">
                                    <div className="col-md-6">
                                      <h5 className="header-title">Jobwork DC Email </h5>

                                      <div className="table-responsive">
                                        <table className="table table-bordered">
                                          <tbody>
                                            <tr>
                                              <td>Email Subject:</td>
                                              <td>
                                                <input type="email" className="form-control" name="Email" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Email Text:</td>
                                              <td>
                                                <textarea name="" className="form-control" id=""></textarea>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 2:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>

                                          </tbody>
                                        </table>
                                      </div>

                                    </div>
                                  </div>

                                  <div className="row mt-2">
                                    <div className="col-6 text-end">
                                      <button className="vndrbtn">Save Email Settings</button>
                                    </div>
                                  </div>

                                </div>
                              )}

                              {activeTab === "OtherModule" && (
                                <div className="tab-pane fade show active">

                                   <div className="row">
                                    <div className="col-md-6">
                                      <h5 className="header-title">Email's </h5>

                                      <div className="table-responsive">
                                        <table className="table table-bordered">
                                          <tbody>
                                            <tr>
                                              <td>Module Name:</td>
                                              <td>
                                               <select name="" className="form-select" id="">
                                                <option value="">Select Module</option>
                                               </select>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Email Subject:</td>
                                              <td>
                                                <input type="email" className="form-control" name="Email" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Email Text:</td>
                                              <td>
                                                <textarea name="" className="form-control" id=""></textarea>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>CC Mail Id 2:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>To Mail Id 1:</td>
                                              <td>
                                                <input type="text" className="form-control" name="" />
                                              </td>
                                            </tr>

                                          </tbody>
                                        </table>
                                      </div>
                                       
                                       <div className="row">
                                          <div className="col-md-12 text-end">
                                              <button className="vndrbtn"> Save </button>
                                          </div>
                                       </div>

                                    </div>
                                  </div>

                                </div>
                              )}

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

export default Emailtemplate
