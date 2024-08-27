import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./BusinessPartner.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { fetchCountries } from '../../Service/Api.jsx';
const BusinessPartner = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };


  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        console.error('Error loading countries:', error);
      }
    };

    loadCountries();
  }, []);

  // Handle dropdown change
  const handleDropdownChange = (event) => {
    setFormData({
      ...formData,
      country: event.target.value
    });

  };


  const [formData, setFormData] = useState({
    cust_supp_name: "",
    add_code: "",
    partner_name: "",
    address: "",
   
    city: "",
    pin_code: "",
    email: "",
    contact_no: "",
    state_code: "",
    country: "",
    gst_no: "",
    gst_code: "",
    pan_no: "",
    distance: "",
    cin_no: "",
    invoice_type: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [supplierList, setSupplierList] = useState([]);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleClear = () => {
    setFormData({
      cust_supp_name: "",
      add_code: "",
      partner_name: "",
      address: "",
     
      city: "",
      pin_code: "",
      email: "",
      contact_no: "",
      state_code: "",
      country: "",
      gst_no: "",
      gst_code: "",
      pan_no: "",
      distance: "",
      cin_no: "",
      invoice_type: "",
    });
    setErrors({});
    setApiError("");
    setSuccessMessage("");
  };

  const validateGSTNo = () => {
    // Regex pattern for Indian GST number
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (!gstRegex.test(formData.gst_no)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        gst_no: "GST number is incorrect.",
      }));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateGSTNo()) {
      // Proceed with form submission (e.g., API call)
      alert("Form submitted successfully");
    } else {
      alert("Form has errors");
    }

    const newErrors = {};
    const requiredFields = ["cust_supp_name", "add_code", "partner_name"];

    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post("api/master/Business_Partner/", formData);
      setSuccessMessage("Data saved successfully!");
      console.log("Data saved:", formData);
      setShowModal(true);
      // handleClear();
      setTimeout(() => {
        setShowModal(false);
        navigate("/dashboard"); // Navigate to /dashboard after showing the modal
      }, 2000);
    } catch (error) {
      setApiError("Failed to save the data.");
      console.error(
        "Error details:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`api/master/Supplier_Name/?search=${formData.cust_supp_name}`);
      setSupplierList(response.data);
    } catch (error) {
      console.error('Error fetching supplier data:', error);
    }
  };


  return (
    <div className="Bussiness">
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
                <div className="fullbus">
                  <div className="bussiness1">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>Business Partner</h5>
                        </div>
                        <div className="col-md-6 text-end">
                          <button className="btn-bus">
                            Customer Supplier List
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bussiness-main">
                    <div className="container-fluid">
                      <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="row mt-4">
                          <div className="col-md-6">
                            <div className="row mb-3">
                              <label
                                htmlFor="cust_supp_name"
                                className="col-sm-3 col-form-label"
                              >
                                Cust / Supp Name:
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  placeholder="Please enter name"
                                  className="form-control"
                                  id="cust_supp_name"
                                  value={formData.cust_supp_name}
                                  onChange={handleChange}
                                />
                                {errors.cust_supp_name && (
                                  <div className="text-danger">
                                    {errors.cust_supp_name}
                                  </div>
                                )}
                              </div>
                              <div className="col-md-2">
                                <button type="button" className="btn-ty" onClick={handleSearch}>
                                  Search
                                </button>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="add_code"
                                className="col-sm-3 col-form-label"
                              >
                                Add Code:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="add_code"
                                  value={formData.add_code}
                                  onChange={handleChange}
                                />
                                {errors.add_code && (
                                  <div className="text-danger">
                                    {errors.add_code}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="partner_name"
                                className="col-sm-3 col-form-label"
                              >
                                Partner Name:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="partner_name"
                                  value={formData.partner_name}
                                  onChange={handleChange}
                                />
                                {errors.partner_name && (
                                  <div className="text-danger">
                                    {errors.partner_name}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="row mb-5">
                              <label
                                htmlFor="address"
                                className="col-sm-3 col-form-label"
                              >
                                Address:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  placeholder="Address"
                                  className="form-control"
                                  id="address"
                                  value={formData.address}
                                  onChange={handleChange}
                                />
                                {errors.address && (
                                  <div className="text-danger">
                                    {errors.address1}
                                  </div>
                                )}
                                <br />
                               
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="city"
                                className="col-sm-3 col-form-label"
                              >
                                City:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="city"
                                  placeholder="City"
                                  value={formData.city}
                                  onChange={handleChange}
                                />
                                {/* {errors.city && (
                                  <div className="text-danger">
                                    {errors.city}
                                  </div>
                                )} */}
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="pin_code"
                                className="col-sm-3 col-form-label"
                              >
                                Pin Code:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="pin_code"
                                  value={formData.pin_code}
                                  onChange={handleChange}
                                />
                                {/* {errors.pin_code && (
                                  <div className="text-danger">
                                    {errors.pin_code}
                                  </div>
                                )} */}
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="email"
                                className="col-sm-3 col-form-label"
                              >
                                Email:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                                {/* {errors.email && (
                                  <div className="text-danger">
                                    {errors.email}
                                  </div>
                                )} */}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row mb-3">
                              <label
                                htmlFor="contact_no"
                                className="col-sm-3 col-form-label"
                              >
                                Contact No:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="contact_no"
                                  value={formData.contact_no}
                                  onChange={handleChange}
                                />
                                {/* {errors.contact_no && (
                                  <div className="text-danger">
                                    {errors.contact_no}
                                  </div>
                                )} */}
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="state_code"
                                className="col-sm-3 col-form-label"
                              >
                                State Code:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="state_code"
                                  value={formData.state_code}
                                  onChange={handleChange}
                                />
                                {/* {errors.state_code && (
                                  <div className="text-danger">
                                    {errors.state_code}
                                  </div>
                                )} */}
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="country"
                                className="col-sm-3 col-form-label"
                              >
                                Country:
                              </label>
                              <div className="col-sm-8">
                                <select
                                  className="form-select"
                                  id="country"
                                  name="country"
                                  value={formData.country}
                                  onChange={handleDropdownChange}
                                >
                                  <option value="">Select</option>
                                  {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
                                </select>
                                {/* {errors.country && (
                                  <div className="text-danger">
                                    {errors.country}
                                  </div>
                                )} */}
                              </div>
                              
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="gst_no"
                                className="col-sm-3 col-form-label"
                              >
                                GST No:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="gst_no"
                                  placeholder="12ABCDE1234Z1X"
                                  value={formData.gst_no}
                                  onChange={handleChange}
                                />
                                {/* {errors.gst_no && (
                                  <div className="text-danger">
                                    {errors.gst_no}
                                  </div>
                                )} */}
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="gst_code"
                                className="col-sm-3 col-form-label"
                              >
                                GST Code:
                              </label>
                              <div className="col-sm-8">
                                <select
                                  className="form-select"
                                  id="gst_code"
                                  value={formData.gst_code}
                                  onChange={handleChange}
                                >
                                  <option value="">Select</option>
                                  <option value="1">CGST + SGST</option>
                                  <option value="2">IGST</option>
                                  <option value="3">UTGST</option>
                                  <option value="4">NA</option>
                                </select>
                                {/* {errors.gst_code && (
                                  <div className="text-danger">
                                    {errors.gst_code}
                                  </div>
                                )} */}
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="pan_no"
                                className="col-sm-3 col-form-label"
                              >
                                PAN No:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="pan_no"
                                  value={formData.pan_no}
                                  onChange={handleChange}
                                />
                                {/* {errors.pan_no && (
                                  <div className="text-danger">
                                    {errors.pan_no}
                                  </div>
                                )} */}
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="distance"
                                className="col-sm-3 col-form-label"
                              >
                                Distance:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="distance"
                                  value={formData.distance}
                                  onChange={handleChange}
                                />
                                {/* {errors.distance && (
                                  <div className="text-danger">
                                    {errors.distance}
                                  </div>
                                )} */}
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="cin_no"
                                className="col-sm-3 col-form-label"
                              >
                                CIN No:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="cin_no"
                                  value={formData.cin_no}
                                  onChange={handleChange}
                                />
                                {/* {errors.cin_no && (
                                  <div className="text-danger">
                                    {errors.cin_no}
                                  </div>
                                )} */}
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                htmlFor="invoice_type"
                                className="col-sm-3 col-form-label"
                              >
                                Invoice Type:
                              </label>
                              <div className="col-sm-8">
                                <select
                                  className="form-select"
                                  id="invoice_type"
                                  value={formData.invoice_type}
                                  onChange={handleChange}
                                >
                                  <option value="">Select</option>
                                  <option value="1">Gernal</option>
                                  <option value="2">Export</option>
                                 
                                </select>
                                {/* {errors.invoice_type && (
                                  <div className="text-danger">
                                    {errors.invoice_type}
                                  </div>
                                )} */}
                              </div>
                              </div>
                              <div className="row mb-3 text-end">
                              <div className="col-sm-10">
                                <button type="submit" className="btn-ty">
                                  Save
                                </button>
                              </div>
                              <div className="col-sm-2">
                                <button
                                  type="button"
                                  className="btn-ty"
                                  onClick={handleClear}
                                >
                                  Clear
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {apiError && (
                          <div className="text-danger text-center mt-3">
                            {apiError}
                          </div>
                        )}
                        {successMessage && (
                          <div className="text-success text-center mt-3">
                            {successMessage}
                          </div>
                        )}
                      </form>
                      <table className="table mt-4">
                        <thead>
                          <tr>
                            <th>Code No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>State Code</th>
                            <th>Country</th>
                            <th>Contact No</th>
                            <th>Email</th>
                            <th>GST Tax Code</th>
                            <th>PAN No</th>
                            <th>Distance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {supplierList.map((supplier) => (
                            <tr key={supplier.id}>
                              <td>{supplier.Code_No}</td>
                              <td>{supplier.Name}</td>
                              <td>{supplier.Address_Line_1}</td>
                              <td>{supplier.State_Code}</td>
                              <td>{supplier.Country}</td>
                              <td>{supplier.Contact_No}</td>
                              <td>{supplier.Email_Id}</td>
                              <td>{supplier.GST_Tax_Code}</td>
                              <td>{supplier.PAN_NO}</td>
                              <td>{supplier.Distance}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <Modal
                        show={showModal}
                        onHide={() => setShowModal(false)}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Model</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>Data saved successfully!</p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={() => setShowModal(false)}
                          >
                            OK
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                    <div className="bus-bottom">
                      <div className="row mb-3">
                        <div className="col-md-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              View All BSP
                            </label>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Add Code
                            </label>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Address
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-5">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="Enter Address"
                          />
                        </div>
                        <div className="col-sm-3">
                          <button className="bsi-btn">Search</button>
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

export default BusinessPartner;
