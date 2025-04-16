import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { useNavigate } from 'react-router-dom';
import "./PurchaseDabitNote.css";


const PurchaseDabitNote = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
   const navigate = useNavigate();  
  
    const handleButtonClick = () => {
      navigate('/DabitNoteList'); 
    };
    const handleBttnClick = () => {
      navigate('/DN574Fout'); 
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
    <div className="PurchaseDabitNoteMaster">
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
                <div className="PurchaseDabitNote">
                  <div className="PurchaseDabitNote-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">New DabitNote</h5>
                      </div>
                      <div className="col-md-2">
                          <div className="row">
                              <div className="col-md-4 mt-1">
                                <label htmlFor="">Type</label>
                              </div>
                              <div className="col-md-8">
                                <select className="form-control">
                                   <option>Select</option>
                                   <option>Direct</option>
                                   <option>GRN</option>
                                </select>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-md-2">
                      <div className="row">
                              <div className="col-md-4 mt-1">
                                <label htmlFor="">NoteType</label>
                              </div>
                              <div className="col-md-8">
                                <select className="form-control">
                                   <option>PurchaseReturn</option>
                                   <option>PurchaseRateDiff</option>
                                   <option>ShortQty</option>
                                   <option>Other</option>
                                </select>
                              </div>
                          </div>
                      </div>
                    
                        <div className="col-md-6 text-end">
                        <button type="button" className="vndrbtn" onClick={handleButtonClick}>
                          Dabit Note List
                        </button>
                        <button type="button" className="vndrbtn " onClick={handleBttnClick}>
                          DN-57F4out
                        </button>
                        </div>
                    </div>
                  </div>


                    <div className="PurchaseDabitNote-main">
                      <div className="row text-start">
                        <div className="col-3">
                           <div className="row">
                               <div className="col-md-6 mt-2">
                                  <label htmlFor="">DabitNote NO:</label>
                               </div>
                               <div className="col-md-6">
                                  <input type="text" className="form-control" placeholder="24250001"/>
                               </div>
                           </div>
                        </div>
                        <div className="col-3">
                           <div className="row">
                               <div className="col-md-6 mt-2">
                                  <label htmlFor="">DabitNote Date:</label>
                               </div>
                               <div className="col-md-6">
                                  <input type="date" className="form-control" placeholder=""/>
                               </div>
                          </div>
                        </div>
                        <div className="col-3">  
                        <div className="row">
                           <div className="col-md-6 mt-2">
                                  <label htmlFor="">Party Name:</label>
                               </div>
                               <div className="col-md-6">
                                  <input type="text" className="form-control" placeholder="Party Name"/>
                               </div>
                           </div>
                        </div>
                          <div className="col-2"><button className="vndrbtn ">Search</button>
                         </div>
                       </div>
                    </div>


                  <div className="PurchaseDabitNote-main mt-2">
                    <div className="PurchaseDabitNote-tabs">
                   
                      <div className="tab-content" id="" >

                          <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th className="">Item Code</th>
                                        <th>Stock </th>
                                        <th>Item Desc</th>
                                        <th>Remark</th>
                                        <th>Reason</th>
                                        <th>HSN Code</th>
                                        <th>Rate</th>
                                        <th>Qty</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" placeholder="Enter Name" className="form-control" /><br />
                                            <button className="vndrbtn">Search</button>
                                        </td>
                                        <td></td>
                                        <td><textarea className="form-control"></textarea></td>
                                        <td><textarea className="form-control"></textarea></td>
                                        <td>
                                            <select name="" className="form-control">
                                                <option value="">Select</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" className="form-control" />
                                        </td>
                                        <td>
                                            <input type="text" className="form-control" />
                                        </td>
                                        <td>
                                            <input type="text" className="form-control" />
                                            <select className="form-control" name="" id="">
                                                <option value="">Select</option>
                                            </select>
                                        </td>
                                        <td><button className="vndrbtn">Add</button></td>
                                    </tr>
                                    </tbody>
                                </table>
                          </div>

                            <div className="table-responsive">
                                        <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th>Sr.</th>
                                            <th>GRN No </th>
                                            <th>GRN Date</th>
                                            <th>Item Code</th>
                                            <th>Item Desc</th>
                                            <th>HSN Code</th>
                                            <th>GRN Qty.</th>
                                            <th>Stock.</th>
                                            <th>Reason</th>
                                            <th>Reason</th>
                                            <th>Quantity</th>
                                            <th>Unit</th>
                                            <th>Rate</th>
                                            <th>Amt</th>
                                            <th>Del</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><textarea name="" className="form-control" id=""></textarea></td>
                                                <td>
                                                    <select className="form-control" name="" id="">
                                                        <option value="">Select</option>
                                                    </select>
                                                </td>
                                                <td> <input type="text" className="form-control" /></td>
                                                <td> <input type="text" className="form-control" /></td>
                                                <td> <input type="text" className="form-control" /></td>
                                                <td> <input type="text" className="form-control" /></td>
                                                <td><span className="vndrbtn" style={{border:"1px solid black"}}>X</span></td>
                                            </tr>
                                        </tbody>
                                        </table>
                            </div>

                      </div>

                    </div>
                  </div>

                  <div className="PurchaseDabitNote-main mt-2">
                                      <div className="row">
                                              <div className="col-md-12">
                                                  <div className="table-responsive">
                                                      <table className="table table-bordered">
                                                      <thead>
                                                        <tr>
                                                          <th>Transport Charge</th>
                                                          <th>SubTotal</th>
                                                          <th colSpan="2">CGST</th>
                                                          <th colSpan="2">SGST</th>
                                                          <th colSpan="2">IGST</th>
                                                          <th colSpan="2">UTGST</th>
                                                          <th>TCS</th>
                                                          <th>
                                                            <div className="d-flex align-items-center gap-2">
                                                              <div className="form-check m-0">
                                                                <input 
                                                                  type="radio" 
                                                                  id="tds-basic" 
                                                                  name="fav_language" 
                                                                  value="FG" 
                                                                  className="form-check-input" 
                                                                />
                                                                <label htmlFor="tds-basic" className="form-check-label">
                                                                  TDSOnBasic
                                                                </label>
                                                              </div>
                                                              <div className="form-check m-0">
                                                                <input 
                                                                  type="radio" 
                                                                  id="tds-grand" 
                                                                  name="fav_language" 
                                                                  value="RM" 
                                                                  className="form-check-input" 
                                                                />
                                                                <label htmlFor="tds-grand" className="form-check-label">
                                                                  TDSOnGrandTotal
                                                                </label>
                                                              </div>
                                                            </div>
                                                          </th>
                                                          <th>Grand Total</th>
                                                        </tr>
                                                      </thead>
                                                          <tbody>
                                                          <td> <input type="text" className="form-control" placeholder="0" /> </td>
                                                          <td> <input type="text" className="form-control" placeholder="" /> </td>
                                                          <td> <input type="text" className="form-control" placeholder="00.00" /> %</td>
                                                          <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                                          <td> <input type="text" className="form-control" placeholder="00.00" /> %</td>
                                                          <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                                          <td> <input type="text" className="form-control" placeholder="00.00" /> %</td>
                                                          <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                                          <td> <input type="text" className="form-control" placeholder="00.00" /> %</td>
                                                          <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                                          <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                                          <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                                          <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                                          
                                                          </tbody>
                                                      </table>
                                                  </div>
                                              </div>
                                        </div>
                  </div>
                  <div className="PurchaseDabitNote-main mt-2">
                                        <div className="row text-start">
                                            <div className="col-md-2">
                                              <label htmlFor="">Modeof Transport</label>
                                              <input type="text" className="form-control" placeholder="By Road" />
                                            </div>
                                            <div className="col-md-2">
                                              <label htmlFor="">LR GC Note NO:</label>
                                              <input type="text" className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-2">
                                              <label htmlFor="">Eway Bill No:</label>
                                              <input type="text" className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-2">
                                              <label htmlFor="">Eway Bill Date:</label>
                                              <input type="date" className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-2">
                                              <label htmlFor="">Vehicle No:</label>
                                              <input type="text" className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-2">
                                              <label htmlFor="">Transpoter:</label>
                                              <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        
                                        <div className="row mt-2 text-start">     
                                            <div className="col-md-2">
                                              <label htmlFor="">PO No:</label>
                                              <input type="text" className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-2">
                                              <label htmlFor="">PO Date:</label>
                                              <input type="date" className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-2">
                                              <label htmlFor="">Invice No:</label>
                                              <input type="text" className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-2">
                                              <label htmlFor="">Invice Date:</label>
                                              <input type="date" className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-2">
                                              <label htmlFor="">Remark</label>
                                              <textarea name=""  className="form-control" id=""></textarea>
                                            </div>
                                            <div className="col-md-2 mt-4">
                                              <select name="" className="form-control" id="">
                                                  <option value="">Bussiness To Bussiness</option>
                                              </select>
                                            </div>
                                        </div>

                                        <div className="row mt-2 text-start">
                                            
                                            <div className="col-md-2">
                                              <input type="checkbox" className=" " placeholder="" />
                                              <label htmlFor=""> IS Service DN</label>
                                            </div>
                                            <div className="col-md-4">
                                              <button className="vndrbtn">Save Dabit Note</button>
                                              <button className="vndrbtn">Clear</button>
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

export default PurchaseDabitNote