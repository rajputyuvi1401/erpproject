import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../../NavBar/NavBar.js";
import SideNav from "../../../../SideNav/SideNav.js";
import { Link } from "react-router-dom";
import "./PurchaseERPGRN.css";
import { FaTrash } from "react-icons/fa";


const PurchaseERPGRN = () => {
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
    <div className="PurchaseERPGRN">
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
                <div className="GRNSeries">
                  {/* Header */}
                                 <div className="GRNSeries-header mb-2 text-start">
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
                                 <div className="GRNSeriesmain">
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

                  <div className="GRNSeriesmain mt-2">
                    <div className="row text-start">
                      
                      <div className="col-md-2">
                        <label htmlFor="seriesNo" className="col-form-label">Series No</label>
                        <input type="text" id="seriesNo" className="form-control" />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="seriesNameDesc" className="col-form-label">Series Name/Desc</label>
                        <input type="text" id="seriesNameDesc" className="form-control" />
                      </div>
                    
                    
                      <div className="col-md-2">
                        <label htmlFor="moduleSelect" className="col-form-label">Type:</label>
                        <select id="moduleSelect" className="form-select" style={{marginTop:"-1px"}}>
                          <option>Select</option>
                          <option>Module 1</option>
                          <option>Module 2</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="seriesPrefix" className="col-form-label">Series Prefix</label>
                        <input type="text" id="seriesPrefix" className="form-control" />
                      </div>
                      
                      <div className="col-md-1">
                        <button type="submit" className="vndrbtn" style={{marginTop:"35px"}}>
                          Save
                        </button>
                      </div>
                    </div>
                 </div>

                 <div className="GRNSeriestable mt-2 table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Series No</th>
                          <th>Series Name</th>
                          <th>Type</th>
                          <th>Prefix</th>
                          <th>Plant</th>
                          <th>Active</th>
                          <th>RCM</th>
                          <th>Inventory</th>
                          <th>Purchase Series</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>        
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <input
                                type="checkbox"
                                checked=''
                                readOnly
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                checked=''
                                readOnly
                              />
                            </td>
                            <td></td>
                            <td>
                              <input
                                type="checkbox"
                                checked={''}
                                readOnly
                              />
                            </td>
                            <td> <FaTrash/>  </td>
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
  );
};

export default PurchaseERPGRN;
