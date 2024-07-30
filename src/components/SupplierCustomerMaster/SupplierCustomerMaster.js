import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./SupplierCustomerMaster.css";
import CachedIcon from "@mui/icons-material/Cached";
import { FaEdit, FaTrash } from "react-icons/fa";

const SupplierCustomerMaster = () => {
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

  // New button open card
  const [isCardOpen, setIsCardOpen] = useState(false);

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  const [isCardOpenregion, setIsCardOpenregion] = useState(false);

  const toggleCardregion = () => {
    setIsCardOpenregion(!isCardOpenregion);
  };

  const [isCardOpenStateCode, setIsCardOpenStateCode] = useState(false);

  const toggleCardStateCode = () => {
    setIsCardOpenStateCode(!isCardOpenStateCode);
  };

  const [isCardOpenPayment, setIsCardOpenPayment] = useState(false);

  const toggleCardPayment = () => {
    setIsCardOpenPayment(!isCardOpenPayment);
  };

  const [isCardOpenCountry, setIsCardOpenCountry] = useState(false);

  const toggleCardCountry = () => {
    setIsCardOpenCountry(!isCardOpenCountry);
  };

  const [isCardOpenCurrency, setIsCardOpenCurrency] = useState(false);

  const toggleCardCurrency = () => {
    setIsCardOpenCurrency(!isCardOpenCurrency);
  };

  const [isCardOpenCity, setIsCardOpenCity] = useState(false);

  const toggleCardCity = () => {
    setIsCardOpenCity(!isCardOpenCity);
  };

  const [isCardOpenSector, setIsCardOpenSector] = useState(false);

  const toggleCardSector = () => {
    setIsCardOpenSector(!isCardOpenSector);
  };

  const [isCardOpenGroup, setIsCardOpenGroup] = useState(false);

  const toggleCardGroup = () => {
    setIsCardOpenGroup(!isCardOpenGroup);
  };

  return (
    <div className="SupplierC">
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
                <div className="SupplierC1">
                  <div className="SupplierCus">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>
                            Supplier / Customer Master
                          </h5>
                        </div>
                        <div className="col-md-6 text-end">
                          <button className="SupplierCusbtn">
                            Supplier/Customer List
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="Suppliermain">
                    <div className="container-fluid">
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
                                Buyer / Contact Details
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
                                Bank Details
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
                              <div className="Suppliergernal">
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <p
                                        className="mandatory  text-start"
                                        style={{
                                          marginTop: "10px",
                                          color: "grey",
                                          marginBottom: "50px",
                                        }}
                                      >
                                        Mandatory Fields
                                      </p>
                                    </div>
                                  </div>
                                  <div className="row text-start">
                                    <div
                                      className="col-md-4"
                                      style={{ padding: "10px" }}
                                    >
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Type:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="">Select</option>
                                            <option value="">Customer</option>
                                            <option value="">Supplier</option>
                                            <option value="">Job Work</option>
                                            <option value="">C/S/JW</option>
                                          </select>
                                        </div>
                                        <div className="col-sm-2">
                                          <button
                                            className="btn"
                                            onClick={toggleCard}
                                          >
                                            New
                                          </button>
                                        </div>
                                        <div className="col-sm-1">
                                          <button
                                            className="btn"
                                            style={{ fontSize: "10px" }}
                                          >
                                            <CachedIcon />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Name:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Address Line 1:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="Address Line 1"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Address Line 2:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="Address Line 2"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Address Line 3:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="Address Line 3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Region:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="1">Ludhiana</option>
                                            <option value="2">
                                              Uttarakhand
                                            </option>
                                            <option value="3">Haryana</option>
                                            <option value="4">Rajasthan</option>
                                            <option value="5">
                                              Utter Pradesh
                                            </option>
                                            <option value="6">Gujjrat</option>
                                            <option value="7">
                                              Maharashtra
                                            </option>
                                            <option value="8">TamilNadu</option>
                                            <option value="9">Telungana</option>
                                          </select>
                                        </div>
                                        <div className="col-sm-2">
                                          <button
                                            className="btn"
                                            onClick={toggleCardregion}
                                          >
                                            New
                                          </button>
                                        </div>
                                        <div className="col-sm-1">
                                          <button
                                            className="btn"
                                            style={{ fontSize: "10px" }}
                                          >
                                            <CachedIcon />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <p
                                          className="mandatory  text-start"
                                          style={{
                                            marginTop: "10px",
                                            color: "grey",
                                            marginBottom: "10px",
                                          }}
                                        >
                                          GST Details
                                        </p>
                                      </div>
                                      <div className="row mb-3">
                                        <div className="form-check col-sm-4">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                          />
                                          <label
                                            className="form-check-label"
                                            for="flexCheckDefault"
                                          >
                                            PAN No.:
                                          </label>
                                        </div>
                                        <div className="col-sm-2">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-3 col-form-label"
                                        >
                                          PAN Type:
                                        </label>
                                        <div className="col-sm-3">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="FG">FG</option>
                                            <option value="RM">RM</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          State Code:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="FG">FG</option>
                                            <option value="RM">RM</option>
                                          </select>
                                        </div>
                                        <div className="col-sm-2">
                                          <button
                                            className="btn"
                                            onClick={toggleCardStateCode}
                                          >
                                            New
                                          </button>
                                        </div>
                                        <div className="col-sm-1">
                                          <button
                                            className="btn"
                                            style={{ fontSize: "10px" }}
                                          >
                                            <CachedIcon />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          GST Tax Code:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="">
                                              CGST + SGST
                                            </option>
                                            <option value="">IGST</option>
                                            <option value="">UTGST</option>
                                            <option value="">NA</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <p
                                          className="mandatory  text-start"
                                          style={{
                                            marginTop: "10px",
                                            color: "grey",
                                            marginBottom: "10px",
                                          }}
                                        >
                                          Optional Details
                                        </p>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Email Id:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Contact No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <div className="form-check col-sm-4">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                          />
                                          <label
                                            className="form-check-label"
                                            for="flexCheckDefault"
                                          >
                                            TCS:
                                          </label>
                                        </div>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <div className="form-check col-sm-4">
                                          <label
                                            className="form-check-label"
                                            for="flexCheckDefault"
                                          >
                                            Insurance Policy No:
                                          </label>
                                        </div>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <div className="form-check col-sm-4">
                                          <label
                                            className="form-check-label"
                                            for="flexCheckDefault"
                                          >
                                            Subcon Challan:
                                          </label>
                                        </div>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <div className="form-check col-sm-4">
                                          <label
                                            className="form-check-label"
                                            for="flexCheckDefault"
                                          >
                                            GL:
                                          </label>
                                        </div>
                                        <div className="col-sm-8">
                                          <select
                                            className="form-select"
                                            aria-label="Default select example"
                                          >
                                            <option selected>
                                              Open this select menu
                                            </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="col-md-4"
                                      style={{ padding: "10px" }}
                                    >
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Code No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Payment Term:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="FG">FG</option>
                                            <option value="RM">RM</option>
                                          </select>
                                        </div>
                                        <div className="col-sm-2">
                                          <button
                                            className="btn"
                                            onClick={toggleCardPayment}
                                          >
                                            Add
                                          </button>
                                        </div>
                                        <div className="col-sm-1">
                                          <button
                                            className="btn"
                                            style={{ fontSize: "10px" }}
                                          >
                                            <CachedIcon />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Country:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="">India</option>
                                            <option value="">China</option>
                                            <option value="">Russia</option>
                                            <option value="">Sri Lanka</option>
                                          </select>
                                        </div>
                                        <div className="col-sm-2">
                                          <button
                                            className="btn"
                                            onClick={toggleCardCountry}
                                          >
                                            New
                                          </button>
                                        </div>
                                        <div className="col-sm-1">
                                          <button
                                            className="btn"
                                            style={{ fontSize: "10px" }}
                                          >
                                            <CachedIcon />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Currency:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="">Pantinagar</option>
                                            <option value="">a1 : x1</option>
                                            <option value="">EURO:EURO</option>
                                            <option value="">
                                              INR:Indian Rupees
                                            </option>
                                            <option value="">KD:DINAR</option>
                                            <option value="">UKPD</option>
                                            <option value="">USD:USD</option>
                                            <option value="">YEN:YEN</option>
                                          </select>
                                        </div>
                                        <div className="col-sm-2">
                                          <button
                                            className="btn"
                                            onClick={toggleCardCurrency}
                                          >
                                            New
                                          </button>
                                        </div>
                                        <div className="col-sm-1">
                                          <button
                                            className="btn"
                                            style={{ fontSize: "10px" }}
                                          >
                                            <CachedIcon />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Pin Code:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          City:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="FG">FG</option>
                                            <option value="RM">RM</option>
                                          </select>
                                        </div>
                                        <div className="col-sm-2">
                                          <button
                                            className="btn"
                                            onClick={toggleCardCity}
                                          >
                                            New
                                          </button>
                                        </div>
                                        <div className="col-sm-1">
                                          <button
                                            className="btn"
                                            style={{ fontSize: "10px" }}
                                          >
                                            <CachedIcon />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <div className="form-check col-sm-4">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                          />
                                          <label
                                            className="form-check-label"
                                            for="flexCheckDefault"
                                          >
                                            TDS Rate:
                                          </label>
                                        </div>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          GST No:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="FG">FG</option>
                                            <option value="RM">RM</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <div className="form-check col-sm-4">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                          />
                                          <label
                                            className="form-check-label"
                                            for="flexCheckDefault"
                                          >
                                            GST No:
                                          </label>
                                        </div>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Invoice Type:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="FG">FG</option>
                                            <option value="RM">RM</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          CIN No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Website:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Mobile No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Incoterms:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Insurance Policy Expiry Date:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          VAT TIN:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Montly Sale:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="col-md-4"
                                      style={{ padding: "10px" }}
                                    >
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Payment Remark:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Sector:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="FG">FG</option>
                                            <option value="RM">RM</option>
                                          </select>
                                        </div>
                                        <div className="col-sm-2">
                                          <button
                                            className="btn"
                                            onClick={toggleCardSector}
                                          >
                                            New
                                          </button>
                                        </div>
                                        <div className="col-sm-1">
                                          <button
                                            className="btn"
                                            style={{ fontSize: "10px" }}
                                          >
                                            <CachedIcon />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Group:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="FG">FG</option>
                                            <option value="RM">RM</option>
                                          </select>
                                        </div>
                                        <div className="col-sm-2">
                                          <button
                                            className="btn"
                                            onClick={toggleCardGroup}
                                          >
                                            New
                                          </button>
                                        </div>
                                        <div className="col-sm-1">
                                          <button
                                            className="btn"
                                            style={{ fontSize: "10px" }}
                                          >
                                            <CachedIcon />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Distance:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Vendor Code:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Legal Name (As Per GST):
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Cust Short Name:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          MSME Type:
                                        </label>
                                        <div className="col-sm-5">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="FG">FG</option>
                                            <option value="RM">RM</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          MSME No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          LUT No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          ISO:
                                        </label>
                                        <div className="col-sm-2">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="FG">FG</option>
                                            <option value="RM">RM</option>
                                          </select>
                                        </div>
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-1 col-form-label"
                                        >
                                          ISO:
                                        </label>
                                        <div className="col-sm-2">
                                          <select
                                            id="inputState"
                                            className="form-select"
                                          >
                                            <option
                                              selected
                                              style={{ color: "black" }}
                                            >
                                              Select ..
                                            </option>
                                            <option value="FG">FG</option>
                                            <option value="RM">RM</option>
                                          </select>
                                        </div>
                                        <div className="col-sm-2">
                                          <button className="btn">New</button>
                                        </div>
                                        <div className="col-sm-1">
                                          <button
                                            className="btn"
                                            style={{ fontSize: "10px" }}
                                          >
                                            <CachedIcon />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Active:
                                        </label>
                                        <div className="col-sm-2">
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              value=""
                                              id="flexCheckDefault"
                                            />
                                            <label
                                              className="form-check-label"
                                              for="flexCheckDefault"
                                            >
                                              Sales
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-sm-2">
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              value=""
                                              id="flexCheckDefault"
                                            />
                                            <label
                                              className="form-check-label"
                                              for="flexCheckDefault"
                                            >
                                              Purchase
                                            </label>
                                          </div>
                                        </div>

                                        <label
                                          for="inputEmail3"
                                          className="col-sm-3 col-form-label"
                                        >
                                          qmsc Valid Date:
                                        </label>
                                        <div className="col-sm-1">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Std Packing:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Old ERP Code:
                                        </label>
                                        <div className="col-sm-3">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Delivery Lead Time:
                                        </label>
                                        <div className="col-sm-3">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          EORI No:
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Montly Purchase:
                                        </label>
                                        <div className="col-sm-3">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Discount Per:
                                        </label>
                                        <div className="col-sm-3">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row text-end">
                                      <div className="col-md-12">
                                        <button className="subGernalbtn1">
                                          SAVE
                                        </button>
                                        <button className="subGernalbtn1">
                                          CLEAR
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {isCardOpen && (
                                <div className="card card-custom">
                                  <div className="card-header d-flex justify-content-between">
                                    <span>Add New Type</span>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCard}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <div className="card-body">
                                    <div className="row mb-3">
                                      <div className="col-12 text-start text-primary">
                                        Party Type
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12">
                                        <table className="table table-responsive">
                                          <thead>
                                            <tr>
                                              <th>Sr No</th>
                                              <th>Category Name</th>
                                              <th>Edit</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>1</td>
                                              <td>Customer</td>
                                              <td>
                                                <FaEdit />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>2</td>
                                              <td>Supplier</td>
                                              <td>
                                                <FaEdit />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>3</td>
                                              <td>Job Work</td>
                                              <td>
                                                <FaEdit />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>4</td>
                                              <td>C/S/JW</td>
                                              <td>
                                                <FaEdit />
                                              </td>
                                            </tr>
                                            {/* Add more rows as needed */}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {isCardOpenregion && (
                                <div className="card card-region">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Region Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardregion}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <div className="card-body">
                                    <div className="row text-start">
                                      <div className="col-md-4">
                                        <div class="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            class="form-label"
                                          >
                                            Region Code:
                                          </label>
                                          <input
                                            type="text"
                                            class="form-control"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div class="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            class="form-label"
                                          >
                                            Region Name:
                                          </label>
                                          <input
                                            type="text"
                                            class="form-control"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div class="mb-3">
                                          <button className="regionbtn">
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12">
                                        <table className="table table-responsive">
                                          <thead>
                                            <tr>
                                              <th>Sr No</th>
                                              <th>Category Name</th>
                                              <th>Edit</th>
                                              <th>Delete</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>1</td>
                                              <td>Customer</td>
                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>2</td>
                                              <td>Supplier</td>
                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>3</td>
                                              <td>Job Work</td>
                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>4</td>
                                              <td>C/S/JW</td>
                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {isCardOpenStateCode && (
                                <div className="card card-State">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      State Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardStateCode}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <div className="card-body">
                                    <div className="row text-start">
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            className="form-label"
                                          >
                                            State Name:
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            className="form-label"
                                          >
                                            State No Numeric:
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            className="form-label"
                                          >
                                            State Code Alpha:
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <button className="Statebtn">
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12">
                                        <table className="table table-responsive">
                                          <thead>
                                            <tr>
                                              <th>Sr No</th>
                                              <th>State Name</th>
                                              <th>State No</th>
                                              <th>State Short Code</th>

                                              <th>Edit</th>
                                              <th>Delete</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>1</td>
                                              <td>Maharashtra</td>
                                              <td>27</td>
                                              <td>MH</td>

                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>2</td>
                                              <td>Gujjrat</td>
                                              <td>27</td>
                                              <td>MH</td>

                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>3</td>
                                              <td>Uttarakhand</td>
                                              <td>27</td>
                                              <td>MH</td>

                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>4</td>
                                              <td>Karnataka</td>
                                              <td>27</td>
                                              <td>MH</td>

                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>5</td>
                                              <td>Maharashtra</td>
                                              <td>27</td>
                                              <td>MH</td>

                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>6</td>
                                              <td>Gujjrat</td>
                                              <td>27</td>
                                              <td>MH</td>

                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>7</td>
                                              <td>Uttarakhand</td>
                                              <td>27</td>
                                              <td>MH</td>

                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>8</td>
                                              <td>Karnataka</td>
                                              <td>27</td>
                                              <td>MH</td>

                                              <td>
                                                <FaEdit />
                                              </td>
                                              <td>
                                                <FaTrash />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {isCardOpenPayment && (
                                <div className="card-Payment">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Payment Terms Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardPayment}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <div className="card-body">
                                    <div className="row text-start">
                                      <div className="row mb-3">
                                        <label
                                          for="colFormLabelSm"
                                          className="col-sm-1 col-form-label col-form-label-sm"
                                        >
                                          Code:
                                        </label>
                                        <div className="col-sm-3">
                                          <input
                                            type="email"
                                            className="form-control form-control-sm"
                                            id="colFormLabelSm"
                                          />
                                        </div>
                                        <label
                                          for="colFormLabelSm"
                                          className="col-sm-1 col-form-label col-form-label-sm"
                                        >
                                          Desc:
                                        </label>
                                        <div className="col-sm-3">
                                          <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                          ></textarea>
                                        </div>
                                        <label
                                          for="colFormLabelSm"
                                          className="col-sm-1 col-form-label col-form-label-sm"
                                        >
                                          Days:
                                        </label>
                                        <div className="col-sm-2">
                                          <input
                                            type="email"
                                            className="form-control form-control-sm"
                                            id="colFormLabelSm"
                                          />
                                        </div>
                                        <div className="col-sm-1">
                                          <button className="Paymentbtn">
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12">
                                        <table className="table table-responsive">
                                          <thead>
                                            <tr>
                                              <th>No Data Found !!!</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr></tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {isCardOpenCountry && (
                                <div className="card-Country">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Country Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardCountry}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <div className="card-body">
                                    <div className="row text-start">
                                      <div className="row mb-3">
                                        <label
                                          for="colFormLabelSm"
                                          className="col-sm-1 col-form-label col-form-label-sm"
                                        >
                                          Code:
                                        </label>
                                        <div className="col-sm-4">
                                          <input
                                            type="email"
                                            className="form-control form-control-sm"
                                            id="colFormLabelSm"
                                          />
                                        </div>
                                        <label
                                          for="colFormLabelSm"
                                          className="col-sm-1 col-form-label col-form-label-sm"
                                        >
                                          Country:
                                        </label>
                                        <div className="col-sm-4">
                                          <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                          ></textarea>
                                        </div>

                                        <div className="col-sm-2">
                                          <button className="Countrybtn">
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12">
                                        <table className="table table-responsive">
                                          <thead>
                                            <tr>
                                              <th>Sr. No</th>
                                              <th>Code</th>
                                              <th>Country</th>
                                              <th>Edit</th>
                                              <th>Delete</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>1</td>
                                              <td>CH</td>
                                              <td>China</td>
                                              <td>
                                                <FaEdit />{" "}
                                              </td>
                                              <td>
                                                <FaTrash />{" "}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>2</td>
                                              <td>CH</td>
                                              <td>China</td>
                                              <td>
                                                <FaEdit />{" "}
                                              </td>
                                              <td>
                                                <FaTrash />{" "}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>3</td>
                                              <td>CH</td>
                                              <td>China</td>
                                              <td>
                                                <FaEdit />{" "}
                                              </td>
                                              <td>
                                                <FaTrash />{" "}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>4</td>
                                              <td>CH</td>
                                              <td>China</td>
                                              <td>
                                                <FaEdit />{" "}
                                              </td>
                                              <td>
                                                <FaTrash />{" "}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>5</td>
                                              <td>CH</td>
                                              <td>China</td>
                                              <td>
                                                <FaEdit />{" "}
                                              </td>
                                              <td>
                                                <FaTrash />{" "}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>6</td>
                                              <td>CH</td>
                                              <td>China</td>
                                              <td>
                                                <FaEdit />{" "}
                                              </td>
                                              <td>
                                                <FaTrash />{" "}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>7</td>
                                              <td>CH</td>
                                              <td>China</td>
                                              <td>
                                                <FaEdit />{" "}
                                              </td>
                                              <td>
                                                <FaTrash />{" "}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>8</td>
                                              <td>CH</td>
                                              <td>China</td>
                                              <td>
                                                <FaEdit />{" "}
                                              </td>
                                              <td>
                                                <FaTrash />{" "}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {isCardOpenCurrency && (
                                <div className="card-Currency">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Currency Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardCurrency}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <div className="card-body">
                                    <div className="row text-start">
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            className="form-label"
                                          >
                                            Code:
                                          </label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            className="form-label"
                                          >
                                            Symbol:
                                          </label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            className="form-label"
                                          >
                                            Description:
                                          </label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <button className="Currencybtn">
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-12">
                                      <table className="table table-responsive">
                                        <thead>
                                          <tr>
                                            <th>Sr. No</th>
                                            <th>Code</th>
                                            <th>Country</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>1</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>2</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>3</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>4</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>5</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>6</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>7</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>8</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {isCardOpenCity && (
                                <div className="card-City">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      City Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardCity}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <div className="card-body">
                                    <div className="row text-start">
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            className="form-label"
                                          >
                                            Code:
                                          </label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            className="form-label"
                                          >
                                            Symbol:
                                          </label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label
                                            for="exampleFormControlInput1"
                                            className="form-label"
                                          >
                                            Description:
                                          </label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <button className="Currencybtn">
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-12">
                                      <table className="table table-responsive">
                                        <thead>
                                          <tr>
                                            <th>Sr. No</th>
                                            <th>Code</th>
                                            <th>Country</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>1</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>2</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>3</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>4</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>5</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>6</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>7</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>8</td>
                                            <td>CH</td>
                                            <td>China</td>
                                            <td>
                                              <FaEdit />{" "}
                                            </td>
                                            <td>
                                              <FaTrash />{" "}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {isCardOpenSector && (
                                <div className="card-Sector">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Sector Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardSector}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <div className="card-body">
                                    <div className="row text-start">
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Sector Profile:
                                        </label>
                                        <div className="col-sm-2">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Sector Name:
                                        </label>
                                        <div className="col-sm-4">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                        <div className="col-sm-2">
                                          <button className="Sectorbtn">
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-12">
                                      <table className="table table-responsive">
                                        <thead>
                                          <tr>
                                            <th>No Data Found !!!</th>
                                          </tr>
                                        </thead>
                                        <tbody></tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {isCardOpenGroup && (
                                <div className="card-City">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Group Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardGroup}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <div className="card-body">
                                    <div className="row text-start">
                                      <div className="row mb-3">
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Sector Profile:
                                        </label>
                                        <div className="col-sm-2">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                        <label
                                          for="inputEmail3"
                                          className="col-sm-2 col-form-label"
                                        >
                                          Sector Name:
                                        </label>
                                        <div className="col-sm-4">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                          />
                                        </div>
                                        <div className="col-sm-2">
                                          <button className="Groupbtn">
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-12">
                                      <table className="table table-responsive">
                                        <thead>
                                          <tr>
                                            <th>No Data Found !!!</th>
                                          </tr>
                                        </thead>
                                        <tbody></tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-profile"
                              role="tabpanel"
                              aria-labelledby="pills-profile-tab"
                              tabindex="0"
                            >
                              <div className="Buyer">
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-md-12 text-start">
                                      <h5 style={{ color: "blue" }}>
                                        Contact Person Information
                                      </h5>
                                    </div>
                                  </div>
                                  <div className="Buyertable">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="table-responsive">
                                          <table className="table table-bordered">
                                            <thead>
                                              <tr>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Person Name
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Contact No
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Email
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Department
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Designation
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Birth Date
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Action
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter name"
                                                  />
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter contact no"
                                                  />
                                                </td>
                                                <td>
                                                  <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                  />
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter department"
                                                  />
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter designation"
                                                  />
                                                </td>
                                                <td>
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                  />
                                                </td>
                                                <td>
                                                  <button className="buyerbtn">
                                                    <i className="fas fa-plus"></i>{" "}
                                                    Add
                                                  </button>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="Buyertable1">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="table-responsive">
                                          <table className="table table-bordered">
                                            <thead>
                                              <tr>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Name
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Contact
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Email
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Department
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Designation
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Birth Date
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Delete
                                                </th>
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
                                                <td>
                                                  <button className="buyerbtn2">
                                                    <i className="fas fa-trash-alt"></i>
                                                  </button>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row text-end">
                                    <div className="col-md-12">
                                      <button className="subGernalbtn1">
                                        SAVE
                                      </button>
                                      <button className="subGernalbtn1">
                                        CLEAR
                                      </button>
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
                              <div className="Bankdetail">
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-md-12 text-start">
                                      <h5 style={{ color: "blue" }}>
                                        Customer Bank Details
                                      </h5>
                                    </div>
                                  </div>
                                  <div className="Banktable">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="table-responsive">
                                          <table className="table table-bordered">
                                            <thead>
                                              <tr>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Account Holder Name :
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Bank Name:
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Branch Name:
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Bank A/c No:
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  IFCS Code:
                                                </th>

                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Action
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter name"
                                                  />
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter contact no"
                                                  />
                                                </td>
                                                <td>
                                                  <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                  />
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter department"
                                                  />
                                                </td>
                                                <td>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter designation"
                                                  />
                                                </td>

                                                <td>
                                                  <button className="bankbtn">
                                                    <i className="fas fa-plus"></i>{" "}
                                                    Add
                                                  </button>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="Banktable1">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="table-responsive">
                                          <table className="table table-bordered">
                                            <thead>
                                              <tr>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Account Holder Name
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Bank Name
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Branch Name
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Bank Ac No
                                                </th>
                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  IFCS Code
                                                </th>

                                                <th
                                                  className="blue-th"
                                                  scope="col"
                                                >
                                                  Delete
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>

                                                <td>
                                                  <button className="bankbtn2">
                                                    <i className="fas fa-trash-alt"></i>
                                                  </button>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row text-end">
                                    <div className="col-md-12">
                                      <button className="subGernalbtn1">
                                        SAVE
                                      </button>
                                      <button className="subGernalbtn1">
                                        CLEAR
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

export default SupplierCustomerMaster;
