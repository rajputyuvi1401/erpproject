import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light.png";
import { Dropdown } from "react-bootstrap";
import { FaHome, FaInfoCircle, FaServicestack } from "react-icons/fa";
import "./SideNav.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SideNav = ({ sideNavOpen, toggleSideNav }) => {
  const [dropdownsOpen, setDropdownsOpen] = useState({
    services: false,
    about: false,
    home: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownsOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const toggleDropdown1 = (dropdown) => {
    setDropdownsOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };
  const toggleDropdown2 = (dropdown) => {
    setDropdownsOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <div className="blueside-Nav">
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
          {/* <li>
            <Link to="/home">
              <FaHome />
              Admin Login
            </Link>
          </li> */}
          <li>
            <Link to="/mainpage">
              <FaHome />
              Vendors
            </Link>
          </li>

          <li className="dropdown-container">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown("about")}
            >
              <FaInfoCircle />
              <span style={{ marginRight: "100px" }}>ERP Setting</span>
            </div>
            <Dropdown.Menu show={dropdownsOpen.about}>
              <Dropdown.Item as={Link} to="#/user-configuration">
                User Configuration
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/erp-configuration">
                ERP Configuration
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/erp-configuration">
                Change Password
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/erp-configuration">
                Login Histroy
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/user-management">
                Delete Management
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/back-date-entry-setting">
                Dashboard Backup
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/erp-configuration">
                Delete Record
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
              onClick={() => toggleDropdown1("services")}
            >
              <FaServicestack />
              <span style={{ marginRight: "100px" }}>Masters</span>
              {/* {dropdownsOpen.services ? <FaChevronUp /> : <FaChevronDown />} */}
            </div>
            <Dropdown.Menu show={dropdownsOpen.services}>
              <Dropdown.Item as={Link} to="/vender-list">
                Supplier Customer Master
              </Dropdown.Item>

              <Dropdown.Item as={Link} to="/business-partner">
                Business Partner Address
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/item-master">
                Item Master
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Cross Reference
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/Customer-Supplier-Item-Link">
                    Customer / Supplier Item Link
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Item-Cross-Reference">
                    Item Cross Reference
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Customer-Item-Wise">
                    Customer Item Wise
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown.Item as={Link} to="/gst-rate-master">
                GST Rate Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/commodity-master">
                Commodity Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/bom-routing">
                BOM Routing Master
              </Dropdown.Item>

              <Dropdown.Item as={Link} to="/work-center-master">
                Work Center Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/cycle-time-master">
                Cycle Time Master
              </Dropdown.Item>

              <Dropdown.Item as={Link} to="/operator-supervisor-master">
                Operator and Supervisor Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/contractor-master">
                Contractor Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/shift-master">
                Shift Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/work-center-schedule">
                Work Center Schedule
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/unit-conversion">
                Unit Conversion
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#">
                Price List
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Price List
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/price-list-master">
                    Price List Master
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/price-entry-master">
                    Price List Entry
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item as={Link} to="/cost-center-master">
                Cost Center Master
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/project-management">
                Project Management
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/document-management">
                Document Management
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/master-report">
                Master Report
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/customerState">
                CustomerState
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/masterCustomer">
                MasterCustomers
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/masterState">
                MasterState
              </Dropdown.Item>
            </Dropdown.Menu>
          </li>
          <li className="dropdown-container">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown2("home")}
            >
              <FaServicestack />
              <span style={{ marginRight: "100px" }}>Purchase</span>
            </div>
            <Dropdown.Menu show={dropdownsOpen.home}>
              <Dropdown.Item as={Link} to="/new-indent">
                New Indent
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/new-purchase-order">
                New Purchase Order
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#">
                New Jobwork Purchase Order
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#">
                Pending Indent Release
              </Dropdown.Item>

              <Dropdown.Item as={Link} to="#">
                Purchase MRN Release
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#">
                Purchase Order Status
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Quote Comparison
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="#">
                    Customer / Supplier Item Link
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#">
                    Item Cross Reference
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#">
                    Customer Item Wise
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Report
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="#">
                    Customer / Supplier Item Link
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#">
                    Item Cross Reference
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#">
                    Customer Item Wise
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown.Item as={Link} to="/#">
                Import
              </Dropdown.Item>
            </Dropdown.Menu>
          </li>
          {/* <li>
            <Link to="">
              <FaEnvelope />
            
            </Link>
          </li>
          <li>
            <Link to="/purchase-master">
              <FaEnvelope />
             
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
