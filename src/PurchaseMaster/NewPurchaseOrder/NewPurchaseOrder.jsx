import "./NewPurchaseOrder.css"
import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import NavBar from "../../NavBar/NavBar.js"
import SideNav from "../../SideNav/SideNav.js"
import ItemDetails from "./ItemDetails/ItemDetails.jsx"
import GSTDetails from "./GSTDetails/GSTDetails.jsx"
import ItemOther from "./ItemOther/ItemOther.jsx"
import Schedule from "./Schedule/Schedule.jsx"
import Ship from "./Ship/Ship.jsx"
import Poinfo from "./POInfo/Poinfo.jsx"
import { fetchSupplierData, fetchNextCode, registerPurchaseOrder } from "../../Service/PurchaseApi.jsx"
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const NewPurchaseOrder = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [selectedSeries, setSelectedSeries] = useState("") // To store selected series
  const [indentNo, setIndentNo] = useState("") // To store the generated indent number
  const [supplierName, setSupplierName] = useState("") // State for supplier name input
  const [supplierCode, setSupplierCode] = useState("") // State for supplier code input
  const [loading, setLoading] = useState(false) // State for loading indicator

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open")
    } else {
      document.body.classList.remove("side-nav-open")
    }
  }, [sideNavOpen])

  // Fetching the Shortyear from localStorage with a fallback
  const handleSeriesChange = async (e) => {
    const seriesValue = e.target.value
    setSelectedSeries(seriesValue)

    if (seriesValue.trim() === "") {
      setIndentNo("") // Clear the indent number if no series is selected
      return
    }

    const year = localStorage.getItem("Shortyear") // Fetch Shortyear from localStorage

    if (!year) {
      console.error("Year is not available in localStorage.")
      setIndentNo("") // Clear the indent number and notify the user
      return
    }

    setLoading(true)
    try {
      // Use the selected series and the year from localStorage in the API request
      const response = await fetchNextCode(seriesValue, year)
      if (response && response.next_code) {
        setIndentNo(response.next_code) // Set the next_code in the indent number field
      } else {
        setIndentNo("") // Clear if no code is returned
      }
    } catch (error) {
      console.error("Error fetching next code:", error)
      setIndentNo("") // Clear in case of error
    } finally {
      setLoading(false)
    }
  }

  const handleSelectSupplier = async () => {
    if (!supplierName) {
      alert("Please enter a supplier name.")
      return
    }

    setLoading(true)
    try {
      const data = await fetchSupplierData(supplierName) // Fetch supplier data
      if (data && data.length > 0) {
        const supplier = data[0] // Assuming the first result is the correct one
        setSupplierCode(supplier.number) // Set the supplier code
      } else {
        alert("Supplier not found.")
        setSupplierCode("") // Clear the code if no supplier is found
      }
    } catch (error) {
      console.error("Error fetching supplier data:", error)
      alert("Error fetching supplier data.")
    } finally {
      setLoading(false)
    }
  }

  const [activeTab, setActiveTab] = useState(0) // Tracks the current active tab
  const [formData, setFormData] = useState({
    Item_Detail_Enter: [],
    Gst_Details: [],
    Item_Details_Other: [],
    Schedule_Line: [],
    Ship_To_Add: [],
    field: "",
    PoNo: "",
    EnquiryNo: "",
    QuotNo: "",
    PaymentTerms: "",
    DeliveryDate: "",
    AMC_PO: "",
    ModeOfShipment: "",
    PreparedBy: "",
    PoNote: "",
    PoSpecification: "",
    PoDate: "",
    EnquiryDate: "",
    QuotDate: "",
    PaymentRemark: "",
    DeliveryType: "",
    DeliveryNote: "",
    IndentNo: "",
    ApprovedBy: "",
    InspectionTerms: "",
    PF_Charges: "",
    Time: "",
    PoFor: "",
    Freight: "",
    PoRateType: "",
    ContactPerson: "",
    PoValidityDate: "",
    PoEffectiveDate: "",
    TransportName: "",
    PoValidity_WarrantyTerm: "",
    GstTaxes: "",
  })

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }))
  }

  const validateCurrentTab = () => {
    // Example validation logic

    return true
  }

  const handleNext = () => {
    if (validateCurrentTab()) {
      setActiveTab((prevTab) => prevTab + 1)
    } else {
      alert("Please fill all required fields in the current tab.")
    }
  }

  const handlePrevious = () => {
    setActiveTab((prevTab) => prevTab - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // // Validate required fields

    console.log("submission",formData);
    
    if (!formData.field || !formData.PoNo || !formData.EnquiryNo) {
      toast.error("Field, PoNo, and EnquiryNo are required.");
      return;
    }

    

    try {
      const response = await registerPurchaseOrder(formData)
      console.log("Purchase order saved successfully", response)
      toast.success("Purchase order saved successfully")
    } catch (error) {
      console.error("Error saving purchase order:", error);
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error); // Show backend error
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  }

  return (
    <div className="NewPurchaseMaster">
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />

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
                          <select className="form-control" value={selectedSeries} onChange={handleSeriesChange}>
                            <option value="">Select</option>
                            <option value="RM">RM</option>
                            <option value="CONSUMABLE">CONSUMABLE</option>
                            <option value="ASSET">ASSET</option>
                            <option value="SERVICE">SERVICE</option>
                          </select>
                        </div>

                        <div className="col-md-2" style={{ marginTop: "20px" }}>
                          <input type="text" className="form-control" value={indentNo} readOnly />
                        </div>
                       

                        <div className="col-md-1">
                          <label>Supplier:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={supplierName}
                            onChange={(e) => setSupplierName(e.target.value)}
                            disabled={loading}
                          />
                        </div>
                        <div className="col-md-1">
                          <button className="btn btn-primary mt-4" onClick={handleSelectSupplier} disabled={loading}>
                            {loading ? "Loading..." : "Select"}
                          </button>
                        </div>
                        <div className="col-md-1">
                          <label>Code:</label>
                          <input type="text" className="form-control" value={supplierCode} disabled />
                        </div>

                        <div className="col-md-1 text-start mt-4">
                          <i style={{ padding: "5px" }} className="fas fa-eye"></i>

                          <i style={{ padding: "5px" }} className="fas fa-bars"></i>
                        </div>

                        <div className="col-md-1 mt-4">
                          <button className="btn">Clear</button>
                        </div>
                        <div className="col-md-1 mt-4">
                          <Link to="/PoList" className="btn">
                            PO List
                          </Link>
                        </div>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="new-purchase-main">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                          {[
                            "Item Details",
                            "GST Details",
                            "Item Details Other",
                            "Schedule Line",
                            "Ship To Add",
                            "PO Info",
                          ].map((tabName, index) => (
                            <li className="nav-item" role="presentation" key={index}>
                              <button
                                className={`nav-link ${activeTab === index ? "active" : ""}`}
                                type="button"
                                onClick={() => setActiveTab(index)}
                              >
                                {tabName}
                              </button>
                            </li>
                          ))}
                        </ul>

                        <div className="tab-content" id="pills-tabContent">
                          {activeTab === 0 && (
                            <div className="tab-pane fade show active" role="tabpanel">
                              <ItemDetails updateFormData={updateFormData} />
                            </div>
                          )}
                          {activeTab === 1 && (
                            <div className="tab-pane fade show active" role="tabpanel">
                              <GSTDetails updateFormData={updateFormData} />
                            </div>
                          )}
                          {activeTab === 2 && (
                            <div className="tab-pane fade show active" role="tabpanel">
                              <ItemOther updateFormData={updateFormData} />
                            </div>
                          )}
                          {activeTab === 3 && (
                            <div className="tab-pane fade show active" role="tabpanel">
                              <Schedule updateFormData={updateFormData} />
                            </div>
                          )}
                          {activeTab === 4 && (
                            <div className="tab-pane fade show active" role="tabpanel">
                              <Ship updateFormData={updateFormData} />
                            </div>
                          )}
                          {activeTab === 5 && (
                            <div className="tab-pane fade show active" role="tabpanel">
                              <Poinfo updateFormData={updateFormData} />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="button-group mt-3 text-end">
                        {activeTab > 0 && (
                          <button type="button" className="btn btn-secondary" onClick={handlePrevious}>
                            Previous
                          </button>
                        )}
                        {activeTab < 5 ? (
                          <button type="button" className="btn btn-primary" onClick={handleNext}>
                            Next
                          </button>
                        ) : (
                          <button type="submit" className="btn btn-success">
                            Save Purchase Order
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPurchaseOrder

