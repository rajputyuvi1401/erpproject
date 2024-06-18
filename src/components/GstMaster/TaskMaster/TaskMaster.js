import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import { Link } from "react-router-dom";
import "./TaskMaster.css";
const TaskMaster = () => {
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

  const [taxCode, setTaxCode] = useState("");
  const [taxDesc, setTaxDesc] = useState("");
  const [module, setModule] = useState("");
  const [gstTaxCode, setGstTaxCode] = useState("");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [igst, setIgst] = useState("");
  const [cess, setCess] = useState("");

  return (
    <div className="taskmaster">
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
                <div className="taskmaster1">
                  <div className="taskheader">
                    <div>
                      <h5 style={{ color: "blue" }}>Tax Code Master</h5>
                    </div>
                    <div className="text-end">
                      <Link to="/gst-rate-master" className="taskbtn">
                        GST Rate Master
                      </Link>
                      <Link to="/" className="taskbtn">
                        Export To Excel
                      </Link>
                    </div>
                  </div>
                  <div className="taskmain">
                    <div className="container-fluid">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Tax Code</th>
                              <th>Tax Desc</th>
                              <th>Module</th>
                              <th>GST Tax Code</th>
                              <th>CGST (%)</th>
                              <th>SGST (%)</th>
                              <th>IGST (%)</th>
                              <th>Cess (%)</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input
                                  type="text"
                                  value={taxCode}
                                  onChange={(e) => setTaxCode(e.target.value)}
                                  className="form-control"
                                />
                              </td>

                              <td>
                                <textarea
                                  value={taxDesc}
                                  onChange={(e) => setTaxDesc(e.target.value)}
                                  className="form-control"
                                ></textarea>
                              </td>

                              <td>
                                <select
                                  value={module}
                                  onChange={(e) => setModule(e.target.value)}
                                  className="form-control"
                                >
                                  <option value="">Select Module</option>
                                  {/* Add your module options here */}
                                </select>
                              </td>

                              <td>
                                <select
                                  value={gstTaxCode}
                                  onChange={(e) =>
                                    setGstTaxCode(e.target.value)
                                  }
                                  className="form-control"
                                >
                                  <option value="">Select GST Tax Code</option>
                                  {/* Add your GST tax code options here */}
                                </select>
                              </td>

                              <td>
                                <input
                                  type="text"
                                  value={cgst}
                                  onChange={(e) => setCgst(e.target.value)}
                                  className="form-control"
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  value={sgst}
                                  onChange={(e) => setSgst(e.target.value)}
                                  className="form-control"
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  value={igst}
                                  onChange={(e) => setIgst(e.target.value)}
                                  className="form-control"
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  value={cess}
                                  onChange={(e) => setCess(e.target.value)}
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <button className="maintaskbtn">Save</button>
                                <button className="maintaskbtn">Cancel</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="taskmiddle">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th className="blue-th">Sr</th>
                                    <th className="blue-th">Tax Code</th>
                                    <th className="blue-th">Tax Desc</th>
                                    <th className="blue-th">Module</th>
                                    <th className="blue-th">GST Tax Code</th>
                                    <th className="blue-th">CGST (%)</th>
                                    <th className="blue-th">SGST (%)</th>
                                    <th className="blue-th">IGST (%)</th>
                                    <th className="blue-th">Cess (%)</th>
                                    <th className="blue-th">Edit</th>
                                    <th className="blue-th">Delete</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
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
                                      <i className="fas fa-edit"></i>
                                    </td>
                                    <td>
                                      <i className="fas fa-trash"></i>
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
                  <div className="row text-start" style={{ marginTop: "5px" }}>
                    <div className="col-md-12">
                      <h5 style={{ color: "blue" }}>Total Record:00</h5>
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

export default TaskMaster;
