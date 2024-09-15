import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo-light.png";
import { Dropdown } from "react-bootstrap";
import { FaHome, FaInfoCircle, FaServicestack } from "react-icons/fa";
import "./SideNav.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SideNav = ({ sideNavOpen, toggleSideNav }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className={`blueside-Nav ${sideNavOpen ? "open" : ""}`}>
      <div className={`side-nav ${sideNavOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleSideNav}>
          &times;
        </button>
        <ul>
          <li>
          <h6 className="logo-light">Produlink</h6>
           
          </li>
          <li>
            <Link to="/mainpage">
              <FaHome />
              Vendors
            </Link>
          </li>

          <li className="dropdown-container">
            <div
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle("erp")}
            >
              <FaInfoCircle />
              <span>ERP Setting</span>
            </div>
            <Dropdown.Menu show={openDropdown === "erp"}>
              <Dropdown.Item as={Link} to="#/user-configuration">
                User Configuration
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/erp-configuration">
                ERP Configuration
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/change-password">
                Change Password
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/login-history">
                Login History
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/delete-management">
                Delete Management
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/dashboard-backup">
                Dashboard Backup
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/delete-record">
                Delete Record
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Dashboard Permission
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="#/select-module">
                    Select Module
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/master">
                    Master
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/purchase">
                    Purchase
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/store">
                    Store
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/quality">
                    Quality
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/planning">
                    Planning
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/production">
                    Production
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/gst-sales">
                    GST Sales
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/maintenance">
                    Maintenance
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/accounts">
                    Accounts
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Menu>
          </li>

          <li className="dropdown-container">
            <div
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle("masters")}
            >
              <FaServicestack />
              <span>Masters</span>
            </div>
            <Dropdown.Menu show={openDropdown === "masters"}>
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
                  <Dropdown.Item as={Link} to="/customer-supplier-item-link">
                    Customer / Supplier Item Link
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/item-cross-reference">
                    Item Cross Reference
                  </Dropdown.Item>
                  {/* <Dropdown.Item as={Link} to="/customer-item-wise">
                    Customer Item Wise
                  </Dropdown.Item> */}
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
              <Dropdown.Item as={Link} to="/customer-state">
                Customer State
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/master-customers">
                Master Customers
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/master-state">
                Master State
              </Dropdown.Item>
            </Dropdown.Menu>
          </li>

          <li className="dropdown-container">
            <div
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle("purchase")}
            >
              <FaServicestack />
              <span>Purchase</span>
            </div>
            <Dropdown.Menu show={openDropdown === "purchase"}>
              <Dropdown.Item as={Link} to="/new-indent">
                New Indent
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/new-purchase-order">
                New Purchase Order
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/new-jobwork-order">
                New Jobwork Purchase Order
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/pendingpo">
                Pending PO Release
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/pendingindent">
                Pending Indent Release
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/Purchse-Mrn">
                Purchase MRN Release
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/Purchse-order-status">
                Purchase Order Status
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Quote Comparison
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/Rfo">
                    RFO
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Quoto-Comparison-Statement">
                    Quoto Comparison Statement
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Quoto-Comparison-Pending">
                    Quoto Comparison Statement Pending
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Report
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/purchase-order-list">
                    Purchase Order List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/jobwork-purchase-order-list">
                    Jobwork Purchase Order List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/supplier-wise-list">
                    Supplier Wise Item Purchase List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/purchase-report">
                    Purchase Report (Cost Center Wise)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item as={Link} to="#">
                Import
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/#">
                .
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/#">
                .
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/#">
                .
              </Dropdown.Item>
            </Dropdown.Menu>
          </li>

          <li className="dropdown-container">
            <div
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle("store")}
            >
              <FaServicestack />
              <span>Store</span>
            </div>
            <Dropdown.Menu show={openDropdown === "store"}>
              <Dropdown.Item as={Link} to="/Gate-Inward-Entry">
                Gate Inward Entry
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/Pending-Asn-List">
                Pending ASN List
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/New-Mrn">
                New MRN
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/Purchase-Grn">
                Purchase GRN
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Subcon GRN
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/Inward-challan">
                    57F4 Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Jobwork-Inward-Challan">
                    Jobwork Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Vendor-Scrap-Inward">
                    Vendor Scrap Inward
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/Material-Issue-Challan">
                Material Issue Challan
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/Material-Issue-Gernal">
                Material Issue Gernal
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Stock Transaction
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/Stock-Transaction">
                    57F4 Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Jobwork Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Vendor Scrap Inward
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/Delivery-Challan">
                Delivery Challan
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/Dcgrn">
                DC GRN
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/Store-New-indent">
                New Indent
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Report
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/Report-Store">
                    Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Jobwork Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Vendor Scrap Inward
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Divider />
              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Stock Report
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/Stock-Report">
                    57F4 Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Jobwork Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                    Vendor Scrap Inward
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Divider />
            </Dropdown.Menu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
