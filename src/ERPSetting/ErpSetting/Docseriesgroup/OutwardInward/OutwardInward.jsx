import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../../NavBar/NavBar.js";
import SideNav from "../../../../SideNav/SideNav.js";
import { Link } from "react-router-dom";

import "./OutwardInward.css";

const OutwardInward = () => {
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
    <div className="OutwardInward">
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
                {/* Header */}
                               <div className="DocumentSeries-header mb-2 text-start">
                                 <div className="row align-items-center">
                                   <div className="col-md-6">
                                     <h5 className="header-title">Document Series / Group</h5>
                                   </div>
                                   <div className="col-md-6 text-end">
                                     <Link type="button" className="vndrbtn" to="/WeekMaster">
                                       Company Info
                                     </Link>
                                   </div>
                                 </div>
                               </div>
               
                               {/* Button Group */}
                               <div className="DocumentSeriesmain">
                                   <div className="row text-start">
                                       <div className="col-md-12">
                                         <Link to='/Docseriesgroup' className="vndrbtn btn-light">Series Master</Link>
                                         <Link to='/MasterData' className="vndrbtn btn-light">Master Data</Link>
                                         <Link to='/PurchaseErp' className="vndrbtn btn-light">Purchase Order</Link>
                                         <Link to='/PurchaseERPGRN' className="vndrbtn btn-light">Purchase GRN</Link>
                                         <Link to='/OutwardInward' className="vndrbtn btn-light">57F4 Outward / Inward</Link>
                                         <Link to='/GSTsales' className="vndrbtn btn-light">GST Sales</Link>  
                                       </div>    
                                   </div>
                                   <div className="row text-start mt-2">
                                       <div className="col-md-12">
                                         <Link to='/GstsalesReturn' className="vndrbtn btn-light">GST Sales Return</Link>
                                         <Link to='/DebitcreditNote' className="vndrbtn btn-light">Debit Credit Note</Link>
                                         <Link to='/Docddelivery' className="vndrbtn btn-light">Delivery Challan</Link>
                                         <Link to='/DocAccount' className="vndrbtn btn-light">Account</Link>
                                         <Link to='/DocProduction' className="vndrbtn btn-light">Production</Link>
                                         <Link to='/Quotation' className="vndrbtn btn-light">Quotation</Link>
                                       </div>
                                   </div>
                               </div>

                <div className="OutwardInwardtable mt-2">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="header-title text-primary text-start">
                        #57 F4 Out Challan
                      </h4>
                      <div className=" mt-2 table-responsive">
                      <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Series No</th>
                              <th>Series Name</th>
                              <th>PO_GrpId</th>
                              <th>Prefix</th>
                              <th>Active</th>
                              <th>GST Calculate</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <input type="text" className="form-control" defaultValue="5F74" />
                              </td>
                              <td>3</td>
                              <td>
                                <input type="text" className="form-control" defaultValue="R/W" />
                              </td>
                              <td><input type="checkbox" checked /></td>
                              <td>
                                <select className="form-select" >
                                  <option value="No">No</option>
                                  <option value="Yes">Yes</option>
                                </select>
                              </td>
                            </tr>
                            {/* Add more rows as needed */}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4 className="header-title text-primary text-start">#57 F4 Inward Challan</h4>
                      <div className=" mt-2 table-responsive">
                      <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Series No</th>
                              <th>Group Name</th>
                              <th>Type</th>
                              <th>Prefix</th>
                              <th>Active</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <input type="text" className="form-control" defaultValue="Vendor_F4" />
                              </td>
                              <td>Vendor</td>
                              <td>
                                <input type="text" className="form-control" defaultValue="VSI" />
                              </td>
                              <td><input type="checkbox" checked /></td>
                            </tr>
                            {/* Add more rows as needed */}
                          </tbody>
                        </table>
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

export default OutwardInward;
