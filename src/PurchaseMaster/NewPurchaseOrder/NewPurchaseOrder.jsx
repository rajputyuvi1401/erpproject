import "./NewPurchaseOrder.css"
import { useState, useEffect } from "react"
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
import { useCallback } from "react"

const NewPurchaseOrder = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [selectedSeries, setSelectedSeries] = useState("")
  const [indentNo, setIndentNo] = useState("")
  const [supplierName, setSupplierName] = useState("")
  const [supplierCode, setSupplierCode] = useState("")
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [supplierData, setSupplierData] = useState(null);


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

  const handleSeriesChange = async (e) => {
    const seriesValue = e.target.value
    setSelectedSeries(seriesValue)
    setFormData((prevData) => ({ ...prevData, field: seriesValue }))

    if (seriesValue.trim() === "") {
      setIndentNo("")
      setFormData((prevData) => ({ ...prevData, PoNo: "" }))
      return
    }

    const year = localStorage.getItem("Shortyear")

    if (!year) {
      console.error("Year is not available in localStorage.")
      setIndentNo("")
      setFormData((prevData) => ({ ...prevData, PoNo: "" }))
      return
    }

    setLoading(true)
    try {
      const response = await fetchNextCode(seriesValue, year)
      if (response && response.next_code) {
        setIndentNo(response.next_code)
        setFormData((prevData) => ({ ...prevData, PoNo: response.next_code }))
      } else {
        setIndentNo("")
        setFormData((prevData) => ({ ...prevData, PoNo: "" }))
      }
    } catch (error) {
      console.error("Error fetching next code:", error)
      setIndentNo("")
      setFormData((prevData) => ({ ...prevData, PoNo: "" }))
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
      const data = await fetchSupplierData(supplierName)
      if (data && data.length > 0) {
        const supplier = data[0]
        setSupplierCode(supplier.number)
        setSupplierData(supplier)
        setFormData((prevData) => ({
          ...prevData,
          PaymentTerms: supplier.Payment_Term,
        }))
      } else {
        alert("Supplier not found.")
        setSupplierCode("")
        setSupplierData(null)
      }
    } catch (error) {
      console.error("Error fetching supplier data:", error)
      alert("Error fetching supplier data.")
    } finally {
      setLoading(false)
    }
  }

  const [activeTab, setActiveTab] = useState(0)
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

  const updateFormData = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  const validateCurrentTab = () => {
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

    if (!formData.field || !formData.PoNo || !formData.EnquiryNo) {
      toast.error("Field, PoNo, and EnquiryNo are required.")
      return
    }

    const formattedData = {
      ...formData,
    Schedule_Line: formData.Schedule_Line.map((item) => ({
      ...item,
      ItemCode: item.ItemCode ? item.ItemCode.substring(0, 30).trim() : "", // 🔹 Ensure max 30 characters
    })),
      Item_Detail_Enter: formData.Item_Detail_Enter.map(item => ({
        ...item,
        Item: (item.Item || "").substring(0, 30).trim(),
        Rate: Number(item.Rate) || 0,
        Qty: Number(item.Qty) || 0,
        Disc: Number(item.Disc) || 0,
        Particular: item.Particular === "I" ? "Item" : item.Particular,
      })),
      Gst_Details: formData.Gst_Details.map(gst => ({
        ...gst,
        ItemCode: (gst.ItemCode || "").substring(0, 30).trim(),
        Rate: Number(gst.Rate) || 0,
        Qty: Number(gst.Qty) || 0,
        CGST: Number(gst.CGST) || 0,
        SGST: Number(gst.SGST) || 0,
        IGST: Number(gst.IGST) || 0,
      })),
    };
    

    try {
      const response = await registerPurchaseOrder(formattedData)
      console.log("Purchase order saved successfully", response)
      toast.success("Purchase order saved successfully")
    } catch (error) {
      console.error("Error saving purchase order:", error)
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error)
      } else {
        toast.error("An unexpected error occurred.")
      }
    }
  }

  return (
    <div className="NewPurchaseMaster">
      <ToastContainer className="newpurchase" />
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
                              <ItemDetails updateFormData={updateFormData} supplierCode={supplierCode} />
                            </div>
                          )}
                          {activeTab === 1 && (
                            <div className="tab-pane fade show active" role="tabpanel">
                              <GSTDetails updateFormData={updateFormData} itemDetails={formData.Item_Detail_Enter} />
                            </div>
                          )}
                          {activeTab === 2 && (
                            <div className="tab-pane fade show active" role="tabpanel">
                             <ItemOther updateFormData={updateFormData} itemDetails={formData.Item_Detail_Enter} />

                            </div>
                          )}
                          {activeTab === 3 && (
                            <div className="tab-pane fade show active" role="tabpanel">
                              <Schedule updateFormData={updateFormData} itemDetails={formData.Item_Detail_Enter} />

                            </div>
                          )}
                          {activeTab === 4 && (
                            <div className="tab-pane fade show active" role="tabpanel">
                              <Ship updateFormData={updateFormData} />
                            </div>
                          )}
                          {activeTab === 5 && (
                            <div className="tab-pane fade show active" role="tabpanel">
                              <Poinfo
                                updateFormData={updateFormData}
                                paymentTermsFromSupplier={formData.PaymentTerms}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="row"></div>
                      <div className="button-group mt-3 text-end">
                        {activeTab > 0 && (
                          <button type="button" className="btn" onClick={handlePrevious}>
                            Previous
                          </button>
                        )}
                        {activeTab < 5 ? (
                          <button type="button" className="btn" onClick={handleNext}>
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

