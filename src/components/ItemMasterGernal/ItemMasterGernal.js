import React, { useState, useEffect } from "react";
import "./ItemMasterGernal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import CachedIcon from "@mui/icons-material/Cached";
import { FaCalendarAlt } from "react-icons/fa";

import { FaPlus, FaTrash } from "react-icons/fa";
const ItemMasterGernal = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [showNewCardUnit, setShowNewCardUnit] = useState(false);
  const [showNewCardTdc, setShowNewCardTdc] = useState(false);
  const [showNewCardItemgroup, setShowNewCardItemgroup] = useState(false);
  const [showNewCardStoreLocation, setShowNewCardStoreLocation] =
    useState(false);
  const [showNewCardRoute, setShowNewCardRoute] = useState(false);
  const [showNewCardSector, setShowNewCardSector] = useState(false);
  const [showNewCardItemSector, setShowNewCardItemSector] = useState(false);
  const [showNewCardGrade, setShowNewCardGrade] = useState(false);
  const [showNewCardGradeMaster, setShowNewCardGradeMaster] = useState(false);
  const [showNewCardQtypack, setShowNewCardQtypack] = useState(false);
  const [data] = useState([]);
  const [itemGroups, setItemGroups] = useState([]);
  const [newGroup, setNewGroup] = useState({
    mainGroup: "",
    prefix: "",
    groupName: "",
  });
  const [activeTab, setActiveTab] = useState("general");

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

  const handleNewButtonClick = () => {
    setShowNewCardUnit(!showNewCardUnit);
  };

  const handleNewButtonTDC = () => {
    setShowNewCardTdc(!showNewCardTdc);
  };

  const handleNewButtonItemgroup = () => {
    setShowNewCardItemgroup(!showNewCardItemgroup);
  };

  const handleNewButtonStoreLocation = () => {
    setShowNewCardStoreLocation(!showNewCardStoreLocation);
  };

  const handleNewButtonRoute = () => {
    setShowNewCardRoute(!showNewCardRoute);
  };

  const handleNewButtonSector = () => {
    setShowNewCardSector(!showNewCardSector);
  };

  const handleNewButtonItemSector = () => {
    setShowNewCardItemSector(!showNewCardItemSector);
  };

  const handleNewButtonGrade = () => {
    setShowNewCardGrade(!showNewCardGrade);
  };

  const handleNewButtonGradeMaster = () => {
    setShowNewCardGradeMaster(!showNewCardGradeMaster);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGroup({ ...newGroup, [name]: value });
  };

  const handleSave = () => {
    setItemGroups([...itemGroups, { ...newGroup, id: itemGroups.length + 1 }]);
    setNewGroup({ mainGroup: "", prefix: "", groupName: "" });
  };

  const handleDelete = (id) => {
    setItemGroups(itemGroups.filter((group) => group.id !== id));
  };

  // data-2
  const [selectedItem, setSelectedItem] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleNewButtonQtypack = () => {
    setShowNewCardQtypack(!showNewCardQtypack);
  };
  return (
    <div className="Itemmastergernalpage">
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
                <div className="axcv">
                  <div className="top-but3">
                    <div className="row align-items-center">
                      <div className="col-md-2 text-start">
                        <p>Item List</p>
                      </div>
                      <div className="col-md-10 text-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <label htmlFor="input" className="me-2">
                            Search Item For Copy
                          </label>
                          <input type="text" id="input" className="me-2" />
                          <button className="btn-uper me-2">Copy Item</button>
                          <button className="btn-uper me-2">
                            Section Group Master
                          </button>
                          <button className="btn-uper">Item List</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="itemmastergernal">
                    <div className="container">
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
                                Technical Specification
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
                                NPD
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

                              <div className="gerneral">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className="row text-start">
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Main Group:
                                          </label>
                                          <div className="col-sm-5">
                                            <select
                                              id="inputState"
                                              className="form-select"
                                              onChange={handleDropdownChange}
                                            >
                                              <option
                                                selected
                                                style={{ color: "black" }}
                                              >
                                                Select ..
                                              </option>
                                              <option value="FG">FG</option>
                                              <option value="RM">RM</option>
                                              <option value="Tool">Tool</option>
                                              <option value="Instrument">
                                                Instrument
                                              </option>
                                              <option value="Machine">
                                                Machine
                                              </option>
                                              <option value="Consumable">
                                                Consumable
                                              </option>
                                              <option value="SafetyEqu">
                                                Safety Equ
                                              </option>
                                              <option value="Service">
                                                Service
                                              </option>
                                              <option value="Assest">
                                                Assest
                                              </option>
                                              <option value="F4">F4</option>
                                              <option value="Scrap">
                                                Scrap
                                              </option>
                                              <option value="SF">SF</option>
                                              <option value="BO">BO</option>
                                              <option value="DI">DI</option>
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
                                            className="col-sm-5 col-form-label"
                                          >
                                            SE Item/Part No:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Unit Code:
                                          </label>
                                          <div className="col-sm-5">
                                            <select
                                              id="inputState"
                                              className="form-select"
                                            >
                                              <option selected>
                                                Select ..
                                              </option>
                                              <option>PCS</option>
                                              <option>KGS</option>
                                              <option>Box</option>
                                              <option>LTR</option>
                                              <option>NOS</option>
                                              <option>SQFT</option>
                                              <option>MTR</option>
                                              <option>FOOT</option>
                                              <option>SQMTR</option>
                                              <option>PAIR</option>
                                              <option>BAG</option>
                                              <option>PACKET</option>
                                              <option>RIM</option>
                                              <option>SET</option>
                                              <option>MT</option>
                                              <option>PER DAY</option>
                                              <option>DOZEN</option>
                                              <option>JOB</option>
                                              <option>SQINCh</option>
                                            </select>
                                          </div>
                                          <div className="col-sm-2">
                                            <button
                                              className="btn"
                                              onClick={handleNewButtonClick}
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
                                            TDC:
                                          </label>
                                          <div className="col-sm-5">
                                            <select
                                              id="inputState"
                                              className="form-select"
                                            >
                                              <option selected>
                                                Select ..
                                              </option>
                                              <option>FA</option>
                                              <option>FA</option>
                                            </select>
                                          </div>
                                          <div className="col-sm-2">
                                            <button
                                              className="btn"
                                              onClick={handleNewButtonTDC}
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
                                            className="col-sm-5 col-form-label"
                                          >
                                            Item/Part Code:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
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
                                              Same As Part No
                                            </label>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Cut Weight kg:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Rate:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="row text-start">
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Item Group:
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

                                              <option>END PIECE</option>
                                              <option>MACHINNING</option>
                                              <option>BELTS</option>
                                              <option>BEARING</option>
                                              <option>COLLETS & HOLDERS</option>
                                              <option>CAMS</option>
                                              <option>CUTTING TOOL</option>
                                              <option>ELECTRICAL PARTS</option>
                                              <option>FORMING TOOLS</option>
                                              <option>
                                                GAUGES &INSTUMENTS
                                              </option>
                                              <option>GENRAL</option>
                                              <option>HOLDERS</option>
                                              <option>INSERTS</option>
                                              <option>MACHINE SPARE</option>
                                              <option>OIL & LUBRICANTS</option>
                                              <option>PACKING</option>
                                              <option>SERVICES</option>
                                              <option>STATIONARY</option>
                                              <option>TOOLING SPARE</option>
                                            </select>
                                          </div>
                                          <div className="col-sm-2">
                                            <button
                                              className="btn"
                                              onClick={handleNewButtonItemgroup}
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
                                            className="col-sm-5 col-form-label"
                                          >
                                            Name Description:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Store Location:
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

                                              <option>Store</option>
                                              <option>Maintenance</option>
                                            </select>
                                          </div>
                                          <div className="col-sm-2">
                                            <button
                                              className="btn"
                                              onClick={
                                                handleNewButtonStoreLocation
                                              }
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
                                            Route:
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

                                              <option>SF</option>
                                              <option>BO</option>
                                              <option>DI</option>
                                            </select>
                                          </div>
                                          <div className="col-sm-2">
                                            <button
                                              className="btn"
                                              onClick={handleNewButtonRoute}
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
                                            Parent FG Code:
                                          </label>
                                          <div className="col-sm-7">
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

                                              <option>SF</option>
                                              <option>BO</option>
                                              <option>DI</option>
                                            </select>
                                          </div>
                                          <div className="col-sm-1">
                                            <button className="btn">New</button>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Finish Weight (KG):
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
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

                                              <option>SF</option>
                                              <option>BO</option>
                                              <option>DI</option>
                                            </select>
                                          </div>
                                          <div class="col-sm-2">
                                            <button
                                              className="btn"
                                              onClick={handleNewButtonSector}
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
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="row text-start">
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Type/Grade:
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

                                              <option>SF</option>
                                              <option>BO</option>
                                              <option>DI</option>
                                            </select>
                                          </div>
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

                                              <option>SF</option>
                                              <option>BO</option>
                                              <option>DI</option>
                                            </select>
                                          </div>
                                          <div className="col-sm-2">
                                            <button
                                              className="btn"
                                              onClick={handleNewButtonGrade}
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
                                            Subgroup:
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

                                              <option>SF</option>
                                              <option>BO</option>
                                              <option>DI</option>
                                            </select>
                                          </div>
                                          <div className="col-sm-2">
                                            <button
                                              className="btn"
                                              onClick={
                                                handleNewButtonGradeMaster
                                              }
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
                                        <div className="row mb-5">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            HSN/SAC Code:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Gross Weight(kg):
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Tool/Die Life:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            No of Resharpening/Reconditionning:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {showNewCardUnit && (
                                <div className="new-card-overlay">
                                  <div className="new-card">
                                    <div className="card">
                                      <div className="card-body">
                                        <h5
                                          className="card-title text-start"
                                          style={{ color: "blue" }}
                                        >
                                          Item Unit Master
                                        </h5>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="unitName"
                                            className="col-sm-2 col-form-label"
                                          >
                                            Unit Name:
                                          </label>
                                          <div className="col-sm-8">
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="unitName"
                                            />
                                          </div>
                                          <div className="col-sm-2">
                                            <button className="card-btn">
                                              Save
                                            </button>
                                          </div>
                                        </div>
                                        <table className="table">
                                          <thead>
                                            <tr>
                                              <th scope="col">Sr No.</th>
                                              <th scope="col">Unit</th>
                                              <th scope="col">Edit</th>
                                              <th scope="col">Delete</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {/* Add table rows dynamically */}
                                            <tr>
                                              <td>1</td>
                                              <td>PCS</td>
                                              <td>
                                                <button className="card-btn1 btn-primary">
                                                  Edit
                                                </button>
                                              </td>
                                              <td>
                                                <button className="card-btn2 btn-danger">
                                                  Delete
                                                </button>
                                              </td>
                                            </tr>
                                            {/* Add more rows as needed */}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <button
                                      className="btn-cl"
                                      style={{
                                        margin: "5px",
                                        color: "gray",
                                        border: "none",
                                        padding: "10px",
                                      }}
                                      onClick={handleNewButtonClick}
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              )}
                              {showNewCardTdc && (
                                <div className="TdcCard">
                                  <div className="new-card-overlay">
                                    <div className="new-card">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5 className="card-title text-start">
                                            Item TDC Master
                                          </h5>
                                          <div
                                            className="row mb-3"
                                            style={{ marginTop: "40px" }}
                                          >
                                            <div className="col-sm-4 mb-3 text-start">
                                              <label
                                                htmlFor="prefix"
                                                className="form-label"
                                              >
                                                Prefix:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="prefix"
                                                placeholder="Enter prefix"
                                              />
                                            </div>
                                            <div className="col-sm-4 mb-3 text-start">
                                              <label
                                                htmlFor="name"
                                                className="form-label"
                                              >
                                                Name:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter name"
                                              />
                                            </div>
                                            <div className="col-sm-4 d-flex align-items-end">
                                              <button
                                                className="card-btn w-100"
                                                style={{ marginTop: "-50px" }}
                                              >
                                                Save
                                              </button>
                                            </div>
                                          </div>
                                          <table className="table">
                                            <thead>
                                              <tr>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {/* Check if there are rows to display */}
                                              {/* For example, using a variable `data` */}
                                              {data.length > 0 ? (
                                                data.map((item, index) => (
                                                  <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.unit}</td>
                                                    <td>
                                                      <button className="card-btn1 btn-primary">
                                                        Edit
                                                      </button>
                                                    </td>
                                                    <td>
                                                      <button className="card-btn2 btn-danger">
                                                        Delete
                                                      </button>
                                                    </td>
                                                  </tr>
                                                ))
                                              ) : (
                                                <tr>
                                                  <td
                                                    colSpan="4"
                                                    className="text-center"
                                                  >
                                                    No data found!
                                                  </td>
                                                </tr>
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      <button
                                        className="btn-cl justify-content-end"
                                        style={{
                                          margin: "5px",
                                          color: "gray",
                                          border: "none",
                                          padding: "10px",
                                        }}
                                        onClick={handleNewButtonTDC}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {showNewCardItemgroup && (
                                <div className="itemgroup">
                                  <div className="itemgroup-overlay">
                                    <div className="itemgroup-card ">
                                      <div>
                                        <p text-start>Item Group Master Name</p>
                                      </div>

                                      {/* Tabs */}
                                      <div>
                                        <button
                                          onClick={() =>
                                            setActiveTab("general")
                                          }
                                        >
                                          General
                                        </button>
                                        <button
                                          onClick={() =>
                                            setActiveTab("itemGroup")
                                          }
                                        >
                                          Item Group Linking Main Group
                                        </button>
                                      </div>

                                      {/* Form and Table */}
                                      <div>
                                        {activeTab === "general" && (
                                          <div>
                                            <div className="row">
                                              <div className="col-md-6 col-lg-4 mb-3">
                                                <label>Main Group Name: </label>
                                                <select
                                                  className="form-select"
                                                  name="mainGroup"
                                                  value={newGroup.mainGroup}
                                                  onChange={handleInputChange}
                                                >
                                                  <option value="">
                                                    Select Main Group
                                                  </option>
                                                  <option value="Group1">
                                                    Group 1
                                                  </option>
                                                  <option value="Group2">
                                                    Group 2
                                                  </option>
                                                </select>
                                              </div>
                                              <div className="col-md-3 col-lg-2 mb-3">
                                                <label>Prefix: </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  name="prefix"
                                                  value={newGroup.prefix}
                                                  onChange={handleInputChange}
                                                />
                                              </div>
                                              <div className="col-md-6 col-lg-4 mb-3">
                                                <label>Group Name: </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  name="groupName"
                                                  value={newGroup.groupName}
                                                  onChange={handleInputChange}
                                                />
                                              </div>
                                              <div
                                                className="col-md-3 col-lg-2 mb-3"
                                                style={{ marginTop: "30px" }}
                                              >
                                                <button
                                                  className="btn btn-primary"
                                                  onClick={handleSave}
                                                >
                                                  Save
                                                </button>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-md-12">
                                                <table className="table">
                                                  <thead>
                                                    <tr>
                                                      <th>Sc. No</th>
                                                      <th>Profile</th>
                                                      <th>Item Group Name</th>
                                                      <th>HC</th>
                                                      <th>Edit</th>
                                                      <th>Delete</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    {itemGroups.map(
                                                      (group, index) => (
                                                        <tr key={group.id}>
                                                          <td>{index + 1}</td>
                                                          <td>
                                                            Profile Placeholder
                                                          </td>
                                                          <td>
                                                            {group.groupName}
                                                          </td>
                                                          <td>
                                                            HC Placeholder
                                                          </td>
                                                          <td>
                                                            <button className="btn btn-secondary">
                                                              Edit
                                                            </button>
                                                          </td>
                                                          <td>
                                                            <button
                                                              className="btn btn-danger"
                                                              onClick={() =>
                                                                handleDelete(
                                                                  group.id
                                                                )
                                                              }
                                                            >
                                                              Delete
                                                            </button>
                                                          </td>
                                                        </tr>
                                                      )
                                                    )}
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                        {activeTab === "itemGroup" && (
                                          <p>item group</p>
                                        )}
                                      </div>

                                      {/* Close Button */}
                                      <button
                                        className="btn-cl justify-content-end"
                                        style={{
                                          margin: "5px",
                                          color: "gray",
                                          border: "none",
                                          padding: "10px",
                                        }}
                                        onClick={handleNewButtonItemgroup}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {showNewCardStoreLocation && (
                                <div className="Store-overlay">
                                  <div className="Store-card">
                                    <div className="card">
                                      <div className="card-body">
                                        <h5
                                          className="card-title text-start"
                                          style={{ color: "blue" }}
                                        >
                                          Store Location
                                        </h5>
                                        <div className="row mb-3">
                                          <label
                                            htmlFor="unitName"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Enter Store Name:
                                          </label>
                                          <div className="col-sm-6">
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="unitName"
                                            />
                                          </div>
                                          <div className="col-sm-2">
                                            <button className="card-btn">
                                              Save
                                            </button>
                                          </div>
                                        </div>
                                        <table className="table">
                                          <thead>
                                            <tr>
                                              <th scope="col">Sr No.</th>
                                              <th scope="col">Company Name</th>
                                              <th scope="col">Edit</th>
                                              <th scope="col">Delete</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {/* Add table rows dynamically */}
                                            <tr>
                                              <td>1</td>
                                              <td>Store</td>
                                              <td>
                                                <button className="card-btn1 btn-primary">
                                                  Edit
                                                </button>
                                              </td>
                                              <td>
                                                <button className="card-btn2 btn-danger">
                                                  Delete
                                                </button>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>2</td>
                                              <td>Maintenance</td>
                                              <td>
                                                <button className="card-btn1 btn-primary">
                                                  Edit
                                                </button>
                                              </td>
                                              <td>
                                                <button className="card-btn2 btn-danger">
                                                  Delete
                                                </button>
                                              </td>
                                            </tr>
                                            {/* Add more rows as needed */}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <button
                                      className="btn-cl"
                                      style={{
                                        margin: "5px",
                                        color: "gray",
                                        border: "none",
                                        padding: "10px",
                                      }}
                                      onClick={handleNewButtonStoreLocation}
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              )}

                              {showNewCardRoute && (
                                <div className="RouteCard">
                                  <div className="new-card-overlay">
                                    <div className="new-card">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5 className="card-title text-start">
                                            Item Route Master
                                          </h5>
                                          <div
                                            className="row mb-3"
                                            style={{ marginTop: "40px" }}
                                          >
                                            <div className="col-sm-4 mb-3 text-start">
                                              <label
                                                htmlFor="prefix"
                                                className="form-label"
                                              >
                                                Prefix:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="prefix"
                                                placeholder="Enter prefix"
                                              />
                                            </div>
                                            <div className="col-sm-4 mb-3 text-start">
                                              <label
                                                htmlFor="name"
                                                className="form-label"
                                              >
                                                Name:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter name"
                                              />
                                            </div>
                                            <div className="col-sm-4 d-flex align-items-end">
                                              <button
                                                className="card-btn w-100"
                                                style={{ marginTop: "-50px" }}
                                              >
                                                Save
                                              </button>
                                            </div>
                                          </div>
                                          <table className="table">
                                            <thead>
                                              <tr>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {/* Check if there are rows to display */}
                                              {/* For example, using a variable `data` */}
                                              {data.length > 0 ? (
                                                data.map((item, index) => (
                                                  <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.unit}</td>
                                                    <td>
                                                      <button className="card-btn1 btn-primary">
                                                        Edit
                                                      </button>
                                                    </td>
                                                    <td>
                                                      <button className="card-btn2 btn-danger">
                                                        Delete
                                                      </button>
                                                    </td>
                                                  </tr>
                                                ))
                                              ) : (
                                                <tr>
                                                  <td
                                                    colSpan="4"
                                                    className="text-center"
                                                  >
                                                    No data found!
                                                  </td>
                                                </tr>
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      <button
                                        className="btn-cl justify-content-end"
                                        style={{
                                          margin: "5px",
                                          color: "gray",
                                          border: "none",
                                          padding: "10px",
                                        }}
                                        onClick={handleNewButtonRoute}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {showNewCardSector && (
                                <div className="RouteCard">
                                  <div className="new-card-overlay">
                                    <div className="new-card">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5 className="card-title text-start">
                                            Item Route Master
                                          </h5>
                                          <div
                                            className="row mb-3"
                                            style={{ marginTop: "40px" }}
                                          >
                                            <div className="col-sm-4 mb-3 text-start">
                                              <label
                                                htmlFor="prefix"
                                                className="form-label"
                                              >
                                                Prefix:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="prefix"
                                                placeholder="Enter prefix"
                                              />
                                            </div>
                                            <div className="col-sm-4 mb-3 text-start">
                                              <label
                                                htmlFor="name"
                                                className="form-label"
                                              >
                                                Name:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter name"
                                              />
                                            </div>
                                            <div className="col-sm-4 d-flex align-items-end">
                                              <button
                                                className="card-btn w-100"
                                                style={{ marginTop: "-50px" }}
                                              >
                                                Save
                                              </button>
                                            </div>
                                          </div>
                                          <table className="table">
                                            <thead>
                                              <tr>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {/* Check if there are rows to display */}
                                              {/* For example, using a variable `data` */}
                                              {data.length > 0 ? (
                                                data.map((item, index) => (
                                                  <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.unit}</td>
                                                    <td>
                                                      <button className="card-btn1 btn-primary">
                                                        Edit
                                                      </button>
                                                    </td>
                                                    <td>
                                                      <button className="card-btn2 btn-danger">
                                                        Delete
                                                      </button>
                                                    </td>
                                                  </tr>
                                                ))
                                              ) : (
                                                <tr>
                                                  <td
                                                    colSpan="4"
                                                    className="text-center"
                                                  >
                                                    No data found!
                                                  </td>
                                                </tr>
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      <button
                                        className="btn-cl justify-content-end"
                                        style={{
                                          margin: "5px",
                                          color: "gray",
                                          border: "none",
                                          padding: "10px",
                                        }}
                                        onClick={handleNewButtonSector}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {showNewCardGrade && (
                                <div className="RouteCard">
                                  <div className="new-card-overlay">
                                    <div className="new-card">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5 className="card-title text-start">
                                            Item Grade Master
                                          </h5>
                                          <div
                                            className="row mb-3"
                                            style={{ marginTop: "40px" }}
                                          >
                                            <div className="col-sm-2 mb-3 text-start">
                                              <label
                                                htmlFor="prefix"
                                                className="form-label"
                                              >
                                                Sub Group:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="prefix"
                                                placeholder="Enter prefix"
                                              />
                                            </div>
                                            <div className="col-sm-2 mb-3 text-start">
                                              <label
                                                htmlFor="prefix"
                                                className="form-label"
                                              >
                                                Prefix:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="prefix"
                                                placeholder="Enter prefix"
                                              />
                                            </div>
                                            <div className="col-sm-2 mb-3 text-start">
                                              <label
                                                htmlFor="prefix"
                                                className="form-label"
                                              >
                                                Item Group Name:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="prefix"
                                                placeholder="Enter prefix"
                                              />
                                            </div>
                                            <div className="col-sm-2 mb-3 text-start">
                                              <label
                                                htmlFor="name"
                                                className="form-label"
                                              >
                                                color code:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter name"
                                              />
                                            </div>
                                            <div className="col-sm-4 d-flex align-items-end">
                                              <button
                                                className="card-btn w-100"
                                                style={{ marginTop: "-50px" }}
                                              >
                                                Select color
                                              </button>
                                              <button
                                                className="card-btn w-100"
                                                style={{ marginTop: "-50px" }}
                                              >
                                                Save
                                              </button>
                                            </div>
                                          </div>
                                          <table className="table">
                                            <thead>
                                              <tr>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {/* Check if there are rows to display */}
                                              {/* For example, using a variable `data` */}
                                              {data.length > 0 ? (
                                                data.map((item, index) => (
                                                  <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.unit}</td>
                                                    <td>
                                                      <button className="card-btn1 btn-primary">
                                                        Edit
                                                      </button>
                                                    </td>
                                                    <td>
                                                      <button className="card-btn2 btn-danger">
                                                        Delete
                                                      </button>
                                                    </td>
                                                  </tr>
                                                ))
                                              ) : (
                                                <tr>
                                                  <td
                                                    colSpan="4"
                                                    className="text-center"
                                                  >
                                                    No data found!
                                                  </td>
                                                </tr>
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      <button
                                        className="btn-cl justify-content-end"
                                        style={{
                                          margin: "5px",
                                          color: "gray",
                                          border: "none",
                                          padding: "10px",
                                        }}
                                        onClick={handleNewButtonGrade}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {showNewCardGradeMaster && (
                                <div className="RouteCard">
                                  <div className="new-card-overlay">
                                    <div className="new-card">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5 className="card-title text-start">
                                            Item Group Master 2
                                          </h5>
                                          <div
                                            className="row mb-3"
                                            style={{ marginTop: "40px" }}
                                          >
                                            <div className="col-sm-2 mb-3 text-start">
                                              <label
                                                htmlFor="prefix"
                                                className="form-label"
                                              >
                                                Main Group:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="prefix"
                                                placeholder="Enter prefix"
                                              />
                                            </div>
                                            <div className="col-sm-2 mb-3 text-start">
                                              <label
                                                htmlFor="prefix"
                                                className="form-label"
                                              >
                                                Sub Group:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="prefix"
                                                placeholder="Enter prefix"
                                              />
                                            </div>
                                            <div className="col-sm-2 mb-3 text-start">
                                              <label
                                                htmlFor="prefix"
                                                className="form-label"
                                              >
                                                Prefix:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="prefix"
                                                placeholder="Enter prefix"
                                              />
                                            </div>
                                            <div className="col-sm-4 mb-3 text-start">
                                              <label
                                                htmlFor="name"
                                                className="form-label"
                                              >
                                                Name:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter name"
                                              />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-end">
                                              <button
                                                className="card-btn w-100"
                                                style={{ marginTop: "-50px" }}
                                              >
                                                Save
                                              </button>
                                            </div>
                                          </div>
                                          <table className="table">
                                            <thead>
                                              <tr>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {/* Check if there are rows to display */}
                                              {/* For example, using a variable `data` */}
                                              {data.length > 0 ? (
                                                data.map((item, index) => (
                                                  <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.unit}</td>
                                                    <td>
                                                      <button className="card-btn1 btn-primary">
                                                        Edit
                                                      </button>
                                                    </td>
                                                    <td>
                                                      <button className="card-btn2 btn-danger">
                                                        Delete
                                                      </button>
                                                    </td>
                                                  </tr>
                                                ))
                                              ) : (
                                                <tr>
                                                  <td
                                                    colSpan="4"
                                                    className="text-center"
                                                  >
                                                    No data found!
                                                  </td>
                                                </tr>
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      <button
                                        className="btn-cl justify-content-end"
                                        style={{
                                          margin: "5px",
                                          color: "gray",
                                          border: "none",
                                          padding: "10px",
                                        }}
                                        onClick={handleNewButtonGradeMaster}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <p
                                className="mandatory  text-start"
                                style={{ marginTop: "30px", color: "grey" }}
                              >
                                Optional Fields
                              </p>
                              <div className="gerneral1">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className="row text-start">
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Revision No:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Item Size:
                                          </label>

                                          <div className="col-sm-4">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                          <div className="col-sm-3">
                                            <select
                                              id="inputState"
                                              className="form-select"
                                            >
                                              <option selected>
                                                Select ..
                                              </option>
                                              <option>BLOCK</option>
                                              <option>D/A</option>
                                              <option>@</option>
                                              <option>PLATE</option>
                                              <option>RCS</option>
                                              <option>RD</option>
                                              <option>SQ</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Heat Treatment:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Color Code:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Min Rate:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            VA Rate 1:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Length (MM):
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Shape:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Rate Remark:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Mental Type:
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

                                              <option>END PIECE</option>
                                              <option>MACHINNING</option>
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
                                            className="col-sm-5 col-form-label"
                                          >
                                            Specific Gravity:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="row text-start">
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            SAC Code:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Item Sector:
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

                                              <option>SF</option>
                                              <option>BO</option>
                                              <option>DI</option>
                                            </select>
                                          </div>
                                          <div className="col-sm-2">
                                            <button
                                              className="btn"
                                              onClick={
                                                handleNewButtonItemSector
                                              }
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
                                            className="col-sm-5 col-form-label"
                                          >
                                            Hardness (BHN):
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Male:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Max Rate:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            VA Rate 2:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Thickness:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Diameter:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Other Desc:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Metal:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Finish:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="row text-start">
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-4 col-form-label"
                                          >
                                            Item ClassName:
                                          </label>
                                          <div className="col-sm-8">
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

                                              <option>A</option>
                                              <option>B</option>
                                              <option>C</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-4 col-form-label"
                                          >
                                            QC Application:
                                          </label>
                                          <div className="col-sm-8">
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

                                              <option>Yes</option>
                                              <option>NO</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Jominy (for Rm):
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Microstructure:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Drawing No:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
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
                                              Sent(FG)Part Code
                                            </label>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Width:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Old ERP Code:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            Note:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            for="inputEmail3"
                                            className="col-sm-5 col-form-label"
                                          >
                                            KgMM3:
                                          </label>
                                          <div className="col-sm-7">
                                            <input
                                              type="input"
                                              className="
                                        form-control"
                                              style={{ width: "115%" }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {showNewCardItemSector && (
                                <div className="RouteCard">
                                  <div className="new-card-overlay">
                                    <div className="new-card">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5 className="card-title text-start">
                                            Item Route Master
                                          </h5>
                                          <div
                                            className="row mb-3"
                                            style={{ marginTop: "40px" }}
                                          >
                                            <div className="col-sm-4 mb-3 text-start">
                                              <label
                                                htmlFor="prefix"
                                                className="form-label"
                                              >
                                                Prefix:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="prefix"
                                                placeholder="Enter prefix"
                                              />
                                            </div>
                                            <div className="col-sm-4 mb-3 text-start">
                                              <label
                                                htmlFor="name"
                                                className="form-label"
                                              >
                                                Name:
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter name"
                                              />
                                            </div>
                                            <div className="col-sm-4 d-flex align-items-end">
                                              <button
                                                className="card-btn w-100"
                                                style={{ marginTop: "-50px" }}
                                              >
                                                Save
                                              </button>
                                            </div>
                                          </div>
                                          <table className="table">
                                            <thead>
                                              <tr>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {/* Check if there are rows to display */}
                                              {/* For example, using a variable `data` */}
                                              {data.length > 0 ? (
                                                data.map((item, index) => (
                                                  <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.unit}</td>
                                                    <td>
                                                      <button className="card-btn1 btn-primary">
                                                        Edit
                                                      </button>
                                                    </td>
                                                    <td>
                                                      <button className="card-btn2 btn-danger">
                                                        Delete
                                                      </button>
                                                    </td>
                                                  </tr>
                                                ))
                                              ) : (
                                                <tr>
                                                  <td
                                                    colSpan="4"
                                                    className="text-center"
                                                  >
                                                    No data found!
                                                  </td>
                                                </tr>
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      <button
                                        className="btn-cl justify-content-end"
                                        style={{
                                          margin: "5px",
                                          color: "gray",
                                          border: "none",
                                          padding: "10px",
                                        }}
                                        onClick={handleNewButtonItemSector}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
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
                        {selectedItem === "FG" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "RM" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "Tool" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "Instrument" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "Machine" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "Consumable" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "SafetyEqu" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "Service" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "Assest" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "F4" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "Scrap" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "SF" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "BO" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedItem === "DI" && (
                          <div className="data-2">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max GRN Qty Limit:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">AY CGR 1|</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 1</option>

                                          <option value="1">AY CGR 2</option>
                                          <option value="2">Centerless</option>
                                          <option value="3">Grinding 2</option>

                                          <option value="1">
                                            AY-D7 | Drilling 7
                                          </option>
                                          <option value="1">
                                            AY-D8 | Drilling 8
                                          </option>
                                          <option value="1">
                                            AY-M3 | Drilling 3
                                          </option>

                                          <option value="1">
                                            AY-SO1 | Second
                                          </option>
                                          <option value="1">
                                            Operation AY 1
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Shelf Life:
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-1">
                                        {" "}
                                        <span style={{ padding: "2px" }}>
                                          Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Wip Wt:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Min Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Inventry / Non Inventry Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        CPC Code:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Auxiliary Factor:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Mechanical Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Tool Layout No:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Is Service:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Sales Conversion Factor:
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>
                                            Open this select menu
                                          </option>
                                          <option value="1">PCS</option>
                                          <option value="2">KGS</option>
                                          <option value="3">BOX</option>
                                          <option value="3">LTR</option>
                                          <option value="1">NOS</option>
                                          <option value="2">SQFT</option>
                                          <option value="3">MTR</option>
                                          <option value="3">FOOT</option>
                                          <option value="1">SQMTR</option>
                                          <option value="2">PAIR</option>
                                          <option value="3">BAG</option>
                                          <option value="3">PACKET</option>
                                          <option value="1">RIM</option>
                                          <option value="2">SET</option>
                                          <option value="3">MT</option>
                                          <option value="3">PER DAY</option>
                                          <option value="1">DOZEN</option>
                                          <option value="2">JOB</option>
                                          <option value="3">SQINCH</option>
                                          <option value="3">LTR</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <div className="col-sm-5 form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                        <label
                                          className="col-form-label"
                                          for="flexCheckDefault"
                                        >
                                          GRN Conversion Factor:
                                        </label>
                                      </div>

                                      <div className="col-sm-4">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                      <div className="col-sm-3">
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
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Packing Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Production Lead Time(in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buyer:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Qty Packing:
                                      </label>
                                      <div className="col-sm-2">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
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
                                          <option>FG</option>
                                          <option>RM</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-2">
                                        <button
                                          className="btn"
                                          onClick={handleNewButtonQtypack}
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
                                        className="col-sm-5 col-form-label"
                                      >
                                        Item Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">All</option>
                                          <option value="2">Jobwork</option>
                                          <option value="3">Purchase</option>
                                          <option value="3">Production</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Machine Weight:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Buffer Qty %:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        MOQ:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Max Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        BOM Type:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Product Category:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Over Head Rate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Valuation Method:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Dimensional Std Reference:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Raw Material Grade:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        RM Tolerance:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        FG Std Cavity:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Design Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Transport Cost:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase Lead Time (in Days):
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Head:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row text-start">
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Project Name:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Department:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          selected
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>Commen Spare</option>
                                          <option value="1">AYUSH</option>
                                          <option value="2">Production</option>
                                          <option value="3">Purchase</option>
                                          <option value="1">QUALITY</option>
                                          <option value="2">SHAKAMBARI</option>
                                          <option value="3">Store</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Eoonomical Batch Size:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Re-Order Level:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Pre Shift Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Item:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Scrap Qty:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Purchase GL:
                                      </label>
                                      <div className="col-sm-7">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option selected>select ..</option>
                                          <option value="1">No</option>
                                          <option value="2">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        for="inputEmail3"
                                        className="col-sm-5 col-form-label"
                                      >
                                        Business Associate:
                                      </label>
                                      <div className="col-sm-7">
                                        <input
                                          type="input"
                                          className="
                                        form-control"
                                          style={{ width: "115%" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {showNewCardQtypack && (
                        <div className="Qtypack">
                          <div className="new-card-overlay">
                            <div className="new-card">
                              <div className="card">
                                <div className="card-body">
                                  <h5 className="card-title text-start">
                                    Item Packing Unit Master
                                  </h5>
                                  <div
                                    className="row mb-3"
                                    style={{ marginTop: "40px" }}
                                  >
                                    <div className="col-sm-8 mb-3 text-start">
                                      <label
                                        htmlFor="prefix"
                                        className="form-label"
                                      >
                                        Enter Unit Name:
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="prefix"
                                        placeholder="Enter prefix"
                                      />
                                    </div>

                                    <div className="col-sm-4 d-flex align-items-end">
                                      <button
                                        className="card-btn w-100"
                                        style={{ marginTop: "-50px" }}
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {/* Check if there are rows to display */}
                                      {/* For example, using a variable `data` */}
                                      {data.length > 0 ? (
                                        data.map((item, index) => (
                                          <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.unit}</td>
                                            <td>
                                              <button className="card-btn1 btn-primary">
                                                Edit
                                              </button>
                                            </td>
                                            <td>
                                              <button className="card-btn2 btn-danger">
                                                Delete
                                              </button>
                                            </td>
                                          </tr>
                                        ))
                                      ) : (
                                        <tr>
                                          <td
                                            colSpan="4"
                                            className="text-center"
                                          >
                                            No data found!
                                          </td>
                                        </tr>
                                      )}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <button
                                className="btn-cl justify-content-end"
                                style={{
                                  margin: "5px",
                                  color: "gray",
                                  border: "none",
                                  padding: "10px",
                                }}
                                onClick={handleNewButtonQtypack}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabindex="0"
                      >
                        <div className="technical">
                          <div className="container">
                            <div className="row mb-3">
                              <div className="col-md-2">
                                <p style={{ color: "blue" }}>
                                  Technical Specification
                                </p>
                              </div>
                              <div className="col-md-2">
                                <button className="tech-btn btn btn-secondary">
                                  Clear Tech. Specifications
                                </button>
                              </div>
                              <div className="col-md-8">
                                <button className="tech-btn btn btn-secondary">
                                  Get Last Tech. Specification
                                </button>
                              </div>
                            </div>

                            <div className="row" style={{ marginTop: "10px" }}>
                              <div className="col-md-6 mb-4">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th scope="col">Specification</th>
                                      <th scope="col">Parameter</th>
                                      <th scope="col">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter specification"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter parameter"
                                        />
                                      </td>
                                      <td>
                                        <button className="btn-tech">
                                          <FaPlus />
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="col-md-6 mb-4">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th scope="col">A</th>
                                      <th scope="col">B</th>
                                      <th scope="col">C</th>
                                      <th scope="col">D</th>
                                      <th scope="col">E</th>
                                      <th scope="col">F</th>
                                      <th scope="col">G</th>
                                      <th scope="col">H</th>
                                      <th scope="col">Capacity</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="A"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="B"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="C"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="D"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="E"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="F"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="G"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="H"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Capacity"
                                          style={{ padding: "5px" }}
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="row" style={{ marginTop: "80px" }}>
                              <div className="col-md-8">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th scope="col">Specification</th>
                                      <th scope="col">Parameter</th>
                                      <th scope="col">Action</th>
                                      <th scope="col">Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <textarea
                                          className="form-control"
                                          placeholder="Enter specification"
                                        />
                                      </td>
                                      <td>
                                        <textarea
                                          className="form-control"
                                          placeholder="Enter parameter"
                                        />
                                      </td>
                                      <td>
                                        <button className="btn-para">
                                          <FaPlus />
                                        </button>
                                      </td>
                                      <td>
                                        <button className="btn-para">
                                          <FaTrash />
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
                      <div
                        className="tab-pane fade"
                        id="pills-about"
                        role="tabpanel"
                        aria-labelledby="pills-about-tab"
                        tabindex="0"
                      >
                        <div className="Npd">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-5">
                                <div className="row mb-3">
                                  <label
                                    htmlFor="npdSelect"
                                    className="col-sm-5 col-form-label"
                                  >
                                    NPD:
                                  </label>
                                  <div className="col-sm-7">
                                    <select
                                      className="form-select"
                                      id="npdSelect"
                                      aria-label="Default select example"
                                    >
                                      <option selected>select..</option>
                                      <option value="1">No</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <label
                                    htmlFor="customerName"
                                    className="col-sm-5 col-form-label"
                                  >
                                    Customer Name:
                                  </label>
                                  <div className="col-sm-7">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="customerName"
                                      placeholder="Enter Name"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <label
                                    htmlFor="npdQty"
                                    className="col-sm-5 col-form-label"
                                  >
                                    NPD Qty:
                                  </label>
                                  <div className="col-sm-7">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="npdQty"
                                    />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <label
                                    htmlFor="npdDueDate"
                                    className="col-sm-5 col-form-label"
                                  >
                                    NPD Due Date:
                                  </label>
                                  <div className="col-sm-7">
                                    <div className="input-group">
                                      <input
                                        type="date"
                                        className="form-control"
                                        id="npdDueDate"
                                      />
                                      <span className="input-group-text">
                                        <FaCalendarAlt />
                                      </span>
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
                <div className="row" style={{ color: "blue" }}>
                  <div className="col-md-1 text-start">
                    <label class="form-check-label" for="flexCheckDefault">
                      Active:
                    </label>
                  </div>
                  <div className="col-md-1 text-start">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Save
                      </label>
                    </div>
                  </div>

                  <div className="col-md-1 text-start">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Purchase
                      </label>
                    </div>
                  </div>
                  <div className="col-md-7 text-start"></div>
                  <div className="col-md-1 text-end">
                    <button className="bjkd">Save</button>
                  </div>
                  <div className="col-md-1 text-end">
                    <button className="bjkd">Clear</button>
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

export default ItemMasterGernal;
