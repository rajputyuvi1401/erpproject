import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./BomRouting.css";
import { Link } from "react-router-dom";
const BomRouting = () => {
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
    <div className="BomRouting">
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
                <div className="BomRouting1">
                  <div className="BomRoutingheading">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-2 text-start">
                          <h5 style={{ color: "blue" }}>
                            BOM And Routing List
                          </h5>
                        </div>
                        <div className="col-md-1 col-form-label">
                          <label htmlFor="TotalBom">Total BOM:</label>
                        </div>

                        <div className="col-sm-9 text-end">
                          <button className="BOMRoutingbtn">FG:548</button>
                          <button className="BOMRoutingbtn">SFG:1</button>
                          <button className="BOMRoutingbtn">RM:44</button>
                          <button className="BOMRoutingbtn">NPD:0</button>
                          <button className="BOMRoutingbtn">Total:593</button>
                          <button className="BOMRoutingbtn">Un-Auth:2</button>
                          <button className="BOMRoutingbtn">Auth:591</button>

                          <button className="BOMRoutingbtn">BOM:Report</button>
                          <Link
                            to={"/bill-material"}
                            className="BOMRoutingbtn"
                            style={{ padding: "12px" }}
                          >
                            New / Modify BOM
                          </Link>
                          <button className="BOMRoutingbtn">BOM:Query</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="BomRoutingMain">
                    <div className="Container-fluid">
                      <div className="row mb-3 text-start">
                        <div className="col-md-1">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>ALL</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-sm-2">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                          />
                        </div>
                        <label
                          htmlFor="itemGroup"
                          className="col-sm-1 col-form-label"
                        >
                          Item Group:
                        </label>
                        <div className="col-md-2">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <button className="BOMMainbtn">search</button>
                          <button className="BOMMainbtn">View All</button>
                          <button className="BOMMainbtn">
                            Export Excel (Routing)
                          </button>
                          <button className="BOMMainbtn">
                            Export Excel (BOM)
                          </button>
                          <button className="BOMMainbtn">Excel(Routing)</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="BomRoutingTable">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Sr</th>
                                <th>Item No</th>
                                <th>Item Code</th>
                                <th>Item Docs</th>
                                <th>NPO</th>
                                <th>Auth</th>
                                <th>User</th>
                                <th>View</th>
                                <th>View</th>
                                <th>Tree</th>
                                <th>Tree</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Item No 1</td>
                                <td>Item Code 1</td>
                                <td>Item Docs 1</td>
                                <td>NPO 1</td>
                                <td>Auth 1</td>
                                <td>User 1</td>
                                <td>View 1</td>
                                <td>View 1</td>
                                <td>Tree 1</td>
                                <td>Tree 1</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Item No 2</td>
                                <td>Item Code 2</td>
                                <td>Item Docs 2</td>
                                <td>NPO 2</td>
                                <td>Auth 2</td>
                                <td>User 2</td>
                                <td>View 2</td>
                                <td>View 2</td>
                                <td>Tree 2</td>
                                <td>Tree 2</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Item No 1</td>
                                <td>Item Code 1</td>
                                <td>Item Docs 1</td>
                                <td>NPO 1</td>
                                <td>Auth 1</td>
                                <td>User 1</td>
                                <td>View 1</td>
                                <td>View 1</td>
                                <td>Tree 1</td>
                                <td>Tree 1</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Item No 2</td>
                                <td>Item Code 2</td>
                                <td>Item Docs 2</td>
                                <td>NPO 2</td>
                                <td>Auth 2</td>
                                <td>User 2</td>
                                <td>View 2</td>
                                <td>View 2</td>
                                <td>Tree 2</td>
                                <td>Tree 2</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="BomRouteBottom">
                    <div className="row">
                      <div className="col-md-6 text-start">
                        <h6 style={{ color: "blue" }}>
                          Total Reacords<span>00</span>
                        </h6>
                      </div>
                      <div className="col-md-6 text-end">
                        <h6 style={{ color: "blue" }}>
                          Format<span>PDF</span>
                        </h6>
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

export default BomRouting;
