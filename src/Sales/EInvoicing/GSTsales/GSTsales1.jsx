import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./GSTsales1.css";

const GSTsales1 = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState); // Toggle modal visibility
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);


  return (
    <div className="GSTsalesMaster">
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
                <div className="GSTsales">
                  <div className="GSTsales-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <h5 className="header-title">Pending Invoice List For E-Invoice</h5>
                      </div>
                      <div className="col-md-1 generateirn" style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="radio" id="GenerateIRN" name="brand" value="GenerateIRN" />
                        <label htmlFor="GenerateIRN" style={{ marginLeft: '5px' }}>GenerateIRN</label>
                      </div>

                      <div className="col-md-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center' }}>
                          <input type="checkbox" id="general" />
                          <span style={{ marginLeft: '5px' }}>IRN With Eway</span>
                        </label>
                      </div>

                      <div className="col-md-1 cancelirn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <input type="radio" id="CancelIRN" name="brand" value="CancelIRN" />
                        <label htmlFor="CancelIRN" style={{ marginLeft: '5px' }}>CancelIRN</label>
                      </div>


                      <div className="col-md-5 text-end">
                        <button type="button" className="vndrbtn" onClick={toggleModal}>
                          Einvoice Log
                        </button>
                        <button type="button" className="vndrbtn">
                          IRN Lookup Table
                        </button>
                      </div>
                    </div>
                  </div>


                  {/* POPUP FORM */}

                  <div
                    className={`modal ${showModal ? "show" : ""}`}
                    style={{
                      display: showModal ? "block" : "none",
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      zIndex: 1050
                    }}
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden={!showModal}
                  >
                    <div
                      className="modal-dialog modal-lg"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        margin: "0 auto"
                      }}
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            E Invoice Logs:
                          </h5>
                          <button
                            type="button"
                            className="vndrbtn btn-close"
                            onClick={toggleModal}
                          >
                            <i className="fa fa-times" aria-hidden="true"></i>
                          </button>
                        </div>

                        <div className="modal-body">
                          <form>
                            <div className="GSTsales-header mb-4 text-start">
                              <div className="row align-items-center">
                                {/* From Date */}
                                <div className="col-md-3 mb-3">
                                  <label>From:</label>
                                  <input type="date" className="form-control" />
                                </div>

                                {/* To Date */}
                                <div className="col-md-3 mb-3">
                                  <label>To:</label>
                                  <input type="date" className="form-control" />
                                </div>

                                {/* Search Button */}
                                <div className="col-md-3">
                                  <button type="button" className="vndrbtn w-100 btn btn-primary">
                                    Search
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="GSTsales-main">

                    <div className="row text-start">
                      <div className="col-md-1">
                        <label htmlFor="">Plant:</label>
                        <select name="" id="" className="form-control">
                          <option value="">Sharp</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="">Type:</label>
                        <select name="" id="" className="form-control">
                          <option value="">Domestic</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="">From :</label>
                        <input type="date" className="form-control" />
                      </div>

                      <div className="col-md-2">
                        <label htmlFor=" " className=" "> Customer : </label>
                        <input type="text" placeholder="Name" className="form-control" />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor=" " className=" "> Item : </label>
                        <input type="text" placeholder="Enter Code | Name" className="form-control" />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor=" " className=" "> Invoice : </label>
                        <input type="text" placeholder="No" className="form-control" />
                      </div>
                      <div className="col-md-1 mt-4">
                        <button type="button" className="vndrbtn  w-100" >
                          Search
                        </button>
                      </div>
                    </div>

                  </div>

                  <div className="GSTsales-main mt-2">
                    <div className="GSTsales-second">
                      <ul className="nav nav-tabs" id="GSTsalesTabs" role="tablist" >
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="shift-tab" data-bs-toggle="tab" data-bs-target="#shift" type="button" role="tab"  >
                            Invoice Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="machine-idle-tab" data-bs-toggle="tab" data-bs-target="#machineIdle" type="button" role="tab" >
                            Generate IRN
                          </button>
                        </li>
                      </ul>

                      <div className="tab-content mt-4" id="GSTsalesTabsContent">

                        <div className="tab-pane fade show active" id="shift" role="tabpanel" >
                          <div className="table table-bordered container-fuild">
                            <table className="table-responsive">
                              <thead>
                                <tr>
                                  <th className="">
                                    Sr
                                  </th>
                                  <th className="">
                                    Plant
                                  </th>
                                  <th className="">
                                    Invoice No.
                                  </th>
                                  <th className="">
                                    Invoice Date
                                  </th>
                                  <th className="">
                                    Cust Po No
                                  </th>
                                  <th className="">
                                    Type
                                  </th>
                                  <th className="">
                                    Cust Code
                                  </th>
                                  <th className="">
                                    Cust Name
                                  </th>
                                  <th className=" ">
                                    Item Qty | Desc
                                  </th>
                                  <th className=" ">
                                    Qty
                                  </th>
                                  <th className=" ">
                                    Ass Act
                                  </th>
                                  <th className=" ">
                                    Total
                                  </th>
                                  <th className=" ">
                                    User
                                  </th>
                                  <th className=" ">
                                    View
                                  </th>
                                  <th className=" ">
                                    JSON
                                  </th>
                                  <th className=" ">
                                    Act
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr>
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
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="tab-pane fade" id="machineIdle" role="tabpanel" >
                          <div className="GSTsales-header mb-4 text-start">
                            <div className="row align-items-center">
                              <div className="col-md-6">
                                <h5 className="header-title cllllr">Pending Invoice List For E-Invoice</h5>
                              </div>
                            </div>

                            <div className="row align-items-center mt-4">
                              <div className="col-md-2">
                                <button type="button" className="vndrbtn w-100" >
                                  Generate IRN
                                </button>
                              </div>
                            </div>

                            <div className="row align-items-center mt-4">
                              <div className="col-md-4">
                                <label htmlFor="">Result</label>
                                <textarea name="result" className="form-control" id="result"></textarea>
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

export default GSTsales1
