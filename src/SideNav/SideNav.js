import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light.png";
import { Dropdown } from "react-bootstrap";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";
import "./SideNav.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SideNav = ({ sideNavOpen, toggleSideNav }) => {
  const [dropdownsOpen, setDropdownsOpen] = useState({
    services: false,
    about: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownsOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <div>
      <div className={`side-nav ${sideNavOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleSideNav}>
          &times;
        </button>
        <ul>
          <li>
            <Link to="/">
              <img className="logo-light" src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/home">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/mainpage">
              <FaHome /> Vendors Page
            </Link>
          </li>
          <li className="dropdown-container">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown("about")}
            >
              <FaInfoCircle />
              <span style={{ marginRight: "100px" }}>ERP Setting</span>
              {/* {dropdownsOpen.about ? <FaChevronUp /> : <FaChevronDown />} */}
            </div>
            <Dropdown.Menu show={dropdownsOpen.about}>
              <Dropdown.Item as={Link} to="#/user-configuration">
                User Configuration
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/user-management">
                User Management
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/back-date-entry-setting">
                Back Date Entry Setting
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/erp-configuration">
                ERP Configuration
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Dashboard Permission
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="#/dashboard-permission-1">
                    Select Module
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/dashboard-permission-2">
                    Master
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/dashboard-permission-3">
                    Purchase
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/dashboard-permission-4">
                    Store
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/dashboard-permission-5">
                    Quality
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/dashboard-permission-6">
                    Planning
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/dashboard-permission-7">
                    Production
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/dashboard-permission-8">
                    GST Sales
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/dashboard-permission-9">
                    Maintenance
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/dashboard-permission-10">
                    Accounts
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Menu>
          </li>
          <li className="dropdown-container">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown("services")}
            >
              <FaServicestack />
              <span style={{ marginRight: "100px" }}>All Masters</span>
              {/* {dropdownsOpen.services ? <FaChevronUp /> : <FaChevronDown />} */}
            </div>
            <Dropdown.Menu show={dropdownsOpen.services}>
              <Dropdown.Item as={Link} to="/item-master">
                Item Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/supplier-master">
                Supplier / Customer Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/business-partner">
                Business Partner
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/gst-rate-master">
                GST Rate Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/work-center-master">
                Work Center Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/cycle-time-master">
                Cycle Time Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/commodity-master">
                Commodity Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/bom-routing">
                BOM Routing
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/operator-supervisor-master">
                Operator and Supervisor Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/contractor-master">
                Contractor Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/shift-master">
                Shift Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/unit-conversion">
                Unit Conversion
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/price-list">
                Price List
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/work-center-master">
                Work Center Master
              </Dropdown.Item>
            </Dropdown.Menu>
          </li>
          <li>
            <Link to="/customerState">
              <FaEnvelope />
              CustomerState
            </Link>
          </li>
          <li>
            <Link to="/masterCustomer">
              <FaEnvelope />
              MasterCustomers
            </Link>
          </li>
          <li>
            <Link to="/masterState">
              <FaEnvelope />
              MasterState
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
