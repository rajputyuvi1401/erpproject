import "./NewPurchaseOrder.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import ItemDetails from "./ItemDetails/ItemDetails.jsx";
import GSTDetails from "./GSTDetails/GSTDetails.jsx";
import ItemOther from "./ItemOther/ItemOther.jsx";
import Schedule from "./Schedule/Schedule.jsx";
import Ship from "./Ship/Ship.jsx";
import Poinfo from "./POInfo/Poinfo.jsx";
import { fetchSupplierData , fetchNextCode } from "../../Service/PurchaseApi.jsx";
const NewPurchaseOrder = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(""); // To store selected series
  const [indentNo, setIndentNo] = useState(""); // To store the generated indent number
  const [supplierName, setSupplierName] = useState(""); // State for supplier name input
  const [supplierCode, setSupplierCode] = useState(""); // State for supplier code input
  const [loading, setLoading] = useState(false); // State for loading indicator

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  // Fetching the Shortyear from localStorage with a fallback
  const handleSeriesChange = async (e) => {
    const seriesValue = e.target.value;
    setSelectedSeries(seriesValue);
  
    if (seriesValue.trim() === "") {
      setIndentNo(""); // Clear the indent number if no series is selected
      return;
    }
  
    const year = localStorage.getItem("Shortyear"); // Fetch Shortyear from localStorage
  
    if (!year) {
      console.error("Year is not available in localStorage.");
      setIndentNo(""); // Clear the indent number and notify the user
      return;
    }
  
    setLoading(true);
    try {
      // Use the selected series and the year from localStorage in the API request
      const response = await fetchNextCode(seriesValue, year);
      if (response && response.next_code) {
        setIndentNo(response.next_code); // Set the next_code in the indent number field
      } else {
        setIndentNo(""); // Clear if no code is returned
      }
    } catch (error) {
      console.error("Error fetching next code:", error);
      setIndentNo(""); // Clear in case of error
    } finally {
      setLoading(false);
    }
  };
  

  // Handle search and populate the supplier code


  const handleSelectSupplier = async () => {
    if (!supplierName) {
      alert("Please enter a supplier name.");
      return;
    }

    setLoading(true);
    try {
      const data = await fetchSupplierData(supplierName); // Fetch supplier data
      if (data && data.length > 0) {
        const supplier = data[0]; // Assuming the first result is the correct one
        setSupplierCode(supplier.number); // Set the supplier code
      } else {
        alert("Supplier not found.");
        setSupplierCode(""); // Clear the code if no supplier is found
      }
    } catch (error) {
      console.error("Error fetching supplier data:", error);
      alert("Error fetching supplier data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="NewPurchaseMaster">
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
                <div className="NewPurchse">
                  <div className="container-fluid">
                    <div className="NewPurchse-header mb-4 text-start">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <h5 className="header-title">New Order Purchase</h5>
                        </div>
                        <div className="col-md-1">
                          <label>PO Type:</label>
                          <select className="form-control">
                            <option value="">CLOSE</option>
                            <option value="option1">OPEN</option>
                          </select>
                        </div>

                        <div className="col-md-1">
                          <label>Series:</label>
                          <select
                            className="form-control"
                            value={selectedSeries}
                            onChange={handleSeriesChange} // Call the function on series change
                          >
                            <option value="select">select</option>
                            <option value="RM">RM</option>
                            <option value="CONSUMABLE">CONSUMABLE</option>
                            <option value="ASSET">ASSET</option>
                            <option value="SERVICE">SERVICE</option>
                          </select>
                        </div>

                        <div className="col-md-2">
                          <label>Indent No:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={indentNo}
                            readOnly // Make it read-only so the user can't edit it directly
                          />
                        </div>

                        <div className="col-md-1">
                          <label>Supplier:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={supplierName}
                            onChange={(e) => setSupplierName(e.target.value)} // Update supplier name
                            disabled={loading}
                          />
                        </div>
                        <div className="col-md-1">
                          <button
                            className="btn btn-primary mt-4"
                            onClick={handleSelectSupplier} // Trigger the search when clicked
                            disabled={loading}
                          >
                            {loading ? "Loading..." : "Select"}
                          </button>
                        </div>
                        <div className="col-md-1">
                          <label>Code:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={supplierCode}
                            disabled // Disable the input field for the code
                          />
                        </div>

                        <div className="col-md-1 text-start mt-4">
                          <i
                            style={{ padding: "5px" }}
                            className="fas fa-eye"
                          ></i>

                          <i
                            style={{ padding: "5px" }}
                            className="fas fa-bars"
                          ></i>
                        </div>

                        <div className="col-md-1 mt-4">
                          <button className="btn">Clear</button>
                        </div>
                        <div className="col-md-1 mt-4">
                          <button className="btn">PO List</button>
                        </div>
                      </div>
                    </div>
                    <div className="newpirchase-main">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-Item-Details-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Item-Details"
                            type="button"
                            role="tab"
                            aria-controls="pills-Item-Details"
                            aria-selected="true"
                          >
                            Item Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-GST-Details-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-GST-Details"
                            type="button"
                            role="tab"
                            aria-controls="pills-GST-Details"
                            aria-selected="false"
                          >
                            GST Details
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
                            Item Details Other
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-Schedule-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Schedule"
                            type="button"
                            role="tab"
                            aria-controls="pills-Schedule"
                            aria-selected="false"
                          >
                            Schedule Line
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-Ship-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Ship"
                            type="button"
                            role="tab"
                            aria-controls="pills-Ship"
                            aria-selected="false"
                          >
                            Ship To Add
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-PO-Info-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-PO-Info"
                            type="button"
                            role="tab"
                            aria-controls="pills-PO-Info"
                            aria-selected="false"
                          >
                            PO Info
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-Item-Details"
                          role="tabpanel"
                          aria-labelledby="pills-Item-Details-tab"
                          tabindex="0"
                        >
                          <ItemDetails />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-GST-Details"
                          role="tabpanel"
                          aria-labelledby="pills-GST-Details-tab"
                          tabindex="0"
                        >
                          <GSTDetails />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-contact"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                          tabindex="0"
                        >
                          <ItemOther />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-Schedule"
                          role="tabpanel"
                          aria-labelledby="pills-Schedule-tab"
                          tabindex="0"
                        >
                          <Schedule />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-Ship"
                          role="tabpanel"
                          aria-labelledby="pills-Ship-tab"
                          tabindex="0"
                        >
                          <Ship />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-PO-Info"
                          role="tabpanel"
                          aria-labelledby="pills-PO-Info-tab"
                          tabindex="0"
                        >
                          <Poinfo />
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

export default NewPurchaseOrder;
