import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import { Link } from "react-router-dom";

import "./GstMaster.css";
const GstMaster = () => {
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

  const records = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="GstMaster">
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
                <div className="GstMaster1">
                  <div className="GstMasterupper">
                    <div className="Container-fluid">
                      <div className="row">
                        <div className="col-md-4 text-start">
                          <h5 style={{ color: "blue" }}>GST Rate Master</h5>
                        </div>
                        <div className="col-md-8 text-end">
                          <Link to="/task-master" className="gstbtn">
                            Tax Code Master
                          </Link>
                          <Link to="/Cut-wise" className="gstbtn">
                            Cust-Wise GST Master
                          </Link>
                          <Link to="/Customer-Item-Wise-Gst" className="gstbtn">
                            Cut-Wise GST Rate - Excel Upload
                          </Link>
                          <Link to="/" className="gstbtn">
                            Export To Excel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="GstMasterMain">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>HSN/SAC Code</th>
                                  <th>HSN/SAC Desc.</th>
                                  <th>Domestic</th>
                                  <th>Export</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Tariff code"
                                    />
                                  </td>
                                  <td>
                                    <textarea className="form-control"></textarea>
                                  </td>
                                  <td>
                                    <thead>
                                      <tr>
                                        <th>CGST (%)</th>
                                        <th>SGST (%)</th>
                                        <th>IGST (%)</th>
                                        <th>UTGST (%)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </td>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </td>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </td>
                                  <td>
                                    <thead>
                                      <tr>
                                        <th>SGST (%)</th>
                                        <th>CGST (%)</th>
                                        <th>IGST (%)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </td>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </td>
                                  <td>
                                    <thead>
                                      <tr>
                                        <th>Cess (%)</th>
                                        <th>Is Exempt</th>
                                        <th>Type</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {" "}
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </td>
                                        <td>
                                          <select className="form-control">
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </select>
                                        </td>
                                        <td>
                                          <select
                                            className="form-control"
                                            style={{ width: "75px" }}
                                          >
                                            <option value="type1">
                                              Type 1
                                            </option>
                                            <option value="type2">
                                              Type 2
                                            </option>
                                          </select>
                                        </td>
                                        <td>
                                          <button className="btn-gst">
                                            save
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="GstMastertable">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Sr</th>
                                    <th>HSN Code</th>
                                    <th>HSN Code Desc.</th>
                                    <th>CGST</th>
                                    <th>SGST</th>
                                    <th>IGST</th>
                                    <th>UTGST</th>
                                    <th>Export CGST</th>
                                    <th>Export SGST</th>
                                    <th>Export IGST</th>
                                    <th>Cess</th>
                                    <th>DBK SrNo</th>
                                    <th>Is Exempt</th>
                                    <th>Type</th>
                                    <th>User</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>Info</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {records.map((record, index) => (
                                    <tr key={record.id}>
                                      <td>{index + 1}</td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <button className="sgstbtn">
                                          <i className="fas fa-edit"></i>
                                        </button>
                                      </td>
                                      <td>
                                        <button className="sgstbtn">
                                          <i className="fas fa-trash"></i>
                                        </button>
                                      </td>
                                      <td>
                                        <button className="sgstbtn">
                                          <i className="fas fa-info-circle"></i>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ color: "blue", padding: "10px" }}
                  >
                    <div className="col-md-12 text-start">
                      <p>Total Records: {records.length}</p>
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

export default GstMaster;
