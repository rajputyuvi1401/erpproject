import "./NewJobworkPurchase.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import JobWorkPoinfo from "./JobWorkPoinfo/JobWorkPoinfo.jsx";
import JobWorkitemdetail from "./JobWorkitemdetail/JobWorkitemdetail.jsx";
import JobWorkgstdetail from "./JobWorkgstdetail/JobWorkgstdetail.jsx";
import JobWorkschedule from "./JobWorkschedule/JobWorkschedule.jsx";
import JobWorkShiptoadd from "./JobWorkShiptoadd/JobWorkShiptoadd.jsx";
import { fetchNextJobWorkNumber ,fetchSupplierData} from "../../Service/PurchaseApi.jsx";
import { Link } from "react-router-dom";
const NewJobworkPurchase = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => setSideNavOpen((prev) => !prev);
  

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  const [selectedSeries, setSelectedSeries] = useState("");
  const [indentNo, setIndentNo] = useState("");
  const [, setLoading] = useState(false);

  // Fetch Shortyear from localStorage
  const year = localStorage.getItem("Shortyear");

  // Handle series change
  const handleSeriesChange = async (e) => {
    const seriesValue = e.target.value;
    setSelectedSeries(seriesValue);

    if (seriesValue.trim() === "") {
      setIndentNo(""); // Clear the indent number if no series is selected
      return;
    }

    if (!year) {
      console.error("Year is not available in localStorage.");
      setIndentNo(""); // Clear the indent number and notify the user
      return;
    }

    setLoading(true);
    try {
      // Fetch the next job work number from the API
      const response = await fetchNextJobWorkNumber(year);
      if (response && response.next_PoNo) {
        setIndentNo(response.next_PoNo); // Set the next PoNo as the indent number
      } else {
        setIndentNo(""); // Clear if no code is returned
      }
    } catch (error) {
      console.error("Error fetching next job work number:", error);
      setIndentNo(""); // Clear in case of error
    } finally {
      setLoading(false);
    }
  };

 const [supplierName, setSupplierName] = useState(""); // State for supplier name input
  const [supplierCode, setSupplierCode] = useState(""); // State for supplier code input
  
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
    <div className="NewJobworkMaster">
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
                <div className="NewJobwork">
                  <div className="container-fluid">
                  <div className="NewJobwork-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">New JW-PO</h5>
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
          onChange={handleSeriesChange}
        >
         <option value="select">Select</option>
          <option value="JOBWORK">JOBWORK</option>
          {/* Add other series options here if needed */}
        </select>
                        </div>
                        <div className="col-md-2" style={{marginTop:"20px"}}>
                        
                          <input
          type="text"
          className="form-control"
          value={indentNo}
          readOnly
        />
                        </div>
                        <div className="col-md-1">
                          <label>Supplier:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={supplierName}
                            onChange={(e) => setSupplierName(e.target.value)} // Update supplier name
                            
                          />
                        </div>
                        <div className="col-md-1">
                          <button
                            className="btn btn-primary mt-4"
                            onClick={handleSelectSupplier} // Trigger the search when clicked
                           
                          >
                            {"Select"}
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
                          <button className="btn newpurchase-btn">Clear</button>
                        </div>
                        <div className="col-md-1 mt-4">
                          <Link to="/JobworkList" className="btn newpurchase-btn">
                            PO List
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="newjobwork-main">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-PO-Info-tab-job"
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
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-Item-Details-tab-job"
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
                            id="pills-GST-Details-tab-job"
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
                            id="pills-Schedule-tab-job"
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
                            id="pills-Ship-tab-job"
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
                      </ul>

                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-PO-Info"
                          role="tabpanel"
                          aria-labelledby="pills-PO-Info-tab-job"
                          tabindex="0"
                        >
                          <JobWorkPoinfo />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-Item-Details"
                          role="tabpanel"
                          aria-labelledby="pills-Item-Details-tab-job"
                          tabindex="0"
                        >
                          <JobWorkitemdetail />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-GST-Details"
                          role="tabpanel"
                          aria-labelledby="pills-GST-Details-tab-job"
                          tabindex="0"
                        >
                          <JobWorkgstdetail />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-Schedule"
                          role="tabpanel"
                          aria-labelledby="pills-Schedule-tab-job"
                          tabindex="0"
                        >
                          <JobWorkschedule />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-Ship"
                          role="tabpanel"
                          aria-labelledby="pills-Ship-tab-job"
                          tabindex="0"
                        >
                          <JobWorkShiptoadd />
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

export default NewJobworkPurchase;
