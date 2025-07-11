import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import { FaPlus } from "react-icons/fa6";
import { FaRegCircleQuestion } from "react-icons/fa6";
import Cached from "@mui/icons-material/Cached.js";
import { useNavigate } from 'react-router-dom';
import "./NewInvoice.css";

const NewInvoice = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleButtonClick = () => {
    navigate('/NewinvoiceGST');
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
    <div className="NewInvoiceMaster">
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
                <div className="NewInvoice">
                  <div className="NewInvoice-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">New Invoice</h5>
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
                          <option>GST Invoice</option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <input className="form-control" type="text" placeholder="InvoiceNo:" />
                      </div>
                      <div className="col-md-1">InvoiceType:</div>
                      <div className="col-md-1">
                        <select className="form-select">
                          <option>GST</option>
                          <option>SCRAP</option>
                          <option>Stock Transfer</option>
                          <option>Direct Export</option>
                          <option>Third Party EXP (In State)</option>
                          <option>Third Party Export (Out State)</option>
                          <option>Asset</option>
                          <option>Tool</option>
                        </select>
                      </div>

                      <div className="col-md-3 text-end">
                        <button type="button" className=" vndrbtn" onClick={handleButtonClick}>
                          Invoice V2
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="NewInvoice-main">
                    <div className="NewInvoice-tabs">

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
                            id="taxes-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#taxes"
                            type="button"
                            role="tab"
                          >
                            B. Taxes
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
                              <button className=" vndrbtn w-50">Search</button>
                            </div>
                          </div>
                          <div className="row text-start mt-2">
                            <div className="col-2">
                              <label htmlFor="prod-no">Select PO:</label>
                            </div>
                            <div className="col-3">
                              <select name="" id="" className="form-control">
                                <option value="">Select an Option</option>
                              </select>
                            </div>
                            <div className="col-1">
                              <button className=" vndrbtn w-100">Clear</button>
                            </div>
                            <div className="col-2">
                              <button className=" vndrbtn w-100"> View SO</button>
                            </div>
                          </div>
                          <div className="row text-start mt-2">
                            <div className="col-2">
                              <label htmlFor="prod-no">Select Item :</label>
                            </div>
                            <div className="col-3">
                              <input type="text" placeholder="Enter Item Code.." className="form-control" />
                            </div>
                            <div className="col-2">
                              <button className=" vndrbtn w-100">Add</button>
                            </div>
                          </div>

                        </div>

                        <div className="tab-pane fade" id="taxes" role="tabpanel">
                          <div className="row  text-start">
                            {/* First Column */}
                            <div className="col-md-4">
                              {/* Prod. No */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="invoice-no">Invoice No :</label>
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
                                <div className="col-2">
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
                                <div className="col-3">
                                  <input type="Date" id="payment"
                                    className="form-control" />
                                </div>
                                <div className="col-2">
                                  <label htmlFor="payment">
                                    Note :
                                  </label>
                                </div>
                                <div className="col-3">
                                  <input type="text" id="payment"
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
                                <div className="col-4">
                                  <label htmlFor="unit-machine">
                                    Freight:
                                  </label>
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                  <select className="form-control flex-grow-1" style={{ marginLeft: "5px" }}>
                                    <option>  Select  </option>
                                  </select>
                                  <button type="button" className=" vndrbtn">
                                    <Cached />
                                  </button>
                                  <button
                                    type="button"
                                    className=" vndrbtn ml-2"
                                  >

                                    <FaPlus />
                                  </button>
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
                                  <input type="text" placeholder="" id="billto"
                                    className="form-control" />
                                  <button
                                    type="button"
                                    className=" vndrbtn  ml-2"
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>

                              {/* Bill Date. */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="eway-bill">Eway Bill Date :</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    id="eway-bill"
                                    type="date"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              {/* Prod. Qty */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="note-remark">
                                    Note/Remark:
                                  </label>
                                </div>
                                <div className="col-6">
                                  <textarea name="" className="form-control" id="note-remark"></textarea>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="unit-machine">
                                    PDI No :
                                  </label>
                                </div>
                                <div className="col-8">
                                  <input type="text" placeholder="" id="modeoftrans"
                                    className="form-control" />
                                </div>

                                <div className="col-4 mt-3">
                                  <label htmlFor="unit-machine">
                                    Bank:
                                  </label>
                                </div>
                                <div className="col-8 mt-2 d-flex align-items-center">
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

                            {/* Second Column */}
                            <div className="col-md-4">
                              {/* Date & Time */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="date">Invoice Date :</label>
                                </div>
                                <div className="col-8">
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
                                <div className="col-8">
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
                                <div className="col-8 d-flex align-items-center">
                                  <input
                                    id="vehicle"
                                    className="form-control"
                                  />
                                  <button type="button" className=" vndrbtn">
                                    <FaPlus />
                                  </button>
                                </div>
                              </div>

                              {/* Prod Time */}
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="addrcode">Addr Code:</label>
                                </div>
                                <div className="col-8 d-flex">
                                  <select className="form-control flex-grow-1">
                                    <option>   </option>
                                  </select>
                                  <button type="button" className=" vndrbtn mb-4">
                                    <FaRegCircleQuestion />
                                  </button>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="addrcode">Addr Code:</label>
                                </div>
                                <div className="col-8 d-flex">
                                  <select className="form-control flex-grow-1">
                                    <option>   </option>
                                  </select>
                                  <button type="button" className=" vndrbtn mb-4">
                                    <FaRegCircleQuestion />
                                  </button>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="ewaybill">Eway Bill No:</label>
                                </div>
                                <div className="col-8 d-flex">
                                  <input
                                    id="ewaybill"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="delivey"> Delivey Terms:</label>
                                </div>
                                <div className="col-8 d-flex">
                                  <textarea name="" id="delivey" className="form-control"></textarea>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="dcno">D.C. NO:</label>
                                </div>
                                <div className="col-8 d-flex">
                                  <input type="text" id="dcno" className="form-control" />
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
                                <div className="col-8">
                                  <input type="time" id="invoicetime" className="form-control" />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="invoicetime"> Time :</label>
                                </div>
                                <div className="col-8">
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
                                  <button type="button" className=" vndrbtn mb-3">
                                    <FaPlus />
                                  </button>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="shift">L/R GC Note:</label>
                                </div>
                                <div className="col-8">
                                  <input type="text" className="form-control" />
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
                                  <label htmlFor="ewaybill">Eway Bill No:</label>
                                </div>
                                <div className="col-8 d-flex">
                                  <input
                                    id="ewaybill" placeholder="0"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="delivey"> Destination Code:</label>
                                </div>
                                <div className="col-8 d-flex">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-4">
                                  <label htmlFor="dcno">D.C. Date:</label>
                                </div>
                                <div className="col-8 d-flex">
                                  <input type="date" id="dcno" className="form-control" />
                                </div>
                              </div>

                            </div>

                          </div>

                          <table className="table mt-2 table-bordered">
                            <tbody>
                              {/* Row 1 */}
                              <tr>
                                <td><label>Base Value</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td><label>Assessble Value</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td>
                                  <label>
                                    Pack & Fwrd :
                                    <input type="text" placeholder="0" style={{ width: '40px', marginLeft: '5px' }} />
                                    %
                                  </label>
                                </td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td colSpan="2"><label>Total Amortisation : </label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                              </tr>

                              {/* Row 2 */}
                              <tr>
                                <td><label>Disc Amt:</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td><label>CGST : 00.00%</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td>
                                  <label>
                                    Transport Crg. :
                                    <input type="text" placeholder="0" style={{ width: '40px', marginLeft: '5px' }} />
                                    %
                                  </label>
                                </td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td colSpan="2"><label>CGST :</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                              </tr>

                              {/* Row 3 */}
                              <tr>
                                <td><label>Rev. Base Crg.</label></td>
                                <td>
                                  <select className="form-select">
                                    <option value="">NO</option>
                                  </select>
                                </td>

                                <td><label>SGST : 00.00%</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td>
                                  <label>
                                    Freight Crg. :
                                    <input type="text" placeholder="0" style={{ width: '40px', marginLeft: '5px' }} />
                                    %
                                  </label>
                                </td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td colSpan="2"><label>SGST : </label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                              </tr>

                              {/* Row 4 */}
                              <tr>
                                <td><label>Rev Crg Amt</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td><label>IGST : 00.00%</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td>
                                  <label>
                                    Other Crg. :
                                    <input type="text" placeholder="0" style={{ width: '40px', marginLeft: '5px' }} />
                                    %
                                  </label>
                                </td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td colSpan="2"><label>IGST : </label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                              </tr>

                              {/* Row 5 */}
                              <tr>
                                <td><label>TCS</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td><label>UTGST : 00.00%</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td><label>Grand Total</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                                <td colSpan="2"><label>For E-Inv: Ser.inv. . . Inv.Type:</label></td>
                                <td><input type="text" placeholder="0" className="form-control" /></td>

                              </tr>
                            </tbody>
                          </table>

                          <div className="row mt-3">

                            <div className="col-md-2">
                              <button className=" vndrbtn"> Generete Invoice </button>
                            </div>
                            <div className="col-md-3 d-flex align-items-center">
                              <input
                                type="checkbox"
                                id="printRate"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                style={{ width: "12px", height: "12px", verticalAlign: "middle" }}
                              />

                              <label
                                htmlFor="printRate"
                                className="ms-2"
                                style={{ verticalAlign: "middle" }}
                              >
                                PrintRate
                              </label>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="NewInvoicetable table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sr.</th>
                          <th>PO No | Date</th>
                          <th>Stock</th>
                          <th>Description</th>
                          <th>Rate</th>
                          <th>PO Qty</th>
                          <th>Bal.Qty</th>
                          <th>Inv.Qty</th>
                          <th>Pkg Qty</th>
                          <th>Type Of Packing</th>
                          <th>Del</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Pr No:</td>
                          <td>Line No:</td>
                          <td><textarea className="form-control" name="" id=""></textarea> <br /> <span>HSN Code :</span> </td>
                          <td className="text-start"><input type="text" className="form-control" /> <br />
                            Disc:  <br />  Pkg Charges: <br />
                            Trans Charges: <br /> <span style={{ color: "blue" }}>Rate Type: </span>
                            <br /> Amort Rate :
                          </td>
                          <td></td>
                          <td></td>
                          <td><input type="text" className="w-50" /> <br />
                            Per Pcs Wt: <br />
                            <input type="text" className="form-control w-50" placeholder="Weight" /><br />
                            <span style={{ color: "blue" }}>Per Unit: </span>
                          </td>
                          <td><input type="text" className="form-control w-50" /></td>
                          <td><textarea className="form-control" name="" id=""></textarea></td>
                          <td><span className="vndrbtn" style={{ border: "1px solid black" }}>X</span></td>
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

export default NewInvoice