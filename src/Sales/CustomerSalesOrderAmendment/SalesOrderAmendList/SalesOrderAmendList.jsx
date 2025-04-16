import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./SalesOrderAmendList.css";
import {  FaEye} from "react-icons/fa";

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>


const SalesOrderAmendList    = () => {
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
    <div className="SalesOrderAmendListMaster">
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
              <div className="SalesOrderAmendList">
                <div className="SalesOrderAmendList-header mb-2 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title">Sales Order Amendment List </h5>
                    </div>

                    <div className="col-md-8 d-flex justify-content-end align-items-start gap-2">
  {/* SO Amendment Button */}
  <button type="button" className="vndrbtn">
    SO Amendment Register
  </button>

  {/* Dropdown Menu */}
  <div className="dropdown">
    <button
      className="vndrbtn dropdown-toggle"
      type="button"
      id="salesOrderDropdown"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Sales Order Amendment Menu
    </button>

    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="salesOrderDropdown">
      <li>
        <a className="dropdown-item" href="/so-amendment">
          SO Amendment
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="/item-addition-regular">
          Item Addition (Regular)
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="/item-addition-export">
          Item Addition (Export)
        </a>
      </li>
    </ul>
  </div>
                    </div>



                  </div>
                </div>
               
                <div className="SalesOrderAmendList-Main">
                    <div className="container-fluid">
                  <div className="row g-3 text-start">  

                       <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>To:</label>
                          <input type="date" className="form-control" />
                        </div>
                       
                      <div className="col-sm-6 col-md-2 col-lg-2">
                       <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label">Customer: </label>
                        </div>
                        <input type="text"  placeholder="Name" className="form-control"/>
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-2">
                      <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label">Item: </label>
                        </div>
                        <input type="text" placeholder="Name" className="form-control" />
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-2">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label"> Amd.No: </label>
                        </div>
                        <input type="text" placeholder="" className="form-control" />
                      </div>
                      <div className="col-sm-6 col-md-2 col-lg-2">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label"> PO.No: </label>
                        </div>
                        <input type="text" placeholder="" className="form-control" />
                      </div>


                      <div className="col-6 col-md-2">
                      <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="machineUtilizeCheckbox" />
                            <label htmlFor="machineUtilizeCheckbox" className="form-check-label"> LastOption: </label>
                        </div>
                          <button type="button" className=" vndrbtn w-100">
                            Search
                          </button>
                        </div>

                      </div>

                    </div>
                  </div>

             <div className="SalesOrderAmendListtable table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Sr.</th>
                          <th scope="col">Type</th>
                          <th scope="col">Amd No</th>
                          <th scope="col">Amd Date</th>
                          <th scope="col">Ref No</th>
                          <th scope="col">Ref Date</th>
                          <th scope="col">Cust Name</th>
                          <th scope="col">SO No</th>
                          <th scope="col">SO Date</th>
                          <th scope="col">CustPO No</th>
                          <th scope="col">CustPO Date</th>
                          <th scope="col">User</th>
                          <th scope="col">Auth </th>
                          <th scope="col">View </th>

                        </tr>
                      </thead>

                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>1</td>
                          <td>Rate</td>
                          <td>SOAMD242500123</td>
                          <td>02/12/24</td>
                          <td>00000034</td>
                          <td>12/12/24</td>
                          <td>C0005 ENDURANGE TECHNOLOGIES LTD (I) </td>
                          <td>2223000135</td>
                          <td>10/11/23</td>
                          <td>19000008022</td>
                          <td>09/01/23</td>
                          <td>More</td>
                          <td>! More</td>
                          <td> <FaEye /></td>
                        </tr>
                      </tbody>  
                    </table>
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

export default SalesOrderAmendList