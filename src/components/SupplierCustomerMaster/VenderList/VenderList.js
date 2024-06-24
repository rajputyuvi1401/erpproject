import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import "./VenderList.css";
import { Link } from "react-router-dom";
const VenderList = () => {
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
    <div className="VenderList">
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
                <div className="VenderList1">
                  <div className="VenderList2">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>
                            Supplier / Customer / Vender-List
                          </h5>
                        </div>
                        <div className="col-md-6 text-end">
                          <Link
                            to={"/Supplier-Customer-Master"}
                            className="venbtn"
                          >
                            Add New
                          </Link>
                          <Link className="venbtn">Customer - Query</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="VenderListMain">
                    <div className="container-fluid">
                      <div className="row text-start">
                        <div className="row mb-3 text-start">
                          <label
                            for="inputEmail3"
                            className="col-sm-1 col-form-label"
                          >
                            Type
                          </label>
                          <div className="col-sm-2">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select..</option>
                              <option value="1">Customer</option>
                              <option value="2">Supplier</option>
                              <option value="3">Job Work</option>
                              <option value="4">C/S/JW</option>
                            </select>
                          </div>
                          <label
                            for="inputEmail3"
                            className="col-sm-2 col-form-label"
                          >
                            Search Name
                          </label>
                          <div className="col-sm-3">
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail3"
                              placeholder="Please enter name"
                            />
                          </div>
                          <div className="col-sm-4">
                            <button className="Vendermainbtn">Search</button>
                            <button className="Vendermainbtn">View All</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Vender3table">
                    <div className="Container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th className="blue-th" scope="col">
                                    Sr.
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Type
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Code
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Name
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Contact No.
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Email
                                  </th>
                                  <th className="blue-th" scope="col">
                                    V.Code
                                  </th>
                                  <th className="blue-th" scope="col">
                                    P.team
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Is Reg
                                  </th>
                                  <th className="blue-th" scope="col">
                                    GST No.
                                  </th>
                                  <th className="blue-th" scope="col">
                                    GST Code
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Auth
                                  </th>
                                  <th className="blue-th" scope="col">
                                    User
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Rev
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Edit
                                  </th>
                                  <th className="blue-th" scope="col">
                                    View1
                                  </th>
                                  <th className="blue-th" scope="col">
                                    View2
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Some Type</td>
                                  <td>ABC123</td>
                                  <td>Company ABC</td>
                                  <td>1234567890</td>
                                  <td>company@example.com</td>
                                  <td>V123</td>
                                  <td>Team A</td>
                                  <td>Yes</td>
                                  <td>1234567890123</td>
                                  <td>GST123</td>
                                  <td>Yes</td>
                                  <td>User1</td>
                                  <td>Yes</td>
                                  <td>Edit</td>
                                  <td>View</td>
                                  <td>View</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vender-bottom">
                    <div className="row" style={{ color: "blue" }}>
                      <div className="col-md-12 text-start">
                        <div className="row mb-3 text-start">
                          <label
                            for="inputEmail3"
                            className="col-sm-4 col-form-label"
                          >
                            Total Record : Label
                          </label>
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

export default VenderList;
