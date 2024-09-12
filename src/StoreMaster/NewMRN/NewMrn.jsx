import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import CachedIcon from "@mui/icons-material/Cached";
import { Link } from "react-router-dom";
import "./NewMrn.css";
const NewMrn = () => {
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


  const [isCardVisible, setIsCardVisible] = useState(false);

  // Function to toggle card visibility
  const handleButtonClick = () => {
    setIsCardVisible(!isCardVisible);
  };
  const handleClose = () => {
    setIsCardVisible(false);
  };

  return (
    <div className="NewStoreNewgrn">
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
                <div className="Newgrn-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">New GRN</h5>
                    </div>
                    <div className="col-md-6 mt-4">
                      <div className="row mb-3">
                        <div className="col-md-2">
                          <select id="sharpSelect" className="form-select">
                            <option selected>Sharp</option>
                          </select>
                        </div>

                        {/* Label: Series and Series Select Option */}
                        <div className="col-md-1">
                          <label htmlFor="seriesSelect" className="form-label">
                            Series:
                          </label>
                        </div>
                        <div className="col-md-2">
                          <select id="seriesSelect" className="form-select">
                            <option selected>Select</option>
                            <option value="Purchase GRN">Purchase GRN</option>
                            <option value="s2">s2</option>
                            <option value="s3">s3</option>
                            <option value="s4">s4</option>
                          </select>
                        </div>

                        {/* Input Field */}
                        <div className="col-md-2">
                          <input
                            type="text"
                            id="inputField"
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                          <input type="checkbox" id="poGrnCheckbox" />
                          <label htmlFor="poGrnCheckbox" className="ms-1">
                            PO GRN
                          </label>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                          <input type="checkbox" id="directGrnCheckbox" />
                          <label htmlFor="directGrnCheckbox" className="ms-1">
                            Direct GRN
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-end">
                      <div className="row justify-content-end">
                        <div className="col-md-6 d-flex align-items-center">
                          <Link className="pobtn">Grn List</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Newgrn-main">
                  
                    <div className="container-fluid text-start">
                      <div className="row mt-4">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">Gate Entry No:</div>
                            <div className="col-md-6">
                              <select
                                id="routingSelect"
                                className="form-select"
                              >
                                <option selected>Select</option>
                                <option value="">
                                  GE242503626|Supplier/Vendor : SANKET
                                  ENGINEERING
                                </option>
                                <option value="">
                                  GE242504231|Supplier/Vendor : SHRIPAD STEELS
                                </option>
                                <option value="">
                                  GE242503626|Supplier/Vendor : SHREE CHITAMANI
                                  HEAT TREATERS
                                </option>
                              </select>
                            </div>
                            <div className="col-md-2">
                              <CachedIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">Select Supplier:</div>
                            <div className="col-md-6">
                              <input />
                            </div>
                            <div className="col-md-2">
                              <button type="button" className="pobtn">
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row text-start">
                            <div className="col-md-4">Select Po:</div>
                            <div className="col-md-4">
                              <select
                                id="routingSelect"
                                className="form-select"
                              >
                                <option selected>Select</option>
                                <option value="">
                                  242503626| SANKET ENGINEERING
                                </option>
                                <option value="">
                                  242504231| SHRIPAD STEELS
                                </option>
                                <option value="">
                                  242503626| SHREE CHITAMANI HEAT TREATERS
                                </option>
                              </select>
                            </div>
                            <div className="col-md-2">
                              <button type="button" className="btn">
                                Add All Item
                              </button>
                            </div>
                            <div className="col-md-1">
                              <button type="button" className="btn">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4 ">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-4">Search Item:</div>
                            <div className="col-md-6">
                              <input />
                            </div>
                            <div className="col-md-2">
                              <button type="button" className="btn">
                                Add
                              </button>
                            </div>
                         
                      
                          </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row ">
                              <div className="col-md-8">
                                <button type="button" className="btn" onClick={handleButtonClick}>
                                  Pending Release PO item
                                </button>
                              </div>
                            </div>
                            </div>
                      </div>
                    </div>

                    <div className="Newgrntable">
                      <div className="container-fluid mt-4 text-start">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Sr no.</th>
                                <th>PO No</th>
                                <th>Date</th>
                                <th>Item No | Code</th>
                                <th>Description</th>
                                <th>Rate</th>
                                <th>PO Qty</th>
                                <th>Bal. Qty</th>
                                <th>Challan Qty</th>
                                <th>GRN Qty</th>
                                <th>Short/Excess Qty</th>
                                <th>Unit Code</th>
                                <th>Total</th>
                                <th>Heat No.</th>
                                <th>MFg Date</th>
                                <th>Hc</th>
                                <th>Edit</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div
                      className="Newgrn122Footer"
                      style={{ marginTop: "100px" }}
                    >
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-Gernal-Detail-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Gernal-Detail"
                            type="button"
                            role="tab"
                            aria-controls="pills-Gernal-Detail"
                            aria-selected="true"
                          >
                            Gernal Detail
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-GST-Details-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-GST-Details"
                            type="button"
                            role="tab"
                            aria-controls="pills-GST-Details"
                            aria-selected="false"
                          >
                            GST Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-Ref-Doc/Tc-Details-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Ref-Doc/Tc-Details"
                            type="button"
                            role="tab"
                            aria-controls="pills-Ref-Doc/Tc-Details"
                            aria-selected="false"
                          >
                            Ref Doc/TC Details
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-Gernal-Detail"
                          role="tabpanel"
                          aria-labelledby="pills-Gernal-Detail-tab"
                          tabindex="0"
                        >
                          <div className="StoreNewgrn1 text-start">
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-md-4 text-start">
                                  <div className="container mt-4">
                                    <div className="table-responsive">
                                      <table className="table table-bordered">
                                        <tbody>
                                          {/* First Column Group */}
                                          <tr>
                                            <th className="col-md-4">
                                              GRN No:
                                            </th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>GRN Date:</th>
                                            <td>
                                              <input
                                                type="date"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>GRN Time:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Challan No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Challan Date:</th>
                                            <td>
                                              <input
                                                type="date"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Invoice No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th className="col-md-4">
                                              Invoice Date:
                                            </th>
                                            <td>
                                              <input
                                                type="date"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 text-start">
                                  {/* Second Column Group */}
                                  <div className="container mt-4">
                                    <div className="table-responsive text-start">
                                      <table className="table table-bordered">
                                        <tbody>
                                          <tr>
                                            <th>E Way Bill No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>E Way Bill Date:</th>
                                            <td>
                                              <input
                                                type="date"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Vehical No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>LR No:</th>
                                            <td>
                                              <input
                                                type="date"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Transporter:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Prepared By:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Checked By:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 text-start">
                                  {/* Third Column Group */}
                                  <div className="container mt-4">
                                    <div className="table-responsive">
                                      <table className="table table-bordered">
                                        <tbody>
                                          <tr>
                                            <th>TC No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>TC Date:</th>
                                            <td>
                                              <input
                                                type="date"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>QC Check:</th>
                                            <td>
                                              <div className="row">
                                                <div className="col-md-2 d-flex align-items-center">
                                                  <input
                                                    type="checkbox"
                                                    id="QuantityCheckbox"
                                                  />
                                                  <label
                                                    htmlFor="QuantityCheckbox"
                                                    className="ms-1"
                                                  >
                                                    Quantity
                                                  </label>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                  <input
                                                    type="checkbox"
                                                    id="QualityCheckbox"
                                                  />
                                                  <label
                                                    htmlFor="QualityCheckbox"
                                                    className="ms-1"
                                                  >
                                                    Quality
                                                  </label>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <th className="col-md-4">
                                              Delivery in Time:
                                            </th>
                                            <td>
                                              <div className="row">
                                                <div className="col-md-2 d-flex align-items-center">
                                                  <input
                                                    type="checkbox"
                                                    id="YesCheckbox"
                                                  />
                                                  <label
                                                    htmlFor="YesCheckbox"
                                                    className="ms-1"
                                                  >
                                                    Quantity
                                                  </label>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                  <input
                                                    type="checkbox"
                                                    id="NoCheckbox"
                                                  />
                                                  <label
                                                    htmlFor="NoCheckbox"
                                                    className="ms-1"
                                                  >
                                                    Quality
                                                  </label>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Remark:</th>
                                            <td>
                                              <textarea className="form-control"></textarea>
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Payment Term Days:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </td>
                                          </tr>

                                          <tr>
                                            <td
                                              colspan="2"
                                              className="text-start"
                                            >
                                              <button className="btn">
                                                Save GRN
                                              </button>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-GST-Details"
                          role="tabpanel"
                          aria-labelledby="pills-GST-Details-tab"
                          tabindex="0"
                        >
                          <div className="StoreNewgrn2">
                            <div className="row ">
                              <div className="col-md-8">
                                <div className="table-responsive">
                                  <table className="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Sr</th>
                                        <th>Item Code</th>
                                        <th>HSN</th>
                                        <th>PO Rate</th>
                                        <th>Disc Rate</th>
                                        <th>Qty</th>
                                        <th>Discount</th>
                                        <th>Pack Amt</th>
                                        <th>TransAmt</th>
                                        <th>Tool Amort</th>
                                        <th>Ass Value</th>
                                        <th>CGST</th>
                                        <th>SGST</th>
                                        <th>IGST</th>
                                        <th>VAT</th>
                                        <th>CESS</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>{/* Data rows will go here */}</tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="col-md-4">
                              
                                  <div className="row">
                                    <div className="col-md-6 text-start">
                                      {/* Second Column Group */}
                                      <div className="container">
                                      <div className="table-responsive">
                                      <table className="table table-bordered">
                                            <tbody>
                                              <tr>
                                                <th>TDC Assessable Value:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th className="col-md-4">
                                                  (TDC) Pack & Fwrd Charge:
                                                </th>
                                                <td>
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>TransPort Charges:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>Insurance:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>Instailation Charges:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>Other Charges:</th>
                                                <td>
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>TDS:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 text-start">
                                      {/* Third Column Group */}
                                      <div className="container mt-4">
                                        <div className="table-responsive">
                                          <table className="table table-bordered">
                                            <tbody>
                                              <tr>
                                                <th>CGST:00.00%</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th className="col-md-4">
                                                  SGST:00.00%
                                                </th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>IGST:00.00%:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>VAT Amt:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>Cess Amt:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>TCS: :</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>GR. Total:</th>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  colspan="2"
                                                  className="text-start"
                                                >
                                                  <button className="btn">
                                                    DocTCUpload
                                                  </button>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-Ref-Doc/Tc-Details"
                          role="tabpanel"
                          aria-labelledby="pills-Ref-Doc/Tc-Details-tab"
                          tabindex="0"
                        >
                          <div className="StoreNewgrn3">
                            <div className="row ">
                              <div className="col-md-8 mt-4">
                                <div className="table-responsive">
                                  <table className="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Sr</th>
                                        <th>Item Code</th>
                                        <th>Item Desc</th>
                                        <th>Mill/TC Name</th>
                                        <th>Mill/TC No</th>
                                        <th>Mill/TC Date</th>
                                        <th>Location</th>
                                       
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>{/* Data rows will go here */}</tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              
                            </div>
                            <div className="row">
                              <div className="col-md-12 text-end">
                               <button className="pobtn" type="button">Doc/Tc Upload</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
             
              </main>
              {isCardVisible && (
        <div className="storenewmrn-overlay">
           <div className="costtype2-overlay">
                      <div className="new-card">
                        <div className="row">
                          <div className="col-md-10 text-start">
                            <h5 className="card-title">Pending for Release PO Item List</h5>
                          </div>
                          <div className="col-md-2 text-end">
                            <button
                              className="btn"
                              onClick={handleClose}
                            >
                              X
                            </button>
                          </div>
                        </div>
                        <div className="card-body">
                        
                    <table>
                      <thead>
                        <tr>
                          <th>No Data Found !!</th>
                        </tr>
                      </thead>
                    </table>
                        </div>
                      </div>
                    </div>
      </div>
      )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMrn;
