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
            <Dropdown.Item as={Link} to="/ErpSetting">
              User Management
            </Dropdown.Item>
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
             
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                User Configuration
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/ErpSetting">
                    User Management
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/User-Permit">
                    User Permission
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/DashboardPermission">
                    Dashboard Permission
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/BackDated">
                    Back Dated Entry Setting
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/User-Wise-Series">
                    User Wise Series
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/UserwiseProduction">
                    Userwiise Prod. Operation
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/USerwiseAuth">
                    Userwise Auth. Setting
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/User-plant">
                    User Plant
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Plantwiseseries">
                    Plant Wise Series
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/AlertSetting">
                    Alert Settting
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Userwisepermission">
                    User Wise Permission
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

          
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                ERP Configuration
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="#">
                    Company
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Companysetup">
                    Company / Plant Setup
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/WebconfigFile">
                    Web. config File
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/ErpFinancialYear">
                   Financial Year
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/FinancialMonth">
                    Financial Month Master
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/ScheduleMonth">
                    Schedule Month Master
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Weekoff">
                    Weekly Off / Holiday
                  </Dropdown.Item>

                 

                  <Dropdown.Item as={Link} to="/Settingerp">

                    Setting
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Docseriesgroup">
                    Doc. Series /Group
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/UserPermission">
                    Parameter Setting
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/DocprintFormat">
                    Doc. Print Format
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Docnoeditable">
                    Doc. No Editable
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Qcisoformat">
                    Qc ISO Format
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Roundofsetting">
                    Round Of Setting
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Customersupplier">
                    Customer / Supplier
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Itemmastersetup">
                    Item Master Setup
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Emailsms">
                    Email / SMS
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Emailsetup">
                    Email Setup
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Emailtemplate">
                    Email Template
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item as={Link} to="/change-password">
                Change Password
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/login-history">
                Login History
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/delete-management">
                Dealer Management
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/dashboard-backup">
                Dashboard Backup
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/delete-record">
                Delete Record
              </Dropdown.Item>
             
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
                    Quoto Comparison Pending
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
                  <Dropdown.Item as={Link} to="/Opening-Stock">
                    Opening Stock
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/FG-Movement">
                    FG Movement
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/RM-Stock-Transaction">
                    RM Stock Transaction
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Stock-Transaction">
                    Stock Transfer
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
                    GRN List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    MRN List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Inward 57F4 Challan List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Material Issue Challan List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Gernal Material Issue Challan List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Delivery Challan List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    DC GRN List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Indent List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Indent Status
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
                    WIP Stock Report
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    RM Stock Report
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Consumable Stock Report
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/Stock-Report">
                    FG Stock Report
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Customer Stock
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Scrap Stock
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Tray Bin Stock Report
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Itemwise Stock Report
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Monthly Consumption Report
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Divider />
            </Dropdown.Menu>
          </li>

          <li className="dropdown-container">
            <div
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle("production")}
            >
              <FaServicestack />
              <span>Production</span>
            </div>
            <Dropdown.Menu show={openDropdown === "production"}>
              <Dropdown.Item as={Link} to="/WorkOrderEntry">
                Work Order Entry
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/WorkOrderList">
                Work Order List
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/">
                Production Plan List
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/">
                Production Entry
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/">
                Production Entry Ass.
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/">
                Production Report
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Rework Production
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="#/">
                    57F4 Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Jobwork Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Vendor Scrap Inward
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Divider />

              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Scrap Production
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="#/">
                    57F4 Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Jobwork Inward Challan
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Vendor Scrap Inward
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Divider />

              <Dropdown.Item as={Link} to="#/">
                Material Idle Time
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/">
                Breakdown Time Entry
              </Dropdown.Item>

              <Dropdown.Item as={Link} to="#/">
                Breakdown Time Report
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/">
                Contractor Payment
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Report
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="#/Report-Store">
                    GRN List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    MRN List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Inward 57F4 Challan List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Material Issue Challan List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Gernal Material Issue Challan List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Delivery Challan List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    DC GRN List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Indent List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#/">
                    Indent Status
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
