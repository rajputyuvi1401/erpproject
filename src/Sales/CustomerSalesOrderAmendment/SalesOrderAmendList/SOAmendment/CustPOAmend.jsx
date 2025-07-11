import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../../NavBar/NavBar.js";
import SideNav from "../../../../SideNav/SideNav.js";
import "./CustPOAmend.css";


const CustPOAmend = () => {
  const navigate = useNavigate();
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

  const handleNavigate = () => {
    navigate('/SalesOrderAmendList');
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  return (
    <div className="CustPOAmendMaster">
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
                <div className="CustPOAmend">
                  <div className="CustPOAmend-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title"> Customer PO Amendment </h5>
                      </div>
                      <div className="col-md-1">
                        <label htmlFor=""> Series </label>
                      </div>
                      <div className="col-md-1">
                        <select className="form-select" name="" id="">
                          <option value="">Select</option>
                          <option value="">SO Amendment</option>
                          <option value=""></option>
                        </select>
                      </div>

                      <div className="col-md-6 text-end">
                        <button type="button" className="vndrbtn" to="#/" onClick={handleNavigate}>
                          SO Amendment List
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="CustPOAmend-Main">
                    <div className="container-fluid">

                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Amd No. :</th>
                            <th scope="col">Amd Date :</th>
                            <th scope="col">Customer :</th>
                            <th scope="col">PO No :</th>
                            <th scope="col">Amend Type :</th>
                            <th scope="col"> Rev No :</th>
                            <th scope="col">Ref :</th>
                            <th scope="col">Ref Date : </th>
                            <th scope="col">Narration : </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td><input type="text" className="form-control" /> <input type="text" className="form-control" /> </td>
                            <td><input type="date" className="form-control" /></td>
                            <td><input type="text" className="form-control" placeholder="Name" /></td>
                            <td>
                              <select className="form-select" name="" id="">
                                <option value="">Select an Option</option>
                                <option value=""></option>
                                <option value=""></option>
                              </select>
                            </td>
                            <td>
                              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                  <input  type="radio"  name="fav_language"  value="rate"  style={{ verticalAlign: "middle" }}/>
                                  Rate
                                </label>
                                <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                  <input  type="radio"  name="fav_language"  value="qty"  style={{ verticalAlign: "middle" }}/>
                                  Qty
                                </label>
                                <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                  <input  type="radio"  name="fav_language"  value="close"  style={{ verticalAlign: "middle" }}/>
                                  Close
                                </label>
                                <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                  <input  type="radio"  name="fav_language"  value="po_date"  style={{ verticalAlign: "middle" }}/>
                                  PO Date
                                </label>
                                <button className="vndrbtn">Add</button>
                              </div>

                            </td>
                            <td>  </td>
                            <td> <input type="text" className="form-control" /> </td>
                            <td><input type="date" className="form-control" /></td>
                            <td><textarea name="" className="form-control" id=""></textarea></td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  </div>

                  <div className="CustPOAmendtable mt-2">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th scope="col"> Sr </th>
                            <th scope="col"> Cust PO No </th>
                            <th scope="col"> PO Date </th>
                            <th scope="col"> Item No </th>
                            <th scope="col"> Item Code </th>
                            <th scope="col"> Item Description </th>
                            <th scope="col"> EIT Date </th>
                            <th scope="col"> Remark Note </th>
                          </tr>
                        </thead>

                        <tbody>
                          {/* Example data row */}
                          <tr>
                            <td> 1 </td>
                            <td> PO Line No : </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td> <input type="date" className="form-control" /> </td>
                            <td> <textarea name="" className="form-control" id=""></textarea> </td>
                          </tr>
                        </tbody>
                      </table>
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

export default CustPOAmend