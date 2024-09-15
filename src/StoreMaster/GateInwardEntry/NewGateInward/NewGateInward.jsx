import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { Link } from "react-router-dom";
import CachedIcon from "@mui/icons-material/Cached.js";
import "./NewGateInward.css";
import { saveGateEntry } from "../../../Service/StoreApi.jsx";
import { saveItemDetails } from "../../../Service/StoreApi.jsx";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewGateInward = () => {
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

  const [errors, setErrors] = useState({});


  const [formData, setFormData] = useState({
    Plant: '',
    Series: '',
    Type: '',
    Supp_Cust: '',
    GE_No: '',
    GE_Date: '',
    GE_Time: '',
    ChallanNo: '',
    ChallanDate: '',
    Select: '',
    InVoiceNo: '',
    EWayBillNo: '',
    EWayBillDate: '',
    ContactPerson: '',
    VehicleNo: '',
    LrNo: '',
    Transporter: '',
    Remark: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const validate = () => {
  const newErrors = {};
  const requiredFields = [
      'Plant', 'Series', 'Type', 'Supp_Cust', 'GE_No', 'GE_Date', 'GE_Time',
      'ChallanNo', 'ChallanDate', 'Select', 'InVoiceNo', 'EWayBillNo', 
      'EWayBillDate', 'ContactPerson', 'VehicleNo', 'LrNo', 'Transporter', 
      'Remark'
  ];

  requiredFields.forEach(field => {
      if (!formData[field]) {
          newErrors[field] = 'This field is required';
      }
  });

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; // Returns true if no errors
};


const handleSubmit = async () => {
  if (validate()) {
      try {
          await saveGateEntry(formData);
          console.log(formData);
          
          toast.success('Data saved successfully');
      } catch (error) {
          toast.error('Failed to save data');
      }
  } else {
      toast.error('Please fill in all required fields');
  }
};
const getErrorClass = (field) => errors[field] ? 'form-control is-invalid' : 'form-control';
const getErrorText = (field) => errors[field] ? <div className="invalid-feedback">{errors[field]}</div> : null;


// Item Details

const [formData1, setFormData1] = useState({
 
});



const handleChange1 = (e) => {
  const { name, value } = e.target;
  setFormData1({ ...formData1, [name]: value });
};

const validate1 = () => {
  const newErrors = {};
  const requiredFields = ['SelectItem', 'Qty_NOS', 'Qty_Kg', 'Remark'];

  requiredFields.forEach(field => {
      if (!formData1[field]) {
          newErrors[field] = 'This field is required';
      }
  });

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; // Returns true if no errors
};

const handleSubmit1 = async (e) => {
  e.preventDefault();

  if (validate1()) {
      try {
          await saveItemDetails(formData1);
          toast.success('Item details saved successfully');
          // Clear form or redirect as needed
          setFormData1({
              SelectItem: '',
              Qty_NOS: '',
              Qty_Kg: '',
              Remark: '',
          });
      } catch (error) {
          toast.error('Failed to save item details');
      }
  } else {
      toast.error('Please fill in all required fields');
  }
};

const getErrorClass1 = (field) => errors[field] ? 'form-control is-invalid' : 'form-control';
const getErrorText1 = (field) => errors[field] ? <div className="invalid-feedback">{errors[field]}</div> : null;



  return (
    <div className="NewStoreNewGateInward">
      <ToastContainer/>
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
                <div className="NewGateInward-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-3">
                      <h5 className="header-title text-start">
                        New Gate Entry - Inward
                      </h5>
                    </div>

                    <div className="col-md-9 text-end">
                      <div className="row justify-content-end">
                        <div className="col-md-4 d-flex align-items-center">
                          <Link className="pobtn" to={"/Gate-Inward-Entry"}>
                            Gate Entry Inward List
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NewGateInward-main">
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
                        Gernal Details
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
                        Item Details
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
                      <div className="NewGateInward1">
                        <div className="container-fluid">
                          <div className="row mt-4 text-start">
                            <div className="col-md-4 ">
                              <div className="row mb-3">
                                <div className="col-md-4">
                                  <label htmlFor="Plant">Plant:</label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    id="Plant"
                                    name="Plant"
                                    className={getErrorClass('Plant')}
                                    value={formData.Plant}
                                    onChange={handleChange}
                                    required
                                  >
                                    <option value="">Select Plant</option>
                                    <option value="sharp">SHARP</option>
                                  </select>
                                  {getErrorText('Plant')}
                                </div>
                              </div>

                              <div className="row mb-3">
                                <div className="col-md-4">
                                  <label htmlFor="Series">Series:</label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    id="Series"
                                    name="Series"
                                    className={getErrorClass('Series')}
                                    value={formData.Series}
                                    onChange={handleChange}
                                    required
                                  >
                                    <option value="">Select Series</option>
                                    <option value="GateInward">
                                      Gate Inward
                                    </option>
                                  </select>
                                  {getErrorText('Series')}
                                </div>
                              </div>

                              <div className="row mb-3">
                                <div className="col-md-4">
                                  <label htmlFor="Type">Type:</label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    id="Type"
                                    name="Type"
                                    className={getErrorClass('Type')}
                                    value={formData.Type}
                                    onChange={handleChange}
                                  >
                                    <option value="">Select Type</option>
                                    <option value="PurchaseGRN">
                                      Purchase GRN
                                    </option>
                                    <option value="ScheduleGRN">
                                      Schedule GRN
                                    </option>
                                    <option value="ImportGRN">
                                      Import GRN
                                    </option>
                                    <option value="57F4GRN">57F4 GRN</option>
                                    <option value="jobworkGRN">
                                      jobwork GRN
                                    </option>
                                    <option value="DC GRN">DC GRN</option>
                                    <option value="InterStoreInvoice">
                                      Inter Store Invoice
                                    </option>
                                    <option value="InterStoreChallan">
                                      Inter Store Challan
                                    </option>
                                    <option value="Sales Return">
                                      Sales Return
                                    </option>
                                    <option value="DirectGRN">
                                      Direct GRN
                                    </option>
                                    <option value="General/Document/Courier">
                                      General/Document/Courier
                                    </option>
                                  </select>
                                  {getErrorText('Type')}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row text-start mt-4">
                            <div className="col-md-4">
                              <div className="container-fluid mt-4">
                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="Supp_Cust">
                                      Supp./Cust:
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <input
                                      type="text"
                                      id="Supp_Cust"
                                      name="Supp_Cust"
                                      className={getErrorClass('Supp_Cust')}
                                      value={formData.Supp_Cust}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('Supp_Cust')}
                                  </div>
                                  <div className="col-md-2">
                                    <button type="button" className="pobtn">
                                      Search
                                    </button>
                                  </div>
                                  <div className="col-md-2">
                                    <button type="button" className="pobtn">
                                      Cancel
                                    </button>
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="GE_No">GE No:</label>
                                  </div>
                                  <div className="col-md-7">
                                    <input
                                      type="text"
                                      id="GE_No"
                                      name="GE_No"
                                       className={getErrorClass('GE_No')}
                                      value={formData.GE_No}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('GE_No')}
                                  </div>
                                  <div className="col-md-1 d-flex align-items-center">
                                    <CachedIcon />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="GE_Date">GE Date:</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="date"
                                      id="GE_Date"
                                      name="GE_Date"
                                       className={getErrorClass('GE_Date')}
                                      value={formData.GE_Date}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('GE_Date')}
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="GE_Time">GE Time:</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="GE_Time"
                                      name="GE_Time"
                                       className={getErrorClass('GE_Time')}
                                      value={formData.GE_Time}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('GE_Time')}
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="ChallanNo">
                                      Challan No:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="ChallanNo"
                                      name="ChallanNo"
                                       className={getErrorClass('ChallanNo')}
                                      value={formData.ChallanNo}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('ChallanNo')}
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="ChallanDate">
                                      Challan Date:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="date"
                                      id="ChallanDate"
                                      name="ChallanDate"
                                       className={getErrorClass('ChallanDate')}
                                      value={formData.ChallanDate}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('ChallanDate')}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="container-fluid mt-4">
                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="Select">
                                      Select Series:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <select
                                      id="Select"
                                      name="Select"
                                      className={getErrorClass('Select')}
                                      value={formData.Select}
                                      onChange={handleChange}
                                    >
                                      <option value="">Select Series</option>
                                      <option value="A">A</option>
                                      {/* Add other options here */}
                                    </select>
                                    {getErrorText('Select')}
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="InVoiceNo">
                                      Invoice No:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                  <input
                                      type="text"
                                      id="InVoiceNo"
                                      name="InVoiceNo"
                                      className={getErrorClass('InVoiceNo')}
                                      value={formData.InVoiceNo}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('InVoiceNo')}
                                  </div>
                                </div>

                                {/* <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="invoiceDate">
                                      Invoice Date:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="date"
                                      id="invoiceDate"
                                      name="invoiceDate"
                                       className={getErrorClass('Plant')}
                                       value={formData.Plant}
                                    onChange={handleChange}
                                    />
                                  </div>
                                </div> */}

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="EWayBillNo">
                                      E-Way Bill No:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="EWayBillNo"
                                      name="EWayBillNo"
                                       className={getErrorClass('EWayBillNo')}
                                      value={formData.EWayBillNo}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('EWayBillNo')}
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="EWayBillDate">
                                      E-Way Bill Date:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="date"
                                      id="EWayBillDate"
                                      name="EWayBillDate"
                                       className={getErrorClass('EWayBillDate')}
                                      value={formData.EWayBillDate}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('EWayBillDate')}
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="ContactPerson">
                                      Contact Person:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="ContactPerson"
                                      name="ContactPerson"
                                       className={getErrorClass('ContactPerson')}
                                      value={formData.ContactPerson}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('ContactPerson')}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 text-start">
                              <div className="container-fluid mt-4">
                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="VehicleNo">
                                      Service No:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="VehicleNo"
                                      name="VehicleNo"
                                       className={getErrorClass('VehicleNo')}
                                      value={formData.VehicleNo}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('VehicleNo')}
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="LrNo">LR No:</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="LrNo"
                                      name="LrNo"
                                       className={getErrorClass('LrNo')}
                                      value={formData.LrNo}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('LrNo')}
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="Transporter">
                                      Transporter:
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      id="Transporter"
                                      name="Transporter"
                                       className={getErrorClass('Transporter')}
                                      value={formData.Transporter}
                                      onChange={handleChange}
                                    />
                                    {getErrorText('Transporter')}
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <label htmlFor="Remark">Remark:</label>
                                  </div>
                                  <div className="col-md-8">
                                    <textarea
                                      id="Remark"
                                      name="Remark"
                                       className={getErrorClass('Remark')}
                                      value={formData.Remark}
                                      onChange={handleChange}
                                    ></textarea>
                                    {getErrorText('Remark')}
                                  
                                  </div>
                                </div>
                              </div>

                              <div className="row mb-3 text-end">
                                <div className="col-md-12">
                                  <button className="pobtn" onClick={handleSubmit} type="button">
                                    Save Gate Entry
                                  </button>
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
                      <div className="NewGateInward1">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-12 text-start">
                              <div className="container-fluid mt-4">
                                <div className="row">
                                  <div className="col-md-8">
                                  <form className="row g-3 text-start" onSubmit={handleSubmit1}>
                                        <div className="col-md-2 col-sm-6">
                                            <label className="form-label">Select Item</label>
                                            <input
                                                type="text"
                                                className={getErrorClass1('SelectItem')}
                                                name="SelectItem"
                                                value={formData1.SelectItem}
                                                onChange={handleChange1}
                                                placeholder="Enter Item"
                                            />
                                            {getErrorText1('SelectItem')}
                                        </div>

                                        <div className="col-md-2 col-sm-6">
                                            <label className="form-label">Qty (Nos)</label>
                                            <input
                                                type="text"
                                                className={getErrorClass1('Qty_NOS')}
                                                name="Qty_NOS"
                                                value={formData1.Qty_NOS}
                                                onChange={handleChange1}
                                                placeholder="Enter Quantity (Nos)"
                                            />
                                            {getErrorText1('Qty_NOS')}
                                        </div>

                                        <div className="col-md-2 col-sm-6">
                                            <label className="form-label">Qty (Kg)</label>
                                            <input
                                                type="text"
                                                className={getErrorClass1('Qty_Kg')}
                                                name="Qty_Kg"
                                                value={formData1.Qty_Kg}
                                                onChange={handleChange1}
                                                placeholder="Enter Quantity (Kg)"
                                            />
                                            {getErrorText1('Qty_Kg')}
                                        </div>

                                        <div className="col-md-2 col-sm-6">
                                            <label className="form-label">Remark</label>
                                            <input
                                                type="text"
                                                className={getErrorClass1('Remark')}
                                                name="Remark"
                                                value={formData1.Remark}
                                                onChange={handleChange1}
                                                placeholder="Enter Remark"
                                            />
                                            {getErrorText1('Remark')}
                                        </div>

                                        <div className="col-md-1 col-sm-6 mt-1 align-self-end">
                                            <button type="submit" className="pobtn w-100">
                                                Add
                                            </button>
                                        </div>
                                    </form>
                                  </div>
                                </div>
                                <div className="table-responsive">
                                  <table className="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Sr.</th>
                                        <th>Item No | Code</th>
                                        <th>Description</th>
                                        <th>Qty (Desc)</th>
                                        <th>Qty (Kg)</th>
                                        <th>Unit Code</th>
                                        <th>Remark</th>
                                        <th>Edit</th>
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
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
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
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGateInward;
