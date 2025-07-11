import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../../NavBar/NavBar.js";
import SideNav from "../../../../SideNav/SideNav.js";
import "./SalesOrderItemAdd.css";


const SalesOrderItemAdd = () => {
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
    <div className="SalesOrderItemAddMaster">
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
                <div className="SalesOrderItemAdd">
                  <div className="SalesOrderItemAdd-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title"> Sales Order Item Add </h5>
                      </div>
                      <div className="col-md-1">
                        <label htmlFor="">Series</label>
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

                  <div className="SalesOrderItemAdd-Main">
                    <div className="container-fluid">

                      <table className="table table-responsive table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">Amd No. :</th>
                            <th scope="col">Amd Date :</th>
                            <th scope="col">Cust Name :</th>
                            <th scope="col">PO No :     PO Type :</th>
                            <th scope="col">Next Rev No :</th>
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
                              {/* <input type="radio"  id="" name="fav_language" value="" />
                          <label for="">Rate</label>
                          <input type="radio" id="" name="fav_language" value="" />
                           <label for="">Qty</label>
                           <input type="radio" id="" name="fav_language" value="" />
                          <label for="">Close</label>
                          <input type="radio" id="" name="fav_language" value="" />
                           <label for="">PO Date</label> */}

                              {/* <button>Add</button> */}
                            </td>
                            <td> <input type="text" className="form-control" /> </td>
                            <td><input type="date" className="form-control" /></td>
                            <td><textarea name="" className="form-control" id=""></textarea></td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  </div>

                  <div className="SalesOrderItemAdd-Main mt-2">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Select Item.</th>
                            <th>Cust Item Code</th>
                            <th>Item Desc</th>
                            <th>Rate | Desc</th>
                            <th> Qty | UOM</th>
                            <th>RM Type| Item Wt.</th>
                            <th>Pkg. Trans </th>
                            <th>Plan | Due Date</th>
                            <th>Type</th>
                            <th>Remark</th>
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" className="form-control" placeholder="Enter Item Code" /> <button className="vndrbtn">Search</button> <br />
                              Rev. No :
                            </td>

                            <td> <input type="text" className="form-control w-55" placeholder="  " /> <br />
                              Line No : <input type="text" className="form-control w-50 mt-2" placeholder=" " /> <br /> PR No. :  <input type="text" className="form-control w-50 mt-2" placeholder=" " />
                            </td>

                            <td><textarea name="item" className="form-control" id="itemdesc"></textarea></td>

                            <td> <input type="text" className="form-control w-60 mt-2" placeholder=" " /> <br />
                              <input type="text" className="form-control w-50 mt-2" placeholder=" " /> %</td>

                            <td> <input type="text" className="form-control w-60 mt-2" placeholder=" " /> <br />  <input type="text" className="form-control w-50 mt-2" placeholder=" " />
                            </td>

                            <td>
                              <select className="form-control" name="" id="">
                                <option value="">NOS</option>
                              </select> <br />
                              <input type="text" className="form-control w-60 mt-2" placeholder="Item Wt. " /> <br />  <input type="text" className="form-control w-50 mt-2" placeholder="Per Unit " />
                            </td>

                            <td> <input type="text" className="form-control w-60 mt-2" placeholder=" 0 " /> <br />  <input type="text" className="form-control w-60 mt-2" placeholder=" 0 " /></td>
                            <td> <input type="date" className="form-control w-60 mt-2" placeholder=" " /> <br />  <input type="date" className="form-control w-60 mt-2" placeholder=" " /></td>

                            <td>
                              <select className="form-control" name="" id="">
                                <option value="">Select</option>
                              </select> <br />
                              <select name="" id="">
                                <option value="">RUGEL</option>
                              </select>
                            </td>

                            <td>
                              <textarea className="form-control" name="" id=""></textarea>
                            </td>

                            <td><button className="vndrbtn">ADD</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="SalesOrderItemAddtable mt-2">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Sr.</th>
                            <th>Item No </th>
                            <th>Item Code</th>
                            <th>Description</th>
                            <th>Rate | Desc</th>
                            <th>Amort Cost </th>
                            <th>PO Qty | UOM</th>
                            <th>Rate Type| Item Wt.</th>
                            <th>Sub Total</th>
                            <th>Pkg. Trans Changes</th>
                            <th>Plan | Due Date</th>
                            <th>Type</th>
                            <th>GST</th>
                            <th>Remark</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Line No : <br /> PR No.</td>
                            <td>Rev. No : </td>
                            <td> </td>
                            <td> Disc : % </td>
                            <td>  </td>
                            <td><br />  UMO :</td>
                            <td>Rate Type: <br />Item Wt. : </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>CGST : %    SGST : %<br />
                              IGST : %   Gross Rate: %</td>
                            <td></td>
                            <td>Edit</td>
                            <td> X </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <di className="row mt-5">
                    <div className="col-md-12 text-end">
                       <button className="vndrbtn"> Create PO Amendment </button>
                    </div>
                  </di>

                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SalesOrderItemAdd