import { useState, useEffect } from "react"
import "./GStDetails.css"

const GSTDetails = ({ updateFormData = () => {}, itemDetails = [] }) => {
  const [gstDetails, setGstDetails] = useState([
    {
      ItemCode: "",
      HSN: "",
      Rate: "",
      Qty: "",
      SubTotal: "",
      Discount: "",
      Packing: "",
      Transport: "",
      ToolAmort: "",
      AssValue: "",
      CGST: "",
      SGST: "",
      IGST: "",
      Vat: "",
      Cess: "",
      Total: "",
      TOC_AssableValue: "",
      TOC_PackCharges: "",
      TOC_TransportCost: "",
      TOC_Insurance: "",
      TOC_InstallationCharges: "",
      TOC_CGST: "",
      TOC_SGST: "",
      TOC_IGST: "",
      TOC_VAT: "",
      TOC_CESS: "",
      TOC_TDS: "",
      GR_Total: "",
    },
  ])

  useEffect(() => {
    const calculatedGSTDetails = itemDetails.map((item) => ({
      ItemCode: item.Item,
      HSN: item.GST_Details?.HSN,
      Rate: item.Rate,
      Qty: item.Qty,
      SubTotal: (Number.parseFloat(item.Rate) * Number.parseFloat(item.Qty)).toFixed(2),
      Discount: item.Disc,
      CGST: item.GST_Details?.CGST?.Rate || 0,
      SGST: item.GST_Details?.SGST?.Rate || 0,
      IGST: item.GST_Details?.IGST?.Rate || 0,
      Total: item.GST_Details?.Total || 0,
    }))

    setGstDetails(calculatedGSTDetails.length > 0 ? calculatedGSTDetails : [{}])
    updateFormData("Gst_Details", calculatedGSTDetails)
  }, [itemDetails, updateFormData])

  useEffect(() => {
    const totals = gstDetails.reduce(
      (acc, item) => {
        acc.CGST += Number.parseFloat(item.CGST) || 0
        acc.SGST += Number.parseFloat(item.SGST) || 0
        acc.IGST += Number.parseFloat(item.IGST) || 0
        return acc
      },
      { CGST: 0, SGST: 0, IGST: 0 },
    )

    const grandTotal = gstDetails.reduce((total, item) => total + (Number.parseFloat(item.Total) || 0), 0)

    setGstDetails((prevDetails) => [
      {
        ...prevDetails[0],
        TOC_CGST: totals.CGST.toFixed(2),
        TOC_SGST: totals.SGST.toFixed(2),
        TOC_IGST: totals.IGST.toFixed(2),
        GR_Total: grandTotal.toFixed(2),
      },
      ...prevDetails.slice(1),
    ])
  }, [gstDetails])

  useEffect(() => {
    const fetchGSTDetails = async () => {
      try {
        const response = await fetch("http://13.201.136.34:8000/Purchase/get-item-details/")
        const data = await response.json()
        if (data && data.ItemDetails && Array.isArray(data.ItemDetails)) {
          const formattedGSTDetails = data.ItemDetails.map((item) => ({
            ItemCode: item.Item,
            HSN: item.GST_Details.HSN,
            Rate: item.GST_Details.Rate,
            Qty: item.GST_Details.Qty,
            SubTotal: item.GST_Details.SubTotal,
            Discount: item.GST_Details.Disc,
            Packing: item.GST_Details.Packing,
            Transport: item.GST_Details.Transport,
            TotalAmount: item.GST_Details.TotalAmount,
            CGST: item.GST_Details.CGST.Rate,
            SGST: item.GST_Details.SGST.Rate,
            IGST: item.GST_Details.IGST.Rate,
            Vat: item.GST_Details.Vat.Rate,
            Cess: item.GST_Details.Cess.Rate,
            Total: item.GST_Details.Total,
          }))
          setGstDetails(formattedGSTDetails)
          updateFormData("Gst_Details", formattedGSTDetails)
        }
      } catch (error) {
        console.error("Error fetching GST details:", error)
      }
    }

    fetchGSTDetails()
  }, [updateFormData])

  const handleInputChange = (index, field, value) => {
    const updatedDetails = [...gstDetails]
    if (!updatedDetails[index]) {
      updatedDetails[index] = {}
    }
    updatedDetails[index] = {
      ...updatedDetails[index],
      [field]: value,
    }
    setGstDetails(updatedDetails)
  }

  const addNewRow = () => {
    setGstDetails([
      ...gstDetails,
      {
        ItemCode: "",
        HSN: "",
        Rate: "",
        Qty: "",
        SubTotal: "",
        Discount: "",
        Packing: "",
        Transport: "",
        ToolAmort: "",
        AssValue: "",
        CGST: "",
        SGST: "",
        IGST: "",
        Vat: "",
        Cess: "",
        Total: "",
        TOC_AssableValue: "",
        TOC_PackCharges: "",
        TOC_TransportCost: "",
        TOC_Insurance: "",
        TOC_InstallationCharges: "",
        TOC_CGST: "",
        TOC_SGST: "",
        TOC_IGST: "",
        TOC_VAT: "",
        TOC_CESS: "",
        TOC_TDS: "",
        GR_Total: "",
      },
    ])
  }

  return (
    <div className="GStDetails">
      <style jsx>{`
        .scrollable-table-container {
          overflow-x: auto;
          max-width: 100%;
        }
        .narrow-input {
          max-width: 100px;
        }
      `}</style>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="scrollable-table-container">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sr.</th>
                    <th>Item Code</th>
                    <th>HSN</th>
                    <th>Rate</th>
                    <th>Qty</th>
                    <th>Sub Total</th>
                    <th>Discount</th>
                    <th>Packing</th>
                    <th>Transport</th>
                    <th>Tool Amort</th>
                    <th>Ass Value</th>
                    <th>CGST</th>
                    <th>SGST</th>
                    <th>IGST</th>
                    <th>Vat</th>
                    <th>Cess</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {gstDetails.map((detail, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          type="text"
                          className="form-control narrow-input"
                          value={detail.ItemCode}
                          onChange={(e) => handleInputChange(index, "ItemCode", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control narrow-input"
                          value={detail.HSN}
                          onChange={(e) => handleInputChange(index, "HSN", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.Rate}
                          onChange={(e) => handleInputChange(index, "Rate", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.Qty}
                          onChange={(e) => handleInputChange(index, "Qty", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.SubTotal}
                          onChange={(e) => handleInputChange(index, "SubTotal", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.Discount}
                          onChange={(e) => handleInputChange(index, "Discount", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.Packing}
                          onChange={(e) => handleInputChange(index, "Packing", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.Transport}
                          onChange={(e) => handleInputChange(index, "Transport", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.ToolAmort}
                          onChange={(e) => handleInputChange(index, "ToolAmort", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.AssValue}
                          onChange={(e) => handleInputChange(index, "AssValue", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.CGST}
                          onChange={(e) => handleInputChange(index, "CGST", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.SGST}
                          onChange={(e) => handleInputChange(index, "SGST", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.IGST}
                          onChange={(e) => handleInputChange(index, "IGST", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.Vat}
                          onChange={(e) => handleInputChange(index, "Vat", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.Cess}
                          onChange={(e) => handleInputChange(index, "Cess", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control narrow-input"
                          value={detail.Total}
                          onChange={(e) => handleInputChange(index, "Total", e.target.value)}
                        />
                      </td>
                      <td>
                        <button className="btn" onClick={addNewRow}>
                          Add New Row
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="gsttable">
        <div className="scrollable-table-container">
          <table className="table table-bordered">
            <tbody>
              {gstDetails.length > 0 ? (
                <>
                  <tr>
                    <td>TDC Assable Value:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].TOC_AssableValue || ""}
                        onChange={(e) => handleInputChange(0, "TOC_AssableValue", e.target.value)}
                      />
                    </td>
                    <td>CGST:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].TOC_CGST || ""}
                        readOnly
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="packForward">Pack. & Fwrd. Charges:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].TOC_PackCharges || ""}
                        onChange={(e) => handleInputChange(0, "TOC_PackCharges", e.target.value)}
                      />
                    </td>
                    <td>SGST:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].TOC_SGST || ""}
                        readOnly
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="transportCharges">Transport Charges:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].TOC_TransportCost || ""}
                        onChange={(e) => handleInputChange(0, "TOC_TransportCost", e.target.value)}
                      />
                    </td>
                    <td>IGST:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].TOC_IGST || ""}
                        readOnly
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="insurance">Insurance:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].TOC_Insurance || ""}
                        onChange={(e) => handleInputChange(0, "TOC_Insurance", e.target.value)}
                      />
                    </td>
                    <td>VAT:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].TOC_VAT || ""}
                        onChange={(e) => handleInputChange(0, "TOC_VAT", e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="TOC_InstallationCharges">Installation Charges:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].TOC_InstallationCharges || ""}
                        onChange={(e) => handleInputChange(0, "TOC_InstallationCharges", e.target.value)}
                      />
                    </td>
                    <td>CESS:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].TOC_CESS || ""}
                        onChange={(e) => handleInputChange(0, "TOC_CESS", e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="TOC_TDS">TDS:</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].TOC_TDS || ""}
                        onChange={(e) => handleInputChange(0, "TOC_TDS", e.target.value)}
                      />
                    </td>
                    <td>GRAND TOTAL:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control narrow-input"
                        value={gstDetails[0].GR_Total || ""}
                        readOnly
                      />
                    </td>
                  </tr>
                </>
              ) : (
                <tr>
                  <td colSpan="4">No GST details available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default GSTDetails

