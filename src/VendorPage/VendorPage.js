import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../NavBar/NavBar";
import SideNav from "../SideNav/SideNav";
import axios from "axios";
import "./VendorPage.css";

const VendorPage = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  const [formData, setFormData] = useState({
    company_name: "",
    short_name: "",
    address: "",
    website: "",
    email: "",
    password: "",
    password2: "",
    contact_no: "",
    footer_message: "",
    director_name: "",
    msme_no: "",
    pin_code: "",
    city: "",
    state: "",
    district_code: "",
    state_no_numeric: "",
    state_code_alpha: "",

    // data-2
    VAT_TIN: "",
    CST_TIN: "",
    C_Excise_Range: "",
    Commissionerate: "",
    C_Excise_Reg_No: "",
    PLA_No: "",
    Service_Tax_No: "",
    Import_Export_Code: "",
    ARN_No: "",
    Export_House_No: "",
    Udyog_Aadhar_No: "",
    VAT_TIN_Date: "",
    CST_TIN_Date: "",
    Subject_To: "",
    Division: "",
    GST_No: "",
    ECC_No: "",
    PAN_No: "",
    CIN_NO: "",
    Import_Export_Date: "",
    ARN_Date: "",
    LUT_NO: "",
    LUT_Date: "",
  });
  const [errors, setErrors] = useState({});
  const profileTabRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleGeneralSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting general data:", formData);
    // Assuming your validation and submission logic here
    try {
      // Replace with your actual endpoint
      const response = await axios.post(
        "https://13.201.136.34:8000/vendor/register/",
        formData
      );
      console.log("General Data submitted successfully:", response.data);
      // Clear errors state on success
      setErrors({});
      // Programmatically switch to the next tab
      handleNextButtonClick();
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
        console.error("Error submitting general data:", error.response.data);
      } else {
        console.error("Error submitting general data:", error);
      }
    }
  };

  const handleData2Submit = async (e) => {
    e.preventDefault();
    console.log("Submitting data-2:", formData);
    // Assuming your validation and submission logic here
    try {
      // Replace with your actual endpoint
      const response = await axios.post(
        "https://13.201.136.34:8000/vendor/register/",
        formData
      );
      console.log("Data-2 submitted successfully:", response.data);
      // Clear errors state on success
      setErrors({});
      // Optionally handle next steps or navigation after submission
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
        console.error("Error submitting data-2:", error.response.data);
      } else {
        console.error("Error submitting data-2:", error);
      }
    }
  };
  const handleNextButtonClick = () => {
    if (profileTabRef.current) {
      profileTabRef.current.click(); // Trigger click on the profile tab button
    }
  };

  return (
    <div className="Vendor">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="VendorPage">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav
                sideNavOpen={sideNavOpen}
                toggleSideNav={toggleSideNav}
              />

              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="Vendorpage1">
                  <div className="top-but">
                    <div className="row">
                      <div className="col-md-10">
                        <button className="btn" type="button">
                          Company Setup
                        </button>
                        <button className="btn" type="button">
                          Last Updated By Admin
                        </button>
                        <button className="btn" type="button">
                          On D1 12/07/2022 2:57 PM
                        </button>
                      </div>
                      <div className="col-md-2 text-end">
                        <button className="btn">Gernal Setting</button>
                      </div>
                    </div>
                  </div>
                  <div className="VendorPageMain">
                    <div className="container" id="shivi">
                      <div className="row">
                        <ul
                          className="nav nav-pills mb-3"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-home"
                              type="button"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              Gernal
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              ref={profileTabRef}
                              className="nav-link"
                              id="pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              Data-2
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-contact-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-contact"
                              type="button"
                              role="tab"
                              aria-controls="pills-contact"
                              aria-selected="false"
                            >
                              Logo/Images
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-service-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-service"
                              type="button"
                              role="tab"
                              aria-controls="pills-service"
                              aria-selected="false"
                              service
                            >
                              E-Invoice
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                            tabindex="0"
                          >
                            <div className="VendorGernal">
                              <div className="container-fluid">
                                <form onSubmit={handleGeneralSubmit}>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form">
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="company_name"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Company Name
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.company_name
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="company_name"
                                              name="company_name"
                                              value={formData.company_name}
                                              onChange={handleChange}
                                              placeholder="Sharp Engineers"
                                            />
                                            {errors.company_name && (
                                              <div className="invalid-feedback">
                                                {errors.company_name[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="short_name"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Short Name
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.short_name
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="short_name"
                                              name="short_name"
                                              value={formData.short_name}
                                              onChange={handleChange}
                                              placeholder="S E"
                                            />
                                            {errors.short_name && (
                                              <div className="invalid-feedback">
                                                {errors.short_name[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>

                                        <div className="row mb-3">
                                          <label
                                            htmlFor="website"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Website
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.website
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="website"
                                              name="website"
                                              value={formData.website}
                                              onChange={handleChange}
                                              placeholder="sharp-engineers.com"
                                            />
                                            {errors.website && (
                                              <div className="invalid-feedback">
                                                {errors.website[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="email"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Email Id
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="email"
                                              className={`form-control ${
                                                errors.email ? "is-invalid" : ""
                                              }`}
                                              id="email"
                                              name="email"
                                              value={formData.email}
                                              onChange={handleChange}
                                              placeholder="contact@sharp-engineers.com"
                                            />
                                            {errors.email && (
                                              <div className="invalid-feedback">
                                                {errors.email[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="password"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Password:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="password"
                                              className={`form-control ${
                                                errors.password
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="password"
                                              name="password"
                                              value={formData.password}
                                              onChange={handleChange}
                                              placeholder="contact@sharp-engineers.com"
                                            />
                                            {errors.password && (
                                              <div className="invalid-feedback">
                                                {errors.password[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="contact_no"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Contact No
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.contact_no
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="contact_no"
                                              name="contact_no"
                                              value={formData.contact_no}
                                              onChange={handleChange}
                                              placeholder="8888826579"
                                            />
                                            {errors.contact_no && (
                                              <div className="invalid-feedback">
                                                {errors.contact_no[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="footer_message"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Footer Message
                                          </label>
                                          <div className="col-sm-8">
                                            <textarea
                                              className={`form-control ${
                                                errors.footer_message
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="footer_message"
                                              name="footer_message"
                                              value={formData.footer_message}
                                              onChange={handleChange}
                                              rows="3"
                                            ></textarea>
                                            {errors.footer_message && (
                                              <div className="invalid-feedback">
                                                {errors.footer_message[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="director_name"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Director Name
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.director_name
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="director_name"
                                              name="director_name"
                                              value={formData.director_name}
                                              onChange={handleChange}
                                              placeholder="Umesh Khandekwal"
                                            />
                                            {errors.director_name && (
                                              <div className="invalid-feedback">
                                                {errors.director_name[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form">
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="msme_no"
                                            className="col-sm-4 col-form-label"
                                          >
                                            MSME NO
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.msme_no
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="msme_no"
                                              name="msme_no"
                                              value={formData.msme_no}
                                              onChange={handleChange}
                                              placeholder="M789656325"
                                            />
                                            {errors.msme_no && (
                                              <div className="invalid-feedback">
                                                {errors.msme_no[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="address"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Address
                                          </label>
                                          <div className="col-sm-8">
                                            <textarea
                                              className={`form-control ${
                                                errors.address
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="address"
                                              name="address"
                                              value={formData.address}
                                              onChange={handleChange}
                                              rows="3"
                                            ></textarea>
                                            {errors.address && (
                                              <div className="invalid-feedback">
                                                {errors.address[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="pin_code"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Pin Code
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.pin_code
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="pin_code"
                                              name="pin_code"
                                              value={formData.pin_code}
                                              onChange={handleChange}
                                              placeholder="123456"
                                            />
                                            {errors.pin_code && (
                                              <div className="invalid-feedback">
                                                {errors.pin_code[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="city"
                                            className="col-sm-4 col-form-label"
                                          >
                                            City
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.city ? "is-invalid" : ""
                                              }`}
                                              id="city"
                                              name="city"
                                              value={formData.city}
                                              onChange={handleChange}
                                              placeholder="AURANGABAD"
                                            />
                                            {errors.city && (
                                              <div className="invalid-feedback">
                                                {errors.city[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="state"
                                            className="col-sm-4 col-form-label"
                                          >
                                            State
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.state ? "is-invalid" : ""
                                              }`}
                                              id="state"
                                              name="state"
                                              value={formData.state}
                                              onChange={handleChange}
                                              placeholder="MAHARASHTRA"
                                            />
                                            {errors.state && (
                                              <div className="invalid-feedback">
                                                {errors.state[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="password2"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Confirm Password:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="password2"
                                              className={`form-control ${
                                                errors.password2
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="password2"
                                              name="password2"
                                              value={formData.password2}
                                              onChange={handleChange}
                                              placeholder="contact@sharp-engineers.com"
                                            />
                                            {errors.password2 && (
                                              <div className="invalid-feedback">
                                                {errors.password2[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="district_code"
                                            className="col-sm-4 col-form-label"
                                          >
                                            District Code
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.district_code
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="district_code"
                                              name="district_code"
                                              value={formData.district_code}
                                              onChange={handleChange}
                                              placeholder="District Code"
                                            />
                                            {errors.district_code && (
                                              <div className="invalid-feedback">
                                                {errors.district_code[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="state_no_numeric"
                                            className="col-sm-4 col-form-label"
                                          >
                                            State No Numeric
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.state_no_numeric
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="state_no_numeric"
                                              name="state_no_numeric"
                                              value={formData.state_no_numeric}
                                              onChange={handleChange}
                                              placeholder="27"
                                            />
                                            {errors.state_no_numeric && (
                                              <div className="invalid-feedback">
                                                {errors.state_no_numeric[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="state_code_alpha"
                                            className="col-sm-4 col-form-label"
                                          >
                                            State code Alpha
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className={`form-control ${
                                                errors.state_code_alpha
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                              id="state_code_alpha"
                                              name="state_code_alpha"
                                              value={formData.state_code_alpha}
                                              onChange={handleChange}
                                              placeholder="MH"
                                            />
                                            {errors.state_code_alpha && (
                                              <div className="invalid-feedback">
                                                {errors.state_code_alpha[0]}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-2 text-start">
                                      <button
                                        type="submit"
                                        className="gernal-update"
                                        onClick={handleNextButtonClick}
                                      >
                                        Next
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                            tabindex="0"
                          >
                            <div className="Vendordata2">
                              <form onSubmit={handleData2Submit}>
                                <div className="date-2">
                                  <div className="container-fluid">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            VAT TIN:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="VAT_TIN"
                                              value={formData.VAT_TIN}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            CST TIN:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="CST_TIN"
                                              value={formData.CST_TIN}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-5">
                                          <label className="col-sm-4 col-form-label">
                                            C. Excise Range:
                                          </label>
                                          <div className="col-sm-8">
                                            <textarea
                                              className="form-control"
                                              name="C_Excise_Range"
                                              rows="3"
                                              value={formData.C_Excise_Range}
                                              onChange={handleChange}
                                            ></textarea>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            Commissionerate:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="Commissionerate"
                                              value={formData.Commissionerate}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            C. Excise Reg No:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="C_Excise_Reg_No"
                                              value={formData.C_Excise_Reg_No}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            P.L.A No.:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="PLA_No"
                                              value={formData.PLA_No}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            Service Tax No:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="Service_Tax_No"
                                              value={formData.Service_Tax_No}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            Import/Export Code:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="Import_Export_Code"
                                              value={
                                                formData.Import_Export_Code
                                              }
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            ARN No:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="ARN_No"
                                              value={formData.ARN_No}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            Export House No:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="Export_House_No"
                                              value={formData.Export_House_No}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            Udyog Aadhar No:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="Udyog_Aadhar_No"
                                              value={formData.Udyog_Aadhar_No}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            VAT TIN Date:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="VAT_TIN_Date"
                                              value={formData.VAT_TIN_Date}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            CST TIN Date:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="CST_TIN_Date"
                                              value={formData.CST_TIN_Date}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-5">
                                          <label className="col-sm-4 col-form-label">
                                            Subject to:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="Subject_To"
                                              value={formData.Subject_To}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            Division:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="Division"
                                              value={formData.Division}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            GST No:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="GST_No"
                                              value={formData.GST_No}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            ECC No:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="ECC_No"
                                              value={formData.ECC_No}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            PAN No:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="PAN_No"
                                              value={formData.PAN_No}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            CIN No:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="CIN_NO"
                                              value={formData.CIN_NO}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            Import/Export Date:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="Import_Export_Date"
                                              value={
                                                formData.Import_Export_Date
                                              }
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            ARN Date:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="ARN_Date"
                                              value={formData.ARN_Date}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            LUT No:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="LUT_NO"
                                              value={formData.LUT_NO}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                            LUT Date:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="LUT_Date"
                                              value={formData.LUT_Date}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-2 text-start">
                                    <button
                                      type="submit"
                                      className="date-update"
                                    >
                                      Update Setup
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="pills-contact"
                            role="tabpanel"
                            aria-labelledby="pills-contact-tab"
                            tabindex="0"
                          >
                            <div className="VendorLogoImages">
                              <div className="logo-image">
                                <div className="container">
                                  <div className="row text-start">
                                    <div className="col-md-12">
                                      <div className="row mb-5">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          ERP LoginPage:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-5">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          ERP Home Page Header:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-5">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Company Logo Print on document:
                                          <br />
                                          (eg. GastInvoice/Purchase Order ect)
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>

                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          TUV Logo Print on Document:
                                          <br />
                                          (eg. GastInvoice/Purchase Order ect)
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-2 text-start">
                                  <button className="date-update">
                                    Update Setup
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="pills-service"
                            role="tabpanel"
                            aria-labelledby="pills-service-tab"
                            tabindex="0"
                          >
                            <div className="VendorEinvoice">
                              <div className="einvoice">
                                <div className="container">
                                  <div className="row text-start">
                                    <div className="col-md-8">
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          SE GST NO:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          GSP APP ID:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          GSP APP Secret:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-5">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Access Token:
                                        </label>
                                        <div className="col-sm-8">
                                          <textarea
                                            class="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Access Token Date::
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          SE API UserName:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          SE API PassWord:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          API Url:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-2 text-start">
                                  <button className="date-update">
                                    Update Setup
                                  </button>
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

export default VendorPage;
