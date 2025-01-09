import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FaHome, FaInfoCircle, FaServicestack } from "react-icons/fa";
import "./SideNav.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SideNav = ({ sideNavOpen, toggleSideNav }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const permissions = JSON.parse(localStorage.getItem("permissions"));

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
          {/* Show ERP Setting only if user has permission */}
          <li>
            <h6 className="logo-light">Produlink</h6>
          </li>

          {permissions && permissions.VendorsUserManagement && (
            <li>
              <Link to="/mainpage">
                <FaHome />
                Vendors
              </Link>
            </li>
          )}

          {permissions && permissions.ERPSetting && (
            <li className="dropdown-container">
              <div
                className="dropdown-toggle"
                onClick={() => handleDropdownToggle("erp")}
              >
                <FaInfoCircle />
                <span>ERP Setting</span>
              </div>
              <Dropdown.Menu show={openDropdown === "erp"}>
                {/* Add more items dynamically if user has permissions */}
                {permissions.ERPSetting.includes("User Configuration") && (
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
                )}

                {/* Add more items dynamically if user has permissions */}
                {permissions.ERPSetting.includes("ERP Configuration") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      ERP Configuration
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="#">
                        <strong>Company</strong>
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

                      <Dropdown.Item as={Link} to="#/Settingerp">
                        <strong>Setting</strong>
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
                      <Dropdown.Item as={Link} to="#/Emailsms">
                        <strong>Email / SMS</strong>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/Emailsetup">
                        Email Setup
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="#/Emailtemplate">
                        Email Template
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {permissions.ERPSetting.includes("Change Password") && (
                  <Dropdown.Item as={Link} to="/change-password">
                    Change Password
                  </Dropdown.Item>
                )}
                {permissions.ERPSetting.includes("Login History") && (
                  <Dropdown.Item as={Link} to="/login-history">
                    Login History
                  </Dropdown.Item>
                )}
                {permissions.ERPSetting.includes("Dealer Management") && (
                  <Dropdown.Item as={Link} to="/delete-management">
                    Dealer Management
                  </Dropdown.Item>
                )}
                {permissions.ERPSetting.includes("Dashboard Backup") && (
                  <Dropdown.Item as={Link} to="/dashboard-backup">
                    Dashboard Backup
                  </Dropdown.Item>
                )}
                {permissions.ERPSetting.includes("Delete Record") && (
                  <Dropdown.Item as={Link} to="/delete-record">
                    Delete Record
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </li>
          )}
          {/* Add other permissions-based menu items here */}

          {permissions?.All_Masters && (
            <li className="dropdown-container">
              <div
                className="dropdown-toggle"
                onClick={() => handleDropdownToggle("masters")}
              >
                <FaServicestack />
                <span>Masters</span>
              </div>
              <Dropdown.Menu show={openDropdown === "masters"}>
                {/* Conditionally render each item based on permissions */}
                {permissions.All_Masters.includes("Customer") && (
                  <Dropdown.Item as={Link} to="/vender-list">
                    Supplier Customer Master
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes(
                  "Business Partner Address"
                ) && (
                  <Dropdown.Item as={Link} to="/business-partner">
                    Business Partner Address
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Item Master") && (
                  <Dropdown.Item as={Link} to="/item-master">
                    Item Master
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Cross Reference") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      Cross Reference
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {permissions.All_Masters.includes(
                        "Customer / Supplier Item Link"
                      ) && (
                        <Dropdown.Item
                          as={Link}
                          to="/customer-supplier-item-link"
                        >
                          Customer / Supplier Item Link
                        </Dropdown.Item>
                      )}
                      {permissions.All_Masters.includes(
                        "Item Cross Reference"
                      ) && (
                        <Dropdown.Item as={Link} to="/item-cross-reference">
                          Item Cross Reference
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {permissions.All_Masters.includes("GST Rate Master") && (
                  <Dropdown.Item as={Link} to="/gst-rate-master">
                    GST Rate Master
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Commodity Master") && (
                  <Dropdown.Item as={Link} to="/commodity-master">
                    Commodity Master
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("BOM Routing Master") && (
                  <Dropdown.Item as={Link} to="/bom-routing">
                    BOM Routing Master
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Work Center Master") && (
                  <Dropdown.Item as={Link} to="/work-center-master">
                    Work Center Master
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Cycle Time Master") && (
                  <Dropdown.Item as={Link} to="/cycle-time-master">
                    Cycle Time Master
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes(
                  "Operator and Supervisor Master"
                ) && (
                  <Dropdown.Item as={Link} to="/operator-supervisor-master">
                    Operator and Supervisor Master
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Contractor Master") && (
                  <Dropdown.Item as={Link} to="/contractor-master">
                    Contractor Master
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Shift Master") && (
                  <Dropdown.Item as={Link} to="/shift-master">
                    Shift Master
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Work Center Schedule") && (
                  <Dropdown.Item as={Link} to="/work-center-schedule">
                    Work Center Schedule
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Unit Conversion") && (
                  <Dropdown.Item as={Link} to="/unit-conversion">
                    Unit Conversion
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Price List") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      Price List
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {permissions.All_Masters.includes(
                        "Price List Master"
                      ) && (
                        <Dropdown.Item as={Link} to="/price-list-master">
                          Price List Master
                        </Dropdown.Item>
                      )}
                      {permissions.All_Masters.includes("Price List Entry") && (
                        <Dropdown.Item as={Link} to="/price-entry-master">
                          Price List Entry
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {permissions.All_Masters.includes("Cost Center Master") && (
                  <Dropdown.Item as={Link} to="/cost-center-master">
                    Cost Center Master
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Project Management") && (
                  <Dropdown.Item as={Link} to="/project-management">
                    Project Management
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Document Management") && (
                  <Dropdown.Item as={Link} to="/document-management">
                    Document Management
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Master Report") && (
                  <Dropdown.Item as={Link} to="/master-report">
                    Master Report
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Customer State") && (
                  <Dropdown.Item as={Link} to="/customer-state">
                    Customer State
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Master Customers") && (
                  <Dropdown.Item as={Link} to="/master-customers">
                    Master Customers
                  </Dropdown.Item>
                )}
                {permissions.All_Masters.includes("Master State") && (
                  <Dropdown.Item as={Link} to="/master-state">
                    Master State
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </li>
          )}

          {permissions?.Purchase && (
            <li className="dropdown-container">
              <div
                className="dropdown-toggle"
                onClick={() => handleDropdownToggle("purchase")}
              >
                <FaServicestack />
                <span>Purchase</span>
              </div>
              <Dropdown.Menu show={openDropdown === "purchase"}>
                {permissions.Purchase.includes("New Indent") && (
                  <Dropdown.Item as={Link} to="/new-indent">
                    New Indent
                  </Dropdown.Item>
                )}
                {permissions.Purchase.includes("New Purchase Order") && (
                  <Dropdown.Item as={Link} to="/new-purchase-order">
                    New Purchase Order
                  </Dropdown.Item>
                )}
                {permissions.Purchase.includes(
                  "New Jobwork Purchase Order"
                ) && (
                  <Dropdown.Item as={Link} to="/new-jobwork-order">
                    New Jobwork Purchase Order
                  </Dropdown.Item>
                )}
                {permissions.Purchase.includes("Pending PO Release") && (
                  <Dropdown.Item as={Link} to="/pendingpo">
                    Pending PO Release
                  </Dropdown.Item>
                )}
                {permissions.Purchase.includes("Pending Indent Release") && (
                  <Dropdown.Item as={Link} to="/pendingindent">
                    Pending Indent Release
                  </Dropdown.Item>
                )}
                {permissions.Purchase.includes("Purchase MRN Release") && (
                  <Dropdown.Item as={Link} to="/Purchse-Mrn">
                    Purchase MRN Release
                  </Dropdown.Item>
                )}
                {permissions.Purchase.includes("Purchase Order Status") && (
                  <Dropdown.Item as={Link} to="/Purchse-order-status">
                    Purchase Order Status
                  </Dropdown.Item>
                )}
                <Dropdown.Divider />
                {permissions.Purchase.includes("Quote Comparison") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      Quote Comparison
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {permissions.Purchase.includes("RFO") && (
                        <Dropdown.Item as={Link} to="/Rfo">
                          RFO
                        </Dropdown.Item>
                      )}
                      {permissions.Purchase.includes(
                        "Quoto Comparison Statement"
                      ) && (
                        <Dropdown.Item
                          as={Link}
                          to="/Quoto-Comparison-Statement"
                        >
                          Quoto Comparison Statement
                        </Dropdown.Item>
                      )}
                      {permissions.Purchase.includes(
                        "Quoto Comparison Pending"
                      ) && (
                        <Dropdown.Item as={Link} to="/Quoto-Comparison-Pending">
                          Quoto Comparison Pending
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                <Dropdown.Divider />
                {permissions.Purchase.includes("Report") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      Report
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {permissions.Purchase.includes("Purchase Order List") && (
                        <Dropdown.Item as={Link} to="/purchase-order-list">
                          Purchase Order List
                        </Dropdown.Item>
                      )}
                      {permissions.Purchase.includes(
                        "Jobwork Purchase Order List"
                      ) && (
                        <Dropdown.Item
                          as={Link}
                          to="/jobwork-purchase-order-list"
                        >
                          Jobwork Purchase Order List
                        </Dropdown.Item>
                      )}
                      {permissions.Purchase.includes(
                        "Supplier Wise Item Purchase List"
                      ) && (
                        <Dropdown.Item as={Link} to="/supplier-wise-list">
                          Supplier Wise Item Purchase List
                        </Dropdown.Item>
                      )}
                      {permissions.Purchase.includes(
                        "Purchase Report (Cost Center Wise)"
                      ) && (
                        <Dropdown.Item as={Link} to="/purchase-report">
                          Purchase Report (Cost Center Wise)
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {permissions.Purchase.includes("Import") && (
                  <Dropdown.Item as={Link} to="#">
                    Import
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </li>
          )}

          {/* Store Dropdown */}
          {permissions?.Store && (
            <li className="dropdown-container">
              <div
                className="dropdown-toggle"
                onClick={() => handleDropdownToggle("store")}
              >
                <FaServicestack />
                <span>Store</span>
              </div>
              <Dropdown.Menu show={openDropdown === "store"}>
                {permissions.Store.includes("Gate Inward Entry") && (
                  <Dropdown.Item as={Link} to="/Gate-Inward-Entry">
                    Gate Inward Entry
                  </Dropdown.Item>
                )}
                {permissions.Store.includes("Pending ASN List") && (
                  <Dropdown.Item as={Link} to="/Pending-Asn-List">
                    Pending ASN List
                  </Dropdown.Item>
                )}
                {permissions.Store.includes("New MRN") && (
                  <Dropdown.Item as={Link} to="/New-Mrn">
                    New MRN
                  </Dropdown.Item>
                )}
                {permissions.Store.includes("Purchase GRN") && (
                  <Dropdown.Item as={Link} to="/Purchase-Grn">
                    Purchase GRN
                  </Dropdown.Item>
                )}
                {permissions.Store.includes("Subcon GRN") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      Subcon GRN
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {permissions.Store.includes("57F4 Inward Challan") && (
                        <Dropdown.Item as={Link} to="/Inward-challan">
                          57F4 Inward Challan
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("Jobwork Inward Challan") && (
                        <Dropdown.Item as={Link} to="/Jobwork-Inward-Challan">
                          Jobwork Inward Challan
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("Vendor Scrap Inward") && (
                        <Dropdown.Item as={Link} to="/Vendor-Scrap-Inward">
                          Vendor Scrap Inward
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {permissions.Store.includes("Material Issue Challan") && (
                  <Dropdown.Item as={Link} to="/Material-Issue-Challan">
                    Material Issue Challan
                  </Dropdown.Item>
                )}
                {permissions.Store.includes("Material Issue Gernal") && (
                  <Dropdown.Item as={Link} to="/Material-Issue-Gernal">
                    Material Issue Gernal
                  </Dropdown.Item>
                )}
                {permissions.Store.includes("Stock Transaction") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      Stock Transaction
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {permissions.Store.includes("Opening Stock") && (
                        <Dropdown.Item as={Link} to="/Opening-Stock">
                          Opening Stock
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("FG Movement") && (
                        <Dropdown.Item as={Link} to="/FG-Movement">
                          FG Movement
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("RM Stock Transaction") && (
                        <Dropdown.Item as={Link} to="/RM-Stock-Transaction">
                          RM Stock Transaction
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("Stock Transfer") && (
                        <Dropdown.Item as={Link} to="/Stock-Transaction">
                          Stock Transfer
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {permissions.Store.includes("Delivery Challan") && (
                  <Dropdown.Item as={Link} to="/Delivery-Challan">
                    Delivery Challan
                  </Dropdown.Item>
                )}
                {permissions.Store.includes("DC GRN") && (
                  <Dropdown.Item as={Link} to="/Dcgrn">
                    DC GRN
                  </Dropdown.Item>
                )}
                {permissions.Store.includes("New Indent") && (
                  <Dropdown.Item as={Link} to="/Store-New-indent">
                    New Indent
                  </Dropdown.Item>
                )}
                {permissions.Store.includes("Stock Report") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      Report
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {permissions.Store.includes("GRN List") && (
                        <Dropdown.Item as={Link} to="/Report-Store">
                          GRN List
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("MRN List") && (
                        <Dropdown.Item as={Link} to="#/">
                          MRN List
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes(
                        "Inward 57F4 Challan List"
                      ) && (
                        <Dropdown.Item as={Link} to="#/">
                          Inward 57F4 Challan List
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes(
                        "Material Issue Challan List"
                      ) && (
                        <Dropdown.Item as={Link} to="#/Stock-Report">
                          Material Issue Challan List
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes(
                        "Gernal Material Issue Challan List"
                      ) && (
                        <Dropdown.Item as={Link} to="#/Stock-Report">
                          Gernal Material Issue Challan List
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("Delivery Challan List") && (
                        <Dropdown.Item as={Link} to="#/Stock-Report">
                          Delivery Challan List
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("DC GRN List") && (
                        <Dropdown.Item as={Link} to="#/Stock-Report">
                          DC GRN List
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("Indent List") && (
                        <Dropdown.Item as={Link} to="#/Stock-Report">
                          Indent List
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("Indent Status") && (
                        <Dropdown.Item as={Link} to="#/Stock-Report">
                          Indent Status
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {permissions.Store.includes("Stock Report") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      Stock Report
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {permissions.Store.includes("WIP Stock Report") && (
                        <Dropdown.Item as={Link} to="/Stock-Report">
                          WIP Stock Report
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("RM Stock Report") && (
                        <Dropdown.Item as={Link} to="#/">
                          RM Stock Report
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes(
                        "Consumable Stock Report"
                      ) && (
                        <Dropdown.Item as={Link} to="#/">
                          Consumable Stock Report
                        </Dropdown.Item>
                      )}
                      {permissions.Store.includes("FG Stock Report") && (
                        <Dropdown.Item as={Link} to="#/Stock-Report">
                          FG Stock Report
                        </Dropdown.Item>
                      )}
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
                )}
              </Dropdown.Menu>
            </li>
          )}

          {/* Production Dropdown */}
          {permissions?.Production && (
            <li className="dropdown-container">
              <div
                className="dropdown-toggle"
                onClick={() => handleDropdownToggle("production")}
              >
                <FaServicestack />
                <span>Production</span>
              </div>
              <Dropdown.Menu show={openDropdown === "production"}>
                {permissions.Production.includes("Work Order Entry") && (
                  <Dropdown.Item as={Link} to="/WorkOrderEntry">
                    Work Order Entry
                  </Dropdown.Item>
                )}
                {permissions.Production.includes("Work Order List") && (
                  <Dropdown.Item as={Link} to="/WorkOrderList">
                    Work Order List
                  </Dropdown.Item>
                )}
                {permissions.Production.includes("Production Plan List") && (
                  <Dropdown.Item as={Link} to="/ProductionPlanList">
                    Production Plan List
                  </Dropdown.Item>
                )}
                {permissions.Production.includes("Production Entry") && (
                  <Dropdown.Item as={Link} to="/ProductionEntry">
                    Production Entry
                  </Dropdown.Item>
                )}
                {permissions.Production.includes("Production Entry Ass.") && (
                  <Dropdown.Item as={Link} to="/ProductionEntryAss">
                    Production Entry Ass.
                  </Dropdown.Item>
                )}
                {permissions.Production.includes("Production Report") && (
                  <Dropdown.Item as={Link} to="/ProductionReport">
                    Production Report
                  </Dropdown.Item>
                )}
                {permissions.Production.includes("Rework Production") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      <strong>Rework Production</strong>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {permissions.Production.includes(
                        "Rework Production Entry2"
                      ) && (
                        <Dropdown.Item as={Link} to="/ReworkProduction">
                          Rework Production Entry2
                        </Dropdown.Item>
                      )}
                      {permissions.Production.includes(
                        "Rework Production Entry"
                      ) && (
                        <Dropdown.Item as={Link} to="/ReworkProductionEntry">
                          Rework Production Entry
                        </Dropdown.Item>
                      )}
                      {permissions.Production.includes(
                        "Rework Production Report"
                      ) && (
                        <Dropdown.Item as={Link} to="/ReworkProductionReport">
                          Rework Production Report
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {permissions.Production.includes("Scrap Production") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      <strong>Scrap Production</strong>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {permissions.Production.includes(
                        "Scrap/Rejection Entry"
                      ) && (
                        <Dropdown.Item as={Link} to="/ScrapRejection">
                          Scrap/Rejection Entry
                        </Dropdown.Item>
                      )}
                      {permissions.Production.includes(
                        "Scrap/Rejection Report"
                      ) && (
                        <Dropdown.Item as={Link} to="/ScrapRejectionReport">
                          Scrap/Rejection Report
                        </Dropdown.Item>
                      )}
                      {permissions.Production.includes(
                        "FG Scrap/Rejection Entry"
                      ) && (
                        <Dropdown.Item as={Link} to="/ScrapRejectionEntry">
                          FG Scrap/Rejection Entry
                        </Dropdown.Item>
                      )}
                      {permissions.Production.includes(
                        "FG Scrap/Rejection Report"
                      ) && (
                        <Dropdown.Item as={Link} to="/ScrapRejectionEntry">
                          FG Scrap/Rejection Report
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {permissions.Production.includes("Material Idle Time") && (
                  <Dropdown.Item as={Link} to="/MachineIdleTime">
                    Material Idle Time
                  </Dropdown.Item>
                )}
                {permissions.Production.includes("Breakdown Time Entry") && (
                  <Dropdown.Item as={Link} to="/BreakdownTimeEntry">
                    Breakdown Time Entry
                  </Dropdown.Item>
                )}
                {permissions.Production.includes("Breakdown Time Report") && (
                  <Dropdown.Item as={Link} to="/BreakdownTimeReport">
                    Breakdown Time Report
                  </Dropdown.Item>
                )}
                {permissions.Production.includes("Contractor Payment") && (
                  <Dropdown.Item as={Link} to="/ContractorReport">
                    Contractor Payment
                  </Dropdown.Item>
                )}
                {permissions.Production.includes("Report") && (
                  <Dropdown>
                    <Dropdown.Toggle as="div" className="dropdown-item">
                      <strong>Report</strong>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {permissions.Production.includes("Rejection Report") && (
                        <Dropdown.Item as={Link} to="/ProReport">
                          Rejection Report
                        </Dropdown.Item>
                      )}
                      {permissions.Production.includes("Rework Report") && (
                        <Dropdown.Item as={Link} to="/ReworkReport">
                          Rework Report
                        </Dropdown.Item>
                      )}
                      <Dropdown.Item as={Link} to="/MachineDefaultIdle">
                        Default Idle Time Report
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/BreakdownAnalysis">
                        Breakdown Analysis Report
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/CycleTime1">
                        Cycle Time Report
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/OperatorReport">
                        Operator Performance Report
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </Dropdown.Menu>
            </li>
          )}

          {/* //////////////////////////////     Quality       /////////////////////////// */}
          {/* {permissions?.Quality && ( */}
          <li className="dropdown-container">
            <div className="dropdown-toggle" onClick={() => handleDropdownToggle("quality")} >
              <FaServicestack />
              <span>Quality .</span>
            </div>
            <Dropdown.Menu show={openDropdown === "quality"}>
              <Dropdown.Item as={Link} to="/QualityPlan">
                Quality Planning
              </Dropdown.Item>
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Purchase GRN QC
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/PandingQCList">
                    Panding QC List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/InwardTestCertificate">
                    Inward Test Certificate
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Subcon / JobWork GRN QC
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/PaddingQCInward">
                    Pandding QC Inward
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/InwardQCList">
                    Inward Inspection List
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                 Inprocess QC
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/InprocessInspection">
                    Inprocess Inspection
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/InprocessInspectionList">
                  Inprocess Inspection List
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                 Sales Return QC
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/PaddingSalesQC">
                  Sales Return QC Pandding List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/SalesQCList">
                   Sales Return QC List
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>


              <Dropdown.Item as={Link} to="#/">
                Gauges And Instruction Calbration
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/HeatCodeRegister">
                Heat Code Register
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/TestCertificateList">
                DTC - Dispatch Test Certificate
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/PDIList">
                PDI - Pre Dispatch Inspection
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/FirstPieceApporval">
                First Peice Apporval
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/NewSetupApproval">
                Set Up Apporval
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/HotInspectionList">
                Hot Inspection
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/SamplingPlan">
                Samping Plan
              </Dropdown.Item>

              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Customer Complaint
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/CustomerComplaintEntry">
                  Customer Complaint Entry
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/CustomerComplaintAuth">
                  Customer Complaint Authorization
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/CustomerComplaintList">
                  Customer Complaint List
                  </Dropdown.Item>  
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Test Master
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/TestReportList">
                   Test Report
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/TestMasterNew">
                   Test Master
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/TestMasterList">
                   Test Master List
                  </Dropdown.Item>  
                </Dropdown.Menu>
              </Dropdown>

            </Dropdown.Menu>

            
          </li>
          {/* )} */}


          {/* //////////////////////////////     Sales       /////////////////////////// */}
         
          {/* {permissions?.Sales && ( */}
          <li className="dropdown-container">
            <div className="dropdown-toggle" onClick={() => handleDropdownToggle("sales")} >
              <FaServicestack />
              <span>Sales</span>
            </div>
            <Dropdown.Menu show={openDropdown === "sales"}>
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  E-Invoicing
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/GSTsales1">
                    GST Sales
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/JobWorkSales">
                    JobWork Sales
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/DebitNote">
                    Debit Note
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/CreditNote">
                    Credit Note
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              <Dropdown.Item as={Link} to="/NewSalesOrder">
                Customer Sales Order
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/SalesOrderAmendList">
                Customer Sales Order Amendment
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/SacheduleSalesNew">
                Schedule Sales Order
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/SalesOrderStatus">
                Customer Sales Order Status
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/NewInvoice">
                GST Invoice
              </Dropdown.Item>

              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  GST JobWork
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/GSTJobworkInvoice">
                   GST JobWork Invoice
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/GSTJobworkDCreturn">
                  GST JobWork DC Return
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown.Item as={Link} to="/OutwardChallan">
                OutWard 57F4 Challan
              </Dropdown.Item>

              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Cradit / Dabit Note
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/PurchaseDabitNote">
                   Purchase Debit Note
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/NewDabitNote">
                  Sales Rate Diff Debit Note
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                  JobWork Rate Diff Debit Note
                  </Dropdown.Item>  
                  <Dropdown.Item as={Link} to="/">
                    Cradit Note Entry
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown.Item as={Link} to="#/">
                GST Sales Return
              </Dropdown.Item>
              
              
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Material GalePass
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/">
                  Material GalePass New
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                   Pandding Material GalePass
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                  Material GalePass List
                  </Dropdown.Item>  
                </Dropdown.Menu>
              </Dropdown>
              
              <Dropdown>
                <Dropdown.Toggle as="div" className="dropdown-item">
                  Report
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/">
                   Customer Sales Order List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                   Tax Invoice List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                  Tax Invoice List Bajaj
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                   JobWork Invoice List
                  </Dropdown.Item>  
                  <Dropdown.Item as={Link} to="/">
                   JobWork DC List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                   OutWard 57F4 Challan List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">
                   Debit Note List
                   </Dropdown.Item>
                   <Dropdown.Item as={Link} to="/">
                   Cradit Note List
                   </Dropdown.Item>
                   <Dropdown.Item as={Link} to="/">
                   GST Sales Return List
                   </Dropdown.Item>
                   <Dropdown.Item as={Link} to="/">
                   RG1 Register
                   </Dropdown.Item>
                   <Dropdown.Item as={Link} to="/">
                   Transport List
                   </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>

            </Dropdown.Menu>
            
          </li>
          {/* )} */}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
