
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./OutwardChallanList.css";
import { useNavigate } from 'react-router-dom';


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>


const OutwardChallanList  = () => {
    const [sideNavOpen, setSideNavOpen] = useState(false);
      const navigate = useNavigate();  
      
        const handleButtonClick = () => {
          navigate('/'); 
        };

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
    <div className="OutwardChallanListMaster">
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
              <div className="OutwardChallanList">
                <div className="OutwardChallanList-header mb-2 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title"> Outward Challan List </h5>
                    </div>

                    <div className="col-md-8 text-end">
                        <button type="button" className=" vndrbtn" to="#/">
                            F7 Outward Report
                        </button> 
                        <button type="button" className=" vndrbtn" to="#/" onClick={handleButtonClick}>
                            Outward Challan Query
                        </button> 
                    </div>

                  </div>
                </div>
               
                <div className="OutwardChallanList-Main">
                    <div className="container-fluid">
                      
                        <div className="row g-3 text-start">  

                       <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>To:</label>
                          <input type="date" className="form-control" />
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-2">
                        <label htmlFor="">Plant:</label>
                        <select name="" className="form-control" style={{marginTop:"-0px"}} id="">
                            <option value="">Produlink</option>
                        </select>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-2">
                        <label htmlFor="">Series :</label>
                        <select name="" className="form-control" style={{marginTop:"-0px"}} id="">
                            <option value="">Select</option>
                            <option value="">57F4</option>
                            <option value="">Rework</option>
                            <option value="">Maintenance</option>
                            <option value="">Open</option>
                            <option value="">Not For Bill</option>
                            <option value="">Tool And Die</option>
                        </select>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-2">
                        <label htmlFor="">Status :</label>
                        <select name="" className="form-control" style={{marginTop:"-0px"}} id="">
                            <option value="">All</option>
                            <option value="">New</option>
                            <option value="">Partial</option>
                            <option value="">Completed</option>
                        </select>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-2">
                       <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label">Vender Name: </label>
                        </div>
                        <input type="text"  placeholder="Name" className="form-control"/>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-2">
                       <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label">Select Item : </label>
                        </div>
                        <input type="text"  placeholder="" className="form-control"/>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-2">
                       <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label">F4 Out No : </label>
                        </div>
                        <input type="text"  placeholder="No" className="form-control"/>
                      </div>
                        
                       <div className="col-6 col-md-2 align-items-center" style={{marginTop:"39px"}}>
                          <button type="button" className=" vndrbtn">
                            Search
                          </button>
                        </div>

                        </div>

                    </div>
                  </div>

             <div className="OutwardChallanList-Main mt-2 table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col"> Sr.</th>
                          <th scope="col"> Year</th>
                          <th scope="col"> Plant</th>
                          <th scope="col"> Series</th>
                          <th scope="col"> 57F4 No </th>
                          <th scope="col"> Out Rate </th>
                          <th scope="col"> PO No </th>
                          <th scope="col"> V Code</th>
                          <th scope="col"> Vender Name</th>
                          <th scope="col"> Item NO | Desc | Qty </th>
                          <th scope="col"> User </th>
                          <th scope="col"> Challan Status </th>
                          <th scope="col"> EWB </th>
                          <th scope="col"> DOC </th>
                          <th scope="col"> Email </th>
                          <th scope="col"> Edit </th>
                          <th scope="col"> View </th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>1</td>
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
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default OutwardChallanList