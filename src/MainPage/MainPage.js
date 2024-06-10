import React, { useState, useEffect } from "react";
import "./MainPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../NavBar/NavBar";
import SideNav from "../SideNav/SideNav";

const MainPage = () => {
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
                {/* <div className="top-but">
                  <div className="row">
                    <div className="col-md-12">
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
                  </div>
                </div> */}
                <div className="container" id="shivi">
                  <div className="row">
                    <div className="col-md-12">
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
                            General
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            Date-2
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
                            Logo / Images
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-about-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-about"
                            type="button"
                            role="tab"
                            aria-controls="pills-about"
                            aria-selected="false"
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
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Company Name
                                        </label>
                                        <div className="col-md-10">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="Sharp Engineers"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Short Name
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="S E"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Address:
                                        </label>
                                        <div className="col-sm-10">
                                          <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                          ></textarea>
                                        </div>
                                      </div>

                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Website
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="sharp-engineers.com"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Email Id
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="contact@sharp-engineers com"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Contact No:
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="8888826579"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Footer Message:
                                        </label>
                                        <div className="col-sm-10">
                                          <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Director Name:
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="Umesh Khandekwal"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          MSME NO:
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="M789656325"
                                          />
                                        </div>
                                      </div>

                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Address:
                                        </label>
                                        <div className="col-sm-10">
                                          <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                          ></textarea>
                                        </div>
                                      </div>

                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Pin Code:
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="123456"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          City
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="AURABGABAD"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          State
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="MAHARASTRA"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          District Code
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="Umesh Khandekwal"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          State No Numeric
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="27"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          State code Alpha
                                        </label>
                                        <div className="col-sm-10">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="27"
                                          />
                                        </div>
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
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                          tabindex="0"
                        >
                          <div className="date-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          VAT TIN:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="Sharp Engineers"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          CST TIN:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="S E"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-5">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          C. Excise Range:
                                        </label>
                                        <div className="col-sm-8">
                                          <textarea
                                            className="form-control"
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
                                          Commissionerate:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="sharp-engineers.com"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          C. Excise Reg No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          P.L.A No.
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Service Tax No::
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Import/Export Code:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          ARN No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Export House No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Udyog Aadhar No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          VAT TIN Date:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="Sharp Engineers"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          CST TIN Date:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="S E"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-5">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Subject to:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="S E"
                                          />
                                        </div>
                                      </div>

                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Division:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="sharp-engineers.com"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          GST No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          ECC No.
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          PAN No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          CIN No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Import/Export Date:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          ARN No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          LUT No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputPassword3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          LUT Date:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="0"
                                          />
                                        </div>
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
                          id="pills-contact"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                          tabindex="0"
                        >
                          <div className="logo-image">
                            <div className="container">
                              <div className="row">
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
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-about"
                    role="tabpanel"
                    aria-labelledby="pills-about-tab"
                    tabindex="0"
                  >
                    <div className="einvoice">
                      <div className="container">
                        <div className="row">
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

export default MainPage;
