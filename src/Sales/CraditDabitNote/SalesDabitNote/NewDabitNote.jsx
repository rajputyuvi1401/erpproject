import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { useNavigate } from 'react-router-dom';
import "./NewDabitNote.css";

const NewDabitNote = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
     const navigate = useNavigate();  
    
      const handleButtonClick = () => {
        navigate('/DabitNoteList'); 
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
    <div className="NewDabitNoteMaster">
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
                <div className="NewDabitNote">
                  <div className="NewDabitNote-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">New Dabit Note (Sales Rate Diff) </h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <button type="button" className=" vndrbtn" onClick={handleButtonClick}>
                          Dabit Note List
                        </button>
                        </div>
                    </div>
                  </div>

                  <div className="NewDabitNote-main">
                     <div className="row text-start">

                     <div className="col-md-2">
                            <label htmlFor="">Dabit Note No.:</label>
                            <input type="date" className="form-control" placeholder="24250001"/>                            
                      </div> 
                     <div className="col-md-2">
                            <label htmlFor="">Dabit Note Date :</label>
                            <input type="date" className="form-control"/>
                      </div>
                      <div className="col-md-2">
                            <label htmlFor="">Type :</label>
                            <select name="" id="" className="form-control">
                               <option value="">Select</option>
                               <option value="">Group</option>
                               <option value="">Single</option>
                           </select>
                      </div> 
                      <div className="col-md-2">
                            <label htmlFor="">Group :</label>
                            <label> 1 Dabit Note </label>
                     </div>

                     <div className="col-md-3">
                            <label htmlFor="">Single :</label>
                            <label htmlFor="">Per Item Wise Dabit Note</label>
                     </div>

                     </div>
                  </div>

                  <div className="NewDabitNote-main">
                    <div className="NewDabitNote-second">
                      <ul className="nav nav-tabs" id="NewDabitNoteTabs" role="tablist" >
                        <li className="nav-item" role="presentation">
                          <button  className="nav-link active"  id="invoicedetails-tab"  data-bs-toggle="tab"  data-bs-target="#invoicedetails"  type="button"  role="tab"  >
                            Invoice Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="dabitnotedetails-tab" data-bs-toggle="tab" data-bs-target="#dabitnotedetails" type="button" role="tab" >
                            DabitNoteDetails
                          </button>
                        </li>
                      </ul>

                      <div className=""  id="NewDabitNoteTabsContent">

                        <div  className="tab-pane fade show active" id="invoicedetails" role="tabpanel" >
                            <div className="NewDabitNote-main">
                                  <div className="row text-start">

                                  <div className="col-md-3">
                                          <label htmlFor="">Plant :</label>
                                          <select name="" id="" className="form-control">
                                            <option value="">ProduLink</option>
                                        </select>
                                    </div> 
                                    <div className="col-md-3">
                                          <label htmlFor="">From Date:</label>
                                          <input type="date" className="form-control"/>
                                    </div>
                                    <div className="col-md-3">
                                          <label htmlFor="">To Date :</label>
                                          <input type="date" className="form-control"/>
                                    </div>

                                  <div className="col-md-3">
                                          <label htmlFor="">Customer.:</label>
                                          <input type="date" className="form-control" placeholder="Enter Name ..."/>                            
                                    </div> 
                                  
                                    <div className="col-md-3 mt-3">
                                          <label htmlFor="">Add Code :</label>
                                          <select name="" id="" className="form-control">
                                            <option value="">Select</option>
                                            <option value="">\</option>
                                            <option value=""></option>
                                        </select>
                                    </div> 
                                    <div className="col-md-3 mt-3">
                                      <div className="d-flex justify-content-start align-items-center">
                                            <input type="checkbox" id="Item-checkbox" />
                                            <label htmlFor="Item-checkbox" className="ms-1">Item:</label>
                                        </div>
                                            <input type="text" placeholder="Enter Code | Name" className="form-control"/>
                                    </div> 

                                  <div className="col-md-3 mt-3">
                                          <label htmlFor="">Note Type :</label>
                                          <select name="" id="" className="form-control">
                                            <option value="">All Inv</option>
                                            <option value="">\</option>
                                            <option value=""></option>
                                        </select>
                                    </div> 
                                    <div className="col-md-3">
                                        <button type="button" className=" vndrbtn w-100"  style={{marginTop:"35px"}}>
                                            Search
                                        </button> 
                                    </div>

                                  </div>
                            </div> 
                        </div>

                         <div className="tab-pane fade" id="dabitnotedetails" role="tabpanel" >
                              <div className="NewDabitNote-header text-start">

                                 <div className="table-responsive">
                                  <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th>No.</th>
                                            <th>Inv.No </th>
                                            <th>Inv Date</th>
                                            <th>HSN Code</th>
                                            <th>Qty </th>
                                            <th>Edit</th>
                                            <th>Old Rate</th>
                                            <th>New Rate</th>
                                            <th>Disc %</th>
                                            <th>Diff</th>
                                            <th>Diff Amt</th>
                                            <th>GRIR No</th>
                                            <th>GRIR Date</th>
                                            <th>GRIR Qty</th>
                                            <th>Line No</th>
                                            <th>PO No Date</th>
                                            <th>Amd No Date</th>
                                            <th>Remark</th>
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
                                                <td>Edit</td>
                                                <td></td>
                                                <td><input type="text" className="form-control" /></td>
                                                <td></td>
                                                <td><input type="text" className="form-control" /></td>
                                                <td><input type="text" className="form-control" /></td>
                                                <td><input type="text" className="form-control" /></td>
                                                <td><input type="date" className="form-control" /></td>
                                                <td><input type="text" className="form-control" /></td>
                                                <td><input type="text" className="form-control" /></td>
                                                <td><input type="date" className="form-control" /></td>
                                                <td><input type="date" className="form-control" /></td>
                                                <td><textarea name="" id=""></textarea></td>
                                                <td> X </td>
                                            </tr>
                                        </tbody>
                                 </table>
                                 </div>

                                 <div className="row">
                                    <div className="col-md-12">
                                      <div className="table-responsive">
                                        <table className="table">
                                          <tbody>
                                            <tr>
                                              <td>SubTotal:</td>
                                              <td>Disc Amt</td>
                                              <td>Ass Amt</td>
                                              <td>CGST</td>
                                              <td>SGST</td>
                                              <td>IGST</td>
                                              <td>UTGST</td>
                                              <td>TCS</td>
                                              <td>Grand Total</td>
                                            </tr>
                                            <tr>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td><input type="text" placeholder="00.00" className="form-control" />%</td>
                                              <td><input type="text" placeholder="00.00" className="form-control" />%</td>
                                              <td><input type="text" placeholder="00.00" className="form-control" />%</td>
                                              <td><input type="text" placeholder="00.00" className="form-control" />%</td>
                                              <td><input type="text" placeholder="00.00" className="form-control" />%</td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td><input type="text" className="form-control" /></td>
                                              <td><input type="text" className="form-control" /></td>
                                              <td><input type="text" className="form-control" /></td>
                                              <td><input type="text" placeholder="00.00" className="form-control" /></td>
                                              <td><input type="text" placeholder="00.00" className="form-control" /></td>
                                              <td><input type="text" placeholder="00.00" className="form-control" /></td>
                                              <td><input type="text" placeholder="00.00" className="form-control" /></td>
                                              <td><input type="text" placeholder="00.00" className="form-control" /></td>
                                              <td><input type="text" placeholder="00.00" className="form-control" /></td> 
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                 </div>

                                 <div className="row text-start">
                                      <div className="col-md-3">
                                        <label htmlFor="">Bill To Add Code</label>
                                          <select className="form-control" name="" id="">
                                                <option value=""></option>
                                          </select>
                                      </div>
                                      <div className="col-md-3">
                                        <label htmlFor="">:</label>
                                        <textarea name="" className="form-control" id=""></textarea>
                                      </div>
                                      <div className="col-md-3">
                                        <label htmlFor="">Other Reference:</label>
                                        <textarea name="" className="form-control" id=""></textarea>
                                      </div>
                                      <div className="col-md-3">
                                        <label htmlFor="">Remark :</label>
                                        <textarea name="" className="form-control" id=""></textarea>
                                      </div>
                                 </div>

                                  <div className="row mt-2 mt-2 text-start">
                                    
                                      <div className="col-md-3 ">
                                          <label htmlFor="">For E-Invoice</label>
                                        <select name="" className="form-control" id="">
                                            <option value="">Bussiness To Bussiness</option>
                                        </select>
                                      </div>
                                      <div className="col-md-2 d-flex align-items-center">
                                      <input type="checkbox" id="isServiceDn" className="me-2" />
                                      <label htmlFor="isServiceDn">IS Service DN</label>
                                    </div>

                                      <div className="col-md-4 d-flex mt-4">
                                        <button className=" vndrbtn">Save Dabit Note</button>
                                        <button className=" vndrbtn">Cancel</button>
                                      </div>

                                  </div>

                             </div>
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


export default NewDabitNote