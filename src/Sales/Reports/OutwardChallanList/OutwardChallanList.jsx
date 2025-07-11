import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./OutwardChallanList.css";
import { useNavigate } from 'react-router-dom';
import { IoDocumentAttachSharp } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

const OutwardChallanList = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [localData, setLocalData] = useState([]);
  const navigate = useNavigate();

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

  const handleButtonClick = () => {
    navigate('/');
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);


  // Load local challan data
  useEffect(() => {
    const sampleData = [
      {
        "challan_no": "252600001",
        "challan_date": "2025-07-04",
        "challan_time": "14:46:00",
        "DC_no": "26351",
        "Transport_name": "magan transport",
        "vehical_no": "MP09MH3284",
        "Estimated_value": "1500",
        "DC_date": "2025-07-04",
        "EWay_bill_no": "26165163",
        "eway_bill_date": "2025-07-11",
        "rev_charges": "Y",
        "rec_ch_amt": "",
        "Eway_bill_Qty": "2",
        "remarks": "gjghgj",
        "plant": "",
        "series": "",
        "vender": "AAYUDH SALES CORPORATION",
        "items": []
      },
      {
        "challan_no": "252600002",
        "challan_date": "2025-07-25",
        "challan_time": "17:58:00",
        "DC_no": "26351",
        "Transport_name": "magan transport",
        "vehical_no": "MP09MH3284",
        "Estimated_value": "1500",
        "DC_date": "2025-07-11",
        "EWay_bill_no": "26165163",
        "eway_bill_date": "2025-07-04",
        "rev_charges": "N",
        "rec_ch_amt": "",
        "Eway_bill_Qty": "2",
        "remarks": "lldsjofa",
        "plant": "",
        "series": "",
        "vender": "AAYUDH SALES CORPORATION",
        "items": [
          {
            "item_code": "FG1001",
            "type": "Steel part (FG1001)",
            "description": "Steel part",
            "store": "MainStore",
            "suppRefNo": "5616441461",
            "qtyNo": "700000.00",
            "qtyKg": "5.00",
            "process": "rework",
            "pkg": "fsjdlf",
            "wRate": "2151.00",
            "wValue": "23.00"
          }
        ]
      }
    ];
    setLocalData(sampleData);
  }, []);

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
                        <h5 className="header-title">Outward Challan List</h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <button type="button" className="vndrbtn" to="#/">
                          F7 Outward Report
                        </button>
                        <button
                          type="button"
                          className="vndrbtn"
                          to="#/"
                          onClick={handleButtonClick}
                        >
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
                        <select name="" className="form-control" style={{marginTop:"5px"}} id="">
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
                        
                       <div className="col-6 col-md-2 align-items-center" style={{marginTop:"42px"}}>
                          <button type="button" className=" vndrbtn">
                            Search
                          </button>
                        </div>

                        </div>

                    </div>
                  </div>

                  {/* Existing Form UI */}

                  <div className="OutwardChallanList-Main mt-2 table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Sr.</th>
                          <th>Year</th>
                          <th>Plant</th>
                          <th>Series</th>
                          <th>57F4 No</th>
                          <th>Out Rate</th>
                          <th>PO No</th>
                          <th>V Code</th>
                          <th>Vender Name</th>
                          <th>Item NO | Desc | Qty</th>
                          <th>User</th>
                          <th>Challan Status</th>
                          <th>EWB</th>
                          <th>DOC</th>
                          <th>Email</th>
                          <th>Edit</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                          {localData.map((entry, index) => (
                        <tr  key={index}>
                          <td>{index + 1}</td>
                           <td>{entry.year}</td>
                            <td>{entry.plant}</td>
                            <td>{entry.series}</td>
                              <td>{entry.challan_no}</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>{entry.vender}</td>
                           <td>
                              {entry.items.length > 0 ? (
                                <ul className="mb-0">
                                  {entry.items.map((item, idx) => (
                                    <li key={idx}>
                                      {item.item_code} | {item.description} | Qty: {item.qtyKg}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                "—"
                              )}
                            </td>
                          <td></td>
                          <td></td>
                          <td>{entry.EWay_bill_no}</td>
                          <td> <IoDocumentAttachSharp /> </td>
                          <td> <MdOutlineAttachEmail /> </td>
                          <td> <FaEdit /></td>
                          <td> < IoEye /></td>
                        </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>

                  {/* ✅ Local Data Table */}

                  <div className="OutwardChallanList-Main mt-4 table-responsive">
                  
                    <table className="table table-bordered table-hover table-striped">
                      <thead className="table-dark">
                        <tr>
                          <th>#</th>
                          <th>Challan No</th>
                          <th>Challan Date</th>
                          <th>Time</th>
                          <th>Transport</th>
                          <th>Vehicle No</th>
                          <th>Value</th>
                          <th>EWB No</th>
                          <th>Qty</th>
                          <th>Vender</th>
                          <th>Items</th>
                        </tr>
                      </thead>
                      <tbody>
                        {localData.map((entry, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.challan_no}</td>
                            <td>{entry.challan_date}</td>
                            <td>{entry.challan_time}</td>
                            <td>{entry.Transport_name}</td>
                            <td>{entry.vehical_no}</td>
                            <td>{entry.Estimated_value}</td>
                            <td>{entry.EWay_bill_no}</td>
                            <td>{entry.Eway_bill_Qty}</td>
                            <td>{entry.vender}</td>
                            <td>
                              {entry.items.length > 0 ? (
                                <ul className="mb-0">
                                  {entry.items.map((item, idx) => (
                                    <li key={idx}>
                                      {item.item_code} | {item.description} | Qty: {item.qtyKg}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                "—"
                              )}
                            </td>
                          </tr>
                        ))}
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

export default OutwardChallanList;
