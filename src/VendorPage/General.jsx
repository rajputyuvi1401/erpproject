import React, { useState } from "react";
import "./VendorPage.css";

const General = ({ formData, onFormDataChange, onNextButtonClick }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: !value });
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "company_name",
      "short_name",
      "website",
      "email",
      "password",
      "contact_no",
      "footer_message",
      "director_name",
      "msme_no",
      "address",
      "pin_code",
      "city",
      "state",
      "password2",
      "district_code",
      "state_no_numeric",
      "state_code_alpha",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextButtonClick = (e) => {
    console.log("gernall data successfull");
    e.preventDefault();
    if (validateForm()) {
      onNextButtonClick();
    }
  };

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="VendorGeneral">
      <div className="container-fluid">
        <form onSubmit={handleGeneralSubmit} autoComplete="off">
          <div className="row text-start">
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
                      className="form-control"
                      id="company_name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      placeholder="Sharp Engineers"
                    />
                    {errors.company_name && (
                      <div className="text-danger">{errors.company_name}</div>
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
                      className="form-control"
                      id="short_name"
                      name="short_name"
                      value={formData.short_name}
                      onChange={handleChange}
                      placeholder="S E"
                    />
                    {errors.short_name && (
                      <div className="text-danger">{errors.short_name}</div>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="website" className="col-sm-4 col-form-label">
                    Website
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://www.youtube.com/"
                    />
                    {errors.website && (
                      <div className="text-danger">{errors.website}</div>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="email" className="col-sm-4 col-form-label">
                    Email Id
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contact@sharp-engineers.com"
                    />
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="password" className="col-sm-4 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="*********"
                    />
                    {errors.password && (
                      <div className="text-danger">{errors.password}</div>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="contact_no"
                    className="col-sm-4 col-form-label"
                  >
                    Contact Number
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="contact_no"
                      name="contact_no"
                      value={formData.contact_no}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                    {errors.contact_no && (
                      <div className="text-danger">{errors.contact_no}</div>
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
                      className="form-control"
                      id="footer_message"
                      name="footer_message"
                      value={formData.footer_message}
                      onChange={handleChange}
                      placeholder="Welcome to Sharp Engineers"
                    >
                      {" "}
                    </textarea>
                    {errors.footer_message && (
                      <div className="text-danger">{errors.footer_message}</div>
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
                      className="form-control"
                      id="director_name"
                      name="director_name"
                      value={formData.director_name}
                      onChange={handleChange}
                      placeholder="Mr. John Doe"
                    />
                    {errors.director_name && (
                      <div className="text-danger">{errors.director_name}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-3">
                <label htmlFor="msme_no" className="col-sm-4 col-form-label">
                  MSME Number
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="msme_no"
                    name="msme_no"
                    value={formData.msme_no}
                    onChange={handleChange}
                    placeholder="MSME123456"
                  />
                  {errors.msme_no && (
                    <div className="text-danger">{errors.msme_no}</div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="address" className="col-sm-4 col-form-label">
                  Address
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="1234 Main St"
                  />
                  {errors.address && (
                    <div className="text-danger">{errors.address}</div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="pin_code" className="col-sm-4 col-form-label">
                  Pin Code
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="pin_code"
                    name="pin_code"
                    value={formData.pin_code}
                    onChange={handleChange}
                    placeholder="110001"
                  />
                  {errors.pin_code && (
                    <div className="text-danger">{errors.pin_code}</div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="city" className="col-sm-4 col-form-label">
                  City
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="New Delhi"
                  />
                  {errors.city && (
                    <div className="text-danger">{errors.city}</div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="state" className="col-sm-4 col-form-label">
                  State
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Delhi"
                  />
                  {errors.state && (
                    <div className="text-danger">{errors.state}</div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="password2" className="col-sm-4 col-form-label">
                  Confirm Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    id="password2"
                    name="password2"
                    value={formData.password2}
                    onChange={handleChange}
                    placeholder="*********"
                  />
                  {errors.password2 && (
                    <div className="text-danger">{errors.password2}</div>
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
                    className="form-control"
                    id="district_code"
                    name="district_code"
                    value={formData.district_code}
                    onChange={handleChange}
                    placeholder="DL"
                  />
                  {errors.district_code && (
                    <div className="text-danger">{errors.district_code}</div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="state_no_numeric"
                  className="col-sm-4 col-form-label"
                >
                  State Number (Numeric)
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="state_no_numeric"
                    name="state_no_numeric"
                    value={formData.state_no_numeric}
                    onChange={handleChange}
                    placeholder="07"
                  />
                  {errors.state_no_numeric && (
                    <div className="text-danger">{errors.state_no_numeric}</div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="state_code_alpha"
                  className="col-sm-4 col-form-label"
                >
                  State Code (Alpha)
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="state_code_alpha"
                    name="state_code_alpha"
                    value={formData.state_code_alpha}
                    onChange={handleChange}
                    placeholder="DL"
                  />
                  {errors.state_code_alpha && (
                    <div className="text-danger">{errors.state_code_alpha}</div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-12 text-end">
                  <button
                    className="gernal-update"
                    type="button"
                    onClick={handleNextButtonClick}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default General;
