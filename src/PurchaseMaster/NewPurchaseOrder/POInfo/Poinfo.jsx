import React, { useState ,useEffect} from "react";
import "./Poinfo.css";
import { FaPlus, FaSync, FaEdit, FaTrash } from "react-icons/fa";
import { getNextPoNumber , registerPurchaseOrder } from "../../../Service/PurchaseApi";
import { toast, ToastContainer } from "react-toastify";

const Poinfo = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
  
    useEffect(() => {
      // Get the current date and time
      const now = new Date();
      const date = now.toISOString().split('T')[0]; // Get the date in YYYY-MM-DD format
      const time = now.toTimeString().split(' ')[0].substring(0, 5); // Get the time in HH:MM format
  
      setCurrentDate(date);
      setCurrentTime(time);
    }, []);

  const [showCard, setShowCard] = useState(false);
  const handleAddClick = () => {
    setShowCard(true);
  };
  const handleRefreshClick = () => {
    console.log("Data refreshed");
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

  const [selectedSeries, setSelectedSeries] = useState("select");
  const [PoNo, setPoNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
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
  });

  const [errors, setErrors] = useState({});


  const year = localStorage.getItem("Shortyear");

  // Handle Series Change (Dropdown selection)
  const handleSeriesChange = async (e) => {
    const selectedValue = e.target.value;
    setSelectedSeries(selectedValue);

    if (selectedValue !== "select" && year) {
      setLoading(true);
      try {
        const nextPoNo = await getNextPoNumber(selectedValue, year);
        setPoNo(nextPoNo); // Set the generated PO number
      } catch (error) {
        console.error("Error fetching next code:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setPoNo(""); // Clear PoNo if no valid series is selected
    }
  };
  
  



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate required fields
    if (selectedSeries === "select") {
      setErrors({ ...errors, field: "PO No (field) is required" });
      return;
    }
  
    if (!formData.EnquiryNo) {
      setErrors({ ...errors, EnquiryNo: "Enquiry No is required" });
      return;
    }
  
    if (!PoNo) {
      setErrors({ ...errors, PoNo: "PO No is required" });
      return;
    }
  
    // Log the payload before sending it
    const payload = {
      field: selectedSeries,  // Selected value from dropdown
      PoNo: PoNo,  // PO number generated from API
      EnquiryNo: formData.EnquiryNo,  // Enquiry No entered by the user
    };
  
    console.log("Payload being sent:", payload);  // Log the payload
  
    try {
      // Send the request to the backend using the service
      const response = await registerPurchaseOrder(payload);
      console.log("Purchase order saved successfully", response);
      toast.success("PO info saved");
    } catch (error) {
      console.error("Error saving purchase order:", error);
      toast.error("Failed");
      setErrors({ ...errors, general: error.message });
    }
  };
  

  const handleClear = () => {
    setFormData({
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
    });
    setErrors({});
  };


  
  

  return (
    <div className="Poinfo">
      <ToastContainer />
      <div className="Poinfo1">
        <div className="container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="PoNo">PO No:</label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group mb-3">
                    <select
  className="form-control"
  value={selectedSeries}
  onChange={handleSeriesChange}
>
  <option value="select">Select</option>
  <option value="RM">RM</option>
  <option value="CONSUMABLE">CONSUMABLE</option>
  <option value="ASSET">ASSET</option>
  <option value="SERVICE">SERVICE</option>
</select>

{selectedSeries !== "select" && PoNo && (
  <input
    type="text"
    className="form-control mt-2"
    value={loading ? "Loading..." : PoNo}
    readOnly
  />
)}
                    </div>
                  </div>
                  {/* <div className="col-md-5">
                    <div className="form-group mb-3">
                      {selectedSeries && selectedSeries !== "select" && (
                        <div className="col-md-8">
                          {loading ? (
                            <input
                              type="text"
                              value={formData.PoNo}
                              className="form-control"
                              
                              readOnly
                            />
                          ) : (
                            <input
                           
                              type="text"
                              className="form-control"
                              value={indentNo}
                              readOnly
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div> */}
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="EnquiryNo">Enquiry No:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="EnquiryNo"
                        className="form-control"
                        placeholder="Enter Enquiry Number"
                        value={formData.EnquiryNo}
                        onChange={handleChange}
                      />
                      {errors.EnquiryNo && (
                        <div className="invalid-feedback">
                          {errors.EnquiryNo}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="QuotNo">Quot No/Ref:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="QuotNo"
                        className="form-control"
                        placeholder="Enter Quotation Number"
                        value={formData.QuotNo}
                        onChange={handleChange}
                      />
                      {errors.QuotNo && (
                        <div className="invalid-feedback">{errors.QuotNo}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="PaymentTerms">Payment Terms:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="PaymentTerms"
                        className="form-control"
                        placeholder="Enter Payment Terms"
                        value={formData.PaymentTerms}
                        onChange={handleChange}
                      />
                      {errors.PaymentTerms && (
                        <div className="invalid-feedback">
                          {errors.PaymentTerms}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="DeliveryDate">Delivery Date:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        id="DeliveryDate"
                        className="form-control"
                        value={formData.DeliveryDate}
                        onChange={handleChange}
                      />
                      {errors.DeliveryDate && (
                        <div className="invalid-feedback">
                          {errors.DeliveryDate}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="AMC_PO">AMC PO:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="AMC_PO"
                        className="form-control"
                        placeholder="Enter AMC PO"
                        value={formData.AMC_PO}
                        onChange={handleChange}
                      />
                      {errors.AMC_PO && (
                        <div className="invalid-feedback">{errors.AMC_PO}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="ModeOfShipment">Mode of Shipment:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="ModeOfShipment"
                        className="form-control"
                        placeholder="Enter Mode of Shipment"
                        value={formData.ModeOfShipment}
                        onChange={handleChange}
                      />
                      {errors.ModeOfShipment && (
                        <div className="invalid-feedback">
                          {errors.ModeOfShipment}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="PreparedBy">Prepared by:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="PreparedBy"
                        className="form-control"
                        placeholder="Enter Prepared by"
                        value={formData.PreparedBy}
                        onChange={handleChange}
                      />
                      {errors.PreparedBy && (
                        <div className="invalid-feedback">
                          {errors.PreparedBy}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="PoDate">
                        PO Date:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={currentDate}
                        onChange={(e) => setCurrentDate(e.target.value)}
                      />
                      {errors.PoDate && (
                        <div className="invalid-feedback">{errors.PoDate}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="EnquiryDate">
                        Enquiry Date:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        id="EnquiryDate"
                        className="form-control"
                        placeholder="Select Enquiry Date"
                        value={formData.EnquiryDate}
                        onChange={handleChange}
                      />
                      {errors.EnquiryDate && (
                        <div className="invalid-feedback">
                          {errors.EnquiryDate}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="QuotDate">
                        Quot Date:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        id="QuotDate"
                        className="form-control"
                        placeholder="Select Quot Date"
                        value={formData.QuotDate}
                        onChange={handleChange}
                      />
                      {errors.QuotDate && (
                        <div className="invalid-feedback">
                          {errors.QuotDate}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="PaymentRemark"
                      >
                        Payment Remark:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="PaymentRemark"
                        className="form-control"
                        placeholder="Enter Payment Remark"
                        value={formData.PaymentRemark}
                        onChange={handleChange}
                      />
                      {errors.PaymentRemark && (
                        <div className="invalid-feedback">
                          {errors.PaymentRemark}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="DeliveryType"
                      >
                        Delivery Type/Period:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="DeliveryType"
                        className="form-control"
                        placeholder="Enter Delivery Type/Period"
                        value={formData.DeliveryType}
                        onChange={handleChange}
                      />
                      {errors.DeliveryType && (
                        <div className="invalid-feedback">
                          {errors.DeliveryType}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="DeliveryNote"
                      >
                        Delivery/Note:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="DeliveryNote"
                        className="form-control"
                        placeholder="Enter Delivery Note"
                        value={formData.DeliveryNote}
                        onChange={handleChange}
                      />
                      {errors.DeliveryNote && (
                        <div className="invalid-feedback">
                          {errors.DeliveryNote}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="IndentNo">
                        Indent No/Note:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="IndentNo"
                        className="form-control"
                        placeholder="Enter Indent No/Note"
                        value={formData.IndentNo}
                        onChange={handleChange}
                      />
                      {errors.IndentNo && (
                        <div className="invalid-feedback">
                          {errors.IndentNo}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="ApprovedBy">
                        Approved by:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="ApprovedBy"
                        className="form-control"
                        placeholder="Enter Approved by"
                        value={formData.ApprovedBy}
                        onChange={handleChange}
                      />
                      {errors.ApprovedBy && (
                        <div className="invalid-feedback">
                          {errors.ApprovedBy}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="Time">
                        Time:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="Time"
                        className="form-control"
                        placeholder="Enter Time"
                      
                        
                      
          value={currentTime }
          onChange={(e) => setCurrentTime(e.target.value)}
                      />
                      
                      {errors.Time && (
                        <div className="invalid-feedback">{errors.Time}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="PoFor">
                        PO For:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="PoFor"
                        className="form-control"
                        placeholder="Enter PO For"
                        value={formData.PoFor}
                        onChange={handleChange}
                      />
                      {errors.PoFor && (
                        <div className="invalid-feedback">{errors.PoFor}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="Freight">
                        Freight:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="Freight"
                        className="form-control"
                        placeholder="Enter Freight"
                        value={formData.Freight}
                        onChange={handleChange}
                      />
                      {errors.Freight && (
                        <div className="invalid-feedback">{errors.Freight}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-1">
                    <button
                      type="button"
                      className="po1btn"
                      onClick={handleAddClick}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="col-md-1">
                    <button
                      type="button"
                      className="po1btn"
                      onClick={handleRefreshClick}
                    >
                      <FaSync />
                    </button>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="PoRateType">
                        PO Rate Type:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="PoRateType"
                        className="form-control"
                        placeholder="Enter PO Rate Type"
                        value={formData.PoRateType}
                        onChange={handleChange}
                      />
                      {errors.PoRateType && (
                        <div className="invalid-feedback">
                          {errors.PoRateType}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="ContactPerson"
                      >
                        Contact Person:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="ContactPerson"
                        className="form-control"
                        placeholder="Enter Contact Person"
                        value={formData.ContactPerson}
                        onChange={handleChange}
                      />
                      {errors.ContactPerson && (
                        <div className="invalid-feedback">
                          {errors.ContactPerson}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="PoValidityDate"
                      >
                        PO Validity Date:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        id="PoValidityDate"
                        className="form-control"
                        placeholder="Select PO Validity Date"
                        value={formData.PoValidityDate}
                        onChange={handleChange}
                      />
                      {errors.PoValidityDate && (
                        <div className="invalid-feedback">
                          {errors.PoValidityDate}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="PoEffectiveDate"
                      >
                        PO Effective Date:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        id="PoEffectiveDate"
                        className="form-control"
                        placeholder="Select PO Effective Date"
                        value={formData.PoEffectiveDate}
                        onChange={handleChange}
                      />
                      {errors.PoEffectiveDate && (
                        <div className="invalid-feedback">
                          {errors.PoEffectiveDate}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="TransportName"
                      >
                        Transport Name:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="TransportName"
                        className="form-control"
                        placeholder="Enter Transport Name"
                        value={formData.TransportName}
                        onChange={handleChange}
                      />
                      {errors.TransportName && (
                        <div className="invalid-feedback">
                          {errors.TransportName}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-md-4 mb-3">
                <label htmlFor="PoNote" className="form-label">
                  PO Note
                </label>
                <textarea
                  id="PoNote"
                  className="form-control"
                  rows="3"
                  placeholder="Enter PO Note"
                  value={formData.PoNote}
                  onChange={handleChange}
                ></textarea>
                {errors.PoNote && (
                  <div className="invalid-feedback">{errors.PoNote}</div>
                )}
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="InspectionTerms" className="form-label">
                  Inspection Terms
                </label>
                <textarea
                  id="InspectionTerms"
                  className="form-control"
                  rows="3"
                  placeholder="Enter Inspection Terms"
                  value={formData.InspectionTerms}
                  onChange={handleChange}
                ></textarea>
                {errors.InspectionTerms && (
                  <div className="invalid-feedback">
                    {errors.InspectionTerms}
                  </div>
                )}
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="PoValidity_WarrantyTerm" className="form-label">
                  PO Validity/Warranty Terms
                </label>
                <textarea
                  id="PoValidity_WarrantyTerm"
                  className="form-control"
                  rows="3"
                  placeholder="Enter PO Validity"
                  value={formData.PoValidity_WarrantyTerm}
                  onChange={handleChange}
                ></textarea>
                {errors.PoValidity_WarrantyTerm && (
                  <div className="invalid-feedback">
                    {errors.PoValidity_WarrantyTerm}
                  </div>
                )}
              </div>
            </div>
            <div className="row text-start">
              <div className="col-md-6 mb-3">
                <label htmlFor="PoSpecification" className="form-label">
                  PO Specification/Schedule/Documents Required/Transit Insurance
                </label>
                <textarea
                  id="PoSpecification"
                  className="form-control"
                  rows="3"
                  placeholder="Enter Specification/Schedule/Documents Required/Transit Insurance"
                  value={formData.PoSpecification}
                  onChange={handleChange}
                ></textarea>
                {errors.PoSpecification && (
                  <div className="invalid-feedback">
                    {errors.PoSpecification}
                  </div>
                )}
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="PF_Charges" className="form-label">
                  P&F Changes Note
                </label>
                <textarea
                  id="PF_Charges"
                  className="form-control"
                  rows="3"
                  placeholder="Enter P&F Changes Note"
                  value={formData.PF_Charges}
                  onChange={handleChange}
                ></textarea>
                {errors.PF_Charges && (
                  <div className="invalid-feedback">{errors.PF_Charges}</div>
                )}
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="GstTaxes" className="form-label">
                  GST (Taxes) Note/Other Charges
                </label>
                <textarea
                  id="GstTaxes"
                  className="form-control"
                  rows="3"
                  placeholder="Enter GST Note/Other Charges"
                  value={formData.GstTaxes}
                  onChange={handleChange}
                ></textarea>
                {errors.GstTaxes && (
                  <div className="invalid-feedback">{errors.GstTaxes}</div>
                )}
              </div>
            </div>
            <div className="row text-end">
              <div className="col-md-11">
                <button type="submit" className="pobtn">
                  Save Purchase Order
                </button>
              </div>
              <div className="col-md-1">
                <button type="button" className="pobtn" onClick={handleClear}>
                  Clear
                </button>
              </div>
            </div>
            {showCard && (
              <div
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="row">
                        <div className="col-md-12 text-start">
                          <h5 className="modal-title text-primary">
                            Freight Master
                          </h5>
                        </div>
                        {/* <div className="col-md-12 text-end">
                <button type="button" className="close" onClick={handleCloseCard}>
            <span aria-hidden="true">&times;</span>
          </button>
                </div> */}
                      </div>
                    </div>
                    <div className="modal-body">
                      {/* Form content */}
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="freightName">
                            Enter Freight Name:
                          </label>
                          <input
                            type="text"
                            id="freightName"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6">
                          <button type="button" className="btn mt-4">
                            Save
                          </button>
                        </div>
                      </div>
                      {/* Table content */}
                      <table className="table mt-4">
                        <thead>
                          <tr>
                            <th>Sr No.</th>
                            <th>Freight Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Example row */}
                          <tr>
                            <td>1</td>
                            <td>Example Freight</td>
                            <td>
                              <button className="btn">
                                <FaEdit />
                              </button>
                            </td>
                            <td>
                              <button className="btn">
                                <FaTrash />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn"
                        onClick={handleCloseCard}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Poinfo;
