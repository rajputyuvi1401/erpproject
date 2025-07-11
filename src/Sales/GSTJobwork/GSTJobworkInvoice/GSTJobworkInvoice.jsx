import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { FaPlus } from "react-icons/fa6";
import Cached from "@mui/icons-material/Cached.js";
import { useNavigate } from 'react-router-dom';
import "./GSTJobworkInvoice.css";

const GSTJobworkInvoice = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/DChallan');
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
    <div className="GSTJobworkInvoiceMaster">
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
                <div className="GSTJobworkInvoice">
                  <div className="GSTJobworkInvoice-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">New Jobwork Invoice</h5>
                      </div>
                      <div className="col-md-1">Plant</div>
                      <div className="col-md-1">
                        <select className="form-control">
                          <option>ProduLink</option>
                        </select>
                      </div>
                      <div className="col-md-1">Series</div>
                      <div className="col-md-1">
                        <select className="form-control">
                          <option>Labour Invoice</option>
                        </select>
                      </div>
                      <div className="col-md-1">Type</div>
                      <div className="col-md-1">
                        <select className="form-control">
                          <option>Labour Invoice</option>
                          <option>Labour Charges/Service/Tool (Challan)</option>
                          <option>Labour Invoice (BOM Consuption)</option>
                        </select>
                      </div>
                      <div className="col-md-1">Type:</div>
                      <div className="col-md-1">
                        <select className="form-control">
                          <option>GST</option>
                          <option>Stock Transfer</option>
                          <option>Direct Export</option>
                          <option>Third Party EXP (In State)</option>
                          <option>Third Party Export (Out State)</option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <input className="form-control" type="text" placeholder="InvoiceNo:" />
                      </div>

                      <div className="col-md-1 text-end">
                        <button type="button" className=" vndrbtn" onClick={handleButtonClick}>
                          DC
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="GSTJobworkInvoice-main">
                    <div className="GSTJobworkInvoice-tabs">

                      <ul
                        className="nav nav-tabs"
                        id="AssembleEntryTabs"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="itemdetails-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#itemdetails"
                            type="button"
                            role="tab"
                          >
                            A. Item Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="invdetail-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#invdetail"
                            type="button"
                            role="tab"
                          >
                            B. Invoice Detail
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="invtaxes-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#invtaxes"
                            type="button"
                            role="tab"
                          >
                            C. Invoice Tax
                          </button>
                        </li>
                      </ul>

                      <div
                        className="tab-content mt-4"
                        id="productionEntryTabsContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="itemdetails"
                          role="tabpanel"
                        >
                          <div className="row text-start">
                            <div className="col-2">
                              <label htmlFor="prod-no">Select Cust:</label>
                            </div>
                            <div className="col-3">
                              <input type="text" placeholder="Enter Name.." className="form-control" />
                            </div>
                            <div className="col-2">
                              <button className=" vndrbtn w-100">Search</button>
                            </div>
                          </div>
                          <div className="row text-start mt-2 ">
                            <div className="col-2">
                              <label htmlFor="prod-no">Select PO:</label>
                            </div>
                            <div className="col-3">
                              <select name="" id="" className="form-control">
                                <option value="">Select an Option</option>
                              </select>
                            </div>
                            <div className="col-1">
                              <button className=" vndrbtn">Search</button>
                            </div>
                            <div className="col-2">
                              <button className=" vndrbtn "> View SO</button>
                            </div>
                          </div>
                          <div className="row text-start mt-2">
                            <div className="col-2">
                              <label htmlFor="prod-no">Item Name :</label>
                            </div>
                            <div className="col-3">
                              <input type="text" placeholder="Enter Code No.." className="form-control" />
                            </div>
                            <div className="col-2">
                              <button className=" vndrbtn w-100">Add</button>
                            </div>
                          </div>
                          <div className="row text-start mt-2">
                            <div className="col-2">
                              <label htmlFor="prod-no">Ref.Item :</label>
                            </div>
                            <div className="col-2">
                              <input type="text" placeholder=".." className="form-control" />
                            </div>
                            <div className="col-1">
                              <button className=" vndrbtn w-100">Add</button>
                            </div>
                            <div className="col-3">
                              <button className=" vndrbtn">View Pendding Challan List</button>
                            </div>
                            <div className="col-3">
                              <button className=" vndrbtn w-100">View Bom Wise</button>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="invtaxes"
                          role="tabpanel"
                        >
                          <div className="row text-start">
                            {/* First Column */}
                            <div className="col-md-4">
                              {/* Prod. No */}
                              <div className="row mb-2">
                                <div className="col-3">
                                  <label htmlFor="invoice-no">Inv No :</label>
                                </div>
                                <div className="col-3">
                                  <input
                                    id="invoice-no"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-3">
                                  <input
                                    id="invoice-no"
                                    placeholder="232400001"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-3">
                                  <input
                                    id="invoice-no"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Payment */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="payment">
                                    Payment Date :
                                  </label>
                                </div>
                                <div className="col-6">
                                  <input type="Date" id="payment"
                                    className="form-control" />
                                </div>
                              </div>

                              {/* Mode of trans */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="unit-machine">
                                    Mode of Trans :
                                  </label>
                                </div>
                                <div className="col-8">
                                  <input type="text" placeholder="By Road" id="modeoftrans"
                                    className="form-control" />
                                </div>
                              </div>

                              {/* Item */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="item">Bill TO  :</label>
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                  <input type="text" placeholder="" id="billto"
                                    className="form-control" />
                                  <button
                                    type="button"
                                    className=" vndrbtn ml-2"
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>

                              {/* Ship tp */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="shipto">Ship TO :</label>
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                  <input type="text" placeholder="Enter Buyer Name" id="billto"
                                    className="form-control" />
                                  <button
                                    type="button"
                                    className=" vndrbtn ml-2"
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>

                              {/* Bill Date. */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="eway-bill">Vehicle In Time :</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    id="eway-bill"
                                    type="time"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Prod. Qty */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="note-remark">
                                    Remark:
                                  </label>
                                </div>
                                <div className="col-8">
                                  <textarea name="" className="form-control" id="note-remark"></textarea>
                                </div>
                              </div>

                            </div>

                            {/* Second Column */}
                            <div className="col-md-4">
                              {/* Date & Time */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="date">Invoice Date :</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    id="time"
                                    type="datetime-local"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Supervisor */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="dateremoval">
                                    Date Of Removal :
                                  </label>
                                </div>
                                <div className="col-6">
                                  <input
                                    id="dateremoval"
                                    type="date"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Machine Speed */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="vehicle">Vehicle No:</label>
                                </div>
                                <div className="col-6 d-flex align-items-center">
                                  <input
                                    id="vehicle"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Prod Time */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="addrcode">Addr Code:</label>
                                </div>
                                <div className="col-6 d-flex">
                                  <select className="form-control flex-grow-1">
                                    <option>   </option>
                                  </select>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="addrcode">Addr Code:</label>
                                </div>
                                <div className="col-6 d-flex">
                                  <select className="form-control flex-grow-1">
                                    <option>   </option>
                                  </select>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="ewaybill">Vehicle Out Time:</label>
                                </div>
                                <div className="col-6 d-flex">
                                  <input
                                    id="ewaybill"
                                    type="time"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="delivey"> Bank:</label>
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                  <select className="form-control flex-grow-1">
                                    <option>  Select  </option>
                                  </select>
                                  <button type="button" className=" vndrbtn">
                                    <Cached />
                                  </button>
                                  <button
                                    type="button"
                                    className=" vndrbtn  ml-2"
                                  >
                                    <FaPlus />
                                  </button>
                                </div>
                              </div>

                            </div>

                            {/* Third Column */}
                            <div className="col-md-4">
                              {/* Shift */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="invoicetime">Invoice Time :</label>
                                </div>
                                <div className="col-6">
                                  <input type="time" id="invoicetime" className="form-control" />
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="invoicetime"> Time :</label>
                                </div>
                                <div className="col-6">
                                  <input type="time" id="invoicetime" className="form-control" />
                                </div>
                              </div>

                              {/* transporter */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="transporter">Transporter :</label>
                                </div>
                                <div className="col-8 d-flex">
                                  <input
                                    id="transporter"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="shift">Place Of Supply:</label>
                                </div>
                                <div className="col-8">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="shift">LR No:</label>
                                </div>
                                <div className="col-8">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>

                            </div>

                          </div>

                          <table className="table mt-2 table-bordered">
                            <tbody>
                              {/* Row 1 */}
                              <tr>
                                <td><label>Assessble Value</label></td>
                                <td><input className="form-control" type="text" placeholder="0" /></td>

                                <td>
                                  <label>
                                    Pack & Fwrd :
                                    <input
                                      type="text"
                                      className="form-control d-inline-block ms-2"
                                      style={{ width: '40px' }}
                                      placeholder="0"
                                    />
                                    %
                                  </label>
                                </td>
                                <td><input className="form-control" type="text" placeholder="0" /></td>

                                <td><label>TSC :</label></td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control d-inline-block ms-2"
                                    style={{ width: '70px' }}
                                    placeholder="0"
                                  />
                                     %
                                </td>
                              </tr>

                              {/* Row 2 */}
                              <tr>
                                <td><label>CGST : 00.00%</label></td>
                                <td><input className="form-control" type="text" placeholder="0" /></td>

                                <td>
                                  <label>
                                    Transport Crg. : 
                                    <input
                                      type="text"
                                      className="form-control d-inline-block ms-2"
                                      style={{ width: '40px' }}
                                      placeholder="0"
                                    />
                                    %
                                  </label>
                                </td>
                                <td><input className="form-control" type="text" placeholder="0" /></td>

                                <td colSpan="2"></td>
                              </tr>

                              {/* Row 3 */}
                              <tr>
                                <td><label>SGST : 00.00%</label></td>
                                <td><input className="form-control" type="text" placeholder="0" /></td>

                                <td>
                                  <label>
                                    Freight Crg. :
                                    <input
                                      type="text"
                                      className="form-control d-inline-block ms-2"
                                      style={{ width: '40px' }}
                                      placeholder="0"
                                    />
                                    %
                                  </label>
                                </td>
                                <td><input className="form-control" type="text" placeholder="0" /></td>

                                <td><label>E-Invoice Type:</label></td>
                                <td colSpan="1">
                                  <select className="form-control">
                                    <option value="">Bussiness To Bussiness</option>
                                  </select>
                                </td>
                              </tr>

                              {/* Row 4 */}
                              <tr>
                                <td><label>IGST : 00.00%</label></td>
                                <td><input className="form-control" type="text" placeholder="0" /></td>

                                <td>
                                  <label>
                                    Other Crg. : 
                                    <input
                                      type="text"
                                      className="form-control d-inline-block ms-2"
                                      style={{ width: '40px' }}
                                      placeholder="0"
                                    />
                                    %
                                  </label>
                                </td>
                                <td><input className="form-control" type="text" placeholder="0" /></td>

                                <td><label>GR Total :</label></td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control d-inline-block ms-2"
                                    style={{ width: '70px' }}
                                    placeholder="0"
                                  />
                                    %
                                </td>
                              </tr>
                            </tbody>
                          </table>


                          <div className="row">
                            <div className="col-md-3">
                              <button className=" vndrbtn"> Generete JobWork Invoice </button>
                            </div>
                          </div>

                        </div>

                        <div
                          className="tab-pane fade"
                          id="invdetail"
                          role="tabpanel"
                        >

                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Sr.</th>
                                  <th>PO No </th>
                                  <th>Item No Code</th>
                                  <th>Stock</th>
                                  <th>Description</th>
                                  <th>JobWork Rate</th>
                                  <th>PO Qty</th>
                                  <th>Bal.Qty</th>
                                  <th>Inv.Qty</th>
                                  <th>Pkg Qty</th>
                                  <th>Pkg.Desc</th>
                                  <th>Ref.</th>
                                  <th>Material Rate</th>
                                  <th>Del</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Line No: <br /> Line PODt :</td>
                                  <td>So Line No :</td>
                                  <td></td>
                                  <td><textarea className="form-control" name="" id=""></textarea> <br /> <span>HSN Code :</span> </td>
                                  <td className="text-start"><input type="text" className="form-control" /> <br />

                                    <span style={{ color: "blue" }}>Rate Type: </span>
                                    <br /> <select className="form-control" name="" id="">
                                      <option value="">NOS</option>
                                    </select>
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td><input type="text" className="form-control" /> <br />
                                    Per Pcs Wt: <br />
                                    <input type="text" className="form-control" placeholder="Weight" /><br />
                                    <span style={{ color: "blue" }}>Per Unit: </span>
                                  </td>
                                  <td><input type="text" className="form-control" /></td>
                                  <td><textarea className="form-control" name="" id=""></textarea></td>
                                  <td></td>
                                  <td><input className="form-control" type="text" /></td>
                                  <td><span className="vndrbtn" style={{ border: "1px solid black" }}>X</span></td>
                                </tr>
                              </tbody>
                            </table>
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


export default GSTJobworkInvoice